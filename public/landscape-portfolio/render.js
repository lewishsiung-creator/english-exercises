/* Builds the portfolio from PORTFOLIO (content.js).

   The contract of this page:

   - Everything a student changes is in content.js. Nothing in here knows
     anything about riverbanks or courtyards, so replacing the content file
     replaces the portfolio.
   - A picture is `<img src="img/…">` first and a drawing second. If the file
     is not in img/ yet the image fails to load and is swapped for a drawn
     placeholder naming the kind and the file it is waiting for — so the page
     is complete and legible from the first minute, and each real drawing
     appears simply by being dropped into the folder.
   - Nothing is stored, nothing is sent anywhere, and there is no build step.
*/

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

const pad = (n) => String(n).padStart(2, '0');

/* What one entry in `projects` is called. "Project" for an ordinary portfolio;
   a study of a single work sets `unit: 'Part'` and gets Part 01, Part 02
   instead, in the section headings, the contents cards and the count. */
const UNIT = () => (PORTFOLIO.unit || 'Project');

/* ------------------------------------------------------------ drawn art */

/* A run of something — used for grids, hatching and dimension ticks, which
   are otherwise forty lines of copied markup each. */
const rep = (n, fn) => Array.from({ length: n }, (_, i) => fn(i)).join('');

/* Concentric copies of one path, scaled about a centre point. This is what
   makes a handful of curves read as contour lines. */
function nest(d, cx, cy, scales) {
  return scales.map((s) =>
    `<path d="${d}" transform="translate(${cx} ${cy}) scale(${s}) translate(${-cx} ${-cy})"/>`
  ).join('');
}

const BLOB = 'M60 205 C58 155,105 122,163 132 C221 142,254 184,236 224 ' +
             'C218 264,120 268,86 244 C66 230,60 220,60 205 Z';

/* One drawing per kind of image. They are deliberately schematic: enough to
   say "a section goes here" at a glance across a room, and pale enough that
   nobody mistakes one for finished work. */
