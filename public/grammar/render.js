/* Basic English Grammar — the chapter renderer.

   One renderer for all fifteen chapters. A chapter page loads, in order:

     ../book.js     the map: chapter and section titles, what is built
     content.js     this chapter's blocks, keyed by section number
     ../render.js   this file

   `content.js` never repeats a section title. It sets `CHAPTER.id` to match a
   chapter in book.js and fills `CHAPTER.sections` with `{ n, blocks }` — the
   titles, the numbering, the contents list and the anchors all come from the
   map. A section in the map with no entry here renders with its heading and a
   line saying the content has not been written yet, so the page always matches
   the book's contents and never quietly drops a section.

   Block types, all optional and repeatable in any order:

     lead      a framing sentence in italics, opening a section
     rule      the grammar point in prose, spoken aloud on request
     forms     a paradigm chart — I am / you are / he is, laid out at once
     table     a reference table, bilingual headers
     egs       numbered example sentences, each spoken
     contrast  two forms side by side, for telling them apart
     note      a boxed aside: a trap, with ✓ and ✕ examples
     steps     a numbered procedure
     mcq       practice — a sentence with one blank and two to four options
     order     practice — put the words in order, which is what a Mandarin
               speaker actually gets wrong and what four options cannot test

   House rules are in style.css. The two that matter here: nothing is scored
   and nothing is saved, and a wrong answer wobbles, explains itself and leaves
   the question open.
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

const chapter = BOOK.chapters.find((c) => c.id === CHAPTER.id);
if (!chapter) throw new Error(`No chapter "${CHAPTER.id}" in book.js`);

// Blocks by section number, so the map drives the order rather than the
// content file's own ordering.
const written = new Map((CHAPTER.sections || []).map((s) => [s.n, s.blocks]));

// A section number in content.js that the map has never heard of is a typo,
// and a silent one — it would simply never render. Say so instead.
written.forEach((_, n) => {
  if (!chapter.sections.some((s) => s.n === n)) {
    throw new Error(`Section "${n}" is not in chapter ${chapter.n} of book.js`);
  }
});

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

/* Every activity carries a bilingual heading. It is scaffolding, so both
   languages are always on. */
function label(b) {
  if (!b.en) return '';
  return `
    <h4 class="label"><span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span></h4>`;
}

function hint(b) {
  if (!b.hintEn) return '';
  return `<p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh)}</span></p>`;
}

function why(w) {
  if (!w) return '';
  return `
    <p class="why"><span class="en">${text(w.en)}</span>
      <span class="zh">${text(w.zh)}</span></p>`;
}

function tally(n) {
  return `<p class="tally"><span class="done">0</span> / ${n}</p>`;
}

/* Fisher–Yates, then a check that the pool did not come out already in order —
   a three-word sentence shuffles into its own answer often enough to matter,
   and a drill that is already solved teaches nothing. */
function shuffle(words) {
  const a = [...words];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  if (a.length > 1 && a.every((w, i) => w === words[i])) {
    [a[0], a[a.length - 1]] = [a[a.length - 1], a[0]];
  }
  return a;
}

// ---------------------------------------------------------------- blocks

