/* Renders LESSONS (content.js) around an embedded YouTube player.

   The page is teacher-led, the same as the other adult pages here: English
   leads, Traditional Chinese waits behind a 中 chip, nothing is scored and
   nothing is saved between lessons. What is different is that a clip is
   running, so this renderer is mostly about one thing — keeping the words on
   screen and the words in the air pointing at each other.

   Everything below measures from `lines`. A line starts at its own `t` and
   ends where the next one starts, and that single fact drives the highlight,
   the click-to-jump, the loop and the shadowing. It is why the transcript has
   to be cut into short lines: the unit of the transcript is also the unit of
   practice, and a line too long to say back in one breath is a line the page
   cannot drill.

   The only state kept in localStorage is the Chinese setting. Which line you
   were on, what you revealed and what you looped are all deliberately lost on
   reload — a reload is the start of a lesson, not the middle of one.
*/

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

/* 0:07, 1:42, 12:05 — the form YouTube itself uses, so a timestamp read here
   can be typed into YouTube and land in the same place. */
function clock(sec) {
  const s = Math.max(0, Math.floor(sec));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

/* An English line with its Chinese held behind it — the same chip as the
   notebooks. `zh` is optional throughout: a line that needs no gloss simply
   does not get one, rather than getting an empty reveal. */
function pair(en, zh, cls = '') {
  if (!zh) return `<div class="pair ${cls}"><p class="en">${text(en)}</p></div>`;
  return `
    <div class="pair ${cls}" data-zh>
      <p class="en">${text(en)}<button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(zh)}</p>
    </div>`;
}

// ------------------------------------------------------------------ state

let player = null;          // the YouTube player, once its API has loaded
let ready = false;
let lesson = null;          // the lesson on screen
let lineEls = [];           // one <li> per transcript line, in order
let nowIdx = -1;            // the line being spoken
let loopIdx = null;         // the line on repeat, or null
let shadowOn = false;       // pause at the end of every line
let follow = true;          // keep the spoken line in view
let started = false;        // has the clip ever played? see tick()
let waitIdx = null;         // shadowing has stopped ON this line, waiting to be said back
let ticker = null;

/* Where a line ends: the next line's start, or the lesson's own end, or the
   end of the video. Half a second is trimmed off so a loop does not clip the
   first sound of the line that follows. */
function lineStart(i) { return lesson.lines[i].t; }

function lineEnd(i) {
  if (i + 1 < lesson.lines.length) return lesson.lines[i + 1].t;
  if (lesson.end) return lesson.end;
  const d = player && player.getDuration ? player.getDuration() : 0;
  return d || lesson.lines[i].t + 6;
}

function indexAt(t) {
  let hit = -1;
  for (let i = 0; i < lesson.lines.length; i++) {
    if (lesson.lines[i].t <= t + 0.05) hit = i; else break;
  }
  return hit;
}

// ----------------------------------------------------------------- player

function idFrom(raw) {
  const s = String(raw || '').trim();
  const m = s.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/) || s.match(/^([\w-]{11})$/);
  return m ? m[1] : null;
}

window.onYouTubeIframeAPIReady = () => {
  if (!lesson) return;
  player = new YT.Player('player', {
    videoId: lesson.videoId,
    host: 'https://www.youtube-nocookie.com',
    playerVars: {
      rel: 0, modestbranding: 1, playsinline: 1, cc_load_policy: 0,
      start: Math.floor(lesson.start || 0),
    },
    events: {
      onReady: () => { ready = true; document.body.classList.add('player-up'); },
      onStateChange: (e) => {
        const playing = e.data === YT.PlayerState.PLAYING;
        document.body.classList.toggle('playing', playing);
        if (playing) started = true;
      },
      /* An uploader can forbid embedding, and such a video plays perfectly on
         YouTube while showing nothing here. Say so plainly rather than leaving
         a black rectangle. */
      onError: () => $('#deck').prepend(el(`
        <p class="deck-warn">This clip will not play inside another page — the
          uploader has turned embedding off.
          <a href="https://youtu.be/${text(lesson.videoId)}" target="_blank"
             rel="noopener">Open it on YouTube ↗</a>
          <em>這段影片不允許在其他網頁中播放，請在 YouTube 開啟。</em></p>`)),
    },
  });
};

function loadApi() {
  if (window.YT && window.YT.Player) { window.onYouTubeIframeAPIReady(); return; }
  const s = document.createElement('script');
  s.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(s);
}

