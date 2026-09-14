/* 國際商業期刊導讀 · Business Journal Reading — the map of the series.

   One file, loaded by the contents page and by every reading. It holds nothing
   but structure: the series' title and introduction, and the readings in the
   order they appear.

   `built: true` means the reading's folder exists and its page is written. The
   contents page links those. A reading listed with `built: false` keeps a
   dimmed, dashed card instead — the way to put a reading on the map before it
   is written. Leave an unwritten reading out entirely if there is no plan for
   it yet; the contents page should not promise what nobody is working on.

   Adding a reading is three steps and nothing else changes:

     1. cp -r _template <id>            (folder name = the reading's id)
     2. write <id>/content.js, with `id: '<id>'` at the top of LESSON
     3. add an entry for it to `readings` below, with `built: true`

   A reading's number (No. 1, No. 2 …) is its position in `readings`, not a
   field. Reorder the list and the numbers follow, on the contents page and on
   the reading's own cover. So append new readings at the bottom: the contents
   page shows them newest first on its own, the way a front page leads with
   its latest story, and no older reading's number moves.

   `photo` is the reading's own opening picture, relative to its folder — the
   contents page shows it on the card, so it should be the same file the
   reading's cover uses.

   Every visible string is an `en` / `zh` pair. English leads; the Traditional
   Chinese stays hidden until it is asked for.
*/

const COURSE = {
  title: 'Business Journal Reading',
  titleZh: '國際商業期刊導讀',
  kicker: '成人商業英文 · business English for working adults',

  intro: {
    en: 'Each reading takes one article from the international business press and turns it into a lesson: the argument first, in plain English, then the language that carries it — the collocations, the questions worth arguing about, and a task that puts them to work.',
    zh: '每一篇導讀取材自一篇國際商業期刊的文章，把它變成一堂課：先用淺白的英文掌握論點，再學會承載這些論點的語言——搭配詞、值得辯論的問題，以及一個把它們用出來的任務。',
  },

  readings: [
    {
      id: 'wealth-habits',
      en: 'Three Habits That Build Wealth',
      zh: '累積財富的三個習慣',
      sourceEn: 'HBR CC Book Digest · 23 July 2025',
      sourceZh: 'HBR 好讀 · 2025/07/23',
      blurbEn: 'Scott Galloway on exercise, a trusted “kitchen cabinet” and learning to talk about money — and why two of the three have nothing to do with finance.',
      blurbZh: '蓋洛威談運動、值得信賴的「廚房內閣」，以及學會談論金錢——還有為什麼其中兩個習慣和理財無關。',
      photo: 'img/hero.jpg',
      built: true,
    },
  ],
};
