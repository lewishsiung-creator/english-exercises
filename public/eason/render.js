/* Renders NOTEBOOK (content.js) and wires up the activities.

   This is the same teacher-led machinery as the other adult pages — English
   leads, Chinese waits behind a 中 chip, nothing is scored and nothing is
   saved — with one difference that comes from the page being a notebook rather
   than a lesson:

   - Sessions fold. The newest is open and the earlier ones are closed, because
     after a term this page is longer than any lesson ever is. A session opens
     by tapping its heading, by following a contents link, or by arriving on its
     anchor (/eason/#s3). The teacher panel opens the lot.
   - Which sessions are open is NOT remembered between loads. A reload is a
     clean start, the same as every other page here: the newest lesson, open.

   The only state kept in localStorage is device settings — the chosen voice,
   the speed, and whether Chinese starts visible.
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
  if (!zh) return `<div class="pair ${cls}"><p class="en">${text(en)}</p></div>`;
  return `
    <div class="pair ${cls}" data-zh>
      <p class="en">${text(en)}<button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(zh)}</p>
    </div>`;
}

function speakBtn(sentence, cls = 'say') {
  return `<button class="${cls}" data-say="${text(sentence)}" title="Listen"
    aria-label="Listen">🔊</button>`;
}

/* ---------------------------------------------------------------- the art

   One line drawing per session, sitting behind the scoreboard under its title
   and bleeding off the right-hand edge. Each belongs to its own lesson and
   nothing else: a descent for the diving trip, a boat for the Odyssey, two
   speech bubbles for the self-introduction, his own radar chart for the quiz.

   They are drawn here rather than loaded, for the reason every other image on
   this site is: a file is a request that can fail, and a drawing that can fail
   is worse than no drawing. No brand's mark is among them — the look is the
   design language and that is all it is. See court.css.

   `.art-lines` is the faint ground, `.art-draw` the white stroke on top, and
   `.art-fill` the one thing allowed the orange. Hank's copy calls these
   `.court-lines` and so on, after basketball; nothing on this page is a court,
   so they are renamed here and the two files stay independent. */
