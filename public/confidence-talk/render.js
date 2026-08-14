/* Renders LESSON (content.js) and wires up the reveals.

   This is a review page for one learner of ten to twelve, driven by the
   teacher in the room rather than worked through alone at home. That decides
   almost everything about how it behaves:

   - Nothing is scored and nothing is saved. A fresh load is a fresh lesson.
     The only things kept in localStorage are device settings: the voice, the
     speed, and whether Chinese starts visible.
   - English leads; Traditional Chinese sits behind a 中 chip. At this age the
     Chinese is a safety net, not the first thing read — but it has to be one
     tap away, or a stuck learner stops talking altogether.
   - Every English line that is worth saying out loud has a 🔊. This is a
     speaking lesson; the page is a prompt sheet, not a reader.
   - The productive halves — the sentence frames and the discussion questions —
     have no input fields anywhere. Answers are spoken. What the page hides is
     an *example* answer and a follow-up question, both of them for the teacher
     to hand over once the learner has had a real go.
   - The recall table at the end runs the other way round: Chinese showing,
     English hidden. It is the only part of the page that tests rather than
     teaches, and it comes last on purpose.
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

/* A sentence that is meant to be said, not just read. Speech is stripped of
   the gap markers first — "I feel underscore underscore" helps nobody. */
function speakBtn(sentence, cls = 'say') {
  return `<button class="${cls}" data-say="${text(sayable(sentence))}" title="Listen"
    aria-label="Listen">🔊</button>`;
}

function sayable(s) {
  return String(s).replace(/_+/g, ' something ').replace(/\s+/g, ' ').trim();
}

/* A section heading, bilingual, with the Chinese behind its own chip. */
function head(n, en, zh, id) {
  return `
    <h2 class="item-head" id="h-${id}">
      <span class="n">${text(n)}</span>
      <span class="titles"><span class="en">${text(en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(zh)}</span></span>
    </h2>`;
}

function label(en, zh) {
  return `<h3 class="label"><span class="en">${text(en)}</span>
    <button class="zh-chip" title="顯示中文">中</button>
    <span class="zh">${text(zh)}</span></h3>`;
}

function hint(h) {
  if (!h) return '';
  return `<p class="hint">${text(h.en)}<span class="hint-zh">${text(h.zh)}</span></p>`;
}

// ------------------------------------------------------------------- words

function buildWord(word) {
  const examples = word.examples.map((e) => `
    <li class="eg pair" data-zh>
      <p class="en">${text(e.en)}${speakBtn(e.en, 'say say-quiet')}<button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(e.zh)}</p>
    </li>`).join('');

  const note = word.note ? `
    <div class="word-note pair" data-zh>
      <p class="en"><span class="note-mark" aria-hidden="true">✎</span>${text(word.note.en)}<button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(word.note.zh)}</p>
    </div>` : '';

  return `
    <li class="word" data-zh>
      <p class="word-top">
        <span class="word-en">${text(word.w)}</span>
        ${speakBtn(word.w)}
        <button class="zh-chip" title="顯示中文">中</button>
      </p>
      <p class="zh word-zh">${text(word.zh)}</p>
      <p class="word-meaning">${text(word.meaning)}</p>
      ${examples ? `<ul class="egs">${examples}</ul>` : ''}
      ${note}
    </li>`;
}

function buildGroup(g) {
  return `
    <section class="item" id="${g.id}" aria-labelledby="h-${g.id}">
      ${head(g.n, g.en, g.zh, g.id)}
      <div class="lead">${pair(g.lead.en, g.lead.zh)}</div>
      <ul class="words">${g.words.map(buildWord).join('')}</ul>
    </section>`;
}

// -------------------------------------------------------------- collocations

function buildPhrases() {
  const p = LESSON.phrases;

  const sets = p.sets.map((s) => `
    <div class="pset">
      ${label(s.en, s.zh)}
      <ul class="cards">
        ${s.items.map((it) => `
          <li class="card" tabindex="0" role="button" aria-expanded="false">
            <p class="card-en">${text(it.en)}${speakBtn(it.en)}</p>
            <p class="card-zh">${text(it.zh)}</p>
          </li>`).join('')}
      </ul>
    </div>`).join('');

  return `
    <section class="item" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head('·', p.en, p.zh, p.id)}
      <div class="lead">${pair(p.lead.en, p.lead.zh)}</div>
      ${hint(p.hint)}
      ${sets}
    </section>`;
}

// ---------------------------------------------------- classroom expressions

