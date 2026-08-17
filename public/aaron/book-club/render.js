/* Renders GUIDE (content.js).

   The same house rules as the other adult pages, and the same chrome — top
   bar, contents, teacher panel — but this one is a discussion guide rather
   than an exercise sheet, so there is nothing to answer and nothing to score:

   - Nothing is saved. A fresh load is a fresh session, which is what you want
     between two clients on the same laptop. The only things kept in
     localStorage are device settings: the chosen voice, the speed, and whether
     Chinese starts visible.
   - Chinese is hidden until it is asked for. Any English line can be tapped,
     or the 中文 switch in the bar reveals the lot. A glossary card and a list
     of sentence starters are already behind a deliberate tap, so what is
     inside them stays bilingual — a second tap there would only be in the way.
   - The teacher panel opens over the guide rather than replacing it, so a
     discussion in progress is never lost. Its one action opens everything at
     once: every glossary card and every list of useful language.
*/

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

/* An English line with its Chinese held behind it. The 中 chip is the visible
   affordance; clicking anywhere in the block does the same thing. */
function pair(en, zh, cls = '') {
  if (!zh) return `<div class="pair ${cls}"><p class="en">${text(en)}</p></div>`;
  return `
    <div class="pair ${cls}" data-zh>
      <p class="en">${text(en)}<button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(zh)}</p>
    </div>`;
}

function speakBtn(sentence, cls = 'say') {
  return `<button class="${cls}" data-say="${text(sentence)}" title="Listen"
    aria-label="Listen">🔊</button>`;
}

function bilingual(x) {
  return typeof x === 'string' ? { en: x, zh: '' } : x;
}

// ---------------------------------------------------------------- blocks

const BLOCKS = {
  lead: (b) => `<div class="lead">${pair(b.en, b.zh)}</div>`,

  /* The cover card for one book: who wrote it, what it argues in one line, the
     summary a paragraph at a time, and who should read it. */
  book: (b) => `
    <div class="book">
      <p class="book-by"><span class="book-by-label">Author</span> ${text(b.author)}</p>
      <h4 class="label"><span class="en">Summary</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">書籍介紹</span></h4>
      ${b.summary.map((p) => `
        <div class="pair book-p" data-zh>
          <p class="en">${text(p.en)}${speakBtn(p.en, 'say say-quiet')}
            <button class="zh-chip" title="顯示中文">中</button></p>
          <p class="zh">${text(p.zh)}</p>
        </div>`).join('')}
      <div class="book-for pair" data-zh>
        <p class="en"><span class="book-for-label">▶ Who it’s for 這本書適合誰</span>
          ${text(b.forEn)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.forZh)}</p>
      </div>
    </div>`,

  // A pointer to another page in this site. Always bilingual: it is signage.
  link: (b) => `
    <a class="cross" href="${text(b.href)}">
      <span class="cross-go" aria-hidden="true">→</span>
      <span class="cross-t">
        <span class="cross-en">${text(b.en)}</span>
        <span class="cross-zh">${text(b.zh)}</span>
        <span class="cross-note">${text(b.noteEn)}</span>
        <span class="cross-note cross-note-zh">${text(b.noteZh)}</span>
      </span>
    </a>`,

  summary: (b) => `
    <div class="summary pair" data-zh>
      <p class="en">${text(b.en)}${speakBtn(b.en, 'say say-quiet')}
        <button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(b.zh)}</p>
    </div>`,

  discuss: (b) => `
    <div class="discuss">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      ${b.items.map((i, n) => `
        <div class="ask">
          <div class="pair" data-zh>
            <p class="en"><span class="ask-n">Q${n + 1}</span>${text(i.en)}
              ${speakBtn(i.en, 'say say-quiet')}
              <button class="zh-chip" title="顯示中文">中</button></p>
            <p class="zh">${text(i.zh)}</p>
          </div>
          <button class="reveal" aria-expanded="false">Useful language 可用句型</button>
          <ul class="starters" hidden>
            ${i.starters.map(bilingual).map((s) => `
              <li><span class="en">${text(s.en)}${speakBtn(s.en, 'say say-quiet')}</span>
                ${s.zh ? `<span class="zh">${text(s.zh)}</span>` : ''}</li>`).join('')}
          </ul>
        </div>`).join('')}
    </div>`,

  /* Concept vocabulary. English face up; the Chinese term and both definitions
     are behind a tap, so the room tries the idea before reading the gloss. */
  terms: (b) => `
    <div class="phrases">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      <p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh)}</span></p>
      <ul class="cards">
        ${b.items.map((i) => `
          <li class="card" tabindex="0" role="button" aria-expanded="false">
            <p class="card-en">${text(i.en)}${speakBtn(i.en)}</p>
            <div class="card-back">
              <p class="card-zh">${text(i.zh)}</p>
              <p class="term-def">${text(i.defEn)}</p>
              <p class="term-def term-def-zh">${text(i.defZh)}</p>
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  strands: (b) => `
    <div class="strands">
      <ul>
        ${b.items.map((i) => `
          <li><a href="#${text(i.id)}">
            <span class="n">${text(i.n)}</span>
            <span class="t"><span class="en">${text(i.en)}</span>
              <span class="zh">${text(i.zh)}</span></span>
          </a></li>`).join('')}
      </ul>
      <p class="strands-foot">${text(b.en)}<span class="zh">${text(b.zh)}</span></p>
    </div>`,
};

