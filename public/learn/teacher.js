/* Which device is the teacher's, for the 英文學習 family (2026-11-08).

   A teacher opens any page of the family once with #teach; from then on this
   browser is a teacher's on every page, kept as lc.teacher. The word pages
   read the same flag (and set it from their own #teach). Here it only puts
   `is-teacher` on <html>, so anything marked `teacher-only` shows -- 學測寫作's
   全部展開／全部收起／指定任務, 閱讀's 顯示所有答案. Students never see those.
   設定 → 在這台裝置隱藏 on a word page clears it again.

   Loaded in <head>, before the page's own scripts, so #teach is gone from
   the address bar before a page reads its hash. */
(function () {
  function check() {
    try {
      if (location.hash === '#teach') {
        localStorage.setItem('lc.teacher', 'true');
        history.replaceState(null, '', location.pathname + location.search);
      }
    } catch (e) { /* storage blocked: stay a student page */ }
    let on = false;
    try { on = JSON.parse(localStorage.getItem('lc.teacher')) === true; } catch (e) {}
    document.documentElement.classList.toggle('is-teacher', on);
  }
  check();
  // #teach typed onto a page that is already open changes only the hash
  window.addEventListener('hashchange', check);
})();
