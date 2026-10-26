/* Irregular Verbs — the page.

   A reference page rather than a lesson, so it does not use ../render.js:
   that file renders a chapter out of BOOK and CHAPTER, and this is neither.
   What it does share is the look (../style.css) and the house rules.

   The speech engine, the Chinese toggle and the teacher panel are written out
   again here rather than imported. They are about sixty lines, and the
   alternative was refactoring a renderer that two live courses depend on. If
   the appendices arrive and become a third page of this kind, that is the
   point at which the three should be pulled into a shared file — not before.

   House rules kept: English leads with the Chinese behind a tap, nothing is
   scored, nothing is saved between students, 🔊 on every form, and print
   gives a handout with the meanings open and the machinery gone.

   The one input field on any page in this course is the search box. It is
   navigation, not an answer — the rule those pages follow is that a learner
   never types an answer, not that no page may have a field.
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

function speakBtn(say, label) {
  return `<button class="say say-quiet" data-say="${text(say)}"
    title="Listen" aria-label="Listen to ${text(label)}">🔊</button>`;
}

// ---------------------------------------------------------------- rows

/* One verb. The meaning is covered by a drawn rule until the row is tapped,
   so the table doubles as a self-test in either direction — cover nothing and
   read the Chinese, or open it and check. */
function row(v) {
  const sayPast = v.sayPast || v.past;
  return `
    <li class="vrow" data-zh
        data-base="${text(v.base.toLowerCase())}"
        data-past="${text(v.past.toLowerCase())}"
        data-mean="${text(v.zh)}">
      <span class="vform vbase">${text(v.base)}${speakBtn(v.base, v.base)}</span>
      <span class="varrow" aria-hidden="true">→</span>
      <span class="vform vpast">${text(v.past)}${speakBtn(sayPast, v.past)}</span>
      <span class="vmean"><span class="zh">${text(v.zh)}</span></span>
    </li>`;
}

function groupBlock(g) {
  return `
    <section class="vgroup" id="g-${text(g.id)}" data-group="${text(g.id)}">
      <h2 class="vgroup-head">
        <span class="en">${text(g.en)}</span>
        <span class="zh">${text(g.zh)}</span>
        <span class="vgroup-n">${g.items.length}</span>
      </h2>
      <p class="vgroup-note">${text(g.note.en)}
        <span class="hint-zh">${text(g.note.zh)}</span></p>
      <ul class="vlist">${g.items.map(row).join('')}</ul>
    </section>`;
}

// A–Z is one flat list: when you are looking a verb up, the grouping is in
// the way rather than helping.
function azBlock() {
  const all = VERBS.groups.flatMap((g) => g.items)
    .sort((a, b) => a.base.localeCompare(b.base));
  return `
    <section class="vgroup" id="g-az" data-group="az">
      <h2 class="vgroup-head">
        <span class="en">All ${all.length}, A to Z</span>
        <span class="zh">全部 ${all.length} 個，依字母排序</span>
      </h2>
      <ul class="vlist">${all.map(row).join('')}</ul>
    </section>`;
}

function trapsBlock() {
  return `
    <section class="vtraps">
      <h2 class="label"><span class="en">Pairs that get mixed up</span>
        <span class="zh">容易混淆的組合</span></h2>
      <ul>
        ${VERBS.traps.map((t) => `
          <li>
            <div class="vtrap-pair">
              <span class="vtrap-a">${text(t.a.en)}<em>${text(t.a.zh)}</em></span>
              <span class="vtrap-b">${text(t.b.en)}<em>${text(t.b.zh)}</em></span>
            </div>
            <p class="vtrap-note">${text(t.note.en)}
              <span class="hint-zh">${text(t.note.zh)}</span></p>
          </li>`).join('')}
      </ul>
    </section>`;
}

// ---------------------------------------------------------------- build

document.title = `${VERBS.title} · ${VERBS.titleZh}`;

const page = `
  <div>
    <header class="cover" id="top">
      <a class="up" href="../">← Contents 全書目錄</a>
      <p class="kicker">${text(VERBS.kicker)}</p>
      <h1><span class="en">${text(VERBS.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(VERBS.titleZh)}</span></h1>
      <div class="pair cover-intro" data-zh>
        <p class="en">${text(VERBS.intro.en)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(VERBS.intro.zh)}</p>
      </div>
    </header>

    <div class="vtools">
      <label class="vfind">
        <span class="vfind-icon" aria-hidden="true">⌕</span>
        <input id="find" type="search" autocomplete="off"
          placeholder="Find a verb 找動詞" aria-label="Find a verb 找動詞">
      </label>
      <div class="seg" role="group" aria-label="How to sort 排列方式">
        <button class="seg-btn on" data-view="pattern" aria-pressed="true">
          By pattern <em>依規則</em></button>
        <button class="seg-btn" data-view="az" aria-pressed="false">
          A–Z <em>字母</em></button>
      </div>
      <p class="vcount" id="count" aria-live="polite"></p>
    </div>

    <div id="list">
      <div class="view view-pattern">${VERBS.groups.map(groupBlock).join('')}</div>
      <div class="view view-az" hidden>${azBlock()}</div>
      <p class="vnone" id="none" hidden>No verb matches that.
        <span class="hint-zh">沒有符合的動詞。</span></p>
    </div>

    ${trapsBlock()}

    <p class="source">${text(VERBS.source.en)}
      <span class="zh">${text(VERBS.source.zh)}</span></p>
  </div>`;

$('#doc').appendChild(el(page));

// ---------------------------------------------------------------- view

let view = 'pattern';

function setView(next) {
  view = next;
  $('.view-pattern').hidden = next !== 'pattern';
  $('.view-az').hidden = next !== 'az';
  $$('.seg-btn').forEach((b) => {
    const on = b.dataset.view === next;
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', String(on));
  });
  filter($('#find').value);
}

