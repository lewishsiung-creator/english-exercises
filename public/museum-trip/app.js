/* Museum Trip — renderer. Content lives in content.js.

   House rules for young learners (see README, Word Play):
   - audio first: every English line is spoken and replayable. The Chinese is
     text only — Lewis took the Chinese voice out on 2026-11-12;
   - no failure states: a wrong tap wobbles and says "think again";
   - no timers, big touch targets, grown-up tools kept faint.
   Nothing is uploaded. Only the I Spy stamps and the sound settings are
   kept, in this device's localStorage. */
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

const store = {
  get(k, d) { try { const v = localStorage.getItem('museumTrip.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('museumTrip.' + k, JSON.stringify(v)); } catch (e) {} },
};

const settings = {
  auto:    store.get('auto', true),      // read each page aloud when it opens
  rate:    store.get('rate', 0.9),
  enVoice: store.get('enVoice', ''),
};

/* ── Voice ──────────────────────────────────────────────────────────
   English only. American young female first (Lewis's choice for kids'
   pages). Match on prefix: macOS localises names, e.g. "Flo (英文（美國）)". */
const EN_PREF = ['Flo', 'Shelley', 'Samantha', 'Ava', 'Allison', 'Susan', 'Zoe', 'Nicky',
  'Google US English', 'Microsoft Aria', 'Microsoft Jenny', 'Microsoft Zira'];
const HAS_TTS = 'speechSynthesis' in window;
let voices = [];

function voiceList() {
  const us = voices.filter((v) => /^en[-_]US/i.test(v.lang));
  return us.length ? us : voices.filter((v) => /^en/i.test(v.lang));
}
function pickVoice() {
  const list = voiceList();
  const saved = settings.enVoice;
  if (saved) { const v = list.find((x) => x.name === saved); if (v) return v; }
  for (const p of EN_PREF) {
    const v = list.find((x) => x.name.startsWith(p));
    if (v) return v;
  }
  return list[0] || null;
}
function loadVoices() { voices = speechSynthesis.getVoices(); fillVoicePickers(); }
if (HAS_TTS) { loadVoices(); speechSynthesis.addEventListener('voiceschanged', loadVoices); }

/* ── Speech queue ───────────────────────────────────────────────── */
let seq = 0;
function clearReading() { document.querySelectorAll('.reading').forEach((n) => n.classList.remove('reading')); }
function stopSpeech() { seq++; if (HAS_TTS) speechSynthesis.cancel(); clearReading(); }
// items: [{ text, el? }] — English only
function say(items, onDone) {
  stopSpeech();
  if (!HAS_TTS) { onDone && onDone(); return; }
  const id = seq;
  let i = 0;
  const next = () => {
    if (id !== seq) return;
    clearReading();
    if (i >= items.length) { onDone && onDone(); return; }
    const it = items[i++];
    const u = new SpeechSynthesisUtterance(it.text);
    const v = pickVoice();
    if (v) u.voice = v;
    u.lang = v ? v.lang : 'en-US';
    u.rate = settings.rate;
    u.pitch = 1.08;
    if (it.el) it.el.classList.add('reading');
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

/* ── Art ────────────────────────────────────────────────────────── */
function svgArt(kind) {
  // The museum seen across its pool: red-brick base (the 融合 idea), the
  // slanting solar "cloud wall" (雲牆), and water like the sea (渡海).
  const wallOnly = kind === 'wall';
  return `
<svg viewBox="0 0 320 200" class="scene" role="img" aria-label="${wallOnly ? 'The cloud wall of solar panels' : 'The museum beside its big pool'}">
  <defs>
    <linearGradient id="mtSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9fd4fb"/><stop offset="1" stop-color="#e6f5ff"/>
    </linearGradient>
    <pattern id="mtPv" width="11" height="9" patternUnits="userSpaceOnUse">
      <rect width="11" height="9" fill="#24508f"/><rect x="1" y="1" width="9" height="7" rx="1" fill="#3a6fbd"/>
    </pattern>
    <clipPath id="mtWall"><path d="${wallOnly ? 'M20 70 L300 30 L300 170 L20 170 Z' : 'M78 72 L262 46 L262 126 L78 126 Z'}"/></clipPath>
  </defs>
  <rect width="320" height="200" fill="url(#mtSky)"/>
  <circle cx="${wallOnly ? 36 : 280}" cy="30" r="15" fill="#ffd23f"/>
  <g fill="#fff" opacity=".95">
    <ellipse cx="60" cy="30" rx="26" ry="10"/><ellipse cx="78" cy="24" rx="18" ry="10"/>
    <ellipse cx="190" cy="22" rx="22" ry="8"/><ellipse cx="205" cy="18" rx="14" ry="8"/>
  </g>
  ${wallOnly ? `
  <path d="M20 70 L300 30 L300 170 L20 170 Z" fill="url(#mtPv)"/>
  <g clip-path="url(#mtWall)" fill="#fff" opacity=".55">
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
  <path d="M78 72 L262 46 L262 126 L78 126 Z" fill="url(#mtPv)"/>
  <g clip-path="url(#mtWall)" fill="#fff" opacity=".5">
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
  if (art.startsWith('svg:')) return `<div class="art art-svg">${svgArt(art.slice(4))}</div>`;
  return `<div class="art" aria-hidden="true">${art}</div>`;
}

/* ── Page shell ─────────────────────────────────────────────────── */
const main = $('#page');
const dotsBox = $('#chapters');
const counter = $('#counter');
const prevBtn = $('#prev');
const nextBtn = $('#next');
let cur = 0;
let interacted = false;   // speech may only start after the first tap

function chapterStart(id) { return PAGES.findIndex((p) => p.ch === id); }

CHAPTERS.forEach((c) => {
  const b = el('button', 'chap');
  b.type = 'button';
  b.dataset.ch = c.id;
  b.innerHTML = `<span class="chap-i" aria-hidden="true">${c.icon}</span><span class="chap-t"><span lang="en">${esc(c.en)}</span><span lang="zh-Hant">${esc(c.zh)}</span></span>`;
  b.setAttribute('aria-label', `${c.en} ${c.zh}`);
  b.addEventListener('click', () => go(chapterStart(c.id)));
  dotsBox.appendChild(b);
});

function linesBlock(p) {
  const box = el('div', 'lines');
  const items = [];
  (p.lines || []).forEach((ln) => {
    const row = el('div', 'line');
    const en = el('p', 'en', esc(ln.en)); en.lang = 'en';
    const zh = el('p', 'zh', esc(ln.zh)); zh.lang = 'zh-Hant';
    row.append(en, zh);
    en.addEventListener('click', () => say([{ text: ln.en, lang: 'en', el: en }]));
    box.appendChild(row);
    items.push({ ln, en, zh });
  });
  return { box, items };
}

function speakLines(items) {
  say(items.map(({ ln, en }) => ({ text: ln.en, lang: 'en', el: en })));
}

function soundBar(items) {
  const bar = el('div', 'sound');
  const a = el('button', 'say say-en', '<span aria-hidden="true">🔊</span> Listen');
  a.type = 'button';
  a.setAttribute('aria-label', 'Listen 聽英文');
  a.addEventListener('click', () => speakLines(items));
  bar.append(a);
  if (!HAS_TTS) bar.hidden = true;
  return bar;
}

function render() {
  stopSpeech();
  const p = PAGES[cur];
  main.innerHTML = '';
  main.className = 'page kind-' + p.kind;

  if (p.tag) {
    const t = el('p', 'tag', `<span lang="en">${esc(p.tag.en)}</span><span lang="zh-Hant">${esc(p.tag.zh)}</span>`);
    main.appendChild(t);
  }
  main.insertAdjacentHTML('beforeend', artHTML(p.art));
  const { box, items } = linesBlock(p);
  main.appendChild(box);
  main.appendChild(soundBar(items));

  const builder = KINDS[p.kind];
  let autoQueue = null;
  if (builder) autoQueue = builder(p, main);

  if (p.note) main.appendChild(el('p', 'note', `<span lang="en">${esc(p.note.en)}</span> <span lang="zh-Hant">${esc(p.note.zh)}</span>`));
  if (p.talk) {
    const d = el('details', 'talk');
    d.innerHTML = `<summary>💬 Talk about it · 聊一聊</summary><p lang="en">${esc(p.talk.en)}</p><p lang="zh-Hant">${esc(p.talk.zh)}</p>`;
    main.appendChild(d);
  }

  // nav
  counter.textContent = `${cur + 1} / ${PAGES.length}`;
  prevBtn.disabled = cur === 0;
  nextBtn.disabled = cur === PAGES.length - 1;
  dotsBox.querySelectorAll('.chap').forEach((b) => {
    const on = b.dataset.ch === p.ch;
    b.classList.toggle('on', on);
    if (on) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
  });
  try { history.replaceState(null, '', '#' + (cur + 1)); } catch (e) {}
  main.focus({ preventScroll: true });
  window.scrollTo(0, 0);

  if (interacted && settings.auto) {
    // A game page reads its instruction, then its first prompt.
    const q = [];
    items.forEach(({ ln, en, zh }) => q.push(...pair(ln, en, zh)));
    say(q, autoQueue || undefined);
  }
}

function go(i) {
  interacted = true;
  if (i < 0 || i >= PAGES.length || i === cur) { if (i === cur) render(); return; }
  cur = i;
  render();
}
prevBtn.addEventListener('click', () => go(cur - 1));
nextBtn.addEventListener('click', () => go(cur + 1));
document.addEventListener('keydown', (e) => {
  if (e.target.closest && e.target.closest('dialog, input, select, textarea')) return;
  if (e.key === 'ArrowRight') go(cur + 1);
  if (e.key === 'ArrowLeft') go(cur - 1);
});
document.addEventListener('pointerdown', () => { interacted = true; }, { once: true });

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

const KINDS = {
  // Tap a tile to hear what you can do there.
  hall(p, root) {
    const grid = el('div', 'tiles');
    p.tiles.forEach((t) => {
      const b = el('button', 'tile');
      b.type = 'button';
      b.innerHTML = `<span class="tile-art" aria-hidden="true">${t.art}</span><span class="tile-en" lang="en">${esc(t.en)}</span><span class="tile-zh" lang="zh-Hant">${esc(t.zh)}</span>`;
      b.addEventListener('click', () => { pop(b); say(pair(t, b.querySelector('.tile-en'), b.querySelector('.tile-zh'))); });
      grid.appendChild(b);
    });
    root.appendChild(grid);
  },

  // 👍 / 👎, one situation at a time; only the right answer moves on.
  manners(p, root) {
    return thumbsGame(p, root);
  },

  spy(p, root) {
    const found = new Set(store.get('spy', []));
    const count = el('p', 'count');
    const grid = el('div', 'tiles spy');
    const update = () => {
      count.innerHTML = `<span lang="en">Found ${found.size} of ${p.items.length}</span> · <span lang="zh-Hant">找到 ${found.size} 個，共 ${p.items.length} 個</span>`;
    };
    p.items.forEach((it) => {
      const b = el('button', 'tile');
      b.type = 'button';
      b.setAttribute('aria-pressed', found.has(it.id) ? 'true' : 'false');
      b.innerHTML = `<span class="tile-art" aria-hidden="true">${it.art}</span><span class="tile-en" lang="en">${esc(it.en)}</span><span class="tile-zh" lang="zh-Hant">${esc(it.zh)}</span><span class="stamp" aria-hidden="true">⭐</span>`;
      b.addEventListener('click', () => {
        if (found.has(it.id)) { found.delete(it.id); b.setAttribute('aria-pressed', 'false'); stopSpeech(); }
        else {
          found.add(it.id); b.setAttribute('aria-pressed', 'true'); pop(b);
          const all = found.size === p.items.length;
          const q = [{ text: `You found ${it.en}!`, lang: 'en', el: b.querySelector('.tile-en') }];
          if (all) q.push({ text: 'You found them all! Super!', lang: 'en' });
          say(q);
          if (all) celebrate();
        }
        store.set('spy', [...found]);
        update();
      });
      grid.appendChild(b);
    });
    update();
    root.append(count, grid);
  },

  words(p, root) {
    const grid = el('div', 'tiles words');
    p.items.forEach((w) => {
      const b = el('button', 'tile word');
      b.type = 'button';
      b.innerHTML = `<span class="tile-art" aria-hidden="true">${w.art}</span><span class="tile-en" lang="en">${esc(w.en)}</span><span class="tile-zh" lang="zh-Hant">${esc(w.zh)}</span>`;
      b.addEventListener('click', () => { pop(b); say(pair(w, b.querySelector('.tile-en'), b.querySelector('.tile-zh'))); });
      grid.appendChild(b);
    });
    root.appendChild(grid);
  },

  quiz(p, root) {
    return pictureQuiz(p, root);
  },

  end(p, root) {
    const b = el('button', 'big-btn', '<span aria-hidden="true">🔁</span> <span lang="en">Start again</span> · <span lang="zh-Hant">從頭再看</span>');
    b.type = 'button';
    b.addEventListener('click', () => go(0));
    root.appendChild(b);
    setTimeout(celebrate, 200);
  },
};

function progressDots(n) {
  const d = el('div', 'dots');
  for (let i = 0; i < n; i++) d.appendChild(el('span', 'dot'));
  return d;
}
function setDots(d, k) { [...d.children].forEach((c, i) => { c.classList.toggle('done', i < k); c.classList.toggle('now', i === k); }); }

function thumbsGame(p, root) {
  const card = el('div', 'game');
  const dots = progressDots(p.items.length);
  root.append(dots, card);
  let k = 0;

  function show() {
    setDots(dots, k);
    card.innerHTML = '';
    if (k >= p.items.length) {
      card.innerHTML = `<div class="done-art" aria-hidden="true">🏅</div><p class="en" lang="en">You know the museum rules!</p><p class="zh" lang="zh-Hant">你知道博物館的規矩了！</p>`;
      const nx = el('button', 'big-btn go', '<span lang="en">Next page</span> · <span lang="zh-Hant">下一頁</span> ▶');
      nx.type = 'button'; nx.addEventListener('click', () => go(cur + 1));
      card.appendChild(nx);
      say(pair({ en: 'You know the museum rules!', zh: '你知道博物館的規矩了！' }, card.querySelector('.en'), card.querySelector('.zh')));
      celebrate();
      return;
    }
    const it = p.items[k];
    const sit = el('button', 'situation');
    sit.type = 'button';
    sit.innerHTML = `<span class="sit-art" aria-hidden="true">${it.art}</span><span class="en" lang="en">${esc(it.en)}</span><span class="zh" lang="zh-Hant">${esc(it.zh)}</span>`;
    const ask = () => say([
      { text: 'Is this OK?', lang: 'en' }, { text: it.en, lang: 'en', el: sit.querySelector('.en') },
    ]);
    sit.addEventListener('click', ask);
    const row = el('div', 'thumbs');
    const up = el('button', 'thumb up', '<span aria-hidden="true">👍</span><span lang="en">OK</span><span lang="zh-Hant">可以</span>');
    const down = el('button', 'thumb down', '<span aria-hidden="true">👎</span><span lang="en">Not OK</span><span lang="zh-Hant">不可以</span>');
    up.type = down.type = 'button';
    const why = el('div', 'why');
    let solved = false;
    const answer = (choice, btn) => {
      if (solved) return;
      if (choice === it.ok) {
        solved = true;
        btn.classList.add('right');
        sit.classList.add(it.ok ? 'good' : 'bad');
        const y = yes(k);
        why.innerHTML = `<p class="en" lang="en">${esc(y.en)} ${esc(it.why.en)}</p><p class="zh" lang="zh-Hant">${esc(y.zh)}${esc(it.why.zh)}</p>`;
        const nx = el('button', 'big-btn go', '<span lang="en">Next</span> · <span lang="zh-Hant">下一題</span> ▶');
        nx.type = 'button';
        nx.addEventListener('click', () => { k++; const a = show(); if (a && settings.auto) a(); });
        why.appendChild(nx);
        say(pair({ en: `${y.en} ${it.why.en}`, zh: `${y.zh}${it.why.zh}` }, why.querySelector('.en'), why.querySelector('.zh')));
      } else {
        wobble(btn);
        say(pair(TRY_AGAIN));
      }
    };
    up.addEventListener('click', () => answer(true, up));
    down.addEventListener('click', () => answer(false, down));
    row.append(up, down);
    card.append(sit, row, why);
    return ask;
  }
  const firstAsk = show();
  return firstAsk;
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
    if (k >= p.items.length) {
      card.innerHTML = `<div class="done-art" aria-hidden="true">🏆</div><p class="en" lang="en">All done! You are a museum star!</p><p class="zh" lang="zh-Hant">全部答完了！你是博物館小明星！</p>`;
      const nx = el('button', 'big-btn go', '<span lang="en">Next page</span> · <span lang="zh-Hant">下一頁</span> ▶');
      nx.type = 'button'; nx.addEventListener('click', () => go(cur + 1));
      card.appendChild(nx);
      say(pair({ en: 'All done! You are a museum star!', zh: '全部答完了！你是博物館小明星！' }, card.querySelector('.en'), card.querySelector('.zh')));
      celebrate();
      return;
    }
    const it = p.items[k];
    const q = el('button', 'question');
    q.type = 'button';
    q.innerHTML = `<span class="en" lang="en">${esc(it.q.en)}</span><span class="zh" lang="zh-Hant">${esc(it.q.zh)}</span>`;
    const ask = () => say(pair(it.q, q.querySelector('.en'), q.querySelector('.zh')));
    q.addEventListener('click', ask);
    const row = el('div', 'opts');
    const answer = it.opts[0];
    let solved = false;
    const fb = el('div', 'why');
    shuffle(it.opts).forEach((o) => {
      const b = el('button', 'opt');
      b.type = 'button';
      b.innerHTML = `<span class="opt-art" aria-hidden="true">${o.art}</span><span lang="en">${esc(o.en)}</span><span lang="zh-Hant">${esc(o.zh)}</span>`;
      b.addEventListener('click', () => {
        if (solved) return;
        if (o === answer) {
          solved = true;
          b.classList.add('right');
          const y = yes(k);
          fb.innerHTML = `<p class="en" lang="en">${esc(y.en)}</p>`;
          const nx = el('button', 'big-btn go', '<span lang="en">Next</span> · <span lang="zh-Hant">下一題</span> ▶');
          nx.type = 'button';
          nx.addEventListener('click', () => { k++; const a = show(); if (a && settings.auto) a(); });
          fb.appendChild(nx);
          say([{ text: y.en, lang: 'en' }, { text: o.en, lang: 'en' }]);
        } else {
          wobble(b);
          say(pair(TRY_AGAIN));
        }
      });
      row.appendChild(b);
    });
    card.append(q, row, fb);
    return ask;
  }
  return show();
}

/* ── Confetti, small and short ─────────────────────────────────── */
function celebrate() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const box = el('div', 'confetti');
  box.setAttribute('aria-hidden', 'true');
  const bits = ['⭐', '🎉', '✨', '🌟', '🎈'];
  for (let i = 0; i < 18; i++) {
    const s = el('span', null, bits[i % bits.length]);
    s.style.left = (Math.random() * 100) + '%';
    s.style.animationDelay = (Math.random() * 0.4) + 's';
    s.style.fontSize = (18 + Math.random() * 18) + 'px';
    box.appendChild(s);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 2200);
}

/* ── Grown-up panel ─────────────────────────────────────────────── */
const dlg = $('#grownup');
$('#grownupBtn').addEventListener('click', () => { stopSpeech(); dlg.showModal(); });
$('#closeGrownup').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

const autoBox = $('#setAuto'), rateIn = $('#setRate'), rateOut = $('#rateOut');
autoBox.checked = settings.auto;
rateIn.value = settings.rate;
rateOut.textContent = Number(settings.rate).toFixed(2);
autoBox.addEventListener('change', () => { settings.auto = autoBox.checked; store.set('auto', settings.auto); });
rateIn.addEventListener('input', () => { settings.rate = Number(rateIn.value); rateOut.textContent = settings.rate.toFixed(2); store.set('rate', settings.rate); });

function fillVoicePickers() {
  [['#setEnVoice', 'enVoice']].forEach(([sel, key]) => {
    const s = $(sel);
    if (!s) return;
    const list = voiceList();
    const chosen = pickVoice();
    s.innerHTML = list.length ? '' : '<option value="">（這台裝置沒有這種語音）</option>';
    list.forEach((v) => {
      const o = el('option', null, esc(v.name));
      o.value = v.name;
      if (chosen && v.name === chosen.name) o.selected = true;
      s.appendChild(o);
    });
    s.onchange = () => { settings[key] = s.value; store.set(key, s.value); };
  });
}
if (!HAS_TTS) $('#voiceSection').insertAdjacentHTML('beforeend', '<p class="small">這個瀏覽器不支援朗讀。This browser cannot read aloud.</p>');
$('#testEn').addEventListener('click', () => say([{ text: 'Hello! Let’s go to the museum.', lang: 'en' }]));
$('#resetSpy').addEventListener('click', () => {
  store.set('spy', []);
  if (PAGES[cur].kind === 'spy') render();
  $('#resetSpy').textContent = '已清除 Cleared ✓';
});

/* ── Start ──────────────────────────────────────────────────────── */
const h = parseInt(location.hash.slice(1), 10);
if (h >= 1 && h <= PAGES.length) cur = h - 1;
render();
})();
