/* 把 content.js 的 COURSE 畫出來，並接上兩個模式、遮字、朗讀、搜尋與練習。

   這一頁跟 /junior-high-words/ 是同一套機制，看程式碼時可以對照著看，但有兩
   個地方刻意不一樣：

   - **藏的東西不同。** 單字頁藏的是中譯；這裡中文說明（核心規則、為什麼）
     永遠顯示，因為那是課本本文，不是答案。教學模式藏的是「學生應該自己想得
     出來的」：句型的中譯，和常見錯誤的正確寫法。
   - **練習題目來自 mistakes 和 patterns 本身**，不另外維護題庫。三種題型裡
     有一種是「這句錯在哪裡」——選項是同一單元的其他「為什麼」。這是刻意的：
     同一個文法點底下的四個理由才是有意義的誘答，拿別單元的來湊，學生用刪去
     法就過關了。

   對照表只有一份，在 content.js 的 units[].lessons。單字頁連進來時用
   #for-b1-gr，下面 gotoLesson() 反查是哪個單元。 */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // 引號也跳脫，句子會進到 data-say 屬性裡。
    .replace(/"/g, '&quot;');
}

/* 中文說明裡夾著的英文（dog → dogs、I → am）挑出來換成英文字體。
   規則：從一個英文字母開始，可以延伸到字母、數字、撇號、句點、連字號，
   中間允許空白、斜線與加號——也就是 'How many'、"it's"、'a / an' 會整段
   抓起來，而中文標點會自然結束它。 */
const EN_RUN = /[A-Za-z][A-Za-z0-9'’.\-]*(?:[ /+][A-Za-z0-9'’.\-]+)*/g;

