/* 國中單字 — 教育部 108 課綱《英語文參考字彙表》, the 2,000 words. A copy of the
   高中單字 engine (../vocab/vocab.js), kept separate so an edit to one cannot
   move the other: 自學／教學, 今天這一組, a four-type quiz with no score, 投影,
   the A–Z rail and the Apple-style opener are the same. What changed is what the
   list has: no printed parts of speech (the ones shown are this site's), and
   four overlapping sets instead of one level per word -- the list's two tables,
   基本字 and 其他常用字, and Lewis's 七年級 and 八年級 textbook words from
   /junior-high/. A word can be in a table and a grade at once. A grade is
   listed in lesson order, under lesson heads that link to that lesson's
   grammar on /junior-high/; everything else is A–Z. Data is in words.js
   (RAW and BOOK), built by tools/moe/build.py. */

// EXAM.url is the page's public address; a word's own link is that plus #bank.
const POSZH = { n: '名詞', v: '動詞', adj: '形容詞', adv: '副詞', prep: '介系詞', det: '限定詞', pron: '代名詞', conj: '連接詞',
  exclam: '感嘆詞', phr: '片語', art: '冠詞', aux: '助動詞', int: '感嘆詞', num: '數詞', mv: '情態助動詞', av: '助動詞', 'phr v': '片語動詞', 'prep phr': '介系詞片語', 'n pl': '複數名詞', 'unc n': '不可數名詞', abbrev: '縮寫' };

/* ---------- data ---------- */
// The four sets, in the order the bar shows them. The first two are the list's
// tables, the last two Lewis's textbook words.
const SETS = [['basic', '基本字', '基本字'], ['more', '常用字', '其他常用字'], ['g7', '七年級', '七年級課本'], ['g8', '八年級', '八年級課本']];
const SET_ZH = Object.fromEntries(SETS.map(([k, short]) => [k, short]));
const isGrade = k => k === 'g7' || k === 'g8';
// lesson key ("g7/b1-l1") -> its lesson, and per grade the order its words are taught in
const LESSON = {}, GRADE_ORDER = {};
Object.entries(BOOK).forEach(([g, b]) => {
  GRADE_ORDER[g] = [];
  b.lessons.forEach(l => { LESSON[l.key] = l; l.ids.forEach(id => { if (!GRADE_ORDER[g].includes(id)) GRADE_ORDER[g].push(id); }); });
});
// [id, word as printed, sets, spoken as, senses [[pos, 中文]], examples [[en, 中譯]], KK, lesson keys]
const ENTRIES = RAW.map(([id, w, sets, sayAs, senses, exs, kk, lessons, cols = [], tp = []], n) => {
  const se = senses.map(([p, z]) => ({ p, z }));
  const x = exs.map(([en, zh]) => ({ en, zh }));
  const firstZh = (se.find(s => s.z) || {}).z || '';
  // collocations: [collocation, 中文, example with it in *asterisks*, 中譯]
  const co = cols.map(([c, zh, en, ezh]) => ({ c, zh, en, ezh }));
  // search finds a word by its collocations too: "make a decision" turns up decision
  const text = (w + ' ' + sayAs + ' ' + se.map(s => s.z).join(' ') + ' ' + co.map(c => c.c + ' ' + c.zh).join(' ')).toLowerCase();
  return { id, n, w, lab: kk, sayAs, se, vari: '', x, sets, lessons, co, tp, fixes: {}, firstZh, text, w0: w };
});
const BY_ID = Object.fromEntries(ENTRIES.map(e => [e.id, e]));
// the lesson a word is taught in within one grade: its first, if it comes back later
const lessonIn = (e, g) => e.lessons.find(k => k.startsWith(g + '/'));
// the chips under a word's letter: its table, then each grade it is taught in --
// except the grade being browsed, which the lesson head above already names
const chips = e => e.sets.filter(k => k !== S.scope || !isGrade(k)).map(k => isGrade(k)
  ? `<span class="lvtag grade">${SET_ZH[k]} ${esc(LESSON[lessonIn(e, k)].code)}</span>`
  : `<span class="lvtag">${SET_ZH[k]}</span>`).join('');

/* ---------- device settings & self-study marks (try/catch: storage may be blocked) ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem(EXAM.store + '.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(EXAM.store + '.' + k, JSON.stringify(v)); } catch (e) {} }
};
const S = {
  mode: store.get('mode', 'self'),
  view: 'list',
  scope: 'all',             // 'all' | 'basic' | 'more' | 'g7' | 'g8'
  lesson: 'all',            // a lesson key, within a grade scope
  topic: 'all',             // 'all' | a topic id from TOPIC_LIST
  letter: 'all',
  q: '',
  markf: 'all',
  zh: true,
  voice: store.get('voice', ''),
  rate: store.get('rate', 0.9),
  shown: 40
};
let MARKS = store.get('marks', {});   // id -> 'k' (記住了) | 'r' (還不熟); 自學 only
// Students never see 教學 or 投影. A device becomes the teacher's by opening the link with #teach once.
// lc.teacher is the family-wide flag (learn/teacher.js): #teach on any page of the family counts here too
let TEACHER = store.get('teacher', false) || (() => { try { return JSON.parse(localStorage.getItem('lc.teacher')) === true; } catch (e) { return false; } })();
if (location.hash === '#teach') becomeTeacher();
if (!TEACHER) S.mode = 'self';
S.zh = S.mode === 'self';
/* ---------- 熟練度 and practice days (自學 only) ----------
   Two things a student could not see before, both read from records the page
   already keeps -- nothing here is a score, and nothing is lost by a missed day.

   熟練度 is how far a word's review has been pushed out, as five dots:
   還不熟 is one; 記住了 starts at two and gains one each time it is remembered
   again, as its gap grows 2 → 5 → 12 → 30 days. Five means the word now comes
   back only every month or two.

   Practice days are the days a word was marked here, kept for the last 60.
   They are shown as this week, Monday to Sunday: a week counts the days
   practised and never resets to zero the way a streak does. /learn/ reads the
   same list (<store>.days) to show the week across both word pages. */
function strength(id) {
  const m = MARKS[id];
  if (!m) return 0;
  if (m === 'r') return 1;
  const s = SCHED[id];
  return Math.min(5, (s ? s.step : 0) + 2);
}
function dots(id) {
  const n = S.mode === 'self' ? strength(id) : 0;
  if (!n) return '';
  return `<span class="dots" role="img" aria-label="熟練度 ${n}/5" title="熟練度 ${n}/5">${'<i class="on"></i>'.repeat(n)}${'<i></i>'.repeat(5 - n)}</span>`;
}
let DAYS = store.get('days', []);
function practiced() {
  const t = today();
  if (DAYS.includes(t)) return;
  DAYS = DAYS.concat(t).slice(-60);
  store.set('days', DAYS);
}
// this week, Monday first: day 0 of the count (1 Jan 1970) was a Thursday
function weekHTML(days) {
  const t = today(), monday = t - ((t + 3) % 7);
  const cells = '一二三四五六日'.split('').map((d, i) => {
    const day = monday + i, on = days.includes(day);
    return `<span class="wk-day ${on ? 'on' : ''} ${day === t ? 'is-today' : ''}" aria-label="星期${d}${on ? '，有練習' : ''}"><i></i>${d}</span>`;
  }).join('');
  const n = days.filter(d => d >= monday && d < monday + 7).length;
  return `<div class="week"><div class="wk-row">${cells}</div><p class="wk-n">這週練了 <b>${n}</b> 天</p></div>`;
}
function becomeTeacher() {
  TEACHER = true; store.set('teacher', true); try { localStorage.setItem('lc.teacher', 'true'); } catch (e) {} S.mode = 'teach'; store.set('mode', 'teach'); S.zh = false;
  // take #teach out of the address bar so it is not copied to a student by accident
  try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
}

/* review schedule for 自學: 還不熟 comes back tomorrow; each 記住了 pushes it further out */
let SCHED = store.get('sched', {});    // id -> { due: day number, step }
const STEPS = [2, 5, 12, 30, 60];
const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 864e5);
function markWord(id, m, toggle) {
  const before = stopsOf(id);
  if (toggle && MARKS[id] === m) { delete MARKS[id]; delete SCHED[id]; }
  else if (m === 'r') { MARKS[id] = 'r'; SCHED[id] = { due: today() + 1, step: -1 }; }
  else {
    const step = Math.min((SCHED[id] ? SCHED[id].step : -1) + 1, STEPS.length - 1);
    MARKS[id] = 'k'; SCHED[id] = { due: today() + STEPS[step], step };
  }
  store.set('marks', MARKS); store.set('sched', SCHED);
  practiced();
  announceStops(before);
}
function isDue(id) {
  if (!MARKS[id]) return false;
  const s = SCHED[id];
  return s ? s.due <= today() : MARKS[id] === 'r';
}

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const plain = s => s.replace(/\*/g, '');
const hl = s => esc(s).replace(/\*([^*]+)\*/g, '<b>$1</b>');
const it = s => esc(s).replace(/\*([^*]+)\*/g, '<i>$1</i>');
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* ---------- speech ---------- */
let VOICES = [];
function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  VOICES = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang));
  const sel = $('#voice');
  const us = VOICES.filter(v => /US/i.test(v.lang)), gb = VOICES.filter(v => /GB/i.test(v.lang)),
    rest = VOICES.filter(v => !/GB|US/i.test(v.lang));
  sel.innerHTML = '<option value="">自動（美式英語）</option>' +
    us.concat(gb, rest).map(v => `<option value="${esc(v.name)}">${esc(v.name)} · ${esc(v.lang)}</option>`).join('');
  sel.value = VOICES.some(v => v.name === S.voice) ? S.voice : '';
}
// 大考中心 spells American (color, apartment, subway), so the default voice is American.
function pickVoice() {
  if (S.voice) { const v = VOICES.find(v => v.name === S.voice); if (v) return v; }
  const us = VOICES.filter(v => /en[-_]US/i.test(v.lang));
  return us.find(v => /Samantha|Ava|Allison|Google US English/i.test(v.name)) || us[0] ||
    VOICES.find(v => /en[-_]GB/i.test(v.lang)) || VOICES[0];
}
function say(text) {
  if (!('speechSynthesis' in window)) return;
  if (!VOICES.length) loadVoices();
  const u = new SpeechSynthesisUtterance(plain(text));
  const v = pickVoice(); if (v) u.voice = v;
  u.lang = v ? v.lang : 'en-US'; u.rate = S.rate;
  if (speechSynthesis.speaking || speechSynthesis.pending) {
    speechSynthesis.cancel();
    setTimeout(() => speechSynthesis.speak(u), 60);   // Safari drops a speak() issued straight after cancel()
  } else speechSynthesis.speak(u);
}
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
const sayBtn = (t, label) => `<button class="say" data-say="${esc(plain(t))}" aria-label="${label || '播放發音'}">&#9654;&#xFE0E;</button>`;

