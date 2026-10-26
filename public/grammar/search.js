/* Course search — shared by both courses and by every page in them.

   A reference of 133 sections has one question asked of it more than any
   other: which section covers this? The contents page answers it by being
   read; this answers it by being typed at. It is deliberately available from
   every page rather than only from the hub, because the question arrives in
   the middle of a lesson, not while choosing one.

   WHAT IT SEARCHES is the map in book.js — every section number, both
   titles, and the chapter they belong to — not the body text of the
   chapters. Those live in per-chapter files that are only loaded when you
   open that chapter, and indexing them would mean either a build step, which
   this repo does not have, or fetching fifteen files on every page load. The
   titles are the index a reference actually needs: they are what the book's
   own contents page offers.

   An unwritten section still appears, struck through and not clickable, for
   the same reason the hub lists it: the map tells the truth about the book,
   and a search that silently omitted half of it would be lying by omission.

   WHERE IT PUTS ITSELF: the button is injected into the bar rather than
   written into eight index.html files, so a new chapter folder gets search
   by copying the shell, with nothing to remember.

   Paths are resolved against the directory book.js was loaded from, which is
   the course root — /grammar/ or /grammar-kids/ — so the same file works
   from the hub, from a chapter two levels down, and from either course.
*/

(() => {
  const bookScript = [...document.scripts].find((s) => /\/book\.js(\?|$)/.test(s.src));
  if (!bookScript || typeof BOOK === 'undefined') return;
  const root = new URL('.', bookScript.src);

  const L = Object.assign({ unitEn: 'Chapter', unitZh: '章' }, BOOK.labels || {});

  const esc = (s) => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // ------------------------------------------------------------ the index

  const index = [];

  BOOK.chapters.forEach((c) => {
    const written = (n) => c.built && (!c.written || c.written.includes(n));
    index.push({
      kind: 'chapter',
      n: `${L.unitEn} ${c.n}`,
      en: c.en,
      zh: c.zh,
      where: '',
      href: c.built ? new URL(`${c.id}/`, root).href : null,
      // `also` is searched but never shown. Sentence Lab's units are titled
      // for a ten-year-old — "Yesterday", not "Simple past" — so without it
      // the teacher's own word for the grammar finds nothing.
      hay: `${L.unitEn} ${c.n} ${c.n} ${c.en} ${c.zh} ${c.also || ''}`.toLowerCase(),
    });
    c.sections.forEach((s) => {
      index.push({
        kind: 'section',
        n: s.n,
        en: s.en,
        zh: s.zh,
        where: `${c.en} · ${c.zh}`,
        href: written(s.n) ? new URL(`${c.id}/#s${s.n}`, root).href : null,
        hay: `${s.n} ${s.en} ${s.zh} ${s.also || ''} ${c.en} ${c.zh} ${c.also || ''}`.toLowerCase(),
      });
    });
  });

  (BOOK.extras || []).forEach((x) => {
    index.push({
      kind: 'extra',
      n: '✦',
      en: x.en,
      zh: x.zh,
      where: 'Reference · 查閱用',
      href: x.built ? new URL(`${x.id}/`, root).href : null,
      hay: `${x.en} ${x.zh}`.toLowerCase(),
    });
  });

  /* Ranked, not just filtered. A section number typed in full is almost
     always what was meant, so it comes first; then a title that starts with
     the query; then anything containing it. Within a tier the book's own
     order is kept, because that is the order the teacher thinks in.

     EXCEPT that being openable outranks matching well. Eleven of the fifteen
     chapters are still to come, so "question" matches four unwritten titles
     that begin with the word before it reaches the two written sections that
     merely contain it — and a result that goes nowhere is worth less than one
     you can follow, however good the match. So after the exact-number tier,
     everything written comes first and everything unwritten after it, each
     still in match order. The unwritten ones stay in the list, because the
     map tells the truth about the book; they just stop being in the way.

     An exactly typed section number is the one thing that beats this: asking
     for 2-3 by name should show 2-3, even to say it is not written yet. */
  function search(qRaw) {
    const q = qRaw.trim().toLowerCase();
    if (!q) return [];
    const exact = [];
    const tiers = [[], []];
    index.forEach((it) => {
      if (it.n.toLowerCase() === q) exact.push(it);
      else if (it.en.toLowerCase().startsWith(q) || it.zh.startsWith(qRaw.trim())) tiers[0].push(it);
      else if (it.hay.includes(q)) tiers[1].push(it);
    });
    const rest = [...tiers[0], ...tiers[1]];
    return [...exact, ...rest.filter((x) => x.href), ...rest.filter((x) => !x.href)].slice(0, 50);
  }

  // ------------------------------------------------------------ the button

  const bar = document.querySelector('.bar');
  if (!bar) return;

  const btn = document.createElement('button');
  btn.className = 'bar-btn bar-btn-find';
  btn.id = 'findToggle';
  btn.setAttribute('aria-expanded', 'false');
  btn.title = 'Search the course 搜尋課程';
  btn.innerHTML = '<span aria-hidden="true">⌕</span> <span class="find-label">Search</span>';
  const zh = bar.querySelector('#zhToggle');
  bar.insertBefore(btn, zh || null);

  // ------------------------------------------------------------ the panel

  const wrap = document.createElement('div');
  wrap.className = 'findwrap';
  wrap.hidden = true;
  wrap.innerHTML = `
    <div class="find-scrim"></div>
    <div class="findbox" role="dialog" aria-modal="true" aria-label="Search the course 搜尋課程">
      <label class="find-field">
        <span class="find-icon" aria-hidden="true">⌕</span>
        <input id="findInput" type="search" autocomplete="off" role="combobox"
          aria-expanded="true" aria-controls="findResults"
          placeholder="Section number or a word 節次或關鍵字"
          aria-label="Section number or a word 節次或關鍵字">
        <button class="find-x" id="findClose" aria-label="Close 關閉">✕</button>
      </label>
      <p class="find-hint" id="findHint">Try <b>13-4</b>, <b>comparative</b>, or <b>冠詞</b>.
        <span class="hint-zh">可以輸入節次、英文關鍵字，或中文。</span></p>
      <ul class="find-results" id="findResults" role="listbox" aria-label="Results 結果"></ul>
    </div>`;
  document.body.appendChild(wrap);

  const input = wrap.querySelector('#findInput');
  const list = wrap.querySelector('#findResults');
  const hint = wrap.querySelector('#findHint');

  let hits = [];
  let cursor = -1;
  let opener = null;

  function paint() {
    if (!hits.length) {
      list.innerHTML = '';
      hint.hidden = false;
      hint.innerHTML = input.value.trim()
        ? `Nothing matches that. <span class="hint-zh">沒有符合的章節。</span>`
        : `Try <b>13-4</b>, <b>comparative</b>, or <b>冠詞</b>.
           <span class="hint-zh">可以輸入節次、英文關鍵字，或中文。</span>`;
      return;
    }
    hint.hidden = true;
    list.innerHTML = hits.map((it, i) => `
      <li role="option" id="find-${i}" aria-selected="${i === cursor}"
          class="find-hit${i === cursor ? ' on' : ''}${it.href ? '' : ' todo'}"
          data-i="${i}">
        <span class="find-n">${esc(it.n)}</span>
        <span class="find-t">
          <span class="find-en">${esc(it.en)}</span>
          <span class="find-zh">${esc(it.zh)}</span>
          ${it.where ? `<span class="find-where">${esc(it.where)}</span>` : ''}
        </span>
        ${it.href ? '' : '<span class="find-soon">待補</span>'}
      </li>`).join('');
  }

  function move(step) {
    if (!hits.length) return;
    // Skip past the sections that have nowhere to go.
    let next = cursor;
    for (let i = 0; i < hits.length; i += 1) {
      next = (next + step + hits.length) % hits.length;
      if (hits[next].href) break;
    }
    cursor = next;
    paint();
    input.setAttribute('aria-activedescendant', `find-${cursor}`);
    const on = list.querySelector('.on');
    if (on) on.scrollIntoView({ block: 'nearest' });
  }

  function go(i) {
    const it = hits[i];
    if (!it || !it.href) return;
    window.location.href = it.href;
  }

  function run() {
    hits = search(input.value);
    cursor = hits.findIndex((h) => h.href);
    paint();
  }

  function open() {
    if (!wrap.hidden) return;
    opener = document.activeElement;
    wrap.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('find-open');
    input.value = '';
    run();
    input.focus();
  }

  function close() {
    if (wrap.hidden) return;
    wrap.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('find-open');
    if (opener && opener.focus) opener.focus();
  }

  btn.addEventListener('click', () => (wrap.hidden ? open() : close()));
  wrap.querySelector('#findClose').addEventListener('click', close);
  wrap.querySelector('.find-scrim').addEventListener('click', close);
  input.addEventListener('input', run);

  list.addEventListener('click', (e) => {
    const li = e.target.closest('.find-hit');
    if (li) go(Number(li.dataset.i));
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
    else if (e.key === 'Enter') { e.preventDefault(); go(cursor); }
    else if (e.key === 'Escape') { e.preventDefault(); close(); }
  });

  /* Opened from anywhere with / or the platform's find shortcut. The slash
     is ignored while something else is being typed into — the verbs page has
     a search box of its own, and a teacher typing "a/an" into it should get
     an a/an, not this. */
  document.addEventListener('keydown', (e) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
    if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) { e.preventDefault(); open(); return; }
    if (e.key === '/' && !typing && wrap.hidden) { e.preventDefault(); open(); }
  });
})();
