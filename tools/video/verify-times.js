/* Checks every transcript line's `t` against the real caption cues.

   Builds a word stream from the cue file with each word's time interpolated
   across its cue, walks a lesson's lines forward through it, and reports any
   line whose declared start is more than 1.5s from where its words are
   actually spoken. The page seeks to these numbers, so a wrong one sends a
   student to the wrong moment — and unlike prose or register, this is a fact a
   script can settle.

   Two things it learned the hard way. Captions write numbers as digits and the
   lessons spell them out, so both sides collapse to digits. And it scores every
   candidate rather than taking the first: taking the first made lines starting
   on a common word ("the", "or", "you're") latch onto an earlier occurrence
   and report a two-second drift that was not there. */
const fs = require('fs');

const UNITS = ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
  'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const TENS = { twenty:20, thirty:30, forty:40, fifty:50, sixty:60, seventy:70, eighty:80, ninety:90 };

function numbers(words) {
  const out = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (TENS[w] !== undefined) {
      const u = UNITS.indexOf(words[i + 1]);
      if (u > 0 && u < 10) { out.push(String(TENS[w] + u)); i++; continue; }
      out.push(String(TENS[w])); continue;
    }
    const u = UNITS.indexOf(w);
    out.push(u >= 0 ? String(u) : w);
  }
  return out;
}

function norm(s) {
  const plain = String(s).toLowerCase()
    .replace(/‘|’/g, "'")
    .replace(/\[music\]|\[clears throat\]/g, ' ')
    .replace(/[^a-z0-9'\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  /* U+2018 is an opening quote, not an apostrophe. Mapping it to ' left it
     glued to the front of the word, so a quoted line never matched its own
     cue. Apostrophes inside a word are kept; ones at either end are not. */
  const toks = plain.split(' ').map((w) => w.replace(/^'+|'+$/g, '')).filter(Boolean);
  return numbers(toks).join(' ');
}

const cues = fs.readFileSync(process.argv[2], 'utf8').trim().split('\n').map((l) => {
  const m = l.match(/^(\d+):(\d\d)\s+(.*)$/);
  return m ? { t: +m[1] * 60 + +m[2], text: m[3] } : null;
}).filter(Boolean);

/* "um", "uh" and "you know" are exactly what a lesson strips, so leaving them
   in the stream makes a correctly-cleaned line look like it skipped words. A
   cue reading "and then um you know we put them to bed" put three filler
   tokens between "then" and "we" — more than the skip window allows — and the
   line was reported missing when it was verbatim. */
const FILLER = new Set(['um', 'uh', 'er', 'erm']);
const dropFiller = (ws) => {
  const out = [];
  for (let i = 0; i < ws.length; i++) {
    if (FILLER.has(ws[i])) continue;
    if (ws[i] === 'you' && ws[i + 1] === 'know') { i++; continue; }
    out.push(ws[i]);
  }
  return out;
};

const stream = [];
cues.forEach((c, i) => {
  const words = dropFiller(norm(c.text).split(' ').filter(Boolean));
  const end = i + 1 < cues.length ? cues[i + 1].t : c.t + 3;
  const span = Math.max(0.1, end - c.t);
  words.forEach((w, j) => stream.push({ w, t: c.t + (span * j) / words.length }));
});

const lessons = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const TOL = 1.5;
let problems = 0;

for (const L of lessons) {
  let cursor = 0;
  const first = L.lines[0].t;
  while (cursor < stream.length && stream[cursor].t < first - 6) cursor++;

  const bad = [];
  for (const line of L.lines) {
    const want = dropFiller(norm(line.en).split(' ').filter(Boolean));
    let best = -1, bestScore = 0, bestSkips = Infinity;
    for (let p = cursor; p < Math.min(stream.length, cursor + 260); p++) {
      if (stream[p].w !== want[0]) continue;
      let hits = 1, skips = 0, k = p + 1;
      for (let q = 1; q < Math.min(want.length, 8); q++) {
        let found = false;
        for (let r = k; r < Math.min(stream.length, k + 3); r++) {
          if (stream[r].w === want[q]) { hits++; skips += r - k; k = r + 1; found = true; break; }
        }
        if (!found) break;
      }
      if (hits > bestScore || (hits === bestScore && skips < bestSkips)) {
        best = p; bestScore = hits; bestSkips = skips;
      }
      if (hits >= Math.min(want.length, 8) && skips === 0) break;
    }
    if (best === -1 || bestScore < Math.min(want.length, 3)) {
      bad.push({ t: line.t, en: line.en.slice(0, 46), why: 'not found in the cues' });
      continue;
    }
    const drift = line.t - stream[best].t;
    if (Math.abs(drift) > TOL) {
      bad.push({ t: line.t, en: line.en.slice(0, 46), spokenAt: +stream[best].t.toFixed(1), drift: +drift.toFixed(1) });
    }
    cursor = best + 1;
  }

  console.log(`  ${L.id.padEnd(18)} ${String(L.lines.length).padStart(2)} lines  ${bad.length ? bad.length + ' OFF' : 'all within ' + TOL + 's'}`);
  for (const b of bad) {
    problems++;
    console.log(`      t=${b.t}  "${b.en}"  ${b.why || 'spoken at ' + b.spokenAt + '  (drift ' + b.drift + 's)'}`);
  }
}
console.log(problems ? `\n${problems} to look at` : '\nevery line lands within 1.5s of when it is spoken');
