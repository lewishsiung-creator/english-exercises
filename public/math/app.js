/* Number Lab — math practice, Grades 1–3.

   Same house rules as Word Play and Sound Lab: a wrong answer wobbles and
   invites another go, only a correct one advances, there is no timer, and
   first-try accuracy is recorded for the grown-up rather than shown to the
   child. What is different here is the answer: half the topics are tapped
   from options, half are typed on a number pad, and the pad is deliberately
   the same size and shape as the option buttons so the switch is not felt.

   Questions come from generators in content.js, so a round is built fresh
   every time and nothing can be learned by position. */

const ROUND_LENGTH = 10;

const el = (id) => document.getElementById(id);

const state = {
  grade: null,
  topic: null,
  queue: [],
  index: 0,
  step: 0,          // which explanation step is on screen
  firstTry: 0,
  answered: false,   // current question already answered correctly
  attempts: 0,       // tries on the current question, including the right one
  wrongGiven: [],    // what he actually answered on the way to getting it right
  shown: false,      // he asked to be shown the answer to this one
  typed: '',         // what is on the number pad right now
};

/* ==================== session record ==================== */

const LOG_KEY = 'math.log';

let log = [];
try { log = JSON.parse(localStorage.getItem(LOG_KEY)) || []; } catch { log = []; }

function saveLog() {
  try { localStorage.setItem(LOG_KEY, JSON.stringify(log.slice(-300))); } catch { /* private mode */ }
}

function record(question, attempts) {
  log.push({
    ask: question.ask,
    // Without the answer, every clock row in the record reads "What time is
    // it?" and tells the grown-up nothing about which clock was hard.
    answer: question.answer,
    // And without what he actually said, neither does the attempt count.
    // "34 + 27, he answered 51" says he forgot to carry. "attempts: 3" says
    // nothing at all, which is the whole reason this field exists.
    wrong: state.wrongGiven.slice(0, 4),
    // Needing the answer and getting there on the fourth go look identical
    // in an attempt count, and they are not the same thing at all.
    shown: state.shown,
    topic: state.topic.name,
    grade: state.grade.name,
    attempts,
  });
  saveLog();
}

/* ==================== what he has collected ====================

   The one thing a six-year-old gets from a page like this between Tuesday
   and Thursday is the sense that Tuesday counted. Three stars at the end of
   a round and then nothing is not that.

   Two rules hold this to the same house line as the rest of the page:

   - **Nothing ever goes down.** The stars are a collection, not a score. A
     bad round after a good one takes nothing away, and there is no streak to
     break — a streak that breaks is a failure state wearing a different hat,
     and it is the one thing that would make a day off feel like a loss.
   - **Mastery is an invitation, not a gate.** Two rounds running at nine or
     better earns the badge and one suggestion of where to go next. It is
     offered once, when it is earned, and never again. Nothing is locked
     behind it and nothing nags. */

const PROGRESS_KEY = 'math.progress';
const MASTERY_SCORE = 9;    // of ten, right first time
const MASTERY_RUNS = 2;     // and twice running, so one lucky round is not it

let progress = { topics: {}, days: [] };
try {
  const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY));
  if (saved && typeof saved === 'object') {
    progress = { topics: saved.topics || {}, days: saved.days || [] };
  }
} catch { /* private mode */ }

function saveProgress() {
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch { /* private mode */ }
}

/* Read-only, and deliberately so: drawing the topic grid asks about every
   topic, and an accessor that creates as it reads would write an empty entry
   for all eighteen just because he looked at the list. */
const BLANK = Object.freeze({ best: 0, runs: [], mastered: false });
const topicProgress = (id) => progress.topics[id] || BLANK;

/* Local date, not UTC: a session at nine in the evening belongs to the day
   he actually did it on. */
const today = () => new Date().toLocaleDateString('en-CA');

const allTopics = () => GRADES.flatMap((g) => g.topics);
const totalStars = () => Object.values(progress.topics).reduce((n, p) => n + p.best, 0);

