/* Renders LESSON (content.js) and wires up the practice.

   This is exam material, so it behaves a little differently from a discussion
   lesson — but the house rules still hold:

   - Nothing is scored and nothing is saved. Each question set counts how many
     blanks are filled, and that is the only number on the page apart from the
     clock. A fresh load is a fresh session, which is what you want between two
     students on the same laptop.
   - Chinese is hidden until it is asked for. Any English line can be tapped,
     or the 中文 switch in the bar reveals the lot. Instructions, headings and
     the contents list stay bilingual — those are scaffolding.
   - A wrong option wobbles, dims and stays on screen; only the right one fills
     the blank, and filling it opens the explanation in both languages. Nothing
     is lost by guessing, which is the point: the explanation is the lesson.
   - The clock counts up because Part 5 is really a test of pace. Each set
     prints its own target at twenty seconds a question.
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

/* Every activity carries a bilingual heading. It is scaffolding, so both
   languages are always on. */
function label(b) {
  return `
    <h4 class="label"><span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span></h4>`;
}

function hint(b) {
  if (!b.hintEn) return '';
  return `<p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh)}</span></p>`;
}

// A, B, C, D — the labels the real answer sheet uses.
const LETTERS = ['A', 'B', 'C', 'D'];

function options(list) {
  return `
    <ul class="opts">
      ${list.map((o, i) => `
        <li><button class="opt" data-i="${i}" data-t="${text(o)}">
          <span class="lab">${LETTERS[i]}</span>${text(o)}</button></li>`).join('')}
    </ul>`;
}

function why(w) {
  return `
    <p class="why"><span class="en">${text(w.en)}</span>
      <span class="zh">${text(w.zh)}</span></p>`;
}

/* Twenty seconds a question is the working pace in the real test, so each set
   prints what it should cost. */
