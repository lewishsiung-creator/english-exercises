/* Meeting Prep — a password-protected subpage of /family-law/.

   One student's preparation for one real meeting: a visit from a legal
   publisher's business-development manager. The words of the page are NOT in
   this repo. They are encrypted in sealed.js (see tools/seal.mjs) and this
   renderer opens them in the browser once the password is given; the
   plaintext source lives under private/, which git ignores.

   What is worth knowing before editing:

   1. **The lock.** PBKDF2 → AES-GCM, both from WebCrypto, which only exists
      on https or localhost. 「記住這台裝置」 stores the derived key (never the
      password) under `flm.key`; ⚙ → 這台裝置上鎖 forgets it. A re-seal keeps
      the salt, so a remembered device survives content edits.

   2. **Two modes, as on the page above.** 自學 shows the Chinese; 教學 puts it
      behind 中 chips and is only on a device opened once with `#teach`.

   3. **Mine and theirs.** Every English line is either the student's own
      (`who: 'Y'`, the default in a `lines` block and every answer) or the
      visitor's (`who: 'V'`). The visitor speaks in a second voice, and the
      bar's Cover button hides the student's lines so they can be said first
      and then tapped open — in every block, not only the role-play.

   4. **Slots.** `[[…]]` in a line marks a fact the student must replace with
      the firm's own (a number, a name). It is drawn highlighted and read
      aloud without the brackets.

   Block types (content `sections[].blocks[]`, by `t`):
     notes     coaching in Chinese: {h, d} pairs. Always shown — it is advice,
               not English practice
     table     a two-column reference table, `head` and `rows`. Always shown
     flow      the meeting's running order: {min, en, zh, d}
     lines     things to say, with an optional heading `h: {en, zh}`
     qa        a question the visitor may ask, then answers to choose from
     dialogue  a role-play read by Play all, the visitor and the student in
               their two voices; with Cover on it stops for the student
     words     key terms: {w, p, zh, ex, zhEx}
     email     a model email: `subject`, then `lines`
     pending   a slot for material that has not arrived yet
     check     the checklist. Its ticks are the one thing the page saves */

'use strict';

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

const text = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Escaped text with its [[slots]] drawn; and the same line as it is spoken.
const rich = (s) => text(s).replace(/\[\[(.+?)\]\]/g, '<mark class="slot">$1</mark>');
const spoken = (s) => String(s).replace(/\[\[(.+?)\]\]/g, '$1');

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// ------------------------------------------------------------------- store

const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem('flm.' + k);
      if (v == null) return d;
      try { return JSON.parse(v); } catch (e) { return v; }
    } catch (e) { return d; }
  },
  set(k, v) { try { localStorage.setItem('flm.' + k, JSON.stringify(v)); } catch (e) { /* private mode */ } },
  del(k) { try { localStorage.removeItem('flm.' + k); } catch (e) { /* private mode */ } },
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

// ------------------------------------------------------------------- the lock

const b64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const unb64 = (u8) => btoa(String.fromCharCode(...u8));

async function keyFrom(pass) {
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', hash: 'SHA-256', salt: b64(SEALED.salt), iterations: SEALED.iter },
    base, { name: 'AES-GCM', length: 256 }, true, ['decrypt']);
}

async function open(key) {
  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(SEALED.iv) }, key, b64(SEALED.data));
  return JSON.parse(new TextDecoder().decode(plain));
}

async function tryRemembered() {
  const raw = store.get('key', '');
  if (!raw) return null;
  try {
    const key = await crypto.subtle.importKey('raw', b64(raw), 'AES-GCM', true, ['decrypt']);
    return await open(key);
  } catch (e) {
    store.del('key');      // the password changed since; ask again
    return null;
  }
}

$('#lockForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const msg = $('#lockMsg');
  const btn = $('#unlockBtn');
  if (!window.crypto || !crypto.subtle) {
    msg.innerHTML = 'This browser cannot open the page. <span>這個瀏覽器無法開啟此頁，請換 Safari 或 Chrome。</span>';
    return;
  }
  btn.disabled = true;
  msg.textContent = '…';
  try {
    const key = await keyFrom($('#pw').value.trim());
    const C = await open(key);
    if ($('#remember').checked) store.set('key', unb64(new Uint8Array(await crypto.subtle.exportKey('raw', key))));
    start(C);
  } catch (err) {
    msg.innerHTML = 'That password did not open it. <span>密碼不對，請再試一次。</span>';
    btn.disabled = false;
    $('#pw').select();
  }
});

// ------------------------------------------------------------------- speech