function recordRound(topicId, stars, firstTry) {
  const p = progress.topics[topicId]
    || (progress.topics[topicId] = { best: 0, runs: [], mastered: false });
  const hadBest = p.best;
  const wasMastered = p.mastered;

  p.best = Math.max(p.best, stars);
  p.runs = [...p.runs, firstTry].slice(-MASTERY_RUNS);
  if (p.runs.length === MASTERY_RUNS && p.runs.every((s) => s >= MASTERY_SCORE)) p.mastered = true;

  const day = today();
  if (!progress.days.includes(day)) progress.days.push(day);
  if (progress.days.length > 400) progress.days = progress.days.slice(-400);

  saveProgress();
  return { newBest: p.best > hadBest, newlyMastered: p.mastered && !wasMastered };
}

/* ==================== bringing missed questions back ====================

   A question he got wrong is the most useful question on the page, and until
   now it was thrown away: every round was ten fresh rolls of the dice, so the
   fact he had missed five times came round no more often than the one he
   could already do.

   Two timescales, because they do different jobs:

   - **Inside the round.** A missed question reappears about three questions
     later. That is retrieval practice — close enough that he can still
     reconstruct it, far enough that he has to.
   - **Across rounds and days.** It is saved, and seeded into the next round
     of that topic. Get it right first time on the way back and it moves up a
     box; three boxes and it is retired. Miss it again and it drops to the
     bottom.

   Nothing on screen marks a question as one he failed before. Being quietly
   asked again is the point; being told "you got this wrong last Tuesday" is
   a failure state wearing a hat. The grown-up panel shows the queue instead.

   Figures are not saved — see the redraw recipes in content.js. */

const REVIEW_KEY = 'math.review';
const REVIEW_PER_TOPIC = 12;   // the queue is a to-do list, not a history
const REVIEW_PER_ROUND = 3;    // of ten, so a round is mostly new ground
const RETIRED_AT = 3;          // right first time this many times running

let review = {};
try { review = JSON.parse(localStorage.getItem(REVIEW_KEY)) || {}; } catch { review = {}; }

function saveReview() {
  try { localStorage.setItem(REVIEW_KEY, JSON.stringify(review)); } catch { /* private mode */ }
}

const askKey = (q) => `${q.ask}|${q.answer}`;

/* Saved flat, without the rendered figure. `redraw` rebuilds it. */
function remember(topicId, q) {
  const list = review[topicId] || (review[topicId] = []);
  const found = list.find((it) => askKey(it) === askKey(q));
  if (found) {
    found.box = 0;
    found.missed++;
  } else {
    list.push({
      ask: q.ask, answer: q.answer, choices: q.choices, hint: q.hint,
      redraw: q.redraw, box: 0, missed: 1,
    });
  }
  // Over the cap, the ones closest to being retired go first: they are the
  // ones he is nearly on top of.
  if (list.length > REVIEW_PER_TOPIC) {
    list.sort((a, b) => b.box - a.box || a.missed - b.missed);
    list.splice(0, list.length - REVIEW_PER_TOPIC);
  }
  saveReview();
}

function promote(topicId, q) {
  const list = review[topicId];
  if (!list) return;
  const at = list.findIndex((it) => askKey(it) === askKey(q));
  if (at < 0) return;
  if (++list[at].box >= RETIRED_AT) list.splice(at, 1);
  if (!list.length) delete review[topicId];
  saveReview();
}

/* Shakiest first: lowest box, then whichever has waited longest, then most
   missed. The waiting matters — sorting on box and misses alone is a stable
   sort over items that mostly tie, so with five in the queue the same three
   came back every single round and the other two were never seen again. */
function dueFor(topicId, n) {
  const list = (review[topicId] || []).slice()
    .sort((a, b) => a.box - b.box || (a.last || 0) - (b.last || 0) || b.missed - a.missed)
    .slice(0, n);

  const now = Date.now();
  list.forEach((it, i) => { it.last = now + i; });   // +i keeps them in order
  if (list.length) saveReview();

  return list.map((it) => ({
    ask: it.ask, answer: it.answer, choices: it.choices, hint: it.hint,
    redraw: it.redraw, figure: redrawFigure(it.redraw), fromReview: true,
  }));
}

const reviewCount = () => Object.values(review).reduce((n, l) => n + l.length, 0);

/* ==================== screens ==================== */

const SCREENS = ['grade', 'topic', 'intro', 'teach', 'play', 'done'];

/* Where the ← button goes from each screen. The explanation steps back out to
   the choice that opened them, everything else to the list it came from. */
const BACK_TO = { topic: 'grade', intro: 'topic', teach: 'intro', play: 'topic', done: 'topic' };

const currentScreen = () => SCREENS.find((s) => el(`screen-${s}`).classList.contains('is-active'));

