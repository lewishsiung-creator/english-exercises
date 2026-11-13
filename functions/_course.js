/* Short links for the course pages (/course/), added 2026-11-13.

   A full course link carries the whole page in its #hash and runs to about
   1,400 characters. Lewis asked for something shorter, knowing the trade:
   the page's data now also lives in KV (binding COURSE, private, never in
   this public repo) so the link only has to carry a code — /c/k3x9p2m.

   KV keys
     link:<code>  the same base64url text the long link carries after #d=
                  metadata { created, updated } (ms)
     auth         { salt, hash } of Lewis's passcode — never the passcode

   Making or changing a link needs the passcode (header x-course-pass).
   Lewis sets it himself, the first time he makes a short link — the same way
   the Journal Desk upload passcode works. Reading a link needs nothing: the
   link itself is the permission, exactly as the long link was. */

export const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
    },
  });

// 7 characters from 31 that can't be misread (no 0/o, 1/l/i): about 27 billion
const ALPHA = 'abcdefghjkmnpqrstuvwxyz23456789';
export const CODE = /^[a-hjkmnp-z2-9]{7}$/;
export function newCode() {
  return [...crypto.getRandomValues(new Uint8Array(7))].map((b) => ALPHA[b % ALPHA.length]).join('');
}

async function sha256hex(text) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

// → 'ok' | 'set' (passcode just set) | 'need' (none sent) | 'short' | 'wrong'
export async function checkPass(request, env) {
  const pass = request.headers.get('x-course-pass') || '';
  if (!pass) return 'need';
  const a = await env.COURSE.get('auth', 'json').catch(() => null);
  if (!a) {
    if (pass.length < 6 || pass.length > 64) return 'short';
    const salt = crypto.randomUUID();
    await env.COURSE.put('auth', JSON.stringify({ salt, hash: await sha256hex(salt + pass), at: Date.now() }));
    return 'set';
  }
  if (await sha256hex(a.salt + pass) === a.hash) return 'ok';
  await new Promise((r) => setTimeout(r, 800)); // slow down guessing
  return 'wrong';
}

// The link text must be what /course/ can draw: base64url of UTF-8 JSON with a name.
export function validHash(h) {
  if (typeof h !== 'string' || !/^[A-Za-z0-9_-]{8,30000}$/.test(h)) return false;
  try {
    let b = h.replace(/-/g, '+').replace(/_/g, '/');
    while (b.length % 4) b += '=';
    const bin = atob(b);
    const d = JSON.parse(new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0))));
    return !!(d && typeof d === 'object' && typeof d.n === 'string' && d.n.trim());
  } catch { return false; }
}
