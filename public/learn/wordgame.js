/* 單字遊戲 — the 遊戲 view on 國中單字 and 高中單字 (2026-11-11).

   Lewis: 「Let's gamify the vocab pages」. The pages already had the six from
   2026-11-08 (熟練度 dots, the practice week, 課次收集冊, 搭配詞挑戰, 老師指定
   任務, 程度檢測). Of the new ones offered he chose:

   1. 字首字尾組字 -- "agree + ? = 同意；協議（變成名詞）", pick the affix from
      four. The pairs are the hand-read ones in the page's affix.js. Wrong
      choices are built so they cannot also be right: a suffix's distractors
      make a different part of speech (人 and 名詞 count as one), a prefix's
      mean something else (un-/dis-/in-/mis-, under-/sub-, over-/out- are
      families), and no two options share a label (-al, -y, -ly, in- are two
      affixes each). A wrong pick wobbles and says what that affix does.
   2. 配對翻牌 -- six words, twelve face-down tiles, English and Chinese; turn
      two, a pair stays up. The English says itself when turned.
   3. 字首字尾收集進度 -- in learn/affixweb.js, not here.

   The house rules hold: nothing is timed or scored, nothing ends in failure,
   and the end of a round lists the words worth another look (with 「標成還不
   熟」 in 自學) instead of a mark. Both games draw from the range the page is
   set to -- level, topic, letter, search, affix group, 國中's lesson -- like
   the cards and the quiz.

   Loaded BEFORE vocab.js, whose render() calls renderGame() for S.view
   'game'. Reads the page's S, ENTRIES, MARKS, store, esc, say, sayBtn,
   shuffle, pool, deckKey, isDue, markWord, $ and goToWork at call time, and
   AFX / affixSplit / grpZh from learn/affixweb.js, cwMask from
   learn/cardway.js. */

const G = { kind: null, key: '', b: null, m: null };
const gmKind = () => G.kind || (G.kind = store.get('game', 'build') === 'match' ? 'match' : 'build');

/* ---------- 字首字尾組字 ---------- */
const GM_FAM = { 人: 'n', 名詞: 'n', 形容詞: 'adj', 動詞: 'v', 副詞: 'adv' };
const GM_PRE_FAM = { un: 'not', dis: 'not', 'in-not': 'not', mis: 'not', under: 'below', sub: 'below', over: 'beyond', out: 'beyond' };
// -ant/-ent makes people (assistant) and adjectives (pleasant) both: as the answer it
// asks for either and takes no noun or adjective distractor; it is never a distractor
const GM_NO_DISTRACT = new Set(['ant']);
const gmFams = a => a.kind === 'pre' ? [GM_PRE_FAM[a.key] || a.key] : a.key === 'ant' ? ['n', 'adj'] : [GM_FAM[a.grp] || a.grp];
const gmSame = (x, y) => gmFams(x).some(f => gmFams(y).includes(f));
const gmWant = a => a.key === 'ant' ? '變成人或形容詞' : grpZh(a.grp);

// what the derived word means: its own sense when the entry holds two (agree(ment)'s
// "agreement 同意；協議"), with any English left in it gapped
function gmMeaning(p) {
  const e = ENTRIES.find(x => x.id === p.id); if (!e) return '';
  const s = e.se.find(s => s.z && s.z.toLowerCase().includes(p.w.toLowerCase()));
  const z = s ? s.z.replace(new RegExp(p.w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), '').replace(/^[\s：:]+/, '').trim() : e.firstZh;
  return typeof cwMask === 'function' ? cwMask(z) : z;
}

function gmBuildRound() {
  const ids = new Set(pool().map(e => e.id));
  const groups = Object.values(AFX).filter(a => S.affix === 'all' || a.key === S.affix);
  const seen = new Set();
  const qs = shuffle(groups.flatMap(a => a.pairs.filter(p => ids.has(p.id)).map(p => ({ a, p }))))
    .filter(q => !seen.has(q.p.id) && seen.add(q.p.id)).slice(0, 10);
  // wrong options come from every affix, not only this page's (國中 has 18)
  const all = typeof AFFIX_ALL === 'undefined' ? Object.values(AFX) : AFFIX_ALL.map(([key, label, kind, grp, zh]) => ({ key, label, kind, grp, zh }));
  return qs.map(({ a, p }) => {
    // a label any affix of the answer's family wears is never a wrong option: -y makes nouns
    // and adjectives, so for honor + ? = 榮譽的 an -y would be the other -y, but still -y
    const labels = new Set(all.filter(o => o.kind === a.kind && gmSame(o, a)).map(o => o.label));
    const pickable = shuffle(all.filter(o => o.kind === a.kind && !gmSame(o, a) && !GM_NO_DISTRACT.has(o.key) && !labels.has(o.label)));
    const wrong = [];
    for (const o of pickable) { if (!labels.has(o.label)) { labels.add(o.label); wrong.push(o); } if (wrong.length === 3) break; }
    return { a, p, z: gmMeaning(p), opts: shuffle([a, ...wrong]), tried: new Set(), solved: false };
  });
}

