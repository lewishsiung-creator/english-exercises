/* Turn public/english-brain/content.js into something that can be pasted into
   WordPress, so the article can live on lewistoeic.com without being retyped.

   Run:  node tools/english-brain-to-wordpress.js
   Out:  ~/Downloads/英文腦不是魔法_WordPress.html

   Paste it in the block editor's CODE EDITOR (⋮ → 程式碼編輯器), not the
   visual one: the output is Gutenberg block markup, so paragraphs, headings,
   lists, the table and the prompt arrive as native, editable blocks. The few
   pieces WordPress has no block for — the callouts, the three-version
   example, the sentence-combining box, the closing chain — come through as
   custom-HTML blocks with their styles inlined, because a theme or a caching
   plugin will strip a <style> tag but leaves inline styles alone.

   The speak buttons are deliberately not carried over: they need the page's
   JavaScript. The WordPress copy ends with a link to the interactive one.

   Regenerate after any edit to content.js rather than editing the output.
*/

const fs = require('fs');
const path = require('path');
const os = require('os');

const SRC = path.join(__dirname, '..', 'public', 'english-brain', 'content.js');
const OUT = path.join(os.homedir(), 'Downloads', '英文腦不是魔法_WordPress.html');
const LIVE = 'https://english-exercises-6e4.pages.dev/english-brain/';

const ARTICLE = new Function(`${fs.readFileSync(SRC, 'utf8')}; return ARTICLE;`)();

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* Inline styles, repeated rather than shared, for the reason in the header. */
const S = {
  key: 'margin:1.6rem 0;padding:.9rem 1.2rem;background:#fbf2dc;border-left:3px solid #e8b53f;border-radius:0 10px 10px 0;font-size:1.02rem',
  box: 'padding:.8rem 1.1rem;border-radius:10px;margin:.6rem 0',
  lab: 'display:block;font-size:.7rem;font-weight:700;letter-spacing:.14em;margin-bottom:.3rem',
  en: 'font-family:Georgia,"Times New Roman",serif',
};

const P = (t) => `<!-- wp:paragraph -->\n<p>${esc(t)}</p>\n<!-- /wp:paragraph -->`;
const H = (level, t) => `<!-- wp:heading {"level":${level}} -->\n<h${level}>${esc(t)}</h${level}>\n<!-- /wp:heading -->`;
const HTML = (inner) => `<!-- wp:html -->\n${inner}\n<!-- /wp:html -->`;

function list(b) {
  const tag = b.ordered ? 'ol' : 'ul';
  const attrs = b.ordered ? ' {"ordered":true}' : '';
  const items = b.items.map((i) =>
    `<!-- wp:list-item -->\n<li>${i.lead ? `<strong>${esc(i.lead)}</strong>：` : ''}${esc(i.text)}</li>\n<!-- /wp:list-item -->`
  ).join('\n');
  return `<!-- wp:list${attrs} -->\n<${tag}>\n${items}\n</${tag}>\n<!-- /wp:list -->`;
}