/* Moves the highlight, and with it every measurement the ticker makes. Kept
   separate from tick() because a jump has to resync the current line at once:
   the ticker asks "how far past the end of the current line are we?", and after
   a seek the answer is nonsense until this has run. */
function syncNow(i) {
  if (i === nowIdx) return;
  if (nowIdx >= 0 && lineEls[nowIdx]) lineEls[nowIdx].classList.remove('now', 'waiting');
  nowIdx = i;
  if (i >= 0 && lineEls[i]) {
    lineEls[i].classList.add('now');
    /* Only once the clip is running. On load the first line is already "now"
       at 0:00, and following it then would scroll the lesson's own title off
       the screen before the student has read it. */
    if (follow && started) lineEls[i].scrollIntoView({ block: 'center' });
  }
}

/* Every jump goes through here — a timestamp, a phrase card, a loop, an arrow
   key. Two things have to happen besides the seek itself: the highlight moves
   to where we have landed, and any shadowing hold is released, because
   deliberately going somewhere is not the same as being held back. */
function seek(sec, play = true) {
  if (!ready) return;
  if (waitIdx != null && lineEls[waitIdx]) lineEls[waitIdx].classList.remove('waiting');
  waitIdx = null;
  player.seekTo(sec, true);
  syncNow(indexAt(sec));
  if (play) player.playVideo();
}

// ------------------------------------------------------------------ ticker

/* Everything time-driven happens here, eight times a second. That is often
   enough that a line lights up when it is spoken and slow enough that nothing
   thrashes. The order matters: the loop is checked before the highlight, so a
   looping line never flickers into the next one. */
function tick() {
  if (!ready || !lesson) return;

  /* Held for the student to repeat the line. Nothing moves — not the
     highlight, not the clock — until they press play or jump somewhere. */
  if (waitIdx != null) return;

  const t = player.getCurrentTime();

  if (loopIdx != null) {
    if (t >= lineEnd(loopIdx) - 0.05 || t < lineStart(loopIdx) - 0.4) seek(lineStart(loopIdx));
    return;
  }

  if (lesson.end && t >= lesson.end - 0.02) player.pauseVideo();

  const i = indexAt(t);

  /* Shadowing stops when the playhead crosses OUT of the line being practised,
     and it stops on the line just finished rather than the one we have wandered
     into. Asking "has the clock passed the end of line n?" instead would fire
     on any jump forward, holding up a line the student never heard. */
  if (shadowOn && nowIdx >= 0 && i > nowIdx) {
    player.pauseVideo();
    waitIdx = nowIdx;
    lineEls[nowIdx].classList.add('waiting');
    return;
  }

  syncNow(i);
}

// ------------------------------------------------------------------ blocks

function transcript() {
  const items = lesson.lines.map((ln, i) => `
    <li class="line" data-i="${i}">
      <button class="go" data-seek="${ln.t}" title="Play from here 從這裡播放"
        aria-label="Play from ${clock(ln.t)}">${clock(ln.t)}</button>
      <div class="line-body">
        <p class="en">${text(ln.en)}${ln.zh ? '<button class="zh-chip" title="顯示中文">中</button>' : ''}</p>
        ${ln.zh ? `<p class="zh">${text(ln.zh)}</p>` : ''}
      </div>
      <button class="loop" data-loop="${i}" title="Loop this line 重複這句"
        aria-pressed="false" aria-label="Loop this line">🔁</button>
    </li>`).join('');
  return `<ol class="lines" id="lines">${items}</ol>`;
}

function words() {
  if (!lesson.words || !lesson.words.length) return '';
  const cards = lesson.words.map((w) => `
    <li class="card" data-open="0">
      <button class="card-face">
        <span class="card-en">${text(w.en)}</span>
        ${w.t != null ? `<span class="card-t">${clock(w.t)}</span>` : ''}
      </button>
      <div class="card-back">
        <p class="card-zh">${text(w.zh)}</p>
        ${w.noteEn ? `<p class="card-note">${text(w.noteEn)}<em>${text(w.noteZh)}</em></p>` : ''}
        ${w.t != null ? `<button class="card-go" data-seek="${w.t}">▶ Hear it said <em>聽原句</em></button>` : ''}
      </div>
    </li>`).join('');
  return `
    <section class="block">
      <h2>Phrases worth keeping <span>值得收藏的說法</span></h2>
      <p class="hint">Tap a card for the Chinese and the moment it is said.
        <em>點一下字卡看中文，以及影片中說到它的地方。</em></p>
      <ul class="cards">${cards}</ul>
    </section>`;
}

