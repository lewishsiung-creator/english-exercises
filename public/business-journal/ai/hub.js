/* AI 實務應用交流 — the list of discussions.

   Generated from sessions.js. Newest first, so the list page never needs
   editing when a discussion is added; the numbers come from the order in the
   map, so an older write-up's number never moves.

   The address of this page is the one worth sharing: send it once and the
   reader always finds the newest write-up at the top.
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

const doc = $('#doc');

doc.appendChild(el(`
  <header class="cover" id="top">
    <p class="kicker"><a class="kicker-up" href="../">國際商業期刊導讀</a>
      <span class="kicker-sep" aria-hidden="true">·</span> ${text(AI_NOTES.kicker)}</p>
    <h1 class="ai-h1">${text(AI_NOTES.titleZh)}<span lang="en">${text(AI_NOTES.title)}</span></h1>
    <p class="ai-lead">${text(AI_NOTES.intro.zh)}</p>
  </header>`));

const built = AI_NOTES.sessions.filter((s) => s.built);
const order = AI_NOTES.sessions.map((s, i) => ({ s, i })).reverse();

doc.appendChild(el(`
  <section class="ai-sec" aria-labelledby="h-list">
    <h2 class="ai-part" id="h-list"><span class="ai-part-t">全部記錄<em lang="en">All write-ups</em></span></h2>
    <ol class="ses-list">
      ${order.map(({ s, i }) => `
        <li class="ses${s.built ? '' : ' todo'}">
          <p class="ses-n">No. ${i + 1}<span>${text(s.dateZh)}</span></p>
          <h3>${s.built
            ? `<a href="${text(s.id)}/">${text(s.titleZh)}<em lang="en">${text(s.titleEn)}</em></a>`
            : `${text(s.titleZh)}<em lang="en">${text(s.titleEn)}</em>`}</h3>
          <p class="ses-blurb">${text(s.blurbZh)}</p>
          <p class="ses-who">${s.people.map((p) => `<span>${text(p)}</span>`).join('')}
            <span class="ses-min">約 ${text(s.minutes)} 分鐘</span></p>
          ${s.built && s.english ? `
            <p class="ses-also"><a href="${text(s.id)}/english/">英文口說複習教材<em lang="en">Speaking review</em></a></p>` : ''}
          ${s.built ? '' : '<span class="soon">尚未整理</span>'}
        </li>`).join('')}
    </ol>
    <p class="ai-foot">目前共 ${built.length} 篇。之後每次討論會再往上加。</p>
  </section>`));
