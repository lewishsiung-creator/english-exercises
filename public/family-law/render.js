/* Family Law English — renderer. A copy of /fab-english/'s, with its own
   content and its own localStorage prefix (`fl.`), so a fix to one page never
   moves the other.

   Builds the whole page from content.js. What is worth knowing before editing:

   1. **Two modes, one page.** 自學 is the learner alone: Chinese shown, and
      記住了／還不熟 marks kept on their own device. 教學 is Lewis driving a
      session: Chinese behind 中 chips, nothing recorded, 重新開始 between
      students. A student's link is the plain URL and has no switch at all —
      opening the page once with `#teach` turns THIS device into the teacher's
      and is remembered; 設定 → 「在這台裝置隱藏」 undoes it.

   2. **One card per word, built once.** Switching between the theme view and
      the A–Z view moves the same nodes between containers rather than
      re-rendering, so a card the teacher has opened stays open across the
      switch and the search is a plain show/hide. The quiz is a different view
      and replaces the list.

   3. **The quiz is generated, never authored.** Four kinds, a quarter each —
      字義, 填空, 聽力, 拼字 — all built from the same example sentence, with
      distractors drawn from the same theme and part of speech. So it cannot
      drift from the word list: edit a sentence and its questions change with
      it. Nothing is scored; a wrong answer wobbles and says what it means.

   4. **Only the device's own settings persist** — voice, speed, the 中文
      switch, whether this is a teacher device, and (自學 only) the marks. A
      teaching session leaves nothing behind. */

'use strict';

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

const text = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/* The headword inside its example sentence. Bounded by "not a letter, digit or
   hyphen" rather than \b, because several of these words are hyphenated
   ("run-card", "off-line") and \b would happily match the tail of one. */
const keyRe = (key) => new RegExp('(^|[^A-Za-z0-9-])(' + esc(key) + ')($|[^A-Za-z0-9-])', 'i');

const shuffle = (a) => {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};

// ------------------------------------------------------------------- data

/* One flat list of every word, each carrying the group it came from and the
   exact form that appears in its sentence. Everything downstream — the cards,
   the search, the A–Z view, the quiz — reads this rather than the nested
   content. The headword is the id: it is unique across the page and stable, so
   a mark saved last week still points at the right word. */
const ENTRIES = [];

LAW.groups.forEach((g, gi) => {
  g.words.forEach((w) => {
    const key = w.k || w.w;
    const m = w.ex.match(keyRe(key));
    ENTRIES.push({
      ...w,
      id: w.w,
      key,
      form: m ? m[2] : key,     // as it is actually spelled in the sentence
      pos: w.p.split(/\s*\/\s*/)[0],
      group: g,
      gi,
      hay: (w.w + ' ' + key + ' ' + w.zh + ' ' + w.ex + ' ' + w.zhEx).toLowerCase(),
      card: null,
    });
  });
});

const num = (n) => String(n + 1).padStart(2, '0');

// ------------------------------------------------------------------- store

const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem('fl.' + k);
      if (v == null) return d;
      // Anything that is not JSON is handed back as it was found, as on the
      // page this renderer was copied from.
      try { return JSON.parse(v); } catch (e) { return v; }
    } catch (e) { return d; }
  },
  set(k, v) { try { localStorage.setItem('fl.' + k, JSON.stringify(v)); } catch (e) { /* private mode */ } },
};

/* Students never see the mode switch. A device becomes the teacher's by
   opening the link with #teach once; the hash is then cleared so it does not
   sit in the address bar waiting to be copied to a student. */
let TEACHER = store.get('teacher', false);

function claimTeacher() {
  if (location.hash !== '#teach') return false;
  TEACHER = true;
  store.set('teacher', true);
  store.set('mode', 'teach');
  // Drop the hash again so the address bar holds the plain student link.
  history.replaceState(null, '', location.pathname + location.search);
  return true;
}
claimTeacher();

/* Typing #teach onto a page that is already open changes the hash without
   reloading, so the same check runs again on hashchange. */
addEventListener('hashchange', () => {
  if (claimTeacher()) {
    $('#modeseg').hidden = false;
    $('#teacherflag').hidden = false;
    setMode('teach', true);
  }
});

const S = {
  mode: TEACHER ? store.get('mode', 'teach') : 'self',
  view: 'list',          // list | quiz
  order: 'theme',        // theme | az
  theme: 'all',
  markf: 'all',
  q: '',
  fold: true,            // sentences on tap (a device setting)
};

let MARKS = store.get('marks', {});     // headword -> 'k' (記住了) | 'r' (還不熟); 自學 only

// ------------------------------------------------------------------- build

function buildNav() {
  return `
  <nav class="toc" aria-label="Themes 主題">
    <p class="toc-head">Themes 主題</p>
    <ul>
      ${LAW.groups.map((g, i) => `
        <li><a href="#sec-${g.id}" data-id="${g.id}">
          <span class="n">${num(i)}</span>
          <span class="t">
            <span class="en">${text(g.en)}</span>
            <span class="zh">${text(g.zh)}</span>
          </span>
        </a></li>`).join('')}
    </ul>
  </nav>`;
}

function buildCover() {
  return `
  <header class="cover">
    <p class="kicker">家事法律英文</p>
    <h1>
      <span class="en">Family Law English</span>
      <span class="zh">家事案件常用英文 ${ENTRIES.length}</span>
    </h1>
    <p class="intro">${text(LAW.intro.en)}<span class="zh">${text(LAW.intro.zh)}</span></p>
    <p class="intro-how" id="introHow"></p>
  </header>`;
}

/* One row stays pinned under the bar: the Terms／Quiz tabs, the search, and a
   Filter button. Everything else — theme, marks, order, sentences — lives in
   a row the Filter button opens, so on a phone the pinned chrome is one line
   rather than four. */
