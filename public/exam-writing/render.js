/* 把 content.js 的 LESSON 畫出來，並接上所有的展開／朗讀。

   這一頁的語言分層和 /robot-helper/ 相反，看程式碼時要記得：

   - 中文是說明語言，永遠顯示。頁面上大部分的中文都不帶 .zh，因為它們不是
     「答案」，是課本本文。
   - 範文的英文也永遠顯示——它就是要讀的材料。每一句的中譯帶 .zh，藏在頂端的
     「中譯」開關或單句點擊後面。
   - 句型卡與句庫卡再反過來：中文在正面，英文藏起來，因為那是要「產出」的
     東西。這些用 .card 而不是 .zh，兩套機制不互相干擾。

   parts 的每個 kind 對應下面一個 build 函式；遇到沒有 builder 的 kind 會直接
   丟錯，而不是安靜地少畫一段。
*/

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // 引號也跳脫，範文裡有彎引號，而且好幾句會進到 data-say 屬性裡。
    .replace(/"/g, '&quot;');
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function speakBtn(sentence, cls = 'say') {
  return `<button class="${cls}" data-say="${text(sentence)}" title="朗讀"
    aria-label="朗讀">🔊</button>`;
}

function head(p) {
  return `
    <h2 class="part-head" id="h-${p.id}">
      <span class="n">${text(p.n)}</span>
      <span class="titles"><span class="t">${text(p.title)}</span>
        <span class="te">${text(p.titleEn)}</span></span>
    </h2>
    <p class="lead">${text(p.lead)}</p>`;
}

/* 中文在正面、英文翻開才看得到的卡片。句型與句庫共用。 */
function flip(zh, en, note, extra = '') {
  return `
    <li class="card" tabindex="0" role="button" aria-expanded="false">
      ${extra}
      <p class="card-zh">${text(zh)}</p>
      <div class="card-back">
        <p class="card-en">${text(en)}${speakBtn(en)}</p>
        ${note ? `<p class="card-note">${text(note)}</p>` : ''}
      </div>
    </li>`;
}

// ------------------------------------------------------------------ 各段落

function buildYears(p) {
  const rows = p.rows.map((r) => `
    <tr>
      <td class="td-y"><a href="#${r.essay}">${text(r.year)}</a></td>
      <td class="td-topic">${text(r.topic)}</td>
      <td class="td-form">${text(r.form)}</td>
      <td class="td-pics"><span class="pics" title="${r.pics} 張圖">${'▣'.repeat(r.pics)}</span></td>
      <td class="td-task">${text(r.task)}
        ${r.trap ? `<span class="trap">⚠ ${text(r.trap)}</span>` : ''}</td>
    </tr>`).join('');

  return `
    <section class="part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>${text(p.head.year)}</th><th>${text(p.head.topic)}</th>
              <th>${text(p.head.form)}</th><th>${text(p.head.pics)}</th>
              <th>${text(p.head.task)}</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <p class="note">${text(p.note)}</p>
    </section>`;
}

function buildTrends(p) {
  return `
    <section class="part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}
      <ol class="trends">
        ${p.items.map((t, i) => `
          <li class="trend">
            <p class="trend-h"><span class="trend-n">${i + 1}</span>${text(t.h)}</p>
            <p class="trend-b">${text(t.body)}</p>
            ${t.extra ? `<p class="trend-x">${text(t.extra)}</p>` : ''}
            ${t.punch ? `
              <p class="punch">${text(t.punch)}${speakBtn(t.punch, 'say say-quiet')}
                <span class="punch-zh">${text(t.punchZh)}</span></p>` : ''}
          </li>`).join('')}
      </ol>
    </section>`;
}

function buildTypes(p) {
  return `
    <section class="part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}
      <ul class="types">
        ${p.items.map((t) => `
          <li class="type">
            <p class="type-n">${text(t.name)}</p>
            <p class="type-y">${t.years.map((y) => `<a class="ychip" href="#e${y}">${text(y)}</a>`).join('')}</p>
            <p class="type-s">${text(t.skill)}</p>
          </li>`).join('')}
      </ul>
      <p class="note">${text(p.note)}</p>
    </section>`;
}

function buildEssays(p) {
  const pr = p.provenance;

  const one = (e) => {
    const paras = e.paras.map((para, i) => `
      <div class="para para-${i + 1}">
        <p class="para-label"><span class="tag">${text(para.label)}</span>
          <span class="para-zh">${text(para.labelZh)}</span>
          ${speakBtn(para.sentences.map((s) => s.en).join(' '), 'say say-quiet')}</p>
        <p class="para-note">${text(para.noteZh)}</p>
        <ol class="es-list">
          ${para.sentences.map((s) => `
            <li class="es" data-zh>
              <p class="es-en">${text(s.en)}${speakBtn(s.en, 'say say-quiet')}</p>
              <p class="es-job"><span class="je">${text(s.jobEn)}</span>
                <span class="jz">${text(s.jobZh)}</span></p>
              <p class="zh">${text(s.zh)}</p>
            </li>`).join('')}
        </ol>
      </div>`).join('');

    const isPractice = LESSON.practice.year === e.year;

    return `
      <article class="essay" id="${e.id}">
        <header class="essay-head">
          <span class="yr">${text(e.year)}</span>
          <div class="essay-t">
            <p class="essay-en">${text(e.title)}</p>
            <p class="essay-aim">${text(e.aim)}</p>
          </div>
        </header>

        <p class="essay-meta">
          <span class="chip">${text(e.type)}</span>
          <span class="chip chip-q">${e.pictures} 張圖</span>
          <span class="chip chip-q">${e.words} words</span>
        </p>

        <div class="steps">
          <button class="step-btn" data-do="structure" aria-pressed="false">
            <span class="s1">${text(LESSON.parts.find((x) => x.kind === 'essays').structureLabel)}</span>
            <span class="s2">${text(LESSON.parts.find((x) => x.kind === 'essays').structureLabelEn)}</span>
          </button>
        </div>

        ${paras}

        <div class="keybox">
          <p class="keybox-h">中文重點</p>
          <p class="keybox-b">${text(e.keyZh)}</p>
          ${e.caution ? `<p class="caution">⚠ ${text(e.caution)}</p>` : ''}
        </div>

        <div class="takeaway">
          <p class="takeaway-h">換題目也帶得走的一件事</p>
          <p class="takeaway-b">${text(e.takeawayZh)}</p>
          <p class="takeaway-en">${text(e.takeawayEn)}${speakBtn(e.takeawayEn, 'say say-quiet')}</p>
        </div>

        ${isPractice ? `
          <a class="practice" href="${text(LESSON.practice.href)}">
            <span class="practice-h">→ ${text(LESSON.practice.label)}</span>
            <span class="practice-b">${text(LESSON.practice.note)}</span>
          </a>` : ''}
      </article>`;
  };

  return `
    <section class="part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}
      <div class="prov">
        <p class="prov-h">${text(pr.h)}</p>
        <p class="prov-b">${text(pr.body)}</p>
        <p><a class="prov-l" href="${text(pr.link)}" target="_blank" rel="noopener">${text(pr.linkLabel)} ↗</a></p>
      </div>
      ${p.items.map(one).join('')}
    </section>`;
}

function buildPatterns(p) {
  const block = (g, cls) => `
    <h3 class="sub">${text(g.h)}</h3>
    <ul class="pat ${cls}">
      ${g.items.map((it) => `
        <li>
          <p class="pat-n">${text(it.name)}
            ${it.hit ? `<span class="hit">${text(it.hit)}</span>` : '<span class="hit hit-all">7/7</span>'}</p>
          <p class="pat-b">${text(it.body)}</p>
          ${it.egs ? `<ul class="egs">${it.egs.map((g2) => `
            <li><a class="egy" href="#e${text(g2.y)}">${text(g2.y)}</a>
              <span class="egt">${text(g2.en)}${speakBtn(g2.en, 'say say-quiet')}</span></li>`).join('')}</ul>` : ''}
        </li>`).join('')}
    </ul>`;

  return `
    <section class="part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}
      ${block(p.always, 'pat-all')}
      ${block(p.often, 'pat-often')}
      ${block(p.pairs, 'pat-pairs')}
      <p class="close">${text(p.close)}</p>
    </section>`;
}

function buildFrames(p) {
  return `
    <section class="part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}
      <ul class="cards cards-wide">
        ${p.items.map((f) => flip(f.zh, f.en, f.note,
          `<p class="card-name">${text(f.name)}</p>`)).join('')}
      </ul>
    </section>`;
}

function buildToolkit(p) {
  return `
    <section class="part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}
      ${p.groups.map((g) => `
        <h3 class="sub">${text(g.name)}</h3>
        <ul class="cards cards-wide">
          ${g.items.map((it) => flip(it.zh, it.en, it.note)).join('')}
        </ul>`).join('')}
    </section>`;
}

function buildMethod(p) {
  return `
    <section class="part" id="${p.id}" aria-labelledby="h-${p.id}">
      ${head(p)}
      <ol class="steps-chain">
        ${p.steps.map((s, i) => `
          <li>
            <span class="sc-n">${i + 1}</span>
            <span class="sc-t"><span class="sc-name">${text(s.name)}</span>
              <span class="sc-note">${text(s.note)}</span></span>
          </li>`).join('')}
      </ol>
      <p class="close">${text(p.close)}</p>
    </section>`;
}

const BUILDERS = {
  years: buildYears,
  trends: buildTrends,
  types: buildTypes,
  essays: buildEssays,
  patterns: buildPatterns,
  frames: buildFrames,
  toolkit: buildToolkit,
  method: buildMethod,
};

function buildCover() {
  const i = LESSON.intro;
  const g = LESSON.goals;
  return `
    <header class="cover" id="top">
      <p class="kicker">${text(LESSON.kicker)}</p>
      <h1>${text(LESSON.title)}</h1>
      <p class="cover-en">${text(LESSON.titleEn)}</p>
      <p class="cover-intro">${text(i.zh)}</p>
      <div class="goals">
        <p class="goals-h">${text(g.lead)}</p>
        <ul>${g.items.map((x) => `<li>${text(x)}</li>`).join('')}</ul>
      </div>
      <p class="source">${text(LESSON.source.zh)}</p>
    </header>`;
}

function buildNav() {
  return `
    <nav class="toc" aria-label="目錄">
      <p class="toc-head">目錄</p>
      <ul>
        <li><a href="#top" data-target="top"><span class="n">·</span>
          <span class="t">開始</span></a></li>
        ${LESSON.parts.map((p) => `
          <li><a href="#${p.id}" data-target="${p.id}"><span class="n">${text(p.n)}</span>
            <span class="t">${text(p.title)}</span></a></li>`).join('')}
      </ul>
    </nav>`;
}

document.title = `${LESSON.title} · ${LESSON.kicker}`;

$('#nav').appendChild(el(buildNav()));

const doc = $('#doc');
doc.appendChild(el(buildCover()));
LESSON.parts.forEach((p) => {
  const build = BUILDERS[p.kind];
  if (!build) throw new Error(`Part "${p.id}": 沒有對應 kind "${p.kind}" 的 builder`);
  doc.appendChild(el(build(p)));
});

// -------------------------------------------------------------------- 設定

const store = {
  get(k, fallback) {
    try { const v = localStorage.getItem(`ew.${k}`); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(k, v) { try { localStorage.setItem(`ew.${k}`, v); } catch { /* 無痕模式 */ } },
};

// -------------------------------------------------------------------- 互動

doc.addEventListener('click', (e) => {
  const t = e.target;

  const say = t.closest('.say');
  if (say) { e.stopPropagation(); speak(say.dataset.say); return; }

  // 範文的「顯示每句在做什麼」
  const struct = t.closest('[data-do="structure"]');
  if (struct) {
    const on = !struct.classList.contains('on');
    struct.closest('.essay').classList.toggle('structure', on);
    struct.classList.toggle('on', on);
    struct.setAttribute('aria-pressed', String(on));
    return;
  }

  // 句型卡／句庫卡：翻面
  const card = t.closest('.card');
  if (card) {
    const open = card.classList.toggle('open');
    card.setAttribute('aria-expanded', String(open));
    return;
  }

  // 目錄或範文之間的跳轉連結，交給瀏覽器處理
  if (t.closest('a')) return;

  // 範文的單句：點一下看中譯
  const line = t.closest('.es[data-zh]');
  if (line && !t.closest('button')) { line.classList.toggle('open'); return; }
});

doc.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const hit = e.target.closest('.card');
  if (hit) { e.preventDefault(); hit.click(); }
});

// -------------------------------------------------------------------- 朗讀

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
  speak('The picture shows several people waiting in line at a crowded place.');
});

$('#rate').addEventListener('change', () => {
  store.set('rate', $('#rate').value);
  speak('This phenomenon has become more common in Taiwan in recent years.');
});
$('#rate').value = store.get('rate', '0.95');

// -------------------------------------------------------------------- 面板

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
  $$('.essay').forEach((x) => x.classList.toggle('structure', on));
  $$('[data-do="structure"]').forEach((b) => {
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', String(on));
  });
  $$('.card').forEach((c) => {
    c.classList.toggle('open', on);
    c.setAttribute('aria-expanded', String(on));
  });
  setPanel(false);
}

$('#showAll').addEventListener('click', () => openAll(true));
$('#hideAll').addEventListener('click', () => openAll(false));

// -------------------------------------------------------------------- 版面

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
  closeNav();
  setPanel(false);
  speechSynthesis.cancel();
});
