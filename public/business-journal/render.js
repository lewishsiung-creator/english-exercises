/* Renders LESSON (content.js) and wires up the activities. One copy of this
   file serves every reading in 國際商業期刊導讀; each reading's folder holds
   only a thin index.html, its content.js and its img/.

   The reading's number and the link back to the contents page come from
   course.js, looked up by LESSON.id. A reading course.js has never heard of
   throws on load rather than rendering without its place in the series.

   A reading is driven by the teacher in a session, not worked through alone at
   home, so it behaves accordingly:

   - Nothing is scored and nothing is saved. A fresh load is a fresh lesson,
     which is what you want between two clients on the same laptop. The only
     things kept in localStorage are device settings: the chosen voice and
     whether Chinese starts visible.
   - Chinese is hidden until it is asked for. Any English line can be tapped,
     or the 中文 switch in the bar reveals the lot.
   - Wrong answers do not accumulate anywhere. They wobble, explain themselves
     and stay open, because the answer is going to be discussed out loud.
   - The teacher panel is deliberately faint. It sits in the top bar and opens
     over the lesson rather than replacing it, so a discussion in progress is
     never lost.
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

/* Photographs carry no lesson content, so they are decorative rather than
   load-bearing: the alt text describes them for a screen reader and stops
   there, and width/height are fixed so nothing jumps as they arrive. */
function photo(p, cls = '') {
  if (!p) return '';
  return `
    <figure class="photo ${cls}">
      <img src="${text(p.src)}" alt="${text(p.alt)}" width="1600" height="900"
           loading="lazy" decoding="async"
           style="object-position:${text(p.pos || '50% 50%')}">
      <figcaption>${text(p.by)} · Pexels</figcaption>
    </figure>`;
}

function speakBtn(sentence, cls = 'say') {
  return `<button class="${cls}" data-say="${text(sentence)}" title="Listen"
    aria-label="Listen">🔊</button>`;
}

/* Lists that used to hold bare English strings — sentence starters, sentence
   frames, tick-list phrases — now hold `{ en, zh }`. Accept either, so the page
   never depends on both files being edited in the same breath. */
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
   content.js should cost a highlight, not the page. Ported from
   /happy-sexy-millionaire/. */
function marked(en, glossary, found) {
  return en.split(/(\{\{[^}]+\}\})/).map((part) => {
    const m = part.match(/^\{\{([^}]+)\}\}$/);
    if (!m) return numbered(text(part));

    const entry = glossary.find((g) => g.term === m[1]);
    if (!entry) return text(m[1]);

    const id = `g${uid++}`;
    found.push({ id, entry });
    return `<button class="term" data-g="${id}" aria-expanded="false">${text(m[1])}</button>`;
  }).join('');
}

/* A [[number]] in a passage marks where an item the reading counts through
   begins — protocol 4, habit 2 — so the class can be sent to it by number.
   Takes text that is already escaped. */
function numbered(html) {
  return html.replace(/\[\[(\d+)\]\]\s*/g,
    '<span class="pmark">$1</span>');
}

// What the 🔊 button should read out: the paragraph without braces or numbers.
function plain(en) {
  return en.replace(/\[\[\d+\]\]\s*/g, '').replace(/\{\{([^}]+)\}\}/g, '$1');
}

