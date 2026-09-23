/* Watch and Practise — listening and speaking built on short YouTube clips.

   This page is an engine plus data, the same as the notebooks in this repo:
   `render.js` never changes, and a new lesson is one more entry in `LESSONS`
   below. Put a new lesson at the TOP of the array — the newest clip is the one
   being taught, and the older ones stay reachable from the ☰ Clips list.

   `id` must be unique and URL-safe: it becomes the anchor, so
   /video/#coffee-chat opens that clip straight away.

   WHY THE TRANSCRIPT IS WRITTEN HERE BY HAND
   ------------------------------------------
   A page like this cannot fetch a video's captions. YouTube's caption endpoint
   refuses cross-origin requests and is signature-gated, and the official API
   only hands captions to the account that owns the video. So the transcript is
   authored data, exactly like every other line of English in this repo.

   The five-minute routine: open the clip on YouTube, "…more" under the title,
   "Show transcript", turn OFF "Toggle timestamps" if you only want the words,
   copy the panel, and paste it in. Auto-captions have no punctuation and get
   names and numbers wrong, so they are a first draft, not the lesson — read
   them against the audio once before teaching from them.

   ADDING A NEW VIDEO
   ------------------
   Lessons from the same video must sit TOGETHER in the array. The clip list
   groups consecutive lessons that share a videoId under one source line, so
   interleaving two videos produces the same heading twice with the clips split
   between them. Keep each video's run unbroken and add a new video's lessons
   as a block at the top.

   Check three things before writing anything:

     1. It plays inside another page. An uploader can forbid embedding, and such
        a video plays perfectly on YouTube while showing an error here.
     2. It has captions at all — without them there are no timings, and every
        feature on this page is arithmetic on timings.
     3. Its LENGTH. This is the one that catches you out.

   ON LENGTH: a fifteen-minute talk becomes eight clips and a term of lessons.
   A two-hour interview is not eight times that — it is unusable whole, because
   the transcript panel cannot be copied in one piece and nobody teaches a
   two-hour transcript. Take a SEGMENT: find the chapter markers, pick five to
   ten minutes, and copy only that stretch of the panel. Ten minutes is three or
   four clips, which is a month.

   ON INTERVIEWS: this format has no field for who is speaking, because it was
   built for one person talking. That is a real constraint, not an oversight —
   cut an interview around the stretches where ONE person runs uninterrupted,
   and the question never arises. If a segment genuinely needs both voices, the
   line format has to grow a speaker field first.

   CHOOSING A CLIP
   ---------------
   Three to six minutes. Longer than that and a lesson becomes homework nobody
   finishes; the cut matters more than the topic. Check it plays here before
   writing anything: an uploader can forbid embedding, and such a video shows an
   error inside this page while playing perfectly on YouTube itself.

   THE CHINESE LAYER
   -----------------
   English is what shows. Traditional Chinese waits behind a small 中 chip on
   every transcript line and every card, or the 中文 switch in the top bar opens
   the lot. Instructions, task prompts and the clip list stay bilingual at all
   times — those are scaffolding, not comprehension practice.

   Lines are glossed rather than translated word for word. A transcript line is
   often half a sentence, and a literal rendering of half a sentence teaches
   nothing; write the Chinese that a person would actually say for that idea,
   and leave `zh` off entirely where the English needs no help.

   THE REGISTERS
   -------------
   `level` sets who a lesson is written for and nothing else — it does not
   change the page. Adult clients get the register of /nikky/, /anny/ and
   /anita/: work, career, meetings, the news. Teenagers and young adults get the
   register of /anna/, /ken/ and /eason/: study, campus, first jobs, what they
   already watch. As a rule, pick the audience, then pick the video — a clip
   written at two people at once usually lands on neither.

   THE ONE EXCEPTION, and it is a real one: some subjects are equally native to
   both lives. Habits, goals, procrastination, confidence, how you spend a day —
   a twenty-year-old with a degree to finish and someone with a job and a team
   are doing the SAME thing with these, only the furniture differs. Such a clip
   is marked "Young adult & workplace" and is written by one test: every example
   and every task must work for both, so nothing may need direct reports, a
   budget or a quarterly target to make sense. Reach instead for what both
   already have — a fitness habit, a side project, a deadline, money to save.

   What is NOT allowed is the register drifting mid-lesson: a business example
   in one task and a campus example in the next reads as a lesson that could not
   decide. Pitch at both from the first line or at neither.

   A LESSON
   --------
     id        unique, URL-safe; becomes the anchor
     videoId   the eleven characters after v= or youtu.be/ — the ID, not the URL
     start     seconds; where the lesson begins. Omit for 0
     end       seconds; where it stops. Omit to run to the end of the video
     titleEn / titleZh
     videoZh   OPTIONAL, and only needed once per video — the Chinese name of
               the talk, for the folding clip list. Put it on the FIRST lesson
               of a video's run; the list takes the first one it finds in the
               group, so repeating it on every lesson is harmless but pointless.
               Without it the list shows the English title alone.
     levelEn / levelZh    e.g. "Adult · B1–B2" / "成人 · B1–B2"
     sourceEn             who is speaking and where it comes from, written as
                          `<who> — “<title>”`. The clip list splits on that dash
                          to show the talk's name as the heading and the speaker
                          beneath it, so the shape is load-bearing: written any
                          other way, the whole string becomes the heading.
     aboutEn / aboutZh    two sentences on what the clip is and why it is here
     watchForEn / watchForZh   one thing to listen for on the first play
     lines     the transcript. `t` is the second the line starts; a line runs
               until the next one begins, and that is what looping, shadowing
               and highlighting all measure. Keep them SHORT — one breath, one
               clause. A forty-word line cannot be looped or repeated back, and
               a line is only as useful as it is repeatable.
     words     phrase cards. `t` links each to the moment it is said
     questions comprehension. `t` is where the answer is heard
     tasks     what the student says afterwards, in their own words

   `lines` is the only required part. A clip with a transcript and nothing else
   is already a lesson; the rest is what turns it into one worth an hour.
*/

