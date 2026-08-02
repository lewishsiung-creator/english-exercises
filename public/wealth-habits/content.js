/* Three Habits That Build Wealth — lesson content.

   Built from the HBR CC Book Digest of Scott Galloway’s three highest-return
   habits (23 July 2025). The article itself is not reproduced here: each step
   carries one short attributed quote, a summary written for the lesson, and
   then the language work — the collocations are the reason the text was
   chosen, so they carry the page.

   Every visible string is an `en` / `zh` pair. English is shown; the
   Traditional Chinese stays hidden until it is asked for, either line by line
   or with the 中文 switch in the top bar.

   Block types:
     lead      a framing sentence in italics, opening a step
     quote     a short quote from the article, with attribution
     summary   a teaching paragraph, spoken aloud on request
     note      a boxed aside explaining one idea in more depth
     phrases   collocation cards — English face up, Chinese and an example
               sentence behind a tap
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three phrases to choose from
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     have it / need it cards, for auditing something
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking or writing task with a tick-list of target phrases
*/

const LESSON = {
  title: 'Three Habits That Build Wealth',
  titleZh: '累積財富的三個習慣',
  kicker: '1-on-1 Business English · 一對一商業英文',

  source: {
    en: 'Adapted for class from “The Wealth-Building Secrets No One Talks About: Scott Galloway’s Three Highest-Return Habits”, HBR CC Book Digest, 23 July 2025.',
    zh: '課堂改編自《有錢人從不說的致富祕密？蓋洛威教授揭露 3 個投報率最高的習慣》，HBR 好讀，2025/07/23。',
  },

  intro: {
    en: 'Scott Galloway teaches at NYU Stern. He argues that lasting wealth comes from a small number of habits, and that two of the three have nothing to do with money at all.',
    zh: '史考特‧蓋洛威在紐約大學史登商學院任教。他認為，穩定累積的財富來自少數幾個習慣，而其中兩個根本與金錢無關。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'use over 50 collocations for habits, advice and money', zh: '運用超過 50 個關於習慣、建議與金錢的搭配詞' },
      { en: 'say what a piece of advice is worth, and why you have not acted on it', zh: '說明一項建議的價值，以及你為什麼還沒付諸行動' },
      { en: 'describe the people you go to before an important decision', zh: '描述你在重要決定前會請教的人' },
      { en: 'raise money as a topic at work without sounding rude', zh: '在職場上談論金錢，而不顯得失禮' },
      { en: 'speak for two minutes on one habit you will change', zh: '針對一個你打算改變的習慣，進行兩分鐘的口說' },
    ],
  },

  steps: [
    // ================================================================ 1
    {
      id: 'advice',
      n: 1,
      en: 'Advice Is Cheap',
      zh: '建議很便宜',
      blocks: [
        {
          t: 'lead',
          en: 'Nobody is short of financial advice. The interesting question is what happens to it afterwards.',
          zh: '沒有人缺乏理財建議。真正有趣的問題是：這些建議後來怎麼了。',
        },
        {
          t: 'quote',
          en: 'Advice has little value unless it is translated into action.',
          zh: '如果沒有轉化為實際行動，建議的價值就不大。',
          by: 'Scott Galloway',
        },
        {
          t: 'summary',
          en: 'Galloway’s starting point is a gap: the distance between what you say you want and what you actually do. He treats that gap as a forecast. It predicts your financial results more reliably than your income does, and it predicts how you will feel about them.',
          zh: '蓋洛威的起點是一道落差：你口中說想要的，與你實際去做的，兩者之間的距離。他把這道落差當成一種預測指標。它預測你的財務結果，比你的收入更可靠；也預測你對這些結果的感受。',
        },
        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的立場是什麼？',
          hintEn: 'There is no right answer — take a side and say why.',
          hintZh: '沒有標準答案：選一邊，並說明理由。',
          items: [
            { en: 'Building wealth mostly comes down to talent or luck.', zh: '累積財富主要靠天賦或運氣。' },
            { en: 'Discussing your salary with a friend is impolite.', zh: '和朋友討論你的薪水是不禮貌的。' },
            { en: 'The people around you change how you spend money.', zh: '你身邊的人會改變你花錢的方式。' },
            { en: 'Exercise is a financial decision.', zh: '運動是一種財務決定。' },
          ],
        },
        {
          t: 'phrases',
          en: 'Talking about advice',
          zh: '談論建議',
          items: [
            {
              en: 'there is no shortage of',
              zh: '不缺乏；多的是',
              eg: 'There is no shortage of advice about investing — the shortage is in following it.',
            },
            {
              en: 'translate advice into action',
              zh: '把建議轉化為行動',
              eg: 'She is good at translating advice into action within the same week.',
            },
            {
              en: 'the gap between A and B',
              zh: 'A 與 B 之間的落差',
              eg: 'The gap between our plan and our spending is about 15% a month.',
            },
            {
              en: 'a clear indicator of',
              zh: '……的明確指標',
              eg: 'How fast a team replies to bad news is a clear indicator of its culture.',
            },
            {
              en: 'have little value',
              zh: '價值不大',
              eg: 'A forecast has little value if nobody changes a decision because of it.',
            },
            {
              en: 'financial anxiety',
              zh: '財務焦慮',
              eg: 'Financial anxiety is worse for people who have never seen their own numbers.',
            },
            {
              en: 'personal finance',
              zh: '個人財務',
              eg: 'Personal finance was never taught at my school.',
            },
            {
              en: 'build wealth',
              zh: '累積財富',
              eg: 'You build wealth slowly, then all at once.',
            },
          ],
        },
        {
          t: 'gap',
          en: 'Choose the phrase that fits',
          zh: '選出適合的片語',
          items: [
            {
              text: 'We ___ opinions in that meeting. What we lacked was a decision.',
              options: ['had no shortage of', 'had little value in', 'translated into'],
              answer: 0,
              why: { en: '“no shortage of” + a noun = there was plenty of it.', zh: '「no shortage of」＋名詞＝某樣東西很多。' },
            },
            {
              text: 'His CV is impressive, but ___ what he claims and what he can show is wide.',
              options: ['a clear indicator of', 'the gap between', 'there is no shortage of'],
              answer: 1,
              why: { en: 'The frame is “the gap between A and B”.', zh: '句型是「the gap between A and B」。' },
            },
            {
              text: 'A report nobody reads ___, however carefully it was written.',
              options: ['builds wealth', 'has little value', 'translates advice'],
              answer: 1,
              why: { en: '“have little value” = it is not worth much.', zh: '「have little value」＝價值不大。' },
            },
            {
              text: 'Checking your account balance at midnight is ___ financial anxiety.',
              options: ['a clear indicator of', 'no shortage of', 'personal finance'],
              answer: 0,
              why: { en: '“a clear indicator of” + a noun = it is strong evidence of it.', zh: '「a clear indicator of」＋名詞＝某事的明確證據。' },
            },
          ],
        },
        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '討論',
          items: [
            {
              en: 'What is one piece of financial advice you have heard many times but never acted on?',
              zh: '有哪一項理財建議，你聽過很多次卻從未付諸行動？',
              starters: [
                'I’ve been told to ___ for years, but I’ve never actually done it.',
                'There’s a real gap between what I say about ___ and what I do.',
              ],
            },
            {
              en: 'Whose money advice do you trust, and what makes them worth listening to?',
              zh: '你信任誰的理財建議？他們值得聽的原因是什麼？',
              starters: [
                'I trust ___ because they talk about their losses as well as their wins.',
                'What makes their advice valuable is that they ___ .',
              ],
            },
          ],
        },
      ],
    },

    // ================================================================ 2
    {
      id: 'exercise',
      n: 2,
      en: 'Habit One: Exercise More',
      zh: '習慣一：多運動',
      blocks: [
        {
          t: 'lead',
          en: 'The first habit is the one nobody expects in a piece about money.',
          zh: '第一個習慣，是沒有人會期待出現在談錢文章裡的那一個。',
        },
        {
          t: 'quote',
          en: 'The most important financial advice I can give you has little to do with finance.',
          zh: '我能給你的最重要財務建議，其實和財務沒有太大關係。',
          by: 'Scott Galloway',
        },
        {
          t: 'summary',
          en: 'Galloway says the productive people he knows have almost nothing in common. Some are early risers and some are night owls; some keep an immaculate desk and some thrive amid disorder. One thing repeats: they take exercise seriously. His point is that exercise gives back the time you put into it, in energy, mood and attention — so it belongs in a conversation about returns.',
          zh: '蓋洛威說，他認識的高效率工作者幾乎沒有共同點。有些人早起，有些人是夜貓子；有些人桌面一塵不染，有些人在混亂中反而發揮得更好。只有一件事反覆出現：他們都認真看待運動。他的重點是，運動會把你投入的時間回饋給你——以精力、情緒與專注力的形式——所以它屬於一場關於「投資報酬」的對話。',
        },
        {
          t: 'summary',
          en: 'The bar is lower than people assume. A brisk walk that raises your heart rate is enough to produce meaningful benefits. The objective, he writes, is not athletic perfection but a clearer mind.',
          zh: '門檻比大家以為的低。快走到足以提高心率，就足以帶來實質好處。他寫道，目標不是達到運動員般的完美，而是更清晰的思緒。',
        },
        {
          t: 'phrases',
          en: 'Describing how people work',
          zh: '描述人的工作方式',
          items: [
            {
              en: 'have little to do with',
              zh: '與……關係不大',
              eg: 'Our best quarter had little to do with the new logo.',
            },
            {
              en: 'highly productive people',
              zh: '工作效率很高的人',
              eg: 'Highly productive people protect two or three hours, not the whole day.',
            },
            {
              en: 'an early riser',
              zh: '早起的人',
              eg: 'I’m an early riser, so I schedule hard thinking before nine.',
            },
            {
              en: 'a night owl',
              zh: '夜貓子',
              eg: 'She’s a night owl and does her best editing after ten.',
            },
            {
              en: 'thrive amid disorder',
              zh: '在混亂中仍能發揮所長',
              eg: 'Some founders thrive amid disorder; most managers do not.',
            },
            {
              en: 'take something seriously',
              zh: '認真看待某件事',
              eg: 'Everyone says sleep matters; very few take it seriously.',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'What the habit pays back',
          zh: '這個習慣帶來的回報',
          items: [
            {
              en: 'pay dividends',
              zh: '帶來長期回報',
              eg: 'Thirty minutes at lunch pays dividends all afternoon.',
            },
            {
              en: 'invest time in something',
              zh: '投入時間在某件事上',
              eg: 'The time you invest in training comes back as focus.',
            },
            {
              en: 'elevate your mood',
              zh: '改善情緒',
              eg: 'Even a short walk elevates my mood before a difficult call.',
            },
            {
              en: 'raise your heart rate',
              zh: '提高心率',
              eg: 'Walk quickly enough to raise your heart rate.',
            },
            {
              en: 'a brisk walk',
              zh: '快走',
              eg: 'A brisk walk around the block counts. Start there.',
            },
            {
              en: 'strengthen your ability to focus',
              zh: '增強專注能力',
              eg: 'Exercise strengthens your ability to focus on long tasks.',
            },
            {
              en: 'produce meaningful benefits',
              zh: '產生實質的好處',
              eg: 'Twenty minutes, three times a week, produces meaningful benefits.',
            },
            {
              en: 'quality of life',
              zh: '生活品質',
              eg: 'It improved my quality of life more than the pay rise did.',
            },
            {
              en: 'a high-intensity workout',
              zh: '高強度運動',
              eg: 'He prefers a short high-intensity workout to an hour on a machine.',
            },
            {
              en: 'resistance exercise',
              zh: '阻力訓練',
              eg: 'Resistance exercise can improve mood and memory.',
            },
          ],
        },
        {
          t: 'match',
          en: 'Match the verb to what follows it',
          zh: '將動詞與其後方的搭配配對',
          hintEn: 'Click a phrase on the left, then its partner on the right.',
          hintZh: '先點左邊的詞，再點右邊的搭配。',
          pairs: [
            { a: 'take', b: 'exercise seriously' },
            { a: 'raise', b: 'your heart rate' },
            { a: 'elevate', b: 'your mood' },
            { a: 'pay', b: 'dividends' },
            { a: 'invest', b: 'time in something' },
            { a: 'produce', b: 'meaningful benefits' },
          ],
        },
        {
          t: 'gap',
          en: 'Choose the phrase that fits',
          zh: '選出適合的片語',
          items: [
            {
              text: 'The promotion ___ my results. It was about who my manager trusted.',
              options: ['had little to do with', 'paid dividends on', 'took seriously'],
              answer: 0,
              why: { en: '“have little to do with” = it was not really the reason.', zh: '「have little to do with」＝那並不是真正的原因。' },
            },
            {
              text: 'She’s ___, so we moved the review to eight in the morning.',
              options: ['a night owl', 'an early riser', 'thriving amid disorder'],
              answer: 1,
              why: { en: 'An early riser gets up early; a night owl works late.', zh: 'early riser 是早起的人；night owl 則晚上工作。' },
            },
            {
              text: 'Learning to write clean email early in your career ___ for thirty years.',
              options: ['raises your heart rate', 'pays dividends', 'has little value'],
              answer: 1,
              why: { en: '“pay dividends” = keep returning value long afterwards.', zh: '「pay dividends」＝長期持續帶來回報。' },
            },
            {
              text: 'You don’t need a gym. Walk fast enough to ___.',
              options: ['produce a brisk walk', 'raise your heart rate', 'invest your mood'],
              answer: 1,
              why: { en: 'Heart rate goes up: “raise your heart rate”.', zh: '心率提高：「raise your heart rate」。' },
            },
          ],
        },
        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '討論',
          items: [
            {
              en: 'What kind of exercise could you realistically keep up for the next six months?',
              zh: '你實際上可以在未來六個月持續進行哪一種運動？',
              starters: [
                'Realistically, I could keep up ___ , because it fits around ___ .',
                'Anything that needs ___ wouldn’t survive a busy week.',
              ],
            },
            {
              en: 'How does exercise change your mood and your performance at work?',
              zh: '運動如何影響你的情緒與工作表現？',
              starters: [
                'On the days I train, it noticeably ___ my mood.',
                'It strengthens my ability to focus, especially when ___ .',
              ],
            },
            {
              en: 'What is the biggest obstacle stopping you from exercising consistently?',
              zh: '阻礙你持續運動的最大因素是什麼？',
              starters: [
                'The biggest obstacle is ___ . It’s less about time than about ___ .',
                'I could remove that obstacle by ___ .',
              ],
            },
          ],
        },
      ],
    },

    // ================================================================ 3
    {
      id: 'cabinet',
      n: 3,
      en: 'Habit Two: Build a Kitchen Cabinet',
      zh: '習慣二：打造你的廚房內閣',
      blocks: [
        {
          t: 'lead',
          en: 'A “kitchen cabinet” is a small group of people you go to before a decision that matters.',
          zh: '「廚房內閣」是指在重要決定之前，你會請教的一小群人。',
        },
        {
          t: 'note',
          en: 'Where the phrase comes from',
          zh: '這個說法的由來',
          bodyEn: 'In 1830s Washington, President Andrew Jackson relied on informal friends and advisers rather than his official cabinet. Opponents mocked them as the “kitchen cabinet” — the people you talk to in the kitchen, not the meeting room. The insult became the standard term for a trusted inner circle.',
          bodyZh: '一八三〇年代的華府，傑克森總統倚重的是非正式的朋友與顧問，而非正式內閣。反對者嘲諷他們為「廚房內閣」——你在廚房裡談話的人，而不是在會議室。這個嘲諷後來成了「核心信任圈」的固定說法。',
        },
        {
          t: 'quote',
          en: 'It is difficult to read the label when you are inside the bottle.',
          zh: '當你身處瓶子裡，就很難讀到瓶身上的標籤。',
          by: 'Scott Galloway',
        },
        {
          t: 'summary',
          en: 'The defining characteristic of these people is not intelligence or experience, Galloway argues — it is willingness to tell you the truth. Their real value is simply that they are not you. When you are immersed in a situation, perspective becomes scarce, and no amount of effort generates a genuinely different point of view from the inside.',
          zh: '蓋洛威認為，這些人的關鍵特質不是聰明或經驗，而是願意對你說實話。他們真正的價值很單純：他們不是你。當你深陷某個情境時，客觀視角變得稀缺，再多的努力也無法從內部產生真正不同的觀點。',
        },
        {
          t: 'summary',
          en: 'Seeking advice is not the same as surrendering your judgment. Often the most useful part is not the recommendation but the questions behind it — the ones that pressure-test your reasoning. And some of the best advice does not tell you what to do at all. It tells you what not to do.',
          zh: '尋求建議並不等於放棄自己的判斷。最有用的部分往往不是那個建議，而是它背後的問題——那些對你的推理進行壓力測試的問題。有些最好的建議根本不告訴你該做什麼，而是告訴你不該做什麼。',
        },
        {
          t: 'phrases',
          en: 'The people',
          zh: '這些人',
          items: [
            {
              en: 'keep someone grounded',
              zh: '讓某人保持務實、腳踏實地',
              eg: 'My sister keeps me grounded when a quarter goes well.',
            },
            {
              en: 'a defining characteristic',
              zh: '關鍵特質',
              eg: 'The defining characteristic of the group is that they disagree with me.',
            },
            {
              en: 'have someone’s interests at heart',
              zh: '真心為某人著想',
              eg: 'He was blunt, but he clearly had my interests at heart.',
            },
            {
              en: 'tell someone the truth',
              zh: '對某人說實話',
              eg: 'I need two or three people who will tell me the truth quickly.',
            },
            {
              en: 'earn someone’s trust',
              zh: '贏得某人的信任',
              eg: 'She earned my trust by being right when it was unpopular.',
            },
            {
              en: 'a trusted group of advisers',
              zh: '一群值得信賴的顧問',
              eg: 'A trusted group of advisers is worth more than a large network.',
            },
            {
              en: 'hold someone back',
              zh: '阻礙某人前進',
              eg: 'That friendship was holding me back, and we both knew it.',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'The asking',
          zh: '請教的方式',
          items: [
            {
              en: 'seek career advice',
              zh: '尋求職涯建議',
              eg: 'I sought career advice from someone two roles ahead of me.',
            },
            {
              en: 'get a second opinion',
              zh: '獲得第二意見',
              eg: 'Before signing, get a second opinion from outside the company.',
            },
            {
              en: 'withstand scrutiny',
              zh: '經得起檢驗',
              eg: 'The plan reads well, but the numbers won’t withstand scrutiny.',
            },
            {
              en: 'pressure-test your reasoning',
              zh: '對你的推理進行壓力測試',
              eg: 'Her questions pressure-tested my reasoning better than any spreadsheet.',
            },
            {
              en: 'surrender your judgment',
              zh: '放棄自己的判斷',
              eg: 'Asking for advice doesn’t mean surrendering your judgment.',
            },
            {
              en: 'value someone’s counsel',
              zh: '重視某人的建議',
              eg: 'I value his counsel even when I don’t follow it.',
            },
            {
              en: 'intervene at a critical moment',
              zh: '在關鍵時刻介入',
              eg: 'Someone intervened at a critical moment and said, “maybe don’t.”',
            },
            {
              en: 'spare someone from disaster',
              zh: '使某人免於災難',
              eg: 'That one phone call spared me from a slow disaster.',
            },
          ],
        },
        {
          t: 'cards',
          en: 'Audit your own kitchen cabinet',
          zh: '檢視你自己的廚房內閣',
          hintEn: 'Tap each role: do you already have this person, or do you need one? Say who, or who it could be.',
          hintZh: '點選每個角色：你已經有這樣的人，還是需要一位？說出是誰，或可能會是誰。',
          items: [
            { icon: '🪞', en: 'The truth-teller', zh: '說實話的人', descEn: 'Tells you what is true, not what you would prefer to hear.', descZh: '告訴你事實，而不是你想聽的話。' },
            { icon: '🧭', en: 'The veteran', zh: '走過同一條路的人', descEn: 'Has already made the decision you are facing, five years earlier.', descZh: '五年前就做過你現在面臨的決定。' },
            { icon: '🪟', en: 'The outsider', zh: '圈外人', descEn: 'Knows nothing about your industry, so asks the obvious question.', descZh: '對你的產業一無所知，因此會問出最基本的問題。' },
            { icon: '🧮', en: 'The sceptic', zh: '懷疑者', descEn: 'Pressure-tests your reasoning and finds what will not withstand scrutiny.', descZh: '對你的推理進行壓力測試，找出經不起檢驗的地方。' },
            { icon: '⚓', en: 'The one who keeps you grounded', zh: '讓你腳踏實地的人', descEn: 'Knew you before the job title and is unimpressed by it.', descZh: '在你有這個頭銜之前就認識你，也不因此而另眼相看。' },
          ],
        },
        {
          t: 'match',
          en: 'Match the halves',
          zh: '配對片語的前後半',
          hintEn: 'Click a phrase on the left, then its partner on the right.',
          hintZh: '先點左邊的詞，再點右邊的搭配。',
          pairs: [
            { a: 'pressure-test', b: 'your reasoning' },
            { a: 'withstand', b: 'scrutiny' },
            { a: 'earn', b: 'someone’s trust' },
            { a: 'get', b: 'a second opinion' },
            { a: 'keep someone', b: 'grounded' },
            { a: 'spare someone', b: 'from disaster' },
          ],
        },
        {
          t: 'gap',
          en: 'Choose the phrase that fits',
          zh: '選出適合的片語',
          items: [
            {
              text: 'I asked three people to read the proposal. I wanted to know whether it would ___.',
              options: ['withstand scrutiny', 'have my interests at heart', 'keep me grounded'],
              answer: 0,
              why: { en: 'Something that survives hard questions “withstands scrutiny”.', zh: '經得起嚴格提問，就是「withstand scrutiny」。' },
            },
            {
              text: 'Listening to advice is not the same as ___.',
              options: ['seeking career advice', 'surrendering your judgment', 'getting a second opinion'],
              answer: 1,
              why: { en: '“surrender your judgment” = give up deciding for yourself.', zh: '「surrender your judgment」＝放棄自己做判斷。' },
            },
            {
              text: 'He said no to the deal a week before it collapsed. That call ___.',
              options: ['pressure-tested me', 'spared me from disaster', 'held me back'],
              answer: 1,
              why: { en: '“spare someone from disaster” = save them from something very bad.', zh: '「spare someone from disaster」＝使某人免於重大災難。' },
            },
            {
              text: 'She is not the most senior person I know, but she ___, and she says so.',
              options: ['has my interests at heart', 'withstands scrutiny', 'invests time in me'],
              answer: 0,
              why: { en: '“have someone’s interests at heart” = genuinely want good things for them.', zh: '「have someone’s interests at heart」＝真心為某人著想。' },
            },
          ],
        },
        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '討論',
          items: [
            {
              en: 'Who do you trust to give you honest advice, and how did they earn that trust?',
              zh: '你信任誰會給你誠實的建議？他們是怎麼贏得這份信任的？',
              starters: [
                'I’d go to ___ first, because they have my interests at heart.',
                'They earned my trust when ___ .',
              ],
            },
            {
              en: 'Do you usually ask anyone before an important decision, or decide first and tell people afterwards?',
              zh: '重要決定之前，你通常會請教別人，還是先決定再告知？',
              starters: [
                'Honestly, I tend to ___ , and then ask for a second opinion when it’s too late.',
                'I ask early when the decision is about ___ , and late when it’s about ___ .',
              ],
            },
            {
              en: 'What questions would pressure-test a decision you are facing right now?',
              zh: '有哪些問題可以對你目前面臨的決定進行壓力測試？',
              starters: [
                'The question I’m avoiding is ___ .',
                'If this goes wrong, the reason will be ___ .',
              ],
            },
          ],
        },
      ],
    },

    // ================================================================ 4
    {
      id: 'money-talk',
      n: 4,
      en: 'Habit Three: Learn to Talk About Money',
      zh: '習慣三：學會談論金錢',
      blocks: [
        {
          t: 'lead',
          en: 'The third habit has two parts: who you spend time with, and what you are willing to say out loud.',
          zh: '第三個習慣有兩個部分：你和誰相處，以及你願意把什麼說出口。',
        },
        {
          t: 'quote',
          en: 'Musicians talk about music. Software engineers talk about software.',
          zh: '音樂家會談論音樂，軟體工程師會談論軟體。',
          by: 'Scott Galloway',
        },
        {
          t: 'summary',
          en: 'Much of what we learn, we learn by imitation. Your subconscious watches the people around you and absorbs how they earn, spend, save and invest — so the practical advice is to give it better material. Galloway cites a survey in which 78% of young people said they consciously copy their friends’ financial habits, and suspects the real figure is closer to 100%.',
          zh: '我們學到的東西，很多是靠模仿學來的。你的潛意識會觀察身邊的人，吸收他們賺錢、花錢、儲蓄與投資的方式——所以務實的建議是：給它更好的素材。蓋洛威引用一份調查，其中百分之七十八的年輕人表示自己會有意識地模仿朋友的理財習慣；他認為實際比例更接近百分之百。',
        },
        {
          t: 'summary',
          en: 'His more controversial point follows: you are allowed to step away, gracefully, from relationships that consistently hold you back. He is careful to say this is not about judging people by their wealth, and that long-standing friendships have irreplaceable value. It is about patterns — taking without giving, behaviour nobody outgrew — that are not worth imitating.',
          zh: '接著是他比較有爭議的觀點：你可以用成熟而有分寸的方式，離開那些持續阻礙你前進的關係。他特別說明，這不是要你以財富評價一個人，長久的友誼具有不可取代的價值。他談的是模式——只拿取而不付出、始終沒有成熟的行為——這些不值得模仿。',
        },
        {
          t: 'summary',
          en: 'The second part is language. Wealthy people and employers often insist that discussing money is impolite; Galloway calls that nonsense, and notes that whoever already understands a system has little incentive to explain it to everyone else. Open conversations give you information about pay, tax, budgets and gaps in your emergency planning.',
          zh: '第二個部分是語言。有錢人與雇主常堅稱談錢不禮貌；蓋洛威說這是無稽之談，並指出：已經懂這套系統的人，通常沒什麼動機讓別人也懂。公開的對話能讓你獲得關於薪酬、稅務、預算，以及緊急應變計畫缺口的資訊。',
        },
        {
          t: 'note',
          en: 'One idea worth keeping: survivorship bias',
          zh: '一個值得記住的概念：倖存者偏誤',
          bodyEn: 'When wealthy friends discuss investments, remain skeptical. People talk about their wins and quietly drop their losses, so the stories you hear are the ones that survived. Learn from other people’s successes, but assume part of the story is missing. Survivorship bias makes for excellent conversation and poor investment analysis.',
          bodyZh: '當財務成功的朋友談投資時，保持懷疑。人們談論自己的成功，卻悄悄略過虧損，所以你聽到的都是「倖存下來」的故事。可以從別人的成功中學習，但要假設故事有一部分不見了。倖存者偏誤很適合聊天，卻不適合拿來做投資分析。',
        },
        {
          t: 'phrases',
          en: 'Imitation and influence',
          zh: '模仿與影響',
          items: [
            {
              en: 'learn through imitation',
              zh: '透過模仿學習',
              eg: 'Children learn through imitation long before anyone explains anything.',
            },
            {
              en: 'the subconscious mind',
              zh: '潛意識',
              eg: 'The subconscious mind is a copying machine you don’t supervise.',
            },
            {
              en: 'absorb someone’s behaviour',
              zh: '吸收某人的行為模式',
              eg: 'After a year on that team I had absorbed their working hours.',
            },
            {
              en: 'consciously copy someone',
              zh: '有意識地模仿某人',
              eg: 'I consciously copied how my first manager ran a meeting.',
            },
            {
              en: 'a model worth imitating',
              zh: '值得模仿的榜樣',
              eg: 'Working weekends to look busy is not a model worth imitating.',
            },
            {
              en: 'associate with someone',
              zh: '與某人來往',
              eg: 'Seneca advised associating with people who make you better.',
            },
            {
              en: 'financial habits',
              zh: '理財習慣',
              eg: 'Most of my financial habits came from my parents, unexamined.',
            },
            {
              en: 'step away from a relationship',
              zh: '離開一段關係',
              eg: 'He stepped away from the friendship gracefully, without a speech.',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'Talking about money at work',
          zh: '在職場談論金錢',
          items: [
            {
              en: 'talk openly about money',
              zh: '公開談論金錢',
              eg: 'Teams that talk openly about money negotiate better.',
            },
            {
              en: 'a taboo subject',
              zh: '禁忌話題',
              eg: 'Pay is a taboo subject here, which suits the company.',
            },
            {
              en: 'remain skeptical',
              zh: '保持懷疑',
              eg: 'Remain skeptical when someone only shows you the winning trade.',
            },
            {
              en: 'survivorship bias',
              zh: '倖存者偏誤',
              eg: 'Every “how I got rich” story has survivorship bias in it.',
            },
            {
              en: 'benchmark your budget',
              zh: '比較並評估自己的預算',
              eg: 'Talking to a colleague let me benchmark my budget honestly.',
            },
            {
              en: 'refine a tax strategy',
              zh: '調整節稅策略',
              eg: 'One conversation helped me refine my tax strategy for the year.',
            },
            {
              en: 'expose weaknesses',
              zh: '暴露弱點',
              eg: 'The question exposed a weakness in my emergency planning.',
            },
            {
              en: 'compensation',
              zh: '薪酬',
              eg: 'Ask about total compensation, not just base salary.',
            },
            {
              en: 'make something routine',
              zh: '讓某事成為日常',
              eg: 'Make financial conversations routine rather than dramatic.',
            },
          ],
        },
        {
          t: 'gap',
          en: 'Choose the phrase that fits',
          zh: '選出適合的片語',
          items: [
            {
              text: 'He only ever mentions the two funds that went up. That’s ___.',
              options: ['survivorship bias', 'a taboo subject', 'compensation'],
              answer: 0,
              why: { en: 'Only the winners are visible — the losses left the story.', zh: '只看得到贏家，虧損從故事裡消失了。' },
            },
            {
              text: 'Nobody here discusses salary. It’s ___.',
              options: ['a model worth imitating', 'a taboo subject', 'financial habits'],
              answer: 1,
              why: { en: 'A subject people avoid is “a taboo subject”.', zh: '大家避而不談的主題就是「a taboo subject」。' },
            },
            {
              text: 'I never decided to spend like that. I just ___ of the people I worked with.',
              options: ['remained skeptical', 'benchmarked the budget', 'absorbed the behaviour'],
              answer: 2,
              why: { en: '“absorb someone’s behaviour” = pick it up without deciding to.', zh: '「absorb someone’s behaviour」＝不知不覺就學了過來。' },
            },
            {
              text: 'Comparing numbers with a friend let me ___ against something real.',
              options: ['benchmark my budget', 'expose a taboo', 'copy consciously'],
              answer: 0,
              why: { en: '“benchmark” = compare against a reference point.', zh: '「benchmark」＝拿來與參考基準比較。' },
            },
            {
              text: 'Talk about money often and calmly — ___ rather than an event.',
              options: ['remain skeptical', 'make it routine', 'step away'],
              answer: 1,
              why: { en: '“make something routine” = turn it into a normal, regular thing.', zh: '「make something routine」＝讓它變成平常、固定的事。' },
            },
          ],
        },
        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '討論',
          items: [
            {
              en: 'What financial habits have you picked up from the people around you — good and bad?',
              zh: '你從身邊的人身上學到了哪些理財習慣——好的與壞的？',
              starters: [
                'I absorbed ___ from my family without ever deciding to.',
                'One habit I consciously copied is ___ .',
              ],
            },
            {
              en: 'Why do so many people find it uncomfortable to talk about money?',
              zh: '為什麼許多人在談論金錢時感到不自在？',
              starters: [
                'In Taiwan, money is a taboo subject partly because ___ .',
                'The people it protects are ___ .',
              ],
            },
            {
              en: 'How can you learn from financially successful people without copying them blindly?',
              zh: '你如何向財務成功的人學習，同時避免盲目模仿？',
              starters: [
                'I’d ask about the decisions, not the results — for example ___ .',
                'I remain skeptical when someone ___ .',
              ],
            },
          ],
        },
      ],
    },

    // ================================================================ 5
    {
      id: 'use-it',
      n: 5,
      en: 'Put It to Work',
      zh: '帶回工作現場',
      blocks: [
        {
          t: 'lead',
          en: 'The point of the article was that advice has to be translated into action. So does language.',
          zh: '這篇文章的重點是：建議必須轉化為行動。語言也是。',
        },
        {
          t: 'match',
          en: 'Review: match the halves',
          zh: '複習：配對片語的前後半',
          hintEn: 'Phrases from all three habits are mixed together here.',
          hintZh: '這裡混合了三個習慣中出現過的片語。',
          pairs: [
            { a: 'translate advice', b: 'into action' },
            { a: 'pay', b: 'dividends' },
            { a: 'thrive', b: 'amid disorder' },
            { a: 'withstand', b: 'scrutiny' },
            { a: 'have someone’s interests', b: 'at heart' },
            { a: 'intervene', b: 'at a critical moment' },
            { a: 'talk openly', b: 'about money' },
            { a: 'benchmark', b: 'your budget' },
          ],
        },
        {
          t: 'task',
          en: 'Two minutes, out loud',
          zh: '兩分鐘口說',
          instructionEn: 'Choose one prompt and speak for two minutes without stopping. Tick each phrase as you manage to use it. Aim for five.',
          instructionZh: '選一個題目，不停頓地說兩分鐘。每用到一個片語就打勾，目標是五個。',
          prompts: [
            { en: 'One habit I will change in the next six months — and what has stopped me so far.', zh: '未來六個月我要改變的一個習慣——以及至今是什麼阻礙了我。' },
            { en: 'The person whose advice changed a decision I made, and what they asked me.', zh: '曾經改變我某個決定的建議來自誰，以及他們問了我什麼。' },
            { en: 'How money was discussed in my family, and what I would do differently.', zh: '我家裡是怎麼談錢的，以及我會有什麼不同做法。' },
          ],
          checklist: [
            'there is no shortage of',
            'the gap between A and B',
            'translate advice into action',
            'take something seriously',
            'pay dividends',
            'have someone’s interests at heart',
            'pressure-test my reasoning',
            'a model worth imitating',
            'a taboo subject',
            'make something routine',
          ],
        },
        {
          t: 'task',
          en: 'One conversation this week',
          zh: '本週的一場對話',
          instructionEn: 'Pick one and draft the opening line in English. It has to be a sentence you would actually send.',
          instructionZh: '選一項，用英文擬出開場句。這句話必須是你真的會傳出去的。',
          prompts: [
            { en: 'Ask someone in your field about total compensation, not just salary.', zh: '向同領域的人請教整體薪酬，而不只是底薪。' },
            { en: 'Ask one person to pressure-test a decision you have already half made.', zh: '請一個人對你已經半決定的事進行壓力測試。' },
            { en: 'Ask a colleague how they benchmark their budget, and offer yours.', zh: '問同事他們如何評估自己的預算，並分享你的。' },
          ],
          frames: [
            'Can I borrow ten minutes? I’d like a second opinion on ___ before I commit.',
            'I’m trying to benchmark ___ and I’d rather ask than guess. Would you be comfortable telling me ___ ?',
            'I’ve half decided to ___ . Would you pressure-test my reasoning?',
            'This might be a slightly direct question, but ___ .',
          ],
        },
        {
          t: 'discuss',
          en: 'Last question',
          zh: '最後一個問題',
          items: [
            {
              en: 'Of the three habits, which one would cost you the least to start and return the most? Say why in three sentences.',
              zh: '三個習慣中，哪一個對你來說開始的代價最小、回報最大？用三句話說明理由。',
              starters: [
                'The one with the highest return for me would be ___ .',
                'It costs me almost nothing because ___ .',
                'Within six months I’d expect it to ___ .',
              ],
            },
          ],
        },
      ],
    },
  ],
};
