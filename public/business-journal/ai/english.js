/* 英文口說複習教材 — the English half of a discussion, laid out.

   Shared by every discussion folder that has one. It reads ENGLISH from
   <id>/english/content.js, SESSION from <id>/content.js and AI_NOTES from
   ../sessions.js.

   Two rules this file enforces rather than merely follows:

   1. **Strengths come before corrections, always.** Each student's section
      opens with what they did well and only then shows their sentences. That
      is the order in content.js and the renderer does not offer another.

   2. **An Original is never presented as a quotation.** It comes from an
      automatic transcript, so the page labels it 課堂原句（逐字稿）, says once at
      the top and again under each set where it came from, and marks the
      Improved line as a rewrite. The pairs are built as a <dl>, not a
      blockquote, for the same reason.

   English leads here, unlike the write-up next door — this half IS the
   English — but the Chinese stays visible, because they read it alone.

   The quiz keeps nothing. No storage, no score carried anywhere; a reload is
   the reset, like every other adult page in this repo.
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

const N = AI_NOTES.sessions.findIndex((s) => s.id === ENGLISH.id) + 1;
if (!N) throw new Error(`${ENGLISH.id} is not in sessions.js`);

const doc = $('#doc');

function part(n, zh, en) {
  return `<h2 class="ai-part" id="p${n}"><span class="ai-part-n">${n}</span>
    <span class="ai-part-t">${text(zh)}<em lang="en">${text(en)}</em></span></h2>`;
}

// ------------------------------------------------------------------ cover

doc.appendChild(el(`
  <header class="cover" id="top">
    <p class="kicker"><a class="kicker-up" href="../../">${text(AI_NOTES.titleZh)}</a>
      <span class="kicker-sep" aria-hidden="true">·</span> No. ${N}</p>
    <h1 class="ai-h1">${text(ENGLISH.titleZh)}<span lang="en">${text(ENGLISH.titleEn)}</span></h1>
    <p class="ai-meta"><span>${text(ENGLISH.deckZh)}</span></p>
    <p class="ai-lead">${text(ENGLISH.introZh)}</p>
    <ol class="en-toc">
      ${ENGLISH.containsZh.map((c) => `<li>${text(c)}</li>`).join('')}
    </ol>
    <p class="en-caveat">${text(ENGLISH.fromTranscriptZh)}</p>
    <p class="en-back"><a href="../">← 回到這次討論的記錄<em lang="en">Back to the write-up</em></a></p>
  </header>`));

// ------------------------------------------------------- one student each

ENGLISH.students.forEach((s, si) => {
  const n = si + 1;
  doc.appendChild(el(`
    <section class="ai-sec en-student" aria-labelledby="p${n}">
      ${part(n, `${s.name}：口說回顧`, `${s.name}'s speaking review`)}
      <p class="en-topics" lang="en">${text(s.topicsEn)}</p>

      <h3 class="en-sub">做得好的地方<em lang="en">What ${text(s.name)} did well</em></h3>
      <ol class="str-list">
        ${s.strengths.map((t) => `
          <li class="str">
            <p class="str-h"><span lang="en">${text(t.en)}</span><em>${text(t.zh)}</em></p>
            <p class="str-b">${text(t.body)}</p>
            ${t.eg ? `<p class="str-eg"><span lang="en">“${text(t.eg)}”</span>${
              t.egNoteZh ? `<em>${text(t.egNoteZh)}</em>` : ''}</p>` : ''}
          </li>`).join('')}
      </ol>
      <p class="str-sum"><span lang="en">${text(s.overallEn)}</span>${text(s.overallZh)}</p>

      <h3 class="en-sub">課堂原句與自然說法<em lang="en">Original vs. improved</em></h3>
      ${s.sets.map((set) => `
        <div class="en-set">
          <p class="en-set-h"><span lang="en">${text(set.en)}</span><em>${text(set.zh)}</em></p>
          <ol class="pair-list">
            ${set.pairs.map((p) => `
              <li class="pr2">
                <p class="pr2-about">${text(p.aboutZh)}<span class="pr2-at">${text(p.at)}</span></p>
                <dl class="pr2-dl">
                  <dt>課堂原句<em lang="en">As said</em></dt>
                  <dd class="pr2-was" lang="en">${text(p.was)}</dd>
                  ${p.helpEn ? `
                    <dt>老師補上的字<em lang="en">Teacher's word</em></dt>
                    <dd class="pr2-help"><span lang="en">${text(p.helpEn)}</span></dd>` : ''}
                  <dt>自然的說法<em lang="en">More natural</em></dt>
                  <dd class="pr2-now" lang="en">${text(p.now)}</dd>
                  <dt>中文<em lang="en">In Chinese</em></dt>
                  <dd class="pr2-zh">${text(p.zh)}</dd>
                </dl>
                <p class="pr2-pt"><span lang="en">Learning point</span>${text(p.point)}</p>
              </li>`).join('')}
          </ol>
        </div>`).join('')}
      <p class="ai-foot">${text(s.sourceZh)}　${text(ENGLISH.fromTranscriptZh)}</p>

      <h3 class="en-sub">接下來的重點<em lang="en">What to work on next</em></h3>
      <ul class="pri-list">
        ${s.priorities.map((p) => `
          <li><span lang="en">${text(p.en)}</span><em>${text(p.zh)}</em></li>`).join('')}
      </ul>
      <p class="en-goal"><span>目標</span>${text(s.goalZh)}</p>
    </section>`));
});

// -------------------------------------------------------- shared ground

doc.appendChild(el(`
  <section class="ai-sec" aria-labelledby="p3">
    ${part(3, '兩個人共同的方向', 'What you both need')}
    <p class="ai-note">${text(ENGLISH.commonLeadZh)}</p>
    <div class="tech-wrap">
      <table class="tech en-common">
        <thead>
          <tr><th scope="col">Speaking skill 口說能力</th><th scope="col">Gary</th><th scope="col">Minnie</th></tr>
        </thead>
        <tbody>
          ${ENGLISH.common.map((c) => `
            <tr>
              <th scope="row"><span lang="en">${text(c.en)}</span><em>${text(c.zh)}</em></th>
              <td>${text(c.gary)}</td>
              <td>${text(c.minnie)}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <h3 class="en-sub">實用商務句型<em lang="en">Useful expressions</em></h3>
    <ul class="say-list">
      ${ENGLISH.expressions.map((e) => `
        <li><span lang="en">${text(e.en)}</span><em>${text(e.zh)}</em></li>`).join('')}
    </ul>

    <h3 class="en-sub">AI 實用詞彙<em lang="en">AI vocabulary</em></h3>
    <ul class="say-list say-list-short">
      ${ENGLISH.vocab.map((v) => `
        <li><span lang="en">${text(v.en)}</span><em>${text(v.zh)}</em></li>`).join('')}
    </ul>
  </section>`));

// ------------------------------------------------------- speaking tasks

doc.appendChild(el(`
  <section class="ai-sec" aria-labelledby="p4">
    ${part(4, '口說練習', 'Speaking practice')}
    <ol class="task-list">
      ${ENGLISH.tasks.map((t) => `
        <li class="task2">
          <p class="task2-h"><span class="task2-who">${text(t.who)}</span>
            <span class="task2-min">${text(t.minutes)} 秒</span></p>
          <p class="task2-q" lang="en">${text(t.askEn)}</p>
          <p class="task2-qzh">${text(t.askZh)}</p>
          <div class="task2-model">
            <p class="task2-lab">參考範例<em lang="en">Sample answer</em></p>
            ${t.model.map((m) => `<p lang="en">${text(m)}</p>`).join('')}
          </div>
          <p class="task2-aim">${text(t.aimZh)}</p>
        </li>`).join('')}
    </ol>
  </section>`));

// ---------------------------------------------------------------- quiz

doc.appendChild(el(`
  <section class="ai-sec" aria-labelledby="p5">
    ${part(5, '小測驗', 'Quick check')}
    <p class="ai-note">${text(ENGLISH.quizLeadZh)}</p>
    <ol class="qz-list">
      ${ENGLISH.quiz.map((q, i) => `
        <li class="qz" data-answer="${q.answer}">
          <p class="qz-q">${text(q.zh)}</p>
          <ul class="qz-opts" role="group" aria-label="第 ${i + 1} 題的選項">
            ${q.options.map((o, oi) => `
              <li><button class="qz-opt" type="button" data-i="${oi}" lang="en">${text(o)}</button></li>`).join('')}
          </ul>
          <p class="qz-say" aria-live="polite"></p>
        </li>`).join('')}
    </ol>
    <div class="qz-foot">
      <p class="qz-count" id="qzCount" aria-live="polite"></p>
      <button class="pr-copy qz-reset" type="button" id="qzReset">重新作答</button>
    </div>
  </section>`));

// ------------------------------------------------------ homework, last word

doc.appendChild(el(`
  <section class="ai-sec" aria-labelledby="p6">
    ${part(6, '課後作業', 'Homework')}
    <ol class="hw-list">
      ${ENGLISH.homework.map((h) => `
        <li><span lang="en">${text(h.en)}</span><em>${text(h.zh)}</em></li>`).join('')}
    </ol>

    <h3 class="en-sub">給兩位的課後回饋<em lang="en">Final feedback</em></h3>
    ${ENGLISH.feedback.map((f) => `
      <div class="fb">
        <p class="fb-who">${text(f.who)}</p>
        ${f.en.map((p) => `<p class="fb-en" lang="en">${text(p)}</p>`).join('')}
        <p class="fb-zh">${text(f.zh)}</p>
      </div>`).join('')}

    <div class="en-close">
      <p class="en-close-h"><span lang="en">${text(ENGLISH.closing.en)}</span><em>${text(ENGLISH.closing.zh)}</em></p>
      ${ENGLISH.closing.body.map((b) => `<p>${text(b)}</p>`).join('')}
    </div>
  </section>`));

// ------------------------------------------------------------------ chrome

document.title = `${ENGLISH.titleZh} — ${AI_NOTES.titleZh}`;
$('.bar-title').innerHTML =
  `${text(AI_NOTES.titleZh)} <span lang="en">${text(AI_NOTES.title)}</span>`;

/* The quiz. One answer per question, right or wrong said once and plainly, and
   nothing kept: no score, no storage, no total carried off the page. The count
   says how many have been answered, not how many are right — this is a check
   for the person taking it, not a mark. */