const ART = {
  /* The cover. Hank's page puts a basketball court behind its title because
     basketball is what his notebook is about; this one is about a diving
     certificate, a Greek poem, a self-introduction and a quiz, so there is no
     single subject to draw. What the page actually is, is a record that gets
     another layer every time we meet — so the cover is depth contours. They
     read as water without being about the diving trip, and the one ring picked
     out in orange is there to stop five grey lines being wallpaper.

     Generated rather than drawn by hand: twenty-four points per ring with the
     radius modulated by three sine terms, joined as a closed Catmull-Rom
     spline. The outermost ring runs off the right of the viewBox on purpose,
     and the box is placed so that edge falls outside the cover. */
  cover: `
    <svg viewBox="0 0 600 460" aria-hidden="true" focusable="false">
      <g class="art-lines" fill="none">
        <path d="M480 220C480 224 482 229 481 234C481 238 479 243 476 247C473 250 469 253 464 254C460 256 455 256 451 257C447 258 444 258 441 260C437 261 434 263 430 264C426 266 422 267 417 267C413 267 409 266 405 264C401 262 397 259 394 256C391 253 388 250 385 246C383 242 381 238 380 233C379 229 380 224 381 220C382 216 385 212 387 209C389 205 392 202 393 199C395 195 396 191 398 188C400 184 401 179 405 176C408 173 412 170 416 170C421 169 426 170 430 171C434 172 438 174 442 176C446 177 449 179 453 180C456 182 460 184 463 187C466 190 469 193 471 196C473 200 474 204 476 208C477 212 479 216 480 220Z"/>
        <path class="art-ring" d="M521 220C523 228 525 237 524 245C523 253 520 263 515 269C510 275 501 280 493 283C485 286 476 286 469 288C462 289 456 290 449 293C443 295 437 299 430 301C423 304 415 307 407 306C399 306 391 304 384 300C377 297 370 291 364 286C358 280 352 274 348 267C344 260 340 252 339 244C337 237 338 228 341 220C343 212 348 206 352 199C356 193 360 188 363 181C366 175 367 168 371 161C374 154 378 145 383 139C389 134 397 129 405 128C413 126 422 128 430 130C438 132 445 136 452 138C459 141 465 144 472 147C478 151 485 154 491 159C496 164 501 170 505 177C509 183 511 190 514 198C516 205 519 212 521 220Z"/>
        <path d="M563 220C566 232 569 245 568 257C566 269 562 282 554 292C547 301 533 308 522 312C511 317 498 317 487 319C477 321 468 323 458 326C449 330 440 336 430 339C420 343 407 347 396 347C385 346 372 343 362 338C352 333 342 325 333 317C325 308 316 299 310 289C304 279 298 267 296 256C294 244 296 231 299 220C302 209 310 199 315 189C321 180 327 172 331 163C336 154 338 143 343 133C348 123 353 110 362 102C370 94 382 87 394 85C405 82 419 85 430 88C441 90 452 96 462 100C472 105 482 108 491 114C501 119 511 124 519 131C527 138 534 147 540 157C545 166 549 177 553 187C557 198 561 208 563 220Z"/>
        <path d="M605 220C609 235 613 253 611 269C609 284 604 302 594 315C584 327 566 336 552 342C537 348 519 347 505 351C491 354 480 356 468 360C455 365 444 373 430 377C416 382 400 387 385 387C370 386 354 382 340 375C327 368 314 358 303 347C291 337 280 325 272 311C264 298 256 283 253 267C251 252 253 235 257 220C261 205 272 192 279 180C286 167 294 157 300 145C306 133 309 119 315 105C322 92 329 75 340 64C351 54 367 45 382 41C397 38 415 42 430 46C445 49 459 57 472 62C486 68 498 73 511 80C524 86 537 93 547 103C558 112 567 124 575 137C582 149 586 163 592 177C597 191 602 205 605 220Z"/>
        <path d="M647 220C651 239 657 261 654 280C652 300 645 322 632 337C620 352 598 363 580 370C562 378 540 377 523 381C506 385 492 388 476 393C461 399 447 409 430 414C413 420 393 427 375 426C356 426 336 420 319 412C302 403 287 390 273 377C259 364 245 349 235 333C225 316 215 297 212 278C209 260 211 238 217 220C222 202 235 185 244 170C252 155 262 143 270 127C277 112 280 95 289 79C297 62 305 41 319 28C333 14 352 3 371 -1C389 -4 411 0 430 5C449 9 465 18 482 25C499 32 515 38 530 47C546 55 562 63 575 75C588 87 599 102 609 117C618 132 623 149 630 167C636 184 643 201 647 220Z"/>
      </g>
    </svg>`,

  /* The dive. Depth lines opening out under the surface, and the one thing he
     actually came back talking about: the whale shark. A person was drawn here
     first and thrown away — a diver in four strokes reads as a stick figure
     falling over, and the shark is both easier to draw and the better memory.
     The orange is its eye, which is the only place on it a single dot belongs. */
  dive: `
    <svg viewBox="0 0 360 180" aria-hidden="true" focusable="false">
      <g class="art-lines" fill="none">
        <path d="M0 22q22-9 44 0t44 0 44 0 44 0 44 0 44 0 44 0 44 0"/>
        <path d="M6 60h348M14 100h346M26 140h334M40 176h320"/>
      </g>
      <g class="art-draw" fill="none">
        <path d="M58 100q2-28 48-28h64q52 0 64 28-12 28-64 28h-64q-46 0-48-28z"/>
        <path d="M234 100l44-26q-9 26 0 52z"/>
        <path d="M152 72q14-24 34 0"/>
        <path d="M118 128q-6 22 16 24"/>
        <path d="M96 86h2M126 84h2M156 84h2M186 86h2M212 90h2"/>
        <path d="M104 100h2M134 100h2M164 100h2M194 100h2M218 102h2"/>
        <path d="M96 114h2M126 116h2M156 116h2M186 114h2M212 110h2"/>
      </g>
      <circle class="art-fill" cx="76" cy="92" r="4.5"/>
    </svg>`,

  /* The Odyssey. A square sail, the oldest shape in the story, over water that
     keeps going after the hull has passed. The star is the one thing he
     steered by, and the one thing allowed the orange. */
  voyage: `
    <svg viewBox="0 0 360 180" aria-hidden="true" focusable="false">
      <g class="art-lines" fill="none">
        <path d="M0 134q22-10 44 0t44 0 44 0 44 0 44 0 44 0 44 0 44 0"/>
        <path d="M0 154q22-10 44 0t44 0 44 0 44 0 44 0 44 0 44 0 44 0"/>
        <path d="M0 174q22-10 44 0t44 0 44 0 44 0 44 0 44 0 44 0 44 0"/>
      </g>
      <g class="art-draw" fill="none">
        <path d="M148 126h156l-24 28H172z"/>
        <path d="M226 126V40"/>
        <path d="M226 50h72l-14 48h-58z"/>
        <path d="M226 126l-30-16M226 126l30-16"/>
      </g>
      <path class="art-fill" d="M168.0 27.0 171.5 37.1 182.3 37.4 173.7 43.9 176.8 54.1 168.0 48.0 159.2 54.1 162.3 43.9 153.7 37.4 164.5 37.1Z"/>
    </svg>`,

  /* The self-introduction. The same thing said twice — the blunt version
     behind, the truer one in front with the orange on it. That is the session
     in one picture, and it is the contrast block without the words. */
  speech: `
    <svg viewBox="0 0 360 180" aria-hidden="true" focusable="false">
      <g class="art-lines" fill="none">
        <path d="M34 14h142a14 14 0 0 1 14 14v54a14 14 0 0 1-14 14H92l-26 22V96H34a14 14 0 0 1-14-14V28a14 14 0 0 1 14-14z"/>
        <path d="M44 42h120M44 64h84"/>
      </g>
      <g class="art-draw" fill="none">
        <path d="M144 58h178a14 14 0 0 1 14 14v62a14 14 0 0 1-14 14H206l-28 24v-24h-34a14 14 0 0 1-14-14V72a14 14 0 0 1 14-14z"/>
        <path d="M164 88h146M164 114h96"/>
      </g>
      <circle class="art-fill" cx="286" cy="114" r="8"/>
    </svg>`,

  /* The quiz. Seven sides, the shape the result arrived on, and the polygon
     inside it is his own seven numbers rather than a decoration: 0, 5, 88, 5,
     54, 68, 40, in the order the site listed them. */
  radar: `
    <svg viewBox="0 0 360 180" aria-hidden="true" focusable="false">
      <g class="art-lines" fill="none">
        <path d="M236.0 71.0 250.9 78.2 254.5 94.2 244.2 107.1 227.8 107.1 217.5 94.2 221.1 78.2Z"/>
        <path d="M236.0 52.0 265.7 66.3 273.0 98.5 252.5 124.2 219.5 124.2 199.0 98.5 206.3 66.3Z"/>
        <path d="M236.0 33.0 280.6 54.5 291.6 102.7 260.7 141.4 211.3 141.4 180.4 102.7 191.4 54.5Z"/>
        <path d="M236.0 14.0 295.4 42.6 310.1 106.9 269.0 158.5 203.0 158.5 161.9 106.9 176.6 42.6Z"/>
        <path d="M236 90L236.0 14.0M236 90L295.4 42.6M236 90L310.1 106.9M236 90L269.0 158.5M236 90L203.0 158.5M236 90L161.9 106.9M236 90L176.6 42.6"/>
      </g>
      <path class="art-fill-line" d="M236.0 80.0 246.4 81.7 302.4 105.1 241.8 102.0 216.2 131.1 182.5 102.2 207.5 67.3Z"/>
    </svg>`,
};

