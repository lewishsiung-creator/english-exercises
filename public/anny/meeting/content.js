/* Anny — 商務團隊會議・共同籌辦指南.

   A subpage of /anny/, and the first page in that folder that is NOT a lesson.
   The notebook next door teaches English; this one is a working document Anny
   drives during a real meeting, and every word on it is Chinese. That is why
   it has its own renderer and its own stylesheet instead of reusing the
   notebook's: there is no English layer to hide, no 中 chip, no 🔊, no answers
   to reveal. Nothing here is being taught.

   WHAT IT IS FOR
   --------------
   Anny is co-planning a two-day business team meeting with the other Clinical
   Sales Director. This page is her preparation for the 30-minute conversation
   in which the two of them agree what the event is for, how the agenda serves
   that, and who does what. The source is the integrated guide written for her
   on 4 November 2026.

   NAMES
   -----
   The notebook next door deliberately names nobody but Anny. This page breaks
   that rule on purpose — Lewis chose to keep the real names (4 Nov 2026),
   because an agenda table she has to run on the day is close to useless with
   the people taken out of it. The page is `noindex, nofollow` like everything
   in this folder, which keeps it out of search results but does NOT make the
   URL secret. If anything here must never be readable by someone with the
   link, it does not belong in public/ at all.

   WHAT IS SAVED, AND WHY THIS PAGE DIFFERS
   ----------------------------------------
   The adult pages here save nothing between clients, on purpose. This one
   saves — the ticks, the owners, the dates and the decisions all persist in
   this browser — because it has no clients. It belongs to one person, for one
   meeting, and a checklist that empties itself when her phone locks the screen
   would be worse than paper. `清空本頁紀錄` in the tools panel wipes it.

   BLOCK TYPES
   -----------
     lead     one framing line in italics, opening a section
     p        a paragraph
     callout  a boxed principle. `label` is the small tag above it
     steps    a numbered list of {t, d} — the point, then what it means
     two      a two-column table: `head` of two, then `rows` of two
     clock    the 30-minute plan. Rows carry `from`/`to` in minutes, and the
              timer in the top bar lights the row the meeting is actually in
     agenda   the afternoon session under review: the slot as it stands on the
              left, what to settle today on the right
     asks     questions to ask out loud, each on its own line
     replies  what the other person may say, and a way to answer it. `note` is
              the caution that goes with the answer, not something to say
     script   the long spoken draft. One paragraph per `lines` entry, with a
              copy button for the lot
     lines    short named things to say on the day — each one copyable alone
     check    the checklist. Groups of {g, items}; the ticks are saved
     plan     下一步／負責人／期限 — the owner and the date are typed in and saved
     fields   the long blanks at the end, also typed in and saved

   The `clock`, `check`, `plan` and `fields` blocks are the ones that make this
   a tool rather than a handout. Everything else is read.
*/

