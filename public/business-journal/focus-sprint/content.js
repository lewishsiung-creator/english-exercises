/* 國際商業期刊導讀 No. 3 — Superhuman Focus.

   Built from Lewis's own handout (Lewis Biz English · 路老師, 26 Oct 2026),
   which summarises a Diary Of A CEO interview with Dr. Sahar Yousef, a
   cognitive neuroscientist at UC Berkeley. Like No. 2 the reading passage is
   his own writing — a TOEIC Part 7-style text of about 220 words — so it goes
   on the page in full, and the eight summary points, the twenty vocabulary
   items with their workplace examples, the six comprehension questions with
   their answer key, the eight discussion questions and the homework are all
   his.

   What the page adds: glosses on eleven words in the passage, a Chinese line
   for every English sentence he wrote only in English (the example sentences,
   the question stems, the step explanations), English titles for his eight
   Chinese point headings, and sentence starters for the discussion.

   Every visible string is an `en` / `zh` pair. English is shown; the
   Traditional Chinese stays hidden until it is asked for.

     {{double braces}}  in a passage paragraph mark a word that opens a gloss;
                        the word must match a `term` in that block's glossary
                        exactly, or it renders as plain text. "peak" is
                        deliberately NOT glossed — question 5 tests it.
*/

const LESSON = {
  id: 'focus-sprint',         // must match its entry in ../course.js
  title: 'Superhuman Focus',
  titleZh: '超人專注力',
  level: 'B1–B2+',

  photo: {
    src: 'img/hero.jpg',
    alt: 'A man in glasses working alone at a laptop, papers and a phone on the desk beside him',
    by: 'Mizuno K',
    pos: '50% 40%',
  },

  source: {
    en: 'Adapted for class from an interview with Dr. Sahar Yousef, a cognitive neuroscientist at UC Berkeley and founder of the Becoming Superhuman Lab, on The Diary Of A CEO with Steven Bartlett (about 2 hours 16 minutes).',
    zh: '課堂改編自 The Diary Of A CEO 節目（主持人 Steven Bartlett）訪談 UC Berkeley 認知神經科學家、Becoming Superhuman Lab 創辦人 Dr. Sahar Yousef，全長約 2 小時 16 分。',
  },

  intro: {
    en: 'Focus is not a willpower problem. It is a design problem: cut the noise first, then use a focus sprint to do the right work at the right time. This lesson takes the eight ideas from the interview, the methods that follow from them, twenty workplace expressions, and a TOEIC-style reading.',
    zh: '專注力不是意志力問題，而是環境設計問題——先減少雜訊，再用「專注衝刺」在對的時間做對的事。這堂課涵蓋訪談中的八個核心觀點、由此延伸的做法、二十個職場詞彙，以及一篇多益風格的閱讀。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'explain in English why multitasking costs you time', zh: '用英文說明為什麼多工會讓你損失時間' },
      { en: 'use twenty workplace words and idioms about focus, noise and momentum', zh: '運用二十個關於專注、雜訊與工作節奏的職場詞彙與慣用語' },
      { en: 'read a TOEIC Part 7-style passage and answer six questions on it', zh: '讀懂一篇多益閱讀第七部分風格的短文，並回答六道題目' },
      { en: 'ask a manager for focus time politely, and name your own MITs for the week', zh: '有禮貌地向主管爭取專注時間，並說出自己本週最重要的任務' },
    ],
  },

  steps: [
    // ================================================================ 1
    {
      id: 'ideas',
      n: 1,
      en: 'Eight Ideas from the Interview',
      zh: '八個核心觀點',
      blocks: [
        {
          t: 'lead',
          en: 'Eight ideas, in the order they came up in the interview.',
          zh: '八個核心觀點，依訪談順序排列。',
        },
        {
          t: 'summary',
          n: '1',
          titleEn: 'Multitasking is a myth',
          titleZh: '多工是迷思',
          en: 'Multitasking is a myth. The brain is a monotasking machine, and every switch has a cost. In a live test, Steven lost about 60% of his speed by alternating two simple tasks.',
          zh: '多工不存在，大腦一次只能做一件事，每次切換都要付出代價。現場測試中，主持人交替做兩件簡單的事，速度掉了約 60%。',
        },
        {
          t: 'summary',
          n: '2',
          titleEn: 'The cost of distraction',
          titleZh: '分心的代價',
          en: 'Knowledge workers lose over 2 hours a day bouncing between screens, and stay on one screen for only about 47 seconds before switching.',
          zh: '知識工作者每天在螢幕與任務間來回切換，浪費超過 2 小時；平均只專注一個畫面約 47 秒就被打斷。',
        },
        {
          t: 'summary',
          n: '3',
          titleEn: 'Sleep comes first',
          titleZh: '睡眠是地基',
          en: 'Sleep comes first: at least 7 hours a night. Optimizing without sleep is like tuning an engine while the car is on fire.',
          zh: '睡眠是一切的基礎，每晚至少 7 小時。睡不夠還想優化效率，就像車子著火了還想改裝引擎。',
        },
        {
          t: 'summary',
          n: '4',
          titleEn: 'Attention is memory',
          titleZh: '注意力＝記憶力',
          en: 'You cannot remember what you do not pay attention to. Better focus means better memory and faster learning.',
          zh: '沒有注意到的事，就不可能記住。提升專注力，記憶與學習也會跟著變好。',
        },
        {
          t: 'summary',
          n: '5',
          titleEn: 'The defaults were not designed for you',
          titleZh: '預設設定不是為你設計的',
          en: 'Apps are designed to maximize engagement, not your productivity. Tech copied the food industry: more stimulation, less friction, less satiation.',
          zh: 'App 的預設設定是為了提高使用量，不是你的效率。科技業沿用食品業的三招：加強刺激、減少阻力、讓你「吃不飽」。',
        },
        {
          t: 'summary',
          n: '6',
          titleEn: 'The grayscale phone',
          titleZh: '灰階手機',
          en: 'In her lab, switching phones to grayscale for 3 weeks cut phone use by about 1 hour a day, or 7 hours a week.',
          zh: '她的實驗室讓受試者把手機調成灰階 3 週，平均每天少用手機約 1 小時，等於一週多出 7 小時。',
        },
        {
          t: 'summary',
          n: '7',
          titleEn: 'The focus sprint',
          titleZh: '專注衝刺',
          en: 'A focus sprint can help people do up to 2x more work with fewer mistakes. Choose 1–3 MITs a day; fit small LITs into the gaps.',
          zh: '「專注衝刺」可讓產出最多翻倍、錯誤更少。每天選 1–3 件最重要任務（MIT），零碎小事（LIT）塞進空檔。',
        },
        {
          t: 'summary',
          n: '8',
          titleEn: 'Work at the right time of day',
          titleZh: '在對的時間工作',
          en: 'Chronotypes decide your best focus time: AM-shifted (~25%), PM-shifted (~16%), biphasic (the majority).',
          zh: '生理時鐘類型決定你的黃金時段：早型人約 25%、晚型人約 16%、雙峰型是多數。',
        },
        {
          t: 'note',
          en: 'Two more ideas',
          zh: '另外兩個觀點',
          bodyEn: 'Scrolling short video is not a break: the best break is time in nature, and the next best is doing nothing at all. And repeating a negative thought only deepens that circuit in the brain, so move your attention somewhere else on purpose.',
          bodyZh: '滑短影音不是休息，最好的休息是接觸大自然，其次是什麼都不做；反覆重述負面想法只會加深那條神經迴路，要主動轉移注意力。',
        },
      ],
    },

    // ================================================================ 2
    {
      id: 'hygiene',
      n: 2,
      en: 'Digital Hygiene',
      zh: '數位衛生',
      photo: {
        src: 'img/phone.jpg',
        alt: 'A hand sliding a smartphone into a trouser pocket',
        by: 'Lê Mạnh Tuấn',
        pos: '50% 50%',
      },
      blocks: [
        {
          t: 'lead',
          en: 'Clear the noise first. None of these four costs anything.',
          zh: '先清除雜訊。這四件事都不用花錢。',
        },
        {
          t: 'cards',
          en: 'Four practices',
          zh: '四個做法',
          hintEn: 'Tap each one: do you already do it, or will you try it this week?',
          hintZh: '點選每一項：你已經在做了，還是這週想試試看？',
          yesEn: 'I already do this',
          yesZh: '我已經在做',
          noEn: 'I’ll try this',
          noZh: '我要試試看',
          items: [
            {
              icon: '🌑',
              en: 'Turn on grayscale',
              zh: '手機調成灰階',
              descEn: 'Switch it on in settings. The phone starts to look lifeless, and you stop reaching for it without thinking.',
              descZh: '在設定中開啟，讓手機「看起來沒生命」，減少無意識滑動。',
            },
            {
              icon: '⭐',
              en: 'Set up VIP notifications',
              zh: '設定 VIP 通知',
              descEn: 'Let only your partner, your manager and key clients through the filter. In email, you can filter on keywords such as your own name.',
              descZh: '只讓伴侶、主管、重要客戶的訊息穿透過濾；信箱可設關鍵字（例如自己的名字）。',
            },
            {
              icon: '🗄️',
              en: 'Out of sight, out of mind',
              zh: '手機離開視線',
              descEn: 'While you are focusing, put the phone in a drawer, in another room, or in a lock box.',
              descZh: '專注時放進抽屜、另一個房間或手機鎖盒。',
            },
            {
              icon: '📖',
              en: 'Choose long-form over short-form',
              zh: '長內容取代短影音',
              descEn: 'A film, a book or a podcast feeds the brain in a way that a feed of short clips never does.',
              descZh: '電影、書、Podcast 比 Reels 更能「餵飽」大腦。',
            },
          ],
        },
      ],
    },

    // ================================================================ 3
    {
      id: 'sprint',
      n: 3,
      en: 'The Focus Sprint',
      zh: '專注衝刺',
      photo: {
        src: 'img/break.jpg',
        alt: 'A man walking through a park among trees in late afternoon light',
        by: 'UMUT 🆁🅰🆆',
        pos: '50% 50%',
      },
      blocks: [
        {
          t: 'steps',
          en: 'Five steps',
          zh: '五步驟',
          hintEn: 'The order is the method. Step five is not optional.',
          hintZh: '順序就是方法。第五步不是可有可無的。',
          items: [
            {
              en: 'Block the time',
              zh: '提前把時間排進行事曆',
              descEn: 'The brain starts warming up in advance, and your colleagues can see that you are focusing.',
              descZh: '大腦會預先「暖熱」，同事也看得到你在專注。',
            },
            {
              en: 'Set an output goal',
              zh: '設定產出型目標並拆解',
              descEn: 'Not “work on the deck”, but “finish page 3 (7 minutes) → email John for the page 17 data → build the table”.',
              descZh: '不寫「做簡報」，而是「完成第 3 頁（7 分鐘）→ 寄信向 John 要第 17 頁數據 → 做表格」。',
            },
            {
              en: 'Cut distractions',
              zh: '排除干擾',
              descEn: 'Phone away, notifications off. If you want music, choose a focus playlist with no lyrics. Keep noise-cancelling headphones to 3–4 hours a day.',
              descZh: '手機拿開、關通知；聽音樂選無歌詞的專注歌單。降噪耳機每天不超過 3–4 小時。',
            },
            {
              en: 'Set a timer',
              zh: '設定倒數計時',
              descEn: 'Use Parkinson’s law: work expands to fill the time you give it.',
              descZh: '利用帕金森定律（工作會膨脹到填滿你給它的時間）。',
            },
            {
              en: 'Take a brain break',
              zh: '做真正的大腦休息',
              descEn: 'Go outside, stare into space, boil water, cut fruit. If your hands are busy, you cannot scroll.',
              descZh: '去戶外、發呆、燒開水、切水果——用雙手做事，就滑不了手機。',
            },
          ],
        },
        {
          t: 'note',
          en: 'Choosing today’s tasks',
          zh: '每日任務選擇',
          bodyEn: 'Ask every morning: how much uninterrupted time do I have today, and which 1–3 things are the MITs — the most important tasks? The test question is: what will your future self thank you for? If you cannot say what your MIT is, work out your “Everest” for five years from now first. The small jobs — the LITs, the least important tasks — go in the gaps.',
          bodyZh: '每天早上問：今天有多少不被打擾的時間？哪 1–3 件事是 MIT（most important tasks，最重要任務）？判斷問句是：What will your future self thank you for?（未來的你會感謝你做了什麼？）不知道 MIT 是什麼，就先想清楚 5 年後的「聖母峰」（Everest）。零碎小事（LIT，least important tasks）則塞進空檔。',
        },
        {
          t: 'cards',
          en: 'Which chronotype are you?',
          zh: '你是哪一種生理時鐘？',
          hintEn: 'Pick the one that sounds like you. Most people are the third.',
          hintZh: '選出最像你的那一個。多數人屬於第三種。',
          yesEn: 'That’s me',
          yesZh: '這是我',
          noEn: 'Not me',
          noZh: '不是我',
          items: [
            {
              icon: '🌅',
              en: 'AM-shifted',
              zh: '早型人',
              descEn: 'About 25% of people. Put your most important work in the early morning.',
              descZh: '約佔 25%。最重要的工作放清晨。',
            },
            {
              icon: '🌙',
              en: 'PM-shifted',
              zh: '晚型人',
              descEn: 'About 16% of people. Put it in the afternoon or the evening.',
              descZh: '約佔 16%。放下午或晚上。',
            },
            {
              icon: '⛰️',
              en: 'Biphasic',
              zh: '雙峰型',
              descEn: 'The majority. You come up to speed 45–60 minutes after waking, dip in the early afternoon, and get a second peak in the early evening.',
              descZh: '多數人屬於這型。起床後 45–60 分鐘進入狀態，空開午後低潮，傍晚有第二波高峰。',
            },
          ],
        },
      ],
    },

    // ================================================================ 4
    {
      id: 'vocabulary',
      n: 4,
      en: 'Business Vocabulary',
      zh: '商務英語單字與片語',
      blocks: [
        {
          t: 'lead',
          en: 'Twenty expressions from the interview, each with a workplace example.',
          zh: '二十個訪談中出現、職場實用的詞彙，每個都配一句職場例句。',
        },
        {
          t: 'phrases',
          en: 'Words 1–10',
          zh: '詞彙 1–10',
          items: [
            { en: 'context switching', zh: '切換任務（的成本）', eg: 'Constant context switching is slowing our team down.', egZh: '不斷切換任務正在拖慢我們團隊的速度。' },
            { en: 'monotasking', zh: '單工，一次做一件事', eg: 'I’m monotasking this morning, so I’ll reply after lunch.', egZh: '我今天早上一次只做一件事，所以午餐後才會回覆。' },
            { en: 'deep work', zh: '深度工作', eg: 'I block two hours of deep work every Tuesday.', egZh: '我每週二都排兩個小時的深度工作時間。' },
            { en: 'deliverable', zh: '交付成果', eg: 'The main deliverable is a 10-slide proposal.', egZh: '主要的交付成果是一份十頁的提案簡報。' },
            { en: 'bottom line', zh: '利潤；重點結論', eg: 'The bottom line is we need more time, not more people.', egZh: '重點是我們需要更多時間，而不是更多人力。' },
            { en: 'default settings', zh: '預設設定', eg: 'Don’t accept the default settings; customize your alerts.', egZh: '不要接受預設設定，把通知調成你自己要的。' },
            { en: 'engagement', zh: '使用黏著度／參與度', eg: 'Engagement on our app rose 15% last quarter.', egZh: '上一季我們 App 的使用黏著度成長了 15%。' },
            { en: 're-up a contract', zh: '續約', eg: 'The client is likely to re-up the contract in March.', egZh: '這位客戶三月很可能會續約。' },
            { en: 'keep someone abreast of', zh: '讓某人掌握最新狀況', eg: 'Please keep me abreast of any changes to the schedule.', egZh: '時程若有任何變動，請隨時讓我掌握最新狀況。' },
            { en: 'signal vs. noise', zh: '重點 vs. 雜訊', eg: 'Most of these emails are noise; this one is signal.', egZh: '這些郵件大多是雜訊，只有這一封才是重點。' },
          ],
        },
        {
          t: 'phrases',
          en: 'Words 11–20',
          zh: '詞彙 11–20',
          items: [
            { en: 'people-pleasing', zh: '討好型人格', eg: 'Saying no to every meeting request isn’t rude; it’s ending people-pleasing.', egZh: '拒絕每一個會議邀請並不是沒禮貌，而是不再討好所有人。' },
            { en: 'shiny new object', zh: '讓人分心的新鮮事', eg: 'Let’s not chase every shiny new object this quarter.', egZh: '這一季我們別再追逐每一個看起來新鮮的東西。' },
            { en: 'stay on the objective', zh: '堅守目標', eg: 'Good idea, but let’s stay on the objective.', egZh: '想法不錯，但我們先堅守原本的目標。' },
            { en: 'time block', zh: '時間區塊（動詞：排時段）', eg: 'I time-block my calendar every Friday.', egZh: '我每週五都會把行事曆排成時間區塊。' },
            { en: 'execution list', zh: '執行清單', eg: 'Break the project into an execution list before you start.', egZh: '開始之前，先把專案拆成一份執行清單。' },
            { en: 'game changer', zh: '改變局勢的關鍵', eg: 'The new CRM was a game changer for our sales team.', egZh: '新的 CRM 系統徹底改變了我們業務團隊的做法。' },
            { en: 'low-hanging fruit', zh: '容易先拿下的成果', eg: 'Grayscale mode is the low-hanging fruit here.', egZh: '灰階模式是這裡最容易先拿下的成果。' },
            { en: 'hit the nail on the head', zh: '一針見血', eg: 'You hit the nail on the head with that comment.', egZh: '你那句話說得一針見血。' },
            { en: 'lose steam', zh: '後繼無力', eg: 'I tend to lose steam after 3 p.m.', egZh: '我通常下午三點以後就後繼無力。' },
            { en: 'off to the races', zh: '迅速進入狀況', eg: 'Once we got approval, we were off to the races.', egZh: '一拿到核准，我們就迅速進入狀況。' },
          ],
        },
        {
          t: 'note',
          en: 'One of these is not from the interview',
          zh: '備註',
          bodyEn: '“Low-hanging fruit” was not said in the interview. It is added here because it is the phrase an office actually uses for a change as cheap as the grayscale phone.',
          bodyZh: 'low-hanging fruit 不是訪談原詞，為配合「灰階手機」的常用職場補充。',
        },
      ],
    },

    // ================================================================ 5
    {
      id: 'reading',
      n: 5,
      en: 'Reading',
      zh: '閱讀理解',
      blocks: [
        {
          t: 'lead',
          en: 'A TOEIC Part 7-style passage of about 220 words, written for this lesson from the interview.',
          zh: '多益閱讀第七部分風格的短文，約 220 字，內容改寫自訪談。',
        },
        {
          t: 'passage',
          en: 'Why Your Team Can’t Focus',
          zh: '為什麼你的團隊無法專注',
          hintEn: 'Tap an underlined word for its meaning; tap a paragraph for the Chinese.',
          hintZh: '點選畫底線的單字看意思；點選段落看中文。',
          glossary: [
            { term: 'productive', pos: 'adj.', zh: '有生產力的；產出高的' },
            { term: 'cognitive neuroscientist', pos: 'n.', zh: '認知神經科學家' },
            { term: 'knowledge workers', pos: 'n.', zh: '知識工作者（以資訊與思考為主的工作者）' },
            { term: 'engagement', pos: 'n.', zh: '使用黏著度；參與度' },
            { term: 'Notifications', pos: 'n.', zh: '通知' },
            { term: 'feeds', pos: 'n.', zh: '動態消息（不斷往下滑的內容流）' },
            { term: 'default settings', pos: 'n.', zh: '預設設定' },
            { term: 'grayscale', pos: 'n.', zh: '灰階（只有黑白灰，沒有彩色）' },
            { term: 'deep work', pos: 'n.', zh: '深度工作' },
            { term: 'distractions', pos: 'n.', zh: '干擾；讓人分心的事物' },
            { term: 'rhythm', pos: 'n.', zh: '節奏；（身體的）生理節律' },
          ],
          paras: [
            {
              en: 'Most managers believe that busy employees are {{productive}} employees. Dr. Sahar Yousef, a {{cognitive neuroscientist}} at UC Berkeley, disagrees. Her research shows that the human brain can only focus on one task at a time. Every time we switch between tasks, we lose time and energy. On average, {{knowledge workers}} waste more than two hours a day jumping between screens.',
              zh: '多數主管相信，忙碌的員工就是有生產力的員工。UC Berkeley 的認知神經科學家 Dr. Sahar Yousef 並不同意。她的研究顯示，人腦一次只能專注在一件事情上。每次在任務之間切換，我們都會損失時間與精力。平均而言，知識工作者每天在螢幕之間跳來跳去，浪費超過兩個小時。',
            },
            {
              en: 'Part of the problem is technology. According to Dr. Yousef, most apps are designed to maximize {{engagement}}, not productivity. {{Notifications}}, bright colors and endless {{feeds}} keep users coming back. Her advice is simple: people deserve better than the {{default settings}}. In one of her lab’s studies, professionals who switched their phones to {{grayscale}} for three weeks spent about one hour less on their phones each day.',
              zh: '問題的一部分出在科技。Dr. Yousef 表示，多數 App 的設計目的是把使用黏著度最大化，而不是提高你的生產力。通知、鮮豔的顏色與無止盡的動態消息，讓使用者一再回來。她的建議很簡單：人們值得比預設設定更好的東西。在她實驗室的一項研究中，把手機調成灰階三週的專業工作者，每天花在手機上的時間少了約一個小時。',
            },
            {
              en: 'For {{deep work}}, she recommends a “focus sprint.” First, block the time on your calendar. Next, turn your goal into a clear output and break it into small steps. Then remove {{distractions}}, set a timer, and take a real break afterward. A real break means stepping outside or doing nothing, not scrolling through social media.',
              zh: '至於深度工作，她推薦「專注衝刺」。首先，在行事曆上把時間空下來。接著，把目標變成清楚的產出，並拆解成小步驟。然後排除干擾、設定計時器，結束後做一次真正的休息。真正的休息是指走到戶外或什麼都不做，而不是滑社群媒體。',
            },
            {
              en: 'Finally, timing matters. Some people think best early in the morning, while others peak in the evening. Knowing your own {{rhythm}} helps you schedule your most important tasks when your brain is at its best.',
              zh: '最後，時機很重要。有些人在一大早思緒最清楚，有些人則在晚上達到高峰。了解自己的生理節律，能幫助你把最重要的任務，安排在大腦狀態最好的時候。',
            },
          ],
        },
        {
          t: 'quiz',
          en: 'Six questions',
          zh: '六道題目',
          hintEn: 'One answer each. A wrong pick stays on screen — worth asking why it was tempting.',
          hintZh: '每題一個答案。選錯的選項會留在畫面上，值得討論它為什麼吸引人。',
          items: [
            {
              en: 'What is the main purpose of the passage?',
              zh: '這篇文章的主要目的是什麼？',
              options: [
                '(A) To compare different phone brands',
                '(B) To explain how people can improve their focus at work',
                '(C) To argue that technology should be banned in offices',
                '(D) To describe Dr. Yousef’s education',
              ],
              answer: 1,
              why: {
                en: 'The whole passage is about how to improve focus at work.',
                zh: '全文在說明如何提升工作專注力。',
              },
            },
            {
              en: 'According to the passage, how much time do knowledge workers lose daily by switching between screens?',
              zh: '根據文章，知識工作者每天因為在螢幕之間切換而損失多少時間？',
              options: [
                '(A) About 47 seconds',
                '(B) About one hour',
                '(C) More than two hours',
                '(D) Seven hours',
              ],
              answer: 2,
              why: {
                en: 'Paragraph 1: “more than two hours a day”.',
                zh: '第 1 段：more than two hours a day。',
              },
            },
            {
              en: 'Why are most apps designed the way they are?',
              zh: '為什麼多數 App 要那樣設計？',
              options: [
                '(A) To help users finish work faster',
                '(B) To keep users engaged for as long as possible',
                '(C) To reduce eye strain',
                '(D) To protect user privacy',
              ],
              answer: 1,
              why: {
                en: 'Paragraph 2: “designed to maximize engagement”.',
                zh: '第 2 段：designed to maximize engagement。',
              },
            },
            {
              en: 'Which of the following is NOT a step in a focus sprint?',
              zh: '下列何者不是「專注衝刺」的步驟？',
              options: [
                '(A) Blocking time on the calendar',
                '(B) Setting a timer',
                '(C) Checking email between steps',
                '(D) Breaking the goal into small steps',
              ],
              answer: 2,
              why: {
                en: 'Checking email is not one of the five steps — the method says to remove distractions.',
                zh: '五步驟中沒有「檢查信箱」，反而要排除干擾。',
              },
            },
            {
              en: 'In paragraph 4, the word “peak” is closest in meaning to',
              zh: '第 4 段中的 peak 最接近下列哪一個意思？',
              options: [
                '(A) look quickly',
                '(B) perform at their best',
                '(C) feel tired',
                '(D) climb a mountain',
              ],
              answer: 1,
              why: {
                en: 'Here “peak” is a verb: to reach your highest point. Do not confuse it with “peek”, to look quickly.',
                zh: 'peak 在此為動詞，指狀態達到高峰。注意與 peek（偷看）區分。',
              },
            },
            {
              en: 'What can be inferred about a “real break”?',
              zh: '關於「真正的休息」，可以推論出什麼？',
              options: [
                '(A) It should involve as little new information as possible.',
                '(B) It should last at least one hour.',
                '(C) It is best spent reading the news.',
                '(D) It is only necessary for managers.',
              ],
              answer: 0,
              why: {
                en: 'The passage says a real break is going outside or doing nothing, not scrolling — so it should bring in as little new information as possible.',
                zh: '文中說休息是去戶外或什麼都不做，不是滑社群，可推論應避免接收新資訊。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 6
    {
      id: 'discussion',
      n: 6,
      en: 'Discussion',
      zh: '討論題',
      blocks: [
        {
          t: 'lead',
          en: 'Eight questions, easiest first. Try to use at least three words from the vocabulary section.',
          zh: '由淺入深八題，建議至少用上 3 個前一節的詞彙。',
        },
        {
          t: 'discuss',
          en: 'Warm-up — your own experience',
          zh: '暖身（個人經驗）',
          items: [
            {
              en: 'How many times a day do you think you pick up your phone? Check your screen time and share the number.',
              zh: '你覺得自己一天拿起手機幾次？查一下螢幕使用時間，說出這個數字。',
              starters: [
                { en: 'I guessed ___ , but my screen time says ___ .', zh: '我猜是＿＿，但螢幕使用時間顯示是＿＿。' },
                { en: 'Most of it is ___ , which is noise rather than signal.', zh: '其中大部分是＿＿，這算是雜訊而不是重點。' },
              ],
            },
            {
              en: 'Do you usually take breaks by scrolling? After this talk, what would you do instead?',
              zh: '你休息時通常都在滑手機嗎？聽完這場訪談後，你會改成做什麼？',
              starters: [
                { en: 'I usually scroll, because ___ . Instead I could ___ .', zh: '我通常會滑手機，因為＿＿。我可以改成＿＿。' },
                { en: 'A real break for me would be ___ .', zh: '對我來說，真正的休息會是＿＿。' },
              ],
            },
            {
              en: 'Are you an AM-shifted, PM-shifted, or biphasic person? When do you do your best work?',
              zh: '你是早型人、晚型人，還是雙峰型？你什麼時候工作效率最好？',
              starters: [
                { en: 'I’m ___ . I do my best work between ___ and ___ .', zh: '我是＿＿。我效率最好的時段是＿＿到＿＿。' },
                { en: 'I tend to lose steam around ___ .', zh: '我大概在＿＿就開始後繼無力。' },
              ],
            },
          ],
        },
        {
          t: 'discuss',
          en: 'At work',
          zh: '職場應用',
          items: [
            {
              en: 'What are your MITs for this week? What LITs keep stealing your time?',
              zh: '你這週最重要的任務（MIT）是什麼？哪些零碎小事（LIT）一直偷走你的時間？',
              starters: [
                { en: 'My MIT this week is ___ , because ___ .', zh: '我這週最重要的任務是＿＿，因為＿＿。' },
                { en: 'The LIT that steals the most time is ___ .', zh: '最會偷走我時間的零碎小事是＿＿。' },
              ],
            },
            {
              en: 'Your manager expects you to reply to messages within 5 minutes. How would you politely ask for focus time? Role-play the conversation.',
              zh: '你的主管希望你在 5 分鐘內回覆訊息。你會如何有禮貌地爭取專注時間？請進行角色扮演。',
              starters: [
                { en: 'Could I block two hours on Tuesday mornings for ___ ? I’d still be reachable for anything urgent.', zh: '我可以在週二上午空出兩小時處理＿＿嗎？有急事還是找得到我。' },
                { en: 'I’d rather give you one good draft than five fast replies.', zh: '比起五個快速回覆，我更想交出一份好的草稿給你。' },
              ],
            },
            {
              en: 'Which tools at your company create the most “noise” (e.g. LINE groups, email CCs, Teams)? Suggest one rule to reduce it.',
              zh: '你們公司哪些工具製造最多「雜訊」（例如 LINE 群組、郵件副本、Teams）？提出一條規則來減少它。',
              starters: [
                { en: 'The biggest source of noise is ___ . One rule would be ___ .', zh: '最大的雜訊來源是＿＿。一條可行的規則是＿＿。' },
                { en: 'That change would be low-hanging fruit, because ___ .', zh: '這個改變是最容易先拿下的成果，因為＿＿。' },
              ],
            },
          ],
        },
        {
          t: 'discuss',
          en: 'Thinking it through',
          zh: '批判思考',
          items: [
            {
              en: 'Dr. Yousef says app companies care about engagement, not productivity. Do you agree? Is this fair to companies like LINE or Slack?',
              zh: 'Dr. Yousef 說 App 公司在意的是使用黏著度，而不是生產力。你同意嗎？這樣說對 LINE 或 Slack 這類公司公平嗎？',
              starters: [
                { en: 'I agree up to a point, but ___ .', zh: '我某種程度上同意，但是＿＿。' },
                { en: 'It’s fair to say ___ , and unfair to say ___ .', zh: '說＿＿是公平的，說＿＿則不公平。' },
              ],
            },
            {
              en: 'Should schools teach students how attention and the brain work? What would you include in that class?',
              zh: '學校應該教學生注意力與大腦如何運作嗎？你會在那堂課裡放進什麼？',
              starters: [
                { en: 'Yes — I’d start with ___ , because teenagers ___ .', zh: '應該——我會從＿＿開始教，因為青少年＿＿。' },
                { en: 'I’d leave out ___ , since ___ .', zh: '我不會放進＿＿，因為＿＿。' },
              ],
            },
          ],
        },
      ],
    },

    // ================================================================ 7
    {
      id: 'homework',
      n: 7,
      en: 'Homework',
      zh: '課後任務',
      blocks: [
        {
          t: 'task',
          en: 'Two things before the next lesson',
          zh: '下次上課前的兩項任務',
          instructionEn: 'Pick the first one to start tonight. The second one you bring to the next lesson and read out.',
          instructionZh: '第一項今晚就可以開始。第二項請帶到下次上課並唸出來。',
          prompts: [
            { en: 'Run your phone in grayscale for 7 days and record your daily screen time.', zh: '試用灰階手機 7 天，記錄每日螢幕使用時間。' },
            { en: 'Write an execution list in English for one 60-minute focus sprint, and share it next time.', zh: '用英文寫一份 60 分鐘專注衝刺的執行清單，下次上課分享。' },
          ],
          frames: [
            { en: 'Goal: by the end of 60 minutes I will have ___ .', zh: '目標：這 60 分鐘結束時，我會完成＿＿。' },
            { en: 'Step 1 (___ minutes): ___ . Step 2 (___ minutes): ___ .', zh: '步驟一（＿＿分鐘）：＿＿。步驟二（＿＿分鐘）：＿＿。' },
            { en: 'Distractions I will remove: ___ .', zh: '我要排除的干擾：＿＿。' },
            { en: 'My brain break afterwards: ___ .', zh: '結束後我的大腦休息是：＿＿。' },
          ],
        },
      ],
    },
  ],
};
