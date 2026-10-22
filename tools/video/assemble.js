/* Turns a JSON array of {section, lesson} into the house format in content.js.
   Usage: node assemble.js pairs.json /path/to/content.js

   videoId and sourceEn come from the SECTION, never hardcoded: an earlier
   version had the first video it ever ran on baked in and silently stamped a
   second video's lessons with the first one's ID — four clips seeking to 22:30
   of a 14:57 video. A missing one stops the run rather than shipping
   undefined into the page. */
const fs = require('fs');

const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";

function prose(key, s, indent) {
  const pad = ' '.repeat(indent);
  if (String(s).length <= 68) return `${pad}${key}: ${q(s)},`;
  const parts = [];
  let cur = '';
  for (const w of String(s).split(' ')) {
    if ((cur + ' ' + w).trim().length > 66) { parts.push(cur.trim()); cur = w; }
    else cur = (cur + ' ' + w).trim();
  }
  if (cur) parts.push(cur.trim());
  return parts.map((p, i) => {
    const last = i === parts.length - 1;
    const text = q(p + (last ? '' : ' '));
    return i === 0 ? `${pad}${key}: ${text}` : `${pad}  + ${text}${last ? ',' : ''}`;
  }).join('\n');
}

function block({ section, lesson: L }) {
  if (!section.videoId || !section.sourceEn) {
    console.error('section ' + section.id + ' needs videoId and sourceEn');
    process.exit(1);
  }
  const o = ['  {'];
  o.push(`    id: ${q(L.id)},`);
  o.push(`    videoId: ${q(section.videoId)},`);
  o.push(`    start: ${section.start},`);
  o.push(`    end: ${section.end},`);
  o.push('');
  o.push(`    titleEn: ${q(L.titleEn)},`);
  o.push(`    titleZh: ${q(L.titleZh)},`);
  o.push(`    levelEn: ${q(L.levelEn)},`);
  o.push(`    levelZh: ${q(L.levelZh)},`);
  o.push(`    sourceEn: ${q(section.sourceEn)},`);
  /* The Chinese name of the talk belongs to the VIDEO, so it goes on the first
     lesson of the run and nowhere else; the clip list takes the first one it
     finds in the group. */
  if (section.videoZh) o.push(`    videoZh: ${q(section.videoZh)},`);
  o.push('');
  o.push(prose('aboutEn', L.aboutEn, 4));
  o.push(prose('aboutZh', L.aboutZh, 4));
  o.push('');
  o.push(prose('watchForEn', L.watchForEn, 4));
  o.push(prose('watchForZh', L.watchForZh, 4));
  o.push('');
  o.push('    lines: [');
  const w = Math.max(...L.lines.map((x) => String(x.t).length));
  for (const l of L.lines) {
    o.push(`      { t: ${String(l.t).padStart(w)}, en: ${q(l.en)},`);
    o.push(`        ${' '.repeat(w + 5)}zh: ${q(l.zh)} },`);
  }
  o.push('    ],');
  o.push('');
  o.push('    words: [');
  for (const x of L.words) {
    o.push(`      { t: ${x.t}, en: ${q(x.en)}, zh: ${q(x.zh)},`);
    o.push(prose('noteEn', x.noteEn, 8));
    o.push(prose('noteZh', x.noteZh, 8).replace(/,$/, ' },'));
  }
  o.push('    ],');
  o.push('');
  o.push('    questions: [');
  for (const x of L.questions) {
    o.push(`      { t: ${x.t}, en: ${q(x.en)},`);
    o.push(`        zh: ${q(x.zh)},`);
    o.push(prose('answerEn', x.answerEn, 8));
    o.push(prose('answerZh', x.answerZh, 8).replace(/,$/, ' },'));
  }
  o.push('    ],');
  o.push('');
  o.push('    tasks: [');
  for (const x of L.tasks) {
    o.push(prose('{ en', x.en, 6));
    o.push(prose('zh', x.zh, 8).replace(/,$/, ' },'));
  }
  o.push('    ],');
  o.push('  },');
  return o.join('\n');
}

const data = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const target = process.argv[3];
let src = fs.readFileSync(target, 'utf8');

const blocks = data
  .map((d) => '\n  /* ------------------------------------------------------------------ */\n' + block(d))
  .join('\n');

/* A new video's lessons go in as a block at the TOP, which is the rule the
   content.js header records: the clip list groups CONSECUTIVE lessons sharing
   a videoId, so each video's run has to stay unbroken. */
const marker = 'const LESSONS = [';
const at = src.indexOf(marker);
if (at === -1) { console.error('LESSONS array not found'); process.exit(1); }
const cut = at + marker.length;
fs.writeFileSync(target, src.slice(0, cut) + '\n' + blocks.trimEnd() + '\n' + src.slice(cut));
console.log('spliced ' + data.length + ' lessons');
