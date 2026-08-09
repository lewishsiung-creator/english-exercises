/* Renders LESSON (content.js) and wires up the activities.

   Same shape as the /wealth-habits/ renderer, and the same house rules, since
   this page is driven by the teacher in a session rather than worked through
   alone at home:

   - Nothing is scored and nothing is saved. A fresh load is a fresh lesson,
     which is what you want between two clients on the same laptop. The only
     things kept in localStorage are device settings: the chosen voice, the
     speed, and whether Chinese starts visible.
   - Chinese is hidden until it is asked for. Any English line can be tapped,
     or the 中文 switch in the bar reveals the lot.
   - Wrong answers do not accumulate anywhere. They wobble, explain themselves
     and stay open, because the answer is going to be discussed out loud.
   - The teacher panel is deliberately faint. It sits in the top bar and opens
     over the lesson rather than replacing it, so a discussion in progress is
     never lost.

   Two block types are new here and not in the wealth-habits renderer:
   `passage`, a reading text whose target words open a gloss where they stand,
   and `quiz`, a comprehension question that explains itself once answered.
*/

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* A handful of fields in content.js are written as HTML on purpose, because a
   usage note is unreadable without italics: the glossary definitions, the note
   bodies, and the `why` line under an answer. Those go in unescaped. Every
   other string goes through text(). */
function rich(s) {
  return String(s);
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

/* Lists that hold `{ en, zh }` rather than bare English. Accept either, so the
   page never depends on both files being edited in the same breath. */
function bilingual(x) {
  return typeof x === 'string' ? { en: x, zh: '' } : x;
}

/* Fisher–Yates, used only to scramble the right-hand column of a matching
   exercise so the pairs are not sitting on the same row. */
function shuffled(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------------------------------------------------------------- blocks

let uid = 0;

/* Splits a passage paragraph on its {{target words}}, turning each one into a
   button and pushing the gloss it opens onto `found`. A word with no matching
   glossary entry falls back to ordinary text rather than throwing — a typo in
   content.js should cost you a highlight, not the page. */
function marked(en, glossary, found) {
  return en.split(/(\{\{[^}]+\}\})/).map((part) => {
    const m = part.match(/^\{\{([^}]+)\}\}$/);
    if (!m) return text(part);

    const entry = glossary.find((g) => g.term === m[1]);
    if (!entry) return text(m[1]);

    const id = `g${uid++}`;
    found.push({ id, entry });
    return `<button class="term" data-g="${id}" aria-expanded="false">${text(m[1])}</button>`;
  }).join('');
}

// What the 🔊 button should read out: the paragraph without its braces.
function plain(en) {
  return en.replace(/\{\{([^}]+)\}\}/g, '$1');
}

