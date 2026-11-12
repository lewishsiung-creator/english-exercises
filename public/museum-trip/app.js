/* Museum Trip — renderer. Content lives in content.js.

   House rules for young learners (see README, Word Play):
   - audio first: every English line is spoken and replayable. The Chinese is
     text only — Lewis took the Chinese voice out on 2026-11-12;
   - no failure states: a wrong tap wobbles and says "think again";
   - no timers, big touch targets, grown-up tools kept faint.
   Nothing is uploaded. Only the I Spy stamps, the pages seen and the sound
   settings are kept, in this device's localStorage.

   Interaction design (2026-11-12 redesign):
   - a start screen, because phones and iPads play no sound before a touch;
   - the word being spoken lights up, so a child can follow along;
   - the Next arrow glows only once the page has been read, or the game on
     it is finished, so the bottom bar never competes with a game's own
     "Next question" button. It always still works for a grown-up. */
(() => {
'use strict';

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)');

const store = {
  get(k, d) { try { const v = localStorage.getItem('museumTrip.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('museumTrip.' + k, JSON.stringify(v)); } catch (e) {} },
};

const settings = {
  // Off unless a grown-up turns it on (Lewis, 2026-11-12: no speech that
  // starts by itself). A new key, so an old saved "on" doesn't carry over.
  auto:    store.get('autoRead', false), // read each page aloud when it opens
  sfx:     store.get('sfx', true),       // small chimes for right / try again / star
  rate:    store.get('rate', 0.9),
  enVoice: store.get('enVoice', ''),
};

/* ── Voice ──────────────────────────────────────────────────────────
   English only, and the most natural voice the device has (Lewis,
   2026-11-13 — he had first asked for an American young female voice,
   which had resolved to Flo, an older and more robotic engine).
   Ranking: Premium / Natural > Enhanced > the ordinary voice, and among
   those American women first (Ava, Zoe, Samantha …). Flo and Shelley come
   last of the ordinary voices; macOS's novelty voices (Bubbles, Zarvox …)
   are never picked. Names are matched on their start, because macOS
   localises them: "Ava（增強音質）", "Flo (英文（美國）)". A voice a grown-up
   chooses in the 大人 panel always wins. */
const VOICE_ORDER = ['Ava', 'Zoe', 'Samantha', 'Allison', 'Susan', 'Nicky', 'Joelle', 'Noelle',
  'Jenny', 'Aria', 'Michelle', 'Emma', 'Google US English', 'Shelley', 'Flo'];
const NOVELTY = /^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Junior|Ralph|Fred|Kathy|Grandma|Grandpa|Rocko|Eddy|Reed|Sandy)\b/i;
const HAS_TTS = 'speechSynthesis' in window;
let voices = [];

function voiceScore(v) {
  const n = v.name;
  let s = 0;
  if (/premium|高品質|優質/i.test(n)) s += 400;
  else if (/enhanced|增強/i.test(n)) s += 300;
  if (/natural|neural/i.test(n)) s += 350;            // Edge's online voices
  const base = n.replace(/^Microsoft\s+/i, '');
  const i = VOICE_ORDER.findIndex((p) => base.startsWith(p));
  if (i >= 0) s += 100 - i * 5;
  if (NOVELTY.test(base)) s -= 1000;
  if (/^en[-_]US/i.test(v.lang)) s += 20;
  return s;
}
function voiceList() {
  const us = voices.filter((v) => /^en[-_]US/i.test(v.lang));
  const list = us.length ? us : voices.filter((v) => /^en/i.test(v.lang));
  return list.slice().sort((a, b) => voiceScore(b) - voiceScore(a));
}
function pickVoice() {
  const list = voiceList();
  const saved = settings.enVoice;
  if (saved) { const v = list.find((x) => x.name === saved); if (v) return v; }
  return list[0] || null;
}
function loadVoices() { voices = speechSynthesis.getVoices(); fillVoicePickers(); }

/* ── Words that light up ───────────────────────────────────────────
   English text is wrapped word by word; the speech engine's word
   boundaries move the highlight. Where a browser sends no boundaries the
   whole line stays lit instead, which is the old behaviour. */
function wordsHTML(text) {
  let pos = 0;
  return String(text).split(/(\s+)/).map((tok) => {
    const start = pos;
    pos += tok.length;
    if (!tok || /^\s+$/.test(tok)) return tok;
    return `<span class="w" data-i="${start}">${esc(tok)}</span>`;
  }).join('');
}
function markWord(node, charIndex) {
  const ws = node.querySelectorAll('.w');
  let hit = null;
  ws.forEach((w) => { if (+w.dataset.i <= charIndex) hit = w; });
  ws.forEach((w) => w.classList.toggle('on', w === hit));
  if (hit) node.classList.add('words-live');
}

/* ── Speech queue ───────────────────────────────────────────────── */
let seq = 0;
let playingBtn = null;
function clearReading() {
  document.querySelectorAll('.reading').forEach((n) => n.classList.remove('reading', 'words-live'));
  document.querySelectorAll('.w.on').forEach((n) => n.classList.remove('on'));
}
function setPlaying(btn) {
  if (playingBtn && playingBtn !== btn) playingBtn.classList.remove('playing');
  playingBtn = btn;
  if (btn) btn.classList.add('playing');
}
function stopSpeech() {
  seq++;
  if (HAS_TTS) speechSynthesis.cancel();
  clearReading();
  setPlaying(null);
}
// items: [{ text, el? }] — English only. btn: the Listen button that started it.
function say(items, onDone, btn) {
  stopSpeech();
  if (!HAS_TTS || !items.length) { onDone && onDone(); return; }
  const id = seq;
  setPlaying(btn || null);
  let i = 0;
  const next = () => {
    if (id !== seq) return;
    clearReading();
    if (i >= items.length) { setPlaying(null); onDone && onDone(); return; }
    const it = items[i++];
    const u = new SpeechSynthesisUtterance(it.text);
    const v = pickVoice();
    if (v) u.voice = v;
    u.lang = v ? v.lang : 'en-US';
    u.rate = settings.rate;
    u.pitch = 1.08;
    if (it.el) {
      it.el.classList.add('reading');
      if (it.el.querySelector('.w')) {
        u.onboundary = (e) => { if (id === seq && (!e.name || e.name === 'word')) markWord(it.el, e.charIndex); };
      }
    }
    u.onend = next;
    u.onerror = next;
    speechSynthesis.speak(u);
  };
  setTimeout(next, 70);   // Safari drops a speak() issued straight after cancel()
}
// A pair {en, zh} as speech: only the English is read; the Chinese stays on screen.
function pair(p, enEl) {
  return [{ text: p.en, lang: 'en', el: enEl }];
}

/* ── Sound effects: synthesised, no files ───────────────────────── */
let ac = null;
function audio() {
  if (!ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; } }
  if (ac && ac.state === 'suspended') ac.resume();
  return ac;
}
function tone(freqs, { dur = 0.16, type = 'sine', gap = 0.08, vol = 0.14 } = {}) {
  if (!settings.sfx) return;
  const a = audio();
  if (!a) return;
  const t0 = a.currentTime + 0.01;
  freqs.forEach((f, i) => {
    const o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.value = f;
    const t = t0 + i * gap;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(a.destination);
    o.start(t); o.stop(t + dur + 0.03);
  });
}
const sfx = {
  right: () => tone([784, 988, 1319], { dur: 0.22 }),
  again: () => tone([392, 330], { type: 'triangle', gap: 0.11, vol: 0.1 }),
  star:  () => tone([1047, 1319, 1568, 2093], { dur: 0.14, gap: 0.06, vol: 0.09 }),
  flip:  () => tone([620], { dur: 0.05, vol: 0.04 }),
};

/* ── Art ────────────────────────────────────────────────────────── */
let svgN = 0;
function svgArt(kind) {
  const u = 'mt' + (++svgN);
  // The museum seen across its pool: red-brick base (the 融合 idea), the
  // slanting solar "cloud wall" (雲牆), and water like the sea (渡海).
  const wallOnly = kind === 'wall';
  return `
<svg viewBox="0 0 320 200" class="scene" role="img" aria-label="${wallOnly ? 'The cloud wall of solar panels' : 'The museum beside its big pool'}">
  <defs>
    <linearGradient id="${u}Sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9fd4fb"/><stop offset="1" stop-color="#e6f5ff"/>
    </linearGradient>
    <pattern id="${u}Pv" width="11" height="9" patternUnits="userSpaceOnUse">
      <rect width="11" height="9" fill="#24508f"/><rect x="1" y="1" width="9" height="7" rx="1" fill="#3a6fbd"/>
    </pattern>
    <clipPath id="${u}Wall"><path d="${wallOnly ? 'M20 70 L300 30 L300 170 L20 170 Z' : 'M78 72 L262 46 L262 126 L78 126 Z'}"/></clipPath>
  </defs>
  <rect width="320" height="200" fill="url(#${u}Sky)"/>
  <circle cx="${wallOnly ? 36 : 280}" cy="30" r="15" fill="#ffd23f"/>
  <g fill="#fff" opacity=".95">
    <ellipse cx="60" cy="30" rx="26" ry="10"/><ellipse cx="78" cy="24" rx="18" ry="10"/>
    <ellipse cx="190" cy="22" rx="22" ry="8"/><ellipse cx="205" cy="18" rx="14" ry="8"/>
  </g>
  ${wallOnly ? `
  <path d="M20 70 L300 30 L300 170 L20 170 Z" fill="url(#${u}Pv)"/>
  <g clip-path="url(#${u}Wall)" fill="#fff" opacity=".55">
    <ellipse cx="90" cy="100" rx="46" ry="16"/><ellipse cx="120" cy="90" rx="30" ry="16"/>
    <ellipse cx="230" cy="70" rx="44" ry="15"/><ellipse cx="255" cy="62" rx="26" ry="13"/>
    <ellipse cx="190" cy="135" rx="50" ry="15"/>
  </g>
  <text x="160" y="160" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" opacity=".9" letter-spacing="1.5" font-family="system-ui, sans-serif">NATIONAL MUSEUM OF TAIWAN HISTORY</text>
  <rect x="0" y="170" width="320" height="30" fill="#d98a64"/>
  <g fill="#c57452"><rect x="10" y="178" width="30" height="6"/><rect x="60" y="186" width="30" height="6"/><rect x="120" y="178" width="30" height="6"/><rect x="180" y="186" width="30" height="6"/><rect x="240" y="178" width="30" height="6"/></g>
  ` : `
  <rect x="40" y="100" width="240" height="34" fill="#d98a64"/>
  <g fill="#c57452"><rect x="50" y="108" width="22" height="5"/><rect x="92" y="118" width="22" height="5"/><rect x="200" y="108" width="22" height="5"/><rect x="246" y="118" width="22" height="5"/></g>
  <path d="M78 72 L262 46 L262 126 L78 126 Z" fill="url(#${u}Pv)"/>
  <g clip-path="url(#${u}Wall)" fill="#fff" opacity=".5">
    <ellipse cx="120" cy="92" rx="34" ry="11"/><ellipse cx="215" cy="70" rx="34" ry="11"/><ellipse cx="180" cy="110" rx="30" ry="9"/>
  </g>
  <rect x="0" y="134" width="320" height="66" fill="#5bbbe6"/>
  <path d="M78 138 L262 138 L262 160 L78 152 Z" fill="#3a6fbd" opacity=".25"/>
  <g fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8">
    <path d="M20 160 q8 -5 16 0 t16 0"/><path d="M120 176 q8 -5 16 0 t16 0"/><path d="M230 168 q8 -5 16 0 t16 0"/><path d="M60 188 q8 -5 16 0 t16 0"/>
  </g>
  <g transform="translate(250 160)">
    <path d="M-16 8 L16 8 L10 16 L-10 16 Z" fill="#8a4b2b"/>
    <path d="M0 -14 L0 8" stroke="#5a3a26" stroke-width="2"/>
    <path d="M2 -12 L15 5 L2 5 Z" fill="#fff"/><path d="M-2 -8 L-12 5 L-2 5 Z" fill="#ffe7a8"/>
  </g>`}
</svg>`;
}

function artHTML(art) {
  if (!art) return '';
  if (art.startsWith('svg:')) return `<div class="stage stage-svg">${svgArt(art.slice(4))}</div>`;
  // Split into whole emoji (a family emoji is several code points).
  const glyphs = (window.Intl && Intl.Segmenter)
    ? [...new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(art)].map((x) => x.segment)
    : Array.from(art);
  return `<div class="stage" aria-hidden="true">${glyphs.map((g, i) => `<span class="g" style="--d:${i * 90}ms">${g}</span>`).join('')}</div>`;
}

// A real photo fills the stage. The credit is plain text on the photo (a
// link there would take a child off the page); the links are in 大人.
function photoHTML(ph) {
  return `<figure class="stage stage-photo${ph.fit === 'contain' ? ' contain' : ''}">
    <img src="${ph.src}" alt="${esc(ph.alt)}" decoding="async">
    <span class="real-chip"><span aria-hidden="true">📷</span> <span lang="en">Real photo</span> · <span lang="zh-Hant">真實照片</span></span>
    <figcaption class="credit">Photo: ${esc(ph.by)} · ${esc(ph.lic)} · Wikimedia Commons</figcaption>
  </figure>`;
}

// A YouTube video, as a picture with a play button. The player (from the
// privacy-enhanced youtube-nocookie.com) is only loaded when it is tapped.
function videoHTML(v) {
  return `<figure class="stage stage-photo stage-video">
    <button type="button" class="video-play" data-id="${esc(v.id)}" aria-label="Play the video: ${esc(v.title)} 播放影片">
      <img src="https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg" alt="" decoding="async">
      <span class="play-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
    </button>
    <span class="real-chip"><span aria-hidden="true">▶</span> <span lang="en">Video</span> · <span lang="zh-Hant">影片</span> · ${v.mins} min</span>
    <figcaption class="credit">${esc(v.title)} · ${esc(v.by)} · YouTube</figcaption>
  </figure>`;
}
function wireVideo(root) {
  const b = root.querySelector('.video-play');
  if (!b) return;
  b.addEventListener('click', () => {
    stopSpeech();
    const f = document.createElement('iframe');
    f.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(b.dataset.id)}?autoplay=1&rel=0&playsinline=1`;
    f.title = b.getAttribute('aria-label');
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    const fig = b.closest('figure');
    fig.classList.add('playing');
    b.replaceWith(f);
  });
}

/* ── Page shell ─────────────────────────────────────────────────── */
const main = $('#page');
const chapBox = $('#chapters');
const counter = $('#counter');
const prevBtn = $('#prev');
const nextBtn = $('#next');
const bar = $('#progressBar');
let cur = 0;
let interacted = false;   // speech may only start after the first tap
const seen = new Set(store.get('seen', []));

function chapterStart(id) { return PAGES.findIndex((p) => p.ch === id); }
function chapterPages(id) { return PAGES.map((p, i) => (p.ch === id ? i : -1)).filter((i) => i >= 0); }

// 首頁 (Lewis, 2026-11-12): first in the strip, it brings back the start
// screen, with its NHI-card reminder; "Let's go!" then starts at page 1.
{
  const b = el('button', 'chap chap-home');
  b.type = 'button';
  b.innerHTML = '<span class="chap-i" aria-hidden="true">🏠</span><span class="chap-t" lang="en">Home</span>';
  b.setAttribute('aria-label', 'Home 首頁');
  b.addEventListener('click', () => home());
  chapBox.appendChild(b);
}

CHAPTERS.forEach((c) => {
  const b = el('button', 'chap');
  b.type = 'button';
  b.dataset.ch = c.id;
  b.innerHTML = `<span class="chap-i" aria-hidden="true">${c.icon}<span class="tick">✓</span></span><span class="chap-t" lang="en">${esc(c.en)}</span>`;
  b.setAttribute('aria-label', `${c.en} ${c.zh}`);
  b.addEventListener('click', () => go(chapterStart(c.id)));
  chapBox.appendChild(b);
});

function setReady(on) { nextBtn.classList.toggle('ready', !!on && cur < PAGES.length - 1); }

function linesBlock(p) {
  const box = el('div', 'lines');
  const items = [];
  (p.lines || []).forEach((ln, i) => {
    const row = el('div', 'line' + (i === 0 ? ' lead' : ''));
    const en = el('p', 'en', wordsHTML(ln.en)); en.lang = 'en';
    const zh = el('p', 'zh', esc(ln.zh)); zh.lang = 'zh-Hant';
    row.append(en, zh);
    en.addEventListener('click', () => say([{ text: ln.en, el: en }]));
    box.appendChild(row);
    items.push({ ln, en, zh });
  });
  return { box, items };
}

function listenButton(getItems, compact) {
  const a = el('button', 'listen' + (compact ? ' compact' : ''),
    `<span class="listen-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path class="wave1" d="M16 9.5a3.5 3.5 0 0 1 0 5"/><path class="wave2" d="M18.5 7a7 7 0 0 1 0 10"/></svg></span>${compact ? '' : '<span class="listen-t" lang="en">Listen</span>'}`);
  a.type = 'button';
  a.setAttribute('aria-label', 'Listen 聽英文');
  a.addEventListener('click', () => {
    if (a.classList.contains('playing')) { stopSpeech(); return; }
    say(getItems(), null, a);
  });
  if (!HAS_TTS) a.hidden = true;
  return a;
}

const GAME = { manners: 1, quiz: 1 };
const TILE = { hall: 1, spy: 1, words: 1 };

function render() {
  stopSpeech();
  const p = PAGES[cur];
  document.body.dataset.ch = p.ch;
  main.innerHTML = '';
  main.className = 'page kind-' + p.kind;

  const sheet = el('section', 'sheet' + (GAME[p.kind] || TILE[p.kind] ? ' compact' : ''));
  if (!GAME[p.kind]) sheet.insertAdjacentHTML('beforeend',
    p.video ? videoHTML(p.video) : p.photo && PHOTOS[p.photo] ? photoHTML(PHOTOS[p.photo]) : artHTML(p.art));
  wireVideo(sheet);
  const compact = !!(GAME[p.kind] || TILE[p.kind]);
  const copy = el('div', 'copy');
  if (p.tag) copy.appendChild(el('p', 'tag', `<span lang="en">${esc(p.tag.en)}</span><span lang="zh-Hant">${esc(p.tag.zh)}</span>`));
  const { box, items } = linesBlock(p);
  const lineItems = () => items.map(({ ln, en }) => ({ text: ln.en, el: en }));
  const lb = listenButton(lineItems, compact);
  if (compact) { const r = el('div', 'copy-row'); r.append(box, lb); copy.appendChild(r); }
  else copy.append(box, lb);
  sheet.appendChild(copy);
  main.appendChild(sheet);

  const builder = KINDS[p.kind];
  let afterRead = null;
  if (builder) afterRead = builder(p, main);

  if (p.note) main.appendChild(el('p', 'note', `<span aria-hidden="true">${p.note.icon || '🙋'}</span> <span><span lang="en">${esc(p.note.en)}</span> <span lang="zh-Hant">${esc(p.note.zh)}</span></span>`));
  if (p.talk) {
    const d = el('details', 'talk');
    d.innerHTML = `<summary><span aria-hidden="true">💬</span> <span lang="en">Talk about it</span> · <span lang="zh-Hant">與孩子討論</span></summary><p lang="en">${esc(p.talk.en)}</p><p lang="zh-Hant">${esc(p.talk.zh)}</p>`;
    main.appendChild(d);
  }

  // Shell: counter, progress, chapter chips.
  seen.add(cur); store.set('seen', [...seen]);
  counter.textContent = `${cur + 1} / ${PAGES.length}`;
  bar.style.width = `${((cur + 1) / PAGES.length) * 100}%`;
  prevBtn.disabled = cur === 0;
  nextBtn.disabled = cur === PAGES.length - 1;
  chapBox.querySelectorAll('.chap[data-ch]').forEach((b) => {
    const on = b.dataset.ch === p.ch;
    b.classList.toggle('on', on);
    b.classList.toggle('done', chapterPages(b.dataset.ch).every((i) => seen.has(i)));
    if (on) {
      b.setAttribute('aria-current', 'step');
      // Keep the chip in view by scrolling the strip itself — never
      // scrollIntoView, which would also move the page (see Jill's notebook).
      const l = b.offsetLeft - chapBox.offsetLeft, r = l + b.offsetWidth;
      if (l < chapBox.scrollLeft) chapBox.scrollLeft = l - 8;
      else if (r > chapBox.scrollLeft + chapBox.clientWidth) chapBox.scrollLeft = r - chapBox.clientWidth + 8;
    } else b.removeAttribute('aria-current');
  });
  try { history.replaceState(null, '', '#' + (cur + 1)); } catch (e) {}
  main.focus({ preventScroll: true });
  window.scrollTo(0, 0);

  // Next glows when there is nothing left to do here. A game page lights
  // it itself when its last question is answered.
  const readThenReady = () => { if (!GAME[PAGES[cur].kind]) setReady(true); };
  setReady(false);
  if (interacted && settings.auto && HAS_TTS) {
    say(lineItems(), () => { readThenReady(); afterRead && afterRead(); }, lb);
  } else {
    readThenReady();
  }
}

function go(i) {
  interacted = true;
  if (i < 0 || i >= PAGES.length) return;
  if (i !== cur) sfx.flip();
  const dir = i > cur ? 'fwd' : i < cur ? 'back' : '';
  cur = i;
  render();
  if (dir && !REDUCED.matches) { main.classList.add('enter-' + dir); }
}
prevBtn.addEventListener('click', () => go(cur - 1));
nextBtn.addEventListener('click', () => go(cur + 1));
document.addEventListener('keydown', (e) => {
  if (e.target.closest && e.target.closest('dialog, input, select, textarea')) return;
  if (!$('#start').hidden) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); begin(); } return; }
  if (e.key === 'ArrowRight') go(cur + 1);
  if (e.key === 'ArrowLeft') go(cur - 1);
});

