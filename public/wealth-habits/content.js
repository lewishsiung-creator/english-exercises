/* Three Habits That Build Wealth — lesson content.

   Built from the HBR CC Book Digest of Scott Galloway’s three highest-return
   habits (23 July 2025). The article itself is not reproduced here: each step
   carries one short attributed quote, a summary written for the lesson, and
   then the language work — the collocations are the reason the text was
   chosen, so they carry the page.

   Every visible string is an `en` / `zh` pair. English is shown; the
   Traditional Chinese stays hidden until it is asked for, either line by line
   or with the 中文 switch in the top bar.

   Every English sentence on the page has a Chinese counterpart:
     eg    → egZh     the example sentence on a collocation card
     text  → textZh   a gap-fill sentence, translated as a complete Chinese
                      sentence with the missing phrase expressed in full. That
                      means the Chinese carries the answer, so on these items
                      the 中 tap is a hint the teacher chooses to give rather
                      than something the learner opens for comprehension.
     starters, frames, checklist are lists of `{ en, zh }` rather than bare
     strings, since each line needs its own translation.

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
  kicker: '國際商業期刊導讀',

  /* Photographs are from Pexels, whose licence allows commercial use and asks
     for no attribution; the photographers are credited anyway. `pos` is the
     CSS object-position used when the 16:9 file is cropped further on narrow
     screens — set it to whatever must stay in frame. */
  photo: {
    src: 'img/hero.jpg',
    alt: 'A man climbing an outdoor staircase between office towers',
    by: 'Lara Jameson',
    pos: '50% 45%',
  },

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
              egZh: '關於投資的建議多的是——真正缺的是照著做。',
            },
            {
              en: 'translate advice into action',
              zh: '把建議轉化為行動',
              eg: 'She is good at translating advice into action within the same week.',
              egZh: '她很擅長在同一週內就把建議轉化為行動。',
            },
            {
              en: 'the gap between A and B',
              zh: 'A 與 B 之間的落差',
              eg: 'The gap between our plan and our spending is about 15% a month.',
              egZh: '我們的計畫與實際支出之間的落差，每個月大約是 15%。',
            },
            {
              en: 'a clear indicator of',
              zh: '……的明確指標',
              eg: 'How fast a team replies to bad news is a clear indicator of its culture.',
              egZh: '一個團隊多快回應壞消息，是這個團隊文化的明確指標。',
            },
            {
              en: 'have little value',
              zh: '價值不大',
              eg: 'A forecast has little value if nobody changes a decision because of it.',
              egZh: '如果沒有人因為一份預測而改變任何決定，這份預測的價值不大。',
            },
            {
              en: 'financial anxiety',
              zh: '財務焦慮',
              eg: 'Financial anxiety is worse for people who have never seen their own numbers.',
              egZh: '對於從來沒看過自己財務數字的人來說，財務焦慮會更嚴重。',
            },
            {
              en: 'personal finance',
              zh: '個人財務',
              eg: 'Personal finance was never taught at my school.',
              egZh: '我念的學校從來沒教過個人財務。',
            },
            {
              en: 'build wealth',
              zh: '累積財富',
              eg: 'You build wealth slowly, then all at once.',
              egZh: '你累積財富的速度一開始很慢，然後突然之間就快了起來。',
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
              textZh: '那場會議上，我們不缺意見。我們缺的是決定。',
              options: ['had no shortage of', 'had little value in', 'translated into'],
              answer: 0,
              why: { en: '“no shortage of” + a noun = there was plenty of it.', zh: '「no shortage of」＋名詞＝某樣東西很多。' },
            },
            {
              text: 'His CV is impressive, but ___ what he claims and what he can show is wide.',
              textZh: '他的履歷很亮眼，但他所聲稱的和他能拿出來的，兩者之間的落差很大。',
              options: ['a clear indicator of', 'the gap between', 'there is no shortage of'],
              answer: 1,
              why: { en: 'The frame is “the gap between A and B”.', zh: '句型是「the gap between A and B」。' },
            },
            {
              text: 'A report nobody reads ___, however carefully it was written.',
              textZh: '一份沒有人讀的報告，不管寫得多仔細，價值都不大。',
              options: ['builds wealth', 'has little value', 'translates advice'],
              answer: 1,
              why: { en: '“have little value” = it is not worth much.', zh: '「have little value」＝價值不大。' },
            },
            {
              text: 'Checking your account balance at midnight is ___ financial anxiety.',
              textZh: '半夜還在查帳戶餘額，是財務焦慮的明確指標。',
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
                { en: 'I’ve been told to ___ for years, but I’ve never actually done it.', zh: '這些年一直有人告訴我要＿＿，但我從來沒真的去做。' },
                { en: 'There’s a real gap between what I say about ___ and what I do.', zh: '我對＿＿的說法和我實際的做法之間，有很明顯的落差。' },
              ],
            },
            {
              en: 'Whose money advice do you trust, and what makes them worth listening to?',
              zh: '你信任誰的理財建議？他們值得聽的原因是什麼？',
              starters: [
                { en: 'I trust ___ because they talk about their losses as well as their wins.', zh: '我信任＿＿，因為他們不只談自己的成功，也會談自己的虧損。' },
                { en: 'What makes their advice valuable is that they ___ .', zh: '他們的建議之所以有價值，是因為他們＿＿。' },
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
      photo: {
        src: 'img/exercise.jpg',
        alt: 'Two women power walking along a path in a city park',
        by: 'Polina Tankilevitch',
        pos: '50% 40%',
      },
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
              egZh: '我們表現最好的那一季，與新的品牌標誌關係不大。',
            },
            {
              en: 'highly productive people',
              zh: '工作效率很高的人',
              eg: 'Highly productive people protect two or three hours, not the whole day.',
              egZh: '工作效率很高的人只守住兩、三個小時，而不是一整天。',
            },
            {
              en: 'an early riser',
              zh: '早起的人',
              eg: 'I’m an early riser, so I schedule hard thinking before nine.',
              egZh: '我是早起的人，所以我把需要動腦的事排在九點以前。',
            },
            {
              en: 'a night owl',
              zh: '夜貓子',
              eg: 'She’s a night owl and does her best editing after ten.',
              egZh: '她是夜貓子，十點以後改稿改得最好。',
            },
            {
              en: 'thrive amid disorder',
              zh: '在混亂中仍能發揮所長',
              eg: 'Some founders thrive amid disorder; most managers do not.',
              egZh: '有些創辦人在混亂中仍能發揮所長，多數主管做不到。',
            },
            {
              en: 'take something seriously',
              zh: '認真看待某件事',
              eg: 'Everyone says sleep matters; very few take it seriously.',
              egZh: '每個人都說睡眠很重要，但很少人真的認真看待。',
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
              egZh: '午休的 30 分鐘，會在整個下午持續帶來回報。',
            },
            {
              en: 'invest time in something',
              zh: '投入時間在某件事上',
              eg: 'The time you invest in training comes back as focus.',
              egZh: '你投入在訓練上的時間，會以專注力回到你身上。',
            },
            {
              en: 'elevate your mood',
              zh: '改善情緒',
              eg: 'Even a short walk elevates my mood before a difficult call.',
              egZh: '在難談的電話之前，就算只是短短散個步，也能改善我的情緒。',
            },
            {
              en: 'raise your heart rate',
              zh: '提高心率',
              eg: 'Walk quickly enough to raise your heart rate.',
              egZh: '走快一點，快到足以提高心率。',
            },
            {
              en: 'a brisk walk',
              zh: '快走',
              eg: 'A brisk walk around the block counts. Start there.',
              egZh: '繞著街區快走一圈也算。就從這裡開始。',
            },
            {
              en: 'strengthen your ability to focus',
              zh: '增強專注能力',
              eg: 'Exercise strengthens your ability to focus on long tasks.',
              egZh: '運動能增強你在長時間任務上的專注能力。',
            },
            {
              en: 'produce meaningful benefits',
              zh: '產生實質的好處',
              eg: 'Twenty minutes, three times a week, produces meaningful benefits.',
              egZh: '一次 20 分鐘，一週三次，就能產生實質的好處。',
            },
            {
              en: 'quality of life',
              zh: '生活品質',
              eg: 'It improved my quality of life more than the pay rise did.',
              egZh: '它對我生活品質的改善，比那次加薪還要多。',
            },
            {
              en: 'a high-intensity workout',
              zh: '高強度運動',
              eg: 'He prefers a short high-intensity workout to an hour on a machine.',
              egZh: '他寧願做短時間的高強度運動，也不想在健身器材上待一個小時。',
            },
            {
              en: 'resistance exercise',
              zh: '阻力訓練',
              eg: 'Resistance exercise can improve mood and memory.',
              egZh: '阻力訓練可以改善情緒和記憶力。',
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
              textZh: '那次升遷和我的績效關係不大。重點在於我的主管信任誰。',
              options: ['had little to do with', 'paid dividends on', 'took seriously'],
              answer: 0,
              why: { en: '“have little to do with” = it was not really the reason.', zh: '「have little to do with」＝那並不是真正的原因。' },
            },
            {
              text: 'She’s ___, so we moved the review to eight in the morning.',
              textZh: '她是早起的人，所以我們把檢討會議改到早上八點。',
              options: ['a night owl', 'an early riser', 'thriving amid disorder'],
              answer: 1,
              why: { en: 'An early riser gets up early; a night owl works late.', zh: 'early riser 是早起的人；night owl 則晚上工作。' },
            },
            {
              text: 'Learning to write clean email early in your career ___ for thirty years.',
              textZh: '在職涯早期就學會把 email 寫得乾淨清楚，接下來三十年都會持續帶來回報。',
              options: ['raises your heart rate', 'pays dividends', 'has little value'],
              answer: 1,
              why: { en: '“pay dividends” = keep returning value long afterwards.', zh: '「pay dividends」＝長期持續帶來回報。' },
            },
            {
              text: 'You don’t need a gym. Walk fast enough to ___.',
              textZh: '你不需要上健身房。走路的速度只要快到足以提高心率就行了。',
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
                { en: 'Realistically, I could keep up ___ , because it fits around ___ .', zh: '現實一點來看，我能持續下去的是＿＿，因為它可以配合＿＿。' },
                { en: 'Anything that needs ___ wouldn’t survive a busy week.', zh: '任何需要＿＿的做法，一忙起來就撐不過一個星期。' },
              ],
            },
            {
              en: 'How does exercise change your mood and your performance at work?',
              zh: '運動如何影響你的情緒與工作表現？',
              starters: [
                { en: 'On the days I train, it noticeably ___ my mood.', zh: '有訓練的日子，它會明顯＿＿我的情緒。' },
                { en: 'It strengthens my ability to focus, especially when ___ .', zh: '它會增強我的專注能力，特別是在＿＿的時候。' },
              ],
            },
            {
              en: 'What is the biggest obstacle stopping you from exercising consistently?',
              zh: '阻礙你持續運動的最大因素是什麼？',
              starters: [
                { en: 'The biggest obstacle is ___ . It’s less about time than about ___ .', zh: '最大的障礙是＿＿。問題不在時間，而在＿＿。' },
                { en: 'I could remove that obstacle by ___ .', zh: '我可以透過＿＿來排除這個障礙。' },
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
      photo: {
        src: 'img/cabinet.jpg',
        alt: 'Four adults around a small table, one speaking while the others listen',
        by: 'Ron Lach',
        pos: '50% 40%',
      },
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
              egZh: '季度表現好的時候，我姊姊會讓我保持腳踏實地。',
            },
            {
              en: 'a defining characteristic',
              zh: '關鍵特質',
              eg: 'The defining characteristic of the group is that they disagree with me.',
              egZh: '這群人的關鍵特質，就是他們會跟我意見不同。',
            },
            {
              en: 'have someone’s interests at heart',
              zh: '真心為某人著想',
              eg: 'He was blunt, but he clearly had my interests at heart.',
              egZh: '他說話很直，但他顯然是真心為我著想。',
            },
            {
              en: 'tell someone the truth',
              zh: '對某人說實話',
              eg: 'I need two or three people who will tell me the truth quickly.',
              egZh: '我需要兩、三個會很快對我說實話的人。',
            },
            {
              en: 'earn someone’s trust',
              zh: '贏得某人的信任',
              eg: 'She earned my trust by being right when it was unpopular.',
              egZh: '她在看法不受歡迎的時候依然判斷正確，因此贏得了我的信任。',
            },
            {
              en: 'a trusted group of advisers',
              zh: '一群值得信賴的顧問',
              eg: 'A trusted group of advisers is worth more than a large network.',
              egZh: '一群值得信賴的顧問，比廣泛的人際網路更有價值。',
            },
            {
              en: 'hold someone back',
              zh: '阻礙某人前進',
              eg: 'That friendship was holding me back, and we both knew it.',
              egZh: '那段友誼一直在阻礙我前進，我們兩個都知道。',
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
              egZh: '我向職位比我高兩階的人尋求職涯建議。',
            },
            {
              en: 'get a second opinion',
              zh: '獲得第二意見',
              eg: 'Before signing, get a second opinion from outside the company.',
              egZh: '簽約之前，先從公司外部獲得第二意見。',
            },
            {
              en: 'withstand scrutiny',
              zh: '經得起檢驗',
              eg: 'The plan reads well, but the numbers won’t withstand scrutiny.',
              egZh: '這份計畫讀起來不錯，但數字經不起檢驗。',
            },
            {
              en: 'pressure-test your reasoning',
              zh: '對你的推理進行壓力測試',
              eg: 'Her questions pressure-tested my reasoning better than any spreadsheet.',
              egZh: '她的問題對我的推理進行壓力測試，效果比任何試算表都好。',
            },
            {
              en: 'surrender your judgment',
              zh: '放棄自己的判斷',
              eg: 'Asking for advice doesn’t mean surrendering your judgment.',
              egZh: '尋求建議並不等於放棄自己的判斷。',
            },
            {
              en: 'value someone’s counsel',
              zh: '重視某人的建議',
              eg: 'I value his counsel even when I don’t follow it.',
              egZh: '即使我最後沒有照做，我還是重視他的建議。',
            },
            {
              en: 'intervene at a critical moment',
              zh: '在關鍵時刻介入',
              eg: 'Someone intervened at a critical moment and said, “maybe don’t.”',
              egZh: '有人在關鍵時刻介入，說了一句「還是別做吧」。',
            },
            {
              en: 'spare someone from disaster',
              zh: '使某人免於災難',
              eg: 'That one phone call spared me from a slow disaster.',
              egZh: '那一通電話，讓我免於一場慢慢成形的災難。',
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
              textZh: '我請三個人看過那份提案，我想知道它是否經得起檢驗。',
              options: ['withstand scrutiny', 'have my interests at heart', 'keep me grounded'],
              answer: 0,
              why: { en: 'Something that survives hard questions “withstands scrutiny”.', zh: '經得起嚴格提問，就是「withstand scrutiny」。' },
            },
            {
              text: 'Listening to advice is not the same as ___.',
              textZh: '聽取建議不等於放棄自己的判斷。',
              options: ['seeking career advice', 'surrendering your judgment', 'getting a second opinion'],
              answer: 1,
              why: { en: '“surrender your judgment” = give up deciding for yourself.', zh: '「surrender your judgment」＝放棄自己做判斷。' },
            },
            {
              text: 'He said no to the deal a week before it collapsed. That call ___.',
              textZh: '那筆交易破局的前一週，他就拒絕了。那個判斷讓我免於一場災難。',
              options: ['pressure-tested me', 'spared me from disaster', 'held me back'],
              answer: 1,
              why: { en: '“spare someone from disaster” = save them from something very bad.', zh: '「spare someone from disaster」＝使某人免於重大災難。' },
            },
            {
              text: 'She is not the most senior person I know, but she ___, and she says so.',
              textZh: '她不是我認識的人裡職位最高的，但她真心為我著想，而且她會直說。',
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
                { en: 'I’d go to ___ first, because they have my interests at heart.', zh: '我會先找＿＿，因為他們是真心為我著想。' },
                { en: 'They earned my trust when ___ .', zh: '他們贏得我的信任，是在＿＿的時候。' },
              ],
            },
            {
              en: 'Do you usually ask anyone before an important decision, or decide first and tell people afterwards?',
              zh: '重要決定之前，你通常會請教別人，還是先決定再告知？',
              starters: [
                { en: 'Honestly, I tend to ___ , and then ask for a second opinion when it’s too late.', zh: '老實說，我通常會＿＿，等到太晚了才去獲得第二意見。' },
                { en: 'I ask early when the decision is about ___ , and late when it’s about ___ .', zh: '如果決定跟＿＿有關，我會很早就問；如果是關於＿＿，我就會拖到很晚才問。' },
              ],
            },
            {
              en: 'What questions would pressure-test a decision you are facing right now?',
              zh: '有哪些問題可以對你目前面臨的決定進行壓力測試？',
              starters: [
                { en: 'The question I’m avoiding is ___ .', zh: '我一直在迴避的問題是＿＿。' },
                { en: 'If this goes wrong, the reason will be ___ .', zh: '如果這件事出了問題，原因會是＿＿。' },
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
      photo: {
        src: 'img/money.jpg',
        alt: 'Two colleagues talking on a city street, holding takeaway coffee',
        by: 'William Fortunato',
        pos: '50% 45%',
      },
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
              egZh: '孩子早在有人開口解釋任何事之前，就已經透過模仿學習了。',
            },
            {
              en: 'the subconscious mind',
              zh: '潛意識',
              eg: 'The subconscious mind is a copying machine you don’t supervise.',
              egZh: '潛意識就像一台你沒在監督的影印機。',
            },
            {
              en: 'absorb someone’s behaviour',
              zh: '吸收某人的行為模式',
              eg: 'After a year on that team I had absorbed their working hours.',
              egZh: '在那個團隊待了一年之後，我已經吸收了他們的工作時間模式。',
            },
            {
              en: 'consciously copy someone',
              zh: '有意識地模仿某人',
              eg: 'I consciously copied how my first manager ran a meeting.',
              egZh: '我有意識地模仿我第一位主管開會的方式。',
            },
            {
              en: 'a model worth imitating',
              zh: '值得模仿的榜樣',
              eg: 'Working weekends to look busy is not a model worth imitating.',
              egZh: '週末加班只為了看起來很忙，這不是值得模仿的榜樣。',
            },
            {
              en: 'associate with someone',
              zh: '與某人來往',
              eg: 'Seneca advised associating with people who make you better.',
              egZh: '哲學家塞內卡建議與那些能讓你變得更好的人來往。',
            },
            {
              en: 'financial habits',
              zh: '理財習慣',
              eg: 'Most of my financial habits came from my parents, unexamined.',
              egZh: '我大部分的理財習慣都來自父母，而且從來沒檢視過。',
            },
            {
              en: 'step away from a relationship',
              zh: '離開一段關係',
              eg: 'He stepped away from the friendship gracefully, without a speech.',
              egZh: '他很得體地離開了那段友誼，沒有多說什麼。',
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
              egZh: '願意公開談論金錢的團隊，談判時表現比較好。',
            },
            {
              en: 'a taboo subject',
              zh: '禁忌話題',
              eg: 'Pay is a taboo subject here, which suits the company.',
              egZh: '薪水在這裡是禁忌話題，而這對公司有利。',
            },
            {
              en: 'remain skeptical',
              zh: '保持懷疑',
              eg: 'Remain skeptical when someone only shows you the winning trade.',
              egZh: '當有人只給你看賺錢的那一筆交易時，要保持懷疑。',
            },
            {
              en: 'survivorship bias',
              zh: '倖存者偏誤',
              eg: 'Every “how I got rich” story has survivorship bias in it.',
              egZh: '每一個「我如何變有錢」的故事裡都藏著倖存者偏誤。',
            },
            {
              en: 'benchmark your budget',
              zh: '比較並評估自己的預算',
              eg: 'Talking to a colleague let me benchmark my budget honestly.',
              egZh: '跟同事聊過之後，我才能誠實地比較並評估自己的預算。',
            },
            {
              en: 'refine a tax strategy',
              zh: '調整節稅策略',
              eg: 'One conversation helped me refine my tax strategy for the year.',
              egZh: '一次對話就幫我調整了那一年的節稅策略。',
            },
            {
              en: 'expose weaknesses',
              zh: '暴露弱點',
              eg: 'The question exposed a weakness in my emergency planning.',
              egZh: '那個問題暴露了我在應急規劃上的弱點。',
            },
            {
              en: 'compensation',
              zh: '薪酬',
              eg: 'Ask about total compensation, not just base salary.',
              egZh: '要問整體薪酬，不要只問底薪。',
            },
            {
              en: 'make something routine',
              zh: '讓某事成為日常',
              eg: 'Make financial conversations routine rather than dramatic.',
              egZh: '讓談錢的對話成為日常，而不是一件大事。',
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
              textZh: '他每次只提那兩檔上漲的基金。這就是倖存者偏誤。',
              options: ['survivorship bias', 'a taboo subject', 'compensation'],
              answer: 0,
              why: { en: 'Only the winners are visible — the losses left the story.', zh: '只看得到贏家，虧損從故事裡消失了。' },
            },
            {
              text: 'Nobody here discusses salary. It’s ___.',
              textZh: '這裡沒有人談薪水，這是禁忌話題。',
              options: ['a model worth imitating', 'a taboo subject', 'financial habits'],
              answer: 1,
              why: { en: 'A subject people avoid is “a taboo subject”.', zh: '大家避而不談的主題就是「a taboo subject」。' },
            },
            {
              text: 'I never decided to spend like that. I just ___ of the people I worked with.',
              textZh: '我從來沒有決定要那樣花錢。我只是吸收了那些跟我共事的人的行為模式。',
              options: ['remained skeptical', 'benchmarked the budget', 'absorbed the behaviour'],
              answer: 2,
              why: { en: '“absorb someone’s behaviour” = pick it up without deciding to.', zh: '「absorb someone’s behaviour」＝不知不覺就學了過來。' },
            },
            {
              text: 'Comparing numbers with a friend let me ___ against something real.',
              textZh: '和朋友對照彼此的數字，讓我能拿一個真實的參考點來比較並評估自己的預算。',
              options: ['benchmark my budget', 'expose a taboo', 'copy consciously'],
              answer: 0,
              why: { en: '“benchmark” = compare against a reference point.', zh: '「benchmark」＝拿來與參考基準比較。' },
            },
            {
              text: 'Talk about money often and calmly — ___ rather than an event.',
              textZh: '常常談錢，而且平靜地談——讓它成為日常，而不是把它當成一件特別的事。',
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
                { en: 'I absorbed ___ from my family without ever deciding to.', zh: '我從家人身上吸收了＿＿，卻從來沒有刻意決定要這樣。' },
                { en: 'One habit I consciously copied is ___ .', zh: '我有意識地模仿的一個習慣是＿＿。' },
              ],
            },
            {
              en: 'Why do so many people find it uncomfortable to talk about money?',
              zh: '為什麼許多人在談論金錢時感到不自在？',
              starters: [
                { en: 'In Taiwan, money is a taboo subject partly because ___ .', zh: '在台灣，錢是個禁忌話題，其中一個原因是＿＿。' },
                { en: 'The people it protects are ___ .', zh: '它保護的人是＿＿。' },
              ],
            },
            {
              en: 'How can you learn from financially successful people without copying them blindly?',
              zh: '你如何向財務成功的人學習，同時避免盲目模仿？',
              starters: [
                { en: 'I’d ask about the decisions, not the results — for example ___ .', zh: '我會問他們的決定，而不是結果——例如＿＿。' },
                { en: 'I remain skeptical when someone ___ .', zh: '當有人＿＿的時候，我會保持懷疑。' },
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
            { en: 'there is no shortage of', zh: '不缺乏；多的是' },
            { en: 'the gap between A and B', zh: 'A 與 B 之間的落差' },
            { en: 'translate advice into action', zh: '把建議轉化為行動' },
            { en: 'take something seriously', zh: '認真看待某件事' },
            { en: 'pay dividends', zh: '帶來長期回報' },
            { en: 'have someone’s interests at heart', zh: '真心為某人著想' },
            { en: 'pressure-test my reasoning', zh: '對我的推理進行壓力測試' },
            { en: 'a model worth imitating', zh: '值得模仿的榜樣' },
            { en: 'a taboo subject', zh: '禁忌話題' },
            { en: 'make something routine', zh: '讓某事成為日常' },
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
            { en: 'Can I borrow ten minutes? I’d like a second opinion on ___ before I commit.', zh: '可以借用你十分鐘嗎？我想在真的決定之前，先聽聽你對＿＿的第二意見。' },
            { en: 'I’m trying to benchmark ___ and I’d rather ask than guess. Would you be comfortable telling me ___ ?', zh: '我想比較並評估＿＿，與其自己猜，不如直接問你。你方便告訴我＿＿嗎？' },
            { en: 'I’ve half decided to ___ . Would you pressure-test my reasoning?', zh: '我大概已經決定要＿＿了。可以請你對我的推理進行壓力測試嗎？' },
            { en: 'This might be a slightly direct question, but ___ .', zh: '這個問題可能有點直接，不過＿＿。' },
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
                { en: 'The one with the highest return for me would be ___ .', zh: '對我來說回報最高的會是＿＿。' },
                { en: 'It costs me almost nothing because ___ .', zh: '它幾乎不需要我付出什麼成本，因為＿＿。' },
                { en: 'Within six months I’d expect it to ___ .', zh: '六個月內，我預期它會＿＿。' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