/* A wrong affix can still make a real word, only another one: create + -ive is
   creative, able + dis- is disable. The meaning and part of speech in the
   question rule it out, and the wobble says what was made: 「creative 是另一個字：
   有創意的」. Only words on this page are known. */
let GM_WORDS = null;
function gmRealWord(o, base) {
  if (!GM_WORDS) { GM_WORDS = new Map(); ENTRIES.forEach(e => e.sayAs.toLowerCase().split(/, /).forEach(w => GM_WORDS.has(w) || GM_WORDS.set(w, e))); }
  const b = base.toLowerCase();
  for (const f of o.label.split('/').map(f => f.trim().replace(/-/g, '').replace('(s)', ''))) {
    const cs = o.kind === 'pre' ? [f + b] : [b + f, b.replace(/e$/, '') + f, b.replace(/y$/, 'i') + f];
    for (const c of cs) if (GM_WORDS.has(c)) return { w: c, z: GM_WORDS.get(c).firstZh };
  }
  return null;
}

function gmBuildHTML() {
  const B = G.b;
  if (!B.qs.length) return `<p class="empty">這個範圍裡沒有用字首字尾組成的字。<br>換成「全部」，或從開頭的字首字尾卡選一組。</p>`;
  if (B.i >= B.qs.length) return gmEndHTML(B.qs.filter(q => q.missed).map(q => q.p.id), '這一輪組完了 ✓', '這幾個字第一次沒選對：');
  const q = B.qs[B.i], a = q.a, pre = a.kind === 'pre';
  const blank = `<span class="gm-q ${q.solved ? 'on' : ''}">${q.solved ? esc(a.label) : '？'}</span>`;
  const plus = '<span class="gm-is" aria-hidden="true">+</span>';
  const eq = pre ? `${blank}${plus}<span class="gm-base">${esc(q.p.base)}</span>` : `<span class="gm-base">${esc(q.p.base)}</span>${plus}${blank}`;
  const why = o => {
    const real = gmRealWord(o, q.p.base);
    return (o.kind === 'pre' ? `${esc(o.label)} 是「${esc(o.zh)}」` : `${esc(o.label)} 會${grpZh(o.grp)}，這裡要${gmWant(a)}`) +
      (real ? `<br><span lang="en">${esc(real.w)}</span> 是另一個字：${esc(real.z)}` : '');
  };
  return `<p class="status">第 ${B.i + 1} 題 / 共 ${B.qs.length} 題</p>
  <section class="qcard gm-build">
    <div class="qtype">${pre ? '字首組字 · 加在前面，改變意思' : `字尾組字 · ${gmWant(a)}`}</div>
    <div class="gm-eq">${eq}</div>
    <p class="gm-z">${esc(q.z)}</p>
    <div class="opts">${q.opts.map((o, k) => {
      const st = q.tried.has(k) ? (o === a ? 'right' : 'wrong') : (q.solved && o === a ? 'right' : '');
      return `<button class="opt en ${st}" data-gmopt="${k}" ${q.solved ? 'disabled' : ''}>${esc(o.label)}${q.tried.has(k) && o !== a ? `<span class="why">${why(o)}</span>` : ''}</button>`;
    }).join('')}</div>
    ${q.solved ? `<div class="gm-done">
      <span class="gm-w">${affixSplit(a, q.p)}</span>${sayBtn(q.p.w)}
      <p class="gm-note">${esc(a.label)}：${esc(a.zh)}</p></div>` : ''}
  </section>
  <div class="actions">${q.solved ? `<button class="btn primary" id="gmnext">${B.i + 1 < B.qs.length ? '下一題' : '看這一輪'}</button>` : `<button class="btn" id="gmshow">看答案</button>`}</div>`;
}

