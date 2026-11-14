/* Hank — a running notebook of one-to-one sessions.

   Unlike most pages in this repo, this one is not a lesson. It is a notebook
   that grows: every lesson adds one entry to `sessions` below and nothing else
   changes. No new files, no new folder, no renderer edit. It is /ken/'s
   machinery, copied, with one addition — the 自學／教學 modes — described below
   and in render.js.

   ADDING A SESSION
   ----------------
   Copy the last entry in `sessions`, change `id`, `n`, the date and the titles,
   and rewrite the blocks. Put it at the BOTTOM of the array — the page runs in
   teaching order, oldest first, and opens with the newest session expanded and
   the earlier ones folded away. The contents list, the numbering and the
   anchors all come from the array, so there is nothing else to keep in step.
   A lesson taught between two that are already here goes in its right place in
   the array, not at the bottom, and everything after it is renumbered.

   `id` must be unique and URL-safe: it becomes the anchor, so
   /hank/#s2 opens session 2 with the rest folded.

   FOCUS CHIPS THAT JUMP
   ---------------------
   Give a block an `id` and give the focus chip that names it a matching `to`,
   and tapping the chip jumps there. The convention is `<session>-<letter>` for
   a part divider and `<session>-<word>` for a block inside one. Keep every id
   unique across the whole file — they are page anchors, not per-session ones.
   One id is reserved: never call anything `teach`, because /hank/#teach is the
   teacher's link and is swallowed before it is ever looked up as an anchor.

   THE STUDENT
   -----------
   Hank is in Grade 10 (高一) in Taiwan and writes at about CEFR B1. The
   register is /eason/'s rather than /ken/'s: nothing is written down to him,
   but the teaching sentences are short, one idea each, and the examples come
   from HIS life — basketball above all (he plays point guard), school, exams,
   friends, a school festival. Not an office, not a career, not campus life.

   Spelling is American throughout (practice, realize, center), because that is
   what his school teaches and what his own writing uses.

   TWO MODES, AND WHAT THAT DOES TO THE CHINESE
   --------------------------------------------
   Every visible English string has a Traditional Chinese counterpart.

   自學 — the plain URL, Hank on his own — shows the Chinese under the English,
   because a student alone needs it. The 中文 switch in the bar hides it for a
   self-test, and a tap on any line brings that line back. Phrase cards carry a
   記住了 button whose marks stay on his device.

   教學 — the teacher's device, after opening /hank/#teach once — is the
   ordinary notebook: English shows, the Chinese waits behind a 中 chip, and
   nothing is recorded.

   So write every Chinese line knowing it will be ON SCREEN for him most of the
   time. Instructions, task prompts, the contents list and the focus chips are
   bilingual in both modes — those are scaffolding, not comprehension practice.

   A gap-fill translation is a COMPLETE Chinese sentence — the blank is filled
   in, and only the English keeps its ___. That is the notebook convention. In
   自學 it means the Chinese is a cue for the English rather than a second
   puzzle, which is the right way round for someone studying alone.

   A line in `intro.goals` may carry `only: 'self'` or `only: 'teach'`, for the
   how-to-use lines that are true in one mode and false in the other.

   NO MARKDOWN IN STRINGS
   ----------------------
   The renderer escapes everything, so *asterisks* render literally. A film
   title is just written out. Headlines are set in capitals by the stylesheet,
   so never rely on capital letters to carry a meaning in a title.

   BLOCK TYPES
   -----------
     part      a divider INSIDE one session, for a source that arrives already
               cut into labelled sections
     lead      a framing sentence, opening a session or a part
     link      a pointer to another page in this site
     quote     a short quote, with attribution — set as a poster on this page
     summary   a teaching paragraph, spoken aloud on request. Optional
               `titleEn`/`titleZh` put a heading above it and optional `n` a
               number beside that
     note      a boxed aside explaining one idea in more depth
     contrast  two columns compared. Set coldEn/coldZh and warmEn/warmZh to name
               the two sides
     phrases   phrase cards — English face up, Chinese and an example behind a
               tap (or already open, in 自學). The card's `en` is also its id
               for the 記住了 mark: rename a phrase and its mark is lost
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three options to choose from
     mcq       a quiz question about the reading. `why` is optional: leave it
               off where the text above is already the explanation
     fix       something Hank actually wrote or said that is WRONG, with the
               repair behind a tap. Not used yet — see below
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     have it / need it cards, for auditing something. Set
               haveEn/haveZh and needEn/needZh whenever the list is not people
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking or writing task with a tick-list of target phrases

   THE SOURCE OF SESSION 1, AND WHY IT HAS NO `fix`
   ------------------------------------------------
   The source is Lewis's own feedback sheet on an essay Hank wrote ("Writing
   Feedback & Lesson Notes · CEFR B1"): the revised essay, a table of ten key
   corrections, sixteen collocations with Chinese, five discussion questions
   and a writing focus. Everything in those five sections is on the page, and
   the revised essay, the collocation glosses, their example sentences and the
   five questions are verbatim. They are Lewis's and are not to be "improved".

   The corrections table gives Hank's ORIGINAL wording as short fragments
   beside the revision. Two things follow from that, and both are deliberate:

   - They go in a `contrast` block ("You wrote" / "Revised"), not in `fix`.
     `fix` draws a ✕ on the left-hand side, and by the sheet's own account none
     of these ten is a mistake — each is "more natural", "more precise", and
     one is "also correct basketball terminology". A ✕ on correct English would
     teach him the wrong thing.
   - They stay FRAGMENTS. The sheet does not record his full original
     sentences, and none is reconstructed here: a sentence built around his
     fragment would be a sentence Lewis or the page wrote, not one Hank did.

   What this page ADDS to the sheet, so it is clear what is whose: the Chinese
   for the essay and for every example sentence, the comprehension quiz, the two
   grammar notes (have seen / had seen, and look forward to + -ing), the
   matching and gap-fill exercises, the second worked example of the writing
   pattern, the useful language under each question, and the closing task.

   The date is the day the sheet was handed over. The essay itself is undated.

   SAMPLE BANNER
   -------------
   Setting `sample` puts a line across the top saying the content is a
   placeholder — on screen and in print. Session 1 is real, so it is off.
*/