const BLOCKS = {
  lead: (b) => `<div class="lead">${pair(b.en, b.zh)}</div>`,

  quote: (b) => `
    <figure class="quote">
      <blockquote>
        <p class="en">${text(b.en)}${speakBtn(b.en, 'say say-quiet')}
          <button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.zh)}</p>
      </blockquote>
      <figcaption>— ${text(b.by)}</figcaption>
    </figure>`,

  /* A teaching paragraph. With `n` and `titleEn`/`titleZh` it becomes one
     numbered point in a run of them — the shape a summary table of an
     interview or a report takes. Without them it is a plain paragraph, which
     is how the first two readings use it. */
  summary: (b) => `
    <div class="summary${b.titleEn ? ' summary-point' : ''}">
      ${b.titleEn ? `
        <h4 class="point-head">
          ${b.n ? `<span class="point-n">${text(b.n)}</span>` : ''}
          <span class="titles"><span class="en">${text(b.titleEn)}</span>
            <button class="zh-chip" title="顯示中文">中</button>
            <span class="zh">${text(b.titleZh)}</span></span>
        </h4>` : ''}
      <div class="pair" data-zh>
        <p class="en">${text(b.en)}${speakBtn(b.en, 'say say-quiet')}
          <button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.zh)}</p>
      </div>
    </div>`,

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
            <p class="card-en">${text(i.en)}${i.pos ? `<span class="card-pos">${text(i.pos)}</span>` : ''}${speakBtn(i.en)}</p>
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
        <!-- Lines cannot be drawn on paper, so the printed answer key gets the
             pairs as a list instead. Hidden on screen and in the blank copy. -->
        <ol class="match-key" aria-hidden="true">
          ${b.pairs.map((p) => `<li>${text(p.a)} — ${text(p.b)}</li>`).join('')}
        </ol>
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
                <span class="gap-text">${before}<span class="slot" data-a="${text(it.options[it.answer])}"></span>${after || ''}${
                  it.textZh ? '<button class="zh-chip" title="顯示中文">中</button>' : ''}</span></p>
              ${it.textZh ? `<p class="zh">${text(it.textZh)}</p>` : ''}
            </div>
            <ul class="opts">
              ${it.options.map((o, i) => `
                <li><button class="chip" data-i="${i}">${text(o)}</button></li>`).join('')}
            </ul>
            <p class="why"><span class="en">${text(it.why.en)}</span>
              <span class="zh">${text(it.why.zh)}</span></p>
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

  /* Cards to sort into two piles. The two button labels are the block's, not
     the renderer's — this started life as "do you have this adviser?" and is
     just as often "do you already do this?" — and default to the original
     pair so the reading that introduced them keeps working untouched. */
  cards: (b) => `
    <div class="activity audit" data-act="audit">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      <p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh)}</span></p>
      <ul class="roles">
        ${b.items.map((i) => `
          <li class="role">
            <p class="role-icon" aria-hidden="true">${i.icon}</p>
            <div class="pair" data-zh>
              <p class="en"><strong>${text(i.en)}</strong>
                <button class="zh-chip" title="顯示中文">中</button></p>
              <p class="zh">${text(i.zh)}</p>
            </div>
            <div class="pair role-desc" data-zh>
              <p class="en">${text(i.descEn)}</p>
              <p class="zh">${text(i.descZh)}</p>
            </div>
            <div class="role-btns" role="group">
              <button class="chip" data-v="yes">${text(b.yesEn || 'I have this')}<em>${text(b.yesZh || '我有這樣的人')}</em></button>
              <button class="chip" data-v="no">${text(b.noEn || 'I need this')}<em>${text(b.noZh || '我需要一位')}</em></button>
            </div>
          </li>`).join('')}
      </ul>
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

  /* The reading itself. A {{target word}} opens its gloss where it stands —
     the passage is read aloud and pulled apart in the same pass, so the
     meaning has to appear under the word, not in a list at the bottom. */
  passage: (b) => `
    <div class="reading">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      ${b.hintEn ? `<p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh)}</span></p>` : ''}
      ${b.paras.map((p) => {
        const found = [];
        const body = marked(p.en, b.glossary || [], found);
        return `
          <div class="para pair" data-zh>
            <p class="en">${body}${speakBtn(plain(p.en), 'say say-quiet')}
              <button class="zh-chip" title="顯示中文">中</button></p>
            ${found.map(({ id, entry }) => `
              <div class="gloss" id="${id}" hidden>
                <p class="gloss-w">${text(entry.term)}${entry.pos ? `<span class="gloss-pos">${text(entry.pos)}</span>` : ''}
                  <span class="gloss-zh">${text(entry.zh)}</span></p>
                ${entry.def ? `<p class="gloss-def">${text(entry.def)}</p>` : ''}
              </div>`).join('')}
            <p class="zh">${numbered(text(p.zh))}</p>
          </div>`;
      }).join('')}
    </div>`,

  /* Open questions with a model answer behind a tap — comprehension questions,
     and rewrites whose `cue` names the pattern to use. The answer is a model,
     not a key: the learner says theirs first, then the teacher opens this. */
  check: (b) => `
    <div class="activity checks">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      ${b.hintEn ? `<p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh)}</span></p>` : ''}
      ${b.items.map((it, n) => `
        <div class="check">
          <div class="pair" data-zh>
            <p class="en"><span class="gap-n">${n + 1}</span>
              <span class="check-q">${text(it.en)}${it.cue ? ` <span class="cue">${text(it.cue)}</span>` : ''}${speakBtn(it.en, 'say say-quiet')}
                <button class="zh-chip" title="顯示中文">中</button></span></p>
            <p class="zh">${text(it.zh)}</p>
          </div>
          <button class="reveal" aria-expanded="false">Model answer 參考答案</button>
          <div class="model" hidden>
            <p class="en">${text(it.answer.en)}${speakBtn(it.answer.en, 'say say-quiet')}</p>
            <p class="zh">${text(it.answer.zh)}</p>
          </div>
        </div>`).join('')}
    </div>`,

  /* Multiple choice on a reading, ported from /happy-sexy-millionaire/.
     Built on the gap-fill with one difference that matters in a lesson: the
     options stay on screen after the right one is found. A wrong pick fades
     but stays readable, because "why was that one tempting?" is usually the
     more useful question. */
  quiz: (b) => `
    <div class="activity quiz" data-act="quiz">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      ${b.hintEn ? `<p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh)}</span></p>` : ''}
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
              <li><button class="chip qopt" data-i="${i}"${i === it.answer ? ' data-right' : ''}>${text(o)}</button></li>`).join('')}
          </ul>
          <p class="why"><span class="en">${text(it.why.en)}</span>
            <span class="zh">${text(it.why.zh)}</span></p>
        </div>`).join('')}
    </div>`,

  /* A numbered procedure — five steps, three stages — where the order is the
     point. Each step carries a short English name, its Chinese, and a line of
     explanation underneath. */
  steps: (b) => `
    <div class="steps-block">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      ${b.hintEn ? `<p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh)}</span></p>` : ''}
      <ol class="steps">
        ${b.items.map((it, n) => `
          <li class="sstep">
            <p class="sstep-n" aria-hidden="true">${n + 1}</p>
            <div class="sstep-body">
              <p class="sstep-name">${text(it.en)}${speakBtn(it.en, 'say say-quiet')}
                <span class="sstep-zh">${text(it.zh)}</span></p>
              <div class="pair" data-zh>
                <p class="en">${text(it.descEn)}<button class="zh-chip" title="顯示中文">中</button></p>
                <p class="zh">${text(it.descZh)}</p>
              </div>
            </div>
          </li>`).join('')}
      </ol>
    </div>`,

  /* A scale, soft to strong: patterns that do the same job with a different
     force. The rows stay in order because the order is the lesson; each one
     carries its strength, the pattern and an example spoken aloud. */
  ladder: (b) => `
    <div class="ladder-block">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      ${b.hintEn ? `<p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh)}</span></p>` : ''}
      <ol class="ladder">
        ${b.rows.map((r) => `
          <li class="rung rung-${text(r.level)}">
            <p class="rung-level">${text(r.levelEn)}<em>${text(r.levelZh)}</em></p>
            <div class="rung-body pair" data-zh>
              <p class="rung-pattern">${text(r.pattern)}</p>
              <p class="en">${text(r.eg)}${speakBtn(r.eg, 'say say-quiet')}
                <button class="zh-chip" title="顯示中文">中</button></p>
              <p class="zh">${text(r.egZh)}</p>
            </div>
          </li>`).join('')}
      </ol>
    </div>`,
};

// ---------------------------------------------------------------- the series

/* Where this reading sits in the series. The template is linked from nowhere
   and deliberately absent from course.js, so it gets a stand-in, not a throw. */
const N = COURSE.readings.findIndex((r) => r.id === LESSON.id) + 1;
if (!N && LESSON.id !== '_template') {
  throw new Error(`Reading "${LESSON.id}" is not listed in course.js`);
}

// ---------------------------------------------------------------- build

function buildCover() {
  const i = LESSON.intro;
  return `
    <header class="cover" id="top">
      <p class="kicker"><a class="kicker-up" href="../">${text(COURSE.titleZh)}</a>
        <span class="kicker-sep" aria-hidden="true">·</span>
        ${N ? `No. ${N}` : 'Template'}${LESSON.level
          ? ` <span class="kicker-sep" aria-hidden="true">·</span> ${text(LESSON.level)}` : ''}</p>
      <h1><span class="en">${text(LESSON.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(LESSON.titleZh)}</span></h1>
      ${coverTools()}
      ${photo(LESSON.photo, 'photo-hero')}
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
      ${nextLink(LESSON.steps[0], 'Begin', '開始')}
    </header>`;
}

/* The lesson's three ways out, on a hairline band under the headline — where a
   newspaper puts a byline and a print button, and where a teacher looks for
   them before the lesson starts. The PDFs were in the teacher panel first; a
   teacher who wants paper wants it on the way in, not three taps down a
   drawer, and the same is true of the slides.

   Left: the projector. Right: the printer. The page itself is the third, and
   needs no button.

   The buttons live in the rendered cover rather than in index.html, so their
   labels stay with every other string the renderer owns. The handlers are
   wired further down, after the cover is in the document. The explanation that
   used to sit under the PDF buttons in the panel is on `title` instead: the
   band is a utility line, not another thing to read.

   The band is navigation-ish, so its Chinese is plain `<em>` rather than a
   hidden `.zh` — the same rule the contents list and the Next link follow. */
function coverTools() {
  const note = '會開啟瀏覽器的列印視窗，請選擇「另存為 PDF」。不會改變螢幕上的畫面。';
  return `
    <div class="cover-tools">
      <button class="present-btn" id="present"
        title="Show this lesson as slides — one thing at a time, set large, driven from the keyboard. 把這堂課變成投影片，一次一件事，用方向鍵前進。">
        Present<em>投影片</em></button>
      <span class="cover-tools-lab" id="pdf-lab">Print or save as PDF<em>列印／存成 PDF</em></span>
      <span class="pdf-pair" role="group" aria-labelledby="pdf-lab">
        <button class="pdf-btn" id="pdfBlank"
          title="Blanks left empty, answers and model answers held back — ${note}">
          Student copy<em>學生練習版</em></button>
        <button class="pdf-btn" id="pdfKey"
          title="Blanks filled in, the right option ticked, reasons printed — ${note}">
          Answer key<em>解答版</em></button>
      </span>
    </div>`;
}

/* The way on, at the foot of the cover and of every step but the last. On a
   phone the contents are folded away behind ☰, so without this the only way
   to the next step is to keep scrolling and hope. Navigation stays bilingual,
   like the contents list, so its Chinese is not a hidden .zh. */
function nextLink(s, label = 'Next', labelZh = '下一步') {
  return `
    <a class="step-next" href="#${s.id}">
      <span class="step-next-k">${label}<em>${labelZh}</em></span>
      <span class="step-next-t"><span class="n">${s.n}</span>${text(s.en)}<em>${text(s.zh)}</em></span>
      <span class="step-next-arrow" aria-hidden="true">→</span>
    </a>`;
}

/* The end of the lesson: a closing line, a neighbouring reading in the series
   if there is one (the next, or else the one before), and the way back up. */
function buildEnd() {
  const built = COURSE.readings.filter((r) => r.built);
  const at = built.findIndex((r) => r.id === LESSON.id);
  const next = at >= 0 && (built[at + 1] || built[at - 1]);
  const nextN = next && COURSE.readings.indexOf(next) + 1;
  const isNext = next && built[at + 1] === next;

  return `
    <footer class="lesson-end">
      <p class="lesson-end-head">End of the lesson<em>課程結束</em></p>
      ${next ? `
        <a class="step-next" href="../${text(next.id)}/">
          <span class="step-next-k">${isNext ? 'Next reading' : 'Also in the series'}<em>${isNext ? '下一篇' : '系列其他文章'}</em></span>
          <span class="step-next-t"><span class="n">No. ${nextN}</span>${text(next.en)}<em>${text(next.zh)}</em></span>
          <span class="step-next-arrow" aria-hidden="true">→</span>
        </a>` : ''}
      <p class="lesson-end-links">
        <a href="#top">↑ Back to the start <em>回到開頭</em></a>
        <a href="../">All readings <em>全部文章</em></a>
      </p>
    </footer>`;
}

function buildStep(s, next) {
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
      ${photo(s.photo)}
      ${blocks}
      ${next ? nextLink(next) : buildEnd()}
    </section>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="Lesson steps">
      <p class="toc-head">Lesson 課程</p>
      <p class="toc-up"><a href="../">← All readings 全部文章</a></p>
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

document.title = `${LESSON.title} · ${LESSON.titleZh} — ${COURSE.titleZh}`;
/* The bar holds the reading's title and, beside it, the step being read. Only
   one shows at a time on a phone: there the contents are folded away, so the
   bar is the one place that says where you are. A desktop keeps the title —
   its contents column already marks the step. */
const barTitle = $('.bar-title');
barTitle.innerHTML =
  `<span class="bt-lesson">${text(LESSON.title)} <span>${text(LESSON.titleZh)}</span></span>`
  + '<span class="bt-step"></span>';

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
LESSON.steps.forEach((s, i) => doc.appendChild(el(buildStep(s, LESSON.steps[i + 1]))));

/* An "answers" button on each exercise that has answers — the four blocks
   where something is either right or wrong, or where a model answer is
   waiting: the gap-fill, the matching, the multiple choice and the write-an-
   answer checks. Not the phrase cards, the poll, the sort-into-two-piles or
   the discussion: nothing in those is an answer, and the reference language
   they hide already has its own button on each item.

   It is added here rather than in the block builders because it is the same
   button in all four, and because the heading is the one part of a block that
   stays on screen when the block is dealt out one item at a time — which is
   what makes this work on a projector, where the teacher panel is hidden.

   Scoped to its own block. "Reveal every answer" in the panel opens the whole
   lesson, which in front of a room hands out the answers to exercises nobody
   has reached yet. */
$$('.activity.gaps, .activity.match, .activity.quiz, .activity.checks').forEach((a) => {
  const head = $(':scope > .label', a);
  if (head) head.appendChild(el('<button class="peek">Answers<em>答案</em></button>'));
});

// ---------------------------------------------------------------- Chinese

/* One prefix for the whole series — the contents page uses it too — so the
   中文 switch and the chosen voice carry from reading to reading. */
const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`bj.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`bj.${k}`, v); } catch { /* private mode */ } },
};

