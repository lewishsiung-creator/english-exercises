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
/* Voices are ranked, not just wished for, because the fallback matters as
   much as the favourite: macOS ships a shelf of novelty voices (Bad News,
   Zarvox, Bubbles…) that are alphabetically early and would otherwise be
   picked when no favourite is installed. Read as tiers, best first. */
const VOICE_TIERS = [
  /* Neural. A different class of clarity to everything below. */
  [/\bnatural\b/i, /\bsiri\b/i, /^Google US English/i],
  /* Apple's recorded-speaker voices — the ones with an "enhanced" or
     "premium" download behind them — and Windows' equivalents. Samantha is
     the one almost every Mac already has. */
  [/^(Samantha|Ava|Allison|Susan|Zoe|Nicky|Joelle|Evan|Tom|Alex|Victoria)\b/i,
   /^Microsoft (Zira|Aria|Jenny|Michelle|Guy)\b/i],
  /* Character and regional voices: intelligible, but stylised or not
     American. Usable, never the automatic choice for phonics. */
  [/^(Flo|Shelley|Eddy|Reed|Rocko|Sandy|Grandma|Grandpa|Karen|Moira|Tessa|Fiona|Daniel|Rishi|Serena)\b/i],
];

/* Jokes, singing and robots. Still selectable — a child who wants to hear a
   word in Zarvox should get to — but never picked automatically, and the
   picker says so. */
const NOVELTY = /^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Deranged|Good News|Hysterical|Jester|Junior|Kathy|Organ|Ralph|Superstar|Trinoids|Whisper|Wobble|Zarvox|Bruce|Agnes|Princess|Fred)\b/i;

const englishVoices = () =>
  (window.speechSynthesis?.getVoices() || []).filter((v) => /^en(-|_|$)/i.test(v.lang));

/* Lower is better. Tier first, then a nudge for en-US over other Englishes,
   and a small penalty for novelty so they sort last but stay selectable. */
function voiceScore(v) {
  let tier = VOICE_TIERS.length;
  for (let i = 0; i < VOICE_TIERS.length; i++) {
    if (VOICE_TIERS[i].some((re) => re.test(v.name))) { tier = i; break; }
  }
  const us = /en[-_]US/i.test(v.lang) ? 0 : 1;
  const junk = NOVELTY.test(v.name) ? 10 : 0;
  return junk * 100 + tier * 10 + us;
}

/* The ranked list, best first — also what the teacher panel shows. */
const rankedVoices = () => englishVoices().slice().sort((a, b) => voiceScore(a) - voiceScore(b));

function pickVoice() {
  const all = englishVoices();
  if (!all.length) return;

  const saved = localStorage.getItem('phonicsGuide.voice');
  if (saved) {
    const match = all.find((v) => v.name === saved);
    if (match) { voice = match; return; }
  }

  voice = rankedVoices()[0] || all[0];
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
  /* The recording has to be stopped too, or tapping a second word leaves the
     first one still talking underneath it. */
  try { player.pause(); player.currentTime = 0; } catch { /* not loaded yet */ }
}

/* ==================== recorded words ====================

   A synthesised voice is a compromise; a human saying the word is not. Most
   of the practice words have an American recording from Wikimedia Commons,
   trimmed and level-matched, sitting in audio/. Those play instead of the
   voice. The rest — and every bare sound, which no one records in isolation
   — fall back to speech synthesis, so nothing ever goes silent.

   AUDIO is generated, not hand-written: see audio/manifest.js. */

const recorded = (word) => (typeof AUDIO === 'object' && AUDIO)
  ? Object.prototype.hasOwnProperty.call(AUDIO, String(word).toLowerCase())
  : false;

/* One element, reused. Creating an Audio per tap leaks them on iOS. */
const player = new Audio();
player.preload = 'none';

/* A bare phoneme is a fraction of a second long; at word speed it is gone
   before a child has focused on it. So a sound is spoken slower than a word,
   and the pause after it is longer — that silence is when the child repeats
   it back. */
const SOUND_SLOWER = 0.72;
const GAP_AFTER_SOUND = 480;
const GAP_AFTER_WORD = 240;