// Swipe between pages (ignored when it starts on a button or tile).
let sx = null, sy = 0;
main.addEventListener('touchstart', (e) => {
  if (e.target.closest('button, details, a')) { sx = null; return; }
  sx = e.touches[0].clientX; sy = e.touches[0].clientY;
}, { passive: true });
main.addEventListener('touchend', (e) => {
  if (sx == null) return;
  const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
  if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) go(cur + (dx < 0 ? 1 : -1));
  sx = null;
}, { passive: true });

/* ── Page kinds ─────────────────────────────────────────────────── */
function wobble(n) { n.classList.remove('wobble'); void n.offsetWidth; n.classList.add('wobble'); }
function pop(n) { n.classList.remove('pop'); void n.offsetWidth; n.classList.add('pop'); }

const TRY_AGAIN = { en: 'Hmm… think again!', zh: '嗯⋯再想一想！' };
const YES = [{ en: 'Yes!', zh: '答對了！' }, { en: 'Great job!', zh: '好棒！' }, { en: 'You got it!', zh: '你答對了！' }];
const yes = (k) => YES[k % YES.length];

function tileHTML(art, en, zh, extra = '') {
  return `<span class="tile-art" aria-hidden="true">${art}</span><span class="tile-en" lang="en">${wordsHTML(en)}</span><span class="tile-zh" lang="zh-Hant">${esc(zh)}</span>${extra}`;
}

