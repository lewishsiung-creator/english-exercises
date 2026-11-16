/* Renders PROPOSAL. One page, nothing to press but the contents and ⎙ PDF.

   It is a document, and the reader is reading: no Chinese layer, no audio,
   nothing hidden behind a tap, nothing saved. The renderer adds exactly three
   things to her words — a contents list that knows where you are, a hairline
   showing how far through you are, and a print button.
*/

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function attr(s) { return esc(s).replace(/"/g, '&quot;'); }

/* Her text with its two marks turned into tags: **bold** and *italic*. The
   apostrophe is the only typographic change — the PDF's straight ' becomes ’
   between letters — and it changes no word. */
function fmt(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/(\w)'(\w)/g, '$1’$2');
}

const BLOCKS = {
  p: (b) => `<p class="para">${fmt(b.text)}</p>`,

  /* 9.1, 11.4 … — the number is set apart so the titles line up down the page. */
  h: (b) => `<h3 class="sub"><span class="sub-n">${esc(b.n)}</span>${fmt(b.text)}</h3>`,

  /* 10.1.1 … — one case study. */
  hh: (b) => `<h4 class="case"><span class="case-n">${esc(b.n)}</span>${fmt(b.text)}</h4>`,

  /* A research question. The source sets these in bold on a line of their
     own; here they are the one thing on the page allowed to be larger than
     the text, because they are what the other eleven chapters answer. */
  ask: (b) => `
    <figure class="ask${b.main ? ' ask-main' : ''}">
      ${b.label ? `<figcaption class="ask-k">${esc(b.label)}</figcaption>` : ''}
      <p>${fmt(b.text)}</p>
    </figure>`,

  keywords: (b) => `
    <p class="kw"><span class="kw-k">Keywords</span>${b.items.map((i) => `<span class="kw-i">${esc(i)}</span>`).join('')}</p>`,
};

function section(s) {
  const blocks = s.blocks.map((b) => {
    const fn = BLOCKS[b.t];
    if (!fn) throw new Error(`Unknown block type "${b.t}" in section ${s.id}`);
    return fn(b);
  }).join('');

  return `
    <section class="sec" id="${s.id}">
      ${s.chapter ? `<p class="sec-k">Chapter ${s.chapter}</p>` : ''}
      <h2 class="sec-h">${fmt(s.title)}</h2>
      ${blocks}
    </section>`;
}

/* The contents, written once and used twice: a rail that follows the reader
   on a wide screen, and a plain list under the cover on a narrow one. Only
   one of the two is ever displayed, so a screen reader meets one. */
const ENTRIES = [
  ...PROPOSAL.sections.map((s) => ({ id: s.id, n: s.chapter || '', title: s.title })),
  { id: 'references', n: '', title: 'References' },
];
function contents(cls) {
  return `
    <nav class="${cls}" aria-label="Contents">
      <p class="toc-k">Contents</p>
      <ol>${ENTRIES.map((e) => `
        <li><a href="#${e.id}" data-to="${e.id}"><span class="toc-n">${esc(e.n)}</span><span>${fmt(e.title)}</span></a></li>`).join('')}
      </ol>
    </nav>`;
}

/* The cover drawing: a station on a green corridor, and two walks of the
   same length away from it — one under trees, one in the open. It is an
   idea, not a map of Kaohsiung, which is why nothing on it is labelled.

   Drawn 680 × 190 and shown with `slice`, so on a phone the sides are cropped
   instead of the whole drawing shrinking to a thread. Everything that matters
   therefore sits between x = 130 and x = 550. */
const TREES = [[329, 55], [362, 31], [390, 49], [418, 31], [446, 49], [474, 31], [502, 49]];
const ART = `
  <svg class="cover-art" viewBox="0 0 680 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <g class="a-grid">
      <path d="M0 40H680M0 150H680M0 8H680M0 182H680"/>
      <path d="M70 0V190M160 0V190M250 0V190M430 0V190M520 0V190M610 0V190M340 0V72M340 118V190"/>
    </g>
    <path class="a-band" d="M0 95H680"/>
    <rect class="a-station" x="290" y="72" width="100" height="46" rx="9"/>
    <g class="a-hill">
      <ellipse cx="340" cy="95" rx="124" ry="31"/>
      <ellipse cx="340" cy="95" rx="94" ry="21"/>
      <ellipse cx="340" cy="95" rx="62" ry="12"/>
    </g>
    <path class="a-sun" d="M340 118V150H160"/>
    <path class="a-shade" d="M340 72V40H520"/>
    <g class="a-tree">${TREES.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6.5"/>`).join('')}</g>
    <circle class="a-dot a-dot-shade" cx="520" cy="40" r="5"/>
    <circle class="a-dot a-dot-sun" cx="160" cy="150" r="5"/>
    <circle class="a-pin" cx="340" cy="95" r="3.5"/>
  </svg>`;

document.title = `${PROPOSAL.title}: ${PROPOSAL.subtitle} — ${PROPOSAL.author}`;

$('#doc').innerHTML = `
  ${contents('rail')}
  <article class="paper">
    <header class="cover">
      <p class="kicker">${esc(PROPOSAL.kicker)}</p>
      <h1>${fmt(PROPOSAL.title).replace(/\w+-\w+/g, '<span class="nb">$&</span>')}</h1>
      <p class="cover-sub">${fmt(PROPOSAL.subtitle)}</p>
      <p class="cover-by">${esc(PROPOSAL.author)}</p>
      ${ART}
      ${contents('contents')}
    </header>
    ${PROPOSAL.sections.map(section).join('')}
    <section class="sec refs" id="references">
      <h2 class="sec-h">References</h2>
      <ol class="refs-list">${PROPOSAL.refs.map((r) => `
        <li>${fmt(r.text)}${r.doi ? ` <a href="https://doi.org/${attr(r.doi)}" target="_blank" rel="noopener">https://doi.org/${esc(r.doi)}</a>` : ''}</li>`).join('')}
      </ol>
      ${PROPOSAL.refsNote ? `<p class="refs-note">${fmt(PROPOSAL.refsNote)}</p>` : ''}
    </section>
  </article>`;

$('#printBtn').addEventListener('click', () => window.print());

/* Where the reader is. One pass over thirteen headings per scroll event — too
   little work to be worth deferring to a frame, and a deferred pass does not
   run at all in a tab that is not being painted.

   It only ever toggles a class and sets one custom property. It never calls
   scrollIntoView — on the notebooks that call scrolled the DOCUMENT whenever
   the list itself had nothing to scroll, and the page drifted on its own. */
const secs = $$('.sec');
const links = $$('[data-to]');
const bar = $('.bar');

function mark() {
  /* A third of the way down, not the bar's edge: a chapter is "where you are"
     once its heading is in the part of the screen you are reading, and the
     last one has to be reachable even though it can never scroll that high. */
  const line = Math.max(bar.offsetHeight + 48, innerHeight * 0.35);
  const max = document.documentElement.scrollHeight - innerHeight;
  let here = '';
  for (const s of secs) {
    if (s.getBoundingClientRect().top <= line) here = s.id; else break;
  }
  if (max > 0 && scrollY >= max - 2) here = secs[secs.length - 1].id;
  for (const a of links) {
    const on = a.dataset.to === here;
    a.classList.toggle('here', on);
    if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
  }
  bar.style.setProperty('--read', max > 0 ? Math.min(1, scrollY / max).toFixed(4) : 0);
}

addEventListener('scroll', mark, { passive: true });
addEventListener('resize', mark);
mark();
