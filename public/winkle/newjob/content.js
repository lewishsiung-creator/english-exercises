/* Starting the new job — the communication framework. render.js draws it.

   Built from Lewis's coaching notes, 新工作準備：建立可重複使用的英語溝通架構.
   Winkle starts at a pharma company on 2 November 2026, working with a US
   team on about four hours of overlap — Taiwan evening against US morning —
   with the rest of the week in writing, on Slack, Teams and email.

   The register is the thing to protect here. Every other page in this folder
   was written to get him hired; this one is written for the first weeks of a
   job he already has. An interview self-introduction argues that you should
   be hired; a new colleague's self-introduction tells people what they can
   come to you for. Selling becomes collaborating, and nothing on this page
   should drift back into the interview voice.

   The employer is not named — the notes don't name it either, and the same
   rule as the rest of the folder applies.

   Lewis's English phrases and his Chinese are his, verbatim. The situations
   in the last step are built from those phrases, so the drill practises what
   the page actually teaches.
*/

const PAGE = {
  title: "Starting the new job",
  titleZh: "新工作的英語溝通架構",
  navHead: "New job 新工作",

  cover: {
    up: { href: "../", en: "Winkle's Learning Notes 全部頁面" },
    kicker: "Before 2 November · 上工前準備",
    role: "Winkle · a pharma company · from 2 November 2026 · a US team, about four hours of overlap",
    roleZh: "Winkle · 藥廠 · 2026 年 11 月 2 日起 · 與美國團隊約四小時重疊時間",
    intro: [
      {
        en: "The overlap falls in your evening and their morning. Everything outside it happens in writing — Slack, Teams, email — so the written shapes on this page matter as much as the spoken ones.",
        zh: "重疊時間落在台灣的晚上、美國的早上，其餘時間的合作大多透過 Slack、Teams 或 email 以書面進行，所以這一頁的書面架構和口說架構一樣重要。",
      },
      {
        en: "Four abilities are worth preparing before you start: introducing yourself, reporting progress, checking that you have understood, and explaining technical work to people who don't program. They are all the same move — a fixed shape you don't have to invent each time.",
        zh: "上工前集中準備四種能力：自我介紹、工作進度報告、確認與釐清資訊，以及向非技術背景的同事解釋技術內容。它們其實是同一件事——一個你不必每次重新發明的固定架構。",
      },
    ],
    rulesEn: "Three things to carry into the first week",
    rulesZh: "帶進第一週的三件事",
    rules: [
      {
        en: "**The tone changes from selling to collaborating.** An interview introduction argues that you should be hired. A colleague's introduction tells people **what they can come to you for**.",
        zh: "**語氣要從推銷轉為合作。**面試用的自我介紹重點在「說服對方錄用你」；新同事之間的自我介紹，重點在**讓對方知道可以找你幫什麼忙**。",
      },
      {
        en: "**The same shape every time is not boring.** The point of workplace communication is not variety — it is reducing the time someone needs to understand you.",
        zh: "**每次都用同一個架構並不枯燥。**職場溝通的主要目的不是追求語言形式的變化，而是減少對方理解資訊所需要的時間。",
      },
      {
        en: "**Being professional is not accepting everything.** Showing your workload, the deadlines and the priorities — and letting the other person choose — is a communication skill too.",
        zh: "**專業不等於接受所有要求。**能清楚說明自己的工作負荷、協調優先順序，同樣是重要的職場溝通能力。",
      },
    ],
    jump: "situations",
    jumpEn: "Straight to the situation drill →",
    jumpZh: "直接進入情境練習",
  },

  source: {
    en: "Built from Lewis's coaching notes, 新工作準備：建立可重複使用的英語溝通架構. The English phrases and the Chinese are his. The employer is not named here, as in his notes.",
    zh: "本頁根據 Lewis 的課堂筆記《新工作準備：建立可重複使用的英語溝通架構》製作。英文句型與中文說明皆出自該份筆記。依照原筆記的做法，這裡不寫出公司名稱。",
  },

  steps: [

    // ============================================================ 1
    {
      id: "intro",
      en: "Introducing yourself",
      zh: "自我介紹",
      blocks: [
        {
          t: "lead",
          en: "Two versions: thirty seconds for the first team meeting, sixty for meeting your manager or a colleague one to one. Both should sound professional, confident and easy to rely on.",
          zh: "準備兩個版本：30 秒用於第一次團體會議，60 秒用於與主管或同事的一對一認識。除了介紹資歷，也要呈現專業、自信與可信賴的形象。",
        },
        {
          t: "note",
          en: "The one line that changes everything",
          zh: "一句話的差別",
          bodyEn: "An interview introduction is built to persuade someone to hire you. This one is built so that a colleague knows what to bring you. Same facts, different purpose — and it is the last sentence that carries it.",
          bodyZh: "面試用的自我介紹是為了說服對方錄用你；這一版是為了讓同事知道什麼事可以找你。事實一樣，目的不同——而承擔這件事的是最後一句。",
        },
        {
          t: "model",
          en: "The thirty-second version",
          zh: "30 秒版本骨架",
          hintEn: "Three lines, three jobs. Tap 🔊 for the whole thing.",
          hintZh: "三句話，三個任務。點 🔊 可聽整段。",
          revealEn: "Show the skeleton", revealZh: "顯示骨架",
          parts: [
            { tag: "Who, what, where", tagZh: "我是誰、什麼角色、在哪裡", en: "Hi everyone, I'm Winkle. I'm joining as [your role], based in Taipei.", zh: "大家好，我是 Winkle，加入團隊擔任〔你的職稱〕，在台北。" },
            { tag: "Your specialism, in one line", tagZh: "我的專長一句話", en: "I focus on clinical data visualization, mainly in R and Shiny.", zh: "我主要做臨床資料視覺化，主力是 R 和 Shiny。" },
            { tag: "What to come to you for", tagZh: "你們可以找我做什麼", en: "If you need anything visual for data review, I'm happy to help.", zh: "如果在資料審閱上需要任何視覺化的東西，很樂意幫忙。" },
          ],
        },
        {
          t: "note",
          en: "And the sixty-second version",
          zh: "60 秒版本",
          bodyEn: [
            "Same spine, with room for two more things: one line of background — twelve years in clinical trials, the kinds of study you've worked on — and one concrete example of what you've built, because that is what makes “come to me for visual things” believable.",
            "Build it from your interview version, then take the selling out of it.",
          ],
          bodyZh: [
            "同一條主軸，多出空間放兩件事：一句背景（臨床試驗 12 年、做過哪些類型的研究），以及一個你做過的具體例子——因為那才會讓「視覺化的事可以找我」這句話可信。",
            "以現有的面試版本為基礎，再把推銷的語氣拿掉。",
          ],
        },
        {
          t: "practice",
          en: "Say it, against the clock",
          zh: "計時說一次",
          hintEn: "Thirty seconds. Record it, and listen for whether the last line really tells people what to bring you.",
          hintZh: "30 秒。錄下來，聽最後一句有沒有真的說清楚「可以找你做什麼」。",
          low: 25,
          high: 40,
        },
      ],
    },

    // ============================================================ 2
    {
      id: "progress",
      en: "Reporting progress",
      zh: "工作進度報告",
      blocks: [
        {
          t: "lead",
          en: "The same three steps every time: where it is now, what you'll do next, what is in the way.",
          zh: "每次報告都用固定的三步驟：目前進度、下一步行動、遇到的問題。",
        },
        {
          t: "model",
          en: "Three steps, three sentences",
          zh: "三步驟，三句話",
          hintEn: "One sentence each is usually enough.",
          hintZh: "每個步驟通常一句話就夠。",
          revealEn: "Show the example", revealZh: "顯示範例",
          parts: [
            { tag: "① Current progress", tagZh: "目前進度", en: "I've finished the AE timeline module and it's ready for review.", zh: "AE 時間軸模組已經完成，可以審閱了。" },
            { tag: "② Next steps", tagZh: "下一步行動", en: "Next, I'll start on the lab data listing, aiming to finish by Wednesday.", zh: "接下來我會開始做 lab data listing，目標星期三完成。" },
            { tag: "③ Issues or blockers", tagZh: "遭遇的問題", en: "One blocker: I'm still waiting for access to the dosing data.", zh: "有一個卡點：我還在等 dosing data 的存取權限。" },
          ],
        },
        {
          t: "note",
          en: "The same three steps, in writing",
          zh: "同一個架構，書面版",
          bodyEn: [
            "Send a short handoff message at the end of your day, in those three steps. Your US colleagues come online the next morning already knowing where things are, instead of asking in a meeting.",
            "You can draft it with AI before a meeting, to make it shorter and more concrete — but keep the three steps.",
          ],
          bodyZh: [
            "下班前用這三步驟傳一則簡短的交接訊息，美國同事早上上線時就能立刻掌握狀況，不必等到會議才問。",
            "會前可以先透過 AI 整理內容，讓報告更簡潔、具體——但三步驟要保留。",
          ],
        },
      ],
    },

    // ============================================================ 3
    {
      id: "shape",
      en: "Why the same shape every time",
      zh: "為什麼每次都用同一個架構",
      blocks: [
        {
          t: "lead",
          en: "You asked whether repeating the same pattern would sound dull. It is worth answering properly, because it decides how you use everything else on this page.",
          zh: "你擔心反覆使用相同的說話模式會讓人感到枯燥。這個問題值得好好回答，因為它決定了你怎麼使用這一頁的其他東西。",
        },
        {
          t: "note",
          en: "What workplace communication is for",
          zh: "職場溝通的目的",
          bodyEn: [
            "The main purpose is not variety in the language. It is **reducing the time the other person needs to understand you**. Once colleagues know the order your information arrives in, they can predict the structure, and understanding gets easier.",
            "A fixed shape has a second benefit: it puts the conclusion first for you, automatically. That is the habit we have been practising for weeks. With a shape, you don't have to work out the next sentence while you are still speaking.",
          ],
          bodyZh: [
            "職場溝通的主要目的不是追求語言形式的變化，而是**減少對方理解資訊所需要的時間**。當同事熟悉你的表達順序，他們就更容易預測資訊的結構，進而理解內容。",
            "固定架構還有另一個好處：它會自然帶你先講結論。這正是我們過去幾堂課一直在練習的「結論先行」。有了架構，你不需要一邊說一邊想下一句要講什麼。",
          ],
        },
      ],
    },

    // ============================================================ 4
    {
      id: "clarify",
      en: "Checking you've understood",
      zh: "確認與釐清資訊",
      blocks: [
        {
          t: "lead",
          en: "When you haven't fully followed something, or you're not sure what is being asked for, ask. Make sure of three things in particular: what the work is, what counts as delivered, and when it is due.",
          zh: "聽不懂、沒有完全理解，或不確定任務的要求時，就主動詢問。尤其要確保理解工作內容、交付要求及截止期限。",
        },
        {
          t: "bank",
          en: "The two to have ready",
          zh: "兩個要隨時能用的句型",
          hintEn: "Tap a row for the Chinese; 🔊 to hear it.",
          hintZh: "點一列看中文，點 🔊 可聽。",
          rows: [
            { en: "Just to make sure I understand…", zh: "我確認一下我的理解……" },
            { en: "Could you walk me through that part?", zh: "那個部分可以再帶我看一次嗎？" },
          ],
        },
        {
          t: "note",
          en: "“End of day” — whose end of day?",
          zh: "「end of day」是誰的 end of day？",
          bodyEn: "Across time zones this is the easiest thing in the world to get wrong, and it is always the deadline that suffers. Ask once, in one sentence: **Just to confirm — is that end of day Friday, Eastern time?**",
          bodyZh: "跨時區合作時，截止期限特別容易誤會，而且受害的永遠是時程。用一句話問清楚：**Just to confirm — is that end of day Friday, Eastern time?**",
        },
      ],
    },

    // ============================================================ 5
    {
      id: "explain",
      en: "Explaining technical work",
      zh: "向非技術同事解釋",
      blocks: [
        {
          t: "lead",
          en: "For data management, the statisticians, and anyone else who doesn't program: where the data came from, how something was calculated, what the standards require, and what went wrong technically.",
          zh: "針對 Data Management、統計師，以及其他不熟悉程式的同事：資料的來源、計算邏輯、資料規範，以及技術問題。",
        },
        {
          t: "frames",
          en: "Three steps, again",
          zh: "一樣是三步驟",
          hintEn: "The shape is the same as a progress update. Only the content changes.",
          hintZh: "架構和進度報告一樣，只是內容不同。",
          items: [
            { en: "① The conclusion, in one sentence — the result first.", zh: "①一句話結論——先講結果。" },
            { en: "② One analogy, using something they already know.", zh: "②一個比喻——用對方熟悉的事物說明。" },
            { en: "③ What it means for them.", zh: "③對他們的影響——這件事跟他有什麼關係。" },
          ],
        },
        {
          t: "note",
          en: "Practising it before you need it",
          zh: "先練，不要等到要用",
          bodyEn: "Ask an AI to play a project manager with no technical background, and explain one of your own tools in 30 to 60 seconds. Do it for the Shiny review app, the Quarto workflow and the KRI dashboard — those are the three you will be asked about.",
          bodyZh: "請 AI 扮演沒有技術背景的專案經理，用 30–60 秒說明你自己的一個工具。Shiny 審閱應用、Quarto 流程、KRI 儀表板各練一次——你會被問到的就是這三個。",
        },
        {
          t: "practice",
          en: "Thirty to sixty seconds",
          zh: "30 到 60 秒",
          hintEn: "Record it, then listen: did the conclusion come first, and is the analogy actually theirs?",
          hintZh: "錄下來再聽：結論有沒有先講？比喻是不是真的用了對方熟悉的東西？",
          low: 30,
          high: 60,
        },
      ],
    },

    // ============================================================ 6
    {
      id: "boundaries",
      en: "Workload and boundaries",
      zh: "工作量與專業界線",
      blocks: [
        {
          t: "lead",
          en: "When something new lands on top of work you have already committed to, the move is not to refuse. It is to show the workload, the deadlines and the priorities — and let the other person choose.",
          zh: "當原本已有預定完成的工作，又突然被要求增加新任務時，做法不是直接拒絕合作，而是明確呈現工作量、期限與優先順序，並讓對方在不同安排之間做選擇。",
        },
        {
          t: "bank",
          en: "Three patterns you can use as they are",
          zh: "可以直接使用的三個句型",
          hintEn: "Tap a row for the Chinese.",
          hintZh: "點一列可看中文。",
          rows: [
            { en: "I'm happy to take this on. I'm currently working on X, due Thursday. If this is the priority, I can move X to next Monday. Which would you prefer?", zh: "呈現選項，讓對方決定優先順序。" },
            { en: "To do this well, I'd need until Friday. Would that work, or should we narrow the scope?", zh: "爭取合理的時間。" },
            { en: "Let me check my current workload and get back to you by this afternoon.", zh: "先爭取思考時間，不當場答應。" },
          ],
        },
        {
          t: "note",
          en: "Why this one matters more than it looks",
          zh: "為什麼這件事比看起來重要",
          bodyEn: [
            "You said yourself that you have often taken on more work to keep relationships good and to show what you can do — and that it left you carrying too much.",
            "Boundaries are not a personal preference. They affect the quality of the work, the schedule, and your health. Being professional does not mean accepting everything.",
          ],
          bodyZh: [
            "你自己也反思過：過去在工作中，常因為希望維持良好關係、展現工作表現，而願意接受更多任務，結果讓自己承受過高的工作負荷。",
            "工作界線不只是個人偏好，也涉及工作品質、時程管理與健康。專業不等於接受所有要求。",
          ],
        },
      ],
    },

    // ============================================================ 7
    {
      id: "smalltalk",
      en: "Small talk",
      zh: "閒聊",
      blocks: [
        {
          t: "lead",
          en: "You said the technical discussion is the easy part to prepare, and the few minutes before a meeting starts are the hard part. Split it into two layers and it stops being one big problem.",
          zh: "你說正式討論技術工作比較容易準備，反而是會議開始前的閒聊讓你感到困難。把它分成兩個層次，它就不再是一個大問題。",
        },
        {
          t: "bank",
          en: "Layer one — everyday greetings",
          zh: "第一層｜日常問候",
          hintEn: "Two or three exchanges is enough. A short question back is what keeps it going.",
          hintZh: "兩三個來回就夠。延續對話靠的是簡短的反問。",
          rows: [
            { en: "How was your weekend?", zh: "週末過得怎麼樣？" },
            { en: "That sounds great. Anything fun planned for this week?", zh: "聽起來不錯。這週有什麼好玩的安排嗎？（對方回答後的反問）" },
            { en: "Good morning! Well, it's evening over here.", zh: "早安！不過我這邊是晚上了。時差本身就是最自然的開場話題。" },
          ],
        },
        {
          t: "note",
          en: "Layer two — something that belongs to them",
          zh: "第二層｜個人化話題",
          bodyEn: [
            "Prepare topics from what you know about the person. One student knew his manager had served in the navy, and used it to open a conversation that the manager clearly valued — because it showed he had paid attention.",
            "Use AI to rehearse: have it play different colleagues and situations, and practise opening and continuing.",
            "The point of small talk is not to show how fluent your English is. It is to build familiarity, lower the pressure of talking to each other, and let a working relationship form.",
          ],
          bodyZh: [
            "根據對方的背景與興趣準備話題。有位學員事先知道主管曾有海軍背景，便用這項資訊設計自然的交流話題，讓對方感受到自己受到關注。",
            "用 AI 模擬不同同事、主管與會議情境，練習如何開啟和延續對話。",
            "Small Talk 的目的不是展示英文有多流利，而是建立熟悉感、降低互動壓力，並逐漸形成合作關係。",
          ],
        },
      ],
    },

    // ============================================================ 8
    {
      id: "us-first",
      en: "Working with a US team — the five that cause trouble",
      zh: "與美國團隊合作：最容易出狀況的五件事",
      blocks: [
        {
          t: "lead",
          en: "Ordered by how often they go wrong. None of these is about English — they are habits, and they are what actually causes misunderstandings.",
          zh: "依照「最容易出狀況」的順序排列。這些都不是英文本身的問題，而是文化習慣的差異——那才是誤會真正的來源。",
        },
        {
          t: "facts",
          en: "The five",
          zh: "五件事",
          hintEn: "Each one has the sentence that handles it.",
          hintZh: "每一條都附上可以直接用的句子。",
          items: [
            {
              en: "**“Yes” is a commitment.** In Taiwan 「好」 can mean “I heard you”. An American colleague hears *Yes* or *Sure* as agreement, and will track it against the schedule. Silence usually reads as agreement too.",
              zh: "**「Yes」在美國就是承諾。**台灣人說「好」，有時只代表「我聽到了」；美國同事聽到 Yes 或 Sure，會直接當成你答應了，而且會照時程追蹤。沉默通常也會被解讀為同意或沒意見。",
              soEn: "When you're not sure, don't agree yet: *Let me check and get back to you by tomorrow.* Or commit precisely: *I can do A by Friday. B would need until next week.*",
              soZh: "不確定的時候不要先答應：Let me check and get back to you by tomorrow. 或者精準承諾：I can do A by Friday. B would need until next week.",
            },
            {
              en: "**Bad news goes early.** US workplaces run on *no surprises*. The common habit here is to solve it quietly and report only if you really can't — but there, reporting late damages trust more than the problem itself does.",
              zh: "**壞消息要早講。**美國職場很重視 no surprises。台灣常見的做法是先自己默默解決，真的搞不定才回報；但在美國，延遲回報比問題本身更傷信任。",
              soEn: "This is step ③ of the progress update, and it should not always say “no problem”: *Quick heads-up: the lab data is delayed, which may push the dashboard to Monday.*",
              soZh: "這對應進度報告的第三步「Issues or Blockers」，不要每次都報「沒問題」：Quick heads-up: the lab data is delayed, which may push the dashboard to Monday.",
            },
            {
              en: "**Speak in meetings.** Quiet is not read as modest. It is read as having no opinion, or not being engaged.",
              zh: "**開會時要主動發言。**在美國會議中，安靜不會被解讀為謙虛，比較可能被解讀為「沒有想法」或「沒有參與」。",
              soEn: "Prepare at least one point or question before every meeting: *Can I add something here?* · *Building on what Sarah said…*",
              soZh: "每次會前準備至少一個觀點或問題：Can I add something here? · Building on what Sarah said…",
            },
            {
              en: "**Asking shows professionalism, not weakness.** The general view is that asking first beats doing it wrong and starting again.",
              zh: "**提問代表專業，不代表能力不足。**美國同事普遍認為，問清楚再做比做錯重來好。",
              soEn: "Use the clarification lines freely, and confirm the split of work before a meeting ends: *So to recap, I'll handle X by Thursday. Did I get that right?*",
              soZh: "Clarification 句型要大膽用。會議結束前主動確認分工，也會被視為負責任：So to recap, I'll handle X by Thursday. Did I get that right?",
            },
            {
              en: "**Let your contribution be visible.** “We as a team” and “I just helped a little” are normal here. There, too much modesty makes your work invisible.",
              zh: "**讓自己的貢獻被看見。**台灣文化習慣說「我們團隊」或「只是幫忙一下」，但在美國，過度謙虛會讓你的貢獻變得看不見。",
              soEn: "Active voice, concrete result. This is not boasting — it tells your manager what they can hand you next.",
              soZh: "用主動語態，講出具體成果。這不是自誇，而是讓主管知道可以把什麼工作交給你。",
            },
          ],
        },
        {
          t: "upgrade",
          en: "The modesty that costs you",
          zh: "會讓你吃虧的謙虛",
          hintEn: "Same facts, two versions. One of them tells your manager what you can be trusted with.",
          hintZh: "同樣的事實，兩種說法。其中一種會讓主管知道你能被交付什麼。",
          beforeTag: "Invisible", beforeTagZh: "看不見",
          beforeEn: "I just helped a little with the dashboard.",
          beforeZh: "我只是幫忙做了一點儀表板的部分。",
          adds: [
            { en: "active voice — I built", zh: "主動語態——I built" },
            { en: "name the thing", zh: "說出那個東西的名字" },
            { en: "one concrete result", zh: "一個具體成果" },
          ],
          revealEn: "Show the visible version", revealZh: "顯示被看見的版本",
          afterTag: "Visible", afterTagZh: "被看見",
          afterEn: "I built the KRI dashboard, which cut review time by about half.",
          afterZh: "我做了 KRI 儀表板，把審閱時間縮短了大約一半。",
        },
      ],
    },

    // ============================================================ 9
    {
      id: "us-second",
      en: "Reading them, and being read",
      zh: "聽懂對方，也讓對方聽懂",
      blocks: [
        {
          t: "bank",
          en: "Polite instructions, and what they mean",
          zh: "聽懂「客氣的指令」",
          hintEn: "Americans give feedback gently. Gentle does not mean optional. Tap a row for what it actually means.",
          hintZh: "美國人給回饋時通常很委婉，但委婉不代表可以忽略。點一列可看實際意思。",
          rows: [
            { en: "It might be worth looking into…", zh: "請你去做。" },
            { en: "Have you considered…?", zh: "我覺得你應該這樣做。" },
            { en: "That's interesting.", zh: "不一定是稱讚，可能是保留。" },
            { en: "Great job, just a few small things…", zh: "那些 small things 很重要。" },
          ],
        },
        {
          t: "note",
          en: "It works in the other direction too",
          zh: "反過來也一樣",
          bodyEn: "Americans usually affirm first and then suggest. When you give feedback, the same order works — and it will sound natural to them rather than blunt.",
          bodyZh: "美國人習慣先肯定再提建議；你給回饋時也可以採用這個順序，聽起來會自然，而不會顯得生硬。",
        },
        {
          t: "frames",
          en: "A flatter hierarchy — disagreeing is fine",
          zh: "階層比較扁平——可以表達不同意見",
          hintEn: "First names for managers are normal. Disagreeing on a technical judgement reads as professional, not rude — as long as it is about the idea, not the person.",
          hintZh: "直接叫主管名字是正常的。對技術判斷有不同看法時，表達出來會被視為專業，而不是冒犯；重點是針對想法，不針對人。",
          items: [
            { en: "I see it a bit differently. Could I walk you through my concern?", zh: "我的看法稍微不同，可以讓我說明一下我的顧慮嗎？" },
          ],
        },
        {
          t: "note",
          en: "The calendar you are walking into",
          zh: "你會遇到的行事曆",
          bodyEn: [
            "**US daylight saving ends on Sunday 1 November — the day before you start.** Taiwan has none, so the gap to US Eastern goes from 12 hours to 13, and the meetings move an hour later. Check every meeting time in your first week.",
            "**Thanksgiving is Thursday 26 November**, and many colleagues take the rest of the week. From late December into the new year, replies slow down noticeably — leave room in the schedule for it.",
            "**Evenings are theirs.** Don't expect replies at night, and say early which hours suit you — that is part of setting boundaries too.",
          ],
          bodyZh: [
            "**美國夏令時間在 11 月 1 日（週日）結束，正好是你上工前一天。**台灣沒有夏令時間，所以和美東的時差會從 12 小時變成 13 小時，會議會比原本晚一個小時。第一週要特別確認會議時間。",
            "**感恩節是 11 月 26 日（週四）**，很多美國同事會連休到週末。12 月下旬到新年，美國團隊的回覆速度也會明顯變慢，排時程時要預留空間。",
            "**下班時間是他們的。**不要期待對方在晚上回訊息；你也可以一開始就說清楚自己方便聯絡的時段，這也是建立專業界線的一部分。",
          ],
        },
        {
          t: "bank",
          en: "Small talk — what not to ask",
          zh: "Small Talk 的禁區",
          hintEn: "In Taiwan some of these are warmth. In a US workplace they read as intrusive.",
          hintZh: "以下話題在台灣可能是關心，在美國職場會被視為冒犯或侵犯隱私。",
          rows: [
            { en: "Age, weight, how someone looks", zh: "年齡、體重、外表變化" },
            { en: "Salary, house prices, what something cost", zh: "薪水、房價、花費" },
            { en: "Marriage, plans for children", zh: "婚姻、生小孩計畫" },
            { en: "Politics, religion", zh: "政治、宗教" },
            { en: "Safe: weekends, sport, travel, food, pets, the weather, the time difference", zh: "安全的話題：週末活動、運動賽事、旅遊、美食、寵物、天氣、時差" },
          ],
        },
        {
          t: "note",
          en: "In writing: the conclusion goes in the first line",
          zh: "書面溝通：結論放在第一句",
          bodyEn: [
            "US workplaces run on **BLUF — bottom line up front**: what you need, or the conclusion, in the opening sentence. It is exactly the conclusion-first habit you have been practising.",
            "Make the subject line specific: *Action needed: AE listing review by Fri.* And acknowledge a task when it arrives rather than going quiet: *Got it, will send by Friday.*",
          ],
          bodyZh: [
            "美國職場的書面溝通很強調 **BLUF（Bottom Line Up Front）**，也就是把結論和需求放在最前面——和你一直在練的「結論先行」完全一樣。",
            "主旨要具體：Action needed: AE listing review by Fri。收到任務時簡短確認，不要已讀不回：Got it, will send by Friday。",
          ],
        },
      ],
    },

    // ============================================================ 10
    {
      id: "before",
      en: "Before 2 November",
      zh: "上工前行動清單",
      blocks: [
        {
          t: "facts",
          en: "Five things to have done",
          zh: "五件要做完的事",
          hintEn: "All five are an hour's work in total, and all five are rehearsal rather than writing.",
          hintZh: "五件加起來大約一小時，而且都是「練」，不是「寫」。",
          items: [
            {
              en: "Write both self-introductions — thirty seconds and sixty.",
              zh: "寫好 30 秒與 60 秒自我介紹各一版。",
              soEn: "Start from your interview version and change the tone to a teammate's.",
              soZh: "以現有面試版本為基礎，改成對隊友說話的合作語氣。",
            },
            {
              en: "Run one progress update with AI.",
              zh: "用 AI 模擬一次進度報告。",
              soEn: "The three steps, once out loud and once in writing.",
              soZh: "套用「目前進度 → 下一步 → 遇到的問題」，口頭說一次、書面寫一次。",
            },
            {
              en: "Run one technical explanation with AI.",
              zh: "用 AI 模擬一次技術解釋。",
              soEn: "Have it play a PM with no technical background; 30 to 60 seconds.",
              soZh: "請 AI 扮演非技術背景的 PM，練習 30–60 秒說明。",
            },
            {
              en: "Rehearse one workload conversation.",
              zh: "練習一次「工作量協調」對話。",
              soEn: "Have AI play a manager dropping an extra task on you, and answer with the three patterns.",
              soZh: "請 AI 扮演臨時加派任務的主管，用上面的句型回應。",
            },
            {
              en: "Prepare two personal small-talk topics.",
              zh: "準備兩個個人化 Small Talk 話題。",
              soEn: "Once you start, learn a little about your manager and your main colleagues, and prepare one topic each.",
              soZh: "到職後先了解主管與主要同事的背景，各準備一個話題。",
            },
          ],
        },
      ],
    },

    // ============================================================ 11
    {
      id: "situations",
      en: "Situations",
      zh: "情境練習",
      blocks: [
        {
          t: "lead",
          en: "Eight things that will happen in the first weeks. Answer out loud, in the shape the page gives you — then open the model and compare.",
          zh: "前幾週一定會遇到的八個情境。先用這一頁教的架構說出來，再打開範例對照。",
        },
        {
          t: "qa",
          kind: "First week", kindZh: "第一週",
          en: "It's your first team meeting, and they ask you to introduce yourself.",
          zh: "第一次團隊會議，請你自我介紹。",
          answer: [
            { tag: "Thirty seconds", tagZh: "30 秒", en: "Hi everyone, I'm Winkle. I'm joining as [your role], based in Taipei. I focus on clinical data visualization, mainly in R and Shiny. If you need anything visual for data review, I'm happy to help.", zh: "大家好，我是 Winkle，擔任〔你的職稱〕，在台北。我主要做臨床資料視覺化，主力是 R 和 Shiny。如果在資料審閱上需要任何視覺化的東西，很樂意幫忙。" },
          ],
        },
        {
          t: "qa",
          kind: "Reporting", kindZh: "回報",
          en: "Your manager asks how things are going.",
          zh: "主管問你進度如何。",
          answer: [
            { tag: "Three steps", tagZh: "三步驟", en: "I've finished the AE timeline module and it's ready for review. Next, I'll start on the lab data listing, aiming to finish by Wednesday. One blocker: I'm still waiting for access to the dosing data.", zh: "AE 時間軸模組已經完成，可以審閱了。接下來我會開始做 lab data listing，目標星期三完成。有一個卡點：我還在等 dosing data 的存取權限。" },
          ],
        },
        {
          t: "qa",
          kind: "Reporting", kindZh: "回報",
          en: "The data you're waiting for is late, and it will push your deliverable to Monday.",
          zh: "你在等的資料延遲了，交付日期會順延到星期一。",
          tipEn: "Early, not once it is solved. Late reporting costs more trust than the problem does.",
          tipZh: "要早講，不要等解決了才說。延遲回報比問題本身更傷信任。",
          answer: [
            { tag: "Heads-up", tagZh: "預告", en: "Quick heads-up: the lab data is delayed, which may push the dashboard to Monday.", zh: "先跟你說一聲：lab data 延遲了，儀表板可能要順延到星期一。" },
          ],
        },
        {
          t: "qa",
          kind: "Clarifying", kindZh: "釐清",
          en: "You've just been given a task and you didn't fully follow it. It's due “end of day Friday”.",
          zh: "你剛拿到一個任務，但沒有完全聽懂，而且期限是「end of day Friday」。",
          answer: [
            { tag: "Understand it", tagZh: "先弄懂", en: "Just to make sure I understand… could you walk me through that part?", zh: "我確認一下我的理解……那個部分可以再帶我看一次嗎？" },
            { tag: "Pin the deadline", tagZh: "釘住期限", en: "Just to confirm — is that end of day Friday, Eastern time?", zh: "再確認一下——是指美東時間星期五下班前嗎？" },
          ],
        },
        {
          t: "qa",
          kind: "Explaining", kindZh: "解釋",
          en: "A project manager with no technical background asks what your dashboard actually does.",
          zh: "一位沒有技術背景的 PM 問你，你的儀表板到底在做什麼。",
          tipEn: "Conclusion, analogy, and what it means for them. Sixty seconds, no acronyms.",
          tipZh: "結論、比喻、對他的影響。60 秒，不用縮寫。",
          answer: [
            { tag: "① Conclusion", tagZh: "①結論", en: "It shows the medical team which sites need attention this week, without anyone having to request a report.", zh: "它讓醫學團隊直接看到這週哪些試驗中心需要注意，不必再請人做報表。" },
            { tag: "② Analogy", tagZh: "②比喻", en: "Think of it like a dashboard in a car — you don't read the engine, you see the one light that's on.", zh: "可以想成車子的儀表板——你不需要看引擎，只要看到亮起來的那一個燈。" },
            { tag: "③ For them", tagZh: "③對他的影響", en: "For you, that means the issues reach you in the same week, not at the next data review.", zh: "對你來說，問題會在同一週就傳到你這裡，而不是等到下一次資料審閱。" },
          ],
        },
        {
          t: "qa",
          kind: "Boundaries", kindZh: "界線",
          en: "A colleague asks you to take on something new. You already have a deliverable due Thursday.",
          zh: "同事請你接一件新的工作，但你星期四已經有一個交付項目。",
          tipEn: "Don't refuse, and don't just absorb it. Show the workload and let them choose.",
          tipZh: "不要拒絕，也不要默默吸收。把工作量攤開，讓對方選。",
          answer: [
            { tag: "Show the choice", tagZh: "呈現選項", en: "I'm happy to take this on. I'm currently working on X, due Thursday. If this is the priority, I can move X to next Monday. Which would you prefer?", zh: "我很樂意接。我目前在做 X，星期四到期。如果這件事比較優先，我可以把 X 延到下週一。你希望怎麼安排？" },
            { tag: "Or buy time", tagZh: "或爭取時間", en: "Let me check my current workload and get back to you by this afternoon.", zh: "讓我確認一下目前的工作量，今天下午回覆你。" },
          ],
        },
        {
          t: "qa",
          kind: "Reading them", kindZh: "聽懂對方",
          en: "Someone says: “It might be worth looking into the lab listing.”",
          zh: "有人說：「It might be worth looking into the lab listing.」",
          tipEn: "That is an instruction, politely phrased. Treat it as one.",
          tipZh: "那是客氣說法的指令。就當成指令處理。",
          answer: [
            { tag: "Acknowledge, with a date", tagZh: "確認並給時間", en: "Got it — I'll look at the lab listing and come back to you by Thursday.", zh: "了解——我會看 lab listing，星期四前回覆你。" },
          ],
        },
        {
          t: "qa",
          kind: "Visibility", kindZh: "讓貢獻被看見",
          en: "In a review, someone asks what you contributed to the dashboard.",
          zh: "在檢討會議上，有人問你在儀表板上做了什麼。",
          answer: [
            { tag: "Say it plainly", tagZh: "直接說", en: "I built the KRI dashboard, which cut review time by about half.", zh: "我做了 KRI 儀表板，把審閱時間縮短了大約一半。" },
          ],
        },
        {
          t: "drill",
          en: "All eight, in a random order",
          zh: "八個情境，隨機抽題",
          hintEn: "Thirty seconds each. The clock starts when the situation finishes.",
          hintZh: "每題 30 秒。情境唸完就開始計時。",
        },
      ],
    },
  ],
};
