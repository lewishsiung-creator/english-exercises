/* Basic English Grammar — the contents page.

   Everything here is generated from book.js. A chapter that is built links to
   its page and lists its sections as anchors into it; a chapter that is not
   built keeps its card, dimmed and dashed, with its sections still listed —
   the map is the point, and a contents page that only shows finished work is
   not a map of the book.

   No teacher panel and no 🔊 here. This page is navigation; the lessons are
   the chapters.
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

function pair(en, zh, cls = '') {
  return `
    <div class="pair ${cls}" data-zh>
      <p class="en">${text(en)}<button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(zh)}</p>
    </div>`;
}

function chapterCard(c) {
  const head = c.built
    ? `<a href="${c.id}/"><span class="en">${text(c.en)}</span>
         <span class="zh">${text(c.zh)}</span></a>`
    : `<span class="en">${text(c.en)}</span><span class="zh">${text(c.zh)}</span>`;

  /* The row carries the grid, not the <li>, because in a built chapter the row
     is a link wrapping both cells — put the grid on the <li> and the link
     becomes a single child and the columns collapse. */
  const secs = c.sections.map((s) => {
    const inner = `<span class="n">${text(s.n)}</span><span class="t">${text(s.en)}</span>`;
    return `<li>${c.built
      ? `<a class="row" href="${c.id}/#s${text(s.n)}">${inner}</a>`
      : `<span class="row">${inner}</span>`}</li>`;
  }).join('');

  return `
    <li class="chap-card${c.built ? '' : ' todo'}">
      <div class="chap-head">
        <span class="chap-n">CH ${c.n}</span>
        <h2>${head}</h2>
      </div>
      <ul class="chap-secs">${secs}</ul>
      ${c.built ? '' : '<span class="soon">Content to come 內容待補</span>'}
    </li>`;
}

function shelfCard(x) {
  const head = x.built
    ? `<a href="${x.id}/"><span class="en">${text(x.en)}</span>
         <span class="zh">${text(x.zh)}</span></a>`
    : `<span class="en">${text(x.en)}</span><span class="zh">${text(x.zh)}</span>`;

  return `
    <li class="shelf-card${x.built ? '' : ' todo'}">
      <h3>${head}</h3>
      <p><span class="en">${text(x.note.en)}</span>
        <span class="zh">${text(x.note.zh)}</span></p>
      ${x.built ? '' : '<span class="soon">Content to come 內容待補</span>'}
    </li>`;
}

const doneChapters = BOOK.chapters.filter((c) => c.built).length;

const page = `
  <div>
    <header class="cover" id="top">
      <p class="kicker">${text(BOOK.kicker)}</p>
      <h1><span class="en">${text(BOOK.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(BOOK.titleZh)}</span></h1>
      ${pair(
        'Fifteen chapters, from the forms of be to making comparisons. Each section explains one point, shows the pattern, and gives you something to get wrong — English leads, and the Chinese is one tap away.',
        '十五章，從 be 動詞的變化到比較的說法。每一節說明一個重點、呈現句型，再給你可以練錯的題目——英文在前，中文只差一個「中」。',
        'hub-lead'
      )}
    </header>

    <p class="count">${doneChapters} of ${BOOK.chapters.length} chapters written ·
      ${BOOK.count} sections in the book 全書 ${BOOK.count} 節</p>

    <ul class="chap-grid">
      ${BOOK.chapters.map(chapterCard).join('')}
    </ul>

    <section class="shelf">
      <h2 class="label"><span class="en">Reference</span><span class="zh">查閱用</span></h2>
      <ul class="shelf-grid">
        ${BOOK.extras.map(shelfCard).join('')}
      </ul>
    </section>

    <p class="source">${text(BOOK.sourceNote.en)}
      <span class="zh">${text(BOOK.sourceNote.zh)}</span></p>
  </div>`;

$('#doc').appendChild(el(page));

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`beg.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`beg.${k}`, v); } catch { /* private mode */ } },
};

const zhToggle = $('#zhToggle');

/* The 中文 setting is shared with the chapter pages — it is a device setting,
   and a teacher who turns Chinese on for a client should not have to turn it
   on again on every chapter. */
function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
  store.set('zh', on ? '1' : '0');
}

setAllZh(store.get('zh', '0') === '1');
zhToggle.addEventListener('click', () => setAllZh(!document.body.classList.contains('zh-all')));

$('#doc').addEventListener('click', (e) => {
  const chip = e.target.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    let host = chip.parentElement;
    while (host && !host.querySelector('.zh')) host = host.parentElement;
    if (host) host.classList.toggle('open');
    return;
  }
  const line = e.target.closest('[data-zh]');
  if (line && !e.target.closest('button') && !e.target.closest('a')) line.classList.toggle('open');
});
