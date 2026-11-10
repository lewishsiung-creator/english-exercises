#!/usr/bin/env node
/* Checks the content of public/grammar-practice/ before it goes out.

     node tools/check_grammar_practice.js

   There is no build step on this site, so a slip in a content file shows up
   as a question that cannot be answered. This reads the chapter files the
   page reads, in the order index.html lists them, and fails on:

     - a block type the renderer does not know
     - an item with no 中譯
     - an mcq / match whose `answer` is not one of its options, or whose text
       does not have exactly one ___
     - a [[choice]] with no starred answer, or more than one
     - a {{blank}} that is empty
     - a word-box blank whose answer is not in the box
     - a rewrite whose answers do not begin with its `start`
     - a fix whose "correction" is the wrong sentence itself
     - two parts with the same id
     - an id a homework link cannot carry: anything but a-z, 0-9 and "-"
       (`_` and `.` are the link's own punctuation), or a point and a part
       sharing one id
*/

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dir = path.join(__dirname, '..', 'public', 'grammar-practice');
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const files = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]).filter((f) => f !== 'render.js');

const ctx = vm.createContext({});
vm.runInContext(files.map((f) => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n;\n') + '\n;globalThis.GP = GP;', ctx);
const GP = ctx.GP;

const KNOWN = ['lead', 'rule', 'cols', 'pairs', 'note', 'table', 'mcq', 'match', 'gap', 'blanks', 'cloze', 'fix', 'order', 'rewrite'];
const bad = [];
const count = {};
const ids = new Set();
let questions = 0;

function tokens(str, where) {
  const s = [].concat(str).join(' ');
  for (const m of s.matchAll(/\{\{(.*?)\}\}/g)) {
    questions++;
    if (!m[1].trim() || m[1].split('|').some((a) => !a.trim())) bad.push(`${where}: an empty blank`);
  }
  for (const m of s.matchAll(/\[\[(.*?)\]\]/g)) {
    questions++;
    const stars = m[1].split('|').filter((o) => o.endsWith('*')).length;
    if (stars !== 1) bad.push(`${where}: a choice needs exactly one starred answer — ${m[0]}`);
  }
  return s;
}

const linkable = (id) => /^[a-z0-9-]+$/.test(id);
const pointIds = new Set(GP.points.map((p) => p.id));

for (const p of GP.points) {
  if (!linkable(p.id)) bad.push(`point id cannot go in a homework link: ${p.id}`);
  for (const part of p.parts) {
    if (ids.has(part.id)) bad.push(`part id used twice: ${part.id}`);
    if (!linkable(part.id)) bad.push(`part id cannot go in a homework link: ${part.id}`);
    if (pointIds.has(part.id)) bad.push(`a point and a part share the id: ${part.id}`);
    ids.add(part.id);
    part.blocks.forEach((b, bi) => {
      const at = `${p.id}/${part.id}/${b.t}#${bi + 1}`;
      if (!KNOWN.includes(b.t)) { bad.push(`${at}: unknown block type`); return; }
      count[b.t] = (count[b.t] || 0) + 1;

      if (b.t === 'table') { b.rows.forEach((r, i) => (r.cells || r).forEach((c) => tokens(c, `${at} row ${i + 1}`))); return; }
      if (b.t === 'cloze') {
        b.lines.forEach((l, i) => { tokens(l.text, `${at} line ${i + 1}`); if (!l.zh) bad.push(`${at} line ${i + 1}: no zh`); });
        return;
      }
      if (!['mcq', 'match', 'gap', 'blanks', 'fix', 'order', 'rewrite'].includes(b.t)) return;

      b.items.forEach((it, i) => {
        const w = `${at} item ${i + 1}`;
        if (!it.zh) bad.push(`${w}: no zh`);
        if (b.t === 'blanks') { tokens(it.text, w); return; }
        questions++;
        if (b.t === 'mcq' || b.t === 'match') {
          const opts = b.t === 'match' ? b.options : it.options;
          if (it.text.split('___').length !== 2) bad.push(`${w}: needs exactly one ___`);
          if (!opts[it.answer]) bad.push(`${w}: answer is not one of the options`);
        }
        if (b.t === 'gap') {
          if (!/___/.test(it.text) || !it.answers || !it.answers.length) bad.push(`${w}: gap needs ___ and answers`);
          if (b.bank && !it.answers.every((a) => b.bank.includes(a))) bad.push(`${w}: answer is not in the word box`);
        }
        if (b.t === 'fix' && it.ok == null) {
          if (!it.bad || !it.answers || !it.answers.length) bad.push(`${w}: fix needs bad and answers`);
          else if (it.answers.includes(it.bad)) bad.push(`${w}: the correction is the wrong sentence`);
        }
        if (b.t === 'order' && (!it.chunks || it.chunks.length < 2)) bad.push(`${w}: order needs chunks`);
        if (b.t === 'rewrite' && !it.answers.every((a) => a.startsWith(it.start || ''))) bad.push(`${w}: an answer does not begin with start`);
      });

      if (b.t === 'match') {
        const used = b.items.map((it) => it.answer);
        if (new Set(used).size !== used.length) bad.push(`${at}: one option is the answer to two items`);
      }
    });
  }
}

console.log(`${files.join(', ')}`);
console.log(`${GP.points.length} points, ${ids.size} parts, ${questions} questions`);
console.log(Object.entries(count).map(([k, v]) => `${k} ${v}`).join(' · '));
if (bad.length) { console.error('\n' + bad.join('\n')); process.exit(1); }
console.log('all complete');
