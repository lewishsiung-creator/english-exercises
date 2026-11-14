/* Renders GP (content.js) and wires up the page.

   The two-mode shape of /grammar-notes/ and /fab-english/, for adults:

   1. **Two modes, one page.** 自學 is the learner alone: the Chinese is on
      screen and the questions they have finished are kept on their own
      device. 教學 is the lesson: the Chinese waits behind a 中 chip, every
      question has a 看答案 button, and nothing is recorded.
   2. **Students never see the switch.** The plain URL carries no mode. Opening
      the page once with `#teach` turns THIS device into the teacher's and is
      remembered; the hash is then stripped so it cannot be copied to a student
      by accident. 設定 →「在這台裝置隱藏」undoes it.
   3. **Chinese that is explanation is never hidden.** Rules, notes, hints and
      reasons are the teacher's voice. What 教學 hides is a sentence's 中譯.

   HOW A QUESTION BEHAVES — the same for all five kinds

     a wrong try   the thing pressed wobbles, the question's hint opens, and
                   the question STAYS OPEN. Nothing is locked, nothing counted
                   against anyone.
     看答案         in 自學 it appears after two wrong tries; in 教學 it is
                   always there, because the teacher decides when.
     done          the correct sentence gets its 🔊 and its reason. A question
                   that took more than one try, or was shown, is listed under
                   the set as worth another look. That list is the only
                   feedback there is: no score, no timer.

   **A wrong sentence gets no 🔊 and no 中譯.** The fix exercise shows
   incorrect English on purpose; the speaker and the translation belong to the
   correction.

   Everything kept in localStorage is under `gp.`: the mode, whether this is a
   teacher device, the voice, and — 自學 only — the finished questions. */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// ------------------------------------------------------------------- store

const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem('gp.' + k);
      return v == null ? d : JSON.parse(v);
    } catch (e) { return d; }
  },
  set(k, v) {
    try { localStorage.setItem('gp.' + k, JSON.stringify(v)); } catch (e) { /* private mode */ }
  },
};

let TEACHER = store.get('teacher', false);

function claimTeacher() {
  if (location.hash !== '#teach') return false;
  TEACHER = true;
  store.set('teacher', true);
  store.set('mode', 'teach');
  history.replaceState(null, '', location.pathname + location.search);
  return true;
}
claimTeacher();

addEventListener('hashchange', () => {
  if (claimTeacher()) {
    showTeacherTools(true);
    setMode('teach', true);
  }
});

const S = { mode: TEACHER ? store.get('mode', 'teach') : 'self' };

// ----------------------------------------------------------- answer matching

/* What a typed answer is compared on. Capitals, the final full stop, curly or
   straight apostrophes and the common short forms are not what any of these
   exercises is testing, so none of them can make a right answer wrong.
   `'s` is left alone — it is "is" as often as "has" — so a short form with
   `'s` has to be listed in the item's own `answers`. */
function norm(s) {
  return String(s).toLowerCase()
    .replace(/[‘’ʼ`]/g, "'")
    .replace(/\bcan't\b/g, 'cannot').replace(/\bwon't\b/g, 'will not')
    .replace(/n't\b/g, ' not')
    .replace(/'ve\b/g, ' have').replace(/'m\b/g, ' am')
    .replace(/'re\b/g, ' are').replace(/'ll\b/g, ' will')
    .replace(/[.,!?;:"“”—–-]/g, ' ')
    .replace(/\s+/g, ' ').trim();
}

/* Returns the listed answer the learner's text matches, so the page can show
   it back in its proper spelling. The lighter comparison runs first: someone
   who typed "hasn't arrived" should see "hasn't arrived", not the long form. */
function matchAnswer(val, answers) {
  const light = (s) => String(s).toLowerCase().replace(/[‘’ʼ`]/g, "'")
    .replace(/[.!?]+$/, '').replace(/\s+/g, ' ').trim();
  return answers.find((a) => light(a) === light(val))
      || answers.find((a) => norm(a) === norm(val)) || null;
}

/* A fixed shuffle: the same tiles land in the same order on every visit, so a
   page restored from the learner's device looks the way they left it. Never
   returns the tiles already in the right order. */
function shuffled(n, seed) {
  let h = 2166136261;
  for (const c of seed) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
  const a = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) + i;
    const j = Math.abs(h) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  if (n > 1 && a.every((v, i) => v === i)) a.push(a.shift());
  return a;
}

// ------------------------------------------------------------------- pieces

function say(sentence) {
  return `<button class="say" type="button" data-say="${text(sentence)}" title="唸一次" aria-label="唸一次">🔊</button>`;
}

const zhChip = '<button class="zh-chip" type="button" title="顯示中文">中</button>';

/* An English line with its Chinese behind it. The 中 chip is the affordance in
   教學; in 自學 the Chinese is simply already there. */
function pair(en, zh, cls = '', speak = true) {
  if (!zh) return `<div class="pair ${cls}"><p class="en"><span class="m-text">${text(en)}</span>${speak ? say(en) : ''}</p></div>`;
  return `
    <div class="pair ${cls}" data-zh>
      <p class="en"><span class="m-text">${text(en)}</span>${speak ? say(en) : ''}${zhChip}</p>
      <p class="zh">${text(zh)}</p>
    </div>`;
}

function label(b) {
  if (!b.zh) return '';
  return `<h4 class="label"><span class="l-zh">${text(b.zh)}</span>
    <span class="l-en">${text(b.en)}</span></h4>`;
}

function hint(b) {
  if (!b.hintZh) return '';
  return `<p class="hint">${text(b.hintZh)}<span class="hint-en">${text(b.hintEn)}</span></p>`;
}

function why(w) {
  if (!w) return '';
  return `<p class="why"><span class="w-zh">${text(w.zh)}</span>
    ${w.en ? `<span class="w-en">${text(w.en)}</span>` : ''}</p>`;
}

/* The hint a wrong try opens. It points at the clue and never at the answer. */
function nudge(it) {
  const h = it.hint || { zh: '還不是這個，再看一次。', en: 'Not quite — look again.' };
  return `<p class="nudge" hidden><span class="nudge-k" aria-hidden="true">提示</span>
    <span class="w-zh">${text(h.zh)}</span><span class="w-en">${text(h.en)}</span></p>`;
}

const checkBtn = '<button class="q-btn check" type="button">檢查 <em>Check</em></button>';

function foot(extra = '') {
  return `<div class="q-foot">${extra}<button class="q-btn show-ans" type="button">看答案 <em>Show answer</em></button></div>`;
}

const qn = (n) => `<span class="q-n">${n + 1}</span>`;

/* Under a set made of blanks: check everything typed so far, and — 教學 only —
   open every answer at once. */
const TOOLS = `
  <div class="act-tools">
    <button class="q-btn check-all" type="button">檢查 <em>Check</em></button>
    <button class="q-btn show-all" type="button">全部答案 <em>Show all</em></button>
  </div>`;

function activity(b, kind, questions, top = '', tools = '') {
  return `
    <div class="activity" data-act="${kind}">
      ${label(b)}
      ${hint(b)}
      ${top}
      ${questions.join('')}
      ${tools}
      <div class="act-end">
        <p class="tally">完成 <span class="done">0</span> / <span class="total"></span></p>
        <p class="again-line" hidden></p>
        <button class="q-btn redo" type="button" hidden>這一組再練一次 <em>Practise this set again</em></button>
      </div>
    </div>`;
}

// ------------------------------------------------------- blanks in a sentence

