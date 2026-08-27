/* Renders LESSON (content.js) and wires up the activities. One copy of this
   file serves every lesson in the course, whichever part it belongs to.

   A lesson page loads three scripts in order: course.js (the map), content.js
   (this lesson), then this file. `LESSON.id` must match an id in course.js —
   that is how the page finds out which part it is in, and from the part it
   takes the exam kicker printed on question cards and the two clock settings.
   Nothing about Part 1, 2 or 3 is written into this file.

   Adding a block type is: write the builder in BLOCKS below, document it in
   the header of the lesson's content.js, and add it to _template/content.js so
   the next lesson can see it exists.

   Same contract as the other adult pages in this repo:

   - Nothing is scored and nothing is saved. A fresh load is a fresh lesson,
     which is what you want between two clients on the same laptop. The only
     things kept in localStorage are device settings: the chosen voice, the
     speed, and whether Chinese starts visible. The planning pads are plain
     inputs that nothing reads.
   - Chinese is hidden until it is asked for. Any English line can be tapped,
     or the 中文 switch in the bar reveals the lot.
   - A point dropped in the wrong bucket wobbles, explains itself and stays in
     the pool. Nothing accumulates anywhere, because the sort is a reason to
     argue about a point out loud, not a test.
   - The teacher panel is deliberately faint and opens over the lesson rather
     than replacing it, so a discussion in progress is never lost.
*/

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* Where this lesson sits in the course. Throws loudly at load if content.js
   carries an id that course.js has never heard of — a silent mismatch would
   show up much later as a question card with no "Part 2" on it. */
const { lesson: ENTRY, part: PART } = COURSE.find(LESSON.id);

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

/* A heading that carries both languages at once — used for section labels,
   bucket names and task prompts, none of which are being tested. */
function label(en, zh, tag = 'h4') {
  return `<${tag} class="label"><span class="en">${text(en)}</span>
    <span class="zh">${text(zh)}</span></${tag}>`;
}

function hint(en, zh) {
  return `<p class="hint">${text(en)}<span class="hint-zh">${text(zh)}</span></p>`;
}

// ---------------------------------------------------------------- blocks

let uid = 0;

