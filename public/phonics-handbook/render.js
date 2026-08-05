/* Renders SECTIONS (content.js) and wires up the handbook.

   House rules, inherited from Sound Lab next door:

   - Audio first. Every English word on the page — in a chip, in a table, in
     the middle of a Chinese sentence — speaks when tapped. A sound written
     on its own (sh, bl, -tion) speaks its cue from the CUES table, not its
     letter names.
   - No failure states. In the cutting game a wrong cut wobbles and waits;
     only right cuts stay, and a fully cut word pulls apart and says itself.
     Nothing is scored.
   - Quiet teacher tools. 檢測模式 lives in the 👩‍🏫 panel: while it is on,
     tapping a word makes a mark instead of a sound — because a diagnostic
     read-aloud is spoiled by hearing the word first. Marks are kept in
     localStorage so they survive to the end of the lesson, and nothing else
     is saved except the voice and speed. */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

/* ==================== inline text ==================== */

/* Wrap every run of English letters in a tappable token, escaping the text
   around it. Done on the raw string, before any HTML exists, so the token
   regex can never bite into a tag. */
function toks(s) {
  let out = '';
  let last = 0;
  const re = /[A-Za-z][A-Za-z'’-]*/g;
  let m;
  while ((m = re.exec(s))) {
    out += esc(s.slice(last, m.index));
    out += `<button class="tok" type="button">${esc(m[0])}</button>`;
    last = m.index + m[0].length;
  }
  return out + esc(s.slice(last));
}

/* **bold** on top of the tokens. Split first so the marker never reaches
   the token pass. */
function inline(s) {
  return String(s).split('**')
    .map((seg, i) => (i % 2 ? `<b>${toks(seg)}</b>` : toks(seg)))
    .join('');
}

/* ==================== blocks ==================== */

/* The picture for a word, if PICS grants it one. */
function pic(word) {
  return PICS[String(word).toLowerCase()] || '';
}

/* A word followed by its picture: "cat 🐱", or just "cat". */
function withPic(word) {
  const e = pic(word);
  return esc(word) + (e ? ` <span class="pic">${e}</span>` : '');
}

function chipHTML(item) {
  const c = typeof item === 'string' ? { w: item } : item;
  const egs = c.egs || (c.eg ? [c.eg] : []);
  const say = c.say || '';
  /* A sound card's picture belongs to its example word; a word chip's to
     the word itself. */
  const wordLine = egs.length ? esc(c.w) : withPic(c.w);
  return `
    <button class="chip" type="button" data-w="${esc(c.w)}"
      ${say ? `data-say="${esc(say)}"` : ''}
      ${egs.length ? `data-egs="${esc(egs.join('|'))}"` : ''}>
      <span class="chip-w">${wordLine}</span>
      ${egs.length ? `<span class="chip-eg">${egs.map(withPic).join('・')}</span>` : ''}
      ${c.note ? `<span class="chip-note">${esc(c.note)}</span>` : ''}
    </button>`;
}

/* The cutting game. Letters with a tappable gap between each pair; the
   correct gaps come from the hyphens in the data. */
function splitHTML(s) {
  const chunks = s.split('-');
  const word = chunks.join('');
  const cuts = [];
  let acc = 0;
  for (let i = 0; i < chunks.length - 1; i++) { acc += chunks[i].length; cuts.push(acc); }

  let inner = '';
  for (let i = 0; i < word.length; i++) {
    if (i > 0) inner += `<button class="gap" type="button" data-g="${i}" aria-label="在第 ${i} 個字母後面切一刀"></button>`;
    inner += `<span class="lt">${esc(word[i])}</span>`;
  }
  return `
    <div class="cut" data-w="${esc(word)}" data-cuts="${cuts.join(',')}">
      <button class="cut-say" type="button" data-w="${esc(word)}" aria-label="聽這個字">🔊</button>
      <span class="cut-word">${inner}</span>
      <span class="cut-tick" aria-hidden="true">✓</span>
    </div>`;
}

function exHTML(b) {
  const syll = b.s.split('-');
  const e = pic(b.w);
  return `
    <div class="ex">
      ${e ? `<span class="ex-pic">${e}</span>` : ''}
      <button class="ex-word tok" type="button">${esc(b.w)}</button>
      <span class="ex-arrow">→</span>
      <button class="ex-syll" type="button" data-w="${esc(b.w)}">
        ${syll.map((c) => `<span>${esc(c)}</span>`).join('<i>・</i>')}
      </button>
    </div>`;
}

const BLOCKS = {
  p: (b) => `<p class="para">${inline(b.text)}</p>`,

  demo: (b) => `<p class="demo">${inline(b.text)}</p>`,

  goals: (b) => `
    <div class="goals">
      <p class="goals-head">◆ 學習目標</p>
      <ol>${b.items.map((i) => `<li>${inline(i)}</li>`).join('')}</ol>
    </div>`,

  h3: (b) => `<h3 class="h3">${inline(b.text)}</h3>`,
  h4: (b) => `<h4 class="h4">${inline(b.text)}</h4>`,

  note: (b) => {
    const kinds = { tip: ['💡', '小叮嚀'], think: ['🤔', '想一想'], try: ['✋', '試一試'] };
    const [icon, name] = kinds[b.kind] || kinds.tip;
    return `
      <aside class="note note-${b.kind}">
        <p class="note-head"><span class="note-icon">${icon}</span>${esc(b.title || name)}</p>
        ${b.lines.map((l) => `<p class="note-line">${inline(l)}</p>`).join('')}
      </aside>`;
  },

  list: (b) => `
    <ol class="biglist">${b.items.map((i) => `<li>${inline(i)}</li>`).join('')}</ol>`,

  chips: (b) => `
    <div class="chips" ${b.label ? `data-label="${esc(b.label)}"` : ''}>
      ${b.label ? `<p class="chips-label">${inline(b.label)}</p>` : ''}
      <div class="chips-row">${b.words.map(chipHTML).join('')}</div>
    </div>`,

  pairs: (b) => `
    <div class="pairs">
      ${b.items.map(([a, z]) => `
        <div class="pairline">
          <button class="pword" type="button" data-w="${esc(a)}">${withPic(a)}</button>
          <span class="pair-arrow">→</span>
          <button class="pword pword-after" type="button" data-w="${esc(z)}">${withPic(z)}</button>
        </div>`).join('')}
    </div>`,

  table: (b) => `
    <div class="table-wrap">
      <table class="tbl">
        <thead><tr>${b.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
        <tbody>
          ${b.rows.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    </div>`,

  ex: exHTML,

  split: (b) => `<div class="cuts">${b.words.map(splitHTML).join('')}</div>`,

  parts: (b) => `
    <div class="morphs">
      ${b.items.map((it) => `
        <div class="morph">
          <button class="morph-word" type="button" data-w="${esc(it.w)}" aria-expanded="false">
            ${esc(it.w)}<span class="morph-hint">拆</span>
          </button>
          <div class="morph-body" hidden>
            <div class="morph-parts">
              ${it.parts.map(([m, g]) => `
                <span class="mp"><b>${esc(m)}</b><i>${esc(g)}</i></span>`).join('<span class="mp-plus">＋</span>')}
            </div>
            <p class="morph-zh">→　${esc(it.zh)}</p>
          </div>
        </div>`).join('')}
    </div>`,

  family: (b) => `
    <div class="families">
      ${b.items.map((f) => `
        <div class="fam">
          <p class="fam-head">
            <button class="fam-root" type="button" data-w="${esc(f.root)}">${esc(f.root)}</button>
            <span class="fam-gloss">${esc(f.gloss)}${pic(f.root) ? ` <span class="pic">${pic(f.root)}</span>` : ''}</span>
          </p>
          <div class="chips-row">${f.words.map(chipHTML).join('')}</div>
        </div>`).join('')}
    </div>`,

  kicker: (b) => `<p class="kicker">${esc(b.text)}</p>`,
};

/* ==================== build the page ==================== */

const doc = $('#doc');
const nav = $('#nav');

for (const s of SECTIONS) {
  const sec = el(`
    <section class="sec" id="${esc(s.id)}">
      <header class="sec-head">
        ${s.num ? `<p class="sec-num">${esc(s.num)}</p>` : ''}
        <h2>${s.icon ? `<span class="sec-ico">${s.icon}</span>` : ''}${esc(s.title)}</h2>
      </header>
    </section>`);
  for (const b of s.blocks) sec.insertAdjacentHTML('beforeend', BLOCKS[b.t](b));
  doc.append(sec);

  nav.insertAdjacentHTML('beforeend', `
    <a class="nav-item" href="#${esc(s.id)}">
      ${s.num ? `<span class="nav-num">${esc(s.num)}</span>` : ''}
      ${s.icon ? `<span class="nav-ico">${s.icon}</span>` : ''}${esc(s.nav)}
    </a>`);
}

/* ==================== speech ==================== */

let voice = null;

/* Young American female, in order of preference — the same wishlist as Sound
   Lab, because the same children hear both pages. The set differs per device,
   so the teacher panel can override it. */
const VOICE_WISHLIST = [
  'Flo', 'Shelley', 'Samantha', 'Ava', 'Allison', 'Susan', 'Nicky', 'Zoe',
  'Google US English', 'Microsoft Aria Online (Natural) - English (United States)',
  'Microsoft Zira - English (United States)',
];

const englishVoices = () =>
  (window.speechSynthesis?.getVoices() || []).filter((v) => /^en(-|_|$)/i.test(v.lang));

function pickVoice() {
  const all = englishVoices();
  if (!all.length) return;

  const saved = localStorage.getItem('phonicsGuide.voice');
  if (saved) {
    const match = all.find((v) => v.name === saved);
    if (match) { voice = match; return; }
  }

  const us = all.filter((v) => /en[-_]US/i.test(v.lang));
  // Match on prefix: macOS localises the name as "Flo (英文（美國）)".
  for (const want of VOICE_WISHLIST) {
    const hit = us.find((v) => v.name === want || v.name.startsWith(want + ' ('));
    if (hit) { voice = hit; return; }
  }
  voice = us[0] || all[0];
}

if ('speechSynthesis' in window) {
  pickVoice();
  speechSynthesis.addEventListener('voiceschanged', pickVoice);
}

let soundOn = true;
let rate = parseFloat(localStorage.getItem('phonicsGuide.rate') || '0.85');

/* Every run of speech takes a token, so a tap mid-sequence cancels the old
   chain instead of racing it. */
let speakToken = 0;

function stopSpeaking() {
  speakToken++;
  window.speechSynthesis?.cancel();
}

/* Speak a list of strings one after another, with a watchdog per item — a
   machine with no audio output never fires 'end'. */
function sayEach(list, { onEnd } = {}) {
  if (!soundOn || !('speechSynthesis' in window) || !list.length) { onEnd?.(); return; }

  stopSpeaking();
  const mine = speakToken;
  let i = 0;

  const step = () => {
    if (mine !== speakToken) return;
    if (i >= list.length) { onEnd?.(); return; }

    const text = String(list[i]);
    i++;

    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.lang = voice?.lang || 'en-US';
    u.rate = rate;
    u.pitch = 1.1;

    let moved = false;
    const go = () => {
      if (moved || mine !== speakToken) return;
      moved = true;
      setTimeout(step, 240);
    };
    u.addEventListener('end', go);
    u.addEventListener('error', go);
    setTimeout(go, 1400 + text.length * 110);

    speechSynthesis.speak(u);
  };

  step();
}

/* What a written sound says when tapped. A bare unit (sh, bl, -tion) speaks
   its cue; hyphens inside a real run of text (fan-tas-tic) become spaces so
   the syllables come out one by one. */
function speechFor(raw) {
  const t = raw.replace(/^[-–]+|[-–]+$/g, '');
  const cue = CUES[t.toLowerCase()];
  if (cue) return cue;
  return t.replace(/-/g, ' ');
}

/* ==================== 檢測模式 (marking) ==================== */

const markToggle = $('#markMode');
let marks = [];
try { marks = JSON.parse(localStorage.getItem('phonicsGuide.marks') || '[]'); } catch { marks = []; }

function saveMarks() {
  try { localStorage.setItem('phonicsGuide.marks', JSON.stringify(marks)); } catch { /* private mode */ }
}

function markKey(word, label) { return `${label}｜${word}`; }

function applyMarks() {
  for (const chip of $$('.chip')) {
    const label = chip.closest('.chips')?.dataset.label || '';
    chip.classList.toggle('is-marked', marks.some((m) => m.key === markKey(chip.dataset.w, label)));
  }
}

function renderMarkList() {
  const ul = $('#markList');
  const empty = $('#markEmpty');
  ul.innerHTML = '';
  empty.hidden = marks.length > 0;
  for (const m of marks) {
    const li = el(`
      <li>
        <button class="mark-say" type="button" data-w="${esc(m.word)}">${esc(m.word)}</button>
        ${m.label ? `<span class="mark-label">${esc(m.label)}</span>` : ''}
        <button class="mark-x" type="button" data-key="${esc(m.key)}" aria-label="移除記號">✕</button>
      </li>`);
    ul.append(li);
  }
}

function toggleMark(chip) {
  const label = chip.closest('.chips')?.dataset.label || '';
  const key = markKey(chip.dataset.w, label);
  const at = marks.findIndex((m) => m.key === key);
  if (at >= 0) marks.splice(at, 1);
  else marks.push({ key, word: chip.dataset.w, label });
  saveMarks();
  applyMarks();
  renderMarkList();
}

applyMarks();
renderMarkList();

/* ==================== interaction ==================== */

function wobble(node) {
  node.classList.remove('is-wrong');
  void node.offsetWidth; // restart the animation
  node.classList.add('is-wrong');
}

document.addEventListener('click', (e) => {
  const marking = markToggle.checked;

  /* A word chip: speak it — or, in 檢測模式, mark it silently. */
  const chip = e.target.closest('.chip');
  if (chip) {
    if (marking) { toggleMark(chip); return; }
    const list = [];
    const say = chip.dataset.say || speechFor(chip.dataset.w);
    if (say) list.push(say);
    if (chip.dataset.egs) list.push(...chip.dataset.egs.split('|'));
    chip.classList.add('is-speaking');
    sayEach(list, { onEnd: () => chip.classList.remove('is-speaking') });
    setTimeout(() => chip.classList.remove('is-speaking'), 4000);
    return;
  }

  /* An English word inside running text. */
  const tok = e.target.closest('.tok');
  if (tok) { sayEach([speechFor(tok.textContent.trim())]); return; }

  /* A before → after pair. */
  const pword = e.target.closest('.pword');
  if (pword) { sayEach([pword.dataset.w]); return; }

  /* The worked example: say the word whole. */
  const exs = e.target.closest('.ex-syll');
  if (exs) { sayEach([exs.dataset.w]); return; }

  /* The cutting game. */
  const gap = e.target.closest('.gap');
  if (gap) {
    const cut = gap.closest('.cut');
    if (cut.classList.contains('is-done')) return;
    const cuts = cut.dataset.cuts.split(',').map(Number);
    const g = Number(gap.dataset.g);
    if (cuts.includes(g)) {
      gap.classList.add('is-cut');
      if ($$('.gap.is-cut', cut).length === cuts.length) {
        cut.classList.add('is-done');
        sayEach([cut.dataset.w]);
      }
    } else if (gap.classList.contains('is-cut')) {
      /* Taking back a cut that was placed by "reveal" — leave it alone. */
    } else {
      wobble(cut);
    }
    return;
  }

  const cutSay = e.target.closest('.cut-say');
  if (cutSay) { sayEach([cutSay.dataset.w]); return; }

  /* 字首＋字根＋字尾: open and speak. */
  const mword = e.target.closest('.morph-word');
  if (mword) {
    const body = mword.nextElementSibling;
    const open = body.hidden;
    body.hidden = !open;
    mword.setAttribute('aria-expanded', String(open));
    mword.closest('.morph').classList.toggle('is-open', open);
    if (open) sayEach([mword.dataset.w]);
    return;
  }

  /* A word-family root. */
  const root = e.target.closest('.fam-root');
  if (root) { sayEach([root.dataset.w]); return; }

  /* Marked-word list in the teacher panel. */
  const msay = e.target.closest('.mark-say');
  if (msay) { sayEach([msay.dataset.w]); return; }
  const mx = e.target.closest('.mark-x');
  if (mx) {
    marks = marks.filter((m) => m.key !== mx.dataset.key);
    saveMarks(); applyMarks(); renderMarkList();
    return;
  }
});

/* ==================== bar: nav, sound ==================== */

const navToggle = $('#navToggle');
const scrim = $('.nav-scrim');

function setNav(open) {
  document.body.classList.toggle('nav-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  scrim.hidden = !open;
}
navToggle.addEventListener('click', () => setNav(!document.body.classList.contains('nav-open')));
scrim.addEventListener('click', () => setNav(false));
nav.addEventListener('click', (e) => { if (e.target.closest('.nav-item')) setNav(false); });

/* Track the section being read. */
const links = $$('.nav-item', nav);
const spy = new IntersectionObserver((entries) => {
  for (const en of entries) {
    if (!en.isIntersecting) continue;
    const id = en.target.id;
    links.forEach((a) => a.classList.toggle('is-here', a.getAttribute('href') === '#' + id));
  }
}, { rootMargin: '-20% 0px -70% 0px' });
$$('.sec').forEach((s) => spy.observe(s));

const soundBtn = $('#soundBtn');
soundBtn.addEventListener('click', () => {
  soundOn = !soundOn;
  if (!soundOn) stopSpeaking();
  soundBtn.textContent = soundOn ? '🔊' : '🔇';
  soundBtn.setAttribute('aria-pressed', String(soundOn));
  soundBtn.setAttribute('aria-label', soundOn ? '關掉聲音' : '打開聲音');
});

/* ==================== teacher panel ==================== */

const panel = $('#panel');
const panelToggle = $('#panelToggle');

function setPanel(open) {
  panel.hidden = !open;
  panelToggle.setAttribute('aria-expanded', String(open));
}
panelToggle.addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { setPanel(false); setNav(false); }
});

