/* Renders BODY (content.js) and wires up the page.

   The two-mode shape of the 國中 pages, as /fab-english/ and /a2-key/ use it:

   1. **Two modes, one page.** 自學 is the student alone: the Chinese is on
      screen, and what they have marked is kept on their own device. 教學 is
      the lesson: the Chinese waits behind a 中 chip and nothing is recorded.
   2. **Students never see the switch.** The plain URL carries no mode at all.
      Opening the page once with `#teach` turns THIS device into the teacher's
      and is remembered; the hash is then stripped from the address bar so it
      cannot be copied to a student by accident. 設定 → 「在這台裝置隱藏」
      undoes it, once per device.
   3. **Chinese that is explanation is never hidden by either mode.** The
      notes are the teacher's own voice — why sleep has no plural, why a booger
      is not snot — and are not something a student is meant to produce. What
      教學 hides is what they should be able to work out: a term's meaning and
      a sentence's 中譯.

   The page is built once and shown or hidden by classes on <body>, so
   switching mode costs nothing and never loses an open card.

   The only state kept in localStorage is under `bw.`: the mode, whether this
   is a teacher device, and — 自學 only — the marks. A teaching session leaves
   nothing behind. */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// ------------------------------------------------------------------- store

const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem('bw.' + k);
      return v == null ? d : JSON.parse(v);
    } catch (e) { return d; }
  },
  set(k, v) {
    try { localStorage.setItem('bw.' + k, JSON.stringify(v)); } catch (e) { /* private mode */ }
  },
};

let TEACHER = store.get('teacher', false);

function claimTeacher() {
  if (location.hash !== '#teach') return false;
  TEACHER = true;
  store.set('teacher', true);
  store.set('mode', 'teach');
  history.replaceState(null, '', location.pathname + location.search);
  return true;
}
claimTeacher();

/* Typing #teach onto a page that is already open changes the hash without
   reloading, so the same check has to run again here. */
addEventListener('hashchange', () => {
  if (claimTeacher()) {
    $('#modeseg').hidden = false;
    $('#teacherflag').hidden = false;
    setMode('teach', true);
  }
});

const S = { mode: TEACHER ? store.get('mode', 'teach') : 'self' };

// ------------------------------------------------------------------- pieces

function say(sentence) {
  return `<button class="say" data-say="${text(sentence)}" title="Listen" aria-label="Listen">🔊</button>`;
}

/* An English line with its Chinese behind it. The 中 chip is the visible
   affordance in 教學; in 自學 the Chinese is simply already there. */
function pair(en, zh, cls = '') {
  if (!zh) return `<div class="pair ${cls}"><p class="en">${text(en)}</p></div>`;
  return `
    <div class="pair ${cls}" data-zh>
      <p class="en">${text(en)}<button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(zh)}</p>
    </div>`;
}

/* The register tags. Both languages always show: this is the label that says
   WHICH rung of the ladder a word is on, and a label you have to tap to read
   is a label nobody reads. The first tag is the loud one. */
function tags(reg) {
  const R = BODY.registers;
  return reg.map((k, i) => {
    const r = R[k];
    if (!r) return '';
    return `<span class="tag tag-${text(k)}${i ? ' tag-quiet' : ''}">
      <span class="tag-zh">${text(r.zh)}</span><span class="tag-en">${text(r.en)}</span></span>`;
  }).join('');
}

function buildTerm(t, topicId) {
  const id = `${topicId}-${t.t.replace(/[^a-z]+/gi, '-').toLowerCase()}`;
  return `
    <li class="term" id="t-${text(id)}" data-term="${text(id)}">
      <div class="term-head">
        <div class="pair term-pair" data-zh>
          <p class="en term-en">${text(t.t)}${say(t.t)}<button class="zh-chip" title="顯示中文">中</button></p>
          <p class="zh term-zh">${text(t.zh)}</p>
        </div>
        <p class="term-tags">${tags(t.reg)}</p>
      </div>

      <div class="pair eg" data-zh>
        <p class="en eg-en">${text(t.ex)}${say(t.ex)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh eg-zh">${text(t.zhEx)}</p>
      </div>

      <div class="marks self-only" role="group" aria-label="標記">
        <button class="mk" data-mark="k">記住了</button>
        <button class="mk" data-mark="r">還不熟</button>
      </div>
    </li>`;
}