/* A sentence in the content may carry its own questions:

     {{went}}  {{didn’t go|did not go}}   a typed blank and what it accepts
     {{went}} (go)                        brackets after a blank are its cue
     [[was waiting*|waited]]              choose one; the star is the answer
     **go**                               bold

   Each blank and each choice is a question in its own right — it wobbles,
   stays open, is remembered and is listed for another look exactly as a card
   is — it just happens to sit inside a line of text. */
const TOKEN = /(\{\{.+?\}\}(?:\s*\([^)]*\))?|\[\[.+?\]\]|\*\*.+?\*\*)/;

/* Three widths only, so the size of a box says roughly "a word", "a phrase"
   or "a clause" and never spells out the answer's length. */
function blankSize(answers) {
  const n = Math.max(...answers.map((a) => a.length));
  return n <= 7 ? 'b-s' : n <= 15 ? 'b-m' : n <= 26 ? 'b-l' : 'b-xl';
}

/* `ctx.label()` names the question in the 值得再看一次 list — an item number,
   a blank number, a verb. `ctx.show` prints it beside the blank. */
function inline(str, ctx) {
  return String(str).split(TOKEN).map((part) => {
    if (part.startsWith('{{')) {
      const m = part.match(/^\{\{(.+?)\}\}(\s*\([^)]*\))?$/);
      const answers = m[1].split('|');
      const lab = ctx.label();
      return `<span class="q bq" data-answers="${text(JSON.stringify(answers))}"><span
        class="q-n"${ctx.show ? '' : ' hidden'}>${text(lab)}</span><input
        class="b-in ${blankSize(answers)}" type="text" autocomplete="off" autocapitalize="off"
        autocorrect="off" spellcheck="false" aria-label="空格 ${text(lab)}"><button
        class="b-show" type="button" tabindex="-1" title="看答案" aria-label="看答案">?</button></span>${
        m[2] ? `<span class="cue">${text(m[2])}</span>` : ''}`;
    }
    if (part.startsWith('[[')) {
      const opts = part.slice(2, -2).split('|');
      const right = opts.findIndex((o) => o.endsWith('*'));
      if (right < 0) throw new Error(`grammar-practice: a choice needs a starred answer: ${part}`);
      /* A choice is numbered on the same terms as a typed blank: shown inside
         a cloze, where the numbering is the whole point of reading a story
         with thirteen questions in it, and off inside a table, where the row
         already names itself. */
      return `<span class="q pq" data-answer="${right}"><span class="q-n"${ctx.show ? '' : ' hidden'}>${text(ctx.label())}</span>${
        opts.map((o, i) => `${i ? '<span class="p-sep">/</span>' : ''}<button class="p-opt" type="button"
          data-i="${i}">${text(o.replace(/\*$/, ''))}</button>`).join('')}</span>`;
    }
    if (part.startsWith('**')) return `<b>${text(part.slice(2, -2))}</b>`;
    return text(part);
  }).join('');
}

/* The same sentence with every answer in place — what the 🔊 says once the
   line is finished. */
function modelOf(str) {
  return String(str)
    .replace(/\{\{(.+?)\}\}(\s*\([^)]*\))?/g, (m, a) => a.split('|')[0])
    .replace(/\[\[(.+?)\]\]/g, (m, a) => (a.split('|').find((o) => o.endsWith('*')) || '*').slice(0, -1))
    .replace(/\*\*(.+?)\*\*/g, '$1');
}

/* One line or one card of text with questions in it. It gets its speaker and
   its reason when the last of its questions is done. */
function itemHtml(it, n, ctx) {
  const lines = [].concat(it.text).map((l) => {
    const m = String(l).match(/^([AB]):\s*(.*)$/);
    return m ? { who: m[1], text: m[2] } : { who: it.who, text: l };
  });
  const spoken = lines.map((l) => modelOf(l.text)).join(' ');
  return `
    <div class="item">
      ${it.pool ? `<p class="pool">${it.pool.map((w) => `<span>${text(w)}</span>`).join('')}</p>` : ''}
      ${it.from ? `<p class="from">${text(it.from)}</p>` : ''}
      <div class="pair item-pair"${it.zh ? ' data-zh' : ''}>
        <p class="en item-line">${n != null ? `<span class="it-n">${n}</span>` : ''}
          <span class="q-text">${lines.map((l) => `<span class="ln">${
            l.who ? `<span class="who">${text(l.who)}</span>` : ''}${inline(l.text, ctx)}</span>`).join('')}</span>
          ${say(spoken)}${it.zh ? zhChip : ''}</p>
        ${it.zh ? `<p class="zh">${text(it.zh)}</p>` : ''}
      </div>
      ${why(it.why)}
    </div>`;
}

function pool(words) {
  return words ? `<p class="pool pool-block">${words.map((w) => `<span>${text(w)}</span>`).join('')}</p>` : '';
}

// ---------------------------------------------------------------- blocks