const ART = {

  plan: () => `
    <g class="ph-faint" fill="none" stroke-width=".7">
      ${rep(9, (i) => `<path d="M${i * 50} 0V300"/>`)}
      ${rep(7, (i) => `<path d="M0 ${i * 50}H400"/>`)}
    </g>
    <g class="ph-faint" fill="none" stroke-width="1.1">${nest(BLOB, 150, 195, [1, .78, .56, .34])}</g>
    <path class="ph-ink" fill="none" stroke-width="2.4"
          d="M14 268 C110 258,150 214,214 206 C286 197,318 150,326 92"/>
    <g class="ph-ink" fill="none" stroke-width="1.4">
      <path d="M356 88 L364 44 L372 88 L364 74 Z"/>
    </g>
    <g class="ph-ink" stroke-width="1" fill="none">
      <path d="M22 40h96"/><path d="M22 34v12"/><path d="M70 34v12"/><path d="M118 34v12"/>
      <rect x="22" y="40" width="24" height="5" class="ph-fill" stroke="none"/>
      <rect x="70" y="40" width="24" height="5" class="ph-fill" stroke="none"/>
    </g>`,

  section: () => `
    <path class="ph-fill" stroke="none"
          d="M0 186 C56 180,88 200,140 202 L252 202 C300 202,332 172,400 168 L400 250 L0 250 Z"/>
    <g class="ph-faint" fill="none" stroke-width=".7">
      ${rep(16, (i) => `<path d="M${i * 26} 250 l22 -22"/>`)}
    </g>
    <path class="ph-ink" fill="none" stroke-width="2.2"
          d="M0 186 C56 180,88 200,140 202 L252 202 C300 202,332 172,400 168"/>
    <path class="ph-clay" fill="none" stroke-width="1.4" stroke-dasharray="7 6" d="M96 214H300"/>
    <g class="ph-faint" fill="none" stroke-width=".8" stroke-dasharray="3 5">
      <path d="M0 150H400"/><path d="M0 118H400"/>
    </g>
    <g class="ph-ink" fill="none" stroke-width="1.6">
      <path d="M78 196v-34"/><circle cx="78" cy="146" r="17"/>
      <path d="M196 202v-46"/><circle cx="196" cy="136" r="22"/>
      <path d="M318 178v-30"/><circle cx="318" cy="134" r="15"/>
    </g>`,

  render: () => `
    <rect class="ph-fill" stroke="none" x="0" y="0" width="400" height="196"/>
    <circle class="ph-clay" fill="none" stroke-width="1.6" cx="308" cy="66" r="24"/>
    <g class="ph-faint" fill="none" stroke-width="1.2">
      <path d="M0 152 C64 116,116 132,168 150 C220 168,278 138,400 118"/>
      <path d="M0 178 C88 156,150 168,224 178 C298 188,344 172,400 162"/>
    </g>
    <path class="ph-ink" fill="none" stroke-width="2" d="M0 196H400"/>
    <g class="ph-ink" fill="none" stroke-width="1.5">
      <path d="M62 196v-40"/><circle cx="62" cy="142" r="20"/>
      <path d="M112 196v-26"/><circle cx="112" cy="158" r="13"/>
      <path d="M336 196v-52"/><circle cx="336" cy="128" r="26"/>
    </g>
    <g class="ph-faint" fill="none" stroke-width="1">
      ${rep(7, (i) => `<path d="M${30 + i * 52} 232h30"/>`)}
      ${rep(6, (i) => `<path d="M${56 + i * 52} 254h30"/>`)}
    </g>`,

  diagram: () => `
    <g class="ph-faint" fill="none" stroke-width="1.4" stroke-dasharray="6 7">
      <path d="M112 122 C150 92,176 88,204 96"/>
      <path d="M226 108 C262 122,282 138,294 158"/>
      <path d="M282 186 C250 216,214 226,190 222"/>
      <path d="M146 208 C122 190,112 166,112 148"/>
    </g>
    <g class="ph-ink" fill="none" stroke-width="1.8">
      <path d="M196 90l12 6l-11 8"/><path d="M290 152l6 12l-13-2"/>
      <path d="M196 226l-12-6l11-8"/><path d="M112 154l-7-12l13 2"/>
    </g>
    <g fill="none" stroke-width="1.8">
      <circle class="ph-ink" cx="84" cy="136" r="30"/>
      <circle class="ph-faint" cx="216" cy="86" r="22"/>
      <circle class="ph-clay" cx="312" cy="172" r="34"/>
      <circle class="ph-faint" cx="166" cy="228" r="26"/>
    </g>`,

  detail: () => `
    <g class="ph-ink" fill="none" stroke-width="1.4">
      <path d="M96 84H364"/><path d="M96 110H364"/>
      ${rep(7, (i) => `<path d="M${112 + i * 36} 84v26"/>`)}
    </g>
    <path class="ph-fill" stroke="none" d="M96 110H364V132H96Z"/>
    <g class="ph-faint" fill="none" stroke-width=".8">
      <path d="M96 132H364"/>
      ${rep(11, (i) => `<path d="M${100 + i * 24} 176 l26 -44"/>`)}
      <path d="M96 176H364"/>
      ${rep(5, (i) => `<path d="M104 ${190 + i * 14}h250" stroke-dasharray="8 12"/>`)}
      <path d="M96 250H364"/>
    </g>
    <path class="ph-ink" fill="none" stroke-width="2"
          d="M96 250V132h-34V60h34" />
    <g class="ph-clay" fill="none" stroke-width="1">
      <path d="M40 84v192"/><path d="M34 84h12"/><path d="M34 132h12"/>
      <path d="M34 176h12"/><path d="M34 250h12"/>
    </g>`,

  photo: () => `
    <rect class="ph-fill" stroke="none" x="52" y="56" width="296" height="188"/>
    <circle class="ph-clay" fill="none" stroke-width="1.6" cx="292" cy="102" r="17"/>
    <path class="ph-ink" fill="none" stroke-width="1.8"
          d="M52 214 L128 140 L176 186 L232 122 L348 214"/>
    <path class="ph-faint" fill="none" stroke-width="1.2" d="M52 244h296"/>
    <g class="ph-ink" fill="none" stroke-width="2">
      <path d="M52 84V56h28"/><path d="M320 56h28v28"/>
      <path d="M348 216v28h-28"/><path d="M80 244H52v-28"/>
    </g>`,

  model: () => `
    <g class="ph-faint" fill="none" stroke-width="1">
      <path d="M40 196 L200 116 L360 196 L200 276 Z"/>
    </g>
    <g class="ph-ink" fill="none" stroke-width="1.6">
      <path d="M120 156 L200 116 L280 156 L200 196 Z"/>
      <path d="M120 156v40 M200 196v40 M280 156v40"/>
      <path d="M120 196 L200 236 L280 196"/>
    </g>
    <g class="ph-clay" fill="none" stroke-width="1.4">
      <path d="M200 116V72"/><path d="M180 88 L200 68 L220 88"/>
    </g>`,
};