/* What is in a lesson, counted from the blocks rather than typed in, so the
   numbers cannot drift out of step with the session they describe. `match`
   keeps its pairs under `pairs`, not `items`, which is why the counter takes
   the key. A row with a zero is left out entirely: an empty `fix` is the
   honest state of this page, but a poster announcing "0 FIXES" reads as a
   mark out of ten. */
function stats(s) {
  const count = (t, key = 'items') =>
    s.blocks.filter((b) => b.t === t).reduce((n, b) => n + (b[key] ? b[key].length : 0), 0);
  const out = [];
  const add = (n, en, zh) => { if (n) out.push({ n, en, zh }); };
  add(count('fix'), 'Corrections', '訂正');
  add(count('phrases'), 'Phrases', '片語');
  add(count('gap') + count('match', 'pairs'), 'Questions', '練習題');
  add(count('contrast'), 'Comparisons', '對照');
  add(count('discuss'), 'Talking points', '討論題');
  return out;
}

/* The black panel under a session title: what is inside the lesson, in
   numerals big enough to read across a room, over the drawing that belongs to
   it. A session with no `art` still gets its scoreboard. */
function buildPoster(s) {
  return `
    <div class="poster${ART[s.art] ? ` poster-${s.art}` : ''}">
      ${ART[s.art] ? `<div class="poster-art">${ART[s.art]}</div>` : ''}
      <p class="poster-k">In this lesson <em>這堂課的內容</em></p>
      <ul class="score">
        ${stats(s).map((x) => `
          <li>
            <span class="score-n">${x.n}</span>
            <span class="score-l">${text(x.en)}<em>${text(x.zh)}</em></span>
          </li>`).join('')}
      </ul>
    </div>`;
}

/* Lists that hold sentence starters, sentence frames or tick-list phrases take
   `{ en, zh }`. Accept a bare string too, so a session written in a hurry still
   renders. */
function bilingual(x) {
  return typeof x === 'string' ? { en: x, zh: '' } : x;
}

/* Fisher–Yates, used only to scramble the right-hand column of a matching
   exercise so the pairs are not sitting on the same row. */
