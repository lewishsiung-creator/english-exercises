/* Renders GN (content.js) and wires up the page.

   The two-mode shape of the 國中 pages, as /body-words/, /fab-english/ and
   /a2-key/ use it:

   1. **Two modes, one page.** 自學 is the student alone: the Chinese is on
      screen and their answers are kept on their own device. 教學 is the
      lesson: the Chinese waits behind a 中 chip and nothing is recorded.
   2. **Students never see the switch.** The plain URL carries no mode at all.
      Opening the page once with `#teach` turns THIS device into the teacher's
      and is remembered; the hash is then stripped from the address bar so it
      cannot be copied to a student by accident. 設定 →「在這台裝置隱藏」undoes
      it, once per device.
   3. **Chinese that is explanation is never hidden by either mode.** On a
      grammar page that is most of the Chinese: a rule and a note are the
      teacher's voice, not something a student is meant to produce. What 教學
      hides is what they should be able to work out — a verb's meaning and a
      sentence's 中譯.

   One rule the practice here shares with /grammar/ and with Anny's notebook:
   **a wrong sentence gets no 🔊.** The judge exercise shows incorrect English
   on purpose, and the wrong version must never be the model that goes into a
   learner's ear. The speaker sits on the correction instead.

   The page is built once and shown or hidden by classes on <body>, so
   switching mode costs nothing and never loses an open card.

   Everything kept in localStorage is under `gn.`: the mode, whether this is a
   teacher device, the chosen voice, and — 自學 only — the practice answers.
   A teaching session leaves nothing behind. */

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
      const v = localStorage.getItem('gn.' + k);
      return v == null ? d : JSON.parse(v);
    } catch (e) { return d; }
  },
  set(k, v) {
    try { localStorage.setItem('gn.' + k, JSON.stringify(v)); } catch (e) { /* private mode */ }
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
  return `<button class="say" data-say="${text(sentence)}" title="唸一次" aria-label="唸一次">🔊</button>`;
}

/* An English line with its Chinese behind it. The 中 chip is the visible
   affordance in 教學; in 自學 the Chinese is simply already there. Only
   content that a student could work out for themselves goes through here. */
function pair(en, zh, cls = '', speak = true) {
  if (!zh) return `<div class="pair ${cls}"><p class="en">${text(en)}${speak ? say(en) : ''}</p></div>`;
  return `
    <div class="pair ${cls}" data-zh>
      <p class="en">${text(en)}${speak ? say(en) : ''}<button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(zh)}</p>
    </div>`;
}

/* A heading on an activity or a chart. It is scaffolding rather than content,
   so both languages are always on. */
function label(b) {
  if (!b.zh) return '';
  return `<h4 class="label"><span class="l-zh">${text(b.zh)}</span>
    <span class="l-en">${text(b.en)}</span></h4>`;
}

function hint(b) {
  if (!b.hintZh) return '';
  return `<p class="hint">${text(b.hintZh)}<span class="hint-en">${text(b.hintEn)}</span></p>`;
}

function why(w) {
  if (!w) return '';
  return `<p class="why"><span class="w-zh">${text(w.zh)}</span>
    <span class="w-en">${text(w.en)}</span></p>`;
}

function tally(n) {
  return `<p class="tally"><span class="done">0</span> / ${n}</p>`;
}

// ---------------------------------------------------------------- blocks