let voices = [];
let voice = null;
let visitor = null;
const canSpeak = 'speechSynthesis' in window;

const FEMALE = /Samantha|Karen|Moira|Tessa|Serena|Kate|Martha|Allison|Ava|Susan|Victoria|Zoe|Nicky|Catherine|Hazel|Libby|Sonia|Natasha|Aria|Jenny|Zira|Yan|Female|Google UK English Female/i;
const NOVELTY = /Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Junior|Kathy|Ralph|Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley/i;
const langOf = (v) => v.lang.replace('_', '-');
const baseName = (v) => v.name.replace(/\s*[(（].*$/, '').trim().toLowerCase();

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
  pickVisitor();
}

/* The visitor is from Hong Kong: a Hong Kong English voice if the device has
   one (Edge and some Androids do), else a British one, else any woman's voice
   that is not the student's own. */
function pickVisitor() {
  const others = voices.filter((v) => !NOVELTY.test(v.name) && (!voice || baseName(v) !== baseName(voice)));
  const tries = [
    (v) => langOf(v) === 'en-HK',
    (v) => langOf(v) === 'en-GB' && FEMALE.test(v.name),
    (v) => langOf(v) === 'en-GB',
    (v) => FEMALE.test(v.name),
    () => true,
  ];
  visitor = null;
  for (const t of tries) { visitor = others.find(t); if (visitor) break; }
  visitor = visitor || voice;
}

loadVoices();
if (canSpeak) speechSynthesis.onvoiceschanged = loadVoices;