const KINDS = {
  // Tap a tile to hear what you can do there.
  hall(p, root) {
    const grid = el('div', 'tiles hall');
    p.tiles.forEach((t) => {
      const b = el('button', 'tile');
      b.type = 'button';
      b.innerHTML = tileHTML(t.art, t.en, t.zh);
      b.addEventListener('click', () => { pop(b); say(pair(t, b.querySelector('.tile-en'))); });
      grid.appendChild(b);
    });
    root.appendChild(grid);
  },

  // 👍 / 👎, one situation at a time; only the right answer moves on.
  manners(p, root) { return thumbsGame(p, root); },

  spy(p, root) {
    const found = new Set(store.get('spy', []));
    const meter = el('div', 'meter');
    const grid = el('div', 'tiles spy');
    const update = () => {
      meter.innerHTML = `<div class="meter-bar"><span style="width:${(found.size / p.items.length) * 100}%"></span></div><p><b>⭐ ${found.size} / ${p.items.length}</b> <span lang="en">remembered</span> · <span lang="zh-Hant">記住了</span></p>`;
    };
    p.items.forEach((it) => {
      const b = el('button', 'tile');
      b.type = 'button';
      b.setAttribute('aria-pressed', found.has(it.id) ? 'true' : 'false');
      b.innerHTML = tileHTML(it.art, it.en, it.zh, '<span class="stamp" aria-hidden="true">⭐</span>');
      b.addEventListener('click', () => {
        // Used before the trip, so a tap means "I will look for it". Tapping
        // again just says it again; the 大人 panel clears the stars.
        pop(b);
        if (found.has(it.id)) { say([{ text: `Look for ${it.en}!` }]); return; }
        found.add(it.id); b.setAttribute('aria-pressed', 'true'); sfx.star();
        const all = found.size === p.items.length;
        const q = [{ text: `Look for ${it.en}!` }];
        if (all) q.push({ text: 'Super! Now you know what to look for at the museum.' });
        say(q);
        if (all) celebrate();
        store.set('spy', [...found]);
        update();
      });
      grid.appendChild(b);
    });
    update();
    root.append(meter, grid);
  },

  words(p, root) {
    const grid = el('div', 'tiles words');
    p.items.forEach((w) => {
      const b = el('button', 'tile word');
      b.type = 'button';
      b.innerHTML = tileHTML(w.art, w.en, w.zh);
      b.addEventListener('click', () => { pop(b); say(pair(w, b.querySelector('.tile-en'))); });
      grid.appendChild(b);
    });
    root.appendChild(grid);
  },

  quiz(p, root) { return pictureQuiz(p, root); },

  // A badge to finish on: how many I Spy stars there are so far.
  end(p, root) {
    const n = store.get('spy', []).length;
    const total = (PAGES.find((x) => x.kind === 'spy') || { items: [] }).items.length;
    // The badge takes the picture's place, so it is the first thing seen.
    const badge = el('div', 'stage badge');
    badge.innerHTML = `
      <div class="medal" aria-hidden="true"><span>🏛️</span></div>
      <p class="badge-en" lang="en">Museum Explorer</p>
      <p class="badge-zh" lang="zh-Hant">博物館小探險家</p>
      <p class="badge-stars">${'⭐'.repeat(Math.min(n, total))}${'<i>☆</i>'.repeat(Math.max(total - n, 0))}</p>
      <p class="badge-note"><span lang="en">${n === total ? 'At the museum, look for all ten things on your I Spy list!' : 'Go back to I Spy and learn the rest of the list.'}</span><span lang="zh-Hant">${n === total ? '到了博物館，把「找一找」的東西都找出來！' : '回到「找一找」，把清單記完！'}</span></p>`;
    const again = el('button', 'ghost-btn', '<span aria-hidden="true">↺</span> <span lang="en">Start again</span> · <span lang="zh-Hant">從頭再看</span>');
    again.type = 'button';
    again.addEventListener('click', () => go(0));
    const stage = root.querySelector('.sheet .stage');
    if (stage) stage.replaceWith(badge); else root.appendChild(badge);
    root.appendChild(again);
    setTimeout(celebrate, 250);
  },
};

