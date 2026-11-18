/* The way back to the Learning Corner, for the pages it leads to.

   /math/ and /museum-trip/ are also handed out on their own (the museum
   page went to a whole class), and those children must not be shown a door
   to somewhere that is not theirs. So the home button is written into each
   page hidden, and this script un-hides it only on a device that has opened
   the Learning Corner itself, which leaves a mark in that device's storage
   (corner.home, set by learning-corner/app.js). Everyone else sees the page
   exactly as it was.

   A page takes part by carrying one element marked data-corner-home and
   `hidden`, linking to ../learning-corner/, and loading this file. Where the
   button sits and how it looks belong to that page's own HTML and CSS; the
   rule so far is that it lives on the page's first screen only, so a child
   in the middle of a round cannot leave by accident. */

(function () {
  'use strict';
  var family = false;
  try { family = localStorage.getItem('corner.home') === '1'; } catch (e) { /* no storage: stay hidden */ }
  if (!family) return;
  var marks = document.querySelectorAll('[data-corner-home]');
  for (var i = 0; i < marks.length; i++) marks[i].hidden = false;
})();
