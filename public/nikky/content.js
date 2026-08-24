/* Nikky — a running notebook of one-to-one sessions.

   Same machinery as /aaron/ and /anny/, and the same rules. This page is not a
   lesson; it is a notebook that grows. Every discussion adds one entry to
   `sessions` below and nothing else changes: no new files, no new folder, no
   renderer edit.

   ADDING A SESSION
   ----------------
   Copy the last entry in `sessions`, change `id`, `n`, `date` and the titles,
   and rewrite the blocks. Put it at the BOTTOM of the array — the page is
   chronological, oldest first, and opens with the newest session expanded and
   the earlier ones folded away. The contents list, the numbering and the
   anchors all come from the array, so there is nothing else to keep in step.

   `id` must be unique and URL-safe: it becomes the anchor, so
   /nikky/#s2 opens session 2 with the rest folded.

   THE CHINESE LAYER
   -----------------
   Every visible English string has a Traditional Chinese counterpart. English
   is what shows; the Chinese waits behind a small 中 chip, or the 中文 switch
   in the top bar opens the lot. Instructions, task prompts, the contents list
   and anything already behind a deliberate reveal stay bilingual — those are
   scaffolding, not comprehension practice.

   A gap-fill translation is a COMPLETE Chinese sentence — the blank is filled
   in, and only the English keeps its ___. That is the notebook convention and
   it differs from the other pages in this repo, which leave ＿＿ in the Chinese
   so it cannot hand over the answer. Here the page is teacher-led and nothing
   is scored, so the Chinese is there to make the situation clear rather than to
   be a second puzzle — and it is still one tap away rather than on screen.

   Matching halves and answer chips stay in English; each is glossed on its own
   phrase card anyway.

   BLOCK TYPES
   -----------
     lead      a framing sentence in italics, opening a session
     link      a pointer to another page in this site
     quote     a short quote, with attribution
     summary   a teaching paragraph, spoken aloud on request
     note      a boxed aside explaining one idea in more depth
     contrast  two columns compared. The tags default to "As it landed" / "As
               it could land"; set coldEn/coldZh and warmEn/warmZh for any other
               pairing — a habit against its replacement, an instinct against a
               reframe
     phrases   phrase cards — English face up, Chinese and an example behind a tap
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three phrases to choose from
     fix       something Nikky actually said, with the upgrade behind a tap
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     have it / need it cards, for auditing something
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking or writing task with a tick-list of target phrases

   ABOUT THE `fix` BLOCK IN SESSION 1
   ----------------------------------
   The sentences come from the automatic captions of the session recording, so
   only lines that were clearly transcribed are used. Where the captions were
   plainly garbled — SAP written as "SEP", SOP as "SLP", Claude Code as "Cloud
   Code" — nothing was reconstructed from memory. A guessed sentence would make
   the most trustworthy part of the page the least.

   SAMPLE BANNER
   -------------
   Setting `sample` puts a line across the top saying the content is a
   placeholder — on screen and in print, so a draft cannot be handed over by
   accident. Session 1 is real, so it is off.
*/

