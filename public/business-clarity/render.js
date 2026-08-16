/* Renders WORKSHEET (content.js) into the page.

   The worksheet is read on screen rather than filled in, so nothing here is a
   form control: blanks, checkboxes and answer spaces are drawn, not typed
   into. That keeps the page identical on screen and on paper, and means a
   half-finished session can never be lost by a stray refresh. */

const $ = (sel) => document.querySelector(sel);

/* Escape first, then turn runs of underscores — ASCII "______" or the
   fullwidth "＿＿" used in the Chinese lines — into a drawn blank whose width
   follows the length written in content.js. */
function text(s) {
  const escaped = String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return escaped.replace(/_{2,}|＿{1,}/g, (run) => {
    const width = Math.max(4, Math.round(run.length * 0.9));
    return `<span class="blank" style="--w:${width}"></span>`;
  });
}

/* Every visible string is a bilingual pair, so this is the workhorse. */
function pair(en, zh, cls = '') {
  return `<p class="pair ${cls}"><span class="en">${text(en)}</span>` +
         (zh ? `<span class="zh">${text(zh)}</span>` : '') + '</p>';
}

/* A correction or "more natural version" from the lesson. Optional
   everywhere it appears, hence the empty string for the common case. */
function tip(t) {
  return t ? `<span class="item-tip">${text(t)}</span>` : '';
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// ---------------------------------------------------------------- blocks

const BLOCKS = {
  sub: (b) => `
    <h3 class="sub">
      ${b.letter ? `<span class="sub-letter">${b.letter}</span>` : ''}
      <span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span>
    </h3>`,

  label: (b) => `
    <h4 class="label"><span class="en">${text(b.en)}</span>
    <span class="zh">${text(b.zh)}</span></h4>`,

  lead: (b) => `<div class="lead">${pair(b.en, b.zh)}</div>`,

  /* Plain narration — what was said in the lesson, as opposed to language to
     learn. Often English only, because that is how the notes were taken. */
  para: (b) => `<div class="para">${pair(b.en, b.zh)}</div>`,

  fixes: (b) => `
    <div class="fixes">
      <h4 class="label"><span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span></h4>
      <ul class="fix-list">
        ${b.items.map((i) => `
          <li class="fix">
            <span class="fix-from">${text(i.from)}</span>
            <span class="fix-arrow" aria-hidden="true">→</span>
            <span class="fix-to"><span class="en">${text(i.to)}</span>
            ${i.also ? `<span class="en">${text(i.also)}</span>` : ''}
            ${i.zh ? `<span class="zh">${text(i.zh)}</span>` : ''}</span>
          </li>`).join('')}
      </ul>
    </div>`,

  ask: (b) => `
    <div class="ask">
      ${b.tagEn ? `<p class="tag"><span class="en">${text(b.tagEn)}</span>
        <span class="zh">${text(b.tagZh)}</span></p>` : ''}
      <p class="q"><span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span></p>
      <div class="rule"></div>
      <div class="rule"></div>
    </div>`,

  eg: (b) => `
    <div class="eg">
      <p><span class="tiny">Examples 例如</span></p>
      ${pair(b.en, b.zh)}
    </div>`,

  write: (b) => `
    <div class="write ${b.big ? 'write-big' : ''}">
      <h4 class="label"><span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span></h4>
      <div class="ruled"></div>
    </div>`,

  fill: (b) => `
    <div class="fill">
      <h4 class="label"><span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span></h4>
      <ul class="fill-list">
        ${b.lines.map((l) => `<li>${text(l)}</li>`).join('')}
      </ul>
    </div>`,

  check: (b) => `
    <div class="check">
      ${b.tagEn ? `<p class="tag"><span class="en">${text(b.tagEn)}</span>
        <span class="zh">${text(b.tagZh)}</span></p>` : ''}
      <p class="q"><span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span></p>
      <ul class="opts">
        ${b.items.map((i) => `
          <li><span class="box"></span>
            <span class="en">${text(i.en)}</span>
            <span class="zh">${text(i.zh)}</span></li>`).join('')}
      </ul>
    </div>`,

  rank: (b) => `
    <div class="check">
      <p class="q"><span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span></p>
      <p class="hint"><span class="en">${text(b.hintEn)}</span>
      <span class="zh">${text(b.hintZh)}</span></p>
      <ul class="opts opts-rank">
        ${b.items.map((i) => `
          <li><span class="slot"></span>
            <span class="en">${text(i.en)}</span>
            <span class="zh">${text(i.zh)}</span></li>`).join('')}
      </ul>
    </div>`,

  phrases: (b) => `
    <div class="phrases">
      <h4 class="label">
        ${b.letter ? `<span class="sub-letter">${b.letter}</span>` : ''}
        <span class="en">${text(b.en)}</span>
        <span class="zh">${text(b.zh)}</span></h4>
      <dl class="phrase-list ${b.numbered ? 'numbered' : ''}">
        ${b.items.map((i) => `
          <div class="phrase">
            <dt>${text(i.en)}${tip(i.tip)}</dt>
            <dd>${text(i.zh)}</dd>
          </div>`).join('')}
      </dl>
    </div>`,

  table: (b) => `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>${b.cols.map((c) => `
            <th><span class="en">${text(c.en)}</span>
            <span class="zh">${text(c.zh)}</span></th>`).join('')}</tr>
        </thead>
        <tbody>
          ${b.rows.map((r) => `
            <tr>
              <th scope="row"><span class="en">${text(r.en)}</span>
              <span class="zh">${text(r.zh)}</span></th>
              <td></td><td></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`,

  note: (b) => `
    <aside class="note">
      <h4><span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span></h4>
      ${pair(b.bodyEn, b.bodyZh)}
    </aside>`,

  bullets: (b) => `
    <div class="bullets">
      ${b.label ? `<h4 class="label"><span class="en">${text(b.label)}</span>
        <span class="zh">${text(b.labelZh)}</span></h4>` : ''}
      ${b.en ? pair(b.en, b.zh, 'bullets-intro') : ''}
      <${b.ordered ? 'ol' : 'ul'}>
        ${b.items.map((i) => `
          <li><span class="en">${text(i.en)}</span>
          <span class="zh">${text(i.zh)}</span>${tip(i.tip)}</li>`).join('')}
      </${b.ordered ? 'ol' : 'ul'}>
    </div>`,

  /* The class notes hang off their own divider so the printed worksheet and
     the record of what was actually said stay visibly separate. */
  part: (b) => `
    <div class="part">
      <h3>
        <span class="en">${text(b.en)}</span>
        <span class="zh">${text(b.zh)}</span>
      </h3>
      <p class="part-sub"><span class="en">${text(b.subEn)}</span>
      <span class="zh">${text(b.subZh)}</span></p>
    </div>`,

  statements: (b) => `
    <div class="statements">
      <h4 class="label"><span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span></h4>
      <ul class="stmt-list">
        ${b.items.map((i) => `
          <li><span class="en">${text(i.en)}</span>
          ${i.zh ? `<span class="zh">${text(i.zh)}</span>` : ''}${tip(i.tip)}</li>`).join('')}
      </ul>
    </div>`,

  points: (b) => `
    <div class="steps points">
      <h4 class="label"><span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span></h4>
      <ol>
        ${b.items.map((i) => `
          <li>
            <p class="step-name"><span class="en">${text(i.en)}</span>
            <span class="zh">${text(i.zh)}</span></p>
            ${i.bodyEn ? `<p class="point-body"><span class="en">${text(i.bodyEn)}</span>
              ${i.bodyZh ? `<span class="zh">${text(i.bodyZh)}</span>` : ''}</p>` : ''}
          </li>`).join('')}
      </ol>
    </div>`,

  steps: (b) => `
    <div class="steps">
      <h4 class="label"><span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span></h4>
      <ol>
        ${b.items.map((i) => `
          <li>
            <p class="step-name"><span class="en">${text(i.en)}</span>
            <span class="zh">${text(i.zh)}</span></p>
            <p class="step-line">${text(i.line)}</p>
          </li>`).join('')}
      </ol>
    </div>`,

  /* Dated session pages hanging under this section. One lesson's write-up can
     run longer than the worksheet section itself, so each gets its own page
     rather than being stacked inline. */
  sessions: (b) => `
    <div class="sessions">
      <h4 class="label"><span class="en">${text(b.en)}</span>
      <span class="zh">${text(b.zh)}</span></h4>
      <ul class="session-list">
        ${b.items.map((i) => `
          <li><a href="${i.href}">
            <span class="session-date">${text(i.date)}</span>
            <span class="session-t"><span class="en">${text(i.en)}</span>
            <span class="zh">${text(i.zh)}</span></span>
            <span class="session-go" aria-hidden="true">→</span>
          </a></li>`).join('')}
      </ul>
    </div>`,
};

// ---------------------------------------------------------------- build

/* A dated session page. Same renderer, same stylesheet — it differs from the
   worksheet only in having no name fields, no purpose and no feedback band,
   and in carrying a way back to the section it hangs under. */
function buildNotesCover() {
  const p = WORKSHEET.parent;
  return `
    <header class="cover cover-notes" id="top">
      <p class="kicker">
        <a class="back" href="${p.href}">← <span class="en">${text(p.en)}</span>
        <span class="zh">${text(p.zh)}</span></a>
      </p>
      <h1>
        <span class="en">${text(WORKSHEET.title)}</span>
        <span class="zh">${text(WORKSHEET.titleZh)}</span>
      </h1>
      ${WORKSHEET.intro ? BLOCKS.note(WORKSHEET.intro) : ''}
    </header>`;
}

function buildCover() {
  const p = WORKSHEET.purpose;
  return `
    <header class="cover" id="top">
      <p class="kicker">1-on-1 Business English · 一對一商業英文</p>
      <h1>
        <span class="en">${text(WORKSHEET.title)}</span>
        <span class="zh">${text(WORKSHEET.titleZh)}</span>
      </h1>

      <dl class="fields">
        ${WORKSHEET.fields.map((f) => `
          <div class="field">
            <dt>${text(f.en)} <span class="zh">${text(f.zh)}</span></dt>
            <dd>${f.value ? text(f.value) : '<span class="blank" style="--w:14"></span>'}</dd>
          </div>`).join('')}
      </dl>

      <div class="purpose">
        <h2><span class="en">Purpose</span> <span class="zh">使用目的</span></h2>
        ${pair(p.en, p.zh)}
        ${pair(p.introEn, p.introZh, 'bullets-intro')}
        <ul class="goals">
          ${p.items.map((i) => `
            <li><span class="en">${text(i.en)}</span>
            <span class="zh">${text(i.zh)}</span></li>`).join('')}
        </ul>
      </div>
    </header>`;
}

function buildSection(s) {
  const blocks = s.blocks.map((b) => {
    const fn = BLOCKS[b.t];
    if (!fn) throw new Error(`Unknown block type "${b.t}" in section ${s.id}`);
    return fn(b);
  }).join('');

  return `
    <section class="section" id="${s.id}" aria-labelledby="h-${s.id}">
      <h2 class="section-head" id="h-${s.id}">
        <span class="n">${s.n}</span>
        <span class="titles">
          <span class="en">${text(s.en)}</span>
          <span class="zh">${text(s.zh)}</span>
        </span>
      </h2>
      ${blocks}
    </section>`;
}

function buildFeedback() {
  const f = WORKSHEET.feedback;
  return `
    <section class="section feedback" id="feedback" aria-labelledby="h-feedback">
      <h2 class="section-head" id="h-feedback">
        <span class="n">✓</span>
        <span class="titles">
          <span class="en">${text(f.en)}</span>
          <span class="zh">${text(f.zh)}</span>
        </span>
      </h2>
      ${f.bands.map((b) => `
        <div class="band">
          <h4 class="label"><span class="en">${text(b.en)}</span>
          <span class="zh">${text(b.zh)}</span></h4>
          <ul class="opts">
            ${b.items.map((i) => `
              <li><span class="box"></span>
                <span class="en">${text(i.en)}</span>
                <span class="zh">${text(i.zh)}</span></li>`).join('')}
          </ul>
          <p class="tiny">Comments 評語</p>
          <div class="rule"></div>
          <div class="rule"></div>
        </div>`).join('')}

      <div class="write write-goal">
        <h4 class="label"><span class="en">${text(f.goal.en)}</span>
        <span class="zh">${text(f.goal.zh)}</span></h4>
        <div class="ruled"></div>
      </div>
    </section>`;
}

function buildNav() {
  const links = WORKSHEET.sections.map((s) => `
    <li><a href="#${s.id}" data-target="${s.id}">
      <span class="n">${s.n}</span>
      <span class="t"><span class="en">${text(s.en)}</span>
      <span class="zh">${text(s.zh)}</span></span>
    </a></li>`).join('');

  const top = WORKSHEET.purpose
    ? `<li><a href="#top" data-target="top">
         <span class="n">·</span>
         <span class="t"><span class="en">Purpose</span>
         <span class="zh">使用目的</span></span>
       </a></li>`
    : `<li><a href="#top" data-target="top">
         <span class="n">·</span>
         <span class="t"><span class="en">${text(WORKSHEET.title)}</span>
         <span class="zh">${text(WORKSHEET.titleZh)}</span></span>
       </a></li>`;

  const feedback = WORKSHEET.feedback
    ? `<li><a href="#feedback" data-target="feedback">
         <span class="n">✓</span>
         <span class="t"><span class="en">Teacher Feedback</span>
         <span class="zh">教師回饋</span></span>
       </a></li>`
    : '';

  return `
    <nav class="toc" aria-label="Sections">
      <p class="toc-head">Contents 目錄</p>
      <ul>${top}${links}${feedback}</ul>
    </nav>`;
}

// ---------------------------------------------------------------- mount

document.title = `${WORKSHEET.title} · ${WORKSHEET.titleZh}`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(WORKSHEET.purpose ? buildCover() : buildNotesCover()));
WORKSHEET.sections.forEach((s) => doc.appendChild(el(buildSection(s))));
if (WORKSHEET.feedback) doc.appendChild(el(buildFeedback()));

/* A session page starts life empty and is filled in after the lesson. Saying
   so beats an unexplained blank. */
if (!WORKSHEET.sections.length) {
  doc.appendChild(el(`
    <p class="empty"><span class="en">No notes written up yet.</span>
    <span class="zh">本次課堂筆記尚未整理。</span></p>`));
}

/* Highlight the section being read. rootMargin pulls the trip-line up to just
   below the sticky header so a heading counts as "current" once it reaches
   the top of the screen, not when it first peeks in from the bottom. */
const links = new Map(
  [...document.querySelectorAll('.toc a')].map((a) => [a.dataset.target, a])
);

const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((a) => a.classList.remove('here'));
    const a = links.get(e.target.id);
    if (a) {
      a.classList.add('here');
      // Keep the active link visible when the list is longer than the sidebar.
      a.scrollIntoView({ block: 'nearest' });
    }
  });
}, { rootMargin: '-72px 0px -70% 0px' });

[$('#top'), ...document.querySelectorAll('.section')].forEach((s) => spy.observe(s));

// Mobile: the contents list collapses into a button in the header.
const navToggle = $('#navToggle');
navToggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

function closeNav() {
  document.body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

$('#nav').addEventListener('click', (e) => {
  if (e.target.closest('a')) closeNav();
});
$('.nav-scrim').addEventListener('click', closeNav);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});