function pace(n) {
  const s = n * 20;
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

function tally(n) {
  return `
    <p class="tally"><span class="done">0</span> / ${n}
      <span class="pace">test pace ${pace(n)} 作答時間</span></p>`;
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

  /* A memorisable pattern. The pattern itself is face up — it is the thing to
     be learnt — and the examples wait behind a tap. */
  formula: (b) => `
    <div class="formula">
      <p class="f-head">
        ${b.n ? `<span class="f-n">公式 ${b.n}</span>` : ''}
        <code class="f-pattern">${text(b.pattern)}</code>
      </p>
      <div class="pair f-rule" data-zh>
        <p class="en">${text(b.en)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.zh)}</p>
      </div>
      <button class="reveal" aria-expanded="false">Examples 例句</button>
      <ul class="f-egs" hidden>
        ${b.egs.map((e) => `
          <li class="pair" data-zh>
            <p class="en">${text(e.en)}${speakBtn(e.en, 'say say-quiet')}
              <button class="zh-chip" title="顯示中文">中</button></p>
            <p class="zh">${text(e.zh)}</p>
          </li>`).join('')}
      </ul>
    </div>`,

  /* Reference tables. A cell with a Chinese counterpart stacks the two, so the
     whole row opens on a tap like any other line. `zhCol` marks a column that
     is Chinese in its own right — the meaning of a phrase, which is the
     answer and therefore stays hidden. */
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
      <div class="table-wrap ${b.cls ? `t-${b.cls}` : ''}">
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

  chips: (b) => `
    <div class="phrases">
      ${label(b)}
      <ul class="chip-list">
        ${b.items.map((i) => `
          <li class="pchip pair" data-zh>
            <p class="en">${text(i.en)}${speakBtn(i.en, 'say say-quiet')}
              <button class="zh-chip" title="顯示中文">中</button></p>
            <p class="zh">${text(i.zh)}</p>
          </li>`).join('')}
      </ul>
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
      ${b.good ? `<p class="ex ex-good">${text(b.good)}${speakBtn(b.good, 'say say-quiet')}</p>` : ''}
      ${b.also ? `<p class="ex ex-good">${text(b.also)}${speakBtn(b.also, 'say say-quiet')}</p>` : ''}
      ${b.bad ? `<p class="ex ex-bad">${text(b.bad)}</p>` : ''}
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

  /* Part 5: one blank, four options. The explanation is written for after the
     answer, so it stays shut until the blank is filled. */
  q5: (b) => `
    <div class="activity qset" data-act="q5">
      ${label(b)}
      ${hint(b)}
      ${b.items.map((it, n) => {
        const [before, after = ''] = text(it.text).split('___');
        return `
          <div class="q" data-answer="${it.answer}">
            <p class="q-line"><span class="q-n">${n + 1}</span>
              <span class="q-text">${before}<span class="slot"></span>${after}</span>
              ${speakBtn(it.text.replace('___', 'blank'), 'say say-quiet')}</p>
            ${options(it.options)}
            ${why(it.why)}
          </div>`;
      }).join('')}
      ${tally(b.items.length)}
    </div>`,

  /* Part 6: a business text with four blanks, the questions listed under it as
     they are on the real paper. Answering one writes into the passage above,
     so the text fills in as the set is worked through. */
  q6: (b) => {
    const blanks = [];
    const passage = b.body.map((chunk) => {
      if (typeof chunk === 'string') {
        return text(chunk).replace(/\n\n/g, '</p><p>');
      }
      const i = blanks.push(chunk) - 1;
      return `<span class="b6${chunk.long ? ' b6-long' : ''}" data-i="${i}">
        <span class="b6-n">${i + 1}</span><span class="slot"></span></span>`;
    }).join('');

    return `
      <div class="activity q6" data-act="q6">
        ${label(b)}
        <div class="letter">
          <p class="kind"><span class="en">${text(b.kind.en)}</span>
            <span class="zh">${text(b.kind.zh)}</span></p>
          <div class="passage"><p>${passage}</p></div>
        </div>
        <ol class="q6-qs">
          ${blanks.map((q, i) => `
            <li class="q${q.long ? ' q-long' : ''}" data-answer="${q.answer}" data-i="${i}">
              ${q.long ? `<p class="q-kind">Which sentence belongs here?
                <span class="hint-zh">哪一句該放在這裡？</span></p>` : ''}
              ${options(q.options)}
              ${why(q.why)}
            </li>`).join('')}
        </ol>
        ${tally(blanks.length)}
      </div>`;
  },

  // The fifteen formulas gathered for revision — pattern face up, example
  // behind a tap, and a link back to the topic it came from.
  cards: (b) => `
    <div class="phrases">
      ${label(b)}
      ${hint(b)}
      <ul class="fcards">
        ${b.items.map((i) => `
          <li class="fcard" tabindex="0" role="button" aria-expanded="false">
            <p class="fcard-head"><span class="fcard-n">${i.n}</span>
              <code>${text(i.pattern)}</code></p>
            <div class="fcard-back">
              <p class="fcard-eg">${text(i.eg)}${speakBtn(i.eg, 'say say-quiet')}</p>
              <p class="fcard-zh">${text(i.zh)}</p>
              <a class="fcard-to" href="#${text(i.to)}">Go to the topic 前往主題 →</a>
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  tiers: (b) => `
    <div class="tiers">
      ${label(b)}
      ${b.leadEn ? pair(b.leadEn, b.leadZh, 'tiers-lead') : ''}
      ${b.groups.map((g) => `
        <div class="tier">
          <p class="tier-head"><span class="en">${text(g.en)}</span>
            <span class="zh">${text(g.zh)}</span></p>
          <ol>
            ${g.items.map((i) => `
              <li>${i.to ? `<a href="#${text(i.to)}">` : '<span>'}
                <span class="en">${text(i.en)}</span>
                <span class="zh">${text(i.zh)}</span>
              ${i.to ? '</a>' : '</span>'}</li>`).join('')}
          </ol>
        </div>`).join('')}
    </div>`,
};

// ---------------------------------------------------------------- build

function buildCover() {
  const i = LESSON.intro;
  return `
    <header class="cover" id="top">
      <p class="kicker">${text(LESSON.kicker)}</p>
      <h1><span class="en">${text(LESSON.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(LESSON.titleZh)}</span></h1>
      ${pair(i.en, i.zh, 'cover-intro')}
      <div class="goals">
        ${pair(i.goalsEn, i.goalsZh, 'goals-intro')}
        <ol>
          ${i.goals.map((g) => `
            <li class="pair" data-zh>
              <p class="en">${text(g.en)}</p>
              <p class="zh">${text(g.zh)}</p>
            </li>`).join('')}
        </ol>
      </div>
      ${pair(i.formatEn, i.formatZh, 'format')}
      <p class="source">${text(LESSON.source.en)}
        <span class="zh">${text(LESSON.source.zh)}</span></p>
    </header>`;
}

function buildSection(s) {
  const blocks = s.blocks.map((b) => {
    const fn = BLOCKS[b.t];
    if (!fn) throw new Error(`Unknown block type "${b.t}" in section ${s.id}`);
    return fn(b);
  }).join('');

  return `
    <section class="step" id="${s.id}" aria-labelledby="h-${s.id}">
      <h2 class="step-head" id="h-${s.id}">
        <span class="n">${s.n}</span>
        <span class="titles"><span class="en">${text(s.en)}</span>
          <span class="zh">${text(s.zh)}</span></span>
        ${s.part6 ? '<span class="p6">Part 6</span>' : ''}
      </h2>
      ${blocks}
    </section>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="Grammar topics">
      <p class="toc-head">Topics 主題</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="en">Start</span><span class="zh">開始</span></span></a></li>
        ${LESSON.sections.map((s) => `
          <li><a href="#${s.id}" data-target="${s.id}"><span class="n">${s.n}</span>
            <span class="t"><span class="en">${text(s.en)}</span>
            <span class="zh">${text(s.zh)}</span></span></a></li>`).join('')}
      </ul>
    </nav>`;
}

document.title = `${LESSON.title} · ${LESSON.titleZh}`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
LESSON.sections.forEach((s) => doc.appendChild(el(buildSection(s))));

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`tg.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`tg.${k}`, v); } catch { /* private mode */ } },
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
   is a button, a card or a table row inside it, so this stays in one place
   rather than being scattered across the block builders. */
doc.addEventListener('click', (e) => {
  const t = e.target;

  // ---- speak
  const say = t.closest('.say');
  if (say) { e.stopPropagation(); speak(say.dataset.say); return; }

  // ---- reveal Chinese for one line
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

  // ---- formula card
  const card = t.closest('.fcard');
  if (card && !t.closest('a')) {
    const open = card.classList.toggle('open');
    card.setAttribute('aria-expanded', String(open));
    return;
  }

  // ---- examples behind a formula
  const reveal = t.closest('.reveal');
  if (reveal) {
    const list = reveal.nextElementSibling;
    const open = list.hidden;
    list.hidden = !open;
    reveal.setAttribute('aria-expanded', String(open));
    return;
  }

  // ---- an option in a question
  const opt = t.closest('.opt');
  if (opt) { answer(opt); return; }

  // ---- any other line with Chinese behind it
  const line = t.closest('[data-zh]');
  if (line && !t.closest('button') && !t.closest('a')) { line.classList.toggle('open'); }
});

// Cards are focusable, so keep them operable from the keyboard.
doc.addEventListener('keydown', (e) => {
  const card = e.target.closest('.fcard');
  if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); card.click(); }
});

