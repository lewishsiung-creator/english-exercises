/* R/Pharma 2026 APAC — talk preparation. render.js draws it.

   Built from Lewis's coach notes of 15 Oct 2026 (Winkle — R/Pharma 2026 APAC
   講稿檢視與修訂建議), written for the lesson the next day. The talk is
   Winkle's own: his research, his slides, his script. Every "as written" line
   is his, quoted; every "say this instead" line and every reason is Lewis's,
   in his words, not improved.

   The page is not a rewrite, and should not become one. Three things are
   deliberately NOT settled here, because only Winkle can settle them: the six
   confirmations in step 1, the red slots inside the Q&A answers, and whether
   the local-LLM line is true. A slot stays a slot until he answers it.

   Naming: the talk is public, so there is nothing to hide here — but the page
   stays noindex like the rest of his folder.
*/

const PAGE = {
  title: "Upstream Detection of CDISC Compliance Issues",
  titleZh: "在 SDTM 出現之前，就找出 CDISC 問題",
  navHead: "Talk prep 講稿準備",

  cover: {
    up: { href: "../", en: "Winkle's Learning Notes 全部頁面" },
    kicker: "R/Pharma 2026 APAC · 講稿準備",
    role: "Winkle Lu · R/Pharma 2026 APAC · about five minutes, plus two Quarto pages",
    roleZh: "Winkle Lu · R/Pharma 2026 APAC · 約五分鐘，另加兩頁 Quarto 示範",
    intro: [
      {
        en: "The structure is already good — problem → why → method → result → positioning, with a key sentence on every slide. You are already doing conclusion-first.",
        zh: "講稿結構已經很好——問題 → 為什麼 → 方法 → 結果 → 定位，每頁都有一句 key sentence，結論先行的原則你已經做到了。",
      },
      {
        en: "So tomorrow is not a rewrite. It is fixing a few points of logic and wording, saying the numbers that are already on the screen, and then pronunciation, transitions and Q&A.",
        zh: "所以明天的重點不是重寫，而是修正幾個邏輯與用詞問題、補上畫面上有但講稿沒說的數字，再練發音、轉場和 Q&A。",
      },
      {
        en: "Length: about 636 English words, which is roughly five minutes at 130 words a minute, plus the two Quarto pages. The suggested version adds about 120 words — about a minute. Confirm your slot before deciding whether to add or cut.",
        zh: "長度：英文講稿約 636 字，以每分鐘 130 字計約 5 分鐘，另加兩頁 Quarto 示範。修訂版加了約 120 字（約 +1 分鐘）。需確認你的時段長度，再決定要補還是要刪。",
      },
    ],
    rulesEn: "Five things to fix first",
    rulesZh: "明天優先處理的五件事",
    rules: [
      {
        en: "**The title says the opposite of what you mean.** “CDISC-Compliant Issues” literally means issues that comply with CDISC. Use **CDISC compliance issues**; if the submitted title can't be changed, at least say it that way out loud and inside the slides.",
        zh: "**講題用詞錯誤。**「CDISC-Compliant Issues」字面是「符合 CDISC 規範的問題」，意思正好相反。建議改成 **Upstream Detection of CDISC Compliance Issues**。若已投稿無法改題目，至少口頭和投影片內文都用 compliance issues。",
      },
      {
        en: "**Slide 5's “four methods” doesn't hold.** The first three compare; the fourth, Jev, decides between them. Say **three methods, plus a tie-breaker**.",
        zh: "**第 5 頁「四種方法」邏輯不對。**前三個是比對方法，第四個 Jev 是裁決者。改成「three methods, plus a tie-breaker」，聽眾比較好跟。",
      },
      {
        en: "**Say the 84% precisely.** It is 48 of the 57 scorable fields, not of all 124. “84% mapped correctly” invites exactly that question in the Q&A.",
        zh: "**84% 要說精準。**84% 是 57 個可評分欄位中對 48 個，不是 124 個全部。Key sentence「84% mapped correctly」容易被理解為全部欄位，Q&A 很可能被追問。",
      },
      {
        en: "**The strongest numbers are on the screen but not in the script.** Slide 9's “42 of Pinnacle 21's 312 rules can be checked at the CRF stage” is one of the most persuasive figures in the talk; slide 7's “2,000 issues from 40 fields” has no so-what.",
        zh: "**畫面上的關鍵數字沒說出來。**第 9 頁「P21 312 條規則中 42 條可在 CRF 階段檢查」是全場最有說服力的數字之一，講稿完全沒提；第 7 頁「2,000 筆問題來自 40 個欄位」也缺了 so what。",
      },
      {
        en: "**Slides 9 and 10 are both called the conclusion.** Make 9 the result — *So what did we get?* — and 10 the takeaway, so you don't say “the takeaway” twice.",
        zh: "**第 9、10 頁都叫「結論」。**第 9 頁定位為結果（So what did we get?），第 10 頁才是 takeaway，避免講兩次「the takeaway」。",
      },
    ],
    jump: "qa",
    jumpEn: "Straight to the Q&A drill →",
    jumpZh: "直接進入 Q&A 快問快答",
  },

  source: {
    en: "Built from Lewis's coach notes of 15 October 2026, which review Winkle's own script and slides for R/Pharma 2026 APAC. Quoted lines marked “as written” are Winkle's; the suggested versions and the reasons are Lewis's. Anything in a dashed gold box is for Winkle to answer — the page doesn't know it.",
    zh: "本頁根據 Lewis 2026 年 10 月 15 日的教學筆記製作，內容是對 Winkle 為 R/Pharma 2026 APAC 所寫講稿與投影片的檢視。標示「原稿」的是 Winkle 自己的文字；建議版本與理由出自 Lewis。虛線金框的地方要由 Winkle 自己回答，頁面並不知道。",
  },

  steps: [

    // ============================================================ 1
    {
      id: "confirm",
      en: "Six things only you can confirm",
      zh: "只有你能確認的六件事",
      blocks: [
        {
          t: "lead",
          en: "Answer these before the lesson. Several of the decisions below depend on them, and two of them change what you say on stage.",
          zh: "上課前先回答這六題。下面好幾個決定都取決於它們，其中兩題會直接改變你上台要說的話。",
        },
        {
          t: "facts",
          en: "Before tomorrow",
          zh: "上課前要確認的",
          hintEn: "Each one changes something on the page.",
          hintZh: "每一題都會改動這一頁的某個部分。",
          items: [
            {
              en: "How long is your slot — and does it include the Q&A?",
              zh: "講者時段多長？含不含 Q&A？",
              soEn: "This decides whether the suggested version's extra minute goes in or comes out.",
              soZh: "這決定修訂版多出來的一分鐘是要留還是要刪。",
            },
            {
              en: "Can the title still be changed?",
              zh: "題目還能不能改？",
              soEn: "If not, the fix is spoken only: say “compliance issues” every time.",
              soZh: "如果不能改，就只能用口頭修正：每次都說 compliance issues。",
            },
            {
              en: "Jev — what is the full name, how is it said, and is it an acronym?",
              zh: "Jev 的全名、念法、是不是縮寫？",
              soEn: "You name it on slide 5 and in the Q&A. Mispronouncing your own tool is expensive.",
              soZh: "第 5 頁和 Q&A 都會講到它。念錯自己的工具，代價很高。",
            },
            {
              en: "Is “about 54 minutes” the number after you switched to Jev?",
              zh: "54 分鐘是不是改用 Jev 之後的數字？",
              soEn: "If it isn't, “under an hour” on slide 6 may not be accurate.",
              soZh: "如果不是，第 6 頁的「under an hour」可能就不準。",
            },
            {
              en: "Do the LLMs all run locally, with no data leaving the machine?",
              zh: "LLM 是否全部本機執行、資料完全不出機器？",
              soEn: "If true, say it on slide 5. For a pharma audience it is a strong selling point, and it heads off the “why not GPT?” question.",
              soZh: "若屬實，第 5 頁就要說出來。對藥廠聽眾這是很強的賣點，也能先擋掉 Q&A 的「為什麼不用 GPT」。",
            },
            {
              en: "Where does the QR code point — GitHub, the report, or the slides?",
              zh: "QR code 連到哪裡——GitHub、報告、還是 slides？",
              soEn: "It is on the last slide, so it has to be said out loud, and it answers the last Q&A question.",
              soZh: "它出現在最後一頁，就一定要講出來；它同時也是最後一題 Q&A 的答案。",
            },
          ],
        },
      ],
    },

    // ============================================================ 2
    {
      id: "slides",
      en: "The talk, slide by slide",
      zh: "逐頁檢視",
      blocks: [
        {
          t: "lead",
          en: "Quiet text is what the script says now. The line below it is what to say instead, and underneath are the reasons — your call on the wording, every time: it is your research.",
          zh: "灰色的是原稿，下面那句是建議改成的說法，再下面是理由。措辭最後由你決定——這是你的研究。",
        },

        {
          t: "slide",
          n: 1,
          en: "Upstream Detection of CDISC Compliance Issues",
          zh: "開場",
          status: "tweak",
          before: "Hi everyone, I'm Winkle. I've been working in clinical trials for about twelve years. SAS has been my main tool, and over the past few years I've been bringing open-source tools and AI into my workflow.",
          after: "Hi everyone, I'm Winkle. I've worked in **clinical trial programming** for about twelve years. SAS has been my main tool, and over the past few years I've been bringing open-source tools and AI into my workflow. **Today I'll show you how to find CDISC compliance issues before SDTM even exists.**",
          why: [
            { en: "Add one sentence saying what the talk will show, so the opening gives the answer first.", zh: "加一句「今天要講什麼」，開場就給聽眾答案，符合結論先行。" },
            { en: "“clinical trials” is too broad. “clinical trial programming” is your actual position.", zh: "「clinical trials」太廣，「clinical trial programming」才是你的專業定位。" },
          ],
        },

        {
          t: "slide",
          n: 2,
          en: "Issues Are Found Too Late",
          zh: "問題發現得太晚",
          status: "fix",
          before: "In a typical study, we get the data from the EDC, build SDTM, ADaM and TLFs, and then move on to the CSR and the submission. The validation process for CDISC-compliance usually runs after SDTM, or even ADaM, is done. The later we find an issue, the more pressure there is to go back and fix the programs. Sometimes the fix even means changing the EDC and the CRF design. In the worst case, it can call the data quality of the whole study into question.",
          after: "In a typical study, we get data from the EDC, build SDTM, ADaM and TLFs, and then move on to the CSR and submission. **CDISC compliance checks** usually run only after SDTM — or even ADaM — is done. The later we find an issue, **the more it costs** to go back and fix the programs. Sometimes the fix even means changing the EDC or the CRF design. In the worst case, it calls **the credibility** of the whole study's data into question.",
          why: [
            { en: "“The validation process for CDISC-compliance … runs” is a long way round; and compliance as a noun takes no hyphen.", zh: "「The validation process for CDISC-compliance … runs」太繞；compliance 當名詞不用連字號。" },
            { en: "“more pressure” becomes “more it costs”, matching this slide's key sentence — the audience hears the same word twice and remembers it.", zh: "「more pressure」改「more it costs」，與本頁 key sentence 用詞一致，聽眾聽到同一個字兩次會記住。" },
            { en: "“credibility” echoes the key sentence for the same reason.", zh: "「credibility」同樣呼應 key sentence。" },
          ],
        },

        {
          t: "slide",
          n: 3,
          en: "We Already Work Upstream",
          zh: "我們本來就在上游工作",
          status: "keep",
          after: "In practice, most of us don't wait for clean or locked data to start programming. While Data Management and Project Management are still working through queries, we're already writing code. So the work is already upstream. [pause] Why is the checking still downstream? [pause] That's today's topic: upstream detection. We start from the raw CRF data and find issues before SDTM is built.",
          why: [
            { en: "The best slide in the talk. The English does not need changing.", zh: "這頁是全場最好的一頁，英文不用改。" },
          ],
          doEn: "Practise the rhythm, not the words: a beat before and after the question, so the audience answers it in their own heads. And carry the contrast with stress — **UP**stream against **DOWN**stream.",
          doZh: "練習重點在節奏：問句前後各停一拍，讓聽眾自己想答案。「upstream / downstream」的對比要用重音帶出來：**UP**stream vs. **DOWN**stream。",
        },

        {
          t: "slide",
          n: 4,
          en: "Add a Layer, Not a New Process",
          zh: "加一層，不是換流程",
          status: "tweak",
          before: "We don't change the existing process; we just add one layer next to it. Step one: map each CRF field to the SDTM variable it belongs to. Step two: use that mapping to check the collected values against CDISC and P21 rules.",
          after: "We don't change the existing process; we just add a layer **alongside** it. Step one: map each CRF field to the SDTM variable it belongs to. Step two: use that mapping to check the collected values against CDISC and **Pinnacle 21** rules.",
          why: [
            { en: "Say the full name the first time: Pinnacle 21, then P21 afterwards. An APAC audience comes from many countries and not everyone knows the abbreviation.", zh: "第一次出現時說全名 Pinnacle 21，之後再用 P21。APAC 聽眾來自不同國家，不一定都熟縮寫。" },
            { en: "“alongside” carries “a layer running in parallel” better than “next to”.", zh: "「alongside」比「next to」更貼近「並行加一層」的意思。" },
          ],
        },

        {
          t: "slide",
          n: 5,
          en: "Four Ways to Map a CRF Field → three methods, plus a tie-breaker",
          zh: "對應 CRF 欄位的方法",
          status: "fix",
          before: "For step one, the mapping, we match what the CRF describes against the CDISC documents: the implementation guide and Controlled Terminology. We compare them in four ways. One: text similarity, using the R package text2vec. Two: semantic matching with local LLMs, Gemma 3 4B and 12B. Three: we start from the SDTM side. A local Gemma 3 12B writes a description for each SDTM variable, and we look for the CRF field that fits it best. Four: when these methods disagree, Jev, a decision model that gives probabilities, picks the best match.",
          after: "Step one is the mapping. We match what each CRF field describes against the CDISC documents — the SDTM Implementation Guide and Controlled Terminology. We use **three methods, plus a tie-breaker**. One: text similarity, with the R package text2vec. Two: semantic matching with local LLMs — Gemma 3, 4B and 12B. Three: we work backwards from SDTM. Gemma 3 12B writes a description for each SDTM variable, and we find the CRF field that fits it best. When the three agree, we take the answer. When they disagree, Jev, a probabilistic model, picks the best match. **For example, a field labelled “CTCAE Grade” got different answers, and Jev picked AETOXGR with a probability of 0.92 — the right one.** [If it is true: Everything runs locally, so no clinical data leaves the machine.]",
          why: [
            { en: "The fourth one isn't a matching method, it's the adjudicator. “Three methods plus a tie-breaker” is clearer, and it matches the key sentence: agree → take it, disagree → the probability model decides.", zh: "第四個不是比對方法，是裁決機制。「三個方法＋一個裁決者」結構更清楚，也和 key sentence（一致就採用，不一致交給機率模型）吻合。" },
            { en: "The AESEV / AETOXGR example is on the slide but not in the script. One concrete example beats three sentences of explanation.", zh: "畫面上有 AESEV / AETOXGR 的例子，講稿卻沒用。一個具體例子勝過三句解釋。" },
            { en: "If the local-execution line is true, it is a strong point for a pharma audience, and it blocks the “why not GPT?” question before it is asked.", zh: "本機執行若屬實，對藥廠聽眾是很強的賣點（資料隱私），也能先擋掉 Q&A 的「為什麼不用 GPT」。" },
          ],
          doEn: "At 107 words this is the longest slide. If time is tight, the local-execution line is the one to drop.",
          doZh: "這頁 107 字，是最長的一頁。若時間緊，刪掉 optional 那句。",
        },

        {
          t: "slide",
          n: 6,
          en: "Scale and Mapping Accuracy",
          zh: "規模與對應準確率",
          status: "fix",
          keyEn: "84% of scorable fields mapped correctly, in under an hour.",
          keyZh: "建議改成這句 key sentence",
          before: "We tested this on a dummy study: five domains, ten raw datasets, forty-five subjects, and 6,024 records. Of the 124 CRF fields, 57 have a reference answer, and mapping accuracy on those is 84%. The whole run took under an hour of machine time.",
          after: "We tested this on a **mock** study: five domains, ten raw datasets, forty-five subjects, and 6,024 records. **There are 124 CRF fields, and 57 of them have a reference answer we can score against. On those 57, the mapping got 48 right — that's 84%.** The whole run took under an hour of machine time.",
          why: [
            { en: "Split into two sentences: the denominator first, then the result. Then 84% can't be misread as all the fields.", zh: "拆成兩句，先講分母再講結果，84% 的範圍就不會被誤解。" },
            { en: "“dummy” is standard in the industry, but “mock” is more natural for listeners outside pharma. Either is fine.", zh: "「dummy」在業界通用，但「mock」對非藥業背景的聽眾更自然；兩者皆可。" },
            { en: "Confirm whether 54 minutes is the figure after Jev — otherwise “under an hour” may not be accurate.", zh: "確認 54 分鐘是不是 Jev 之後的數字，否則「under an hour」可能不準。" },
          ],
        },

        {
          t: "slide",
          n: 7,
          en: "Data Issues Found Before SDTM",
          zh: "在 SDTM 之前找到的問題",
          status: "fix",
          before: "(Show the Quarto report.) Here's the overall picture: the raw data we screened, and a summary of the data issues. Before any SDTM existed, we found about 2,000 issues, and they come from only about 40 fields. The most common: collected values that don't match CDISC Controlled Terminology, like SEX recorded as FEMALE.",
          after: "**Let me switch to the report.** Here's the overall picture: the raw data we screened, and a summary of the issues. Before any SDTM existed, we found about 2,000 issues — and they **came** from only about 40 fields. **So fixing a few fields at the source clears most of the list.** The most common type: collected values that don't match Controlled Terminology — for example, SEX recorded as “FEMALE” **instead of “F”**.",
          why: [
            { en: "Say a transition line as you switch to Quarto — never change the screen in silence. Have a screenshot ready in case the switch fails on the day.", zh: "切換到 Quarto 時要有一句轉場，不要沉默切畫面；同時準備截圖備案，萬一現場無法切換。" },
            { en: "Keep the tense consistent: found … came.", zh: "時態統一：found … came。" },
            { en: "“2,000 from 40 fields” needs its so-what — that is the part the audience actually cares about. Check the reading is fair.", zh: "「2,000 筆來自 40 個欄位」要說出 so what，這是聽眾真正在意的點。請確認這個解讀是否公允。" },
            { en: "Add “instead of ‘F’”, or listeners who don't know Controlled Terminology can't see what the error is.", zh: "「instead of ‘F’」補上，不熟 CT 的聽眾才知道錯在哪。" },
          ],
        },

        {
          t: "slide",
          n: 8,
          en: "Validation: Five Planted Errors",
          zh: "驗證：五個植入的錯誤",
          status: "tweak",
          before: "(Show the Quarto report.) To check that it really works, I planted five high-risk errors in the data, like an AE after death and a height of 300 centimeters. All five were caught. A height of 300 centimeters passes every format check, so you need both standards checks and clinical logic.",
          after: "To test whether it catches what really matters, I planted five high-risk errors in the data — like an AE after death, and a height of 300 centimeters. **It caught all five. And notice:** a height of 300 centimeters passes every format check. **That's why** you need both standards checks and clinical logic.",
          why: [
            { en: "The passive “All five were caught” becomes the active “It caught all five” — stronger, and the result lands in one sentence.", zh: "被動「All five were caught」改主動「It caught all five」，更有力，結果一句講完。" },
            { en: "“And notice:” pulls the audience to the point, and “That's why” closes it more clearly than “so”.", zh: "「And notice:」把聽眾注意力拉到重點，再用「That's why」收尾，比「so」更清楚。" },
          ],
        },

        {
          t: "slide",
          n: 9,
          en: "Found at the CRF Stage, Not After P21",
          zh: "在 CRF 階段就發現，而不是 P21 之後",
          status: "fix",
          before: "So, the takeaway: issues we'd normally see only after SDTM is built and validation process is run, we now find at the CRF stage. That means we can understand the state of the data, and act on it, earlier. One thing I want to be clear about: this is not a replacement for formal SDTM mapping. It's a tool for knowing the state of your data earlier.",
          after: "**So what did we get?** Issues we'd normally see only after SDTM is built and P21 is run, we now find at the CRF stage. **Of Pinnacle 21's 312 rules, 42 can already be checked on raw CRF data.** That means we can see the state of the data — and act on it — much sooner. One thing I want to be clear about: this does not replace formal SDTM mapping or P21. It's an early look at your data, **not the final check**.",
          why: [
            { en: "“validation process is run” is missing its article, and it is the same thing as P21 — saying P21 is shorter.", zh: "原句「validation process is run」少了冠詞 the，且和 P21 是同一件事，直接說 P21 更短。" },
            { en: "312 → 42 is the main thing on the screen. It has to be said.", zh: "312 → 42 是畫面主角，一定要說出來。" },
            { en: "“earlier” appeared twice; the second becomes “not the final check”, which also says the “doesn't replace P21” line that is sitting at the bottom of the slide.", zh: "原稿「earlier」出現兩次；第二次改成「not the final check」，同時把畫面底部「不取代 P21」也講到。" },
          ],
        },

        {
          t: "slide",
          n: 10,
          en: "Positioning and Takeaway",
          zh: "定位與收尾",
          status: "tweak",
          before: "We don't change the process; we just add an early warning. Serious issues can go to DM and PM early, so they can decide what to fix, without waiting for SDTM and ADaM to be done and then reworking the programs. Whatever we can handle upstream, we shouldn't leave to the end. LLM output is a suggestion, not an answer. Constrain it with data and standards, let a probability model make the call, add human review, and you can catch issues upstream. Thank you.",
          after: "**To sum up.** We don't change the process; we just add an early warning. Serious issues can go to DM and PM early, so they can decide what to fix — **instead of waiting until** SDTM and ADaM are done and then reworking the programs. Whatever we can handle upstream, we shouldn't leave to the end. **And one last point.** [pause] LLM output is a suggestion, not an answer. Constrain it with data and standards, let a probability model make the call, add human review — and you can catch issues upstream. **The QR code links to [where it points].** Thank you.",
          why: [
            { en: "Two closing messages — how it sits in the process, and how to treat an LLM. Separate them with “And one last point” so the final sentence is the one remembered.", zh: "結尾兩個訊息（流程定位、LLM 態度）用「And one last point」分開，最後一句才會被記住。" },
            { en: "“without waiting … and then reworking” is loose; “instead of waiting until …” holds together.", zh: "「without waiting … and then reworking」結構較鬆，改「instead of waiting until …」。" },
            { en: "Once the QR code is on the screen, say where it goes.", zh: "QR code 上了畫面就要說它連到哪裡。" },
          ],
        },
      ],
    },

    // ============================================================ 3
    {
      id: "saying",
      en: "Saying it right",
      zh: "發音清單",
      blocks: [
        {
          t: "pron",
          en: "The words of this talk",
          zh: "這場講稿的發音",
          hintEn: "Abbreviations said letter by letter are fine. What trips people up is CDISC, ADaM, Quarto and the stress in the long words. Tap 🔊 for each.",
          hintZh: "縮寫照慣例逐字母念的就逐字母念；容易念錯的是 CDISC、ADaM、Quarto 和幾個多音節字的重音。點 🔊 可聽。",
          items: [
            { w: "CDISC", sayAs: "see-disk", say: "SEE-disk", note: "不是逐字母 C-D-I-S-C" },
            { w: "ADaM", sayAs: "Adam", say: "AD-um（同人名 Adam）", note: "不要念成 A-D-A-M" },
            { w: "SDTM · TLF · CSR · EDC · CRF", sayAs: "S. D. T. M. T. L. F. C. S. R. E. D. C. C. R. F.", say: "逐字母", note: "SDTM 全場出現最多次，四個字母要清楚分開" },
            { w: "Pinnacle 21 / P21", sayAs: "Pinnacle twenty-one", say: "PIN-uh-kul twenty-one", note: "第一次說全名" },
            { w: "Quarto", sayAs: "Quarto", say: "KWOR-toh", note: "不是 Kwah-to" },
            { w: "Gemma 3, 4B, 12B", sayAs: "Jemma three, four B, twelve B", say: "JEM-uh three, four-B, twelve-B", note: "G 發 /dʒ/" },
            { w: "text2vec", sayAs: "text to vec", say: "text-to-vec" },
            { w: "CTCAE · AETOXGR", sayAs: "C. T. C. A. E. A. E. TOX. G. R.", say: "逐字母；A-E-TOX-G-R", note: "變數名可逐字母或照此念，全場保持一致" },
            { w: "compliance", say: "kum-PLY-uns", note: "重音在第二音節" },
            { w: "terminology", say: "ter-mih-NOL-uh-jee", note: "重音在 NOL" },
            { w: "semantic", say: "sih-MAN-tik" },
            { w: "probability / probabilistic", say: "prob-uh-BIL-ih-tee / prob-uh-buh-LIS-tik", note: "兩個字重音位置不同" },
            { w: "credibility", say: "kred-uh-BIL-ih-tee" },
            { w: "upstream / downstream", say: "UP-stream / DOWN-stream", note: "重音在前，對比要聽得出來" },
            { w: "issues", say: "ISH-ooz", note: "不是 is-sues" },
            { w: "6,024 · 2,000 · 0.92", sayAs: "six thousand and twenty-four. about two thousand. zero point nine two.", say: "six thousand and twenty-four · about two thousand · zero point nine two", note: "數字先在講稿上寫成英文字練習" },
          ],
        },
        {
          t: "note",
          en: "Two habits to watch",
          zh: "兩個要留意的習慣",
          bodyEn: [
            "Finish the final consonants — built, fixed /fɪkst/, fields /fiːldz/, caught /kɔːt/. This is the most common thing to slip for a Taiwanese speaker.",
            "And pick one “data” — DAY-tuh or DAH-tuh — and keep it the same for the whole talk.",
          ],
          bodyZh: [
            "台灣講者常見：字尾子音要收（built, fixed /fɪkst/, fields /fiːldz/, caught /kɔːt/）。",
            "「data」全場統一 DAY-tuh 或 DAH-tuh 擇一。",
          ],
        },
      ],
    },

    // ============================================================ 4
    {
      id: "qa",
      en: "Questions they'll ask",
      zh: "可能的 Q&A",
      blocks: [
        {
          t: "lead",
          en: "The technique: restate the question in one sentence — that buys you thinking time — then answer in the first sentence, add one reason, and stop.",
          zh: "技巧：先用一句重述問題（爭取思考時間），第一句就給答案，補一個理由，然後停。",
        },
        {
          t: "note",
          en: "When you don't know",
          zh: "不知道的時候",
          bodyEn: "Say so, and make it forward-looking: “I haven't tested that yet — it's a good next step.” On a conference floor that reads as honesty, not as a gap.",
          bodyZh: "直接說，而且把它變成前瞻的說法：「I haven't tested that yet — it's a good next step.」在研討會現場，這聽起來是誠實，不是缺口。",
        },
        {
          t: "qa",
          kind: "Q&A", kindZh: "問答",
          en: "Why local LLMs instead of GPT or Claude?",
          zh: "為什麼用本機的 LLM，而不是 GPT 或 Claude？",
          answer: [
            { tag: "Answer", tagZh: "回答", en: "Mainly data privacy. Clinical data can't leave our environment, so a model that runs locally is the practical choice.", zh: "主要是資料隱私。臨床資料不能離開我們的環境，所以能在本機執行的模型才是實際可行的選擇。" },
            { tag: "Add one line", tagZh: "再補一句", en: "[whether the performance is good enough, and what it costs]", zh: "〔效能是否足夠、成本如何〕" },
          ],
        },
        {
          t: "qa",
          kind: "Q&A", kindZh: "問答",
          en: "84% sounds good, but what about the other 16% — and the fields you didn't score?",
          zh: "84% 聽起來不錯，那另外 16% 呢？沒有評分的欄位又如何？",
          answer: [
            { tag: "Answer", tagZh: "回答", en: "The 84% is on the 57 fields where we had a reference answer.", zh: "84% 是針對有參考答案的那 57 個欄位。" },
            { tag: "Then", tagZh: "接著", en: "[what kinds of field were the nine it got wrong, and why the other 67 have no reference answer]", zh: "〔錯的 9 個是什麼類型？其餘 67 個為何沒有參考答案？〕" },
            { tag: "Close", tagZh: "收尾", en: "That's also why we keep human review in the loop.", zh: "這也正是我們保留人工審查的原因。" },
          ],
        },
        {
          t: "qa",
          kind: "Q&A", kindZh: "問答",
          en: "Two thousand issues — how many are false positives? Won't the DM team get alert fatigue?",
          zh: "兩千筆問題——有多少是偽陽性？DM 團隊不會疲乏嗎？",
          answer: [
            { tag: "Answer", tagZh: "回答", en: "That's exactly why we group them by field. 2,000 issues come from about 40 fields, so the team reviews 40 things, not 2,000.", zh: "這正是我們依欄位分組的原因。2,000 筆問題來自約 40 個欄位，所以團隊要看的是 40 件事，不是 2,000 件。" },
            { tag: "If you have it", tagZh: "如果有數字", en: "[the false-positive rate]", zh: "〔偽陽性的數字〕" },
          ],
        },
        {
          t: "qa",
          kind: "Q&A", kindZh: "問答",
          en: "Have you tried this on a real study, or on other EDC systems?",
          zh: "你有在真實的案子或其他 EDC 系統上試過嗎？",
          answer: [
            { tag: "Answer", tagZh: "回答", en: "Not yet — so far it's a mock study.", zh: "還沒有——目前是一個 mock study。" },
            { tag: "Then", tagZh: "接著", en: "[the next step, and what you would need to run it on a real study]", zh: "〔下一步計畫／需要什麼才能用在真實案子〕" },
          ],
        },
        {
          t: "qa",
          kind: "Q&A", kindZh: "問答",
          en: "Why use Jev instead of a simple majority vote?",
          zh: "為什麼用 Jev，而不是簡單的多數決？",
          answer: [
            { tag: "Answer", tagZh: "回答", en: "A majority vote tells you which answer won, but not how confident it is. Jev gives a probability, so we know which mappings a human should look at first.", zh: "多數決只告訴你哪個答案勝出，不告訴你把握有多大。Jev 給的是機率，所以我們知道哪些對應要優先由人工檢查。" },
          ],
        },
        {
          t: "qa",
          kind: "Q&A", kindZh: "問答",
          en: "How is this different from just running P21 on a draft SDTM?",
          zh: "這和直接把 P21 跑在草稿版 SDTM 上有什麼不同？",
          answer: [
            { tag: "Answer", tagZh: "回答", en: "You need SDTM programs first to do that. This works on raw CRF data, before anyone has written a single SDTM program.", zh: "那樣做必須先有 SDTM 程式。這套方法是在原始 CRF 資料上跑的，在任何人寫下第一支 SDTM 程式之前。" },
          ],
        },
        {
          t: "qa",
          kind: "Q&A", kindZh: "問答",
          en: "Is the code available?",
          zh: "程式碼有公開嗎？",
          answer: [
            { tag: "Answer", tagZh: "回答", en: "[depends on what the QR code actually points to — see step 1]", zh: "〔依 QR code 實際內容回答——見第 1 步〕" },
          ],
        },
      ],
    },

    // ============================================================ 5
    {
      id: "rehearse",
      en: "Rehearse it",
      zh: "練習",
      blocks: [
        {
          t: "practice",
          en: "The whole talk, against the clock",
          zh: "全程計時",
          hintEn: "Five minutes for the script, plus the two Quarto pages. Record it, then listen.",
          hintZh: "講稿五分鐘，另加兩頁 Quarto 示範。錄下來，然後聽一次。",
          low: 270,
          high: 330,
        },
        {
          t: "note",
          en: "Homework until you're on stage",
          zh: "上台前的功課",
          bodyEn: "Record the whole thing once a day, and listen for two slides in particular: slide 5 — did the three methods and the tie-breaker come out clearly? — and slide 9 — did you say 312 and 42?",
          bodyZh: "上台前每天完整錄一次，特別聽第 5 頁和第 9 頁是否講清楚：第 5 頁的「三個方法＋一個裁決者」有沒有說明白？第 9 頁的 312 與 42 有沒有講出來？",
        },
        {
          t: "bank",
          en: "Tomorrow's ninety minutes",
          zh: "明天的九十分鐘",
          hintEn: "The plan for the lesson. Tap a row for what happens in it.",
          hintZh: "明天的課程流程。點一列可看說明。",
          rows: [
            { en: "0–10 · Cold run, recorded and timed", zh: "用原稿完整講一遍，不打斷。這是 baseline，最後拿來對比。" },
            { en: "10–30 · The content fixes", zh: "五件優先事項＋上課前的六個問題。這是你的研究，修訂版是建議，最後由你決定措辭。" },
            { en: "30–45 · Pronunciation", zh: "先練清單前半的縮寫與重音，再放進句子裡念。" },
            { en: "45–65 · Slide by slide, and the transitions", zh: "重點在第 3 頁的停頓、第 7 頁切 Quarto 的轉場、第 10 頁的收尾。" },
            { en: "65–80 · Q&A, rapid fire", zh: "老師隨機提問，每題限 30 秒回答，練「第一句就是答案」。" },
            { en: "80–90 · Second full run, recorded and timed", zh: "和第一次比時間與流暢度，先肯定進步，再挑一個最需要練的點當作業。" },
          ],
        },
        {
          t: "drill",
          en: "The Q&A, in a random order",
          zh: "Q&A 隨機抽題",
          hintEn: "Thirty seconds each. The clock starts when the question finishes — first sentence is the answer.",
          hintZh: "每題 30 秒。題目唸完就開始計時——第一句就是答案。",
        },
      ],
    },
  ],
};
