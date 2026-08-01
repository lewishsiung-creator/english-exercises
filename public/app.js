/* Word Play — game logic.
   Learners never get stuck: a wrong answer wobbles and lets them try again,
   only a correct answer advances. The score records first-try accuracy so a
   teacher still gets a useful signal without the child seeing a failure. */

const ROUND_LENGTH = 8;
const VOWELS = 'aeiou';

const el = (id) => document.getElementById(id);

const state = {
  topic: null,
  activity: null,
  queue: [],
  index: 0,
  firstTry: 0,
  answered: false,   // current question already answered correctly
  missed: false,     // current question has had a wrong attempt
  attempts: 0,       // taps taken on the current question, including the right one
  sound: true,
};

/* Session record for the teacher panel. Kept in localStorage so it survives a
   reload and can still be read after the child has handed the tablet back. */
const LOG_KEY = 'wordplay.log';

let log = [];
try { log = JSON.parse(localStorage.getItem(LOG_KEY)) || []; } catch { log = []; }

function saveLog() {
  try { localStorage.setItem(LOG_KEY, JSON.stringify(log.slice(-300))); } catch { /* private mode */ }
}

function record(item, attempts) {
  log.push({
    label: item.word || item.words.join(' '),
    word: item.word || null,
    topic: state.topic.name,
    activity: state.activity.name,
    attempts,
  });
  saveLog();
}

/* ==================== sound ==================== */

let voice = null;

/* Young American female, in order of preference. The available set differs per
   device — Flo and Shelley ship with recent macOS, Zira/Aria with Windows,
   the Google voices with Chrome on Android — so this is a chain, and the
   teacher panel lets you override it on whatever machine you teach from. */
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

  const saved = localStorage.getItem('wordplay.voice');
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

function say(text, { rate = 0.85, onEnd } = {}) {
  if (!state.sound || !('speechSynthesis' in window)) { onEnd?.(); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  if (voice) u.voice = voice;
  u.lang = voice?.lang || 'en-GB';
  u.rate = rate;
  u.pitch = 1.15;           // a touch brighter reads as younger and friendlier
  if (onEnd) u.addEventListener('end', onEnd);
  speechSynthesis.speak(u);
}

let audioCtx = null;

function tone(notes) {
  if (!state.sound) return;
  try {
    audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    notes.forEach(([freq, start, dur]) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t0 = audioCtx.currentTime + start;
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(0.18, t0 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(t0);
      osc.stop(t0 + dur + 0.02);
    });
  } catch { /* audio is a nicety, never block the exercise on it */ }
}

const dingRight = () => tone([[660, 0, 0.12], [880, 0.1, 0.22]]);
const dingWrong = () => tone([[300, 0, 0.18]]);
const fanfare  = () => tone([[523, 0, 0.15], [659, 0.13, 0.15], [784, 0.26, 0.15], [1047, 0.39, 0.4]]);

/* ==================== helpers ==================== */

const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/* Pick distractors from the same topic so choices stay plausible. */
function distractors(words, answer, n) {
  return shuffle(words.filter((w) => w.word !== answer.word)).slice(0, n);
}

/* Blank the first vowel, but skip words where it sits in a vowel digraph
   (bread, book, paint) — those have more than one defensible answer. */
function spellable(words) {
  return words.filter((w) => {
    const i = [...w.word].findIndex((c) => VOWELS.includes(c));
    return i > 0 && !VOWELS.includes(w.word[i + 1] || '') && w.word.length <= 6;
  });
}

/* ==================== screens ==================== */

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.toggle('is-active', s.id === id));
  el('backBtn').hidden = (id === 'screen-topic');
  window.scrollTo(0, 0);
}

function renderTopics() {
  const grid = el('topicGrid');
  grid.innerHTML = '';
  TOPICS.forEach((t) => {
    const b = document.createElement('button');
    b.className = 'card';
    b.dataset.colour = t.colour;
    b.setAttribute('aria-label', `${t.name} — ${t.words.length} words`);
    b.innerHTML = `<span class="card-icon" aria-hidden="true">${t.icon}</span>
                   <span class="card-name">${t.name}</span>
                   <span class="card-hint">${t.words.length} words</span>`;
    b.addEventListener('click', () => {
      state.topic = t;
      el('barTitle').textContent = t.name;
      renderActivities();
      showScreen('screen-activity');
    });
    grid.append(b);
  });
}

function renderActivities() {
  const grid = el('activityGrid');
  grid.innerHTML = '';
  ACTIVITIES.forEach((a) => {
    const b = document.createElement('button');
    b.className = 'card';
    b.dataset.colour = a.colour;
    b.setAttribute('aria-label', `${a.name} — ${a.hint}`);
    b.innerHTML = `<span class="card-icon" aria-hidden="true">${a.icon}</span>
                   <span class="card-name">${a.name}</span>
                   <span class="card-hint">${a.hint}</span>`;
    b.addEventListener('click', () => startRound(a));
    grid.append(b);
  });
}

