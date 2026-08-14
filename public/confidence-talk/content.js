/* The 2026/07/11 class notes, turned into a review lesson.

   Everything here comes from the notes themselves. The grouping is theirs
   (confidence, communication, frequency, food, interests, achievements); what
   has been added is the collocations pulled out of the example sentences, the
   sentence frames those examples are built on, and the discussion questions
   the vocabulary was learnt in order to answer.

   Every English line that carries meaning has a `zh`. Nothing has an answer
   key, because there is a teacher in the room. */

const LESSON = {
  kicker: 'Class notes · 2026/07/11',
  title: 'Confidence and Everyday Life',
  titleZh: '自信與日常生活',

  intro: {
    en: 'Everything on this page came out of one lesson. Say the words out loud, '
      + 'put them in your own sentences, and then use them to talk about yourself.',
    zh: '這一頁的內容全部來自同一堂課。把單字大聲念出來，放進自己的句子裡，'
      + '再用它們來談談你自己。',
    goalsEn: 'By the end you should be able to:',
    goalsZh: '上完這一頁，你應該可以：',
    goals: [
      { en: 'Say how you feel, and say when you feel that way.',
        zh: '說出自己的感受，以及什麼時候會有這種感受。' },
      { en: 'Ask for help in English when something is not clear.',
        zh: '當有不懂的地方時，用英文請別人幫忙。' },
      { en: 'Talk about your breakfast, your interests and your idol.',
        zh: '談談你的早餐、你的興趣，還有你的偶像。' },
      { en: 'Tell someone about something you are proud of.',
        zh: '告訴別人一件讓你感到驕傲的事。' },
    ],
  },

  source: {
    en: 'From the class notes of 11 July 2026.',
    zh: '取自 2026 年 7 月 11 日的課堂筆記。',
  },

  // ------------------------------------------------------------ the words

  groups: [
    {
      id: 'feelings',
      n: 1,
      en: 'How you feel',
      zh: '感受',
      lead: {
        en: 'Four feelings. Two of them are the same feeling going in opposite '
          + 'directions — find them.',
        zh: '四個感受。其中兩個是同一種感覺的正反兩面，找找看是哪兩個。',
      },
      words: [
        {
          w: 'confident',
          zh: '有自信的',
          meaning: 'feeling sure about yourself and what you can do',
          examples: [
            { en: 'Are you confident enough?', zh: '你夠有自信嗎？' },
            { en: 'I feel more confident when I get better at gymnastics.',
              zh: '當我的體操進步時，我會覺得更有自信。' },
          ],
        },
        {
          w: 'embarrassed',
          zh: '感到尷尬的；不好意思的',
          meaning: 'feeling uncomfortable because you made a mistake, or because people are looking at you',
          examples: [
            { en: 'I feel embarrassed when I make a mistake in front of other people.',
              zh: '當我在別人面前犯錯時，我會覺得很尷尬。' },
          ],
        },
        {
          w: 'nervous',
          zh: '緊張的；不放鬆的',
          meaning: 'worried, and not relaxed',
          examples: [
            { en: 'I feel nervous when I speak in front of the class.',
              zh: '當我在全班面前說話時，我會感到緊張。' },
          ],
        },
        {
          w: 'relaxed',
          zh: '放鬆的',
          meaning: 'calm, and not nervous',
          examples: [
            { en: 'I feel more relaxed when I get better at gymnastics.',
              zh: '當我的體操進步時，我會感到更放鬆。' },
          ],
        },
      ],
    },

    {
      id: 'talking',
      n: 2,
      en: 'Talking and understanding',
      zh: '溝通相關單字',
      lead: {
        en: 'These are the words you need when a lesson stops making sense. '
          + 'They are the most useful five words on the page.',
        zh: '當你聽不懂的時候，就需要這幾個字。它們是整頁最實用的五個字。',
      },
      words: [
        {
          w: 'explain',
          zh: '解釋；用更簡單的方式說明',
          meaning: 'to say something again in an easier way',
          examples: [
            { en: 'Can you explain it again?', zh: '你可以再解釋一次嗎？' },
          ],
        },
        {
          w: 'clear',
          zh: '清楚的；容易理解的',
          meaning: 'easy to understand',
          examples: [
            { en: 'Your explanation is very clear.', zh: '你的解釋非常清楚。' },
          ],
        },
        {
          w: 'pronunciation',
          zh: '發音',
          meaning: 'the way a word is spoken',
          examples: [
            { en: 'I want to improve my English pronunciation.',
              zh: '我想改善我的英文發音。' },
          ],
        },
        {
          w: 'conversation',
          zh: '對話；交談',
          meaning: 'a talk between two or more people',
          examples: [
            { en: 'We had a short conversation after class.',
              zh: '我們下課後進行了一段簡短的對話。' },
          ],
        },
        {
          w: 'completely',
          zh: '完全地；百分之百地',
          meaning: 'fully — one hundred per cent',
          examples: [
            { en: 'I completely understand your idea.', zh: '我完全了解你的想法。' },
          ],
        },
      ],
    },

    {
      id: 'often',
      n: 3,
      en: 'How often',
      zh: '頻率副詞',
      lead: {
        en: 'A frequency word goes before the main verb, but after the verb '
          + '"be". "I usually eat" — but "I am usually hungry".',
        zh: '頻率副詞放在主要動詞前面，但要放在 be 動詞後面。'
          + '「I usually eat」，可是「I am usually hungry」。',
      },
      words: [
        {
          w: 'usually',
          zh: '通常',
          meaning: 'most of the time',
          examples: [
            { en: 'I usually have breakfast at eight o’clock.',
              zh: '我通常八點吃早餐。' },
            { en: 'What do you usually eat for breakfast?', zh: '你早餐通常吃什麼？' },
          ],
        },
        {
          w: 'never',
          zh: '從不',
          meaning: 'not at any time — zero per cent',
          examples: [
            { en: 'I never eat snacks before breakfast because it is not healthy.',
              zh: '我從不在早餐前吃零食，因為那不健康。' },
          ],
        },
      ],
    },

    {
      id: 'food',
      n: 4,
      en: 'Breakfast and food',
      zh: '早餐與食物',
      lead: {
        en: 'In English you "have" breakfast as often as you "eat" it. Both are '
          + 'correct.',
        zh: '英文裡「吃早餐」用 have 和用 eat 一樣常見，兩種都可以。',
      },
      words: [
        { w: 'egg pancake', zh: '蛋餅', meaning: 'a thin fried pancake with egg — a Taiwanese breakfast', examples: [] },
        { w: 'hamburger', zh: '漢堡', meaning: 'meat in a round bread roll', examples: [] },
        { w: 'sandwich', zh: '三明治', meaning: 'food between two slices of bread', examples: [] },
        {
          w: 'soy milk',
          zh: '豆漿',
          meaning: 'a drink made from soybeans',
          note: {
            en: 'You will also see "soybean milk", but "soy milk" is more common in everyday English.',
            zh: '你也會看到 soybean milk，但日常英文中 soy milk 更常見。',
          },
          examples: [
            { en: 'I usually have an egg pancake and soy milk for breakfast.',
              zh: '我早餐通常吃蛋餅、喝豆漿。' },
          ],
        },
        {
          w: 'snacks',
          zh: '零食',
          meaning: 'small things you eat between meals',
          examples: [
            { en: 'I never eat snacks before breakfast because it is not healthy.',
              zh: '我從不在早餐前吃零食，因為那不健康。' },
          ],
        },
      ],
    },

    {
      id: 'interests',
      n: 5,
      en: 'Activities and interests',
      zh: '活動與興趣',
      lead: {
        en: 'Three words for talking about what you do and who you look up to.',
        zh: '三個字，用來談你做的事，以及你崇拜的人。',
      },
      words: [
        {
          w: 'gymnastics',
          zh: '體操',
          meaning: 'a sport of jumping, balancing and turning your body',
          examples: [
            { en: 'I feel more relaxed when I get better at gymnastics.',
              zh: '當我的體操進步時，我會感到更放鬆。' },
          ],
        },
        {
          w: 'idol',
          zh: '偶像；崇拜的人',
          meaning: 'someone you admire and want to be like',
          examples: [
            { en: 'My idol is a famous gymnast.', zh: '我的偶像是一位著名的體操選手。' },
          ],
        },
        {
          w: 'robots',
          zh: '機器人',
          meaning: 'machines that can move and do jobs by themselves',
          examples: [
            { en: 'Many boys like talking about robots.', zh: '很多男生喜歡談論機器人。' },
          ],
        },
      ],
    },

    {
      id: 'proud',
      n: 6,
      en: 'Something you are proud of',
      zh: '談論自己的成就',
      lead: {
        en: 'The end of the lesson, and the hardest part: saying something good '
          + 'about yourself without making it sound like boasting.',
        zh: '這是課堂的最後一段，也是最難的：說自己的好話，但聽起來不像在炫耀。',
      },
      words: [
        {
          w: 'proud',
          zh: '感到驕傲的；引以為榮的',
          meaning: 'pleased about something good that you did',
          examples: [
            { en: 'I am proud of myself because I woke up early.',
              zh: '我為自己感到驕傲，因為我很早起床。' },
          ],
        },
        {
          w: 'success',
          zh: '成功',
          meaning: 'when something goes well, big or small',
          examples: [
            { en: 'Small successes can help us become more confident.',
              zh: '小小的成功可以幫助我們變得更有自信。' },
          ],
        },
        {
          w: 'mistake',
          zh: '錯誤',
          meaning: 'something you did wrong — and something you can learn from',
          examples: [
            { en: 'I think we can always learn new things from our mistakes.',
              zh: '我認為我們總是可以從錯誤中學到新事物。' },
          ],
        },
      ],
    },
  ],

  // ------------------------------------------------------- the collocations

  phrases: {
    id: 'phrases',
    en: 'Words that go together',
    zh: '常見搭配詞',
    lead: {
      en: 'A collocation is a group of words that English speakers keep together. '
        + 'Learning "get better at" is worth more than learning "get" and "better" '
        + 'on their own.',
      zh: '搭配詞是英文母語者習慣放在一起的字組。'
        + '記住 get better at 這一整組，比分開記 get 和 better 有用得多。',
    },
    hint: {
      en: 'Tap a card to see the Chinese, or the 🔊 to hear it.',
      zh: '點卡片看中文，點 🔊 聽發音。',
    },
    sets: [
      {
        en: 'Feelings',
        zh: '感受',
        items: [
          { en: 'feel confident', zh: '感到有自信' },
          { en: 'feel nervous', zh: '感到緊張' },
          { en: 'feel embarrassed', zh: '感到尷尬' },
          { en: 'get better at something', zh: '在某件事上進步' },
          { en: 'in front of other people', zh: '在別人面前' },
          { en: 'in front of the class', zh: '在全班面前' },
        ],
      },
      {
        en: 'Talking',
        zh: '溝通',
        items: [
          { en: 'explain it again', zh: '再解釋一次' },
          { en: 'improve my pronunciation', zh: '改善我的發音' },
          { en: 'have a conversation', zh: '進行一段對話' },
          { en: 'completely understand', zh: '完全了解' },
          { en: 'share your idea', zh: '分享你的想法' },
          { en: 'tell me what you think', zh: '告訴我你的想法' },
        ],
      },
      {
        en: 'Everyday life',
        zh: '日常生活',
        items: [
          { en: 'have breakfast', zh: '吃早餐' },
          { en: 'eat snacks', zh: '吃零食' },
          { en: 'wake up early', zh: '早起' },
          { en: 'talk about robots', zh: '談論機器人' },
          { en: 'be proud of myself', zh: '為自己感到驕傲' },
          { en: 'learn from our mistakes', zh: '從錯誤中學習' },
          { en: 'do a good job', zh: '做得很好' },
        ],
      },
    ],
  },

  // ---------------------------------------------------- classroom expressions

  expressions: {
    id: 'classroom',
    en: 'Say this in class',
    zh: '實用課堂用語',
    lead: {
      en: 'Three whole sentences from the lesson. Learn them as one piece — you '
        + 'do not have to build them word by word.',
      zh: '課堂上出現的三個完整句子。整句記起來，不必一個字一個字拼。',
    },
    items: [
      {
        en: 'Thank you for telling me what you think. Can you please share your idea?',
        zh: '謝謝你告訴我你的想法。你可以分享你的點子嗎？',
        when: { en: 'When someone answers you, and you want to hear more.',
                zh: '當別人回答你，而你想聽更多的時候。' },
      },
      {
        en: 'Let me tell you the truth.',
        zh: '讓我告訴你實話。',
        when: { en: 'Before you say something honest that may surprise the other person.',
                zh: '在你要說出可能讓對方意外的實話之前。' },
      },
      {
        en: 'I think we can always learn new things from our mistakes.',
        zh: '我認為我們總是可以從錯誤中學到新事物。',
        when: { en: 'When you, or a friend, got something wrong.',
                zh: '當你或朋友做錯事的時候。' },
      },
    ],
  },

  // ------------------------------------------------------ saying it better

  natural: {
    id: 'natural',
    en: 'Say it more naturally',
    zh: '換個說法更自然',
    lead: {
      en: 'Both sentences below are correct English. The second one is what a '
        + 'native speaker would be more likely to say, and the reason is worth '
        + 'knowing.',
      zh: '下面兩句英文都沒有錯，但第二句比較接近母語者的說法，'
        + '而背後的原因很值得知道。',
    },
    items: [
      {
        was: 'Boys always talk about robots.',
        now: 'Many boys like talking about robots.',
        why: {
          en: '"Always" and "boys" together say that every boy does this, every '
            + 'time. That is almost never true. "Many boys" is softer, and safer.',
          zh: 'always 加上 boys，等於說每個男生每次都這樣，這幾乎不可能成立。'
            + '用 many boys 語氣比較緩和，也比較安全。',
        },
      },
      {
        was: 'I drink soybean milk for breakfast.',
        now: 'I drink soy milk for breakfast.',
        why: {
          en: 'Both are understood, but "soy milk" is what you will see on a menu '
            + 'or a carton in everyday English.',
          zh: '兩種說法都聽得懂，但在日常英文的菜單或包裝上，'
            + '看到的幾乎都是 soy milk。',
        },
      },
    ],
  },

  // ------------------------------------------------------- making sentences

  make: {
    id: 'make',
    en: 'Make a sentence',
    zh: '造句練習',
    lead: {
      en: 'Say these out loud, not in your head. Fill the gaps with something '
        + 'true about you — then say the same frame again with something '
        + 'different.',
      zh: '請大聲說出來，不要只在心裡想。用你自己的真實情況填空，'
        + '然後用同一個句型再說一次不同的內容。',
    },
    hint: {
      en: 'Tap a frame to see an example answer.',
      zh: '點句型可以看示範答案。',
    },
    frames: [
      {
        en: 'I feel ______ when ______.',
        zh: '當……的時候，我感到……。',
        eg: { en: 'I feel nervous when I speak in front of the class.',
              zh: '當我在全班面前說話時，我會感到緊張。' },
      },
      {
        en: 'I feel more confident when I get better at ______.',
        zh: '當我的……進步時，我覺得更有自信。',
        eg: { en: 'I feel more confident when I get better at swimming.',
              zh: '當我的游泳進步時，我覺得更有自信。' },
      },
      {
        en: 'I usually ______ for breakfast.',
        zh: '我早餐通常……。',
        eg: { en: 'I usually have an egg pancake and soy milk for breakfast.',
              zh: '我早餐通常吃蛋餅、喝豆漿。' },
      },
      {
        en: 'I never ______ because ______.',
        zh: '我從不……，因為……。',
        eg: { en: 'I never eat snacks before breakfast because it is not healthy.',
              zh: '我從不在早餐前吃零食，因為那不健康。' },
      },
      {
        en: 'My idol is ______ because ______.',
        zh: '我的偶像是……，因為……。',
        eg: { en: 'My idol is a famous gymnast because she never gives up.',
              zh: '我的偶像是一位著名的體操選手，因為她從不放棄。' },
      },
      {
        en: 'I want to improve my ______.',
        zh: '我想改善我的……。',
        eg: { en: 'I want to improve my English pronunciation.',
              zh: '我想改善我的英文發音。' },
      },
      {
        en: 'I am proud of myself because ______.',
        zh: '我為自己感到驕傲，因為……。',
        eg: { en: 'I am proud of myself because I woke up early on Saturday.',
              zh: '我為自己感到驕傲，因為我星期六很早起床。' },
      },
      {
        en: 'Can you explain ______ again?',
        zh: '你可以再解釋一次……嗎？',
        eg: { en: 'Can you explain the last question again?',
              zh: '你可以再解釋一次最後一題嗎？' },
      },
    ],
    bank: {
      en: 'Words you can drop into the gaps',
      zh: '可以填進空格的字',
      words: ['confident', 'nervous', 'relaxed', 'embarrassed', 'gymnastics',
        'robots', 'my idol', 'soy milk', 'an egg pancake', 'a sandwich',
        'snacks', 'my pronunciation', 'a conversation'],
    },
  },

  // ---------------------------------------------------------- the discussion

  talk: {
    id: 'talk',
    en: 'Talk about it',
    zh: '討論時間',
    lead: {
      en: 'There is no right answer to any of these. Use the words from today, '
        + 'and give a reason for what you say — "because" is the most important '
        + 'word on this page.',
      zh: '這些問題沒有標準答案。請用今天學到的字回答，並且說出理由——'
        + 'because 是這一頁最重要的字。',
    },
    hint: {
      en: 'Tap a question for a follow-up to keep the answer going.',
      zh: '點問題可以看追問，讓答案再延伸下去。',
    },
    items: [
      {
        en: 'When do you feel nervous? What helps you feel relaxed again?',
        zh: '你什麼時候會感到緊張？什麼能幫助你重新放鬆？',
        follow: { en: 'Does it work every time?', zh: '這個方法每次都有效嗎？' },
      },
      {
        en: 'What do you usually eat for breakfast? Is it healthy?',
        zh: '你早餐通常吃什麼？那樣健康嗎？',
        follow: { en: 'What would you eat every day if you could choose?',
                  zh: '如果可以自己選，你每天想吃什麼？' },
      },
      {
        en: 'Tell me about something you are getting better at.',
        zh: '說說看有什麼事你正在進步。',
        follow: { en: 'How long have you been doing it?', zh: '你做這件事多久了？' },
      },
      {
        en: 'Who is your idol? Why do you admire that person?',
        zh: '你的偶像是誰？你為什麼欣賞他／她？',
        follow: { en: 'What is one thing you learnt from them?',
                  zh: '你從他／她身上學到了什麼？' },
      },
      {
        en: 'Tell me about something you did last week that you are proud of.',
        zh: '說說看上週你做了什麼讓你感到驕傲的事。',
        follow: { en: 'Was it difficult? What made it difficult?',
                  zh: '那件事困難嗎？困難在哪裡？' },
      },
      {
        en: 'Do you agree that we can learn from our mistakes? Give an example.',
        zh: '你同意我們可以從錯誤中學習嗎？請舉一個例子。',
        follow: { en: 'What did you do differently the next time?',
                  zh: '下一次你有什麼不一樣的做法？' },
      },
      {
        en: 'Is it fair to say "boys always talk about robots"? Why, or why not?',
        zh: '說「男生總是在談論機器人」公平嗎？為什麼？',
        follow: { en: 'What do you and your friends talk about most?',
                  zh: '你和朋友最常聊什麼？' },
      },
      {
        en: 'You do not understand something in class. What can you say?',
        zh: '課堂上有地方聽不懂，你可以說什麼？',
        follow: { en: 'Is it embarrassing to ask? Should it be?',
                  zh: '開口問會不好意思嗎？應該覺得不好意思嗎？' },
      },
    ],
  },

  // -------------------------------------------------------------- the recall

  recall: {
    id: 'recall',
    en: 'Cover the English',
    zh: '蓋住英文，自己說說看',
    lead: {
      en: 'The Chinese is showing and the English is hidden — the other way round '
        + 'from the rest of the page. Say the English before you tap.',
      zh: '這裡只顯示中文，英文被蓋住了，跟前面剛好相反。'
        + '先自己說出英文，再點開來對答案。',
    },
    headZh: { en: 'Chinese', zh: '中文' },
    headEn: { en: 'English', zh: '英文' },
    headFrom: { en: 'From', zh: '出處' },
  },
};