const BLOCKS = {
  lead: (b) => `
    <div class="lead">
      <p class="lead-zh">${text(b.zh)}</p>
      <p class="lead-en">${text(b.en)}</p>
    </div>`,

  /* A stated rule. Chinese leads and neither mode hides it: the rule is the
     teacher's own sentence, not an answer the student is withholding. */
  rule: (b) => `
    <div class="ruleline">
      <p class="r-zh">${text(b.zh)}</p>
      <p class="r-en">${text(b.en)}</p>
    </div>`,

  /* Model sentences, right beside wrong. The wrong one carries no 中譯 —
     translating a sentence that is not English teaches it — and no speaker,
     for the same reason. */
  pairs: (b) => `
    <div class="pairs">
      ${label(b)}
      <ul>
        ${b.items.map((i) => i.ok
          ? `<li class="good">
               <span class="tick" aria-hidden="true">✓</span>
               ${pair(i.text, i.zh, 'good-pair')}
             </li>`
          : `<li class="bad">
               <span class="tick" aria-hidden="true">✗</span>
               <p class="bad-en">${text(i.text)}</p>
             </li>`).join('')}
      </ul>
    </div>`,

  /* The verb list, grouped by what the verbs are about. The Chinese gloss is
     the one thing on this chart a student could supply themselves, so it is
     what 教學 hides. A fixed preposition is printed as a pattern underneath
     and is never hidden: it is part of the word, not its meaning. */
  verbs: (b) => `
    <div class="verbs">
      ${label(b)}
      ${b.groups.map((g) => `
        <div class="vgroup">
          <h5 class="vg-head"><span class="vg-zh">${text(g.zh)}</span>
            <span class="vg-en">${text(g.en)}</span></h5>
          <ul>
            ${g.items.map((i) => `
              <li class="verb">
                <div class="pair v-pair" data-zh>
                  <p class="en v-w">${text(i.w)}${say(i.w)}<button class="zh-chip" title="顯示中文">中</button></p>
                  <p class="zh v-zh">${text(i.zh)}</p>
                </div>
                ${i.pat ? `<p class="v-pat"><code>${text(i.pat)}</code>
                  <span class="v-pat-zh">${text(i.patZh)}</span></p>` : ''}
              </li>`).join('')}
          </ul>
        </div>`).join('')}
    </div>`,

  /* One verb, its two jobs side by side. The label 狀態／動作 stays on screen
     in both modes — it is the chart's own structure, and a column heading you
     have to tap to read is a column heading nobody reads. What hides is the
     meaning and the 中譯, which are what the teacher wants to ask for. */
  twoway: (b) => `
    <div class="twoway">
      ${label(b)}
      <ul>
        ${b.items.map((i) => `
          <li class="tw">
            <p class="tw-v">${text(i.v)}</p>
            <div class="tw-sides">
              ${['state', 'action'].map((k) => `
                <div class="tw-side tw-${k}">
                  <p class="tw-kind">${k === 'state' ? '狀態' : '動作'}
                    <em>${k === 'state' ? 'no -ing' : '-ing ok'}</em></p>
                  <div class="pair tw-means" data-zh>
                    <p class="en tw-m-k">意思<button class="zh-chip" title="顯示中文">中</button></p>
                    <p class="zh">${text(i[k].means)}</p>
                  </div>
                  ${pair(i[k].eg, i[k].zh, 'tw-eg')}
                </div>`).join('')}
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  /* The teacher's voice. Never hidden by either mode, in either language.
     `good` sentences take a speaker; `bad` ones never do. */
  note: (b) => `
    <aside class="note">
      <h4><span class="n-zh">${text(b.zh)}</span><span class="n-en">${text(b.en)}</span></h4>
      <p class="note-zh">${text(b.bodyZh)}</p>
      <p class="note-en">${text(b.bodyEn)}</p>
      ${(b.good || []).length || (b.bad || []).length ? `
        <div class="note-egs">
          ${(b.good || []).map((g) => `
            <p class="ex ex-good"><span aria-hidden="true">✓</span> ${text(g)}${say(g)}</p>`).join('')}
          ${(b.bad || []).map((x) => `
            <p class="ex ex-bad"><span aria-hidden="true">✗</span> ${text(x)}</p>`).join('')}
        </div>` : ''}
    </aside>`,

  /* Correct or not. The only exercise here that shows wrong English on
     purpose, so it carries the rule: the wrong sentence gets no speaker, and
     the correction does. */
  judge: (b) => `
    <div class="activity" data-act="judge">
      ${label(b)}
      ${hint(b)}
      ${b.items.map((it, n) => `
        <div class="q jq" data-ok="${it.ok ? '1' : '0'}">
          <p class="q-line"><span class="q-n">${n + 1}</span>
            <span class="q-text">${text(it.text)}</span>
            ${it.ok ? say(it.text) : ''}</p>
          <div class="choice">
            <button class="opt" data-v="1">正確 <em>Correct</em></button>
            <button class="opt" data-v="0">不正確 <em>Not correct</em></button>
          </div>
          ${it.fix ? `<p class="fix"><span class="fix-k">改成</span>
            ${text(it.fix)}${say(it.fix)}</p>` : ''}
          ${why(it.why)}
        </div>`).join('')}
      ${tally(b.items.length)}
    </div>`,

  /* One blank, two forms. The explanation is written for after the answer, so
     it stays shut until the blank is filled. */
  mcq: (b) => `
    <div class="activity" data-act="mcq">
      ${label(b)}
      ${hint(b)}
      ${b.items.map((it, n) => {
        const [before, after = ''] = text(it.text).split('___');
        return `
          <div class="q mq" data-answer="${it.answer}">
            <p class="q-line"><span class="q-n">${n + 1}</span>
              <span class="q-text">${before}<span class="slot"></span>${after}</span></p>
            <div class="choice">
              ${it.options.map((o, i) => `
                <button class="opt" data-i="${i}" data-t="${text(o)}">${text(o)}</button>`).join('')}
            </div>
            ${why(it.why)}
          </div>`;
      }).join('')}
      ${tally(b.items.length)}
    </div>`,
};