function buildExpressions() {
  const x = LESSON.expressions;

  const items = x.items.map((it) => `
    <li class="expr">
      <div class="pair" data-zh>
        <p class="en expr-en">${text(it.en)}${speakBtn(it.en)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(it.zh)}</p>
      </div>
      <div class="pair expr-when" data-zh>
        <p class="en"><span class="when-mark">When</span>${text(it.when.en)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(it.when.zh)}</p>
      </div>
    </li>`).join('');

  return `
    <section class="item" id="${x.id}" aria-labelledby="h-${x.id}">
      ${head('·', x.en, x.zh, x.id)}
      <div class="lead">${pair(x.lead.en, x.lead.zh)}</div>
      <ul class="exprs">${items}</ul>
    </section>`;
}

// ------------------------------------------------------------- naturalness

/* The natural version stays shut until someone asks for it. The point of the
   exercise is to notice what is odd about the first sentence, and being shown
   the answer at the same moment removes the noticing. */
function buildNatural() {
  const nt = LESSON.natural;

  const items = nt.items.map((it, i) => `
    <li class="upg" data-upg>
      <p class="upg-label"><span class="en">You could say</span><span class="zh-fixed">你可以說</span></p>
      <p class="upg-was">${text(it.was)}${speakBtn(it.was, 'say say-quiet')}</p>

      <button class="step-btn step-btn-go" data-do="upgrade" aria-pressed="false"
              aria-controls="upg-${i}">
        <span class="en">Say it more naturally</span><span class="zh-fixed">更自然的說法</span>
      </button>

      <div class="upg-open" id="upg-${i}">
        <p class="upg-label"><span class="en">More natural</span><span class="zh-fixed">更自然</span></p>
        <p class="upg-now">${text(it.now)}${speakBtn(it.now, 'say say-quiet')}</p>
        ${pair(it.why.en, it.why.zh, 'upg-why')}
      </div>
    </li>`).join('');

  return `
    <section class="item" id="${nt.id}" aria-labelledby="h-${nt.id}">
      ${head('·', nt.en, nt.zh, nt.id)}
      <div class="lead">${pair(nt.lead.en, nt.lead.zh)}</div>
      <ul class="upgs">${items}</ul>
    </section>`;
}

// ---------------------------------------------------------- sentence frames

function buildMake() {
  const m = LESSON.make;

  const frames = m.frames.map((f) => `
    <li class="frame" tabindex="0" role="button" aria-expanded="false">
      <p class="frame-en">${text(f.en)}${speakBtn(f.en, 'say say-quiet')}</p>
      <p class="frame-zh">${text(f.zh)}</p>
      <div class="frame-eg">
        <p class="frame-eg-label"><span class="en">For example</span><span class="zh-fixed">例如</span></p>
        <p class="frame-eg-en">${text(f.eg.en)}${speakBtn(f.eg.en, 'say say-quiet')}</p>
        <p class="frame-eg-zh">${text(f.eg.zh)}</p>
      </div>
    </li>`).join('');

  return `
    <section class="item" id="${m.id}" aria-labelledby="h-${m.id}">
      ${head('·', m.en, m.zh, m.id)}
      <div class="lead">${pair(m.lead.en, m.lead.zh)}</div>
      ${hint(m.hint)}
      <ul class="frames">${frames}</ul>

      ${label(m.bank.en, m.bank.zh)}
      <ul class="bank">
        ${m.bank.words.map((w) => `
          <li><button class="chip say" data-say="${text(w)}">${text(w)}</button></li>`).join('')}
      </ul>
    </section>`;
}

// ------------------------------------------------------------------- talk

function buildTalk() {
  const t = LESSON.talk;

  const items = t.items.map((q, i) => `
    <li class="q" tabindex="0" role="button" aria-expanded="false">
      <span class="q-n">${i + 1}</span>
      <div class="q-body">
        <p class="q-en">${text(q.en)}${speakBtn(q.en, 'say say-quiet')}</p>
        <p class="q-zh">${text(q.zh)}</p>
        <div class="q-follow">
          <p class="q-follow-label"><span class="en">Then ask</span><span class="zh-fixed">接著問</span></p>
          <p class="q-follow-en">${text(q.follow.en)}${speakBtn(q.follow.en, 'say say-quiet')}</p>
          <p class="q-follow-zh">${text(q.follow.zh)}</p>
        </div>
      </div>
    </li>`).join('');

  return `
    <section class="item" id="${t.id}" aria-labelledby="h-${t.id}">
      ${head('·', t.en, t.zh, t.id)}
      <div class="lead">${pair(t.lead.en, t.lead.zh)}</div>
      ${hint(t.hint)}
      <ol class="qs">${items}</ol>
    </section>`;
}

// ----------------------------------------------------------------- recall

/* Every word on the page, Chinese first and English hidden. Built from the
   groups rather than listed again, so the drill cannot drift out of step with
   the lesson above it. */