function shuffled(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------------------------------------------------------------- blocks

let uid = 0;

/* The heading every activity block shares: English, a 中 chip, the Chinese. */
function label(b) {
  return `
    <h4 class="label"><span class="en">${text(b.en)}</span>
      <button class="zh-chip" title="顯示中文">中</button>
      <span class="zh">${text(b.zh)}</span></h4>`;
}

function hint(b) {
  if (!b.hintEn) return '';
  return `<p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh || '')}</span></p>`;
}

const BLOCKS = {
  lead: (b) => `<div class="lead">${pair(b.en, b.zh)}</div>`,

  // A pointer to another page in this site. Signage, so it is bilingual at all
  // times and never hides behind a chip.
  link: (b) => `
    <a class="cross" href="${text(b.href)}">
      <span class="cross-go" aria-hidden="true">→</span>
      <span class="cross-t">
        <span class="cross-en">${text(b.en)}</span>
        <span class="cross-zh">${text(b.zh)}</span>
        <span class="cross-note">${text(b.noteEn)}</span>
        <span class="cross-note cross-note-zh">${text(b.noteZh)}</span>
      </span>
    </a>`,

  quote: (b) => `
    <figure class="quote">
      <blockquote>
        <p class="en">${text(b.en)}${speakBtn(b.en, 'say say-quiet')}
          <button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.zh)}</p>
      </blockquote>
      <figcaption>— ${text(b.by)}</figcaption>
    </figure>`,

  /* A divider INSIDE one session. Ported from /ken/ for session 2, whose source
     arrives as nine numbered lessons plus the language work and the talking:
     without it the whole thing is one undivided scroll. It has to read as a
     turn in the same lesson rather than the start of a new one, so it is
     quieter than a session heading. Signage: both languages show at once and
     there is no 中 chip to tap. A short session built from a conversation
     should not use it. */
  part: (b) => `
    <div class="part-head">
      <p class="part-n" aria-hidden="true">${text(b.n || '')}</p>
      <h3><span class="en">${text(b.en)}</span><span class="zh">${text(b.zh)}</span></h3>
    </div>`,

  /* A teaching paragraph, spoken aloud on request.

     `titleEn`/`titleZh` are optional and came over from /ken/ with session 2,
     whose source is already cut into nine numbered, titled lessons. Flattening
     those into a run of untitled paragraphs loses what makes a long reading
     scannable weeks later, when he is looking for one idea rather than reading
     the lot. The heading is not `label()`: that one is uppercase with wide
     tracking, which is right for a four-word activity name and shouting for a
     sentence like "Pride can become a weakness". Optional `n` puts the source's
     own number in front of it. */
  summary: (b) => `
    ${b.titleEn ? `
      <h4 class="summary-head">
        ${b.n ? `<span class="n" aria-hidden="true">${text(b.n)}</span>` : ''}
        <span class="en">${text(b.titleEn)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.titleZh || '')}</span>
      </h4>` : ''}
    <div class="summary pair" data-zh>
      <p class="en">${text(b.en)}${speakBtn(b.en, 'say say-quiet')}
        <button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(b.zh)}</p>
    </div>`,

  /* The body needs its own 中 chip, not just the heading's. Tapping the
     paragraph has always opened it — `.pair[data-zh]` handles that — but with
     no chip on the passage there was nothing to say a translation existed, and
     an invisible affordance is the same as an absent one. */
  note: (b) => `
    <aside class="note">
      <h4><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      <div class="pair" data-zh>
        <p class="en">${text(b.bodyEn)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.bodyZh)}</p>
      </div>
    </aside>`,

  /* The same message said two ways — how it landed, and how it could have
     landed. Both halves are good English and both are spoken aloud: unlike
     `fix`, neither side is a mistake, and hearing the blunt version is half the
     point. The two sit side by side rather than stacked, because the whole
     teaching move is the comparison.

     The two column tags default to "As it landed" / "As it could land", which
     is right for a message. Set `coldEn`/`coldZh` and `warmEn`/`warmZh` when the
     pair is something else — an instinct against a reframe, a habit against its
     replacement — so the block can carry any two-column comparison. */
  contrast: (b) => `
    <div class="contrast">
      ${label(b)}
      ${hint(b)}
      ${b.items.map((i) => `
        <div class="cx">
          <p class="cx-case pair" data-zh>
            <span class="en">${text(i.caseEn)}<button class="zh-chip" title="顯示中文">中</button></span>
            <span class="zh">${text(i.caseZh)}</span>
          </p>
          <div class="cx-grid">
            <div class="cx-side cx-cold">
              <p class="cx-tag">${text(b.coldEn || 'As it landed')}
                <em>${text(b.coldZh || '當下造成的效果')}</em></p>
              <div class="pair" data-zh>
                <p class="en">${text(i.cold.en)}${speakBtn(i.cold.en, 'say say-quiet')}
                  <button class="zh-chip" title="顯示中文">中</button></p>
                <p class="zh">${text(i.cold.zh)}</p>
              </div>
            </div>
            <div class="cx-side cx-warm">
              <p class="cx-tag">${text(b.warmEn || 'As it could land')}
                <em>${text(b.warmZh || '可以有的效果')}</em></p>
              <div class="pair" data-zh>
                <p class="en">${text(i.warm.en)}${speakBtn(i.warm.en, 'say say-quiet')}
                  <button class="zh-chip" title="顯示中文">中</button></p>
                <p class="zh">${text(i.warm.zh)}</p>
              </div>
            </div>
          </div>
          <div class="cx-why pair" data-zh>
            <p class="en">${text(i.whyEn)}<button class="zh-chip" title="顯示中文">中</button></p>
            <p class="zh">${text(i.whyZh)}</p>
          </div>
        </div>`).join('')}
    </div>`,

  /* Phrase cards. English is face up; the Chinese and an example sentence are
     behind a tap, so the meaning can be tried first. */
  phrases: (b) => `
    <div class="phrases">
      ${label(b)}
      <ul class="cards">
        ${b.items.map((i) => `
          <li class="card" tabindex="0" role="button" aria-expanded="false">
            <p class="card-en">${text(i.en)}${speakBtn(i.en)}</p>
            <div class="card-back">
              <p class="card-zh">${text(i.zh)}</p>
              <p class="card-eg">${text(i.eg)}${speakBtn(i.eg, 'say say-quiet')}</p>
              ${i.egZh ? `<p class="card-eg-zh">${text(i.egZh)}</p>` : ''}
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  match: (b) => {
    const id = `m${uid++}`;
    const rights = shuffled(b.pairs.map((p, i) => ({ ...p, i })));
    return `
      <div class="activity match" data-act="match" id="${id}">
        ${label(b)}
        ${hint(b)}
        <div class="match-grid">
          <ul class="col col-a">
            ${b.pairs.map((p, i) => `
              <li><button class="chip" data-side="a" data-i="${i}">${text(p.a)}</button></li>`).join('')}
          </ul>
          <ul class="col col-b">
            ${rights.map((p) => `
              <li><button class="chip" data-side="b" data-i="${p.i}">${text(p.b)}</button></li>`).join('')}
          </ul>
        </div>
        <p class="tally"><span class="done">0</span> / ${b.pairs.length}</p>
      </div>`;
  },

  gap: (b) => `
    <div class="activity gaps" data-act="gap">
      ${label(b)}
      ${hint(b)}
      ${b.items.map((it, n) => {
        const [before, after] = text(it.text).split('___');
        return `
          <div class="gap" data-answer="${it.answer}">
            <div class="gap-line pair" ${it.textZh ? 'data-zh' : ''}>
              <p class="en"><span class="gap-n">${n + 1}</span>
                <span class="gap-text">${before}<span class="slot"></span>${after || ''}${
                  it.textZh ? '<button class="zh-chip" title="顯示中文">中</button>' : ''}</span></p>
              ${it.textZh ? `<p class="zh">${text(it.textZh)}</p>` : ''}
            </div>
            <ul class="opts">
              ${it.options.map((o, i) => `
                <li><button class="chip" data-i="${i}">${text(o)}</button></li>`).join('')}
            </ul>
            <p class="why"><span class="en">${text(it.why.en)}</span>
              <span class="zh">${text(it.why.zh)}</span></p>
          </div>`;
      }).join('')}
    </div>`,

  /* Eason's own sentences, corrected. The mistake is shown as it was said and
     the upgrade waits behind a tap, so there is a moment to spot it first — and
     so the page is worth re-reading weeks later, when the correction is the
     part that has been forgotten. The wrong sentence is never spoken aloud: 🔊
     sits on the corrected version only, because the wrong one should not be the
     model going into anyone's ear. */
  fix: (b) => `
    <div class="fixes">
      ${label(b)}
      ${hint(b)}
      <ul class="fix-list">
        ${b.items.map((i) => `
          <li class="fix" tabindex="0" role="button" aria-expanded="false">
            <p class="fix-wrong"><span class="fix-mark" aria-hidden="true">✕</span>
              <span class="fix-t">${text(i.wrong)}</span></p>
            <div class="fix-back">
              <p class="fix-right"><span class="fix-mark" aria-hidden="true">✓</span>
                <span class="fix-t">${text(i.right)}</span>${speakBtn(i.right, 'say say-quiet')}</p>
              <div class="pair fix-why" data-zh>
                <p class="en">${text(i.whyEn)}<button class="zh-chip" title="顯示中文">中</button></p>
                <p class="zh">${text(i.whyZh)}</p>
              </div>
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  poll: (b) => `
    <div class="activity poll" data-act="poll">
      ${label(b)}
      ${hint(b)}
      ${b.items.map((i) => `
        <div class="poll-row">
          <div class="pair" data-zh>
            <p class="en">${text(i.en)}<button class="zh-chip" title="顯示中文">中</button></p>
            <p class="zh">${text(i.zh)}</p>
          </div>
          <div class="poll-btns" role="group">
            <button class="chip" data-v="agree">Agree<em>同意</em></button>
            <button class="chip" data-v="unsure">Not sure<em>不確定</em></button>
            <button class="chip" data-v="disagree">Disagree<em>不同意</em></button>
          </div>
        </div>`).join('')}
    </div>`,

  cards: (b) => `
    <div class="activity audit" data-act="audit">
      ${label(b)}
      ${hint(b)}
      <ul class="roles">
        ${b.items.map((i) => `
          <li class="role">
            <p class="role-icon" aria-hidden="true">${i.icon}</p>
            <div class="pair" data-zh>
              <p class="en"><strong>${text(i.en)}</strong>
                <button class="zh-chip" title="顯示中文">中</button></p>
              <p class="zh">${text(i.zh)}</p>
            </div>
            <div class="pair role-desc" data-zh>
              <p class="en">${text(i.descEn)}</p>
              <p class="zh">${text(i.descZh)}</p>
            </div>
            <div class="role-btns" role="group">
              <button class="chip" data-v="have">I have this<em>我有這樣的人</em></button>
              <button class="chip" data-v="need">I need this<em>我需要一位</em></button>
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  discuss: (b) => `
    <div class="discuss">
      ${label(b)}
      ${b.items.map((i) => `
        <div class="ask">
          <div class="pair" data-zh>
            <p class="en">${text(i.en)}${speakBtn(i.en, 'say say-quiet')}
              <button class="zh-chip" title="顯示中文">中</button></p>
            <p class="zh">${text(i.zh)}</p>
          </div>
          <button class="reveal" aria-expanded="false">Useful language 可用句型</button>
          <ul class="starters" hidden>
            ${i.starters.map(bilingual).map((s) => `
              <li><span class="en">${text(s.en)}${speakBtn(s.en, 'say say-quiet')}</span>
                ${s.zh ? `<span class="zh">${text(s.zh)}</span>` : ''}</li>`).join('')}
          </ul>
        </div>`).join('')}
    </div>`,

  task: (b) => `
    <div class="activity task" data-act="task">
      ${label(b)}
      <div class="pair task-how" data-zh>
        <p class="en">${text(b.instructionEn)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.instructionZh)}</p>
      </div>
      <ul class="prompts">
        ${b.prompts.map((p) => `
          <li><button class="prompt">
            <span class="en">${text(p.en)}</span>
            <span class="zh">${text(p.zh)}</span>
          </button></li>`).join('')}
      </ul>
      ${b.checklist ? `
        <div class="checklist">
          <p class="checklist-head">Target phrases <em>目標片語</em>
            <span class="count"><span class="n">0</span> used 已使用</span></p>
          <ul>
            ${b.checklist.map(bilingual).map((c) => `
              <li><button class="tick"><span class="box"></span>
                <span class="tick-t"><span class="en">${text(c.en)}</span>
                ${c.zh ? `<span class="zh">${text(c.zh)}</span>` : ''}</span></button></li>`).join('')}
          </ul>
        </div>` : ''}
      ${b.frames ? `
        <div class="frames">
          <p class="checklist-head">Sentence frames <em>句型</em></p>
          <ul>
            ${b.frames.map(bilingual).map((f) => `
              <li><span class="en">${text(f.en)}${speakBtn(f.en, 'say say-quiet')}</span>
                ${f.zh ? `<span class="zh">${text(f.zh)}</span>` : ''}</li>`).join('')}
          </ul>
        </div>` : ''}
    </div>`,
};