const LESSONS = [

  /* ------------------------------------------------------------------ */
  {
    id: 'attention-crisis',
    videoId: 'ZXHrPfWJcCI',
    start: 0,
    end: 57,

    titleEn: 'The problem, and step one',
    titleZh: '問題本身，還有第一步',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'Daniel Pink — “How To Fix Your Attention Span (Before It’s Too Late)”',
    videoZh: '修復你的高效專注力',

    aboutEn: 'Under a minute, and it does three jobs: it names the problem, it '
      + 'dares you to watch this properly, and it earns the right to be '
      + 'listened to in a single sentence — seven books, fifteen minutes. '
      + 'Then step one arrives, and it is small enough to do tonight: a '
      + 'book, a timer, and one honest number written down.',
    aboutZh: ' '
      + '不到一分鐘，卻一口氣做完三件事：指出問題、要你好好把這支影片看完，並用一句話取得「值得被聽」的資格——七本書、十五分鐘。接著第一步就來了，而且小到今晚就能做：一本書、一個計時器，還有一個誠實寫下來的數字。',

    watchForEn: 'He spends exactly one sentence on why you should believe him. '
      + 'Listen for the two numbers in it — the whole argument is those two '
      + 'numbers placed side by side.',
    watchForZh: '他只花一句話說明「為什麼該相信他」。注意聽那句話裡的兩個數字——他的整個論證，就是把這兩個數字擺在一起。',

    lines: [
      { t:  0, en: 'Attention fragmentation is the worst it’s ever been.',
               zh: '注意力的碎片化，現在是有史以來最嚴重的。' },
      { t:  2, en: 'We’re distracted, scattered, pulled in a thousand directions.',
               zh: '我們分心、心散掉，被拉往上千個方向。' },
      { t:  5, en: 'If we don’t fix it, we’re toast',
               zh: '如果我們不解決這個問題，我們就完蛋了——' },
      { t:  6, en: 'as workers, as learners, as humans.',
               zh: '不管是身為工作者、身為學習者，還是身為人。' },
      { t:  9, en: 'Here’s my challenge to you.',
               zh: '我要給你一個挑戰。' },
      { t: 11, en: 'Watch this video on full screen, 1x speed,',
               zh: '把這支影片開全螢幕、用一倍速看，' },
      { t: 13, en: 'with no distractions.',
               zh: '不要有任何東西來打斷你。' },
      { t: 14, en: 'Because I’m going to share five science-backed steps',
               zh: '因為我要分享五個有科學根據的步驟，' },
      { t: 17, en: 'to rebuild your attention span before it’s too late.',
               zh: '趁還來得及，把你的專注時間重建起來。' },
      { t: 20, en: 'They’re pretty simple,',
               zh: '這些步驟其實滿簡單的，' },
      { t: 21, en: 'but if you follow these steps, your attention span will improve.',
               zh: '但只要你照著做，你的專注時間就會變長。' },
      { t: 25, en: 'I would not have been able to write seven books',
               zh: '我根本不可能寫得出七本書——' },
      { t: 27, en: 'if I was scrolling on my phone every fifteen minutes.',
               zh: '如果我每十五分鐘就滑一次手機的話。' },
      { t: 30, en: 'But these steps help me take back my time.',
               zh: '但這些步驟幫我把時間搶了回來。' },
      { t: 33, en: 'The first step is setting a baseline.',
               zh: '第一步，是設一個基準值。' },
      { t: 36, en: 'So grab a book and time yourself.',
               zh: '所以，去拿一本書，然後幫自己計時。' },
      { t: 38, en: 'How long can you read',
               zh: '你可以讀多久，' },
      { t: 39, en: 'without getting up or checking your phone?',
               zh: '而不會站起來、也不會去看手機？' },
      { t: 41, en: 'Really try to push yourself,',
               zh: '真的要逼自己一下，' },
      { t: 42, en: 'but don’t judge yourself if it’s only a few minutes.',
               zh: '但如果只撐了幾分鐘，也不要苛責自己。' },
      { t: 45, en: 'Write down your time.',
               zh: '把你的時間寫下來。' },
      { t: 46, en: 'That’s your baseline.',
               zh: '那就是你的基準值。' },
      { t: 48, en: 'The rest of these steps will expand it.',
               zh: '後面這幾個步驟，會把它一路拉長。' },
      { t: 50, en: 'You need to train your attention like a muscle.',
               zh: '你要像練肌肉一樣訓練你的注意力。' },
      { t: 53, en: 'Build it by starting small and gradually stretching it.',
               zh: '從小地方開始，再慢慢把它拉長，就這樣練起來。' },
    ],

    words: [
      { t: 0, en: 'the worst it’s ever been', zh: '有史以來最嚴重的一次',
        noteEn: 'A superlative plus “it’s ever been” measures a thing against its '
          + 'own history, not against anything else. Swap the adjective and it '
          + 'still works: “The traffic is the worst it’s ever been”, “My '
          + 'Japanese is the best it’s ever been.”',
        noteZh: '最高級加上 it’s ever been，是拿一件事跟「它自己的過去」比，不是跟別的東西比。換個形容詞照樣能用：「The '
          + 'traffic is the worst it’s ever been.」（交通從來沒這麼糟過。）「My Japanese is '
          + 'the best it’s ever been.」（我的日文從來沒這麼好過。）' },
      { t: 2, en: 'pulled in a thousand directions', zh: '被拉往上千個方向、忙得團團轉',
        noteEn: 'Always passive, and always about too many demands at once — never '
          + 'about one big problem. “I was pulled in a thousand directions all '
          + 'week” explains why nothing got finished, and sounds tired rather '
          + 'than whiny.',
        noteZh: '一定用被動，而且講的是「同時被太多事拉著」，不是一件大麻煩。「I was pulled in a thousand '
          + 'directions all week.」（我整個禮拜被各種事拉來拉去。）用來解釋為什麼什麼都沒做完，聽起來是累，不是在抱怨。' },
      { t: 5, en: 'we’re toast', zh: '我們就完蛋了',
        noteEn: 'Very informal, and always about what is coming: if this happens, '
          + 'we are finished. Said with a shrug — “If we miss this train, we’re '
          + 'toast.” Keep it off anything you want taken seriously as bad news.',
        noteZh: '非常口語，而且一定指接下來會怎樣：要是這樣，我們就沒救了。講的時候帶點聳肩的味道——「If we miss this train, '
          + 'we’re toast.」（錯過這班車我們就完了。）真正嚴重的壞消息別用這個說法。' },
      { t: 14, en: 'science-backed', zh: '有科學根據的',
        noteEn: 'A noun plus -backed says what is standing behind a claim: '
          + 'science-backed, evidence-backed, government-backed. It is a '
          + 'selling word, so it goes in front of the thing you are '
          + 'recommending — “a science-backed way to sleep better”.',
        noteZh: '名詞加 '
          + '-backed，表示「背後有什麼在撐」：science-backed（有科學根據的）、evidence-backed（有證據支持的）、government-backed（政府支持的）。這是推薦用的字，放在你要推薦的東西前面——「a '
          + 'science-backed way to sleep better」（有科學根據的助眠方法）。' },
      { t: 30, en: 'take back my time', zh: '把自己的時間搶回來',
        noteEn: 'Take back says the thing was yours first and something took it — '
          + 'your time, your evenings, your weekend. Change the pronoun and it '
          + 'is your own sentence: “I’m taking back my mornings.”',
        noteZh: 'take back 的意思是「本來就是我的，被拿走了，我要拿回來」——時間、晚上、週末都能接。換個代名詞就變成你自己的句子：「I’m '
          + 'taking back my mornings.」（我要把我的早上搶回來。）' },
      { t: 33, en: 'setting a baseline', zh: '設一個基準值',
        noteEn: 'A baseline is the number you start from, so that every later '
          + 'number means something. Said at work and in the gym alike: “Let’s '
          + 'set a baseline first and measure again in a month.”',
        noteZh: 'baseline 是「起點的那個數字」，有了它，後面量到的數字才有意義。職場和健身房都這樣講：「Let’s set a '
          + 'baseline first and measure again in a month.」（先設一個基準值，一個月後再量一次。）' },
      { t: 36, en: 'time yourself', zh: '幫自己計時',
        noteEn: 'Time as a verb means measure how long something takes; time '
          + 'yourself is the reflexive version, and it is an instruction you '
          + 'can hand to anyone. “Time yourself reading one page.” Note it is '
          + 'not count your time.',
        noteZh: 'time 當動詞是「量一件事花多久」；time yourself 是反身用法，是一句可以直接交給別人的指令：「Time '
          + 'yourself reading one page.」（幫自己計時，看讀一頁要多久。）注意不是 count your time。' },
      { t: 42, en: 'don’t judge yourself if…', zh: '就算……也不要苛責自己',
        noteEn: 'Judge yourself here means be hard on yourself about a result, not '
          + 'assess it. He pairs it with push yourself one line earlier: try '
          + 'hard, then be kind about the number. “Don’t judge yourself if it '
          + 'takes three tries.”',
        noteZh: 'judge yourself 在這裡是「對自己的結果很苛刻」，不是「評估」。他前一句才剛說 push '
          + 'yourself（逼自己一下），這裡馬上補上——用力試，但對結果溫柔一點。「Don’t judge yourself if it '
          + 'takes three tries.」（就算試了三次才成，也別苛責自己。）' },
    ],

    questions: [
      { t: 11, en: 'What exactly does he challenge you to do while you watch this video?',
        zh: '他挑戰你在看這支影片的時候，具體要做到哪幾件事？',
        answerEn: 'Watch it on full screen, at 1x speed, with no distractions. He '
          + 'asks for all three before he shares a single step.',
        answerZh: '全螢幕、一倍速、而且不能有任何干擾。這三件事，他在講出第一個步驟之前就先要求了。' },
      { t: 25, en: 'What reason does he give for why you should believe him about any of this?',
        zh: '他給了什麼理由，說明為什麼這些話值得你相信？',
        answerEn: 'He says he would not have been able to write seven books if he was '
          + 'scrolling on his phone every fifteen minutes — and that these '
          + 'steps are what helped him take back his time.',
        answerZh: '他說，如果他每十五分鐘就滑一次手機，根本不可能寫出七本書；而且就是這些步驟，幫他把時間搶了回來。' },
      { t: 36, en: 'Step one is setting a baseline. What three things does he tell you to do?',
        zh: '第一步是設基準值。他叫你做哪三件事？',
        answerEn: 'Grab a book, time yourself — how long can you read without getting '
          + 'up or checking your phone — and write the time down. Push '
          + 'yourself, but don’t judge yourself if it is only a few minutes. '
          + 'That number is your baseline.',
        answerZh: ' '
          + '拿一本書、幫自己計時（看你能讀多久而不站起來、不看手機），然後把時間寫下來。要逼自己一下，但只撐了幾分鐘也別苛責自己。那個數字就是你的基準值。' },
      { t: 50, en: 'What does he compare your attention to, and how does he say you build it?',
        zh: '他把注意力比喻成什麼？他說要怎麼把它練起來？',
        answerEn: 'A muscle. You build it by starting small and gradually stretching '
          + 'it — and the rest of the steps are what expand the baseline.',
        answerZh: '肌肉。從小的開始，再慢慢把它拉長，就這樣練起來——後面那些步驟，就是用來把基準值拉長的。' },
    ],

    tasks: [
      { en: 'Do step one for real before the next lesson: read something with '
        + 'no phone nearby and time yourself. Then say your number out loud, '
        + 'and say honestly what finally made you stop.',
        zh: '下次上課前，真的去做一次第一步：把手機放遠，讀點東西，然後幫自己計時。接著把你的數字講出來，並且老實說：最後是什麼讓你停下來的。' },
      { en: 'He says he could not have written seven books while scrolling '
        + 'every fifteen minutes. Say the same sentence about yourself — one '
        + 'thing you finished, and the habit that would have stopped it.',
        zh: '他說，如果每十五分鐘就滑一次手機，他不可能寫出七本書。用同樣的句型講你自己——一件你做完的事，還有哪個習慣本來會害你做不完。' },
      { en: 'Describe the hour of the day you concentrate worst in: the time, '
        + 'the room, what is open on your screen. Then say one thing about it '
        + 'you will change this week.',
        zh: '描述你一天當中最無法專心的那一個小時：幾點、在哪個房間、螢幕上開著什麼。然後說出這個星期你要改掉其中的哪一件事。' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'attention-leeches',
    videoId: 'ZXHrPfWJcCI',
    start: 57,
    end: 91,

    titleEn: 'Step two — the attention leeches',
    titleZh: '第二步——吸走注意力的水蛭',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'Daniel Pink — “How To Fix Your Attention Span (Before It’s Too Late)”',

    aboutEn: 'Thirty-four seconds, three instructions, and one uncomfortable '
      + 'claim underneath them: your environment is rigged against you, and '
      + 'billion-dollar companies built it that way. Almost every sentence '
      + 'is an imperative you can lift whole — and what they add up to is '
      + 'that the first thing you fix is the room, not yourself.',
    aboutZh: ' '
      + '三十四秒、三個指令，底下還壓著一句讓人不太舒服的話：你所處的環境早就被動了手腳，而且是那些身價幾十億美元的公司動的手。這段幾乎每一句都是可以整句搬走的祈使句——而它們加起來的結論是：要先修的是那個空間，不是你自己。',

    watchForEn: 'Three words turn his second tip from a suggestion into a rule. '
      + 'Listen for what he puts in front of “turn off notifications”.',
    watchForZh: '有三個英文字，把他的第二條從建議變成了規定。注意聽他在 turn off notifications 前面加了什麼。',

    lines: [
      { t: 57, en: 'Step two.',
               zh: '第二步。' },
      { t: 58, en: 'Eliminate the attention leeches.',
               zh: '把那些吸走你注意力的水蛭清掉。' },
      { t: 59, en: 'Your environment is rigged against you.',
               zh: '你所處的環境早就被動了手腳，就是在跟你作對。' },
      { t: 61, en: 'Billion-dollar companies are trying to hijack your attention.',
               zh: '那些身價幾十億美元的公司，正想盡辦法劫走你的注意力。' },
      { t: 64, en: 'So, design your environment for focus.',
               zh: '所以，把你的環境設計成適合專注的樣子。' },
      { t: 67, en: 'Here are some simple but very practical tips.',
               zh: '以下幾個做法很簡單，但非常實用。' },
      { t: 70, en: 'One, create a no-phone zone.',
               zh: '第一，設一個手機禁區。' },
      { t: 72, en: 'When you have important work to do,',
               zh: '當你有重要的工作要做的時候，' },
      { t: 74, en: 'put your phone in another room.',
               zh: '就把手機放到另一個房間去。' },
      { t: 76, en: 'Two, in all cases, turn off notifications.',
               zh: '第二，不管什麼情況，一律把通知關掉。' },
      { t: 79, en: 'Three, close those twenty-seven tabs you got open,',
               zh: '第三，把你開著的那二十七個分頁關掉，' },
      { t: 82, en: 'and check them only in scheduled blocks.',
               zh: '之後只在排定好的時段裡去看它們。' },
      { t: 85, en: 'Your attention problem isn’t only your fault,',
               zh: '你注意力的問題，不全然是你的錯，' },
      { t: 87, en: 'it’s an environmental problem.',
               zh: '這是環境的問題。' },
      { t: 89, en: 'So, fix the environment first.',
               zh: '所以，先把環境修好。' },
    ],

    words: [
      { t: 58, en: 'attention leeches', zh: '吸走注意力的水蛭',
        noteEn: 'A leech is the animal that attaches to you and quietly drains '
          + 'blood. Said of apps, group chats, open tabs — anything that takes '
          + 'attention without you noticing: “Notifications are the biggest '
          + 'attention leech in my day.”',
        noteZh: 'leech 是那種吸在你身上、無聲無息把血吸走的水蛭。拿來講手機 '
          + 'App、群組、開著的分頁——任何在你沒察覺的情況下把注意力吸走的東西：「Notifications are the biggest '
          + 'attention leech in my day.」（我一天裡最會吸走注意力的，就是那些通知。）' },
      { t: 59, en: 'rigged against you', zh: '被動了手腳，注定對你不利',
        noteEn: 'Rigged = secretly arranged so that one side loses. A strong word, '
          + 'and it always describes a setup rather than a person: “The '
          + 'timetable is rigged against anyone who commutes.” Note the '
          + 'preposition: against, not for.',
        noteZh: 'rigged 是「暗中安排好，讓某一方注定輸」。語氣很重，而且講的一定是某種制度或安排，不是某個人：「The timetable '
          + 'is rigged against anyone who commutes.」（這個時間表對通勤的人根本不公平。）注意介系詞是 '
          + 'against，不是 for。' },
      { t: 61, en: 'hijack your attention', zh: '劫走你的注意力',
        noteEn: 'To hijack is to seize something already in motion and take it '
          + 'somewhere else. Said of planes, but just as often of meetings, '
          + 'conversations and whole afternoons: “Sorry, I hijacked the meeting '
          + 'there.”',
        noteZh: 'hijack 是「把正在進行中的東西半路劫走，帶去別的地方」。原本講劫機，但講會議、對話、一整個下午也一樣常見：「Sorry, I '
          + 'hijacked the meeting there.」（抱歉，剛剛那段被我帶偏了。）' },
      { t: 64, en: 'design your environment for…', zh: '把環境設計成適合……的樣子',
        noteEn: 'Design used of a room, a desk or a week rather than a product — '
          + 'you arrange the conditions in advance and let them do the work: “I '
          + 'designed my evening for reading: phone charging in the kitchen.”',
        noteZh: 'design 用在房間、桌面、一週的安排上，不是用在產品上——你先把條件擺好，讓條件替你做事：「I designed my '
          + 'evening for reading: phone charging in the '
          + 'kitchen.」（我把晚上安排成適合看書的樣子：手機放在廚房充電。）' },
      { t: 70, en: 'a no-phone zone', zh: '手機禁區',
        noteEn: 'The pattern is a no-X zone: a no-phone zone, a no-shoes zone, a '
          + 'no-meeting zone on a Wednesday morning. Three words that name a '
          + 'place and a rule at the same time.',
        noteZh: '句型是 a no-X zone：a no-phone zone（手機禁區）、a no-shoes zone（要脫鞋的地方）、a '
          + 'no-meeting zone on a Wednesday '
          + 'morning（週三早上不排會議的時段）。三個字就把地點和規矩一次講完。' },
      { t: 76, en: 'in all cases', zh: '所有情況都一樣、一律',
        noteEn: 'Three words that turn a suggestion into a rule, and they go in '
          + 'front of the instruction: “In all cases, reply within a day.” Its '
          + 'softer cousin is in most cases.',
        noteZh: '三個字就把建議變成規定，而且放在指令前面：「In all cases, reply within a '
          + 'day.」（一律一天之內回覆。）語氣軟一點的說法是 in most cases（大部分情況下）。' },
      { t: 82, en: 'in scheduled blocks', zh: '在排定好的固定時段裡',
        noteEn: 'A block is a piece of time you have set aside and named. Check '
          + 'email in scheduled blocks, revise in blocks — the point is that '
          + 'the time was decided in advance, not whenever you feel the pull.',
        noteZh: 'block 是你事先切出來、而且有名字的一段時間。check email in scheduled '
          + 'blocks（在固定時段收信）、revise in blocks（分段複習）——重點是時間是事先決定好的，不是想到才做。' },
      { t: 87, en: 'it’s an environmental problem', zh: '這是環境的問題',
        noteEn: 'Renaming a problem in order to change what you do about it — he '
          + 'moves it off you and onto the room. The shape is worth stealing: '
          + '“This isn’t a motivation problem, it’s a scheduling problem.”',
        noteZh: '把問題重新命名，好改變你接下來要做的事——他把問題從「你」身上挪到「那個空間」上。這個句型值得偷來用：「This isn’t a '
          + 'motivation problem, it’s a scheduling problem.」（這不是動力的問題，是排程的問題。）' },
    ],

    questions: [
      { t: 59, en: 'What does he say about your environment, and who does he say is behind it?',
        zh: '他說你所處的環境怎麼了？他說背後是誰在做這件事？',
        answerEn: 'Your environment is rigged against you, and billion-dollar '
          + 'companies are trying to hijack your attention. That is why he says '
          + 'to design your environment for focus.',
        answerZh: '你的環境早就被動了手腳，在跟你作對；而且一堆身價幾十億美元的公司，正想盡辦法劫走你的注意力。所以他才說：把環境設計成適合專注的樣子。' },
      { t: 70, en: 'What is his first tip, and when exactly does he say to use it?',
        zh: '他的第一條建議是什麼？他說什麼時候要用？',
        answerEn: 'Create a no-phone zone. When you have important work to do, put '
          + 'your phone in another room — not face down on the desk, in another '
          + 'room.',
        answerZh: '設一個手機禁區。當你有重要的工作要做的時候，把手機放到另一個房間去——不是螢幕朝下放在桌上，是放到另一個房間。' },
      { t: 79, en: 'What does he tell you to do about the open tabs — and does he say never to check them?',
        zh: '那些開著的分頁，他叫你怎麼處理？他有叫你永遠都別看嗎？',
        answerEn: 'Close those twenty-seven tabs you got open. He never says never — '
          + 'he says check them only in scheduled blocks.',
        answerZh: '把開著的那二十七個分頁關掉。他沒有說永遠不能看——他說只在排定好的時段裡去看。' },
      { t: 85, en: 'Whose fault is your attention problem, in his view, and what does that mean you fix first?',
        zh: '在他看來，注意力的問題是誰的錯？這代表你要先修的是什麼？',
        answerEn: 'Not only yours. He calls it an environmental problem, and that is '
          + 'exactly why he says to fix the environment first.',
        answerZh: '不全是你的錯。他說這是環境的問題，所以他才會說：先把環境修好。' },
    ],

    tasks: [
      { en: 'Pick the one of his three tips you will actually do this week — '
        + 'not the one you should do, the one you will. Say when, say where, '
        + 'and say where your phone is while it happens.',
        zh: '從他的三條裡挑一條你這個星期真的會做的——不是「應該做」的那條，是「你會做」的那條。說出時間、說出地點，還有那段時間你的手機會在哪裡。' },
      { en: 'Count the tabs you have open right now and say the number out '
        + 'loud. Then say which ones you actually need, which ones are noise, '
        + 'and what a scheduled block for the noise would look like in your '
        + 'week.',
        zh: ' '
          + '數一數你現在開了幾個分頁，把數字念出來。然後說說哪些是你真的需要的、哪些只是干擾，還有如果要幫那些干擾排一個固定時段，放在你的一週裡會長什麼樣子。' },
      { en: 'Describe the place you usually work or study, as if to someone who '
        + 'has never seen it. Name one thing in it that is rigged against '
        + 'you, and one change you could make to that room in under a minute.',
        zh: '描述一下你平常工作或唸書的地方，就當作對方完全沒看過。指出裡面有一樣東西是「在跟你作對」的，再說一個你一分鐘之內就能對那個空間做的改變。' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'attention-rituals',
    videoId: 'ZXHrPfWJcCI',
    start: 91,
    end: 170,

    titleEn: 'Steps three and four — rituals and breaks',
    titleZh: '第三步與第四步——儀式與休息',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'Daniel Pink — “How To Fix Your Attention Span (Before It’s Too Late)”',

    aboutEn: 'Eighty seconds and two of the five steps together, because both '
      + 'are plumbing rather than philosophy: a ritual that tells your '
      + 'brain work has started, and a break taken before you need one. '
      + 'Almost every sentence is an instruction or a small concrete '
      + 'picture — a candle, a playlist, the same cup of tea, a toddler '
      + 'with no snacks — which is the easiest English there is to remember '
      + 'and the easiest to steal.',
    aboutZh: ' '
      + '八十秒，一口氣講完五步裡的兩步。把它們放在一起，是因為這兩步都是「做法」而不是「道理」：一套告訴大腦「開工了」的儀式，還有一個在你需要之前就先休息的習慣。整段幾乎每一句不是指令，就是一個很具體的小畫面——一根蠟燭、一份播放清單、同一杯茶、一個沒吃到點心的幼兒——這種英文最好記，也最好偷來用。',

    watchForEn: 'He gives you three rituals — a candle, a playlist, a cup of tea — '
      + 'and then says none of them is the point. Listen for the one word '
      + 'that is.',
    watchForZh: '他一連舉了三個儀式的例子——蠟燭、播放清單、一杯茶——然後說重點根本不在這三個。注意聽：他說真正重要的是哪一個字。',

    lines: [
      { t:  91, en: 'Step three.',
                zh: '第三步。' },
      { t:  92, en: 'Practice deep work rituals.',
                zh: '練習「深度工作」的儀式。' },
      { t:  93, en: 'Take a page from Cal Newport,',
                zh: '這一點可以跟 Cal Newport 學，' },
      { t:  94, en: 'the Georgetown professor and author of the book Deep Work.',
                zh: '他是喬治城大學的教授，也是《深度工作力》（Deep Work）這本書的作者。' },
      { t:  98, en: 'Focus is easier when you build cues',
                zh: '當你建立一些提示訊號，專注就會變得比較容易，' },
      { t:  99, en: 'that tell your brain, “Now it’s time to work.”',
                zh: '那些訊號會告訴你的大腦：「現在是工作時間了。」' },
      { t: 103, en: 'Some writers light a candle at the start of a writing session.',
                zh: '有些作家會在開始寫作之前，點一根蠟燭。' },
      { t: 105, en: 'Some coders put on the same playlist.',
                zh: '有些寫程式的人會放同一份播放清單。' },
      { t: 107, en: 'Some entrepreneurs sit in the same chair with the same cup of tea.',
                zh: '有些創業家會坐在同一張椅子上，配同一杯茶。' },
      { t: 110, en: 'The ritual itself doesn’t matter.',
                zh: '儀式本身是什麼，其實不重要。' },
      { t: 112, en: 'What does matter is the consistency.',
                zh: '真正重要的是「每次都一樣」。' },
      { t: 114, en: 'It’s like hitting play on a soundtrack your brain already knows.',
                zh: '就像按下播放鍵，放一首你的大腦早就熟到不行的配樂。' },
      { t: 119, en: 'Rituals tell your mind: stop wandering.',
                zh: '儀式是在告訴你的腦袋：別再亂飄了。' },
      { t: 121, en: 'Start focusing.',
                zh: '開始專心。' },
      { t: 122, en: 'So right now, today, create your own starting ritual',
                zh: '所以就從現在、就今天，做一套屬於你自己的開工儀式，' },
      { t: 127, en: 'that tells your brain it’s work time.',
                zh: '讓它告訴你的大腦：工作時間到了。' },
      { t: 129, en: 'Step four.',
                zh: '第四步。' },
      { t: 130, en: 'Leverage breaks and movement.',
                zh: '善用休息，還有身體的活動。' },
      { t: 132, en: 'Your brain isn’t designed to focus for twelve straight hours.',
                zh: '你的大腦本來就不是設計來連續專注十二個小時的。' },
      { t: 135, en: 'Ninety minutes is about the max',
                zh: '九十分鐘大概就是極限，' },
      { t: 136, en: 'before performance falls off a cliff.',
                zh: '再撐下去，表現就會直接掉下懸崖。' },
      { t: 138, en: 'So instead of pushing through until you’re fried,',
                zh: '所以與其硬撐到整個人燒乾，' },
      { t: 141, en: 'build in recovery,',
                zh: '不如一開始就把恢復排進去，' },
      { t: 142, en: 'take short breaks, walk around, stretch.',
                zh: '短暫休息一下、走一走、伸展一下。' },
      { t: 145, en: 'Think of your brain like a toddler.',
                zh: '把你的大腦想成一個幼兒。' },
      { t: 147, en: 'It melts down if you don’t give it snacks and naps.',
                zh: '你不給它點心、不讓它睡午覺，它就會大崩潰。' },
      { t: 151, en: 'And ignoring that fact won’t make you heroic.',
                zh: '無視這個事實，並不會讓你變成英雄，' },
      { t: 152, en: 'It’ll just make you cranky and unproductive.',
                zh: '只會讓你脾氣變差，事情也做不出來。' },
      { t: 154, en: 'High performers know what other folks don’t get.',
                zh: '表現頂尖的人，懂一件別人不懂的事：' },
      { t: 157, en: 'Breaks aren’t deviations from your performance.',
                zh: '休息不是你表現裡的「脫軌」，' },
      { t: 160, en: 'They’re part of your performance.',
                zh: '休息本身就是表現的一部分。' },
      { t: 162, en: 'So right now, today, schedule a fifteen-minute walk break outside,',
                zh: '所以就從現在、就今天，排一段十五分鐘的散步時間，走到戶外，' },
      { t: 167, en: 'no phone, every day for the next week.',
                zh: '不帶手機，接下來一個星期每天都做。' },
    ],

    words: [
      { t: 93, en: 'take a page from…', zh: '跟某人學一套做法',
        noteEn: 'Short for take a page from someone’s book, and usually said short, '
          + 'as here: copy the way they do it. The object can be a person or a '
          + 'whole team — “We could take a page from the design team on this.”',
        noteZh: '完整說法是 take a page from someone’s '
          + 'book，但口語通常像他這樣講一半就好，意思是「學他那一套、照他的做法做」。對象可以是人，也可以是一整個團隊：「We could '
          + 'take a page from the design team on this.」（這件事我們可以學一下設計團隊的做法。）' },
      { t: 98, en: 'build cues', zh: '建立提示訊號',
        noteEn: 'A cue is a signal that starts a behaviour — the word every habit '
          + 'book uses, so you will meet it again. Watch the shape he gives it: '
          + 'cues that tell your brain it is time to work, not cues for work.',
        noteZh: 'cue 是「啟動某個行為的訊號」。談習慣的書都用這個字，之後一定還會再遇到。注意他用的句型：cues that tell your '
          + 'brain it is time to work（告訴大腦「該工作了」的訊號），不是 cues for work。' },
      { t: 112, en: 'what does matter is…', zh: '真正重要的是……',
        noteEn: 'Does in front of the verb is spoken emphasis, and it almost always '
          + 'lands on the second half of a contrast: he dismisses the ritual, '
          + 'then insists on the consistency. Said aloud, the stress must fall '
          + 'on does — “What does matter is that you show up.”',
        noteZh: '動詞前面加 does '
          + '是口語的強調，而且幾乎一定出現在對比的後半句：他先說儀式不重要，再強調「一致」才重要。唸出來的時候，重音一定要落在 does '
          + '上：「What does matter is that you show up.」（真正重要的是你有出現。）' },
      { t: 132, en: 'twelve straight hours', zh: '連續十二個小時',
        noteEn: 'Straight after a number means with nothing in between: three '
          + 'straight days, five straight wins, two straight nights. It sits '
          + 'before the noun; after the noun you would say twelve hours in a '
          + 'row instead.',
        noteZh: '數字後面接 straight，表示「中間沒斷、連續」：three straight days（連續三天）、five straight '
          + 'wins（連贏五場）、two straight nights（連續兩個晚上）。它放在名詞前面；要放在名詞後面的話，就改說 '
          + 'twelve hours in a row。' },
      { t: 136, en: 'fall off a cliff', zh: '直線崩掉、突然大幅下滑',
        noteEn: 'Not a slow decline — a sudden drop off an edge. Used of '
          + 'performance, sales, attendance, quality, sleep: “Our numbers fell '
          + 'off a cliff in August.”',
        noteZh: '不是慢慢下滑，而是「到了某個點突然掉下去」。可以形容表現、業績、出席率、品質、睡眠：「Our numbers fell off a '
          + 'cliff in August.」（我們八月的數字直接崩掉。）' },
      { t: 138, en: 'push through until you’re fried', zh: '硬撐到整個人燒乾',
        noteEn: 'Push through = keep going at the point where you want to stop. '
          + 'Fried = completely drained, and very common on its own: “Sorry, '
          + 'I’m fried — can we do this tomorrow?” One half is your decision, '
          + 'the other half is the price.',
        noteZh: 'push through 是「已經想停下來了還硬撐下去」；fried 是「整個人燒乾、累爆」，單獨用非常常見：「Sorry, I’m '
          + 'fried — can we do this tomorrow?」（抱歉我累爆了，明天再弄好嗎？）前半是你的選擇，後半是代價。' },
      { t: 141, en: 'build in…', zh: '一開始就把……排進去',
        noteEn: 'To design something into the plan from the start instead of hoping '
          + 'room appears later: build in a buffer, build in time for '
          + 'questions, build in a day off. The opposite is bolting it on at '
          + 'the end, which never happens.',
        noteZh: 'build in 是「一開始就把某個東西設計進計畫裡」，而不是期待之後還擠得出空間：build in a '
          + 'buffer（預留緩衝）、build in time for questions（留提問時間）、build in a day '
          + 'off（排一天休假）。相反的做法是最後才硬加上去——而那通常就是加不上去。' },
      { t: 147, en: 'melt down', zh: '情緒大崩潰',
        noteEn: 'What a small child does when it is tired and hungry, said just as '
          + 'often about adults and systems. The noun is one word: “I had a '
          + 'complete meltdown the night before the deadline.”',
        noteZh: '原本是小孩又累又餓時的大哭大鬧，但拿來講大人或系統一樣常見。名詞寫成一個字 meltdown：「I had a complete '
          + 'meltdown the night before the deadline.」（截止日前一晚我整個崩潰。）' },
    ],

    questions: [
      { t: 93, en: 'Who does he tell you to take a page from, and what is that person known for?',
        zh: '他叫你跟誰學？那個人是以什麼出名的？',
        answerEn: 'Cal Newport, the Georgetown professor and author of the book Deep '
          + 'Work. What he borrows from him is the idea of building cues that '
          + 'tell your brain, “Now it’s time to work.”',
        answerZh: 'Cal Newport，喬治城大學的教授，也是《深度工作力》（Deep '
          + 'Work）的作者。他借來的是這個概念：建立一些提示訊號，告訴大腦「現在是工作時間了」。' },
      { t: 103, en: 'He gives three examples of a ritual. What are they, and which one does he say is the right one?',
        zh: '他舉了三個儀式的例子。是哪三個？他說哪一個才是對的？',
        answerEn: 'A writer lighting a candle at the start of a session, a coder '
          + 'putting on the same playlist, an entrepreneur sitting in the same '
          + 'chair with the same cup of tea. None of them is the right one — '
          + 'the ritual itself doesn’t matter, and what does matter is the '
          + 'consistency.',
        answerZh: ' '
          + '作家在開始寫作前點一根蠟燭、寫程式的人放同一份播放清單、創業家坐在同一張椅子上配同一杯茶。三個都不是「正確答案」——儀式本身不重要，真正重要的是每次都一樣。' },
      { t: 132, en: 'How long does he say a brain can actually focus, and what should you do instead of pushing on?',
        zh: '他說大腦實際上能專注多久？與其繼續硬撐，你應該怎麼做？',
        answerEn: 'Not twelve straight hours. Ninety minutes is about the max before '
          + 'performance falls off a cliff — so instead of pushing through '
          + 'until you’re fried, build in recovery: short breaks, walk around, '
          + 'stretch.',
        answerZh: ' '
          + '不是連續十二個小時。九十分鐘大概就是極限，再撐下去表現就會直接掉下懸崖——所以與其硬撐到燒乾，不如把恢復排進去：短暫休息、走一走、伸展一下。' },
      { t: 154, en: 'What do high performers understand about breaks that other people don’t?',
        zh: '關於休息，表現頂尖的人懂了什麼是別人不懂的？',
        answerEn: 'That breaks aren’t deviations from your performance — they’re part '
          + 'of your performance.',
        answerZh: '他們知道休息不是表現裡的「脫軌」，休息本身就是表現的一部分。' },
    ],

    tasks: [
      { en: 'Design your own starting ritual out loud, in order: where you sit, '
        + 'what you do first, what you drink, what plays. Then say what it is '
        + 'a cue for — an essay, an hour of study, your own work before the '
        + 'messages start — and when you will run it this week.',
        zh: ' '
          + '出聲設計一套屬於你自己的開工儀式，照順序講：坐在哪裡、第一件事做什麼、喝什麼、放什麼。然後說說它是在提示你開始做什麼——寫報告、念一小時書、在訊息開始湧進來之前先做自己的事——還有這個星期你什麼時候會真的跑一次。' },
      { en: 'Think of the last time you pushed through until you were fried. '
        + 'Say how long you had been going, what happened to the quality of '
        + 'what you were doing, and where the ninety-minute mark would have '
        + 'fallen.',
        zh: '想一想你上一次硬撐到整個人燒乾是什麼時候。說說你當時已經做了多久、你做出來的東西品質變成怎樣，還有九十分鐘那個點會落在哪裡。' },
      { en: 'Take his assignment: a fifteen-minute walk, outside, no phone, '
        + 'every day for a week. Say which time of day it goes in, then name '
        + 'the one thing most likely to eat it — and what you will do when it '
        + 'tries.',
        zh: ' '
          + '接下他出的作業：十五分鐘、走到戶外、不帶手機，連續一個星期每天都做。說出你要排在一天中的什麼時段，然後說出最有可能把這段時間吃掉的是什麼——以及它來吃的時候，你打算怎麼辦。' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'attention-meaning',
    videoId: 'ZXHrPfWJcCI',
    start: 170,
    end: 233,

    titleEn: 'Step five — attention and meaning',
    titleZh: '第五步——注意力與意義',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'Daniel Pink — “How To Fix Your Attention Span (Before It’s Too Late)”',

    aboutEn: 'Just over a minute, and the last of his five steps — the one that '
      + 'sounds like a poster on a wall until he turns it into a procedure: '
      + 'ask why this matters, ask who benefits, write the answer down, '
      + 'keep it where you can see it. Then he tells on himself, and the '
      + 'second half is a writer stuck on his own book, watching sports '
      + 'highlights on his phone, because he could not have told you why he '
      + 'was writing it.',
    aboutZh: ' '
      + '一分鐘出頭，五個步驟的最後一個——這一步聽起來像牆上的勵志標語，直到他把它變成一套可以照做的流程：問這件事為什麼重要、問誰會因此受益、把答案寫下來、放在看得到的地方。然後他開始自首，後半段是一個卡在自己書裡的作者，滑著手機看運動賽事精華，因為他根本說不出自己為什麼要寫這本書。',

    watchForEn: 'A third of the way in, he stops giving advice and starts '
      + 'confessing. Listen for the sentence where “you” turns into “I”.',
    watchForZh: '講到大約三分之一的地方，他從「給建議」變成「自首」。注意聽：是哪一句開始，主詞從 you 變成了 I。',

    lines: [
      { t: 170, en: 'Step five.',
                zh: '第五步。' },
      { t: 171, en: 'Reconnect attention to meaning.',
                zh: '把注意力和意義重新接上。' },
      { t: 172, en: 'Meaning sounds like a soft-hearted notion,',
                zh: '「意義」聽起來像是個很軟、很感性的東西，' },
      { t: 174, en: 'but it can be a hard-headed strategy.',
                zh: '但它其實可以是一套很冷靜、很務實的策略。' },
      { t: 176, en: 'So use it to reclaim your attention.',
                zh: '所以，拿它來把你的注意力要回來。' },
      { t: 178, en: 'Before you start anything, ask:',
                zh: '在你開始做任何事之前，先問：' },
      { t: 180, en: '“Why does this matter?”',
                zh: '「這件事為什麼重要？」' },
      { t: 181, en: '“Who benefits?”',
                zh: '「誰會因此受益？」' },
      { t: 182, en: 'Then write it down and keep it in view.',
                zh: '然後把答案寫下來，放在看得到的地方。' },
      { t: 185, en: 'Because purpose fuels persistence.',
                zh: '因為有目的，才撐得下去。' },
      { t: 187, en: 'When you connect attention to meaning,',
                zh: '當你把注意力和意義接上，' },
      { t: 189, en: 'it stops being a chore and starts being a choice.',
                zh: '它就不再是苦差事，而變成你自己的選擇。' },
      { t: 192, en: 'I learned this myself on my last book.',
                zh: '這件事，是我寫上一本書的時候自己學到的。' },
      { t: 194, en: 'I was struggling.',
                zh: '我那時候卡住了。' },
      { t: 195, en: 'I was distracted.',
                zh: '我一直分心。' },
      { t: 196, en: 'I was on my phone and watching sports highlights,',
                zh: '我一直在滑手機、看運動賽事的精華，' },
      { t: 199, en: 'rather than doing my work.',
                zh: '而不是在做我該做的事。' },
      { t: 200, en: 'And I realized the problem was',
                zh: '然後我發現，問題出在' },
      { t: 201, en: 'that I didn’t know why I was writing this book.',
                zh: '我根本不知道自己為什麼要寫這本書。' },
      { t: 204, en: 'I didn’t have a purpose.',
                zh: '我沒有一個目的。' },
      { t: 205, en: 'And once I thought that through,',
                zh: '等我把這件事想清楚——' },
      { t: 206, en: 'and it took a couple of weeks,',
                zh: '而這花了我兩三個星期——' },
      { t: 207, en: 'I typed out my purpose,',
                zh: '我把我的目的打了出來，' },
      { t: 209, en: 'figured out what it was,',
                zh: '弄清楚它到底是什麼，' },
      { t: 211, en: 'and then posted it on the wall,',
                zh: '然後把它貼在牆上，' },
      { t: 212, en: 'and used that as a way to maintain my attention,',
                zh: '用這個方式讓我的注意力維持住，' },
      { t: 215, en: 'maximize my focus,',
                zh: '把專注力拉到最高，' },
      { t: 217, en: 'and then the work started flowing.',
                zh: '然後，工作就開始順了。' },
      { t: 220, en: 'It’s really easy to make things complicated.',
                zh: '把事情搞複雜，其實非常容易。' },
      { t: 222, en: 'It’s harder to make them simple.',
                zh: '把事情變簡單，才難。' },
      { t: 224, en: 'And the way that we can get our attention back',
                zh: '而我們要把注意力拿回來的方法，' },
      { t: 227, en: 'is relatively simple and straightforward,',
                zh: '其實相對簡單、也很直接，' },
      { t: 229, en: 'but you have to do it.',
                zh: '但你得真的去做。' },
      { t: 231, en: 'You have to follow the steps.',
                zh: '你得照著這些步驟走。' },
    ],

    words: [
      { t: 172, en: 'a soft-hearted notion', zh: '一個很感性、心軟的想法',
        noteEn: 'Its pair, a hard-headed strategy, lands two seconds later, and the '
          + 'two together are the whole move: soft-hearted is kind but '
          + 'impractical, hard-headed is unsentimental and effective. “It '
          + 'sounds soft-hearted, but it’s a hard-headed way to protect your '
          + 'evenings.”',
        noteZh: '對照的 a hard-headed '
          + 'strategy（冷靜務實的策略）兩秒後就出現，這一組對比就是他整段的手法：soft-hearted '
          + '是善良但不切實際，hard-headed 是不帶感情、但真的有用。「It sounds soft-hearted, but it’s '
          + 'a hard-headed way to protect your '
          + 'evenings.」（聽起來很感性，但這其實是保住你晚上時間的務實做法。）' },
      { t: 176, en: 'reclaim your attention', zh: '把你的注意力要回來',
        noteEn: 'Reclaim is to take back something that was yours to begin with — '
          + 'stronger than get back, and it hints that someone took it from '
          + 'you. Also said of time, a weekend, a language: “I’m trying to '
          + 'reclaim my mornings.”',
        noteZh: 'reclaim 是「把本來就屬於你的東西拿回來」，語氣比 get back '
          + '重，而且暗示它是被人拿走的。時間、週末、一種語言都能這樣講：「I’m trying to reclaim my '
          + 'mornings.」（我在試著把早上的時間要回來。）' },
      { t: 182, en: 'keep it in view', zh: '讓它一直在你看得到的地方',
        noteEn: 'Literally within sight, and he means it literally — his purpose '
          + 'went on the wall. In view also works for anything you need to keep '
          + 'watching: “Keep the deadline in view.”',
        noteZh: '字面上就是「在視線範圍內」，而且他是真的照字面做——他把自己的目的貼在牆上。in view '
          + '也能用在任何你得一直盯著的東西：「Keep the deadline in view.」（把截止日放在看得到的地方。）' },
      { t: 185, en: 'purpose fuels persistence', zh: '有目的，才撐得久',
        noteEn: 'The reusable part is fuel as a verb: X fuels Y means X is what '
          + 'keeps Y going. “Curiosity fuels the whole project.” The two '
          + 'p-sounds are why the line sticks, which is why he pauses after it.',
        noteZh: '可以直接借走的是動詞 fuel：X fuels Y 是「X 是讓 Y 持續下去的燃料」。「Curiosity fuels the '
          + 'whole project.」（好奇心是撐起整個案子的動力。）這句好記是因為兩個 p 的頭韻，所以他講完停了一拍。' },
      { t: 189, en: 'it stops being… and starts being…', zh: '它就不再是……，而變成……',
        noteEn: 'A two-part frame for saying that something has changed in how it '
          + 'feels, not in what it is. “Once you choose the topic yourself, it '
          + 'stops being an assignment and starts being a project.”',
        noteZh: '一個兩段式句型，用來講「某件事給人的感覺變了」，而不是它本身變了。「Once you choose the topic '
          + 'yourself, it stops being an assignment and starts being a '
          + 'project.」（一旦題目是你自己選的，它就不再是被交代的差事，而變成你自己的案子。）' },
      { t: 196, en: 'sports highlights', zh: '運動賽事的精華片段',
        noteEn: 'Highlights are the best bits cut out of something longer — a '
          + 'match, a concert, a conference. Almost always plural: “I only '
          + 'watched the highlights.” The singular, a highlight, means the best '
          + 'part of a day or a trip.',
        noteZh: 'highlights 是從比較長的東西裡剪出來的精華——比賽、演唱會、研討會都行，幾乎都用複數：「I only watched '
          + 'the highlights.」（我只看了精華。）單數的 a highlight 則是指一天或一趟旅程裡最棒的那一段。' },
      { t: 205, en: 'once I thought that through', zh: '等我把這件事從頭到尾想清楚',
        noteEn: 'Think something through is to follow an idea all the way to its '
          + 'consequences, not just to have it. He then admits how long it took '
          + '— a couple of weeks — and that admission is the honest part: “I '
          + 'need a day to think it through.”',
        noteZh: 'think something through '
          + '是「把一個想法一路想到它的後果」，不只是「有想到」。他接著承認這花了兩三個星期，那句承認才是誠實的地方：「I need a day '
          + 'to think it through.」（給我一天，我要把它想清楚。）' },
      { t: 220, en: 'make things complicated', zh: '把事情搞複雜',
        noteEn: 'Paired in the very next line with make them simple, and the order '
          + 'is the point: complicated is the easy default, simple is the work. '
          + '“We’ve made this way more complicated than it needs to be.”',
        noteZh: '下一句馬上用 make them '
          + 'simple（把事情變簡單）來對照，而且順序就是重點：複雜是省力的預設值，簡單才是真功夫。「We’ve made this way '
          + 'more complicated than it needs to be.」（這件事被我們搞得比需要的複雜太多了。）' },
    ],

    questions: [
      { t: 172, en: 'He says meaning sounds like one kind of thing but can be another. What are the two descriptions he uses?',
        zh: '他說「意義」聽起來像某一種東西，但其實可以是另一種。他用的是哪兩個形容？',
        answerEn: 'It sounds like a soft-hearted notion, but it can be a hard-headed '
          + 'strategy — so use it to reclaim your attention.',
        answerZh: '聽起來像是個很軟、很感性的想法，但它可以是一套冷靜務實的策略——所以拿它來把注意力要回來。' },
      { t: 178, en: 'What two questions does he tell you to ask before you start anything, and what are you supposed to do with the answer?',
        zh: '他說在開始做任何事之前，要先問哪兩個問題？答案又要拿來做什麼？',
        answerEn: 'Ask “Why does this matter?” and “Who benefits?” Then write it down '
          + 'and keep it in view — because purpose fuels persistence.',
        answerZh: '問「這件事為什麼重要？」和「誰會因此受益？」然後把答案寫下來，放在看得到的地方——因為有目的，才撐得下去。' },
      { t: 194, en: 'On his last book, what was he doing instead of working, and what did he decide the real problem was?',
        zh: '寫上一本書的時候，他都在做什麼、而不是在工作？他後來認為真正的問題是什麼？',
        answerEn: 'He was struggling and distracted, on his phone watching sports '
          + 'highlights rather than doing his work. The real problem was that '
          + 'he didn’t know why he was writing the book — he had no purpose.',
        answerZh: '他卡住了，也一直分心，都在滑手機看運動賽事的精華，而不是在做該做的事。真正的問題是：他不知道自己為什麼要寫這本書——他沒有目的。' },
      { t: 207, en: 'Once he had worked his purpose out, what exactly did he do with it, and what happened to the work?',
        zh: '等他把自己的目的想清楚之後，他實際上拿它做了什麼？工作又變得怎樣？',
        answerEn: 'He typed it out, figured out what it was, and posted it on the '
          + 'wall, using that to maintain his attention and maximize his focus. '
          + 'Then the work started flowing.',
        answerZh: '他把它打出來、弄清楚它到底是什麼，然後貼在牆上，用這個方式維持注意力、把專注力拉到最高。接著，工作就開始順了。' },
    ],

    tasks: [
      { en: 'Take one thing on your list for this week — an essay, a report, a '
        + 'training plan, the thing you keep putting off. Ask his two '
        + 'questions out loud, answer them, and then say exactly where you '
        + 'are going to keep that answer in view.',
        zh: ' '
          + '從你這星期的待辦裡挑一件事——一份作業、一份報告、一個訓練計畫，或是你一直在拖的那件事。把他那兩個問題出聲問一次、也回答一次，然後說清楚：你要把這個答案放在哪個看得到的地方。' },
      { en: 'Tell his story about yourself. Name something you were struggling '
        + 'with, say what you were doing on your phone instead, and say '
        + 'honestly whether you could have explained why you were doing the '
        + 'thing at all.',
        zh: '用他的故事講你自己。說一件你當時卡住的事、說你那時候拿手機在做什麼，然後老實說：你當時講得出自己為什麼在做這件事嗎？' },
      { en: 'Finish two sentences about something you are doing right now: “At '
        + 'the moment this is a chore because…” and “It would start being a '
        + 'choice if…”',
        zh: '針對你現在正在做的某件事，把兩句話講完：「現在這對我來說是苦差事，因為……」還有「如果……，它就會變成我自己的選擇。」' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'attention-recap',
    videoId: 'ZXHrPfWJcCI',
    start: 233,
    end: 262,

    titleEn: 'Five steps, then the real point',
    titleZh: '五個步驟，然後才是重點',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'Daniel Pink — “How To Fix Your Attention Span (Before It’s Too Late)”',

    aboutEn: 'Thirty seconds of closing, and the most useful half-minute in the '
      + 'whole video: all five steps again, one sentence each, nothing '
      + 'padded. Then the sentence the rest of it was built toward — life '
      + 'is not meant to be lived in fifteen-second increments.',
    aboutZh: ' '
      + '三十秒的收尾，也是整支影片裡最有用的半分鐘：五個步驟再講一次，一步一句，沒有半句多的。接著就是前面一路鋪陳到的那一句——人生不該是用十五秒為單位過的。',

    watchForEn: 'Each step gets exactly one sentence and is never said twice. Count '
      + 'how many of the five you can say back after a single play.',
    watchForZh: '每個步驟只用一句話講完，而且只講一次。放一次之後，看看你能複述出幾個。',

    lines: [
      { t: 234, en: 'How to fix your attention span before it’s too late.',
                zh: '怎麼在來不及之前，把你的專注力修好。' },
      { t: 237, en: 'Number one,',
                zh: '第一。' },
      { t: 238, en: 'establish a baseline,',
                zh: '先建立你的基準線，' },
      { t: 239, en: 'then train it like a muscle.',
                zh: '然後像練肌肉一樣去練它。' },
      { t: 241, en: 'Two,',
                zh: '第二。' },
      { t: 242, en: 'eliminate those attention leeches.',
                zh: '把那些吸走注意力的水蛭清掉。' },
      { t: 244, en: 'Three,',
                zh: '第三。' },
      { t: 245, en: 'build your own focus rituals.',
                zh: '建立你自己的專注儀式。' },
      { t: 246, en: 'Four,',
                zh: '第四。' },
      { t: 247, en: 'take breaks before your brain crashes.',
                zh: '趁大腦還沒當機之前先休息。' },
      { t: 249, en: 'And five,',
                zh: '還有第五。' },
      { t: 250, en: 'connect your focus to a larger purpose.',
                zh: '把你的專注，連到一個更大的目的上。' },
      { t: 252, en: 'Life is not meant to be lived in fifteen-second increments.',
                zh: '人生不該是用十五秒為單位過的。' },
      { t: 255, en: 'So try these steps today,',
                zh: '所以今天就開始試這幾個步驟，' },
      { t: 257, en: 'because the sooner you reclaim your attention,',
                zh: '因為你越早把注意力拿回來，' },
      { t: 259, en: 'the sooner you can reclaim your life.',
                zh: '就能越早把人生拿回來。' },
    ],

    words: [
      { t: 238, en: 'establish a baseline', zh: '建立基準線、先量出起點',
        noteEn: 'A baseline is the number you start from, measured before you '
          + 'change anything — how long you can read, how long you can run, '
          + 'what a month actually costs you. Establish, set or take a '
          + 'baseline: “Let’s take a baseline first, then we’ll know if any of '
          + 'this is working.”',
        noteZh: 'baseline（基準線）是你在動手改變之前先量出來的那個數字——能讀多久、能跑多久、一個月實際花掉多少。動詞用 '
          + 'establish、set 或 take：「Let’s take a baseline first, then we’ll know '
          + 'if any of this is working.」（先量個基準，之後才知道有沒有效。）' },
      { t: 239, en: 'train it like a muscle', zh: '像練肌肉一樣去練它',
        noteEn: 'Train X like a muscle = grow it with small, repeated sessions that '
          + 'get slightly harder. The image carries the method inside it, which '
          + 'is why it survives well outside the gym: “Saying no is a muscle — '
          + 'you have to train it.”',
        noteZh: 'train X like a muscle '
          + '是「用一次次小份量、一次比一次難一點的練習把它養大」。這個比喻本身就把方法講完了，所以離開健身房也一樣站得住：「Saying no '
          + 'is a muscle — you have to train it.」（拒絕別人是一塊肌肉，要練。）' },
      { t: 242, en: 'attention leeches', zh: '吸走注意力的水蛭',
        noteEn: 'A leech attaches itself to you and quietly takes something you '
          + 'need. He says eliminate those attention leeches as if you already '
          + 'know which ones are yours — and you do. The same frame works for '
          + 'anything that drains you: energy leeches, time leeches.',
        noteZh: 'leech 是水蛭：吸在你身上，安安靜靜把你需要的東西抽走。他說 eliminate those attention '
          + 'leeches，語氣就像你早就知道自己的是哪幾隻——你的確知道。同樣的說法可以套到任何會把你抽乾的東西：energy '
          + 'leeches、time leeches。' },
      { t: 245, en: 'build your own focus rituals', zh: '建立你自己的專注儀式',
        noteEn: 'A ritual here is a small fixed action you repeat before the work '
          + 'starts, not a belief — the same playlist, the same chair, the same '
          + 'cup. Your own is doing real work in the phrase: you choose it, and '
          + 'then you never vary it.',
        noteZh: '這裡的 ritual（儀式）不是信仰，是你在開工前重複做的一個固定小動作——同一張歌單、同一張椅子、同一個杯子。your own '
          + '在這句裡是有份量的：你自己挑一個，然後就不再換。' },
      { t: 247, en: 'before your brain crashes', zh: '趁大腦還沒當機之前',
        noteEn: 'Crash is what a computer does, borrowed for people: you stop '
          + 'working not gradually but all at once. Before + the disaster is a '
          + 'useful shape for arguing about timing: “Let’s sort this out before '
          + 'the whole thing crashes.”',
        noteZh: 'crash 本來是電腦「當機」，借來講人：不是慢慢變慢，是一下子整個停掉。before + 災難 '
          + '這個結構很適合用來講「時機」：「Let’s sort this out before the whole thing '
          + 'crashes.」（趁整個垮掉之前先處理。）' },
      { t: 250, en: 'connect … to a larger purpose', zh: '把……連到一個更大的目的上',
        noteEn: 'Larger, not large — the comparative means bigger than the task '
          + 'sitting in front of you. Connect A to B is the verb he uses and '
          + 'the one worth stealing: “I can’t connect this to anything larger, '
          + 'which is probably why I keep avoiding it.”',
        noteZh: '他用的是 larger 不是 large——比較級的意思是「比眼前這件事更大」。動詞用 connect A to '
          + 'B，這個字值得偷走：「I can’t connect this to anything larger, which is '
          + 'probably why I keep avoiding it.」（我沒辦法把這件事連到更大的什麼，大概就是我一直在逃避它的原因。）' },
      { t: 252, en: 'in fifteen-second increments', zh: '以十五秒為單位、一小段一小段地',
        noteEn: 'An increment is one small step of a bigger amount. “In X '
          + 'increments” says how something has been chopped up: “I’m getting '
          + 'this done in five-minute increments.”',
        noteZh: 'increment 是「一大份裡切出來的一小步」。in X increments 是在講一件事被切成什麼樣的碎塊：「I’m '
          + 'getting this done in five-minute increments.」（我是一次五分鐘、一點一點把它做完的。）' },
      { t: 257, en: 'the sooner you…, the sooner you…', zh: '你越早……，就越早……',
        noteEn: 'The two halves have to match, and the second one is the payoff — '
          + 'here it lands on the next line. It turns an instruction into a '
          + 'bargain, which is why it closes a talk so well. Any comparative '
          + 'pair works: the longer you wait, the worse it gets.',
        noteZh: '前後兩半要對稱，而且第二半才是回報——在這裡回報落在下一句。它把一句命令變成一筆交易，所以特別適合收尾。任何比較級都能套：the '
          + 'longer you wait, the worse it gets（你越拖，情況越糟）。' },
    ],

    questions: [
      { t: 237, en: 'He lists all five steps in about fifteen seconds. What are they, in order?',
        zh: '他在大約十五秒內把五個步驟全講完。依序是哪五個？',
        answerEn: 'One, establish a baseline, then train it like a muscle. Two, '
          + 'eliminate those attention leeches. Three, build your own focus '
          + 'rituals. Four, take breaks before your brain crashes. And five, '
          + 'connect your focus to a larger purpose.',
        answerZh: ' '
          + '第一，建立基準線，然後像練肌肉一樣練它。第二，清掉那些吸走注意力的水蛭。第三，建立你自己的專注儀式。第四，趁大腦還沒當機之前先休息。第五，把你的專注連到一個更大的目的上。' },
      { t: 238, en: 'Step one comes in two halves. What do you measure first, and what do you do with it afterwards?',
        zh: '第一步分成兩半。你要先量什麼？量完之後要拿它怎麼辦？',
        answerEn: 'Establish a baseline first, then train it like a muscle — find the '
          + 'number you are actually starting from, then grow it by repetition '
          + 'rather than by effort.',
        answerZh: '先建立基準線，再像練肌肉一樣練它——先量出你真正的起點，然後靠重複把它養大，而不是靠硬撐。' },
      { t: 247, en: 'He does not say take a break when you feel tired. When does he say to take one?',
        zh: '他沒有說「累了就休息」。他說該在什麼時候休息？',
        answerEn: 'Before your brain crashes. The break goes ahead of the collapse, '
          + 'not after it.',
        answerZh: '在大腦當機之前。休息要排在崩潰前面，不是崩潰後面。' },
      { t: 252, en: 'What sentence is the whole video built toward — what does he say life is not meant to be?',
        zh: '整支影片鋪陳到的是哪一句？他說人生不該是什麼樣子？',
        answerEn: 'Life is not meant to be lived in fifteen-second increments. And '
          + 'the sooner you reclaim your attention, the sooner you can reclaim '
          + 'your life.',
        answerZh: '人生不該是用十五秒為單位過的。而且你越早把注意力拿回來，就能越早把人生拿回來。' },
    ],

    tasks: [
      { en: 'Say the five back in order without looking. Then pick the one you '
        + 'are worst at, and say why it is that one and not another.',
        zh: '不要看，把五個步驟依序講一遍。然後挑出你最做不到的那一個，說說為什麼是它，而不是別的。' },
      { en: 'Put the step you just picked into your week. Say the day, the time '
        + 'and the exact thing you will do — not the idea, the action. Then '
        + 'say what will most likely stop you.',
        zh: '把你剛剛挑的那一步排進你這個星期。說出哪一天、幾點，還有你確切要做的那件事——不要講道理，講動作。然後說說最可能害你做不成的是什麼。' },
      { en: 'Finish his closing shape for yourself: “The sooner I ___, the '
        + 'sooner I ___.” Say it out loud, then name one thing you have lost '
        + 'to your phone that you would actually get back.',
        zh: '用他收尾的句型替自己填完：「我越早 ___，就越早 ___。」出聲講一次，然後說出一件被手機吃掉、而你真的想拿回來的東西。' },
    ],
  },


  /* ------------------------------------------------------------------ */
  {
    id: 'cheat-intro',
    videoId: 'c7jGXPEY54k',
    start: 0,
    end: 41,

    titleEn: 'The list nobody hands you',
    titleZh: '沒有人會交到你手上的那張清單',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'Daniel Pink — “30 Cheat Codes to Beat Every Level of Life”',
    videoZh: '30 個破關人生的密技',

    aboutEn: 'Forty seconds of set-up, and a clinic in how to open: a metaphor '
      + 'everybody already knows, a gap nobody has filled, and the reason '
      + 'to trust him — all before the first piece of advice arrives. Watch '
      + 'how few words he spends earning the right to be listened to: seven '
      + 'books, three children, three decades married, and, conservatively, '
      + 'ten thousand mistakes.',
    aboutZh: ' '
      + '四十秒的開場，是一堂「怎麼開場」的示範課：先用一個大家都懂的比喻，再點出一個沒人填過的空缺，最後給出「為什麼該聽他講」的理由——全部發生在第一條建議出現之前。注意他花了多少字就把「值得一聽」這件事講完：七本書、三個小孩、三十年婚姻，還有保守估計一萬個錯誤。',

    watchForEn: 'He teases two of the thirty codes and explains neither. The most '
      + 'important one is only two words long — catch it.',
    watchForZh: '他預告了三十條裡的兩條，卻一條也沒解釋。最重要的那一條，他只講了兩個英文字——別漏聽了。',

    lines: [
      { t:  0, en: 'Video games have cheat codes.',
               zh: '電玩遊戲裡有密技。' },
      { t:  1, en: 'Up, up, down, down.',
               zh: '上、上、下、下。' },
      { t:  3, en: 'And suddenly you’ve got thirty extra lives.',
               zh: '一下子你就多了三十條命。' },
      { t:  5, en: 'Well, after six decades on this planet,',
               zh: '而我在這顆星球上活了六十年之後，' },
      { t:  8, en: 'I’ve discovered that life has cheat codes, too.',
               zh: '我發現人生其實也有密技。' },
      { t: 10, en: 'It’s just that nobody ever hands you the list.',
               zh: '只是從來沒有人會把那張清單交到你手上。' },
      { t: 13, en: 'So, I made one.',
               zh: '所以，我自己做了一份。' },
      { t: 15, en: 'I’ve written seven books about human behavior,',
               zh: '我寫過七本關於人類行為的書，' },
      { t: 18, en: 'raised three children,',
               zh: '養大三個小孩，' },
      { t: 19, en: 'stayed married for three decades,',
               zh: '婚姻維持了三十年，' },
      { t: 21, en: 'and made, conservatively, 10,000 mistakes.',
               zh: '還有，保守估計，犯過一萬個錯。' },
      { t: 24, en: 'What survived are thirty cheat codes in five levels.',
               zh: '最後留下來的，是分成五個關卡的三十條密技。' },
      { t: 28, en: 'How to decide, how to deal with people,',
               zh: '怎麼做決定、怎麼跟人相處、' },
      { t: 30, en: 'how to get things done, how to work,',
               zh: '怎麼把事情做完、怎麼工作、' },
      { t: 32, en: 'and how to live.',
               zh: '還有怎麼過日子。' },
      { t: 34, en: 'One might require avoiding your relatives,',
               zh: '其中一條，你可能得躲開自己的親戚，' },
      { t: 36, en: 'and the most important one:',
               zh: '至於最重要的那一條：' },
      { t: 39, en: 'one glass.',
               zh: '一杯。' },
      { t: 40, en: 'Let’s start the game.',
               zh: '那，遊戲開始吧。' },
    ],

    words: [
      { t: 0, en: 'a cheat code', zh: '密技、作弊碼',
        noteEn: 'From video games: a code you type in to get something you did not '
          + 'earn. Now said of anything that works like an unfair shortcut — '
          + '“Going to bed early is the cheat code.”',
        noteZh: '來自電玩：輸入之後就能拿到你本來沒資格拿的東西。現在拿來講任何「像作弊一樣好用的捷徑」：Going to bed early is '
          + 'the cheat code.（早睡就是那個密技。）' },
      { t: 5, en: 'after six decades on this planet', zh: '在這顆星球上活了六十年之後',
        noteEn: 'How English earns the right to give advice: name the span of time '
          + 'first, then the advice. Swap in your own — “after four years of '
          + 'this”, “after two years in the job”.',
        noteZh: '英文裡「取得發言權」的做法：先報出你待了多久，再開始給建議。換成自己的就好——after four years of '
          + 'this（熬過這四年之後）、after two years in the job（做了兩年之後）。' },
      { t: 10, en: 'It’s just that…', zh: '只是……、問題就出在……',
        noteEn: 'Spoken. You agree first, then use it to bring in the one catch: '
          + '“I’d love to come. It’s just that I have a deadline on Monday.” '
          + 'Softer than but.',
        noteZh: '口語。先同意，再用它帶出「唯一的問題」：I’d love to come. It’s just that I have a '
          + 'deadline on Monday.（我很想去，只是週一有個截止日。）語氣比 but 軟。' },
      { t: 13, en: 'So, I made one.', zh: '所以我就自己做了一份',
        noteEn: 'Not a phrase to look up — a two-sentence move. Say what is '
          + 'missing, then say you made it. It is how people introduce anything '
          + 'they built: a template, a checklist, a side project.',
        noteZh: ' '
          + '這不是查得到的片語，而是一組兩句話的招式：先說「缺了什麼」，再說「所以我做了一個」。大家要介紹自己做出來的東西時都這樣開場：一份範本、一張檢查清單、一個副業。' },
      { t: 21, en: 'conservatively', zh: '保守估計',
        noteEn: 'Dropped into the middle of a number to say you are deliberately '
          + 'guessing low: “That’s conservatively three weeks of work.” Here it '
          + 'is the joke — he is claiming more mistakes, not fewer.',
        noteZh: '插在數字中間，表示「這個數字我還算少了」：That’s conservatively three weeks of '
          + 'work.（保守估計要三個星期。）他這裡是在開玩笑——意思是錯誤只會更多，不會更少。' },
      { t: 24, en: 'what survived', zh: '篩到最後留下來的',
        noteEn: 'Survive here means to be left once everything weaker has been cut. '
          + 'Very useful about lists and drafts: “Three of the ten ideas '
          + 'survived the meeting.”',
        noteZh: '這裡的 survive 是「比較弱的都被砍掉之後，還留著的那些」。講清單或草稿時很好用：Three of the ten ideas '
          + 'survived the meeting.（十個點子裡，有三個活過了那場會議。）' },
      { t: 30, en: 'get things done', zh: '把事情做完、把事情搞定',
        noteEn: 'The standard English for productivity, and the title of the book '
          + 'he cites later on. Note things — plural and vague: “I got nothing '
          + 'done today” is the commonest way to complain about a day.',
        noteZh: '英文裡講「生產力」最標準的說法，也是他後面引用的那本書的書名。注意 things 是複數又模糊：I got nothing done '
          + 'today.（我今天什麼都沒做成。）是抱怨一整天最常見的講法。' },
    ],

    questions: [
      { t: 10, en: 'He says life has cheat codes too. So what is the problem with them?',
        zh: '他說人生也有密技。那問題出在哪裡？',
        answerEn: 'Nobody ever hands you the list. That is exactly why he says he '
          + 'made one himself.',
        answerZh: '從來沒有人會把那張清單交到你手上。所以他說，他自己做了一份。' },
      { t: 15, en: 'He gives four reasons to take his advice seriously. What are they?',
        zh: '他給了四個理由，說明為什麼該認真看待他的建議。是哪四個？',
        answerEn: 'Seven books about human behavior, three children raised, three '
          + 'decades of marriage, and — conservatively — ten thousand mistakes.',
        answerZh: '七本關於人類行為的書、養大三個小孩、三十年的婚姻，還有保守估計一萬個錯誤。' },
      { t: 24, en: 'How many codes are there, and how has he grouped them?',
        zh: '密技總共幾條？他又是怎麼分組的？',
        answerEn: 'Thirty codes in five levels: how to decide, how to deal with '
          + 'people, how to get things done, how to work, and how to live.',
        answerZh: '三十條，分成五個關卡：怎麼做決定、怎麼跟人相處、怎麼把事情做完、怎麼工作，還有怎麼過日子。' },
      { t: 34, en: 'He teases two of the thirty codes without explaining either one. What does he say about them?',
        zh: '他預告了三十條裡的兩條，卻一條都沒解釋。他是怎麼說的？',
        answerEn: 'One of them might require avoiding your relatives. And the most '
          + 'important one is just two words: one glass.',
        answerZh: '其中一條，你可能得躲開自己的親戚；至於最重要的那一條，他只講了兩個英文字：one glass（一杯）。' },
    ],

    tasks: [
      { en: 'Say your own cheat code — one shortcut you worked out yourself '
        + 'that nobody ever told you, for studying, a first job, or keeping '
        + 'fit. One sentence for the rule, one for how you found it.',
        zh: ' '
          + '說一個你自己的密技——某個沒人教過你、你自己摸索出來的捷徑，讀書、第一份工作、或是維持運動習慣都可以。一句話講規則，一句話講你怎麼發現的。' },
      { en: 'Do his credentials sentence about yourself. Four things in one '
        + 'breath, ending with the number of mistakes you have made — and '
        + 'round the number up, the way he does.',
        zh: '用他那種「報資歷」的句子講你自己。一口氣講四件事，最後用你犯過的錯誤數量收尾——而且要像他一樣，把數字往上灌。' },
      { en: 'He names five levels: deciding, people, getting things done, work, '
        + 'and living. Say which one you most need help with this year, and '
        + 'what is going wrong in it right now.',
        zh: '他列出五個關卡：做決定、跟人相處、把事情做完、工作，還有過日子。說說今年你最需要幫忙的是哪一關，以及那一關現在卡在哪裡。' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'cheat-decisions',
    videoId: 'c7jGXPEY54k',
    start: 51,
    end: 226,

    titleEn: 'Level one — decisions',
    titleZh: '第一關——做決定',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'Daniel Pink — “30 Cheat Codes to Beat Every Level of Life”',

    aboutEn: 'Just under three minutes, and the whole of his first level: six '
      + 'short rules for deciding, each one a line, a reason, and sometimes '
      + 'an example from his own life. It is almost entirely imperatives '
      + 'and fixed phrases — which makes it the easiest kind of English to '
      + 'steal, and the hardest to listen to passively.',
    aboutZh: ' '
      + '不到三分鐘，一次講完他的第一關：六條做決定的短規則，每一條都是一句話、一個理由，有時候再加一個他自己的例子。整段幾乎全是祈使句和固定說法——這種英文最好偷來用，也最不適合被動地聽過去。',

    watchForEn: 'One old piece of advice comes back with its two halves swapped '
      + 'round. Listen for the moment he flips it.',
    watchForZh: '有一句老掉牙的建議，被他把前後兩半對調。注意聽他翻轉那句話的那一刻。',

    lines: [
      { t:  51, en: 'Level one, decisions.',
                zh: '第一關：做決定。' },
      { t:  53, en: 'Code number one.',
                zh: '第一號密技。' },
      { t:  54, en: 'Make your decisions using an ordinary Tuesday,',
                zh: '做決定的時候，用一個平常的星期二來判斷，' },
      { t:  57, en: 'not a fantasy Saturday.',
                zh: '而不是幻想中的那個星期六。' },
      { t:  58, en: 'When you’re choosing a house, a job, a city,',
                zh: '當你在挑房子、挑工作、挑一座城市，' },
      { t:  61, en: 'any big thing, don’t select it based on its best day.',
                zh: '任何大事都一樣，不要用它「最好的那一天」來選。' },
      { t:  65, en: 'Hey, that house has an amazing entertainment space',
                zh: '「欸，那間房子的娛樂空間超棒的」——' },
      { t:  67, en: 'you’ll use four times a year.',
                zh: '一年只會用到四次的那種。' },
      { t:  69, en: 'That job comes with a glamorous conference in Lisbon.',
                zh: '「那份工作還附帶一場在里斯本的華麗研討會。」' },
      { t:  72, en: 'That sounds great, but what will the commute feel like on a Tuesday?',
                zh: '聽起來是很棒，但星期二通勤的感覺會是怎樣？' },
      { t:  77, en: 'What will you actually be doing on the job at 2:30 on a Tuesday afternoon?',
                zh: '星期二下午兩點半，你在這份工作上實際上會在做什麼？' },
      { t:  83, en: 'What will it feel like to cook in that kitchen',
                zh: '在那個廚房裡煮飯，會是什麼感覺——' },
      { t:  85, en: 'on a regular Tuesday night?',
                zh: '在一個普通的星期二晚上？' },
      { t:  87, en: 'When I left working in the White House to work for myself,',
                zh: '當年我離開白宮的工作、自己出來做的時候，' },
      { t:  89, en: 'this was the standard I used.',
                zh: '我用的就是這個標準。' },
      { t:  92, en: 'Sure, I’d give up a few days each year of extreme excitement,',
                zh: '當然啦，我每年會少掉幾天超級刺激的日子，' },
      { t:  96, en: 'but 51 out of 52 Tuesdays would be better.',
                zh: '但一年五十二個星期二裡，有五十一個會過得更好。' },
      { t:  99, en: 'Code two.',
                zh: '第二號密技。' },
      { t: 100, en: 'For reversible decisions, decide fast.',
                zh: '可以反悔的決定，就快點決定。' },
      { t: 103, en: 'Don’t spend three weeks agonizing over',
                zh: '不要為了某件事糾結三個星期，' },
      { t: 105, en: 'something you can undo in three minutes.',
                zh: '而那件事你三分鐘就能收回來。' },
      { t: 107, en: 'Some decisions are one-way doors.',
                zh: '有些決定是單向門。' },
      { t: 109, en: 'Once you walk through, there’s no easy return.',
                zh: '一旦走過去，就很難再回頭。' },
      { t: 112, en: 'Those deserve time and care.',
                zh: '那種決定值得你花時間、好好斟酌。' },
      { t: 115, en: 'But most decisions are two-way doors.',
                zh: '但大部分的決定是雙向門。' },
      { t: 117, en: 'Take the class. Go on the date.',
                zh: '去上那堂課。去赴那場約會。' },
      { t: 119, en: 'Accept the brief gig.',
                zh: '接下那個短期的案子。' },
      { t: 121, en: 'If it doesn’t work, walk back through.',
                zh: '如果不行，再走回來就好。' },
      { t: 124, en: 'Save your agonizing for decisions that actually deserve it.',
                zh: '把糾結留給真正值得糾結的決定。' },
      { t: 127, en: 'Number three.',
                zh: '第三號。' },
      { t: 128, en: 'Ask what would change my mind.',
                zh: '問問自己：什麼樣的理由會讓我改變想法？' },
      { t: 131, en: 'If your answer is nothing, you’re not thinking.',
                zh: '如果你的答案是「沒有」，那你不是在思考，' },
      { t: 134, en: 'You’re defending.',
                zh: '你是在替自己辯護。' },
      { t: 135, en: 'Before starting an important project, taking a new job,',
                zh: '在你開始一個重要的案子、接下一份新工作，' },
      { t: 139, en: 'or moving to a new city,',
                zh: '或是搬到一座新城市之前，' },
      { t: 140, en: 'find one smart person who thinks it’s a terrible idea.',
                zh: '去找一個夠聰明、但覺得這主意糟透了的人。' },
      { t: 143, en: 'You don’t have to obey them, but you do have to hear them.',
                zh: '你不必聽他的，但你一定要聽他把話講完。' },
      { t: 146, en: 'Number four.',
                zh: '第四號。' },
      { t: 147, en: 'Before deciding what to do,',
                zh: '在決定要做什麼之前，' },
      { t: 149, en: 'ask what happens if you do nothing.',
                zh: '先問：如果我什麼都不做，會怎樣？' },
      { t: 153, en: 'Inaction itself is a decision, one with consequences.',
                zh: '「不行動」本身就是一個決定，而且是有後果的決定。' },
      { t: 156, en: 'But some problems disappear when you stop feeding them.',
                zh: '但有些問題，你不再餵它，它就自己消失了。' },
      { t: 159, en: 'Some conflicts resolve themselves.',
                zh: '有些衝突會自己解決。' },
      { t: 161, en: 'Some opportunities become clearer with time.',
                zh: '有些機會，放一段時間反而會變清楚。' },
      { t: 164, en: 'That’s why in certain situations,',
                zh: '所以在某些情況下，' },
      { t: 166, en: 'the best advice isn’t “Don’t just stand there, do something.”',
                zh: '最好的建議不是「別光站著，做點什麼」，' },
      { t: 169, en: 'It’s “Don’t just do something, stand there.”',
                zh: '而是「別光做東做西，站著就好」。' },
      { t: 171, en: 'Number five.',
                zh: '第五號。' },
      { t: 172, en: 'Make lots of small bets.',
                zh: '多下一些小注。' },
      { t: 174, en: 'Take risks whose upside could change your life',
                zh: '去冒那種風險：賭贏了可以改變你的人生，' },
      { t: 177, en: 'and whose downside won’t ruin it.',
                zh: '賭輸了也毀不了你的人生。' },
      { t: 180, en: 'Launch the side project, submit the article,',
                zh: '把那個自己的小專案做出來、把那篇文章投出去、' },
      { t: 182, en: 'check out the conference, try the idea on a small scale.',
                zh: '去看看那場研討會、把想法先小規模試一次。' },
      { t: 185, en: 'You don’t always find the big thing through one heroic leap.',
                zh: '那件大事，不見得是靠一次英雄式的縱身一躍找到的。' },
      { t: 189, en: 'Sometimes you find it through a portfolio of small experiments.',
                zh: '有時候，是靠一整組小實驗找到的。' },
      { t: 193, en: 'Most of life is shots on goal.',
                zh: '人生大部分的時候，比的是你射門幾次。' },
      { t: 196, en: 'And number six.',
                zh: '還有第六號。' },
      { t: 198, en: 'Judge decisions by how you made them,',
                zh: '評斷一個決定，要看你當初「怎麼做的」，' },
      { t: 200, en: 'not only by how they turned out.',
                zh: '而不是只看「結果怎樣」。' },
      { t: 202, en: 'A smart decision can produce a bad result.',
                zh: '聰明的決定也可能得到很糟的結果。' },
      { t: 205, en: 'A dumb decision can get lucky.',
                zh: '愚蠢的決定也可能走運。' },
      { t: 207, en: 'So don’t let one good outcome convince you that your process was brilliant,',
                zh: '所以不要因為一次結果好，就以為自己的做法很高明，' },
      { t: 212, en: 'and don’t let one bad outcome convince you that your process was flawed.',
                zh: '也不要因為一次結果差，就以為自己的做法有問題。' },
      { t: 216, en: 'Ask: did I use the information available?',
                zh: '要問的是：我有沒有用上手邊能拿到的資訊？' },
      { t: 219, en: 'Did I consider alternatives?',
                zh: '我有沒有考慮過其他選項？' },
      { t: 220, en: 'And did I understand the risks?',
                zh: '我有沒有把風險弄清楚？' },
      { t: 222, en: 'You don’t control the universe, but you do control the decision.',
                zh: '你沒辦法控制這個世界，但你可以控制自己怎麼做決定。' },
    ],

    words: [
      { t: 54, en: 'an ordinary Tuesday', zh: '一個平常的星期二',
        noteEn: 'His own test, set against “a fantasy Saturday” in the very next '
          + 'breath. Use it for the average day rather than the best one: '
          + '“Fine, but what’s an ordinary Tuesday there like?”',
        noteZh: '他自己設的標準，下一句就拿 a fantasy '
          + 'Saturday（幻想中的星期六）來對照。用它指「平均的一天」，不是最好的那一天：「Fine, but what’s an '
          + 'ordinary Tuesday there like?」（好啊，但在那裡，平常的星期二是什麼樣子？）' },
      { t: 107, en: 'a one-way door', zh: '單向門，走過去就回不來的決定',
        noteEn: 'Its pair, a two-way door, arrives a few seconds later. Both are '
          + 'now common at work: “This is a two-way door — let’s just try it.” '
          + 'The image does the arguing for you.',
        noteZh: '對照的 two-way door（雙向門）幾秒後就出現。這兩個說法現在職場很常聽到：「This is a two-way door '
          + '— let’s just try it.」（這是雙向門，先試再說。）這個畫面會替你把道理講完。' },
      { t: 124, en: 'save your agonizing for…', zh: '把糾結留給……',
        noteEn: 'Agonize over something = to worry at it for far longer than it '
          + 'deserves. Save X for Y means keep it where it counts, and works '
          + 'with anything limited: “Save your best example for the last '
          + 'slide.”',
        noteZh: 'agonize over something 是「為某件事糾結得遠超過它該得的時間」。save X for Y '
          + '是「留到真正需要的地方」，任何有限的東西都能用：「Save your best example for the last '
          + 'slide.」（把最好的例子留到最後一頁。）' },
      { t: 128, en: 'What would change my mind?', zh: '什麼樣的理由會讓我改變想法？',
        noteEn: 'A whole question you can lift unchanged, aimed at yourself or at '
          + 'someone else: “What would change your mind here?” It sounds '
          + 'curious rather than combative, which is exactly why it works.',
        noteZh: '一整句可以原封不動搬走，問自己或問別人都行：「What would change your mind '
          + 'here?」（要怎樣你才會改變想法？）聽起來是好奇，不是在吵架，這正是它好用的原因。' },
      { t: 143, en: 'you do have to…', zh: '你「的確」得……',
        noteEn: 'Do in front of the verb in a positive sentence is emphasis, and it '
          + 'almost always answers the half-sentence before it: he gives ground '
          + '(you don’t have to obey them), then insists. Spoken, and the '
          + 'stress must land on do.',
        noteZh: '肯定句裡在動詞前面加 do '
          + '是強調，而且幾乎都在回應前半句：他先讓一步（你不必聽他的），再堅持（但你一定要聽）。口語用法，重音一定要落在 do 上。' },
      { t: 174, en: 'the upside', zh: '好的那一面、順利時能拿到的那一面',
        noteEn: 'What you gain if it goes well; its pair, the downside, comes in '
          + 'the next line. Both are nouns: “What’s the downside if we wait a '
          + 'week?”',
        noteZh: '事情順利時你能拿到的那一面；對照的 downside（不順時的那一面）下一句就來。兩個都是名詞：「What’s the '
          + 'downside if we wait a week?」（再等一週，最壞會怎樣？）' },
      { t: 182, en: 'on a small scale', zh: '先小規模做',
        noteEn: 'Trying something before you commit to the full version. Its '
          + 'opposite is on a large scale, or at scale: “Let’s run it on a '
          + 'small scale first and see.”',
        noteZh: '在投入完整版本之前先小小地做一次。相反是 on a large scale 或 at scale：「Let’s run it on '
          + 'a small scale first and see.」（先小規模跑一次看看。）' },
      { t: 193, en: 'shots on goal', zh: '射門次數，也就是你出手嘗試的次數',
        noteEn: 'From football, and spoken: it counts how many attempts you took, '
          + 'not how good each one was. “We need more shots on goal” means try '
          + 'more things, not try harder.',
        noteZh: '來自足球，口語用法：算的是你出手幾次，不是每一次多漂亮。「We need more shots on '
          + 'goal」意思是「多試幾次」，不是「再更拚一點」。' },
    ],

    questions: [
      { t: 54, en: 'What does he say to use when you choose a house, a job or a city — and what does he say not to use?',
        zh: '他說挑房子、挑工作、挑城市的時候，要用什麼來判斷？又不要用什麼？',
        answerEn: 'An ordinary Tuesday, not a fantasy Saturday. Don’t select the '
          + 'thing based on its best day — the entertainment space you use four '
          + 'times a year, the glamorous conference in Lisbon.',
        answerZh: '用一個平常的星期二，不要用幻想中的星期六。不要用「最好的那一天」來選——一年只用四次的娛樂空間、那場在里斯本的華麗研討會，都不算數。' },
      { t: 107, en: 'Which decisions does he say deserve time and care, and which do not?',
        zh: '他說哪一種決定值得你慢慢想？哪一種不值得？',
        answerEn: 'One-way doors deserve it: walk through and there is no easy '
          + 'return. Most decisions are two-way doors — take the class, go on '
          + 'the date — and if it doesn’t work, you walk back through.',
        answerZh: '單向門值得：走過去就很難回頭。但大部分的決定是雙向門——去上課、去赴約——不行的話走回來就好。' },
      { t: 140, en: 'Before an important project or a move, who does he tell you to go and find?',
        zh: '在開始一個重要的案子、或是搬家之前，他叫你去找誰？',
        answerEn: 'One smart person who thinks it is a terrible idea. You don’t have '
          + 'to obey them, but you do have to hear them.',
        answerZh: '一個夠聰明、而且覺得這主意糟透了的人。你不必聽他的，但你一定要聽他把話講完。' },
      { t: 198, en: 'Number six: what should you judge a decision by, and why is the result not enough?',
        zh: '第六號：判斷一個決定要看什麼？為什麼光看結果不夠？',
        answerEn: 'Judge it by how you made it, not only by how it turned out. A '
          + 'smart decision can produce a bad result and a dumb one can get '
          + 'lucky — so ask whether you used the information available, '
          + 'considered alternatives and understood the risks.',
        answerZh: ' '
          + '要看你當初「怎麼做的」，不能只看結果。聰明的決定也可能結果很慘，愚蠢的決定也可能走運——所以要問：我有沒有用上手邊的資訊？有沒有考慮其他選項？有沒有把風險弄清楚？' },
    ],

    tasks: [
      { en: 'Take a choice you are facing right now — a flat, a course, a job, '
        + 'a gym membership. Describe an ordinary Tuesday inside it, hour by '
        + 'hour. Then say whether you still want it.',
        zh: ' '
          + '拿一件你現在正在猶豫的事——租房子、選一門課、一份工作、一張健身房會員卡。描述一下「身在其中的某個平常星期二」，一小時一小時講下去。然後說說：你還想要嗎？' },
      { en: 'Name one decision you have been agonizing over. Is it a one-way '
        + 'door or a two-way door? Say which, say why, and say what you are '
        + 'going to do about it today.',
        zh: '說出一件你一直在糾結的決定。它是單向門還是雙向門？說出是哪一種、為什麼，還有你今天打算拿它怎麼辦。' },
      { en: 'Pick one of the six and say what you would actually change this '
        + 'week — not the idea, the change. Then say the first small step, '
        + 'and when you will take it.',
        zh: '從這六條裡挑一條，說說你這個星期實際上要改什麼——不要講道理，講你要改的那件事。然後說出第一個小步驟，以及你什麼時候要做。' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'cheat-people',
    videoId: 'c7jGXPEY54k',
    start: 226,
    end: 387,

    titleEn: 'Level two — people',
    titleZh: '第二關——人際',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'Daniel Pink — “30 Cheat Codes to Beat Every Level of Life”',

    aboutEn: 'Two minutes and forty seconds, six cheat codes, and a confession '
      + 'in the opening line — level two starts with the mistake Pink says '
      + 'he has made more than any other. It is the most usable stretch of '
      + 'the whole talk for anyone who has ever let a friendship quietly '
      + 'lapse, and it ends somewhere uncomfortable: the people worth '
      + 'cutting out may include your relatives.',
    aboutZh: '兩分四十秒、六條作弊碼，而且開場第一句就先認錯——第二關一上來，Pink '
      + '就說這一條是他犯過最多次的錯。如果你有過「某段友情就這樣淡掉」的經驗，這是整場演講最派得上用場的一段；而它收在一個不太舒服的地方：該切掉的那些人，有可能包括你的親戚。',

    watchForEn: 'He says level two opens with the mistake he has made more than any '
      + 'other. Listen for which of the six codes he is confessing to.',
    watchForZh: '他說第二關的第一條，就是他自己犯過最多次的錯。注意聽這六條裡，他認的是哪一條。',

    lines: [
      { t: 226, en: 'Level one complete.',
                zh: '第一關通關。' },
      { t: 227, en: 'Level two is about people,',
                zh: '第二關講的是人。' },
      { t: 229, en: 'and it opens with the mistake I’ve made more than any other.',
                zh: '而開場這一條，是我犯過最多次的錯。' },
      { t: 233, en: 'Seven.',
                zh: '第七條。' },
      { t: 234, en: 'Before solving someone’s problem,',
                zh: '在你動手幫別人解決問題之前，' },
      { t: 236, en: 'ask what they want from you.',
                zh: '先問對方希望你做什麼。' },
      { t: 238, en: 'Advice, help, or just company.',
                zh: '是要建議、要幫忙，還是只是想要有人陪。' },
      { t: 240, en: 'Not every problem somebody tells you about is an invitation to solve it.',
                zh: '別人跟你講的問題，不見得都是在請你出手解決。' },
      { t: 245, en: 'Sometimes they want an answer,',
                zh: '有時候他們要的是一個答案，' },
      { t: 247, en: 'but many times they just want to be heard.',
                zh: '但很多時候，他們只是想有人聽他說。' },
      { t: 251, en: 'So before going into superhero problem-solving mode,',
                zh: '所以在進入「超級英雄解決問題模式」之前，' },
      { t: 256, en: 'ask.',
                zh: '先問。' },
      { t: 257, en: 'Number eight.',
                zh: '第八條。' },
      { t: 258, en: 'Assume incompetence before malice.',
                zh: '先假設對方是笨拙，不是壞心。' },
      { t: 261, en: 'What looks like hostility is often distraction, disorganization,',
                zh: '看起來像敵意的，往往只是分心、沒條理，' },
      { t: 265, en: 'or somebody having a terrible day.',
                zh: '或者那個人今天過得很糟。' },
      { t: 268, en: 'Some people are jerks with bad motives.',
                zh: '確實有些人就是爛人，動機也不良。' },
      { t: 270, en: 'No question.',
                zh: '這點沒話說。' },
      { t: 271, en: 'But the world contains fewer enemies and more overwhelmed people than we think.',
                zh: '但這個世界上，敵人比我們以為的少，被生活壓垮的人比我們以為的多。' },
      { t: 275, en: 'So begin with a more generous explanation.',
                zh: '所以一開始，先給一個比較寬厚的解釋。' },
      { t: 279, en: 'You can always revise it if the evidence changes.',
                zh: '等證據變了，你隨時可以改。' },
      { t: 282, en: 'Number nine.',
                zh: '第九條。' },
      { t: 283, en: 'Notice who asks you questions.',
                zh: '注意一下，誰會反過來問你問題。' },
      { t: 285, en: 'Curiosity is an underrated diagnostic for friendship,',
                zh: '好奇心是一個被低估的判斷依據——用來看友情，' },
      { t: 289, en: 'for romance, for collaboration.',
                zh: '看感情，也看合作關係。' },
      { t: 290, en: 'So pay attention to who is genuinely curious about you,',
                zh: '所以留意誰是真心對你感到好奇，' },
      { t: 295, en: 'and pay even closer attention to who never is.',
                zh: '更要留意誰從來都不會。' },
      { t: 298, en: 'Number ten.',
                zh: '第十條。' },
      { t: 299, en: 'Don’t keep score in relationships you want to keep.',
                zh: '你想留住的關係，就不要記分數。' },
      { t: 304, en: 'I called last time. I paid for dinner.',
                zh: '上次是我打的電話。晚餐是我付的。' },
      { t: 306, en: 'I helped her move. He still hasn’t thanked me.',
                zh: '搬家是我去幫忙的。他到現在還沒跟我道謝。' },
      { t: 309, en: 'Careful.',
                zh: '小心了。' },
      { t: 310, en: 'Generosity stops being generosity when you maintain a spreadsheet.',
                zh: '當你開始把這些記在試算表上，慷慨就不叫慷慨了。' },
      { t: 313, en: 'Strong relationships become roughly reciprocal over time,',
                zh: '好的關係，拉長來看大致是互相的，' },
      { t: 318, en: 'but they aren’t always equal in every moment.',
                zh: '但不會每個當下都剛好扯平。' },
      { t: 321, en: 'Number eleven.',
                zh: '第十一條。' },
      { t: 322, en: 'Build an infrastructure for friendship.',
                zh: '幫友誼蓋一套基礎建設。' },
      { t: 324, en: '“Hey, let’s get together sometime.”',
                zh: '「欸，我們改天約一下。」' },
      { t: 326, en: 'That’s how people slowly disappear from your life.',
                zh: '人就是這樣，慢慢從你的生活裡消失的。' },
      { t: 330, en: 'So make recurring plans with people you care about.',
                zh: '所以，跟你在乎的人約一個會重複的行程。' },
      { t: 333, en: 'A monthly dinner, a Saturday morning walk, a standing phone call.',
                zh: '每個月一頓飯、週六早上散個步、一通固定時間的電話。' },
      { t: 336, en: 'I have a regular gathering with six good friends',
                zh: '我跟六個好朋友有一個固定的聚會，' },
      { t: 338, en: 'where we eat, drink, and offer one another advice.',
                zh: '我們一起吃、一起喝，互相給對方建議。' },
      { t: 341, en: 'Without a recurring date,',
                zh: '如果沒有這個固定的日子，' },
      { t: 342, en: 'I suspect we’d see one another twice a year,',
                zh: '我猜我們一年大概只會見兩次，' },
      { t: 346, en: 'and spend half the evening saying,',
                zh: '而且那一晚有一半的時間都在說：' },
      { t: 347, en: '“Hey, we should do this more often.”',
                zh: '「欸，我們真的該多約一點。」' },
      { t: 349, en: 'And when you do want to see somebody,',
                zh: '而當你真的想見某個人，' },
      { t: 350, en: 'make a specific invitation.',
                zh: '就給一個具體的邀約。' },
      { t: 354, en: '“Let’s have a beer Thursday at six” beats “let’s get together.”',
                zh: '「週四六點去喝一杯」勝過「改天約」。' },
      { t: 358, en: 'One is a plan, the other is goodbye in slow motion.',
                zh: '前者是一個計畫，後者是慢動作的道別。' },
      { t: 363, en: 'Number twelve.',
                zh: '第十二條。' },
      { t: 364, en: 'Eliminate toxic people.',
                zh: '把有毒的人清出去。' },
      { t: 366, en: 'If someone consistently diminishes you,',
                zh: '如果有人一再貶低你、' },
      { t: 370, en: 'damages you, or poisons your life,',
                zh: '傷害你，或是毒害你的生活，' },
      { t: 372, en: 'get rid of them.',
                zh: '那就把他從你的生活裡移掉。' },
      { t: 374, en: 'Unfortunately, this includes relatives.',
                zh: '很遺憾，這也包括親戚。' },
      { t: 376, en: 'Shared DNA isn’t a license to treat you poorly.',
                zh: '流著同樣的血，不等於有權利這樣對你。' },
      { t: 380, en: 'Distance isn’t always cruel.',
                zh: '保持距離，不一定是殘忍。' },
      { t: 382, en: 'Sometimes distance is an act of wisdom.',
                zh: '有時候，保持距離是一種智慧。' },
      { t: 385, en: 'Okay, deep breath.',
                zh: '好，深呼吸。' },
    ],

    words: [
      { t: 247, en: 'just want to be heard', zh: '只是想有人聽他說',
        noteEn: 'Be heard is not the same as be answered — it means what you said '
          + 'actually landed on someone. “I don’t need a fix, I just want to be '
          + 'heard.”',
        noteZh: 'be heard 不是「被回答」，而是「你講的話真的進到對方那裡」。I don’t need a fix, I just want '
          + 'to be heard.（我不需要你幫我解決，我只是想有人聽我說。）' },
      { t: 258, en: 'assume incompetence before malice', zh: '先假設是笨拙，不是壞心',
        noteEn: 'A fixed piece of English advice, usually said about emails and '
          + 'messages. The pattern travels: assume X before Y = reach for the '
          + 'kinder explanation first.',
        noteZh: '英文裡一句固定的忠告，通常用在看 email 和訊息的時候。assume X before Y '
          + '這個句型可以搬走用：先往比較善意的那一邊想。' },
      { t: 270, en: 'No question.', zh: '這點沒話說、這絕對沒錯',
        noteEn: 'Spoken only, and always standing alone. It concedes a point flatly '
          + 'before you push back: “Some people are jerks. No question. But…”',
        noteZh: '只用在口語，而且永遠自成一句。用來乾脆承認對方的某一點，然後再轉折：Some people are jerks. No '
          + 'question. But…（有些人就是爛人，這點沒話說。但是……）' },
      { t: 285, en: 'an underrated diagnostic', zh: '一個被低估的判斷依據',
        noteEn: 'Underrated = better than people give it credit for; the opposite '
          + 'is overrated. Extremely common in speech about films, skills and '
          + 'habits.',
        noteZh: 'underrated 是「被低估了、其實比大家講的好」，相反是 overrated（被高估）。講電影、技能、習慣的時候口語裡超常用。' },
      { t: 299, en: 'keep score', zh: '記分數、計較誰欠誰',
        noteEn: 'From sport, but almost always used about relationships: silently '
          + 'counting who owed what to whom. “Stop keeping score with your '
          + 'flatmate.”',
        noteZh: '來自運動的「記分」，但幾乎都用在人際關係上，指在心裡算誰欠誰。Stop keeping score with your '
          + 'flatmate.（別再跟室友算來算去了。）' },
      { t: 333, en: 'a standing phone call', zh: '固定時間、不必再約的電話',
        noteEn: 'Standing in front of a noun means fixed and repeating, already in '
          + 'the diary: a standing meeting, a standing order, a standing '
          + 'invitation.',
        noteZh: 'standing 放在名詞前面，是「固定重複、行事曆上早就排好」的意思：a standing meeting（固定的會議）、a '
          + 'standing invitation（隨時都算數的邀請）。' },
      { t: 354, en: 'beats', zh: '比……好、勝過……',
        noteEn: 'Beats as a plain comparison, not a contest: “Walking beats the '
          + 'bus.” Spoken, short, and it saves you a whole “is better than” '
          + 'sentence.',
        noteZh: 'beats 當作單純的比較，不是比賽：「Walking beats the bus.」（走路比搭公車好。）口語、短，省掉一整句 is '
          + 'better than。' },
      { t: 376, en: 'not a license to…', zh: '不等於有權利……',
        noteEn: 'A license here is permission, not a document. Use it to refuse an '
          + 'excuse: “Being tired isn’t a license to talk to people like that.”',
        noteZh: '這裡的 license 是「許可」，不是證照。用來擋掉藉口：Being tired isn’t a license to talk '
          + 'to people like that.（累不代表你可以那樣跟人講話。）' },
    ],

    questions: [
      { t: 245, en: 'Code seven says ask before you solve. What does he say people often want instead of a solution?',
        zh: '第七條說「先問，再解決」。他說很多時候人們要的不是解答，而是什麼？',
        answerEn: 'To be heard. Sometimes they do want an answer, but many times they '
          + 'just want someone to listen — so ask before you go into '
          + 'problem-solving mode.',
        answerZh: '是「有人聽他說」。有時候他們確實想要答案，但很多時候只是想有人聽——所以在進入解決問題的模式之前，先問。' },
      { t: 271, en: 'He admits some people really are jerks. So why does he still say to start with a generous explanation?',
        zh: '他承認確實有些人就是爛人。那他為什麼還是說，要先給一個寬厚的解釋？',
        answerEn: 'Because the world contains fewer enemies and more overwhelmed '
          + 'people than we think — and you can always revise the explanation '
          + 'if the evidence changes.',
        answerZh: '因為這個世界上敵人比我們以為的少，被生活壓垮的人比我們以為的多——而且等證據變了，你隨時可以改口。' },
      { t: 310, en: 'When does he say generosity stops being generosity?',
        zh: '他說慷慨在什麼時候就不再是慷慨了？',
        answerEn: 'When you maintain a spreadsheet — the moment you start keeping '
          + 'score. Strong relationships come out roughly reciprocal over time, '
          + 'but not equal in every moment.',
        answerZh: '當你開始用試算表記下來的時候——也就是開始記分數的那一刻。好的關係拉長來看大致互相，但不會每個當下都剛好扯平。' },
      { t: 358, en: 'What is the difference between “Let’s have a beer Thursday at six” and “Let’s get together sometime”?',
        zh: '「週四六點去喝一杯」和「改天約一下」差在哪裡？',
        answerEn: 'One is a plan, the other is goodbye in slow motion. The specific '
          + 'invitation is what turns wanting to see someone into actually '
          + 'seeing them.',
        answerZh: '一個是計畫，另一個是慢動作的道別。具體的邀約，才是把「想見面」變成「真的見到面」的關鍵。' },
    ],

    tasks: [
      { en: 'Think of someone who annoyed you this week — a flatmate, a '
        + 'colleague, someone who never replied. Say the hostile explanation '
        + 'out loud, then say a more generous one. Which does the evidence '
        + 'actually support?',
        zh: '想一個這禮拜惹到你的人——室友、同事、已讀不回的那個人。先把「有敵意」的解釋說出來，再說一個比較寬容的版本。證據比較支持哪一個？' },
      { en: 'Name one person you keep saying “let’s get together sometime” to. '
        + 'Now say the specific invitation out loud: what, where, which day, '
        + 'what time.',
        zh: '說出一個你一直跟他說「改天約」的人。現在把具體的邀約出聲講出來：做什麼、在哪裡、星期幾、幾點。' },
      { en: 'Of these six codes, pick the one you are worst at. Say which it is '
        + 'in one sentence, then say in three more what you would actually do '
        + 'differently this week.',
        zh: '這六條裡，挑一條你做得最差的。用一句話說是哪一條，再用三句話說這禮拜你實際上會怎麼做不一樣。' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'cheat-productivity',
    videoId: 'c7jGXPEY54k',
    start: 387,
    end: 577,

    titleEn: 'Level three — getting things done',
    titleZh: '第三關——把事情做完',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'Daniel Pink — “30 Cheat Codes to Beat Every Level of Life”',

    aboutEn: 'Three minutes and ten seconds, six numbered codes, and one '
      + 'subject: actually getting things done — define done, start '
      + 'embarrassingly small, let it be easy, set tomorrow up tonight, '
      + 'track what other people owe you, and stop wearing busy as a badge. '
      + 'It is the most immediately usable stretch of the talk, because '
      + 'every code is one sentence long and he proves the best of them on '
      + 'himself, with a calendar entry and forty-seven mismatched socks.',
    aboutZh: ' '
      + '三分十秒，六條編號的密技，講的都是同一件事：怎麼真的把事情做完——先定義什麼叫「做完」、把第一步縮到小得讓你不好意思、讓事情簡單一點、今晚就把明天的第一個動作準備好、追蹤別人欠你什麼，還有別再把「很忙」當成勳章。這是整場演講裡最能立刻拿來用的一段，因為每一條都只有一句話，而他還拿自己當證明：一則行事曆提醒，加上四十七隻湊不成對的襪子。',

    watchForEn: 'One sentence explains why he puts a chore in his calendar instead '
      + 'of relying on himself. Listen for the pair: willpower and '
      + 'appointments.',
    watchForZh: '有一句話解釋了他為什麼把雜事排進行事曆，而不是靠自己。注意聽那組對照：意志力，和約好的時間。',

    lines: [
      { t: 387, en: 'Okay, deep breath.',
                zh: '好，深呼吸一下。' },
      { t: 388, en: 'Level three is lighter.',
                zh: '第三關輕鬆一點。' },
      { t: 390, en: 'It’s about actually getting things done.',
                zh: '講的是怎麼真的把事情做完。' },
      { t: 392, en: 'Level three: productivity.',
                zh: '第三關：生產力。' },
      { t: 394, en: 'Number 13.',
                zh: '第十三條。' },
      { t: 395, en: 'Define done before you begin.',
                zh: '開始之前，先定義什麼叫「做完」。' },
      { t: 397, en: 'Otherwise, every project quietly becomes an infinite undertaking.',
                zh: '不然每個案子都會在你沒察覺的時候，變成一件永遠做不完的事。' },
      { t: 401, en: 'What will finished look like?',
                zh: '「完成」到底長什麼樣子？' },
      { t: 403, en: 'Decide that first.',
                zh: '先把這件事決定好。' },
      { t: 404, en: 'And when you’re near the end, close to the finish,',
                zh: '而當你快做完了、已經接近終點的時候，' },
      { t: 408, en: 'take a page from Lorne Michaels, the creator of Saturday Night Live.',
                zh: '學一下《週六夜現場》的創辦人 Lorne Michaels。' },
      { t: 412, en: 'He once said,',
                zh: '他說過一句話：' },
      { t: 413, en: '“We don’t go on because we’re ready.',
                zh: '「我們上台，不是因為準備好了。' },
      { t: 415, en: 'We go on because it’s 11:30.”',
                zh: '我們上台，是因為十一點半到了。」' },
      { t: 418, en: 'So many times when I’m writing something,',
                zh: '我自己很多時候，在寫東西、' },
      { t: 420, en: 'or working on a speech or a video,',
                zh: '或是在弄一場演講、一支影片的時候，' },
      { t: 422, en: 'I just say to myself, “Dude, it’s 11:30.”',
                zh: '就會跟自己說：「兄弟，十一點半了。」' },
      { t: 425, en: 'Number 14.',
                zh: '第十四條。' },
      { t: 426, en: 'Make the first step embarrassingly small.',
                zh: '把第一步弄到小得讓你不好意思。' },
      { t: 429, en: 'Don’t write the book, write three sentences.',
                zh: '別想著寫一本書，先寫三句話。' },
      { t: 433, en: 'Don’t get in shape, put your shoes by the door.',
                zh: '別想著把身體練起來，先把鞋子放到門口。' },
      { t: 436, en: 'Don’t organize the house, clean one drawer.',
                zh: '別想著整理整間房子，先整理一個抽屜。' },
      { t: 439, en: 'The size of the first step and the odds of taking it',
                zh: '第一步有多大，跟你真的會不會踏出去，' },
      { t: 442, en: 'are inversely related.',
                zh: '兩者成反比。' },
      { t: 444, en: 'Make the first move so small',
                zh: '把第一個動作縮到很小，' },
      { t: 446, en: 'you’d be embarrassed not to do it.',
                zh: '小到你不做反而會不好意思。' },
      { t: 449, en: '15.',
                zh: '第十五條。' },
      { t: 450, en: 'Let it be easy.',
                zh: '就讓它簡單一點。' },
      { t: 452, en: 'Difficulty is not evidence of virtue.',
                zh: '困難不代表你比較高尚。' },
      { t: 455, en: 'Use the rotisserie chicken.',
                zh: '現成的烤雞就買下去。' },
      { t: 457, en: 'Listen to the audio book.',
                zh: '書用聽的也可以。' },
      { t: 459, en: 'Buy the pre-cut vegetables.',
                zh: '切好的蔬菜就買下去。' },
      { t: 461, en: 'Take the shortcut when the shortcut actually works.',
                zh: '捷徑真的有用的時候，就走捷徑。' },
      { t: 464, en: 'Somewhere along the way, we absorb the idea',
                zh: '不知道從什麼時候開始，我們吸收了一個觀念：' },
      { t: 467, en: 'that if something isn’t excruciatingly hard, it doesn’t count.',
                zh: '一件事如果沒有痛苦到極點，就不算數。' },
      { t: 472, en: 'That’s just self-inflicted pain with a superiority complex.',
                zh: '那只是自己找罪受，還外加一種優越感。' },
      { t: 475, en: 'Number 16.',
                zh: '第十六條。' },
      { t: 476, en: 'Prepare tomorrow’s first move tonight.',
                zh: '今天晚上，就先把明天的第一個動作準備好。' },
      { t: 479, en: 'Make starting so easy that your morning self,',
                zh: '把「開始」弄得夠簡單，讓早上的那個你——' },
      { t: 483, en: 'who, let’s be honest, you cannot trust,',
                zh: '老實說，那個你根本不可靠——' },
      { t: 486, en: 'has almost no decisions to make.',
                zh: '幾乎沒有什麼需要決定的。' },
      { t: 488, en: 'Open the document, set out the running clothes,',
                zh: '把檔案先開好、把跑步的衣服先拿出來，' },
      { t: 491, en: 'put the unpleasant task on your calendar',
                zh: '把你不想做的那件事排進行事曆，' },
      { t: 492, en: 'with a day, a time, and a place.',
                zh: '寫上日期、時間和地點。' },
      { t: 494, en: 'A few weeks ago, I scheduled “clean my top dresser drawer”',
                zh: '幾個禮拜前，我把「清理五斗櫃最上面那一格抽屜」排進行事曆，' },
      { t: 498, en: 'for 2:30 on a Wednesday.',
                zh: '時間訂在某個星期三的兩點半。' },
      { t: 500, en: 'And at half two on that Wednesday,',
                zh: '到了那個星期三的兩點半，' },
      { t: 502, en: 'I opened that drawer and removed roughly forty-seven mismatched socks.',
                zh: '我打開那格抽屜，清出了大概四十七隻湊不成對的襪子。' },
      { t: 506, en: 'Was very proud of myself.',
                zh: '我覺得自己超厲害。' },
      { t: 508, en: 'Willpower is usually unreliable.',
                zh: '意志力通常靠不住。' },
      { t: 510, en: 'Appointments are usually unavoidable.',
                zh: '但約好的時間通常躲不掉。' },
      { t: 512, en: 'Number 17.',
                zh: '第十七條。' },
      { t: 513, en: 'Keep a waiting-for list.',
                zh: '準備一份「等別人」的清單。' },
      { t: 515, en: 'I learned this one from David Allen’s Getting Things Done.',
                zh: '這一條我是從 David Allen 的《Getting Things Done》學來的。' },
      { t: 518, en: 'We’re usually pretty good at tracking what we need to do,',
                zh: '我們通常很會追蹤「自己該做什麼」，' },
      { t: 521, en: 'but we’re much worse at tracking what other people owe us:',
                zh: '但很不擅長追蹤「別人欠我們什麼」：' },
      { t: 524, en: 'the proposal somebody is reviewing,',
                zh: '某個人正在審的提案、' },
      { t: 526, en: 'the document somebody promised to send,',
                zh: '某個人答應要寄給你的文件、' },
      { t: 529, en: 'the answer you need before you can move forward.',
                zh: '還有那個非等到不可、不然你沒辦法往下走的答覆。' },
      { t: 532, en: 'Write those things down in one place.',
                zh: '把這些東西寫在同一個地方。' },
      { t: 534, en: 'Otherwise, your brain will keep trying to remember them,',
                zh: '不然你的腦袋會一直想幫你記住，' },
      { t: 536, en: 'usually at 3:00 in the morning.',
                zh: '而且通常是在凌晨三點。' },
      { t: 538, en: 'Number 18.',
                zh: '第十八條。' },
      { t: 539, en: 'Treat constant busyness as a warning, not a status symbol.',
                zh: '把「一直很忙」當成警訊，而不是一種身分象徵。' },
      { t: 544, en: 'When I ask someone, “Hey, how are you?”',
                zh: '當我問別人：「嘿，最近好嗎？」' },
      { t: 546, en: 'and they answer, “Oh, I’m so busy,”',
                zh: '對方回我：「哎，我超忙的。」' },
      { t: 548, en: 'I become suspicious.',
                zh: '我就會起疑心。' },
      { t: 550, en: 'Sometimes busyness means your life is full.',
                zh: '有時候忙代表你的生活很充實。' },
      { t: 552, en: 'But sometimes it means you’re refusing to make choices.',
                zh: '但有時候代表你在逃避做選擇。' },
      { t: 555, en: 'You’re ignoring priorities,',
                zh: '代表你沒在分輕重緩急，' },
      { t: 556, en: 'or you’re just feeding your own ego.',
                zh: '或者你只是在餵養自己的虛榮心。' },
      { t: 559, en: 'When everything feels urgent, stop adding.',
                zh: '當每件事都很急，就別再往上加東西了。' },
      { t: 564, en: 'Subtract. Cancel something, decline something.',
                zh: '用減的。取消一件事、推掉一件事。' },
      { t: 567, en: 'Leave some white space for a walk,',
                zh: '留一點空白，去散個步、' },
      { t: 569, en: 'a strange book, or an unexpected conversation,',
                zh: '看一本奇怪的書，或是聊一場沒預料到的天，' },
      { t: 571, en: 'or just fifteen minutes of staring out the window.',
                zh: '又或者就只是盯著窗外十五分鐘。' },
      { t: 574, en: 'Not every square on the calendar needs to produce something.',
                zh: '行事曆上的每一格，不是都得產出些什麼。' },
    ],

    words: [
      { t: 395, en: 'define done', zh: '先講清楚什麼叫「做完」',
        noteEn: 'Done used as a noun — the finish line, agreed before you start. '
          + '“Before we begin, can we define done?” Natural in a project '
          + 'meeting and just as useful inside your own head.',
        noteZh: 'done 在這裡當名詞用，指「事先講好的那條終點線」。Before we begin, can we define '
          + 'done?（開始之前，我們可以先把「做完」的標準講清楚嗎？）開會可以這樣說，自己問自己也一樣好用。' },
      { t: 408, en: 'take a page from someone', zh: '學某人的一招、照某人的做法來',
        noteEn: 'To borrow how somebody else does something. The full form is “take '
          + 'a page from someone’s book”; he shortens it, as most speakers do. '
          + '“Take a page from your flatmate — she books the gym a week ahead.”',
        noteZh: '意思是「借用某人的做法」。完整說法是 take a page from someone’s '
          + 'book，他跟大多數人一樣把它縮短了。Take a page from your flatmate — she books the '
          + 'gym a week ahead.（學學你室友，她健身房都提前一週訂好。）' },
      { t: 426, en: 'embarrassingly small', zh: '小到讓你不好意思',
        noteEn: 'Adverb plus adjective, where the adverb says how you would feel '
          + 'about it: embarrassingly cheap, absurdly early, painfully obvious. '
          + 'Spoken, and an easy pattern to reuse on anything.',
        noteZh: '副詞加形容詞，副詞負責講「你對它的感受」：embarrassingly cheap（便宜到不好意思）、absurdly '
          + 'early（早得離譜）、painfully obvious（明顯到讓人尷尬）。口語，而且這個句型套什麼都通。' },
      { t: 442, en: 'inversely related', zh: '成反比',
        noteEn: 'One goes up, the other goes down. Keep it for writing and for '
          + 'numbers; out loud, most people say the plainer “the bigger it is, '
          + 'the less likely you are to do it”.',
        noteZh: '一個變大，另一個就變小。書面和講數字時用它；用嘴巴講的時候，大部分人會說得白一點：the bigger it is, the '
          + 'less likely you are to do it（越大，你就越不可能去做）。' },
      { t: 461, en: 'take the shortcut', zh: '走捷徑',
        noteEn: 'Neutral here, not lazy — he adds “when the shortcut actually '
          + 'works” to make that clear. The nearby phrase “cut corners” is '
          + 'always negative: you skipped something you shouldn’t have.',
        noteZh: '這裡沒有貶意，不是偷懶——他後面補了 when the shortcut actually works '
          + '就是為了講清楚這點。長得很像的 cut corners 則一定是負面的：該做的沒做、偷工減料。' },
      { t: 513, en: 'a waiting-for list', zh: '一份「等別人」的清單',
        noteEn: 'Not a to-do list — a list of what other people owe you. The '
          + 'hyphens glue the phrase into one word you can put in front of a '
          + 'noun, the same way as “a nice-to-have feature”.',
        noteZh: '不是 to-do list，而是「別人欠你什麼」的清單。中間的連字號把整串黏成一個可以放在名詞前面的形容詞，跟 a '
          + 'nice-to-have feature（有也不錯的功能）是同一種用法。' },
      { t: 539, en: 'a status symbol', zh: '身分象徵',
        noteEn: 'Something you own or do mainly so other people can see it. Usually '
          + 'said with a raised eyebrow: “Working weekends has become a status '
          + 'symbol around here.”',
        noteZh: '指你擁有或去做某件事，主要是為了讓別人看見。講的時候通常帶點揶揄：Working weekends has become a '
          + 'status symbol around here.（在這裡，週末加班已經變成一種身分象徵了。）' },
      { t: 567, en: 'leave some white space', zh: '留白、刻意空著不排事情',
        noteEn: 'Borrowed from page design: the empty part that makes everything '
          + 'else readable. Said of a calendar, it means time left unbooked on '
          + 'purpose. “I’m leaving Friday afternoons as white space.”',
        noteZh: '從版面設計借來的說法：讓其他東西好讀的那片空白。用在行事曆上，指刻意不排事情的時間。I’m leaving Friday '
          + 'afternoons as white space.（我刻意把週五下午空著。）' },
    ],

    questions: [
      { t: 413, en: 'What does Lorne Michaels say decides when the show goes on?',
        zh: 'Lorne Michaels 說，決定節目什麼時候上場的，是什麼？',
        answerEn: 'Not being ready — the clock. “We don’t go on because we’re ready. '
          + 'We go on because it’s 11:30.” Pink says it to himself when he is '
          + 'finishing a piece of writing.',
        answerZh: '不是「準備好了」，而是時鐘。「我們上台不是因為準備好了，是因為十一點半到了。」Pink 在收尾一篇稿子的時候，會拿這句話跟自己說。' },
      { t: 429, en: 'He gives three examples of an embarrassingly small first step. What are they?',
        zh: '他舉了三個「小到不好意思」的第一步。分別是什麼？',
        answerEn: 'Don’t write the book, write three sentences. Don’t get in shape, '
          + 'put your shoes by the door. Don’t organize the house, clean one '
          + 'drawer.',
        answerZh: '別想著寫一本書，先寫三句話；別想著把身體練起來，先把鞋子放到門口；別想著整理整間房子，先整理一個抽屜。' },
      { t: 494, en: 'What did he put in his calendar, and what happened when the time came?',
        zh: '他把什麼事排進行事曆？時間到了以後發生了什麼事？',
        answerEn: 'Cleaning his top dresser drawer, at 2:30 on a Wednesday. At half '
          + 'two that day he opened it and removed roughly forty-seven '
          + 'mismatched socks — his proof that willpower is unreliable and '
          + 'appointments are unavoidable.',
        answerZh: ' '
          + '清理五斗櫃最上面那一格抽屜，時間訂在某個星期三的兩點半。那天兩點半他真的打開抽屜，清出大概四十七隻湊不成對的襪子——這就是他的證明：意志力靠不住，但約好的時間躲不掉。' },
      { t: 550, en: 'When someone answers “I’m so busy”, what does he suspect it might really mean?',
        zh: '當別人回答「我超忙的」，他懷疑那背後可能是什麼意思？',
        answerEn: 'Sometimes it does mean your life is full. But sometimes it means '
          + 'you are refusing to make choices, ignoring priorities, or just '
          + 'feeding your own ego.',
        answerZh: '有時候確實代表你的生活很充實。但有時候代表你在逃避做選擇、沒在分輕重緩急，或者只是在餵養自己的虛榮心。' },
    ],

    tasks: [
      { en: 'Pick one thing you have been meaning to start — a course, a side '
        + 'project, getting fit. Say out loud what done looks like, then say '
        + 'a first step small enough to embarrass you.',
        zh: ' '
          + '挑一件你一直想開始卻還沒開始的事——一門課、一個自己的小專案、把身體練起來。出聲說說看：這件事「做完」長什麼樣子？然後說出一個小到讓你不好意思的第一步。' },
      { en: 'Make your waiting-for list out loud: three things other people owe '
        + 'you right now. Then say which one you are going to chase, and '
        + 'when.',
        zh: '出聲列出你的「等別人」清單：現在有哪三件事是別人欠你的。然後說說你打算追哪一件、什麼時候追。' },
      { en: 'Of the six codes in this level, pick the one you ignore most. Say '
        + 'which it is, why you ignore it, and the one thing you will '
        + 'actually do differently this week.',
        zh: '這一關的六條密技裡，挑出你最常忽略的那一條。說出是哪一條、為什麼會忽略它，還有這個禮拜你真的會改的那一件事。' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'cheat-work',
    videoId: 'c7jGXPEY54k',
    start: 577,
    end: 744,

    titleEn: 'Level four — work',
    titleZh: '第四關——工作',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'Daniel Pink — “30 Cheat Codes to Beat Every Level of Life”',

    aboutEn: 'Just under three minutes, six separate pieces of advice, and every '
      + 'one of them about work: send the recap email, make your boss’s '
      + 'life easier, ask for the real deadline behind the stated one, lead '
      + 'with the request, get good at what everybody else avoids, and be '
      + 'the boss you should have had. It is the most immediately usable '
      + 'stretch of the whole talk — he says “especially early in your '
      + 'career”, and there is nothing here you could not start doing on '
      + 'Monday morning.',
    aboutZh: ' '
      + '不到三分鐘，六條各自獨立的建議，全部都跟工作有關：會後把重點回顧信寄出去、讓主管的日子好過一點、問出對方口中那個截止日背後真正的截止日、開門見山講出你的請求、把大家都在閃的那件事練到很強，還有——成為你當初應該遇到的那種主管。這是整場演講裡最能馬上拿來用的一段；他自己說「尤其是在職涯早期」，而這裡每一條，星期一早上就能開始做。',

    watchForEn: 'Every code here is a rule and then the reason for it. Listen for '
      + 'the reason on number nineteen — it is not the one you expect.',
    watchForZh: '這裡的每一條，都是先給規則、再給理由。特別注意聽第十九條的理由——跟你以為的不一樣。',

    lines: [
      { t: 577, en: 'Now, that’s the machinery of getting things done,',
                zh: '好，以上就是「把事情做完」的那一整套機制，' },
      { t: 580, en: 'but most of us don’t do it alone.',
                zh: '但我們大多數人，並不是一個人在做這些事。' },
      { t: 582, en: 'Level four: work.',
                zh: '第四關：工作。' },
      { t: 584, en: 'Nineteen.',
                zh: '第十九條。' },
      { t: 585, en: 'Send the recap email.',
                zh: '會後把那封重點回顧信寄出去。' },
      { t: 587, en: 'After an important meeting, send a short note.',
                zh: '重要的會議結束後，寄一封簡短的信。' },
      { t: 590, en: 'Here’s what we decided.',
                zh: '我們決定了這些事。' },
      { t: 591, en: 'Here’s who is doing what.',
                zh: '誰負責哪一項。' },
      { t: 593, en: 'Here’s when it’s due.',
                zh: '什麼時候要交。' },
      { t: 594, en: 'This helps everybody else,',
                zh: '這對其他人都有幫助，' },
      { t: 596, en: 'but it also helps you,',
                zh: '但其實也幫到你自己，' },
      { t: 598, en: 'because translating a conversation into writing',
                zh: '因為把一場對話轉成文字，' },
      { t: 600, en: 'forces you to understand what actually happened.',
                zh: '會逼你搞清楚剛剛到底發生了什麼。' },
      { t: 603, en: 'Now, AI can help organize that note,',
                zh: '當然，AI 可以幫你把那封信整理好，' },
      { t: 606, en: 'but don’t let it do all the thinking.',
                zh: '但不要讓它連思考都一起做完。' },
      { t: 608, en: 'The thinking is part of the benefit.',
                zh: '那個思考本身，就是好處的一部分。' },
      { t: 611, en: 'Number twenty.',
                zh: '第二十條。' },
      { t: 612, en: 'Make your boss’s life easier.',
                zh: '讓你主管的日子好過一點。' },
      { t: 615, en: 'Here’s a lesson from every workplace ever.',
                zh: '這是每一個職場都通用的一課。' },
      { t: 618, en: 'Bosses divide employees into two categories:',
                zh: '主管會把員工分成兩類：' },
      { t: 620, en: 'people who make my life harder,',
                zh: '讓我的日子更難過的人，' },
      { t: 623, en: 'and people who make my life easier.',
                zh: '還有讓我的日子好過一點的人。' },
      { t: 626, en: 'Especially early in your career,',
                zh: '尤其是在你職涯的早期，' },
      { t: 628, en: 'make sure you’re in the second category.',
                zh: '一定要確保自己是在第二類。' },
      { t: 631, en: 'Understand what your boss is trying to accomplish.',
                zh: '搞清楚你主管想達成的是什麼。' },
      { t: 634, en: 'Help her achieve her goals.',
                zh: '幫她把她的目標做到。' },
      { t: 635, en: 'Take useful things off her plate.',
                zh: '主動接走一些她手上、而且真的有用的事。' },
      { t: 637, en: 'That’s how you become indispensable.',
                zh: '你就是這樣變成不可取代的。' },
      { t: 640, en: 'Number twenty-one.',
                zh: '第二十一條。' },
      { t: 641, en: 'Ask for the deadline.',
                zh: '問清楚截止日。' },
      { t: 643, en: 'Then ask for the real deadline.',
                zh: '然後再問一次：真正的截止日是哪一天。' },
      { t: 645, en: 'When do you need this?',
                zh: '你什麼時候要？' },
      { t: 646, en: 'And when will somebody actually use this?',
                zh: '還有：這東西到底什麼時候真的會被用到？' },
      { t: 648, en: 'Those are two very different questions.',
                zh: '這是兩個非常不一樣的問題。' },
      { t: 651, en: 'One answer might be Friday.',
                zh: '一個答案可能是「這週五」。' },
      { t: 653, en: 'The other might be the board meeting',
                zh: '另一個可能是「董事會開會的時候」，' },
      { t: 655, en: 'three Thursdays from now.',
                zh: '也就是三個星期後的那個星期四。' },
      { t: 657, en: 'Deadlines matter,',
                zh: '截止日是重要的，' },
      { t: 659, en: 'but fake deadlines create unnecessary work',
                zh: '但假的截止日只會製造出不必要的工作，' },
      { t: 662, en: 'and unnecessary panic.',
                zh: '還有不必要的恐慌。' },
      { t: 664, en: 'And once you understand that,',
                zh: '一旦你搞懂這件事，' },
      { t: 665, en: 'you’ll get the work done at the right time.',
                zh: '你就會在對的時間把事情做完。' },
      { t: 668, en: 'And just as important,',
                zh: '而且同樣重要的是，' },
      { t: 669, en: 'you won’t inflict unnecessary deadlines on other people.',
                zh: '你也不會把不必要的截止日丟到別人身上。' },
      { t: 673, en: 'Number twenty-two.',
                zh: '第二十二條。' },
      { t: 674, en: 'Lead with the request and bring a recommendation.',
                zh: '開門見山講出你的請求，而且帶著建議一起來。' },
      { t: 678, en: 'Don’t begin an email with seven paragraphs of throat clearing.',
                zh: '不要在信的開頭鋪七段廢話才進入正題。' },
      { t: 682, en: 'Tell people what you need.',
                zh: '直接告訴對方你需要什麼。' },
      { t: 684, en: 'And if you’re bringing somebody a problem,',
                zh: '如果你要拿一個問題去找人，' },
      { t: 686, en: 'try to bring a proposed solution, too.',
                zh: '盡量也帶一個你建議的解法一起去。' },
      { t: 690, en: 'Diagnosis is useful.',
                zh: '診斷有用，' },
      { t: 691, en: 'Prescription is essential.',
                zh: '但開藥方才是非有不可的。' },
      { t: 693, en: 'Instead of “this isn’t working,”',
                zh: '與其只說「這樣行不通」，' },
      { t: 695, en: 'try: “This isn’t working.',
                zh: '試試看這樣講：「這樣行不通。' },
      { t: 697, en: 'Here’s what I think is causing it.',
                zh: '我覺得原因出在這裡。' },
      { t: 699, en: 'And here’s what I recommend we do next.”',
                zh: '我建議我們接下來這樣做。」' },
      { t: 701, en: 'Number twenty-three.',
                zh: '第二十三條。' },
      { t: 703, en: 'Get good at something valuable that everybody else avoids.',
                zh: '去把一件有價值、但大家都在閃的事練到很強。' },
      { t: 706, en: 'The spreadsheet nobody wants to own.',
                zh: '那份沒人想接手的試算表。' },
      { t: 708, en: 'The presentation nobody wants to give.',
                zh: '那場沒人想上台講的簡報。' },
      { t: 710, en: 'The difficult conversation everybody keeps avoiding.',
                zh: '那場大家一直拖著不談的難談話。' },
      { t: 713, en: 'Neglected skills have very little competition,',
                zh: '沒人要練的技能，競爭者非常少，' },
      { t: 716, en: 'because everyone is fighting for the glamorous territory,',
                zh: '因為大家都在搶那些光鮮亮麗的地盤，' },
      { t: 719, en: 'but the neglected territory is sitting there undefended.',
                zh: '而沒人要的那塊地，就這樣空在那裡沒人守。' },
      { t: 722, en: 'And number twenty-four,',
                zh: '還有第二十四條，' },
      { t: 723, en: 'for anybody who leads anybody:',
                zh: '這條是給任何帶人的人：' },
      { t: 725, en: 'don’t be the boss you had.',
                zh: '不要變成你以前遇到的那種主管。' },
      { t: 727, en: 'Be the boss you should have had.',
                zh: '要變成你當初應該遇到的那種主管。' },
      { t: 729, en: 'Remember what your worst managers did.',
                zh: '回想一下你遇過最糟的主管都做了什麼。' },
      { t: 732, en: 'Then do the opposite.',
                zh: '然後反著做。' },
      { t: 733, en: 'Then remember what you desperately needed from them',
                zh: '接著再想想，你當時多麼需要他們給你什麼、' },
      { t: 735, en: 'and never got.',
                zh: '卻從來沒有拿到。' },
      { t: 737, en: 'Whether that’s clarity, encouragement, honest feedback,',
                zh: '不管那是把話講清楚、是鼓勵、是誠實的回饋，' },
      { t: 739, en: 'or a second chance.',
                zh: '還是再給一次機會。' },
      { t: 740, en: 'Now go provide that to somebody else.',
                zh: '現在，換你把那個東西給別人。' },
      { t: 742, en: 'Level four done.',
                zh: '第四關完成。' },
    ],

    words: [
      { t: 585, en: 'the recap email', zh: '會後的重點回顧信',
        noteEn: 'Recap = a short summary of what just happened. Also a verb: “Let '
          + 'me recap.” The email itself is only three lines — decided, who, '
          + 'when.',
        noteZh: 'recap 是「把剛剛的內容簡短整理一遍」，也可以當動詞：Let me '
          + 'recap.（我重點再講一遍。）這封信本身只有三行：決定了什麼、誰負責、什麼時候要交。' },
      { t: 612, en: 'make someone’s life easier', zh: '讓某人的日子好過一點',
        noteEn: 'The highest praise there is in a workplace, and the fastest way to '
          + 'be remembered. The opposite, make someone’s life harder, is just '
          + 'as common and just as blunt.',
        noteZh: '在職場上這是最高的稱讚，也是最快被記住的方法。反過來的 make someone’s life '
          + 'harder（讓某人的日子更難過）一樣常用，也一樣直接。' },
      { t: 635, en: 'take something off someone’s plate', zh: '把某件事從某人手上接走',
        noteEn: 'Your plate is everything you are carrying right now. The other '
          + 'half of the pair is “I’ve got a lot on my plate” — I’m overloaded. '
          + 'Spoken, and used constantly at work.',
        noteZh: 'plate（盤子）指你現在手上扛著的所有事。配套的另一句是 I’ve got a lot on my '
          + 'plate（我手上一堆事）。口語，職場上天天在用。' },
      { t: 637, en: 'indispensable', zh: '不可取代的',
        noteEn: 'Literally: cannot be done without. Used of people and of tools — '
          + '“She’s become indispensable.” Stress the third syllable: '
          + 'in-dis-PEN-sable.',
        noteZh: '字面是「少了就不行」。人跟工具都能用：She’s become '
          + 'indispensable.（她已經變得不可取代了。）重音在第三個音節：in-dis-PEN-sable。' },
      { t: 669, en: 'inflict something on somebody', zh: '把某件討人厭的事強加在別人身上',
        noteEn: 'What follows is always unwanted — a deadline, a meeting, your '
          + 'holiday photos. Slightly formal, and often half-joking: “Sorry to '
          + 'inflict this on you.”',
        noteZh: '後面接的一定是別人不想要的東西——截止日、會議、你的度假照片。語氣稍正式，常帶半開玩笑：Sorry to inflict this '
          + 'on you.（抱歉把這個丟給你。）' },
      { t: 674, en: 'lead with…', zh: '開門見山、一開頭就先講',
        noteEn: 'From journalism: put the most important thing first. “Lead with '
          + 'the number, then explain it.” Works for emails, messages and '
          + 'answers in an interview.',
        noteZh: '來自新聞業：把最重要的放最前面。Lead with the number, then explain '
          + 'it.（先講數字，再解釋。）寫信、傳訊息、面試回答都能用。' },
      { t: 678, en: 'throat clearing', zh: '進入正題前的鋪陳廢話',
        noteEn: 'The noise before the point — “I hope you’re well, I know you’re '
          + 'busy, I was just wondering…”. Mildly rude about the writing, not '
          + 'about the person.',
        noteZh: '真正重點前面那些雜音——「希望你一切都好、我知道你很忙、我只是想問一下……」。是在嫌那段文字囉嗦，不是在罵人。' },
      { t: 703, en: 'get good at something', zh: '把某件事練到很強',
        noteEn: 'Get good at + noun or -ing, and it implies practice rather than '
          + 'talent: “I want to get good at saying no.” Spoken; a CV would say '
          + 'develop instead.',
        noteZh: 'get good at + 名詞或 -ing，而且暗示是「練出來的」，不是天分：I want to get good at '
          + 'saying no.（我想把「拒絕」這件事練好。）口語；履歷上會改用 develop。' },
    ],

    questions: [
      { t: 598, en: 'The recap email helps everybody else. Why does he say it also helps you?',
        zh: '會後的回顧信對其他人有幫助。他說為什麼它也幫到你自己？',
        answerEn: 'Because translating a conversation into writing forces you to '
          + 'understand what actually happened. He adds that AI can help '
          + 'organise the note, but don’t let it do all the thinking — the '
          + 'thinking is part of the benefit.',
        answerZh: '因為把一場對話轉成文字，會逼你搞清楚剛剛到底發生了什麼。他還補一句：AI '
          + '可以幫你整理那封信，但不要讓它連思考都做完——那個思考本身就是好處的一部分。' },
      { t: 620, en: 'He says bosses divide employees into two categories. What are they?',
        zh: '他說主管會把員工分成兩類。是哪兩類？',
        answerEn: 'People who make my life harder and people who make my life easier. '
          + 'Especially early in your career, he says, make sure you’re in the '
          + 'second one.',
        answerZh: '讓我的日子更難過的人，還有讓我的日子好過一點的人。他說尤其在職涯早期，一定要確保自己在第二類。' },
      { t: 645, en: 'He says to ask for the deadline twice. What are the two questions?',
        zh: '他說截止日要問兩次。那兩個問題分別是什麼？',
        answerEn: 'When do you need this? And when will somebody actually use this? '
          + 'One answer might be Friday; the other might be the board meeting '
          + 'three Thursdays from now.',
        answerZh: '「你什麼時候要？」還有「這東西到底什麼時候真的會被用到？」一個答案可能是這週五，另一個可能是三個星期後的董事會。' },
      { t: 695, en: 'Instead of “this isn’t working”, what three things does he want you to say?',
        zh: '他希望你不要只說「這樣行不通」，而是要講出哪三件事？',
        answerEn: 'This isn’t working; here’s what I think is causing it; and here’s '
          + 'what I recommend we do next. Diagnosis is useful, he says, but '
          + 'prescription is essential.',
        answerZh: '這樣行不通；我覺得原因出在這裡；我建議我們接下來這樣做。他說診斷有用，但開藥方才是非有不可的。' },
    ],

    tasks: [
      { en: 'Think of the last meeting, class or group project you sat in. Say '
        + 'the recap email out loud in three sentences: what was decided, who '
        + 'is doing what, when it’s due.',
        zh: '想一下你最近參加的一場會議、一堂課或一個小組報告。出聲把那封回顧信講出來，只要三句：決定了什麼、誰負責哪一項、什麼時候要交。' },
      { en: 'Take something that genuinely isn’t working right now — a '
        + 'flatmate, a group project, a team you’re on, an app you use every '
        + 'day — and say it in his three parts: what isn’t working, what you '
        + 'think is causing it, what you recommend.',
        zh: '找一件現在真的不順的事——室友、小組報告、你待的團隊、每天在用的某個 '
          + 'app——用他的三段式講出來：哪裡不順、你覺得原因是什麼、你建議怎麼做。' },
      { en: 'Pick one of these six codes, and only one. Say which, and say what '
        + 'you would actually do differently on Monday. If none of them would '
        + 'change anything, say that instead.',
        zh: '從這六條裡挑一條，而且只能挑一條。說出是哪一條，還有你星期一會真的做哪裡不一樣。如果哪一條都不會改變什麼，那就老實說沒有。' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'cheat-life',
    videoId: 'c7jGXPEY54k',
    start: 744,
    end: 922,

    titleEn: 'Level five — living',
    titleZh: '第五關——生活',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'Daniel Pink — “30 Cheat Codes to Beat Every Level of Life”',

    aboutEn: 'Three minutes, six cheat codes, and the last of Pink’s five levels '
      + '— the one where the advice stops being about getting things done '
      + 'and starts being about the shape of a life. It closes on the code '
      + 'he told you at the very start he was saving for last: two '
      + 'sentences that sort the suffering worth accepting from the '
      + 'suffering worth removing.',
    aboutZh: '三分鐘，六條密技，是 Pink '
      + '五個關卡裡的最後一關——從這裡開始，建議不再是「事情怎麼做完」，而是「你的生活要長成什麼樣子」。最後收在他一開場就預告要「留到最後」的那一條：兩句話，把值得接受的痛苦，和該拿掉的痛苦分開。',

    watchForEn: 'The last code splits suffering in two — necessary and unnecessary. '
      + 'Listen for which kind he tells you to keep.',
    watchForZh: '最後一條把痛苦分成兩種：必要的和不必要的。注意聽他叫你留下哪一種。',

    lines: [
      { t: 744, en: 'One level left.',
                zh: '只剩最後一關了。' },
      { t: 746, en: 'It’s where all of this either adds up to a life or it doesn’t.',
                zh: '前面這些東西，到這一關要嘛加總成一個人生，要嘛什麼都不是。' },
      { t: 750, en: 'And the code I told you I saved for last',
                zh: '而我說過要留到最後的那一條，' },
      { t: 752, en: 'is waiting for you at the end.',
                zh: '就在這一段的結尾等你。' },
      { t: 754, en: 'Twenty-five.',
                zh: '第二十五條。' },
      { t: 755, en: 'Design your environment around your behavior.',
                zh: '照著你的行為，去設計你的環境。' },
      { t: 758, en: 'Store things where you use them,',
                zh: '東西要放在你真的會用到它的地方，' },
      { t: 760, en: 'not where they’re supposedly meant to go.',
                zh: '而不是放在「照理說該放」的那個地方。' },
      { t: 763, en: 'Keep the medicine near the coffee maker',
                zh: '藥就放在咖啡機旁邊，' },
      { t: 765, en: 'if you take it with breakfast.',
                zh: '如果你習慣配早餐吃的話。' },
      { t: 766, en: 'Put the book on your pillow',
                zh: '書就放在枕頭上，' },
      { t: 767, en: 'if you want to read before bed.',
                zh: '如果你想睡前看個幾頁的話。' },
      { t: 769, en: 'And embrace strategic duplication.',
                zh: '還有，大方一點，同樣的東西多準備幾份。' },
      { t: 771, en: 'Two chargers, two umbrellas, six pairs of reading glasses.',
                zh: '兩個充電器、兩把雨傘、六副老花眼鏡。' },
      { t: 775, en: 'Redundancy beats self-discipline.',
                zh: '多準備幾份，比自律有用。' },
      { t: 777, en: 'Number twenty-six.',
                zh: '第二十六條。' },
      { t: 779, en: 'Spend money eliminating recurring misery',
                zh: '花錢先解決那些一再發生的折磨，' },
      { t: 781, en: 'before buying occasional pleasure.',
                zh: '再花錢買偶爾一次的享受。' },
      { t: 785, en: 'Fix the terrible mattress before booking the fancy weekend.',
                zh: '先把那張爛床墊換掉，再去訂那個高級的週末小旅行。' },
      { t: 788, en: 'Replace the shoes that hurt your feet.',
                zh: '把那雙磨腳的鞋換掉。' },
      { t: 789, en: 'Buy the second monitor that makes every workday easier.',
                zh: '買下那台讓你每個上班日都輕鬆一點的第二螢幕。' },
      { t: 793, en: 'Pay to remove regular annoyances.',
                zh: '花錢把那些天天在煩你的小事除掉。' },
      { t: 795, en: 'The weekend in Antigua lasts three days.',
                zh: '在安地卡的那個週末只有三天。' },
      { t: 798, en: 'The mattress is every night of your year.',
                zh: '床墊卻是你一整年的每一個晚上。' },
      { t: 800, en: 'Number twenty-seven.',
                zh: '第二十七條。' },
      { t: 801, en: 'Create traditions on purpose.',
                zh: '刻意去創造傳統。' },
      { t: 803, en: 'Sunday dinners, birthday breakfast,',
                zh: '週日的晚餐、生日的早餐、' },
      { t: 806, en: 'the same ridiculous photo every Thanksgiving.',
                zh: '每年感恩節都拍同一張蠢照片。' },
      { t: 809, en: 'Rituals turn passing time into a life you can actually remember.',
                zh: '儀式會把一段就這樣過掉的時間，變成你真的記得住的人生。' },
      { t: 813, en: 'In our house, we celebrate every New Year’s Day',
                zh: '我們家每年元旦都會慶祝一下，' },
      { t: 815, en: 'by making something called lucky pudding.',
                zh: '做的是一種叫「幸運布丁」的東西。' },
      { t: 817, en: 'The tradition began more than twenty years ago, almost by accident.',
                zh: '這個傳統是二十幾年前開始的，幾乎可以說是誤打誤撞。' },
      { t: 821, en: 'Now, it has taken on the significance of a sacred religious rite.',
                zh: '現在它已經變得跟神聖的宗教儀式一樣重要了。' },
      { t: 825, en: 'Don’t wait for traditions to form on their own.',
                zh: '不要等傳統自己長出來。' },
      { t: 827, en: 'Build them.',
                zh: '自己去把它建起來。' },
      { t: 828, en: 'Number twenty-eight.',
                zh: '第二十八條。' },
      { t: 830, en: 'Stop trying to be normal.',
                zh: '別再努力想當一個「正常人」。' },
      { t: 832, en: 'Normal is crowded.',
                zh: '正常那一區很擠。' },
      { t: 833, en: 'Conformity is boring.',
                zh: '從眾很無聊。' },
      { t: 835, en: 'Every interesting person I know is interesting',
                zh: '我認識的每一個有趣的人，他們之所以有趣，' },
      { t: 837, en: 'precisely at the spots where they stopped asking, “Is this normal?”',
                zh: '正好都是在他們不再問「這樣正常嗎？」的那些地方，' },
      { t: 840, en: 'and started asking, “Is this right for me?”',
                zh: '而開始問「這樣適合我嗎？」的那些地方。' },
      { t: 844, en: 'The parts of you that don’t fit may be the parts most worth keeping.',
                zh: '你身上那些格格不入的部分，可能正是最值得留著的部分。' },
      { t: 849, en: 'Number twenty-nine.',
                zh: '第二十九條。' },
      { t: 850, en: 'Compete with yourself, not with somebody else.',
                zh: '跟自己比，不要跟別人比。' },
      { t: 854, en: 'Social comparison is a rigged game.',
                zh: '跟別人比較這件事，是一場動過手腳的比賽。' },
      { t: 857, en: 'You’re comparing their outsides with your insides,',
                zh: '你是拿別人的外在，去比自己的內在，' },
      { t: 858, en: 'their carefully selected victory or curated profile',
                zh: '拿他們精挑細選的一次勝利、精心經營的個人頁面，' },
      { t: 862, en: 'with your entire chaotic, messy, unedited life.',
                zh: '去比你整個混亂、雜亂、沒剪接過的人生。' },
      { t: 868, en: 'So, change the opponent.',
                zh: '所以，換一個對手。' },
      { t: 869, en: 'Was I better today than yesterday?',
                zh: '我今天有比昨天好嗎？' },
      { t: 871, en: 'Am I better at this than I was six months ago?',
                zh: '這件事，我現在有比半年前強嗎？' },
      { t: 873, en: 'Did I handle that situation more wisely than I would have before?',
                zh: '剛剛那個狀況，我處理得有比以前成熟嗎？' },
      { t: 877, en: 'Don’t aim for an Olympic medal in somebody else’s event.',
                zh: '不要在別人的項目裡，瞄準一面奧運獎牌。' },
      { t: 882, en: 'Aim for a personal best.',
                zh: '要瞄準的，是自己的個人最佳紀錄。' },
      { t: 884, en: 'And the final code, number thirty.',
                zh: '最後一條，第三十條。' },
      { t: 887, en: 'Avoid unnecessary suffering.',
                zh: '避開不必要的痛苦。' },
      { t: 890, en: 'Accept necessary suffering.',
                zh: '接受必要的痛苦。' },
      { t: 891, en: 'Use that rotisserie chicken.',
                zh: '那隻現成的烤雞，就用下去。' },
      { t: 892, en: 'Take the shortcut when it works.',
                zh: '捷徑有用的時候，就走捷徑。' },
      { t: 894, en: 'Eliminate friction that proves nothing.',
                zh: '把那些證明不了什麼的阻力全部拿掉。' },
      { t: 896, en: 'Don’t expect achievement, love, creativity, or a meaningful life',
                zh: '成就、愛、創造力，還有一個有意義的人生，' },
      { t: 900, en: 'to cost you nothing.',
                zh: '別指望它們不用你付出任何代價。' },
      { t: 901, en: 'Anything worthwhile will demand effort, discomfort,',
                zh: '任何值得的東西，都會跟你要力氣、要你不舒服、' },
      { t: 905, en: 'criticism, uncertainty, and sacrifice.',
                zh: '要你被批評、要你不確定，還要你犧牲。' },
      { t: 908, en: 'Lots of it.',
                zh: '而且要很多。' },
      { t: 909, en: 'When you encounter those costs,',
                zh: '當你碰到這些代價的時候，' },
      { t: 910, en: 'don’t automatically assume you’re doing something wrong.',
                zh: '不要反射性地就以為自己哪裡做錯了。' },
      { t: 913, en: 'You might simply be paying the price of admission.',
                zh: '你可能只是在付入場費而已。' },
      { t: 915, en: 'Eliminate the suffering that gets you nothing.',
                zh: '把那些什麼都換不到的痛苦拿掉。' },
      { t: 918, en: 'Accept the suffering that moves you closer to something meaningful.',
                zh: '接受那些把你推向有意義的事的痛苦。' },
    ],

    words: [
      { t: 775, en: 'Redundancy beats self-discipline', zh: '多準備幾份，比自律有用',
        noteEn: '“A beats B” is a whole argument in three words, with nothing to '
          + 'hedge behind — no “tends to”, no “can be”. Steal the frame: “Done '
          + 'beats perfect.” “A cheap system beats a good intention.”',
        noteZh: '「A beats B」三個字就是一整個論點，沒有模糊的空間。把這個句型偷來用：Done beats '
          + 'perfect.（做完勝過完美。）redundancy 在這裡是「同樣的東西多備幾份」。' },
      { t: 779, en: 'recurring', zh: '一再發生的、固定會再來的',
        noteEn: 'Something that comes back on a schedule: a recurring cost, a '
          + 'recurring meeting, a recurring payment. He sets it against '
          + 'occasional — the mattress is recurring, the holiday is occasional.',
        noteZh: '指「會固定再來一次」的東西：recurring cost（經常性支出）、recurring '
          + 'meeting（固定會議）、recurring payment（定期扣款）。他拿它跟 '
          + 'occasional（偶爾的）對照：床墊是天天的，度假是偶爾的。' },
      { t: 801, en: 'on purpose', zh: '刻意、故意',
        noteEn: 'Deliberately, as opposed to by accident — and he uses both inside '
          + 'the same code. Watch the preposition: on purpose, never “in '
          + 'purpose”. In writing you would reach for deliberately or '
          + 'intentionally.',
        noteZh: '就是「刻意」，跟 by accident（不小心、碰巧）相對，而他在同一條裡兩個都用了。介系詞要注意：on purpose，不能說 '
          + 'in purpose。寫成文字通常改用 deliberately 或 intentionally。' },
      { t: 830, en: 'Stop trying to be…', zh: '別再努力想當……',
        noteEn: 'A blunt spoken imperative that takes an effort away instead of '
          + 'adding one: “Stop trying to be impressive — just be clear.” Too '
          + 'direct for an email; softer there is “there’s no need to be…”.',
        noteZh: '很直接的口語祈使句，重點是「把一件努力拿掉」，而不是再加一件：Stop trying to be impressive — just '
          + 'be clear.（別再想著要讓人驚艷，講清楚就好。）寫信太衝，書面可換成 there’s no need to be…' },
      { t: 854, en: 'a rigged game', zh: '一場被動過手腳的比賽',
        noteEn: 'Rigged = secretly arranged so one side cannot win. A strong word, '
          + 'common in speech about things that only look fair: “The whole '
          + 'process was rigged.”',
        noteZh: 'rigged 是「暗中喬過，讓你根本贏不了」。語氣很重，講到「表面公平、其實不公平」的制度時很常用：The whole '
          + 'process was rigged.（整個流程根本就是喬好的。）' },
      { t: 857, en: 'comparing their outsides with your insides', zh: '拿別人的外在，去比自己的內在',
        noteEn: 'A fixed saying about social media that works far outside it. '
          + 'Spoken only — it needs the rhythm of the two plurals, so it dies '
          + 'on the page.',
        noteZh: '原本是講社群媒體的固定說法，用在別的地方也通。只適合口語，因為它靠 outsides / insides '
          + '這組複數的節奏撐著，寫下來就沒味道了。' },
      { t: 894, en: 'friction', zh: '卡卡的阻力、讓事情變麻煩的那一點東西',
        noteEn: 'Borrowed from physics into everyday work talk: the small '
          + 'resistance that makes a task harder than it needs to be. Reduce '
          + 'friction, remove friction, a frictionless process.',
        noteZh: '從物理借來的日常職場用語，指「讓一件事變得比必要更麻煩」的那點小阻力。常說 reduce friction、remove '
          + 'friction、a frictionless process（順暢無阻的流程）。' },
      { t: 913, en: 'the price of admission', zh: '入場費、想參與就得付的代價',
        noteEn: 'Literally what a ticket costs; figuratively, the cost you accept '
          + 'simply for being in the game. “Late nights are the price of '
          + 'admission in this industry.”',
        noteZh: '字面是「門票錢」，引申為「想參加就非付不可的代價」。Late nights are the price of admission '
          + 'in this industry.（在這一行，熬夜就是入場費。）' },
    ],

    questions: [
      { t: 758, en: 'What is his rule for where to keep things, and what two examples does he give?',
        zh: '他對「東西該放在哪裡」的規則是什麼？他舉了哪兩個例子？',
        answerEn: 'Store things where you use them, not where they are supposedly '
          + 'meant to go — the medicine by the coffee maker if you take it with '
          + 'breakfast, the book on your pillow if you read before bed.',
        answerZh: '東西要放在你真的會用到它的地方，而不是放在「照理說該放」的地方——配早餐吃的藥就放咖啡機旁邊，睡前要看的書就放在枕頭上。' },
      { t: 795, en: 'He compares a weekend in Antigua with a mattress. What is the point?',
        zh: '他拿安地卡的一個週末跟一張床墊比。重點是什麼？',
        answerEn: 'The weekend lasts three days; the mattress is every night of your '
          + 'year. So the money goes first on removing the misery that repeats, '
          + 'and only then on the pleasure that happens once.',
        answerZh: '那個週末只有三天，床墊卻是你一整年的每一個晚上。所以錢要先花在解決「一再重複的折磨」，之後才輪到「只有一次的享受」。' },
      { t: 857, en: 'He calls social comparison a rigged game. Why is it rigged?',
        zh: '他說跟別人比較是一場動過手腳的比賽。為什麼？',
        answerEn: 'Because you compare their outsides with your insides — their '
          + 'carefully selected victory or curated profile against your entire '
          + 'chaotic, messy, unedited life.',
        answerZh: '因為你是拿別人的外在去比自己的內在——拿他們精挑細選的一次勝利、精心經營的個人頁面，去比你整個混亂、沒剪接過的人生。' },
      { t: 909, en: 'When something is costing you effort and discomfort, what does he say not to assume?',
        zh: '當一件事讓你很費力、很不舒服的時候，他說「不要」以為什麼？',
        answerEn: 'That you are doing something wrong. Anything worthwhile will '
          + 'demand effort, discomfort, criticism, uncertainty and sacrifice — '
          + 'you may simply be paying the price of admission.',
        answerZh: '不要以為自己哪裡做錯了。任何值得的東西都會要你付出力氣、不舒服、被批評、不確定和犧牲——你可能只是在付入場費而已。' },
    ],

    tasks: [
      { en: 'Do his money test out loud. Name one recurring misery in your week '
        + '— the commute, a chair that hurts, a phone that dies by lunchtime '
        + '— and one occasional pleasure you spend on. Which would you fix '
        + 'first, and why?',
        zh: ' '
          + '出聲做一次他那個花錢測試。說出你一週裡一個「一再發生的折磨」——通勤、坐了會痛的椅子、中午就沒電的手機——再說一個你會花錢買的「偶爾的享受」。你會先解決哪一個？為什麼？' },
      { en: 'Pick the one code out of these six you could act on this week — '
        + 'not the one you agree with most, the one you could actually do. '
        + 'Say which it is, and say the first thing you would move, buy, book '
        + 'or cancel.',
        zh: ' '
          + '從這六條裡挑一條你這禮拜真的做得到的——不是你最認同的那一條，是你真的做得到的那一條。說出是哪一條，然後說你會先搬動、先買、先約、還是先取消什麼。' },
      { en: 'Take something that is hard in your life right now — a course, a '
        + 'first job, training, saving money. Say out loud which part of the '
        + 'difficulty is the price of admission, and which part proves '
        + 'nothing. Be specific about both.',
        zh: ' '
          + '拿一件你現在覺得辛苦的事——一門課、第一份工作、健身、存錢都可以。出聲說說：這份辛苦裡，哪一部分是「入場費」，哪一部分其實什麼都證明不了。兩邊都要講具體。' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'cheat-close',
    videoId: 'c7jGXPEY54k',
    start: 922,
    end: 955,

    titleEn: 'Don’t try all thirty — pick two',
    titleZh: '不要三十個都試——挑兩個',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'Daniel Pink — “30 Cheat Codes to Beat Every Level of Life”',

    aboutEn: 'Thirty-three seconds of closing that does two jobs: five of the '
      + 'thirty codes come back as one line each, and then arrives the '
      + 'instruction that makes the whole list usable — don’t try all '
      + 'thirty, pick two. Then he stops, and asks you for the code he '
      + 'missed.',
    aboutZh: ' '
      + '三十三秒的收尾，做了兩件事：先把三十個密技裡的五個，用一句一項的方式再提一次；接著給出讓整張清單真正能用的那句話——不要三十個一起試，挑兩個就好。然後他就停了，反過來問你：他漏掉的那一個密技是什麼。',

    watchForEn: 'He doesn’t say pick any two. Listen for the two kinds he names — '
      + 'and for the second one, which you choose by how much you’ve been '
      + 'avoiding it.',
    watchForZh: '他不是叫你隨便挑兩個。注意聽他指定的那兩種——尤其第二種，是靠「你有多想逃避它」來挑的。',

    lines: [
      { t: 922, en: 'So, here they are. Thirty cheat codes.',
                zh: '好，全部就在這裡了，三十個密技。' },
      { t: 924, en: 'Choose for Tuesdays.',
                zh: '做選擇的時候，看的是平常的星期二。' },
      { t: 926, en: 'Give friendship an infrastructure.',
                zh: '替友情建立一套固定的機制。' },
      { t: 927, en: 'Get good at something others avoid.',
                zh: '把別人都在閃躲的事練到很強。' },
      { t: 929, en: 'Build traditions.',
                zh: '主動建立傳統。' },
      { t: 930, en: 'And learn which difficulties to remove and which to accept.',
                zh: '還有，學會分辨哪些辛苦該排掉、哪些該接受。' },
      { t: 933, en: 'But cheat codes only work if you enter them.',
                zh: '但密技只有在你真的輸入進去之後，才會生效。' },
      { t: 936, en: 'So, don’t try all thirty.',
                zh: '所以，不要三十個一起試。' },
      { t: 938, en: 'Pick two.',
                zh: '挑兩個就好。' },
      { t: 939, en: 'One that would remove hassle from your life,',
                zh: '一個是能把生活裡的麻煩拿掉的，' },
      { t: 941, en: 'and one you’ve been resisting.',
                zh: '另一個是你一直在抗拒的。' },
      { t: 943, en: 'Use both this week.',
                zh: '這個禮拜，兩個都用上。' },
      { t: 944, en: 'And because I’m certain I missed some,',
                zh: '而且我很確定一定有漏掉的，' },
      { t: 946, en: 'tell me this.',
                zh: '所以你告訴我一件事就好：' },
      { t: 947, en: 'What’s one life cheat code you had to learn?',
                zh: '有哪一個人生密技，是你後來不得不自己學會的？' },
      { t: 949, en: 'Put it in the comments.',
                zh: '留言告訴我。' },
      { t: 950, en: 'I read every single one.',
                zh: '我每一則都會看。' },
      { t: 951, en: 'And that comment section might end up being even more useful than this video.',
                zh: '而那個留言區，到頭來搞不好會比這支影片還有用。' },
    ],

    words: [
      { t: 926, en: 'give something an infrastructure', zh: '替某件事建立固定的機制',
        noteEn: 'Infrastructure is normally roads and power. Used of a friendship '
          + 'or a habit, it means the standing arrangements that keep it alive '
          + 'without willpower — a recurring date, a shared calendar.',
        noteZh: 'infrastructure '
          + '原本指道路、電力那類基礎建設。用在友情或習慣上，指的是「不靠意志力也撐得住」的固定安排——一個每月固定的聚會、一份共用的行事曆。' },
      { t: 927, en: 'get good at something', zh: '把某件事練到很強',
        noteEn: 'Get good at, not become good at — the spoken version, and it '
          + 'implies practice rather than talent. “I want to get good at saying '
          + 'no.”',
        noteZh: '口語說 get good at，不說 become good at，而且帶有「靠練的，不是靠天分」的意思。I want to get '
          + 'good at saying no.（我想把「拒絕別人」練到很順。）' },
      { t: 933, en: 'only works if you…', zh: '只有在你……的時候才有用',
        noteEn: 'The shape of every honest piece of advice: it states the condition '
          + 'instead of promising a result. “The plan only works if we start on '
          + 'Monday.”',
        noteZh: '所有誠實的建議都是這個句型：不保證結果，而是把條件講清楚。The plan only works if we start on '
          + 'Monday.（這個計畫只有在我們星期一就開始的情況下才行得通。）' },
      { t: 939, en: 'remove hassle from your life', zh: '把生活裡的麻煩拿掉',
        noteEn: 'Hassle is small, repeated annoyance — the slow website, the form '
          + 'you refill every month. Countable when you point at one, “parking '
          + 'is a hassle”; uncountable in bulk, as here.',
        noteZh: 'hassle 指那種小而重複的麻煩——很慢的網站、每個月都要重填一次的表單。指單一件事時可數：Parking is a '
          + 'hassle.（停車很麻煩。）整批講的時候就像他這樣不加冠詞。' },
      { t: 941, en: 'something you’ve been resisting', zh: '你一直在抗拒的那件事',
        noteEn: 'Resist here is not fighting back — it is quietly not doing the '
          + 'thing you know you should. The tense says it has gone on a while: '
          + '“a conversation I’ve been resisting”.',
        noteZh: '這裡的 resist 不是「反抗」，而是「明知該做卻一直不去做」。用這個時態表示已經拖了一陣子：a conversation '
          + 'I’ve been resisting（一場我一直在逃避的對話）。' },
      { t: 946, en: 'tell me this', zh: '你告訴我一件事就好',
        noteEn: 'Spoken. It shrinks a big subject down to the one question you '
          + 'actually want answered. Say it, then ask that question — and '
          + 'nothing after it.',
        noteZh: '口語。用來把一個大題目縮小成「我真正想問的那一件事」。講完這句就直接問那個問題，後面不要再加別的。' },
      { t: 950, en: 'every single one', zh: '每一個都不漏',
        noteEn: 'Single adds nothing to the meaning and everything to the emphasis: '
          + 'every single day, every single time. Spoken, and here it works as '
          + 'a quiet promise.',
        noteZh: 'single 對意思沒有幫助，但把語氣加到最重：every single day、every single '
          + 'time。口語用法，他在這裡是拿它當一個低調的承諾。' },
      { t: 951, en: 'end up being', zh: '到頭來變成、最後會是',
        noteEn: 'End up + -ing is the result nobody planned. “The cheap option '
          + 'ended up being the slow one.” Very common in speech, a shade '
          + 'informal in writing.',
        noteZh: 'end up + -ing 指「沒人計畫、最後卻變成這樣」。The cheap option ended up being the '
          + 'slow one.（便宜的那個方案，到頭來是最慢的。）口語非常常用，寫成文字稍微不正式。' },
    ],

    questions: [
      { t: 924, en: 'He picks five of the thirty to say again. What are they?',
        zh: '他從三十個裡面挑了五個再講一次。是哪五個？',
        answerEn: 'Choose for Tuesdays; give friendship an infrastructure; get good '
          + 'at something others avoid; build traditions; and learn which '
          + 'difficulties to remove and which to accept.',
        answerZh: '做選擇時看平常的星期二；替友情建立固定的機制；把別人都在閃躲的事練到很強；主動建立傳統；還有，學會分辨哪些辛苦該排掉、哪些該接受。' },
      { t: 933, en: 'He says cheat codes only work under one condition. What is it?',
        zh: '他說密技只有在一個條件下才有用。是什麼條件？',
        answerEn: 'It only works if you enter it. Knowing the code changes nothing by '
          + 'itself.',
        answerZh: '你得真的把它輸入進去，它才會生效。光是知道有這個密技，本身什麼都不會改變。' },
      { t: 938, en: 'He says not to try all thirty. So what does he tell you to do instead?',
        zh: '他說不要三十個一起試。那他叫你怎麼做？',
        answerEn: 'Pick two: one that would remove hassle from your life, and one you '
          + 'have been resisting. Then use both this week.',
        answerZh: '挑兩個：一個是能把生活裡的麻煩拿掉的，另一個是你一直在抗拒的。然後這個禮拜兩個都用上。' },
      { t: 947, en: 'What does he ask viewers to put in the comments, and what does he predict about that section?',
        zh: '他請觀眾在留言區留下什麼？他又預測那個留言區會怎樣？',
        answerEn: 'One life cheat code they had to learn for themselves. He says he '
          + 'reads every single one, and that the comment section might end up '
          + 'being more useful than the video.',
        answerZh: '留下一個他們自己不得不學會的人生密技。他說他每一則都會看，而且那個留言區到頭來搞不好會比這支影片還有用。' },
    ],

    tasks: [
      { en: 'Do what he asks. Name the one code that would remove the most '
        + 'hassle from your week, and say what that hassle actually is.',
        zh: '照他說的做。講出那個最能把你這一週的麻煩拿掉的密技，並且說清楚：那個麻煩到底是什麼。' },
      { en: 'Now the harder half. Pick the code you have been resisting, say '
        + 'why you have been resisting it, then say when you will use it this '
        + 'week — a day, a time, a place.',
        zh: '接下來是難的那一半。挑一個你一直在抗拒的密技，說說你為什麼抗拒它，然後講出這個禮拜你什麼時候會用——哪一天、幾點、在哪裡。' },
      { en: 'Answer his last question yourself. What is one life cheat code you '
        + 'had to learn the hard way? Say it in a single line, the way he '
        + 'does.',
        zh: '自己回答他最後那個問題：有哪一個人生密技，是你自己撞過才學會的？用他那種一句話的方式講出來。' },
    ],
  },


  /* ------------------------------------------------------------------ */
  {
    id: 'systems-vs-goals',
    videoId: 'rtufWBLOXgw',
    start: 1350,
    end: 1477,

    titleEn: 'Goals versus systems',
    titleZh: '目標與系統',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'James Clear on The Diary Of A CEO — “Your Goals Are Quietly Restricting Your Happiness”',
    videoZh: '你的目標正在悄悄限制你的快樂',

    aboutEn: 'Two minutes, and one question from the host: what is the difference '
      + 'between a system and a goal? This is the whole answer, uninterrupted '
      + '— a definition, a hard claim about what your habits are already '
      + 'doing to you, and the sentence his book is remembered for.',
    aboutZh: ' '
      + '兩分鐘，主持人只問了一句：系統和目標差在哪？這就是他一口氣講完的整個答案——先給定義，再丟出一句「你的習慣正在對你做什麼」的狠話，最後收在他那本書最為人所知的一句話。',

    watchForEn: 'He never tells you to drop your goals. He tells you to put one on a '
      + 'shelf — listen for what he says to do with the time that frees up.',
    watchForZh: '他從來沒叫你放棄目標，而是叫你把目標「擱到架子上」——注意聽他說，空出來的時間要拿去做什麼。',

    lines: [
      { t: 1350, en: 'I was very goal-driven for a long time.',
                 zh: '有很長一段時間，我是非常「目標導向」的。' },
      { t: 1353, en: 'I mean, I probably still am.',
                 zh: '我是說，我現在大概也還是這樣。' },
      { t: 1355, en: 'I don’t think there’s any way to get around the fact that we all have goals,',
                 zh: '我覺得有一個事實是繞不過去的：我們都會有目標，' },
      { t: 1359, en: 'and think about the outcomes we want.',
                 zh: '也都會去想自己想要什麼結果。' },
      { t: 1361, en: 'But a goal is about the outcome that you want to achieve,',
                 zh: '但目標講的是你想達成的那個「結果」，' },
      { t: 1364, en: 'and a system is about the process for getting there.',
                 zh: '系統講的是走到那裡的「過程」。' },
      { t: 1367, en: 'So your goal is the target, the outcome, the thing you’re shooting for.',
                 zh: '所以目標就是靶、是結果、是你瞄準的那個東西。' },
      { t: 1370, en: 'Your system is the collection of daily habits that you follow.',
                 zh: '而你的系統，是你每天照著跑的那一整套習慣。' },
      { t: 1374, en: 'And if there is ever a gap between your goal and your system,',
                 zh: '如果你的目標和你的系統之間出現落差，' },
      { t: 1378, en: 'if there’s ever a gap between your desired outcome and your daily habits,',
                 zh: '如果你想要的結果和你每天的習慣之間出現落差，' },
      { t: 1383, en: 'your daily habits will always win.',
                 zh: '贏的一定是你每天的習慣。' },
      { t: 1385, en: 'And so almost by definition,',
                 zh: '所以幾乎可以說，就定義上來講，' },
      { t: 1387, en: 'your current habits are perfectly designed to deliver your current results.',
                 zh: '你現在的習慣，剛剛好就是為了產出你現在這些結果而設計的。' },
      { t: 1391, en: 'If you want to see where you’re going to end up,',
                 zh: '如果你想知道自己最後會走到哪裡，' },
      { t: 1394, en: 'just follow the trajectory of your habits.',
                 zh: '就順著你習慣的走向一路看下去就好。' },
      { t: 1396, en: 'What’s the process you’ve been running',
                 zh: '你一直在跑的是什麼樣的流程？' },
      { t: 1398, en: 'for the last six months, or a year, or two years?',
                 zh: '過去六個月、一年，或者兩年？' },
      { t: 1400, en: 'And they’ve carried you almost inevitably',
                 zh: '而它們幾乎是必然地，把你帶到了' },
      { t: 1402, en: 'to the outcomes that you have right now.',
                 zh: '你現在手上的這些結果。' },
      { t: 1404, en: 'I’m not saying that habits are the only thing that matter in life.',
                 zh: '我不是說習慣是人生中唯一重要的事。' },
      { t: 1408, en: 'Strategy matters.',
                 zh: '策略也很重要。' },
      { t: 1409, en: 'Luck, randomness, misfortune — those things can influence the outcome.',
                 zh: '運氣、隨機、還有倒楣事，這些都可能影響結果。' },
      { t: 1413, en: 'But by definition, luck and randomness are not under your control,',
                 zh: '但就定義上來說，運氣和隨機不在你的控制之內，' },
      { t: 1417, en: 'and your habits are.',
                 zh: '而你的習慣在。' },
      { t: 1419, en: 'And the only reasonable, rational approach in life',
                 zh: '人生裡唯一合理、理性的做法，' },
      { t: 1422, en: 'is to focus on the pieces that are within your control.',
                 zh: '就是把心力放在你能控制的那些部分。' },
      { t: 1425, en: 'So I think goals can be good for setting a sense of direction.',
                 zh: '所以我覺得，目標很適合用來定出一個大方向。' },
      { t: 1428, en: 'They’re good for clarity.',
                 zh: '它們能讓事情變清楚。' },
      { t: 1430, en: 'Especially if you have a team, get everybody rowing in the same direction.',
                 zh: '尤其你如果帶團隊，可以讓大家往同一個方向使力。' },
      { t: 1433, en: 'But once you’ve decided what the goal is,',
                 zh: '但一旦你決定好目標是什麼，' },
      { t: 1436, en: 'you should basically set it on the shelf, metaphorically speaking,',
                 zh: '基本上就該把它擱到架子上——這是比喻的說法——' },
      { t: 1439, en: 'and spend the vast majority of your time focused on building a better system.',
                 zh: '然後把絕大部分的時間，花在打造更好的系統上。' },
      { t: 1443, en: 'How are the habits we’re executing each day',
                 zh: '我們每天在執行的這些習慣，' },
      { t: 1445, en: 'moving us closer to this outcome that we want?',
                 zh: '是怎麼讓我們更靠近想要的那個結果的？' },
      { t: 1447, en: 'And so after talking about this for five or six years now,',
                 zh: '所以這件事我講了五、六年，' },
      { t: 1450, en: 'since the book’s been out,',
                 zh: '從那本書出版到現在，' },
      { t: 1452, en: 'where I’ve come down on it is:',
                 zh: '我最後的結論是：' },
      { t: 1454, en: 'goals are best for people who care about winning once.',
                 zh: '目標最適合那些「在乎贏一次」的人。' },
      { t: 1456, en: 'Systems are best for people who care about winning repeatedly.',
                 zh: '系統最適合那些「在乎一直贏」的人。' },
      { t: 1459, en: 'If you really want to make progress again and again,',
                 zh: '如果你真的想一次又一次往前推進，' },
      { t: 1461, en: 'if you want to get to the top and stay at the top,',
                 zh: '如果你想爬到頂端、而且待在頂端，' },
      { t: 1463, en: 'you need some process for staying up there.',
                 zh: '你就需要一套讓自己待在上面的流程。' },
      { t: 1466, en: 'Some collection of habits that’s going to keep this machine running.',
                 zh: '一整套習慣，讓這台機器繼續運轉下去。' },
      { t: 1470, en: 'So this is why I say in the book,',
                 zh: '所以我才會在書裡說，' },
      { t: 1472, en: 'we don’t rise to the level of our goals,',
                 zh: '我們不會升到目標的高度，' },
      { t: 1474, en: 'we fall to the level of our systems.',
                 zh: '我們會掉到系統的高度。' },
    ],

    words: [
      { t: 1350, en: 'goal-driven', zh: '目標導向的',
        noteEn: 'A noun plus -driven says what pushes you along: data-driven, '
          + 'results-driven, deadline-driven. Natural in speech and fine on a CV.',
        noteZh: '名詞加 '
          + '-driven，表示「被這件事推著走」：data-driven（數據導向）、results-driven（結果導向）、deadline-driven。口語能講，履歷也能寫。' },
      { t: 1355, en: 'get around the fact that…', zh: '迴避、繞過某個事實',
        noteEn: 'Almost always negative: “There’s no getting around the fact that '
          + 'we’re two weeks late.” You admit the inconvenient thing first, then '
          + 'keep going.',
        noteZh: '幾乎都用否定：「There’s no getting around the fact that we’re two weeks '
          + 'late.」（有件事繞不過去：我們晚了兩週。）先承認不方便的那件事，再往下講。' },
      { t: 1367, en: 'the thing you’re shooting for', zh: '你瞄準的那個東西、你要的結果',
        noteEn: 'Shoot for = aim for. Spoken: “What are we shooting for here — a '
          + 'rough draft or a finished thing?”',
        noteZh: 'shoot for 就是「以……為目標」。口語：「What are we shooting for here — a rough '
          + 'draft or a finished thing?」（我們這次是要做到什麼程度——先出個粗稿，還是要做到完成品？）' },
      { t: 1394, en: 'the trajectory of your habits', zh: '你習慣延伸下去的走向',
        noteEn: 'A trajectory is the path something is already on, extended forward. '
          + 'Also said of careers, prices and projects: “the trajectory of this '
          + 'project”.',
        noteZh: 'trajectory 是「現在這條路一路延伸下去的軌跡」。也能用在職涯、價格和專案：the trajectory of this '
          + 'project（這個案子的走向）。' },
      { t: 1422, en: 'within your control', zh: '在你能控制的範圍內',
        noteEn: 'The opposite pair is “outside your control” or “out of my hands”. '
          + 'Very useful when you explain what you can and cannot promise.',
        noteZh: '相反說法是 outside your control 或 out of my '
          + 'hands（不在我手上）。要說明「哪些我能保證、哪些不能」時特別好用。' },
      { t: 1430, en: 'get everybody rowing in the same direction', zh: '讓大家往同一個方向使力',
        noteEn: 'A rowing-boat image for alignment. Common in meetings and close to a '
          + 'cliché — one use per conversation.',
        noteZh: '划船的比喻，指方向一致。開會很常聽到，但也接近陳腔濫調，一次談話用一次就好。' },
      { t: 1436, en: 'set it on the shelf', zh: '先把它擱著、放一邊',
        noteEn: 'To park something on purpose, not to abandon it. He adds '
          + '“metaphorically speaking” because the image is so physical — that '
          + 'little repair is worth stealing.',
        noteZh: '是「刻意先放著」，不是「放棄」。他後面補了一句 metaphorically '
          + 'speaking（這是比喻的說法），因為畫面太具體了——這個小動作值得偷來用。' },
      { t: 1452, en: 'where I’ve come down on it', zh: '我最後的結論、我最後站在哪一邊',
        noteEn: 'Come down on something = to finally take a position after thinking '
          + 'about it a long time. Spoken, and it signals a considered view '
          + 'rather than a first reaction.',
        noteZh: 'come down on something 指「想了很久之後最後採取的立場」。口語，而且帶有「這是我想過的結論，不是隨口反應」的味道。' },
    ],

    questions: [
      { t: 1361, en: 'How does he define the difference in one sentence?',
        zh: '他用一句話怎麼定義兩者的差別？',
        answerEn: 'A goal is about the outcome you want to achieve; a system is about '
          + 'the process for getting there.',
        answerZh: '目標講的是你想達成的結果；系統講的是走到那裡的過程。' },
      { t: 1383, en: 'When your goal and your daily habits disagree, which one wins?',
        zh: '當你的目標和你每天的習慣不一致時，贏的是哪一個？',
        answerEn: 'The habits, always. And by definition, he says, your current habits '
          + 'are perfectly designed to deliver your current results.',
        answerZh: '永遠是習慣。而且他說，就定義上來講，你現在的習慣剛好就是設計來產出你現在這些結果的。' },
      { t: 1404, en: 'He admits habits are not the only thing that matters. What else does he name, and why does he still put habits first?',
        zh: '他承認習慣不是唯一重要的事。他還提到什麼？為什麼他還是把習慣放第一？',
        answerEn: 'Strategy, luck, randomness and misfortune. But luck and randomness '
          + 'are not under your control and your habits are — and he says the '
          + 'only rational approach is to focus on what is within your control.',
        answerZh: '策略、運氣、隨機和倒楣事。但運氣和隨機不在你的控制之內，習慣在——他說唯一理性的做法，就是專注在你能控制的部分。' },
      { t: 1454, en: 'Who are goals best for, and who are systems best for?',
        zh: '目標最適合誰？系統最適合誰？',
        answerEn: 'Goals are best for people who care about winning once; systems are '
          + 'best for people who care about winning repeatedly.',
        answerZh: '目標最適合「在乎贏一次」的人；系統最適合「在乎一直贏」的人。' },
    ],

    tasks: [
      { en: 'Name one goal you have right now — a qualification, getting fit, '
        + 'saving a set amount. Then say out loud the daily system underneath '
        + 'it. If there isn’t one, say that instead.',
        zh: '說出你現在的一個目標——考一張證照、把身體練起來、存到一筆錢。然後出聲講出這個目標底下每天在跑的系統。如果根本沒有，那就老實說沒有。' },
      { en: 'Use his test on yourself: what process have you been running for the '
        + 'last six months, and where is it carrying you? Three sentences.',
        zh: '用他的方法檢查自己：你過去六個月一直在跑的是什麼流程？它正把你帶到哪裡？用三句話回答。' },
      { en: 'Say one thing you want to win once, and one thing you want to win '
        + 'repeatedly. Which of the two needs a system, and what would the '
        + 'first habit in it be?',
        zh: '講一件你「想贏一次」的事，和一件你「想一直贏」的事。哪一件需要系統？那個系統裡的第一個習慣會是什麼？' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'spend-your-days',
    videoId: 'rtufWBLOXgw',
    start: 1512,
    end: 1623,

    titleEn: 'How do you want to spend your days?',
    titleZh: '你想怎麼過你的每一天？',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'James Clear on The Diary Of A CEO — “Your Goals Are Quietly Restricting Your Happiness”',

    aboutEn: 'Asked whether thinking in systems is something you can learn or just '
      + 'a personality trait, Clear concedes the personality part in one '
      + 'sentence and then hands over the questions anyone can use. It ends '
      + 'on the swap he thinks most people avoid making: wanting the result '
      + 'is easy, and the real question is whether you want the lifestyle '
      + 'that produces it.',
    aboutZh: ' '
      + '主持人問他：用「系統」思考是學得來的，還是天生個性？他一句話承認個性佔了一部分，接著就把任何人都能拿來用的幾個問題交出來。最後落在一個大家常常閃避的問題上：想要那個結果很容易，真正該問的是——你想不想過那種日子。',

    watchForEn: 'He splits one sentence into two halves: not do you want the result, '
      + 'but do you want the lifestyle. Listen for the moment the question '
      + 'changes.',
    watchForZh: '他把一句話拆成兩半：不是「你想不想要那個結果」，而是「你想不想要那種生活」。注意聽問題轉彎的那一刻。',

    lines: [
      { t: 1512, en: 'I do think some of it is personality,',
                 zh: '我確實覺得，這裡面有一部分是個性，' },
      { t: 1516, en: 'and what’s exciting to you to think about.',
                 zh: '也就是你想到什麼事情會覺得興奮。' },
      { t: 1518, en: 'Some people are very future oriented,',
                 zh: '有些人非常「未來導向」，' },
      { t: 1520, en: 'thinking about what the systems are and what that would lead them to.',
                 zh: '會去想系統長什麼樣，還有這些系統會把他們帶到哪裡去。' },
      { t: 1524, en: 'And so on, or more process oriented.',
                 zh: '諸如此類，或者說是比較看重「過程」的人。' },
      { t: 1527, en: 'But there are a number of questions that you can ask',
                 zh: '但有幾個問題是你可以拿來問自己的，' },
      { t: 1529, en: 'that can help you figure out what systems you should be focused on.',
                 zh: '幫你搞清楚自己該把心力放在哪些系統上。' },
      { t: 1533, en: 'So, a couple of the ones I like.',
                 zh: '我自己蠻喜歡的有這麼幾個。' },
      { t: 1535, en: 'One question is: can my current habits carry me to my desired future?',
                 zh: '第一個問題是：我現在的習慣，能把我帶到我想要的未來嗎？' },
      { t: 1538, en: 'So you have a bunch of habits you’re following right now.',
                 zh: '你現在身上有一堆正在執行的習慣，' },
      { t: 1541, en: 'What path are you on?',
                 zh: '你正走在哪一條路上？' },
      { t: 1542, en: 'Can your current habits take you there?',
                 zh: '你現在的習慣，能把你帶到那裡嗎？' },
      { t: 1544, en: 'And they could be either way.',
                 zh: '兩種答案都有可能。' },
      { t: 1546, en: 'Sometimes the answer is yes, and what you need is patience.',
                 zh: '有時候答案是「可以」，那你需要的就只是耐心。' },
      { t: 1549, en: 'You just need to keep staying on the path.',
                 zh: '你只要繼續走在這條路上就好。' },
      { t: 1551, en: 'But sometimes the answer is no,',
                 zh: '但有時候答案是「不行」，' },
      { t: 1552, en: 'and then obviously something needs to change.',
                 zh: '那顯然就有東西得改了。' },
      { t: 1555, en: 'You’re hoping for one outcome,',
                 zh: '你期待的是某一個結果，' },
      { t: 1556, en: 'but then you’re following a different lifestyle.',
                 zh: '但你過的卻是另一種生活。' },
      { t: 1558, en: 'So to want the outcome without the lifestyle',
                 zh: '想要那個結果，卻不想過那種生活，' },
      { t: 1560, en: 'is to torture yourself.',
                 zh: '等於是在折磨自己。' },
      { t: 1561, en: 'And what really matters is not: do you want the result?',
                 zh: '真正的關鍵，不在於「你想不想要那個結果」。' },
      { t: 1564, en: 'Anybody would like the result if you just hand it to them.',
                 zh: '結果如果直接送到手上，誰都會想要。' },
      { t: 1568, en: 'The question is: do you want the lifestyle?',
                 zh: '該問的是：你想不想要那種生活？' },
      { t: 1570, en: 'One of the little things I try to do,',
                 zh: '我自己會做的一件小事是這樣：' },
      { t: 1571, en: 'whenever I have a new business project that I’m thinking about,',
                 zh: '每當我在考慮一個新的事業計畫，' },
      { t: 1574, en: 'or something I’m excited about potentially doing,',
                 zh: '或是有件事我覺得很想去做，' },
      { t: 1576, en: 'the first question I ask is: how do I want to spend my days?',
                 zh: '我問自己的第一個問題是：我想怎麼過我的每一天？' },
      { t: 1579, en: 'And so then you draw a box.',
                 zh: '然後你就畫出一個框，' },
      { t: 1581, en: 'And inside that box: how can we make the most money,',
                 zh: '在這個框裡面問：怎麼賺最多錢、' },
      { t: 1584, en: 'reach the most people, make the biggest impact,',
                 zh: '接觸到最多人、帶來最大的改變，' },
      { t: 1587, en: 'make the contribution that you want to make —',
                 zh: '做出你想做出的那份貢獻——' },
      { t: 1589, en: 'but not outside of it.',
                 zh: '但不能跑到這個框外面。' },
      { t: 1591, en: 'And what happens a lot of the time is people do that in reverse.',
                 zh: '而很多時候，大家是反過來做的。' },
      { t: 1593, en: 'They start by asking: how can we make the most money,',
                 zh: '他們先問：怎麼賺最多錢、' },
      { t: 1595, en: 'or reach the most people, or make the biggest impact,',
                 zh: '怎麼接觸最多人、怎麼帶來最大的改變，' },
      { t: 1598, en: 'and then they decide, oh, this is what I want to do,',
                 zh: '然後才決定：喔，那我要做的就是這個，' },
      { t: 1600, en: 'but it’s actually outside of how they want to spend their days.',
                 zh: '但這其實根本不是他們想過的日子。' },
      { t: 1603, en: 'And it’s not going to work out well,',
                 zh: '結果通常不會太好，' },
      { t: 1605, en: 'because it goes back to our point previously about: is this fun?',
                 zh: '因為這又回到我們前面講的：這件事有趣嗎？' },
      { t: 1608, en: 'If they don’t want to spend their time that way,',
                 zh: '如果他們並不想那樣過日子，' },
      { t: 1610, en: 'you’re just grinding for a little while,',
                 zh: '那就只是硬撐一陣子而已，' },
      { t: 1612, en: 'and eventually it’s not going to work.',
                 zh: '最後還是走不下去。' },
      { t: 1613, en: 'That’s the key for building systems that really work:',
                 zh: '這就是打造真正有效的系統的關鍵：' },
      { t: 1616, en: 'is this how you want to spend your days?',
                 zh: '這是不是你想過的日子？' },
      { t: 1618, en: 'The person who wants to live the lifestyle',
                 zh: '想過那種生活的人，' },
      { t: 1620, en: 'is much better positioned to get the result.',
                 zh: '更有條件拿到那個結果。' },
    ],

    words: [
      { t: 1518, en: 'future oriented', zh: '未來導向的（人）',
        noteEn: '-oriented turns a noun into a description of what someone naturally '
          + 'focuses on: detail-oriented, process-oriented, people-oriented.',
        noteZh: '-oriented '
          + '把名詞變成「這個人天生會注意什麼」：detail-oriented（注重細節）、process-oriented（重視流程）、people-oriented（以人為本）。' },
      { t: 1535, en: 'carry you there', zh: '靠現在的累積，把你帶到那裡',
        noteEn: 'Carry, not take: it says the thing gets you there on its own '
          + 'momentum, with nothing new added. “Will this pace carry us to the '
          + 'deadline?”',
        noteZh: '用 carry 而不是 take，意思是「靠它本身的力道就能把你送到」，不必再加什麼新東西。Will this pace carry '
          + 'us to the deadline?（照這個速度，撐得到截止日嗎？）' },
      { t: 1541, en: 'What path are you on?', zh: '你現在走在哪一條路上？',
        noteEn: 'Spoken. It asks about direction, not about where you are now — which '
          + 'is exactly why it is hard to answer quickly.',
        noteZh: '口語。問的是「方向」，不是「你現在在哪裡」——所以才會一時答不出來。' },
      { t: 1560, en: 'torture yourself', zh: '折磨自己',
        noteEn: 'Hyperbole, and completely normal in speech: choosing something that '
          + 'guarantees you a bad time. “Don’t torture yourself watching the '
          + 'replay.”',
        noteZh: '誇飾用法，口語裡很常見：明知會很難受還去選它。Don’t torture yourself watching the '
          + 'replay.（別再重看那段影片折磨自己了。）' },
      { t: 1576, en: 'how you spend your days', zh: '你的日子是怎麼過的',
        noteEn: 'Days, plural — not one day. It means the ordinary shape of your '
          + 'life, the hours you repeat, not a schedule.',
        noteZh: '是複數的 days，不是某一天。指的是你生活平常長什麼樣、你一再重複的那些時間，不是行程表。' },
      { t: 1591, en: 'do it in reverse', zh: '順序整個反過來做',
        noteEn: 'Not backwards in space — in order. Useful when someone got the '
          + 'sequence wrong: “We did it in reverse — we picked the tool before we '
          + 'knew the problem.”',
        noteZh: '不是「往後」，是「順序顛倒」。要說某人做事順序弄反了很好用：We did it in reverse — we picked the '
          + 'tool before we knew the problem.（我們順序反了，還沒搞清楚問題就先挑工具。）' },
      { t: 1610, en: 'grind', zh: '硬撐、埋頭苦幹',
        noteEn: 'Spoken. Working hard with no joy in it, usually for longer than you '
          + 'should. “I’m just grinding through the last two weeks of the '
          + 'course.”',
        noteZh: '口語。埋頭硬做、做得毫無樂趣，而且通常撐得比該撐的還久。I’m just grinding through the last two '
          + 'weeks of the course.（這門課剩下兩週我就只是在硬撐。）' },
      { t: 1620, en: 'better positioned to do something', zh: '更有條件做到某件事',
        noteEn: 'Not luckier and not more talented — standing somewhere that makes '
          + 'the result more likely. Works in writing as well as speech.',
        noteZh: '不是比較幸運，也不是比較有天分，而是「站的位置讓那個結果更容易發生」。書面和口語都能用。' },
    ],

    questions: [
      { t: 1535, en: 'He offers one question for working out which system to build. What is it?',
        zh: '他給了一個問題，用來判斷自己該建立什麼系統。那個問題是什麼？',
        answerEn: 'Can my current habits carry me to my desired future? Look at the '
          + 'habits you are running right now and ask what path they put you on.',
        answerZh: '「我現在的習慣，能把我帶到我想要的未來嗎？」看看你正在執行的習慣，問問它們把你放在哪一條路上。' },
      { t: 1546, en: 'The answer can go either way. What does he say you need if it is yes?',
        zh: '這個問題的答案兩種都有可能。他說如果答案是「可以」，你需要的是什麼？',
        answerEn: 'Patience. Nothing needs changing — you just keep staying on the '
          + 'path. If the answer is no, then obviously something has to change.',
        answerZh: '耐心。什麼都不用改，繼續走在這條路上就好。如果答案是「不行」，那顯然就得改東西了。' },
      { t: 1568, en: 'He says the real question is not whether you want the result. So what is it?',
        zh: '他說真正的問題不是「你想不想要那個結果」。那是什麼？',
        answerEn: 'Whether you want the lifestyle. Anybody would take the result if you '
          + 'handed it to them, so wanting it proves nothing.',
        answerZh: '而是「你想不想要那種生活」。結果如果直接送到手上，誰都會要，所以「想要」根本證明不了什麼。' },
      { t: 1591, en: 'What does he say people do in reverse?',
        zh: '他說大家常常把什麼順序做反了？',
        answerEn: 'They start from the money, the reach and the impact, decide what to '
          + 'do from that, and only then find it sits outside how they want to '
          + 'spend their days.',
        answerZh: '他們從賺多少錢、接觸多少人、做出多大影響開始，據此決定要做什麼，結果才發現那根本不是他們想過的日子。' },
    ],

    tasks: [
      { en: 'Ask his question out loud about something you want this year — a '
        + 'qualification, a fitter body, money saved. Can your current habits '
        + 'carry you there? Answer yes or no, and say how you know.',
        zh: '找一個你想要的結果，出聲問那個問題：你現在的習慣能把你帶到那裡嗎？回答「可以」或「不行」，並說你怎麼知道。' },
      { en: 'Describe the lifestyle behind something you want, hour by hour, on '
        + 'an ordinary Tuesday. Then say whether you want that too, not just '
        + 'the result.',
        zh: '講講你想要的那件事背後是什麼樣的生活——用一個平常的星期二，一小時一小時說下去。然後說說：除了結果之外，那種日子你想不想要？' },
      { en: 'Draw his box for something you are thinking of starting. Say how you '
        + 'want to spend your days first, and only then what you would do '
        + 'inside that.',
        zh: '替一件你正在考慮開始的事，畫出他說的那個框。先說你想怎麼過你的每一天，然後才說在這個框裡面你會做什麼。' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'same-goals',
    videoId: 'rtufWBLOXgw',
    start: 1636,
    end: 1679,

    titleEn: 'Same goal, different result',
    titleZh: '同樣的目標，不同的結果',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'James Clear on The Diary Of A CEO — “Your Goals Are Quietly Restricting Your Happiness”',

    aboutEn: 'The host quotes one of the book’s claims back at him — winners and '
      + 'losers have the same goals — and Clear proves it in forty seconds '
      + 'flat, with a job opening and the Olympics. It is the most '
      + 'self-contained argument in the whole interview: a claim, two '
      + 'examples, a conclusion, all inside a minute.',
    aboutZh: ' '
      + '主持人把書裡的一句話丟回給他——「贏的人和輸的人，目標是一樣的」——他就用四十秒證明給你看，例子只有一個職缺和一場奧運。這是整場訪談裡最完整、最能單獨拿出來聽的一段論證：一個主張、兩個例子、一個結論，全部不到一分鐘。',

    watchForEn: 'He never says goals are worthless. Listen for the phrase he uses to '
      + 'keep them: necessary, but not sufficient.',
    watchForZh: '他從頭到尾沒有說目標沒用。注意聽他替目標留下位子的那句話：必要，但還不夠。',

    lines: [
      { t: 1636, en: 'Everybody wants the results.',
                 zh: '每個人都想要那個結果。' },
      { t: 1637, en: 'Let’s say you have a hundred people apply for a job.',
                 zh: '假設有一百個人來應徵同一份工作。' },
      { t: 1639, en: 'You got a new job opening.',
                 zh: '你這邊開了一個新職缺。' },
      { t: 1640, en: 'Presumably, every candidate has the goal of getting the job.',
                 zh: '照理說，每一個應徵者的目標都是拿到這份工作。' },
      { t: 1643, en: 'The goal is not the thing that determines the outcome.',
                 zh: '目標並不是決定結果的那個東西。' },
      { t: 1646, en: 'So the person who wins and the ninety-nine people who lose,',
                 zh: '所以最後上的那一個，和沒上的那九十九個，' },
      { t: 1648, en: 'they have the same goals.',
                 zh: '他們的目標一模一樣。' },
      { t: 1650, en: 'You look at the Olympic Games — presumably any event,',
                 zh: '你看奧運，隨便哪一個項目，' },
      { t: 1652, en: 'everybody who’s competing has the goal of winning the Olympic medal, right?',
                 zh: '每一個上場比賽的人，目標都是拿到奧運獎牌，對吧？' },
      { t: 1655, en: 'Of winning the gold.',
                 zh: '都是要拿金牌。' },
      { t: 1656, en: 'So the goal is not the thing that makes the difference.',
                 zh: '所以造成差別的，並不是目標。' },
      { t: 1659, en: 'So again, winners and losers have the same goals.',
                 zh: '再說一次：贏的人和輸的人，目標是一樣的。' },
      { t: 1661, en: 'So if they have the same goals,',
                 zh: '既然目標一樣，' },
      { t: 1663, en: 'they cannot be the thing that makes the difference in their performance.',
                 zh: '那目標就不可能是造成表現差異的原因。' },
      { t: 1666, en: 'It has to be something else.',
                 zh: '一定是別的東西。' },
      { t: 1667, en: 'Maybe having a goal is part of it.',
                 zh: '也許有目標是原因的一部分。' },
      { t: 1669, en: 'Maybe it’s necessary, but it’s not sufficient for the outcome that you want.',
                 zh: '也許它是必要的，但光有目標，還不足以帶來你要的結果。' },
      { t: 1672, en: 'And for that, what you need is a system.',
                 zh: '要拿到結果，你需要的是一套系統。' },
      { t: 1674, en: 'You need a collection of habits that are going to make the difference',
                 zh: '你需要一組真正能造成差別的習慣，' },
      { t: 1677, en: 'and accumulate into a bigger outcome.',
                 zh: '讓它們累積成更大的成果。' },
    ],

    words: [
      { t: 1637, en: 'let’s say', zh: '假設說、比方說',
        noteEn: 'Spoken. It launches an invented example so nobody thinks you are '
          + 'describing a real case: “Let’s say you miss the deadline.”',
        noteZh: '口語。用來開一個「假設的例子」，讓對方知道你不是在講真實案例：「Let’s say you miss the '
          + 'deadline.」（假設你錯過了截止日。）' },
      { t: 1639, en: 'a job opening', zh: '職缺',
        noteEn: 'An opening is a position waiting to be filled. “We have two openings '
          + 'on the team.” The verb is post: “They posted the opening yesterday.”',
        noteZh: 'opening 是「有空缺、正在找人」的那個位置：We have two openings on the '
          + 'team.（我們團隊有兩個職缺。）要說「開出職缺」用 post。' },
      { t: 1640, en: 'presumably', zh: '照理說、想必',
        noteEn: 'You are fairly sure but have not actually checked. Useful for saying '
          + 'an assumption out loud: “Presumably they’ve seen the email.”',
        noteZh: '你相當確定，但沒有真的去確認。想把某個假設講出來的時候很好用：「Presumably they’ve seen the '
          + 'email.」（想必他們看過那封信了。）' },
      { t: 1643, en: 'determine the outcome', zh: '決定結果',
        noteEn: 'The formal word for what actually decides something. He then swaps '
          + 'it for the plainer “makes the difference” — same idea, easier '
          + 'register.',
        noteZh: '比較正式的說法，指真正決定事情走向的那個因素。他後面換成比較白話的 makes the difference，意思一樣，語氣更口語。' },
      { t: 1656, en: 'make the difference', zh: '真正造成差別的關鍵',
        noteEn: 'What actually changes the result. Notice the: “the thing that makes '
          + 'the difference”. Without the, “make a difference” only means to '
          + 'help.',
        noteZh: '指真正改變結果的那個關鍵。注意有 the：the thing that makes the difference。少了 the，make '
          + 'a difference 只是「有幫助、有影響」。' },
      { t: 1669, en: 'necessary but not sufficient', zh: '必要，但還不夠',
        noteEn: 'A precise way to half-agree: you do need it, and it alone will not '
          + 'get you there. Strong in an argument, and it survives in writing.',
        noteZh: '一種很精準的「同意一半」：這件事你非有不可，但光有它到不了終點。辯論時很有力，寫成文字也一樣好用。' },
      { t: 1674, en: 'a collection of habits', zh: '一組習慣',
        noteEn: 'His definition of a system: not one habit, but the whole set you run '
          + 'every day. Collection of rather than list says they work together.',
        noteZh: '他對「系統」的定義：不是單一習慣，而是你每天在跑的一整組。用 collection of 而不是 list，是要強調它們是一起發揮作用的。' },
      { t: 1677, en: 'accumulate into', zh: '累積成',
        noteEn: 'Small things piling up over time into one big thing. “Ten minutes a '
          + 'day accumulates into a real skill.”',
        noteZh: '小東西隨著時間堆疊成一件大的：「Ten minutes a day accumulates into a real '
          + 'skill.」（一天十分鐘，累積起來就是一項真本事。）' },
    ],

    questions: [
      { t: 1637, en: 'What example does he start with?',
        zh: '他一開始舉的例子是什麼？',
        answerEn: 'A hundred people applying for one new job opening. Every one of them '
          + 'has the goal of getting it, and ninety-nine of them will not.',
        answerZh: '一百個人來應徵同一個新職缺。他們每一個人的目標都是拿到這份工作，但其中九十九個拿不到。' },
      { t: 1643, en: 'Why does he say the goal cannot be what decides who gets hired?',
        zh: '他為什麼說「目標」不可能是決定誰被錄取的原因？',
        answerEn: 'Because the one who wins and the ninety-nine who lose all had the '
          + 'same goal. Something everybody shares cannot explain why they ended '
          + 'up differently.',
        answerZh: '因為上的那一個和沒上的那九十九個，目標完全一樣。大家都有的東西，沒辦法解釋為什麼結果會不同。' },
      { t: 1650, en: 'What second example does he use to make the same point?',
        zh: '他用哪個第二個例子來說同一件事？',
        answerEn: 'The Olympic Games. In any event, everybody competing has the goal of '
          + 'winning the gold — so the goal is not what makes the difference.',
        answerZh: '奧運。任何一個項目裡，上場的每個人目標都是拿金牌——所以造成差別的，不會是目標。' },
      { t: 1667, en: 'Does he say goals are useless?',
        zh: '他有說目標沒有用嗎？',
        answerEn: 'No. Having a goal may be part of it, and may even be necessary — but '
          + 'it is not sufficient. For the outcome you need a system, a '
          + 'collection of habits.',
        answerZh: '沒有。他說有目標也許是原因的一部分，甚至可能是必要的——但還不夠。要拿到結果，你需要一套系統，也就是一組習慣。' },
    ],

    tasks: [
      { en: 'Run his argument on something you want this year — a qualification, '
        + 'getting fit, saving money. Everyone chasing it has the same goal as '
        + 'you. So what is your system?',
        zh: '拿他的論點套在你今年想達成的事情上——考一張證照、把身體練起來、存下一筆錢都行。跟你搶同一件事的人，目標跟你一模一樣。那你的系統是什麼？' },
      { en: 'Think of two people who started with the same goal and ended up in '
        + 'different places. Say out loud what was different — and you are not '
        + 'allowed to say “the goal”.',
        zh: '想兩個一開始目標一樣、最後卻走到不同地方的人。出聲說說他們差在哪裡——而且不准說「目標不同」。' },
      { en: 'Say one goal in a single sentence, then say the daily habits sitting '
        + 'underneath it. If those habits ran for a year, would they get you '
        + 'there?',
        zh: '用一句話說出一個目標，再說出撐著這個目標的每日習慣。如果這些習慣照這樣跑一年，會把你帶到那裡嗎？' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'goals-and-happiness',
    videoId: 'rtufWBLOXgw',
    start: 1682,
    end: 1719,

    titleEn: 'Why goals postpone happiness',
    titleZh: '為什麼目標會讓快樂延後',
    levelEn: 'Young adult & workplace · B2',
    levelZh: '青年與職場',
    sourceEn: 'James Clear on The Diary Of A CEO — “Your Goals Are Quietly Restricting Your Happiness”',

    aboutEn: 'The host puts one of the book’s harder claims to him — that goals '
      + 'restrict your happiness — and Clear answers with the quiet bargain '
      + 'hidden inside every goal: once I hit the number, then I’ll finally '
      + 'be satisfied. Thirty-seven seconds, three versions of that same '
      + 'bargain, and the thing he says to fall in love with instead — the '
      + 'idea this whole interview is named after.',
    aboutZh: '主持人把書裡比較尖銳的一個說法丟給他：目標會限制你的快樂。Clear '
      + '的回答，是每個目標裡都藏著的那筆交易——等我做到那個數字，我就終於會滿足；三十七秒裡出現了三個版本的同一筆交易，還有他認為你真正該愛上的東西，也就是整場訪談命名的那個想法。',

    watchForEn: 'Three completely different goals, one sentence pattern: “Once I…, '
      + 'then I’ll…”. Count how many times it comes round.',
    watchForZh: '三個完全不同的目標，同一個句型：「Once I…, then I’ll…」。數數看這個句型出現了幾次。',

    lines: [
      { t: 1682, en: 'There’s some implicit promise internally,',
                 zh: '我們心裡都有一個沒說出口的承諾，' },
      { t: 1684, en: 'that once I get to this goal, then I’ll be happy.',
                 zh: '就是「等我達成這個目標，我就會快樂」。' },
      { t: 1686, en: 'Once I write a New York Times bestseller, then I’ll feel better about it.',
                 zh: '等我寫出一本《紐約時報》暢銷書，我心裡就會踏實一點。' },
      { t: 1690, en: 'Once I achieve this certain number on the scale,',
                 zh: '等我體重計上的數字到了某個數字，' },
      { t: 1693, en: 'then I’ll be happy with my body.',
                 zh: '我就會對自己的身材滿意了。' },
      { t: 1695, en: 'Once I get to a million dollars in revenue,',
                 zh: '等營收做到一百萬美金，' },
      { t: 1698, en: 'then I’ll be happy with the business.',
                 zh: '我就會對這門生意滿意了。' },
      { t: 1700, en: 'And so you’re kind of constantly pushing happiness off to the next milestone,',
                 zh: '所以你等於一直把快樂往後推，推到下一個里程碑，' },
      { t: 1704, en: 'and thinking that once you get there, then finally you’ll be satisfied.',
                 zh: '心裡想著等到了那裡，你才終於會滿足。' },
      { t: 1708, en: 'But I think in fact the better way to do it',
                 zh: '但我覺得，其實更好的做法是' },
      { t: 1711, en: 'is to fall in love with the process,',
                 zh: '愛上這個過程，' },
      { t: 1713, en: 'to fall in love with the lifestyle,',
                 zh: '愛上這種生活方式，' },
      { t: 1715, en: 'then you can be happy along the way',
                 zh: '這樣你在路上就已經是快樂的，' },
      { t: 1717, en: 'and still achieve the goals as you go, still achieve the milestones.',
                 zh: '而且一路上照樣達成目標，照樣走過那些里程碑。' },
    ],

    words: [
      { t: 1682, en: 'an implicit promise', zh: '一個沒說出口的承諾',
        noteEn: 'Implicit = understood but never actually said. Its opposite is '
          + 'explicit, said out loud. Here it is a promise you made to yourself '
          + 'without noticing.',
        noteZh: 'implicit 是「心照不宣、沒有明講」，相反詞是 explicit（講明的）。這裡指你自己沒察覺、就對自己許下的承諾。' },
      { t: 1690, en: 'the number on the scale', zh: '體重計上的數字',
        noteEn: 'How English talks about your weight without saying the weight. The '
          + 'scale is the one in your bathroom; British speakers say the scales.',
        noteZh: '英文講體重時常這樣說，不必真的把數字講出來。scale 就是家裡的體重計；英國人會說 the scales（複數）。' },
      { t: 1695, en: 'revenue', zh: '營收',
        noteEn: 'All the money coming in, before any costs. What is left afterwards '
          + 'is profit. Useful the moment your side project starts selling '
          + 'anything.',
        noteZh: '所有進來的錢，還沒扣掉成本；扣完剩下的才是 profit（利潤）。你的副業一開始賣東西，就會用到這個字。' },
      { t: 1700, en: 'push something off to…', zh: '把某件事往後推到……',
        noteEn: 'To postpone. Everyday spoken English: “Can we push the meeting off '
          + 'to Thursday?” What he pushes off here is happiness, which is his '
          + 'whole point.',
        noteZh: '就是「延後」。日常口語：「Can we push the meeting off to '
          + 'Thursday?」（會議可以往後推到週四嗎？）他這裡推的是快樂，這正是他的重點。' },
      { t: 1702, en: 'the next milestone', zh: '下一個里程碑、下一個階段目標',
        noteEn: 'A marked point along the way, not the finish line: passing the exam, '
          + 'the first paying customer, week eight of training. Common in '
          + 'projects and study plans.',
        noteZh: '路上的一個標記點，不是終點：考過檢定、第一個付錢的客人、訓練的第八週。在專案和讀書計畫裡都很常用。' },
      { t: 1708, en: 'I think the better way to do it is…', zh: '我覺得更好的做法是……',
        noteEn: 'A soft way to put a different idea on the table. Saying the better '
          + 'way rather than a better way sounds confident without sounding rude.',
        noteZh: '把不同意見端出來的溫和說法。說 the better way 而不是 a better way，聽起來有自信，又不會太衝。' },
      { t: 1711, en: 'fall in love with the process', zh: '愛上過程本身',
        noteEn: 'Fall in love with does not need a person — a city, a job, a sport, a '
          + 'process. It means you started liking it and could not stop.',
        noteZh: 'fall in love with 後面不一定是人，也可以是一座城市、一份工作、一項運動、一個過程。意思是「不知不覺就迷上了」。' },
      { t: 1715, en: 'along the way', zh: '一路上、過程當中',
        noteEn: 'While you are still on your way to something, not once you arrive. '
          + 'It pairs with as you go, which he uses in the very next breath.',
        noteZh: '指還在往目標前進的途中，而不是抵達之後。常和 as you go 搭配——他下一口氣就用了。' },
    ],

    questions: [
      { t: 1682, en: 'What is the promise he says we quietly make to ourselves?',
        zh: '他說我們私底下跟自己許下的是什麼承諾？',
        answerEn: 'That once I get to this goal, then I’ll be happy. He calls it an '
          + 'implicit promise — one you never actually say out loud.',
        answerZh: '「等我達成這個目標，我就會快樂。」他把這叫做一個心照不宣的承諾——你從來沒真的說出口。' },
      { t: 1686, en: 'He gives three versions of that promise. What are they?',
        zh: '他把那個承諾舉了三個版本。分別是什麼？',
        answerEn: 'A New York Times bestseller, a certain number on the scale, and a '
          + 'million dollars in revenue — a book, a body, and a business.',
        answerZh: '一本《紐約時報》暢銷書、體重計上的某個數字、還有一百萬美金的營收——一本書、一個身材、一門生意。' },
      { t: 1700, en: 'What does he say keeps happening to your happiness?',
        zh: '他說你的快樂一直被怎麼樣？',
        answerEn: 'You keep pushing it off to the next milestone, believing that once '
          + 'you get there you will finally be satisfied.',
        answerZh: '你一直把它往後推到下一個里程碑，以為等到了那裡，你才終於會滿足。' },
      { t: 1708, en: 'What does he say to fall in love with instead — and what do you not have to give up?',
        zh: '他說該愛上的是什麼？而你又不必放棄什麼？',
        answerEn: 'The process and the lifestyle. You do not give up the goals: he says '
          + 'you can be happy along the way and still achieve them as you go.',
        answerZh: '過程，以及那種生活方式。你不必放棄目標：他說你可以在路上就是快樂的，同時照樣一路達成目標。' },
    ],

    tasks: [
      { en: 'Name a goal you are chasing right now — a qualification, a weight, a '
        + 'savings number. Say out loud what you are telling yourself you will '
        + 'feel once you hit it.',
        zh: '說出一個你現在正在追的目標——一張證照、一個體重、一筆存款數字。出聲說說看：你正在告訴自己「達成之後」會有什麼感覺。' },
      { en: 'Describe the process behind that goal — what you actually do on an '
        + 'ordinary Tuesday. Could you fall in love with that?',
        zh: '描述那個目標背後的過程——一個普通的星期二，你實際上會做些什麼。那件事，你有辦法愛上嗎？' },
      { en: 'Say one thing you keep pushing off until “after” — after the exam, '
        + 'after the busy season. What would having it along the way look like?',
        zh: '說一件你一直推遲到「之後」才要做的事——考完之後、忙完這一波之後。如果不等到那時候，而是一路上就擁有它，會是什麼樣子？' },
    ],
  },


  /* ------------------------------------------------------------------ 1 */
  {
    id: 'opening',
    videoId: '1LMcGRfYBro',
    start: 0,
    end: 44,

    titleEn: 'How he opens',
    titleZh: '他如何開場',
    levelEn: 'Adult · B2',
    levelZh: '成人',
    sourceEn: 'Daniel Pink — “The 6 Skills AI Will Never Replace”',
    videoZh: 'AI 永遠取代不了的六種能力',

    aboutEn: 'Forty-three seconds of set-up, and three moves in a fixed order: '
      + 'the problem, the promise, and the reason to trust him. Almost every '
      + 'talk worth listening to opens this way.',
    aboutZh: '四十三秒的開場，依序做了三件事：點出問題、給出承諾、說明「為什麼該相信他」。'
      + '幾乎每一場值得聽的演講，開場都是這個順序。',

    watchForEn: 'He never says AI is coming. He says you have already seen it coming.',
    watchForZh: '他沒有說「AI 要來了」，而是說「你早就看見它要來了」。',

    lines: [
      { t: 0,  en: 'You’ve seen the headlines.', zh: '那些新聞標題你都看過了。' },
      { t: 1,  en: 'If these predictions are even half right,', zh: '如果這些預測只說對了一半，' },
      { t: 3,  en: 'artificial intelligence may soon outthink most of us.', zh: '人工智慧很快就會比我們大多數人更會思考。' },
      { t: 5,  en: 'So in this video, I’m going to give you a survival plan —', zh: '所以在這支影片裡，我要給你一套生存計畫——' },
      { t: 10, en: 'a way to stay valuable, relevant, and hard to replace.', zh: '一個讓你保有價值、跟得上時代、而且難以被取代的方法。' },
      { t: 13, en: 'I’ll walk you through the six human skills,', zh: '我會帶你逐一看過這六項人類能力，' },
      { t: 16, en: 'the ones where we still beat the machines,', zh: '也就是我們目前仍然勝過機器的地方，' },
      { t: 18, en: 'that will matter most in the age of AI.', zh: '在 AI 時代裡最重要的那幾項。' },
      { t: 20, en: 'I started working on this topic twenty years ago, with this book, A Whole New Mind,', zh: '我從二十年前就開始研究這個主題，也就是《A Whole New Mind》這本書，' },
      { t: 24, en: 'and my perspective has been shaped by several other books and two decades of research.', zh: '後來我的觀點又受到其他幾本書、以及二十年研究的影響。' },
      { t: 28, en: 'What I’m going to share isn’t a list of technical abilities.', zh: '我要分享的，不是一份技術能力清單。' },
      { t: 31, en: 'It’s six ways of thinking, of behaving, of being, that will set you apart.', zh: '而是六種思考、行動與存在的方式，能讓你與眾不同。' },
      { t: 36, en: 'And I’m also going to give you some simple, practical techniques for building these muscles.', zh: '我也會給你一些簡單、實用的方法，把這些「肌肉」練起來。' },
      { t: 42, en: 'So let’s go.', zh: '那我們開始吧。' },
    ],

    words: [
      { t: 3, en: 'outthink', zh: '在思考上勝過（某人）',
        noteEn: 'Out- in front of a verb means to beat someone at doing it: outsell, outlast, outwork.',
        noteZh: 'out- 加在動詞前面，表示「在這件事上贏過對方」：outsell、outlast、outwork。' },
      { t: 10, en: 'stay relevant', zh: '維持自己的重要性，不被時代淘汰',
        noteEn: 'Not "stay related". Relevant here means still worth listening to, still needed.',
        noteZh: '不是「有關聯」。這裡的 relevant 指「還值得被聽見、還被需要」。' },
      { t: 13, en: 'walk you through something', zh: '帶你一步一步走過一遍',
        noteEn: 'Useful in meetings: "Let me walk you through the numbers."',
        noteZh: '開會很好用：「Let me walk you through the numbers.」（我帶大家看一下數字。）' },
      { t: 31, en: 'set you apart', zh: '讓你與眾不同、和別人拉開差距',
        noteEn: 'What sets you apart is what makes you different from everyone else doing the same job.',
        noteZh: '指在同樣做這份工作的人當中，讓你和其他人不一樣的那件事。' },
      { t: 36, en: 'build these muscles', zh: '練出這些能力',
        noteEn: 'A metaphor: a skill you can train by repetition, like a muscle. He uses it again later as "the question muscle".',
        noteZh: '比喻用法：像肌肉一樣，靠反覆練習就能養成的能力。他後面還會說 the question muscle。' },
    ],

    questions: [
      { t: 0, en: 'What does he assume you already know?',
        zh: '他假設你已經知道什麼？',
        answerEn: 'The headlines. He opens on what you have already read, not on new information.',
        answerZh: '那些新聞標題。他從你已經讀過的東西開場，而不是從新資訊開場。' },
      { t: 28, en: 'Is he promising to teach technical skills?',
        zh: '他承諾要教的是技術能力嗎？',
        answerEn: 'No — he says so directly. Six ways of thinking, behaving and being, not a list of abilities.',
        answerZh: '不是，他直接說了。是六種思考、行動與存在的方式，不是一份能力清單。' },
      { t: 20, en: 'Why does he mention a book he wrote twenty years ago?',
        zh: '他為什麼要提二十年前寫的那本書？',
        answerEn: 'To show he is not reacting to this year’s news. He has been on this question for two decades — that is his claim to be worth listening to.',
        answerZh: '為了證明他不是在跟今年的新聞熱度。這個問題他已經想了二十年——這就是他「值得一聽」的理由。' },
    ],

    tasks: [
      { en: 'Say his promise about your own job: what would make you hard to replace?',
        zh: '用他那句承諾講你自己的工作：什麼會讓你難以被取代？' },
      { en: 'He opens on something the audience already believes. Open a two-minute talk about your own field the same way.',
        zh: '他從聽眾早就相信的事開場。用同樣的方式，替你自己的領域開一場兩分鐘的演講。' },
    ],
  },

  /* ------------------------------------------------------------------ 2 */
  {
    id: 'questioning',
    videoId: '1LMcGRfYBro',
    start: 43,
    end: 188,

    titleEn: 'Skill one — questioning',
    titleZh: '第一項能力——提問',
    levelEn: 'Adult · B2–C1',
    levelZh: '成人',
    sourceEn: 'Daniel Pink — “The 6 Skills AI Will Never Replace”',

    aboutEn: 'Two and a half minutes on why questions are now worth more than '
      + 'answers, ending in a worked example: the Five Whys, run live on a '
      + 'problem that looks like it is about contractors and turns out not to be.',
    aboutZh: '兩分半，講為什麼在這個時代「問題」比「答案」更值錢，'
      + '最後現場示範一次「五個為什麼」：一個看起來在講承包商、結果根本不是的問題。',

    watchForEn: 'He asks “Why?” five times about one problem — and the real answer is nowhere near the first one.',
    watchForZh: '他對同一個問題連問五次「為什麼」——真正的答案，跟第一個答案差得很遠。',

    lines: [
      { t: 44,  en: 'The first human skill: questioning.', zh: '第一項人類能力：提問。' },
      { t: 45,  en: 'Right answers still matter,', zh: '正確答案還是重要，' },
      { t: 47,  en: 'but smart questions now matter a hell of a lot more.', zh: '但聰明的問題，現在重要得多太多了。' },
      { t: 50,  en: 'Think about it. We used to have search engines.', zh: '你想想看，我們以前有的是搜尋引擎。' },
      { t: 52,  en: 'Now we have answer engines.', zh: '現在我們有的是「答案引擎」。' },
      { t: 54,  en: 'Large language models and other AI tools produce answers on command —', zh: '大型語言模型和其他 AI 工具，說一聲就能生出答案——' },
      { t: 59,  en: 'lots of answers, sometimes dazzling answers.', zh: '大量的答案，有時候還是很漂亮的答案。' },
      { t: 62,  en: 'But here’s the thing.', zh: '但重點來了。' },
      { t: 63,  en: 'When answers are everywhere, questions become the scarce resource.', zh: '當答案到處都是，稀缺的就變成了問題。' },
      { t: 67,  en: 'When answers get cheap, curiosity becomes priceless.', zh: '當答案變得廉價，好奇心就變得無價。' },
      { t: 71,  en: 'In a world of answer engines, curiosity is your killer app.', zh: '在一個滿是答案引擎的世界裡，好奇心就是你最強的那一招。' },
      { t: 76,  en: 'Because every breakthrough starts with a question —', zh: '因為每一次突破，都是從一個問題開始的——' },
      { t: 78,  en: 'sometimes a weird, unlikely question.', zh: '有時候是一個很怪、很不可能的問題。' },
      { t: 81,  en: 'What if light behaves like a particle?', zh: '如果光的行為像粒子呢？' },
      { t: 83,  en: 'What if I can carry a thousand songs in my pocket?', zh: '如果我可以把一千首歌放進口袋呢？' },
      { t: 85,  en: 'What if people actually want to sleep in someone else’s home?', zh: '如果人們其實願意睡在別人家裡呢？' },
      { t: 89,  en: 'Great scientists, great founders, great writers —', zh: '偉大的科學家、偉大的創業者、偉大的作家——' },
      { t: 92,  en: 'they aren’t vending machines for right answers.', zh: '他們不是「正確答案販賣機」。' },
      { t: 95,  en: 'They’re unstoppable generators of interesting questions.', zh: '他們是停不下來的「有趣問題產生器」。' },
      { t: 98,  en: 'They begin their sentences with phrases like these:', zh: '他們的句子常常這樣開頭：' },
      { t: 101, en: 'Why does…? What if…? Why not…? How about…?', zh: '為什麼會……？如果……會怎樣？為什麼不……？那……如何？' },
      { t: 106, en: 'And they often drop the most powerful question of all:', zh: '而且他們常常丟出那個威力最大的問題：' },
      { t: 109, en: 'What are we actually trying to solve here?', zh: '我們到底想解決的是什麼？' },
      { t: 111, en: 'So how do you strengthen the question muscle?', zh: '那要怎麼把「提問的肌肉」練起來？' },
      { t: 114, en: 'If you want a simple starting point, grab The Book of Beautiful Questions by Warren Berger.', zh: '想要一個簡單的起點，去找 Warren Berger 的《The Book of Beautiful Questions》。' },
      { t: 119, en: 'It’s the best practical guide to questioning I’ve ever found.', zh: '那是我看過最實用的提問指南。' },
      { t: 123, en: 'And here’s a dead-simple technique for sharpening this ability: the Five Whys.', zh: '還有一個簡單到不行的方法，可以磨這項能力：五個為什麼。' },
      { t: 127, en: 'Toyota used it in the 1950s. You can use it today, and it works absurdly well.', zh: '豐田在一九五〇年代就在用了。你今天也可以用，而且好用得離譜。' },
      { t: 131, en: 'Let me give you an example.', zh: '我舉個例子。' },
      { t: 133, en: 'Say you need a contractor for a big project —', zh: '假設你有個大案子要找承包商——' },
      { t: 135, en: 'redesigning your website, building a studio, renovating your office.', zh: '重新設計網站、蓋一間工作室、或是重新裝修辦公室。' },
      { t: 138, en: 'So you fire up Claude or ChatGPT and ask for the best contractor in your area,', zh: '於是你打開 Claude 或 ChatGPT，問「我這一區最好的承包商是誰」，' },
      { t: 143, en: 'and you get a long, confident list of answers.', zh: '然後你得到一長串、講得很篤定的答案。' },
      { t: 146, en: 'But as you investigate, none of them seem right.', zh: '但你一個個查下去，沒有一個對得上。' },
      { t: 149, en: 'Ask why.', zh: '問「為什麼」。' },
      { t: 150, en: 'Maybe it’s because none of them is a great fit for your situation.', zh: '也許是因為，沒有一個真正適合你的狀況。' },
      { t: 153, en: 'That’s your first why. Now ask why four more times.', zh: '這是第一個為什麼。接下來，再問四次。' },
      { t: 155, en: 'Why are none of them a great fit? Because their proposals are all over the map.', zh: '為什麼沒有一個適合？因為他們的提案東一個西一個，完全不一致。' },
      { t: 160, en: 'Why? Because each contractor is making different assumptions about what you want.', zh: '為什麼？因為每個承包商對「你到底要什麼」的假設都不一樣。' },
      { t: 164, en: 'Why? Because you never clearly defined the scope, timeline, or success criteria.', zh: '為什麼？因為你從來沒有把範圍、時程和成功標準講清楚。' },
      { t: 168, en: 'Why? Because you and your team don’t actually agree internally on what success looks like.', zh: '為什麼？因為你和你的團隊，內部根本沒有對「成功長什麼樣」達成共識。' },
      { t: 172, en: 'Boom. That’s the real answer — the one that comes after the fifth why.', zh: '就是這個。這才是真正的答案——第五個為什麼之後才出現的那個。' },
      { t: 176, en: 'AI may be better at delivering answers,', zh: 'AI 也許比較會給答案，' },
      { t: 178, en: 'but for now, at least, you are better at asking questions.', zh: '但至少目前，你比較會問問題。' },
      { t: 181, en: 'And once you’ve identified the right problem through questions,', zh: '而當你透過提問找到了對的問題，' },
      { t: 184, en: 'the next human edge kicks in — something machines still struggle to fake.', zh: '下一項人類優勢就登場了——那是機器到現在還很難假裝出來的東西。' },
    ],

    words: [
      { t: 47, en: 'matter a hell of a lot more', zh: '重要得多太多了',
        noteEn: 'Spoken emphasis, mildly rude. Fine in a talk or among colleagues you know; not in a written report.',
        noteZh: '口語強調，帶一點粗話。演講或熟同事之間沒問題，書面報告不要用。' },
      { t: 52, en: 'answer engines', zh: '答案引擎',
        noteEn: 'His coinage, built against "search engines". A search engine finds; an answer engine tells.',
        noteZh: '他自己造的詞，對照 search engines（搜尋引擎）。搜尋引擎幫你找，答案引擎直接告訴你。' },
      { t: 63, en: 'the scarce resource', zh: '稀缺的資源',
        noteEn: 'Scarce = there is not enough of it. The whole argument of this section sits in this one phrase.',
        noteZh: 'scarce 就是「不夠、稀少」。這一段的論點全在這個詞裡。' },
      { t: 71, en: 'your killer app', zh: '你的殺手鐧、最強的一招',
        noteEn: 'From software: the one feature so good it sells the whole product. Used of people, it means your decisive advantage.',
        noteZh: '來自軟體業：好到足以帶動整個產品的那個功能。用在人身上，指你決定性的優勢。' },
      { t: 92, en: 'a vending machine for right answers', zh: '正確答案販賣機',
        noteEn: 'An insult here: someone who dispenses correct answers on demand but originates nothing.',
        noteZh: '這裡是貶義：一投錢就吐出正確答案，但自己不產生任何東西的人。' },
      { t: 155, en: 'all over the map', zh: '東一個西一個、毫無一致性',
        noteEn: 'Inconsistent, scattered, with no shared direction. Very common in meetings about proposals or estimates.',
        noteZh: '不一致、散亂、沒有共同方向。在討論提案或報價的會議上非常常見。' },
      { t: 123, en: 'dead-simple', zh: '簡單到不行',
        noteEn: 'Dead- intensifies an adjective: dead easy, dead right, dead serious.',
        noteZh: 'dead- 用來加強形容詞：dead easy、dead right、dead serious。' },
      { t: 127, en: 'it works absurdly well', zh: '好用得離譜',
        noteEn: 'Absurdly + adjective = so much so that it is almost ridiculous. A very natural way to praise something.',
        noteZh: 'absurdly + 形容詞 ＝ 誇張到近乎荒謬的程度。是很自然的稱讚說法。' },
    ],

    questions: [
      { t: 63, en: 'What does he say has become scarce, and why?',
        zh: '他說什麼變稀缺了？為什麼？',
        answerEn: 'Questions. Because AI has made answers cheap and abundant, so the value moves to whatever is still rare.',
        answerZh: '問題。因為 AI 讓答案變得廉價又充足，價值就轉移到還稀有的東西上。' },
      { t: 92, en: 'What does he say great scientists, founders and writers are NOT?',
        zh: '他說偉大的科學家、創業者和作家「不是」什麼？',
        answerEn: 'Vending machines for right answers — people who simply produce correct answers on demand.',
        answerZh: '「正確答案販賣機」——那種一要求就吐出正確答案的人。' },
      { t: 172, en: 'In the contractor example, what was the real problem?',
        zh: '在承包商那個例子裡，真正的問題是什麼？',
        answerEn: 'Not the contractors at all. His own team had never agreed internally on what success would look like.',
        answerZh: '根本不是承包商的問題。是他自己的團隊，內部從來沒有對「成功長什麼樣」達成共識。' },
      { t: 176, en: 'What does he admit AI is better at?',
        zh: '他承認 AI 在哪一件事上比較強？',
        answerEn: 'Delivering answers. He concedes that, and claims only the asking for humans.',
        answerZh: '給答案。這點他承認，只把「提問」留給人類。' },
    ],

    tasks: [
      { en: 'Run the Five Whys out loud on something at work that keeps going wrong. All five — do not stop at two.',
        zh: '針對工作上一再出錯的某件事，出聲跑一次「五個為什麼」。五次都要問完，不要問到第二次就停。' },
      { en: 'Ask three “What if…?” questions about your own industry. The stranger the better.',
        zh: '針對你自己的產業問三個「如果……會怎樣？」。越奇怪越好。' },
      { en: 'Take a problem you are stuck on and ask: what are we actually trying to solve here? Does the problem change?',
        zh: '拿一個你卡住的問題，問自己：我們到底想解決的是什麼？問題有因此改變嗎？' },
    ],
  },

/* ------------------------------------------------------------------ */
  {
    id: 'taste',
    videoId: '1LMcGRfYBro',
    start: 188,
    end: 324,

    titleEn: 'Skill two — taste',
    titleZh: '第二項能力——品味',
    levelEn: 'Adult · B2–C1',
    levelZh: '成人',
    sourceEn: 'Daniel Pink — “The 6 Skills AI Will Never Replace”',

    aboutEn: 'Two and a quarter minutes on knowing what is good, in a world where '
      + 'a machine can make anything. The proof is his own email newsletter: '
      + 'AI hands him fifty subject lines, forty-seven of them awful, and '
      + 'twenty-five years of experience is what tells him which one to keep.',
    aboutZh: '兩分十五秒，講的是：當機器什麼都生得出來時，「知道什麼才是好的」有多值錢。他拿自己的電子報當證據——AI '
      + '一口氣給他五十個信件主旨，其中四十七個很糟，而幫他挑出該留哪一個的，是二十五年的經驗。',

    watchForEn: 'In the end he uses AI’s line, not his own — but he changes it first. '
      + 'Listen for the moment he calls that the secret.',
    watchForZh: '最後他用的是 AI 寫的那一句，不是自己的——但他先改過。注意聽他說「這就是訣竅」的那一刻。',

    lines: [
      { t: 188, en: 'Taste.',
                zh: '品味。' },
      { t: 190, en: 'In a world drowning in mediocrity and slop,',
                zh: '在一個被平庸和粗製濫造淹沒的世界裡，' },
      { t: 193, en: 'knowing what’s good is a superpower.',
                zh: '知道什麼是好東西，就是一種超能力。' },
      { t: 196, en: 'Taste. Discernment, judgment.',
                zh: '品味。辨識力、判斷力。' },
      { t: 198, en: 'the ability to tap your experience, your intuition, and your values,',
                zh: '一種能調動你的經驗、你的直覺、你的價值觀的能力，' },
      { t: 202, en: 'and look at a pile of options and say with confidence,',
                zh: '然後看著一堆選項，很篤定地說出：' },
      { t: 205, en: 'that one, that’s it.',
                zh: '就是那個，就是它了。' },
      { t: 208, en: 'Remember, AI is really good at generating stuff.',
                zh: '別忘了，AI 非常會生東西。' },
      { t: 211, en: 'But as it pumps out endless drafts, scripts, images, and ideas,',
                zh: '但當它不停吐出草稿、腳本、圖片和點子，' },
      { t: 215, en: 'taste becomes the filter that separates the marvelously meaningful from the merely meh.',
                zh: '品味就成了那道濾網，把「精彩又有意義」和「只是還好而已」分開來。' },
      { t: 221, en: 'Let me give you an example from my own work.',
                zh: '我拿自己的工作舉個例子。' },
      { t: 223, en: 'I’ve got an email newsletter.',
                zh: '我有一份電子報。' },
      { t: 225, en: 'Before AI, I wrote the subject lines myself.',
                zh: '在 AI 出現之前，信件主旨都是我自己寫的。' },
      { t: 227, en: 'Now I hand the draft newsletter to Claude or Gemini',
                zh: '現在我把電子報的草稿丟給 Claude 或 Gemini，' },
      { t: 229, en: 'and ask for suggestions, and they deliver.',
                zh: '請它們給建議，而它們真的給得出來。' },
      { t: 231, en: 'Fifty subject lines in just a few seconds.',
                zh: '幾秒鐘就生出五十個主旨。' },
      { t: 234, en: 'It’s astonishing.',
                zh: '實在驚人。' },
      { t: 235, en: 'But here’s the thing.',
                zh: '但重點來了。' },
      { t: 237, en: 'Most of them stink.',
                zh: '大部分都很爛。' },
      { t: 238, en: 'And when I say most of them,',
                zh: '我說「大部分」，' },
      { t: 240, en: 'I mean forty-seven out of fifty are usually awful.',
                zh: '意思是五十個裡面，通常有四十七個很糟。' },
      { t: 243, en: 'Two may be solid, and one might be genuinely good.',
                zh: '大概兩個算紮實，一個是真的好。' },
      { t: 245, en: 'But to know which is which,',
                zh: '但要分辨哪個是哪個，' },
      { t: 247, en: 'I have to apply my twenty-five years of experience as a writer,',
                zh: '我得動用我二十五年的寫作經驗，' },
      { t: 250, en: 'my knowledge of who our audience is and what they care about,',
                zh: '我對讀者是誰、在乎什麼的了解，' },
      { t: 254, en: 'my own comfort with style and word choice.',
                zh: '還有我自己對文風和用字的手感。' },
      { t: 256, en: 'That’s taste.',
                zh: '這就是品味。' },
      { t: 258, en: 'And what usually happens is that I take one of AI’s suggestions,',
                zh: '而通常的情況是，我拿 AI 的其中一個建議，' },
      { t: 261, en: 'tweak it based on that taste, and come up with something even better.',
                zh: '照著那個品味改一改，最後弄出更好的東西。' },
      { t: 265, en: 'That’s the secret.',
                zh: '這就是訣竅。' },
      { t: 267, en: 'Not human or machine — human plus machine.',
                zh: '不是人「或」機器，而是人「加」機器。' },
      { t: 271, en: 'AI provides the raw material.',
                zh: 'AI 提供原料。' },
      { t: 273, en: 'Taste shapes it into something real.',
                zh: '品味把它捏成真正的東西。' },
      { t: 275, en: 'Here’s a way to put this idea into action,',
                zh: '這裡有一個把這個想法真的做出來的方法，' },
      { t: 277, en: 'to get serious about developing and understanding your own taste.',
                zh: '讓你認真去培養、也去搞懂自己的品味。' },
      { t: 280, en: 'Create your own hall of fame,',
                zh: '建一個屬於你自己的「名人堂」，' },
      { t: 283, en: 'in a physical folder, in Notes, Notion, Dropbox, whatever.',
                zh: '實體資料夾、備忘錄、Notion、Dropbox，什麼都行。' },
      { t: 287, en: 'When you see an example of great writing, great design,',
                zh: '當你看到很棒的文字、很棒的設計，' },
      { t: 290, en: 'great solutions, great innovations —',
                zh: '很棒的解法、很棒的創新——' },
      { t: 292, en: 'anything that makes your neurons catch fire,',
                zh: '任何讓你腦袋瞬間發亮的東西，' },
      { t: 294, en: 'capture it, save it, study it.',
                zh: '抓下來、存起來、拿來研究。' },
      { t: 296, en: 'Over time, your hall of fame becomes a map of your taste.',
                zh: '久而久之，這個名人堂就會變成一張你品味的地圖。' },
      { t: 300, en: 'Patterns emerge, standards rise, judgment sharpens,',
                zh: '規律浮現、標準變高、判斷力變銳利，' },
      { t: 303, en: 'and that’s how you turn taste from something vague and mystical',
                zh: '你就是這樣把品味從模糊又玄的東西，' },
      { t: 308, en: 'into something concrete and powerful.',
                zh: '變成具體又有力量的東西。' },
      { t: 311, en: 'The future doesn’t belong to people with the most ideas.',
                zh: '未來不屬於點子最多的人。' },
      { t: 313, en: 'It belongs to the people with the best taste.',
                zh: '而是屬於品味最好的人。' },
      { t: 317, en: 'And that sets the stage for the next human advantage —',
                zh: '而這也就帶出了下一項人類優勢——' },
      { t: 320, en: 'the one that turns good taste into great solutions.',
                zh: '那個把好品味變成好解法的能力。' },
    ],

    words: [
      { t: 192, en: 'slop', zh: '（AI 生出來的）粗製濫造內容',
        noteEn: 'A new sense of an old word: the flood of cheap AI-generated content '
          + 'nobody actually asked for. Informal, always an insult.',
        noteZh: '舊字的新用法：AI 大量生出來、其實沒人想要的低品質內容。口語，永遠是貶義。' },
      { t: 198, en: 'tap your experience', zh: '調動、動用你的經驗',
        noteEn: 'Tap = draw on something you already have. Also “tap your network”, '
          + '“tap into the data we already have”.',
        noteZh: 'tap 是「去用你本來就有的東西」。也可以說 tap your network（動用人脈）、tap into the data we '
          + 'already have。' },
      { t: 211, en: 'pump out', zh: '大量、快速地生產出來',
        noteEn: 'To produce a lot, fast. It usually hints that quality was not the '
          + 'point: “we pump out three decks a week”.',
        noteZh: '快速大量地生產，通常帶一點「品質不是重點」的暗示：we pump out three decks a week（我們一週生三份簡報）。' },
      { t: 219, en: 'the merely meh', zh: '只是「還好而已」的東西',
        noteEn: 'Meh is the spoken noise for “eh, not impressed”, now used as an '
          + 'adjective: “The demo was meh.” Never write it in a report.',
        noteZh: 'meh 本來是口語裡「嗯……普普」的那個聲音，現在拿來當形容詞：The demo was meh.（那個 demo '
          + '普普通通。）書面報告不要用。' },
      { t: 237, en: 'it stinks', zh: '很爛、很差',
        noteEn: 'A blunt spoken verdict. Fine with colleagues you know, far too rude '
          + 'in front of a client.',
        noteZh: '很直接的口語評價。跟熟同事講沒問題，但在客戶面前太不客氣。' },
      { t: 243, en: 'solid', zh: '紮實、夠好、可以用',
        noteEn: 'Praise, but measured: good enough to use, not brilliant. “A solid '
          + 'proposal.” Extremely common in feedback.',
        noteZh: '是稱讚，但有分寸：夠好、可以用，但還不到出色。A solid proposal.（提案很紮實。）在給回饋時非常常見。' },
      { t: 261, en: 'tweak', zh: '微調、稍微改一下',
        noteEn: 'A small adjustment, not a rewrite. Saying “let me tweak the wording” '
          + 'tells people the change is minor and quick.',
        noteZh: '小幅度調整，不是重寫。說 let me tweak the wording，就是在告訴對方：只是小改，很快。' },
      { t: 318, en: 'set the stage for', zh: '為……鋪路、帶出下一段',
        noteEn: 'To prepare the way for what comes next. He uses it to hand off '
          + 'between sections — worth stealing for your own presentations.',
        noteZh: '為接下來的東西鋪路。他用這句話銜接兩個段落——這招值得偷來用在自己的簡報上。' },
    ],

    questions: [
      { t: 215, en: 'What does he say taste becomes, once AI is generating without stopping?',
        zh: '他說當 AI 不停地生東西時，品味變成了什麼？',
        answerEn: 'The filter — the thing that separates the marvelously meaningful '
          + 'from the merely meh.',
        answerZh: '一道濾網——把「精彩又有意義」和「只是還好而已」分開來的那個東西。' },
      { t: 240, en: 'Of the fifty subject lines AI writes for him, how many are any good?',
        zh: 'AI 幫他寫的五十個信件主旨裡，有幾個是好的？',
        answerEn: 'Forty-seven out of fifty are usually awful. Two may be solid, and '
          + 'one might be genuinely good.',
        answerZh: '五十個裡面通常有四十七個很糟。大概兩個算紮實，一個是真的好。' },
      { t: 247, en: 'What three things does he apply to tell the good one from the rest?',
        zh: '他用哪三樣東西，把好的那一個從其他挑出來？',
        answerEn: 'Twenty-five years of experience as a writer, his knowledge of who '
          + 'the audience is and what they care about, and his own comfort with '
          + 'style and word choice.',
        answerZh: '二十五年的寫作經驗、他對讀者是誰和在乎什麼的了解，以及他自己對文風和用字的手感。' },
      { t: 267, en: 'He calls something “the secret”. What is it?',
        zh: '他說有一件事是「訣竅」。是什麼？',
        answerEn: 'Not human or machine, but human plus machine. AI provides the raw '
          + 'material; taste shapes it into something real.',
        answerZh: '不是人「或」機器，而是人「加」機器。AI 提供原料，品味把它捏成真正的東西。' },
    ],

    tasks: [
      { en: 'Think of something AI drafted for you this month. Say out loud what '
        + 'you kept, what you changed, and why. That “why” is your taste.',
        zh: '想一件這個月 AI 幫你打過草稿的東西。出聲說說：你留下了什麼、改掉了什麼、為什麼。那個「為什麼」就是你的品味。' },
      { en: 'Start your hall of fame now. Name three things in your industry you '
        + 'think are genuinely excellent, and say what they have in common.',
        zh: '現在就開始建你的名人堂。說出你這一行裡三件你認為真的很優秀的東西，並說出它們的共通點。' },
      { en: 'Describe one thing your team produces that is merely meh. What '
        + 'single change would make it solid?',
        zh: '講一個你們團隊做出來、「只是還好而已」的東西。改哪一件事，就能讓它變得紮實？' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'iteration',
    videoId: '1LMcGRfYBro',
    start: 324,
    end: 447,

    titleEn: 'Skill three — iteration',
    titleZh: '第三項能力——反覆修改',
    levelEn: 'Adult · B2–C1',
    levelZh: '成人',
    sourceEn: 'Daniel Pink — “The 6 Skills AI Will Never Replace”',

    aboutEn: 'Two minutes on the unglamorous half of good work: the tenth version, '
      + 'not the first. Two famous examples, then three tactics you could use '
      + 'tomorrow — the shitty first draft, spacing out your revisions, and '
      + 'shipping at 80%.',
    aboutZh: ' '
      + '兩分鐘，講好作品裡最不光鮮的那一半：關鍵在第十版，不在第一版。先舉兩個有名的例子，再給三個明天就能用的做法——先寫爛初稿、把修改的間隔拉開、以及在八成的時候就交出去。',

    watchForEn: 'He gives the 0.8 rule, then immediately admits it is really, really '
      + 'hard — for him. Listen for the moment the advice turns into a '
      + 'confession.',
    watchForZh: '他講完 0.8 原則，馬上承認這件事對他自己來說真的、真的很難。聽聽看建議是在哪一刻變成了自白。',

    lines: [
      { t: 324, en: 'Iteration. Your first version won’t be your best version.',
                zh: '反覆修改。你的第一版，不會是你最好的一版。' },
      { t: 326, en: 'Your tenth, or maybe your 110th, might be.',
                zh: '第十版，或者第一百一十版，才有可能是。' },
      { t: 330, en: 'If questioning frames the problem and taste sets the standard,',
                zh: '如果說提問幫你界定問題、品味幫你設定標準，' },
      { t: 335, en: 'iteration is how you close the gap.',
                zh: '那反覆修改，就是你把這中間的差距補起來的方法。' },
      { t: 338, en: 'Think of James Dyson building more than 5,000 prototypes,',
                zh: '想想 James Dyson 做了五千多個原型，' },
      { t: 341, en: 'or the great abstract expressionist Willem de Kooning',
                zh: '或是抽象表現主義大師 Willem de Kooning，' },
      { t: 345, en: 'working on a single canvas for two years,',
                zh: '同一塊畫布畫了整整兩年，' },
      { t: 348, en: 'endlessly scraping off paint and starting again until he got it right.',
                zh: '不停地把顏料刮掉、重新再來，直到他覺得對了為止。' },
      { t: 352, en: 'Here’s the part we don’t like admitting.',
                zh: '有件事，我們不太願意承認。' },
      { t: 354, en: 'Most good things start out bad.',
                zh: '大部分的好東西，一開始都很爛。' },
      { t: 356, en: 'The magic isn’t in the first spark.',
                zh: '神奇的地方，不在第一個靈光乍現。' },
      { t: 359, en: 'The magic is in the relentless revision.',
                zh: '神奇的地方，在於那種停不下來的一改再改。' },
      { t: 362, en: 'AI can help you generate variations at astonishing speed, and that’s great,',
                zh: 'AI 可以用驚人的速度幫你生出各種版本，這很棒，' },
      { t: 366, en: 'but it still takes a human to refine, redirect, discard, and polish.',
                zh: '但要修飾、要轉方向、要砍掉、要打磨，還是得靠人。' },
      { t: 370, en: 'AI accelerates the quantity. Iteration delivers the quality.',
                zh: 'AI 負責把「量」衝上去；反覆修改負責把「質」做出來。' },
      { t: 375, en: 'Here are a few tactics that have helped me.',
                zh: '以下是幾個對我有用的做法。' },
      { t: 378, en: 'Simple, unglamorous habits that compound fast.',
                zh: '都是簡單、不起眼的小習慣，但累積起來效果很快。' },
      { t: 381, en: 'First, adopt Anne Lamott’s principle of the shitty first draft.',
                zh: '第一，採用 Anne Lamott 的原則：先寫一份「爛到不行的初稿」。' },
      { t: 386, en: 'Don’t aim for perfection. Just get it done.',
                zh: '不要追求完美，先把它做完就好。' },
      { t: 388, en: 'Then refine, iterate, and refine and iterate some more.',
                zh: '然後修一輪、改一輪，再修一輪、再改一輪。' },
      { t: 392, en: 'Second, space out your iterations.',
                zh: '第二，把每次修改之間的間隔拉開。' },
      { t: 394, en: 'Sometimes I’ll write a draft, make a few quick passes,',
                zh: '我有時候會先寫一稿，快速改個幾輪，' },
      { t: 396, en: 'then deliberately leave it alone for a week.',
                zh: '然後刻意把它擱著一個星期不去碰。' },
      { t: 399, en: 'When I come back, the flaws pop, the fixes are obvious,',
                zh: '等我回頭再看，缺點會自己跳出來，怎麼修也一目了然，' },
      { t: 403, en: 'and the iteration speeds up.',
                zh: '整個修改的速度就變快了。' },
      { t: 405, en: 'That works for anything: pitch decks, designs, wedding toasts, you name it.',
                zh: '這招什麼都適用：提案簡報、設計、婚禮致詞，你想得到的都算。' },
      { t: 409, en: 'Third, adopt what some folks call the version 0.8 rule.',
                zh: '第三，用有些人說的「0.8 版原則」。' },
      { t: 413, en: 'Share your work when it’s at 80%, not 100%.',
                zh: '在八成、而不是十成的時候，就把東西拿出來給人看。' },
      { t: 417, en: 'Now, I’ll admit this is really, really hard for me.',
                zh: '我得承認，這件事對我來說真的、真的很難。' },
      { t: 420, en: 'I want my stuff to be great,',
                zh: '我希望我做出來的東西是很棒的，' },
      { t: 421, en: 'but I found that many times waiting until I’m fully ready blocks progress.',
                zh: '但我發現，很多時候等到「完全準備好」，反而把進度卡住了。' },
      { t: 426, en: 'Shipping at 0.8 forces me to iterate, to learn, to improve fast.',
                zh: '在 0.8 就先交出去，逼我去改、去學、去很快變好。' },
      { t: 430, en: 'You don’t have to get it right the first time.',
                zh: '你不需要第一次就做對。' },
      { t: 432, en: 'You just have to get it right over time.',
                zh: '你只需要隨著時間，慢慢把它做對。' },
      { t: 435, en: 'AI gives you the options. Iteration gives you excellence.',
                zh: 'AI 給你選項；反覆修改給你卓越。' },
      { t: 439, en: 'And once you have those excellent pieces,',
                zh: '而當你手上有了這些出色的零件之後，' },
      { t: 442, en: 'you need to know how to assemble them.',
                zh: '你就得知道怎麼把它們組裝起來。' },
      { t: 445, en: 'That’s the human skill of composition.',
                zh: '那就是「組合」這項人類能力。' },
    ],

    words: [
      { t: 335, en: 'close the gap', zh: '把差距補起來、把落差追平',
        noteEn: 'The gap is the distance between where the work is now and the '
          + 'standard you set. Very common in reviews: “How do we close the gap '
          + 'by Friday?”',
        noteZh: 'gap 指「現在的狀態」和「你設定的標準」之間的距離。檢討會議很常用：「How do we close the gap by '
          + 'Friday?」（我們要怎麼在週五前把差距補起來？）' },
      { t: 352, en: 'Here’s the part we don’t like admitting.', zh: '有件事我們不太願意承認。',
        noteEn: 'A spoken move, not a phrase to look up: you announce an '
          + 'uncomfortable truth before you say it, so the room leans in. Works '
          + 'well before bad numbers.',
        noteZh: '這是一種說話的手法，不是字典裡的片語：先預告「接下來這句不好聽」，聽的人反而會專心。要報壞數字之前特別好用。' },
      { t: 378, en: 'habits that compound', zh: '會像複利一樣累積的習慣',
        noteEn: 'Compound is the interest word. A habit that compounds gives you a '
          + 'little each time and a lot over years. He pairs it with unglamorous '
          + '— small, boring, effective.',
        noteZh: 'compound 本來是「複利」。會複利的習慣，就是每次只給你一點點、但幾年後給你很多。他還配了 '
          + 'unglamorous——小、無聊、但有效。' },
      { t: 381, en: 'a shitty first draft', zh: '爛到不行的初稿',
        noteEn: 'Mild profanity, and also the published name of Anne Lamott’s idea '
          + 'from Bird by Bird — soften it to “bad first draft” and the reference '
          + 'disappears. Fine when you are quoting her; not something to say '
          + 'about a colleague’s work.',
        noteZh: 'shitty 是輕微的粗話，但它同時是 Anne Lamott 在《Bird by Bird》裡定下的說法，改成 bad first '
          + 'draft 就看不出出處了。引用她的時候照原話說沒問題，但不要拿這個字去講同事的東西。' },
      { t: 392, en: 'space something out', zh: '把時間間隔拉開',
        noteEn: 'To put deliberate time between the repeats. Also used of meetings '
          + 'and payments: “Can we space out the instalments?”',
        noteZh: '刻意在兩次之間留出時間。也可以用在會議和付款上：「Can we space out the '
          + 'instalments?」（分期可以拉開一點嗎？）' },
      { t: 399, en: 'the flaws pop', zh: '缺點會自己跳出來',
        noteEn: 'Pop = suddenly become obvious, as if jumping off the page. Spoken '
          + 'English. “Read it tomorrow and the typos pop.”',
        noteZh: 'pop 是「突然變得很明顯」，好像自己從紙上跳出來。口語用法：「Read it tomorrow and the typos '
          + 'pop.」（明天再看一次，錯字自己就跳出來了。）' },
      { t: 405, en: 'you name it', zh: '你想得到的都算',
        noteEn: 'Closes a list instead of finishing it. Say it after two or three '
          + 'examples: “Excel, Word, PowerPoint, you name it.”',
        noteZh: '用來收尾一串清單，代替把它列完。舉個兩三個例子之後接上去：「Excel, Word, PowerPoint, you name it.」' },
      { t: 426, en: 'ship at 0.8', zh: '做到八成就先交出去',
        noteEn: 'Ship means release it to real people — send, publish, launch. From '
          + 'software, now used of any work: “Let’s ship it Monday and fix it '
          + 'live.”',
        noteZh: 'ship 指「真的交到別人手上」——寄出、上線、發布。來自軟體業，現在什麼工作都能用：「Let’s ship it Monday and '
          + 'fix it live.」（週一先出，上線後再修。）' },
    ],

    questions: [
      { t: 338, en: 'Which two people does he use as examples, and what did each of them do?',
        zh: '他舉了哪兩個人當例子？他們各自做了什麼？',
        answerEn: 'James Dyson, who built more than 5,000 prototypes; and the painter '
          + 'Willem de Kooning, who worked on a single canvas for two years, '
          + 'scraping the paint off and starting again until he got it right.',
        answerZh: 'James Dyson，他做了五千多個原型；還有畫家 Willem de '
          + 'Kooning，他同一塊畫布畫了兩年，一直把顏料刮掉重來，直到他覺得對了。' },
      { t: 370, en: 'He splits the work between AI and iteration. Which gets which?',
        zh: '他把工作分給 AI 和「反覆修改」兩邊。各自負責什麼？',
        answerEn: 'AI accelerates the quantity — it generates variations fast. '
          + 'Iteration delivers the quality, because a human still has to refine, '
          + 'redirect, discard and polish.',
        answerZh: 'AI 負責衝「量」，快速生出各種版本；反覆修改負責做出「質」，因為修飾、轉方向、砍掉、打磨還是得靠人。' },
      { t: 392, en: 'What is his second tactic, and what does he say happens when he comes back?',
        zh: '他的第二個做法是什麼？他說回頭再看的時候會發生什麼事？',
        answerEn: 'Space out your iterations — write a draft, make a few quick passes, '
          + 'then deliberately leave it alone for a week. When he comes back, the '
          + 'flaws pop, the fixes are obvious, and the iteration speeds up.',
        answerZh: '把修改的間隔拉開——先寫一稿、快速改個幾輪，然後刻意擱著一個星期。等他回頭再看，缺點會自己跳出來、怎麼修也很明顯，修改速度就變快了。' },
      { t: 417, en: 'What does he admit about his own 0.8 rule?',
        zh: '關於他自己提的 0.8 原則，他承認了什麼？',
        answerEn: 'That it is really, really hard for him. He wants his stuff to be '
          + 'great, but he found that waiting until he is fully ready blocks '
          + 'progress.',
        answerZh: '他承認這對他來說真的、真的很難。他希望自己做的東西很棒，但他發現等到「完全準備好」反而卡住進度。' },
    ],

    tasks: [
      { en: 'Name one thing at work you are holding back until it is 100%. Say '
        + 'what your 0.8 version would look like, and who you would send it to '
        + 'this week.',
        zh: '說出一件你現在壓著、想做到一百分才拿出來的工作。講講你的「0.8 版」會長什麼樣子，這個星期你會先寄給誰。' },
      { en: 'Describe something you only got right after many versions. How many '
        + 'did it take, and what changed between the first one and the last?',
        zh: '描述一件你改了很多版才做對的事。總共改了幾版？第一版和最後一版之間，改變了什麼？' },
      { en: 'Take a document you keep polishing. Say out loud what you would '
        + 'leave alone for a week — and what you expect will pop when you come '
        + 'back to it.',
        zh: '拿一份你一直在修的文件。出聲說說看：你會把哪一部分擱著一個星期？一個星期後回頭看，你猜哪些缺點會自己跳出來？' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'composition',
    videoId: '1LMcGRfYBro',
    start: 447,
    end: 578,

    titleEn: 'Skill four — composition',
    titleZh: '第四項能力——編排',
    levelEn: 'Adult · B2–C1',
    levelZh: '成人',
    sourceEn: 'Daniel Pink — “The 6 Skills AI Will Never Replace”',

    aboutEn: 'Two minutes on the skill of putting pieces together — the one that '
      + 'makes a presentation, a team or a party feel like one thing rather '
      + 'than a pile of parts. His three exercises are unusually concrete: '
      + 'three beats, the grid in your phone camera, and pausing a film on a '
      + 'quiet shot.',
    aboutZh: ' '
      + '兩分鐘，講「把零件組成整體」這項能力——讓一份簡報、一個團隊、一場派對感覺像「一件事」，而不是一堆零件。他給的三個練習具體到不行：三段結構、手機相機的格線，還有把電影暫停在一個安靜的鏡頭上。',

    watchForEn: 'He gives away the whole section in the first two sentences — a '
      + 'kitchen, some ingredients, and who does the cooking.',
    watchForZh: '整段的重點，他在前兩句就講完了——一個廚房、一些食材，還有誰負責做菜。',

    lines: [
      { t: 447, en: 'Four: composition.',
                zh: '第四項：編排。' },
      { t: 448, en: 'AI is excellent at delivering ingredients.',
                zh: 'AI 很擅長把食材端出來。' },
      { t: 451, en: 'Humans are better at serving meals.',
                zh: '人類比較擅長的，是把它變成一頓飯端上桌。' },
      { t: 453, en: 'Composition is the art of assembling pieces —',
                zh: '編排，就是把零件組裝起來的藝術——' },
      { t: 456, en: 'ideas, scenes, arguments, visuals —',
                zh: '想法、場景、論點、畫面——' },
      { t: 459, en: 'into something coherent, meaningful, and emotionally resonant.',
                zh: '組成一個連貫、有意義、而且打動人的整體。' },
      { t: 462, en: 'A composer does it with sound.',
                zh: '作曲家用聲音做這件事。' },
      { t: 464, en: 'A filmmaker does it with cuts and pacing.',
                zh: '導演用剪接和節奏做這件事。' },
      { t: 466, en: 'A painter does it with color.',
                zh: '畫家用顏色做這件事。' },
      { t: 469, en: 'Composition is the ability to synthesize rather than analyze,',
                zh: '編排是「綜合」的能力，不是「分析」的能力，' },
      { t: 472, en: 'to see relationships between things that might not at first seem related,',
                zh: '是看見那些乍看之下毫不相干的事物之間的關聯，' },
      { t: 476, en: 'to combine elements in a way that makes the whole',
                zh: '是把各種元素組合起來，讓整體' },
      { t: 479, en: 'larger and more powerful than the sum of the parts.',
                zh: '比所有零件加起來還要大、還要有力量。' },
      { t: 482, en: 'It’s a fundamentally artistic skill,',
                zh: '這本質上是一種藝術能力，' },
      { t: 484, en: 'but now even non-artists must master it,',
                zh: '但現在連不是搞藝術的人都得學會，' },
      { t: 488, en: 'because you compose every time you create and make a presentation.',
                zh: '因為你每次做簡報，其實都在做編排。' },
      { t: 491, en: 'You compose every time you assemble a team.',
                zh: '你每次組一個團隊，都是在做編排。' },
      { t: 494, en: 'You compose every time you put on an event, or even throw a party.',
                zh: '你每次辦活動、甚至只是辦一場派對，都是在做編排。' },
      { t: 497, en: 'I wrote about an early version of this in A Whole New Mind,',
                zh: '我在《A Whole New Mind》裡寫過這個想法的雛形，' },
      { t: 500, en: 'when I described my experience learning how to draw,',
                zh: '當時我寫的是自己學畫畫的經驗，' },
      { t: 502, en: 'seeing the negative space in the FedEx logo,',
                zh: '看見 FedEx 標誌裡的留白，' },
      { t: 505, en: 'and trying to understand the great symphonies.',
                zh: '還有試著去理解那些偉大的交響曲。' },
      { t: 507, en: 'Here are three simple ways to sharpen your compositional skills,',
                zh: '以下是三個簡單的方法，可以磨利你的編排能力，' },
      { t: 511, en: 'for the age of AI, when large language models can flood you with components.',
                zh: '好面對這個 AI 時代——大型語言模型會把零件一股腦倒給你。' },
      { t: 515, en: 'First, use the rule of three.',
                zh: '第一，用「三的法則」。' },
      { t: 517, en: 'Whenever you explain something — a point, an idea, a story —',
                zh: '每次你要解釋一件事——一個重點、一個想法、一個故事——' },
      { t: 522, en: 'organize it into three beats.',
                zh: '就把它整理成三段。' },
      { t: 523, en: 'That will make your thinking clearer and your communication cleaner.',
                zh: '這會讓你的思考更清楚，表達也更乾淨。' },
      { t: 526, en: 'A second composition technique: learn to see the structure.',
                zh: '第二個編排的方法：學會看見結構。' },
      { t: 529, en: 'Here’s one easy trick.',
                zh: '這裡有個很簡單的小撇步。' },
      { t: 530, en: 'Go into your phone camera settings and turn on grid.',
                zh: '打開手機相機的設定，把格線打開。' },
      { t: 534, en: 'It’s usually a 3x3 layout.',
                zh: '通常就是九宮格。' },
      { t: 536, en: 'This is a super easy way to learn the rule of thirds.',
                zh: '這是學「三分法」最簡單的方式。' },
      { t: 540, en: 'And once you understand this rule, the next time you take a picture,',
                zh: '懂了這個規則之後，下次拍照的時候，' },
      { t: 543, en: 'instead of putting the subject at the center,',
                zh: '不要把主角放在正中間，' },
      { t: 545, en: 'try placing the subject on one of the intersecting lines.',
                zh: '試著把它放在格線的交叉點上。' },
      { t: 549, en: 'Congratulations — you’re now a composer.',
                zh: '恭喜，你現在會編排了。' },
      { t: 551, en: 'And third, play the movie pause game.',
                zh: '第三，玩「電影暫停遊戲」。' },
      { t: 555, en: 'When you’re watching a visually striking movie,',
                zh: '當你在看一部畫面很有味道的電影時，' },
      { t: 557, en: 'hit pause during a scene that doesn’t have much action.',
                zh: '在一個沒什麼動作的鏡頭按下暫停。' },
      { t: 559, en: 'Where are the actors standing?',
                zh: '演員站在哪裡？' },
      { t: 561, en: 'Are they framed by a doorway?',
                zh: '他們是不是被一個門框框住了？' },
      { t: 563, en: 'How are they lit?',
                zh: '光是怎麼打的？' },
      { t: 564, en: 'Is there a leading line, like a road or a railing, pointing at them?',
                zh: '畫面裡有沒有一條引導線——像是一條路或一道欄杆——指向他們？' },
      { t: 568, en: 'AI can make lots and lots of parts.',
                zh: 'AI 可以做出一大堆零件。' },
      { t: 571, en: 'But you don’t win with more pieces,',
                zh: '但你贏的不是靠零件比較多，' },
      { t: 573, en: 'you win with better arrangement.',
                zh: '你贏的是靠編排得比較好。' },
      { t: 575, en: 'If composition is the musical score, the next one is the orchestra.',
                zh: '如果編排是樂譜，那下一項就是樂團。' },
    ],

    words: [
      { t: 451, en: 'better at serving meals', zh: '比較會把整頓飯端上桌',
        noteEn: 'His kitchen image: AI hands you the ingredients, a person turns them '
          + 'into a meal. A very usable line when someone asks what AI still '
          + 'cannot do.',
        noteZh: '他的廚房比喻：AI 把食材遞給你，人負責把它變成一頓飯。別人問「AI 到底還不會做什麼」時，這句話很好用。' },
      { t: 459, en: 'emotionally resonant', zh: '能打動人的',
        noteEn: 'Says a piece of work does not merely function — it lands. Common in '
          + 'design and marketing reviews; a little formal for small talk.',
        noteZh: '意思是這個作品不只是「能用」，而且「打得到人」。設計和行銷的討論裡很常見，閒聊時用會有點文謅謅。' },
      { t: 469, en: 'synthesize rather than analyze', zh: '用綜合，而不是拆解',
        noteEn: 'Analyze breaks a thing apart; synthesize puts things together. A '
          + 'neat way to describe what a senior person is actually paid to do.',
        noteZh: 'analyze 是把東西拆開，synthesize 是把東西合起來。要形容資深的人到底在做什麼，這組詞很好用。' },
      { t: 479, en: 'larger and more powerful than the sum of the parts', zh: '大於各部分的總和',
        noteEn: 'Usually said as “greater than the sum of its parts”. Almost always '
          + 'about a team.',
        noteZh: '一般的講法是 greater than the sum of its parts。幾乎都是在講團隊。' },
      { t: 494, en: 'put on an event', zh: '辦一場活動',
        noteEn: 'Put on = organize and run: an event, a show, a workshop. Throw is '
          + 'the casual sibling and takes celebrations — throw a party, throw a '
          + 'dinner, throw a birthday — but not a conference.',
        noteZh: 'put on 是「籌辦並執行」，活動、演出、工作坊都可以。throw 比較口語，用在慶祝性質的場合——throw a '
          + 'party、throw a dinner、throw a birthday——但不會用在研討會上。' },
      { t: 511, en: 'flood you with components', zh: '把零件一股腦倒給你',
        noteEn: 'Flood someone with something = send far more than they can use. '
          + '“They flooded us with feedback.”',
        noteZh: 'flood someone with something ＝ 給的量遠遠超過對方消化得了的。例如：They flooded us '
          + 'with feedback.（他們的意見多到我們看不完。）' },
      { t: 515, en: 'the rule of three', zh: '三的法則',
        noteEn: 'Organize anything you have to explain into three beats. A beat here '
          + 'is one part of a structure, not a rhythm.',
        noteZh: '任何你要解釋的東西，都整理成三段。這裡的 beat 指的是結構的一段，不是節拍。' },
      { t: 571, en: 'you don’t win with more pieces', zh: '贏的不是靠零件比較多',
        noteEn: 'The shape “you don’t win with X, you win with Y” is a clean way to '
          + 'tell a team it is measuring the wrong thing.',
        noteZh: 'you don’t win with X, you win with Y 這個句型，很適合用來提醒團隊「你們盯錯指標了」。' },
    ],

    questions: [
      { t: 448, en: 'What is his kitchen image for AI and for people?',
        zh: '他用廚房來比喻 AI 和人，是怎麼比的？',
        answerEn: 'AI is excellent at delivering ingredients; humans are better at '
          + 'serving meals. The machine supplies the parts, a person makes the '
          + 'thing.',
        answerZh: 'AI 很擅長把食材端出來，人類比較擅長把它變成一頓飯端上桌。機器提供材料，人把它做成一件作品。' },
      { t: 488, en: 'He says non-artists compose too. What three everyday examples does he give?',
        zh: '他說不是搞藝術的人也一樣在做編排。他舉了哪三個日常例子？',
        answerEn: 'Making a presentation, assembling a team, and putting on an event — '
          + 'or even just throwing a party.',
        answerZh: '做簡報、組團隊，還有辦活動——甚至只是辦一場派對。' },
      { t: 530, en: 'What does he tell you to switch on in your phone, and what is it for?',
        zh: '他叫你打開手機裡的什麼？那是要用來做什麼的？',
        answerEn: 'The camera grid, usually a 3x3 layout. It teaches the rule of thirds '
          + '— put the subject on an intersecting line instead of in the center.',
        answerZh: '相機的格線，通常是九宮格。用來學「三分法」——把主角放在格線的交叉點上，而不是放正中間。' },
      { t: 571, en: 'What does he say you do NOT win with?',
        zh: '他說你贏的「不是」靠什麼？',
        answerEn: 'More pieces. AI can make lots and lots of parts, but the win comes '
          + 'from better arrangement.',
        answerZh: '不是靠零件比較多。AI 可以做出一大堆零件，但真正決勝的是編排得比較好。' },
    ],

    tasks: [
      { en: 'Take something you have to explain at work this week and cut it into '
        + 'three beats. Say all three out loud.',
        zh: '拿一件你這週在公司必須解釋的事，切成三段。三段都要出聲講出來。' },
      { en: 'Describe your last presentation: which pieces could a machine have '
        + 'made, and what did the arranging?',
        zh: '講講你上一份簡報：哪些零件其實機器就做得出來？真正在做「編排」的又是什麼？' },
      { en: 'Think of a team you put together. What made the whole larger than '
        + 'the sum of the parts?',
        zh: '想一個你組過的團隊。是什麼讓整體大於各部分的總和？' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'allocation',
    videoId: '1LMcGRfYBro',
    start: 578,
    end: 721,

    titleEn: 'Skill five — allocation',
    titleZh: '第五項能力——資源配置',
    levelEn: 'Adult · B2–C1',
    levelZh: '成人',
    sourceEn: 'Daniel Pink — “The 6 Skills AI Will Never Replace”',

    aboutEn: 'Two and a half minutes on the skill nobody puts on a CV: deciding '
      + 'who, or what, does each piece of work, and when. It turns on one '
      + 'line from a CEO about what you are actually paid for, and ends in '
      + 'three techniques you can run on your own calendar this week.',
    aboutZh: ' '
      + '兩分半，講一項沒人會寫在履歷上的能力：決定每一件事該由誰、由什麼工具、在什麼時候做。整段的關鍵是一位執行長的一句話——你真正被付錢的到底是什麼——最後給你三個這禮拜就能用在自己行事曆上的方法。',

    watchForEn: 'Two piles, and only one of them is yours. Listen for what he puts in '
      + 'each.',
    watchForZh: '兩堆任務，只有一堆是你的。聽他把什麼放進哪一堆。',

    lines: [
      { t: 578, en: 'Number five, allocation.',
                zh: '第五項，配置。' },
      { t: 579, en: 'Dan Shipper is the CEO of the media and software company Every,',
                zh: 'Dan Shipper 是媒體與軟體公司 Every 的執行長，' },
      { t: 582, en: 'and he recently said something really profound.',
                zh: '他最近說了一句非常深刻的話。' },
      { t: 585, en: 'He said, “In a knowledge economy,',
                zh: '他說：「在知識經濟裡，' },
      { t: 587, en: 'you’re compensated based on what you know.',
                zh: '你賺多少，取決於你知道什麼。' },
      { t: 590, en: 'In an allocation economy, you’re compensated',
                zh: '在配置經濟裡，你賺多少，取決於' },
      { t: 593, en: 'based on how well you allocate the resources of intelligence.”',
                zh: '你把「智慧」這種資源，配置得多好。」' },
      { t: 596, en: 'We used to idolize the individual hero,',
                zh: '我們以前崇拜的是個人英雄，' },
      { t: 598, en: 'the person who could do everything themselves.',
                zh: '那種什麼都自己一個人搞定的人。' },
      { t: 600, en: 'But the future belongs to people who can coordinate humans and machines.',
                zh: '但未來屬於那些能協調人和機器的人。' },
      { t: 605, en: 'The new superstars will be the people who can orchestrate and allocate',
                zh: '新一代的明星，會是那些懂得統籌和配置的人——' },
      { t: 609, en: 'tools, teams, AI systems, timelines, constraints,',
                zh: '工具、團隊、AI 系統、時程、各種限制，' },
      { t: 613, en: 'and bring them together toward a clear outcome.',
                zh: '再把這些整合起來，導向一個明確的結果。' },
      { t: 615, en: 'Now, this isn’t entirely new.',
                zh: '其實這也不算全新的東西。' },
      { t: 618, en: 'Of course, a great director doesn’t operate the camera.',
                zh: '當然，厲害的導演不會自己去操作攝影機。' },
      { t: 621, en: 'A great coach doesn’t play the game.',
                zh: '厲害的教練也不會自己下場打球。' },
      { t: 623, en: 'But as AI moves from novelty to collaborator,',
                zh: '但當 AI 從新鮮玩意變成合作夥伴，' },
      { t: 627, en: 'allocation becomes a core skill for all of us.',
                zh: '配置就變成我們每個人的核心能力。' },
      { t: 630, en: 'Allocation is knowing which tools to use,',
                zh: '配置，就是知道該用哪些工具、' },
      { t: 632, en: 'which people to involve, which systems to engage, and at what moment.',
                zh: '該找哪些人、該啟動哪些系統，以及在什麼時間點。' },
      { t: 637, en: 'But it’s also deeply human.',
                zh: '但這件事同時非常「人」。' },
      { t: 639, en: 'It requires empathy, emotional intelligence,',
                zh: '它需要同理心、情緒智商，' },
      { t: 641, en: 'and an honest understanding of what people are actually good at.',
                zh: '還要誠實面對每個人到底擅長什麼。' },
      { t: 645, en: 'This is what Wharton professor Ethan Mollick calls centaur thinking,',
                zh: '這就是華頓商學院教授 Ethan Mollick 說的「半人馬思維」，' },
      { t: 649, en: 'combining human and machine intelligence',
                zh: '把人的智慧和機器的智慧結合起來，' },
      { t: 651, en: 'to get results that neither can achieve alone.',
                zh: '做出雙方各自都做不到的成果。' },
      { t: 653, en: 'Want to become a better allocator?',
                zh: '想成為更會配置資源的人嗎？' },
      { t: 655, en: 'Here are some simple ways to begin.',
                zh: '這裡有幾個很簡單的起步方法。' },
      { t: 657, en: 'Do a team inventory, even if it’s just you and AI.',
                zh: '幫團隊做一次盤點，就算團隊只有你和 AI。' },
      { t: 659, en: 'List who or what does things best, then delegate accordingly.',
                zh: '列出誰、或哪個工具做哪件事最強，然後照這個結果分派。' },
      { t: 663, en: 'Stop treating every task like it’s yours.',
                zh: '別再把每一件事都當成自己的事。' },
      { t: 665, en: 'A related idea, the two pile technique.',
                zh: '還有一個相關的做法：兩堆分類法。' },
      { t: 668, en: 'Every project is really just a collection of tasks to be done.',
                zh: '每個專案說穿了，就是一堆待辦的任務。' },
      { t: 673, en: 'Organize them into two piles.',
                zh: '把它們分成兩堆。' },
      { t: 674, en: 'One for AI, things that involve speed, quantity, and generation,',
                zh: '一堆給 AI：講速度、講數量、講產出的那些，' },
      { t: 679, en: 'and one for you, things that involve real thinking, creativity, and taste.',
                zh: '另一堆留給你自己：需要真正思考、創意和品味的那些。' },
      { t: 683, en: 'Your job isn’t to hand everything to AI.',
                zh: '你的工作不是把所有事都丟給 AI。' },
      { t: 685, en: 'That’s a huge mistake.',
                zh: '那是個天大的錯誤。' },
      { t: 687, en: 'Your job is to give AI that first pile,',
                zh: '你的工作是把第一堆交給 AI，' },
      { t: 690, en: 'so you can excel at the second.',
                zh: '好讓你在第二堆上發揮到最好。' },
      { t: 692, en: 'Or try the time as talent audit.',
                zh: '或者試試「時間就是才能」的盤點。' },
      { t: 694, en: 'Look at your calendar for the past two weeks.',
                zh: '打開你過去兩週的行事曆。' },
      { t: 696, en: 'Circle every task that didn’t require your taste or creative skills.',
                zh: '把那些不需要用到你的品味或創造力的任務，全部圈起來。' },
      { t: 700, en: 'Ask yourself, could AI do this?',
                zh: '問問自己：這件事 AI 能做嗎？' },
      { t: 702, en: 'Could a tool do this?',
                zh: '有工具能做嗎？' },
      { t: 704, en: 'Could someone else do this?',
                zh: '有別人能做嗎？' },
      { t: 705, en: 'Then reallocate those tasks going forward.',
                zh: '然後從現在開始，把這些任務重新分配出去。' },
      { t: 707, en: 'We all need to stop managing time and start reallocating talent,',
                zh: '我們都該停止「管理時間」，開始「重新配置才能」，' },
      { t: 712, en: 'including your own.',
                zh: '包括你自己的才能。' },
      { t: 713, en: 'Now, if AI multiplies intelligence,',
                zh: '如果說 AI 把智慧放大了好幾倍，' },
      { t: 715, en: 'allocation decides where to aim it.',
                zh: '配置決定的就是：要把它對準哪裡。' },
      { t: 717, en: 'But that aim must be true.',
                zh: '但瞄準的方向必須是對的。' },
      { t: 719, en: 'And that’s where the final human advantage comes in.',
                zh: '而這時候，最後一項人類優勢就登場了。' },
    ],

    words: [
      { t: 590, en: 'you’re compensated based on…', zh: '你的報酬取決於……',
        noteEn: 'Compensation is the business word for pay — salary, bonus, equity, '
          + 'all of it. “Compensated based on results” is standard language in a '
          + 'review conversation.',
        noteZh: '在商業英文裡，compensation 是「薪酬」的正式說法，底薪、獎金、股票都算。考績面談上說 compensated based '
          + 'on results 很標準。' },
      { t: 605, en: 'orchestrate', zh: '統籌、調度',
        noteEn: 'From conducting an orchestra: you play none of the instruments, you '
          + 'make all the parts arrive together. “Who’s orchestrating the '
          + 'launch?”',
        noteZh: '來自指揮樂團：你一種樂器都不彈，但讓所有聲部同時到位。可以說「Who’s orchestrating the '
          + 'launch?」（這次上線誰統籌？）' },
      { t: 615, en: 'this isn’t entirely new', zh: '這其實也不算全新的東西',
        noteEn: 'A concession you make before your own argument. Give the other side '
          + 'a point first, and what you say next lands harder.',
        noteZh: '在講自己的論點之前先讓一步。先承認對方有道理，接下來那句話才有力道。' },
      { t: 623, en: 'from novelty to collaborator', zh: '從新鮮玩意變成合作夥伴',
        noteEn: 'A novelty is something new and fun that nobody depends on yet. The '
          + 'shape works for any tool: “It’s gone from a novelty to part of the '
          + 'workflow.”',
        noteZh: 'novelty 指還沒有人真的依賴、只是新鮮好玩的東西。這個句型講任何工具都好用：「It’s gone from a novelty '
          + 'to part of the workflow.」' },
      { t: 645, en: 'centaur thinking', zh: '半人馬思維',
        noteEn: 'Ethan Mollick’s term: half human, half machine, working as one. Say '
          + 'it in a meeting about AI and people know exactly what you mean.',
        noteZh: 'Ethan Mollick 提出的說法：一半人、一半機器，合成同一個工作者。在談 AI 的會議上講出來，大家馬上懂你的意思。' },
      { t: 657, en: 'do a team inventory', zh: '幫團隊做一次盤點',
        noteEn: 'Inventory is stock-taking. Used of people it means listing who is '
          + 'genuinely good at what — before you hand anything out.',
        noteZh: 'inventory 原本是清點庫存。用在人身上，就是在分派工作之前，先列出誰真正擅長什麼。' },
      { t: 659, en: 'delegate accordingly', zh: '照這個結果去分派工作',
        noteEn: 'Delegate = give a task away and let the other person own it. '
          + '“Accordingly” means in line with what you just decided; it saves you '
          + 'a whole clause.',
        noteZh: 'delegate 是把任務交出去，而且讓對方真的負責。accordingly 就是「照剛才的結論」，一個字省掉一整個子句。' },
      { t: 705, en: 'reallocate', zh: '重新分配',
        noteEn: 'Re- + allocate: move budget, headcount or time from one place to '
          + 'another. Common in planning: “We reallocated two engineers to '
          + 'support.”',
        noteZh: 're- ＋ allocate：把預算、人力或時間從一邊移到另一邊。做規劃時很常用：「We reallocated two '
          + 'engineers to support.」' },
    ],

    questions: [
      { t: 587, en: 'What is the difference between a knowledge economy and an allocation economy?',
        zh: '知識經濟和配置經濟差在哪裡？',
        answerEn: 'In a knowledge economy you’re compensated based on what you know. In '
          + 'an allocation economy you’re compensated based on how well you '
          + 'allocate the resources of intelligence.',
        answerZh: '在知識經濟裡，你的報酬取決於你知道什麼；在配置經濟裡，取決於你把「智慧」這種資源配置得多好。' },
      { t: 618, en: 'What two examples does he use to show that allocation is not a new idea?',
        zh: '他用哪兩個例子說明「配置」不是新概念？',
        answerEn: 'A great director doesn’t operate the camera, and a great coach '
          + 'doesn’t play the game.',
        answerZh: '厲害的導演不會自己去操作攝影機，厲害的教練也不會自己下場打球。' },
      { t: 674, en: 'In the two pile technique, what goes to AI and what stays with you?',
        zh: '在「兩堆分類法」裡，哪些給 AI、哪些留給自己？',
        answerEn: 'AI gets the things that involve speed, quantity and generation. You '
          + 'keep the things that involve real thinking, creativity and taste.',
        answerZh: '講速度、講數量、講產出的那些給 AI；需要真正思考、創意和品味的那些留給自己。' },
      { t: 683, en: 'What does he call a huge mistake?',
        zh: '他說什麼是天大的錯誤？',
        answerEn: 'Handing everything to AI. Your job is to give AI the first pile so '
          + 'that you can excel at the second.',
        answerZh: '把所有事都丟給 AI。你的工作是把第一堆交給 AI，好讓自己在第二堆上發揮到最好。' },
    ],

    tasks: [
      { en: 'Take a project you are running right now and split it into the two '
        + 'piles out loud. Name every task, and say which pile it goes in.',
        zh: '拿一個你手上正在跑的專案，出聲把它分成兩堆。每一項任務都念出來，並說出它該進哪一堆。' },
      { en: 'Run the time as talent audit: find three tasks from the last two '
        + 'weeks that didn’t need your taste, and say who or what should have '
        + 'done them.',
        zh: '做一次「時間就是才能」的盤點：找出過去兩週裡三件不需要用到你品味的任務，說說看那些事應該由誰、或由什麼工具來做。' },
      { en: 'Answer Dan Shipper’s question about yourself: in your job today, are '
        + 'you paid for what you know or for what you allocate?',
        zh: '用 Dan Shipper 那句話問自己：你現在的工作，領的錢是因為你知道什麼，還是因為你會配置什麼？' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'integrity',
    videoId: '1LMcGRfYBro',
    start: 721,
    end: 845,

    titleEn: 'Skill six — integrity',
    titleZh: '第六項能力——正直',
    levelEn: 'Adult · B2–C1',
    levelZh: '成人',
    sourceEn: 'Daniel Pink — “The 6 Skills AI Will Never Replace”',

    aboutEn: 'Two minutes on the skill he calls the most important of the six: not '
      + 'what AI can do, but what you are willing to do with it. It ends with '
      + 'two tests you can run on a decision in about ten seconds each.',
    aboutZh: '兩分鐘，講他認為六項裡最重要的一項：重點不是 AI 能做什麼，而是你願意拿它來做什麼。最後給了兩個十秒內就能跑完的決策自我檢查。',

    watchForEn: 'He never asks whether AI can be trusted. He asks whether you can be '
      + '— with that much power in your hands.',
    watchForZh: '他從頭到尾沒問「AI 值不值得信任」，他問的是：手上握著這麼大的力量，你值不值得信任。',

    lines: [
      { t: 721, en: 'Number six: integrity.',
                zh: '第六項：正直。' },
      { t: 722, en: 'Technology amplifies your power.',
                zh: '科技會放大你的力量。' },
      { t: 724, en: 'Ethics determines how you use it.',
                zh: '倫理則決定你怎麼用這股力量。' },
      { t: 726, en: 'And in an age of AI,',
                zh: '而在 AI 的時代裡，' },
      { t: 728, en: 'power is scaling faster than character.',
                zh: '力量成長的速度，比品格快太多。' },
      { t: 730, en: 'Every technological revolution forces a moral reckoning.',
                zh: '每一次科技革命，都會逼出一場道德上的總清算。' },
      { t: 733, en: 'We are in one now.',
                zh: '我們現在就身在其中。' },
      { t: 735, en: 'And that makes integrity the most important skill of all.',
                zh: '所以在這六項裡，正直才是最重要的一項。' },
      { t: 738, en: 'You’ve seen the news.',
                zh: '那些新聞你都看過了。' },
      { t: 739, en: 'You’ve seen the social media posts.',
                zh: '社群上那些貼文你也看過了。' },
      { t: 741, en: 'AI can hallucinate, fabricate, and confidently spin out of control.',
                zh: 'AI 會產生幻覺、會捏造，還會很有自信地整個失控。' },
      { t: 746, en: 'It has no conscience, no responsibility, no moral compass.',
                zh: '它沒有良知、沒有責任感，也沒有一套判斷是非的準則。' },
      { t: 751, en: 'That’s where you come in.',
                zh: '這就是你上場的地方。' },
      { t: 752, en: 'When intelligence becomes abundant, wisdom becomes even more valuable.',
                zh: '當智力變得到處都是，智慧就更值錢了。' },
      { t: 756, en: 'And wisdom is rooted in integrity,',
                zh: '而智慧的根，就是正直，' },
      { t: 758, en: 'in making choices based on honesty, fairness, responsibility, and accountability.',
                zh: '也就是用誠實、公平、責任感和當責去做選擇。' },
      { t: 764, en: 'Integrity isn’t abstract. It’s practical.',
                zh: '正直不是抽象的概念，它非常實際。' },
      { t: 767, en: 'It shows up in moments like telling the truth when lying is easier,',
                zh: '它出現在這種時刻：說謊比較輕鬆，你還是說了實話，' },
      { t: 771, en: 'pushing back when a large language model says something that compromises your values,',
                zh: '大型語言模型講出違背你價值觀的話時，你選擇頂回去，' },
      { t: 775, en: 'protecting privacy when invading it is more profitable,',
                zh: '侵犯隱私比較有賺頭時，你還是把隱私守住，' },
      { t: 778, en: 'and asking, who does this decision affect?',
                zh: '還有問自己：這個決定會影響到誰？' },
      { t: 781, en: 'Would I make it if I were them?',
                zh: '如果我是他們，我還會做這個決定嗎？' },
      { t: 783, en: 'When you have more power, more speed, and more leverage,',
                zh: '當你握有更多權力、更快的速度、更大的槓桿，' },
      { t: 787, en: 'your character becomes your fate.',
                zh: '你的品格就會變成你的命運。' },
      { t: 789, en: 'And when AI can scale your impact instantly,',
                zh: '而當 AI 可以瞬間把你的影響力放大，' },
      { t: 793, en: 'integrity isn’t just a virtue.',
                zh: '正直就不只是一種美德了。' },
      { t: 795, en: 'It’s a leadership skill.',
                zh: '它是一項領導能力。' },
      { t: 797, en: 'Now, practicing integrity is the work of a lifetime, not a single video.',
                zh: '當然，正直是一輩子的功課，不是一支影片能練成的。' },
      { t: 801, en: 'We’ve got teachers, parents, and clergy to help us with that.',
                zh: '這件事有老師、父母和神職人員可以幫我們。' },
      { t: 804, en: 'But here are two tips that might help deepen this quality in yourself and others.',
                zh: '不過這裡有兩個方法，也許能讓你和身邊的人在這方面更扎實一點。' },
      { t: 806, en: 'First, run the Washington Post test.',
                zh: '第一，做一次「華盛頓郵報測試」。' },
      { t: 809, en: 'When I worked in politics, including my years as a White House speech writer,',
                zh: '我以前在政界工作的時候，包括在白宮當講稿撰稿人的那幾年，' },
      { t: 812, en: 'we used something that we called the Washington Post test.',
                zh: '我們會用一個我們自己叫做「華盛頓郵報測試」的方法。' },
      { t: 815, en: 'Before you took an action or wrote an email, you’d ask yourself:',
                zh: '在你採取行動、或寄出一封 email 之前，先問自己：' },
      { t: 818, en: 'Would I be okay if this showed up on the front page of a major newspaper?',
                zh: '如果這件事登上大報頭版，我能接受嗎？' },
      { t: 821, en: 'If not, hit the brakes.',
                zh: '如果不能，就踩煞車。' },
      { t: 823, en: 'Second, run an integrity inversion.',
                zh: '第二，做一次「正直反轉」。' },
      { t: 826, en: 'Take any questionable decision and flip it.',
                zh: '拿任何一個你覺得有疑慮的決定，把它整個反過來想。' },
      { t: 828, en: 'If someone did this to me, or to someone I love,',
                zh: '如果有人這樣對我，或這樣對我愛的人，' },
      { t: 831, en: 'would I think it was fair?',
                zh: '我會覺得這樣公平嗎？' },
      { t: 833, en: 'If the answer is no, don’t do it.',
                zh: '如果答案是不會，那就別做。' },
      { t: 835, en: 'This simple inversion cuts through rationalization and brings morality to the surface.',
                zh: '這個簡單的反轉，能戳破你替自己找的藉口，把道德問題直接攤到檯面上。' },
      { t: 839, en: 'AI may reshape everything we do,',
                zh: 'AI 也許會重塑我們做的每一件事，' },
      { t: 841, en: 'but only integrity and wisdom determine who we become.',
                zh: '但只有正直和智慧，決定我們會成為什麼樣的人。' },
    ],

    words: [
      { t: 728, en: 'to scale', zh: '規模快速放大',
        noteEn: 'A verb here, not a noun: to grow fast without the cost growing with '
          + 'it. “Can this scale?” is a standard question in any planning '
          + 'meeting.',
        noteZh: '這裡是動詞，不是名詞：指「快速變大，但成本不會跟著等比變大」。開規劃會議時 “Can this scale?” 是很常見的問法。' },
      { t: 741, en: 'spin out of control', zh: '整個失控',
        noteEn: 'Used of a meeting, a thread, a budget, a project. Note what he puts '
          + 'in front of it: confidently. That pairing is the whole warning.',
        noteZh: '可以用在會議、討論串、預算、專案上。注意他前面加的字：confidently（很有自信地）。這個搭配就是他整段的警告。' },
      { t: 751, en: 'that’s where you come in', zh: '這就是你上場的地方',
        noteEn: 'Hands the job to the person you are talking to. Describe the gap '
          + 'first, then say it — one of the cleanest ways to delegate.',
        noteZh: '把任務交到對方手上的說法。先講出缺口，再說這句——是很俐落的一種交辦方式。' },
      { t: 758, en: 'responsibility and accountability', zh: '責任與當責',
        noteEn: 'Not the same word twice. Responsibility is the duty to do the thing; '
          + 'accountability is having to answer for it afterwards. Auditors and '
          + 'boards care about the second.',
        noteZh: '不是同一件事講兩次。responsibility 是「該做這件事」的義務；accountability '
          + '是事後「要出來扛、要交代」。稽核和董事會在意的是後者。' },
      { t: 771, en: 'push back', zh: '頂回去、表達反對',
        noteEn: 'To disagree and say so, firmly but professionally: “I pushed back on '
          + 'the deadline.” The noun is pushback: “We got some pushback from '
          + 'Legal.”',
        noteZh: '不同意就講出來，態度堅定但不失專業：“I pushed back on the deadline.” 名詞是 pushback：“We '
          + 'got some pushback from Legal.”（法務那邊有些反對意見。）' },
      { t: 806, en: 'run the Washington Post test', zh: '做一次「華盛頓郵報測試」',
        noteEn: 'Run + a check is very common: run the numbers, run it past Legal, '
          + 'run a quick test. Here it names a rule of thumb, not a real test.',
        noteZh: 'run ＋ 某種檢查是很常見的用法：run the numbers（算一下數字）、run it past '
          + 'Legal（給法務過目）、run a quick test。這裡指的是一個判斷原則，不是真的測驗。' },
      { t: 821, en: 'hit the brakes', zh: '踩煞車、先停下來',
        noteEn: 'Stop, or at least stop for now. Softer than “cancel it”: “Let’s hit '
          + 'the brakes on this until Q3.”',
        noteZh: '停下來，至少先停一下。語氣比 “cancel it” 軟：“Let’s hit the brakes on this until '
          + 'Q3.”（這件事先踩煞車，等第三季再說。）' },
      { t: 835, en: 'cut through rationalization', zh: '戳破自己找的藉口',
        noteEn: 'Cut through X = get straight past it to what matters: cut through '
          + 'the noise, cut through the jargon. Rationalization is the excuse you '
          + 'make to yourself.',
        noteZh: 'cut through X ＝ 直接穿過那些東西，切到真正重要的地方：cut through the noise、cut through '
          + 'the jargon。rationalization 是「自己說服自己」的那套藉口。' },
    ],

    questions: [
      { t: 728, en: 'What does he say is scaling faster than what?',
        zh: '他說什麼的成長速度比什麼快？',
        answerEn: 'Power is scaling faster than character. Technology keeps handing us '
          + 'more power, and our ethics have not grown at the same speed.',
        answerZh: '力量的成長比品格快。科技不斷給我們更多力量，但我們的倫理沒有跟上同樣的速度。' },
      { t: 752, en: 'When intelligence becomes abundant, what does he say becomes more valuable — and what is it rooted in?',
        zh: '他說當智力變得充足時，什麼會變得更有價值？而它的根是什麼？',
        answerEn: 'Wisdom. And wisdom is rooted in integrity — making choices based on '
          + 'honesty, fairness, responsibility and accountability.',
        answerZh: '智慧。而智慧的根就是正直——用誠實、公平、責任感和當責去做選擇。' },
      { t: 809, en: 'What exactly is the Washington Post test, and where did he learn it?',
        zh: '「華盛頓郵報測試」到底是什麼？他是在哪裡學到的？',
        answerEn: 'Before you act or send an email, ask whether you would be okay '
          + 'seeing it on the front page of a major newspaper. If not, hit the '
          + 'brakes. He learned it working in politics, including his years as a '
          + 'White House speech writer.',
        answerZh: '在行動或寄信之前，先問自己：如果這件事登上大報頭版，我能接受嗎？不能就踩煞車。他是在政界工作時學到的，包括在白宮當講稿撰稿人的那幾年。' },
      { t: 826, en: 'How does the integrity inversion work?',
        zh: '「正直反轉」要怎麼做？',
        answerEn: 'You flip the decision around: if someone did this to me, or to '
          + 'someone I love, would I think it was fair? If the answer is no, '
          + 'don’t do it.',
        answerZh: '把這個決定反過來：如果有人這樣對我、或這樣對我愛的人，我會覺得公平嗎？如果答案是不會，那就別做。' },
    ],

    tasks: [
      { en: 'Run the Washington Post test out loud on one email you actually sent '
        + 'this week. Front page — okay or not? Say why.',
        zh: '拿你這禮拜真的寄出去的一封 email，出聲跑一次「華盛頓郵報測試」。登上頭版，你能不能接受？說出理由。' },
      { en: 'Name one thing at work you would never let AI decide without you, '
        + 'say why, and end with: “That’s where I come in.”',
        zh: '說出工作上有哪一件事，你絕對不會讓 AI 自己決定，說明理由，最後用這句話收尾：「That’s where I come in.」' },
      { en: 'Describe a moment when telling the truth was harder than staying '
        + 'quiet. What did you do, and what would you do now?',
        zh: '描述一個「說實話比閉嘴還難」的時刻。你當時怎麼做？現在的你又會怎麼做？' },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'recap',
    videoId: '1LMcGRfYBro',
    start: 845,
    end: 895,

    titleEn: 'Six skills, one line each',
    titleZh: '六項能力，一句一項',
    levelEn: 'Adult · B2',
    levelZh: '成人',
    sourceEn: 'Daniel Pink — “The 6 Skills AI Will Never Replace”',

    aboutEn: 'Fifty seconds of closing, and the best summary of the whole talk '
      + 'there is: each of the six skills gets exactly one line, no filler. '
      + 'Then he does what every good ending does — he hands the question '
      + 'back to the audience.',
    aboutZh: '五十秒的收尾，也是整場演講最好的一份摘要：六項能力，一項一句話，沒有半句廢話。最後他做了每個好結尾都會做的事——把問題丟回給聽眾。',

    watchForEn: 'Six definitions land in about twenty seconds, and none is repeated. '
      + 'See how many you catch on a single play.',
    watchForZh: '六個定義大約在二十秒內講完，每一項只講一次。第一次播放時，看看你能聽出幾項。',

    lines: [
      { t: 845, en: 'So, those are the six human abilities that could matter most in the age of AI.',
                zh: '以上就是這六項人類能力，在 AI 時代裡可能最關鍵的六項。' },
      { t: 848, en: 'Questioning — asking the sharp, original questions that machines can’t.',
                zh: '提問——問出機器問不出來的、犀利又原創的問題。' },
      { t: 852, en: 'Taste — knowing what’s good when everything is possible.',
                zh: '品味——在什麼都做得出來的時代，還知道什麼是好的。' },
      { t: 856, en: 'Iteration — improving your work version after version.',
                zh: '迭代——一個版本一個版本，把作品越改越好。' },
      { t: 859, en: 'Composition — assembling pieces into something meaningful.',
                zh: '編排——把一塊一塊的素材，組成有意義的整體。' },
      { t: 863, en: 'Allocation — orchestrating humans and machines toward a clear goal.',
                zh: '調度——指揮人和機器，一起朝一個清楚的目標前進。' },
      { t: 867, en: 'Integrity — choosing what’s right when everything around you is moving fast.',
                zh: '正直——當周遭一切都跑得飛快，還選擇做對的事。' },
      { t: 871, en: 'These aren’t luxuries.',
                zh: '這些不是奢侈品。' },
      { t: 872, en: 'They’re success skills, maybe survival skills for the next decade.',
                zh: '它們是成功技能，在接下來十年，甚至可能是生存技能。' },
      { t: 875, en: 'If there’s one thing I know after studying human behavior for twenty-five years, it’s this.',
                zh: '如果說研究人類行為二十五年，讓我確定了一件事，那就是這一句。' },
      { t: 880, en: 'When the world gets more artificial, we need to get more human.',
                zh: '當世界變得越來越人工，我們就要變得越來越像人。' },
      { t: 884, en: 'Hey, what human skill do you think belongs on this list that I didn’t include?',
                zh: '欸，你覺得有哪一項人類能力該列進這張清單，是我漏掉的？' },
      { t: 888, en: 'Add it to the comments.',
                zh: '留言告訴我。' },
      { t: 890, en: 'I’m always curious to hear what you see that I miss.',
                zh: '我一直很想知道，你看見了哪些我沒看見的東西。' },
    ],

    words: [
      { t: 856, en: 'version after version', zh: '一個版本接一個版本',
        noteEn: 'Noun + after + the same noun means it keeps repeating: draft after '
          + 'draft, meeting after meeting, year after year.',
        noteZh: '「名詞 + after + 同一個名詞」表示一次又一次：draft after draft、meeting after '
          + 'meeting、year after year。' },
      { t: 863, en: 'orchestrate', zh: '統籌、調度',
        noteEn: 'From conducting an orchestra. At work it means making separate '
          + 'people, tools and deadlines move as one piece.',
        noteZh: '原意是指揮樂團。用在工作上，就是把不同的人、工具和時程統籌成一件事。' },
      { t: 871, en: 'these aren’t luxuries', zh: '這些不是奢侈品（不是「有也不錯」的東西）',
        noteEn: 'A luxury is a nice-to-have. “This isn’t a luxury” is how you argue '
          + 'for budget or time for something everyone treats as optional.',
        noteZh: 'luxury 指「有也不錯、沒有也還好」的東西。要替一件大家覺得可有可無的事爭取預算或時間時，就用這句。' },
      { t: 872, en: 'success skills, maybe survival skills', zh: '是成功技能，甚至可能是生存技能',
        noteEn: 'He upgrades his own noun mid-sentence. “X, maybe Y” raises the '
          + 'stakes while still sounding careful rather than dramatic.',
        noteZh: '他在同一句話裡把說法往上加一級。「X，甚至可能是 Y」可以把嚴重性拉高，又不會顯得誇張。' },
      { t: 875, en: 'If there’s one thing I know, it’s this.', zh: '如果說有一件事我很確定，那就是這件',
        noteEn: 'A presentation move. It tells the room the next sentence is the one '
          + 'to remember — so say it, then pause.',
        noteZh: '簡報時的招式：等於告訴大家「下一句才是重點」。講完這句要停一下。' },
      { t: 884, en: 'belong on this list', zh: '該不該被列進這張清單',
        noteEn: 'Belong ON a list, an agenda or a slide; belong IN a team or a room. '
          + 'Useful for challenging scope: “Does this belong on the agenda?”',
        noteZh: 'belong on 用在清單、議程、投影片；belong in 用在團隊、場合。要質疑範圍時很好用：「Does this belong '
          + 'on the agenda?」（這該放進議程嗎？）' },
      { t: 890, en: 'what you see that I miss', zh: '你看見、而我沒看見的東西',
        noteEn: 'The confident way to ask for criticism. In a meeting, “What am I '
          + 'missing?” does the same job in four words.',
        noteZh: '很有自信的一種「請你來挑我毛病」。開會時說「What am I missing?」（我漏了什麼？）就是同樣的效果。' },
    ],

    questions: [
      { t: 848, en: 'He gives each of the six skills a one-line definition. What are the six, in order?',
        zh: '他給六項能力各下了一句話的定義。依序是哪六項？',
        answerEn: 'Questioning, taste, iteration, composition, allocation, integrity.',
        answerZh: '提問、品味、迭代、編排、調度、正直。' },
      { t: 856, en: 'How does he define iteration, in his own words?',
        zh: '他自己是怎麼定義「迭代」的？',
        answerEn: 'Improving your work version after version. That is the whole '
          + 'definition — one line, nothing else.',
        answerZh: '一個版本一個版本，把作品越改越好。整個定義就這一句，沒有別的。' },
      { t: 871, en: 'Does he treat these six as nice-to-haves?',
        zh: '他把這六項當成「有也不錯」的東西嗎？',
        answerEn: 'The opposite. He says they aren’t luxuries — they’re success skills, '
          + 'and maybe survival skills, for the next decade.',
        answerZh: '剛好相反。他說這些不是奢侈品——它們是成功技能，在接下來十年甚至可能是生存技能。' },
      { t: 880, en: 'What does he say twenty-five years of studying human behavior comes down to?',
        zh: '他說研究人類行為二十五年，最後歸結成什麼？',
        answerEn: 'One sentence: when the world gets more artificial, we need to get '
          + 'more human.',
        answerZh: '一句話：當世界變得越來越人工，我們就要變得越來越像人。' },
    ],

    tasks: [
      { en: 'Say the six back in order without looking. Then rank them for your '
        + 'own job: which two do you actually need this year?',
        zh: '不要看，把六項依序講一遍。然後就你自己的工作排個順序：今年你真正需要的是哪兩項？' },
      { en: 'Answer his last question yourself. What human skill would you add to '
        + 'the list, and why does it belong there?',
        zh: '自己回答他最後那個問題：你會在這張清單上加哪一項人類能力？為什麼它該被列進去？' },
      { en: 'Finish his closing sentence for your own industry: “When ___ gets '
        + 'more ___, we need to get more ___.” Say it out loud, then defend it.',
        zh: '用你自己的產業把他的結尾句填完：「當 ___ 變得越來越 ___，我們就要變得越來越 ___。」出聲講一次，然後說明理由。' },
    ],
  },
];