/* ==================== round setup ==================== */

function startRound(activity) {
  state.activity = activity;
  state.index = 0;
  state.firstTry = 0;
  state.queue = buildQueue(activity, state.topic);

  el('barTitle').textContent = activity.name;
  showScreen('screen-play');
  renderQuestion();
}

function buildQueue(activity, topic) {
  if (activity.id === 'build') {
    return shuffle(topic.sentences);
  }
  if (activity.id === 'spell') {
    const pool = spellable(topic.words);
    return shuffle(pool).slice(0, Math.min(ROUND_LENGTH, pool.length));
  }
  return shuffle(topic.words).slice(0, ROUND_LENGTH);
}

function renderQuestion() {
  const total = state.queue.length;
  if (state.index >= total) return finishRound();

  state.answered = false;
  state.missed = false;
  state.attempts = 0;

  el('progressFill').style.width = `${(state.index / total) * 100}%`;
  el('progressText').textContent = `Question ${state.index + 1} of ${total}`;
  el('taskHint').textContent = state.activity.hint;
  setFeedback('');

  const stage = el('stage');
  stage.innerHTML = '';

  const item = state.queue[state.index];
  ({
    listen: renderListen,
    read: renderRead,
    spell: renderSpell,
    build: renderBuild,
  })[state.activity.id](item, stage);
}

/* ==================== activity: listen and click ==================== */

function renderListen(item, stage) {
  const speaker = document.createElement('button');
  speaker.className = 'prompt is-speaker';
  speaker.textContent = '🔊';
  speaker.setAttribute('aria-label', 'Play the word again');
  const play = () => {
    speaker.classList.add('is-speaking');
    say(item.word, { onEnd: () => speaker.classList.remove('is-speaking') });
    setTimeout(() => speaker.classList.remove('is-speaking'), 2000);
  };
  speaker.addEventListener('click', play);
  stage.append(speaker);

  const options = shuffle([item, ...distractors(state.topic.words, item, 3)]);
  stage.append(buildOptions(options, (opt) => opt.word === item.word, {
    label: (opt) => opt.emoji,
    aria: (opt) => opt.word,
  }, item.word));

  setTimeout(play, 350);
}

/* ==================== activity: read and match ==================== */

function renderRead(item, stage) {
  const picture = document.createElement('button');
  picture.className = 'prompt';
  picture.textContent = item.emoji;
  picture.setAttribute('aria-label', `Picture: ${item.word}. Click to hear it.`);
  picture.addEventListener('click', () => say(item.word));
  stage.append(picture);

  const options = shuffle([item, ...distractors(state.topic.words, item, 3)]);
  stage.append(buildOptions(options, (opt) => opt.word === item.word, {
    label: (opt) => opt.word,
    aria: (opt) => opt.word,
    text: true,
  }, item.word));
}

/* ==================== activity: missing letter ==================== */

function renderSpell(item, stage) {
  const i = [...item.word].findIndex((c) => VOWELS.includes(c));
  const answer = item.word[i];

  const picture = document.createElement('button');
  picture.className = 'prompt';
  picture.textContent = item.emoji;
  picture.setAttribute('aria-label', `Picture: ${item.word}. Click to hear it.`);
  picture.addEventListener('click', () => say(item.word));
  stage.append(picture);

  const word = document.createElement('p');
  word.className = 'spell-word';
  word.setAttribute('aria-label', `${item.word.slice(0, i)} blank ${item.word.slice(i + 1)}`);
  word.innerHTML = `${item.word.slice(0, i)}<span class="spell-blank">?</span>${item.word.slice(i + 1)}`;
  stage.append(word);

  const others = shuffle([...VOWELS].filter((v) => v !== answer)).slice(0, 3);
  const options = shuffle([answer, ...others]).map((letter) => ({ letter }));

  stage.append(buildOptions(options, (opt) => opt.letter === answer, {
    label: (opt) => opt.letter,
    aria: (opt) => `Letter ${opt.letter}`,
    text: true,
    letters: true,
  }, item.word, () => {
    word.innerHTML = `${item.word.slice(0, i)}<span class="spell-blank">${answer}</span>${item.word.slice(i + 1)}`;
  }));

  setTimeout(() => say(item.word), 350);
}

/* ==================== activity: build a sentence ==================== */

