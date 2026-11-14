/* Anny — 商務團隊會議・共同籌辦指南: the renderer.

   Reads GUIDE from content.js and builds the page. Nothing here teaches, so
   none of the notebook's machinery came across: no English/Chinese layer, no
   speech, no answers to reveal, no folding. What it has instead is the three
   things that make a document usable while a meeting is actually happening:

   - a timer in the top bar that lights the row of the 30-minute plan the
     conversation is in;
   - a checklist and a decisions table that remember what was ticked and typed,
     because a phone that locks its screen must not empty them; and
   - a copy button that turns what was typed into a message she can send.

   Everything saved lives under one localStorage key and is wiped by 清空本頁紀錄.
   See content.js for why this page saves when the others deliberately do not. */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* Every string from content.js goes through this. The page is Chinese prose
   with real colleagues' names in it, not markup. */
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

/* Newlines in a `lines` body are paragraph breaks, not line breaks: the
   spoken openers are two or three short paragraphs each. */
function paras(s, cls = '') {
  return String(s).split('\n').filter(Boolean)
    .map((p) => `<p${cls ? ` class="${cls}"` : ''}>${text(p)}</p>`).join('');
}

// ------------------------------------------------------------------ storage

/* One key for the whole page. A corrupt or foreign value is discarded rather
   than thrown — a page that refuses to load because of a stale string is worse
   than a page that starts empty. */
const KEY = 'anny-meeting-v1';

function load() {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || '{}');
    return v && typeof v === 'object' ? v : {};
  } catch { return {}; }
}

let store = load();
if (!store.ticks) store.ticks = {};
if (!store.plan) store.plan = {};
if (!store.fields) store.fields = {};
if (!store.clock) store.clock = { base: 0, since: 0 };

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(store)); } catch { /* private mode */ }
}

// ------------------------------------------------------------------ builders

function buildCover() {
  const c = GUIDE.cover;
  return `
    <section class="cover" id="top">
      <p class="who">${text(GUIDE.who)}　·　${text(GUIDE.date)}</p>
      <h1>${text(GUIDE.title)}<span>${text(GUIDE.titleSub)}</span></h1>
      <p class="kicker">${text(GUIDE.kicker)}</p>

      <div class="goals">
        <h2>${text(c.goalsHead)}</h2>
        <ol>${c.goals.map((g) => `<li>${text(g)}</li>`).join('')}</ol>
      </div>

      <div class="callout callout-strong">
        <p class="callout-label">${text(c.principleLabel)}</p>
        <p>${text(c.principle)}</p>
      </div>

      <div class="callout">
        <p class="callout-label">${text(c.standardHead)}</p>
        <p>${text(c.standard)}</p>
      </div>

      <p class="scope">${text(c.scope)}</p>
    </section>`;
}

/* ---------------- figures ----------------

   Two things in this guide are shapes rather than sentences, and both were a
   single clause inside a paragraph: the three levels of involvement she could
   be asking the other CSD for, and the arc the two days are supposed to make.
   The first is the decision the whole conversation turns on, and it was eight
   words long.

   Laid out in HTML and CSS, not drawn as SVG with text inside — text in an
   SVG does not reflow, does not grow when the reader enlarges type, and
   cannot be selected or read aloud. The only SVG is the arrow. Same approach
   as the notebook next door, and the same container query: a figure sizes
   against its own column, because the window's width is not the question. */

