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
      <span class="td-meta">${p.due ? `<b>${p.due}</b> 個該複習 · ` : ''}已記住 ${p.known.toLocaleString()} 個${p.strong ? ` · 穩固 ${p.strong.toLocaleString()} 個` : ''}</span>
      <a class="td-go" href="${esc(p.href)}#today">${p.due ? '複習' : '學新字'} ›</a>
    </li>`).join('');
  box.innerHTML = due
    ? `<p class="td-eyebrow">今天的複習</p>
       <h2 class="td-title" id="todayTitle"><span class="td-num">${due}</span> 個字<br>該複習了</h2>
       <p class="td-why">隔幾天再看一次，字才記得牢。一次大約 20 個，該複習的字會先出來。</p>
       <ul class="td-rows">${rows}</ul>`
    : `<p class="td-eyebrow">今天的複習</p>
       <h2 class="td-title" id="todayTitle">${doneToday ? '今天完成 ✓' : '今天的複習<br>都做完了'}</h2>
       <p class="td-why">記住的字過幾天會再出現。今天還有時間的話，可以多學幾個新字。</p>
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
  if (task) lines.push(`老師任務（${task.report}）：${task.done ? '完成 ✓' : task.prog}`);
  const monday = today - ((today + 3) % 7);
  const week = new Set(PAGES.flatMap(p => read(p.store + '.days', [])).filter(d => d >= monday && d < monday + 7));
  lines.push(`這週練習：${week.size} 天`);
  const essays = Object.values(read('ew.done', {})).filter(d => d && d.m && d.o).length;
  if (essays) lines.push(`學測寫作：已拆解 ${essays} / 7 篇範文`);
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
/* 老師指定的任務. A teacher device copies a link to /learn/#task/<key>; the
   student opens it once, and the task is kept here as lc.task until they
   drop it or a new one replaces it. Three kinds (the last two added
   2026-11-08):
     g7/b1-l1   a 國中 textbook lesson     progress from jhv.marks, LESSONS
     hs/3/a     高中單字 第三級, A 開頭     progress from hsv.marks, HS_TASKS
     ew/e114    a 學測寫作 essay's drills   progress from ew.done
   A task saved before kinds existed has no kind and is a lesson. */
