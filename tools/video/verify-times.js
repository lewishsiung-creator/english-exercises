/* Checks every transcript line's `t` against the real caption cues.

   Usage, while building a new video from a fresh paste:
     node tools/video/verify-times.js cues.txt drafts.json

   Usage, over everything already shipped:
     node tools/video/verify-times.js --all public/video/content.js

   In --all mode it groups the lessons by videoId, loads cues/<videoId>.txt for
   each, and names any video that has no cue file rather than passing it in
   silence — a video with nothing to check against is not a video that passed.

   HOW IT WORKS. A word stream is built from the cues with each word's time
   interpolated across its cue; a lesson's lines are then walked forward
   through that stream. The page seeks to these numbers, so a line more than
   1.5s from where its words are actually spoken sends a student to the wrong
   moment.

   FOUR THINGS IT LEARNED THE HARD WAY, each from a real false report:

   - Captions write numbers as digits and lessons spell them out, so both sides
     fold to digits.
   - "um", "uh" and "you know" are what a lesson legitimately strips, so they
     are dropped from both sides. A cue reading "and then um you know we put
     them to bed" put three filler tokens inside a line that was verbatim, and
     it came back reported as missing.
   - A typographic opening quote is not an apostrophe. Mapping it to one glued
     it to the front of the word, so a quoted line never matched its own cue.
   - It scores every candidate and takes the best, not the first. Taking the
     first made lines starting on a common word — "the", "or", "you're" —
     latch onto an earlier occurrence and report a two-second drift that was
     not there.

   A line it still cannot find is usually a deliberate caption fix: a misheard
   name put right, a word corrected. Look before changing anything. */
const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------- normalise

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
    .replace(/\[music\]|\[clears throat\]|\[laughter\]/g, ' ')
    .replace(/[^a-z0-9'\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const toks = plain.split(' ').map((w) => w.replace(/^'+|'+$/g, '')).filter(Boolean);
  return numbers(toks).join(' ');
}

const FILLER = new Set(['um', 'uh', 'er', 'erm']);
function dropFiller(ws) {
  const out = [];
  for (let i = 0; i < ws.length; i++) {
    if (FILLER.has(ws[i])) continue;
    if (ws[i] === 'you' && ws[i + 1] === 'know') { i++; continue; }
    out.push(ws[i]);
  }
  return out;
}

// ------------------------------------------------------------------- engine

function readCues(file) {
  return fs.readFileSync(file, 'utf8').trim().split('\n').map((l) => {
    const m = l.match(/^(\d+):(\d\d)\s+(.*)$/);
    return m ? { t: +m[1] * 60 + +m[2], text: m[3] } : null;
  }).filter(Boolean);
}

function buildStream(cues) {
  const stream = [];
  cues.forEach((c, i) => {
    const words = dropFiller(norm(c.text).split(' ').filter(Boolean));
    const end = i + 1 < cues.length ? cues[i + 1].t : c.t + 3;
    const span = Math.max(0.1, end - c.t);
    words.forEach((w, j) => stream.push({ w, t: c.t + (span * j) / words.length }));
  });
  return stream;
}

const TOL = 1.5;

function checkLesson(stream, L) {
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
  return bad;
}

function report(L, bad) {
  console.log(`  ${L.id.padEnd(20)} ${String(L.lines.length).padStart(2)} lines  ${bad.length ? bad.length + ' OFF' : 'all within ' + TOL + 's'}`);
  for (const b of bad) {
    console.log(`      t=${b.t}  "${b.en}"  ${b.why || 'spoken at ' + b.spokenAt + '  (drift ' + b.drift + 's)'}`);
  }
}

// -------------------------------------------------------------------- modes

const args = process.argv.slice(2);
let problems = 0;

if (args[0] === '--all') {
  const contentPath = args[1] || 'public/video/content.js';
  const LESSONS = eval(fs.readFileSync(contentPath, 'utf8') + '\n;LESSONS');
  const cueDir = path.join(__dirname, 'cues');

  const byVideo = new Map();
  for (const L of LESSONS) {
    if (!byVideo.has(L.videoId)) byVideo.set(L.videoId, []);
    byVideo.get(L.videoId).push(L);
  }

  const missing = [];
  for (const [videoId, lessons] of byVideo) {
    const file = path.join(cueDir, videoId + '.txt');
    if (!fs.existsSync(file)) {
      missing.push({ videoId, lessons: lessons.length, source: lessons[0].sourceEn });
      continue;
    }
    const stream = buildStream(readCues(file));
    console.log(`\n${videoId}  —  ${lessons[0].sourceEn}`);
    for (const L of lessons) {
      const bad = checkLesson(stream, L);
      problems += bad.length;
      report(L, bad);
    }
  }

  if (missing.length) {
    console.log('\nNO CUE FILE — these could not be checked:');
    for (const m of missing) console.log(`  ${m.videoId}  ${String(m.lessons).padStart(2)} clips   ${m.source}`);
    console.log('\nPaste each from YouTube into tools/video/cues/<videoId>.txt; see cues/README.md.');
  }
  const checked = [...byVideo.keys()].length - missing.length;
  console.log(`\n${checked} of ${byVideo.size} videos checked. ` +
    (problems ? `${problems} line(s) to look at.` : 'Every line checked lands within 1.5s.'));
  process.exitCode = problems ? 1 : 0;

} else {
  const stream = buildStream(readCues(args[0]));
  const lessons = JSON.parse(fs.readFileSync(args[1], 'utf8'));
  for (const L of lessons) {
    const bad = checkLesson(stream, L);
    problems += bad.length;
    report(L, bad);
  }
  console.log(problems ? `\n${problems} to look at` : '\nevery line lands within 1.5s of when it is spoken');
  process.exitCode = problems ? 1 : 0;
}
