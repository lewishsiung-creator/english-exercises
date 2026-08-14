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

/* Voices are ranked, not just wished for, because the fallback matters as much
   as the favourite. The en-US list this machine reports is alphabetical and
   starts: Albert, Ava, Bad News, Bahh, Bells, Boing, Bubbles… — so "take the
   first American voice" is one missing download away from teaching maths in
   Albert. Read as tiers, best first. */
const VOICE_TIERS = [
  /* Young American female — what this page was asked for, and what a six-year
     old hears best. */
  [/^(Flo|Shelley)\b/i],
  /* Neural. A different class of clarity to everything below. */
  [/\bnatural\b/i, /\bsiri\b/i, /^Google US English/i],
  /* Apple's recorded-speaker voices and Windows' equivalents. Samantha is the
     one almost every Mac already has. */
  [/^(Samantha|Ava|Allison|Susan|Zoe|Nicky|Joelle|Evan|Alex|Victoria)\b/i,
   /^Microsoft (Zira|Aria|Jenny|Michelle|Guy)\b/i],
  /* Character and regional voices: intelligible, but stylised or not
     American. Usable, never the automatic choice. */
  [/^(Eddy|Reed|Rocko|Sandy|Grandma|Grandpa|Karen|Moira|Tessa|Fiona|Daniel|Rishi|Serena)\b/i],
];

/* Jokes, singing and robots. Still selectable — a child who wants to hear a
   sum in Zarvox should get to — but never picked automatically. */
const NOVELTY = /^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Deranged|Good News|Hysterical|Jester|Junior|Kathy|Organ|Ralph|Superstar|Trinoids|Whisper|Wobble|Zarvox|Bruce|Agnes|Princess|Fred)\b/i;

/* macOS localises a voice name and does not agree with itself about how:
   "Flo (英文（美國）)" uses a Latin paren after a space, "Ava（增強音質）" a
   fullwidth one with none. Matching the raw name missed the enhanced Ava
   entirely — the best voice installed on this Mac was unreachable. */
