/* Winkle's notebook — one entry per lesson, kept over time.

   The other pages in this folder are each built for one thing: an interview,
   a talk, a job starting. This one grows. A lesson produces a write-up, the
   write-up becomes an entry, and the entry goes in above the drill step.

   HOW TO ADD A SESSION
     - copy the shape of the entry below: one `step`, opened by a `lead`, with
       `part` dividers inside it
     - insert it AFTER the previous session and BEFORE the `drill` step, which
       always stays last: it collects every `qa` card on the page, so each new
       entry makes the drill longer by itself
     - step numbers come from the array order, so nothing needs renumbering

   THE RULE ABOUT HIS OWN ENGLISH
   A `fix` holds only lines where the mistake is unmistakably his. The
   write-up this entry came from says it in its own words — 自動轉錄不清楚的
   部分，不當成學員的語言錯誤 — so anything the transcript garbled was left
   out rather than tidied into a sentence he may never have said. Where the
   lesson worked from what he meant in Chinese rather than from English he
   actually said, those lines go in a `sentences` block instead, which claims
   nothing about what he said.

   Session 1 came from 課程內容整理.pdf (the 2026-10-21 lesson). Its English
   model sentences are reproduced; its Chinese explanations are Lewis's and
   are not rewritten. The two VPs' company is not named, and nor is the
   company Winkle is joining.
*/

