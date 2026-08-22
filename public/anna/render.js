/* Renders NOTEBOOK (content.js) and wires up the activities.

   This is the same teacher-led machinery as the other adult pages — English
   leads, Chinese waits behind a 中 chip, nothing is scored and nothing is
   saved — with one difference that comes from the page being a notebook rather
   than a lesson:

   - Sessions fold. The newest is open and the earlier ones are closed, because
     after a term this page is longer than any lesson ever is. A session opens
     by tapping its heading, by following a contents link, or by arriving on its
     anchor (/anna/#s3). The teacher panel opens the lot.
   - Which sessions are open is NOT remembered between loads. A reload is a
     clean start, the same as every other page here: the newest lesson, open.
   - Sessions here are UNDATED, at Lewis's request, so the array's order is the
     only record of sequence. `dateEn`/`dateZh` are optional: present, they draw
     the date line and the contents-list subtitle for that entry; absent, both
     are omitted rather than left as empty elements taking up space.

   The only state kept in localStorage is device settings — the chosen voice,
   the speed, and whether Chinese starts visible.
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

/* Lists that hold sentence starters, sentence frames or tick-list phrases take
   `{ en, zh }`. Accept a bare string too, so a session written in a hurry still
   renders. */
function bilingual(x) {
  return typeof x === 'string' ? { en: x, zh: '' } : x;
}

/* Fisher–Yates, used only to scramble the right-hand column of a matching
   exercise so the pairs are not sitting on the same row. */
