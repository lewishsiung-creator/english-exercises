/* Renders RD (content.js) and wires up the page.

   Three decisions the page rests on:

   1. **One mode, not two.** /grammar-notes/ and the other 國中 pages split into
      自學 and 教學 because a younger student alone needs the Chinese on screen.
      A reading page cannot do that for anyone: a translation beside the
      paragraph is the end of the reading. So the Chinese waits behind a 中 chip
      here for everybody, and there is no #teach.
   2. **Help comes in two sizes.** A dotted word opens its meaning in the line,
      without moving the reader off the sentence; 中 opens the whole paragraph.
      The dotted words are this page's own list; the 字彙表 is the teacher's.
   3. **A wrong answer stays open.** It wobbles, says why, and the question
      waits for another try. Only the right answer closes it. Nothing is scored
      and nothing is saved, so a reload is a clean lesson. A review round ends
      by naming what to look at again, never with a mark.

   Everything kept in localStorage is under `rd.`, and it is only the voice. */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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
      const v = localStorage.getItem('rd.' + k);
      return v == null ? d : JSON.parse(v);
    } catch (e) { return d; }
  },
  set(k, v) {
    try { localStorage.setItem('rd.' + k, JSON.stringify(v)); } catch (e) { /* private mode */ }
  },
};

// ------------------------------------------------------------------- pieces

const LETTERS = 'ABCD';

/* The blanks, by number, so a filled slot can find its word wherever it is. */
const BLANKS = {};
RD.passages.forEach((p) => p.parts.forEach((pt) => pt.blocks.forEach((b) => {
  if (b.t === 'text') b.paras.forEach((para) => (para.blanks || []).forEach((q) => { BLANKS[q.n] = q; }));
})));

/* Everything in the teacher's lists, so the review can say what a word means
   instead of each wrong option needing a sentence written for it. */
const LEX = {};
RD.passages.forEach((p) => {
  if (!p.vocab) return;
  [...p.vocab.words, ...p.vocab.phrases, ...(p.vocab.terms || [])].forEach((i) => { LEX[i.w] = i.zh; });
  p.vocab.words.forEach((i) => { LEX[i.use] = i.useZh; });
});

function gloss(w) {
  if (!LEX[w]) console.warn(`reading: "${w}" is not in the word lists`);
  return LEX[w] || '';
}

function shuffled(list) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function say(sentence) {
  return `<button class="say" data-say="${text(sentence)}" title="唸一次" aria-label="唸一次">🔊</button>`;
}

function chip() {
  return '<button class="zh-chip" title="顯示中文">中</button>';
}

function pair(en, zh, cls = '') {
  return `
    <div class="pair ${cls}" data-zh>
      <p class="en">${text(en)} ${say(en)} ${chip()}</p>
      <p class="zh">${text(zh)}</p>
    </div>`;
}

function slot(n) {
  return `<span class="slot" data-n="${n}" aria-label="第 ${n} 題空格"><span class="slot-n">${n}</span></span>`;
}

/* Finds each word of a passage once, at its first appearance. Nothing is marked
   up in the paragraphs, so this is the only link between the text and the list. */
function placeGloss(passage, paras) {
  const spots = paras.map(() => []);
  (passage.words || []).forEach((w) => {
    const needle = w.find || w.w;
    const i = paras.findIndex((p, n) => {
      const at = p.en.indexOf(needle);
      return at >= 0 && !spots[n].some((s) => at < s.at + s.len && s.at < at + needle.length);
    });
    if (i < 0) { console.warn(`reading: "${needle}" is not in ${passage.id}`); return; }
    spots[i].push({ at: paras[i].en.indexOf(needle), len: needle.length, zh: w.zh });
  });
  return spots;
}

/* One paragraph of English, walked a character at a time because three things
   can overlap in it: *italics*, numbered blanks and glossed words. */
