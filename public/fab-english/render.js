/* Fab English — renderer.

   Builds the whole page from content.js. Three things are worth knowing before
   editing it:

   1. **One card per word, built once.** Switching between the theme view and
      the A–Z view moves the same nodes between containers rather than
      re-rendering. A word the teacher has opened stays open across the switch,
      and there is only ever one copy of any word in the DOM — which is what
      makes the search a plain show/hide.

   2. **The practice is generated, never authored.** Each gap is an example
      sentence from content.js with its own headword cut out, and the wrong
      options are other words from the same theme with the same part of speech.
      So the drill cannot drift from the word list: edit a sentence and its
      question changes with it. The cost is that a distractor is only
      *grammatically* plausible, not always semantically — which in a lesson is
      the interesting case anyway, and the teacher is there.

   3. **Nothing is saved except two device settings** — the chosen voice and
      speed, and whether all Chinese is showing. He teaches several clients on
      one laptop, so a reload has to be a clean lesson. There is no score and
      no progress to lose. */

'use strict';

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

const text = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/* The headword inside its example sentence. Bounded by "not a letter, digit or
   hyphen" rather than \b, because several of these words are hyphenated
   ("run-card", "off-line") and \b would happily match the tail of one. */
const keyRe = (key) => new RegExp('(^|[^A-Za-z0-9-])(' + esc(key) + ')($|[^A-Za-z0-9-])', 'i');

// ------------------------------------------------------------------- data

/* One flat list of every word, each carrying the group it came from and the
   exact form that appears in its sentence. Everything downstream — the cards,
   the search, the A–Z view, the practice — reads this rather than the nested
   content. */
const ENTRIES = [];

FAB.groups.forEach((g, gi) => {
  g.words.forEach((w) => {
    const key = w.k || w.w;
    const m = w.ex.match(keyRe(key));
    ENTRIES.push({
      ...w,
      key,
      form: m ? m[2] : key,     // as it is actually spelled in the sentence
      pos: w.p.split(/\s*\/\s*/)[0],
      group: g,
      gi,
      hay: (w.w + ' ' + key + ' ' + w.zh + ' ' + w.ex).toLowerCase(),
      card: null,
    });
  });
});

const num = (n) => String(n + 1).padStart(2, '0');

// ------------------------------------------------------------------- build

function buildNav() {
  return `
  <nav class="toc" aria-label="Themes 主題">
    <p class="toc-head">Themes 主題</p>
    <ul>
      ${FAB.groups.map((g, i) => `
        <li><a href="#sec-${g.id}" data-id="${g.id}">
          <span class="n">${num(i)}</span>
          <span class="t">
            <span class="en">${text(g.en)}</span>
            <span class="zh">${text(g.zh)}</span>
          </span>
        </a></li>`).join('')}
    </ul>
  </nav>`;
}

function buildCover() {
  return `
  <header class="cover">
    <p class="kicker">半導體廠常用英文</p>
    <h1>
      <span class="en">Fab English</span>
      <span class="zh">廠內常用英文單字 288</span>
    </h1>
    <p class="intro">${text(FAB.intro.en)}<span class="zh">${text(FAB.intro.zh)}</span></p>
  </header>`;
}

function buildTools() {
  return `
  <div class="tools">
    <div class="search-box">
      <span class="mag" aria-hidden="true">🔍</span>
      <!-- type="text", not "search": the native search field draws its own
           clear button, which would sit next to ours. -->
      <input id="q" type="text" autocomplete="off" spellcheck="false"
             aria-label="Search the words 搜尋單字"
             placeholder="Search English or 中文…">
      <button class="search-x" id="qx" hidden aria-label="Clear the search">✕</button>
    </div>
    <div class="views" role="group" aria-label="View 檢視方式">
      <button data-view="theme" aria-pressed="true">By theme<em>依主題</em></button>
      <button data-view="az" aria-pressed="false">A–Z<em>字母</em></button>
    </div>
  </div>
  <p class="search-note" id="qnote" hidden></p>`;
}

