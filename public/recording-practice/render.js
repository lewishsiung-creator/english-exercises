/* Renders PRACTICE (content.js).

   The smallest renderer in the repo, because the page does one thing: show a
   passage at a size you can read off a screen while speaking, and say any
   part of it aloud on request.

   Two decisions worth keeping:

   - A sentence is a button, and so is the paragraph it sits in. They practise
     different things — a sentence gives you a shape to copy, a paragraph gives
     you a pace to hold — so both have their own 🔊 rather than one standing in
     for the other.
   - Nothing here records. The page does not ask for a microphone, store audio
     or upload anything; the recording happens in whatever app the student
     already uses and comes back on LINE. A page that asked for the microphone
     would need a reason, and "it would be tidier" is not one.

   The only state kept in localStorage is device settings: the chosen voice,
   the speed, and whether Chinese starts visible. */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function pair(en, zh, cls = '') {
  if (!zh) return `<div class="pair ${cls}"><p class="en">${text(en)}</p></div>`;
  return `
    <div class="pair ${cls}" data-zh>
      <p class="en">${text(en)}<button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(zh)}</p>
    </div>`;
}

function speakBtn(sentence, cls = 'say') {
  return `<button class="${cls}" data-say="${text(sentence)}" title="Listen"
    aria-label="Listen">🔊</button>`;
}

/* Split on sentence ends, keeping the punctuation with the sentence it
   belongs to. Abbreviations would break this — "e.g." would become two
   sentences — so the passages avoid them, which is good advice for something
   read aloud anyway. */
function sentences(s) {
  return s.match(/[^.!?]+[.!?]*\s*/g) || [s];
}

// ---------------------------------------------------------------- build

const passages = PRACTICE.passages;
const ordered = [...passages].reverse();

function buildCover() {
  const i = PRACTICE.intro;
  return `
    <header class="cover" id="top">
      <p class="kicker">${text(PRACTICE.kicker)}</p>
      <h1><span class="en">${text(PRACTICE.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(PRACTICE.titleZh)}</span></h1>
      ${pair(i.en, i.zh, 'cover-intro')}

      <div class="goals">
        ${pair(i.stepsEn, i.stepsZh, 'goals-intro')}
        <ol>
          ${i.steps.map((s) => `
            <li class="pair" data-zh>
              <p class="en">${text(s.en)}</p>
              <p class="zh">${text(s.zh)}</p>
            </li>`).join('')}
        </ol>
      </div>
    </header>`;
}

function buildPassage(p) {
  const paras = p.paras.map((para) => `
    <div class="para pair" data-zh>
      <p class="en">${sentences(para.en).map((s) => `
        <span class="sent">${text(s.trim())}${speakBtn(s.trim(), 'say say-tiny')}</span>`).join(' ')}
        ${speakBtn(para.en, 'say say-para')}
        <button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(para.zh)}</p>
    </div>`).join('');

  const watch = p.watch ? `
    <div class="watch">
      <h3 class="label"><span class="en">${text(p.watchEn)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(p.watchZh)}</span></h3>
      <ul class="cards">
        ${p.watch.map((w) => `
          <li class="card" tabindex="0" role="button" aria-expanded="false">
            <p class="card-en">${text(w.en)}${speakBtn(w.en)}</p>
            <p class="card-zh">${text(w.zh)}</p>
          </li>`).join('')}
      </ul>
    </div>` : '';

  return `
    <section class="piece" id="${p.id}" aria-labelledby="h-${p.id}">
      <h2 class="piece-head" id="h-${p.id}">
        <span class="date">${text(p.dateEn)}<em>${text(p.dateZh || '')}</em></span>
        <span class="titles"><span class="en">${text(p.en)}</span>
          <button class="zh-chip" title="顯示中文">中</button>
          <span class="zh">${text(p.zh)}</span></span>
      </h2>

      <div class="lead">${pair(p.leadEn, p.leadZh)}</div>
      <div class="passage">${paras}</div>
      ${watch}
    </section>`;
}