const ARROW = `<svg class="fig-arrow" viewBox="0 0 24 24" aria-hidden="true"><path
  d="M4 12h14M12 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const FIGURES = {
  /* Section 02. "提供建議、負責部分內容，還是共同主導" is the single most
     consequential thing to settle today, and it was one clause in a callout.
     The three are drawn as a rising scale because that is what they are. */
  levels: {
    steps: [
      {
        t: '提供建議',
        d: '對方給意見，你做決定。',
        note: '承諾最輕，也最容易當場答應——所以最容易被誤以為是合作。',
      },
      {
        t: '負責部分內容',
        d: '對方主責其中一段，那一段他說了算。',
        note: '要講清楚是哪一段，以及他在那一段裡可以決定什麼。',
      },
      {
        t: '共同主導',
        d: '從成果到議程一起決定。',
        note: '責任和功勞都對半。這一種必須有實際影響決策的空間，否則只是名義。',
      },
    ],
    foot: '三種都叫「合作」，但承諾的份量差很多。今天沒有講明是哪一種，雙方會各自想成不同的一種，然後在下一次會議才發現。',
  },

  /* Section 03. The through-line for the two days, which the paragraph above
     the table states and the table itself cannot show. */
  arc: {
    steps: [
      {
        t: '第一天下午',
        d: '建立共同理解',
        note: '聽完別人的經驗，知道 2027 年要往哪裡走。',
      },
      {
        t: '第一天晚上',
        d: '讓平常不講話的人講到話',
        note: '混桌、輕鬆的題目、不安排上台。這一段沒有議程才有用。',
      },
      {
        t: '第二天上午',
        d: '把共識變成帶得回去的行動',
        note: '每組一個做得出來的方案，講清楚誰負責、什麼時候檢視。',
      },
    ],
    foot: '少了中間那一段，兩天一夜就只是兩個半天的會議——而那正是最常被拿掉的一段。',
  },
};

function figSteps(steps) {
  return steps.map((s, i) => `
    ${i ? ARROW : ''}
    <div class="fig-step">
      <p class="fig-n">${i + 1}</p>
      <p class="fig-t">${text(s.t)}</p>
      ${s.d ? `<p class="fig-d">${text(s.d)}</p>` : ''}
      ${s.note ? `<p class="fig-note">${text(s.note)}</p>` : ''}
    </div>`).join('');
}

const BLOCKS = {

  lead: (b) => `<p class="lead">${text(b.text)}</p>`,

  /* A figure names its drawing by key. An unknown key says so on the page —
     a diagram that silently disappears is the kind of thing nobody notices
     until the meeting. */
  figure: (b) => {
    const f = FIGURES[b.fig];
    if (!f) {
      console.error(`No figure named "${b.fig}"`);
      return `<p class="missing">缺少圖解：<code>${text(b.fig)}</code></p>`;
    }
    return `
      <figure class="fig">
        ${b.head ? `<h3>${text(b.head)}</h3>` : ''}
        ${b.lead ? `<p class="body">${text(b.lead)}</p>` : ''}
        <div class="fig-row fig-row-${f.steps.length}">${figSteps(f.steps)}</div>
        ${f.foot ? `<figcaption class="fig-foot">${text(f.foot)}</figcaption>` : ''}
      </figure>`;
  },

  p: (b) => `<p class="body">${text(b.text)}</p>`,

  callout: (b) => `
    <div class="callout">
      ${b.label ? `<p class="callout-label">${text(b.label)}</p>` : ''}
      <p>${text(b.text)}</p>
    </div>`,

  steps: (b) => `
    <div class="steps">
      ${b.head ? `<h3>${text(b.head)}</h3>` : ''}
      <ol>
        ${b.items.map((i) => `
          <li>
            <p class="step-t">${text(i.t)}</p>
            <p class="step-d">${text(i.d)}</p>
          </li>`).join('')}
      </ol>
    </div>`,

  /* `data-h` repeats the column heading on every cell. It is invisible on a
     wide screen, where the real heading row is doing the work, and it is what
     the table stacks into on a phone — a stacked row with its headings thrown
     away reads as two unrelated sentences. */
  two: (b) => `
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr>${b.head.map((h) => `<th>${text(h)}</th>`).join('')}</tr></thead>
        <tbody>
          ${b.rows.map((r) => `
            <tr>
              <th scope="row" data-h="${text(b.head[0])}">${text(r[0])}</th>
              <td data-h="${text(b.head[1])}">${text(r[1])}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`,

  /* The 30-minute plan. `data-from`/`data-to` are what the timer reads; the
     minute labels are built from them so the two can never drift apart. */
  clock: (b) => `
    <div class="clock">
      ${b.head ? `<h3>${text(b.head)}</h3>` : ''}
      <ol class="clock-rows">
        ${b.rows.map((r) => `
          <li class="clock-row" data-from="${r.from}" data-to="${r.to}">
            <p class="clock-when">${r.from}–${r.to} <span>分</span></p>
            <p class="clock-what">${text(r.t)}</p>
          </li>`).join('')}
      </ol>
      ${b.note ? `<p class="small">${text(b.note)}</p>` : ''}
    </div>`,

  /* The band that says a section is a proposal. It is the loudest thing on
     the page and it survives print, because the failure it guards against is
     a draft being circulated as the plan. */
  draft: (b) => `
    <div class="draft">
      <p class="draft-label">${text(b.label)}</p>
      <p>${text(b.text)}</p>
    </div>`,

  /* The two days. `goal` tags which of the three outcomes from section 01 a
     slot serves, and a slot with none shows nothing — an empty tag row is the
     signal that the slot is a break, or that it is not earning its place.
     `fixed` marks the one block that was actually supplied; everything else
     carries the draft mark so a row cannot be read as settled once it is
     away from the banner at the top of the section. */
  days: (b) => `
    <div class="days">
      ${b.days.map((d) => `
        <section class="day">
          <h3 class="day-h">${text(d.d)}</h3>
          <ol class="day-rows">
            ${d.rows.map((r) => `
              <li${r.fixed ? ' class="fixed"' : ''}>
                <div class="day-slot">
                  <p class="day-time">${text(r.time)}</p>
                  <p class="day-mark">${r.fixed ? '已提供' : '建議'}</p>
                </div>
                <div class="day-main">
                  <p class="day-what">${text(r.t)}</p>
                  ${r.why ? `<p class="day-why">${text(r.why)}${
                    r.see ? ` <a class="day-see" href="#${text(r.see)}">看那一節 ↗</a>` : ''}</p>` : ''}
                  ${r.goal && r.goal.length
                    ? `<p class="day-goals">${r.goal.map((g) => `<span>${text(g)}</span>`).join('')}</p>`
                    : ''}
                </div>
              </li>`).join('')}
          </ol>
        </section>`).join('')}
    </div>`,

  /* The afternoon under review. Not a `two` table: the left-hand cell is three
     things of different weight — the slot, what it is, who is on — and the
     right-hand one is the only part Anny has to act on today, so it is marked
     as the question rather than left to look like more description. */
  agenda: (b) => `
    <ol class="agenda">
      ${b.rows.map((r) => `
        <li>
          <div class="ag-slot">
            <p class="ag-time">${text(r.time)}</p>
            <p class="ag-what">${text(r.title)}</p>
            ${r.who ? `<p class="ag-who">${text(r.who)}</p>` : ''}
          </div>
          <p class="ag-ask">${text(r.ask)}</p>
        </li>`).join('')}
    </ol>`,

  asks: (b) => `
    <div class="asks">
      ${b.head ? `<h3>${text(b.head)}</h3>` : ''}
      ${b.lead ? `<p class="body">${text(b.lead)}</p>` : ''}
      <ul>${b.items.map((i) => `<li>${text(i)}</li>`).join('')}</ul>
      ${b.after ? `<p class="small">${text(b.after)}</p>` : ''}
    </div>`,

  /* What the other person may say, and a way to answer it. The caution under
     an answer is for Anny, not something to read out, so it is set apart. */
  replies: (b) => `
    <div class="replies">
      ${b.head ? `<h3>${text(b.head)}</h3>` : ''}
      <ul>
        ${b.items.map((i) => `
          <li>
            <p class="says">${text(i.says)}</p>
            <p class="reply">${text(i.reply)}</p>
            ${i.note ? `<p class="caution">${text(i.note)}</p>` : ''}
          </li>`).join('')}
      </ul>
    </div>`,

  script: (b) => `
    <div class="script">
      ${b.note ? `<p class="small">${text(b.note)}</p>` : ''}
      <div class="script-body">
        ${b.lines.map((l) => `<p>${text(l)}</p>`).join('')}
      </div>
      <button class="btn btn-quiet copy" data-copy="script">複製整段口頭稿</button>
    </div>`,

  lines: (b) => `
    <div class="lines">
      <ul>
        ${b.items.map((i) => `
          <li>
            <p class="line-t">${text(i.t)}${i.hint ? ` <span>${text(i.hint)}</span>` : ''}</p>
            <div class="line-body">${paras(i.body)}</div>
            <button class="btn btn-quiet copy" data-copy="line">複製這段</button>
          </li>`).join('')}
      </ul>
      ${b.after ? `<p class="small">${text(b.after)}</p>` : ''}
    </div>`,

  /* The ticks are saved, so each box needs an id that survives a reload.
     Group index plus item index is stable as long as nobody reorders the list
     in content.js — and if they do, a stale tick is the right thing to lose. */
  check: (b) => `
    <div class="check">
      ${b.head ? `<h3>${text(b.head)}</h3>` : ''}
      ${b.groups.map((g, gi) => `
        <div class="check-g">
          <p class="check-gt">${text(g.g)}</p>
          <ul>
            ${g.items.map((it, ii) => {
              const id = `c${gi}-${ii}`;
              const on = !!store.ticks[id];
              return `
                <li>
                  <label class="tick${on ? ' on' : ''}">
                    <input type="checkbox" data-tick="${id}"${on ? ' checked' : ''}>
                    <span>${text(it)}</span>
                  </label>
                </li>`;
            }).join('')}
          </ul>
        </div>`).join('')}
    </div>`,

  plan: (b) => `
    <div class="plan">
      ${b.head ? `<h3>${text(b.head)}</h3>` : ''}
      <div class="tbl-wrap">
        <table class="tbl tbl-plan">
          <thead><tr>${b.cols.map((c) => `<th>${text(c)}</th>`).join('')}</tr></thead>
          <tbody>
            ${b.rows.map((r, ri) => `
              <tr>
                <th scope="row" data-h="${text(b.cols[0])}">${text(r)}</th>
                <td data-h="${text(b.cols[1])}"><input class="fill" type="text" data-plan="${ri}.owner"
                     value="${text(store.plan[`${ri}.owner`] || '')}"
                     aria-label="${text(r)}　${text(b.cols[1])}"></td>
                <td data-h="${text(b.cols[2])}"><input class="fill" type="text" data-plan="${ri}.due"
                     value="${text(store.plan[`${ri}.due`] || '')}"
                     aria-label="${text(r)}　${text(b.cols[2])}"></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`,

  fields: (b) => `
    <div class="fields">
      ${b.head ? `<h3>${text(b.head)}</h3>` : ''}
      ${b.items.map((i, ii) => `
        <label class="field">
          <span>${text(i.label)}</span>
          <textarea class="fill" rows="${i.rows || 2}" data-field="${ii}"
            >${text(store.fields[ii] || '')}</textarea>
        </label>`).join('')}
      ${b.note ? `<p class="small">${text(b.note)}</p>` : ''}
    </div>`,
};

/* A block whose `t` has no builder is a typo in content.js, and the version of
   this that quietly returned an empty string swallowed the whole agenda table
   once. It says so on the page instead: a block missing from a guide someone
   is about to walk into a meeting with must not be silent. */
function build(b, where) {
  if (BLOCKS[b.t]) return BLOCKS[b.t](b);
  console.error(`No builder for block type "${b.t}" in section "${where}"`);
  return `<p class="missing">缺少區塊：<code>${text(b.t)}</code>（${text(where)}）</p>`;
}

function buildSection(s) {
  return `
    <section class="sec" id="${text(s.id)}">
      <header class="sec-head">
        <p class="sec-n">${text(s.n)}</p>
        <h2>${text(s.title)}</h2>
        ${s.sub ? `<p class="sec-sub">${text(s.sub)}</p>` : ''}
      </header>
      ${s.blocks.map((b) => build(b, s.id)).join('')}
    </section>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="目錄">
      <p class="toc-head">目錄</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t">開始</span></a></li>
        ${GUIDE.sections.map((s) => `
          <li><a href="#${text(s.id)}" data-target="${text(s.id)}">
            <span class="n">${text(s.n)}</span>
            <span class="t">${text(s.title)}</span></a></li>`).join('')}
      </ul>
    </nav>`;
}

// ------------------------------------------------------------------ mount

document.title = `${GUIDE.title} · ${GUIDE.titleSub}`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
GUIDE.sections.forEach((s) => doc.appendChild(el(buildSection(s))));

// ------------------------------------------------------------------ the timer

/* Elapsed time is kept as a base plus the moment the clock last started, so a
   reload mid-meeting does not lose the count and a paused clock costs nothing
   to keep. `since` of 0 means paused. */
const clockBtn = $('#clockBtn');
const clockRows = $$('.clock-row');
const nowbar = $('#nowbar');
const nowWhen = $('#nowWhen');
const nowWhat = $('#nowWhat');

/* The strip under the bar goes back to the plan it is reporting. */
nowbar.addEventListener('click', () => {
  const flow = document.getElementById('flow');
  if (flow) flow.scrollIntoView();
});

function elapsed() {
  const c = store.clock;
  return c.base + (c.since ? Date.now() - c.since : 0);
}

function mmss(ms) {
  const t = Math.floor(ms / 1000);
  return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
}

function paintClock() {
  const ms = elapsed();
  const running = !!store.clock.since;
  /* The count shows the moment it is running, not after the first tick — a
     button still saying 開始 a second after it was pressed reads as a button
     that did not work. */
  clockBtn.textContent = (running || ms) ? `⏱ ${mmss(ms)}` : '⏱ 開始';
  clockBtn.classList.toggle('running', running);
  clockBtn.setAttribute('aria-pressed', String(running));

  /* Only mark a row while the clock is actually running. A paused or unstarted
     clock sitting at 0:00 would otherwise light the first row and read as "we
     are here", which is exactly the wrong thing for a plan nobody has started. */
  const min = ms / 60000;
  const last = clockRows.length - 1;
  let here = null;
  clockRows.forEach((r, i) => {
    const from = +r.dataset.from;
    const to = +r.dataset.to;
    const inside = running && (min >= from && (min < to || (i === last && min >= from)));
    r.classList.toggle('now', inside);
    if (inside) here = r;
  });

  /* Carry that row up to the strip under the bar, so the plan is readable from
     anywhere on a page twenty screens long rather than only from section 02.
     The strip is what makes the clock worth having during the conversation. */
  document.body.classList.toggle('clock-on', running);
  nowbar.hidden = !running;
  if (here) {
    nowWhen.textContent = `${here.dataset.from}–${here.dataset.to} 分`;
    nowWhat.textContent = $('.clock-what', here).textContent;
  }
}

clockBtn.addEventListener('click', () => {
  const c = store.clock;
  if (c.since) { c.base = elapsed(); c.since = 0; } else { c.since = Date.now(); }
  save();
  paintClock();
});

paintClock();
setInterval(paintClock, 1000);

// ------------------------------------------------------------------ what is saved

$('#doc').addEventListener('change', (e) => {
  const t = e.target;
  if (t.dataset.tick) {
    store.ticks[t.dataset.tick] = t.checked;
    t.closest('.tick').classList.toggle('on', t.checked);
    save();
  }
});

/* `input` rather than `change` on the text boxes: a meeting that ends with the
   tab being closed should still have the last thing typed in it. */
$('#doc').addEventListener('input', (e) => {
  const t = e.target;
  if (t.dataset.plan) { store.plan[t.dataset.plan] = t.value; save(); }
  else if (t.dataset.field) { store.fields[t.dataset.field] = t.value; save(); }
});

// ------------------------------------------------------------------ copying

/* Clipboard writes fail on an insecure origin and when the page is not the
   focused document, so every copy reports what happened on the button itself
   rather than assuming it worked. */
async function copy(str, btn) {
  const was = btn.textContent;
  try {
    await navigator.clipboard.writeText(str);
    btn.textContent = '已複製';
  } catch {
    btn.textContent = '複製失敗，請手動選取';
  }
  setTimeout(() => { btn.textContent = was; }, 1800);
}

$('#doc').addEventListener('click', (e) => {
  const btn = e.target.closest('.copy');
  if (!btn) return;
  const box = btn.closest('li, .script');
  const body = $('.script-body', box) || $('.line-body', box);
  const str = $$('p', body).map((p) => p.textContent.trim()).join('\n\n');
  copy(str, btn);
});

/* The decisions, as a message. This is the one on the checklist that is easiest
   to forget — 整理並分享會議決議 — so the page does the typing-up. */
function decisions() {
  const out = [`商務團隊會議・籌辦討論決議（${GUIDE.date}）`, ''];

  $$('.fields .field').forEach((f) => {
    const v = $('textarea', f).value.trim();
    out.push(`${$('span', f).textContent}：${v || '（未填）'}`);
  });

  out.push('', '下一步');
  $$('.tbl-plan tbody tr').forEach((tr) => {
    const what = $('th', tr).textContent;
    const [owner, due] = $$('input', tr).map((i) => i.value.trim());
    out.push(`· ${what}｜負責人：${owner || '＿'}｜期限：${due || '＿'}`);
  });

  const left = $$('[data-tick]').filter((c) => !c.checked);
  if (left.length) {
    out.push('', '尚未完成的檢核項目');
    left.forEach((c) => out.push(`· ${c.closest('.tick').textContent.trim()}`));
  }

  return out.join('\n');
}

$('#copyAll').addEventListener('click', (e) => copy(decisions(), e.currentTarget));

$('#print').addEventListener('click', () => { setPanel(false); print(); });

$('#clear').addEventListener('click', () => {
  if (!confirm('清空這一頁的勾選、填寫與計時？指南內容不會受影響。')) return;
  try { localStorage.removeItem(KEY); } catch { /* private mode */ }
  location.reload();
});

// ------------------------------------------------------------------ chrome

const links = new Map($$('.toc a').map((a) => [a.dataset.target, a]));
const marks = [$('#top'), ...$$('.sec')];

/* Keep the marked link inside the contents list without ever scrolling the
   page. `scrollIntoView` scrolls the nearest scrollable ancestor — the
   document, whenever the list is not itself scrolling — and inherits smooth
   scrolling, so on a handler that runs on every scroll event it makes the page
   drift on its own. That bug was fixed across the other pages here; this one
   is written with the fix from the start. */
function keepLinkVisible(a) {
  const box = a.closest('#nav');
  if (!box || box.scrollHeight <= box.clientHeight) return;
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

  /* How far down. The contents list answers this on a wide screen; on a phone
     it is behind the ☰, and the page runs to twenty-odd screens. */
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max > 0 ? Math.min(100, (scrollY / max) * 100) : 0}%`;

  /* The ☰ is mobile-only, so it can carry the section number without costing
     anything on a wide screen: where you are, next to the way to move. */
  const sec = here.classList && here.classList.contains('sec') ? here : null;
  navToggleLabel.textContent = sec ? $('.sec-n', sec).textContent : '目錄';

  toTop.hidden = scrollY < innerHeight * 1.5;
}

markHere();
addEventListener('scroll', markHere, { passive: true });
addEventListener('resize', markHere, { passive: true });

toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

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

const panel = $('#panel');
const panelToggle = $('#panelToggle');

function setPanel(open) {
  panel.hidden = !open;
  panelToggle.setAttribute('aria-expanded', String(open));
}

panelToggle.addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeNav();
  setPanel(false);
});
