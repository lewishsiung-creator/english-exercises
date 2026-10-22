/* Sentence Upgrades, 17 October 2026 — the second set, as a lesson.

   Fourteen sentences Anita wrote, each with the revision from the feedback
   sheet, the collocations that came with it, and a note on what changed. The
   same machinery as the 25 July set in the folder above: a copy of that
   renderer and stylesheet, its own content file.

   WHAT CAME FROM WHERE
   --------------------
   The originals, the revisions, the Chinese translations, the Key Expressions
   and the whole assessment are the sheet's, reproduced as written. The `why.zh`
   under each revision is the sheet's 修改說明, lightly joined up into full
   sentences; the `why.en` beside it was written for this page, because on a
   page nobody is standing there to explain it.

   Two sections exist here that the July page does not have, because the sheet
   has them and they are the most useful parts of it for a student working
   alone: `assessment` (what this sample shows, and the three things to work on)
   and `recording` (a passage to read aloud and record, from the same week).
   Both are optional — leave either out and the renderer skips it.

   ── The change markers ──────────────────────────────────────────────────
   `original` and `revised` mark what changed with [[double brackets]]:

     original: 'My boss ... because he wants to [[know how the process is
                progressing]] and ...'
     revised:  'My boss ... because he wants to [[monitor progress throughout
                the process]] and ...'

   The two strings must carry the same number of marks, in the same order —
   mark 1 in the original became mark 1 in the revision, and tapping either
   lights up both. The renderer throws if the counts disagree. Everything
   outside the brackets is text both versions share, so keep it identical,
   spaces and punctuation included, or the sentences stop lining up. Where a
   revision rewrote a sentence wholesale (5 and 13), one mark covers the lot —
   that is the honest description of what happened to it.
*/