const GUIDE = {
  title: '商務團隊會議',
  titleSub: '共同籌辦溝通指南',
  who: 'Anny｜Clinical Sales Director',
  date: '2026 年 11 月 4 日',
  kicker: '溝通策略 · 議程檢視 · 中文示範稿 · 今日待辦與決議表',

  cover: {
    goalsHead: '今天要達成的三個結果',
    goals: [
      '確認活動最重要的預期成果。',
      '釐清議程如何支持成果，尤其是兩場座談。',
      '確認另一位 CSD 的參與方式、雙方分工與下一步。',
    ],

    principleLabel: '核心溝通原則',
    principle: '把「邀請幫忙辦活動」提升為「邀請共同定義成果、共同承擔決策」。對方需要清楚知道：為什麼值得投入？我能影響什麼？我要負責多少？',

    standardHead: '今天的成功標準',
    standard: '會議結束時，雙方都能清楚說出：我們想達成什麼、我答應負責什麼、下一步是什麼。若只得到「好啊，有需要再找我」，合作方式仍需要進一步確認。',

    scope: '使用範圍：整合本次討論內容。議程分析僅針對提供的 13:30–16:00 下午場次；兩天一夜的其他安排尚未提供。文中的新增設計均為建議，並非已確認事項。',
  },

  sections: [
    // ------------------------------------------------------------------ 01
    {
      id: 'purpose',
      n: '01',
      title: '活動目的與合作設計',
      sub: '先對齊成果，再討論安排',
      blocks: [
        {
          t: 'lead',
          text: '活動要先有成果，才有議程。這一段是在談議程之前要先對齊的事。',
        },
        {
          t: 'p',
          text: '第一件事，是把抽象的目的轉成可觀察的成果——活動結束後，同事說得出什麼、做得出什麼。',
        },
        {
          t: 'two',
          head: ['目的', '希望同事產生的改變'],
          rows: [
            ['凝聚團隊', '更了解彼此的工作與挑戰，能討論合作障礙，並更願意主動跨團隊溝通。'],
            ['理解文化與價值', '能結合實際案例，說明公司價值觀如何影響日常判斷與行動。'],
            ['掌握 2027 年方向', '能說出主要優先事項，並理解自己及團隊應如何配合。'],
          ],
        },
        {
          t: 'callout',
          label: '檢核問題',
          text: '活動結束一週後，希望同事說得出什麼、做得出什麼？每個議程環節支持哪一個成果？',
        },
        {
          t: 'steps',
          head: '共同籌辦要談清楚的五件事',
          items: [
            {
              t: '分開說明「為什麼辦」與「誰來辦」',
              d: '先談活動價值，再簡短交代過去由臨床主管主導的背景。團隊人數最多，不等於應承擔所有工作；責任仍應依需求、資源與可投入時間討論。',
            },
            {
              t: '為兩天一夜提供具體理由',
              d: '可討論的設計：第一天建立共同理解；晚間增加平常少有互動的同事之間的交流；第二天將共識轉成合作方向與行動。若內容主要是單向簡報，應檢視活動形式是否必要。',
            },
            {
              t: '說明對方的貢獻與決策空間',
              d: '邀請理由可聚焦新觀察與專業判斷：「我很重視你對團隊需求的看法，希望在議程定案前，先一起確認成果。」共同籌辦必須有實際影響決策的空間。',
            },
            {
              t: '交代進度、分工與下一步',
              d: '明確區分已定案、初步構想與待共同決定事項。分工分為內容與決策，以及行政與執行。先了解對方能投入的時間，再約定工作範圍、負責人與期限。',
            },
            {
              t: '把成果寫下來，不只說出來',
              d: '討論結束前重述一次，並留下文字紀錄。沒有寫下來的共識，下次會從頭討論一遍。',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ 02
    {
      id: 'flow',
      n: '02',
      title: '今天的對話流程',
      sub: '一分鐘開場，接著聽對方',
      blocks: [
        {
          t: 'callout',
          label: '會前先釐清',
          text: '哪些條件已確認？哪些可以共同決定？希望對方提供建議、負責部分內容，還是共同主導？這三種參與程度需要不同的承諾。',
        },
        {
          t: 'clock',
          head: '建議的 30 分鐘討論安排',
          note: '按上方的 ⏱ 開始計時，目前所在的時段會亮起來。這只是節奏參考，不是倒數。',
          rows: [
            { from: 0, to: 5, t: '說明目的與可調整範圍；先聽對方對團隊需求的看法。' },
            { from: 5, to: 10, t: '確認最重要的活動成果，以及是否有遺漏。' },
            { from: 10, to: 22, t: '檢視議程主線、兩場座談區別、聽眾參與與 2027 年方向的銜接。' },
            { from: 22, to: 27, t: '討論可投入時間、參與方式及分工。' },
            { from: 27, to: 30, t: '重述決議，確認負責人、期限與下次討論時間。' },
          ],
        },
        {
          t: 'asks',
          head: '三個優先提問',
          items: [
            '如果這次會議只能做好一件事，你希望是什麼？',
            '過去類似活動，有哪些值得保留或調整的地方？',
            '以你目前的工作安排，你覺得可以用什麼方式參與？',
          ],
          after: '確認理解：「所以你最重視的是＿＿，而你比較擔心的是＿＿。我理解得對嗎？」',
        },
        {
          t: 'replies',
          head: '常見回應與接話方式',
          items: [
            {
              says: '我最近很忙。',
              reply: '了解。我們先確認你能投入的範圍。你較適合參與前期方向討論，還是負責其中一個主題？',
            },
            {
              says: '你不是安排好了嗎？',
              reply: '目前已確定的是＿＿；仍可共同決定的是＿＿。我希望在這些部分定案前先和你討論。',
            },
            {
              says: '為何需要兩天一夜？',
              reply: '目前考量是讓大家有時間交流，再把討論轉成行動。我們可一起檢視形式是否符合目標。',
              note: '若形式已定案，應如實交代。',
            },
            {
              says: '希望我做什麼？',
              reply: '先一起確認成果與主要內容，再討論各自負責的部分，也想先了解你能投入多少時間。',
              note: '避免在未估算工作量前保證「不會花你太多時間」。',
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ 03
    {
      id: 'agenda',
      n: '03',
      title: '議程檢視',
      sub: '從個人經驗，走向共同方向',
      blocks: [
        {
          t: 'p',
          text: '提供的下午議程共 150 分鐘。建議主線：個人經驗 → 團隊成長與挑戰 → 2027 年方向。以下列出原安排及建議確認事項。',
        },
        {
          t: 'agenda',
          rows: [
            {
              time: '13:30–13:40',
              title: '開場',
              who: 'Anny Hsu',
              ask: '說明活動目的、主線與參與期待。可先提供簡短的 2027 年方向框架，讓大家知道後續分享與自己有何關聯。',
            },
            {
              time: '13:40–14:20',
              title: '來賓分享',
              who: '主持：Roger Ho',
              ask: '確認來賓主題與團隊需求的關係。40 分鐘內明確分配分享、提問與反思時間。',
            },
            {
              time: '14:20–14:40',
              title: '交流與休息',
              who: '',
              ask: '保留真正的休息時間。可提供一個輕量交流題，鼓勵與平常較少接觸的同事交談。',
            },
            {
              time: '14:40–15:10',
              title: '座談一｜蛻變下的成長',
              who: 'Tim／Darren／Gary／Jay　主持：Anny Hsu',
              ask: '聚焦過去的改變、具體案例與學習。4 位講者在 30 分鐘內需嚴格取捨，避免各自做完整簡報。',
            },
            {
              time: '15:10–15:40',
              title: '座談二｜新挑戰、新旅程',
              who: 'Peggy／Vincent／Elly　主持：Ken Hsiao',
              ask: '聚焦未來挑戰、所需支援與跨團隊合作，與第一場形成前後呼應。',
            },
            {
              time: '15:40–16:00',
              title: '2027 Goal Plan',
              who: 'Bert Tseng',
              ask: '確認此段是方向說明還是共同規劃。由 Bert 連結前面案例，整理優先事項與下一步；若需共同產出計畫，須重新評估時間。',
            },
          ],
        },
        {
          t: 'callout',
          label: '最重要的結構調整',
          text: '2027 年方向放在最後可以保留，但開場應先提供方向提示。最後再整合，避免同事聽完故事後，才知道應該用什麼角度理解。實際內容須與 Bert 對齊。',
        },
        {
          t: 'p',
          text: '議程上已有多位講者與主持人。應如實說明哪些人選已確認、哪些仍是構想，並讓另一位 CSD 清楚知道可影響的決定。無須為表示合作而額外增加上台角色。',
        },
      ],
    },

    // ------------------------------------------------------------------ 04
    {
      id: 'panels',
      n: '04',
      title: '座談與參與設計',
      sub: '讓案例有深度，讓聽眾有角色',
      blocks: [
        {
          t: 'two',
          head: ['場次與定位', '核心問題'],
          rows: [
            ['座談一　回顧：改變如何帶來成長？', '你改變了哪個做法？為什麼？結果如何？'],
            ['座談二　前瞻：下一階段需要什麼？', '最大挑戰是什麼？需要哪些跨團隊支援？'],
          ],
        },
        {
          t: 'two',
          head: ['分鐘', '座談一：30 分鐘配置建議'],
          rows: [
            ['2', '主持人設定問題與討論範圍。'],
            ['12', '4 位講者各分享一個案例，每人 3 分鐘。'],
            ['8', '主持人比較案例、追問關鍵決策與可應用的做法。'],
            ['5', '現場提問。'],
            ['3', '整理可帶回工作中的重點。'],
          ],
        },
        {
          t: 'p',
          text: '每位講者先準備一個案例：情境、採取的行動、結果、學到什麼。兩位主持人事先對齊問題、時間與收尾方式，讓兩場互相補充。',
        },
        {
          t: 'asks',
          head: '主持人可追問',
          items: [
            '當時最困難的判斷是什麼？',
            '其他團隊若要採用這個做法，需要注意什麼？',
            '下一階段，你最需要誰提供什麼支援？',
          ],
        },
        {
          t: 'asks',
          head: '低負擔的聽眾參與',
          lead: '可在座談既有時段內安排兩分鐘同儕反思，並相應減少其他段落時間。不要直接疊加在已滿的議程上。',
          items: [
            '剛才哪個做法值得我們帶回自己的團隊？',
            '為了達成明年的方向，我們最需要改善哪項跨團隊合作？',
          ],
        },
        {
          t: 'callout',
          label: '檢核產出',
          text: '每場座談應留下少量、具體、能應用的重點；最後方向說明則回答：優先做什麼、需要怎樣合作、後續如何跟進。',
        },
      ],
    },

    // ------------------------------------------------------------------ 05
    {
      id: 'script',
      n: '05',
      title: '完整中文口頭稿',
      sub: '共同確認成果，再談議程與分工',
      blocks: [
        {
          t: 'script',
          note: '請依實際進度與可調整範圍使用；這是準備稿，不必一次完整說完。',
          lines: [
            '我想跟你討論一下，今年兩天一夜的商務團隊會議，我們可以怎麼一起規劃。',
            '在討論議程之前，我希望先和你確認：這兩天結束後，我們最希望同事帶走什麼，以及這次會議應該為團隊帶來哪些具體成果。',
            '我目前有三個初步想法。',
            '第一，是讓大家更清楚了解 2027 年的主要方向與優先事項，也知道自己的工作可以如何配合。',
            '第二，是增加團隊之間的理解與交流。除了認識彼此，我也希望同事有機會分享工作上的挑戰，討論哪些地方需要更好的合作。',
            '第三，是讓公司的文化與價值觀更貼近日常工作。我希望透過實際案例和討論，讓大家思考這些價值觀如何影響我們的判斷與行動。',
            '關於兩天一夜的安排，我的初步想法是，第一天先建立共同理解，讓大家有時間交流；第二天再把討論整理成具體的合作方向與後續行動。我也想聽聽你的看法，看看這樣的安排是否能有效達成我們的目的。',
            '過去因為臨床團隊在商務組織中的人數最多，這個年度會議通常由臨床主管主導籌辦。今年我希望能邀請你一起參與前期規劃，從活動成果到議程設計，一起討論。',
            '你最近加入主管團隊，可能會帶來不同的觀察。我很想知道，從你的角度來看，團隊目前最需要的是什麼，以及有哪些事情值得透過這次會議來討論。',
            '目前我和助理已經開始整理一些初步構想，希望能作為我們討論的起點。關於主要內容與活動方式，我希望先和你取得共識，再進一步邀請相關同事參與。',
            '分工的部分，我也想先了解你目前的工作安排，以及能投入的時間。我們可以一起確認，哪些內容適合共同討論，哪些部分由各自負責，再協調行政與執行上的支援。',
            '我們可不可以先安排三十分鐘，確認三個最重要的預期成果、討論初步構想，並決定接下來的分工與時程？',
            '我想先聽聽你的看法：剛才提到的三個成果，你覺得哪些最重要？有沒有我們應該增加或調整的地方？',
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ 06
    {
      id: 'lines',
      n: '06',
      title: '現場可用說法',
      sub: '開場、討論議程、確認共識',
      blocks: [
        {
          t: 'lines',
          items: [
            {
              t: '精簡開場',
              hint: '說完就停，聽對方回應',
              body: '我想邀請你一起規劃今年兩天一夜的商務團隊會議。在議程定案前，我希望先和你確認，這次會議最應該為團隊帶來什麼成果。\n我目前想到三個重點：讓大家了解 2027 年方向、加強跨團隊理解與合作，以及透過實際案例，讓公司價值觀更貼近日常工作。\n你最近加入主管團隊，我很重視你帶來的不同觀察。從你的角度來看，團隊目前最需要的是什麼？',
            },
            {
              t: '帶入議程',
              hint: '先談設計邏輯',
              body: '這份議程是希望透過來賓分享、同事的成長與挑戰，再連結到 2027 年方向。在逐項討論講者與時間前，我想先聽聽你：這個下午結束後，最希望同事帶走什麼？有沒有漏掉團隊真正需要討論的事情？',
            },
            {
              t: '聚焦三個待討論事項',
              hint: '',
              body: '第一，來賓分享和兩場座談如何連結活動目的。第二，兩場座談如何做出區別，讓講者分享具體經驗，也讓同事有參與機會。第三，最後的 2027 年方向如何整合前面內容，讓大家知道接下來應該做什麼。',
            },
            {
              t: '邀請分工',
              hint: '',
              body: '我會先說明哪些已確認、哪些仍可調整。我希望先對這幾個重點取得共識，再依各自時間與專長確認分工。你比較希望負責哪些部分？目前能投入多少時間？',
            },
            {
              t: '收尾：把決議說出來',
              hint: '',
              body: '我確認一下今天的共識：我們先把＿＿和＿＿列為主要重點。接下來我會整理＿＿，你會協助＿＿。我們在＿＿之前交換資料，再安排下一次討論。還有哪些地方需要現在先釐清？',
            },
          ],
          after: '時間有限時，優先完成：活動成果、兩場座談的區別、雙方的具體參與方式。',
        },
      ],
    },

    // ------------------------------------------------------------------ 07
    {
      id: 'record',
      n: '07',
      title: '會議待辦與紀錄',
      sub: '勾選的狀態與填寫的內容都會留在這台裝置上',
      blocks: [
        {
          t: 'check',
          head: '今日檢核表',
          groups: [
            {
              g: '會前',
              items: [
                '標示議程：已確認／仍可調整／待確認。',
                '準備三個預期成果，釐清對方的參與角色與共同決策範圍。',
              ],
            },
            {
              g: '會議中',
              items: [
                '先對齊目的，並聽取對方對團隊需求的觀察。',
                '確認來賓主題、與目的的關聯，以及分享與提問時間。',
                '區分兩場座談的定位、問題與預期產出。',
                '確認講者時間、主持追問、現場提問與重點整理。',
                '安排聽眾參與，並在既有時間內調整配置。',
                '與 Bert 對齊開場方向提示與最後整合的銜接。',
                '了解可投入時間，確認內容、聯繫、主持準備及行政分工。',
              ],
            },
            {
              g: '結束前',
              items: [
                '重述已決定與未決事項；每項下一步都有負責人與期限。',
                '約定下次確認進度的時間，並指定決議整理人。',
              ],
            },
          ],
        },
        {
          t: 'plan',
          head: '下一步',
          cols: ['下一步', '負責人', '期限'],
          rows: [
            '更新議程與標示確認狀態',
            '確認來賓主題與分享形式',
            '設計兩場座談問題與時間',
            '與 Bert 確認方向銜接',
            '整理並分享會議決議',
          ],
        },
        {
          t: 'fields',
          head: '會後紀錄',
          note: '寫完可以按工具面板裡的「複製決議」，直接貼到信件或訊息裡。',
          items: [
            { label: '共同確認的主要成果', rows: 3 },
            { label: '未決事項', rows: 2 },
            { label: '下次討論時間', rows: 1 },
          ],
        },
      ],
    },
  ],
};
