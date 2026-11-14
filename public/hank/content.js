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
     figure    a drawing with a numbered legend. `art` names a drawing in
               render.js (FIGURES); each legend line is spoken and glossed.
               `you: true` on a line colours its number orange, for the moves
               that are Hank's own. A drawing listed in ANIMATED also PLAYS:
               the legend lines must then be in the order the moves happen,
               one line per move, because line n lights up during move n
     photos    photographs in a grid, each with a caption that is spoken and
               glossed like any other line. `quote` puts a black tile first,
               for the words that came with them. See PHOTOGRAPHS below before
               adding one
     steps     a pattern as a row of numbered steps with arrows between them —
               use it wherever the SHAPE of an idea is the point
     timeline  the order of a day as stops on a line: `icon` (a name in ICONS),
               `word` (the signpost the essay uses there) and a caption
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
               repair behind a tap. Session 2 has the first one — see below
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

   SESSION 2, WHO REVISED IT, AND THE FIRST `fix`
   ----------------------------------------------
   Session 2's source is different in kind: Hank's own essay, unrevised, pasted
   into chat by Lewis with the instruction to revise it and put it on the page.
   So the revision, the corrections and every explanation in that session were
   written for this page rather than taken from a handout — which is why its
   note says "the ideas, the order and the voice are still yours" and does not
   say "I kept", the way session 1's (Lewis's own sentence) does.

   Because the whole original is in hand, this session can do what session 1
   could not, and the line between its two blocks is the rule to keep:

   - `fix` holds ONLY what is wrong, verbatim and whole: "This Friday" for a
     Friday that is over, "played some activities", a sentence with no verb,
     and "the food ... too delicious". Four, because there were four.
   - `contrast` holds what was already correct and is now better: clearer,
     shorter, or a more exact word. Full sentences on both sides this time.

   The revision adds NO facts. Where a livelier sentence would have needed a
   detail Hank did not give — what the meat smelled like, how the mochi felt —
   the plainer sentence was kept. "Wild chickens" is his and is left alone: he
   may mean 山雞, but the page does not guess at an animal he did not name.

   The session's writing focus is repetition (his essay has "However" four
   times and "delicious" three), and the revised essay practises what it
   preaches: one "However", one "delicious".

   PICTURES
   --------
   A session may carry `art`, the name of a drawing in render.js (ART): it sits
   behind the scoreboard under the session's title. 'court' and 'target' exist.
   The scoreboard's numbers are counted from the session's own blocks, so there
   is nothing to keep in step — add a card and the count moves.

   Every drawing is made in code, and none is a brand's artwork: see court.css.

   PHOTOGRAPHS
   -----------
   Session 2 has five, and they are the only photographs on the page. They came
   from Hank's mother, by way of Lewis, with one line of hers: when Hank was
   little she organized the same Atayal experience for his kindergarten
   classmates. So they are from that EARLIER trip, not from last Friday's, and
   Part G is built on exactly that — then against now.

   The page is public, so three rules were applied, and any later photograph
   should meet them too:

   - No other child's face. Eight photographs were sent; the three in which
     other children can be recognised (a close-up with classmates behind, a
     group at a table, the group portrait) are NOT in img/ and must not be put
     there — a file in public/ is reachable by its address whether or not a
     page shows it. The archery picture is cropped to leave out the people
     standing at its edge. Lewis can overrule this; it is his call, not the
     page's, but it has to be a decision rather than a default.
   - No camera data. Each file went through BMP and back, which drops EXIF.
   - Captions say what is IN the picture and never who. The page does not
     decide which child is Hank from a face, and it does not need to: the
     questions under the photographs ask him.

   Her message is quoted in her own Chinese, with an English translation
   written for this page. The translation is the page's, not hers.

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
        en: 'Tap the round speaker button beside a phrase or a sentence to hear it, as many times as you like. Say it out loud after the voice.',
        zh: '點片語或句子旁邊的圓形喇叭按鈕，就能聽發音，想聽幾次都可以。聽完跟著大聲唸一次。',
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
      art: 'court',

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
          t: 'timeline',
          en: 'The weekend, in four stops',
          zh: '這個週末的四站',
          hintEn: 'The orange words are the signposts in the essay. They tell a reader where in the weekend they are.',
          hintZh: '橘色的字是文章裡的「路標」，讓讀者知道現在講到週末的哪一段。',
          items: [
            { icon: 'film', word: 'Last week', en: 'A movie with friends', zh: '和朋友看電影' },
            { icon: 'bag', word: 'After the movie', en: 'Shopping in Xinyi District', zh: '信義區逛街' },
            { icon: 'ball', word: 'Later that evening', en: 'Two basketball games', zh: '兩場籃球賽' },
            { icon: 'flag', word: 'Today', en: 'Another school’s festival', zh: '別校的校慶' },
          ],
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
          hintEn: 'On the left, the words you used. On the right, the words in the revised essay. Both sides have a speaker button. Say the right-hand one out loud.',
          hintZh: '左邊是你原本用的字，右邊是修改後文章裡的字。兩邊都有喇叭按鈕可以聽。右邊那一個，請大聲唸出來。',
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
          t: 'figure',
          id: 's1-play',
          art: 'pickroll',
          en: 'The play you want to learn',
          zh: '你想學會的那個戰術',
          hintEn: 'This is the play from your fourth paragraph. It is called a pick and roll, and each number on the court is one of your phrases.',
          hintZh: '這就是你第四段寫的那個戰術，叫做擋拆（pick and roll）。球場上的每個數字，都對應你的一個片語。',
          items: [
            { en: 'A teammate sets a screen.', zh: '隊友幫你設掩護。' },
            { you: true, en: 'You drive toward the basket.', zh: '你往籃下切入。' },
            { en: 'He rolls toward the basket.', zh: '他掩護後往籃下移動。' },
            { you: true, en: 'You pass to an open teammate.', zh: '你把球傳給有空檔的隊友。' },
          ],
          keyEn: 'Orange is you. White is your teammate. × is your defender. The dotted line is the ball.',
          keyZh: '橘色是你，白色是隊友，× 是防守你的人，虛線是球的路線。',
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
          t: 'steps',
          en: 'The four steps',
          zh: '四個步驟',
          items: [
            {
              titleEn: 'Experience',
              titleZh: '經驗',
              en: 'We played two basketball games and won one.',
              zh: '我們打了兩場籃球賽，贏了一場。',
            },
            {
              titleEn: 'Problem',
              titleZh: '問題',
              en: 'I missed several layups and didn’t communicate enough.',
              zh: '我有好幾次上籃沒進，溝通也不夠。',
            },
            {
              titleEn: 'Action Plan',
              titleZh: '行動計畫',
              en: 'I will practice driving to the basket and talking to my teammates.',
              zh: '我會練習切入籃下，也會多和隊友說話。',
            },
            {
              titleEn: 'Expected Result',
              titleZh: '預期結果',
              en: 'I hope to become a better point guard and help my team win more games.',
              zh: '我希望成為更好的控球後衛，幫助球隊贏更多比賽。',
            },
          ],
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

    // ================================================================ 2
    {
      id: 's2',
      n: 2,
      dateEn: '15 November 2026',
      dateZh: '2026 年 11 月 15 日',
      en: 'A Field Trip to the Hunter School in Wulai',
      zh: '烏來獵人學校校外教學',
      art: 'target',

      focus: [
        { en: 'Four sentences, fixed', zh: '四個句子，修過一遍', to: 's2-fix' },
        { en: 'too / so', zh: 'too 與 so', to: 's2-too' },
        { en: 'The revised essay', zh: '修改後的文章', to: 's2-b' },
        { en: 'Good → better', zh: '從不錯到更好', to: 's2-c' },
        { en: '16 collocations', zh: '16 個搭配詞', to: 's2-d' },
        { en: 'Don’t repeat yourself', zh: '不要一直重複', to: 's2-e' },
        { en: 'Five questions', zh: '五個問題', to: 's2-f' },
        { en: 'Then and now', zh: '那時候與現在', to: 's2-g' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'You wrote about your class field trip to the Hunter School in Wulai: singing on the bus, Atayal words and dances, bamboo rice, archery, wild boar, traps, and a show at the end. This page keeps that essay — four sentences that needed a repair, the revised version, the phrases worth keeping, and one habit to work on.',
          zh: '你寫了班上去烏來獵人學校校外教學的經過：在車上唱歌、學泰雅語和舞蹈、做竹筒飯、射箭、烤山豬肉、看陷阱，最後還有表演。這一頁把那篇文章留下來——四個需要修正的句子、修改後的版本、值得記下來的片語，以及一個可以改進的習慣。',
        },

        {
          t: 'summary',
          en: 'Three things work well. First, the essay is easy to follow, because everything is in time order and you tell the reader where you are: Next, After archery, After lunch, After that. Second, the archery part is a small story with a turn in it. You thought it would be easy, it was not, and in the end you hit the target. Third, one sentence uses difficult grammar and gets it right: “my throat was starting to hurt because I had been singing so much.”',
          zh: '有三件事做得很好。第一，文章很容易讀，因為所有事情都照時間順序寫，而且你會告訴讀者現在進行到哪裡：Next、After archery、After lunch、After that。第二，射箭那一段是一個有轉折的小故事：你以為很簡單，結果並不簡單，最後你還是射中了靶。第三，有一句用了比較難的文法，而且用對了：「my throat was starting to hurt because I had been singing so much.」',
        },

        // ------------------------------------------------------------ A
        {
          t: 'part',
          id: 's2-a',
          n: 'A',
          en: 'Four sentences, fixed',
          zh: '四個句子，修過一遍',
        },

        {
          t: 'fix',
          id: 's2-fix',
          en: 'Your own sentences, repaired',
          zh: '你自己的句子，修過一遍',
          hintEn: 'These four sentences are exactly as you wrote them. Each one has something that needs a repair. Try to find it yourself first, then tap the sentence to check.',
          hintZh: '這四個句子和你寫的一模一樣，每一句都有一個需要修正的地方。先自己找找看，再點一下句子對答案。',
          items: [
            {
              wrong: 'This Friday, our class went on a school field trip to the Hunter School in Wulai.',
              right: 'Last Friday, our class went on a field trip to the Hunter School in Wulai.',
              whyEn: '“This Friday” usually means the Friday that is coming. The trip is finished, so the reader needs “Last Friday”, or simply “On Friday”. “School” can go too: a class trip is already a school trip.',
              whyZh: 'This Friday 通常指「即將到來的這個星期五」。這趟校外教學已經結束了，所以讀者需要的是 Last Friday，或直接說 On Friday。school 也可以拿掉：班上的校外教學本來就是學校的活動。',
            },
            {
              wrong: 'They also played some activities with us and taught us traditional dances.',
              right: 'They also played some games with us and taught us traditional dances.',
              whyEn: 'In English you play a game, but you do an activity. So it is “played some games with us” or “did some activities with us”. The verb and the noun have to match.',
              whyZh: '英文裡，game 用 play，activity 用 do。所以是「played some games with us」或「did some activities with us」，動詞和名詞要搭配。',
            },
            {
              wrong: 'They showed us two kinds of traps. Small traps and large traps.',
              right: 'They showed us two kinds of traps: small ones and large ones.',
              whyEn: '“Small traps and large traps.” has no verb, so it is not a sentence. It is a list that belongs to the sentence before it. Join them with a colon. “Ones” then saves you from writing “traps” three times.',
              whyZh: '「Small traps and large traps.」沒有動詞，所以不是一個完整的句子，而是屬於前一句的「清單」。用冒號把它接回去。另外用 ones 代替，就不必把 traps 寫三次。',
            },
            {
              wrong: 'However, I finished all my meat before the food was even served because it was just too delicious.',
              right: 'However, I finished all of my meat before the rest of the food was even served because it was just so delicious.',
              whyEn: 'Two repairs. The meat is food too, so what had not arrived yet was “the rest of the food”. And “too delicious” says there was a problem with how good it was. You mean it was very good, and the word for that is “so”. The note below explains.',
              whyZh: '這句有兩個修正。肉本身也是 food，所以還沒上桌的是「the rest of the food」（其他的菜）。另外，too delicious 的意思是「好吃到出問題」；你想說的是「非常好吃」，那要用 so。下面的說明會解釋。',
            },
          ],
        },

        {
          t: 'note',
          id: 's2-too',
          en: 'too delicious, or so delicious?',
          zh: 'too delicious 還是 so delicious？',
          bodyEn: 'In Chinese, 太好吃了 is praise. In English, “too” means more than is good, and something bad usually follows: “I was too tired to dance.” “The soup was too hot to drink.” When you only want to say “very, very”, use “so” or “really”: “It was so delicious.” “So” has one more use that is worth learning. Add “that” and you can give the result in the same sentence: “The meat was so delicious that I finished it before lunch was served.” “I was so tired that I already wanted to go home.”',
          bodyZh: '中文的「太好吃了」是稱讚。但英文的 too 意思是「超過了好的程度」，後面通常跟著不好的結果：「I was too tired to dance.」（太累了，沒辦法跳舞。）「The soup was too hot to drink.」（湯太燙，沒辦法喝。）如果只是想說「非常、非常」，就用 so 或 really：「It was so delicious.」so 還有一個值得學的用法：加上 that，就可以在同一句裡把結果說出來：「The meat was so delicious that I finished it before lunch was served.」「I was so tired that I already wanted to go home.」',
        },

        // ------------------------------------------------------------ B
        {
          t: 'part',
          id: 's2-b',
          n: 'B',
          en: 'The revised version',
          zh: '修改後的版本',
        },

        {
          t: 'note',
          en: 'What changed, and what did not',
          zh: '改了什麼，沒改什麼',
          bodyEn: 'The ideas, the order and the voice are still yours. Nothing was added that you did not write about. Three things changed: the four repairs from Part A, a few words that are more exact, and fewer repeated words. Read it once for the story. Then read it again and count how many times you can find “However”.',
          bodyZh: '想法、順序和語氣都還是你的，沒有加進任何你沒寫到的事。改的有三件事：A 部分的四個修正、幾個更精確的用字，以及減少重複的字。先讀一遍，看故事；再讀一遍，數數看 However 出現了幾次。',
        },

        {
          t: 'timeline',
          en: 'The day, in eight stops',
          zh: '這一天的八站',
          hintEn: 'The orange words are the signposts in the essay. They tell a reader where in the day they are.',
          hintZh: '橘色的字是文章裡的「路標」，讓讀者知道現在講到這一天的哪一段。',
          items: [
            { icon: 'bus', word: 'On the bus', en: 'Singing all the way there', zh: '一路唱歌' },
            { icon: 'talk', word: 'First', en: 'Atayal words, games and dances', zh: '泰雅語、遊戲和舞蹈' },
            { icon: 'bamboo', word: 'Next', en: 'Making bamboo rice', zh: '做竹筒飯' },
            { icon: 'target', word: 'After that', en: 'Trying archery', zh: '射箭' },
            { icon: 'flame', word: 'After archery', en: 'Barbecuing wild boar', zh: '烤山豬肉' },
            { icon: 'trap', word: 'After lunch', en: 'Making traps', zh: '做陷阱' },
            { icon: 'star', word: 'After that', en: 'The show, then mochi', zh: '表演，還有麻糬' },
            { icon: 'bus', word: 'The whole way back', en: 'Singing again', zh: '又唱了一路' },
          ],
        },

        {
          t: 'summary',
          n: '1',
          titleEn: 'The bus, and a welcome',
          titleZh: '遊覽車上，和抵達之後',
          en: 'Last Friday, our class went on a field trip to the Hunter School in Wulai. On the bus, we sang songs all the way there, and everyone was having a great time. By the time we got off the bus, though, I was so tired that I already wanted to go home. First, our Atayal hosts taught us some words in their language. They also played some games with us and taught us traditional dances. My friends and I even got up to dance with them. I thought it was pretty fun.',
          zh: '上個星期五，我們班去烏來的獵人學校校外教學。在車上，我們一路唱歌唱到目的地，每個人都玩得很開心。不過，等到下車的時候，我已經累到想回家了。首先，接待我們的泰雅族人教了我們幾個他們語言裡的單字。他們還和我們玩了一些遊戲，教我們跳傳統舞蹈。我和朋友甚至站起來和他們一起跳。我覺得滿好玩的。',
        },

        {
          t: 'summary',
          n: '2',
          titleEn: 'Bamboo rice and archery',
          titleZh: '竹筒飯和射箭',
          en: 'Next, we learned how to make bamboo rice. We cut the bamboo, put the rice inside, added water, and then steamed it. We did everything by ourselves. After that, we tried archery. At first, I thought archery would be easy and that I could hit the target without much effort. After trying it, though, I realized it was much harder than I had expected. I couldn’t even hit the target with my first three arrows. Then I gradually learned how to control the bow, and I finally managed to hit the target.',
          zh: '接下來，我們學做竹筒飯。我們砍竹子、把米放進去、加水，然後拿去蒸，全部都是自己動手做的。之後，我們去試射箭。一開始我以為射箭很簡單，不用花什麼力氣就能射中靶。不過試了之後，我才發現它比我原本想的難很多，前三支箭甚至連靶都沒射中。後來我漸漸學會怎麼控制弓，最後終於射中了靶。',
        },

        {
          t: 'summary',
          n: '3',
          titleEn: 'Wild boar and traps',
          titleZh: '山豬肉和陷阱',
          en: 'After archery, we barbecued wild boar. Instead of using a regular grill, they gave each of us a long metal skewer to roast a whole piece of meat on. We had planned to cut the meat into smaller pieces, put it on the table, and eat it later with the vegetables and bamboo rice. However, I finished all of my meat before the rest of the food was even served because it was just so delicious. After lunch, we learned how to make the traps that hunters use in the mountains. They showed us two kinds of traps: small ones and large ones. The small traps are used to catch animals like wild chickens, while the large ones use stronger wire to hold an animal more firmly.',
          zh: '射箭之後，我們烤山豬肉。他們不是用一般的烤肉架，而是給我們每人一支長長的鐵叉，把一整塊肉串在上面烤。我們原本打算把肉切成小塊、放到桌上，晚一點再配蔬菜和竹筒飯一起吃。可是，其他的菜都還沒上桌，我就把自己的肉全部吃完了，因為實在太好吃了。午餐後，我們學做獵人在山上使用的陷阱。他們給我們看了兩種陷阱：小的和大的。小陷阱用來抓像山雞這樣的動物，大陷阱則用比較粗的鐵絲，把動物套得更牢。',
        },

        {
          t: 'summary',
          n: '4',
          titleEn: 'The show, and the ride home',
          titleZh: '表演，和回程',
          en: 'After that, it was time for the performances. My friend and I went on stage to perform a dance, and some other students sang. Everyone enjoyed the show. Later, we ate mochi with peanut powder, which was really tasty, too. We sang on the bus the whole way back. By the end of the trip, my throat was starting to hurt because I had been singing so much. Even so, I thought the field trip was really fun. I got to try many new things, and I hope we can have another experience like this in the future.',
          zh: '之後就是表演時間。我和朋友上台表演了一支舞，其他一些同學則唱了歌，大家都看得很開心。後來我們吃了沾花生粉的麻糬，也非常好吃。回程我們在車上一路唱歌。到了這趟行程快結束時，我的喉嚨開始痛了，因為我一直唱個不停。即使如此，我還是覺得這次校外教學非常好玩。我嘗試了很多新的東西，希望以後還能有這樣的體驗。',
        },

        {
          t: 'mcq',
          en: 'Did you get it?',
          zh: '你讀懂了嗎？',
          hintEn: 'Eight questions on the revised essay. If the Chinese is showing, hide it first with the 中文 switch. A wrong answer fades and the question stays open, so try again.',
          hintZh: '關於修改後文章的八個問題。如果中文是開著的，先用「中文」按鈕把它藏起來。答錯的選項會變淡，題目仍然開著，可以再試一次。',
          items: [
            {
              q: 'How did the writer feel when the class got off the bus?',
              qZh: '全班下車的時候，作者有什麼感覺？',
              options: [
                'Excited to start the activities',
                'So tired that he already wanted to go home',
                'Hungry and ready for lunch',
              ],
              answer: 1,
            },
            {
              q: 'What did the Atayal hosts teach the class first?',
              qZh: '泰雅族的接待人員最先教了全班什麼？',
              options: [
                'Some words in their language',
                'How to shoot an arrow',
                'How to set a trap',
              ],
              answer: 0,
            },
            {
              q: 'Who made the bamboo rice?',
              qZh: '竹筒飯是誰做的？',
              options: [
                'The hosts made it for the class',
                'The teachers made it',
                'The students did everything by themselves',
              ],
              answer: 2,
            },
            {
              q: 'What happened with his first three arrows?',
              qZh: '他的前三支箭怎麼了？',
              options: [
                'All three hit the target',
                'None of them hit the target',
                'One of them broke',
              ],
              answer: 1,
            },
            {
              q: 'What was the original plan for the meat?',
              qZh: '那塊肉原本的計畫是什麼？',
              options: [
                'To cut it up and eat it later with the vegetables and bamboo rice',
                'To eat it straight from the skewer',
                'To take it home',
              ],
              answer: 0,
            },
            {
              q: 'How are the large traps different from the small ones?',
              qZh: '大陷阱和小陷阱有什麼不同？',
              options: [
                'They are only used for wild chickens',
                'They are made of bamboo',
                'They use stronger wire to hold an animal more firmly',
              ],
              answer: 2,
            },
            {
              q: 'Why was his throat starting to hurt by the end of the trip?',
              qZh: '行程快結束時，他的喉嚨為什麼開始痛？',
              options: [
                'He had eaten too much mochi',
                'He had been singing so much',
                'He had caught a cold in the mountains',
              ],
              answer: 1,
            },
            {
              q: 'The last paragraph says: “my throat was starting to hurt… Even so, I thought the field trip was really fun.” What does “Even so” tell the reader?',
              qZh: '最後一段寫道：「my throat was starting to hurt… Even so, I thought the field trip was really fun.」Even so 告訴讀者什麼？',
              options: [
                'The sore throat is the reason the trip was fun',
                'The trip was fun in spite of the sore throat',
                'The trip stopped being fun when his throat hurt',
              ],
              answer: 1,
              why: {
                en: '“Even so” means “that is true, but it does not change what comes next”. His throat really did hurt, and the trip was still fun. It does the same job as “However”, with a little more feeling.',
                zh: 'Even so 的意思是「那是事實，但不影響接下來要說的事」。他的喉嚨確實痛了，而這趟行程還是很好玩。它的功能和 However 一樣，只是多了一點語氣。',
              },
            },
          ],
        },

        // ------------------------------------------------------------ C
        {
          t: 'part',
          id: 's2-c',
          n: 'C',
          en: 'Good → better',
          zh: '從不錯到更好',
        },

        {
          t: 'lead',
          en: 'These seven sentences were not wrong. A reader understands every one of them. The revised version is clearer, shorter, or uses a more exact word, so read the reason under each pair.',
          zh: '這七個句子本來並沒有錯，讀者每一句都看得懂。修改後的版本只是更清楚、更簡短，或用了更精確的字，所以請讀每一組下面的原因。',
        },

        {
          t: 'contrast',
          en: 'Your sentence, and the revision',
          zh: '你的句子，和修改後的句子',
          hintEn: 'On the left, your sentence. On the right, the revised one. Both sides have a speaker button. Say the right-hand one out loud.',
          hintZh: '左邊是你的句子，右邊是修改後的句子。兩邊都有喇叭按鈕可以聽。右邊那一句，請大聲唸出來。',
          coldEn: 'You wrote',
          coldZh: '你原本寫的',
          warmEn: 'Revised',
          warmZh: '修改後',
          items: [
            {
              caseEn: 'Tired before the day began',
              caseZh: '還沒開始就累了',
              cold: { en: 'However, when we got off the bus, I already wanted to go home because I was really tired.', zh: '然而，當我們下車時，我已經想回家了，因為我真的很累。' },
              warm: { en: 'By the time we got off the bus, though, I was so tired that I already wanted to go home.', zh: '不過，等到下車的時候，我已經累到想回家了。' },
              whyEn: '“By the time” shows that the tiredness built up during the ride. “So tired that” puts the cause and the result in one piece, which is stronger than “because I was really tired” added at the end.',
              whyZh: 'By the time 表示「累」是在車程中慢慢累積起來的。so tired that 把原因和結果放在同一塊，比在句尾補一句 because I was really tired 更有力。',
            },
            {
              caseEn: 'Who taught you',
              caseZh: '是誰教你們的',
              cold: { en: 'When we arrived, the Atayal people taught us some words in their local language.', zh: '我們抵達時，泰雅族人教了我們一些他們當地語言的單字。' },
              warm: { en: 'First, our Atayal hosts taught us some words in their language.', zh: '首先，接待我們的泰雅族人教了我們幾個他們語言裡的單字。' },
              whyEn: '“The Atayal people” means the whole people, not the few who welcomed you, so “our Atayal hosts” is more exact. “Local” is not needed: it is simply their language. And you had already arrived in the sentence before, so “First” moves the story on.',
              whyZh: 'the Atayal people 指的是「整個泰雅族」，不是接待你們的那幾位，所以 our Atayal hosts 比較精確。local 不需要：那就是「他們的語言」。另外，前一句你們已經到了，所以用 First 讓故事往下走。',
            },
            {
              caseEn: 'One “I thought” is enough',
              caseZh: 'I thought 說一次就夠',
              cold: { en: 'At first, I thought archery would be easy, and I thought I could hit the target without much effort.', zh: '一開始，我以為射箭很簡單，而且我以為我不用花什麼力氣就能射中靶。' },
              warm: { en: 'At first, I thought archery would be easy and that I could hit the target without much effort.', zh: '一開始，我以為射箭很簡單，不用花什麼力氣就能射中靶。' },
              whyEn: 'One “I thought” can carry two ideas. Join them with “and that”: I thought (that) it would be easy and that I could hit the target.',
              whyZh: '一個 I thought 可以帶兩個想法，用 and that 把它們接起來：I thought (that) it would be easy and that I could hit the target。',
            },
            {
              caseEn: 'Learning little by little',
              caseZh: '一點一點學會',
              cold: { en: 'Later, I slowly learned how to control the bow and finally managed to hit the target.', zh: '後來，我慢慢學會怎麼控制弓，最後終於射中了靶。' },
              warm: { en: 'Then I gradually learned how to control the bow, and I finally managed to hit the target.', zh: '後來我漸漸學會怎麼控制弓，最後終於射中了靶。' },
              whyEn: 'The same change as in your last essay. “Slowly” is about speed. “Gradually” means step by step, which is how a skill is learned.',
              whyZh: '和你上一篇文章一樣的修改。slowly 講的是「速度慢」；gradually 是「一步一步地」，學會一項技巧正是這樣的過程。',
            },
            {
              caseEn: 'The tool for the meat',
              caseZh: '烤肉用的工具',
              cold: { en: 'Instead of using a normal barbecue grill, they gave each of us a long metal stick to roast a whole piece of meat.', zh: '他們不是用一般的烤肉架，而是給我們每人一根長長的金屬棒來烤一整塊肉。' },
              warm: { en: 'Instead of using a regular grill, they gave each of us a long metal skewer to roast a whole piece of meat on.', zh: '他們不是用一般的烤肉架，而是給我們每人一支長長的鐵叉，把一整塊肉串在上面烤。' },
              whyEn: 'A stick you push through food to cook it has its own name: a skewer. “Regular grill” is the usual way to say “normal barbecue grill”. The small word “on” at the end is needed, because you roast the meat on the skewer.',
              whyZh: '用來把食物串起來烤的那根棒子有自己的名字：skewer。「一般的烤肉架」通常說 regular grill。句尾那個小小的 on 是必要的，因為肉是串「在」鐵叉上烤的。',
            },
            {
              caseEn: 'Two kinds of traps',
              caseZh: '兩種陷阱',
              cold: { en: 'Small traps were used to catch animals like wild chickens, while large traps used stronger wire to hold animals more firmly.', zh: '小陷阱被用來抓像山雞這樣的動物，而大陷阱使用較粗的鐵絲把動物套得更牢。' },
              warm: { en: 'The small traps are used to catch animals like wild chickens, while the large ones use stronger wire to hold an animal more firmly.', zh: '小陷阱用來抓像山雞這樣的動物，大陷阱則用比較粗的鐵絲，把動物套得更牢。' },
              whyEn: 'You are explaining how the traps work, and that is still true today, so the present tense fits: are used, use. “The” is needed because these are the two kinds you have just named.',
              whyZh: '你是在說明陷阱「怎麼運作」，這件事到今天仍然成立，所以用現在式：are used、use。另外要加 the，因為這就是你剛剛提到的那兩種陷阱。',
            },
            {
              caseEn: 'Singing all the way home',
              caseZh: '一路唱回家',
              cold: { en: 'On the way back, we sang songs on the bus the whole way.', zh: '回程路上，我們在車上一路唱歌。' },
              warm: { en: 'We sang on the bus the whole way back.', zh: '回程我們在車上一路唱歌。' },
              whyEn: '“On the way back” and “the whole way” say the same thing twice. “The whole way back” says it once. “Sang songs” can be just “sang”.',
              whyZh: 'On the way back 和 the whole way 把同一件事說了兩次，用 the whole way back 說一次就夠。sang songs 也可以只說 sang。',
            },
          ],
        },

        // ------------------------------------------------------------ D
        {
          t: 'part',
          id: 's2-d',
          n: 'D',
          en: 'Sixteen collocations',
          zh: '十六個搭配詞',
        },

        {
          t: 'lead',
          en: 'All sixteen are in your essay. Learn each one as a single piece, the same way as last time.',
          zh: '這十六個都出自你的文章。和上次一樣，把每一組當成「一整塊」來記。',
        },

        {
          t: 'phrases',
          en: 'The trip',
          zh: '這趟行程',
          items: [
            {
              en: 'go on a field trip',
              zh: '去校外教學',
              eg: 'Last Friday, our class went on a field trip to Wulai.',
              egZh: '上個星期五，我們班去烏來校外教學。',
            },
            {
              en: 'get off the bus',
              zh: '下車',
              eg: 'By the time we got off the bus, I was already tired.',
              egZh: '等到下車的時候，我已經累了。',
            },
            {
              en: 'have a great time',
              zh: '玩得很開心',
              eg: 'Everyone was having a great time on the bus.',
              egZh: '大家在車上都玩得很開心。',
            },
            {
              en: 'the whole way back',
              zh: '回程一路上',
              eg: 'We sang on the bus the whole way back.',
              egZh: '回程我們在車上一路唱歌。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Trying something new',
          zh: '嘗試新東西',
          items: [
            {
              en: 'learn how to make something',
              zh: '學會怎麼做某樣東西',
              eg: 'We learned how to make bamboo rice.',
              egZh: '我們學會了怎麼做竹筒飯。',
            },
            {
              en: 'try archery',
              zh: '嘗試射箭',
              eg: 'After that, we tried archery.',
              egZh: '之後，我們去試了射箭。',
            },
            {
              en: 'hit the target',
              zh: '射中靶',
              eg: 'I couldn’t even hit the target with my first three arrows.',
              egZh: '我的前三支箭甚至連靶都沒射中。',
            },
            {
              en: 'without much effort',
              zh: '不費什麼力氣',
              eg: 'I thought I could hit the target without much effort.',
              egZh: '我以為不用花什麼力氣就能射中靶。',
            },
            {
              en: 'manage to do something',
              zh: '終於做到某件事',
              eg: 'I finally managed to hit the target.',
              egZh: '我最後終於射中了靶。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Food',
          zh: '食物',
          items: [
            {
              en: 'make bamboo rice',
              zh: '做竹筒飯',
              eg: 'We made bamboo rice by ourselves.',
              egZh: '我們自己動手做了竹筒飯。',
            },
            {
              en: 'barbecue wild boar',
              zh: '烤山豬肉',
              eg: 'After archery, we barbecued wild boar.',
              egZh: '射箭之後，我們烤了山豬肉。',
            },
            {
              en: 'cut the meat into smaller pieces',
              zh: '把肉切成小塊',
              eg: 'We had planned to cut the meat into smaller pieces.',
              egZh: '我們原本打算把肉切成小塊。',
            },
            {
              en: 'serve the food',
              zh: '上菜',
              eg: 'I finished my meat before the rest of the food was served.',
              egZh: '其他的菜還沒上桌，我就把肉吃完了。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'On stage',
          zh: '舞台上',
          items: [
            {
              en: 'teach a traditional dance',
              zh: '教傳統舞蹈',
              eg: 'Our hosts taught us a traditional dance.',
              egZh: '接待我們的人教了我們一支傳統舞蹈。',
            },
            {
              en: 'go on stage',
              zh: '上台',
              eg: 'My friend and I went on stage together.',
              egZh: '我和朋友一起上了台。',
            },
            {
              en: 'perform a dance',
              zh: '表演舞蹈',
              eg: 'We went on stage to perform a dance.',
              egZh: '我們上台表演了一支舞。',
            },
          ],
        },

        {
          t: 'match',
          en: 'Put the halves together',
          zh: '把兩半接起來',
          hintEn: 'Tap a beginning on the left, then its ending on the right. A wrong pair shakes and lets go — try another.',
          hintZh: '先點左邊的開頭，再點右邊對應的結尾。配錯會晃一下然後放開，再試別的就好。',
          pairs: [
            { a: 'go on a field', b: 'trip' },
            { a: 'get off the', b: 'bus' },
            { a: 'shoot an', b: 'arrow' },
            { a: 'hit the target without much', b: 'effort' },
            { a: 'make bamboo', b: 'rice' },
            { a: 'cut the meat into smaller', b: 'pieces' },
            { a: 'go on stage to perform a', b: 'dance' },
            { a: 'sing on the bus the whole way', b: 'back' },
          ],
        },

        {
          t: 'gap',
          en: 'Choose the piece that fits',
          zh: '選出放得進去的那一個',
          hintEn: 'Eight sentences, one blank each. The reason appears when you get it right.',
          hintZh: '八個句子，每句一個空格。答對之後，原因就會出現。',
          items: [
            {
              text: '___ Friday, our class went on a field trip to Wulai.',
              textZh: '上個星期五，我們班去烏來校外教學。',
              options: ['This', 'Last', 'Next'],
              answer: 1,
              why: {
                en: 'The verb is “went”, so the trip is over. A Friday that is over is “last Friday”.',
                zh: '動詞是 went，表示這趟行程已經結束。已經過去的星期五是 last Friday。',
              },
            },
            {
              text: 'I was ___ tired that I already wanted to go home.',
              textZh: '我累到已經想回家了。',
              options: ['so', 'too', 'very'],
              answer: 0,
              why: {
                en: 'Only “so” can be followed by “that” and a result: so tired that…, so delicious that…',
                zh: '只有 so 後面可以接 that 和結果：so tired that…、so delicious that…。',
              },
            },
            {
              text: 'They also played some ___ with us.',
              textZh: '他們還和我們玩了一些遊戲。',
              options: ['activities', 'dances', 'games'],
              answer: 2,
              why: {
                en: 'You play a game. You do an activity, and you do or perform a dance.',
                zh: 'game 用 play；activity 用 do；dance 用 do 或 perform。',
              },
            },
            {
              text: 'It was much harder than I ___ expected.',
              textZh: '它比我原本想的難很多。',
              options: ['have', 'had', 'was'],
              answer: 1,
              why: {
                en: 'The expecting came before the trying, and the trying is already in the past. One step further back is the past perfect — the same rule as “had seen” in your first essay.',
                zh: '「預期」發生在「嘗試」之前，而「嘗試」本身已經是過去的事。再往前退一步，就是過去完成式——和你第一篇文章裡的 had seen 是同一條規則。',
              },
            },
            {
              text: 'I couldn’t ___ hit the target with my first three arrows.',
              textZh: '我的前三支箭甚至連靶都沒射中。',
              options: ['even', 'ever', 'either'],
              answer: 0,
              why: {
                en: '“Even” shows surprise at how far something goes. Hitting the target is the easy part, and you could not do even that.',
                zh: 'even 表示對「程度」感到意外：射中靶本來是最基本的，結果連這個都做不到。',
              },
            },
            {
              text: 'I finally managed ___ the target.',
              textZh: '我最後終於射中了靶。',
              options: ['hitting', 'hit', 'to hit'],
              answer: 2,
              why: {
                en: '“Manage” is followed by to + verb: manage to hit, manage to finish, manage to stay awake.',
                zh: 'manage 後面接 to + 原形動詞：manage to hit、manage to finish、manage to stay awake。',
              },
            },
            {
              text: 'We had planned to cut the meat ___ smaller pieces.',
              textZh: '我們原本打算把肉切成小塊。',
              options: ['to', 'into', 'in'],
              answer: 1,
              why: {
                en: 'When one thing becomes several pieces, the word is “into”: cut it into pieces, break it into two, divide the class into groups.',
                zh: '一個東西變成好幾塊時，用 into：cut it into pieces、break it into two、divide the class into groups。',
              },
            },
            {
              text: 'My throat was starting to hurt because I had been ___ so much.',
              textZh: '我的喉嚨開始痛了，因為我一直唱個不停。',
              options: ['sang', 'sung', 'singing'],
              answer: 2,
              why: {
                en: '“Had been + -ing” is for something that went on and on up to a point in the past. You wrote this one correctly yourself.',
                zh: 'had been + -ing 用來表示「一直持續到過去某個時間點」的動作。這一句是你自己寫對的。',
              },
            },
          ],
        },

        // ------------------------------------------------------------ E
        {
          t: 'part',
          id: 's2-e',
          n: 'E',
          en: 'Say it once, then say it another way',
          zh: '說過一次，下次換個說法',
        },

        {
          t: 'lead',
          en: 'Your essay used “However” four times and “delicious” three times. A word is strong the first time. By the fourth time, the reader starts counting. The revised version keeps one of each and changes the rest. Here is what to use instead.',
          zh: '你的文章用了四次 However、三次 delicious。一個字第一次出現時很有力；到了第四次，讀者就開始數了。修改後的版本各只留下一個，其他的都換掉了。以下是可以替換的說法。',
        },

        {
          t: 'phrases',
          en: 'Instead of “However”',
          zh: '代替 However',
          items: [
            {
              en: 'but',
              zh: '但是（把兩個子句連在同一句裡）',
              eg: 'I was tired, but I still danced with them.',
              egZh: '我很累，但我還是和他們一起跳了舞。',
            },
            {
              en: 'though',
              zh: '不過（放在句中或句尾，比較口語）',
              eg: 'After trying it, though, I realized it was much harder than I had expected.',
              egZh: '不過試了之後，我才發現它比我原本想的難很多。',
            },
            {
              en: 'even so',
              zh: '即使如此',
              eg: 'My throat was starting to hurt. Even so, I thought the trip was really fun.',
              egZh: '我的喉嚨開始痛了。即使如此，我還是覺得這趟行程非常好玩。',
            },
            {
              en: 'although',
              zh: '雖然（放在句首，後面不要再加 but）',
              eg: 'Although I was tired, I had a great time.',
              egZh: '雖然我很累，還是玩得很開心。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Instead of “delicious”',
          zh: '代替 delicious',
          items: [
            {
              en: 'tasty',
              zh: '好吃的',
              eg: 'The mochi with peanut powder was really tasty.',
              egZh: '沾花生粉的麻糬真的很好吃。',
            },
            {
              en: 'It tasted amazing.',
              zh: '吃起來超棒。',
              eg: 'We roasted the meat ourselves, and it tasted amazing.',
              egZh: '肉是我們自己烤的，吃起來超棒。',
            },
            {
              en: 'I couldn’t stop eating it.',
              zh: '我停不下來，一直吃。',
              eg: 'The wild boar was so good that I couldn’t stop eating it.',
              egZh: '山豬肉好吃到我停不下來。',
            },
          ],
        },

        {
          t: 'gap',
          en: 'Which one fits the sentence?',
          zh: '哪一個放得進這個句子？',
          hintEn: 'All of these words mean something like “but”. They do not all fit in the same place. Look at the punctuation.',
          hintZh: '這些字的意思都接近「但是」，但是能放的位置不一樣。注意看標點符號。',
          items: [
            {
              text: 'I was tired, ___ I still danced with them.',
              textZh: '我很累，但我還是和他們一起跳了舞。',
              options: ['however', 'but', 'even so'],
              answer: 1,
              why: {
                en: 'After a comma, in the middle of one sentence, use “but”. “However” and “even so” start a new sentence.',
                zh: '逗號後面、在同一句的中間，要用 but。However 和 even so 則是用來開始一個新的句子。',
              },
            },
            {
              text: 'Archery looked easy. It was much harder than I had expected, ___.',
              textZh: '射箭看起來很簡單，不過它比我原本想的難很多。',
              options: ['but', 'although', 'though'],
              answer: 2,
              why: {
                en: 'Only “though” can sit at the very end of a sentence. It sounds relaxed, the way people speak.',
                zh: '只有 though 可以放在句子的最後面。這種說法聽起來比較輕鬆，像平常講話的方式。',
              },
            },
            {
              text: 'My throat was starting to hurt. ___, I thought the trip was really fun.',
              textZh: '我的喉嚨開始痛了。即使如此，我還是覺得這趟行程非常好玩。',
              options: ['Even so', 'Although', 'But so'],
              answer: 0,
              why: {
                en: '“Even so” starts a new sentence and takes a comma. “Although” cannot stand alone before a comma like this.',
                zh: 'Even so 用來開始一個新句子，後面加逗號。Although 不能像這樣單獨放在逗號前面。',
              },
            },
            {
              text: '___ I was tired, I had a great time.',
              textZh: '雖然我很累，還是玩得很開心。',
              options: ['However', 'But', 'Although'],
              answer: 2,
              why: {
                en: '“Although” joins two clauses in one sentence. English uses one connector here, not two — never “Although…, but…”.',
                zh: 'Although 把兩個子句連在同一句裡。英文在這裡只用一個連接詞，不會用兩個——絕對不寫「Although…, but…」。',
              },
            },
          ],
        },

        // ------------------------------------------------------------ F
        {
          t: 'part',
          id: 's2-f',
          n: 'F',
          en: 'Talk about it',
          zh: '說說看',
        },

        {
          t: 'discuss',
          en: 'Five follow-up questions',
          zh: '五個延伸問題',
          items: [
            {
              en: 'Which activity at the Hunter School did you enjoy the most, and why?',
              zh: '在獵人學校的活動裡，你最喜歡哪一個？為什麼？',
              starters: [
                { en: 'The activity I enjoyed the most was…', zh: '我最喜歡的活動是……' },
                { en: 'What made it fun was…', zh: '它好玩的地方在於……' },
                { en: 'I had never… before, so…', zh: '我以前從來沒有……過，所以……' },
              ],
            },
            {
              en: 'You thought archery would be easy, and it was not. Tell me about another time when something was harder than you had expected.',
              zh: '你以為射箭很簡單，結果並不簡單。說說另一次「比你原本想的還難」的經驗。',
              starters: [
                { en: 'At first, I thought… would be easy.', zh: '一開始，我以為……很簡單。' },
                { en: 'After trying it, though, I realized…', zh: '不過試了之後，我才發現……' },
                { en: 'In the end, I managed to…', zh: '最後，我終於……' },
              ],
            },
            {
              en: 'What did you learn about Atayal culture that you did not know before the trip?',
              zh: '關於泰雅族的文化，你學到了哪些這次去之前不知道的事？',
              starters: [
                { en: 'Before the trip, I didn’t know that…', zh: '這次去之前，我不知道……' },
                { en: 'Our hosts showed us how to…', zh: '接待我們的人示範了怎麼……' },
                { en: 'What surprised me was…', zh: '讓我驚訝的是……' },
              ],
            },
            {
              en: 'You finished your meat before the rest of the food was served. What is a food you cannot stop eating, and what makes it so good?',
              zh: '其他的菜還沒上桌，你就把肉吃完了。有什麼食物是你一吃就停不下來的？它為什麼這麼好吃？',
              starters: [
                { en: 'I can’t stop eating…', zh: '我一吃……就停不下來。' },
                { en: 'It is so… that…', zh: '它……到……' },
                { en: 'The best one I have ever had was…', zh: '我吃過最好吃的一次是……' },
              ],
            },
            {
              en: 'If you could plan the next class field trip, where would you go, and what would the class do there?',
              zh: '如果下一次的校外教學由你來規劃，你會去哪裡？全班會在那裡做什麼？',
              starters: [
                { en: 'I would take the class to…', zh: '我會帶全班去……' },
                { en: 'First, we would… After that, we would…', zh: '首先，我們會……；之後，我們會……' },
                { en: 'I think everyone would have a great time because…', zh: '我覺得大家都會玩得很開心，因為……' },
              ],
            },
          ],
        },

        {
          t: 'steps',
          en: 'The archery story, in three moves',
          zh: '射箭的故事，三個步驟',
          hintEn: 'This is why your archery paragraph works. The first topic below asks you to use the same three moves.',
          hintZh: '這就是你射箭那一段寫得好的原因。下面的第一個題目，就是請你用同樣的三個步驟。',
          items: [
            {
              titleEn: 'What you expected',
              titleZh: '原本以為',
              en: 'At first, I thought archery would be easy.',
              zh: '一開始，我以為射箭很簡單。',
            },
            {
              titleEn: 'What really happened',
              titleZh: '實際上',
              en: 'After trying it, though, I realized it was much harder than I had expected.',
              zh: '不過試了之後，我才發現它比我原本想的難很多。',
            },
            {
              titleEn: 'How it ended',
              titleZh: '最後',
              en: 'I finally managed to hit the target.',
              zh: '我最後終於射中了靶。',
            },
          ],
        },

        {
          t: 'task',
          en: 'Tell it again, without repeating yourself',
          zh: '再說一次，不要重複',
          instructionEn: 'Choose one topic. Write six to eight sentences, or say them out loud for about one minute. Two rules: use “However” only once, and do not use the same describing word twice. Use at least three phrases from the tick-list.',
          instructionZh: '選一個題目，寫六到八句話，或是開口說大約一分鐘。兩條規則：However 只能用一次，而且同一個形容詞不要用兩次。至少用上「目標片語」裡的三個。',
          prompts: [
            {
              en: 'Tell the story of the archery again: what you expected, what really happened, and how it ended.',
              zh: '把射箭那一段重新說一次：你原本以為怎樣、實際上發生了什麼、最後結果如何。',
            },
            {
              en: 'Describe the lunch at the Hunter School to someone who was not there.',
              zh: '向一個沒去的人，描述獵人學校的那頓午餐。',
            },
            {
              en: 'Another school trip or class activity you remember well.',
              zh: '另一次讓你印象深刻的校外教學或班級活動。',
            },
            {
              en: 'Something you tried for the first time this year.',
              zh: '今年你第一次嘗試的一件事。',
            },
          ],
          checklist: [
            { en: 'go on a field trip', zh: '去校外教學' },
            { en: 'learn how to', zh: '學會怎麼……' },
            { en: 'without much effort', zh: '不費什麼力氣' },
            { en: 'harder than I had expected', zh: '比我原本想的還難' },
            { en: 'manage to', zh: '終於做到……' },
            { en: 'so … that …', zh: '如此……以致於……' },
            { en: 'even so', zh: '即使如此' },
            { en: 'have a great time', zh: '玩得很開心' },
          ],
          frames: [
            {
              en: 'At first, I thought… would be easy.',
              zh: '一開始，我以為……很簡單。',
            },
            {
              en: 'After trying it, though, I realized it was much harder than I had expected.',
              zh: '不過試了之後，我才發現它比我原本想的難很多。',
            },
            {
              en: 'It was so… that I…',
              zh: '它……到我……',
            },
            {
              en: 'Even so, I thought it was really fun.',
              zh: '即使如此，我還是覺得非常好玩。',
            },
          ],
        },

        // ------------------------------------------------------------ G
        {
          t: 'part',
          id: 's2-g',
          n: 'G',
          en: 'The first time: your mother’s photos',
          zh: '第一次：媽媽的照片',
        },

        {
          t: 'lead',
          en: 'Last Friday was not your first Atayal experience. Your mother sent these photos from a trip she organized when you were little. They are a good reason to practice a different kind of sentence: one that compares then and now.',
          zh: '上個星期五並不是你第一次參加泰雅體驗。媽媽傳來了這些照片，是你小時候她揪團去的那一次。這正好可以用來練習另一種句子：比較「那時候」和「現在」。',
        },

        {
          t: 'photos',
          en: 'Photos from the first trip',
          zh: '第一次去的照片',
          hintEn: 'Tap a photo to see it larger. Every caption is in the past tense, and two of them use the passive: was cooked, were aimed.',
          hintZh: '點照片可以放大。每一句說明都是過去式，其中兩句用了被動語態：was cooked、were aimed。',
          quote: {
            en: '“Hank, when you were little, I also got a group together and took a lot of your kindergarten classmates to this Atayal experience.”',
            zh: '「Hank 你小時候，我也開團揪過你很多幼稚園同學去這個泰雅體驗欸。」',
            by: 'your mother 你媽媽',
          },
          items: [
            {
              src: 'img/s2-stone.jpg',
              w: 750,
              h: 1000,
              alt: 'Slices of pork and a row of sausages cooking on a flat, hot stone, with smoke rising.',
              en: 'The meat was cooked on a hot stone.',
              zh: '肉是放在熱石板上烤的。',
            },
            {
              src: 'img/s2-clothes.jpg',
              w: 750,
              h: 1000,
              alt: 'A boy wearing a red striped Atayal cloth and a patterned headband, with a guide standing behind him.',
              en: 'Everyone tried on Atayal clothes and a headband.',
              zh: '每個人都試穿了泰雅族的服飾和頭帶。',
            },
            {
              src: 'img/s2-string.jpg',
              w: 750,
              h: 1000,
              alt: 'A young man helping a boy tie a string to a thin stick standing in a garden.',
              en: 'Tying the string needed some help.',
              zh: '綁繩子需要有人幫忙。',
            },
            {
              src: 'img/s2-archery.jpg',
              w: 749,
              h: 1000,
              alt: 'A child drawing a bow toward a row of paper targets printed with wild boars.',
              en: 'The arrows were aimed at wild boar targets.',
              zh: '箭瞄準的是山豬靶。',
            },
            {
              src: 'img/s2-climb.jpg',
              w: 750,
              h: 1000,
              alt: 'A boy in a helmet and a harness hanging from climbing ropes among tall trees, making a peace sign.',
              en: 'The ropes went high up into the trees.',
              zh: '繩子一路往上，通到高高的樹上。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Then and now',
          zh: '那時候與現在',
          items: [
            {
              en: 'when I was little',
              zh: '我小時候',
              eg: 'When I was little, my mother took me on a trip like this.',
              egZh: '我小時候，媽媽帶我參加過像這樣的行程。',
            },
            {
              en: 'back then',
              zh: '那時候',
              eg: 'Back then, the meat was cooked on a hot stone.',
              egZh: '那時候，肉是放在熱石板上烤的。',
            },
            {
              en: 'used to',
              zh: '以前（現在已經不是了）',
              eg: 'I used to be much shorter than I am now.',
              egZh: '我以前比現在矮很多。',
            },
            {
              en: 'had been there before',
              zh: '（在那之前）已經去過',
              eg: 'I had been to an Atayal experience before, so some things felt familiar.',
              egZh: '我之前就參加過泰雅體驗，所以有些東西感覺很熟悉。',
            },
            {
              en: 'get a group together',
              zh: '揪團、找一群人一起',
              eg: 'My mother got a group together and took us to the mountains.',
              egZh: '媽媽揪了一群人，帶我們到山上去。',
            },
            {
              en: 'remind me of',
              zh: '讓我想起',
              eg: 'These photos remind me of my first trip.',
              egZh: '這些照片讓我想起第一次去的時候。',
            },
          ],
        },

        {
          t: 'note',
          en: 'used to, or had been?',
          zh: 'used to 還是 had been？',
          bodyEn: 'Both look back, but at different things. “Used to” is for something that was true for a long time and is not true now: “I used to be shorter.” “I used to cry on school trips.” “Had been” is for one earlier event that came before another past event: “When we arrived last Friday, I had been there before.” A quick check: if you can add “but not anymore”, use “used to”. If you can add “before that”, use “had been”.',
          bodyZh: '兩個都是回頭看，但看的東西不一樣。used to 用在「以前有很長一段時間是這樣，現在不是了」：「I used to be shorter.」「I used to cry on school trips.」had been 則用在「比過去某件事更早發生的一件事」：「When we arrived last Friday, I had been there before.」快速檢查法：如果句子後面可以加 but not anymore（但現在不是了），用 used to；如果可以加 before that（在那之前），用 had been。',
        },

        {
          t: 'gap',
          en: 'Then, or now?',
          zh: '那時候，還是現在？',
          hintEn: 'Four sentences about the first trip. The reason appears when you get it right.',
          hintZh: '四個關於第一次去的句子。答對之後，原因就會出現。',
          items: [
            {
              text: 'Back then, the meat ___ cooked on a hot stone.',
              textZh: '那時候，肉是放在熱石板上烤的。',
              options: ['is', 'was', 'were'],
              answer: 1,
              why: {
                en: '“Back then” puts the sentence in the past, and “meat” is uncountable, so it takes “was”. The meat did not cook itself: it was cooked.',
                zh: 'Back then 把句子放在過去；meat 是不可數名詞，所以用 was。肉不會自己烤自己，所以是被動：it was cooked。',
              },
            },
            {
              text: 'I ___ be much shorter than I am now.',
              textZh: '我以前比現在矮很多。',
              options: ['used to', 'use to', 'was used to'],
              answer: 0,
              why: {
                en: '“Used to” + verb is for something true in the past and not true now. It keeps its -d. “Was used to” means something else: being familiar with something.',
                zh: 'used to + 原形動詞，用在「以前是這樣、現在不是」的事。字尾的 -d 要留著。was used to 是另一個意思：「習慣於」某件事。',
              },
            },
            {
              text: 'When we arrived last Friday, I ___ been to an Atayal experience before.',
              textZh: '上個星期五我們抵達時，我之前就已經參加過泰雅體驗了。',
              options: ['have', 'was', 'had'],
              answer: 2,
              why: {
                en: 'Two past times: arriving last Friday, and the first trip before that. The earlier one takes “had”. This is the third time this rule has turned up in this notebook.',
                zh: '這裡有兩個過去的時間點：上星期五抵達，以及在那之前的第一次。比較早的那個用 had。這條規則已經是第三次出現在這本筆記裡了。',
              },
            },
            {
              text: 'These photos remind me ___ my first trip.',
              textZh: '這些照片讓我想起第一次去的時候。',
              options: ['about', 'of', 'to'],
              answer: 1,
              why: {
                en: 'A photo, a song or a smell “reminds you of” something. “Remind me to” is different: it comes before a verb, for something you must not forget to do.',
                zh: '照片、歌曲、氣味「讓你想起」某件事，用 remind you of。remind me to 則不一樣：後面接動詞，用在「提醒我去做」某件事。',
              },
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Four questions about the photos',
          zh: '關於照片的四個問題',
          items: [
            {
              en: 'Look at the photos. What do you remember about that day, and what had you forgotten?',
              zh: '看看這些照片。那一天的事你還記得什麼？有哪些是你已經忘記的？',
              starters: [
                { en: 'I remember…', zh: '我記得……' },
                { en: 'I had forgotten that…', zh: '我已經忘了……' },
                { en: 'I don’t remember… at all.', zh: '我完全不記得……' },
              ],
            },
            {
              en: 'Which activities did you do both times, and which were new last Friday?',
              zh: '哪些活動兩次都有做？哪些是上星期五才第一次做的？',
              starters: [
                { en: 'Both times, we…', zh: '兩次我們都……' },
                { en: 'Back then, we…, but this time we…', zh: '那時候我們……，但這次我們……' },
                { en: 'Last Friday was the first time I…', zh: '上星期五是我第一次……' },
              ],
            },
            {
              en: 'In one photo, the meat is cooking on a hot stone. Last Friday you used a metal skewer. Which way is better, and why?',
              zh: '有一張照片裡，肉是放在熱石板上烤的；上星期五你用的是鐵叉。哪一種方式比較好？為什麼？',
              starters: [
                { en: 'I prefer…, because…', zh: '我比較喜歡……，因為……' },
                { en: 'On a stone, the meat…', zh: '放在石板上，肉會……' },
                { en: 'With a skewer, you can…', zh: '用鐵叉的話，你可以……' },
              ],
            },
            {
              en: 'Your mother organized that trip for your kindergarten classmates. What would you like to ask her about it?',
              zh: '那次是媽媽替你的幼稚園同學揪團的。關於那次行程，你想問她什麼？',
              starters: [
                { en: 'I would ask her why…', zh: '我會問她為什麼……' },
                { en: 'I want to know who…', zh: '我想知道誰……' },
                { en: 'Did I really…?', zh: '我真的……嗎？' },
              ],
            },
          ],
        },

        {
          t: 'quote',
          en: 'I got to try many new things, and I hope we can have another experience like this in the future.',
          zh: '我嘗試了很多新的東西，希望以後還能有這樣的體驗。',
          by: 'the last line of your essay 你這篇文章的最後一句',
        },
      ],
    },
  ],
};
