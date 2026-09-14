/* 國際商業期刊導讀 — the contents page.

   Everything here is generated from course.js, and laid out like the front
   page of a business publication: the newest reading leads, full width, and
   the rest follow as stories — photograph, number, serif headline, summary,
   source. A built reading links to its page; one listed but not yet written
   keeps its place, dimmed, with no picture.

   Readings are numbered in the order course.js lists them and shown newest
   first, so a reading's number never changes when a new one arrives.

   No teacher panel and no 🔊 here. This page is navigation; the readings are
   where the work happens.
*/

const $ = (sel, root = document) => root.querySelector(sel);

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

/* One story. The order inside it is the press's: label, headline, summary,
   source — the number doing the label's job. */
function readingCard(r, i, lead) {
  const n = i + 1;
  const title = r.built
    ? `<a href="${text(r.id)}/"><span class="en">${text(r.en)}</span>
         <span class="zh">${text(r.zh)}</span></a>`
    : `<span class="en">${text(r.en)}</span><span class="zh">${text(r.zh)}</span>`;

  // The photograph is decoration here — the headline right beside it says
  // what the story is — so it carries no alt text of its own.
  const pic = r.built && r.photo
    ? `<img class="reading-pic" src="${text(r.id)}/${text(r.photo)}" alt=""
         width="1600" height="900" loading="lazy" decoding="async">`
    : '';

  return `
    <li class="reading-card${r.built ? '' : ' todo'}${lead ? ' lead-story' : ''}">
      ${pic}
      <div class="reading-body">
        <p class="reading-n">No. ${n}<em>第 ${n} 篇</em></p>
        <h3>${title}</h3>
        <p class="lesson-blurb">${text(r.blurbEn)}<em>${text(r.blurbZh)}</em></p>
        ${r.sourceEn ? `<p class="reading-src">${text(r.sourceEn)}<em>${text(r.sourceZh || '')}</em></p>` : ''}
        ${r.built ? '' : '<span class="soon">Content to come 內容待補</span>'}
      </div>
    </li>`;
}

function buildCover() {
  const built = COURSE.readings.filter((r) => r.built).length;
  return `
    <header class="cover" id="top">
      <p class="kicker">${text(COURSE.kicker)}</p>
      <h1><span class="en">${text(COURSE.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(COURSE.titleZh)}</span></h1>
      ${pair(COURSE.intro.en, COURSE.intro.zh, 'cover-intro')}
      <p class="part-count">${built} ${built === 1 ? 'reading' : 'readings'}
        <em>共 ${built} 篇</em></p>
    </header>`;
}

const doc = $('#doc');
doc.appendChild(el(buildCover()));

// Newest first on the page; the numbers stay those of the list order. The lead
// story is the newest reading that is actually written.
const order = COURSE.readings.map((r, i) => ({ r, i })).reverse();
const leadAt = order.findIndex(({ r }) => r.built);

doc.appendChild(el(`
  <section class="readings" aria-labelledby="h-readings">
    <h2 class="readings-head" id="h-readings">All readings<em>全部文章</em></h2>
    <ul class="reading-grid">
      ${order.map(({ r, i }, k) => readingCard(r, i, k === leadAt)).join('')}
    </ul>
  </section>`));

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`bj.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`bj.${k}`, v); } catch { /* private mode */ } },
};

const zhToggle = $('#zhToggle');

/* The same key the readings use, so the 中文 switch carries across the whole
   series rather than being reset by every link. */
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