function show(name) {
  /* Redraw the two screens that show progress on the way in, not only when
     they are first built. A round changes the stars, and arriving back at
     the list from the results screen used to show the ones from before he
     played — the card said no stars while the total underneath it had
     already counted them. */
  if (name === 'grade') { buildGrades(); renderCollection(); }
  if (name === 'topic' && state.grade) buildTopicGrid(state.grade);

  for (const s of SCREENS) el(`screen-${s}`).classList.toggle('is-active', s === name);
  el('backBtn').hidden = name === 'grade';
  window.scrollTo(0, 0);
}

el('backBtn').addEventListener('click', () => {
  const to = BACK_TO[currentScreen()] || 'grade';
  // state.grade and state.topic are deliberately left set when backing out.
  // Nothing reads them on the way out, and clearing them turns a later back
  // into a crash the moment one of these titles asks for a name.
  el('barTitle').textContent =
    to === 'grade' ? 'Number Lab' : to === 'topic' ? state.grade.name : state.topic.name;
  show(to);
});

/* ==================== choosing ==================== */

function buildGrades() {
  const grid = el('gradeGrid');
  grid.innerHTML = '';
  for (const g of GRADES) {
    // A level card can say how far in he is, which is the one thing it was
    // not saying. The keycap emoji it used to carry rendered as a small grey
    // block — a plain numeral in the same chip the topics use is clearer and
    // ties the two screens together.
    const got = g.topics.reduce((n, t) => n + topicProgress(t.id).best, 0);
    const most = g.topics.length * 3;
    const b = document.createElement('button');
    b.className = `card tint-${g.tint}`;
    b.innerHTML = `<span class="card-icon grade-num" aria-hidden="true">${g.name.slice(-1)}</span>
      <span class="card-name">${g.name}</span>
      <span class="card-blurb">${g.blurb}</span>
      ${got ? `<span class="card-stars" aria-label="${got} of ${most} stars">
        <span class="stars-got">★</span> ${got}<span class="stars-left"> / ${most}</span></span>` : ''}`;
    b.addEventListener('click', () => openGrade(g));
    grid.appendChild(b);
  }
}

/* Empty stars are on purpose, the way a sticker chart has empty squares:
   they say what there is to collect. They are drawn faint so eighteen of
   them do not read as eighteen things he has failed at. */
const starStrip = (best) => '★'.repeat(best) + '☆'.repeat(3 - best);

function buildTopicGrid(grade) {
  const grid = el('topicGrid');
  grid.innerHTML = '';
  for (const t of grade.topics) {
    const p = topicProgress(t.id);
    const b = document.createElement('button');
    b.className = `card card-row tint-${grade.tint}${p.mastered ? ' is-mastered' : ''}`;
    /* A row rather than a centred stack. Seven topics in stacked cards ran
       past the bottom of a phone after three and a half, and four centred
       lines in a row give the eye nothing to run down. */
    b.innerHTML = `<span class="card-icon" aria-hidden="true">${t.icon}</span>
      <span class="card-text">
        <span class="card-name">${t.name}</span>
        <span class="card-blurb">${t.blurb}</span>
      </span>
      <span class="card-stars" aria-label="${p.best} of 3 stars${p.mastered ? ', mastered' : ''}">
        <span class="stars-got">${'★'.repeat(p.best)}</span><span class="stars-left">${'☆'.repeat(3 - p.best)}</span></span>`;
    b.addEventListener('click', () => openTopic(t));
    grid.appendChild(b);
  }
}

function openGrade(grade) {
  state.grade = grade;
  el('barTitle').textContent = grade.name;
  el('topicLead').textContent = 'Choose what to practise';
  show('topic');                 // show() builds the grid, so it is fresh

}

/* The line under the level cards: everything he has, and nothing he has
   lost. Hidden until there is something in it, so a first visit is not
   greeted by a row of zeroes. */
function renderCollection() {
  const stars = totalStars();
  const days = progress.days.length;
  const box = el('collection');
  box.hidden = stars === 0 && days === 0;
  // Two chips with the same treatment. It used to be a big gold number, a
  // small grey one and a pill, which was three different voices telling him
  // one thing.
  box.innerHTML = `<span class="chip"><b class="stars-got">★</b> ${stars} of ${allTopics().length * 3}</span>
    <span class="chip">${days} ${days === 1 ? 'day' : 'days'} of practice</span>`;
}

