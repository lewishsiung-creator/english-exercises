/* Grammar Notes 文法筆記 — the content.

   One page, one grammar point at a time, written for a 國中生 reading alone
   and for a teacher working through it with one in front of them. The shape
   is /body-words/'s: 自學 shows the Chinese, 教學 keeps it behind the 中 chips
   and records nothing.

   STRUCTURE
     GN.points[]        one grammar point
       .parts[]         the stages of that point, which are what the 目錄 lists
         .blocks[]      lead · rule · pairs · verbs · twoway · note · judge · mcq

   Adding a point is appending an object to `points`. Nothing else moves: the
   contents list, the numbering, the accent colours and the anchors all read
   this file. See the README.

   WHAT IS HIDDEN AND WHAT IS NOT
   The rule /body-words/ set holds here too, and matters more on a grammar
   page than on a vocabulary one: **Chinese that is explanation is never
   hidden by either mode.** The rules and the notes are the teacher's own
   voice and nothing a student is meant to produce, so they are on screen in
   both modes. What 教學 hides is what a student should be able to work out —
   a verb's meaning and a sentence's 中譯.

   WHERE THE EXAMPLES COME FROM
   The point and its order follow the syllabus of Azar & Hagen; the chart
   itself is not reproduced. Every example sentence, every note and all of
   the practice here is written for this page, which is also why the sentences
   are about scooters, bubble tea and the MRT rather than about the book's own
   cast. The same rule as /grammar/.
*/

