/* 把 words.js 的 WORDS 和 grammar.js 的 GRAMMAR 畫成同一頁。

   這一頁本來是兩頁，2026-08-21 合成一頁。合併之後的結構：

   - **SECTIONS 是兩半各自的插件。** 外殼（頂端列、年級頁籤、側欄、設定面板、
     朗讀、列印、遮字、打勾）只有一份；每一半提供自己的 nav、內容區塊、搜尋、
     練習，以及遮字的選項。要加第三半的話，就是再寫一個 SECTIONS 條目。

   - **兩半各自記住自己在第幾個年級。** 單字有七、八年級，文法也有七、八年級，
     但九年級兩邊都還沒有。切過去的時候沿用同一個年級（學生通常就是在同一個
     年級的兩半之間跳），只有那一半沒有這個年級時才退回它自己上次的年級。

   - **兩半都不重畫對方。** #doc 裡同時掛著兩半的 DOM，用 body 的 data-section
     決定顯示哪一個。所以切過去再切回來，捲動位置、攤開的答案、做到一半的小考
     都還在——老師常常是講到一半跳去另一半看一眼再跳回來。

   - **課次↔單元的對照表只有一份**，在 GRAMMAR 的 units[].lessons 上。單字那半
     不存副本，只用自己的課次代號去反查，所以兩邊不可能對不起來。

   網址錨點分兩個名字空間：#w/<課次id> 和 #g/<單元id>，另外 #g/for-<課次id>
   是「這一課的文法在哪個單元」。舊的兩個網址就是轉成這些形式送進來的。 */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // 引號也跳脫，每一句都會進到 data-say 屬性裡。
    .replace(/"/g, '&quot;');
}

/* 中文說明裡夾著的英文（dog → dogs、I → am）挑出來換成英文字體。
   規則：從一個英文字母開始，可以延伸到字母、數字、撇號、句點、連字號，
   中間允許空白、斜線與加號——'How many'、"it's"、'a / an' 會整段抓起來，
   而中文標點會自然結束它。 */
const EN_RUN = /[A-Za-z][A-Za-z0-9'’.\-]*(?:[ /+][A-Za-z0-9'’.\-]+)*/g;

