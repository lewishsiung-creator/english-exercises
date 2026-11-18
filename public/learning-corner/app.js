/* Learning Corner — the one thing this page needs a script for.

   The picture-book page is private: a link-shared page of copyrighted books,
   for the family only. This repo is public, so its address must never be
   written here. Instead the family's link to this page carries it:

       …/learning-corner/#books=<the id at the end of the book page's link>

   Whatever follows # is never sent to the server and appears in no log. The
   id is also remembered on that device (localStorage), so the door stays
   after a reload or a visit by the plain address. Opened anywhere else, the
   page shows the other doors and nothing says a third exists.

   To make a device forget it:   …/learning-corner/#books=off

   The id is checked against a strict pattern and only ever appended to one
   fixed address, so a made-up link cannot point the door somewhere else. */

(function () {
  'use strict';

  var KEY = 'corner.books';
  var BASE = 'https://claude.ai/artifact/';
  var OK = /^[A-Za-z0-9_-]{8,64}$/;
  var door = document.getElementById('booksDoor');
  if (!door) return;

  /* Storage can be missing or refuse (private windows, blocked site data).
     The page must still work: with the link it came from, the door shows. */
  function remembered() {
    try { return localStorage.getItem(KEY) || ''; } catch (e) { return ''; }
  }
  function remember(id) {
    try {
      if (id) localStorage.setItem(KEY, id);
      else localStorage.removeItem(KEY);
    } catch (e) { /* nothing to do */ }
  }

  function fromLink() {
    var m = /(?:^#|&)books=([^&]*)/.exec(location.hash);
    return m ? m[1] : null;
  }

  function show() {
    var given = fromLink();
    var id = '';

    if (given === 'off') {
      remember('');
    } else if (given !== null && OK.test(given)) {
      id = given;
      remember(id);
    } else {
      id = remembered();
      if (!OK.test(id)) id = '';
    }

    if (id) {
      door.href = BASE + id;
      door.hidden = false;
    } else {
      door.removeAttribute('href');
      door.hidden = true;
    }
  }

  show();
  window.addEventListener('hashchange', show);
})();