function inline(raw, spots) {
  const starts = new Map(spots.map((s) => [s.at, s]));
  let out = '', i = 0, em = false, close = -1, zh = '';
  while (i < raw.length) {
    if (i === close) {
      out += `</span><span class="gl-zh" hidden>${text(zh)}</span></span>`;
      close = -1;
    }
    const blank = raw.slice(i).match(/^__(\d+)\.__/);
    if (blank) { out += slot(blank[1]); i += blank[0].length; continue; }
    if (raw[i] === '*') { out += em ? '</em>' : '<em>'; em = !em; i += 1; continue; }
    const s = starts.get(i);
    if (s) {
      out += '<span class="gl-wrap"><span class="gl" role="button" tabindex="0" aria-expanded="false">';
      close = i + s.len; zh = s.zh;
    }
    out += text(raw[i]);
    i += 1;
  }
  if (close === raw.length) out += `</span><span class="gl-zh" hidden>${text(zh)}</span></span>`;
  return out;
}

function inlineZh(raw) {
  return text(raw).replace(/__(\d+)\.__/g, (m, n) => slot(n).replace('class="slot"', 'class="slot slot-zh"'));
}

function options(q, cls) {
  return `
    <div class="choice ${cls}">
      ${q.options.map((o, i) => `
        <button class="opt" data-i="${i}" data-no="${text((q.no || {})[i])}">
          <span class="opt-k">${LETTERS[i]}</span><span class="opt-t">${text(o)}</span>
        </button>`).join('')}
    </div>
    <p class="no" hidden></p>
    <p class="why">${text(q.why)}</p>`;
}

/* Under each review round. No score: it names what to look at again and offers
   only those questions back. */
function roundEnd() {
  return `
    <div class="again" hidden>
      <p class="again-text"></p>
      <button class="again-btn" hidden></button>
    </div>`;
}

// ---------------------------------------------------------------- blocks

