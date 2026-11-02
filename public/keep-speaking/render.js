/* Keep Speaking — the renderer. All the words are in content.js.

   One page with five tabs, routed by the hash so a tab, a scenario or an email
   can be handed out as a link and the back button works:

     #today                       今天
     #concepts                    觀念
     #phrases  /mine /upgrade /clarify   句型
     #scenes   /a … /f            情境
     #email    /1 … /3  /write    Email

   THE ONE NUMBER. The page counts how many times the trainee spoke, and only
   that. "我說了" is on trust and a finished recording counts too. It is never
   a measure of being right, so nothing else on the page keeps score: wrong
   answers wobble, explain themselves and stay open, as on the adult pages.

   Everything kept is in localStorage under `ks.`, on this device only. A draft
   in 我的 Email is deliberately not kept: it may be a real business email. */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const text = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem(`ks.${k}`);
      return v === null ? d : JSON.parse(v);
    } catch { return d; }
  },
  set(k, v) {
    try { localStorage.setItem(`ks.${k}`, JSON.stringify(v)); } catch { /* private window */ }
  },
};

const pad = (n) => String(n).padStart(2, '0');
const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

// The Monday of a date's week, which is the key a week's check-in is kept under.
function weekKey(d = new Date()) {
  const m = new Date(d);
  m.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return dayKey(m);
}

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Chinese always shows; it is instructions, not comprehension practice.
const note = (o) => `<p class="note-zh">${text(o.zh)}</p>${o.en ? `<p class="note-en">${text(o.en)}</p>` : ''}`;

// -------------------------------------------------------------- the tally

function spokenTotal() {
  return Object.values(store.get('log', {})).reduce((a, b) => a + b, 0);
}

function paintTally() {
  const n = spokenTotal();
  $$('.tally-n').forEach((e) => { e.textContent = n; });
  const strip = $('#weekstrip');
  if (strip) strip.innerHTML = weekStrip();
}

function addSpoken() {
  const log = store.get('log', {});
  const k = dayKey();
  log[k] = (log[k] || 0) + 1;
  store.set('log', log);
  paintTally();
  const hit = MILESTONES.find((m) => m.n === spokenTotal());
  if (hit) toast(hit.zh);
}

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { t.hidden = true; }, 4200);
}

// A plain row of the last seven days. It shows days spoken and never breaks: a
// streak would make an empty day a failure, which is the opposite of the point.
function weekStrip() {
  const log = store.get('log', {});
  const names = '日一二三四五六';
  const cells = [];
  for (let i = 6; i >= 0; i -= 1) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const n = log[dayKey(d)] || 0;
    cells.push(`<li class="${n ? 'on' : ''}${i === 0 ? ' now' : ''}"
      aria-label="週${names[d.getDay()]}開口 ${n} 次"><b>${n || ''}</b><span>${names[d.getDay()]}</span></li>`);
  }
  return cells.join('');
}

// -------------------------------------------------------------- speech

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

// Two people talking should not be one voice. If the device has a second one,
// these speakers take it; the trainee's own chosen voice is left on the rest.
const OTHER_VOICE = /Marcus|Kevin|James|Jason|Tanaka/;

function voiceFor(who) {
  if (!who || !OTHER_VOICE.test(who)) return voice;
  return voices.find((v) => v !== voice && v.lang.startsWith('en-')
    && /Daniel|Alex|Aaron|Tom|Evan|Nathan|Fred|Reed|Guy|Ryan|Google UK English Male/i.test(v.name)) || voice;
}

// What the slots and currency signs have to become for a voice to say them.
function forSpeech(s) {
  return s
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/NT\$([\d.]+)M/g, '$1 million N T dollars')
    .replace(/NT\$([\d,]+)K/g, '$1 thousand N T dollars')
    .replace(/HK\$500,000/g, 'five hundred thousand Hong Kong dollars')
    .replace(/HK\$500K/g, 'five hundred thousand Hong Kong dollars')
    .replace(/500K/g, 'five hundred thousand')
    .replace(/~/g, 'about ')
    .replace(/㎡/g, ' square meters')
    .replace(/\.\.\.$/, '')
    .replace(/\bQ([1-4])\b/g, 'Q $1');
}

function speak(sentence, who) {
  if (!canSpeak) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(forSpeech(sentence));
  const v = voiceFor(who);
  if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = 'en-US'; }
  u.rate = Number($('#rate').value);
  // Safari drops an utterance queued in the same tick as cancel().
  setTimeout(() => speechSynthesis.speak(u), 0);
}

// -------------------------------------------------------------- recording

/* One take at a time. The blob stays in this tab's memory until the trainee
   records again or leaves the view; it is never uploaded or stored. */
let take = null;

function dropTake() {
  if (take && take.rec && take.rec.state === 'recording') take.rec.stop();
  $$('.take audio').forEach((a) => { URL.revokeObjectURL(a.src); });
  $$('.take').forEach((t) => { t.hidden = true; t.innerHTML = ''; });
  $$('.act-rec.on').forEach((b) => { b.classList.remove('on'); b.textContent = '🎙 錄下來'; });
}

async function toggleRecord(btn) {
  if (take && take.rec && take.rec.state === 'recording') { take.rec.stop(); return; }

  const box = btn.closest('.say');
  const out = $('.take', box);
  const fail = (msg) => { out.hidden = false; out.innerHTML = `<p class="take-msg">${msg}</p>`; };

  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
    fail('這個瀏覽器不能錄音。直接說出來，再按「我說了」也一樣算數。');
    return;
  }

  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch {
    fail('沒有拿到麥克風。直接說出來，再按「我說了」也一樣算數。');
    return;
  }

  dropTake();

  const rec = new MediaRecorder(stream);
  const chunks = [];
  rec.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
  rec.onstop = () => {
    // Release the microphone first, so its indicator goes out whatever follows.
    stream.getTracks().forEach((t) => t.stop());
    clearTimeout(limit);
    take = null;
    btn.classList.remove('on');
    btn.textContent = '🎙 再錄一次';
    if (!chunks.length) { fail('這次沒有錄到聲音。'); return; }
    const url = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || 'audio/webm' }));
    out.hidden = false;
    out.innerHTML = `<audio controls src="${url}"></audio>
      <p class="take-msg">聽聽自己的，再按 🔊 比一比。這段錄音只在這裡，離開就消失。</p>`;
    markSaid(box);
    addSpoken();
  };

  // A forgotten take should not leave the microphone open.
  const limit = setTimeout(() => { if (rec.state === 'recording') rec.stop(); }, 90000);
  take = { rec };
  rec.start();
  btn.classList.add('on');
  btn.textContent = '■ 停止';
}

window.addEventListener('pagehide', dropTake);

// The block that every speaking moment on the page is made of.
function sayBlock({ en, zh, lv, who, say, sub }) {
  const spoken = say || en;
  return `<div class="say" data-say="${text(spoken)}" data-who="${text(who || '')}">
    <p class="say-en">${lv ? `<span class="lv">${text(lv)}</span>` : ''}${text(en)}</p>
    ${say && say !== en ? `<p class="say-fill">例：${text(say)}</p>` : ''}
    ${zh ? `<p class="zh">${text(sub || zh)}</p>` : ''}
    <div class="acts">
      <button class="act" data-act="hear">🔊 聽</button>
      <button class="act act-rec" data-act="rec">🎙 錄下來</button>
      <button class="act act-said" data-act="said">我說了</button>
    </div>
    <div class="take" hidden></div>
  </div>`;
}

function markSaid(box) {
  const b = $('.act-said', box);
  b.classList.add('done');
  b.textContent = '✓ 說了，再說一次';
}

// -------------------------------------------------------------- sorters

/* One statement at a time into one of a few buckets. A wrong bucket wobbles,
   says why and stays open. There is a position, never a score. */
const sorts = new Map();

function sortBlock(cfg) {
  sorts.set(cfg.id, { cfg, items: shuffle(cfg.items), i: 0, solved: false });
  return `<div class="sorter" id="sort-${cfg.id}">${sortInner(cfg.id)}</div>`;
}