const BLOCKS = {
  lead: (b) => `<div class="lead">${pair(b.en, b.zh)}</div>`,

  note: (b) => `
    <aside class="note">
      <h4><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      <div class="pair" data-zh>
        <p class="en">${text(b.bodyEn)}</p>
        <p class="zh">${text(b.bodyZh)}</p>
      </div>
    </aside>`,

  frames: (b) => `
    <div class="frames">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <ul>
        ${b.items.map((f) => `
          <li><span class="en">${text(f.en)}${speakBtn(f.en, 'say say-quiet')}</span>
            <span class="zh">${text(f.zh)}</span></li>`).join('')}
      </ul>
    </div>`,

  /* The shape library. The name and the kind of question it answers are face
     up; the three buckets and the lines that announce them are behind a tap,
     so the class can try to predict them first. */
  shapes: (b) => `
    <div class="shapes">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <ul class="shape-list">
        ${b.items.map((s) => `
          <li class="card shape" tabindex="0" role="button" aria-expanded="false">
            <p class="shape-top">
              <span class="shape-tag" aria-hidden="true">${text(s.tag)}</span>
              <span class="shape-name">${text(s.name)}<em>${text(s.nameZh)}</em></span>
            </p>
            <p class="shape-when">${text(s.whenEn)}<em>${text(s.whenZh)}</em></p>
            <div class="card-back">
              <ol class="shape-buckets">
                ${s.buckets.map((k, i) => `
                  <li>
                    <span class="shape-bucket">${text(k.en)}<em>${text(k.zh)}</em></span>
                    <span class="shape-line">${text(s.lines[i].en)}
                      ${speakBtn(s.lines[i].en, 'say say-quiet')}
                      <em>${text(s.lines[i].zh)}</em></span>
                  </li>`).join('')}
              </ol>
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  /* A bank of exam questions on one topic. The list is there to be read, but
     the button is the point: it pulls one question at random and does not pull
     it again until the bank is empty, so a session never drifts back to the
     same three questions. Nothing is stored — the count resets on reload. */
  qbank: (b) => `
    <div class="activity qbank" data-act="qbank">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <div class="q-bar">
        <button class="chip pick">Pick one<em>隨機抽題</em></button>
        <p class="q-left"><span class="n">${b.items.length}</span> left 題未抽</p>
      </div>
      <ol class="q-list">
        ${b.items.map((q) => `
          <li class="q-row pair" data-zh>
            <span class="en">${text(q.en)}${speakBtn(q.en, 'say say-quiet')}</span>
            <span class="zh">${text(q.zh)}</span>
            ${q.tag ? `<span class="q-tag">${text(q.tag)}<em>${text(q.tagZh)}</em></span>` : ''}
          </li>`).join('')}
      </ol>
    </div>`,

  /* A phrase bank: English on the left, Chinese on the right, the Chinese
     hidden until the row is tapped like every other line on the page. It is a
     reference block, not an activity — no ticks, no score. */
  bank: (b) => `
    <div class="bank">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <ul class="bank-list">
        ${b.rows.map((r) => `
          <li class="bank-row pair" data-zh>
            <span class="en">${text(r.en)}${speakBtn(r.en, 'say say-quiet')}</span>
            <span class="zh">${text(r.zh)}</span>
          </li>`).join('')}
      </ul>
    </div>`,

  /* Whole sentences worth saying as they stand — the same shape as `frames`,
     but numbered, because these are meant to be worked through in order. */
  sentences: (b) => `
    <div class="frames sentences">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <ol>
        ${b.items.map((s) => `
          <li><span class="en">${text(s.en)}${speakBtn(s.en, 'say say-quiet')}</span>
            <span class="zh">${text(s.zh)}</span></li>`).join('')}
      </ol>
    </div>`,

  /* A thin answer and the same answer done properly. The weak version is not
     wrong, only thin, so it is set quiet and grey rather than struck through —
     the grammar book's rule, where a colour that means "heading" cannot also
     mean "incorrect". What to add sits between the two, and the better version
     waits behind a reveal so the class can attempt the upgrade first. */
  upgrade: (b) => `
    <div class="upgrade">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}

      <div class="up-card up-before pair" data-zh>
        <p class="up-tag">${text(b.beforeTag)}<em>${text(b.beforeTagZh)}</em></p>
        <p class="en">${text(b.beforeEn)}${speakBtn(b.beforeEn, 'say say-quiet')}<button
          class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.beforeZh)}</p>
      </div>

      <ol class="up-adds">
        ${b.adds.map((a) => `
          <li><span class="en">${text(a.en)}</span><em>${text(a.zh)}</em></li>`).join('')}
      </ol>

      <button class="reveal" aria-expanded="false">Show the upgrade 顯示升級版</button>
      <div class="up-after-wrap" hidden>
        <div class="up-card up-after">
          <p class="up-tag">${text(b.afterTag)}<em>${text(b.afterTagZh)}</em></p>
          <p class="en">${text(b.afterEn)}${speakBtn(b.afterEn, 'say')}</p>
          <p class="up-zh">${text(b.afterZh)}</p>
        </div>
      </div>
    </div>`,

  /* The shape of a long answer laid out against the clock. Each row owns a
     stretch of seconds; while the speaking clock in the same step is running,
     the row covering the current second lights up, so the page shows the pace
     rather than describing it. Static and perfectly readable with no clock. */
  timeline: (b) => `
    <div class="timeline">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <ol class="tl-list">
        ${b.rows.map((r) => `
          <li class="tl-row" data-from="${r.from}" data-to="${r.to}">
            <span class="tl-when">${face(r.from)}–${face(r.to)}</span>
            <span class="tl-what">${text(r.en)}<em>${text(r.zh)}</em></span>
            ${r.sayEn ? `<span class="tl-say"><span class="en">${text(r.sayEn)}${speakBtn(r.sayEn, 'say say-quiet')}</span>
              <em>${text(r.sayZh)}</em></span>` : ''}
          </li>`).join('')}
      </ol>
    </div>`,

  /* An exam question, presented as a card. The kicker is the part this lesson
     belongs to, taken from course.js. `shape` is optional — a Part 1 question
     is not answered with a structure, so the line is simply left off. */
  question: (b) => `
    <div class="ask-card">
      <p class="ask-kicker">${text(b.kicker || PART.label)}</p>
      <p class="ask-q"><span class="en">${text(b.en)}${speakBtn(b.en, 'say')}
        <button class="zh-chip" title="顯示中文">中</button></span>
        <span class="zh">${text(b.zh)}</span></p>
      ${b.shape ? `<p class="ask-shape"><span class="ask-shape-lab">Shape 結構</span>
        ${text(b.shape)}<em>${text(b.shapeZh)}</em></p>` : ''}
    </div>`,

  /* A Part 2 cue card, set out the way the real one is: the task line, then
     the bullets, then the closing instruction. Deliberately plain — it is a
     reproduction of an exam object, not an activity. */
  cue: (b) => `
    <div class="cue-card">
      <p class="cue-kicker">${text(b.kicker || PART.label)}<span>candidate task card 應試卡</span></p>
      <p class="cue-task"><span class="en">${text(b.en)}${speakBtn(b.en, 'say')}
        <button class="zh-chip" title="顯示中文">中</button></span>
        <span class="zh">${text(b.zh)}</span></p>
      <p class="cue-lead">You should say:<em>你應該談到：</em></p>
      <ul class="cue-bullets">
        ${b.bullets.map((p) => `
          <li><span class="en">${text(p.en)}</span>
            <span class="zh">${text(p.zh)}</span></li>`).join('')}
      </ul>
      <p class="cue-close">${text(b.closeEn)}<em>${text(b.closeZh)}</em></p>
    </div>`,

  /* Bucket sort. `data-bucket` holds every id that is defensible for that
     point — usually one, occasionally two. */
  sort: (b) => {
    const id = `s${uid++}`;
    return `
      <div class="activity sort" data-act="sort" id="${id}">
        ${label(b.en, b.zh)}
        ${hint(b.hintEn, b.hintZh)}
        <ul class="pool">
          ${b.cards.map((c) => `
            <li class="point" data-bucket="${[].concat(c.bucket).join(' ')}">
              <button class="point-t">
                <span class="en">${text(c.en)}</span>
                <span class="zh">${text(c.zh)}</span>
              </button>
              <button class="zh-chip" title="顯示中文">中</button>
              <p class="why"><span class="en">${text(c.why.en)}</span>
                <span class="zh">${text(c.why.zh)}</span></p>
            </li>`).join('')}
        </ul>
        <div class="buckets">
          ${b.buckets.map((k) => `
            <div class="bucket" data-id="${text(k.id)}">
              <button class="bucket-head">
                <span class="bucket-t">${text(k.en)}<em>${text(k.zh)}</em></span>
                <span class="bucket-sub">${text(k.subEn)}<em>${text(k.subZh)}</em></span>
              </button>
              <ul class="bucket-list"></ul>
            </div>`).join('')}
        </div>
        <p class="tally"><span class="done">0</span> / ${b.cards.length}</p>
      </div>`;
  },

  model: (b) => `
    <div class="model">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <button class="reveal" aria-expanded="false">Show the answer 顯示範例</button>
      <div class="model-body" hidden>
        <button class="say say-all" data-say="${text(b.parts.map((p) => p.en).join(' '))}"
          aria-label="Listen to the whole answer">🔊 <em>整段</em></button>
        ${b.parts.map((p) => `
          <div class="model-part">
            <p class="model-tag">${text(p.tag)}<em>${text(p.tagZh)}</em></p>
            <div class="model-text">
              <p class="en">${text(p.en)}${speakBtn(p.en, 'say say-quiet')}</p>
              <p class="zh">${text(p.zh)}</p>
            </div>
          </div>`).join('')}
      </div>
    </div>`,

  /* Planning pad. Plain inputs — nothing reads them, nothing saves them, and a
     reload clears every one. */
  pad: (b) => `
    <div class="activity pad" data-act="pad">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <ol class="pad-rows">
        ${b.rows.map((r, i) => `
          <li class="pad-row">
            <span class="pad-n" aria-hidden="true">${i + 1}</span>
            <div class="pad-body">
              <label class="pad-lab">${text(r.en)}<em>${text(r.zh)}</em>
                <input type="text" class="pad-in" autocomplete="off" spellcheck="false"
                  placeholder="key words only 只寫關鍵字">
              </label>
              <button class="reveal reveal-quiet" aria-expanded="false">Stuck? 需要提示</button>
              <ul class="starters" hidden>
                ${r.ideas.map((idea) => `
                  <li><span class="en">${text(idea.en)}${speakBtn(idea.en, 'say say-quiet')}</span>
                    <span class="zh">${text(idea.zh)}</span></li>`).join('')}
              </ul>
            </div>
          </li>`).join('')}
      </ol>
    </div>`,

  /* Two clocks: a countdown for planning, then a count-up while he speaks.
     Both come from the part's own timings in course.js, so Part 2 gets its
     full minute of preparation and Part 3 its thirty seconds without either
     lesson having to say so. A block may override any of the four numbers.

     A part with `plan: 0` — Part 1, where there is no thinking time — gets the
     speaking clock only. The speaking clock is the only number on the page
     that means anything, and it is not a score: it marks the stretch an answer
     of this kind should land in. */
  clock: (b) => {
    const c = { ...PART.clock, ...(b.clock || {}) };

    const btns = `
      <div class="clock-btns">
        <button class="chip clock-go">
          <span class="go">Start<em>開始</em></span>
          <span class="stop">Stop<em>暫停</em></span>
        </button>
        <button class="chip clock-zero">Reset<em>重設</em></button>
      </div>`;

    const plan = c.plan ? `
      <div class="clock-unit" data-mode="down" data-start="${c.plan}">
        <p class="clock-name">Plan<em>計畫</em></p>
        <p class="clock-face">${face(c.plan)}</p>
        <p class="clock-note">${text(b.planNoteEn || `${face(c.plan)} of planning, then nothing more goes on the paper`)}<em>${text(b.planNoteZh || '計畫時間結束後，紙上不再新增任何東西')}</em></p>
        ${btns}
      </div>` : '';

    return `
      <div class="activity clocks" data-act="clock">
        ${label(b.en, b.zh)}
        <div class="clock-row">
          ${plan}
          <div class="clock-unit" data-mode="up" data-start="0"
               data-low="${c.bandLow}" data-high="${c.bandHigh}">
            <p class="clock-name">Speak<em>開口</em></p>
            <p class="clock-face">0:00</p>
            <p class="clock-note">aim to land between ${face(c.bandLow)} and ${face(c.bandHigh)}<em>目標落在 ${face(c.bandLow)} 到 ${face(c.bandHigh)} 之間</em></p>
            ${btns}
          </div>
        </div>
      </div>`;
  },

  task: (b) => `
    <div class="activity task" data-act="task">
      ${label(b.en, b.zh)}
      <div class="pair task-how" data-zh>
        <p class="en">${text(b.instructionEn)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.instructionZh)}</p>
      </div>
      <div class="checklist">
        <p class="checklist-head">Target phrases <em>目標句型</em>
          <span class="count"><span class="n">0</span> used 已使用</span></p>
        <ul>
          ${b.checklist.map((c) => `
            <li><button class="tick"><span class="box"></span>
              <span class="tick-t"><span class="en">${text(c.en)}</span>
              <span class="zh">${text(c.zh)}</span></span></button></li>`).join('')}
        </ul>
      </div>
    </div>`,
};