// ---------------------------------------------------------------- answering

function wobble(node) {
  node.classList.remove('no');
  void node.offsetWidth;   // restart the animation if it is already running
  node.classList.add('no');
  setTimeout(() => node.classList.remove('no'), 500);
}

function countSet(act) {
  const done = $$('.q.solved', act).length;
  $('.tally .done', act).textContent = done;
  if (done === $$('.q', act).length) act.classList.add('all-done');
}

/* Fill the blank, in the sentence or in the Part 6 passage above it. A long
   option is a whole sentence, so it is written into the text as prose rather
   than dropped into a slot. */
function fill(q, act, answerText) {
  const inPassage = q.dataset.i !== undefined
    ? $(`.b6[data-i="${q.dataset.i}"]`, act)
    : null;

  if (inPassage) {
    $('.slot', inPassage).textContent = answerText;
    inPassage.classList.add('filled');
    return;
  }
  const slot = $('.slot', q);
  if (slot) slot.textContent = answerText;
}

function answer(btn) {
  const q = btn.closest('.q');
  const act = btn.closest('[data-act]');
  if (!q || q.classList.contains('solved')) return;

  if (Number(btn.dataset.i) === Number(q.dataset.answer)) {
    fill(q, act, btn.dataset.t);
    q.classList.add('solved');
    btn.classList.add('right');
    countSet(act);
  } else {
    wobble(btn);
    btn.classList.add('out');
  }
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
  speak('All applications must be submitted by Friday.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('The conference room has been reserved for the afternoon meeting.');
});
$('#rate').value = store.get('rate', '0.95');

// ---------------------------------------------------------------- timer

/* Part 5 is as much a test of pace as of grammar, so the clock counts up and
   each question set prints what it should have cost. It is never compared with
   anything automatically — that conversation belongs to the teacher. */
const clockBtn = $('#clock');
const panelClock = $('#panelClock');
let startedAt = 0;
let banked = 0;
let ticking = null;

function elapsed() {
  return banked + (ticking ? Date.now() - startedAt : 0);
}

function mmss(ms) {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

function paintClock() {
  const ms = elapsed();
  clockBtn.textContent = ms ? mmss(ms) : '⏱';
  clockBtn.classList.toggle('running', !!ticking);
  panelClock.textContent = mmss(ms);
}

clockBtn.addEventListener('click', () => {
  if (ticking) {
    banked = elapsed();
    clearInterval(ticking);
    ticking = null;
  } else {
    startedAt = Date.now();
    ticking = setInterval(paintClock, 250);
  }
  paintClock();
});

$('#clockReset').addEventListener('click', () => {
  clearInterval(ticking);
  ticking = null;
  banked = 0;
  paintClock();
});

paintClock();

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

/* Reveal every answer at once — for going over a set together, or for picking
   the page up in the middle. */
$('#showAll').addEventListener('click', () => {
  $$('.q:not(.solved)').forEach((q) => {
    const act = q.closest('[data-act]');
    const right = $$('.opts .opt', q)[Number(q.dataset.answer)];
    if (!right) return;
    fill(q, act, right.dataset.t);
    right.classList.add('right');
    q.classList.add('solved');
  });

  $$('.activity').forEach(countSet);

  $$('.fcard').forEach((c) => { c.classList.add('open'); c.setAttribute('aria-expanded', 'true'); });
  $$('.f-egs').forEach((s) => { s.hidden = false; });
  $$('.reveal').forEach((r) => r.setAttribute('aria-expanded', 'true'));
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