// ---------------------------------------------------------------- build

const sessions = NOTEBOOK.sessions;

/* While the content is a placeholder, say so across the top — on screen and in
   print, so a demo cannot be handed over by accident. */
function buildBanner() {
  const s = NOTEBOOK.sample;
  if (!s) return '';
  const msg = typeof s === 'string' ? s
    : 'Sample session — the words here are a placeholder, not Eason’s own work. 範例課程：此處內容為範本，並非 Eason 的實際上課紀錄。';
  return `<p class="sample-banner">${text(msg)}</p>`;
}

function buildCover() {
  const i = NOTEBOOK.intro;
  return `
    <header class="cover" id="top">
      <div class="cover-art">${ART.cover}</div>
      <p class="kicker">${text(NOTEBOOK.kicker)}</p>
      <h1><span class="en">${text(NOTEBOOK.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(NOTEBOOK.titleZh)}</span></h1>
      ${pair(i.en, i.zh, 'cover-intro')}
      <div class="goals">
        ${pair(i.goalsEn, i.goalsZh, 'goals-intro')}
        <ul>
          ${i.goals.map((g) => `
            <li class="pair" data-zh>
              <p class="en">${text(g.en)}</p>
              <p class="zh">${text(g.zh)}</p>
            </li>`).join('')}
        </ul>
      </div>
    </header>`;
}