function questions() {
  if (!lesson.questions || !lesson.questions.length) return '';
  const rows = lesson.questions.map((q, i) => `
    <li class="q" data-open="0">
      <p class="q-en"><span class="q-n">${i + 1}</span>${text(q.en)}
        ${q.zh ? '<button class="zh-chip" title="顯示中文">中</button>' : ''}</p>
      ${q.zh ? `<p class="zh">${text(q.zh)}</p>` : ''}
      <div class="q-foot">
        <button class="q-show">Show the answer <em>顯示答案</em></button>
        ${q.t != null ? `<button class="q-go" data-seek="${q.t}">▶ ${clock(q.t)}</button>` : ''}
      </div>
      <div class="q-a">${pair(q.answerEn, q.answerZh)}</div>
    </li>`).join('');
  return `
    <section class="block">
      <h2>Did you catch it? <span>聽懂了嗎？</span></h2>
      <p class="hint">Answer out loud first, then check.
        <em>先說出答案，再對照。</em></p>
      <ol class="qs">${rows}</ol>
    </section>`;
}

function tasks() {
  if (!lesson.tasks || !lesson.tasks.length) return '';
  const rows = lesson.tasks.map((t) => `<li>${pair(t.en, t.zh)}</li>`).join('');
  return `
    <section class="block block-task">
      <h2>Now you talk <span>換你說</span></h2>
      <p class="hint">In your own words — not the speaker's.
        <em>用你自己的話說，不要照著講者的句子。</em></p>
      <ul class="tasks">${rows}</ul>
    </section>`;
}

function head() {
  const span = lesson.end
    ? `${clock(lesson.start || 0)} – ${clock(lesson.end)}`
    : `from ${clock(lesson.start || 0)}`;
  return `
    <header class="lesson-head">
      <p class="tag">${text(lesson.levelEn)}<em>${text(lesson.levelZh)}</em></p>
      <h1>${text(lesson.titleEn)}<span>${text(lesson.titleZh)}</span></h1>
      <p class="src">${text(lesson.sourceEn)} · ${span}
        · <a href="https://youtu.be/${text(lesson.videoId)}" target="_blank" rel="noopener">Watch on YouTube ↗</a></p>
      ${lesson.aboutEn ? `<div class="about">${pair(lesson.aboutEn, lesson.aboutZh)}</div>` : ''}
      ${lesson.watchForEn ? `
        <div class="watch-for">
          <p class="wf-lab">Listen for <em>聽的重點</em></p>
          ${pair(lesson.watchForEn, lesson.watchForZh)}
        </div>` : ''}
    </header>`;
}

/* The strip under the player. It holds the controls that act on the clip as a
   whole; anything that acts on ONE line lives on that line instead. */
function deck() {
  return `
    <div class="deck-row">
      <button class="d-btn d-play" id="playBtn" aria-label="Play or pause">
        <span class="ico-play">▶</span><span class="ico-pause">❚❚</span>
      </button>
      <button class="d-btn" id="backBtn" title="Previous line 上一句" aria-label="Previous line">↺ line</button>
      <button class="d-btn" id="againBtn" title="Say this line again 再聽一次" aria-label="Repeat this line">Again 再一次</button>

      <label class="d-sel">
        <span>Speed <em>速度</em></span>
        <select id="rate">
          <option value="0.5">0.5×</option>
          <option value="0.75">0.75×</option>
          <option value="1" selected>1×</option>
          <option value="1.25">1.25×</option>
        </select>
      </label>

      <button class="d-btn d-toggle" id="blankBtn" aria-pressed="false"
        title="Hide the words 遮住文字">🙈 Hide words <em>遮字</em></button>

      <button class="d-btn d-toggle" id="shadowBtn" aria-pressed="false"
        title="Pause after every line 每句停一下">🗣 Shadow <em>跟讀</em></button>

      <button class="d-btn d-quiet" id="loopOff" hidden>Stop looping <em>停止重複</em></button>
    </div>`;
}

// ------------------------------------------------------------------ mount

function nav() {
  if (LESSONS.length < 2) return '';
  const items = LESSONS.map((l) => `
    <li><a href="#${text(l.id)}" data-go="${text(l.id)}">
      <span class="nav-t">${text(l.titleEn)}</span>
      <span class="nav-zh">${text(l.titleZh)}</span>
      <span class="nav-len">${l.end ? clock(l.end - (l.start || 0)) : ''}</span>
    </a></li>`).join('');
  return `<nav class="nav"><p class="nav-h">Clips <em>影片</em></p><ol>${items}</ol></nav>`;
}

