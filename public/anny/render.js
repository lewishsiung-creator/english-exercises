/* Renders NOTEBOOK (content.js) and wires up the activities.

   This is the same teacher-led machinery as the other adult pages — English
   leads, Chinese waits behind a 中 chip, nothing is scored and nothing is
   saved — with one difference that comes from the page being a notebook rather
   than a lesson:

   - Sessions read newest first, and they fold. The newest is at the top and
     open; the earlier ones are below it and closed, because after a term this
     page is longer than any lesson ever is. A session opens
     by tapping its heading, by following a contents link, or by arriving on its
     anchor (/anny/#s3). The teacher panel opens the lot.
   - Which sessions are open is NOT remembered between loads. A reload is a
     clean start, the same as every other page here: the newest lesson, open.

   The only state kept in localStorage is device settings — the chosen voice,
   the speed, and whether Chinese starts visible.
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

/* Lists that hold sentence starters, sentence frames or tick-list phrases take
   `{ en, zh }`. Accept a bare string too, so a session written in a hurry still
   renders. */
function bilingual(x) {
  return typeof x === 'string' ? { en: x, zh: '' } : x;
}

/* Fisher–Yates. Scrambles the right-hand column of a matching exercise so the
   pairs are not sitting on the same row, and the options of a gap-fill so the
   answer is not always the chip the author wrote first. */
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

/* The heading every activity block shares: English, a 中 chip, the Chinese. */
function label(b) {
  return `
    <h4 class="label"><span class="en">${text(b.en)}</span>
      <button class="zh-chip" title="顯示中文">中</button>
      <span class="zh">${text(b.zh)}</span></h4>`;
}

function hint(b) {
  if (!b.hintEn) return '';
  return `<p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh || '')}</span></p>`;
}

/* ---------------- figures ----------------

   Some of what these sessions cover is a shape rather than a sentence — an
   order you deliver in, a measure that changed, the four ways one thing
   fails — and each of them was buried in a paragraph. They are diagrams now.

   Three shapes, because three different things are being said. `steps` is a
   sequence you move along. `pivot` is one thing seen on either side of a
   single event, where the point is that the two halves are being compared,
   not performed in turn. `rows` is a set of parallel pairs with no order at
   all. Drawing all three as a row of arrows would have made them look like
   the same idea three times, which is exactly what a diagram is supposed to
   prevent.

   Laid out in HTML and CSS, NOT drawn as an SVG with text inside it. Text in
   an SVG does not reflow when the column narrows, does not grow when the
   reader enlarges type, cannot be selected or read aloud, and has to be
   positioned by hand twice over on a bilingual page. All four of those matter
   here, and none of them is worth trading for a drawing. The only SVGs are
   the connectors between panels, which are the parts that really are pictures.

   They live in the renderer so content.js stays pure data: a session names a
   figure by key and never carries markup. */