/* ---------- filter ---------- */
const letterOf = e => (e.w.toLowerCase().match(/[a-z]/) || ['#'])[0];
function pool(ignoreSearch, ignoreMark) {
  const q = ignoreSearch ? '' : S.q.trim().toLowerCase();
  // a grade reads in the order its lessons teach, not A–Z
  const base = !q && isGrade(S.scope) ? GRADE_ORDER[S.scope].map(id => BY_ID[id]) : ENTRIES;
  return base.filter(e => {
    if (q) { if (!e.text.includes(q)) return false; }
    else {
      if (S.scope !== 'all' && !e.sets.includes(S.scope)) return false;
      if (isGrade(S.scope) && S.lesson !== 'all' && lessonIn(e, S.scope) !== S.lesson) return false;
      if (S.topic !== 'all' && !e.tp.includes(S.topic)) return false;
      if (S.letter !== 'all' && letterOf(e) !== S.letter) return false;
    }
    if (S.mode === 'self' && S.markf !== 'all' && !ignoreMark) {
      const m = MARKS[e.id];
      if (S.markf === 'review' && m !== 'r') return false;
      if (S.markf === 'known' && m !== 'k') return false;
      if (S.markf === 'new' && m) return false;
    }
    return true;
  });
}
function searchSort(list) {
  const q = S.q.trim().toLowerCase();
  if (!q) return list;
  const rank = e => e.sayAs.toLowerCase() === q || e.w.toLowerCase() === q ? 0 : e.w.toLowerCase().startsWith(q) ? 1 :
    e.w.toLowerCase().includes(q) ? 2 : 3;
  return list.slice().sort((a, b) => rank(a) - rank(b) || a.n - b.n);
}

/* ---------- rendering pieces ---------- */
const zhw = (inner, cls) => `<span class="zhw"><button class="chip" aria-label="顯示中文">中</button><span class="zt ${cls || ''}">${inner}</span></span>`;
// a corrected line carries a small tag; tapping it shows what Cambridge's list printed
function fixTag(e, key) {
  const o = e && e.fixes[key];
  return o == null ? '' : `<button class="fixed" data-orig="${esc(o)}" aria-label="已勘誤，看原表寫法">已勘誤</button>`;
}
const posTag = p => `<span class="pos ${p ? '' : 'none'}" title="${esc(POSZH[p] || '')}">${esc(p || '—')}</span>`;
/* In the word list a card's 常用搭配 start folded -- 「常用搭配 3 組 ›」 -- so a
   phone shows a word, its meaning and its example in about a screen instead
   of a screen and a half (2026-11-08). They open by themselves when a search
   matched a collocation, and on the word a link pointed at; on a flashcard's
   back and on the projector they are always open. */
function colsOpen(e) {
  const q = S.q.trim().toLowerCase();
  return !!q && e.co.some(c => (c.c + ' ' + c.zh).toLowerCase().includes(q));
}
function headHTML(e, fold) {
  return `<div class="head">
    <div class="hw"><span class="w">${esc(e.w)}</span>${fixTag(e, 'word')}${e.lab ? `<span class="lab">${esc(e.lab)}</span>` : ''}${sayBtn(e.sayAs, '播放 ' + esc(e.sayAs))}</div>
    ${e.se.map((s, si) => `<div class="sense">${posTag(s.p)}<div class="sb">
      ${s.z ? `<div class="mean">${zhw(esc(s.z))}${si === 0 ? fixTag(e, 'pos') : ''}</div>` : ''}</div></div>`).join('')}
    ${e.x.length ? `<div class="exs">${e.x.map((x, xi) => `<div class="ex"><div class="en">${hl(x.en)} ${sayBtn(x.en, '播放例句')}${fixTag(e, 'x' + xi)}</div>${x.zh ? `<div class="zh">${zhw(esc(x.zh))}</div>` : ''}</div>`).join('')}</div>` : ''}
    ${e.co.length ? (fold ? `<details class="colsd"${colsOpen(e) ? ' open' : ''}><summary><span class="cs-k">常用搭配</span><span class="cs-n">${e.co.length} 組</span></summary>` : '') +
      `<div class="cols">${fold ? '' : '<p class="cols-k">常用搭配</p>'}${e.co.map(c => `<div class="col">
      <div class="col-c"><b>${esc(c.c)}</b> <span class="col-zh">${zhw(esc(c.zh))}</span></div>
      <div class="en">${hl(c.en)} ${sayBtn(c.en, '播放例句')}</div>
      <div class="zh">${zhw(esc(c.ezh))}</div></div>`).join('')}</div>` + (fold ? '</details>' : '') : ''}
    ${e.vari ? `<div class="vari">${it(e.vari)}${fixTag(e, 'note')}</div>` : ''}
  </div>`;
}
function markBtns(e) {
  if (S.mode !== 'self') return '';
  const m = MARKS[e.id];
  return `<span class="mark"><button data-mark="k" data-id="${e.id}" class="${m === 'k' ? 'on-k' : ''}" aria-pressed="${m === 'k'}">記住了</button><button data-mark="r" data-id="${e.id}" class="${m === 'r' ? 'on-r' : ''}" aria-pressed="${m === 'r'}">還不熟</button></span>`;
}
function entryHTML(e) {
  const m = S.mode === 'self' ? MARKS[e.id] : '';
  return `<article class="entry ${m === 'k' ? 'known' : m === 'r' ? 'review' : ''}" id="e-${e.id}">
    <div class="meta"><span class="tag">${letterOf(e).toUpperCase()}</span>${chips(e)}${dots(e.id)}
      ${markBtns(e)}${TEACHER ? `<button class="link copy" data-copy="${e.id}" aria-label="複製 ${esc(e.w)} 的連結">複製連結</button>` : ''}</div>
    <div class="body">${headHTML(e, true)}</div>
  </article>`;
}

/* ---------- views ---------- */
function where() {
  const parts = [];
  if (S.q.trim()) parts.push(`搜尋「${esc(S.q.trim())}」`);
  else {
    parts.push(S.scope === 'all' ? '全部' : SETS.find(x => x[0] === S.scope)[2]);
    if (isGrade(S.scope) && S.lesson !== 'all') parts.push(esc(LESSON[S.lesson].code));
    if (S.topic !== 'all') parts.push(esc(TOPIC_ZH[S.topic]));
    if (S.letter !== 'all') parts.push(S.letter.toUpperCase() + ' 開頭');
  }
  return parts.join(' · ');
}
/* Inside a grade, a head goes above the first word of each lesson: its 課次,
   its topic, and the grammar it teaches, linked to that lesson's grammar on
   /junior-high/. Built from the word before, so appending more continues it. */
const GRAMMAR_URL = '../../junior-high/';
function lessonHead(k) {
  const l = LESSON[k], g = k.split('/')[0];
  return `<header class="lesson-head">
    <p class="lh-code">${SET_ZH[g]} · ${esc(l.code)}</p>
    <h3 class="lh-title">${esc(l.title)}</h3>
    <p class="lh-prog" data-lesson="${esc(k)}" hidden></p>
    ${TEACHER ? `<button class="link lh-task" data-task="${esc(k)}">複製任務連結，傳給學生</button>` : ''}
    ${l.grammar ? `<p class="lh-gram">文法：${esc(l.grammar)}${l.unit
      ? ` <a href="${GRAMMAR_URL}#g/${g}/${esc(l.unit)}" title="${esc(l.unitTitle)}">看這一課的文法 ›</a>` : ''}</p>` : ''}
  </header>`;
}
/* 課次收集冊: how much of each lesson is 記住了, under its head, in 自學 only.
   A lesson counts every word it teaches, including one first taught earlier,
   so its bar fills exactly when its own word list is done. */