/* A session. The heading is a button, so the fold works from the keyboard and
   announces itself; the body carries `.session-body` and is hidden by the
   `folded` class rather than the `hidden` attribute, so print can override it
   and unfold everything. */
function buildSession(s, open) {
  const blocks = s.blocks.map((b) => {
    const fn = BLOCKS[b.t];
    if (!fn) throw new Error(`Unknown block type "${b.t}" in session ${s.id}`);
    return fn(b);
  }).join('');

  /* The focus chips say what the session covered, which makes them closer to
     the contents list than to the lesson: both languages show at once, with no
     中 chip to tap. A chip that grew when touched would also be a strange
     thing in a row of pills. */
  const focus = s.focus && s.focus.length ? `
    <ul class="focus">
      ${s.focus.map((f) => `
        <li><span class="en">${text(f.en)}</span><span class="zh">${text(f.zh)}</span></li>`).join('')}
    </ul>` : '';

  return `
    <section class="session ${open ? '' : 'folded'}" id="${s.id}">
      <h2 class="session-head">
        <button class="session-btn" aria-expanded="${open}" aria-controls="body-${s.id}">
          <span class="n">${s.n}</span>
          <span class="titles">
            <span class="date">${text(s.dateEn)}<em>${text(s.dateZh || '')}</em></span>
            <span class="en">${text(s.en)}</span>
            <span class="zh">${text(s.zh)}</span>
          </span>
          <span class="fold" aria-hidden="true"></span>
        </button>
      </h2>
      <div class="session-body" id="body-${s.id}">
        ${buildPoster(s)}
        ${focus}
        ${blocks}
      </div>
    </section>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="Sessions">
      <p class="toc-head">Sessions 課程</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="en">Start</span><span class="zh">開始</span></span></a></li>
        ${sessions.map((s) => `
          <li><a href="#${s.id}" data-target="${s.id}"><span class="n">${s.n}</span>
            <span class="t"><span class="en">${text(s.en)}</span>
            <span class="zh">${text(s.dateEn)}</span></span></a></li>`).join('')}
      </ul>
    </nav>`;
}

document.title = `${NOTEBOOK.title} · ${NOTEBOOK.titleZh}`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
if (NOTEBOOK.sample) doc.appendChild(el(buildBanner()));
doc.appendChild(el(buildCover()));

/* Open the session named in the URL, or the newest one. A hash that matches
   nothing falls back to the newest, so an old link cannot land on a page with
   everything shut. */
const wanted = decodeURIComponent(location.hash.slice(1));
const openId = sessions.some((s) => s.id === wanted)
  ? wanted
  : (sessions.length ? sessions[sessions.length - 1].id : '');

sessions.forEach((s) => doc.appendChild(el(buildSession(s, s.id === openId))));

// ---------------------------------------------------------------- folding

function setFold(section, open) {
  section.classList.toggle('folded', !open);
  $('.session-btn', section).setAttribute('aria-expanded', String(open));
}

/* Two ways to open a session, and they mean different things.

   `openSession` is "take me to this one" — the contents list and the URL hash.
   It folds the others, so following a link lands on one session rather than on
   that session plus whatever happened to be open already.

   Tapping a heading is the other way, and it is deliberately additive: nothing
   else closes, so two sessions can sit open side by side when a phrase from
   October is worth putting next to one from August. */
