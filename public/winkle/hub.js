/* The contents page. Reads COURSE from course.js and draws one card per page.

   Deliberately plain: no teacher panel, no voice, no clocks. This page is a
   door, and everything that behaves lives behind it. A page that is not built
   yet is a dashed card that does not link anywhere — the hub is a map of the
   work, not a list of what is finished.
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

function card(p) {
  const title = p.built
    ? `<a href="${text(p.href)}"><span class="en">${text(p.en)}</span>
         <span class="zh">${text(p.zh)}</span></a>`
    : `<span class="en">${text(p.en)}</span><span class="zh">${text(p.zh)}</span>`;

  return `
    <li class="lesson-card${p.built ? '' : ' todo'}">
      <h3>${title}</h3>
      <p class="lesson-blurb">${text(p.blurbEn)}<em>${text(p.blurbZh)}</em></p>
      <span class="soon">${text(p.noteEn)} · ${text(p.noteZh)}</span>
    </li>`;
}

document.title = `${COURSE.title} · ${COURSE.titleZh}`;

$('#doc').appendChild(el(`
  <div>
    <header class="cover" id="top">
      <p class="kicker">${text(COURSE.kicker)}</p>
      <h1><span class="en">${text(COURSE.title)}</span>
        <span class="zh" style="display:block">${text(COURSE.titleZh)}</span></h1>
      <div class="cover-intro">
        <p class="en">${text(COURSE.intro.en)}</p>
        <p class="zh" style="display:block">${text(COURSE.intro.zh)}</p>
      </div>
    </header>
    <ul class="lesson-grid">${COURSE.pages.map(card).join('')}</ul>
  </div>`));