// ---------------------------------------------------------------- build

/* The breadcrumb is signage, so it is bilingual at all times and never hides
   behind a chip — the same reason the `link` block does not. */
function buildCrumbs() {
  if (!GUIDE.crumbs || !GUIDE.crumbs.length) return '';
  return `
    <nav class="crumbs" aria-label="Breadcrumb">
      ${GUIDE.crumbs.map((c) => `
        <a class="back" href="${text(c.href)}"><span class="crumb-go" aria-hidden="true">←</span>
          <span class="crumb-en">${text(c.en)}</span>
          <span class="crumb-zh">${text(c.zh)}</span></a>`)
        .join('<span class="crumb-sep" aria-hidden="true">/</span>')}
    </nav>`;
}

function buildCover() {
  const i = GUIDE.intro;
  return `
    <header class="cover" id="top">
      ${buildCrumbs()}
      <p class="kicker">${text(GUIDE.kicker)}</p>
      <h1><span class="en">${text(GUIDE.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(GUIDE.titleZh)}</span></h1>
      ${pair(i.en, i.zh, 'cover-intro')}
      <div class="goals">
        ${pair(i.goalsEn, i.goalsZh, 'goals-intro')}
        <ul>
          ${i.goals.map((g) => `
            <li class="pair" data-zh>
              <p class="en">${text(g.en)}</p>
              <p class="zh">${text(g.zh)}</p>
            </li>`).join('')}
        </ul>
      </div>
      <p class="source">${text(GUIDE.source.en)}
        <span class="zh">${text(GUIDE.source.zh)}</span></p>
    </header>`;
}

/* A book. The heading is a button, so the fold works from the keyboard and
   announces itself; the body carries `.step-body` and is hidden by the `folded`
   class rather than the `hidden` attribute, so print can override it and unfold
   everything. The tagline sits outside the body, so a folded book still says
   what it argues. */
function buildBook(s, open) {
  const blocks = s.blocks.map((b) => {
    const fn = BLOCKS[b.t];
    if (!fn) throw new Error(`Unknown block type "${b.t}" in ${s.id}`);
    return fn(b);
  }).join('');

  const tag = s.tagEn ? `
    <p class="step-tag">${text(s.tagEn)}<span class="zh">${text(s.tagZh)}</span></p>` : '';

  return `
    <section class="step ${open ? '' : 'folded'}" id="${s.id}">
      <h2 class="step-head">
        <button class="step-btn" aria-expanded="${open}" aria-controls="body-${s.id}">
          <span class="n">${text(s.n)}</span>
          <span class="titles"><span class="en">${text(s.en)}</span>
            <span class="zh">${text(s.zh)}</span></span>
          <span class="fold" aria-hidden="true"></span>
        </button>
      </h2>
      ${tag}
      <div class="step-body" id="body-${s.id}">
        ${blocks}
      </div>
    </section>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="Books">
      <p class="toc-head">Books 書單</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="en">Start</span><span class="zh">開始</span></span></a></li>
        ${GUIDE.books.map((s) => `
          <li><a href="#${s.id}" data-target="${s.id}"><span class="n">${text(s.n)}</span>
            <span class="t"><span class="en">${text(s.en)}</span>
            <span class="zh">${text(s.zh)}</span></span></a></li>`).join('')}
      </ul>
    </nav>`;
}