function placeholder(kind, file) {
  const art = (ART[kind] || ART.plan)();
  return `
    <svg class="ph" viewBox="0 0 400 340" preserveAspectRatio="xMidYMid meet"
         xmlns="http://www.w3.org/2000/svg" role="img"
         aria-label="Placeholder for ${text(kind)} — drop ${text(file)} into the img folder">
      <g fill="none" stroke-linecap="round" stroke-linejoin="round">${art}</g>
      <text x="200" y="304" text-anchor="middle" font-size="11">${text(kind)}</text>
      <text class="ph-file" x="200" y="324" text-anchor="middle" font-size="10.5">img/${text(file)}</text>
    </svg>`;
}

/* The cover drawing: one contour composition, with a watercourse cutting
   across it. Nothing on the page depends on it — delete .cover-art and the
   cover still stands. */
function coverArt() {
  const d = 'M96 148 C112 92,190 62,290 64 C400 66,520 94,546 142 ' +
            'C566 180,498 214,380 220 C252 226,132 208,102 180 C90 168,94 156,96 148 Z';
  return `
    <svg viewBox="0 0 620 250" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke-linejoin="round" stroke="var(--navy-line)" stroke-width="1">
        ${nest(d, 320, 142, [1, .86, .72, .58, .44])}
      </g>
      <g fill="none" stroke="var(--navy)" stroke-width="1.4">
        ${nest(d, 320, 142, [.3, .17])}
      </g>
      <path fill="none" stroke="var(--clay)" stroke-width="1.6"
            d="M28 224 C150 206,206 158,286 142 C372 125,436 96,470 34"/>
      <path fill="none" stroke="var(--rule)" stroke-width="1" stroke-dasharray="4 7" d="M0 240H620"/>
    </svg>`;
}

/* ------------------------------------------------------------- the parts */

function coverSection(P) {
  const contact = (P.contact || []).map((c) => `
    <li>
      <span class="contact-k">${text(c.k)}</span>
      <span class="contact-v">${c.href
        ? `<a href="${text(c.href)}"${/^https?:/.test(c.href) ? ' target="_blank" rel="noopener"' : ''}>${text(c.v)}</a>`
        : text(c.v)}</span>
    </li>`).join('');

  return `
    <section class="cover" id="top">
      <div class="cover-art">${coverArt()}</div>
      <p class="kicker">${text(P.kicker)}</p>
      <h1>${text(P.name)}</h1>
      <p class="cover-disc">${text(P.discipline)}</p>
      ${P.tagline ? `<p class="cover-tag">${text(P.tagline)}</p>` : ''}
      <ul class="contact">${contact}</ul>
    </section>`;
}

function profileSection(P) {
  const pr = P.profile;
  if (!pr) return '';

  const blocks = (pr.blocks || []).map((b) => {
    const body = b.chips
      ? `<div class="chips">${b.chips.map((c) => `<span class="chip">${text(c)}</span>`).join('')}</div>`
      : `<ul>${(b.items || []).map((it) => `
          <li>
            <span class="term">${text(it.term)}</span>
            ${it.when ? `<span class="when">${text(it.when)}</span>` : ''}
            ${it.note ? `<span class="note">${text(it.note)}</span>` : ''}
          </li>`).join('')}</ul>`;
    return `<div class="blk"><h3>${text(b.head)}</h3>${body}</div>`;
  }).join('');

  return `
    <section id="profile">
      <div class="sec-head"><h2>${text(pr.head || 'Profile')}</h2><span class="lab">${text(P.name)}</span></div>
      <div class="statement">${(pr.statement || []).map((p) => `<p>${text(p)}</p>`).join('')}</div>
      <div class="blocks">${blocks}</div>
    </section>`;
}

/* A picture, in its frame, as a button — because the whole frame opens the
   lightbox and a bare <img> with a click handler is invisible to a keyboard. */
function shot(proj, pi, img, i) {
  return `
    <figure class="shot${img.wide ? ' wide' : ''}">
      <button class="shot-frame" data-p="${pi}" data-i="${i}"
              aria-label="Enlarge: ${text(img.caption)}">
        <img src="img/${text(img.file)}" alt="${text(img.caption)}" decoding="async"
             data-kind="${text(img.kind || 'plan')}" data-file="${text(img.file)}">
      </button>
      <figcaption class="shot-cap"><b>${pad(i + 1)}</b><span>${text(img.caption)}</span></figcaption>
    </figure>`;
}