const BLOCKS = {
  lead: (b) => `
    <div class="lead">
      <p class="lead-zh">${text(b.zh)}</p>
      <p class="lead-en">${text(b.en)}</p>
    </div>`,

  text: (b, passage) => {
    const spots = placeGloss(passage, b.paras);
    return `
      <div class="passage">
        ${b.paras.map((p, i) => `
          <div class="pair para" data-zh>
            <p class="en">${inline(p.en, spots[i])}
              <span class="para-tools">${say(p.en)} ${chip()}</span></p>
            <p class="zh">${inlineZh(p.zh)}</p>
          </div>
          ${(p.blanks || []).map((q) => `
            <div class="q cloze" data-n="${q.n}" data-answer="${q.answer}">
              <p class="q-n">第 ${q.n} 題</p>
              ${options(q, 'choice-row')}
            </div>`).join('')}`).join('')}
      </div>`;
  },

  /* Where the source runs out. Marked as a stop rather than left to look like
     an ending, and nothing is written in to finish the sentence. */
  stop: (b) => `
    <aside class="stop">
      <h4><span class="n-zh">${text(b.zh)}</span><span class="n-en">${text(b.en)}</span></h4>
      <p class="note-zh">${text(b.bodyZh)}</p>
    </aside>`,

  note: (b) => `
    <aside class="note">
      <h4><span class="n-zh">${text(b.zh)}</span><span class="n-en">${text(b.en)}</span></h4>
      <p class="note-zh">${text(b.bodyZh)}</p>
      ${(b.good || []).map((g) => `<p class="ex">${text(g)} ${say(g)}</p>`).join('')}
    </aside>`,

  mcq: (b) => `
    <div class="activity">
      ${b.items.map((q, n) => `
        <div class="q mq" data-answer="${q.answer}">
          <div class="q-stem">
            <span class="q-num">${n + 1}</span>
            ${pair(q.en, q.zh)}
          </div>
          ${options(q, 'choice-list')}
        </div>`).join('')}
    </div>`,

  /* The author's word beside a plain one. The plain column is what a student
     should try to supply, so it is the part 中文 and the tap open. */
  loaded: (b) => `
    <ul class="loaded">
      ${b.items.map((i) => `
        <li class="pair" data-zh>
          <p class="ld-w">${text(i.w)}</p>
          <p class="ld-q">中立的說法？ <button class="zh-chip" title="顯示中立的說法">看</button></p>
          <div class="zh">
            <p class="ld-plain">${text(i.plain)}</p>
            <p class="ld-why">${text(i.zh)}</p>
          </div>
        </li>`).join('')}
    </ul>`,

  /* The teacher's list. A row with `after` is the answer to a blank, so it says
     which question opens it until that question is solved. */
  vocab: (b, passage) => {
    const v = passage.vocab;
    const head = (i, tail = '') => `
      <p class="en">${i.star ? '<span class="star" title="建議優先掌握">★</span> ' : ''}<strong>${text(i.w)}</strong>
        ${tail}${say(i.w.replace(/ \+ V-ing| V$/, ''))} ${chip()}</p>
      <p class="zh">${text(i.zh)}</p>`;
    const row = (i, body) => `
      <li class="word pair" data-zh${i.after ? ` data-after="${i.after}"` : ''}>${body}</li>`;
    const group = (zh, en, rows) => `
      <h4 class="v-head"><span class="v-zh">${zh}</span><span class="v-en">${en}</span></h4>
      <ul class="wordlist">${rows}</ul>`;
    return `
      <p class="v-theme">${text(v.themeEn)}<span>${text(v.themeZh)}</span></p>
      ${group('關鍵單字', 'Key words', v.words.map((i) => row(i, `
        ${head(i, `<span class="pos">${text(i.pos)}</span> `)}
        <p class="w-line">${text(i.use)}</p>
        <p class="zh w-line-zh">${text(i.useZh)}</p>`)).join(''))}
      ${group('片語與搭配詞', 'Phrases and collocations', v.phrases.map((i) => row(i, `
        ${head(i)}
        <p class="w-line">${text(i.eg)} ${say(i.eg)}</p>`)).join(''))}
      ${v.terms ? group('主題專有詞', 'Topic-specific terms', v.terms.map((i) => row(i, head(i))).join('')) : ''}`;
  },

  patterns: (b) => `
    <ol class="patterns">
      ${b.items.map((i) => `
        <li>
          <p class="pat"><code>${text(i.pat)}</code></p>
          ${pair(i.en, i.zh)}
        </li>`).join('')}
    </ol>`,

  /* One gap, four choices, shuffled on every load so that a position cannot be
     memorised. A wrong tap explains itself: it gives that word's meaning, or
     says the pairing is not one English uses. */
  pick: (b) => `
    <div class="round">
      ${b.items.map((q) => {
        const key = q.key || q.options[0];
        const fill = q.fill || q.options[0];
        const [before, after = ''] = text(q.text).split('___');
        const line = `${before}<span class="r-slot" data-fill="${text(fill)}"></span>${after}`;
        const no = (o) => (b.wrong === 'gloss'
          ? `${o}：${gloss(o)}`
          : `「${q.text.replace('___', o)}」不是常見的說法。`);
        return `
          <div class="q pick" data-answer="0"${q.after ? ` data-after="${q.after}"` : ''}>
            ${q.zh
              ? `<div class="pair" data-zh><p class="en r-line">${line} ${chip()}</p><p class="zh">${text(q.zh)}</p></div>`
              : `<p class="en r-line">${line}</p>`}
            <div class="choice choice-row">
              ${shuffled(q.options.map((o, i) => ({ o, i }))).map(({ o, i }) => `
                <button class="opt" data-i="${i}" data-no="${text(no(o))}"><span class="opt-t">${text(o)}</span></button>`).join('')}
            </div>
            <p class="no" hidden></p>
            <p class="why"><strong>${text(key)}</strong> ${text(gloss(key))} ${say(q.text.replace('___', fill))}</p>
          </div>`;
      }).join('')}
      ${roundEnd()}
    </div>`,

  /* Typing it is the strongest recall on the page, so the Chinese is the
     prompt here and is always on screen, as on /robot-helper/. */
  spell: (b) => `
    <div class="round">
      ${b.items.map((q) => {
        const [before, after = ''] = text(q.text).split('___');
        return `
          <div class="q spell" data-word="${text(q.answer)}" data-hint="1">
            <p class="s-zh">${text(q.zh)}</p>
            <p class="en r-line">${before}<input class="s-in" type="text" aria-label="填入英文"
              placeholder="${text(q.answer[0])}…" style="width:${q.answer.length + 3}ch"
              autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
              enterkeyhint="done">${after}</p>
            <div class="s-btns">
              <button class="s-btn s-check">檢查 <em>Check</em></button>
              <button class="s-btn s-hint">再給一個字母 <em>Hint</em></button>
              <button class="s-btn s-show">看答案 <em>Show</em></button>
            </div>
            <p class="no" hidden></p>
            <p class="why"><strong>${text(q.key)}</strong> ${text(gloss(q.key))} ${say(q.text.replace('___', q.answer))}</p>
          </div>`;
      }).join('')}
      ${roundEnd()}
    </div>`,

  /* Spoken, not typed: discussion has no field, so the screen stays the same
     for a student alone and for a class. */
  talk: (b) => `
    <ul class="talk">
      ${b.items.map((i) => `<li>${pair(i.en, i.zh)}</li>`).join('')}
    </ul>`,
};

