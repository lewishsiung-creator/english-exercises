/* Renders LESSON (content.js) and wires up the reveals.

   This page sits between the two kinds of page in this repo. It is a writing
   worksheet a student works through — at a desk, at home, or with a teacher
   beside them — so unlike the one-to-one adult pages, what gets typed here is
   kept. Everything else follows the same rules as the rest of the site:

   - The Chinese is the prompt and the English is the answer, which is the
     other way round from the reading pages. So the Chinese sentence in Part A
     is always visible, and the model English stays shut until it is asked for.
     The explanatory Chinese — notes, leads, sample translations — still hides
     behind the 中 chips and the 中文 switch in the bar.
   - Two steps before an answer: the hint, then the English. The hint is what a
     teacher says when a student is stuck — the word to reach for, the trap
     this sentence sets — and it is worth trying to get there without the
     answer.
   - Nothing is scored. After the answer opens, the page lists the words in the
     model sentence that the student's version did not use. That is a reading
     list, not a mark: no percentage, no right or wrong, and it says so when
     everything was covered.
   - What is typed is saved to this browser, and only to this browser. There is
     no account and nothing is uploaded. The teacher panel has the one button
     that wipes it.
   - The teacher panel is deliberately faint. It sits in the top bar and opens
     over the page rather than replacing it.
*/

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Escaped too, so any string here is also safe inside an attribute — the
    // model sentences carry quotation marks and several ride in data-say.
    .replace(/"/g, '&quot;');
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

function label(en, zh) {
  return `
    <h3 class="label"><span class="en">${text(en)}</span>
      <button class="zh-chip" title="顯示中文">中</button>
      <span class="zh">${text(zh)}</span></h3>`;
}

function head(p) {
  return `
    <h2 class="part-head" id="h-${p.id}">
      <span class="n">${text(p.n)}</span>
      <span class="titles"><span class="en">${text(p.en)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(p.zh)}</span></span>
    </h2>
    <div class="lead">${pair(p.leadEn, p.leadZh)}</div>`;
}

/* The two-step reveal, used by every part that has an answer behind it. The
   hint is optional — Part C and Part E go straight to the second button. */
function steps(opts = {}) {
  const hint = opts.hint === false ? '' : `
    <button class="step-btn" data-do="hint" aria-pressed="false">
      <span class="en">Hint</span><span class="zh-fixed">提示</span>
    </button>`;
  return `
    <div class="steps">
      ${hint}
      <button class="step-btn step-btn-go" data-do="answer" aria-pressed="false">
        <span class="en">${text(opts.answerEn || 'Show the English')}</span>
        <span class="zh-fixed">${text(opts.answerZh || '看答案')}</span>
      </button>
    </div>`;
}

function box(key, rows, placeholder) {
  return `<textarea class="write" rows="${rows}" data-key="${text(key)}"
    placeholder="${text(placeholder)}" spellcheck="true"></textarea>`;
}

function checklist(items, prefix) {
  return `
    <ul class="checks">
      ${items.map((c, i) => `
        <li><label>
          <input type="checkbox" class="chk" data-key="${prefix}${i}">
          <span class="chk-t"><span class="en">${text(c.en)}</span>
            <span class="zh-fixed">${text(c.zh)}</span></span>
        </label></li>`).join('')}
    </ul>`;
}

// ------------------------------------------------------------ word counting

const wordsIn = (s) => String(s).trim() ? String(s).trim().split(/\s+/).length : 0;

/* Function words are stripped before comparing, because "did you use *the*?"
   is not a lesson. What is left is the vocabulary and the structure words that
   carry the sentence — among, instead, such, because. */
const STOP = new Set(`a an the and or but so as of to in on at for from by with
  about into i me my we us our you your he she it its they them their this that
  these those is am are was were be been being do does did have has had not no
  there here then than too very just only`.trim().split(/\s+/));

/* Endings are forgiven in the student's favour. Rather than guess one true
   stem — where "pictures" reduces to "pictur" and "picture" does not, and the
   two never meet — every word offers up the handful of forms it might have
   come from, and a word counts as used if any of them matches. Over-forgiving
   on purpose: a wrongly listed word teaches nothing, a wrongly forgiven one
   costs a student nothing. */
function forms(w) {
  const out = [w];
  const add = (s) => { if (s.length > 1) out.push(s); };
  if (w.length > 4 && w.endsWith('ies')) add(`${w.slice(0, -3)}y`);
  if (w.length > 3 && w.endsWith('s')) add(w.slice(0, -1));
  if (w.length > 4 && w.endsWith('es')) add(w.slice(0, -2));
  if (w.length > 4 && w.endsWith('ed')) { add(w.slice(0, -1)); add(w.slice(0, -2)); }
  if (w.length > 5 && w.endsWith('ing')) { add(w.slice(0, -3)); add(`${w.slice(0, -3)}e`); }
  return out;
}

const tokens = (s) => (String(s).toLowerCase().match(/[a-z][a-z'’]*/g) || []);

/* Words in the model sentence that the student's version did not reach for.
   Deliberately one-directional: the page never comments on words the student
   used that the model did not, because those are often perfectly good. */
function missing(model, mine) {
  const had = new Set();
  tokens(mine).forEach((w) => forms(w).forEach((f) => had.add(f)));

  const out = [];
  const seen = new Set();
  tokens(model).forEach((w) => {
    const fs = forms(w);
    if (STOP.has(w) || fs.some((f) => had.has(f)) || fs.some((f) => seen.has(f))) return;
    fs.forEach((f) => seen.add(f));
    out.push(w);
  });
  return out;
}

// -------------------------------------------------------------------- parts

function buildEssay(p) {
  const paras = p.paras.map((para, pi) => {
    const prose = para.sentences.map((s) => s.en).join(' ');
    return `
      <div class="para para-${pi + 1}">
        <p class="para-label">
          <span class="tag">${text(para.label)}</span>
          <span class="zh-fixed">${text(para.labelZh)}</span>
          ${speakBtn(prose, 'say say-quiet')}
        </p>
        <p class="para-note">${text(para.noteZh)}</p>
        <ol class="es-list">
          ${para.sentences.map((s) => `
            <li class="es" data-zh>
              <p class="es-en">${text(s.en)}${speakBtn(s.en, 'say say-quiet')}</p>
              <p class="es-job"><span class="en">${text(s.jobEn)}</span>
                <span class="zh-fixed">${text(s.jobZh)}</span></p>
              <p class="zh">${text(s.zh)}</p>
            </li>`).join('')}
        </ol>
      </div>`;
  }).join('');

  const whole = p.paras.map((para) => para.sentences.map((s) => s.en).join(' '));
  const n = wordsIn(whole.join(' '));
  const note = (s) => text(s).replace('{n}', n);

  return `
    <section class="part essay" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}

      <div class="steps steps-wide">
        <button class="step-btn step-btn-go" data-do="structure" aria-pressed="false">
          <span class="en">${text(p.structureEn)}</span>
          <span class="zh-fixed">${text(p.structureZh)}</span>
        </button>
      </div>

      ${paras}

      ${label(p.proseEn, p.proseZh)}
      <p class="hint">${note(p.proseNoteEn)}
        <span class="hint-zh">${note(p.proseNoteZh)}</span></p>
      <div class="prose">
        ${whole.map((t) => `<p>${text(t)}</p>`).join('')}
        <p class="prose-say">${speakBtn(whole.join(' '))}
          <span class="prose-say-t">Read the whole essay aloud <span class="zh-fixed">整篇朗讀</span></span></p>
      </div>
    </section>`;
}

function buildTranslate(p) {
  const items = p.items.map((it, i) => {
    const n = i + 1;
    return `
      <li class="tr" id="${p.id}-${n}" data-model="${text(it.en)}">
        <div class="tr-q">
          <span class="tr-n">${n}</span>
          <p class="tr-zh">${text(it.zh)}</p>
        </div>

        ${box(`a${n}`, 2, 'Write your English here…  在這裡寫你的英文')}

        ${steps()}

        <div class="hintbox">
          <p class="keys">${it.keys.map((k) => `<span class="key">${text(k)}</span>`).join('')}</p>
          <p class="hint-text">${text(it.hint)}</p>
        </div>

        <div class="ansbox">
          <p class="ans-label">Model answer <span>參考答案</span></p>
          <p class="ans">${text(it.en)}${speakBtn(it.en, 'say say-quiet')}</p>
          <p class="notice" hidden></p>
        </div>
      </li>`;
  }).join('');

  return `
    <section class="part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}
      <p class="tally" id="tally-${p.id}" aria-live="polite"></p>
      <ol class="tr-list">${items}</ol>
    </section>`;
}

function buildParagraph(p) {
  return `
    <section class="part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}

      <div class="tr" data-model="${text(p.enLines.join(' '))}">
        <p class="zh-block">${text(p.zhText)}</p>

        ${box('b', 8, 'Write the whole paragraph in English…  在這裡寫出整段英文')}

        <p class="count" data-count-for="b"></p>

        ${steps({ answerEn: 'Show the paragraph', answerZh: '看整段答案' })}

        <div class="hintbox">
          <p class="hint-text">${text(p.hint)}</p>
        </div>

        <div class="ansbox">
          <p class="ans-label">Model answer <span>參考答案</span>
            ${speakBtn(p.enLines.join(' '), 'say say-quiet')}</p>
          <!-- One block, not one line per sentence: the shape of the paragraph
               is what Part B is asking for, and breaking it into lines would
               hand that away. Part A has the sentences separately already. -->
          <p class="ans ans-para">${text(p.enLines.join(' '))}</p>
          <p class="notice" hidden></p>
          ${label(p.checkEn, p.checkZh)}
          ${checklist(p.checks, 'chk.b.')}
        </div>
      </div>
    </section>`;
}

function buildPatterns(p) {
  return `
    <section class="part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}
      <ol class="pat-list">
        ${p.items.map((it, i) => `
          <li class="pat">
            <div class="pat-q"><span class="tr-n">${i + 1}</span>
              <p class="pat-zh">${text(it.zh)}</p></div>
            ${steps({ hint: false, answerEn: 'Show the pattern', answerZh: '看句型' })}
            <div class="ansbox">
              <p class="pat-en">${text(it.en)}</p>
              <div class="pat-eg pair" data-zh>
                <p class="en">${text(it.egEn)}${speakBtn(it.egEn, 'say say-quiet')}
                  <button class="zh-chip" title="顯示中文">中</button></p>
                <p class="zh">${text(it.egZh)}</p>
              </div>
            </div>
          </li>`).join('')}
      </ol>
    </section>`;
}

function buildVocab(p) {
  return `
    <section class="part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}
      ${p.groups.map((g) => `
        ${label(g.en, g.zh)}
        <ul class="cards">
          ${g.words.map((w) => `
            <li class="card" tabindex="0" role="button" aria-expanded="false">
              <p class="card-zh">${text(w.zh)}</p>
              <p class="card-en">${text(w.en)}${speakBtn(w.en)}</p>
            </li>`).join('')}
        </ul>`).join('')}
    </section>`;
}

function buildOpen(p) {
  return `
    <section class="part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}
      <ol class="tr-list">
        ${p.items.map((it, i) => {
          const n = i + 1;
          return `
            <li class="tr">
              <div class="tr-q">
                <span class="tr-n">${n}</span>
                <div>
                  <p class="tr-zh">${text(it.zh)}</p>
                  <p class="tr-en">${text(it.en)}${speakBtn(it.en, 'say say-quiet')}</p>
                </div>
              </div>

              <p class="starters-label">Ways in <span>可以這樣開頭</span></p>
              <ul class="starters">
                ${it.starters.map((s) => `<li>${text(s)}</li>`).join('')}
              </ul>

              ${box(`e${n}`, 4, 'Two or three sentences…  寫兩三句')}

              ${steps({ hint: false, answerEn: 'Show one possible answer', answerZh: '看參考答案' })}

              <div class="ansbox">
                <p class="ans-label">One possible answer <span>參考答案之一</span></p>
                <div class="ans pair" data-zh>
                  <p class="en">${text(it.sample)}${speakBtn(it.sample, 'say say-quiet')}
                    <button class="zh-chip" title="顯示中文">中</button></p>
                  <p class="zh">${text(it.sampleZh)}</p>
                </div>
              </div>
            </li>`;
        }).join('')}
      </ol>
    </section>`;
}

function buildWrite(p) {
  return `
    <section class="part write-part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}

      ${box('essay', 14, 'Paragraph one: the problem you choose.\n\nParagraph two: the robot you would design.')}

      <p class="count count-big" data-count-for="essay" data-target="${p.target}"></p>

      <p class="write-tools">
        <button class="say say-loud" data-say-key="essay">🔊</button>
        <span class="write-tools-t">Read my essay back to me
          <span class="zh-fixed">把我寫的唸給我聽——聽起來卡卡的句子，通常就是要改的句子</span></span>
      </p>

      ${label(p.checkEn, p.checkZh)}
      ${checklist(p.checks, 'chk.w.')}
    </section>`;
}

const BUILDERS = {
  essay: buildEssay,
  translate: buildTranslate,
  paragraph: buildParagraph,
  patterns: buildPatterns,
  vocab: buildVocab,
  open: buildOpen,
  write: buildWrite,
};

function buildCover() {
  const i = LESSON.intro;
  const t = LESSON.task;
  return `
    <header class="cover" id="top">
      <p class="kicker">${text(LESSON.kicker)}</p>
      <h1><span class="en">${text(LESSON.title)}</span>
        <button class="zh-chip" title="顯示中文">中</button>
        <span class="zh">${text(LESSON.titleZh)}</span></h1>

      ${pair(i.en, i.zh, 'cover-intro')}

      <div class="taskbox">
        <p class="taskbox-label">The question <span>題目方向</span></p>
        ${pair(t.en, t.zh, 'task-text')}
        <p class="taskbox-note">${text(t.noteZh)}</p>
      </div>

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
  return `
    <nav class="toc" aria-label="Parts">
      <p class="toc-head">Parts 練習</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t"><span class="en">Start</span><span class="zh">開始</span></span></a></li>
        ${LESSON.parts.map((p) => `
          <li><a href="#${p.id}" data-target="${p.id}"><span class="n">${text(p.n)}</span>
            <span class="t"><span class="en">${text(p.en)}</span>
            <span class="zh">${text(p.zh)}</span></span></a></li>`).join('')}
      </ul>
    </nav>`;
}

document.title = `${LESSON.title} · ${LESSON.titleZh}`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
LESSON.parts.forEach((p) => {
  const build = BUILDERS[p.kind];
  if (!build) throw new Error(`Part "${p.id}": no builder for kind "${p.kind}"`);
  doc.appendChild(el(build(p)));
});

// ------------------------------------------------------------------ storage

/* Two namespaces, cleared by different buttons. `rh.` is device settings — the
   voice, the speed, whether Chinese starts open — and survives everything.
   `rh.w.` is the student's own writing, and is what the teacher panel wipes. */
const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`rh.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`rh.${k}`, v); } catch { /* private mode */ } },
};

const work = {
  get(k) { try { return localStorage.getItem(`rh.w.${k}`) || ''; } catch { return ''; } },
  // An empty box is stored as nothing at all rather than as an empty string,
  // so a page nobody has written on leaves no trace on a shared computer.
  set(k, v) {
    try {
      if (v) localStorage.setItem(`rh.w.${k}`, v);
      else localStorage.removeItem(`rh.w.${k}`);
    } catch { /* private mode */ }
  },
  clear() {
    try {
      Object.keys(localStorage)
        .filter((k) => k.startsWith('rh.w.'))
        .forEach((k) => localStorage.removeItem(k));
    } catch { /* private mode */ }
  },
};

// ------------------------------------------------------------------ writing

/* A box that grows with what is in it. A fixed height either wastes the screen
   on one-line answers or hides the end of a paragraph, and neither is a thing
   to make someone fight while they are trying to write. */
function fit(ta) {
  ta.style.height = 'auto';
  ta.style.height = `${ta.scrollHeight + 2}px`;
}

function counts(key) {
  const ta = $(`.write[data-key="${key}"]`);
  const out = $(`.count[data-count-for="${key}"]`);
  if (!ta || !out) return;
  const n = wordsIn(ta.value);
  const target = Number(out.dataset.target || 0);
  // An empty box does not need to be told it is empty. Where there is a length
  // to hit, the target shows from the start — it is part of the task.
  out.textContent = target ? `${n} words · 目標約 ${target} 字`
    : n ? `${n} words · ${n} 字`
    : '';
  out.classList.toggle('count-near', Boolean(target && n >= target * 0.85));
}

/* How many of the eighteen have something in them. A count of what is done,
   not of what is right — the page has no opinion about that. */
function tally() {
  const part = LESSON.parts.find((p) => p.kind === 'translate');
  if (!part) return;
  const out = $(`#tally-${part.id}`);
  if (!out) return;
  const boxes = $$(`.write[data-key^="a"]`);
  const done = boxes.filter((b) => b.value.trim()).length;
  out.textContent = `${done} of ${boxes.length} written · 已寫 ${done} / ${boxes.length}`;
  out.classList.toggle('tally-done', done === boxes.length);
}

$$('.write').forEach((ta) => {
  ta.value = work.get(ta.dataset.key);
  fit(ta);
  counts(ta.dataset.key);
});
tally();

let saveTimer = 0;
doc.addEventListener('input', (e) => {
  const ta = e.target.closest('.write');
  if (!ta) return;
  fit(ta);
  counts(ta.dataset.key);
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => { work.set(ta.dataset.key, ta.value); tally(); }, 350);
});

