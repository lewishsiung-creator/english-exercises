/* The lesson template — a copy of every block type, with placeholder text.

   This folder is not listed in course.js and is not linked from the contents
   page. It exists to be copied, and to be opened directly when you want to see
   what a block looks like before writing one.

   To start a lesson:

     cp -r _template hometown
     — set `id` below to 'hometown', matching the entry in course.js
     — write the lesson, deleting the blocks you do not use
     — flip `built: true` on that lesson in course.js

   `id` is the only line that must be right. render.js looks it up in course.js
   and takes the part from there: the "Part 2" kicker on question and cue cards,
   and both clocks. Get it wrong and the page throws on load rather than
   rendering something quietly wrong.

   This file's own `_template` id has an entry in course.js kept outside
   `lessons`, so this page always renders and never shows up on the contents
   page. It sits under Part 3 only so the clocks have something to draw.

   Every visible string is an `en` / `zh` pair. English is shown; the
   Traditional Chinese stays hidden until it is asked for, either line by line
   with the 中 chip or all at once with the 中文 switch in the top bar.
   Instructions, task prompts and bucket names stay bilingual — those are
   scaffolding, not comprehension practice.

   Block types:
     lead      a framing sentence in italics, opening a step
     note      a boxed aside explaining one idea in more depth
     frames    a list of sentence frames, each spoken on request
     shapes    a library of answer structures, each with its buckets and the
               line that announces each bucket out loud
     question  an exam question, presented as a card. `shape` is optional
     cue       a Part 2 candidate task card: task line, bullets, closing line
     sort      the bucket sort: loose points, two or three buckets. `bucket` is
               an id, or an array of ids when two are defensible. `why` is one
               line, shown when the card lands and also when it is put
               somewhere else — a mis-sort explains itself and stays open
     model     the same points written out as one answer, behind a reveal.
               Split into parts so each sentence group carries its bucket
     pad       a planning pad — rows to fill, each with ideas behind a tap
     clock     the planning countdown and the speaking count-up, both taking
               their times from the part unless `clock` overrides them
     task      a speaking task with a tick-list of target phrases
     bank      a two-column phrase table, the Chinese behind the row's tap
     sentences a numbered list of whole sentences, each spoken on request
     qbank     a bank of questions with a button that pulls one at random and
               will not repeat it until the bank is empty. An item may carry a
               `tag` — its question type — which hides behind the row's own tap
               and is NOT released by the 中文 switch, being an answer
     upgrade   a thin answer, what to add, and the same answer done properly
               behind a reveal
     timeline  a long answer laid out against the clock. While the speaking
               count-up in the same step runs, the current row lights up
*/

