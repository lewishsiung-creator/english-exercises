/* 把 content.js 的 COURSE 畫出來，並接上兩個模式、遮字、朗讀、搜尋與小考。

   幾個看程式碼時要先知道的事：

   - 模式只是 body 上的 class（mode-study / mode-class）。切換不重畫單字表，
     因為顯示與否全部交給 CSS 決定——重畫的話捲動位置會跳掉，而老師常常是
     講到一半才切過去。
   - 「藏中文」有兩套機制，共用同一個 .shown：教學模式的「中」chip，和自學模式
     的遮字色塊。兩者不會同時開（遮字的 select 只在自學模式出現），所以共用
     不會打架。
   - 小考題目是現場從該課的 words 抽的，不另外維護題庫。誘答選項優先在同一課
     裡找，同一課不夠（第一冊 GR 只有四個字）才擴大到整個年級，否則四個選項
     會湊不齊。
   - 只有自學模式寫 localStorage，而且只寫「哪些字打過勾」。教學模式什麼都不
     存：Lewis 一台筆電帶好幾個學生，重新整理必須是乾淨的一堂課。 */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // 引號也跳脫，例句裡有彎引號，而且每一句都會進到 data-say 屬性裡。
    .replace(/"/g, '&quot;');
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

// 打亂一份拷貝，不動原陣列——原陣列是 content.js 的資料。
function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ------------------------------------------------------------------ 狀態

const grades = COURSE.grades;
let grade = grades[0];

// 每個年級的字攤平成一張表，搜尋和小考的誘答都從這裡拿。
function flatten(g) {
  const out = [];
  g.books.forEach((b) => b.lessons.forEach((l) => l.words.forEach((w, i) => {
    out.push({ ...w, book: b, lesson: l, idx: i, key: `${g.id}/${l.id}/${i}` });
  })));
  return out;
}
grades.forEach((g) => { g.flat = flatten(g); });

/* 「會了」的紀錄。只在自學模式寫，key 是 grade/lesson/index——用索引而不是
   單字本身，因為 how much 在兩課都出現，用單字當 key 會兩邊一起打勾。 */
const MARKS = 'jhs.known';
let marks = new Set();
try {
  marks = new Set(JSON.parse(localStorage.getItem(MARKS) || '[]'));
} catch (e) { /* 隱私模式或壞掉的值：當作沒有紀錄，不要讓整頁掛掉 */ }

function saveMarks() {
  try {
    localStorage.setItem(MARKS, JSON.stringify([...marks]));
  } catch (e) { /* 存不進去就算了，畫面上的勾還是對的 */ }
}

// ------------------------------------------------------------------ 畫年級

function buildGradeTabs() {
  $('#grades').innerHTML = grades.map((g) => `
    <button class="grade-tab${g.id === grade.id ? ' is-on' : ''}${g.ready ? '' : ' is-soon'}"
            data-grade="${g.id}">
      <b>${text(g.zh)}</b><i>${g.ready ? `${g.flat.length} 字` : '準備中'}</i>
    </button>`).join('');
}

function buildNav() {
  if (!grade.ready) { $('#nav').innerHTML = ''; return; }

  $('#nav').innerHTML = grade.books.map((b) => `
    <p class="nav-book">${text(b.label)}<span> · ${text(b.term)}</span></p>
    ${b.lessons.map((l) => `
      <a class="nav-link" href="#${l.id}" data-lesson="${l.id}">
        <em>${text(l.code.split(' ')[1])}</em>
        <span>${text(l.title)}</span>
        <i data-count="${l.id}"></i>
      </a>`).join('')}`).join('');

  refreshCounts();
}

function wordRow(w, l, i) {
  const key = `${grade.id}/${l.id}/${i}`;
  const known = marks.has(key);
  return `
    <li class="word${known ? ' is-known' : ''}" data-key="${key}" id="w-${l.id}-${i}">
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

function buildDoc() {
  const doc = $('#doc');

  if (!grade.ready) {
    doc.innerHTML = `
      <section class="soon">
        <h1>${text(grade.zh)}還沒進來</h1>
        <p>${text(grade.note)}的講義 PDF 到了就會出現在這裡，做法和七年級完全一樣，一樣可以遮字自測、一樣每課附小考。</p>
      </section>`;
    return;
  }

  doc.innerHTML = `
    <section class="intro">
      <h1>${text(grade.zh)}<span>${text(grade.label)}</span></h1>
      <p>${text(grade.source || COURSE.source)} · ${text(grade.note)}</p>
      <p class="how"><b>怎麼用：</b>${[
        '右上角 ⚙ 裡可以把中譯或英文遮起來自己測，遮住的地方點一下就露出來。',
        '背熟的字按右邊的 ✓，之後可以只看還沒打勾的。',
        '每一課最後有一個小考。',
        grade.grammarHref ? '每一課標題旁的「✎ 文法」可以跳到文法頁的同一個主題。' : '',
      ].join('')}</p>
    </section>

    ${grade.books.map((b) => b.lessons.map((l) => `
      <section class="lesson" id="${l.id}" data-lesson="${l.id}">
        <div class="lesson-head">
          <span class="lesson-code">${text(l.code)}</span>
          <h2>${text(l.title)}</h2>
          <span class="lesson-count">${l.words.length} 字</span>
          ${grade.grammarHref ? `<a class="gram-link"
            href="${grade.grammarHref}#for-${l.id}"
            title="到文法頁看這一課的文法">✎ 文法</a>` : ''}
        </div>

        <p class="lesson-gram"><b>文法重點</b>${text(l.grammar)}</p>

        <ul class="words">${l.words.map((w, i) => wordRow(w, l, i)).join('')}</ul>

        <button class="quiz-open" data-quiz="${l.id}">📝 小考這一課 —
          ${text(l.title)}</button>
        <div class="quiz-slot" data-slot="${l.id}"></div>
      </section>`).join('')).join('')}`;

  applyOnlyUnknown();
}

function render() {
  buildGradeTabs();
  buildNav();
  buildDoc();
  window.scrollTo(0, 0);
}

// 側欄每課旁邊的 3/28。教學模式沒有打勾這回事，就不顯示。
function refreshCounts() {
  const classMode = document.body.classList.contains('mode-class');
  $$('#nav [data-count]').forEach((node) => {
    const id = node.dataset.count;
    const lesson = grade.books.flatMap((b) => b.lessons).find((l) => l.id === id);
    if (!lesson) return;
    const done = lesson.words.filter((w, i) => marks.has(`${grade.id}/${id}/${i}`)).length;
    node.textContent = classMode || !done ? '' : `${done}/${lesson.words.length}`;
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

  const saved = localStorage.getItem('jhs.voice');
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

// ------------------------------------------------------------------ 小考

/* 一題長這樣：
     { kind: 'hear' | 'zh2en' | 'spell', word, opts?, answer }
   hear   聽單字選中譯   —— 所有字都出得了題
   zh2en  看中譯選英文   —— 所有字都出得了題
   spell  看中譯拼單字   —— 只給單一個字、長度 3–11 的純字母，片語不出
   答錯只是晃一下，題目留著，不扣分也不計時；分數不給學生看，最後只列出
   「第一次答錯的字」讓他回去再看一次。 */

const SPELLABLE = /^[a-z]{3,11}$/;

function makeQuiz(lesson) {
  const pool = lesson.words.length >= 5 ? lesson.words : grade.flat;

  const distractors = (w, field) => shuffle(pool)
    .filter((o) => o[field] !== w[field])
    // 同一課裡偶爾有兩個字中譯很接近，去重才不會出現兩個看起來都對的選項。
    .filter((o, i, arr) => arr.findIndex((x) => x[field] === o[field]) === i)
    .slice(0, 3);

  return shuffle(lesson.words).slice(0, Math.min(10, lesson.words.length)).map((w) => {
    const kinds = ['hear', 'zh2en'];
    if (SPELLABLE.test(w.w)) kinds.push('spell');
    const kind = kinds[Math.floor(Math.random() * kinds.length)];

    if (kind === 'spell') return { kind, word: w, answer: w.w };
    const field = kind === 'hear' ? 'zh' : 'w';
    return {
      kind,
      word: w,
      answer: w[field],
      opts: shuffle([w, ...distractors(w, field)]).map((o) => o[field]),
    };
  });
}

function runQuiz(lesson, slot) {
  const questions = makeQuiz(lesson);
  const missed = [];
  let at = 0;

  const box = el(`
    <div class="quiz">
      <div class="quiz-bar">
        <span class="quiz-at"></span>
        <span class="track"><span class="fill"></span></span>
        <button class="quiz-x" type="button">收起來</button>
      </div>
      <div class="quiz-body"></div>
    </div>`);
  slot.innerHTML = '';
  slot.append(box);

  const body = $('.quiz-body', box);
  $('.quiz-x', box).addEventListener('click', () => {
    speechSynthesis.cancel();
    slot.innerHTML = '';
  });

  function progress() {
    $('.quiz-at', box).textContent = `第 ${Math.min(at + 1, questions.length)} 題 / 共 ${questions.length} 題`;
    $('.fill', box).style.width = `${(at / questions.length) * 100}%`;
  }

  function next() {
    at += 1;
    if (at >= questions.length) return finish();
    return ask();
  }

  // 第一次就答對才算過；答錯的字會被記下來，最後列出來。
  function wrong(q) {
    if (!missed.includes(q.word)) missed.push(q.word);
  }

  function afterLine(q) {
    return `<p class="q-after"><b>${text(q.word.w)}</b> ${text(q.word.zh)}<br>
      ${text(q.word.en)}${sayBtn(q.word.en, '朗讀例句')}</p>`;
  }

  function settle(q) {
    body.insertAdjacentHTML('beforeend', afterLine(q));
    $$('.opt', body).forEach((b) => { b.disabled = true; });
    setTimeout(next, 1150);
  }

  function ask() {
    progress();
    const q = questions[at];

    if (q.kind === 'spell') {
      const first = q.answer[0];
      body.innerHTML = `
        <p class="q-ask">看中譯，把單字拼出來</p>
        <p class="q-prompt">${text(q.word.zh)}</p>
        <div class="q-spell">
          <input type="text" autocomplete="off" autocapitalize="off" spellcheck="false"
                 aria-label="拼出這個單字">
          <button type="button">看看對不對</button>
          <p class="q-hint">${text(first)}${'_'.repeat(q.answer.length - 1)}</p>
        </div>`;

      const input = $('.q-spell input', body);
      const check = () => {
        if (input.value.trim().toLowerCase() === q.answer.toLowerCase()) {
          input.disabled = true;
          settle(q);
        } else {
          wrong(q);
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

    const hear = q.kind === 'hear';
    body.innerHTML = `
      <p class="q-ask">${hear ? '聽一次，選出中譯' : '看中譯，選出英文'}</p>
      ${hear
        ? '<button class="q-hear" type="button">🔊 再聽一次</button>'
        : `<p class="q-prompt">${text(q.word.zh)}</p>`}
      <ul class="q-opts">
        ${q.opts.map((o) => `<li><button class="opt${hear ? '' : ' en'}" type="button"
          data-opt="${text(o)}">${text(o)}</button></li>`).join('')}
      </ul>`;

    if (hear) {
      speak(q.word.w);
      $('.q-hear', body).addEventListener('click', () => speak(q.word.w));
    }

    $$('.opt', body).forEach((btn) => btn.addEventListener('click', () => {
      if (btn.dataset.opt === q.answer) {
        btn.classList.add('is-right');
        settle(q);
      } else {
        wrong(q);
        btn.classList.add('is-wrong');
        btn.disabled = true;
      }
    }));
  }

  function finish() {
    $('.fill', box).style.width = '100%';
    $('.quiz-at', box).textContent = '做完了';
    body.innerHTML = `
      <div class="q-done">
        <h3>${missed.length ? '這幾個字再看一次' : '整課都答對了 🎉'}</h3>
        <p>${missed.length
          ? `${questions.length} 題裡有 ${missed.length} 個字第一次沒答對。`
          : `${questions.length} 題都是第一次就答對。`}</p>
        ${missed.length ? `
          <div class="q-review">
            <p>再看一次</p>
            <ul>${missed.map((w) => `<li><b>${text(w.w)}</b>${text(w.zh)}
              ${sayBtn(w.w, `朗讀 ${w.w}`)}</li>`).join('')}</ul>
          </div>` : ''}
        <button class="q-again" type="button">再考一次</button>
      </div>`;
    $('.q-again', body).addEventListener('click', () => runQuiz(lesson, slot));
  }

  ask();
  box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

// ------------------------------------------------------------------ 搜尋

function search(term) {
  const q = term.trim().toLowerCase();
  const hits = $('#searchHits');
  const count = $('#searchCount');

  if (q.length < 1) {
    hits.innerHTML = '';
    count.textContent = '打字就會開始找，英文中文都可以。';
    return;
  }

  // 只找目前這個年級——跨年級找到的字點下去要換頁籤，反而更難用。
  const found = grade.flat.filter((w) =>
    w.w.toLowerCase().includes(q) || w.zh.includes(term.trim())
    || w.en.toLowerCase().includes(q) || w.zhEx.includes(term.trim()));

  count.textContent = found.length
    ? `${grade.zh}裡找到 ${found.length} 個`
    : `${grade.zh}裡沒有「${term.trim()}」`;

  hits.innerHTML = found.slice(0, 60).map((w) => `
    <button class="hit" type="button" data-go="w-${w.lesson.id}-${w.idx}">
      <i>${text(w.lesson.code)}</i><b>${text(w.w)}</b><span>${text(w.zh)}</span>
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
  $$('.word.shown').forEach((w) => w.classList.remove('shown'));
  if (mode === 'class') {
    setMask('none');
    $('#maskPick').value = 'none';
  } else {
    document.body.classList.remove('zh-all');
    $('#zhAll').checked = false;
  }
  refreshCounts();
  localStorage.setItem('jhs.mode', mode);
}

/* 遮字。直接改元素上的 class 而不是靠 body 的 class，因為單獨露出來的那一個
   要能留著——body class 一改，所有已經露出來的會一起關掉。 */
let mask = 'none';

function setMask(which) {
  mask = which;
  $$('.word').forEach((row) => {
    row.classList.remove('shown');
    $$('.masked', row).forEach((n) => n.classList.remove('masked'));
    if (which === 'zh') {
      $('.w-zh', row).classList.add('masked');
      $('.w-zhex', row).classList.add('masked');
    } else if (which === 'en') {
      $('.w-word', row).classList.add('masked');
      $('.w-en', row).classList.add('masked');
    }
  });
}

function applyOnlyUnknown() {
  const on = $('#onlyUnknown').checked && document.body.classList.contains('mode-study');
  $$('.word').forEach((row) => {
    row.classList.toggle('is-hidden', on && marks.has(row.dataset.key));
  });
  if (mask !== 'none') setMask(mask);
}

// ------------------------------------------------------------------ 事件

document.addEventListener('click', (e) => {
  const say = e.target.closest('.say, .q-hear');
  if (say && say.dataset.say) { speak(say.dataset.say); return; }

  // 教學模式的「中」，和自學模式被遮住的格子，都是點一下露出來。
  const chip = e.target.closest('.zh-chip');
  if (chip) { chip.closest('.word').classList.add('shown'); return; }

  const masked = e.target.closest('.masked');
  if (masked) { masked.classList.remove('masked'); return; }

  const mark = e.target.closest('.mark');
  if (mark) {
    const row = mark.closest('.word');
    const on = mark.getAttribute('aria-pressed') !== 'true';
    mark.setAttribute('aria-pressed', String(on));
    row.classList.toggle('is-known', on);
    if (on) marks.add(row.dataset.key); else marks.delete(row.dataset.key);
    saveMarks();
    refreshCounts();
    if ($('#onlyUnknown').checked && on) row.classList.add('is-hidden');
    return;
  }

  const quiz = e.target.closest('[data-quiz]');
  if (quiz) {
    const id = quiz.dataset.quiz;
    const lesson = grade.books.flatMap((b) => b.lessons).find((l) => l.id === id);
    runQuiz(lesson, $(`[data-slot="${id}"]`));
    return;
  }

  const tab = e.target.closest('[data-grade]');
  if (tab) {
    grade = grades.find((g) => g.id === tab.dataset.grade);
    render();
    setMask(document.body.classList.contains('mode-study') ? mask : 'none');
    search($('#searchInput').value);
    return;
  }

  const hit = e.target.closest('[data-go]');
  if (hit) {
    const row = document.getElementById(hit.dataset.go);
    if (row) {
      row.scrollIntoView({ block: 'center', behavior: 'smooth' });
      row.classList.add('shown');
      $$('.masked', row).forEach((n) => n.classList.remove('masked'));
    }
    return;
  }

  const link = e.target.closest('.nav-link');
  if (link) { document.body.classList.remove('nav-open'); return; }

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

$('#modeStudy').addEventListener('click', () => setMode('study'));
$('#modeClass').addEventListener('click', () => setMode('class'));

$('#panelToggle').addEventListener('click', () => {
  const p = $('#panel');
  p.hidden = !p.hidden;
  $('#panelToggle').setAttribute('aria-expanded', String(!p.hidden));
  if (!p.hidden) $('#marksNote').textContent = `目前打勾 ${marks.size} 個字。`;
});
$('#panelClose').addEventListener('click', () => {
  $('#panel').hidden = true;
  $('#panelToggle').setAttribute('aria-expanded', 'false');
});

$('#zhAll').addEventListener('change', (e) => {
  document.body.classList.toggle('zh-all', e.target.checked);
});

$('#maskPick').addEventListener('change', (e) => setMask(e.target.value));
$('#onlyUnknown').addEventListener('change', applyOnlyUnknown);

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  localStorage.setItem('jhs.voice', e.target.value);
  speak('This is the voice for the word list.');
});

$('#rate').addEventListener('change', (e) => {
  rate = Number(e.target.value);
  localStorage.setItem('jhs.rate', e.target.value);
});

$('#printBtn').addEventListener('click', () => { $('#panel').hidden = true; window.print(); });

$('#clearMarks').addEventListener('click', () => {
  marks.clear();
  saveMarks();
  $$('.word').forEach((row) => {
    row.classList.remove('is-known', 'is-hidden');
    $('.mark', row).setAttribute('aria-pressed', 'false');
  });
  refreshCounts();
  $('#marksNote').textContent = '清掉了。';
});

// 教學模式的「換下一個學生」：不是清紀錄（本來就沒存），是把畫面收乾淨。
$('#resetClass').addEventListener('click', () => {
  speechSynthesis.cancel();
  $$('.word.shown').forEach((w) => w.classList.remove('shown'));
  $$('.quiz-slot').forEach((s) => { s.innerHTML = ''; });
  document.body.classList.remove('zh-all');
  $('#zhAll').checked = false;
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

// 側欄跟著捲動高亮，用 IntersectionObserver 而不是 scroll 事件，400 個 row
// 的頁面用 scroll 算位置會卡。
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const id = en.target.dataset.lesson;
    $$('.nav-link').forEach((a) => a.classList.toggle('is-here', a.dataset.lesson === id));
  });
}, { rootMargin: '-25% 0px -65% 0px' });

// ------------------------------------------------------------------ 起手式

const savedRate = localStorage.getItem('jhs.rate');
if (savedRate) { rate = Number(savedRate); $('#rate').value = savedRate; }

render();
setMode(localStorage.getItem('jhs.mode') === 'class' ? 'class' : 'study');
$$('.lesson').forEach((s) => spy.observe(s));

// 網址帶 #b2-l3 進來時，捲到那一課。
if (location.hash) {
  const target = document.querySelector(location.hash);
  // 'instant'：進站時的深連結要直接到位，平滑捲動會從頭動好幾千 px 過去。
  if (target) target.scrollIntoView({ block: 'start', behavior: 'instant' });
}

// 換年級後要重新觀察新的區塊。
const reobserve = new MutationObserver(() => {
  $$('.lesson').forEach((s) => spy.observe(s));
});
reobserve.observe($('#doc'), { childList: true });
