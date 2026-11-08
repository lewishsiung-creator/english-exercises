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
   2. The last 程度檢測 result, written by check/ as lc.result. */

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
  box.hidden = false;
}

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
