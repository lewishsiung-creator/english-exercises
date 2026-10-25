/* Fab English — renderer.

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
   content. The headword is the id: it is unique across all 288 and stable, so
   a mark saved last week still points at the right word. */
const ENTRIES = [];

FAB.groups.forEach((g, gi) => {
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
      const v = localStorage.getItem('fe.' + k);
      if (v == null) return d;
      // The first version of this page wrote raw strings rather than JSON, so
      // a value left by it will not parse. Hand it back as it was found.
      try { return JSON.parse(v); } catch (e) { return v; }
    } catch (e) { return d; }
  },
  set(k, v) { try { localStorage.setItem('fe.' + k, JSON.stringify(v)); } catch (e) { /* private mode */ } },
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
};

let MARKS = store.get('marks', {});     // headword -> 'k' (記住了) | 'r' (還不熟); 自學 only

// ------------------------------------------------------------------- build

function buildNav() {
  return `
  <nav class="toc" aria-label="Themes 主題">
    <p class="toc-head">Themes 主題</p>
    <ul>
      ${FAB.groups.map((g, i) => `
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
    <p class="kicker">半導體廠常用英文</p>
    <h1>
      <span class="en">Fab English</span>
      <span class="zh">廠內常用英文單字 288</span>
    </h1>
    <p class="intro">${text(FAB.intro.en)}<span class="zh">${text(FAB.intro.zh)}</span></p>
  </header>`;
}

function buildTools() {
  return `
  <div class="tools">
    <div class="views" id="viewseg" role="group" aria-label="View 檢視">
      <button data-view="list">Words<em>單字表</em></button>
      <button data-view="quiz">Quiz<em>測驗</em></button>
    </div>

    <div class="search-box">
      <span class="mag" aria-hidden="true">🔍</span>
      <!-- type="text", not "search": the native search field draws its own
           clear button, which would sit next to ours. -->
      <input id="q" type="text" autocomplete="off" spellcheck="false"
             aria-label="Search the words 搜尋單字"
             placeholder="Search English or 中文…">
      <button class="search-x" id="qx" hidden aria-label="Clear the search">✕</button>
    </div>

    <select id="themef" class="sm" aria-label="Theme 主題">
      <option value="all">Every theme 全部主題</option>
      ${FAB.groups.map((g, i) => `<option value="${g.id}">${num(i)} ${text(g.zh)}</option>`).join('')}
    </select>

    <select id="markf" class="sm self-only" aria-label="Marks 標記">
      <option value="all">All words 全部的字</option>
      <option value="review">還不熟的</option>
      <option value="new">還沒標記的</option>
      <option value="known">記住了的</option>
    </select>

    <div class="views" id="orderseg" role="group" aria-label="Order 排序">
      <button data-order="theme">By theme<em>依主題</em></button>
      <button data-order="az">A–Z<em>字母</em></button>
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
      <span class="word-w">${text(e.w)}</span>
      <span class="word-p">${text(e.p)}</span>
      <button class="zh-chip" aria-label="Show the Chinese for ${text(e.w)}">中</button>
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
      <span class="sec-count">${n} words · ${n} 個字</span>
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
    The word list is the plant's own vocabulary sheet, in its own wording. The
    example sentences and their 中譯 were written for this page and are not
    part of it.
    <span class="zh">單字與中文釋義來自廠內單字表原文；例句與中譯為本頁另行撰寫，非原件內容。</span>
  </p>`;
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
FAB.groups.forEach((g, i) => list.appendChild(el(buildSection(g, i))));
list.appendChild(el(buildAz()));
list.appendChild(el(`
  <p class="nothing" hidden>
    No word matches that.
    <span class="zh">沒有符合的單字。</span>
  </p>`));

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
    : `還沒有標記。在單字表上按「記住了」或「還不熟」就會記在這台裝置上。
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

  const note = $('#qnote');
  const filtered = term || S.theme !== 'all' || (S.mode === 'self' && S.markf !== 'all');
  note.hidden = !filtered;
  if (filtered) {
    note.innerHTML = `${keep.size} ${keep.size === 1 ? 'word' : 'words'}
      <span class="zh">符合 ${keep.size} 個字</span>`;
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
if (canSpeak) speechSynthesis.onvoiceschanged = loadVoices;

function speak(sentence) {
  if (!canSpeak) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(sentence);
  if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = 'en-US'; }
  u.rate = Number($('#rate').value);
  // Safari drops an utterance queued in the same tick as cancel().
  setTimeout(() => speechSynthesis.speak(u), 0);
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
    quiz.innerHTML = `<p class="nothing">Not enough words here to make a quiz.
      <span class="zh">這個範圍的字太少，出不了題。換個主題或清掉搜尋。</span></p>`;
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
  render();
}

function setView(v) {
  S.view = v;
  $$('#viewseg button').forEach((b) =>
    b.setAttribute('aria-pressed', String(b.dataset.view === v)));
  list.hidden = v !== 'list';
  quiz.hidden = v !== 'quiz';
  $('#orderseg').hidden = v !== 'list';
  render();
}

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

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
}