function withEn(s) {
  return text(s).replace(EN_RUN, (m) => {
    const trimmed = m.replace(/\s+$/, '');
    return `<code>${trimmed}</code>${m.slice(trimmed.length)}`;
  });
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function sayBtn(sentence, label = '朗讀') {
  return `<button class="say" data-say="${text(sentence)}" title="${label}"
    aria-label="${label}">🔊</button>`;
}

// 打亂一份拷貝，不動原陣列——原陣列是資料檔的內容。
function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ------------------------------------------------------------------ 課次代號

/* 單字頁的課次 id 是從代號來的：'B1 GR' → 'b1-gr'、'主題 1' → 't1'。文法那半
   引用它時，七年級寫 'B1 GR'，八年級寫 '單字主題 1'——先把「單字」兩個字拿掉，
   再套同一條規則，兩本就都對得上。 */
function lessonAnchor(code) {
  const topic = code.replace(/^單字/, '').match(/^主題 (\d+)$/);
  if (topic) return `t${topic[1]}`;
  return code.toLowerCase().replace(/\s+/g, '-');
}

// ------------------------------------------------------------------ 打勾

/* 只在自學模式寫，key 是 section/grade/id。兩半分開存，互不覆蓋。
   舊的 jhs.* / jhg.* 是這一頁還分成兩頁時用的，讀一次搬過來，學生的進度
   不會因為合併而消失。 */
const MARKS = 'jh.known';
let marks = new Set();

function loadMarks() {
  const read = (k) => {
    try { return JSON.parse(localStorage.getItem(k) || '[]'); } catch (e) { return []; }
  };
  marks = new Set(read(MARKS));
  const old = read('jhs.known').map((k) => `words/${k}`)
    .concat(read('jhg.known').map((k) => `grammar/${k}`));
  if (old.length) {
    old.forEach((k) => marks.add(k));
    saveMarks();
    try {
      localStorage.removeItem('jhs.known');
      localStorage.removeItem('jhg.known');
    } catch (e) { /* 搬過來了就好，舊的清不掉也沒差 */ }
  }
}

function saveMarks() {
  try {
    localStorage.setItem(MARKS, JSON.stringify([...marks]));
  } catch (e) { /* 存不進去就算了，畫面上的勾還是對的 */ }
}
loadMarks();

// ------------------------------------------------------------------ 兩半

const SECTIONS = {
  words: {
    id: 'words',
    data: WORDS,
    navLabel: '課次',
    printNote: '印出來是一份單字講義：中譯和例句全部展開，小考不會印出來。',
    masks: [
      ['none', '全部顯示'],
      ['zh', '遮住中譯 — 看英文想意思'],
      ['en', '遮住英文 — 看中譯想單字'],
    ],
    maskTargets: { zh: '.w-zh, .w-zhex', en: '.w-word, .w-en' },
    itemSel: '.word',
    items: (g) => g.books.flatMap((b) => b.lessons),
    buildNav: buildWordsNav,
    buildDoc: buildWordsDoc,
    search: searchWords,
    how: [
      '右上角 ⚙ 裡可以把中譯或英文遮起來自己測，遮住的地方點一下就露出來。',
      '背熟的字按右邊的 ✓，之後可以只看還沒打勾的。',
      '每一課最後有一個小考。',
      '課次牌旁邊的「✎ 文法」會跳到文法那半的同一個主題。',
    ],
  },

  grammar: {
    id: 'grammar',
    data: GRAMMAR,
    navLabel: '單元',
    printNote: '印出來是一份文法講義：答案全部展開，練習不會印出來。',
    masks: [
      ['none', '全部顯示'],
      ['zh', '遮住句型的中譯 — 看英文想意思'],
      ['en', '遮住句型的英文 — 看中譯造句'],
      ['fix', '遮住正確寫法 — 自己先改改看'],
    ],
    maskTargets: { zh: '.pat-zh', en: '.pat-en', fix: '.mis-good .mis-text' },
    itemSel: '.unit',
    items: (g) => g.units,
    buildNav: buildGrammarNav,
    buildDoc: buildGrammarDoc,
    search: searchGrammar,
    how: [
      '每個單元先看「一句話重點」，再看核心規則和句型，',
      '最後把常見錯誤讀過一遍——那一區是這份講義真正的重點。',
      '右上角 ⚙ 裡可以把句型的中譯或正確寫法遮起來自己測。',
      '每個單元最後有一個練習，標題旁的 📚 課次牌可以跳到單字那半的同一課。',
    ],
  },
};

let section = SECTIONS.words;
// 每一半各自記住停在哪個年級。
const gradeOf = { words: WORDS.grades[0].id, grammar: GRAMMAR.grades[0].id };

const gradesOf = (sec) => sec.data.grades;
const currentGrade = (sec = section) =>
  gradesOf(sec).find((g) => g.id === gradeOf[sec.id]) || gradesOf(sec)[0];

// ------------------------------------------------------------------ 年級頁籤

function buildGradeTabs() {
  const grade = currentGrade();
  $('#grades').innerHTML = gradesOf(section).map((g) => {
    const n = section.id === 'words'
      ? `${section.items(g).reduce((a, l) => a + l.words.length, 0)} 字`
      : `${g.units.length} 單元`;
    return `
      <button class="grade-tab${g.id === grade.id ? ' is-on' : ''}${g.ready ? '' : ' is-soon'}"
              data-grade="${g.id}">
        <b>${text(g.zh)}</b><i>${g.ready ? n : '準備中'}</i>
      </button>`;
  }).join('');
}

function intro(grade, sec) {
  return `
    <section class="intro">
      <h1>${text(grade.zh)}${text(sec.data.label)}<span>${text(grade.label)}</span></h1>
      <p>${text(grade.source || sec.data.source)} · ${text(grade.note)}</p>
      <p class="how"><b>怎麼用：</b>${sec.how.join('')}</p>
    </section>`;
}

function soon(grade, sec) {
  return `
    <section class="soon">
      <h1>${text(grade.zh)}${text(sec.data.label)}還沒進來</h1>
      <p>${text(grade.note)}的講義 PDF 到了就會出現在這裡，做法和已經有的年級完全一樣。</p>
    </section>`;
}

// ------------------------------------------------------------------ 單字那半

function buildWordsNav(grade) {
  if (!grade.ready) return '';
  return grade.books.map((b) => `
    <p class="nav-book">${text(b.label)}<span> · ${text(b.term)}</span></p>
    ${b.lessons.map((l) => `
      <a class="nav-link" href="#w/${grade.id}/${l.id}" data-item="${l.id}">
        <em>${text(l.code.split(' ')[1])}</em>
        <span>${text(l.title)}</span>
        <i data-count="${l.id}"></i>
      </a>`).join('')}`).join('');
}

function wordRow(w, l, i, grade) {
  const key = `words/${grade.id}/${l.id}/${i}`;
  const known = marks.has(key);
  return `
    <li class="word${known ? ' is-known' : ''}" data-key="${key}" id="row-${l.id}-${i}">
      <span class="w-n">${i + 1}</span>

      <div class="w-main">
        <div class="w-word">${text(w.w)}${sayBtn(w.w, `朗讀 ${w.w}`)}<span
          class="w-pos">${text(w.pos)}</span></div>
        ${w.kk ? `<div class="w-kk">${text(w.kk)}</div>` : ''}
      </div>

      <div class="w-zh">${text(w.zh)}</div>

      <div class="w-ex">
        <div class="w-en">${text(w.en)}${sayBtn(w.en, '朗讀例句')}</div>
        <div class="w-zhex">${text(w.zhEx)}</div>
      </div>

      <button class="zh-chip" type="button">中</button>
      <button class="mark" type="button" aria-pressed="${known}"
              aria-label="標記為會了" title="會了">✓</button>
    </li>`;
}

// 這一課的文法在哪個單元？對照表只有 GRAMMAR 那一份。
function unitForLesson(gradeId, lessonId) {
  const g = GRAMMAR.grades.find((x) => x.id === gradeId);
  if (!g || !g.ready) return null;
  return g.units.find((u) => u.lessons.some((c) => lessonAnchor(c) === lessonId)) || null;
}

function buildWordsDoc(grade) {
  if (!grade.ready) return soon(grade, SECTIONS.words);
  return intro(grade, SECTIONS.words) + grade.books.map((b) => b.lessons.map((l) => {
    const unit = unitForLesson(grade.id, l.id);
    return `
      <section class="lesson" id="w-${l.id}" data-item="${l.id}">
        <div class="lesson-head">
          <span class="lesson-code">${text(l.code)}</span>
          <h2>${text(l.title)}</h2>
          <span class="lesson-count">${l.words.length} 字</span>
          ${unit ? `<a class="gram-link" href="#g/${grade.id}/${unit.id}"
            title="這一課的文法：${text(unit.title)}">✎ 文法</a>` : ''}
        </div>

        <p class="lesson-gram"><b>文法重點</b>${text(l.grammar)}</p>

        <ul class="words">${l.words.map((w, i) => wordRow(w, l, i, grade)).join('')}</ul>

        <button class="drill-open" data-quiz="${l.id}">📝 小考這一課 —
          ${text(l.title)}</button>
        <div class="drill-slot" data-slot="w-${l.id}"></div>
      </section>`;
  }).join('')).join('');
}

// ------------------------------------------------------------------ 文法那半

function buildGrammarNav(grade) {
  if (!grade.ready) return '';
  return `
    <p class="nav-book">${text(grade.zh)}<span> · ${grade.units.length} 個文法主題</span></p>
    ${grade.units.map((u) => `
      <a class="nav-link" href="#g/${grade.id}/${u.id}" data-item="${u.id}">
        <em>${text(u.code.replace('文法 ', ''))}</em>
        <span>${text(u.title)}</span>
        <i data-count="${u.id}"></i>
      </a>`).join('')}`;
}

function buildGrammarDoc(grade) {
  if (!grade.ready) return soon(grade, SECTIONS.grammar);
  return intro(grade, SECTIONS.grammar) + grade.units.map((u) => {
    const key = `grammar/${grade.id}/${u.id}`;
    const known = marks.has(key);
    return `
    <section class="unit${known ? ' is-known' : ''}" id="g-${u.id}"
             data-item="${u.id}" data-key="${key}">
      <div class="unit-head">
        <span class="unit-code">${text(u.code)}</span>
        <h2>${text(u.title)}</h2>
        <span class="unit-refs">${u.lessons.map((c) =>
          `<a class="ref" href="#w/${grade.id}/${lessonAnchor(c)}"
              title="到單字那半看 ${text(c)}">${text(c)}</a>`).join('')}</span>
        <button class="mark" type="button" aria-pressed="${known}"
                aria-label="標記為會了" title="會了">✓</button>
      </div>

      <p class="unit-key"><b>一句話重點</b>${withEn(u.key)}</p>

      <h3 class="sec-head"><span></span>核心規則</h3>
      <ul class="rules">${u.rules.map((r) => `<li>${withEn(r)}</li>`).join('')}</ul>

      <h3 class="sec-head"><span></span>句型對照</h3>
      <ul class="pats">${u.patterns.map((p) => `
        <li class="pat">
          <span class="pat-label">${text(p.label)}</span>
          <span class="pat-en">${text(p.en)}${sayBtn(p.en)}<button
            class="reveal" type="button">中</button></span>
          <span class="pat-zh">${text(p.zh)}</span>
        </li>`).join('')}</ul>

      <h3 class="sec-head"><span></span>常見錯誤</h3>
      <ul class="mistakes">${u.mistakes.map((m) => `
        <li class="mis">
          <div class="mis-line mis-bad">
            <span class="mis-mark">✕</span>
            <span class="mis-text">${text(m.bad)}</span>
            <button class="reveal" type="button">看答案</button>
          </div>
          <div class="mis-line mis-good">
            <span class="mis-mark">✓</span>
            <span class="mis-text">${text(m.good)}</span>${sayBtn(m.good)}
          </div>
          <p class="mis-why">${withEn(m.why)}</p>
        </li>`).join('')}</ul>

      <button class="drill-open" data-drill="${u.id}">📝 練習這個單元 —
        ${text(u.title)}</button>
      <div class="drill-slot" data-slot="g-${u.id}"></div>
    </section>`;
  }).join('');
}

// ------------------------------------------------------------------ 畫

function render() {
  buildGradeTabs();
  const parts = Object.values(SECTIONS).map((sec) => {
    const grade = currentGrade(sec);
    return {
      sec,
      nav: `<div class="sec-${sec.id}">${sec.buildNav(grade)}</div>`,
      doc: `<div class="sec-${sec.id}">${sec.buildDoc(grade)}</div>`,
    };
  });
  $('#nav').innerHTML = parts.map((p) => p.nav).join('');
  $('#doc').innerHTML = parts.map((p) => p.doc).join('');
  $('#navToggleLabel').textContent = section.navLabel;
  $('#printNote').textContent = section.printNote;
  buildMaskOptions();
  refreshCounts();
  applyOnlyUnknown();
  observeAll();
}

function buildMaskOptions() {
  $('#maskPick').innerHTML = section.masks
    .map(([v, label]) => `<option value="${v}">${text(label)}</option>`).join('');
  $('#maskPick').value = section.masks.some(([v]) => v === mask) ? mask : 'none';
}

/* 側欄旁邊的數字。單字是 3/28，文法是一個 ✓。教學模式沒有打勾這回事。 */
function refreshCounts() {
  const classMode = document.body.classList.contains('mode-class');
  Object.values(SECTIONS).forEach((sec) => {
    const grade = currentGrade(sec);
    if (!grade.ready) return;
    const root = $(`#nav .sec-${sec.id}`);
    if (!root) return;
    $$('[data-count]', root).forEach((node) => {
      const id = node.dataset.count;
      if (classMode) { node.textContent = ''; return; }
      if (sec.id === 'grammar') {
        node.textContent = marks.has(`grammar/${grade.id}/${id}`) ? '✓' : '';
        return;
      }
      const lesson = sec.items(grade).find((l) => l.id === id);
      if (!lesson) return;
      const done = lesson.words
        .filter((w, i) => marks.has(`words/${grade.id}/${id}/${i}`)).length;
      node.textContent = done ? `${done}/${lesson.words.length}` : '';
    });
  });
}

// ------------------------------------------------------------------ 朗讀

let voices = [];
let voice = null;
let rate = 0.9;

function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
  if (!voices.length) return;

  const saved = localStorage.getItem('jh.voice');
  voice = voices.find((v) => v.name === saved)
       || voices.find((v) => v.lang === 'en-US' && /Samantha|Ava|Allison|Google US/i.test(v.name))
       || voices.find((v) => v.lang === 'en-US')
       || voices[0];

  $('#voicePick').innerHTML = voices.map((v) =>
    `<option${v.name === voice.name ? ' selected' : ''}>${text(v.name)}</option>`).join('');
}