function sortInner(id) {
  const s = sorts.get(id);
  const { cfg } = s;
  if (s.i >= s.items.length) {
    return `<p class="done-line">全部走過一次了。</p>
      <button class="pill" data-act="sort-again" data-id="${id}">打亂再來一次</button>`;
  }
  const item = s.items[s.i];
  return `<p class="sort-ask">${text(cfg.ask)} <span>${s.i + 1} / ${s.items.length}</span></p>
    <div class="sort-q ${cfg.english ? 'is-en' : ''}">
      ${cfg.english ? `<p class="line-en">${text(item.q)}</p>` : `<p>${text(item.q)}</p>`}
      ${cfg.english ? `<button class="mini" data-act="hear" data-say="${text(item.q)}">🔊</button>` : ''}
    </div>
    <div class="sort-btns" style="--n:${cfg.buckets.length}">
      ${cfg.buckets.map((b) => `<button class="bucket" data-act="sort-pick" data-id="${id}" data-key="${b.key}">
        ${text(b.zh)}${b.en ? `<small>${text(b.en)}</small>` : ''}</button>`).join('')}
    </div>
    <div class="sort-why" hidden></div>`;
}

function sortPick(btn) {
  const s = sorts.get(btn.dataset.id);
  const box = $(`#sort-${btn.dataset.id}`);
  const item = s.items[s.i];
  const why = $('.sort-why', box);
  if (s.solved) return;

  if (btn.dataset.key !== item.a) {
    wobble(btn);
    btn.disabled = true;
    why.hidden = false;
    why.className = 'sort-why soft';
    why.innerHTML = '<p>再想想看。這句話比較不像這一邊。</p>';
    return;
  }
  s.solved = true;
  btn.classList.add('right');
  why.hidden = false;
  why.className = 'sort-why good';
  why.innerHTML = `${item.zh ? `<p class="zh">${text(item.zh)}</p>` : ''}<p>${text(item.why)}</p>
    <button class="pill" data-act="sort-next" data-id="${btn.dataset.id}">下一句</button>`;
}

function wobble(el) {
  el.classList.remove('wobble');
  void el.offsetWidth;
  el.classList.add('wobble');
}

// -------------------------------------------------------------- BLUF order

let blufSet = 0;
let blufCards = [];
let blufNext = 0;

function blufDeal() {
  const set = BLUF_SETS[blufSet];
  blufCards = shuffle(BLUF_PARTS.map((p) => ({ part: p.key, en: set[p.key] })));
  blufNext = 0;
}

function blufInner() {
  const set = BLUF_SETS[blufSet];
  const slots = BLUF_PARTS.map((p, i) => `<li class="slot ${i < blufNext ? 'full' : ''}">
    <span class="slot-tag">${i + 1} ${text(p.zh)}</span>
    <span class="slot-en">${i < blufNext ? text(set[p.key]) : ''}</span></li>`).join('');

  const done = blufNext === 3;
  const left = blufCards.filter((c) => BLUF_PARTS.findIndex((p) => p.key === c.part) >= blufNext);

  return `<p class="sort-ask">${text(set.zh)} <span>${blufSet + 1} / ${BLUF_SETS.length}</span></p>
    <ol class="slots">${slots}</ol>
    ${done ? `${sayBlock({ en: `${set.c} ${set.r} ${set.a}` })}
      <button class="pill" data-act="bluf-next">下一組</button>`
    : `<p class="slot-hint">依序點選：先放「${text(BLUF_PARTS[blufNext].zh)}」</p>
      <div class="cards">${left.map((c) => `<button class="sent" data-act="bluf-pick" data-part="${c.part}">${text(c.en)}</button>`).join('')}</div>
      <p class="slot-msg" hidden></p>`}`;
}

function blufPick(btn) {
  const want = BLUF_PARTS[blufNext];
  if (btn.dataset.part === want.key) {
    blufNext += 1;
    $('#bluf').innerHTML = blufInner();
    return;
  }
  wobble(btn);
  const got = BLUF_PARTS.find((p) => p.key === btn.dataset.part);
  const msg = $('.slot-msg');
  msg.hidden = false;
  msg.textContent = `這句是「${got.zh}」。現在要放的是「${want.zh}」。`;
}

// -------------------------------------------------------------- drills

/* The core exercise: read a situation in Chinese, say the English out loud
   BEFORE seeing it, then check. Used by 今天三分鐘 and by every 說說看. */
const drills = new Map();

function phraseItems() {
  return FUNCTIONS.flatMap((f) => f.phrases.map((p) => ({
    id: p.id, kind: `功能 ${f.n}：${f.zh}`, sit: p.sit, en: p.en, zh: p.zh, say: p.fill, sub: p.fillZh, lv: p.lv,
  })));
}
const upgradeItems = () => UPGRADES.map((u) => ({
  id: u.id, kind: '升級表', sit: `你正要說：${u.weak} 換一個更強的說法。`, en: u.strong, zh: u.zh, say: u.fill, effect: u.effect,
}));
const clarifyItems = () => CLARIFY.map((c, i) => ({
  id: c.id, kind: '追問', sit: `對方只說「不適合」。追問${['是哪個部分', '有沒有例子', '具體擔心什麼', '哪些部分可以接受', '你理解得對不對'][i]}。`,
  en: c.en, zh: c.zh, lv: c.lv,
}));
const momentItems = () => MOMENTS.map((m) => ({ ...m, kind: '情境' }));

function drillBlock(id, deal, doneMsg, start = 0) {
  drills.set(id, { items: deal(), deal, i: start, shown: false, doneMsg });
  return `<div class="drill" id="drill-${id}">${drillInner(id)}</div>`;
}

function drillInner(id) {
  const d = drills.get(id);
  if (d.i >= d.items.length) {
    return `<div class="drill-end"><p class="done-big">${text(d.doneMsg || '這組說完了。')}</p>
      <p class="note-en">${text(COURSE.motto.en)}</p>
      <button class="pill" data-act="drill-more" data-id="${id}">再來一組</button></div>`;
  }
  const it = d.items[d.i];
  return `<p class="drill-head"><span>${text(it.kind)}</span><span>${d.i + 1} / ${d.items.length}</span></p>
    <p class="drill-sit">${text(it.sit)}</p>
    ${d.shown ? `${sayBlock({ en: it.en, zh: it.zh, lv: it.lv, say: it.say, sub: it.sub })}
      ${it.effect ? `<p class="effect">${text(it.effect)}</p>` : ''}
      <button class="pill" data-act="drill-next" data-id="${id}">${d.i + 1 === d.items.length ? '完成' : '下一句'}</button>`
    : `<p class="drill-try">先用你自己的話，大聲說一次。說錯也沒關係。</p>
      <button class="pill" data-act="drill-show" data-id="${id}">說完了，看參考句</button>`}`;
}

function touch(id) {
  const seen = store.get('seen', {});
  seen[id] = dayKey();
  store.set('seen', seen);
}

// Three different kinds, least recently practised first, fixed for the day.
function pickThree() {
  const seen = store.get('seen', {});
  const stale = (list) => shuffle(list).sort((a, b) => (seen[a.id] || '').localeCompare(seen[b.id] || ''));
  return [
    stale(phraseItems())[0],
    stale([...upgradeItems(), ...clarifyItems()])[0],
    stale(momentItems())[0],
  ];
}

function dealThree() {
  const items = pickThree();
  store.set('today', { date: dayKey(), ids: items.map((i) => i.id), i: 0 });
  return items;
}

function todaysThree() {
  const saved = store.get('today', null);
  const all = [...phraseItems(), ...upgradeItems(), ...clarifyItems(), ...momentItems()];
  if (saved && saved.date === dayKey()) {
    const items = saved.ids.map((i) => all.find((x) => x.id === i)).filter(Boolean);
    if (items.length === 3) return { items, start: saved.i || 0 };
  }
  return { items: dealThree(), start: 0 };
}

// -------------------------------------------------------------- 今天

