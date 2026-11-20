import { CODE } from '../_course.js';

// /c/<code> → /course/#d=…
//
// The short link opens the same page the long link did. Since 2026-11-21 it
// answers with a tiny page instead of a bare redirect, so LINE's link preview
// can name the student: 「Vicky 的下一期課程安排」 rather than the fixed
// 「上課時間 & 學費說明」 of /course/, which never sees the #hash. A browser
// is sent straight on by the script (location.replace, so Back still works).
// An unknown code still lands on /course/, which says the link is incomplete.
// Not cached, so a link Lewis updates shows the change at once.

const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function read(h) {
  try {
    let b = h.replace(/-/g, '+').replace(/_/g, '/');
    while (b.length % 4) b += '=';
    const bin = atob(b);
    return JSON.parse(new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0))));
  } catch { return null; }
}

const md = (iso) => {
  const m = /^\d{4}-(\d{2})-(\d{2})$/.exec(iso || '');
  return m ? `${+m[1]}/${+m[2]}` : '';
};

export async function onRequestGet({ request, params, env }) {
  const h = CODE.test(params.code) ? await env.COURSE.get('link:' + params.code) : null;
  const to = new URL('/course/' + (h ? '#d=' + h : ''), request.url);
  const d = h ? read(h) : null;
  if (!d) {
    return new Response(null, {
      status: 302,
      headers: { location: to.href, 'cache-control': 'no-store', 'x-robots-tag': 'noindex, nofollow' },
    });
  }

  const name = String(d.n || '').trim();
  const first = name.split(/\s+/)[0] || name;
  const renew = d.k === 'renew' || (d.k !== 'new' && !!(d.s || d.e || d.h));
  const title = renew ? `${first} 的下一期課程安排` : `${first} 的上課時間 & 學費說明`;
  let desc;
  if (renew) {
    const hrs = /^\d+(\.\d+)?$/.test(String(d.h || '').trim()) ? `已完成 ${String(d.h).trim()} 小時` : '回顧已完成的課程';
    desc = `${hrs}${md(d.ns) ? `，下一期 ${md(d.ns)} 開始` : ''}。課程方案、學費與付款方式。`;
  } else {
    desc = `${md(d.ns) ? `第一堂課 ${md(d.ns)}。` : ''}上課安排、學費方案、付款方式與請假規則。`;
  }
  const img = new URL('/course/share.png?v=1', request.url).href;

  const html = `<!DOCTYPE html>
<html lang="zh-Hant"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${esc(title)}｜Lewis Biz English</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}｜Lewis Biz English">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(request.url)}">
<meta property="og:image" content="${esc(img)}">
<meta property="og:image:width" content="600">
<meta property="og:image:height" content="600">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#2f3c7e">
<script>location.replace(${JSON.stringify(to.href)});</script>
</head><body style="background:#2f3c7e">
<noscript><p style="color:#fff;font-family:sans-serif;padding:24px"><a style="color:#f4b63f" href="${esc(to.href)}">打開課程說明</a></p></noscript>
</body></html>`;

  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
}
