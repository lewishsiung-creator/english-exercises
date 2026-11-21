import { json, CODE } from '../../_course.js';

// POST /api/seen/<code>  — the short link's page calls this (sendBeacon) as a
// student's browser opens it, so Lewis can see in the form and 學員清單 that
// the link was opened, how often, and when last. Link previews (LINE's
// crawler) never run it, and Lewis's own devices skip it. Nothing else about
// the visitor is kept.
export async function onRequestPost({ params, env }) {
  if (!CODE.test(params.code)) return json({ error: 'bad code' }, 400);
  if ((await env.COURSE.get('link:' + params.code)) == null) return json({ error: 'no such link' }, 404);
  const now = Date.now();
  const s = (await env.COURSE.get('seen:' + params.code, 'json').catch(() => null)) || { count: 0, first: now };
  s.count += 1; s.last = now;
  await env.COURSE.put('seen:' + params.code, JSON.stringify(s));
  return json({ ok: true });
}
