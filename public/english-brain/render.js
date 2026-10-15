/* Renders ARTICLE. One page, no activities.

   Unlike every student page in this repo, nothing here is hidden behind a tap
   and nothing is practised: it is an article, and the reader is reading. The
   only two controls are 🔊 on the English sentences — this is still an English
   teacher's writing, and the examples are meant to be heard — and a copy
   button on the AI prompt, which exists to be used.
*/

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function text(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function attr(s) { return text(s).replace(/"/g, '&quot;'); }

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function say(sentence) {
  return `<button class="say" data-say="${attr(sentence)}" title="朗讀" aria-label="朗讀">🔊</button>`;
}

const BLOCKS = {
  p: (b) => `<p class="p">${text(b.text)}</p>`,

  sub: (b) => `<h3 class="sub">${text(b.text)}</h3>`,

  /* The one-line takeaway of a passage. Gold rule, slightly larger — the
     thing to remember if you remember nothing else from the section. */
  key: (b) => `<p class="key">${text(b.text)}</p>`,

  list: (b) => `
    <${b.ordered ? 'ol' : 'ul'} class="list${b.ordered ? ' list-num' : ''}">
      ${b.items.map((i) => `<li>${i.lead ? `<strong>${text(i.lead)}</strong>：` : ''}${text(i.text)}</li>`).join('')}
    </${b.ordered ? 'ol' : 'ul'}>`,

  quote: (b) => `
    <figure class="quote">
      <p class="quote-en">${text(b.en)}${say(b.en)}</p>
      <figcaption>${text(b.zh)}</figcaption>
    </figure>`,

  /* The same meaning three ways: the Chinese, the word-for-word English that
     Chinese structure produces, and the English a native speaker would use.
     The middle one is the point of the block, so it is marked as wrong-ish —
     dashed and quiet — without being called a mistake. */
  versions: (b) => `
    <div class="versions">
      <div class="ver ver-zh"><p class="ver-lab">中文</p><p>${text(b.zh)}</p></div>
      <div class="ver ver-lit"><p class="ver-lab">逐字直翻</p><p>${text(b.literal)}${say(b.literal)}</p></div>
      <div class="ver ver-nat"><p class="ver-lab">自然的英文</p><p>${text(b.natural)}${say(b.natural)}</p></div>
    </div>`,

  /* Three sentences to be combined into one, then the answer. */
  combine: (b) => `
    <div class="combine">
      <ol class="combine-parts">
        ${b.parts.map((p) => `<li><span class="combine-k">${text(p.k)}</span><span>${text(p.en)}${say(p.en)}</span></li>`).join('')}
      </ol>
      <p class="p">${text(b.note)}</p>
      <p class="combine-answer">${text(b.answer)}${say(b.answer)}</p>
    </div>`,

  prompt: (b) => `
    <div class="prompt">
      <div class="prompt-bar">
        <span class="prompt-lab">提示詞範例</span>
        <button class="copy" data-copy="${attr(b.text)}"><span class="copy-idle">複製</span><span class="copied">已複製</span></button>
      </div>
      <pre>${text(b.text)}</pre>
    </div>`,

  table: (b) => `
    <div class="table-wrap">
      <table class="table">
        <thead><tr>${b.head.map((h) => `<th>${text(h)}</th>`).join('')}</tr></thead>
        <tbody>${b.rows.map((r) => `<tr>${r.map((c, i) => `<td${i ? '' : ' class="row-lab"'}>${text(c)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>`,

  flow: (b) => `
    <p class="flow">${b.items.map((i) => `<span class="flow-step">${text(i)}</span>`).join('<span class="flow-arrow" aria-hidden="true">→</span>')}</p>`,

  quad: (b) => `
    <ol class="quad">
      ${b.items.map((i) => `
        <li><p class="quad-en">${text(i.en)}${say(i.en)}</p><p class="quad-zh">${text(i.zh)}</p></li>`).join('')}
    </ol>`,
};

function section(s) {
  const blocks = s.blocks.map((b) => {
    const fn = BLOCKS[b.t];
    if (!fn) throw new Error(`Unknown block type "${b.t}" in section ${s.id}`);
    return fn(b);
  }).join('');

  return `
    <section class="section" id="${s.id}">
      <h2 class="section-head">${s.n ? `<span class="section-n">${text(s.n)}</span>` : ''}${text(s.title)}</h2>
      ${blocks}
    </section>`;
}

document.title = `${ARTICLE.title}｜${ARTICLE.subtitle}`;

$('#doc').appendChild(el(`
  <article>
    <header class="cover">
      <h1>${text(ARTICLE.title)}</h1>
      <p class="subtitle">${text(ARTICLE.subtitle)}</p>
      <p class="byline">${text(ARTICLE.byline)}　<span>${text(ARTICLE.date)}</span></p>
      <div class="opening">${ARTICLE.opening.map((t) => `<p class="p">${text(t)}</p>`).join('')}</div>
      <nav class="contents" aria-label="目錄">
        <p class="contents-head">目錄</p>
        <ol>${ARTICLE.sections.map((s) => `
          <li><a href="#${s.id}">${s.n ? `<span class="contents-n">${text(s.n)}</span>` : ''}${text(s.title)}</a></li>`).join('')}
        </ol>
      </nav>
    </header>
    ${ARTICLE.sections.map(section).join('')}
    <aside class="cta">
      <p>${text(ARTICLE.cta.text).replace(text(ARTICLE.cta.label),
        `<a href="${attr(ARTICLE.cta.href)}" target="_blank" rel="noopener">${text(ARTICLE.cta.label)}</a>`)}</p>
    </aside>
    <section class="refs">
      <h2>參考文獻</h2>
      <ol>${ARTICLE.refs.map((r) => `<li>${text(r)}</li>`).join('')}</ol>
    </section>
  </article>`));

/* 🔊 — the examples are English sentences, so an English voice, chosen once. */
let voice = null;
function loadVoices() {
  const vs = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
  voice = vs.find((v) => v.lang === 'en-US' && /Samantha|Ava|Allison|Google US/i.test(v.name))
       || vs.find((v) => v.lang === 'en-US') || vs[0] || null;
}
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }

document.addEventListener('click', async (e) => {
  const sayBtn = e.target.closest('.say');
  if (sayBtn) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(sayBtn.dataset.say);
    if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = 'en-US'; }
    u.rate = 0.95;
    speechSynthesis.speak(u);
    return;
  }

  const copyBtn = e.target.closest('.copy');
  if (copyBtn) {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.copy);
      copyBtn.classList.add('ok');
      setTimeout(() => copyBtn.classList.remove('ok'), 1600);
    } catch {
      // Clipboard refused (an old browser, or no permission): select it instead,
      // so the reader can still copy it by hand rather than being told nothing.
      const pre = copyBtn.closest('.prompt').querySelector('pre');
      const r = document.createRange();
      r.selectNodeContents(pre);
      const sel = getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
    }
  }
});