// A tab away is a good moment to be sure it is written down.
doc.addEventListener('focusout', (e) => {
  const ta = e.target.closest('.write');
  if (ta) { work.set(ta.dataset.key, ta.value); tally(); }
});

$$('.chk').forEach((c) => {
  c.checked = work.get(c.dataset.key) === '1';
  c.addEventListener('change', () => work.set(c.dataset.key, c.checked ? '1' : '0'));
});

// Textareas start at their natural height; re-fit once the fonts have settled,
// since a font swap changes how many lines the text takes.
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => $$('.write').forEach(fit));
}
window.addEventListener('resize', () => $$('.write').forEach(fit));

// ------------------------------------------------------------------ reveals

/* The words in the model sentence the student did not use. Only shown once the
   answer is open and only when there is something to compare against — an
   empty box gets no comment, because "you missed all of them" is not news. */
function compare(item) {
  const out = $('.notice', item);
  if (!out) return;

  const model = item.dataset.model;
  const ta = $('.write', item);
  const mine = ta ? ta.value.trim() : '';

  if (!model || !mine) { out.hidden = true; return; }

  const gaps = missing(model, mine);
  out.hidden = false;
  out.innerHTML = gaps.length
    ? `<span class="notice-t">Words in the answer you did not use
         <span class="zh-fixed">參考答案裡你沒用到的字——不是錯，看看值不值得學起來</span></span>
       ${gaps.map((w) => `<span class="key">${text(w)}</span>`).join('')}`
    : `<span class="notice-t notice-ok">You used every word the answer leans on.
         <span class="zh-fixed">參考答案的關鍵字你都用到了。</span></span>`;
}