function gmPick(k) {
  const q = G.b.qs[G.b.i]; if (q.solved) return;
  q.tried.add(k);
  if (q.opts[k] === q.a) { q.solved = true; say(q.p.w); } else q.missed = true;
  renderGame();
}

/* ---------- 配對翻牌 ---------- */
const gmShortZh = z => (z.split(/[；;]/)[0] || z).trim();
const gmEn = e => e.sayAs.split(/, /)[0];

function gmMatchRound() {
  const range = pool().filter(e => e.firstZh);
  // the student's own 還不熟 and due words first, then any
  const first = S.mode === 'self' ? shuffle(range.filter(e => MARKS[e.id] === 'r' || isDue(e.id))) : [];
  const words = [], ens = new Set(), zhs = new Set();
  for (const e of [...first, ...shuffle(range)]) {
    const en = gmEn(e).toLowerCase(), zh = gmShortZh(e.firstZh);
    if (ens.has(en) || zhs.has(zh) || words.includes(e)) continue;
    words.push(e); ens.add(en); zhs.add(zh);
    if (words.length === 6) break;
  }
  const tiles = shuffle(words.flatMap(e => [{ id: e.id, side: 'en', t: gmEn(e) }, { id: e.id, side: 'zh', t: gmShortZh(e.firstZh) }]));
  return { words, tiles, up: [], done: new Set(), looks: {}, lock: false };
}

function gmMatchHTML() {
  const M = G.m;
  if (M.words.length < 3) return `<p class="empty">這個範圍的字不夠玩一局，換個大一點的範圍試試。</p>`;
  if (M.done.size === M.words.length) {
    const extra = M.words.filter(e => (M.looks[e.id] || 0) > 3).map(e => e.id);
    return gmEndHTML(extra, '全部配對完成 ✓', '這幾個字多翻了幾次，可以再看一眼：');
  }
  return `<p class="status">找出英文和中文的一對 · 已配對 ${M.done.size} / ${M.words.length}</p>
  <section class="gm-grid" aria-label="配對翻牌">${M.tiles.map((t, i) => {
    const open = M.done.has(t.id) || M.up.includes(i);
    const cls = M.done.has(t.id) ? 'ok' : open ? 'up' : '';
    return `<button class="gm-tile ${t.side} ${cls}" data-gmtile="${i}" ${M.done.has(t.id) ? 'disabled' : ''}
      aria-label="${open ? esc(t.t) : '蓋著的牌'}">${open ? `<span class="${t.t.length > 10 ? 'long' : ''}">${esc(t.t)}</span>` : ''}</button>`;
  }).join('')}</section>
  <div class="actions"><button class="btn" id="gmnew">換一局</button></div>`;
}

function gmTurn(i) {
  const M = G.m, t = M.tiles[i];
  if (M.lock || M.done.has(t.id) || M.up.includes(i)) return;
  M.up.push(i); M.looks[t.id] = (M.looks[t.id] || 0) + 1;
  if (t.side === 'en') say(t.t);
  if (M.up.length === 2) {
    const [x, y] = M.up.map(k => M.tiles[k]);
    if (x.id === y.id) { M.done.add(x.id); M.up = []; }
    else { M.lock = true; setTimeout(() => { M.up = []; M.lock = false; if (S.view === 'game') renderGame(); }, 1100); }
  }
  renderGame();
}

/* ---------- shared ---------- */
function gmEndHTML(ids, title, lead) {
  const list = ids.map(id => ENTRIES.find(e => e.id === id)).filter(Boolean);
  return `<section class="qcard cardend"><div class="qtype">這一局結束</div><h2>${title}</h2>
    ${list.length ? `<p>${lead}</p><ul class="endlist">${list.map(e => `<li><span class="w">${esc(e.w)}</span>${sayBtn(e.sayAs)} <span class="zhf">${esc(e.firstZh)}</span></li>`).join('')}</ul>
      ${S.mode === 'self' ? `<div class="actions" style="justify-content:flex-start"><button class="btn again" id="gmmark" data-ids="${esc(ids.join(' '))}">把這幾個標成「還不熟」</button></div>` : ''}`
    : '<p>每一個都很順，這一局沒有要再看的字。</p>'}
  </section>
  <div class="actions"><button class="btn primary" id="gmnew">再玩一局</button></div>`;
}

function gmNew() {
  if (gmKind() === 'build') G.b = { qs: gmBuildRound(), i: 0 };
  else G.m = gmMatchRound();
  G.key = gmKind() + '|' + deckKey();
}

