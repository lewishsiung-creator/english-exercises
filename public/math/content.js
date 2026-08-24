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

/* ==================== Grade 1 ==================== */

const G1 = [
  {
    id: 'add20',
    name: 'Add to 20',
    icon: '➕',
    blurb: 'Sums that stay under twenty',
    make() {
      const a = rnd(2, 12);
      const b = rnd(1, Math.min(9, 20 - a));
      return {
        ask: `${a} + ${b} = ?`,
                answer: String(a + b),
        hint: `Start at ${a} and count on ${b} more.`,
      };
    },
  },
  {
    id: 'sub20',
    name: 'Take away',
    icon: '➖',
    blurb: 'Subtracting inside twenty',
    make() {
      const a = rnd(5, 20);
      const b = rnd(1, Math.min(9, a));
      return {
        ask: `${a} − ${b} = ?`,
                answer: String(a - b),
        hint: `Start at ${a} and count back ${b}.`,
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
    name: 'Tens and ones',
    icon: '🧱',
    blurb: 'Reading the blocks',
    make() {
      const value = rnd(11, 99);
      if (Math.random() < 0.5) {
        return {
          figure: blocksFig(value),
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
    name: 'Bigger or smaller',
    icon: '⚖️',
    blurb: 'Greater than, less than, equal',
    make() {
      const a = rnd(1, 99);
      const b = Math.random() < 0.2 ? a : rnd(1, 99);
      const answer = a > b ? '>' : a < b ? '<' : '=';
      return {
        ask: `${a} ? ${b}`,
        choices: ['<', '=', '>'],
        answer,
        hint: 'The open end always points at the bigger number.',
      };
    },
  },
  {
    id: 'clock1',
    name: 'What time is it?',
    icon: '🕐',
    blurb: 'O’clock and half past',
    make() {
      const h = rnd(1, 12);
      const m = pick([0, 0, 30]);
      return {
        figure: clockFig(h, m),
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
    name: 'Add two digits',
    icon: '🔢',
    blurb: 'Sums up to one hundred',
    make() {
      const a = rnd(21, 78);
      const b = rnd(13, Math.min(79, 99 - a));
      return {
        ask: `${a} + ${b} = ?`,
                answer: String(a + b),
        hint: `Add the tens first: ${Math.floor(a / 10) * 10} + ${Math.floor(b / 10) * 10}. Then the ones.`,
      };
    },
  },
  {
    id: 'sub100',
    name: 'Subtract two digits',
    icon: '📉',
    blurb: 'Taking two-digit numbers apart',
    make() {
      const a = rnd(30, 99);
      const b = rnd(11, a - 5);
      return {
        ask: `${a} − ${b} = ?`,
                answer: String(a - b),
        hint: `Take away the tens first, then the ones.`,
      };
    },
  },
  {
    id: 'place1000',
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
        ask: 'How many cents?',
        answer: String(total),
        hint: 'Count the big coins first, then add the small ones.',
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
        ask: 'What time is it?',
        choices: shuffle([right, ...wrong]),
        answer: right,
                hint: 'Count the long hand round in fives.',
      };
    },
  },
  {
    id: 'groups',
    name: 'Equal groups',
    icon: '🟢',
    blurb: 'Rows and columns, before times tables',
    make() {
      const rows = rnd(2, 5), cols = rnd(2, 6);
      if (Math.random() < 0.5) {
        return {
          figure: arrayFig(rows, cols),
          ask: 'How many counters?',
          answer: String(rows * cols),
          hint: `There are ${rows} rows with ${cols} in each row.`,
        };
      }
      return {
        figure: arrayFig(rows, cols),
        ask: `${rows} rows of ${cols} = ?`,
        answer: String(rows * cols),
        hint: `Add ${cols} to itself ${rows} times.`,
      };
    },
  },
];

/* ==================== Grade 3 ==================== */

const G3 = [
  {
    id: 'times',
    name: 'Times tables',
    icon: '✖️',
    blurb: 'Facts up to ten times ten',
    make() {
      const a = rnd(2, 10), b = rnd(2, 10);
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
      const b = rnd(2, 10), q = rnd(2, 10);
      const a = b * q;
      return {
        ask: `${a} ÷ ${b} = ?`,
                answer: String(q),
        hint: `How many ${b}s make ${a}?`,
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
          ask: 'What is the area?',
          answer: String(w * h),
          hint: 'Area is the squares inside: length times width.',
        };
      }
      return {
        figure: rectFig(w, h),
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