function shuffled(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------------------------------------------------------------- blocks

let uid = 0;

/* The heading every activity block shares: English, a 中 chip, the Chinese. */
function label(b) {
  return `
    <h4 class="label"><span class="en">${text(b.en)}</span>
      <button class="zh-chip" title="顯示中文">中</button>
      <span class="zh">${text(b.zh)}</span></h4>`;
}

function hint(b) {
  if (!b.hintEn) return '';
  return `<p class="hint">${text(b.hintEn)}<span class="hint-zh">${text(b.hintZh || '')}</span></p>`;
}

const BLOCKS = {
  /* A divider INSIDE one session. Anna's first source arrives already cut into
     an article plus four labelled sections — A. Terms, B. Collocations, and so
     on — and a session built from that kind of handout needs a heading one
     level below the session's own, so Part B does not read as a new lesson. A
     session built from a conversation should not use it. Signage: both
     languages show at once and there is no 中 chip to tap. */
  part: (b) => `
    <div class="part-head">
      <p class="part-n" aria-hidden="true">${text(b.n || '')}</p>
      <h3><span class="en">${text(b.en)}</span><span class="zh">${text(b.zh)}</span></h3>
    </div>`,

  lead: (b) => `<div class="lead">${pair(b.en, b.zh)}</div>`,

  // A pointer to another page in this site. Signage, so it is bilingual at all
  // times and never hides behind a chip.
  link: (b) => `
    <a class="cross" href="${text(b.href)}">
      <span class="cross-go" aria-hidden="true">→</span>
      <span class="cross-t">
        <span class="cross-en">${text(b.en)}</span>
        <span class="cross-zh">${text(b.zh)}</span>
        <span class="cross-note">${text(b.noteEn)}</span>
        <span class="cross-note cross-note-zh">${text(b.noteZh)}</span>
      </span>
    </a>`,

  quote: (b) => `
    <figure class="quote">
      <blockquote>
        <p class="en">${text(b.en)}${speakBtn(b.en, 'say say-quiet')}
          <button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.zh)}</p>
      </blockquote>
      <figcaption>— ${text(b.by)}</figcaption>
    </figure>`,

  summary: (b) => `
    <div class="summary pair" data-zh>
      <p class="en">${text(b.en)}${speakBtn(b.en, 'say say-quiet')}
        <button class="zh-chip" title="顯示中文">中</button></p>
      <p class="zh">${text(b.zh)}</p>
    </div>`,

  /* The body needs its own 中 chip, not just the heading's. Tapping the
     paragraph has always opened it — `.pair[data-zh]` handles that — but with
     no chip on the passage there was nothing to say a translation existed, and
     an invisible affordance is the same as an absent one. */
  note: (b) => `
    <aside class="note">
      <h4><span class="en">${text(b.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(b.zh)}</span></h4>
      <div class="pair" data-zh>
        <p class="en">${text(b.bodyEn)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.bodyZh)}</p>
      </div>
    </aside>`,

  /* The same message said two ways — how it landed, and how it could have
     landed. Both halves are good English and both are spoken aloud: unlike
     `fix`, neither side is a mistake, and hearing the blunt version is half the
     point. The two sit side by side rather than stacked, because the whole
     teaching move is the comparison.

     The two column tags default to "As it landed" / "As it could land", which
     is right for a message. Set `coldEn`/`coldZh` and `warmEn`/`warmZh` when the
     pair is something else — an instinct against a reframe, a habit against its
     replacement — so the block can carry any two-column comparison. */
  contrast: (b) => `
    <div class="contrast">
      ${label(b)}
      ${hint(b)}
      ${b.items.map((i) => `
        <div class="cx">
          <p class="cx-case pair" data-zh>
            <span class="en">${text(i.caseEn)}<button class="zh-chip" title="顯示中文">中</button></span>
            <span class="zh">${text(i.caseZh)}</span>
          </p>
          <div class="cx-grid">
            <div class="cx-side cx-cold">
              <p class="cx-tag">${text(b.coldEn || 'As it landed')}
                <em>${text(b.coldZh || '當下造成的效果')}</em></p>
              <div class="pair" data-zh>
                <p class="en">${text(i.cold.en)}${speakBtn(i.cold.en, 'say say-quiet')}
                  <button class="zh-chip" title="顯示中文">中</button></p>
                <p class="zh">${text(i.cold.zh)}</p>
              </div>
            </div>
            <div class="cx-side cx-warm">
              <p class="cx-tag">${text(b.warmEn || 'As it could land')}
                <em>${text(b.warmZh || '可以有的效果')}</em></p>
              <div class="pair" data-zh>
                <p class="en">${text(i.warm.en)}${speakBtn(i.warm.en, 'say say-quiet')}
                  <button class="zh-chip" title="顯示中文">中</button></p>
                <p class="zh">${text(i.warm.zh)}</p>
              </div>
            </div>
          </div>
          <div class="cx-why pair" data-zh>
            <p class="en">${text(i.whyEn)}<button class="zh-chip" title="顯示中文">中</button></p>
            <p class="zh">${text(i.whyZh)}</p>
          </div>
        </div>`).join('')}
    </div>`,

  /* Phrase cards. English is face up; the Chinese and an example sentence are
     behind a tap, so the meaning can be tried first. */
  phrases: (b) => `
    <div class="phrases">
      ${label(b)}
      <ul class="cards">
        ${b.items.map((i) => `
          <li class="card" tabindex="0" role="button" aria-expanded="false">
            <p class="card-en">${text(i.en)}${speakBtn(i.en)}</p>
            <div class="card-back">
              <p class="card-zh">${text(i.zh)}</p>
              <p class="card-eg">${text(i.eg)}${speakBtn(i.eg, 'say say-quiet')}</p>
              ${i.egZh ? `<p class="card-eg-zh">${text(i.egZh)}</p>` : ''}
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  match: (b) => {
    const id = `m${uid++}`;
    const rights = shuffled(b.pairs.map((p, i) => ({ ...p, i })));
    return `
      <div class="activity match" data-act="match" id="${id}">
        ${label(b)}
        ${hint(b)}
        <div class="match-grid">
          <ul class="col col-a">
            ${b.pairs.map((p, i) => `
              <li><button class="chip" data-side="a" data-i="${i}">${text(p.a)}</button></li>`).join('')}
          </ul>
          <ul class="col col-b">
            ${rights.map((p) => `
              <li><button class="chip" data-side="b" data-i="${p.i}">${text(p.b)}</button></li>`).join('')}
          </ul>
        </div>
        <p class="tally"><span class="done">0</span> / ${b.pairs.length}</p>
      </div>`;
  },

  gap: (b) => `
    <div class="activity gaps" data-act="gap">
      ${label(b)}
      ${hint(b)}
      ${b.items.map((it, n) => {
        const [before, after] = text(it.text).split('___');
        return `
          <div class="gap" data-answer="${it.answer}">
            <div class="gap-line pair" ${it.textZh ? 'data-zh' : ''}>
              <p class="en"><span class="gap-n">${n + 1}</span>
                <span class="gap-text">${before}<span class="slot"></span>${after || ''}${
                  it.textZh ? '<button class="zh-chip" title="顯示中文">中</button>' : ''}</span></p>
              ${it.textZh ? `<p class="zh">${text(it.textZh)}</p>` : ''}
            </div>
            <ul class="opts">
              ${it.options.map((o, i) => `
                <li><button class="chip" data-i="${i}">${text(o)}</button></li>`).join('')}
            </ul>
            <p class="why"><span class="en">${text(it.why.en)}</span>
              <span class="zh">${text(it.why.zh)}</span></p>
          </div>`;
      }).join('')}
    </div>`,

  /* A quiz question about the reading. Unlike `gap` there is no blank to fill,
     so the options are never hidden once the answer is found: the right one
     locks green and the tried ones fade, which leaves the row readable as a
     record of what was guessed before it was known.

     `why` is optional and is the reason this differs from the version it was
     copied from. Where a question only asks what the article said, the article
     itself is the explanation and `why` should be left off. Where it asks her
     to judge something — is this claim honest, is this a reason to walk away —
     the explanation is the teaching, and it appears once the row is solved. */
  mcq: (b) => `
    <div class="activity mcqs" data-act="mcq">
      ${label(b)}
      ${hint(b)}
      ${b.items.map((it, n) => `
        <div class="mcq" data-answer="${it.answer}">
          <div class="mcq-line pair" ${it.qZh ? 'data-zh' : ''}>
            <p class="en mcq-q"><span class="mcq-n">${n + 1}</span>
              <span class="mcq-t">${text(it.q)}</span>${speakBtn(it.q, 'say say-quiet')}${
                it.qZh ? '<button class="zh-chip" title="顯示中文">中</button>' : ''}</p>
            ${it.qZh ? `<p class="zh">${text(it.qZh)}</p>` : ''}
          </div>
          <ul class="opts">
            ${it.options.map((o, i) => `
              <li><button class="chip" data-i="${i}">${text(o)}</button></li>`).join('')}
          </ul>
          ${it.why ? `<p class="why"><span class="en">${text(it.why.en)}</span>
            <span class="zh">${text(it.why.zh)}</span></p>` : ''}
        </div>`).join('')}
    </div>`,

  /* Anna's own sentences, corrected. The mistake is shown as it was said and
     the upgrade waits behind a tap, so there is a moment to spot it first — and
     so the page is worth re-reading weeks later, when the correction is the
     part that has been forgotten. The wrong sentence is never spoken aloud: 🔊
     sits on the corrected version only, because the wrong one should not be the
     model going into anyone's ear. */
  fix: (b) => `
    <div class="fixes">
      ${label(b)}
      ${hint(b)}
      <ul class="fix-list">
        ${b.items.map((i) => `
          <li class="fix" tabindex="0" role="button" aria-expanded="false">
            <p class="fix-wrong"><span class="fix-mark" aria-hidden="true">✕</span>
              <span class="fix-t">${text(i.wrong)}</span></p>
            <div class="fix-back">
              <p class="fix-right"><span class="fix-mark" aria-hidden="true">✓</span>
                <span class="fix-t">${text(i.right)}</span>${speakBtn(i.right, 'say say-quiet')}</p>
              <div class="pair fix-why" data-zh>
                <p class="en">${text(i.whyEn)}<button class="zh-chip" title="顯示中文">中</button></p>
                <p class="zh">${text(i.whyZh)}</p>
              </div>
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  poll: (b) => `
    <div class="activity poll" data-act="poll">
      ${label(b)}
      ${hint(b)}
      ${b.items.map((i) => `
        <div class="poll-row">
          <div class="pair" data-zh>
            <p class="en">${text(i.en)}<button class="zh-chip" title="顯示中文">中</button></p>
            <p class="zh">${text(i.zh)}</p>
          </div>
          <div class="poll-btns" role="group">
            <button class="chip" data-v="agree">Agree<em>同意</em></button>
            <button class="chip" data-v="unsure">Not sure<em>不確定</em></button>
            <button class="chip" data-v="disagree">Disagree<em>不同意</em></button>
          </div>
        </div>`).join('')}
    </div>`,

  cards: (b) => `
    <div class="activity audit" data-act="audit">
      ${label(b)}
      ${hint(b)}
      <ul class="roles">
        ${b.items.map((i) => `
          <li class="role">
            <p class="role-icon" aria-hidden="true">${i.icon}</p>
            <div class="pair" data-zh>
              <p class="en"><strong>${text(i.en)}</strong>
                <button class="zh-chip" title="顯示中文">中</button></p>
              <p class="zh">${text(i.zh)}</p>
            </div>
            <div class="pair role-desc" data-zh>
              <p class="en">${text(i.descEn)}</p>
              <p class="zh">${text(i.descZh)}</p>
            </div>
            <div class="role-btns" role="group">
              <button class="chip" data-v="have">I have this<em>我有這樣的人</em></button>
              <button class="chip" data-v="need">I need this<em>我需要一位</em></button>
            </div>
          </li>`).join('')}
      </ul>
    </div>`,

  discuss: (b) => `
    <div class="discuss">
      ${label(b)}
      ${b.items.map((i) => `
        <div class="ask">
          <div class="pair" data-zh>
            <p class="en">${text(i.en)}${speakBtn(i.en, 'say say-quiet')}
              <button class="zh-chip" title="顯示中文">中</button></p>
            <p class="zh">${text(i.zh)}</p>
          </div>
          <button class="reveal" aria-expanded="false">Useful language 可用句型</button>
          <ul class="starters" hidden>
            ${i.starters.map(bilingual).map((s) => `
              <li><span class="en">${text(s.en)}${speakBtn(s.en, 'say say-quiet')}</span>
                ${s.zh ? `<span class="zh">${text(s.zh)}</span>` : ''}</li>`).join('')}
          </ul>
        </div>`).join('')}
    </div>`,

  task: (b) => `
    <div class="activity task" data-act="task">
      ${label(b)}
      <div class="pair task-how" data-zh>
        <p class="en">${text(b.instructionEn)}<button class="zh-chip" title="顯示中文">中</button></p>
        <p class="zh">${text(b.instructionZh)}</p>
      </div>
      <ul class="prompts">
        ${b.prompts.map((p) => `
          <li><button class="prompt">
            <span class="en">${text(p.en)}</span>
            <span class="zh">${text(p.zh)}</span>
          </button></li>`).join('')}
      </ul>
      ${b.checklist ? `
        <div class="checklist">
          <p class="checklist-head">Target phrases <em>目標片語</em>
            <span class="count"><span class="n">0</span> used 已使用</span></p>
          <ul>
            ${b.checklist.map(bilingual).map((c) => `
              <li><button class="tick"><span class="box"></span>
                <span class="tick-t"><span class="en">${text(c.en)}</span>
                ${c.zh ? `<span class="zh">${text(c.zh)}</span>` : ''}</span></button></li>`).join('')}
          </ul>
        </div>` : ''}
      ${b.frames ? `
        <div class="frames">
          <p class="checklist-head">Sentence frames <em>句型</em></p>
          <ul>
            ${b.frames.map(bilingual).map((f) => `
              <li><span class="en">${text(f.en)}${speakBtn(f.en, 'say say-quiet')}</span>
                ${f.zh ? `<span class="zh">${text(f.zh)}</span>` : ''}</li>`).join('')}
          </ul>
        </div>` : ''}
    </div>`,
};

// ---------------------------------------------------------------- build

const sessions = NOTEBOOK.sessions;

/* While the content is a placeholder, say so across the top — on screen and in
   print, so a demo cannot be handed over by accident. */
function buildBanner() {
  const s = NOTEBOOK.sample;
  if (!s) return '';
  const msg = typeof s === 'string' ? s
    : 'Sample session — the words here are a placeholder, not Anna’s own work. 範例課程：此處內容為範本，並非 Anna 的實際上課紀錄。';
  return `<p class="sample-banner">${text(msg)}</p>`;
}

function buildCover() {
  const i = NOTEBOOK.intro;
  return `
    <header class="cover" id="top">
      <p class="kicker">${text(NOTEBOOK.kicker)}</p>
      <h1><span class="en">${text(NOTEBOOK.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(NOTEBOOK.titleZh)}</span></h1>
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
    </header>`;
}

/* A session. The heading is a button, so the fold works from the keyboard and
   announces itself; the body carries `.session-body` and is hidden by the
   `folded` class rather than the `hidden` attribute, so print can override it
   and unfold everything. */
function buildSession(s, open) {
  const blocks = s.blocks.map((b) => {
    const fn = BLOCKS[b.t];
    if (!fn) throw new Error(`Unknown block type "${b.t}" in session ${s.id}`);
    return fn(b);
  }).join('');

  /* The focus chips say what the session covered, which makes them closer to
     the contents list than to the lesson: both languages show at once, with no
     中 chip to tap. A chip that grew when touched would also be a strange
     thing in a row of pills. */
  const focus = s.focus && s.focus.length ? `
    <ul class="focus">
      ${s.focus.map((f) => `
        <li><span class="en">${text(f.en)}</span><span class="zh">${text(f.zh)}</span></li>`).join('')}
    </ul>` : '';

  return `
    <section class="session ${open ? '' : 'folded'}" id="${s.id}">
      <h2 class="session-head">
        <button class="session-btn" aria-expanded="${open}" aria-controls="body-${s.id}">
          <span class="n">${s.n}</span>
          <span class="titles">
            ${s.dateEn ? `<span class="date">${text(s.dateEn)}<em>${text(s.dateZh || '')}</em></span>` : ''}
            <span class="en">${text(s.en)}</span>
            <span class="zh">${text(s.zh)}</span>
          </span>
          <span class="fold" aria-hidden="true"></span>
        </button>
      </h2>
      <div class="session-body" id="body-${s.id}">
        ${focus}
        ${blocks}
      </div>
    </section>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="Sessions">
      <p class="toc-head">Sessions 課程</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="en">Start</span><span class="zh">開始</span></span></a></li>
        ${sessions.map((s) => `
          <li><a href="#${s.id}" data-target="${s.id}"><span class="n">${s.n}</span>
            <span class="t"><span class="en">${text(s.en)}</span>
            ${s.dateEn ? `<span class="zh">${text(s.dateEn)}</span>` : ''}</span></a></li>`).join('')}
      </ul>
    </nav>`;
}

document.title = `${NOTEBOOK.title} · ${NOTEBOOK.titleZh}`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
if (NOTEBOOK.sample) doc.appendChild(el(buildBanner()));
doc.appendChild(el(buildCover()));

/* Open the session named in the URL, or the newest one. A hash that matches
   nothing falls back to the newest, so an old link cannot land on a page with
   everything shut. */
const wanted = decodeURIComponent(location.hash.slice(1));
const openId = sessions.some((s) => s.id === wanted)
  ? wanted
  : (sessions.length ? sessions[sessions.length - 1].id : '');

sessions.forEach((s) => doc.appendChild(el(buildSession(s, s.id === openId))));

// ---------------------------------------------------------------- folding

function setFold(section, open) {
  section.classList.toggle('folded', !open);
  $('.session-btn', section).setAttribute('aria-expanded', String(open));
}

/* Two ways to open a session, and they mean different things.

   `openSession` is "take me to this one" — the contents list and the URL hash.
   It folds the others, so following a link lands on one session rather than on
   that session plus whatever happened to be open already.

   Tapping a heading is the other way, and it is deliberately additive: nothing
   else closes, so two sessions can sit open side by side when a phrase from
   October is worth putting next to one from August. */
function openSession(id, sole = true) {
  const section = document.getElementById(id);
  // "#top" is the cover, and an unknown id is an old link — neither is a
  // session, and neither should fold the page down on its way past.
  if (!section || !section.classList.contains('session')) return null;
  if (sole) $$('.session').forEach((s) => { if (s !== section) setFold(s, false); });
  setFold(section, true);
  return section;
}

// ---------------------------------------------------------------- Chinese

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`anna.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`anna.${k}`, v); } catch { /* private mode */ } },
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

/* One click handler for the whole document. Every interactive part is a button
   or a card inside it, so this stays in one place rather than being scattered
   across the block builders. */
doc.addEventListener('click', (e) => {
  const t = e.target;

  // ---- speak
  const say = t.closest('.say');
  if (say) { e.stopPropagation(); speak(say.dataset.say); return; }

  // ---- a link keeps its ordinary behaviour; one pointing at a session on this
  //      page opens it first, or the jump lands on a folded heading
  const a = t.closest('a');
  if (a) {
    const to = a.getAttribute('href') || '';
    if (to.startsWith('#')) openSession(decodeURIComponent(to.slice(1)));
    return;
  }

  // ---- fold / unfold a session
  const head = t.closest('.session-btn');
  if (head) {
    const section = head.closest('.session');
    setFold(section, section.classList.contains('folded'));
    return;
  }

  // ---- reveal Chinese for one line
  const chip = t.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    // Climb to the nearest ancestor that actually holds the Chinese, whatever
    // the block wrapped it in — a .pair, a heading, a blockquote.
    let host = chip.parentElement;
    while (host && !host.querySelector('.zh')) host = host.parentElement;
    if (host) host.classList.toggle('open');
    return;
  }
  const line = t.closest('.pair[data-zh]');
  if (line && !t.closest('button')) { line.classList.toggle('open'); return; }

  // ---- phrase card
  const card = t.closest('.card');
  if (card) {
    const open = card.classList.toggle('open');
    card.setAttribute('aria-expanded', String(open));
    return;
  }

  // ---- a corrected sentence
  const fix = t.closest('.fix');
  if (fix) {
    const open = fix.classList.toggle('open');
    fix.setAttribute('aria-expanded', String(open));
    return;
  }

  // ---- useful language
  const reveal = t.closest('.reveal');
  if (reveal) {
    const list = reveal.nextElementSibling;
    const open = list.hidden;
    list.hidden = !open;
    reveal.setAttribute('aria-expanded', String(open));
    return;
  }

  const btn = t.closest('button');
  if (!btn) return;

  const act = btn.closest('[data-act]');
  if (!act) return;

  const kind = act.dataset.act;
  if (kind === 'match') matchClick(act, btn);
  else if (kind === 'gap') gapClick(btn);
  else if (kind === 'mcq') mcqClick(btn);
  else if (kind === 'poll' || kind === 'audit') pickOne(btn);
  else if (kind === 'task') taskClick(act, btn);
});

// Cards and corrections are focusable, so keep them operable from the keyboard.
doc.addEventListener('keydown', (e) => {
  const item = e.target.closest('.card, .fix');
  if (item && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); item.click(); }
});

// ---------------------------------------------------------------- activities

function wobble(node) {
  node.classList.remove('no');
  void node.offsetWidth;   // restart the animation if it is already running
  node.classList.add('no');
  setTimeout(() => node.classList.remove('no'), 500);
}

/* Matching: pick a phrase on the left, then its partner on the right. A
   correct pair locks; a wrong one wobbles and clears, so the exercise cannot
   reach a stuck state. */
function matchClick(act, btn) {
  if (!btn.classList.contains('chip') || btn.classList.contains('done')) return;

  const picked = $('.chip.picked', act);

  if (!picked || picked.dataset.side === btn.dataset.side) {
    if (picked) picked.classList.remove('picked');
    if (picked === btn) return;
    btn.classList.add('picked');
    return;
  }

  if (picked.dataset.i === btn.dataset.i) {
    [picked, btn].forEach((c) => {
      c.classList.remove('picked');
      c.classList.add('done');
    });
    const done = $$('.chip.done', act).length / 2;
    $('.tally .done', act).textContent = done;
    if (done === $$('.col-a .chip', act).length) act.classList.add('all-done');
  } else {
    wobble(btn);
    wobble(picked);
    picked.classList.remove('picked');
  }
}

function gapClick(btn) {
  const gap = btn.closest('.gap');
  if (!gap || gap.classList.contains('solved')) return;

  if (Number(btn.dataset.i) === Number(gap.dataset.answer)) {
    $('.slot', gap).textContent = btn.textContent;
    gap.classList.add('solved');
    btn.classList.add('done');
  } else {
    wobble(btn);
    btn.classList.add('out');
  }
}

/* A quiz question. There is no blank to fill, so a right answer simply locks
   the row and ticks the option that was chosen; a wrong one wobbles, fades and
   leaves the question open, the same no-failure rule as everywhere else here. */
function mcqClick(btn) {
  const q = btn.closest('.mcq');
  if (!q || q.classList.contains('solved')) return;

  if (Number(btn.dataset.i) === Number(q.dataset.answer)) {
    q.classList.add('solved');
    btn.classList.add('done');
  } else {
    wobble(btn);
    btn.classList.add('out');
  }
}

// Opinion and audit buttons: one choice per row, and clicking it again clears.
function pickOne(btn) {
  if (!btn.classList.contains('chip')) return;
  const group = btn.parentElement;
  const was = btn.classList.contains('on');
  $$('.chip', group).forEach((c) => c.classList.remove('on'));
  if (!was) btn.classList.add('on');
}

function taskClick(act, btn) {
  if (btn.classList.contains('prompt')) {
    const was = btn.classList.contains('on');
    $$('.prompt', act).forEach((p) => p.classList.remove('on'));
    if (!was) btn.classList.add('on');
    return;
  }
  if (btn.classList.contains('tick')) {
    btn.classList.toggle('on');
    $('.count .n', act).textContent = $$('.tick.on', act).length;
  }
}

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
  speak('Let’s pick that up where we left off last week.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('Say that again, a little more slowly.');
});
$('#rate').value = store.get('rate', '0.95');

// ---------------------------------------------------------------- panels

const panel = $('#panel');
const panelBtn = $('#panelToggle');

function setPanel(open) {
  panel.hidden = !open;
  panelBtn.setAttribute('aria-expanded', String(open));
}

panelBtn.addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));

$('#zhAll').addEventListener('change', (e) => setAllZh(e.target.checked));

// Unfold the whole notebook — for looking back over a term, or for printing.
$('#openAll').addEventListener('click', () => {
  $$('.session').forEach((s) => setFold(s, true));
  setPanel(false);
});

/* Reveal every answer at once — for going over an exercise together, or for
   picking a session up in the middle. Sessions are unfolded first, or the
   answers would be filled in behind a closed lid. */
$('#showAll').addEventListener('click', () => {
  $$('.session').forEach((s) => setFold(s, true));

  $$('.gap:not(.solved)').forEach((gap) => {
    const right = $$('.opts .chip', gap)[Number(gap.dataset.answer)];
    $('.slot', gap).textContent = right.textContent;
    right.classList.add('done');
    gap.classList.add('solved');
  });

  $$('.mcq:not(.solved)').forEach((q) => {
    $$('.opts .chip', q)[Number(q.dataset.answer)].classList.add('done');
    q.classList.add('solved');
  });

  $$('.match').forEach((act) => {
    $$('.chip', act).forEach((c) => { c.classList.remove('picked'); c.classList.add('done'); });
    $('.tally .done', act).textContent = $$('.col-a .chip', act).length;
    act.classList.add('all-done');
  });

  $$('.card').forEach((c) => { c.classList.add('open'); c.setAttribute('aria-expanded', 'true'); });
  $$('.fix').forEach((f) => { f.classList.add('open'); f.setAttribute('aria-expanded', 'true'); });
  $$('.starters').forEach((s) => { s.hidden = false; });
  $$('.reveal').forEach((r) => r.setAttribute('aria-expanded', 'true'));
  setPanel(false);
});

// A reload is the reset: nothing is stored except the device settings.
$('#reset').addEventListener('click', () => location.reload());

// ---------------------------------------------------------------- chrome

const links = new Map($$('.toc a').map((a) => [a.dataset.target, a]));

/* A contents link opens its session before the browser jumps to it — otherwise
   the anchor lands on a folded heading and nothing appears to happen. The
   hashchange handler below would do it too, but only if the hash actually
   changes: clicking the link for the session already showing does not fire
   one. */
$('#nav').addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  openSession(a.dataset.target);
  closeNav();
});

/* The bar marks the session being read by measuring rather than with an
   IntersectionObserver: an open session is several screens tall while the
   folded ones are a heading each, so at any moment several straddle a sensible
   trigger band and the observer reports whichever fired last. */
const marks = [$('#top'), ...$$('.session')];

/* Keep the marked link inside the contents list WITHOUT ever scrolling the
   page. The obvious `a.scrollIntoView({ block: 'nearest' })` is the bug that
   made the older notebooks drift on their own:

   - `markHere` runs on every scroll event, so it fired dozens of times a
     second while the reader was scrolling;
   - `scrollIntoView` scrolls the nearest scrollable ANCESTOR, and when the
     contents list is not itself scrolling — a short list, or a narrow screen
     where it is a closed panel — that ancestor is the document; and
   - it inherited `scroll-behavior: smooth`, so each call started an animation
     that outlived the gesture and fought the next one.

   Scrolling the container by hand fixes all three at once: it moves only
   `.toc`, only when the link is actually outside its box, and instantly. */
function keepLinkVisible(a) {
  const box = a.closest('.toc');
  if (!box || box.scrollHeight <= box.clientHeight) return;
  /* Rect deltas rather than offsetTop: the link's offsetParent is whichever
     ancestor happens to be positioned, which is not reliably the scroll box,
     and subtracting the wrong origin silently pins scrollTop at 0. */
  const link = a.getBoundingClientRect();
  const view = box.getBoundingClientRect();
  if (link.top < view.top) box.scrollTop -= view.top - link.top;
  else if (link.bottom > view.bottom) box.scrollTop += link.bottom - view.bottom;
}

function markHere() {
  const line = 90;
  let here = marks[0];
  marks.forEach((m) => { if (m.getBoundingClientRect().top <= line) here = m; });
  links.forEach((a) => a.classList.remove('here'));
  const a = links.get(here.id);
  if (a) { a.classList.add('here'); keepLinkVisible(a); }
}

markHere();
addEventListener('scroll', markHere, { passive: true });

const navToggle = $('#navToggle');
navToggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

function closeNav() {
  document.body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

$('.nav-scrim').addEventListener('click', closeNav);
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeNav();
  setPanel(false);
  speechSynthesis.cancel();
});

// Arriving on an anchor from outside, or editing the hash by hand.
addEventListener('hashchange', () => {
  const id = decodeURIComponent(location.hash.slice(1));
  const section = openSession(id);
  if (section) section.scrollIntoView();
});

/* Print is the handout, and a handout with folded sessions is blank paper. */
addEventListener('beforeprint', () => $$('.session').forEach((s) => setFold(s, true)));
