/* 程度檢測 — where should this student start?

   A vocabulary-size check in three bands, easiest first: 國中基本字, 國中常用字,
   then 高中 (第一、二級 minus everything already on the 國中 list). Eight
   words a band, each "see the English, pick the Chinese", with a fifth
   choice, 不知道.

   Four decisions it rests on:

   1. **No right or wrong during the test.** A placement measures; it does not
      teach. Telling a student they missed one changes how they answer the
      next. The words they missed are shown at the end, with their meanings.
   2. **不知道 is an answer.** Without it a student guesses, a quarter of the
      guesses land, and the result says they know words they do not.
   3. **It stops early.** A band with half or fewer known is where to start;
      there is no point making a 國一 student sit through 高中 words.
   4. **No score.** Each band comes back as 已掌握 / 大致掌握 / 還需要練, and the
      result is a place to start, linked straight to that set (#set/<set> on
      the word page). The last result is kept on this device only, so /learn/
      can remind the student of it. */

const PER_BAND = 8;
const BANDS = [
  { key: 'basic', zh: '國中基本字', href: '../../reading/junior-vocab/#set/basic', page: '國中單字' },
  { key: 'more', zh: '國中常用字', href: '../../reading/junior-vocab/#set/more', page: '國中單字' },
  { key: 'hs', zh: '高中單字', href: '../../reading/vocab/#set/2', page: '高中單字' },
];
// known out of 8: 7–8 已掌握, 5–6 大致掌握, 0–4 還需要練
const grade = n => n >= PER_BAND - 1 ? 'good' : n >= PER_BAND - 3 ? 'fair' : 'low';
const GRADE_ZH = { good: '已掌握', fair: '大致掌握', low: '還需要練' };

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const store = {
  get(k, d) { try { const v = localStorage.getItem('lc.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('lc.' + k, JSON.stringify(v)); } catch (e) {} },
};

/* Three wrong options from the same band and, where there are enough, the
   same part of speech -- so the right one cannot be picked by its shape. */
function question(item, band) {
  const pool = POOLS[band].filter(o => o.zh !== item.zh);
  const same = shuffle(pool.filter(o => o.pos === item.pos));
  const others = shuffle(pool.filter(o => o.pos !== item.pos));
  const wrong = same.concat(others).slice(0, 3).map(o => o.zh);
  return { band, item, opts: shuffle([item.zh, ...wrong]) };
}

const T = { qs: [], i: 0, known: {}, missed: [], band: 0 };

function drawBand(b) {
  return shuffle(POOLS[BANDS[b].key]).slice(0, PER_BAND).map(it => question(it, BANDS[b].key));
}

function start() {
  T.band = 0; T.qs = drawBand(0); T.i = 0; T.known = {}; T.missed = [];
  BANDS.forEach(b => { T.known[b.key] = 0; });
  showQuestion();
}

/* ---------- speech: the word, once, if the student asks ---------- */
let voice = null;
function pickVoice() {
  if (!('speechSynthesis' in window)) return;
  const vs = speechSynthesis.getVoices().filter(v => /^en[-_]US/i.test(v.lang));
  voice = vs.find(v => /Samantha|Ava|Allison|Google US English/i.test(v.name)) || vs[0] || null;
}
if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function say(text) {
  if (!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  if (voice) u.voice = voice;
  u.lang = voice ? voice.lang : 'en-US'; u.rate = 0.9;
  speechSynthesis.cancel();
  setTimeout(() => speechSynthesis.speak(u), 60);   // Safari drops a speak() issued straight after cancel()
}

/* ---------- screens ---------- */
function showIntro() {
  const last = store.get('result', null);
  $('#screen').innerHTML = `
    <section class="intro">
      <p class="eyebrow">英文學習</p>
      <h1>程度檢測</h1>
      <p class="sub">約 4 分鐘，找到你該從哪裡開始。</p>
      <ul class="how">
        <li><b>${PER_BAND * BANDS.length} 題以內</b>：看英文，選它的中文意思。</li>
        <li><b>不確定就按「不知道」</b>。猜對的字會讓結果不準。</li>
        <li><b>過程中不告訴你對錯</b>，最後一次看，也會列出值得先看的字。</li>
      </ul>
      <button class="btn-primary" id="go">開始檢測</button>
      ${last && last.path ? `<p class="last">上次（${esc(last.date)}）的建議：從 <a href="../../${esc(last.path)}">${esc(last.zh)}</a> 開始。</p>` : ''}
    </section>`;
  $('#go').focus({ preventScroll: true });
}

function showQuestion() {
  const q = T.qs[T.i];
  const total = PER_BAND * BANDS.length;
  const n = T.band * PER_BAND + T.i + 1;
  $('#screen').innerHTML = `
    <section class="q" data-band="${q.band}">
      <div class="progress" role="progressbar" aria-valuemin="1" aria-valuemax="${total}" aria-valuenow="${n}"
        aria-label="第 ${n} 題，共 ${total} 題以內"><span style="width:${(n - 1) / total * 100}%"></span></div>
      <p class="count">第 ${n} 題 <span>· ${esc(BANDS[T.band].zh)}</span></p>
      <div class="word"><span lang="en">${esc(q.item.w)}</span>
        <button class="say" id="say" aria-label="聽發音">&#9654;&#xFE0E;</button></div>
      <p class="ask">這個字的意思是？</p>
      <div class="opts">
        ${q.opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="key">${k + 1}</span>${esc(o)}</button>`).join('')}
        <button class="opt dunno" data-k="-1"><span class="key">0</span>不知道</button>
      </div>
    </section>`;
}

function answer(k) {
  const q = T.qs[T.i];
  const right = k >= 0 && q.opts[k] === q.item.zh;
  if (right) T.known[q.band]++;
  else T.missed.push(q.item);
  T.i++;
  if (T.i < T.qs.length) { showQuestion(); return; }
  // end of a band: go on only while the student is still comfortable
  const known = T.known[BANDS[T.band].key];
  if (T.band + 1 < BANDS.length && known > PER_BAND / 2) {
    T.band++; T.qs = drawBand(T.band); T.i = 0; showQuestion(); return;
  }
  showResult();
}

/* The first band not yet mastered is where to start. If every band is, the
   next thing is reading -- and 第三級, when it arrives. */
function recommend() {
  const at = BANDS.findIndex((b, i) => i <= T.band && grade(T.known[b.key]) !== 'good');
  if (at >= 0) {
    const b = BANDS[at];
    const why = grade(T.known[b.key]) === 'fair'
      ? `你已經認得大部分的${b.zh}，先把剩下的補齊，再往上走。`
      : `${b.zh}還有不少字不熟，這裡打好底，後面會輕鬆很多。`;
    return { zh: b.zh, href: b.href, page: b.page, why };
  }
  return { zh: '高中英文閱讀', href: '../../reading/', page: '高中英文閱讀',
    why: '三組字你都掌握了。接下來用文章練閱讀，高中單字第三級起也會陸續加入。' };
}

/* Before and after. Every result is kept here (lc.history, the last 12), so a
   retest can say what moved: a band compared with the last time it was tested.
   Only a change upward is called out; a band that slipped just shows where it
   is now, since the test samples eight words and one bad draw is not news. */
const RANK = { low: 0, fair: 1, good: 2 };
function lastResult() {
  const h = store.get('history', []);
  return h.length ? h[h.length - 1] : null;
}
function saveResult() {
  const h = store.get('history', []);
  const d = new Date();
  const known = {};
  BANDS.forEach((b, i) => { known[b.key] = i <= T.band ? T.known[b.key] : null; });
  store.set('history', h.concat({ date: `${d.getMonth() + 1}/${d.getDate()}`, known }).slice(-12));
}

function showResult() {
  const rec = recommend();
  const prev = lastResult();
  saveResult();
  const today = new Date();
  // kept as a path from the site root, so this page and /learn/ can each put their own ../ in front
  store.set('result', { date: `${today.getMonth() + 1}/${today.getDate()}`, zh: rec.zh, path: rec.href.replace('../../', '') });
  const ups = [];
  const rows = BANDS.map((b, i) => {
    const done = i <= T.band;
    const g = done ? grade(T.known[b.key]) : 'skip';
    const label = done ? GRADE_ZH[g] : '這次沒測';
    const was = prev && prev.known[b.key] != null ? grade(prev.known[b.key]) : null;
    const up = done && was && RANK[g] > RANK[was];
    if (up) ups.push(`${b.zh}：${GRADE_ZH[was]} → ${GRADE_ZH[g]}`);
    return `<li class="lvl ${g}">
      <span class="b-name">${esc(b.zh)}</span>
      <span class="b-bar" aria-hidden="true"><span style="width:${done ? T.known[b.key] / PER_BAND * 100 : 0}%"></span></span>
      <span class="b-grade">${label}</span>
      ${was && done ? `<span class="b-prev ${up ? 'up' : ''}">${up ? '↑ ' : ''}上次 ${GRADE_ZH[was]}</span>` : ''}</li>`;
  }).join('');
  const missed = T.missed.slice(0, 12);
  $('#screen').innerHTML = `
    <section class="result">
      <p class="eyebrow">檢測結果</p>
      <h1>建議從<br><span class="grad">${esc(rec.zh)}</span>開始</h1>
      <p class="why">${esc(rec.why)}</p>
      ${ups.length ? `<div class="growth"><p class="g-k">比上次（${esc(prev.date)}）進步了</p>
        ${ups.map(u => `<p class="g-v">${esc(u)}</p>`).join('')}</div>` : ''}
      <a class="btn-primary" href="${esc(rec.href)}">開始練習 ›</a>
      <ul class="bands">${rows}</ul>
      ${missed.length ? `<h2>值得先看的字</h2>
        <ul class="missed">${missed.map(m => `<li><span lang="en">${esc(m.w)}</span>
          <button class="say" data-say="${esc(m.say)}" aria-label="聽 ${esc(m.w)} 的發音">&#9654;&#xFE0E;</button>
          <span class="m-zh">${esc(m.zh)}</span></li>`).join('')}</ul>` : ''}
      <div class="again">
        <button class="btn-quiet" id="again">再測一次</button>
        <a class="btn-quiet" href="../">回英文學習</a>
      </div>
    </section>`;
  window.scrollTo(0, 0);
}

/* ---------- events ---------- */
document.addEventListener('click', ev => {
  const t = ev.target.closest('button'); if (!t) return;
  if (t.id === 'go' || t.id === 'again') { start(); window.scrollTo(0, 0); return; }
  if (t.id === 'say') { say(T.qs[T.i].item.say); return; }
  if (t.dataset.say) { say(t.dataset.say); return; }
  if (t.dataset.k != null) answer(+t.dataset.k);
});
// 1–4 pick an option, 0 is 不知道: a keyboard can take the test without a mouse
document.addEventListener('keydown', ev => {
  if (!$('.q') || ev.metaKey || ev.ctrlKey || ev.altKey) return;
  if (/^[1-4]$/.test(ev.key)) answer(+ev.key - 1);
  else if (ev.key === '0') answer(-1);
});

showIntro();
