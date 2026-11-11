/* 字首字尾單字網 — the prefix and suffix webs on 國中單字 and 高中單字 (2026-11-11).

   Lewis asked for words grouped by prefix and suffix. On the opener, under the
   topics, a row of 字首 cards and a row of 字尾 cards (un- 不；相反 · 5). A card
   narrows the list to the words built with it, the way a topic does, so the
   cards, the quiz and the PDF all work on that group too. Above the list sits
   the web itself: the affix and its meaning, a line on how it works, and every
   word as base → word (happy → UNhappy), the affix part in colour. A pair jumps
   to its word below.

   The pairs are each page's affix.js, built by tools/affix/build.py from a
   hand-read list: a pair is there only if the parts still tell a student the
   meaning (uncle, repair, understand are not). Only words on that page show.

   Shared by both pages and loaded BEFORE vocab.js, which calls into it:
   affixHas(e) in pool(), affixWhere() in where(), affixWeb(list) at the top of
   the list, renderAffixes() on the opener, and #affix/<key> in openFromHash.
   It reads the page's S, ENTRIES, $, esc, render, goToList and jumpTo at call
   time; it declares nothing they declare. */

const AFX = Object.fromEntries((typeof AFFIX_LIST === 'undefined' ? [] : AFFIX_LIST).map(([key, label, kind, grp, zh, note, pairs]) =>
  [key, { key, label, kind, grp, zh, note, pairs: pairs.map(([id, base, w]) => ({ id, base, w })), ids: new Set(pairs.map(p => p[0])) }]));
const AFX_KIND = { pre: '字首', suf: '字尾' };
/* 字首字尾收集進度 (2026-11-11, with learn/wordgame.js): in 自學, how many of a
   group's words this student has marked 記住了 -- 「12/65」 on its card, a ✓
   and a filled card when the whole group is, 「已記住 12 / 65」 in the web and
   a ✓ on each known pair. 教學 shows the plain count: several students share
   that laptop. Called on every render(), so a mark shows at once. */
const afxKnown = a => typeof MARKS !== 'undefined' && S.mode === 'self' ? a.pairs.filter(p => MARKS[p.id] === 'k').length : 0;
let awAll = false;   // the web shows its first 24 pairs until 「全部顯示」

function affixHas(e) { return S.affix === 'all' || !AFX[S.affix] || AFX[S.affix].ids.has(e.id); }
function affixWhere() { const a = AFX[S.affix]; return a ? `${AFX_KIND[a.kind]} ${esc(a.label)}${a.grp ? '（' + esc(a.grp) + '）' : ''}` : ''; }
// what a suffix makes, as the heading over its cards and in the web: 變成名詞
const AFX_GRP = ['人', '名詞', '形容詞', '動詞', '副詞'];
const grpZh = g => g === '人' ? '變成「人」' : '變成' + g;

/* happy → UNhappy, agree → agreeMENT. A prefix's part is what is left in front
   of the base. A suffix's is its own spelling where the word ends with it --
   the label's forms, longest first: compute → computER, not computeR, though
   the e was compute's -- or more when the whole base is kept (considerATION),
   and otherwise whatever follows the longest start the two share. */
function affixSplit(a, p) {
  if (a.kind === 'pre') {
    const k = p.w.length - p.base.length;
    return p.w.endsWith(p.base) && k > 0 ? `<b>${esc(p.w.slice(0, k))}</b>${esc(p.w.slice(k))}` : esc(p.w);
  }
  const forms = a.label.split('/').flatMap(f => { f = f.trim().replace(/^-/, ''); return f.endsWith('(s)') ? [f.slice(0, -3) + 's', f.slice(0, -3)] : [f]; })
    .sort((x, y) => y.length - x.length);
  const f = forms.find(f => p.w.endsWith(f) && p.w.length > f.length);
  let shared = 0; while (shared < p.base.length && p.base[shared] === p.w[shared]) shared++;
  let i = f ? p.w.length - f.length : shared;
  // the whole base kept and more than the bare form added: consider → considerATION,
  // add → addITION -- but not a doubled letter: begin → beginnER
  if (f && shared === p.base.length && shared < i && p.w[shared] !== p.base[shared - 1]) i = shared;
  return `${esc(p.w.slice(0, i))}<b>${esc(p.w.slice(i))}</b>`;
}