function renderBuild(item, stage) {
  const target = item.words;

  const picture = document.createElement('button');
  picture.className = 'prompt';
  picture.textContent = item.emoji;
  picture.setAttribute('aria-label', 'Click to hear the sentence.');
  picture.addEventListener('click', () => say(target.join(' ')));
  stage.append(picture);

  const line = document.createElement('div');
  line.className = 'answer-line';
  stage.append(line);

  const tiles = document.createElement('div');
  tiles.className = 'tiles';
  stage.append(tiles);

  /* Track placed entries rather than bare strings: a sentence may repeat a
     word ("the ... the ..."), and removing the one that was actually tapped
     has to stay unambiguous. */
  const placed = [];

  const clearAll = () => {
    placed.forEach((p) => { p.node.remove(); p.source.classList.remove('is-used'); });
    placed.length = 0;
  };

  const check = () => {
    if (placed.length !== target.length) return;
    const correct = placed.every((p, i) => p.word === target[i]);
    if (correct) {
      state.answered = true;
      line.classList.add('is-right');
      placed.forEach((p) => { p.node.disabled = true; });
      award(true);
      say(target.join(' '));
      setTimeout(next, 1900);
    } else {
      line.classList.add('is-wrong');
      award(false);
      setTimeout(() => {
        line.classList.remove('is-wrong');
        clearAll();
      }, 900);
    }
  };

  shuffle(target.map((w, i) => ({ w, i }))).forEach(({ w }) => {
    const source = document.createElement('button');
    source.className = 'tile';
    source.textContent = w;
    source.setAttribute('aria-label', `Add ${w}`);

    source.addEventListener('click', () => {
      if (state.answered) return;
      source.classList.add('is-used');

      const node = document.createElement('button');
      node.className = 'tile in-answer';
      node.textContent = w;
      node.setAttribute('aria-label', `Remove ${w}`);
      node.addEventListener('click', () => {
        if (state.answered) return;
        const at = placed.findIndex((p) => p.node === node);
        if (at > -1) placed.splice(at, 1);
        node.remove();
        source.classList.remove('is-used');
      });

      placed.push({ word: w, node, source });
      line.append(node);
      check();
    });

    tiles.append(source);
  });

  setTimeout(() => say(target.join(' ')), 350);
}

/* ==================== shared option rendering ==================== */

function buildOptions(options, isCorrect, render, spokenAnswer, onReveal) {
  const wrap = document.createElement('div');
  wrap.className = 'options' + (render.letters ? ' is-letters' : '');

  options.forEach((opt) => {
    const b = document.createElement('button');
    b.className = 'option' + (render.text ? ' is-text' : '');
    b.textContent = render.label(opt);
    b.setAttribute('aria-label', render.aria(opt));

    b.addEventListener('click', () => {
      if (state.answered) return;

      if (isCorrect(opt)) {
        state.answered = true;
        b.classList.add('is-right');
        wrap.querySelectorAll('.option').forEach((o) => { o.disabled = true; });
        onReveal?.();
        award(true);
        say(spokenAnswer);
        setTimeout(next, 1700);
      } else {
        b.classList.add('is-wrong');
        award(false);
        setTimeout(() => b.classList.remove('is-wrong'), 700);
      }
    });

    wrap.append(b);
  });

  return wrap;
}

/* ==================== scoring and flow ==================== */

function award(correct) {
  state.attempts++;
  if (correct) {
    if (!state.missed) state.firstTry++;
    record(state.queue[state.index], state.attempts);
    dingRight();
    setFeedback(pick(PRAISE), 'is-good');
  } else {
    state.missed = true;
    dingWrong();
    setFeedback(pick(ENCOURAGE), 'is-oops');
  }
}

function setFeedback(text, cls = '') {
  const f = el('feedback');
  f.textContent = text;
  f.className = 'feedback ' + cls;
}

function next() {
  state.index++;
  renderQuestion();
}