function paintLessons() {
  document.querySelectorAll('.lh-prog').forEach(p => {
    const l = LESSON[p.dataset.lesson];
    if (!l || S.mode !== 'self') { p.hidden = true; return; }
    const ids = [...new Set(l.ids)], n = ids.length, k = ids.filter(id => MARKS[id] === 'k').length;
    p.hidden = false;
    p.classList.toggle('full', k === n);
    p.innerHTML = `<span class="lp-bar" aria-hidden="true"><span style="width:${k / n * 100}%"></span></span>
      <span class="lp-n">${k === n ? '✓ 這一課都記住了' : `已記住 ${k} / ${n}`}</span>`;
  });
}
function listHTML(list, from, to) {
  const heads = isGrade(S.scope) && !S.q.trim();
  let prev = heads && from > 0 ? lessonIn(list[from - 1], S.scope) : null;
  return list.slice(from, to).map(e => {
    let h = '';
    if (heads) { const k = lessonIn(e, S.scope); if (k !== prev) { h = lessonHead(k); prev = k; } }
    return h + entryHTML(e);
  }).join('');
}
function renderList() {
  const list = searchSort(pool());
  const shown = list.slice(0, S.shown);
  $('#main').innerHTML = `<p class="status">${where()} · ${list.length} 個字${list.length > shown.length ? `，目前顯示前 ${shown.length} 個` : ''}</p>` +
    (list.length ? listHTML(list, 0, S.shown) : `<p class="empty">沒有符合的字。換個範圍、字母或關鍵字試試。</p>`) +
    (list.length > shown.length ? `<button class="btn more" id="more">再顯示 40 個</button>` : '');
  observeMore();
  renderRail(list);
  paintLessons();
}

/* A–Z rail. A letter starts where it begins AND the next word does not drop back
   to an earlier letter -- a guard the Cambridge lists needed and this one keeps. */
let STARTS = {};
function renderRail(list) {
  const rail = $('#rail');
  STARTS = {};
  // the A–Z rail only means something when the list is A–Z
  if (!S.q.trim() && S.letter === 'all' && !isGrade(S.scope)) {
    list.forEach((e, i) => {
      const L = letterOf(e);
      if (L === '#' || STARTS[L] != null) return;
      const nx = list[i + 1];
      if (nx && letterOf(nx) < L) return;
      STARTS[L] = i;
    });
  }
  const letters = Object.keys(STARTS).sort();
  rail.hidden = letters.length < 4;
  document.body.classList.toggle('has-rail', !rail.hidden);
  railAway();
  rail.innerHTML = letters.map(L => `<button data-letter="${L}" aria-label="跳到 ${L.toUpperCase()} 開頭的字">${L}</button>`).join('');
}
// only a class toggle on scroll: nothing here moves the page
function railAway() { $('#rail').classList.toggle('away', window.scrollY + 80 < $('#main').offsetTop); }
window.addEventListener('scroll', railAway, { passive: true });
function jumpTo(i, flash) {
  const list = searchSort(pool());
  const e = list[i]; if (!e) return;
  if (i >= S.shown) { S.shown = Math.ceil((i + 1) / 40) * 40; renderList(); }
  const el = document.getElementById('e-' + e.id); if (!el) return;
  el.scrollIntoView({ block: 'start' });
  if (flash) { el.classList.remove('target'); void el.offsetWidth; el.classList.add('target'); const cd = el.querySelector('.colsd'); if (cd) cd.open = true; }
}
function jumpLetter(L) {
  if (STARTS[L] == null) return;
  document.querySelectorAll('#rail button').forEach(b => b.classList.toggle('on', b.dataset.letter === L));
  jumpTo(STARTS[L], false);
}
// slide a finger (or drag the mouse) down the rail
let railLast = null;
$('#rail').addEventListener('pointerdown', ev => {
  const b = ev.target.closest('button'); if (!b) return;
  ev.preventDefault(); $('#rail').setPointerCapture(ev.pointerId);
  railLast = b.dataset.letter; jumpLetter(railLast);
});
$('#rail').addEventListener('pointermove', ev => {
  if (railLast == null) return;
  const b = document.elementFromPoint(ev.clientX, ev.clientY)?.closest('#rail button');
  if (b && b.dataset.letter !== railLast) { railLast = b.dataset.letter; jumpLetter(railLast); }
});
['pointerup', 'pointercancel'].forEach(t => $('#rail').addEventListener(t, () => { railLast = null; }));

/* a word's own address: #bank opens the full list at that word */
/* 今天這一組 over the whole list: the words due for review first, then new
   ones. Opened by #today (the 今天的複習 card on /learn/), by the opener's main
   button and by the 「今天這一組」 link in the plan -- until 2026-11-08 the
   opener said only 開始練閃卡, and a student told to do 今天這一組 every day
   could not find it. */
function openToday() {
  S.view = 'cards'; S.scope = 'all'; S.topic = 'all'; $('#topic').value = 'all'; S.lesson = 'all'; S.letter = 'all'; $('#letter').value = 'all'; S.q = ''; $('#q').value = '';
  S.markf = 'all'; $('#markf').value = 'all';
  if (S.mode === 'self') { D.kind = 'set'; store.set('deckkind', 'set'); }
  D.key = '';
  render();
}
/* Under the opener's button: how many are due today, so the button means
   something before it is pressed. 自學 only, and only once there is a record. */
