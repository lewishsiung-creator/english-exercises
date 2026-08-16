/* Class notes — 2026/08/10.

   A session page. Same shape as the worksheet's content file and rendered by
   the same ../render.js, minus the parts a worksheet needs and a session
   does not: no name fields, no purpose, no teacher-feedback band.

   The usable parts of the recording were sorted into themes. Narration
   (`para`) is English only, because that is how the notes were taken;
   anything meant to be learned or said aloud carries its Chinese.

   Block types are documented at the top of ../content.js. This page also
   uses `fixes` — an original next to the more natural English. */

const WORKSHEET = {
  title: '2026/08/10',
  titleZh: '課堂筆記',

  /* Breadcrumb: the worksheet itself, then the section this session hangs
     under. Two links rather than one, because "back" from a session page can
     mean either the whole worksheet or the place it is listed. */
  crumbs: [
    { href: '../', en: 'Business Clarity', zh: '商業策略與英文表達' },
    { href: '../#overview', en: '1. Business Overview', zh: '事業概述' },
  ],

  sections: [
    // ------------------------------------------------------------------
    {
      id: 'math',
      n: 1,
      en: 'Father’s Day and Teaching Her Son Math',
      zh: '父親節與教孩子數學',
      blocks: [
        {
          t: 'para',
          en: 'Lulu talked about spending time teaching her son math. She said the math itself is not difficult, but her son needs more practice.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Expressions',
          zh: '實用用語',
          items: [
            { en: 'teach my son math', zh: '教我兒子數學' },
            { en: 'coach my son', zh: '指導我兒子' },
            { en: 'need more practice', zh: '需要更多練習' },
            { en: 'be good at math', zh: '擅長數學' },
            { en: 'practice regularly', zh: '定期練習' },
          ],
        },
        {
          t: 'fixes',
          en: 'More Natural Sentences',
          zh: '更自然的說法',
          items: [
            {
              from: 'My son needs to more practice.',
              to: 'My son needs more practice.',
              also: 'My son needs to practice more.',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'montessori',
      n: 2,
      en: 'Montessori Education',
      zh: '蒙特梭利教育',
      blocks: [
        {
          t: 'para',
          en: 'Lulu’s son studies at a Montessori school rather than a conventional local school. One major feature of his current education is that he has more freedom to make choices about his own learning.',
          zh: '',
        },
        {
          t: 'bullets',
          label: 'Key Ideas from Lulu',
          labelZh: 'Lulu 的重點想法',
          items: [
            { en: 'Her son has considerable freedom in choosing how he learns.', zh: '' },
            { en: 'Lulu does not want to completely design his education for him.', zh: '' },
            { en: 'She prefers to let him make decisions.', zh: '' },
            { en: 'With freedom comes responsibility.', zh: '' },
            { en: 'Health and safety are still boundaries that parents need to set.', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Vocabulary and Collocations',
          zh: '實用字彙與搭配詞',
          items: [
            { en: 'Montessori education', zh: '蒙特梭利教育' },
            { en: 'a Montessori school', zh: '蒙特梭利學校' },
            { en: 'a local school', zh: '一般本地學校' },
            { en: 'make his own choices', zh: '做自己的選擇' },
            { en: 'choose his own learning path', zh: '選擇自己的學習方式' },
            { en: 'take responsibility for his choices', zh: '為自己的選擇負責' },
            { en: 'make a decision', zh: '做決定' },
            { en: 'give children more autonomy', zh: '給孩子更多自主權' },
            { en: 'set clear boundaries', zh: '設定清楚界線' },
          ],
        },
        {
          t: 'statements',
          en: 'Core Statement',
          zh: '核心句',
          items: [
            {
              en: 'I want my son to make his own choices, but he also needs to take responsibility for those choices.',
              zh: '我希望我的兒子能做自己的選擇，但他也必須為自己的選擇負責。',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'responsibility',
      n: 3,
      en: 'Choice and Responsibility',
      zh: '選擇與責任',
      blocks: [
        {
          t: 'para',
          en: 'This became one of the major themes of the discussion. Lulu explained that she does not simply allow her son to quit something whenever he wants. If he wants to stop doing something, he needs to explain why.',
          zh: '',
        },

        { t: 'label', en: 'Piano Example', zh: '鋼琴的例子' },
        {
          t: 'para',
          en: 'Her son has learned piano for almost four years. If he says “Mommy, I don’t want to learn piano anymore,” Lulu does not immediately accept the decision.',
          zh: '',
        },
        {
          t: 'bullets',
          en: 'Instead, she asks him to think about:',
          zh: '',
          items: [
            { en: 'Why does he want to stop?', zh: '' },
            { en: 'Is there a real reason?', zh: '' },
            { en: 'Is he simply giving up because something is difficult?', zh: '' },
            { en: 'Is he willing to accept the consequence of his decision?', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'take responsibility', zh: '承擔責任' },
            { en: 'take responsibility for a decision', zh: '為決定負責' },
            { en: 'take responsibility for your choices', zh: '為自己的選擇負責' },
            { en: 'give up easily', zh: '輕易放棄' },
            { en: 'explain your reasons', zh: '解釋你的理由' },
            { en: 'think through a decision', zh: '仔細思考一項決定' },
            { en: 'accept the consequences', zh: '接受後果' },
            { en: 'learn from experience', zh: '從經驗中學習' },
          ],
        },
        {
          t: 'statements',
          en: 'Useful Business-Style Expression',
          zh: '實用商業句型',
          items: [
            { en: 'Freedom and responsibility need to go together.', zh: '自由與責任需要並存。' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'independence',
      n: 4,
      en: 'Helping Her Son Solve His Own Problems',
      zh: '讓孩子自己處理問題',
      blocks: [
        {
          t: 'para',
          en: 'Lulu described an English class outside his regular school where her son felt different from the other students.',
          zh: '',
        },
        {
          t: 'bullets',
          en: 'He was:',
          zh: '',
          items: [
            { en: 'one of the youngest students,', zh: '' },
            { en: 'from a different type of school,', zh: '' },
            { en: 'studying with children from conventional local schools.', zh: '' },
          ],
        },
        {
          t: 'para',
          en: 'At first, he did not immediately tell Lulu about the situation. He tried to deal with it himself. Eventually, when he felt uncomfortable, he talked with Lulu and discussed possible options, including whether he should continue attending the class.',
          zh: '',
        },
        {
          t: 'statements',
          en: 'Key Idea',
          zh: '重點觀念',
          items: [
            {
              en: 'Lulu wants her son to first try to solve problems independently, and then ask for support when necessary.',
              zh: '',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'solve the problem himself', zh: '自己解決問題' },
            { en: 'deal with a difficult situation', zh: '處理困難情況' },
            { en: 'feel uncomfortable', zh: '感到不舒服／不自在' },
            { en: 'talk through the problem', zh: '透過討論釐清問題' },
            { en: 'ask for help when necessary', zh: '必要時尋求協助' },
            { en: 'consider different options', zh: '思考不同選項' },
            { en: 'make his own decision', zh: '做自己的決定' },
          ],
        },
        {
          t: 'statements',
          en: 'Useful Sentence',
          zh: '實用句',
          items: [
            {
              en: 'I usually give him some time to solve the problem himself before I step in.',
              zh: '我通常會先給他一些時間自己處理問題，再介入協助。',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'money',
      n: 5,
      en: 'Teaching Financial Awareness Through Everyday Life',
      zh: '透過日常生活建立金錢觀念',
      blocks: [
        {
          t: 'para',
          en: 'Because Lulu and her husband are busy running their company, her son sometimes needs to participate in decisions about everyday activities, such as where to eat dinner.',
          zh: '',
        },
        {
          t: 'bullets',
          en: 'Lulu encourages him to think about:',
          zh: '',
          items: [
            { en: 'how much something costs,', zh: '' },
            { en: 'whether it is worth buying,', zh: '' },
            { en: 'how much money he can spend,', zh: '' },
            { en: 'whether he really needs something.', zh: '' },
          ],
        },

        { t: 'label', en: 'Restaurant Example', zh: '餐廳的例子' },
        {
          t: 'para',
          en: 'Her son was thirsty and wanted to buy water at a restaurant. When he saw the price, he thought it was too expensive and decided to wait until he returned to the office or home.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'make a spending decision', zh: '做消費決策' },
            { en: 'consider the price', zh: '考慮價格' },
            { en: 'be worth the money', zh: '值得這個價格' },
            { en: 'manage money', zh: '管理金錢' },
            { en: 'spend wisely', zh: '聰明消費' },
            { en: 'make a rational decision', zh: '做出理性決策' },
            { en: 'understand the value of money', zh: '了解金錢的價值' },
          ],
        },
        {
          t: 'statements',
          en: 'Useful Sentence',
          zh: '實用句',
          items: [
            {
              en: 'I want him to learn how to make his own decisions about money.',
              zh: '我希望他學會自己做與金錢相關的決定。',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'age',
      n: 6,
      en: 'Do Not Limit Children Because of Their Age',
      zh: '不因年齡限制孩子',
      blocks: [
        {
          t: 'para',
          en: 'Lulu strongly disagrees with the idea “You are only eight years old, so you cannot decide anything.” She believes adults often underestimate what children are capable of doing.',
          zh: '',
        },

        { t: 'label', en: 'Cake Example', zh: '蛋糕的例子' },
        {
          t: 'para',
          en: 'Lulu said that her son could bake a cake when he was only two years old. Many parents might assume a child needs to be five, six, or seven years old before being able to do something like that. Her point was that adults’ assumptions about age can become unnecessary limitations.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'underestimate a child’s ability', zh: '低估孩子的能力' },
            { en: 'be capable of doing something', zh: '有能力做某事' },
            { en: 'set unnecessary limits', zh: '設下不必要的限制' },
            { en: 'age does not always determine ability', zh: '年齡不一定決定能力' },
            { en: 'give children opportunities', zh: '給孩子機會' },
            { en: 'develop independence', zh: '培養獨立性' },
          ],
        },
        {
          t: 'statements',
          en: 'Strong Discussion Sentence',
          zh: '有力的討論句',
          items: [
            {
              en: 'Sometimes adults limit children based on their own assumptions about what children can or cannot do.',
              zh: '有時候，大人會根據自己的假設，限制孩子能做或不能做什麼。',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'future',
      n: 7,
      en: 'Her Son’s Future Education',
      zh: '兒子未來的教育規劃',
      blocks: [
        {
          t: 'para',
          en: 'Lulu said her son has already thought about his future education.',
          zh: '',
        },
        {
          t: 'bullets',
          en: 'According to the discussion:',
          zh: '',
          items: [
            { en: 'He plans to attend another Montessori school for junior high and senior high school.', zh: '' },
            { en: 'The school is in Hsinchu.', zh: '' },
            { en: 'He would need to live there.', zh: '' },
            { en: 'He was already thinking about this choice when he was around six or seven years old.', zh: '' },
          ],
        },
        {
          t: 'statements',
          en: 'Key Idea',
          zh: '重點觀念',
          items: [
            {
              en: 'It is his plan, not my plan.',
              zh: '她強調這是孩子自己的規劃，而不是父母替他做的規劃。',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'plan his own future', zh: '規劃自己的未來' },
            { en: 'choose his own school', zh: '選擇自己的學校' },
            { en: 'make a long-term decision', zh: '做長期決策' },
            { en: 'live away from home', zh: '離家居住' },
            { en: 'continue his education', zh: '繼續升學' },
            { en: 'take ownership of his future', zh: '對自己的未來負責' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'philosophy',
      n: 8,
      en: 'Lulu’s Philosophy of Education',
      zh: 'Lulu 的教育理念',
      blocks: [
        {
          t: 'statements',
          en: 'A Central Statement from Lulu',
          zh: 'Lulu 的核心一句',
          items: [{ en: 'Life is yours, not mine.', zh: '' }],
        },
        {
          t: 'para',
          en: 'Her philosophy appears to be that parents should guide children, but children need to gradually learn how to design their own lives. Lulu does not want to decide everything for her son.',
          zh: '',
        },
        {
          t: 'bullets',
          en: 'Instead, she wants him to:',
          zh: '',
          ordered: true,
          items: [
            { en: 'think,', zh: '' },
            { en: 'choose,', zh: '' },
            { en: 'explain his reasons,', zh: '' },
            { en: 'experience the consequences,', zh: '' },
            { en: 'learn from the results.', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'design your own life', zh: '設計自己的人生' },
            { en: 'decide what kind of life you want', zh: '決定自己想要什麼樣的人生' },
            { en: 'take ownership of your life', zh: '對自己的人生負責' },
            { en: 'learn through experience', zh: '透過經驗學習' },
            { en: 'develop independent thinking', zh: '培養獨立思考' },
            { en: 'guide rather than control', zh: '引導而非控制' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Statement',
          zh: '潤飾後的表達',
          items: [
            {
              en: 'I don’t want to design my son’s life for him. I want to help him develop the ability to design his own life.',
              zh: '我不想替我的兒子設計人生。我希望幫助他培養設計自己人生的能力。',
              tip: 'Probably the clearest summary of Lulu’s philosophy in this discussion.',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'career',
      n: 9,
      en: 'Career Thinking at a Young Age',
      zh: '從小開始思考職涯與生活',
      blocks: [
        {
          t: 'para',
          en: 'Lulu and her son have discussed what kind of life he might want in the future. At one point, he asked whether Lulu’s company would eventually become his company. Lulu told him that the business belonged to her, and that he needed to decide what his own future would look like.',
          zh: '',
        },

        { t: 'label', en: 'The 7-Eleven Example', zh: '7-Eleven 的例子' },
        {
          t: 'para',
          en: 'At one stage, her son thought he might work at 7-Eleven.',
          zh: '',
        },
        {
          t: 'bullets',
          en: 'Lulu encouraged him to think further:',
          zh: '',
          items: [
            { en: 'What would his salary be?', zh: '' },
            { en: 'What kind of lifestyle would that salary support?', zh: '' },
            { en: 'How much would he need to spend?', zh: '' },
            { en: 'How much could he save?', zh: '' },
            { en: 'Would that lifestyle match the life he wants?', zh: '' },
          ],
        },
        {
          t: 'para',
          en: 'Later, he began thinking about becoming a business owner instead.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'work as an employee', zh: '當員工' },
            { en: 'become a business owner', zh: '成為企業主' },
            { en: 'earn a salary', zh: '賺取薪資' },
            { en: 'calculate your expenses', zh: '計算支出' },
            { en: 'save money', zh: '存錢' },
            { en: 'support your lifestyle', zh: '支撐你的生活方式' },
            { en: 'think about your future career', zh: '思考未來職涯' },
            { en: 'start your own business', zh: '創業' },
          ],
        },
        {
          t: 'statements',
          en: 'Useful Discussion Question',
          zh: '實用討論問題',
          items: [
            {
              en: 'What kind of income would you need to support the life you want?',
              zh: '你需要多少收入，才能支撐你想要的生活？',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'world',
      n: 10,
      en: 'Learning to See a Bigger World',
      zh: '透過學習看見更大的世界',
      blocks: [
        {
          t: 'para',
          en: 'Lulu believes that people need broad experiences before they can decide what they really want.',
          zh: '',
        },
        {
          t: 'bullets',
          en: 'She mentioned several ways to broaden one’s perspective:',
          zh: '',
          items: [
            { en: 'travel,', zh: '' },
            { en: 'reading,', zh: '' },
            { en: 'learning different subjects,', zh: '' },
            { en: 'seeing different countries,', zh: '' },
            { en: 'experiencing different environments.', zh: '' },
          ],
        },
        {
          t: 'statements',
          en: 'Core Idea',
          zh: '核心觀念',
          items: [
            {
              en: 'We cannot imagine a world we have never seen.',
              zh: '如果我們從未看過那個世界，就很難想像那樣的世界。',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'broaden your horizons', zh: '拓展視野' },
            { en: 'see a different world', zh: '看見不同的世界' },
            { en: 'experience different cultures', zh: '體驗不同文化' },
            { en: 'learn from books', zh: '從書本學習' },
            { en: 'gain different perspectives', zh: '獲得不同觀點' },
            { en: 'expose yourself to new experiences', zh: '讓自己接觸新的經驗' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Version of Lulu’s Idea',
          zh: '潤飾後的說法',
          items: [
            {
              en: 'If you want to know what kind of life is possible, you need to see more of the world.',
              zh: '如果你想知道人生有哪些可能性，你需要看見更大的世界。',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'math-why',
      n: 11,
      en: 'Why Children Should Learn Math',
      zh: '為什麼孩子需要學數學',
      blocks: [
        {
          t: 'para',
          en: 'Lulu does not see mathematics merely as a way to calculate numbers. Her main point was that math teaches logical thinking. Today, people can use calculators, computers, or other tools to do calculations, but children still need to understand the logic behind mathematical operations.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Examples Discussed',
          zh: '課堂舉例',
          items: [
            { en: 'add / addition', zh: '加法' },
            { en: 'subtract / subtraction', zh: '減法' },
            { en: 'multiply / multiplication', zh: '乘法' },
            { en: 'divide / division', zh: '除法' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'develop logical thinking', zh: '培養邏輯思考' },
            { en: 'understand the logic behind something', zh: '了解背後的邏輯' },
            { en: 'calculate numbers', zh: '計算數字' },
            { en: 'solve mathematical problems', zh: '解數學問題' },
            { en: 'use tools to calculate', zh: '使用工具計算' },
            { en: 'understand the concept', zh: '理解概念' },
          ],
        },
        {
          t: 'statements',
          en: 'Key Statement',
          zh: '重點句',
          items: [
            {
              en: 'The purpose of learning math is not simply to calculate numbers. It is to develop logical thinking.',
              zh: '學習數學的目的不只是計算，而是培養邏輯思考。',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'speaking',
      n: 12,
      en: 'Encouraging Children to Speak and Think',
      zh: '鼓勵孩子表達與思考',
      blocks: [
        {
          t: 'para',
          en: 'Lulu said she has had conversations with her son since he was very young. She does not believe parents should always be the ones speaking while children only listen.',
          zh: '',
        },
        {
          t: 'bullets',
          en: 'Instead, she encourages him to:',
          zh: '',
          items: [
            { en: 'speak,', zh: '' },
            { en: 'describe things,', zh: '' },
            { en: 'imagine,', zh: '' },
            { en: 'organize ideas,', zh: '' },
            { en: 'create stories,', zh: '' },
            { en: 'express his own thoughts.', zh: '' },
          ],
        },

        { t: 'label', en: 'Picture Storytelling Exercise', zh: '看圖說故事練習' },
        {
          t: 'para',
          en: 'Lulu sometimes gives her son different pictures and asks him to create stories based on them. There is not necessarily one “correct” story.',
          zh: '',
        },
        {
          t: 'bullets',
          en: 'The purpose is to train his brain to:',
          zh: '',
          items: [
            { en: 'imagine,', zh: '' },
            { en: 'connect ideas,', zh: '' },
            { en: 'organize information,', zh: '' },
            { en: 'communicate.', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'encourage a child to speak', zh: '鼓勵孩子說話' },
            { en: 'express his own ideas', zh: '表達自己的想法' },
            { en: 'organize his thoughts', zh: '組織自己的想法' },
            { en: 'use his imagination', zh: '發揮想像力' },
            { en: 'create a story', zh: '創造故事' },
            { en: 'connect different ideas', zh: '連結不同想法' },
            { en: 'develop communication skills', zh: '培養溝通能力' },
            { en: 'develop critical thinking', zh: '培養批判性思考' },
          ],
        },
        {
          t: 'statements',
          en: 'Useful Statement',
          zh: '實用句',
          items: [
            {
              en: 'Instead of always talking to my son, I try to create opportunities for him to talk and organize his own thoughts.',
              zh: '與其一直對兒子說話，我更希望創造機會，讓他自己說、自己整理想法。',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'pua',
      n: 13,
      en: 'PUA and Manipulation',
      zh: 'PUA 與操控',
      blocks: [
        {
          t: 'para',
          en: 'There was also a discussion about the meaning of PUA. The transcript in this section is partially unclear, but one usable concept discussed was manipulating someone.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Words',
          zh: '實用字彙',
          items: [
            { en: 'manipulate', zh: '操控' },
            { en: 'manipulation', zh: '操控行為' },
            { en: 'manipulative behavior', zh: '操控性的行為' },
            { en: 'emotional manipulation', zh: '情緒操控' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'corrections',
      n: '✎',
      en: 'Key Language Corrections from the Class',
      zh: '課堂語言修正',
      blocks: [
        {
          t: 'fixes',
          en: 'Original Idea → More Natural English',
          zh: '原本的說法 → 更自然的英文',
          items: [
            { from: 'choice his school', to: 'choose his school' },
            { from: 'make the decision', to: 'make a decision' },
            { from: 'take the responsible', to: 'take responsibility' },
            { from: 'he need to responsibility', to: 'he needs to take responsibility' },
            { from: 'solve the problems by himself', to: 'solve the problem by himself' },
            { from: 'he is the youngest', to: 'he is the youngest student in the class' },
            { from: 'he feels not so good', to: 'he doesn’t feel comfortable' },
            { from: 'bake the cake by his self', to: 'bake a cake by himself' },
            { from: 'when he is two years old', to: 'when he was two years old' },
            { from: 'he have his own idea', to: 'he has his own ideas' },
            { from: 'be a owner', to: 'become a business owner' },
            { from: 'learn logical', to: 'develop logical thinking' },
            { from: 'listen him', to: 'listen to him' },
            { from: 'training his brain', to: 'training his brain', also: 'helping him develop his thinking skills' },
            { from: 'different thinking', to: 'a different way of thinking' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'takeaways',
      n: '✓',
      en: 'Main Takeaways from This Discussion',
      zh: '本次討論重點',
      blocks: [
        {
          t: 'para',
          en: 'The conversation was fundamentally about education, autonomy, responsibility, and independent thinking.',
          zh: '',
        },
        {
          t: 'points',
          en: 'Lulu’s ideas can be summarized as',
          zh: 'Lulu 的想法可歸納為',
          items: [
            { en: 'Give children choices.', zh: '給孩子選擇。' },
            { en: 'Require them to take responsibility for those choices.', zh: '讓他們為自己的選擇負責。' },
            { en: 'Do not underestimate children because of their age.', zh: '不要因為年齡而低估孩子。' },
            { en: 'Let children solve problems before adults immediately intervene.', zh: '不要一遇到問題就立刻替孩子解決。' },
            { en: 'Teach children to think about real-life consequences.', zh: '教孩子思考真實生活中的後果。' },
            { en: 'Learning should develop thinking, not just knowledge.', zh: '學習的目的不只是獲得知識，而是培養思考能力。' },
            { en: 'Parents should guide rather than design their children’s lives for them.', zh: '父母應該引導孩子，而不是替孩子設計人生。' },
          ],
        },
        {
          t: 'statements',
          en: 'The Strongest Sentence to Carry into a Future Class',
          zh: '最適合帶到下次課堂的一句',
          items: [
            {
              en: 'I don’t want to design my son’s life for him. I want to help him develop the ability to design his own life.',
              zh: '我不想替我的兒子設計人生。我希望幫助他培養設計自己人生的能力。',
            },
          ],
        },
        {
          t: 'note',
          en: 'Where This Could Go Next',
          zh: '下一步可以延伸的方向',
          bodyEn: 'This sentence works well as the core discussion statement for a future class, extending from parenting philosophy to leadership philosophy and organizational management — Lulu’s view of autonomy and responsibility connects directly to how she manages her own business.',
          bodyZh: '這一句非常適合做為下一次課堂的核心 discussion statement，再往 parenting philosophy → leadership philosophy → organizational management 延伸，因為 Lulu 對「autonomy + responsibility」的看法也很容易連結到她身為 business owner 的管理方式。',
        },
      ],
    },
  ],
};