function render() {
  if (S.view === 'quiz') renderQuiz(); else applyFilter();
}

// ------------------------------------------------------------------- events

doc.addEventListener('click', (e) => {
  const t = e.target;

  // ---- speak
  const say = t.closest('[data-say]');
  if (say) { e.stopPropagation(); speak(say.dataset.say); return; }

  // ---- a 中 chip opens just its own line
  const chip = t.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    (chip.closest('.word') || chip.closest('.zhw')).classList.toggle('open');
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
    window.scrollTo({ top: quiz.offsetTop - 80, behavior: 'smooth' });
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

  // ---- anywhere else on a card opens its Chinese
  const card = t.closest('.word');
  if (card) card.classList.toggle('open');
});

$$('#viewseg button').forEach((b) => b.addEventListener('click', () => setView(b.dataset.view)));
$$('#orderseg button').forEach((b) => b.addEventListener('click', () => setOrder(b.dataset.order)));
$$('#modeseg button').forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode, true)));

zhToggle.addEventListener('click', () => {
  const on = !document.body.classList.contains('zh-all');
  setAllZh(on);
  if (S.mode === 'self') store.set('zhSelf', on);
});

const q = $('#q');
q.addEventListener('input', () => { S.q = q.value; Q.key = ''; render(); });
$('#qx').addEventListener('click', () => { q.value = ''; S.q = ''; Q.key = ''; render(); q.focus(); });

$('#themef').addEventListener('change', (e) => { S.theme = e.target.value; Q.key = ''; render(); });
$('#markf').addEventListener('change', (e) => { S.markf = e.target.value; Q.key = ''; render(); });

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
  speak('The lot goes to lithography after cleaning.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('Please check the number before you sign.');
});
$('#rate').value = store.get('rate', '0.95');

$('#exHide').addEventListener('change', (e) => {
  document.body.classList.toggle('no-ex', e.target.checked);
});

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
  $$('.word.open').forEach((c) => c.classList.remove('open'));
  document.body.classList.remove('no-ex');
  $('#exHide').checked = false;
  buildQuiz();
  setView('list');
  setPanel(false);
  if (canSpeak) speechSynthesis.cancel();
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
});

/* Which theme is on screen, for the contents list. Watching a band across the
   upper third rather than the whole viewport keeps the highlight from jumping
   between two headings while scrolling. */
const spy = new IntersectionObserver((rows) => {
  rows.forEach((r) => {
    if (!r.isIntersecting) return;
    const id = r.target.dataset.id;
    $$('#nav a').forEach((a) => a.classList.toggle('here', a.dataset.id === id));
  });
}, { rootMargin: '-15% 0px -70% 0px' });

$$('.sec').forEach((s) => spy.observe(s));

// ------------------------------------------------------------------- start

$('#modeseg').hidden = !TEACHER;
$('#teacherflag').hidden = !TEACHER;
setView('list');
setOrder('theme');
$$('#orderseg button').forEach((b) =>
  b.setAttribute('aria-pressed', String(b.dataset.order === 'theme')));
setMode(S.mode, false);
paintAllMarks();
markInfo();
