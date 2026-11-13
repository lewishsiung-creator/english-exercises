import { json, CODE, newCode, checkPass, validHash } from '../../_course.js';

// POST /api/c  { h, code? }  header x-course-pass
//   → { code }            a new short link, or `code` overwritten in place
//   401 { need | wrong | short }
export async function onRequestPost({ request, env }) {
  const auth = await checkPass(request, env);
  if (auth === 'need') return json({ error: 'need' }, 401);
  if (auth === 'short') return json({ error: 'short' }, 401);
  if (auth === 'wrong') return json({ error: 'wrong' }, 401);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'bad json' }, 400); }
  if (!validHash(body.h)) return json({ error: 'bad link' }, 400);

  const now = Date.now();
  let code = body.code, created = now;
  if (code) {
    if (!CODE.test(code)) return json({ error: 'bad code' }, 400);
    const old = await env.COURSE.getWithMetadata('link:' + code);
    if (old.value == null) return json({ error: 'no such link' }, 404);
    created = (old.metadata && old.metadata.created) || now;
  } else {
    do { code = newCode(); } while ((await env.COURSE.get('link:' + code)) != null);
  }
  await env.COURSE.put('link:' + code, body.h, { metadata: { created, updated: now } });
  return json({ code, set: auth === 'set' });
}
