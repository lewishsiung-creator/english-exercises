/* Can a student actually type these lines from hearing them?
   Usage: node tools/video/check-type.js public/video/content.js

   Listen and Type marks word by word, so anything in a line a student cannot
   get from the audio is marked against them for a reason that has nothing to
   do with listening. This asks each line what the page would ask of it.

   The normaliser below is a copy of typeWords() in public/video/render.js.
   KEEP THE TWO IN STEP — if that one changes and this one does not, this
   script will quietly report on a page that no longer exists.

   What it used to find, and what changed: sixteen lines carry a numeral, and
   before the page learned number words a student who heard "eleven thirty"
   and typed it was marked as missing two words on a line reading "11:30".
   Number words now fold to digits on both sides, so clock times, counts and
   percentages pass. What remains are the forms a units-and-tens table cannot
   reach — a year, a figure with a comma in it, "3x3" — and the page marks
   those NEITHER way, leaving them plain. This script lists them so the count
   stays visible. They are not bugs; they are the honest edge of the feature. */
const fs = require('fs');

const LESSONS = eval(fs.readFileSync(process.argv[2], 'utf8') + '\n;LESSONS');

// ---- copy of render.js typeWords(), minus the page plumbing
const NUM_UNIT = ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
  'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const NUM_TEN = { twenty:20, thirty:30, forty:40, fifty:50, sixty:60, seventy:70, eighty:80, ninety:90 };

function toDigits(ws) {
  const out = [];
  for (let i = 0; i < ws.length; i++) {
    const w = ws[i];
    if (NUM_TEN[w] !== undefined) {
      const u = NUM_UNIT.indexOf(ws[i + 1]);
      if (u > 0 && u < 10) { out.push(String(NUM_TEN[w] + u)); i++; continue; }
      out.push(String(NUM_TEN[w])); continue;
    }
    const u = NUM_UNIT.indexOf(w);
    out.push(u >= 0 ? String(u) : w);
  }
  return out;
}

function typeWords(s) {
  return toDigits(String(s).toLowerCase()
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[^a-z0-9'\s]/g, ' ')
    .replace(/\s+/g, ' ').trim()
    .split(' ').filter(Boolean));
}

const rows = [];
for (const L of LESSONS) for (const l of L.lines) rows.push({ clip: L.id, t: l.t, en: l.en });

/* Which numerals in the SOURCE text a student cannot reach by typing words.

   Not simply "contains a digit after normalising" — that flags every spelled
   out number, because folding "two" to "2" is the conversion working, and a
   student typing "two" lands on "2" as well. The question is whether a numeral
   written in the transcript has a spoken form the units-and-tens table can
   produce: "11" and "30" do, so "11:30" is fine; "2017", "000" from a figure
   with a comma, and anything with a letter stuck to it do not. */
const reachable = (tok) => /^\d{1,2}$/.test(tok) && String(Number(tok)) === tok;

const sourceNumerals = (en) => String(en).toLowerCase()
  .replace(/[\u2018\u2019\u02bc]/g, "'")
  .replace(/[^a-z0-9'\s]/g, ' ')
  .split(/\s+/).filter(Boolean)
  .filter((w) => /\d/.test(w) && !reachable(w));

const unjudgeable = rows
  .map((r) => ({ ...r, free: sourceNumerals(r.en) }))
  .filter((r) => r.free.length);

const symbols = rows.filter((r) => /[%×÷°&@#•]/.test(r.en));
const ellipsis = rows.filter((r) => /…|\.\.\./.test(r.en));
const long = rows.filter((r) => r.en.trim().split(/\s+/).length > 16);

console.log(`${rows.length} lines across ${LESSONS.length} clips\n`);
console.log(`  hold a token the page cannot judge   ${String(unjudgeable.length).padStart(3)}`);
console.log(`  hold a symbol                        ${String(symbols.length).padStart(3)}`);
console.log(`  hold an ellipsis standing for words  ${String(ellipsis.length).padStart(3)}`);
console.log(`  over 16 words to type from memory    ${String(long.length).padStart(3)}`);

if (unjudgeable.length) {
  console.log('\n--- marked neither way (left plain for the student) ---');
  for (const r of unjudgeable)
    console.log(`  ${r.clip.padEnd(20)} t=${String(r.t).padEnd(5)} [${r.free.join(' ')}]  ${r.en.slice(0, 52)}`);
}
if (symbols.length) {
  console.log('\n--- symbols: a student types the word, not the sign ---');
  for (const r of symbols) console.log(`  ${r.clip.padEnd(20)} t=${String(r.t).padEnd(5)} ${r.en.slice(0, 60)}`);
}
if (ellipsis.length) {
  console.log('\n--- an ellipsis standing in for words ---');
  for (const r of ellipsis) console.log(`  ${r.clip.padEnd(20)} t=${String(r.t).padEnd(5)} ${r.en.slice(0, 60)}`);
}
if (long.length) {
  console.log('\n--- long to type from one hearing ---');
  for (const r of long) console.log(`  ${r.clip.padEnd(20)} t=${String(r.t).padEnd(5)} ${r.en.slice(0, 60)}`);
}