const LESSON = {
  id: '_template',      // change to the new lesson's id, which must be in course.js
  title: 'Lesson Template',
  titleZh: '課程範本',

  intro: {
    en: 'One or two sentences saying what goes wrong, in the student’s terms rather than the exam’s. This is the paragraph he reads while you are still opening your notes.',
    zh: '用一兩句話說出問題所在，用學生的語言，而不是考試的語言。這段是你還在翻筆記時，他會先讀到的內容。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'do the first thing, stated as an action rather than a topic', zh: '做到第一件事——寫成動作，而不是主題' },
      { en: 'do the second thing, small enough to be checked in the room', zh: '做到第二件事——小到可以當場檢驗' },
      { en: 'do the third thing', zh: '做到第三件事' },
    ],
  },

  /* Optional. Include it only when the lesson was built from something real —
     a recording, a book, a student's own answer — and say so plainly. Delete
     the whole key otherwise. */
  source: {
    en: 'Where the material on this page came from, if it came from anywhere.',
    zh: '本頁材料的來源；若無來源可略。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'first-step',
      n: 1,
      en: 'The first step',
      zh: '第一步',
      blocks: [

        {
          t: 'lead',
          en: 'A framing sentence. It sets up the step and is the one line you would say out loud before starting.',
          zh: '一句定調的話。它為這一步鋪陳，也是你開始前會說出口的那句話。',
        },

        {
          t: 'note',
          en: 'The heading of an aside',
          zh: '補充說明的標題',
          bodyEn: 'A boxed aside, for the one idea that needs three sentences instead of one. Use it sparingly — two on a page is plenty.',
          bodyZh: '一段方框補充，給那個需要三句話而不是一句話的概念。少用為宜——一頁兩個就夠了。',
        },

        {
          t: 'frames',
          en: 'Sentence frames',
          zh: '句型架構',
          hintEn: 'Tap 🔊 to hear one.',
          hintZh: '點 🔊 可聽一次。',
          items: [
            { en: 'A frame he can say tonight without thinking about it.', zh: '一個他今晚就能不假思索說出口的句型。' },
            { en: 'Another one, different enough to be worth having.', zh: '另一個，差異夠大才值得放進來。' },
          ],
        },

        {
          t: 'shapes',
          en: 'The shape library',
          zh: '結構庫',
          hintEn: 'Tap a card to see its parts.',
          hintZh: '點卡片可看它的組成。',
          items: [
            {
              tag: '2',
              name: 'Two sides',
              nameZh: '兩面',
              whenEn: 'For a question that has an obvious argument on each side.',
              whenZh: '適用於正反兩方都有明顯論點的題目。',
              buckets: [
                { en: 'The case for', zh: '支持的一面' },
                { en: 'The case against', zh: '反對的一面' },
              ],
              lines: [
                { en: 'There are really two sides to this.', zh: '這件事其實有兩面。' },
                { en: 'On the other hand, though…', zh: '不過另一方面……' },
              ],
            },
          ],
        },

        {
          t: 'question',
          en: 'The exam question, written exactly as it would be asked.',
          zh: '考題本身，照它會被問出來的樣子寫。',
          shape: 'Two sides',        // optional — leave it off for Part 1
          shapeZh: '兩面',
        },

        /* Part 2 only. Delete this block in a Part 1 or Part 3 lesson. */
        {
          t: 'cue',
          en: 'Describe something you have done recently.',
          zh: '描述一件你最近做過的事。',
          bullets: [
            { en: 'what it was', zh: '那是什麼' },
            { en: 'when and where you did it', zh: '你在何時、何地做的' },
            { en: 'who you were with', zh: '你和誰一起' },
          ],
          closeEn: 'and explain how you felt about it.',
          closeZh: '並說明你對這件事的感受。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'second-step',
      n: 2,
      en: 'The second step',
      zh: '第二步',
      blocks: [

        {
          t: 'sort',
          en: 'Put each point where it belongs',
          zh: '把每個想法放到它該去的地方',
          hintEn: 'Tap a point, then tap a bucket. A point in the wrong place says why and stays in the pool.',
          hintZh: '先點一個想法，再點一個籃子。放錯的想法會說明理由，並留在原處。',
          buckets: [
            { id: 'a', en: 'First bucket', zh: '第一個籃子', subEn: 'what goes in it', subZh: '裡面該放什麼' },
            { id: 'b', en: 'Second bucket', zh: '第二個籃子', subEn: 'what goes in it', subZh: '裡面該放什麼' },
          ],
          cards: [
            {
              en: 'A point taken from a real answer, in the student’s own words.',
              zh: '取自真實回答的一個想法，用學生自己的話寫。',
              bucket: 'a',
              why: { en: 'One line saying why it belongs there.', zh: '一句話說明它為什麼屬於那裡。' },
            },
            {
              en: 'A point that could defensibly go in either bucket.',
              zh: '一個放在哪個籃子都說得通的想法。',
              bucket: ['a', 'b'],
              why: { en: 'One line saying why both are fine, and what the choice changes.', zh: '一句話說明兩者皆可，以及這個選擇會改變什麼。' },
            },
          ],
        },

        {
          t: 'model',
          en: 'The same points, spoken as one answer',
          zh: '同樣的想法，說成一段完整回答',
          hintEn: 'Open this after the sort, not before.',
          hintZh: '請在分類之後再打開，不要提前。',
          parts: [
            {
              tag: 'First bucket', tagZh: '第一個籃子',
              en: 'The sentences that carry the first bucket, written the way a person speaks rather than the way an essay is written.',
              zh: '承載第一個籃子的句子，寫成人說話的樣子，而不是文章的樣子。',
            },
            {
              tag: 'Second bucket', tagZh: '第二個籃子',
              en: 'The sentences that carry the second bucket, ending on purpose instead of trailing off.',
              zh: '承載第二個籃子的句子，有意識地收尾，而不是逐漸消音。',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'third-step',
      n: 3,
      en: 'Now do it yourself',
      zh: '換你自己來',
      blocks: [

        {
          t: 'pad',
          en: 'Plan it',
          zh: '先做計畫',
          hintEn: 'Key words only. Nothing here is saved, and a reload clears it.',
          hintZh: '只寫關鍵字。這裡不會儲存任何內容，重新整理即清空。',
          rows: [
            {
              en: 'Name the first part',
              zh: '為第一部分命名',
              ideas: [
                { en: 'An idea for when he is stuck.', zh: '卡住時可用的一個想法。' },
                { en: 'A second one, going a different way.', zh: '第二個想法，走不同方向。' },
              ],
            },
            {
              en: 'Name the second part',
              zh: '為第二部分命名',
              ideas: [
                { en: 'An idea for when he is stuck.', zh: '卡住時可用的一個想法。' },
                { en: 'A second one, going a different way.', zh: '第二個想法，走不同方向。' },
              ],
            },
          ],
        },

        {
          t: 'clock',
          en: 'Against the clock',
          zh: '計時進行',
          /* Both clocks come from the part in course.js. Override here only
             when this lesson deliberately differs — a first attempt given
             ninety seconds of planning, say. Delete the key otherwise.
             clock: { plan: 90, bandLow: 40, bandHigh: 75 }, */
        },

        {
          t: 'task',
          en: 'Say it',
          zh: '說出來',
          instructionEn: 'Answer the question with the plan in front of you but your eyes off it. Tick a phrase when you hear it used.',
          instructionZh: '看著計畫，但別盯著它，直接回答問題。聽到哪個句型被用上就勾起來。',
          checklist: [
            { en: 'A phrase you are listening for.', zh: '你要留意聽的句型。' },
            { en: 'Another one.', zh: '另一個。' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'reference-blocks',
      n: 4,
      en: 'The reference blocks',
      zh: '參考類區塊',
      blocks: [

        {
          t: 'bank',
          en: 'Collocations',
          zh: '常用詞組',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'a phrase worth having', zh: '一個值得學起來的詞組' },
            { en: 'another phrase', zh: '另一個詞組' },
          ],
        },

        {
          t: 'sentences',
          en: 'Useful sentences',
          zh: '實用句子',
          hintEn: 'Whole sentences, numbered because they are worked through in order.',
          hintZh: '完整句子，編號是因為要照順序練。',
          items: [
            { en: 'A sentence he could say tonight, exactly as written.', zh: '一句他今晚就能照著說出口的話。' },
            { en: 'A second one, going somewhere different.', zh: '第二句，走不同的方向。' },
          ],
        },

        {
          t: 'qbank',
          en: 'The question bank',
          zh: '題庫',
          hintEn: 'The button never repeats a question until the bank is empty.',
          hintZh: '在題庫抽完之前，按鈕不會重複同一題。',
          items: [
            /* `tag` is optional. Give it only when naming the type is itself
               the exercise — it hides behind the row's tap as an answer. */
            { en: 'A question, written as it would be asked.', zh: '一道題目，照它會被問出來的樣子寫。', tag: 'Opinion', tagZh: '意見題' },
            { en: 'Another question.', zh: '另一道題目。', tag: 'Cause', tagZh: '原因題' },
            { en: 'A question with no type label on it.', zh: '一道沒有標示題型的題目。' },
          ],
        },

        {
          t: 'upgrade',
          en: 'Same opinion, two answers',
          zh: '同樣的立場，兩種回答',
          hintEn: 'Read the thin version, decide what you would add, then open the upgrade.',
          hintZh: '先讀薄的版本，想想你會加什麼，再打開升級版。',
          beforeTag: 'Too simple', beforeTagZh: '太簡單',
          beforeEn: 'The answer a student already gives, which is not wrong — only thin.',
          beforeZh: '學生原本就給得出的回答；它不算錯，只是太薄。',
          adds: [
            { en: 'the first thing missing', zh: '缺少的第一件事' },
            { en: 'the second', zh: '第二件' },
          ],
          afterTag: 'Better', afterTagZh: '更好的版本',
          afterEn: 'The same opinion with those things put back, which is what the upgrade is meant to show.',
          afterZh: '同樣的立場，把那些東西補回去之後的樣子——這正是升級版要呈現的。',
        },

        {
          t: 'timeline',
          en: 'Where the time goes',
          zh: '時間怎麼分配',
          hintEn: 'Start the speaking clock in this step and the current row lights up.',
          hintZh: '啟動本步驟的開口計時，當下該講的那一列就會亮起來。',
          rows: [
            {
              from: 0, to: 15,
              en: 'The first move', zh: '第一個動作',
              /* sayEn / sayZh are optional — leave them off for a bare plan. */
              sayEn: 'The sentence that does this job.',
              sayZh: '負責這件事的那一句話。',
            },
            {
              from: 15, to: 45,
              en: 'The second move', zh: '第二個動作',
              sayEn: 'And the sentence that does this one.',
              sayZh: '以及負責這件事的那一句話。',
            },
          ],
        },

        {
          t: 'clock',
          en: 'Against the clock',
          zh: '計時進行',
          clock: { bandLow: 30, bandHigh: 45 },
        },
      ],
    },
  ],
};