const BLOCKS = {
  lead: (b) => `<div class="lead">${pair(b.en, b.zh)}</div>`,

  rule: (b) => `
    <div class="rule pair" data-zh>
      <p class="en">${text(b.en)}${speakBtn(b.en, 'say say-quiet')}
        <button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(b.zh)}</p>
    </div>`,

  /* The paradigm chart. Three columns — subject, the form of the verb, the
     rest of the sentence — so the eye runs down the middle column and sees
     the one thing that changes. `mark: true` on a row is the odd one out. */
  forms: (b) => `
    <div class="forms">
      <table>
        <caption><span class="en">${text(b.en)}</span>
          <span class="zh">${text(b.zh)}</span></caption>
        <tbody>
          ${b.rows.map((r) => {
            const whole = [r.sub, r.verb, r.rest].filter(Boolean).join(' ');
            return `
              <tr${r.zh ? ' data-zh' : ''}${r.mark ? ' class="mark"' : ''}>
                <td class="f-sub">${text(r.sub)}</td>
                <td class="f-verb">${text(r.verb)}</td>
                <td class="f-rest">${text(r.rest || '')}${speakBtn(whole, 'say say-quiet')}
                  ${r.zh ? '<button class="zh-chip" title="顯示中文">中</button>' : ''}
                  ${r.zh ? `<span class="zh">${text(r.zh)}</span>` : ''}</td>
              </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`,

  /* A reference table. A cell with a Chinese counterpart stacks the two, so
     the whole row opens on a tap. `zhCol` marks a column that is Chinese in
     its own right — a meaning, which is the answer and therefore stays
     covered until the row is tapped. */
  table: (b) => {
    const rows = b.rows.map((row, r) => {
      let hasZh = false;
      const cells = row.map((cell, c) => {
        if (b.zhCol === c) {
          hasZh = true;
          return `<td class="td-zh"><span class="zh">${text(cell)}</span></td>`;
        }
        const zh = b.rowsZh && b.rowsZh[r] ? b.rowsZh[r][c] : '';
        if (!zh) return `<td>${text(cell)}</td>`;
        hasZh = true;
        return `<td><span class="en">${text(cell)}</span><span class="zh">${text(zh)}</span></td>`;
      }).join('');
      return `<tr${hasZh ? ' data-zh' : ''}>${cells}</tr>`;
    }).join('');

    return `
      <div class="table-wrap">
        ${label(b)}
        <table>
          <thead><tr>${b.head.map((h) => `
            <th><span class="en">${text(h.en)}</span>
              <span class="zh">${text(h.zh)}</span></th>`).join('')}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  },

  egs: (b) => `
    <div class="egs">
      ${label(b)}
      <ol>
        ${b.items.map((i) => `
          <li class="pair" data-zh>
            <p class="en">${text(i.en)}${speakBtn(i.en, 'say say-quiet')}
              <button class="zh-chip" title="顯示中文">中</button></p>
            <p class="zh">${text(i.zh)}</p>
          </li>`).join('')}
      </ol>
    </div>`,

  contrast: (b) => `
    <div class="contrast">
      ${label(b)}
      ${hint(b)}
      <ul>
        ${b.pairs.map((p) => `
          <li>
            <div class="side pair" data-zh>
              <p class="en">${text(p.a.en)}${speakBtn(p.a.en, 'say say-quiet')}
                <button class="zh-chip" title="顯示中文">中</button></p>
              <p class="zh">${text(p.a.zh)}</p>
            </div>
            <span class="vs" aria-hidden="true">↔</span>
            <div class="side pair" data-zh>
              <p class="en">${text(p.b.en)}${speakBtn(p.b.en, 'say say-quiet')}
                <button class="zh-chip" title="顯示中文">中</button></p>
              <p class="zh">${text(p.b.zh)}</p>
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  note: (b) => `
    <aside class="note">
      <h4><span class="en">${text(b.en)}</span>
        <span class="zh">${text(b.zh)}</span></h4>
      <div class="pair" data-zh>
        <p class="en">${text(b.bodyEn)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.bodyZh)}</p>
      </div>
      ${(b.good || []).map((g) => `<p class="ex ex-good">${text(g)}${speakBtn(g, 'say say-quiet')}</p>`).join('')}
      ${(b.bad || []).map((x) => `<p class="ex ex-bad">${text(x)}</p>`).join('')}
    </aside>`,

  // A procedure is an instruction, so it stays bilingual throughout.
  steps: (b) => `
    <div class="steps">
      ${label(b)}
      <ol>
        ${b.items.map((i) => `
          <li><span class="en">${text(i.en)}</span>
            <span class="zh">${text(i.zh)}</span></li>`).join('')}
      </ol>
    </div>`,

  /* One blank, two to four options. The explanation is written for after the
     answer, so it stays shut until the blank is filled. */
  mcq: (b) => `
    <div class="activity qset" data-act="mcq">
      ${label(b)}
      ${hint(b)}
      ${b.items.map((it, n) => {
        const [before, after = ''] = text(it.text).split('___');
        return `
          <div class="q" data-answer="${it.answer}">
            <p class="q-line"><span class="q-n">${n + 1}</span>
              <span class="q-text">${before}<span class="slot"></span>${after}</span>
              ${speakBtn(it.text.replace('___', 'blank'), 'say say-quiet')}</p>
            <ul class="opts">
              ${it.options.map((o, i) => `
                <li><button class="opt" data-i="${i}" data-t="${text(o)}">${text(o)}</button></li>`).join('')}
            </ul>
            ${why(it.why)}
          </div>`;
      }).join('')}
      ${tally(b.items.length)}
    </div>`,

  /* Put the words in order. The cue is the Chinese, because word order is
     where the two languages actually part company — the learner knows what
     they want to say and has to find the English shape for it. */
  order: (b) => `
    <div class="activity" data-act="order">
      ${label(b)}
      ${hint(b)}
      ${b.items.map((it, n) => `
        <div class="order-q" data-answer="${text(it.answer.join(' '))}">
          <p class="order-cue"><span class="q-n">${n + 1}</span>
            <span class="cue-zh">${text(it.cue)}</span></p>
          <p class="built" data-ph="Tap the words in order 依序點選單字"></p>
          <ul class="pool">
            ${shuffle(it.answer).map((w) => `
              <li><button class="word" data-w="${text(w)}">${text(w)}</button></li>`).join('')}
          </ul>
          ${why(it.why)}
        </div>`).join('')}
      ${`<p class="tally"><span class="done">0</span> / ${b.items.length}</p>`}
    </div>`,
};

