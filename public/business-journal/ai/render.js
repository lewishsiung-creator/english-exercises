/* AI 實務應用交流 — one write-up, laid out.

   Shared by every discussion folder. It reads SESSION from that folder's
   content.js and AI_NOTES from ../sessions.js, and builds the page.

   This is not the lessons' renderer and deliberately shares none of it. A
   write-up has no steps, no exercises, no answers to reveal, so it needs no
   teacher panel, no presentation mode, no two PDFs and no review sheet — the
   whole page already is the review sheet. What it borrows from the series is
   the look: ../style.css, and the house layers above it.

   No 中文 switch either. The body is Chinese and stays that way; the only
   English on the page is the name of each idea, which is the part worth
   keeping in English because it is what the class took away.
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

/* A discussion's number is its position in the map, like a reading's. It is
   read rather than stored so that the two can never disagree. */
const N = AI_NOTES.sessions.findIndex((s) => s.id === SESSION.id) + 1;
if (!N) throw new Error(`${SESSION.id} is not in sessions.js`);

const doc = $('#doc');

// ------------------------------------------------------------------ cover

doc.appendChild(el(`
  <header class="cover" id="top">
    <p class="kicker"><a class="kicker-up" href="../">${text(AI_NOTES.titleZh)}</a>
      <span class="kicker-sep" aria-hidden="true">·</span> No. ${N}</p>
    <h1 class="ai-h1">${text(SESSION.titleZh)}<span lang="en">${text(SESSION.titleEn)}</span></h1>
    <p class="ai-meta">
      <span>${text(SESSION.classZh)}</span>
      <span>${text(SESSION.dateZh)}</span>
      <span>約 ${text(SESSION.minutes)} 分鐘</span>
      <span>${SESSION.people.map(text).join('、')}</span>
    </p>
    <p class="ai-lead">${text(SESSION.leadZh)}</p>
    <p class="ai-lead ai-lead-soft">${text(SESSION.lead2Zh)}</p>
    ${AI_NOTES.sessions[N - 1].english ? `
      <p class="en-back en-go"><a href="english/">英文口說複習教材<em lang="en">Speaking review</em></a>
        <span>做得好的地方、課堂原句與自然說法、口說練習與作業</span></p>` : ''}
  </header>`));

/* Each part gets the same head, so the page reads as one document rather than
   as five stacked widgets. */
function part(n, zh, en) {
  return `<h2 class="ai-part" id="p${n}"><span class="ai-part-n">${n}</span>
    <span class="ai-part-t">${text(zh)}<em lang="en">${text(en)}</em></span></h2>`;
}

// ------------------------------------------------- the ladder, as the frame

/* The four levels open the write-up rather than closing it, at Lewis's
   instruction. They are the frame the rest hangs on: a reader who meets them
   first knows what the eight points are examples OF, and what the discussion
   concluded before being asked to follow it. */
doc.appendChild(el(`
  <section class="ai-sec" aria-labelledby="p1">
    ${part(1, '這次討論的核心收穫', 'What changed')}
    <p class="ai-note">${text(SESSION.levelsLeadZh)}</p>
    <ol class="lv-list">
      ${SESSION.levels.map((l, i) => `
        <li class="lv">
          <p class="lv-n" lang="en">Level ${i + 1}</p>
          <p class="lv-t"><span lang="en">${text(l.en)}</span><em>${text(l.zh)}</em></p>
          <p class="lv-b">${text(l.body)}</p>
        </li>`).join('')}
    </ol>
    <p class="ai-foot">${text(SESSION.levelsFootZh)}</p>
  </section>`));

// -------------------------------------------------------------- the eight

doc.appendChild(el(`
  <section class="ai-sec" aria-labelledby="p2">
    ${part(2, '八個 AI 應用重點', 'Eight ways the class is using AI')}
    <ol class="pt-list">
      ${SESSION.points.map((p, i) => `
        <li class="pt">
          <p class="pt-n">${i + 1}</p>
          <h3 class="pt-head"><span lang="en">${text(p.en)}</span><em>${text(p.zh)}</em></h3>
          <p class="pt-by">${p.by.map((b) => `<span>${text(b)}</span>`).join('')}分享</p>
          <div class="pt-body">${p.body.map((t) => `<p>${text(t)}</p>`).join('')}</div>
          <p class="pt-key"><span>重點</span>${text(p.key)}</p>
        </li>`).join('')}
    </ol>
    <p class="ai-foot">${text(SESSION.pointsFootZh)}</p>
  </section>`));