const NOTEBOOK = {
  student: 'Hank',
  title: 'Hank’s English Notebook',
  titleZh: 'Hank 的英文筆記',
  kicker: '高中英文 · 寫作與口說筆記',

  intro: {
    en: 'This page is where our lessons are kept. Your writing, the changes we made to it, and the phrases worth keeping all stay here, so you can come back between lessons and practice on your own.',
    zh: '這一頁是我們上課的紀錄。你寫的文章、我們做的修改，以及值得記下來的片語，都會留在這裡，方便你在課與課之間回來自己練習。',
    goalsEn: 'How to use it',
    goalsZh: '使用方式',
    goals: [
      {
        only: 'self',
        en: 'The Chinese is showing under the English. To test yourself, tap 中文 at the top to hide it. Then tap any line to bring its Chinese back.',
        zh: '英文下方會顯示中文。想考考自己，就點上方的「中文」把它藏起來；之後點任何一句，那一句的中文就會回來。',
      },
      {
        only: 'teach',
        en: 'Tap any English line to see the Chinese. The 中文 switch at the top opens all of them at once.',
        zh: '點任何一句英文就會出現中文。上方的「中文」按鈕可以一次全部打開。',
      },
      {
        en: 'Tap 🔊 to hear a phrase or a sentence, as many times as you like. Say it out loud after the voice.',
        zh: '點 🔊 可以聽片語或句子的發音，想聽幾次都可以。聽完跟著大聲唸一次。',
      },
      {
        only: 'self',
        en: 'On a phrase card, tap 記住了 when you are sure of it. The marks stay on this device, so next time you can see what is left.',
        zh: '片語卡上，確定自己記住了就點「記住了」。記號會留在這台裝置上，下次打開就知道還剩哪些。',
      },
      {
        en: 'Quiz answers are not saved and nothing is scored. A wrong answer just fades, so try again. Reload the page for a fresh run.',
        zh: '練習題不會儲存答案，也不計分。答錯的選項只會變淡，再試一次就好。重新整理頁面，就可以從頭再練一次。',
      },
      {
        en: 'The newest lesson is open and earlier ones are folded. Tap a lesson’s title to open or close it.',
        zh: '最新的一堂課是展開的，之前的會收合起來。點課程標題就能展開或收合。',
      },
    ],
  },

  sessions: [
    {
      id: 's1',
      n: 1,
      dateEn: '14 November 2026',
      dateZh: '2026 年 11 月 14 日',
      en: 'A Weekend of Movies, Basketball, and School Activities',
      zh: '電影、籃球與校園活動的週末',

      focus: [
        { en: 'The revised essay', zh: '修改後的文章', to: 's1-a' },
        { en: 'Ten changes, and why', zh: '十處修改與原因', to: 's1-b' },
        { en: 'have seen / had seen', zh: 'have seen 與 had seen', to: 's1-seen' },
        { en: '16 collocations', zh: '16 個搭配詞', to: 's1-c' },
        { en: 'look forward to + -ing', zh: 'look forward to + V-ing', to: 's1-forward' },
        { en: 'A writing pattern', zh: '一個寫作架構', to: 's1-d' },
        { en: 'Five questions', zh: '五個問題', to: 's1-e' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'You wrote about one weekend: a movie with friends, two basketball games, and a visit to another school’s festival. This page keeps that essay — the revised version, what changed and why, sixteen collocations from it, and a writing pattern you used without knowing its name.',
          zh: '你寫了一個週末發生的事：和朋友看電影、打兩場籃球賽，還去參觀了別校的校慶。這一頁把那篇文章留下來——修改後的版本、改了哪裡和為什麼改、文章裡的十六個搭配詞，以及一個你其實已經用上、只是還不知道名字的寫作架構。',
        },

        {
          t: 'summary',
          en: 'The strongest part of your essay is the basketball reflection. You go beyond describing events and identify specific areas for improvement. You do not only say that you lost a game. You say what went wrong — a few missed layups, not enough talking — and what you want to practice next. That is what makes a reader keep reading, and Part D gives it a name so you can do it on purpose.',
          zh: '這篇文章最強的部分，是你對籃球的反思。你不只是描述發生了什麼事，還指出了具體需要進步的地方。你不是只說輸了一場球，而是說出哪裡出了問題——幾次上籃沒進、溝通不夠——以及接下來想練什麼。這正是讓讀者想繼續讀下去的原因；D 部分會替這個寫法取個名字，讓你以後可以刻意使用它。',
        },

        // ------------------------------------------------------------ A
        {
          t: 'part',
          id: 's1-a',
          n: 'A',
          en: 'The revised version',
          zh: '修改後的版本',
        },

        {
          t: 'note',
          en: 'Whose words are these?',
          zh: '這是誰寫的？',
          bodyEn: 'Yours, one draft later. I kept your original ideas and your writing style, and improved the grammar, the sentence flow, the vocabulary and the storytelling. Read it once for the story. Then read it again and look for the places where it sounds different from what you wrote — Part B explains ten of them.',
          bodyZh: '是你寫的，只是多改了一稿。我保留了你原本的想法和寫作風格，改進的是文法、句子的流暢度、用字，以及說故事的方式。先讀一遍，看故事；再讀一遍，找找看哪些地方和你原本寫的不一樣——B 部分會說明其中十處。',
        },

        {
          t: 'summary',
          n: '1',
          titleEn: 'The movie',
          titleZh: '電影',
          en: 'Last week, my friend invited several of us to watch a movie together. We watched a movie called The Mongoose. It was about a person who was trying to escape. I thought the movie was really interesting. At first, I didn’t fully understand the story, but as the movie went on, I gradually began to understand what was happening. After watching it, I realized that it was one of the best movies I had seen recently.',
          zh: '上個星期，我的朋友邀我們幾個人一起去看電影。我們看了一部叫做 The Mongoose 的電影，內容是關於一個想要逃脫的人。我覺得這部電影真的很有意思。一開始我沒有完全看懂劇情，但隨著電影進行，我漸漸明白發生了什麼事。看完之後，我發現這是我最近看過最好看的電影之一。',
        },

        {
          t: 'summary',
          n: '2',
          titleEn: 'Shopping, and two games',
          titleZh: '逛街，和兩場比賽',
          en: 'After the movie, we went shopping in Xinyi District and spent the afternoon walking around. Later that evening, we played two basketball games. We won one game and lost the other. However, I think we all did our best and played to the best of our abilities. Everyone also became more aware of the skills they needed to work on.',
          zh: '看完電影後，我們去信義區逛街，整個下午都在到處走走。當天晚上，我們打了兩場籃球賽，贏了一場、輸了一場。不過，我認為我們都盡了全力，把自己的實力發揮出來了。每個人也更清楚自己需要加強哪些技巧。',
        },

        {
          t: 'summary',
          n: '3',
          titleEn: 'What I need to work on',
          titleZh: '我需要加強的地方',
          en: 'Personally, I think I need to improve my ability to drive to the basket, mid-range shooting, and ball-handling skills. During the games, I missed a few layups as well as some mid-range shots. That’s why I want to spend more time practicing these skills. For now, I feel quite confident about my three-point shooting because I made one three-pointer in each game. When I have an open shot without a defender in front of me, I can usually score.',
          zh: '就我自己來說，我覺得我需要加強切入籃下的能力、中距離投籃，以及控球技巧。比賽中，我有幾次上籃沒進，也有幾球中距離沒投進。這就是為什麼我想花更多時間練習這些技巧。目前我對自己的三分球還滿有信心的，因為我每一場都投進了一顆三分球。只要面前沒有防守者、有空檔出手，我通常都能得分。',
        },

        {
          t: 'summary',
          n: '4',
          titleEn: 'Playing point guard',
          titleZh: '打控球後衛',
          en: 'Another skill I want to improve is dribbling. Since I play as a point guard, I need to pay attention to what is happening across the court and communicate with my teammates so that everyone knows what to do. However, sometimes I don’t communicate enough during games, and many of my teammates end up standing around the three-point line. I want to improve my ball-handling skills so I can drive toward the basket and pass the ball to an open teammate. I also want to learn how to ask a teammate to set a screen and then pass to him as he moves toward the basket. I believe these skills will help me become a better point guard and make our team stronger.',
          zh: '另一項我想加強的技巧是運球。因為我打的是控球後衛，我必須留意全場的狀況，並且和隊友溝通，讓每個人都知道該做什麼。不過，有時候我在比賽中溝通得不夠，結果很多隊友就站在三分線附近不動。我想加強控球技巧，這樣我就能往籃下切入，再把球傳給有空檔的隊友。我也想學會怎麼請隊友幫我設掩護，然後在他往籃下移動時把球傳給他。我相信這些技巧能讓我成為更好的控球後衛，也讓我們的球隊更強。',
        },

        {
          t: 'summary',
          n: '5',
          titleEn: 'Another school’s festival',
          titleZh: '別校的校慶',
          en: 'Today, I also visited another school’s festival, and I had a great time. I saw many people selling different products at various booths, and I also noticed students wearing many different kinds of outfits. One of the highlights was a basketball game between teachers and students. It was really exciting to watch. Now, I am looking forward to our own school festival, and I hope it will be a great success.',
          zh: '今天我還去參觀了另一所學校的校慶，玩得很開心。我看到很多人在各個攤位賣不同的東西，也注意到學生們穿著各式各樣的服裝。其中一個亮點是老師和學生的籃球賽，看起來真的很刺激。現在，我很期待我們自己學校的校慶，希望它會辦得非常成功。',
        },

        {
          t: 'mcq',
          en: 'Did you get it?',
          zh: '你讀懂了嗎？',
          hintEn: 'Eight questions on the essay above. If the Chinese is showing, hide it first with the 中文 switch — it is a better test. A wrong answer fades and the question stays open, so try again.',
          hintZh: '關於上面這篇文章的八個問題。如果中文是開著的，先用「中文」按鈕把它藏起來，這樣才考得到自己。答錯的選項會變淡，題目仍然開著，可以再試一次。',
          items: [
            {
              q: 'What was the movie about?',
              qZh: '這部電影是關於什麼？',
              options: [
                'A person who was trying to escape',
                'A basketball team that never wins',
                'A group of friends at a school festival',
              ],
              answer: 0,
            },
            {
              q: 'How well did the writer understand the story at first?',
              qZh: '一開始，作者對劇情理解到什麼程度？',
              options: [
                'Perfectly, from the first scene',
                'Not at all, even at the end',
                'Not fully — it became clearer as the movie went on',
              ],
              answer: 2,
            },
            {
              q: 'How did the two basketball games end?',
              qZh: '那兩場籃球賽的結果如何？',
              options: [
                'They won both games',
                'They won one game and lost the other',
                'They lost both games',
              ],
              answer: 1,
            },
            {
              q: 'Which skill does the writer feel confident about for now?',
              qZh: '作者目前對哪一項技巧有信心？',
              options: [
                'Driving to the basket',
                'Three-point shooting',
                'Mid-range shooting',
              ],
              answer: 1,
            },
            {
              q: 'Why do many of his teammates end up standing around the three-point line?',
              qZh: '為什麼他的很多隊友最後都站在三分線附近？',
              options: [
                'They are too tired to move',
                'Their coach told them to stay there',
                'He sometimes does not communicate enough during games',
              ],
              answer: 2,
            },
            {
              q: 'What does he want to do after a teammate sets a screen?',
              qZh: '隊友設完掩護之後，他想做什麼？',
              options: [
                'Pass to that teammate as he moves toward the basket',
                'Shoot a three-pointer himself every time',
                'Dribble back to the center line',
              ],
              answer: 0,
            },
            {
              q: 'What was one of the highlights of the school festival?',
              qZh: '校慶的亮點之一是什麼？',
              options: [
                'A singing contest between classes',
                'A booth that sold outfits',
                'A basketball game between teachers and students',
              ],
              answer: 2,
            },
            {
              q: 'The essay says: “We won one game and lost the other. However, I think we all did our best.” What is “However” doing there?',
              qZh: '文章寫道：「We won one game and lost the other. However, I think we all did our best.」這裡的 However 有什麼作用？',
              options: [
                'It adds one more result to the list',
                'It turns from the score to how the writer feels about it',
                'It shows that the writer is angry about losing',
              ],
              answer: 1,
              why: {
                en: '“However” marks a turn. The sentence before it is only a result: one win, one loss. The sentence after it is your opinion of that result. Without “However”, a reader cannot tell that your view is more positive than the score.',
                zh: 'However 標示的是「轉折」。它前面那句只是結果：一勝一敗。它後面那句，是你對這個結果的看法。少了 However，讀者就看不出來你的看法其實比比數來得正面。',
              },
            },
          ],
        },

        // ------------------------------------------------------------ B
        {
          t: 'part',
          id: 's1-b',
          n: 'B',
          en: 'What changed, and why',
          zh: '改了什麼，為什麼改',
        },

        {
          t: 'lead',
          en: 'Ten places where the wording changed. None of these ten was a grammar mistake. Each change makes the sentence more natural, more exact, or easier for a reader who does not play basketball. So read the reason, not only the new version.',
          zh: '以下是十處用字的修改。這十處沒有一個是文法錯誤，每一處修改都是為了讓句子更自然、更精確，或讓不打籃球的讀者更容易看懂。所以不要只看新的版本，也要讀原因。',
        },

        {
          t: 'contrast',
          en: 'Your wording, and the revision',
          zh: '你的寫法，和修改後的寫法',
          hintEn: 'On the left, the words you used. On the right, the words in the revised essay. Both sides can be played with 🔊. Say the right-hand one out loud.',
          hintZh: '左邊是你原本用的字，右邊是修改後文章裡的字。兩邊都可以點 🔊 聽。右邊那一個，請大聲唸出來。',
          coldEn: 'You wrote',
          coldZh: '你原本寫的',
          warmEn: 'Revised',
          warmZh: '修改後',
          items: [
            {
              caseEn: 'How a movie develops',
              caseZh: '描述電影的進展',
              cold: { en: 'as it continued', zh: '隨著它繼續下去' },
              warm: { en: 'as the movie went on', zh: '隨著電影進行' },
              whyEn: 'A more natural expression for describing how a movie develops.',
              whyZh: '描述電影怎麼發展下去時，這是比較自然的說法。',
            },
            {
              caseEn: 'Starting to understand',
              caseZh: '開始看懂',
              cold: { en: 'slowly started to understand everything', zh: '慢慢開始看懂所有的事' },
              warm: { en: 'gradually began to understand what was happening', zh: '漸漸開始明白發生了什麼事' },
              whyEn: 'More precise, and it avoids suggesting that you understood absolutely everything.',
              whyZh: '比較精確，也避免讓人以為你「全部都看懂了」。',
            },
            {
              caseEn: 'Ranking the movie',
              caseZh: '評價這部電影',
              cold: { en: 'best movies I have watched recently', zh: '我最近看過最好的電影' },
              warm: { en: 'best movies I had seen recently', zh: '我（那時）最近看過最好的電影' },
              whyEn: '“See a movie” is a common collocation. Both the present perfect and the past perfect can work, depending on the time reference — the note below shows how to choose.',
              whyZh: 'see a movie 是常見的搭配。現在完成式和過去完成式都可以用，要看時間的參照點在哪裡——下面的說明會告訴你怎麼選。',
            },
            {
              caseEn: 'Saying that everyone tried hard',
              caseZh: '說大家都盡力了',
              cold: { en: 'showed our abilities', zh: '展現了我們的能力' },
              warm: { en: 'played to the best of our abilities', zh: '盡我們最大的能力去打' },
              whyEn: 'A natural expression meaning that everyone tried their hardest.',
              whyZh: '這是很自然的說法，意思是每個人都盡了全力。',
            },
            {
              caseEn: 'Naming a skill to improve',
              caseZh: '說出想加強的技巧',
              cold: { en: 'improve my drives to the basket', zh: '加強我的切入' },
              warm: { en: 'improve my ability to drive to the basket', zh: '加強我切入籃下的能力' },
              whyEn: 'A more natural sentence structure for describing a basketball skill.',
              whyZh: '描述一項籃球技巧時，這樣的句子結構比較自然。',
            },
            {
              caseEn: 'A skill, or single shots',
              caseZh: '是一項能力，還是一球一球',
              cold: { en: 'mid-range shots', zh: '中距離的那幾球' },
              warm: { en: 'mid-range shooting', zh: '中距離投籃（這項能力）' },
              whyEn: '“Shooting” refers to the ability rather than to individual shots. The essay still says “I missed … some mid-range shots” one sentence later — there you are counting single shots, so “shots” is right.',
              whyZh: 'shooting 指的是「投籃這項能力」，而不是一球一球的出手。文章的下一句仍然寫「I missed … some mid-range shots」——那裡是在數有幾球沒進，所以用 shots 才對。',
            },
            {
              caseEn: 'Your role on the team',
              caseZh: '你在隊上的角色',
              cold: { en: 'My position is point guard', zh: '我的位置是控球後衛' },
              warm: { en: 'I play as a point guard', zh: '我打控球後衛' },
              whyEn: 'More natural when describing a player’s role.',
              whyZh: '描述球員的角色時，這樣說比較自然。',
            },
            {
              caseEn: 'The point guard’s job',
              caseZh: '控球後衛的工作',
              cold: { en: 'watch the whole court', zh: '看整個球場' },
              warm: { en: 'pay attention to what is happening across the court', zh: '留意全場發生的狀況' },
              whyEn: 'It explains the point guard’s responsibility more clearly.',
              whyZh: '把控球後衛的責任說得更清楚。',
            },
            {
              caseEn: 'Asking for a screen',
              caseZh: '要隊友來掩護',
              cold: { en: 'call for a screen', zh: '叫掩護' },
              warm: { en: 'ask a teammate to set a screen', zh: '請隊友設掩護' },
              whyEn: 'It makes the basketball action clear for general readers. “Call for a screen” is also correct basketball terminology.',
              whyZh: '讓不打籃球的一般讀者也看得懂這個動作。call for a screen 本身也是正確的籃球用語。',
            },
            {
              caseEn: 'What people were wearing',
              caseZh: '描述大家的穿著',
              cold: { en: 'all kinds of different clothes', zh: '各種不同的衣服' },
              warm: { en: 'many different kinds of outfits', zh: '許多不同種類的服裝' },
              whyEn: 'It avoids unnecessary repetition — “all kinds of” and “different” say almost the same thing — and it uses a natural clothing-related noun.',
              whyZh: '避免不必要的重複——all kinds of 和 different 講的幾乎是同一件事——同時用了一個談穿著時很自然的名詞。',
            },
          ],
        },

        {
          t: 'note',
          id: 's1-seen',
          en: 'have seen, or had seen?',
          zh: 'have seen 還是 had seen？',
          bodyEn: 'Both are correct English. The choice depends on where you are standing in time. If you are talking about now, use the present perfect: “It is one of the best movies I have seen recently.” In your essay you are telling a story in the past — “I realized that it was…” — and the seeing happened before that moment. So English steps one tense further back: “it was one of the best movies I had seen recently.” A quick check: look at the main verb. With “is”, write “have seen”. With “was”, write “had seen”.',
          bodyZh: '兩個都是正確的英文，差別在於你「站在哪個時間點」說話。如果你談的是現在，就用現在完成式：「It is one of the best movies I have seen recently.」而在你的文章裡，你是在敘述過去的事——「I realized that it was…」——「看過」這件事又發生在那個時間點之前，所以英文會再往前退一個時態：「it was one of the best movies I had seen recently.」快速檢查法：看主要動詞。是 is，就寫 have seen；是 was，就寫 had seen。',
        },

        {
          t: 'note',
          en: 'Who is reading?',
          zh: '誰在讀這篇文章？',
          bodyEn: 'Two of the ten changes are not really about English. They are about the reader. A teammate understands “watch the whole court” and “call for a screen” at once. An English teacher, or the person marking an exam, may never have played. When you write about something you know well, ask one question: would someone outside the team follow this? If not, add a few words that explain the action.',
          bodyZh: '這十處修改裡，有兩處其實和英文本身無關，而是和「讀者」有關。隊友一聽到 watch the whole court、call for a screen 就懂；但英文老師或閱卷的人，可能從來沒打過球。寫自己很熟的事情時，問自己一個問題：球隊以外的人看得懂嗎？如果看不懂，就多加幾個字，把動作說清楚。',
        },

        // ------------------------------------------------------------ C
        {
          t: 'part',
          id: 's1-c',
          n: 'C',
          en: 'Sixteen collocations',
          zh: '十六個搭配詞',
        },

        {
          t: 'lead',
          en: 'A collocation is a group of words that usually go together. Learn each one as a single piece — the verb and its noun at the same time — and it will come out right without thinking.',
          zh: '搭配詞（collocation）就是通常會一起出現的一組字。把每一組當成「一整塊」來記——動詞和名詞一起記——用的時候就不必多想，自然會對。',
        },

        {
          t: 'phrases',
          en: 'Movies',
          zh: '電影',
          items: [
            {
              en: 'watch a movie together',
              zh: '一起看電影',
              eg: 'We watched a movie together last weekend.',
              egZh: '上個週末我們一起看了一部電影。',
            },
            {
              en: 'understand the story',
              zh: '理解劇情',
              eg: 'I didn’t understand the story at first.',
              egZh: '一開始我沒有看懂劇情。',
            },
            {
              en: 'as the movie went on',
              zh: '隨著電影進行',
              eg: 'The story became clearer as the movie went on.',
              egZh: '隨著電影進行，劇情變得更清楚了。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'On the court: your own game',
          zh: '球場上：自己的表現',
          items: [
            {
              en: 'play to the best of my ability',
              zh: '盡自己最大的能力表現',
              eg: 'I tried to play to the best of my ability.',
              egZh: '我努力盡自己最大的能力去打。',
            },
            {
              en: 'work on my weaknesses',
              zh: '改善自己的弱點',
              eg: 'I need to work on my weaknesses.',
              egZh: '我需要改善自己的弱點。',
            },
            {
              en: 'drive to the basket',
              zh: '切入籃下',
              eg: 'I want to improve my ability to drive to the basket.',
              egZh: '我想加強切入籃下的能力。',
            },
            {
              en: 'make a three-pointer',
              zh: '投進三分球',
              eg: 'I made a three-pointer in each game.',
              egZh: '我每一場都投進了一顆三分球。',
            },
            {
              en: 'take an open shot',
              zh: '在空檔出手',
              eg: 'I usually take an open shot when no defender is near me.',
              egZh: '附近沒有防守者時，我通常會在空檔出手。',
            },
            {
              en: 'handle the ball',
              zh: '控球',
              eg: 'A point guard needs to handle the ball well.',
              egZh: '控球後衛需要把球控好。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'On the court: playing with teammates',
          zh: '球場上：和隊友配合',
          items: [
            {
              en: 'communicate with teammates',
              zh: '與隊友溝通',
              eg: 'I need to communicate more with my teammates.',
              egZh: '我需要多和隊友溝通。',
            },
            {
              en: 'set a screen',
              zh: '設立掩護',
              eg: 'My teammate set a screen for me.',
              egZh: '我的隊友幫我設了掩護。',
            },
            {
              en: 'roll toward the basket',
              zh: '掩護後往籃下移動',
              eg: 'He rolled toward the basket after setting a screen.',
              egZh: '他設完掩護後，往籃下移動。',
            },
            {
              en: 'pass to an open teammate',
              zh: '傳給有空檔的隊友',
              eg: 'I passed to an open teammate.',
              egZh: '我把球傳給了有空檔的隊友。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'The school festival',
          zh: '校慶',
          items: [
            {
              en: 'attend a school festival',
              zh: '參加校慶活動',
              eg: 'I attended another school’s festival.',
              egZh: '我參加了另一所學校的校慶。',
            },
            {
              en: 'run a booth',
              zh: '經營攤位',
              eg: 'Students ran different booths at the festival.',
              egZh: '學生們在校慶上經營不同的攤位。',
            },
            {
              en: 'look forward to an event',
              zh: '期待某項活動',
              eg: 'I’m looking forward to our school festival.',
              egZh: '我很期待我們學校的校慶。',
            },
          ],
        },

        {
          t: 'note',
          id: 's1-forward',
          en: 'look forward to + a noun, or + -ing',
          zh: 'look forward to 後面接名詞，或接 V-ing',
          bodyEn: 'In “look forward to”, the word “to” is a preposition. It is not the “to” of “to see” or “to play”. So what comes next is a noun — “I am looking forward to our school festival” — or a verb in the -ing form: “I am looking forward to seeing the teachers play.” Never “look forward to see”. Your essay gets this right. Many students do not, which is why tests like to check it.',
          bodyZh: 'look forward to 裡的 to 是介系詞，不是 to see、to play 那個不定詞的 to。所以後面要接名詞——「I am looking forward to our school festival」——或是動詞的 -ing 形式：「I am looking forward to seeing the teachers play.」絕對不會是「look forward to see」。你的文章這裡寫對了；很多學生會寫錯，所以考試很喜歡考這一題。',
        },

        {
          t: 'match',
          en: 'Put the halves together',
          zh: '把兩半接起來',
          hintEn: 'Tap a beginning on the left, then its ending on the right. A wrong pair shakes and lets go — try another.',
          hintZh: '先點左邊的開頭，再點右邊對應的結尾。配錯會晃一下然後放開，再試別的就好。',
          pairs: [
            { a: 'drive to the', b: 'basket' },
            { a: 'set a', b: 'screen' },
            { a: 'make a', b: 'three-pointer' },
            { a: 'take an open', b: 'shot' },
            { a: 'handle the', b: 'ball' },
            { a: 'pass to an open', b: 'teammate' },
            { a: 'work on my', b: 'weaknesses' },
            { a: 'run a', b: 'booth' },
            { a: 'look forward to an', b: 'event' },
          ],
        },

        {
          t: 'gap',
          en: 'Choose the piece that fits',
          zh: '選出放得進去的那一個',
          hintEn: 'Eight sentences, one blank each. Every one comes from your essay or from the cards above. The reason appears when you get it right.',
          hintZh: '八個句子，每句一個空格，全部出自你的文章或上面的字卡。答對之後，原因就會出現。',
          items: [
            {
              text: 'I didn’t understand the story at first, but it became clearer ___ the movie went on.',
              textZh: '一開始我沒有看懂劇情，但隨著電影進行，就變得比較清楚了。',
              options: ['as', 'during', 'until'],
              answer: 0,
              why: {
                en: '“As” joins two things that happen together: the movie goes on, and the story gets clearer. “During” needs a noun after it — during the movie — not a whole clause.',
                zh: 'as 把「同時發生」的兩件事連起來：電影繼續演，劇情越來越清楚。during 後面要接名詞（during the movie），不能接一整個子句。',
              },
            },
            {
              text: 'We won one game and lost ___.',
              textZh: '我們贏了一場，輸了另一場。',
              options: ['another', 'the other', 'others'],
              answer: 1,
              why: {
                en: 'There were only two games, so the second one is “the other”. “Another” means one more out of many: we played another game.',
                zh: '總共只有兩場，所以第二場是 the other。another 指的是「很多個裡面的再一個」：we played another game。',
              },
            },
            {
              text: 'I am looking forward to ___ the teachers play against the students.',
              textZh: '我很期待看到老師和學生對打。',
              options: ['see', 'saw', 'seeing'],
              answer: 2,
              why: {
                en: 'After “look forward to”, a verb takes -ing, because that “to” is a preposition.',
                zh: 'look forward to 後面的動詞要用 -ing，因為這個 to 是介系詞。',
              },
            },
            {
              text: 'Everyone played to the best ___ their abilities.',
              textZh: '每個人都盡了自己最大的能力去打。',
              options: ['of', 'for', 'with'],
              answer: 0,
              why: {
                en: 'It is a fixed phrase: to the best of my ability, to the best of our abilities. The preposition is always “of”.',
                zh: '這是固定片語：to the best of my ability、to the best of our abilities。介系詞一定是 of。',
              },
            },
            {
              text: 'I made one three-pointer in ___ game.',
              textZh: '我每一場都投進了一顆三分球。',
              options: ['each', 'both', 'all'],
              answer: 0,
              why: {
                en: '“Each” takes a singular noun: each game. “Both” and “all” need a plural — both games, all the games.',
                zh: 'each 後面接單數名詞：each game。both 和 all 要接複數——both games、all the games。',
              },
            },
            {
              text: 'I want to improve my ability ___ to the basket.',
              textZh: '我想加強切入籃下的能力。',
              options: ['driving', 'drive', 'to drive'],
              answer: 2,
              why: {
                en: '“Ability” is followed by to + verb: the ability to drive, the ability to pass, the ability to stay calm.',
                zh: 'ability 後面接 to + 原形動詞：the ability to drive、the ability to pass、the ability to stay calm。',
              },
            },
            {
              text: 'My teammate ___ a screen for me, and I got an open shot.',
              textZh: '隊友幫我設了掩護，我就有了空檔出手的機會。',
              options: ['did', 'set', 'put'],
              answer: 1,
              why: {
                en: 'A screen is “set”. The past form of “set” is also “set” — it does not change.',
                zh: '掩護用的動詞是 set。set 的過去式也是 set，不會變化。',
              },
            },
            {
              text: 'Students ___ different booths at the festival.',
              textZh: '學生們在校慶上經營不同的攤位。',
              options: ['ran', 'did', 'played'],
              answer: 0,
              why: {
                en: 'To run a booth, a shop or a club is to be in charge of it. The past form of “run” is “ran”.',
                zh: 'run a booth、run a shop、run a club 的 run 是「負責經營」的意思。run 的過去式是 ran。',
              },
            },
          ],
        },

        // ------------------------------------------------------------ D
        {
          t: 'part',
          id: 's1-d',
          n: 'D',
          en: 'A pattern for writing about improvement',
          zh: '寫「表現與進步」的架構',
        },

        {
          t: 'lead',
          en: 'A useful B1 writing pattern is: Experience → Problem → Action Plan → Expected Result. Your basketball paragraphs already follow it. Here are the four steps, one sentence each.',
          zh: '一個很實用的 B1 寫作架構是：經驗 → 問題 → 行動計畫 → 預期結果。你寫籃球的那幾段其實已經照著它走了。以下是這四個步驟，每一步各一句話。',
        },

        {
          t: 'summary',
          n: '1',
          titleEn: 'Experience',
          titleZh: '經驗',
          en: 'We played two basketball games and won one.',
          zh: '我們打了兩場籃球賽，贏了一場。',
        },
        {
          t: 'summary',
          n: '2',
          titleEn: 'Problem',
          titleZh: '問題',
          en: 'I missed several layups and didn’t communicate enough.',
          zh: '我有好幾次上籃沒進，溝通也不夠。',
        },
        {
          t: 'summary',
          n: '3',
          titleEn: 'Action Plan',
          titleZh: '行動計畫',
          en: 'I will practice driving to the basket and talking to my teammates.',
          zh: '我會練習切入籃下，也會多和隊友說話。',
        },
        {
          t: 'summary',
          n: '4',
          titleEn: 'Expected Result',
          titleZh: '預期結果',
          en: 'I hope to become a better point guard and help my team win more games.',
          zh: '我希望成為更好的控球後衛，幫助球隊贏更多比賽。',
        },

        {
          t: 'note',
          en: 'Why this pattern is worth keeping',
          zh: '為什麼這個架構值得記下來',
          bodyEn: 'This pattern is particularly valuable because it helps you explain your thinking, not just report what happened. It can also be applied to academic performance, public speaking, teamwork, and personal goals. “We lost” is a report. “We lost because we stopped talking, so next time I will call out every play” is thinking — and thinking is what a reader gives marks for.',
          bodyZh: '這個架構特別有價值，因為它幫你把「想法」說清楚，而不只是報告發生了什麼事。它也可以用在課業表現、上台說話、團隊合作和個人目標上。「We lost」只是報告；「We lost because we stopped talking, so next time I will call out every play」才是思考——而讀的人給分，看的就是思考。',
        },

        {
          t: 'match',
          en: 'The same pattern, a different subject',
          zh: '同一個架構，換一個主題',
          hintEn: 'Here the pattern is used on an English exam instead of a basketball game. Match each step to its sentence.',
          hintZh: '這次把架構用在英文考試上，而不是籃球賽。把每個步驟和它的句子配起來。',
          pairs: [
            { a: 'Experience', b: 'I took my first English exam of the semester last month.' },
            { a: 'Problem', b: 'I ran out of time in the reading section.' },
            { a: 'Action Plan', b: 'I will read one short article every day and time myself.' },
            { a: 'Expected Result', b: 'I hope to finish the next exam with five minutes to spare.' },
          ],
        },

        // ------------------------------------------------------------ E
        {
          t: 'part',
          id: 's1-e',
          n: 'E',
          en: 'Talk about it',
          zh: '說說看',
        },

        {
          t: 'discuss',
          en: 'Five follow-up questions',
          zh: '五個延伸問題',
          items: [
            {
              en: 'What made The Mongoose one of the best movies you have watched recently? Was it the story, the characters, or something else?',
              zh: '是什麼讓 The Mongoose 成為你最近看過最好的電影之一？是劇情、角色，還是別的原因？',
              starters: [
                { en: 'What I liked most about it was…', zh: '我最喜歡它的地方是……' },
                { en: 'As the movie went on, I started to…', zh: '隨著電影進行，我開始……' },
                { en: 'It was not only the story. The characters…', zh: '不只是劇情，角色也……' },
              ],
            },
            {
              en: 'What did you learn about your basketball skills from winning one game and losing the other?',
              zh: '從贏一場、輸一場的結果裡，你對自己的籃球技巧有了什麼了解？',
              starters: [
                { en: 'In the game we won, I…', zh: '在贏的那一場，我……' },
                { en: 'In the game we lost, I noticed that…', zh: '在輸的那一場，我注意到……' },
                { en: 'It showed me that I need to work on…', zh: '這讓我知道，我需要加強……' },
              ],
            },
            {
              en: 'As a point guard, how can you help your teammates play better, even when you are not scoring points?',
              zh: '身為控球後衛，即使自己沒有得分，你可以怎麼幫助隊友打得更好？',
              starters: [
                { en: 'Even when I am not scoring, I can…', zh: '即使我沒有得分，我還是可以……' },
                { en: 'A point guard’s job is to…', zh: '控球後衛的工作是……' },
                { en: 'If I communicate more, my teammates will…', zh: '如果我多溝通，隊友就會……' },
              ],
            },
            {
              en: 'If you could focus on improving only one basketball skill for the next month, which one would you choose, and how would you practice it?',
              zh: '如果接下來一個月只能專心加強一項籃球技巧，你會選哪一項？你會怎麼練習？',
              starters: [
                { en: 'I would choose…, because…', zh: '我會選……，因為……' },
                { en: 'I would practice it by…', zh: '我會用……的方式來練習。' },
                { en: 'After a month, I hope to be able to…', zh: '一個月之後，我希望能夠……' },
              ],
            },
            {
              en: 'What was the most interesting thing you saw at the other school’s festival, and what ideas would you like to bring to your own school’s festival?',
              zh: '在那所學校的校慶上，你看到最有趣的是什麼？你想把哪些點子帶回自己學校的校慶？',
              starters: [
                { en: 'The most interesting thing I saw was…', zh: '我看到最有趣的是……' },
                { en: 'One idea I would like to bring back is…', zh: '我想帶回來的一個點子是……' },
                { en: 'If our class runs a booth, we could…', zh: '如果我們班要擺攤，我們可以……' },
              ],
            },
          ],
        },

        {
          t: 'task',
          en: 'Write it again, with the pattern',
          zh: '用這個架構，再寫一次',
          instructionEn: 'Choose one topic. Write five to seven sentences, or say them out loud for about one minute. Follow the four steps in order — Experience, Problem, Action Plan, Expected Result — and use at least three phrases from the tick-list.',
          instructionZh: '選一個題目，寫五到七句話，或是開口說大約一分鐘。照著四個步驟的順序——經驗、問題、行動計畫、預期結果——並且至少用上「目標片語」裡的三個。',
          prompts: [
            {
              en: 'Your most recent basketball game: what happened, what went wrong, what you will practice, and what you hope will change.',
              zh: '你最近的一場籃球賽：發生了什麼事、哪裡出了問題、你會練習什麼、你希望有什麼改變。',
            },
            {
              en: 'A test or an exam this semester that did not go the way you wanted.',
              zh: '這學期一次結果不如預期的小考或段考。',
            },
            {
              en: 'A time you had to speak in front of the class.',
              zh: '一次你必須在全班面前說話的經驗。',
            },
            {
              en: 'A group project or a team activity where the group did not work well together.',
              zh: '一次小組報告或團體活動，大家配合得不太好。',
            },
            {
              en: 'Getting ready for your own school festival: what your class has done so far, what is not ready yet, and what you will do about it.',
              zh: '準備自己學校的校慶：你們班目前做了什麼、還有什麼沒準備好、你打算怎麼處理。',
            },
          ],
          checklist: [
            { en: 'play to the best of my ability', zh: '盡自己最大的能力表現' },
            { en: 'work on my weaknesses', zh: '改善自己的弱點' },
            { en: 'become more aware of', zh: '更清楚地意識到' },
            { en: 'pay attention to', zh: '留意、注意' },
            { en: 'communicate with', zh: '與……溝通' },
            { en: 'spend more time practicing', zh: '花更多時間練習' },
            { en: 'feel confident about', zh: '對……有信心' },
            { en: 'look forward to', zh: '期待' },
          ],
          frames: [
            {
              en: 'Last week, we played two games. We won one and lost the other.',
              zh: '上個星期我們打了兩場比賽，贏了一場、輸了另一場。',
            },
            {
              en: 'During the game, I missed … and didn’t … enough.',
              zh: '比賽中，我……沒做好，而且……做得不夠。',
            },
            {
              en: 'That’s why I want to spend more time practicing…',
              zh: '這就是為什麼我想花更多時間練習……',
            },
            {
              en: 'I believe this will help me become a better…',
              zh: '我相信這會幫助我成為更好的……',
            },
          ],
        },

        {
          t: 'quote',
          en: 'I believe these skills will help me become a better point guard and make our team stronger.',
          zh: '我相信這些技巧能讓我成為更好的控球後衛，也讓我們的球隊更強。',
          by: 'the last line of your basketball paragraphs 你寫籃球那幾段的最後一句',
        },
      ],
    },
  ],
};
