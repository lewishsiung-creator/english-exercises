/* Happy Sexy Millionaire — lesson content.

   Built for adult business-English learners from the story behind Steven
   Bartlett's book. The book itself is not reproduced here: the reading passage
   is written for this lesson, and the language work — the collocations, the
   money vocabulary and the "I was wrong about X" pattern — is what the page is
   actually for.

   Every visible string is an `en` / `zh` pair. English is shown; the
   Traditional Chinese stays hidden until it is asked for, either line by line
   or with the 中文 switch in the top bar.

   Two conventions worth knowing before editing:

     {{double braces}} inside a passage paragraph mark a target word. The word
     between the braces must match a `term` in that block's `glossary`
     exactly, or it renders as ordinary text. That is the whole notation.

     text  → textZh   a gap-fill sentence. The Chinese keeps the ＿＿ blank and
                      deliberately does NOT paraphrase the missing phrase — the
                      learner still has to choose the English. Translating them
                      in full would hand over the answer.

   Block types:
     lead      a framing sentence in italics, opening a step
     link      a pointer to another page in this site
     passage   the reading text; target words open a gloss where they stand
     quiz      a comprehension question with one right answer and a reason
     quote     a short attributed quote
     summary   a teaching paragraph, spoken aloud on request
     note      a boxed aside explaining one point of usage in more depth
     phrases   collocation cards — English face up, Chinese and an example
               sentence behind a tap
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three phrases to choose from
     poll      opinion statements — agree / not sure / disagree, no answer
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking task with a tick-list of target phrases
*/

