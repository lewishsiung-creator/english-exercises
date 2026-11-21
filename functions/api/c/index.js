import { json, CODE, newCode, checkPass, validHash, readHash, isRenew, authError } from '../../_course.js';

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
  const d = readHash(body.h);
  await env.COURSE.put('link:' + code, body.h, {
    metadata: { created, updated: now, n: String(d.n).trim().slice(0, 80), k: isRenew(d) ? 'renew' : 'new' },
  });
  return json({ code, set: auth === 'set' });
}

// GET /api/c  header x-course-pass → { links: [{ code, n, k, created, updated, seen, st }] }
// Lewis's 學員清單, newest first.
export async function onRequestGet({ request, env }) {
  const bad = await authError(request, env);
  if (bad) return bad;
  const keys = [];
  let cursor;
  do {
    const page = await env.COURSE.list({ prefix: 'link:', cursor });
    keys.push(...page.keys);
    cursor = page.list_complete ? null : page.cursor;
  } while (cursor);
  const links = await Promise.all(keys.map(async (k) => {
    const code = k.name.slice(5), m = k.metadata || {};
    let n = m.n, kind = m.k;
    if (!n) {                       // made before names were kept in metadata
      const d = readHash(await env.COURSE.get(k.name)) || {};
      n = String(d.n || '').trim(); kind = isRenew(d) ? 'renew' : 'new';
    }
    const [seen, st] = await Promise.all([
      env.COURSE.get('seen:' + code, 'json').catch(() => null),
      env.COURSE.get('st:' + code, 'json').catch(() => null),
    ]);
    return { code, n, k: kind, created: m.created || 0, updated: m.updated || 0, seen, st };
  }));
  links.sort((a, b) => (b.updated || 0) - (a.updated || 0));
  return json({ links });
}