// ---------------------------------------------------------------- build

function buildPart(part, passage) {
  return `
    <section class="part" id="${text(part.id)}">
      <h3 class="part-head"><span class="p-zh">${text(part.zh)}</span>
        <span class="p-en">${text(part.en)}</span></h3>
      ${part.blocks.map((b) => {
        const fn = BLOCKS[b.t];
        if (!fn) throw new Error(`reading: no renderer for block "${b.t}" in ${passage.id}/${part.id}`);
        return fn(b, passage);
      }).join('')}
    </section>`;
}

function buildPassage(p, n) {
  return `
    <article class="point" id="${text(p.id)}">
      <header class="point-head">
        <p class="eyebrow"><span class="p-n">${text(p.label || `Text ${n}`)}</span>
          <span class="p-icon" aria-hidden="true">${text(p.icon)}</span></p>
        <h2><span class="h-en">${text(p.en)}</span><span class="h-zh">${text(p.zh)}</span></h2>
        <p class="point-sub">${text(p.sub)}</p>
      </header>
      ${p.parts.map((pt) => buildPart(pt, p)).join('')}
    </article>`;
}

function buildCover() {
  return `
    <header class="cover" id="top">
      ${RD.up ? `<a class="cover-up" href="${text(RD.up.href)}">${text(RD.up.zh)}</a>` : ''}
      <p class="eyebrow">${text(RD.kicker)}</p>
      <h1><span class="h-zh">${text(RD.titleZh)}</span><span class="h-sub">${text(RD.title)}</span></h1>
      <div class="lead cover-intro">
        <p class="lead-zh">${text(RD.intro.zh)}</p>
        <p class="lead-en">${text(RD.intro.en)}</p>
      </div>
      ${(RD.plan || []).length ? `<div class="cover-plan">${RD.plan.map((p) => `
        <div><p class="cp-k">${text(p.k)}</p><p class="cp-v">${text(p.v)}</p></div>`).join('')}</div>` : ''}
      ${(RD.vocab || []).length ? `<div class="cover-links">${RD.vocab.map((v) => `
        <a class="cover-link" href="${text(v.href)}">${text(v.zh)}
          <span>${text(v.en)}</span></a>`).join('')}</div>` : ''}
    </header>`;
}

