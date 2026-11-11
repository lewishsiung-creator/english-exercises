/* 中翻英閃卡 and 說一句自己的話 — two additions to the flashcards on 國中單字
   and 高中單字 (2026-11-11).

   Lewis asked, after a talk on what the research says works for vocabulary,
   for the two things the cards did not do yet:

   1. 中→英. The cards only went English → Chinese, which trains knowing a word
      when you see it. Chinese → English is harder and trains being able to say
      and write it (Webb 2009). A switch above the card, 英→中 / 中→英,
      remembered on this device. On a 中→英 card the front is the word's
      meanings with their parts of speech; 「給我提示」 shows an example with
      the word gapped to its first letter (I a____ with you.) -- English inside
      a meaning is gapped the same way; 翻面 shows the
      word, says it, and gives the usual back. A word with no Chinese keeps
      the English front.

   2. 說一句自己的話. Using a word in a sentence of your own fixes it better
      than reading an example (Laufer & Hulstijn's involvement load). On every
      card's back, under the examples: a prompt (用 agree 說一句和你家人或朋友
      有關的話), 「說出聲音來，不用寫」, and 「換一個題目」. Spoken only -- no
      input box, nothing checked -- so it works the same in 自學 and as the
      teacher's cue in 教學.

   Loaded BEFORE vocab.js, which calls cwSeg() in the card's top bar,
   cwZhFront(e) / cwFrontHTML(e) for the front, cwOwnHTML(e) on the back and
   cwAfter(e) after a card is drawn. It reads the page's store, esc, say,
   renderCards, D and S at call time; it declares nothing they declare. */

const CW = { dir: null, hintFor: '', own: 0, said: '' };
function cwDir() { if (CW.dir == null) CW.dir = store.get('carddir', 'en') === 'zh' ? 'zh' : 'en'; return CW.dir; }

function cwSeg() {
  const zh = cwDir() === 'zh';
  return `<div class="seg cw-dir" role="group" aria-label="閃卡方向">
    <button data-cwdir="en" aria-pressed="${!zh}">英→中</button><button data-cwdir="zh" aria-pressed="${zh}">中→英</button></div>`;
}

const cwZhFront = e => cwDir() === 'zh' && e.se.some(s => s.z);
const cwPos = p => (typeof POSZH !== 'undefined' && POSZH[p]) || p || '';

/* agree -> a____. The front's meanings get the same: the lists write English
   into them (agreement 同意；協議, 演員（actress 指女演員）, 許多的（= lots）),
   and that would give the word away. A two-letter word is all gap; a lone
   letter stays (T恤). */