// ---------------------------------------------------------------- build

function buildCover() {
  const i = LESSON.intro;
  return `
    <header class="cover" id="top">
      <p class="kicker"><a class="kicker-up" href="../">IELTS Speaking 雅思口說</a>
        <span class="kicker-sep" aria-hidden="true">·</span>
        ${text(PART.label)} — ${text(PART.en)} ${text(PART.zh)}</p>
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
      ${LESSON.source ? `<p class="source">${text(LESSON.source.en)}
        <span class="zh">${text(LESSON.source.zh)}</span></p>` : ''}
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
      <p class="toc-up"><a href="../">← All lessons 全部課程</a></p>
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

document.title = `${LESSON.title} · ${LESSON.titleZh} — ${PART.label}`;
$('.bar-title').innerHTML =
  `${text(LESSON.title)} <span>${text(LESSON.titleZh)}</span>`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
LESSON.steps.forEach((s) => doc.appendChild(el(buildStep(s))));

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`ielts.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`ielts.${k}`, v); } catch { /* private mode */ } },
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
   lesson is a button inside it, so this stays in one place rather than being
   scattered across the block builders. */
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
    // the block wrapped it in — a .pair, a heading, a sortable point.
    let host = chip.parentElement;
    while (host && !host.querySelector('.zh')) host = host.parentElement;
    if (host) host.classList.toggle('open');
    return;
  }
  const line = t.closest('.pair[data-zh]');
  if (line && !t.closest('button')) { line.classList.toggle('open'); return; }

  // ---- shape card
  const card = t.closest('.card');
  if (card) {
    const open = card.classList.toggle('open');
    card.setAttribute('aria-expanded', String(open));
    return;
  }

  // ---- anything behind a "show me" button: the model answer, the pad ideas
  const reveal = t.closest('.reveal');
  if (reveal) {
    const body = reveal.nextElementSibling;
    const open = body.hidden;
    body.hidden = !open;
    reveal.setAttribute('aria-expanded', String(open));
    return;
  }

  const btn = t.closest('button');
  if (!btn) return;

  const act = btn.closest('[data-act]');
  if (!act) return;

  const kind = act.dataset.act;
  if (kind === 'sort') sortClick(act, btn);
  else if (kind === 'task') taskClick(act, btn);
  else if (kind === 'clock') clockClick(btn);
  else if (kind === 'qbank') qbankClick(act, btn);
});