function progressDots(n) {
  const d = el('div', 'dots');
  d.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < n; i++) d.appendChild(el('span', 'dot'));
  return d;
}
function setDots(d, k) { [...d.children].forEach((c, i) => { c.classList.toggle('done', i < k); c.classList.toggle('now', i === k); }); }

function finishCard(card, art, line) {
  card.innerHTML = `<div class="done-art" aria-hidden="true">${art}</div><p class="en" lang="en">${wordsHTML(line.en)}</p><p class="zh" lang="zh-Hant">${esc(line.zh)}</p>`;
  const nx = el('button', 'primary-btn', '<span lang="en">Next page</span> · <span lang="zh-Hant">下一頁</span> <span aria-hidden="true">→</span>');
  nx.type = 'button'; nx.addEventListener('click', () => go(cur + 1));
  card.appendChild(nx);
  setReady(true);
  sfx.star();
  say(pair(line, card.querySelector('.en')));
  celebrate();
}
function nextQuestionBtn(onNext) {
  const nx = el('button', 'primary-btn', '<span lang="en">Next</span> · <span lang="zh-Hant">下一題</span> <span aria-hidden="true">→</span>');
  nx.type = 'button';
  nx.addEventListener('click', onNext);
  return nx;
}

function thumbsGame(p, root) {
  const card = el('div', 'game');
  const dots = progressDots(p.items.length);
  root.append(dots, card);
  let k = 0;

  function show() {
    setDots(dots, k);
    card.innerHTML = '';
    if (k >= p.items.length) { finishCard(card, '🏅', p.done || { en: 'You know the rules!', zh: '你知道規矩了！' }); return null; }
    const it = p.items[k];
    const sit = el('button', 'situation');
    sit.type = 'button';
    sit.innerHTML = `<span class="sit-art" aria-hidden="true">${it.art}</span><span class="en" lang="en">${wordsHTML(it.en)}</span><span class="zh" lang="zh-Hant">${esc(it.zh)}</span>`;
    const ask = () => say([{ text: 'Is this OK?' }, { text: it.en, el: sit.querySelector('.en') }]);
    sit.addEventListener('click', ask);
    const row = el('div', 'thumbs');
    const up = el('button', 'thumb up', '<span class="thumb-i" aria-hidden="true">👍</span><span lang="en">OK</span><span lang="zh-Hant">可以</span>');
    const down = el('button', 'thumb down', '<span class="thumb-i" aria-hidden="true">👎</span><span lang="en">Not OK</span><span lang="zh-Hant">不可以</span>');
    up.type = down.type = 'button';
    const why = el('div', 'why');
    let solved = false;
    const answer = (choice, btn) => {
      if (solved) return;
      if (choice === it.ok) {
        solved = true;
        btn.classList.add('right');
        (btn === up ? down : up).classList.add('faded');
        sit.classList.add(it.ok ? 'good' : 'bad');
        sfx.right();
        const y = yes(k);
        why.innerHTML = `<p class="en" lang="en">${wordsHTML(`${y.en} ${it.why.en}`)}</p><p class="zh" lang="zh-Hant">${esc(y.zh)}${esc(it.why.zh)}</p>`;
        why.appendChild(nextQuestionBtn(() => { k++; const a = show(); if (a && settings.auto) a(); }));
        say([{ text: `${y.en} ${it.why.en}`, el: why.querySelector('.en') }]);
      } else {
        wobble(btn); sfx.again();
        say(pair(TRY_AGAIN));
      }
    };
    up.addEventListener('click', () => answer(true, up));
    down.addEventListener('click', () => answer(false, down));
    row.append(up, down);
    card.append(sit, row, why);
    return ask;
  }
  return show();
}

