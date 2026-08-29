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

   THE TWO REGISTERS
   -----------------
   `level` sets who a lesson is written for and nothing else — it does not
   change the page. Adult clients get the register of /nikky/, /anny/ and
   /anita/: work, career, meetings, the news. Teenagers and young adults get the
   register of /anna/, /ken/ and /eason/: study, campus, first jobs, what they
   already watch. Never write one clip for both. Pick the audience, then pick
   the video.

   A LESSON
   --------
     id        unique, URL-safe; becomes the anchor
     videoId   the eleven characters after v= or youtu.be/ — the ID, not the URL
     start     seconds; where the lesson begins. Omit for 0
     end       seconds; where it stops. Omit to run to the end of the video
     titleEn / titleZh
     levelEn / levelZh    e.g. "Adult · B1–B2" / "成人 · B1–B2"
     sourceEn             who is speaking and where it comes from
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
