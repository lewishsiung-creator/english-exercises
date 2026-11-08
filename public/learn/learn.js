/* 英文學習 — what /learn/ reads from this browser.

   Two things, both from records the other pages already keep on the student's
   own device. Nothing is sent anywhere, and a browser that blocks storage
   simply shows the page without them.

   1. 今天的複習. Each word page keeps its self-study marks and its review
      schedule (國中單字 under "jhv.", 高中單字 under "hsv."): a word marked
      還不熟 is due tomorrow, a word marked 記住了 comes back 2, 5, 12, 30, 60
      days later. This counts what is due today on each page and links straight
      to that page's 今天這一組 (#today), which deals the due words first. The
      rule for "due" is the pages' own isDue(), copied, not reinvented.
   2. The last 程度檢測 result, written by check/ as lc.result.
   3. Progress on the tiles: how many words of each word page this student
      has marked 記住了, and how many of 學測英文寫作's seven essays are
      拆解過了 (ew.done, written by exam-writing/drill.js). A tile shows it only
      once there is something to show.
   4. 學習報告: the same numbers as a few lines of text the student copies and
      sends the teacher (on LINE, usually). The site keeps no server and sends
      nothing, so this is the one way a teacher sees a student's practice --
      and the student decides when it goes. The optional name is kept here as
      lc.name so it need not be typed twice. */

function read(key, fallback) {
  try { const v = localStorage.getItem(key); return v == null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
}
// the word pages' day number: local midnight to midnight, the same arithmetic
const today = Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 864e5);

const PAGES = [
  { store: 'jhv', zh: '國中單字', href: '../reading/junior-vocab/' },
  { store: 'hsv', zh: '高中單字', href: '../reading/vocab/' },
];

function tally(p) {
  const marks = read(p.store + '.marks', {});
  const sched = read(p.store + '.sched', {});
  let due = 0, known = 0, shaky = 0, strong = 0;
  for (const id in marks) {
    if (marks[id] === 'k') known++; else if (marks[id] === 'r') shaky++;
    const s = sched[id];
    if (s ? s.due <= today : marks[id] === 'r') due++;
    // 穩固: remembered at least three times, so now back only every 12 days or more --
    // four or five of the word pages' five 熟練度 dots
    if (marks[id] === 'k' && s && s.step >= 2) strong++;
  }
  return { ...p, due, known, shaky, strong, days: read(p.store + '.days', []), used: known + shaky > 0 };
}

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function drawToday() {
  const box = document.getElementById('today');
  const pages = PAGES.map(tally).filter(p => p.used);
  if (!box || !pages.length) return;
  const due = pages.reduce((n, p) => n + p.due, 0);
  // practice days from both word pages, as one week: a day counts once
  const days = [...new Set(pages.flatMap(p => p.days))];
  const doneToday = days.includes(today);
  const rows = pages.map(p => `
    <li class="td-row">
      <span class="td-name">${esc(p.zh)}</span>
      <span class="td-meta">${p.due ? `<b>${p.due}</b> 個要複習 · ` : ''}已記住 ${p.known.toLocaleString()} 個${p.strong ? ` · 穩固 ${p.strong.toLocaleString()} 個` : ''}</span>
      <a class="td-go" href="${esc(p.href)}#today">${p.due ? '複習' : '學新字'} ›</a>
    </li>`).join('');
  box.innerHTML = due
    ? `<p class="td-eyebrow">今天的複習</p>
       <h2 class="td-title" id="todayTitle"><span class="td-num">${due}</span> 個字<br>到了該複習的時候</h2>
       <p class="td-why">隔一段時間再看一次，是讓字記得久的關鍵。每次約 20 個，到期的字先出。</p>
       <ul class="td-rows">${rows}</ul>`
    : `<p class="td-eyebrow">今天的複習</p>
       <h2 class="td-title" id="todayTitle">${doneToday ? '今天完成 ✓' : '今天的複習<br>都做完了'}</h2>
       <p class="td-why">記住的字會隔幾天再回來。今天還有時間，可以學幾個新字。</p>
       <ul class="td-rows">${rows}</ul>`;
  box.insertAdjacentHTML('beforeend', weekHTML(days));
  box.insertAdjacentHTML('beforeend', `<button class="td-report" id="openReport">產生學習報告，傳給老師 ›</button>`);
  box.hidden = false;
}

/* This week, Monday to Sunday, the days practised on either word page lit --
   the same drawing as the word pages' 今天完成 screen. A week counts days; it
   never resets to zero the way a streak does. */