const BLOCKS = {
  lead: (b) => `<div class="lead">${pair(b.en, b.zh)}</div>`,

  // A pointer to another page in this site. Signage, so it is bilingual at all
  // times and never hides behind a chip.
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

  passage: (b) => `
    <div class="reading">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      <p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh)}</span></p>
      ${b.paras.map((p) => {
        const found = [];
        const body = marked(p.en, b.glossary, found);
        return `
          <div class="para pair" data-zh>
            <p class="en">${body}${speakBtn(plain(p.en), 'say say-quiet')}
              <button class="zh-chip" title="顯示中文">中</button></p>
            ${found.map(({ id, entry }) => `
              <div class="gloss" id="${id}" hidden>
                <p class="gloss-w">${text(entry.term)}
                  <span class="gloss-zh">${text(entry.zh)}</span></p>
                <p class="gloss-def">${rich(entry.def)}</p>
              </div>`).join('')}
            <p class="zh">${text(p.zh)}</p>
          </div>`;
      }).join('')}
    </div>`,

  quiz: (b) => `
    <div class="activity quiz" data-act="quiz">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      <p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh)}</span></p>
      ${b.items.map((it, n) => `
        <div class="q" data-answer="${it.answer}">
          <div class="q-line pair" data-zh>
            <p class="en"><span class="gap-n">${n + 1}</span>
              <span class="q-text">${text(it.en)}
                <button class="zh-chip" title="顯示中文">中</button></span></p>
            <p class="zh">${text(it.zh)}</p>
          </div>
          <ul class="qopts">
            ${it.options.map((o, i) => `
              <li><button class="chip qopt" data-i="${i}">${text(o)}</button></li>`).join('')}
          </ul>
          <p class="why"><span class="en">${rich(it.why.en)}</span>
            <span class="zh">${rich(it.why.zh)}</span></p>
        </div>`).join('')}
    </div>`,

  quote: (b) => `
    <figure class="quote">
      <blockquote>
        <p class="en">${text(b.en)}${speakBtn(b.en, 'say say-quiet')}
          <button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.zh)}</p>
      </blockquote>
      <figcaption>— ${text(b.by)}</figcaption>
    </figure>`,

  summary: (b) => `
    <div class="summary pair" data-zh>
      <p class="en">${text(b.en)}${speakBtn(b.en, 'say say-quiet')}
        <button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(b.zh)}</p>
    </div>`,

  note: (b) => `
    <aside class="note">
      <h4><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      <div class="pair" data-zh>
        <p class="en">${rich(b.bodyEn)}</p>
        <p class="zh">${rich(b.bodyZh)}</p>
      </div>
    </aside>`,

  /* Collocation cards. English is face up; the Chinese and an example
     sentence are behind a tap, so the class can try the meaning first. */
  phrases: (b) => `
    <div class="phrases">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      <ul class="cards">
        ${b.items.map((i) => `
          <li class="card" tabindex="0" role="button" aria-expanded="false">
            <p class="card-en">${text(i.en)}${speakBtn(i.en)}</p>
            <div class="card-back">
              <p class="card-zh">${text(i.zh)}</p>
              <p class="card-eg">${text(i.eg)}${speakBtn(i.eg, 'say say-quiet')}</p>
              ${i.egZh ? `<p class="card-eg-zh">${text(i.egZh)}</p>` : ''}
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  match: (b) => {
    const id = `m${uid++}`;
    const rights = shuffled(b.pairs.map((p, i) => ({ ...p, i })));
    return `
      <div class="activity match" data-act="match" id="${id}">
        <h4 class="label"><span class="en">${text(b.en)}</span>
          <button class="zh-chip" title="顯示中文">中</button>
          <span class="zh">${text(b.zh)}</span></h4>
        <p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh)}</span></p>
        <div class="match-grid">
          <ul class="col col-a">
            ${b.pairs.map((p, i) => `
              <li><button class="chip" data-side="a" data-i="${i}">${text(p.a)}</button></li>`).join('')}
          </ul>
          <ul class="col col-b">
            ${rights.map((p) => `
              <li><button class="chip" data-side="b" data-i="${p.i}">${text(p.b)}</button></li>`).join('')}
          </ul>
        </div>
        <p class="tally"><span class="done">0</span> / ${b.pairs.length}</p>
      </div>`;
  },

  gap: (b) => `
    <div class="activity gaps" data-act="gap">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      ${b.items.map((it, n) => {
        const [before, after] = text(it.text).split('___');
        return `
          <div class="gap" data-answer="${it.answer}">
            <div class="gap-line pair" ${it.textZh ? 'data-zh' : ''}>
              <p class="en"><span class="gap-n">${n + 1}</span>
                <span class="gap-text">${before}<span class="slot"></span>${after || ''}${
                  it.textZh ? '<button class="zh-chip" title="顯示中文">中</button>' : ''}</span></p>
              ${it.textZh ? `<p class="zh">${text(it.textZh)}</p>` : ''}
            </div>
            <ul class="opts">
              ${it.options.map((o, i) => `
                <li><button class="chip" data-i="${i}">${text(o)}</button></li>`).join('')}
            </ul>
            <p class="why"><span class="en">${rich(it.why.en)}</span>
              <span class="zh">${rich(it.why.zh)}</span></p>
          </div>`;
      }).join('')}
    </div>`,

  poll: (b) => `
    <div class="activity poll" data-act="poll">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      <p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh)}</span></p>
      ${b.items.map((i) => `
        <div class="poll-row">
          <div class="pair" data-zh>
            <p class="en">${text(i.en)}<button class="zh-chip" title="顯示中文">中</button></p>
            <p class="zh">${text(i.zh)}</p>
          </div>
          <div class="poll-btns" role="group">
            <button class="chip" data-v="agree">Agree<em>同意</em></button>
            <button class="chip" data-v="unsure">Not sure<em>不確定</em></button>
            <button class="chip" data-v="disagree">Disagree<em>不同意</em></button>
          </div>
        </div>`).join('')}
    </div>`,

  discuss: (b) => `
    <div class="discuss">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      ${b.items.map((i) => `
        <div class="ask">
          <div class="pair" data-zh>
            <p class="en">${text(i.en)}${speakBtn(i.en, 'say say-quiet')}
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

  task: (b) => `
    <div class="activity task" data-act="task">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      <div class="pair task-how" data-zh>
        <p class="en">${text(b.instructionEn)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.instructionZh)}</p>
      </div>
      <ul class="prompts">
        ${b.prompts.map((p) => `
          <li><button class="prompt">
            <span class="en">${text(p.en)}</span>
            <span class="zh">${text(p.zh)}</span>
          </button></li>`).join('')}
      </ul>
      ${b.checklist ? `
        <div class="checklist">
          <p class="checklist-head">Target phrases <em>目標片語</em>
            <span class="count"><span class="n">0</span> used 已使用</span></p>
          <ul>
            ${b.checklist.map(bilingual).map((c) => `
              <li><button class="tick"><span class="box"></span>
                <span class="tick-t"><span class="en">${text(c.en)}</span>
                ${c.zh ? `<span class="zh">${text(c.zh)}</span>` : ''}</span></button></li>`).join('')}
          </ul>
        </div>` : ''}
      ${b.frames ? `
        <div class="frames">
          <p class="checklist-head">Sentence frames <em>句型</em></p>
          <ul>
            ${b.frames.map(bilingual).map((f) => `
              <li><span class="en">${text(f.en)}${speakBtn(f.en, 'say say-quiet')}</span>
                ${f.zh ? `<span class="zh">${text(f.zh)}</span>` : ''}</li>`).join('')}
          </ul>
        </div>` : ''}
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
        <ul>
          ${i.goals.map((g) => `
            <li class="pair" data-zh>
              <p class="en">${text(g.en)}</p>
              <p class="zh">${text(g.zh)}</p>
            </li>`).join('')}
        </ul>
      </div>
      <p class="source">${text(LESSON.source.en)}
        <span class="zh">${text(LESSON.source.zh)}</span></p>
    </header>`;
}