function buildCard(e) {
  const ex = text(e.ex).replace(keyRe(e.key), (m, a, b, c) => `${a}<b>${b}</b>${c}`);
  return `
  <article class="word">
    <div class="word-top">
      <span class="word-w">${text(e.w)}</span>
      <span class="word-p">${text(e.p)}</span>
      <button class="zh-chip" aria-label="Show the Chinese for ${text(e.w)}">中</button>
      <button class="say" data-say="${text(e.w + '. ' + e.ex)}"
              aria-label="Say ${text(e.w)}">🔊</button>
    </div>
    <p class="zh">${text(e.zh)}</p>
    <p class="word-ex">${ex}</p>
  </article>`;
}

function buildSection(g, i) {
  const n = g.words.length;
  return `
  <section class="sec" id="sec-${g.id}" data-id="${g.id}">
    <h2 class="sec-head">
      <span class="num">${num(i)}</span>
      <span class="t">
        <span class="en">${text(g.en)}</span>
        <span class="zh">${text(g.zh)}</span>
      </span>
    </h2>
    <p class="sec-note">
      ${text(g.note.en)}
      <span class="zh">${text(g.note.zh)}</span>
      <span class="sec-count">${n} words · ${n} 個字</span>
    </p>
    <div class="words" data-words="${g.id}"></div>
    <div class="drill" data-drill="${g.id}">
      <p class="drill-head">Practice <span class="zh">練習</span></p>
      <p class="drill-note">Tap the word that fills the gap. 點選可以填入空格的字。</p>
      <div class="gaps"></div>
      <button class="drill-more">Next eight <em>再來八題</em></button>
    </div>
  </section>`;
}

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function buildAz() {
  return `
  <div id="az" hidden>
    ${LETTERS.map((L) => `
      <h3 class="az-letter" data-letter="${L}">${L}</h3>
      <div class="words" data-letter="${L}"></div>`).join('')}
  </div>`;
}

function buildSource() {
  return `
  <p class="source">
    The word list is the plant's own vocabulary sheet, in its own wording. The
    example sentences were written for this page and are not part of it.
    <span class="zh">單字與中文釋義來自廠內單字表原文；例句為本頁另行撰寫，非原件內容。</span>
  </p>`;
}

// ------------------------------------------------------------------- render

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
// buildTools() returns two sibling elements, so it cannot go through el().
const tools = document.createElement('div');
tools.innerHTML = buildTools();
while (tools.firstElementChild) doc.appendChild(tools.firstElementChild);

FAB.groups.forEach((g, i) => doc.appendChild(el(buildSection(g, i))));
doc.appendChild(el(buildAz()));
doc.appendChild(el(`
  <p class="nothing" hidden>
    No word matches that.
    <span class="zh">沒有符合的單字。</span>
  </p>`));
doc.appendChild(el(buildSource()));

// Cards, built once and parked in their theme section.
ENTRIES.forEach((e) => {
  e.card = el(buildCard(e));
  e.card.__entry = e;
  $(`[data-words="${e.group.id}"]`).appendChild(e.card);
});