function viewToday() {
  const week = store.get('weeks', {});
  const key = weekKey();
  const now = week[key] || {};
  const friday = [5, 6].includes(new Date().getDay());

  const weekly = `<section class="block" id="weekly">
    <h2>週五檢查 <span>Weekly Self-Check</span></h2>
    <p class="note-zh">${text(WEEKLY.note)}</p>
    ${WEEKLY.checks.map((c, i) => `<div class="check" data-q="${c.id}">
      <p class="check-q"><b>Q${i + 1}</b> ${text(c.zh)}</p>
      <p class="note-en">${text(c.en)}</p>
      <div class="yn">
        <button class="mini-pill" data-act="week" data-q="${c.id}" data-v="yes" aria-pressed="${now[c.id] === 'yes'}">有</button>
        <button class="mini-pill" data-act="week" data-q="${c.id}" data-v="no" aria-pressed="${now[c.id] === 'no'}">還沒</button>
      </div>
      <p class="check-reply" ${now[c.id] ? '' : 'hidden'}>${now[c.id] ? weekReply(c, now[c.id]) : ''}</p>
    </div>`).join('')}
    <div class="check">
      <p class="check-q"><b>Q4</b> ${text(WEEKLY.q4.zh)}</p>
      <p class="note-en">${text(WEEKLY.q4.en)}</p>
      <textarea id="q4" rows="3" placeholder="寫給自己看的，只存在這台裝置。">${text(now.q4 || '')}</textarea>
    </div>
    ${pastWeeks(week, key)}
  </section>`;

  const tally = `<section class="tally">
    <p class="tally-big"><b class="tally-n">0</b><span>你開口的次數</span></p>
    <ol class="weekstrip" id="weekstrip"></ol>
    <div class="promise">${note(COURSE.promise)}</div>
  </section>`;

  const { items, start } = todaysThree();
  return `<header class="cover">
      <p class="kicker">${text(COURSE.kicker)}</p>
      <h1>${text(COURSE.title)}<span class="h1-zh">${text(COURSE.titleZh)}</span></h1>
      <p class="cover-intro">${COURSE.motto.zh.split(/(?<=。)/).map((x) => `<span>${text(x)}</span>`).join('')}</p>
    </header>

    ${friday ? weekly : ''}

    <section class="block">
      <h2>現在要做什麼？ <span>What's next at work?</span></h2>
      <div class="doors">
        ${DOORS.map((d) => `<a class="door" href="#${d.to}">
          <b>${text(d.zh)}</b><small>${text(d.en)}</small><span>${text(d.note)}</span></a>`).join('')}
      </div>
    </section>

    <section class="block">
      <h2>今天三分鐘 <span>Today's three</span></h2>
      <p class="note-zh">三個工作上會遇到的時刻。不用看稿，先開口。</p>
      ${drillBlock('today', () => items, '今天的三分鐘完成了。', start)}
    </section>

    ${tally}
    ${friday ? '' : weekly}`;
}

const weekReply = (c, v) => `${text(v === 'yes' ? c.yes : c.no)}${v === 'no'
  ? ` <a href="#${c.go}">${text(c.goLabel)}</a>` : ''}`;

function pastWeeks(all, key) {
  const past = Object.entries(all).filter(([k, v]) => k !== key && v.q4).sort().reverse().slice(0, 8);
  if (!past.length) return '';
  return `<details class="past"><summary>之前幾週的 Q4</summary>
    ${past.map(([k, v]) => `<p><b>${text(k.slice(5).replace('-', '/'))} 那週</b>${text(v.q4)}</p>`).join('')}</details>`;
}

// -------------------------------------------------------------- 觀念

function viewConcepts() {
  blufSet = 0;
  blufDeal();
  return `<header class="head">
      <p class="kicker">Part 1 · Core Concepts</p>
      <h1>核心觀念</h1>
      <p class="sub">忘記重點時，先回到這裡。每一項都可以練。</p>
    </header>

    <section class="block" id="bluf-sec">
      <h2>BLUF 結論先行 <span>Bottom Line Up Front</span></h2>
      <p class="note-zh">每次溝通用三層結構：結論 → 原因 → 行動</p>
      <div class="exercise" id="bluf">${blufInner()}</div>
    </section>

    <section class="block">
      <h2>高低語境 <span>High-Low Context</span></h2>
      <div class="ctxcards">
        ${CONTEXT.cards.map((c) => `<article class="ctxcard">
          <h3>${text(c.zh)}<span>${text(c.who)}</span></h3>
          <p>${text(c.points)}</p><p class="note-en">${text(c.en)}</p></article>`).join('')}
      </div>
      <div class="exercise">${sortBlock(CONTEXT.sort)}</div>
    </section>

    <section class="block">
      <h2>語氣量尺 <span>Tone Scale</span></h2>
      <p class="note-zh">目標是 3–4。太軟，對方聽不到；太硬，對方不想聽。</p>
      <ol class="scale">
        ${TONE.scale.map((l) => `<li class="${l.target ? 'target' : ''}">
          <b>${l.n}</b><div><strong>${text(l.zh)}</strong> <span>${text(l.en)}</span><p>${text(l.note)}</p></div></li>`).join('')}
      </ol>
      <div class="exercise">${sortBlock(TONE.sort)}</div>
    </section>

    <section class="block">
      <h2>三種會議行為 <span>Three Behavior Patterns</span></h2>
      <p class="note-zh">下次開會前，先問自己：今天我會比較像誰？</p>
      <div class="people">
        ${BEHAVIOR.people.map((p) => `<article class="person ${p.good ? 'good' : ''}">
          <h3>${text(p.name)}<span>${text(p.tag)}</span></h3>
          <p>${text(p.obs)}</p>
          <p class="lesson">${text(p.lesson)}</p><p class="note-en">${text(p.lessonEn)}</p></article>`).join('')}
      </div>
      <details class="past"><summary>一張卡看三種選擇</summary>
        <dl class="grid3">
          ${BEHAVIOR.table.map((r) => `<div><dt>${text(r.row)}</dt>
            <dd><b>Kevin</b>${text(r.kevin)}</dd><dd><b>Vivian</b>${text(r.vivian)}</dd><dd><b>Amy</b>${text(r.amy)}</dd></div>`).join('')}
        </dl>
      </details>
      <div class="exercise">${sortBlock(BEHAVIOR.sort)}</div>
    </section>`;
}

// -------------------------------------------------------------- 句型

const SUBTABS = [
  { to: 'phrases', zh: '四大功能' },
  { to: 'phrases/mine', zh: '我的小抄' },
  { to: 'phrases/upgrade', zh: '升級表' },
  { to: 'phrases/clarify', zh: '追問句' },
];

const pins = () => store.get('pins', []);
const allPhrases = () => FUNCTIONS.flatMap((f) => f.phrases.map((p) => ({ ...p, fn: f })));

function phraseRow(p) {
  const on = pins().includes(p.id);
  return `<li class="phrase">
    <span class="lv">${text(p.lv)}</span>
    <div class="phrase-body">
      <p class="line-en">${text(p.en)}</p>
      <p class="zh">${text(p.zh)}</p>
    </div>
    <button class="mini" data-act="hear" data-say="${text(p.fill || p.en)}" aria-label="聽這句">🔊</button>
    <button class="mini pin" data-act="pin" data-id="${p.id}" aria-pressed="${on}" aria-label="放進我的小抄">${on ? '★' : '☆'}</button>
  </li>`;
}