function speak(sentence, v, onend) {
  if (!canSpeak) { if (onend) onend(); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(spoken(sentence));
  const use = v || voice;
  if (use) { u.voice = use; u.lang = use.lang; } else { u.lang = 'en-US'; }
  u.rate = Number($('#rate').value);
  if (onend) { u.onend = onend; u.onerror = onend; }
  setTimeout(() => speechSynthesis.speak(u), 0);   // Safari drops one queued with cancel()
}

const lineVoice = (li) => (li.classList.contains('who-V') ? visitor : voice);

// ------------------------------------------------------------------- build

const WHO = { V: ['Visitor', '來訪者'], Y: ['You', '你'] };

const sayBtn = () => (canSpeak
  ? '<button class="say" data-say aria-label="播放" title="播放">▶&#xFE0E;</button>' : '');

/* One English line. `who` decides the voice and whether Cover hides it;
   `label` shows the speaker column (dialogues and questions only). */
function lineHtml(l, who, label) {
  const w = l.who || who || 'Y';
  const tag = label ? `<span class="who">${WHO[w][0]}<em>${WHO[w][1]}</em></span>` : '';
  return `<li class="line who-${w}${l.head ? ' head' : ''}" tabindex="0">${tag}
    <div class="line-body"><p class="line-en">${rich(l.en)}</p>${l.zh ? `<p class="zh">${rich(l.zh)}</p>` : ''}
    ${l.tip ? `<p class="tip">${rich(l.tip)}</p>` : ''}</div>${l.head ? '' : sayBtn()}</li>`;
}

const PLAY_LABEL = {
  idle: '▶&#xFE0E; Play all <em>全部播放</em>',
  playing: '■ Stop <em>停止</em>',
  waiting: '▶&#xFE0E; Continue <em>換你說完了，繼續</em>',
};

const BLOCK = {
  notes: (b) => `
    <ul class="notes">${b.items.map((n) => `
      <li><p class="note-h">${rich(n.h)}</p>${n.d ? `<p class="note-d">${rich(n.d)}</p>` : ''}</li>`).join('')}
    </ul>`,

  table: (b) => `
    <div class="table-wrap"><table class="ref">
      ${b.head ? `<thead><tr>${b.head.map((h) => `<th>${rich(h)}</th>`).join('')}</tr></thead>` : ''}
      <tbody>${b.rows.map((r) => `<tr><th scope="row">${rich(r[0])}</th><td>${rich(r[1])}</td></tr>`).join('')}</tbody>
    </table></div>`,

  flow: (b) => `
    <ol class="flow">${b.rows.map((r) => `
      <li><span class="flow-min">${text(r.min)}<em>min</em></span>
        <div><p class="flow-en">${rich(r.en)}<span>${rich(r.zh)}</span></p>
        ${r.d ? `<p class="flow-d">${rich(r.d)}</p>` : ''}</div></li>`).join('')}
    </ol>`,

  lines: (b) => `
    ${b.h ? `<p class="aside-h">${rich(b.h.en)} <span>${rich(b.h.zh)}</span></p>` : ''}
    <ul class="lines">${b.items.map((l) => lineHtml(l, b.who || 'Y', false)).join('')}</ul>`,

  qa: (b) => `
    <div class="qas">${b.items.map((q, i) => `
      <div class="qa">
        <p class="qa-n">Q${i + 1}</p>
        <ul class="lines">
          ${lineHtml({ ...q.q, who: 'V' }, 'V', true)}
          ${q.a.map((a) => lineHtml({ ...a, who: 'Y' }, 'Y', true)).join('')}
        </ul>
        ${q.tip ? `<p class="qa-tip">${rich(q.tip)}</p>` : ''}
      </div>`).join('')}
    </div>`,

  dialogue: (b) => `
    <div class="piece" id="p-${b.id}">
      ${b.note ? `<p class="piece-note">${rich(b.note.en)}<span class="zh">${rich(b.note.zh)}</span></p>` : ''}
      ${canSpeak ? `<button class="btn playall" data-play="${b.id}" aria-pressed="false">${PLAY_LABEL.idle}</button>` : ''}
      <ol class="lines">${b.lines.map((l) => lineHtml(l, l.who, true)).join('')}</ol>
    </div>`,

  words: (b) => `
    <ul class="vocab">${b.items.map((w) => `
      <li class="line who-W" tabindex="0"><div class="line-body">
        <p class="line-en"><b>${text(w.w)}</b> <span class="pos">${text(w.p)}</span></p>
        <p class="zh zh-w">${text(w.zh)}</p>
        <p class="ex">${rich(w.ex)}</p>
        <p class="zh">${rich(w.zhEx)}</p></div>${sayBtn()}</li>`).join('')}
    </ul>`,

  email: (b) => `
    <div class="email">
      <p class="email-subj"><span>Subject</span> ${rich(b.subject)}</p>
      <ul class="lines">${b.lines.map((l) => lineHtml(l, 'Y', false)).join('')}</ul>
    </div>`,

  pending: (b) => `
    <div class="pending"><p>${rich(b.en)}</p><p class="pending-zh">${rich(b.zh)}</p></div>`,

  check: (b) => {
    const done = store.get('check', {});
    return `
    <ul class="check">${b.items.map((it, i) => {
      const id = `${b.id}-${i}`;
      return `<li><label><input type="checkbox" data-check="${id}"${done[id] ? ' checked' : ''}>
        <span>${rich(it)}</span></label></li>`;
    }).join('')}
    </ul>`;
  },
};

function buildCover(C) {
  const c = C.cover;
  return `
  <header class="cover">
    <p class="kicker">${rich(c.kicker)}</p>
    <h1>${rich(c.h1.en)}<span class="zh">${rich(c.h1.zh)}</span></h1>
    <p class="intro">${rich(c.lead.en)}<span class="zh">${rich(c.lead.zh)}</span></p>
    ${BLOCK.table({ rows: c.facts })}
    ${c.goals ? `<div class="goals"><p class="aside-h">${rich(c.goals.h)}</p>
      <ol>${c.goals.items.map((g) => `<li>${rich(g)}</li>`).join('')}</ol></div>` : ''}
    <p class="intro-how" id="introHow"></p>
  </header>`;
}

const num = (n) => String(n + 1).padStart(2, '0');

function buildSection(s, i) {
  return `
  <section class="sec" id="${s.id}">
    <h2 class="sec-head"><span class="num">${num(i)}</span><span>${rich(s.en)}<span class="zh">${rich(s.zh)}</span></span></h2>
    ${s.note ? `<p class="sec-note">${rich(s.note.en)}<span class="zh">${rich(s.note.zh)}</span></p>` : ''}
    ${s.blocks.map((b) => `<div class="block block-${b.t}">${BLOCK[b.t](b)}</div>`).join('')}
  </section>`;
}

function buildNav(C) {
  return `
  <nav class="toc" aria-label="Contents 目錄">
    <p class="toc-head">Contents 目錄</p>
    <ul>${C.sections.map((s, i) => `
      <li><a href="#${s.id}" data-sec="${s.id}"><span class="n">${num(i)}</span>
        <span class="t"><span class="en">${text(s.en)}</span><span class="zh">${text(s.zh)}</span></span></a></li>`).join('')}
    </ul>
  </nav>`;
}

// ------------------------------------------------------------------- Play all
/* As on the page above: each line in its speaker's voice, the line being read
   lit and kept in view; with Cover on, it stops at each of the student's own
   lines until they have said it and tapped Continue. A run number makes a
   callback from a stopped run do nothing — cancel() fires onend too. */

const P = { id: null, i: 0, run: 0, waiting: false };
const playLines = (id) => $$(':scope > ol.lines > .line', $('#p-' + id));

function playLabel(id, state) {
  const b = $(`[data-play="${id}"]`);
  if (!b) return;
  b.innerHTML = PLAY_LABEL[state];
  b.setAttribute('aria-pressed', String(state !== 'idle'));
  b.classList.toggle('waiting', state === 'waiting');
}

function stopPlay() {
  if (!P.id) return;
  P.run++;
  $$('.line.playing, .line.yourturn').forEach((l) => l.classList.remove('playing', 'yourturn'));
  playLabel(P.id, 'idle');
  P.id = null; P.waiting = false;
  if (canSpeak) speechSynthesis.cancel();
}

function keepInView(li) {
  const r = li.getBoundingClientRect();
  const top = $('.bar').getBoundingClientRect().bottom + 12;
  if (r.top < top || r.bottom > window.innerHeight - 12) window.scrollBy(0, r.top - top - 40);
}

function playStep() {
  const lines = playLines(P.id);
  $$('.line.playing').forEach((l) => l.classList.remove('playing'));
  if (P.i >= lines.length) { stopPlay(); return; }
  const li = lines[P.i];
  li.classList.add('playing');
  keepInView(li);
  if (document.body.classList.contains('cover-Y') && li.classList.contains('who-Y') && !li.classList.contains('shown')) {
    P.waiting = true;
    li.classList.add('yourturn');
    playLabel(P.id, 'waiting');
    return;
  }
  const run = P.run;
  speak($('.line-en', li).textContent, lineVoice(li), () => {
    if (run !== P.run) return;
    P.i++;
    setTimeout(() => { if (run === P.run) playStep(); }, 450);
  });
}

function yourTurnDone() {
  if (!P.waiting) return;
  const li = playLines(P.id)[P.i];
  li.classList.remove('yourturn');
  li.classList.add('shown');
  P.waiting = false;
  playLabel(P.id, 'playing');
  playStep();
}

function playButton(id) {
  if (P.id === id && P.waiting) { yourTurnDone(); return; }
  if (P.id === id) { stopPlay(); return; }
  stopPlay();
  P.id = id; P.i = 0;
  playLabel(id, 'playing');
  playStep();
}

// ------------------------------------------------------------------- chrome

const S = { mode: TEACHER ? store.get('mode', 'teach') : 'self' };

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  $('#zhToggle').setAttribute('aria-pressed', String(on));
}