/* Two steps, and the second implies the first: the hint is the nudge, the
   English is the answer. Both toggle, so an item can be shut again. */
function reveal(item, what, on) {
  item.classList.toggle(what === 'answer' ? 'answered' : 'hinted', on);
  if (what === 'answer' && on) {
    item.classList.add('hinted');
    compare(item);
  }

  $$('.step-btn', item).forEach((b) => {
    const isOn = b.dataset.do === 'answer'
      ? item.classList.contains('answered')
      : item.classList.contains('hinted');
    b.classList.toggle('on', isOn);
    b.setAttribute('aria-pressed', String(isOn));
  });
}

// ------------------------------------------------------------------- clicks

/* One click handler for the whole document: every interactive part of the page
   is a button, a card, a checkbox or a paired line. */
doc.addEventListener('click', (e) => {
  const t = e.target;

  // ---- speak
  const say = t.closest('.say');
  if (say) {
    e.stopPropagation();
    if (say.dataset.sayKey) {
      const ta = $(`.write[data-key="${say.dataset.sayKey}"]`);
      speak(ta && ta.value.trim() ? ta.value : 'There is nothing written yet.');
    } else {
      speak(say.dataset.say);
    }
    return;
  }

  // ---- reveal Chinese for one line
  const chip = t.closest('.zh-chip');
  if (chip) {
    e.stopPropagation();
    // Climb to the nearest ancestor that actually holds the Chinese, whatever
    // the block wrapped it in — a .pair, a heading, an essay sentence.
    let host = chip.parentElement;
    while (host && !host.querySelector('.zh')) host = host.parentElement;
    if (host) host.classList.toggle('open');
    return;
  }

  // ---- the essay's structure switch
  const struct = t.closest('[data-do="structure"]');
  if (struct) {
    const on = !struct.classList.contains('on');
    struct.closest('.essay').classList.toggle('structure', on);
    struct.classList.toggle('on', on);
    struct.setAttribute('aria-pressed', String(on));
    return;
  }

  // ---- hint / answer
  const step = t.closest('.step-btn');
  if (step) {
    const item = step.closest('.tr, .pat');
    reveal(item, step.dataset.do, !step.classList.contains('on'));
    return;
  }

  // ---- vocabulary card
  const card = t.closest('.card');
  if (card) {
    const open = card.classList.toggle('open');
    card.setAttribute('aria-expanded', String(open));
    return;
  }

  // ---- a checkbox label looks after itself; anything else paired opens
  if (t.closest('.checks')) return;

  const line = t.closest('.pair[data-zh], .es[data-zh]');
  if (line && !t.closest('button, textarea')) { line.classList.toggle('open'); return; }
});