const LESSON = {
  title: 'Sentence Upgrades',
  titleZh: '句子升級',
  dateLabel: '2026/10/17',
  kicker: '2026/10/17 課後複習',

  intro: {
    en: 'These are your own fourteen sentences from 17 October, each with the version we ended up with. Most of them are not wrong so much as slightly off — a collocation that is understandable but not the usual one, a sentence that says less than you meant. Read your sentence first and say what you would change; then open the revision.',
    zh: '這是你 10/17 的十四個句子，以及最後改出來的版本。它們多半不是錯，而是差了一點──搭配詞聽得懂但不是慣用的那一個，或者句子說得比你的本意還少。先讀自己的句子，說說看你會怎麼改，再打開修改後的版本。',
    goalsEn: 'By the end of this review you will be able to:',
    goalsZh: '複習完這一份後，你將能夠：',
    goals: [
      { en: 'say what changed between your sentence and the revision, and why it matters', zh: '說出原句與修改後的差異，以及為什麼要這樣改' },
      { en: 'use 48 collocations on management, training, risk, growth and personal change', zh: '運用 48 個關於管理、訓練、風險、成長與個人改變的搭配詞' },
      { en: 'reach for the usual pairing — believe in someone’s potential, monitor progress, take appropriate measures', zh: '直接想到慣用的搭配：believe in someone’s potential、monitor progress、take appropriate measures' },
      { en: 'break a comma splice into sentences that carry the logic', zh: '把逗號拼接句拆成能承載邏輯的句子' },
    ],
  },

  sibling: {
    href: '../',
    en: 'The earlier set — the seven sentences of 25 July',
    zh: '較早的一組——7/25 的七個句子',
  },

  source: {
    en: 'From the feedback sheet of 17 October 2026. The original sentences are reproduced as written, and the revisions, translations, key expressions and assessment are the sheet’s. The English note under each revision was written for this page; the Chinese beside it is the sheet’s 修改說明.',
    zh: '出自 2026 年 10 月 17 日的回饋講義。原句照錄，修改後的版本、中文翻譯、搭配詞與整體評估皆來自講義。每則修改下方的英文說明是為這個頁面另外寫的，中文則是講義原本的「修改說明」。',
  },

  items: [
    // ================================================================ 1
    {
      id: 'goal-oriented',
      n: 1,
      en: 'Goal-oriented and process-oriented',
      zh: '目標導向與過程導向',

      original: 'My boss is both goal-oriented and process-oriented because he wants to [[know how the process is progressing]] and [[what the results will be]].',
      revised: 'My boss is both goal-oriented and process-oriented because he wants to [[monitor progress throughout the process]] and [[understand what results we are likely to achieve]].',

      why: {
        en: '“Know how the process is progressing” is correct, but it says *process* twice in a sentence that has already said it. “Monitor progress” carries the same meaning in two words and is what a manager would actually say. The second change adds the thing your sentence left out: results are a forecast, not a certainty — *what results we are likely to achieve*.',
        zh: '原句的 how the process is progressing 文法正確，但略顯重複。使用 monitor progress 更簡潔，也更符合職場英文。後半補上了原句沒說出口的部分：成果是推估，不是定論——what results we are likely to achieve。',
      },

      phrases: [
        { en: 'monitor progress', zh: '掌握進度' },
        { en: 'throughout the process', zh: '在整個過程中' },
        { en: 'achieve results', zh: '達成成果' },
      ],
    },

    // ================================================================ 2
    {
      id: 'gradual-effect',
      n: 2,
      en: 'Have a gradual effect',
      zh: '產生漸進式影響',

      original: 'Training is a long-term process. You cannot [[see the results from]] just one training [[program, but training will have a gradual effect]].',
      revised: 'Training is a long-term process. You cannot [[expect to see significant results after]] just one training [[session. However, consistent training can have a gradual but lasting effect on performance]].',

      why: {
        en: 'A *training session* is one class; a *training program* is the whole course of them. You meant one class, so the revision uses session. “You cannot expect to see” is also the softer, truer claim — results may exist, you just cannot expect them yet. And *gradual but lasting* turns the sentence into an argument for training rather than an apology for it.',
        zh: 'training session 指單次訓練課程，而 training program 通常指包含多次課程的完整訓練計畫，兩者應依實際情境選擇。另外，you cannot expect to see 的說法更準確——不是沒有成果，而是還不能期待；而 gradual but lasting 讓這句話變成支持訓練的理由，而不是為它找藉口。',
      },

      phrases: [
        { en: 'see significant results', zh: '看到顯著成果' },
        { en: 'consistent training', zh: '持續性的訓練' },
        { en: 'have a lasting effect on', zh: '對……產生持久影響' },
      ],
    },

    // ================================================================ 3
    {
      id: 'trust-potential',
      n: 3,
      en: 'Trust one’s potential',
      zh: '相信某人的潛力',

      original: 'If you want to [[have great staff]], you need to [[trust their potential to accomplish their tasks]].',
      revised: 'If you want to [[develop high-performing employees]], you need to [[believe in their potential and trust them to carry out their responsibilities]].',

      why: {
        en: 'Two fixed pairings sit underneath this one. You *believe in* someone’s potential — that is the usual collocation — and you *trust someone to do* something, which is the trust that matters to a manager: not a feeling about them, but handing them the task. “Have great staff” also sounds like luck; *develop high-performing employees* is the thing you actually do.',
        zh: 'trust their potential 可以理解，但 believe in their potential 是更自然的搭配；trust them to do something 則強調相信某人能完成特定任務，這正是管理上真正的信任——不是一種感覺，而是把事情交出去。另外，have great staff 聽起來像運氣好，develop high-performing employees 才是你實際在做的事。',
      },

      phrases: [
        { en: 'develop high-performing employees', zh: '培養高績效員工' },
        { en: 'believe in someone’s potential', zh: '相信某人的潛力' },
        { en: 'carry out responsibilities', zh: '履行職責' },
      ],
    },

    // ================================================================ 4
    {
      id: 'spectacular-sight',
      n: 4,
      en: 'Spectacular views',
      zh: '壯觀的景色',

      original: 'When I climbed to the [[top]] of Milan Cathedral, I was stunned by the spectacular [[views]] of its 135 exquisite Gothic spires[[ and the 4.16-meter-tall gilded statue of the Virgin Mary standing on the cathedral’s highest spire]].',
      revised: 'When I climbed to the [[rooftop]] of Milan Cathedral, I was stunned by the spectacular [[sight]] of its 135 exquisite Gothic spires[[, including the tallest one, which is topped by a 4.16-meter-tall gilded statue of the Virgin Mary]].',

      why: {
        en: '*Views* are what you look out at from a high place; a *sight* is the thing you are looking at. You were describing the cathedral itself, so sight is the word. The ending was also doing too much work at once — the relative clause separates the spires from the one spire that carries the statue, so a reader can follow it.',
        zh: '這裡使用 spectacular sight 比 spectacular views 更精確，因為你描述的是教堂本身的建築細節，而非從屋頂向外眺望的景色。句尾原本一口氣講完太多事，改用關係子句把尖塔和「頂端有雕像的那一座」分開，讀者才跟得上。',
      },

      phrases: [
        { en: 'be stunned by', zh: '被……震撼' },
        { en: 'spectacular sight', zh: '壯觀的景象' },
        { en: 'be topped by', zh: '頂端設有……' },
        { en: 'exquisite Gothic spires', zh: '精緻的哥德式尖塔' },
      ],
    },

    // ================================================================ 5
    {
      id: 'regulate-breathing',
      n: 5,
      en: 'Regulate one’s breathing',
      zh: '調節呼吸',

      original: '[[We need to regulate our breathing to match our steps when we are hiking up a high mountain]].',
      revised: '[[When hiking up a high mountain, we need to regulate our breathing and synchronize it with our steps to maintain a steady pace]].',

      why: {
        en: 'Your version was natural English; this is a rebuild rather than a correction. Putting the situation first — *when hiking up a high mountain* — sets the scene before the instruction, which is how advice is usually given. *Synchronize* is more precise than *match* for two actions kept in time with each other, and the ending says what the breathing is for.',
        zh: 'match our breathing to our steps 也很自然，這一句與其說是訂正，不如說是重寫。把情境放在句首——when hiking up a high mountain——先交代場景再給建議，這是英文給建議的習慣順序。synchronize 比 match 更精確地表達兩種動作的協調，句尾也補上了調節呼吸的目的。',
      },

      phrases: [
        { en: 'regulate one’s breathing', zh: '調節呼吸' },
        { en: 'synchronize A with B', zh: '讓 A 與 B 同步' },
        { en: 'maintain a steady pace', zh: '維持穩定的速度' },
      ],
    },

    // ================================================================ 6
    {
      id: 'appropriate-facilities',
      n: 6,
      en: 'Proper facilities',
      zh: '適當的設施',

      original: 'Kindergartens need to provide [[proper]] facilities to [[protect children’s safety because young children have limited knowledge and understanding]].',
      revised: 'Kindergartens need to provide [[appropriate]] facilities to [[ensure children’s safety, as young children may not yet be fully aware of potential dangers]].',

      why: {
        en: '*Proper* is not wrong, but *appropriate* asks the question that matters here: appropriate to what — to the age and size of the children. The second half is the bigger gain. “Limited knowledge and understanding” judges the child; *may not yet be fully aware of potential dangers* describes the situation, and says exactly which danger the facilities are for.',
        zh: 'proper facilities 並沒有錯，但 appropriate facilities 更強調設施是否符合幼兒的年齡與需求。後半的改動更關鍵：limited knowledge and understanding 像是在評斷孩子，而 may not yet be fully aware of potential dangers 描述的是處境，也精確說明了設施要防的是什麼。',
      },

      phrases: [
        { en: 'provide appropriate facilities', zh: '提供適當設施' },
        { en: 'ensure children’s safety', zh: '確保兒童安全' },
        { en: 'be aware of potential dangers', zh: '意識到潛在危險' },
      ],
    },

    // ================================================================ 7
    {
      id: 'occupational-hazards',
      n: 7,
      en: 'Occupational hazards',
      zh: '職業危害',

      original: 'Every job [[has its]] occupational hazards, [[depending on the degree of risk involved]]. Therefore, [[every company should provide a good working environment based on its capabilities]].',
      revised: 'Every job [[involves certain]] occupational hazards, [[although the level of risk varies depending on the nature of the work]]. Therefore, [[companies should take appropriate measures to provide a safe working environment]].',

      why: {
        en: '“Based on its capabilities” can be read as *only as far as the company can afford*, which is not what you meant and is a dangerous thing to say about safety. *Take appropriate measures* puts the duty on the company. *Although* also fixes the logic: every job has hazards — that part does not vary; what varies is how much.',
        zh: '原句的 based on its capabilities 可能讓人理解為企業只需要在能力許可範圍內提供安全環境，這並不是你的本意，用在職業安全上也相當危險；改成 take appropriate measures 把責任放回企業身上。另外，although 修好了邏輯：每份工作都有危害，這點不變，變的是程度。',
      },

      phrases: [
        { en: 'occupational hazards', zh: '職業危害' },
        { en: 'the level of risk varies', zh: '風險程度有所不同' },
        { en: 'the nature of the work', zh: '工作性質' },
        { en: 'take appropriate measures', zh: '採取適當措施' },
      ],
    },

    // ================================================================ 8
    {
      id: 'ability-to',
      n: 8,
      en: 'Have the ability to do something',
      zh: '有能力做某事',

      original: '[[When I have]] the ability to communicate effectively in English, I will [[be able to]] apply for jobs overseas.',
      revised: '[[Once I develop]] the ability to communicate effectively in English, I will [[be in a better position to]] apply for jobs overseas.',

      why: {
        en: 'Grammatically your sentence is fine; the claim is what changed. You can apply for jobs overseas today — English is not the gate. What English gives you is an advantage, and *be in a better position to* says exactly that. *Once I develop* also treats the ability as something you are building, not something that arrives.',
        zh: 'I will be able to apply for jobs overseas 文法正確，但申請海外工作不一定需要先具備良好的英文能力；be in a better position to 更能表達英文能力帶來的競爭優勢。另外，once I develop 把能力看成你正在培養的東西，而不是某天自己出現的東西。',
      },

      phrases: [
        { en: 'develop the ability to', zh: '培養……的能力' },
        { en: 'communicate effectively', zh: '有效溝通' },
        { en: 'be in a better position to', zh: '處於更有利的位置去……' },
      ],
    },

    // ================================================================ 9
    {
      id: 'stop-complaining',
      n: 9,
      en: 'Stop complaining',
      zh: '停止抱怨',

      original: 'Complaining is not [[a bad thing if it helps you adopt a more positive attitude and take positive action, it can be useful. If not,]] you need to stop complaining[[.]]',
      revised: 'Complaining is not [[necessarily a bad thing. If it helps you identify problems, develop a more constructive mindset, and take action, it can be useful. Otherwise,]] you need to stop complaining[[ and focus on finding solutions.]]',

      why: {
        en: 'The original ran two complete sentences together with only a comma — a comma splice. Splitting them is not just punctuation: it lets each idea stand, and the logic of *if … otherwise* becomes visible. *Not necessarily* is also the claim you were making, and the ending now gives the alternative to complaining rather than only forbidding it.',
        zh: '原句有 comma splice（逗號拼接句）的問題：兩個完整句子不能只用逗號連接。拆成數句後，邏輯也更清楚。另外，not necessarily 才是你真正想說的意思；句尾也從「不准抱怨」變成給出替代做法——專注於尋找解決方案。',
      },

      phrases: [
        { en: 'not necessarily a bad thing', zh: '不一定是壞事' },
        { en: 'develop a constructive mindset', zh: '建立建設性的思維' },
        { en: 'take action', zh: '採取行動' },
        { en: 'focus on finding solutions', zh: '專注於尋找解決方案' },
      ],
    },

    // ================================================================ 10
    {
      id: 'potential-to-succeed',
      n: 10,
      en: 'Have the potential to succeed',
      zh: '具有成功的潛力',

      original: 'Everyone has the potential to succeed [[at]] something if they set clear goals[[ and never give up, even when they face challenges]].',
      revised: 'Everyone has the potential to succeed [[in]] something if they set clear goals[[, remain committed, and persevere through challenges]].',

      why: {
        en: 'Worth knowing: *succeed at something* was already correct, so this is a preference, not a fix. The real gain is the list. Three parallel items — set clear goals, remain committed, persevere through challenges — read as one argument, where “never give up, even when they face challenges” says the same thing twice. *Persevere through challenges* also suits a talk or a meeting, where *never give up* suits a friend.',
        zh: '先說清楚：原句的 succeed at something 本身也正確，這裡是偏好而非訂正。真正的收穫在後半的並列結構：set clear goals、remain committed、persevere through challenges 三項並列，讀起來是一個完整的主張，而 never give up, even when they face challenges 其實說了兩次同樣的事。另外，persevere through challenges 更適合正式演講與職場情境，never give up 則比較像對朋友說的話。',
      },

      phrases: [
        { en: 'have the potential to succeed', zh: '具有成功的潛力' },
        { en: 'set clear goals', zh: '設定明確目標' },
        { en: 'remain committed', zh: '持續投入' },
        { en: 'persevere through challenges', zh: '在挑戰中堅持不懈' },
      ],
    },

    // ================================================================ 11
    {
      id: 'upbringing',
      n: 11,
      en: 'Upbringing experience',
      zh: '成長背景與人生經歷',

      original: 'I have always believed that our upbringing and life experiences [[influence our behavior and thinking, such as whether we cherish]] public facilities.',
      revised: 'I have always believed that our upbringing and life experiences [[shape the way we think and behave, including how much we value and respect]] public facilities.',

      why: {
        en: '*Upbringing* already means how you were raised, so *upbringing experience* doubles up — this is the heading’s own lesson. In the sentence, *shape the way we think and behave* is stronger than *influence*: it says the upbringing formed the habit, not merely nudged it. And *how much we value* allows for degrees, where *whether we cherish* is all or nothing.',
        zh: 'upbringing experience 並不是常見的自然搭配：upbringing 本身就表示一個人的養育方式與成長背景，不需要再加 experience。句子裡，shape the way we think and behave 比 influence 更有力，說的是成長背景「形塑」了習慣，而不只是輕輕影響；how much we value 也留下了程度的空間，whether we cherish 則是全有或全無。',
      },

      phrases: [
        { en: 'upbringing and life experiences', zh: '成長背景與人生經歷' },
        { en: 'shape the way we think and behave', zh: '塑造我們的思考與行為方式' },
        { en: 'value and respect public facilities', zh: '重視並愛惜公共設施' },
      ],
    },

    // ================================================================ 12
    {
      id: 'fear-losing',
      n: 12,
      en: 'Be afraid of losing something',
      zh: '害怕失去某事物',

      original: 'When we are young, we [[are usually afraid of losing things such as face]], money, our jobs, [[and our positions. But]] as we grow older, [[the things we fear losing may change]].',
      revised: 'When we are young, we [[tend to be afraid of losing face]], money, our jobs, [[or our social status. However,]] as we grow older, [[our priorities may shift, and so may the things we fear losing]].',

      why: {
        en: '*Lose face* is a fixed phrase, so “losing things such as face” pulls it apart; *tend to* is also gentler than *usually* for a claim about everyone. The ending is the one to steal: *and so may the things we fear losing* is an inversion, short for *the things we fear losing may also shift*. It lets you add a second idea without repeating the verb.',
        zh: 'lose face 是固定搭配，losing things such as face 等於把它拆開了；tend to 用來描述「大多數人」也比 usually 來得委婉。真正值得學起來的是句尾：and so may the things we fear losing 是倒裝句，完整意思是 the things we fear losing may also shift。這個結構能讓英文更流暢，避免重複。',
      },

      phrases: [
        { en: 'lose face', zh: '丟臉、失去面子' },
        { en: 'social status', zh: '社會地位' },
        { en: 'priorities shift', zh: '優先考量改變' },
        { en: 'the things we fear losing', zh: '我們害怕失去的事物' },
      ],
    },

    // ================================================================ 13
    {
      id: 'lead-to-discomfort',
      n: 13,
      en: 'Lead to discomfort',
      zh: '導致不適',

      original: '[[It can lead to discomfort when we exercise beyond our body’s limits, so we need to stop and rest]].',
      revised: '[[Pushing our bodies beyond their physical limits during exercise can lead to discomfort or even injury. Therefore, it is important to recognize warning signs and take a break when necessary]].',

      why: {
        en: 'Not a grammar fix — the original is correct. Starting with *it* holds the real subject back; making the action itself the subject, *pushing our bodies beyond their limits*, puts cause and effect in the order a reader expects. *Recognize warning signs* also adds the step your sentence skipped: you have to notice before you can stop.',
        zh: 'It can lead to discomfort when... 並非文法錯誤，但直接以 Pushing our bodies... 作為主詞，因果關係更明確——用 it 開頭會把真正的主詞往後推。另外，recognize warning signs 補上了原句跳過的一步：要先察覺，才談得上休息。',
      },

      phrases: [
        { en: 'push one’s body beyond its limits', zh: '讓身體超出負荷' },
        { en: 'lead to discomfort', zh: '導致不適' },
        { en: 'recognize warning signs', zh: '辨識警訊' },
        { en: 'take a break when necessary', zh: '必要時休息' },
      ],
    },

    // ================================================================ 14
    {
      id: 'minimize-damage',
      n: 14,
      en: 'Minimize the damage',
      zh: '將損害降至最低',

      original: 'Most supervisors [[will think about what the worst-case scenario is and how to]] minimize the damage if [[it happens]].',
      revised: 'Most supervisors [[consider potential worst-case scenarios and develop contingency plans to]] minimize the damage if [[those scenarios occur]].',

      why: {
        en: '*Think about how to minimize the damage* stays in the supervisor’s head; *develop contingency plans* is the thing that exists afterwards, and it is the word used in risk management. Plural *scenarios* matters too — there is rarely only one way for something to go wrong.',
        zh: 'contingency plan（應變計畫）是風險管理與企業決策中非常實用的搭配詞。相較於只考慮最壞結果，加入應變計畫讓句子更有管理上的實際意義——think about how to 留在腦袋裡，develop contingency plans 則是事後真的存在的東西。另外，複數的 scenarios 也有意義：事情出錯的方式很少只有一種。',
      },

      phrases: [
        { en: 'consider worst-case scenarios', zh: '考慮最壞情境' },
        { en: 'develop contingency plans', zh: '制定應變計畫' },
        { en: 'minimize the damage', zh: '將損害降至最低' },
      ],
    },
  ],

  /* The sheet's assessment, kept because it is the part a student working alone
     cannot write for herself. The CEFR line is reproduced with its own caveat
     intact — it is a reading of one writing sample, not a test result. */
  assessment: {
    id: 'assessment',
    en: 'Where this writing stands',
    zh: '整體英文能力評估',

    leadEn: 'Across these fourteen sentences you are handling abstract ideas — management, careers, education, risk and personal change — and not only describing them but taking a position on them. On this writing sample alone, that reads as roughly CEFR B2 writing. It is one sample, not a test, and it says nothing about listening or speaking.',
    leadZh: '在這十四個句子裡，你已經能夠運用抽象概念來討論管理、職涯、教育、風險及個人成長等議題，而且不只是描述，還提出了觀點。就這份寫作樣本而言，初步判斷約為 CEFR B2 的寫作表現；不過，這並非正式能力測驗，也不足以判斷整體英語程度。',

    strengthsEn: 'What is already working',
    strengthsZh: '主要優勢',
    strengths: [
      {
        en: 'Vocabulary range — occupational hazards, spectacular views, potential, minimize the damage all arrived without help.',
        zh: '字彙廣度：occupational hazards、spectacular views、potential、minimize the damage 這些詞都是自己用出來的。',
      },
      {
        en: 'Complex sentences — because, if, when and although are doing real work, carrying cause, condition and contrast.',
        zh: '複合句：能利用 because、if、when、although 等結構解釋原因、條件與對比。',
      },
      {
        en: 'Critical thinking — the sentences take a view, not just a fact: whether complaining has any value, and how what we fear losing changes with age.',
        zh: '批判性思考：句子不只描述事實，也能提出觀點，例如抱怨是否具有正面價值，以及不同年齡階段對失去的恐懼。',
      },
    ],

    priorityEn: 'Three things to work on, in order',
    priorityZh: '優先改善的三個面向',
    headArea: { en: 'What', zh: '面向' },
    headFrom: { en: 'You wrote', zh: '原版表達' },
    headTo: { en: 'Reach for', zh: '建議表達' },
    priorities: [
      {
        areaEn: 'Collocational accuracy',
        areaZh: '搭配詞精確度',
        from: 'trust their potential',
        to: 'believe in their potential',
      },
      {
        areaEn: 'Conciseness',
        areaZh: '精簡表達',
        from: 'know how the process is progressing',
        to: 'monitor progress',
      },
      {
        areaEn: 'Logical precision',
        areaZh: '邏輯精確度',
        from: 'be able to apply for jobs overseas',
        to: 'be in a better position to apply for jobs overseas',
      },
    ],

    planEn: 'From understanding it to using it',
    planZh: '建議下一步：從理解到實際運用',
    stages: [
      {
        nameEn: 'Stage 1 · Recognition',
        nameZh: '第一階段 · 辨識',
        en: 'Compare the original with the revision and sort the change: is it grammar, is it naturalness, or is it a change of meaning?',
        zh: '比較 Original Version 與 Revised Version，理解哪些修改是文法修正、哪些是自然度提升，以及哪些涉及語意調整。',
      },
      {
        nameEn: 'Stage 2 · Controlled practice',
        nameZh: '第二階段 · 控制式練習',
        en: 'Work the Key Expressions: swap words in and out, fill the gaps, rebuild the sentence from the phrase.',
        zh: '利用每組 Key Expressions 進行替換、填空及重組句子練習，強化正確搭配。',
      },
      {
        nameEn: 'Stage 3 · Active production',
        nameZh: '第三階段 · 主動產出',
        en: 'Write one new sentence of your own for each set, then use five of them in a 90-second spoken answer.',
        zh: '每一組搭配詞各造一個新句子，並將其中 5 組運用到一段 90 秒的英文口說中。',
      },
    ],

    principleEn: 'The principle that matters most: do not treat every difference from the revision as a mistake. Several of your sentences are entirely correct — the revision is simply tighter, more formal or more precise in that particular context. Seeing which is which is what moves your English forward.',
    principleZh: '最重要的學習原則是：不要將所有不同於修正版的原句都視為錯誤。有些原句完全正確，只是修正版在特定語境下更精簡、正式或精確。理解這些差異，才能真正提升英文表達能力。',
  },

  /* A passage from the same week, written to be read aloud and recorded. It is
     her own subject — the AI agents her company is building — so the words are
     already hers to say. */
  recording: {
    id: 'recording',
    en: 'Recording practice',
    zh: '錄音練習',

    leadEn: 'Read this aloud and record yourself. Tap 🔊 on a paragraph to hear it first, then read it yourself at the same speed — not faster. Record the whole passage in one take, listen back once, and send it over.',
    leadZh: '把這段文字唸出來並錄下自己的聲音。可以先點段落旁的 🔊 聽一次，再用同樣的速度自己唸——不要更快。整段一次錄完，自己回聽一次，再傳給我。',

    hintEn: 'The Chinese is there if you need it, but read from the English.',
    hintZh: '中文是備用的，請看英文唸。',

    paras: [
      {
        en: 'My company is starting to use AI agents to support our work. Our main goal is to save time on routine tasks and make information easier to find.',
        zh: '我的公司正開始使用 AI 代理來支援工作。我們的主要目標是節省例行工作的時間，並讓資訊更容易取得。',
      },
      {
        en: 'First, a small group of key users from different departments will build the agents. Later, other employees will be able to use them. For example, I am learning how to build an agent that calculates sales bonuses. Another agent could answer questions about company policies.',
        zh: '首先，由不同部門的一小群主要使用者建立 AI 代理，之後其他員工也能使用。例如，我正在學習建立能計算業務獎金的 AI 代理。另一個代理則可以回答公司政策的相關問題。',
      },
      {
        en: 'We also want to build a knowledge base. This can help us keep important knowledge when experienced employees leave or retire.',
        zh: '我們也希望建立知識庫，幫助公司在資深員工離職或退休後，仍能保留重要知識。',
      },
      {
        en: 'I think AI may reduce the number of some entry-level positions. However, we will still need people to check results, handle special requests, and make decisions.',
        zh: '我認為 AI 可能減少部分初階職位的數量。不過，我們仍需要人員檢查結果、處理特殊需求，以及做出決策。',
      },
      {
        en: 'If AI gives me more time, I want to find tools that help employees improve their skills. In our retail business, we need to keep stores running with fewer staff. AI could handle routine tasks so our employees have more time to serve customers.',
        zh: '如果 AI 讓我有更多時間，我希望尋找能協助員工提升技能的工具。在零售業，我們需要在人力較少的情況下維持門市營運。AI 可以處理例行工作，讓員工有更多時間服務顧客。',
      },
    ],
  },

  review: {
    id: 'review',
    en: 'All together',
    zh: '總複習',

    leadEn: 'The fourteen sentences as they now stand, and every phrase in one place.',
    leadZh: '十四個句子最後的樣子，以及所有搭配詞集中在一處。',

    readEn: 'Read them aloud',
    readZh: '朗讀',
    readHintEn: 'One after another, without stopping. Tap 🔊 to hear a line first.',
    readHintZh: '一句接一句讀完，中間不要停。想先聽一次就點 🔊。',

    listEn: 'All 48 collocations',
    listZh: '全部 48 個搭配詞',
    listHintEn: 'The Chinese is covered. Say it before you tap the row — then go back the other way, covering the English and saying the phrase.',
    listHintZh: '中文是蓋住的。先自己說一次再點開該列；然後反過來，蓋住英文，把片語說出來。',

    headN: { en: '#', zh: '句' },
    headEn: { en: 'Collocation', zh: '搭配詞' },
    headZh: { en: 'Meaning', zh: '中文' },
  },
};