const zhToggle = $('#zhToggle');

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
  $('#zhAll').checked = on;
  /* The presentation bar's 中文 is the third face of the same switch. It is
     built later than this function first runs, hence the guard — without it
     the bar could open reading "off" over a lesson whose Chinese was already
     showing from the last student, and the presenter's first press would turn
     the Chinese off in front of the room. */
  const pz = document.getElementById('pZh');
  if (pz) pz.setAttribute('aria-pressed', String(on));
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

  // ---- the answers to this exercise, and no other
  const peek = t.closest('.peek');
  if (peek) {
    e.stopPropagation();
    /* On the page it answers the whole exercise, which is what "go over it
       together" means. On a slide, where the exercise has been dealt out one
       question at a time, it answers the question on screen and leaves the
       ones the class has not seen — the same thing the A key does. */
    if (presenting() && SLIDES[at] && SLIDES[at].part) {
      SLIDES[at].els.forEach((elm) => revealAll(elm));
    } else {
      revealAll(peek.closest('.activity'));
    }
    return;
  }

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
  /* Tapping a line opens its Chinese — but a mouse drag that selects a phrase
     also ends in a click on that line, and throwing the translation up at the
     moment the teacher highlighted three words to talk about them gives away
     the very thing the student was working out. A collapsed selection means
     a tap; anything else means they were selecting. */
  const line = t.closest('.pair[data-zh]');
  const sel = getSelection();
  if (line && !t.closest('button') && (!sel || sel.isCollapsed)) {
    line.classList.toggle('open');
    return;
  }

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
  else if (kind === 'poll' || kind === 'audit') pickOne(btn);
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