// Cards are focusable, so keep them operable from the keyboard.
doc.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const hit = e.target.closest('.card');
  if (hit) { e.preventDefault(); hit.click(); }
});

// -------------------------------------------------------------------- speech

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
  speak('My robot helper should be calm, patient, and good at listening.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('Many teenagers experience sudden changes in emotion.');
});
$('#rate').value = store.get('rate', '0.95');

// --------------------------------------------------------------------- panel

const panel = $('#panel');
const panelBtn = $('#panelToggle');

function setPanel(open) {
  panel.hidden = !open;
  panelBtn.setAttribute('aria-expanded', String(open));
}

panelBtn.addEventListener('click', () => setPanel(panel.hidden));
$('#panelClose').addEventListener('click', () => setPanel(false));

const zhToggle = $('#zhToggle');

function setAllZh(on) {
  document.body.classList.toggle('zh-all', on);
  zhToggle.setAttribute('aria-pressed', String(on));
  $('#zhAll').checked = on;
  store.set('zh', on ? '1' : '0');
}

setAllZh(store.get('zh', '0') === '1');
zhToggle.addEventListener('click', () => setAllZh(!document.body.classList.contains('zh-all')));
$('#zhAll').addEventListener('change', (e) => setAllZh(e.target.checked));

function openAll(on) {
  $$('.tr, .pat').forEach((item) => {
    if ($('.step-btn', item)) reveal(item, 'answer', on);
    if (!on) reveal(item, 'hint', false);
  });
  $$('.card').forEach((c) => {
    c.classList.toggle('open', on);
    c.setAttribute('aria-expanded', String(on));
  });
  const essay = $('.essay');
  essay.classList.toggle('structure', on);
  const sb = $('[data-do="structure"]');
  sb.classList.toggle('on', on);
  sb.setAttribute('aria-pressed', String(on));
  setPanel(false);
}

