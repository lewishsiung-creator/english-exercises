/* 拆解練習 — the page's first practice loop (2026-11-08, from the second
   gamification review). Until now 學測英文寫作 could only be read.

   What it practises is the page's own idea: every sentence in a model essay
   does one of fifteen jobs (定調開場, 描述圖片, 轉折 …), and the jobs, not the
   topics, are what carry from year to year. Two exercises per essay:

   - 動作配對: one sentence at a time, pick the job it does from four. A wrong
     pick is greyed out and the student tries again; the right one shows the
     page's own explanation (the part of jobZh after the colon).
   - 句子排序: one paragraph at a time, its sentences shuffled; tap them in the
     order the essay has them. A wrong tap shakes and is not taken.

   While a drill runs, the essay's own paragraphs (and the switch that shows
   each sentence's job) are hidden: the paragraph plan above each one lists
   the jobs in order, which is the answer to both. They come back at the end,
   or with 結束練習, so the student can check against the model.

   Both done = the essay is 拆解過了, and a row of seven dots at the top of the
   section fills in -- a collection with a real end, not points. Nothing is
   scored, nothing is timed. Progress lives in this browser only, as ew.done
   ({ e115: { m: 1, o: 1 } }), which /learn/ reads for its 學測寫作 tile.

   It reads ESSAYS (content.js) and text() and speakBtn() (render.js), so it
   is loaded after both. The transfer essay has no drill: it is a new topic
   on an old skeleton, to be read against its base, and the seven real years
   are the set to collect. */