function affixWeb(list) {
  const a = AFX[S.affix]; if (!a || S.q.trim()) return '';
  const byId = new Map(list.map(e => [e.id, e]));
  const pairs = a.pairs.filter(p => byId.has(p.id))
    .sort((x, y) => (byId.get(x.id).lv || 0) - (byId.get(y.id).lv || 0) || byId.get(x.id).n - byId.get(y.id).n);
  const shown = awAll ? pairs : pairs.slice(0, 24);
  return `<section class="aweb" aria-label="${AFX_KIND[a.kind]} ${esc(a.label)}">
    <div class="aw-hub">
      <span class="aw-kind">${AFX_KIND[a.kind]}${a.grp ? ' · ' + grpZh(a.grp) : ''}</span>
      <span class="aw-l">${esc(a.label)}</span>
      <span class="aw-zh">${esc(a.zh)}</span>
      ${afxKnown(a) ? `<span class="aw-got">已記住 ${afxKnown(a)} / ${a.pairs.length}${afxKnown(a) === a.pairs.length ? ' ✓' : ''}</span>` : ''}
    </div>
    <p class="aw-note">${esc(a.note)}</p>
    ${pairs.length ? `<div class="aw-pairs">${shown.map(p => `<button class="aw-p ${afxKnown(a) && MARKS[p.id] === 'k' ? 'known' : ''}" data-jump="${esc(p.id)}" aria-label="${esc(p.base)} 變成 ${esc(p.w)}，看這個字">
      <span class="aw-b">${esc(p.base)}<span class="aw-ar" aria-hidden="true">→</span></span>
      <span class="aw-d">${affixSplit(a, p)}</span>
      <span class="aw-m">${esc(byId.get(p.id).firstZh || '')}</span></button>`).join('')}</div>` : '<p class="aw-note">這個範圍裡沒有這一組的字。</p>'}
    <div class="aw-foot">
      ${pairs.length > shown.length ? `<button class="link" data-aw-more>全部顯示（${pairs.length} 個）</button>` : ''}
      <button class="link" data-affix-off>回到全部的字</button>
    </div>
  </section>`;
}

function renderAffixes() {
  const box = document.getElementById('affixes'); if (!box) return;
  const list = AFFIX_LIST.map(([k]) => AFX[k]);
  const row = (kind, grp) => list.filter(a => a.kind === kind && (grp == null || a.grp === grp)).map(a =>
    {
    const k = afxKnown(a), n = a.pairs.length, full = k === n;
    return `<button class="affix ${full ? 'full' : ''}" data-affix="${a.key}"${k ? ` aria-label="${esc(a.label)} ${esc(a.zh)}，已記住 ${k} / ${n}"` : ''}><span class="af-l">${esc(a.label)}</span><span class="af-zh">${esc(a.zh)}</span><span class="af-n">${k ? (full ? `✓ ${n}` : `${k}/${n}`) : n}</span></button>`;
  }).join('');
  box.innerHTML = `<p class="af-k">字首 <span>加在前面，多半改變意思</span></p><div class="af-row">${row('pre')}</div>` +
    `<p class="af-k">字尾 <span>加在後面，多半改變詞性</span></p>` +
    AFX_GRP.filter(g => list.some(a => a.grp === g)).map(g => `<p class="af-g">${grpZh(g)}</p><div class="af-row">${row('suf', g)}</div>`).join('');
  box.closest('section')?.querySelectorAll('.af-hide').forEach(el => { el.hidden = !list.length; });
}

function openAffix(key) {
  if (!AFX[key]) return false;
  S.view = 'list'; S.affix = key; S.scope = 'all'; if ('lesson' in S) S.lesson = 'all';   // 國中單字's 課次 S.topic = 'all'; $('#topic').value = 'all';
  S.letter = 'all'; $('#letter').value = 'all'; S.q = ''; $('#q').value = ''; S.shown = 40; awAll = false;
  render(); goToList();
  return true;
}

document.addEventListener('click', ev => {
  const t = ev.target.closest('button'); if (!t) return;
  if (t.dataset.affix) { openAffix(t.dataset.affix); return; }
  if (t.hasAttribute('data-affix-off')) { S.affix = 'all'; S.shown = 40; render(); goToList(); return; }
  if (t.hasAttribute('data-aw-more')) { awAll = true; render(); return; }
  if (t.dataset.jump) {
    const i = searchSort(pool()).findIndex(e => e.id === t.dataset.jump);
    if (i >= 0) jumpTo(i, true);
  }
});

