/* Class notes — 2026/08/17.

   A session page. Same shape as the worksheet's content file and rendered by
   the same ../render.js, minus the parts a worksheet needs and a session
   does not: no name fields, no purpose, no teacher-feedback band.

   Narration (`para`) is English only, because that is how the notes were
   taken; anything meant to be learned or said aloud carries its Chinese.
   Where the notes gave no Chinese for a phrase, none has been invented.

   Block types are documented at the top of ../content.js. */

const WORKSHEET = {
  title: '2026/08/17',
  titleZh: '課堂筆記',

  crumbs: [
    { href: '../', en: 'Business Clarity', zh: '商業策略與英文表達' },
    { href: '../#overview', en: '1. Business Overview', zh: '事業概述' },
  ],

  sections: [
    // ------------------------------------------------------------------
    {
      id: 'autonomy',
      n: 1,
      en: 'Building an Autonomous Team',
      zh: '建立有自主性的團隊',
      blocks: [
        {
          t: 'lead',
          en: 'This class moved from parenting to management. The through-line is the same idea as the previous discussion — autonomy and responsibility — now applied to employees, OKRs, incentives and leadership.',
          zh: '本堂課從教養延伸到管理。核心主軸與上一次討論相同——自主與責任——但這次應用在員工、OKR、獎酬制度與領導上。',
        },
        {
          t: 'para',
          en: 'Lulu believes that a strong team needs to understand both where the company is going and what kind of people should be part of the team. She wants employees to have autonomy, but that autonomy operates within a clear company culture.',
          zh: '',
        },
        {
          t: 'points',
          en: 'Three Important Ideas Mentioned',
          zh: '課堂提到的三個重點',
          items: [
            {
              en: 'Employees are allowed to make mistakes — but not the same mistake repeatedly.',
              zh: '',
              bodyEn: 'You can make mistakes, but you should learn from them and avoid making the same mistake again.',
            },
            {
              en: 'Employees should speak honestly and directly.',
              zh: '',
              bodyEn: 'Lulu encourages employees to raise problems openly instead of privately complaining about the company or other colleagues.',
            },
            {
              en: 'Employees are expected to continue growing.',
              zh: '',
              bodyEn: 'Training and professional development are part of the company culture.',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'build an autonomous team', zh: '建立自主團隊' },
            { en: 'give employees autonomy', zh: '給員工自主權' },
            { en: 'create a culture of accountability', zh: '建立當責文化' },
            { en: 'make mistakes and learn from them', zh: '從錯誤中學習' },
            { en: 'raise concerns openly', zh: '公開提出疑慮' },
            { en: 'speak honestly and directly', zh: '誠實直接地溝通' },
            { en: 'complain in private', zh: '私下抱怨' },
            { en: 'continuous professional development', zh: '持續專業發展' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Statement',
          zh: '潤飾後的表達',
          items: [
            {
              en: 'We want employees to have autonomy, but autonomy comes with accountability. They are allowed to make mistakes, but they are expected to learn from them.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'communication',
      n: 2,
      en: 'Creating a Culture of Open Communication',
      zh: '建立公開溝通的文化',
      blocks: [
        {
          t: 'para',
          en: 'Lulu does not want employees to complain privately or create informal “under-the-table” conversations.',
          zh: '',
        },
        {
          t: 'note',
          en: 'Language Clarification',
          zh: '用語釐清',
          bodyEn: '“Under the table” usually implies something secretive or illegal, such as an illegal payment. For Lulu’s intended meaning, better expressions are “complain in private,” “talk behind someone’s back,” or “raise concerns privately rather than openly.”',
          bodyZh: '「under the table」通常帶有隱密或違法的意味，例如私下的非法付款。若要表達 Lulu 的原意，用「complain in private」、「talk behind someone’s back」或「raise concerns privately rather than openly」會更合適。',
        },
        {
          t: 'statements',
          en: 'Better Business Language',
          zh: '更合適的商業說法',
          items: [
            {
              en: 'Employees are encouraged to speak openly about problems rather than complain about them in private.',
              zh: '',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Collocations',
          zh: '實用搭配詞',
          items: [
            { en: 'open communication', zh: '公開溝通' },
            { en: 'transparent communication', zh: '透明溝通' },
            { en: 'raise an issue', zh: '提出問題' },
            { en: 'raise a concern', zh: '提出疑慮' },
            { en: 'address a problem directly', zh: '直接處理問題' },
            { en: 'give honest feedback', zh: '給予誠實回饋' },
            { en: 'create psychological safety', zh: '建立心理安全感' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'growth',
      n: 3,
      en: 'Employee Growth and Learning Needs',
      zh: '員工成長與學習需求',
      blocks: [
        {
          t: 'para',
          en: 'Lulu believes employees need continuous training after joining the company. However, training should not be identical for everyone. The company tries to understand employees’ different learning needs.',
          zh: '',
        },
        {
          t: 'bullets',
          label: 'Key Concepts',
          labelZh: '重點概念',
          items: [
            { en: 'discover individual learning needs', zh: '' },
            { en: 'provide relevant training', zh: '' },
            { en: 'improve professional skills', zh: '' },
            { en: 'develop employee capabilities', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'identify learning needs', zh: '找出學習需求' },
            { en: 'conduct a training needs assessment', zh: '進行培訓需求分析' },
            { en: 'develop professional skills', zh: '培養專業技能' },
            { en: 'enhance employee capabilities', zh: '提升員工能力' },
            { en: 'close a skill gap', zh: '補足技能落差' },
            { en: 'invest in employee development', zh: '投資員工發展' },
            { en: 'provide targeted training', zh: '提供針對性培訓' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Statement',
          zh: '潤飾後的表達',
          items: [
            {
              en: 'We first identify each employee’s learning needs and then provide training that helps them develop the professional skills they need.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'okr-why',
      n: 4,
      en: 'Why Lulu Prefers OKRs to KPIs',
      zh: '為什麼 Lulu 偏好 OKR，而不是單純使用 KPI',
      blocks: [
        {
          t: 'lead',
          en: 'This was the largest business-management topic in the class.',
          zh: '這是本堂課最主要的管理主題。',
        },
        {
          t: 'para',
          en: 'Lulu said that she sees potential risks in relying too heavily on KPIs.',
          zh: '',
        },

        { t: 'label', en: 'Problem 1 — Employees May Not Understand “Why”', zh: '問題一：員工可能不理解「為什麼」' },
        {
          t: 'bullets',
          en: 'If employees only receive a number or performance target, they may know what they need to achieve but not understand:',
          zh: '',
          items: [
            { en: 'why it matters,', zh: '' },
            { en: 'how it connects to company strategy,', zh: '' },
            { en: 'how it supports the company mission.', zh: '' },
          ],
        },

        { t: 'label', en: 'Problem 2 — KPIs Can Create Silo Mentality', zh: '問題二：KPI 可能造成本位主義' },
        {
          t: 'para',
          en: 'Lulu described the risk of employees becoming focused only on their own target. If a salesperson has already reached an annual sales target by August, they may slow down or even ask customers to place orders next year because they are worried that next year’s KPI will increase. This can create behavior that benefits the individual but not the company.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'set a KPI', zh: '設定 KPI' },
            { en: 'set a performance target', zh: '設定績效目標' },
            { en: 'focus only on individual performance', zh: '只關注個人績效' },
            { en: 'lose sight of the bigger picture', zh: '忽略整體目標' },
            { en: 'create silo mentality', zh: '產生本位主義' },
            { en: 'optimize for the metric', zh: '只為了指標最佳化' },
            { en: 'understand the purpose behind the target', zh: '了解目標背後的目的' },
            { en: 'align individual goals with company goals', zh: '讓個人目標與公司目標一致' },
          ],
        },
        {
          t: 'statements',
          en: 'Strong Statement',
          zh: '有力的表達',
          items: [
            {
              en: 'One risk of KPIs is that employees may optimize for their own numbers instead of focusing on what is best for the company as a whole.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'okr-system',
      n: 5,
      en: 'Lulu’s OKR System',
      zh: 'Lulu 公司的 OKR 運作方式',
      blocks: [
        {
          t: 'para',
          en: 'Every October, the company announces its major direction and objectives for the following year. The company then explains why those objectives were selected. After that, the goals cascade through three levels.',
          zh: '',
        },
        {
          t: 'points',
          en: 'Three Levels',
          zh: '三個層級',
          items: [
            {
              en: 'Company',
              zh: '公司層級',
              bodyEn: 'The company defines major Objectives and Key Results.',
            },
            {
              en: 'Department',
              zh: '部門層級',
              bodyEn: 'Each department identifies which company KRs are relevant to it and turns them into departmental objectives.',
            },
            {
              en: 'Individual',
              zh: '個人層級',
              bodyEn: 'Employees then select the objectives that they will personally contribute to and define measurable results for them.',
            },
          ],
        },
        {
          t: 'note',
          en: 'A Particularly Important Idea',
          zh: '特別重要的一點',
          bodyEn: 'Employees actively choose which goals they will take ownership of. “Take ownership of” is stronger and clearer here than translating 認領 as “claim.”',
          bodyZh: '員工主動選擇自己要承擔的目標。在這個情境中，「take ownership of」比把「認領」直譯為「claim」更精準、也更有力量。',
        },
        {
          t: 'phrases',
          en: 'Useful Expressions',
          zh: '實用用語',
          items: [
            { en: 'set company-wide objectives', zh: '設定全公司的目標' },
            { en: 'define key results', zh: '定義關鍵成果' },
            { en: 'cascade goals through the organization', zh: '將目標逐層展開' },
            { en: 'align departmental goals with company objectives', zh: '部門目標與公司目標對齊' },
            { en: 'take ownership of an objective', zh: '主動承擔某項目標' },
            { en: 'select the objectives they want to contribute to', zh: '主動選擇要投入的目標' },
            { en: 'define measurable outcomes', zh: '定義可衡量成果' },
            { en: 'track progress', zh: '追蹤進度' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Explanation',
          zh: '潤飾後的說明',
          items: [
            {
              en: 'We first define the company’s annual objectives and key results. Departments then align their own objectives with the company’s direction. Finally, individual employees choose the objectives they want to take ownership of and define measurable results.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'accountability',
      n: 6,
      en: 'Autonomy + Accountability',
      zh: '自主 + 當責',
      blocks: [
        {
          t: 'lead',
          en: 'This is the strongest connection between Lulu’s parenting philosophy and her leadership philosophy.',
          zh: '這是 Lulu 的教養理念與領導理念之間最強的連結。',
        },
        {
          t: 'para',
          en: 'Employees are free to choose certain objectives, but once they choose them, they are responsible for delivering measurable results. That means management does not need to constantly supervise them.',
          zh: '',
        },
        {
          t: 'note',
          en: 'Important Distinction',
          zh: '重要區別',
          bodyEn: 'Responsibility is 責任; accountability is 當責 — being answerable for the final outcome. A person may have responsibility for a task, but accountability emphasizes being answerable for the result.',
          bodyZh: 'responsibility 是「責任」，accountability 是「當責」，指對最終結果負責。一個人可能負責執行某項任務，但 accountability 強調的是必須為結果負責。',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'take responsibility for a task', zh: '' },
            { en: 'take ownership of an objective', zh: '' },
            { en: 'be accountable for the outcome', zh: '' },
            { en: 'hold someone accountable', zh: '' },
            { en: 'create a culture of accountability', zh: '' },
            { en: 'deliver on a commitment', zh: '' },
            { en: 'follow through on a goal', zh: '' },
          ],
        },
        {
          t: 'statements',
          en: 'Key Statement',
          zh: '重點句',
          items: [
            {
              en: 'Employees have the freedom to choose certain goals, but once they make that choice, they are accountable for the results.',
              zh: '',
              tip: 'This sentence captures Lulu’s management philosophy very well.',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'weighting',
      n: 7,
      en: 'Challenging Goals and Weighting',
      zh: '挑戰性目標與權重',
      blocks: [
        {
          t: 'para',
          en: 'Employees may have several objectives, and the total weighting of those objectives equals 100%. The company also encourages employees to choose challenging objectives. Lulu explained that harder objectives may receive a higher weighting.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Language',
          zh: '實用用語',
          items: [
            { en: 'assign a weighting to each objective', zh: '為每個目標設定權重' },
            { en: 'set challenging goals', zh: '設定挑戰性目標' },
            { en: 'level of difficulty', zh: '難度' },
            { en: 'stretch goal', zh: '挑戰性目標' },
            { en: 'performance weighting', zh: '績效權重' },
            { en: 'measure goal achievement', zh: '衡量目標達成程度' },
          ],
        },
        {
          t: 'statements',
          en: 'Useful Sentence',
          zh: '實用句',
          items: [
            {
              en: 'We encourage employees to set challenging goals, so the weighting may also reflect the level of difficulty.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'incentives',
      n: 8,
      en: 'Incentives and Bonuses',
      zh: '誘因與獎金制度',
      blocks: [
        {
          t: 'para',
          en: 'Because complete self-management may be difficult in practice, Lulu’s company also uses incentives.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Key Word',
          zh: '重點字',
          items: [{ en: 'incentive', zh: '誘因、激勵措施' }],
        },
        {
          t: 'bullets',
          label: 'Examples',
          labelZh: '常見用法',
          items: [
            { en: 'financial incentive', zh: '' },
            { en: 'performance incentive', zh: '' },
            { en: 'incentive bonus', zh: '' },
            { en: 'incentive trip', zh: '' },
          ],
        },
        {
          t: 'para',
          en: 'Lulu’s company distributes bonuses twice a year. One bonus is connected to performance, while the year-end bonus is linked to the company’s gross profit.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'provide an incentive', zh: '提供誘因' },
            { en: 'tie bonuses to performance', zh: '將獎金與績效連結' },
            { en: 'performance-based bonus', zh: '績效獎金' },
            { en: 'profit-sharing bonus', zh: '利潤分享獎金' },
            { en: 'align incentives with business outcomes', zh: '讓誘因與商業成果一致' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'margin',
      n: 9,
      en: 'Revenue vs. Gross Profit',
      zh: '營業額與毛利',
      blocks: [
        {
          t: 'para',
          en: 'Lulu made an important business point: her company does not only look at revenue, because revenue does not reflect cost. Instead, they pay considerable attention to gross profit.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Key Vocabulary',
          zh: '重點字彙',
          items: [
            { en: 'revenue', zh: '營收／營業額' },
            { en: 'cost', zh: '成本' },
            { en: 'gross profit', zh: '毛利' },
            { en: 'gross margin', zh: '毛利率' },
            { en: 'net profit', zh: '淨利' },
          ],
        },
        {
          t: 'bullets',
          label: 'Lulu’s Reasoning',
          labelZh: 'Lulu 的理由',
          en: 'If employees only care about revenue, they may:',
          zh: '',
          items: [
            { en: 'sell more,', zh: '' },
            { en: 'give large discounts,', zh: '' },
            { en: 'ignore costs,', zh: '' },
            { en: 'accept low-margin projects.', zh: '' },
          ],
        },
        {
          t: 'para',
          en: 'That can make revenue look good while hurting the business.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'focus on profitability rather than revenue alone', zh: '' },
            { en: 'protect the gross margin', zh: '' },
            { en: 'meet a minimum margin requirement', zh: '' },
            { en: 'take cost into account', zh: '' },
            { en: 'improve profitability', zh: '' },
            { en: 'negotiate with suppliers', zh: '' },
            { en: 'manage supplier relationships', zh: '' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Statement',
          zh: '潤飾後的表達',
          items: [
            {
              en: 'We do not evaluate projects based on revenue alone because revenue can hide the impact of cost. We pay more attention to gross profit and require every project to meet a minimum margin.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'transparency',
      n: 10,
      en: 'Financial Transparency',
      zh: '財務透明',
      blocks: [
        {
          t: 'para',
          en: 'Lulu said that the company makes project profitability and gross-profit information visible internally. The purpose is to make employees more financially aware. Instead of Lulu repeatedly telling people to control costs or negotiate with suppliers, employees can see how their decisions affect profitability.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'financial transparency', zh: '財務透明' },
            { en: 'share financial information internally', zh: '內部分享財務資訊' },
            { en: 'understand the financial impact', zh: '了解財務影響' },
            { en: 'develop commercial awareness', zh: '培養商業敏感度' },
            { en: 'pay attention to margins', zh: '注意毛利' },
            { en: 'manage costs proactively', zh: '主動管理成本' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Statement',
          zh: '潤飾後的表達',
          items: [
            {
              en: 'We make our project margins transparent so employees can understand how their decisions affect profitability.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'collaboration',
      n: 11,
      en: 'Collaboration vs. Cooperation',
      zh: 'Collaboration 與 Cooperation',
      blocks: [
        {
          t: 'para',
          en: 'This distinction came up when discussing the risks of KPI-driven silo behavior.',
          zh: '',
        },
        {
          t: 'points',
          en: 'The Difference',
          zh: '兩者的差別',
          items: [
            {
              en: 'Cooperation',
              zh: '互相協助、配合',
              bodyEn: 'People cooperate when they help or support each other. — The sales and operations teams cooperate when necessary.',
            },
            {
              en: 'Collaboration',
              zh: '共同協作',
              bodyEn: 'People collaborate when they actively work together toward a shared result. — Sales, operations, and procurement collaborate to deliver the project successfully.',
            },
          ],
        },
        {
          t: 'note',
          en: 'Which One for Lulu',
          zh: '哪一個更適合 Lulu',
          bodyEn: 'For Lulu’s leadership context, collaboration is often the stronger word.',
          bodyZh: '在 Lulu 的領導情境中，collaboration 通常是更有力的用字。',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'cross-functional collaboration', zh: '' },
            { en: 'collaborate across departments', zh: '' },
            { en: 'work toward a shared objective', zh: '' },
            { en: 'break down silos', zh: '' },
            { en: 'share responsibility for results', zh: '' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'silo',
      n: 12,
      en: 'Self-Centered Behavior and Silo Mentality',
      zh: '本位主義',
      blocks: [
        {
          t: 'para',
          en: 'The class discussed 本位主義. Depending on context, several English expressions are useful.',
          zh: '',
        },
        {
          t: 'bullets',
          label: 'Options',
          labelZh: '可用說法',
          items: [
            { en: 'self-centered behavior', zh: '' },
            { en: 'silo mentality', zh: '' },
            { en: 'protect one’s own interests', zh: '' },
            { en: 'focus narrowly on one’s own department', zh: '' },
            { en: 'put individual goals ahead of company goals', zh: '' },
          ],
        },
        {
          t: 'statements',
          en: 'Best Fit for the KPI Example',
          zh: '最適合 KPI 例子的說法',
          items: [
            {
              en: 'Excessive focus on individual KPIs can create a silo mentality.',
              zh: '',
              tip: 'For Lulu’s KPI example, “silo mentality” is probably the most useful business expression.',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'facilitate',
      n: 13,
      en: 'Facilitate vs. Coach vs. Guide',
      zh: 'Facilitate、Coach、Guide 的差異',
      blocks: [
        {
          t: 'lead',
          en: 'An important vocabulary discussion, because these verbs communicate different leadership styles.',
          zh: '這是很重要的字彙討論，因為這三個動詞代表不同的領導風格。',
        },
        {
          t: 'points',
          en: 'The Three Verbs',
          zh: '三個動詞',
          items: [
            {
              en: 'Guide',
              zh: '指引方向',
              bodyEn: 'To provide direction or advice. — I guide employees when they face a new situation.',
            },
            {
              en: 'Facilitate',
              zh: '引導、促成',
              bodyEn: 'To create a process or environment that helps people reach a result themselves. — My role is to facilitate the discussion rather than give everyone the answer.',
            },
            {
              en: 'Coach',
              zh: '教練式引導',
              bodyEn: 'To help someone discover their own goals, thinking, and solutions, often through questions. — I coach employees by asking questions that help them find their own solutions.',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Term',
          zh: '實用用語',
          items: [{ en: 'meeting facilitator', zh: '會議引導者' }],
        },
        {
          t: 'note',
          en: 'Key Insight',
          zh: '重點觀察',
          bodyEn: 'The verbs Lulu chooses when describing leadership — direct, manage, coach, facilitate, empower — also communicate her leadership philosophy.',
          bodyZh: 'Lulu 在描述領導時所選用的動詞——direct、manage、coach、facilitate、empower——本身就傳達了她的領導理念。',
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'action-learning',
      n: 14,
      en: 'Action Learning',
      zh: '行動學習',
      blocks: [
        {
          t: 'para',
          en: 'Lulu described an approach where participants bring a real problem into a meeting. Through repeated questioning and clarification, the group tries to identify the real underlying problem. This appears closely related to action learning.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'action learning', zh: '行動學習' },
            { en: 'bring a real business problem to the session', zh: '' },
            { en: 'ask probing questions', zh: '' },
            { en: 'clarify the problem', zh: '' },
            { en: 'identify the root cause', zh: '' },
            { en: 'challenge assumptions', zh: '' },
            { en: 'learn through problem-solving', zh: '' },
            { en: 'facilitate group learning', zh: '' },
          ],
        },
        {
          t: 'statements',
          en: 'Useful Sentence',
          zh: '實用句',
          items: [
            {
              en: 'In action learning, participants work on real problems and use questions to identify the root cause rather than jumping directly to solutions.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'chunks',
      n: 15,
      en: 'Learning English in Chunks',
      zh: '用 Chunks 學英文',
      blocks: [
        {
          t: 'para',
          en: 'This discussion came from Lulu feeling that words such as solve or develop were difficult to say naturally.',
          zh: '',
        },
        {
          t: 'note',
          en: 'The Key Recommendation',
          zh: '核心建議',
          bodyEn: 'Do not practice only the isolated word. Practice the whole chunk — solve a problem, solve the problem by himself, develop professional skills, develop logical thinking, develop his thinking skills, a unique way of thinking.',
          bodyZh: '不要只練單字，要練整個語塊。這一點對 Lulu 特別重要，因為她通常理解字彙，但在講出完整句子時會卡住。',
        },
        {
          t: 'bullets',
          label: 'High-Value Chunks to Practice',
          labelZh: '高價值語塊',
          items: [
            { en: 'solve a problem', zh: '' },
            { en: 'take responsibility', zh: '' },
            { en: 'develop professional skills', zh: '' },
            { en: 'develop logical thinking', zh: '' },
            { en: 'a unique way of thinking', zh: '' },
            { en: 'take ownership of', zh: '' },
            { en: 'be accountable for', zh: '' },
            { en: 'align with company goals', zh: '' },
            { en: 'increase gross profit', zh: '' },
            { en: 'provide an incentive', zh: '' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'review',
      n: 16,
      en: 'Review Vocabulary from the Previous Class',
      zh: '前一堂課的重點複習',
      blocks: [
        {
          t: 'bullets',
          label: 'Reviewed Expressions',
          labelZh: '複習的用語',
          items: [
            { en: 'give children choices', zh: '' },
            { en: 'require them to take responsibility', zh: '' },
            { en: 'underestimate', zh: '' },
            { en: 'overestimate', zh: '' },
            { en: 'intervene', zh: '' },
            { en: 'consequence', zh: '' },
            { en: 'result', zh: '' },
            { en: 'achievement', zh: '' },
            { en: 'guide rather than decide', zh: '' },
            { en: 'a unique way of thinking', zh: '' },
          ],
        },
        {
          t: 'points',
          en: 'Result vs. Consequence vs. Achievement',
          zh: '三個「結果」的差別',
          items: [
            {
              en: 'result',
              zh: '中性的「結果」',
              bodyEn: 'The result was better than expected.',
            },
            {
              en: 'consequence',
              zh: '通常指某個行動帶來的後果，常帶負面語感',
              bodyEn: 'Employees need to understand the consequences of poor decisions.',
            },
            {
              en: 'achievement',
              zh: '正面的「成果／成就」',
              bodyEn: 'Reaching the annual target was a major achievement.',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'philosophy',
      n: '★',
      en: 'Core Management Philosophy from This Class',
      zh: '本堂課的核心管理理念',
      blocks: [
        {
          t: 'lead',
          en: 'The discussion can be reduced to one management model: Direction → Choice → Ownership → Accountability → Collaboration → Results.',
          zh: '整堂討論可以濃縮成一個管理模型：方向 → 選擇 → 承擔 → 當責 → 協作 → 成果。',
        },
        {
          t: 'points',
          en: 'The Six Steps',
          zh: '六個步驟',
          items: [
            { en: 'Direction', zh: '方向', bodyEn: 'Leadership explains where the company is going.' },
            { en: 'Choice', zh: '選擇', bodyEn: 'Teams and individuals actively choose relevant objectives.' },
            { en: 'Ownership', zh: '承擔', bodyEn: 'Employees take ownership of what they choose.' },
            {
              en: 'Accountability',
              zh: '當責',
              bodyEn: 'Results must be measurable and employees are accountable for delivery.',
            },
            {
              en: 'Collaboration',
              zh: '協作',
              bodyEn: 'People need to work across functions rather than optimize only their own KPIs.',
            },
            {
              en: 'Results',
              zh: '成果',
              bodyEn: 'Performance is connected not only to revenue but also to profitability and company-wide outcomes.',
            },
          ],
        },
        {
          t: 'statements',
          en: 'A Strong Summary Lulu Could Use',
          zh: 'Lulu 可以直接使用的總結',
          items: [
            {
              en: 'My management philosophy is to give people autonomy within a clear strategic direction. Employees can choose the goals they want to contribute to, but once they take ownership of an objective, they are accountable for the outcome. We also encourage collaboration because individual performance should ultimately contribute to the success of the whole company.',
              zh: '我的管理理念是在清楚的策略方向下給員工自主權。員工可以選擇自己想投入的目標，但一旦承擔了某項目標，就必須對結果負責。同時，我們也重視協作，因為個人績效最終必須對整個公司的成功產生貢獻。',
            },
          ],
        },
        {
          t: 'note',
          en: 'What This Session Shows',
          zh: '這堂課看見的 Lulu',
          bodyEn: 'This session gives a much clearer picture of Lulu as a business owner: her recurring principle is not simply “freedom,” but “freedom within alignment, followed by accountability for results.”',
          bodyZh: '這堂課讓 Lulu 身為企業主的輪廓更清楚：她反覆出現的原則不只是「自由」，而是「在對齊方向下的自由，並且為結果負責」。',
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'top15',
      n: '✓',
      en: 'Top 15 Expressions for Lulu to Review',
      zh: '建議複習的 15 個用語',
      blocks: [
        {
          t: 'phrases',
          en: 'Review List',
          zh: '複習清單',
          numbered: true,
          items: [
            { en: 'give employees autonomy', zh: '給員工自主權' },
            { en: 'create a culture of accountability', zh: '建立當責文化' },
            { en: 'take ownership of an objective', zh: '承擔目標' },
            { en: 'be accountable for the outcome', zh: '對結果負責' },
            { en: 'align individual goals with company goals', zh: '個人與公司目標對齊' },
            { en: 'cascade goals through the organization', zh: '將目標逐層展開' },
            { en: 'define measurable outcomes', zh: '定義可衡量成果' },
            { en: 'identify learning needs', zh: '找出學習需求' },
            { en: 'develop professional skills', zh: '發展專業能力' },
            { en: 'create a silo mentality', zh: '產生本位主義' },
            { en: 'cross-functional collaboration', zh: '跨部門協作' },
            { en: 'provide an incentive', zh: '提供誘因' },
            { en: 'protect the gross margin', zh: '維持毛利率' },
            { en: 'develop commercial awareness', zh: '培養商業敏感度' },
            { en: 'facilitate rather than control', zh: '引導而非控制' },
          ],
        },
      ],
    },
  ],
};