function buildStep(s) {
  const blocks = s.blocks.map((b) => {
    const fn = BLOCKS[b.t];
    if (!fn) throw new Error(`Unknown block type "${b.t}" in step ${s.id}`);
    return fn(b);
  }).join('');

  return `
    <section class="step" id="${s.id}" aria-labelledby="h-${s.id}">
      <h2 class="step-head" id="h-${s.id}">
        <span class="n">${s.n}</span>
        <span class="titles"><span class="en">${text(s.en)}</span>
          <button class="zh-chip" title="顯示中文">中</button>
          <span class="zh">${text(s.zh)}</span></span>
      </h2>
      ${blocks}
    </section>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="Lesson steps">
      <p class="toc-head">Lesson 課程</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="en">Start</span><span class="zh">開始</span></span></a></li>
        ${LESSON.steps.map((s) => `
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
LESSON.steps.forEach((s) => doc.appendChild(el(buildStep(s))));

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`hsm.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`hsm.${k}`, v); } catch { /* private mode */ } },
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
   lesson is a button or a card inside it, so this stays in one place rather
   than being scattered across the block builders. */
doc.addEventListener('click', (e) => {
  const t = e.target;

  // ---- speak
  const say = t.closest('.say');
  if (say) { e.stopPropagation(); speak(say.dataset.say); return; }

  // ---- a link out of the page keeps its ordinary behaviour
  if (t.closest('a')) return;

  // ---- a target word in the reading passage
  const term = t.closest('.term');
  if (term) { e.stopPropagation(); setGloss(term, term.getAttribute('aria-expanded') !== 'true'); return; }

  // ---- reveal Chinese for one line
  const chip = t.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    // Climb to the nearest ancestor that actually holds the Chinese, whatever
    // the block wrapped it in — a .pair, a heading, a blockquote.
    let host = chip.parentElement;
    while (host && !host.querySelector('.zh')) host = host.parentElement;
    if (host) host.classList.toggle('open');
    return;
  }
  const line = t.closest('.pair[data-zh]');
  if (line && !t.closest('button')) { line.classList.toggle('open'); return; }

  // ---- collocation card
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
    return;
  }

  const btn = t.closest('button');
  if (!btn) return;

  const act = btn.closest('[data-act]');
  if (!act) return;

  const kind = act.dataset.act;
  if (kind === 'match') matchClick(act, btn);
  else if (kind === 'gap') gapClick(btn);
  else if (kind === 'quiz') quizClick(btn);
  else if (kind === 'poll') pickOne(btn);
  else if (kind === 'task') taskClick(act, btn);
});

// Cards are focusable, so keep them operable from the keyboard.
doc.addEventListener('keydown', (e) => {
  const card = e.target.closest('.card');
  if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); card.click(); }
});

// ---------------------------------------------------------------- activities

function wobble(node) {
  node.classList.remove('no');
  void node.offsetWidth;   // restart the animation if it is already running
  node.classList.add('no');
  setTimeout(() => node.classList.remove('no'), 500);
}

// A glossed word and the card it opens, kept in step with each other.
function setGloss(term, open) {
  const box = document.getElementById(term.dataset.g);
  if (!box) return;
  box.hidden = !open;
  term.setAttribute('aria-expanded', String(open));
  term.classList.toggle('on', open);
}

/* Matching: pick a phrase on the left, then its partner on the right. A
   correct pair locks; a wrong one wobbles and clears, so the exercise cannot
   reach a stuck state. */
function matchClick(act, btn) {
  if (!btn.classList.contains('chip') || btn.classList.contains('done')) return;

  const picked = $('.chip.picked', act);

  if (!picked || picked.dataset.side === btn.dataset.side) {
    if (picked) picked.classList.remove('picked');
    if (picked === btn) return;
    btn.classList.add('picked');
    return;
  }

  if (picked.dataset.i === btn.dataset.i) {
    [picked, btn].forEach((c) => {
      c.classList.remove('picked');
      c.classList.add('done');
    });
    const done = $$('.chip.done', act).length / 2;
    $('.tally .done', act).textContent = done;
    if (done === $$('.col-a .chip', act).length) act.classList.add('all-done');
  } else {
    wobble(btn);
    wobble(picked);
    picked.classList.remove('picked');
  }
}

function gapClick(btn) {
  const gap = btn.closest('.gap');
  if (!gap || gap.classList.contains('solved')) return;

  if (Number(btn.dataset.i) === Number(gap.dataset.answer)) {
    $('.slot', gap).textContent = btn.textContent;
    gap.classList.add('solved');
    btn.classList.add('done');
  } else {
    wobble(btn);
    btn.classList.add('out');
  }
}

/* Comprehension: the wrong options stay on screen and stay legible. A wrong
   pick is dimmed rather than removed, because "why is that one tempting?" is
   the question the teacher actually wants to ask. */
function quizClick(btn) {
  if (!btn.classList.contains('qopt')) return;
  const q = btn.closest('.q');
  if (!q || q.classList.contains('solved')) return;

  if (Number(btn.dataset.i) === Number(q.dataset.answer)) {
    btn.classList.add('done');
    q.classList.add('solved');
  } else {
    wobble(btn);
    btn.classList.add('out');
  }
}

// Opinion buttons: one choice per row, and clicking it again clears.
function pickOne(btn) {
  if (!btn.classList.contains('chip')) return;
  const group = btn.parentElement;
  const was = btn.classList.contains('on');
  $$('.chip', group).forEach((c) => c.classList.remove('on'));
  if (!was) btn.classList.add('on');
}

function taskClick(act, btn) {
  if (btn.classList.contains('prompt')) {
    const was = btn.classList.contains('on');
    $$('.prompt', act).forEach((p) => p.classList.remove('on'));
    if (!was) btn.classList.add('on');
    return;
  }
  if (btn.classList.contains('tick')) {
    btn.classList.toggle('on');
    $('.count .n', act).textContent = $$('.tick.on', act).length;
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
  speak('The money arrived on schedule. The feeling he had been promised did not.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('He took the company public at twenty-seven.');
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

/* Reveal every answer at once — for going over an exercise together, or for
   picking the lesson up in the middle. */
$('#showAll').addEventListener('click', () => {
  $$('.gap:not(.solved)').forEach((gap) => {
    const right = $$('.opts .chip', gap)[Number(gap.dataset.answer)];
    $('.slot', gap).textContent = right.textContent;
    right.classList.add('done');
    gap.classList.add('solved');
  });

  $$('.q:not(.solved)').forEach((q) => {
    $$('.qopt', q)[Number(q.dataset.answer)].classList.add('done');
    q.classList.add('solved');
  });

  $$('.match').forEach((act) => {
    $$('.chip', act).forEach((c) => { c.classList.remove('picked'); c.classList.add('done'); });
    $('.tally .done', act).textContent = $$('.col-a .chip', act).length;
    act.classList.add('all-done');
  });

  $$('.term').forEach((t) => setGloss(t, true));
  $$('.card').forEach((c) => { c.classList.add('open'); c.setAttribute('aria-expanded', 'true'); });
  $$('.starters').forEach((s) => { s.hidden = false; });
  $$('.reveal').forEach((r) => r.setAttribute('aria-expanded', 'true'));
  setPanel(false);
});

// A reload is the reset: nothing is stored except the three device settings.
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
