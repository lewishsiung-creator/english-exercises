/* CIMS Global — the screening call. A record.

   Built from two of Lewis's handouts: CIMS Global 初次面談準備 and the
   supplement 補充三段. The call was in the first week of October 2026; this
   page was written afterwards, so it is a record rather than preparation.

   It is kept because most of it outlives that call. The expectation
   statement, the answer for "we only have junior openings", the Git answer
   and the three closing sentences are reusable at the next screening call,
   whoever it is with.

   Two naming decisions:
   - The company is named. Its products are public, and the hub already
     carries the name.
   - The manager who ran the call is NOT named, though the handout names him.
     A private individual at another company adds nothing the page needs.

   One thing the page cannot show: Winkle's own CIMS Interview Review Guide,
   the thirteen-question document the supplement annotates. The five小 edits
   (Q4, Q5, Q8, Q9, Q10) refer to questions in it, so they are written here to
   stand on their own.
*/

const PAGE = {
  title: "CIMS Global — the screening call",
  titleZh: "CIMS Global 初次面談",
  navHead: "Screening call 初次面談",

  cover: {
    up: { href: "../", en: "Winkle's Learning Notes 全部頁面" },
    kicker: "October 2026 · 紀錄",
    role: "A screening call with the Software Development manager · eClinical, R and Shiny",
    roleZh: "與 Software Development 主管的初次面談 · eClinical、R 與 Shiny",
    intro: [
      {
        en: "The invitation said *discuss potential opportunities that may be a good fit*. That was not politeness — it was an invitation to define the role. A screening call at a small company is often about finding a person, not filling a box that has already been drawn.",
        zh: "邀請信寫的是 discuss potential opportunities that may be a good fit。這不是客套，是邀請你來定義。小公司的 screening call 經常是在找人，而不是在填一個已經畫好的格子。",
      },
      {
        en: "So the answer was clear: prepare, and go first. This page is what was prepared. The call has happened, but the expectation statement, the Git answer and the close are the reusable parts — they work at the next one too.",
        zh: "所以答案很明確：要準備，而且要主動出牌。這一頁就是當時準備的內容。面談已經結束，但期望陳述、Git 那題與結尾，是能重複使用的部分——下一場也用得上。",
      },
    ],
    rulesEn: "The three that carry over",
    rulesZh: "可以帶著走的三件事",
    rules: [
      {
        en: "**Ask before you state.** Let them describe the team and the problems first, so your expectation lands on their pain rather than on a title you named out of thin air.",
        zh: "**先問，再講。**先讓對方描述團隊結構與目前的挑戰，聽完再回應——這樣你的期望才能對準對方的痛點，而不是憑空喊一個頭銜。",
      },
      {
        en: "**Ability → what you want to own → level.** The level comes last, as the natural consequence of the first two, never as the opening demand.",
        zh: "**能力 → 我想負責什麼 → 層級。**層級放在最後，而且是作為前面兩段的自然結果，不是開場的要求。",
      },
      {
        en: "**Never say I need a job.** The whole thing rests on “I have this, and you will need it” — not on needing something.",
        zh: "**不要說 I need a job。**整段的底層邏輯是「我有這個，你們會需要我」，不是「我需要一份工作」。",
      },
    ],
    jump: "drill",
    jumpEn: "Straight to the drill →",
    jumpZh: "直接進入隨機抽題",
  },

  source: {
    en: "Built from Lewis's two handouts for this call. The English is his; so is the Chinese. The manager who ran the call is not named here.",
    zh: "本頁根據 Lewis 為這場面談寫的兩份講義製作，英文與中文說明皆出自其中。主持面談的主管姓名不寫在這一頁上。",
  },

  steps: [

    // ============================================================ 1
    {
      id: "overlap",
      en: "Why this one overlapped so much",
      zh: "這家公司和你的重疊度很高",
      blocks: [
        {
          t: "facts",
          en: "What they build",
          zh: "他們做什麼",
          hintEn: "Ten minutes on their site was the highest-return preparation available.",
          hintZh: "花十分鐘看官網，是當時投資報酬率最高的十分鐘。",
          items: [
            {
              en: "**CRE** — a multi-tenant, validated statistical computing environment for compliant analysis of clinical data, built on R, RShiny and the RStudio IDE, under 21 CFR Part 11 and GxP.",
              zh: "**CRE**——多租戶、經過驗證的統計運算環境，專門用於臨床資料的合規分析，建構在 R、RShiny 和 RStudio IDE 之上，符合 21 CFR Part 11 與 GxP 規範。",
              soEn: "That is your Shiny application work, in their product.",
              soZh: "那正好是你 Shiny 應用程式開發的領域。",
            },
            {
              en: "**DDM** — dynamic data monitoring.",
              zh: "**DDM**——動態資料監測。",
              soEn: "That is the KRI/QTL risk-monitoring dashboard you are building.",
              soZh: "那正好是你正在做的 KRI / QTL 風險監測儀表板。",
            },
            {
              en: "21–50 people, founded 2004, headquartered in New Jersey, with sites in Taiwan and China.",
              zh: "公司規模 21–50 人，2004 年成立，總部在美國紐澤西，台灣與中國設有據點。",
              soEn: "A small company means the role has give in it: “the opening is junior” is not the same as “only junior is possible”.",
              soZh: "小公司代表職缺有彈性——「現有的是 junior 職缺」不等於「只能給 junior」。",
            },
          ],
        },
        {
          t: "note",
          en: "And it turned your Git worry inside out",
          zh: "順帶解決了 Git 那一題",
          bodyEn: "You were worried about never having done version control with R inside a validated environment. Their product **is** that environment — so there, the worry becomes an informed question to ask them, not a gap to be caught out on.",
          bodyZh: "你先前擔心「沒有在驗證環境裡用 R 做過版本控管」——這家公司的產品本身就是那個環境。在這裡，那個疑問會變成一個有見地的提問，不是缺口。",
        },
        {
          t: "note",
          en: "Who you were talking to",
          zh: "你在跟誰說話",
          bodyEn: "The Manager of Software Development, not HR. That means the call can go straight at the technical material — Shiny architecture, metadata-driven design, tool governance in a regulated environment. You talk about those more deeply than most people do. That was the advantage to use, not to be modest about.",
          bodyZh: "對方是 Software Development 的 Manager，不是 HR。這通電話可以直接談技術——Shiny 的架構設計、metadata 驅動的做法、在法規環境下的工具治理。這些你講得比大多數人深，是你最大的優勢，不要客氣。",
        },
      ],
    },

    // ============================================================ 2
    {
      id: "order",
      en: "Ask first, then state",
      zh: "順序：先問，再講",
      blocks: [
        {
          t: "lead",
          en: "Don't open with “I'd like a manager role”. Let them describe the team and the challenges, and answer into that.",
          zh: "不要一開場就說「我想要 manager 職」。先讓對方描述團隊結構與目前的挑戰，聽完再回應。",
        },
        {
          t: "frames",
          en: "The opening question",
          zh: "開場的提問",
          items: [
            { en: "Before I say what I'm looking for, I'd like to understand how your team is structured and where the biggest challenges are right now.", zh: "在我說明自己在找什麼樣的角色之前，我想先了解一下你們團隊的架構，以及目前最大的挑戰在哪裡。" },
          ],
        },
        {
          t: "qa",
          kind: "Expectation", kindZh: "期望陳述",
          en: "So, what kind of role are you looking for?",
          zh: "那你在找什麼樣的角色？",
          tipEn: "Said after they have described the team. Ability → what you want to own → level, and the level comes last.",
          tipZh: "在對方描述完團隊之後才講。能力 → 我想負責什麼 → 層級，而層級放在最後。",
          answer: [
            { tag: "What you want to own", tagZh: "想負責什麼", en: "What I'd be looking for is a role where I'm responsible for a tool or a platform area rather than a single study — designing how it works, setting the standards for it, and bringing a team along with it.", zh: "我在找的，是一個能負責一項工具或一個平台領域的角色，而不是單一的試驗——設計它怎麼運作、為它訂定標準，並帶著團隊一起把它做起來。" },
            { tag: "The proof", tagZh: "證據", en: "That's what I've actually been doing for the last four years. I built a metadata-driven Shiny application for medical data review, a Python tool that cut aCRF preparation time by about 60%, and I'm currently developing a risk-based monitoring dashboard with KRI and QTL visualisations.", zh: "這也正是我過去四年實際在做的事。我開發了一套以 metadata 驅動的 Shiny 醫學資料審閱應用程式，做了一個 Python 工具把 aCRF 製作時間縮短約 60%，目前也在開發一套整合 KRI 與 QTL 視覺化的風險型監測儀表板。" },
            { tag: "The level, last", tagZh: "層級，放最後", en: "In terms of level, I've been leading programming teams for several years — most recently coordinating 18 programmers on a Phase III submission. So I'd be looking at a lead or management-level position. But I'm more interested in the scope of the problem than the title. If you have something where that experience would be useful, I'd like to hear about it.", zh: "層級方面，我帶領程式設計團隊已有數年，最近一次是在一個三期送件專案中協調 18 位程式設計師。所以我會希望是 lead 或管理層級的職位。不過比起頭銜，我更在意的是能處理的問題有多大。如果你們有適合這些經驗的機會，我很想了解。" },
          ],
        },
        {
          t: "note",
          en: "The last two sentences are the whole thing",
          zh: "最後兩句是整段的關鍵",
          bodyEn: [
            "**I'm more interested in the scope of the problem than the title** keeps you flexible without making you look like you have no standard.",
            "**If you have something where that experience would be useful, I'd like to hear about it** hands the ball back, so it never becomes a one-sided demand.",
          ],
          bodyZh: [
            "**I'm more interested in the scope of the problem than the title** 讓你保有彈性，又不會顯得沒有標準。",
            "**If you have something where that experience would be useful, I'd like to hear about it** 把球交回去，不會變成單方面的要求。",
          ],
        },
      ],
    },

    // ============================================================ 3
    {
      id: "junior",
      en: "If they say the opening is junior",
      zh: "如果對方說現在只有 junior 缺",
      blocks: [
        {
          t: "lead",
          en: "An exploratory call makes this likely, and without a prepared answer it is the moment people panic and say something they can't take back.",
          zh: "這是 exploratory screening，很可能出現這個狀況。沒準備就容易在當下慌掉，然後說出不該說的話。",
        },
        {
          t: "qa",
          kind: "Awkward", kindZh: "難答題",
          en: "To be honest, the openings we have right now are at a more junior level.",
          zh: "老實說，我們目前的職缺是比較資淺的層級。",
          answer: [
            { tag: "The answer", tagZh: "回答", en: "I understand the current openings are at a more junior level. I'd still be glad to stay in touch — if a lead or platform-level role opens up, I'd be very interested. Would it help if I sent you a short summary of what I've built, so you have it on file?", zh: "我了解目前的職缺是比較資淺的層級。我還是很樂意保持聯繫——如果之後有 lead 或平台層級的機會，我會非常有興趣。要不要我寄一份簡短的作品摘要給你，讓你們留著參考？" },
          ],
        },
        {
          t: "note",
          en: "The two sentences never to say",
          zh: "最忌諱的兩句",
          bodyEn: [
            "**“I could accept a junior role.”** You have just given away every bit of negotiating room you had.",
            "**“Then it might not be a good fit for me.”** You have just ended the conversation.",
            "Don't discount yourself on the spot, and don't close the door. The offer at the end is what gives the conversation a next step instead of a polite ending — and at a small company, the impression you leave today may come good three months from now.",
          ],
          bodyZh: [
            "**「那我也可以接受 junior」**——你剛剛把所有談判空間都交出去了。",
            "**「那可能不太適合我」**——你剛剛結束了這場對話。",
            "不要當場降價，也不要關門。最後那個提議讓對話有後續，而不是停在婉拒。小公司的職缺常常是為人調整的，你今天留下的印象，可能三個月後才發酵。",
          ],
        },
        {
          t: "sentences",
          en: "The one-page summary to actually send",
          zh: "事後真的要寄的那一頁摘要",
          hintEn: "One page, four things. The handout is explicit that this has to be sent afterwards, not just offered.",
          hintZh: "一頁，四件事。講義特別交代：這份摘要事後真的要寄，不能只是說說。",
          items: [
            { en: "The Shiny review application", zh: "Shiny 審閱應用程式" },
            { en: "The modular Quarto reporting workflow", zh: "Quarto 模組化報表流程" },
            { en: "The aCRF automation tool", zh: "aCRF 自動化工具" },
            { en: "The talks: useR! 2026 and R/Pharma", zh: "useR! 2026 與 R/Pharma 的發表紀錄" },
          ],
        },
      ],
    },

    // ============================================================ 4
    {
      id: "git",
      en: "The Git answer",
      zh: "Git 那一題",
      blocks: [
        {
          t: "lead",
          en: "The biggest risk in the prepared material was a bullet that read as though you had experience you don't have. With a Software Development manager, and a product that is itself a validated environment with package control and traceability, Git was almost certain to come up.",
          zh: "原本準備的材料裡，最大的風險是一條寫得像「你有實務經驗」的 bullet。對方是 Software Development 的 Manager，而 CIMS 的 CRE 本身就是一個有 package control 與 traceability 的驗證環境——Git 幾乎一定會被問到。",
        },
        {
          t: "note",
          en: "Why the bullet was worse than the gap",
          zh: "為什麼那條 bullet 比缺口更危險",
          bodyEn: "Having a line about Git conflict prevention and resolution on your sheet, and then not being able to answer the detail, does more damage than saying plainly that you haven't done it.",
          bodyZh: "手上有一條「Git conflict: prevention + resolution」的 bullet 卻答不出細節，比老實說沒做過傷害大得多。",
        },
        {
          t: "qa",
          kind: "Technical", kindZh: "技術題",
          en: "How do you handle version control in a validated environment?",
          zh: "在驗證環境裡，你怎麼做版本控管？",
          answer: [
            { tag: "What you do have", tagZh: "你確實有的", en: "I use Git for my own projects — my blog and the code I share from my conference work are on GitHub.", zh: "我在自己的專案裡會使用 Git——我的部落格，以及我在研討會分享的程式碼，都放在 GitHub 上。" },
            { tag: "The gap, named", tagZh: "明講缺口", en: "What I haven't done is use Git-based version control inside a validated GxP programming environment, where the controls and the documentation requirements are different.", zh: "我還沒有做過的，是在經過驗證的 GxP 程式開發環境中使用以 Git 為基礎的版本控管，那裡的控管機制與文件要求都不一樣。" },
            { tag: "And the bridge", tagZh: "銜接", en: "The workflow itself is familiar, so that's something I'd expect to pick up quickly.", zh: "不過工作流程本身我是熟悉的，所以我預期可以很快上手。" },
          ],
        },
        {
          t: "note",
          en: "Why this is better than “I haven't used it”",
          zh: "為什麼這比單純說「沒用過」好",
          bodyEn: [
            "It shows two things at once: that you have hands-on experience, and that you know **where the difference lies** between personal use and a regulated environment. The second is the senior-level judgement.",
            "**One condition before you use it:** make sure the GitHub repository really is one you maintain — commits, pushes, managing the files. If it isn't, this has to be reworded. A single sentence that doesn't hold up costs you the credibility of the whole conversation the moment it is probed.",
            "It also sets up a question to ask them: how they handle standards, version control and validation inside their environment. Said honestly first, the gap turns into an exchange.",
          ],
          bodyZh: [
            "它同時展現兩件事：你有實作經驗，而且你知道**個人使用和法規環境的差別在哪裡**——後者才是資深層級該有的判斷。",
            "**用之前有一個前提：**請先確認那個 GitHub repo 真的是你自己在維護（commit、push、管理檔案）。如果不是，這段還要再改。任何一句站不住的話，被追問一次就會讓整場的可信度下降。",
            "這也接得上你要問對方的問題：他們在自己的環境裡怎麼處理 standards、version control 與 validation。誠實說完自己的位置，再反問對方，整段就從缺口變成交流。",
          ],
        },
      ],
    },

    // ============================================================ 5
    {
      id: "close",
      en: "Closing it yourself",
      zh: "結尾怎麼收",
      blocks: [
        {
          t: "lead",
          en: "You had good questions prepared — but then what? Most people stop there and wait for the other side to wrap up, which makes the last move of the whole conversation a passive one.",
          zh: "你準備了很好的提問，但問完之後呢？多數人在這裡就停住，等對方收尾——於是整場對話的最後一個動作是被動的。",
        },
        {
          t: "model",
          en: "Three sentences, three jobs",
          zh: "三句話，三個功能",
          hintEn: "Say you're interested, leave something concrete behind, and ask what happens next.",
          hintZh: "表達興趣、留下具體的東西、確認下一步。",
          revealEn: "Show the close", revealZh: "顯示收尾",
          parts: [
            { tag: "Say you're interested", tagZh: "表態", en: "Thank you — this has been really helpful. Based on what you've described, I'm definitely interested in exploring this further.", zh: "謝謝你，這次談話對我很有幫助。從你描述的內容來看，我確實很有興趣再進一步了解。" },
            { tag: "Leave something behind", tagZh: "留下東西", en: "Would it be useful if I sent you a short summary of the tools I've built — the Shiny review application, the Quarto reporting workflow, and the aCRF automation — so you have it on file?", zh: "要不要我寄一份簡短的摘要給你，介紹我做過的幾個工具——Shiny 審閱應用程式、Quarto 報表流程，以及 aCRF 自動化工具，讓你們留著參考？" },
            { tag: "Ask what's next", tagZh: "問下一步", en: "And could I ask what the next step would look like from your side?", zh: "另外想請教，從你們這邊來看，下一步會是什麼？" },
          ],
        },
        {
          t: "note",
          en: "Why each one is there",
          zh: "三句各自的作用",
          bodyEn: [
            "The first states a position — don't just say thank you, say **interested**.",
            "The second leaves something concrete, and naming the three tools is one more pass over your own work.",
            "The third hands the ball back and pins the timing. **What would the next step look like from your side?** has to be asked: it tells you the rhythm of what follows, and it shows you are treating this as a real opportunity rather than a chat.",
          ],
          bodyZh: [
            "第一句表態——不要只說 thank you，要說 **interested**。",
            "第二句留下具體的東西，而且點名三個工具，等於再複習一次你的作品。",
            "第三句把球交回去，同時確認時程。**What would the next step look like from your side?** 這句一定要問：它讓你知道後續節奏，也顯示你把這當成一個真實的機會在推進，不是來聊聊而已。",
          ],
        },
      ],
    },

    // ============================================================ 6
    {
      id: "edits",
      en: "Five small edits to the review guide",
      zh: "Review Guide 的五處微調",
      blocks: [
        {
          t: "lead",
          en: "Your own thirteen-question guide didn't need rewriting. These five are the adjustments, written so they stand on their own — the guide itself isn't on this page.",
          zh: "你那份十三題的 Review Guide 完成度很高，不需要逐題重寫。以下五處是調整，寫成不必對照原文也看得懂——那份文件不在這一頁上。",
        },
        {
          t: "facts",
          en: "The five",
          zh: "五處",
          items: [
            {
              en: "**Q4** — drop the line about going to the gym, and change “improving my communication skills, especially spoken English”.",
              zh: "**Q4**——拿掉健身那句；同一題的 improving my communication skills, especially spoken English 也要改。",
              soEn: "Filler in a formal answer. And telling an interviewer in English that your English needs work hands them a doubt for free — say presentation skills, or preparing for international conference talks.",
              soZh: "在正式回答裡會變成填充物。用英文對面試官說自己英文需要加強，等於主動給對方一個疑慮——改成 presentation skills，或「為國際研討會發表做準備」。",
            },
            {
              en: "**Q5** — for CIMS, reorder to Shiny → Quarto → Python.",
              zh: "**Q5**——對 CIMS 要換順序：Shiny → Quarto → Python。",
              soEn: "Their InteractiveStats is R Shiny interactive review and visualisation, so the Shiny project hits most directly. They asked for one or two, so give one and stop; wait to be asked for the second.",
              soZh: "CIMS 的 InteractiveStats 就是 R Shiny 的互動式審閱與視覺化，Shiny 那個專案最直接命中。而且對方問的是 one or two，所以先講一個就停下來，等追問再給第二個。",
            },
            {
              en: "**Q8** — put this line back in: *a role where I'm responsible for a tool or a platform area rather than a single study — designing how it works, setting the standards for it, and bringing a team along with it.*",
              zh: "**Q8**——把這句加回去：a role where I'm responsible for a tool or a platform area rather than a single study — designing how it works, setting the standards for it, and bringing a team along with it.",
              soEn: "Far more concrete than “lead or senior-level scope”, and it maps straight onto what they build. Keep the scope-over-title ending.",
              soZh: "比「lead or senior-level scope」具體得多，也直接對應 CIMS 的產品形態。「scope > title」那個收尾保留。",
            },
            {
              en: "**Q9** — don't open with your previous salary.",
              zh: "**Q9**——不要先講前一份年薪。",
              soEn: "If their opening is junior, your old number anchors the whole discussion there. Ask their range, or give your expectation. Answer honestly if they ask directly — and follow it immediately with the reason: scope and responsibility.",
              soZh: "如果 CIMS 現在開的是 junior 缺，你的舊薪資一旦先出口，整個討論就被錨定在那裡。先問對方的區間，或直接講期望值。對方主動問起再誠實回答，並緊接著說明理由（scope、responsibility）。",
            },
            {
              en: "**Q10** — ask about the validated environment first, then role fit. And cut the opening line about your knowledge of CIMS coming mainly from the website.",
              zh: "**Q10**——換順序：先問 validated environment，再問 role fit。開頭不要說「我對 CIMS 的認識主要來自公司網站」。",
              soEn: "That line discounts the research depth you built in Q11 and Q12. The role-fit question is the strongest one you wrote — ask it: letting the manager position you is far better than guessing yourself.",
              soZh: "那句會把你 Q11、Q12 建立的研究深度打折。role fit 那題寫得特別好，一定要問——讓對方幫你做角色定位，比你自己猜有效得多。",
            },
          ],
        },
        {
          t: "note",
          en: "The technical terms were all correct",
          zh: "技術名詞那一區全部正確",
          bodyEn: "Checked one by one: Power = 1−β; censoring by itself does not make a Kaplan–Meier curve fall; a hazard ratio is not a risk ratio; and proportional hazards assumes the *ratio* is constant, not the hazard. Those four are the ones most often got wrong, and you had them right.",
          bodyZh: "逐條確認過：Power = 1−β、censoring 本身不會讓 KM 曲線下降、HR 不是 risk ratio、PH 假設是比值固定而非 hazard 固定。這幾個最常被講錯，你都對了。",
        },
        {
          t: "note",
          en: "One claim to check before reusing it",
          zh: "重複使用前要確認的一句話",
          bodyEn: [
            "Q2 contained: *now, I'm working on LLM applications for clinical data quality evaluation*. It appears in no earlier material.",
            "If it is true, it is valuable — their platform already uses AI and machine learning — but you will be asked what exactly you are doing. If it is a direction you are reading about rather than building, say **exploring**, not **working on**, and be ready to say what you tried and what you found. That difference matters.",
          ],
          bodyZh: [
            "Q2 裡有一句：now, I'm working on LLM applications for clinical data quality evaluation。這在先前的材料裡沒出現過。",
            "如果是真的，這對他們很有價值——他們的平台本來就在用 AI 和機器學習——但對方幾乎一定會追問「你具體在做什麼」。如果只是正在研究的方向，措辭要改成 **exploring** 而不是 **working on**，並準備好說明你試過什麼、看到什麼問題。這個區別很重要。",
          ],
        },
      ],
    },

    // ============================================================ 7
    {
      id: "drill",
      en: "Random questions",
      zh: "隨機抽題",
      blocks: [
        {
          t: "lead",
          en: "Four questions, read aloud in a random order. They are the reusable part of this page — the next screening call asks the same things.",
          zh: "四個題目，隨機抽出來唸給你聽。這些是這一頁最能重複使用的部分——下一場 screening call 也會問一樣的事。",
        },
        {
          t: "drill",
          en: "Everything on this page",
          zh: "本頁所有題目",
          hintEn: "The clock starts when the question finishes.",
          hintZh: "題目唸完就開始計時。",
        },
      ],
    },
  ],
};