function shuffle(a) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

function pictureQuiz(p, root) {
  const card = el('div', 'game');
  const dots = progressDots(p.items.length);
  root.append(dots, card);
  let k = 0;

  function show() {
    setDots(dots, k);
    card.innerHTML = '';
    if (k >= p.items.length) { finishCard(card, '🏆', { en: 'All done! You are a museum star!', zh: '全部答完了！你是博物館小明星！' }); return null; }
    const it = p.items[k];
    const q = el('button', 'question');
    q.type = 'button';
    q.innerHTML = `<span class="q-n" aria-hidden="true">${k + 1}</span><span class="en" lang="en">${wordsHTML(it.q.en)}</span><span class="zh" lang="zh-Hant">${esc(it.q.zh)}</span>`;
    const ask = () => say(pair(it.q, q.querySelector('.en')));
    q.addEventListener('click', ask);
    const row = el('div', 'opts');
    const answer = it.opts[0];
    let solved = false;
    const fb = el('div', 'why');
    const btns = [];
    shuffle(it.opts).forEach((o) => {
      const b = el('button', 'opt');
      b.type = 'button';
      b.innerHTML = `<span class="opt-art" aria-hidden="true">${o.art}</span><span class="opt-en" lang="en">${esc(o.en)}</span><span class="opt-zh" lang="zh-Hant">${esc(o.zh)}</span>`;
      b.addEventListener('click', () => {
        if (solved) return;
        if (o === answer) {
          solved = true;
          b.classList.add('right');
          btns.forEach((x) => { if (x !== b) x.classList.add('faded'); });
          sfx.right();
          const y = yes(k);
          fb.innerHTML = `<p class="en" lang="en">${esc(y.en)}</p>`;
          fb.appendChild(nextQuestionBtn(() => { k++; const a = show(); if (a && settings.auto) a(); }));
          say([{ text: y.en, el: fb.querySelector('.en') }, { text: o.en }]);
        } else {
          wobble(b); sfx.again();
          say(pair(TRY_AGAIN));
        }
      });
      btns.push(b);
      row.appendChild(b);
    });
    card.append(q, row, fb);
    return ask;
  }
  return show();
}