function projectSection(p, pi) {
  const specs = (p.specs || []).map((s) => `
    <div><span class="spec-k">${text(s.k)}</span><span class="spec-v">${text(s.v)}</span></div>`).join('');

  return `
    <section class="proj" id="${text(p.id)}">
      <div class="sec-head">
        <h2>${text(UNIT())} ${pad(pi + 1)}</h2>
        <span class="lab">${text(p.name)}</span>
      </div>

      <div class="proj-head">
        <span class="pnum">${text(p.type)}</span>
        <h2>${text(p.name)}</h2>
        ${p.lead ? `<p class="proj-lead">${text(p.lead)}</p>` : ''}
      </div>

      <div class="proj-body">
        <div class="specs">${specs}</div>
        <div class="prose">${(p.text || []).map((t) => `<p>${text(t)}</p>`).join('')}</div>
      </div>

      <div class="shots">${(p.images || []).map((img, i) => shot(p, pi, img, i)).join('')}</div>
    </section>`;
}

function contentsSection(P) {
  const cards = P.projects.map((p, i) => {
    const first = (p.images || [])[0];
    const thumb = first
      ? `<img src="img/${text(first.file)}" alt="" decoding="async"
              data-kind="${text(first.kind || 'plan')}" data-file="${text(first.file)}">`
      : '';
    return `
      <a class="toc-card" href="#${text(p.id)}">
        <div class="toc-thumb">${thumb}</div>
        <div class="toc-body">
          <span class="pnum">${text(UNIT())} ${pad(i + 1)}</span>
          <h3>${text(p.name)}</h3>
          <p>${text(p.type)}</p>
        </div>
      </a>`;
  }).join('');

  return `
    <section id="contents">
      <div class="sec-head"><h2>Contents</h2>
        <span class="lab">${P.projects.length} ${text(UNIT().toLowerCase())}s</span></div>
      <div class="toc">${cards}</div>
    </section>`;
}

/* ---------------------------------------------------------------- build */

const P = PORTFOLIO;

document.title = `${P.name} — ${P.discipline} Portfolio`;
$('#barName').textContent = P.name;

/* `sample: true` gets the stock warning; `sample: '…'` says something more
   specific, which a worked example built from somebody else's project needs —
   there the point is not "unfinished" but "not yours". Either way it shows on
   screen and in print, so an unfinished draft cannot be sent by accident. */
if (P.sample) {
  $('.bar').after(el(typeof P.sample === 'string'
    ? `<p class="banner">${text(P.sample)}</p>`
    : `<p class="banner">Sample content — the words and drawings below are a
        template. Replace them in <code>content.js</code>, then delete
        <code>sample: true</code> to remove this line.</p>`));
}

$('#doc').innerHTML = [
  coverSection(P),
  profileSection(P),
  contentsSection(P),
  P.projects.map(projectSection).join(''),
  P.closing ? `
    <section class="closing" id="closing">
      <h2>${text(P.closing.head)}</h2>
      <p>${text(P.closing.text)}</p>
    </section>` : '',
].join('');

$('#barNav').innerHTML = [
  `<a class="bar-link" href="#profile">${text((P.profile && P.profile.head) || 'Profile')}</a>`,
  ...P.projects.map((p, i) => `<a class="bar-link" href="#${text(p.id)}">${pad(i + 1)} ${text(p.name)}</a>`),
].join('');

/* ------------------------------------------- pictures that are not there */

/* An image file that has not been added yet becomes its drawn stand-in. The
   `complete && !naturalWidth` check covers the case where the request already
   failed before this ran; the listener covers everything else.

   Note the absence of loading="lazy" on the pictures. A lazy image below the
   fold is never requested, so it never fails, so it never becomes its
   placeholder — and printing to PDF would produce a document of empty frames
   for everything the reader had not already scrolled past. Twenty images
   fetched at once is the cheaper problem. */
function standIn(img) {
  if (!img.isConnected) return;
  const svg = el(placeholder(img.dataset.kind, img.dataset.file));
  img.replaceWith(svg);
}

$$('img[data-file]').forEach((img) => {
  img.addEventListener('error', () => standIn(img), { once: true });
  if (img.complete && !img.naturalWidth) standIn(img);
});

/* -------------------------------------------------------------- lightbox */

const lb = $('#lb');
const lbStage = $('#lbStage');
const lbCap = $('#lbCap');
const lbWho = $('#lbWho');
const lbCount = $('#lbCount');
let at = { p: 0, i: 0 };
let lastFocus = null;

function show(p, i) {
  const proj = P.projects[p];
  const imgs = proj.images || [];
  at = { p, i: (i + imgs.length) % imgs.length };

  const frame = $(`.shot-frame[data-p="${at.p}"][data-i="${at.i}"]`);
  const node = frame && frame.firstElementChild;
  lbStage.replaceChildren(node ? node.cloneNode(true) : '');

  lbWho.textContent = proj.name;
  lbCap.textContent = imgs[at.i].caption;
  lbCount.textContent = `${at.i + 1} / ${imgs.length}`;
}

