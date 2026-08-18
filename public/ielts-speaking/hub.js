/* IELTS Speaking — the contents page.

   Everything here is generated from course.js. The three parts of the test are
   the three sections; a lesson that is built links to its page, and a lesson
   that is not keeps its card, dimmed and dashed, so the contents page is a map
   of the course rather than a list of what happens to be finished.

   No teacher panel and no 🔊 here. This page is navigation; the lessons are
   where the work happens.
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
  return `
    <div class="pair ${cls}" data-zh>
      <p class="en">${text(en)}<button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(zh)}</p>
    </div>`;
}

function lessonCard(l) {
  const title = l.built
    ? `<a href="${text(l.id)}/"><span class="en">${text(l.en)}</span>
         <span class="zh">${text(l.zh)}</span></a>`
    : `<span class="en">${text(l.en)}</span><span class="zh">${text(l.zh)}</span>`;

  return `
    <li class="lesson-card${l.built ? '' : ' todo'}">
      <h3>${title}</h3>
      <p class="lesson-blurb">${text(l.blurbEn)}<em>${text(l.blurbZh)}</em></p>
      ${l.built ? '' : '<span class="soon">Content to come 內容待補</span>'}
    </li>`;
}

function partSection(p) {
  const lessons = COURSE.lessons.filter((l) => l.part === p.id);
  const built = lessons.filter((l) => l.built).length;

  return `
    <section class="part" id="${text(p.id)}" aria-labelledby="h-${text(p.id)}">
      <h2 class="part-head" id="h-${text(p.id)}">
        <span class="part-n">${text(p.label)}</span>
        <span class="titles"><span class="en">${text(p.en)}</span>
          <button class="zh-chip" title="顯示中文">中</button>
          <span class="zh">${text(p.zh)}</span></span>
        <span class="part-mins">${text(p.minutes)}</span>
      </h2>

      <div class="part-brief">
        <p class="part-what">${text(p.whatEn)}<em>${text(p.whatZh)}</em></p>
        <p class="part-ask"><span class="part-ask-lab">What it asks of you 它要你做的事</span>
          ${text(p.askEn)}<em>${text(p.askZh)}</em></p>
      </div>

      <p class="part-count">${built} of ${lessons.length} written
        <em>已完成 ${built} / ${lessons.length}</em></p>

      <ul class="lesson-grid">${lessons.map(lessonCard).join('')}</ul>
    </section>`;
}

function buildCover() {
  return `
    <header class="cover" id="top">
      <p class="kicker">${text(COURSE.kicker)}</p>
      <h1><span class="en">${text(COURSE.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(COURSE.titleZh)}</span></h1>
      ${pair(COURSE.intro.en, COURSE.intro.zh, 'cover-intro')}

      <nav class="part-jump" aria-label="The three parts">
        ${COURSE.parts.map((p) => `
          <a href="#${text(p.id)}"><span class="n">${text(p.label)}</span>
            <span class="t"><span class="en">${text(p.en)}</span>
            <span class="zh">${text(p.zh)}</span></span></a>`).join('')}
      </nav>
    </header>`;
}

const doc = $('#doc');
doc.appendChild(el(buildCover()));
COURSE.parts.forEach((p) => doc.appendChild(el(partSection(p))));

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`ielts.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`ielts.${k}`, v); } catch { /* private mode */ } },
};

const zhToggle = $('#zhToggle');

/* The same key the lesson pages use, so the 中文 switch carries across the
   whole course rather than being reset by every link. */
function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
  store.set('zh', on ? '1' : '0');
}

setAllZh(store.get('zh', '0') === '1');
zhToggle.addEventListener('click', () => setAllZh(!document.body.classList.contains('zh-all')));

doc.addEventListener('click', (e) => {
  const chip = e.target.closest('.zh-chip');
  if (chip) {
    e.preventDefault();
    let host = chip.parentElement;
    while (host && !host.querySelector('.zh')) host = host.parentElement;
    if (host) host.classList.toggle('open');
    return;
  }
  const line = e.target.closest('.pair[data-zh]');
  if (line && !e.target.closest('button, a')) line.classList.toggle('open');
});
