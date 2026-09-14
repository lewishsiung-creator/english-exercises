/* 國際商業期刊導讀 — the template reading.

   A working page that uses every block type once, linked from nowhere. Copy
   the folder to start a new reading:

     cp -r _template <id>

   then rewrite this file, set `id` to the folder name, and add the reading to
   ../course.js with `built: true`. Everything below is placeholder text that
   describes the block it sits in.

   Every visible string is an `en` / `zh` pair. English is shown; the
   Traditional Chinese stays hidden until it is asked for.

   Conventions that are easy to miss:
     text  → textZh   a gap sentence marks its blank with ___ ; the Chinese is a
                      complete sentence with the missing phrase expressed in
                      full, so the 中 tap on it is a hint that gives the answer.
     eg    → egZh     every phrase card wants an example — it is what is spoken.
     photo            optional, on the reading or on any step:
                      { src: 'img/hero.jpg', alt: '…', by: 'Photographer', pos: '50% 45%' }
                      src is relative to the reading's own folder. The contents
                      page shows the reading's `photo` from course.js on its card.
     source           optional; where the article came from, shown on the cover.

   Block types:
     lead      a framing sentence in italics, opening a step
     quote     a short quote from the article, with attribution
     summary   a teaching paragraph, spoken aloud on request
     note      a boxed aside explaining one idea in more depth
     phrases   collocation cards — English face up, Chinese and example behind a tap
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three phrases to choose from
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     have it / need it cards, for auditing something
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking or writing task, with a tick-list or sentence frames
     passage   the reading text; {{target words}} open a gloss where they stand
     check     open questions with a model answer behind a tap (`cue` optional)
     ladder    patterns on a scale, soft → neutral → strong
*/