function buildRecall() {
  const r = LESSON.recall;

  const rows = LESSON.groups.flatMap((g) => g.words.map((w) => `
    <tr class="rrow" tabindex="0" role="button" aria-expanded="false">
      <td class="td-zh">${text(w.zh)}</td>
      <td class="td-en"><span class="hidden-en">${text(w.w)}</span>${speakBtn(w.w, 'say say-quiet')}</td>
      <td class="td-from"><a href="#${g.id}">${g.n}</a></td>
    </tr>`)).join('');

  return `
    <section class="item recall" id="${r.id}" aria-labelledby="h-${r.id}">
      ${head('·', r.en, r.zh, r.id)}
      <div class="lead">${pair(r.lead.en, r.lead.zh)}</div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th><span class="en">${text(r.headZh.en)}</span><span class="zh">${text(r.headZh.zh)}</span></th>
              <th><span class="en">${text(r.headEn.en)}</span><span class="zh">${text(r.headEn.zh)}</span></th>
              <th><span class="en">${text(r.headFrom.en)}</span><span class="zh">${text(r.headFrom.zh)}</span></th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>`;
}

// ------------------------------------------------------------------ cover

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

// -------------------------------------------------------------------- nav

/* The order of the page, and the only place it is written down. */
const PARTS = [
  ...LESSON.groups.map((g) => ({ id: g.id, n: g.n, en: g.en, zh: g.zh })),
  ...['phrases', 'expressions', 'natural', 'make', 'talk', 'recall']
    .map((k) => ({ id: LESSON[k].id, n: '·', en: LESSON[k].en, zh: LESSON[k].zh })),
];

function buildNav() {
  return `
    <nav class="toc" aria-label="Parts of the lesson">
      <p class="toc-head">Parts 段落</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="en">Start</span><span class="zh">開始</span></span></a></li>
        ${PARTS.map((p) => `
          <li><a href="#${p.id}" data-target="${p.id}"><span class="n">${text(p.n)}</span>
            <span class="t"><span class="en">${text(p.en)}</span>
            <span class="zh">${text(p.zh)}</span></span></a></li>`).join('')}
      </ul>
    </nav>`;
}

// ------------------------------------------------------------------ build