function buildTools() {
  return `
  <div class="tools" id="tools">
    <div class="tools-row">
      <div class="views tabs" id="viewseg" role="group" aria-label="View 檢視">
        <button data-view="list">Terms<em>詞彙</em></button>
        <button data-view="practice">Practice<em>實務</em></button>
        <button data-view="quiz">Quiz<em>測驗</em></button>
      </div>

      <div class="search-box">
        <span class="mag" aria-hidden="true">🔍</span>
        <!-- type="text", not "search": the native search field draws its own
             clear button, which would sit next to ours. -->
        <input id="q" type="text" autocomplete="off" spellcheck="false"
               aria-label="Search the terms 搜尋詞彙"
               placeholder="Search 搜尋…">
        <button class="search-x" id="qx" hidden aria-label="Clear the search">✕</button>
      </div>

      <button class="filt-btn" id="filtBtn" aria-expanded="false" aria-controls="filters">
        Filter<em>篩選</em><b class="filt-n" id="filtN" hidden></b>
      </button>
    </div>

    <div class="filters" id="filters" hidden>
      <select id="themef" class="sm" aria-label="Theme 主題">
        <option value="all">Every theme 全部主題</option>
        ${LAW.groups.map((g, i) => `<option value="${g.id}">${num(i)} ${text(g.zh)}</option>`).join('')}
      </select>

      <select id="markf" class="sm self-only" aria-label="Marks 標記">
        <option value="all">All terms 全部詞彙</option>
        <option value="review">還不熟的</option>
        <option value="new">還沒標記的</option>
        <option value="known">記住了的</option>
      </select>

      <div class="views list-only" id="orderseg" role="group" aria-label="Order 排序">
        <button data-order="theme">By theme<em>依主題</em></button>
        <button data-order="az">A–Z<em>字母</em></button>
      </div>

      <div class="views list-only" id="exseg" role="group" aria-label="Example sentences 例句">
        <button data-ex="fold">Sentences on tap<em>點開才看</em></button>
        <button data-ex="all">All sentences<em>全部展開</em></button>
      </div>
    </div>
  </div>
  <p class="search-note" id="qnote" hidden></p>`;
}

const sayBtn = (t, label) =>
  `<button class="say" data-say="${text(t)}" aria-label="${text(label || '播放發音')}">&#9654;&#xFE0E;</button>`;

function buildCard(e) {
  const ex = text(e.ex).replace(keyRe(e.key), (m, a, b, c) => `${a}<b>${b}</b>${c}`);
  return `
  <article class="word" data-id="${text(e.id)}">
    <div class="word-top">
      <div class="word-head">
        <button class="word-w" aria-expanded="false">${text(e.w)}</button>
        <span class="word-p">${text(e.p)}</span>
        <button class="zh-chip" aria-label="Show the Chinese for ${text(e.w)}">中</button>
      </div>
      <span class="caret" aria-hidden="true"></span>
      ${sayBtn(e.w + '. ' + e.ex, 'Say ' + e.w)}
    </div>
    <p class="zh zh-gloss">${text(e.zh)}</p>
    <p class="word-ex">${ex}</p>
    <p class="zh zh-ex">${text(e.zhEx)}</p>
    <div class="mark self-only">
      <button class="mk mk-k" data-mark="k" aria-pressed="false">記住了</button>
      <button class="mk mk-r" data-mark="r" aria-pressed="false">還不熟</button>
    </div>
  </article>`;
}

function buildSection(g, i) {
  const n = g.words.length;
  return `
  <section class="sec" id="sec-${g.id}" data-id="${g.id}">
    <h2 class="sec-head">
      <span class="num">${num(i)}</span>
      <span class="t">
        <span class="en">${text(g.en)}</span>
        <span class="zh">${text(g.zh)}</span>
      </span>
    </h2>
    <p class="sec-note">
      ${text(g.note.en)}
      <span class="zh">${text(g.note.zh)}</span>
      <span class="sec-count">${n} terms · ${n} 個詞彙</span>
    </p>
    <div class="words" data-words="${g.id}"></div>
  </section>`;
}

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function buildAz() {
  return `
  <div id="az" hidden>
    ${LETTERS.map((L) => `
      <h3 class="az-letter" data-letter="${L}">${L}</h3>
      <div class="words" data-letter="${L}"></div>`).join('')}
  </div>`;
}

function buildSource() {
  return `
  <p class="source">
    <strong>Language practice, not legal advice.
      <span class="zh">僅供語言學習，不構成法律意見。</span></strong>
    Every term, sentence and 中譯 here was written for this page. The terms
    follow Taiwan's Civil Code, the Family Act and the Domestic Violence
    Prevention Act. This is language practice, not legal advice: a real case
    turns on its own facts and the current law.
    <span class="zh">本頁所有詞彙、例句與中譯皆為另行撰寫，用語依據台灣民法、家事事件法與家庭暴力防治法。本頁僅供語言學習，不構成法律意見；個案仍須依實際情況與現行法規判斷。</span>
  </p>`;
}

// ------------------------------------------------------------------- practice

/* The Practice tab, from practice.js: consultations, documents and emails.
   Built once, like the cards. Every English line is a .line — tapping it
   opens its Chinese the way a card does, so 自學 and 教學 behave as they do in
   the word list. Titles, notes and the index are scaffolding and stay
   bilingual in both modes. */

const KIND = { dialogue: ['Consultation', '諮詢對話'], document: ['Reading', '文件閱讀'], email: ['Email', '英文書信'] };
const WHO = { L: ['Lawyer', '律師'], C: ['Client', '當事人'] };

function lineHtml(l, withSay) {
  const who = l.who ? `<span class="who">${WHO[l.who][0]}<em>${WHO[l.who][1]}</em></span>` : '';
  const cls = ['line', l.head ? 'head' : '', l.who ? 'who-' + l.who : ''].filter(Boolean).join(' ');
  return `<li class="${cls}" tabindex="0">${who}
      <div class="line-body"><p class="line-en">${text(l.en)}</p><p class="zh">${text(l.zh)}</p></div>
      ${withSay ? sayBtn(l.en, '播放') : ''}</li>`;
}

function buildPiece(p) {
  return `
  <article class="piece piece-${p.kind}" id="p-${p.id}">
    <p class="piece-kind">${KIND[p.kind][0]} <span>${KIND[p.kind][1]}</span></p>
    <h3 class="piece-title">${text(p.en)}<span class="zh">${text(p.zh)}</span></h3>
    <p class="piece-note">${text(p.note.en)}<span class="zh">${text(p.note.zh)}</span></p>
    ${'speechSynthesis' in window ? `<button class="btn playall" data-play="${p.id}" aria-pressed="false">${PLAY_LABEL.idle}</button>` : ''}
    <ol class="lines">${p.lines.map((l) => lineHtml(l, true)).join('')}</ol>
    ${p.check ? `
    <div class="aside">
      <p class="aside-h">What to check in Taiwan <span>在台灣要確認的事</span></p>
      <ul class="lines">${lineHtml(p.check, false)}</ul>
    </div>` : ''}
    <div class="aside">
      <p class="aside-h">Phrases to take away <span>值得帶走的說法</span></p>
      <ul class="lines phrases">${p.phrases.map((x) => lineHtml(x, false)).join('')}</ul>
    </div>
  </article>`;
}

