import { json, CODE, authError } from '../../_course.js';

// POST /api/status/<code> { s }  header x-course-pass
// Where Lewis is with this student, for his 學員清單.
const OK = ['', 'sent', 'replied', 'paid', 'closed'];
export async function onRequestPost({ request, params, env }) {
  const bad = await authError(request, env);
  if (bad) return bad;
  if (!CODE.test(params.code)) return json({ error: 'bad code' }, 400);
  let body;
  try { body = await request.json(); } catch { return json({ error: 'bad json' }, 400); }
  if (!OK.includes(body.s)) return json({ error: 'bad status' }, 400);
  if (body.s) await env.COURSE.put('st:' + params.code, JSON.stringify({ s: body.s, at: Date.now() }));
  else await env.COURSE.delete('st:' + params.code);
  return json({ ok: true });
}
