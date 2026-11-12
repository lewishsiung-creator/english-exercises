/* 國際商業期刊導讀 — the contents page.

   Everything here is generated from course.js, and laid out like the front
   page of a business publication: the newest reading leads, full width, and
   the rest follow as stories — photograph, number, serif headline, summary,
   source. A built reading links to its page; one listed but not yet written
   keeps its place, dimmed, with no picture.

   Readings are numbered in the order course.js lists them and shown newest
   first, so a reading's number never changes when a new one arrives.

   No teacher panel and no 🔊 here. This page is navigation; the readings are
   where the work happens — the standing note at the foot names the teacher
   panel without containing one.
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

/* ---- 重點複習 · the standing note at the foot of the contents page ----

   The fourth form of a lesson, named on the page that lists the lessons. Two
   readers arrive at it: a teacher who has never opened the panel, and a student
   who was sent a review link and came back up here to find out what it was.
   Both get an answer, and the example link lets them stop reading and look.

   It is furniture, not a fourth story — a hairline, no fill, no box. The page
   has exactly one 3px rule and it belongs to "All readings"; a second one here
   would make a note at the foot shout as loudly as the stories.

   Both languages are always visible, like the story blurbs above and unlike the
   cover's intro. The rule is Lewis's own, in style.css: lines nobody is being
   tested on — scaffolding, hints, navigation — stay bilingual at all times. A
   note whose Chinese has to be tapped before it can be understood has not been
   read, and the point of this one is to tell you something you did not know was
   there.

   The panel is named in words rather than by its 👩‍🏫 glyph. At 15px — and at
   12px on the Chinese line — a ZWJ emoji is a smudge rather than a picture of
   anything, it would be the only emoji on a page modelled on a newspaper, and
   spelling it out keeps the contents page from printing a step-by-step route to
   a drawer whose first button is "Reveal every answer in the lesson". A teacher
   standing in a reading cannot miss the control; a student skimming the
   homepage is not handed a map to it.

   The copy lives in this object rather than inside the template below, so it
   can be edited without reading any code. `example` is the reading whose
   finished sheet the link opens. It is pinned, not derived from the newest
   reading, because the note names collocations and gap-fill key sentences and
   only a reading with `match` and `gap` blocks has them — No. 3 has neither, so
   a link that always pointed at the latest reading would promise two things the
   sheet it opened could not show. Point it at any built id in course.js whose
   sheet carries the parts this copy names. */
const NOTE = {
  headEn: 'Key review',
  headZh: '重點複習',

  whatEn: 'What a student keeps after the lesson: one page of the language it '
    + 'taught — the words, the collocations, the key sentences with the answers '
    + 'filled in. Every line shows its Chinese, and the page saves as a PDF of '
    + 'its own.',
  whatZh: '課後留給學員複習的一頁：把這堂課教過的語言整理起來——單字、搭配詞、'
    + '把答案填回空格的關鍵句。每一行都附上中文，整頁也可以直接下載成 PDF。',

  howEn: 'The teacher ticks what the lesson covered in the reading’s teacher '
    + 'panel and sends the link. Nothing is stored — the ticks travel in the '
    + 'link itself, and each reading shows only the parts it has.',
  howZh: '老師在導讀頁的教師面板勾選當天上到的範圍，再把連結傳給學員。'
    + '不會儲存任何紀錄——勾選的內容就寫在連結裡；每一篇的複習單也只會列出那一篇有的段落。',

  seeEn: 'See one',
  seeZh: '看範例',
  example: 'better-day',
};

function buildNote() {
  // The example only appears if that reading is in the map and written. A
  // pinned id could otherwise outlive the reading it names and link to a 404.
  const eg = COURSE.readings.find((r) => r.id === NOTE.example && r.built);
  return `
    <aside class="hub-note" aria-labelledby="h-note">
      <h2 class="hub-note-head" id="h-note">${text(NOTE.headEn)}<em>${text(NOTE.headZh)}</em></h2>
      <p class="hub-note-p">${text(NOTE.whatEn)}<em>${text(NOTE.whatZh)}</em></p>
      <p class="hub-note-p hub-note-how">${text(NOTE.howEn)}<em>${text(NOTE.howZh)}</em></p>
      ${eg ? `<p class="hub-note-eg"><a href="${text(eg.id)}/#review">${text(NOTE.seeEn)}<em>${text(NOTE.seeZh)}</em></a></p>` : ''}
    </aside>`;
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

// After the stories, so nothing above it moves and a reader looking for a
// reading never scrolls past an explanation to reach one.
doc.appendChild(el(buildNote()));

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