function viewPhrases(sub) {
  const head = (title, en, lead) => `<header class="head">
      <p class="kicker">${text(en)}</p><h1>${text(title)}</h1>${lead ? `<p class="sub">${text(lead)}</p>` : ''}
    </header>
    <div class="subtabs" role="group" aria-label="句型">
      ${SUBTABS.map((t) => `<a href="#${t.to}" ${location.hash.slice(1) === t.to || (!sub && t.to === 'phrases') ? 'aria-current="page"' : ''}>${text(t.zh)}</a>`).join('')}
    </div>`;

  if (sub === 'mine') {
    const mine = allPhrases().filter((p) => pins().includes(p.id));
    return `${head('我的小抄', 'Before a Meeting', '開會前挑 2–3 句準備使用。太多句，開會時一句也想不起來。')}
      <section class="block">
        ${mine.length ? mine.map((p) => `<div class="cheat">
            <p class="cheat-fn">功能 ${p.fn.n}：${text(p.fn.zh)}</p>
            ${sayBlock({ en: p.en, zh: p.zh, say: p.fill, sub: p.fillZh })}
            <button class="link" data-act="pin" data-id="${p.id}">從小抄拿掉</button>
          </div>`).join('')
        : '<p class="empty">還沒有挑。到下面點 ☆，放進來的就是你下一場會議要用的句子。</p>'}
      </section>
      <section class="block">
        <h2>從這裡挑 <span>Pick 2–3</span></h2>
        ${FUNCTIONS.map((f) => `<h3 class="fn-head">功能 ${f.n}：${text(f.zh)} <span>${text(f.en)}</span></h3>
          <ul class="phrases">${f.phrases.map(phraseRow).join('')}</ul>`).join('')}
      </section>`;
  }

  if (sub === 'upgrade') {
    return `${head('語言升級表', 'Tool 2 · Language Upgrade', '當你發現自己又說了左邊的話時，停下來，用右邊的版本再說一次。')}
      <section class="block">
        <ul class="upgrades">
          ${UPGRADES.map((u) => `<li class="upgrade">
            <p class="weak"><span>你說的</span>${text(u.weak)} <em>${text(u.weakZh)}</em></p>
            ${sayBlock({ en: u.strong, zh: u.zh, say: u.fill })}
            <p class="effect">${text(u.effect)}</p>
          </li>`).join('')}
        </ul>
      </section>
      <section class="block">
        <h2>說說看 <span>Say it</span></h2>
        ${drillBlock('upgrade', () => shuffle(upgradeItems()), '五句都換過一次了。')}
      </section>`;
  }

  if (sub === 'clarify') {
    return `${head('追問句型', 'Clarifying Questions', '沉默接受＝雙方都輸。追問本身就是一種專業。')}
      <section class="block">
        ${CLARIFY.map((c) => sayBlock({ en: c.en, zh: c.zh, lv: c.lv })).join('')}
      </section>
      <section class="block">
        <h2>說說看 <span>Say it</span></h2>
        ${drillBlock('clarify', () => shuffle(clarifyItems()), '五種追問都說過了。')}
      </section>`;
  }

  return `${head('四大功能句型', 'Card A · Function Phrases', '每個功能都有 A2 版。先用 A2 也完全可以，說出來最重要。')}
    <section class="block">
      <h2>說說看 <span>Say it</span></h2>
      <p class="note-zh">看情境，先自己開口，再看參考句。</p>
      ${drillBlock('phrases', () => shuffle(phraseItems()).slice(0, 4), '這一組說完了。')}
    </section>
    ${FUNCTIONS.map((f) => `<section class="block">
      <h2>功能 ${f.n}：${text(f.zh)} <span>${text(f.en)}</span></h2>
      <ul class="phrases">${f.phrases.map(phraseRow).join('')}</ul>
    </section>`).join('')}`;
}

// -------------------------------------------------------------- 情境

function viewScenes() {
  const done = store.get('scenes', {});
  const count = SCENES.filter((s) => done[s.id]).length;
  return `<header class="head">
      <p class="kicker">Part 2 · Scenarios</p>
      <h1>情境演練</h1>
      <p class="sub">你來當主角。每個情境都走到開口為止。${count ? `已經走完 ${count} 個。` : ''}</p>
    </header>
    <section class="block">
      <ul class="scene-list">
        ${SCENES.map((s) => `<li><a class="scene-link" href="#scenes/${s.id}">
          <b class="letter">${text(s.letter)}</b>
          <span class="scene-t"><strong>${text(s.zh)}</strong><small>${text(s.en)}</small>
            <small>${text(s.pair)} · ${text(s.unit)}</small></span>
          ${done[s.id] ? '<span class="tick" aria-label="走完了">✓</span>' : ''}
        </a></li>`).join('')}
      </ul>
    </section>`;
}

/* A scenario is played step by step. Step types:

     line      a line of dialogue
     think     what someone is thinking
     choice    pick what to say; wrong options show their `then` and stay open
     parts     a sentence broken into its labelled parts
     say       lines to say out loud
     reveal    a hidden fact behind a button
     principle the rule to keep
     roles     role cards for practising with a colleague
     quest     Scenario E's board of questions, with Tanaka's meter
     meeting   Scenario F: pick a role, then play the meeting through

   line, think, parts and principle play straight on; everything else stops
   until the trainee moves it on. */
let run = null;

function viewScene(id) {
  const s = SCENES.find((x) => x.id === id);
  if (!s) { location.hash = 'scenes'; return ''; }
  run = { s, i: 0, all: false, questGood: 0, role: null };
  const idx = SCENES.indexOf(s);
  const next = SCENES[idx + 1];
  return `<header class="head">
      <p class="kicker"><a href="#scenes">← 情境 ${text(s.letter)} / 6</a></p>
      <h1>${text(s.zh)}</h1>
      <p class="sub">${text(s.en)}</p>
    </header>
    <section class="block">
      <p class="focus-line">${text(s.focus)}</p>
      ${note(s.ctx)}
      <p class="you-are">你是 <b>${text(s.you)}</b></p>
      <div class="stage" id="stage"></div>
      <div id="stage-foot"><button class="pill" data-act="scene-start">開始</button>
        <button class="link" data-act="scene-all">直接看全部內容</button></div>
    </section>
    <template id="scene-end">
      <div class="scene-end">
        <div class="reflect">
          <p class="label">複習反思 Reflection</p>
          ${note(s.reflect)}
          <textarea id="scene-note" rows="3" placeholder="寫給自己看的，只存在這台裝置。">${text((store.get('notes', {}))[s.id] || '')}</textarea>
        </div>
        ${next ? `<a class="pill" href="#scenes/${next.id}">下一個：情境 ${text(next.letter)}</a>` : '<a class="pill" href="#email">接著練 Email</a>'}
        <a class="link" href="#scenes">回情境列表</a>
      </div>
    </template>`;
}

function bubble(l) {
  const you = l.you || (run && l.who === run.role);
  return `<div class="msg ${you ? 'mine' : ''}">
    <p class="who">${text(l.who)}${l.role ? ` <span>${text(l.role)}</span>` : ''}</p>
    <div class="bubble"><p class="line-en">${text(l.en)}</p>${l.zh ? `<p class="zh">${text(l.zh)}</p>` : ''}
      <button class="mini" data-act="hear" data-say="${text(l.en)}" data-who="${text(l.who)}" aria-label="聽這句">🔊</button></div>
  </div>`;
}

const thought = (who, zh, en) => `<div class="think"><p class="who">${text(who)} 心想</p>
  <p>${text(zh)}</p>${en ? `<p class="note-en">${text(en)}</p>` : ''}</div>`;

const continueBtn = () => '<button class="pill go" data-act="scene-next">繼續</button>';

// Returns the markup for a step and whether the run stops there.
function playStep(st) {
  switch (st.t) {
    case 'line': return { html: bubble(st) };
    case 'think': return { html: thought(st.who, st.zh, st.en) };
    case 'choice': return { html: choiceBlock(st), stop: true };
    case 'parts': return { html: `<ul class="parts">${st.parts.map((p) => `<li><b>${text(p.tag)}</b><span>${text(p.en)}</span><small>${text(p.note)}</small></li>`).join('')}</ul>` };
    case 'say': return { html: `<div class="say-group"><p class="ask">${text(st.ask)}</p>
      ${st.lines.map((l) => sayBlock(l)).join('')}${run.all ? '' : continueBtn()}</div>`, stop: true };
    case 'reveal': return { html: revealBlock(st), stop: true };
    case 'principle': return { html: `<div class="principle">${note(st)}</div>` };
    case 'roles': return { html: `<div class="rolecards"><p class="ask">${text(st.label)}</p>
      ${st.roles.map((r) => `<article><h3>${text(r.name)}<span>${text(r.job)}</span></h3><p>${text(r.task)}</p></article>`).join('')}
      ${run.all ? '' : continueBtn()}</div>`, stop: true };
    case 'quest': return { html: questBlock(st), stop: true };
    case 'meeting': return { html: meetingBlock(st), stop: true };
    default: return { html: '' };
  }
}