const BLOCKS = {
  lead: (b) => `
    <div class="lead">
      <p class="lead-zh">${text(b.zh)}</p>
      <p class="lead-en">${text(b.en)}</p>
    </div>`,

  /* A stated rule. Chinese leads and neither mode hides it. */
  rule: (b) => `
    <div class="ruleline">
      <p class="r-zh">${text(b.zh)}</p>
      <p class="r-en">${text(b.en)}</p>
    </div>`,

  /* Two tenses side by side, each with the time words that call for it. The
     words are English and the headings are structure, so nothing here hides
     except the example's 中譯. */
  cols: (b) => `
    <div class="cols">
      ${label(b)}
      <div class="cols-grid">
        ${b.cols.map((c) => `
          <div class="col">
            <p class="col-head"><span class="c-zh">${text(c.zh)}</span>
              <code>${text(c.form)}</code></p>
            ${c.note ? `<p class="col-note">${text(c.note)}</p>` : ''}
            ${c.words ? `<p class="col-words">${c.words.map((w) => `<span>${text(w)}</span>`).join('')}</p>` : ''}
            ${pair(c.eg, c.egZh, `col-eg${c.words ? '' : ' col-eg-only'}`)}
          </div>`).join('')}
      </div>
    </div>`,

  /* Model sentences, right beside wrong. The wrong one carries no 中譯 and no
     speaker. */
  pairs: (b) => `
    <div class="pairs">
      ${label(b)}
      <ul>
        ${b.items.map((i) => i.ok
          ? `<li class="good">
               <span class="tick" aria-hidden="true">✓</span>
               ${pair(i.text, i.zh, 'good-pair')}
             </li>`
          : `<li class="bad">
               <span class="tick" aria-hidden="true">✗</span>
               <p class="bad-en">${text(i.text)}</p>
             </li>`).join('')}
      </ul>
    </div>`,

  /* The teacher's voice. Never hidden. `good` sentences take a speaker; `bad`
     ones never do. `more` is the one place a note may point somewhere else on
     the site — a point this page recaps in three lines and another page
     teaches in full. It opens in the same tab: it is a detour, not an exit. */
  note: (b) => `
    <aside class="note">
      <h4><span class="n-zh">${text(b.zh)}</span><span class="n-en">${text(b.en)}</span></h4>
      <p class="note-zh">${text(b.bodyZh)}</p>
      <p class="note-en">${text(b.bodyEn)}</p>
      ${(b.good || []).length || (b.bad || []).length ? `
        <div class="note-egs">
          ${(b.good || []).map((g) => `
            <p class="ex ex-good"><span aria-hidden="true">✓</span> ${text(g)}${say(g)}</p>`).join('')}
          ${(b.bad || []).map((x) => `
            <p class="ex ex-bad"><span aria-hidden="true">✗</span> ${text(x)}</p>`).join('')}
        </div>` : ''}
      ${b.more ? `
        <p class="note-more"><a href="${text(b.more.href)}">${text(b.more.zh)}
          <span class="more-en">${text(b.more.en)}</span>
          <span class="more-arrow" aria-hidden="true">→</span></a></p>` : ''}
    </aside>`,

  /* Choose the form. The sentence is its own model: once the blank is filled
     the line gets its speaker. */
  mcq: (b) => activity(b, 'mcq', b.items.map((it, n) => {
    const [before, rest = ''] = it.text.split('___');
    const model = before + it.options[it.answer] + rest;
    return `
      <div class="q mq" data-answer="${it.answer}">
        <div class="pair q-pair"${it.zh ? ' data-zh' : ''}>
          <p class="en q-line">${qn(n)}
            <span class="q-text">${text(before)}<span class="slot"></span>${text(rest)}</span>
            ${say(model)}${it.zh ? zhChip : ''}</p>
          ${it.zh ? `<p class="zh">${text(it.zh)}</p>` : ''}
        </div>
        <div class="choice">
          ${it.options.map((o, i) => `
            <button class="opt" type="button" data-i="${i}">${text(o)}</button>`).join('')}
        </div>
        ${nudge(it)}
        <div class="after">${why(it.why)}</div>
        ${foot()}
      </div>`;
  })),

  /* Match a clause to its other half. The options are printed once, lettered,
     and each line is answered with a letter — so the whole list stays in view
     while it is being read, which a drop-down would hide. */
  match: (b) => activity(b, 'match', b.items.map((it, n) => {
    const [before, rest = ''] = it.text.split('___');
    const model = before + b.options[it.answer] + rest;
    return `
      <div class="q mq mtq" data-answer="${it.answer}">
        <div class="pair q-pair"${it.zh ? ' data-zh' : ''}>
          <p class="en q-line">${qn(n)}
            <span class="q-text">${text(before)}<span class="slot"></span>${text(rest)}</span>
            ${say(model)}${it.zh ? zhChip : ''}</p>
          ${it.zh ? `<p class="zh">${text(it.zh)}</p>` : ''}
        </div>
        <div class="choice letters">
          ${b.options.map((o, i) => `
            <button class="opt" type="button" data-i="${i}" data-fill="${text(o)}"
              aria-label="${text(o)}">${String.fromCharCode(97 + i)}</button>`).join('')}
        </div>
        ${nudge(it)}
        <div class="after">${why(it.why)}</div>
        ${foot()}
      </div>`;
  }), `
      <ol class="m-opts">
        ${b.options.map((o, i) => `<li><span class="m-l">${String.fromCharCode(97 + i)}</span>${text(o)}</li>`).join('')}
      </ol>`),

  /* Cards with any number of blanks or choices in them: a question and its
     short answer, a wrong fact and its correction, two halves of a sentence. */
  blanks: (b) => activity(b, 'blanks',
    b.items.map((it, i) => itemHtml(it, i + 1, { label: () => String(i + 1), show: false })),
    pool(b.pool), TOOLS),

  /* A dialogue or a story on one card, its blanks numbered straight through
     so a teacher can say "number seven". */
  cloze: (b) => {
    let k = 0;
    const ctx = { label: () => String(++k), show: true };
    return activity(b, 'cloze',
      [`<div class="cz">${b.lines.map((it) => itemHtml(it, null, ctx)).join('')}</div>`],
      pool(b.pool), TOOLS);
  },

  /* A table whose cells are sentences. With blanks in it, it is an exercise;
     with none, it is a chart to read from.

     `zhCol` names a column that is Chinese in its own right — a meaning — and
     so is an answer rather than a label. It goes behind a 中 chip like any
     other answer, which is what lets a teacher point at a word list and ask
     what the word means. Without it a vocabulary chart hands over every gloss
     the moment it is on screen, and 教學 mode has nothing left to ask. Named
     after the same field in /grammar/, which solved this first. A column of
     explanation — a 判斷關鍵, a reason — is NOT one of these and stays up. */
  table: (b) => {
    const rows = b.rows.map((r, i) => {
      const cells = r.cells || r;
      const lab = r.label || String(i + 1);
      const ctx = { label: () => lab, show: false };
      return `<tr${r.group ? ' class="g-start"' : ''}>${b.numbered ? `<td class="t-n">${i + 1}</td>` : ''}${
        cells.map((c, col) => col === b.zhCol
          ? `<td class="td-zh"><div class="pair" data-zh><p class="en">${zhChip}</p><p class="zh">${text(c)}</p></div></td>`
          : `<td>${inline(c, ctx)}</td>`).join('')}</tr>`;
    });
    const html = `
      <div class="t-wrap"><table class="gtable">
        <thead><tr>${b.numbered ? '<th></th>' : ''}${b.head.map((h) => `<th>${text(h)}</th>`).join('')}</tr></thead>
        <tbody>${rows.join('')}</tbody>
      </table></div>`;
    const live = b.rows.some((r) => (r.cells || r).some((c) => /\{\{|\[\[/.test(c)));
    return live
      ? activity(b, 'table', [html], '', TOOLS)
      : `<div class="chart">${label(b)}${hint(b)}${html}</div>`;
  },

  /* A typed blank, with an optional word box. */
  gap: (b) => activity(b, 'gap', b.items.map((it, n) => {
    const m = it.text.match(/^(.*?)___(\s*\([^)]*\))?(.*)$/);
    if (!m) throw new Error(`grammar-practice: a gap item needs ___ : "${it.text}"`);
    const [, before, cue = '', rest] = m;
    return `
      <div class="q gq" data-answers="${text(JSON.stringify(it.answers))}"
           data-before="${text(before)}" data-rest="${text(rest)}">
        <div class="pair q-pair"${it.zh ? ' data-zh' : ''}>
          <p class="en q-line">${qn(n)}
            <span class="q-text">${text(before)}<input class="gap-in" type="text"
              autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
              aria-label="第 ${n + 1} 題的答案">${cue ? `<span class="cue">${text(cue)}</span>` : ''}${text(rest)}</span>
            ${say('')}${it.zh ? zhChip : ''}</p>
          ${it.zh ? `<p class="zh">${text(it.zh)}</p>` : ''}
        </div>
        ${nudge(it)}
        <div class="after">${why(it.why)}</div>
        ${foot(checkBtn)}
      </div>`;
  }), b.bank ? `
      <div class="bank" role="group" aria-label="字庫 Word box">
        ${b.bank.map((w) => `<button class="bank-w" type="button">${text(w)}</button>`).join('')}
      </div>` : ''),

  /* Find and fix. The sentence sits in the box to be edited. Before it is
     answered a wrong sentence and a right one look exactly alike — neither has
     a speaker or a 中譯 — so there is nothing to read the answer off. */
  fix: (b) => activity(b, 'fix', b.items.map((it, n) => {
    const isOk = it.ok != null;
    const shown = isOk ? it.ok : it.bad;
    const answers = isOk ? [it.ok] : it.answers;
    return `
      <div class="q fq" data-ok="${isOk ? '1' : '0'}" data-answers="${text(JSON.stringify(answers))}">
        <p class="q-line">${qn(n)}<span class="q-text f-shown">${text(shown)}</span></p>
        <textarea class="line-in" rows="1" data-init="${text(shown)}"
          autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
          aria-label="第 ${n + 1} 題：把句子改對">${text(shown)}</textarea>
        ${nudge(it)}
        <div class="after">
          <div class="fixline">
            <span class="fix-k">${isOk ? '這句沒有錯' : '改成'}</span>
            ${pair(answers[0], it.zh, 'fix-pair')}
          </div>
          ${why(it.why)}
        </div>
        ${foot(`${checkBtn}<button class="q-btn f-ok" type="button">這句沒有錯 <em>Already correct</em></button>`)}
      </div>`;
  })),

  /* Build the sentence from tiles. The Chinese is the task itself here, so it
     is on screen in both modes. */
  order: (b) => activity(b, 'order', b.items.map((it, n) => {
    const end = it.end || '.';
    const model = [it.lead, ...it.chunks].filter(Boolean).join(' ') + end;
    const accept = [model, ...(it.also || [])];
    const pos = shuffled(it.chunks.length, model);
    return `
      <div class="q oq" data-lead="${text(it.lead || '')}" data-end="${text(end)}"
           data-accept="${text(JSON.stringify(accept))}">
        <p class="q-line">${qn(n)}<span class="q-text o-zh">${text(it.zh)}</span></p>
        <div class="o-line">
          ${it.lead ? `<span class="o-lead">${text(it.lead)}</span>` : ''}
          <span class="o-placed"></span><span class="o-end">${text(end)}</span>
          ${say(model)}
        </div>
        <div class="o-pool">
          ${pos.map((i, p) => `
            <button class="tile" type="button" data-i="${i}" data-pos="${p}">${text(it.chunks[i])}</button>`).join('')}
        </div>
        ${nudge(it)}
        <div class="after">${why(it.why)}</div>
        ${foot()}
      </div>`;
  })),

  /* Say it another way. The source sentence is correct English, so it may be
     heard; the opening of the answer is typed for them. */
  rewrite: (b) => activity(b, 'rewrite', b.items.map((it, n) => `
      <div class="q rq" data-answers="${text(JSON.stringify(it.answers))}">
        <p class="q-line">${qn(n)}<span class="q-text">${text(it.from)}</span>${say(it.from)}</p>
        <p class="cue-line">${text(it.cueZh)}<em>${text(it.cueEn)}</em></p>
        <textarea class="line-in" rows="1" data-init="${text(it.start || '')}"
          autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
          aria-label="第 ${n + 1} 題：改寫後的句子">${text(it.start || '')}</textarea>
        ${nudge(it)}
        <div class="after">
          <div class="fixline">
            ${pair(it.answers[0], it.zh, 'fix-pair')}
          </div>
          ${why(it.why)}
        </div>
        ${foot(checkBtn)}
      </div>`)),
};

// ---------------------------------------------------------------- build

function buildPart(part, pointId) {
  return `
    <section class="part" id="${text(part.id)}">
      <h3 class="part-head"><span class="p-zh">${text(part.zh)}</span>
        <span class="p-en">${text(part.en)}</span></h3>
      ${part.blocks.map((b) => {
        const fn = BLOCKS[b.t];
        if (!fn) throw new Error(`grammar-practice: no renderer for block "${b.t}" in ${pointId}/${part.id}`);
        return fn(b);
      }).join('')}
    </section>`;
}

function buildPoint(p, n) {
  return `
    <article class="point" id="${text(p.id)}">
      <header class="point-head">
        <p class="eyebrow"><span class="p-n">${String(n).padStart(2, '0')}</span>
          <span class="p-icon" aria-hidden="true">${text(p.icon)}</span>
          ${p.group ? `<span class="p-group">${text(p.group.zh)} · ${text(p.group.en)}</span>` : ''}</p>
        <h2><span class="h-zh">${text(p.zh)}</span><span class="h-en">${text(p.en)}</span></h2>
        <p class="point-sub">${text(p.sub)}</p>
        <div class="lead point-lead">
          <p class="lead-zh">${text(p.lead.zh)}</p>
          <p class="lead-en">${text(p.lead.en)}</p>
        </div>
      </header>
      ${p.parts.map((pt) => buildPart(pt, p.id)).join('')}
    </article>`;
}

function buildCover() {
  return `
    <header class="cover" id="top">
      <p class="eyebrow">${text(GP.kicker)}</p>
      <h1><span class="h-zh">${text(GP.titleZh)}</span><span class="h-en">${text(GP.title)}</span></h1>
      <div class="lead cover-intro">
        <p class="lead-zh">${text(GP.intro.zh)}</p>
        <p class="lead-en">${text(GP.intro.en)}</p>
      </div>
    </header>`;
}

function buildSource() {
  return `
    <footer class="source">
      <p class="src-zh">${text(GP.sourceNote.zh)}</p>
      <p class="src-en">${text(GP.sourceNote.en)}</p>
    </footer>`;
}

/* The contents list. A point is a heading and its parts are the links. */
function buildNav() {
  return `
    <nav class="toc" aria-label="目錄">
      <p class="toc-head">目錄 <em>Contents</em></p>
      ${GP.points.map((p, i) => `
        ${p.group && (!i || (GP.points[i - 1].group || {}).en !== p.group.en)
          ? `<p class="toc-group">${text(p.group.zh)} <em>${text(p.group.en)}</em></p>` : ''}
        <p class="toc-point"><span class="n">${String(i + 1).padStart(2, '0')}</span>
          <span aria-hidden="true">${text(p.icon)}</span> ${text(p.zh)}</p>
        <ul>
          ${p.parts.map((pt) => `
            <li><a href="#${text(pt.id)}" data-target="${text(pt.id)}">
              <span class="t-zh">${text(pt.zh)}</span>
              <span class="t-en">${text(pt.en)}</span></a></li>`).join('')}
        </ul>`).join('')}
    </nav>`;
}

document.title = `${GP.titleZh} — ${GP.title}`;

const doc = $('#doc');
doc.appendChild(el(buildCover()));
GP.points.forEach((p, i) => doc.appendChild(el(buildPoint(p, i + 1))));
doc.appendChild(el(buildSource()));

/* Every question gets a stable id from where it sits, so a finished question
   kept on a learner's device still finds itself after the page is edited
   around it.

   Every exercise — one set of questions with its own 完成 x / y — gets a name
   the same way: `ps-questions.1` is the first set in the part `ps-questions`.
   That name is what a homework link carries, so a part's id, and the order of
   the sets inside a part, are now things a link out in the world depends on. */
const EX = [];
GP.points.forEach((p, pi) => {
  const point = document.getElementById(p.id);
  $$('.part', point).forEach((part) => {
    const acts = $$('.activity', part);
    part.classList.toggle('no-ex', !acts.length);
    acts.forEach((act, a) => {
      $$('.q', act).forEach((q, i) => { q.dataset.qid = `${part.id}-${a}-${i}`; });
      act.id = `ex-${part.id}-${a + 1}`;
      const sub = (cls) => { const s = $(`.label ${cls}`, act); return s ? s.textContent : ''; };
      EX.push({
        id: `${part.id}.${a + 1}`, act, part, point, p, pn: pi + 1,
        zh: $('.part-head .p-zh', part).textContent,
        en: $('.part-head .p-en', part).textContent,
        subZh: sub('.l-zh'), subEn: sub('.l-en'),
        n: $$('.q', act).length,
      });
    });
  });
});

// ------------------------------------------------------------- the homework

/* LEWIS 指定作業 — a link that opens the page on a chosen few exercises.

     ?hw=past-simple_pg-two_pp-fill.2&t=第 3 週作業

   `hw` is a list joined by `_`. Each entry is a point's id (every exercise in
   it), a part's id (every exercise in it) or `part.N` (one exercise). `t` is
   an optional title. The link is made on a teacher device, in the 作業 sheet;
   a student only ever opens one.

   Opened with such a link the page is the same page with the rest put away:
   the cover becomes the list of what was set, with a count beside each, and
   the contents list becomes that list too. The rules of a point are one tap
   away rather than gone — homework is where they get looked up.

   Nothing is sent anywhere. What a student has finished is kept where 自學
   always keeps it, on their own device, so the same link opens where they
   left off, and the ticks on the cover are what they can show their teacher. */

function hwResolve(tokens) {
  const want = new Set();
  tokens.forEach((t) => EX.forEach((x) => {
    if (t === x.id || t === x.part.id || t === x.p.id) want.add(x);
  }));
  return EX.filter((x) => want.has(x));
}

function groupBy(list, key) {
  const m = new Map();
  list.forEach((x) => { if (!m.has(x[key])) m.set(x[key], []); m.get(x[key]).push(x); });
  return m;
}

/* The shortest way to write a selection: a whole point is one word, a whole
   part is one word, and only a part taken in pieces is spelled out. */
function hwTokens(picked) {
  const out = [];
  groupBy(EX, 'p').forEach((inPoint, p) => {
    if (inPoint.every((x) => picked.has(x.id))) { out.push(p.id); return; }
    groupBy(inPoint, 'part').forEach((inPart, part) => {
      if (inPart.every((x) => picked.has(x.id))) out.push(part.id);
      else inPart.forEach((x) => { if (picked.has(x.id)) out.push(x.id); });
    });
  });
  return out;
}

function hwUrl(picked, title) {
  const t = String(title || '').trim();
  return `${location.origin}${location.pathname}?hw=${hwTokens(picked).join('_')}${
    t ? `&t=${encodeURIComponent(t)}` : ''}`;
}

const HW = (() => {
  const q = new URLSearchParams(location.search);
  const list = hwResolve((q.get('hw') || '').split('_').filter(Boolean));
  return list.length ? { list, title: (q.get('t') || '').trim().slice(0, 40) } : null;
})();

const exName = (x) => `
  <span class="t-zh">${text(x.zh)}</span>
  <span class="t-en">${text([x.subZh, x.subEn].filter(Boolean).join(' · ') || x.en)}</span>`;

function buildHwCover() {
  const total = HW.list.reduce((n, x) => n + x.n, 0);
  return `
    <header class="cover hw-cover" id="top">
      <p class="eyebrow">Lewis 指定作業 · Homework from Lewis</p>
      <h1><span class="h-zh">${text(HW.title || '這次的作業')}</span><span class="h-en">${text(GP.title)}</span></h1>
      <div class="lead cover-intro">
        <p class="lead-zh">Lewis 幫你挑了 ${HW.list.length} 組練習，一共 ${total} 題。不用一次做完：做過的題目會留在這台裝置上，下次用同一個連結打開，就從上次停下來的地方繼續。</p>
        <p class="lead-en">Lewis has picked ${HW.list.length} ${HW.list.length === 1 ? 'exercise' : 'exercises'} for you, ${total} questions in all. No need to finish in one sitting: what you have done stays on this device, and the same link opens where you left off.</p>
      </div>
      <ol class="hw-list">
        ${HW.list.map((x) => `
          <li data-ex="${text(x.id)}"><a href="#${text(x.act.id)}">
            <span class="hw-tick" aria-hidden="true"></span>
            <span class="hw-name">${exName(x)}</span>
            <span class="hw-count"></span></a></li>`).join('')}
      </ol>
      <p class="hw-total"></p>
      <p class="hw-all"><a href="./">看全部練習 <em>See every exercise</em></a></p>
    </header>`;
}

function buildHwNav() {
  return `
    <nav class="toc" aria-label="作業目錄">
      <p class="toc-head">指定作業 <em>Homework</em></p>
      ${[...groupBy(HW.list, 'p')].map(([p, list]) => `
        <p class="toc-point"><span class="n">${String(list[0].pn).padStart(2, '0')}</span>
          <span aria-hidden="true">${text(p.icon)}</span> ${text(p.zh)}</p>
        <ul>
          ${list.map((x) => `
            <li><a href="#${text(x.act.id)}" data-target="${text(x.act.id)}">${exName(x)}</a></li>`).join('')}
        </ul>`).join('')}
      <p class="toc-all"><a href="./">看全部練習 <em>See every exercise</em></a></p>
    </nav>`;
}

if (HW) {
  document.body.classList.add('hw');
  document.title = `${HW.title || 'Lewis 指定作業'} — ${GP.titleZh}`;
  $('.bar-title').innerHTML = '指定作業 <span>Homework</span>';
  HW.list.forEach((x) => [x.act, x.part, x.point].forEach((n) => n.classList.add('hw-on')));
  $('.cover').replaceWith(el(buildHwCover()));

  /* The rules, one tap away. Only a point that has a part with no exercise
     in it — its 重點整理 — gets the button. */
  $$('.point.hw-on').forEach((point) => {
    if (!$('.part.no-ex', point)) return;
    $('.point-head', point).appendChild(el(
      `<button class="q-btn rules-btn" type="button" aria-expanded="false">先看重點整理 <em>Review the rules</em></button>`));
  });
}

$('#nav').appendChild(el(HW ? buildHwNav() : buildNav()));

/* The cover of a homework link: a count beside each exercise, a tick when it
   is finished, and one line for the lot. Counted off the page rather than the
   store, so it is right in 教學 too, where nothing is stored. */
function paintHw() {
  if (!HW) return;
  let done = 0, total = 0;
  HW.list.forEach((x) => {
    const qs = $$('.q', x.act);
    const d = qs.filter((q) => q.classList.contains('answered')).length;
    done += d; total += qs.length;
    const li = $(`.hw-list li[data-ex="${x.id}"]`);
    $('.hw-count', li).textContent = `${d} / ${qs.length}`;
    li.classList.toggle('done', d === qs.length);
  });
  const line = $('.hw-total');
  line.classList.toggle('done', done === total);
  line.innerHTML = done === total
    ? '這次的作業全部完成了。 <em>All done.</em>'
    : `完成 <b>${done}</b> / ${total} 題`;
}

/* 檢查 is for typed blanks. A set made only of choices has nothing for it to
   check, so there it is not shown. */
$$('.act-tools').forEach((tools) => {
  if (!$('.bq', tools.closest('.activity'))) $('.check-all', tools).hidden = true;
});

// ------------------------------------------------------------- the practice

/* 自學 only. A finished question is written on the learner's own device and
   nowhere else: how many tries it took, whether the answer was shown, and
   what they ended on. 教學 keeps nothing. */
let ANS = store.get('answers', {});

const kindOf = (q) => ['mq', 'gq', 'fq', 'oq', 'rq', 'bq', 'pq'].find((k) => q.classList.contains(k));
const isDone = (q) => q.classList.contains('answered');

function setModel(q, sentence) {
  const m = $('.after .m-text', q);
  if (m) m.textContent = sentence;
  const s = $('.after .say', q);
  if (s) s.dataset.say = sentence;
}

/* Puts the finished answer on screen. `value` is what the learner ended on
   (a listed answer, or a tile order); without one the model answer is used. */
const FILL = {
  mq(q) {
    const right = $(`.opt[data-i="${q.dataset.answer}"]`, q);
    $$('.opt', q).forEach((b) => { b.disabled = true; });
    right.classList.add('is-answer');
    const slot = $('.slot', q);
    slot.textContent = right.dataset.fill || right.textContent;
    slot.classList.add('filled');
  },
  bq(q, value) {
    const answer = value || JSON.parse(q.dataset.answers)[0];
    const input = $('.b-in', q);
    input.value = answer;
    input.readOnly = true;
    input.classList.add('filled');
    input.style.width = `${answer.length + 1.5}ch`;
  },
  pq(q) {
    $$('.p-opt', q).forEach((b) => {
      b.disabled = true;
      b.classList.toggle('is-answer', b.dataset.i === q.dataset.answer);
    });
  },
  gq(q, value) {
    const answer = value || JSON.parse(q.dataset.answers)[0];
    const input = $('.gap-in', q);
    input.value = answer;
    input.readOnly = true;
    input.classList.add('filled');
    input.style.width = `${answer.length + 1.5}ch`;
    $('.q-line .say', q).dataset.say = q.dataset.before + answer + q.dataset.rest;
  },
  fq(q, value) { setModel(q, value || JSON.parse(q.dataset.answers)[0]); },
  rq(q, value) { setModel(q, value || JSON.parse(q.dataset.answers)[0]); },
  oq(q, value) {
    const placed = $('.o-placed', q);
    const tiles = $$('.tile', q);
    const order = value ? String(value).split(',') : tiles.map((t) => t.dataset.i).sort((a, b) => a - b);
    order.forEach((i) => {
      const t = tiles.find((x) => x.dataset.i === String(i) && x.parentElement !== placed)
             || tiles.find((x) => x.dataset.i === String(i));
      if (t) placed.appendChild(t);
    });
    tiles.forEach((t) => { t.disabled = true; });
    $('.o-line .say', q).dataset.say = builtSentence(q) + q.dataset.end;
  },
};

function builtSentence(q) {
  return [q.dataset.lead, ...$$('.o-placed .tile', q).map((t) => t.textContent)]
    .filter(Boolean).join(' ');
}

function paintAct(act) {
  const qs = $$('.q', act);
  const done = qs.filter(isDone);
  $('.tally .done', act).textContent = String(done.length);
  $('.tally .total', act).textContent = String(qs.length);

  const again = $('.again-line', act);
  const all = done.length === qs.length;
  $('.redo', act).hidden = !all;
  again.hidden = !all;
  const tools = $('.act-tools', act);
  if (tools) tools.hidden = all;
  if (!all) return;

  /* Several blanks can share one name — the two halves of item 4, the two
     forms of "plan" — and are listed once, pointing at the first of them. */
  const back = new Map();
  qs.filter((q) => q.classList.contains('again')).forEach((q) => {
    const name = $('.q-n', q).textContent;
    if (!back.has(name)) back.set(name, q);
  });
  again.innerHTML = back.size
    ? `值得再看一次 <em>Worth another look</em> ${[...back].map(([name, q]) =>
        `<button class="again-n" type="button" data-qid="${q.dataset.qid}">${text(name)}</button>`).join('')}`
    : '這一組每題都一次到位。 <em>Every one first time.</em>';
}

/* A card or a line that holds several questions is finished when the last of
   them is, and only then gets its speaker and its reason. */
function paintItem(q) {
  const item = q.closest('.item');
  if (item) item.classList.toggle('done', $$('.q', item).every(isDone));
}

const hideNudge = (q, hidden) => { const n = $('.nudge', q); if (n) n.hidden = hidden; };

function solve(q, { shown = false, value = null, record = true } = {}) {
  if (isDone(q)) return;
  const misses = Number(q.dataset.misses || 0);
  FILL[kindOf(q)](q, value);
  q.classList.add('answered');
  q.classList.remove('stuck');
  q.classList.toggle('again', shown || misses > 0);
  hideNudge(q, true);
  paintItem(q);
  paintAct(q.closest('.activity'));
  if (record && S.mode === 'self') {
    ANS[q.dataset.qid] = { m: misses, s: shown ? 1 : 0, v: value };
    store.set('answers', ANS);
  }
}

function wobble(node) {
  node.classList.remove('wob');
  void node.offsetWidth;            // restart the animation on a second miss
  node.classList.add('wob');
}

function miss(q, node) {
  const n = Number(q.dataset.misses || 0) + 1;
  q.dataset.misses = String(n);
  wobble(node || q);
  hideNudge(q, false);
  if (n >= 2) q.classList.add('stuck');
}

/* Multiple choice, matching and the inline pick-one all work the same way:
   the wrong option is crossed out and the question stays open. */
function tryMcq(q, btn) {
  if (isDone(q)) return;
  if (btn.dataset.i === q.dataset.answer) { solve(q); return; }
  btn.classList.add('is-wrong');
  btn.disabled = true;
  miss(q, btn);
}

/* Returns true when the blank is now done, so Enter can move on. */
function tryBlank(q) {
  if (isDone(q)) return true;
  const input = $('.b-in', q);
  if (!norm(input.value)) return false;
  const hit = matchAnswer(input.value, JSON.parse(q.dataset.answers));
  if (hit) solve(q, { value: hit }); else miss(q, input);
  return !!hit;
}

/* A whole-sentence box is as tall as its sentence: one line on a laptop, two
   or three on a phone, and never a sentence cut off at the edge of the box. */
function fit(box) {
  box.style.height = 'auto';
  box.style.height = `${box.scrollHeight + 2}px`;
}

function tryTyped(q) {
  if (isDone(q)) return;
  const input = $('input, textarea', q);
  if (!norm(input.value)) { input.focus(); return; }
  const hit = matchAnswer(input.value, JSON.parse(q.dataset.answers));
  if (hit) solve(q, { value: hit }); else miss(q, input);
}

function moveTile(tile) {
  const q = tile.closest('.q');
  if (isDone(q)) return;
  const placed = $('.o-placed', q);
  const pool = $('.o-pool', q);
  (tile.parentElement === pool ? placed : pool).appendChild(tile);
  if (pool.children.length) return;

  const built = builtSentence(q);
  const ok = JSON.parse(q.dataset.accept).some((a) => norm(a) === norm(built));
  if (ok) solve(q, { value: $$('.tile', placed).map((t) => t.dataset.i).join(',') });
  else miss(q, $('.o-line', q));
}

function resetQ(q) {
  q.classList.remove('answered', 'again', 'stuck');
  delete q.dataset.misses;
  hideNudge(q, true);
  const item = q.closest('.item');
  if (item) item.classList.remove('done');
  $$('.opt, .p-opt', q).forEach((b) => { b.disabled = false; b.classList.remove('is-answer', 'is-wrong'); });
  const slot = $('.slot', q);
  if (slot) { slot.textContent = ''; slot.classList.remove('filled'); }
  $$('input, textarea', q).forEach((i) => {
    i.readOnly = false;
    i.classList.remove('filled');
    i.style.width = '';
    i.value = i.dataset.init || '';
    if (i.matches('.line-in')) fit(i);
  });
  const pool = $('.o-pool', q);
  if (pool) {
    $$('.tile', q).sort((a, b) => a.dataset.pos - b.dataset.pos)
      .forEach((t) => { t.disabled = false; pool.appendChild(t); });
  }
  $$('.pair.open', q).forEach((p) => p.classList.remove('open'));
}

function restore() {
  if (S.mode !== 'self') return;
  $$('.q').forEach((q) => {
    const a = ANS[q.dataset.qid];
    if (!a || isDone(q)) return;
    q.dataset.misses = String(a.m || 0);
    solve(q, { shown: !!a.s, value: a.v, record: false });
  });
}

function clearScreen(forget) {
  $$('.q').forEach(resetQ);
  $$('.activity').forEach(paintAct);
  if (forget) { ANS = {}; store.set('answers', ANS); }
}

function redoAct(act) {
  $$('.q', act).forEach((q) => {
    resetQ(q);
    delete ANS[q.dataset.qid];
  });
  if (S.mode === 'self') store.set('answers', ANS);
  paintAct(act);
  paintInfo();
}

function paintInfo() {
  const n = Object.keys(ANS).length;
  const total = $$('.q').length;
  const info = $('#markinfo');
  if (info) {
    info.textContent = n
      ? `已完成 ${n} / ${total} 題，只存在這台裝置。`
      : '還沒有作答。完成的題目只會存在這台裝置。';
  }
  paintHw();
}

// ------------------------------------------------------------------- modes

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  $('#zhToggle').setAttribute('aria-pressed', String(on));
}

function setMode(m, remember) {
  S.mode = TEACHER ? m : 'self';
  document.body.classList.toggle('mode-teach', S.mode === 'teach');
  document.body.classList.toggle('mode-self', S.mode === 'self');
  if (remember) store.set('mode', S.mode);

  $$('#modeseg button').forEach((b) =>
    b.setAttribute('aria-pressed', String(b.dataset.mode === S.mode)));

  /* 自學 shows the Chinese outright. 教學 starts with it away, and the 中文
     switch is how the teacher opens the lot. */
  setAllZh(S.mode === 'self');

  /* Switching into 教學 wipes the screen — a lesson starts clean — but does
     not touch what is kept on the device. */
  clearScreen(false);
  restore();

  $('#teachtools').hidden = S.mode !== 'teach';
  $('#selftools').hidden  = S.mode !== 'self';
  paintInfo();
}

/* Everything only a teacher's device shows: the mode switch, the 作業 button
   and the row in 設定 that explains them. */
function showTeacherTools(on) {
  $('#modeseg').hidden = !on;
  $('#teacherflag').hidden = !on;
  $('#hwToggle').hidden = !on;
}

showTeacherTools(TEACHER);
setMode(S.mode, false);

const fitAll = () => $$('.line-in').forEach(fit);
fitAll();
addEventListener('resize', fitAll);
doc.addEventListener('input', (e) => { if (e.target.matches('.line-in')) fit(e.target); });

// ------------------------------------------------------------------- events

/* Which blank a tap on the word box fills: the one last touched, or failing
   that the first one still open. */
function activeGap(act) {
  const last = act.querySelector('.gq.active:not(.answered)');
  return last || $$('.gq', act).find((q) => !isDone(q)) || null;
}

doc.addEventListener('click', (e) => {
  const t = e.target;

  const gapQ = t.closest('.gq');
  if (gapQ && !isDone(gapQ)) markActive(gapQ);

  const sayBtn = t.closest('.say');
  if (sayBtn) { e.stopPropagation(); speak(sayBtn.dataset.say); return; }

  const chip = t.closest('.zh-chip');
  if (chip) {
    const host = chip.closest('.pair');
    if (host) host.classList.toggle('open');
    return;
  }

  const opt = t.closest('.opt, .p-opt');
  if (opt) { tryMcq(opt.closest('.q'), opt); paintInfo(); return; }

  const one = t.closest('.b-show');
  if (one) { solve(one.closest('.q'), { shown: true }); paintInfo(); return; }

  /* 檢查 looks at every blank that has something typed in it and leaves the
     empty ones alone — an untouched blank is not a wrong answer. */
  const checkAll = t.closest('.check-all');
  if (checkAll) {
    $$('.bq', checkAll.closest('.activity')).forEach((q) => { if (!isDone(q)) tryBlank(q); });
    paintInfo();
    return;
  }

  const showAll = t.closest('.show-all');
  if (showAll) {
    $$('.q', showAll.closest('.activity')).forEach((q) => { if (!isDone(q)) solve(q, { shown: true }); });
    paintInfo();
    return;
  }

  const tile = t.closest('.tile');
  if (tile) { moveTile(tile); paintInfo(); return; }

  const word = t.closest('.bank-w');
  if (word) {
    const q = activeGap(word.closest('.activity'));
    if (!q) return;
    $('.gap-in', q).value = word.textContent;
    tryTyped(q);
    paintInfo();
    return;
  }

  if (t.closest('.check')) { tryTyped(t.closest('.q')); paintInfo(); return; }

  const okBtn = t.closest('.f-ok');
  if (okBtn) {
    const q = okBtn.closest('.q');
    if (q.dataset.ok === '1') solve(q); else miss(q, okBtn);
    paintInfo();
    return;
  }

  if (t.closest('.show-ans')) { solve(t.closest('.q'), { shown: true }); paintInfo(); return; }

  const redo = t.closest('.redo');
  if (redo) {
    const act = redo.closest('.activity');
    redoAct(act);
    act.scrollIntoView({ block: 'start' });
    return;
  }

  const rules = t.closest('.rules-btn');
  if (rules) {
    const open = rules.closest('.point').classList.toggle('rules-open');
    rules.setAttribute('aria-expanded', String(open));
    rules.innerHTML = open ? '收起重點整理 <em>Hide the rules</em>' : '先看重點整理 <em>Review the rules</em>';
    return;
  }

  const back = t.closest('.again-n');
  if (back) {
    const q = $(`.q[data-qid="${back.dataset.qid}"]`);
    if (q) q.scrollIntoView({ block: 'center' });
    return;
  }

  const line = t.closest('.pair[data-zh]');
  if (line && !t.closest('button, input, textarea')) line.classList.toggle('open');
});

doc.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' || e.isComposing) return;
  const input = e.target.closest('.gap-in, .line-in');
  if (input) { e.preventDefault(); tryTyped(input.closest('.q')); paintInfo(); return; }

  /* In a run of blanks, Enter checks this one and, if it is right, moves to
     the next one still open — a dialogue can be filled in without the mouse. */
  const blank = e.target.closest('.b-in');
  if (!blank) return;
  e.preventDefault();
  const q = blank.closest('.q');
  const done = tryBlank(q);
  paintInfo();
  if (!done) return;
  const open = $$('.bq', q.closest('.activity')).filter((x) => !isDone(x));
  const next = open.find((x) => q.compareDocumentPosition(x) & Node.DOCUMENT_POSITION_FOLLOWING) || open[0];
  if (next) $('.b-in', next).focus();
});