const baseName = (v) => String(v.name).split(/\s*[(（]/)[0].trim();

/* An "enhanced" or "premium" download is the same speaker at a much higher
   sample rate. Free quality when it is already on the machine. */
const isEnhanced = (v) => /(enhanced|premium|增強|高級)/i.test(v.name);

const englishVoices = () =>
  (window.speechSynthesis?.getVoices() || []).filter((v) => /^en(-|_|$)/i.test(v.lang));

/* Lower is better. American outranks everything except novelty, and it
   outranks the tiers deliberately: several of these voices ship in a British
   and an American cut under the same name, and on a page built around an
   American classroom the wrong Flo is worse than the right Ava. Then tier,
   then an enhanced download ahead of the standard one. */
function voiceScore(v) {
  const name = baseName(v);
  let tier = VOICE_TIERS.length;
  for (let i = 0; i < VOICE_TIERS.length; i++) {
    if (VOICE_TIERS[i].some((re) => re.test(name))) { tier = i; break; }
  }
  return (NOVELTY.test(name) ? 1000 : 0)
    + (/en[-_]US/i.test(v.lang) ? 0 : 100)
    + tier * 10
    + (isEnhanced(v) ? 0 : 2);
}

/* The ranked list, best first — also the order the picker shows. */
const rankedVoices = () => englishVoices().slice().sort((a, b) => voiceScore(a) - voiceScore(b));

function pickVoice() {
  const all = englishVoices();
  if (!all.length) return;

  const saved = localStorage.getItem('math.voice');
  if (saved) {
    const match = all.find((v) => v.name === saved);
    if (match) { voice = match; return; }
  }
  voice = rankedVoices()[0] || all[0];
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

/* How fast everything is read. Six-year-olds and the grown-up re-listening to
   a hint do not want the same speed, so it is a setting rather than a
   constant. `slower` is a multiplier for the lines worth dwelling on. */
let rate = parseFloat(localStorage.getItem('math.rate') || '0.85');

function say(text, { slower = 1, onEnd } = {}) {
  if (!state.sound || !('speechSynthesis' in window) || !text) { onEnd?.(); return; }

  stopSpeaking();
  const mine = speakToken;

  const u = new SpeechSynthesisUtterance(String(text));
  if (voice) u.voice = voice;
  u.lang = voice?.lang || 'en-US';
  u.rate = Math.max(0.4, Math.min(1.4, rate * slower));
  /* Flat pitch. Raising it thins the formants, and a raised voice reading
     numbers all lesson is wearing rather than friendly. */
  u.pitch = 1;

  let moved = false;
  const go = () => {
    if (moved || mine !== speakToken) return;
    moved = true;
    onEnd?.();
  };
  u.addEventListener('end', go);
  u.addEventListener('error', go);
  // A machine with no audio output never fires 'end', so back it with a
  // watchdog — without one the page would strand on the first sound. It has
  // to scale with the rate, or a slow setting gets cut off by its own guard.
  setTimeout(go, (1600 + String(text).length * 110) / Math.max(0.5, u.rate));

  /* Chrome drops an utterance queued in the same tick as cancel(), which
     shows up as a tap that makes no sound at all. Let the cancel land first. */
  setTimeout(() => { if (mine === speakToken) speechSynthesis.speak(u); }, 70);
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
  stopSpeaking();
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

  sayStep();
}

/* The voice reads "5 + 3" as "five three", so a step with symbols in it
   carries its own spoken line. A plain sentence says itself. */
function sayStep() {
  const step = state.topic.teach[state.step];
  say(step.say || step.text, { slower: 0.94 });
}

el('teachReplay').addEventListener('click', sayStep);

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
      say(q.hint, { slower: 0.94 });
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

  const next = () => {
    state.index++;
    if (state.index >= ROUND_LENGTH) finish();
    else askQuestion();
  };

  // On the clock and fraction topics the answer is worth hearing said
  // properly; elsewhere the cheer is enough and speech would only slow the
  // round down. Move on when the voice has finished rather than after a fixed
  // wait: a fixed one either cuts "half past three" off at a slow speed or
  // leaves the child staring at an answered question at a fast one.
  if (!q.say) { setTimeout(next, 850); return; }

  /* Driving the advance off onEnd alone strands the round: anything that
     cancels the utterance — tapping "Say it again" while the answer is still
     being read — takes its onEnd with it, and the question never moves on.
     So whichever of the two arrives first wins. */
  let moved = false;
  const go = () => { if (moved) return; moved = true; setTimeout(next, 420); };
  say(q.say, { slower: 0.94, onEnd: go });
  setTimeout(go, 3400);
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

/* One line that exercises what this page actually says: a number, an
   operator and a result. "Testing, one two three" would prove nothing. */
const SAMPLE = 'Two plus two equals four.';

/* Listed best first rather than in the browser's own order, which is
   alphabetical and therefore opens on Albert. */
function fillVoices() {
  const sel = el('voiceSelect');
  const all = rankedVoices();
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
    const tags = [v.lang];
    if (isEnhanced(v)) tags.push('enhanced');
    if (NOVELTY.test(baseName(v))) tags.push('not recommended');
    o.textContent = `${v.name} — ${tags.join(', ')}`;
    o.selected = voice && v.name === voice.name;
    sel.appendChild(o);
  }
}

/* ---- speed ---- */

const RATE_WORDS = (r) => (r <= 0.7 ? 'Slow' : r >= 1.05 ? 'Fast' : r >= 0.95 ? 'Brisk' : 'Normal');

function showRate() {
  el('rateRange').value = String(rate);
  el('rateLabel').textContent = `Now: ${RATE_WORDS(rate)}.`;
}

el('rateRange').addEventListener('input', (e) => {
  rate = parseFloat(e.target.value);
  el('rateLabel').textContent = `Now: ${RATE_WORDS(rate)}.`;
});

/* Speak the sample on release rather than on every step of the drag, or the
   slider stutters through a dozen cancelled utterances. */
el('rateRange').addEventListener('change', () => {
  try { localStorage.setItem('math.rate', String(rate)); } catch { /* private mode */ }
  say(SAMPLE);
});

showRate();

el('voiceSelect').addEventListener('change', (e) => {
  const chosen = englishVoices().find((v) => v.name === e.target.value);
  if (!chosen) return;
  voice = chosen;
  try { localStorage.setItem('math.voice', chosen.name); } catch { /* private mode */ }
  say(SAMPLE);
});

el('voiceTest').addEventListener('click', () => say('Two plus two equals four.'));

el('voiceReset').addEventListener('click', () => {
  try { localStorage.removeItem('math.voice'); } catch { /* private mode */ }
  pickVoice();
  fillVoices();
  say(SAMPLE);
});

if ('speechSynthesis' in window) {
  fillVoices();
  speechSynthesis.addEventListener('voiceschanged', fillVoices);
}

/* ==================== go ==================== */

buildGrades();