/* ==================== show me how, or just practise ==================== */

function openTopic(topic) {
  state.topic = topic;
  const p = topicProgress(topic.id);

  el('barTitle').textContent = topic.name;
  el('introIcon').textContent = topic.icon;
  el('introName').textContent = topic.name;
  el('introBlurb').textContent = topic.blurb;

  // His best so far, and nothing about what he got wrong. A count of
  // questions waiting to come back would be useful to a grown-up and would
  // be the page telling a six-year-old it remembers him failing.
  const stars = el('introStars');
  stars.hidden = !p.best;
  stars.innerHTML = `<span class="stars-got">${'★'.repeat(p.best)}</span>`
    + `<span class="stars-left">${'☆'.repeat(3 - p.best)}</span>`
    + (p.mastered ? ' <span class="intro-badge">🏅</span>' : '');

  // A topic with no explanation written yet still works: the offer just isn't
  // made, rather than opening an empty screen.
  const teach = el('showMeBtn');
  const practise = el('practiseBtn');
  teach.hidden = !topic.teach?.length;

  /* Whichever he is more likely to want goes first and goes green. On a
     topic he has never opened that is the explanation; after that it is
     almost always practice, and making him read past the lesson every time
     to reach the thing he came for is a tax on the common case. */
  const firstTime = !p.best && !p.runs.length;
  teach.classList.toggle('btn-primary', firstTime);
  practise.classList.toggle('btn-primary', !firstTime);
  practise.textContent = firstTime ? '▶️ Just practise' : '▶️ Start';
  el('introActions').prepend(firstTime ? teach : practise);

  show('intro');
}

el('showMeBtn').addEventListener('click', () => {
  state.step = 0;
  show('teach');
  renderStep();
});

el('practiseBtn').addEventListener('click', () => startRound(state.topic));
el('teachSkip').addEventListener('click', () => startRound(state.topic));

function renderStep() {
  const steps = state.topic.teach;
  const step = steps[state.step];
  const last = state.step === steps.length - 1;

  el('teachFig').innerHTML = step.figure || '';
  el('teachFig').hidden = !step.figure;
  el('teachText').textContent = step.text;

  // The dots are the only progress indicator on this screen, so they carry
  // the text equivalent rather than being hidden outright.
  el('teachDots').setAttribute('aria-label', `Step ${state.step + 1} of ${steps.length}`);
  el('teachDots').innerHTML = steps
    .map((_, i) => `<span class="dot${i === state.step ? ' is-on' : ''}"></span>`).join('');
  el('teachNext').textContent = last ? 'Let’s try it →' : 'Next';
  el('teachSkip').hidden = last;
}

el('teachNext').addEventListener('click', () => {
  if (state.step === state.topic.teach.length - 1) { startRound(state.topic); return; }
  state.step++;
  renderStep();
});

/* ==================== a round ==================== */

function startRound(topic) {
  state.topic = topic;
  state.index = 0;
  state.firstTry = 0;
  // Generators can repeat themselves by chance, and ten questions is short
  // enough that a repeat is noticed. Re-roll a few times before giving up —
  // some topics (times tables) only have so many faces. The key has to be the
  // prompt *and* the answer: on the clock and money topics the prompt is the
  // same words every time and all the difference is in the picture.
  state.queue = [];
  const seen = new Set();

  // The ones he has missed before go in first, so the fresh questions are
  // generated knowing not to collide with them.
  const back = dueFor(topic.id, REVIEW_PER_ROUND);
  for (const q of back) seen.add(askKey(q));

  for (let i = 0; i < ROUND_LENGTH; i++) {
    let q = topic.make();
    for (let tries = 0; tries < 12 && seen.has(askKey(q)); tries++) q = topic.make();
    seen.add(askKey(q));
    state.queue.push(q);
  }

  // Spaced through the round rather than bunched at the front, and never
  // first: opening on a question he already failed is a poor way to start.
  back.forEach((q, i) => { state.queue[2 + i * 3] = q; });

  el('barTitle').textContent = topic.name;
  show('play');
  askQuestion();
}

const current = () => state.queue[state.index];

