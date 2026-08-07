/* Renders LESSON (content.js) and wires up the reveals.

   This page is driven by the teacher in a session rather than worked through
   alone at home, so it behaves the way the other adult pages do:

   - Nothing is scored and nothing is saved. A fresh load is a fresh lesson,
     which is what you want between two clients on the same laptop. The only
     things kept in localStorage are device settings: the chosen voice, the
     speed, and whether Chinese starts visible.
   - Chinese is hidden until it is asked for. Any English line can be tapped,
     or the 中文 switch in the bar reveals the lot. Instructions and buttons
     stay bilingual — those are scaffolding, not comprehension practice.
   - The revision stays shut until someone opens it. That is the whole point of
     the page: the student should get a go at spotting the change before being
     shown it, and the two-step reveal (mark the changes, then show them) gives
     the teacher a hint to hand out in between.
   - The teacher panel is deliberately faint. It sits in the top bar and opens
     over the lesson rather than replacing it, so a discussion in progress is
     never lost.
*/

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

/* An English line with its Chinese held behind it. The 中 chip is the visible
   affordance; clicking anywhere in the block does the same thing. */
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

// ---------------------------------------------------------------- sentences

/* The [[marks]] in a sentence. `plain` is what gets spoken and what gets read
   when the changes are not showing; `marked` wraps each one so it can be lit
   up beside its counterpart in the other version. */

function plain(s) {
  return s.replace(/\[\[|\]\]/g, '');
}

function markCount(s) {
  return (s.match(/\[\[(.+?)\]\]/g) || []).length;
}

/* A marked change is not a control until the changes are showing — before that
   it is ordinary running text, and giving it a role and a tab stop would hand
   a keyboard or screen-reader user the answer. `reveal` adds both. */
function marked(s, side) {
  let n = 0;
  // The escaping runs first, so the brackets are matched in text that is
  // already safe — nothing between them can close a tag.
  return text(s).replace(/\[\[(.+?)\]\]/g, (_, inner) => {
    const i = n++;
    return `<mark class="ch ch-${side}" data-i="${i}">${inner}<span class="ch-n">${i + 1}</span></mark>`;
  });
}

function sentence(s, side, labelEn, labelZh) {
  return `
    <div class="sent sent-${side}">
      <p class="sent-label">${text(labelEn)} <span>${text(labelZh)}</span>
        ${speakBtn(plain(s), 'say say-quiet')}</p>
      <p class="sent-text">${marked(s, side)}</p>
    </div>`;
}

// ---------------------------------------------------------------- build

function buildItem(it) {
  /* A mismatch means the two versions no longer line up, so mark 3 in the
     original would light mark 3 of something else in the revision. Better to
     fail loudly while editing the content file than to teach the wrong pair. */
  const a = markCount(it.original);
  const b = markCount(it.revised);
  if (a !== b) {
    throw new Error(`Item "${it.id}": ${a} marked changes in the original but ${b} in the revision`);
  }

  return `
    <section class="item" id="${it.id}" aria-labelledby="h-${it.id}">
      <h2 class="item-head" id="h-${it.id}">
        <span class="n">${it.n}</span>
        <span class="titles"><span class="en">${text(it.en)}</span>
          <button class="zh-chip" title="顯示中文">中</button>
          <span class="zh">${text(it.zh)}</span></span>
      </h2>

      ${sentence(it.original, 'was', 'Your sentence', '原句')}

      <div class="steps">
        <button class="step-btn" data-do="marks" aria-pressed="false">
          <span class="en">Where would you change it?</span><span class="zh-fixed">哪裡要改？</span>
        </button>
        <button class="step-btn step-btn-go" data-do="fix" aria-pressed="false">
          <span class="en">Show the revision</span><span class="zh-fixed">看修改後</span>
        </button>
      </div>

      ${sentence(it.revised, 'now', 'Revised', '修改後')}

      <div class="whybox">
        <h3 class="label"><span class="en">What changed, and why</span>
          <button class="zh-chip" title="顯示中文">中</button>
          <span class="zh">改了什麼、為什麼</span></h3>
        ${pair(it.why.en, it.why.zh, 'why-text')}
      </div>

      <div class="phrases">
        <h3 class="label"><span class="en">Useful collocations</span>
          <button class="zh-chip" title="顯示中文">中</button>
          <span class="zh">實用搭配詞</span></h3>
        <ul class="cards">
          ${it.phrases.map((p) => `
            <li class="card" tabindex="0" role="button" aria-expanded="false">
              <p class="card-en">${text(p.en)}${speakBtn(p.en)}</p>
              <p class="card-zh">${text(p.zh)}</p>
            </li>`).join('')}
        </ul>
      </div>
    </section>`;
}