/* "Tap a blank" means the question, not the few pixels of the box: a tap
   anywhere on the card, or the keyboard arriving in its box, makes it the one
   the word box fills. */
function markActive(q) {
  $$('.gq.active', q.closest('.activity')).forEach((x) => x.classList.remove('active'));
  q.classList.add('active');
}

doc.addEventListener('focusin', (e) => {
  const input = e.target.closest('.gap-in');
  if (input) markActive(input.closest('.q'));
});

/* The wobble class is taken off when it finishes, so the next miss can put it
   back on. */
doc.addEventListener('animationend', (e) => e.target.classList.remove('wob'));

$$('#modeseg button').forEach((b) =>
  b.addEventListener('click', () => setMode(b.dataset.mode, true)));

$('#zhToggle').addEventListener('click', () =>
  setAllZh(!document.body.classList.contains('zh-all')));

$('#clearmarks').addEventListener('click', () => { clearScreen(true); paintInfo(); });
$('#fresh').addEventListener('click', () => { clearScreen(false); paintInfo(); });

$('#unteach').addEventListener('click', () => {
  TEACHER = false;
  store.set('teacher', false);
  showTeacherTools(false);
  setHwPanel(false);
  setMode('self', true);
});

// ------------------------------------------------------------------- speech

let voices = [], voice = null;