function openSession(id, sole = true) {
  const section = document.getElementById(id);
  // "#top" is the cover, and an unknown id is an old link — neither is a
  // session, and neither should fold the page down on its way past.
  if (!section || !section.classList.contains('session')) return null;
  if (sole) $$('.session').forEach((s) => { if (s !== section) setFold(s, false); });
  setFold(section, true);
  return section;
}

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`eason.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`eason.${k}`, v); } catch { /* private mode */ } },
};

const zhToggle = $('#zhToggle');

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
  $('#zhAll').checked = on;
  store.set('zh', on ? '1' : '0');
}

setAllZh(store.get('zh', '0') === '1');
zhToggle.addEventListener('click', () => setAllZh(!document.body.classList.contains('zh-all')));

/* One click handler for the whole document. Every interactive part is a button
   or a card inside it, so this stays in one place rather than being scattered
   across the block builders. */
doc.addEventListener('click', (e) => {
  const t = e.target;

  // ---- speak
  const say = t.closest('.say');
  if (say) { e.stopPropagation(); speak(say.dataset.say, say); return; }

  // ---- a link keeps its ordinary behaviour; one pointing at a session on this
  //      page opens it first, or the jump lands on a folded heading
  const a = t.closest('a');
  if (a) {
    const to = a.getAttribute('href') || '';
    if (to.startsWith('#')) openSession(decodeURIComponent(to.slice(1)));
    return;
  }

  // ---- fold / unfold a session
  const head = t.closest('.session-btn');
  if (head) {
    const section = head.closest('.session');
    setFold(section, section.classList.contains('folded'));
    return;
  }

  // ---- reveal Chinese for one line
  const chip = t.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    // Climb to the nearest ancestor that actually holds the Chinese, whatever
    // the block wrapped it in — a .pair, a heading, a blockquote.
    let host = chip.parentElement;
    while (host && !host.querySelector('.zh')) host = host.parentElement;
    if (host) host.classList.toggle('open');
    return;
  }
  const line = t.closest('.pair[data-zh]');
  if (line && !t.closest('button')) { line.classList.toggle('open'); return; }

  // ---- phrase card
  const card = t.closest('.card');
  if (card) {
    const open = card.classList.toggle('open');
    card.setAttribute('aria-expanded', String(open));
    return;
  }

  // ---- a corrected sentence
  const fix = t.closest('.fix');
  if (fix) {
    const open = fix.classList.toggle('open');
    fix.setAttribute('aria-expanded', String(open));
    return;
  }

  // ---- useful language
  const reveal = t.closest('.reveal');
  if (reveal) {
    const list = reveal.nextElementSibling;
    const open = list.hidden;
    list.hidden = !open;
    reveal.setAttribute('aria-expanded', String(open));
    return;
  }

  const btn = t.closest('button');
  if (!btn) return;

  const act = btn.closest('[data-act]');
  if (!act) return;

  const kind = act.dataset.act;
  if (kind === 'match') matchClick(act, btn);
  else if (kind === 'gap') gapClick(btn);
  else if (kind === 'poll' || kind === 'audit') pickOne(btn);
  else if (kind === 'task') taskClick(act, btn);
});

// Cards and corrections are focusable, so keep them operable from the keyboard.
doc.addEventListener('keydown', (e) => {
  const item = e.target.closest('.card, .fix');
  if (item && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); item.click(); }
});

// ---------------------------------------------------------------- activities

function wobble(node) {
  node.classList.remove('no');
  void node.offsetWidth;   // restart the animation if it is already running
  node.classList.add('no');
  setTimeout(() => node.classList.remove('no'), 500);
}

/* Matching: pick a phrase on the left, then its partner on the right. A
   correct pair locks; a wrong one wobbles and clears, so the exercise cannot
   reach a stuck state. */
function matchClick(act, btn) {
  if (!btn.classList.contains('chip') || btn.classList.contains('done')) return;

  const picked = $('.chip.picked', act);

  if (!picked || picked.dataset.side === btn.dataset.side) {
    if (picked) picked.classList.remove('picked');
    if (picked === btn) return;
    btn.classList.add('picked');
    return;
  }

  if (picked.dataset.i === btn.dataset.i) {
    [picked, btn].forEach((c) => {
      c.classList.remove('picked');
      c.classList.add('done');
    });
    const done = $$('.chip.done', act).length / 2;
    $('.tally .done', act).textContent = done;
    if (done === $$('.col-a .chip', act).length) act.classList.add('all-done');
  } else {
    wobble(btn);
    wobble(picked);
    picked.classList.remove('picked');
  }
}

function gapClick(btn) {
  const gap = btn.closest('.gap');
  if (!gap || gap.classList.contains('solved')) return;

  if (Number(btn.dataset.i) === Number(gap.dataset.answer)) {
    $('.slot', gap).textContent = btn.textContent;
    gap.classList.add('solved');
    btn.classList.add('done');
  } else {
    wobble(btn);
    btn.classList.add('out');
  }
}

// Opinion and audit buttons: one choice per row, and clicking it again clears.
function pickOne(btn) {
  if (!btn.classList.contains('chip')) return;
  const group = btn.parentElement;
  const was = btn.classList.contains('on');
  $$('.chip', group).forEach((c) => c.classList.remove('on'));
  if (!was) btn.classList.add('on');
}

function taskClick(act, btn) {
  if (btn.classList.contains('prompt')) {
    const was = btn.classList.contains('on');
    $$('.prompt', act).forEach((p) => p.classList.remove('on'));
    if (!was) btn.classList.add('on');
    return;
  }
  if (btn.classList.contains('tick')) {
    btn.classList.toggle('on');
    $('.count .n', act).textContent = $$('.tick.on', act).length;
  }
}

// ---------------------------------------------------------------- speech

let voices = [];
let voice = null;

function loadVoices() {
  voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
  if (!voices.length) return;

  const saved = store.get('voice', '');
  voice = voices.find((v) => v.name === saved)
       || voices.find((v) => v.lang === 'en-US' && /Samantha|Ava|Allison|Google US/i.test(v.name))
       || voices.find((v) => v.lang === 'en-US')
       || voices[0];

  const sel = $('#voicePick');
  sel.innerHTML = voices.map((v) =>
    `<option value="${text(v.name)}"${v === voice ? ' selected' : ''}>${text(v.name)} · ${text(v.lang)}</option>`
  ).join('');
}

loadVoices();
speechSynthesis.onvoiceschanged = loadVoices;

/* The button that was pressed stays lit while its sentence is being read, so
   on a page with hundreds of identical buttons it is clear which one is
   talking — and that the tap was heard at all, on a phone with the sound off.
   court.css draws that state; without the class it is simply never drawn. */
function quiet() { $$('.say.playing').forEach((b) => b.classList.remove('playing')); }

function speak(sentence, btn) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  quiet();
  const u = new SpeechSynthesisUtterance(sentence);
  if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = 'en-US'; }
  u.rate = Number($('#rate').value);
  if (btn) {
    btn.classList.add('playing');
    const stop = () => btn.classList.remove('playing');
    u.onend = stop;
    u.onerror = stop;
  }
  speechSynthesis.speak(u);
}

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  store.set('voice', e.target.value);
  speak('Let’s pick that up where we left off last week.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('Say that again, a little more slowly.');
});
$('#rate').value = store.get('rate', '0.95');

// ---------------------------------------------------------------- panels

const panel = $('#panel');
const panelBtn = $('#panelToggle');

function setPanel(open) {
  panel.hidden = !open;
  panelBtn.setAttribute('aria-expanded', String(open));
}

panelBtn.addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));

$('#zhAll').addEventListener('change', (e) => setAllZh(e.target.checked));

// Unfold the whole notebook — for looking back over a term, or for printing.
$('#openAll').addEventListener('click', () => {
  $$('.session').forEach((s) => setFold(s, true));
  setPanel(false);
});

/* Reveal every answer at once — for going over an exercise together, or for
   picking a session up in the middle. Sessions are unfolded first, or the
   answers would be filled in behind a closed lid. */
$('#showAll').addEventListener('click', () => {
  $$('.session').forEach((s) => setFold(s, true));

  $$('.gap:not(.solved)').forEach((gap) => {
    const right = $$('.opts .chip', gap)[Number(gap.dataset.answer)];
    $('.slot', gap).textContent = right.textContent;
    right.classList.add('done');
    gap.classList.add('solved');
  });

  $$('.match').forEach((act) => {
    $$('.chip', act).forEach((c) => { c.classList.remove('picked'); c.classList.add('done'); });
    $('.tally .done', act).textContent = $$('.col-a .chip', act).length;
    act.classList.add('all-done');
  });

  $$('.card').forEach((c) => { c.classList.add('open'); c.setAttribute('aria-expanded', 'true'); });
  $$('.fix').forEach((f) => { f.classList.add('open'); f.setAttribute('aria-expanded', 'true'); });
  $$('.starters').forEach((s) => { s.hidden = false; });
  $$('.reveal').forEach((r) => r.setAttribute('aria-expanded', 'true'));
  setPanel(false);
});

// A reload is the reset: nothing is stored except the device settings.
$('#reset').addEventListener('click', () => location.reload());

// ---------------------------------------------------------------- chrome

const links = new Map($$('.toc a').map((a) => [a.dataset.target, a]));

/* A contents link opens its session before the browser jumps to it — otherwise
   the anchor lands on a folded heading and nothing appears to happen. The
   hashchange handler below would do it too, but only if the hash actually
   changes: clicking the link for the session already showing does not fire
   one. */
$('#nav').addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  openSession(a.dataset.target);
  closeNav();
});

/* The bar marks the session being read by measuring rather than with an
   IntersectionObserver: an open session is several screens tall while the
   folded ones are a heading each, so at any moment several straddle a sensible
   trigger band and the observer reports whichever fired last. */
const marks = [$('#top'), ...$$('.session')];

function markHere() {
  const line = 90;
  let here = marks[0];
  marks.forEach((m) => { if (m.getBoundingClientRect().top <= line) here = m; });
  links.forEach((a) => a.classList.remove('here'));
  const a = links.get(here.id);
  if (a) { a.classList.add('here'); a.scrollIntoView({ block: 'nearest' }); }
}

markHere();
addEventListener('scroll', markHere, { passive: true });

const navToggle = $('#navToggle');
navToggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

function closeNav() {
  document.body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

$('.nav-scrim').addEventListener('click', closeNav);
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeNav();
  setPanel(false);
  speechSynthesis.cancel();
  quiet();
});

// Arriving on an anchor from outside, or editing the hash by hand.
addEventListener('hashchange', () => {
  const id = decodeURIComponent(location.hash.slice(1));
  const section = openSession(id);
  if (section) section.scrollIntoView();
});

/* Print is the handout, and a handout with folded sessions is blank paper. */
addEventListener('beforeprint', () => $$('.session').forEach((s) => setFold(s, true)));