// ------------------------------------------------------------------- store

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`fe.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`fe.${k}`, v); } catch { /* private mode */ } },
};

// ------------------------------------------------------------------- Chinese

const zhToggle = $('#zhToggle');

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
  $('#zhAll').checked = on;
  store.set('zh', on ? '1' : '0');
}

setAllZh(store.get('zh', '0') === '1');
zhToggle.addEventListener('click', () => setAllZh(!document.body.classList.contains('zh-all')));

$('#zhAll').addEventListener('change', (e) => setAllZh(e.target.checked));

$('#exHide').addEventListener('change', (e) => {
  document.body.classList.toggle('no-ex', e.target.checked);
});

// ------------------------------------------------------------------- practice

const shuffled = (a) => {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};

/* Wrong options come from the same theme and the same part of speech, so the
   sentence stays grammatical whichever one is tapped and the learner has to
   read for meaning rather than for shape. A word already sitting in the
   sentence is skipped — it would give the answer away by looking wrong. */
function distractors(e, pool) {
  const inSentence = (o) => keyRe(o.key).test(e.ex);
  const same = pool.filter((o) => o !== e && o.pos === e.pos && !inSentence(o));
  const any  = pool.filter((o) => o !== e && !inSentence(o));
  const picked = shuffled(same).slice(0, 3);
  for (const o of shuffled(any)) {
    if (picked.length >= 3) break;
    if (!picked.includes(o)) picked.push(o);
  }
  return picked;
}

function buildGap(e, pool) {
  const opts = shuffled([e, ...distractors(e, pool)]);
  const sentence = text(e.ex).replace(keyRe(e.key),
    (m, a, b, c) => `${a}<span class="slot">?</span>${c}`);

  return `
  <div class="gap" data-a="${text(e.key.toLowerCase())}" data-form="${text(e.form)}">
    <p class="gap-s">${sentence}</p>
    <div class="opts">
      ${opts.map((o) => `<button class="opt" data-w="${text(o.key.toLowerCase())}">${text(o.w)}</button>`).join('')}
    </div>
  </div>`;
}

const DEAL = 8;
const drills = FAB.groups.map((g) => ({
  id: g.id,
  pool: ENTRIES.filter((e) => e.group === g),
  order: [],
  at: 0,
}));

function deal(d, fresh) {
  if (fresh || !d.order.length) { d.order = shuffled(d.pool); d.at = 0; }
  if (d.at >= d.order.length) d.at = 0;

  const slice = d.order.slice(d.at, d.at + DEAL);
  d.at += DEAL;

  const box = $(`[data-drill="${d.id}"] .gaps`);
  box.innerHTML = slice.map((e) => buildGap(e, d.pool)).join('');
}

drills.forEach((d) => deal(d, true));

function solve(gap) {
  gap.classList.add('solved');
  $('.slot', gap).textContent = gap.dataset.form;
}

// ------------------------------------------------------------------- clicks

doc.addEventListener('click', (e) => {
  const t = e.target;

  // ---- speak a word and its sentence
  const say = t.closest('.say');
  if (say) { e.stopPropagation(); speak(say.dataset.say); return; }

  // ---- the 中 chip opens just this card
  const chip = t.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    chip.closest('.word').classList.toggle('open');
    return;
  }

  // ---- a practice option
  const opt = t.closest('.opt');
  if (opt) {
    const gap = opt.closest('.gap');
    if (gap.classList.contains('solved')) return;
    if (opt.dataset.w === gap.dataset.a) { solve(gap); }
    else {
      opt.classList.remove('wrong');
      void opt.offsetWidth;                 // restart the animation
      opt.classList.add('wrong');
    }
    return;
  }

  // ---- deal the next eight
  const more = t.closest('.drill-more');
  if (more) { deal(drills.find((d) => d.id === more.closest('.drill').dataset.drill)); return; }

  // ---- anywhere else on a card: open it
  const card = t.closest('.word');
  if (card) card.classList.toggle('open');
});

// ------------------------------------------------------------------- views

let view = 'theme';

function setView(v) {
  if (v === view) return;
  view = v;

  $$('.views button').forEach((b) =>
    b.setAttribute('aria-pressed', String(b.dataset.view === v)));

  const az = $('#az');

  if (v === 'az') {
    ENTRIES.slice()
      .sort((a, b) => a.w.toLowerCase().localeCompare(b.w.toLowerCase()))
      .forEach((e) => {
        const L = e.w[0].toUpperCase();
        ($(`[data-letter="${L}"].words`, az) || $('[data-letter="A"].words', az)).appendChild(e.card);
      });
    $$('.sec').forEach((s) => { s.hidden = true; });
    az.hidden = false;
  } else {
    ENTRIES.forEach((e) => $(`[data-words="${e.group.id}"]`).appendChild(e.card));
    az.hidden = true;
    $$('.sec').forEach((s) => { s.hidden = false; });
  }

  applySearch();
}

$$('.views button').forEach((b) =>
  b.addEventListener('click', () => setView(b.dataset.view)));

// ------------------------------------------------------------------- search

const q = $('#q');
const qx = $('#qx');
const qnote = $('#qnote');

function applySearch() {
  const term = q.value.trim().toLowerCase();
  qx.hidden = !term;

  let shown = 0;
  ENTRIES.forEach((e) => {
    const hit = !term || e.hay.includes(term);
    e.card.hidden = !hit;
    if (hit) shown++;
  });

  if (view === 'theme') {
    // A theme with nothing left in it goes away entirely, drill and all.
    $$('.sec').forEach((s) => {
      const any = $$('.word', s).some((c) => !c.hidden);
      s.hidden = !any;
      $('.drill', s).hidden = !!term;
    });
  } else {
    $$('#az .words').forEach((box) => {
      const any = $$('.word', box).some((c) => !c.hidden);
      box.hidden = !any;
      $(`.az-letter[data-letter="${box.dataset.letter}"]`).hidden = !any;
    });
  }

  $('.nothing').hidden = shown > 0;

  qnote.hidden = !term;
  if (term) {
    qnote.innerHTML = `${shown} ${shown === 1 ? 'word matches' : 'words match'}
      <span class="zh">符合 ${shown} 個字</span>`;
  }
}

q.addEventListener('input', applySearch);
qx.addEventListener('click', () => { q.value = ''; applySearch(); q.focus(); });

// ------------------------------------------------------------------- speech

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
if ('speechSynthesis' in window) speechSynthesis.onvoiceschanged = loadVoices;

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
  speak('The lot goes to lithography after cleaning.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('Please check the number before you sign.');
});
$('#rate').value = store.get('rate', '0.95');

// ------------------------------------------------------------------- panel

const panel = $('#panel');
const panelBtn = $('#panelToggle');

function setPanel(open) {
  panel.hidden = !open;
  panelBtn.setAttribute('aria-expanded', String(open));
}

panelBtn.addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));

$('#showAll').addEventListener('click', () => {
  $$('.gap').forEach((g) => { if (!g.classList.contains('solved')) solve(g); });
  setPanel(false);
});

// A reload is the reset; this is the same thing without losing the two device
// settings, for a teacher going straight from one client into the next.
$('#reset').addEventListener('click', () => {
  q.value = '';
  setView('theme');
  applySearch();
  $$('.word.open').forEach((c) => c.classList.remove('open'));
  document.body.classList.remove('no-ex');
  $('#exHide').checked = false;
  drills.forEach((d) => deal(d, true));
  setPanel(false);
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ------------------------------------------------------------------- nav

const navBtn = $('#navToggle');
const scrim = $('.nav-scrim');

function setNav(open) {
  document.body.classList.toggle('nav-open', open);
  navBtn.setAttribute('aria-expanded', String(open));
  scrim.hidden = !open;
}

navBtn.addEventListener('click', () => setNav(!document.body.classList.contains('nav-open')));
scrim.addEventListener('click', () => setNav(false));

$('#nav').addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  setNav(false);
  // A theme link is meaningless in the A–Z view, so it takes you back first.
  setView('theme');
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  setNav(false);
  setPanel(false);
});

/* Which theme is on screen, for the contents list. Watching a band across the
   upper third rather than the whole viewport keeps the highlight from jumping
   between two headings while scrolling. */
const spy = new IntersectionObserver((rows) => {
  rows.forEach((r) => {
    if (!r.isIntersecting) return;
    const id = r.target.dataset.id;
    $$('#nav a').forEach((a) => a.classList.toggle('here', a.dataset.id === id));
  });
}, { rootMargin: '-15% 0px -70% 0px' });

$$('.sec').forEach((s) => spy.observe(s));