function revealBlock(st) {
  if (run.all) return revealOpen(st);
  return `<div class="reveal-box" data-reveal><button class="reveal-btn" data-act="reveal">${text(st.label)}<small>點開來看</small></button></div>`;
}

const revealOpen = (st) => `<div class="reveal-box open"><p class="label">${text(st.label)}</p>
  <p class="reveal-zh">${text(st.zh)}</p><p class="line-en">${text(st.en)}</p>
  <button class="mini" data-act="hear" data-say="${text(st.en)}" data-who="Tanaka" aria-label="聽這句">🔊</button>
  <p class="reveal-note">${text(st.note)}</p></div>`;

function choiceBlock(st) {
  const opts = st.options.map((o, i) => `<button class="opt ${run.all && o.ok ? 'right' : ''}"
      data-act="opt" data-i="${i}" ${run.all ? 'disabled' : ''}>
      <span class="line-en">${text(o.en)}</span>${o.zh ? `<span class="zh">${text(o.zh)}</span>` : ''}</button>`).join('');
  const right = st.options.find((o) => o.ok);
  return `<div class="choice" data-step="${run.i - 1}">
    <p class="ask">${text(st.ask)}</p>
    <div class="opts">${opts}</div>
    <div class="result" ${run.all ? '' : 'hidden'}>${run.all ? `<p class="why good">${text(right.why)}</p>` : ''}</div>
  </div>`;
}

function pickOption(btn) {
  const box = btn.closest('.choice');
  const st = run.s.steps[Number(box.dataset.step)];
  const o = st.options[Number(btn.dataset.i)];
  const res = $('.result', box);
  res.hidden = false;
  btn.classList.add('tried');

  if (!o.ok) {
    wobble(btn);
    btn.disabled = true;
    const then = (o.then || []).map((l) => {
      if (l.narr) return `<p class="narr">${text(l.narr)}</p>`;
      if (l.think) return thought(l.think, l.zh, l.en);
      return bubble(l);
    }).join('');
    res.innerHTML = `<p class="after-label">這樣說的話⋯⋯</p>${then}<p class="why">${text(o.why)}</p>
      <p class="retry">再選一次。</p>`;
    bringUp(res);
    return;
  }

  btn.classList.add('right');
  $$('.opt', box).forEach((b) => { b.disabled = true; });
  res.innerHTML = `<p class="why good">${text(o.why)}</p>${continueBtn()}`;
  bringUp(res);
}