const ARROW = `<svg class="fig-arrow" viewBox="0 0 24 24" aria-hidden="true"><path
  d="M4 12h14M12 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* A fault line, for a `rows` figure: the thing on the left is broken by the
   thing on the right. It has to read as damage at 20px, which rules out an
   ✗ (too close to the "wrong answer" mark the exercises use) and a straight
   line (reads as a divider). A jolt in the middle of a level line does it. */
const FAULT = `<svg class="fig-fault" viewBox="0 0 24 24" aria-hidden="true"><path
  d="M2 12h6l2.5-5 2 10 2.5-5h7" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const FIGURES = {
  /* Session 3. The four Cs are already a list on the page; what the list
     cannot show is that you earn them in an order, and that the order is
     almost the reverse of how a report is built. That is the figure. */
  order: {
    steps: [
      { en: 'Story', zh: '故事', earnEn: 'earns Connection', earnZh: '換到共鳴' },
      { en: 'Strategy', zh: '策略', earnEn: 'earns Credibility', earnZh: '換到可信' },
      { en: 'One slide', zh: '一張投影片', earnEn: 'earns Clarity', earnZh: '換到清晰' },
      { en: 'The ask', zh: '請求', earnEn: 'earns Commitment', earnZh: '換到行動' },
    ],
    footEn: 'A report runs the other way: data first, story last if at all, and no ask. That reversal is the whole difference between reporting and leading.',
    footZh: '報告的順序剛好相反：先數據，故事擺最後、甚至不放，也沒有請求。而這個顛倒，就是「報告」和「領導」的差別所在。',
  },

  /* Session 1. The spine of that hour was an order, and it was split across
     two places: the note says the conversation has to start with what she
     keeps, and the task instruction says reinforce first, then name the next
     challenge. Neither says it as a sequence, which is what it is. */
  coach: {
    steps: [
      {
        en: 'Keep', zh: '先講保留什麼',
        list: [
          { en: 'Name the strengths, specifically', zh: '具體說出她的強項' },
          { en: 'Persistence, preparation, standards', zh: '堅持、準備、標準' },
        ],
      },
      {
        en: 'Reframe', zh: '再把它轉向',
        list: [
          { en: 'Leadership is their next use', zh: '領導力是這些強項的下一個用法' },
          { en: 'Not a replacement for them', zh: '不是用來取代它們' },
        ],
      },
      {
        en: 'Challenge', zh: '最後指出挑戰',
        list: [
          { en: 'Put the next thing as a question', zh: '把下一個挑戰講成問題' },
          { en: 'A verdict cannot be picked up', zh: '判決，對方接不住' },
        ],
      },
    ],
    footEn: 'Open with the meeting and she hears that twelve years of what worked was wrong. The sentences can be the same ones; the order is what makes them survivable.',
    footZh: '一開口就談那場會議，她聽到的會是「我過去做對的事其實都是錯的」。句子可以完全一樣，但順序才決定她接不接得住。',
  },

  /* Session 1, and the thesis of the whole session: "the measure has quietly
     changed from what she can do to what the people around her can do". That
     sentence is a clause in the middle of the summary paragraph, and it is the
     reason every other thing in the session is true. It is not a sequence —
     nobody performs the left-hand side and then the right — so it is drawn as
     one job on either side of one event. Her own strengths are listed on the
     left deliberately: nothing there is wrong, and the figure must not read as
     "stop doing these". */
  measure: {
    kind: 'pivot',
    hingeEn: 'The promotion',
    hingeZh: '升任之後',
    sides: [
      {
        tagEn: 'What the job used to measure',
        tagZh: '這份工作以前衡量的是',
        en: 'What she can do',
        zh: '她自己做得到什麼',
        list: [
          { en: 'Her own technical depth', zh: '她自己的技術深度' },
          { en: 'How well she prepares', zh: '她準備得多充分' },
          { en: 'The standard she holds', zh: '她守住的標準' },
        ],
      },
      {
        tagEn: 'What it measures now',
        tagZh: '現在衡量的是',
        en: 'What the people around her can do',
        zh: '她身邊的人做得到什麼',
        list: [
          { en: 'Whether the surgeon gains confidence', zh: '那位醫師有沒有變得更有信心' },
          { en: 'Whether her team decides without her', zh: '她的團隊能不能自己決定' },
          { en: 'How much runs when she is not there', zh: '她不在的時候還跑得動多少' },
        ],
      },
    ],
    /* No "on the left": on a phone the panels stack and there is no left. */
    footEn: 'None of what the job used to measure is a fault, and none of it has to be given up — it is what got her here, and she will need all of it. The scoreboard is simply no longer the one she spent twelve years learning to win on, and nobody told her it had been changed.',
    footZh: '以前衡量的那些，沒有一項是缺點，也沒有一項需要放棄——那正是把她帶到這個位置的東西，而且她還會用到。只是計分板已經不是她花十二年學會怎麼贏的那一塊了，而且沒有人告訴過她換了。',
  },

  /* Session 3. The note above it says two things — where each C breaks, and
     the order that prevents it — and only the second half was ever drawn. The
     four failures are four parallel pairs with no sequence between them, so
     they get the shape that has no arrows in it. */
  breaks: {
    kind: 'rows',
    keyEn: 'What you were aiming for',
    keyZh: '你想要的',
    valEn: 'What loses it',
    valZh: '失手的原因',
    rows: [
      {
        en: 'Credibility',
        zh: '可信',
        breakEn: 'Numbers everywhere and no “so what”.',
        breakZh: '數字到處都是，卻沒有說出「所以呢」。',
      },
      {
        en: 'Connection',
        zh: '共鳴',
        breakEn: 'Opening straight into data, before anyone knows why they are listening.',
        breakZh: '一開場就進數據，聽眾還不知道自己為什麼要聽。',
      },
      {
        en: 'Clarity',
        zh: '清晰',
        breakEn: 'One slide carrying paragraphs, and a chart too small to read.',
        breakZh: '一張投影片塞滿整段文字，圖表還小到看不清。',
      },
      {
        en: 'Commitment',
        zh: '行動',
        breakEn: 'Finishing on “Any questions?” — nobody has been asked for anything.',
        breakZh: '以「有沒有問題？」收尾——等於沒有向任何人提出請求。',
      },
    ],
    footEn: 'Every one of the four is lost by something the speaker did, which is the good news: a difficult audience is not on this list.',
    footZh: '這四項的失守，每一項都是講者自己造成的——而這其實是好消息：「聽眾很難搞」並不在這張表上。',
  },

  /* Session 2. Three stages, two steps each, and the order is the point —
     which a paragraph states and a diagram shows. */
  stages: {
    steps: [
      {
        en: 'Uncover', zh: '找出',
        list: [
          { en: 'Notice you are stuck', zh: '察覺自己卡住了' },
          { en: 'Put the belief into words', zh: '把信念說成一句話' },
        ],
      },
      {
        en: 'Unpack', zh: '剖析',
        list: [
          { en: 'Admit the part you play', zh: '承認自己扮演的角色' },
          { en: 'Trace where it came from', zh: '回溯它從哪裡來' },
        ],
      },
      {
        en: 'Unblock', zh: '破除',
        list: [
          { en: 'Reframe it', zh: '把它轉個念' },
          { en: 'Change one concrete thing', zh: '具體改變一件事' },
        ],
      },
    ],
    footEn: 'Most people jump straight to the third box. That is why the change never holds.',
    footZh: '多數人直接跳到第三格，這就是改變撐不住的原因。',
  },
};

