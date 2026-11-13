import { CODE } from '../_course.js';

// /c/<code> → /course/#d=…   The short link opens the same page the long
// link did; an unknown code lands on /course/, which says the link is
// incomplete. Not cached, so a link Lewis updates shows the change at once.
export async function onRequestGet({ request, params, env }) {
  const h = CODE.test(params.code) ? await env.COURSE.get('link:' + params.code) : null;
  const to = new URL('/course/' + (h ? '#d=' + h : ''), request.url);
  return new Response(null, {
    status: 302,
    headers: { location: to.href, 'cache-control': 'no-store', 'x-robots-tag': 'noindex, nofollow' },
  });
}
