/* Winkle's interview preparation — renders PAGE (content.js) and wires up the
   practice.

   A standalone copy. It began as /ielts-speaking/render.js with the course map
   taken out, and nothing else on the site loads it — so a change here moves
   this page and no other, the same rule as the notebooks.

   One page, two uses, as Lewis chose for it:

   - In a lesson he drives it on a shared screen, the way he drives every adult
     page: open a story, reveal a model answer, argue about it.
   - At home Winkle rehearses alone. The drill at the end asks a question out
     loud in a British voice and keeps the text hidden, the clock starts when
     the question ends, and he can record his answer and hear it back — the
     course's homework is recording, not writing.

   House rules for adult material hold:

   - Nothing is scored and nothing is saved. A recording lives in the tab's
     memory, is never uploaded, and is gone on reload. Only device settings —
     voice, speed, whether Chinese starts visible — go in localStorage, under
     `winkle.`.
   - Chinese is hidden until it is asked for: the 中 chip on a line, or 中文 in
     the bar for all of it. Labels, hints and navigation stay bilingual.
   - The teacher panel is faint and opens over the page rather than replacing
     it, so a discussion in progress is never lost.
*/

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* For values going into a "…"-delimited attribute. */
function attr(s) {
  return text(s).replace(/"/g, '&quot;');
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

/* Two marks in the content, both applied after escaping so markup can never
   come from the content itself:
     **stars**        the word to stress — rendered bold
     [square brackets] a slot Winkle fills with his own facts — rendered as a
                      dashed gold box, because the page does not know them
   Anything spoken goes through `plain`, which drops the stars and reads a slot
   as a pause rather than reading the placeholder out. */
function rich(s) {
  return text(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]/g, '<span class="slot">$1</span>');
}

function plain(s) {
  return String(s).replace(/\*\*/g, '').replace(/\[(.+?)\]/g, '…');
}

/* An English line with its Chinese held behind it. The 中 chip is the visible
   affordance; clicking anywhere in the block does the same thing. */
function pair(en, zh, cls = '') {
  if (!zh) return `<div class="pair ${cls}"><p class="en">${rich(en)}</p></div>`;
  return `
    <div class="pair ${cls}" data-zh>
      <p class="en">${rich(en)}<button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${rich(zh)}</p>
    </div>`;
}

function speakBtn(sentence, cls = 'say') {
  return `<button class="${cls}" data-say="${attr(plain(sentence))}" title="Listen"
    aria-label="Listen">🔊</button>`;
}

/* A heading that carries both languages at once — section labels and task
   prompts, none of which are being tested. */
function label(en, zh, tag = 'h4') {
  return `<${tag} class="label"><span class="en">${text(en)}</span>
    <span class="zh">${text(zh)}</span></${tag}>`;
}

function hint(en, zh) {
  if (!en) return '';
  return `<p class="hint">${text(en)}<span class="hint-zh">${text(zh)}</span></p>`;
}

// ---------------------------------------------------------------- lookups

/* Step numbers come from the order of the array, not from the content file, so
   inserting a step renumbers the page, the contents list and every "Step 4 ·"
   label with it. Cross-references in the prose name a step rather than a
   number, for the same reason. */
PAGE.steps.forEach((s, i) => { s.n = i + 1; });

/* Stories are numbered in the order they appear, and a question may point at
   one by id. A question naming a story that does not exist throws on load —
   a dead link found in the interview week is worse than a page that refuses
   to render now. */
const STORIES = new Map();
PAGE.steps.forEach((s) => s.blocks.forEach((b) => {
  if (b.t === 'story') { b.n = STORIES.size + 1; STORIES.set(b.id, b); }
}));

function storyFor(id) {
  const s = STORIES.get(id);
  if (!s) throw new Error(`A question points at story "${id}", which does not exist`);
  return s;
}

function stepFor(id) {
  const s = PAGE.steps.find((x) => x.id === id);
  if (!s) throw new Error(`A link points at step "${id}", which does not exist`);
  return s;
}

// ---------------------------------------------------------------- pieces

function face(sec) {
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
}

/* The speaking clock. It counts up, turns green inside the band an answer of
   this kind should land in, and gold past the end of it. It is not a score. */
function clockUnit(low, high) {
  return `
    <div class="clock-unit" data-mode="up" data-start="0" data-low="${low}" data-high="${high}">
      <p class="clock-name">Speak<em>開口</em></p>
      <p class="clock-face">0:00</p>
      <p class="clock-note">aim to land between <span class="lo">${face(low)}</span>
        and <span class="hi">${face(high)}</span><em>目標落在
        <span class="lo">${face(low)}</span> 到 <span class="hi">${face(high)}</span> 之間</em></p>
      <div class="clock-btns">
        <button class="chip clock-go">
          <span class="go">Start<em>開始</em></span>
          <span class="stop">Stop<em>暫停</em></span>
        </button>
        <button class="chip clock-zero">Reset<em>重設</em></button>
      </div>
    </div>`;
}

/* Record, stop, hear it back. The recording is a blob URL in this tab and
   nothing else — a new take replaces the last, and a reload deletes it. */
function recorder() {
  return `
    <div class="rec">
      <p class="clock-name">Record yourself<em>錄下自己</em></p>
      <p class="rec-time">0:00</p>
      <p class="clock-note">then play it back and listen for where you circled
        <em>錄完回放，聽自己在哪裡繞圈子</em></p>
      <div class="clock-btns">
        <button class="chip rec-go">
          <span class="go">● Record<em>錄音</em></span>
          <span class="stop">■ Stop<em>停止</em></span>
        </button>
      </div>
      <audio class="rec-audio" controls hidden></audio>
      <p class="rec-msg rec-msg-no">This browser cannot record. Use the voice-memo app on your phone instead.
        <em>這個瀏覽器無法錄音，請改用手機的錄音 App。</em></p>
      <p class="rec-msg rec-msg-denied">The microphone was blocked. Allow it in the address bar, then try again.
        <em>麥克風被封鎖了。請在網址列允許使用麥克風後再試一次。</em></p>
      <p class="rec-note">Stays in this tab — nothing is uploaded, and a reload deletes it.
        <em>錄音只留在這個分頁，不會上傳，重新整理就會刪除。</em></p>
    </div>`;
}

/* One line of the self-introduction, in Lewis's cadence notation:
     "> " at the start   say it a little faster (supporting detail)
     "< " at the start   slow down for impact
     " /", " //", " ///" at the end — a short, longer, and long pause
   The marks are drawn as marks, and ▶ performs them: the pace changes the
   speaking rate and the slashes become real silences. */
const PAUSE_NAME = ['', 'short pause', 'longer pause', 'long pause'];

function cadLine(raw) {
  let s = raw.trim();
  let pace = '';
  if (s.startsWith('> ')) { pace = 'fast'; s = s.slice(2); }
  else if (s.startsWith('< ')) { pace = 'slow'; s = s.slice(2); }

  const m = s.match(/\s(\/{1,3})$/);
  const pause = m ? m[1].length : 0;
  if (m) s = s.slice(0, -m[0].length);

  const tag = pace === 'fast' ? '<span class="cad-pace fast">→ faster</span>'
            : pace === 'slow' ? '<span class="cad-pace slow">↓ slower</span>' : '';

  return `
    <li class="cad-line${pace ? ` ${pace}` : ''}" data-say="${attr(plain(s))}"
        data-pace="${pace}" data-pause="${pause}">
      ${tag}<span class="cad-text">${rich(s)}</span>${pause
        ? `<span class="cad-pause" title="${PAUSE_NAME[pause]}">${'/'.repeat(pause)}</span>` : ''}
    </li>`;
}

// ---------------------------------------------------------------- blocks

let qid = 0;

const BLOCKS = {
  lead: (b) => `<div class="lead">${pair(b.en, b.zh)}</div>`,

  note: (b) => {
    const en = [].concat(b.bodyEn);
    const zh = [].concat(b.bodyZh);
    return `
      <aside class="note">
        <h4><span class="en">${text(b.en)}</span>
          <button class="zh-chip" title="顯示中文">中</button>
          <span class="zh">${text(b.zh)}</span></h4>
        <div class="pair" data-zh>
          ${en.map((p) => `<p class="en">${rich(p)}</p>`).join('')}
          ${zh.map((p) => `<p class="zh">${rich(p)}</p>`).join('')}
        </div>
      </aside>`;
  },

  /* The four things the interview is expected to lean on, each a card that
     jumps to the step that prepares it. */
  areas: (b) => `
    <div class="areas">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <ol class="area-list">
        ${b.items.map((a, i) => {
          const s = stepFor(a.step);
          return `
          <li class="area"><a href="#${s.id}">
            <span class="area-n">${i + 1}</span>
            <span class="area-t">${text(a.en)}<em>${text(a.zh)}</em></span>
            <span class="area-why">${text(a.whyEn)}<em>${text(a.whyZh)}</em></span>
            <span class="area-go">→ Step ${s.n} · ${text(s.en)}</span>
          </a></li>`;
        }).join('')}
      </ol>
    </div>`,

  /* What is known about how the team works, and what each fact means for the
     answers. The fact hides its Chinese like any line; the "so" beneath it is
     advice, so it stays bilingual. */
  facts: (b) => `
    <div class="facts">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <ol class="fact-list">
        ${b.items.map((f) => `
          <li class="fact pair" data-zh>
            <p class="en fact-what">${rich(f.en)}<button class="zh-chip" title="顯示中文">中</button></p>
            <p class="zh">${rich(f.zh)}</p>
            <p class="fact-so"><span class="fact-so-lab">So 所以</span>${rich(f.soEn)}<em>${rich(f.soZh)}</em></p>
          </li>`).join('')}
      </ol>
    </div>`,

  frames: (b) => `
    <div class="frames">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <ul>
        ${b.items.map((f) => `
          <li><span class="en">${rich(f.en)}${speakBtn(f.en, 'say say-quiet')}</span>
            <span class="zh">${rich(f.zh)}</span></li>`).join('')}
      </ul>
    </div>`,

  /* A phrase bank: the Chinese behind the row's tap. Reference, not activity. */
  bank: (b) => `
    <div class="bank">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <ul class="bank-list">
        ${b.rows.map((r) => `
          <li class="bank-row pair" data-zh>
            <span class="en">${rich(r.en)}${speakBtn(r.en, 'say say-quiet')}</span>
            <span class="zh">${rich(r.zh)}</span>
          </li>`).join('')}
      </ul>
    </div>`,

  sentences: (b) => `
    <div class="frames sentences">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <ol>
        ${b.items.map((s) => `
          <li><span class="en">${rich(s.en)}${speakBtn(s.en, 'say say-quiet')}</span>
            <span class="zh">${rich(s.zh)}</span></li>`).join('')}
      </ol>
    </div>`,

  /* A weak answer and the same answer done properly. The weak one is quiet and
     dashed, not struck through — it is not wrong, only badly ordered. */
  upgrade: (b) => `
    <div class="upgrade">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <div class="up-card up-before pair" data-zh>
        <p class="up-tag">${text(b.beforeTag)}<em>${text(b.beforeTagZh)}</em></p>
        <p class="en">${rich(b.beforeEn)}${speakBtn(b.beforeEn, 'say say-quiet')}<button
          class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${rich(b.beforeZh)}</p>
      </div>
      <ol class="up-adds">
        ${b.adds.map((a) => `
          <li><span class="en">${rich(a.en)}</span><em>${rich(a.zh)}</em></li>`).join('')}
      </ol>
      <button class="reveal" aria-expanded="false">${text(b.revealEn || 'Show the better version')} ${text(b.revealZh || '顯示較好的版本')}</button>
      <div class="up-after-wrap" hidden>
        <div class="up-card up-after">
          <p class="up-tag">${text(b.afterTag)}<em>${text(b.afterTagZh)}</em></p>
          <p class="en">${rich(b.afterEn)}${speakBtn(b.afterEn, 'say')}</p>
          <p class="up-zh">${rich(b.afterZh)}</p>
        </div>
      </div>
    </div>`,

  /* Something written out in full, behind a reveal — a follow-up email, say.
     Split into parts so each carries a tag saying what job it does. */
  model: (b) => `
    <div class="model">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <button class="reveal" aria-expanded="false">${text(b.revealEn || 'Show it')} ${text(b.revealZh || '顯示內容')}</button>
      <div class="model-body" hidden>
        ${modelParts(b.parts)}
      </div>
    </div>`,

  /* The self-introduction, performed. */
  cadence: (b) => `
    <div class="cadence">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <ul class="cad-legend" aria-label="How to read the marks">
        <li><span class="cad-pause">/</span> short pause<em>短停</em></li>
        <li><span class="cad-pause">//</span> longer pause<em>長停</em></li>
        <li><strong>bold</strong> stress<em>加重</em></li>
        <li><span class="cad-pace fast">→ faster</span> a little quicker<em>稍快</em></li>
        <li><span class="cad-pace slow">↓ slower</span> slow down for impact<em>放慢</em></li>
      </ul>
      <button class="play cad-play">
        <span class="lb-play">▶ Hear it with the pauses <em>照節奏朗讀</em></span>
        <span class="lb-stop">■ Stop <em>停止</em></span>
      </button>
      ${b.waves.map((w, i) => `
        <section class="wave pair" data-zh>
          <p class="wave-tag"><span class="wave-n">${i + 1}</span>${text(w.en)}<em>${text(w.zh)}</em><button
            class="zh-chip" title="顯示中文">中</button></p>
          ${w.stanzas.map((st) => `<ol class="cad-lines">${st.map(cadLine).join('')}</ol>`).join('')}
          <p class="zh">${rich(w.tr)}</p>
        </section>`).join('')}
    </div>`,

  /* The speaking clock with a recorder beside it. */
  practice: (b) => `
    <div class="activity clocks">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <div class="clock-row">
        ${clockUnit(b.low, b.high)}
        ${recorder()}
      </div>
    </div>`,

  /* One story from the bank. Face up: the questions it answers, and the
     30-second version. Behind a reveal: the two-minute version as STAR. A story
     the page cannot write — because only Winkle knows what happened — is
     `pending`: it keeps its place in the bank, dashed, with the questions it
     has to answer and what he needs to bring. */
  story: (b) => `
    <article class="story${b.pending ? ' pending' : ''}" id="story-${b.id}">
      <header class="story-head">
        <span class="story-n">${b.n}</span>
        <h3>${text(b.en)}<em>${text(b.zh)}</em></h3>
      </header>
      <p class="story-tags">${b.tags.map((t) => `<span class="tag">${text(t.en)}<em>${text(t.zh)}</em></span>`).join('')}</p>
      ${b.short ? `
        <p class="story-lab">30 seconds<em>30 秒版</em></p>
        ${pair(b.short.en, b.short.zh, 'story-short')}` : ''}
      ${b.star ? `
        <button class="reveal" aria-expanded="false">The two-minute version, as STAR 2 分鐘版（STAR 結構）</button>
        <div class="star-body" hidden>
          <ol class="star">
            ${b.star.map((s) => `
              <li><span class="star-k">${s.k}</span>
                <div><p class="star-name">${STAR[s.k].en}<em>${STAR[s.k].zh}</em></p>
                  <p class="en">${rich(s.en)}${speakBtn(s.en, 'say say-quiet')}</p>
                  <p class="zh">${rich(s.zh)}</p></div></li>`).join('')}
          </ol>
        </div>` : ''}
      ${b.add ? `
        <div class="story-add">
          <p class="story-lab">${b.pending ? 'What to bring to the lesson' : 'Still to add — only you know these'}<em>${b.pending ? '上課前要準備的' : '還要你補上的——只有你知道'}</em></p>
          <ul>${b.add.map((a) => `<li>${rich(a.en)}<em>${rich(a.zh)}</em></li>`).join('')}</ul>
        </div>` : ''}
    </article>`,

  /* An interview question. The drill at the end of the page collects every one
     of these, so a question written anywhere on the page is automatically in
     the drill. `story` points at a card in the bank; `answer` is a model
     behind a reveal, or a frame when it carries [slots]. */
  qa: (b) => {
    const id = `q${++qid}`;
    const s = b.story ? storyFor(b.story) : null;
    const isFrame = b.answer && b.answer.some((p) => /\[.+?\]/.test(p.en));
    return `
      <div class="ask-card qa-card" id="${id}" data-q="${attr(plain(b.en))}"
           data-qzh="${attr(b.zh)}" data-kind="${attr(b.kind)}" data-kindzh="${attr(b.kindZh)}">
        <p class="ask-kicker">${text(b.kind)} · ${text(b.kindZh)}</p>
        <p class="ask-q"><span class="en">${rich(b.en)}${speakBtn(b.en, 'say')}
          <button class="zh-chip" title="顯示中文">中</button></span>
          <span class="zh">${rich(b.zh)}</span></p>
        ${s ? `<p class="ask-shape"><span class="ask-shape-lab">Story 故事</span>
          <a href="#story-${s.id}">${s.n} · ${text(s.en)}</a><em>${text(s.zh)}</em></p>` : ''}
        ${b.tipEn ? `<p class="qa-tip">${rich(b.tipEn)}<em>${rich(b.tipZh)}</em></p>` : ''}
        ${b.answer ? `
          <button class="reveal" aria-expanded="false">${isFrame
            ? 'Show the answer frame 顯示回答架構' : 'Show a model answer 顯示範例回答'}</button>
          <div class="model-body" hidden>
            ${isFrame ? `<p class="frame-note">The boxes are yours to fill — the page does not know those facts.
              <em>框起來的地方由你自己填，頁面不知道這些事實。</em></p>` : ''}
            ${modelParts(b.answer)}
          </div>` : ''}
      </div>`;
  },

  /* The cold-question drill. It owns no questions: on load it takes every qa
     card on the page. The question is spoken and not shown, because that is
     how it arrives on a video call. */
  drill: (b) => `
    <div class="drill" data-act="drill">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <div class="drill-card">
        <p class="drill-count"><span class="n">0</span> questions on this page ·
          <span class="left">0</span> not yet asked<em>本頁共 <span class="n">0</span> 題 · 還有 <span class="left">0</span> 題沒抽過</em></p>
        <p class="drill-wait">Press <strong>Ask me</strong>. You will hear the question, not see it.
          <em>按「抽題並朗讀」。你會聽到題目，但看不到。</em></p>
        <div class="drill-q pair" data-zh hidden>
          <p class="ask-kicker drill-kind"></p>
          <p class="en drill-text"></p>
          <p class="zh drill-zh"></p>
          <p class="drill-go"><a href="#">See this question on the page, with its answer →</a><em>回到這題在頁面上的位置，看範例回答</em></p>
        </div>
        <div class="drill-btns">
          <button class="chip chip-main drill-ask">Ask me<em>抽題並朗讀</em></button>
          <button class="chip drill-again" disabled>Once more<em>再聽一次</em></button>
          <button class="chip drill-show" disabled>Show the question<em>顯示題目</em></button>
        </div>
        <p class="drill-tip">Before you press “Once more”, say it out loud: “Sorry — could you repeat the question?” Once, cleanly, no second apology.
          <em>按「再聽一次」之前，先把這句說出口：「Sorry — could you repeat the question?」說一次、說乾淨，不要再道歉第二次。</em></p>
      </div>
      <div class="drill-len" role="group" aria-label="Answer length">
        <span>Answer length<em>回答長度</em></span>
        <button class="chip" data-len="30" aria-pressed="true">30 seconds<em>30 秒版</em></button>
        <button class="chip" data-len="120" aria-pressed="false">2 minutes<em>2 分鐘版</em></button>
      </div>
      <div class="clock-row">
        ${clockUnit(25, 40)}
        ${recorder()}
      </div>
    </div>`,

  /* Words for the job: the term, how it is said, what it means in English,
     and a sentence using it. The Chinese — the term and the sentence — waits
     behind the row's tap. `sayAs` is what 🔊 reads when the written form would
     be read wrongly (letters, dotted names). */
  terms: (b) => `
    <div class="terms">
      ${label(b.en, b.zh)}
      ${hint(b.hintEn, b.hintZh)}
      <ul class="term-list">
        ${b.items.map((i) => `
          <li class="term pair" data-zh>
            <p class="term-w">${text(i.w)}${speakBtn(i.sayAs || i.w)}</p>
            ${i.say ? `<p class="term-say">${text(i.say)}</p>` : ''}
            <p class="term-def">${rich(i.def)}</p>
            <p class="en term-ex">${rich(i.ex)}${speakBtn(i.ex, 'say say-quiet')}</p>
            <p class="zh"><strong>${text(i.zh)}</strong>　${rich(i.exZh)}</p>
          </li>`).join('')}
      </ul>
    </div>`,
};

const STAR = {
  S: { en: 'Situation', zh: '情境' },
  T: { en: 'Task', zh: '任務' },
  A: { en: 'Action', zh: '行動' },
  R: { en: 'Result', zh: '結果' },
};

function modelParts(parts) {
  return `
    <button class="say say-all" data-say="${attr(parts.map((p) => plain(p.en)).join(' '))}"
      aria-label="Listen to the whole answer">🔊 <em>整段</em></button>
    ${parts.map((p) => `
      <div class="model-part">
        <p class="model-tag">${text(p.tag)}<em>${text(p.tagZh)}</em></p>
        <div class="model-text">
          <p class="en">${rich(p.en)}${speakBtn(p.en, 'say say-quiet')}</p>
          <p class="zh">${rich(p.zh)}</p>
        </div>
      </div>`).join('')}`;
}

// ---------------------------------------------------------------- build

function buildCover() {
  const c = PAGE.cover;
  return `
    <header class="cover" id="top">
      <p class="kicker">${text(c.kicker)}</p>
      <h1><span class="en">${text(PAGE.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(PAGE.titleZh)}</span></h1>
      <p class="role">${text(c.role)}<em>${text(c.roleZh)}</em></p>
      ${c.intro.map((p) => pair(p.en, p.zh, 'cover-intro')).join('')}
      <div class="goals">
        ${pair(c.rulesEn, c.rulesZh, 'goals-intro')}
        <ol>
          ${c.rules.map((g) => `
            <li class="pair" data-zh>
              <p class="en">${rich(g.en)}</p>
              <p class="zh">${rich(g.zh)}</p>
            </li>`).join('')}
        </ol>
      </div>
      <p class="cover-jump"><a href="#${stepFor(c.jump).id}">Straight to the cold-question drill →</a>
        <em>直接進入隨機冷問答</em></p>
      <p class="source">${text(PAGE.source.en)}
        <span class="zh">${text(PAGE.source.zh)}</span></p>
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
    <nav class="toc" aria-label="Steps">
      <p class="toc-head">Interview prep 面試準備</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="en">Read this first</span><span class="zh">先讀這段</span></span></a></li>
        ${PAGE.steps.map((s) => `
          <li><a href="#${s.id}" data-target="${s.id}"><span class="n">${s.n}</span>
            <span class="t"><span class="en">${text(s.en)}</span>
            <span class="zh">${text(s.zh)}</span></span></a></li>`).join('')}
      </ul>
    </nav>`;
}

document.title = `${PAGE.title} · ${PAGE.titleZh}`;
$('.bar-title').innerHTML = `${text(PAGE.title)} <span>${text(PAGE.titleZh)}</span>`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
PAGE.steps.forEach((s) => doc.appendChild(el(buildStep(s))));

// ---------------------------------------------------------------- settings

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`winkle.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`winkle.${k}`, v); } catch { /* private mode */ } },
};

const zhToggle = $('#zhToggle');

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
  $('#zhAll').checked = on;
  store.set('zh', on ? '1' : '0');
}

zhToggle.addEventListener('click', () => setAllZh(!document.body.classList.contains('zh-all')));

// ---------------------------------------------------------------- clicks

/* One handler for the whole document — every interactive part of the page is
   a button inside it. */
doc.addEventListener('click', (e) => {
  const t = e.target;

  const say = t.closest('.say');
  if (say) { e.stopPropagation(); speak(say.dataset.say); return; }

  const play = t.closest('.cad-play');
  if (play) {
    if (play.classList.contains('on')) stopPlay(); else playCadence(play);
    return;
  }

  // ---- reveal Chinese for one line
  const chip = t.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    // Climb to the nearest ancestor that actually holds the Chinese, whatever
    // the block wrapped it in — a .pair, a heading, a wave of the intro.
    let host = chip.parentElement;
    while (host && !host.querySelector('.zh')) host = host.parentElement;
    if (host) host.classList.toggle('open');
    return;
  }
  const line = t.closest('.pair[data-zh]');
  if (line && !t.closest('button, a, audio')) { line.classList.toggle('open'); return; }

  // ---- anything behind a "show me" button
  const reveal = t.closest('.reveal');
  if (reveal) {
    const body = reveal.nextElementSibling;
    const open = body.hidden;
    body.hidden = !open;
    reveal.setAttribute('aria-expanded', String(open));
    return;
  }

  const btn = t.closest('button');
  if (!btn || btn.disabled) return;

  if (btn.closest('.clock-unit')) { clockClick(btn); return; }
  if (btn.classList.contains('rec-go')) { recClick(btn.closest('.rec')); return; }

  const drill = btn.closest('.drill');
  if (drill) drillClick(drill, btn);
});

// ---------------------------------------------------------------- speech

let voices = [];
let voice = null;

/* The interviewers are British, so a British voice is the default: every
   question on the page is heard the way it will be asked. The panel can change
   it, and the choice is kept on this device. */
function loadVoices() {
  voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
  if (!voices.length) return;

  const saved = store.get('voice', '');
  voice = voices.find((v) => v.name === saved)
       || voices.find((v) => v.lang === 'en-GB' && /Serena|Daniel|Kate|Google UK/i.test(v.name))
       || voices.find((v) => v.lang === 'en-GB')
       || voices.find((v) => v.lang === 'en-US' && /Samantha|Ava|Allison|Google US/i.test(v.name))
       || voices[0];

  const sel = $('#voicePick');
  sel.innerHTML = voices.map((v) =>
    `<option value="${attr(v.name)}"${v === voice ? ' selected' : ''}>${text(v.name)} · ${text(v.lang)}</option>`
  ).join('');
}

if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

function utter(sentence, rateMul = 1) {
  const u = new SpeechSynthesisUtterance(sentence);
  if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = 'en-GB'; }
  u.rate = Number($('#rate').value) * rateMul;
  return u;
}

function speak(sentence) {
  if (!('speechSynthesis' in window)) return;
  stopPlay();
  speechSynthesis.speak(utter(sentence));
}

/* Anything that runs over several utterances — the intro read through with
   its pauses, or a drill question that starts the clock when it ends — takes a
   token. Stopping bumps the token, so a cancelled utterance that reports
   "finished" afterwards cannot start anything. */
let runToken = 0;
let running = null;

function stopPlay() {
  runToken++;
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  if (running) { running.classList.remove('on'); running = null; }
  $$('.cad-line.now').forEach((l) => l.classList.remove('now'));
}

const PAUSE_MS = [80, 380, 850, 1500];
const PACE = { fast: 1.12, slow: 0.86, '': 1 };

function playCadence(btn) {
  if (!('speechSynthesis' in window)) return;
  stopPlay();

  const lines = $$('.cad-line', btn.closest('.cadence'));
  const token = ++runToken;
  running = btn;
  btn.classList.add('on');

  let i = 0;
  const next = () => {
    if (token !== runToken) return;
    if (i >= lines.length) { stopPlay(); return; }

    const row = lines[i++];
    $$('.cad-line.now').forEach((l) => l.classList.remove('now'));
    row.classList.add('now');
    row.scrollIntoView({ block: 'nearest' });

    const u = utter(row.dataset.say, PACE[row.dataset.pace]);
    let moved = false;
    let guard;
    const on = () => {
      if (moved || token !== runToken) return;
      moved = true;
      clearTimeout(guard);
      setTimeout(next, PAUSE_MS[Number(row.dataset.pause)]);
    };
    u.onend = on;
    u.onerror = on;

    /* A machine with no audio output can accept an utterance and never report
       that it finished. Give each line a generous estimate and move on. */
    const words = row.dataset.say.split(/\s+/).length;
    guard = setTimeout(on, Math.min(20000, 2500 + (words / (2.6 * u.rate)) * 1000));

    speechSynthesis.speak(u);
  };

  next();
}

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  store.set('voice', e.target.value);
  speak('Thanks for joining us today. Could you start by telling us a little about yourself?');
});

const rate = $('#rate');
rate.value = store.get('rate', '0.95');
rate.addEventListener('change', () => {
  store.set('rate', rate.value);
  speak('Tell me about a time you disagreed with a colleague.');
});

// ---------------------------------------------------------------- clocks

const timers = new Map();

function tickClock(unit) {
  const sec = Number(unit.dataset.sec) + 1;
  unit.classList.toggle('in', sec >= Number(unit.dataset.low));
  unit.classList.toggle('over', sec >= Number(unit.dataset.high));
  unit.dataset.sec = sec;
  $('.clock-face', unit).textContent = face(sec);
}

function stopClock(unit) {
  clearInterval(timers.get(unit));
  timers.delete(unit);
  unit.classList.remove('running');
}

function startClock(unit) {
  if (timers.has(unit)) return;
  unit.classList.add('running');
  timers.set(unit, setInterval(() => tickClock(unit), 1000));
}

function resetClock(unit) {
  stopClock(unit);
  unit.dataset.sec = unit.dataset.start;
  unit.classList.remove('in', 'over');
  $('.clock-face', unit).textContent = face(Number(unit.dataset.start));
}

function clockClick(btn) {
  const unit = btn.closest('.clock-unit');
  if (btn.classList.contains('clock-zero')) { resetClock(unit); return; }
  if (!btn.classList.contains('clock-go')) return;
  if (timers.has(unit)) stopClock(unit); else startClock(unit);
}

$$('.clock-unit').forEach((u) => { u.dataset.sec = u.dataset.start; });

// ---------------------------------------------------------------- recorder

const recs = new Map();

async function recClick(box) {
  const was = recs.get(box);
  if (was && was.mr.state === 'recording') { was.mr.stop(); return; }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
    box.classList.add('no-rec');
    return;
  }

  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch {
    box.classList.add('denied');
    return;
  }
  box.classList.remove('denied', 'no-rec');

  // The page's own voice must not end up on the recording.
  stopPlay();

  const mr = new MediaRecorder(stream);
  const chunks = [];
  const state = { mr, url: was ? was.url : null, t0: Date.now(), tick: null };
  recs.set(box, state);

  mr.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
  mr.onstop = () => {
    stream.getTracks().forEach((tr) => tr.stop());
    clearInterval(state.tick);
    box.classList.remove('recording');
    if (state.url) URL.revokeObjectURL(state.url);
    state.url = URL.createObjectURL(new Blob(chunks, { type: mr.mimeType || 'audio/webm' }));
    const audio = $('.rec-audio', box);
    audio.src = state.url;
    audio.hidden = false;
  };

  mr.start();
  box.classList.add('recording');
  const time = $('.rec-time', box);
  time.textContent = '0:00';
  state.tick = setInterval(() => {
    time.textContent = face(Math.floor((Date.now() - state.t0) / 1000));
  }, 250);
}

// ---------------------------------------------------------------- drill

/* Two lengths, because the story bank has two: the 30-second version, which is
   the harder one, and the two-minute STAR version. */
const LENGTHS = { 30: [25, 40], 120: [90, 135] };

let drillCard = null;

function drillInit(act) {
  const n = $$('.qa-card').length;
  $$('.drill-count .n', act).forEach((x) => { x.textContent = n; });
  drillLeft(act);
}

function drillLeft(act) {
  const left = $$('.qa-card').filter((c) => !c.classList.contains('drilled')).length;
  $$('.drill-count .left', act).forEach((x) => { x.textContent = left; });
}

/* Pull one question at random and do not pull it again until every question
   on the page has been asked — then start the whole pile over. */
function drillAsk(act) {
  const cards = $$('.qa-card');
  let left = cards.filter((c) => !c.classList.contains('drilled'));
  if (!left.length) {
    cards.forEach((c) => c.classList.remove('drilled'));
    left = cards;
  }
  drillCard = left[Math.floor(Math.random() * left.length)];
  drillCard.classList.add('drilled');

  const box = $('.drill-q', act);
  box.hidden = true;
  box.classList.remove('open');
  $('.drill-kind', act).textContent = `${drillCard.dataset.kind} · ${drillCard.dataset.kindzh}`;
  $('.drill-text', act).textContent = drillCard.dataset.q;
  $('.drill-zh', act).textContent = drillCard.dataset.qzh;
  $('.drill-go a', act).href = `#${drillCard.id}`;
  $('.drill-wait', act).hidden = true;
  $('.drill-again', act).disabled = false;
  $('.drill-show', act).disabled = false;
  drillLeft(act);

  askAloud(act);
}

