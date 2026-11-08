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
   3. 學習報告: the same numbers as a few lines of text the student copies and
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
  let due = 0, known = 0, shaky = 0;
  for (const id in marks) {
    if (marks[id] === 'k') known++; else if (marks[id] === 'r') shaky++;
    const s = sched[id];
    if (s ? s.due <= today : marks[id] === 'r') due++;
  }
  return { ...p, due, known, shaky, used: known + shaky > 0 };
}

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function drawToday() {
  const box = document.getElementById('today');
  const pages = PAGES.map(tally).filter(p => p.used);
  if (!box || !pages.length) return;
  const due = pages.reduce((n, p) => n + p.due, 0);
  const rows = pages.map(p => `
    <li class="td-row">
      <span class="td-name">${esc(p.zh)}</span>
      <span class="td-meta">${p.due ? `<b>${p.due}</b> 個要複習 · ` : ''}已記住 ${p.known.toLocaleString()} 個</span>
      <a class="td-go" href="${esc(p.href)}#today">${p.due ? '複習' : '學新字'} ›</a>
    </li>`).join('');
  box.innerHTML = due
    ? `<p class="td-eyebrow">今天的複習</p>
       <h2 class="td-title" id="todayTitle"><span class="td-num">${due}</span> 個字<br>到了該複習的時候</h2>
       <p class="td-why">隔一段時間再看一次，是讓字記得久的關鍵。每次約 20 個，到期的字先出。</p>
       <ul class="td-rows">${rows}</ul>`
    : `<p class="td-eyebrow">今天的複習</p>
       <h2 class="td-title" id="todayTitle">今天的複習<br>都做完了</h2>
       <p class="td-why">記住的字會隔幾天再回來。今天還有時間，可以學幾個新字。</p>
       <ul class="td-rows">${rows}</ul>`;
  box.insertAdjacentHTML('beforeend', `<button class="td-report" id="openReport">產生學習報告，傳給老師 ›</button>`);
  box.hidden = false;
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
  PAGES.map(tally).forEach(p => {
    if (!p.used) { lines.push(`${p.zh}：還沒開始`); return; }
    lines.push(`${p.zh}：已記住 ${p.known} 個、還不熟 ${p.shaky} 個、今天到期 ${p.due} 個`);
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

drawToday();
drawLastCheck();
