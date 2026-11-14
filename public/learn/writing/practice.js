/* 練習單 — one year's 學測 essay as a worksheet to do on screen (2026-11-14).

   Lewis's paper worksheet for 109 (A 暖身 … G 換題目寫, then the answer key)
   was the brief; he chose an online page over a download. The page is that
   worksheet, one section per part, in its order.

   Reads two globals: ESSAYS from ../content.js (the essay itself: sentences,
   Chinese, each sentence's job) and SHEET from the year's sheet.js (the
   worksheet's own questions). Each part names a `kind`, one builder each,
   and an unknown kind throws, as on the essay page.

   The rules are the family's:
   - Nothing is scored or timed. A wrong pick wobbles and can be tried again;
     a typed answer is compared with a reference, which is "one way to write
     it", never a mark.
   - What a student types is kept in this browser only (ewp.<year>), so a
     reload does not lose an essay. 設定 → 清除這頁的作答 asks before it wipes.
   - On a teacher's device (learn/teacher.js), 設定 can open every answer at
     once for the projector, and close them again. That does not touch what
     anyone typed.
   - Finishing C counts as the essay page's 動作配對 for this year (ew.done),
     since it is the same exercise. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const md = (s) => esc(s).replace(/\*([^*]+)\*/g, '<b>$1</b>');
  const say = (s, cls = 'say say-quiet') => `<button class="${cls}" data-say="${esc(s)}" title="朗讀" aria-label="朗讀">🔊</button>`;
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  // compare typed English loosely: case, curly quotes, spacing and punctuation do not count
  const norm = (s) => String(s).toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();
  const ZH = '零一二三四五六七八九十';
  const zh = (n) => (n <= 10 ? ZH[n] : n < 20 ? '十' + ZH[n - 10] : String(n));   // 十一句, 十二格
  // a filled gap, without the (decide / return) cue after it, and only the half after →
  const fill = (q, a) => q.replace(/___(\s*\([^)]*\))?/, a).replace(/^.*→\s*/, '');
  const countWords = (s) => (String(s).match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g) || []).length;

  const E = ESSAYS.find((x) => x.id === SHEET.essay);
  if (!E) throw new Error(`練習單：找不到範文 ${SHEET.essay}`);
  const moveOf = (s) => s.jobZh.split('：')[0];
  const whyOf = (s) => s.jobZh.slice(s.jobZh.indexOf('：') + 1);
  const SENTS = E.paras.flatMap((p, pi) => p.sentences.map((s) => ({ ...s, pi })));

  /* ---------- what is kept ---------- */
  const KEY = `ewp.${SHEET.year}`;
  let SAVE = (() => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } })();
  SAVE.typed = SAVE.typed || {}; SAVE.done = SAVE.done || {};
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(SAVE)); } catch { /* 無痕模式 */ } };
  const typed = (k) => SAVE.typed[k] || '';
  function markDone(id) {
    if (SAVE.done[id]) return;
    SAVE.done[id] = 1; save(); paintToc();
  }

  const store = {
    get(k, d) { try { const v = localStorage.getItem(`ew.${k}`); return v === null ? d : v; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(`ew.${k}`, v); } catch { /* 無痕模式 */ } },
  };

  /* ---------- the state of each part while it is being done ---------- */
  const ST = {};
  const PART = Object.fromEntries(SHEET.parts.map((p) => [p.id, p]));

  const fresh = {
    warmup: (p) => ({ open: p.items.map(() => false) }),
    match: () => ({ sel: null, got: new Set(), miss: null }),
    gaps: (p) => ({ st: p.items.map(() => '') }),
    jobs: () => ({ i: 0, tried: [], solved: false, think: [] }),
    order: () => ({ placed: [], miss: null, clue: false }),
    rewrite: () => ({ open: {} }),
    cloze: (p) => ({ cur: 0, got: new Set(), miss: null }),
    transfer: () => ({}),
  };
  const solved = {
    warmup: (p) => ({ open: p.items.map(() => true) }),
    match: (p) => ({ sel: null, got: new Set(p.left.map((_, i) => i)), miss: null }),
    gaps: (p) => ({ st: p.items.map(() => 'show') }),
    jobs: (p) => ({ i: SENTS.length, tried: [], solved: false, think: p.think.map(() => true) }),
    order: (p) => ({ placed: E.paras[p.para].sentences.map((_, i) => i), miss: null, clue: true }),
    rewrite: (p) => ({ open: Object.fromEntries(p.groups.flatMap((g) => g.items.map((_, i) => [`${g.id}.${i}`, true]))) }),
    cloze: (p) => ({ cur: -1, got: new Set(blanksOf(p).map((_, i) => i)), miss: null }),
    transfer: () => ({}),
  };
  function resetAll(open) {
    SHEET.parts.forEach((p) => { ST[p.id] = (open ? solved : fresh)[p.kind](p); });
    ST.model = !!open;
  }

  /* ---------- checks that keep this sheet and the essay together ---------- */
  function blanksOf(p) {
    return p.text.flatMap((t) => [...t.matchAll(/\[\[([^\]]+)\]\]/g)].map((m) => m[1]));
  }
  SHEET.parts.forEach((p) => {
    if (p.kind === 'cloze') {
      const plain = p.text.map((t) => t.replace(/\[\[([^\]]+)\]\]/g, '$1'));
      E.paras.forEach((q, i) => {
        const want = q.sentences.map((s) => s.en).join(' ');
        if (plain[i] !== want) throw new Error(`練習單 ${p.id}：第 ${i + 1} 段和範文 ${E.id} 對不上`);
      });
    }
    if (p.kind === 'jobs') {
      const names = p.moves.map((m) => m[0]);
      SENTS.forEach((s, i) => { if (!names.includes(moveOf(s))) throw new Error(`練習單 ${p.id}：S${i + 1} 的工作「${moveOf(s)}」不在選項裡`); });
    }
    if (p.kind === 'transfer' && p.rows.length !== SENTS.length) throw new Error(`練習單 ${p.id}：骨架 ${p.rows.length} 列，範文 ${SENTS.length} 句`);
    if (p.kind === 'order' && Object.keys(p.letters).length !== E.paras[p.para].sentences.length) throw new Error(`練習單 ${p.id}：句子數對不上`);
  });

  /* ---------- builders: one per kind ---------- */
  const B = {};

  B.warmup = (p, st) => `
    <ol class="pw">${p.items.map((it, i) => `
      <li class="pw-i">
        <p class="pw-q">${md(it.q)}</p>
        ${st.open[i] ? `<div class="pp-ref">
          <p class="pp-ref-k">參考想法</p>
          ${it.ideas ? `<ul class="pw-ideas">${it.ideas.map((x) => `<li lang="en">${esc(x)}${say(x)}</li>`).join('')}</ul>` : ''}
          ${it.rows ? `<dl class="pw-rows">${it.rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd lang="en">${esc(v)}</dd></div>`).join('')}</dl>` : ''}
          ${it.zh ? `<p class="pw-zh">${md(it.zh)}</p>` : ''}
        </div>` : `<button class="pp-btn" data-act="warm" data-i="${i}">想好了，看參考想法</button>`}
      </li>`).join('')}
    </ol>`;

  B.match = (p, st) => {
    const leftDone = (i) => st.got.has(i);
    const rightDone = (k) => p.left.some(([, a], i) => a === k && st.got.has(i));
    const all = st.got.size === p.left.length;
    return `
      <div class="pm">
        <ul class="pm-col">${p.left.map(([en, a], i) => `
          <li><button class="pm-t pm-en ${leftDone(i) ? 'ok' : ''} ${st.sel && st.sel.side === 'l' && st.sel.k === i ? 'sel' : ''}"
            data-act="ml" data-k="${i}" ${leftDone(i) ? 'disabled' : ''} lang="en">
            <span class="pm-n">${i + 1}</span>${esc(en)}${leftDone(i) ? `<span class="pm-a">${a}</span>` : ''}</button></li>`).join('')}
        </ul>
        <ul class="pm-col">${Object.entries(p.right).map(([k, zh]) => `
          <li><button class="pm-t pm-zh ${rightDone(k) ? 'ok' : ''} ${st.sel && st.sel.side === 'r' && st.sel.k === k ? 'sel' : ''} ${st.miss === k ? 'shake' : ''}"
            data-act="mr" data-k="${k}" ${rightDone(k) ? 'disabled' : ''}>
            <span class="pm-n">${k}</span>${esc(zh)}</button></li>`).join('')}
        </ul>
      </div>
      <p class="pp-status">${all ? `${zh(p.left.length)}組都配好了 ✓` : `已配對 ${st.got.size} / ${p.left.length}`}</p>`;
  };

  B.gaps = (p, st) => `
    <p class="pg-bank"><span class="pg-bank-k">B1 的片語</span>${p.bank.map((b) => `<span class="pg-chip" lang="en">${esc(b)}</span>`).join('')}</p>
    <ol class="pg">${p.items.map((it, i) => {
      const s = st.st[i];
      const shown = s === 'ok' || s === 'show';
      const k = `${p.id}.${i}`;
      const field = shown
        ? `<span class="pg-fill ${s === 'ok' ? 'ok' : 'given'}">${esc(s === 'ok' ? typed(k) || it.a[0] : it.a[0])}</span>`
        : `<input class="pg-in" data-k="${k}" data-act="gapin" data-i="${i}" value="${esc(typed(k))}" size="${Math.max(8, it.a[0].length + 2)}"
            autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="第 ${i + 1} 題的空格">`;
      const [pre, post] = it.s.split('___');
      return `<li class="pg-i">
        <p class="pg-s" lang="en">${esc(pre)}${field}${esc(post)}${shown ? say(it.s.replace('___', it.a[0])) : ''}</p>
        ${shown ? (s === 'ok' ? `<p class="pp-good">✓ 對了</p>` : `<p class="pp-note">答案：<b lang="en">${esc(it.a.join(' ／ '))}</b>${typed(k) ? `　你寫的是 <span lang="en">${esc(typed(k))}</span>` : ''}</p>`)
          : `<div class="pp-row"><button class="pp-btn" data-act="gapcheck" data-i="${i}">對答案</button>
             ${s === 'try' ? `<button class="pp-link" data-act="gapshow" data-i="${i}">看答案</button>` : ''}</div>
             ${s === 'try' ? `<p class="pp-hint">再想想：${esc(it.hint)}</p>` : ''}`}
      </li>`;
    }).join('')}</ol>`;

  B.jobs = (p, st) => {
    const opt = (name) => p.moves.findIndex((m) => m[0] === name);
    const num = (i) => '①②③④⑤⑥⑦⑧⑨⑩'[i];
    if (st.i >= SENTS.length) {
      return `
        <p class="pp-good pp-big">${zh(SENTS.length)}句都認出來了 ✓</p>
        <table class="pj-tab"><thead><tr><th>S</th><th>Sentence</th><th>工作</th></tr></thead><tbody>
          ${SENTS.map((s, i) => `${i === 0 || s.pi !== SENTS[i - 1].pi ? `<tr class="pj-para"><td colspan="3">${esc(E.paras[s.pi].labelZh)}</td></tr>` : ''}
            <tr><td>${i + 1}</td><td lang="en">${esc(s.en)}</td><td class="pj-mv">${num(opt(moveOf(s)))} ${esc(moveOf(s))}</td></tr>`).join('')}
        </tbody></table>
        <div class="pp-think"><p class="pp-think-h">想一想</p>
          ${p.think.map((t, i) => `<div class="pp-think-i"><p>${md(t.q)}</p>
            ${st.think[i] ? `<p class="pp-ref-b">${md(t.a)}</p>` : `<button class="pp-link" data-act="think" data-i="${i}">看參考答案</button>`}</div>`).join('')}
        </div>
        <button class="pp-link" data-act="jobsagain">再配一次</button>`;
    }
    const s = SENTS[st.i];
    const right = moveOf(s);
    return `
      <p class="pp-count">S${st.i + 1}，共 ${SENTS.length} 句 · ${esc(E.paras[s.pi].labelZh)}</p>
      <p class="pj-s" lang="en">${esc(s.en)}${say(s.en)}</p>
      <div class="pj-opts" style="--cols:${p.moves.length % 3 === 0 ? 3 : 4}">${p.moves.map(([zh, en], i) => {
        const cls = st.solved && zh === right ? 'right' : st.tried.includes(zh) ? 'no' : '';
        return `<button class="pj-o ${cls}" data-act="job" data-v="${esc(zh)}" ${st.solved || st.tried.includes(zh) ? 'disabled' : ''}>
          <span class="pj-zh">${num(i)} ${esc(zh)}</span><span class="pj-en" lang="en">${esc(en)}</span></button>`;
      }).join('')}</div>
      ${st.solved ? `<p class="pp-why"><b>${esc(right)}</b>：${esc(whyOf(s))}</p>
        <p class="pp-zh">${esc(s.zh)}</p>
        <button class="pp-go" data-act="jobnext">${st.i + 1 < SENTS.length ? '下一句' : '看全部'} ›</button>`
        : st.tried.length ? `<p class="pp-hint">再想想：它跟前一句是什麼關係？</p>` : ''}`;
  };

  B.order = (p, st) => {
    const sents = E.paras[p.para].sentences;
    const letterOf = Object.fromEntries(Object.entries(p.letters).map(([l, k]) => [k, l]));
    const done = st.placed.length === sents.length;
    const mark = (t) => {
      let h = esc(t);
      if (st.clue) p.clues.forEach((c) => { h = h.replace(esc(c), `<mark>${esc(c)}</mark>`); });
      return h;
    };
    return `
      ${st.placed.length ? `<ol class="po-placed">${st.placed.map((k) => `<li><span class="po-l">(${letterOf[k]})</span><span lang="en">${mark(sents[k].en)}</span></li>`).join('')}</ol>` : ''}
      ${done ? `
        <p class="pp-good">正確順序：${st.placed.map((k) => letterOf[k]).join(' → ')} ✓</p>
        ${st.clue ? `<p class="pp-ref-b">${md(p.clueZh)}</p>` : `<button class="pp-link" data-act="clue">哪些字詞幫你決定順序？</button>`}
        <button class="pp-link" data-act="orderagain">再排一次</button>` : `
        <p class="pp-ask">${st.placed.length ? '下一句是哪一句？' : '第一句是哪一句？'}</p>
        <div class="po-deck">${Object.entries(p.letters).filter(([, k]) => !st.placed.includes(k)).map(([l, k]) => `
          <button class="po-c ${st.miss === k ? 'shake' : ''}" data-act="ord" data-k="${k}"><span class="po-l">(${l})</span><span lang="en">${esc(sents[k].en)}</span></button>`).join('')}
        </div>`}`;
  };

  B.rewrite = (p, st) => p.groups.map((g) => `
    <div class="pr-g">
      <h3 class="pr-h"><span>${esc(g.id)}</span>${esc(g.h)}</h3>
      <p class="pr-eg">範例：<span lang="en">${md(g.eg)}</span></p>
      <p class="pp-ask">${esc(g.ask)}</p>
      <ol class="pr-list">${g.items.map((it, i) => {
        const k = `${g.id}.${i}`;
        const open = st.open[k];
        const blank = it.q.includes('___');
        const [pre, post] = blank ? it.q.split('___') : [it.q, ''];
        const field = blank
          ? `<input class="pg-in" data-k="${k}" value="${esc(typed(k))}" size="${Math.max(14, it.a[0].length + 2)}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="${esc(g.id)} 第 ${i + 1} 題">`
          : '';
        const mine = norm(typed(k));
        const same = !it.open && mine && it.a.some((a) => norm(a) === mine);
        return `<li class="pr-i">
          <p class="pr-q" lang="${/[一-鿿]/.test(it.q) ? 'zh-Hant' : 'en'}">${esc(pre)}${field}${esc(post)}</p>
          ${blank ? '' : `<textarea class="pr-in" data-k="${k}" rows="${it.long ? 3 : 2}" autocapitalize="sentences" spellcheck="false" aria-label="${esc(g.id)} 第 ${i + 1} 題">${esc(typed(k))}</textarea>`}
          ${open ? `<div class="pp-ref"><p class="pp-ref-k">${it.open ? '可以這樣寫' : '參考答案'}</p>
              ${it.a.map((a) => `<p class="pr-a" lang="en">${esc(blank ? fill(it.q, a) : a)}${say(blank ? fill(it.q, a) : a)}</p>`).join('')}
              ${same ? `<p class="pp-good">✓ 跟參考答案一樣</p>` : mine && !it.open ? `<p class="pp-note">對照看看：意思一樣、文法對，就是對的。</p>` : ''}
            </div>` : `<button class="pp-btn" data-act="rw" data-k="${k}">看參考答案</button>`}
        </li>`;
      }).join('')}</ol>
    </div>`).join('');

  B.cloze = (p, st) => {
    const ans = blanksOf(p);
    const words = [...ans].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    let n = -1;
    const paras = p.text.map((t) => `<p class="pc-p" lang="en">${esc(t).replace(/\[\[([^\]]+)\]\]/g, () => {
      n++;
      const got = st.got.has(n);
      return `<button class="pc-b ${got ? 'ok' : ''} ${st.cur === n ? 'cur' : ''} ${st.cur === n && st.miss ? 'shake' : ''}" data-act="blank" data-k="${n}" ${got ? 'disabled' : ''}
        aria-label="第 ${n + 1} 格">${got ? esc(ans[n]) : `<sup>${n + 1}</sup>`}</button>`;
    })}</p>`).join('');
    const used = (w) => ans.filter((a) => a === w).length <= ans.filter((a, i) => a === w && st.got.has(i)).length;
    const all = st.got.size === ans.length;
    return `
      <div class="pc-bank" aria-label="Word Bank">${words.map((w) => `<button class="pc-w ${st.miss === w ? 'shake' : ''}" data-act="word" data-v="${esc(w)}" ${used(w) || all ? 'disabled' : ''} lang="en">${esc(w)}</button>`).join('')}</div>
      ${paras}
      <p class="pp-status">${all ? `${zh(ans.length)}格都填好了 ✓ ${E.paras.map((q) => say(q.sentences.map((s) => s.en).join(' '), 'say')).join('')}` : st.cur >= 0 ? `第 ${st.cur + 1} 格要填哪個字？` : ''}</p>`;
  };

  B.transfer = (p) => {
    const k = (x) => `${p.id}.${x}`;
    const scene = typed(k('scene'));
    let lastPi = -1;
    const rows = SENTS.map((s, i) => {
      const [tip, eg] = p.rows[i];
      const head = s.pi !== lastPi ? `<li class="pt-para">${esc(E.paras[s.pi].labelZh)}</li>` : '';
      lastPi = s.pi;
      return `${head}<li class="pt-r">
        <label for="pt-${i}"><b>${esc(moveOf(s))}</b>${tip ? `<span>${esc(tip)}</span>` : ''}</label>
        <input id="pt-${i}" class="pt-in" data-k="${k('r' + i)}" value="${esc(typed(k('r' + i)))}" placeholder="${esc(SHEET.year)}：${esc(eg)}" autocomplete="off" spellcheck="false">
      </li>`;
    }).join('');
    const text = typed(k('text'));
    const n = countWords(text);
    const checks = (typed(k('checks')) || '').split('');
    return `
      <p class="pp-ask">Step 0　選一個場景</p>
      <div class="pt-scenes" role="radiogroup" aria-label="場景">${p.scenes.map(([zh, en], i) => `
        <button class="pt-s" role="radio" aria-checked="${scene === String(i)}" data-act="scene" data-i="${i}">
          <span>${esc(zh)}</span><span lang="en">${esc(en)}</span></button>`).join('')}</div>

      <p class="pp-ask">Step 1　先填骨架（關鍵字就好，不用寫完整句子）</p>
      <ol class="pt-rows">${rows}</ol>
      ${p.cost ? `<div class="pt-cost">${p.cost.map((c, i) => `<label>${esc(c)}<input class="pt-in" data-k="${k('c' + i)}" value="${esc(typed(k('c' + i)))}" autocomplete="off" spellcheck="false"></label>`).join('')}</div>` : ''}

      <p class="pp-ask">Step 2　寫出完整的兩段（約 ${p.words} words）</p>
      <label class="pt-title">Title<input class="pt-in" data-k="${k('title')}" value="${esc(typed(k('title')))}" autocomplete="off" spellcheck="false"></label>
      <textarea class="pt-text" data-k="${k('text')}" rows="14" spellcheck="false" aria-label="你的兩段故事">${esc(text)}</textarea>
      <p class="pt-count" data-count="${p.words}">${n} words${n ? ` · 目標約 ${p.words}` : ''}</p>

      <p class="pp-ask">交卷前檢查</p>
      <ul class="pt-checks">${p.checks.map((c, i) => `
        <li><label><input type="checkbox" data-act="check" data-i="${i}" ${checks[i] === '1' ? 'checked' : ''}><span>${esc(c)}</span></label></li>`).join('')}</ul>`;
  };

  /* ---------- the page ---------- */
  const doc = $('#doc');
  const partHTML = (p) => `
    <section class="part pp-part" id="p-${p.id}" aria-labelledby="h-${p.id}">
      <h2 class="part-head" id="h-${p.id}"><span class="n">${esc(p.id)}</span>
        <span class="titles"><span class="t">${esc(p.title)}</span><span class="te">${esc(p.titleEn)}</span></span></h2>
      <p class="lead">${md(p.lead)}</p>
      <div class="pp-body" data-part="${p.id}"></div>
    </section>`;

  doc.innerHTML = `
    <header class="cover pp-cover" id="top">
      <p class="kicker">${esc(SHEET.kicker)}</p>
      <h1 lang="en">${esc(E.title)}</h1>
      <p class="cover-en">${esc(E.aim)}</p>
      <div class="takeaway">
        <p class="takeaway-h">換題目也帶得走的一件事</p>
        <p class="takeaway-b">${esc(E.takeawayZh)}</p>
        <p class="takeaway-en" lang="en">${esc(E.takeawayEn)}${say(E.takeawayEn)}</p>
      </div>
      <p class="pp-time">${esc(SHEET.time)}</p>
      <nav class="pp-toc" aria-label="練習單的各部分"></nav>
    </header>
    ${SHEET.parts.map(partHTML).join('')}
    <section class="part pp-part" id="p-model" aria-labelledby="h-model">
      <h2 class="part-head" id="h-model"><span class="n">範</span>
        <span class="titles"><span class="t">範文全文</span><span class="te">Model essay</span></span></h2>
      <div class="pp-body" data-part="model"></div>
    </section>`;

  function paintModel() {
    $('[data-part="model"]').innerHTML = ST.model ? `
      <div class="pp-model">
        <p class="pp-model-t" lang="en">${esc(E.title)}</p>
        ${E.paras.map((q) => { const t = q.sentences.map((s) => s.en).join(' '); return `<p lang="en">${esc(t)}${say(t)}</p>`; }).join('')}
      </div>
      <a class="practice" href="../#${E.id}"><span class="practice-h">→ 每一句的中文和它的工作</span>
        <span class="practice-b">學測英文寫作頁上的 ${esc(E.year)} 範文：打開「逐句結構」，${zh(SENTS.length)}句的中譯和說明都在那裡。</span></a>` : `
      <p class="lead">先寫完 G，再看範文——對照自己的兩段，看骨架是不是一樣。</p>
      <button class="pp-btn" data-act="model">看範文全文</button>`;
  }

  function paintToc() {
    $('.pp-toc').innerHTML = [...SHEET.parts.map((p) => [p.id, p.toc || p.title.split('：')[0]]), ['model', '範文']].map(([id, t]) =>
      `<a href="#p-${id}" class="${SAVE.done[id] ? 'done' : ''}"><b>${id === 'model' ? '範' : esc(id)}</b>${esc(t)}${SAVE.done[id] ? ' ✓' : ''}</a>`).join('');
  }

  function paint(id) {
    if (id === 'model') return paintModel();
    const p = PART[id];
    const box = $(`[data-part="${id}"]`);
    if (!B[p.kind]) throw new Error(`練習單：沒有「${p.kind}」這種練習`);
    box.innerHTML = B[p.kind](p, ST[p.id]);
  }
  const paintAll = () => { SHEET.parts.forEach((p) => paint(p.id)); paintModel(); paintToc(); };

  resetAll(false);
  paintAll();

  /* ---------- doing it ---------- */
  function keepInView(box) {
    const top = box.getBoundingClientRect().top;
    if (top < 60) window.scrollBy(0, top - 80);
  }

  function act(b) {
    const part = b.closest('[data-part]');
    const id = part && part.dataset.part;
    const p = PART[id];
    const st = ST[id];
    const a = b.dataset.act;
    const i = +b.dataset.i;

    if (a === 'model') { ST.model = true; markDone('model'); }

    else if (a === 'warm') { st.open[i] = true; if (st.open.every(Boolean)) markDone(id); }

    else if (a === 'ml' || a === 'mr') {
      const side = a === 'ml' ? 'l' : 'r';
      const k = side === 'l' ? +b.dataset.k : b.dataset.k;
      st.miss = null;
      if (!st.sel || st.sel.side === side) st.sel = { side, k };
      else {
        const li = side === 'l' ? k : st.sel.k;
        const rk = side === 'r' ? k : st.sel.k;
        if (p.left[li][1] === rk) {
          st.got.add(li); st.sel = null; speak(p.left[li][0].replace(/ V$/, ''));
          if (st.got.size === p.left.length) markDone(id);
        } else { st.miss = rk; st.sel = { side: 'l', k: li }; }   // the English stays picked: try another Chinese
      }
    }

    else if (a === 'gapcheck') {
      const k = `${id}.${i}`;
      const v = norm(typed(k));
      if (!v) { const inp = $(`input[data-k="${k}"]`); if (inp) inp.focus(); return; }
      st.st[i] = p.items[i].a.some((x) => norm(x) === v) ? 'ok' : 'try';
      if (st.st[i] === 'ok') speak(p.items[i].s.replace('___', typed(k)));
      if (st.st.every((x) => x === 'ok' || x === 'show')) markDone(id);
    }
    else if (a === 'gapshow') { st.st[i] = 'show'; if (st.st.every((x) => x === 'ok' || x === 'show')) markDone(id); }

    else if (a === 'job') {
      const right = moveOf(SENTS[st.i]);
      if (b.dataset.v === right) st.solved = true; else st.tried.push(b.dataset.v);
    }
    else if (a === 'jobnext') {
      st.i++; st.tried = []; st.solved = false;
      if (st.i >= SENTS.length) {
        markDone(id);
        try {   // the essay page's 動作配對 for this year
          const d = JSON.parse(localStorage.getItem('ew.done')) || {};
          d[E.id] = { ...(d[E.id] || {}), m: 1 };
          localStorage.setItem('ew.done', JSON.stringify(d));
        } catch { /* 無痕模式 */ }
      }
    }
    else if (a === 'think') st.think[i] = true;
    else if (a === 'jobsagain') ST[id] = fresh.jobs(p);

    else if (a === 'ord') {
      const k = +b.dataset.k;
      if (k === st.placed.length) { st.placed.push(k); st.miss = null; if (st.placed.length === E.paras[p.para].sentences.length) markDone(id); }
      else st.miss = k;
    }
    else if (a === 'clue') st.clue = true;
    else if (a === 'orderagain') ST[id] = fresh.order(p);

    else if (a === 'rw') {
      st.open[b.dataset.k] = true;
      if (p.groups.every((g) => g.items.every((_, j) => st.open[`${g.id}.${j}`]))) markDone(id);
    }

    else if (a === 'blank') { st.cur = +b.dataset.k; st.miss = null; }
    else if (a === 'word') {
      const ans = blanksOf(p);
      if (st.cur < 0 || st.got.has(st.cur)) st.cur = ans.findIndex((_, j) => !st.got.has(j));
      if (b.dataset.v === ans[st.cur]) {
        st.got.add(st.cur); st.miss = null;
        const next = ans.findIndex((_, j) => j > st.cur && !st.got.has(j));
        st.cur = next >= 0 ? next : ans.findIndex((_, j) => !st.got.has(j));
        if (st.got.size === ans.length) markDone(id);
      } else st.miss = b.dataset.v;
    }

    else if (a === 'scene') { SAVE.typed[`${id}.scene`] = String(i); save(); }

    else return;
    paint(id);
    if (part) keepInView(part.closest('.pp-part'));
  }

  doc.addEventListener('click', (ev) => {
    const s = ev.target.closest('[data-say]');
    if (s) { speak(s.dataset.say); return; }
    const b = ev.target.closest('button[data-act]');
    if (b && !b.disabled) act(b);
  });

  // typing is kept as it happens; nothing is redrawn under the cursor
  doc.addEventListener('input', (ev) => {
    const t = ev.target;
    if (t.matches('input[type="checkbox"][data-act="check"]')) {
      const id = t.closest('[data-part]').dataset.part;
      const boxes = $$(`[data-part="${id}"] input[type="checkbox"]`);
      SAVE.typed[`${id}.checks`] = boxes.map((x) => (x.checked ? '1' : '0')).join(''); save();
      return;
    }
    if (!t.dataset.k) return;
    SAVE.typed[t.dataset.k] = t.value; save();
    if (t.classList.contains('pt-text')) {
      const c = t.parentElement.querySelector('.pt-count');
      const n = countWords(t.value);
      c.textContent = `${n} words${n ? ` · 目標約 ${c.dataset.count}` : ''}`;
    }
  });
  doc.addEventListener('keydown', (ev) => {
    if (ev.key !== 'Enter' || !ev.target.matches('.pg-in[data-act="gapin"]')) return;
    ev.preventDefault();
    const b = ev.target.closest('li').querySelector('[data-act="gapcheck"]');
    if (b) act(b);
  });

  /* ---------- 朗讀 ---------- */
  let voices = [];
  let voice = null;
  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
    if (!voices.length) return;
    const saved = store.get('voice', '');
    voice = voices.find((v) => v.name === saved)
      || voices.find((v) => v.lang === 'en-US' && /Samantha|Ava|Allison|Google US/i.test(v.name))
      || voices.find((v) => v.lang === 'en-US') || voices[0];
    $('#voicePick').innerHTML = voices.map((v) => `<option value="${esc(v.name)}"${v === voice ? ' selected' : ''}>${esc(v.name)} · ${esc(v.lang)}</option>`).join('');
  }
  function speak(t) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t);
    if (voice) { u.voice = voice; u.lang = voice.lang; } else u.lang = 'en-US';
    u.rate = Number($('#rate').value);
    speechSynthesis.speak(u);
  }
  if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  $('#voicePick').addEventListener('change', (e) => { voice = voices.find((v) => v.name === e.target.value) || voice; store.set('voice', e.target.value); speak(SENTS[0].en); });
  $('#rate').value = store.get('rate', '0.95');
  $('#rate').addEventListener('change', () => { store.set('rate', $('#rate').value); speak(SENTS[0].en); });

  /* ---------- 設定 ---------- */
  const panel = $('#panel');
  const panelBtn = $('#panelToggle');
  function setPanel(open) {
    if (open) { const y = $('.bar').getBoundingClientRect().top; if (y > 0) window.scrollBy(0, y); }
    panel.hidden = !open;
    panelBtn.setAttribute('aria-expanded', String(open));
  }
  panelBtn.addEventListener('click', () => setPanel(panel.hidden));
  $('#panelClose').addEventListener('click', () => setPanel(false));
  $('#showAll').addEventListener('click', () => { resetAll(true); paintAll(); setPanel(false); });
  $('#hideAll').addEventListener('click', () => { resetAll(false); paintAll(); setPanel(false); });
  $('#wipe').addEventListener('click', () => {
    if (!confirm('清除這台裝置上這份練習單的所有作答？打過的字和完成記號都會刪掉，不能復原。')) return;
    SAVE = { typed: {}, done: {} }; save();
    resetAll(false); paintAll(); setPanel(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    setPanel(false);
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  });
})();