document.title = `${GUIDE.title} · ${GUIDE.titleZh}`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));

/* Open the book named in the URL, or the first one. Unlike the notebook page,
   which opens its newest session, this guide is not in date order — the way in
   is book 01. A hash that matches nothing falls back to the same place, so an
   old link cannot land on a page with everything shut. */
const wanted = decodeURIComponent(location.hash.slice(1));
const books = GUIDE.books;
const openId = books.some((s) => s.id === wanted)
  ? wanted
  : (books.length ? books[0].id : '');

books.forEach((s) => doc.appendChild(el(buildBook(s, s.id === openId))));

// ---------------------------------------------------------------- folding

function setFold(section, open) {
  section.classList.toggle('folded', !open);
  $('.step-btn', section).setAttribute('aria-expanded', String(open));
}

/* Two ways to open a book, and they mean different things.

   `openBook` is "take me to this one" — the contents list, the URL hash, and
   the four links in The Common Thread. It folds the others, so following a link
   lands on one book rather than on that book plus whatever happened to be open
   already.

   Tapping a heading is the other way, and it is deliberately additive: nothing
   else closes, so two books can sit open side by side when a question from one
   is worth putting next to a question from another. */
function openBook(id, sole = true) {
  const section = document.getElementById(id);
  // "#top" is the cover, and an unknown id is an old link — neither is a book,
  // and neither should fold the page down on its way past.
  if (!section || !section.classList.contains('step')) return null;
  if (sole) $$('.step').forEach((s) => { if (s !== section) setFold(s, false); });
  setFold(section, true);
  return section;
}

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`bc.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`bc.${k}`, v); } catch { /* private mode */ } },
};

const zhToggle = $('#zhToggle');

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
  $('#zhAll').checked = on;
  store.set('zh', on ? '1' : '0');
}

setAllZh(store.get('zh', '0') === '1');
zhToggle.addEventListener('click', () => setAllZh(!document.body.classList.contains('zh-all')));

/* One click handler for the whole document. Every interactive part of the
   guide is a button or a card inside it, so this stays in one place rather
   than being scattered across the block builders. */
doc.addEventListener('click', (e) => {
  const t = e.target;

  // ---- speak
  const say = t.closest('.say');
  if (say) { e.stopPropagation(); speak(say.dataset.say); return; }

  // ---- a link keeps its ordinary behaviour; one pointing at a book on this
  //      page opens it first, or the jump lands on a folded heading
  const a = t.closest('a');
  if (a) {
    const to = a.getAttribute('href') || '';
    if (to.startsWith('#')) openBook(decodeURIComponent(to.slice(1)));
    return;
  }

  // ---- fold / unfold a book
  const head = t.closest('.step-btn');
  if (head) {
    const section = head.closest('.step');
    setFold(section, section.classList.contains('folded'));
    return;
  }

  // ---- reveal Chinese for one line
  const chip = t.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    // Climb to the nearest ancestor that actually holds the Chinese, whatever
    // the block wrapped it in — a .pair, a heading, a card.
    let host = chip.parentElement;
    while (host && !host.querySelector('.zh')) host = host.parentElement;
    if (host) host.classList.toggle('open');
    return;
  }
  const line = t.closest('.pair[data-zh]');
  if (line && !t.closest('button')) { line.classList.toggle('open'); return; }

  // ---- glossary card
  const card = t.closest('.card');
  if (card) {
    const open = card.classList.toggle('open');
    card.setAttribute('aria-expanded', String(open));
    return;
  }

  // ---- useful language
  const reveal = t.closest('.reveal');
  if (reveal) {
    const list = reveal.nextElementSibling;
    const open = list.hidden;
    list.hidden = !open;
    reveal.setAttribute('aria-expanded', String(open));
  }
});

// Cards are focusable, so keep them operable from the keyboard.
doc.addEventListener('keydown', (e) => {
  const card = e.target.closest('.card');
  if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); card.click(); }
});

// ---------------------------------------------------------------- speech

let voices = [];
let voice = null;

function loadVoices() {
  voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
  if (!voices.length) return;

  const saved = store.get('voice', '');
  voice = voices.find((v) => v.name === saved)
       || voices.find((v) => v.lang === 'en-US' && /Samantha|Ava|Allison|Google US/i.test(v.name))
       || voices.find((v) => v.lang === 'en-US')
       || voices[0];

  const sel = $('#voicePick');
  sel.innerHTML = voices.map((v) =>
    `<option value="${text(v.name)}"${v === voice ? ' selected' : ''}>${text(v.name)} · ${text(v.lang)}</option>`
  ).join('');
}

loadVoices();
speechSynthesis.onvoiceschanged = loadVoices;

function speak(sentence) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(sentence);
  if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = 'en-US'; }
  u.rate = Number($('#rate').value);
  speechSynthesis.speak(u);
}

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  store.set('voice', e.target.value);
  speak('Are we actually pursuing a life that is truly our own?');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('Money is like salt — it amplifies whatever life you already have.');
});
$('#rate').value = store.get('rate', '0.95');

// ---------------------------------------------------------------- panels

const panel = $('#panel');
const panelBtn = $('#panelToggle');

function setPanel(open) {
  panel.hidden = !open;
  panelBtn.setAttribute('aria-expanded', String(open));
}

panelBtn.addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));

$('#zhAll').addEventListener('change', (e) => setAllZh(e.target.checked));

// Unfold the whole guide — for looking across the four books, or for printing.
$('#openAll').addEventListener('click', () => {
  $$('.step').forEach((s) => setFold(s, true));
  setPanel(false);
});

/* Open every glossary card and every list of useful language at once — for
   going over a book together, or for picking a session up in the middle. Books
   are unfolded first, or the cards would be turned over behind a closed lid. */
$('#showAll').addEventListener('click', () => {
  $$('.step').forEach((s) => setFold(s, true));
  $$('.card').forEach((c) => { c.classList.add('open'); c.setAttribute('aria-expanded', 'true'); });
  $$('.starters').forEach((s) => { s.hidden = false; });
  $$('.reveal').forEach((r) => r.setAttribute('aria-expanded', 'true'));
  setPanel(false);
});

// A reload is the reset: nothing is stored except the three device settings.
$('#reset').addEventListener('click', () => location.reload());

// ---------------------------------------------------------------- chrome

const links = new Map($$('.toc a').map((a) => [a.dataset.target, a]));

/* A contents link opens its book before the browser jumps to it — otherwise the
   anchor lands on a folded heading and nothing appears to happen. The
   hashchange handler below would do it too, but only if the hash actually
   changes: clicking the link for the book already showing does not fire one. */
$('#nav').addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  openBook(a.dataset.target);
  closeNav();
});

/* The bar marks the book being read by measuring rather than with an
   IntersectionObserver: an open book is several screens tall while the folded
   ones are a heading each, so at any moment several straddle a sensible trigger
   band and the observer reports whichever fired last. */
const marks = [$('#top'), ...$$('.step')];

function markHere() {
  const line = 90;
  let here = marks[0];
  marks.forEach((m) => { if (m.getBoundingClientRect().top <= line) here = m; });
  links.forEach((a) => a.classList.remove('here'));
  const a = links.get(here.id);
  if (a) { a.classList.add('here'); a.scrollIntoView({ block: 'nearest' }); }
}

markHere();
addEventListener('scroll', markHere, { passive: true });

const navToggle = $('#navToggle');
navToggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

function closeNav() {
  document.body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

$('.nav-scrim').addEventListener('click', closeNav);
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeNav();
  setPanel(false);
  speechSynthesis.cancel();
});

// Arriving on an anchor from outside, or editing the hash by hand.
addEventListener('hashchange', () => {
  const section = openBook(decodeURIComponent(location.hash.slice(1)));
  if (section) section.scrollIntoView();
});

/* Print is the handout, and a handout with folded books is blank paper. */
addEventListener('beforeprint', () => $$('.step').forEach((s) => setFold(s, true)));