if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

function speak(sentence) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(sentence);
  if (voice) { u.voice = voice; u.lang = voice.lang; }
  u.rate = rate;
  speechSynthesis.speak(u);
}

// ------------------------------------------------------------------ 小考與練習

/* 兩半的題目都是從自己的資料現場抽的，不維護題庫。共用同一個 runQuestions
   跑題流程，差別只在 make 出來的題目長什麼樣。

   一題：{ ask, prompt, promptClass, optClass, answer, opts, after, say }
   答錯只是晃一下，題目留著，不扣分也不計時；最後只列出第一次答錯的。 */

const SPELLABLE = /^[a-z]{3,11}$/;

// 單字：聽字選中譯／看中譯選英文／看中譯拼單字
function makeQuiz(lesson, grade) {
  const pool = lesson.words.length >= 5 ? lesson.words : SECTIONS.words.items(grade)
    .flatMap((l) => l.words);

  const distractors = (w, field) => shuffle(pool)
    .filter((o) => o[field] !== w[field])
    // 同一課裡偶爾有兩個字中譯很接近，去重才不會出現兩個看起來都對的選項。
    .filter((o, i, arr) => arr.findIndex((x) => x[field] === o[field]) === i)
    .slice(0, 3);

  return shuffle(lesson.words).slice(0, Math.min(10, lesson.words.length)).map((w) => {
    const kinds = ['hear', 'zh2en'];
    if (SPELLABLE.test(w.w)) kinds.push('spell');
    const kind = kinds[Math.floor(Math.random() * kinds.length)];
    const after = `<b>${text(w.w)}</b> ${text(w.zh)}<br>${text(w.en)}${sayBtn(w.en, '朗讀例句')}`;

    if (kind === 'spell') {
      return { kind, word: w, ask: '看中譯，把單字拼出來', prompt: w.zh,
               promptClass: 'zh', answer: w.w, after };
    }
    const hear = kind === 'hear';
    const field = hear ? 'zh' : 'w';
    return {
      kind,
      word: w,
      ask: hear ? '聽一次，選出中譯' : '看中譯，選出英文',
      prompt: hear ? null : w.zh,
      promptClass: 'zh',
      say: hear ? w.w : null,
      answer: w[field],
      optClass: hear ? 'zh' : 'en',
      opts: shuffle([w, ...distractors(w, field)]).map((o) => o[field]),
      after,
    };
  });
}