// ---------------------------------------------------------------- build

function secId(n) { return `s${n}`; }

function buildCover() {
  return `
    <header class="chapter-cover" id="top">
      <a class="up" href="../">← Contents 全書目錄</a>
      <h1><span class="cn">Chapter ${chapter.n}</span>
        <span class="en">${text(chapter.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(chapter.zh)}</span></h1>
      ${CHAPTER.intro ? pair(CHAPTER.intro.en, CHAPTER.intro.zh, 'cover-intro') : ''}
      <p class="source">${text(BOOK.sourceNote.en)}
        <span class="zh">${text(BOOK.sourceNote.zh)}</span></p>
    </header>`;
}

function buildSection(s) {
  const blocks = written.get(s.n);

  if (!blocks || !blocks.length) {
    return `
      <section class="step todo" id="${secId(s.n)}" aria-labelledby="h-${secId(s.n)}">
        <h2 class="step-head" id="h-${secId(s.n)}">
          <span class="n">${text(s.n)}</span>
          <span class="titles"><span class="en">${text(s.en)}</span>
            <span class="zh">${text(s.zh)}</span></span>
        </h2>
        <p class="awaiting">Not written yet.
          <span class="zh">這一節的內容還沒寫。</span></p>
      </section>`;
  }

  const body = blocks.map((b) => {
    const fn = BLOCKS[b.t];
    if (!fn) throw new Error(`Unknown block type "${b.t}" in section ${s.n}`);
    return fn(b);
  }).join('');

  return `
    <section class="step" id="${secId(s.n)}" aria-labelledby="h-${secId(s.n)}">
      <h2 class="step-head" id="h-${secId(s.n)}">
        <span class="n">${text(s.n)}</span>
        <span class="titles"><span class="en">${text(s.en)}</span>
          <span class="zh">${text(s.zh)}</span></span>
      </h2>
      ${body}
    </section>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="Sections in this chapter">
      <p class="toc-head">Chapter ${chapter.n}<a href="../">All chapters 全書</a></p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="en">Start</span><span class="zh">開始</span></span></a></li>
        ${chapter.sections.map((s) => `
          <li><a href="#${secId(s.n)}" data-target="${secId(s.n)}"
                 class="${written.has(s.n) ? '' : 'todo'}"><span class="n">${text(s.n)}</span>
            <span class="t"><span class="en">${text(s.en)}</span>
            <span class="zh">${text(s.zh)}</span></span></a></li>`).join('')}
      </ul>
    </nav>`;
}

