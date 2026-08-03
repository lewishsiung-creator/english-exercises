/* TOEIC Part 5 & 6 Grammar — lesson content.

   Built from two handouts: “TOEIC Part 5 & Part 6：最常考文法整理” (fifteen
   grammar topics, with tables and TOEIC-style example sentences) and “最值得
   熟記的 15 個 TOEIC 文法公式” (fifteen patterns worth memorising). The two
   overlap by design, so each formula sits inside the topic it belongs to and
   all fifteen are gathered again at the end for revision.

   Everything the handouts state is here. What they do not contain is the
   practice: the example sentences have been turned into Part 5 items — one
   blank, four options — and the three model paragraphs into Part 6 cloze
   passages, because that is the shape of the real test.

   Every visible string is an `en` / `zh` pair. English is shown; the
   Traditional Chinese stays hidden until it is asked for, either line by line
   or with the 中文 switch in the top bar.

   Block types:
     lead      a framing sentence in italics, opening a section
     rule      the grammar point in prose, spoken aloud on request
     formula   a memorisable pattern, with its examples behind a tap
     table     a reference table, bilingual headers
     egs       TOEIC-style example sentences, numbered and spoken
     chips     a list of collocations, Chinese behind a tap
     contrast  two forms placed side by side, for telling them apart
     note      a boxed aside — a trap, or a difference worth stating
     steps     a numbered procedure
     q5        Part 5 practice: one blank, four options, an explanation
     q6        Part 6 practice: a business text with four blanks, one of
               which is a whole sentence
     tiers     ranked lists of what is worth studying first
*/