document.title = `${LESSON.title} · ${LESSON.titleZh}`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
LESSON.groups.forEach((g) => doc.appendChild(el(buildGroup(g))));
doc.appendChild(el(buildPhrases()));
doc.appendChild(el(buildExpressions()));
doc.appendChild(el(buildNatural()));
doc.appendChild(el(buildMake()));
doc.appendChild(el(buildTalk()));
doc.appendChild(el(buildRecall()));

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`ct.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`ct.${k}`, v); } catch { /* private mode */ } },
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

function toggleOpen(node) {
  const open = node.classList.toggle('open');
  if (node.hasAttribute('aria-expanded')) node.setAttribute('aria-expanded', String(open));
  return open;
}

/* One click handler for the whole document: every interactive part of the page
   is a button, a card, a frame, a question or a table row. */
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
    // the block wrapped it in — a .pair, a heading, a word card.
    let host = chip.parentElement;
    while (host && !host.querySelector('.zh')) host = host.parentElement;
    if (host) host.classList.toggle('open');
    return;
  }

  // ---- "Say it more naturally"
  const step = t.closest('.step-btn');
  if (step) {
    const on = step.closest('[data-upg]').classList.toggle('shown');
    step.classList.toggle('on', on);
    step.setAttribute('aria-pressed', String(on));
    return;
  }

  // ---- a collocation card, a sentence frame, a question, a recall row
  const hit = t.closest('.card, .frame, .q, .rrow');
  if (hit) { toggleOpen(hit); return; }

  // ---- any other paired line
  const line = t.closest('.pair[data-zh], .word[data-zh]');
  if (line && !t.closest('button')) { line.classList.toggle('open'); return; }
});

// The cards, frames, questions and rows are focusable, so keep them operable
// from the keyboard as well.
doc.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const hit = e.target.closest('.card, .frame, .q, .rrow');
  if (hit) { e.preventDefault(); hit.click(); }
});

// ---------------------------------------------------------------- speech

/* Voices are ranked rather than wished for, because the fallback matters as
   much as the favourite: an en-US list is alphabetical and starts Albert, Ava,
   Bad News, Bahh, Bells… so "take the first American voice" is one missing
   download away from teaching this lesson in Albert. Read as tiers, best
   first. This learner is ten to twelve, so a clear adult American voice is
   wanted rather than the young one the seven-year-olds' pages ask for. */
const VOICE_TIERS = [
  /* Neural. A different class of clarity to everything below. */
  [/\bnatural\b/i, /\bsiri\b/i, /^Google US English/i],
  /* Apple's recorded-speaker voices and Windows' equivalents. Samantha is the
     one almost every Mac already has. */
  [/^(Samantha|Ava|Allison|Susan|Zoe|Nicky|Joelle|Evan|Alex|Victoria|Flo|Shelley)\b/i,
   /^Microsoft (Zira|Aria|Jenny|Michelle|Guy)\b/i],
  /* Character and regional voices: intelligible, but stylised or not
     American. Usable, never the automatic choice. */
  [/^(Eddy|Reed|Rocko|Sandy|Grandma|Grandpa|Karen|Moira|Tessa|Fiona|Daniel|Rishi|Serena)\b/i],
];

/* Jokes, singing and robots. Still selectable — a child who wants to hear a
   sentence in Zarvox should get to — but never picked automatically. */
const NOVELTY = /^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Deranged|Good News|Hysterical|Jester|Junior|Kathy|Organ|Ralph|Superstar|Trinoids|Whisper|Wobble|Zarvox|Bruce|Agnes|Princess|Fred)\b/i;

/* macOS localises a voice name and does not agree with itself about how:
   "Flo (英文（美國）)" uses a Latin paren after a space, "Ava（增強音質）" a
   fullwidth one with none. Matching the raw name misses the enhanced voices
   entirely — often the best one installed on the machine. */
const baseName = (v) => String(v.name).split(/\s*[(（]/)[0].trim();

/* An "enhanced" or "premium" download is the same speaker at a much higher
   sample rate. Free quality when it is already on the machine. */
const isEnhanced = (v) => /(enhanced|premium|增強|高級)/i.test(v.name);

const englishVoices = () =>
  (window.speechSynthesis?.getVoices() || []).filter((v) => /^en(-|_|$)/i.test(v.lang));

/* Lower is better. American outranks the tiers deliberately: several of these
   voices ship in a British and an American cut under the same name, and this
   lesson's model sentences are American. Then tier, then an enhanced download
   ahead of the standard one. */
function voiceScore(v) {
  const name = baseName(v);
  let tier = VOICE_TIERS.length;
  for (let i = 0; i < VOICE_TIERS.length; i++) {
    if (VOICE_TIERS[i].some((re) => re.test(name))) { tier = i; break; }
  }
  return (NOVELTY.test(name) ? 1000 : 0)
    + (/en[-_]US/i.test(v.lang) ? 0 : 100)
    + tier * 10
    + (isEnhanced(v) ? 0 : 2);
}

/* The ranked list, best first — also the order the picker shows. */
const rankedVoices = () => englishVoices().slice().sort((a, b) => voiceScore(a) - voiceScore(b));

let voice = null;

function loadVoices() {
  const all = rankedVoices();
  if (!all.length) return;

  const saved = store.get('voice', '');
  voice = all.find((v) => v.name === saved) || all[0];

  $('#voicePick').innerHTML = all.map((v) =>
    `<option value="${text(v.name)}"${v === voice ? ' selected' : ''}>${text(v.name)} · ${text(v.lang)}</option>`
  ).join('');
}

if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.addEventListener('voiceschanged', loadVoices);
}

function speak(sentence) {
  if (!('speechSynthesis' in window) || !sentence) return;
  speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(String(sentence));
  if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = 'en-US'; }
  u.rate = Number($('#rate').value);
  /* Flat pitch. Raising it thins the formants, and a raised voice read all
     lesson is wearing rather than friendly. */
  u.pitch = 1;

  /* Chrome drops an utterance queued in the same tick as cancel(), which shows
     up as a tap that makes no sound at all. Let the cancel land first. */
  setTimeout(() => speechSynthesis.speak(u), 70);
}

$('#voicePick').addEventListener('change', (e) => {
  voice = rankedVoices().find((v) => v.name === e.target.value) || voice;
  store.set('voice', e.target.value);
  speak('I feel more confident when I get better at gymnastics.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('Can you explain it again?');
});
$('#rate').value = store.get('rate', '0.9');

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

/* Open everything at once — for going back over the lesson together, or for
   picking it up in the middle. */
const OPENABLE = '.pair[data-zh], .word[data-zh], .card, .frame, .q, .rrow, .item-head, h1';

$('#showAll').addEventListener('click', () => {
  $$(OPENABLE).forEach((n) => {
    n.classList.add('open');
    if (n.hasAttribute('aria-expanded')) n.setAttribute('aria-expanded', 'true');
  });
  $$('[data-upg]').forEach((u) => u.classList.add('shown'));
  $$('.step-btn').forEach((b) => { b.classList.add('on'); b.setAttribute('aria-pressed', 'true'); });
  setPanel(false);
});

$('#closeAll').addEventListener('click', () => {
  $$(OPENABLE).forEach((n) => {
    n.classList.remove('open');
    if (n.hasAttribute('aria-expanded')) n.setAttribute('aria-expanded', 'false');
  });
  $$('[data-upg]').forEach((u) => u.classList.remove('shown'));
  $$('.step-btn').forEach((b) => { b.classList.remove('on'); b.setAttribute('aria-pressed', 'false'); });
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