// An answer can land under the fold, or under the bar of tabs on a phone.
function bringUp(el) {
  el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function questBlock(st) {
  const rows = (run.all ? st.good : [...st.good, ...st.weak]).map((q, i) => {
    const isGood = i < st.good.length;
    return `<button class="opt quest-opt" data-act="quest" data-i="${i}" data-good="${isGood}" ${run.all ? 'disabled' : ''}>
      <span class="line-en">${q.lv ? `<span class="lv">${text(q.lv)}</span>` : ''}${text(q.en)}</span></button>`;
  });
  return `<div class="quest">
    <p class="ask">${text(st.ask)}</p>
    <ol class="meter" id="meter">${st.meter.map((m, i) => `<li class="${i === 0 || run.all ? 'on' : ''}">${text(m)}</li>`).join('')}</ol>
    <div class="quest-log" id="quest-log"></div>
    <div class="opts">${shuffle(rows).join('')}</div>
    <div id="quest-foot"></div>
  </div>`;
}

function askTanaka(btn) {
  const st = run.s.steps.find((x) => x.t === 'quest');
  const good = btn.dataset.good === 'true';
  const q = [...st.good, ...st.weak][Number(btn.dataset.i)];
  btn.disabled = true;
  btn.classList.add(good ? 'right' : 'tried');

  const log = $('#quest-log');
  log.insertAdjacentHTML('beforeend', `${bubble({ who: 'Kevin', you: true, en: q.en, zh: q.zh })}
    ${bubble({ who: 'Tanaka', en: q.reply.en, zh: q.reply.zh })}
    ${q.why ? `<p class="why">${text(q.why)}</p>` : ''}`);

  if (!good) { wobble(btn); return; }

  run.questGood += 1;
  $$('#meter li').forEach((li, i) => { li.classList.toggle('on', i <= run.questGood); });
  if (run.questGood === st.need) {
    $('#quest-foot').innerHTML = `<p class="why good">問對了。Tanaka 開始往合作的方向走了。</p>${continueBtn()}`;
  }
  bringUp(log.lastElementChild);
}

function meetingBlock(st) {
  if (run.all) {
    return `<div class="meeting">${st.roles.map((r) => `<article class="role-sum">
      <h3>${text(r.name)}<span>${text(r.job)}</span></h3><p>${text(r.task)}</p>${sayBlock({ en: r.en, zh: r.zh, who: r.name })}</article>`).join('')}</div>`;
  }
  return `<div class="meeting" id="meeting">
    <p class="ask">${text(st.ask)}</p>
    <div class="role-picks">
      ${st.roles.map((r, i) => `<button class="role-pick" data-act="role" data-i="${i}">
        <b>${text(r.name)}</b><small>${text(r.job)}</small></button>`).join('')}
    </div>
  </div>`;
}

function pickRole(btn) {
  const st = run.s.steps.find((x) => x.t === 'meeting');
  const me = st.roles[Number(btn.dataset.i)];
  run.role = me.name;
  run.turn = 0;
  const f = FUNCTIONS.find((x) => x.id === me.fn);
  $('#meeting').innerHTML = `<article class="rolecard-me">
      <p class="label">你的角色</p>
      <h3>${text(me.name)}<span>${text(me.job)}</span></h3>
      <p>${text(me.task)}</p>
      ${f ? `<details class="past"><summary>功能 ${f.n}：${text(f.zh)}的其他說法</summary>
        ${f.phrases.map((p) => `<p class="line-en small">${text(p.en)}</p>`).join('')}</details>` : ''}
    </article>
    <div id="turns"></div>
    <div id="turn-foot"></div>`;
  nextTurn();
}

function nextTurn() {
  const st = run.s.steps.find((x) => x.t === 'meeting');
  const turns = $('#turns');
  const foot = $('#turn-foot');
  foot.innerHTML = '';
  while (run.turn < st.roles.length) {
    const r = st.roles[run.turn];
    run.turn += 1;
    if (r.name === run.role) {
      turns.insertAdjacentHTML('beforeend', `<div class="my-turn"><p class="ask">輪到你了。A2 提示句：</p>
        ${sayBlock({ en: r.en, zh: r.zh, who: r.name })}</div>`);
      foot.innerHTML = run.turn < st.roles.length
        ? '<button class="pill go" data-act="turn">下一位發言</button>' : continueBtn();
      return;
    }
    turns.insertAdjacentHTML('beforeend', bubble({ who: r.name, role: r.job, en: r.en, zh: r.zh }));
  }
  foot.innerHTML = continueBtn();
}

function advance() {
  const stage = $('#stage');
  const steps = run.s.steps;
  let first = null;
  $$('.go', stage).forEach((b) => b.remove());

  while (run.i < steps.length) {
    const st = steps[run.i];
    run.i += 1;
    const { html, stop } = playStep(st);
    stage.insertAdjacentHTML('beforeend', html);
    first = first || stage.lastElementChild;
    if (stop && !run.all) break;
  }

  // A step that stops carries its own 繼續, which finishes the run from there.
  if (run.i >= steps.length && (run.all || !isStopping(steps[steps.length - 1]))) finishScene();

  if (first && !run.all) first.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

const isStopping = (st) => ['choice', 'say', 'reveal', 'roles', 'quest', 'meeting'].includes(st.t);

function finishScene() {
  const stage = $('#stage');
  stage.append($('#scene-end').content.cloneNode(true));
  const done = store.get('scenes', {});
  done[run.s.id] = dayKey();
  store.set('scenes', done);
}

function openReveal(btn) {
  const box = btn.closest('[data-reveal]');
  const st = run.s.steps[run.i - 1];
  box.outerHTML = `${revealOpen(st)}${continueBtn()}`;
}

// -------------------------------------------------------------- Email

function viewEmailIndex() {
  const done = store.get('emails', {});
  return `<header class="head">
      <p class="kicker">Part 3 · BLUF Email</p>
      <h1>BLUF Email</h1>
      <p class="sub">${text(COMPARE.lead)}</p>
    </header>

    <section class="block">
      <a class="write-card" href="#email/write">
        <b>寫我的 Email</b>
        <span>套用三大模板，或貼上你正在寫的信，寄出前先做 BLUF 健檢。</span>
      </a>
    </section>

    <section class="block">
      <h2>三封範例 <span>Three Emails</span></h2>
      <ul class="scene-list">
        ${EMAILS.map((e) => `<li><a class="scene-link" href="#email/${e.id}">
          <b class="letter">${text(e.id)}</b>
          <span class="scene-t"><strong>${text(e.task)}</strong><small>寄給 ${text(e.to)}（${text(e.role)}）</small>
            <small>${text(e.challenge)}</small></span>
          ${done[e.id] ? '<span class="tick" aria-label="走完了">✓</span>' : ''}
        </a></li>`).join('')}
      </ul>
    </section>

    <section class="block">
      <h2>三封對照 <span>Side-by-Side</span></h2>
      <div class="compare">
        ${COMPARE.cols.map((c) => `<article><h3>${text(c.name)}</h3>
          <dl>${c.vals.map((v, i) => `<dt>${text(COMPARE.rows[i])}</dt><dd>${text(v)}</dd>`).join('')}</dl></article>`).join('')}
      </div>
    </section>`;
}

let mail = null;

function viewEmail(id) {
  const e = EMAILS.find((x) => x.id === id);
  if (!e) { location.hash = 'email'; return ''; }
  mail = { e, found: new Set(), pick: 0 };
  return `<header class="head">
      <p class="kicker"><a href="#email">← Email ${text(e.id)} / 3</a></p>
      <h1>${text(e.zh)}</h1>
      <p class="sub">${text(e.en)}</p>
    </header>
    <section class="block">
      <p class="focus-line">${text(e.challenge)}</p>
      ${note(e.ctx)}
    </section>
    <section class="block" id="mail-1">
      <h2>第一步：找問題 <span>Spot it</span></h2>
      <p class="note-zh">這是原本的寫法。點你覺得有問題的句子。</p>
      <p class="found" id="found">找到 0 / ${e.flaws.length}</p>
      <div class="letter-sheet is-before">
        <p class="mail-subj"><span>Subject:</span> ${sentence(e.before.subject)}</p>
        ${e.before.body.map((para) => `<p>${para.map(sentence).join(' ')}</p>`).join('')}
      </div>
      <ul class="flaws" id="flaws"></ul>
      <div id="mail-next"></div>
    </section>
    <div id="mail-rest"></div>`;
}

const sentence = (s) => `<button class="sen" data-act="sen" ${s.hot ? `data-hot="${s.hot}"` : ''}>${text(s.s)}</button>`;

function tapSentence(btn) {
  const { e, found } = mail;
  const hot = btn.dataset.hot;
  if (!hot) {
    btn.classList.add('fine');
    toast('這句本身沒問題。');
    return;
  }
  $$(`.sen[data-hot="${hot}"]`).forEach((b) => b.classList.add('hit'));
  if (found.has(hot)) return;
  found.add(hot);
  const f = e.flaws.find((x) => x.id === hot);
  // The list sits under the letter, so on a phone the reason also has to
  // appear where the trainee is looking.
  toast(f.zh);
  $('#flaws').insertAdjacentHTML('beforeend', `<li>${note(f)}</li>`);
  $('#found').textContent = `找到 ${found.size} / ${e.flaws.length}`;
  if (found.size === 2 && !$('#mail-next button')) {
    $('#mail-next').innerHTML = '<button class="link" data-act="mail-flaws">剩下的直接告訴我</button>';
  }
  if (found.size === e.flaws.length) mailStepTwo();
}

function revealFlaws() {
  mail.e.flaws.forEach((f) => {
    if (!mail.found.has(f.id)) {
      mail.found.add(f.id);
      $('#flaws').insertAdjacentHTML('beforeend', `<li>${note(f)}</li>`);
    }
  });
  $$('.sen[data-hot]').forEach((b) => b.classList.add('hit'));
  $('#found').textContent = `找到 ${mail.found.size} / ${mail.found.size}`;
  mailStepTwo();
}

function mailStepTwo() {
  if ($('#mail-2')) return;
  $('#mail-next').innerHTML = '';
  $('#mail-rest').innerHTML = `<section class="block" id="mail-2">
      <h2>第二步：改寫 <span>Rewrite it</span></h2>
      <p class="note-zh">換你來選。每一步都有理由。</p>
      <div id="mail-picks"></div>
    </section>`;
  mailPick();
  $('#mail-2').scrollIntoView({ block: 'start', behavior: 'smooth' });
}

function mailPick() {
  const { e, pick } = mail;
  const p = e.picks[pick];
  if (!p) { mailStepThree(); return; }
  $('#mail-picks').insertAdjacentHTML('beforeend', `<div class="choice mail-choice" data-pick="${pick}">
    <p class="ask">${pick + 1}. ${text(p.ask)}</p>
    <div class="opts">${p.options.map((o, i) => `<button class="opt" data-act="mail-opt" data-i="${i}">
      <span class="line-en">${text(o.en)}</span></button>`).join('')}</div>
    <div class="result" hidden></div>
  </div>`);
}

function pickMailOption(btn) {
  const box = btn.closest('.choice');
  const p = mail.e.picks[Number(box.dataset.pick)];
  const o = p.options[Number(btn.dataset.i)];
  const res = $('.result', box);
  res.hidden = false;
  res.innerHTML = `<p class="why ${o.ok ? 'good' : ''}">${text(o.why)}</p>`;
  if (!o.ok) { wobble(btn); btn.disabled = true; bringUp(res); return; }
  btn.classList.add('right');
  $$('.opt', box).forEach((b) => { b.disabled = true; });
  mail.pick += 1;
  mailPick();
}

function afterBody(body) {
  return body.map((b) => {
    if (b.p) return `<p class="${b.key ? 'key' : ''}">${text(b.p)}</p>`;
    const items = (b.ol || b.ul || b.al).map((x) => `<li>${text(x)}</li>`).join('');
    if (b.ul) return `<ul>${items}</ul>`;
    return `<ol ${b.al ? 'type="A"' : ''}>${items}</ol>`;
  }).join('');
}

function mailStepThree() {
  const { e } = mail;
  const done = store.get('emails', {});
  done[e.id] = dayKey();
  store.set('emails', done);
  const t = TEMPLATES[e.template];
  $('#mail-rest').insertAdjacentHTML('beforeend', `<section class="block" id="mail-3">
      <h2>第三步：完整範例 <span>BLUF After</span></h2>
      <div class="letter-sheet">
        <p class="mail-subj"><span>Subject:</span> ${text(e.after.subject)}</p>
        ${afterBody(e.after.body)}
      </div>
      <p class="label">為什麼這封信有效</p>
      <ul class="flaws works">${e.works.map((w) => `<li>${note(w)}</li>`).join('')}</ul>
      ${e.note ? `<div class="principle"><p class="label">${text(e.note.label)}</p>${note(e.note)}</div>` : ''}
      ${e.reflect ? `<div class="reflect"><p class="label">複習反思 Reflection</p>${note(e.reflect)}</div>` : ''}
      <a class="pill" href="#email/write" data-template="${t.id}" data-act="use-template">用「${text(t.zh)}」模板寫我的</a>
      <a class="link" href="#email">回 Email 列表</a>
    </section>`);
  $('#mail-3').scrollIntoView({ block: 'start', behavior: 'smooth' });
}

// --------- 我的 Email

let templateWanted = null;

function viewWrite() {
  return `<header class="head">
      <p class="kicker"><a href="#email">← Email</a></p>
      <h1>寫我的 Email</h1>
      <p class="sub">選一個模板，把 [ ] 換成你的內容；或把正在寫的信貼進來。下面的健檢會跟著你打的字更新。</p>
    </header>
    <section class="block">
      <h2>三大模板 <span>Card B</span></h2>
      <div class="tpl-picks">
        ${TEMPLATES.map((t) => `<button class="tpl" data-act="template" data-i="${t.id}">
          <b>${text(t.zh)}</b><small>${text(t.en)}</small><span>${text(t.when)}</span></button>`).join('')}
      </div>
    </section>
    <section class="block">
      <label class="field"><span>Subject</span><input id="d-subject" type="text" autocomplete="off" spellcheck="true" lang="en"></label>
      <label class="field"><span>內容</span><textarea id="d-body" rows="9" spellcheck="true" lang="en"></textarea></label>
      <div class="acts">
        <button class="act" data-act="copy-draft">複製這封信</button>
        <button class="act" data-act="clear-draft">清空</button>
      </div>
      <p class="privacy">這裡打的字不會離開你的裝置，也不會存下來；重新整理就清空。</p>
    </section>
    <section class="block">
      <h2>BLUF 健檢 <span>Before you send</span></h2>
      <ul class="checks" id="checks"></ul>
    </section>`;
}

/* The check is a set of plain text rules, each one a line of the handbook:
   the reasons its Before emails fail and its After emails work. It cannot read
   for meaning, so every result is worded as a question or a nudge. */
const GREETING = /^(i hope|i hope this|hope you|hope this|i wanted to|i just wanted|just wanted|as you may know|as you know|how are you|thank you for|thanks for|i am writing|i'm writing|i'd like to reach out|i am reaching out|i'm reaching out)/i;
const SALUTATION = /^(hi|hello|dear|hey|good (morning|afternoon|evening))\b[^.!?\n]{0,40}[,:]?\s*$/i;
const VAGUE = /\b(maybe|perhaps|probably|might|it seems|some developments|some adjustments|some changes|some issues|looking into|as soon as possible|asap|soon)\b/gi;
const PASSIVE = /(let me know|let us know|if you have any questions|feel free to|when you have time|at your convenience)/i;
const DEADLINE = /\b(by|before)\s+(the\s+)?(mon|tue|wed|thu|fri|sat|sun|today|tomorrow|tonight|next|end of|eod|cob|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d|\[)/i;
const KNOWN_TAG = /^\[(action needed|fyi|review needed|decision needed|urgent|info)[^\]]*\]/i;

function firstSentence(body) {
  const lines = body.split('\n').map((l) => l.trim()).filter(Boolean);
  const start = lines.findIndex((l) => !SALUTATION.test(l));
  if (start < 0) return '';
  return (lines[start].match(/^.+?[.!?](\s|$)/) || [lines[start]])[0].trim();
}

function emailChecks(rawSubject, rawBody) {
  let subject = rawSubject.trim();
  let body = rawBody;
  // A whole email pasted into the body brings its own subject line.
  const m = body.match(/^\s*subject:\s*(.+)$/im);
  if (!subject && m) {
    subject = m[1].trim();
    body = body.replace(m[0], '');
  }
  if (!subject && !body.trim()) return [];

  const first = firstSentence(body);
  const words = subject.replace(/\[[^\]]*\]/g, ' ').trim().split(/\s+/).filter(Boolean);
  const apologies = (body.match(/\b(sorry|apologi[sz]e|apologies)\b/gi) || []).length;
  const vague = [...new Set((body.match(VAGUE) || []).map((w) => w.toLowerCase()))];
  // Passive only when nothing pins it down: Card B's own Template 3 says "let
  // me know ... by [date]", and that is fine.
  const passive = body.split(/(?<=[.!?])\s+|\n+/)
    .filter((l) => PASSIVE.test(l) && !DEADLINE.test(l))
    .map((l) => l.match(PASSIVE)[0].toLowerCase());
  const slots = `${subject.replace(KNOWN_TAG, '')}\n${body}`.match(/\[[^\]\n]+\]/g) || [];
  const hasNext = DEADLINE.test(body) || (body.match(/\?/g) || []).length >= 2;

  const rows = [
    { ok: KNOWN_TAG.test(subject) || /—\s*(action needed|fyi)\b/i.test(subject),
      good: '主旨有提示標籤，對方知道要不要立刻打開。',
      fix: '主旨前面加上 [Action needed]、[FYI]、[Review needed] 或 [Decision needed]。' },
    { ok: words.length >= 4 && !/^(update|revised|follow.?up)/i.test(words.join(' ')),
      good: '主旨有具體內容。',
      fix: '主旨太短或太模糊。把結論放進去：哪件事、變成什麼樣、什麼時候。' },
    { ok: Boolean(first) && !GREETING.test(first),
      good: `第一句：「${first}」是你最想讓對方知道的那件事嗎？`,
      fix: first ? `第一句「${first}」是寒暄或背景。把結論搬到最前面。` : '還沒有第一句。' },
    { ok: apologies < 2,
      good: apologies ? '有一句道歉，沒有過度。' : '沒有過度道歉。',
      fix: `道歉出現 ${apologies} 次。留一次就好，其他換成解決方案。` },
    { ok: vague.length === 0,
      good: '沒有看到模糊的字眼。',
      fix: `這些字會讓對方判斷不了嚴重程度：${vague.join('、')}。換成數字、日期或你的立場。` },
    { ok: hasNext,
      good: '有具體的下一步。',
      fix: '找不到下一步。寫清楚要對方做什麼、什麼時候之前（by + 日期），或提出具體的問題。' },
    { ok: passive.length === 0,
      good: '結尾不被動。',
      fix: `「${[...new Set(passive)].join('」「')}」太被動。改成明確的請求和截止日期。` },
  ];
  if (slots.length) {
    rows.unshift({ ok: false, fix: `還有 ${slots.length} 個 [ ] 沒填：${[...new Set(slots)].slice(0, 3).join(' ')}` });
  }
  return rows;
}

function paintChecks() {
  const rows = emailChecks($('#d-subject').value, $('#d-body').value);
  $('#checks').innerHTML = rows.length
    ? rows.map((r) => `<li class="${r.ok ? 'ok' : 'hint'}"><span>${r.ok ? '✓' : '→'}</span>${text(r.ok ? r.good : r.fix)}</li>`).join('')
    : '<li class="idle">選一個模板，或貼上你的信，這裡就會開始檢查。</li>';
}

function loadTemplate(i) {
  const t = TEMPLATES[i];
  $('#d-subject').value = t.subject;
  $('#d-body').value = t.body;
  $$('.tpl').forEach((b, n) => b.classList.toggle('on', n === Number(i)));
  paintChecks();
}

async function copyDraft(btn) {
  const out = `Subject: ${$('#d-subject').value}\n\n${$('#d-body').value}`;
  try {
    await navigator.clipboard.writeText(out);
    btn.textContent = '✓ 已複製';
  } catch {
    $('#d-body').select();
    btn.textContent = '請按 ⌘C 複製';
  }
  setTimeout(() => { btn.textContent = '複製這封信'; }, 2000);
}

// -------------------------------------------------------------- routing

const TABS = [
  { to: 'today', zh: '今天', icon: '●' },
  { to: 'concepts', zh: '觀念', icon: '◆' },
  { to: 'phrases', zh: '句型', icon: '❝' },
  { to: 'scenes', zh: '情境', icon: '▶' },
  { to: 'email', zh: 'Email', icon: '✉' },
];

function route() {
  const [tab = 'today', sub] = (location.hash.slice(1) || 'today').split('/');
  dropTake();
  if (canSpeak) speechSynthesis.cancel();

  const known = TABS.some((t) => t.to === tab);
  const name = known ? tab : 'today';
  const view = $('#view');

  if (name === 'today') view.innerHTML = viewToday();
  else if (name === 'concepts') view.innerHTML = viewConcepts();
  else if (name === 'phrases') view.innerHTML = viewPhrases(sub);
  else if (name === 'scenes') view.innerHTML = sub ? viewScene(sub) : viewScenes();
  else if (name === 'email') {
    if (sub === 'write') {
      view.innerHTML = viewWrite();
      if (templateWanted !== null) { loadTemplate(templateWanted); templateWanted = null; } else paintChecks();
    } else view.innerHTML = sub ? viewEmail(sub) : viewEmailIndex();
  }

  $$('.tabs a').forEach((a) => {
    if (a.dataset.tab === name) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  paintTally();
  window.scrollTo(0, 0);
}

const ACTS = {
  hear(btn) {
    const box = btn.closest('[data-say]');
    speak(box.dataset.say, box.dataset.who);
  },
  rec: toggleRecord,
  said(btn) { markSaid(btn.closest('.say')); addSpoken(); },

  'sort-pick': sortPick,
  'sort-next'(btn) {
    const s = sorts.get(btn.dataset.id);
    s.i += 1;
    s.solved = false;
    $(`#sort-${btn.dataset.id}`).innerHTML = sortInner(btn.dataset.id);
  },
  'sort-again'(btn) {
    const s = sorts.get(btn.dataset.id);
    s.items = shuffle(s.items);
    s.i = 0;
    s.solved = false;
    $(`#sort-${btn.dataset.id}`).innerHTML = sortInner(btn.dataset.id);
  },

  'bluf-pick': blufPick,
  'bluf-next'() {
    blufSet = (blufSet + 1) % BLUF_SETS.length;
    blufDeal();
    $('#bluf').innerHTML = blufInner();
  },

  'drill-show'(btn) {
    drills.get(btn.dataset.id).shown = true;
    $(`#drill-${btn.dataset.id}`).innerHTML = drillInner(btn.dataset.id);
  },
  'drill-next'(btn) {
    const d = drills.get(btn.dataset.id);
    touch(d.items[d.i].id);
    d.i += 1;
    d.shown = false;
    dropTake();
    if (btn.dataset.id === 'today') store.set('today', { ...store.get('today', {}), i: d.i });
    $(`#drill-${btn.dataset.id}`).innerHTML = drillInner(btn.dataset.id);
  },
  'drill-more'(btn) {
    const d = drills.get(btn.dataset.id);
    d.items = btn.dataset.id === 'today' ? dealThree() : d.deal();
    d.i = 0;
    d.shown = false;
    $(`#drill-${btn.dataset.id}`).innerHTML = drillInner(btn.dataset.id);
  },

  pin(btn) {
    const id = btn.dataset.id;
    const list = pins();
    if (list.includes(id)) store.set('pins', list.filter((x) => x !== id));
    else if (list.length >= 3) { toast('小抄放三句就好。先拿掉一句，再放新的。'); return; }
    else store.set('pins', [...list, id]);
    if (location.hash === '#phrases/mine') {
      const y = window.scrollY;
      route();
      window.scrollTo(0, y);
    } else {
      const on = pins().includes(id);
      btn.setAttribute('aria-pressed', on);
      btn.textContent = on ? '★' : '☆';
    }
  },

  week(btn) {
    const all = store.get('weeks', {});
    const key = weekKey();
    all[key] = { ...all[key], [btn.dataset.q]: btn.dataset.v };
    store.set('weeks', all);
    const box = btn.closest('.check');
    $$('.mini-pill', box).forEach((b) => b.setAttribute('aria-pressed', b === btn));
    const c = WEEKLY.checks.find((x) => x.id === btn.dataset.q);
    const reply = $('.check-reply', box);
    reply.hidden = false;
    reply.innerHTML = weekReply(c, btn.dataset.v);
  },

  'scene-start'() {
    $('#stage-foot').innerHTML = '';
    advance();
  },
  'scene-all'() {
    run.all = true;
    run.role = null;
    $('#stage-foot').innerHTML = '';
    advance();
  },
  'scene-next'(btn) {
    btn.remove();
    if (run.i >= run.s.steps.length) { finishScene(); return; }
    advance();
  },
  opt: pickOption,
  reveal: openReveal,
  quest: askTanaka,
  role: pickRole,
  turn: nextTurn,

  sen: tapSentence,
  'mail-flaws': revealFlaws,
  'mail-opt': pickMailOption,

  template(btn) { loadTemplate(btn.dataset.i); },
  'use-template'(btn) { templateWanted = Number(btn.dataset.template); },
  'copy-draft': copyDraft,
  'clear-draft'() {
    $('#d-subject').value = '';
    $('#d-body').value = '';
    $$('.tpl').forEach((b) => b.classList.remove('on'));
    paintChecks();
  },
};

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-act]');
  if (btn && ACTS[btn.dataset.act]) ACTS[btn.dataset.act](btn);
});