// 文法：看錯句選正確寫法／選出為什麼／看中譯選英文句型
function makeDrill(unit) {
  const qs = [];

  /* 誘答一律取自同一個單元，所以一個只有三條常見錯誤的單元只湊得出三個選項。
     寧可出三選一，也不要整個單元的常見錯誤都不出題。

     去重是必要的，不是保險：講義裡本來就有兩條不同的錯句共用同一個正確寫法
     （八年級文法 5，`I want learn English.` 和 `I want to learning English.`
     改完都是 `I want to learn English.`）。不去重的話，那一題會出現兩個一模
     一樣的選項。 */
  const uniq = (list, skip) => [...new Set(list)].filter((x) => x !== skip);

  unit.mistakes.forEach((m) => {
    const after = `<b>${text(m.good)}</b><br>${withEn(m.why)}`;
    const goods = uniq(unit.mistakes.map((x) => x.good), m.good);
    if (goods.length >= 2) {
      qs.push({ ask: '這句話錯了，正確的寫法是？', prompt: m.bad, promptClass: 'en bad',
                optClass: 'en', answer: m.good,
                opts: shuffle([m.good, ...shuffle(goods).slice(0, 3)]), after });
    }
    const whys = uniq(unit.mistakes.map((x) => x.why), m.why);
    if (whys.length >= 2) {
      qs.push({ ask: '這句為什麼要這樣改？', prompt: `${m.bad} → ${m.good}`,
                promptClass: 'en', optClass: 'zh', answer: m.why,
                opts: shuffle([m.why, ...shuffle(whys).slice(0, 3)]), after });
    }
  });

  unit.patterns.forEach((p) => {
    const others = uniq(unit.patterns.map((x) => x.en), p.en);
    if (others.length < 2) return;
    qs.push({ ask: '這句中文，英文怎麼說？', prompt: p.zh, promptClass: 'zh',
              optClass: 'en', answer: p.en,
              opts: shuffle([p.en, ...shuffle(others).slice(0, 3)]),
              after: `<b>${text(p.en)}</b>（${text(p.label)}）<br>${text(p.zh)}` });
  });

  return shuffle(qs).slice(0, Math.min(8, qs.length));
}

