/* Winkle's Interview Prep — the content. render.js draws it.

   Who it is for. Winkle is a working adult: a statistical programmer with
   twelve years in clinical trials, currently a Statistical Programming Manager
   in Taipei, interviewing for a Senior Principal Statistical Programmer role
   in the UK — an individual-contributor role. His English works (he has
   presented at useR!, R/Pharma and ShinyConf); what he has not practised is
   answering unprepared questions in English while being judged. The page is
   pitched at that: structure and retrieval, not grammar.

   Naming, as Lewis chose it (15 Sep 2026):
   - Winkle is named; his surname is not used on the page.
   - The company he is applying to is never named. It is "a global
     pharmaceutical company" or "the company". Its job advertisement is
     quoted in short phrases, without its name or link.
   - His current employer IS named, inside the self-introduction, because that
     is the sentence he will actually say. Lewis weighed this and chose it.
   - The page carries noindex.

   Where it comes from — each source handled differently:
   - Lewis's ten-session course plan (student and coach versions, PDFs): the
     cover's opening letter and ground rules are his words, verbatim; so are
     the lines in the notes on the introduction, on the apology reflex, and on
     "buying information". The story list is his plan's eight, plus a ninth.
   - Lewis's cadence notes for the one-minute introduction, pasted in chat:
     the introduction itself, verbatim, including every mark.
   - Lewis's second handout, 面試準備（二）, 16 Sep 2026: the weighting of the
     four areas, the model answer to the out-of-role request, the conflict STAR
     stems with the rules for choosing that story, the finished global-
     submission answer, and the estimand primer. His English and his Chinese
     are his — reproduced verbatim, not improved. That handout also supplied
     real career facts the page had been leaving as slots: Athenex (BIMO, ISS),
     Parexel (define.xml and reviewer's guides), IQVIA (UK, France, US), and
     the regulator-requested RWE study inside the COVID-19 program.
   - Winkle's own notes on the role (NOVARTIS_Winkle.docx): the four focus
     areas and the facts about how the team works. These are what he has heard
     from people inside, so they are presented as "what you've heard", and
     never as the company's policy.
   - The job advertisement: quoted phrases in step 1, and the salary range in
     step 9.
   - The useR! 2026 poster script: the ninth story (the Quarto workflow) and
     the three-audience model in step 6 — the only project with enough facts
     on paper to write in full.

   What the page does NOT know, and so does not claim: the details of the
   COVID-19 trial (indication wording, population, endpoint, method), how the
   team of 18 was organised, and any conflict, failure or mentoring story.
   Those are [slots] or pending stories. Do not fill them from general
   knowledge — they have to come from him.

   Content marks: **stars** = stress; [brackets] = a slot he fills in.
*/