// ----------------------------------------------------------- five to keep

doc.appendChild(el(`
  <section class="ai-sec" aria-labelledby="p3">
    ${part(3, '最值得保留的五個實用技巧', 'Five worth keeping')}
    <div class="tech-wrap">
      <table class="tech">
        <thead>
          <tr><th scope="col">技巧</th><th scope="col">實際做法</th><th scope="col">適用情境</th></tr>
        </thead>
        <tbody>
          ${SESSION.techniques.map((t) => `
            <tr>
              <th scope="row" lang="en">${text(t.en)}</th>
              <td>${text(t.how)}</td>
              <td class="tech-when">${text(t.when)}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </section>`));

// --------------------------------------------------------------- prompts

doc.appendChild(el(`
  <section class="ai-sec" aria-labelledby="p4">
    ${part(4, '可以直接用的指令範例', 'Prompts you can copy')}
    <p class="ai-note">${text(SESSION.promptsNoteZh)}</p>
    <ol class="pr-list">
      ${SESSION.prompts.map((p, i) => `
        <li class="pr">
          <div class="pr-head">
            <h3><span lang="en">Prompt ${i + 1}</span><em>${text(p.titleZh)}</em></h3>
            <span class="pr-tag" lang="en">${text(p.tag)}</span>
          </div>
          <p class="pr-text" id="pr${i}">${text(p.text)}</p>
          <button class="pr-copy" type="button" data-for="pr${i}"
            aria-label="複製指令：${text(p.titleZh)}">複製指令</button>
        </li>`).join('')}
    </ol>
  </section>`));

// -------------------------------------------------------------- cautions

doc.appendChild(el(`
  <section class="ai-sec" aria-labelledby="p5">
    ${part(5, '要特別注意的三件事', 'Three things to watch')}
    <p class="ai-note">${text(SESSION.cautionsLeadZh)}</p>
    <ol class="cau-list">
      ${SESSION.cautions.map((c) => `
        <li class="cau">
          <p class="cau-t">${text(c.title)}</p>
          <p class="cau-b">${text(c.body)}</p>
        </li>`).join('')}
    </ol>
  </section>`));

// ----------------------------------------------------------- the last word

/* The quote stays at the end even though the ladder it used to sit under has
   moved to the front. It is the closing line of the discussion, and a closing
   line read first is not a closing line. */
doc.appendChild(el(`
  <figure class="quote ai-quote">
    <blockquote lang="en"><p>${text(SESSION.quote.en)}</p></blockquote>
    <p class="zh">${text(SESSION.quote.zh)}</p>
  </figure>`));

// ------------------------------------------------------------------ chrome

document.title = `${SESSION.titleZh} — ${AI_NOTES.titleZh}`;
$('.bar-title').innerHTML =
  `${text(AI_NOTES.titleZh)} <span>${text(AI_NOTES.title)}</span>`;

/* Copy a prompt. The clipboard can be refused — a page served over plain HTTP,
   or permission withheld — so the fallback selects the text instead, which
   leaves ⌘C working and is what the reader was going to do anyway.

   The reply goes to two places. Changing a focused button's own label is not
   reliably re-announced, so the whole confirmation — and, in the fallback, the
   instruction to press ⌘C — can pass in silence for someone who cannot see it.
   A live region says it out loud; .psr is the series' own off-screen class. */
const psr = el('<p class="psr" aria-live="polite" aria-atomic="true"></p>');
document.body.appendChild(psr);

doc.addEventListener('click', async (e) => {
  const btn = e.target.closest('.pr-copy');
  if (!btn) return;
  const src = $(`#${btn.dataset.for}`);
  if (!src) return;
  const say = (s) => {
    btn.textContent = s;
    psr.textContent = s;
    clearTimeout(btn._t);
    btn._t = setTimeout(() => { btn.textContent = '複製指令'; psr.textContent = ''; }, 2200);
  };
  try {
    await navigator.clipboard.writeText(src.textContent.trim());
    say('已複製');
  } catch {
    const r = document.createRange();
    r.selectNodeContents(src);
    const sel = getSelection();
    sel.removeAllRanges();
    sel.addRange(r);
    say('請按 ⌘C');
  }
});
