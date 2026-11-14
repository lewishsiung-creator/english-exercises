/* Grammar Practice 文法練習 — the shell, and how the content is written.

   Grammar exercises for adult learners. Each point opens with a short recap
   and then drills it. 自學 is the learner alone, with the Chinese on screen
   and their finished questions kept on their own device. 教學 is the lesson:
   the Chinese waits behind the 中 chips, answers can be shown at any moment,
   and nothing is recorded.

   ONE FILE PER CHAPTER
     content.js           this file: the cover, and an empty `points`
     past-time.js         過去時間 — five points
     perfect-or-past.js   完成式 — one point
   A chapter file does `GP.points.push({...}, {...})`. Adding a chapter is a
   new file and one <script> line in index.html, in reading order.

   STRUCTURE
     GP.points[]        one grammar point. `group` names its chapter; the
                        目錄 prints the name wherever it changes.
       .parts[]         the stages of that point, which the 目錄 lists
         .blocks[]      recap:    lead · rule · cols · pairs · note · table
                        practice: mcq · match · gap · blanks · cloze · table
                                  · fix · order · rewrite

   WHERE THE EXERCISES COME FROM
   The Past Time chapter follows the order and the exercise formats of the
   corresponding workbook chapter in the Azar–Hagen grammar series, practice
   by practice. THE BOOK IS NOT REPRODUCED: every sentence, dialogue, story
   and table on this page was written for it, and set in adult working life
   in Taiwan rather than in the book's classroom. The same rule as /grammar/
   and /grammar-notes/. Keep it that way when adding to a set.

   WHAT EVERY QUESTION MAY CARRY
     zh     中譯 of the CORRECT sentence — hidden behind 中 in 教學
     hint   { zh, en }  opened by a wrong try; points at the clue, never
                        gives the answer. Optional: there is a default.
     why    { zh, en }  shown once the question is done. `en` is optional.
                        On a cloze it belongs to the LINE, and appears when
                        the last blank in that line is answered — so a long
                        story gives its reasons a paragraph at a time.

   A `note` may carry `more: { href, zh, en }`, one quiet link at its foot to
   the page that teaches the same thing in full. It is the only link a block
   may have, and it opens in the same tab: a detour, not an exit.

   BLANKS INSIDE A SENTENCE — used by blanks, cloze and table
     {{went}}                    a typed blank. List every accepted form with
     {{didn’t go|did not go}}    a bar; the first is the one shown and spoken.
                                 `didn’t` / `did not`, `I’m` / `I am`, capitals
                                 and full stops are matched for you. `’s` is
                                 not (it is "is" as often as "has").
     {{went}} (go)               brackets straight after a blank are its cue.
     [[was waiting*|waited]]     choose one; the star marks the right one.
     **go**                      bold, for the word the item turns on.
   Inside a cloze every blank and every choice is numbered on screen, straight
   through the whole story, so a teacher can say "number seven". Inside a
   table they are not: the row already names itself.

   THE PRACTICE BLOCKS

   mcq      { text: 'We ___ it last Friday.', options: [...], answer: 0 }
            One `___`. `answer` is the index of the right option.

   match    block: { options: [...] }   item: { text: 'When I walked in, ___.',
            answer: 1 }. The options are printed once, lettered, and each item
            is answered with a letter.

   gap      { text: 'I ___ (know) Jason for ten years.', answers: [...] }
            One typed blank per card. Give the block a `bank: [...]` and the
            words become a box the learner can tap instead of typing.

   blanks   { text: 'A: {{Did you go}} …?' , zh, pool: [...], from: '...' }
            A card with any number of blanks or choices in it. `text` may be
            an array of lines; a line starting `A: ` or `B: ` is set as a
            speaker. `pool` prints the words to build from; `from` prints a
            sentence above the card to work from.

   cloze    { lines: [{ who: 'A', text: '…{{…}} (cue)…', zh }] }
            A dialogue or a story on one card, its blanks numbered through.
            Leave `who` out for a paragraph. The block may carry a `pool`.

   table    { head: [...], rows: [{ label, cells: [...], group: true }] }
            Cells are sentences with blanks in them. With no blanks at all it
            is a plain chart. `label` is how a row is named in the
            "值得再看一次" list; `group: true` rules a line above the row.
            `zhCol: 1` names a column that is a MEANING — it is an answer, so
            it goes behind a 中 chip and 教學 can ask for it. A column of
            explanation (a reason, a 判斷關鍵) is not one of these: it stays on
            screen, like every other explanation on these pages.

   fix      { bad: 'She works here since 2020.', answers: [...] }
            The learner edits the sentence. `answers[0]` is the correction
            shown and spoken. For a sentence that is already right, write
            { ok: 'We have already discussed this.' } — every set should have
            one, or "find the mistake" turns into "change the verb" unread.
            THE WRONG SENTENCE GETS NO 🔊 AND NO 中譯, here as on every page
            in the family. `zh` belongs to the correction.

   order    { lead: 'We', chunks: [...], end: '.', also: [...] }
            `chunks` in the RIGHT order; the page shuffles them. `lead` is
            printed in place. `also` lists other whole sentences to accept.
            The Chinese is the prompt, so it is on screen in both modes.

   rewrite  { from: '...', cueZh, cueEn, start: 'I have ', answers: [...] }
            `start` is typed into the box for them. `answers` are whole
            sentences; the first is the model. Commas are not checked.
*/

const GP = {
  title: 'Grammar Practice',
  titleZh: '文法練習',
  kicker: '成人英語 · 一次練熟一個文法重點',

  intro: {
    en: 'One grammar point at a time. A short recap first, then practice until it stops needing thought. A wrong answer costs nothing — the question stays open, and you can try until you get there.',
    zh: '一次練熟一個文法重點。先看重點整理，再用各種題型把它練到不用想。答錯沒關係——題目不會關起來，可以一直試到對。',
  },

  sourceNote: {
    en: 'The grammar points follow the order of the Azar–Hagen grammar series. Every explanation, sentence and exercise on this page was written for it.',
    zh: '文法重點的編排順序參考 Azar–Hagen 文法系列；本頁的說明、例句與練習皆為本站自行撰寫。',
  },

  points: [],
};