function buildReview() {
  const r = LESSON.review;

  const rows = LESSON.items.flatMap((it) => it.phrases.map((p) => `
    <tr data-zh>
      <td class="td-n">${it.n}</td>
      <td class="td-en">${text(p.en)}${speakBtn(p.en, 'say say-quiet')}</td>
      <td class="td-zh"><span class="zh">${text(p.zh)}</span></td>
    </tr>`)).join('');

  return `
    <section class="item review" id="${r.id}" aria-labelledby="h-${r.id}">
      <h2 class="item-head" id="h-${r.id}">
        <span class="n">·</span>
        <span class="titles"><span class="en">${text(r.en)}</span>
          <button class="zh-chip" title="顯示中文">中</button>
          <span class="zh">${text(r.zh)}</span></span>
      </h2>

      <div class="lead">${pair(r.leadEn, r.leadZh)}</div>

      <h3 class="label"><span class="en">${text(r.readEn)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(r.readZh)}</span></h3>
      <p class="hint">${text(r.readHintEn)}<span class="hint-zh">${text(r.readHintZh)}</span></p>
      <ol class="finals">
        ${LESSON.items.map((it) => `
          <li><a class="finals-n" href="#${it.id}">${it.n}</a>
            <span class="finals-t">${text(plain(it.revised))}${speakBtn(plain(it.revised), 'say say-quiet')}</span>
          </li>`).join('')}
      </ol>

      <h3 class="label"><span class="en">${text(r.listEn)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(r.listZh)}</span></h3>
      <p class="hint">${text(r.listHintEn)}<span class="hint-zh">${text(r.listHintZh)}</span></p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th><span class="en">${text(r.headN.en)}</span><span class="zh">${text(r.headN.zh)}</span></th>
              <th><span class="en">${text(r.headEn.en)}</span><span class="zh">${text(r.headEn.zh)}</span></th>
              <th><span class="en">${text(r.headZh.en)}</span><span class="zh">${text(r.headZh.zh)}</span></th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>`;
}

function buildCover() {
  const i = LESSON.intro;
  return `
    <header class="cover" id="top">
      <p class="kicker">${text(LESSON.kicker)}</p>
      <h1><span class="en">${text(LESSON.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(LESSON.titleZh)}</span></h1>
      ${pair(i.en, i.zh, 'cover-intro')}
      <div class="goals">
        ${pair(i.goalsEn, i.goalsZh, 'goals-intro')}
        <ul>
          ${i.goals.map((g) => `
            <li class="pair" data-zh>
              <p class="en">${text(g.en)}</p>
              <p class="zh">${text(g.zh)}</p>
            </li>`).join('')}
        </ul>
      </div>
      <p class="source">${text(LESSON.source.en)}
        <span class="zh">${text(LESSON.source.zh)}</span></p>
    </header>`;
}

function buildNav() {
  const r = LESSON.review;
  return `
    <nav class="toc" aria-label="Sentences">
      <p class="toc-head">Sentences 句子</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="en">Start</span><span class="zh">開始</span></span></a></li>
        ${LESSON.items.map((it) => `
          <li><a href="#${it.id}" data-target="${it.id}"><span class="n">${it.n}</span>
            <span class="t"><span class="en">${text(it.en)}</span>
            <span class="zh">${text(it.zh)}</span></span></a></li>`).join('')}
        <li><a href="#${r.id}" data-target="${r.id}"><span class="n">·</span>
          <span class="t"><span class="en">${text(r.en)}</span>
          <span class="zh">${text(r.zh)}</span></span></a></li>
      </ul>
    </nav>`;
}