function askQuestion() {
  const q = current();
  state.answered = false;
  state.attempts = 0;
  state.wrongGiven = [];
  state.shown = false;
  state.typed = '';
  el('showMeAnswer').hidden = true;
  el('solution').hidden = true;

  el('progressFill').style.width = `${(state.index / ROUND_LENGTH) * 100}%`;
  el('progressText').textContent = `Question ${state.index + 1} of ${ROUND_LENGTH}`;

  el('figWrap').innerHTML = q.figure || '';
  el('figWrap').hidden = !q.figure;

  el('ask').textContent = q.ask;
  // Three or more words means a sentence rather than a sum, and a sentence
  // does not want the monospaced digit face. Ten or more means a story, and
  // a story set at question size would push the number pad off a phone.
  const words = (q.ask.match(/[A-Za-z]{2,}/g) || []).length;
  el('ask').className = words >= 10 ? 'ask is-story' : words >= 3 ? 'ask is-words' : 'ask';
  el('feedback').textContent = '';
  el('feedback').className = 'feedback';
  el('hint').hidden = true;
  el('hint').textContent = q.hint || '';

  buildAnswer(q);
}

/* ==================== answering ==================== */

function buildAnswer(q) {
  const box = el('answer');
  box.innerHTML = '';
  box.className = 'answer';

  if (q.choices) {
    el('readout').hidden = true;
    box.classList.add('answer-choices', q.choices.length <= 2 ? 'two-up' : 'grid-up');
    for (const choice of q.choices) {
      const b = document.createElement('button');
      b.className = 'opt';
      b.textContent = choice;
      b.addEventListener('click', () => judge(choice, b));
      box.appendChild(b);
    }
    return;
  }

  // The readout lives in the question card and is only shown for the topics
  // that are typed, so the pad sits directly under what it is filling in.
  el('readout').hidden = false;
  box.classList.add('answer-pad');
  box.innerHTML = '<div class="pad" id="pad"></div>';

  const pad = el('pad');
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0', 'enter'];
  for (const k of keys) {
    const b = document.createElement('button');
    if (k === 'clear') {
      b.className = 'key key-soft';
      b.textContent = '⌫';
      b.setAttribute('aria-label', 'Clear');
      b.addEventListener('click', () => setTyped(state.typed.slice(0, -1)));
    } else if (k === 'enter') {
      b.className = 'key key-go';
      b.textContent = '✓';
      b.setAttribute('aria-label', 'Check my answer');
      b.addEventListener('click', submitTyped);
    } else {
      b.className = 'key';
      b.textContent = k;
      b.addEventListener('click', () => {
        if (state.typed.length < 4) setTyped(state.typed + k);
      });
    }
    pad.appendChild(b);
  }
  setTyped('');
}

function setTyped(value) {
  // A leading zero is never the answer here, and letting it build up makes the
  // readout confusing ("007"). Strip it as it is typed rather than at check.
  state.typed = value.replace(/^0+(?=\d)/, '');
  const out = el('readout');
  if (!out) return;
  out.textContent = state.typed;
  // Empty reads as a waiting slot rather than a stray dash.
  out.classList.toggle('is-empty', !state.typed);
}

function submitTyped() {
  if (state.answered || !state.typed) return;
  judge(state.typed, el('readout'));
}

/* The number pad is on screen, but a keyboard is faster for a grown-up sitting
   beside him — and for him, once he finds the number row. */
document.addEventListener('keydown', (e) => {
  if (!el('screen-play').classList.contains('is-active')) return;
  if (state.answered || current()?.choices) return;
  if (/^[0-9]$/.test(e.key)) { if (state.typed.length < 4) setTyped(state.typed + e.key); }
  else if (e.key === 'Backspace') setTyped(state.typed.slice(0, -1));
  else if (e.key === 'Enter') submitTyped();
  else return;
  e.preventDefault();
});

/* Put a missed question back about three later, taking a fresh question's
   slot so the round is still ten. Near the end there is no room left, and it
   only has the saved queue to fall back on. */
function bringBackLater(q) {
  for (let at = state.index + 3; at < ROUND_LENGTH; at++) {
    const slot = state.queue[at];
    if (slot.fromReview || slot.isRepeat) continue;   // don't displace another
    state.queue[at] = { ...q, isRepeat: true };
    return;
  }
}

/* Being shown the answer does not end the question — he still has to put it
   in. One action, with the answer in front of him: he gets unstuck, he ends
   on doing the right thing rather than on giving up, and it is still honestly
   recorded as an answer he was given rather than one he found. */