// ---------------------------------------------------------------- build

function buildPart(part, pointId) {
  return `
    <section class="part" id="${text(part.id)}">
      <h3 class="part-head"><span class="p-zh">${text(part.zh)}</span>
        <span class="p-en">${text(part.en)}</span></h3>
      ${part.blocks.map((b) => {
        const fn = BLOCKS[b.t];
        if (!fn) throw new Error(`grammar-notes: no renderer for block "${b.t}" in ${pointId}/${part.id}`);
        return fn(b);
      }).join('')}
    </section>`;
}

function buildPoint(p, n) {
  return `
    <article class="point" id="${text(p.id)}">
      <header class="point-head">
        <p class="eyebrow"><span class="p-n">${String(n).padStart(2, '0')}</span>
          <span class="p-icon" aria-hidden="true">${text(p.icon)}</span></p>
        <h2><span class="h-zh">${text(p.zh)}</span><span class="h-en">${text(p.en)}</span></h2>
        <p class="point-sub">${text(p.sub)}</p>
        <div class="lead point-lead">
          <p class="lead-zh">${text(p.lead.zh)}</p>
          <p class="lead-en">${text(p.lead.en)}</p>
        </div>
      </header>
      ${p.parts.map((pt) => buildPart(pt, p.id)).join('')}
    </article>`;
}

function buildCover() {
  return `
    <header class="cover" id="top">
      <p class="eyebrow">${text(GN.kicker)}</p>
      <h1><span class="h-zh">${text(GN.titleZh)}</span><span class="h-en">${text(GN.title)}</span></h1>
      <div class="lead cover-intro">
        <p class="lead-zh">${text(GN.intro.zh)}</p>
        <p class="lead-en">${text(GN.intro.en)}</p>
      </div>
    </header>`;
}

function buildSource() {
  return `
    <footer class="source">
      <p class="src-zh">${text(GN.sourceNote.zh)}</p>
      <p class="src-en">${text(GN.sourceNote.en)}</p>
    </footer>`;
}

/* The contents list. A point is a heading and its parts are the links, so with
   one point the list reads as the page's own contents and with six it reads as
   a book's. The parts are what people actually want to jump to. */
function buildNav() {
  return `
    <nav class="toc" aria-label="目錄">
      <p class="toc-head">目錄 <em>Contents</em></p>
      ${GN.points.map((p, i) => `
        <p class="toc-point"><span class="n">${String(i + 1).padStart(2, '0')}</span>
          <span aria-hidden="true">${text(p.icon)}</span> ${text(p.zh)}</p>
        <ul>
          ${p.parts.map((pt) => `
            <li><a href="#${text(pt.id)}" data-target="${text(pt.id)}">
              <span class="t-zh">${text(pt.zh)}</span>
              <span class="t-en">${text(pt.en)}</span></a></li>`).join('')}
        </ul>`).join('')}
    </nav>`;
}

document.title = `${GN.titleZh} — ${GN.title}`;
$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
GN.points.forEach((p, i) => doc.appendChild(el(buildPoint(p, i + 1))));
doc.appendChild(el(buildSource()));

/* Every question gets a stable id from where it sits, so an answer kept on a
   student's device still finds its question after the page is edited around
   it — unless that question itself moved, which is the one case where the old
   answer should be forgotten anyway. */
$$('.activity').forEach((act, a) => {
  const part = act.closest('.part').id;
  $$('.q', act).forEach((q, i) => { q.dataset.qid = `${part}-${a}-${i}`; });
});

// ------------------------------------------------------------------ answers

/* 自學 only, and the page says so. An answer is the student's own working, so
   it is written on their device and never anywhere else. 教學 keeps nothing:
   the next lesson should start clean. */
let ANS = store.get('answers', {});

function paintTally(act) {
  const right = $$('.q.right', act).length;
  const t = $('.tally .done', act);
  if (t) t.textContent = String(right);
}

function settle(q, correct) {
  q.classList.add('answered');
  q.classList.toggle('right', correct);
  q.classList.toggle('wrong', !correct);
  paintTally(q.closest('.activity'));
}