function loadVoices() {
  voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
  if (!voices.length) return;
  const saved = store.get('voice', '');
  voice = voices.find((v) => v.name === saved)
       || voices.find((v) => v.lang === 'en-US' && /Samantha|Ava|Allison|Google US/i.test(v.name))
       || voices.find((v) => v.lang === 'en-US') || voices[0];
  const pick = $('#voicePick');
  pick.innerHTML = voices.map((v) =>
    `<option value="${text(v.name)}"${v === voice ? ' selected' : ''}>${text(v.name)} (${text(v.lang)})</option>`).join('');
}

const canSpeak = 'speechSynthesis' in window;
if (canSpeak) {
  loadVoices();
  speechSynthesis.addEventListener('voiceschanged', loadVoices);
}

function speak(s) {
  if (!s || !canSpeak) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(s);
    if (voice) { u.voice = voice; u.lang = voice.lang; }
    u.rate = Number($('#rate').value || 0.95);
    speechSynthesis.speak(u);
  } catch (e) { /* no speech on this device */ }
}

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  store.set('voice', voice ? voice.name : '');
  speak('This is the voice you have chosen.');
});

// ------------------------------------------------------------------- chrome

const panel = $('#panel');
function setPanel(on) {
  panel.hidden = !on;
  $('#panelToggle').setAttribute('aria-expanded', String(on));
  if (on) setHwPanel(false);
}
$('#panelToggle').addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));
$('#closepanel').addEventListener('click', () => setPanel(false));