// Opinion and audit buttons: one choice per row, and clicking it again clears.
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
  speak('Advice has little value unless it is translated into action.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('A brisk walk around your neighbourhood is enough.');
});
$('#rate').value = store.get('rate', '0.95');

/* The speed as an iOS segmented control. The <select> stays in the page as
   the value everything else reads; the segments only drive it. */
(function segmented(sel) {
  const seg = el(`<div class="seg" role="group" aria-label="Speed">${
    [...sel.options].map((o) => `<button type="button" data-v="${text(o.value)}">${text(o.text)}</button>`).join('')
  }</div>`);
  const sync = () => $$('button', seg).forEach((b) =>
    b.setAttribute('aria-pressed', String(b.dataset.v === sel.value)));
  seg.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || b.dataset.v === sel.value) return;
    sel.value = b.dataset.v;
    sel.dispatchEvent(new Event('change'));
    sync();
  });
  sel.classList.add('seg-select');
  sel.after(seg);
  sync();
})($('#rate'));

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
   picking the lesson up in the middle.

   It takes a root because presentation mode wants the same thing for the one
   exercise on screen and nothing else: opening the whole lesson from the
   projector would hand the room the answers to exercises it has not reached.
   The panel's button passes the document; the A key passes the slide. */
function revealAll(scope) {
  /* The scope may BE the exercise rather than contain it: on a slide, a gap
     or a question is dealt out on its own, and a descendant search would walk
     straight past it. */
  const $$in = (sel) => {
    const out = $$(sel, scope);
    if (scope.matches && scope.matches(sel)) out.unshift(scope);
    return out;
  };

  $$in('.gap:not(.solved)').forEach((gap) => {
    const right = $$('.opts .chip', gap)[Number(gap.dataset.answer)];
    $('.slot', gap).textContent = right.textContent;
    right.classList.add('done');
    gap.classList.add('solved');
  });

  $$in('.match').forEach((act) => {
    $$('.chip', act).forEach((c) => { c.classList.remove('picked'); c.classList.add('done'); });
    $('.tally .done', act).textContent = $$('.col-a .chip', act).length;
    act.classList.add('all-done');
  });

  $$in('.q:not(.solved)').forEach((q) => {
    $$('.qopts .qopt', q)[Number(q.dataset.answer)].classList.add('done');
    q.classList.add('solved');
  });

  $$in('.card').forEach((c) => { c.classList.add('open'); c.setAttribute('aria-expanded', 'true'); });
  $$in('.starters').forEach((s) => { s.hidden = false; });
  $$in('.model').forEach((m) => { m.hidden = false; });
  $$in('.reveal').forEach((r) => r.setAttribute('aria-expanded', 'true'));
  /* An exercise whose answers are out has nothing left to ask for, so its own
     button goes rather than sitting there inert. This covers the panel's
     whole-lesson button too, which would otherwise leave every one of them
     standing over an exercise that is already open. */
  $$in('.peek').forEach((p) => { p.hidden = true; });
}

$('#showAll').addEventListener('click', () => {
  revealAll(document);
  setPanel(false);
});

/* ---- the two PDFs ----

   A teacher needs both: a blank copy to hand out, and the same pages with the
   answers filled in to keep. Which one you get is a class on <body> that the
   print stylesheet reads, so neither button disturbs what is on screen — the
   blank copy prints blank even when every answer has already been revealed in
   the session.

   The title is swapped for the duration because the browser offers it as the
   filename, so the two PDFs do not both arrive called the same thing. */
let printing = false;

function printAs(mode) {
  /* One at a time. The dialog is opened from a timer, so two clicks landing in
     the same tick — a double-click, or one button then the other — would both
     get through: the page would carry both classes at once, and the second
     call would have captured the already-swapped title as the one to put back,
     leaving the reading named after a PDF for the rest of the session. */
  if (printing) return;
  printing = true;

  const was = document.title;
  document.body.classList.add(mode === 'key' ? 'pdf-key' : 'pdf-blank');
  document.title = `${LESSON.title} ${LESSON.titleZh} ${
    mode === 'key' ? '— answer key 解答' : '— student copy 練習'}`;

  let done = false;
  const restore = () => {
    if (done) return;
    done = true;
    document.body.classList.remove('pdf-key', 'pdf-blank');
    document.title = was;
    printing = false;
  };
  window.addEventListener('afterprint', restore, { once: true });

  setPanel(false);

  /* A timer rather than requestAnimationFrame: rAF is paused in a tab that is
     not visible, and the dialog would then never open. The panel does not need
     to finish closing first — the print stylesheet hides it either way.
     window.print() blocks until the dialog is dismissed, so the second timer
     is queued behind it and only acts as a net for browsers that fire no
     afterprint at all. */
  setTimeout(() => {
    window.print();
    setTimeout(restore, 500);
  }, 0);
}

$('#pdfBlank').addEventListener('click', () => printAs('blank'));
$('#pdfKey').addEventListener('click', () => printAs('key'));

/* ---- presentation mode ----

   A third way out of the same lesson. The page is the lesson on a screen, the
   print stylesheet turns it into paper, and this turns it into slides for a
   room with a projector: one thing at a time, set large, driven from the
   keyboard.

   Nothing is re-rendered and nothing is moved. A slide is simply a run of
   elements that are already in the document, and showing one is a matter of
   hiding its neighbours — so every exercise keeps its handlers and its state.
   A gap filled in on a slide is still filled in when the lesson comes back out
   of presentation mode, the 🔊 buttons still speak, the 中 chips still open,
   and "Reveal every answer" still reaches the whole lesson. The alternative,
   building a second deck out of the same content, would have meant two
   renderers to keep in step and every answer lost at the door.

   The class goes on <html> rather than <body> because the type scale is set on
   the root: one rem change and the whole lesson — every heading, every chip,
   every hidden Chinese line — comes up to projector size together, without a
   second set of sizes to maintain. */

/* Some blocks are not one thing but a list of independent things: six
   comprehension questions, the five steps of a procedure, the paragraphs of
   the reading, three questions to argue about. Whole, they are a slide that
   has to be scrolled, which is no slide at all — so they are dealt out one to
   a slide, with the block's own heading kept above each one.

   `min` is where a list becomes too much for one screen. Below it the block
   stays whole, because seeing two questions together costs nothing and saves
   a click. Blocks whose point is the comparison — the politeness ladder, a
   grid of phrase cards — are deliberately not in this list. */