function answerJudge(q, v, record = true) {
  if (q.classList.contains('answered')) return;
  const correct = (q.dataset.ok === '1') === (v === '1');
  $$('.opt', q).forEach((b) => {
    b.disabled = true;
    if (b.dataset.v === q.dataset.ok) b.classList.add('is-answer');
    if (b.dataset.v === v && !correct) b.classList.add('is-wrong');
  });
  settle(q, correct);
  if (record && S.mode === 'self') { ANS[q.dataset.qid] = v; store.set('answers', ANS); }
}

function answerMcq(q, i, record = true) {
  if (q.classList.contains('answered')) return;
  const correct = Number(q.dataset.answer) === Number(i);
  const chosen = $(`.opt[data-i="${i}"]`, q);
  $$('.opt', q).forEach((b) => {
    b.disabled = true;
    if (Number(b.dataset.i) === Number(q.dataset.answer)) b.classList.add('is-answer');
  });
  if (chosen && !correct) chosen.classList.add('is-wrong');
  const slot = $('.slot', q);
  if (slot) {
    slot.textContent = $(`.opt[data-i="${q.dataset.answer}"]`, q).dataset.t;
    slot.classList.add('filled');
  }
  settle(q, correct);
  if (record && S.mode === 'self') { ANS[q.dataset.qid] = String(i); store.set('answers', ANS); }
}

function restore() {
  if (S.mode !== 'self') return;
  $$('.q').forEach((q) => {
    const v = ANS[q.dataset.qid];
    if (v == null || q.classList.contains('answered')) return;
    if (q.classList.contains('jq')) answerJudge(q, v, false);
    else answerMcq(q, v, false);
  });
}

function clearAnswers(forget) {
  $$('.q').forEach((q) => {
    q.classList.remove('answered', 'right', 'wrong');
    $$('.opt', q).forEach((b) => {
      b.disabled = false;
      b.classList.remove('is-answer', 'is-wrong');
    });
    const slot = $('.slot', q);
    if (slot) { slot.textContent = ''; slot.classList.remove('filled'); }
  });
  $$('.activity').forEach(paintTally);
  if (forget) { ANS = {}; store.set('answers', ANS); }
}

function paintInfo() {
  const n = Object.keys(ANS).length;
  const total = $$('.q').length;
  const info = $('#markinfo');
  if (info) {
    info.textContent = n
      ? `已作答 ${n} / ${total} 題，只存在這台裝置。`
      : `還沒有作答。作答紀錄只會存在這台裝置。`;
  }
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

  /* Switching into 教學 wipes the screen of whatever the student had answered
     — a lesson starts clean — but does not touch what is on their device. */
  clearAnswers(false);
  restore();

  $('#teachtools').hidden = S.mode !== 'teach';
  $('#selftools').hidden  = S.mode !== 'self';
  paintInfo();
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

  const opt = e.target.closest('.opt');
  if (opt) {
    const q = opt.closest('.q');
    if (q.classList.contains('jq')) answerJudge(q, opt.dataset.v);
    else answerMcq(q, opt.dataset.i);
    paintInfo();
    return;
  }

  const line = e.target.closest('.pair[data-zh]');
  if (line && !e.target.closest('button')) line.classList.toggle('open');
});

$$('#modeseg button').forEach((b) =>
  b.addEventListener('click', () => setMode(b.dataset.mode, true)));

$('#zhToggle').addEventListener('click', () =>
  setAllZh(!document.body.classList.contains('zh-all')));

$('#clearmarks').addEventListener('click', () => { clearAnswers(true); paintInfo(); });
$('#fresh').addEventListener('click', () => clearAnswers(false));

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

/* Which part is in view, for the contents list. The pending frame id is held
   rather than a boolean: a frame requested just before the tab is hidden never
   runs, and a stuck flag would kill the highlighting for the rest of the
   visit. Same fix as /body-words/, /health/ and /jill/. */
const links = new Map($$('.toc a').map((a) => [a.dataset.target, a]));
let frame = 0;

function spy() {
  frame = 0;
  const line = 120;
  let here = '';
  $$('.part').forEach((s) => {
    if (s.getBoundingClientRect().top <= line) here = s.id;
  });
  links.forEach((a, id) => a.classList.toggle('here', id === here));
}
addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(spy); }, { passive: true });
spy();

/* Deep links. The page is built by script, so by the time #practice exists in
   the document the browser has already looked for it, failed, and stopped
   caring — a link to a part would land at the top and look broken. So the jump
   is done here, once the DOM is up.

   It is a jump and not an animation: scroll-behavior is turned off around it,
   because a smooth scroll the length of the page either takes seconds or is
   cut short by the next thing that touches the scroll position. Same decision
   as /body-words/, /jill/ and /health/. The offset is the bar's own height,
   read from the custom property rather than typed again here. */
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