function buildSource() {
  return `
    <footer class="source">
      <p class="src-zh">${text(RD.sourceNote.zh)}</p>
      <p class="src-en">${text(RD.sourceNote.en)}</p>
    </footer>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="目錄">
      <p class="toc-head">目錄 <em>Contents</em></p>
      ${RD.passages.map((p, i) => `
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

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
RD.passages.forEach((p, i) => doc.appendChild(el(buildPassage(p, i + 1))));
doc.appendChild(el(buildSource()));

// ------------------------------------------------------------------ answers

function fillBlank(n) {
  const q = BLANKS[n];
  $$(`.slot[data-n="${n}"]`).forEach((s) => {
    s.textContent = s.classList.contains('slot-zh') ? q.zhFill : q.options[q.answer];
    s.classList.add('filled');
  });
  $$(`[data-after="${n}"]`).forEach((w) => w.classList.add('unlocked'));
}

function solve(q) {
  const opts = $$('.opt', q);
  opts.forEach((b) => {
    b.disabled = true;
    b.classList.toggle('is-answer', b.dataset.i === q.dataset.answer);
  });
  const no = $('.no', q);
  no.hidden = true;
  q.classList.add('solved');
  if (q.dataset.n) fillBlank(q.dataset.n);

  const rs = $('.r-slot', q);
  if (rs) { rs.textContent = rs.dataset.fill; rs.classList.add('filled'); }
  const field = $('.s-in', q);
  if (field) { field.value = q.dataset.word; field.disabled = true; }
}

/* A miss is remembered for this round only, so the page can offer the question
   back. It is never counted. */
function miss(q, message) {
  q.classList.add('missed');
  const no = $('.no', q);
  no.textContent = message;
  no.hidden = false;

  /* Restart the wobble if the same question is missed twice in a row. */
  q.classList.remove('wobble');
  void q.offsetWidth;
  q.classList.add('wobble');
}

function choose(q, btn) {
  if (q.classList.contains('solved') || btn.disabled) return;
  if (btn.dataset.i === q.dataset.answer) { solve(q); roundDone(q); return; }
  btn.classList.add('is-wrong');
  miss(q, btn.dataset.no);
}

/* Curly and straight apostrophes are the same letter to a student on a phone. */
function plain(s) {
  return s.trim().toLowerCase().replace(/[’‘]/g, "'");
}

function checkSpelling(q) {
  const typed = $('.s-in', q).value;
  if (!plain(typed)) return;
  if (plain(typed) === plain(q.dataset.word)) { solve(q); roundDone(q); return; }
  miss(q, '還不對，再試一次，或按「再給一個字母」。');
}

function giveLetter(q) {
  const n = Math.min(Number(q.dataset.hint) + 1, q.dataset.word.length);
  q.dataset.hint = n;
  const field = $('.s-in', q);
  field.value = q.dataset.word.slice(0, n);
  field.focus();
}

function isLocked(q) {
  return q.dataset.after && !q.classList.contains('unlocked');
}

function missedWord(q) {
  return q.dataset.word || $('.why strong', q).textContent;
}

/* Runs after each right answer. Once the live questions of a round are done, it
   lists the ones that were not right the first time. */
function roundDone(q) {
  const round = q.closest('.round');
  if (!round) return;
  const qs = $$('.q', round);
  const live = qs.filter((x) => !isLocked(x) && !x.classList.contains('parked'));
  const again = $('.again', round);
  if (live.some((x) => !x.classList.contains('solved'))) { again.hidden = true; return; }

  const missed = live.filter((x) => x.classList.contains('missed'));
  const btn = $('.again-btn', round);
  again.hidden = false;
  btn.hidden = !missed.length;
  if (missed.length) {
    $('.again-text', round).textContent = `再看一次：${missed.map(missedWord).join('、')}`;
    btn.textContent = `重練這 ${missed.length} 題`;
    return;
  }
  $('.again-text', round).textContent = '這一關完成了。';
  qs.forEach((x) => x.classList.remove('parked'));
}

function resetQuestion(q) {
  q.classList.remove('solved', 'wobble', 'missed', 'parked');
  $$('.opt', q).forEach((b) => {
    b.disabled = false;
    b.classList.remove('is-answer', 'is-wrong');
  });
  $('.no', q).hidden = true;

  const rs = $('.r-slot', q);
  if (rs) { rs.textContent = ''; rs.classList.remove('filled'); }
  const field = $('.s-in', q);
  if (field) { field.value = ''; field.disabled = false; q.dataset.hint = 1; }
}

/* Only what was missed comes back, with its choices in a new order, so the
   second try cannot lean on where the answer sat. */
function retryRound(round) {
  $$('.q', round).forEach((q) => {
    if (isLocked(q)) return;
    if (!q.classList.contains('missed')) { q.classList.add('parked'); return; }
    resetQuestion(q);
    const row = $('.choice', q);
    if (row) shuffled([...row.children]).forEach((b) => row.appendChild(b));
  });
  $('.again', round).hidden = true;
  round.closest('.part').scrollIntoView();
}

function clearAll() {
  $$('.q').forEach(resetQuestion);
  $$('.again').forEach((a) => { a.hidden = true; });
  $$('.slot').forEach((s) => {
    s.classList.remove('filled');
    s.innerHTML = `<span class="slot-n">${s.dataset.n}</span>`;
  });
  $$('.unlocked').forEach((w) => w.classList.remove('unlocked'));
  $$('.pair.open').forEach((p) => p.classList.remove('open'));
  $$('.gl[aria-expanded="true"]').forEach(toggleGloss);
  setAllZh(false);
}

function toggleGloss(g) {
  const zh = g.nextElementSibling;
  zh.hidden = !zh.hidden;
  g.setAttribute('aria-expanded', String(!zh.hidden));
}

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  $('#zhToggle').setAttribute('aria-pressed', String(on));
}