function figSteps(steps) {
  return steps.map((s, i) => `
    ${i ? ARROW : ''}
    <div class="fig-step">
      <p class="fig-n">${i + 1}</p>
      <p class="fig-t"><span class="en">${text(s.en)}</span><span class="zh">${text(s.zh)}</span></p>
      ${s.earnEn ? `<p class="fig-earn"><span class="en">${text(s.earnEn)}</span>
        <span class="zh">${text(s.earnZh)}</span></p>` : ''}
      ${s.list ? figList(s.list) : ''}
    </div>`).join('');
}

function figList(list) {
  return `<ul class="fig-l">${list.map((l) => `
    <li><span class="en">${text(l.en)}</span><span class="zh">${text(l.zh)}</span></li>`).join('')}</ul>`;
}

/* One job, before and after one event. The hinge carries the event, and it is
   a separate element rather than a border between the panels so it can be
   labelled — an unlabelled divider would leave the reader to guess what
   happened in the middle, which is the one thing the figure is for. */
function figPivot(f) {
  const side = (s) => `
    <div class="fig-side">
      <p class="fig-tag"><span class="en">${text(s.tagEn)}</span>
        <span class="zh">${text(s.tagZh)}</span></p>
      <p class="fig-t"><span class="en">${text(s.en)}</span><span class="zh">${text(s.zh)}</span></p>
      ${s.list ? figList(s.list) : ''}
    </div>`;
  return `
    <div class="fig-pivot">
      ${side(f.sides[0])}
      <div class="fig-hinge">
        ${ARROW}
        <p class="fig-hinge-t"><span class="en">${text(f.hingeEn)}</span>
          <span class="zh">${text(f.hingeZh)}</span></p>
      </div>
      ${side(f.sides[1])}
    </div>`;
}

/* Parallel pairs, no sequence. The column heads are stated once rather than
   repeated on every row, and they are read by the screen reader before the
   rows because they are what makes a bare pair of phrases mean anything. */
function figRows(f) {
  return `
    <div class="fig-rows">
      <p class="fig-heads">
        <span class="fig-head"><span class="en">${text(f.keyEn)}</span>
          <span class="zh">${text(f.keyZh)}</span></span>
        <span class="fig-head"><span class="en">${text(f.valEn)}</span>
          <span class="zh">${text(f.valZh)}</span></span>
      </p>
      ${f.rows.map((r) => `
        <div class="fig-line">
          <p class="fig-key"><span class="en">${text(r.en)}</span>
            <span class="zh">${text(r.zh)}</span></p>
          ${FAULT}
          <p class="fig-val"><span class="en">${text(r.breakEn)}</span>
            <span class="zh">${text(r.breakZh)}</span></p>
        </div>`).join('')}
    </div>`;
}