$('#showAll').addEventListener('click', () => openAll(true));
$('#hideAll').addEventListener('click', () => openAll(false));

/* The only destructive control on the page, so it asks — a student who has
   just written eighteen sentences and an essay should not lose them to a
   mis-tap on a phone. */
$('#clearWork').addEventListener('click', () => {
  const ok = confirm('Clear everything typed on this page?\n\n確定要清除這一頁上打過的所有內容嗎？\n（十八句翻譯、整段、延伸思考、你的作文。無法復原。）');
  if (!ok) return;
  work.clear();
  $$('.write').forEach((ta) => { ta.value = ''; fit(ta); counts(ta.dataset.key); });
  $$('.chk').forEach((c) => { c.checked = false; });
  $$('.notice').forEach((n) => { n.hidden = true; });
  tally();
  setPanel(false);
});

// -------------------------------------------------------------------- chrome

const links = new Map($$('.toc a').map((a) => [a.dataset.target, a]));

const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((a) => a.classList.remove('here'));
    const a = links.get(e.target.id);
    if (a) { a.classList.add('here'); a.scrollIntoView({ block: 'nearest' }); }
  });
}, { rootMargin: '-72px 0px -70% 0px' });

[$('#top'), ...$$('.part')].forEach((s) => spy.observe(s));

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
  // Escape inside a textarea is for stepping out of it, not for closing things.
  if (e.target.closest('.write')) { e.target.blur(); return; }
  closeNav();
  setPanel(false);
  speechSynthesis.cancel();
});

// Belt and braces: a phone can kill the tab without a focusout ever firing.
window.addEventListener('pagehide', () => {
  $$('.write').forEach((ta) => work.set(ta.dataset.key, ta.value));
});