// ------------------------------------------------- the 作業 sheet (teacher)

/* Where a homework link is made. A list of every exercise on the page with a
   box beside it, a box on each point that takes the whole point, and under
   the list the link itself, rewritten on every tick so that what is copied is
   always what is ticked.

   The ticks and the title are kept on this device (`gp.hw`) so the sheet
   opens the way it was left. Opened on a homework link, it starts from that
   link instead — which is how last week's homework becomes this week's. */

const hwPanel = $('#hwpanel');
const kept = store.get('hw', {});
const PICK = new Set(HW ? HW.list.map((x) => x.id)
  : EX.filter((x) => (kept.ids || []).includes(x.id)).map((x) => x.id));
$('#hwTitle').value = HW ? HW.title : (kept.title || '');

function buildPick() {
  const box = $('#hwPick');
  if (box.firstChild) return;
  let group = '';
  box.innerHTML = [...groupBy(EX, 'p')].map(([p, list]) => {
    const head = p.group && p.group.en !== group
      ? `<p class="hw-group">${text(p.group.zh)} <em>${text(p.group.en)}</em></p>` : '';
    group = p.group ? p.group.en : '';
    return `${head}
      <div class="hw-pt">
        <label class="hw-row hw-row-pt"><input type="checkbox" data-point="${text(p.id)}">
          <span class="hw-t"><span class="n">${String(list[0].pn).padStart(2, '0')}</span> ${text(p.zh)}</span>
          <span class="hw-c">${list.length} 組 · ${list.reduce((n, x) => n + x.n, 0)} 題</span></label>
        ${list.map((x) => `
          <label class="hw-row"><input type="checkbox" data-ex="${text(x.id)}">
            <span class="hw-t">${exName(x)}</span>
            <span class="hw-c">${x.n} 題</span></label>`).join('')}
      </div>`;
  }).join('');
}