function weekHTML(days) {
  const monday = today - ((today + 3) % 7);   // day 0 of the count was a Thursday
  const cells = '一二三四五六日'.split('').map((d, i) => {
    const day = monday + i, on = days.includes(day);
    return `<span class="wk-day ${on ? 'on' : ''} ${day === today ? 'is-today' : ''}" aria-label="星期${d}${on ? '，有練習' : ''}"><i></i>${d}</span>`;
  }).join('');
  const n = days.filter(d => d >= monday && d < monday + 7).length;
  return `<div class="week"><div class="wk-row">${cells}</div><p class="wk-n">這週練了 <b>${n}</b> 天</p></div>`;
}

/* ---------- 學習報告 ---------- */
// a word id back into something readable: "tb-how-old" -> "how old", "may-2" -> "may"
const wordOf = id => id.replace(/^tb-/, '').replace(/-\d+$/, '').replace(/-/g, ' ');

function reportText() {
  const d = new Date();
  const name = (document.getElementById('rpName').value || '').trim();
  const lines = ['【英文學習 進度報告】'];
  if (name) lines.push(`姓名：${name}`);
  lines.push(`日期：${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`);
  const r = read('lc.result', null);
  if (r && r.zh) lines.push(`程度檢測（${r.date}）：建議從${r.zh}開始`);
  const task = taskState();
  if (task) lines.push(`老師任務（${task.l.code} ${task.l.title}）：${task.done ? '完成 ✓' : `已記住 ${task.known} / ${task.n}`}`);
  const monday = today - ((today + 3) % 7);
  const week = new Set(PAGES.flatMap(p => read(p.store + '.days', [])).filter(d => d >= monday && d < monday + 7));
  lines.push(`這週練習：${week.size} 天`);
  const essays = Object.values(read('ew.done', {})).filter(d => d && d.m && d.o).length;
  if (essays) lines.push(`學測寫作：拆解過 ${essays} / 7 篇範文`);
  PAGES.map(tally).forEach(p => {
    if (!p.used) { lines.push(`${p.zh}：還沒開始`); return; }
    lines.push(`${p.zh}：已記住 ${p.known} 個（穩固 ${p.strong} 個）、還不熟 ${p.shaky} 個、今天到期 ${p.due} 個`);
    const marks = read(p.store + '.marks', {});
    const shaky = Object.keys(marks).filter(id => marks[id] === 'r');
    if (shaky.length) {
      const shown = shaky.slice(0, 20).map(wordOf).join(', ');
      lines.push(`  還不熟的字：${shown}${shaky.length > 20 ? `……（共 ${shaky.length} 個）` : ''}`);
    }
  });
  return lines.join('\n');
}

function openReport() {
  let dlg = document.getElementById('report');
  if (!dlg) {
    document.body.insertAdjacentHTML('beforeend', `
      <dialog class="report" id="report" aria-labelledby="rpTitle">
        <h2 id="rpTitle">學習報告</h2>
        <label class="rp-label" for="rpName">你的名字（選填）</label>
        <input id="rpName" type="text" autocomplete="name" placeholder="讓老師知道是誰傳的">
        <pre class="rp-text" id="rpText"></pre>
        <p class="rp-note">按「複製」後貼到 LINE 傳給老師。報告只在這台裝置上產生，不會自動送出。</p>
        <div class="rp-row">
          <button class="rp-copy" id="rpCopy">複製報告</button>
          <button class="rp-close" id="rpClose">關閉</button>
        </div>
      </dialog>`);
    dlg = document.getElementById('report');
    const name = document.getElementById('rpName');
    name.value = read('lc.name', '');
    name.addEventListener('input', () => {
      try { localStorage.setItem('lc.name', JSON.stringify(name.value.trim())); } catch (e) {}
      document.getElementById('rpText').textContent = reportText();
    });
    document.getElementById('rpClose').addEventListener('click', () => dlg.close());
    document.getElementById('rpCopy').addEventListener('click', copyReport);
  }
  document.getElementById('rpText').textContent = reportText();
  dlg.showModal();
}

function copyReport() {
  const btn = document.getElementById('rpCopy');
  const done = () => { btn.textContent = '已複製'; setTimeout(() => { btn.textContent = '複製報告'; }, 1800); };
  const text = reportText();
  // where the clipboard is refused, select the text so a long-press can copy it
  const fallback = () => {
    const pre = document.getElementById('rpText');
    const range = document.createRange(); range.selectNodeContents(pre);
    const sel = getSelection(); sel.removeAllRanges(); sel.addRange(range);
    btn.textContent = '已選取，請按「拷貝」';
  };
  try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
}

