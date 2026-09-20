/* Class notes — 2026/09/07.

   A session page. Same shape as the worksheet's content file and rendered by
   the same ../render.js, minus the parts a worksheet needs and a session
   does not: no name fields, no purpose, no teacher-feedback band.

   Narration (`para`) is English only, because that is how the notes were
   taken; anything meant to be learned or said aloud carries its Chinese.
   Where the notes gave no Chinese for a phrase, none has been invented.

   Block types are documented at the top of ../content.js. */

const WORKSHEET = {
  title: '2026/09/07',
  titleZh: '課堂筆記',

  crumbs: [
    { href: '../', en: 'Business Clarity', zh: '商業策略與英文表達' },
    { href: '../#overview', en: '1. Business Overview', zh: '事業概述' },
  ],

  sections: [
    // ------------------------------------------------------------------
    {
      id: 'saas-project',
      n: 1,
      en: 'Recent SaaS Project and Client Feedback',
      zh: '最近完成的 SaaS 專案與客戶回饋',
      blocks: [
        {
          t: 'lead',
          en: 'This class was about the product itself. Compared with the earlier sessions, it gives a much clearer explanation of what Lulu’s AI-driven HR SaaS actually does and why companies would pay for it.',
          zh: '這堂課聚焦在產品本身。相較於先前幾次課程，這次更清楚說明了 Lulu 的 AI HR SaaS 究竟在做什麼，以及企業為什麼願意付費。',
        },
        {
          t: 'para',
          en: 'Lulu had just finished a major SaaS project. After a period of intense work, she felt relieved.',
          zh: '',
        },
        {
          t: 'bullets',
          en: 'The project was important because:',
          zh: '',
          items: [
            { en: 'her team spent significant time developing the system,', zh: '' },
            { en: 'the system recently went online,', zh: '' },
            { en: 'the client was very satisfied,', zh: '' },
            { en: 'the result exceeded the client’s expectations.', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'finish a major project', zh: '完成大型專案' },
            { en: 'feel relieved', zh: '鬆了一口氣' },
            { en: 'go live', zh: '正式上線' },
            { en: 'launch the system', zh: '系統上線' },
            { en: 'exceed the client’s expectations', zh: '超出客戶期待' },
            { en: 'receive positive client feedback', zh: '獲得正面客戶回饋' },
            { en: 'Software as a Service (SaaS)', zh: '軟體即服務' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Version',
          zh: '潤飾後的說法',
          items: [
            {
              en: 'We recently launched a major SaaS project, and the client was very satisfied with the result. In fact, the system performed better than they expected.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'what-it-does',
      n: 2,
      en: 'What Lulu’s SaaS System Does',
      zh: 'Lulu 的 SaaS 系統解決什麼問題',
      blocks: [
        {
          t: 'bullets',
          en: 'Lulu explained that her system is designed to help organizations:',
          zh: '',
          items: [
            { en: 'reduce costs,', zh: '' },
            { en: 'improve efficiency,', zh: '' },
            { en: 'hire suitable talent,', zh: '' },
            { en: 'train employees,', zh: '' },
            { en: 'improve employee performance,', zh: '' },
            { en: 'retain talent.', zh: '' },
          ],
        },
        {
          t: 'note',
          en: 'Why This Matters',
          zh: '為什麼這是進步',
          bodyEn: 'This is an important improvement in Lulu’s business explanation, because it moves from simply saying “we provide an AI system” to explaining the business outcomes.',
          bodyZh: '這是 Lulu 在商業說明上的重要進步：從單純說「我們提供一套 AI 系統」，進展到說明實際帶來的商業成果。',
        },
        {
          t: 'phrases',
          en: 'Useful Collocations',
          zh: '實用搭配詞',
          items: [
            { en: 'lower operating costs', zh: '降低營運成本' },
            { en: 'increase efficiency', zh: '提升效率' },
            { en: 'improve productivity', zh: '提升生產力' },
            { en: 'hire suitable talent', zh: '招募適合的人才' },
            { en: 'develop employees', zh: '發展員工能力' },
            { en: 'retain key talent', zh: '留住關鍵人才' },
            { en: 'improve organizational performance', zh: '提升組織績效' },
          ],
        },
        {
          t: 'statements',
          en: 'Strong Business Statement',
          zh: '有力的商業表達',
          items: [
            {
              en: 'Our SaaS platform helps organizations reduce costs, improve efficiency, hire suitable talent, develop employees, and improve talent retention.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'organization',
      n: 3,
      en: 'Organization vs. Organize',
      zh: 'Organization 與 Organize',
      blocks: [
        {
          t: 'lead',
          en: 'One of Lulu’s useful language corrections.',
          zh: '這是本堂課實用的用字修正之一。',
        },
        {
          t: 'points',
          en: 'The Difference',
          zh: '兩者的差別',
          items: [
            {
              en: 'organization',
              zh: '組織（名詞）',
              bodyEn: 'A noun meaning an organization, company, institution, or organized group. — Our system helps organizations manage talent more effectively.',
            },
            {
              en: 'organize',
              zh: '籌辦、安排（動詞）',
              bodyEn: 'A verb meaning to arrange or plan something. — We organize workshops for our clients.',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Contrast',
          zh: '對照用法',
          items: [
            { en: 'organization', zh: '組織' },
            { en: 'organize an event', zh: '籌辦活動' },
            { en: 'organizational structure', zh: '組織架構' },
            { en: 'organizational needs', zh: '組織需求' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'retain',
      n: 4,
      en: 'Retain Talent vs. Leave Talent',
      zh: '留住人才的正確說法',
      blocks: [
        {
          t: 'para',
          en: 'Lulu originally used “leave the talent,” but leave means 離開 — the opposite of what she meant.',
          zh: '',
        },
        {
          t: 'fixes',
          en: 'More Natural Wording',
          zh: '更自然的說法',
          items: [
            {
              from: 'leave the talent',
              to: 'retain talent',
              also: 'keep talent / retain employees / improve employee retention',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Collocations',
          zh: '實用搭配詞',
          items: [
            { en: 'talent retention', zh: '人才留任' },
            { en: 'employee retention', zh: '員工留任' },
            { en: 'retention rate', zh: '留任率' },
            { en: 'retain high-performing employees', zh: '留住高績效員工' },
            { en: 'reduce employee turnover', zh: '降低員工流動率' },
          ],
        },
        {
          t: 'statements',
          en: 'Useful Sentence',
          zh: '實用句',
          items: [
            {
              en: 'One of our key goals is to help companies attract and retain suitable talent.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'right-talent',
      n: 5,
      en: 'Hiring the Right or Suitable Talent',
      zh: '找到適合的人才',
      blocks: [
        {
          t: 'para',
          en: 'A major part of Lulu’s product is helping companies identify suitable employees. The key idea is that hiring should not be based only on technical skills.',
          zh: '',
        },
        {
          t: 'bullets',
          en: 'Companies also need to consider:',
          zh: '',
          items: [
            { en: 'company values,', zh: '' },
            { en: 'professional competencies,', zh: '' },
            { en: 'management competencies,', zh: '' },
            { en: 'communication skills,', zh: '' },
            { en: 'project-management capability,', zh: '' },
            { en: 'role requirements.', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'hire the right person for the role', zh: '招募適合該職位的人' },
            { en: 'find suitable candidates', zh: '找到合適候選人' },
            { en: 'match candidates with job requirements', zh: '將候選人與職務需求配對' },
            { en: 'assess professional competencies', zh: '評估專業職能' },
            { en: 'assess cultural fit', zh: '評估文化適配度' },
            { en: 'evaluate core competencies', zh: '評估核心職能' },
            { en: 'identify skill gaps', zh: '找出技能落差' },
          ],
        },
        {
          t: 'fixes',
          en: 'Language Note',
          zh: '用字提醒',
          items: [
            {
              from: 'correct talent',
              to: 'suitable talent',
              also: 'the right talent for the role',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'competency',
      n: 6,
      en: 'Competency Models',
      zh: '職能模型',
      blocks: [
        {
          t: 'lead',
          en: 'One of the most important business concepts in the class.',
          zh: '這是本堂課最重要的商業概念之一。',
        },
        {
          t: 'bullets',
          en: 'Lulu explained that her service helps companies build competency models. These models can include:',
          zh: '',
          items: [
            { en: 'core values,', zh: '' },
            { en: 'professional competencies,', zh: '' },
            { en: 'management competencies,', zh: '' },
            { en: 'communication skills,', zh: '' },
            { en: 'project-management skills.', zh: '' },
          ],
        },
        {
          t: 'para',
          en: 'Different companies need different competency models because their values and requirements are different.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Terminology',
          zh: '重點術語',
          items: [
            { en: 'competency model', zh: '職能模型' },
            { en: 'competency framework', zh: '職能架構' },
            { en: 'core competency', zh: '核心職能' },
            { en: 'professional competency', zh: '專業職能' },
            { en: 'managerial competency', zh: '管理職能' },
            { en: 'competency level', zh: '職能層級' },
            { en: 'competency gap', zh: '職能落差' },
          ],
        },
        {
          t: 'statements',
          en: 'Strong Explanation',
          zh: '有力的說明',
          items: [
            {
              en: 'Each company needs its own competency model because different organizations value different behaviors, skills, and capabilities.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'ai-models',
      n: 7,
      en: 'Using AI to Build and Apply Competency Models',
      zh: '使用 AI 建立與應用職能模型',
      blocks: [
        {
          t: 'bullets',
          en: 'Lulu explained that clients can provide information such as:',
          zh: '',
          items: [
            { en: 'company introductions,', zh: '' },
            { en: 'business information,', zh: '' },
            { en: 'company values,', zh: '' },
            { en: 'job requirements,', zh: '' },
            { en: 'existing HR materials.', zh: '' },
          ],
        },
        {
          t: 'para',
          en: 'The AI can then analyze the information and help build a competency model. Once the model is built, AI can compare employees or candidates against that model.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'upload company information', zh: '上傳公司資料' },
            { en: 'analyze organizational data', zh: '分析組織資料' },
            { en: 'build a competency model', zh: '建立職能模型' },
            { en: 'score candidates against the model', zh: '根據模型為候選人評分' },
            { en: 'evaluate candidate suitability', zh: '評估候選人適配度' },
            { en: 'support talent decisions', zh: '支援人才決策' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Explanation',
          zh: '潤飾後的說明',
          items: [
            {
              en: 'The system analyzes company information and helps build a customized competency model. It can then evaluate candidates or employees against that model.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'ai-assistant',
      n: 8,
      en: 'AI Is an Assistant, Not the Decision-Maker',
      zh: 'AI 是輔助者，而不是決策者',
      blocks: [
        {
          t: 'statements',
          en: 'A Core Product Principle',
          zh: '核心產品原則',
          items: [
            { en: 'AI should support decisions, not replace human decision-makers.', zh: '' },
          ],
        },
        {
          t: 'bullets',
          en: 'The AI can:',
          zh: '',
          items: [
            { en: 'analyze,', zh: '' },
            { en: 'compare,', zh: '' },
            { en: 'score,', zh: '' },
            { en: 'identify patterns,', zh: '' },
            { en: 'provide recommendations.', zh: '' },
          ],
        },
        {
          t: 'para',
          en: 'But humans still make the final decision.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'AI-assisted decision-making', zh: 'AI 輔助決策' },
            { en: 'support human judgment', zh: '支援人類判斷' },
            { en: 'provide recommendations', zh: '提供建議' },
            { en: 'assist the decision-making process', zh: '協助決策流程' },
            { en: 'human-in-the-loop', zh: '人類參與決策流程' },
            { en: 'final decision-maker', zh: '最終決策者' },
          ],
        },
        {
          t: 'statements',
          en: 'Strong Business Sentence',
          zh: '有力的商業表達',
          items: [
            {
              en: 'AI is not the final decision-maker. It provides analysis and recommendations to support human judgment.',
              zh: '',
              tip: 'This connects directly with an earlier idea of Lulu’s: “Humans are still the decision-makers.”',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'competencies-roles',
      n: 9,
      en: 'Communication and Project-Management Competencies',
      zh: '溝通與專案管理職能',
      blocks: [
        {
          t: 'para',
          en: 'Lulu explained that different positions require different competencies. For example, in her company, project-management capability is important because much of the company’s revenue comes from projects. Different employees may have different levels of project-management capability.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'communication skills', zh: '溝通能力' },
            { en: 'project-management skills', zh: '專案管理能力' },
            { en: 'project-management mindset', zh: '專案管理思維' },
            { en: 'skill level', zh: '技能層級' },
            { en: 'competency level', zh: '職能層級' },
            { en: 'key indicators', zh: '關鍵指標' },
            { en: 'performance indicators', zh: '績效指標' },
          ],
        },
        {
          t: 'statements',
          en: 'Useful Sentence',
          zh: '實用句',
          items: [
            {
              en: 'Different roles require different competency levels, so we use different indicators to evaluate employee capability and performance.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'why-leave',
      n: 10,
      en: 'Why Employees Leave',
      zh: '為什麼員工離職',
      blocks: [
        {
          t: 'lead',
          en: 'The class then moved from hiring to retention. Lulu’s point was that companies first need to understand why employees want to leave.',
          zh: '討論接著從招募轉向留才。Lulu 認為企業必須先了解：員工為什麼想離開？',
        },
        {
          t: 'para',
          en: 'Her system uses AI agents and employee data to identify changes in behavior and possible retention risks.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'identify the reasons employees leave', zh: '找出員工離職原因' },
            { en: 'understand employee behavior', zh: '了解員工行為' },
            { en: 'track behavioral changes', zh: '追蹤行為變化' },
            { en: 'identify retention risks', zh: '找出留才風險' },
            { en: 'predict turnover risk', zh: '預測離職風險' },
            { en: 'employee turnover', zh: '員工流動' },
            { en: 'retention risk', zh: '留才風險' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'privacy',
      n: 11,
      en: 'De-identification and Employee Privacy',
      zh: '去識別化與員工隱私',
      blocks: [
        {
          t: 'para',
          en: 'An important feature of Lulu’s system is de-identification. The system can analyze employee behavior while protecting individual identities in certain contexts.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Key Terms',
          zh: '重點術語',
          items: [
            { en: 'identify', zh: '識別' },
            { en: 'de-identify', zh: '去識別化' },
            { en: 'de-identification', zh: '去識別化的過程' },
            { en: 'anonymize data', zh: '將資料匿名化' },
            { en: 'anonymous feedback', zh: '匿名回饋' },
            { en: 'protect employee privacy', zh: '保護員工隱私' },
          ],
        },
        {
          t: 'statements',
          en: 'Useful Business Sentence',
          zh: '實用商業表達',
          items: [
            {
              en: 'We use de-identification to analyze employee data while protecting individual privacy.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'evp',
      n: 12,
      en: 'Employer Value Proposition — EVP',
      zh: '雇主價值主張',
      blocks: [
        {
          t: 'lead',
          en: 'Lulu’s company also helps clients develop their Employer Value Proposition. EVP answers one question: why should talented people join and stay with this company?',
          zh: 'Lulu 的公司也協助客戶建立雇主價值主張。EVP 回答的問題是：優秀人才為什麼要加入並留在這家公司？',
        },
        {
          t: 'bullets',
          en: 'It may include:',
          zh: '',
          items: [
            { en: 'compensation,', zh: '' },
            { en: 'career development,', zh: '' },
            { en: 'company culture,', zh: '' },
            { en: 'benefits,', zh: '' },
            { en: 'learning opportunities,', zh: '' },
            { en: 'work environment,', zh: '' },
            { en: 'purpose.', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'Employer Value Proposition (EVP)', zh: '雇主價值主張' },
            { en: 'employer branding', zh: '雇主品牌' },
            { en: 'strengthen the employer brand', zh: '強化雇主品牌' },
            { en: 'attract and retain talent', zh: '吸引並留住人才' },
            { en: 'employee experience', zh: '員工體驗' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'why-stay',
      n: 13,
      en: 'Why Employees Stay',
      zh: '員工為什麼願意留下',
      blocks: [
        {
          t: 'lead',
          en: 'According to Lulu’s experience, employees do not stay only because of money. Compensation needs to be reasonable, but another major factor is whether employees can see a future in the company.',
          zh: '根據 Lulu 的經驗，員工留下來不只是因為薪水。薪酬必須合理，但另一個關鍵因素是：員工是否看得到自己在公司的未來。',
        },
        {
          t: 'bullets',
          en: 'Employees want to know:',
          zh: '',
          items: [
            { en: 'What is my current level?', zh: '' },
            { en: 'What is the next level?', zh: '' },
            { en: 'How can I get promoted?', zh: '' },
            { en: 'Which skills do I need?', zh: '' },
            { en: 'How long might it take?', zh: '' },
            { en: 'What do I need to improve?', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'see a future in the company', zh: '看得到在公司的未來' },
            { en: 'career path', zh: '職涯路徑' },
            { en: 'career progression', zh: '職涯晉升' },
            { en: 'promotion criteria', zh: '升遷標準' },
            { en: 'career development opportunities', zh: '職涯發展機會' },
            { en: 'skill gap analysis', zh: '技能落差分析' },
            { en: 'development plan', zh: '發展計畫' },
          ],
        },
        {
          t: 'statements',
          en: 'Strong Sentence',
          zh: '有力的表達',
          items: [
            {
              en: 'Employees are more likely to stay when they can clearly see their career path and understand what they need to do to reach the next level.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'fairness',
      n: 14,
      en: 'Transparency and Relative Fairness',
      zh: '透明度與相對公平',
      blocks: [
        {
          t: 'para',
          en: 'Lulu made an important management point: there is probably no such thing as absolute fairness in an organization.',
          zh: '',
        },
        {
          t: 'bullets',
          en: 'A better goal is:',
          zh: '',
          items: [
            { en: 'relative fairness,', zh: '' },
            { en: 'reasonable transparency,', zh: '' },
            { en: 'clear standards.', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'a relatively fair system', zh: '相對公平的制度' },
            { en: 'increase transparency', zh: '提高透明度' },
            { en: 'a relatively transparent system', zh: '相對透明的制度' },
            { en: 'clear promotion criteria', zh: '清楚的升遷標準' },
            { en: 'clear compensation standards', zh: '清楚的薪酬標準' },
            { en: 'make the criteria visible', zh: '讓標準可被看見' },
          ],
        },
        {
          t: 'statements',
          en: 'Strong Statement',
          zh: '有力的表達',
          items: [
            {
              en: 'Absolute fairness may be impossible, but companies can create a relatively fair and transparent system.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'contribution',
      n: 15,
      en: 'Contribution-Based Evaluation',
      zh: '以貢獻度為基礎的評估',
      blocks: [
        {
          t: 'para',
          en: 'A major value proposition of Lulu’s system is that employee evaluation can be based more directly on actual contribution.',
          zh: '',
        },
        {
          t: 'bullets',
          en: 'Employees do not need to rely only on:',
          zh: '',
          items: [
            { en: 'their relationship with a supervisor,', zh: '' },
            { en: 'office politics,', zh: '' },
            { en: 'whether the boss notices them.', zh: '' },
          ],
        },
        {
          t: 'para',
          en: 'Instead, the system can make contributions more visible.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'contribution-based evaluation', zh: '以貢獻度為基礎的評估' },
            { en: 'contribution-based rewards', zh: '以貢獻度為基礎的獎勵' },
            { en: 'measure employee contribution', zh: '衡量員工貢獻' },
            { en: 'make contributions visible', zh: '讓貢獻可被看見' },
            { en: 'evaluate employees objectively', zh: '客觀評估員工' },
            { en: 'reduce subjectivity', zh: '降低主觀性' },
          ],
        },
        {
          t: 'statements',
          en: 'Strong Explanation',
          zh: '有力的說明',
          items: [
            {
              en: 'Our goal is to make employee contributions more visible so performance evaluation is based more on evidence and less on personal impressions.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'investment',
      n: 16,
      en: 'Showing Employees How Much the Company Invests in Them',
      zh: '讓員工看見公司投入在他們身上的資源',
      blocks: [
        {
          t: 'bullets',
          en: 'Lulu’s system can also organize information about how much the company invests in each employee. Examples include:',
          zh: '',
          items: [
            { en: 'salary,', zh: '' },
            { en: 'bonuses,', zh: '' },
            { en: 'employee benefits,', zh: '' },
            { en: 'training,', zh: '' },
            { en: 'development programs.', zh: '' },
          ],
        },
        {
          t: 'para',
          en: 'This can help employees better understand the total value of their employment package.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'employee investment', zh: '公司對員工的投入' },
            { en: 'total compensation', zh: '總體薪酬' },
            { en: 'employee benefits', zh: '員工福利' },
            { en: 'training investment', zh: '培訓投入' },
            { en: 'make the value visible', zh: '讓價值可視化' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Sentence',
          zh: '潤飾後的句子',
          items: [
            {
              en: 'Employees can see how much the company has invested in them through salary, benefits, bonuses, and training.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'feedback-trust',
      n: 17,
      en: 'Employee Feedback and Trust',
      zh: '員工回饋與信任',
      blocks: [
        {
          t: 'bullets',
          en: 'The platform can periodically ask employees for feedback about:',
          zh: '',
          items: [
            { en: 'company policies,', zh: '' },
            { en: 'workload,', zh: '' },
            { en: 'management,', zh: '' },
            { en: 'workplace issues,', zh: '' },
            { en: 'other concerns.', zh: '' },
          ],
        },
        {
          t: 'para',
          en: 'Employees can choose whether to answer, and feedback can be anonymous.',
          zh: '',
        },
        {
          t: 'note',
          en: 'A Critical Requirement',
          zh: '關鍵前提',
          bodyEn: 'The company needs to earn employees’ trust. Without it, the feedback will not be honest.',
          bodyZh: '公司必須贏得員工的信任。沒有信任，回饋就不會誠實。',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'collect employee feedback', zh: '蒐集員工回饋' },
            { en: 'anonymous feedback', zh: '匿名回饋' },
            { en: 'employee survey', zh: '員工調查' },
            { en: 'encourage honest feedback', zh: '鼓勵誠實回饋' },
            { en: 'earn employees’ trust', zh: '贏得員工信任' },
            { en: 'build psychological safety', zh: '建立心理安全感' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'qual-quant',
      n: 18,
      en: 'Qualitative and Quantitative Analysis',
      zh: '質化與量化分析',
      blocks: [
        {
          t: 'para',
          en: 'Lulu emphasized that employee behavior cannot be understood using only one type of data. The system uses both.',
          zh: '',
        },
        {
          t: 'bullets',
          label: 'Quantitative Data',
          labelZh: '量化資料',
          items: [
            { en: 'attendance,', zh: '' },
            { en: 'working hours,', zh: '' },
            { en: 'frequency of participation,', zh: '' },
            { en: 'meeting participation,', zh: '' },
            { en: 'performance metrics.', zh: '' },
          ],
        },
        {
          t: 'bullets',
          label: 'Qualitative Data',
          labelZh: '質化資料',
          items: [
            { en: 'feedback,', zh: '' },
            { en: 'work logs,', zh: '' },
            { en: 'meeting content,', zh: '' },
            { en: 'behavior,', zh: '' },
            { en: 'comments,', zh: '' },
            { en: 'learning records.', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Terms',
          zh: '重點術語',
          items: [
            { en: 'qualitative analysis', zh: '質化分析' },
            { en: 'quantitative analysis', zh: '量化分析' },
            { en: 'multi-dimensional analysis', zh: '多維度分析' },
            { en: 'behavioral indicators', zh: '行為指標' },
            { en: 'track multiple indicators', zh: '追蹤多項指標' },
          ],
        },
        {
          t: 'statements',
          en: 'Strong Statement',
          zh: '有力的表達',
          items: [
            {
              en: 'We combine qualitative and quantitative data because employee behavior cannot be understood from numbers alone.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'meetings',
      n: 19,
      en: 'AI Meeting Management',
      zh: 'AI 會議管理',
      blocks: [
        {
          t: 'bullets',
          en: 'Lulu described several practical AI functions for meetings. The system can:',
          zh: '',
          items: [
            { en: 'identify speakers,', zh: '' },
            { en: 'analyze speaking frequency,', zh: '' },
            { en: 'record meeting content,', zh: '' },
            { en: 'time each agenda item,', zh: '' },
            { en: 'produce meeting minutes,', zh: '' },
            { en: 'identify action items,', zh: '' },
            { en: 'send tasks back to individual to-do lists,', zh: '' },
            { en: 'track follow-up actions.', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'meeting minutes', zh: '會議紀錄' },
            { en: 'agenda item', zh: '議程項目' },
            { en: 'track meeting time', zh: '追蹤會議時間' },
            { en: 'identify action items', zh: '找出行動項目' },
            { en: 'assign action items', zh: '指派行動項目' },
            { en: 'follow up on tasks', zh: '追蹤任務' },
            { en: 'speaker recognition', zh: '講者辨識' },
            { en: 'voiceprint recognition', zh: '聲紋辨識' },
          ],
        },
        {
          t: 'note',
          en: 'Important Business Insight',
          zh: '重要的商業洞察',
          bodyEn: 'Generating meeting minutes is useful, but the real business value comes from follow-up and execution. This is a much stronger pitch than simply selling “AI meeting notes.”',
          bodyZh: '產生會議紀錄很有用，但真正的商業價值來自後續追蹤與執行。這個說法比單純賣「AI 會議記錄」有力得多。',
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'micromanagement',
      n: 20,
      en: 'Reducing Micromanagement',
      zh: '降低微觀管理',
      blocks: [
        {
          t: 'lead',
          en: 'The system is not intended only to help managers monitor employees. Lulu also wants to educate management teams.',
          zh: '這套系統的目的不只是協助主管監控員工。Lulu 也希望藉此教育管理團隊。',
        },
        {
          t: 'statements',
          en: 'Her Point',
          zh: '她的論點',
          items: [
            {
              en: 'If employees can complete their work efficiently, managers should not constantly supervise them simply because they have extra time.',
              zh: '',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'micromanagement', zh: '微觀管理' },
            { en: 'micromanage employees', zh: '過度監督員工' },
            { en: 'trust your team', zh: '信任團隊' },
            { en: 'focus on outcomes rather than hours', zh: '重視成果而非工時' },
            { en: 'empower employees', zh: '賦能員工' },
            { en: 'give employees autonomy', zh: '給員工自主權' },
          ],
        },
        {
          t: 'statements',
          en: 'Strong Management Statement',
          zh: '有力的管理表達',
          items: [
            {
              en: 'Managers should focus more on outcomes and less on constantly monitoring how employees spend every minute of their time.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'leave-managers',
      n: 21,
      en: '“People Join Companies but Leave Managers”',
      zh: '員工可能因公司加入，卻因主管離開',
      blocks: [
        {
          t: 'lead',
          en: 'One of the strongest observations in the class: a person may join because of the company, but leave because of a bad manager.',
          zh: '本堂課最有力的觀察之一：一個人可能因為公司而加入，卻因為不好的主管而離開。',
        },
        {
          t: 'para',
          en: 'This links Lulu’s software directly to management development. Technology alone cannot solve retention problems.',
          zh: '',
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'management style', zh: '管理風格' },
            { en: 'poor management', zh: '不良管理' },
            { en: 'employee-manager relationship', zh: '員工與主管關係' },
            { en: 'management quality', zh: '管理品質' },
            { en: 'managerial behavior', zh: '主管行為' },
          ],
        },
        {
          t: 'statements',
          en: 'Strong Statement',
          zh: '有力的表達',
          items: [
            {
              en: 'Talent retention cannot be achieved through software alone. Management behavior also needs to change.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'timeline',
      n: 22,
      en: 'How Long Does It Take to See Results?',
      zh: '多久可以看到成果',
      blocks: [
        {
          t: 'para',
          en: 'Lulu gave two different time horizons.',
          zh: '',
        },
        {
          t: 'bullets',
          label: 'After Around One Quarter',
          labelZh: '約一季後',
          en: 'Employees may begin to notice:',
          zh: '',
          items: [
            { en: 'time savings,', zh: '' },
            { en: 'efficiency improvement,', zh: '' },
            { en: 'less administrative work.', zh: '' },
          ],
        },
        {
          t: 'bullets',
          label: 'After Around Two Quarters / Six Months',
          labelZh: '約兩季／六個月後',
          en: 'The company may have enough data to analyze:',
          zh: '',
          items: [
            { en: 'retention patterns,', zh: '' },
            { en: 'qualitative feedback,', zh: '' },
            { en: 'quantitative trends,', zh: '' },
            { en: 'performance discussions,', zh: '' },
            { en: 'employee behavior changes.', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'within one quarter', zh: '一季內' },
            { en: 'after two quarters', zh: '兩季後' },
            { en: 'see measurable results', zh: '看到可衡量的成果' },
            { en: 'observe behavioral changes', zh: '觀察行為變化' },
            { en: 'track long-term trends', zh: '追蹤長期趨勢' },
          ],
        },
        {
          t: 'statements',
          en: 'Polished Statement',
          zh: '潤飾後的表達',
          items: [
            {
              en: 'Employees may start noticing efficiency improvements within one quarter, but meaningful retention analysis usually requires at least six months of data.',
              zh: '',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'limits',
      n: 23,
      en: 'Technology Cannot Replace Management Decisions',
      zh: '系統不能取代管理決策',
      blocks: [
        {
          t: 'para',
          en: 'Lulu clearly acknowledged one limitation of the platform.',
          zh: '',
        },
        {
          t: 'bullets',
          label: 'The System Can',
          labelZh: '系統做得到的事',
          items: [
            { en: 'identify strong employees,', zh: '' },
            { en: 'reveal contribution,', zh: '' },
            { en: 'highlight skill gaps,', zh: '' },
            { en: 'show retention risks,', zh: '' },
            { en: 'recommend development.', zh: '' },
          ],
        },
        {
          t: 'bullets',
          label: 'But If Management Refuses To',
          labelZh: '但如果管理層不願意',
          items: [
            { en: 'adjust compensation,', zh: '' },
            { en: 'provide opportunities,', zh: '' },
            { en: 'improve management practices,', zh: '' },
            { en: 'recognize employees,', zh: '' },
          ],
        },
        {
          t: 'para',
          en: '— the system cannot force them to do so.',
          zh: '',
        },
        {
          t: 'statements',
          en: 'Strong Sentence',
          zh: '有力的表達',
          items: [
            {
              en: 'Our system can provide evidence and recommendations, but management still has to take action.',
              zh: '',
              tip: 'A very important credibility statement, because it avoids overselling AI.',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'incentives',
      n: 24,
      en: 'Incentives',
      zh: '誘因與獎勵',
      blocks: [
        {
          t: 'bullets',
          en: 'The class reviewed several forms of incentives:',
          zh: '',
          items: [
            { en: 'performance bonus', zh: '' },
            { en: 'contribution-based bonus', zh: '' },
            { en: 'incentive trip', zh: '' },
            { en: 'stock incentives', zh: '' },
            { en: 'non-financial incentives', zh: '' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful Phrases',
          zh: '實用片語',
          items: [
            { en: 'provide incentives', zh: '提供誘因' },
            { en: 'reward employee contribution', zh: '獎勵員工貢獻' },
            { en: 'financial incentives', zh: '財務誘因' },
            { en: 'non-financial incentives', zh: '非財務誘因' },
            { en: 'tie rewards to contribution', zh: '將獎勵與貢獻連結' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'vocab',
      n: 25,
      en: 'Key Vocabulary Reviewed in Class',
      zh: '本堂課複習的重點字彙',
      blocks: [
        {
          t: 'phrases',
          en: 'Review List',
          zh: '複習清單',
          numbered: true,
          items: [
            { en: 'retention rate', zh: '留任率' },
            { en: 'retain talent', zh: '留住人才' },
            { en: 'competency model', zh: '職能模型' },
            { en: 'suitable talent', zh: '適合的人才' },
            { en: 'de-identification', zh: '去識別化' },
            { en: 'Employer Value Proposition (EVP)', zh: '雇主價值主張' },
            { en: 'career path', zh: '職涯路徑' },
            { en: 'relatively fair', zh: '相對公平' },
            { en: 'relatively transparent', zh: '相對透明' },
            { en: 'overpriced', zh: '價格高於實際價值' },
            { en: 'a good deal', zh: '划算／物有所值' },
            { en: 'contribution-based', zh: '以貢獻度為基礎' },
            { en: 'embed', zh: '嵌入／埋入' },
            { en: 'qualitative', zh: '質化的' },
            { en: 'quantitative', zh: '量化的' },
            { en: 'micromanagement', zh: '微觀管理' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'model',
      n: '★',
      en: 'The Core Business Model Lulu Explained',
      zh: 'Lulu 說明的核心商業模式',
      blocks: [
        {
          t: 'lead',
          en: 'Understand the organization → Build a competency model → Identify suitable talent → Develop employees → Measure contribution → Understand employee needs → Improve retention',
          zh: '了解組織 → 建立職能模型 → 找到適合的人才 → 發展員工 → 衡量貢獻 → 了解員工需求 → 提升留才率',
        },
        {
          t: 'statements',
          en: 'And AI Supports the Process Through',
          zh: 'AI 在流程中的角色',
          items: [
            { en: 'Analysis → Scoring → Tracking → Feedback → Recommendations', zh: '' },
            { en: 'But human managers still make the final decisions.', zh: '但最終決策仍然由管理者做出。' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'pitch',
      n: '✓',
      en: 'A Stronger 90-Second Explanation for Lulu',
      zh: '更有力的 90 秒說明',
      blocks: [
        {
          t: 'statements',
          en: 'The Explanation',
          zh: '說明內容',
          items: [
            {
              en: 'Our SaaS platform helps companies manage the entire talent lifecycle, from hiring and employee development to performance management and retention.',
              zh: '',
            },
            {
              en: 'We first help each company build a customized competency model based on its core values, professional requirements, and management expectations. AI can then analyze candidates and employees against that model and identify suitable talent, competency gaps, and development opportunities.',
              zh: '',
            },
            {
              en: 'The system also combines qualitative and quantitative data to understand employee behavior, contribution, and retention risks. For example, it can analyze feedback, work records, meeting participation, training, and performance data.',
              zh: '',
            },
            {
              en: 'However, AI is not the final decision-maker. Our goal is to provide managers with better evidence so they can make more rational and informed people decisions.',
              zh: '',
            },
          ],
        },
        {
          t: 'note',
          en: 'Why This Version Is Stronger',
          zh: '為什麼這個版本更有力',
          bodyEn: 'It is much stronger than “we have an AI HR system,” because it clearly answers four things: what it does, how it works, what business problem it solves, and what role AI plays.',
          bodyZh: '這段比「我們有一套 AI HR system」強很多，因為它清楚回答了四件事：What it does → How it works → What business problem it solves → What role AI plays.',
        },
      ],
    },
  ],
};