function runQuestions(questions, slot, again) {
  if (!questions.length) return;
  const missed = [];
  let at = 0;

  const box = el(`
    <div class="drill">
      <div class="drill-bar">
        <span class="drill-at"></span>
        <span class="track"><span class="fill"></span></span>
        <button class="drill-x" type="button">收起來</button>
      </div>
      <div class="drill-body"></div>
    </div>`);
  slot.innerHTML = '';
  slot.append(box);

  const body = $('.drill-body', box);
  $('.drill-x', box).addEventListener('click', () => {
    speechSynthesis.cancel();
    slot.innerHTML = '';
  });

  const miss = (q) => { if (!missed.includes(q)) missed.push(q); };

  function progress() {
    $('.drill-at', box).textContent =
      `第 ${Math.min(at + 1, questions.length)} 題 / 共 ${questions.length} 題`;
    $('.fill', box).style.width = `${(at / questions.length) * 100}%`;
  }

  function settle(q) {
    body.insertAdjacentHTML('beforeend', `<p class="q-after">${q.after}</p>`);
    $$('.opt', body).forEach((b) => { b.disabled = true; });
    setTimeout(() => {
      at += 1;
      if (at >= questions.length) finish(); else ask();
    }, 1450);
  }

  function ask() {
    progress();
    const q = questions[at];

    if (q.kind === 'spell') {
      body.innerHTML = `
        <p class="q-ask">${text(q.ask)}</p>
        <p class="q-prompt ${q.promptClass}">${text(q.prompt)}</p>
        <div class="q-spell">
          <input type="text" autocomplete="off" autocapitalize="off" spellcheck="false"
                 aria-label="拼出這個單字">
          <button type="button">看看對不對</button>
          <p class="q-hint">${text(q.answer[0])}${'_'.repeat(q.answer.length - 1)}</p>
        </div>`;
      const input = $('.q-spell input', body);
      const check = () => {
        if (input.value.trim().toLowerCase() === q.answer.toLowerCase()) {
          input.disabled = true;
          settle(q);
        } else {
          miss(q);
          input.classList.remove('is-wrong');
          void input.offsetWidth;      // 重新觸發動畫，連錯兩次也要晃
          input.classList.add('is-wrong');
          input.select();
        }
      };
      $('.q-spell button', body).addEventListener('click', check);
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check(); });
      input.focus();
      return;
    }

    body.innerHTML = `
      <p class="q-ask">${text(q.ask)}</p>
      ${q.say
        ? '<button class="q-hear" type="button">🔊 再聽一次</button>'
        : `<p class="q-prompt ${q.promptClass}">${text(q.prompt)}</p>`}
      <ul class="q-opts">${q.opts.map((o) => `
        <li><button class="opt ${q.optClass}" type="button"
          data-opt="${text(o)}">${text(o)}</button></li>`).join('')}</ul>`;

    if (q.say) {
      speak(q.say);
      $('.q-hear', body).addEventListener('click', () => speak(q.say));
    }

    $$('.opt', body).forEach((btn) => btn.addEventListener('click', () => {
      if (btn.dataset.opt !== q.answer) {
        miss(q);
        btn.classList.add('is-wrong');
        btn.disabled = true;
        return;
      }
      btn.classList.add('is-right');
      settle(q);
    }));
  }

  function finish() {
    $('.fill', box).style.width = '100%';
    $('.drill-at', box).textContent = '做完了';
    body.innerHTML = `
      <div class="q-done">
        <h3>${missed.length ? '這幾題再看一次' : '全部答對了 🎉'}</h3>
        <p>${missed.length
          ? `${questions.length} 題裡有 ${missed.length} 題第一次沒答對。`
          : `${questions.length} 題都是第一次就答對。`}</p>
        ${missed.length ? `
          <div class="q-review">
            <p>再看一次</p>
            <ul>${missed.map((q) => `<li>${q.after}</li>`).join('')}</ul>
          </div>` : ''}
        <button class="q-again" type="button">再來一次</button>
      </div>`;
    $('.q-again', body).addEventListener('click', again);
  }

  ask();
  box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

// ------------------------------------------------------------------ 搜尋

function searchWords(grade, q, term) {
  const out = [];
  SECTIONS.words.items(grade).forEach((l) => l.words.forEach((w, i) => {
    if (w.w.toLowerCase().includes(q) || w.zh.includes(term)
        || w.en.toLowerCase().includes(q) || w.zhEx.includes(term)) {
      out.push({ tag: l.code, head: w.w, line: w.zh, go: `#w/${grade.id}/${l.id}`, row: `row-${l.id}-${i}` });
    }
  }));
  return out;
}

