/* Class notes — the first lesson.

   The oldest of the write-ups. It lived inline in section 1 of the worksheet
   until that section had grown to a quarter of the whole page; it is a page
   of its own now, alongside the dated ones.

   The lesson's own date was never recorded, which is why this directory is
   not a date like the others. Section ids are unchanged (cn-1 … cn-13), so
   the topic index in the worksheet still points at the right places.

   Block types are documented at the top of ../content.js. */

const WORKSHEET = {
  title: 'Lesson One',
  titleZh: '第一堂課筆記',

  crumbs: [
    { href: '../', en: 'Business Clarity', zh: '商業策略與英文表達' },
    { href: '../#overview', en: '1. Business Overview', zh: '事業概述' },
  ],

  sibling: { href: '../pitch/', en: 'Business Introduction', zh: '事業介紹' },

  sections: [
    // ------------------------------------------------------------------
    {
      id: 'cn-1',
      n: 1,
      en: 'Lulu’s Business and AI Solutions',
      zh: 'Lulu 的事業與 AI 解決方案',
      blocks: [
        {
          t: 'bullets',
          label: 'Main Business Ideas',
          labelZh: '主要事業內容',
          items: [
            { en: 'provide AI agents for 24-hour customer service', zh: '提供 24 小時客服的 AI agents' },
            { en: 'provide AI agents for CRM', zh: '提供應用於 CRM 的 AI agents' },
            { en: 'automate entry-level and repetitive tasks', zh: '自動化基礎性與重複性的工作' },
            { en: 'provide AI-driven SaaS systems for solopreneurs', zh: '為一人企業／個人創業者提供 AI 驅動的 SaaS 系統' },
            { en: 'network communication equipment', zh: '網路通訊設備' },
            { en: 'management system', zh: '管理系統' },
            { en: 'e-commerce', zh: '電子商務' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Business Description',
          zh: '潤飾後的事業說明',
          items: [
            {
              en: 'Lulu’s company provides AI agents for 24-hour customer service, CRM, and entry-level or repetitive tasks. It also provides AI-driven SaaS solutions for solopreneurs and business owners.',
              zh: 'Lulu 的公司提供 AI agents，用於 24 小時客服、CRM，以及基礎性或重複性的工作。公司也為一人企業與企業主提供 AI 驅動的 SaaS 解決方案。',
            },
          ],
        },

        // 2 ---------------------------------------------------------------
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'cn-2',
      n: 2,
      en: 'Product Development and Business Model',
      zh: '產品開發與商業模式',
      blocks: [
        {
          t: 'phrases',
          en: 'Key Vocabulary and Collocations',
          zh: '重點字彙與搭配詞',
          items: [
            { en: 'functional products', zh: '功能導向的產品' },
            {
              en: 'logical products',
              zh: '邏輯導向的產品',
              tip: 'This expression may need more context. Depending on Lulu’s meaning, “logic-based products” or “process-driven products” may sound more natural.',
            },
            { en: 'minimum viable product (MVP)', zh: '最小可行產品' },
            { en: 'business model', zh: '商業模式' },
            { en: 'know your business model', zh: '了解自己的商業模式' },
            { en: 'find your unique value', zh: '找到自己的獨特價值' },
            { en: 'value proposition', zh: '價值主張', tip: 'Correction: “value proposition,” not “value preposition.”' },
            { en: 'replicate a model / replicate a process', zh: '複製模式／流程' },
            { en: 'get a patent / obtain a patent', zh: '取得專利' },
            { en: 'increase revenue', zh: '增加營收' },
            { en: 'efficiency', zh: '效率' },
            { en: 'flexibility', zh: '彈性' },
            { en: 'become rigid', zh: '變得僵化' },
          ],
        },
        {
          t: 'statements',
          en: 'Useful Business Logic',
          zh: '實用商業邏輯',
          items: [
            {
              en: 'Before adopting AI, business owners need to understand their own workflow, business model, and unique value.',
              zh: '在導入 AI 之前，企業主需要先了解自己的工作流程、商業模式與獨特價值。',
            },
            {
              en: 'A minimum viable product allows a company to test an idea before investing too many resources.',
              zh: 'MVP 可以讓公司在投入過多資源之前，先測試商業構想。',
            },
          ],
        },

        // 3 ---------------------------------------------------------------
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'cn-3',
      n: 3,
      en: 'Workflow, Organization, and Job Design',
      zh: '工作流程、組織與職務設計',
      blocks: [
        {
          t: 'phrases',
          en: 'Key Vocabulary and Collocations',
          zh: '重點字彙與搭配詞',
          items: [
            { en: 'know your own workflow first', zh: '先了解自己的工作流程' },
            { en: 'design the organization', zh: '設計組織架構' },
            { en: 'job description', zh: '職務說明' },
            { en: 'distinguish different roles', zh: '區分不同角色' },
            { en: 'keep records of work logs', zh: '保存工作紀錄', tip: 'More natural than “keep records of work log.”' },
            { en: 'repetitive tasks', zh: '重複性工作' },
            { en: 'entry-level tasks', zh: '基礎性工作' },
            { en: 'brainstorming', zh: '腦力激盪' },
            { en: 'communication', zh: '溝通' },
          ],
        },
        {
          t: 'statements',
          en: 'Key Idea',
          zh: '重點觀念',
          items: [
            {
              en: 'Companies should understand their workflow before deciding which tasks should be automated by AI.',
              zh: '企業在決定哪些工作要交給 AI 自動化之前，應該先清楚了解自己的工作流程。',
            },
            {
              en: 'AI may change job descriptions, but companies still need to distinguish which tasks require human judgment, communication, or creativity.',
              zh: 'AI 可能會改變職務內容，但企業仍需要區分哪些工作需要人類的判斷、溝通與創造力。',
            },
          ],
        },

        // 4 ---------------------------------------------------------------
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'cn-4',
      n: 4,
      en: 'The Role of Humans in the AI Era',
      zh: 'AI 時代中的人類角色',
      blocks: [
        {
          t: 'bullets',
          label: 'Original Ideas',
          labelZh: '原始表達',
          items: [
            { en: 'Interaction among people cannot be replaced by AI.', zh: '人與人之間的互動無法被 AI 取代。' },
            { en: 'Humans are still the decision-makers.', zh: '人類仍然是決策者。', tip: 'Correction: “Humans are,” not “Human is.”' },
            { en: 'brainstorming', zh: '腦力激盪' },
            { en: 'communication', zh: '溝通' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Statements',
          zh: '潤飾後的表達',
          items: [
            { en: 'Human interaction cannot be fully replaced by AI.', zh: '人與人之間的互動無法完全被 AI 取代。' },
            {
              en: 'AI can provide information and recommendations, but humans are still the final decision-makers.',
              zh: 'AI 可以提供資訊與建議，但人類仍然是最終決策者。',
            },
            {
              en: 'Brainstorming, communication, judgment, and relationship-building remain important human capabilities.',
              zh: '腦力激盪、溝通、判斷與建立關係，仍然是重要的人類能力。',
            },
          ],
        },

        // 5 ---------------------------------------------------------------
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'cn-5',
      n: 5,
      en: 'AI, Anxiety, and the Workplace',
      zh: 'AI、焦慮與職場',
      blocks: [
        {
          t: 'phrases',
          en: 'Key Vocabulary and Expressions',
          zh: '重點字彙與用語',
          items: [
            { en: 'anxious', zh: '感到焦慮的' },
            { en: 'anxiety', zh: '焦慮' },
            { en: 'AI-native', zh: 'AI 原生的／從一開始就以 AI 為核心' },
            { en: 'catch up with the development of AI', zh: '跟上 AI 的發展' },
            { en: 'embrace new tools and technologies', zh: '接受並採用新的工具與科技' },
            { en: 'vibe coding', zh: 'vibe coding／以自然語言與 AI 協作進行程式開發' },
          ],
        },
        {
          t: 'statements',
          en: 'Key Statements',
          zh: '重點句',
          items: [
            {
              en: 'People are anxious about keeping up with the rapid development of AI.',
              zh: '人們對於如何跟上 AI 快速發展感到焦慮。',
            },
            {
              en: 'As AI becomes part of everyday life, people need to rethink how they work and what value they provide.',
              zh: '當 AI 逐漸成為日常生活的一部分，人們需要重新思考自己的工作方式，以及自己能提供什麼價值。',
            },
          ],
        },
        {
          t: 'statements',
          en: 'Useful Sentence Starter',
          zh: '實用句子開頭',
          items: [
            { en: 'When AI becomes part of our everyday life, ...', zh: '當 AI 成為我們日常生活的一部分時，……' },
            {
              en: 'When AI becomes part of our everyday life, the key question will not simply be whether AI can replace jobs, but how people can work effectively with AI.',
              zh: '當 AI 成為日常生活的一部分，關鍵問題將不只是 AI 是否會取代工作，而是人們如何有效地與 AI 協作。',
              tip: 'Possible continuation.',
            },
          ],
        },

        // 6 ---------------------------------------------------------------
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'cn-6',
      n: 6,
      en: 'AI Adoption and Culture',
      zh: 'AI 採用與文化差異',
      blocks: [
        {
          t: 'statements',
          en: 'Key Idea',
          zh: '重點觀念',
          items: [
            {
              en: 'It takes much longer for Japanese people to embrace new tools and technologies.',
              zh: '日本人通常需要更長的時間接受新的工具與科技。',
            },
          ],
        },
        {
          t: 'statements',
          en: 'More Natural Versions',
          zh: '更自然的說法',
          items: [
            {
              en: 'It may take longer for some Japanese companies to adopt new tools and technologies.',
              zh: '有些日本企業可能需要較長時間才會採用新的工具與科技。',
            },
            {
              en: 'Some Japanese organizations tend to be more cautious about adopting new technology.',
              zh: '一些日本組織在採用新科技時往往比較謹慎。',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'Discussion Vocabulary',
          zh: '討論字彙',
          items: [
            { en: 'technology adoption', zh: '科技採用' },
            { en: 'organizational culture', zh: '組織文化' },
            { en: 'risk-averse culture', zh: '風險趨避文化' },
            { en: 'resistance to change', zh: '對改變的抗拒' },
            { en: 'embrace innovation', zh: '接受創新' },
            { en: 'adopt new technology', zh: '採用新科技' },
            { en: 'move quickly / move cautiously', zh: '快速行動／謹慎行動' },
          ],
        },

        // 7 ---------------------------------------------------------------
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'cn-7',
      n: 7,
      en: 'AI in Healthcare and Data Privacy',
      zh: 'AI 在醫療與資料隱私中的應用',
      blocks: [
        {
          t: 'phrases',
          en: 'Key Vocabulary and Collocations',
          zh: '重點字彙與搭配詞',
          items: [
            { en: 'healthcare system', zh: '醫療系統', tip: 'Usually written as one word: “healthcare.”' },
            { en: 'patient privacy', zh: '病患隱私' },
            { en: 'expose patients’ private information', zh: '洩露病患的私人資訊' },
            { en: 'training data', zh: '訓練資料' },
            {
              en: 'data used to train the model',
              zh: '用來訓練模型的資料',
              tip: 'More natural than “the material to train the model.”',
            },
            { en: 'sense of security', zh: '安全感' },
            { en: 'data security', zh: '資料安全' },
            { en: 'privacy concerns', zh: '隱私疑慮' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Statements',
          zh: '潤飾後的表達',
          items: [
            {
              en: 'One major concern is that AI systems may expose patients’ private information.',
              zh: '其中一項主要疑慮是 AI 系統可能洩露病患的私人資訊。',
            },
            {
              en: 'Healthcare organizations need to carefully manage the data used to train AI models.',
              zh: '醫療機構需要謹慎管理用於訓練 AI 模型的資料。',
            },
            {
              en: 'Patients need a strong sense of security before they are willing to trust AI-based healthcare services.',
              zh: '病患在願意信任 AI 醫療服務之前，需要有足夠的安全感。',
            },
          ],
        },

        // 8 ---------------------------------------------------------------
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'cn-8',
      n: 8,
      en: 'AI and Labor Regulations',
      zh: 'AI 與勞動法規',
      blocks: [
        {
          t: 'phrases',
          en: 'Key Vocabulary and Collocations',
          zh: '重點字彙與搭配詞',
          items: [
            { en: 'labor regulations', zh: '勞動法規' },
            { en: 'work logs', zh: '工作紀錄' },
            { en: 'employee monitoring', zh: '員工監控' },
            { en: 'workplace privacy', zh: '職場隱私' },
            { en: 'automate tasks', zh: '自動化工作' },
            { en: 'replace certain tasks', zh: '取代特定工作內容' },
            { en: 'redesign job roles', zh: '重新設計工作角色' },
          ],
        },
        {
          t: 'statements',
          en: 'Discussion Idea',
          zh: '討論重點',
          items: [
            {
              en: 'As AI is increasingly used in the workplace, companies need to consider not only efficiency but also labor regulations, employee privacy, and job design.',
              zh: '隨著 AI 在職場中的使用增加，企業不只要考量效率，也需要考量勞動法規、員工隱私與職務設計。',
            },
          ],
        },

        // 9 ---------------------------------------------------------------
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'cn-9',
      n: 9,
      en: 'Recent AI Forum and Business Inspiration',
      zh: '近期 AI 論壇與商業啟發',
      blocks: [
        {
          t: 'phrases',
          en: 'Key Expressions',
          zh: '重點用語',
          items: [
            {
              en: 'over the past two weeks',
              zh: '過去兩週',
              tip: 'More natural in most contexts than simply “these two weeks.”',
            },
            { en: 'attend an AI forum', zh: '參加 AI 論壇' },
            { en: 'get inspiration from the forum', zh: '從論壇獲得啟發' },
            { en: 'gain new perspectives', zh: '獲得新的觀點' },
            { en: 'learn from industry leaders', zh: '向產業領袖學習' },
            { en: 'business tycoons', zh: '商業大亨' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Statements',
          zh: '潤飾後的表達',
          items: [
            {
              en: 'Over the past two weeks, I attended an AI forum and gained several new perspectives.',
              zh: '過去兩週，我參加了一場 AI 論壇，並獲得了許多新的觀點。',
            },
            {
              en: 'I got a lot of inspiration from the forum, especially about how businesses should prepare for an AI-native future.',
              zh: '我從論壇中獲得很多啟發，尤其是在企業應如何為 AI-native 的未來做好準備這方面。',
            },
          ],
        },

        // 10 --------------------------------------------------------------
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'cn-10',
      n: 10,
      en: 'Travel and Personal Reflection',
      zh: '旅行與個人反思',
      blocks: [
        {
          t: 'phrases',
          en: 'Key Expressions',
          zh: '重點用語',
          items: [
            { en: 'have lots of good memories from the trip', zh: '從這次旅行留下許多美好回憶' },
            { en: 'gain inspiration from a trip', zh: '從旅行中獲得靈感' },
            { en: 'broaden your horizons', zh: '拓展視野' },
            { en: 'see how big the world is', zh: '看見世界有多大' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Sentence',
          zh: '潤飾後的句子',
          items: [
            { en: 'I have a lot of good memories from this trip.', zh: '這趟旅行為我留下了許多美好的回憶。' },
          ],
        },
        {
          t: 'statements',
          en: 'Quote / Reflection',
          zh: '引言與反思',
          items: [
            { en: 'If you want to know how big the world is, ...', zh: '', tip: 'Original idea.' },
            {
              en: 'If you want to understand how big the world is, you need to step outside your familiar environment.',
              zh: '如果你想真正了解世界有多大，就需要走出自己熟悉的環境。',
              tip: 'Possible polished version.',
            },
          ],
        },

        // 11 --------------------------------------------------------------
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'cn-11',
      n: 11,
      en: 'Other Vocabulary from the Discussion',
      zh: '其他課堂字彙',
      blocks: [
        {
          t: 'phrases',
          en: 'Other Vocabulary',
          zh: '其他字彙',
          items: [
            { en: 'ranking', zh: '排名' },
            { en: 'issues', zh: '議題／問題' },
            { en: 'slides', zh: '簡報投影片' },
            { en: 'a specific example', zh: '一個具體例子' },
            { en: 'two years ago', zh: '兩年前' },
            { en: 'conclusion', zh: '結論' },
            { en: 'tuna show', zh: '', tip: 'This expression depends on the specific event or attraction Lulu was referring to.' },
          ],
        },

        // 12 --------------------------------------------------------------
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'cn-12',
      n: 12,
      en: 'Core Business Ideas from the Discussion',
      zh: '本次討論的核心商業觀點',
      blocks: [
        {
          t: 'points',
          en: 'The discussion can be summarized into the following ideas',
          zh: '本次討論可以歸納為以下幾點',
          items: [
            {
              en: 'Know your workflow before using AI.',
              zh: '在使用 AI 前，先了解自己的工作流程。',
              bodyEn: 'Before deciding what AI should do, business owners need to understand how work is currently done.',
            },
            {
              en: 'AI should increase efficiency, not create unnecessary complexity.',
              zh: 'AI 應該提升效率，而不是增加不必要的複雜性。',
              bodyEn: 'Companies should use AI where it creates clear business value.',
            },
            {
              en: 'Human value needs to become clearer.',
              zh: '人類的獨特價值需要變得更清楚。',
              bodyEn: 'Communication, judgment, creativity, and human interaction remain important.',
            },
            {
              en: 'Business owners need to identify their unique value.',
              zh: '企業主必須找出真正難以被複製的價值。',
              bodyEn: 'If AI can replicate a process easily, companies need to ask what cannot be easily replicated.',
            },
            {
              en: 'AI adoption also creates risks.',
              zh: 'AI 的導入同時也會帶來隱私、勞動法規、資料安全與組織設計等風險。',
              bodyEn: 'Businesses need to consider privacy, labor regulations, data security, and organizational design.',
            },
          ],
        },

        // 13 --------------------------------------------------------------
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'cn-13',
      n: 13,
      en: 'Key Business Vocabulary to Review',
      zh: '建議複習的核心商業字彙',
      blocks: [
        {
          t: 'phrases',
          en: 'Review List',
          zh: '複習清單',
          numbered: true,
          items: [
            { en: 'AI agent', zh: 'AI 代理人' },
            { en: 'SaaS solution', zh: 'SaaS 解決方案' },
            { en: 'value proposition', zh: '價值主張' },
            { en: 'business model', zh: '商業模式' },
            { en: 'minimum viable product (MVP)', zh: '最小可行產品' },
            { en: 'workflow', zh: '工作流程' },
            { en: 'efficiency', zh: '效率' },
            { en: 'revenue', zh: '營收' },
            { en: 'job description', zh: '職務說明' },
            { en: 'replicate', zh: '複製' },
            { en: 'AI-native', zh: 'AI 原生' },
            { en: 'technology adoption', zh: '科技採用' },
            { en: 'labor regulations', zh: '勞動法規' },
            { en: 'training data', zh: '訓練資料' },
            { en: 'data privacy', zh: '資料隱私' },
            { en: 'decision-maker', zh: '決策者' },
            { en: 'flexibility', zh: '彈性' },
            { en: 'organizational design', zh: '組織設計' },
            { en: 'competitive value', zh: '競爭價值' },
            { en: 'unique value', zh: '獨特價值' },
          ],
        },
      ],
    },

  ],
};