/* The clock starts when the question finishes, not when the button is
   pressed — the silence after a question is the part being practised. */
function askAloud(act) {
  const unit = $('.clock-unit', act);
  resetClock(unit);
  if (!('speechSynthesis' in window)) { startClock(unit); return; }

  stopPlay();
  const token = ++runToken;
  const u = utter(drillCard.dataset.q);
  u.onend = () => { if (token === runToken) startClock(unit); };
  speechSynthesis.speak(u);
}

function drillClick(act, btn) {
  if (btn.classList.contains('drill-ask')) { drillAsk(act); return; }
  if (btn.classList.contains('drill-again') && drillCard) { askAloud(act); return; }
  if (btn.classList.contains('drill-show')) { $('.drill-q', act).hidden = false; return; }

  const len = btn.dataset.len;
  if (len) {
    $$('[data-len]', act).forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    const [lo, hi] = LENGTHS[len];
    const unit = $('.clock-unit', act);
    unit.dataset.low = lo;
    unit.dataset.high = hi;
    $$('.lo', unit).forEach((x) => { x.textContent = face(lo); });
    $$('.hi', unit).forEach((x) => { x.textContent = face(hi); });
    resetClock(unit);
  }
}

$$('.drill').forEach(drillInit);

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

// Open every model answer, frame, STAR version and upgrade at once.
$('#showAll').addEventListener('click', () => {
  $$('.model-body, .star-body, .up-after-wrap').forEach((b) => { b.hidden = false; });
  $$('.reveal').forEach((r) => r.setAttribute('aria-expanded', 'true'));
  setPanel(false);
});