const BLOCKS = {
  p: (b) => P(b.text),
  sub: (b) => H(3, b.text),
  list,
  key: (b) => HTML(`<p style="${S.key}">${esc(b.text)}</p>`),

  quote: (b) => HTML(
    `<figure style="margin:1.8rem 0;padding:1.1rem 1.3rem;background:#fff;border:1px solid #e3e0d8;border-radius:12px">` +
    `<p style="margin:0;${S.en};font-size:1.08rem;line-height:1.65">${esc(b.en)}</p>` +
    `<figcaption style="margin-top:.5rem;font-size:.9rem;color:#4e5868">${esc(b.zh)}</figcaption></figure>`),

  versions: (b) => HTML(
    `<div style="margin:1.5rem 0">` +
    `<div style="${S.box};background:#fff;border:1px solid #e3e0d8"><span style="${S.lab};color:#868f9d">中文</span>${esc(b.zh)}</div>` +
    `<div style="${S.box};border:1px dashed #cdc8bc"><span style="${S.lab};color:#868f9d">逐字直翻</span><span style="${S.en};color:#868f9d">${esc(b.literal)}</span></div>` +
    `<div style="${S.box};background:#eceff6;border:1px solid #c3cde0"><span style="${S.lab};color:#3c4f76">自然的英文</span><span style="${S.en};font-size:1.04rem">${esc(b.natural)}</span></div>` +
    `</div>`),

  combine: (b) => HTML(
    `<div style="margin:1.5rem 0">` +
    b.parts.map((p) =>
      `<p style="margin:.35rem 0;${S.en}"><span style="display:inline-block;width:1.5rem;text-align:center;font-family:system-ui,sans-serif;font-size:.75rem;font-weight:700;color:#fff;background:#868f9d;border-radius:5px;margin-right:.6rem">${esc(p.k)}</span>${esc(p.en)}</p>`
    ).join('') +
    `<p style="margin:1.1rem 0">${esc(b.note)}</p>` +
    `<p style="margin:0;padding:.9rem 1.2rem;background:#eceff6;border:1px solid #c3cde0;border-radius:10px;${S.en};font-size:1.05rem;line-height:1.6">${esc(b.answer)}</p>` +
    `</div>`),

  /* A native code block: it keeps the line breaks, and it is the one thing on
     the page a reader is meant to copy. */
  prompt: (b) => `<!-- wp:code -->\n<pre class="wp-block-code"><code>${esc(b.text)}</code></pre>\n<!-- /wp:code -->`,

  table: (b) => {
    const head = b.head.map((h) => `<th>${esc(h)}</th>`).join('');
    const rows = b.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('');
    return `<!-- wp:table -->\n<figure class="wp-block-table"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></figure>\n<!-- /wp:table -->`;
  },

  flow: (b) => HTML(
    `<p style="margin:1.6rem 0;padding:1rem 1.1rem;background:#fff;border:1px solid #e3e0d8;border-radius:12px;line-height:2.4">` +
    b.items.map((i) =>
      `<span style="padding:.2rem .7rem;background:#eceff6;border:1px solid #c3cde0;border-radius:999px;font-size:.9rem;white-space:nowrap">${esc(i)}</span>`
    ).join('<span style="color:#868f9d;margin:0 .35rem">→</span>') +
    `</p>`),

  quad: (b) => HTML(
    b.items.map((i) =>
      `<div style="margin:.7rem 0;padding:.8rem 1.1rem;background:#fff;border:1px solid #e3e0d8;border-left:3px solid #c3cde0;border-radius:0 10px 10px 0">` +
      `<p style="margin:0;${S.en};font-size:1.05rem">${esc(i.en)}</p>` +
      `<p style="margin:.2rem 0 0;font-size:.9rem;color:#4e5868">${esc(i.zh)}</p></div>`
    ).join('')),
};

const out = [];

out.push(`<!-- ${ARTICLE.title}｜${ARTICLE.subtitle} -->`);
out.push(`<!-- 貼進 WordPress 的「程式碼編輯器」，不是視覺編輯器。由 tools/english-brain-to-wordpress.js 產生，請勿直接編輯這個檔案。 -->`);
out.push(P(ARTICLE.blurb));
ARTICLE.opening.forEach((t) => out.push(P(t)));

ARTICLE.sections.forEach((s) => {
  out.push(H(2, s.n ? `${s.n}、${s.title}` : s.title));
  s.blocks.forEach((b) => {
    const fn = BLOCKS[b.t];
    if (!fn) throw new Error(`Unknown block type "${b.t}"`);
    out.push(fn(b));
  });
});

out.push(H(2, '延伸'));
out.push(HTML(
  `<p style="margin:1.5rem 0;padding:1.1rem 1.3rem;background:#eceff6;border:1px solid #c3cde0;border-radius:12px">` +
  `本文另有<strong>互動版</strong>：每個英文例句都可以點 🔊 聽，文中的 AI 提示詞可以一鍵複製。` +
  `<a href="${LIVE}" target="_blank" rel="noopener" style="color:#3c4f76;font-weight:600">前往互動版 →</a></p>`));

out.push(H(2, '參考文獻'));
out.push(list({ ordered: true, items: ARTICLE.refs.map((r) => ({ text: r })) }));

fs.writeFileSync(OUT, out.join('\n\n') + '\n');
console.log(`wrote ${OUT}`);
console.log(`${out.length} blocks, ${fs.statSync(OUT).size} bytes`);
