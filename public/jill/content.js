/* Jill — her notebook.

   Like /riva-rex/, /eason/, /anita/, /aaron/ and /anny/, this is not a lesson.
   It is a notebook that grows: every week adds one entry to `sessions` below
   and nothing else changes. No new files, no new folder, no renderer edit.

   ADDING A SESSION
   ----------------
   Copy the last entry in `sessions`, change `id`, `n`, `date` and the titles,
   and rewrite the blocks. Put it at the BOTTOM of the array.

   The FILE is chronological, oldest first. The PAGE is not: render.js reverses
   the dated entries at the point of display, so a session added at the bottom
   here appears at the TOP of the page, which is where you want the newest
   lesson. Do not reverse anything by hand — if you do, the numbering and the
   "newest open on load" rule both invert with it.

   The contents list, the numbering and the anchors all come from the array, so
   there is nothing else to keep in step.

   `id` must be unique and URL-safe: it becomes the anchor, so /jill/#s3 opens
   session 3 with the rest folded.

   THE STUDENT
   -----------
   Jill is ten to twelve and is taught one-to-one, once a week. That age band
   sits between the two house styles used elsewhere here: too old for the
   picture-led seven-to-ten pages, too young for the adult document. So the
   page keeps the adult skeleton — a scrolling document, a contents list, a
   teacher panel, 中 chips on every line — re-set one step larger with more air
   between blocks. Those rules live in one block at the bottom of style.css.

   The register is the notebook register set one step plainer: short sentences,
   examples from her own life rather than from an office. Nothing here is
   written down to her. She is eleven, not five.

   Discussion is spoken only. There is no input field anywhere on this page and
   nothing persists between lessons — at this age the writing belongs in her
   paper notebook, which is where it should stay.

   THE SOURCE, AND WHAT IS ADDED
   -----------------------------
   The three sessions have three different kinds of source, and the kind
   decides what may go on the page.

   Session 1 is CLASS NOTES — Lewis's own record of the hour of 11 July 2026,
   in seven numbered groups. The page keeps the notes' grouping rather than
   regrouping it. The same hour also exists as /confidence-talk/, the review
   version of it; the session's `link` block points there, and that page links
   back.

   Session 2 is a READING — six paragraphs about horses, a word list, five
   sentences and five questions. It is the only session built around a text, so
   it is the only one using `passage` and `mcq`. The passage is English only,
   as every reading on this site is; the Chinese support for it sits underneath
   on the word cards and the five sentences, and what is withheld is a
   translation of the paragraphs, because the comprehension questions are
   asking whether she read them.

   Session 3 is a WORKSHEET — "Let's Talk About Gymnastics!", written for Jill
   at CEFR A1–A2 in five parts, each running vocabulary → sentence structures →
   discussion questions. The vocabulary, the Chinese glosses, the sentence
   patterns, their example sentences and all thirty-five discussion questions
   are reproduced from that sheet rather than rewritten.

   What is added to all three, and is in none of the sources: the framing
   sentences, an example sentence on each phrase card that had none, the
   gap-fills, the matching pairs, the comprehension questions, the opinion poll
   and the sentence starters under every question. Notes record what happened
   and a worksheet records what will be covered; a page has to give her
   something to press. Nothing added invents a fact — every comprehension
   answer is in the reading as it stands.

   HER OWN ENGLISH
   ---------------
   A `fix` block holds a sentence Jill actually said with the upgrade beside
   it. It is the most valuable thing in the notebook and the reason a
   per-student page is worth keeping at all. Do not invent them.

   Session 1 has one, because the class notes carry it: "Let me tell you a
   truth", corrected in the room. Two more lines in those notes are her English
   with a better version beside it — "soybean milk" and "Boys always talk about
   robots" — but neither is a mistake: both are correct English that a native
   speaker would put differently. Those are `contrast` blocks with their own
   column tags ("As you said it" against "What people say"), because a ✕ next
   to a sentence that is not wrong teaches the wrong thing.

   Sessions 2 and 3 have no `fix` at all, and that is deliberate: their sources
   were both written BEFORE the lesson, so neither carries any record of her
   wording. A class note reading "More natural: …", or a line lifted from a
   transcript, is what fills that block later.

   THE `part` BLOCK
   ----------------
   Use it only where the source is genuinely cut into numbered parts, as
   sessions 1 and 3 are. Session 2 has none: a divider every two blocks would
   make a short lesson look long.

   THE CHINESE LAYER
   -----------------
   Every visible English string has a Traditional Chinese counterpart. English
   is what shows; the Chinese waits behind a small 中 chip, or the 中文 switch
   in the top bar opens the lot. Instructions, task prompts, the contents list
   and anything already behind a deliberate reveal stay bilingual — those are
   scaffolding, not comprehension practice.

   At this age the Chinese is offered more freely than on the adult pages: a
   gap-fill translation is a COMPLETE Chinese sentence with the blank filled
   in, and only the English keeps its ___. The page is teacher-led and nothing
   is scored, so the Chinese is there to make the situation clear rather than
   to be a second puzzle — and it is still one tap away rather than on screen.

   BLOCK TYPES
   -----------
     part      a divider inside a session, for material that arrives in parts
     lead      a framing sentence in italics, opening a session
     link      a pointer to another page in this site
     quote     a short quote, with attribution
     summary   a teaching paragraph, spoken aloud on request
     note      a boxed aside explaining one idea in more depth
     contrast  two columns compared
     phrases   phrase cards — English face up, Chinese and an example behind a tap
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three phrases to choose from
     fix       something Jill actually said, with the upgrade behind a tap
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     have it / need it cards
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking task with a tick-list of target phrases
*/