function renderGame() {
  if (G.key !== gmKind() + '|' + deckKey() || (gmKind() === 'build' ? !G.b : !G.m)) gmNew();
  const k = gmKind();
  $('#main').innerHTML = `<div class="setbar"><div class="seg" role="group" aria-label="遊戲">
      <button data-gmkind="build" aria-pressed="${k === 'build'}">字首字尾組字</button><button data-gmkind="match" aria-pressed="${k === 'match'}">配對翻牌</button></div></div>` +
    (k === 'build' ? gmBuildHTML() : gmMatchHTML());
}

document.addEventListener('click', ev => {
  const t = ev.target.closest('button'); if (!t) return;
  if (t.dataset.gmkind) { G.kind = t.dataset.gmkind; store.set('game', G.kind); renderGame(); return; }
  if (t.dataset.gmopt != null) { gmPick(+t.dataset.gmopt); return; }
  if (t.dataset.gmtile != null) { gmTurn(+t.dataset.gmtile); return; }
  switch (t.id) {
    case 'gmnext': G.b.i++; renderGame(); goToWork(); break;
    case 'gmshow': { const q = G.b.qs[G.b.i]; q.missed = true; q.solved = true; say(q.p.w); renderGame(); break; }
    case 'gmnew': gmNew(); renderGame(); goToWork(); break;
    case 'gmmark': (t.dataset.ids || '').split(' ').filter(Boolean).forEach(id => markWord(id, 'r')); t.textContent = '已標成「還不熟」'; t.disabled = true; break;
  }
});

(function () {
  const css = `
.gm-build .qtype { margin-bottom: 14px; }
.gm-eq { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 6px 14px; margin: 6px 0 8px; }
.gm-base { font: 700 clamp(30px, 6vw, 44px)/1.15 var(--font-display); color: var(--ink); }
.gm-q { display: inline-block; min-width: 2.6em; padding: 2px 12px; border-radius: 12px; background: var(--tile); color: var(--muted);
  font: 700 clamp(26px, 5vw, 36px)/1.2 var(--font-en); }
.gm-q.on { background: var(--accent-soft); color: var(--accent); }
.gm-is { font: 500 30px/1 var(--font-en); color: var(--muted); }
.gm-z { margin: 0 0 24px; text-align: center; font: 600 20px/1.5 var(--font-zh); color: var(--ink); text-wrap: balance; }
.gm-done { margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--line); text-align: center; }
.gm-w { font: 600 28px/1.2 var(--font-en); margin-right: 8px; }
.gm-w b { color: var(--accent); }
.gm-note { margin: 8px 0 0; font: 15px/1.5 var(--font-zh); color: var(--muted); }
.gm-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; max-width: 680px; margin: 0 auto; }
.gm-tile {
  aspect-ratio: 4 / 3; display: grid; place-items: center; padding: 8px; border: 0; border-radius: 16px; cursor: pointer;
  background: var(--accent); color: var(--ink); overflow-wrap: anywhere; text-align: center;
  transition: transform .25s cubic-bezier(.4, 0, .2, 1), background-color .25s;
}
.gm-tile:not(.up):not(.ok) { background-image: radial-gradient(circle at 50% 50%, rgb(255 255 255 / .22) 0 14%, transparent 15%); }
.gm-tile.up, .gm-tile.ok { background: var(--card); box-shadow: inset 0 0 0 2px var(--line); }
.gm-tile.ok, .gm-tile.ok:disabled { background: var(--ok-soft); box-shadow: inset 0 0 0 2px var(--ok); color: var(--ok); cursor: default; opacity: 1; }
.gm-tile.en span { font: 600 20px/1.2 var(--font-en); }
.gm-tile.zh span { font: 600 18px/1.35 var(--font-zh); }
.gm-tile span.long { font-size: 15px; }
@media (hover: hover) { .gm-tile:not(.up):not(.ok):hover { transform: scale(1.03); } }
.gm-tile:active { transform: scale(.97); }
@media (max-width: 640px) {
  .gm-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
  .gm-tile { border-radius: 12px; padding: 6px; }
  .gm-tile.en span { font-size: 17px; } .gm-tile.zh span { font-size: 15px; } .gm-tile span.long { font-size: 13px; }
}
@media (prefers-reduced-motion: reduce) { .gm-tile { transition: none; } }`;
  const st = document.createElement('style'); st.textContent = css; document.head.append(st);
})();