const SPLIT = [
  { sel: '.q', min: 3 },      // multiple choice on a reading
  { sel: '.gap', min: 3 },    // choose the phrase that fits — each gap
                              // carries its own options, so one travels alone
  { sel: '.sstep', min: 3 },  // a numbered procedure
  { sel: '.para', min: 3 },   // the paragraphs of a passage
  { sel: '.role', min: 3 },   // cards to sort into two piles, one at a time
  { sel: '.ask', min: 2 },    // discussion questions
];

function splitOf(block) {
  for (const rule of SPLIT) {
    const items = $$(rule.sel, block);
    if (items.length >= rule.min) return items;
  }
  return null;
}

/* A slide is { box, els, keep, label }: the section it lives in, the elements
   that make it up, anything shown alongside them (a block heading standing
   over one of its items), and what the control bar calls it. Read off the
   rendered lesson, in the order the lesson is in. */
function buildSlides() {
  const slides = [];
  const push = (box, els, label, keep = [], part = null) => {
    const list = els.filter(Boolean);
    if (list.length) slides.push({ box, els: list, keep: keep.filter(Boolean), label, part });
  };

  /* The cover gives three: the headline, what the lesson is, and what the
     student will be able to do. The tool band and the Begin link are furniture
     and stay behind; so does the hero photograph, which has already done its
     work on the page and would only crowd the title. */
  const cover = $('.cover');
  const start = 'Start 開始';
  /* The headline alone. The source credit used to ride with it, and since the
     slide is sized as one thing, forty words of attribution decided how big
     the lesson's name was. Nobody reads a credit off a projector; it travels
     with the goals instead, and is on the page and in both PDFs regardless. */
  push(cover, [$('.kicker', cover), $('h1', cover)], start);
  push(cover, [$('.cover-intro', cover)], start);
  push(cover, [$('.goals', cover), $('.source', cover)], start);

  $$('.step').forEach((step) => {
    const s = LESSON.steps.find((x) => x.id === step.id);
    const label = s ? `${s.n} · ${s.en} ${s.zh}` : '';
    // The section opener: its number and name, with its photograph if it has
    // one — a picture earns its place at the top of a section.
    push(step, [$(':scope > .step-head', step), $(':scope > .photo', step)], label);
    // Then every block of the step, in order — whole, or dealt out item by
    // item when the block is really a list.
    $$(':scope > *', step).forEach((b) => {
      if (b.matches('.step-head, .photo, .step-next')) return;
      const items = splitOf(b);
      if (!items) { push(step, [b], label); return; }
      /* The heading AND the instruction under it. "Tap each one: do you
         already do it?" is the half of a block that tells the room what to
         do, and dealing the items out without it leaves the teacher saying it
         six times instead. It is small, quiet and already bilingual, so it
         costs the slide almost nothing. */
      const head = $(':scope > .label, :scope > h3, :scope > h4', b);
      const hint = $(':scope > .hint', b);
      items.forEach((it, i) =>
        push(step, [it], label, [head, hint], { i: i + 1, of: items.length }));
    });
  });

  return slides;
}

const SLIDES = buildSlides();

/* Where each step's slides begin, so the presenter can be put at the top of a
   section rather than walked to it. A sixty-slide lesson is thirty-five key
   presses from its reading section, which is no way to answer "can we skip to
   the discussion?" in front of a room. */
function stepStarts() {
  const marks = [{ n: '·', en: 'Start', zh: '開始', at: 0 }];
  LESSON.steps.forEach((s) => {
    const step = document.getElementById(s.id);
    const at = SLIDES.findIndex((sl) => sl.box === step);
    if (at >= 0) marks.push({ n: s.n, en: s.en, zh: s.zh, at });
  });
  return marks;
}

const MARKS = stepStarts();

/* The bar along the foot: where you are, the way forward and back, and the
   switches a presenter reaches for mid-sentence. Built here rather than in
   index.html so that adding presentation mode changed no reading's page.

   The step's name is a button, not a caption: it opens the one menu this mode
   has — every section with the slide it starts at, and the keys underneath,
   because a presenter who has to be told about the keys will never find them
   on a bar that cannot afford to list them. */
const pbar = el(`
  <div class="pbar" id="pbar" role="group" aria-label="Presentation controls 投影片控制">
    <div class="pprog" aria-hidden="true"><i></i></div>
    <button class="pbtn pbtn-arrow" id="pPrev" aria-label="Previous slide 上一張">←</button>
    <button class="pbtn pbtn-arrow" id="pNext" aria-label="Next slide 下一張">→</button>
    <p class="pnum"><b id="pAt">1</b> / <span id="pOf">1</span><span class="ppart" id="pPart"></span></p>
    <button class="pbtn plab" id="pLab" aria-haspopup="true" aria-expanded="false"
            aria-controls="pMenu"><span class="plab-t"></span></button>
    <p class="pmore" aria-hidden="true">↓ scrolls 可往下捲</p>
    <button class="pbtn" id="pZh" aria-pressed="false">中文</button>
    <button class="pbtn" id="pFull"><span class="pbtn-t">Full screen<em>全螢幕</em></span></button>
    <button class="pbtn pbtn-out" id="pExit" aria-label="Leave the slides 離開投影片"
      ><span class="pbtn-t">Exit<em>離開</em></span></button>
  </div>`);
document.body.appendChild(pbar);
$('#pOf', pbar).textContent = String(SLIDES.length);

/* The only place the keys are written down. Anything the keydown handler
   answers to belongs here — a key nobody can find is a key nobody has. */
const KEYS = [
  ['→ space', 'Next 下一張'],
  ['←', 'Back 上一張'],
  ['1 – 9', 'Jump to a section 跳到該段'],
  ['0 · Home', 'Back to the start 回到開頭'],
  ['↑ ↓', 'Scroll a long slide 捲動長投影片'],
  ['A', 'Answers for this slide 顯示本張答案'],
  ['C', 'Chinese on and off 中文開關'],
  ['S', 'Stop the voice 停止朗讀'],
  ['B', 'Blank the screen 暫時黑幕'],
  ['F', 'Full screen 全螢幕'],
  ['?', 'This menu 這個選單'],
  ['Esc', 'Leave the slides 離開投影片'],
];

/* One menu: where to go, and how. It is the only place the keys are written
   down, so it is also what the step name opens — the presenter asking "where
   am I?" and the presenter asking "how do I skip ahead?" are the same person,
   a second apart. */
