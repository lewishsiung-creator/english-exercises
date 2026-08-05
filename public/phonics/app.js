/* Sound Lab — phonics practice, ages 9–11.

   Same house rules as Word Play: a wrong answer wobbles and invites another
   go, only a correct one advances, and first-try accuracy is recorded for the
   teacher rather than shown to the child. Two of the six activities — meeting
   the sounds and reading aloud — are not scored at all, because there is
   nothing there to get wrong. */

const ROUND_LENGTH = 8;

const el = (id) => document.getElementById(id);

const state = {
  set: null,
  activity: null,
  queue: [],
  index: 0,
  firstTry: 0,
  answered: false,   // current question already answered correctly
  missed: false,     // current question has had a wrong attempt
  attempts: 0,       // taps taken on the current question, including the right one
  sound: true,
  zh: false,
};

/* ==================== session record ==================== */

const LOG_KEY = 'phonics.log';

let log = [];
try { log = JSON.parse(localStorage.getItem(LOG_KEY)) || []; } catch { log = []; }

function saveLog() {
  try { localStorage.setItem(LOG_KEY, JSON.stringify(log.slice(-300))); } catch { /* private mode */ }
}

function record(label, sound, attempts) {
  log.push({
    label,
    sound: sound ? `${sound.label}` : '',
    set: state.set.name,
    activity: state.activity.name,
    attempts,
  });
  saveLog();
}

/* ==================== speech ==================== */

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

  const saved = localStorage.getItem('phonics.voice');
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
   the callbacks still queued from the old run see that they are stale and
   stop — otherwise tapping a second word mid-sentence leaves two chains
   racing each other. */
let speakToken = 0;

function stopSpeaking() {
  speakToken++;
  window.speechSynthesis?.cancel();
}

/* Speak a list of strings one after another. A machine with no audio output
   never fires 'end', so each item also carries a watchdog — without it the
   whole page would strand on the first sound. */
function sayEach(list, { rate = 0.85, pitch = 1.1, gap = 260, onEach, onEnd } = {}) {
  if (!state.sound || !('speechSynthesis' in window) || !list.length) { onEnd?.(); return; }

  stopSpeaking();
  const mine = speakToken;
  let i = 0;

  const step = () => {
    if (mine !== speakToken) return;
    if (i >= list.length) { onEnd?.(); return; }

    const text = String(list[i]);
    onEach?.(i);
    i++;

    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.lang = voice?.lang || 'en-US';
    u.rate = rate;
    u.pitch = pitch;

    let moved = false;
    const go = () => {
      if (moved || mine !== speakToken) return;
      moved = true;
      setTimeout(step, gap);
    };
    u.addEventListener('end', go);
    u.addEventListener('error', go);
    setTimeout(go, 1400 + text.length * 110);

    speechSynthesis.speak(u);
  };

  step();
}

const say = (text, opts = {}) => sayEach([text], opts);

/* ==================== sounding words out ==================== */

const chunks = (word) => word.p.split('-');

/* A chunk is 'letters' or 'letters:sound'. Spelled out, the colon and
   everything after it is dropped; spoken, an explicit sound wins, an empty
   one means silent, and anything else falls back to the cue table — which is
   why 'ay' and 'oh' need no entry there. */
const letters = (spec) => spec.split(':')[0];

function cueOf(spec) {
  const at = spec.indexOf(':');
  if (at > -1) return spec.slice(at + 1);
  return CUES[spec] ?? spec;
}

const isSilent = (spec) => cueOf(spec) === '';

/* Sound it out, then say it: the two halves of blending. Silent chunks are
   skipped, so the highlight has to be told which chunk it is really on. */
function blend(word, { onEach, onEnd } = {}) {
  const heard = chunks(word)
    .map((spec, at) => ({ cue: cueOf(spec), at }))
    .filter((c) => c.cue);

  sayEach(heard.map((c) => c.cue), {
    rate: 0.6,
    gap: 340,
    onEach: (n) => onEach?.(heard[n].at),
    onEnd: () => setTimeout(() => {
      onEach?.(-1);
      say(word.w, { rate: 0.8, onEnd });
    }, 300),
  });
}