function withEn(s) {
  return text(s).replace(EN_RUN, (m) => {
    const trimmed = m.replace(/\s+$/, '');
    const tail = m.slice(trimmed.length);
    return `<code>${trimmed}</code>${tail}`;
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

/* 「會了」的紀錄。只在自學模式寫，key 是 grade/unit。單字頁用的是 jhs.*，
   這頁是 jhg.*，兩頁的紀錄不互相覆蓋。 */
const MARKS = 'jhg.known';
let marks = new Set();
try {
  marks = new Set(JSON.parse(localStorage.getItem(MARKS) || '[]'));
} catch (e) { /* 隱私模式或壞掉的值：當作沒有紀錄，不要讓整頁掛掉 */ }

function saveMarks() {
  try {
    localStorage.setItem(MARKS, JSON.stringify([...marks]));
  } catch (e) { /* 存不進去就算了，畫面上的勾還是對的 */ }
}

// 'B1 GR' -> 'b1-gr'，單字頁的錨點就是這樣命名的。
const lessonAnchor = (code) => code.toLowerCase().replace(/\s+/g, '-');

// ------------------------------------------------------------------ 畫年級

function buildGradeTabs() {
  $('#grades').innerHTML = grades.map((g) => `
    <button class="grade-tab${g.id === grade.id ? ' is-on' : ''}${g.ready ? '' : ' is-soon'}"
            data-grade="${g.id}">
      <b>${text(g.zh)}</b><i>${g.ready ? `${g.units.length} 單元` : '準備中'}</i>
    </button>`).join('');
}

function buildNav() {
  if (!grade.ready) { $('#nav').innerHTML = ''; return; }
  $('#nav').innerHTML = `
    <p class="nav-book">${text(grade.zh)}<span> · ${text(grade.units.length)} 個文法主題</span></p>
    ${grade.units.map((u) => `
      <a class="nav-link" href="#${u.id}" data-unit="${u.id}">
        <em>${text(u.code.replace('文法 ', ''))}</em>
        <span>${text(u.title)}</span>
        <i data-done="${u.id}"></i>
      </a>`).join('')}`;
  refreshMarks();
}

function unitBlock(u) {
  const key = `${grade.id}/${u.id}`;
  const known = marks.has(key);
  return `
    <section class="unit${known ? ' is-known' : ''}" id="${u.id}"
             data-unit="${u.id}" data-key="${key}">
      <div class="unit-head">
        <span class="unit-code">${text(u.code)}</span>
        <h2>${text(u.title)}</h2>
        <span class="unit-refs">${u.lessons.map((c) =>
          `<a class="ref" href="${COURSE.wordsHref}#${lessonAnchor(c)}"
              title="到單字頁看 ${text(c)} 的單字">${text(c)}</a>`).join('')}</span>
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
      <div class="drill-slot" data-slot="${u.id}"></div>
    </section>`;
}

function buildDoc() {
  const doc = $('#doc');

  if (!grade.ready) {
    doc.innerHTML = `
      <section class="soon">
        <h1>${text(grade.zh)}還沒進來</h1>
        <p>${text(grade.note)}的文法講義 PDF 到了就會出現在這裡，做法和七年級完全一樣，一樣可以遮字自測、一樣每個單元附練習。</p>
      </section>`;
    return;
  }

  doc.innerHTML = `
    <section class="intro">
      <h1>${text(grade.zh)}<span>${text(grade.label)}</span></h1>
      <p>${text(grade.source || COURSE.source)} · ${text(grade.note)}</p>
      <p class="how"><b>怎麼用：</b>${[
        '每個單元先看「一句話重點」，再看核心規則和句型，',
        '最後把常見錯誤讀過一遍——那一區是這份講義真正的重點。',
        '右上角 ⚙ 裡可以把句型的中譯或正確寫法遮起來自己測。',
        '每個單元最後有一個練習，右上角的 📖 課次牌可以跳到單字頁的同一課。',
      ].join('')}</p>
    </section>
    ${grade.units.map(unitBlock).join('')}`;

  applyOnlyUnknown();
}

function render() {
  buildGradeTabs();
  buildNav();
  buildDoc();
  window.scrollTo(0, 0);
}

function refreshMarks() {
  const classMode = document.body.classList.contains('mode-class');
  $$('#nav [data-done]').forEach((node) => {
    node.textContent = !classMode && marks.has(`${grade.id}/${node.dataset.done}`) ? '✓' : '';
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

  const saved = localStorage.getItem('jhg.voice');
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

// ------------------------------------------------------------------ 練習

/* 一題長這樣：
     { kind: 'fix' | 'why' | 'zh2en', prompt, promptClass, answer, opts, after }
   fix    看錯句選正確寫法      —— 認得出來就好
   why    看錯句與正解選理由    —— 誘答一定同單元，否則刪去法就過關
   zh2en  看中譯選英文句型
   答錯只是晃一下，題目留著，不扣分也不計時。 */

function makeDrill(unit) {
  const qs = [];

  /* 誘答一律取自同一個單元，所以一個只有三條常見錯誤的單元（文法 4）只湊得出
     三個選項。寧可出三選一，也不要整個單元的常見錯誤都不出題。 */
  unit.mistakes.forEach((m) => {
    const goods = unit.mistakes.map((x) => x.good).filter((g) => g !== m.good);
    if (goods.length >= 2) {
      qs.push({
        kind: 'fix',
        ask: '這句話錯了，正確的寫法是？',
        prompt: m.bad,
        promptClass: 'en bad',
        answer: m.good,
        opts: shuffle([m.good, ...shuffle(goods).slice(0, 3)]),
        after: `<b>${text(m.good)}</b><br>${withEn(m.why)}`,
      });
    }
    const whys = unit.mistakes.map((x) => x.why).filter((w) => w !== m.why);
    if (whys.length >= 2) {
      qs.push({
        kind: 'why',
        ask: '這句為什麼要這樣改？',
        prompt: `${m.bad} → ${m.good}`,
        promptClass: 'en',
        answer: m.why,
        optClass: 'zh',
        opts: shuffle([m.why, ...shuffle(whys).slice(0, 3)]),
        after: `<b>${text(m.good)}</b><br>${withEn(m.why)}`,
      });
    }
  });

  unit.patterns.forEach((p) => {
    const others = unit.patterns.map((x) => x.en).filter((e) => e !== p.en);
    if (others.length < 2) return;
    qs.push({
      kind: 'zh2en',
      ask: '這句中文，英文怎麼說？',
      prompt: p.zh,
      promptClass: '',
      answer: p.en,
      opts: shuffle([p.en, ...shuffle(others).slice(0, 3)]),
      after: `<b>${text(p.en)}</b>（${text(p.label)}）<br>${text(p.zh)}`,
    });
  });

  return shuffle(qs).slice(0, Math.min(8, qs.length));
}

function runDrill(unit, slot) {
  const questions = makeDrill(unit);
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

  function progress() {
    $('.drill-at', box).textContent =
      `第 ${Math.min(at + 1, questions.length)} 題 / 共 ${questions.length} 題`;
    $('.fill', box).style.width = `${(at / questions.length) * 100}%`;
  }

  function ask() {
    progress();
    const q = questions[at];
    body.innerHTML = `
      <p class="q-ask">${text(q.ask)}</p>
      <p class="q-prompt ${q.promptClass}">${text(q.prompt)}</p>
      <ul class="q-opts">${q.opts.map((o) => `
        <li><button class="opt${q.optClass ? ' ' + q.optClass : ''}" type="button"
          data-opt="${text(o)}">${text(o)}</button></li>`).join('')}</ul>`;

    $$('.opt', body).forEach((btn) => btn.addEventListener('click', () => {
      if (btn.dataset.opt !== q.answer) {
        if (!missed.includes(q)) missed.push(q);
        btn.classList.add('is-wrong');
        btn.disabled = true;
        return;
      }
      btn.classList.add('is-right');
      $$('.opt', body).forEach((b) => { b.disabled = true; });
      body.insertAdjacentHTML('beforeend', `<p class="q-after">${q.after}</p>`);
      setTimeout(() => {
        at += 1;
        if (at >= questions.length) finish(); else ask();
      }, 1500);
    }));
  }

  function finish() {
    $('.fill', box).style.width = '100%';
    $('.drill-at', box).textContent = '做完了';
    body.innerHTML = `
      <div class="q-done">
        <h3>${missed.length ? '這幾題再看一次' : '整個單元都答對了 🎉'}</h3>
        <p>${missed.length
          ? `${questions.length} 題裡有 ${missed.length} 題第一次沒答對。`
          : `${questions.length} 題都是第一次就答對。`}</p>
        ${missed.length ? `
          <div class="q-review">
            <p>再看一次</p>
            <ul>${missed.map((q) => `<li>${q.after}</li>`).join('')}</ul>
          </div>` : ''}
        <button class="q-again" type="button">再練一次</button>
      </div>`;
    $('.q-again', body).addEventListener('click', () => runDrill(unit, slot));
  }

  ask();
  box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

// ------------------------------------------------------------------ 搜尋

function search(term) {
  const q = term.trim().toLowerCase();
  const hits = $('#searchHits');
  const count = $('#searchCount');

  if (!q) {
    hits.innerHTML = '';
    count.textContent = '打字就會開始找，文法點、句型、錯誤都會找。';
    return;
  }

  const found = [];
  grade.units.forEach((u) => {
    const add = (label, line) => found.push({ u, label, line });
    if (u.title.toLowerCase().includes(q) || u.key.includes(term.trim())) add('主題', u.title);
    u.rules.forEach((r) => {
      if (r.toLowerCase().includes(q)) add('核心規則', r);
    });
    u.patterns.forEach((p) => {
      if (p.en.toLowerCase().includes(q) || p.zh.includes(term.trim())) add('句型', `${p.en} ${p.zh}`);
    });
    u.mistakes.forEach((m) => {
      if (m.bad.toLowerCase().includes(q) || m.good.toLowerCase().includes(q)
          || m.why.includes(term.trim())) add('常見錯誤', `${m.bad} → ${m.good}`);
    });
  });

  count.textContent = found.length
    ? `${grade.zh}裡找到 ${found.length} 筆`
    : `${grade.zh}裡沒有「${term.trim()}」`;

  hits.innerHTML = found.slice(0, 50).map((f) => `
    <button class="hit" type="button" data-go="${f.u.id}">
      <i>${text(f.u.code)}</i><b>${text(f.label)}</b><span>${text(f.line)}</span>
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
  refreshMarks();
  localStorage.setItem('jhg.mode', mode);
}

/* 遮字。直接改元素上的 class，不是靠 body——單獨露出來的那一個要能留著。 */
let mask = 'none';
const MASK_TARGETS = { zh: '.pat-zh', en: '.pat-en', fix: '.mis-good .mis-text' };

function setMask(which) {
  mask = which;
  $$('.masked').forEach((n) => n.classList.remove('masked'));
  const sel = MASK_TARGETS[which];
  if (sel) $$(`#doc ${sel}`).forEach((n) => n.classList.add('masked'));
}

function applyOnlyUnknown() {
  const on = $('#onlyUnknown').checked && document.body.classList.contains('mode-study');
  $$('.unit').forEach((u) => {
    u.classList.toggle('is-hidden', on && marks.has(u.dataset.key));
  });
  if (mask !== 'none') setMask(mask);
}

/* 單字頁連過來的 #for-b1-gr：找出 lessons 含有那一課的單元。 */
function gotoLesson(anchor) {
  const code = anchor.replace(/-/g, ' ').toUpperCase();
  for (const g of grades) {
    const unit = g.units.find((u) => u.lessons.includes(code));
    if (!unit) continue;
    if (g.id !== grade.id) { grade = g; render(); }
    const node = document.getElementById(unit.id);
    // 'instant'：這是進站時的深連結，不是頁內的操作。用平滑捲動的話會從頭
    // 一路動一萬多 px 過去，而且捲到一半被瀏覽器的捲動還原打斷就停在半路。
    if (node) node.scrollIntoView({ block: 'start', behavior: 'instant' });
    return true;
  }
  return false;
}

// ------------------------------------------------------------------ 事件

document.addEventListener('click', (e) => {
  const say = e.target.closest('.say');
  if (say && say.dataset.say) { speak(say.dataset.say); return; }

  // 教學模式的「中」「看答案」，和自學模式被遮住的地方，都是點一下露出來。
  const chip = e.target.closest('.reveal');
  if (chip) { chip.closest('.pat, .mis').classList.add('shown'); return; }

  const masked = e.target.closest('.masked');
  if (masked) { masked.classList.remove('masked'); return; }

  const mark = e.target.closest('.mark');
  if (mark) {
    const unit = mark.closest('.unit');
    const on = mark.getAttribute('aria-pressed') !== 'true';
    mark.setAttribute('aria-pressed', String(on));
    unit.classList.toggle('is-known', on);
    if (on) marks.add(unit.dataset.key); else marks.delete(unit.dataset.key);
    saveMarks();
    refreshMarks();
    if ($('#onlyUnknown').checked && on) unit.classList.add('is-hidden');
    return;
  }

  const drill = e.target.closest('[data-drill]');
  if (drill) {
    const id = drill.dataset.drill;
    runDrill(grade.units.find((u) => u.id === id), $(`[data-slot="${id}"]`));
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
    const node = document.getElementById(hit.dataset.go);
    if (node) node.scrollIntoView({ block: 'start', behavior: 'smooth' });
    return;
  }

  if (e.target.closest('.nav-link')) { document.body.classList.remove('nav-open'); return; }
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
  if (!p.hidden) $('#marksNote').textContent = `目前打勾 ${marks.size} 個單元。`;
});
$('#panelClose').addEventListener('click', () => {
  $('#panel').hidden = true;
  $('#panelToggle').setAttribute('aria-expanded', 'false');
});

$('#revealAll').addEventListener('change', (e) => {
  document.body.classList.toggle('reveal-all', e.target.checked);
});

$('#maskPick').addEventListener('change', (e) => setMask(e.target.value));
$('#onlyUnknown').addEventListener('change', applyOnlyUnknown);

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  localStorage.setItem('jhg.voice', e.target.value);
  speak('This is the voice for the grammar page.');
});

$('#rate').addEventListener('change', (e) => {
  rate = Number(e.target.value);
  localStorage.setItem('jhg.rate', e.target.value);
});

$('#printBtn').addEventListener('click', () => { $('#panel').hidden = true; window.print(); });

$('#clearMarks').addEventListener('click', () => {
  marks.clear();
  saveMarks();
  $$('.unit').forEach((u) => {
    u.classList.remove('is-known', 'is-hidden');
    $('.mark', u).setAttribute('aria-pressed', 'false');
  });
  refreshMarks();
  $('#marksNote').textContent = '清掉了。';
});

// 教學模式的「換下一個學生」：不是清紀錄（本來就沒存），是把畫面收乾淨。
$('#resetClass').addEventListener('click', () => {
  speechSynthesis.cancel();
  $$('.shown').forEach((n) => n.classList.remove('shown'));
  $$('.drill-slot').forEach((s) => { s.innerHTML = ''; });
  document.body.classList.remove('reveal-all');
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

// 側欄跟著捲動高亮。用 IntersectionObserver 而不是 scroll 事件算位置。
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const id = en.target.dataset.unit;
    $$('.nav-link').forEach((a) => a.classList.toggle('is-here', a.dataset.unit === id));
  });
}, { rootMargin: '-20% 0px -70% 0px' });

// ------------------------------------------------------------------ 起手式

const savedRate = localStorage.getItem('jhg.rate');
if (savedRate) { rate = Number(savedRate); $('#rate').value = savedRate; }

render();
setMode(localStorage.getItem('jhg.mode') === 'class' ? 'class' : 'study');
$$('.unit').forEach((s) => spy.observe(s));

if (location.hash.startsWith('#for-')) {
  gotoLesson(location.hash.slice(5));
} else if (location.hash) {
  const target = document.querySelector(location.hash);
  if (target) target.scrollIntoView();
}

// 換年級後要重新觀察新的區塊。
const reobserve = new MutationObserver(() => {
  $$('.unit').forEach((s) => spy.observe(s));
});
reobserve.observe($('#doc'), { childList: true });