/* Speak a list one after another, with a watchdog per item — a machine with
   no audio output never fires 'end'. An item is a string, or
   { text, sound: true } to mark it as a bare sound rather than a word. */
function sayEach(list, { onEnd } = {}) {
  const items = list
    .map((it) => (typeof it === 'string' ? { text: it } : it))
    .filter((it) => it && String(it.text).trim());

  if (!soundOn || !items.length) { onEnd?.(); return; }

  stopSpeaking();
  const mine = speakToken;
  let i = 0;
  /* Chrome drops an utterance queued in the same tick as cancel(), which
     shows up as a tap that makes no sound at all. Let the cancel land
     first. */
  let first = true;

  const step = () => {
    if (mine !== speakToken) return;
    if (i >= items.length) { onEnd?.(); return; }

    const item = items[i];
    const text = String(item.text);
    i++;

    let moved = false;
    const go = () => {
      if (moved || mine !== speakToken) return;
      moved = true;
      setTimeout(step, item.sound ? GAP_AFTER_SOUND : GAP_AFTER_WORD);
    };

    const speak = () => {
      if (!('speechSynthesis' in window)) { go(); return; }
      const u = new SpeechSynthesisUtterance(text);
      if (voice) u.voice = voice;
      u.lang = voice?.lang || 'en-US';
      u.rate = item.sound ? Math.max(0.4, rate * SOUND_SLOWER) : rate;
      /* Flat pitch: raising it thins the formants, which is exactly the
         information a child is listening for in a vowel. */
      u.pitch = 1;
      u.addEventListener('end', go);
      u.addEventListener('error', go);
      setTimeout(go, 1400 + text.length * 110);

      if (first) { first = false; setTimeout(() => { if (mine === speakToken) speechSynthesis.speak(u); }, 70); }
      else speechSynthesis.speak(u);
    };

    /* A human recording, where we have one and this is a word rather than a
       bare sound. Any failure — missing file, codec, autoplay refusal —
       falls through to the voice rather than going quiet. */
    if (!item.sound && recorded(text)) {
      first = false;
      /* A failure can arrive twice — once as the element's error event and
         once as the play() rejection — and without this guard the word gets
         spoken twice on top of itself. */
      let fell = false;
      const fallback = () => {
        if (fell || moved || mine !== speakToken) return;
        fell = true;
        speak();
      };
      player.onended = go;
      player.onerror = fallback;
      /* Recordings are already at a natural pace; only the teacher's "slow"
         setting actually slows one down. */
      player.playbackRate = Math.min(1, rate + 0.15);
      player.src = 'audio/' + encodeURIComponent(text.toLowerCase()) + '.m4a';
      const p = player.play();
      if (p && p.catch) p.catch(fallback);
      setTimeout(go, 3000);
      return;
    }

    speak();
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
    /* A chip with example words is a sound card — the cue is a bare sound
       and gets the slower voice. A chip without them is a whole word. */
    const isSound = !!chip.dataset.egs;
    if (say) list.push({ text: say, sound: isSound });
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

/* ==================== 發音檢查 (sound check) ====================

   The page's cues are approximations, and which ones survive depends on the
   voice installed on the machine you teach from — so the honest tool is not
   a promise that they are right, but a way to hear all of them quickly and
   mark the ones that are not. A marked list can be pasted back and the
   spellings fixed in CUES. */

const cueList = $('#cueList');
const cueBadBox = $('#cueBadBox');
const cueBadOut = $('#cueBad');
let cueBad = [];
try { cueBad = JSON.parse(localStorage.getItem('phonicsGuide.badCues') || '[]'); } catch { cueBad = []; }

/* Two things need an ear: the bare sounds, and the handful of words whose
   lesson depends on which reading the voice picks. */
const CUE_ROWS = [
  ...Object.entries(CUES).map(([key, say]) => ({ key, say, sound: true })),
  ...WATCH.map((it) => ({ key: it.w, say: it.w, sound: false, zh: it.zh })),
];

function renderBadCues() {
  cueBadBox.hidden = !cueBad.length;
  cueBadOut.value = cueBad
    .map((k) => (CUES[k] ? `${k} → "${CUES[k]}"` : `${k}（單字）`))
    .join('、');
}

cueList.insertAdjacentHTML('beforeend', '<p class="cue-head">聲音</p>');
let wroteWatchHead = false;
for (const row of CUE_ROWS) {
  if (!row.sound && !wroteWatchHead) {
    cueList.insertAdjacentHTML('beforeend', '<p class="cue-head">容易念錯的字</p>');
    wroteWatchHead = true;
  }
  cueList.insertAdjacentHTML('beforeend', `
    <div class="cue-row${row.sound ? '' : ' cue-row-word'}" data-key="${esc(row.key)}"
         ${row.sound ? 'data-sound="1"' : ''}>
      <button class="cue-play" type="button" data-say="${esc(row.say)}" aria-label="聽 ${esc(row.key)}">▶</button>
      <span class="cue-key">${esc(row.key)}</span>
      <span class="cue-say">${esc(row.zh || row.say)}</span>
      <button class="cue-bad-btn" type="button" aria-pressed="false" aria-label="標記念錯">👎</button>
    </div>`);
}

function markBadCue(row) {
  const key = row.dataset.key;
  const at = cueBad.indexOf(key);
  if (at >= 0) cueBad.splice(at, 1); else cueBad.push(key);
  row.classList.toggle('is-bad', at < 0);
  $('.cue-bad-btn', row).setAttribute('aria-pressed', String(at < 0));
  try { localStorage.setItem('phonicsGuide.badCues', JSON.stringify(cueBad)); } catch { /* private mode */ }
  renderBadCues();
}

for (const row of $$('.cue-row', cueList)) {
  if (cueBad.includes(row.dataset.key)) {
    row.classList.add('is-bad');
    $('.cue-bad-btn', row).setAttribute('aria-pressed', 'true');
  }
}
renderBadCues();

cueList.addEventListener('click', (e) => {
  const play = e.target.closest('.cue-play');
  if (play) {
    const row = play.closest('.cue-row');
    sayEach([{ text: play.dataset.say, sound: !!row.dataset.sound }]);
    return;
  }
  const bad = e.target.closest('.cue-bad-btn');
  if (bad) markBadCue(bad.closest('.cue-row'));
});

/* Walk every cue, highlighting the one being spoken. */
$('#cuePlayAll').addEventListener('click', () => {
  const rows = $$('.cue-row', cueList);
  let i = 0;
  const next = () => {
    rows.forEach((r) => r.classList.remove('is-playing'));
    if (i >= rows.length) return;
    const row = rows[i];
    const mine = ++i;
    row.classList.add('is-playing');
    row.scrollIntoView({ block: 'nearest' });
    sayEach([{ text: $('.cue-play', row).dataset.say, sound: !!row.dataset.sound }], {
      onEnd: () => { if (mine === i) next(); },
    });
  };
  next();
});

$('#cueStop').addEventListener('click', () => {
  stopSpeaking();
  $$('.cue-row', cueList).forEach((r) => r.classList.remove('is-playing'));
});

/* How much of the page is real human speech rather than synthesis. */
{
  const words = new Set();
  for (const c of $$('.chip')) if (!c.dataset.egs) words.add(c.dataset.w.toLowerCase());
  for (const c of $$('.cut')) words.add(c.dataset.w.toLowerCase());
  const real = [...words].filter(recorded).length;
  $('#audioStat').textContent = words.size
    ? `這一頁 ${words.size} 個單字，其中 ${real} 個是真人錄音（${Math.round(100 * real / words.size)}%）。`
    : '—';
}

/* Voice and speed. */
const voiceSel = $('#voicePick');

/* Best first, and say so — otherwise the list is alphabetical and the worst
   voice on the machine is often the one sitting at the top. */
function fillVoices() {
  const all = rankedVoices();
  voiceSel.innerHTML = '';
  if (!all.length) {
    voiceSel.innerHTML = '<option>這台裝置沒有英語語音</option>';
    return;
  }
  for (const v of all) {
    const o = document.createElement('option');
    o.value = v.name;
    const score = voiceScore(v);
    const hint = NOVELTY.test(v.name) ? '（不建議）'
      : score < 10 ? '（最清楚）'
      : score < 20 ? '（不錯）' : '';
    o.textContent = v.name.replace(/ \(.*\)$/, '') + (v.lang ? ` — ${v.lang}` : '') + hint;
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