// Shape cards are focusable, so keep them operable from the keyboard.
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

/* Pick a point, then pick the bucket it belongs in. A point that fits goes in
   and shows why; a point that does not wobbles, shows why anyway, and stays in
   the pool — the reason is the lesson, and the second attempt is free. */
function sortClick(act, btn) {
  const point = btn.closest('.point');

  if (point && btn.classList.contains('point-t')) {
    if (point.classList.contains('placed')) return;
    const was = point.classList.contains('picked');
    $$('.point.picked', act).forEach((p) => p.classList.remove('picked'));
    if (!was) point.classList.add('picked');
    return;
  }

  const head = btn.closest('.bucket-head');
  if (!head) return;

  const bucket = head.parentElement;
  const picked = $('.point.picked', act);
  if (!picked) { flash(bucket); return; }

  picked.classList.remove('picked');
  picked.classList.add('show-why');

  if (!picked.dataset.bucket.split(' ').includes(bucket.dataset.id)) {
    wobble(picked);
    return;
  }

  picked.classList.add('placed');
  $('.bucket-list', bucket).appendChild(picked);
  retally(act);
}

// Tapping a bucket with nothing selected: say so quietly rather than nothing.
function flash(bucket) {
  bucket.classList.add('lit');
  setTimeout(() => bucket.classList.remove('lit'), 600);
}

