/* 下載 PDF for the word lists (2026-11-10): 國中單字, 高中單字, and the
   Cambridge A2 Key and B1 Preliminary lists.

   A student or teacher picks one topic or one letter (or every topic / every
   letter, a section each), a range (a level, a set), and what to show; the
   page builds a print-only sheet from the list's own data and opens the
   browser's print window, where 「儲存為 PDF」 saves it. Built on the page, not
   stored as files, so any combination works and the text in the PDF is real
   text. Chinese can be left blank instead, which makes the sheet a test.

   Each page loads this after its own script and calls WordPDF({...}) with:
     title    the list's name, used in the sheet and the file name
     source   where the list comes from, printed at the end
     logo     path to public/logo.png from the page
     button   selector of the button that opens the dialog
     topics   [{ k, zh, has(e) }]
     ranges   [{ k, zh, has(e) }], the first one being "all"
     tagOf(e) the small label after a word (its level or set), or ''
     colloc   whether the list has 常用搭配
   It reads the page's ENTRIES and letterOf(), whose fields (w, lab, se, x, co,
   vari) are the same on all four pages. */
(function () {
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const bold = s => esc(s).replace(/\*([^*]+)\*/g, '<b>$1</b>');
  const ital = s => esc(s).replace(/\*([^*]+)\*/g, '<i>$1</i>');
  const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const CSS = `
#pdfdlg .pd-count { margin: 18px 0 0; font-size: 15px; color: var(--ink); }
#pdfdlg .pd-count b { font-variant-numeric: tabular-nums; }
#pdfdlg .pd-checks { display: grid; gap: 10px; margin-top: 4px; }
#pdfdlg .pd-checks label { display: flex; align-items: center; gap: 10px; margin: 0; font: 15px/1.4 var(--font-zh); letter-spacing: 0; text-transform: none; color: var(--ink); }
#pdfdlg .pd-checks input { width: 20px; height: 20px; accent-color: var(--button); }
#pdfdlg .pd-how { margin-top: 14px; font-size: 13px; line-height: 1.6; }
#pdfdoc { display: none; }
@media print {
  body.pdf-on > :not(#pdfdoc) { display: none !important; }
  body.pdf-on { background: #fff !important; color: #111 !important; margin: 0 !important; padding: 0 !important; }
  body.pdf-on #pdfdoc { display: block; }
}
@page { size: A4; margin: 14mm 13mm 16mm; }
#pdfdoc { color: #111; font: 10pt/1.45 -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "PingFang TC", "Heiti TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
#pdfdoc .ps + .ps { break-before: page; }
#pdfdoc .ph { display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; padding-bottom: 7px; margin-bottom: 10px; border-bottom: 1.5pt solid #111; }
#pdfdoc .ph h1 { margin: 0; font-size: 17pt; line-height: 1.2; font-weight: 700; }
#pdfdoc .ph p { margin: 2px 0 0; font-size: 9.5pt; color: #555; }
#pdfdoc .ph img { width: 26px; height: 26px; flex: none; }
#pdfdoc .pl { columns: 2; column-gap: 9mm; }
#pdfdoc .pe { break-inside: avoid; padding: 5px 0 6px; border-bottom: .5pt solid #ccc; }
#pdfdoc .pe-h { font-size: 11.5pt; }
#pdfdoc .pe-w { font-weight: 700; }
#pdfdoc .pe-lab { margin-left: 5px; font-size: 9pt; color: #555; }
#pdfdoc .pe-tag { margin-left: 6px; font-size: 8pt; color: #777; white-space: nowrap; }
#pdfdoc .pe-s { margin-top: 1px; }
#pdfdoc .pe-p { display: inline-block; min-width: 2.6em; font-size: 8.5pt; color: #666; font-style: italic; }
#pdfdoc .pe-blank { display: inline-block; width: 60%; border-bottom: .6pt solid #999; height: 1.1em; vertical-align: -2px; }
#pdfdoc .pe-v { font-size: 9pt; color: #555; }
#pdfdoc .pe-x { margin-top: 3px; font-size: 9.5pt; }
#pdfdoc .pe-xz, #pdfdoc .pe-cz { color: #555; font-size: 9pt; }
#pdfdoc .pe-c { margin-top: 2px; font-size: 9.5pt; }
#pdfdoc .pe-c b { font-weight: 600; }
#pdfdoc .pf { margin-top: 12px; padding-top: 6px; border-top: .5pt solid #ccc; font-size: 8.5pt; color: #666; }`;

  window.WordPDF = function (cfg) {
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    const opts = (list) => list.map(o => `<option value="${esc(o.k)}">${esc(o.zh)}</option>`).join('');
    const dlg = document.createElement('dialog');
    dlg.className = 'panel';
    dlg.id = 'pdfdlg';
    dlg.setAttribute('aria-label', '下載 PDF');
    dlg.innerHTML = `
      <h2>下載 PDF</h2>
      <p>選一個主題或一個字母，做成可以印、也可以存在手機裡的單字表。</p>
      <label for="pdBy">分類方式</label>
      <select id="pdBy"><option value="topic">依主題</option><option value="letter">依字母</option></select>
      <label for="pdPick" id="pdPickLab">主題</label>
      <select id="pdPick"></select>
      ${cfg.ranges.length > 1 ? `<label for="pdRange">${esc(cfg.rangeLabel || '範圍')}</label><select id="pdRange">${opts(cfg.ranges)}</select>` : ''}
      <label>內容</label>
      <div class="pd-checks">
        <label><input type="checkbox" id="pdZh" checked> 中文意思</label>
        <label><input type="checkbox" id="pdBlank"> 中文留空，當作測驗卷</label>
        <label><input type="checkbox" id="pdEx" checked> 例句</label>
        ${cfg.colloc ? '<label><input type="checkbox" id="pdCo"> 常用搭配</label>' : ''}
      </div>
      <p class="pd-count" id="pdCount"></p>
      <p class="pd-how">按「產生 PDF」會打開列印視窗，目的地選<b>「儲存為 PDF」</b>。iPhone、iPad：在列印畫面按上方的分享圖示，選<b>「儲存到檔案」</b>。</p>
      <div class="row">
        <button class="btn" id="pdClose">取消</button>
        <button class="btn primary" id="pdGo">產生 PDF</button>
      </div>`;
    document.body.appendChild(dlg);
    const doc = document.createElement('div');
    doc.id = 'pdfdoc';
    document.body.appendChild(doc);

    const $ = s => dlg.querySelector(s);
    const range = () => cfg.ranges.find(r => r.k === ($('#pdRange') ? $('#pdRange').value : cfg.ranges[0].k)) || cfg.ranges[0];
    const inRange = () => ENTRIES.filter(range().has);

    // one section per topic or letter; "all" makes one per non-empty group
    function sections() {
      const list = inRange();
      const by = $('#pdBy').value, pick = $('#pdPick').value;
      const groups = by === 'topic'
        ? cfg.topics.map(t => ({ zh: t.zh, words: list.filter(t.has), k: t.k }))
        : LETTERS.map(L => ({ zh: L.toUpperCase(), words: list.filter(e => letterOf(e) === L), k: L }));
      return (pick === 'all' ? groups : groups.filter(g => g.k === pick)).filter(g => g.words.length);
    }

    function fillPick() {
      const by = $('#pdBy').value;
      const list = inRange();
      const groups = by === 'topic'
        ? cfg.topics.map(t => ({ k: t.k, zh: t.zh, n: list.filter(t.has).length }))
        : LETTERS.map(L => ({ k: L, zh: L.toUpperCase(), n: list.filter(e => letterOf(e) === L).length }));
      const was = $('#pdPick').value;
      $('#pdPickLab').textContent = by === 'topic' ? '主題' : '字母';
      $('#pdPick').innerHTML = `<option value="all">${by === 'topic' ? '全部主題（每個主題一段）' : '全部字母（A–Z 每個字母一段）'}</option>` +
        groups.filter(g => g.n).map(g => `<option value="${esc(g.k)}">${esc(g.zh)}（${g.n}）</option>`).join('');
      if ([...$('#pdPick').options].some(o => o.value === was)) $('#pdPick').value = was;
      else $('#pdPick').selectedIndex = 1;
      count();
    }

    function count() {
      const secs = sections();
      const n = secs.reduce((a, s) => a + s.words.length, 0);
      $('#pdCount').innerHTML = n
        ? `共 <b>${n.toLocaleString()}</b> 個字${secs.length > 1 ? `，分成 ${secs.length} 段` : ''}${n > 800 ? '。字數很多，列印視窗可能要等幾秒才出現。' : '。'}`
        : '這個組合沒有單字。';
      $('#pdGo').disabled = !n;
      $('#pdBlank').disabled = !$('#pdZh').checked;
    }

    function entry(e, o) {
      const meaning = s => o.zh ? (o.blank ? '<span class="pe-blank"></span>' : esc(s.z)) : '';
      // a level or set already named in the heading is not repeated on every word
      const tag = range().k === 'all' ? cfg.tagOf(e) : '';
      return `<div class="pe">
        <div class="pe-h"><span class="pe-w">${esc(e.w)}</span>${e.lab ? `<span class="pe-lab">${esc(e.lab)}</span>` : ''}${tag ? `<span class="pe-tag">${esc(tag)}</span>` : ''}</div>
        ${e.se.map(s => `<div class="pe-s">${s.p ? `<span class="pe-p">${esc(s.p)}</span>` : ''}${meaning(s)}</div>`).join('')}
        ${e.vari ? `<div class="pe-v">${ital(e.vari)}</div>` : ''}
        ${o.ex ? e.x.map(x => `<div class="pe-x">${bold(x.en)}${o.zh && !o.blank && x.zh ? `<br><span class="pe-xz">${esc(x.zh)}</span>` : ''}</div>`).join('') : ''}
        ${o.co && e.co ? e.co.map(c => `<div class="pe-c"><b>${esc(c.c)}</b>${o.zh && !o.blank ? ` <span class="pe-cz">${esc(c.zh)}</span>` : ''}</div>`).join('') : ''}
      </div>`;
    }

    function build() {
      const o = { zh: $('#pdZh').checked, blank: $('#pdZh').checked && $('#pdBlank').checked, ex: $('#pdEx').checked, co: !!($('#pdCo') && $('#pdCo').checked) };
      const r = range();
      const by = $('#pdBy').value;
      const secs = sections();
      const rangeZh = r.k === 'all' ? '' : r.zh;   // "all" says nothing in a heading or a file name
      doc.innerHTML = secs.map((s, i) => `<section class="ps">
          <header class="ph"><div>
            <h1>${esc(cfg.title)} · ${by === 'topic' ? '主題：' : '字母 '}${esc(s.zh)}</h1>
            <p>${[rangeZh, `${s.words.length} 個字`, o.blank ? '中文留空' : ''].filter(Boolean).map(esc).join(' · ')}</p>
          </div>${i === 0 && cfg.logo ? `<img src="${esc(cfg.logo)}" alt="">` : ''}</header>
          <div class="pl">${s.words.map(e => entry(e, o)).join('')}</div>
        </section>`).join('') +
        `<p class="pf">整理自${esc(cfg.source)}；中文是這個網站補上的。英文學習 · lewistoeic.com</p>`;
      const pick = $('#pdPick').value;
      const name = pick === 'all' ? (by === 'topic' ? '全部主題' : 'A–Z') : secs[0].zh;
      return [cfg.title, name, rangeZh].filter(Boolean).join('－');
    }

    let oldTitle = '';
    function done() {
      document.body.classList.remove('pdf-on');
      if (oldTitle) { document.title = oldTitle; oldTitle = ''; }
      doc.innerHTML = '';
    }
    window.addEventListener('afterprint', done);

    $('#pdBy').addEventListener('change', fillPick);
    if ($('#pdRange')) $('#pdRange').addEventListener('change', fillPick);
    $('#pdPick').addEventListener('change', count);
    $('#pdZh').addEventListener('change', count);
    $('#pdClose').addEventListener('click', () => dlg.close());
    $('#pdGo').addEventListener('click', () => {
      const name = build();
      dlg.close();
      oldTitle = document.title;
      document.title = name;              // the file name the browser suggests
      document.body.classList.add('pdf-on');
      setTimeout(() => window.print(), 60);
    });

    const btn = document.querySelector(cfg.button);
    if (btn) btn.addEventListener('click', () => {
      // start from what the page is showing, when it is a topic or a letter
      const st = typeof S === 'object' ? S : {};
      if (st.letter && st.letter !== 'all') $('#pdBy').value = 'letter';
      else $('#pdBy').value = 'topic';
      fillPick();
      const want = $('#pdBy').value === 'letter' ? st.letter : st.topic;
      if (want && want !== 'all' && [...$('#pdPick').options].some(x => x.value === String(want))) { $('#pdPick').value = String(want); count(); }
      dlg.showModal();
    });
  };
})();