// ------------------------------------------------------------------- events

doc.addEventListener('click', (e) => {
  const sayBtn = e.target.closest('.say');
  if (sayBtn) { speak(sayBtn.dataset.say, sayBtn); return; }

  const zhChip = e.target.closest('.zh-chip');
  if (zhChip) { zhChip.closest('.pair').classList.toggle('open'); return; }

  const gloss = e.target.closest('.gl');
  if (gloss) { toggleGloss(gloss); return; }

  const opt = e.target.closest('.opt');
  if (opt) { choose(opt.closest('.q'), opt); return; }

  const again = e.target.closest('.again-btn');
  if (again) { retryRound(again.closest('.round')); return; }

  const spellBtn = e.target.closest('.s-btn');
  if (spellBtn) {
    const q = spellBtn.closest('.q');
    if (spellBtn.classList.contains('s-check')) checkSpelling(q);
    else if (spellBtn.classList.contains('s-hint')) giveLetter(q);
    else { q.classList.add('missed'); solve(q); roundDone(q); }
  }
});

doc.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('gl')) {
    e.preventDefault();
    toggleGloss(e.target);
  }
  if (e.key === 'Enter' && e.target.classList.contains('s-in')) {
    checkSpelling(e.target.closest('.q'));
  }
});

$('#zhToggle').addEventListener('click', () =>
  setAllZh(!document.body.classList.contains('zh-all')));

$('#showAll').addEventListener('click', () => { $$('.q').forEach(solve); setPanel(false); });
$('#fresh').addEventListener('click', () => { clearAll(); setPanel(false); });

// ------------------------------------------------------------------- speech

let voices = [], voice = null, speaking = null;

function loadVoices() {
  voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
  if (!voices.length) return;
  const saved = store.get('voice', '');
  voice = voices.find((v) => v.name === saved)
       || voices.find((v) => v.lang === 'en-US' && /Samantha|Ava|Allison|Google US/i.test(v.name))
       || voices.find((v) => v.lang === 'en-US') || voices[0];
  $('#voicePick').innerHTML = voices.map((v) =>
    `<option value="${text(v.name)}"${v === voice ? ' selected' : ''}>${text(v.name)} (${text(v.lang)})</option>`).join('');
}

/* What the voice should actually say: no asterisks, and a blank is either its
   answer, once it has one, or the word "blank". */
function spoken(s) {
  return s.replace(/\*/g, '').replace(/__(\d+)\.__/g, (m, n) =>
    ($(`.slot[data-n="${n}"].filled`) ? BLANKS[n].options[BLANKS[n].answer] : 'blank'));
}

/* A paragraph goes one sentence at a time, because some voices stop partway
   through a long utterance. The queue starts on a timeout since Safari drops
   whatever is spoken immediately after cancel(). Pressing the button that is
   already speaking stops it. */
function speak(s, btn) {
  if (!s || !('speechSynthesis' in window)) return;
  const again = speaking === btn;
  speechSynthesis.cancel();
  if (speaking) speaking.classList.remove('on');
  speaking = null;
  if (again) return;

  speaking = btn || null;
  if (btn) btn.classList.add('on');
  const lines = spoken(s).split(/(?<=[.!?…])\s+/);
  setTimeout(() => lines.forEach((line, i) => {
    const u = new SpeechSynthesisUtterance(line);
    if (voice) { u.voice = voice; u.lang = voice.lang; }
    u.rate = Number($('#rate').value || 0.95);
    if (i === lines.length - 1) {
      u.onend = () => {
        if (btn) btn.classList.remove('on');
        if (speaking === btn) speaking = null;
      };
    }
    speechSynthesis.speak(u);
  }), 60);
}

if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.addEventListener('voiceschanged', loadVoices);
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
   visit. Same fix as /grammar-notes/, /body-words/ and /jill/. */
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

/* Deep links. The page is built by script, so the browser has already looked
   for the id and failed by the time it exists; the jump is done here instead.
   Same decision as /grammar-notes/. */
function jumpToHash() {
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (!target) return;
  const bar = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--bar-h')) || 56;
  window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY - bar - 12);
  spy();
}

jumpToHash();
addEventListener('hashchange', jumpToHash);