const BLOCKS = {
  lead: (b) => `<div class="lead">${pair(b.en, b.zh)}</div>`,

  /* A figure names its drawing by key. An unknown key says so on the page
     rather than rendering nothing — a diagram that silently disappears is the
     kind of thing nobody notices until the lesson. */
  figure: (b) => {
    const f = FIGURES[b.fig];
    if (!f) {
      console.error(`No figure named "${b.fig}"`);
      return `<p class="missing">缺少圖解：<code>${text(b.fig)}</code></p>`;
    }
    const drawing = f.kind === 'pivot' ? figPivot(f)
      : f.kind === 'rows' ? figRows(f)
      : `<div class="fig-row fig-row-${f.steps.length}">${figSteps(f.steps)}</div>`;
    return `
      <figure class="fig">
        ${label(b)}
        ${hint(b)}
        ${drawing}
        ${f.footEn ? `<figcaption class="fig-foot">
          <span class="en">${text(f.footEn)}</span>
          <span class="zh">${text(f.footZh)}</span></figcaption>` : ''}
      </figure>`;
  },

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

  /* The body needs its own 中 chip, not just the heading's. Tapping the
     paragraph has always opened it — `.pair[data-zh]` handles that — but with
     no chip on the passage there was nothing to say a translation existed, and
     an invisible affordance is the same as an absent one. */
  note: (b) => `
    <aside class="note">
      <h4><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      <div class="pair" data-zh>
        <p class="en">${text(b.bodyEn)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.bodyZh)}</p>
      </div>
    </aside>`,

  /* The same message said two ways — how it landed, and how it could have
     landed. Both halves are good English and both are spoken aloud: unlike
     `fix`, neither side is a mistake, and hearing the blunt version is half the
     point. The two sit side by side rather than stacked, because the whole
     teaching move is the comparison. */
  contrast: (b) => `
    <div class="contrast">
      ${label(b)}
      ${hint(b)}
      ${b.items.map((i) => `
        <div class="cx">
          <p class="cx-case pair" data-zh>
            <span class="en">${text(i.caseEn)}<button class="zh-chip" title="顯示中文">中</button></span>
            <span class="zh">${text(i.caseZh)}</span>
          </p>
          <div class="cx-grid">
            <div class="cx-side cx-cold">
              <p class="cx-tag">${text(b.coldEn || 'As it landed')}
                <em>${text(b.coldZh || '當下造成的效果')}</em></p>
              <div class="pair" data-zh>
                <p class="en">${text(i.cold.en)}${speakBtn(i.cold.en, 'say say-quiet')}
                  <button class="zh-chip" title="顯示中文">中</button></p>
                <p class="zh">${text(i.cold.zh)}</p>
              </div>
            </div>
            <div class="cx-side cx-warm">
              <p class="cx-tag">${text(b.warmEn || 'As it could land')}
                <em>${text(b.warmZh || '可以有的效果')}</em></p>
              <div class="pair" data-zh>
                <p class="en">${text(i.warm.en)}${speakBtn(i.warm.en, 'say say-quiet')}
                  <button class="zh-chip" title="顯示中文">中</button></p>
                <p class="zh">${text(i.warm.zh)}</p>
              </div>
            </div>
          </div>
          <div class="cx-why pair" data-zh>
            <p class="en">${text(i.whyEn)}<button class="zh-chip" title="顯示中文">中</button></p>
            <p class="zh">${text(i.whyZh)}</p>
          </div>
        </div>`).join('')}
    </div>`,

  /* Phrase cards. The phrase and its gloss sit face up together — a phrase and
     its meaning are one item, and splitting them put a tap in front of the
     thing she came to the card for. What stays behind the tap is the example
     sentence, which is the part worth waiting for: seeing the phrase used is a
     different act from knowing what it means. The example's translation goes
     with it, since a Chinese gloss of an English sentence nobody can see yet
     would be no use on its own. */
  phrases: (b) => `
    <div class="phrases">
      ${label(b)}
      <ul class="cards">
        ${b.items.map((i) => `
          <li class="card" tabindex="0" role="button" aria-expanded="false">
            <p class="card-en">${text(i.en)}${speakBtn(i.en)}</p>
            <p class="card-zh">${text(i.zh)}</p>
            <div class="card-back">
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
        ${label(b)}
        ${hint(b)}
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
      ${label(b)}
      ${hint(b)}
      ${b.items.map((it, n) => {
        const [before, after] = text(it.text).split('___');
        /* The options are scrambled on render and the answer index moves with
           them. Written out in source order the correct one sits wherever the
           author happened to put it first — which, across three sessions, was
           the leftmost chip almost every time. A learner spots that pattern
           long before she spots the English, and from then on the exercise is
           testing nothing. Authoring stays as it was: `answer` is still the
           index into `options` as written. */
        const opts = shuffled(it.options.map((o, i) => ({ o, was: i })));
        const answer = opts.findIndex((x) => x.was === it.answer);
        return `
          <div class="gap" data-answer="${answer}">
            <div class="gap-line pair" ${it.textZh ? 'data-zh' : ''}>
              <p class="en"><span class="gap-n">${n + 1}</span>
                <span class="gap-text">${before}<span class="slot"></span>${after || ''}${
                  it.textZh ? '<button class="zh-chip" title="顯示中文">中</button>' : ''}</span></p>
              ${it.textZh ? `<p class="zh">${text(it.textZh)}</p>` : ''}
            </div>
            <ul class="opts">
              ${opts.map((x, i) => `
                <li><button class="chip" data-i="${i}">${text(x.o)}</button></li>`).join('')}
            </ul>
            <p class="why"><span class="en">${text(it.why.en)}</span>
              <span class="zh">${text(it.why.zh)}</span></p>
          </div>`;
      }).join('')}
    </div>`,

  /* Her own sentences, corrected. The mistake is shown as she said it and the
     upgrade waits behind a tap, so she gets a moment to spot it herself — and
     so the page is worth re-reading weeks later, when the correction is the
     part she has forgotten. The wrong sentence is never spoken aloud: 🔊 sits
     on the corrected version only, because the wrong one should not be the
     model going into her ear. */
  fix: (b) => `
    <div class="fixes">
      ${label(b)}
      ${hint(b)}
      <ul class="fix-list">
        ${b.items.map((i) => `
          <li class="fix" tabindex="0" role="button" aria-expanded="false">
            <p class="fix-wrong"><span class="fix-mark" aria-hidden="true">✕</span>
              <span class="fix-t">${text(i.wrong)}</span></p>
            <div class="fix-back">
              <p class="fix-right"><span class="fix-mark" aria-hidden="true">✓</span>
                <span class="fix-t">${text(i.right)}</span>${speakBtn(i.right, 'say say-quiet')}</p>
              <div class="pair fix-why" data-zh>
                <p class="en">${text(i.whyEn)}<button class="zh-chip" title="顯示中文">中</button></p>
                <p class="zh">${text(i.whyZh)}</p>
              </div>
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  poll: (b) => `
    <div class="activity poll" data-act="poll">
      ${label(b)}
      ${hint(b)}
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

  cards: (b) => `
    <div class="activity audit" data-act="audit">
      ${label(b)}
      ${hint(b)}
      <ul class="roles">
        ${b.items.map((i) => `
          <li class="role">
            <p class="role-icon" aria-hidden="true">${i.icon}</p>
            <p class="role-name">
              <strong class="en">${text(i.en)}</strong>
              <span class="zh">${text(i.zh)}</span>
            </p>
            <div class="pair role-desc" data-zh>
              <p class="en">${text(i.descEn)}<button class="zh-chip" title="顯示中文">中</button></p>
              <p class="zh">${text(i.descZh)}</p>
            </div>
            <div class="role-btns" role="group">
              <button class="chip" data-v="have">${text(b.haveEn || 'I have this')}<em>${text(b.haveZh || '我有這樣的人')}</em></button>
              <button class="chip" data-v="need">${text(b.needEn || 'I need this')}<em>${text(b.needZh || '我需要一位')}</em></button>
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  discuss: (b) => `
    <div class="discuss">
      ${label(b)}
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
      ${label(b)}
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

const sessions = NOTEBOOK.sessions;

/* The array in content.js stays chronological — a session is appended at the
   bottom and `n` counts up — but the page reads newest first, so the latest
   discussion is the first thing on screen rather than the last. `ordered` is
   the display order and is used for the contents list and the document; the
   array itself is still what "the newest" means, so it stays the source of
   truth for which session opens. */
const ordered = [...sessions].reverse();

/* While the content is a placeholder, say so across the top — on screen and in
   print, so a demo cannot be handed over by accident. */
function buildBanner() {
  const s = NOTEBOOK.sample;
  if (!s) return '';
  const msg = typeof s === 'string' ? s
    : 'Sample session — the words here are a placeholder, not Anny’s own work. 範例課程：此處內容為範本，並非 Anny 的實際上課紀錄。';
  return `<p class="sample-banner">${text(msg)}</p>`;
}

/* What the notebook covers, as a row of panels — and the one graphic on the
   page that is about the page itself. The three sessions are not three
   separate topics: one watches a manager from outside, the next looks at the
   same person from inside, the third turns the room on Anny. Each session's
   lead says so in passing and nothing said it anywhere a reader could see it
   whole.

   Built from the sessions array, in lesson order, so session 4 adds its own
   panel and this never has to be remembered. A session with no `lens` is
   skipped rather than drawn empty, and with fewer than two there is no shape
   to show, so the whole thing stays off the page. The panels are links: on a
   phone the contents list is behind the ☰, and this ends up being the fastest
   way into a session. */
function buildMap() {
  const list = NOTEBOOK.sessions.filter((s) => s.lens);
  if (list.length < 2) return '';
  return `
    <nav class="map" aria-label="What the sessions look at 各堂課的角度">
      ${list.map((s) => `
        <a class="map-card" href="#${text(s.id)}">
          <p class="map-n">${text(s.n)}</p>
          <p class="map-t"><span class="en">${text(s.en)}</span>
            <span class="zh">${text(s.zh)}</span></p>
          <p class="map-lens"><span class="en">${text(s.lens.en)}</span>
            <span class="zh">${text(s.lens.zh)}</span></p>
        </a>`).join('')}
    </nav>`;
}

function buildCover() {
  const i = NOTEBOOK.intro;
  return `
    <header class="cover" id="top">
      <p class="kicker">${text(NOTEBOOK.kicker)}</p>
      <h1><span class="en">${text(NOTEBOOK.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(NOTEBOOK.titleZh)}</span></h1>
      ${pair(i.en, i.zh, 'cover-intro')}
      ${buildMap()}
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
    </header>`;
}

/* A session. The heading is a button, so the fold works from the keyboard and
   announces itself; the body carries `.session-body` and is hidden by the
   `folded` class rather than the `hidden` attribute, so print can override it
   and unfold everything. */
function buildSession(s, open) {
  const blocks = s.blocks.map((b) => {
    const fn = BLOCKS[b.t];
    if (!fn) throw new Error(`Unknown block type "${b.t}" in session ${s.id}`);
    return fn(b);
  }).join('');

  /* The focus chips say what the session covered, which makes them closer to
     the contents list than to the lesson: both languages show at once, with no
     中 chip to tap. A chip that grew when touched would also be a strange
     thing in a row of pills. */
  const focus = s.focus && s.focus.length ? `
    <ul class="focus">
      ${s.focus.map((f) => `
        <li><span class="en">${text(f.en)}</span><span class="zh">${text(f.zh)}</span></li>`).join('')}
    </ul>` : '';

  return `
    <section class="session ${open ? '' : 'folded'}" id="${s.id}">
      <h2 class="session-head">
        <button class="session-btn" aria-expanded="${open}" aria-controls="body-${s.id}">
          <span class="n">${s.n}</span>
          <span class="titles">
            <span class="date">${text(s.dateEn)}<em>${text(s.dateZh || '')}</em></span>
            <span class="en">${text(s.en)}</span>
            <span class="zh">${text(s.zh)}</span>
          </span>
          <span class="fold" aria-hidden="true"></span>
        </button>
      </h2>
      <div class="session-body" id="body-${s.id}">
        ${focus}
        ${blocks}
      </div>
    </section>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="Sessions">
      <p class="toc-head">Sessions 課程</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="en">Start</span><span class="zh">開始</span></span></a></li>
        ${ordered.map((s) => `
          <li><a href="#${s.id}" data-target="${s.id}"><span class="n">${s.n}</span>
            <span class="t"><span class="en">${text(s.en)}</span>
            <span class="zh">${text(s.dateEn)}</span></span></a></li>`).join('')}
      </ul>
    </nav>`;
}

document.title = `${NOTEBOOK.title} · ${NOTEBOOK.titleZh}`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
if (NOTEBOOK.sample) doc.appendChild(el(buildBanner()));
doc.appendChild(el(buildCover()));

/* Open the session named in the URL, or the newest one. A hash that matches
   nothing falls back to the newest, so an old link cannot land on a page with
   everything shut. */
const wanted = decodeURIComponent(location.hash.slice(1));
const openId = sessions.some((s) => s.id === wanted)
  ? wanted
  : (sessions.length ? sessions[sessions.length - 1].id : '');

ordered.forEach((s) => doc.appendChild(el(buildSession(s, s.id === openId))));

// ---------------------------------------------------------------- folding

function setFold(section, open) {
  section.classList.toggle('folded', !open);
  $('.session-btn', section).setAttribute('aria-expanded', String(open));
}

/* Two ways to open a session, and they mean different things.

   `openSession` is "take me to this one" — the contents list and the URL hash.
   It folds the others, so following a link lands on one session rather than on
   that session plus whatever happened to be open already.

   Tapping a heading is the other way, and it is deliberately additive: nothing
   else closes, so two sessions can sit open side by side when a phrase from
   October is worth putting next to one from August. */
function openSession(id, sole = true) {
  const section = document.getElementById(id);
  // "#top" is the cover, and an unknown id is an old link — neither is a
  // session, and neither should fold the page down on its way past.
  if (!section || !section.classList.contains('session')) return null;
  if (sole) $$('.session').forEach((s) => { if (s !== section) setFold(s, false); });
  setFold(section, true);
  return section;
}

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`anny.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`anny.${k}`, v); } catch { /* private mode */ } },
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

/* One click handler for the whole document. Every interactive part is a button
   or a card inside it, so this stays in one place rather than being scattered
   across the block builders. */
doc.addEventListener('click', (e) => {
  const t = e.target;

  // ---- speak
  const say = t.closest('.say');
  if (say) { e.stopPropagation(); speak(say.dataset.say); return; }

  // ---- fold / unfold a session
  const head = t.closest('.session-btn');
  if (head) {
    const section = head.closest('.session');
    setFold(section, section.classList.contains('folded'));
    return;
  }

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

  // ---- phrase card
  const card = t.closest('.card');
  if (card) {
    const open = card.classList.toggle('open');
    card.setAttribute('aria-expanded', String(open));
    return;
  }

  // ---- a corrected sentence
  const fix = t.closest('.fix');
  if (fix) {
    const open = fix.classList.toggle('open');
    fix.setAttribute('aria-expanded', String(open));
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
  else if (kind === 'poll' || kind === 'audit') pickOne(btn);
  else if (kind === 'task') taskClick(act, btn);
});

// Cards and corrections are focusable, so keep them operable from the keyboard.
doc.addEventListener('keydown', (e) => {
  const item = e.target.closest('.card, .fix');
  if (item && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); item.click(); }
});

// ---------------------------------------------------------------- activities

function wobble(node) {
  node.classList.remove('no');
  void node.offsetWidth;   // restart the animation if it is already running
  node.classList.add('no');
  setTimeout(() => node.classList.remove('no'), 500);
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
  speak('Let’s pick that up where we left off last week.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('Say that again, a little more slowly.');
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

// Unfold the whole notebook — for looking back over a term, or for printing.
$('#openAll').addEventListener('click', () => {
  $$('.session').forEach((s) => setFold(s, true));
  setPanel(false);
});

/* Reveal every answer at once — for going over an exercise together, or for
   picking a session up in the middle. Sessions are unfolded first, or the
   answers would be filled in behind a closed lid. */
$('#showAll').addEventListener('click', () => {
  $$('.session').forEach((s) => setFold(s, true));

  $$('.gap:not(.solved)').forEach((gap) => {
    const right = $$('.opts .chip', gap)[Number(gap.dataset.answer)];
    $('.slot', gap).textContent = right.textContent;
    right.classList.add('done');
    gap.classList.add('solved');
  });

  $$('.match').forEach((act) => {
    $$('.chip', act).forEach((c) => { c.classList.remove('picked'); c.classList.add('done'); });
    $('.tally .done', act).textContent = $$('.col-a .chip', act).length;
    act.classList.add('all-done');
  });

  $$('.card').forEach((c) => { c.classList.add('open'); c.setAttribute('aria-expanded', 'true'); });
  $$('.fix').forEach((f) => { f.classList.add('open'); f.setAttribute('aria-expanded', 'true'); });
  $$('.starters').forEach((s) => { s.hidden = false; });
  $$('.reveal').forEach((r) => r.setAttribute('aria-expanded', 'true'));
  setPanel(false);
});

// A reload is the reset: nothing is stored except the device settings.
$('#reset').addEventListener('click', () => location.reload());

// ---------------------------------------------------------------- chrome

const links = new Map($$('.toc a').map((a) => [a.dataset.target, a]));

/* A contents link opens its session before the browser jumps to it — otherwise
   the anchor lands on a folded heading and nothing appears to happen. The
   hashchange handler below would do it too, but only if the hash actually
   changes: clicking the link for the session already showing does not fire
   one. */
$('#nav').addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  openSession(a.dataset.target);
  closeNav();
});

/* The cover map's panels are links into the same sessions and need the same
   treatment, for the same reason. It is absent when there are too few
   sessions to draw, so this is guarded. */
$('.map')?.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (a) openSession(a.getAttribute('href').slice(1));
});