function buildPractice() {
  const kinds = ['dialogue', 'document', 'email'];
  return `
  <div id="practice" hidden>
    <header class="prac-head">
      <h2 class="prac-title">Practice <span class="zh">實務練習</span></h2>
      <p class="prac-intro">Consultations, documents and emails from cross-border family cases. ▶ reads a
        line aloud; when the Chinese is hidden, tap a line to see it.
        <span class="zh">涉外家事案件的諮詢對話、文件與書信。按 ▶ 朗讀；中文隱藏時，點一下該行即可顯示。</span></p>
      <nav class="prac-index" aria-label="Practice 練習內容">
        ${kinds.map((k) => `
        <div class="prac-group">
          <p class="piece-kind">${KIND[k][0]} <span>${KIND[k][1]}</span></p>
          <ul>${PRACTICE.filter((p) => p.kind === k).map((p) => `
            <li><a href="#p-${p.id}">${text(p.en)}<span class="zh">${text(p.zh)}</span></a></li>`).join('')}
          </ul>
        </div>`).join('')}
      </nav>
      <label class="row-check roleplay">
        <input type="checkbox" id="coverL">
        <span>Cover the lawyer's lines <em>遮住律師的台詞</em></span>
        <span class="row-note">For role-play: say the lawyer's line yourself, then tap it to check.
          <em>角色扮演用：先自己說出律師的台詞，再點一下核對。</em></span>
      </label>
    </header>
    ${PRACTICE.map(buildPiece).join('')}
  </div>`;
}

/* ---------------- Play all ----------------

   Reads a piece from top to bottom, each line in its speaker's voice, with
   the line being read lit and kept in view. With "Cover the lawyer's lines"
   on, it stops at each covered lawyer line and waits: the learner says it,
   then taps Continue (or the line) to hear it and go on. A run number makes
   any callback from a stopped run do nothing — cancel() fires onend too. */

const PLAY_LABEL = {
  idle: '▶&#xFE0E; Play all <em>全部播放</em>',
  playing: '■ Stop <em>停止</em>',
  waiting: '▶&#xFE0E; Continue <em>換你說完了，繼續</em>',
};
const P = { id: null, i: 0, run: 0, waiting: false };

const playLines = (id) => $$('ol.lines > .line', $('#p-' + id));

function playLabel(id, state) {
  const b = $(`[data-play="${id}"]`);
  if (!b) return;
  b.innerHTML = PLAY_LABEL[state];
  b.setAttribute('aria-pressed', String(state !== 'idle'));
  b.classList.toggle('waiting', state === 'waiting');
}

function stopPlay() {
  if (!P.id) return;
  P.run++;
  $$('#practice .line.playing, #practice .line.yourturn').forEach((l) =>
    l.classList.remove('playing', 'yourturn'));
  playLabel(P.id, 'idle');
  P.id = null; P.waiting = false;
  if (canSpeak) speechSynthesis.cancel();
}

function keepInView(li) {
  const r = li.getBoundingClientRect();
  const top = pinnedBottom() + 12;
  if (r.top < top || r.bottom > window.innerHeight - 12) window.scrollBy(0, r.top - top - 40);
}

function playStep() {
  const lines = playLines(P.id);
  $$('#practice .line.playing').forEach((l) => l.classList.remove('playing'));
  if (P.i >= lines.length) { stopPlay(); return; }
  const li = lines[P.i];
  li.classList.add('playing');
  keepInView(li);

  if (document.body.classList.contains('cover-L')
      && li.classList.contains('who-L') && !li.classList.contains('shown')) {
    P.waiting = true;
    li.classList.add('yourturn');
    playLabel(P.id, 'waiting');
    return;
  }

  const run = P.run;
  speak($('.line-en', li).textContent, lineVoice(li), () => {
    if (run !== P.run) return;
    P.i++;
    setTimeout(() => { if (run === P.run) playStep(); }, 450);
  });
}

function yourTurnDone() {
  if (!P.waiting) return;
  const li = playLines(P.id)[P.i];
  li.classList.remove('yourturn');
  li.classList.add('shown');
  P.waiting = false;
  playLabel(P.id, 'playing');
  playStep();
}

function playButton(id) {
  if (P.id === id && P.waiting) { yourTurnDone(); return; }
  if (P.id === id) { stopPlay(); return; }
  stopPlay();
  P.id = id; P.i = 0;
  playLabel(id, 'playing');
  playStep();
}

// ------------------------------------------------------------------- render

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
// buildTools() returns two sibling elements, so it cannot go through el().
const tools = document.createElement('div');
tools.innerHTML = buildTools();
while (tools.firstElementChild) doc.appendChild(tools.firstElementChild);

const list = el('<div id="list"></div>');
doc.appendChild(list);
LAW.groups.forEach((g, i) => list.appendChild(el(buildSection(g, i))));
list.appendChild(el(buildAz()));
list.appendChild(el(`
  <p class="nothing" hidden>
    No term matches that.
    <span class="zh">沒有符合的詞彙。</span>
  </p>`));

const practice = el(buildPractice());
doc.appendChild(practice);

const quiz = el('<div id="quiz" hidden></div>');
doc.appendChild(quiz);
doc.appendChild(el(buildSource()));

// Cards, built once and parked in their theme section.
ENTRIES.forEach((e) => {
  e.card = el(buildCard(e));
  $(`[data-words="${e.group.id}"]`).appendChild(e.card);
});

// ------------------------------------------------------------------- marks

function markWord(id, m) {
  if (S.mode !== 'self') return;
  if (MARKS[id] === m) delete MARKS[id]; else MARKS[id] = m;
  store.set('marks', MARKS);
  paintMark(id);
  if (S.markf !== 'all') applyFilter();
  markInfo();
}

function paintMark(id) {
  const e = ENTRIES.find((x) => x.id === id);
  if (!e) return;
  const m = MARKS[id] || '';
  e.card.dataset.mark = m;
  $$('.mk', e.card).forEach((b) =>
    b.setAttribute('aria-pressed', String(b.dataset.mark === m)));
}

function paintAllMarks() { ENTRIES.forEach((e) => paintMark(e.id)); }

function markInfo() {
  const k = ENTRIES.filter((e) => MARKS[e.id] === 'k').length;
  const r = ENTRIES.filter((e) => MARKS[e.id] === 'r').length;
  $('#markinfo').innerHTML = k || r
    ? `記住了 <b>${k}</b>・還不熟 <b>${r}</b>・還沒標記 <b>${ENTRIES.length - k - r}</b>
       <em>Kept on this device only.</em>`
    : `還沒有標記。在詞彙表上按「記住了」或「還不熟」就會記在這台裝置上。
       <em>Marks are kept on this device only.</em>`;
}