function buildListen() {
  const i = PRACTICE.intro;
  return `
    <section class="piece listen" id="listen-back" aria-labelledby="h-listen">
      <h2 class="piece-head" id="h-listen">
        <span class="titles"><span class="en">${text(i.listenEn)}</span>
          <button class="zh-chip" title="顯示中文">中</button>
          <span class="zh">${text(i.listenZh)}</span></span>
      </h2>
      <ul class="checks">
        ${i.listen.map((c) => `
          <li class="pair" data-zh>
            <p class="en">${text(c.en)}</p>
            <p class="zh">${text(c.zh)}</p>
          </li>`).join('')}
      </ul>
    </section>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="Passages">
      <p class="toc-head">Passages 文章</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="en">Start</span><span class="zh">開始</span></span></a></li>
        ${ordered.map((p) => `
          <li><a href="#${p.id}" data-target="${p.id}"><span class="n">🎙</span>
            <span class="t"><span class="en">${text(p.en)}</span>
            <span class="zh">${text(p.dateEn)}</span></span></a></li>`).join('')}
        <li><a href="#listen-back" data-target="listen-back"><span class="n">·</span>
          <span class="t"><span class="en">Listening back</span><span class="zh">回聽</span></span></a></li>
      </ul>
    </nav>`;
}

document.title = `${PRACTICE.title} ${PRACTICE.dateLabel} · ${PRACTICE.titleZh}`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
ordered.forEach((p) => doc.appendChild(el(buildPassage(p))));
doc.appendChild(el(buildListen()));

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`rec.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`rec.${k}`, v); } catch { /* private mode */ } },
};

const zhToggle = $('#zhToggle');

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
  store.set('zh', on ? '1' : '0');
}

zhToggle.addEventListener('click', () => setAllZh(!document.body.classList.contains('zh-all')));
setAllZh(store.get('zh', '0') === '1');

// ---------------------------------------------------------------- taps

doc.addEventListener('click', (e) => {
  const t = e.target;

  const say = t.closest('.say');
  if (say) { e.stopPropagation(); speak(say.dataset.say); return; }

  const card = t.closest('.card');
  if (card) {
    const open = card.classList.toggle('open');
    card.setAttribute('aria-expanded', String(open));
    return;
  }

  const line = t.closest('.pair[data-zh]');
  if (line && !t.closest('button')) { line.classList.toggle('open'); return; }
});

doc.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('.card');
  if (card) { e.preventDefault(); card.click(); }
});

// ---------------------------------------------------------------- speech

let voices = [];
let voice = null;

function loadVoices() {
  voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
  if (!voices.length) return;

  const saved = store.get('voice', '');
  voice = voices.find((v) => v.name === saved)
       || voices.find((v) => v.lang === 'en-US' && /Samantha|Ava|Allison|Google US/i.test(v.name))
       || voices.find((v) => v.lang === 'en-US')
       || voices[0];

  const sel = $('#voicePick');
  sel.innerHTML = voices.map((v) =>
    `<option value="${text(v.name)}"${v === voice ? ' selected' : ''}>${text(v.name)} · ${text(v.lang)}</option>`
  ).join('');
}

loadVoices();
speechSynthesis.onvoiceschanged = loadVoices;

function speak(sentence) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(sentence);
  if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = 'en-US'; }
  u.rate = Number($('#rate').value);
  speechSynthesis.speak(u);
}

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  store.set('voice', e.target.value);
  speak('Read it at the speed you would use with a colleague.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('Read it at the speed you would use with a colleague.');
});
$('#rate').value = store.get('rate', '0.95');

// ---------------------------------------------------------------- panel

const panel = $('#panel');
const panelBtn = $('#panelToggle');

function setPanel(open) {
  panel.hidden = !open;
  panelBtn.setAttribute('aria-expanded', String(open));
}

panelBtn.addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { setPanel(false); speechSynthesis.cancel(); }
});

$('#zhAll').addEventListener('change', (e) => setAllZh(e.target.checked));

// ---------------------------------------------------------------- contents

const navToggle = $('#navToggle');
const nav = $('#nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