function retally(act) {
  const done = $$('.point.placed', act).length;
  const all = $$('.point', act).length;
  $('.tally .done', act).textContent = done;
  act.classList.toggle('all-done', done === all);
}

/* Pull one question at random, and do not pull it again until the bank runs
   out — then quietly start the whole bank over. The alternative, a button that
   can hand you the same question twice in a row, is worse than no button. */
function qbankClick(act, btn) {
  if (!btn.classList.contains('pick')) return;

  const all = $$('.q-row', act);
  let left = all.filter((q) => !q.classList.contains('used'));
  if (!left.length) {
    all.forEach((q) => q.classList.remove('used'));
    left = all;
  }

  all.forEach((q) => q.classList.remove('now'));
  const q = left[Math.floor(Math.random() * left.length)];
  q.classList.add('used', 'now');
  q.scrollIntoView({ block: 'center' });

  $('.q-left .n', act).textContent = all.filter((x) => !x.classList.contains('used')).length;
}

function taskClick(act, btn) {
  if (!btn.classList.contains('tick')) return;
  btn.classList.toggle('on');
  $('.count .n', act).textContent = $$('.tick.on', act).length;
}

// ---------------------------------------------------------------- clocks

const timers = new Map();

function face(sec) {
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
}

function tickClock(unit) {
  const down = unit.dataset.mode === 'down';
  let sec = Number(unit.dataset.sec);
  sec += down ? -1 : 1;

  if (down && sec <= 0) {
    sec = 0;
    stopClock(unit);
    unit.classList.add('up');
  }
  if (!down) {
    unit.classList.toggle('in', sec >= Number(unit.dataset.low));
    unit.classList.toggle('over', sec >= Number(unit.dataset.high));
  }

  unit.dataset.sec = sec;
  $('.clock-face', unit).textContent = face(sec);
  if (!down) syncTimeline(unit, sec);
}

