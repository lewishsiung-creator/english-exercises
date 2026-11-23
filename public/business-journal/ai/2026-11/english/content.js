/* 英文口說複習教材 — 2026 年 11 月的討論。

   The English half of a discussion: what each person did well, their own
   sentences beside a natural version, the language worth keeping, two speaking
   tasks and a short self-check.

   Two things about this file are not ordinary content and must survive any
   edit:

   1. `fromTranscript` is the honest label on every Original line. They come
      from an automatic transcript of a class, so they are approximate, and the
      Improved version is a teacher's rewrite that fills in what the speaker
      meant — not a record of what they said. The page states this before the
      first pair and again at the foot of each set. Do not quietly drop it: a
      correction presented as a quotation is the one thing that would make this
      page unkind.

   2. Everything a student is told they did WELL comes before anything they are
      told to fix. That is the order on the page and it is deliberate.

   English leads here, unlike the write-up next door, because this half is the
   English. The Chinese stays visible all the same — they read it alone.
*/

const ENGLISH = {
  id: '2026-11',                 // must match ../content.js and ../../sessions.js

  titleEn: 'Speaking Review',
  titleZh: '英文口說複習教材',
  deckZh: 'AI 應用討論　·　Gary & Minnie　·　優點、修正與練習',

  introZh: '這份教材根據這次課堂中 Gary 和 Minnie 分享 AI 應用的討論內容整理，目的不只是找出需要修正的英文，更要讓兩位學員了解：自己已經做得很好的地方，以及如何進一步提升職場英文溝通能力。',

  containsZh: [
    'Speaking Strengths：Gary 和 Minnie 在討論中值得肯定的表現。',
    'Original vs. Improved English：各 12 組課堂英文原句與自然修正版。',
    'Learning Points：每個句子值得學習的文法、字彙與表達方式。',
    'Useful Business English Expressions：實用中英文對照句型。',
    'Speaking Practice & Homework：課後口說練習與學習任務。',
  ],

  /* Printed before the first Original line, and repeated under each set. */
  fromTranscriptZh: '說明：Original 取自課堂自動轉錄稿中的可辨識發言；部分口語片段不完整，Improved 會依上下文補足原意。這些修正版不代表學員當時逐字說出了相同內容。',

  students: [
    {
      name: 'Gary',
      topicsEn: 'AI Learning Websites, Creativity, AI Tools & Project Management',

      strengths: [
        {
          en: 'Willingness to Communicate',
          zh: '願意主動表達',
          body: 'Gary 願意主動分享自己建立英文學習網站的經驗，即使遇到不熟悉的單字或句型，仍持續嘗試把想法說清楚。這是很重要的口說優勢。實際職場溝通不只是避免錯誤，也需要願意主動提出想法。',
          eg: 'I just want to practice by myself.',
        },
        {
          en: 'Creative Thinking',
          zh: '有創意地表達概念',
          body: 'Gary 將 ChatGPT 形容成 a wish pool，表達自己可以把許多想法交給 AI，再從不同選項中挑選與改善。雖然這不是常見的英文說法，但這個比喻展現了創意和抽象思考能力。',
          eg: "It's like the wish pool.",
        },
        {
          en: 'Connecting Ideas to Real Work',
          zh: '連結實際工作',
          body: 'Gary 不只是討論 AI 的一般功能，也思考如何將 AI 運用在年度會議、簡報及專案管理。這讓他的發言具有明確的商業目的，而不是單純練習英文句子。',
          eg: "I want to make a… next year's annual meetings...",
        },
        {
          en: 'Checking Understanding',
          zh: '主動確認理解',
          body: '在討論如何讓 AI 讀取本機資料夾時，Gary 嘗試重新說明自己的理解，並詢問是否正確。這是職場會議中非常重要的溝通策略，尤其當討論包含複雜技術或工作流程時。',
          eg: 'Is it my understanding?',
        },
      ],

      overallEn: 'Initiative, creativity, and willingness to communicate.',
      overallZh: 'Gary 的主要優勢是主動、創意，以及願意溝通。他不會因為英文不夠流暢就停止分享，而且能將討論連結到自己的真實工作。下一階段最重要的目標，是讓這些想法能透過更完整的句子與更清楚的邏輯表達出來。',

      sets: [
        {
          en: 'Sharing Experiences with AI',
          zh: '分享使用 AI 的經驗',
          pairs: [
            {
              aboutZh: '說明網站的用途', at: '19:35',
              was: 'I just want to practice by myself.',
              now: 'I created this website so I could practice English on my own.',
              zh: '我建立這個網站，是為了讓自己能獨立練習英文。',
              point: 'so I could + verb 表達目的；on my own 表示獨立完成。',
            },
            {
              aboutZh: '把 AI 形容成創作工具', at: '19:37',
              was: "It's like the wish pool.",
              now: 'ChatGPT is like a place where I can turn my ideas into reality.',
              zh: 'ChatGPT 就像一個能讓我把想法化為現實的地方。',
              point: 'turn ideas into reality（將想法化為現實）。原句具有創意，改寫後讓比喻更容易理解。',
            },
            {
              aboutZh: '說明 AI 會提供選項', at: '19:37',
              was: 'It can give you one, two, three option. You can choose.',
              now: 'AI can suggest several options, and I can choose the one that works best for me.',
              zh: 'AI 可以提出幾個選項，而我可以選擇最適合自己的方案。',
              point: 'suggest several options；the one that works best for me。',
            },
            {
              aboutZh: '說明 AI 減輕了負擔', at: '19:37',
              was: "I don't have to think too much.",
              now: "I don't have to figure everything out on my own because AI can help me explore different options.",
              zh: '我不必獨自想出所有解決方法，因為 AI 能協助我探索不同選項。',
              point: 'figure something out（想出解決方法）；explore different options（探索不同方案）。',
            },
            {
              aboutZh: '談女兒怎麼使用 AI', at: '19:39',
              was: 'She not use this tool to review. It just make a new game.',
              now: "She doesn't use AI to review her lessons. Instead, she uses it to create new games.",
              zh: '她不是用 AI 複習功課，而是用它來創作新的遊戲。',
              point: "doesn't + verb；instead 用來說明與預期不同的行為。",
            },
            {
              aboutZh: '說明接下來想改善的地方', at: '19:39',
              was: 'I will more practice and to optimize my English class review and practice.',
              now: "I'll keep practicing and improving my English review website.",
              zh: '我會持續練習，並改善我的英文複習網站。',
              point: 'keep + V-ing（持續做某事）；improve 在此比 optimize 更自然。',
            },
          ],
        },
        {
          en: 'Discussing AI Tools and Business Applications',
          zh: '討論 AI 工具與商業應用',
          pairs: [
            {
              aboutZh: '描述 AI 發展之快', at: '20:10',
              was: "It's fast and it's not working or running. It's the jumping and flying.",
              now: "AI is evolving so quickly. It feels like we're not just moving forward—we're taking huge leaps.",
              zh: 'AI 的發展速度非常快，感覺我們不只是向前邁進，而是在大幅躍進。',
              point: 'evolve quickly（快速發展）；take huge leaps（大幅進步）。',
            },
            {
              aboutZh: '比較不同的 AI 模型', at: '20:12',
              was: 'Some model is very fast and some model is very cheap.',
              now: 'Some AI models are faster, while others are more affordable.',
              zh: '有些 AI 模型速度較快，而有些則比較經濟實惠。',
              point: 'while others…（而其他……）；affordable（價格負擔得起的）。',
            },
            {
              aboutZh: '談 AI 訂閱', at: '20:12',
              was: 'I thought I have to try to subscribe to ChatGPT first...',
              now: "I think I'll start by subscribing to ChatGPT.",
              zh: '我想我會先從訂閱 ChatGPT 開始。',
              point: 'start by + V-ing（先從某件事開始）。',
            },
            {
              aboutZh: '準備年度會議', at: '20:13',
              was: 'I have to presentation, I have to… Conclusion and these years and… get the new vision for next year.',
              now: "I need to prepare a presentation that summarizes this year's results and outlines our vision for next year.",
              zh: '我需要準備一份簡報，總結今年的成果，並說明明年的願景。',
              point: 'summarize results（總結成果）；outline a vision（概述願景）。',
            },
            {
              aboutZh: '說明專案管理的難處', at: '20:13',
              was: 'Every project, they were confused. Getting different track to different way...',
              now: 'Our projects sometimes go in different directions, so we need to make sure everyone stays focused on the same goals.',
              zh: '我們的專案有時會朝不同方向發展，因此需要確保每個人都聚焦在相同目標上。',
              point: 'go in different directions；stay focused on the same goals。',
            },
            {
              aboutZh: '確認自己的理解', at: '20:39',
              was: 'Is it my understanding? Or I… Understanding.',
              now: 'Have I understood that correctly?',
              zh: '我這樣理解正確嗎？',
              point: '這是確認理解時非常實用的職場英文句型。',
            },
          ],
        },
      ],

      sourceZh: 'Gary 原句來源：19:35–19:40、20:10–20:14、20:39–20:40。',

      priorities: [
        { en: 'Sentence Structure', zh: '使用完整的主詞、動詞與受詞表達想法' },
        { en: 'Explaining Ideas', zh: '透過原因、例子及結果補充說明' },
        { en: 'Business Vocabulary', zh: '累積專案管理、簡報與 AI 應用字彙' },
        { en: 'Checking Understanding', zh: '更自然地確認自己是否理解正確' },
      ],
      goalZh: '能用英文獨立完成 90 秒的 AI 應用經驗分享，清楚交代使用目的、做法、成果與下一步。',
    },

    {
      name: 'Minnie',
      topicsEn: 'AI Tools, AI Collaboration, Research & Project Management',

      strengths: [
        {
          en: 'Sharing Practical Experience',
          zh: '分享實際經驗',
          body: 'Minnie 不只是描述 AI 的功能，而是分享自己如何使用 ChatGPT 和 Claude，包括寫作、資料處理、專案管理與研究工作。她的分享有具體工作情境，讓其他參與者能進一步討論如何實際運用。',
          eg: 'I use ChatGPT first and longer.',
        },
        {
          en: 'Explaining Complex Workflows',
          zh: '能解釋複雜工作流程',
          body: 'Minnie 分享利用 AI 協助準備醫學文獻讀書會，包括設定研究主題、要求 AI 蒐集文獻、整理資訊及追蹤專案進度。雖然她經常需要使用中文輔助，但她能透過不同步驟解釋完整工作流程。',
          eg: 'They will remind me... on this project...',
        },
        {
          en: 'Critical Thinking',
          zh: '具備批判性思考',
          body: 'Minnie 特別強調使用 AI 處理重要研究或專業任務時，需要確認資訊是否可靠。她也分享使用不同 AI 比較答案，以及讓多位 AI 專家角色挑戰論文的做法。這展現了她對 AI 結果的判斷意識，而不只是被動接受答案。',
          eg: 'Be more cautious.',
          egNoteZh: '（由教師協助補充的字彙）',
        },
        {
          en: 'Knowledge Sharing and Collaboration',
          zh: '樂於分享與協作',
          body: 'Minnie 回應 Gary 關於 AI 工具選擇、專案管理及資料夾操作的問題，並提供自己的做法。她也會根據其他人的疑問進一步補充資訊，而不只是完成自己的發言。這是工作會議、跨部門交流及專業討論中相當有價值的能力。',
        },
      ],

      overallEn: 'Practical knowledge, analytical thinking, and willingness to share expertise.',
      overallZh: 'Minnie 的主要優勢是實務知識、分析思考，以及樂於分享專業。她已經能提供有內容、有深度的專業觀點。下一階段的挑戰，是減少對中文的依賴，讓原本清楚的專業想法也能透過完整、連貫的英文表達。',

      sets: [
        {
          en: 'Discussing AI Tools and Collaboration',
          zh: '討論 AI 工具與協作',
          pairs: [
            {
              aboutZh: '報名 AI 課程', at: '19:52',
              was: 'I apply for the Google AI agent class on Gaussian.',
              now: "I've signed up for a Google AI Agent course in Kaohsiung.",
              zh: '我已經報名高雄的一門 Google AI Agent 課程。',
              point: 'sign up for a course（報名課程）。原句的地名可能有語音辨識錯誤，修正版依後續對話補足。',
            },
            {
              aboutZh: '比較使用不同 AI 的經驗', at: '20:14',
              was: 'Because I use ChatGPT first and longer.',
              now: "I've been using ChatGPT for a longer time, so I'm more familiar with it.",
              zh: '我使用 ChatGPT 的時間比較長，所以對它更加熟悉。',
              point: 'have been + V-ing 用於描述從過去持續到現在的經驗。',
            },
            {
              aboutZh: '把工作習慣交接給另一個 AI', at: '20:15',
              was: 'They will, uh, learn some skills about how I, uh… how I talk with ChatGPT.',
              now: 'The other AI can learn about my communication style and how I prefer to work.',
              zh: '另一個 AI 可以了解我的溝通風格，以及我偏好的工作方式。',
              point: 'communication style（溝通風格）；how I prefer to work（我偏好的工作方式）。',
            },
            {
              aboutZh: '在 Work mode 開始專案', at: '20:17',
              was: 'I always open a new work.',
              now: 'I usually start a new project in Work mode.',
              zh: '我通常會在 Work mode 中建立新的專案。',
              point: 'start a project（啟動專案），而不是 open a new work。',
            },
            {
              aboutZh: '設定專案目標', at: '20:17',
              was: 'I will tell ChatGPT I want to do something.',
              now: 'I explain my goals to ChatGPT and tell it what I want to accomplish.',
              zh: '我會向 ChatGPT 說明我的目標，以及希望完成的工作。',
              point: 'explain my goals（說明目標）；accomplish（完成、達成）。',
            },
            {
              aboutZh: '與 AI 釐清需求', at: '20:17',
              was: 'ChatGPT will, uh, will ask me some problem about...',
              now: 'ChatGPT will ask me questions to clarify my requirements.',
              zh: 'ChatGPT 會向我提問，以釐清我的需求。',
              point: 'ask questions；clarify requirements（釐清需求）。',
            },
          ],
        },
        {
          en: 'Explaining Research and Project Workflows',
          zh: '說明研究與專案流程',
          pairs: [
            {
              aboutZh: '說明 AI Agent 的概念', at: '20:18',
              was: 'Just like ai agent?',
              now: "It's similar to having an AI agent that helps me manage my tasks.",
              zh: '這就像有一個 AI Agent 能協助我管理工作任務。',
              point: "It's similar to…（這類似於……）。改寫後是完整的說明句。",
            },
            {
              aboutZh: '管理工作事項與期限', at: '20:19',
              was: 'They will remind me, oh, on this project, you will do something...',
              now: 'AI can remind me of upcoming tasks and deadlines for each project.',
              zh: 'AI 可以提醒我各個專案即將到來的工作事項與截止日期。',
              point: 'remind someone of something；upcoming deadlines。',
            },
            {
              aboutZh: '蒐集研究資料', at: '20:21',
              was: 'Collect all the new journal or new article.',
              now: 'AI can help me find and collect relevant research papers and journal articles.',
              zh: 'AI 可以協助我尋找並蒐集相關的研究論文及期刊文章。',
              point: 'research papers（研究論文）；journal articles（期刊文章）；relevant（相關的）。',
            },
            {
              aboutZh: '選擇 Chat 或 Work mode', at: '20:29',
              was: 'Everything you need to use work more.',
              now: 'Not every task requires Work mode. For simple questions, regular chat is usually enough.',
              zh: '並不是每項工作都需要 Work mode。對於簡單問題，一般聊天模式通常就足夠了。',
              point: 'Not every…（不是每一個……都……）。原句的 work more 可能是 Work mode 的轉錄錯誤。',
            },
            {
              aboutZh: '處理重要工作時要謹慎', at: '20:29',
              was: 'Need to…',
              helpEn: 'Be more cautious.',
              helpZh: '教師協助補上的字彙',
              now: 'We need to be more cautious when using AI for important or high-risk tasks.',
              zh: '在使用 AI 處理重要或高風險任務時，我們需要更加謹慎。',
              point: 'be cautious when + V-ing。這組保留了教師提供字彙支持的過程。',
            },
            {
              aboutZh: '讓 AI 讀取本機檔案', at: '20:41',
              was: "I don't need to upload the old temp files...",
              now: "I don't need to upload all ten files individually. I can give the AI access to the folder instead.",
              zh: '我不需要逐一上傳所有十個檔案，可以改為讓 AI 直接存取資料夾。',
              point: 'individually（逐一）；give access to（提供存取權限）。這描述的是 Minnie 提到的操作方式，實際能力仍依工具而定。',
            },
          ],
        },
      ],

      sourceZh: 'Minnie 原句來源：19:52–20:41。',

      priorities: [
        { en: 'Complete Sentences', zh: '使用完整英文解釋自己的專業觀點' },
        { en: 'Verb Tenses', zh: '加強現在完成式及現在完成進行式' },
        { en: 'Explaining Processes', zh: '使用連接詞描述工作步驟' },
        { en: 'Professional Vocabulary', zh: '熟悉研究、分析及專案管理的英文搭配詞' },
      ],
      goalZh: '能用英文獨立完成 90 秒的研究流程說明，並使用適當的連接詞，清楚介紹研究目標、工作方法、結果與風險。',
    },
  ],

  /* ------------------------------------------------------------ 共同方向 */
  commonLeadZh: 'Gary 和 Minnie 的英文能力與表達風格不同，但有幾個共同的訓練方向。',
  common: [
    { en: 'Complete Sentences', zh: '完整句子', gary: '優先加強', minnie: '需要加強' },
    { en: 'Verb Forms', zh: '動詞形式', gary: '高優先', minnie: '高優先' },
    { en: 'Business Vocabulary', zh: '商務字彙', gary: '擴充常用字彙', minnie: '強化專業搭配詞' },
    { en: 'Explaining Processes', zh: '說明流程', gary: '建立基本架構', minnie: '提高英文連貫性' },
    { en: 'Comparing Options', zh: '比較方案', gary: '加強比較句型', minnie: '補充比較理由' },
    { en: 'Clarifying Ideas', zh: '澄清想法', gary: '練習確認理解', minnie: '練習專業說明' },
  ],

  expressions: [
    { en: "I'd like to use AI to improve...", zh: '我想利用 AI 改善……' },
    { en: 'The main purpose is to...', zh: '主要目的是……' },
    { en: 'I started by...', zh: '我先從……開始。' },
    { en: "Once that's done, I can...", zh: '完成之後，我就可以……' },
    { en: 'Compared with..., this option is...', zh: '與……相比，這個選項……' },
    { en: 'One potential risk is...', zh: '一項潛在風險是……' },
    { en: 'We need to make sure that...', zh: '我們需要確保……' },
    { en: 'Have I understood that correctly?', zh: '我這樣理解正確嗎？' },
  ],

  vocab: [
    { en: 'Turn ideas into reality', zh: '將想法化為現實' },
    { en: 'Explore different options', zh: '探索不同選項' },
    { en: 'Clarify requirements', zh: '釐清需求' },
    { en: 'Summarize key findings', zh: '總結重要發現' },
    { en: 'Verify the information', zh: '驗證資訊' },
    { en: 'Keep track of progress', zh: '追蹤進度' },
  ],

  /* -------------------------------------------------------------- 口說練習 */
  tasks: [
    {
      who: 'Gary',
      minutes: 90,
      askEn: 'Explain how you use AI to build an English learning website.',
      askZh: '說明你如何使用 AI 建立英文學習網站，以及這個網站如何幫助你學習。',
      model: [
        "I created an English learning website using ChatGPT. The main purpose is to help me review what I've learned in class.",
        'I started by asking AI to create simple exercises. Then I added different activities to make learning more interesting.',
        "One thing I'd like to improve is the gamification feature. I want to make the website more interactive so that I can stay motivated and practice regularly.",
      ],
      aimZh: '練習目標：說明目的、描述步驟、介紹未來改善方向。此範例提供口說架構，並非逐字稿中所有網站功能的已驗證紀錄。',
    },
    {
      who: 'Minnie',
      minutes: 90,
      askEn: 'Explain how you use AI to manage your research and prepare for a presentation.',
      askZh: '說明你如何使用 AI 管理研究工作、蒐集文獻並準備簡報。',
      model: [
        'I use AI to help me manage my research projects and prepare for presentations.',
        'First, I explain my research goals and requirements. Then I ask AI to find relevant research papers and summarize the key findings.',
        'I also use AI to organize my schedule and keep track of upcoming deadlines.',
        'However, I need to be cautious when using AI for medical research. I always try to verify important information and check the original sources.',
      ],
      aimZh: '練習目標：使用 First、Then、Also、However，讓專業流程的英文表達更有條理。',
    },
  ],

  /* ---------------------------------------------------------------- 小測驗 */
  quizLeadZh: '請選出最自然、正確的英文句子。答案只在這台裝置上，重新整理就會清空，不會留下紀錄。',
  quiz: [
    {
      zh: '我會先從訂閱 ChatGPT 開始。',
      options: ["I'll start by subscribing to ChatGPT.", "I'll start to subscribing ChatGPT.", "I'll start with subscribe ChatGPT."],
      answer: 0,
    },
    {
      zh: '我們需要釐清專案需求。',
      options: ['We need clarify project requirements.', 'We need to clarify the project requirements.', 'We need clarifying the project requirements.'],
      answer: 1,
    },
    {
      zh: 'AI 可以提醒我即將到來的截止日期。',
      options: ['AI can remind me upcoming deadlines.', 'AI can remind to me of upcoming deadlines.', 'AI can remind me of upcoming deadlines.'],
      answer: 2,
    },
    {
      zh: '有些 AI 模型速度更快，而其他模型更便宜。',
      options: ['Some AI models are faster, while others are more affordable.', 'Some AI model is faster and other cheaper.', 'Some models more fast, some more cheap.'],
      answer: 0,
    },
    {
      zh: '我這樣理解正確嗎？',
      options: ['Is it my understanding?', 'Have I understood that correctly?', 'Am I understand correct?'],
      answer: 1,
    },
  ],

  /* ---------------------------------------------------------------- 作業 */
  homework: [
    { en: 'Review', zh: '閱讀自己的 12 組 Original / Improved 句子，了解主要修正。' },
    { en: 'Practice', zh: '選出最實用的五個句型，各寫一句與自身工作有關的英文。' },
    { en: 'Record', zh: '完成 90 秒英文錄音，分享自己使用 AI 的真實經驗。' },
    { en: 'Reflect', zh: '聽自己的錄音，找出一個可以改善的地方，再重新錄製一次。' },
  ],

  feedback: [
    {
      who: 'Gary',
      en: [
        'You did a good job sharing your experiences and expressing your ideas about AI. I especially liked how you connected AI tools to your own learning and work.',
        'Your creativity and willingness to communicate are strong points. Keep working on sentence structure and organizing your ideas so that others can understand you more easily.',
      ],
      zh: '你在分享 AI 使用經驗與想法方面表現不錯，尤其能把 AI 工具與自己的學習、工作連結起來。你的創意和主動表達意願是很好的優勢。接下來可以持續加強句子結構及想法組織，讓別人更容易理解你想說的內容。',
    },
    {
      who: 'Minnie',
      en: [
        'You did a good job explaining how you use AI in your professional work. Your examples were practical and informative, and you demonstrated strong critical thinking when discussing AI reliability.',
        'Your next challenge is to express these complex ideas more confidently and consistently in English. Focus on using complete sentences and clear transitions when explaining your workflows.',
      ],
      zh: '你很有效地分享了 AI 在專業工作中的實際應用。你的案例具體、有資訊價值，而且在討論 AI 可靠性時展現了良好的批判思考能力。下一步是更有信心、也更穩定地使用英文表達這些複雜想法。建議加強完整句子，以及說明流程時的連接詞運用。',
    },
  ],

  closing: {
    en: 'From Sharing Ideas to Communicating Clearly',
    zh: '從分享想法，到把話說清楚',
    body: [
      '這次討論中，Gary 和 Minnie 都展現了值得肯定的溝通能力：願意分享、能連結自身經驗，也能從別人的觀點獲得新想法。',
      '接下來的學習重點不是追求完全不犯錯，而是透過反覆練習，讓兩位學員更有能力使用英文清楚說明想法、分享經驗、提出問題，並參與專業討論。',
    ],
  },
};