const pmenu = el(`
  <div class="pmenu" id="pMenu" hidden>
    <p class="pmenu-h">Jump to<em>跳到</em></p>
    <ul class="pmenu-steps">
      ${MARKS.map((m) => `
        <li><button class="pmenu-go" data-go="${m.at}">
          <span class="n">${text(String(m.n))}</span>
          <span class="t">${text(m.en)}<em>${text(m.zh)}</em></span>
          <span class="s">${m.at + 1}</span>
        </button></li>`).join('')}
    </ul>
    <p class="pmenu-h">Keys<em>快速鍵</em></p>
    <ul class="pmenu-keys">
      ${KEYS.map(([k, what]) => `<li><kbd>${text(k)}</kbd><span>${text(what)}</span></li>`).join('')}
    </ul>
  </div>`);
document.body.appendChild(pmenu);

/* One line for a screen reader on every slide change. The bar says the same
   thing in three separate pieces, which a reader would announce as three
   interruptions, so the pieces stay quiet and this speaks instead. */
const psr = el('<p class="psr" aria-live="polite" aria-atomic="true"></p>');
document.body.appendChild(psr);

/* The stage can take the focus, though it is never in the tab order: when the
   slides open, the button that opened them is hidden, and the focus has to go
   somewhere that still exists. */
doc.tabIndex = -1;

const root = document.documentElement;
const presenting = () => root.classList.contains('present');

let at = 0;
/* Which control opened the slides — the band's or the top bar's — so leaving
   hands the focus back to the one the teacher actually pressed. */
let opener = null;
/* Whether this page put itself into full screen. Esc leaves full screen
   without reaching any key handler, so that is also how a presenter expects to
   leave the slides — but only if the slides were what turned it on. */
let wentFull = false;

function showSlide(i, keepScroll) {
  if (!SLIDES.length) return;
  at = Math.max(0, Math.min(SLIDES.length - 1, i));
  /* A sentence being read aloud belongs to the slide that asked for it. Left
     alone it carries on over the next one, and the only stop was Escape —
     which in here also ends the lecture. */
  speechSynthesis.cancel();

  /* Clear everything first, then light up the one. Several slides share a
     section — the cover holds three, and six questions share one block — so
     marking and unmarking in a single pass would have a later slide rub out
     the marks its own neighbour just claimed, and the stage would come up
     empty.

     Each slide marks itself and every ancestor up to the stage. The
     stylesheet then hides, at every level, the children that are neither on
     that path nor kept — which is what lets one question out of a block of
     six onto the screen with its heading and nothing else. */
  clearSlides();
  const s = SLIDES[at];
  s.els.forEach((e) => {
    e.classList.add('sl-on');
    for (let p = e.parentElement; p && p !== doc; p = p.parentElement) p.classList.add('sl-path');
  });
  s.keep.forEach((e) => e.classList.add('sl-keep'));

  if (!keepScroll) s.box.scrollTop = 0;
  fitSlide(s.box);
  $('#pAt', pbar).textContent = String(at + 1);
  $('.plab-t', pbar).textContent = s.label;
  /* "3 / 6" when the slide is one of a set dealt out from a block. The bar's
     own 47 / 59 cannot say that, and "so, the third one" is the sentence a
     teacher says most often while presenting an exercise. */
  $('#pPart', pbar).textContent = s.part ? ` · ${s.part.i}/${s.part.of}` : '';
  $('.pprog i', pbar).style.width = `${((at + 1) / SLIDES.length) * 100}%`;
  /* aria-disabled, not disabled: disabling the control the finger is on makes
     it unfocusable, and the browser throws the focus back to <body>. go()
     clamps anyway, so a press at either end is a harmless no-op. */
  setArrow($('#pPrev', pbar), at === 0);
  setArrow($('#pNext', pbar), at === SLIDES.length - 1);
  psr.textContent = `${at + 1} / ${SLIDES.length}${
    s.part ? ` (${s.part.i} of ${s.part.of})` : ''} — ${s.label}`;
  setBlank(false);
  wake();

  // Re-trigger the stage's fade. The class has to be seen to go before it can
  // be seen to come back, hence the forced recalc between the two.
  doc.classList.remove('sl-in');
  void doc.offsetWidth;
  doc.classList.add('sl-in');
}

function clearSlides() {
  $$('.sl-on, .sl-path, .sl-keep')
    .forEach((e) => e.classList.remove('sl-on', 'sl-path', 'sl-keep'));
}

function setArrow(b, off) {
  b.classList.toggle('pbtn-off', off);
  b.setAttribute('aria-disabled', String(off));
}

/* Fit the slide to the screen. The whole lesson is sized from one number on
   the root, so a slide can be taken up or down as a whole: the largest size
   that still fits wins. A single summary point grows until it has the room,
   and a long passage comes down until it stops running off the bottom.

   Both ends are capped. A little over its natural size is as far up as it
   goes, or a slide of four words would arrive in circus type and the lesson
   would lurch from size to size. Downwards, much below two thirds and nobody
   at the back of the room can read it — and if even that does not fit, the
   shrinking is undone rather than kept, because a slide that has to be
   scrolled either way is better read large than small.

   Measuring forces a reflow per step, which is a handful of milliseconds on a
   key press and invisible. */
const FIT = [1.25, 1.16, 1.08, 1, 0.93, 0.86, 0.79, 0.72, 0.64];

function fitSlide(box) {
  const fits = () => box.scrollHeight <= box.clientHeight + 2;

  root.style.removeProperty('font-size');
  const base = parseFloat(getComputedStyle(root).fontSize);

  for (const k of FIT) {
    if (k === 1) root.style.removeProperty('font-size');
    else root.style.fontSize = `${(base * k).toFixed(1)}px`;
    if (fits()) break;
  }
  if (!fits()) root.style.removeProperty('font-size');

  // Tell the bar, and the stage, when there is more below the fold.
  root.classList.toggle('sl-more', !fits());
}

/* A slide does not hold still. Opening the Chinese adds a line under every
   English one; a phrase card, a model answer, a gloss and a solved gap's
   reason all come out of hiding mid-exercise. Without this the slide quietly
   grows past the bottom of the projector and even the ↓ cue stays silent,
   because the cue is set inside fitSlide. Measured on the next frame, after
   the thing that grew has been laid out. */
function refitSoon() {
  if (!presenting() || !SLIDES[at]) return;
  requestAnimationFrame(() => {
    if (presenting() && SLIDES[at]) fitSlide(SLIDES[at].box);
  });
}

/* Where to start. A teacher scrolled to the reading section and reaching for
   the projector means to show the reading section, not the title page — so
   presentation starts at the top of whatever part of the lesson is on screen.
   The whole deck is still one Home away. */
