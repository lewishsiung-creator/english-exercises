/* Virtual Examiner — hear the question, do not read it.

   WHY IT EXISTS. Every question in this course sits on a page next to its own
   answer, its vocabulary and often a model. That is right for teaching and
   wrong for rehearsal: in the exam nobody hands you the question in writing,
   and a candidate who has only ever met questions on paper is practising
   reading comprehension. This page asks a question out loud, shows nothing,
   starts a clock and records the answer.

   WHAT IT ASKS FROM. Every built lesson in course.js — 256 questions at the
   time of writing — harvested from their `qbank` and `question` blocks. There
   is no index file and no build step: the lessons for the chosen part are
   fetched on demand and evaluated, so the pool is whatever the lessons
   currently say and can never go stale. Picking a part fetches only that
   part's lessons, which is four files for Part 1 and eighteen for Part 3.

   Evaluating a content file is `new Function(text + '; return LESSON;')`.
   These are our own static files on our own origin, written by us, so this is
   loading our own data in the only form it exists in. It is not a general
   evaluator and nothing user-supplied ever reaches it.

   PART 2 IS DELIBERATELY DIFFERENT. Part 1 and Part 3 questions are spoken by
   the examiner, so this page speaks them and never shows them. Part 2 is not:
   the real test hands the candidate a printed card and a minute with a pencil.
   Hiding a Part 2 card would be a harder exercise and a less faithful one, so
   the card is shown, exactly as it is in the exam, and the minute runs.

   DUPLICATION, KNOWINGLY. The speech and recording code below is a trimmed
   copy of render.js's. Two pages is not yet a reason to extract a shared file
   and re-wire twenty-eight lesson shells; a third page would be.
*/

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* Returns a fragment, not an element. render.js's version of this hands back
   `firstElementChild`, which silently drops everything after the first
   top-level node — fine there, because every block builder returns one
   element, and a trap here, where the page is built in one go. */
function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content;
}