/* The letters a child would circle for this sound: 'ee / ea' → ee, ea;
   'a_e' → a, e; 'c → /s/' → c. Used to light up the grapheme inside a word
   once it has been named correctly. */
function graphemesOf(sound) {
  return sound.label
    .replace(/\([^)]*\)/g, ' ')      // "oo (moon)" is one grapheme, not two
    .replace(/[\-\/→_]/g, ' ')
    .split(/\s+/)
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith('/'));
}

/* The word, rebuilt from its chunks, with the ones belonging to this sound
   picked out. Words whose spelling does not line up simply light nothing. */
function spellOut(word, sound) {
  const want = sound ? graphemesOf(sound) : [];
  return chunks(word)
    .map(letters)
    .map((c) => (want.includes(c) ? `<b>${c}</b>` : c))
    .join('');
}

/* ==================== tones ==================== */

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
      gain.gain.exponentialRampToValueAtTime(0.16, t0 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(t0);
      osc.stop(t0 + dur + 0.02);
    });
  } catch { /* audio is a nicety, never block the exercise on it */ }
}

const dingRight = () => tone([[660, 0, 0.12], [880, 0.1, 0.22]]);
const dingWrong = () => tone([[300, 0, 0.18]]);
const fanfare   = () => tone([[523, 0, 0.15], [659, 0.13, 0.15], [784, 0.26, 0.15], [1047, 0.39, 0.4]]);

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

const earSounds = (set) => set.sounds.filter((s) => s.ear !== false);

/* Deal words round-robin from every sound so a round covers the whole set
   rather than landing four questions deep in one sound. */
function dealWords(sounds, n) {
  const pools = shuffle(sounds).map((s) => shuffle(s.words).map((w) => ({ word: w, sound: s })));
  const out = [];
  for (let i = 0; out.length < n && pools.some((p) => p.length > i); i++) {
    for (const p of pools) {
      if (p[i] && out.length < n) out.push(p[i]);
    }
  }
  return shuffle(out);
}

function oddQuestions(sounds, n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const [a, b] = shuffle(sounds).slice(0, 2);
    out.push({
      sound: a,
      same: shuffle(a.words).slice(0, 3),
      odd: pick(b.words),
    });
  }
  return out;
}

/* Which activities this set can actually offer. */
function availableActivities(set) {
  return ACTIVITIES.filter((a) => {
    if (a.id === 'read') return set.sentences?.length > 0;
    if (a.id === 'ear' || a.id === 'odd') return earSounds(set).length >= 2;
    return true;
  });
}

function button(cls, label, onClick, aria) {
  const b = document.createElement('button');
  b.className = cls;
  b.innerHTML = label;
  if (aria) b.setAttribute('aria-label', aria);
  b.addEventListener('click', onClick);
  return b;
}

/* ==================== screens ==================== */

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.toggle('is-active', s.id === id));
  el('backBtn').hidden = (id === 'screen-set');
  window.scrollTo(0, 0);
}

function renderSets() {
  const grid = el('setGrid');
  grid.innerHTML = '';
  SETS.forEach((set) => {
    const b = document.createElement('button');
    b.className = 'card';
    b.dataset.colour = set.colour;
    b.setAttribute('aria-label', `${set.name} — ${set.sounds.length} sounds`);
    b.innerHTML = `
      <span class="card-icon" aria-hidden="true">${set.icon}</span>
      <span class="card-name">${set.name}</span>
      <span class="card-zh zh">${set.zh}</span>
      <span class="card-chips" aria-hidden="true">${
        set.sounds.map((s) => `<i>${s.label}</i>`).join('')
      }</span>`;
    b.addEventListener('click', () => {
      state.set = set;
      el('barTitle').textContent = set.name;
      renderActivities();
      showScreen('screen-activity');
    });
    grid.append(b);
  });
}