function show(id) {
  const found = LESSONS.find((l) => l.id === id) || LESSONS[0];
  const first = lesson === null;
  const swapping = lesson && lesson.videoId !== found.videoId;
  lesson = found;

  $('#doc').innerHTML = head() + transcript() + words() + questions() + tasks();
  $('#deck').innerHTML = deck();
  lineEls = $$('#lines .line');
  nowIdx = -1;
  loopIdx = null;
  waitIdx = null;
  document.body.classList.remove('blanked');

  $$('#nav a').forEach((a) => a.classList.toggle('here', a.dataset.go === lesson.id));

  if (first) { loadApi(); }
  else if (ready) {
    if (swapping) player.loadVideoById({ videoId: lesson.videoId, startSeconds: lesson.start || 0 });
    else seek(lesson.start || 0, false);
  }
}

function boot() {
  /* A lesson opens at its title. Left on "auto", the browser restores the
     offset from the last visit — and on a page that grew taller since then
     that offset clamps to the very bottom, landing the reader in blank space
     below the footer. */
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  if (!Array.isArray(LESSONS) || !LESSONS.length) {
    document.body.classList.add('empty');
    $('#doc').innerHTML = `
      <section class="block block-empty">
        <h2>No clip loaded yet <span>還沒有影片</span></h2>
        <p>Add a lesson to <code>LESSONS</code> in <code>content.js</code> — a
          YouTube ID and a transcript cut into short, timed lines. The header of
          that file explains how to get one.</p>
        <p class="zh-always">在 <code>content.js</code> 的 <code>LESSONS</code>
          中加入一則課程：一個 YouTube 影片 ID，以及切成短句、標上秒數的逐字稿。
          該檔案開頭有說明。</p>
      </section>`;
    return;
  }
  $('#nav').innerHTML = nav();
  show(decodeURIComponent(location.hash.slice(1)));
  if (!location.hash) scrollTo({ top: 0 });
  ticker = setInterval(tick, 125);
}

// ----------------------------------------------------------------- events

/* One listener for the whole document. Every control is a button carrying the
   data attribute that says what it does, so nothing has to be re-wired when a
   lesson is swapped in underneath. */
document.addEventListener('click', (e) => {
  const seekBtn = e.target.closest('[data-seek]');
  if (seekBtn) {
    loopIdx = null;
    $('#loopOff').hidden = true;
    $$('#lines .loop').forEach((b) => b.setAttribute('aria-pressed', 'false'));
    seek(Number(seekBtn.dataset.seek));
    return;
  }

  const loopBtn = e.target.closest('[data-loop]');
  if (loopBtn) {
    const i = Number(loopBtn.dataset.loop);
    const on = loopIdx !== i;
    $$('#lines .loop').forEach((b) => b.setAttribute('aria-pressed', 'false'));
    loopBtn.setAttribute('aria-pressed', String(on));
    loopIdx = on ? i : null;
    $('#loopOff').hidden = !on;
    if (on) seek(lineStart(i));
    return;
  }

  const chip = e.target.closest('.zh-chip');
  if (chip) {
    chip.closest('[data-zh], .line, .q').classList.toggle('zh-on');
    return;
  }

  const card = e.target.closest('.card-face');
  if (card) { card.closest('.card').classList.toggle('open'); return; }

  const qShow = e.target.closest('.q-show');
  if (qShow) { qShow.closest('.q').classList.toggle('open'); return; }

  /* In hide-words mode the line itself is the reveal, so a student can check
     one line without giving away the rest. */
  const line = e.target.closest('.line');
  if (line && document.body.classList.contains('blanked')) line.classList.toggle('shown');
});