const LESSON = {
  id: '_template',            // must match the reading's entry in ../course.js
  title: 'The Title of the Reading',
  titleZh: '這篇導讀的中文標題',
  level: 'B1–B2',             // optional; shown after the number in the cover kicker

  source: {
    en: 'Adapted for class from “The Article’s Original Title”, The Publication, 1 January 2026.',
    zh: '課堂改編自《文章原標題》，刊物名稱，2026/01/01。',
  },

  intro: {
    en: 'Two sentences on who wrote the article and what it argues, in plain English.',
    zh: '用兩句淺白的話介紹作者與這篇文章的論點。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'one thing the learner will be able to do', zh: '學習者將能做到的一件事' },
      { en: 'another, phrased as something they can say or write', zh: '另一件事，以能說或能寫的形式表達' },
    ],
  },

  steps: [
    {
      id: 'argument',
      n: 1,
      en: 'The Argument',
      zh: '論點',
      blocks: [
        {
          t: 'lead',
          en: 'A framing sentence, in italics, that opens the step.',
          zh: '開啟這一步的引導句，以斜體呈現。',
        },
        {
          t: 'quote',
          en: 'One short line from the article, under fifteen words.',
          zh: '文章中的一句短引文，十五字以內。',
          by: 'The Author',
        },
        {
          t: 'summary',
          en: 'A teaching paragraph written for the lesson, in the page’s own words rather than the article’s. It is read aloud by the 🔊 button.',
          zh: '為這堂課寫的教學段落，用本頁自己的話，而不是照搬原文。🔊 按鈕會把它唸出來。',
        },
        {
          t: 'note',
          en: 'A boxed aside',
          zh: '方框補充',
          bodyEn: 'One idea explained in more depth — a term, a piece of background, a common mistake.',
          bodyZh: '更深入說明一個概念——一個術語、一段背景，或一個常見錯誤。',
        },
        {
          t: 'passage',
          en: 'The reading',
          zh: '閱讀文章',
          hintEn: 'Tap an underlined word for its meaning; tap a paragraph for the Chinese.',
          hintZh: '點選畫底線的單字看意思；點選段落看中文。',
          glossary: [
            { term: 'target word', pos: 'n.', zh: '目標單字' },
          ],
          paras: [
            {
              en: 'A paragraph of the reading. A {{target word}} in double braces opens its gloss where it stands, and must match a glossary term exactly.',
              zh: '文章的一個段落。用雙大括號標記的目標單字，點選後會在原處展開解釋，而且必須和 glossary 裡的詞條完全一致。',
            },
          ],
        },
        {
          t: 'check',
          en: 'Check your understanding',
          zh: '閱讀理解',
          hintEn: 'Answer out loud first, then open the model answer.',
          hintZh: '先口頭回答，再打開參考答案。',
          items: [
            {
              en: 'A question about the reading?',
              zh: '一個關於文章的問題？',
              answer: { en: 'A model answer, in a full sentence.', zh: '一個完整句子的參考答案。' },
            },
            {
              en: 'A sentence to rewrite.',
              cue: '(You should…)',
              zh: '一個要改寫的句子。（用 You should…）',
              answer: { en: 'You should rewrite the sentence.', zh: '你應該改寫這個句子。' },
            },
          ],
        },
      ],
    },
    {
      id: 'language',
      n: 2,
      en: 'The Language',
      zh: '語言',
      blocks: [
        {
          t: 'phrases',
          en: 'Collocations',
          zh: '搭配詞',
          items: [
            {
              en: 'make a decision',
              pos: 'phrase',          // optional part of speech
              zh: '做決定',
              eg: 'We made the decision before anyone had seen the numbers.',
              egZh: '我們在任何人看到數字之前就做了決定。',
            },
            {
              en: 'take a risk',
              zh: '冒險',
              eg: 'She took a calculated risk and it paid off.',
              egZh: '她冒了一個經過計算的險，而且成功了。',
            },
          ],
        },
        {
          t: 'ladder',
          en: 'A scale, soft to strong',
          zh: '由柔和到強烈的語氣',
          rows: [
            { level: 'soft', levelEn: 'Soft', levelZh: '語氣柔和', pattern: 'It’s worth + V-ing', eg: 'It’s worth trying this for two weeks.', egZh: '這個方法值得試兩個星期。' },
            { level: 'neutral', levelEn: 'Neutral', levelZh: '語氣中性', pattern: 'I’d recommend + V-ing', eg: 'I’d recommend leaving your phone outside the room.', egZh: '我會建議你把手機放在房間外面。' },
            { level: 'strong', levelEn: 'Strong', levelZh: '語氣強烈', pattern: 'Make sure you + V', eg: 'Make sure you hydrate before the flight.', egZh: '搭飛機前一定要補充水分。' },
          ],
        },
        {
          t: 'match',
          en: 'Match the halves',
          zh: '配對片語的前後半',
          hintEn: 'Click a phrase on the left, then its partner on the right.',
          hintZh: '先點左邊的詞，再點右邊的搭配。',
          pairs: [
            { a: 'make', b: 'a decision' },
            { a: 'take', b: 'a risk' },
            { a: 'raise', b: 'a question' },
          ],
        },
        {
          t: 'gap',
          en: 'Choose the phrase that fits',
          zh: '選出適合的片語',
          items: [
            {
              text: 'Nobody wanted to ___, so the meeting ended without a plan.',
              textZh: '沒有人想做決定，所以會議在沒有計畫的情況下結束了。',
              options: ['make a decision', 'take a risk', 'raise a question'],
              answer: 0,
              why: { en: 'One line on why the right phrase fits.', zh: '一句話說明為什麼這個片語正確。' },
            },
          ],
        },
      ],
    },
    {
      id: 'use-it',
      n: 3,
      en: 'Talk and Use It',
      zh: '討論與運用',
      blocks: [
        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的立場是什麼？',
          hintEn: 'There is no right answer — take a side and say why.',
          hintZh: '沒有標準答案：選一邊，並說明理由。',
          items: [
            { en: 'An opinion statement the class can disagree about.', zh: '一個全班可以爭論的觀點。' },
          ],
        },
        {
          t: 'cards',
          en: 'Audit your own situation',
          zh: '檢視你自己的情況',
          hintEn: 'Tap each card: do you already have this, or do you need it?',
          hintZh: '點選每張卡片：你已經有了，還是需要它？',
          items: [
            { icon: '🧭', en: 'A role or a resource', zh: '一個角色或資源', descEn: 'One line describing it.', descZh: '一句話描述。' },
          ],
        },
        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '討論',
          items: [
            {
              en: 'An open question to talk through?',
              zh: '一個可以討論的開放式問題？',
              starters: [
                { en: 'I think ___ , because ___ .', zh: '我認為＿＿，因為＿＿。' },
              ],
            },
          ],
        },
        {
          t: 'task',
          en: 'Two minutes, out loud',
          zh: '兩分鐘口說',
          instructionEn: 'Choose one prompt and speak for two minutes. Tick each phrase as you use it.',
          instructionZh: '選一個題目說兩分鐘。每用到一個片語就打勾。',
          prompts: [
            { en: 'A prompt to speak to.', zh: '一個口說題目。' },
          ],
          checklist: [
            { en: 'make a decision', zh: '做決定' },
            { en: 'take a risk', zh: '冒險' },
          ],
        },
        {
          t: 'task',
          en: 'One message this week',
          zh: '本週的一則訊息',
          instructionEn: 'Draft the opening line in English — a sentence you would actually send.',
          instructionZh: '用英文擬出開場句——一句你真的會傳出去的話。',
          prompts: [
            { en: 'A real situation to write to.', zh: '一個真實的寫作情境。' },
          ],
          frames: [
            { en: 'Can I ask your view on ___ before I decide?', zh: '在我決定之前，可以問問你對＿＿的看法嗎？' },
          ],
        },
      ],
    },
  ],
};