// ------------------------------------------------------------------- filter

/* The set of words the list shows and the quiz draws from. */
function pool(ignoreSearch) {
  const term = ignoreSearch ? '' : S.q.trim().toLowerCase();
  return ENTRIES.filter((e) => {
    if (S.theme !== 'all' && e.group.id !== S.theme) return false;
    if (term && !e.hay.includes(term)) return false;
    if (S.mode === 'self' && S.markf !== 'all') {
      const m = MARKS[e.id];
      if (S.markf === 'review' && m !== 'r') return false;
      if (S.markf === 'new' && m) return false;
      if (S.markf === 'known' && m !== 'k') return false;
    }
    return true;
  });
}

function applyFilter() {
  const keep = new Set(pool().map((e) => e.id));
  const term = S.q.trim();
  $('#qx').hidden = !term;

  ENTRIES.forEach((e) => { e.card.hidden = !keep.has(e.id); });

  if (S.order === 'theme') {
    // A theme with nothing left in it goes away entirely.
    $$('.sec').forEach((s) => {
      s.hidden = !$$('.word', s).some((c) => !c.hidden);
    });
  } else {
    $$('#az .words').forEach((box) => {
      const any = $$('.word', box).some((c) => !c.hidden);
      box.hidden = !any;
      $(`.az-letter[data-letter="${box.dataset.letter}"]`).hidden = !any;
    });
  }

  $('.nothing').hidden = keep.size > 0;

  const n = (S.theme !== 'all') + (S.mode === 'self' && S.markf !== 'all');
  $('#filtN').hidden = !n;
  $('#filtN').textContent = n;

  const note = $('#qnote');
  const filtered = term || S.theme !== 'all' || (S.mode === 'self' && S.markf !== 'all');
  note.hidden = !filtered;
  if (filtered) {
    note.innerHTML = `${keep.size} ${keep.size === 1 ? 'term' : 'terms'}
      <span class="zh">符合 ${keep.size} 個詞彙</span>`;
  }
}

// ------------------------------------------------------------------- speech

let voices = [];
let voice = null;
const canSpeak = 'speechSynthesis' in window;

function loadVoices() {
  if (!canSpeak) return;
  voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
  if (!voices.length) return;

  const saved = store.get('voice', '');
  voice = voices.find((v) => v.name === saved)
       || voices.find((v) => v.lang === 'en-US' && /Samantha|Ava|Allison|Google US/i.test(v.name))
       || voices.find((v) => v.lang === 'en-US')
       || voices[0];

  $('#voicePick').innerHTML = voices.map((v) =>
    `<option value="${text(v.name)}"${v === voice ? ' selected' : ''}>${text(v.name)} · ${text(v.lang)}</option>`
  ).join('');
}

loadVoices();
if (canSpeak) speechSynthesis.onvoiceschanged = () => { loadVoices(); CLIENT_VOICE.clear(); };

/* The client in a Practice dialogue speaks in a different voice from the
   lawyer, matched to who they are (practice.js: client: { lang, sex }). The
   Speech API says nothing about sex, so it is read off the voice's name from
   the names Apple, Google and Microsoft ship; a voice not on either list
   still serves, just without that match. Never the lawyer's own voice. */
