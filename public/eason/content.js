/* Eason — a running notebook of one-to-one sessions.

   Unlike most pages in this repo, this one is not a lesson. It is a notebook
   that grows: every discussion adds one entry to `sessions` below and nothing
   else changes. No new files, no new folder, no renderer edit. It is the same
   machinery as /aaron/, /anita/ and /anny/, with the same rules.

   ADDING A SESSION
   ----------------
   Copy the last entry in `sessions`, change `id`, `n`, `date` and the titles,
   and rewrite the blocks. Put it at the BOTTOM of the array — the page is
   chronological, oldest first, and opens with the newest session expanded and
   the earlier ones folded away. The contents list, the numbering and the
   anchors all come from the array, so there is nothing else to keep in step.

   `id` must be unique and URL-safe: it becomes the anchor, so
   /eason/#s2 opens session 2 with the rest folded.

   THE STUDENT
   -----------
   Eason is finishing junior high and starting senior high school, so the
   register is a shade plainer than the working-adult notebooks — shorter
   sentences in the summaries, examples from his own life rather than from an
   office. Everything else is the same. Nothing here is written down to him.

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
               pairing — an instinct against a reframe, a habit against its
               replacement
     phrases   phrase cards — English face up, Chinese and an example behind a tap
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three phrases to choose from
     fix       something Eason actually said, with the upgrade behind a tap
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     have it / need it cards, for auditing something
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking or writing task with a tick-list of target phrases

   `fix` is the one block the other pages here do not have, and it is the reason
   a per-student notebook is worth keeping: it holds Eason's own sentences,
   corrected. Session 1 does not use it — the source for that lesson was an
   organised write-up of the discussion, tidied of repetition and transcription
   noise, so it carries no reliable record of the exact wording either speaker
   used. Work from a transcript whenever there is one, take only the lines where
   the error is unmistakably his, and leave the garbled ones out rather than
   tidying them into a sentence he may not have said. Do not reconstruct
   sentences from memory, or the most trustworthy part of the page becomes the
   least.

   SAMPLE BANNER
   -------------
   Setting `sample` puts a line across the top saying the content is a
   placeholder — on screen and in print, so a draft cannot be handed over by
   accident. Session 1 is real, so it is off.
*/