/* A source card. Three things are deliberate here:

   - `width` and `height` are set from the file's real pixels, so the browser
     reserves the box before the image arrives. Without them the terms below
     jump down the page mid-read, which on a phone is worse than no picture.
   - `loading="lazy"`. All of these sit below the fold, and a student on a
     phone should not pay for four cards to read the first topic.
   - The caption is not decoration, and it is conditional. `source: 'cool'`
     means the card is Cool English's, and it gets their name under it; the
     drawings made for this page carry no such line, because putting their
     name under artwork they did not make would be worse than putting none
     under artwork they did. Nothing here guesses — an image says whose it is
     or it is ours. */
function shot(img) {
  const c = BODY.credit;
  const mine = img.source !== 'cool';
  return `
    <figure class="shot${mine ? ' shot-own' : ''}">
      <img src="${text(img.src)}" alt="${text(img.alt)}"
           width="${img.w}" height="${img.h}" loading="lazy" decoding="async">
      ${mine ? '' : `<figcaption>圖片：<a href="${text(c.href)}" target="_blank" rel="noopener">${text(c.name)}</a></figcaption>`}
    </figure>`;
}

/* Said once, properly, at the end — where someone who has read the page will
   see it, rather than as a banner nobody reads on the way in. */
function buildCredit() {
  const c = BODY.credit;
  return `
    <aside class="credit">
      <figure class="credit-shot">
        <img src="img/cover.jpg" width="1200" height="800" loading="lazy" decoding="async"
             alt="Cool English 的貼文封面：「眼屎、鼻屎、耳屎 英文怎麼說？」，下面三張半調網點插圖分別是眼睛、鼻子和耳朵，各標著 eye discharge、booger、earwax。">
      </figure>
      <div class="credit-t">
        <p class="credit-zh">${text(c.zh)}</p>
        <p class="credit-en">${text(c.en)}</p>
        <p class="credit-link">
          <a href="${text(c.href)}" target="_blank" rel="noopener">${text(c.name)} ${text(c.nameZh)} →</a>
        </p>
      </div>
    </aside>`;
}

function buildTopic(t, n) {
  return `
    <section class="topic" id="${text(t.id)}">
      <header class="topic-head">
        <p class="eyebrow"><span class="t-n">${String(n).padStart(2, '0')}</span>
          <span class="t-icon" aria-hidden="true">${text(t.icon)}</span></p>
        <h2><span class="h-zh">${text(t.zh)}</span><span class="h-en">${text(t.en)}</span></h2>
        ${pair(t.lead.en, t.lead.zh, 'topic-lead')}
      </header>

      ${t.image ? shot(t.image) : ''}

      <ul class="terms">${t.terms.map((x) => buildTerm(x, t.id)).join('')}</ul>

      <div class="colls">
        <h3 class="sub">常用搭配 <em>Collocations</em></h3>
        <ul>
          ${t.colls.map((c) => `
            <li class="coll pair" data-zh>
              <p class="en coll-en">${text(c.en)}${say(c.en.replace(/one’s/g, 'your'))}<button class="zh-chip" title="顯示中文">中</button></p>
              <p class="zh coll-zh">${text(c.zh)}</p>
            </li>`).join('')}
        </ul>
      </div>

      ${(t.notes || []).map((no) => `
        <aside class="note">
          <h4><span class="h-en">${text(no.en)}</span><span class="h-zh">${text(no.zh)}</span></h4>
          <p class="note-en">${text(no.bodyEn)}</p>
          <p class="note-zh">${text(no.bodyZh)}</p>
        </aside>`).join('')}
    </section>`;
}