const MALE = /Daniel|Alex|Fred|Arthur|Oliver|Tom|Aaron|Rishi|Gordon|Lee|Guy|Ryan|Thomas|George|James|David|Mark|Male/i;
const FEMALE = /Samantha|Karen|Moira|Tessa|Serena|Kate|Martha|Allison|Ava|Susan|Victoria|Zoe|Nicky|Catherine|Hazel|Libby|Sonia|Natasha|Aria|Jenny|Zira|Female|Google US English/i;
// macOS also ships joke and character voices; never hand one to a client.
const NOVELTY = /Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Junior|Kathy|Ralph|Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley/i;
const CLIENT_VOICE = new Map();
const langOf = (v) => v.lang.replace('_', '-');
// "Ava (Enhanced)" is still Ava: compare voices by the name before any bracket.
const baseName = (v) => v.name.replace(/\s*[(（].*$/, '').trim().toLowerCase();

function clientVoice(pieceId) {
  if (CLIENT_VOICE.has(pieceId)) return CLIENT_VOICE.get(pieceId);
  const want = (PRACTICE.find((p) => p.id === pieceId) || {}).client || {};
  const others = voices.filter((v) =>
    !NOVELTY.test(v.name) && (!voice || baseName(v) !== baseName(voice)));
  const sexOk = (v) => !want.sex || (want.sex === 'm' ? MALE : FEMALE).test(v.name);
  const tries = [
    (v) => langOf(v) === want.lang && sexOk(v),
    (v) => langOf(v) === want.lang,
    (v) => langOf(v) !== (voice && langOf(voice)) && sexOk(v),
    (v) => sexOk(v),
    () => true,
  ];
  let pick = null;
  for (const t of tries) { pick = others.find(t); if (pick) break; }
  CLIENT_VOICE.set(pieceId, pick || voice);
  return pick || voice;
}

function speak(sentence, v, onend) {
  if (!canSpeak) { if (onend) onend(); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(sentence);
  const use = v || voice;
  if (use) { u.voice = use; u.lang = use.lang; } else { u.lang = 'en-US'; }
  u.rate = Number($('#rate').value);
  if (onend) { u.onend = onend; u.onerror = onend; }
  // Safari drops an utterance queued in the same tick as cancel().
  setTimeout(() => speechSynthesis.speak(u), 0);
}

/* The voice for one practice line: the client's in a dialogue, else the
   lawyer's (the one chosen in 設定). */
function lineVoice(li) {
  if (!li.classList.contains('who-C')) return voice;
  return clientVoice(li.closest('.piece').id.slice(2));
}

// ------------------------------------------------------------------- quiz

/* Four kinds, a quarter each, all built from the one example sentence:

     字義  see the English word, pick the Chinese
     填空  the sentence with its headword cut out, pick the word
     聽力  hear the word, pick it from four
     拼字  type the word into the sentence, first letter given

   Distractors come from the same theme and the same part of speech, so the
   option that is wrong is wrong on meaning rather than on shape. Nothing is
   scored. 聽力 is dropped where the browser has no speech. */

const Q = { items: [], i: 0, missed: new Set(), tried: new Set(), solved: false, done: false, key: '' };
const SP = { typed: '', hint: 1, msg: '', bad: false };
const resetSpell = () => { SP.typed = ''; SP.hint = 1; SP.msg = ''; SP.bad = false; };

const quizKey = () => [S.mode, S.theme, S.markf, S.q].join('|');

function peers(e, src) {
  const same = src.filter((o) => o.id !== e.id && o.group === e.group);
  const byPos = same.filter((o) => o.pos === e.pos);
  return { byPos, same };
}

function pick3(e, src, differ) {
  const { byPos, same } = peers(e, src);
  const out = [];
  for (const o of shuffle(byPos).concat(shuffle(same))) {
    if (out.length === 3) break;
    if (out.includes(o)) continue;
    if (differ && !differ(o)) continue;
    out.push(o);
  }
  return out.length === 3 ? out : null;
}

function makeQuestion(e, src, kind) {
  // 拼字: an open gap, only for words that are one plain alphabetic token
  if (kind === 'spell' && /^[A-Za-z][A-Za-z' -]{2,}$/.test(e.key)) {
    return { type: 'spell', e };
  }
  // 聽力: hear it, pick it from four written words
  if (kind === 'listen' && canSpeak) {
    const o = pick3(e, src, (x) => x.w.toLowerCase() !== e.w.toLowerCase());
    if (o) return { type: 'listen', e, opts: shuffle([{ t: e.w, right: true, z: e.zh }, ...o.map((x) => ({ t: x.w, z: x.zh }))]) };
  }
  // 填空: the sentence with its headword cut out
  if (kind === 'gap') {
    const o = pick3(e, src, (x) => !keyRe(x.key).test(e.ex) && x.form.toLowerCase() !== e.form.toLowerCase());
    if (o) return { type: 'gap', e, opts: shuffle([{ t: e.form, right: true, z: e.zh }, ...o.map((x) => ({ t: x.form, z: x.zh, w: x.w }))]) };
  }
  // 字義: the fallback, and it always works
  const o = pick3(e, src, (x) => x.zh !== e.zh);
  if (!o) return null;
  return { type: 'mean', e, opts: shuffle([{ t: e.zh, right: true }, ...o.map((x) => ({ t: x.zh, w: x.w }))]) };
}

const KINDS = ['mean', 'gap', 'listen', 'spell'];

function buildQuiz() {
  const src = pool();
  // 自學 leaves out what the learner has already marked 記住了, unless they
  // have asked for exactly those.
  const live = S.mode === 'self' && S.markf === 'all'
    ? src.filter((e) => MARKS[e.id] !== 'k') : src;
  const from = live.length >= 4 ? live : src;
  const chosen = shuffle(from).slice(0, 10);

  Q.items = chosen
    .map((e, i) => makeQuestion(e, src.length >= 4 ? src : ENTRIES, KINDS[i % 4]))
    .filter(Boolean);
  Q.i = 0; Q.missed = new Set(); Q.tried = new Set(); Q.solved = false; Q.done = false;
  Q.key = quizKey(); Q.spoken = new Set();
  resetSpell();
}

const zhw = (inner) =>
  `<span class="zhw"><button class="zh-chip" aria-label="顯示中文">中</button><span class="zh">${inner}</span></span>`;

function renderQuiz() {
  if (Q.key !== quizKey()) buildQuiz();
  if (!Q.items.length) {
    quiz.innerHTML = `<p class="nothing">Not enough terms here to make a quiz.
      <span class="zh">這個範圍的詞彙太少，出不了題。換個主題或清掉搜尋。</span></p>`;
    return;
  }
  if (Q.done) return renderQuizEnd();

  const q = Q.items[Q.i];
  if (q.type === 'listen' && !Q.spoken.has(Q.i)) { Q.spoken.add(Q.i); speak(q.e.w); }
  if (q.type === 'spell') return renderSpell(q);

  const head = `<p class="status">${Q.i + 1} / ${Q.items.length}</p>`;
  let prompt;

  if (q.type === 'listen') {
    prompt = `<div class="qtype">Listening <em>聽力</em></div>
      <p class="qask">Which word did you hear? <span class="zh">你聽到的是哪一個字？</span></p>
      <div class="prompt">
        <button class="btn primary bigplay" data-say="${text(q.e.w)}">&#9654;&#xFE0E; 再聽一次</button>
        ${Q.solved ? `<div class="reveal"><span class="w">${text(q.e.w)}</span> <span class="word-p">${text(q.e.p)}</span></div>` : ''}
      </div>`;
  } else if (q.type === 'gap') {
    const sentence = text(q.e.ex).replace(keyRe(q.e.key), (m, a, b, c) =>
      `${a}<span class="gap ${Q.solved ? 'filled' : ''}">${Q.solved ? text(q.e.form) : '&nbsp;'}</span>${c}`);
    prompt = `<div class="qtype">Gap fill <em>例句填空</em></div>
      <p class="qask">Which word fills the gap? <span class="zh">哪一個字可以填進空格？</span></p>
      <div class="prompt"><div class="sent">${sentence}</div>
        <div class="qzh">${zhw(text(q.e.zhEx))}</div></div>`;
  } else {
    prompt = `<div class="qtype">Meaning <em>字義</em></div>
      <p class="qask">What does this word mean? <span class="zh">這個字是什麼意思？</span></p>
      <div class="prompt"><span class="w">${text(q.e.w)}</span> ${sayBtn(q.e.w)}
        <div class="word-p">${text(q.e.p)}</div></div>`;
  }

  quiz.innerHTML = `${head}
  <section class="qcard">${prompt}
    <div class="opts">${q.opts.map((o, k) => {
      const state = Q.tried.has(k) ? (o.right ? 'right' : 'wrong') : (Q.solved && o.right ? 'right' : '');
      const why = Q.tried.has(k) && !o.right
        ? (q.type === 'mean'
            ? `<span class="why">這是 ${text(o.w)} 的意思</span>`
            : `<span class="why">${text(o.t)}：${text(o.z || '')}</span>`)
        : '';
      return `<button class="opt ${q.type === 'mean' ? 'zhf' : 'en'} ${state}"
                data-opt="${k}" ${Q.solved ? 'disabled' : ''}>${text(o.t)}${why}</button>`;
    }).join('')}</div>
    <div class="feedback">${Q.solved ? feedbackHTML(q) : ''}</div>
  </section>
  <div class="actions">${Q.solved
    ? `<button class="btn primary" id="qnext">${Q.i + 1 < Q.items.length ? 'Next 下一題' : 'Finish 看這一輪'}</button>`
    : `<button class="btn" id="qskip">Show the answer 看答案</button>`}</div>`;
}

/* 拼字: type the word into the sentence. Nothing is counted; a hint adds a
   letter, a wrong try wobbles and says how far it got, 看答案 is always there. */
function renderSpell(q) {
  const ans = q.e.form;
  if (!SP.typed) SP.typed = ans.slice(0, SP.hint);
  /* Cut the sentence at the headword. The regex carries the character before
     the word in group 1, so the word itself starts that far past the match. */
  const m = keyRe(q.e.key).exec(q.e.ex);
  const at = m.index + m[1].length;
  const before = text(q.e.ex.slice(0, at));
  const after = text(q.e.ex.slice(at + m[2].length));

  const field = Q.solved
    ? `<span class="gap filled">${text(ans)}</span>`
    : `<input class="spell ${SP.bad ? 'bad' : ''}" id="spellin" value="${text(SP.typed)}"
         style="width:${Math.max(4, ans.length + 2)}ch" autocomplete="off" autocapitalize="off"
         autocorrect="off" spellcheck="false" enterkeyhint="done"
         aria-label="填入空格的字（${ans.length} 個字母）">`;

  quiz.innerHTML = `<p class="status">${Q.i + 1} / ${Q.items.length}</p>
  <section class="qcard">
    <div class="qtype">Spelling <em>拼字</em></div>
    <p class="qask">Spell the missing word. <span class="zh">把空格裡的字拼出來。</span></p>
    <div class="prompt"><div class="sent">${before}${field}${after}</div>
      <div class="qzh">${zhw(text(q.e.zhEx))}</div>
      <p class="hint">Hint 提示：${text(q.e.p)} ${zhw(text(q.e.zh))}・${ans.length} 個字母</p></div>
    ${Q.solved ? '' : `<div class="spellrow">
      <button class="btn primary" id="spcheck">Check 檢查</button>
      <button class="btn" id="sphint">再給一個字母</button>
      <button class="btn" data-say="${text(ans)}">聽發音</button></div>`}
    <div class="spellmsg" role="status">${text(SP.msg)}</div>
    <div class="feedback">${Q.solved ? feedbackHTML(q) : ''}</div>
  </section>
  <div class="actions">${Q.solved
    ? `<button class="btn primary" id="qnext">${Q.i + 1 < Q.items.length ? 'Next 下一題' : 'Finish 看這一輪'}</button>`
    : `<button class="btn" id="qskip">Show the answer 看答案</button>`}</div>`;

  const inp = $('#spellin');
  if (inp) {
    inp.addEventListener('input', () => {
      SP.typed = inp.value;
      if (SP.bad) { SP.bad = false; inp.classList.remove('bad'); }
    });
    inp.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') { ev.preventDefault(); checkSpell(); }
    });
    inp.focus({ preventScroll: true });
    inp.setSelectionRange(inp.value.length, inp.value.length);
  }
}

const norm = (t) => t.trim().toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ');
const commonPrefix = (a, b) => { let k = 0; while (k < a.length && a[k] === b[k]) k++; return k; };

function checkSpell() {
  const q = Q.items[Q.i];
  if (!q || q.type !== 'spell' || Q.solved) return;
  if (norm(SP.typed) === norm(q.e.form)) {
    Q.solved = true; SP.msg = ''; speak(q.e.ex);
  } else {
    Q.missed.add(Q.i); SP.bad = true;
    const a = norm(q.e.form), t = norm(SP.typed);
    const k = commonPrefix(t, a);
    SP.msg = t.length < a.length && k === t.length
      ? `還沒拼完，這個字有 ${a.length} 個字母。`
      : `前 ${k} 個字母是對的，從第 ${k + 1} 個字母再想想。`;
  }
  renderQuiz();
}

function spellHint() {
  const q = Q.items[Q.i];
  if (!q || Q.solved) return;
  SP.hint = Math.min(q.e.form.length, Math.max(SP.hint, commonPrefix(norm(SP.typed), norm(q.e.form))) + 1);
  SP.typed = q.e.form.slice(0, SP.hint);
  SP.bad = false;
  SP.msg = SP.hint >= q.e.form.length ? '整個字都出來了，按「檢查」。' : '';
  renderQuiz();
}

function feedbackHTML(q) {
  const e = q.e;
  const sentence = text(e.ex).replace(keyRe(e.key), (m, a, b, c) => `${a}<b>${b}</b>${c}`);
  return `<div class="fb-w"><b>${text(e.w)}</b> <span class="word-p">${text(e.p)}</span>
      <span class="zhf">${text(e.zh)}</span></div>
    <div class="fb-ex">${sentence} ${sayBtn(e.ex, '播放例句')}</div>
    <div class="zhf fb-zh">${text(e.zhEx)}</div>`;
}

function renderQuizEnd() {
  const missed = Q.items.filter((q, i) => Q.missed.has(i));
  quiz.innerHTML = `<section class="qcard qend">
    <div class="qtype">Round over <em>本輪結束</em></div>
    <h2>這一輪做完了。</h2>
    ${missed.length ? `<p>下面這幾個字值得再看一次：</p>
      <ul class="endlist">${missed.map((q) => `
        <li><span class="w">${text(q.e.w)}</span>${sayBtn(q.e.w)}
          <span class="zhf">${text(q.e.zh)}</span></li>`).join('')}</ul>
      ${S.mode === 'self'
        ? `<div class="actions" style="justify-content:flex-start">
             <button class="btn again" id="markmissed">把這幾個標成「還不熟」</button></div>`
        : ''}`
    : `<p>這一輪每一題都第一次就答對了。</p>`}
  </section>
  <div class="actions"><button class="btn primary" id="qagain">Again 再來一輪</button></div>`;
}

// ------------------------------------------------------------------- chrome

function setMode(m, remember) {
  S.mode = TEACHER ? m : 'self';
  document.body.classList.toggle('mode-teach', S.mode === 'teach');
  document.body.classList.toggle('mode-self', S.mode === 'self');
  if (remember) store.set('mode', S.mode);

  $$('#modeseg button').forEach((b) =>
    b.setAttribute('aria-pressed', String(b.dataset.mode === S.mode)));

  // 自學 shows the Chinese; 教學 puts it back behind the chips.
  setAllZh(S.mode === 'self' ? store.get('zhSelf', true) !== false : false);

  if (S.mode !== 'self') { S.markf = 'all'; $('#markf').value = 'all'; }
  $('#teachtools').hidden = S.mode !== 'teach';
  $('#selftools').hidden = S.mode !== 'self';

  Q.key = '';            // the pool changed, so the round is no longer valid
  introHow();
  render();
}

/* The quiz takes the page: the cover and the contents list go, and it opens at
   the top with the first question in view. Going back to the list returns to
   the place in it you left. */
let listY = 0;

function setView(v) {
  const was = S.view;
  if (was === 'list' && v !== 'list') listY = window.scrollY;
  if (v !== 'practice') stopPlay();
  S.view = v;
  $$('#viewseg button').forEach((b) =>
    b.setAttribute('aria-pressed', String(b.dataset.view === v)));
  list.hidden = v !== 'list';
  quiz.hidden = v !== 'quiz';
  practice.hidden = v !== 'practice';
  // Practice and the quiz both take the page; practice also has no use for
  // the search or the filters.
  document.body.classList.toggle('view-solo', v !== 'list');
  document.body.classList.toggle('view-practice', v === 'practice');
  render();
  if (was !== v) window.scrollTo(0, v === 'list' ? listY : 0);
}

/* How far down the pinned bar and tools reach, so a scroll can stop below them
   rather than under them. */
const pinnedBottom = () => $('#tools').getBoundingClientRect().bottom;

function setOrder(o) {
  if (o === S.order) return;
  S.order = o;
  $$('#orderseg button').forEach((b) =>
    b.setAttribute('aria-pressed', String(b.dataset.order === o)));

  const az = $('#az');
  if (o === 'az') {
    ENTRIES.slice()
      .sort((a, b) => a.w.toLowerCase().localeCompare(b.w.toLowerCase()))
      .forEach((e) => {
        const L = e.w[0].toUpperCase();
        ($(`[data-letter="${L}"].words`, az) || $('[data-letter="A"].words', az)).appendChild(e.card);
      });
    $$('.sec').forEach((s) => { s.hidden = true; });
    az.hidden = false;
  } else {
    ENTRIES.forEach((e) => $(`[data-words="${e.group.id}"]`).appendChild(e.card));
    az.hidden = true;
    $$('.sec').forEach((s) => { s.hidden = false; });
  }
  applyFilter();
}

const zhToggle = $('#zhToggle');

function toggleCard(card, open) {
  const on = card.classList.toggle('open', open);
  $('.word-w', card).setAttribute('aria-expanded', String(on));
}

/* Sentences on tap is the default: a closed card is the term and its gloss on
   one or two lines, so 130 of them are a list you can scan rather than a
   scroll. The choice is a device setting, like the voice. */
function setFold(fold, remember) {
  S.fold = fold;
  document.body.classList.toggle('fold', fold);
  $$('#exseg button').forEach((b) =>
    b.setAttribute('aria-pressed', String((b.dataset.ex === 'fold') === fold)));
  if (remember) store.set('fold', fold);
  introHow();
}

/* The line under the intro says what a tap does, which depends on the mode
   and on whether sentences are folded. */
function introHow() {
  const el = $('#introHow');
  if (!el) return;
  const [en, zh] = S.mode === 'teach'
    ? (S.fold
      ? ['Tap a term for its example sentence and the Chinese.', '點詞彙可看例句與中文。']
      : ['Tap a card, or its 中, for the Chinese.', '點卡片或 中 可看中文。'])
    : (S.fold
      ? ['Tap a term to open its example sentence. The Chinese is on; switch it off with 中文 at the top to test yourself.',
         '點詞彙可展開例句。中文目前顯示；想自我測驗時，按上方「中文」關掉。']
      : ['The Chinese is on; switch it off with 中文 at the top to test yourself.',
         '中文目前顯示；想自我測驗時，按上方「中文」關掉。']);
  el.innerHTML = `${en}<span class="zh">${zh}</span>`;
}

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
}