// exam-writing/content.js's seven essays, year and topic -- add a year there, add it here
const EW_ESSAYS = {
  e115: ['115', '養寵物風氣與寵物角色改變'], e114: ['114', '颱風假'], e113: ['113', '青少年困擾與機器人小幫手'],
  e112: ['112', '表情符號的使用'], e111: ['111', '比較兩種公園'], e110: ['110', '遊客賞花不守規定'], e109: ['109', '賣場週年慶'],
};
const LEVEL_ZH = ['', '第一級', '第二級', '第三級', '第四級', '第五級', '第六級'];
function takeTask() {
  const h = decodeURIComponent(location.hash);
  let task = null, m;
  if ((m = h.match(/^#task\/(g\d\/[\w-]+)$/)) && typeof LESSONS !== 'undefined' && LESSONS[m[1]]) task = { kind: 'jh', key: m[1] };
  else if ((m = h.match(/^#task\/hs\/([1-6]\/[a-z])$/)) && typeof HS_TASKS !== 'undefined' && HS_TASKS[m[1]]) task = { kind: 'hs', key: m[1] };
  else if ((m = h.match(/^#task\/ew\/(e\d+)$/)) && EW_ESSAYS[m[1]]) task = { kind: 'ew', key: m[1] };
  if (!task) return;
  const d = new Date();
  try { localStorage.setItem('lc.task', JSON.stringify({ ...task, date: `${d.getMonth() + 1}/${d.getDate()}` })); } catch (e) {}
  try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
}
function taskState() {
  const t = read('lc.task', null);
  if (!t) return null;
  const kind = t.kind || 'jh';
  if (kind === 'jh') {
    if (typeof LESSONS === 'undefined' || !LESSONS[t.key]) return null;
    const l = LESSONS[t.key], marks = read('jhv.marks', {});
    const ids = [...new Set(l.ids)];
    const known = ids.filter(id => marks[id] === 'k').length;
    return { ...t, kind, n: ids.length, known, done: known === ids.length,
      label: `${l.grade} ${l.code}`, title: l.title, href: `../reading/junior-vocab/#lesson/${t.key}`,
      prog: `已記住 ${known} / ${ids.length}`, doneLine: '✓ 任務完成，這一課都記住了', go: '開始這一課', report: `${l.code} ${l.title}` };
  }
  if (kind === 'hs') {
    if (typeof HS_TASKS === 'undefined' || !HS_TASKS[t.key]) return null;
    const [lv, L] = t.key.split('/'), ids = HS_TASKS[t.key], marks = read('hsv.marks', {});
    const known = ids.filter(id => marks[id] === 'k').length;
    return { ...t, kind, n: ids.length, known, done: known === ids.length,
      label: `高中單字 ${LEVEL_ZH[+lv]}`, title: `${L.toUpperCase()} 開頭的 ${ids.length} 個字`, href: `../reading/vocab/#set/${lv}/${L}`,
      prog: `已記住 ${known} / ${ids.length}`, doneLine: '✓ 任務完成，這一組都記住了', go: '開始這一組', report: `高中單字 ${LEVEL_ZH[+lv]} ${L.toUpperCase()} 開頭` };
  }
  if (kind === 'ew') {
    const e = EW_ESSAYS[t.key]; if (!e) return null;
    const d = read('ew.done', {})[t.key] || {};
    const known = (d.m ? 1 : 0) + (d.o ? 1 : 0);
    return { ...t, kind, n: 2, known, done: known === 2,
      label: `學測寫作 ${e[0]} 年`, title: `〈${e[1]}〉拆解練習`, href: `../exam-writing/#${t.key}`,
      prog: `${d.m ? '✓' : '○'} 動作配對　${d.o ? '✓' : '○'} 句子排序`, doneLine: '✓ 任務完成，這篇已經拆解完了', go: '開始拆解', report: `學測寫作 ${e[0]} 年拆解練習` };
  }
  return null;
}
function drawTask() {
  const box = document.getElementById('task');
  const t = taskState();
  if (!box) return;
  if (!t) { box.hidden = true; return; }
  box.innerHTML = `
    <p class="td-eyebrow">老師指定的任務 · ${esc(t.date)}</p>
    <h2 class="tk-title" id="taskTitle">${esc(t.label)}<br><span>${esc(t.title)}</span></h2>
    <div class="tk-prog ${t.done ? 'done' : ''}"><span class="tk-bar" aria-hidden="true"><span style="width:${t.known / t.n * 100}%"></span></span>
      <span class="tk-n">${t.done ? t.doneLine : esc(t.prog)}</span></div>
    <div class="tk-row">
      <a class="td-go" href="${esc(t.href)}">${t.done ? '再練一次' : t.go} ›</a>
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
// a task link opened while this page is already open in the tab
window.addEventListener('hashchange', () => { takeTask(); drawTask(); });
drawToday();
drawLastCheck();

/* Progress on the four tiles: a bar and one line, only on a tile this student
   has started. The totals are the tiles' own big numbers. */
function paintTiles() {
  document.querySelectorAll('.tile[data-store], .tile[data-essays], .tile[data-reading]').forEach(t => {
    const total = parseInt(t.querySelector('.num').textContent.replace(/,/g, ''), 10);
    let n, line;
    if (t.dataset.reading) {
      const done = read('rd.done', {}), parts = read('rd.parts', 0);
      n = Object.keys(done).length;
      if (!parts) return;
      t.querySelector('.tp')?.remove();
      if (!n) return;
      const p = document.createElement('span');
      p.className = 'tp';
      p.innerHTML = `<span class="tp-bar" aria-hidden="true"><span style="width:${Math.min(100, n / parts * 100)}%"></span></span><span class="tp-t">${n >= parts ? '每一關都完成過了 ✓' : `完成 ${n} / ${parts} 關`}</span>`;
      t.insertBefore(p, t.querySelector('.go'));
      return;
    }
    if (t.dataset.store) {
      const marks = read(t.dataset.store + '.marks', {});
      n = Object.values(marks).filter(m => m === 'k').length;
      line = n >= total ? '全部記住了 ✓' : `已記住 ${n.toLocaleString()} / ${total.toLocaleString()}`;
    } else {
      const done = read(t.dataset.essays, {});
      n = Object.values(done).filter(d => d && d.m && d.o).length;
      line = n >= total ? '七篇都拆解完了 ✓' : `已拆解 ${n} / ${total} 篇`;
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

/* 備份碼 (2026-11-08). Every page in this family keeps its records in this
   browser only -- months of 記住了 and review dates, the check history, the
   task, the essays taken apart, the reading parts finished. A new phone, a
   different browser or cleared site data loses all of it, and the longer the
   student has practised the worse that is. There is no server and no
   account, so the way across is a code the student keeps (in LINE Keep, in
   Notes) and pastes on the new device.

   The code is the progress keys only, JSON, deflated when the browser can
   (CompressionStream) and base64url-encoded, behind a prefix that says how:
   EL1z. (deflated) or EL1j. (plain). Restoring replaces this browser's
   progress with the code's, after a confirm; voices, speeds and the teacher
   switch stay as they are on this device. */
const BK_PREFIXES = ['hsv.', 'jhv.', 'lc.', 'ew.', 'rd.'];
const BK_SKIP = /\.(voice|rate|mode|teacher|deckkind|zh)$/;   // this device's settings, not progress
function bkKeys() {
  const keys = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (BK_PREFIXES.some(p => k.startsWith(p)) && !BK_SKIP.test(k)) keys.push(k);
    }
  } catch (e) {}
  return keys.sort();
}
const b64u = bytes => { let s = ''; bytes.forEach(b => { s += String.fromCharCode(b); }); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
const unb64u = str => { const s = atob(str.replace(/-/g, '+').replace(/_/g, '/')); return Uint8Array.from(s, c => c.charCodeAt(0)); };
async function pipe(bytes, stream) {
  return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer());
}
async function makeCode() {
  const data = { v: 1, at: new Date().toISOString().slice(0, 10), keys: {} };
  bkKeys().forEach(k => { data.keys[k] = localStorage.getItem(k); });
  const raw = new TextEncoder().encode(JSON.stringify(data));
  if ('CompressionStream' in window) {
    try { return 'EL1z.' + b64u(await pipe(raw, new CompressionStream('deflate-raw'))); } catch (e) {}
  }
  return 'EL1j.' + b64u(raw);
}
async function readCode(code) {
  code = code.replace(/\s+/g, '');
  const m = code.match(/^EL1([zj])\.([\w-]+)$/);
  if (!m) throw new Error('這不是英文學習的備份碼。');
  let bytes = unb64u(m[2]);
  if (m[1] === 'z') {
    if (!('DecompressionStream' in window)) throw new Error('這個瀏覽器太舊，讀不了這個備份碼。請換新版的 Safari 或 Chrome。');
    bytes = await pipe(bytes, new DecompressionStream('deflate-raw'));
  }
  const data = JSON.parse(new TextDecoder().decode(bytes));
  if (!data || data.v !== 1 || typeof data.keys !== 'object') throw new Error('備份碼不完整，請重新複製一次。');
  return data;
}
function bkSummary(keys) {
  const marks = k => { try { return Object.values(JSON.parse(keys[k] || '{}')).filter(m => m === 'k').length; } catch (e) { return 0; } };
  const parts = [];
  const j = marks('jhv.marks'), h = marks('hsv.marks');
  if (j) parts.push(`國中單字 記住 ${j.toLocaleString()} 個`);
  if (h) parts.push(`高中單字 記住 ${h.toLocaleString()} 個`);
  try { const e = Object.values(JSON.parse(keys['ew.done'] || '{}')).filter(d => d && d.m && d.o).length; if (e) parts.push(`學測寫作 拆解 ${e} 篇`); } catch (e) {}
  try { const r = Object.keys(JSON.parse(keys['rd.done'] || '{}')).length; if (r) parts.push(`高中閱讀 完成 ${r} 關`); } catch (e) {}
  return parts.length ? parts.join('、') : '還沒有練習紀錄';
}
function bkDialog(html) {
  let dlg = document.getElementById('bk');
  if (!dlg) {
    document.body.insertAdjacentHTML('beforeend', '<dialog class="report" id="bk" aria-labelledby="bkH"></dialog>');
    dlg = document.getElementById('bk');
  }
  dlg.innerHTML = html;
  if (!dlg.open) dlg.showModal();
  return dlg;
}
async function openBackup() {
  const code = await makeCode();
  const keys = {}; bkKeys().forEach(k => { keys[k] = localStorage.getItem(k); });
  const dlg = bkDialog(`
    <h2 id="bkH">你的備份碼</h2>
    <p class="bk-msg">內容：${esc(bkSummary(keys))}。把整段複製下來，存在 LINE 的 Keep 或手機的備忘錄。換到新裝置時，打開「英文學習」，按「貼上備份碼還原」就可以了。</p>
    <textarea class="bk-code" id="bkCode" readonly aria-label="備份碼">${esc(code)}</textarea>
    <p class="bk-msg" id="bkMsg"></p>
    <div class="rp-row">
      <button class="rp-copy" id="bkCopy">複製備份碼</button>
      <button class="rp-close" id="bkClose">關閉</button>
    </div>`);
  dlg.querySelector('#bkCopy').addEventListener('click', () => {
    const box = dlg.querySelector('#bkCode'), msg = dlg.querySelector('#bkMsg');
    const fallback = () => { box.focus(); box.select(); msg.textContent = '已選取，請按「拷貝」。'; };
    try { navigator.clipboard.writeText(code).then(() => { msg.textContent = '已複製 ✓'; }, fallback); } catch (e) { fallback(); }
  });
  dlg.querySelector('#bkClose').addEventListener('click', () => dlg.close());
}
function openRestore() {
  const dlg = bkDialog(`
    <h2 id="bkH">貼上備份碼還原</h2>
    <p class="bk-msg">把之前存下來的備份碼整段貼在下面。還原後，這台裝置上現在的紀錄會被備份碼裡的紀錄取代。</p>
    <textarea class="bk-code" id="bkIn" aria-label="備份碼" placeholder="EL1z.…"></textarea>
    <p class="bk-msg" id="bkMsg"></p>
    <div class="rp-row">
      <button class="rp-copy" id="bkGo">還原</button>
      <button class="rp-close" id="bkClose">取消</button>
    </div>`);
  const msg = dlg.querySelector('#bkMsg');
  dlg.querySelector('#bkClose').addEventListener('click', () => dlg.close());
  dlg.querySelector('#bkGo').addEventListener('click', async () => {
    msg.classList.remove('bad');
    let data;
    try { data = await readCode(dlg.querySelector('#bkIn').value); }
    catch (e) { msg.classList.add('bad'); msg.textContent = e.message && /[一-鿿]/.test(e.message) ? e.message : '讀不出這個備份碼，請確認整段都貼上了。'; return; }
    const here = {}; bkKeys().forEach(k => { here[k] = localStorage.getItem(k); });
    const ok = confirm(`備份碼（${data.at}）：${bkSummary(data.keys)}\n\n這台裝置現在：${bkSummary(here)}\n\n要用備份碼取代這台裝置的紀錄嗎？`);
    if (!ok) return;
    try {
      bkKeys().forEach(k => localStorage.removeItem(k));
      Object.entries(data.keys).forEach(([k, v]) => {
        if (BK_PREFIXES.some(p => k.startsWith(p)) && !BK_SKIP.test(k) && typeof v === 'string') localStorage.setItem(k, v);
      });
    } catch (e) { msg.classList.add('bad'); msg.textContent = '這個瀏覽器不允許儲存資料（可能是無痕模式），沒辦法還原。'; return; }
    location.reload();
  });
}
document.getElementById('bkMake')?.addEventListener('click', openBackup);
document.getElementById('bkRestore')?.addEventListener('click', openRestore);