function buildCover() {
  return `
    <header class="cover" id="top">
      <p class="eyebrow">國中英語 · 生活單字</p>
      <h1><span class="h-zh">${text(BODY.titleZh)}</span><span class="h-en">${text(BODY.title)}</span></h1>
      ${pair(BODY.intro.en, BODY.intro.zh, 'cover-intro')}
      <p class="ladder-key">
        ${Object.keys(BODY.registers).map((k) => `
          <span class="tag tag-${text(k)}"><span class="tag-zh">${text(BODY.registers[k].zh)}</span><span class="tag-en">${text(BODY.registers[k].en)}</span></span>`).join('')}
      </p>
    </header>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="Contents">
      <p class="toc-head">Contents 目錄</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="t-zh">開始</span><span class="t-en">Start</span></span></a></li>
        ${BODY.topics.map((t, i) => `
          <li><a href="#${text(t.id)}" data-target="${text(t.id)}">
            <span class="n">${String(i + 1).padStart(2, '0')}</span>
            <span class="t"><span class="t-zh">${text(t.icon)} ${text(t.zh)}</span>
              <span class="t-en">${text(t.en)}</span></span></a></li>`).join('')}
      </ul>
    </nav>`;
}

// ------------------------------------------------------------------- build

document.title = `${BODY.title} — ${BODY.titleZh}`;
$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
BODY.topics.forEach((t, i) => doc.appendChild(el(buildTopic(t, i + 1))));
doc.appendChild(el(buildCredit()));

// ------------------------------------------------------------------- marks

/* 自學 only, and the page says so: a mark is the student's own note to
   themselves, so it is written on their device and never anywhere else. */
let MARKS = store.get('marks', {});

function paintMarks() {
  $$('.term').forEach((li) => {
    const m = MARKS[li.dataset.term];
    if (m) li.setAttribute('data-mark', m); else li.removeAttribute('data-mark');
    $$('.mk', li).forEach((b) =>
      b.setAttribute('aria-pressed', String(b.dataset.mark === m)));
  });
  const n = Object.keys(MARKS).length;
  const total = $$('.term').length;
  $('#markinfo').textContent = n
    ? `已標記 ${n} / ${total} 個字，只存在這台裝置。`
    : `還沒有標記。標記只會存在這台裝置。`;
}

function mark(li, v) {
  if (S.mode !== 'self') return;
  const k = li.dataset.term;
  if (MARKS[k] === v) delete MARKS[k]; else MARKS[k] = v;
  store.set('marks', MARKS);
  paintMarks();
}

// ------------------------------------------------------------------- modes

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  $('#zhToggle').setAttribute('aria-pressed', String(on));
}

function setMode(m, remember) {
  S.mode = TEACHER ? m : 'self';
  document.body.classList.toggle('mode-teach', S.mode === 'teach');
  document.body.classList.toggle('mode-self', S.mode === 'self');
  if (remember) store.set('mode', S.mode);

  $$('#modeseg button').forEach((b) =>
    b.setAttribute('aria-pressed', String(b.dataset.mode === S.mode)));

  /* 自學 shows the Chinese outright. 教學 starts with it away, and the 中文
     switch is how the teacher opens the lot. */
  setAllZh(S.mode === 'self');

  $('#teachtools').hidden = S.mode !== 'teach';
  $('#selftools').hidden  = S.mode !== 'self';
  paintMarks();
}

if (TEACHER) { $('#modeseg').hidden = false; $('#teacherflag').hidden = false; }
setMode(S.mode, false);

// ------------------------------------------------------------------- events

doc.addEventListener('click', (e) => {
  const sayBtn = e.target.closest('.say');
  if (sayBtn) { e.stopPropagation(); speak(sayBtn.dataset.say); return; }

  const chip = e.target.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    const host = chip.closest('.pair');
    if (host) host.classList.toggle('open');
    return;
  }

  const mk = e.target.closest('.mk');
  if (mk) { mark(mk.closest('.term'), mk.dataset.mark); return; }

  const line = e.target.closest('.pair[data-zh]');
  if (line && !e.target.closest('button')) line.classList.toggle('open');
});

$$('#modeseg button').forEach((b) =>
  b.addEventListener('click', () => setMode(b.dataset.mode, true)));