/* ── Confetti, small and short ─────────────────────────────────── */
function celebrate() {
  if (REDUCED.matches) return;
  const box = el('div', 'confetti');
  box.setAttribute('aria-hidden', 'true');
  const colors = ['#ff8a3d', '#2f6fd6', '#23a35a', '#ffd23f', '#e94f8a'];
  for (let i = 0; i < 36; i++) {
    const s = el('span');
    s.style.left = (Math.random() * 100) + '%';
    s.style.background = colors[i % colors.length];
    s.style.animationDelay = (Math.random() * 0.35) + 's';
    s.style.setProperty('--x', ((Math.random() - 0.5) * 160) + 'px');
    s.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg');
    if (i % 3 === 0) s.style.borderRadius = '50%';
    box.appendChild(s);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 2400);
}

/* ── Grown-up panel ─────────────────────────────────────────────── */
const dlg = $('#grownup');
$('#grownupBtn').addEventListener('click', () => { stopSpeech(); dlg.showModal(); });
$('#closeGrownup').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

const autoBox = $('#setAuto'), sfxBox = $('#setSfx'), rateIn = $('#setRate'), rateOut = $('#rateOut');
autoBox.checked = settings.auto;
sfxBox.checked = settings.sfx;
rateIn.value = settings.rate;
rateOut.textContent = Number(settings.rate).toFixed(2);
autoBox.addEventListener('change', () => { settings.auto = autoBox.checked; store.set('autoRead', settings.auto); });
sfxBox.addEventListener('change', () => { settings.sfx = sfxBox.checked; store.set('sfx', settings.sfx); if (settings.sfx) sfx.right(); });
rateIn.addEventListener('input', () => { settings.rate = Number(rateIn.value); rateOut.textContent = settings.rate.toFixed(2); store.set('rate', settings.rate); });

