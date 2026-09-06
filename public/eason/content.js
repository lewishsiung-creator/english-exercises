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

   Session 2 did need two renderer additions, and they are noted here so the
   next person does not assume the file is still untouched: the `part` divider
   and an optional title on `summary`. Both came over from /ken/ and are
   described under BLOCK TYPES.

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
     part      a divider INSIDE one session, for material that arrives already
               cut into labelled sections. A short session built from a
               conversation should not use it
     lead      a framing sentence in italics, opening a session
     link      a pointer to another page in this site
     quote     a short quote, with attribution
     summary   a teaching paragraph, spoken aloud on request. Optional
               `titleEn`/`titleZh` put a heading above it and optional `n` a
               number beside that — use them where the source itself arrived as
               numbered, titled sections, so a long reading stays scannable
               later when he is looking for one idea rather than reading the lot
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

   SESSION 2 WAS PREPARED BEFORE THE LESSON
   ----------------------------------------
   Session 1 is a record of an hour that happened. Session 2 is not: it is the
   nine lessons of Homer's Odyssey, written up as material for a discussion
   rather than after one. That is why it has **no `fix` block** — there is no
   record of anything Eason said about this yet, and nothing here should be
   invented to fill the gap. Its date is the day it was added.

   The rewriting that mattered was the register. The source of these nine ideas
   is pitched at adults — careers, workplace conflicts, "being in your twenties"
   — and none of that is his life. Every example here is school, exams, a group
   project, a club, a phone, a game, staying up too late. Shorter sentences than
   the adult notebooks, and still nothing written down to him.

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

    {
      id: 's2',
      n: 2,
      date: '2026-09-03',
      dateEn: '3 September 2026',
      dateZh: '2026 年 9 月 3 日',
      en: 'Nine things a three-thousand-year-old story still knows about you',
      zh: '一個三千年前的故事，至今仍看得懂你的九件事',

      focus: [
        { en: 'Nine lessons from the Odyssey', zh: '《奧德賽》的九個啟示' },
        { en: 'Your own Sirens', zh: '你自己的賽蓮（海妖）' },
        { en: 'Goal → Temptation → Choice → Consequence → Growth', zh: '目標→誘惑→選擇→後果→成長' },
        { en: 'Language for setbacks and choices', zh: '談挫折與選擇的語言' },
        { en: 'Saying what a story means', zh: '說出一個故事的意義' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'The Odyssey is a poem about a soldier trying to sail home. It takes him ten years. Almost none of it is about sailing — it is about temptation, pride, choices and who you turn into on the way. That last part is why it is still worth reading at your age.',
          zh: '《奧德賽》是一部關於一名軍人想航海回家的史詩。他花了十年。裡面幾乎沒有一段是在講航海——它講的是誘惑、驕傲、選擇，以及你在路上變成了什麼樣的人。最後那一點，正是它在你這個年紀仍然值得讀的原因。',
        },

        {
          t: 'part',
          n: 'A',
          en: 'Nine lessons',
          zh: '九個啟示',
        },

        {
          t: 'summary',
          n: '·',
          titleEn: 'Not just an adventure story',
          titleZh: '這不只是一個冒險故事',
          en: 'Most people describe the Odyssey as an adventure about getting home. That is true, but it misses almost everything. The hero, Odysseus, needs ten years to make a trip that should take a few weeks. The story spends that time on identity, temptation, judgement and loyalty — the things that decide what kind of person you become.',
          zh: '大多數人會說《奧德賽》是一個關於回家的冒險故事。這樣說沒錯，但幾乎漏掉了所有重點。主角奧德修斯，走完一段本來幾個星期的路，花了十年。故事把這些時間用在身分認同、誘惑、判斷力和忠誠上——也就是那些決定你會變成什麼樣的人的東西。',
        },

        {
          t: 'summary',
          n: '1',
          titleEn: 'Resilience matters more than a perfect journey',
          titleZh: '韌性比「一路順利」更重要',
          en: 'Odysseus meets storms, monsters, prisons and loss. The trip takes far longer than it should. He keeps going anyway. Nobody in the story gets an easy run, and nobody in real life does either. Your grades, a sport, a skill, a friendship — none of them improve in a straight line. Success is not avoiding problems. It is carrying on after them.',
          zh: '奧德修斯遇上風暴、怪物、被囚禁，還有失去。這趟路遠比原本該花的時間久，但他還是繼續走。故事裡沒有人一路順利，現實生活裡也沒有。你的成績、一項運動、一個技能、一段友誼——沒有一樣是照直線往上走的。成功不是避開問題，而是在問題之後繼續走下去。',
        },

        {
          t: 'summary',
          n: '2',
          titleEn: 'Being clever beats being strong',
          titleZh: '聰明比強壯更有用',
          en: 'Odysseus is not the strongest man in the story. He is the one who thinks. When he meets the Cyclops, a giant with one eye, he does not fight it. He makes a plan and tricks it. Being able to look at a situation, work out what is really going on, and change your plan is worth more than simply trying harder at the same thing.',
          zh: '奧德修斯不是故事裡最強壯的人，他是那個會動腦的人。他遇上獨眼巨人的時候，並沒有跟牠打，而是想了一個計畫把牠騙過去。能看清一個情況、弄懂真正發生了什麼事，並且願意改變計畫，比一直用同一種方法更努力有用得多。',
        },

        {
          t: 'summary',
          n: '3',
          titleEn: 'Pride can become a weakness',
          titleZh: '驕傲可能變成自己的弱點',
          en: 'This is the one people forget, because it happens right after he wins. Having escaped the Cyclops, Odysseus cannot stop himself shouting his real name back across the water. He has already won. He just wants everyone to know it was him. That one sentence costs him years of his life. Winning and needing everyone to see you win are two different things.',
          zh: '這一點大家最容易忘記，因為它發生在他贏了之後。逃出獨眼巨人的洞穴後，奧德修斯忍不住隔著海面喊出自己的真名。他其實已經贏了，他只是希望大家知道那是他做的。就這麼一句話，讓他賠上了好幾年的人生。「贏」和「需要所有人看見你贏」，是兩件不一樣的事。',
        },

        {
          t: 'contrast',
          en: 'Three choices the story keeps pointing at',
          zh: '這個故事一直指出的三個選擇',
          hintEn: 'The left column is the easy one — fast, satisfying, and always available. The right column is harder. Every time, the story shows you what the easy one costs.',
          hintZh: '左邊那一欄是簡單的選擇——快、爽，而且隨時都能選。右邊那一欄比較難。而故事每一次都會讓你看見，選了簡單的那個要付出什麼代價。',
          coldEn: 'The easy choice',
          coldZh: '簡單的選擇',
          warmEn: 'The harder one',
          warmZh: '比較難的那個',
          items: [
            {
              caseEn: 'After you win an argument',
              caseZh: '在你吵贏之後',
              cold: { en: 'I need him to say I was right.', zh: '我要他說我是對的。' },
              warm: { en: 'I was right. I do not need to say anything else.', zh: '我是對的。我不需要再多說什麼。' },
              whyEn: 'This is the Cyclops again. You have already won. What feels missing is other people knowing it, and that is the part that costs you.',
              whyZh: '這又是獨眼巨人那一幕。你已經贏了。你覺得還少了什麼，是「別人知道」這件事——而那正是要付出代價的部分。',
            },
            {
              caseEn: 'Before you do something nobody has stopped you doing',
              caseZh: '在你做一件沒有人阻止你的事之前',
              cold: { en: 'Am I allowed to do this?', zh: '我可以這樣做嗎？' },
              warm: { en: 'What might happen if I do this?', zh: '如果我這樣做，可能會發生什麼事？' },
              whyEn: 'Most of the disasters in the story come from the crew doing something nobody had told them not to do. Growing up means more choices, and the second question is the price of the first.',
              whyZh: '故事裡大部分的災難，都來自船員做了一件「沒有人叫他們不要做」的事。長大意味著選擇變多，而第二個問題，就是第一個問題的代價。',
            },
            {
              caseEn: 'Advice you have heard a hundred times',
              caseZh: '你已經聽過一百次的建議',
              cold: { en: 'Just be yourself.', zh: '做自己就好。' },
              warm: { en: 'Know who you are, and learn to read the situation.', zh: '知道自己是誰，並且學會讀懂當下的場面。' },
              whyEn: 'Odysseus fights, talks, waits or hides his name depending on where he is. That is not being fake. It is noticing what the situation needs — and it is a skill you can practise.',
              whyZh: '奧德修斯會打、會談、會等，也會隱藏自己的名字，全看他人在什麼地方。這不是虛偽，而是察覺當下需要什麼——而且這是一種可以練習的能力。',
            },
          ],
        },

        {
          t: 'summary',
          n: '4',
          titleEn: 'Self-control decides your future',
          titleZh: '自制力會決定你的未來',
          en: 'Four dangers in the story are not really monsters. The Lotus-Eaters, the witch Circe, the singing Sirens and the cattle of the sun god are all the same idea said four times: something nice right now that makes you forget what you actually want. Odysseus does not beat the Sirens. He tells his men to tie him to the mast first, because he knows that when the singing starts he will not be able to stop himself.',
          zh: '故事裡有四種危險其實不是怪物。食蓮族（吃了就忘記回家的人）、女巫瑟西、會唱歌的賽蓮（海妖），還有太陽神的牛群，全都是同一件事的四種說法：眼前有個很棒的東西，讓你忘記自己真正想要的是什麼。奧德修斯並沒有打敗賽蓮，他是先叫船員把自己綁在桅杆上——因為他知道，歌聲一響起，他就管不住自己了。',
        },

        {
          t: 'note',
          en: 'What are your Sirens?',
          zh: '你的賽蓮（海妖）是什麼？',
          bodyEn: 'You can write the modern list yourself: the phone, short videos, one more game, staying up late, leaving homework until the night before. None of them looks like a monster, and every one of them is genuinely fun — that is the whole point. So the question is: can you say no to something fun today so that you still have what you want tomorrow? And look at what Odysseus actually did. He did not trust himself to be strong in the moment. He tied the rope first.',
          bodyZh: '現代版的名單，你自己就寫得出來：手機、短影片、再打一場、熬夜、作業拖到前一天晚上。它們沒有一個看起來像怪物，而且每一個都真的很好玩——重點就在這裡。所以問題是：你能不能為了保住明天想要的東西，對今天好玩的東西說不？另外，看看奧德修斯實際上做了什麼。他並沒有相信自己「到時候會夠堅強」，他是先把繩子綁好。',
        },

        {
          t: 'summary',
          n: '5',
          titleEn: 'Do not forget what you actually care about',
          titleZh: '不要忘記你真正在乎的是什麼',
          en: 'A goddess called Calypso offers Odysseus the chance to live forever. Not money, not comfort — never dying. He says no, because he wants to go back to a small rocky island, his wife and his son. His goal was never an easy life. It was that place and the person he is there. It is worth asking yourself the same kind of question: not only how do I do well, but what do I want to do well for?',
          zh: '有一位名叫卡呂普索的女神，給了奧德修斯永遠活下去的機會。不是錢，也不是舒服的生活，而是永遠不死。他拒絕了，因為他想回到一座多岩的小島，回到他的妻子和兒子身邊。他的目標從來就不是輕鬆的生活，而是那個地方，以及在那裡的那個自己。你也值得問自己同一種問題：不只是「我要怎麼做得好」，而是「我想做好，是為了什麼」。',
        },

        {
          t: 'summary',
          n: '6',
          titleEn: 'Every choice has a consequence',
          titleZh: '每個選擇都會帶來後果',
          en: 'Again and again, someone on the ship ignores a warning, does something on impulse, and the whole crew pays for it. That is the part of the story that belongs to your age more than to anyone else’s. Growing up means being allowed to decide more things — and it means the results are yours too. Decision, then consequence, then responsibility. They come as a set.',
          zh: '一次又一次，船上有人不聽警告、憑一時衝動做了什麼，然後全船一起承擔。這一段，比故事裡任何其他部分都更屬於你這個年紀。長大意味著你可以決定的事變多了——同時也意味著結果也是你的。決定、後果、責任，這三個是一組的。',
        },

        {
          t: 'summary',
          n: '7',
          titleEn: 'A good leader takes responsibility',
          titleZh: '好的領導者會扛責任',
          en: 'Odysseus leads a crew, and he is not perfect at it. Some of his decisions keep his men safe; others get them killed. That is what makes him useful to talk about. If you are ever the one in charge — a group project, a club, a team — four questions are worth asking. Do I listen? Do I explain why? Do I admit it when I got it wrong? And am I protecting the group, or protecting how I look?',
          zh: '奧德修斯帶著一群船員，而他帶得並不完美。他有些決定讓部下安全，有些卻害死了他們。正因為這樣，他才值得拿來討論。如果哪一天換你負責——分組報告、社團、一支隊伍——有四個問題值得問問自己。我有沒有聽別人說？我有沒有解釋為什麼？做錯的時候我有沒有承認？還有，我在保護的是這個團隊，還是我自己的面子？',
        },

        {
          t: 'summary',
          n: '8',
          titleEn: 'Knowing when to change is also being clever',
          titleZh: '知道什麼時候該改變，也是一種聰明',
          en: 'Sometimes he fights. Sometimes he talks his way out. Sometimes he hides who he is. Sometimes he just waits. He survives partly because he knows which one the moment needs. This is the third of the three choices in the block above, and it is worth separating from “being fake”: you are not changing who you are, you are changing what you do.',
          zh: '有時候他選擇打，有時候他用說的脫身，有時候他隱藏自己的身分，有時候他就只是等。他能活下來，有一部分是因為他知道當下需要哪一種。這就是上面那三個選擇裡的第三個，而且值得和「虛偽」分開來看：你改變的不是自己是誰，而是自己怎麼做。',
        },

        {
          t: 'summary',
          n: '9',
          titleEn: 'Relationships need actions, not just feelings',
          titleZh: '關係需要行動，不只是感覺',
          en: 'While Odysseus is away, his wife Penelope holds the household together for twenty years, using patience and a lot of clever thinking. Their son Telemachus grows from an unsure boy into someone who takes responsibility. Nobody waited because they felt like waiting. They kept doing things, for years, with no news. That is what loyalty actually looks like.',
          zh: '奧德修斯不在的那二十年，他的妻子潘妮洛普靠著耐心和許多聰明的辦法，把整個家撐了下來。他們的兒子特勒瑪科斯，也從一個沒有把握的少年，長成一個會承擔責任的人。沒有人是「因為想等」才等的。他們是一年又一年，在完全沒有消息的情況下，持續做著該做的事。忠誠真正的樣子，就是這樣。',
        },

        {
          t: 'note',
          en: 'The part that makes it a story about you',
          zh: '讓它變成一個關於你的故事的那一部分',
          bodyEn: 'The poem is not really about getting home. It is about who Odysseus becomes on the way — the man who arrives could not have handled it twenty years earlier. Your own list is probably all destinations: the exam, the school, the team, the number on a report. The better question underneath it is who you are becoming while you go after them.',
          bodyZh: '這部史詩真正在講的，並不是「回到家」，而是奧德修斯在路上變成了什麼樣的人——最後抵達的那個他，如果換成二十年前，根本應付不了。你自己的清單上，寫的可能全都是終點：那場考試、那所學校、那支隊伍、成績單上的數字。藏在底下、更好的問題是：在追這些東西的過程中，你正在變成什麼樣的人？',
        },

        {
          t: 'quote',
          en: 'The goal is not just to arrive. The goal is to become someone who can handle the journey.',
          zh: '目標不只是抵達，而是成為一個能夠應付這趟旅程的人。',
          by: 'the last idea of the discussion 這次討論的最後一個想法',
        },

        {
          t: 'part',
          n: 'B',
          en: 'One pattern, every episode',
          zh: '一個模式，套進每一段故事',
        },

        {
          t: 'note',
          en: 'Goal → Temptation → Choice → Consequence → Growth',
          zh: '目標 → 誘惑 → 選擇 → 後果 → 成長',
          bodyEn: 'Five words, and nearly every part of the story goes through them in that order. Home is the goal; the island, the witch, the singing are the temptation; somebody chooses; something happens because of it; and the person at the end is not the person at the start. Try it on something from your own last year. Most people can describe the goal and the temptation easily, and go quiet on the choice.',
          bodyZh: '五個詞，而故事裡幾乎每一段，都會照這個順序走一遍。家是目標；那座島、那個女巫、那陣歌聲是誘惑；有人做了選擇；因為這個選擇，發生了某些事；而最後的那個人，已經不是一開始的那個人了。拿你自己過去一年裡的某件事套套看。大多數人講目標和誘惑都很順，一講到「選擇」就安靜了。',
        },

        {
          t: 'match',
          en: 'Part of the story, and what it is about',
          zh: '故事的段落，以及它在講什麼',
          hintEn: 'Click a part of the story on the left, then what it is really about on the right.',
          hintZh: '先點左邊的故事段落，再點右邊它真正在講的東西。',
          pairs: [
            { a: 'The Cyclops’ cave', b: 'a plan beats being strong' },
            { a: 'Shouting his name from the ship', b: 'pride right after a win' },
            { a: 'The Lotus-Eaters', b: 'something nice that makes you forget' },
            { a: 'Being tied to the mast', b: 'deciding early, not in the moment' },
            { a: 'Eating the sun god’s cattle', b: 'ignoring a warning, and everyone pays' },
            { a: 'Saying no to Calypso', b: 'choosing what matters over what is easy' },
            { a: 'Penelope’s twenty years', b: 'loyalty as something you keep doing' },
            { a: 'Telemachus growing up', b: 'taking responsibility for the first time' },
          ],
        },

        {
          t: 'part',
          n: 'C',
          en: 'The language',
          zh: '語言',
        },

        {
          t: 'phrases',
          en: 'When things go wrong',
          zh: '事情不順的時候',
          items: [
            {
              en: 'a setback',
              zh: '挫折、不順利的事',
              eg: 'Losing that match was a setback, not the end.',
              egZh: '輸掉那場比賽是一次挫折，不是結束。',
            },
            {
              en: 'keep going',
              zh: '繼續下去',
              eg: 'The hard part is not starting; it is keeping going.',
              egZh: '難的不是開始，而是繼續下去。',
            },
            {
              en: 'give up',
              zh: '放棄',
              eg: 'I nearly gave up in the second month.',
              egZh: '第二個月的時候我差點就放棄了。',
            },
            {
              en: 'learn from a mistake',
              zh: '從錯誤中學習',
              eg: 'You only learn from a mistake if you look at it.',
              egZh: '只有正視錯誤，你才真的從裡面學到東西。',
            },
            {
              en: 'a straight line',
              zh: '一條直線',
              eg: 'Getting better is never a straight line.',
              egZh: '進步從來就不是一條直線。',
            },
            {
              en: 'it takes time',
              zh: '這需要時間',
              eg: 'It takes time, and nobody tells you how much.',
              egZh: '這需要時間，而且沒有人會告訴你要多久。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Wanting something now',
          zh: '想要「現在就有」的時候',
          items: [
            {
              en: 'temptation',
              zh: '誘惑',
              eg: 'My phone is the biggest temptation when I study.',
              egZh: '我讀書的時候，手機是最大的誘惑。',
            },
            {
              en: 'resist something',
              zh: '忍住不去做某件事',
              eg: 'I could not resist checking it again.',
              egZh: '我忍不住又看了一次。',
            },
            {
              en: 'give in',
              zh: '沒忍住、投降',
              eg: 'I gave in after about ten minutes.',
              egZh: '大概十分鐘之後我就沒忍住了。',
            },
            {
              en: 'put something off',
              zh: '把某件事往後拖',
              eg: 'I put my homework off until Sunday night.',
              egZh: '我把作業拖到星期天晚上。',
            },
            {
              en: 'a long-term goal',
              zh: '長期目標',
              eg: 'It is fun now, but it costs me a long-term goal.',
              egZh: '現在很好玩，但它讓我付出了一個長期目標的代價。',
            },
            {
              en: 'decide in advance',
              zh: '事先決定好',
              eg: 'I decide in advance where my phone goes when I study.',
              egZh: '我會事先決定好，讀書的時候手機要放在哪裡。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Choices, pride and leading',
          zh: '選擇、驕傲與帶人',
          items: [
            {
              en: 'a consequence',
              zh: '後果',
              eg: 'Every choice has a consequence, even a small one.',
              egZh: '每一個選擇都有後果，就算是很小的選擇。',
            },
            {
              en: 'take responsibility',
              zh: '負起責任',
              eg: 'He took responsibility instead of blaming the group.',
              egZh: '他負起了責任，而不是怪組員。',
            },
            {
              en: 'admit you were wrong',
              zh: '承認自己錯了',
              eg: 'Admitting you were wrong is faster than arguing.',
              egZh: '承認自己錯了，比一直爭下去快得多。',
            },
            {
              en: 'show off',
              zh: '炫耀',
              eg: 'He won, and then he had to show off about it.',
              egZh: '他贏了，然後還非得炫耀一下不可。',
            },
            {
              en: 'let it go',
              zh: '算了、放下',
              eg: 'I was right, but I let it go.',
              egZh: '我是對的，但我就算了。',
            },
            {
              en: 'listen to advice',
              zh: '聽別人的建議',
              eg: 'The crew did not listen to advice, and it cost them.',
              egZh: '那些船員沒有聽勸，最後付出了代價。',
            },
          ],
        },

        {
          t: 'gap',
          en: 'Choose the right word',
          zh: '選出正確的字',
          hintEn: 'One of the three fits the sentence. Tap the Chinese if you want the situation.',
          hintZh: '三個選項中只有一個適合這個句子。想看情境的話，可以點開中文。',
          items: [
            {
              text: 'It took him ten years, but he never ___ up.',
              textZh: '他花了十年，但從來沒有放棄。',
              options: ['gave', 'took', 'put'],
              answer: 0,
              why: {
                en: '“Give up” means to stop trying. “Take up” means to start something new, and “put up” means something else again — the three are worth keeping apart.',
                zh: 'give up 是「不再嘗試」。take up 是「開始學一項新事物」，put up 又是另一個意思——這三個值得分清楚。',
              },
            },
            {
              text: 'He could not ___ shouting his own name.',
              textZh: '他忍不住喊出了自己的名字。',
              options: ['refuse', 'resist', 'reject'],
              answer: 1,
              why: {
                en: 'You resist a temptation, because it comes from inside you. You refuse an invitation and reject an idea — those come from someone else.',
                zh: '誘惑來自你自己的內心，所以用 resist。別人給的東西才用 refuse（拒絕邀請）和 reject（否決想法）。',
              },
            },
            {
              text: 'Every choice has a ___ , even a small choice.',
              textZh: '每一個選擇都有後果，就算是很小的選擇。',
              options: ['result', 'consequence', 'ending'],
              answer: 1,
              why: {
                en: '“Consequence” is the word for what follows from a choice, especially something you have to live with. “Result” is more neutral and fits scores and experiments.',
                zh: 'consequence 指的是「因為某個選擇而發生的事」，尤其是你必須承受的那種。result 比較中性，適合用在分數和實驗上。',
              },
            },
            {
              text: 'When the plan failed, she ___ responsibility for it.',
              textZh: '計畫失敗的時候，她扛起了責任。',
              options: ['made', 'took', 'had'],
              answer: 1,
              why: {
                en: '“Take responsibility” is the fixed pair. You take responsibility, take the blame, take a risk — “take” is the verb for accepting something that is not comfortable.',
                zh: 'take responsibility 是固定搭配。take responsibility、take the blame、take a risk——take 這個動詞，用在「接下一件不太舒服的事」。',
              },
            },
            {
              text: 'I was right, but I decided to let it ___ .',
              textZh: '我是對的，但我決定算了。',
              options: ['go', 'be', 'out'],
              answer: 0,
              why: {
                en: '“Let it go” means to stop holding on to something — an argument, a mistake, a grudge. “Let it be” is close but means leave it alone rather than release it.',
                zh: 'let it go 是「不再抓著一件事不放」——一場爭論、一個錯誤、一份怨氣。let it be 意思很接近，但比較像「不要去動它」，而不是「放下它」。',
              },
            },
            {
              text: 'I ___ my homework off until the night before.',
              textZh: '我把作業拖到前一天晚上才做。',
              options: ['put', 'took', 'left'],
              answer: 0,
              why: {
                en: '“Put something off” is the phrasal verb for delaying it. Note where the object goes: put it off, put my homework off — the two words split around it.',
                zh: 'put something off 是「把某件事往後拖」的片語動詞。注意受詞的位置：put it off、put my homework off——受詞會夾在這兩個字中間。',
              },
            },
          ],
        },

        {
          t: 'part',
          n: 'D',
          en: 'Talk it through',
          zh: '一起討論',
        },

        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的看法是？',
          hintEn: 'No right answers. Pick one and be ready to say why — that reason is the real exercise.',
          hintZh: '沒有標準答案。選一個，並準備好說明理由——那個理由才是真正的練習。',
          items: [
            {
              en: 'Wanting people to see you win causes more trouble than losing does.',
              zh: '「想讓別人看見自己贏」造成的麻煩，比輸掉還多。',
            },
            {
              en: 'Moving your phone away works better than telling yourself to focus.',
              zh: '把手機拿遠一點，比叫自己專心有效。',
            },
            {
              en: '“Just be yourself” is not very useful advice.',
              zh: '「做自己就好」這個建議其實不太有用。',
            },
            {
              en: 'A leader who has never made a bad call has never really led anything.',
              zh: '一個從來沒有做過錯誤決定的領導者，其實沒有真正帶過什麼。',
            },
            {
              en: 'Choosing where you are going matters more than getting there fast.',
              zh: '選對要去的地方，比快點抵達更重要。',
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Questions',
          zh: '討論題',
          items: [
            {
              en: 'What are your Sirens — the fun things that cost you something you want? And what would your rope be?',
              zh: '你的賽蓮（海妖）是什麼——那些很好玩、卻讓你失去某樣你想要的東西？而你的「繩子」會是什麼？',
              starters: [
                { en: 'The honest answer is…', zh: '老實的答案是……' },
                { en: 'It usually happens when…', zh: '它通常發生在……的時候。' },
                { en: 'My rope would be…', zh: '我的那條繩子會是……' },
              ],
            },
            {
              en: 'Odysseus loses years because he wanted everyone to know he had won. Have you ever done something like that, even a small version?',
              zh: '奧德修斯因為想讓大家知道他贏了，賠上了好幾年。你有沒有做過類似的事，就算只是很小的版本？',
              starters: [
                { en: 'There was one time when I…', zh: '有一次我……' },
                { en: 'Looking back, what I really wanted was…', zh: '現在回頭看，我真正想要的其實是……' },
                { en: 'It is hard not to, because…', zh: '很難忍住，因為……' },
              ],
            },
            {
              en: 'Think of a time you ignored a warning and it went wrong. What would you ask yourself now?',
              zh: '想一次你沒聽警告、結果出事的經驗。現在的你會先問自己什麼？',
              starters: [
                { en: 'Somebody told me…, and I…', zh: '有人跟我說……，然後我……' },
                { en: 'What happened after that was…', zh: '後來發生的事是……' },
                { en: 'Now I would ask myself…', zh: '現在我會先問自己……' },
              ],
            },
            {
              en: 'Think of a group you have been in — a project, a club, a team. Was the person in charge protecting the group, or protecting how they looked? Be fair.',
              zh: '想一個你待過的團體——分組報告、社團、一支隊伍。當時負責的人保護的是這個團體，還是自己的面子？請公平一點。',
              starters: [
                { en: 'In that group, the person in charge…', zh: '在那個團體裡，負責的人……' },
                { en: 'To be fair to them,…', zh: '公平來說……' },
                { en: 'If it were me, I would…', zh: '如果是我，我會……' },
              ],
            },
            {
              en: 'The man who arrives home could not have handled it twenty years earlier. What can you handle now that you could not two years ago?',
              zh: '最後回到家的那個人，二十年前根本應付不了那一切。有什麼是你現在做得到、兩年前卻做不到的？',
              starters: [
                { en: 'Two years ago I would have…', zh: '兩年前的我大概會……' },
                { en: 'Now I can…', zh: '現在我可以……' },
                { en: 'I am still not ready for…', zh: '我還沒準備好面對的是……' },
              ],
            },
          ],
        },

        {
          t: 'task',
          en: 'Say what the story means',
          zh: '說出這個故事的意義',
          instructionEn: 'Pick one and talk for about a minute. Say what you think, then why, then give one real example from your own life, then finish with what you would say overall. Tick a phrase when you use it.',
          instructionZh: '選一個題目，說大約一分鐘。先說你的看法，再說理由，然後舉一個你自己生活裡真實的例子，最後說一句整體的結論。用到的片語就打勾。',
          prompts: [
            {
              en: 'Tell a friend why a three-thousand-year-old story is still worth reading.',
              zh: '告訴朋友，一個三千年前的故事為什麼到現在還值得讀。',
            },
            {
              en: 'Describe one of your Sirens, and the rope you would use.',
              zh: '描述你的一個賽蓮（海妖），以及你會用的那條繩子。',
            },
            {
              en: 'Was Odysseus a good leader? Choose a side and say why.',
              zh: '奧德修斯是不是一個好的領導者？選一邊，並說出理由。',
            },
            {
              en: 'Tell the story of one setback using goal, temptation, choice, consequence, growth.',
              zh: '用「目標、誘惑、選擇、後果、成長」，把你的一次挫折說成一個故事。',
            },
            {
              en: 'Which of the nine lessons is most useful to someone your age? Why that one?',
              zh: '這九個啟示裡，哪一個對你這個年紀的人最有用？為什麼是那一個？',
            },
          ],
          checklist: [
            { en: 'a setback', zh: '挫折' },
            { en: 'keep going', zh: '繼續下去' },
            { en: 'temptation', zh: '誘惑' },
            { en: 'resist', zh: '忍住' },
            { en: 'a long-term goal', zh: '長期目標' },
            { en: 'decide in advance', zh: '事先決定好' },
            { en: 'a consequence', zh: '後果' },
            { en: 'take responsibility', zh: '負起責任' },
            { en: 'let it go', zh: '算了、放下' },
            { en: 'listen to advice', zh: '聽別人的建議' },
          ],
          frames: [
            {
              en: 'The story is not really about getting home. It is about who he becomes.',
              zh: '這個故事真正在講的不是回家，而是他變成了什麼樣的人。',
            },
            {
              en: 'Success is not avoiding problems. It is carrying on after them.',
              zh: '成功不是避開問題，而是在問題之後繼續走下去。',
            },
            {
              en: 'He did not trust himself in the moment. He tied the rope first.',
              zh: '他沒有相信自己當下的意志力，他是先把繩子綁好。',
            },
            {
              en: 'Winning and needing everyone to see you win are two different things.',
              zh: '「贏」和「需要所有人看見你贏」，是兩件不一樣的事。',
            },
            {
              en: 'Every choice has a consequence, and the consequence is yours too.',
              zh: '每個選擇都有後果，而那個後果也是你的。',
            },
            {
              en: 'Instead of asking “am I allowed to?”, ask “what might happen?”',
              zh: '與其問「我可以嗎？」，不如問「可能會發生什麼事？」',
            },
            {
              en: 'Know who you are, and learn to read the situation.',
              zh: '知道自己是誰，並且學會讀懂當下的場面。',
            },
            {
              en: 'Loyalty is something you keep doing, not something you feel.',
              zh: '忠誠是你持續在做的事，不是你感覺到的東西。',
            },
          ],
        },
      ],
    },

    /* Session 3 has a third kind of source. Session 1 was an organised write-up
       of an hour of talk; session 2 was material prepared before a lesson. This
       one is a piece of finished writing Eason produced himself — a
       self-introduction, already tidy. So the four `summary` blocks below hold
       his own paragraphs verbatim, and the `note` above them says so on the
       page; nothing has been rewritten, and nothing should be. `fix` stays
       empty again: polished writing carries no record of what he said while
       producing it, and his sentences here are already correct. */
    {
      id: 's3',
      n: 3,
      date: '2026-09-06',
      dateEn: '6 September 2026',
      dateZh: '2026 年 9 月 6 日',
      en: 'Honest, and learning to be tactful as well',
      zh: '誠實，並且學會把話說得更圓融',

      focus: [
        { en: 'Self-introduction', zh: '自我介紹' },
        { en: 'Honesty and tact', zh: '誠實與圓融' },
        { en: 'White lies', zh: '善意的謊言' },
        { en: 'Patience, again', zh: '耐心，又一次' },
        { en: 'Working with others', zh: '與他人合作' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'Your self-introduction, and the sentence hiding inside it. You are proud of being honest — and you have started to notice what honesty sometimes costs the person listening. That is the most interesting line in the whole text, and it is only one line long.',
          zh: '你的自我介紹，以及藏在裡面的那一句話。你為自己的誠實感到驕傲——而你也開始注意到，誠實有時候會讓聽的那個人付出代價。那是整篇文章裡最有意思的一句，而它只有一句話那麼長。',
        },

        {
          t: 'note',
          en: 'Your introduction, unchanged',
          zh: '你的自我介紹，原文未改',
          bodyEn: 'The four paragraphs below are yours exactly as you wrote them — nothing added, nothing corrected, nothing tidied. They are here so you can hear them: tap 🔊 on any paragraph and it is read at speaking pace, which is roughly the pace you will need if you ever have to deliver this out loud. Read along with it rather than after it. Everything further down the page is built out of these four paragraphs.',
          bodyZh: '下面四段是你寫的原文，完全沒有更動——沒有增加、沒有訂正、也沒有整理。把它們放在這裡是為了讓你「聽」：點任何一段的 🔊，它會用說話的速度唸出來，而那大致就是你真的要講出來時需要的速度。請跟著它一起唸，而不是等它唸完再唸。這一頁後面所有的內容，都是從這四段裡長出來的。',
        },

        {
          t: 'summary',
          en: 'I would describe myself as an outgoing, serious, curious, and energetic person. I enjoy talking to people because I easily get bored when I spend too much time by myself. I am also quite straightforward, and I am proud of my honesty because I always try to be genuine with other people. However, I have also started to realize that being completely honest is not always the best choice. Sometimes, the truth can hurt other people’s feelings, so I would like to learn how to express myself more tactfully and even tell a harmless white lie when necessary.',
          zh: '我會形容自己是一個外向、認真、好奇而且有活力的人。我喜歡和別人聊天，因為如果花太多時間自己一個人待著，我很容易覺得無聊。我也是一個相當直接的人，而且我很為自己的誠實感到驕傲，因為我總是希望能真誠地對待別人。不過，我也開始了解到，完全誠實並不一定在所有情況下都是最好的選擇。有時候，真話可能會傷害別人的感受，所以我想學習如何更有技巧、更委婉地表達自己，甚至在必要的時候說一些善意的謊言。',
        },

        {
          t: 'summary',
          en: 'I rarely feel nervous, and I usually feel more confident when I pay attention to my outfit and appearance. I think the way I present myself can affect the way I feel about myself. Among the personality traits of being serious, curious, patient, and energetic, I think I have most of them, although patience is something I still need to work on.',
          zh: '我很少感到緊張，而且當我特別注意自己的穿著和外表時，通常會更有自信。我認為一個人如何呈現自己，也會影響自己內在的感受。在認真、好奇、有耐心和有活力這幾種特質中，我覺得自己大部分都有，不過「耐心」是我還需要繼續加強的地方。',
        },

        {
          t: 'summary',
          en: 'My attitude toward teamwork has also changed over time. When I was in junior high school, I usually preferred working alone rather than working with my classmates. However, after entering senior high school and meeting new classmates, I have become more willing to work with others. I think this shows that I am becoming more open to new people and new experiences.',
          zh: '我對團隊合作的態度也隨著時間有所改變。國中的時候，比起和同學一起合作，我通常更喜歡自己完成事情。不過，進入高中、認識新的同學之後，我變得更願意和別人一起合作。我覺得這也代表我正在變得更願意接觸新的人，以及接受新的經驗。',
        },

        {
          t: 'summary',
          en: 'One interesting thing about me is that I am a certified diver. I have even had the chance to swim with a whale shark.',
          zh: '關於我，有一件很有趣的事情是，我是一名擁有證照的潛水員。我甚至曾經有機會和鯨鯊一起游泳。',
        },

        {
          t: 'note',
          en: 'What the introduction already does — five moves',
          zh: '這篇自我介紹已經做到的五件事',
          bodyEn: 'First it names four traits, which is ordinary. Second it explains one of them instead of listing more — you enjoy talking to people because you get bored alone, and a reason is what makes a trait believable. Third, and this is the part most people never reach, it names a limit of your own strength: honesty can cost the listener something. Fourth it says what you intend to do about it. Fifth it ends with one concrete fact that nobody else in the room will have — a certified diver who has swum with a whale shark. The order is good. Traits, a reason, an honest limit, an intention, and one thing only you can say. Keep that shape and you can rewrite the content for any audience.',
          bodyZh: '第一，它列出了四個特質，這很普通。第二，它沒有再多列幾個，而是解釋了其中一個——你喜歡跟人說話，因為一個人待著會無聊；有理由，特質才會讓人相信。第三，也是多數人從來不會走到的一步：它指出了自己這項優點的界線——誠實可能讓聽的人付出代價。第四，它說出你打算怎麼處理這件事。第五，它以一個別人都拿不出來的具體事實收尾——一位有證照、還跟鯨鯊一起游過泳的潛水員。這個順序很好：特質、理由、一個誠實的界線、一個打算，以及一件只有你能說的事。保住這個架構，內容就可以為任何場合重寫。',
        },

        {
          t: 'phrases',
          en: 'Describing yourself',
          zh: '描述自己',
          items: [
            {
              en: 'outgoing',
              zh: '外向的',
              eg: 'I would describe myself as an outgoing person.',
              egZh: '我會形容自己是一個外向的人。',
            },
            {
              en: 'straightforward',
              zh: '直接的、有話直說的',
              eg: 'I am quite straightforward — if something is wrong, I say so.',
              egZh: '我算是相當直接的人——如果有什麼不對，我就會說出來。',
            },
            {
              en: 'be genuine with someone',
              zh: '真誠地對待某人',
              eg: 'I always try to be genuine with other people.',
              egZh: '我總是希望能真誠地對待別人。',
            },
            {
              en: 'hurt someone’s feelings',
              zh: '傷害某人的感受',
              eg: 'Sometimes the truth can hurt other people’s feelings.',
              egZh: '有時候真話會傷害別人的感受。',
            },
            {
              en: 'express myself tactfully',
              zh: '更有技巧、更委婉地表達自己',
              eg: 'I would like to learn how to express myself more tactfully.',
              egZh: '我想學會如何更有技巧地表達自己。',
            },
            {
              en: 'a white lie',
              zh: '善意的謊言',
              eg: 'She told a white lie so that nobody would feel left out.',
              egZh: '她說了一個善意的謊言，好讓沒有人覺得被排擠。',
            },
            {
              en: 'work on something',
              zh: '在某件事上下功夫、繼續加強',
              eg: 'Patience is something I still need to work on.',
              egZh: '耐心是我還需要繼續加強的地方。',
            },
            {
              en: 'the way I present myself',
              zh: '我呈現自己的方式',
              eg: 'The way I present myself affects the way I feel about myself.',
              egZh: '我呈現自己的方式，會影響我對自己的感受。',
            },
            {
              en: 'pay attention to something',
              zh: '注意、留心某件事',
              eg: 'I feel more confident when I pay attention to my outfit.',
              egZh: '當我注意自己的穿著時，我會更有自信。',
            },
            {
              en: 'be willing to do something',
              zh: '願意做某件事',
              eg: 'I have become more willing to work with other people.',
              egZh: '我變得更願意和別人合作。',
            },
            {
              en: 'open to new experiences',
              zh: '願意接受新的經驗',
              eg: 'Changing school made me more open to new experiences.',
              egZh: '換了學校，讓我更願意接受新的經驗。',
            },
            {
              en: 'a certified diver',
              zh: '有證照的潛水員',
              eg: 'One interesting thing about me is that I am a certified diver.',
              egZh: '關於我，有一件有趣的事是我是一名有證照的潛水員。',
            },
          ],
        },

        {
          t: 'note',
          en: 'A white lie, and where the line actually is',
          zh: '善意的謊言，以及那條線到底在哪裡',
          bodyEn: 'A white lie is a small untruth told to spare someone — “I love it, thank you” about a present you will never use. English treats it as ordinary, which is why the phrase has its own name and no real disapproval attached. But notice what you are actually asking for. Almost none of the situations that go wrong for you need a lie. In most of them there are several true things you could say, and being tactful is choosing which true one to say first. “Your slides are messy” and “the content is solid, I would cut half the text” are both honest; only the second one gets used. Learn that first. The white lie is a much smaller tool than it looks, and you will need it about once a year.',
          bodyZh: 'white lie 是為了讓別人好過而說的小小不實話——收到一份你永遠不會用的禮物，回一句「我好喜歡，謝謝你」。英文把它視為稀鬆平常，所以這個說法才會有自己的名字，而且幾乎不帶責備的意味。但注意你真正需要的是什麼。你會出問題的那些情境，幾乎沒有一個需要說謊。在大多數情況下，你可以說的真話不只一句，而所謂的圓融，就是決定先說哪一句真話。「你的投影片很亂」和「內容很扎實，我會把文字砍掉一半」都是誠實的，但只有第二句會被聽進去。先學會這個。善意的謊言是一個比看起來小得多的工具，你大概一年才用得到一次。',
        },

        {
          t: 'contrast',
          en: 'Both sentences are honest',
          zh: '兩句話都是誠實的',
          coldEn: 'Straight out',
          coldZh: '直接說出口',
          warmEn: 'With tact',
          warmZh: '說得圓融一點',
          hintEn: 'Nothing in the right-hand column is a lie — check each one. It is the same information, with a different true sentence chosen to go first. Read both aloud.',
          hintZh: '右邊那一欄沒有一句是謊話——你可以一句一句檢查。資訊完全相同，只是選了另一句真話放在最前面。兩邊都請唸出聲。',
          items: [
            {
              caseEn: 'A classmate shows you the slides for a group presentation',
              caseZh: '同學把小組報告的投影片拿給你看',
              cold: {
                en: 'Your slides are messy. Nobody is going to be able to read them.',
                zh: '你的投影片很亂，根本沒有人看得懂。',
              },
              warm: {
                en: 'The content is solid. I would cut about half the text on each slide so people can read it from the back of the room.',
                zh: '內容很扎實。我會把每一頁的文字砍掉大概一半，這樣坐在後面的人也看得到。',
              },
              whyEn: 'The second sentence is not softer, it is more useful: it says what is already working, and it turns the criticism into one action. Your diving instructor did exactly this to you in August.',
              whyZh: '第二句不是比較客氣，而是比較有用：它先說出哪裡已經做對了，再把批評變成一個可以執行的動作。八月的時候，你的潛水教練對你做的正是這件事。',
            },
            {
              caseEn: 'A friend asks whether his new haircut suits him',
              caseZh: '朋友問你他的新髮型好不好看',
              cold: {
                en: 'Not really. It doesn’t suit you.',
                zh: '不太好看，不適合你。',
              },
              warm: {
                en: 'The last one suited you better, but this one will look good once it grows out a bit.',
                zh: '上一個比較適合你，不過這個等長長一點就會好看了。',
              },
              whyEn: 'Still no lie — you have said the last one was better. What changed is that the sentence does not end on the damage. Note that a white lie was available here and was not needed.',
              whyZh: '一樣沒有說謊——你確實說了上一個比較好看。改變的是這句話沒有停在傷害上。也注意一下：這裡其實可以說善意的謊言，但根本用不到。',
            },
            {
              caseEn: 'A teammate still has not done his part of the project',
              caseZh: '組員到現在還沒做他負責的部分',
              cold: {
                en: 'You haven’t done anything. Forget it, I’ll do it myself.',
                zh: '你什麼都沒做。算了，我自己做。',
              },
              warm: {
                en: 'I’ve finished my part. Which bit can you take, and when can you get it back to me?',
                zh: '我那部分做完了。你可以接哪一塊？大概什麼時候可以給我？',
              },
              whyEn: 'The left column feels satisfying and leaves you doing the whole thing alone. The right one asks for what you actually want, and it is the same move you were working on in session 1 with your friend and the game.',
              whyZh: '左欄講起來很痛快，結果是整件事還是你一個人做完。右欄則是直接要到你真正想要的東西——而這正是第一堂課裡，你和朋友打遊戲那件事在練的同一個動作。',
            },
          ],
        },

        {
          t: 'quote',
          en: 'I have also started to realize that being completely honest is not always the best choice.',
          zh: '我也開始了解到，完全誠實並不一定在所有情況下都是最好的選擇。',
          by: 'your own introduction — the line worth building the rest on 你自己的自我介紹，也是最值得往下發展的一句',
        },

        {
          t: 'gap',
          en: 'One phrase missing',
          zh: '少了一個片語',
          hintEn: 'Choose the phrase that fits. The reason is behind the tick.',
          hintZh: '選出合適的片語。理由在打勾之後會出現。',
          items: [
            {
              text: 'I am quite ___ — if I think something is wrong, I say so.',
              textZh: '我算是相當直接的人——如果我覺得有什麼不對，我就會說出來。',
              options: ['straightforward', 'outgoing', 'energetic'],
              answer: 0,
              why: {
                en: '“Straightforward” is about saying what you think without softening it. “Outgoing” is about enjoying people, and “energetic” is about how much energy you have — both true of you, but neither explains the second half of the sentence.',
                zh: 'straightforward 講的是「想什麼就說什麼，不加修飾」。outgoing 講的是喜歡跟人相處，energetic 講的是精力充沛——這兩個用在你身上也成立，但都解釋不了後半句。',
              },
            },
            {
              text: 'Sometimes the truth can ___, so it is worth choosing which true thing to say first.',
              textZh: '有時候真話會傷害別人的感受，所以值得想一想先說哪一句真話。',
              options: ['hurt other people’s feelings', 'tell a white lie', 'get bored'],
              answer: 0,
              why: {
                en: 'The subject is “the truth”, so the verb has to be something the truth does to a listener. A truth cannot tell a lie, and it cannot get bored.',
                zh: '主詞是「真話」，所以動詞必須是真話對聽者造成的事。真話不會說謊，也不會覺得無聊。',
              },
            },
            {
              text: 'Patience is the one trait I still need to ___.',
              textZh: '耐心是我還需要繼續加強的那一項特質。',
              options: ['work on', 'work out', 'work for'],
              answer: 0,
              why: {
                en: '“Work on” means to keep improving something weak. “Work out” is to exercise, or to solve a problem; “work for” is to be employed by someone. The preposition is the whole meaning here.',
                zh: 'work on 是「持續改善某個比較弱的部分」。work out 是運動，或把問題想清楚；work for 是替某人工作。這裡的意思完全取決於那個介系詞。',
              },
            },
            {
              text: 'I would rather tell a ___ than embarrass her in front of the whole class.',
              textZh: '我寧願說一個善意的謊言，也不想讓她在全班面前難堪。',
              options: ['white lie', 'straight lie', 'kind lie'],
              answer: 0,
              why: {
                en: '“White lie” is the fixed expression and the only one an English speaker will recognise. The other two are understandable but nobody says them.',
                zh: 'white lie 是固定用法，也是英文母語者唯一聽得懂的說法。另外兩個雖然猜得出意思，但沒有人這樣講。',
              },
            },
          ],
        },

        {
          t: 'match',
          en: 'What the words actually mean',
          zh: '這些說法真正的意思',
          hintEn: 'Click a word on the left, then the half that finishes it.',
          hintZh: '先點左邊的詞，再點右邊接得起來的那一半。',
          pairs: [
            { a: 'outgoing', b: 'happy to talk to people you do not know yet' },
            { a: 'straightforward', b: 'you say what you think, without softening it' },
            { a: 'tactful', b: 'you say the true thing that does the least damage' },
            { a: 'a white lie', b: 'a small untruth told to spare someone' },
            { a: 'to be genuine', b: 'the person people meet is the person you are' },
            { a: 'to work on something', b: 'to keep improving a weak part on purpose' },
          ],
        },

        {
          t: 'note',
          en: 'Patience, and why it is the right thing to admit',
          zh: '耐心，以及為什麼這是值得承認的一項',
          bodyEn: 'Three weeks ago, talking about a friend you coach at a game, you worked out that what frustrates you is not losing — it is “I already explained it, why haven’t you learned it yet?” Today, without being asked about any of that, you listed patience as the one trait you still need to work on. Two different conversations, three weeks apart, arriving at the same word. That is worth knowing, and it is worth saying out loud in an interview one day, because you can do what almost no candidate can: name the weakness and then give a real example of noticing it and changing what you did. A weakness you can only name sounds like a rehearsed answer. A weakness with a story is evidence that you pay attention to yourself.',
          bodyZh: '三個星期前，在談你教朋友打遊戲那件事的時候，你自己推導出來：讓你煩躁的不是輸，而是「我明明講過了，你怎麼還是不會？」今天，在完全沒有被問到那件事的情況下，你把「耐心」列為自己還需要加強的那一項。兩場相隔三週、內容不同的談話，最後指向同一個詞。這件事值得記下來，將來面試時也值得說出口——因為你做得到幾乎沒有人做得到的事：說出自己的弱點，然後給出一個真實的例子，說明你怎麼發現它、又怎麼改變了做法。只講得出名稱的弱點，聽起來像背好的答案；有故事的弱點，才是你會觀察自己的證據。',
        },

        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的立場是什麼？',
          hintEn: 'There is no right answer — take a side and say why.',
          hintZh: '沒有標準答案：選一邊，並說明理由。',
          items: [
            { en: 'A white lie is still a lie.', zh: '善意的謊言終究還是謊言。' },
            { en: 'Being told the truth is always better than being protected from it.', zh: '被告知真相，永遠好過被保護著不知道真相。' },
            { en: 'How you dress changes how well you perform.', zh: '你怎麼穿，會影響你表現得多好。' },
            { en: 'I get more done in a team than on my own.', zh: '比起自己一個人，我在團隊裡完成的事更多。' },
            { en: 'Patience can be trained, like buoyancy control.', zh: '耐心是可以練的，就像浮力控制一樣。' },
          ],
        },

        {
          t: 'discuss',
          en: 'Questions from the session',
          zh: '課堂上談到的問題',
          items: [
            {
              en: 'You said you get bored when you spend too much time by yourself. What is the longest you have happily spent alone, and what were you doing?',
              zh: '你說一個人待太久會覺得無聊。你曾經最久一次「開心地」自己待著是多久？那時候你在做什麼？',
              starters: [
                { en: 'I can happily spend hours alone as long as…', zh: '只要……，我可以很開心地自己待上好幾個小時。' },
                { en: 'What makes it boring is not being alone, it is…', zh: '讓我覺得無聊的不是一個人，而是……' },
                { en: 'After about … I start looking for someone to talk to.', zh: '大概過了……之後，我就會開始找人講話。' },
              ],
            },
            {
              en: 'Your view of teamwork changed between junior high and senior high. What actually changed — the work, the classmates, or you?',
              zh: '你對團隊合作的看法在國中和高中之間改變了。真正改變的是什麼——是工作內容、是同學，還是你？',
              starters: [
                { en: 'In junior high I preferred working alone because…', zh: '國中的時候我比較喜歡自己做，因為……' },
                { en: 'What changed my mind was…', zh: '讓我改變想法的是……' },
                { en: 'I am still not willing to share the part where…', zh: '有一部分我還是不願意分出去，就是……' },
              ],
            },
            {
              en: 'When someone asks for your opinion, do they always want the truth? How do you tell the difference?',
              zh: '當有人問你的意見時，他們每一次都想聽真話嗎？你怎麼分辨？',
              starters: [
                { en: 'If they ask right after they have finished it, they usually want…', zh: '如果他們是剛做完就問，通常想要的是……' },
                { en: 'I can tell because…', zh: '我看得出來，因為……' },
                { en: 'When there is still time to change it, I say…', zh: '如果還來得及改，我就會說……' },
              ],
            },
            {
              en: 'If patience is the trait you are working on, what would count as proof next month that it had improved?',
              zh: '如果耐心是你正在加強的那一項，下個月要發生什麼事，才算得上是「真的進步了」的證據？',
              starters: [
                { en: 'I would know it had improved if…', zh: '如果……，我就知道自己真的進步了。' },
                { en: 'The situation that would test it is…', zh: '最能檢驗這件事的情境是……' },
                { en: 'Instead of saying …, I would say …', zh: '我不會說……，而是會說……' },
              ],
            },
          ],
        },

        {
          t: 'task',
          en: 'Homework: the sixty-second version, and one rewrite',
          zh: '作業：六十秒版本，以及一次改寫',
          instructionEn: 'Two things. First, cut your introduction down until it fits in sixty seconds spoken aloud — time yourself, do not guess. Keep the five moves from the note above: traits, a reason, an honest limit, an intention, and the diving. Second, write it once more for a different audience: a new classmate on the first day, or a university interview. Same facts, different weight on each part. Notice which sentences you keep in both versions — those are the true core of it. Send both on LINE and we will run them next time.',
          instructionZh: '兩件事。第一，把你的自我介紹刪到唸出來剛好六十秒——請實際計時，不要用猜的。保留上面那則說明裡的五個步驟：特質、理由、一個誠實的界線、一個打算，以及潛水那件事。第二，為另一種對象再寫一次：開學第一天遇到的新同學，或是大學面試。事實一樣，但每個部分的比重不同。注意看看哪些句子在兩個版本裡都留下來了——那些才是這篇自我介紹真正的核心。兩個版本都用 LINE 傳給我，下次一起練。',
          prompts: [
            { en: 'Read it aloud while you cut. A sentence that is hard to say is a sentence to rewrite.', zh: '一邊唸出聲一邊刪。唸起來卡的句子，就是該改寫的句子。' },
            { en: 'Keep the whale shark. It is the one line nobody else in the room can say.', zh: '鯨鯊那一句留著。那是全場只有你說得出來的一句話。' },
            { en: 'The honest limit is the strongest part. Do not cut it to make room for more adjectives.', zh: '那個「誠實的界線」是最有力量的部分。不要為了多放幾個形容詞而把它刪掉。' },
          ],
          frames: [
            { en: 'I would describe myself as ___, and the reason is ___.', zh: '我會形容自己是＿＿，原因是＿＿。' },
            { en: 'I am proud of ___, but I have started to realize that ___.', zh: '我為＿＿感到驕傲，但我開始了解到＿＿。' },
            { en: 'What I would like to learn is how to ___.', zh: '我想學會的是如何＿＿。' },
            { en: '___ is something I still need to work on.', zh: '＿＿是我還需要繼續加強的地方。' },
            { en: 'One thing about me that you would not guess is ___.', zh: '關於我，有一件你大概猜不到的事是＿＿。' },
          ],
        },
      ],
    },
  ],
};