function openLb(p, i) {
  lastFocus = document.activeElement;
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
  show(p, i);
  $('#lbClose').focus();
}

function closeLb() {
  lb.hidden = true;
  lbStage.replaceChildren();
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}

document.addEventListener('click', (e) => {
  const frame = e.target.closest('.shot-frame');
  if (frame) openLb(+frame.dataset.p, +frame.dataset.i);
});

$('#lbClose').addEventListener('click', closeLb);
$('#lbPrev').addEventListener('click', () => show(at.p, at.i - 1));
$('#lbNext').addEventListener('click', () => show(at.p, at.i + 1));
lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lbStage) closeLb(); });

document.addEventListener('keydown', (e) => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') show(at.p, at.i - 1);
  if (e.key === 'ArrowRight') show(at.p, at.i + 1);
});

/* ------------------------------------------------------------ the bar nav */

/* Marks the section being read: the last one whose top has passed under the
   bar. A plain measured comparison rather than an IntersectionObserver,
   because a project section here is two or three screens tall — several of
   them straddle any sensible trigger band at once, and which one the observer
   reports last is not the one being read.

   Tops are measured once and on resize, so scrolling costs a number
   comparison and never a layout. */
const links = new Map($$('#barNav .bar-link').map((a) => [a.getAttribute('href').slice(1), a]));
const spied = [...links.keys()].map((id) => document.getElementById(id)).filter(Boolean);

let tops = [];
let marked = null;

const measure = () => { tops = spied.map((s) => s.getBoundingClientRect().top + window.scrollY); };

/* How far below the bar a section's top has to have come before it counts as
   the one being read. It is deliberately a little more than the gap an anchor
   jump leaves (`scroll-margin-top`), so that landing on .../#stone-court marks
   Stone Court rather than the project above it. */
const TRIGGER = parseInt(getComputedStyle(document.body).getPropertyValue('--bar-h'), 10) + 130;

function markCurrent() {
  const line = window.scrollY + TRIGGER;
  let i = -1;
  while (i + 1 < tops.length && tops[i + 1] <= line) i++;

  const id = i < 0 ? null : spied[i].id;
  if (id === marked) return;
  marked = id;

  links.forEach((l) => l.removeAttribute('aria-current'));
  if (!id) return;
  const a = links.get(id);
  a.setAttribute('aria-current', 'true');

  /* Bring the marked link into view along the bar's own axis, by moving the
     bar's scrollLeft and nothing else. `scrollIntoView` cannot be used here:
     it walks every scrollable ancestor, and html carries a scroll-padding-top
     of a bar's height — so each time the current section changed it hauled the
     whole page up 63px under the reader. */
  const nav = a.parentElement;
  const dx = a.getBoundingClientRect().left - nav.getBoundingClientRect().left;
  nav.scrollLeft += dx - (nav.clientWidth - a.getBoundingClientRect().width) / 2;
}

measure();
markCurrent();
addEventListener('scroll', markCurrent, { passive: true });
addEventListener('resize', () => { measure(); marked = null; markCurrent(); });

/* Arriving on .../#stone-court has to be done by hand: the sections are built
   by this script, so at the moment the browser looks for the fragment there is
   nothing in the document to scroll to.

   Turning off scroll restoration is the part that is easy to miss. On a reload
   the browser puts you back where you were *after* the script has run, which
   silently undoes the jump; when a fragment names where to go, it is the
   fragment that should win. Instant, not smooth — an animated scroll from the
   top belongs to a click, not to a page you have just opened. */
function goToHash() {
  const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (!target) return;
  document.documentElement.style.scrollBehavior = 'auto';
  target.scrollIntoView();
  document.documentElement.style.scrollBehavior = '';
  marked = null;
  markCurrent();
}

if (location.hash && 'scrollRestoration' in history) history.scrollRestoration = 'manual';
setTimeout(goToHash, 0);
addEventListener('load', () => setTimeout(() => { measure(); marked = null; goToHash(); markCurrent(); }, 0));

/* ------------------------------------------------------- bar and guide */

$('#printBtn').addEventListener('click', () => window.print());

const guide = $('#guide');
$('#guideToggle').addEventListener('click', () => {
  guide.hidden = !guide.hidden;
  $('#guideToggle').setAttribute('aria-expanded', String(!guide.hidden));
});
$('#guideClose').addEventListener('click', () => {
  guide.hidden = true;
  $('#guideToggle').setAttribute('aria-expanded', 'false');
  $('#guideToggle').focus();
});