function fillVoicePickers() {
  const s = $('#setEnVoice');
  if (!s) return;
  const list = voiceList();
  const chosen = pickVoice();
  s.innerHTML = list.length ? '' : '<option value="">（這台裝置沒有英文語音）</option>';
  list.filter((v, i) => i === 0 || voiceScore(v) > -500).forEach((v, i) => {
    const o = el('option', null, esc(v.name) + (i === 0 ? ' ★ 建議' : ''));
    o.value = v.name;
    if (chosen && v.name === chosen.name) o.selected = true;
    s.appendChild(o);
  });
  s.onchange = () => { settings.enVoice = s.value; store.set('enVoice', s.value); };
}
if (HAS_TTS) { loadVoices(); speechSynthesis.addEventListener('voiceschanged', loadVoices); }
else $('#voiceSection').insertAdjacentHTML('beforeend', '<p class="small">這個瀏覽器不支援朗讀。This browser cannot read aloud.</p>');
$('#testEn').addEventListener('click', () => say([{ text: 'Hello! Let’s go to the museum.' }]));
$('#resetSpy').addEventListener('click', () => {
  store.set('spy', []);
  if (['spy', 'end'].includes(PAGES[cur].kind)) render();
  $('#resetSpy').textContent = '已清除 Cleared ✓';
});