/* The bar marks the session being read by measuring rather than with an
   IntersectionObserver: an open session is several screens tall while the
   folded ones are a heading each, so at any moment several straddle a sensible
   trigger band and the observer reports whichever fired last. */
const marks = [$('#top'), ...$$('.session')];

/* Keep the marked link inside the contents list WITHOUT ever scrolling the
   page. The obvious `a.scrollIntoView({ block: 'nearest' })` is the bug that
   made this notebook drift on its own:

   - `markHere` runs on every scroll event, so it fired dozens of times a
     second while the reader was scrolling;
   - `scrollIntoView` scrolls the nearest scrollable ANCESTOR, and when the
     contents list is not itself scrolling — a short list, or a narrow screen
     where it is a closed panel — that ancestor is the document; and
   - it inherited `scroll-behavior: smooth`, so each call started an animation
     that outlived the gesture and fought the next one.

   Scrolling the container by hand fixes all three at once: it moves only
   `.toc`, only when the link is actually outside its box, and instantly. */
function keepLinkVisible(a) {
  const box = a.closest('#nav');
  if (!box || box.scrollHeight <= box.clientHeight) return;
  /* Rect deltas rather than offsetTop: the link's offsetParent is whichever
     ancestor happens to be positioned, which is not reliably the scroll box,
     and subtracting the wrong origin silently pins scrollTop at 0. */
  const link = a.getBoundingClientRect();
  const view = box.getBoundingClientRect();
  if (link.top < view.top) box.scrollTop -= view.top - link.top;
  else if (link.bottom > view.bottom) box.scrollTop += link.bottom - view.bottom;
}