function paintPick() {
  $$('#hwPick input[data-ex]').forEach((c) => { c.checked = PICK.has(c.dataset.ex); });
  $$('#hwPick input[data-point]').forEach((c) => {
    const list = EX.filter((x) => x.p.id === c.dataset.point);
    const n = list.filter((x) => PICK.has(x.id)).length;
    c.checked = n === list.length;
    c.indeterminate = n > 0 && n < list.length;
  });

  const list = EX.filter((x) => PICK.has(x.id));
  const title = $('#hwTitle').value;
  const url = list.length ? hwUrl(PICK, title) : '';
  $('#hwSum').innerHTML = list.length
    ? `已選 <b>${list.length}</b> 組練習 · ${list.reduce((n, x) => n + x.n, 0)} 題`
    : '還沒有選。勾選上面的練習，連結就會出現在這裡。';
  $('#hwLink').value = url;
  $('#hwCopy').disabled = !url;
  $('#hwNone').disabled = !url;
  const open = $('#hwOpen');
  open.classList.toggle('is-off', !url);
  if (url) open.href = url; else open.removeAttribute('href');
  store.set('hw', { ids: [...PICK], title });
}

function setHwPanel(on) {
  hwPanel.hidden = !on;
  $('#hwToggle').setAttribute('aria-expanded', String(on));
  if (!on) return;
  setPanel(false);
  buildPick();
  paintPick();
}