// A reload is the reset: recordings, clocks and the drill pile all go.
$('#reset').addEventListener('click', () => location.reload());

// ---------------------------------------------------------------- chrome

/* The contents list follows the reader. It never scrolls the document: only
   the list's own box, and only when that box actually overflows. (Calling
   scrollIntoView here — as the older pages do — scrolls the page itself on
   every scroll event, and the page drifts.) */
const links = new Map($$('.toc a').map((a) => [a.dataset.target, a]));
const marks = [$('#top'), ...$$('.step')];

function keepLinkVisible(a) {
  const box = a.closest('.toc');
  if (!box || box.scrollHeight <= box.clientHeight) return;
  // Rect deltas rather than offsetTop, whose origin is not reliably the box.
  const link = a.getBoundingClientRect();
  const view = box.getBoundingClientRect();
  if (link.top < view.top) box.scrollTop -= view.top - link.top;
  else if (link.bottom > view.bottom) box.scrollTop += link.bottom - view.bottom;
}

function markHere() {
  const line = 90;
  let here = marks[0];
  marks.forEach((m) => { if (m.getBoundingClientRect().top <= line) here = m; });
  links.forEach((a) => a.classList.remove('here'));
  const a = links.get(here.id);
  if (a) { a.classList.add('here'); keepLinkVisible(a); }
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

$('#nav').addEventListener('click', (e) => { if (e.target.closest('a')) closeNav(); });
$('.nav-scrim').addEventListener('click', closeNav);

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeNav();
  setPanel(false);
  stopPlay();
});

setAllZh(store.get('zh', '0') === '1');
