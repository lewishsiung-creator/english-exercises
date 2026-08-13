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
  firstTry: 0,
  answered: false,   // current question already answered correctly
  attempts: 0,       // tries on the current question, including the right one
  typed: '',         // what is on the number pad right now
  sound: true,
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

/* ==================== speech ==================== */

let voice = null;

/* Young American female, in order of preference. The available set differs per
   device — Flo and Shelley ship with recent macOS, Zira/Aria with Windows,
   the Google voices with Chrome on Android — so this is a chain, and the
   panel lets you override it on whatever machine you are on. */
const VOICE_WISHLIST = [
  'Flo', 'Shelley', 'Samantha', 'Ava', 'Allison', 'Susan', 'Nicky', 'Zoe',
  'Google US English', 'Microsoft Aria Online (Natural) - English (United States)',
  'Microsoft Zira - English (United States)',
];

const englishVoices = () =>
  (window.speechSynthesis?.getVoices() || []).filter((v) => /^en(-|_|$)/i.test(v.lang));

function pickVoice() {
  const all = englishVoices();
  if (!all.length) return;

  const saved = localStorage.getItem('math.voice');
  if (saved) {
    const match = all.find((v) => v.name === saved);
    if (match) { voice = match; return; }
  }

  const us = all.filter((v) => /en[-_]US/i.test(v.lang));
  // Match on prefix: macOS localises the name as "Flo (英文（美國）)".
  for (const want of VOICE_WISHLIST) {
    const hit = us.find((v) => v.name === want || v.name.startsWith(want + ' ('));
    if (hit) { voice = hit; return; }
  }
  voice = us[0] || all[0];
}

if ('speechSynthesis' in window) {
  pickVoice();
  speechSynthesis.addEventListener('voiceschanged', pickVoice);
}

/* Every run of speech takes a token. Starting a new one bumps the token, so
   callbacks still queued from the old run see that they are stale and stop —
   otherwise moving on mid-sentence leaves two chains racing each other. */
let speakToken = 0;

function stopSpeaking() {
  speakToken++;
  window.speechSynthesis?.cancel();
}

function say(text, { rate = 0.85, pitch = 1.1, onEnd } = {}) {
  if (!state.sound || !('speechSynthesis' in window) || !text) { onEnd?.(); return; }

  stopSpeaking();
  const mine = speakToken;

  const u = new SpeechSynthesisUtterance(String(text));
  if (voice) u.voice = voice;
  u.lang = voice?.lang || 'en-US';
  u.rate = rate;
  u.pitch = pitch;

  let moved = false;
  const go = () => {
    if (moved || mine !== speakToken) return;
    moved = true;
    onEnd?.();
  };
  u.addEventListener('end', go);
  u.addEventListener('error', go);
  // A machine with no audio output never fires 'end', so back it with a
  // watchdog — without one the page would strand on the first sound.
  setTimeout(go, 1600 + String(text).length * 110);

  speechSynthesis.speak(u);
}

/* ==================== screens ==================== */

const SCREENS = ['grade', 'topic', 'play', 'done'];

function show(name) {
  for (const s of SCREENS) el(`screen-${s}`).classList.toggle('is-active', s === name);
  el('backBtn').hidden = name === 'grade';
  window.scrollTo(0, 0);
}

el('backBtn').addEventListener('click', () => {
  stopSpeaking();
  if (el('screen-topic').classList.contains('is-active')) {
    state.grade = null;
    el('barTitle').textContent = 'Number Lab';
    show('grade');
  } else {
    el('barTitle').textContent = state.grade.name;
    show('topic');
  }
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
    b.addEventListener('click', () => startRound(t));
    grid.appendChild(b);
  }
  show('topic');
}

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
  speakQuestion();
}

/* The clock topics have nothing readable in the prompt, so they say the time
   only *after* the question — otherwise the answer is given away up front. */
function speakQuestion() {
  say(current().speak);
}

el('replayBtn').addEventListener('click', speakQuestion);

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
    if (state.attempts >= 2 && q.hint) {
      el('hint').hidden = false;
      say(q.hint, { rate: 0.8 });
    }
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

  // On the clock and fraction topics the answer is worth hearing said properly;
  // elsewhere the cheer is enough and speech would only slow the round down.
  if (q.say) say(q.say, { rate: 0.8 });

  setTimeout(() => {
    state.index++;
    if (state.index >= ROUND_LENGTH) finish();
    else askQuestion();
  }, q.say ? 1500 : 850);
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
  say(score >= 7 ? 'Great work!' : 'Good effort. Let’s go again.');
}

el('againBtn').addEventListener('click', () => startRound(state.topic));
el('changeBtn').addEventListener('click', () => {
  el('barTitle').textContent = state.grade.name;
  show('topic');
});

/* ==================== sound switch ==================== */

el('soundBtn').addEventListener('click', () => {
  state.sound = !state.sound;
  const b = el('soundBtn');
  b.textContent = state.sound ? '🔊' : '🔇';
  b.setAttribute('aria-pressed', String(state.sound));
  b.setAttribute('aria-label', state.sound ? 'Turn sound off' : 'Turn sound on');
  if (!state.sound) stopSpeaking();
  try { localStorage.setItem('math.sound', state.sound ? '1' : '0'); } catch { /* private mode */ }
});

try {
  if (localStorage.getItem('math.sound') === '0') el('soundBtn').click();
} catch { /* private mode */ }

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

/* ---- voice picker ---- */

function fillVoices() {
  const sel = el('voiceSelect');
  const all = englishVoices();
  sel.innerHTML = '';
  if (!all.length) {
    sel.innerHTML = '<option>No English voices on this device</option>';
    sel.disabled = true;
    return;
  }
  sel.disabled = false;
  for (const v of all) {
    const o = document.createElement('option');
    o.value = v.name;
    o.textContent = `${v.name} — ${v.lang}`;
    o.selected = voice && v.name === voice.name;
    sel.appendChild(o);
  }
}

el('voiceSelect').addEventListener('change', (e) => {
  const chosen = englishVoices().find((v) => v.name === e.target.value);
  if (!chosen) return;
  voice = chosen;
  try { localStorage.setItem('math.voice', chosen.name); } catch { /* private mode */ }
  say('Two plus two equals four.');
});

el('voiceTest').addEventListener('click', () => say('Two plus two equals four.'));

el('voiceReset').addEventListener('click', () => {
  try { localStorage.removeItem('math.voice'); } catch { /* private mode */ }
  pickVoice();
  fillVoices();
  say('Two plus two equals four.');
});

if ('speechSynthesis' in window) {
  fillVoices();
  speechSynthesis.addEventListener('voiceschanged', fillVoices);
}

/* ==================== go ==================== */

buildGrades();