function slideInView() {
  const line = innerHeight * 0.35;
  let found = 0;
  [$('.cover'), ...$$('.step')].forEach((b) => {
    if (b.getBoundingClientRect().top > line) return;
    const i = SLIDES.findIndex((s) => s.box === b);
    if (i >= 0) found = i;
  });
  return found;
}

function setPresent(on) {
  if (on === presenting()) return;

  if (on) {
    /* Read where the page is BEFORE the class goes on. The moment it does,
       the lesson collapses into a one-screen stage and every section reports
       the same position, which would land every lecture on the last slide. */
    const start = slideInView();
    setPanel(false);
    closeNav();
    root.classList.add('present');
    showSlide(start);
    /* The button that opened the slides is now hidden, and a hidden element
       cannot hold the focus — so hand it to the stage, which is what the keys
       talk to anyway. Without this a keyboard user's next Tab starts from the
       top of the document. */
    doc.focus();
  } else {
    const back = SLIDES[at] && SLIDES[at].box;
    setMenu(false);
    setBlank(false);
    root.classList.remove('present');
    root.style.removeProperty('font-size');
    clearSlides();
    leaveFull();
    /* Come out of the slides where the slides left off, not at the top — and
       land there rather than gliding, since a smooth scroll across a whole
       lesson is a long way to watch when you only wanted the page back. */
    if (back) back.scrollIntoView({ block: 'start', behavior: 'instant' });
    // Back to whichever of the two Present buttons opened the slides.
    (opener || $('#present')).focus({ preventScroll: true });
  }
}

const go = (by) => { setMenu(false); showSlide(at + by); };

/* ---- the menu ---- */

function setMenu(open) {
  pmenu.hidden = !open;
  $('#pLab', pbar).setAttribute('aria-expanded', String(open));
  if (!open) return;

  /* Mark the section being presented, so the menu answers "where am I?" on
     the way to answering "where can I go?" — and open on it rather than at
     the top, so the first arrow key moves from here. */
  let here = 0;
  MARKS.forEach((m, i) => { if (m.at <= at) here = i; });
  const go = $$('.pmenu-go', pmenu);
  go.forEach((b, i) => b.setAttribute('aria-current', String(i === here)));
  wake();
  (go[here] || go[0]).focus();
}

$('#pLab', pbar).addEventListener('click', () => setMenu(pmenu.hidden));
pmenu.addEventListener('click', (e) => {
  const b = e.target.closest('.pmenu-go');
  if (!b) return;
  setMenu(false);
  showSlide(Number(b.dataset.go));
  doc.focus();
});
document.addEventListener('click', (e) => {
  if (!pmenu.hidden && !e.target.closest('#pMenu, #pLab')) setMenu(false);
});

/* ---- blanking the screen ----

   The oldest move in lecturing: take the slide away so the room looks at you.
   The lesson is untouched underneath — this is a curtain, not a state. */
function setBlank(on) {
  root.classList.toggle('sl-blank', !!on);
}

/* ---- the bar gets out of the way ----

   It is the only thing on the projector that is not the lesson, so it fades
   when nobody has touched anything for a few seconds and comes back on the
   first sign of life. It never leaves entirely: a presenter glancing down for
   "where am I?" should find it there, not have to wave at the screen. */
let idle;
function wake() {
  pbar.classList.remove('idle');
  clearTimeout(idle);
  idle = setTimeout(() => {
    if (presenting() && pmenu.hidden) pbar.classList.add('idle');
  }, 4000);
}
['mousemove', 'keydown', 'pointerdown', 'wheel'].forEach((ev) =>
  addEventListener(ev, () => { if (presenting()) wake(); }, { passive: true }));

function goFull() {
  const req = root.requestFullscreen || root.webkitRequestFullscreen;
  if (!req || document.fullscreenElement || document.webkitFullscreenElement) return;
  // A refusal is not worth reporting: the slides work in a window just as well.
  Promise.resolve(req.call(root)).then(() => { wentFull = true; }, () => {});
}

function leaveFull() {
  wentFull = false;
  const out = document.exitFullscreen || document.webkitExitFullscreen;
  if (out && (document.fullscreenElement || document.webkitFullscreenElement)) {
    Promise.resolve(out.call(document)).catch(() => {});
  }
}

['fullscreenchange', 'webkitfullscreenchange'].forEach((ev) =>
  document.addEventListener(ev, () => {
    const full = document.fullscreenElement || document.webkitFullscreenElement;
    if (!full && wentFull && presenting()) setPresent(false);
    // The button says what pressing it will do, not what state the page is in.
    $('#pFull .pbtn-t', pbar).innerHTML = full
      ? 'Leave full screen<em>離開全螢幕</em>' : 'Full screen<em>全螢幕</em>';
  }));

/* Every control in the bar hands the keyboard back to the stage when it is
   done. A click leaves the focus on the button it landed on, and from there
   the keys that are guarded against a focused control — the digits, A, B, C,
   F — would quietly stop working for the rest of the lecture. */
const barDoes = (id, fn) => $(id, pbar).addEventListener('click', () => {
  fn();
  // Unless that was Exit, which has already handed the focus to the button
  // the teacher opened the slides with.
  if (presenting()) doc.focus({ preventScroll: true });
});

$('#present').addEventListener('click', (e) => {
  opener = e.currentTarget;
  setPresent(true);
  goFull();
});
barDoes('#pExit', () => setPresent(false));
barDoes('#pPrev', () => go(-1));
barDoes('#pNext', () => go(1));
barDoes('#pFull', () => {
  if (document.fullscreenElement || document.webkitFullscreenElement) leaveFull();
  else goFull();
});
barDoes('#pZh', () => {
  setAllZh(!document.body.classList.contains('zh-all'));
  // Showing the Chinese is the commonest way to make a slide outgrow its screen.
  refitSoon();
});

/* Anything tapped inside the lesson can change how tall the slide is — a card
   opens, a gloss appears, an answer explains itself. One listener, after the
   renderer's own, rather than threading a refit through every branch of it. */
doc.addEventListener('click', refitSoon);

/* The keys. A presenter's remote sends Page Down and Page Up, or the arrows;
   both are here, and so is the space bar — but only when the focus is not on
   something that answers to it, or a tap on a gap-fill chip would arm the
   space bar to press that chip again instead of moving on. The up and down
   arrows are left alone on purpose: a long slide scrolls with them. */