function renderActivities() {
  const set = state.set;

  el('setHead').innerHTML = `
    <p class="set-blurb">${set.blurb}</p>
    <p class="set-blurb-zh zh">${set.blurbZh}</p>`;

  const grid = el('activityGrid');
  grid.innerHTML = '';
  availableActivities(set).forEach((a) => {
    const b = document.createElement('button');
    b.className = 'card';
    b.dataset.colour = a.colour;
    b.setAttribute('aria-label', `${a.name} — ${a.hint}`);
    b.innerHTML = `
      <span class="card-icon" aria-hidden="true">${a.icon}</span>
      <span class="card-name">${a.name}</span>
      <span class="card-zh zh">${a.zh}</span>
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
  state.queue = buildQueue(activity, state.set);

  el('barTitle').textContent = activity.name;
  showScreen('screen-play');
  renderQuestion();
}

function buildQueue(activity, set) {
  switch (activity.id) {
    case 'cards': return set.sounds.slice();
    case 'read':  return shuffle(set.sentences);
    case 'odd':   return oddQuestions(earSounds(set), ROUND_LENGTH);
    case 'ear':   return dealWords(earSounds(set), ROUND_LENGTH);
    default:      return dealWords(set.sounds, ROUND_LENGTH);
  }
}

const COUNTER = { cards: 'Sound', read: 'Sentence' };

function renderQuestion() {
  const total = state.queue.length;
  if (state.index >= total) return finishRound();

  state.answered = false;
  state.missed = false;
  state.attempts = 0;

  el('progressFill').style.width = `${(state.index / total) * 100}%`;
  el('progressText').textContent =
    `${COUNTER[state.activity.id] || 'Question'} ${state.index + 1} of ${total}`;
  el('taskHint').textContent = state.activity.hint;
  el('taskHintZh').textContent = state.activity.hintZh;
  setFeedback('');

  const stage = el('stage');
  stopSpeaking();
  stage.innerHTML = '';

  ({
    cards: renderCards,
    ear: renderEar,
    sort: renderSort,
    build: renderBuild,
    odd: renderOdd,
    read: renderRead,
  })[state.activity.id](state.queue[state.index], stage);
}

/* ==================== activity: meet the sounds ==================== */

function renderCards(sound, stage) {
  const key = sound.words[0];

  const hero = document.createElement('div');
  hero.className = 'hero';
  hero.innerHTML = `
    <p class="hero-label">${sound.label}</p>
    <p class="hero-note">${sound.note}</p>
    <p class="hero-zh zh">${sound.zh}</p>`;
  stage.append(hero);

  const row = document.createElement('div');
  row.className = 'btn-row';
  if (sound.say) {
    row.append(button('btn btn-primary', '🔊 The sound',
      () => say(sound.say, { rate: 0.6 }), `Play the sound ${sound.label}`));
  }
  row.append(button('btn', '🗣 All five words',
    () => sayEach(sound.words.map((w) => w.w), { rate: 0.8, gap: 380 }),
    'Play all five words'));
  stage.append(row);

  /* Sound it out: the key word cut into its chunks, each one tappable, and a
     play button that walks them and then says the whole word. */
  const strip = document.createElement('div');
  strip.className = 'strip';

  /* A silent chunk still lights up when tapped — that flash and the silence
     after it are exactly the point of a magic e. */
  const pieces = chunks(key).map((spec) => {
    const quiet = isSilent(spec);
    const b = button('chunk' + (quiet ? ' is-silent' : ''), letters(spec), () => {
      if (quiet) {
        b.classList.add('is-lit');
        setTimeout(() => b.classList.remove('is-lit'), 450);
        return;
      }
      say(cueOf(spec), { rate: 0.6 });
    }, quiet ? `${letters(spec)} — silent` : `The sound ${letters(spec)}`);
    return b;
  });

  const whole = document.createElement('div');
  whole.className = 'strip-word';
  whole.innerHTML = `<span class="strip-emoji" aria-hidden="true">${key.e || ''}</span>
                     <span class="strip-text">${key.w}</span>`;

  const chunkRow = document.createElement('div');
  chunkRow.className = 'chunk-row';
  pieces.forEach((p) => chunkRow.append(p));

  const lit = (i) => pieces.forEach((p, n) => p.classList.toggle('is-lit', n === i));

  strip.append(whole, chunkRow, button('btn btn-small', '▶ Sound it out',
    () => blend(key, { onEach: lit, onEnd: () => lit(-1) }),
    `Sound out the word ${key.w}`));
  stage.append(strip);

  if (sound.vs?.length) {
    const vs = document.createElement('div');
    vs.className = 'vs';
    vs.innerHTML = '<p class="vs-head">Listen to the difference<span class="zh"> 聽聽看差在哪裡</span></p>';
    const pairs = document.createElement('div');
    pairs.className = 'vs-row';
    sound.vs.forEach(([a, b]) => {
      pairs.append(button('vs-pair', `<span>${a}</span><i>→</i><span>${b}</span>`,
        () => sayEach([a, b], { rate: 0.75, gap: 420 }), `${a}, then ${b}`));
    });
    vs.append(pairs);
    stage.append(vs);
  }

  const chips = document.createElement('div');
  chips.className = 'word-chips';
  sound.words.forEach((w) => {
    chips.append(button('word-chip', `${w.e ? `<i>${w.e}</i>` : ''}${spellOut(w, sound)}`,
      () => say(w.w), `Play the word ${w.w}`));
  });
  stage.append(chips);

  stage.append(button('btn btn-primary btn-next',
    state.index === state.queue.length - 1 ? 'Done ✓' : 'Next sound →', next));

  if (sound.say) setTimeout(() => say(sound.say, { rate: 0.6 }), 400);
}

/* ==================== activity: which sound? ==================== */

function renderEar(item, stage) {
  const { word, sound } = item;

  const play = () => {
    speaker.classList.add('is-speaking');
    say(word.w, { onEnd: () => speaker.classList.remove('is-speaking') });
    setTimeout(() => speaker.classList.remove('is-speaking'), 2200);
  };
  const speaker = button('prompt is-speaker', '🔊', () => play(), 'Play the word again');
  stage.append(speaker);

  const reveal = document.createElement('p');
  reveal.className = 'reveal';
  stage.append(reveal);

  stage.append(soundOptions(sound, earSounds(state.set), word, () => {
    reveal.innerHTML = spellOut(word, sound);
    reveal.classList.add('is-shown');
  }));

  setTimeout(play, 400);
}

/* ==================== activity: sort the words ==================== */

function renderSort(item, stage) {
  const { word, sound } = item;

  const card = button('prompt is-word',
    `${word.e ? `<i>${word.e}</i>` : ''}<span class="pw">${word.w}</span>`,
    () => say(word.w), `Play the word ${word.w}`);
  stage.append(card);

  stage.append(soundOptions(sound, state.set.sounds, word, () => {
    card.querySelector('.pw').innerHTML = spellOut(word, sound);
  }));

  setTimeout(() => say(word.w), 400);
}

/* Three buckets: the right one, plus two others from the same set. */
function soundOptions(answer, pool, word, onReveal) {
  const others = shuffle(pool.filter((s) => s.id !== answer.id)).slice(0, 2);
  const options = shuffle([answer, ...others]);

  return buildOptions(options, (o) => o.id === answer.id, {
    label: (o) => o.label,
    aria: (o) => `The sound ${o.label}`,
    text: true,
  }, word.w, () => {
    onReveal?.();
    record(word.w, answer, state.attempts);
  });
}

/* ==================== activity: build the word ==================== */

function renderBuild(item, stage) {
  const { word, sound } = item;
  /* Tiles carry letters only. Two chunks that look the same must behave the
     same, or a child would face two identical tiles with one of them wrong. */
  const target = chunks(word).map(letters);

  const prompt = button('prompt' + (word.e ? '' : ' is-speaker'), word.e || '🔊',
    () => say(word.w), `Play the word ${word.w}`);
  stage.append(prompt);

  const slots = document.createElement('div');
  slots.className = 'slots';
  const boxes = target.map(() => {
    const s = document.createElement('span');
    s.className = 'slot';
    slots.append(s);
    return s;
  });
  stage.append(slots);

  const tray = document.createElement('div');
  tray.className = 'tray';
  stage.append(tray);

  stage.append(button('btn btn-small', '▶ Sound it out',
    () => blend(word), `Sound out the word ${word.w}`));

  /* Track placed entries rather than bare strings: a word may repeat a chunk
     (b-a-n-a-n-a), so removing the one actually tapped has to stay
     unambiguous. */
  const placed = [];

  const clearAll = () => {
    placed.forEach((p) => { p.node.remove(); p.source.classList.remove('is-used'); });
    placed.length = 0;
    boxes.forEach((b) => b.classList.remove('is-full'));
  };

  const redraw = () => {
    boxes.forEach((b, i) => {
      b.innerHTML = '';
      b.classList.toggle('is-full', Boolean(placed[i]));
      if (placed[i]) b.append(placed[i].node);
    });
  };

  const check = () => {
    redraw();
    if (placed.length !== target.length) return;

    if (placed.every((p, i) => p.chunk === target[i])) {
      state.answered = true;
      slots.classList.add('is-right');
      award(true, word.w, sound);
      say(word.w, { rate: 0.8 });
      setTimeout(next, 1900);
    } else {
      slots.classList.add('is-wrong');
      award(false, word.w, sound);
      setTimeout(() => {
        slots.classList.remove('is-wrong');
        clearAll();
        redraw();
      }, 800);
    }
  };

  /* Two extra chunks, taken from elsewhere in the set so they look plausible
     without ever being a second right answer. */
  const spare = shuffle([...new Set(
    state.set.sounds.flatMap((s) => s.words).flatMap((w) => chunks(w).map(letters)),
  )].filter((c) => !target.includes(c))).slice(0, 2);

  shuffle([...target, ...spare]).forEach((c) => {
    const source = button('chunk chunk-tray', c, () => {
      if (state.answered || placed.length >= target.length) return;

      const node = button('chunk chunk-set', c, (ev) => {
        ev.stopPropagation();
        if (state.answered) return;
        const at = placed.findIndex((p) => p.node === node);
        if (at > -1) placed.splice(at, 1);
        source.classList.remove('is-used');
        redraw();
      }, `Take ${c} back`);

      source.classList.add('is-used');
      placed.push({ chunk: c, node, source });
      check();
    }, `Add ${c}`);

    tray.append(source);
  });

  setTimeout(() => say(word.w), 400);
}

/* ==================== activity: odd one out ==================== */

function renderOdd(item, stage) {
  const words = shuffle([...item.same, item.odd]);

  const head = document.createElement('p');
  head.className = 'odd-head';
  head.innerHTML = `Three of these have the sound <b>${item.sound.label}</b>.`;
  stage.append(head);

  const grid = document.createElement('div');
  grid.className = 'options is-text';
  const tiles = [];

  const replay = button('btn btn-small', '🔊 Hear them again',
    () => playAll(), 'Play all four words again');

  words.forEach((w) => {
    const b = document.createElement('button');
    b.className = 'option is-text';
    b.textContent = w.w;
    b.setAttribute('aria-label', w.w);
    b.addEventListener('click', () => {
      if (state.answered) return;

      if (w === item.odd) {
        state.answered = true;
        b.classList.add('is-right');
        tiles.forEach((t) => { t.disabled = true; });
        award(true, w.w, item.sound);
        say(w.w);
        setTimeout(next, 1700);
      } else {
        b.classList.add('is-wrong');
        award(false, w.w, item.sound);
        say(w.w, { rate: 0.75 });
        setTimeout(() => b.classList.remove('is-wrong'), 700);
      }
    });
    tiles.push(b);
    grid.append(b);
  });

  const playAll = () => sayEach(words.map((w) => w.w), {
    rate: 0.78,
    gap: 380,
    onEach: (i) => tiles.forEach((t, n) => t.classList.toggle('is-saying', n === i)),
    onEnd: () => tiles.forEach((t) => t.classList.remove('is-saying')),
  });

  stage.append(grid, replay);
  setTimeout(playAll, 400);
}

/* ==================== activity: read it out loud ==================== */

function renderRead(item, stage) {
  const plain = item.t.replace(/\*/g, '');

  const card = document.createElement('div');
  card.className = 'sentence';
  card.innerHTML = item.t.replace(/\*([^*]+)\*/g, '<b>$1</b>');
  stage.append(card);

  const zh = document.createElement('p');
  zh.className = 'sentence-zh zh';
  zh.textContent = item.zh;
  stage.append(zh);

  const row = document.createElement('div');
  row.className = 'btn-row';
  row.append(
    button('btn', '🔊 Listen', () => say(plain, { rate: 0.85 }), 'Listen to the sentence'),
    button('btn', '🐢 Slowly', () => say(plain, { rate: 0.55 }), 'Listen to the sentence slowly'),
  );
  stage.append(row);

  stage.append(button('btn btn-primary btn-next',
    state.index === state.queue.length - 1 ? 'Done ✓' : 'I read it →', next));
}

/* ==================== shared option rendering ==================== */

function buildOptions(options, isCorrect, render, spokenAnswer, onCorrect) {
  const wrap = document.createElement('div');
  wrap.className = 'options' + (render.text ? ' is-text' : '');

  options.forEach((opt) => {
    const b = document.createElement('button');
    b.className = 'option' + (render.text ? ' is-text' : '');
    b.textContent = render.label(opt);
    b.setAttribute('aria-label', render.aria(opt));

    b.addEventListener('click', () => {
      if (state.answered) return;

      if (isCorrect(opt)) {
        state.answered = true;
        state.attempts++;
        if (!state.missed) state.firstTry++;
        b.classList.add('is-right');
        wrap.querySelectorAll('.option').forEach((o) => { o.disabled = true; });
        dingRight();
        setFeedback(pick(PRAISE), 'is-good');
        onCorrect?.();
        say(spokenAnswer);
        setTimeout(next, 1700);
      } else {
        state.attempts++;
        state.missed = true;
        b.classList.add('is-wrong');
        b.disabled = true;
        dingWrong();
        setFeedback(pick(ENCOURAGE), 'is-oops');
        setTimeout(() => b.classList.remove('is-wrong'), 700);
      }
    });

    wrap.append(b);
  });

  return wrap;
}

/* ==================== scoring and flow ==================== */

/* Used by the activities that do their own option handling. */
function award(correct, label, sound) {
  state.attempts++;
  if (correct) {
    if (!state.missed) state.firstTry++;
    record(label, sound, state.attempts);
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
  el('progressFill').style.width = '100%';
  el('barTitle').textContent = 'Sound Lab';

  if (state.activity.scored === false) {
    el('doneEmoji').textContent = '👏';
    el('doneTitle').textContent = 'Nice work!';
    el('doneStars').textContent = '';
    el('doneScore').textContent = state.activity.id === 'cards'
      ? `You met all ${total} sounds in ${state.set.name}.`
      : `You read ${total} sentences out loud.`;
  } else {
    const stars = state.firstTry >= total * 0.9 ? 3
                : state.firstTry >= total * 0.7 ? 2
                : 1;
    el('doneEmoji').textContent = stars === 3 ? '🏆' : stars === 2 ? '🎉' : '👍';
    el('doneTitle').textContent = stars === 3 ? 'Amazing!' : stars === 2 ? 'Well done!' : 'Good try!';
    el('doneStars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    el('doneScore').textContent = `${state.firstTry} of ${total} right the first time`;
  }

  showScreen('screen-done');
  fanfare();
  say(state.activity.scored === false ? 'Nice work!'
    : state.firstTry >= total * 0.9 ? 'Amazing! Well done!'
    : state.firstTry >= total * 0.7 ? 'Well done!'
    : 'Good try! Go again.', { rate: 0.95 });
}

/* ==================== chrome ==================== */

el('backBtn').addEventListener('click', () => {
  stopSpeaking();
  const current = document.querySelector('.screen.is-active').id;
  if (current === 'screen-activity') {
    el('barTitle').textContent = 'Sound Lab';
    showScreen('screen-set');
  } else {
    el('barTitle').textContent = state.set.name;
    showScreen('screen-activity');
  }
});

el('soundBtn').addEventListener('click', () => {
  state.sound = !state.sound;
  const b = el('soundBtn');
  b.textContent = state.sound ? '🔊' : '🔇';
  b.setAttribute('aria-pressed', String(state.sound));
  b.setAttribute('aria-label', state.sound ? 'Turn sound off' : 'Turn sound on');
  if (!state.sound) stopSpeaking();
});

function applyZh() {
  document.body.classList.toggle('show-zh', state.zh);
  const b = el('zhBtn');
  b.setAttribute('aria-pressed', String(state.zh));
  b.setAttribute('aria-label', state.zh ? 'Hide Chinese' : 'Show Chinese');
}

el('zhBtn').addEventListener('click', () => {
  state.zh = !state.zh;
  try { localStorage.setItem('phonics.zh', state.zh ? '1' : '0'); } catch { /* private mode */ }
  applyZh();
});

try { state.zh = localStorage.getItem('phonics.zh') === '1'; } catch { /* private mode */ }
applyZh();

/* ==================== teacher panel ==================== */

function renderTeacher() {
  const total = log.length;
  const clean = log.filter((e) => e.attempts === 1).length;

  el('teacherStats').innerHTML = total
    ? `<span class="big">${Math.round((clean / total) * 100)}%</span> first-try correct
       &nbsp;·&nbsp; ${clean} of ${total} answers`
    : 'Nothing yet.';

  /* Roll repeated misses together. A sound missed across three games is the
     one worth going back to; a single word missed once is noise. */
  const tally = (keyOf) => {
    const m = new Map();
    log.filter((e) => e.attempts > 1).forEach((e) => {
      const k = keyOf(e);
      if (k) m.set(k, (m.get(k) || 0) + (e.attempts - 1));
    });
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  };

  const fill = (listId, emptyId, rows) => {
    const list = el(listId);
    list.innerHTML = '';
    el(emptyId).hidden = rows.length > 0;
    rows.forEach(([label, n]) => {
      const li = document.createElement('li');
      li.textContent = label;
      if (n > 1) li.insertAdjacentHTML('beforeend', ` <span>×${n}</span>`);
      list.append(li);
    });
  };

  fill('teacherSounds', 'teacherSoundsEmpty', tally((e) => e.sound));
  fill('teacherWeak', 'teacherWeakEmpty', tally((e) => e.label));

  const body = el('teacherLog').querySelector('tbody');
  body.innerHTML = '';
  if (!total) {
    body.innerHTML = '<tr><td class="empty" colspan="4">No answers recorded yet.</td></tr>';
  } else {
    log.slice().reverse().forEach((e) => {
      const tr = document.createElement('tr');
      const cells = [e.label, e.sound, e.activity].map((text) => {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
      });
      const tries = document.createElement('td');
      tries.textContent = e.attempts === 1 ? '✓' : `✗ ${e.attempts}`;
      tries.className = e.attempts === 1 ? 'tries-ok' : 'tries-miss';
      tr.append(...cells, tries);
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
  try { localStorage.setItem('phonics.voice', chosen.name); } catch { /* private mode */ }
});

el('voiceTest').addEventListener('click', () => {
  const wasMuted = !state.sound;
  state.sound = true;                       // a test button that respects mute is useless
  sayEach(['shhh', 'ship'], { rate: 0.7, gap: 380 });
  if (wasMuted) setTimeout(() => { state.sound = false; }, 3200);
});

el('voiceReset').addEventListener('click', () => {
  try { localStorage.removeItem('phonics.voice'); } catch { /* private mode */ }
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
  el('barTitle').textContent = state.set.name;
  showScreen('screen-activity');
});

renderSets();