el('showMeAnswer').addEventListener('click', () => {
  const q = current();
  state.shown = true;
  el('showMeAnswer').hidden = true;
  el('solutionAnswer').textContent = q.answer;
  el('solution').hidden = false;
  if (q.hint) el('hint').hidden = false;
  el('feedback').textContent = '';
  el('feedback').className = 'feedback';
  if (!q.choices) setTyped('');
});

const CHEERS = ['Yes!', 'That’s it!', 'Nice work!', 'Correct!', 'Well done!', 'Got it!'];
/* Warm but honest: he copied it, and "Perfect!" would be a lie he can spot. */
const AFTER_SHOWN = ['Now you have it.', 'That’s the one.', 'Good — you did it.'];
const NUDGES = ['Not quite — try again.', 'Close! Have another go.', 'Try once more.'];

function judge(given, node) {
  if (state.answered) return;
  const q = current();
  state.attempts++;

  if (String(given) !== String(q.answer)) {
    state.wrongGiven.push(String(given));
    if (state.attempts === 1) {
      remember(state.topic.id, q);
      bringBackLater(q);
    }
    node?.classList.add('is-wobble');
    setTimeout(() => node?.classList.remove('is-wobble'), 460);
    if (node?.classList.contains('opt')) node.classList.add('is-off');
    if (!state.shown) {
      el('feedback').textContent = NUDGES[Math.min(state.attempts, NUDGES.length) - 1];
      el('feedback').className = 'feedback is-oops';
    }
    if (state.attempts >= 2 && q.hint) el('hint').hidden = false;
    // Two misses get the method. A third means the method did not land, and
    // from here "only a correct answer advances" stops being a kindness: on
    // a number-pad question there is nothing to guess between, so without a
    // way out it is an infinite failure state — the opposite of the rule it
    // came from.
    if (state.attempts >= 3 && !state.shown) el('showMeAnswer').hidden = false;
    if (!q.choices) setTyped('');
    return;
  }

  state.answered = true;
  if (state.attempts === 1) {
    state.firstTry++;
    // Only a question carried over from an earlier round counts as recall.
    // Getting the three-question-later repeat right is good, but it is not
    // evidence it has stuck, so it must not retire the item.
    if (q.fromReview && !q.isRepeat) promote(state.topic.id, q);
  }
  record(q, state.attempts);

  if (node?.classList.contains('opt')) node.classList.add('is-on');
  const lines = state.shown ? AFTER_SHOWN : CHEERS;
  el('feedback').textContent = lines[Math.floor(Math.random() * lines.length)];
  el('feedback').className = 'feedback is-good';
  el('hint').hidden = true;
  el('solution').hidden = true;

  // Long enough to register that it was right and see the answer sitting
  // there, short enough not to feel like waiting.
  setTimeout(() => {
    state.index++;
    if (state.index >= ROUND_LENGTH) finish();
    else askQuestion();
  }, 850);
}

/* ==================== finishing ==================== */