$('#zhToggle').addEventListener('click', () =>
  setAllZh(!document.body.classList.contains('zh-all')));

$('#clearmarks').addEventListener('click', () => {
  MARKS = {};
  store.set('marks', MARKS);
  paintMarks();
});

$('#unteach').addEventListener('click', () => {
  TEACHER = false;
  store.set('teacher', false);
  $('#modeseg').hidden = true;
  $('#teacherflag').hidden = true;
  setMode('self', true);
});

// ------------------------------------------------------------------- speech

let voices = [], voice = null;

function loadVoices() {
  voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
  if (!voices.length) return;
  const saved = store.get('voice', '');
  voice = voices.find((v) => v.name === saved)
       || voices.find((v) => v.lang === 'en-US' && /Samantha|Ava|Allison|Google US/i.test(v.name))
       || voices.find((v) => v.lang === 'en-US') || voices[0];
  const pick = $('#voicePick');
  pick.innerHTML = voices.map((v) =>
    `<option value="${text(v.name)}"${v === voice ? ' selected' : ''}>${text(v.name)} (${text(v.lang)})</option>`).join('');
}
loadVoices();
speechSynthesis.addEventListener('voiceschanged', loadVoices);

function speak(s) {
  if (!s) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(s);
    if (voice) { u.voice = voice; u.lang = voice.lang; }
    u.rate = Number($('#rate').value || 0.95);
    speechSynthesis.speak(u);
  } catch (e) { /* no speech on this device */ }
}

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  store.set('voice', voice ? voice.name : '');
  speak('This is the voice you have chosen.');
});

// ------------------------------------------------------------------- chrome

const panel = $('#panel');
function setPanel(on) {
  panel.hidden = !on;
  $('#panelToggle').setAttribute('aria-expanded', String(on));
}
$('#panelToggle').addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));
$('#closepanel').addEventListener('click', () => setPanel(false));

const navToggle = $('#navToggle');
const scrim = $('.nav-scrim');
function setNav(on) {
  document.body.classList.toggle('nav-open', on);
  navToggle.setAttribute('aria-expanded', String(on));
  scrim.hidden = !on;
}
navToggle.addEventListener('click', () => setNav(!document.body.classList.contains('nav-open')));
scrim.addEventListener('click', () => setNav(false));

$('#nav').addEventListener('click', (e) => {
  if (e.target.closest('a')) setNav(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { setPanel(false); setNav(false); }
});

/* Which topic is in view, for the contents list. The pending frame id is held
   rather than a boolean: a frame requested just before the tab is hidden never
   runs, and a stuck flag would kill the highlighting for the rest of the
   visit. Same fix as /health/ and /jill/. */
const links = new Map($$('.toc a').map((a) => [a.dataset.target, a]));
let frame = 0;

function spy() {
  frame = 0;
  const line = 120;
  let here = 'top';
  $$('.topic').forEach((s) => {
    if (s.getBoundingClientRect().top <= line) here = s.id;
  });
  links.forEach((a, id) => a.classList.toggle('here', id === here));
}
addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(spy); }, { passive: true });
spy();

/* Deep links. The page is built by script, so by the time #ear exists in the
   document the browser has already looked for it, failed, and stopped caring —
   a link to a topic would land at the top and look broken. So the jump is done
   here, once the DOM is up.

   It is a jump and not an animation: scroll-behavior is turned off around it,
   because a smooth scroll the length of six topics either takes seconds or is
   cut short by the next thing that touches the scroll position. Same decision
   as /jill/ and /health/. The offset is the bar's own height, read from the
   custom property rather than typed again here. */
function jumpToHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;

  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  const bar = parseFloat(getComputedStyle(root).getPropertyValue('--bar-h')) || 54;
  window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY - bar - 12);
  root.style.scrollBehavior = prev;
  spy();
}

jumpToHash();
/* #teach is claimed and stripped by the handler above before this runs, so it
   never reaches here as an id to look for. */
addEventListener('hashchange', jumpToHash);