function searchGrammar(grade, q, term) {
  const out = [];
  grade.units.forEach((u) => {
    const add = (head, line) => out.push({ tag: u.code, head, line, go: `#g/${grade.id}/${u.id}` });
    if (u.title.toLowerCase().includes(q) || u.key.includes(term)) add('主題', u.title);
    u.rules.forEach((r) => { if (r.toLowerCase().includes(q)) add('核心規則', r); });
    u.patterns.forEach((p) => {
      if (p.en.toLowerCase().includes(q) || p.zh.includes(term)) add('句型', `${p.en} ${p.zh}`);
    });
    u.mistakes.forEach((m) => {
      if (m.bad.toLowerCase().includes(q) || m.good.toLowerCase().includes(q)
          || m.why.includes(term)) add('常見錯誤', `${m.bad} → ${m.good}`);
    });
  });
  return out;
}

function search(raw) {
  const term = raw.trim();
  const q = term.toLowerCase();
  const hits = $('#searchHits');
  const count = $('#searchCount');
  const grade = currentGrade();

  if (!term) {
    hits.innerHTML = '';
    count.textContent = `打字就會開始找，找的是${grade.zh}的${section.data.label}。`;
    return;
  }
  if (!grade.ready) {
    hits.innerHTML = '';
    count.textContent = `${grade.zh}的${section.data.label}還沒進來。`;
    return;
  }

  const found = section.search(grade, q, term);
  count.textContent = found.length
    ? `${grade.zh}${section.data.label}裡找到 ${found.length} 筆`
    : `${grade.zh}${section.data.label}裡沒有「${term}」`;

  hits.innerHTML = found.slice(0, 60).map((f) => `
    <button class="hit" type="button" data-go="${f.go}"
      ${f.row ? `data-row="${f.row}"` : ''}>
      <i>${text(f.tag)}</i><b>${text(f.head)}</b><span>${text(f.line)}</span>
    </button>`).join('');
}

// ------------------------------------------------------------------ 模式與遮字

function setMode(mode) {
  document.body.classList.toggle('mode-study', mode === 'study');
  document.body.classList.toggle('mode-class', mode === 'class');
  $('#modeStudy').classList.toggle('is-on', mode === 'study');
  $('#modeClass').classList.toggle('is-on', mode === 'class');
  $('#modeStudy').setAttribute('aria-pressed', String(mode === 'study'));
  $('#modeClass').setAttribute('aria-pressed', String(mode === 'class'));

  // 兩個模式的展開狀態不互通：切過去要是乾淨的。
  $$('.shown').forEach((n) => n.classList.remove('shown'));
  if (mode === 'class') {
    setMask('none');
    $('#maskPick').value = 'none';
  } else {
    document.body.classList.remove('reveal-all');
    $('#revealAll').checked = false;
  }
  refreshCounts();
  applyOnlyUnknown();
  localStorage.setItem('jh.mode', mode);
}

/* 遮字。直接改元素上的 class，不是靠 body——單獨露出來的那一個要能留著。
   只遮目前這一半，另一半切過去時會自己套用。 */
let mask = 'none';

function setMask(which) {
  mask = which;
  $$('.masked').forEach((n) => n.classList.remove('masked'));
  $$('.shown').forEach((n) => n.classList.remove('shown'));
  const sel = section.maskTargets[which];
  if (sel) {
    sel.split(',').map((s) => s.trim())
      .forEach((s) => $$(`#doc .sec-${section.id} ${s}`).forEach((n) => n.classList.add('masked')));
  }
}

function applyOnlyUnknown() {
  const on = $('#onlyUnknown').checked && document.body.classList.contains('mode-study');
  $$('#doc [data-key]').forEach((n) => {
    n.classList.toggle('is-hidden', on && marks.has(n.dataset.key));
  });
  if (mask !== 'none') setMask(mask);
}

// ------------------------------------------------------------------ 切換

function setSection(id, { keepGrade = true } = {}) {
  const next = SECTIONS[id];
  if (!next) return;

  // 兩半通常在同一個年級之間跳；那一半沒有這個年級才退回它自己上次的。
  const before = gradeOf[next.id];
  if (keepGrade && gradesOf(next).some((g) => g.id === gradeOf[section.id])) {
    gradeOf[next.id] = gradeOf[section.id];
  }
  const gradeChanged = gradeOf[next.id] !== before;

  section = next;
  document.body.dataset.section = id;
  $('#secWords').classList.toggle('is-on', id === 'words');
  $('#secGrammar').classList.toggle('is-on', id === 'grammar');
  $('#secWords').setAttribute('aria-pressed', String(id === 'words'));
  $('#secGrammar').setAttribute('aria-pressed', String(id === 'grammar'));
  $('#navToggleLabel').textContent = section.navLabel;
  $('#printNote').textContent = section.printNote;

  /* 只有這一半的年級真的變了才重畫。#doc 裡兩半的 DOM 是一起建的，重畫會把
     另一半做到一半的小考也清掉——單純切半邊不該有那個代價。但年級變了就非重畫
     不可，否則頁籤顯示八年級、內容還是七年級。 */
  if (gradeChanged) {
    render();
  } else {
    buildGradeTabs();
    buildMaskOptions();
    refreshCounts();
    applyOnlyUnknown();
  }
  /* 遮字跟著走。兩半的 'zh' 都是「把中文藏起來」，學生是刻意開的，切個半邊
     就被關掉會很煩；那一半沒有這個選項（文法的 'fix'）才退回不遮。 */
  const keepMask = section.masks.some(([v]) => v === mask) ? mask : 'none';
  $('#maskPick').value = keepMask;
  setMask(keepMask);
  search($('#searchInput').value);
  localStorage.setItem('jh.section', id);
}