document.addEventListener('click', ev => {
  if (ev.target.closest('#openReport')) openReport();
});

function drawLastCheck() {
  const r = read('lc.result', null);
  const p = document.getElementById('checkLast');
  if (!r || !r.path || !p) return;
  const a = document.createElement('a');
  a.href = '../' + r.path; a.textContent = r.zh;
  p.append('上次檢測（' + r.date + '）建議從 ', a, ' 開始。');
  p.hidden = false;
}

/* ---------- 老師指定任務 ----------
   A link from a teacher -- /learn/#task/g7/b1-l3 -- names one lesson of the 國中
   textbook. The first visit keeps it (lc.task) and drops the hash; from then on
   the card shows how much of that lesson is 記住了 on 國中單字, with a way
   straight in (#lesson/... on that page). Done is every word of the lesson
   記住了. The student can remove it; a new link replaces it. */
function takeTask() {
  const m = decodeURIComponent(location.hash).match(/^#task\/(g\d\/[\w-]+)$/);
  if (!m || typeof LESSONS === 'undefined' || !LESSONS[m[1]]) return;
  const d = new Date();
  try { localStorage.setItem('lc.task', JSON.stringify({ key: m[1], date: `${d.getMonth() + 1}/${d.getDate()}` })); } catch (e) {}
  try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
}
function taskState() {
  const t = read('lc.task', null);
  if (!t || typeof LESSONS === 'undefined' || !LESSONS[t.key]) return null;
  const l = LESSONS[t.key], marks = read('jhv.marks', {});
  const ids = [...new Set(l.ids)];
  const known = ids.filter(id => marks[id] === 'k').length;
  return { ...t, l, n: ids.length, known, done: known === ids.length };
}
function drawTask() {
  const box = document.getElementById('task');
  const t = taskState();
  if (!box) return;
  if (!t) { box.hidden = true; return; }
  box.innerHTML = `
    <p class="td-eyebrow">老師指定的任務 · ${esc(t.date)}</p>
    <h2 class="tk-title" id="taskTitle">${esc(t.l.grade)} ${esc(t.l.code)}<br><span>${esc(t.l.title)}</span></h2>
    <div class="tk-prog ${t.done ? 'done' : ''}"><span class="tk-bar" aria-hidden="true"><span style="width:${t.known / t.n * 100}%"></span></span>
      <span class="tk-n">${t.done ? '✓ 任務完成，這一課都記住了' : `已記住 ${t.known} / ${t.n}`}</span></div>
    <div class="tk-row">
      <a class="td-go" href="../reading/junior-vocab/#lesson/${esc(t.key)}">${t.done ? '再複習一次' : '開始這一課'} ›</a>
      <button class="tk-drop" id="dropTask">移除這個任務</button>
    </div>`;
  box.hidden = false;
}
document.addEventListener('click', ev => {
  if (!ev.target.closest('#dropTask')) return;
  try { localStorage.removeItem('lc.task'); } catch (e) {}
  drawTask();
});

takeTask();
drawTask();
drawToday();
drawLastCheck();

/* Progress on the four tiles: a bar and one line, only on a tile this student
   has started. The totals are the tiles' own big numbers. */
function paintTiles() {
  document.querySelectorAll('.tile[data-store], .tile[data-essays]').forEach(t => {
    const total = parseInt(t.querySelector('.num').textContent.replace(/,/g, ''), 10);
    let n, line;
    if (t.dataset.store) {
      const marks = read(t.dataset.store + '.marks', {});
      n = Object.values(marks).filter(m => m === 'k').length;
      line = n >= total ? '全部記住了 ✓' : `已記住 ${n.toLocaleString()} / ${total.toLocaleString()}`;
    } else {
      const done = read(t.dataset.essays, {});
      n = Object.values(done).filter(d => d && d.m && d.o).length;
      line = n >= total ? '七篇都拆解過了 ✓' : `拆解過 ${n} / ${total} 篇`;
    }
    t.querySelector('.tp')?.remove();
    if (!n) return;
    const p = document.createElement('span');
    p.className = 'tp';
    p.innerHTML = `<span class="tp-bar" aria-hidden="true"><span style="width:${Math.min(100, n / total * 100)}%"></span></span><span class="tp-t">${line}</span>`;
    t.insertBefore(p, t.querySelector('.go'));
  });
}
paintTiles();