function finish() {
  el('progressFill').style.width = '100%';
  const score = state.firstTry;
  const stars = score >= 9 ? 3 : score >= 7 ? 2 : score >= 4 ? 1 : 0;
  const { newBest, newlyMastered } = recordRound(state.topic.id, stars, score);

  el('doneEmoji').textContent = score >= 9 ? '🏆' : score >= 7 ? '🎉' : '💪';
  el('doneTitle').textContent = score >= 9 ? 'Perfect run!' : score >= 7 ? 'Great going!' : 'Round finished!';
  el('doneStars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
  el('doneScore').textContent = `${score} of ${ROUND_LENGTH} right the first time.`;

  // Earning the badge is worth more than beating a best, so it wins the line
  // when both happen at once.
  const note = el('doneNote');
  const nextBtn = el('nextTopicBtn');
  nextBtn.hidden = true;
  note.hidden = false;
  if (newlyMastered) {
    note.textContent = `🏅 You have got ${state.topic.name}!`;
    const onward = allTopics().find((t) => t.id === state.topic.next);
    if (onward) {
      nextBtn.textContent = `Try ${onward.name} →`;
      nextBtn.hidden = false;
      nextBtn.onclick = () => jumpTo(onward);
    }
  } else if (newBest) {
    note.textContent = '⭐ A new best for this one!';
  } else {
    note.hidden = true;
  }

  renderCollection();
  show('done');
}

/* The next topic can be in another grade, so the grade has to move with him
   or the ← button would walk back into the wrong list. */
function jumpTo(topic) {
  const grade = GRADES.find((g) => g.topics.includes(topic));
  if (grade) openGrade(grade);
  openTopic(topic);
}

el('againBtn').addEventListener('click', () => startRound(state.topic));
el('changeBtn').addEventListener('click', () => {
  el('barTitle').textContent = state.grade.name;
  show('topic');
});

/* ==================== grown-up panel ==================== */

function openSheet() {
  renderSheet();
  el('teacherSheet').hidden = false;
  el('teacherClose').focus();
}

const closeSheet = () => { el('teacherSheet').hidden = true; el('teacherBtn').focus(); };

el('teacherBtn').addEventListener('click', openSheet);
el('teacherClose').addEventListener('click', closeSheet);
el('teacherSheet').addEventListener('click', (e) => { if (e.target === el('teacherSheet')) closeSheet(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !el('teacherSheet').hidden) closeSheet();
});

function renderSheet() {
  const total = log.length;
  const clean = log.filter((r) => r.attempts === 1).length;
  el('teacherStats').textContent = total
    ? `${total} answered · ${clean} right first time (${Math.round((clean / total) * 100)}%)`
    : 'Nothing yet.';

  // Grouped by topic, not by question: with generated numbers no single sum
  // repeats often enough to mean anything, but "Times tables, 6 missed" does.
  const byTopic = new Map();
  for (const r of log) {
    if (r.attempts === 1) continue;
    const key = `${r.grade} · ${r.topic}`;
    byTopic.set(key, (byTopic.get(key) || 0) + 1);
  }
  const weak = [...byTopic.entries()].sort((a, b) => b[1] - a[1]);
  el('teacherWeakEmpty').hidden = weak.length > 0;
  const ul = el('teacherWeak');
  ul.innerHTML = '';
  for (const [name, misses] of weak) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${name}</span><span class="tag">${misses} missed</span>`;
    ul.appendChild(li);
  }

  renderComingBack();

  const body = el('teacherLog').querySelector('tbody');
  body.innerHTML = '';
  for (const r of log.slice().reverse().slice(0, 60)) {
    const tr = document.createElement('tr');
    if (r.attempts > 1) tr.className = 'is-missed';
    // What he tried is the diagnosis. "34 + 27 → 61, he said 51" is a missing
    // carry; the attempt count on its own could be anything.
    const tried = r.wrong?.length
      ? `<span class="tried">he said ${r.wrong.join(', ')}${r.shown ? ' · needed the answer' : ''}</span>`
      : '';
    tr.innerHTML = `<td>${r.ask}${r.answer ? ` <span class="ans">${r.answer}</span>` : ''}${tried}</td>
      <td>${r.topic}</td><td>${r.attempts}</td>`;
    body.appendChild(tr);
  }
}

/* What the page will quietly ask him again, and how close each one is to
   being retired. The child never sees this. */
function renderComingBack() {
  const ul = el('teacherReview');
  const items = [];
  for (const [topicId, list] of Object.entries(review)) {
    const topic = GRADES.flatMap((g) => g.topics).find((t) => t.id === topicId);
    for (const it of list) items.push({ ...it, topic: topic ? topic.name : topicId });
  }
  items.sort((a, b) => a.box - b.box || b.missed - a.missed);

  el('teacherReviewEmpty').hidden = items.length > 0;
  el('teacherReviewCount').textContent = items.length ? `${items.length} waiting` : '';
  ul.innerHTML = '';
  for (const it of items) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${it.ask} <span class="ans">${it.answer}</span>
        <span class="muted-inline">${it.topic}</span></span>
      <span class="tag tag-quiet">${'●'.repeat(it.box)}${'○'.repeat(RETIRED_AT - it.box)}</span>`;
    ul.appendChild(li);
  }
}

el('logClear').addEventListener('click', () => {
  log = [];
  saveLog();
  renderSheet();
});

/* Kept apart from clearing the record, because the stars are his and wiping
   them by accident while tidying up the log would be a small disaster. */
el('progressClear').addEventListener('click', () => {
  progress = { topics: {}, days: [] };
  saveProgress();
  renderCollection();
  if (state.grade) buildTopicGrid(state.grade);
  buildGrades();
});

/* ==================== go ==================== */

buildGrades();
renderCollection();