(() => {
  const KEY = 'ew.done';
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  let DONE = load();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(DONE)); } catch { /* 無痕模式 */ } };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const moveOf = (s) => s.jobZh.split('：')[0];
  const whyOf = (s) => s.jobZh.slice(s.jobZh.indexOf('：') + 1);
  const MOVES = [...new Set(ESSAYS.flatMap((e) => e.paras.flatMap((p) => p.sentences.map(moveOf))))];
  const isDone = (id) => !!(DONE[id] && DONE[id].m && DONE[id].o);

  const S = {};   // essay id -> the exercise in progress

  /* ---------- the row of seven at the top of the section ---------- */
  function paintSum() {
    const box = document.querySelector('.drill-sum');
    if (!box) return;
    const n = ESSAYS.filter((e) => isDone(e.id)).length;
    box.innerHTML = `
      <p class="ds-k">拆解進度</p>
      <p class="ds-v">${n === ESSAYS.length ? `七篇都拆解過了 ✓` : `${n} / ${ESSAYS.length} 篇拆解過了`}</p>
      <ol class="ds-dots">${ESSAYS.map((e) => `<li><a href="#${e.id}" class="${isDone(e.id) ? 'on' : ''}"
        aria-label="${text(e.year)} ${isDone(e.id) ? '拆解過了' : '還沒拆解'}">${text(e.year)}</a></li>`).join('')}</ol>
      <p class="ds-note">每篇範文底下都有「動作配對」和「句子排序」，兩個都做完就算拆解過了。題目每年換，句子在做的事不換。</p>`;
  }

  /* ---------- one essay's drill box ---------- */
  const running = (e) => {
    const st = S[e.id];
    return !!st && (st.kind === 'm' ? st.i < st.items.length : st.p < e.paras.length);
  };
  function head(e) {
    const d = DONE[e.id] || {};
    return `
      <div class="dr-head">
        <p class="dr-h">拆解練習${isDone(e.id) ? '<span class="dr-done">✓ 拆解過了</span>' : ''}</p>
        ${running(e) ? `<div class="dr-btns"><button class="dr-btn" data-stop="1" data-essay="${e.id}">結束練習，看範文</button></div>` : `
        <div class="dr-btns">
          <button class="dr-btn" data-drill="m" data-essay="${e.id}">${d.m ? '✓ ' : ''}動作配對</button>
          <button class="dr-btn" data-drill="o" data-essay="${e.id}">${d.o ? '✓ ' : ''}句子排序</button>
        </div>`}
      </div>`;
  }

  function paint(e) {
    const box = document.querySelector(`.drill[data-essay="${e.id}"]`);
    const st = S[e.id];
    let body = '';
    if (st && st.kind === 'm') body = matchHTML(e, st);
    else if (st && st.kind === 'o') body = orderHTML(e, st);
    else body = `<p class="dr-intro">讀範文之前，先自己拆一次。「動作配對」：一句一句認出它在做 15 種動作裡的哪一種；「句子排序」：把打亂的句子排回原本的順序。練習時範文會先收起來，不計分，答錯可以再試。</p>`;
    box.innerHTML = head(e) + `<div class="dr-body">${body}</div>`;
    box.closest('.essay').classList.toggle('drilling', running(e));
  }

  /* 動作配對 */
  function startMatch(e) {
    const items = e.paras.flatMap((p, i) => p.sentences.map((s) => ({ s, para: p, pi: i })));
    S[e.id] = { kind: 'm', items, i: 0, tried: [], solved: false, opts: null };
    dealMatch(e);
  }
  function dealMatch(e) {
    const st = S[e.id];
    const it = st.items[st.i];
    const right = moveOf(it.s);
    st.opts = shuffle([right, ...shuffle(MOVES.filter((m) => m !== right)).slice(0, 3)]);
    st.tried = []; st.solved = false;
  }
  function matchHTML(e, st) {
    if (st.i >= st.items.length) {
      return `<div class="dr-end"><p class="dr-end-h">動作配對完成 ✓</p>
        <p>${st.items.length} 句，每一句都認出來了。${DONE[e.id] && DONE[e.id].o ? '這篇拆解過了。' : '再做「句子排序」，這篇就拆解完成。'}</p>
        <button class="dr-go" data-drill="o" data-essay="${e.id}">${DONE[e.id] && DONE[e.id].o ? '再排一次' : '做句子排序'} ›</button></div>`;
    }
    const it = st.items[st.i];
    const right = moveOf(it.s);
    return `
      <p class="dr-count">第 ${st.i + 1} 句，共 ${st.items.length} 句 · ${text(it.para.labelZh)}</p>
      <p class="dr-sent">${text(it.s.en)}${speakBtn(it.s.en, 'say say-quiet')}</p>
      <p class="dr-ask">這一句在做什麼？</p>
      <div class="dr-opts">${st.opts.map((o) => {
        const cls = st.solved && o === right ? 'right' : st.tried.includes(o) ? 'no' : '';
        return `<button class="dr-opt ${cls}" data-pick="${text(o)}" data-essay="${e.id}" ${st.solved || st.tried.includes(o) ? 'disabled' : ''}>${text(o)}</button>`;
      }).join('')}</div>
      ${st.solved ? `<p class="dr-why"><b>${text(right)}</b>：${text(whyOf(it.s))}</p>
        <button class="dr-go" data-next="m" data-essay="${e.id}">${st.i + 1 < st.items.length ? '下一句' : '看結果'} ›</button>` :
        st.tried.length ? `<p class="dr-hint">再想想：它跟前一句是什麼關係？</p>` : ''}`;
  }

  /* 句子排序 */
  function startOrder(e) {
    S[e.id] = { kind: 'o', p: 0, placed: [], deck: null, miss: null };
    dealOrder(e);
  }
  function dealOrder(e) {
    const st = S[e.id];
    const n = e.paras[st.p].sentences.length;
    let deck = shuffle([...Array(n).keys()]);
    if (deck.every((k, i) => k === i)) deck = deck.slice(1).concat(deck[0]);   // never hand back the answer
    st.deck = deck; st.placed = []; st.miss = null;
  }
  function orderHTML(e, st) {
    if (st.p >= e.paras.length) {
      return `<div class="dr-end"><p class="dr-end-h">句子排序完成 ✓</p>
        <p>${e.paras.length} 段都排回原來的順序了。${DONE[e.id] && DONE[e.id].m ? '這篇拆解過了。' : '再做「動作配對」，這篇就拆解完成。'}</p>
        <button class="dr-go" data-drill="m" data-essay="${e.id}">${DONE[e.id] && DONE[e.id].m ? '再配一次' : '做動作配對'} ›</button></div>`;
    }
    const para = e.paras[st.p];
    const done = st.placed.length === para.sentences.length;
    return `
      <p class="dr-count">第 ${st.p + 1} 段，共 ${e.paras.length} 段 · ${text(para.labelZh)}</p>
      <p class="dr-ask">${done ? '這一段排好了。' : '依照範文的順序，點下一句。'}</p>
      <ol class="dr-placed">${st.placed.map((k) => `<li><span class="dr-mv">${text(moveOf(para.sentences[k]))}</span>${text(para.sentences[k].en)}</li>`).join('')}</ol>
      ${done ? `<button class="dr-go" data-next="o" data-essay="${e.id}">${st.p + 1 < e.paras.length ? '下一段' : '看結果'} ›</button>` : `
      <div class="dr-deck">${st.deck.filter((k) => !st.placed.includes(k)).map((k) => `
        <button class="dr-card ${st.miss === k ? 'shake' : ''}" data-card="${k}" data-essay="${e.id}">${text(para.sentences[k].en)}</button>`).join('')}</div>`}`;
  }

  function finish(id, kind) {
    DONE[id] = { ...(DONE[id] || {}), [kind]: 1 };
    save(); paintSum();
  }

  /* ---------- wiring ---------- */
  document.querySelectorAll('.essay').forEach((art) => {
    const e = ESSAYS.find((x) => x.id === art.id);
    if (!e) return;
    const box = document.createElement('div');
    box.className = 'drill'; box.dataset.essay = e.id;
    // above the paragraphs: a student meets the drill before the answers
    art.insertBefore(box, art.querySelector('.para'));
    paint(e);
  });
  const prov = document.querySelector('.prov');
  if (prov) {
    const sum = document.createElement('div'); sum.className = 'drill-sum';
    prov.after(sum); paintSum();
  }

  document.addEventListener('click', (ev) => {
    const b = ev.target.closest('.drill button, .drill-sum a');
    if (!b || !b.dataset.essay) return;
    const e = ESSAYS.find((x) => x.id === b.dataset.essay);
    const st = S[e.id];
    if (b.dataset.stop) {
      delete S[e.id];
    } else if (b.dataset.drill) {
      if (b.dataset.drill === 'm') startMatch(e); else startOrder(e);
    } else if (b.dataset.pick != null && st && !st.solved) {
      const right = moveOf(st.items[st.i].s);
      if (b.dataset.pick === right) st.solved = true; else st.tried.push(b.dataset.pick);
    } else if (b.dataset.next === 'm') {
      st.i++;
      if (st.i < st.items.length) dealMatch(e); else finish(e.id, 'm');
    } else if (b.dataset.card != null) {
      const k = +b.dataset.card;
      if (k === st.placed.length) { st.placed.push(k); st.miss = null; }
      else st.miss = k;
    } else if (b.dataset.next === 'o') {
      st.p++;
      if (st.p < e.paras.length) dealOrder(e); else finish(e.id, 'o');
    } else return;
    paint(e);
    // keep the drill's top in view when its body changes height under the reader
    const box = document.querySelector(`.drill[data-essay="${e.id}"]`);
    const top = box.getBoundingClientRect().top;
    if (top < 0) window.scrollBy(0, top - 70);
  });
})();