const cwMask = s => s.replace(/[A-Za-z][A-Za-z'-]*/g, t => t.length === 1 ? t : t.length === 2 ? t.replace(/[A-Za-z]/g, '_') : t[0] + t.slice(1).replace(/[A-Za-z]/g, '_'));

// the first example with the word marked once: I *agree* with you. -> I a____ with you.
function cwHintEx(e) {
  for (const x of e.x) {
    const m = x.en.match(/\*([^*]+)\*/g);
    if (m && m.length === 1) {
      const ans = m[0].slice(1, -1);
      return { en: x.en.replace(m[0], '\u0000'), gap: ans.length <= 2 ? ans.replace(/[A-Za-z]/g, '_') : cwMask(ans), zh: x.zh };   // a, an, I: no first letter
    }
  }
  return null;
}

function cwFrontHTML(e) {
  const hint = cwHintEx(e);
  const open = hint && CW.hintFor === e.id;
  return `<div class="front cw-zh">
    <span class="cw-k">說出英文</span>
    <div class="cw-se">${e.se.filter(s => s.z).map(s =>
      `<div class="cw-s">${s.p ? `<span class="cw-p">${esc(cwPos(s.p))}</span>` : ''}<span class="cw-z">${esc(cwMask(s.z))}</span></div>`).join('')}</div>
    ${open ? `<div class="cw-hint"><div class="cw-en">${esc(hint.en).replace('\u0000', `<span class="cw-gap">${esc(hint.gap)}</span>`)}</div>${hint.zh ? `<div class="cw-hz">${esc(hint.zh)}</div>` : ''}</div>`
      : hint ? `<button class="link" id="cwhint">給我提示</button>` : ''}
  </div>`;
}

const CW_PROMPTS = [
  w => `用 <b>${w}</b> 說一句和你自己有關的話。`,
  w => `用 <b>${w}</b> 說一句你這個禮拜真的可能會說的話。`,
  w => `用 <b>${w}</b> 說一句和你家人或朋友有關的話。`,
  w => `用 <b>${w}</b> 說一句和學校、工作或興趣有關的話。`,
  w => `用 <b>${w}</b> 問別人一個問題。`,
  w => `用 <b>${w}</b> 說一件你上一次遇到的事。`,
];
// the same card opens on the same prompt; 換一個題目 moves on from there
const cwHash = id => [...id].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

function cwOwnHTML(e) {
  const p = CW_PROMPTS[(cwHash(e.id) + CW.own) % CW_PROMPTS.length];
  return `<div class="cw-own">
    <p class="cw-ok">說一句自己的話</p>
    <p class="cw-q">${p(e.sayAs.split(/, /).map(esc).join('</b> 或 <b>'))}</p>
    <p class="cw-tip">說出聲音來，不用寫。想不到的話，先把上面的例句換幾個字也可以。</p>
    <button class="link" id="cwnext">換一個題目</button>
  </div>`;
}

// a 中→英 card says its word once when it is turned over
function cwAfter(e) {
  if (!e || !D.flipped || !cwZhFront(e)) return;
  const k = e.id + ':' + D.i;
  if (CW.said !== k) { CW.said = k; say(e.sayAs); }
}

document.addEventListener('click', ev => {
  const t = ev.target.closest('button'); if (!t) return;
  if (t.dataset.cwdir) { CW.dir = t.dataset.cwdir; store.set('carddir', CW.dir); D.flipped = false; renderCards(); return; }
  if (t.id === 'cwhint') { const e = D.deck[D.i]; if (e) CW.hintFor = e.id; renderCards(); return; }
  if (t.id === 'cwnext') { CW.own++; renderCards(); }
});

(function () {
  const css = `
.setbar .seg.cw-dir { margin-right: 0; }
.card .front.cw-zh { gap: 14px; }
.cw-k { font: 600 13px/1 var(--font-zh); color: var(--muted); letter-spacing: .08em; }
.cw-se { display: grid; gap: 8px; justify-items: center; }
.cw-s { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; justify-content: center; }
.cw-p { font: 600 13px/1 var(--font-zh); color: var(--muted); padding: 5px 9px; border-radius: 980px; background: var(--tile); }
.cw-z { font: 700 clamp(28px, 5.4vw, 44px)/1.3 var(--font-zh); color: var(--ink); text-wrap: balance; }
.cw-hint { max-width: 32em; padding: 12px 16px; border-radius: 14px; background: var(--tile); text-align: center; }
.cw-en { font: 19px/1.5 var(--font-en); }
.cw-gap { font-weight: 700; color: var(--accent); letter-spacing: .12em; }
.cw-hz { margin-top: 4px; font: 14px/1.5 var(--font-zh); color: var(--muted); }
.cw-own { margin-top: 22px; padding: 16px 18px 10px; border-radius: 14px; background: var(--accent-soft); }
.cw-ok { margin: 0; font: 600 13px/1.3 var(--font-zh); color: var(--accent); letter-spacing: .06em; }
.cw-q { margin: 6px 0 2px; font: 600 18px/1.5 var(--font-zh); color: var(--ink); }
.cw-q b { font-family: var(--font-en); }
.cw-tip { margin: 0; font: 14px/1.6 var(--font-zh); color: var(--muted); }
.cw-own .link { padding-inline: 0; font-family: var(--font-zh); }
@media (max-width: 560px) { .cw-z { font-size: 26px; } .cw-own { padding: 14px 14px 8px; } }`;
  const st = document.createElement('style'); st.textContent = css; document.head.append(st);
})();