const NOTEBOOK = {
  student: 'Nikky',
  title: 'Nikky’s English Notebook',
  titleZh: 'Nikky 的英文筆記',
  kicker: '商業英語討論課 · 課堂筆記',

  intro: {
    en: 'This page is where our sessions are kept. Everything we work through together stays here, so you can come back to it between lessons — the language, the ideas, and the sentences worth keeping.',
    zh: '這一頁是我們課程的紀錄。每次上課討論過的內容都會留在這裡，方便你在課與課之間回來複習——包括語言、觀念，以及值得留下來的句子。',
    goalsEn: 'How to use it',
    goalsZh: '使用方式',
    goals: [
      {
        en: 'Tap any English line to see the Chinese. The 中文 switch at the top opens all of them at once.',
        zh: '點任何一句英文就會出現中文。上方的「中文」按鈕可以一次全部打開。',
      },
      {
        en: 'Tap 🔊 to hear a phrase or sentence read aloud, as many times as you like.',
        zh: '點 🔊 可以聽片語或句子的發音，想聽幾次都可以。',
      },
      {
        en: 'Nothing is saved and nothing is scored. Reloading the page clears it for a fresh run.',
        zh: '這裡不會儲存也不會計分。重新整理頁面就會清空，可以重新練一次。',
      },
      {
        en: 'The newest session is open; earlier ones are folded. Tap a session heading to open or close it.',
        zh: '最新的一堂課是展開的，之前的則收合起來。點課程標題就能展開或收合。',
      },
    ],
  },

  sessions: [
    {
      id: 's1',
      n: 1,
      date: '2026-08-18',
      dateEn: '18 August 2026',
      dateZh: '2026 年 8 月 18 日',
      en: 'Stabilise it before you automate it',
      zh: '先穩住，再談自動化',

      focus: [
        { en: 'Week two in a new job', zh: '新工作第二週' },
        { en: 'Key-person dependency', zh: '關鍵人員依賴' },
        { en: 'SOPs and backup', zh: 'SOP 與備援' },
        { en: 'AI at work', zh: '用 AI 學新工作' },
        { en: 'The first 90 days', zh: '前 90 天' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'Your second week in a new company, told honestly: the Excel files, the manager who did everything herself, the supervisor who was shocked, and a computer that still has no SAP on it. Underneath all of it, one question — where does a new manager actually start?',
          zh: '這是你在新公司的第二週，說得很誠實：滿滿的 Excel 檔、什麼都自己做的前任主管、聽完你的話很震驚的那位 supervisor，還有一台到今天都還沒裝上 SAP 的電腦。而在這些底下，其實只有一個問題——一個新主管，到底該從哪裡開始？',
        },

        {
          t: 'summary',
          en: 'Almost everything in this hour was a version of the same problem: important knowledge sitting inside one person’s head, one Excel file or one unstructured video, with nothing underneath it. The instinct in that situation is to fix the visible thing first — the manual process, the Excel habit — and automate it. The argument that came out of the session was the opposite order: understand it, write it down, spread it across the team, and only then improve it.',
          zh: '這一個小時裡談的幾乎都是同一個問題的不同版本：重要的知識全放在一個人的腦袋裡、一個 Excel 檔裡，或一段沒有結構的錄影裡，底下什麼支撐都沒有。遇到這種情況，直覺會想先修看得見的那件事——人工流程、Excel 的習慣——然後把它自動化。而這堂課談出來的結論剛好是相反的順序：先弄懂它、寫下來、讓知識分散到整個團隊，最後才談改善。',
        },

        {
          t: 'note',
          en: 'What she walked into',
          zh: '她接手的是什麼樣的現場',
          bodyEn: 'In the previous company, reports came out of SAP and the numbers arrived on a Power BI dashboard, so a manager could see the trend and the overall situation in a minute. Excel existed, but it was not the centre of anything. In the new company, almost everything is manual: each person keeps their own Excel file, the files travel by email as attachments, and several of them have to be consolidated before one report can be produced for the sales head. The information is all there — it is simply not in one place, and getting it into one place depends on people remembering to send it.',
          bodyZh: '在前一家公司，報表是從 SAP 產出的，數字會進到 Power BI 的儀表板，主管一分鐘之內就能看到趨勢與整體狀況。Excel 當然還是有，但它不是任何流程的中心。在新公司，幾乎所有事情都是人工的：每個人維護自己的 Excel 檔，檔案靠 email 附件在人與人之間流動，要產出一份給業務主管的報告，得先把好幾個檔案彙整起來。資訊其實都存在——只是不在同一個地方，而要把它們湊到同一個地方，得靠每個人記得把檔案寄出來。',
        },

        {
          t: 'note',
          en: 'Key-person dependency',
          zh: '關鍵人員依賴',
          bodyEn: 'The previous manager handled the biggest key account herself — an account worth about seventy per cent of the sales. She was the only person who knew how that account’s orders were processed, and when she left, that knowledge left with her. This has a name in management English: key-person dependency. It is not a criticism of the person; it is a description of the structure. A team can look perfectly healthy right up to the day the one person who knows something walks out of the door, which is exactly why a backup plan is worth building while everything still looks fine.',
          bodyZh: '前任主管親自處理最大的那個 key account——那個客戶大約佔了七成的業績。整個公司只有她知道那個客戶的訂單怎麼跑，她一離開，那份知識就跟著離開了。管理英文裡對這件事有個名字：key-person dependency（關鍵人員依賴）。這不是在批評誰，而是在描述結構。一個團隊可以一直看起來很健康，直到那個唯一知道某件事的人走出大門的那一天——這正是為什麼備援方案要在一切都還看起來沒問題的時候就先做。',
        },

        {
          t: 'contrast',
          en: 'The habit, and the shift',
          zh: '目前的習慣，與想要的轉變',
          coldEn: 'The habit here',
          coldZh: '目前的習慣',
          warmEn: 'The shift she wants',
          warmZh: '她想推動的轉變',
          hintEn: 'Three places where the same move happens. Both columns are good English — read them both aloud.',
          hintZh: '有三個地方出現了同樣的轉折。左右兩欄都是道地的英文，兩邊都請唸出聲。',
          items: [
            {
              caseEn: 'Who does the operational work',
              caseZh: '日常訂單的工作由誰做',
              cold: {
                en: 'The manager knows every order and handles the key account personally, so nothing goes wrong.',
                zh: '主管熟悉每一張訂單，重要客戶也親自處理，所以什麼都不會出錯。',
              },
              warm: {
                en: 'I know the overall order flow in SAP, but I have never created each order myself. I need your support with the daily operations, and in return I can help you solve the problems you get stuck on.',
                zh: '我了解 SAP 裡整體的訂單流程，但我沒有親手開過每一種訂單。日常的訂單處理我需要你們的支援，而我可以協助你們解決卡住的問題。',
              },
              whyEn: 'The first version is safer this week and far more dangerous next year: it puts every critical piece of knowledge back into one head. The second trades short-term smoothness for a team that can still run when one person is away.',
              whyZh: '第一種說法這個星期比較安全，但明年會危險得多：它又把所有關鍵知識塞回同一顆腦袋裡。第二種用短期的順暢，換一個少了任何一個人都還跑得動的團隊。',
            },
            {
              caseEn: 'How a problem arrives at your desk',
              caseZh: '問題被送到你桌上的方式',
              cold: {
                en: 'Here is the problem. Please solve it.',
                zh: '這裡有一個問題，請你解決。',
              },
              warm: {
                en: 'Here is the problem. I looked at two possible solutions, and this is the one I would recommend.',
                zh: '這裡有一個問題。我想了兩個可能的解法，而我會建議採用這一個。',
              },
              whyEn: 'Both sentences report the same problem. Only the second one builds anything: it is the difference between problem reporting and problem ownership, and it is the skill a supervisor has to have before the title means very much.',
              whyZh: '兩句話回報的是同一個問題，但只有第二句在累積什麼：這就是「回報問題」和「承擔問題」的差別，也是一位 supervisor 在頭銜真正有意義之前，必須先具備的能力。',
            },
            {
              caseEn: 'Where to start with a messy process',
              caseZh: '面對混亂的流程從哪裡開始',
              cold: {
                en: 'This is all done in Excel by hand. Let’s automate it.',
                zh: '這些全都是用 Excel 手工做的，我們把它自動化吧。',
              },
              warm: {
                en: 'Let me learn how it is actually done first. Then we standardise it, and only then do we automate it.',
                zh: '先讓我搞清楚它實際上是怎麼做的，然後把它標準化，最後才談自動化。',
              },
              whyEn: 'Automating a process you have not done yourself usually automates the wrong steps and removes the ones that were quietly holding it together. It also makes the people who own the process feel replaced rather than consulted.',
              whyZh: '把一個你自己沒做過的流程自動化，通常會把錯的步驟自動化掉，同時拿掉那些默默在撐住整件事的環節。而且對真正在跑這個流程的人來說，那感覺像是被取代，而不是被諮詢。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Walking into a team',
          zh: '接手一個團隊',
          items: [
            {
              en: 'a manual process',
              zh: '人工作業流程',
              eg: 'Most of the reporting here is still a manual process.',
              egZh: '這裡大部分的報表作業，到現在還是人工流程。',
            },
            {
              en: 'consolidate several files',
              zh: '彙整好幾個檔案',
              eg: 'Someone has to consolidate several files before the report can go out.',
              egZh: '報告寄出去之前，得有人先把好幾個檔案彙整起來。',
            },
            {
              en: 'generate a report',
              zh: '產出報告',
              eg: 'In my last company we could generate a report straight from SAP.',
              egZh: '在我上一家公司，我們可以直接從 SAP 產出報告。',
            },
            {
              en: 'see the big picture',
              zh: '掌握全貌',
              eg: 'With a dashboard, a manager can see the big picture in about a minute.',
              egZh: '有了儀表板，主管大概一分鐘就能掌握全貌。',
            },
            {
              en: 'a key account',
              zh: '重要客戶',
              eg: 'One key account is worth about seventy per cent of our sales.',
              egZh: '單單一個重要客戶，就大約佔了我們七成的業績。',
            },
            {
              en: 'key-person dependency',
              zh: '關鍵人員依賴',
              eg: 'We have a serious key-person dependency: only one person knew how to handle that account.',
              egZh: '我們有很嚴重的關鍵人員依賴：只有一個人知道那個客戶怎麼處理。',
            },
            {
              en: 'hand something over',
              zh: '交接某件事',
              eg: 'She handed the account over in a one-hour video with no structure and no transcript.',
              egZh: '她用一段一小時、沒有結構也沒有逐字稿的錄影，把那個客戶交接掉了。',
            },
            {
              en: 'daily operations',
              zh: '日常營運',
              eg: 'For the first three months my job is to keep the daily operations stable.',
              egZh: '前三個月，我的工作就是讓日常營運穩定下來。',
            },
            {
              en: 'take ownership of a problem',
              zh: '主動承擔問題',
              eg: 'I want them to take ownership of a problem instead of passing it straight up to me.',
              egZh: '我希望他們主動承擔問題，而不是一發現就直接往我這裡丟。',
            },
            {
              en: 'escalate an issue',
              zh: '把問題往上呈報',
              eg: 'Escalate an issue when you are genuinely stuck, not the moment you find it.',
              egZh: '真的卡住的時候再把問題往上呈報，而不是一發現就上報。',
            },
            {
              en: 'align expectations',
              zh: '對齊彼此的期待',
              eg: 'I spoke to her twice last week to align expectations before the training started.',
              egZh: '上週在訓練開始之前，我找她談了兩次，把彼此的期待對齊。',
            },
            {
              en: 'be hands-on',
              zh: '親自參與實務',
              eg: 'I need to be more hands-on here than I was in my last job.',
              egZh: '在這裡，我必須比上一份工作更親自參與實務。',
            },
          ],
        },

        {
          t: 'fix',
          en: 'Your own sentences, tidied up',
          zh: '你自己的句子，修過一遍',
          hintEn: 'These are from the recording of this session. Tap one to see the upgrade — try to spot the change yourself first.',
          hintZh: '這些句子取自這堂課的錄影。點一下就會看到修正後的版本——先自己找找看改了哪裡。',
          items: [
            {
              wrong: 'Everyone have her own Excel file.',
              right: 'Everyone has their own Excel file.',
              whyEn: '“Everyone” takes a singular verb — everyone has, everyone knows, everyone wants. And when the group could be anyone, English uses “their” rather than picking his or her.',
              whyZh: 'everyone 後面用單數動詞：everyone has、everyone knows、everyone wants。另外，當你指的是一群不特定的人時，英文用 their，而不用特地挑 his 或 her。',
            },
            {
              wrong: 'There are lots of manual process here.',
              right: 'There are a lot of manual processes here.',
              whyEn: '“Process” is countable, so after “lots of” it has to be plural: processes. In speech “lots of” is fine; in a written report “a lot of” or “many” sounds a level more formal.',
              whyZh: 'process 是可數名詞，接在 lots of 後面必須用複數 processes。口說用 lots of 沒問題；寫在報告裡，a lot of 或 many 會再正式一點。',
            },
            {
              wrong: 'She is ambitious to want to grow up.',
              right: 'She is ambitious — she wants to grow professionally.',
              whyEn: '“Grow up” means to go from being a child to being an adult, so it sounds unintentionally rude about a colleague. At work people grow professionally, develop, or take on more responsibility.',
              whyZh: 'grow up 是「從小孩長成大人」，用在同事身上會變成沒有惡意卻很失禮的一句話。在職場上，人是 grow professionally、develop，或 take on more responsibility。',
            },
            {
              wrong: 'They report every problem to a manager, and they want a manager to solve.',
              right: 'They report every problem to the manager and expect the manager to solve it.',
              whyEn: 'It is “the manager” — a specific person, their own manager, not any manager. And “solve” always needs an object: solve it, solve the problem.',
              whyZh: '這裡要用 the manager——是特定的那一位，也就是他們自己的主管，而不是隨便哪個主管。另外 solve 一定要有受詞：solve it、solve the problem。',
            },
            {
              wrong: 'Here I need to hands on some daily operations by myself.',
              right: 'Here I need to be hands-on with some of the daily operations.',
              whyEn: '“Hands-on” is an adjective, not a verb, so it needs “be”: be hands-on with something. “By myself” is not needed — being hands-on already means doing it yourself.',
              whyZh: 'hands-on 是形容詞不是動詞，前面要加 be：be hands-on with something。by myself 可以拿掉——hands-on 本身就已經是「自己動手做」的意思了。',
            },
            {
              wrong: 'I use AI to support me to prepare some question for the one-on-one.',
              right: 'I use AI to help me prepare questions for the one-on-ones.',
              whyEn: '“Help me do something” takes the bare verb, with no “to”. “Support” is for backing a person or a plan, not for this. And “question” is countable, so it needs the plural here.',
              whyZh: 'help me do something 後面直接接原形動詞，不加 to。support 用在支持某個人或某項計畫，這裡不適合。另外 question 是可數名詞，這裡要用複數。',
            },
            {
              wrong: 'All I can do is look the video the previous manager recorded.',
              right: 'All I can do is watch the video the previous manager recorded.',
              whyEn: 'For a video, a film or a recording, the verb is “watch”. “Look” needs “at” and suggests a still image — you look at a photo, but you watch a video.',
              whyZh: '影片、電影、錄影用的動詞是 watch。look 後面必須加 at，而且比較像在看靜止的東西——你 look at a photo，但你 watch a video。',
            },
            {
              wrong: 'I have to rely AI to help me get into a new job as soon as possible.',
              right: 'I have to rely on AI to get up to speed in the new job as quickly as possible.',
              whyEn: '“Rely” always takes “on”. And “get up to speed” is the natural phrase for reaching the level you need in a new role — “get into a new job” sounds like you are still applying for it.',
              whyZh: 'rely 後面一定接 on。另外，「快速進入新職務的狀況」道地的說法是 get up to speed；get into a new job 聽起來像是你還在應徵那份工作。',
            },
            {
              wrong: 'They think it is an efficient way because they used to.',
              right: 'They think it is efficient because they are used to it.',
              whyEn: 'Two different structures. “Used to do something” means you did it regularly in the past. “Be used to something” means you are accustomed to it now — which is what you meant.',
              whyZh: '這是兩個不同的結構。used to do something 是「以前常做某件事」；be used to something 是「現在已經習慣某件事」——你要表達的是後者。',
            },
            {
              wrong: 'Two of them left, so there are three team members in that moment.',
              right: 'Two of them had left, so there were only three team members at that point.',
              whyEn: 'The whole sentence is in the past, so “there were”. And the fixed phrase is “at that point” or “at that time” — “in that moment” is the dramatic version, used for a feeling rather than a headcount.',
              whyZh: '整句都在講過去，所以要用 there were。另外固定用法是 at that point 或 at that time；in that moment 是很戲劇性的說法，用來講一個感受，不會用來講人數。',
            },
          ],
        },

        {
          t: 'note',
          en: 'The colleague who is waiting to retire',
          zh: '那位在等退休的資深同事',
          bodyEn: 'One of the two supervisors has been with the company for twenty-four years and has told everyone — HR, the previous manager — that she is waiting for retirement and does not want to take on more. That is a genuinely hard case, because two true things are pulling in opposite directions: her seniority deserves respect, and the team still needs backup coverage that does not depend on goodwill. The useful move is usually to separate the two. You are not asking her to be ambitious; you are asking her to make sure that what she knows does not leave the building when she does. Framed as legacy rather than as extra work, it is a much easier conversation.',
          bodyZh: '兩位 supervisor 其中一位已經在公司二十四年，而且對 HR、對前任主管都說過：她在等退休，不想再承擔更多。這確實是個難題，因為有兩件同樣成立的事往相反方向拉：她的年資值得尊重，但團隊仍然需要不靠人情就能運作的備援。通常有用的做法，是把這兩件事分開。你不是在要求她變得有企圖心，你是在要求她確保：她所知道的東西，不會在她離開的那天一起離開。把它說成「留下什麼」而不是「多做一點」，這場對話會好談很多。',
        },

        {
          t: 'phrases',
          en: 'Risk, SOPs and continuity',
          zh: '風險、SOP 與營運持續',
          items: [
            {
              en: 'a standard operating procedure (SOP)',
              zh: '標準作業流程',
              eg: 'There is no standard operating procedure for this function yet.',
              egZh: '這個部門到現在還沒有標準作業流程。',
            },
            {
              en: 'a backup plan',
              zh: '備援方案',
              eg: 'Without a backup plan, one resignation stops the orders.',
              egZh: '沒有備援方案的話，一個人離職就會讓訂單停擺。',
            },
            {
              en: 'business continuity',
              zh: '營運持續性',
              eg: 'This is a business continuity issue, not just a training issue.',
              egZh: '這是營運持續性的問題，不只是訓練的問題。',
            },
            {
              en: 'cross-training',
              zh: '交叉訓練',
              eg: 'Cross-training means at least two people can cover every critical task.',
              egZh: '交叉訓練的意思是：每一項關鍵工作，至少有兩個人接得起來。',
            },
            {
              en: 'job rotation',
              zh: '工作輪調',
              eg: 'Job rotation would also show us where the process is fragile.',
              egZh: '工作輪調同時也會讓我們看見流程哪裡最脆弱。',
            },
            {
              en: 'operational risk',
              zh: '營運風險',
              eg: 'With a newcomer and someone retiring, the operational risk is high this year.',
              egZh: '一邊有新人、一邊有人準備退休，今年的營運風險很高。',
            },
            {
              en: 'build a solid foundation',
              zh: '打好穩固的基礎',
              eg: 'In my first year I want to build a solid foundation rather than change everything.',
              egZh: '第一年我想做的是打好基礎，而不是把一切都改掉。',
            },
            {
              en: 'streamline a process',
              zh: '簡化流程',
              eg: 'Once it is written down, we can see what to streamline.',
              egZh: '流程一旦寫下來，就看得出哪裡可以簡化。',
            },
            {
              en: 'automate a process',
              zh: '將流程自動化',
              eg: 'You can only automate a process you fully understand.',
              egZh: '你只能把一個自己完全弄懂的流程自動化。',
            },
            {
              en: 'get up to speed',
              zh: '快速進入狀況',
              eg: 'I am using AI to help me get up to speed in the new role.',
              egZh: '我正在用 AI 幫自己快速進入新職務的狀況。',
            },
            {
              en: 'get buy-in from someone',
              zh: '取得某人的支持',
              eg: 'I want to get buy-in from the management team before anything changes.',
              egZh: '在任何改變開始之前，我想先取得管理階層的支持。',
            },
            {
              en: 'a meaningful contribution',
              zh: '有意義的貢獻',
              eg: 'A stable handover would already be a meaningful contribution.',
              egZh: '光是一次穩當的交接，就已經是有意義的貢獻了。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Turning a conversation into an SOP',
          zh: '把一場對話變成 SOP',
          bodyEn: 'This was the best idea in the session, and it was yours. Nobody wants to be told to sit down and write documentation, so do not ask for documentation. Ask for a conversation instead: hold a Teams meeting with the person who owns the process, ask them to walk you through it step by step, and keep asking questions until the gaps are filled. Record it, take the transcript, and let AI organise it into a structured SOP. Then send it back to them to review and correct. Two things happen at once — the knowledge gets captured, and the SOP arrives with their name on it. It is their contribution, not a rule imposed by the new manager, which is exactly why they will use it.',
          bodyZh: '這是這堂課裡最好的一個想法，而且是你自己提出來的。沒有人喜歡被叫去坐下來寫文件，所以就別要文件。改成要一場對話：用 Teams 跟真正在跑這個流程的人開會，請他一步一步帶你走過一遍，一路問到縫隙都被填滿為止。把會議錄下來、取得逐字稿，再讓 AI 整理成有結構的 SOP，然後把它送回去給他審閱與訂正。這樣一次做到兩件事——知識被留下來了，而且這份 SOP 上面掛的是他的名字。那是他的貢獻，不是新主管頒下來的規定——這正是他之後真的會照著用的原因。',
        },

        {
          t: 'quote',
          en: 'Understand the process before you try to automate it.',
          zh: '在你想把流程自動化之前，先把它弄懂。',
          by: 'The through-line of this session 這堂課的主線',
        },

        {
          t: 'note',
          en: 'Explaining things in a very basic way',
          zh: '把事情講得很基本',
          bodyEn: 'You said something about the AI course you listen to on your commute that is worth keeping. What impressed you was not how much the instructor knows, but that someone who genuinely is an expert is willing to explain things in a very, very basic way. Your own words for why that is rare: when we are good at something, we want to say something professional, and we forget that the other person may have no background in it at all. That is a real risk for you this year too — you are about to explain SAP, SOPs and process design to people who have only ever worked in Excel.',
          bodyZh: '你提到通勤時聽的那門 AI 課，說了一段值得留下來的話。讓你佩服的不是講師懂多少，而是一個真正的專家，願意用非常非常基本的方式把事情講清楚。你自己說明了為什麼這很難得：當我們在某個領域很擅長，我們就會想講得很專業，而忘了對方可能完全沒有那個背景。這件事今年對你自己也是真實的風險——你即將要對一群只用過 Excel 的人，解釋 SAP、SOP 和流程設計。',
        },

        {
          t: 'cards',
          en: 'Audit the foundations',
          zh: '盤點團隊的基礎',
          hintEn: 'Go through your own team. Which of these do you already have, and which one would you build first?',
          hintZh: '一項一項檢視你自己的團隊：哪些已經有了？哪一項你會先建立？',
          items: [
            {
              icon: '📄',
              en: 'A written SOP for every critical task',
              zh: '每項關鍵工作都有書面 SOP',
              descEn: 'Not a folder of screenshots — a document someone new could follow without asking.',
              descZh: '不是一堆截圖的資料夾，而是一份新人不用問人就能照著做的文件。',
            },
            {
              icon: '🧯',
              en: 'A named backup for every critical task',
              zh: '每項關鍵工作都有指定的代理人',
              descEn: 'If one person is off for two weeks, who actually does it? Say the name out loud.',
              descZh: '如果有人請假兩週，實際上是誰來做？把名字說出來。',
            },
            {
              icon: '🔁',
              en: 'Cross-training between roles',
              zh: '職務之間的交叉訓練',
              descEn: 'Knowing about someone’s job is not the same as being able to do it on Monday.',
              descZh: '「知道別人在做什麼」和「星期一能接手做」，是兩回事。',
            },
            {
              icon: '🧠',
              en: 'A problem-solving culture',
              zh: '解決問題的文化',
              descEn: 'Problems arrive with two options attached, not with an open hand.',
              descZh: '問題送上來的時候，會附帶兩個選項，而不是攤開的手。',
            },
            {
              icon: '🎓',
              en: 'A real plan for the newcomer',
              zh: '給新人的具體計畫',
              descEn: 'Three months, written down, with someone accountable for it.',
              descZh: '三個月、寫下來，而且有明確的人負責。',
            },
            {
              icon: '🤝',
              en: 'Management alignment on your direction',
              zh: '管理階層對你方向的支持',
              descEn: 'Before people get uncomfortable, the people above you already agreed it was the plan.',
              descZh: '在同仁開始覺得不舒服之前，你的上面已經同意這就是計畫。',
            },
          ],
        },

        {
          t: 'match',
          en: 'Match the phrase',
          zh: '配對片語',
          hintEn: 'Click the Chinese on the left, then its English partner on the right.',
          hintZh: '先點左邊的中文，再點右邊對應的英文。',
          pairs: [
            { a: '關鍵人員依賴', b: 'key-person dependency' },
            { a: '主動承擔問題', b: 'take ownership of a problem' },
            { a: '把問題往上呈報', b: 'escalate an issue' },
            { a: '對齊彼此的期待', b: 'align expectations' },
            { a: '親自參與實務', b: 'be hands-on' },
            { a: '交叉訓練', b: 'cross-training' },
            { a: '營運持續性', b: 'business continuity' },
            { a: '快速進入狀況', b: 'get up to speed' },
          ],
        },

        {
          t: 'gap',
          en: 'Finish the sentence',
          zh: '完成句子',
          items: [
            {
              text: 'Only one person knew how that account was processed, so we have a serious ___.',
              textZh: '只有一個人知道那個客戶的訂單怎麼處理，所以我們有很嚴重的關鍵人員依賴。',
              options: ['key-person dependency', 'operational risk', 'backup plan'],
              answer: 0,
              why: {
                en: 'All three are in this session, but only the first names the specific problem: the knowledge is tied to one individual. “Operational risk” is the category it belongs to, and a backup plan is the cure, not the diagnosis.',
                zh: '三個選項都是這堂課的字，但只有第一個講出了那個具體的問題：知識綁在某一個人身上。operational risk 是它所屬的大類別，而 backup plan 是解方，不是診斷。',
              },
            },
            {
              text: 'I need your support with the daily operations, and in return I can help you ___ the problems you get stuck on.',
              textZh: '日常訂單處理我需要你們的支援，而作為交換，我可以協助你們解決卡住的問題。',
              options: ['solve', 'escalate', 'consolidate'],
              answer: 0,
              why: {
                en: 'This is the trade at the centre of her first week: they run the operations, she removes the blockages. Escalating would send the problem further up, which is the habit she is trying to change.',
                zh: '這正是她第一週提出的交換：他們負責跑日常營運，她負責把卡住的地方排除掉。escalate 是把問題再往上送，而那正是她想改變的習慣。',
              },
            },
            {
              text: 'I spoke to her twice last week to ___ before the newcomer’s training started.',
              textZh: '上週在新人訓練開始之前，我找她談了兩次，把彼此的期待對齊。',
              options: ['align expectations', 'get up to speed', 'take ownership'],
              answer: 0,
              why: {
                en: '“Align expectations” is what two people do together before the work starts — each one says what they need and what they will give. The other two are things one person does.',
                zh: 'align expectations 是兩個人在工作開始前一起做的事：各自說出自己需要什麼、能付出什麼。另外兩個都是一個人自己做的事。',
              },
            },
            {
              text: 'They think it is efficient because they ___ — they have worked this way for years.',
              textZh: '他們覺得這樣有效率，是因為他們已經習慣了——這種做法他們用了很多年。',
              options: ['are used to it', 'used to it', 'are using to it'],
              answer: 0,
              why: {
                en: '“Be used to something” means you are accustomed to it now. “Used to” without “be” means you did it in the past but no longer do — the opposite of what the second half of the sentence says.',
                zh: 'be used to something 是「現在已經習慣」。少了 be 的 used to 是「以前這樣做、現在不做了」——正好和後半句相反。',
              },
            },
            {
              text: 'You can only ___ a process you fully understand — otherwise you speed up the wrong steps.',
              textZh: '你只能把一個自己完全弄懂的流程自動化，否則你只是把錯的步驟加快而已。',
              options: ['automate', 'escalate', 'hand over'],
              answer: 0,
              why: {
                en: 'The second half explains the risk of doing it blindly, and speeding up the wrong steps is exactly what bad automation does. It is the closing argument of the whole session.',
                zh: '後半句在說盲目去做的風險，而「把錯的步驟加快」正是壞的自動化會造成的結果。這也是整堂課最後的結論。',
              },
            },
            {
              text: 'I am using AI to help me ___ in the new role, because there is no time to learn it slowly.',
              textZh: '我正在用 AI 幫自己快速進入新職務的狀況，因為沒有時間慢慢學。',
              options: ['get up to speed', 'build a solid foundation', 'see the big picture'],
              answer: 0,
              why: {
                en: '“Get up to speed” is specifically about reaching the required level quickly, which is why the “no time” clause fits it. The other two are about the team and the company, not about you catching up.',
                zh: 'get up to speed 專指「快速達到需要的水準」，所以後面接「沒有時間慢慢學」才順。另外兩個講的是團隊和公司，不是你自己在追進度。',
              },
            },
          ],
        },

        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的立場是什麼？',
          hintEn: 'There is no right answer — take a side and say why.',
          hintZh: '沒有標準答案：選一邊，並說明理由。',
          items: [
            { en: 'A new manager should learn the daily operations personally before changing anything.', zh: '新主管在改變任何事情之前，應該先親自把日常營運學一遍。' },
            { en: 'A supervisor who cannot solve problems is not really a supervisor.', zh: '一個不會解決問題的 supervisor，其實稱不上是 supervisor。' },
            { en: 'An employee close to retirement should still be expected to train a backup.', zh: '即將退休的員工，仍然應該被要求訓練一個代理人。' },
            { en: 'Anyone who chooses not to use AI at work today is making their own job harder.', zh: '今天在職場上選擇不用 AI 的人，是在讓自己的工作變得更難。' },
          ],
        },

        {
          t: 'discuss',
          en: 'Questions from the session',
          zh: '課堂上談到的問題',
          items: [
            {
              en: 'If you disappeared for two weeks tomorrow, which task in your team would simply stop?',
              zh: '如果你明天起消失兩個星期，你團隊裡的哪一項工作會直接停擺？',
              starters: [
                { en: 'The one that would stop immediately is…', zh: '會立刻停掉的那一項是……' },
                { en: 'Nobody else has ever done…', zh: '從來沒有第二個人做過……' },
                { en: 'The first thing I would write down is…', zh: '我會第一個寫下來的是……' },
              ],
            },
            {
              en: 'How do you ask a colleague with twenty-four years of service to take on something new, without it sounding like a demand?',
              zh: '你要怎麼請一位服務了二十四年的同事承擔新的事，又不會聽起來像是在要求她？',
              starters: [
                { en: 'I would start by acknowledging that…', zh: '我會先肯定一件事：……' },
                { en: 'Nobody knows more about … than you do, which is why…', zh: '沒有人比你更清楚……，所以我才……' },
                { en: 'What I am really asking is that…', zh: '我真正想請你做的，其實是……' },
              ],
            },
            {
              en: 'Your team is comfortable with Excel and believes it is efficient. How do you open that conversation without telling them they have been doing it wrong?',
              zh: '你的團隊很習慣 Excel，而且相信這樣很有效率。你要怎麼打開這個話題，又不會變成在說他們一直做錯了？',
              starters: [
                { en: 'Before I suggest anything, I want to understand…', zh: '在我提出任何建議之前，我想先了解……' },
                { en: 'Which part of this takes you the most time?', zh: '這裡面哪一段最花你的時間？' },
                { en: 'I am not trying to replace it — I am trying to…', zh: '我不是要取代它，我是想……' },
              ],
            },
            {
              en: 'The closing question of the session: at the end of your first 90 days, what results would make you feel you had made a meaningful contribution to this team?',
              zh: '這堂課最後的問題：在前 90 天結束時，什麼樣的結果會讓你覺得自己對這個團隊做出了有意義的貢獻？',
              starters: [
                { en: 'I would count it as a success if…', zh: '如果……，我就會認為這是成功的。' },
                { en: 'By day ninety I want at least … to be written down.', zh: '到第九十天，我希望至少有……已經被寫下來。' },
                { en: 'The result I care about most is not …, it is…', zh: '我最在意的成果不是……，而是……' },
              ],
            },
          ],
        },

        {
          t: 'task',
          en: 'Homework: your first 90 days',
          zh: '作業：你的前 90 天',
          instructionEn: 'You answered this in class, and it was a good answer — build the foundation rather than chase a visible result. Now write it properly. Three to five sentences saying what will be true at the end of your first 90 days, using the frames below. Send it on LINE and we will go over the language next time.',
          instructionZh: '這題你在課堂上回答過了，而且答得很好——先打基礎，而不是追求看得見的成果。現在把它好好寫下來：用下面的句型，寫三到五句話，說明你的前 90 天結束時，什麼會成立。用 LINE 傳給我，下次一起檢討語言。',
          prompts: [
            { en: 'Write it as a report to your general manager.', zh: '把它當成一份給總經理的報告來寫。' },
            { en: 'Or write it as a note to yourself, to reread on day ninety.', zh: '或者把它當成寫給自己的一段話，第九十天再拿出來讀一次。' },
          ],
          checklist: [
            { en: 'a standard operating procedure (SOP)', zh: '標準作業流程' },
            { en: 'a backup plan', zh: '備援方案' },
            { en: 'cross-training', zh: '交叉訓練' },
            { en: 'take ownership of a problem', zh: '主動承擔問題' },
            { en: 'get buy-in from the management team', zh: '取得管理階層的支持' },
            { en: 'a meaningful contribution', zh: '有意義的貢獻' },
          ],
          frames: [
            { en: 'By the end of my first 90 days, ___ will be documented.', zh: '在我的前九十天結束時，＿＿將會被文件化。' },
            { en: 'The risk I most want to reduce is ___.', zh: '我最想降低的風險是＿＿。' },
            { en: 'I am not trying to change ___ yet; first I need to ___.', zh: '我現在還不打算改變＿＿；我得先＿＿。' },
            { en: 'I will know it worked if ___.', zh: '如果＿＿，我就知道這件事成功了。' },
          ],
        },
      ],
    },
  ],
};