function render() {
  if (S.view === 'quiz') renderQuiz();
  else if (S.view === 'list') applyFilter();
}

// ------------------------------------------------------------------- events

doc.addEventListener('click', (e) => {
  const t = e.target;

  // ---- speak
  const say = t.closest('[data-say]');
  if (say) {
    e.stopPropagation();
    stopPlay();
    const li = say.closest('#practice .line');
    speak(say.dataset.say, li ? lineVoice(li) : null);
    return;
  }

  // ---- Play all / Stop / Continue
  const pb = t.closest('[data-play]');
  if (pb) { playButton(pb.dataset.play); return; }

  // ---- a 中 chip opens just its own line
  const chip = t.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    const box = chip.closest('.word');
    if (box) toggleCard(box); else chip.closest('.zhw').classList.toggle('open');
    return;
  }

  // ---- 記住了 / 還不熟
  const mk = t.closest('.mk');
  if (mk) {
    e.stopPropagation();
    markWord(mk.closest('.word').dataset.id, mk.dataset.mark);
    return;
  }

  // ---- quiz
  const opt = t.closest('.opt');
  if (opt) {
    if (Q.solved) return;
    const k = Number(opt.dataset.opt);
    const q = Q.items[Q.i];
    Q.tried.add(k);
    if (q.opts[k].right) { Q.solved = true; speak(q.type === 'mean' ? q.e.w : q.e.ex); }
    else Q.missed.add(Q.i);
    renderQuiz();
    return;
  }
  if (t.closest('#qskip')) { Q.solved = true; Q.missed.add(Q.i); renderQuiz(); return; }
  if (t.closest('#qnext')) {
    // Q.tried holds option indices, so it belongs to one question and has to
    // go with it — otherwise question 2 opens with question 1's wrong answers
    // already crossed out.
    if (Q.i + 1 < Q.items.length) { Q.i++; Q.solved = false; Q.tried = new Set(); resetSpell(); }
    else Q.done = true;
    renderQuiz();
    const gap = quiz.getBoundingClientRect().top - (pinnedBottom() + 10);
    if (gap < 0) window.scrollBy(0, gap);
    return;
  }
  if (t.closest('#qagain')) { buildQuiz(); renderQuiz(); return; }
  if (t.closest('#spcheck')) { checkSpell(); return; }
  if (t.closest('#sphint')) { spellHint(); return; }
  if (t.closest('#markmissed')) {
    Q.items.filter((q, i) => Q.missed.has(i)).forEach((q) => { MARKS[q.e.id] = 'r'; });
    store.set('marks', MARKS);
    paintAllMarks(); markInfo();
    t.closest('#markmissed').textContent = '標好了';
    t.closest('#markmissed').disabled = true;
    return;
  }

  // ---- a practice line: uncover it (role-play), else open its Chinese
  const line = t.closest('#practice .line');
  if (line && line.classList.contains('yourturn')) { yourTurnDone(); return; }
  if (line) {
    if (document.body.classList.contains('cover-L')
        && line.classList.contains('who-L') && !line.classList.contains('shown')) {
      line.classList.add('shown');
      return;
    }
    line.classList.toggle('open');
    return;
  }

  // ---- anywhere else on a card opens its Chinese
  const card = t.closest('.word');
  if (card) toggleCard(card);
});

