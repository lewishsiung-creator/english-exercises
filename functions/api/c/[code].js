import { json, CODE } from '../../_course.js';

// GET /api/c/<code> → { h, seen }   what the form's 編輯舊連結 reads back,
// with how often the student has opened it
export async function onRequestGet({ params, env }) {
  if (!CODE.test(params.code)) return json({ error: 'bad code' }, 400);
  const h = await env.COURSE.get('link:' + params.code);
  if (h == null) return json({ error: 'no such link' }, 404);
  const seen = await env.COURSE.get('seen:' + params.code, 'json').catch(() => null);
  return json({ h, seen });
}
