/* Renders SPEECH (content.js) and wires up the practice.

   The page has one job — get an adult to say sixty-two English sentences out
   loud — and one switch that decides how:

   - 讀 Read. The English leads. Tap a line for the Chinese, 🔊 for a model
     reading, or ▶ to hear a whole section and shadow it.
   - 記 Recall. The Chinese leads and the English is held back behind a dashed
     rule, so the sentence has to be produced before it can be checked.

   Everything else follows the house rules for adult material: nothing is
   scored, nothing is saved except device settings (voice, speed, mode, and
   whether Chinese starts visible), and a reload is a clean lesson for the next
   student. The teacher panel is faint and opens over the speech rather than
   replacing it.
*/

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* For values going into a "…"-delimited attribute. The speech quotes itself in
   two places, so a stray double quote would otherwise end the attribute early. */
function attr(s) {
  return text(s).replace(/"/g, '&quot;');
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function speakBtn(sentence, cls = 'say') {
  return `<button class="${cls}" data-say="${attr(sentence)}" title="Listen"
    aria-label="Listen">🔊</button>`;
}

// ---------------------------------------------------------------- blocks

/* One sentence of the speech: the unit the learner reads aloud. Both languages
   are always in the DOM — which of the two is showing is a CSS question, so
   switching mode never rebuilds anything or loses your place. */
function line(item, n) {
  return `
    <li class="line${item.k ? ' key' : ''}" data-en="${attr(item.en)}">
      <span class="line-n">${n}</span>
      <div class="line-body">
        <p class="en">${text(item.en)}</p>
        <p class="zh">${text(item.zh)}</p>
      </div>
      <div class="line-btns">
        ${speakBtn(item.en)}
        <button class="peek" title="顯示另一種語言">
          <span class="lb-read">中</span><span class="lb-recall">EN</span>
        </button>
      </div>
    </li>`;
}

const BLOCKS = {
  lines: (b, ctx) => `
    <ol class="lines">
      ${b.items.map((i) => line(i, ctx.n++)).join('')}
    </ol>`,

  subhead: (b) => `
    <h3 class="subhead">
      <span class="en">${text(b.en)}</span>
      ${speakBtn(b.en, 'say say-quiet')}
      <span class="zh">${text(b.zh)}</span>
    </h3>`,

  /* Words that are hard to say, with a plain respelling rather than IPA —
     these are read off a shared screen mid-sentence, not studied. The Chinese
     tip is scaffolding, so it stays visible in both modes. */
  say: (b) => `
    <div class="watch">
      <h4 class="label"><span class="en">${text(b.en)}</span>
        <span class="zh">${text(b.zh)}</span></h4>
      <ul class="words">
        ${b.items.map((i) => `
          <li class="word">
            <p class="word-w">${text(i.w)}${speakBtn(i.w, 'say say-quiet')}</p>
            <p class="word-say">${text(i.say)}</p>
            <p class="word-zh">${text(i.zh)}</p>
          </li>`).join('')}
      </ul>
    </div>`,
};

// ---------------------------------------------------------------- build

function buildCover() {
  const i = SPEECH.intro;
  return `
    <header class="cover" id="top">
      <p class="kicker">${text(SPEECH.kicker)}</p>
      <h1><span class="en">${text(SPEECH.title)}</span>
        <span class="zh">${text(SPEECH.titleZh)}</span></h1>
      <div class="cover-intro">
        <p class="en">${text(i.en)}</p>
        <p class="zh">${text(i.zh)}</p>
      </div>
      <div class="goals">
        <p class="en">${text(i.goalsEn)}</p>
        <p class="zh">${text(i.goalsZh)}</p>
        <ul>
          ${i.goals.map((g) => `
            <li><span class="en">${text(g.en)}</span>
              <span class="zh">${text(g.zh)}</span></li>`).join('')}
        </ul>
      </div>
      <p class="source">${text(SPEECH.source.en)}
        <span class="zh">${text(SPEECH.source.zh)}</span></p>
    </header>`;
}

function buildSection(s) {
  // Line numbers run from 1 within each section, so "line 4" is unambiguous
  // once the teacher has said which section you are in.
  const ctx = { n: 1 };

  const blocks = s.blocks.map((b) => {
    const fn = BLOCKS[b.t];
    if (!fn) throw new Error(`Unknown block type "${b.t}" in section ${s.id}`);
    return fn(b, ctx);
  }).join('');

  return `
    <section class="section" id="${s.id}" aria-labelledby="h-${s.id}">
      <h2 class="section-head" id="h-${s.id}">
        <span class="n">${text(s.n)}</span>
        <span class="titles"><span class="en">${text(s.en)}</span>
          <span class="zh">${text(s.zh)}</span></span>
      </h2>
      <button class="play">
        <span class="lb-play">▶ Read this section <em>整段朗讀</em></span>
        <span class="lb-stop">■ Stop <em>停止</em></span>
      </button>
      ${blocks}
    </section>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="Sections of the speech">
      <p class="toc-head">Speech 講稿</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="en">How to use this</span>
          <span class="zh">使用方式</span></span></a></li>
        ${SPEECH.sections.map((s) => `
          <li><a href="#${s.id}" data-target="${s.id}"><span class="n">${text(s.n)}</span>
            <span class="t"><span class="en">${text(s.en)}</span>
            <span class="zh">${text(s.zh)}</span></span></a></li>`).join('')}
      </ul>
    </nav>`;
}

document.title = `${SPEECH.title} · ${SPEECH.titleZh}`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
SPEECH.sections.forEach((s) => doc.appendChild(el(buildSection(s))));

// ---------------------------------------------------------------- settings

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`cs.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`cs.${k}`, v); } catch { /* private mode */ } },
};

// ---------------------------------------------------------------- mode

const modeRead = $('#modeRead');
const modeRecall = $('#modeRecall');

function setMode(recall) {
  document.body.classList.toggle('mode-recall', recall);
  modeRead.setAttribute('aria-pressed', String(!recall));
  modeRecall.setAttribute('aria-pressed', String(recall));
  store.set('mode', recall ? 'recall' : 'read');

  // A mode change is a fresh start: close every line that was opened under the
  // old rules, or switching to Recall would leave the English on screen.
  $$('.line.open').forEach((l) => l.classList.remove('open'));
  stopPlay();
}

modeRead.addEventListener('click', () => setMode(false));
modeRecall.addEventListener('click', () => setMode(true));

const zhToggle = $('#zhToggle');

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
  $('#zhAll').checked = on;
  store.set('zh', on ? '1' : '0');
}

zhToggle.addEventListener('click', () => setAllZh(!document.body.classList.contains('zh-all')));

// ---------------------------------------------------------------- clicks

/* One handler for the whole document — every interactive part of the page is a
   button or a line inside it. */
doc.addEventListener('click', (e) => {
  const t = e.target;

  const say = t.closest('.say');
  if (say) { e.stopPropagation(); speak(say.dataset.say); return; }

  const play = t.closest('.play');
  if (play) {
    if (play.classList.contains('on')) stopPlay(); else playSection(play);
    return;
  }

  // The peek button and the line body do the same thing: show whichever
  // language this mode is holding back.
  const row = t.closest('.line');
  if (row && (t.closest('.peek') || !t.closest('button'))) {
    row.classList.toggle('open');
  }
});

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
    `<option value="${attr(v.name)}"${v === voice ? ' selected' : ''}>${text(v.name)} · ${text(v.lang)}</option>`
  ).join('');
}

loadVoices();
speechSynthesis.onvoiceschanged = loadVoices;

function utter(sentence) {
  const u = new SpeechSynthesisUtterance(sentence);
  if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = 'en-US'; }
  u.rate = Number($('#rate').value);
  return u;
}

function speak(sentence) {
  if (!('speechSynthesis' in window)) return;
  stopPlay();
  speechSynthesis.speak(utter(sentence));
}

/* Reading a section through. Each sentence is highlighted as it is spoken and
   scrolled to the middle of the screen, so the learner can shadow it; in 記
   Recall the line also opens as it is reached, which turns the play-through
   into the answer key. */
let runToken = 0;
let playBtn = null;

function stopPlay() {
  runToken++;
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  if (playBtn) { playBtn.classList.remove('on'); playBtn = null; }
  $$('.line.now').forEach((l) => l.classList.remove('now'));
}

function playSection(btn) {
  if (!('speechSynthesis' in window)) return;
  stopPlay();

  const lines = $$('.line', btn.closest('.section'));
  const token = ++runToken;
  playBtn = btn;
  btn.classList.add('on');

  let i = 0;
  const next = () => {
    if (token !== runToken) return;
    if (i >= lines.length) { stopPlay(); return; }

    const row = lines[i++];
    $$('.line.now').forEach((l) => l.classList.remove('now'));
    row.classList.add('now');
    if (document.body.classList.contains('mode-recall')) row.classList.add('open');
    row.scrollIntoView({ block: 'center', behavior: 'smooth' });

    const u = utter(row.dataset.en);

    let moved = false;
    let guard;
    // cancel() fires one of these on the utterance it interrupted, so both
    // paths have to check the token before queueing the next sentence.
    const on = () => {
      if (moved || token !== runToken) return;
      moved = true;
      clearTimeout(guard);
      setTimeout(next, 550);
    };
    u.onend = on;
    u.onerror = on;

    /* A machine with no audio output — and Chrome, for anything long — can
       accept an utterance and then never report that it finished, which would
       strand the run on one sentence with no sign of why. Give the line a
       generous estimate of its own length and move on regardless. */
    const words = row.dataset.en.split(/\s+/).length;
    guard = setTimeout(on, Math.min(25000, 3000 + (words / (2.6 * u.rate)) * 1000));

    speechSynthesis.speak(u);
  };

  next();
}

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  store.set('voice', e.target.value);
  speak('Build dreams and bring greater honor to The Port.');
});

const rate = $('#rate');
rate.value = store.get('rate', '0.9');
rate.addEventListener('change', () => {
  store.set('rate', rate.value);
  speak('As I stand here today, I feel thankful, but I also feel a strong responsibility.');
});

// ---------------------------------------------------------------- timer

/* It is a five-minute speech, so the clock is part of the practice rather than
   a score: it counts up, and turns amber once the five minutes are gone. */
const FIVE = 5 * 60 * 1000;

const clockBtn = $('#clock');
const panelClock = $('#panelClock');
let startedAt = 0;
let banked = 0;
let ticking = null;

function elapsed() {
  return banked + (ticking ? Date.now() - startedAt : 0);
}

function mmss(ms) {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

function paintClock() {
  const ms = elapsed();
  const over = ms >= FIVE;
  clockBtn.textContent = ms ? mmss(ms) : '⏱';
  clockBtn.classList.toggle('over', over);
  clockBtn.classList.toggle('running', !!ticking);
  panelClock.textContent = mmss(ms);
  panelClock.classList.toggle('over', over);
}

clockBtn.addEventListener('click', () => {
  if (ticking) {
    banked = elapsed();
    clearInterval(ticking);
    ticking = null;
  } else {
    startedAt = Date.now();
    ticking = setInterval(paintClock, 250);
  }
  paintClock();
});

$('#clockReset').addEventListener('click', () => {
  clearInterval(ticking);
  ticking = null;
  banked = 0;
  paintClock();
});

paintClock();

// ---------------------------------------------------------------- panel

const panel = $('#panel');
const panelBtn = $('#panelToggle');

function setPanel(open) {
  panel.hidden = !open;
  panelBtn.setAttribute('aria-expanded', String(open));
}

panelBtn.addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));

$('#zhAll').addEventListener('change', (e) => setAllZh(e.target.checked));

// Opens whichever language the current mode is hiding, everywhere at once.
$('#showAll').addEventListener('click', () => {
  $$('.line').forEach((l) => l.classList.add('open'));
  setPanel(false);
});

// A reload is the reset: nothing is stored except the device settings.
$('#reset').addEventListener('click', () => location.reload());

// ---------------------------------------------------------------- chrome

const links = new Map($$('.toc a').map((a) => [a.dataset.target, a]));

const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((a) => a.classList.remove('here'));
    const a = links.get(e.target.id);
    if (a) { a.classList.add('here'); a.scrollIntoView({ block: 'nearest' }); }
  });
}, { rootMargin: '-72px 0px -70% 0px' });

[$('#top'), ...$$('.section')].forEach((s) => spy.observe(s));

const navToggle = $('#navToggle');
navToggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

function closeNav() {
  document.body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

$('#nav').addEventListener('click', (e) => { if (e.target.closest('a')) closeNav(); });
$('.nav-scrim').addEventListener('click', closeNav);

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeNav();
  setPanel(false);
  stopPlay();
});

// ---------------------------------------------------------------- start

// Applied last, once everything they touch exists: the saved mode calls
// stopPlay(), which lives further down the file than the mode switch does.
setAllZh(store.get('zh', '0') === '1');
setMode(store.get('mode', 'read') === 'recall');