$$('#viewseg button').forEach((b) => b.addEventListener('click', () => setView(b.dataset.view)));
$$('#orderseg button').forEach((b) => b.addEventListener('click', () => { setOrder(b.dataset.order); applyFilter(); }));
$$('#exseg button').forEach((b) => b.addEventListener('click', () => setFold(b.dataset.ex === 'fold', true)));

$('#coverL').addEventListener('change', (e) => {
  document.body.classList.toggle('cover-L', e.target.checked);
  $$('#practice .line.shown').forEach((l) => l.classList.remove('shown'));
});

// A practice line is a tap target, so it answers Enter and Space as well.
practice.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('line')) {
    e.preventDefault();
    e.target.click();
  }
});

const filtBtn = $('#filtBtn');
filtBtn.addEventListener('click', () => {
  const open = $('#filters').hidden;
  $('#filters').hidden = !open;
  filtBtn.setAttribute('aria-expanded', String(open));
});

/* The pinned tools change height when Filter opens; anchors and the theme
   headings read it from here so a jump never lands under them. */
new ResizeObserver(() => {
  document.documentElement.style.setProperty('--tools-h', $('#tools').offsetHeight + 'px');
}).observe($('#tools'));
$$('#modeseg button').forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode, true)));

zhToggle.addEventListener('click', () => {
  const on = !document.body.classList.contains('zh-all');
  setAllZh(on);
  if (S.mode === 'self') store.set('zhSelf', on);
});