const PAGE = {
  title: "Winkle's Interview Prep",
  titleZh: "Winkle 的面試準備",

  cover: {
    kicker: "Interview preparation · 面試準備",
    role: "Senior Principal Statistical Programmer · a global pharmaceutical company · United Kingdom",
    roleZh: "資深首席統計程式設計師 · 國際藥廠 · 英國",
    intro: [
      {
        en: "You told me your English is what worries you. I don't think that's the real problem. You presented twice at useR! in Warsaw in July, in English, to an international audience. You've done R/Pharma and ShinyConf. Your English works.",
        zh: "你說你最擔心英文。我認為那不是真正的問題。七月你才在華沙用英文發表兩場 useR!，面對的是國際聽眾；R/Pharma 和 ShinyConf 你也都做過。你的英文是可以用的。",
      },
      {
        en: "What you haven't practised is being asked something you didn't prepare for, in English, while someone is judging you. That's a different skill, and it's trainable.",
        zh: "你沒練過的，是在有人評斷你的情況下，用英文回答沒準備過的問題。那是另一種能力，而且是可以訓練的。",
      },
      {
        en: "This is worth doing even if the interview never happens. The stories you build here — and the ability to pitch them at different depths — feed R/Pharma 2026, your LinkedIn posts, and any freelance conversation you have next year.",
        zh: "就算這場面試最後沒發生，這件事還是值得做。你在這裡打磨的故事，以及依對象調整深度的能力，可以直接用在 R/Pharma 2026、LinkedIn 貼文，以及明年任何接案洽談上。",
      },
    ],
    rulesEn: "Three ground rules",
    rulesZh: "三個原則",
    rules: [
      {
        en: "**Cold questions, recorded.** No preparation, no second take. It will feel bad at first. That discomfort is the training.",
        zh: "**隨機提問並錄音。**不準備、不重來。一開始會很不舒服，那個不舒服就是訓練本身。",
      },
      {
        en: "**Homework is recording, not writing.** Writing a good answer proves nothing. You need to hear yourself say it.",
        zh: "**作業是錄音，不是寫稿。**寫得好不代表講得出來。你需要聽見自己說。",
      },
      {
        en: "**Don't polish. Ship the ugly version.** If you re-record until it's perfect, you're practising editing, not speaking.",
        zh: "**不要修到完美，交出粗糙的版本。**反覆重錄到滿意，你練的是剪輯，不是口說。",
      },
    ],
    jump: "drill",
  },

  source: {
    en: "Built from Lewis's ten-session course plan, his two handouts — the cadence notes for the one-minute introduction, and 面試準備（二）on communication, submissions and estimands — Winkle's own notes on the role, the job advertisement, and the useR! 2026 poster script. Model answers use only those facts. Anything in a dashed gold box is for Winkle to fill in — the page doesn't know it.",
    zh: "本頁根據 Lewis 的十堂課程規劃、兩份講義（一分鐘自介的節奏筆記，以及《面試準備（二）：溝通題與 Estimand》）、Winkle 自己整理的職缺筆記、職缺公告，以及 useR! 2026 海報講稿製作。範例回答只使用這些資料中的事實；虛線金框的地方要由 Winkle 自己填，頁面並不知道。",
  },

  steps: [

    // ============================================================ 1
    {
      id: "the-role",
      n: 1,
      en: "The role and the team",
      zh: "職缺與團隊",
      blocks: [
        {
          t: "lead",
          en: "The job advertisement and what you've heard about the team say the same thing: they want someone who can lead a trial's programming across countries, and who already works in R, Shiny and Git.",
          zh: "職缺公告和你聽到的團隊情況說的是同一件事：他們要的人，能跨國帶領一個試驗的程式工作，而且已經在用 R、Shiny 和 Git。",
        },
        {
          t: "note",
          en: "Where the weight is — and what to bring to the next lesson",
          zh: "分數的重心，以及下一堂課要帶來的東西",
          bodyEn: [
            "Your notes put the language question down as the one you're most confident about. It is also the one that counts for least of the four — and it is already solid.",
            "What decides this interview is the first pair: communication and conflict, and your scientific understanding of a study. Neither is about tools. Both are about judgement and depth of thought.",
            "So bring two things: **one real conflict** you handled (choose it against the three conditions in step 5), and **one study you can go deep on** — the COVID-19 Phase III or the RWE study. For that one, be clear on four things: what the disease was, why the inclusion criteria were designed that way, what the primary endpoint was, and what statistical method was used.",
          ],
          bodyZh: [
            "你在筆記裡自評最有把握的是「SAS 以外的語言」。那一題在四個題型裡權重最低，而且已經練得很扎實了。",
            "真正決勝的是前兩題：溝通與衝突，以及你對案子的科學理解。這兩題跟工具無關，考的是判斷力與思考深度。",
            "所以請準備兩樣東西：**一個真實的溝通衝突**（依第 5 步的三個條件挑選），以及**一個你最有把握講深的案子**——COVID-19 三期或那個 RWE 研究都可以。針對那個案子，先想清楚四件事：研究的是什麼病症、收案條件為什麼這樣設計、主要療效指標是什麼、用了什麼統計方法。",
          ],
        },
        {
          t: "areas",
          en: "Where the interview will lean",
          zh: "面試的重點題型",
          hintEn: "From your own notes. Each card jumps to the step that prepares it.",
          hintZh: "出自你自己的筆記。點卡片可跳到對應的準備步驟。",
          items: [
            {
              en: "Communication and conflict", zh: "溝通與化解衝突", step: "conflict",
              whyEn: "Heaviest of the four. A request that isn't your job, and a real conflict you handled.",
              whyZh: "四題中權重最高。會問到「別人請你做不是你職責的事」，以及一次你實際處理過的衝突。",
            },
            {
              en: "Explaining a study", zh: "說清楚一個研究", step: "study",
              whyEn: "The one most likely to lose marks, and the one that opens the biggest gap. The disease, the patients, the method — then “why those patients?” and “was the method right?”",
              whyZh: "最可能失分、也最能拉開差距的一題。病症、受試者、統計方法——接著是「為什麼選這些病患？」和「方法真的合適嗎？」",
            },
            {
              en: "Global submissions", zh: "國際申報經驗", step: "global",
              whyEn: "You underestimated this one. Name the gap, then four concrete records.",
              whyZh: "這一題你低估自己了。先講缺口，再給四個具體實績。",
            },
            {
              en: "Beyond SAS", zh: "SAS 以外的語言", step: "beyond-sas",
              whyEn: "Your strongest, and the lightest of the four. The risk is saying too much, not too little.",
              whyZh: "你最有把握、權重也最低的一題。風險是講太多，而不是講太少。",
            },
          ],
        },
        {
          t: "facts",
          en: "What you've heard about how the team works",
          zh: "你聽到的團隊工作方式",
          hintEn: "From your notes, not from the company. Each fact tells you something to prepare.",
          hintZh: "出自你的筆記，不是公司的官方說法。每一條都提示你該準備什麼。",
          items: [
            {
              en: "Programmers write the TLF shells and carry full responsibility for them.",
              zh: "TLF shell 由 programmer 製作，並負完全責任。",
              soEn: "Be ready to talk about designing a shell and agreeing it with data management, statisticians and medical.",
              soZh: "準備好談如何設計 shell，以及如何和 DM、統計師、醫學部門確認內容。",
            },
            {
              en: "Shells are checked across functions — data management, statistics and medical are the people you talk to most.",
              zh: "shell 內容需要跨部門確認，DM、統計、醫學是最常溝通的對象。",
              soEn: "This is where most conflicts happen. Your conflict story is strongest if it comes from here.",
              soZh: "衝突多半發生在這裡。你的衝突故事如果出自這種情境，說服力最強。",
            },
            {
              en: "A study lead manages progress across teams, often in different countries.",
              zh: "擔任 lead 時，需要跨團隊管理進度，這些團隊常在不同國家。",
              soEn: "Have one concrete example of keeping a cross-country team on schedule: status updates, handovers, time zones.",
              soZh: "準備一個具體例子：如何讓跨國團隊準時交付——進度回報、交接、時差。",
            },
            {
              en: "A typical study has five to eight programmers and around two hundred TLFs.",
              zh: "一個案子通常 5–8 位 programmer，約 200 張 TLF。",
              soEn: "Your COVID-19 team of **18** is more than twice that. Say the number — it is your strongest leadership proof.",
              soZh: "你的 COVID-19 團隊有 **18** 人，是他們一般規模的兩倍以上。把數字說出來——這是你最有力的領導證據。",
            },
            {
              en: "Narratives and patient profiles are not programmers' work; they are highly automated and produced elsewhere.",
              zh: "Narrative 和 patient profile 不是 programmer 的職責，已高度自動化，由特定部門完成。",
              soEn: "A request to produce them is exactly the “not my responsibility” question. See step 5.",
              soZh: "有人請你做這些，正是「不是你職責的工作」那一題。見第 5 步。",
            },
            {
              en: "When a health authority meets the company about efficacy concerns, programmers may attend — and may have to programme a result on the spot.",
              zh: "監管機關召開療效疑慮會議時，programmer 可能要出席，並當場寫程式產出臨時需求的結果。",
              soEn: "Prepare an answer about producing an urgent result under pressure, accurately. See step 7.",
              soZh: "準備一個回答：在壓力下快速且正確地產出臨時結果。見第 7 步。",
            },
            {
              en: "The work is organised by compound, then indication (a trial or program lead), then individual study.",
              zh: "組織架構：compound（依藥物）> indication（trial lead，依適應症）> study lead（個別子案）。",
              soEn: "The advertisement says Trial Programmer or Lead/Program Programmer. Know which level you are describing when you talk about your own work.",
              soZh: "職缺寫的是 Trial Programmer 或 Lead/Program Programmer。講自己的經驗時，要清楚你說的是哪一個層級。",
            },
            {
              en: "AI is already used in programming, but only on specifications, never on real data. It drafts code from the spec, and the results are compared with the programmer's own.",
              zh: "已開始用 AI 協助 programming，但只能讀取 specification，不能讀正式資料。AI 依 spec 產生程式，再與 programmer 的結果比對。",
              soEn: "Have a view on AI as an independent check. See step 8.",
              soZh: "準備好你對「AI 作為獨立驗證」的看法。見第 8 步。",
            },
          ],
        },
        {
          t: "bank",
          en: "The advertisement's own words",
          zh: "職缺公告的原文用語",
          hintEn: "Use their words back to them. Tap a row for the Chinese.",
          hintZh: "用他們的詞回答他們。點一列可看中文。",
          rows: [
            { en: "lead SP activities as Trial Programmer or Lead/Program Programmer", zh: "以 Trial Programmer 或 Lead/Program Programmer 身分主導統計程式工作" },
            { en: "coordinate activities of internal and external programmers", zh: "協調內部與外部 programmer 的工作" },
            { en: "summarise and discuss the status of deliverables", zh: "摘要並討論交付項目的進度" },
            { en: "program-level standardisation for effective pooling", zh: "專案層級的標準化，以便有效合併資料" },
            { en: "quality control and inspection readiness", zh: "品質控管與查核準備度" },
            { en: "collaborative, traceable and reproducible programming", zh: "可協作、可追溯、可重現的程式工作" },
            { en: "Git-based version control workflows", zh: "以 Git 為基礎的版本控制流程" },
            { en: "proven communication and negotiation skills; the ability to influence", zh: "經證實的溝通與協商能力；影響他人的能力" },
            { en: "adopt R packages, R Shiny applications and modern programming approaches", zh: "採用 R 套件、R Shiny 應用程式與現代程式做法" },
          ],
        },
      ],
    },

    // ============================================================ 2
    {
      id: "introduction",
      n: 2,
      en: "Tell me about yourself",
      zh: "一分鐘自我介紹",
      blocks: [
        {
          t: "lead",
          en: "UK interviewers usually ask this first, and form their impression of your structure from it. One minute: senior, composed, conversational — not memorised.",
          zh: "英國面試通常一開場就問這題，並從中判斷你的邏輯結構。一分鐘：聽起來資深、沉穩、像在對話——而不是背稿。",
        },
        {
          t: "cadence",
          en: "The introduction, with its cadence",
          zh: "自我介紹與節奏標記",
          hintEn: "Tap ▶ to hear the pauses and the pace. Tap a section for its Chinese.",
          hintZh: "按 ▶ 聽停頓與快慢。點任一段可看中文。",
          waves: [
            {
              en: "Background", zh: "背景",
              stanzas: [
                [
                  "Hi, I'm **Winkle** /",
                  "> a statistical programmer with **12 years in clinical trials** /",
                  "most recently a **Statistical Programming Manager** /",
                  "at Junshi Biosciences in Taipei. //",
                ],
                [
                  "Most of my career has been in **trial and program leadership** /",
                  "> SDTM, ADaM, TLFs, and regulatory submissions /",
                  "across more than **70 studies**. //",
                ],
              ],
              tr: "大家好，我是 Winkle，一名在臨床試驗領域工作 12 年的統計程式設計師，最近的職位是台北君實生物的統計程式經理。我職涯大部分時間都在做試驗與專案層級的領導——SDTM、ADaM、TLF 與法規申報——橫跨超過 70 個研究。",
            },
            {
              en: "Leadership proof", zh: "領導實績",
              stanzas: [
                [
                  "The work I'm **proudest of** /",
                  "is a **COVID-19 Phase III program** /",
                  "where I led the programming /",
                  "> and coordinated a team of **18** /",
                  "to deliver the **full package** /",
                  "< in just **three months**. //",
                ],
                [
                  "< The results were published /",
                  "in the **New England Journal of Medicine**. ///",
                ],
              ],
              tr: "我最自豪的，是一個 COVID-19 第三期計畫：我主導程式工作，協調一個 18 人的團隊，只用三個月就交出完整的成果。研究結果刊登在《新英格蘭醫學期刊》。",
            },
            {
              en: "Technical difference", zh: "技術差異化",
              stanzas: [
                [
                  "Alongside that /",
                  "I've spent the last **four years** /",
                  "bringing **modern tooling** into the function /",
                  "> R, Shiny, Quarto, and Git-based workflows. //",
                ],
                [
                  "I built a **metadata-driven Shiny app** /",
                  "> for medical data review /",
                  "and a **Python tool** /",
                  "that cut aCRF preparation time /",
                  "< by about **60 percent**. //",
                ],
                [
                  "I've shared that work /",
                  "> at R/Pharma, ShinyConf, and useR! 2026 /",
                  "in **Warsaw**. //",
                ],
              ],
              tr: "此外，過去四年我一直把現代工具引進部門——R、Shiny、Quarto，以及以 Git 為基礎的工作流程。我打造了一個 metadata 驅動、用於醫學資料審閱的 Shiny 應用程式，以及一個讓 aCRF 準備時間減少約 60% 的 Python 工具。我在 R/Pharma、ShinyConf，以及在華沙舉行的 useR! 2026 分享過這些成果。",
            },
            {
              en: "Fit", zh: "契合",
              stanzas: [
                [
                  "I've worked with **UK, European, and US teams** /",
                  "since early in my career /",
                  "and I'd like to bring /",
                  "< both the **delivery discipline** /",
                  "and the **modern practices** /",
                  "to a program here. //",
                  "**Thank you.**",
                ],
              ],
              tr: "我從職涯早期就和英國、歐洲與美國的團隊合作，希望能把交付紀律與現代做法，一起帶到這裡的專案。謝謝。",
            },
          ],
        },
        {
          t: "note",
          en: "The strongest moment",
          zh: "最有力的時刻",
          bodyEn: [
            "COVID-19 Phase III, a team of 18, three months, the New England Journal of Medicine — this is your strongest evidence, so it should not be delivered at the same speed as the supporting details.",
            "That final pause after the journal's name is important. Don't rush into “Alongside that.” Let the achievement land.",
          ],
          bodyZh: [
            "COVID-19 第三期、18 人團隊、三個月、《新英格蘭醫學期刊》——這是你最有力的證據，所以不能用和支撐細節一樣的速度講。",
            "期刊名稱之後那個停頓很重要。不要急著接「Alongside that」，讓這個成就落地。",
          ],
        },
        {
          t: "frames",
          en: "Where to speed up — 10 to 15 percent faster",
          zh: "哪裡加快——快 10–15%",
          hintEn: "These are lists. If you slow down equally on every item, it sounds like you are reading bullet points from a résumé.",
          hintZh: "這些是清單。每一項都放慢，聽起來就像在念履歷上的條列。",
          items: [
            { en: "SDTM, ADaM, TLFs, and regulatory submissions", zh: "支撐資訊：技術清單" },
            { en: "R, Shiny, Quarto, and Git-based workflows", zh: "支撐資訊：工具清單" },
            { en: "R/Pharma, ShinyConf, and useR! 2026", zh: "支撐資訊：研討會清單" },
          ],
        },
        {
          t: "bank",
          en: "Where to slow down — extra time and weight",
          zh: "哪裡放慢——多給時間與力道",
          hintEn: "The last two matter most: the closing line sums up the two strengths the introduction has already shown.",
          hintZh: "最後兩個最重要：結尾那句是在總結前面已經建立的兩項優勢。",
          rows: [
            { en: "12 years in clinical trials", zh: "臨床試驗 12 年" },
            { en: "Statistical Programming Manager", zh: "統計程式經理" },
            { en: "70 studies", zh: "70 個研究" },
            { en: "COVID-19 Phase III program", zh: "COVID-19 第三期計畫" },
            { en: "team of 18", zh: "18 人團隊" },
            { en: "three months", zh: "三個月" },
            { en: "New England Journal of Medicine", zh: "新英格蘭醫學期刊" },
            { en: "60 percent", zh: "60%" },
            { en: "delivery discipline", zh: "交付紀律" },
            { en: "modern practices", zh: "現代做法" },
          ],
        },
        {
          t: "note",
          en: "A pause is a reset, not a stop",
          zh: "停頓是 reset，不是停下來",
          bodyEn: [
            "Each pause gives your listener time to process the idea, and gives you time to reset your breath and stress the next important phrase.",
            "One final adjustment: keep your pitch fairly neutral on the technical lists. When you reach an achievement or a result, lower the pace and lower the pitch slightly. That contrast makes you sound like a Senior Principal candidate — not someone reciting a prepared script.",
            "Memorise the structure, not the script. Record it once a day for a week.",
          ],
          bodyZh: [
            "不要把 / 想成「停下來」，而要想成 reset。每個停頓讓聽的人有時間消化這個想法，也讓你重新換氣，準備強調下一個重點。",
            "最後一個調整：講技術清單時音高保持平穩；講到成就或結果時，放慢速度、音高稍微降低。這個對比會讓你聽起來像 Senior Principal 的候選人，而不是在背一份準備好的講稿。",
            "記結構，不要背稿。連續一週每天錄一次。",
          ],
        },
        {
          t: "practice",
          en: "Say it, against the clock",
          zh: "計時說一次",
          hintEn: "Start the clock, then record. One minute is the target.",
          hintZh: "先開始計時，再按錄音。目標是一分鐘。",
          low: 50,
          high: 70,
        },
        {
          t: "qa",
          kind: "Opening", kindZh: "開場題",
          en: "Could you start by telling us a little about yourself?",
          zh: "可以先簡單介紹一下你自己嗎？",
          tipEn: "The one-minute version above. Background → leadership proof → technical difference → fit.",
          tipZh: "就是上面那一分鐘版本。背景 → 領導實績 → 技術差異化 → 契合。",
        },
        {
          t: "qa",
          kind: "Opening", kindZh: "開場題",
          en: "Walk me through your CV.",
          zh: "請帶我們看一下你的履歷。",
          tipEn: "The same spine, a little longer — about two minutes. Twelve years of foundation, four years of modern tooling, the proof, then why this role.",
          tipZh: "同一條主軸，稍微長一點——約兩分鐘。12 年基礎、近四年的現代工具、證據，最後是為什麼是這個職位。",
        },
      ],
    },

    // ============================================================ 3
    {
      id: "headline",
      n: 3,
      en: "Answer first",
      zh: "結論先行",
      blocks: [
        {
          t: "lead",
          en: "The single habit that changes the most: the headline sentence. Answer first, context second.",
          zh: "影響最大的一個習慣：主結論句。先給答案，再補脈絡。",
        },
        {
          t: "upgrade",
          en: "Same facts, two orders",
          zh: "同樣的事實，兩種順序",
          hintEn: "The question: “Do you use languages other than SAS?” Read the first answer, find where the answer is, then open the second.",
          hintZh: "題目：「你會用 SAS 以外的語言嗎？」先讀第一個回答，找出答案藏在哪裡，再打開第二個。",
          beforeTag: "Circling", beforeTagZh: "繞圈子",
          beforeEn: "Well, in my company we mainly use SAS, and about four years ago we started to think about R, because there were some problems with the review process, and then I tried Shiny, and also Python for some tools… so yes, I have some experience.",
          beforeZh: "嗯，我們公司主要用 SAS，大概四年前開始考慮 R，因為審閱流程有些問題，然後我試了 Shiny，也用 Python 做一些工具……所以是的，我有一些經驗。",
          adds: [
            { en: "the answer in the first five words", zh: "前五個字就給答案" },
            { en: "a number", zh: "一個數字" },
            { en: "two examples, then stop", zh: "兩個例子，然後停" },
          ],
          revealEn: "Show the headline-first version", revealZh: "顯示結論先行版",
          afterTag: "Headline first", afterTagZh: "結論先行",
          afterEn: "Yes — R is a core part of my work now. Over the last four years I've brought R, Shiny, Quarto and Git into our function. Two examples: a metadata-driven Shiny app for medical data review, and a Python tool that cut aCRF preparation time by about 60 percent.",
          afterZh: "是的——R 現在是我工作的核心之一。過去四年我把 R、Shiny、Quarto 和 Git 引進部門。舉兩個例子：一個 metadata 驅動、用於醫學資料審閱的 Shiny 應用程式，以及一個讓 aCRF 準備時間減少約 60% 的 Python 工具。",
        },
        {
          t: "frames",
          en: "Headline starters",
          zh: "主結論句的開頭",
          hintEn: "Each one forces the answer to the front. Tap 🔊 to hear one.",
          hintZh: "每一句都逼你把答案放到最前面。點 🔊 可聽。",
          items: [
            { en: "Yes — and the clearest example is…", zh: "是的——最清楚的例子是……" },
            { en: "The short answer is no. The reason is…", zh: "簡短的答案是否定的。原因是……" },
            { en: "Two things. First… and second…", zh: "兩件事。第一……第二……" },
            { en: "I'd do three things.", zh: "我會做三件事。" },
            { en: "It comes down to one question: …", zh: "關鍵在於一個問題：……" },
            { en: "In one sentence: …", zh: "用一句話說：……" },
          ],
        },
        {
          t: "note",
          en: "The thirty-second test",
          zh: "三十秒測試",
          bodyEn: "If the interviewer heard only your first sentence, would they have the answer? If not, the answer is buried. Move it up.",
          bodyZh: "如果面試官只聽到你的第一句話，他拿到答案了嗎？沒有的話，答案就是被埋起來了。把它往前移。",
        },
      ],
    },

    // ============================================================ 4
    {
      id: "stories",
      n: 4,
      en: "Your story bank",
      zh: "你的故事庫",
      blocks: [
        {
          t: "lead",
          en: "Almost every interview question is answered by one of these stories. You are not inventing on the spot — you are selecting.",
          zh: "幾乎每一道面試題都能用這些故事之一回答。你不是臨場編故事，你是在「選片」。",
        },
        {
          t: "note",
          en: "How to use the bank",
          zh: "怎麼使用故事庫",
          bodyEn: [
            "Each story has two lengths: thirty seconds and two minutes. The thirty-second one is harder — it forces the point to the front. Record both.",
            "The written versions are drafts built only from facts the page has. Change any sentence that isn't exactly true: an answer you can't defend in a follow-up question is worse than a shorter one. Dashed cards are stories only you can supply.",
          ],
          bodyZh: [
            "每則故事都有兩種長度：30 秒與 2 分鐘。30 秒的比較難，因為它逼你把重點放到最前面。兩種都要錄。",
            "頁面上寫好的版本是草稿，只用了頁面已知的事實。任何不完全正確的句子都要改：一個被追問就守不住的回答，比一個簡短的回答更糟。虛線卡片是只有你能提供的故事。",
          ],
        },
        {
          t: "story",
          id: "covid",
          en: "The COVID-19 Phase III program",
          zh: "COVID-19 第三期計畫",
          tags: [
            { en: "Leadership", zh: "領導" },
            { en: "Deadline pressure", zh: "時程壓力" },
            { en: "Coordinating a team", zh: "協調團隊" },
            { en: "Most memorable study", zh: "印象最深的研究" },
          ],
          short: {
            en: "In a **COVID-19 Phase III program**, I led the programming and coordinated a team of **18** to deliver the full package in **three months**. The results were published in the **New England Journal of Medicine**.",
            zh: "在一個 COVID-19 第三期計畫中，我主導程式工作，協調 18 人的團隊，在三個月內交出完整成果。研究結果刊登在《新英格蘭醫學期刊》。",
          },
          star: [
            { k: "S", en: "A COVID-19 Phase III program, on a timeline set by the pandemic rather than by us. [what made the deadline immovable]", zh: "一個 COVID-19 第三期計畫，時程是由疫情決定的，不是由我們。〔是什麼讓截止日無法更動〕" },
            { k: "T", en: "I led the programming. The full package had to be delivered in three months, and eighteen programmers had to work as one team.", zh: "我主導程式工作。完整成果必須在三個月內交付，18 位 programmer 必須像一個團隊一樣運作。" },
            { k: "A", en: "[how you split the work across the 18] [how you kept the standards consistent] [how you tracked status and dealt with problems]", zh: "〔你怎麼把工作分給 18 個人〕〔你怎麼維持標準一致〕〔你怎麼追蹤進度、處理問題〕" },
            { k: "R", en: "We delivered the full package in three months, and the results were published in the New England Journal of Medicine. [one thing you would do the same way again]", zh: "我們在三個月內交出完整成果，結果刊登在《新英格蘭醫學期刊》。〔一件你下次還會照做的事〕" },
          ],
          add: [
            { en: "The four things for the next lesson: what the disease was, why the inclusion criteria were designed that way, what the primary endpoint was, and what statistical method was used.", zh: "下一堂課要準備的四件事：研究的是什麼病症、收案條件為什麼這樣設計、主要療效指標是什麼、用了什麼統計方法。" },
            { en: "How the eighteen were organised: who reported to whom, and whether some were external.", zh: "18 人怎麼組織：誰向誰回報，其中是否有外部人員。" },
            { en: "One real problem during the three months, and what you did about it.", zh: "三個月中一個真實發生的問題，以及你怎麼處理。" },
          ],
        },
        {
          t: "story",
          id: "acrf",
          en: "The aCRF tool",
          zh: "aCRF 自動化工具",
          tags: [
            { en: "Improving a process", zh: "流程改善" },
            { en: "Initiative", zh: "主動性" },
            { en: "Beyond SAS", zh: "SAS 以外" },
          ],
          short: {
            en: "Preparing the annotated CRF was slow, manual work. I built a **Python tool** for it, and it cut aCRF preparation time by about **60 percent**.",
            zh: "準備註解 CRF 是費時的手工作業。我為此寫了一個 Python 工具，讓 aCRF 準備時間減少約 60%。",
          },
          star: [
            { k: "S", en: "Annotating the CRF by hand was slow and repetitive — [how long it used to take per study].", zh: "手動註解 CRF 又慢又重複——〔以前每個研究要花多久〕。" },
            { k: "T", en: "[whose idea the tool was, and who needed it]", zh: "〔工具是誰提議的、誰需要它〕" },
            { k: "A", en: "I built a Python tool that [what it does, in one sentence].", zh: "我寫了一個 Python 工具，它能〔用一句話說它做什麼〕。" },
            { k: "R", en: "Preparation time fell by about 60 percent. [who uses it now]", zh: "準備時間減少約 60%。〔現在有誰在用〕" },
          ],
          add: [
            { en: "How it works, in two plain sentences.", zh: "它怎麼運作——用兩句白話說明。" },
            { en: "How you got other people to use it. That turns it into an influencing story too.", zh: "你怎麼讓別人願意用它。這樣它也能當作「影響力」的故事。" },
          ],
        },
        {
          t: "story",
          id: "shiny",
          en: "The metadata-driven Shiny app",
          zh: "metadata 驅動的 Shiny 應用程式",
          tags: [
            { en: "Three audiences", zh: "三種聽眾" },
            { en: "Beyond SAS", zh: "SAS 以外" },
            { en: "Influencing", zh: "影響力" },
          ],
          short: {
            en: "I built a **metadata-driven Shiny app** for **medical data review**. It's an **internal review tool** — not a submission tool — that lets medical reviewers look at the data themselves.",
            zh: "我打造了一個 metadata 驅動、用於醫學資料審閱的 Shiny 應用程式。它是內部審閱工具——不是申報工具——讓醫學審閱人員可以自己查看資料。",
          },
          add: [
            { en: "What “metadata-driven” means in your app, in one sentence a clinician would follow.", zh: "你的 app 裡「metadata 驅動」是什麼意思——用一句臨床人員聽得懂的話。" },
            { en: "Who uses it, how often, and what they did before it existed.", zh: "誰在用、多常用，以及在它出現之前他們怎麼做。" },
            { en: "Words to keep exact: say **traceability**, not auditability; **internal review tool**, not submission tool.", zh: "用詞要精準：說 **traceability**，不說 auditability；說 **internal review tool**，不說 submission tool。" },
          ],
        },
        {
          t: "story",
          id: "quarto",
          en: "The Quarto monitoring workflow (useR! 2026)",
          zh: "Quarto 資料監測流程（useR! 2026）",
          tags: [
            { en: "Improving a process", zh: "流程改善" },
            { en: "Traceability", zh: "可追溯性" },
            { en: "Three audiences", zh: "三種聽眾" },
          ],
          short: {
            en: "Medical teams used to wait days for each new cut of the monitoring data. I built a modular **R and Quarto** workflow: the reviewer sets the filters, and the report builds itself. It took the process from **five steps to two** and saved over **60 percent** of the time.",
            zh: "醫學團隊以前每要一次新的監測資料，都要等好幾天。我建立了一套模組化的 R 與 Quarto 流程：審閱人員設定篩選條件，報告自動產生。流程從五個步驟縮短到兩個，節省了超過 60% 的時間。",
          },
          star: [
            { k: "S", en: "Medical teams regularly ask for data summaries and figures to monitor patient safety and data quality. Every request was a round trip — extract, code, output, send back — that typically took days, and the output often couldn't be traced back to the filters that were used.", zh: "醫學團隊會定期要資料摘要與圖表，來監測病患安全與資料品質。每次請求都是一個來回——擷取、寫程式、產出、回覆——通常要好幾天，而且輸出結果常常無法追溯當時用了哪些篩選條件。" },
            { k: "T", en: "Make the process faster, and make every report traceable.", zh: "讓流程更快，並讓每一份報告都可追溯。" },
            { k: "A", en: "I built a modular reporting workflow in R and Quarto, driven by a YAML configuration file. The reviewer specifies the patients, the time window and the domains, and the workflow produces one self-contained report: the filter conditions, the tables, the figures and the listings. Adding a new domain means adding a module, not touching the core code.", zh: "我用 R 和 Quarto 建立了一套由 YAML 設定檔驅動的模組化報表流程。審閱人員指定病患、時間窗口與 domain，流程就產生一份完整報告：篩選條件、表格、圖表與 listing。新增 domain 只要加一個模組，不必動核心程式。" },
            { k: "R", en: "The process went from five steps to two, and saved over 60 percent of the time. And because the report records exactly which filters were applied, the answer to “what did we see at that interim?” is always in the file.", zh: "流程從五步縮短到兩步，節省超過 60% 的時間。而且報告完整記錄了當時的篩選條件，所以「我們當時在期中看到什麼？」的答案永遠就在檔案裡。" },
          ],
        },
        {
          t: "story",
          id: "rwe",
          en: "The regulator-requested RWE study",
          zh: "主管機關要求的真實世界證據研究",
          tags: [
            { en: "Submissions", zh: "申報" },
            { en: "Data standards", zh: "資料標準" },
            { en: "Most memorable study", zh: "印象最深的研究" },
          ],
          short: {
            en: "Inside the COVID-19 Phase III program, a regulator asked for a **real-world evidence study**. We standardised **unstructured hospital data** through a full **SDTM, ADaM and TLF** pipeline, under regulatory timelines.",
            zh: "在 COVID-19 三期專案中，主管機關要求做一個真實世界證據研究。我們把非結構化的醫院資料，在法規時程壓力下，透過完整的 SDTM、ADaM 與 TLF 流程標準化。",
          },
          add: [
            { en: "What the regulator asked for, and why they asked for it.", zh: "主管機關要求什麼、為什麼要求。" },
            { en: "What “unstructured” meant in practice — and the hardest part of standardising it.", zh: "「非結構化」實際上是什麼樣子——以及標準化最難的地方。" },
            { en: "How long it took, and who did it.", zh: "花了多久、由誰執行。" },
            { en: "This is the second study you could go deep on. Prepare the same four points as the trial above.", zh: "這是你第二個可以講深的案子。請準備和上面那個試驗一樣的四個要點。" },
          ],
        },
        {
          t: "story",
          id: "timeline",
          pending: true,
          en: "The D3.js patient timeline",
          zh: "D3.js 病患時間軸",
          tags: [
            { en: "Clinical visualisation", zh: "臨床視覺化" },
            { en: "Beyond SAS", zh: "SAS 以外" },
          ],
          add: [
            { en: "What it shows, and for whom.", zh: "它呈現什麼、給誰看。" },
            { en: "Why D3.js rather than Shiny — one sentence.", zh: "為什麼用 D3.js 而不是 Shiny——一句話。" },
            { en: "One decision someone made because they could see it.", zh: "有人因為看得到它而做出的一個決定。" },
          ],
        },
        {
          t: "story",
          id: "kri",
          pending: true,
          en: "The KRI/QTL dashboard",
          zh: "KRI/QTL 儀表板",
          tags: [
            { en: "RBQM", zh: "以風險為基礎的品質管理" },
            { en: "Quality", zh: "品質" },
          ],
          add: [
            { en: "Which key risk indicators and quality tolerance limits it tracked.", zh: "它追蹤哪些關鍵風險指標與品質容許界限。" },
            { en: "Who acted on it, and one thing it caught early.", zh: "誰根據它採取行動，以及它提早抓到的一件事。" },
          ],
        },
        {
          t: "story",
          id: "conflict",
          pending: true,
          en: "A conflict you handled",
          zh: "一次你處理過的衝突",
          tags: [
            { en: "Conflict", zh: "衝突" },
            { en: "Communication", zh: "溝通" },
            { en: "Negotiation", zh: "協商" },
          ],
          add: [
            { en: "A real disagreement — best of all a spec or shell disagreement across functions, a CRO delivery-quality dispute, or a trade-off with medical or data management under a compressed timeline.", zh: "一次真實的意見分歧——最好是跨部門確認 spec 或 shell 的分歧、CRO 交付品質的爭議，或時程壓縮下與 medical 或 DM 的取捨。" },
            { en: "Their reason, stated so that it sounds reasonable. This is where the marks are.", zh: "對方的理由，而且要講得合理。分數就在這裡。" },
            { en: "What you actually did: who you called, what you walked through, what you proposed.", zh: "你實際做了什麼：找誰談、一起看過什麼、提出什麼方案。" },
            { en: "The outcome in one sentence, and the lesson in one. It doesn't have to be a win.", zh: "結果一句、反思一句。不必是你贏。" },
          ],
        },
        {
          t: "story",
          id: "failure",
          pending: true,
          en: "Something that went wrong",
          zh: "一次失敗",
          tags: [
            { en: "Failure", zh: "失敗" },
            { en: "Learning", zh: "學習" },
            { en: "Quality", zh: "品質" },
          ],
          add: [
            { en: "Something that went wrong that was at least partly yours.", zh: "一件出了錯、而且至少有一部分是你的責任的事。" },
            { en: "What you did in the first twenty-four hours.", zh: "你在最初 24 小時內做了什麼。" },
            { en: "What you changed so it couldn't happen again — this is the part they are really listening for.", zh: "你改了什麼，讓它不會再發生——這才是他們真正在聽的部分。" },
          ],
        },
        {
          t: "story",
          id: "mentoring",
          pending: true,
          en: "Someone you mentored",
          zh: "一次帶人的經驗",
          tags: [
            { en: "Mentoring", zh: "帶人" },
            { en: "Leadership", zh: "領導" },
            { en: "Knowledge sharing", zh: "知識分享" },
          ],
          add: [
            { en: "One person — by role, not by name.", zh: "一個人——用職位描述，不要說名字。" },
            { en: "What they couldn't do before, and could do after.", zh: "他們之前做不到、之後做得到的事。" },
            { en: "How you taught: pairing, code review, a guide you wrote.", zh: "你怎麼教：一起寫程式、code review、你寫的指南。" },
          ],
        },
        {
          t: "qa",
          kind: "Competency", kindZh: "能力題",
          en: "Tell me about a time you led a team under a tight deadline.",
          zh: "請舉一個你在時程很緊的情況下帶領團隊的例子。",
          story: "covid",
        },
        {
          t: "qa",
          kind: "Competency", kindZh: "能力題",
          en: "Tell me about a time you improved a process.",
          zh: "請舉一個你改善流程的例子。",
          story: "quarto",
          tipEn: "Or the aCRF tool. Choose the one you can tell with the result in the first sentence.",
          tipZh: "或用 aCRF 工具。選那個你能在第一句就說出結果的。",
        },
        {
          t: "qa",
          kind: "Competency", kindZh: "能力題",
          en: "Tell me about a time you influenced people who didn't report to you.",
          zh: "請舉一個你影響非直屬部屬的例子。",
          story: "shiny",
          tipEn: "Influence needs a person who had to be convinced. Name their role and what changed their mind.",
          tipZh: "「影響力」需要一個被說服的人。說出他的職位，以及是什麼讓他改變想法。",
        },
        {
          t: "qa",
          kind: "Competency", kindZh: "能力題",
          en: "Tell me about a mistake you made, and what you learned from it.",
          zh: "請談一次你犯的錯，以及你從中學到什麼。",
          story: "failure",
        },
        {
          t: "qa",
          kind: "Competency", kindZh: "能力題",
          en: "Tell me about someone you've mentored or developed.",
          zh: "請談一位你帶過或培養過的人。",
          story: "mentoring",
        },
        {
          t: "qa",
          kind: "Competency", kindZh: "能力題",
          en: "Tell me about a time you had to work with unclear or incomplete requirements.",
          zh: "請舉一個你在需求不清楚或不完整時工作的例子。",
          tipEn: "No story is mapped to this yet. Which of yours fits? Decide in the lesson — this is a gap to fill.",
          tipZh: "這題還沒有對應的故事。你的哪一則適用？在課堂上決定——這是要補的缺口。",
        },
      ],
    },

    // ============================================================ 5
    {
      id: "conflict",
      n: 5,
      en: "Communication and conflict",
      zh: "溝通與衝突",
      blocks: [
        {
          t: "lead",
          en: "The area you called the hardest. It comes in two forms — “what would you do if…” and “tell me about a time…” — and they need different shapes.",
          zh: "你認為最難的一類。它有兩種問法——「如果……你會怎麼做」和「請舉一個……的例子」——兩種需要不同的回答結構。",
        },
        {
          t: "qa",
          kind: "Communication", kindZh: "溝通題",
          en: "A colleague from another function asks you to do something that isn't part of your role. How do you handle it?",
          zh: "其他部門的同事請你做一件不屬於你職責的事，你會怎麼處理？",
          tipEn: "This is not testing whether you can defend your boundaries. “I'd decline politely” or “I'd ask them to go through the formal process” is the wrong direction — the team's own routine is programmers checking things across functions, so they are looking for someone easy to work with, not someone defensive.",
          tipZh: "這題不是在測你會不會守界線。答「我會婉拒」或「請他走正式流程」，方向就錯了——這個團隊的日常就是 programmer 主動跨部門確認，他們要找的是好合作的人，不是防守心強的人。",
          answer: [
            { tag: "Understand the need", tagZh: "先問清楚", en: "My first step would be to understand what they actually need. Often people ask the wrong person simply because they don't know who owns that piece — so I'd ask what the request is for and when they need it.", zh: "我的第一步是先弄清楚他們真正需要什麼。很多時候對方問錯人，只是因為不知道這件事該歸誰負責——所以我會問這個需求是為了什麼、什麼時候需要。" },
            { tag: "Small: just do it", tagZh: "小事直接做", en: "If it's something I can help with quickly and it doesn't put my own deliverables at risk, I'd just do it. Being easy to work with matters more than being strict about boundaries.", zh: "如果是我能很快協助、又不會影響自己交付的事，我就直接做。好合作這件事，比嚴守界線重要。" },
            { tag: "Larger: be transparent", tagZh: "大事透明協商", en: "If it's larger, I'd be transparent: explain what it would affect on my side, tell them who normally owns it, and offer an alternative — either a scaled-down version I can do now, or a realistic timeline. If it needs a decision above me, I'd raise it with my lead rather than quietly absorbing it or quietly dropping it.", zh: "如果規模比較大，我會坦白說明：這會影響我這邊的什麼、通常這件事歸誰負責，然後提出替代方案——可能是我現在就能做的簡化版本，或是一個實際可行的時程。如果需要更上層做決定，我會往上反映，而不是默默吸收或默默放掉。" },
            { tag: "The positioning line", tagZh: "定位句", en: "What I try to avoid is a flat no. In my experience most of these requests come from a real gap in the study, and the useful thing is to find where it should sit.", zh: "我盡量避免的是直接說不。以我的經驗，這類請求大多反映了專案裡真實存在的缺口，有用的做法是找出它該落在哪裡。" },
          ],
        },
        {
          t: "note",
          en: "Why that answer works",
          zh: "這個回答為什麼有效",
          bodyEn: [
            "Four moves: ask what's needed → do the small things → negotiate the larger ones openly → escalate only when the decision is genuinely above you.",
            "**quietly absorbing it or quietly dropping it** is the line to keep. It rules out both common bad habits at once — taking it all on and exhausting yourself, or agreeing and then never doing it. A senior interviewer nods at that.",
            "And the last sentence redefines an out-of-scope request as a gap in the study. That shift is what a Senior Principal sounds like.",
          ],
          bodyZh: [
            "四段結構：先問清楚 → 小事直接做 → 大事透明協商 → 該升級才升級。",
            "**quietly absorbing it or quietly dropping it** 這組對比要留著。它同時排除了兩種常見的壞做法——硬吞下來累死自己，或是答應了卻沒做。這句會讓資深面試官點頭。",
            "最後一句把「非職責的請求」重新定義成「專案裡的缺口」，格局立刻不同。這是 Senior Principal 該有的視角。",
          ],
        },
        {
          t: "qa",
          kind: "Communication", kindZh: "溝通題",
          en: "Tell me about a communication conflict you've had, and how you handled it.",
          zh: "請談一次你經歷過的溝通衝突，以及你怎麼處理。",
          story: "conflict",
          tipEn: "One or two sentences per part. The real scoring point is the second one: their concern has to come out sounding reasonable.",
          tipZh: "每段一到兩句就好。真正的評分點在第二段：務必把對方的理由講得合理。",
          answer: [
            { tag: "S · Situation", tagZh: "S｜情境：誰跟誰、為了什麼事", en: "On a study at [the company], the [function] team and I disagreed about [the issue].", zh: "在〔公司〕的一個案子裡，〔部門〕團隊和我在〔某件事〕上有不同意見。" },
            { tag: "T · The disagreement", tagZh: "T｜衝突點：雙方的立場與理由", en: "Their concern was [their reason]. From my side, [your reason].", zh: "他們的顧慮是〔對方的理由〕。就我這邊而言，〔你的理由〕。" },
            { tag: "A · What I did", tagZh: "A｜你做了什麼：具體動作", en: "I set up a short call with [whom], walked through [what], and proposed [the solution].", zh: "我和〔誰〕約了一個短會，一起看過〔什麼〕，並提出〔方案〕。" },
            { tag: "R · Result and lesson", tagZh: "R｜結果與學到的事", en: "We agreed on [the outcome]. What I took from it was [the lesson].", zh: "我們達成〔結果〕。我從中學到的是〔反思〕。" },
          ],
        },
        {
          t: "note",
          en: "Choosing the story — three conditions, three things to avoid",
          zh: "選故事：三個條件、三個禁忌",
          bodyEn: [
            "**One: the other side has to have a point.** If they were simply wrong or unreasonable, the question goes unanswered — they want to see whether you can hold another position in your head, not how right you were.",
            "**Two: there has to be real tension.** “We talked and it was fine” is too light; it sounds like nothing happened. **Three: the ending doesn't have to be perfect.** A compromise, a step back on both sides, even doing it their way and learning something — all good answers.",
            "Avoid all three of these: criticising a named person or department; writing yourself as the only hero; and “because they weren't professional enough” as the reason. British interview culture is especially sensitive to them.",
            "Best material: a cross-functional disagreement over a spec or a shell, an argument about the quality of a CRO's delivery, or a trade-off with medical or data management under a compressed timeline.",
          ],
          bodyZh: [
            "**一、對方要有道理。**如果故事裡對方純粹是錯的、不講理，這題就等於沒答——他們想看的是你能不能理解不同立場，不是你有多對。",
            "**二、要有真實的緊張感。**「我們溝通後就沒事了」太輕，聽起來像沒發生過。**三、結果不必完美。**妥協、各退一步、甚至最後照對方的做但你學到東西——都是好答案。",
            "三個禁忌：不批評特定的人或部門；不要把自己寫成唯一的英雄；不要用「因為對方不專業」當原因。英國面試文化對這三點特別敏感。",
            "素材建議：跨部門確認 spec 或 shell 的分歧、CRO 交付品質的爭議、時程壓縮下與 medical 或 DM 的取捨——這幾類最貼近這個職位。",
          ],
        },
        {
          t: "qa",
          kind: "Communication", kindZh: "溝通題",
          en: "The statistician and the medical team want different things in a table shell. What do you do?",
          zh: "統計師和醫學團隊對一份表格 shell 的需求不同，你會怎麼做？",
          answer: [
            { tag: "Headline", tagZh: "結論", en: "I make the disagreement concrete as early as possible — on the shell, before any code is written.", zh: "我會盡早把分歧具體化——在 shell 上處理，在寫任何程式之前。" },
            { tag: "How", tagZh: "做法", en: "I draft the shell from the SAP and circulate it early to the statistician, data management and medical, with the open questions marked.", zh: "我會根據 SAP 起草 shell，盡早發給統計師、DM 和醫學部門，並標出尚未決定的問題。" },
            { tag: "Resolve", tagZh: "化解", en: "If two people want different layouts, I mock up both and ask what decision the table is meant to support. That usually settles it.", zh: "如果兩個人要的版面不同，我會把兩個版本都做出來，然後問：這張表是要支援什麼決策？通常這樣就能解決。" },
            { tag: "Protect", tagZh: "保護", en: "Once it's agreed, I record the decision, so a late change is a visible change with a cost — not a quiet one.", zh: "一旦協議，我會把決定記錄下來，讓之後的變更成為看得見、有成本的變更，而不是悄悄發生。" },
          ],
        },
        {
          t: "bank",
          en: "Disagreeing, the British way",
          zh: "英式的委婉不同意",
          hintEn: "Soft words, firm position. Tap a row for the Chinese.",
          hintZh: "用詞軟、立場穩。點一列可看中文。",
          rows: [
            { en: "I see it slightly differently.", zh: "我的看法稍微不太一樣。" },
            { en: "That's a fair point. Can I add one thing?", zh: "有道理。我可以補充一點嗎？" },
            { en: "Can I check I've understood your concern?", zh: "我確認一下我理解你的顧慮了嗎？" },
            { en: "I'm not sure that works for the timeline. Could we look at it together?", zh: "我不確定這樣時程上行得通。我們可以一起看看嗎？" },
            { en: "What would you need to see to be comfortable with this?", zh: "你需要看到什麼，才會對這個方案放心？" },
            { en: "Would it help if I mocked up both versions?", zh: "如果我把兩個版本都做出來，會有幫助嗎？" },
            { en: "Let's go back to what the SAP says.", zh: "我們回頭看 SAP 怎麼寫。" },
            { en: "I'd rather flag this risk early than late.", zh: "我寧可早一點提出這個風險，而不是太晚。" },
            { en: "Happy to take that on. Which of my other deliverables should move?", zh: "我很樂意接。那我其他哪一項交付要往後延？" },
          ],
        },
        {
          t: "note",
          en: "Understatement works both ways",
          zh: "含蓄是雙向的",
          bodyEn: "In British English, “I'm not sure that's quite right” usually means “I think you're wrong”, and “That's an interesting idea” can mean no. Disagree in that register — and listen for it in theirs.",
          bodyZh: "在英式英語裡，「I'm not sure that's quite right」通常代表「我認為你錯了」，「That's an interesting idea」可能代表不行。用這種語氣表達不同意——也要聽得出對方用這種語氣時的意思。",
        },
      ],
    },

    // ============================================================ 6
    {
      id: "study",
      n: 6,
      en: "Explaining a study",
      zh: "說清楚一個研究",
      blocks: [
        {
          t: "lead",
          en: "Your notes name the challenge: summarising without drowning them in detail. Four sentences in a fixed order — then be ready for the two follow-ups.",
          zh: "你的筆記已經點出挑戰：摘要說明，避免描述過雜。四句話、固定順序——然後準備好兩個延伸問題。",
        },
        {
          t: "qa",
          kind: "Your studies", kindZh: "研究理解",
          en: "Tell me about the most memorable study you've worked on — the indication, the patient population and the statistical methods.",
          zh: "請描述你印象最深刻的研究，著重在適應症、研究對象以及統計方法。",
          story: "covid",
          tipEn: "Four sentences, then stop. Let them choose what to ask next.",
          tipZh: "四句話，然後停。讓他們決定接下來要問什麼。",
          answer: [
            { tag: "Design", tagZh: "設計", en: "It was a [randomised, double-blind] Phase III trial in [the indication], comparing [the treatment] with [the comparator].", zh: "那是一個〔隨機、雙盲〕的第三期試驗，適應症是〔適應症〕，比較〔試驗藥物〕與〔對照組〕。" },
            { tag: "Patients", tagZh: "受試者", en: "It enrolled [the population — who, and at what risk], about [number] patients.", zh: "收納的是〔受試族群——哪些人、什麼風險程度〕，約〔人數〕位病患。" },
            { tag: "Method", tagZh: "方法", en: "The primary endpoint was [the endpoint], analysed with [the method], with [the key sensitivity analysis].", zh: "主要指標是〔指標〕，以〔統計方法〕分析，並做了〔主要的敏感度分析〕。" },
            { tag: "My role", tagZh: "我的角色", en: "I led the programming and coordinated a team of 18. We delivered the full package in three months, and the results were published in the New England Journal of Medicine.", zh: "我主導程式工作，協調 18 人的團隊。我們在三個月內交出完整成果，結果刊登在《新英格蘭醫學期刊》。" },
          ],
        },
        {
          t: "qa",
          kind: "Your studies", kindZh: "研究理解",
          en: "Why do you think the study enrolled those particular patients?",
          zh: "你認為這個研究為什麼要找這些特徵的病患當研究對象？",
          answer: [
            { tag: "Headline", tagZh: "結論", en: "Because that's where the question matters most, and where the effect can be shown: patients who are [most likely to have the outcome the drug is meant to prevent].", zh: "因為那是這個問題最重要、也最能顯示效果的地方：〔最可能發生藥物要預防的結果〕的病患。" },
            { tag: "Reason", tagZh: "理由", en: "Enrolling patients at higher risk means more events, so the study can detect a difference with fewer patients and in less time.", zh: "收納風險較高的病患，事件數會比較多，研究就能用較少的人數、較短的時間偵測出差異。" },
            { tag: "Balance", tagZh: "權衡", en: "The trade-off is generalisability: the result applies most directly to that population, and [what that means for patients outside it].", zh: "代價是外推性：結果最直接適用於這個族群，而〔這對族群以外的病患代表什麼〕。" },
          ],
        },
        {
          t: "qa",
          kind: "Your studies", kindZh: "研究理解",
          en: "Was that method really appropriate?",
          zh: "這個研究方法真的合適嗎？",
          answer: [
            { tag: "Frame it", tagZh: "先定框架", en: "The way I'd frame that is as an estimand question. What we're really deciding is how to handle the intercurrent events. If patients discontinue and move to rescue medication, a treatment policy strategy answers a different question from a hypothetical one — and which is appropriate depends on whether the decision-maker cares about effectiveness in practice, or about the effect of the drug itself.", zh: "我會把這個問題放進 estimand 的框架來看。我們真正要決定的是期間事件怎麼處理。如果病人停藥後改用救援用藥，treatment policy 策略和 hypothetical 策略回答的其實是不同的問題——哪一個適合，取決於決策者在意的是實際使用下的效果，還是藥物本身的效果。" },
            { tag: "Fit", tagZh: "契合", en: "The method has to fit the endpoint. A time-to-event endpoint points to a Cox model or a log-rank test; a binary response to logistic regression; repeated continuous measurements to an MMRM.", zh: "方法必須配合指標。存活時間類指標用 Cox 模型或 log-rank 檢定；二元反應用邏輯斯迴歸；重複測量的連續指標用 MMRM。" },
            { tag: "Limits", tagZh: "限制", en: "Where I'd look hardest is the intercurrent events and the missing data — [for example, patients who stopped treatment or needed rescue medication] — and whether the sensitivity analyses covered them.", zh: "我會最仔細看的是期間事件與缺失資料——〔例如停藥或需要救援藥物的病患〕——以及敏感度分析有沒有涵蓋這些情況。" },
            { tag: "Close", tagZh: "收尾", en: "So: appropriate, with [one limitation you would name].", zh: "所以：合適，但有〔一個你會指出的限制〕。" },
          ],
        },
        {
          t: "note",
          en: "The estimand, in one minute",
          zh: "一分鐘看懂 estimand",
          bodyEn: [
            "An estimand is the precise definition of what question a trial is actually answering — stating the question clearly before anyone calculates an effect. It comes from the ICH E9(R1) addendum.",
            "**Five attributes:** the treatment being compared; the population the conclusion applies to; the variable or endpoint measured in each patient; how intercurrent events are handled; and the population-level summary — a difference in means, a hazard ratio.",
            "**Intercurrent events** happen after treatment starts and change how the result is read: stopping treatment, switching, rescue medication, death. **Five strategies:** treatment policy (use the outcome regardless of the event — the effect in practice); hypothetical (what if it hadn't happened); composite variable (the event is part of the outcome, e.g. counted as failure); while on treatment (only data before the event); principal stratum (only the subgroup in whom the event wouldn't occur).",
            "**Don't recite the definition.** They are not testing the text of ICH E9(R1); they are looking for whether you think the question through before writing code. Drop the word at the right moment, with one concrete example, and they know your level.",
          ],
          bodyZh: [
            "Estimand 就是把「這個試驗到底要回答什麼問題」精確定義下來——在計算療效之前，先把問題本身講清楚。出自 ICH E9(R1) 增補版。",
            "**五個屬性：**治療（要比較的治療與對照）、族群（結論要推論到哪一群病人）、變數／指標（在每個病人身上測量什麼）、期間事件的處理方式、族群層級摘要（用什麼量表達效果，例如平均差異、風險比）。",
            "**期間事件**指治療開始後發生、會影響結果解讀的事——停藥、換藥、救援用藥、死亡。**五種策略：**treatment policy 治療政策（不論事件是否發生都採用之後的結果，反映實際使用下的效果）、hypothetical 假設情境（假設該事件沒發生）、composite variable 複合變數（把事件納入結果定義，例如發生即視為失敗）、while on treatment 治療期間（只看事件發生前的資料）、principal stratum 主要分層（只針對不會發生該事件的次族群推論）。",
            "**不要背定義。**對方不是在考 ICH E9(R1) 的條文，是在看你有沒有「先想清楚問題、再寫程式」的思維。在對的時機丟出 estimand 這個詞，加上一個具體的例子，對方就知道你的層級在哪裡。",
          ],
        },
        {
          t: "model",
          en: "One project, three audiences",
          zh: "同一個專案，三種聽眾",
          hintEn: "The Quarto workflow at three depths. Reading your audience is what separates senior from mid-level: same facts, wrong depth, and you sound either arrogant or evasive.",
          hintZh: "Quarto 流程的三種深度。能判讀聽眾是資深與中階的分水嶺：內容一樣、深度錯了，聽起來不是高傲就是閃躲。",
          revealEn: "Show the three versions", revealZh: "顯示三個版本",
          parts: [
            { tag: "Technical peer", tagZh: "技術同儕", en: "It's a modular R and Quarto workflow driven by a YAML config. The reviewer's filters — patients, time window, domains — live in the YAML, and each domain is a module, so adding one doesn't touch the core code. The output is a self-contained report, reproducible from the same YAML and the same data.", zh: "這是一套由 YAML 設定檔驅動的模組化 R 與 Quarto 流程。審閱人員的篩選條件——病患、時間窗口、domain——都寫在 YAML 裡；每個 domain 是一個模組，新增時不必動核心程式。輸出是一份完整獨立的報告，用同樣的 YAML 和資料就能重現。" },
            { tag: "Clinical scientist", tagZh: "臨床科學家", en: "You say which patients, which time window and which domains you want to see, and you get one report with the tables, figures and listings — plus the exact filters you used. Six months later, if someone asks what you saw at that interim, the answer is in the file.", zh: "你指定要看哪些病患、哪個時間窗口、哪些 domain，就會拿到一份包含表格、圖表與 listing 的報告——連同你用過的篩選條件。六個月後有人問你當時期中看到什麼，答案就在檔案裡。" },
            { tag: "HR screener, no jargon", tagZh: "HR 初篩，零術語", en: "Doctors monitoring a trial used to wait days every time they needed a new summary of the data. I built a tool that lets them ask for it themselves. It cut the process from five steps to two, and saved more than 60 percent of the time.", zh: "監測試驗的醫師以前每次需要新的資料摘要，都要等好幾天。我做了一個工具，讓他們可以自己取得。流程從五步縮短到兩步，節省超過 60% 的時間。" },
          ],
        },
        {
          t: "qa",
          kind: "Your studies", kindZh: "研究理解",
          en: "Could you explain one of your technical projects as if I had no technical background?",
          zh: "可以用沒有技術背景的人也聽得懂的方式，說明你的一個技術專案嗎？",
          story: "quarto",
          tipEn: "The HR version above. Sixty seconds, no acronyms.",
          tipZh: "就是上面的 HR 版本。60 秒，不用縮寫。",
        },
      ],
    },

    // ============================================================ 7
    {
      id: "global",
      n: 7,
      en: "Global submissions",
      zh: "國際申報經驗",
      blocks: [
        {
          t: "lead",
          en: "You underestimated this one. Your notes say you have little of it — but you have BIMO and ISS packages, define.xml and reviewer's guides, cross-border projects, and delivery under regulatory timelines. That is not little.",
          zh: "這一題你低估自己了。筆記裡寫「我比較少這樣的經驗」——但你手上有 BIMO、ISS、define.xml、reviewer guide、跨國窗口、法規時程下的交付。這不算少。",
        },
        {
          t: "note",
          en: "Honest layering",
          zh: "誠實分層",
          bodyEn: [
            "Name the gap plainly (you haven't been the overall submission lead) → give four concrete records straight away → close by saying the gap is only the last layer, ownership of the whole thing.",
            "Admitting the gap and then giving the evidence is far stronger than avoiding it or being vague — and they will check, so honesty is also the safe strategy.",
            "Tone: **I should be straightforward about this** is said steadily, with no apology in the voice. It is confident honesty, not an admission of fault. And never drop **that's a step I'm ready to take** — without it the answer ends on the weakness.",
          ],
          bodyZh: [
            "先明確講出缺口（沒當過整體送件負責人）→ 立刻給四個具體實績 → 用一句話說明差距只有「完整擁有」這一層。",
            "承認缺口再給實績，比迴避或含糊有力得多，而且對方一定會查證，誠實是最安全的策略。",
            "語氣：**I should be straightforward about this** 開頭要平穩、不要道歉的語調。這是自信的坦白，不是認錯。而 **that's a step I'm ready to take** 不能省——沒有這句，整段會停在弱勢。",
          ],
        },
        {
          t: "upgrade",
          en: "Naming a gap without apologising",
          zh: "說出不足，但不道歉",
          hintEn: "Read the first version, then decide what it needs before opening the second.",
          hintZh: "先讀第一個版本，想想它缺什麼，再打開第二個。",
          beforeTag: "Apologising", beforeTagZh: "道歉式",
          beforeEn: "Sorry, I don't have much global submission experience. Maybe a little. But I think I can learn quickly.",
          beforeZh: "抱歉，我沒有太多國際申報經驗，可能一點點。不過我覺得我學得很快。",
          adds: [
            { en: "name the gap plainly, once", zh: "明確講出缺口，說一次" },
            { en: "four concrete records, immediately", zh: "立刻給四個具體實績" },
            { en: "one line on what is actually missing", zh: "用一句話說明真正缺的是什麼" },
            { en: "and that you're ready for it", zh: "以及你已經準備好" },
          ],
          revealEn: "Show the layered version", revealZh: "顯示分層版",
          afterTag: "Honest layering", afterTagZh: "誠實分層",
          afterEn: "I should be straightforward about this: I haven't led an end-to-end global submission to FDA or EMA as the overall submission lead. What I have done is most of the component work. So the components are familiar — the standards, the documentation, and working across time zones. What would be new is owning the whole submission end to end, and that's a step I'm ready to take.",
          afterZh: "這點我想直說：我沒有以整體送件負責人的身分，主導過一個完整的 FDA 或 EMA 全球送件。但送件的各個組成環節，我大部分都做過。所以這些組成環節對我來說並不陌生——標準、文件、跨時區協作都做過。對我而言新的部分，是從頭到尾完整擁有一個送件，而這一步我已經準備好了。",
        },
        {
          t: "qa",
          kind: "Submissions", kindZh: "申報題",
          en: "What's your experience with global regulatory submissions?",
          zh: "你在國際法規申報方面有什麼經驗？",
          answer: [
            { tag: "The gap", tagZh: "缺口", en: "I should be straightforward about this: I haven't led an end-to-end global submission to FDA or EMA as the overall submission lead. What I have done is most of the component work.", zh: "這點我想直說：我沒有以整體送件負責人的身分，主導過一個完整的 FDA 或 EMA 全球送件。但送件的各個組成環節，我大部分都做過。" },
            { tag: "Athenex", tagZh: "Athenex", en: "At Athenex I was responsible for submission packages including BIMO and ISS, and I reviewed the outputs coming back from our CROs.", zh: "在 Athenex 時期，我負責包含 BIMO 與 ISS 的送件包，並審查 CRO 回來的產出。" },
            { tag: "Parexel", tagZh: "PAREXEL", en: "At Parexel I delivered CDISC-compliant datasets with define.xml and the reviewer's guide for international sponsors.", zh: "在 PAREXEL 時期，我為國際申辦方交付符合 CDISC 標準的資料集，包含 define.xml 與 reviewer guide。" },
            { tag: "IQVIA", tagZh: "IQVIA", en: "At IQVIA I was the main point of contact for cross-border projects with teams in the UK, France, and the US.", zh: "在 IQVIA 時期，我是英國、法國、美國跨國專案的主要窗口。" },
            { tag: "COVID-19", tagZh: "COVID-19 專案", en: "And on the COVID-19 Phase III program I led delivery under regulatory timelines, including a regulator-requested RWE study where we standardised unstructured hospital data through a full SDTM, ADaM and TLF pipeline.", zh: "而在 COVID-19 三期專案中，我在法規時程壓力下負責交付，其中也包含一個主管機關要求的真實世界證據研究，我們把非結構化的醫院資料，透過完整的 SDTM、ADaM 與 TLF 流程標準化。" },
            { tag: "Close", tagZh: "收尾", en: "So the components are familiar — the standards, the documentation, and working across time zones. What would be new is owning the whole submission end to end, and that's a step I'm ready to take.", zh: "所以這些組成環節對我來說並不陌生——標準、文件、跨時區協作都做過。對我而言新的部分，是從頭到尾完整擁有一個送件，而這一步我已經準備好了。" },
          ],
        },
        {
          t: "qa",
          kind: "Submissions", kindZh: "申報題",
          en: "During a meeting with a health authority, they ask for a result you haven't produced. What do you do?",
          zh: "在與監管機關開會時，對方要求一個你們還沒產出的結果，你會怎麼做？",
          answer: [
            { tag: "Headline", tagZh: "結論", en: "Stay precise under pressure: confirm exactly what's being asked before writing a line of code.", zh: "在壓力下保持精確：寫任何一行程式之前，先確認對方到底要什麼。" },
            { tag: "Confirm", tagZh: "確認", en: "I'd restate the request — the population, the endpoint, any subgroup and the data cut — and check it with the statistician.", zh: "我會把需求複述一次——族群、指標、子群、資料截點——並和統計師確認。" },
            { tag: "Produce", tagZh: "產出", en: "Then I'd produce it from the validated datasets, with the code saved, so the number can be reproduced and checked afterwards.", zh: "接著從已驗證的資料集產出結果，並保存程式，讓這個數字事後可以重現、可以檢查。" },
            { tag: "Be clear", tagZh: "說清楚", en: "And I'd say plainly if a result is preliminary and hasn't been independently validated. A fast wrong number is worse than a correct one ten minutes later.", zh: "如果結果還是初步的、尚未獨立驗證，我會直接說明。一個很快但錯誤的數字，比十分鐘後正確的數字更糟。" },
          ],
        },
        {
          t: "qa",
          kind: "Submissions", kindZh: "申報題",
          en: "How do you make sure your deliverables are inspection-ready?",
          zh: "你如何確保你的交付項目隨時可接受查核？",
          answer: [
            { tag: "Headline", tagZh: "結論", en: "By making every number traceable and every step reproducible — from the start, not the week before.", zh: "讓每個數字都可追溯、每個步驟都可重現——從一開始就做，而不是查核前一週才做。" },
            { tag: "Traceability", tagZh: "可追溯", en: "Each result traces back through ADaM to SDTM, and the define.xml — with analysis results metadata for the key outputs — documents how.", zh: "每個結果都能經由 ADaM 追溯回 SDTM，而 define.xml——包括關鍵輸出的分析結果詮釋資料——記錄了追溯的方式。" },
            { tag: "Validation", tagZh: "驗證", en: "Every output is independently programmed or reviewed, and the findings and fixes are recorded.", zh: "每一份輸出都經過獨立程式驗證或審查，並記錄發現的問題與修正。" },
            { tag: "Reproducibility", tagZh: "可重現", en: "The code is under Git version control, so we can show exactly which version produced which output. And conformance checks run early and often.", zh: "程式都在 Git 版本控制下，可以清楚說明哪個版本產出了哪份結果。合規檢查也要及早、頻繁地跑。" },
          ],
        },
      ],
    },

    // ============================================================ 8
    {
      id: "beyond-sas",
      n: 8,
      en: "Beyond SAS",
      zh: "SAS 以外的語言",
      blocks: [
        {
          t: "lead",
          en: "Your strongest area — and the advertisement asks for it by name: R packages, Shiny applications, version control. The risk is saying too much. Pick one example and give its result.",
          zh: "你最強的部分——而且職缺公告直接點名要：R 套件、Shiny 應用程式、版本控制。風險是講太多。選一個例子，說出它的結果。",
        },
        {
          t: "qa",
          kind: "Beyond SAS", kindZh: "其他語言",
          en: "Apart from SAS, which programming languages do you use, and what for?",
          zh: "除了 SAS 之外，你還使用哪些程式語言？用在哪裡？",
          story: "shiny",
          answer: [
            { tag: "Headline", tagZh: "結論", en: "R is a core part of my work alongside SAS, and I use Python where it's the better tool.", zh: "R 和 SAS 一樣是我工作的核心，而在 Python 更適合的地方我就用 Python。" },
            { tag: "Scope", tagZh: "範圍", en: "Over the last four years I've brought R, Shiny, Quarto and Git-based workflows into our function.", zh: "過去四年，我把 R、Shiny、Quarto 和以 Git 為基礎的流程引進了部門。" },
            { tag: "Proof", tagZh: "證據", en: "Two examples: a metadata-driven Shiny app for medical data review, and a Python tool that cut aCRF preparation time by about 60 percent.", zh: "舉兩個例子：一個 metadata 驅動、用於醫學資料審閱的 Shiny 應用程式，以及一個讓 aCRF 準備時間減少約 60% 的 Python 工具。" },
            { tag: "Recognition", tagZh: "外部肯定", en: "I've presented that work at R/Pharma, ShinyConf and useR! 2026 in Warsaw.", zh: "我在 R/Pharma、ShinyConf 以及華沙的 useR! 2026 發表過這些成果。" },
          ],
        },
        {
          t: "qa",
          kind: "Beyond SAS", kindZh: "其他語言",
          en: "How would you help a SAS-based team start using R?",
          zh: "你會如何帶一個以 SAS 為主的團隊開始使用 R？",
          answer: [
            { tag: "Headline", tagZh: "結論", en: "Start with a real problem, not with the language.", zh: "從一個真實的問題開始，而不是從語言本身開始。" },
            { tag: "First", tagZh: "第一步", en: "I'd pick one deliverable where R clearly helps — an interactive review tool, or a report that has to be rebuilt often — and run it alongside the SAS process, so no one's timeline is at risk.", zh: "我會挑一個 R 明顯有幫助的交付項目——互動式審閱工具，或需要常常重做的報表——和 SAS 流程並行，讓任何人的時程都不受影響。" },
            { tag: "Then", tagZh: "接著", en: "Then make it easy to follow: shared packages, templates, Git from day one, and short pairing sessions rather than long training courses.", zh: "接著讓大家容易跟上：共用套件、範本、從第一天就用 Git，以及短時間的一對一實作，而不是冗長的訓練課程。" },
            { tag: "Standard", tagZh: "標準", en: "And be clear about validation: an R output is held to exactly the same standard as a SAS one.", zh: "並且把驗證講清楚：R 的輸出和 SAS 的輸出適用完全相同的標準。" },
          ],
        },
        {
          t: "qa",
          kind: "Beyond SAS", kindZh: "其他語言",
          en: "How do you see AI being used in statistical programming?",
          zh: "你怎麼看 AI 在統計程式設計中的應用？",
          answer: [
            { tag: "Headline", tagZh: "結論", en: "As a genuine help with speed — and a risk only if it replaces accountability.", zh: "它確實能提升速度——只有在它取代了責任歸屬時才是風險。" },
            { tag: "How", tagZh: "做法", en: "Used on the specifications — never on patient data — it can draft code from a spec very quickly. That code is useful as an independent comparison: if its results match the programmer's, that's extra assurance; if they don't, we've found something worth checking.", zh: "只用在規格文件上——絕不碰病患資料——它可以很快依 spec 產生程式。這些程式適合當作獨立比對：結果和 programmer 的一致，就多一層保證；不一致，就找到了值得檢查的地方。" },
            { tag: "Limit", tagZh: "界線", en: "But the programmer still owns the output. Anything AI produces goes through the same validation as anything a person writes.", zh: "但輸出的責任仍在 programmer 身上。AI 產出的任何東西，都要經過和人寫的程式一樣的驗證。" },
          ],
        },
        {
          t: "qa",
          kind: "Beyond SAS", kindZh: "其他語言",
          en: "How do you use Git in a programming team?",
          zh: "你在程式團隊中如何使用 Git？",
          answer: [
            { tag: "Headline", tagZh: "結論", en: "Git is how we make programming collaborative, traceable and reproducible.", zh: "Git 是讓程式工作可協作、可追溯、可重現的方式。" },
            { tag: "Practice", tagZh: "實際做法", en: "In my team, [how a study repository is organised, and how changes are reviewed before they're merged].", zh: "在我的團隊裡，〔一個研究的 repository 怎麼組織，變更在合併前怎麼審查〕。" },
            { tag: "Why", tagZh: "為什麼", en: "It gives us a record of who changed what and why, which matters for inspection readiness — and it lets several programmers work on one study without overwriting each other.", zh: "它留下誰改了什麼、為什麼改的紀錄，這對查核準備很重要——也讓多位 programmer 能同時處理同一個研究而不互相覆蓋。" },
          ],
        },
      ],
    },

    // ============================================================ 9
    {
      id: "awkward",
      n: 9,
      en: "The awkward questions",
      zh: "難答的問題",
      blocks: [
        {
          t: "lead",
          en: "These get asked, and they get asked early. Prepared answers sound confident; improvised ones sound unsure about the whole move. Practise the tone, not just the words.",
          zh: "這些題目一定會被問，而且通常問得很早。事先準備會顯得篤定；臨場發揮會讓人覺得你對整件事還沒想清楚。要練語氣，不只是字句。",
        },
        {
          t: "note",
          en: "What you are actually deciding",
          zh: "你現在真正在決定的是什麼",
          bodyEn: "Saying yes to the interview isn't saying yes to moving to the UK. You decide that later, when you know the salary, the visa terms and the team. Right now you're just buying information.",
          bodyZh: "答應面試，不等於答應搬去英國。那個決定是之後的事，等你知道薪資、簽證條件和團隊之後再說。現在你只是在換取資訊而已。",
        },
        {
          t: "qa",
          kind: "Awkward", kindZh: "難答題",
          en: "Why the UK?",
          zh: "為什麼是英國？",
          tipEn: "A real answer, not a flattering one. Praise of the country sounds rehearsed; a plain, true reason sounds senior.",
          tipZh: "要真實，不是恭維。稱讚這個國家聽起來像背稿；平實而真實的理由聽起來才資深。",
          answer: [
            { tag: "Headline", tagZh: "結論", en: "[Your real reason, in one sentence.]", zh: "〔你真正的理由，一句話。〕" },
            { tag: "Support", tagZh: "支撐", en: "[One concrete thing behind it — the kind of work, the stage of your career, your family.]", zh: "〔背後的一個具體原因——工作性質、職涯階段、家庭。〕" },
            { tag: "The role", tagZh: "這個職位", en: "And this role fits: it's hands-on leadership of trial programming, with R, Shiny and Git written into the job rather than treated as a side project.", zh: "而且這個職位很契合：它是實際帶領試驗程式工作的角色，R、Shiny 和 Git 是職務的一部分，而不是附帶的專案。" },
          ],
        },
        {
          t: "qa",
          kind: "Awkward", kindZh: "難答題",
          en: "You're a manager now. Why move to an individual-contributor role?",
          zh: "你現在是管理職，為什麼要轉為個人貢獻者？",
          answer: [
            { tag: "Headline", tagZh: "結論", en: "Because the work I'm best at — and enjoy most — is the technical leadership itself.", zh: "因為我最擅長、也最喜歡的，正是技術領導本身。" },
            { tag: "Evidence", tagZh: "證據", en: "The most valuable things I've done in the last four years have been hands-on: the Shiny app, the aCRF tool, bringing R and Git into the function.", zh: "過去四年我做過最有價值的事都是親自動手的：Shiny 應用程式、aCRF 工具、把 R 和 Git 引進部門。" },
            { tag: "Still leading", tagZh: "仍然在領導", en: "And I'd still be leading. A Senior Principal role leads a trial or a program and coordinates internal and external programmers — that's the part of management I'd want to keep.", zh: "而且我仍然在領導。Senior Principal 要帶一個試驗或專案，協調內外部 programmer——那正是管理工作中我想保留的部分。" },
          ],
        },
        {
          t: "qa",
          kind: "Awkward", kindZh: "難答題",
          en: "What are your salary expectations?",
          zh: "你的期望薪資是多少？",
          tipEn: "Deflect early, anchor later. The advertised range is about £49,000 to £91,000 a year, plus a bonus. UK salaries are quoted per year, before tax, with pension and bonus on top.",
          tipZh: "初期迴避、後期定錨。職缺公告的範圍約為年薪 49,000 到 91,000 英鎊，另有獎金。英國薪資以年薪、稅前計，退休金與獎金另計。",
          answer: [
            { tag: "Early: deflect", tagZh: "初期：迴避", en: "I'd like to understand the full scope of the role first — the level, the team and the package as a whole. I've seen the advertised range, and I'm comfortable we're in the right area.", zh: "我想先完整了解這個職位——層級、團隊，以及整體待遇。我看過公告的薪資範圍，我相信我們的方向是一致的。" },
            { tag: "Later: anchor", tagZh: "後期：定錨", en: "Given my experience and the level of the role, I'd be looking at the upper part of that range — around [your figure].", zh: "以我的經驗和這個職位的層級，我期望落在範圍的上半部——大約〔你的數字〕。" },
          ],
        },
        {
          t: "qa",
          kind: "Awkward", kindZh: "難答題",
          en: "What's your visa situation, and when could you start?",
          zh: "你的簽證狀況如何？什麼時候可以到職？",
          answer: [
            { tag: "Visa", tagZh: "簽證", en: "I'd need [visa sponsorship]. Could you tell me how you usually handle that for international hires?", zh: "我會需要〔簽證擔保〕。可以請您說明一下，你們通常怎麼處理國際聘用的簽證？" },
            { tag: "Timing", tagZh: "時程", en: "My notice period is [length], so allowing time for the visa, I could realistically start around [month].", zh: "我的離職預告期是〔多久〕，加上簽證所需的時間，實際上大約可以在〔月份〕到職。" },
            { tag: "Close", tagZh: "收尾", en: "I've thought through the practical side, and it's manageable.", zh: "實務上的安排我都想過了，是可以處理的。" },
          ],
        },
        {
          t: "qa",
          kind: "Awkward", kindZh: "難答題",
          en: "How does your family feel about a move to the UK?",
          zh: "你的家人對搬到英國有什麼想法？",
          tipEn: "UK interviewers often avoid this, since family status is protected. If it comes up, keep it short and settled — you don't owe details.",
          tipZh: "英國面試官常會避開這題，因為家庭狀況受法律保護。若真的被問到，簡短、篤定就好——你不需要交代細節。",
          answer: [
            { tag: "Answer", tagZh: "回答", en: "We've talked it through as a family, and [their position, in a few words].", zh: "我們全家已經討論過了，〔他們的想法，簡短幾個字〕。" },
            { tag: "Close", tagZh: "收尾", en: "So it isn't a barrier — it's something we've already planned for.", zh: "所以這不是阻礙——是我們已經規劃好的事。" },
          ],
        },
      ],
    },

    // ============================================================ 10
    {
      id: "unscripted",
      n: 10,
      en: "When you don't know, or didn't catch it",
      zh: "答不出來或沒聽清楚的時候",
      blocks: [
        {
          t: "lead",
          en: "This is what you're actually afraid of — not English, but a question you haven't rehearsed. Nobody gets through an interview without one blank moment. The difference is whether it stays a moment.",
          zh: "這才是你真正害怕的事——不是英文本身，而是被問到沒準備過的題目。沒有人面試能完全不當機，差別只在於它會不會擴散。",
        },
        {
          t: "bank",
          en: "Buying thinking time — without filler",
          zh: "爭取思考時間——不用贅詞",
          hintEn: "Say one, then stay silent for two seconds. Silence reads as thought; “um” reads as panic.",
          hintZh: "說一句，然後安靜兩秒。沉默看起來像在思考；「嗯……」聽起來像慌張。",
          rows: [
            { en: "That's a good question. Let me think for a second.", zh: "好問題，讓我想一下。" },
            { en: "Let me pick the best example.", zh: "讓我挑一個最好的例子。" },
            { en: "There are a couple of ways to answer that. The most relevant is…", zh: "這題有幾種答法，最相關的是……" },
            { en: "If I've understood you correctly, you're asking about…", zh: "如果我理解得沒錯，您問的是……" },
          ],
        },
        {
          t: "bank",
          en: "Admitting a gap — once, calmly",
          zh: "承認不會——說一次，保持平靜",
          rows: [
            { en: "I haven't worked with that directly. The closest I've done is…", zh: "我沒有直接做過那個。我做過最接近的是……" },
            { en: "I don't know the answer to that, but here's how I'd find out.", zh: "這個我不知道答案，但我會這樣去找出來。" },
            { en: "That's not something I've done yet — and it's one of the reasons this role appeals to me.", zh: "那是我還沒做過的事——這也是這個職位吸引我的原因之一。" },
          ],
        },
        {
          t: "bank",
          en: "Holding your position when they push back",
          zh: "被質疑時守住立場",
          hintEn: "In the harder mock, Lewis will push back on purpose. The goal is not to win — it's to stay calm and clear.",
          hintZh: "在高難度模擬時，Lewis 會刻意質疑你。目標不是辯贏，而是保持冷靜、清楚。",
          rows: [
            { en: "That's a fair challenge. I'd still do it this way, because…", zh: "這個質疑很合理。但我還是會這樣做，因為……" },
            { en: "I take the point on the timeline. On quality, though, I'd hold my ground.", zh: "時程的部分我同意。但在品質上，我會堅持。" },
            { en: "Let me explain my reasoning, and you can tell me where you see it differently.", zh: "讓我說明我的理由，您再告訴我哪裡看法不同。" },
          ],
        },
        {
          t: "bank",
          en: "Getting back when you lose the thread",
          zh: "講到一半斷線時接回來",
          rows: [
            { en: "Let me come back to the main point, which is…", zh: "讓我回到重點，也就是……" },
            { en: "I've gone into too much detail there. The short version is…", zh: "我講得太細了。簡短地說就是……" },
            { en: "So, to answer your question directly: …", zh: "所以，直接回答您的問題：……" },
          ],
        },
        {
          t: "bank",
          en: "When you didn't catch the question",
          zh: "沒聽清楚題目的時候",
          hintEn: "Most interview breakdowns happen on the listening side. Ask once, cleanly — and say which part you missed.",
          hintZh: "多數面試卡關發生在「聽」。乾淨地問一次——並說出你漏聽的是哪一部分。",
          rows: [
            { en: "Sorry — could you repeat the question?", zh: "不好意思——可以再說一次問題嗎？" },
            { en: "Sorry, the line broke up a little. Could you say the last part again?", zh: "不好意思，剛剛訊號有點斷，可以再說一次最後那部分嗎？" },
            { en: "Just to check — do you mean [X] or [Y]?", zh: "確認一下——您指的是〔X〕還是〔Y〕？" },
            { en: "I think I lost you for a second. Could you repeat that?", zh: "我剛剛好像有一下沒聽到，可以再說一次嗎？" },
          ],
        },
        {
          t: "upgrade",
          en: "One apology, not four",
          zh: "道歉一次，不是四次",
          hintEn: "A single apology for a slip is fine. The loop is what costs credibility.",
          hintZh: "語言失誤道歉一次沒問題，陷入連續道歉才會損害可信度。",
          beforeTag: "The apology loop", beforeTagZh: "道歉迴圈",
          beforeEn: "Sorry, sorry — my English is not so good. Sorry, can you say again? Sorry.",
          beforeZh: "抱歉、抱歉——我的英文不太好。抱歉，可以再說一次嗎？抱歉。",
          adds: [
            { en: "one apology", zh: "只道歉一次" },
            { en: "say which part you missed", zh: "說出漏聽的是哪一部分" },
            { en: "no comment on your English — it works", zh: "不評論自己的英文——它是可以用的" },
          ],
          revealEn: "Show the clean version", revealZh: "顯示乾淨的版本",
          afterTag: "Clean", afterTagZh: "乾淨版",
          afterEn: "Sorry — could you repeat the last part of the question?",
          afterZh: "不好意思——可以再說一次問題的最後那部分嗎？",
        },
      ],
    },

    // ============================================================ 11
    {
      id: "words",
      n: 11,
      en: "Words for this job",
      zh: "這份工作的用語",
      blocks: [
        {
          t: "lead",
          en: "You know these words. The point is to say them the way a UK team says them, and to use exactly the right one.",
          zh: "這些詞你都懂。重點是用英國團隊的方式說出來，而且用詞精準。",
        },
        {
          t: "terms",
          en: "Standards and deliverables",
          zh: "標準與交付項目",
          hintEn: "Tap 🔊 to hear the word. Tap the row for the Chinese.",
          hintZh: "點 🔊 聽發音，點該列看中文。",
          items: [
            { w: "CDISC", sayAs: "see-disk", say: "SEE-disk", def: "The standards body behind SDTM, ADaM and define.xml — the data standards regulators expect.", ex: "All of our datasets follow CDISC standards.", zh: "臨床資料交換標準協會", exZh: "我們所有的資料集都遵循 CDISC 標準。" },
            { w: "SDTM", sayAs: "S. D. T. M.", say: "letter by letter: S-D-T-M", def: "Study Data Tabulation Model — the standard structure for the data as collected.", ex: "We map the raw data to SDTM first.", zh: "研究資料列表模型", exZh: "我們先把原始資料轉成 SDTM。" },
            { w: "ADaM", sayAs: "Adam", say: "like the name Adam: AD-um", def: "Analysis Data Model — analysis-ready datasets derived from SDTM.", ex: "Every result in a table traces back to an ADaM dataset.", zh: "分析資料模型", exZh: "表格裡的每個結果都能追溯到 ADaM 資料集。" },
            { w: "TLFs / TFLs", sayAs: "T. L. F. s", say: "T-L-Fs — many UK teams say T-F-Ls. Both are fine.", def: "Tables, listings and figures: the outputs of a study report.", ex: "A typical study has around two hundred TLFs.", zh: "表格、列表與圖", exZh: "一個研究通常有兩百張左右的 TLF。" },
            { w: "shell", def: "A mock-up of a table before the data exist: layout, titles, footnotes.", ex: "Programmers write the shells and agree them with the statistician.", zh: "表格樣板（shell）", exZh: "由 programmer 撰寫 shell，並與統計師確認。" },
            { w: "aCRF", sayAs: "annotated C R F", say: "“annotated C-R-F”", def: "The case report form, annotated with where each field goes in SDTM.", ex: "The tool cut aCRF preparation time by about sixty percent.", zh: "註解病例報告表", exZh: "這個工具讓 aCRF 準備時間減少約六成。" },
            { w: "define.xml", sayAs: "define dot X M L", say: "“define dot X-M-L”", def: "The metadata file describing every dataset and variable in a submission.", ex: "The define.xml is part of every submission package.", zh: "資料定義檔", exZh: "define.xml 是每個申報包的一部分。" },
            { w: "analysis results metadata", def: "Metadata in the define.xml that links a key result to the datasets, variables and methods that produced it.", ex: "We add analysis results metadata for the primary outputs.", zh: "分析結果詮釋資料（ARM）", exZh: "我們為主要輸出加入分析結果詮釋資料。" },
            { w: "case report tabulations (CRT)", def: "The datasets and supporting documents submitted to a regulator.", ex: "Program-level standards make CRT production far more efficient.", zh: "病例報告列表", exZh: "專案層級的標準讓 CRT 的產出效率高得多。" },
            { w: "eCTD", sayAs: "E. C. T. D.", say: "E-C-T-D", def: "Electronic Common Technical Document — the format of a regulatory submission.", ex: "The datasets go into Module 5 of the eCTD.", zh: "電子通用技術文件", exZh: "資料集放在 eCTD 的第五模組。" },
            { w: "pooling", def: "Combining data from several studies for an integrated analysis.", ex: "Consistent structures across the program make pooling much easier.", zh: "資料合併（整合分析）", exZh: "整個專案結構一致，資料合併就容易得多。" },
            { w: "ISS · ISE", sayAs: "I. S. S. and I. S. E.", say: "I-S-S · I-S-E", def: "Integrated summary of safety · of efficacy — the pooled analyses in a submission.", ex: "I was responsible for submission packages including BIMO and ISS.", zh: "安全性整合摘要 · 療效整合摘要", exZh: "我負責包含 BIMO 與 ISS 的送件包。" },
            { w: "BIMO", sayAs: "by-mo", say: "“BY-mo”", def: "Bioresearch Monitoring — the datasets and listings a regulator uses to plan site inspections.", ex: "The BIMO package supports the inspection of individual sites.", zh: "生物研究監查", exZh: "BIMO 套件是用來支援個別試驗中心的查核。" },
            { w: "reviewer's guide", def: "The document that walks a regulator's reviewer through your data: cSDRG for SDTM, ADRG for ADaM.", ex: "I delivered CDISC-compliant datasets with define.xml and the reviewer's guide.", zh: "審查者指南", exZh: "我交付符合 CDISC 標準的資料集，包含 define.xml 與 reviewer guide。" },
            { w: "RWE", sayAs: "R. W. E.", say: "R-W-E", def: "Real-world evidence — evidence from data collected in routine care rather than in a trial.", ex: "It was a regulator-requested RWE study built from hospital data.", zh: "真實世界證據", exZh: "那是一個主管機關要求、以醫院資料建立的 RWE 研究。" },
            { w: "CRO", sayAs: "C. R. O.", say: "C-R-O", def: "Contract research organisation — the vendor running or programming parts of a study. A sponsor oversees a CRO.", ex: "I reviewed the outputs coming back from our CROs.", zh: "委託研究機構", exZh: "我審查 CRO 回來的產出。" },
          ],
        },
        {
          t: "terms",
          en: "Quality and methods",
          zh: "品質與方法",
          items: [
            { w: "traceability", say: "tray-suh-BIL-uh-tee", def: "Being able to follow any result back to its source data. Say traceability, not auditability.", ex: "The report records its filters, so every figure is fully traceable.", zh: "可追溯性", exZh: "報告記錄了篩選條件，所以每張圖都完全可追溯。" },
            { w: "reproducibility", say: "ree-pruh-dyoo-suh-BIL-uh-tee", def: "Anyone can rerun the code on the same data and get the same result.", ex: "Git gives us reproducibility as well as a history.", zh: "可重現性", exZh: "Git 讓我們有可重現性，也有歷史紀錄。" },
            { w: "inspection readiness", def: "Being ready, at any time, to show a regulator how the work was done.", ex: "Version control is part of our inspection readiness.", zh: "查核準備度", exZh: "版本控制是我們查核準備的一部分。" },
            { w: "independent programming", def: "A second programmer produces the same output separately, and the two are compared. Also called double programming.", ex: "Every key output is independently programmed.", zh: "獨立程式驗證（雙重程式）", exZh: "每一份關鍵輸出都經過獨立程式驗證。" },
            { w: "estimand", say: "EST-ih-mand", def: "A precise statement of the treatment effect a study sets out to estimate (ICH E9(R1)).", ex: "The choice of method should follow from the estimand.", zh: "估計目標", exZh: "分析方法的選擇應該從 estimand 出發。" },
            { w: "intercurrent event", def: "Something after randomisation that changes how the endpoint is read: stopping treatment, rescue medication, death.", ex: "How were intercurrent events handled in the primary analysis?", zh: "伴發事件", exZh: "主要分析中如何處理伴發事件？" },
            { w: "RBQM", sayAs: "R. B. Q. M.", say: "R-B-Q-M", def: "Risk-based quality management: focusing oversight on what matters most to quality.", ex: "The dashboard supports our RBQM process.", zh: "以風險為基礎的品質管理", exZh: "這個儀表板支援我們的 RBQM 流程。" },
            { w: "KRI · QTL", sayAs: "K. R. I. and Q. T. L.", say: "K-R-I · Q-T-L", def: "Key risk indicator · quality tolerance limit.", ex: "It flags a site when a KRI crosses its threshold.", zh: "關鍵風險指標 · 品質容許界限", exZh: "當某個 KRI 超過門檻時，它會標示該試驗中心。" },
            { w: "interim analysis · database lock", def: "An analysis before the study ends · the point after which the data can no longer change.", ex: "We had two weeks between database lock and the first outputs.", zh: "期中分析 · 資料庫鎖定", exZh: "從資料庫鎖定到第一批輸出，我們只有兩週。" },
          ],
        },
        {
          t: "terms",
          en: "The workplace, in UK English",
          zh: "職場用語（英式）",
          items: [
            { w: "remit", say: "REE-mit", def: "The area you are responsible for. “Outside my remit” is a polite “not my job”.", ex: "That's outside my remit, but I know who can help.", zh: "職責範圍", exZh: "那不在我的職責範圍內，但我知道誰可以幫忙。" },
            { w: "line manager", def: "Your direct boss — the person you report to.", ex: "Who would my line manager be in this role?", zh: "直屬主管", exZh: "這個職位的直屬主管會是誰？" },
            { w: "individual contributor", def: "A senior role without line-management responsibility.", ex: "It's an individual-contributor role, but it still leads a trial.", zh: "個人貢獻者（非管理職）", exZh: "這是個人貢獻者的職位，但仍然要帶一個試驗。" },
            { w: "cross-functional", def: "Working across departments — statistics, data management, medical.", ex: "Most of the job is cross-functional communication.", zh: "跨部門的", exZh: "這份工作大部分是跨部門溝通。" },
            { w: "health authority · MHRA", sayAs: "health authority. M. H. R. A.", say: "M-H-R-A — the UK's regulator", def: "A regulator such as the FDA, the EMA or the UK's MHRA.", ex: "We prepared the outputs for the health authority meeting.", zh: "衛生主管機關 · 英國藥品及保健產品管理局", exZh: "我們為與主管機關的會議準備了輸出結果。" },
          ],
        },
        {
          t: "terms",
          en: "Names in your introduction, said right",
          zh: "自介裡的名稱，唸對",
          items: [
            { w: "Phase III", sayAs: "phase three", say: "“phase three” — never “phase I-I-I”", def: "The large, confirmatory stage of a clinical trial.", ex: "It was a COVID-19 Phase III program.", zh: "第三期", exZh: "那是一個 COVID-19 第三期計畫。" },
            { w: "New England Journal of Medicine", say: "say it in full; not “N-E-J-M” to a general panel", def: "One of the most prestigious medical journals.", ex: "The results were published in the New England Journal of Medicine.", zh: "新英格蘭醫學期刊", exZh: "研究結果刊登在《新英格蘭醫學期刊》。" },
            { w: "useR!", sayAs: "user", say: "“user”", def: "The international R user conference.", ex: "I presented a poster at useR! 2026 in Warsaw.", zh: "國際 R 使用者大會", exZh: "我在華沙的 useR! 2026 發表了海報。" },
            { w: "Quarto", say: "KWOR-toh", def: "An open-source publishing system for reports built from code.", ex: "The report is rendered with Quarto.", zh: "Quarto 報告發布系統", exZh: "報告是用 Quarto 產生的。" },
            { w: "Warsaw", say: "WOR-saw", def: "The capital of Poland.", ex: "The conference was in Warsaw this July.", zh: "華沙", exZh: "研討會今年七月在華沙舉行。" },
          ],
        },
      ],
    },

    // ============================================================ 12
    {
      id: "close",
      n: 12,
      en: "Your questions and the close",
      zh: "反問與收尾",
      blocks: [
        {
          t: "lead",
          en: "The last ten minutes decide how they remember you: three questions that signal seniority, a clean close, and a short email the same day.",
          zh: "最後十分鐘決定他們怎麼記得你：三個展現資深度的問題、乾淨的收尾，以及當天寄出的簡短追蹤信。",
        },
        {
          t: "sentences",
          en: "Opening the call",
          zh: "視訊開場",
          items: [
            { en: "Hi — thanks for having me. It's good to meet you.", zh: "您好——謝謝邀請，很高興認識您。" },
            { en: "I can hear you clearly. Can you hear me all right?", zh: "我聽得很清楚。您聽得到我嗎？" },
            { en: "It's evening here in Taipei, so this is a nice way to end the day.", zh: "台北這邊是晚上，用這個結束一天挺好的。" },
          ],
        },
        {
          t: "sentences",
          en: "Questions to ask them — choose three",
          zh: "要反問對方的問題——選三題",
          hintEn: "Each one shows you are already thinking about doing the job, not about getting it.",
          hintZh: "每一題都顯示你已經在想怎麼做好這份工作，而不是怎麼得到它。",
          items: [
            { en: "What would success look like in this role after the first six months?", zh: "這個職位在前六個月，怎樣算是做得成功？" },
            { en: "How is the programming team combining R and SAS at the moment — is that led centrally, or study by study?", zh: "程式團隊目前怎麼搭配使用 R 和 SAS——是由中央統一推動，還是依各研究而定？" },
            { en: "Would this role sit mainly at trial level, or at program or indication level?", zh: "這個職位主要在試驗層級，還是在專案或適應症層級？" },
            { en: "How do programmers here work with the statisticians and the medical team day to day?", zh: "這裡的 programmer 平常怎麼和統計師、醫學團隊合作？" },
            { en: "What's the biggest challenge the team is facing this year?", zh: "團隊今年面臨最大的挑戰是什麼？" },
          ],
        },
        {
          t: "bank",
          en: "Closing",
          zh: "收尾",
          rows: [
            { en: "Thank you — I've really enjoyed learning more about the team.", zh: "謝謝您——能更了解這個團隊，我很開心。" },
            { en: "Is there anything else I can clarify for you?", zh: "還有什麼需要我補充說明的嗎？" },
            { en: "What are the next steps in the process?", zh: "接下來的流程是什麼？" },
          ],
        },
        {
          t: "model",
          en: "The follow-up email — send it the same day",
          zh: "追蹤信——當天寄出",
          hintEn: "Short. One specific detail from the conversation proves it isn't a template.",
          hintZh: "要短。一個對話中的具體細節，證明這不是範本信。",
          revealEn: "Show the email", revealZh: "顯示信件",
          parts: [
            { tag: "Subject", tagZh: "主旨", en: "Thank you — Senior Principal Statistical Programmer interview", zh: "感謝——Senior Principal Statistical Programmer 面試" },
            { tag: "Greeting", tagZh: "稱呼", en: "Dear [first name],", zh: "〔名字〕您好：" },
            { tag: "Thanks", tagZh: "致謝", en: "Thank you for your time today. I enjoyed our conversation, particularly [one specific thing you discussed].", zh: "謝謝您今天撥冗。我很享受我們的談話，尤其是〔一個具體討論到的內容〕。" },
            { tag: "Fit", tagZh: "契合", en: "It confirmed my interest in the role — especially [the part of the job that excites you most].", zh: "這讓我更確定對這個職位的興趣——特別是〔這份工作中最吸引你的部分〕。" },
            { tag: "Close", tagZh: "結尾", en: "Please let me know if there's anything else I can provide. I look forward to hearing from you. Best regards, Winkle", zh: "如需任何其他資料，請隨時告訴我。期待您的回覆。敬祝 順心，Winkle" },
          ],
        },
      ],
    },

    // ============================================================ 13
    {
      id: "drill",
      n: 13,
      en: "Cold questions",
      zh: "隨機冷問答",
      blocks: [
        {
          t: "lead",
          en: "The single most important part of the course: one question, drawn at random, answered cold. No preparation, no second take. It builds the reflex an interview actually tests.",
          zh: "整個課程最關鍵的部分：隨機抽一題，直接回答。不準備、不重來。它練的是面試真正考的「臨場提取」反射。",
        },
        {
          t: "drill",
          en: "Every question on this page, in a random order",
          zh: "本頁所有題目，隨機順序",
          hintEn: "The clock starts when the question finishes. Record, then play it back and check one thing: did the answer come first?",
          hintZh: "題目唸完時開始計時。錄音後回放，只檢查一件事：答案有沒有先出來？",
        },
      ],
    },
  ],
};