document.addEventListener('input', (e) => {
  if (e.target.id === 'd-subject' || e.target.id === 'd-body') paintChecks();
  if (e.target.id === 'q4') {
    const all = store.get('weeks', {});
    const key = weekKey();
    all[key] = { ...all[key], q4: e.target.value };
    store.set('weeks', all);
  }
  if (e.target.id === 'scene-note') {
    const notes = store.get('notes', {});
    notes[run.s.id] = e.target.value;
    store.set('notes', notes);
  }
});

// -------------------------------------------------------------- the chrome

function initChrome() {
  const links = TABS.map((t) => `<a href="#${t.to}" data-tab="${t.to}"><i aria-hidden="true">${t.icon}</i>${text(t.zh)}</a>`).join('');
  $$('.tabs').forEach((n) => { n.innerHTML = links; });

  // Starts on: a trainee working alone has nobody to ask (the 自學 rule).
  const zhOn = store.get('zhShown', true);
  document.body.classList.toggle('no-zh', !zhOn);
  $('#zhToggle').setAttribute('aria-pressed', zhOn);
  $('#zhToggle').addEventListener('click', () => {
    const on = document.body.classList.toggle('no-zh') === false;
    $('#zhToggle').setAttribute('aria-pressed', on);
    store.set('zhShown', on);
  });

  const panel = $('#panel');
  const toggle = $('#panelToggle');
  const setPanel = (open) => {
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', open);
  };
  toggle.addEventListener('click', () => setPanel(panel.hidden));
  $('#panelClose').addEventListener('click', () => setPanel(false));

  $('#rate').value = store.get('rate', '0.95');
  $('#rate').addEventListener('change', (e) => {
    store.set('rate', e.target.value);
    speak('Before we move on, I want to flag something.');
  });

  loadVoices();
  if (canSpeak) speechSynthesis.onvoiceschanged = loadVoices;
  $('#voicePick').addEventListener('change', (e) => {
    voice = voices.find((v) => v.name === e.target.value) || voice;
    store.set('voice', e.target.value);
    speak('Before we move on, I want to flag something.');
  });

  // Two presses, because it is the only thing on the page that cannot be undone.
  $('#clearAll').addEventListener('click', (e) => {
    const ask = $('#clearAsk');
    if (!ask.textContent) {
      ask.textContent = '開口次數、小抄和筆記都會消失。確定的話再按一次。';
      return;
    }
    ['log', 'seen', 'today', 'pins', 'weeks', 'notes', 'scenes', 'emails'].forEach((k) => {
      try { localStorage.removeItem(`ks.${k}`); } catch { /* private window */ }
    });
    ask.textContent = '';
    e.target.blur();
    setPanel(false);
    route();
  });

  window.addEventListener('hashchange', route);
  route();
}

initChrome();
