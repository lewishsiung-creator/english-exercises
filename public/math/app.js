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
    topic: state.topic.name,
    grade: state.grade.name,
    attempts,
  });
  saveLog();
}

/* ==================== screens ==================== */

const SCREENS = ['grade', 'topic', 'intro', 'teach', 'play', 'done'];

/* Where the ← button goes from each screen. The explanation steps back out to
   the choice that opened them, everything else to the list it came from. */
const BACK_TO = { topic: 'grade', intro: 'topic', teach: 'intro', play: 'topic', done: 'topic' };

const currentScreen = () => SCREENS.find((s) => el(`screen-${s}`).classList.contains('is-active'));

function show(name) {
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
    const b = document.createElement('button');
    b.className = `card tint-${g.tint}`;
    b.innerHTML = `<span class="card-icon">${g.id === 'g1' ? '1️⃣' : g.id === 'g2' ? '2️⃣' : '3️⃣'}</span>
      <span class="card-name">${g.name}</span>
      <span class="card-blurb">${g.blurb}</span>`;
    b.addEventListener('click', () => openGrade(g));
    grid.appendChild(b);
  }
}

function openGrade(grade) {
  state.grade = grade;
  el('barTitle').textContent = grade.name;
  el('topicLead').textContent = 'Choose what to practise';

  const grid = el('topicGrid');
  grid.innerHTML = '';
  for (const t of grade.topics) {
    const b = document.createElement('button');
    b.className = `card tint-${grade.tint}`;
    b.innerHTML = `<span class="card-icon">${t.icon}</span>
      <span class="card-name">${t.name}</span>
      <span class="card-blurb">${t.blurb}</span>`;
    b.addEventListener('click', () => openTopic(t));
    grid.appendChild(b);
  }
  show('topic');
}

/* ==================== show me how, or just practise ==================== */

function openTopic(topic) {
  state.topic = topic;
  el('barTitle').textContent = topic.name;
  el('introIcon').textContent = topic.icon;
  el('introName').textContent = topic.name;
  el('introBlurb').textContent = topic.blurb;
  // A topic with no explanation written yet still works: the offer just isn't
  // made, rather than opening an empty screen.
  el('showMeBtn').hidden = !topic.teach?.length;
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
  for (let i = 0; i < ROUND_LENGTH; i++) {
    let q = topic.make();
    const key = (x) => `${x.ask}|${x.answer}`;
    for (let tries = 0; tries < 12 && seen.has(key(q)); tries++) q = topic.make();
    seen.add(key(q));
    state.queue.push(q);
  }

  el('barTitle').textContent = topic.name;
  show('play');
  askQuestion();
}

const current = () => state.queue[state.index];

function askQuestion() {
  const q = current();
  state.answered = false;
  state.attempts = 0;
  state.typed = '';

  el('progressFill').style.width = `${(state.index / ROUND_LENGTH) * 100}%`;
  el('progressText').textContent = `Question ${state.index + 1} of ${ROUND_LENGTH}`;

  el('figWrap').innerHTML = q.figure || '';
  el('figWrap').hidden = !q.figure;

  el('ask').textContent = q.ask;
  // Three or more words means a sentence rather than a sum, and a sentence
  // does not want the monospaced digit face.
  el('ask').className = (q.ask.match(/[A-Za-z]{2,}/g) || []).length >= 3 ? 'ask is-words' : 'ask';
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

  box.classList.add('answer-pad');
  box.innerHTML = `
    <output class="readout" id="readout" aria-live="off">–</output>
    <div class="pad" id="pad"></div>`;

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
  if (out) out.textContent = state.typed || '–';
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

const CHEERS = ['Yes!', 'That’s it!', 'Nice work!', 'Correct!', 'Well done!', 'Got it!'];
const NUDGES = ['Not quite — try again.', 'Close! Have another go.', 'Try once more.'];

function judge(given, node) {
  if (state.answered) return;
  const q = current();
  state.attempts++;

  if (String(given) !== String(q.answer)) {
    node?.classList.add('is-wobble');
    setTimeout(() => node?.classList.remove('is-wobble'), 460);
    if (node?.classList.contains('opt')) node.classList.add('is-off');
    el('feedback').textContent = NUDGES[Math.min(state.attempts, NUDGES.length) - 1];
    el('feedback').className = 'feedback is-oops';
    if (state.attempts >= 2 && q.hint) el('hint').hidden = false;
    if (!q.choices) setTyped('');
    return;
  }

  state.answered = true;
  if (state.attempts === 1) state.firstTry++;
  record(q, state.attempts);

  if (node?.classList.contains('opt')) node.classList.add('is-on');
  el('feedback').textContent = CHEERS[Math.floor(Math.random() * CHEERS.length)];
  el('feedback').className = 'feedback is-good';
  el('hint').hidden = true;

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

  el('doneEmoji').textContent = score >= 9 ? '🏆' : score >= 7 ? '🎉' : '💪';
  el('doneTitle').textContent = score >= 9 ? 'Perfect run!' : score >= 7 ? 'Great going!' : 'Round finished!';
  el('doneStars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
  el('doneScore').textContent = `${score} of ${ROUND_LENGTH} right the first time.`;
  show('done');
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

  const body = el('teacherLog').querySelector('tbody');
  body.innerHTML = '';
  for (const r of log.slice().reverse().slice(0, 60)) {
    const tr = document.createElement('tr');
    if (r.attempts > 1) tr.className = 'is-missed';
    tr.innerHTML = `<td>${r.ask}${r.answer ? ` <span class="ans">${r.answer}</span>` : ''}</td>
      <td>${r.topic}</td><td>${r.attempts}</td>`;
    body.appendChild(tr);
  }
}

el('logClear').addEventListener('click', () => {
  log = [];
  saveLog();
  renderSheet();
});

/* ==================== go ==================== */

buildGrades();