const LESSON = {
  title: 'TOEIC Part 5 & 6 Grammar',
  titleZh: '多益 Part 5 與 Part 6 文法',
  kicker: '多益文法整理',

  source: {
    en: 'Adapted for class from “TOEIC Part 5 & Part 6：最常考文法整理” and “最值得熟記的 15 個 TOEIC 文法公式”.',
    zh: '課堂改編自《TOEIC Part 5 & Part 6：最常考文法整理》與《最值得熟記的 15 個 TOEIC 文法公式》兩份講義。',
  },

  intro: {
    en: 'Part 5 and Part 6 do not test obscure grammar. They test whether you can decide, quickly, what a blank needs.',
    zh: 'TOEIC Part 5 與 Part 6 的核心，不是考冷門文法，而是測試你能否快速判斷。',
    goalsEn: 'Five decisions, made over and over:',
    goalsZh: '同樣的五個判斷，反覆出現：',
    goals: [
      { en: 'Which part of speech does the blank need?', zh: '空格需要哪一種詞性？' },
      { en: 'Is the sentence structurally complete?', zh: '句子結構是否完整？' },
      { en: 'Are the verb tense and voice right?', zh: '動詞時態與語態是否正確？' },
      { en: 'Is the logic consistent with the sentences around it?', zh: '前後文邏輯是否一致？' },
      { en: 'Is the collocation natural?', zh: '固定搭配是否自然？' },
    ],
    formatEn: 'The format: Part 5 is 30 single sentences, each with one blank. Part 6 is four short business texts with four blanks each — one of those four is a whole missing sentence. A working pace is about twenty seconds a question, which is why these are decisions rather than translations.',
    formatZh: '題型：Part 5 有 30 題單句填空；Part 6 有四篇短文，每篇四格，其中一格是整句插入。合理的作答速度約每題二十秒——所以這些是「判斷」，不是「翻譯」。',
  },

  sections: [
    // ================================================================ 1
    {
      id: 'word-forms',
      n: 1,
      en: 'Word Forms',
      zh: '詞性判斷',
      blocks: [
        {
          t: 'lead',
          en: 'The most common Part 5 question of all. You are not asked what the word means — you are asked what shape it should be.',
          zh: '這是 Part 5 最常見的題型。題目問的不是字義，而是這個字該用什麼形式。',
        },
        {
          t: 'rule',
          en: 'Four options, one root: a noun, a verb, an adjective and an adverb. The position of the blank decides which one, and the position is usually visible without reading the whole sentence.',
          zh: '四個選項來自同一個字根：名詞、動詞、形容詞、副詞。空格的位置決定答案，而位置通常不必讀完整句就看得出來。',
        },
        {
          t: 'table',
          en: 'Where the blank sits',
          zh: '判斷原則',
          head: [{ en: 'Position of the blank', zh: '空格位置' }, { en: 'Usually needs', zh: '通常需要' }],
          rows: [
            ['after a / an / the', 'a noun, or adjective + noun'],
            ['after my / their / the company’s', 'a noun'],
            ['after be', 'an adjective, a noun or a participle'],
            ['before or after an ordinary verb', 'an adverb'],
            ['before a noun', 'an adjective'],
            ['in the subject position', 'a noun or a pronoun'],
          ],
          rowsZh: [
            ['冠詞 a / an / the 後面', '名詞，或形容詞＋名詞'],
            ['所有格 my / their / company’s 後面', '名詞'],
            ['be 動詞後面', '形容詞、名詞或分詞'],
            ['一般動詞前後', '副詞'],
            ['名詞前面', '形容詞'],
            ['主詞位置', '名詞或代名詞'],
          ],
        },
        {
          t: 'formula',
          n: 7,
          pattern: 'article + adjective + noun',
          en: 'An article is very often followed by an adjective and then a noun.',
          zh: '冠詞後面常接形容詞與名詞。',
          egs: [
            { en: 'The company introduced a new payment system.', zh: '公司推出了一套新的付款系統。' },
            { en: 'Ms. Chen gave a detailed presentation on the sales results.', zh: 'Chen 女士針對銷售結果進行了詳細簡報。' },
          ],
        },
        {
          t: 'formula',
          n: 8,
          pattern: 'adverb + verb',
          en: 'An adverb modifies a verb — it says how the action was done.',
          zh: '副詞可以修飾動詞，說明動作進行的方式。',
          egs: [
            { en: 'The customer service team responded quickly to the complaint.', zh: '客服團隊迅速回應了客訴。' },
            { en: 'The technician carefully inspected the equipment.', zh: '技術人員仔細檢查了設備。' },
          ],
        },
        {
          t: 'formula',
          n: 9,
          pattern: 'adverb + adjective',
          en: 'An adverb also modifies an adjective, to give a degree.',
          zh: '副詞可以修飾形容詞，表示程度。',
          egs: [
            { en: 'The new software is extremely reliable.', zh: '這套新軟體非常可靠。' },
            { en: 'Customer feedback has been generally positive.', zh: '客戶回饋大致上是正面的。' },
          ],
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'The marketing team responded quickly to the customer’s complaint.', zh: '行銷團隊迅速回應了客戶的抱怨。' },
            { en: 'The company announced the appointment of a new regional manager.', zh: '公司宣布任命一位新的區域經理。' },
            { en: 'Sales have increased significantly since the new product was introduced.', zh: '自從新產品上市以來，銷售額已大幅增加。' },
            { en: 'Employee satisfaction is measured through an annual survey.', zh: '員工滿意度透過年度調查進行衡量。' },
            { en: 'The director gave a detailed explanation of the revised policy.', zh: '主管詳細說明了修訂後的政策。' },
          ],
        },
        {
          t: 'table',
          en: 'Word families worth knowing cold',
          zh: '常見字族',
          cls: 'family',
          head: [
            { en: 'Verb', zh: '動詞' },
            { en: 'Noun', zh: '名詞' },
            { en: 'Adjective', zh: '形容詞' },
            { en: 'Adverb', zh: '副詞' },
          ],
          rows: [
            ['recommend', 'recommendation', 'recommended', '—'],
            ['succeed', 'success', 'successful', 'successfully'],
            ['signify', 'significance', 'significant', 'significantly'],
            ['compete', 'competition', 'competitive', 'competitively'],
            ['require', 'requirement', 'required', '—'],
            ['negotiate', 'negotiation', 'negotiable', '—'],
            ['approve', 'approval', 'approved', '—'],
            ['respond', 'response', 'responsive', 'responsively'],
          ],
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: 'The marketing team responded ___ to the customer’s complaint.',
              options: ['quick', 'quickly', 'quickness', 'quicken'],
              answer: 1,
              why: {
                en: 'The blank modifies the verb responded, so it takes an adverb.',
                zh: '空格修飾動詞 responded，所以要用副詞。',
              },
            },
            {
              text: 'The company announced the ___ of a new regional manager.',
              options: ['appoint', 'appointed', 'appointment', 'appointing'],
              answer: 2,
              why: {
                en: 'After the article the, and before of, the blank must be a noun.',
                zh: '前面有冠詞 the，後面接 of，空格必須是名詞。',
              },
            },
            {
              text: 'The director gave a ___ explanation of the revised policy.',
              options: ['detail', 'details', 'detailed', 'detailing'],
              answer: 2,
              why: {
                en: 'Article + ___ + noun: the blank is an adjective describing explanation.',
                zh: '冠詞＋空格＋名詞，這是形容詞的位置，用來修飾 explanation。',
              },
            },
            {
              text: 'Sales have increased ___ since the new product was introduced.',
              options: ['significant', 'significance', 'significantly', 'signify'],
              answer: 2,
              why: {
                en: 'The verb increased is already complete; only an adverb can be added to it.',
                zh: '動詞 increased 本身已經完整，後面只能再加副詞。',
              },
            },
            {
              text: 'Employee ___ is measured through an annual survey.',
              options: ['satisfy', 'satisfied', 'satisfaction', 'satisfactory'],
              answer: 2,
              why: {
                en: 'The blank is in the subject position, so it needs a noun. Employee satisfaction is a set phrase.',
                zh: '空格在主詞位置，需要名詞。employee satisfaction 是固定用語。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 2
    {
      id: 'pronouns',
      n: 2,
      en: 'Pronoun Case',
      zh: '代名詞格',
      blocks: [
        {
          t: 'lead',
          en: 'All four options are the same person. The question is what that person is doing in the sentence.',
          zh: '四個選項指的是同一個人。問題在於這個人在句中扮演什麼角色。',
        },
        {
          t: 'rule',
          en: 'Decide whether the pronoun is the subject, the object, a possessive, or reflexive. Then read the word immediately before the blank — it usually settles it on its own.',
          zh: '先判斷代名詞在句中是主詞、受詞、所有格，還是反身代名詞；接著看空格前面那個字，通常就能決定答案。',
        },
        {
          t: 'table',
          en: 'One person, five forms',
          zh: '同一個人，五種形式',
          head: [{ en: 'Function', zh: '功能' }, { en: 'Form', zh: '形式' }],
          rows: [
            ['subject', 'they'],
            ['object', 'them'],
            ['possessive adjective', 'their'],
            ['possessive pronoun', 'theirs'],
            ['reflexive', 'themselves'],
          ],
          rowsZh: [
            ['主詞', 'they'],
            ['受詞', 'them'],
            ['所有格形容詞', 'their'],
            ['所有格代名詞', 'theirs'],
            ['反身代名詞', 'themselves'],
          ],
        },
        {
          t: 'formula',
          n: 10,
          pattern: 'one / few / many of + object pronoun',
          en: 'When a pronoun follows the preposition of, it takes the object form.',
          zh: '介系詞 of 後面接代名詞時，要使用受格。',
          egs: [
            { en: 'Many of them attended the annual conference.', zh: '他們之中有許多人參加了年度會議。' },
            { en: 'Only a few of us were informed of the schedule change.', zh: '我們之中只有少數人被告知行程更動。' },
            { en: 'One of them will contact you tomorrow.', zh: '他們之中有一人明天會聯絡你。' },
          ],
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'Several employees submitted their reports, but only a few of them met the deadline.', zh: '幾位員工提交了報告，但只有少數人準時完成。' },
            { en: 'They will attend the training session next Monday.', zh: '他們將於下週一參加訓練課程。' },
            { en: 'All department heads must submit their budget proposals by Friday.', zh: '所有部門主管必須在星期五前提交預算提案。' },
            { en: 'The technicians completed the installation by themselves.', zh: '技術人員自行完成了安裝。' },
            { en: 'The blue conference room is ours, and the smaller one is theirs.', zh: '藍色會議室是我們的，較小的那間是他們的。' },
          ],
        },
        {
          t: 'chips',
          en: 'Structures that keep coming back',
          zh: '常考結構',
          items: [
            { en: 'many of them', zh: '他們之中許多人' },
            { en: 'some of us', zh: '我們之中有些人' },
            { en: 'each of you', zh: '你們每一個人' },
            { en: 'one of their employees', zh: '他們的員工之一' },
            { en: 'by themselves', zh: '他們自行、獨力' },
          ],
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: 'Several employees submitted their reports, but only a few of ___ met the deadline.',
              options: ['they', 'them', 'their', 'theirs'],
              answer: 1,
              why: {
                en: 'After the preposition of, a pronoun takes the object form.',
                zh: '介系詞 of 後面的代名詞要用受格。',
              },
            },
            {
              text: 'All department heads must submit ___ budget proposals by Friday.',
              options: ['they', 'them', 'their', 'themselves'],
              answer: 2,
              why: {
                en: 'A noun follows the blank, so it needs the possessive adjective.',
                zh: '空格後面是名詞，要用所有格形容詞。',
              },
            },
            {
              text: 'The technicians completed the installation by ___.',
              options: ['them', 'their', 'themselves', 'theirs'],
              answer: 2,
              why: {
                en: 'By oneself means without help, and always takes the reflexive form.',
                zh: 'by oneself 表示「自行、不靠他人」，固定用反身代名詞。',
              },
            },
            {
              text: 'The blue conference room is ours, and the smaller one is ___.',
              options: ['their', 'them', 'theirs', 'themselves'],
              answer: 2,
              why: {
                en: 'No noun follows, so the possessive pronoun theirs stands in for their room.',
                zh: '後面沒有名詞，要用所有格代名詞 theirs，代替 their room。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 3
    {
      id: 'relatives',
      n: 3,
      en: 'Relative Pronouns',
      zh: '關係代名詞',
      blocks: [
        {
          t: 'lead',
          en: 'A relative pronoun joins a noun to the clause that describes it. Two questions decide the answer: person or thing, and what job it does inside the clause.',
          zh: '關係代名詞把名詞和後面的形容詞子句連起來。兩個問題就能決定答案：指人還是指物，以及它在子句裡擔任什麼角色。',
        },
        {
          t: 'table',
          en: 'Which one, and why',
          zh: '關係詞與用法',
          head: [{ en: 'Relative', zh: '關係詞' }, { en: 'Use', zh: '用法' }],
          rows: [
            ['who', 'a person, as the subject'],
            ['whom', 'a person, as the object'],
            ['which', 'a thing'],
            ['that', 'a person or a thing'],
            ['whose', 'possessive'],
            ['what', 'the thing which — no noun may come before it'],
          ],
          rowsZh: [
            ['who', '指人，作主詞'],
            ['whom', '指人，作受詞'],
            ['which', '指物'],
            ['that', '指人或物'],
            ['whose', '所有格'],
            ['what', '表示「所……的事物」，前面不能有先行詞'],
          ],
        },
        {
          t: 'formula',
          n: 14,
          pattern: 'noun + that / which / who + clause',
          en: 'A relative pronoun modifies the noun in front of it.',
          zh: '關係代名詞用來修飾前面的名詞。',
          egs: [
            { en: 'The report that was submitted yesterday contains several errors.', zh: '昨天提交的報告包含數個錯誤。' },
            { en: 'The software which the company purchased is easy to use.', zh: '公司購買的軟體很容易使用。' },
            { en: 'The employees who completed the course will receive certificates.', zh: '完成課程的員工將獲得證書。' },
          ],
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'The employees who completed the course will receive certificates.', zh: '完成課程的員工將獲得證書。' },
            { en: 'The software that we purchased last month has already been updated.', zh: '我們上個月購買的軟體已經更新。' },
            { en: 'Ms. Patel is the consultant whom the company hired for the project.', zh: 'Patel 女士是公司為此專案聘請的顧問。' },
            { en: 'The client whose order was delayed received a full refund.', zh: '訂單延誤的客戶獲得了全額退款。' },
            { en: 'Please explain what caused the shipment delay.', zh: '請說明是什麼造成了出貨延誤。' },
          ],
        },
        {
          t: 'note',
          en: 'that and what are not interchangeable',
          zh: 'that 與 what 不能互換',
          bodyEn: 'What already contains its own noun — it means the thing which. So a noun may stand before that, but never before what.',
          bodyZh: 'what 本身已經包含先行詞，意思是「所……的事物」。因此 that 前面可以有名詞，what 前面不行。',
          good: 'the documents that we submitted　我們提交的文件',
          also: 'what we submitted　我們所提交的內容',
          bad: 'the documents what we submitted ✗',
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: 'The employees ___ completed the course will receive certificates.',
              options: ['who', 'which', 'whose', 'what'],
              answer: 0,
              why: {
                en: 'Employees are people, and the relative is the subject of completed.',
                zh: 'employees 指人，且關係詞在子句中作 completed 的主詞。',
              },
            },
            {
              text: 'The software ___ we purchased last month has already been updated.',
              options: ['who', 'that', 'whose', 'what'],
              answer: 1,
              why: {
                en: 'Software is a thing, so that or which. What is impossible after a noun.',
                zh: 'software 是物，用 that 或 which；名詞後面不能接 what。',
              },
            },
            {
              text: 'The client ___ order was delayed received a full refund.',
              options: ['who', 'whom', 'whose', 'which'],
              answer: 2,
              why: {
                en: 'The order belongs to the client, so the relative is possessive.',
                zh: '訂單是這位客戶的，所以要用所有格關係詞。',
              },
            },
            {
              text: 'Ms. Patel is the consultant ___ the company hired for the project.',
              options: ['who', 'whom', 'whose', 'what'],
              answer: 1,
              why: {
                en: 'The clause already has a subject, the company. The relative is the object of hired, so whom.',
                zh: '子句已經有主詞 the company，關係詞是 hired 的受詞，所以用 whom。',
              },
            },
            {
              text: 'Please explain ___ caused the shipment delay.',
              options: ['that', 'which', 'what', 'whose'],
              answer: 2,
              why: {
                en: 'There is no noun for the relative to modify, so what — the thing which — is the only option.',
                zh: '前面沒有先行詞可以修飾，只能用 what，意思是「什麼／所……的事物」。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 4
    {
      id: 'tenses',
      n: 4,
      en: 'Verb Tenses',
      zh: '動詞時態',
      blocks: [
        {
          t: 'lead',
          en: 'Tense questions are almost always solved by one word elsewhere in the sentence. Find the time clue first, then look at the options.',
          zh: '時態題幾乎都由句中另一個字決定。先找時間線索，再看選項。',
        },
        {
          t: 'table',
          en: 'The clue and what it asks for',
          zh: '常見時間線索',
          head: [{ en: 'Time clue', zh: '時間線索' }, { en: 'Tense', zh: '常見時態' }],
          rows: [
            ['yesterday, last week', 'past simple'],
            ['since, for the past…', 'present perfect'],
            ['by next month', 'future perfect'],
            ['currently, now', 'present continuous'],
            ['every month', 'present simple'],
            ['next week', 'future'],
          ],
          rowsZh: [
            ['yesterday, last week', '過去式'],
            ['since, for the past…', '現在完成式'],
            ['by next month', '未來完成式'],
            ['currently, now', '現在進行式'],
            ['every month', '現在簡單式'],
            ['next week', '未來式'],
          ],
        },
        {
          t: 'formula',
          n: 1,
          pattern: 'modal + V',
          en: 'A modal verb is always followed by the base form — no -s, no -ed, no to.',
          zh: '情態動詞後面接原形動詞。常見情態動詞：will、can、may、must、should、could。',
          egs: [
            { en: 'The training session will begin at 9:00 A.M.', zh: '訓練課程將於上午九點開始。' },
            { en: 'All visitors must wear an identification badge.', zh: '所有訪客都必須佩戴識別證。' },
          ],
        },
        {
          t: 'formula',
          n: 2,
          pattern: 'have / has + past participle',
          en: 'The present perfect: something happened in the past and still matters now.',
          zh: '現在完成式表示過去發生、與現在有關的動作。',
          egs: [
            { en: 'The company has received more than 200 applications.', zh: '公司已收到超過兩百份申請。' },
            { en: 'Several employees have completed the online course.', zh: '數名員工已完成線上課程。' },
          ],
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'The company opened its first overseas office last year.', zh: '公司去年開設了第一間海外辦公室。' },
            { en: 'Ms. Chen has worked in the accounting department since 2022.', zh: 'Chen 女士自 2022 年起一直在會計部門工作。' },
            { en: 'The maintenance team is inspecting the equipment now.', zh: '維修團隊目前正在檢查設備。' },
            { en: 'The supplier will deliver the replacement parts tomorrow.', zh: '供應商明天將運送替換零件。' },
            { en: 'By the end of this month, the company will have completed the renovation.', zh: '到本月底，公司將已完成整修。' },
            { en: 'For the past five years, the company has been expanding its online services.', zh: '過去五年來，公司一直在擴展線上服務。' },
          ],
        },
        {
          t: 'chips',
          en: 'High-frequency forms',
          zh: '高頻規則',
          items: [
            { en: 'will begin', zh: '將開始' },
            { en: 'can provide', zh: '能提供' },
            { en: 'must submit', zh: '必須提交' },
            { en: 'should contact', zh: '應該聯絡' },
            { en: 'has received', zh: '已收到' },
            { en: 'have completed', zh: '已完成' },
            { en: 'has decided', zh: '已決定' },
          ],
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: 'The company ___ its first overseas office last year.',
              options: ['opens', 'opened', 'has opened', 'will open'],
              answer: 1,
              why: {
                en: 'Last year is finished past time, which rules out the present perfect.',
                zh: 'last year 是已經結束的過去時間，因此不能用現在完成式。',
              },
            },
            {
              text: 'Ms. Chen ___ in the accounting department since 2022.',
              options: ['works', 'worked', 'has worked', 'will work'],
              answer: 2,
              why: {
                en: 'Since marks a starting point that runs up to now — present perfect.',
                zh: 'since 表示從某個時間點延續到現在，用現在完成式。',
              },
            },
            {
              text: 'The maintenance team ___ the equipment now.',
              options: ['inspects', 'is inspecting', 'inspected', 'will inspect'],
              answer: 1,
              why: {
                en: 'Now means in progress at this moment — present continuous.',
                zh: 'now 表示此刻正在進行，用現在進行式。',
              },
            },
            {
              text: 'By the end of this month, the company ___ the renovation.',
              options: ['completes', 'completed', 'will complete', 'will have completed'],
              answer: 3,
              why: {
                en: 'By + a future time asks for the future perfect: finished before that point.',
                zh: 'by ＋ 未來時間，表示在那之前就會完成，用未來完成式。',
              },
            },
            {
              text: 'All visitors must ___ an identification badge.',
              options: ['wear', 'wears', 'wearing', 'worn'],
              answer: 0,
              why: {
                en: 'A modal verb is followed by the base form, whatever the subject.',
                zh: '情態動詞後面一律接原形動詞，與主詞無關。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 5
    {
      id: 'passive',
      n: 5,
      en: 'Passive Voice',
      zh: '被動語態',
      blocks: [
        {
          t: 'lead',
          en: 'Ask one question: is the subject doing the action, or receiving it? Business English receives a great deal.',
          zh: '只問一個問題：主詞是動作的執行者，還是接受者？商用英文裡，接受者非常多。',
        },
        {
          t: 'rule',
          en: 'The passive is be + past participle, and be carries the tense. Reports are submitted, rooms are reserved, staff are assigned — the doer is often not worth naming.',
          zh: '被動語態的基本形式是 be + 過去分詞，時態由 be 動詞承擔。報告被提交、會議室被預訂、人員被指派——執行者往往不必說出來。',
        },
        {
          t: 'formula',
          n: 3,
          pattern: 'be + past participle',
          en: 'The passive voice: the subject receives the action.',
          zh: '這是被動語態，表示主詞接受動作。',
          egs: [
            { en: 'All expense reports are required by Friday.', zh: '所有費用報告都必須在星期五前提交。' },
            { en: 'The conference room has been reserved for the client meeting.', zh: '會議室已被預訂供客戶會議使用。' },
          ],
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'All applications must be submitted by Friday.', zh: '所有申請都必須在星期五前提交。' },
            { en: 'The conference room has been reserved for the afternoon meeting.', zh: '會議室已被預訂供下午會議使用。' },
            { en: 'New employees are encouraged to attend the orientation session.', zh: '公司鼓勵新進員工參加新生說明會。' },
            { en: 'The damaged products will be replaced at no additional cost.', zh: '損壞的產品將免費更換。' },
            { en: 'Mr. Lopez was assigned to lead the sales project.', zh: 'Lopez 先生被指派負責領導銷售專案。' },
          ],
        },
        {
          t: 'chips',
          en: 'Passive collocations the test loves',
          zh: '常見 TOEIC 被動搭配',
          items: [
            { en: 'be assigned to', zh: '被指派' },
            { en: 'be required to', zh: '被要求、必須' },
            { en: 'be encouraged to', zh: '受鼓勵' },
            { en: 'be scheduled to', zh: '排定於' },
            { en: 'be permitted to', zh: '獲准' },
            { en: 'be provided with', zh: '獲得提供' },
            { en: 'be admitted to', zh: '獲准進入' },
            { en: 'be located in', zh: '位於' },
            { en: 'be based on', zh: '以……為依據' },
          ],
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: 'All applications must ___ by Friday.',
              options: ['submit', 'be submitted', 'submitting', 'to submit'],
              answer: 1,
              why: {
                en: 'Applications do not submit anything; they are submitted. After a modal, the passive is be + past participle.',
                zh: '申請書不會自己提交，是被提交的。情態動詞後面的被動形式是 be ＋ 過去分詞。',
              },
            },
            {
              text: 'The conference room ___ for the afternoon meeting.',
              options: ['reserved', 'has reserved', 'has been reserved', 'is reserving'],
              answer: 2,
              why: {
                en: 'The room receives the action, and it is already done — present perfect passive.',
                zh: '會議室是被預訂的一方，而且動作已完成，用現在完成式的被動。',
              },
            },
            {
              text: 'Mr. Lopez ___ to lead the sales project.',
              options: ['assigned', 'was assigned', 'has assigned', 'assigning'],
              answer: 1,
              why: {
                en: 'Be assigned to is a fixed passive collocation — somebody else did the assigning.',
                zh: 'be assigned to 是固定的被動搭配——指派他的是別人。',
              },
            },
            {
              text: 'The damaged products ___ at no additional cost.',
              options: ['will replace', 'will be replaced', 'replacing', 'have replaced'],
              answer: 1,
              why: {
                en: 'The products are what gets replaced, so the future passive.',
                zh: '被更換的是產品本身，所以用未來式的被動。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 6
    {
      id: 'participles',
      n: 6,
      en: 'Participles',
      zh: '分詞與分詞形容詞',
      blocks: [
        {
          t: 'lead',
          en: 'The -ing form and the -ed form both describe nouns. Which one depends on whether the noun acts or is acted on.',
          zh: '-ing 與 -ed 都能修飾名詞。用哪一個，取決於這個名詞是主動還是被動。',
        },
        {
          t: 'rule',
          en: 'The present participle (-ing) is active, ongoing, or the thing that causes a feeling. The past participle (-ed) is passive, finished, or the person who has the feeling.',
          zh: '現在分詞 -ing 表示主動、進行中的動作，或「令人產生某種感受」；過去分詞 -ed 表示被動、已完成的動作，或「人的感受」。',
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'The employees attending the seminar must register in advance.', zh: '參加研討會的員工必須事先登記。' },
            { en: 'The report submitted yesterday contains several errors.', zh: '昨天提交的報告包含數個錯誤。' },
            { en: 'Customers were satisfied with the improved delivery service.', zh: '客戶對改善後的配送服務感到滿意。' },
            { en: 'The company introduced an innovative and exciting new product.', zh: '公司推出了一項創新且令人期待的新產品。' },
            { en: 'The revised schedule includes all confirmed appointments.', zh: '修訂後的行程表包含所有已確認的預約。' },
          ],
        },
        {
          t: 'contrast',
          en: 'Same root, opposite job',
          zh: '常見對比',
          hintEn: 'The thing causes the feeling; the person has it.',
          hintZh: '事物「令人」有感受，人「感到」有感受。',
          pairs: [
            { a: { en: 'an interesting presentation', zh: '一場有趣的簡報' }, b: { en: 'interested employees', zh: '感到有興趣的員工' } },
            { a: { en: 'rising costs', zh: '持續上升的成本' }, b: { en: 'revised guidelines', zh: '修訂後的準則' } },
            { a: { en: 'the employees attending the seminar', zh: '參加研討會的員工（主動）' }, b: { en: 'the report submitted yesterday', zh: '昨天被提交的報告（被動）' } },
          ],
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: 'The employees ___ the seminar must register in advance.',
              options: ['attend', 'attending', 'attended', 'to attend'],
              answer: 1,
              why: {
                en: 'The employees attend the seminar themselves, so the participle is active.',
                zh: '員工是主動參加研討會的一方，所以用現在分詞。',
              },
            },
            {
              text: 'The report ___ yesterday contains several errors.',
              options: ['submitting', 'submitted', 'submits', 'to submit'],
              answer: 1,
              why: {
                en: 'A report is submitted by someone, so the participle is passive.',
                zh: '報告是被人提交的，所以用過去分詞。',
              },
            },
            {
              text: 'Customers were ___ with the improved delivery service.',
              options: ['satisfy', 'satisfying', 'satisfied', 'satisfaction'],
              answer: 2,
              why: {
                en: 'People have the feeling, so -ed. A satisfying service would cause it.',
                zh: '人是「感到」滿意，用 -ed；satisfying service 才是「令人滿意的服務」。',
              },
            },
            {
              text: 'The company introduced an innovative and ___ new product.',
              options: ['excite', 'excited', 'exciting', 'excitement'],
              answer: 2,
              why: {
                en: 'The product causes the excitement, so -ing.',
                zh: '產品是「令人期待」的一方，用 -ing。',
              },
            },
            {
              text: 'The revised schedule includes all ___ appointments.',
              options: ['confirm', 'confirming', 'confirmed', 'confirms'],
              answer: 2,
              why: {
                en: 'The appointments have been confirmed by somebody — finished and passive.',
                zh: '預約是被確認的，動作已完成，用過去分詞。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 7
    {
      id: 'to-ing',
      n: 7,
      en: 'Infinitives and Gerunds',
      zh: '不定詞與動名詞',
      blocks: [
        {
          t: 'lead',
          en: 'To do or doing? The word in front of the blank decides, and there is a short list of words worth memorising.',
          zh: '要用 to V 還是 V-ing？由空格前面那個字決定，而該記的字並不多。',
        },
        {
          t: 'rule',
          en: 'The infinitive points forward: a purpose, a future action, or the object of certain verbs. The gerund names an activity, and is what you must use after a preposition.',
          zh: '不定詞 to + V 指向未來：表示目的、未來動作，或某些動詞的受詞。動名詞 V-ing 則把動作當成一項活動，而且介系詞後面一定要用它。',
        },
        {
          t: 'formula',
          n: 4,
          pattern: 'be + adjective + to V',
          en: 'Somebody is qualified, willing, able or ready to do something.',
          zh: '表示某人有資格、有意願、有能力或準備做某事。',
          egs: [
            { en: 'Full-time employees are eligible to receive paid vacation days.', zh: '全職員工有資格享有有薪休假。' },
            { en: 'The support team is ready to assist customers.', zh: '支援團隊已準備好協助客戶。' },
          ],
        },
        {
          t: 'formula',
          n: 5,
          pattern: 'decide / plan / agree + to V',
          en: 'Some verbs are always followed by an infinitive.',
          zh: '某些動詞後面固定接不定詞。',
          egs: [
            { en: 'Management has decided to postpone the product launch.', zh: '管理階層已決定延後產品上市。' },
            { en: 'The company plans to expand its operations overseas.', zh: '公司計畫拓展海外業務。' },
            { en: 'Mr. Harris agreed to lead the new project.', zh: 'Harris 先生同意負責新的專案。' },
          ],
        },
        {
          t: 'formula',
          n: 6,
          pattern: 'preposition + V-ing',
          en: 'A verb after a preposition must take the gerund. No exceptions.',
          zh: '介系詞後面若接動詞，必須使用動名詞。沒有例外。',
          egs: [
            { en: 'Employees can reduce costs by using digital documents.', zh: '員工可以透過使用電子文件降低成本。' },
            { en: 'Thank you for attending today’s workshop.', zh: '感謝您參加今天的工作坊。' },
            { en: 'The manager left without signing the contract.', zh: '經理未簽署合約便離開了。' },
          ],
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'The company plans to open three new branches next year.', zh: '公司計畫明年開設三家新分店。' },
            { en: 'Employees are required to complete the survey by Friday.', zh: '員工必須在星期五前完成問卷。' },
            { en: 'The manager avoided discussing confidential information in public.', zh: '經理避免在公開場合討論機密資訊。' },
            { en: 'Thank you for attending today’s training session.', zh: '感謝您參加今天的訓練課程。' },
            { en: 'The company reduced costs by using digital documents.', zh: '公司透過使用電子文件降低成本。' },
            { en: 'To improve customer service, the company hired additional staff.', zh: '為了改善客戶服務，公司增聘了員工。' },
          ],
        },
        {
          t: 'chips',
          en: 'Verb + to V',
          zh: '動詞 ＋ 不定詞',
          items: [
            { en: 'decide to stop', zh: '決定停止' },
            { en: 'plan to expand', zh: '計畫擴張' },
            { en: 'agree to write', zh: '同意撰寫' },
            { en: 'hope to provide', zh: '希望提供' },
            { en: 'need to complete', zh: '需要完成' },
          ],
        },
        {
          t: 'chips',
          en: 'Verb + V-ing',
          zh: '動詞 ＋ 動名詞',
          items: [
            { en: 'avoid delaying', zh: '避免延誤' },
            { en: 'consider changing', zh: '考慮更改' },
            { en: 'discontinue printing', zh: '停止列印' },
            { en: 'finish preparing', zh: '完成準備' },
            { en: 'suggest holding', zh: '建議舉行' },
          ],
        },
        {
          t: 'chips',
          en: 'Preposition + V-ing',
          zh: '介系詞 ＋ 動名詞',
          items: [
            { en: 'by submitting', zh: '藉由提交' },
            { en: 'for attending', zh: '因為出席' },
            { en: 'after completing', zh: '在完成之後' },
            { en: 'without paying', zh: '未付款' },
            { en: 'before leaving', zh: '在離開之前' },
          ],
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: 'The company plans ___ three new branches next year.',
              options: ['open', 'to open', 'opening', 'opened'],
              answer: 1,
              why: {
                en: 'Plan is one of the verbs that always takes an infinitive.',
                zh: 'plan 屬於固定接不定詞的動詞。',
              },
            },
            {
              text: 'The manager avoided ___ confidential information in public.',
              options: ['discuss', 'to discuss', 'discussing', 'discussed'],
              answer: 2,
              why: {
                en: 'Avoid takes a gerund. Compare: avoid delaying, consider changing, suggest holding.',
                zh: 'avoid 後面接動名詞。同類：avoid delaying、consider changing、suggest holding。',
              },
            },
            {
              text: 'Thank you for ___ today’s training session.',
              options: ['attend', 'to attend', 'attending', 'attended'],
              answer: 2,
              why: {
                en: 'For is a preposition, and a verb after a preposition is always -ing.',
                zh: 'for 是介系詞，介系詞後面的動詞一律用 -ing。',
              },
            },
            {
              text: '___ customer service, the company hired additional staff.',
              options: ['Improve', 'To improve', 'Improving', 'Improved'],
              answer: 1,
              why: {
                en: 'The clause gives the purpose of the hiring, and purpose is expressed with an infinitive.',
                zh: '這個部分說明增聘的目的，表示目的要用不定詞。',
              },
            },
            {
              text: 'Full-time employees are eligible ___ paid vacation days.',
              options: ['receive', 'to receive', 'receiving', 'received'],
              answer: 1,
              why: {
                en: 'Be + adjective + to V. Eligible, ready, willing and able all behave this way.',
                zh: 'be ＋ 形容詞 ＋ to V。eligible、ready、willing、able 都是這個結構。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 8
    {
      id: 'conjunctions',
      n: 8,
      en: 'Conjunctions',
      zh: '連接詞',
      blocks: [
        {
          t: 'lead',
          en: 'All four options fit the grammar. Only one fits the logic — which is why Part 6 asks these more often than Part 5.',
          zh: '四個選項在文法上都通，只有一個在邏輯上通。這也是 Part 6 比 Part 5 更愛考的原因。',
        },
        {
          t: 'rule',
          en: 'A conjunction joins two clauses, each with its own subject and verb. Read both halves, decide the relationship between them, and the answer follows.',
          zh: '連接詞連接兩個各有主詞與動詞的子句。把兩邊都讀完，判斷兩者的關係，答案自然浮現。',
        },
        {
          t: 'table',
          en: 'The ones that appear',
          zh: '常考連接詞',
          head: [{ en: 'Conjunction', zh: '連接詞' }, { en: 'Meaning', zh: '意思' }],
          rows: [
            ['because', 'the reason'],
            ['although', 'in spite of that'],
            ['unless', 'except if'],
            ['once', 'as soon as'],
            ['before', 'earlier than'],
            ['after', 'later than'],
            ['while', 'at the same time; whereas'],
            ['if', 'on condition that'],
            ['so that', 'in order that'],
          ],
          rowsZh: [
            ['because', '因為'],
            ['although', '雖然'],
            ['unless', '除非'],
            ['once', '一旦'],
            ['before', '在……之前'],
            ['after', '在……之後'],
            ['while', '當……時；然而'],
            ['if', '如果'],
            ['so that', '為了使……'],
          ],
        },
        {
          t: 'formula',
          n: 12,
          pattern: 'once + subject + verb',
          en: 'As a conjunction, once means as soon as.',
          zh: 'once 作連接詞時，表示「一旦」。',
          egs: [
            { en: 'Production will begin once the equipment has been installed.', zh: '一旦設備安裝完成，生產就會開始。' },
            { en: 'Your application will be reviewed once all documents are received.', zh: '一旦收到所有文件，您的申請就會被審核。' },
          ],
        },
        {
          t: 'formula',
          n: 13,
          pattern: 'unless + subject + verb',
          en: 'Unless means except if — it already contains the negative.',
          zh: 'unless 表示「除非」，相當於 if...not，本身已含否定。',
          egs: [
            { en: 'The order will not be shipped unless payment is received.', zh: '除非收到款項，否則訂單不會出貨。' },
            { en: 'Employees cannot enter the laboratory unless they have permission.', zh: '除非獲得許可，否則員工不得進入實驗室。' },
          ],
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'The meeting was postponed because the director was unavailable.', zh: '會議延期是因為主管無法出席。' },
            { en: 'Although the office is small, it can accommodate twenty employees.', zh: '雖然辦公室不大，但可容納二十名員工。' },
            { en: 'Applications will not be reviewed unless all required documents are included.', zh: '除非附上所有必要文件，否則申請不會被審核。' },
            { en: 'Production will begin once the equipment has been installed.', zh: '一旦設備安裝完成，生產就會開始。' },
            { en: 'Please submit your expense report before you leave for vacation.', zh: '請在休假前提交費用報告。' },
            { en: 'The company added more staff so that orders could be processed faster.', zh: '公司增聘人力，以便更快處理訂單。' },
          ],
        },
        {
          t: 'note',
          en: 'unless already means if … not',
          zh: 'unless 本身就是 if…not',
          bodyEn: 'Do not add a second negative to the unless clause. These two sentences say exactly the same thing.',
          bodyZh: '不要在 unless 子句裡再加一個否定。下面兩句意思完全相同。',
          good: 'The shipment will not leave unless payment is received.',
          also: 'The shipment will not leave if payment is not received.',
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: 'The meeting was postponed ___ the director was unavailable.',
              options: ['because', 'although', 'unless', 'so that'],
              answer: 0,
              why: {
                en: 'The second clause is the reason for the first.',
                zh: '後半句是前半句的原因。',
              },
            },
            {
              text: '___ the office is small, it can accommodate twenty employees.',
              options: ['Because', 'Although', 'Unless', 'Once'],
              answer: 1,
              why: {
                en: 'Small but roomy — the two halves contrast, so although.',
                zh: '小卻能容納二十人，兩邊是對比關係，用 although。',
              },
            },
            {
              text: 'Applications will not be reviewed ___ all required documents are included.',
              options: ['because', 'although', 'unless', 'so that'],
              answer: 2,
              why: {
                en: 'The review happens only on that condition — except if the documents are there.',
                zh: '只有在附上文件的條件下才會審核，用 unless。',
              },
            },
            {
              text: 'Production will begin ___ the equipment has been installed.',
              options: ['once', 'unless', 'although', 'so that'],
              answer: 0,
              why: {
                en: 'Installation comes first and production follows — once, meaning as soon as.',
                zh: '先安裝，接著才生產，用 once（一旦）。',
              },
            },
            {
              text: 'The company added more staff ___ orders could be processed faster.',
              options: ['because', 'so that', 'unless', 'although'],
              answer: 1,
              why: {
                en: 'Faster processing is the purpose of hiring, not the reason it already happened.',
                zh: '加快處理是增聘的「目的」，不是既成的原因，用 so that。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 9
    {
      id: 'correlatives',
      n: 9,
      en: 'Coordinating and Correlative Conjunctions',
      zh: '對等連接與相關連接詞',
      blocks: [
        {
          t: 'lead',
          en: 'These come in pairs, and the pairs are fixed. Half the question is answered by the word already printed in the sentence.',
          zh: '這些連接詞成對出現，而且配對固定。句中已經印出的那一半，就決定了另一半。',
        },
        {
          t: 'chips',
          en: 'Coordinating conjunctions',
          zh: '常見對等連接詞',
          items: [
            { en: 'and', zh: '而且' },
            { en: 'but', zh: '但是' },
            { en: 'or', zh: '或者' },
            { en: 'so', zh: '所以' },
            { en: 'yet', zh: '然而' },
          ],
        },
        {
          t: 'chips',
          en: 'Correlative conjunctions — learn them as pairs',
          zh: '常見相關連接詞——成對記憶',
          items: [
            { en: 'both A and B', zh: 'A 和 B 兩者都' },
            { en: 'either A or B', zh: '不是 A 就是 B' },
            { en: 'neither A nor B', zh: 'A 和 B 都不' },
            { en: 'not only A but also B', zh: '不僅 A，而且 B' },
            { en: 'whether A or B', zh: '無論 A 還是 B' },
          ],
        },
        {
          t: 'formula',
          n: 11,
          pattern: 'not only A but also B',
          en: 'A and B must be parallel — the same kind of thing in the same form.',
          zh: '表示「不僅 A，而且 B」。A 與 B 必須保持平行。',
          egs: [
            { en: 'The new system will not only reduce costs but also improve efficiency.', zh: '新系統不僅能降低成本，也能提升效率。' },
            { en: 'The position requires not only technical knowledge but also strong communication skills.', zh: '這個職位不僅需要技術知識，也需要良好的溝通能力。' },
          ],
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'The new software is efficient and easy to use.', zh: '新軟體效率高且容易使用。' },
            { en: 'The shipment was delayed, but the customer was informed immediately.', zh: '貨物延誤了，但客戶立即獲得通知。' },
            { en: 'Employees may submit the form online or deliver it in person.', zh: '員工可線上提交表格，或親自遞交。' },
            { en: 'The new policy will not only reduce costs but also improve efficiency.', zh: '新政策不僅能降低成本，也能提升效率。' },
            { en: 'Both the sales manager and the finance director approved the proposal.', zh: '銷售經理和財務主管都核准了提案。' },
            { en: 'Applicants must provide either a passport or another form of identification.', zh: '申請人必須提供護照或其他身分證明。' },
          ],
        },
        {
          t: 'note',
          en: 'Parallel structure',
          zh: '平行結構',
          bodyEn: 'Whatever is joined must match in form. Three gerunds, or three nouns — not a mixture.',
          bodyZh: '被連接的成分形式必須一致：三個動名詞，或三個名詞，不能混用。',
          good: 'The position requires preparing reports, meeting clients, and managing projects.',
          bad: 'The position requires preparing reports, to meet clients, and project management. ✗',
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: 'The new policy will not only reduce costs ___ improve efficiency.',
              options: ['and also', 'but also', 'or also', 'but too'],
              answer: 1,
              why: {
                en: 'Not only is fixed to but also. The other three are not English pairs.',
                zh: 'not only 固定搭配 but also，其餘三個都不是既有的配對。',
              },
            },
            {
              text: '___ the sales manager and the finance director approved the proposal.',
              options: ['Either', 'Neither', 'Both', 'Whether'],
              answer: 2,
              why: {
                en: 'And is already printed, and the verb approved is affirmative — both … and.',
                zh: '句中已有 and，而且動詞是肯定的，所以是 both … and。',
              },
            },
            {
              text: 'Applicants must provide ___ a passport or another form of identification.',
              options: ['both', 'either', 'neither', 'whether'],
              answer: 1,
              why: {
                en: 'Or is printed, so the partner is either. Nor would pair with neither.',
                zh: '句中是 or，所以配 either；若是 nor 才配 neither。',
              },
            },
            {
              text: 'The position requires preparing reports, meeting clients, and ___ projects.',
              options: ['manage', 'to manage', 'managing', 'management'],
              answer: 2,
              why: {
                en: 'Two gerunds are already in the list, so the third item must be a gerund too.',
                zh: '前面已有兩個動名詞，第三項也必須是動名詞。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 10
    {
      id: 'prepositions',
      n: 10,
      en: 'Prepositions',
      zh: '介系詞',
      blocks: [
        {
          t: 'lead',
          en: 'Preposition questions are collocation questions. They are not solved by translating — they are solved by having seen the phrase before.',
          zh: '介系詞題目考的是固定搭配，而不是單純翻譯。解題靠的是「看過這個說法」。',
        },
        {
          t: 'rule',
          en: 'Learn these as whole phrases, with the preposition attached. According to, in response to, on behalf of — the preposition is part of the word, not a choice.',
          zh: '把它們當成完整片語背，連介系詞一起記。according to、in response to、on behalf of——介系詞是片語的一部分，不是可以選的。',
        },
        {
          t: 'formula',
          n: 15,
          pattern: 'transition into + noun',
          en: 'To transition into means to move into a new role or state.',
          zh: 'transition into 表示「轉換進入……」。',
          egs: [
            { en: 'Ms. Lee is preparing to transition into a management position.', zh: 'Lee 女士正在準備轉任管理職位。' },
            { en: 'The company will gradually transition into a digital operating model.', zh: '公司將逐步轉型為數位營運模式。' },
            { en: 'New supervisors may need support when transitioning into their new roles.', zh: '新任主管在轉換到新角色時可能需要協助。' },
          ],
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'According to the report, sales increased by twelve percent.', zh: '根據報告，銷售額增加了百分之十二。' },
            { en: 'The new policy was introduced in response to customer feedback.', zh: '新政策是為回應客戶意見而推出的。' },
            { en: 'The project was completed ahead of schedule.', zh: '專案提前完成。' },
            { en: 'Ms. Wong spoke on behalf of the entire department.', zh: 'Wong 女士代表整個部門發言。' },
            { en: 'The renovation is currently in progress.', zh: '整修工程目前正在進行。' },
            { en: 'The final decision was made based on the survey results.', zh: '最終決定是根據調查結果做出的。' },
            { en: 'The company is fully in compliance with local safety regulations.', zh: '公司完全遵守當地安全規定。' },
          ],
        },
        {
          t: 'table',
          en: 'High-frequency fixed phrases',
          zh: '高頻固定搭配',
          head: [{ en: 'Phrase', zh: '搭配' }, { en: 'Meaning', zh: '中文' }],
          // The meaning is the answer, so it stays covered until the row is
          // tapped — the table doubles as a self-test.
          zhCol: 1,
          rows: [
            ['according to', '根據'],
            ['in compliance with', '遵照'],
            ['based on', '以……為基礎'],
            ['in response to', '回應'],
            ['in accordance with', '依照'],
            ['in addition to', '除了……之外'],
            ['ahead of schedule', '提前'],
            ['on behalf of', '代表'],
            ['in charge of', '負責'],
            ['with regard to', '關於'],
            ['in progress', '進行中'],
            ['as confirmation', '作為確認'],
          ],
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: '___ the report, sales increased by twelve percent.',
              options: ['According to', 'Because of', 'In spite of', 'Instead of'],
              answer: 0,
              why: {
                en: 'According to introduces the source of information.',
                zh: 'according to 用來引出資訊來源。',
              },
            },
            {
              text: 'The new policy was introduced in ___ to customer feedback.',
              options: ['reply', 'response', 'answer', 'return'],
              answer: 1,
              why: {
                en: 'In response to is the fixed phrase. In reply to exists but is for letters, not policy.',
                zh: 'in response to 是固定片語；in reply to 雖然存在，但用於書信往來。',
              },
            },
            {
              text: 'The project was completed ahead ___ schedule.',
              options: ['to', 'of', 'for', 'with'],
              answer: 1,
              why: {
                en: 'Ahead of schedule is fixed — no other preposition is possible.',
                zh: 'ahead of schedule 是固定用法，不能換介系詞。',
              },
            },
            {
              text: 'Ms. Wong spoke on ___ of the entire department.',
              options: ['behalf', 'account', 'charge', 'top'],
              answer: 0,
              why: {
                en: 'On behalf of means representing. In charge of would mean managing it.',
                zh: 'on behalf of 是「代表」；in charge of 則是「負責管理」。',
              },
            },
            {
              text: 'The final decision was made ___ on the survey results.',
              options: ['base', 'based', 'basing', 'basis'],
              answer: 1,
              why: {
                en: 'Based on is fixed. On the basis of also exists, but needs the.',
                zh: 'based on 是固定片語；on the basis of 也可以，但必須加 the。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 11
    {
      id: 'transitions',
      n: 11,
      en: 'Transitional Adverbs and Text Logic',
      zh: '副詞連接語與篇章邏輯',
      part6: true,
      blocks: [
        {
          t: 'lead',
          en: 'A Part 6 speciality. The sentence with the blank is usually correct on its own — the answer is decided by the sentence before it.',
          zh: '這是 Part 6 的重要考點。有空格的那一句本身通常沒問題，答案由「前一句」決定。',
        },
        {
          t: 'rule',
          en: 'Read the sentence before the blank, then the one after. Name the relationship between them — cause, contrast, addition, example, replacement — and choose the adverb for it.',
          zh: '先讀空格前一句，再讀後一句，替兩句的關係命名——因果、轉折、補充、舉例、替代——再挑對應的連接語。',
        },
        {
          t: 'table',
          en: 'The relationship and its words',
          zh: '邏輯與常見詞語',
          head: [{ en: 'Relationship', zh: '邏輯' }, { en: 'Words', zh: '常見詞語' }],
          rows: [
            ['cause and effect', 'therefore, thus, as a result'],
            ['contrast', 'however, nevertheless'],
            ['addition', 'moreover, in addition'],
            ['replacement', 'instead'],
            ['example', 'for example'],
            ['sequence', 'then, afterward, meanwhile'],
            ['similarity', 'similarly'],
            ['comparison', 'by contrast'],
          ],
          rowsZh: [
            ['因果', 'therefore, thus, as a result'],
            ['轉折', 'however, nevertheless'],
            ['補充', 'moreover, in addition'],
            ['替代', 'instead'],
            ['舉例', 'for example'],
            ['時間順序', 'then, afterward, meanwhile'],
            ['相似', 'similarly'],
            ['對比', 'by contrast'],
          ],
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'The deadline has been moved forward. Therefore, all reports must be submitted by Wednesday.', zh: '截止日期提前了，因此所有報告必須在星期三前提交。' },
            { en: 'The product is inexpensive. However, it is not currently available overseas.', zh: '該產品價格不高，但目前無法在海外購買。' },
            { en: 'Employees should not use the front entrance. Instead, they should enter through the side door.', zh: '員工不應使用前門，而應改從側門進入。' },
            { en: 'Several safety measures have been introduced. For example, all visitors must now wear identification badges.', zh: '公司已採取數項安全措施，例如所有訪客現在都必須佩戴識別證。' },
            { en: 'The company will expand its online services. In addition, it will open a new customer support center.', zh: '公司將擴大線上服務，此外也將開設新的客服中心。' },
            { en: 'Sales increased in the northern region. By contrast, sales declined slightly in the south.', zh: '北部地區的銷售成長；相較之下，南部銷售略為下降。' },
          ],
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: 'The deadline has been moved forward. ___, all reports must be submitted by Wednesday.',
              options: ['However', 'Therefore', 'Instead', 'Similarly'],
              answer: 1,
              why: {
                en: 'The earlier deadline is the cause; the Wednesday rule is its result.',
                zh: '截止日提前是原因，星期三交件是結果。',
              },
            },
            {
              text: 'The product is inexpensive. ___, it is not currently available overseas.',
              options: ['Therefore', 'However', 'For example', 'In addition'],
              answer: 1,
              why: {
                en: 'Good news then bad news — the two facts pull against each other.',
                zh: '前句是優點，後句是缺點，兩者相互抵觸，用轉折。',
              },
            },
            {
              text: 'Employees should not use the front entrance. ___, they should enter through the side door.',
              options: ['Therefore', 'Instead', 'Moreover', 'For example'],
              answer: 1,
              why: {
                en: 'The side door replaces the front entrance, so instead.',
                zh: '側門是用來取代前門的，所以用 instead。',
              },
            },
            {
              text: 'Sales increased in the northern region. ___, sales declined slightly in the south.',
              options: ['Similarly', 'By contrast', 'Therefore', 'In addition'],
              answer: 1,
              why: {
                en: 'Up in the north, down in the south — two regions compared, not two similar facts.',
                zh: '北升南降，是兩地的對比，不是相似。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 12
    {
      id: 'insertion',
      n: 12,
      en: 'Sentence Insertion',
      zh: '句子插入',
      part6: true,
      blocks: [
        {
          t: 'lead',
          en: 'One blank in every Part 6 text is a whole missing sentence. All four options are correct English — only one belongs in this text.',
          zh: 'Part 6 每篇短文都有一格是「整句插入」。四個選項的英文都正確，但只有一句屬於這篇文章。',
        },
        {
          t: 'rule',
          en: 'This item tests more than grammar: whether the topic stays the same, whether the pronouns have something to refer back to, whether the time order works, and whether the tone stays formal.',
          zh: '這一題考的不只是文法，還包括主題是否連貫、代名詞有沒有指涉對象、時間順序是否合理，以及語氣是否維持正式商務。',
        },
        {
          t: 'steps',
          en: 'How to work through it',
          zh: '解題步驟',
          items: [
            { en: 'Read the sentence before the blank.', zh: '先讀空格前一句。' },
            { en: 'Read the sentence after it.', zh: '再讀空格後一句。' },
            { en: 'Look for pronouns, transitional words and repeated keywords.', zh: '找代名詞、連接語與重複的關鍵字。' },
            { en: 'Decide what is needed: a cause, a result, an example, a contrast or an addition.', zh: '判斷需要的是原因、結果、例子、轉折或補充。' },
            { en: 'Eliminate anything that changes the subject.', zh: '排除主題不一致的句子。' },
          ],
        },
        {
          t: 'q6',
          en: 'Passage 1 — a staff announcement',
          zh: '短文一——人事公告',
          kind: { en: 'To: All Staff · Subject: Promotion', zh: '收件者：全體員工．主旨：升遷公告' },
          body: [
            'We are pleased to announce that Ms. Elena Torres ',
            {
              options: ['has appointed', 'has been appointed', 'is appointing', 'appoints'],
              answer: 1,
              why: {
                en: 'Ms. Torres did not appoint anyone — the company appointed her, so the passive.',
                zh: 'Torres 女士不是任命者，而是被任命的一方，所以用被動。',
              },
            },
            ' Director of Operations, effective 1 September.\n\nMs. Torres has successfully ',
            {
              options: ['managed', 'manages', 'managing', 'to manage'],
              answer: 0,
              why: {
                en: 'Has + past participle. For five years up to now is the present perfect.',
                zh: 'has ＋ 過去分詞；「五年來到現在」用現在完成式。',
              },
            },
            ' the regional office for five years. She has also trained several new supervisors. ',
            {
              long: true,
              options: [
                'Her team has consistently exceeded its annual sales targets.',
                'The regional office will close at the end of the month.',
                'Applicants should send a résumé to the human resources department.',
                'We are still looking for a suitable candidate for the role.',
              ],
              answer: 0,
              why: {
                en: 'The sentences on either side both praise her record, and Her team refers back to the office she manages. The other three change the subject or contradict the announcement.',
                zh: '前後兩句都在描述她的表現，Her team 也指回她管理的辦公室。其他三句不是換了主題，就是與公告內容矛盾。',
              },
            },
            '\n\nWe are confident that she ',
            {
              options: ['will perform', 'performs', 'performed', 'had performed'],
              answer: 0,
              why: {
                en: 'The new position starts in September, so the sentence looks forward.',
                zh: '新職務九月才開始，這句談的是未來。',
              },
            },
            ' well in her new position. Please join us in congratulating her on the promotion.',
          ],
        },
        {
          t: 'q6',
          en: 'Passage 2 — a budget memo',
          zh: '短文二——預算通知',
          kind: { en: 'Memo · To: Department Heads', zh: '內部通知．收件者：各部門主管' },
          body: [
            'The board proposal must ',
            {
              options: ['submit', 'be submitted', 'submitting', 'have submitted'],
              answer: 1,
              why: {
                en: 'The proposal is submitted by the departments, not the other way round.',
                zh: '提案是被各部門提交的，不是提案去提交別人。',
              },
            },
            ' by March 10. ',
            {
              options: ['Therefore', 'However', 'For example', 'Instead'],
              answer: 0,
              why: {
                en: 'The March deadline is the cause; the February deadline is what follows from it.',
                zh: '三月的期限是原因，二月底完成估算是隨之而來的結果。',
              },
            },
            ', all departments should complete their budget estimates by the end of February. Late submissions will not be considered.\n\nIf you require ',
            {
              options: ['assistance', 'assist', 'assisted', 'assistant'],
              answer: 0,
              why: {
                en: 'Require takes a noun, and the noun for help is assistance. An assistant is a person.',
                zh: 'require 後面接名詞，「協助」的名詞是 assistance；assistant 指的是人。',
              },
            },
            ' with the new spreadsheet, please contact the finance team. ',
            {
              long: true,
              options: [
                'They will be available by phone until 6:00 P.M. each day.',
                'The March 10 deadline has been cancelled.',
                'Thank you for attending last year’s orientation session.',
                'All employees must wear an identification badge in the building.',
              ],
              answer: 0,
              why: {
                en: 'They refers back to the finance team, and the sentence adds the practical detail a reader would want next. The second option contradicts the memo; the others belong to a different notice.',
                zh: 'They 指前一句的 finance team，並補上讀者接著會想知道的聯絡時間。第二個選項與通知內容矛盾，其餘兩句屬於別的公告。',
              },
            },
          ],
        },
        {
          t: 'q6',
          en: 'Passage 3 — a building notice',
          zh: '短文三——大樓公告',
          kind: { en: 'Notice · Lobby renovation', zh: '公告．大廳整修' },
          body: [
            'Renovation of the lobby will begin on Monday and is expected ',
            {
              options: ['to last', 'lasting', 'last', 'lasted'],
              answer: 0,
              why: {
                en: 'Be expected to + base form is a fixed passive pattern.',
                zh: 'be expected to ＋ 原形動詞，是固定的被動句型。',
              },
            },
            ' approximately three weeks.\n\nThe contractor has agreed to minimize disruption during the renovation. ',
            {
              options: ['However', 'For example', 'Therefore', 'By contrast'],
              answer: 1,
              why: {
                en: 'Limiting noisy work to the afternoon is one instance of minimizing disruption.',
                zh: '把噪音工程限制在下午，正是「減少干擾」的一個例子。',
              },
            },
            ', noisy work will be limited to the afternoon. ',
            {
              long: true,
              options: [
                'The main entrance will remain open throughout the project.',
                'The lobby was last renovated more than five years ago.',
                'Please submit your expense report before you leave for vacation.',
                'The contractor for the project has not yet been selected.',
              ],
              answer: 0,
              why: {
                en: 'It continues the list of reassurances about disruption. The fourth option contradicts a contractor who has already agreed to terms.',
                zh: '這句延續「減少干擾」的說明。第四個選項與「承包商已經同意」互相矛盾。',
              },
            },
            '\n\nWe appreciate your patience during this ',
            {
              options: ['period', 'periodic', 'periodically', 'periods'],
              answer: 0,
              why: {
                en: 'This is followed by a singular noun.',
                zh: 'this 後面接單數名詞。',
              },
            },
            '.',
          ],
        },
      ],
    },

    // ================================================================ 13
    {
      id: 'agreement',
      n: 13,
      en: 'Subject–Verb Agreement',
      zh: '主詞與動詞一致',
      blocks: [
        {
          t: 'lead',
          en: 'The trick is always the same: a long phrase sits between the subject and the verb, and you agree with the wrong word.',
          zh: '陷阱永遠一樣：主詞和動詞之間插入一段很長的修飾語，你就配錯了字。',
        },
        {
          t: 'rule',
          en: 'Find the real subject — the noun the verb belongs to — and ignore everything between them. Whether it is singular or plural decides the verb.',
          zh: '找出真正的主詞——動詞所屬的那個名詞——並忽略中間的所有修飾語。主詞是單數還是複數，決定動詞形式。',
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'The new manager plans to reorganize the department.', zh: '新任經理計畫重組部門。' },
            { en: 'The new managers plan to reorganize their departments.', zh: '新任經理們計畫重組各自的部門。' },
            { en: 'Each of the applicants is required to provide two references.', zh: '每位申請人都必須提供兩位推薦人。' },
            { en: 'The number of online orders has increased.', zh: '線上訂單的數量已增加。' },
            { en: 'A number of customers have requested refunds.', zh: '許多客戶已要求退款。' },
          ],
        },
        {
          t: 'note',
          en: 'The four traps',
          zh: '高頻陷阱',
          bodyEn: 'each, every and everyone take a singular verb. The number of takes a singular verb; a number of takes a plural one. With either A or B, the verb agrees with whichever subject is nearer.',
          bodyZh: 'each／every／everyone 接單數動詞。the number of 接單數動詞，a number of 接複數動詞。either A or B 的動詞通常配合較接近的那個主詞。',
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: 'Each of the applicants ___ required to provide two references.',
              options: ['is', 'are', 'were', 'have been'],
              answer: 0,
              why: {
                en: 'The subject is each, not applicants. Each is always singular.',
                zh: '主詞是 each，不是 applicants。each 一律視為單數。',
              },
            },
            {
              text: 'The number of online orders ___ increased.',
              options: ['have', 'has', 'are', 'were'],
              answer: 1,
              why: {
                en: 'The number is one figure, so singular — however many orders there are.',
                zh: 'the number 指的是「數量」這一個東西，所以是單數，無論訂單有幾筆。',
              },
            },
            {
              text: 'A number of customers ___ requested refunds.',
              options: ['has', 'have', 'is', 'was'],
              answer: 1,
              why: {
                en: 'A number of means many, so the verb follows the plural customers.',
                zh: 'a number of 意思是「許多」，動詞跟著複數的 customers。',
              },
            },
            {
              text: 'The new managers ___ to reorganize their departments.',
              options: ['plans', 'plan', 'is planning', 'has planned'],
              answer: 1,
              why: {
                en: 'Managers is plural, so the verb takes no -s.',
                zh: 'managers 是複數，動詞不加 -s。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 14
    {
      id: 'comparatives',
      n: 14,
      en: 'Comparatives and Superlatives',
      zh: '比較級與最高級',
      blocks: [
        {
          t: 'lead',
          en: 'Look for than, the, or as. Each of the three points to a different form, and one of them is nearly always printed.',
          zh: '找 than、the 或 as。這三個字各自指向一種形式，而且句中幾乎一定會出現其中一個。',
        },
        {
          t: 'chips',
          en: 'The four structures',
          zh: '常見結構',
          items: [
            { en: 'comparative + than', zh: '比較級 ＋ than' },
            { en: 'the + superlative', zh: 'the ＋ 最高級' },
            { en: 'as + adjective + as', zh: 'as ＋ 形容詞 ＋ as' },
            { en: 'much / far / significantly + comparative', zh: 'much / far / significantly ＋ 比較級' },
          ],
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'This model is more efficient than the previous one.', zh: '這個型號比前一代更有效率。' },
            { en: 'The downtown branch is the company’s busiest location.', zh: '市中心分店是公司最繁忙的據點。' },
            { en: 'Delivery was completed earlier than expected.', zh: '配送比預期更早完成。' },
            { en: 'The new system is as reliable as the old one.', zh: '新系統和舊系統一樣可靠。' },
            { en: 'Customer satisfaction is significantly higher this year.', zh: '今年的客戶滿意度明顯更高。' },
          ],
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: 'This model is ___ than the previous one.',
              options: ['efficient', 'more efficient', 'most efficient', 'as efficient'],
              answer: 1,
              why: {
                en: 'Than requires a comparative.',
                zh: '句中有 than，必須用比較級。',
              },
            },
            {
              text: 'The downtown branch is the company’s ___ location.',
              options: ['busy', 'busier', 'busiest', 'most busy'],
              answer: 2,
              why: {
                en: 'The company’s works like the, and short adjectives take -est, not most.',
                zh: 'the company’s 相當於 the；短形容詞用 -est，不用 most。',
              },
            },
            {
              text: 'The new system is as ___ as the old one.',
              options: ['reliable', 'more reliable', 'reliably', 'most reliable'],
              answer: 0,
              why: {
                en: 'Between as and as, the adjective stays in its plain form.',
                zh: '夾在兩個 as 之間的形容詞維持原級。',
              },
            },
            {
              text: 'Customer satisfaction is ___ higher this year.',
              options: ['very', 'significantly', 'more', 'most'],
              answer: 1,
              why: {
                en: 'Very cannot modify a comparative. Much, far and significantly can.',
                zh: 'very 不能修飾比較級；much、far、significantly 才可以。',
              },
            },
            {
              text: 'Delivery was completed ___ than expected.',
              options: ['early', 'earlier', 'earliest', 'as early'],
              answer: 1,
              why: {
                en: 'Than again — and early becomes earlier, not more early.',
                zh: '同樣有 than；early 的比較級是 earlier，不是 more early。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 15
    {
      id: 'conditionals',
      n: 15,
      en: 'Conditionals and Subjunctive Structures',
      zh: '假設語氣與條件句',
      blocks: [
        {
          t: 'lead',
          en: 'Fewer questions than the other topics, but reliably worth a point if you know the two patterns and the one odd rule.',
          zh: '題數比其他主題少，但只要記住兩個句型和一條特殊規則，就是穩穩的分數。',
        },
        {
          t: 'formula',
          pattern: 'If + present, will + V',
          en: 'A real condition: this may well happen.',
          zh: '真實條件句：這件事很可能發生。',
          egs: [
            { en: 'If the payment is received today, the order will be shipped tomorrow.', zh: '如果今天收到款項，訂單明天就會出貨。' },
          ],
        },
        {
          t: 'formula',
          pattern: 'If + had + p.p., would have + p.p.',
          en: 'Contrary to past fact: it did not happen, and this is what would have followed.',
          zh: '與過去事實相反：事情並沒有發生，這是「本來會怎樣」。',
          egs: [
            { en: 'If the company had received more funding, it would have expanded sooner.', zh: '如果公司當時獲得更多資金，就會更早擴張。' },
          ],
        },
        {
          t: 'egs',
          en: 'TOEIC-style example sentences',
          zh: '典型例句',
          items: [
            { en: 'The event would not have succeeded if local businesses had not provided financial support.', zh: '若當地企業沒有提供財務支援，活動就不會成功。' },
            { en: 'If you require assistance, please contact the support desk.', zh: '如需協助，請聯絡支援櫃台。' },
            { en: 'The committee recommended that the policy be revised.', zh: '委員會建議修訂該政策。' },
            { en: 'The manager insisted that all employees attend the meeting.', zh: '經理堅持所有員工都必須參加會議。' },
          ],
        },
        {
          t: 'note',
          en: 'The bare verb after recommend, insist, require, suggest',
          zh: 'recommend、insist、require、suggest 之後用原形動詞',
          bodyEn: 'After these verbs, a that clause takes the base form of the verb — no -s and no tense, whatever the subject. It looks like a mistake, and it is the answer.',
          bodyZh: '這些動詞後面的 that 子句一律用原形動詞，不加 -s，也不變時態，與主詞無關。它看起來像錯的，但那正是答案。',
          good: 'The committee recommended that the policy be revised.',
          also: 'The manager insisted that all employees attend the meeting.',
        },
        {
          t: 'q5',
          en: 'Part 5 practice',
          zh: 'Part 5 練習',
          items: [
            {
              text: 'If the payment ___ today, the order will be shipped tomorrow.',
              options: ['is received', 'will be received', 'was received', 'had been received'],
              answer: 0,
              why: {
                en: 'In a real condition, the if clause stays in the present even though it is about the future.',
                zh: '真實條件句中，if 子句雖然講的是未來，仍然使用現在式。',
              },
            },
            {
              text: 'If the company ___ more funding, it would have expanded sooner.',
              options: ['received', 'has received', 'had received', 'would receive'],
              answer: 2,
              why: {
                en: 'Would have expanded fixes this as contrary to past fact, so the if clause takes had + past participle.',
                zh: '主句是 would have expanded，屬於與過去事實相反，if 子句要用 had ＋ 過去分詞。',
              },
            },
            {
              text: 'The committee recommended that the policy ___ revised.',
              options: ['is', 'be', 'was', 'will be'],
              answer: 1,
              why: {
                en: 'After recommend, the that clause takes the base form — be, not is or was.',
                zh: 'recommend 之後的 that 子句用原形動詞，所以是 be，不是 is 或 was。',
              },
            },
            {
              text: 'The manager insisted that all employees ___ the meeting.',
              options: ['attends', 'attend', 'attended', 'to attend'],
              answer: 1,
              why: {
                en: 'Same rule after insist. The base form looks wrong next to a past tense verb, but it is correct.',
                zh: 'insist 之後同一個規則。原形動詞放在過去式旁邊看起來很怪，但那是正確的。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 16
    {
      id: 'formulas',
      n: 16,
      en: 'The Fifteen Formulas',
      zh: '十五個文法公式',
      blocks: [
        {
          t: 'lead',
          en: 'Everything above, compressed to fifteen patterns. If you memorise nothing else, memorise these.',
          zh: '以上所有內容，濃縮成十五個公式。如果只背一樣東西，就背這個。',
        },
        {
          t: 'cards',
          en: 'Tap a formula for an example',
          zh: '點一下公式看例句',
          hintEn: 'Say the pattern aloud first, then check.',
          hintZh: '先把公式唸出來，再看例句。',
          items: [
            { n: 1, pattern: 'modal + V', eg: 'will begin', zh: '情態動詞 ＋ 原形動詞', to: 'tenses' },
            { n: 2, pattern: 'have / has + p.p.', eg: 'has received', zh: '現在完成式', to: 'tenses' },
            { n: 3, pattern: 'be + p.p.', eg: 'is required', zh: '被動語態', to: 'passive' },
            { n: 4, pattern: 'be + adjective + to V', eg: 'be eligible to apply', zh: '有資格／有意願做某事', to: 'to-ing' },
            { n: 5, pattern: 'decide / plan / agree + to V', eg: 'plans to expand', zh: '固定接不定詞的動詞', to: 'to-ing' },
            { n: 6, pattern: 'preposition + V-ing', eg: 'by using', zh: '介系詞後接動名詞', to: 'to-ing' },
            { n: 7, pattern: 'article + adjective + noun', eg: 'a new system', zh: '冠詞＋形容詞＋名詞', to: 'word-forms' },
            { n: 8, pattern: 'adverb + verb', eg: 'responded quickly', zh: '副詞修飾動詞', to: 'word-forms' },
            { n: 9, pattern: 'adverb + adjective', eg: 'extremely reliable', zh: '副詞修飾形容詞', to: 'word-forms' },
            { n: 10, pattern: 'one / few / many of + object pronoun', eg: 'many of them', zh: 'of 後面用受格', to: 'pronouns' },
            { n: 11, pattern: 'not only A but also B', eg: 'not only reduce costs but also improve efficiency', zh: '不僅 A，而且 B', to: 'correlatives' },
            { n: 12, pattern: 'once + S + V', eg: 'once the equipment has been installed', zh: '一旦……', to: 'conjunctions' },
            { n: 13, pattern: 'unless + S + V', eg: 'unless payment is received', zh: '除非……', to: 'conjunctions' },
            { n: 14, pattern: 'noun + that / which / who + clause', eg: 'the report that was submitted', zh: '關係代名詞修飾名詞', to: 'relatives' },
            { n: 15, pattern: 'transition into + noun', eg: 'transition into a management position', zh: '轉換進入……', to: 'prepositions' },
          ],
        },
        {
          t: 'q5',
          en: 'Mixed review — all fifteen formulas',
          zh: '綜合複習——十五個公式',
          hintEn: 'No topic heading to help you this time. Name the formula before you choose.',
          hintZh: '這一次沒有主題提示。先說出是哪個公式，再選答案。',
          items: [
            {
              text: 'The training session will ___ at 9:00 A.M.',
              options: ['begins', 'begin', 'beginning', 'begun'],
              answer: 1,
              why: { en: 'Formula 1 — modal + V.', zh: '公式 1：情態動詞 ＋ 原形動詞。' },
            },
            {
              text: 'The company ___ more than 200 applications.',
              options: ['has received', 'have received', 'has receiving', 'is received'],
              answer: 0,
              why: { en: 'Formula 2 — have / has + past participle, and company is singular.', zh: '公式 2：have／has ＋ 過去分詞；company 是單數。' },
            },
            {
              text: 'All expense reports ___ by Friday.',
              options: ['require', 'requiring', 'are required', 'have required'],
              answer: 2,
              why: { en: 'Formula 3 — be + past participle. The reports are required by somebody.', zh: '公式 3：be ＋ 過去分詞。報告是被要求的一方。' },
            },
            {
              text: 'The support team is ready ___ customers.',
              options: ['assist', 'to assist', 'assisting', 'assisted'],
              answer: 1,
              why: { en: 'Formula 4 — be + adjective + to V.', zh: '公式 4：be ＋ 形容詞 ＋ to V。' },
            },
            {
              text: 'Management has decided ___ the product launch.',
              options: ['postpone', 'postponing', 'to postpone', 'postponed'],
              answer: 2,
              why: { en: 'Formula 5 — decide takes an infinitive.', zh: '公式 5：decide 後面接不定詞。' },
            },
            {
              text: 'The manager left without ___ the contract.',
              options: ['sign', 'to sign', 'signing', 'signed'],
              answer: 2,
              why: { en: 'Formula 6 — preposition + V-ing.', zh: '公式 6：介系詞 ＋ 動名詞。' },
            },
            {
              text: 'The company introduced a ___ payment system.',
              options: ['newly', 'new', 'newness', 'renew'],
              answer: 1,
              why: { en: 'Formula 7 — article + adjective + noun.', zh: '公式 7：冠詞 ＋ 形容詞 ＋ 名詞。' },
            },
            {
              text: 'The technician ___ inspected the equipment.',
              options: ['careful', 'carefully', 'care', 'caring'],
              answer: 1,
              why: { en: 'Formula 8 — adverb + verb.', zh: '公式 8：副詞 ＋ 動詞。' },
            },
            {
              text: 'The new software is ___ reliable.',
              options: ['extreme', 'extremely', 'extremity', 'more extreme'],
              answer: 1,
              why: { en: 'Formula 9 — adverb + adjective.', zh: '公式 9：副詞 ＋ 形容詞。' },
            },
            {
              text: 'Only a few of ___ were informed of the schedule change.',
              options: ['we', 'us', 'our', 'ourselves'],
              answer: 1,
              why: { en: 'Formula 10 — of takes the object pronoun.', zh: '公式 10：of 後面用受格。' },
            },
            {
              text: 'The position requires not only technical knowledge ___ strong communication skills.',
              options: ['but also', 'and also', 'or also', 'as well'],
              answer: 0,
              why: { en: 'Formula 11 — not only A but also B.', zh: '公式 11：not only A but also B。' },
            },
            {
              text: 'Your application will be reviewed ___ all documents are received.',
              options: ['once', 'unless', 'in case of', 'despite'],
              answer: 0,
              why: { en: 'Formula 12 — once + S + V, meaning as soon as.', zh: '公式 12：once ＋ 主詞 ＋ 動詞，表示「一旦」。' },
            },
            {
              text: 'Employees cannot enter the laboratory ___ they have permission.',
              options: ['once', 'unless', 'because', 'so that'],
              answer: 1,
              why: { en: 'Formula 13 — unless + S + V, meaning except if.', zh: '公式 13：unless ＋ 主詞 ＋ 動詞，表示「除非」。' },
            },
            {
              text: 'The employees ___ completed the course will receive certificates.',
              options: ['what', 'whose', 'who', 'whom'],
              answer: 2,
              why: { en: 'Formula 14 — noun + who + clause, with who as the subject.', zh: '公式 14：名詞 ＋ who ＋ 子句，who 在子句中作主詞。' },
            },
            {
              text: 'Ms. Lee is preparing to transition ___ a management position.',
              options: ['to', 'into', 'for', 'with'],
              answer: 1,
              why: { en: 'Formula 15 — transition into + noun.', zh: '公式 15：transition into ＋ 名詞。' },
            },
          ],
        },
      ],
    },

    // ================================================================ 17
    {
      id: 'ranking',
      n: 17,
      en: 'What to Study First',
      zh: '考點排名',
      blocks: [
        {
          t: 'lead',
          en: 'Not every topic is worth the same number of marks. If time is short, work down this list.',
          zh: '每個主題的分數比重並不相同。時間有限時，就照這個順序念。',
        },
        {
          t: 'tiers',
          en: 'Part 5, ranked',
          zh: 'Part 5 最常考的文法排名',
          groups: [
            {
              en: 'First tier — highest frequency',
              zh: '第一梯隊：最高頻',
              items: [
                { en: 'Word forms', zh: '詞性判斷', to: 'word-forms' },
                { en: 'Verb tense and voice', zh: '動詞時態與語態', to: 'tenses' },
                { en: 'Prepositions and fixed collocations', zh: '介系詞與固定搭配', to: 'prepositions' },
                { en: 'Conjunctions', zh: '連接詞', to: 'conjunctions' },
                { en: 'Pronouns and relative pronouns', zh: '代名詞與關係代名詞', to: 'pronouns' },
              ],
            },
            {
              en: 'Second tier — reliably present',
              zh: '第二梯隊：穩定出現',
              items: [
                { en: 'Infinitives and gerunds', zh: '不定詞與動名詞', to: 'to-ing' },
                { en: 'Participles', zh: '分詞', to: 'participles' },
                { en: 'Subject–verb agreement', zh: '主詞與動詞一致', to: 'agreement' },
                { en: 'Comparatives and superlatives', zh: '比較級與最高級', to: 'comparatives' },
                { en: 'Determiners and quantifiers', zh: '限定詞與數量詞', to: 'pronouns' },
              ],
            },
            {
              en: 'Third tier — few questions, easily dropped marks',
              zh: '第三梯隊：題數較少，但容易失分',
              items: [
                { en: 'Subjunctive structures', zh: '假設語氣', to: 'conditionals' },
                { en: 'Parallel structure', zh: '平行結構', to: 'correlatives' },
                { en: 'Conditionals', zh: '條件句', to: 'conditionals' },
                { en: 'Special adverbs', zh: '特殊副詞', to: 'transitions' },
                { en: 'Inversion', zh: '倒裝結構' },
              ],
            },
          ],
        },
        {
          t: 'tiers',
          en: 'Part 6, what it adds',
          zh: 'Part 6 最常考的重點',
          leadEn: 'Part 6 is not a longer Part 5. It tests grammar and the reading of a whole text at the same time.',
          leadZh: 'Part 6 不只是加長版 Part 5，而是同時測試文法與篇章閱讀。',
          groups: [
            {
              en: 'The eight things it checks',
              zh: '八個考點',
              items: [
                { en: 'Consistency of verb tense across the text', zh: '動詞時態一致', to: 'tenses' },
                { en: 'What the pronouns refer back to', zh: '代名詞指涉', to: 'pronouns' },
                { en: 'Conjunctions and transitional words', zh: '連接詞與轉承語', to: 'transitions' },
                { en: 'Sentence insertion', zh: '句子插入', to: 'insertion' },
                { en: 'Cause and effect between sentences', zh: '前後句因果關係', to: 'transitions' },
                { en: 'Staying on topic', zh: '主題一致性', to: 'insertion' },
                { en: 'Formal business tone', zh: '正式商務語氣', to: 'insertion' },
                { en: 'Collocation and word choice', zh: '固定搭配與語意選字', to: 'prepositions' },
              ],
            },
          ],
        },
        {
          t: 'rule',
          en: 'Part 5 asks whether you can recognise the parts of a sentence quickly. Part 6 asks whether, once those parts are assembled, the whole text actually makes sense.',
          zh: 'Part 5 主要測試你能不能快速辨認句子零件；Part 6 則要求你確認這些零件組合後，整段文章是否真的說得通。',
        },
      ],
    },
  ],
};