document.addEventListener('keydown', (e) => {
  if (!presenting() || e.metaKey || e.ctrlKey || e.altKey) return;

  /* Two guards, not one. `typing` is where a key is literally being written,
     and nothing here may take those. `onLessonControl` is narrower: a chip or
     a link inside the slide, which keeps the focus after a tap — that is the
     gap-fill problem, and it is only the space bar and Backspace that it
     would turn into a second press of that chip. A letter or a digit means
     the same thing wherever the focus happens to be sitting, which is what
     made the jump keys die the first time anybody answered a question. */
  const typing = e.target.closest('input, select, textarea, [contenteditable]');
  const onLessonControl = e.target.closest('#doc button, #doc a');
  if (typing) return;

  // A digit is a section: 1–9 open the step of that number, 0 the cover.
  if (/^[0-9]$/.test(e.key)) {
    const m = MARKS.find((x) => String(x.n) === e.key);
    if (e.key === '0') showSlide(0);
    else if (m) showSlide(m.at);
    else return;
    e.preventDefault();
    return;
  }

  switch (e.key) {
    case 'ArrowRight': case 'PageDown': go(1); break;
    case 'ArrowLeft': case 'PageUp': go(-1); break;
    case ' ': if (onLessonControl) return; go(1); break;
    case 'Backspace': if (onLessonControl) return; go(-1); break;
    case 'Home': go(-at); break;
    case 'End': go(SLIDES.length - 1 - at); break;

    /* Up and down scroll the slide, and the slide only. The stage is
       `overflow: hidden` and the scroller is the section inside it, so the
       browser's own scrolling never reaches it from where the focus sits —
       which made the ↓ cue in the bar a promise nothing kept. On a slide that
       fits, these keys are left alone exactly as before. */
    case 'ArrowDown': case 'ArrowUp': {
      if (!pmenu.hidden) return;
      const b = SLIDES[at] && SLIDES[at].box;
      if (!b || b.scrollHeight <= b.clientHeight + 2) return;
      b.scrollBy({ top: (e.key === 'ArrowDown' ? 0.8 : -0.8) * b.clientHeight, behavior: 'smooth' });
      break;
    }

    // Esc closes the menu if it is open, and otherwise leaves the slides —
    // one key, the nearest thing first.
    case 'Escape': if (!pmenu.hidden) setMenu(false); else setPresent(false); break;
    case 'f': case 'F':
      if (document.fullscreenElement || document.webkitFullscreenElement) leaveFull();
      else goFull();
      break;
    case 'c': case 'C':
      $('#pZh', pbar).click();
      break;
    case 'b': case 'B':
      setBlank(!root.classList.contains('sl-blank'));
      break;
    /* The answers to the exercise on screen, and nothing else. The panel that
       holds "Reveal every answer" is hidden in here, and it would open the
       whole lesson anyway — including the exercises the room has not reached. */
    case 'a': case 'A':
      SLIDES[at].els.forEach((elm) => revealAll(elm));
      refitSoon();
      break;
    // Stopping the voice needs a key of its own: Escape ends the lecture.
    case 's': case 'S': case '.':
      speechSynthesis.cancel();
      break;
    case '?':
      setMenu(pmenu.hidden);
      break;
    default: return;
  }
  e.preventDefault();
});

/* A swipe across the slide, for the iPad a one-to-one lesson is often run
   from. It stands down on anything the finger might have meant to press, and
   on anything closer to a vertical drag, because a long slide scrolls. */
let tx = 0, ty = 0, swiping = false;

doc.addEventListener('touchstart', (e) => {
  swiping = presenting() && e.touches.length === 1
    && !e.target.closest('button, a, input, select, .term');
  if (!swiping) return;
  tx = e.touches[0].clientX;
  ty = e.touches[0].clientY;
}, { passive: true });

doc.addEventListener('touchend', (e) => {
  if (!swiping) return;
  swiping = false;
  const dx = e.changedTouches[0].clientX - tx;
  const dy = e.changedTouches[0].clientY - ty;
  if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.6) return;
  go(dx < 0 ? 1 : -1);
}, { passive: true });

/* Printing wants the whole lesson, not the slide that happens to be up. */
window.addEventListener('beforeprint', () => setPresent(false));

/* A projector plugged in mid-lesson changes the screen under the slide. */
let refit;
addEventListener('resize', () => {
  if (!presenting()) return;
  cancelAnimationFrame(refit);
  // Keep the scroll: a half-read long slide should not jump back to the top
  // because the projector changed the screen under it.
  refit = requestAnimationFrame(() => showSlide(at, true));
});

/* A second way in, for when the lesson is not at the top. The band's labelled
   Present button is the discoverable one, but it is inside the cover — and a
   teacher who has scrolled to step five, or who left the slides by accident,
   should not have to scroll back up a sixty-slide lesson to start again.
   Injected here so no reading's index.html had to change. */
const presentTop = el(`<button class="bar-btn bar-btn-quiet" id="presentTop"
  title="Present 投影片" aria-label="Present 投影片"><span aria-hidden="true">▶</span></button>`);
$('.bar').insertBefore(presentTop, zhToggle);
presentTop.addEventListener('click', (e) => {
  opener = e.currentTarget;
  setPresent(true);
  goFull();
});

// A reload is the reset: nothing is stored except the two device settings.
$('#reset').addEventListener('click', () => location.reload());

// ---------------------------------------------------------------- chrome

const links = new Map($$('.toc a').map((a) => [a.dataset.target, a]));

const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((a) => a.classList.remove('here'));
    const a = links.get(e.target.id);
    if (a) { a.classList.add('here'); a.scrollIntoView({ block: 'nearest' }); }

    const s = LESSON.steps.find((x) => x.id === e.target.id);
    barTitle.dataset.at = s ? 'step' : 'top';
    if (s) {
      $('.bt-step', barTitle).innerHTML =
        `<span class="bt-n">${s.n}</span>${text(s.en)} <span>${text(s.zh)}</span>`;
    }
  });
}, { rootMargin: '-72px 0px -70% 0px' });

[$('#top'), ...$$('.step')].forEach((s) => spy.observe(s));

/* Each block of a step eases up as it scrolls into view, once (see "the
   Apple feel" in style.css). Skipped when motion is unwanted, and a block
   above the fold on load is shown at once rather than animated. */
if (matchMedia('(prefers-reduced-motion: no-preference)').matches && 'IntersectionObserver' in window) {
  const rise = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      rise.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -6% 0px' });

  const blocks = $$('.step > :not(.step-head)');
  blocks.forEach((b) => {
    if (b.getBoundingClientRect().top < innerHeight) b.classList.add('in');
    else rise.observe(b);
  });
  document.documentElement.classList.add('rise');

  // Reveal every answer and printing both want the whole lesson at once, not
  // as it scrolls past.
  const all = () => blocks.forEach((b) => b.classList.add('in'));
  $('#showAll').addEventListener('click', all);
  window.addEventListener('beforeprint', all);
}

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