const PAGE = {
  title: "Winkle's Notebook",
  titleZh: "上課筆記",
  navHead: "Notebook 筆記本",

  cover: {
    up: { href: "../", en: "Winkle's Learning Notes 全部頁面" },
    kicker: "一對一 · 一堂課一則",
    role: "Winkle Lu · one entry per lesson, newest at the bottom",
    roleZh: "Winkle Lu · 一堂課一則，新的加在下面",
    intro: [
      {
        en: "What was said in the lesson, kept so it can be used again: what the conversation showed, the English worth keeping, and what to practise before the next one.",
        zh: "課堂上談過的內容，留下來好再用一次：這次談話看見了什麼、哪些英文值得留著，以及下一堂課之前要練什麼。",
      },
    ],
    rulesEn: "How this page works",
    rulesZh: "這一頁怎麼用",
    rules: [
      {
        en: "**One entry is one lesson.** New entries go underneath the old ones, so the page reads in the order the lessons happened.",
        zh: "**一則就是一堂課。**新的一則加在舊的下面，所以整頁是照上課順序讀下來的。",
      },
      {
        en: "**English leads; the Chinese is underneath it.** Tap a line, or use 中文 in the bar to open all of it at once.",
        zh: "**英文在前，中文在它下面。**點一下那一行，或用上方的 中文 開關一次全部打開。",
      },
      {
        en: "**The last step collects every question on the page.** The longer this notebook gets, the more useful that drill becomes.",
        zh: "**最後一步會收進整頁所有題目。**筆記本越長，那個隨機抽題就越有用。",
      },
    ],
    jump: "drill",
    jumpEn: "Straight to the drill →",
    jumpZh: "直接進入隨機抽題",
  },

  source: {
    en: "Each entry is built from Lewis's write-up of that lesson. The English model sentences are reproduced from it and the Chinese explanations are his. Companies other than Winkle's own past employers are not named.",
    zh: "每一則都根據 Lewis 的課堂整合紀錄製作。英文範例句照原文保留，中文說明出自他的筆記。除了 Winkle 自己過去的雇主，其他公司名稱一律不寫出來。",
  },

  steps: [

    // ============================================================ 2026-10-21
    {
      id: "s1",
      en: "21 Oct 2026 · Two VPs, and what the conversation showed",
      zh: "2026/10/21 · 與兩位副總裁的談話",
      blocks: [
        {
          t: "lead",
          en: "This lesson started from your conversation with two American VPs and went outwards: how you describe your direction, what to do with a question you can't answer, using AI to practise, and the cross-cultural habits. The thread through all of it is the same — turn real experience into a clear view, then practise it until you can use it in a conversation.",
          zh: "這堂課從你和兩位美國副總裁的面談開始，延伸到職涯定位、應對未知問題、AI 輔助口說練習，以及跨文化職場溝通。核心方向是：把實際經驗整理成清楚的觀點，再練到能在對話中自然運用。",
        },
        {
          t: "note",
          en: "The thing worth keeping from this lesson",
          zh: "這堂課最值得留下的一件事",
          bodyEn: [
            "The interview answers you practised earlier are starting to turn into material for a real conversation. That is the move from **remembering an answer** to **being able to use the content**.",
            "What still needs work is the organisation of an answer, and its flexibility — the same content, reshaped for the question in front of you.",
          ],
          bodyZh: [
            "你發現先前練習過的面試內容，開始能轉化成真實談話的素材。這是從**記住答案**走向**能運用內容**的進展。",
            "目前仍需加強的是回答的組織與彈性——同樣的內容，依照眼前的問題重新調整。",
          ],
        },
        {
          t: "facts",
          en: "What this conversation showed",
          zh: "本次發現與可採取的行動",
          hintEn: "Seven things, each with what to do about it.",
          hintZh: "七件事，每件都附上可採取的行動。",
          items: [
            {
              en: "You could follow the questions and get your main idea across — but some answers stopped before the reason, the example and the value to the team.",
              zh: "能理解問題，也能傳達主要想法，但部分回答缺乏延伸。",
              soEn: "Add the reason, an example, and what it means for the team.",
              soZh: "把回答補上理由、例子與團隊價值。",
            },
            {
              en: "When you don't know the exact answer, you can still describe how you would handle it.",
              zh: "不知道確切答案時，仍可以說明處理方式。",
              soEn: "Be honest about the limit of your experience, then give a concrete next step.",
              soZh: "坦承經驗限制，提出具體下一步。",
            },
            {
              en: "“I want to run projects, and I want to build tools” needs the link between the two spelled out.",
              zh: "「想做專案，也想開發工具」需要交代兩者的關聯。",
              soEn: "Say how the project experience feeds the tool development.",
              soZh: "說清楚專案經驗如何支持工具開發。",
            },
            {
              en: "AI can organise your content, but the English it produces may be above what you can actually say.",
              zh: "AI 可以協助整理內容，但產出的英文可能超出自己的程度。",
              soEn: "Settle the Chinese meaning first, then turn it into B1 English you can hold.",
              soZh: "先確認中文意思，再轉成可掌握的 B1 英文。",
            },
            {
              en: "Notes get saved, and then not read again.",
              zh: "筆記存下來之後，不一定會再看。",
              soEn: "Turn the key points into short recordings and speaking questions.",
              soZh: "將重點轉成短錄音與口說題目。",
            },
            {
              en: "A reply that means “received” can be heard as “agreed”.",
              zh: "表示「收到」的回應，可能被理解為「同意」。",
              soEn: "Separate understanding, agreement and commitment.",
              soZh: "清楚區分理解、同意與承諾。",
            },
            {
              en: "You rarely volunteer what you have done.",
              zh: "較少主動說明自己的成果。",
              soEn: "Report progress with the action and its effect.",
              soZh: "用具體行動與影響報告進度。",
            },
          ],
        },

        // ------------------------------------------------ 職涯定位
        { t: "part", en: "Your direction: joining the two halves", zh: "職涯定位：說明兩種工作的連結" },
        {
          t: "note",
          en: "Your own idea, and the piece that is missing",
          zh: "你的核心想法，以及還缺的一塊",
          bodyEn: [
            "You want to combine running projects with building tools: lead the work to understand the real process and the real problems, then use that as the basis for the tools.",
            "The direction is already clear. What an executive still needs from you is the next sentence — **what does that combination give the team?**",
          ],
          bodyZh: [
            "你希望結合專案執行與工具開發：透過帶領專案了解實際流程與問題，再把這些經驗作為工具開發的基礎。",
            "這個方向已經清楚，但回答主管時，還需要解釋：**這樣的組合能為團隊帶來什麼？**",
          ],
        },
        {
          t: "frames",
          en: "Four steps, in this order",
          zh: "依這個順序表達",
          hintEn: "Direction, role, reason, value — the value is the one that gets left out.",
          hintZh: "方向、角色、理由、價值——最容易被漏掉的是價值。",
          items: [
            { en: "**Direction** — I'd like a role that combines project work with tool development.", zh: "**方向**——我希望結合專案執行與工具開發。" },
            { en: "**Role** — I want to keep working in projects, and take on leadership.", zh: "**角色**——我希望持續參與專案，並承擔領導責任。" },
            { en: "**Reason** — being in the work is how I understand the process and the difficulties.", zh: "**理由**——實際參與能幫助我了解流程與困難。" },
            { en: "**Value** — that experience lets me build tools the team actually needs.", zh: "**價值**——這些經驗能幫助我開發符合團隊需求的工具。" },
          ],
        },
        {
          t: "qa",
          kind: "Direction", kindZh: "職涯定位",
          en: "What kind of role are you looking for?",
          zh: "你在尋找什麼樣的職位？",
          tipEn: "About a minute, at B1 — short sentences, ordinary words, nothing you can't say under pressure.",
          tipZh: "約一分鐘，B1 程度——短句、常見字彙，不要用壓力下講不出來的句子。",
          answer: [
            { tag: "Direction and role", tagZh: "方向與角色", en: "I'm looking for a role that combines project work with tool development. I'd like to keep gaining project experience, especially as a project leader.", zh: "我正在尋找一個能結合專案工作與工具開發的職位。我希望持續累積專案經驗，尤其是擔任專案領導者的經驗。" },
            { tag: "Reason", tagZh: "理由", en: "By working closely with the team, I can better understand the whole process and the problems we face. I can then use that experience to develop tools that meet the team's needs.", zh: "透過與團隊密切合作，我可以更了解整個流程，以及我們面對的問題。接著，我可以運用這些經驗，開發符合團隊需求的工具。" },
            { tag: "Value", tagZh: "價值", en: "My goal is to help the team solve problems, save time, and improve the quality of our work. That's why I'd like to stay involved in both areas.", zh: "我的目標是協助團隊解決問題、節省時間，並提升工作品質。因此，我希望持續參與這兩個領域。" },
          ],
        },
        {
          t: "qa",
          kind: "Direction", kindZh: "職涯定位",
          en: "So what would your main role be?",
          zh: "那你的主要角色是什麼？",
          tipEn: "Answer the centre of gravity first, then add how the two support each other. Don't open with the balance.",
          tipZh: "先讓對方掌握角色重心，之後再補充兩者如何互相支持。不要一開口就講平衡。",
          answer: [
            { tag: "One sentence", tagZh: "一句話", en: "I see myself mainly as a project leader who also contributes to tool development.", zh: "我認為自己的主要角色是專案領導者，同時也參與工具開發。" },
          ],
        },

        // ------------------------------------------------ 未知問題
        { t: "part", en: "A question you can't answer", zh: "面對未知問題：用處理步驟建立可信度" },
        {
          t: "qa",
          kind: "Unknown", kindZh: "未知問題",
          en: "Roughly how long would it take to make your current tools AI-driven?",
          zh: "將現有工具轉為 AI 驅動，大約需要多少時間？",
          tipEn: "Two different questions are hiding in this one, and you can't estimate anything until you know which is being asked. Clarify → name the limit → give the method → say when an estimate could come.",
          tipZh: "這題裡藏著兩個不同的問題，不先分清楚就無法估時。釐清問題 → 說明限制 → 提出做法 → 說明何時能估時。",
          answer: [
            { tag: "Clarify", tagZh: "釐清", en: "Just to clarify, do you mean using AI to help develop the tools, or adding AI features to the tools themselves?", zh: "我想先確認一下，您的意思是使用 AI 協助開發工具，還是讓工具本身具備 AI 功能？" },
            { tag: "Name the limit", tagZh: "說明限制", en: "I haven't done this kind of work yet, so I can't give you a reliable time estimate at this stage.", zh: "我目前還沒有做過這類工作，因此現階段無法提供可靠的時間估算。" },
            { tag: "The method", tagZh: "做法", en: "I would first review the current tools and identify where AI could help. Then I would test one small part.", zh: "我會先檢視現有工具，找出 AI 可以發揮作用的地方，再測試其中一小部分。" },
            { tag: "When an estimate comes", tagZh: "何時能估時", en: "Based on the results, I could give you a more realistic estimate.", zh: "根據測試結果，我就能提供更實際的估算。" },
          ],
        },
        {
          t: "bank",
          en: "The two meanings, kept apart",
          zh: "兩個需要分開的意思",
          hintEn: "Tap a row for the Chinese.",
          hintZh: "點一列可看中文。",
          rows: [
            { en: "use AI to help develop the tools", zh: "使用 AI 協助修改或開發程式" },
            { en: "add AI features to the tools themselves", zh: "讓工具本身具備 AI 功能" },
          ],
        },
        {
          t: "note",
          en: "What this answer is doing",
          zh: "這個回答在做什麼",
          bodyEn: [
            "It doesn't pretend to experience you don't have. What it shows instead is **how you would move the work forward** — and that is what builds credibility in the moment.",
            "There is a follow-up worth taking: actually try the approach you described, get a result, and go back to them with it. A question you couldn't answer then becomes a concrete reason to be in touch again.",
          ],
          bodyZh: [
            "這個回答不需要假裝有經驗，但必須讓對方看見**你會如何推進工作**——那才是當下建立可信度的方式。",
            "還有一個值得做的後續：實際嘗試當時提出的做法，取得結果後再向對方更新。這能把一次答不出來的問題，轉成後續交流的具體素材。",
          ],
        },

        // ------------------------------------------------ 他的英文
        { t: "part", en: "Your English, from the recording", zh: "你的英文：原句與修正" },
        {
          t: "fix",
          en: "Two to change",
          zh: "兩句要改的",
          hintEn: "Only lines where the slip is clearly yours are here. Anything the transcript garbled was left out rather than tidied into a sentence you may not have said.",
          hintZh: "這裡只收明顯屬於你的錯誤。自動轉錄不清楚的部分一律略過，不會被整理成你可能沒說過的句子。",
          items: [
            {
              was: "Today I have … a special experience.",
              now: "Yesterday, I had a special experience.",
              moreEn: "I had an interesting conversation with two senior executives yesterday.",
              whyEn: "The meeting was the day before and it is finished, so it takes the past tense. The second version is better still: say what the experience *was*, and the opening stops being vague.",
              whyZh: "面談發生在前一天，而且已經結束，所以用過去式。第二個版本更好：直接說明那是什麼經驗，開場就不會空泛。",
            },
            {
              was: "I have a ability to … face to face with two …",
              now: "I had the opportunity to speak face-to-face with two vice presidents from another company.",
              whyEn: "**have the ability to** is being able to do something; **have the opportunity to** is getting the chance to. This was a chance, not a capability — and the verb *speak* has to be there.",
              whyZh: "**have the ability to** 是「有能力做某事」，**have the opportunity to** 是「有機會做某事」。這裡講的是機會，不是能力——而且動詞 speak 不能省。",
            },
          ],
        },
        {
          t: "bank",
          en: "The pair, side by side",
          zh: "兩個用法對照",
          rows: [
            { en: "have the **ability** to — I have the ability to lead a team.", zh: "有能力做某事。我有能力帶領團隊。" },
            { en: "have the **opportunity** to — I had the opportunity to meet two VPs.", zh: "有機會做某事。我有機會見到兩位副總裁。" },
          ],
        },
        {
          t: "sentences",
          en: "Written from what you meant in Chinese",
          zh: "依你的中文整理出來的說法",
          hintEn: "These are not corrections — the lesson built them from what you wanted to say, so there is no “original” to compare them with.",
          hintZh: "這些不是修正——是課堂依你想表達的中文重新寫成的，所以沒有可以對照的「原句」。",
          items: [
            { en: "One VP was friendly and listened carefully. The other seemed less engaged at times.", zh: "其中一位副總裁很親切，也仔細聆聽。另一位有時看起來比較不投入。" },
            { en: "I'd like to explain what I can contribute to the team.", zh: "我想說明自己能為團隊帶來什麼貢獻。" },
            { en: "I can use my project experience to help the team identify problems and develop useful tools.", zh: "我可以運用專案經驗，協助團隊找出問題並開發實用的工具。" },
          ],
        },
        {
          t: "note",
          en: "Why “seemed”, and one detail to keep",
          zh: "為什麼用 seemed，以及一個要保留的細節",
          bodyEn: [
            "**seemed** keeps it as your observation rather than a verdict on the person — which is both more accurate and safer to say out loud about an interviewer.",
            "And keep the detail: later in the recording, that same VP was looking at you and asking follow-up questions in the direct exchange. The fuller description is truer than “less engaged”.",
          ],
          bodyZh: [
            "**seemed** 能保留「這是我的觀察」的語氣，而不是對那個人下判斷——既比較準確，說出口也比較安全。",
            "另外這個細節要留著：逐字稿後段提到，那位副總裁在直接對談時仍有看著你並追問。完整的描述比「比較不投入」更貼近事實。",
          ],
        },

        // ------------------------------------------------ 搭配詞
        { t: "part", en: "Collocations from this lesson", zh: "實用搭配詞" },
        {
          t: "terms",
          en: "Twelve, and one more word",
          zh: "十二個搭配詞，外加一個字",
          hintEn: "Tap 🔊 for the phrase or the sentence; tap the row for the Chinese.",
          hintZh: "點 🔊 可聽詞組或例句，點該列可看中文。",
          items: [
            { w: "speak face-to-face with someone", def: "talk with someone in person", ex: "I spoke face-to-face with two VPs.", zh: "與某人面對面交談", exZh: "我與兩位副總裁面對面交談。" },
            { w: "gain hands-on experience", def: "get experience by doing the work yourself", ex: "I want to gain more hands-on experience in project management.", zh: "累積實務經驗", exZh: "我想累積更多專案管理實務經驗。" },
            { w: "take on a leadership role", def: "accept the responsibility of leading", ex: "I'm ready to take on a leadership role.", zh: "承擔領導角色", exZh: "我已準備好承擔領導角色。" },
            { w: "contribute to the team", def: "add something useful to the team's work", ex: "I can contribute to the team through tool development.", zh: "為團隊做出貢獻", exZh: "我可以透過工具開發為團隊做出貢獻。" },
            { w: "meet different requirements", def: "satisfy what different people ask for", ex: "Our tools need to meet different client requirements.", zh: "滿足不同要求", exZh: "我們的工具需要滿足不同客戶的要求。" },
            { w: "address practical needs", def: "deal with what people actually need", ex: "The tool should address practical needs.", zh: "回應實際需求", exZh: "這項工具應該回應實際需求。" },
            { w: "integrate AI into a workflow", def: "build AI into the way the work is done", ex: "We're exploring how to integrate AI into our workflow.", zh: "將 AI 整合進工作流程", exZh: "我們正在探索如何將 AI 整合進工作流程。" },
            { w: "give a realistic estimate", def: "say how long something will really take", ex: "I need more information to give a realistic estimate.", zh: "提供實際可行的估算", exZh: "我需要更多資訊，才能提供實際可行的估算。" },
            { w: "take action on feedback", def: "do something about what you were told", ex: "I took action on the feedback from the interview.", zh: "根據回饋採取行動", exZh: "我根據面試回饋採取了行動。" },
            { w: "follow up with someone", def: "contact someone again about it", ex: "I'll follow up with him after the test.", zh: "後續與某人聯繫", exZh: "測試完成後，我會再與他聯繫。" },
            { w: "speak up in meetings", def: "say something rather than staying quiet", ex: "I'm practicing speaking up in meetings.", zh: "在會議中主動發言", exZh: "我正在練習於會議中主動發言。" },
            { w: "recognize someone's contribution", def: "say out loud what someone did well", ex: "A good leader recognizes the team's contributions.", zh: "肯定某人的貢獻", exZh: "好的領導者會肯定團隊的貢獻。" },
            { w: "inevitable", say: "in-EV-it-uh-bul", def: "certain to happen; impossible to avoid", ex: "AI became a major topic in our conversation, and we discussed whether its wider use was inevitable.", zh: "不可避免的", exZh: "AI 成為我們談話中的重要主題，我們也討論了它的普及是否不可避免。" },
          ],
        },
        {
          t: "note",
          en: "One line to keep straight",
          zh: "有一條界線要說清楚",
          bodyEn: "What you heard about pharma companies and CROs wanting AI is an observation **from this one conversation**. It is not yet a statement about the industry, and saying it as though it were invites a follow-up you can't support.",
          bodyZh: "你分享的藥廠與 CRO 對 AI 的需求，應視為**這次面談得到的觀察**，尚不能直接推論為整個產業的共同情況。說得太滿，就會引來你撐不住的追問。",
        },

        // ------------------------------------------------ 方法
        { t: "part", en: "Turning notes into something you can say", zh: "把筆記變成能說出口的內容" },
        {
          t: "sentences",
          en: "Six steps",
          zh: "六個步驟",
          hintEn: "The point of the order: the Chinese is settled before any English is written, and the script is dropped before you finish.",
          hintZh: "這個順序的用意：先把中文定下來，再寫英文；而且在結束前就要把稿子拿掉。",
          items: [
            { en: "Recall the question: what were you asked, and which part didn't come out clearly?", zh: "回想問題：對方問了什麼？我哪一段沒有說清楚？" },
            { en: "Record it in Chinese first — say the whole thought once.", zh: "先用中文錄音：把自己的想法完整說一次。" },
            { en: "Tidy the Chinese: ask AI to reorder it, then check it still says what you meant.", zh: "整理中文：請 AI 調整順序，再確認是否忠於原意。" },
            { en: "Turn it into B1 English, using patterns you understand and can say.", zh: "轉成 B1 英文：使用自己理解、也能說出口的句型。" },
            { en: "Record the English version, and listen for where you get stuck.", zh: "錄下英文版本：聽自己的表達，找出卡住的位置。" },
            { en: "Answer again from the question alone, leaning on the script less each time.", zh: "只看問題重新回答：逐步減少對完整稿件的依賴。" },
          ],
        },
        {
          t: "prompt",
          en: "The prompt for step 3 and 4",
          zh: "第 3、4 步可以用的提示詞",
          text: `請先將以下口語內容整理成自然、清楚的繁體中文，保留我的原意，不加入新的經歷、成果或承諾。再翻成適合 CEFR B1 的職場口說英文，使用短句與常見字彙。最後列出五個值得練習的搭配詞。`,
        },
        {
          t: "bank",
          en: "Two kinds of practice, and what each is for",
          zh: "兩種練習，各自的目的",
          rows: [
            { en: "self-talk / speaking practice on your own", zh: "與自己對話：整理想法，練習完整表達。" },
            { en: "interactive conversation", zh: "與他人對話：練習聆聽、回應與追問。" },
          ],
        },
        {
          t: "note",
          en: "A full answer and a conversation have different rhythms",
          zh: "完整回答與日常對話，節奏不同",
          bodyEn: "In an interview or a pitch, practise **point → reason → example → limit → close**. In ordinary conversation, give one point and leave room for the other person to take it.",
          bodyZh: "面試或提案時，可以練習**重點 → 原因 → 例子 → 限制 → 收束**；日常交談則先說一個重點，留空間讓對方接話。",
        },

        // ------------------------------------------------ 跨文化
        { t: "part", en: "Cross-cultural: the three to practise first", zh: "跨文化職場溝通：三項優先練習" },
        {
          t: "note",
          en: "These three overlap with another page",
          zh: "這三項和另一頁重疊",
          bodyEn: "“Starting the new job” covers the same ground in more detail — ten points, with the calendar and the polite-instruction table. This entry keeps only what this lesson pressed on.",
          bodyZh: "「新工作的英語溝通架構」那一頁寫得更完整——十個點，還有行事曆與客氣指令對照表。這一則只留這堂課特別強調的部分。",
        },
        {
          t: "bank",
          en: "1 · Understanding, agreeing, committing",
          zh: "1 · 區分「我理解」與「我答應」",
          hintEn: "Yes and OK mean whatever the context makes them mean. With a task, a deadline or a hand-off, say the whole position.",
          hintZh: "Yes、OK 的意思取決於上下文。遇到任務、時程或責任分配時，最好把自己的立場說完整。",
          rows: [
            { en: "I understand what you mean.", zh: "表示理解：我理解您的意思。" },
            { en: "Thanks for the update.", zh: "確認收到：謝謝您告知最新狀況。" },
            { en: "Let me check the timeline first.", zh: "尚需確認時程：讓我先確認時程。" },
            { en: "I understand the request, but I need to check whether we can meet the deadline.", zh: "尚未承諾：我理解這項需求，但需要確認我們能否如期完成。" },
            { en: "Yes, I can finish it by Friday.", zh: "明確承諾：可以，我能在星期五前完成。" },
          ],
        },
        {
          t: "frames",
          en: "2 · One useful thing per meeting",
          zh: "2 · 每次會議提出一項有用的內容",
          hintEn: "You said you rarely speak in meetings, which costs you the chance to raise a problem while it is still cheap. Start with one of these three, once per meeting.",
          hintZh: "你提到平常較少在會議中發言，可能因此錯過提出問題與共同討論的機會。先從這三種簡短發言開始，每場會議練一次。",
          items: [
            { en: "Could I clarify one point?", zh: "我可以確認一個重點嗎？" },
            { en: "One concern I have is the timeline.", zh: "我有一項顧慮，就是時程。" },
            { en: "Based on my experience, we may need to check the data first.", zh: "根據我的經驗，我們可能需要先確認資料。" },
          ],
        },
        {
          t: "frames",
          en: "3 · Your contribution, as facts",
          zh: "3 · 用事實呈現自己的貢獻",
          hintEn: "What I did → who it helped → what changed. These two are practice examples, not things you have done — fill the shape with your own.",
          hintZh: "我做了什麼 → 幫助了誰 → 產生什麼影響。以下兩句是練習範例，不是你已完成的成果——請用自己的事情填進這個架構。",
          items: [
            { en: "I created a checklist for the team. It helped us spot missing information earlier and reduced repeated checks.", zh: "我為團隊建立了一份檢查表。它幫助我們更早發現缺漏資訊，也減少重複檢查。" },
            { en: "Your checklist helped us catch the missing information before the review. Thank you.", zh: "（同樣的架構也能用來肯定同事）你的檢查表幫助我們在審查前發現缺漏資訊，謝謝你。" },
          ],
        },

        // ------------------------------------------------ 功課
        { t: "part", en: "Before the next lesson", zh: "課後練習" },
        {
          t: "facts",
          en: "Five tasks",
          zh: "五項練習",
          hintEn: "Each one says what finished looks like.",
          hintZh: "每一項都附上完成標準。",
          items: [
            {
              en: "**Your direction.** Answer: What kind of role are you looking for?",
              zh: "**職涯定位。**回答：What kind of role are you looking for?",
              soEn: "Record 45 to 60 seconds, containing the role, the reason and the value to the team.",
              soZh: "錄製 45–60 秒，包含角色、理由與團隊價值。",
            },
            {
              en: "**The unknown question.** Answer: How long would it take to add AI features to your tools?",
              zh: "**未知問題。**回答：How long would it take to add AI features to your tools?",
              soEn: "Clarify first, then give the steps. Don't guess at a timeline.",
              soZh: "先釐清，再提出處理步驟，不任意猜時程。",
            },
            {
              en: "**Speaking in a meeting.** Prepare one question, one concern and one suggestion.",
              zh: "**會議發言。**準備一項問題、一項顧慮與一項建議。",
              soEn: "One or two sentences of English each.",
              soZh: "每項各用 1–2 句英文。",
            },
            {
              en: "**A record of what you did.** Each day, write down one concrete action and who it helped.",
              zh: "**貢獻紀錄。**每天記下一項具體行動及其幫助。",
              soEn: "Two sentences, using I… It helped…",
              soZh: "使用 I… It helped… 完成兩句。",
            },
            {
              en: "**Flexibility.** Practise the same direction against three different phrasings of the question.",
              zh: "**彈性回答。**用三種不同問法練習同一個職涯方向。",
              soEn: "Keep the core the same; change the emphasis to fit the question.",
              soZh: "維持核心一致，依問題調整重點。",
            },
          ],
        },
        {
          t: "qa",
          kind: "Flexibility", kindZh: "彈性回答",
          en: "What kind of opportunity are you looking for?",
          zh: "你正在尋找什麼樣的機會？",
          tipEn: "Same core as the direction answer above. Say it without opening that one — if you can't, the content isn't yours yet.",
          tipZh: "核心和上面那題一樣。不要打開範例就講一次——講不出來，就代表內容還沒變成你的。",
        },
        {
          t: "qa",
          kind: "Flexibility", kindZh: "彈性回答",
          en: "What role would you like to play on our team?",
          zh: "你希望在我們團隊中扮演什麼角色？",
          tipEn: "This one asks about them, not about you. Lead with the role, then what it gives the team.",
          tipZh: "這題問的是「在我們團隊」，不是你自己。先講角色，再講它能帶給團隊什麼。",
        },
        {
          t: "qa",
          kind: "Flexibility", kindZh: "彈性回答",
          en: "How would your project experience help you develop better tools?",
          zh: "你的專案經驗會如何幫助你開發更好的工具？",
          tipEn: "The link itself is the answer here — the reason and the value, with the direction assumed.",
          tipZh: "這題要的就是那個連結——理由和價值，方向可以當成已知。",
        },
        {
          t: "practice",
          en: "Task 1, against the clock",
          zh: "第一項練習，計時",
          hintEn: "45 to 60 seconds. Record it, then listen for whether the value to the team actually arrived.",
          hintZh: "45–60 秒。錄下來，然後聽「團隊價值」那一段有沒有真的講出來。",
          low: 45,
          high: 60,
        },
        {
          t: "note",
          en: "What the next lesson checks first",
          zh: "下一堂課優先檢視",
          bodyEn: "Whether you can state your role and your value clearly, to three different phrasings of the question, **without the full script in front of you**.",
          bodyZh: "能否在不看完整稿件的情況下，依照不同問法，清楚說出自己的角色與價值。",
        },
      ],
    },

    // ============================================================ the drill
    // Always last. It owns no questions: it takes every qa card on the page,
    // so each new entry lengthens it without being wired in.
    {
      id: "drill",
      en: "Random questions",
      zh: "隨機抽題",
      blocks: [
        {
          t: "lead",
          en: "Every question in this notebook, in a random order, read aloud. No preparation, no second take — the point is retrieval, not performance.",
          zh: "筆記本裡的所有題目，隨機抽出來唸給你聽。不準備、不重來——練的是「臨場提取」，不是表演。",
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