const GN = {
  title: 'Grammar Notes',
  titleZh: '文法筆記',
  kicker: '國中英語 · 一次一個文法重點',

  intro: {
    en: 'One grammar point at a time, explained the way it actually gets asked about in class. English shows the pattern, Chinese explains it, and every point ends with something to get wrong.',
    zh: '一次講清楚一個文法重點，用課堂上真正會被問到的方式解釋。英文呈現句型，中文說明道理，每個重點最後都有可以練錯的題目。',
  },

  sourceNote: {
    en: 'The points follow the order of Azar & Hagen’s syllabus. The explanations, examples and practice are written for this page.',
    zh: '文法重點的編排順序參考 Azar & Hagen 的教材；本頁的說明、例句與練習皆為本站自行撰寫。',
  },

  points: [
    {
      id: 'stative',
      zh: '狀態動詞',
      en: 'Verbs that don’t take -ing',
      sub: '不使用「進行式」的動詞',
      icon: '⏸',

      lead: {
        en: 'English has a set of verbs that refuse the -ing form. They are not irregular and there is nothing to memorise about their spelling — they refuse it because of what they mean.',
        zh: '英文裡有一群動詞不接 -ing。它們不是不規則變化，拼法也沒有什麼要背的——它們不接，是因為「意思」的關係。',
      },

      parts: [
        {
          id: 'state-or-action',
          zh: '狀態，還是動作？',
          en: 'A state or an action',
          blocks: [
            {
              t: 'lead',
              en: 'A progressive tense says that something is in the middle of happening — it started, it has not finished, and you could watch it. Some verbs do not describe anything you could watch. They describe how things simply are.',
              zh: '進行式說的是「某件事正在進行中」——它開始了、還沒結束，而且你可以看著它發生。但有些動詞根本沒有什麼可以看——它們描述的是「事情就是這樣」。',
            },
            {
              t: 'rule',
              en: 'A verb that describes a state rather than an action does not take be + -ing.',
              zh: '描述「狀態」而不是「動作」的動詞，不用 be + V-ing。',
            },
            {
              t: 'pairs',
              en: 'Right and wrong',
              zh: '對與錯',
              items: [
                { ok: true,  text: 'I know your sister.', zh: '我認識你姊姊。' },
                { ok: false, text: 'I am knowing your sister.' },
                { ok: true,  text: 'This scooter belongs to my brother.', zh: '這台機車是我哥的。' },
                { ok: false, text: 'This scooter is belonging to my brother.' },
              ],
            },
            {
              t: 'note',
              en: 'The test that works',
              zh: '判斷小技巧',
              bodyEn: 'Ask yourself whether the thing could start and stop, or whether somebody is deliberately doing it. If it could, it is an action and the progressive is open to you. If it is just a state that sits there — knowing, liking, owning — use the simple present.',
              bodyZh: '問自己：這件事能不能「開始」和「停止」？是不是有人刻意在做它？可以的話，它就是動作，進行式可以用。如果它只是一個擺在那裡的狀態——知道、喜歡、擁有——就用簡單式。',
            },
            {
              t: 'note',
              en: 'Why this one is hard for us',
              zh: '為什麼中文使用者特別容易錯',
              bodyEn: 'Not because Chinese does it differently, but because of the order we learn things in. 現在進行式 is taught as “the tense for right now”, so “right now” starts to feel like a reason to use it. For a state verb it is not: the simple present already means now. *I know* is now. Adding be + -ing does not make it more now — it makes it wrong.',
              bodyZh: '不是因為中文的規則不同，而是因為學習的順序。現在進行式被教成「現在的時態」，於是「現在」本身就變成了用它的理由。但對狀態動詞來說不是這樣：簡單式本來就是現在。I know 講的就是現在。加上 be + V-ing 不會讓它「更現在」，只會讓它變錯。',
            },
          ],
        },

        {
          id: 'the-verbs',
          zh: '常見的狀態動詞',
          en: 'The verbs themselves',
          blocks: [
            {
              t: 'lead',
              en: 'There is no need to learn a list by heart — if you know what each verb means you already know which side it is on. It is worth reading through once, though, because a few of them carry a preposition that has to come with them.',
              zh: '這份清單不必背——只要知道每個字的意思，你其實就知道它屬於哪一邊。不過還是值得讀過一次，因為其中幾個字後面有固定要跟著的介系詞。',
            },
            {
              t: 'verbs',
              en: 'Common non-action verbs',
              zh: '常見的狀態動詞',
              groups: [
                {
                  zh: '想法、認知',
                  en: 'Thinking and knowing',
                  items: [
                    { w: 'know', zh: '知道、認識' },
                    { w: 'believe', zh: '相信' },
                    { w: 'understand', zh: '理解、懂' },
                    { w: 'remember', zh: '記得' },
                    { w: 'forget', zh: '忘記' },
                    { w: 'mean', zh: '意思是' },
                  ],
                },
                {
                  zh: '喜好、需求',
                  en: 'Liking and wanting',
                  items: [
                    { w: 'like', zh: '喜歡' },
                    { w: 'hate', zh: '討厭' },
                    { w: 'need', zh: '需要' },
                    { w: 'want', zh: '想要' },
                    { w: 'prefer', zh: '比較喜歡', pat: 'prefer A to B', patZh: '比起 B 更喜歡 A' },
                  ],
                },
                {
                  zh: '感官',
                  en: 'The senses',
                  items: [
                    { w: 'hear', zh: '聽到' },
                    { w: 'sound', zh: '聽起來', pat: 'sound + 形容詞', patZh: '形容詞直接接，不加 like' },
                    { w: 'seem', zh: '似乎、看來' },
                  ],
                },
                {
                  zh: '意見',
                  en: 'Agreeing',
                  items: [
                    { w: 'agree', zh: '同意', pat: 'agree with somebody', patZh: '同意某人' },
                    { w: 'disagree', zh: '不同意', pat: 'disagree with somebody', patZh: '不同意某人' },
                  ],
                },
                {
                  zh: '擁有、所屬',
                  en: 'Having and belonging',
                  items: [
                    { w: 'own', zh: '擁有' },
                    { w: 'belong', zh: '屬於', pat: 'belong to somebody', patZh: '是某人的' },
                    { w: 'cost', zh: '要價' },
                    { w: 'weigh', zh: '重達' },
                  ],
                },
              ],
            },
            {
              t: 'note',
              en: 'The prepositions are not optional',
              zh: '那些介系詞不是可有可無的',
              bodyEn: 'Three of these come with a word attached and are wrong without it. You *agree with* a person, something *belongs to* somebody, and you *prefer* one thing *to* another — not *than*, which is the comparison word and the mistake almost everyone makes here.',
              bodyZh: '其中三個字後面跟著固定的介系詞，少了就是錯的。agree **with** 某人、某物 belong **to** 某人、prefer A **to** B——不是 than。than 是比較級用的字，而這正是幾乎每個人都會犯的錯。',
              good: ['I agree with you.', 'That bike belongs to her.', 'I prefer tea to coffee.'],
              bad:  ['I agree you.', 'That bike belongs her.', 'I prefer tea than coffee.'],
            },
          ],
        },

        {
          id: 'both-ways',
          zh: '兩種用法都有的動詞',
          en: 'Verbs that go both ways',
          blocks: [
            {
              t: 'lead',
              en: 'This is the part worth your attention. A handful of very common verbs have two different meanings — one a state and one an action — and the -ing form is what tells them apart. Get this and you have the whole point.',
              zh: '這一段才是真正值得花時間的地方。有幾個非常常用的動詞有兩種意思——一個是狀態，一個是動作——而 -ing 正是用來分辨它們的。弄懂這裡，這個文法重點就通了。',
            },
            {
              t: 'twoway',
              en: 'The same verb, two jobs',
              zh: '同一個動詞，兩種工作',
              items: [
                {
                  v: 'be',
                  state:  { means: '本來就是這樣的性格', eg: 'My grandmother is kind.', zh: '我奶奶很善良。' },
                  action: { means: '此刻的表現，暫時的', eg: 'My brother is being difficult today.', zh: '我弟今天在鬧脾氣。' },
                },
                {
                  v: 'have',
                  state:  { means: '擁有', eg: 'I have a scooter.', zh: '我有一台機車。' },
                  action: { means: '吃、經歷、度過', eg: 'We’re having lunch at the night market.', zh: '我們正在夜市吃午餐。' },
                },
                {
                  v: 'see',
                  state:  { means: '看見', eg: 'Do you see the fireworks?', zh: '你看到煙火了嗎？' },
                  action: { means: '跟某人見面', eg: 'I’m seeing my doctor on Friday.', zh: '我星期五要去看醫生。' },
                },
                {
                  v: 'look',
                  state:  { means: '看起來', eg: 'You look tired.', zh: '你看起來很累。' },
                  action: { means: '找東西', eg: 'He’s looking for his MRT card.', zh: '他正在找他的悠遊卡。' },
                },
                {
                  v: 'smell',
                  state:  { means: '聞起來', eg: 'The soup smells amazing.', zh: '這湯聞起來好香。' },
                  action: { means: '去聞', eg: 'The dog is smelling my shoes.', zh: '那隻狗正在聞我的鞋子。' },
                },
                {
                  v: 'taste',
                  state:  { means: '嚐起來', eg: 'This milk tastes strange.', zh: '這牛奶嚐起來怪怪的。' },
                  action: { means: '去嚐', eg: 'The chef is tasting the sauce.', zh: '主廚正在試味道。' },
                },
                {
                  v: 'think',
                  state:  { means: '認為', eg: 'I think grammar is easy.', zh: '我認為文法很簡單。' },
                  action: { means: '正在思考', eg: 'I’m thinking about changing schools.', zh: '我正在考慮轉學。' },
                },
                {
                  v: 'feel',
                  state:  { means: '認為', eg: 'I feel you’re right.', zh: '我覺得你是對的。' },
                  action: { means: '身體的感覺', eg: 'She’s feeling sick today.', zh: '她今天覺得不舒服。' },
                },
                {
                  v: 'love',
                  state:  { means: '愛', eg: 'She loves her husband.', zh: '她愛她的先生。' },
                  action: { means: '正在享受', eg: 'She’s loving retirement.', zh: '她很享受退休生活。' },
                },
              ],
            },
            {
              t: 'note',
              en: 'Three of them are the same trap',
              zh: '其中三個是同一個陷阱',
              bodyEn: 'Look, smell and taste all do the same thing. Without -ing they describe what something is like to the person noticing it; with -ing somebody is deliberately pointing their eyes or their nose or their tongue at it. Soup cannot be in the middle of smelling. A dog can.',
              bodyZh: 'look、smell、taste 三個字的道理完全一樣。不加 -ing 時，它們描述的是「在感覺到的人眼中／鼻中／口中，這東西是什麼樣子」；加了 -ing，就是有人刻意把眼睛、鼻子或舌頭對準它。湯沒辦法「正在聞」，但狗可以。',
            },
          ],
        },

        {
          id: 'spoken',
          zh: '口語裡的例外',
          en: 'What you will actually hear',
          blocks: [
            {
              t: 'lead',
              en: 'You are going to hear these rules broken, and it is better to know in advance than to think you misheard.',
              zh: '你一定會聽到有人把這些規則打破，與其到時候懷疑自己聽錯，不如先知道。',
            },
            {
              t: 'note',
              en: 'I’m lovin’ it',
              zh: '麥當勞那句廣告詞',
              bodyEn: 'In everyday speech and in advertising, want, like, need, hear and love do turn up in the progressive — *I’m wanting a bubble tea*, *we’re liking that idea*, *I’m lovin’ it*. It is real English and nobody will misunderstand you. It is also informal, and it is not what a Taiwanese exam or a piece of writing wants from you. The simple present is correct everywhere: *I want a bubble tea. We like that idea.*',
              bodyZh: '在日常口語和廣告裡，want、like、need、hear、love 確實會出現進行式——I’m wanting a bubble tea、we’re liking that idea、I’m lovin’ it。這是真的英文，也沒有人會聽不懂。但它偏口語，而且不是考試和寫作要的東西。簡單式在任何場合都正確：I want a bubble tea. We like that idea.',
            },
            {
              t: 'rule',
              en: 'When you are being marked, use the simple present. Always.',
              zh: '只要是會被打分數的場合，就用簡單式。沒有例外。',
            },
          ],
        },

        {
          id: 'practice',
          zh: '練習',
          en: 'Practice',
          blocks: [
            {
              t: 'judge',
              en: 'Correct or not?',
              zh: '這句話對嗎？',
              hintZh: '先判斷再看解說。有些句子是對的——不要因為看到 -ing 就說錯。',
              hintEn: 'Decide first, then read the explanation. Some of these are correct — do not call a sentence wrong just because it has -ing in it.',
              items: [
                {
                  text: 'I am knowing the answer.',
                  ok: false,
                  fix: 'I know the answer.',
                  why: { en: 'Knowing is a state, not something you can be in the middle of.', zh: '「知道」是狀態，不是正在進行的動作。' },
                },
                {
                  text: 'She’s having lunch with her boss right now.',
                  ok: true,
                  why: { en: 'Here have means eat, which is an action — so the progressive is right.', zh: '這裡的 have 是「吃」，是動作，所以用進行式是對的。' },
                },
                {
                  text: 'This umbrella is belonging to my mother.',
                  ok: false,
                  fix: 'This umbrella belongs to my mother.',
                  why: { en: 'Belong is a state. Note the to as well — it is not optional.', zh: 'belong 是狀態動詞。順便注意 to，它不能省略。' },
                },
                {
                  text: 'I’m thinking about changing my phone.',
                  ok: true,
                  why: { en: 'Think here means turning something over in your mind, which is an action.', zh: '這裡的 think 是「正在腦中考慮」，是動作。' },
                },
                {
                  text: 'The soup is smelling delicious.',
                  ok: false,
                  fix: 'The soup smells delicious.',
                  why: { en: 'The soup is not doing any smelling. It is describing what the soup is like.', zh: '湯並沒有在「聞」。這句是在描述湯是什麼樣子，所以用簡單式。' },
                },
                {
                  text: 'I’m seeing the dentist on Thursday.',
                  ok: true,
                  why: { en: 'See here means meet, which is an action — and an arrangement.', zh: '這裡的 see 是「去見」，是動作，而且是已安排好的事。' },
                },
                {
                  text: 'We are agreeing with your plan.',
                  ok: false,
                  fix: 'We agree with your plan.',
                  why: { en: 'Agreeing is an opinion you hold, not something in progress.', zh: '「同意」是你持有的意見，不是正在進行的事。' },
                },
                {
                  text: 'My cousin is being really annoying today.',
                  ok: true,
                  why: { en: 'Be with -ing says this is how he is behaving today, not what he is like.', zh: 'be 加 -ing 說的是「他今天的表現」，而不是「他這個人就是這樣」。' },
                },
                {
                  text: 'I am wanting a bubble tea.',
                  ok: false,
                  fix: 'I want a bubble tea.',
                  why: { en: 'You will hear this said. Write the simple present.', zh: '你會聽到有人這樣講，但寫的時候用簡單式。' },
                },
                {
                  text: 'He’s looking for his student ID.',
                  ok: true,
                  why: { en: 'Look for means search, which is an action he is in the middle of.', zh: 'look for 是「尋找」，是他正在進行的動作。' },
                },
              ],
            },
            {
              t: 'mcq',
              en: 'Choose the form',
              zh: '選出正確的形式',
              hintZh: '不是每一題的答案都是簡單式。',
              hintEn: 'The answer is not the simple present every time.',
              items: [
                {
                  text: 'I ___ exactly what you mean.',
                  options: ['know', 'am knowing'], answer: 0,
                  why: { en: 'A state.', zh: '狀態動詞，用簡單式。' },
                },
                {
                  text: 'Be quiet — the baby ___.',
                  options: ['sleeps', 'is sleeping'], answer: 1,
                  why: { en: 'Sleep is an action, and it is happening right now. The progressive is alive and well.', zh: 'sleep 是動作，而且正在發生。進行式在這裡完全正常。' },
                },
                {
                  text: 'That red bag ___ to my sister.',
                  options: ['belongs', 'is belonging'], answer: 0,
                  why: { en: 'A state, and it keeps its to.', zh: '狀態動詞，而且 to 要留著。' },
                },
                {
                  text: 'Sorry, I wasn’t listening — I ___ about something else.',
                  options: ['think', 'was thinking'], answer: 1,
                  why: { en: 'Thoughts going through your mind are an action.', zh: '腦中正在轉的念頭是動作。' },
                },
                {
                  text: 'Your new perfume ___ really nice.',
                  options: ['smells', 'is smelling'], answer: 0,
                  why: { en: 'Describing what it is like, not somebody sniffing it.', zh: '這是在描述它是什麼味道，不是有人在聞它。' },
                },
                {
                  text: 'We ___ a great time at the beach.',
                  options: ['have', 'are having'], answer: 1,
                  why: { en: 'Have a good time is an experience, so it behaves like an action.', zh: 'have a good time 是「正在經歷」，所以當動作用。' },
                },
                {
                  text: 'I ___ a new laptop, but I can’t afford one.',
                  options: ['need', 'am needing'], answer: 0,
                  why: { en: 'A state. You will hear am needing; do not write it.', zh: '狀態動詞。你可能聽過 am needing，但不要寫出來。' },
                },
                {
                  text: 'I ___ coffee to tea.',
                  options: ['prefer', 'am preferring'], answer: 0,
                  why: { en: 'A state — and the word after it is to, never than.', zh: '狀態動詞——而且後面接的是 to，絕對不是 than。' },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