$$('.seg-btn').forEach((b) => b.addEventListener('click', () => setView(b.dataset.view)));

// ---------------------------------------------------------------- search

/* Matches the present form, the past form or the Chinese, so a teacher can
   type what the student just said in either language. */
function filter(qRaw) {
  const q = qRaw.trim().toLowerCase();
  const scope = view === 'pattern' ? $('.view-pattern') : $('.view-az');
  let shown = 0;

  $$('.vrow', scope).forEach((r) => {
    const hit = !q
      || r.dataset.base.includes(q)
      || r.dataset.past.includes(q)
      || r.dataset.mean.includes(qRaw.trim());
    r.hidden = !hit;
    if (hit) shown += 1;
  });

  // A group with nothing left in it is noise, so it goes too.
  $$('.vgroup', scope).forEach((g) => {
    g.hidden = !$$('.vrow:not([hidden])', g).length;
  });

  $('#none').hidden = shown > 0;
  $('#count').textContent = q
    ? `${shown} of ${VERBS.count} verbs 共 ${VERBS.count} 個`
    : `${VERBS.count} verbs 共 ${VERBS.count} 個`;
}

$('#find').addEventListener('input', (e) => filter(e.target.value));

// Esc inside the box clears it rather than closing anything.
$('#find').addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && e.target.value) {
    e.stopPropagation();
    e.target.value = '';
    filter('');
  }
});

filter('');

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`beg.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`beg.${k}`, v); } catch { /* private mode */ } },
};

const zhToggle = $('#zhToggle');

// Shared with the chapter pages under the same key: it is a device setting,
// and a teacher who turns Chinese on should not turn it on again here.
function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
  $('#zhAll').checked = on;
  store.set('zh', on ? '1' : '0');
}

setAllZh(store.get('zh', '0') === '1');
zhToggle.addEventListener('click', () => setAllZh(!document.body.classList.contains('zh-all')));

$('#doc').addEventListener('click', (e) => {
  const say = e.target.closest('.say');
  if (say) { e.stopPropagation(); stopRun(); speak(say.dataset.say); return; }

  const chip = e.target.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    let host = chip.parentElement;
    while (host && !host.querySelector('.zh')) host = host.parentElement;
    if (host) host.classList.toggle('open');
    return;
  }

  const line = e.target.closest('[data-zh]');
  if (line && !e.target.closest('button') && !e.target.closest('a')) line.classList.toggle('open');
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

  $('#voicePick').innerHTML = voices.map((v) =>
    `<option value="${text(v.name)}"${v === voice ? ' selected' : ''}>${text(v.name)} · ${text(v.lang)}</option>`
  ).join('');
}

loadVoices();
speechSynthesis.onvoiceschanged = loadVoices;

function utter(sentence) {
  const u = new SpeechSynthesisUtterance(sentence);
  if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = 'en-US'; }
  u.rate = Number($('#rate').value);
  return u;
}

function speak(sentence) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  speechSynthesis.speak(utter(sentence));
}

$('#voicePick').addEventListener('change', (e) => {
  voice = voices.find((v) => v.name === e.target.value) || voice;
  store.set('voice', e.target.value);
  speak('buy, bought. teach, taught.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('think, thought. bring, brought.');
});
$('#rate').value = store.get('rate', '0.9');

/* Read a whole group aloud, present then past. Chaining on each utterance's
   end event rather than on a timer, because a slow voice would otherwise be
   talked over by the next pair. A watchdog keeps the run moving if the
   browser never reports that an utterance finished — a machine with no audio
   output would otherwise strand it on the first verb. */
let run = null;

function stopRun() {
  if (!run) return;
  clearTimeout(run.guard);
  run = null;
  speechSynthesis.cancel();
  $('#sayAll').textContent = 'Read the group aloud';
  $$('.vrow.saying').forEach((r) => r.classList.remove('saying'));
}

function readAloud(rows) {
  stopRun();
  if (!rows.length) return;

  run = { rows, i: 0, guard: null };
  $('#sayAll').textContent = 'Stop reading';

  const step = () => {
    if (!run) return;
    $$('.vrow.saying').forEach((r) => r.classList.remove('saying'));

    if (run.i >= run.rows.length) { stopRun(); return; }

    const r = run.rows[run.i];
    run.i += 1;
    r.classList.add('saying');
    r.scrollIntoView({ block: 'center' });

    const past = $('.vpast .say', r).dataset.say;
    const u = utter(`${r.dataset.base}. ${past}.`);
    u.onend = () => { clearTimeout(run && run.guard); setTimeout(step, 250); };
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
    run.guard = setTimeout(step, 4000);
  };

  step();
}

$('#sayAll').addEventListener('click', () => {
  if (run) { stopRun(); return; }
  const scope = view === 'pattern' ? $('.view-pattern') : $('.view-az');
  // The group nearest the top of the window is the one being looked at.
  const groups = $$('.vgroup:not([hidden])', scope);
  const here = groups.find((g) => g.getBoundingClientRect().bottom > 120) || groups[0];
  if (here) readAloud($$('.vrow:not([hidden])', here));
  setPanel(false);
});

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

/* Nothing is saved, so the reset is not a wipe — it puts the screen back to
   how a new student should find it. */
$('#reset').addEventListener('click', () => {
  stopRun();
  $('#find').value = '';
  setView('pattern');
  $$('.open').forEach((o) => o.classList.remove('open'));
  setPanel(false);
  window.scrollTo({ top: 0 });
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  stopRun();
  setPanel(false);
});

// Print opens every meaning, so the handout is a complete table.
window.addEventListener('beforeprint', () => {
  $$('.vrow').forEach((r) => r.classList.add('open'));
});
