/* Which long lines hold a pause the speaker actually made?
   Usage: node tools/video/check-splits.js public/video/content.js

   A line holding two complete sentences has a stop inside it. For shadowing
   that is the wrong unit — the student is asked to hold and return two
   thoughts where one was offered — so if the line is also long, splitting it
   is free: the break is already there in the audio.

   TWO TESTS, and both must pass before a line is listed.

   Over sixteen words. Most lines that hold two sentences are short — "Ask
   why." plus its answer, seven to ten words over two seconds — and splitting
   those makes three-word fragments, which is worse than leaving them.

   Each half at least five words. This is what keeps the Five Whys passage
   whole: "Why? Because each contractor is making different assumptions" is two
   sentences, but the halves belong together and splitting would leave a
   one-word line that teaches nothing.

   TO SPLIT ONE, the second half needs a timestamp. Interpolate across the
   line's own window by word position: a line at t running to the next line's
   t, broken after k of n words, puts the second half at roughly
   t + (next - t) * k / n. Then re-run verify-times.js, which will tell you
   whether the guess landed. */
const fs = require('fs');

const LESSONS = eval(fs.readFileSync(process.argv[2], 'utf8') + '\n;LESSONS');

const SENTENCE = /(?<=[.!?][”’"']?)\s+(?=[“‘"']?[A-Z])/;
const words = (s) => s.trim().split(/\s+/).length;

let holdsTwo = 0;
const picked = [];

for (const L of LESSONS) {
  L.lines.forEach((l, i) => {
    const parts = l.en.trim().split(SENTENCE);
    if (parts.length < 2) return;
    holdsTwo++;
    if (words(l.en) <= 16) return;
    if (!parts.every((p) => words(p) >= 5)) return;
    const end = i + 1 < L.lines.length ? L.lines[i + 1].t : L.end;
    picked.push({ clip: L.id, t: l.t, end, parts, n: words(l.en) });
  });
}

console.log(`${holdsTwo} lines hold more than one sentence; ${picked.length} are also long enough to be worth splitting\n`);

for (const p of picked) {
  console.log(`  ${p.clip}  t=${p.t} → ${p.end}  (${p.end - p.t}s, ${p.n}w)`);
  let seen = 0;
  for (const part of p.parts) {
    const at = seen === 0 ? p.t : Math.round(p.t + (p.end - p.t) * (seen / p.n));
    console.log(`      t≈${String(at).padEnd(5)} ${words(part)}w  ${part}`);
    seen += words(part);
  }
}
if (!picked.length) console.log('  nothing to split');

process.exitCode = picked.length ? 1 : 0;