/* Prev and next walk the built chapters only — a link to a folder that does
   not exist yet is a 404, and the hub is where the unbuilt ones are listed. */
function buildPager() {
  const i = BOOK.built.findIndex((c) => c.id === chapter.id);
  const prev = i > 0 ? BOOK.built[i - 1] : null;
  const next = i >= 0 && i < BOOK.built.length - 1 ? BOOK.built[i + 1] : null;

  // Only one chapter built means nothing to page to, and an empty bar of rules
  // reads as a bug. The way back to the contents is on the cover.
  if (!prev && !next) return '';

  const side = (c, dir, dirZh) => (c ? `
    <a class="${dir === 'Next' ? 'next' : 'prev'}" href="../${c.id}/">
      <span class="dir">${dir} ${dirZh}</span>
      <span class="t">${c.n}. ${text(c.en)}</span>
      <span class="zh">${text(c.zh)}</span>
    </a>` : '<span class="gap"></span>');

  return `
    <nav class="pager" aria-label="Other chapters">
      ${side(prev, 'Previous', '上一章')}
      ${side(next, 'Next', '下一章')}
    </nav>`;
}

document.title = `${chapter.n}. ${chapter.en} · ${chapter.zh} · ${BOOK.title}`;
$('#barTitle').innerHTML =
  `<a href="../">${text(BOOK.title)}</a> <span>${chapter.n}. ${text(chapter.zh)}</span>`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