function paintTodayNote() {
  const el = $('#todaynote'); if (!el) return;
  const due = ENTRIES.filter(e => isDue(e.id)).length;
  const started = Object.keys(MARKS).length;
  el.hidden = S.mode !== 'self' || !started;
  el.textContent = !due ? '今天沒有要複習的字，這一組都是新字。'
    : due >= 20 ? `今天有 ${due} 個字該複習，一組先練其中 20 個。` : `今天有 ${due} 個字該複習，再補新字湊滿約 20 個。`;
}
function openFromHash() {
  if (location.hash === '#teach') {
    becomeTeacher(); D.key = Q.key = ''; render();
    return true;
  }
  // #topic/<id> opens the whole list at one topic
  const tm = location.hash.match(/^#topic\/([a-z]+)$/);
  if (tm && TOPIC_COUNT[tm[1]]) {
    S.view = 'list'; S.scope = 'all'; S.topic = tm[1]; $('#topic').value = tm[1]; S.letter = 'all'; $('#letter').value = 'all'; S.q = ''; $('#q').value = ''; S.shown = 40;
    render();
    try { history.replaceState(null, '', location.pathname + location.search); } catch (err) {}
    setTimeout(goToList, 60);
    return true;
  }
  // #today opens 今天這一組 over the whole list: the words due for review first,
  // then new ones. The 今天的複習 panel on /learn/ links here.
  if (location.hash === '#today') {
    openToday();
    try { history.replaceState(null, '', location.pathname + location.search); } catch (err) {}
    setTimeout(goToWork, 60);
    return true;
  }
  // #lesson/<grade>/<lesson> opens a grade at one lesson: a teacher's task on
  // /learn/ sends the student here
  const les = decodeURIComponent(location.hash).match(/^#lesson\/(g\d\/[\w-]+)$/);
  if (les && LESSON[les[1]]) {
    S.view = 'list'; S.scope = les[1].split('/')[0]; S.lesson = les[1]; S.letter = 'all'; $('#letter').value = 'all';
    S.q = ''; $('#q').value = ''; S.shown = 40;
    render();
    try { history.replaceState(null, '', location.pathname + location.search); } catch (err) {}
    setTimeout(goToList, 60);
    return true;
  }
  // #set/<set> opens the list at one set: the 程度檢測 on /learn/check/ sends a
  // student straight to the set it recommends. The hash is then dropped, so a
  // reload is the ordinary page.
  const set = location.hash.match(/^#set\/([\w-]+)$/);
  if (set && SETS.some(x => x[0] === set[1])) {
    S.view = 'list'; S.scope = set[1]; S.topic = 'all'; $('#topic').value = 'all'; S.lesson = 'all'; S.letter = 'all'; $('#letter').value = 'all'; S.q = ''; $('#q').value = ''; S.shown = 40;
    render();
    try { history.replaceState(null, '', location.pathname + location.search); } catch (err) {}
    setTimeout(goToList, 60);
    return true;
  }
  const id = decodeURIComponent(location.hash.slice(1));
  const e = id && ENTRIES.find(x => x.id === id); if (!e) return false;
  S.view = 'list'; S.scope = 'all'; S.lesson = 'all'; S.letter = 'all'; $('#letter').value = 'all'; S.q = ''; $('#q').value = '';
  S.markf = 'all'; $('#markf').value = 'all';
  render();
  jumpTo(pool().indexOf(e), true);
  // once fonts settle the entry may have moved; line it up again
  setTimeout(() => document.getElementById('e-' + e.id)?.scrollIntoView({ block: 'start' }), 250);
  return true;
}
window.addEventListener('hashchange', openFromHash);

let toastT;
function toast(html, ms) {
  const el = $('#toast'); el.innerHTML = html; el.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(() => { el.hidden = true; }, ms || 2200);
}
function copyLink(id) {
  const url = EXAM.url + '#' + id;
  const fallback = () => {
    toast(`<span>複製這個連結：</span><input id="toasturl" readonly value="${esc(url)}" aria-label="這個字的連結">`, 9000);
    const f = $('#toasturl'); f.focus(); f.select();
  };
  try { navigator.clipboard.writeText(url).then(() => toast('已複製這個字的連結'), fallback); } catch (err) { fallback(); }
}
/* A teacher's task is a link to /learn/ naming one lesson. The student opens it
   once; /learn/ keeps it and shows the lesson's progress until it is done or
   removed. Only a teacher device sees the button. */
function copyTask(key) {
  const url = EXAM.url.replace(/reading\/junior-vocab\/$/, 'learn/') + '#task/' + key;
  const l = LESSON[key];
  const fallback = () => {
    toast(`<span>把這個連結傳給學生：</span><input id="toasturl" readonly value="${esc(url)}" aria-label="任務連結">`, 9000);
    const f = $('#toasturl'); f.focus(); f.select();
  };
  try { navigator.clipboard.writeText(url).then(() => toast(`已複製「${esc(l.code)} ${esc(l.title)}」的任務連結`), fallback); } catch (err) { fallback(); }
}
let io;
function observeMore() {
  if (io) io.disconnect();
  const b = $('#more'); if (!b || !('IntersectionObserver' in window)) return;
  io = new IntersectionObserver(es => { if (es[0].isIntersecting) { io.disconnect(); appendMore(); } }, { rootMargin: '600px' });
  io.observe(b);
}
function appendMore() {
  const list = searchSort(pool());
  const from = S.shown; S.shown += 40;
  const b = $('#more'); if (!b) return;
  b.insertAdjacentHTML('beforebegin', listHTML(list, from, S.shown));
  const st = $('.status'); if (st) st.textContent = st.textContent.replace(/，目前顯示前 \d+ 個/, list.length > S.shown ? `，目前顯示前 ${S.shown} 個` : '');
  if (list.length <= S.shown) b.remove(); else observeMore();
  paintLessons();
}

/* flashcards. 自學 offers 今天這一組: up to 20 words, the ones due for review first,
   then new words in list order. 還不熟 sends a card back a few places in the same set. */
const D = { deck: [], i: 0, flipped: false, key: '', kind: store.get('deckkind', 'set'), again: [], info: null };
function deckKind() { return S.mode === 'self' ? D.kind : 'all'; }
function deckKey() { return [S.scope, S.lesson, S.topic, S.letter, S.q, S.markf, S.mode, deckKind()].join('|'); }
function buildSet() {
  const range = searchSort(pool(false, true));
  const due = range.filter(e => isDue(e.id)).sort((a, b) => (SCHED[a.id]?.due ?? 0) - (SCHED[b.id]?.due ?? 0));
  const fresh = range.filter(e => !MARKS[e.id]);
  const deck = due.slice(0, 20);
  deck.push(...fresh.slice(0, 20 - deck.length));
  D.info = { due: Math.min(due.length, 20), fresh: deck.length - Math.min(due.length, 20) };
  return deck;
}
function buildDeck(shuf) {
  D.deck = deckKind() === 'set' ? buildSet() : shuf ? shuffle(pool()) : searchSort(pool());
  if (shuf && deckKind() === 'set') D.deck = shuffle(D.deck);
  D.i = 0; D.flipped = false; D.again = []; D.key = deckKey();
}
function renderCards() {
  if (D.key !== deckKey()) buildDeck(false);
  const e = D.deck[D.i];
  const set = deckKind() === 'set';
  const kinds = S.mode === 'self' ? `<div class="seg" role="group" aria-label="練習範圍">
      <button data-kind="set" aria-pressed="${set}">今天這一組</button><button data-kind="all" aria-pressed="${!set}">這個範圍全部</button></div>` : '';
  const head = `<div class="setbar">${kinds}
      <p class="status" style="margin:0 ${kinds ? '0' : 'auto'} 0 0">${D.deck.length && e ? `第 ${D.i + 1} 張 / 共 ${D.deck.length} 張` : ''}</p>
      <button class="btn" id="shuf" style="padding:7px 16px;font-size:14px">洗牌</button><button class="btn" id="restart" style="padding:7px 16px;font-size:14px">從頭開始</button></div>` +
    (set && D.info && e ? `<p class="setinfo">這一組有 <b>${D.info.due}</b> 個要複習、<b>${D.info.fresh}</b> 個新字。按「還不熟」的字會在這一組裡再出現一次，明天也會回來。</p>` : '');
  if (!e) {
    const again = [...new Set(D.again)].map(id => ENTRIES.find(x => x.id === id));
    $('#main').innerHTML = head + (set
      ? (D.deck.length
        ? `<section class="qcard cardend"><div class="qtype">這一組結束</div><h2>今天完成 ✓</h2>
           ${weekHTML(DAYS)}
           ${again.length ? `<p>這幾個字明天會再出現：</p><ul class="endlist">${again.map(x => `<li><span class="w">${esc(x.w)}</span>${sayBtn(x.sayAs)} <span class="zhf">${esc(x.firstZh)}</span></li>`).join('')}</ul>` : `<p>這一組每個字都記住了，它們會隔幾天再回來複習。</p>`}
           </section><div class="actions"><button class="btn primary" id="nextset">再來一組</button></div>`
        : `<p class="empty">這個範圍今天沒有要複習的字，新字也都標記過了。<br>可以改練「這個範圍全部」，或換一個級別。</p>`)
      : `<p class="empty">${D.deck.length ? '這一疊看完了。' : '沒有符合的字。'}</p>`);
    return;
  }
  $('#main').innerHTML = head + `<section class="card">
    <div class="meta"><span class="tag">${letterOf(e).toUpperCase()}</span>${chips(e)}${dots(e.id)}${set ? (isDue(e.id) ? '<span class="num" style="color:var(--warn)">複習</span>' : '<span class="num" style="color:var(--accent)">新字</span>') : markBtns(e)}</div>
    <div class="front"><span class="w">${esc(e.w)}</span>${e.lab ? `<span class="lab">${esc(e.lab)}</span>` : ''}
      <div>${sayBtn(e.sayAs)}</div></div>
    ${D.flipped ? `<div class="back">${headHTML(e)}</div>` : `<button class="btn primary flip" id="flip">翻面</button>`}
  </section>
  <div class="actions">
    <button class="btn" id="prev" ${D.i ? '' : 'disabled'}>上一張</button>
    ${S.mode === 'self'
      ? `<button class="btn again" id="nextR">還不熟，下一張</button><button class="btn good" id="nextK">記住了，下一張</button>`
      : `<button class="btn primary" id="next">下一張</button>`}
  </div>`;
}
function answerCard(known) {
  const e = D.deck[D.i]; if (!e) return;
  markWord(e.id, known ? 'k' : 'r');
  // missed earlier in this set: even if it is right now, it comes back tomorrow
  if (known && D.again.includes(e.id)) { SCHED[e.id] = { due: today() + 1, step: -1 }; store.set('sched', SCHED); }
  if (!known && deckKind() === 'set') {
    D.again.push(e.id);
    // back into this set a few cards later, at most twice per word
    if (D.again.filter(id => id === e.id).length <= 2) D.deck.splice(Math.min(D.i + 4, D.deck.length), 0, e);
  }
  D.i++; D.flipped = false; renderCards();
}

/* quiz: no score; wrong answers wobble, say what they mean, and stay open.
   Every word here has an example written for this page, so all four types --
   字義, 聽力, 填空, 拼字 -- come up in roughly equal shares. */
const Q = { items: [], i: 0, missed: new Set(), tried: new Set(), done: false, key: '' };
function examplesOf(e) {
  const out = [];
  e.x.forEach(x => {
    const m = x.en.match(/\*([^*]+)\*/g);
    if (m && m.length === 1 && x.zh) out.push({ en: x.en, zh: x.zh, ans: m[0].slice(1, -1) });
  });
  return out;
}
const firstSense = e => e.se.find(s => s.z) || null;
// How a sentence's form relates to its headword: '' as listed, 'ing' / 'ed' / 's' by ending, 'other' for broken, fell
function suffixOf(base, ans) {
  const a = ans.toLowerCase();
  if (/ or |, /.test(base)) {           // prefer or would prefer; agree, agreement
    const alts = base.split(/ or |, /).map(b => suffixOf(b, ans));
    return alts.includes('') ? '' : alts.find(s => s !== 'other') || 'other';
  }
  const b = base.toLowerCase();
  if (a === b) return '';
  if (a.startsWith(b.slice(0, -1)) || a.startsWith(b)) for (const s of ['ing', 'ed', 's']) if (a.endsWith(s)) return s === 'ed' && /ied$|ed$/.test(a) ? 'ed' : s;
  return 'other';
}
const ANSWERS = ENTRIES.flatMap(e => examplesOf(e).map(x => ({ t: x.ans, e, suf: suffixOf(e.sayAs, x.ans) })));
/* 搭配詞挑戰. A word the student has marked 記住了 has earned a harder question:
   one of its collocations cut out of its example sentence, to be picked from
   four collocations. The wrong three are other words' collocations of about
   the same length, none sharing a word with the sentence, so the answer is
   found by meaning, not by shape. 自學 only -- 教學 keeps no marks. */
const COLLOCS = ENTRIES.flatMap(e => e.co.map(c => ({ c: c.c, zh: c.zh, e })));
function collocQuestion(e) {
  const usable = e.co.filter(c => /\*[^*]+\*/.test(c.en));
  if (!usable.length) return null;
  const c = usable[Math.floor(Math.random() * usable.length)];
  const ans = c.en.match(/\*([^*]+)\*/)[1];
  const sent = c.en.replace(/\*[^*]+\*/, ' ').toLowerCase();
  const words = ans.split(/\s+/).length;
  const opts = [];
  for (const o of shuffle(COLLOCS)) {
    if (o.e === e) continue;
    const n = o.c.split(/\s+/).length;
    if (Math.abs(n - words) > 1 || /[.…]{2,}|\.\.\.|\bsth\b|\bsb\b/.test(o.c)) continue;
    if (o.c.toLowerCase().split(/\s+/).some(w => w.length > 2 && sent.includes(w))) continue;
    if (opts.some(p => p.t.toLowerCase() === o.c.toLowerCase()) || o.c.toLowerCase() === ans.toLowerCase()) continue;
    opts.push({ t: o.c, z: o.zh });
    if (opts.length === 3) break;
  }
  if (opts.length < 3) return null;
  return { type: 'colloc', e, c, x: { en: c.en, zh: c.ezh, ans }, opts: shuffle([{ t: ans, right: true, z: c.zh }, ...opts]) };
}
function makeQuestion(e, all) {
  if (S.mode === 'self' && MARKS[e.id] === 'k' && e.co.length && Math.random() < 0.4) {
    const q = collocQuestion(e);
    if (q) return q;
  }
  const others = all.filter(o => o.id !== e.id && o.sayAs.toLowerCase() !== e.sayAs.toLowerCase());
  const exs = examplesOf(e);
  const fs = firstSense(e);
  const samePos = fs ? shuffle(others).sort((a, b) => (firstSense(b)?.p === fs.p) - (firstSense(a)?.p === fs.p)) : shuffle(others);
  const roll = Math.random();
  if (exs.length && roll < 0.5) {
    const x = exs[Math.floor(Math.random() * exs.length)];
    // 拼字: the open gap-fill of the real test; first letter given, more on request
    if (roll < 0.25 && /^[A-Za-z][A-Za-z' -]{2,}$/.test(x.ans)) return { type: 'spell', e, x };
    // 填空: the three wrong options are other words of the same part of speech, not already in the sentence
    const sent = plain(x.en).toLowerCase();
    const cap = /^[A-Z]/.test(x.ans) && !/^[A-Z]/.test(e.w);
    // The sentence has "borrowed": the wrong options must end the same way, or the tense gives it
    // away. They come from the forms the page's own sentences use (stolen, cried, notes), so every
    // option is a real word; a plain headword also qualifies when the answer is the plain form.
    const suf = suffixOf(e.sayAs, x.ans);
    const posOf = o => new Set(o.se.map(s => s.p));
    const mine = posOf(e);
    const cands = shuffle(ANSWERS).filter(a => a.e !== e && a.suf === suf && [...posOf(a.e)].some(p => mine.has(p))).map(a => ({ t: a.t, o: a.e }));
    if (suf === '') cands.push(...samePos.filter(o => firstSense(o)?.p === fs?.p).map(o => ({ t: o.sayAs, o })));
    const opts = [];
    for (const { t: t0, o } of cands) {
      if (/[()\/]/.test(t0) || sent.includes(t0.toLowerCase()) || t0.toLowerCase() === x.ans.toLowerCase()) continue;
      const t = cap ? t0[0].toUpperCase() + t0.slice(1) : t0;
      if (!opts.some(u => u.t.toLowerCase() === t.toLowerCase())) opts.push({ t, z: o.firstZh, w: o.w });
      if (opts.length === 3) break;
    }
    if (opts.length === 3) return { type: 'gap', e, x, opts: shuffle([{ t: x.ans, right: true, z: fs ? fs.z : '' }, ...opts]) };
  }
  if (!fs) return null;
  // with a sentence: a quarter each; without one: 字義 or 聽力, roughly half and half
  if (exs.length ? roll >= 0.5 && roll < 0.75 : roll >= 0.55) {
    // 聽力: hear the word, pick it from four
    const words = [];
    for (const o of samePos) {
      if (!words.some(x => x.t.toLowerCase() === o.w.toLowerCase())) words.push({ t: o.w, z: o.firstZh });
      if (words.length === 3) break;
    }
    if (words.length === 3) return { type: 'listen', e, s: fs, opts: shuffle([{ t: e.w, right: true, z: fs.z }, ...words]) };
  }
  // 字義: see the word, pick the Chinese
  const pick = [];
  for (const o of samePos) {
    const f = firstSense(o);
    if (!f || f.z === fs.z || pick.some(c => c.t === f.z)) continue;
    pick.push({ t: f.z, w: o.w });
    if (pick.length === 3) break;
  }
  return { type: 'mean', e, s: fs, opts: shuffle([{ t: fs.z, right: true }, ...pick]) };
}
function buildQuiz() {
  const all = pool(), src = S.mode === 'self' && S.markf === 'all' ? all.filter(e => MARKS[e.id] !== 'k') : all;
  const chosen = shuffle(src.length >= 4 ? src : all).slice(0, 10);
  // wrong options come from the same range when it is big enough to be fair
  const base = pool(true, true);
  Q.items = chosen.map(e => makeQuestion(e, base.length > 12 ? base : ENTRIES)).filter(Boolean);
  Q.i = 0; Q.missed = new Set(); Q.tried = new Set(); Q.done = false; Q.solved = false; Q.key = deckKey(); Q.spoken = new Set();
  resetSpell();
}
function renderQuiz() {
  if (Q.key !== deckKey()) buildQuiz();
  if (!Q.items.length) { $('#main').innerHTML = `<p class="empty">這個範圍沒有可以出題的字。換個級別或字母試試。</p>`; return; }
  if (Q.done) return renderQuizEnd();
  const q = Q.items[Q.i];
  if (q.type === 'listen' && !Q.spoken.has(Q.i)) { Q.spoken.add(Q.i); say(q.e.sayAs); }
  if (q.type === 'spell') return renderSpell(q);
  const prompt = q.type === 'listen'
    ? `<div class="qtype">聽力 · 你聽到的是哪一個字？</div><div class="prompt">
         <button class="btn primary bigplay" data-say="${esc(q.e.sayAs)}">&#9654;&#xFE0E; 再聽一次</button>
         ${Q.solved ? `<div class="reveal"><span class="w">${esc(q.e.w)}</span></div>` : ''}</div>`
    : q.type === 'gap' || q.type === 'colloc'
    ? `<div class="qtype">${q.type === 'colloc' ? `搭配詞挑戰 · ${esc(q.e.w)} 記住了，這題考它的搭配` : '例句填空 · 選出空格裡的字'}</div><div class="prompt"><div class="sent">${esc(q.x.en).replace(/\*([^*]+)\*/, `<span class="gap ${Q.solved ? 'filled' : ''}">${Q.solved ? esc(q.x.ans) : '&nbsp;'}</span>`).replace(/\*/g, '')}</div>
       <div class="zh" style="margin-top:6px">${zhw(esc(q.x.zh))}</div></div>`
    : `<div class="qtype">看英文選中文 · 這個字是什麼意思？</div><div class="prompt"><span class="w">${esc(q.e.w)}</span> ${sayBtn(q.e.sayAs)}
       <div style="color:var(--muted)">${q.e.lab ? `<span class="lab">${esc(q.e.lab)}</span> ` : ''}${posTag(q.s.p)}</div></div>`;
  $('#main').innerHTML = `<p class="status">第 ${Q.i + 1} 題 / 共 ${Q.items.length} 題</p>
  <section class="qcard">${prompt}
    <div class="opts">${q.opts.map((o, k) => {
      const state = Q.tried.has(k) ? (o.right ? 'right' : 'wrong') : (Q.solved && o.right ? 'right' : '');
      const why = Q.tried.has(k) && !o.right ? (q.type !== 'mean' ? `<span class="why">${esc(o.t)}：${esc(o.z || '')}</span>` : `<span class="why" style="font-family:var(--font-en)">這是 ${esc(o.w)} 的意思</span>`) : '';
      return `<button class="opt ${q.type !== 'mean' ? 'en' : 'zhf'} ${state}" data-opt="${k}" ${Q.solved ? 'disabled' : ''}>${esc(o.t)}${why}</button>`;
    }).join('')}</div>
    <div class="feedback">${Q.solved ? feedbackHTML(q) : ''}</div>
  </section>
  <div class="actions">${Q.solved ? `<button class="btn primary" id="qnext">${Q.i + 1 < Q.items.length ? '下一題' : '看這一輪'}</button>` : `<button class="btn" id="qskip">看答案</button>`}</div>`;
}
/* 拼字題: type the word into the sentence. Nothing is counted; a hint adds a letter,
   a wrong try wobbles and says so, 看答案 is always there. */
const SP = { typed: '', hint: 1, msg: '', bad: false };
function resetSpell() { SP.typed = ''; SP.hint = 1; SP.msg = ''; SP.bad = false; }
function renderSpell(q) {
  const ans = q.x.ans;
  if (!SP.typed) SP.typed = ans.slice(0, SP.hint);
  const [before, after] = q.x.en.split(/\*[^*]+\*/);
  const field = Q.solved
    ? `<span class="gap filled">${esc(ans)}</span>`
    : `<input class="spell ${SP.bad ? 'bad' : ''}" id="spellin" value="${esc(SP.typed)}" style="width:${Math.max(4, ans.length + 2)}ch"
         autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" aria-label="填入空格的字（${ans.length} 個字母）">`;
  const f = firstSense(q.e);
  $('#main').innerHTML = `<p class="status">第 ${Q.i + 1} 題 / 共 ${Q.items.length} 題</p>
  <section class="qcard">
    <div class="qtype">拼字 · 把空格裡的字拼出來</div>
    <div class="prompt"><div class="sent">${esc(plain(before || ''))}${field}${esc(plain(after || ''))}</div>
      <div class="zh" style="margin-top:6px">${zhw(esc(q.x.zh))}</div>
      ${f ? `<div class="setinfo" style="margin:10px 0 0">提示：${esc(f.p)} ${zhw(esc(f.z))}・${ans.length} 個字母</div>` : ''}</div>
    ${Q.solved ? '' : `<div class="spellrow"><button class="btn primary" id="spcheck">檢查</button><button class="btn" id="sphint">再給一個字母</button><button class="btn" data-say="${esc(ans)}">聽發音</button></div>`}
    <div class="spellmsg" role="status">${esc(SP.msg)}</div>
    <div class="feedback">${Q.solved ? feedbackHTML({ type: 'gap', e: q.e, x: q.x }) : ''}</div>
  </section>
  <div class="actions">${Q.solved ? `<button class="btn primary" id="qnext">${Q.i + 1 < Q.items.length ? '下一題' : '看這一輪'}</button>` : `<button class="btn" id="qskip">看答案</button>`}</div>`;
  const inp = $('#spellin');
  if (inp) {
    inp.addEventListener('input', () => { SP.typed = inp.value; if (SP.bad) { SP.bad = false; inp.classList.remove('bad'); } });
    inp.addEventListener('keydown', ev => { if (ev.key === 'Enter') { ev.preventDefault(); checkSpell(); } });
    inp.focus({ preventScroll: true }); inp.setSelectionRange(inp.value.length, inp.value.length);
  }
}
const norm = t => t.trim().toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ');
function checkSpell() {
  const q = Q.items[Q.i]; if (!q || q.type !== 'spell' || Q.solved) return;
  if (norm(SP.typed) === norm(q.x.ans)) { Q.solved = true; SP.msg = ''; say(q.x.en); }
  else {
    Q.missed.add(Q.i); SP.bad = true;
    const a = norm(q.x.ans), t = norm(SP.typed); let k = 0; while (k < t.length && t[k] === a[k]) k++;
    SP.msg = t.length < a.length && k === t.length ? `還沒拼完，這個字有 ${a.length} 個字母。` : `前 ${k} 個字母是對的，從第 ${k + 1} 個字母再想想。`;
  }
  renderQuiz();
}
const commonPrefix = (a, b) => { let k = 0; while (k < a.length && a[k] === b[k]) k++; return k; };
function spellHint() {
  const q = Q.items[Q.i]; if (!q || Q.solved) return;
  SP.hint = Math.min(q.x.ans.length, Math.max(SP.hint, commonPrefix(norm(SP.typed), norm(q.x.ans))) + 1);
  SP.typed = q.x.ans.slice(0, SP.hint); SP.bad = false; SP.msg = SP.hint >= q.x.ans.length ? '整個字都出來了，按「檢查」。' : '';
  renderQuiz();
}

function feedbackHTML(q) {
  const x = q.e.x[0];
  const exLine = x => `<div style="font-family:var(--font-en);font-size:17px;margin-top:6px">${hl(x.en)} ${sayBtn(x.en, '播放例句')}</div><div class="zh">${esc(x.zh)}</div>`;
  if (q.type === 'listen') return `<div class="zhf" style="font-weight:600">${esc(q.s.p)} ${esc(q.s.z)}</div>` + (x ? exLine(x) : '');
  if (q.type === 'colloc') return `<b style="font-family:var(--font-en)">${esc(q.c.c)}</b> <span class="zh">${esc(q.c.zh)}</span> ${sayBtn(q.x.en, '播放例句')}`;
  if (q.type === 'gap') return `<b style="font-family:var(--font-en)">${esc(q.e.w)}</b> ${sayBtn(q.x.en, '播放例句')} <span class="zh">${esc(q.e.firstZh)}</span>`;
  return x ? exLine(x) : '';
}
function renderQuizEnd() {
  const missed = Q.items.filter((q, i) => Q.missed.has(i));
  $('#main').innerHTML = `<section class="qcard qend"><div class="qtype">本輪結束</div><h2>這一輪做完了。</h2>
    ${missed.length ? `<p>下面這幾個字值得再看一次：</p><ul class="endlist">${missed.map(q =>
      `<li><span class="w">${esc(q.e.w)}</span>${sayBtn(q.e.sayAs)} <span class="zhf">${esc(q.e.firstZh)}</span></li>`).join('')}</ul>
    ${S.mode === 'self' ? `<div class="actions" style="justify-content:flex-start"><button class="btn again" id="markmissed">把這幾個標成「還不熟」</button></div>` : ''}`
    : `<p>這一輪每一題都第一次就選對了。</p>`}
  </section><div class="actions"><button class="btn primary" id="qagain">再來一輪</button></div>`;
}

/* ---------- 投影: one word at a time, big, revealed in steps ---------- */
const P = { slides: [], i: 0, step: 0 };
function openStage() {
  P.slides = searchSort(pool());
  let start = 0;
  if (S.view === 'list') {   // start from the word at the top of the list
    const top = [...document.querySelectorAll('.entry')].find(a => a.getBoundingClientRect().bottom > 180);
    if (top) start = Math.max(0, P.slides.findIndex(e => 'e-' + e.id === top.id));
  }
  P.i = start; P.step = 0;
  $('#stage').hidden = false; document.body.classList.add('staged');
  renderStage();
  // take focus off the 投影 button so the space bar steps the slide instead of pressing it again
  document.activeElement?.blur?.(); $('#stage').focus({ preventScroll: true });
}
function closeStage() {
  $('#stage').hidden = true; document.body.classList.remove('staged');
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
}
// a word with examples reveals them first, then the Chinese; a word without goes straight to the Chinese
const lastStep = e => e.x.length ? 2 : 1;
function renderStage() {
  const e = P.slides[P.i], st = $('#stage');
  if (!e) { st.innerHTML = `<div class="st-top"><span class="st-count"></span><button class="link" id="st-close">結束投影</button></div><div class="st-body"><p class="empty">這個範圍沒有字。</p></div>`; return; }
  const zhStep = lastStep(e), v = n => P.step >= n ? '' : 'veil';
  const stepLabel = P.step >= zhStep ? '下一個字 →' : P.step === 0 && e.x.length ? '顯示例句' : '顯示中文';
  st.innerHTML = `<div class="st-top">
      <span class="kicker">${letterOf(e).toUpperCase()} · ${e.sets.map(k => SET_ZH[k]).join(' · ')}</span>
      <span class="st-count">${P.i + 1} / ${P.slides.length}</span>
      ${document.fullscreenEnabled ? '<button class="link" id="st-full">全螢幕</button>' : ''}
      <button class="link" id="st-close">結束投影</button></div>
    <div class="st-body"><div class="st-inner">
      <div class="st-word">${esc(e.w)}</div>
      <div class="st-say">${e.lab ? `<span>${esc(e.lab)}</span>` : ''}${sayBtn(e.sayAs)}</div>
      ${e.se.map(s => `<div class="st-sense"><div class="st-mean"><span class="pos">${esc(s.p)}</span><span class="${v(zhStep)}">${esc(s.z)}</span></div></div>`).join('')}
      ${e.x.length ? `<div class="st-exs">${e.x.map(x => `<div class="st-ex ${v(1)}"><div class="en">${hl(x.en)} ${sayBtn(x.en, '播放例句')}</div><div class="zh ${v(2)}">${esc(x.zh)}</div></div>`).join('')}</div>` : ''}
    </div></div>
    <div class="st-bar">
      <button class="btn" id="st-prev" ${P.i ? '' : 'disabled'}>← 上一個</button>
      <button class="btn primary" id="st-step">${stepLabel}</button>
      <button class="btn" id="st-next" ${P.i + 1 < P.slides.length ? '' : 'disabled'}>下一個 →</button>
    </div>
    <div class="st-keys">空白鍵：下一步　← →：換字　P：唸單字　E：唸例句　Esc：結束</div>`;
  st.querySelector('.st-body').scrollTop = 0;
}
function stageGo(d) { const n = P.i + d; if (n < 0 || n >= P.slides.length) return; P.i = n; P.step = 0; renderStage(); }
function stageStep() { const e = P.slides[P.i]; if (e && P.step < lastStep(e)) { P.step++; renderStage(); } else stageGo(1); }
let sx = null;
$('#stage').addEventListener('touchstart', ev => { sx = [ev.touches[0].clientX, ev.touches[0].clientY]; }, { passive: true });
$('#stage').addEventListener('touchend', ev => {
  if (!sx) return; const dx = ev.changedTouches[0].clientX - sx[0], dy = ev.changedTouches[0].clientY - sx[1]; sx = null;
  if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) stageGo(dx < 0 ? 1 : -1);
}, { passive: true });

/* ---------- chrome ---------- */
/* One button per set. The 課次 select appears only inside a grade, and lists
   that grade's lessons. */
const SET_COUNT = Object.fromEntries(SETS.map(([k]) => [k, ENTRIES.filter(e => e.sets.includes(k)).length]));
/* On a phone the level pills are one sliding row; keep the chosen one in view
   without moving the page itself (scrollIntoView would). */
function keepPillInView() {
  const bar = $('#scope'), on = bar.querySelector('[aria-pressed="true"]');
  if (!on || bar.scrollWidth <= bar.clientWidth) return;
  const left = on.offsetLeft - bar.offsetLeft, right = left + on.offsetWidth;
  if (left < bar.scrollLeft + 16 || right > bar.scrollLeft + bar.clientWidth - 28) bar.scrollLeft = Math.max(0, left - 16);
}

function renderScope() {
  $('#scope').innerHTML = `<button data-scope="all" aria-pressed="${S.scope === 'all'}">全部<small>${ENTRIES.length.toLocaleString()}</small></button>` +
    SETS.map(([k, short]) => `<button data-scope="${k}" aria-pressed="${S.scope === k}">${short}${isGrade(k) ? '課本' : ''}<small>${SET_COUNT[k].toLocaleString()}</small></button>`).join('');
  keepPillInView();
  const sel = $('#lesson');
  sel.hidden = !isGrade(S.scope);
  if (isGrade(S.scope)) {
    sel.innerHTML = '<option value="all">課次：全部</option>' +
      BOOK[S.scope].lessons.map(l => `<option value="${esc(l.key)}">${esc(l.code)}　${esc(l.title)}</option>`).join('');
    sel.value = S.lesson;
  }
}
/* The opener's numbers and tiles, from the data, so they show the tables as
   printed (1,211 and 794) rather than the titles' round numbers. */
// weeks to meet every new word once, at the 20 a day 今天這一組 deals
const weeks = n => Math.ceil(n / 20 / 7);
const GROUPS = SETS.map(([k, , long]) => {
  const list = ENTRIES.filter(e => e.sets.includes(k));
  const ids = new Set(list.map(e => e.id));
  return { key: k, name: long, list, has: id => ids.has(id) };
});
/* ---------- progress on the tiles, and the milestones ----------
   Each tile shows how much of its set this student has marked 記住了, with a
   stop every quarter -- ¼, ½, ¾, 全部. Passing a stop gets one line in the
   toast: no points and no badge, just the news that a quarter of a set is in.
   43 weeks of 高中單字 needed stations on the way (2026-11-08). This device
   only, and 自學 only: 教學 keeps no marks, so its tiles show nothing. */
const QUARTER = ['¼', '½', '¾', '全部'];
const knownIn = g => g.list.reduce((n, e) => n + (MARKS[e.id] === 'k' ? 1 : 0), 0);
const stopOf = (n, total) => Math.floor(n * 4 / total);          // 0 to 4 stops passed
function paintTileProgress() {
  document.querySelectorAll('#tiles [data-pick]').forEach(t => {
    const g = GROUPS.find(x => x.key === t.dataset.pick); if (!g) return;
    let p = t.querySelector('.tile-p');
    if (!p) { p = document.createElement('span'); p.className = 'tile-p'; t.insertBefore(p, t.querySelector('.tile-go')); }
    const n = knownIn(g), total = g.list.length, s = stopOf(n, total);
    p.hidden = S.mode !== 'self' || !n;            // only on a set this student has started
    if (p.hidden) return;
    const next = s < 4 ? `下一站 ${QUARTER[s]}（${Math.ceil(total * (s + 1) / 4).toLocaleString()}）` : '全部記住 ✓';
    p.innerHTML = `<span class="tp-bar" aria-hidden="true"><span style="width:${n / total * 100}%"></span><i style="left:25%"></i><i style="left:50%"></i><i style="left:75%"></i></span>
      <span class="tp-t">已記住 ${n.toLocaleString()} · ${next}</span>`;
  });
}
/* Called by markWord with the stops each of the word's sets had passed before. */
function stopsOf(id) {
  return GROUPS.filter(g => g.has(id)).map(g => [g, stopOf(knownIn(g), g.list.length)]);
}
function announceStops(before) {
  for (const [g, was] of before) {
    const n = knownIn(g), now = stopOf(n, g.list.length);
    if (now > was) {
      toast(`<span>${esc(g.name)} ${QUARTER[now - 1]} 到站：已記住 ${n.toLocaleString()} 個字${now === 4 ? '，全部記住了 ✓' : ''}</span>`, 4200);
      break;
    }
  }
  paintTileProgress();
}

/* ---------- 主題 (2026-11-08) ----------
   Every word carries one or two of 26 topics (tools/topics/), the same list on
   國中單字 and 高中單字, so 食物與飲料 means the same set of ideas on both.
   A topic narrows whatever else is chosen -- 第三級 · 食物與飲料 -- and the
   cards, the quiz and 今天這一組 all draw from the narrowed list. The opener
   has a row of topics for a student who would rather start from a subject
   than from a level. TOPIC_LIST comes with the data in words.js. */
const TOPIC_ZH = Object.fromEntries(TOPIC_LIST.map(([k, zh]) => [k, zh]));
const TOPIC_COUNT = Object.fromEntries(TOPIC_LIST.map(([k]) => [k, ENTRIES.filter(e => e.tp.includes(k)).length]));
function renderTopics() {
  const box = $('#topics'); if (!box) return;
  box.innerHTML = TOPIC_LIST.filter(([k]) => TOPIC_COUNT[k]).map(([k, zh]) =>
    `<button class="topic" data-topic="${k}"><span class="tp-zh">${esc(zh)}</span><span class="tp-n">${TOPIC_COUNT[k].toLocaleString()}</span></button>`).join('');
}

function renderIntro() {
  $('#stat-words').textContent = ENTRIES.length.toLocaleString();
  $('#wk-a').textContent = weeks(SET_COUNT.basic);
  $('#wk-b').textContent = weeks(ENTRIES.length);
  // a word taught in both grades counts once
  $('#stat-basic').textContent = ENTRIES.filter(e => e.lessons.length).length.toLocaleString();
  const blurb = {
    basic: '教育部表一，國中一定要會的字。',
    more: '教育部表二，閱讀和寫作常用到的字。',
    g7: `七年級講義共 ${BOOK.g7.lessons.length} 課，照課次排，每課都連到文法說明。`,
    g8: `八年級講義共 ${BOOK.g8.lessons.length} 個文法主題，照主題排。`,
  };
  $('#tiles').innerHTML = SETS.map(([k, , long]) => `<button class="tile rise" data-pick="${k}">
      <span class="tile-n">${SET_COUNT[k].toLocaleString()}</span>
      <span class="tile-t">${long}</span>
      <span class="tile-d">${blurb[k]}</span>
      <span class="tile-go">看這一組 ›</span></button>`).join('');
  paintTileProgress();
  renderTopics();
}

/* Fade-and-rise as the opener scrolls into view. Only with JS and only when the
   reader has not asked for less motion: without either, everything just shows. */
function riseIn() {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('motion');
  const seen = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); seen.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.rise').forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 70}ms`; seen.observe(el); });
}

/* From the hero and the tiles straight to the controls, with the list already
   where the button said it would be. A jump, not an animation: a smooth scroll
   this long is cut short by the render that runs alongside it, the same reason
   /grammar-notes/ jumps. */
function goToList() {
  const bar = document.querySelector('.lnav');
  window.scrollTo(0, bar.getBoundingClientRect().top + window.scrollY - $('.gnav').offsetHeight);
}

/* Where the work is: the first card, flashcard or question, just under the
   sticky bars. Every control that changes what the page shows lands the reader
   here or at the controls -- never back at the top. The engine came from the
   Cambridge pages, which jump to the top of the page after each change; that
   was right when the controls were the top of the page, but with the opener
   above them it threw the student three screens up after every quiz question
   (fixed 2026-11-08). */
function goToWork() {
  const lnav = document.querySelector('.lnav');
  const pinned = getComputedStyle(lnav).position === 'sticky';
  const above = $('.gnav').offsetHeight + (pinned ? lnav.offsetHeight : 0) + 8;
  const y = $('#main').getBoundingClientRect().top + window.scrollY - above;
  if (Math.abs(window.scrollY - y) > 4) window.scrollTo(0, y);
}

function render() {
  paintTodayNote();
  paintTileProgress();
  $('#modeseg').hidden = !TEACHER; $('#stagebtn').hidden = !TEACHER;
  document.querySelectorAll('[data-mode]').forEach(b => b.setAttribute('aria-pressed', b.dataset.mode === S.mode));
  document.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', b.dataset.view === S.view));
  document.querySelectorAll('.self-only').forEach(el => el.hidden = S.mode !== 'self');
  document.body.classList.toggle('zh-off', !S.zh);
  $('#zhbtn').setAttribute('aria-pressed', S.zh);
  $('#zhbtn').textContent = S.zh ? '中文：顯示' : '中文：藏起來';
  renderScope();
  if (S.view !== 'list') { $('#rail').hidden = true; document.body.classList.remove('has-rail'); }
  ({ list: renderList, cards: renderCards, quiz: renderQuiz })[S.view]();
}

/* ---------- events ---------- */
document.addEventListener('click', ev => {
  const t = ev.target.closest('button'); if (!t) return;
  if (t.dataset.say != null) { say(t.dataset.say); return; }
  if (t.dataset.copy) { copyLink(t.dataset.copy); return; }
  if (t.dataset.topic) {
    S.view = 'list'; S.scope = 'all'; S.topic = t.dataset.topic; $('#topic').value = S.topic;
    S.letter = 'all'; $('#letter').value = 'all'; S.q = ''; $('#q').value = ''; S.shown = 40; S.lesson = 'all';
    render(); goToList(); return;
  }
  if (t.dataset.task) { copyTask(t.dataset.task); return; }
  if (t.dataset.go === 'today') { openToday(); goToWork(); return; }
  if (t.dataset.go) { S.view = t.dataset.go; render(); goToWork(); return; }
  if (t.dataset.pick) { S.view = 'list'; S.scope = t.dataset.pick; S.lesson = 'all'; S.shown = 40; S.q = ''; $('#q').value = ''; render(); goToList(); return; }
  if (t.dataset.orig != null) { toast(`<span>原表寫法：${esc(t.dataset.orig)}</span>`, 5000); return; }
  if (t.dataset.letter) { if (ev.detail === 0) jumpLetter(t.dataset.letter); return; }  // keyboard; touch and mouse go through pointer events
  if (t.classList.contains('chip')) { t.parentElement.classList.add('open'); return; }
  if (t.dataset.mode) {
    S.mode = t.dataset.mode; store.set('mode', S.mode);
    S.zh = S.mode === 'self'; if (S.mode === 'teach') S.markf = 'all', $('#markf').value = 'all';
    D.key = Q.key = ''; S.shown = 40; render(); return;
  }
  if (t.dataset.kind) { D.kind = t.dataset.kind; store.set('deckkind', D.kind); D.key = ''; renderCards(); return; }
  if (t.dataset.view) { S.view = t.dataset.view; render(); goToWork(); return; }
  if (t.dataset.scope) { S.scope = t.dataset.scope; S.lesson = 'all'; S.shown = 40; S.q = ''; $('#q').value = ''; render(); goToList(); return; }
  if (t.dataset.mark) {
    markWord(t.dataset.id, t.dataset.mark, true);
    const art = t.closest('.entry');
    if (art) { const e = ENTRIES.find(x => x.id === t.dataset.id); art.outerHTML = entryHTML(e); paintLessons(); }
    else render();
    return;
  }
  if (t.dataset.opt != null) {
    const q = Q.items[Q.i], k = +t.dataset.opt, o = q.opts[k];
    Q.tried.add(k);
    if (o.right) { Q.solved = true; if (q.type === 'gap' || q.type === 'colloc') say(q.x.en); }
    else Q.missed.add(Q.i);
    renderQuiz(); return;
  }
  switch (t.id) {
    case 'more': appendMore(); break;
    case 'zhbtn': S.zh = !S.zh; document.querySelectorAll('.zhw.open').forEach(z => z.classList.remove('open')); render(); break;
    case 'flip': D.flipped = true; renderCards(); break;
    case 'shuf': buildDeck(true); renderCards(); break;
    case 'restart': buildDeck(false); renderCards(); break;
    case 'prev': D.i = Math.max(0, D.i - 1); D.flipped = false; renderCards(); break;
    case 'next': D.i++; D.flipped = false; renderCards(); break;
    case 'nextK': answerCard(true); break;
    case 'nextR': answerCard(false); break;
    case 'nextset': buildDeck(false); renderCards(); goToWork(); break;
    case 'stagebtn': openStage(); break;
    case 'st-close': closeStage(); break;
    case 'st-full': document.documentElement.requestFullscreen?.().catch(() => {}); break;
    case 'st-prev': stageGo(-1); $('#stage').focus({ preventScroll: true }); break;
    case 'st-next': stageGo(1); $('#stage').focus({ preventScroll: true }); break;
    case 'st-step': stageStep(); $('#stage').focus({ preventScroll: true }); break;
    case 'unteach': TEACHER = false; store.set('teacher', false); try { localStorage.removeItem('lc.teacher'); } catch (e) {} S.mode = 'self'; store.set('mode', 'self'); S.zh = true; D.key = Q.key = ''; $('#panel').close(); render(); break;
    case 'qskip': Q.missed.add(Q.i); Q.solved = true; SP.msg = ''; renderQuiz(); break;
    case 'spcheck': checkSpell(); break;
    case 'sphint': spellHint(); break;
    case 'qnext': Q.i++; Q.tried = new Set(); Q.solved = false; resetSpell(); if (Q.i >= Q.items.length) Q.done = true; renderQuiz(); goToWork(); break;
    case 'qagain': buildQuiz(); renderQuiz(); break;
    case 'markmissed': Q.items.forEach((q, i) => { if (Q.missed.has(i)) markWord(q.e.id, 'r'); }); t.textContent = '已標成「還不熟」'; t.disabled = true; break;
    case 'setbtn': openPanel(); break;
    case 'closepanel': $('#panel').close(); break;
    case 'fresh':
      S.q = ''; $('#q').value = ''; S.scope = 'all'; S.lesson = 'all'; S.letter = 'all'; $('#letter').value = 'all';
      S.zh = false; D.key = Q.key = ''; S.shown = 40; $('#panel').close(); render(); goToList(); break;
    case 'clearmarks':
      if (t.dataset.sure) { MARKS = {}; SCHED = {}; store.set('marks', MARKS); store.set('sched', SCHED); D.key = ''; $('#panel').close(); delete t.dataset.sure; t.textContent = '清除所有標記'; render(); }
      else { t.dataset.sure = '1'; t.textContent = '確定清除？再按一次'; }
      break;
  }
});
let qt;
// flashcards: swipe left for the next card, right for the previous one
let tx = null, ty = null;
$('#main').addEventListener('touchstart', ev => {
  if (S.view !== 'cards' || !ev.target.closest('.card')) { tx = null; return; }
  tx = ev.touches[0].clientX; ty = ev.touches[0].clientY;
}, { passive: true });
$('#main').addEventListener('touchend', ev => {
  if (tx == null) return;
  const dx = ev.changedTouches[0].clientX - tx, dy = ev.changedTouches[0].clientY - ty; tx = null;
  if (Math.abs(dx) < 60 || Math.abs(dy) > Math.abs(dx)) return;
  if (dx < 0 && D.deck[D.i]) D.i++; else if (dx > 0) D.i = Math.max(0, D.i - 1); else return;
  D.flipped = false; renderCards();
}, { passive: true });
$('#q').addEventListener('input', ev => { clearTimeout(qt); qt = setTimeout(() => { S.q = ev.target.value; S.shown = 40; render(); }, 180); });
(function initFilters() {
  const letters = [...new Set(ENTRIES.map(letterOf))].filter(L => L !== '#').sort();
  const lsel = $('#letter');
  lsel.innerHTML = '<option value="all">字母：A–Z</option>' + letters.map(L => `<option value="${L}">${L.toUpperCase()} 開頭</option>`).join('');
  lsel.addEventListener('change', ev => { S.letter = ev.target.value; S.shown = 40; render(); goToList(); });
  const tsel = $('#topic');
  tsel.innerHTML = '<option value="all">主題：全部</option>' +
    TOPIC_LIST.filter(([k]) => TOPIC_COUNT[k]).map(([k, zh]) => `<option value="${k}">${esc(zh)}</option>`).join('');
  tsel.addEventListener('change', ev => { S.topic = ev.target.value; S.shown = 40; render(); goToList(); });
  $('#lesson').addEventListener('change', ev => { S.lesson = ev.target.value; S.shown = 40; render(); goToList(); });
})();
$('#markf').addEventListener('change', ev => { S.markf = ev.target.value; S.shown = 40; render(); });
$('#voice').addEventListener('change', ev => { S.voice = ev.target.value; store.set('voice', S.voice); say('Hello, this is how the words will sound.'); });
$('#rate').addEventListener('input', ev => { S.rate = +ev.target.value; $('#ratev').textContent = '×' + S.rate.toFixed(2); store.set('rate', S.rate); });
function openPanel() {
  $('#rate').value = S.rate; $('#ratev').textContent = '×' + (+S.rate).toFixed(2);
  $('#teachtools').hidden = S.mode !== 'teach'; $('#selftools').hidden = S.mode !== 'self'; $('#teacherflag').hidden = !TEACHER;
  const k = Object.values(MARKS).filter(v => v === 'k').length, r = Object.values(MARKS).filter(v => v === 'r').length;
  $('#markinfo').textContent = `這台裝置上：記住了 ${k} 個、還不熟 ${r} 個。標記只存在這個瀏覽器裡。`;
  $('#panel').showModal();
}
document.addEventListener('keydown', ev => {
  if (ev.target.closest?.('input, select, textarea') || $('#panel').open) return;
  if (!$('#stage').hidden) {
    const k = ev.key;
    if (k === ' ' || k === 'Enter' || k === 'ArrowDown') { ev.preventDefault(); stageStep(); }
    else if (k === 'ArrowRight') stageGo(1);
    else if (k === 'ArrowLeft') stageGo(-1);
    else if (k === 'Escape') closeStage();
    else if (k === 'p' || k === 'P') say(P.slides[P.i]?.sayAs || '');
    else if (k === 'e' || k === 'E') { const x = P.slides[P.i]?.x[0]; if (x) say(x.en); }
    return;
  }
  if (S.view === 'cards' && (ev.key === ' ' || ev.key === 'Enter') && !D.flipped && $('#flip')) { ev.preventDefault(); D.flipped = true; renderCards(); }
  else if (S.view === 'cards' && ev.key === 'ArrowRight' && D.deck[D.i]) { D.i++; D.flipped = false; renderCards(); }
  else if (S.view === 'cards' && ev.key === 'ArrowLeft') { D.i = Math.max(0, D.i - 1); D.flipped = false; renderCards(); }
});

renderIntro();
render();
riseIn();
openFromHash();
// a printed list shows every card's 常用搭配
window.addEventListener('beforeprint', () => document.querySelectorAll('.colsd').forEach(x => { x.open = true; }));