function face(sec) {
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
}

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`ielts.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`ielts.${k}`, v); } catch { /* private mode */ } },
};

// ---------------------------------------------------------------- the page

const doc = $('#doc');

doc.appendChild(el(`
  <header class="cover" id="top">
    <p class="kicker"><a class="kicker-up" href="../">IELTS Speaking 雅思口說</a>
      <span class="kicker-sep" aria-hidden="true">·</span> Practice 練習</p>
    <h1><span class="en">Virtual Examiner</span>
      <span class="zh" style="display:block">模擬考官</span></h1>
    <div class="pair cover-intro">
      <p class="en">The question is spoken once and never shown. That is the only
        difference between this page and the rest of the course, and it is the
        difference between reading a question and sitting an exam.</p>
      <p class="zh" style="display:block">題目只會被唸出來，不會顯示。這是本頁和課程其他部分唯一的差別——也正是「讀題目」和「真的在考試」之間的差別。</p>
    </div>
  </header>

  <section class="step" id="ex">
    <div class="ex-pick">
      <p class="label"><span class="en">Which part?</span><span class="zh">要練哪一部分？</span></p>
      <div class="ex-parts" id="parts"></div>
      <p class="ex-pool" id="pool"></p>
    </div>

    <div class="ex-stage" id="stage" hidden></div>
  </section>`));

// ---------------------------------------------------------------- the pool

/* One entry per distinct question. A question that appears in more than one
   lesson — the three Cities questions are also in Fifteen City Questions, and
   A.R.E.A.'s practice bank borrows from four topics — is kept once, with every
   lesson it came from, so the reveal can say where it lives. */
const pools = new Map();   // part id -> array of items

async function loadPart(partId) {
  if (pools.has(partId)) return pools.get(partId);

  const lessons = COURSE.lessons.filter((l) => l.built && l.part === partId);
  const loaded = await Promise.all(lessons.map(async (l) => {
    const src = await fetch(`../${l.id}/content.js`).then((r) => {
      if (!r.ok) throw new Error(`${l.id}: ${r.status}`);
      return r.text();
    });
    return { l, LESSON: new Function(`${src}; return LESSON;`)() };
  }));

  const byText = new Map();
  for (const { l, LESSON } of loaded) {
    for (const step of LESSON.steps) {
      for (const b of step.blocks) {
        if (b.t === 'qbank') b.items.forEach((q) => add(byText, q.en, { en: q.en, zh: q.zh, words: q.words }, l));
        else if (b.t === 'question') add(byText, b.en, { en: b.en, zh: b.zh }, l);
        else if (b.t === 'cue') add(byText, b.en, { cue: b, en: b.en, zh: b.zh }, l);
      }
    }
  }

  const pool = [...byText.values()];
  pools.set(partId, pool);
  return pool;
}

function add(map, key, item, lesson) {
  const found = map.get(key);
  if (found) {
    if (!found.from.some((f) => f.id === lesson.id)) found.from.push(lesson);
    return;
  }
  map.set(key, { ...item, from: [lesson] });
}

// ---------------------------------------------------------------- choosing

let part = null;
let asked = new Set();
let current = null;

const partBtns = COURSE.parts.map((p) => `
  <button class="chip ex-part" data-part="${text(p.id)}">
    <span class="n">${text(p.label)}</span>
    <span class="t">${text(p.en)}<em>${text(p.zh)}</em></span>
  </button>`).join('');

$('#parts').innerHTML = partBtns;

$('#parts').addEventListener('click', async (e) => {
  const btn = e.target.closest('.ex-part');
  if (!btn) return;

  $$('.ex-part').forEach((b) => b.classList.toggle('on', b === btn));
  part = COURSE.parts.find((p) => p.id === btn.dataset.part);
  asked = new Set();
  current = null;

  $('#pool').textContent = 'Loading the questions… 載入題目中…';
  $('#stage').hidden = true;

  try {
    const pool = await loadPart(part.id);
    $('#pool').innerHTML = `${pool.length} questions in the pool
      <em>題庫共 ${pool.length} 題</em>`;
    buildStage();
  } catch (err) {
    $('#pool').innerHTML = `Could not load the questions (${text(err.message)}).
      <em>題目載入失敗。</em>`;
  }
});

// ---------------------------------------------------------------- the stage

function buildStage() {
  const spoken = part.id !== 'part2';

  $('#stage').innerHTML = `
    <div class="ex-ask">
      <button class="chip ex-go" id="ask">${spoken
        ? 'Ask me a question<em>問我一題</em>'
        : 'Give me a card<em>給我一張卡片</em>'}</button>
      <button class="chip chip-quiet ex-again" id="again" hidden>🔊 Say it again<em>再說一次</em></button>
      <p class="ex-count" id="count"></p>
    </div>

    <p class="ex-status" id="status" role="status" aria-live="polite"></p>

    <div class="ex-card" id="card" hidden></div>

    <div class="ex-clock" id="clockWrap" hidden>
      ${part.clock.plan ? clockUnit('down', part.clock.plan, 'Plan', '計畫',
        `${face(part.clock.plan)} to prepare`, '準備時間') : ''}
      ${clockUnit('up', 0, 'Speak', '開口',
        `aim to land between ${face(part.clock.bandLow)} and ${face(part.clock.bandHigh)}`,
        `目標落在 ${face(part.clock.bandLow)} 到 ${face(part.clock.bandHigh)} 之間`,
        part.clock.bandLow, part.clock.bandHigh)}
    </div>

    <div class="rec" id="rec" hidden>
      <div class="rec-bar">
        <button class="chip rec-go" aria-pressed="false">
          <span class="go"><span class="rec-dot" aria-hidden="true"></span>Record<em>錄音</em></span>
          <span class="stop"><span class="rec-dot" aria-hidden="true"></span>Stop<em>停止</em></span>
        </button>
        <p class="rec-time" aria-hidden="true">0:00</p>
        <p class="rec-note">Nothing is saved — the take goes when you record
          again or reload. <em>不會儲存：重錄或重新整理後即消失。</em></p>
      </div>
      <p class="rec-msg" role="status" aria-live="polite" hidden></p>
      <div class="rec-out" hidden></div>
    </div>

    <div class="ex-after" id="after" hidden>
      <button class="chip chip-quiet" id="reveal">Show the question<em>顯示題目</em></button>
      <button class="chip" id="next">Next question<em>下一題</em></button>
    </div>

    <div class="ex-reveal" id="revealed" hidden></div>`;

  $('#stage').hidden = false;
  wireStage();
}

function clockUnit(mode, start, nameEn, nameZh, noteEn, noteZh, low = 0, high = 0) {
  return `
    <div class="clock-unit" data-mode="${mode}" data-start="${start}"
         data-sec="${start}" data-low="${low}" data-high="${high}">
      <p class="clock-name">${text(nameEn)}<em>${text(nameZh)}</em></p>
      <p class="clock-face">${face(start)}</p>
      <p class="clock-note">${text(noteEn)}<em>${text(noteZh)}</em></p>
      <div class="clock-btns">
        <button class="chip clock-go">
          <span class="go">Start<em>開始</em></span>
          <span class="stop">Stop<em>暫停</em></span>
        </button>
        <button class="chip clock-zero">Reset<em>重設</em></button>
      </div>
    </div>`;
}

function wireStage() {
  $('#ask').addEventListener('click', askOne);
  $('#again').addEventListener('click', () => { if (current) say(current.en); });
  $('#next').addEventListener('click', askOne);
  $('#reveal').addEventListener('click', showQuestion);

  $('#stage').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.closest('.clock-unit')) clockClick(btn);
    else if (btn.closest('.rec')) recClick($('#rec'), btn);
  });
}

// ---------------------------------------------------------------- asking

function askOne() {
  const pool = pools.get(part.id);
  let left = pool.filter((q) => !asked.has(q.en));
  if (!left.length) { asked = new Set(); left = pool; }

  current = left[Math.floor(Math.random() * left.length)];
  asked.add(current.en);

  $('#count').innerHTML = `${pool.length - asked.size} left
    <em>還有 ${pool.length - asked.size} 題</em>`;
  $('#ask').hidden = true;
  $('#after').hidden = false;
  $('#revealed').hidden = true;
  $('#revealed').innerHTML = '';
  $('#clockWrap').hidden = false;
  $('#rec').hidden = false;
  clearTake($('#rec'));
  $$('.clock-unit', $('#stage')).forEach(resetClock);

  if (current.cue) {
    // Part 2: the exam hands over a printed card, so this page does too.
    $('#again').hidden = true;
    $('#card').hidden = false;
    $('#card').innerHTML = cueCard(current.cue);
    $('#status').innerHTML = `Read the card. You have one minute to prepare.
      <em>閱讀卡片。你有一分鐘準備時間。</em>`;
    $('#reveal').hidden = true;
    return;
  }

  $('#card').hidden = true;
  $('#reveal').hidden = false;
  $('#again').hidden = false;
  $('#status').innerHTML = `Listen. <em>仔細聽。</em>`;
  say(current.en, () => {
    $('#status').innerHTML = `Answer now. <em>現在回答。</em>`;
  });
}

function cueCard(b) {
  return `
    <div class="cue-card">
      <p class="cue-kicker">Part 2<span>candidate task card 應試卡</span></p>
      <p class="cue-task"><span class="en">${text(b.en)}</span></p>
      <p class="cue-lead">You should say:<em>你應該談到：</em></p>
      <ul class="cue-bullets">
        ${b.bullets.map((p) => `<li><span class="en">${text(p.en)}</span></li>`).join('')}
      </ul>
      <p class="cue-close">${text(b.closeEn)}</p>
    </div>`;
}

function showQuestion() {
  if (!current) return;
  const from = current.from.map((l) => `<a href="../${text(l.id)}/">${text(l.en)}</a>`).join(' · ');
  $('#revealed').hidden = false;
  $('#revealed').innerHTML = `
    <p class="ex-q">${text(current.en)}</p>
    <p class="ex-q-zh">${text(current.zh || '')}</p>
    ${current.words ? `<ul class="q-words" style="display:flex">
      ${current.words.map((w) => `<li><span class="en">${text(w.en)}</span>
        <em>${text(w.zh)}</em></li>`).join('')}
    </ul>` : ''}
    <p class="ex-from">From <em>出自</em> ${from}</p>`;
}

// ---------------------------------------------------------------- clocks

const timers = new Map();

function tickClock(unit) {
  const down = unit.dataset.mode === 'down';
  let sec = Number(unit.dataset.sec);
  sec += down ? -1 : 1;

  if (down && sec <= 0) {
    sec = 0;
    stopClock(unit);
    unit.classList.add('up');
    $('#status').innerHTML = `Time. Start speaking. <em>時間到，開始說。</em>`;
  }
  if (!down) {
    unit.classList.toggle('in', sec >= Number(unit.dataset.low));
    unit.classList.toggle('over', sec >= Number(unit.dataset.high));
  }

  unit.dataset.sec = sec;
  $('.clock-face', unit).textContent = face(sec);
}

function stopClock(unit) {
  clearInterval(timers.get(unit));
  timers.delete(unit);
  unit.classList.remove('running');
}

function resetClock(unit) {
  stopClock(unit);
  unit.dataset.sec = unit.dataset.start;
  unit.classList.remove('up', 'in', 'over');
  $('.clock-face', unit).textContent = face(Number(unit.dataset.start));
}

function clockClick(btn) {
  const unit = btn.closest('.clock-unit');
  if (btn.classList.contains('clock-zero')) { resetClock(unit); return; }
  if (!btn.classList.contains('clock-go')) return;

  if (timers.has(unit)) { stopClock(unit); return; }
  if (unit.dataset.mode === 'down' && Number(unit.dataset.sec) === 0) resetClock(unit);

  unit.classList.add('running');
  timers.set(unit, setInterval(() => tickClock(unit), 1000));
}

// ---------------------------------------------------------------- speech

let voices = [];
let voice = null;

function loadVoices() {
  voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
  if (!voices.length) return;

  const saved = store.get('voice', '');
  voice = voices.find((v) => v.name === saved)
       || voices.find((v) => v.lang === 'en-GB' && /Serena|Daniel|Kate|Google UK/i.test(v.name))
       || voices.find((v) => v.lang === 'en-GB')
       || voices.find((v) => v.lang.startsWith('en'))
       || voices[0];

  $('#voicePick').innerHTML = voices.map((v) =>
    `<option value="${text(v.name)}"${v === voice ? ' selected' : ''}>${text(v.name)} · ${text(v.lang)}</option>`
  ).join('');
}

loadVoices();
speechSynthesis.onvoiceschanged = loadVoices;

/* Speaks, then calls back. If there is no speech on this device the question
   would be unanswerable, so the page says so and shows it instead — a silent
   examiner is worse than a visible question. */
function say(sentence, done) {
  if (!('speechSynthesis' in window)) {
    $('#status').innerHTML = `This browser cannot speak, so the question is shown
      instead. <em>此瀏覽器無法朗讀，因此直接顯示題目。</em>`;
    showQuestion();
    if (done) done();
    return;
  }

  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(sentence);
  if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = 'en-GB'; }
  u.rate = Number($('#rate').value);
  if (done) u.onend = done;
  // Chrome drops an utterance queued in the same tick as cancel().
  setTimeout(() => speechSynthesis.speak(u), 60);
}

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  store.set('voice', e.target.value);
  say('Let’s talk about where you live.');
});

$('#rate').value = store.get('rate', '0.95');
$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  say('Now, let’s move on to the next question.');
});

// ---------------------------------------------------------------- recording

const takes = new Map();

function recMsg(act, en, zh) {
  const p = $('.rec-msg', act);
  if (!en) { p.hidden = true; p.textContent = ''; return; }
  p.hidden = false;
  p.innerHTML = `${text(en)}<em>${text(zh)}</em>`;
}

function clearTake(act) {
  const t = takes.get(act);
  if (t && t.url) { URL.revokeObjectURL(t.url); t.url = null; }
  const out = $('.rec-out', act);
  out.hidden = true;
  out.innerHTML = '';
}

function showTake(act, blob) {
  clearTake(act);
  const url = URL.createObjectURL(blob);
  const t = takes.get(act) || {};
  t.url = url;
  takes.set(act, t);

  const out = $('.rec-out', act);
  out.hidden = false;
  out.innerHTML = `
    <audio class="rec-play" controls src="${url}"></audio>
    <button class="chip chip-quiet rec-clear">Delete<em>刪除</em></button>`;
}

function stopRec(act) {
  const t = takes.get(act);
  if (t && t.rec && t.rec.state === 'recording') t.rec.stop();
}

function recTick(act) {
  const t = takes.get(act);
  if (!t) return;
  t.sec += 1;
  $('.rec-time', act).textContent = face(t.sec);
}

async function startRec(act) {
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
    recMsg(act, 'This browser cannot record. Everything else still works.',
      '此瀏覽器無法錄音，其他功能不受影響。');
    return;
  }

  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch {
    recMsg(act, 'No microphone — the browser refused or there is none attached.',
      '沒有麥克風：瀏覽器拒絕存取，或裝置上沒有麥克風。');
    return;
  }

  recMsg(act, '');
  clearTake(act);

  const rec = new MediaRecorder(stream);
  const chunks = [];
  rec.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };

  rec.onstop = () => {
    stream.getTracks().forEach((track) => track.stop());
    const t = takes.get(act);
    if (t) { clearInterval(t.timer); t.rec = null; }
    act.classList.remove('on');
    $('.rec-go', act).setAttribute('aria-pressed', 'false');
    if (!chunks.length) {
      recMsg(act, 'That take was empty — nothing reached the microphone.',
        '這次錄音是空的：沒有聲音進到麥克風。');
      return;
    }
    showTake(act, new Blob(chunks, { type: rec.mimeType || 'audio/webm' }));
  };

  takes.set(act, {
    rec,
    url: (takes.get(act) || {}).url || null,
    sec: 0,
    timer: setInterval(() => recTick(act), 1000),
  });

  rec.start();
  act.classList.add('on');
  $('.rec-go', act).setAttribute('aria-pressed', 'true');
  $('.rec-time', act).textContent = '0:00';
}

function recClick(act, btn) {
  if (btn.classList.contains('rec-clear')) { clearTake(act); return; }
  if (!btn.classList.contains('rec-go')) return;

  const t = takes.get(act);
  if (t && t.rec && t.rec.state === 'recording') stopRec(act);
  else startRec(act);
}

window.addEventListener('pagehide', () => $$('.rec.on').forEach(stopRec));

// ---------------------------------------------------------------- panel

const panel = $('#panel');
const panelBtn = $('#panelToggle');

function setPanel(open) {
  panel.hidden = !open;
  panelBtn.setAttribute('aria-expanded', String(open));
}

panelBtn.addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  setPanel(false);
  speechSynthesis.cancel();
});