const progress = $('#progress');
const toTop = $('#toTop');
const navToggleLabel = $('#navToggleLabel');

function markHere() {
  const line = 90;
  let here = marks[0];
  marks.forEach((m) => { if (m.getBoundingClientRect().top <= line) here = m; });
  links.forEach((a) => a.classList.remove('here'));
  const a = links.get(here.id);
  if (a) { a.classList.add('here'); keepLinkVisible(a); }

  /* How far down the page. The contents list answers this on a wide screen,
     but it only knows about sessions, and one open session is ten screens. */
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max > 0 ? Math.min(100, (scrollY / max) * 100) : 0}%`;

  /* The ☰ is mobile-only, so it can carry the session number for free: where
     you are, right next to the way to move. */
  const n = here.classList && here.classList.contains('session')
    ? $('.session-btn .n', here)
    : null;
  navToggleLabel.textContent = n ? n.textContent.trim() : 'Sessions 課程';

  toTop.hidden = scrollY < innerHeight * 1.5;
}

markHere();
addEventListener('scroll', markHere, { passive: true });
addEventListener('resize', markHere, { passive: true });

toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

/* Folding a session changes the page's height, so the position bar has to be
   redrawn — otherwise it reads as 70% of a page that is now half as long. */
$('#doc').addEventListener('click', (e) => {
  if (e.target.closest('.session-btn')) requestAnimationFrame(markHere);
});

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
  const id = decodeURIComponent(location.hash.slice(1));
  const section = openSession(id);
  if (section) section.scrollIntoView();
});

/* Print is the handout, and a handout with folded sessions is blank paper. */
addEventListener('beforeprint', () => $$('.session').forEach((s) => setFold(s, true)));