const QZ = $$('.qz');
const qzCount = $('#qzCount');

function sayCount() {
  const done = QZ.filter((q) => q.classList.contains('done')).length;
  qzCount.textContent = `已作答 ${done} / ${QZ.length}`;
}
sayCount();

doc.addEventListener('click', (e) => {
  const opt = e.target.closest('.qz-opt');
  if (opt) {
    const qz = opt.closest('.qz');
    if (qz.classList.contains('done')) return;       // one answer each
    const right = Number(qz.dataset.answer);
    const picked = Number(opt.dataset.i);
    qz.classList.add('done');
    $$('.qz-opt', qz).forEach((b) => {
      b.disabled = true;
      if (Number(b.dataset.i) === right) b.classList.add('right');
      else if (Number(b.dataset.i) === picked) b.classList.add('wrong');
    });
    $('.qz-say', qz).textContent = picked === right ? '答對了' : '正確答案已標出';
    sayCount();
    return;
  }

  if (e.target.closest('#qzReset')) {
    QZ.forEach((qz) => {
      qz.classList.remove('done');
      $$('.qz-opt', qz).forEach((b) => {
        b.disabled = false;
        b.classList.remove('right', 'wrong');
      });
      $('.qz-say', qz).textContent = '';
    });
    sayCount();
    QZ[0].scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
});