function finishRound() {
  const total = state.queue.length;
  const stars = state.firstTry >= total * 0.9 ? 3
              : state.firstTry >= total * 0.7 ? 2
              : 1;

  el('progressFill').style.width = '100%';
  el('doneEmoji').textContent = stars === 3 ? '🏆' : stars === 2 ? '🎉' : '👍';
  el('doneTitle').textContent = stars === 3 ? 'Amazing!' : stars === 2 ? 'Well done!' : 'Good try!';
  el('doneStars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
  el('doneScore').textContent = `${state.firstTry} of ${total} right the first time`;

  el('barTitle').textContent = 'Word Play';
  showScreen('screen-done');
  fanfare();
  say(stars === 3 ? 'Amazing! Well done!' : stars === 2 ? 'Well done!' : 'Good try! Play again.', { rate: 0.95 });
}

/* ==================== chrome ==================== */

el('backBtn').addEventListener('click', () => {
  window.speechSynthesis?.cancel();
  const current = document.querySelector('.screen.is-active').id;
  if (current === 'screen-activity') {
    el('barTitle').textContent = 'Word Play';
    showScreen('screen-topic');
  } else {
    el('barTitle').textContent = state.topic.name;
    showScreen('screen-activity');
  }
});

el('soundBtn').addEventListener('click', () => {
  state.sound = !state.sound;
  const b = el('soundBtn');
  b.textContent = state.sound ? '🔊' : '🔇';
  b.setAttribute('aria-pressed', String(state.sound));
  b.setAttribute('aria-label', state.sound ? 'Turn sound off' : 'Turn sound on');
  if (!state.sound) window.speechSynthesis?.cancel();
});

/* ==================== teacher panel ==================== */

function renderTeacher() {
  const total = log.length;
  const clean = log.filter((e) => e.attempts === 1).length;

  el('teacherStats').innerHTML = total
    ? `<span class="big">${Math.round((clean / total) * 100)}%</span> first-try correct
       &nbsp;·&nbsp; ${clean} of ${total} answers`
    : 'Nothing yet.';

  /* Roll repeated misses of the same word together — a word missed three times
     across three games is the one worth reteaching. */
  const misses = new Map();
  log.filter((e) => e.attempts > 1 && e.word).forEach((e) => {
    misses.set(e.word, (misses.get(e.word) || 0) + (e.attempts - 1));
  });

  const weak = [...misses.entries()].sort((a, b) => b[1] - a[1]);
  const list = el('teacherWeak');
  list.innerHTML = '';
  el('teacherWeakEmpty').hidden = weak.length > 0;
  weak.forEach(([word, n]) => {
    const li = document.createElement('li');
    li.textContent = word;
    if (n > 1) li.insertAdjacentHTML('beforeend', ` <span>×${n}</span>`);
    list.append(li);
  });

  const body = el('teacherLog').querySelector('tbody');
  body.innerHTML = '';
  if (!total) {
    body.innerHTML = '<tr><td class="empty" colspan="3">No answers recorded yet.</td></tr>';
  } else {
    log.slice().reverse().forEach((e) => {
      const tr = document.createElement('tr');
      const tries = document.createElement('td');
      tries.textContent = e.attempts === 1 ? '✓' : `✗ ${e.attempts}`;
      tries.className = e.attempts === 1 ? 'tries-ok' : 'tries-miss';
      const item = document.createElement('td');
      item.textContent = e.label;
      const game = document.createElement('td');
      game.textContent = e.activity;
      tr.append(item, game, tries);
      body.append(tr);
    });
  }
}

function renderVoiceOptions() {
  const sel = el('voiceSelect');
  const all = englishVoices();
  sel.innerHTML = '';

  if (!all.length) {
    sel.innerHTML = '<option>No English voices on this device</option>';
    sel.disabled = true;
    return;
  }

  sel.disabled = false;
  all.forEach((v) => {
    const o = document.createElement('option');
    o.value = v.name;
    o.textContent = `${v.name} — ${v.lang}`;
    o.selected = voice && v.name === voice.name;
    sel.append(o);
  });
}

function openTeacher() {
  renderTeacher();
  renderVoiceOptions();
  el('teacherSheet').hidden = false;
  el('teacherClose').focus();
}

const closeTeacher = () => { el('teacherSheet').hidden = true; };

el('teacherBtn').addEventListener('click', openTeacher);
el('teacherClose').addEventListener('click', closeTeacher);
el('teacherSheet').addEventListener('click', (e) => {
  if (e.target === el('teacherSheet')) closeTeacher();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !el('teacherSheet').hidden) closeTeacher();
});

el('voiceSelect').addEventListener('change', (e) => {
  const chosen = englishVoices().find((v) => v.name === e.target.value);
  if (!chosen) return;
  voice = chosen;
  try { localStorage.setItem('wordplay.voice', chosen.name); } catch { /* private mode */ }
});

el('voiceTest').addEventListener('click', () => {
  const wasMuted = !state.sound;
  state.sound = true;                       // a test button that respects mute is useless
  say('Hello! I can see a cat.', { rate: 0.9 });
  if (wasMuted) setTimeout(() => { state.sound = false; }, 2600);
});

el('voiceReset').addEventListener('click', () => {
  try { localStorage.removeItem('wordplay.voice'); } catch { /* private mode */ }
  voice = null;
  pickVoice();
  renderVoiceOptions();
});

el('logClear').addEventListener('click', () => {
  log = [];
  saveLog();
  renderTeacher();
});

/* ==================== buttons ==================== */

el('againBtn').addEventListener('click', () => startRound(state.activity));
el('changeBtn').addEventListener('click', () => {
  el('barTitle').textContent = state.topic.name;
  showScreen('screen-activity');
});

renderTopics();