document.title = `${LESSON.title} · ${LESSON.titleZh}`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
LESSON.items.forEach((it) => doc.appendChild(el(buildItem(it))));
doc.appendChild(el(buildReview()));

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`su.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`su.${k}`, v); } catch { /* private mode */ } },
};

const zhToggle = $('#zhToggle');

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
  $('#zhAll').checked = on;
  store.set('zh', on ? '1' : '0');
}

setAllZh(store.get('zh', '0') === '1');
zhToggle.addEventListener('click', () => setAllZh(!document.body.classList.contains('zh-all')));

// ---------------------------------------------------------------- reveals

/* Two steps, and the second implies the first: marking the changes is the hint,
   showing the revision is the answer. Both toggle, so a sentence can be shut
   again and handed to the next person. */
function reveal(item, what, on) {
  item.classList.toggle(what === 'fix' ? 'fixed' : 'marks', on);
  if (what === 'fix' && on) item.classList.add('marks');

  const showing = item.classList.contains('marks');
  $$('.ch', item).forEach((c) => {
    if (showing) {
      c.setAttribute('role', 'button');
      c.setAttribute('tabindex', '0');
    } else {
      c.removeAttribute('role');
      c.removeAttribute('tabindex');
      c.classList.remove('lit');
    }
  });

  $$('.step-btn', item).forEach((b) => {
    const isOn = b.dataset.do === 'fix'
      ? item.classList.contains('fixed')
      : item.classList.contains('marks');
    b.classList.toggle('on', isOn);
    b.setAttribute('aria-pressed', String(isOn));
  });
}

/* Tapping a change lights it and its counterpart in the other sentence, which
   is the only way to see at a glance that "with high" became "develop a strong
   sense of" rather than something else on the line. */
function light(item, i) {
  const already = $(`.ch.lit[data-i="${i}"]`, item);
  $$('.ch.lit', item).forEach((c) => c.classList.remove('lit'));
  if (already) return;
  $$(`.ch[data-i="${i}"]`, item).forEach((c) => c.classList.add('lit'));
}

/* One click handler for the whole document: every interactive part of the page
   is a button, a card, a marked change or a table row inside it. */
doc.addEventListener('click', (e) => {
  const t = e.target;

  // ---- speak
  const say = t.closest('.say');
  if (say) { e.stopPropagation(); speak(say.dataset.say); return; }

  // ---- reveal Chinese for one line
  const chip = t.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    // Climb to the nearest ancestor that actually holds the Chinese, whatever
    // the block wrapped it in — a .pair, a heading, a table row.
    let host = chip.parentElement;
    while (host && !host.querySelector('.zh')) host = host.parentElement;
    if (host) host.classList.toggle('open');
    return;
  }

  // ---- a marked change
  const ch = t.closest('.ch');
  if (ch) { light(ch.closest('.item'), ch.dataset.i); return; }

  // ---- one of the two reveal buttons
  const step = t.closest('.step-btn');
  if (step) {
    const item = step.closest('.item');
    reveal(item, step.dataset.do, !step.classList.contains('on'));
    return;
  }

  // ---- collocation card
  const card = t.closest('.card');
  if (card) {
    const open = card.classList.toggle('open');
    card.setAttribute('aria-expanded', String(open));
    return;
  }

  // ---- a row of the phrase table, or any other paired line
  const row = t.closest('tr[data-zh]');
  if (row) { row.classList.toggle('open'); return; }

  const line = t.closest('.pair[data-zh]');
  if (line && !t.closest('button')) { line.classList.toggle('open'); return; }
});

// Cards and marked changes are focusable, so keep them operable from the keyboard.
doc.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const hit = e.target.closest('.card, .ch');
  if (hit) { e.preventDefault(); hit.click(); }
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
  speak('It is challenging to help our employees develop a strong sense of self-efficacy.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('Everyone has the potential to complete a task successfully.');
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

$('#zhAll').addEventListener('change', (e) => setAllZh(e.target.checked));

/* Open everything at once — for going back over the set together, or for
   picking the session up in the middle. */
$('#showAll').addEventListener('click', () => {
  $$('.item').forEach((item) => reveal(item, 'fix', true));
  $$('.card').forEach((c) => { c.classList.add('open'); c.setAttribute('aria-expanded', 'true'); });
  $$('tr[data-zh]').forEach((r) => r.classList.add('open'));
  setPanel(false);
});

// A reload is the reset: nothing is stored except the device settings.
$('#reset').addEventListener('click', () => location.reload());

// ---------------------------------------------------------------- chrome

const links = new Map($$('.toc a').map((a) => [a.dataset.target, a]));

const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((a) => a.classList.remove('here'));
    const a = links.get(e.target.id);
    if (a) { a.classList.add('here'); a.scrollIntoView({ block: 'nearest' }); }
  });
}, { rootMargin: '-72px 0px -70% 0px' });

[$('#top'), ...$$('.item')].forEach((s) => spy.observe(s));

const navToggle = $('#navToggle');
navToggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

function closeNav() {
  document.body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

$('#nav').addEventListener('click', (e) => { if (e.target.closest('a')) closeNav(); });
$('.nav-scrim').addEventListener('click', closeNav);
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeNav();
  setPanel(false);
  speechSynthesis.cancel();
});
