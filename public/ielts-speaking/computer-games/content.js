/* Computer Games — IELTS Speaking Part 3, adult one-to-one.

   A worked-answer lesson, built to the same shape as cities/: three questions
   answered in full in five parts, each with its own vocabulary, then the three
   shapes side by side. It is not a question bank — the banks are the topic
   lessons, and this is the other kind.

   From the source, unchanged: the three questions and their Chinese, the
   five-part labels and their Chinese, every English sentence of the three
   model answers, and the three vocabulary tables in both languages.

   Written for this page: the Traditional Chinese for the model answers — the
   source gives those in English only — the review chains, and the note on
   which slot bends in which question.

   Changed from the source, deliberately and in the same way cities/ was: its
   teaching note recommends delivering answers in forty to sixty seconds. This
   course teaches the long answer at ninety, set on Part 3 itself in course.js,
   so the closing note states that target and names the handout's figure in
   brackets rather than dropping it quietly. The handout is internally split on
   this anyway — its own practice widget says sixty to ninety.
*/

const LESSON = {
  id: 'computer-games',
  title: 'Computer Games',
  titleZh: '電腦遊戲',

  intro: {
    en: 'Three questions about games, answered in full. The topic looks like a young person’s, and the questions are not: what people do for relaxation, what a sense of achievement is worth, and who should decide what a child can see.',
    zh: '三道關於遊戲的題目，每一題都有完整回答。這個主題看起來像是年輕人的，但題目並不是：人們如何放鬆、成就感值多少、以及誰該決定孩子能看到什麼。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'answer a “what kinds of…” question without producing a list', zh: '回答「有哪些類型」的題目，而不是給出一份清單' },
      { en: 'explain an enjoyment in terms of what it satisfies', zh: '用「它滿足了什麼」來解釋一種樂趣' },
      { en: 'take a position on age limits and still give parents their share', zh: '對年齡限制表態，同時也把家長的角色講清楚' },
      { en: 'use the topic’s collocations accurately rather than frequently', zh: '精準而不是頻繁地使用本主題的搭配詞' },
    ],
  },

  source: {
    en: 'The questions, model answers and vocabulary are taken from Lewis’s Part 3 handout. The Chinese for the model answers and the review was written for this page; everything else is the handout’s own.',
    zh: '題目、範例答案與字彙取自 Lewis 的 Part 3 講義。範例答案與總覽的中文為本頁自行翻譯，其餘皆依講義原文。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'same-five',
      n: 1,
      en: 'The same five parts',
      zh: '同樣的五個部分',
      blocks: [
        {
          t: 'lead',
          en: 'These three use the structure taught in Cities: main idea, explanation, example, further development, conclusion. It is not re-explained here — what is worth watching is the fourth slot, which bends differently in each of the three.',
          zh: '這三題用的是「城市」那一課教過的結構：核心觀點、解釋原因、具體例子、延伸觀點、總結。這裡不再重複說明——值得注意的是第四個欄位，它在三題裡各自彎向不同的方向。',
        },
        {
          t: 'note',
          en: 'Extend, or balance — again',
          zh: '延伸，或平衡——又來了',
          bodyEn: 'Question 1 balances: competitive games on one side, casual games on the other. Questions 2 and 3 extend: a second reason, and a second party. Each question card below says which, so you can predict the shape before you read the answer. The choice between extending and balancing is the whole skill, and it is the same one Cities teaches.',
          bodyZh: '第 1 題是平衡：一邊是競技型遊戲，另一邊是休閒型。第 2、3 題是延伸：第二個理由，以及第二個相關方。下面每張題目卡都標示了是哪一種，讓你在讀答案之前就能預測結構。在「延伸」與「平衡」之間做選擇，就是全部的功力所在——和「城市」那一課教的是同一件事。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'kinds-of-games',
      n: 2,
      en: 'What people play',
      zh: '人們玩什麼',
      blocks: [
        {
          t: 'question',
          kicker: 'Part 3 · Question 1',
          en: 'What kinds of computer games do people play in your country?',
          zh: '在你的國家，人們通常玩哪些類型的電腦遊戲？',
          shape: 'Five parts, slot four balances',
          shapeZh: '五段式，第四段為平衡',
        },
        {
          t: 'model',
          en: 'The answer, in five parts',
          zh: '範例答案，分成五個部分',
          hintEn: 'Plan your own first. Notice it never actually lists game titles.',
          hintZh: '請先自己規劃一次。注意它從頭到尾沒有列出任何遊戲名稱。',
          parts: [
            {
              tag: 'Main idea', tagZh: '核心觀點',
              en: 'I would say that people in Taiwan enjoy a wide variety of computer games, but multiplayer online games and mobile games are probably the most popular.',
              zh: '我會說台灣人玩的電腦遊戲種類相當多元，但多人線上遊戲和手機遊戲大概是最受歡迎的。',
            },
            {
              tag: 'Explanation', tagZh: '解釋原因',
              en: 'One of the main reasons is that these games are easily accessible and allow people to interact with their friends, even when they are physically far apart.',
              zh: '主要原因之一是這類遊戲很容易取得，而且讓人即使身處遠方，也能和朋友互動。',
            },
            {
              tag: 'Example', tagZh: '具體例子',
              en: 'For example, many young people enjoy playing competitive games where they can team up with other players, develop strategies, and compete against opponents from around the world.',
              zh: '例如，許多年輕人喜歡玩競技型遊戲，可以和其他玩家組隊、制定策略，並和來自世界各地的對手競爭。',
            },
            {
              tag: 'Further development', tagZh: '延伸觀點',
              en: 'On the other hand, casual games, such as puzzle games and simulation games, are also popular among people who simply want to relax after a long day at work.',
              zh: '另一方面，休閒型遊戲，像是益智遊戲和模擬遊戲，在那些下班後只想放鬆的人之間也很受歡迎。',
            },
            {
              tag: 'Conclusion', tagZh: '總結',
              en: 'Overall, I think the popularity of different types of games largely depends on people’s age, interests, and lifestyles.',
              zh: '整體來說，我認為不同類型遊戲的受歡迎程度，很大程度上取決於年齡、興趣和生活方式。',
            },
          ],
        },
        {
          t: 'note',
          en: 'A “what kinds” question is not asking for a list',
          zh: '「有哪些類型」不是在要一份清單',
          bodyEn: 'Naming six games takes fifteen seconds and shows nothing but memory. This answer names two categories and then spends the rest explaining *who* plays each and *why* — which is what the examiner can actually mark. The conclusion does the same job: it turns a list question into a question about people.',
          bodyZh: '報出六個遊戲名稱只要十五秒，而且只能證明你記得住。這個回答只點出兩個類別，剩下的時間都花在說明「誰」玩哪一種、「為什麼」——而那才是考官真正評得到的東西。結論也在做同一件事：它把一道清單題，變成一道關於人的題目。',
        },
        {
          t: 'bank',
          en: 'Key vocabulary',
          zh: '關鍵字彙',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'a wide variety of games', zh: '各式各樣的遊戲' },
            { en: 'multiplayer online games', zh: '多人線上遊戲' },
            { en: 'easily accessible', zh: '容易取得或使用的' },
            { en: 'team up with other players', zh: '與其他玩家組隊' },
            { en: 'develop strategies', zh: '制定策略' },
            { en: 'compete against opponents', zh: '與對手競爭' },
            { en: 'casual games', zh: '休閒遊戲' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'why-people-play',
      n: 3,
      en: 'Why people play',
      zh: '人們為什麼玩',
      blocks: [
        {
          t: 'question',
          kicker: 'Part 3 · Question 2',
          en: 'Why do people enjoy playing computer games?',
          zh: '為什麼人們喜歡玩電腦遊戲？',
          shape: 'Five parts, slot four extends',
          shapeZh: '五段式，第四段為延伸',
        },
        {
          t: 'model',
          en: 'The answer, in five parts',
          zh: '範例答案，分成五個部分',
          hintEn: 'Three things are named in the first sentence, and the answer then takes them in order.',
          hintZh: '第一句就點出三件事，接著依序處理它們。',
          parts: [
            {
              tag: 'Main idea', tagZh: '核心觀點',
              en: 'I think people enjoy playing computer games mainly because they provide entertainment, relaxation, and a sense of achievement.',
              zh: '我認為人們喜歡玩電腦遊戲，主要是因為它們提供了娛樂、放鬆，以及成就感。',
            },
            {
              tag: 'Explanation', tagZh: '解釋原因',
              en: 'After a stressful day at work or school, playing games can help people unwind and temporarily escape from their daily responsibilities. Games also offer challenges that can be both exciting and rewarding.',
              zh: '在工作或上學壓力大的一天之後，玩遊戲能幫助人放鬆，暫時擺脫日常責任。遊戲也提供了既刺激又有回報的挑戰。',
            },
            {
              tag: 'Example', tagZh: '具體例子',
              en: 'For instance, when players complete a difficult mission or reach a higher level, they often experience a sense of accomplishment, which motivates them to continue playing.',
              zh: '例如，當玩家完成一項困難的任務或升到更高的等級時，常常會獲得成就感，而這會促使他們繼續玩下去。',
            },
            {
              tag: 'Further development', tagZh: '延伸觀點',
              en: 'Another important factor is social interaction. Many online games allow people to communicate, cooperate, and build friendships with players from different countries.',
              zh: '另一個重要因素是社交互動。許多線上遊戲讓人們得以和不同國家的玩家溝通、合作，並建立友誼。',
            },
            {
              tag: 'Conclusion', tagZh: '總結',
              en: 'So, I would say that computer games are appealing not only because they are entertaining, but also because they satisfy people’s desire for achievement and social connection.',
              zh: '所以，我會說電腦遊戲吸引人的原因，不只是因為好玩，也因為它們滿足了人們對成就感與社交連結的渴望。',
            },
          ],
        },
        {
          t: 'note',
          en: 'The conclusion is the best sentence here',
          zh: '這一題最好的句子是結論',
          bodyEn: '“Not only because they are entertaining, but also because they satisfy people’s desire for achievement and social connection.” It restates the answer at a higher level than it started — entertainment becomes a *desire being satisfied*. Ending one level up from where you began is one of the most reliable ways to sound analytical, and it works on any “why do people enjoy…” question.',
          bodyZh: '「不只是因為好玩，也因為它們滿足了人們對成就感與社交連結的渴望。」它用比開頭更高一層的說法重述了答案——「娛樂」變成了「一種被滿足的渴望」。收尾時比開場高出一個層次，是讓回答聽起來有分析感最可靠的做法之一，而且適用於任何「人們為什麼喜歡……」的題目。',
        },
        {
          t: 'bank',
          en: 'Key vocabulary',
          zh: '關鍵字彙',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'a sense of achievement', zh: '成就感' },
            { en: 'unwind after a stressful day', zh: '在壓力大的一天後放鬆' },
            { en: 'escape from daily responsibilities', zh: '暫時擺脫日常責任' },
            { en: 'complete a difficult mission', zh: '完成困難任務' },
            { en: 'a sense of accomplishment', zh: '成就感' },
            { en: 'social interaction', zh: '社交互動' },
            { en: 'build friendships', zh: '建立友誼' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'age-limits',
      n: 4,
      en: 'Who decides what a child can play',
      zh: '誰決定孩子能玩什麼',
      blocks: [
        {
          t: 'question',
          kicker: 'Part 3 · Question 3',
          en: 'Do you think that all computer games should have a minimum age for players?',
          zh: '你認為所有電腦遊戲都應該設定玩家的最低年齡限制嗎？',
          shape: 'Five parts, slot four extends',
          shapeZh: '五段式，第四段為延伸',
        },
        {
          t: 'model',
          en: 'The answer, in five parts',
          zh: '範例答案，分成五個部分',
          hintEn: 'Watch the first sentence: it refuses the word “all” before answering.',
          hintZh: '注意第一句：它在回答之前，先拒絕了題目裡的 all。',
          parts: [
            {
              tag: 'Main idea', tagZh: '核心觀點',
              en: 'I don’t think every computer game needs a strict minimum age requirement, but I do believe that age restrictions are necessary for games containing violent or inappropriate content.',
              zh: '我不認為每一款電腦遊戲都需要嚴格的最低年齡限制，但我確實認為，含有暴力或不適當內容的遊戲有必要設限。',
            },
            {
              tag: 'Explanation', tagZh: '解釋原因',
              en: 'The main reason is that young children may not be emotionally mature enough to understand certain themes, such as violence, crime, or gambling. Exposure to inappropriate content could potentially affect their behavior or emotional development.',
              zh: '主要原因是，年幼的孩子在情緒上可能還不夠成熟，無法理解暴力、犯罪或賭博這類主題。接觸不適當的內容，可能會影響他們的行為或情緒發展。',
            },
            {
              tag: 'Example', tagZh: '具體例子',
              en: 'For example, games designed for adults may contain realistic violence or disturbing images that are unsuitable for younger players. In contrast, educational games and simple puzzle games can be beneficial for children.',
              zh: '例如，為成人設計的遊戲可能含有寫實的暴力或令人不安的畫面，不適合年紀較小的玩家。相對地，教育類遊戲和簡單的益智遊戲則對孩子有益。',
            },
            {
              tag: 'Further development', tagZh: '延伸觀點',
              en: 'I think parents should also monitor their children’s gaming habits and help them choose age-appropriate games, rather than relying entirely on government regulations.',
              zh: '我認為家長也應該留意孩子的遊戲習慣，協助他們選擇適齡的遊戲，而不是完全依賴政府法規。',
            },
            {
              tag: 'Conclusion', tagZh: '總結',
              en: 'Ultimately, I believe the best approach is to have a clear age-rating system while giving parents the responsibility to guide their children’s gaming activities.',
              zh: '最終我認為最好的做法，是有一套清楚的年齡分級制度，同時由家長負起引導孩子遊戲行為的責任。',
            },
          ],
        },
        {
          t: 'note',
          en: 'Refusing “all” is worth doing out loud',
          zh: '把「拒絕 all」說出口，是值得的',
          bodyEn: 'The question contains the word “all”, which is almost always a trap — a question with “all”, “every” or “always” in it is inviting you to agree with something too strong. Saying *not every game, but games with ________* takes two seconds, answers the question properly, and shows the examiner you read the wording rather than the topic.',
          bodyZh: '題目裡有 all 這個字，而那幾乎總是陷阱——題目裡出現 all、every、always，就是在邀請你同意一個過強的說法。說出「不是每一款，但含有 ________ 的遊戲要」只要兩秒，既正確回答了問題，也讓考官看到你讀的是「題目的措辭」，而不只是「題目的主題」。',
        },
        {
          t: 'bank',
          en: 'Key vocabulary',
          zh: '關鍵字彙',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'minimum age requirement', zh: '最低年齡要求' },
            { en: 'age restrictions', zh: '年齡限制' },
            { en: 'inappropriate content', zh: '不適當內容' },
            { en: 'emotional development', zh: '情緒發展' },
            { en: 'age-appropriate games', zh: '適齡遊戲' },
            { en: 'monitor gaming habits', zh: '監督遊戲習慣' },
            { en: 'age-rating system', zh: '遊戲年齡分級制度' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 5
    {
      id: 'without-the-script',
      n: 5,
      en: 'Now without the script',
      zh: '現在，把講稿收起來',
      blocks: [
        {
          t: 'lead',
          en: 'Three answers, the same five slots. Read the chains, then close the models and rebuild one from its shape alone.',
          zh: '三個回答、同樣五個欄位。先看結構鏈，再把範例收起來，只靠結構重建其中一題。',
        },
        {
          t: 'chain',
          en: 'The three answers at a glance',
          zh: '三個回答總覽',
          hintEn: 'What each one argues, and the order it gets there in.',
          hintZh: '每一題主張什麼，以及它用什麼順序達成。',
          rows: [
            {
              n: 'Q1',
              en: 'What people play', zh: '人們玩什麼',
              claimEn: 'What is popular depends on who is playing.',
              claimZh: '什麼受歡迎，取決於玩的人是誰。',
              steps: [
                { en: 'Accessible and social', zh: '易取得且能社交' },
                { en: 'Competitive players', zh: '競技型玩家' },
                { en: 'Casual players', zh: '休閒型玩家' },
                { en: 'Depends on the person', zh: '取決於個人' },
              ],
            },
            {
              n: 'Q2',
              en: 'Why people play', zh: '人們為什麼玩',
              claimEn: 'Games satisfy a desire, not just pass the time.',
              claimZh: '遊戲滿足的是一種渴望，不只是打發時間。',
              steps: [
                { en: 'Relaxation', zh: '放鬆' },
                { en: 'Achievement', zh: '成就感' },
                { en: 'Social connection', zh: '社交連結' },
              ],
            },
            {
              n: 'Q3',
              en: 'Age limits', zh: '年齡限制',
              claimEn: 'Limits for some content, plus parents — not rules alone.',
              claimZh: '部分內容需要設限，再加上家長——光靠法規不夠。',
              steps: [
                { en: 'Refuse “all”', zh: '先拒絕 all' },
                { en: 'Maturity', zh: '成熟度' },
                { en: 'Parents', zh: '家長' },
                { en: 'Rating system plus guidance', zh: '分級制度加上引導' },
              ],
            },
          ],
        },
        {
          t: 'qbank',
          en: 'Recall without reading',
          zh: '不看稿，重建回答',
          hintEn: 'Pull one and rebuild the whole answer from its chain. The models stay closed.',
          hintZh: '抽一題，只靠它的結構鏈把整個回答重建出來。範例保持關閉。',
          items: [
            { en: 'What kinds of computer games do people play in your country?', zh: '在你的國家，人們通常玩哪些類型的電腦遊戲？', tag: 'Slot four balances', tagZh: '第四段平衡' },
            { en: 'Why do people enjoy playing computer games?', zh: '為什麼人們喜歡玩電腦遊戲？', tag: 'Slot four extends', tagZh: '第四段延伸' },
            { en: 'Do you think that all computer games should have a minimum age for players?', zh: '你認為所有電腦遊戲都應該設定玩家的最低年齡限制嗎？', tag: 'Slot four extends', tagZh: '第四段延伸' },
          ],
        },
        {
          t: 'clock',
          en: 'Against the clock',
          zh: '計時進行',
        },
        {
          t: 'task',
          en: 'Say it',
          zh: '說出來',
          instructionEn: 'Rebuild the answer from the chain, not from memory of the sentences. Tick each slot as it lands.',
          instructionZh: '靠結構鏈重建回答，而不是靠記住的句子。每填完一個欄位就勾起來。',
          checklist: [
            { en: 'Main idea — answered in the first sentence', zh: '核心觀點——第一句就回答了' },
            { en: 'Explanation — why, in two or three sentences', zh: '解釋原因——用兩三句說明為什麼' },
            { en: 'Example — something concrete enough to picture', zh: '具體例子——具體到可以想像的畫面' },
            { en: 'Further development — extended or balanced, not both', zh: '延伸觀點——延伸或平衡，不要兩個都做' },
            { en: 'Conclusion — one sentence, a level up from where you started', zh: '總結——一句話，比開場高一個層次' },
          ],
        },
        {
          t: 'note',
          en: 'Select, do not recite',
          zh: '要挑選，不要背誦',
          bodyEn: 'These are extended models, written to show how far a point can be developed. In the exam, choose the most relevant ideas rather than delivering the whole thing — a model answer reproduced entire is the clearest thing an examiner hears. The length to aim at is the ninety seconds the clock above marks, which is this course’s target across the whole of Part 3. (The handout these came from suggests forty to sixty seconds in its teaching notes, and sixty to ninety in its own practice section; this course teaches the longer answer.)',
          bodyZh: '這些是「延伸版」的範例答案，用意是示範一個論點可以展開到什麼程度。在考場上，請挑選最相關的想法，而不是整段照搬——完整複述的範例答案，是考官最容易聽出來的東西。長度目標是上方計時標示的九十秒，這也是本課程整個 Part 3 的目標。（本課材料出處的講義在教學筆記中建議四十到六十秒，在它自己的練習區塊則寫六十到九十秒；本課程教的是較長的回答。）',
        },
        {
          t: 'note',
          en: 'What a model answer cannot show you',
          zh: '範例答案看不出來的事',
          bodyEn: 'The handout is right about this and it is worth repeating: a band cannot be judged from written content. Pronunciation, hesitation, self-correction and how you sound when a question surprises you are half of what is being marked, and none of it is on this page. That is what the recorder under the clock is for.',
          bodyZh: '講義這一點說得對，值得再說一次：光看書面內容，判斷不出分數。發音、停頓、自我修正，以及被問倒時你聽起來是什麼樣子——這些佔了評分的一半，而它們全都不在這一頁上。那正是計時器下方那個錄音功能存在的理由。',
        },
      ],
    },
  ],
};