/* ── Start ──────────────────────────────────────────────────────── */
const startEl = $('#start');
$('#startArt').innerHTML = svgArt('cover');
// Photo credits with links, for the grown-ups.
$('#photoCredits').innerHTML = Object.values(PHOTOS).map((ph) =>
  `<li>${esc(ph.what.zh)} · <span lang="en">${esc(ph.what.en)}</span><br><a href="${ph.url}" target="_blank" rel="noopener">${esc(ph.by)}</a>, ${esc(ph.lic)}, Wikimedia Commons</li>`).join('');
// Fetch the photos early, so no page waits on one.
Object.values(PHOTOS).forEach((ph) => { const i = new Image(); i.src = ph.src; });
function begin() {
  if (startEl.hidden) return;
  interacted = true;
  audio();
  startEl.classList.add('leaving');
  setTimeout(() => { startEl.hidden = true; }, REDUCED.matches ? 0 : 260);
  render();
}
$('#startBtn').addEventListener('click', begin);
function home() {
  stopSpeech();
  if (cur !== 0) sfx.flip();
  cur = 0;
  interacted = false;         // so page 1 is not read aloud behind the start
  render();                   // screen; begin() turns it back on and reads it
  startEl.classList.remove('leaving');
  startEl.hidden = false;
  startEl.scrollTop = 0;
  $('#startBtn').focus({ preventScroll: true });
}

const h = parseInt(location.hash.slice(1), 10);
if (h >= 1 && h <= PAGES.length) cur = h - 1;
render();
})();