$('#hwToggle').addEventListener('click', () => setHwPanel(hwPanel.hidden));
$('#hwFromPanel').addEventListener('click', () => setHwPanel(true));
$('#hwClose').addEventListener('click', () => setHwPanel(false));

$('#hwPick').addEventListener('change', (e) => {
  const c = e.target;
  if (c.dataset.ex) { if (c.checked) PICK.add(c.dataset.ex); else PICK.delete(c.dataset.ex); }
  if (c.dataset.point) {
    EX.filter((x) => x.p.id === c.dataset.point)
      .forEach((x) => { if (c.checked) PICK.add(x.id); else PICK.delete(x.id); });
  }
  paintPick();
});

$('#hwTitle').addEventListener('input', paintPick);
$('#hwLink').addEventListener('focus', (e) => e.target.select());
$('#hwNone').addEventListener('click', () => { PICK.clear(); paintPick(); });

/* The clipboard API needs a secure page and a willing browser; the old way —
   select the box and copy — covers the in-app browsers that have neither. If
   both fail the link is left selected, ready for a long press. */
$('#hwCopy').addEventListener('click', async () => {
  const btn = $('#hwCopy');
  const field = $('#hwLink');
  let ok = false;
  try { await navigator.clipboard.writeText(field.value); ok = true; } catch (e) { /* fall through */ }
  if (!ok) {
    field.focus(); field.select();
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
  }
  btn.innerHTML = ok ? '已複製 ✓ <em>Copied</em>' : '請長按上面的連結來複製';
  clearTimeout(btn.t);
  btn.t = setTimeout(() => { btn.innerHTML = '複製連結 <em>Copy link</em>'; }, 2200);
});

const navToggle = $('#navToggle');
const scrim = $('.nav-scrim');
function setNav(on) {
  document.body.classList.toggle('nav-open', on);
  navToggle.setAttribute('aria-expanded', String(on));
  scrim.hidden = !on;
}
navToggle.addEventListener('click', () => setNav(!document.body.classList.contains('nav-open')));
scrim.addEventListener('click', () => setNav(false));

$('#nav').addEventListener('click', (e) => {
  if (e.target.closest('a')) setNav(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { setPanel(false); setHwPanel(false); setNav(false); }
});

/* Which part is in view, for the contents list. The pending frame id is held
   rather than a boolean: a frame requested just before the tab is hidden never
   runs, and a stuck flag would kill the highlighting for the rest of the
   visit. Same fix as /grammar-notes/ and /jill/. */
const links = new Map($$('.toc a[data-target]').map((a) => [a.dataset.target, a]));
let frame = 0;

/* On a homework link the contents list is the exercises that were set, so
   those are what is watched — and the parts that were put away, which sit at
   0,0 and would always look "passed", are never asked. */
function spy() {
  frame = 0;
  const line = 120;
  let here = '';
  $$(HW ? '.activity.hw-on' : '.part').forEach((s) => {
    if (s.getBoundingClientRect().top <= line) here = s.id;
  });
  links.forEach((a, id) => a.classList.toggle('here', id === here));
}
addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(spy); }, { passive: true });
spy();

/* Deep links. The page is built by script, so by the time #pp-fix exists the
   browser has already looked for it and given up. The jump is done here, once
   the DOM is up. #teach is claimed and stripped before this runs. */
function jumpToHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  const bar = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--bar-h')) || 54;
  window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY - bar - 12);
  spy();
}

jumpToHash();
addEventListener('hashchange', jumpToHash);