markToggle.addEventListener('change', () => {
  document.body.classList.toggle('mark-mode', markToggle.checked);
});

$('#markClear').addEventListener('click', () => {
  marks = [];
  saveMarks(); applyMarks(); renderMarkList();
});

/* Open every cut and every 拆 — for going over the answers together. */
$('#showAll').addEventListener('click', () => {
  for (const cut of $$('.cut')) {
    const cuts = cut.dataset.cuts.split(',').map(Number);
    for (const gap of $$('.gap', cut)) {
      gap.classList.toggle('is-cut', cuts.includes(Number(gap.dataset.g)));
    }
    cut.classList.add('is-done');
  }
  for (const m of $$('.morph')) {
    $('.morph-body', m).hidden = false;
    $('.morph-word', m).setAttribute('aria-expanded', 'true');
    m.classList.add('is-open');
  }
  setPanel(false);
});

/* Voice and speed. */
const voiceSel = $('#voicePick');

function fillVoices() {
  const all = englishVoices();
  voiceSel.innerHTML = '';
  if (!all.length) {
    voiceSel.innerHTML = '<option>這台裝置沒有英語語音</option>';
    return;
  }
  for (const v of all) {
    const o = document.createElement('option');
    o.value = v.name;
    o.textContent = v.name.replace(/ \(.*\)$/, '') + (v.lang ? ` — ${v.lang}` : '');
    o.selected = voice && v.name === voice.name;
    voiceSel.append(o);
  }
}
fillVoices();
window.speechSynthesis?.addEventListener('voiceschanged', fillVoices);

voiceSel.addEventListener('change', () => {
  const chosen = englishVoices().find((v) => v.name === voiceSel.value);
  if (!chosen) return;
  voice = chosen;
  try { localStorage.setItem('phonicsGuide.voice', chosen.name); } catch { /* private mode */ }
  sayEach(['Hello! Let us practise phonics.']);
});

const rateSel = $('#rate');
rateSel.value = String(rate);
if (rateSel.selectedIndex < 0) rateSel.value = '0.85';
rateSel.addEventListener('change', () => {
  rate = parseFloat(rateSel.value);
  try { localStorage.setItem('phonicsGuide.rate', rateSel.value); } catch { /* private mode */ }
  sayEach(['fantastic']);
});