const q = $('#q');
/* A filter that shortens the list must not leave you scrolled past its end:
   bring the top of the results up under the pinned tools. */
function toResults() {
  const box = S.view === 'quiz' ? quiz : list;
  const gap = box.getBoundingClientRect().top - (pinnedBottom() + 10);
  if (gap < 0) window.scrollBy(0, gap);
}

q.addEventListener('input', () => { S.q = q.value; Q.key = ''; render(); toResults(); });
$('#qx').addEventListener('click', () => { q.value = ''; S.q = ''; Q.key = ''; render(); q.focus(); });

$('#themef').addEventListener('change', (e) => { S.theme = e.target.value; Q.key = ''; render(); toResults(); });
$('#markf').addEventListener('change', (e) => { S.markf = e.target.value; Q.key = ''; render(); toResults(); });

// ------------------------------------------------------------------- panel

const panel = $('#panel');
const panelBtn = $('#panelToggle');

function setPanel(open) {
  panel.hidden = !open;
  panelBtn.setAttribute('aria-expanded', String(open));
  if (open) markInfo();
}

panelBtn.addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));
$('#closepanel').addEventListener('click', () => setPanel(false));

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  store.set('voice', e.target.value);
  speak('Please read the divorce agreement before you sign it.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('The next hearing is on March 5.');
});
$('#rate').value = store.get('rate', '0.95');

$('#unteach').addEventListener('click', () => {
  TEACHER = false;
  store.set('teacher', false);
  $('#modeseg').hidden = true;
  $('#teacherflag').hidden = true;
  setMode('self', false);
  setPanel(false);
});

/* 重新開始: a reload is the real reset, but a teacher going straight from one
   client to the next should not lose the voice they picked. */
$('#fresh').addEventListener('click', () => {
  q.value = ''; S.q = '';
  S.theme = 'all'; $('#themef').value = 'all';
  setOrder('theme');
  $$('.word.open').forEach((c) => toggleCard(c, false));
  buildQuiz();
  setView('list');
  setPanel(false);
  if (canSpeak) speechSynthesis.cancel();
  window.scrollTo(0, 0);
});

/* Clearing the marks throws away the learner's own record, so it asks once. */
$('#clearmarks').addEventListener('click', () => {
  const ask = $('#clearask');
  if (ask.dataset.armed !== '1') {
    ask.dataset.armed = '1';
    ask.innerHTML = '<span class="warn">再按一次就會全部清除。</span>';
    setTimeout(() => { ask.dataset.armed = ''; ask.innerHTML = ''; }, 5000);
    return;
  }
  MARKS = {};
  store.set('marks', MARKS);
  ask.dataset.armed = ''; ask.innerHTML = '';
  paintAllMarks(); markInfo();
  if (S.markf !== 'all') { S.markf = 'all'; $('#markf').value = 'all'; }
  render();
});

// ------------------------------------------------------------------- nav

const navBtn = $('#navToggle');
const scrim = $('.nav-scrim');

function setNav(open) {
  document.body.classList.toggle('nav-open', open);
  navBtn.setAttribute('aria-expanded', String(open));
  scrim.hidden = !open;
}

navBtn.addEventListener('click', () => setNav(!document.body.classList.contains('nav-open')));
scrim.addEventListener('click', () => setNav(false));

$('#nav').addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  setNav(false);
  // A theme link is meaningless in the A–Z view or the quiz, so it takes you back.
  setView('list');
  setOrder('theme');
  if (S.theme !== 'all' && S.theme !== a.dataset.id) {
    S.theme = 'all'; $('#themef').value = 'all'; applyFilter();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  setNav(false);
  setPanel(false);
  stopPlay();
});

/* Which theme is on screen, for the contents list. Watching a band across the
   upper third rather than the whole viewport keeps the highlight from jumping
   between two headings while scrolling. */
const navLab = $('#navLab');

function markHere(id) {
  $$('#nav a').forEach((a) => {
    const on = a.dataset.id === id;
    a.classList.toggle('here', on);
    if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
  });
  // On a phone the contents list is hidden, so the button that opens it says
  // where you are instead: "02 Divorce" rather than "Themes".
  const i = LAW.groups.findIndex((g) => g.id === id);
  navLab.textContent = i < 0 ? 'Themes 主題' : `${num(i)} ${LAW.groups[i].en}`;
}

const spy = new IntersectionObserver((rows) => {
  rows.forEach((r) => {
    if (!r.isIntersecting) return;
    markHere(r.target.classList.contains('cover') ? null : r.target.dataset.id);
  });
}, { rootMargin: '-15% 0px -70% 0px' });

$$('.sec').forEach((s) => spy.observe(s));
spy.observe($('.cover'));

// ------------------------------------------------------------------- start

$('#modeseg').hidden = !TEACHER;
$('#teacherflag').hidden = !TEACHER;
setFold(store.get('fold', true) !== false, false);
setView('list');
setOrder('theme');
$$('#orderseg button').forEach((b) =>
  b.setAttribute('aria-pressed', String(b.dataset.order === 'theme')));
setMode(S.mode, false);
paintAllMarks();
markInfo();