function introHow() {
  const h = $('#introHow');
  if (!h) return;
  const [en, zh] = S.mode === 'teach'
    ? ['Tap a line, or its 中, for the Chinese. ▶ reads it aloud.', '點句子或「中」可看中文，按 ▶ 朗讀。']
    : ['The Chinese is on; switch it off with 中文 at the top to test yourself. Cover hides your own lines: say them first, then tap to check.',
       '中文目前顯示；想自我測驗時，按上方「中文」關掉。「遮台詞」會蓋住你要說的句子：先自己說，再點一下核對。'];
  h.innerHTML = `${en}<span class="zh">${zh}</span>`;
}

function setMode(m, remember) {
  S.mode = TEACHER ? m : 'self';
  document.body.classList.toggle('mode-teach', S.mode === 'teach');
  document.body.classList.toggle('mode-self', S.mode === 'self');
  if (remember) store.set('mode', S.mode);
  $$('#modeseg button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === S.mode)));
  setAllZh(S.mode === 'self' ? store.get('zhSelf', true) !== false : false);
  introHow();
}

function setCover(on) {
  document.body.classList.toggle('cover-Y', on);
  $('#coverBtn').setAttribute('aria-pressed', String(on));
  if (!on) $$('.line.shown').forEach((l) => l.classList.remove('shown'));
  if (!on && P.waiting) yourTurnDone();
}

const panel = $('#panel');
function setPanel(open) {
  panel.hidden = !open;
  $('#panelToggle').setAttribute('aria-expanded', String(open));
}

function setNav(open) {
  document.body.classList.toggle('nav-open', open);
  $('#navToggle').setAttribute('aria-expanded', String(open));
  $('.nav-scrim').hidden = !open;
}

// ------------------------------------------------------------------- start

function start(C) {
  document.title = `${C.title} — ${C.titleZh}`;
  document.body.classList.remove('locked');
  $('#lock').remove();

  const doc = $('#doc');
  doc.insertAdjacentHTML('beforeend', buildCover(C) + C.sections.map(buildSection).join(''));
  $('#nav').insertAdjacentHTML('beforeend', buildNav(C));

  ['#navToggle', '#coverBtn', '#zhToggle', '#panelToggle'].forEach((s) => { $(s).hidden = false; });
  $('#modeseg').hidden = !TEACHER;
  $('#teacherflag').hidden = !TEACHER;
  setMode(S.mode);

  doc.addEventListener('click', (e) => {
    const t = e.target;

    const say = t.closest('[data-say]');
    if (say) {
      e.stopPropagation();
      const li = say.closest('.line');
      stopPlay();
      say.classList.add('saying');
      const said = li.querySelector('.ex') ? li.querySelector('.ex').textContent : $('.line-en', li).textContent;
      speak(said, lineVoice(li), () => say.classList.remove('saying'));
      return;
    }

    const pb = t.closest('[data-play]');
    if (pb) { playButton(pb.dataset.play); return; }

    const line = t.closest('.line');
    if (line) {
      if (P.waiting && line.classList.contains('yourturn')) { yourTurnDone(); return; }
      // Covered: the first tap uncovers. Otherwise a tap opens the Chinese.
      if (document.body.classList.contains('cover-Y') && line.classList.contains('who-Y') && !line.classList.contains('shown')) {
        line.classList.add('shown');
      } else {
        line.classList.toggle('open');
      }
    }
  });

  doc.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('line')) {
      e.preventDefault();
      e.target.click();
    }
  });

  doc.addEventListener('change', (e) => {
    const c = e.target.closest('[data-check]');
    if (!c) return;
    const done = store.get('check', {});
    if (c.checked) done[c.dataset.check] = 1; else delete done[c.dataset.check];
    store.set('check', done);
  });

  $$('#modeseg button').forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode, true)));
  $('#zhToggle').addEventListener('click', () => {
    const on = !document.body.classList.contains('zh-all');
    setAllZh(on);
    if (S.mode === 'self') store.set('zhSelf', on);
  });
  $('#coverBtn').addEventListener('click', () => setCover(!document.body.classList.contains('cover-Y')));

  $('#panelToggle').addEventListener('click', () => setPanel(panel.hidden));
  $('#panelClose').addEventListener('click', () => setPanel(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { setPanel(false); setNav(false); } });

  $('#voicePick').addEventListener('change', (e) => {
    voice = voices.find((v) => v.name === e.target.value) || voice;
    store.set('voice', voice.name);
    pickVisitor();
    speak('Thank you for coming all the way to our office.', voice);
  });
  $('#rate').value = String(store.get('rate', '0.95'));
  $('#rate').addEventListener('change', (e) => store.set('rate', e.target.value));

  $('#unteach').addEventListener('click', () => {
    TEACHER = false;
    store.del('teacher'); store.del('mode');
    $('#modeseg').hidden = true; $('#teacherflag').hidden = true;
    setMode('self');
  });
  $('#clearChecks').addEventListener('click', () => {
    store.del('check');
    $$('[data-check]').forEach((c) => { c.checked = false; });
  });
  $('#lockNow').addEventListener('click', () => { store.del('key'); location.reload(); });

  $('#navToggle').addEventListener('click', () => setNav(!document.body.classList.contains('nav-open')));
  $('.nav-scrim').addEventListener('click', () => setNav(false));
  $('#nav').addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });

  // Contents: light the section being read, and name it on the ☰ button.
  const links = new Map($$('.toc a[data-sec]').map((a) => [a.dataset.sec, a]));
  const navLab = $('#navLab');
  const spy = new IntersectionObserver((rows) => {
    rows.filter((r) => r.isIntersecting).forEach((r) => {
      links.forEach((a) => { a.classList.remove('here'); a.removeAttribute('aria-current'); });
      const a = links.get(r.target.id);
      if (!a) return;
      a.classList.add('here');
      a.setAttribute('aria-current', 'true');
      navLab.textContent = $('.en', a).textContent;
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  $$('.sec').forEach((s) => spy.observe(s));

  if (location.hash && $(location.hash)) $(location.hash).scrollIntoView();
}

// Open at once on a device that remembered the key.
(async () => {
  if (!window.crypto || !crypto.subtle) return;
  const C = await tryRemembered();
  if (C) start(C);
  else $('#pw').focus();
})();

addEventListener('hashchange', () => {
  if (claimTeacher() && !document.body.classList.contains('locked')) {
    $('#modeseg').hidden = false;
    $('#teacherflag').hidden = false;
    setMode('teach', true);
  }
});