const LESSON = {
  title: 'Happy Sexy Millionaire',
  titleZh: '快樂、性感、百萬富翁',
  kicker: '商業英語精讀',

  source: {
    en: 'Written for class around the story behind Steven Bartlett’s book Happy Sexy Millionaire (2021). The passage below is a summary written for this lesson, not an extract from the book.',
    zh: '課堂教材，取材自 Steven Bartlett 的著作《Happy Sexy Millionaire》（2021）背後的故事。下方短文為本課自行撰寫的摘要，並非書中原文。',
  },

  intro: {
    en: 'A man writes down the life he wants at eighteen, gets all of it by twenty-seven, and then writes a book to say he had asked for the wrong things. That gap — between what we chase and what actually works — is where the language in this lesson lives.',
    zh: '一個人在十八歲寫下他想要的人生，二十七歲全部得到，然後寫了一本書說：他當初要錯了東西。我們追求的，與真正有用的，兩者之間的落差——這堂課的語言，就活在這道落差裡。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'talk about how a company is founded, funded and valued', zh: '談論一家公司如何創立、募資與估值' },
      { en: 'use the money vocabulary that appears in business news every week', zh: '運用每週商業新聞中都會出現的金錢詞彙' },
      { en: 'describe someone’s background without sounding blunt', zh: '描述一個人的出身背景，而不顯得唐突' },
      { en: 'admit that you were wrong about something, in professional English', zh: '用專業的英文承認自己在某件事上想錯了' },
      { en: 'speak for two minutes about what you measure success by', zh: '針對「你用什麼衡量成功」進行兩分鐘口說' },
    ],
  },

  steps: [
    // ================================================================ 1
    {
      id: 'story',
      n: 1,
      en: 'The Story',
      zh: '這個故事',
      blocks: [
        {
          t: 'lead',
          en: 'Read it once for the shape of the story. Read it again for the words in blue.',
          zh: '第一次讀，抓故事的輪廓；第二次讀，看藍色標記的字。',
        },
        {
          t: 'passage',
          en: 'Nine years, two directions',
          zh: '九年，兩個方向',
          hintEn: 'Tap any blue word to see what it means, then tap it again to close it.',
          hintZh: '點藍色的字看意思，再點一次收起來。每一段旁邊的 中 可以看整段中文。',
          paras: [
            {
              en: 'Steven Bartlett is the {{founder}} of Social Chain, a social media company he started in his bedroom in Manchester. He built it at twenty-one and {{took it public}} at twenty-seven, at a {{market valuation}} of nearly £200 million.',
              zh: 'Steven Bartlett 是 Social Chain 的創辦人，那是一家他在曼徹斯特自己房間裡創立的社群媒體公司。他二十一歲把公司做起來，二十七歲讓它上市，市值接近兩億英鎊。',
            },
            {
              en: 'Nine years earlier, none of that looked likely. At eighteen he was {{broke}}, a {{university dropout}} from a {{bankrupt}} family. In his diary he wrote down the life he wanted instead: to be a happy, sexy millionaire by twenty-five.',
              zh: '九年前，這一切看起來都不太可能。十八歲的他身無分文，是個從破產家庭出來的大學輟學生。他在日記裡寫下了他想要的另一種人生：在二十五歲之前，成為一個快樂、性感的百萬富翁。',
            },
            {
              en: 'He got there. The business he built was later worth more than $300 million, and by his own measure he had {{hit the target}} early. Then came the part he had not planned for.',
              zh: '他做到了。他打造的事業後來價值超過三億美元；用他自己訂的標準來看，他還提早達標。接著，來了他沒有預先設想過的那一段。',
            },
            {
              en: 'The heart of his book is an {{admission}}: about happiness, love and success, he had been {{fundamentally wrong}}. The money arrived on schedule. The feeling he had been promised did not.',
              zh: '他這本書的核心是一段坦承：關於快樂、愛與成功，他從根本上就想錯了。錢照著時間表來了，那個他一直被許諾的感覺，卻沒有。',
            },
            {
              en: 'He wrote it for people {{stepping into adulthood}}, and for anyone who still believes that {{wealth}} is {{the only key to}} a good life.',
              zh: '他為那些剛踏入成年階段的人而寫，也為每一個仍然相信「財富是美好人生唯一關鍵」的人而寫。',
            },
          ],
          glossary: [
            {
              term: 'founder',
              zh: '創辦人',
              def: 'The person who starts a company. The verb is <em>found</em> — <em>he founded the company in 2014</em>.',
            },
            {
              term: 'took it public',
              zh: '讓公司上市',
              def: 'Sold shares in the company on a stock exchange for the first time. Also <em>go public</em>, or the noun <em>an IPO</em>.',
            },
            {
              term: 'market valuation',
              zh: '市值；市場估值',
              def: 'What the market judges a whole company to be worth, usually in one number.',
            },
            {
              term: 'broke',
              zh: '身無分文（口語）',
              def: 'Informal, and about a person, not a company: having no money right now. Not the same as <em>poor</em>, which is a long-term state.',
            },
            {
              term: 'university dropout',
              zh: '大學輟學生',
              def: 'Someone who left university before finishing the degree. The verb is <em>drop out of</em>.',
            },
            {
              term: 'bankrupt',
              zh: '破產的',
              def: 'Legally unable to pay what you owe. A company or a family <em>goes bankrupt</em>.',
            },
            {
              term: 'hit the target',
              zh: '達標；達成目標',
              def: 'Reached the number you were aiming at. The opposite is <em>miss the target</em>.',
            },
            {
              term: 'admission',
              zh: '坦承；承認',
              def: 'Saying openly that something difficult is true — often about yourself. The verb is <em>admit</em>.',
            },
            {
              term: 'fundamentally wrong',
              zh: '從根本上就錯了',
              def: 'Wrong at the base, not in the details. You cannot fix it by adjusting — you have to start again.',
            },
            {
              term: 'stepping into adulthood',
              zh: '剛踏入成年階段',
              def: 'Beginning adult life — first job, first rent, first decisions nobody else signs off.',
            },
            {
              term: 'wealth',
              zh: '財富',
              def: 'Everything of value that a person owns, taken together. Uncountable: <em>wealth</em>, never <em>a wealth</em>.',
            },
            {
              term: 'the only key to',
              zh: '……的唯一關鍵',
              def: 'The single thing that unlocks something. In argument it is usually a claim worth doubting.',
            },
          ],
        },
        {
          t: 'quiz',
          en: 'Check your understanding',
          zh: '確認你的理解',
          hintEn: 'One answer each. A wrong choice stays on screen — say why it is tempting.',
          hintZh: '每題一個答案。選錯不會消失，請說說看它為什麼吸引人。',
          items: [
            {
              en: 'How old was Bartlett when the company was listed on the stock market?',
              zh: '公司在股市掛牌時，Bartlett 幾歲？',
              options: ['Eighteen', 'Twenty-one', 'Twenty-five', 'Twenty-seven'],
              answer: 3,
              why: {
                en: 'He built the company at twenty-one and took it public at twenty-seven. Twenty-one is when it started, not when it listed.',
                zh: '他二十一歲把公司做起來，二十七歲讓它上市。二十一歲是起點，不是掛牌的時間。',
              },
            },
            {
              en: 'At eighteen, his family was',
              zh: '十八歲時，他的家庭狀況是',
              options: ['wealthy but distant', 'bankrupt', 'running a social media company', 'living abroad'],
              answer: 1,
              why: {
                en: '“A university dropout from a bankrupt family.” Note that <em>he</em> was broke and the <em>family</em> was bankrupt — English keeps those two words apart.',
                zh: '「一個從破產家庭出來的大學輟學生。」注意：人用 broke，公司或家庭用 bankrupt，英文把這兩個字分得很清楚。',
              },
            },
            {
              en: 'What does the passage say is the heart of the book?',
              zh: '短文說這本書的核心是什麼？',
              options: [
                'A method for building a company from a bedroom',
                'His admission that he was wrong about happiness, love and success',
                'Advice on how to raise money from investors',
                'An argument that university degrees are unnecessary',
              ],
              answer: 1,
              why: {
                en: 'The company story is the setup; the admission is the point. That is why the passage says <em>the heart of his book</em> rather than <em>the story of his book</em>.',
                zh: '公司的故事只是鋪陳，那段坦承才是重點。所以短文用的是 the heart of his book（核心），而不是 the story。',
              },
            },
            {
              en: '“The money arrived on schedule. The feeling he had been promised did not.” This means that',
              zh: '「錢照著時間表來了。那個他被許諾的感覺沒有。」這句話的意思是',
              options: [
                'he was paid late',
                'he got the money he planned for, but not the happiness he expected',
                'he lost the money he had earned',
                'he stopped believing in money',
              ],
              answer: 1,
              why: {
                en: '<em>Did not</em> stands in for <em>did not arrive</em>. English drops the repeated verb and keeps the auxiliary — a very common move in writing.',
                zh: 'did not 是 did not arrive 的省略。英文會省略重複的動詞、只留助動詞，這在寫作裡非常常見。',
              },
            },
            {
              en: 'Who is the book written for?',
              zh: '這本書是寫給誰的？',
              options: [
                'Investors looking for the next Social Chain',
                'People starting adult life, and anyone who thinks wealth is the only key to a good life',
                'Students studying for a business degree',
                'Founders who have already sold a company',
              ],
              answer: 1,
              why: {
                en: 'The last paragraph names both audiences. The second one is the wider claim — and the one worth arguing with.',
                zh: '最後一段點出兩種讀者。第二種是範圍更廣的說法，也是最值得拿來討論、甚至反駁的一個。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 2
    {
      id: 'money',
      n: 2,
      en: 'Companies and Money',
      zh: '公司與金錢',
      blocks: [
        {
          t: 'lead',
          en: 'Every phrase in this step turns up in business news most weeks. Learn them as whole phrases, not as single words.',
          zh: '這一段的每個片語，幾乎每週都會出現在商業新聞裡。請把它們當成完整片語記，而不是單字。',
        },
        {
          t: 'phrases',
          en: 'Starting, funding, valuing',
          zh: '創立、募資、估值',
          items: [
            {
              en: 'found a company',
              zh: '創辦一家公司',
              eg: 'She founded the company at twenty-three and still runs it.',
              egZh: '她二十三歲創辦這家公司，到現在還在經營。',
            },
            {
              en: 'start something from scratch',
              zh: '從零開始做起',
              eg: 'They started from scratch — one laptop and no customers.',
              egZh: '他們從零開始——一台筆電，零客戶。',
            },
            {
              en: 'take a company public',
              zh: '讓公司上市',
              eg: 'The board decided to take the company public in the spring.',
              egZh: '董事會決定在春天讓公司上市。',
            },
            {
              en: 'a market valuation of',
              zh: '市值為……',
              eg: 'It listed at a market valuation of nearly £200 million.',
              egZh: '它以接近兩億英鎊的市值掛牌。',
            },
            {
              en: 'be worth (over)',
              zh: '價值（超過）',
              eg: 'The business was later worth more than $300 million.',
              egZh: '這個事業後來價值超過三億美元。',
            },
            {
              en: 'raise capital',
              zh: '募集資金',
              eg: 'We raised enough capital to hire six people.',
              egZh: '我們募到足夠的資金，可以聘六個人。',
            },
            {
              en: 'go bankrupt',
              zh: '破產',
              eg: 'The family business went bankrupt during the second year.',
              egZh: '這個家族事業在第二年破產了。',
            },
            {
              en: 'be broke',
              zh: '身無分文',
              eg: 'I was completely broke for most of that year.',
              egZh: '那一年大部分的時間我都身無分文。',
            },
            {
              en: 'drop out of university',
              zh: '從大學輟學',
              eg: 'He dropped out of university halfway through the second year.',
              egZh: '他在大二讀到一半時從大學輟學。',
            },
            {
              en: 'hit a target',
              zh: '達成目標',
              eg: 'We hit the revenue target a quarter early.',
              egZh: '我們提早一季達成營收目標。',
            },
          ],
        },
        {
          t: 'note',
          en: 'worth, valuation, revenue — three different numbers',
          zh: 'worth、valuation、revenue：三個不同的數字',
          bodyEn: 'A company is worth what someone would pay for the whole of it. Its market valuation is that number as the stock market currently judges it. Its revenue is the money that came in this year, before any costs. A firm with $10 million in revenue can easily be worth $300 million — and swapping the words in a meeting is the fastest way to sound like you have not read the numbers.',
          bodyZh: '一家公司的 worth，是有人願意為「整家公司」付出的價格；market valuation 是股市當下對這個數字的判斷；revenue 則是今年進來的錢，還沒扣掉任何成本。一家營收一千萬美元的公司，市值三億美元是很常見的事——在會議上把這三個字混用，是最快讓人覺得你沒看過財報的方式。',
        },
        {
          t: 'match',
          en: 'Match the phrase',
          zh: '配對片語',
          hintEn: 'Click the Chinese on the left, then its English partner on the right.',
          hintZh: '先點左邊的中文，再點右邊對應的英文。',
          pairs: [
            { a: '讓公司上市', b: 'take a company public' },
            { a: '市值', b: 'market valuation' },
            { a: '破產', b: 'go bankrupt' },
            { a: '大學輟學生', b: 'a university dropout' },
            { a: '從零開始', b: 'start from scratch' },
            { a: '募集資金', b: 'raise capital' },
            { a: '身無分文', b: 'be broke' },
            { a: '達成目標', b: 'hit a target' },
          ],
        },
        {
          t: 'gap',
          en: 'Finish the sentence',
          zh: '完成句子',
          items: [
            {
              text: 'After two years of preparation, the founders finally ___ on the New York exchange.',
              textZh: '經過兩年的準備，創辦人終於在紐約證交所＿＿。',
              options: ['went bankrupt', 'took the company public', 'dropped out'],
              answer: 1,
              why: {
                en: 'A stock exchange is where a company lists, so only <em>took the company public</em> fits. Note the object sits inside the phrase: take <strong>it</strong> public.',
                zh: '證交所是公司掛牌的地方，只有 took the company public 說得通。注意受詞放在片語中間：take <strong>it</strong> public。',
              },
            },
            {
              text: 'Analysts put the company’s ___ at nearly £200 million on the first day of trading.',
              textZh: '在交易首日，分析師估計這家公司的＿＿接近兩億英鎊。',
              options: ['market valuation', 'revenue target', 'funding gap'],
              answer: 0,
              why: {
                en: 'A single number for the whole company on a trading day is its valuation. Revenue would be money earned over a period, not a value on one day.',
                zh: '在交易日用一個數字代表整家公司，指的是估值。revenue 是一段期間賺進來的錢，不會是某一天的價值。',
              },
            },
            {
              text: 'Before any of this worked, he was ___ and borrowing money for the train fare.',
              textZh: '在這一切成功之前，他＿＿，連車錢都要跟人借。',
              options: ['bankrupt', 'broke', 'valued'],
              answer: 1,
              why: {
                en: 'People are <em>broke</em>; companies and estates are <em>bankrupt</em>. Using <em>bankrupt</em> about a person suggests a court has been involved.',
                zh: '人用 broke，公司或財產才用 bankrupt。對一個人說 bankrupt，會讓人以為已經走到法院程序。',
              },
            },
            {
              text: 'She ___ university in her second year and started the business the same month.',
              textZh: '她在大二時＿＿，同一個月就開始創業。',
              options: ['dropped out of', 'fell out of', 'stepped out of'],
              answer: 0,
              why: {
                en: '<em>Drop out of</em> is the fixed phrase for leaving a course early. The other two exist in English but mean something else entirely.',
                zh: 'drop out of 是「中途離開學業」的固定用法。另外兩個英文裡確實有，但意思完全不同。',
              },
            },
            {
              text: 'They ___ enough capital in the first round to keep going for eighteen months.',
              textZh: '他們在第一輪＿＿足夠的資金，可以再撐十八個月。',
              options: ['rose', 'raised', 'arose'],
              answer: 1,
              why: {
                en: '<em>Raise</em> takes an object — you raise something. <em>Rise</em> never does: prices rise, but you raise money.',
                zh: 'raise 後面要接受詞（raise something）；rise 不接受詞。價格 rise，錢是被 raise 的。',
              },
            },
            {
              text: 'The team ___ a quarter early, which nobody had expected.',
              textZh: '團隊提早一季＿＿，這是沒有人預料到的。',
              options: ['hit the target', 'beat the valuation', 'raised the scratch'],
              answer: 0,
              why: {
                en: '<em>Hit a target</em> is the collocation. The other two are built from real words but are not phrases anyone says.',
                zh: 'hit a target 才是道地的搭配。另外兩個雖然每個字都存在，但沒有人這樣說。',
              },
            },
            {
              text: 'Many people still assume that ___ is the only key to a happy life.',
              textZh: '很多人仍然假定＿＿是幸福人生的唯一關鍵。',
              options: ['a wealth', 'wealth', 'wealths'],
              answer: 1,
              why: {
                en: '<em>Wealth</em> is uncountable — no <em>a</em>, no plural. Compare <em>a fortune</em>, which is countable.',
                zh: 'wealth 是不可數名詞，不加 a、也沒有複數。可以對照 a fortune，那個是可數的。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 3
    {
      id: 'wrong',
      n: 3,
      en: 'Being Wrong About It',
      zh: '承認自己想錯了',
      blocks: [
        {
          t: 'lead',
          en: 'The company story is the easy half. This is the half people actually remember.',
          zh: '公司的故事是簡單的那一半。真正被記住的，是這一半。',
        },
        {
          t: 'summary',
          en: 'The book is not an argument against money. It is an argument against one particular sentence: when I have it, I will feel different. Bartlett got the number he wrote down, at the age he wrote it down, and found the sentence was false. That is why the interesting word in the whole story is admission — not failure, and not regret.',
          zh: '這本書不是在反對金錢，而是在反對一句話：等我有了，我的感覺就會不一樣。Bartlett 拿到了他當初寫下的數字，也在他寫下的年紀拿到，然後發現那句話是假的。所以整個故事裡最值得注意的字是 admission（坦承）——不是 failure，也不是 regret。',
        },
        {
          t: 'quote',
          en: 'I got everything I asked for, and then I had to admit I had asked for the wrong things.',
          zh: '我要到了我開口要的一切，然後我必須承認：我當初要錯了東西。',
          by: 'the idea of the book, in one line',
        },
        {
          t: 'phrases',
          en: 'Saying you were wrong, professionally',
          zh: '在職場上說「我錯了」',
          items: [
            {
              en: 'make an admission',
              zh: '坦承；承認一件事',
              eg: 'The CEO made a rare admission that the launch date had never been realistic.',
              egZh: '執行長少見地坦承，那個上市日期從來就不切實際。',
            },
            {
              en: 'be fundamentally wrong about',
              zh: '在……上從根本就想錯了',
              eg: 'We were fundamentally wrong about who the customer was.',
              egZh: '我們對「客戶是誰」這件事，從根本上就想錯了。',
            },
            {
              en: 'in hindsight',
              zh: '現在回頭看',
              eg: 'In hindsight, we should have asked before we built it.',
              egZh: '現在回頭看，我們應該先問清楚再動手做。',
            },
            {
              en: 'measure success by',
              zh: '用……衡量成功',
              eg: 'For years I measured success by the size of the team.',
              egZh: '有好幾年，我都用團隊人數來衡量成功。',
            },
            {
              en: 'chase something',
              zh: '追逐某個目標',
              eg: 'We spent two years chasing a number nobody could explain.',
              egZh: '我們花了兩年追逐一個沒有人說得清楚的數字。',
            },
            {
              en: 'live up to (an expectation)',
              zh: '達到（某種期待）',
              eg: 'The job never lived up to what I had imagined.',
              egZh: '這份工作從來沒有達到我想像中的樣子。',
            },
            {
              en: 'settle for',
              zh: '將就；退而求其次',
              eg: 'I would rather wait than settle for the first offer.',
              egZh: '我寧願等，也不想將就第一個提出的條件。',
            },
            {
              en: 'step into adulthood',
              zh: '踏入成年階段',
              eg: 'Everything gets more expensive the moment you step into adulthood.',
              egZh: '一踏入成年階段，所有東西都變貴了。',
            },
          ],
        },
        {
          t: 'note',
          en: 'admit, admission — and the preposition that follows',
          zh: 'admit、admission，以及後面的介系詞',
          bodyEn: 'You admit <strong>that</strong> something is true, or you admit <strong>to</strong> doing something. The noun takes <em>of</em>: an admission <strong>of</strong> failure. Keep it away from <em>confess</em>, which in English carries either a church or a police station with it — too heavy for a meeting.',
          bodyZh: '句型是 admit <strong>that</strong> 子句，或 admit <strong>to</strong> + 動名詞；名詞則接 of：an admission <strong>of</strong> failure。請避開 confess，那個字在英文裡不是教堂就是警局的味道，用在會議上太重了。',
        },
        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的立場是什麼？',
          hintEn: 'There is no right answer — take a side and say why.',
          hintZh: '沒有標準答案：選一邊，並說明理由。',
          items: [
            { en: 'Writing down what you want makes it more likely to happen.', zh: '把想要的東西寫下來，會讓它更可能發生。' },
            { en: 'Below a certain income, money really does buy happiness.', zh: '在某個收入水準以下，金錢確實買得到快樂。' },
            { en: 'Admitting you were wrong costs you authority at work.', zh: '在職場上承認自己錯了，會讓你失去權威。' },
            { en: 'Anyone who says money does not matter has enough of it.', zh: '任何說「錢不重要」的人，都是錢已經夠了的人。' },
          ],
        },
        {
          t: 'discuss',
          en: 'Talk it through',
          zh: '一起討論',
          items: [
            {
              en: 'What did you want at eighteen? How much of it would you still ask for today?',
              zh: '你十八歲時想要什麼？其中有多少，你今天還會想要？',
              starters: [
                { en: 'At eighteen I was chasing…', zh: '十八歲時我在追求……' },
                { en: 'I would still ask for…, but not…', zh: '我還是會要……，但不會要……' },
                { en: 'In hindsight, that was really about…', zh: '現在回頭看，那其實是為了……' },
              ],
            },
            {
              en: 'What do you measure success by now — and who chose that measure?',
              zh: '你現在用什麼衡量成功？這個標準是誰訂的？',
              starters: [
                { en: 'I used to measure success by…, and now I…', zh: '我以前用……衡量成功，現在我……' },
                { en: 'To be honest, that measure came from…', zh: '老實說，那個標準來自……' },
                { en: 'It is not a number, it is more…', zh: '它不是一個數字，比較像是……' },
              ],
            },
            {
              en: 'Think of something at work you were fundamentally wrong about. What did it cost to find out?',
              zh: '想一件你在工作上從根本就想錯的事。發現這件事的代價是什麼？',
              starters: [
                { en: 'We were fundamentally wrong about…', zh: '我們在……上從根本就想錯了。' },
                { en: 'It cost us about… before anyone said so.', zh: '在有人說出口之前，它大概花了我們……' },
                { en: 'What we should have done first was…', zh: '我們本來應該先做的是……' },
              ],
            },
            {
              en: 'Bartlett wrote his book for people stepping into adulthood. What would you tell someone starting their first job this year?',
              zh: 'Bartlett 這本書是寫給剛踏入成年階段的人。對今年開始第一份工作的人，你會說什麼？',
              starters: [
                { en: 'The one thing I would tell them is…', zh: '我唯一會告訴他們的是……' },
                { en: 'Do not settle for… just because…', zh: '不要只因為……就將就……' },
                { en: 'Nobody told me that…', zh: '沒有人告訴過我……' },
              ],
            },
          ],
        },
      ],
    },

    // ================================================================ 4
    {
      id: 'say',
      n: 4,
      en: 'Say It Yourself',
      zh: '換你來說',
      blocks: [
        {
          t: 'lead',
          en: 'Two minutes, no notes. The tick-list is there so you can see which phrases you actually reached for.',
          zh: '兩分鐘，不看稿。下面的勾選清單，是為了讓你看見自己實際用出了哪些片語。',
        },
        {
          t: 'task',
          en: 'Two minutes: what I measure success by',
          zh: '兩分鐘口說：我用什麼衡量成功',
          instructionEn: 'Choose one prompt. Take thirty seconds to think, then speak for two minutes without stopping. Tick a phrase each time you use it — after you have said it, not before.',
          instructionZh: '選一個題目，先想三十秒，然後不中斷地說兩分鐘。每用出一個片語就勾一個——說出口之後再勾，不要先勾。',
          prompts: [
            { en: 'The number I was chasing at twenty-five, and whether I would chase it again.', zh: '我二十五歲時在追的那個數字，以及我還會不會再追一次。' },
            { en: 'A time my company, or my team, was fundamentally wrong about a customer.', zh: '我的公司或團隊曾經對某個客戶從根本上想錯的一次經驗。' },
            { en: 'What I would take out of my definition of success if I could.', zh: '如果可以，我會從我的成功定義裡拿掉什麼。' },
            { en: 'Whether I would take my own company public, and what would have to be true first.', zh: '我會不會讓自己的公司上市，以及要先滿足什麼條件。' },
          ],
          checklist: [
            { en: 'start from scratch', zh: '從零開始' },
            { en: 'take a company public', zh: '讓公司上市' },
            { en: 'a market valuation of', zh: '市值為……' },
            { en: 'be worth (over)', zh: '價值（超過）' },
            { en: 'raise capital', zh: '募集資金' },
            { en: 'hit a target', zh: '達成目標' },
            { en: 'measure success by', zh: '用……衡量成功' },
            { en: 'be fundamentally wrong about', zh: '從根本上想錯了' },
            { en: 'in hindsight', zh: '現在回頭看' },
            { en: 'live up to', zh: '達到（期待）' },
            { en: 'settle for', zh: '將就' },
            { en: 'the only key to', zh: '……的唯一關鍵' },
          ],
          frames: [
            { en: 'For a long time I measured success by ___, mostly because ___.', zh: '有很長一段時間，我用＿＿衡量成功，主要是因為＿＿。' },
            { en: 'In hindsight, I was fundamentally wrong about ___.', zh: '現在回頭看，我在＿＿上從根本就想錯了。' },
            { en: 'I hit the target, and it did not live up to ___.', zh: '我達標了，而它並沒有達到＿＿。' },
            { en: 'I would rather ___ than settle for ___.', zh: '我寧願＿＿，也不願將就＿＿。' },
            { en: 'I no longer think ___ is the only key to ___.', zh: '我不再認為＿＿是＿＿的唯一關鍵。' },
          ],
        },
        {
          t: 'link',
          href: '../book-club/',
          en: 'Take it further: the book discussion guide',
          zh: '再往下談：雙語讀書討論手冊',
          noteEn: 'This book is one of four. The guide has three discussion questions and the concept vocabulary for each — including the social-media and self-worth questions this lesson does not reach.',
          noteZh: '這本書是四本之一。手冊為每本書準備了三道討論題與概念詞彙——包含本課沒有觸及的社群媒體與自我價值題。',
        },
      ],
    },
  ],
};
