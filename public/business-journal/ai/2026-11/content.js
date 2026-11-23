/* AI 實務應用交流 — 2026 年 11 月。

   The write-up of one discussion. Everything visible on the page is in this
   file; render.js only lays it out.

   The body is Chinese and stays visible, because the people reading it are
   reading it alone. The English is the name of each idea, which is what the
   class took away and what they would search for later, so it leads.

   `by` is who shared it. Names stay, at Lewis's instruction — the point of the
   write-up is that each person can see what the others are doing.
*/

const SESSION = {
  id: '2026-11',                 // must match its entry in ../sessions.js

  titleEn: 'From asking to delegating',
  titleZh: '從「問 AI」到「把事情交給 AI」',

  classZh: '商業期刊導讀班（週一）',
  dateZh: '2026 年 11 月',
  minutes: 70,
  people: ['Lewis', 'Gary', 'Minnie'],

  leadZh: '這次討論的核心是：如何從單純使用 AI 回答問題，進一步讓 AI 成為學習助手、工作夥伴，甚至是協助執行專案的 AI Agent。',
  lead2Zh: '三人分享了不少實際使用經驗。我將內容整理成 8 個 AI 應用重點，並保留每個人的實際案例、操作方式與值得注意的地方。',

  /* ---------------------------------------------------------- 八個重點 */
  points: [
    {
      en: 'AI-Powered Learning Website',
      zh: '用 AI 建立個人化學習網站',
      by: ['Gary', 'Lewis'],
      body: [
        'Gary 利用 ChatGPT 建立英文複習網站，讓自己能反覆練習課堂內容。Lewis 建議加入 Gamification（遊戲化），例如互動任務與找物品遊戲。',
        'Lewis 也分享將電玩故事製作成英文互動電子書，讓孩子在閱讀與遊戲中學習英文。',
      ],
      key: '不只讓 AI 提供答案，也能讓 AI 製作適合自己需求的學習工具。',
    },
    {
      en: 'AI Meeting Assistant',
      zh: '用 AI 整理會議與課程筆記',
      by: ['Lewis'],
      body: [
        'Lewis 在參加 AI 工作坊之前，先將課程介紹與議程提供給 ChatGPT，請 AI 協助準備背景知識。',
        '課程進行中，只記錄重要關鍵字並交給 AI 整理。結束後，再將筆記製作成可分享的複習網站。',
      ],
      key: 'AI 可以協助完成會前準備、會中整理及會後知識分享，減少行政整理時間。',
    },
    {
      en: 'Choosing the Right AI Tool',
      zh: '依任務選擇 AI 工具',
      by: ['Minnie'],
      body: [
        'Minnie 比較 ChatGPT 和 Claude 的使用經驗。她較常使用 ChatGPT 進行發想、寫作、圖片相關工作，以及處理熟悉的工作流程；也會使用 Claude 協助分析、修改內容或製作互動網頁。',
        '她有時會先用 ChatGPT 產出初稿，再交給 Claude 優化。',
      ],
      key: '不必強求一個 AI 處理所有工作，可以根據任務性質、使用限制和個人習慣搭配不同工具。',
    },
    {
      en: 'AI Think Tank',
      zh: '建立 AI 專家顧問團',
      by: ['Minnie'],
      body: [
        'Minnie 介紹一種 Prompt 技巧：讓 AI 模擬五位不同領域的專家，分別審查同一份論文或簡報。',
        '不只是讓五位專家各自提出意見，而是要求他們進一步討論、挑戰彼此觀點，最後整理成共同建議。',
      ],
      key: '利用多重專業視角，找出可能忽略的問題與改善方向。',
    },
    {
      en: 'AI Project Management',
      zh: '讓 AI 協助管理專案',
      by: ['Gary', 'Minnie'],
      body: [
        'Gary 希望利用 AI 整理年度會議資料、專案成果與下一年度的工作方向。',
        'Minnie 則分享實際案例：為隔年一月的醫學文獻讀書會設定研究主題、文獻篩選標準及準備時程，再讓 AI 協助找資料、整理摘要與追蹤進度。',
      ],
      key: '要先給 AI 明確的目標（Objectives）與具體要求（Requirements），才能讓 AI 更有效地協助完成專案。',
    },
    {
      en: 'AI Handoff & Skills',
      zh: '讓不同 AI 共用工作經驗',
      by: ['Minnie'],
      body: [
        'Minnie 長期使用 ChatGPT，因此 ChatGPT 較熟悉她的溝通習慣與工作偏好。',
        '她請 ChatGPT 整理這些資訊，形成 SOP 或 Skill，再交給 Claude，幫助另一個 AI 更快理解她的需求。',
        '她也分享，每次完成工作後，可以請 AI 整理這次使用的方法，作為下次工作的參考。',
      ],
      key: '把工作經驗文件化，減少每次更換 AI 工具或開始新任務時重複說明的成本。',
    },
    {
      en: 'AI-Assisted Business Proposals',
      zh: '用 AI 優化商業提案',
      by: ['Lewis'],
      body: [
        'Lewis 分享協助學員改善商業提案的案例：先讓 AI 從商業溝通顧問的角度分析提案邏輯，再加入視覺設計等不同專業角色，逐步改善簡報內容與呈現方式。',
        '最後比較修改前後版本，評估是否更能說服客戶。',
      ],
      key: '使用 AI 時，應明確說明商業目標，例如提高提案說服力或成交機會，而不只是要求「做得更漂亮」。',
    },
    {
      en: 'AI Data Management & Verification',
      zh: 'AI 資料管理、驗證與備份',
      by: ['Minnie'],
      body: [
        'Minnie 建議在支援的桌面環境中，把需要 AI 處理的檔案集中於資料夾，讓 AI 直接讀取，而不必每次手動上傳。',
        '她也強調，使用具有檔案修改權限的 AI 工具前，必須備份原始資料，避免重要內容被覆蓋。',
        '對於重要的研究或專業工作，她會使用不同 AI 互相驗證。',
      ],
      key: 'AI 的便利性不能取代資料保護與人工查證。',
    },
  ],

  pointsFootZh: '以上為課堂經驗整理。AI 工具間的優劣、使用量節省和自動執行能力，屬於參與者分享的使用觀察，不代表已經過獨立測試。',

  /* ------------------------------------------------------ 五個實用技巧 */
  techniques: [
    { en: 'Gamify', how: '請 AI 把學習內容轉換成互動遊戲', when: '英文學習、員工訓練' },
    { en: 'AI Think Tank', how: '讓 AI 模擬多位專家，討論後提出建議', when: '論文審查、商業簡報' },
    { en: 'AI Handoff', how: '將工作習慣、需求與流程整理成 SOP / Skill', when: '不同 AI 工具交接' },
    { en: 'AI Project Assistant', how: '設定目標、要求、期限，再請 AI 協助研究與追蹤', when: '專案管理、研究計畫' },
    { en: 'Cross-AI Verification', how: '使用不同 AI 比較答案，檢查分歧並核對原始來源', when: '重要決策、專業研究' },
  ],

  /* ---------------------------------------------------------- 指令範例 */
  promptsNoteZh: '以下將大家分享的做法轉成可直接使用的指令。這些是根據討論內容重新整理的範例，並非逐字稿中的原始 Prompt。',
  prompts: [
    {
      titleZh: '建立 AI 專家顧問團',
      tag: 'AI Think Tank',
      text: '請模擬五位不同專業領域的專家，從各自角度審查我提供的文件。先提出不同觀點與質疑，再比較各項建議的優缺點，最後整理成一份共識報告。請列出最重要的問題、改善建議，以及仍存在的不同意見。不要為了達成共識而忽略重要分歧。',
    },
    {
      titleZh: '建立 AI 交接文件',
      tag: 'AI Handoff',
      text: '請根據我們過去的合作內容，整理一份 AI 交接手冊，包含我的工作目標、溝通偏好、常用流程、輸出格式與品質標準。請區分已確認的資訊和推測，讓另一個 AI 工具可以快速理解如何與我合作。',
    },
    {
      titleZh: 'AI 專案管理助手',
      tag: 'AI Project Assistant',
      text: '我正在進行一個專案，目標是［專案目標］，預計在［期限］前完成。請協助我建立執行計畫，包含工作項目、重要里程碑、需要蒐集的資訊、可能風險及交付成果。請先確認尚未明確的需求，再提出具體建議。',
    },
  ],

  /* ------------------------------------------------------ 要小心的三件事 */
  cautionsLeadZh: '有三個地方值得保留課堂原意，但在實際使用時加上限制：',
  cautions: [
    {
      title: 'AI 專家會議不等於真實專家審查。',
      body: 'AI 模擬不同角色，可以協助擴展思考，但這些角色可能共享相似的錯誤或偏見。',
    },
    {
      title: 'AI 的預測不能直接當成商業成效。',
      body: '課堂提到 AI 預測優化簡報後成交率可能提高 1.3 倍，但沒有實際成交資料，因此只能視為推測，不能當作已驗證成果。',
    },
    {
      title: '使用本機資料夾不保證一定節省 Token。',
      body: '是否節省使用量，取決於工具如何讀取、處理及傳送檔案；而且具備檔案編輯權限的 AI 確實需要額外注意備份。',
    },
  ],

  /* ------------------------------------------------------------ 四個層級 */
  levelsLeadZh: '我認為本次最值得大家記住的，不是 ChatGPT 或 Claude 哪一個比較好，而是大家對 AI 的使用方式正在發生轉變：',
  levels: [
    { en: 'Ask AI', zh: '向 AI 提問', body: '查詢資訊、解釋問題、協助寫作' },
    { en: 'Create with AI', zh: '與 AI 共同創作', body: '建立學習網站、互動教材、商業簡報' },
    { en: 'Collaborate with AI', zh: '與 AI 協作', body: '多角色審查、不同 AI 分工、知識交接' },
    { en: 'Delegate to AI', zh: '委派任務給 AI', body: '專案管理、資料整理、研究追蹤與工作流程自動化' },
  ],
  levelsFootZh: '以上四個層級是根據本次討論歸納的應用框架，不代表每個 AI 工具都具備上述全部能力。',

  /* -------------------------------------------------------------- 結語 */
  quote: {
    en: 'The real value of AI is not just getting answers, but turning ideas into action.',
    zh: 'AI 的真正價值，不只是提供答案，而是幫助我們把想法轉化成實際行動。',
  },
};