/* Light the timeline row covering the current second. Scoped to the step the
   clock is in, so a lesson with two of each never lights the wrong one, and a
   lesson with no timeline at all costs one empty query. */
function syncTimeline(unit, sec) {
  const step = unit.closest('.step');
  if (!step) return;
  $$('.tl-row', step).forEach((row) => {
    const on = sec >= Number(row.dataset.from) && sec < Number(row.dataset.to);
    row.classList.toggle('now', on);
  });
}

function stopClock(unit) {
  clearInterval(timers.get(unit));
  timers.delete(unit);
  unit.classList.remove('running');
}

function resetClock(unit) {
  stopClock(unit);
  unit.dataset.sec = unit.dataset.start;
  unit.classList.remove('up', 'in', 'over');
  $('.clock-face', unit).textContent = face(Number(unit.dataset.start));

  const step = unit.closest('.step');
  if (step) $$('.tl-row', step).forEach((row) => row.classList.remove('now'));
}

function clockClick(btn) {
  const unit = btn.closest('.clock-unit');
  if (!unit) return;

  if (btn.classList.contains('clock-zero')) { resetClock(unit); return; }
  if (!btn.classList.contains('clock-go')) return;

  if (timers.has(unit)) { stopClock(unit); return; }

  // A countdown that has already run out starts again from the top.
  if (unit.dataset.mode === 'down' && Number(unit.dataset.sec) === 0) resetClock(unit);

  unit.classList.add('running');
  timers.set(unit, setInterval(() => tickClock(unit), 1000));
}

$$('.clock-unit').forEach((u) => { u.dataset.sec = u.dataset.start; });

// ---------------------------------------------------------------- speech

let voices = [];
let voice = null;

function loadVoices() {
  voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
  if (!voices.length) return;

  const saved = store.get('voice', '');
  voice = voices.find((v) => v.name === saved)
       || voices.find((v) => v.lang === 'en-GB' && /Serena|Daniel|Kate|Google UK/i.test(v.name))
       || voices.find((v) => v.lang === 'en-US' && /Samantha|Ava|Allison|Google US/i.test(v.name))
       || voices.find((v) => v.lang.startsWith('en'))
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
  if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = 'en-GB'; }
  u.rate = Number($('#rate').value);
  speechSynthesis.speak(u);
}

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  store.set('voice', e.target.value);
  speak('There are really two sides to this.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('I think it comes down to about three things.');
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

/* Reveal every answer at once — for going over a sort together, or for picking
   the lesson up in the middle. A point that takes two buckets goes into the
   first; the reason line says the other one is fine. */
$('#showAll').addEventListener('click', () => {
  $$('.sort').forEach((act) => {
    $$('.point:not(.placed)', act).forEach((p) => {
      const id = p.dataset.bucket.split(' ')[0];
      const bucket = $(`.bucket[data-id="${id}"] .bucket-list`, act);
      p.classList.remove('picked');
      p.classList.add('placed', 'show-why');
      bucket.appendChild(p);
    });
    retally(act);
  });

  $$('.card').forEach((c) => { c.classList.add('open'); c.setAttribute('aria-expanded', 'true'); });
  $$('.model-body, .starters, .up-after-wrap').forEach((b) => { b.hidden = false; });
  $$('.reveal').forEach((r) => r.setAttribute('aria-expanded', 'true'));

  // A question bank's row holds the question type behind the same tap as its
  // Chinese, so opening every answer has to open those too.
  $$('.q-row').forEach((r) => r.classList.add('open'));
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
