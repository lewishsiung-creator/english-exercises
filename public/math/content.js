/* Number Lab — the maths itself.

   Every topic is a *generator*, not a written list: `make()` is called fresh
   for each question, so the bank never runs out and nothing can be memorised
   by position. To change how hard a topic is, edit the numbers inside its
   make() — that is the only place difficulty lives.

   A question is a plain object:

     ask      the line the child reads            "24 + 8 = ?"
     figure   optional SVG string above the ask   a clock, blocks, an array
     answer   the correct answer, as a string     "32"
     choices  optional array of tappable answers  ["3:00", "3:30", …]
     hint     shown only after two wrong tries    "Start at 24 and count on 8."

   No `choices` means the number pad is used instead. Answers are compared as
   strings, so a generator must produce exactly what the pad can type. */

/* ==================== small helpers ==================== */

const rnd = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1));
const pick = (list) => list[Math.floor(Math.random() * list.length)];

function shuffle(list) {
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/* Build the tappable options from one right answer plus some wrong ones.

   The wrong answers are written per topic, because a near miss teaches more
   than a wild one: picking the right answer then means actually checking. Two
   of them can collide by chance — round 250 to the nearest hundred and "the
   nearest ten" gives the same 300 — so this dedupes rather than showing the
   right answer twice. A question is left with three options instead of four;
   that is a fair trade for never showing an impossible one. */
function options(correct, ...wrong) {
  const seen = new Set([String(correct)]);
  const out = [String(correct)];
  for (const w of wrong) {
    const s = String(w);
    if (seen.has(s)) continue;
    seen.add(s);
    out.push(s);
  }
  return shuffle(out);
}

/* Pick one of several kinds of question by weight.

   This is what stops a topic from being easier than its own name. Left to
   plain random numbers, the skill a topic exists to teach turns up by
   accident: "Add to 20" crossed ten in 46% of questions and handed over a
   freebie (one addend of 1 or 2) in 30% of them, and "Bigger or smaller" put
   the same digit in the tens place — the only case where you have to look at
   the ones at all — 7% of the time.

   So the generators below choose a *kind* first and then build numbers that
   are guaranteed to be that kind, rather than rolling numbers and hoping.
   The weights are the teaching decision and the one thing worth editing: the
   core skill gets the majority, with the easier kinds kept in so a round
   still has somewhere to breathe.

   It also makes the hint honest. A question built to need making ten can say
   "take 1 from the 5 to make ten" instead of the generic "count on 5", which
   is the wrong strategy for that question. */
function weighted(table) {
  const entries = Object.entries(table);
  let r = Math.random() * entries.reduce((sum, [, w]) => sum + w, 0);
  for (const [kind, w] of entries) if ((r -= w) < 0) return kind;
  return entries[0][0];
}

/* ==================== drawings ====================

   Every figure is a self-contained SVG string. They use the page's CSS
   variables for colour, so the drawings stay in the same palette as the rest
   of the page and there is only one place to change it. */

/* The width and height attributes are not decoration: an inline SVG with only
   a viewBox has no intrinsic size, and in a grid or flex parent it collapses
   to nothing. CSS then scales it down from these, never up. */
const svg = (w, h, body) =>
  `<svg class="fig" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"
    role="img" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;

/* --- a clock face --- */
function clockFig(hour, minute) {
  const cx = 100, cy = 100, r = 88;
  let marks = '';
  for (let i = 0; i < 60; i++) {
    const a = (i * 6) * Math.PI / 180;
    const big = i % 5 === 0;
    const inner = big ? r - 14 : r - 7;
    marks += `<line x1="${cx + inner * Math.sin(a)}" y1="${cy - inner * Math.cos(a)}"
      x2="${cx + (r - 2) * Math.sin(a)}" y2="${cy - (r - 2) * Math.cos(a)}"
      stroke="var(--line-strong)" stroke-width="${big ? 3 : 1.5}" stroke-linecap="round"/>`;
  }
  let nums = '';
  for (let n = 1; n <= 12; n++) {
    const a = (n * 30) * Math.PI / 180;
    nums += `<text x="${cx + (r - 30) * Math.sin(a)}" y="${cy - (r - 30) * Math.cos(a) + 7}"
      text-anchor="middle" font-size="20" font-weight="700" fill="var(--ink)">${n}</text>`;
  }
  const ha = ((hour % 12) * 30 + minute * 0.5) * Math.PI / 180;
  const ma = (minute * 6) * Math.PI / 180;

  return svg(200, 200, `
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--card)" stroke="var(--line-strong)" stroke-width="4"/>
    ${marks}${nums}
    <line x1="${cx}" y1="${cy}" x2="${cx + 48 * Math.sin(ha)}" y2="${cy - 48 * Math.cos(ha)}"
      stroke="var(--ink)" stroke-width="9" stroke-linecap="round"/>
    <line x1="${cx}" y1="${cy}" x2="${cx + 70 * Math.sin(ma)}" y2="${cy - 70 * Math.cos(ma)}"
      stroke="var(--blue)" stroke-width="6" stroke-linecap="round"/>
    <circle cx="${cx}" cy="${cy}" r="7" fill="var(--ink)"/>`);
}

/* --- base-ten blocks: flats of 100, rods of 10, single ones --- */
function blocksFig(value) {
  const hundreds = Math.floor(value / 100);
  const tens = Math.floor((value % 100) / 10);
  const ones = value % 10;
  const u = 9, gap = 14;
  let x = 6, body = '';

  for (let f = 0; f < hundreds; f++) {
    body += `<rect x="${x}" y="6" width="${u * 10}" height="${u * 10}" fill="var(--purple-soft)"
      stroke="var(--purple)" stroke-width="2"/>`;
    for (let i = 1; i < 10; i++) {
      body += `<line x1="${x + i * u}" y1="6" x2="${x + i * u}" y2="${6 + u * 10}" stroke="var(--purple)" stroke-width=".7"/>`;
      body += `<line x1="${x}" y1="${6 + i * u}" x2="${x + u * 10}" y2="${6 + i * u}" stroke="var(--purple)" stroke-width=".7"/>`;
    }
    x += u * 10 + gap;
  }
  for (let t = 0; t < tens; t++) {
    body += `<rect x="${x}" y="6" width="${u}" height="${u * 10}" fill="var(--blue-soft)"
      stroke="var(--blue)" stroke-width="2"/>`;
    for (let i = 1; i < 10; i++) {
      body += `<line x1="${x}" y1="${6 + i * u}" x2="${x + u}" y2="${6 + i * u}" stroke="var(--blue)" stroke-width=".7"/>`;
    }
    x += u + 5;
  }
  if (ones) x += gap - 5;
  for (let o = 0; o < ones; o++) {
    const col = Math.floor(o / 5), row = o % 5;
    body += `<rect x="${x + col * (u + 5)}" y="${6 + row * (u + 5)}" width="${u}" height="${u}"
      fill="var(--orange-soft)" stroke="var(--orange)" stroke-width="2"/>`;
  }
  const width = x + (ones ? Math.ceil(ones / 5) * (u + 5) : 0) + 6;
  return svg(Math.max(width, 120), 102, body);
}

/* --- an array of counters: the picture behind "3 groups of 4" --- */
function arrayFig(rows, cols) {
  const s = 26, pad = 8;
  let body = '';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      body += `<circle cx="${pad + c * s + s / 2}" cy="${pad + r * s + s / 2}" r="${s / 2 - 4}"
        fill="var(--green-soft)" stroke="var(--green)" stroke-width="2.5"/>`;
    }
  }
  return svg(cols * s + pad * 2, rows * s + pad * 2, body);
}

/* --- a fraction bar, k parts of n shaded ---
   The outline is a deeper purple than the fill on purpose. Stroked in the
   same purple, the shaded parts merge into one block and the child cannot
   count them — which is the whole question. */
function fractionFig(k, n) {
  const w = 300, h = 66, pw = w / n;
  let body = '';
  for (let i = 0; i < n; i++) {
    body += `<rect x="${i * pw + 4}" y="4" width="${pw}" height="${h - 8}"
      fill="${i < k ? 'var(--purple)' : 'var(--card)'}" stroke="var(--purple-deep)" stroke-width="3"/>`;
  }
  return svg(w + 11, h, body);
}

/* --- coins, drawn at true relative size so they can be told apart --- */
const COINS = {
  penny:   { value: 1,  r: 20, fill: '#e0a06a', ink: '#8a5a2a', label: '1¢' },
  nickel:  { value: 5,  r: 24, fill: '#cfd4d8', ink: '#6b7076', label: '5¢' },
  dime:    { value: 10, r: 18, fill: '#dfe4e8', ink: '#6b7076', label: '10¢' },
  quarter: { value: 25, r: 28, fill: '#c9ced3', ink: '#5f6469', label: '25¢' },
};

function coinsFig(list) {
  let x = 6, body = '';
  for (const name of list) {
    const c = COINS[name];
    body += `<circle cx="${x + c.r}" cy="34" r="${c.r}" fill="${c.fill}" stroke="${c.ink}" stroke-width="2.5"/>
      <text x="${x + c.r}" y="${39}" text-anchor="middle" font-size="14" font-weight="800"
        fill="${c.ink}">${c.label}</text>`;
    x += c.r * 2 + 10;
  }
  return svg(x + 6, 68, body);
}

/* --- a rectangle on grid paper, for area and perimeter --- */
function rectFig(w, h) {
  const u = Math.min(30, Math.floor(240 / Math.max(w, h)));
  let body = `<rect x="4" y="4" width="${w * u}" height="${h * u}"
    fill="var(--blue-soft)" stroke="var(--blue)" stroke-width="3"/>`;
  for (let i = 1; i < w; i++) body += `<line x1="${4 + i * u}" y1="4" x2="${4 + i * u}" y2="${4 + h * u}" stroke="var(--blue)" stroke-width="1"/>`;
  for (let i = 1; i < h; i++) body += `<line x1="4" y1="${4 + i * u}" x2="${4 + w * u}" y2="${4 + i * u}" stroke="var(--blue)" stroke-width="1"/>`;
  body += `<text x="${4 + w * u / 2}" y="${h * u + 26}" text-anchor="middle" font-size="16"
    font-weight="700" fill="var(--ink-soft)">${w}</text>`;
  body += `<text x="${w * u + 18}" y="${4 + h * u / 2 + 5}" text-anchor="middle" font-size="16"
    font-weight="700" fill="var(--ink-soft)">${h}</text>`;
  return svg(w * u + 34, h * u + 34, body);
}

/* --- counters, used only by the explanations ---
   Two groups side by side with a plus between them, or one group with the
   last few crossed out. This is what "add" and "take away" actually mean,
   before either becomes a sum on a page. */
function countersFig(a, b, { takeAway = false } = {}) {
  const s = 34, pad = 8, signW = takeAway ? 0 : 34;
  const dot = (x, faded) => `<circle cx="${x + s / 2}" cy="${pad + s / 2}" r="${s / 2 - 5}"
    fill="${faded ? 'var(--card)' : 'var(--green-soft)'}"
    stroke="${faded ? 'var(--line-strong)' : 'var(--green)'}" stroke-width="3"
    ${faded ? 'stroke-dasharray="4 4"' : ''}/>`;
  const cross = (x) => `<path d="M${x + 9} ${pad + 9} L${x + s - 9} ${pad + s - 9}
    M${x + s - 9} ${pad + 9} L${x + 9} ${pad + s - 9}"
    stroke="var(--oops)" stroke-width="3.5" stroke-linecap="round"/>`;

  let x = pad, body = '';
  for (let i = 0; i < a; i++) { body += dot(x, false); x += s; }

  if (takeAway) {
    for (let i = 0; i < b; i++) { body += dot(x, true) + cross(x); x += s; }
  } else {
    body += `<text x="${x + signW / 2}" y="${pad + s / 2 + 9}" text-anchor="middle"
      font-size="28" font-weight="800" fill="var(--ink-soft)">+</text>`;
    x += signW;
    for (let i = 0; i < b; i++) {
      body += `<circle cx="${x + s / 2}" cy="${pad + s / 2}" r="${s / 2 - 5}"
        fill="var(--orange-soft)" stroke="var(--orange)" stroke-width="3"/>`;
      x += s;
    }
  }
  return svg(x + pad, s + pad * 2, body);
}

/* --- hops along a number line, for counting on and counting back ---
   One arc per hop, because "count on 3" is three jumps and drawing it as one
   long arrow is the thing children get wrong. */
function hopsFig(from, to) {
  const lo = Math.min(from, to) - 1, hi = Math.max(from, to) + 1;
  const step = Math.min(38, Math.floor(300 / (hi - lo)));
  const pad = 18, y = 78;
  const at = (v) => pad + (v - lo) * step;

  let body = `<line x1="${pad}" y1="${y}" x2="${at(hi)}" y2="${y}"
    stroke="var(--line-strong)" stroke-width="3"/>`;
  for (let v = lo; v <= hi; v++) {
    const on = v >= Math.min(from, to) && v <= Math.max(from, to);
    body += `<line x1="${at(v)}" y1="${y - 7}" x2="${at(v)}" y2="${y + 7}"
        stroke="var(--line-strong)" stroke-width="2.5"/>
      <text x="${at(v)}" y="${y + 28}" text-anchor="middle" font-size="15"
        font-weight="${on ? 800 : 600}" fill="${on ? 'var(--ink)' : 'var(--ink-soft)'}">${v}</text>`;
  }
  const dir = to > from ? 1 : -1;
  for (let v = from; v !== to; v += dir) {
    const x1 = at(v), x2 = at(v + dir);
    body += `<path d="M${x1} ${y - 10} Q${(x1 + x2) / 2} ${y - 48} ${x2} ${y - 10}"
      fill="none" stroke="var(--blue)" stroke-width="3" stroke-linecap="round"/>`;
  }
  body += `<circle cx="${at(from)}" cy="${y}" r="7" fill="var(--orange)"/>
    <circle cx="${at(to)}" cy="${y}" r="7" fill="var(--green)"/>`;
  return svg(at(hi) + pad, y + 36, body);
}

/* --- the picture beside a word problem ---

   Not decoration. Nothing on this page is read aloud, so for a six-year-old
   reading it himself this picture is what stops one unfamiliar word blocking
   the whole question — the job the voice used to do. Grade 1 numbers are
   small enough to count, and counting is a first-grade strategy rather than
   a way round the question. Grade 2 and 3 problems carry no picture: their
   numbers are too big to count, and by then the reading is the point. */
function storyFig(kind, a, b, icon) {
  const s = 34, gap = 10, pad = 10;
  /* Five to a row. Eighteen apples in one line came out 662px wide, which a
     375px phone scales down to 16px an apple — too small to count, which is
     the one thing the picture is for. Fives also group the way a child
     counts them. */
  const PER_ROW = 5;

  const item = (x, y, faded) =>
    `<text x="${x + s / 2}" y="${y + s - 7}" text-anchor="middle" font-size="${s - 9}"
      opacity="${faded ? 0.28 : 1}">${icon}</text>`;
  const cross = (x, y) => `<path d="M${x + 8} ${y + 8} L${x + s - 8} ${y + s - 8}
    M${x + s - 8} ${y + 8} L${x + 8} ${y + s - 8}"
    stroke="var(--oops)" stroke-width="3" stroke-linecap="round"/>`;

  /* A block of n laid out in rows of five, from a given corner. `skip` many
     at the start are drawn solid, the rest faded and crossed. */
  const block = (n, x0, y0, solid = n) => {
    let out = '';
    for (let i = 0; i < n; i++) {
      const x = x0 + (i % PER_ROW) * s;
      const y = y0 + Math.floor(i / PER_ROW) * (s + gap);
      const gone = i >= solid;
      out += item(x, y, gone) + (gone ? cross(x, y) : '');
    }
    return out;
  };
  const rows = (n) => Math.ceil(n / PER_ROW);
  const blockW = (n) => Math.min(n, PER_ROW) * s;
  const blockH = (n) => rows(n) * (s + gap) - gap;

  if (kind === 'take') {
    return svg(pad * 2 + blockW(a), pad * 2 + blockH(a), block(a, pad, pad, a - b));
  }

  if (kind === 'compare') {
    /* Two single rows, left-aligned, so the extra ones stick out past the end
       of the shorter one — that overhang is the whole of what "how many
       more" means.

       Drawn plainly, 8 over 2 just looked like ten of them that had wrapped,
       and the comparison disappeared. So each row sits on its own baseline
       and a dashed fence falls at the end of the shorter row: everything to
       the right of it is the answer. */
    const rowGap = 18;
    const y2 = pad + s + rowGap;
    const shortEnd = pad + Math.min(a, b) * s;
    const wide = Math.max(a, b);
    let out = '';
    for (const [n, y] of [[a, pad], [b, y2]]) {
      out += `<line x1="${pad - 3}" y1="${y + s + 1}" x2="${pad + n * s + 3}" y2="${y + s + 1}"
        stroke="var(--line-strong)" stroke-width="2.5" stroke-linecap="round"/>`;
      for (let i = 0; i < n; i++) out += item(pad + i * s, y, false);
    }
    if (a !== b) {
      out += `<line x1="${shortEnd}" y1="${pad - 4}" x2="${shortEnd}" y2="${y2 + s + 6}"
        stroke="var(--orange)" stroke-width="3" stroke-dasharray="6 5" stroke-linecap="round"/>`;
    }
    return svg(pad * 2 + wide * s, pad * 2 + s * 2 + rowGap + 8, out);
  }

  // join: the two groups with a plus between them
  const signW = 30;
  const left = pad;
  const right = pad + blockW(a) + signW;
  const h = Math.max(blockH(a), blockH(b));
  return svg(pad * 2 + blockW(a) + signW + blockW(b), pad * 2 + h,
    block(a, left, pad)
    + `<text x="${pad + blockW(a) + signW / 2}" y="${pad + h / 2 + 9}" text-anchor="middle"
        font-size="26" font-weight="800" fill="var(--ink-soft)">+</text>`
    + block(b, right, pad));
}

/* --- a number line with one point marked, for rounding --- */
function lineFig(lo, hi, mark) {
  const w = 320, pad = 20;
  const at = (v) => pad + (v - lo) / (hi - lo) * (w - pad * 2);
  const mid = (lo + hi) / 2;
  let body = `<line x1="${pad}" y1="46" x2="${w - pad}" y2="46" stroke="var(--line-strong)" stroke-width="3"/>`;
  for (const v of [lo, mid, hi]) {
    body += `<line x1="${at(v)}" y1="38" x2="${at(v)}" y2="54" stroke="var(--line-strong)" stroke-width="3"/>
      <text x="${at(v)}" y="78" text-anchor="middle" font-size="17" font-weight="700"
        fill="var(--ink-soft)">${v}</text>`;
  }
  body += `<circle cx="${at(mark)}" cy="46" r="9" fill="var(--orange)"/>
    <text x="${at(mark)}" y="24" text-anchor="middle" font-size="17" font-weight="800"
      fill="var(--orange)">${mark}</text>`;
  return svg(w, 88, body);
}

/* A clock is answered by picking a written time, so this builds both the
   answer and the options. */
const timeText = (h, m) => `${h}:${String(m).padStart(2, '0')}`;

/* ==================== redrawing a saved question ====================

   A question's `figure` is a rendered SVG string, and they are big: a clock
   is 14KB and a place-value question up to 25KB. A review queue that stored
   them would run to megabytes and would not fit in localStorage, so a figure
   question also carries the recipe that drew it — a function name and its
   arguments, a hundred bytes at most. The queue keeps the recipe and the
   drawing is rebuilt on the way back in.

   This table is the only place the recipe and the drawing can drift apart,
   so there is a check that every topic's recipe redraws its own figure
   exactly. */

const FIGURES = {
  clock: clockFig,
  blocks: blocksFig,
  array: arrayFig,
  fraction: fractionFig,
  coins: coinsFig,
  rect: rectFig,
  line: lineFig,
  story: storyFig,
};

/* ==================== the people and things in a story ====================

   Every name is one or two syllables and every object is a word a six-year
   old can decode unaided, because nothing here is read aloud.

   The name is repeated rather than replaced by "she" or "he". Working out
   who a pronoun refers to is a second comprehension task sitting on top of
   the maths, and early readers repeat the name for exactly that reason. */

const WHO = ['Mia', 'Ben', 'Ava', 'Leo', 'Zoe', 'Max', 'Sam', 'Ivy'];

const THINGS = [
  { one: 'apple', many: 'apples', icon: '🍎' },
  { one: 'car', many: 'cars', icon: '🚗' },
  { one: 'shell', many: 'shells', icon: '🐚' },
  { one: 'hat', many: 'hats', icon: '🎩' },
  { one: 'book', many: 'books', icon: '📘' },
  { one: 'cat', many: 'cats', icon: '🐱' },
  { one: 'star', many: 'stars', icon: '⭐' },
  { one: 'frog', many: 'frogs', icon: '🐸' },
  { one: 'bug', many: 'bugs', icon: '🐞' },
  { one: 'cake', many: 'cakes', icon: '🧁' },
];

/* Only the things that sensibly go in a container, and only containers you
   would put them in. Left to a free pick of both lists, one question in six
   came out as cats in boxes or stars on a plate, and a six-year-old reading
   that is thinking about the cat rather than the sum. */
const PACKABLE = THINGS.filter((t) => ['apple', 'shell', 'hat', 'book', 'star', 'cake', 'car'].includes(t.one));

const HOLDERS = [
  { one: 'box', many: 'boxes' },
  { one: 'bag', many: 'bags' },
  { one: 'basket', many: 'baskets' },
];

/* Two different names, for the problems that compare one child with another. */
function twoNames() {
  const a = pick(WHO);
  let b = pick(WHO);
  while (b === a) b = pick(WHO);
  return [a, b];
}

const redrawFigure = (recipe) =>
  Array.isArray(recipe) && FIGURES[recipe[0]] ? FIGURES[recipe[0]](...recipe.slice(1)) : '';

/* ==================== Grade 1 ==================== */

/* `next` is where a topic leads once he has it: the same skill, one level up.
   Only offered when a topic is mastered, and only once — an invitation, not
   a gate, and never a nag. Topics with nowhere obvious to go have no next. */

const G1 = [
  {
    id: 'add20',
    next: 'add100',
    name: 'Add to 20',
    icon: '➕',
    blurb: 'Sums that stay under twenty',
    make() {
      const kind = weighted({ makeTen: 6, within10: 2.5, teen: 1.5 });

      if (kind === 'makeTen') {
        // Both single digits, sum always over ten — the question that the
        // make-ten strategy exists for, and the core of first-grade addition.
        const a = rnd(4, 9);
        const b = rnd(11 - a, 9);
        return {
          ask: `${a} + ${b} = ?`,
          answer: String(a + b),
          hint: `Take ${10 - a} from the ${b} to make ten. Then 10 + ${b - (10 - a)}.`,
        };
      }

      if (kind === 'within10') {
        const a = rnd(2, 7);
        const b = rnd(2, 10 - a);
        return {
          ask: `${a} + ${b} = ?`,
          answer: String(a + b),
          hint: `Start at ${a} and count on ${b} more.`,
        };
      }

      // A teen plus a few, staying inside the ten: this is place value, not
      // adding — 13 + 4 is really 3 + 4 with a ten sitting in front.
      const a = rnd(11, 15);
      const b = rnd(2, Math.min(4, 19 - a));
      return {
        ask: `${a} + ${b} = ?`,
        answer: String(a + b),
        hint: `${a} is 10 and ${a - 10}. Add ${b} to the ${a - 10}.`,
      };
    },
  },
  {
    id: 'sub20',
    next: 'sub100',
    name: 'Take away',
    icon: '➖',
    blurb: 'Subtracting inside twenty',
    make() {
      const kind = weighted({ crossTen: 5.5, within10: 2.5, teen: 2 });

      if (kind === 'crossTen') {
        // A teen take away enough to drop under ten. The counterpart of
        // making ten, and the one most children get stuck on.
        const a = rnd(11, 18);
        const b = rnd(a - 9, 9);
        return {
          ask: `${a} − ${b} = ?`,
          answer: String(a - b),
          hint: `Take ${a - 10} away to get down to 10. Then take ${b - (a - 10)} more.`,
        };
      }

      if (kind === 'within10') {
        const a = rnd(5, 10);
        const b = rnd(2, a - 1);
        return {
          ask: `${a} − ${b} = ?`,
          answer: String(a - b),
          hint: `Start at ${a} and count back ${b}.`,
        };
      }

      // Stays in the teens: the ten is untouched and only the ones change.
      const a = rnd(13, 19);
      const b = rnd(2, a - 10);
      return {
        ask: `${a} − ${b} = ?`,
        answer: String(a - b),
        hint: `The ten stays. Just take ${b} from the ${a - 10}.`,
      };
    },
  },
  {
    id: 'missing1',
    name: 'Missing number',
    icon: '🔍',
    blurb: 'What goes in the box?',
    make() {
      const total = rnd(8, 20);
      const a = rnd(1, total - 1);
      const flip = Math.random() < 0.5;
      return flip
        ? {
            ask: `${a} + ? = ${total}`,
            answer: String(total - a),
            hint: `How far is it from ${a} up to ${total}?`,
          }
        : {
            ask: `? + ${total - a} = ${total}`,
            answer: String(a),
            hint: `Take ${total - a} away from ${total}.`,
          };
    },
  },
  {
    id: 'tensones',
    next: 'place1000',
    name: 'Tens and ones',
    icon: '🧱',
    blurb: 'Reading the blocks',
    make() {
      const value = rnd(11, 99);
      if (Math.random() < 0.5) {
        return {
          figure: blocksFig(value),
          redraw: ['blocks', value],
          ask: 'How many in all?',
          answer: String(value),
          hint: `Each tall rod is 10. Count the rods first, then the little ones.`,
        };
      }
      const t = Math.floor(value / 10), o = value % 10;
      return {
        ask: `${t} tens and ${o} ones = ?`,
        answer: String(value),
        hint: `${t} tens is ${t * 10}. Then add ${o}.`,
      };
    },
  },
  {
    id: 'compare1',
    next: 'place1000',
    name: 'Bigger or smaller',
    icon: '⚖️',
    blurb: 'Greater than, less than, equal',
    make() {
      const kind = weighted({ sameTens: 5, differentTens: 3.5, equal: 1.5 });
      let a, b, hint;

      /* Roll a second digit that cannot land on the first: pick from a range
         one short, then step over the one being avoided. */
      const otherThan = (taken, lo, hi) => {
        const v = rnd(lo, hi - 1);
        return v >= taken ? v + 1 : v;
      };

      if (kind === 'sameTens') {
        // The whole skill: when the tens match, the ones decide it. Left to
        // chance this turned up in 7% of questions.
        const t = rnd(1, 9);
        const oa = rnd(0, 9);
        a = t * 10 + oa;
        b = t * 10 + otherThan(oa, 0, 9);
        hint = `Both have ${t} tens, so the ones decide it.`;
      } else if (kind === 'differentTens') {
        const ta = rnd(1, 9);
        a = ta * 10 + rnd(0, 9);
        b = otherThan(ta, 1, 9) * 10 + rnd(0, 9);
        hint = 'Look at the tens first. More tens wins.';
      } else {
        a = b = rnd(10, 99);
        hint = 'Look carefully — these two are the same number.';
      }

      return {
        ask: `${a} ? ${b}`,
        choices: ['<', '=', '>'],
        answer: a > b ? '>' : a < b ? '<' : '=',
        hint,
      };
    },
  },
  {
    id: 'story1',
    next: 'story2',
    name: 'Word problems',
    icon: '📖',
    blurb: 'Maths hiding in a story',
    /* The kinds are the ones the research names, not ones I invented: a
       result unknown, a change unknown, and a comparison. They are listed in
       the order they get hard. The last two are where children who can
       already add come unstuck, which is exactly why they are in here and
       not left to chance. */
    make() {
      const kind = weighted({ join: 3.5, take: 3.5, compare: 2, changeUnknown: 1 });
      const it = pick(THINGS);
      const who = pick(WHO);

      if (kind === 'join') {
        const a = rnd(2, 9);
        const b = rnd(2, Math.min(9, 18 - a));
        return {
          ask: `${who} has ${a} ${it.many}. ${who} gets ${b} more. How many now?`,
          figure: storyFig('join', a, b, it.icon),
          redraw: ['story', 'join', a, b, it.icon],
          answer: String(a + b),
          hint: `${a} and ${b} more. Count them all.`,
        };
      }

      if (kind === 'take') {
        const a = rnd(4, 10);
        const b = rnd(1, a - 1);
        return {
          ask: `${who} has ${a} ${it.many}. ${who} gives ${b} away. How many are left?`,
          figure: storyFig('take', a, b, it.icon),
          redraw: ['story', 'take', a, b, it.icon],
          answer: String(a - b),
          hint: `Start with ${a}. Take ${b} away. Count what is left.`,
        };
      }

      if (kind === 'compare') {
        const [one, two] = twoNames();
        const a = rnd(4, 10);
        const b = rnd(1, a - 1);
        return {
          ask: `${one} has ${a} ${it.many}. ${two} has ${b}. How many more does ${one} have?`,
          figure: storyFig('compare', a, b, it.icon),
          redraw: ['story', 'compare', a, b, it.icon],
          answer: String(a - b),
          hint: 'The rows are lined up. Count the extra ones on the end.',
        };
      }

      // The change is the unknown: he has to work out what happened in the
      // middle, not what came out at the end.
      // Kept inside ten. The compare picture has to stay on one line for the
      // overhang to mean anything, and eighteen in a row shrinks on a phone
      // until it cannot be counted. Change-unknown past ten without a
      // picture is what "Missing number" is for.
      const start = rnd(1, 6);
      const total = start + rnd(2, 10 - start);
      return {
        ask: `${who} has ${start} ${it.many}. Now ${who} has ${total}. How many more did ${who} get?`,
        figure: storyFig('compare', total, start, it.icon),
        redraw: ['story', 'compare', total, start, it.icon],
        answer: String(total - start),
        hint: `Count up from ${start} to ${total}.`,
      };
    },
  },
  {
    id: 'clock1',
    next: 'clock5',
    name: 'What time is it?',
    icon: '🕐',
    blurb: 'O’clock and half past',
    make() {
      const h = rnd(1, 12);
      const m = pick([0, 0, 30]);
      return {
        figure: clockFig(h, m),
        redraw: ['clock', h, m],
        ask: 'What time is it?',
        // The three classic misreadings: the wrong hand, the next hour along,
        // and the hour before — which is what the short hand looks nearest to
        // at half past.
        choices: options(
          timeText(h, m),
          timeText(h, m === 0 ? 30 : 0),
          timeText(h === 12 ? 1 : h + 1, m),
          timeText(h === 1 ? 12 : h - 1, m === 0 ? 30 : 0),
        ),
        answer: timeText(h, m),
                hint: 'The short hand tells the hour. The long hand tells the minutes.',
      };
    },
  },
];

/* ==================== Grade 2 ==================== */

const G2 = [
  {
    id: 'add100',
    next: 'add1000',
    name: 'Add two digits',
    icon: '🔢',
    blurb: 'Sums up to one hundred',
    make() {
      const kind = weighted({ regroup: 6.5, plain: 3.5 });

      if (kind === 'regroup') {
        // Ones chosen to overflow, tens kept small enough that the carry
        // still lands under a hundred.
        const oa = rnd(2, 9), ob = rnd(10 - oa, 9);
        const ta = rnd(1, 4), tb = rnd(1, Math.min(4, 8 - ta));
        const a = ta * 10 + oa, b = tb * 10 + ob;
        return {
          ask: `${a} + ${b} = ?`,
          answer: String(a + b),
          hint: `${oa} + ${ob} is ${oa + ob} — that is a whole ten and ${(oa + ob) % 10} left over.`,
        };
      }

      const oa = rnd(1, 7), ob = rnd(1, 9 - oa);
      const ta = rnd(1, 5), tb = rnd(1, Math.min(4, 9 - ta));
      const a = ta * 10 + oa, b = tb * 10 + ob;
      return {
        ask: `${a} + ${b} = ?`,
        answer: String(a + b),
        hint: `Add the tens first: ${ta * 10} + ${tb * 10}. Then the ones.`,
      };
    },
  },
  {
    id: 'sub100',
    next: 'add1000',
    name: 'Subtract two digits',
    icon: '📉',
    blurb: 'Taking two-digit numbers apart',
    make() {
      const kind = weighted({ borrow: 6.5, plain: 3.5 });

      if (kind === 'borrow') {
        // Top ones digit deliberately smaller than the bottom one, so a ten
        // has to be broken open. Tens kept apart to keep the answer positive.
        const oa = rnd(0, 7), ob = rnd(oa + 1, 9);
        const tb = rnd(1, 4), ta = rnd(tb + 1, 9);
        const a = ta * 10 + oa, b = tb * 10 + ob;
        return {
          ask: `${a} − ${b} = ?`,
          answer: String(a - b),
          hint: `${oa} is too small to take ${ob} from. Break a ten open: ${oa + 10} − ${ob}.`,
        };
      }

      const oa = rnd(1, 9), ob = rnd(0, oa);
      const tb = rnd(1, 4), ta = rnd(tb + 1, 9);
      const a = ta * 10 + oa, b = tb * 10 + ob;
      return {
        ask: `${a} − ${b} = ?`,
        answer: String(a - b),
        hint: 'Take away the tens first, then the ones.',
      };
    },
  },
  {
    id: 'place1000',
    next: 'add1000',
    name: 'Hundreds, tens, ones',
    icon: '🏛️',
    blurb: 'What each digit is worth',
    make() {
      const value = rnd(101, 999);
      const s = String(value);
      // Only ask about a digit that is not zero, and not one that appears
      // twice — "what is the 3 worth" has two answers in 313.
      const spots = [0, 1, 2].filter((i) => s[i] !== '0' && s.indexOf(s[i]) === s.lastIndexOf(s[i]));
      if (spots.length && Math.random() < 0.5) {
        const spot = pick(spots);
        const digit = Number(s[spot]);
        const worth = digit * [100, 10, 1][spot];
        const place = ['hundreds', 'tens', 'ones'][spot];
        return {
          ask: `In ${value}, what is the ${digit} worth?`,
          // The same digit read in each of the other two places.
          choices: options(worth, digit, digit * 10, digit * 100),
          answer: String(worth),
          hint: `The ${digit} is sitting in the ${place} place.`,
        };
      }
      return {
        figure: blocksFig(value),
          redraw: ['blocks', value],
        ask: 'How many in all?',
        answer: String(value),
        hint: 'Each big square is 100, each tall rod is 10.',
      };
    },
  },
  {
    id: 'money',
    name: 'Count the money',
    icon: '🪙',
    blurb: 'Coins added up in cents',
    make() {
      const bag = [];
      const q = rnd(0, 2), d = rnd(0, 3), n = rnd(0, 2), p = rnd(0, 4);
      for (let i = 0; i < q; i++) bag.push('quarter');
      for (let i = 0; i < d; i++) bag.push('dime');
      for (let i = 0; i < n; i++) bag.push('nickel');
      for (let i = 0; i < p; i++) bag.push('penny');
      if (!bag.length) bag.push('dime', 'penny');
      const total = bag.reduce((sum, c) => sum + COINS[c].value, 0);
      return {
        figure: coinsFig(bag),
        redraw: ['coins', bag],
        ask: 'How many cents?',
        answer: String(total),
        hint: 'Count the big coins first, then add the small ones.',
      };
    },
  },
  {
    id: 'story2',
    next: 'story3',
    name: 'Word problems',
    icon: '📖',
    blurb: 'Bigger numbers in a story',
    /* No picture from here on: these numbers are too big to count, and by
       second grade reading the problem is the thing being practised. */
    make() {
      const kind = weighted({ join: 3, take: 3, money: 2, twoStep: 2 });
      const it = pick(THINGS);
      const who = pick(WHO);

      if (kind === 'join') {
        const a = rnd(21, 58);
        const b = rnd(13, 99 - a);
        return {
          ask: `${who} has ${a} ${it.many}. ${who} gets ${b} more. How many now?`,
          answer: String(a + b),
          hint: `Add the tens first, then the ones.`,
        };
      }

      if (kind === 'take') {
        const a = rnd(35, 99);
        const b = rnd(12, a - 10);
        return {
          ask: `There are ${a} ${it.many}. ${b} are taken away. How many are left?`,
          answer: String(a - b),
          hint: `Start at ${a} and take away ${b}.`,
        };
      }

      if (kind === 'money') {
        const cost = rnd(15, 78);
        const paid = Math.ceil(cost / 10) * 10 + rnd(1, 2) * 10;
        // Something you would actually buy — "a bug costs 33¢" sends him
        // thinking about the bug.
        const sold = pick(PACKABLE);
        return {
          ask: `A ${sold.one} costs ${cost}¢. ${who} pays ${paid}¢. How much change?`,
          answer: String(paid - cost),
          hint: `Count up from ${cost}¢ to ${paid}¢.`,
        };
      }

      // Two steps, because one-step problems stop testing anything once the
      // arithmetic is fluent: the work is holding on to the middle number.
      const a = rnd(20, 45);
      const b = rnd(11, 30);
      // Never give away exactly what was just picked up: the answer would be
      // the number he started with, which teaches him to skip the middle.
      let c = rnd(5, Math.min(25, a + b - 5));
      if (c === b) c = c > 5 ? c - 1 : c + 1;
      return {
        ask: `${who} has ${a} ${it.many}. ${who} gets ${b} more. Then ${who} gives ${c} away. How many now?`,
        answer: String(a + b - c),
        hint: `First work out ${a} + ${b}. Then take ${c} off that.`,
      };
    },
  },
  {
    id: 'clock5',
    name: 'Time to five minutes',
    icon: '⏰',
    blurb: 'Reading past the half hour',
    make() {
      const h = rnd(1, 12);
      const m = rnd(0, 11) * 5;
      const right = timeText(h, m);
      const wrong = shuffle([
        timeText(h, (m + 5) % 60),
        timeText(h, (m + 55) % 60),
        timeText(h === 12 ? 1 : h + 1, m),
      ]).slice(0, 3);
      return {
        figure: clockFig(h, m),
        redraw: ['clock', h, m],
        ask: 'What time is it?',
        choices: shuffle([right, ...wrong]),
        answer: right,
                hint: 'Count the long hand round in fives.',
      };
    },
  },
  {
    id: 'groups',
    next: 'times',
    name: 'Equal groups',
    icon: '🟢',
    blurb: 'Rows and columns, before times tables',
    make() {
      const rows = rnd(2, 5), cols = rnd(2, 6);
      if (Math.random() < 0.5) {
        return {
          figure: arrayFig(rows, cols),
          redraw: ['array', rows, cols],
          ask: 'How many counters?',
          answer: String(rows * cols),
          hint: `There are ${rows} rows with ${cols} in each row.`,
        };
      }
      return {
        figure: arrayFig(rows, cols),
        redraw: ['array', rows, cols],
        ask: `${rows} rows of ${cols} = ?`,
        answer: String(rows * cols),
        hint: `Add ${cols} to itself ${rows} times.`,
      };
    },
  },
];

/* ==================== Grade 3 ==================== */

/* The multiplication facts, weighted by how hard they actually are.

   Uniform random across 2–10 made 39% of questions a ×2 or a ×10 — the two
   tables a child has usually finished before the rest begin. The facts that
   take a year to become automatic, the 6s to 9s against each other, were
   getting no more practice than the ones he already knew. Division draws from
   the same pool, so the two topics drill the same shaky facts from both
   directions. */
function timesFact() {
  const kind = weighted({ hard: 6, mid: 2.5, easy: 1.5 });
  if (kind === 'hard') return shuffle([rnd(6, 9), rnd(3, 9)]);
  if (kind === 'mid') return shuffle([rnd(3, 5), rnd(3, 9)]);
  return shuffle([pick([2, 5, 10]), rnd(2, 10)]);
}

const G3 = [
  {
    id: 'times',
    next: 'divide',
    name: 'Times tables',
    icon: '✖️',
    blurb: 'Facts up to ten times ten',
    make() {
      const [a, b] = timesFact();
      return {
        ask: `${a} × ${b} = ?`,
        answer: String(a * b),
        hint: `${a} × ${b - 1} is ${a * (b - 1)}. One more group of ${a} gets you there.`,
      };
    },
  },
  {
    id: 'divide',
    name: 'Sharing out',
    icon: '➗',
    blurb: 'Division facts, nothing left over',
    make() {
      // Built from the same weighted fact pool as the times tables, so the
      // division he practises is the division of the facts he is shakiest on.
      const [q, b] = timesFact();
      return {
        ask: `${b * q} ÷ ${b} = ?`,
        answer: String(q),
        hint: `How many ${b}s make ${b * q}?`,
      };
    },
  },
  {
    id: 'story3',
    name: 'Word problems',
    icon: '📖',
    blurb: 'Groups, sharing and two steps',
    /* Sharing and grouping are the two faces of division and they are not
       the same question: "how many in each bag" and "how many bags" land on
       the same sum by different roads, and children who only meet one of
       them get stuck the first time they meet the other. */
    make() {
      const kind = weighted({ groups: 3, share: 2.5, grouping: 2.5, twoStep: 2 });
      const it = pick(PACKABLE);
      const box = pick(HOLDERS);
      const who = pick(WHO);
      const [r, c] = timesFact();

      if (kind === 'groups') {
        return {
          ask: `There are ${r} ${box.many}. Each ${box.one} has ${c} ${it.many}. How many ${it.many} in all?`,
          answer: String(r * c),
          hint: `${r} groups of ${c}. That is ${r} × ${c}.`,
        };
      }

      if (kind === 'share') {
        return {
          ask: `${r * c} ${it.many} go into ${r} ${box.many}. How many in each ${box.one}?`,
          answer: String(c),
          hint: `Share ${r * c} out between ${r} ${box.many}.`,
        };
      }

      if (kind === 'grouping') {
        return {
          ask: `There are ${r * c} ${it.many}. Each ${box.one} holds ${c}. How many ${box.many}?`,
          answer: String(r),
          hint: `How many ${c}s make ${r * c}?`,
        };
      }

      const eaten = rnd(1, Math.max(1, r * c - 2));
      return {
        ask: `${r} ${box.many} have ${c} ${it.many} each. ${who} takes ${eaten} away. How many are left?`,
        answer: String(r * c - eaten),
        hint: `First ${r} × ${c}. Then take ${eaten} off.`,
      };
    },
  },
  {
    id: 'fractions',
    name: 'Fractions',
    icon: '🍕',
    blurb: 'Naming and comparing parts',
    make() {
      const n = pick([2, 3, 4, 5, 6, 8]);
      const k = rnd(1, n - 1);
      if (Math.random() < 0.5) {
        return {
          figure: fractionFig(k, n),
          redraw: ['fraction', k, n],
          ask: 'What fraction is shaded?',
          // Counting the unshaded parts, counting the parts either side of the
          // line, and counting the shaded parts against the whole bar. With a
          // bar half shaded the first of those *is* the answer, so options()
          // drops it.
          choices: options(`${k}/${n}`, `${n - k}/${n}`, `${k + 1}/${n}`, `${k}/${n + 1}`),
          answer: `${k}/${n}`,
                    hint: `The bottom number is how many equal parts there are: ${n}.`,
        };
      }
      let n2 = pick([2, 3, 4, 5, 6, 8]), k2 = rnd(1, n2 - 1);
      while (k / n === k2 / n2) { n2 = pick([2, 3, 4, 6, 8]); k2 = rnd(1, n2 - 1); }
      const bigger = k / n > k2 / n2 ? `${k}/${n}` : `${k2}/${n2}`;
      return {
        ask: `Which is bigger, ${k}/${n} or ${k2}/${n2}?`,
        choices: shuffle([`${k}/${n}`, `${k2}/${n2}`]),
        answer: bigger,
        hint: 'Picture each one as a bar. Which bar has more shaded in?',
      };
    },
  },
  {
    id: 'add1000',
    name: 'Add and subtract to 1000',
    icon: '🧮',
    blurb: 'Three digits, column by column',
    make() {
      if (Math.random() < 0.5) {
        const a = rnd(120, 600), b = rnd(120, 380);
        return {
          ask: `${a} + ${b} = ?`,
                    answer: String(a + b),
          hint: 'Hundreds, then tens, then ones.',
        };
      }
      const a = rnd(300, 999), b = rnd(110, a - 50);
      return {
        ask: `${a} − ${b} = ?`,
                answer: String(a - b),
        hint: 'If the top digit is too small, borrow from next door.',
      };
    },
  },
  {
    id: 'area',
    name: 'Area and perimeter',
    icon: '📐',
    blurb: 'Squares inside, steps around',
    make() {
      const w = rnd(2, 9), h = rnd(2, 7);
      if (Math.random() < 0.5) {
        return {
          figure: rectFig(w, h),
          redraw: ['rect', w, h],
          ask: 'What is the area?',
          answer: String(w * h),
          hint: 'Area is the squares inside: length times width.',
        };
      }
      return {
        figure: rectFig(w, h),
        redraw: ['rect', w, h],
        ask: 'What is the perimeter?',
        answer: String(2 * (w + h)),
        hint: 'Perimeter is the walk all the way round: add all four sides.',
      };
    },
  },
  {
    id: 'round',
    name: 'Rounding',
    icon: '🎯',
    blurb: 'To the nearest ten or hundred',
    make() {
      if (Math.random() < 0.5) {
        // A number already on a ten has nothing to round, and it would make
        // the number line show a dot sitting on its own answer.
        let v = rnd(11, 99);
        while (v % 10 === 0) v = rnd(11, 99);
        const lo = Math.floor(v / 10) * 10;
        const answer = Math.round(v / 10) * 10;
        return {
          figure: lineFig(lo, lo + 10, v),
          redraw: ['line', lo, lo + 10, v],
          ask: `Round ${v} to the nearest ten.`,
          choices: options(answer, lo === answer ? lo + 10 : lo, v),
          answer: String(answer),
          hint: `Is ${v} closer to ${lo} or to ${lo + 10}?`,
        };
      }
      let v = rnd(105, 989);
      while (v % 100 === 0) v = rnd(105, 989);
      const lo = Math.floor(v / 100) * 100;
      const answer = Math.round(v / 100) * 100;
      return {
        figure: lineFig(lo, lo + 100, v),
        redraw: ['line', lo, lo + 100, v],
        ask: `Round ${v} to the nearest hundred.`,
        choices: options(answer, lo === answer ? lo + 100 : lo, Math.round(v / 10) * 10),
        answer: String(answer),
        hint: `Is ${v} closer to ${lo} or to ${lo + 100}?`,
      };
    },
  },
];

/* ==================== the three grades ==================== */

const GRADES = [
  { id: 'g1', name: 'Grade 1', tint: 'green',  blurb: 'Numbers to 100', topics: G1 },
  { id: 'g2', name: 'Grade 2', tint: 'blue',   blurb: 'Numbers to 1000', topics: G2 },
  { id: 'g3', name: 'Grade 3', tint: 'purple', blurb: 'Times, share, measure', topics: G3 },
];

/* ==================== the explanations ====================

   One entry per topic, offered by the "Show me how" button before a round
   and skippable. Three or four steps, shown one at a time.

   Rules these follow, and that a new one should follow too:

   - **Written for a Grade 1 reader, every grade.** Short sentences, common
     words, one idea per step. The maths gets harder up the grades; the
     English does not. He is six and reading them himself.
   - **A picture carries the idea, the words name it** — the meaning of the
     thing comes first, the notation second. "Adding puts two groups
     together" before `5 + 3`.
   - **Worked with real numbers, not letters.** The last step is always a
     whole example finished, so he has seen one done before he is asked.
   - **Everything is read, so it has to be readable.** Nothing on this page is
     spoken; a step that only works said out loud does not work here. */

const TEACH = {
  /* ---- Grade 1 ---- */
  add20: [
    { text: 'Adding means putting two groups together.', figure: countersFig(5, 3) },
    { text: 'Here are 5 and 3. Count them all. You get 8.',
      },
    { text: 'There is a faster way. Start at 5, then count on 3.',
      figure: hopsFig(5, 8) },
    { text: '6, 7, 8. So 5 + 3 = 8.', },
  ],
  sub20: [
    { text: 'Taking away means some of them go.', figure: countersFig(5, 4, { takeAway: true }) },
    { text: 'There were 9. Four are crossed out. 5 are left.',
      },
    { text: 'You can count back instead. Start at 9 and hop back 4.',
      figure: hopsFig(9, 5) },
    { text: '8, 7, 6, 5. So 9 − 4 = 5.', },
  ],
  missing1: [
    { text: 'Sometimes one number is hidden.' },
    { text: '3 + ? = 7. Three, and how many more makes seven?',
      },
    { text: 'Start at 3 and count up to 7. Count the hops.',
      figure: hopsFig(3, 7) },
    { text: 'Four hops. So the hidden number is 4.', },
  ],
  tensones: [
    { text: 'Ten ones make one ten. This rod is ten.', figure: blocksFig(10) },
    { text: 'A tall rod is 10. A little block is 1.',
      figure: blocksFig(23) },
    { text: 'Two rods is 20. Three blocks is 3.', },
    { text: 'Twenty and three is 23. That is 2 tens and 3 ones.',
      },
  ],
  compare1: [
    { text: 'One number can be bigger, smaller, or the same.' },
    { text: 'The sign is a hungry mouth. It always opens to the bigger number.' },
    { text: '8 > 5. The mouth opens at the 8, so 8 is bigger.',
      },
    { text: '5 < 8 says the same thing the other way round.',
      },
  ],
  story1: [
    { text: 'Some questions come as a little story.' },
    { text: 'Read it. Then find the numbers.',
      figure: storyFig('join', 4, 3, '🍎') },
    { text: 'Mia has 4 apples. Mia gets 3 more.' },
    { text: 'Getting more means add. 4 and 3 is 7.' },
    { text: 'Always ask yourself: more, or fewer?' },
  ],
  story2: [
    { text: 'Now the numbers are too big to count.' },
    { text: 'So read it, and find the two numbers.' },
    { text: 'Ben has 34 shells. Ben gets 27 more.' },
    { text: 'More means add. 34 + 27 is 61.' },
    { text: 'Some stories have two steps. Do the first one first.' },
  ],
  story3: [
    { text: 'Equal groups hide inside a lot of stories.' },
    { text: '3 bags. Each bag has 6 apples.',
      figure: arrayFig(3, 6) },
    { text: 'That is 3 groups of 6. So 3 × 6 is 18.' },
    { text: 'Sharing goes the other way. 18 into 3 bags is 6 each.' },
    { text: 'Ask: am I building groups, or breaking them up?' },
  ],
  clock1: [
    { text: 'A clock has a short hand and a long hand.', figure: clockFig(3, 0) },
    { text: 'The short hand tells the hour. It points at 3.',
      },
    { text: 'The long hand points straight up. That means o’clock. It is 3:00.',
      },
    { text: 'When the long hand points straight down, it is half past.',
      figure: clockFig(3, 30), },
  ],

  /* ---- Grade 2 ---- */
  add100: [
    { text: 'Big numbers are easier in two parts. Tens first, then ones.' },
    { text: 'Try 34 + 25.', figure: blocksFig(34) },
    { text: 'Tens first. 30 and 20 makes 50.', },
    { text: 'Now ones. 4 and 5 makes 9. So 50 and 9 is 59.',
      },
  ],
  sub100: [
    { text: 'Take away the tens first, then the ones.' },
    { text: 'Try 57 − 23.', figure: blocksFig(57) },
    { text: 'Tens first. 50 take away 20 is 30.', },
    { text: 'Now ones. 7 take away 3 is 4. So the answer is 34.',
      },
  ],
  place1000: [
    { text: 'Where a digit sits is what it is worth.', figure: blocksFig(243) },
    { text: 'This is 243. The big squares are hundreds.',
      },
    { text: 'The 2 means 2 hundreds. That is worth 200.',
      },
    { text: 'The 4 means 4 tens, worth 40. The 3 means 3 ones, worth 3.',
      },
  ],
  money: [
    { text: 'Coins are not all worth the same.',
      figure: coinsFig(['penny', 'nickel', 'dime', 'quarter']) },
    { text: 'A penny is 1. A nickel is 5. A dime is 10. A quarter is 25.',
      },
    { text: 'A dime is smaller than a nickel but worth more. Look at the number, not the size.' },
    { text: 'Start with the biggest coin: 25, then 35, then 40, then 41 cents.',
      figure: coinsFig(['quarter', 'dime', 'nickel', 'penny']),
      },
  ],
  clock5: [
    { text: 'Every number on the clock is 5 minutes.',
      figure: clockFig(2, 0) },
    { text: 'Count round in fives: 5, 10, 15, 20.',
      figure: clockFig(2, 20) },
    { text: 'The long hand is on the 4. Four fives is 20 minutes.',
      },
    { text: 'The short hand is just past 2. So it is 2:20.',
      },
  ],
  groups: [
    { text: 'Equal groups all hold the same number.', figure: arrayFig(3, 4) },
    { text: 'Here are 3 rows. Each row has 4.', },
    { text: 'You could add: 4 and 4 and 4 makes 12.',
      },
    { text: 'Soon you will say it the short way: 3 times 4 is 12.',
      },
  ],

  /* ---- Grade 3 ---- */
  times: [
    { text: 'Times means lots of equal groups.', figure: arrayFig(4, 5) },
    { text: 'Here are 4 rows of 5. That is 4 × 5.',
      },
    { text: 'Count in fives: 5, 10, 15, 20.', },
    { text: 'So 4 × 5 = 20. And 5 × 4 is 20 too. It works both ways.',
      },
  ],
  divide: [
    { text: 'Dividing shares things out evenly.', figure: arrayFig(3, 4) },
    { text: 'Here are 12 counters shared into 3 rows.',
      },
    { text: 'Each row got 4. So 12 ÷ 3 = 4.',
      },
    { text: 'Ask yourself: how many 3s make 12? That is the answer.',
      },
  ],
  fractions: [
    { text: 'A fraction is equal parts of one whole thing.', figure: fractionFig(0, 4) },
    { text: 'This bar is cut into 4 equal parts. The bottom number is 4.',
      },
    { text: 'Shade one part. That is 1/4. The top number is how many are shaded.',
      figure: fractionFig(1, 4), },
    { text: 'More parts means each part is smaller. 1/8 is smaller than 1/4.',
      figure: fractionFig(1, 8), },
  ],
  add1000: [
    { text: 'Three-digit numbers work just the same. Hundreds, tens, ones.' },
    { text: 'Try 245 + 132.', },
    { text: 'Hundreds: 200 and 100 is 300. Tens: 40 and 30 is 70.',
      },
    { text: 'Ones: 5 and 2 is 7. Put them together: 377.',
      },
  ],
  area: [
    { text: 'Area is the space inside a shape.', figure: rectFig(4, 3) },
    { text: 'Count the squares inside. 4 across and 3 down is 12 squares.',
      },
    { text: 'Perimeter is different. It is the walk all the way round the edge.' },
    { text: 'Add all four sides: 4 and 3 and 4 and 3 is 14.',
      },
  ],
  round: [
    { text: 'Rounding finds the closest ten.', figure: lineFig(20, 30, 23) },
    { text: '23 sits between 20 and 30. It is nearer to 20.',
      },
    { text: 'So 23 rounds down to 20.', },
    { text: 'If the last digit is 5 or more, go up. 27 rounds up to 30.',
      figure: lineFig(20, 30, 27), },
  ],
};

/* Hung on the topics rather than written inside them, so a generator stays
   one job and the explanations can be read together, in order, as a course. */
for (const grade of GRADES) {
  for (const topic of grade.topics) topic.teach = TEACH[topic.id];
}