const NOTEBOOK = {
  student: 'Eason',
  title: 'Eason’s English Notebook',
  titleZh: 'Eason 的英文筆記',
  kicker: '英語討論課 · 課堂筆記',

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
        en: 'Tap 🔊 to hear a phrase or sentence read aloud, as many times as you like. The voice is good for pronunciation; for intonation, copy me in the lesson instead.',
        zh: '點 🔊 可以聽片語或句子的發音，想聽幾次都可以。這個聲音適合用來練發音；語調的部分，請在課堂上跟著我模仿。',
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
      date: '2026-08-20',
      dateEn: '20 August 2026',
      dateZh: '2026 年 8 月 20 日',
      en: 'A diving certificate, and what you do with what you learned',
      zh: '一張潛水證照，以及你要拿學到的東西怎麼辦',

      focus: [
        { en: 'The diving course', zh: '潛水課程' },
        { en: 'A learning portfolio', zh: '學習歷程' },
        { en: 'Recording vs reflecting', zh: '記錄與反思' },
        { en: 'Teaching a friend', zh: '教朋友' },
        { en: 'Different learners', zh: '每個人學法不同' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'One hour that started with a diving trip to the Philippines and ended somewhere else entirely: a friend who keeps making the same mistake in a game, and what a diving instructor turned out to have taught about that without meaning to.',
          zh: '這一個小時從一趟菲律賓的潛水之旅開始，最後卻走到了完全不同的地方：一個在遊戲裡一直犯同樣錯誤的朋友，以及一位潛水教練在無意間教會了什麼。',
        },

        {
          t: 'summary',
          en: 'You came back from the Philippines with a diving certificate. It was not very difficult, but it was not effortless either — before anyone was allowed in the water there were about ten units of theory to get through online, each one broken into smaller parts, with reading, short videos, quizzes along the way, and a test at the end. Because the subject was safety, skimming it was not an option and neither was handing it to AI. The Chinese in the material had clearly been translated from English, so some of the questions were hard to read on top of being hard to answer. That was the difficult part. The diving itself you enjoyed.',
          zh: '你從菲律賓帶回了一張潛水證照。這件事不算非常困難，但也絕對不輕鬆——在下水之前，線上有大約十個單元的理論要讀完，每個單元底下又分成許多小單元，包含文字教材、一兩分鐘的短片、沿路的小測驗，最後還有一個必須通過的考試。因為主題是安全，所以不能隨便瀏覽過去，也不能丟給 AI 處理。教材裡的中文明顯是從英文翻譯過來的，有些題目除了難答，還很難讀懂。難的是那個部分。潛水本身，你是享受的。',
        },

        {
          t: 'summary',
          en: 'In the water it was a different trip. In Okinawa and Xiaoliuqiu the instructors had stayed right beside you, sometimes holding on. This time, with the training behind you, you could move on your own: swim more freely, go deeper, dive at several different sites, and see a whale shark. And somewhere in those days you noticed something about yourself that you had not been looking for.',
          zh: '在水裡則是另一趟旅程。在沖繩和小琉球，教練總是緊跟在你旁邊，有時候還會抓著你。這一次，有了訓練當基礎，你可以自己動了：游得更自在、潛得更深、去了好幾個不同的潛點，還看到了一條鯨鯊。而在那幾天當中，你注意到了一件關於自己的事——一件你原本並沒有在找的事。',
        },

        {
          t: 'phrases',
          en: 'The course, and the water',
          zh: '課程，以及水裡',
          items: [
            {
              en: 'get certified',
              zh: '取得證照',
              eg: 'It took five days of theory and four dives to get certified.',
              egZh: '花了五天的理論課和四次下潛才拿到證照。',
            },
            {
              en: 'it wasn’t effortless',
              zh: '這並不輕鬆',
              eg: 'It wasn’t very difficult, but it wasn’t effortless either.',
              egZh: '這並不是非常困難，但也絕對不輕鬆。',
            },
            {
              en: 'study for a test',
              zh: '為考試做準備',
              eg: 'The hardest part was studying for the test, not the diving.',
              egZh: '最難的部分是準備考試，而不是潛水。',
            },
            {
              en: 'skim something',
              zh: '快速瀏覽、略讀',
              eg: 'You can skim a travel guide; you cannot skim a safety manual.',
              egZh: '旅遊指南可以略讀，安全手冊不行。',
            },
            {
              en: 'read it carefully',
              zh: '仔細讀',
              eg: 'Because it was about safety, I had to read it carefully rather than ask AI.',
              egZh: '因為內容關係到安全，我必須自己仔細讀，而不是去問 AI。',
            },
            {
              en: 'it sounds unnatural',
              zh: '（句子）聽起來很不自然',
              eg: 'Some questions had been translated from English, so they sounded unnatural in Chinese.',
              egZh: '有些題目是從英文翻過來的，所以中文讀起來很不自然。',
            },
            {
              en: 'marine life',
              zh: '海洋生物',
              eg: 'Each site had completely different marine life.',
              egZh: '每個潛點的海洋生物都完全不一樣。',
            },
            {
              en: 'a whale shark',
              zh: '鯨鯊',
              eg: 'On the third day we saw a whale shark.',
              egZh: '第三天我們看到了一條鯨鯊。',
            },
            {
              en: 'dive deeper',
              zh: '潛得更深',
              eg: 'With a certificate you are allowed to dive deeper than before.',
              egZh: '有了證照，你可以潛得比以前更深。',
            },
            {
              en: 'buoyancy control',
              zh: '浮力控制',
              eg: 'I realised that my buoyancy control was better than I expected.',
              egZh: '我發現自己的浮力控制比原本想像中更好。',
            },
            {
              en: 'breathing rhythm',
              zh: '呼吸節奏',
              eg: 'Diving made me aware of my breathing rhythm for the first time.',
              egZh: '潛水讓我第一次注意到自己的呼吸節奏。',
            },
            {
              en: 'body awareness',
              zh: '身體覺察',
              eg: 'Four days underwater gave me more body awareness than a month in the gym.',
              egZh: '水下的四天給我的身體覺察，比健身房一個月還多。',
            },
            {
              en: 'the capacity of my body',
              zh: '自己身體的能力',
              eg: 'I also learned more about the capacity of my body.',
              egZh: '我也更加了解自己身體的能力。',
            },
            {
              en: 'adapt to something effortlessly',
              zh: '毫不費力地適應某件事',
              eg: 'I discovered that I could adapt to being underwater quite effortlessly.',
              egZh: '我發現自己可以相當輕鬆地適應水下環境。',
            },
          ],
        },

        {
          t: 'note',
          en: 'Why start a learning portfolio in your first year',
          zh: '為什麼學習歷程要從高一就開始',
          bodyEn: 'The usual pattern is to leave it until the last year, then try to reconstruct three years of experiences from memory in a few weeks. What comes out is thin, because the details are gone and only the summary is left. The alternative costs almost nothing: one meaningful piece a month, roughly twelve a year, and thirty-odd by the time you finish. It does not all have to be schoolwork — a project, an experiment, a club, a trip, a sport, a certificate, something that went wrong and what you did about it. What makes an entry worth reading is not the answer to “what did I do?” but the answer to “what did I learn, what surprised me, what was hard, and what changed in me?” That is also the part you cannot write later, because by then you will not remember it.',
          bodyZh: '一般的做法是拖到高三，再用幾個星期把三年的經歷從記憶裡拼回來。寫出來的東西通常很單薄，因為細節早就沒了，只剩下摘要。另一種做法幾乎不花什麼力氣：一個月寫一篇有意義的紀錄，一年大約十二篇，到畢業時就有三十幾篇。而且內容不必全是學校功課——一個專題、一次實驗、一個社團、一趟旅行、一項運動、一張證照，或是一件搞砸了的事以及你後來怎麼處理。一則紀錄值不值得讀，關鍵不在於「我做了什麼」，而在於「我學到什麼、什麼讓我意外、哪裡很難、我因此有什麼改變」。而那正是你事後補不回來的部分，因為到時候你已經不記得了。',
        },

        {
          t: 'contrast',
          en: 'The same trip, written two ways',
          zh: '同一趟旅程，兩種寫法',
          coldEn: 'The travel diary',
          coldZh: '旅遊日記',
          warmEn: 'The learning portfolio',
          warmZh: '學習歷程',
          hintEn: 'You have already published the left-hand version, and it should stay as it is — it is an honest record. The right-hand column is a second article, not a replacement. Both columns are good English; read them both aloud.',
          hintZh: '左邊那個版本你已經發表了，而且應該原封不動留著——它是一份真實的紀錄。右邊那一欄是「第二篇文章」，不是拿來取代它的。左右兩欄都是道地的英文，兩邊都請唸出聲。',
          items: [
            {
              caseEn: 'The theory course before the diving',
              caseZh: '下水前的理論課程',
              cold: {
                en: 'There were ten units to study online, with videos and quizzes, and a test at the end. It took a long time.',
                zh: '線上有十個單元要讀，有影片和小測驗，最後還有一個考試。花了很久的時間。',
              },
              warm: {
                en: 'Because it was about safety, I could not skim it or hand it to AI. It was the first time that reading carefully was the only option I had.',
                zh: '因為內容關係到安全，我不能略讀，也不能丟給 AI。那是我第一次遇到「仔細讀」是唯一選項的情況。',
              },
              whyEn: 'The left column reports the schedule; anyone on that course could have written it. The right column says what the course did to you, and only you can write that.',
              whyZh: '左欄講的是課程安排，任何一個上過那堂課的人都寫得出來。右欄講的是這堂課對你造成了什麼，而那只有你寫得出來。',
            },
            {
              caseEn: 'Looking down into the deep water',
              caseZh: '望向深海的那一刻',
              cold: {
                en: 'The view was amazing. You could see a long way down, and the water suddenly got very deep.',
                zh: '景色很震撼。可以看到很深的地方，水突然變得非常深。',
              },
              warm: {
                en: 'When I looked into the deep ocean, I realised how small and fragile human beings are compared with nature.',
                zh: '當我望向深海時，我突然意識到，和大自然相比，人類是多麼渺小而脆弱。',
              },
              whyEn: '“Amazing” describes the view. “Small and fragile” describes what the view did to your thinking — and that sentence would sit comfortably in any portfolio.',
              whyZh: '「很震撼」形容的是景色，「渺小而脆弱」形容的則是這個景色對你的想法造成了什麼——後面那一句放進任何一份學習歷程都站得住腳。',
            },
            {
              caseEn: 'The instructor',
              caseZh: '那位教練',
              cold: {
                en: 'My instructor was really nice and taught us well. I learned a lot from her.',
                zh: '我的教練人很好，教得也很好。我從她身上學到很多。',
              },
              warm: {
                en: 'She always named something specific I had done well before mentioning what to fix, so the reminder never felt like pressure.',
                zh: '她總是先具體指出我哪裡做得好，才提到要修正的地方，所以那個提醒從來不會變成壓力。',
              },
              whyEn: '“Really nice” is a feeling. The right column is a method — one you can copy, which is exactly what you did later without planning to.',
              whyZh: '「人很好」是一種感覺，右欄則是一套方法——一套你可以照著做的方法。而你後來確實照著做了，儘管當時並沒有計畫要這樣。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Feedback, teaching and learning',
          zh: '回饋、教學與學習',
          items: [
            {
              en: 'a specific compliment',
              zh: '具體的稱讚',
              eg: 'She gave specific compliments, not just “good job”.',
              egZh: '她給的是具體的稱讚，而不只是一句「做得好」。',
            },
            {
              en: 'a gentle reminder',
              zh: '溫和的提醒',
              eg: 'The corrections came as gentle reminders rather than criticism.',
              egZh: '那些訂正是以溫和的提醒出現，而不是批評。',
            },
            {
              en: 'encouraging',
              zh: '很會鼓勵人的',
              eg: 'She was very encouraging, even when I got it wrong twice.',
              egZh: '她非常會鼓勵人，就算我連錯兩次也一樣。',
            },
            {
              en: 'give someone feedback',
              zh: '給某人回饋',
              eg: 'There is a difference between giving feedback and pointing out mistakes.',
              egZh: '「給回饋」和「指出錯誤」是兩回事。',
            },
            {
              en: 'notice someone’s performance',
              zh: '注意到某人的表現',
              eg: 'A specific compliment shows that you actually noticed their performance.',
              egZh: '具體的稱讚會讓對方知道，你真的有在看他的表現。',
            },
            {
              en: 'committed',
              zh: '投入的、認真的',
              eg: 'He is committed — that is the strength and the problem at the same time.',
              egZh: '他很投入——這同時是他的優點，也是他的問題。',
            },
            {
              en: 'high standards',
              zh: '很高的標準',
              eg: 'High standards turn into frustration the moment someone else learns more slowly.',
              egZh: '一旦別人學得比較慢，很高的標準就會變成挫折感。',
            },
            {
              en: 'lose patience with someone',
              zh: '對某人失去耐性',
              eg: 'I lose patience with him after the third time, and that is on me.',
              egZh: '到第三次我就對他失去耐性了，而那是我的問題。',
            },
            {
              en: 'a learning portfolio',
              zh: '學習歷程',
              eg: 'A learning portfolio is a record of what you learned, not a list of what you did.',
              egZh: '學習歷程記錄的是你學到什麼，而不是一份「做過什麼」的清單。',
            },
            {
              en: 'a reflection',
              zh: '反思',
              eg: 'One reflection a month is twelve a year, and thirty by the time you graduate.',
              egZh: '一個月一篇反思，一年就是十二篇，到畢業時是三十篇。',
            },
            {
              en: 'a previously unknown strength',
              zh: '一項自己原本不知道的強項',
              eg: 'The trip showed me a previously unknown strength: I adapt to water easily.',
              egZh: '這趟旅程讓我看見一項自己原本不知道的強項：我很容易適應水中的環境。',
            },
            {
              en: 'a different operating system',
              zh: '不同的作業系統（比喻不同的思考與學習方式）',
              eg: 'People run on different operating systems; slower is not the same as worse.',
              egZh: '每個人跑的是不同的作業系統；比較慢並不等於比較差。',
            },
          ],
        },

        {
          t: 'match',
          en: 'What the words actually mean',
          zh: '這些說法真正的意思',
          hintEn: 'Click a phrase on the left, then the half that finishes it.',
          hintZh: '先點左邊的片語，再點右邊接得起來的那一半。',
          pairs: [
            { a: 'a specific compliment', b: 'praise that names exactly what you did well' },
            { a: 'a gentle reminder', b: 'a correction that does not add pressure' },
            { a: 'buoyancy control', b: 'staying at the depth you meant to be at' },
            { a: 'body awareness', b: 'noticing what your body is doing while you do it' },
            { a: 'a learning portfolio', b: 'a record of what changed in you, not only what happened' },
            { a: 'a different operating system', b: 'another way of taking information in' },
          ],
        },

        {
          t: 'gap',
          en: 'One phrase missing',
          zh: '少了一個片語',
          hintEn: 'Choose the phrase that fits. The reason is behind the tick.',
          hintZh: '選出合適的片語。理由在打勾之後會出現。',
          items: [
            {
              text: 'It wasn’t very difficult, but it wasn’t ___ either — there was a lot to read before I was allowed in the water.',
              textZh: '這並不是非常困難，但也絕對不輕鬆——在能下水之前，有非常多東西要讀。',
              options: ['effortless', 'careless', 'harmless'],
              answer: 0,
              why: {
                en: '“Effortless” means it takes no effort, so “not effortless” is the polite way to say it was real work. “Careless” means done without attention, and “harmless” means it cannot hurt you — neither is about effort.',
                zh: 'effortless 是「完全不費力」，所以 not effortless 是一種客氣的說法，表示「其實還是要花力氣」。careless 是「不用心的」，harmless 是「無害的」，兩個都跟「費不費力」無關。',
              },
            },
            {
              text: 'Compared with my father, my ___ turned out to be surprisingly good — I could hold my depth without thinking about it.',
              textZh: '跟我爸比起來，我的浮力控制意外地好——我不用刻意去想就能停在同一個深度。',
              options: ['buoyancy control', 'breathing rhythm', 'body awareness'],
              answer: 0,
              why: {
                en: 'Holding your depth is exactly what buoyancy control means. Breathing rhythm is the pattern of your breaths, and body awareness is the general sense of what your body is doing — both true here, but neither is what “hold my depth” describes.',
                zh: '「停在同一個深度」正是浮力控制的定義。breathing rhythm 是呼吸的節奏，body awareness 是對身體狀態的整體感知——這兩個在這裡也成立，但都不是「hold my depth」在講的事。',
              },
            },
            {
              text: 'She never just said “Good job.” She gave a ___ every time, so I knew she had actually been watching.',
              textZh: '她從來不只說一句「做得好」。她每次都會給具體的稱讚，所以我知道她是真的有在看。',
              options: ['specific compliment', 'gentle reminder', 'honest opinion'],
              answer: 0,
              why: {
                en: 'The sentence contrasts with “Good job” — the missing phrase has to be the opposite of vague praise. A gentle reminder is a correction, not praise, and an honest opinion could just as easily be vague.',
                zh: '這句話是在跟「做得好」做對比，所以空格裡的片語必須是「籠統稱讚」的相反。gentle reminder 是提醒、是訂正，不是稱讚；honest opinion 也一樣可能講得很籠統。',
              },
            },
            {
              text: 'Different people have different ___ — someone who needs six repetitions is not slow, just built differently.',
              textZh: '每個人的作業系統都不一樣——需要練六次的人不是慢，只是構造不同。',
              options: ['operating systems', 'operating hours', 'operations'],
              answer: 0,
              why: {
                en: 'The image is a computer: the same information goes in and is processed differently. Operating hours are the times a shop is open, and an operation is a procedure — neither carries the comparison.',
                zh: '這裡用的是電腦的比喻：同樣的資訊進去，處理的方式卻不一樣。operating hours 是營業時間，operation 是手術或作業程序，兩個都撐不起這個比喻。',
              },
            },
          ],
        },

        {
          t: 'note',
          en: 'What your instructor did, in four moves',
          zh: '你的教練做的四件事',
          bodyEn: 'You described her method almost as a sequence, without calling it one. First she said what you had done well. Second, the praise was specific — not “good job” but the thing itself, so you knew she had been watching. Third, only then did she raise the two or three points worth fixing. Fourth, they arrived as reminders rather than corrections, so you could hear them without tightening up. Notice what the order does: by the time the criticism arrives, you already know she is on your side. That is why the same information feels completely different depending on which move comes first.',
          bodyZh: '你描述她的方式時，幾乎是把它講成了一套流程，只是沒有這樣稱呼它。第一，她先說你哪裡做得好。第二，那個稱讚是具體的——不是「做得好」，而是指出那件事本身，所以你知道她真的有在看。第三，然後她才提出那兩三個值得修正的地方。第四，那些話是以「提醒」的形式出現，而不是「糾正」，所以你聽得進去，也不會緊繃起來。注意這個順序做了什麼：等到批評出現的時候，你已經知道她是站在你這邊的。同樣的資訊，只因為哪一步先出現，感受就完全不同。',
        },

        {
          t: 'contrast',
          en: 'Coaching your friend',
          zh: '教你的那位朋友',
          hintEn: 'You are good enough at the game to help other players; he started at the same time and is still struggling. You have already tried watching him play, reviewing his recordings, explaining his mistakes, demonstrating, playing alongside him and calling instructions in real time. What is left to change is not the method — it is the order.',
          hintZh: '你在這款遊戲上的程度已經好到可以幫別人；他跟你差不多時間開始，卻還在卡關。你已經試過看他打、幫他看錄影、解釋他的錯誤、示範打法、陪他一起打，還有即時報點。還能改的其實不是方法，而是順序。',
          items: [
            {
              caseEn: 'When he makes the same mistake again',
              caseZh: '當他又犯了同樣的錯',
              cold: {
                en: 'I already told you this last time. Why are you still making the same mistake?',
                zh: '我上次就跟你講過了。為什麼你還在犯同樣的錯？',
              },
              warm: {
                en: 'That call was right — you heard him coming. This time, hold the angle one second longer before you move.',
                zh: '你那個判斷是對的，你有聽到他過來。這次在移動之前，多守那個角度一秒。',
              },
              whyEn: 'The left column is true and useless: he already knows you told him. The right column names what he got right first, and turns the correction into one thing to do next — which is what your instructor did to you.',
              whyZh: '左欄講的是事實，但沒有用：他早就知道你講過了。右欄先指出他做對的地方，再把訂正變成「下一次做這一件事」——這正是你的教練對你做的事。',
            },
            {
              caseEn: 'When he needs six tries to get it',
              caseZh: '當他要試六次才做得到',
              cold: {
                en: 'You’re too slow. Just do what I said.',
                zh: '你太慢了。照我說的做就好。',
              },
              warm: {
                en: 'This one is genuinely hard to react to. Let’s run it five times so your hands learn it, not just your head.',
                zh: '這個真的很難反應。我們跑個五次，讓你的手學會，而不是只有腦袋知道。',
              },
              whyEn: 'Fast reactions are trained, not explained. Saying “this one is hard” costs you nothing and removes the part of the pressure that is making him slower.',
              whyZh: '快速反應是練出來的，不是講出來的。說一句「這個真的很難」對你沒有任何損失，卻能拿掉那一部分正在讓他更慢的壓力。',
            },
            {
              caseEn: 'What other friends have told you before',
              caseZh: '以前其他朋友跟你說過的話',
              cold: {
                en: 'You’re really good, but playing with you is stressful.',
                zh: '你很強，但跟你一起打壓力很大。',
              },
              warm: {
                en: 'I get impatient because I care about doing it well. But I would rather be the person people want on their team.',
                zh: '我會不耐煩，是因為我很在意要把事情做好。但我更希望自己是別人會想找來一起打的那種人。',
              },
              whyEn: 'You have heard this more than once, and in sport as well as in games, so it is a pattern rather than a bad day. The right column keeps the standard and changes only who it is aimed at.',
              whyZh: '這句話你不只聽過一次，而且在運動場上也發生過，所以它是一個模式，不是某一天心情不好。右欄保留了那個標準，只是換掉了它對準的對象。',
            },
          ],
        },

        {
          t: 'quote',
          en: 'Their abilities are different, so I need to understand them instead of simply becoming angry.',
          zh: '每個人的能力不一樣，所以我需要去理解他們，而不是直接生氣。',
          by: 'the sentence to keep from this lesson 這堂課最值得留下的一句',
        },

        {
          t: 'note',
          en: 'From being good yourself to making other people better',
          zh: '從自己很強，到讓別人變強',
          bodyEn: 'There is a shift that happens to anyone who gets good at something: the goal stops being “I want to be better than other people” and becomes “I want other people to be better because of me.” They are two different abilities, and being excellent at the first one gives you almost none of the second. The second is built out of patience, clear explanation, useful feedback and reading how someone else learns — none of which you needed while you were getting good on your own. Worth noticing that you started learning it from a diving instructor rather than from a game, and that you noticed it at all. Learning from your own mistakes quickly is itself a talent; not everyone can see a mistake and change on the next attempt. When you are the one teaching, that talent is exactly what you have to stop assuming other people share.',
          bodyZh: '任何一個把某件事練強的人，最後都會遇到一個轉折：目標從「我要比別人強」變成「我要讓別人因為我而變強」。這是兩種不同的能力，而把第一種做到很好，幾乎不會自動給你第二種。第二種是由耐心、清楚的說明、有用的回饋，以及讀懂別人怎麼學習所組成的——而這些在你自己練強的過程中，一項都用不到。值得注意的是，你是從一位潛水教練身上、而不是從遊戲裡開始學這件事的，而且你自己察覺到了。「很快從錯誤中學會」本身就是一種天分；不是每個人都能看到錯誤之後，下一次就改過來。當你成為教別人的那個人，這正是你必須停止預設別人也有的那項天分。',
        },

        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的立場是什麼？',
          hintEn: 'There is no right answer — take a side and say why.',
          hintZh: '沒有標準答案：選一邊，並說明理由。',
          items: [
            { en: 'Learning from your mistakes quickly is a talent, not something everyone can do.', zh: '很快從錯誤中學會是一種天分，不是每個人都做得到。' },
            { en: 'Being very good at something makes you good at teaching it.', zh: '把一件事做得很好，就會很會教那件事。' },
            { en: 'A learning portfolio should be written for yourself first and for the university second.', zh: '學習歷程應該先為自己而寫，其次才是為了大學。' },
            { en: 'Getting angry at a friend who is trying his best is never worth it.', zh: '對一個已經在盡力的朋友生氣，永遠都不值得。' },
            { en: 'The hardest part of any course is the part you cannot skip.', zh: '任何課程最難的部分，就是那個你跳不過去的部分。' },
          ],
        },

        {
          t: 'discuss',
          en: 'Questions from the session',
          zh: '課堂上談到的問題',
          items: [
            {
              en: 'You said the trip showed you something about yourself you had not known. What else, outside water, might you be better at than you assume?',
              zh: '你說這趟旅程讓你發現了一件原本不知道的自己。除了水以外，還有什麼可能是你比自己以為的更擅長的？',
              starters: [
                { en: 'I have never really tested it, but I think I might be good at…', zh: '我從來沒真正測試過，但我覺得我可能滿擅長……' },
                { en: 'People keep telling me that I…', zh: '一直有人跟我說我……' },
                { en: 'It comes easily to me, so I assumed it was easy for everyone.', zh: '這件事對我來說很輕鬆，所以我一直以為對每個人都很輕鬆。' },
              ],
            },
            {
              en: 'Senior high school is a new environment. What will actually be different — not the timetable, but what will be expected of you?',
              zh: '高中是一個新的環境。真正會不一樣的是什麼？不是課表，而是別人對你的期待。',
              starters: [
                { en: 'The part I will have to handle by myself is…', zh: '我必須自己處理的部分是……' },
                { en: 'Nobody will remind me to…', zh: '不會有人提醒我要……' },
                { en: 'What I want to be different about how I study is…', zh: '關於自己讀書的方式，我想改變的是……' },
              ],
            },
            {
              en: 'If you write one entry a month for three years, what would make you keep going after the fourth one?',
              zh: '如果你要連續三年、每個月寫一篇，什麼會讓你在寫完第四篇之後還繼續寫下去？',
              starters: [
                { en: 'I would keep going if…', zh: '如果……我就會繼續寫下去。' },
                { en: 'The thing that would stop me is…', zh: '會讓我停下來的是……' },
                { en: 'It would be easier if I wrote it right after…', zh: '如果我在……之後馬上寫，就會容易得多。' },
              ],
            },
            {
              en: 'Your friend keeps playing with you even though you sometimes lose your temper. What does that tell you about what he wants?',
              zh: '就算你有時候會發脾氣，你的朋友還是繼續找你一起玩。這件事透露了他想要的是什麼？',
              starters: [
                { en: 'He is not trying to…, he just wants to…', zh: '他不是想要……，他只是想……' },
                { en: 'If I were him, I would probably…', zh: '如果我是他，我大概會……' },
                { en: 'What I would want from a teammate is…', zh: '如果換成我，我會希望隊友給我的是……' },
              ],
            },
          ],
        },

        {
          t: 'task',
          en: 'Homework: the second article',
          zh: '作業：第二篇文章',
          instructionEn: 'Leave the article you have already published exactly as it is — it is an honest record of the trip, and it is not the one that needs changing. Write a second post next to it: “What I Learned from My Diving Trip”. Five short sections, one for each of the things that came up today, and each one should answer what you learned rather than what you saw. Two or three sentences per section is plenty. Send it on LINE, or send me the link, and we will go over it next time.',
          instructionZh: '你已經發表的那篇文章，就原封不動留著——它是這趟旅程的真實紀錄，需要改的不是它。請在它旁邊寫第二篇：〈What I Learned from My Diving Trip〉。分成五個小段，對應今天談到的五件事，而每一段要回答的是「我學到什麼」，而不是「我看到什麼」。每段兩三句就很夠了。寫完用 LINE 傳給我，或把連結傳給我，下次一起檢討。',
          prompts: [
            { en: 'Write it in English first, then check whether each section actually answers “what changed in me?”', zh: '先用英文寫，寫完再檢查每一段是不是真的回答了「我因此有什麼改變」。' },
            { en: 'If a section only says what happened, add one more sentence beginning “I realised…”.', zh: '如果某一段只寫了發生什麼事，就再加一句，用「I realised…」開頭。' },
            { en: 'Keep it short. Five honest paragraphs beat one long one.', zh: '保持簡短。五段誠實的短文，勝過一段很長的文章。' },
          ],
          frames: [
            { en: 'I discovered that I could adapt to being underwater quite effortlessly.', zh: '我發現自己可以相當輕鬆地適應水下環境。' },
            { en: 'Diving helped me become more aware of my breathing rhythm, and I also learned more about the capacity of my body.', zh: '潛水讓我更加注意自己的呼吸節奏，也更加了解自己身體的能力。' },
            { en: 'When I looked into the deep ocean, I realised how small and fragile human beings are compared with nature.', zh: '當我望向深海時，我意識到和大自然相比，人類是多麼渺小而脆弱。' },
            { en: 'My instructor gave specific compliments and gentle reminders, and I want to teach my friend the same way.', zh: '我的教練會給具體的稱讚和溫和的提醒，我想用同樣的方式去教我的朋友。' },
            { en: 'I realised that different people learn differently, so I need to understand them instead of getting angry.', zh: '我發現每個人的學習方式不同，所以我需要去理解他們，而不是生氣。' },
          ],
        },
      ],
    },
  ],
};
