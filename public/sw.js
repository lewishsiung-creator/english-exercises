/* The 英文學習 family's service worker (2026-11-08): the six pages open with
   no connection, once a page has been opened online.

   It lives at the site root only so it can be registered for the family's
   three folders -- learn/, reading/ and exam-writing/ -- each as its own
   scope (learn/app.js does that). It never controls any other page on the
   site: a scope is a folder, and no student's notebook is under these three.

   Network first, always: online, every request goes to the server exactly
   as before, so a new deploy shows at once and nothing can go stale. A copy
   of each answer is kept. Offline -- or when the network has not answered in
   four seconds, as on a train -- the kept copy is served instead.

   The first visit to a page happens before this worker controls it, so the
   page itself posts the list of files it used ({ cache: [...] }) and they are
   fetched into the cache then. */
const CACHE = 'el-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k !== CACHE && k.startsWith('el-')) await caches.delete(k);
  await self.clients.claim();
})()));

self.addEventListener('message', (e) => {
  const urls = e.data && Array.isArray(e.data.cache) ? e.data.cache : null;
  if (!urls) return;
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(urls.map((u) =>
    fetch(u, { cache: 'no-cache' }).then((r) => (r.ok ? c.put(u, r) : null)).catch(() => null)))));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(networkFirst(req));
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  const net = fetch(req).then((res) => {
    if (res.ok) cache.put(req, res.clone());
    return res;
  });
  const slow = new Promise((resolve) => setTimeout(resolve, 4000, 'slow'));
  try {
    const first = await Promise.race([net, slow]);
    if (first !== 'slow') return first;
    const kept = await cache.match(req, { ignoreSearch: true });
    return kept || await net;
  } catch (err) {
    const kept = await cache.match(req, { ignoreSearch: true });
    if (kept) return kept;
    throw err;
  }
}