(function () {
  const css = `
.band-sub { margin: -8px auto 18px; max-width: 34em; text-align: center; font: 15px/1.6 var(--font-zh); color: var(--muted); text-wrap: balance; }
.band-sub .af-en { font-family: var(--font-en); }
.affixes { display: grid; gap: 10px; }
.af-k { margin: 14px 0 0; font: 600 17px/1.4 var(--font-zh); color: var(--ink); text-align: center; }
.af-k span { margin-left: 8px; font-weight: 400; font-size: 14px; color: var(--muted); }
.af-g { margin: 4px 0 -2px; font: 600 13px/1.4 var(--font-zh); color: var(--muted); text-align: center; }
.af-row { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
.affix {
  display: inline-flex; align-items: baseline; gap: 8px; min-height: 44px; padding: 10px 18px;
  border: 0; border-radius: 980px; background: var(--card); color: var(--ink); cursor: pointer;
  font: 15px/1.2 var(--font-zh); letter-spacing: 0;
  transition: transform .2s cubic-bezier(.4, 0, .2, 1), box-shadow .2s cubic-bezier(.4, 0, .2, 1);
}
.affix .af-l { font: 600 17px/1 var(--font-en); color: var(--accent); }
.affix .af-zh { color: var(--ink); }
.affix .af-n { font: 500 13px/1 var(--font-ui); color: var(--muted); font-variant-numeric: tabular-nums; }
.affix.full { background: var(--ok-soft, var(--accent-soft)); }
.affix.full .af-n { color: var(--ok); font-weight: 600; }
.aw-got { margin-left: auto; font: 600 14px/1 var(--font-zh); color: var(--ok); }
.aw-p.known { position: relative; }
.aw-p.known::after { content: '✓'; position: absolute; top: 8px; right: 10px; font: 600 13px/1 var(--font-ui); color: var(--ok); }
@media (hover: hover) { .affix:hover { transform: scale(1.03); box-shadow: 0 8px 24px rgb(0 0 0 / .08); } }
.affix:active { transform: scale(.97); }
@media (max-width: 560px) { .af-row { gap: 8px; justify-content: flex-start; } .af-k, .af-g { text-align: left; } .af-k span { display: block; margin: 2px 0 0; } .affix { padding: 9px 14px; } }

.aweb { margin: 4px 0 22px; padding: 24px 22px 18px; border-radius: 18px; background: var(--card); }
.aw-hub { display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 14px; }
.aw-kind { flex-basis: 100%; font: 600 13px/1 var(--font-zh); color: var(--muted); }
.aw-l { font: 700 40px/1.05 var(--font-display); letter-spacing: -.01em; color: var(--accent); }
.aw-zh { font: 600 20px/1.3 var(--font-zh); color: var(--ink); }
.aw-note { margin: 10px 0 16px; font: 15px/1.6 var(--font-zh); color: var(--muted); }
.aw-pairs { display: grid; grid-template-columns: repeat(auto-fill, minmax(168px, 1fr)); gap: 8px; }
.aw-p {
  display: grid; gap: 2px; padding: 10px 12px; border: 0; border-radius: 12px; text-align: left; cursor: pointer;
  background: var(--tile); color: var(--ink); font: inherit;
}
@media (hover: hover) { .aw-p:hover { background: var(--accent-soft); } }
.aw-b { font: 14px/1.3 var(--font-en); color: var(--muted); }
.aw-ar { margin-left: 6px; }
.aw-d { font: 600 19px/1.25 var(--font-en); overflow-wrap: anywhere; }
.aw-d b { color: var(--accent); font-weight: 700; }
.aw-m { font: 13px/1.4 var(--font-zh); color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
body.zh-off .aw-m { display: none; }
.aw-foot { display: flex; flex-wrap: wrap; gap: 4px 18px; margin-top: 12px; }
.aw-foot .link { padding-inline: 0; font-family: var(--font-zh); }
@media (max-width: 560px) {
  .aweb { padding: 20px 16px 14px; border-radius: 14px; }
  .aw-l { font-size: 34px; }
  .aw-pairs { grid-template-columns: 1fr 1fr; }
  .aw-d { font-size: 17px; }
}`;
  const st = document.createElement('style'); st.textContent = css; document.head.append(st);
})();
