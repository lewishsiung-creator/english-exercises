/* Are the lines cut where the speaker actually paused?
   Usage: node tools/video/check-breaks.js public/video/content.js

   Shadowing plays ONE line, stops, and waits for the student to say it back,
   and Loop replays one line until it lands. Both make the line the unit of
   practice, so a line has to be a breath group — something a person can hold
   and return whole.

   The test that matters is the last word. A line finishing on "of", "the",
   "and" or "that" with no punctuation is a line the speaker did not stop at,
   and the student is being asked to repeat a fragment that cannot stand on its
   own. Everything else here is context for judging the ones it finds.

   Raw seconds is deliberately NOT a test. "Step two." in one second is
   correct, and a window that looks tight for its word count usually means the
   speaker is going fast rather than that a timestamp is wrong — see the note
   on the discarded pace metric in README.md before building that again. */
const fs = require('fs');

const LESSONS = eval(fs.readFileSync(process.argv[2], 'utf8') + '\n;LESSONS');

/* Words a sentence does not stop on. */
const WEAK = new Set(`a an the of to in on at for with from by about into over than
and but or so because that which who when while if as nor yet
is are was were be been being am have has had do does did
will would can could shall should may might must
my your his her its our their this these those
not no up out off down`.split(/\s+/));

const ENDS_CLEAN = /[.!?,;:—…"'”’)]$/;
const bare = (w) => w.toLowerCase().replace(/[^a-z']/g, '');

const rows = [];
for (const L of LESSONS) {
  L.lines.forEach((ln, i) => {
    const end = i + 1 < L.lines.length ? L.lines[i + 1].t : L.end;
    const words = ln.en.trim().split(/\s+/);
    rows.push({
      clip: L.id, t: ln.t, en: ln.en,
      n: words.length,
      secs: +(end - ln.t).toFixed(1),
      midPhrase: WEAK.has(bare(words[words.length - 1])) && !ENDS_CLEAN.test(ln.en.trim()),
    });
  });
}

const cut = rows.filter((r) => r.midPhrase);
const longW = rows.filter((r) => r.n > 16);
const longS = rows.filter((r) => r.secs > 6);
const pct = (n) => (100 * n / rows.length).toFixed(1) + '%';

console.log(`${rows.length} lines across ${LESSONS.length} clips\n`);
console.log(`  cut mid-phrase   ${String(cut.length).padStart(4)}   ${pct(cut.length)}   <- the one that matters`);
console.log(`  over 16 words    ${String(longW.length).padStart(4)}   ${pct(longW.length)}`);
console.log(`  over 6 seconds   ${String(longS.length).padStart(4)}   ${pct(longS.length)}`);

if (cut.length) {
  console.log('\n--- every line cut mid-phrase ---');
  for (const r of cut) {
    const tail = r.en.split(/\s+/).slice(-7).join(' ');
    console.log(`  ${r.clip.padEnd(20)} t=${String(r.t).padEnd(5)} …${tail}`);
  }
  console.log('\nMerge each with the half that follows it, or move the break to the');
  console.log('nearest punctuation. Check first that no card or question is anchored');
  console.log('to the line you are about to remove.');
}

if (longW.length) {
  console.log('\n--- lines over 16 words (hard to hold, worth a look) ---');
  for (const r of longW) console.log(`  ${r.clip.padEnd(20)} t=${String(r.t).padEnd(5)} ${r.n}w  ${r.en.slice(0, 56)}`);
}
if (longS.length) {
  console.log('\n--- lines over 6 seconds ---');
  for (const r of longS) console.log(`  ${r.clip.padEnd(20)} t=${String(r.t).padEnd(5)} ${r.secs}s  ${r.en.slice(0, 56)}`);
}

process.exitCode = cut.length ? 1 : 0;