function setGrade(id) {
  gradeOf[section.id] = id;
  render();
  setMask(document.body.classList.contains('mode-study') ? mask : 'none');
  search($('#searchInput').value);
  window.scrollTo(0, 0);
}

/* 跳到一個區塊，直接到位，不用動畫。

   為什麼不用 scrollIntoView：這一頁的 html 是 scroll-behavior: smooth，而深
   連結常常一跳就是好幾萬 px——動畫要跑好幾秒，而且捲到一半被瀏覽器的捲動還原
   打斷就停在半路。更麻煩的是換半邊／換年級會先重畫 #doc，舊的捲動位置可能還
   超過新文件的高度，scrollIntoView 在那個瞬間算出來的位置是錯的。

   所以：先把 scroll-behavior 暫時關掉，用 getBoundingClientRect 加上目前的
   scrollY 算出絕對位置（讀 rect 會強迫版面先算完），再一次捲到定位。上方要
   讓開黏在頂端的列，讓開多少直接讀該元素自己的 scroll-margin-top，不在這裡
   再寫一個數字。 */
function jumpTo(node) {
  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  const margin = parseFloat(getComputedStyle(node).scrollMarginTop) || 0;
  const top = node.getBoundingClientRect().top + window.scrollY - margin;
  window.scrollTo(0, Math.max(0, top));
  html.style.scrollBehavior = prev;
}

/* 網址錨點三種：
     #w/<年級>/<課次>   單字的一課
     #g/<年級>/<單元>   文法的一個單元
     #g/for-<課次>      這一課的文法在哪個單元（年級自己查）

   年級一定要寫進去：文法單元的 id 是 u1…u14，七年級和八年級都有 u1，少了年級
   就指不明白。舊的兩個網址是由它們的轉址頁補上年級之後送進來的。 */
function goto(hash) {
  let m = hash.match(/^#([wg])\/(g\d)\/(.+)$/);
  const forRef = hash.match(/^#g\/for-(.+)$/);
  const bare = hash.match(/^#([wg])\/?$/);
  let id, target, wantGrade = null;

  // 只指定半邊，不指定跳到哪裡——舊網址沒帶錨點時就是轉成這樣。
  if (bare) {
    const only = bare[1] === 'w' ? 'words' : 'grammar';
    if (only !== section.id) { setSection(only, { keepGrade: false }); render(); }
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
    return true;
  }

  if (forRef) {
    const lesson = forRef[1];
    // 先找目前單字停在哪個年級，找不到再掃其他年級。
    const order = [gradeOf.words, ...GRAMMAR.grades.map((g) => g.id)];
    const hit = order.map((gid) => ({ gid, u: unitForLesson(gid, lesson) })).find((x) => x.u);
    if (!hit) return false;
    id = 'grammar'; target = hit.u.id; wantGrade = hit.gid;
  } else if (m) {
    id = m[1] === 'w' ? 'words' : 'grammar';
    wantGrade = m[2];
    target = m[3];
  } else {
    return false;
  }

  const prefix = id === 'words' ? 'w' : 'g';

  /* 只有「年級」變了才重畫。單純換半邊不必：兩半的 DOM 本來就同時掛在 #doc
     上，換半邊只是換顯示哪一個——重畫會把另一半做到一半的小考也清掉。
     順序不能顛倒：先切半邊（keepGrade: false，所以它不會動到年級），再改年級
     並重畫，否則 setSection 會拿著已經改過的年級去比對，以為沒變而不重畫。 */
  const gradeChanged = wantGrade && wantGrade !== gradeOf[id];
  if (id !== section.id) setSection(id, { keepGrade: false });
  if (gradeChanged) {
    gradeOf[id] = wantGrade;
    render();
  }

  const node = document.getElementById(`${prefix}-${target}`);
  if (node) jumpTo(node);
  return !!node;
}

// ------------------------------------------------------------------ 事件

document.addEventListener('click', (e) => {
  const say = e.target.closest('.say, .q-hear');
  if (say && say.dataset.say) { speak(say.dataset.say); return; }

  // 教學模式的「中」「看答案」，和自學模式被遮住的地方，都是點一下露出來。
  const chip = e.target.closest('.zh-chip, .reveal');
  if (chip) { chip.closest('.word, .pat, .mis').classList.add('shown'); return; }

  const masked = e.target.closest('.masked');
  if (masked) { masked.classList.remove('masked'); return; }

  const mark = e.target.closest('.mark');
  if (mark) {
    const item = mark.closest('[data-key]');
    const on = mark.getAttribute('aria-pressed') !== 'true';
    mark.setAttribute('aria-pressed', String(on));
    item.classList.toggle('is-known', on);
    if (on) marks.add(item.dataset.key); else marks.delete(item.dataset.key);
    saveMarks();
    refreshCounts();
    if ($('#onlyUnknown').checked && on) item.classList.add('is-hidden');
    return;
  }

  const quiz = e.target.closest('[data-quiz]');
  if (quiz) {
    const grade = currentGrade(SECTIONS.words);
    const lesson = SECTIONS.words.items(grade).find((l) => l.id === quiz.dataset.quiz);
    const slot = $(`[data-slot="w-${lesson.id}"]`);
    const go = () => runQuestions(makeQuiz(lesson, grade), slot, go);
    go();
    return;
  }

  const drill = e.target.closest('[data-drill]');
  if (drill) {
    const unit = currentGrade(SECTIONS.grammar).units.find((u) => u.id === drill.dataset.drill);
    const slot = $(`[data-slot="g-${unit.id}"]`);
    const go = () => runQuestions(makeDrill(unit), slot, go);
    go();
    return;
  }

  const tab = e.target.closest('[data-grade]');
  if (tab) { setGrade(tab.dataset.grade); return; }

  const hit = e.target.closest('[data-go]');
  if (hit) {
    goto(hit.dataset.go);
    if (hit.dataset.row) {
      const row = document.getElementById(hit.dataset.row);
      if (row) {
        row.scrollIntoView({ block: 'center', behavior: 'smooth' });
        row.classList.add('shown');
        $$('.masked', row).forEach((n) => n.classList.remove('masked'));
      }
    }
    return;
  }

  // 頁內的 ✎ 文法 / 📚 課次牌，和側欄的連結
  const jump = e.target.closest('a[href^="#"]');
  if (jump) {
    e.preventDefault();
    const hash = jump.getAttribute('href');
    if (goto(hash)) history.replaceState(null, '', hash);
    document.body.classList.remove('nav-open');
    return;
  }

  if (e.target.closest('.nav-scrim')) document.body.classList.remove('nav-open');
});

$('#navToggle').addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  $('#navToggle').setAttribute('aria-expanded', String(open));
});

$('#searchToggle').addEventListener('click', () => {
  const box = $('#search');
  box.hidden = !box.hidden;
  $('#searchToggle').setAttribute('aria-expanded', String(!box.hidden));
  if (!box.hidden) { search(''); $('#searchInput').focus(); }
});
$('#searchInput').addEventListener('input', (e) => search(e.target.value));

$('#secWords').addEventListener('click', () => setSection('words'));
$('#secGrammar').addEventListener('click', () => setSection('grammar'));
$('#modeStudy').addEventListener('click', () => setMode('study'));
$('#modeClass').addEventListener('click', () => setMode('class'));

$('#panelToggle').addEventListener('click', () => {
  const p = $('#panel');
  p.hidden = !p.hidden;
  $('#panelToggle').setAttribute('aria-expanded', String(!p.hidden));
  if (!p.hidden) $('#marksNote').textContent = `目前打勾 ${marks.size} 個。`;
});
$('#panelClose').addEventListener('click', () => {
  $('#panel').hidden = true;
  $('#panelToggle').setAttribute('aria-expanded', 'false');
});

$('#revealAll').addEventListener('change', (e) => {
  document.body.classList.toggle('reveal-all', e.target.checked);
  document.body.classList.toggle('zh-all', e.target.checked);
});

$('#maskPick').addEventListener('change', (e) => setMask(e.target.value));
$('#onlyUnknown').addEventListener('change', applyOnlyUnknown);

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  localStorage.setItem('jh.voice', e.target.value);
  speak('This is the voice for this page.');
});