chapter.sections.forEach((s) => doc.appendChild(el(buildSection(s))));
const pager = buildPager();
if (pager) doc.appendChild(el(pager));

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`beg.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`beg.${k}`, v); } catch { /* private mode */ } },
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

/* One click handler for the whole document. Every interactive part of the page
   is a button or a row inside it, so this stays in one place rather than being
   scattered across the block builders. */
doc.addEventListener('click', (e) => {
  const t = e.target;

  const say = t.closest('.say');
  if (say) { e.stopPropagation(); speak(say.dataset.say); return; }

  const chip = t.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    // Climb to the nearest ancestor that actually holds the Chinese, whatever
    // the block wrapped it in — a .pair, a heading, a table row.
    let host = chip.parentElement;
    while (host && !host.querySelector('.zh')) host = host.parentElement;
    if (host) host.classList.toggle('open');
    return;
  }

  const opt = t.closest('.opt');
  if (opt) { answer(opt); return; }

  const word = t.closest('.word');
  if (word) { place(word); return; }

  const placed = t.closest('.built .w');
  if (placed) { unplace(placed); return; }

  const line = t.closest('[data-zh]');
  if (line && !t.closest('button') && !t.closest('a')) { line.classList.toggle('open'); }
});

// ---------------------------------------------------------------- answering

function wobble(node) {
  node.classList.remove('no');
  void node.offsetWidth;   // restart the animation if it is already running
  node.classList.add('no');
  setTimeout(() => node.classList.remove('no'), 500);
}

function countSet(act) {
  const total = $$('.q, .order-q', act).length;
  const done = $$('.q.solved, .order-q.solved', act).length;
  const out = $('.tally .done', act);
  if (out) out.textContent = done;
  if (done === total) act.classList.add('all-done');
}

function answer(btn) {
  const q = btn.closest('.q');
  const act = btn.closest('[data-act]');
  if (!q || q.classList.contains('solved')) return;

  if (Number(btn.dataset.i) === Number(q.dataset.answer)) {
    const slot = $('.slot', q);
    if (slot) slot.textContent = btn.dataset.t;
    q.classList.add('solved');
    btn.classList.add('right');
    countSet(act);
  } else {
    wobble(btn);
    btn.classList.add('out');
  }
}

/* Word order. The next word is checked by its text rather than by which chip
   was tapped, so a sentence containing "the" twice accepts either chip — the
   learner is being asked for an order, not for a particular button. */
function place(btn) {
  const q = btn.closest('.order-q');
  if (!q || q.classList.contains('solved')) return;

  const target = q.dataset.answer.split(' ');
  const built = $('.built', q);
  const placed = $$('.w', built).length;

  if (btn.dataset.w !== target[placed]) { wobble(btn); return; }

  const w = document.createElement('span');
  w.className = 'w';
  w.textContent = btn.dataset.w;
  w.dataset.from = [...$$('.word', q)].indexOf(btn);
  if (placed) built.appendChild(document.createTextNode(' '));
  built.appendChild(w);
  btn.classList.add('used');

  if (placed + 1 === target.length) {
    q.classList.add('solved');
    countSet(q.closest('[data-act]'));
    speak(q.dataset.answer);
  }
}

/* Taking a word back returns it and everything after it, because the words
   after it were only correct in the order they were placed. */
function unplace(w) {
  const q = w.closest('.order-q');
  if (!q || q.classList.contains('solved')) return;

  const built = $('.built', q);
  const chips = $$('.word', q);
  const all = $$('.w', built);
  all.slice(all.indexOf(w)).forEach((x) => {
    const chip = chips[Number(x.dataset.from)];
    if (chip) chip.classList.remove('used');
    // The separating space is a text node of its own, so take it with the word
    // rather than leaving the box looking empty but not being empty — :empty
    // is what draws the "tap the words in order" prompt.
    const gap = x.previousSibling;
    if (gap && gap.nodeType === Node.TEXT_NODE) gap.remove();
    x.remove();
  });
}

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

  $('#voicePick').innerHTML = voices.map((v) =>
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
  speak('She is an engineer. They are at the office.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('My colleagues are not in the meeting room.');
});
$('#rate').value = store.get('rate', '0.9');

// ---------------------------------------------------------------- panel

const panel = $('#panel');
const panelBtn = $('#panelToggle');

function setPanel(open) {
  panel.hidden = !open;
  panelBtn.setAttribute('aria-expanded', String(open));
}

panelBtn.addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));

$('#zhAll').addEventListener('change', (e) => setAllZh(e.target.checked));

/* Reveal every answer at once — for going over a section together, or for
   picking the page up in the middle. */
$('#showAll').addEventListener('click', () => {
  $$('.q:not(.solved)').forEach((q) => {
    const right = $$('.opts .opt', q)[Number(q.dataset.answer)];
    if (!right) return;
    const slot = $('.slot', q);
    if (slot) slot.textContent = right.dataset.t;
    right.classList.add('right');
    q.classList.add('solved');
  });

  $$('.order-q:not(.solved)').forEach((q) => {
    const built = $('.built', q);
    built.textContent = q.dataset.answer;
    $$('.word', q).forEach((w) => w.classList.add('used'));
    q.classList.add('solved');
  });

  $$('[data-act]').forEach(countSet);
  setPanel(false);
});

// A reload is the reset: nothing is stored except the device settings.
$('#reset').addEventListener('click', () => location.reload());

// ---------------------------------------------------------------- chrome

const links = new Map($$('.toc a').map((a) => [a.dataset.target, a]));

const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((a) => a.classList.remove('here'));
    const a = links.get(e.target.id);
    if (a) { a.classList.add('here'); a.scrollIntoView({ block: 'nearest' }); }
  });
}, { rootMargin: '-72px 0px -70% 0px' });

[$('#top'), ...$$('.step')].forEach((s) => spy.observe(s));

const navToggle = $('#navToggle');
navToggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

function closeNav() {
  document.body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

$('#nav').addEventListener('click', (e) => { if (e.target.closest('a')) closeNav(); });
$('.nav-scrim').addEventListener('click', closeNav);
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeNav();
  setPanel(false);
  speechSynthesis.cancel();
});

// Print unfolds everything, so a handout is not a page of hidden answers.
window.addEventListener('beforeprint', () => $('#showAll').click());
