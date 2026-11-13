import { json, CODE } from '../../_course.js';

// GET /api/c/<code> → { h }   what the form's 編輯舊連結 reads back
export async function onRequestGet({ params, env }) {
  if (!CODE.test(params.code)) return json({ error: 'bad code' }, 400);
  const h = await env.COURSE.get('link:' + params.code);
  return h == null ? json({ error: 'no such link' }, 404) : json({ h });
}