const NOTEBOOK = {
  student: 'Jill',
  title: 'Jill’s English Notebook',
  titleZh: 'Jill 的英文筆記',
  kicker: '國小英語 · 一對一課堂筆記',

  // Used only by word-box exercises, which this page has none of yet. Kept so
  // that adding one later does not mean editing the renderer.
  glossary: {},

  intro: {
    en: 'This page is where our lessons are kept. One lesson a week, one entry each time — every word, sentence pattern and question we work on together, so you can come back to any of them later.',
    zh: '這一頁是我們上課的紀錄。每週一堂課，每次新增一則——課堂上練習過的每個單字、句型和問題都在這裡，之後隨時可以回來看。',
    goalsEn: 'How to use it',
    goalsZh: '使用方式',
    goals: [
      {
        en: 'Tap any English line to see the Chinese. The 中文 switch at the top opens all of them at once.',
        zh: '點任何一句英文就會出現中文。上方的「中文」按鈕可以一次全部打開。',
      },
      {
        en: 'Tap 🔊 to hear a word or sentence read aloud, as many times as you like.',
        zh: '點 🔊 可以聽單字或句子的發音，想聽幾次都可以。',
      },
      {
        en: 'The questions are for talking, not for writing. Say your answer out loud — there is nothing to type here.',
        zh: '這些問題是用來「說」的，不是用來寫的。請把答案念出來——這裡沒有任何地方需要打字。',
      },
      {
        en: 'Nothing is saved and nothing is scored. Reloading the page clears it for a fresh run.',
        zh: '這裡不會儲存也不會計分。重新整理頁面就會清空，可以重新練一次。',
      },
      {
        en: 'The newest lesson is open; everything else is folded. Tap any heading to open or close it, or use the contents list.',
        zh: '最新的一堂課是展開的，其他都收合起來。點任何標題就能展開或收合，也可以使用左邊的目錄。',
      },
    ],
  },

  sessions: [
    // ---------------------------------------------------------------- 1
    /* 11 July 2026. The source is Lewis's own class notes for that hour, in
       seven numbered groups; the page keeps the notes' grouping rather than
       regrouping it. Same lesson as /confidence-talk/, which is the review
       version of this hour — the `link` block below points at it.

       Three lines in the notes are Jill's own English with the better version
       written beside it. "Let me tell you a truth" is a mistake, so it is a
       `fix`. "soybean milk" and "Boys always talk about robots" are not
       mistakes — both are correct English that a native speaker would say
       differently — so they are `contrast` blocks with their own column tags
       rather than a ✕ against her name. */
    {
      id: 's1',
      n: 1,
      date: '2026-07-11',
      dateEn: '11 July 2026',
      dateZh: '2026 年 7 月 11 日',
      en: 'Confidence and daily life',
      zh: '自信與日常生活',

      focus: [
        { en: 'Words for how you feel', zh: '講感受的單字' },
        { en: 'Asking someone to explain', zh: '請別人再解釋一次' },
        { en: 'usually', zh: '頻率副詞 usually' },
        { en: 'Breakfast', zh: '早餐' },
        { en: 'Being proud of yourself', zh: '為自己感到驕傲' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'One hour that went a long way: four words for how you feel, five for talking to people, what you usually eat, who your idol is — and, at the end, something you were proud of. The thread running through all of it is confidence, and where it comes from.',
          zh: '這一堂課走得很遠：四個講感受的單字、五個和人溝通的字、你通常吃什麼、你的偶像是誰——最後，還有一件讓你感到驕傲的事。貫穿這一切的主題是「自信」，以及自信是從哪裡來的。',
        },

        {
          t: 'link',
          en: 'Confidence and Everyday Life',
          zh: '自信與日常生活',
          href: '../confidence-talk/',
          noteEn: 'The same lesson, built as a review page: every word with its meaning, the phrases they go with, sentence frames to finish, and a table that covers the English so you can test yourself.',
          noteZh: '同一堂課，做成複習頁：每個單字都附上意思、常搭配的說法、可以自己完成的句型，還有一個把英文遮起來的自我測驗表。',
        },

        // ---------------------------------------------- 1
        {
          t: 'part',
          n: 'Part 1',
          en: 'How You Feel',
          zh: '感受',
        },

        {
          t: 'phrases',
          en: 'Four feelings',
          zh: '四種感受',
          items: [
            {
              en: 'confident',
              zh: '有自信的',
              meaning: 'feeling sure about yourself and your abilities',
              eg: 'I feel more confident when I get better at gymnastics.',
              egZh: '當我的體操進步時，我會覺得更有自信。',
            },
            {
              en: 'embarrassed',
              zh: '感到尷尬的；不好意思的',
              meaning: 'feeling uncomfortable because you made a mistake or people are looking at you',
              eg: 'I feel embarrassed when I make a mistake in front of other people.',
              egZh: '當我在別人面前犯錯時，我會覺得很尷尬。',
            },
            {
              en: 'nervous',
              zh: '緊張的；不放鬆的',
              meaning: 'worried or not relaxed',
              eg: 'I feel nervous when I speak in front of the class.',
              egZh: '當我在全班面前說話時，我會感到緊張。',
            },
            {
              en: 'relaxed',
              zh: '放鬆的',
              meaning: 'calm and not nervous',
              eg: 'I feel more relaxed when I get better at gymnastics.',
              egZh: '當我的體操進步時，我會感到更放鬆。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Two of these four are one feeling, facing both ways',
          zh: '這四個字裡，有兩個是同一種感覺的正反面',
          bodyEn: 'Nervous and relaxed are opposites: nervous is worried and tight, relaxed is calm and not worried. Notice that your own sentence uses the same *when* pattern for both — I feel nervous when …, I feel more relaxed when …. One pattern, and you can already say four things about yourself.',
          bodyZh: 'nervous 和 relaxed 是相反的：nervous 是擔心、緊繃，relaxed 是平靜、不擔心。注意你自己的句子在這兩個字上用了同一個 when 句型——I feel nervous when…、I feel more relaxed when…。只要一個句型，你就已經可以說出四件關於自己的事。',
        },

        {
          t: 'discuss',
          en: 'Let’s talk!',
          zh: '來聊聊！',
          items: [
            {
              en: 'When do you feel confident?',
              zh: '你什麼時候會覺得有自信？',
              starters: [
                { en: 'I feel more confident when I get better at gymnastics.', zh: '當我的體操進步時，我會覺得更有自信。' },
                { en: 'I feel confident when I know the answer.', zh: '當我知道答案的時候，我覺得有自信。' },
              ],
            },
            {
              en: 'When do you feel nervous?',
              zh: '你什麼時候會覺得緊張？',
              starters: [
                { en: 'I feel nervous when I speak in front of the class.', zh: '當我在全班面前說話時，我會感到緊張。' },
                { en: 'I feel nervous before a test.', zh: '考試之前我會緊張。' },
              ],
            },
            {
              en: 'What makes you feel relaxed?',
              zh: '什麼會讓你覺得放鬆？',
              starters: [
                { en: 'I feel more relaxed when I get better at gymnastics.', zh: '當我的體操進步時，我會感到更放鬆。' },
                { en: 'Listening to music makes me feel relaxed.', zh: '聽音樂讓我覺得放鬆。' },
              ],
            },
          ],
        },

        // ---------------------------------------------- 2
        {
          t: 'part',
          n: 'Part 2',
          en: 'Words for Talking to People',
          zh: '溝通相關單字',
        },

        {
          t: 'phrases',
          en: 'Five communication words',
          zh: '五個溝通的字',
          items: [
            {
              en: 'explain',
              zh: '解釋；用更簡單的方式說明',
              meaning: 'to say something again in an easier way',
              eg: 'Can you explain it again?',
              egZh: '你可以再解釋一次嗎？',
            },
            {
              en: 'clear',
              zh: '清楚的；容易理解的',
              meaning: 'easy to understand',
              eg: 'Your explanation is very clear.',
              egZh: '你的解釋非常清楚。',
            },
            {
              en: 'pronunciation',
              zh: '發音',
              meaning: 'the way a word is spoken',
              eg: 'I want to improve my English pronunciation.',
              egZh: '我想改善我的英文發音。',
            },
            {
              en: 'conversation',
              zh: '對話；交談',
              meaning: 'a talk between two or more people',
              eg: 'We had a short conversation after class.',
              egZh: '我們下課後進行了一段簡短的對話。',
            },
            {
              en: 'completely',
              zh: '完全地；百分之百地',
              meaning: 'fully; 100%',
              eg: 'I completely understand your idea.',
              egZh: '我完全了解你的想法。',
            },
          ],
        },

        {
          t: 'gap',
          en: 'Which word fits?',
          zh: '哪個字最合適？',
          hintEn: 'Tap the word that finishes each sentence. The reason appears under it.',
          hintZh: '點選能完成句子的字，下方會出現說明。',
          items: [
            {
              text: 'Sorry, I don’t understand. Can you ___ it again?',
              textZh: '抱歉，我不懂。你可以再解釋一次嗎？',
              options: ['explain', 'clear', 'conversation'],
              answer: 0,
              why: {
                en: 'Explain is the verb — the thing you ask someone to do. Clear is what their answer is afterwards.',
                zh: 'explain 是動詞，是你請對方「做」的事；clear 則是他解釋完之後那個說明的樣子。',
              },
            },
            {
              text: 'I ___ understand your idea.',
              textZh: '我完全了解你的想法。',
              options: ['completely', 'complete', 'clear'],
              answer: 0,
              why: {
                en: 'Completely describes the verb understand, so it takes the -ly ending.',
                zh: 'completely 是在說明動詞 understand，所以要用 -ly 結尾的副詞。',
              },
            },
          ],
        },

        // ---------------------------------------------- 3
        {
          t: 'part',
          n: 'Part 3',
          en: 'Say This in Class',
          zh: '實用課堂用語',
        },

        {
          t: 'phrases',
          en: 'Three whole sentences to keep',
          zh: '三個可以直接記下來的句子',
          items: [
            {
              en: 'Thank you for telling me what you think. Can you please share your idea?',
              zh: '謝謝你告訴我你的想法。你可以分享你的點子嗎？',
              eg: 'Say it when someone has just answered and you want to hear more.',
              egZh: '當別人剛回答完，而你想再多聽一點的時候可以說。',
            },
            {
              en: 'Let me tell you the truth.',
              zh: '讓我告訴你實話。',
              eg: 'Say it before you say something honest that may be hard to say.',
              egZh: '在你要說一件誠實、但可能不太好說的事情之前使用。',
            },
            {
              en: 'I think we can always learn new things from our mistakes.',
              zh: '我認為我們總是可以從錯誤中學到新事物。',
              eg: 'Say it when you or someone else has just got something wrong.',
              egZh: '當你或別人剛犯了錯的時候可以說。',
            },
          ],
        },

        {
          t: 'fix',
          en: 'Your sentence, one word out',
          zh: '你的句子，只差一個字',
          hintEn: 'Read it first and see whether you can find the word. Then tap.',
          hintZh: '先讀一次，看看你能不能找出那個字。然後再點開。',
          items: [
            {
              wrong: 'Let me tell you a truth.',
              right: 'Let me tell you the truth.',
              whyEn: 'English says the truth, not a truth. There is only one truth about the thing you are talking about, so it takes the — the same reason we say tell me the answer rather than tell me an answer.',
              whyZh: '英文說 the truth，不說 a truth。你正在談的那件事只有一個真相，所以用 the——就像我們說 tell me the answer，而不是 tell me an answer。',
            },
          ],
        },

        // ---------------------------------------------- 4
        {
          t: 'part',
          n: 'Part 4',
          en: 'usually',
          zh: '頻率副詞 usually',
        },

        {
          t: 'note',
          en: 'usually — most of the time, but not every time',
          zh: 'usually——大部分時候，但不是每一次',
          bodyEn: 'Usually means most of the time. It goes in front of the verb: I usually have breakfast at eight o’clock. It is a useful word because it lets you describe your normal week without promising that it happens every single day.',
          bodyZh: 'usually 的意思是「大部分時候」。它放在動詞前面：I usually have breakfast at eight o’clock。這個字很好用，因為它讓你可以描述平常的一週，又不必保證每一天都是這樣。',
        },

        {
          t: 'gap',
          en: 'Where does usually go?',
          zh: 'usually 該放在哪裡？',
          hintEn: 'Tap the phrase that finishes each sentence. The reason appears under it.',
          hintZh: '點選能完成句子的選項，下方會出現說明。',
          items: [
            {
              text: 'I ___ have breakfast at eight o’clock.',
              textZh: '我通常八點吃早餐。',
              options: ['usually', 'usual', 'am usually'],
              answer: 0,
              why: {
                en: 'Usually sits between I and the verb. Am is not needed — have is already the verb.',
                zh: 'usually 放在 I 和動詞之間。這裡不需要 am——have 本身就是動詞了。',
              },
            },
            {
              text: 'What do you ___ eat for breakfast?',
              textZh: '你早餐通常吃什麼？',
              options: ['usually', 'usually are', 'usual'],
              answer: 0,
              why: {
                en: 'In a question, usually goes in front of the main verb, exactly as it does in a statement.',
                zh: '在問句裡，usually 一樣放在主要動詞前面，和直述句的位置相同。',
              },
            },
          ],
        },

        // ---------------------------------------------- 5
        {
          t: 'part',
          n: 'Part 5',
          en: 'Breakfast and Food',
          zh: '早餐與食物',
        },

        {
          t: 'phrases',
          en: 'On the breakfast table',
          zh: '早餐桌上',
          items: [
            {
              en: 'egg pancake',
              zh: '蛋餅',
              eg: 'I usually have an egg pancake and soy milk for breakfast.',
              egZh: '我早餐通常吃蛋餅、喝豆漿。',
            },
            {
              en: 'hamburger',
              zh: '漢堡',
              eg: 'Sometimes I have a hamburger instead.',
              egZh: '有時候我會改吃漢堡。',
            },
            {
              en: 'sandwich',
              zh: '三明治',
              eg: 'A sandwich is easy to eat on the way to school.',
              egZh: '三明治在上學路上很方便吃。',
            },
            {
              en: 'soy milk',
              zh: '豆漿',
              eg: 'I usually have an egg pancake and soy milk for breakfast.',
              egZh: '我早餐通常吃蛋餅、喝豆漿。',
            },
            {
              en: 'snacks',
              zh: '零食',
              eg: 'I never eat snacks before breakfast because it is not healthy.',
              egZh: '我從不在早餐前吃零食，因為那不健康。',
            },
          ],
        },

        {
          t: 'contrast',
          en: 'Both are correct — one is what people say',
          zh: '兩個都對——但只有一個是大家平常會說的',
          coldEn: 'As you said it',
          coldZh: '你當時的說法',
          warmEn: 'What people say',
          warmZh: '大家平常的說法',
          items: [
            {
              caseEn: 'Telling someone what you drink at breakfast.',
              caseZh: '跟別人說你早餐喝什麼。',
              cold: {
                en: 'I have soybean milk for breakfast.',
                zh: '我早餐喝豆漿。',
              },
              warm: {
                en: 'I have soy milk for breakfast.',
                zh: '我早餐喝豆漿。',
              },
              whyEn: 'Soybean milk is not wrong, and you will see it on a label. In everyday English people say soy milk. The Chinese is the same either way — this is only about which one sounds normal out loud.',
              whyZh: 'soybean milk 並沒有錯，包裝上也常這樣寫。但在日常英文裡，大家說的是 soy milk。中文兩者一樣——差別只在哪一個念出來比較自然。',
            },
          ],
        },

        // ---------------------------------------------- 6
        {
          t: 'part',
          n: 'Part 6',
          en: 'Activities and Interests',
          zh: '活動與興趣',
        },

        {
          t: 'phrases',
          en: 'Things you talk about',
          zh: '你會聊到的事',
          items: [
            {
              en: 'gymnastics',
              zh: '體操',
              eg: 'I feel more relaxed when I get better at gymnastics.',
              egZh: '當我的體操進步時，我會感到更放鬆。',
            },
            {
              en: 'idol',
              zh: '偶像；崇拜的人',
              eg: 'My idol is a famous gymnast.',
              egZh: '我的偶像是一位著名的體操選手。',
            },
            {
              en: 'robots',
              zh: '機器人',
              eg: 'Many boys like talking about robots.',
              egZh: '很多男生喜歡談論機器人。',
            },
          ],
        },

        {
          t: 'contrast',
          en: 'Saying it about everyone, or about many people',
          zh: '在說「所有人」，還是在說「很多人」',
          coldEn: 'As you said it',
          coldZh: '你當時的說法',
          warmEn: 'Less absolute',
          warmZh: '語氣不那麼絕對',
          items: [
            {
              caseEn: 'Talking about what the boys in your class are interested in.',
              caseZh: '在說班上的男生對什麼有興趣。',
              cold: {
                en: 'Boys always talk about robots.',
                zh: '男生總是在談論機器人。',
              },
              warm: {
                en: 'Many boys like talking about robots.',
                zh: '很多男生喜歡談論機器人。',
              },
              whyEn: 'Always and boys together means every boy, every time — and one boy who has never mentioned a robot makes the sentence untrue. Many is smaller and safer, and it is still saying the thing you meant.',
              whyZh: 'always 加上 boys，意思是「每一個男生、每一次都」——只要有一個男生從沒提過機器人，這句話就不成立了。many 的範圍小一點、也安全一點，而且一樣說出了你想說的意思。',
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Let’s talk!',
          zh: '來聊聊！',
          items: [
            {
              en: 'What do you usually eat for breakfast?',
              zh: '你早餐通常吃什麼？',
              starters: [
                { en: 'I usually have an egg pancake and soy milk for breakfast.', zh: '我早餐通常吃蛋餅、喝豆漿。' },
                { en: 'I usually have a sandwich because it’s quick.', zh: '我通常吃三明治，因為很快。' },
              ],
            },
            {
              en: 'Who is your idol, and why?',
              zh: '你的偶像是誰？為什麼？',
              starters: [
                { en: 'My idol is a famous gymnast.', zh: '我的偶像是一位著名的體操選手。' },
                { en: 'She is my idol because she never gives up.', zh: '她是我的偶像，因為她從不放棄。' },
              ],
            },
            {
              en: 'What do your classmates like talking about?',
              zh: '你的同學喜歡聊什麼？',
              starters: [
                { en: 'Many boys like talking about robots.', zh: '很多男生喜歡談論機器人。' },
                { en: 'Some of my classmates like talking about games.', zh: '有些同學喜歡聊遊戲。' },
              ],
            },
          ],
        },

        // ---------------------------------------------- 7
        {
          t: 'part',
          n: 'Part 7',
          en: 'Something You Were Proud Of',
          zh: '談論自己的成就',
        },

        {
          t: 'quote',
          en: 'I woke up early at 7:20 on Saturday morning. I think I did a good job. I am proud of myself because I woke up early.',
          zh: '星期六早上，我七點二十分就起床了。我覺得自己做得很好。我為自己感到驕傲，因為我很早起床。',
          by: 'Jill, 11 July 2026',
        },

        {
          t: 'note',
          en: 'Why a small thing counts',
          zh: '為什麼一件小事也算數',
          bodyEn: 'Waking up at 7:20 on a Saturday is a small thing, and that is exactly why it is worth saying. Small successes can help us become more confident. You do not have to win a competition to be proud of yourself — you only have to notice something you did well and say it out loud.',
          bodyZh: '星期六七點二十分起床是一件小事，而這正是它值得說出口的原因。小小的成功可以幫助我們變得更有自信。你不需要贏得比賽才能為自己感到驕傲——你只需要注意到自己做得好的地方，然後把它說出來。',
        },

        {
          t: 'task',
          en: 'Say one thing you did well this week',
          zh: '說一件你這週做得好的事',
          instructionEn: 'Three sentences, in this order: what you did, how you rate it, and why you are proud. Say it out loud — it is the saying that does the work.',
          instructionZh: '三句話，照這個順序說：你做了什麼、你怎麼評價它、為什麼感到驕傲。請大聲說出來——重點就在「說出口」這個動作。',
          prompts: [
            { en: 'I … on … morning.', zh: '我在……早上……' },
            { en: 'I think I did a good job.', zh: '我覺得自己做得很好。' },
            { en: 'I am proud of myself because …', zh: '我為自己感到驕傲，因為……' },
          ],
          checklist: [
            { en: 'I woke up / I finished / I helped …', zh: '我起床了／我完成了／我幫忙了……' },
            { en: 'I think I did a good job.', zh: '我覺得自己做得很好。' },
            { en: 'I am proud of myself because …', zh: '我為自己感到驕傲，因為……' },
            { en: 'I feel more confident when …', zh: '當……的時候，我覺得更有自信。' },
          ],
          frames: [
            { en: 'I woke up early at 7:20 on Saturday morning.', zh: '星期六早上，我七點二十分就起床了。' },
            { en: 'I am proud of myself because I woke up early.', zh: '我為自己感到驕傲，因為我很早起床。' },
            { en: 'Small successes can help us become more confident.', zh: '小小的成功可以幫助我們變得更有自信。' },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 2
    /* 15 August 2026. The source is a short reading — six paragraphs, a list
       of fourteen words, five sentences and five questions. It is the first
       session here built around a text rather than around a conversation, so
       it uses `passage` and `mcq`, which the renderer already had.

       The passage is English only, as every reading on this site is. That is
       not the tween rule being broken: the Chinese support for this text is
       underneath it, on the fourteen word cards and the five sentences, all of
       which carry a gloss. What is withheld is a translation of the paragraphs
       themselves, because the five comprehension questions are asking whether
       she read them.

       The reading, the words, the sentences and the five questions are the
       source. The comprehension questions, the matching pair, the gap-fill,
       the note on hooves and the closing task are added — all of them
       answerable from the text as it stands, none of them inventing a fact
       about horses that the reading does not give.

       No `part` blocks: the source is not cut into numbered parts, and a
       divider every two blocks would make a short lesson look long. */
    {
      id: 's2',
      n: 2,
      date: '2026-08-15',
      dateEn: '15 August 2026',
      dateZh: '2026 年 8 月 15 日',
      en: 'All about horses',
      zh: '關於馬的一切',

      focus: [
        { en: 'Reading a short text', zh: '讀一篇短文' },
        { en: 'Describing an animal', zh: '描述一種動物' },
        { en: 'has / have', zh: 'has 與 have' },
        { en: 'Saying why you like something', zh: '說出喜歡的理由' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'A whole text this week, not a list. Read it once for the story, then again for the words — and notice how few different sentence shapes it uses to say six paragraphs’ worth of things. That is what makes it readable.',
          zh: '這一週是一整篇文章，不是單字表。先讀一次抓大意，再讀一次看單字——並且注意，它用來寫完六段內容的句型其實很少。這正是它好讀的原因。',
        },

        {
          t: 'passage',
          n: 'Reading',
          en: 'All About Horses',
          paras: [
            'Horses are beautiful and strong animals. They have lived with people for thousands of years.',
            'A horse has four strong legs, a long tail, and a mane on its neck. Horses can walk, run, and jump. Some horses can run very fast!',
            'Horses eat grass, hay, and other plants. They also need a lot of clean water every day.',
            'Horses are very social animals. They like to live with other horses. They can also learn to trust people.',
            'People ride horses for fun, sports, and work. Some people also enjoy taking care of horses because horses can be gentle and friendly.',
            'There are many different kinds of horses around the world. They can be different sizes and colors, but every horse is special in its own way.',
          ],
        },

        {
          t: 'mcq',
          en: 'Did you read it?',
          zh: '讀懂了嗎？',
          hintEn: 'Every answer is in the text above. Read it again if you need to — that is allowed.',
          hintZh: '每一題的答案都在上面的文章裡。需要的話就再讀一次——這是可以的。',
          items: [
            {
              q: 'What is on a horse’s neck?',
              options: ['A mane', 'A tail', 'A hoof'],
              answer: 0,
            },
            {
              q: 'What do horses eat?',
              options: ['Grass, hay and other plants', 'Meat and fish', 'Only hay'],
              answer: 0,
            },
            {
              q: 'Why do horses like to live with other horses?',
              options: ['They are social animals', 'They are afraid of people', 'They cannot walk alone'],
              answer: 0,
            },
            {
              q: 'Why do some people enjoy taking care of horses?',
              options: ['Horses can be gentle and friendly', 'Horses are always small', 'Horses do not need water'],
              answer: 0,
            },
            {
              q: 'What does the text say about the different kinds of horses?',
              options: ['Every horse is special in its own way', 'They are all the same colour', 'There are only two kinds'],
              answer: 0,
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Useful words',
          zh: '實用單字',
          items: [
            {
              en: 'horse',
              zh: '馬',
              eg: 'Horses are strong and beautiful animals.',
              egZh: '馬是強壯又美麗的動物。',
            },
            {
              en: 'mane',
              zh: '鬃毛',
              eg: 'A horse has a mane on its neck.',
              egZh: '馬的脖子上有鬃毛。',
            },
            {
              en: 'tail',
              zh: '尾巴',
              eg: 'A horse has a long tail.',
              egZh: '馬有一條長長的尾巴。',
            },
            {
              en: 'hoof / hooves',
              zh: '馬蹄',
              eg: 'A horse has four hooves.',
              egZh: '馬有四個馬蹄。',
            },
            {
              en: 'grass',
              zh: '草',
              eg: 'Horses like to eat grass.',
              egZh: '馬喜歡吃草。',
            },
            {
              en: 'hay',
              zh: '乾草',
              eg: 'Horses eat grass, hay, and other plants.',
              egZh: '馬吃草、乾草和其他植物。',
            },
            {
              en: 'ride a horse',
              zh: '騎馬',
              eg: 'People can ride horses.',
              egZh: '人們可以騎馬。',
            },
            {
              en: 'run',
              zh: '跑',
              eg: 'Horses can run very fast.',
              egZh: '馬可以跑得很快。',
            },
            {
              en: 'jump',
              zh: '跳',
              eg: 'Horses can walk, run, and jump.',
              egZh: '馬會走、會跑，也會跳。',
            },
            {
              en: 'strong',
              zh: '強壯的',
              eg: 'A horse has four strong legs.',
              egZh: '馬有四條強壯的腿。',
            },
            {
              en: 'gentle',
              zh: '溫和的',
              eg: 'Horses can be gentle and friendly.',
              egZh: '馬可以很溫和、很友善。',
            },
            {
              en: 'friendly',
              zh: '友善的',
              eg: 'Horses can be gentle and friendly.',
              egZh: '馬可以很溫和、很友善。',
            },
            {
              en: 'take care of',
              zh: '照顧',
              eg: 'Some people enjoy taking care of horses.',
              egZh: '有些人很喜歡照顧馬。',
            },
            {
              en: 'trust',
              zh: '信任',
              eg: 'Horses can learn to trust people.',
              egZh: '馬可以學會信任人。',
            },
          ],
        },

        {
          t: 'note',
          en: 'One hoof, four hooves',
          zh: '一個 hoof，四個 hooves',
          bodyEn: 'Hoof does not add a plain -s. The f turns into v and then takes -es: hoof → hooves. A small group of English words does this, and you already know two of them — leaf → leaves, knife → knives. Tail and mane are ordinary: tails, manes.',
          bodyZh: 'hoof 的複數不是直接加 -s。f 會變成 v，再加 -es：hoof → hooves。英文裡有一小群字是這樣變的，而你已經會其中兩個——leaf → leaves、knife → knives。tail 和 mane 則是規則的：tails、manes。',
        },

        {
          t: 'match',
          en: 'Match the word to its Chinese',
          zh: '把單字和中文配對',
          hintEn: 'Tap an English word on the left, then its Chinese on the right.',
          hintZh: '先點左邊的英文，再點右邊對應的中文。',
          pairs: [
            { a: 'mane', b: '鬃毛' },
            { a: 'hooves', b: '馬蹄' },
            { a: 'hay', b: '乾草' },
            { a: 'gentle', b: '溫和的' },
            { a: 'trust', b: '信任' },
            { a: 'take care of', b: '照顧' },
          ],
        },

        {
          t: 'task',
          en: 'Five sentences to keep',
          zh: '五個可以記下來的句子',
          instructionEn: 'Say each one out loud. Then say it again about a different animal — the shape stays, only the words change.',
          instructionZh: '把每一句大聲念出來。然後換一種動物再說一次——句型不變，只換單字。',
          prompts: [
            { en: 'A horse has …', zh: 'A horse has……（馬有……）' },
            { en: 'Horses like to …', zh: 'Horses like to……（馬喜歡……）' },
            { en: 'Horses can …', zh: 'Horses can……（馬會……）' },
            { en: 'People can …', zh: 'People can……（人們可以……）' },
            { en: 'Horses are …', zh: 'Horses are……（馬是……）' },
          ],
          frames: [
            { en: 'A horse has four strong legs.', zh: '馬有四條強壯的腿。' },
            { en: 'Horses like to eat grass.', zh: '馬喜歡吃草。' },
            { en: 'Horses can run very fast.', zh: '馬可以跑得很快。' },
            { en: 'People can ride horses.', zh: '人們可以騎馬。' },
            { en: 'Horses are strong and beautiful animals.', zh: '馬是強壯又美麗的動物。' },
          ],
        },

        {
          t: 'note',
          en: 'A horse has, horses have',
          zh: 'A horse has，Horses have',
          bodyEn: 'One horse takes has; more than one takes have. The reading uses both, one line apart: “A horse has four strong legs” and “They have lived with people for thousands of years.” It is the same verb — English only changes it when the subject is one thing.',
          bodyZh: '一匹馬用 has，超過一匹用 have。文章裡兩種都出現了，而且只隔一行：「A horse has four strong legs」和「They have lived with people for thousands of years.」這是同一個動詞——英文只有在主詞是「一個」的時候才改變它。',
        },

        {
          t: 'gap',
          en: 'One horse or many?',
          zh: '一匹馬，還是很多匹？',
          hintEn: 'Tap the word that finishes each sentence. The reason appears under it.',
          hintZh: '點選能完成句子的字，下方會出現說明。',
          items: [
            {
              text: 'A horse ___ four strong legs and a long tail.',
              textZh: '馬有四條強壯的腿和一條長尾巴。',
              options: ['has', 'have', 'having'],
              answer: 0,
              why: {
                en: 'A horse is one horse, so the verb is has.',
                zh: 'a horse 是一匹馬，所以動詞用 has。',
              },
            },
            {
              text: 'Horses ___ to live with other horses.',
              textZh: '馬喜歡和其他的馬住在一起。',
              options: ['like', 'likes', 'liking'],
              answer: 0,
              why: {
                en: 'Horses is more than one, so the verb loses its -s: horses like.',
                zh: 'horses 不只一匹，所以動詞不加 -s：horses like。',
              },
            },
            {
              text: 'Some horses ___ run very fast.',
              textZh: '有些馬可以跑得很快。',
              options: ['can', 'cans', 'can to'],
              answer: 0,
              why: {
                en: 'Can never changes and never takes to — it goes straight in front of the plain verb.',
                zh: 'can 永遠不變化，後面也不接 to——它直接放在原形動詞前面。',
              },
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Let’s talk!',
          zh: '來聊聊！',
          items: [
            {
              en: 'Do you like horses? Why?',
              zh: '你喜歡馬嗎？為什麼？',
              starters: [
                { en: 'Yes, I like horses because they are gentle and friendly.', zh: '喜歡，我喜歡馬，因為牠們溫和又友善。' },
                { en: 'I like horses because they are strong and beautiful.', zh: '我喜歡馬，因為牠們強壯又美麗。' },
              ],
            },
            {
              en: 'What do horses eat?',
              zh: '馬吃什麼？',
              starters: [
                { en: 'Horses eat grass, hay, and other plants.', zh: '馬吃草、乾草和其他植物。' },
                { en: 'They also need a lot of clean water every day.', zh: '牠們每天也需要很多乾淨的水。' },
              ],
            },
            {
              en: 'What can horses do?',
              zh: '馬會做什麼？',
              starters: [
                { en: 'Horses can walk, run, and jump.', zh: '馬會走、會跑，也會跳。' },
                { en: 'Some horses can run very fast.', zh: '有些馬可以跑得很快。' },
              ],
            },
            {
              en: 'What colors can horses be?',
              zh: '馬可以有哪些顏色？',
              starters: [
                { en: 'Horses can be brown, black, white, or grey.', zh: '馬可以是棕色、黑色、白色或灰色。' },
                { en: 'They can be different sizes and colors.', zh: '牠們可以有不同的大小和顏色。' },
              ],
            },
            {
              en: 'Would you like to ride a horse?',
              zh: '你想騎馬看看嗎？',
              starters: [
                { en: 'Yes, I would like to ride a horse one day.', zh: '想，我希望有一天可以騎馬。' },
                { en: 'I would like to, but I think I would feel nervous at first.', zh: '我想，但我覺得一開始應該會很緊張。' },
              ],
            },
          ],
        },

        {
          t: 'task',
          en: 'Now do it with your own animal',
          zh: '換一種你喜歡的動物再說一次',
          instructionEn: 'Choose any animal and say five sentences about it, using the five shapes above in the same order. You already have every one of them.',
          instructionZh: '選一種你喜歡的動物，用上面那五個句型、照同樣的順序說五句話。這五個句型你都已經會了。',
          prompts: [
            { en: 'A ___ has …', zh: 'A ___ has……' },
            { en: '___ like to …', zh: '___ like to……' },
            { en: '___ can …', zh: '___ can……' },
            { en: 'People can …', zh: 'People can……' },
            { en: '___ are …', zh: '___ are……' },
          ],
          checklist: [
            { en: 'A … has …', zh: '……有……' },
            { en: '… like to …', zh: '……喜歡……' },
            { en: '… can …', zh: '……會……' },
            { en: 'People can …', zh: '人們可以……' },
            { en: '… are … and … animals.', zh: '……是……又……的動物。' },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- 3
    {
      id: 's3',
      n: 3,
      date: '2026-08-22',
      dateEn: '22 August 2026',
      dateZh: '2026 年 8 月 22 日',
      en: 'Let’s talk about gymnastics',
      zh: '來聊體操吧',

      focus: [
        { en: 'Talking about your own sport', zh: '談自己的運動' },
        { en: 'can / can’t … yet', zh: 'can 與 can’t … yet' },
        { en: 'couldn’t before, but now I can', zh: '以前不會，但現在會了' },
        { en: 'Saying how something makes you feel', zh: '說出某件事帶來的感受' },
        { en: 'Talking about a goal', zh: '談自己的目標' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'Gymnastics is something you already know a lot about — far more than most people. Today the job is not to learn gymnastics. It is to learn how to tell someone about it in English: what you do, what you can do, what you couldn’t do before, how it feels, and what you are aiming at next.',
          zh: '體操是你已經很懂的事——比大部分人都懂得多。今天要學的不是體操，而是怎麼用英文把它說給別人聽：你平常做什麼、你會做什麼、以前不會而現在會了什麼、做起來的感覺，以及你接下來想達成什麼。',
        },

        // ---------------------------------------------- Part 1
        {
          t: 'part',
          n: 'Part 1',
          en: 'My Gymnastics Practice',
          zh: '我的體操練習',
        },

        {
          t: 'summary',
          en: 'Start with the plain facts: how often you practice, where you practice, and what you do first. These are the questions anyone asks when they hear you do gymnastics, so having the answers ready in English is worth more than any single hard word.',
          zh: '先從最基本的事實說起：你多久練一次、在哪裡練、一開始先做什麼。別人聽到你學體操時，問的就是這幾個問題，所以把這幾個答案先用英文準備好，比背任何一個難字都有用。',
        },

        {
          t: 'phrases',
          en: 'Words for your practice',
          zh: '練習相關的單字',
          items: [
            {
              en: 'gymnastics',
              zh: '體操',
              eg: 'I practice gymnastics twice a week.',
              egZh: '我一週練兩次體操。',
            },
            {
              en: 'gymnast',
              zh: '體操選手',
              eg: 'I hope I can be a great gymnast one day.',
              egZh: '我希望有一天能成為很棒的體操選手。',
            },
            {
              en: 'practice',
              zh: '練習',
              eg: 'Each practice is about two hours long.',
              egZh: '每次練習大約兩個小時。',
            },
            {
              en: 'gymnastics class',
              zh: '體操課',
              eg: 'My gymnastics class is on Saturday morning.',
              egZh: '我的體操課在星期六早上。',
            },
            {
              en: 'coach',
              zh: '教練',
              eg: 'My coach shows us the skill first.',
              egZh: '我的教練會先示範動作給我們看。',
            },
            {
              en: 'warm up',
              zh: '暖身',
              eg: 'I usually warm up first.',
              egZh: '我通常會先暖身。',
            },
            {
              en: 'stretch',
              zh: '伸展',
              eg: 'I usually stretch my body before practice.',
              egZh: '我通常會在練習前伸展身體。',
            },
            {
              en: 'exercise',
              zh: '運動；練習',
              eg: 'We do the same exercise again and again.',
              egZh: '我們把同樣的練習做了一次又一次。',
            },
            {
              en: 'practice with someone',
              zh: '和某人一起練習',
              eg: 'I practice with my friends from class.',
              egZh: '我和班上的朋友一起練習。',
            },
            {
              en: 'twice a week',
              zh: '一週兩次',
              eg: 'I practice gymnastics twice a week.',
              egZh: '我一週練兩次體操。',
            },
          ],
        },

        {
          t: 'task',
          en: 'Three patterns to build on',
          zh: '三個可以套用的句型',
          instructionEn: 'Tap a pattern, then say it out loud so that it is true for you. Change only the end of the sentence — the front stays the same every time.',
          instructionZh: '點一個句型，然後把它說成對你來說是真的。只要換句子後半部就好——前半部每次都一樣。',
          prompts: [
            { en: 'I practice gymnastics + time.', zh: 'I practice gymnastics + 時間' },
            { en: 'I practice gymnastics at + place.', zh: 'I practice gymnastics at + 地點' },
            { en: 'I usually + verb …', zh: 'I usually + 動詞……' },
          ],
          frames: [
            { en: 'I practice gymnastics twice a week.', zh: '我一週練兩次體操。' },
            { en: 'I practice gymnastics every Saturday.', zh: '我每個星期六練體操。' },
            { en: 'I practice gymnastics at a gym.', zh: '我在體操館練習。' },
            { en: 'I practice gymnastics at school.', zh: '我在學校練體操。' },
            { en: 'I usually warm up first.', zh: '我通常先暖身。' },
            { en: 'I usually stretch my body before practice.', zh: '我通常在練習前伸展身體。' },
          ],
        },

        {
          t: 'discuss',
          en: 'Let’s talk!',
          zh: '來聊聊！',
          items: [
            {
              en: 'How often do you practice gymnastics?',
              zh: '你多久練一次體操？',
              starters: [
                { en: 'I practice gymnastics twice a week.', zh: '我一週練兩次體操。' },
                { en: 'I practice every Saturday and Wednesday.', zh: '我每個星期六和星期三都會練。' },
              ],
            },
            {
              en: 'Where do you practice?',
              zh: '你在哪裡練習？',
              starters: [
                { en: 'I practice at a gym near my house.', zh: '我在家附近的體操館練習。' },
                { en: 'I practice at school, in the gym.', zh: '我在學校的體育館練習。' },
              ],
            },
            {
              en: 'How long is each practice?',
              zh: '每次練習多久？',
              starters: [
                { en: 'Each practice is about two hours.', zh: '每次練習大約兩個小時。' },
                { en: 'It’s one and a half hours long.', zh: '大約一個半小時。' },
              ],
            },
            {
              en: 'Who do you practice with?',
              zh: '你和誰一起練習？',
              starters: [
                { en: 'I practice with my friends from class.', zh: '我和班上的朋友一起練習。' },
                { en: 'I practice with my coach and six other girls.', zh: '我和教練還有另外六個女生一起練。' },
              ],
            },
            {
              en: 'What do you usually do first?',
              zh: '你通常先做什麼？',
              starters: [
                { en: 'I usually warm up first, and then I stretch.', zh: '我通常先暖身，然後伸展。' },
                { en: 'First we run, and after that we stretch.', zh: '我們先跑步，之後再伸展。' },
              ],
            },
            {
              en: 'What do you usually do at the end of your practice?',
              zh: '練習結束時你通常做什麼？',
              starters: [
                { en: 'At the end, we stretch again.', zh: '最後我們會再伸展一次。' },
                { en: 'We practice one skill again and again at the end.', zh: '最後我們會把一個動作練上很多次。' },
              ],
            },
          ],
        },

        // ---------------------------------------------- Part 2
        {
          t: 'part',
          n: 'Part 2',
          en: 'What Can You Do?',
          zh: '你會做哪些動作？',
        },

        {
          t: 'phrases',
          en: 'Skills',
          zh: '體操動作',
          items: [
            {
              en: 'cartwheel',
              zh: '側手翻',
              eg: 'I can do a cartwheel.',
              egZh: '我會側手翻。',
            },
            {
              en: 'handstand',
              zh: '倒立',
              eg: 'I can’t do a handstand yet.',
              egZh: '我還不會倒立。',
            },
            {
              en: 'forward roll',
              zh: '前滾翻',
              eg: 'I can do a forward roll.',
              egZh: '我會前滾翻。',
            },
            {
              en: 'backward roll',
              zh: '後滾翻',
              eg: 'A backward roll is harder than a forward roll for me.',
              egZh: '對我來說後滾翻比前滾翻難。',
            },
            {
              en: 'split',
              zh: '劈腿',
              eg: 'I can do a split now, but I couldn’t do it last year.',
              egZh: '我現在會劈腿了，但去年還不會。',
            },
            {
              en: 'jump',
              zh: '跳躍',
              eg: 'I jump and then I land on both feet.',
              egZh: '我跳起來，然後雙腳落地。',
            },
            {
              en: 'balance',
              zh: '保持平衡',
              eg: 'I can balance on one foot for ten seconds.',
              egZh: '我可以單腳站著保持平衡十秒。',
            },
            {
              en: 'land',
              zh: '落地',
              eg: 'The hardest part is to land without moving my feet.',
              egZh: '最難的部分是落地時腳不能移動。',
            },
            {
              en: 'bend',
              zh: '彎曲',
              eg: 'I bend my knees a little when I land.',
              egZh: '落地時我會稍微彎曲膝蓋。',
            },
            {
              en: 'gymnastics skill',
              zh: '體操技巧／動作',
              eg: 'What gymnastics skill are you practicing now?',
              egZh: '你現在正在練哪個體操動作？',
            },
          ],
        },

        {
          t: 'match',
          en: 'Match the skill to its Chinese',
          zh: '把動作和中文配對',
          hintEn: 'Tap an English word on the left, then its Chinese on the right.',
          hintZh: '先點左邊的英文，再點右邊對應的中文。',
          pairs: [
            { a: 'cartwheel', b: '側手翻' },
            { a: 'handstand', b: '倒立' },
            { a: 'forward roll', b: '前滾翻' },
            { a: 'backward roll', b: '後滾翻' },
            { a: 'split', b: '劈腿' },
            { a: 'balance', b: '保持平衡' },
          ],
        },

        {
          t: 'note',
          en: 'The small word that changes everything: yet',
          zh: '一個改變整句話的小字：yet',
          bodyEn: 'Yet means “not now, but I am still working on it”. Put it at the end of a can’t sentence and the sentence stops being about failing and starts being about progress. It is one of the most useful words a gymnast can own.',
          bodyZh: 'yet 的意思是「現在還不行，但我還在努力」。把它放在 can’t 句子的句尾，那句話就不再是在說「我做不到」，而是在說「我還在進步中」。對一個練體操的人來說，這是最好用的一個字。',
        },

        {
          t: 'contrast',
          en: 'Same skill, two ways to say it',
          zh: '同一個動作，兩種說法',
          coldEn: 'Without yet',
          coldZh: '沒有加 yet',
          warmEn: 'With yet',
          warmZh: '加上 yet',
          items: [
            {
              caseEn: 'You are asked about the handstand you are still working on.',
              caseZh: '別人問起你還在練的倒立。',
              cold: {
                en: 'I can’t do a handstand.',
                zh: '我不會倒立。',
              },
              warm: {
                en: 'I can’t do a handstand yet.',
                zh: '我還不會倒立。',
              },
              whyEn: 'Both are correct English. The first sounds finished, as if you have stopped. The second says you are in the middle of learning it — which is the true one.',
              whyZh: '兩句英文都正確。第一句聽起來像已經結束了，好像你放棄了；第二句表示你正在學的路上——而這才是事實。',
            },
            {
              caseEn: 'You are talking about a skill you have just started.',
              caseZh: '你在說一個剛開始練的動作。',
              cold: {
                en: 'I can’t do a backward roll.',
                zh: '我不會後滾翻。',
              },
              warm: {
                en: 'I can do a forward roll, but I can’t do a backward roll yet.',
                zh: '我會前滾翻，但還不會後滾翻。',
              },
              whyEn: 'Saying what you can do first gives the listener something real before the “but”. The sentence ends up telling them two things instead of one.',
              whyZh: '先說會的，再說 but，聽的人先聽到一件實在的事。同一句話就一次講了兩件事，而不是只有一件。',
            },
          ],
        },

        {
          t: 'gap',
          en: 'Choose the right ending',
          zh: '選出正確的句尾',
          hintEn: 'Tap the phrase that finishes each sentence. The reason appears under it.',
          hintZh: '點選能完成句子的選項，下方會出現說明。',
          items: [
            {
              text: 'I can do a cartwheel, but I can’t do a handstand ___.',
              textZh: '我會側手翻，但我還不會倒立。',
              options: ['yet', 'now', 'too'],
              answer: 0,
              why: {
                en: 'Yet at the end of a can’t sentence means you are still learning it.',
                zh: 'yet 放在 can’t 句子的句尾，表示你還在學。',
              },
            },
            {
              text: 'My favorite skill ___ the cartwheel because it’s fun.',
              textZh: '我最喜歡的動作是側手翻，因為很好玩。',
              options: ['is', 'are', 'be'],
              answer: 0,
              why: {
                en: 'Skill is one thing, so the verb is is. My favorite skills are … would need more than one.',
                zh: 'skill 是單數，所以用 is。如果說 My favorite skills are…，那就要有不只一個動作。',
              },
            },
            {
              text: 'I ___ do a forward roll, and I can balance on one foot.',
              textZh: '我會前滾翻，也可以單腳保持平衡。',
              options: ['can', 'am', 'do'],
              answer: 0,
              why: {
                en: 'Can goes straight in front of the plain verb: I can do, I can balance.',
                zh: 'can 直接放在原形動詞前面：I can do、I can balance。',
              },
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Let’s talk!',
          zh: '來聊聊！',
          items: [
            {
              en: 'What gymnastics skills can you do?',
              zh: '你會做哪些體操動作？',
              starters: [
                { en: 'I can do a cartwheel and a forward roll.', zh: '我會側手翻和前滾翻。' },
                { en: 'I can do a split, and I can balance on one foot.', zh: '我會劈腿，也可以單腳保持平衡。' },
              ],
            },
            {
              en: 'What is your favorite skill?',
              zh: '你最喜歡的動作是什麼？',
              starters: [
                { en: 'My favorite skill is the cartwheel.', zh: '我最喜歡的動作是側手翻。' },
                { en: 'My favorite skill is the split.', zh: '我最喜歡的動作是劈腿。' },
              ],
            },
            {
              en: 'Why do you like it?',
              zh: '你為什麼喜歡它？',
              starters: [
                { en: 'My favorite skill is the cartwheel because it’s fun.', zh: '我最喜歡側手翻，因為很好玩。' },
                { en: 'I like it because it looks cool.', zh: '我喜歡它，因為看起來很帥。' },
              ],
            },
            {
              en: 'What is easy for you?',
              zh: '對你來說什麼是簡單的？',
              starters: [
                { en: 'The forward roll is easy for me.', zh: '前滾翻對我來說很簡單。' },
                { en: 'Stretching is easy, and I like it.', zh: '伸展很簡單，我也很喜歡。' },
              ],
            },
            {
              en: 'What is difficult for you?',
              zh: '對你來說什麼是困難的？',
              starters: [
                { en: 'The handstand is difficult for me.', zh: '倒立對我來說很難。' },
                { en: 'Landing without moving my feet is difficult.', zh: '落地時腳不能移動，這對我來說很難。' },
              ],
            },
            {
              en: 'What skill are you practicing now?',
              zh: '你現在正在練哪個動作？',
              starters: [
                { en: 'I’m practicing the handstand now.', zh: '我現在正在練倒立。' },
                { en: 'I’m practicing my balance this month.', zh: '這個月我在練平衡。' },
              ],
            },
            {
              en: 'What can’t you do yet?',
              zh: '你還不會做什麼？',
              starters: [
                { en: 'I can’t do a backward roll yet.', zh: '我還不會後滾翻。' },
                { en: 'I can’t hold a handstand for ten seconds yet.', zh: '我還沒辦法倒立撐十秒。' },
              ],
            },
          ],
        },

        // ---------------------------------------------- Part 3
        {
          t: 'part',
          n: 'Part 3',
          en: 'I’m Getting Better!',
          zh: '我正在進步！',
        },

        {
          t: 'summary',
          en: 'This part is about time. Not what you can do today, but the distance between what you couldn’t do before and what you can do now. That distance is the most interesting thing you can tell anyone about a sport, and it is the part most people forget to mention.',
          zh: '這個部分講的是「時間」。重點不是你今天會什麼，而是你「以前不會」和「現在會了」之間的那段距離。談運動的時候，這段距離是最有意思的內容，卻也是大多數人最常忘記說的部分。',
        },

        {
          t: 'phrases',
          en: 'Getting better',
          zh: '進步的說法',
          items: [
            {
              en: 'difficult',
              zh: '困難的',
              eg: 'At first, the handstand was difficult for me.',
              egZh: '一開始，倒立對我來說很難。',
            },
            {
              en: 'easy',
              zh: '簡單的',
              eg: 'The forward roll is easy for me now.',
              egZh: '前滾翻現在對我來說很簡單。',
            },
            {
              en: 'improve',
              zh: '進步；改善',
              eg: 'My balance is improving every month.',
              egZh: '我的平衡感每個月都在進步。',
            },
            {
              en: 'get better',
              zh: '變得更好',
              eg: 'I want to get better at gymnastics.',
              egZh: '我想在體操上變得更好。',
            },
            {
              en: 'try again',
              zh: '再試一次',
              eg: 'Sometimes I’m scared, but I try again.',
              egZh: '有時候我會害怕，但我還是會再試一次。',
            },
            {
              en: 'keep practicing',
              zh: '持續練習',
              eg: 'Sometimes I’m tired, but I keep practicing.',
              egZh: '有時候我很累，但我還是持續練習。',
            },
            {
              en: 'make a mistake',
              zh: '犯錯',
              eg: 'When I make a mistake, I stand up and start again.',
              egZh: '我犯錯的時候，就站起來重新開始。',
            },
            {
              en: 'learn from mistakes',
              zh: '從錯誤中學習',
              eg: 'My coach says we learn from mistakes.',
              egZh: '我的教練說，我們是從錯誤中學習的。',
            },
            {
              en: 'give up',
              zh: '放棄',
              eg: 'It was difficult, but I didn’t give up.',
              egZh: '那很難，但我沒有放棄。',
            },
            {
              en: 'again and again',
              zh: '一次又一次',
              eg: 'I practiced the cartwheel again and again.',
              egZh: '我把側手翻練了一次又一次。',
            },
          ],
        },

        {
          t: 'note',
          en: 'keep + V-ing',
          zh: 'keep ＋ 動詞 -ing',
          bodyEn: 'Keep + V-ing means you go on doing something and do not stop: I keep practicing, I keep trying. Notice the -ing — keep is always followed by the -ing form, never by to. Not “I keep to practice”.',
          bodyZh: 'keep ＋ 動詞 -ing 表示持續做某件事、沒有停下來：I keep practicing、I keep trying。注意那個 -ing——keep 後面永遠接 -ing 形式，不會接 to。不能說 I keep to practice。',
        },

        {
          t: 'gap',
          en: 'Before and now',
          zh: '以前與現在',
          hintEn: 'Tap the phrase that finishes each sentence. The reason appears under it.',
          hintZh: '點選能完成句子的選項，下方會出現說明。',
          items: [
            {
              text: 'I ___ do a cartwheel before, but now I can do it.',
              textZh: '我以前不會側手翻，但現在會了。',
              options: ['couldn’t', 'can’t', 'don’t'],
              answer: 0,
              why: {
                en: 'Before points at the past, so can’t becomes couldn’t.',
                zh: 'before 指的是過去，所以 can’t 要變成 couldn’t。',
              },
            },
            {
              text: 'At first, gymnastics ___ difficult for me.',
              textZh: '一開始，體操對我來說很難。',
              options: ['was', 'is', 'were'],
              answer: 0,
              why: {
                en: 'At first is in the past, and gymnastics counts as one thing, so it takes was.',
                zh: 'at first 指過去，而 gymnastics 視為單數，所以用 was。',
              },
            },
            {
              text: 'It’s hard, but I keep ___.',
              textZh: '這很難，但我持續練習。',
              options: ['practicing', 'to practice', 'practice'],
              answer: 0,
              why: {
                en: 'Keep is always followed by the -ing form.',
                zh: 'keep 後面永遠接 -ing 形式。',
              },
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Let’s talk!',
          zh: '來聊聊！',
          items: [
            {
              en: 'Was gymnastics difficult when you first started?',
              zh: '你剛開始學體操的時候會很難嗎？',
              starters: [
                { en: 'At first, gymnastics was difficult for me.', zh: '一開始，體操對我來說很難。' },
                { en: 'It wasn’t too difficult, but I was very tired.', zh: '沒有太難，但我非常累。' },
              ],
            },
            {
              en: 'What was difficult for you?',
              zh: '當時什麼對你來說很困難？',
              starters: [
                { en: 'At first, the handstand was difficult for me.', zh: '一開始，倒立對我來說很難。' },
                { en: 'Stretching was difficult because I wasn’t flexible.', zh: '伸展很難，因為我當時身體不夠柔軟。' },
              ],
            },
            {
              en: 'What couldn’t you do before?',
              zh: '你以前不會做什麼？',
              starters: [
                { en: 'I couldn’t do a cartwheel before.', zh: '我以前不會側手翻。' },
                { en: 'I couldn’t balance well before.', zh: '我以前平衡感不太好。' },
              ],
            },
            {
              en: 'What can you do now?',
              zh: '你現在會做什麼？',
              starters: [
                { en: 'I couldn’t do a cartwheel before, but now I can do it.', zh: '我以前不會側手翻，但現在會了。' },
                { en: 'I couldn’t balance well before, but now I can balance better.', zh: '我以前平衡感不好，但現在平衡得更好了。' },
              ],
            },
            {
              en: 'How did you learn it?',
              zh: '你是怎麼學會的？',
              starters: [
                { en: 'I practiced it again and again.', zh: '我把它練了一次又一次。' },
                { en: 'My coach helped me, and I kept practicing.', zh: '我的教練幫了我，然後我持續練習。' },
              ],
            },
            {
              en: 'What do you do when you make a mistake?',
              zh: '你犯錯的時候會怎麼做？',
              starters: [
                { en: 'When I make a mistake, I try again.', zh: '我犯錯的時候會再試一次。' },
                { en: 'I ask my coach what was wrong, and then I try again.', zh: '我會問教練哪裡不對，然後再試一次。' },
              ],
            },
            {
              en: 'What do you do when you can’t do something?',
              zh: '有做不到的動作時，你會怎麼做？',
              starters: [
                { en: 'I keep practicing until I can do it.', zh: '我會一直練到會為止。' },
                { en: 'I practice the easy part first, and then the hard part.', zh: '我會先練簡單的部分，再練難的部分。' },
              ],
            },
            {
              en: 'Have you ever wanted to give up?',
              zh: '你曾經想過要放棄嗎？',
              starters: [
                { en: 'Yes, once. It was difficult, but I didn’t give up.', zh: '有過一次。那時很難，但我沒有放棄。' },
                { en: 'Sometimes I’m tired, but I keep practicing.', zh: '有時候我很累，但我還是持續練習。' },
              ],
            },
          ],
        },

        // ---------------------------------------------- Part 4
        {
          t: 'part',
          n: 'Part 4',
          en: 'How Does Gymnastics Make You Feel?',
          zh: '體操帶給你什麼感覺？',
        },

        {
          t: 'phrases',
          en: 'Feelings',
          zh: '感受',
          items: [
            {
              en: 'happy',
              zh: '開心的',
              eg: 'Gymnastics makes me feel happy.',
              egZh: '體操讓我覺得很開心。',
            },
            {
              en: 'excited',
              zh: '興奮的',
              eg: 'I feel excited when I learn something new.',
              egZh: '學到新東西的時候，我覺得很興奮。',
            },
            {
              en: 'nervous',
              zh: '緊張的',
              eg: 'I feel nervous when I try a difficult skill.',
              egZh: '嘗試困難動作的時候，我會覺得緊張。',
            },
            {
              en: 'scared',
              zh: '害怕的',
              eg: 'Sometimes I’m scared, but I try again.',
              egZh: '有時候我會害怕，但我還是會再試一次。',
            },
            {
              en: 'tired',
              zh: '疲累的',
              eg: 'Sometimes I’m tired, but I keep practicing.',
              egZh: '有時候我很累，但我還是持續練習。',
            },
            {
              en: 'confident',
              zh: '有自信的',
              eg: 'I feel confident when I know the skill well.',
              egZh: '當我很熟悉某個動作時，我就覺得有自信。',
            },
            {
              en: 'proud',
              zh: '感到驕傲／有成就感的',
              eg: 'I feel proud when I do something by myself.',
              egZh: '靠自己做到某件事的時候，我覺得很有成就感。',
            },
            {
              en: 'frustrated',
              zh: '挫折的；沮喪的',
              eg: 'I feel frustrated when I make the same mistake again.',
              egZh: '又犯同樣的錯的時候，我覺得很挫折。',
            },
            {
              en: 'brave',
              zh: '勇敢的',
              eg: 'You have to be brave the first time you try it.',
              egZh: '第一次嘗試的時候，你必須要勇敢。',
            },
            {
              en: 'have fun',
              zh: '玩得開心',
              eg: 'I have fun with my friends at practice.',
              egZh: '練習的時候我和朋友玩得很開心。',
            },
          ],
        },

        {
          t: 'task',
          en: 'Three patterns for feelings',
          zh: '三個講感受的句型',
          instructionEn: 'Tap a pattern, then finish it out loud about your own gymnastics. There is no right answer here — only your answer.',
          instructionZh: '點一個句型，然後用你自己的體操經驗把它說完。這裡沒有標準答案，只有你的答案。',
          prompts: [
            { en: 'I feel ___ when ___.', zh: 'I feel（感受）when（時機）' },
            { en: 'Sometimes I’m ___, but I ___.', zh: 'Sometimes I’m（感受），but I（行動）' },
            { en: '___ makes me feel ___.', zh: '（某件事）makes me feel（感受）' },
          ],
          frames: [
            { en: 'I feel excited when I learn something new.', zh: '學到新東西的時候，我覺得很興奮。' },
            { en: 'I feel nervous when I try a difficult skill.', zh: '嘗試困難動作的時候，我會覺得緊張。' },
            { en: 'I feel proud when I do something by myself.', zh: '靠自己做到某件事的時候，我覺得很有成就感。' },
            { en: 'Sometimes I’m scared, but I try again.', zh: '有時候我會害怕，但我還是會再試一次。' },
            { en: 'Sometimes I’m tired, but I keep practicing.', zh: '有時候我很累，但我還是持續練習。' },
            { en: 'Gymnastics makes me feel happy.', zh: '體操讓我覺得很開心。' },
            { en: 'Learning a new skill makes me feel proud.', zh: '學會一個新動作讓我很有成就感。' },
          ],
        },

        {
          t: 'poll',
          en: 'True for you?',
          zh: '這些對你來說是真的嗎？',
          hintEn: 'There is no right answer. Choose one, then say why in English.',
          hintZh: '這裡沒有標準答案。選一個，然後用英文說出你的理由。',
          items: [
            { en: 'I feel nervous before gymnastics class.', zh: '上體操課之前我會覺得緊張。' },
            { en: 'I feel tired but happy after practice.', zh: '練習結束後我覺得很累，但很開心。' },
            { en: 'Trying a new skill is scary the first time.', zh: '第一次嘗試新動作的時候很可怕。' },
            { en: 'I feel proud when I do something by myself.', zh: '靠自己做到某件事時，我覺得很有成就感。' },
            { en: 'Gymnastics makes me feel brave.', zh: '體操讓我覺得自己很勇敢。' },
          ],
        },

        {
          t: 'discuss',
          en: 'Let’s talk!',
          zh: '來聊聊！',
          items: [
            {
              en: 'How do you feel before gymnastics class?',
              zh: '上體操課之前你有什麼感覺？',
              starters: [
                { en: 'I feel excited before class.', zh: '上課前我覺得很興奮。' },
                { en: 'I feel a little nervous before class.', zh: '上課前我會有點緊張。' },
              ],
            },
            {
              en: 'How do you feel after gymnastics class?',
              zh: '上完體操課之後你有什麼感覺？',
              starters: [
                { en: 'After class I feel tired but happy.', zh: '下課後我覺得很累，但很開心。' },
                { en: 'I feel proud when I do something new in class.', zh: '在課堂上做到新的動作時，我很有成就感。' },
              ],
            },
            {
              en: 'Are you ever scared during practice?',
              zh: '練習的時候你曾經害怕過嗎？',
              starters: [
                { en: 'Yes, sometimes I’m scared, but I try again.', zh: '有，有時候我會害怕，但我會再試一次。' },
                { en: 'I was scared the first time, but not now.', zh: '第一次的時候很害怕，但現在不會了。' },
              ],
            },
            {
              en: 'What makes you nervous?',
              zh: '什麼會讓你緊張？',
              starters: [
                { en: 'I feel nervous when I try a difficult skill.', zh: '嘗試困難動作的時候，我會覺得緊張。' },
                { en: 'A show makes me nervous because everyone is watching.', zh: '表演會讓我很緊張，因為大家都在看。' },
              ],
            },
            {
              en: 'What do you do when you feel scared?',
              zh: '害怕的時候你會怎麼做？',
              starters: [
                { en: 'I take a deep breath and try again.', zh: '我會深呼吸，然後再試一次。' },
                { en: 'I ask my coach to help me the first time.', zh: '第一次的時候我會請教練幫我。' },
              ],
            },
            {
              en: 'When do you feel proud of yourself?',
              zh: '你什麼時候會為自己感到驕傲？',
              starters: [
                { en: 'I feel proud when I do something by myself.', zh: '靠自己做到某件事的時候，我覺得很有成就感。' },
                { en: 'I felt proud when I did my first cartwheel.', zh: '第一次做出側手翻的時候，我覺得很驕傲。' },
              ],
            },
            {
              en: 'Tell me about a time when gymnastics made you very happy.',
              zh: '說說看，有哪一次體操讓你非常開心？',
              starters: [
                { en: 'One day I did a skill for the first time, and it made me feel happy.', zh: '有一天我第一次做出某個動作，那讓我覺得很開心。' },
                { en: 'My coach said “good job”, and that made me feel proud.', zh: '我的教練說「做得好」，那讓我覺得很有成就感。' },
              ],
            },
          ],
        },

        // ---------------------------------------------- Part 5
        {
          t: 'part',
          n: 'Part 5',
          en: 'My Gymnastics Goal',
          zh: '我的體操目標',
        },

        {
          t: 'summary',
          en: 'A goal is the last piece. Once you can say what you practice, what you can do, what changed and how it feels, the natural end is where you are going next. Two sentences are enough: what you want to learn, and what you have to do to get there.',
          zh: '目標是最後一塊。當你能說出自己平常練什麼、會做什麼、改變了什麼、感覺如何之後，最自然的結尾就是「接下來要往哪裡去」。兩句話就夠了：你想學會什麼，以及為此你必須做什麼。',
        },

        {
          t: 'phrases',
          en: 'Goals',
          zh: '目標的說法',
          items: [
            {
              en: 'goal',
              zh: '目標',
              eg: 'My goal is to get stronger and improve my balance.',
              egZh: '我的目標是變得更強壯，並改善我的平衡感。',
            },
            {
              en: 'learn',
              zh: '學習；學會',
              eg: 'I want to learn how to do a handstand.',
              egZh: '我想學會怎麼倒立。',
            },
            // The sheet lists `improve` in Part 3 as well. It is kept in both
            // places on purpose: here the meaning is the goal-facing one.
            {
              en: 'improve',
              zh: '改善；進步',
              eg: 'I want to improve before the next show.',
              egZh: '我想在下次表演前有所進步。',
            },
            {
              en: 'practice harder',
              zh: '更努力練習',
              eg: 'I need to practice harder because I want to get better.',
              egZh: '我必須更努力練習，因為我想變得更好。',
            },
            {
              en: 'become stronger',
              zh: '變得更強壯',
              eg: 'I need to become stronger because some skills are difficult.',
              egZh: '我需要變得更強壯，因為有些動作很難。',
            },
            {
              en: 'become more flexible',
              zh: '變得更柔軟',
              eg: 'I stretch every day because I want to become more flexible.',
              egZh: '我每天伸展，因為我想變得更柔軟。',
            },
            {
              en: 'improve my balance',
              zh: '改善我的平衡感',
              eg: 'I want to improve my balance this year.',
              egZh: '今年我想改善我的平衡感。',
            },
            {
              en: 'by myself',
              zh: '靠自己',
              eg: 'I hope I can do a handstand by myself one day.',
              egZh: '我希望有一天能靠自己倒立。',
            },
            {
              en: 'one day',
              zh: '有一天',
              eg: 'I hope I can be a great gymnast one day.',
              egZh: '我希望有一天能成為很棒的體操選手。',
            },
            {
              en: 'never give up',
              zh: '永不放棄',
              eg: 'It’s difficult, but I never give up.',
              egZh: '這很難，但我從不放棄。',
            },
          ],
        },

        {
          t: 'task',
          en: 'Four patterns for a goal',
          zh: '四個講目標的句型',
          instructionEn: 'Tap a pattern and finish it out loud. Try to use a real goal — one you are actually working on this month.',
          instructionZh: '點一個句型，然後把它說完。試著說一個真正的目標——你這個月真的在努力的那一個。',
          prompts: [
            { en: 'I want to learn how to + verb …', zh: 'I want to learn how to ＋ 動詞……' },
            { en: 'I want to get better at + noun / V-ing.', zh: 'I want to get better at ＋ 名詞／動詞 -ing' },
            { en: 'I need to ___ because ___.', zh: 'I need to（做什麼）because（原因）' },
            { en: 'I hope I can ___ one day.', zh: 'I hope I can（做到什麼）one day' },
          ],
          frames: [
            { en: 'I want to learn how to do a handstand.', zh: '我想學會怎麼倒立。' },
            { en: 'I want to learn how to do a new gymnastics skill.', zh: '我想學會一個新的體操動作。' },
            { en: 'I want to get better at gymnastics.', zh: '我想在體操上變得更好。' },
            { en: 'I want to get better at balancing.', zh: '我想把平衡練得更好。' },
            { en: 'I need to practice more because I want to get better.', zh: '我需要多練習，因為我想變得更好。' },
            { en: 'I need to become stronger because some skills are difficult.', zh: '我需要變得更強壯，因為有些動作很難。' },
            { en: 'I hope I can do a handstand by myself one day.', zh: '我希望有一天能靠自己倒立。' },
            { en: 'I hope I can be a great gymnast one day.', zh: '我希望有一天能成為很棒的體操選手。' },
          ],
        },

        {
          t: 'gap',
          en: 'Finish the goal',
          zh: '把目標說完整',
          hintEn: 'Tap the phrase that finishes each sentence. The reason appears under it.',
          hintZh: '點選能完成句子的選項，下方會出現說明。',
          items: [
            {
              text: 'I want to learn ___ do a handstand.',
              textZh: '我想學會怎麼倒立。',
              options: ['how to', 'how', 'to how'],
              answer: 0,
              why: {
                en: 'Learn how to + verb is the whole pattern. How on its own would need a full sentence after it.',
                zh: 'learn how to ＋ 動詞是完整的句型。單獨的 how 後面必須接一個完整句子。',
              },
            },
            {
              text: 'I want to get better ___ balancing.',
              textZh: '我想把平衡練得更好。',
              options: ['at', 'in', 'on'],
              answer: 0,
              why: {
                en: 'Get better always takes at before the thing you are improving.',
                zh: 'get better 後面要接 at，再說出你想改善的事情。',
              },
            },
            {
              text: 'I hope I ___ do a handstand by myself one day.',
              textZh: '我希望有一天能靠自己倒立。',
              options: ['can', 'could', 'will can'],
              answer: 0,
              why: {
                en: 'After I hope, English uses can for something still ahead of you. Will can is never possible — two of these words cannot sit together.',
                zh: 'I hope 後面談還沒發生的事時用 can。will can 永遠不成立——這兩個字不能放在一起。',
              },
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Let’s talk!',
          zh: '來聊聊！',
          items: [
            {
              en: 'What skill do you want to learn next?',
              zh: '你接下來想學會哪個動作？',
              starters: [
                { en: 'I want to learn how to do a handstand.', zh: '我想學會怎麼倒立。' },
                { en: 'I want to learn a new gymnastics skill this year.', zh: '今年我想學會一個新的體操動作。' },
              ],
            },
            {
              en: 'Why do you want to learn it?',
              zh: '你為什麼想學它？',
              starters: [
                { en: 'I want to learn it because it looks cool.', zh: '我想學，因為它看起來很帥。' },
                { en: 'I want to learn it because my friends can do it.', zh: '我想學，因為我的朋友都會。' },
              ],
            },
            {
              en: 'What do you need to practice more?',
              zh: '你需要多練什麼？',
              starters: [
                { en: 'I need to practice my balance more.', zh: '我需要多練平衡。' },
                { en: 'I need to practice more because I want to get better.', zh: '我需要多練習，因為我想變得更好。' },
              ],
            },
            {
              en: 'Do you want to become stronger?',
              zh: '你想變得更強壯嗎？',
              starters: [
                { en: 'Yes. I need to become stronger because some skills are difficult.', zh: '想。我需要變得更強壯，因為有些動作很難。' },
                { en: 'Yes, especially my arms, for the handstand.', zh: '想，尤其是手臂，因為要倒立。' },
              ],
            },
            {
              en: 'Do you want to become more flexible?',
              zh: '你想變得更柔軟嗎？',
              starters: [
                { en: 'Yes. I stretch every day because I want to become more flexible.', zh: '想。我每天伸展，因為我想變得更柔軟。' },
                { en: 'Yes, so the split is easier for me.', zh: '想，這樣劈腿對我來說會比較容易。' },
              ],
            },
            {
              en: 'What is your gymnastics goal?',
              zh: '你的體操目標是什麼？',
              starters: [
                { en: 'My goal is to get stronger and improve my balance.', zh: '我的目標是變得更強壯，並改善我的平衡感。' },
                { en: 'My goal is to do a handstand by myself.', zh: '我的目標是能靠自己倒立。' },
              ],
            },
            {
              en: 'What do you hope you can do one day?',
              zh: '你希望有一天能做到什麼？',
              starters: [
                { en: 'I hope I can do a handstand by myself one day.', zh: '我希望有一天能靠自己倒立。' },
                { en: 'I hope I can be a great gymnast one day.', zh: '我希望有一天能成為很棒的體操選手。' },
              ],
            },
          ],
        },

        // ---------------------------------------------- Final challenge
        {
          t: 'part',
          n: 'Final',
          en: 'Tell Me About Your Gymnastics!',
          zh: '跟我說說你的體操！',
        },

        {
          t: 'task',
          en: 'Speak for 30 to 60 seconds',
          zh: '說 30 到 60 秒',
          instructionEn: 'Put the five parts together into one turn. Follow the ideas in order and tick a phrase each time you use one. Do not write it first — say it.',
          instructionZh: '把五個部分串成一段話。照著下面的順序說，每用到一個句型就打勾一次。不要先寫下來——直接說出來。',
          prompts: [
            { en: 'I practice gymnastics…', zh: '我平常練體操……' },
            { en: '→ I can…', zh: '→ 我會……' },
            { en: '→ I couldn’t… before, but now…', zh: '→ 我以前不會……，但現在……' },
            { en: '→ Sometimes I feel…', zh: '→ 有時候我覺得……' },
            { en: '→ My favorite…', zh: '→ 我最喜歡的……' },
            { en: '→ My goal is…', zh: '→ 我的目標是……' },
            { en: '→ I hope…', zh: '→ 我希望……' },
          ],
          checklist: [
            { en: 'I practice gymnastics …', zh: '我練體操……' },
            { en: 'I can …', zh: '我會……' },
            { en: 'I can’t … yet', zh: '我還不會……' },
            { en: 'I couldn’t … before, but now …', zh: '我以前不會……，但現在……' },
            { en: 'Sometimes I feel …', zh: '有時候我覺得……' },
            { en: 'My favorite skill is … because …', zh: '我最喜歡的動作是……，因為……' },
            { en: 'My goal is …', zh: '我的目標是……' },
            { en: 'I hope I can … one day', zh: '我希望有一天能……' },
          ],
        },

        {
          t: 'summary',
          en: 'I practice gymnastics every week. My favorite skill is the cartwheel because it’s fun. I can do a cartwheel, but I can’t do a handstand yet. Sometimes I feel nervous when I try a new skill, but I keep practicing. My goal is to get stronger and improve my balance. I hope I can do a handstand by myself one day!',
          zh: '我每個星期都練體操。我最喜歡的動作是側手翻，因為很好玩。我會側手翻，但還不會倒立。嘗試新動作的時候我有時候會緊張，但我還是持續練習。我的目標是變得更強壯，並改善我的平衡感。我希望有一天能靠自己倒立！',
        },

        {
          t: 'note',
          en: 'Why that example works',
          zh: '為什麼那段範例有效',
          bodyEn: 'Six sentences, and every one of them does a different job: what you do, what you like, what you can and can’t do, how it feels, where you are going, and what you hope for. Nobody used a difficult word. That is the whole trick — a good answer is not a hard answer, it is an answer with parts.',
          bodyZh: '六個句子，每一句都在做不同的事：你做什麼、你喜歡什麼、你會與還不會什麼、感覺如何、要往哪裡去、以及你的期望。沒有用到任何難字。這就是全部的訣竅——好的回答不是難的回答，而是有結構、有層次的回答。',
        },
      ],
    },
  ],
};