document.addEventListener('click', (e) => {
  const id = e.target.id || (e.target.closest('button') || {}).id;
  if (!id) return;

  if (id === 'playBtn') {
    if (!ready) return;
    const st = player.getPlayerState();
    if (st === YT.PlayerState.PLAYING) player.pauseVideo();
    else {
      /* Coming back from a shadowing hold starts the NEXT line, which is what
         "carry on" means when you have just repeated this one. */
      if (waitIdx != null) {
        const next = waitIdx + 1;
        if (next < lesson.lines.length) seek(lineStart(next));
        else { lineEls[waitIdx].classList.remove('waiting'); waitIdx = null; player.playVideo(); }
      } else player.playVideo();
    }
  }

  if (id === 'againBtn' && nowIdx >= 0) seek(lineStart(nowIdx));
  if (id === 'backBtn' && nowIdx > 0) seek(lineStart(nowIdx - 1));

  if (id === 'blankBtn') {
    const on = document.body.classList.toggle('blanked');
    $('#blankBtn').setAttribute('aria-pressed', String(on));
    if (!on) $$('#lines .line').forEach((l) => l.classList.remove('shown'));
  }

  if (id === 'shadowBtn') {
    shadowOn = !shadowOn;
    $('#shadowBtn').setAttribute('aria-pressed', String(shadowOn));
    if (!shadowOn) {
      $$('#lines .waiting').forEach((l) => l.classList.remove('waiting'));
      waitIdx = null;
    }
  }

  if (id === 'loopOff') {
    loopIdx = null;
    $('#loopOff').hidden = true;
    $$('#lines .loop').forEach((b) => b.setAttribute('aria-pressed', 'false'));
  }
});

document.addEventListener('change', (e) => {
  if (e.target.id === 'rate' && ready) player.setPlaybackRate(Number(e.target.value));
});

/* Keyboard, for the teacher driving from a laptop while talking. Anything
   typed into a field is left alone. */
document.addEventListener('keydown', (e) => {
  if (e.target.matches('input, textarea, select')) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;

  const hit = (id) => { const b = $('#' + id); if (b) b.click(); };

  if (e.key === ' ') { e.preventDefault(); hit('playBtn'); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); hit('backBtn'); }
  if (e.key === 'ArrowRight' && nowIdx + 1 < lesson.lines.length) {
    e.preventDefault(); seek(lineStart(nowIdx + 1));
  }
  if (e.key.toLowerCase() === 'r') hit('againBtn');
  if (e.key.toLowerCase() === 'l' && nowIdx >= 0) $(`[data-loop="${nowIdx}"]`).click();
  if (e.key.toLowerCase() === 'h') hit('blankBtn');
  if (e.key === 'Escape') { closeNav(); setPanel(false); }
});

// ------------------------------------------------------- chrome: nav, panel

const navToggle = $('#navToggle');
navToggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

function closeNav() {
  document.body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
}
$('.nav-scrim').addEventListener('click', closeNav);

function setPanel(open) {
  $('#panel').hidden = !open;
  $('#panelToggle').setAttribute('aria-expanded', String(open));
}
$('#panelToggle').addEventListener('click', () => setPanel($('#panel').hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));

/* Chinese is the one setting worth remembering across a reload: a teacher who
   works with it on works with it on every week. */
const ZH_KEY = 'video-zh-all';
const zhAll = $('#zhAll');
const zhToggle = $('#zhToggle');

function setZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhAll.checked = on;
  zhToggle.setAttribute('aria-pressed', String(on));
  try { localStorage.setItem(ZH_KEY, on ? '1' : '0'); } catch (err) { /* private mode */ }
}
zhToggle.addEventListener('click', () => setZh(!document.body.classList.contains('zh-all')));
zhAll.addEventListener('change', () => setZh(zhAll.checked));

$('#followChk').addEventListener('change', (e) => { follow = e.target.checked; });

$('#revealAll').addEventListener('click', () => {
  $$('.card').forEach((c) => c.classList.add('open'));
  $$('.q').forEach((q) => q.classList.add('open'));
  $$('#lines .line').forEach((l) => l.classList.add('shown'));
  setPanel(false);
});

$('#swapId').addEventListener('change', (e) => {
  const id = idFrom(e.target.value);
  if (!id) { e.target.setAttribute('aria-invalid', 'true'); return; }
  e.target.removeAttribute('aria-invalid');
  if (ready) player.loadVideoById({ videoId: id, startSeconds: lesson.start || 0 });
});

$('#reset').addEventListener('click', () => {
  if (ready) player.pauseVideo();
  shadowOn = false;
  started = false;
  waitIdx = null;
  follow = true;
  $('#followChk').checked = true;
  show(lesson.id);
  if (ready) { player.setPlaybackRate(1); seek(lesson.start || 0, false); }
  setPanel(false);
  scrollTo({ top: 0 });
});

addEventListener('hashchange', () => {
  show(decodeURIComponent(location.hash.slice(1)));
  closeNav();
  scrollTo({ top: 0 });
});

try { if (localStorage.getItem(ZH_KEY) === '1') setZh(true); } catch (err) { /* private mode */ }
boot();