$('#rate').addEventListener('change', (e) => {
  rate = Number(e.target.value);
  localStorage.setItem('jh.rate', e.target.value);
});

$('#printBtn').addEventListener('click', () => { $('#panel').hidden = true; window.print(); });

$('#clearMarks').addEventListener('click', () => {
  marks.clear();
  saveMarks();
  $$('#doc [data-key]').forEach((n) => {
    n.classList.remove('is-known', 'is-hidden');
    const mk = $('.mark', n);
    if (mk) mk.setAttribute('aria-pressed', 'false');
  });
  refreshCounts();
  $('#marksNote').textContent = '清掉了。';
});

// 教學模式的「換下一個學生」：不是清紀錄（本來就沒存），是把畫面收乾淨。
$('#resetClass').addEventListener('click', () => {
  speechSynthesis.cancel();
  $$('.shown').forEach((n) => n.classList.remove('shown'));
  $$('.drill-slot').forEach((s) => { s.innerHTML = ''; });
  document.body.classList.remove('reveal-all', 'zh-all');
  $('#revealAll').checked = false;
  $('#panel').hidden = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  $('#panel').hidden = true;
  $('#search').hidden = true;
  document.body.classList.remove('nav-open');
  $('#searchToggle').setAttribute('aria-expanded', 'false');
  $('#panelToggle').setAttribute('aria-expanded', 'false');
});

// 側欄跟著捲動高亮，用 IntersectionObserver 而不是 scroll 事件——七年級單字
// 那半有四百列，用 scroll 事件算位置會卡。
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const id = en.target.dataset.item;
    $$(`#nav .sec-${section.id} .nav-link`)
      .forEach((a) => a.classList.toggle('is-here', a.dataset.item === id));
  });
}, { rootMargin: '-20% 0px -70% 0px' });

function observeAll() {
  $$('#doc .lesson, #doc .unit').forEach((s) => spy.observe(s));
}

// ------------------------------------------------------------------ 起手式

const savedRate = localStorage.getItem('jh.rate');
if (savedRate) { rate = Number(savedRate); $('#rate').value = savedRate; }

const savedSection = localStorage.getItem('jh.section');
if (SECTIONS[savedSection]) setSection(savedSection, { keepGrade: false });

render();
setMode(localStorage.getItem('jh.mode') === 'class' ? 'class' : 'study');

if (location.hash) goto(location.hash);
