/* Work and Study — IELTS Speaking Part 1, adult one-to-one.

   WRITTEN FOR THIS SITE. The questions are standard Part 1 fare; the model
   answers, the language and all the Chinese are the site's.

   Teach two-sentences-more first.

   The second compulsory Part 1 topic. Its particular trap is technical: an
   adult candidate knows their own job in Chinese and reaches for the English
   job title, which is often either wrong or meaningless to the examiner. The
   lesson's main move is to teach describing a job by what you do rather than
   by what it is called.
*/

const LESSON = {
  id: 'work-and-study',
  title: 'Work and Study',
  titleZh: '工作與學業',

  intro: {
    en: 'The examiner has to ask this one, and they will not know your industry. What sounds impressive in your own language — the job title, the department, the certification — usually lands as noise. What works is the plainest possible description of what you actually do all day.',
    zh: '考官一定會問這一題，而且他不會懂你的產業。在你自己的語言裡聽起來很厲害的東西——職稱、部門、證照——通常只會變成雜訊。真正有效的，是用最淺白的方式說出你整天到底在做什麼。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'say what you do in one sentence a stranger would understand', zh: '用一句陌生人聽得懂的話說出你的工作' },
      { en: 'avoid job titles and jargon that mean nothing outside your field', zh: '避開在你的領域之外毫無意義的職稱與行話' },
      { en: 'talk about why you chose it without reciting a CV', zh: '談你為什麼選這一行，而不是背履歷' },
      { en: 'answer the study questions if you are not currently working', zh: '若你目前沒在工作，也能回答學業相關題目' },
    ],
  },

  source: {
    en: 'Written for this page. The questions are standard Part 1 material; the answers, the language and the Chinese are the site’s.',
    zh: '本頁為本站自行撰寫。題目為 Part 1 常見題型；答案、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'what-you-do',
      n: 1,
      en: 'Say what you do, not what it is called',
      zh: '說你做什麼，而不是它叫什麼',
      blocks: [
        {
          t: 'lead',
          en: 'The first answer is the one that has to work, because everything after it is a follow-up. If the examiner does not understand what you do, they cannot ask you anything useful about it.',
          zh: '第一個回答一定要過關，因為後面全部都是追問。如果考官沒聽懂你在做什麼，他就問不出任何有用的後續問題。',
        },
        {
          t: 'upgrade',
          en: 'The job title, and the job',
          zh: '職稱，與工作本身',
          hintEn: 'The first one is accurate and tells the examiner nothing.',
          hintZh: '第一個完全正確，但考官什麼也沒得到。',
          beforeTag: 'The title', beforeTagZh: '職稱',
          beforeEn: 'I work as a senior process integration engineer in the back-end department of a semiconductor company.',
          beforeZh: '我在一家半導體公司的後段部門擔任資深製程整合工程師。',
          adds: [
            { en: 'say what the work consists of, in verbs', zh: '用動詞說出這份工作實際在做什麼' },
            { en: 'say who you deal with', zh: '說出你要和誰打交道' },
            { en: 'keep the title, but put it second', zh: '職稱可以留，但放到第二位' },
          ],
          afterTag: 'The job', afterTagZh: '工作本身',
          afterEn: 'I work in a factory that makes computer chips. My job is basically to find out why things go wrong — when a batch doesn’t come out right, I work with the production team to track down the cause. The official title is process integration engineer, but that doesn’t tell you much.',
          afterZh: '我在一家生產電腦晶片的工廠工作。我的工作基本上就是找出問題出在哪裡——當某一批產品做壞了，我會和生產線團隊一起追查原因。正式職稱是製程整合工程師，不過那個頭銜說明不了什麼。',
        },
        {
          t: 'note',
          en: '“That doesn’t tell you much” is a gift',
          zh: '「那個頭銜說明不了什麼」是個好東西',
          bodyEn: 'Saying it out loud does three things: it shows you know the title is jargon, it gives the examiner permission to ask a real follow-up, and it is natural spoken English of exactly the kind Part 1 is marked on. Candidates almost never say it because they think the title is the impressive part.',
          bodyZh: '把這句話說出口，一次做了三件事：顯示你知道那是行話、給了考官追問的空間，而且它正是 Part 1 要評的那種自然口語。考生幾乎不會這樣說，因為他們以為職稱才是厲害的部分。',
        },
        {
          t: 'frames',
          en: 'Ways to open',
          zh: '開場說法',
          hintEn: 'Pick the one that fits your situation. Tap 🔊 to hear it.',
          hintZh: '挑一個符合你狀況的。點 🔊 可聽一次。',
          items: [
            { en: 'I work in ________ — basically I ________.', zh: '我在 ________ 工作——基本上我 ________。' },
            { en: 'I’m a ________, so most of my day is ________.', zh: '我是 ________，所以我大部分的時間都在 ________。' },
            { en: 'I work for a company that makes ________.', zh: '我在一家做 ________ 的公司上班。' },
            { en: 'I’m studying ________ at the moment.', zh: '我目前在念 ________。' },
            { en: 'I’ve just finished studying, so I’m looking for work at the moment.', zh: '我剛念完書，所以目前在找工作。' },
            { en: 'I’m between jobs at the moment, actually.', zh: '其實我目前在轉職的空檔。' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'questions',
      n: 2,
      en: 'The follow-ups',
      zh: '後續追問',
      blocks: [
        {
          t: 'qbank',
          en: 'Twelve questions about work and study',
          zh: '十二道關於工作與學業的題目',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Do you work or are you a student?',
              zh: '你是在工作還是在念書？',
              words: [
                { en: 'I work in ________', zh: '我在 ________ 工作' },
                { en: 'I’m studying ________', zh: '我在念 ________' },
                { en: 'both, actually', zh: '其實兩個都有' },
                { en: 'I’ve been doing it for about ________ years', zh: '我做這行大概 ________ 年了' },
              ],
            },
            {
              en: 'Why did you choose that job?',
              zh: '你為什麼選擇這份工作？',
              words: [
                { en: 'it wasn’t really a plan', zh: '其實不是計畫好的' },
                { en: 'I fell into it', zh: '我是誤打誤撞進去的' },
                { en: 'it was the most practical option at the time', zh: '那是當時最實際的選擇' },
                { en: 'I’d always been interested in ________', zh: '我一直對 ________ 有興趣' },
              ],
            },
            {
              en: 'What do you enjoy most about your work?',
              zh: '你最喜歡工作的哪一部分？',
              words: [
                { en: 'solving a problem nobody else could', zh: '解決別人解不掉的問題' },
                { en: 'the people I work with', zh: '一起工作的同事' },
                { en: 'seeing something actually get finished', zh: '看到東西真的完成' },
                { en: 'no two days are the same', zh: '沒有兩天是一樣的' },
              ],
            },
            {
              en: 'Is there anything you dislike about it?',
              zh: '有沒有什麼是你不喜歡的？',
              words: [
                { en: 'the hours, mainly', zh: '主要是工時' },
                { en: 'a lot of it is paperwork', zh: '很大一部分是文書作業' },
                { en: 'the commute is the worst part', zh: '最糟的是通勤' },
                { en: 'it can be repetitive', zh: '有時候滿重複的' },
              ],
            },
            {
              en: 'What is a typical working day like for you?',
              zh: '你典型的一個工作天是什麼樣子？',
              words: [
                { en: 'I start at around ________', zh: '我大概 ________ 開始' },
                { en: 'the first thing I do is ________', zh: '我做的第一件事是 ________' },
                { en: 'most of the afternoon goes on ________', zh: '下午大部分時間花在 ________' },
                { en: 'it varies more than people expect', zh: '它的變化比大家想的多' },
              ],
            },
            {
              en: 'Would you like to change jobs in the future?',
              zh: '你將來會想換工作嗎？',
              words: [
                { en: 'not in the short term', zh: '短期內不會' },
                { en: 'I’d like to move into ________', zh: '我想轉到 ________ 領域' },
                { en: 'same field, different company', zh: '同一個領域，不同公司' },
                { en: 'I’m happy where I am for now', zh: '目前我對現況滿意' },
              ],
            },
            {
              en: 'Do you prefer working alone or in a team?',
              zh: '你比較喜歡獨立作業還是團隊合作？',
              words: [
                { en: 'it depends on the task', zh: '要看是什麼任務' },
                { en: 'I get more done on my own', zh: '我自己做效率比較高' },
                { en: 'you need other people to catch your mistakes', zh: '你需要別人幫你抓錯' },
                { en: 'a bit of both, ideally', zh: '理想上是兩者兼具' },
              ],
            },
            {
              en: 'What skills are important in your job?',
              zh: '你的工作需要什麼能力？',
              words: [
                { en: 'patience, more than anything', zh: '最重要的是耐心' },
                { en: 'being able to explain things simply', zh: '能把事情講得簡單' },
                { en: 'attention to detail', zh: '注意細節' },
                { en: 'knowing when to ask for help', zh: '知道什麼時候該求助' },
              ],
            },
            {
              en: 'Did you study anything related to your current job?',
              zh: '你念的科系和現在的工作有關嗎？',
              words: [
                { en: 'directly related, yes', zh: '有，直接相關' },
                { en: 'not really — I learned it on the job', zh: '不太相關——我是在工作中學的' },
                { en: 'the degree mattered less than I thought', zh: '學位的重要性比我以為的低' },
                { en: 'it got me the interview, not the skills', zh: '它幫我拿到面試機會，但不是技能' },
              ],
            },
            {
              en: 'What was your favourite subject at school?',
              zh: '你在學校最喜歡的科目是什麼？',
              words: [
                { en: 'I was better at ________ than ________', zh: '我 ________ 比 ________ 強' },
                { en: 'it depended on the teacher', zh: '那要看老師是誰' },
                { en: 'I only started enjoying it later', zh: '我是後來才開始喜歡的' },
                { en: 'nothing I’d call a favourite', zh: '沒有什麼稱得上最喜歡的' },
              ],
            },
            {
              en: 'Do you think you will study again in the future?',
              zh: '你將來還會再進修嗎？',
              words: [
                { en: 'something short rather than another degree', zh: '短期課程，而不是再念一個學位' },
                { en: 'if work paid for it', zh: '如果公司出錢的話' },
                { en: 'I’d like to, but finding the time', zh: '我想，但要找出時間' },
                { en: 'keep up with my field', zh: '跟上自己領域的發展' },
              ],
            },
            {
              en: 'Is it easy to find work where you live?',
              zh: '你住的地方好找工作嗎？',
              words: [
                { en: 'it depends on the industry', zh: '要看產業' },
                { en: 'plenty of work, but not well paid', zh: '工作很多，但薪水不高' },
                { en: 'most people commute to ________', zh: '多數人通勤去 ________' },
                { en: 'easier than it was a few years ago', zh: '比幾年前容易' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'You do not have to be enthusiastic',
          zh: '你不必表現得很熱愛工作',
          bodyEn: 'Nothing is marked for loving your job. “It wasn’t really a plan — I fell into it and stayed” is honest, idiomatic and scores better than an invented vocation. Candidates often perform enthusiasm they do not have, and performed enthusiasm is one of the things that makes an answer sound prepared.',
          bodyZh: '沒有任何分數是給「熱愛工作」的。「其實不是計畫好的——我誤打誤撞進去，然後就留下來了」既誠實、又道地，分數比編造出來的使命感更好。考生常常演出自己其實沒有的熱情，而演出來的熱情，正是讓回答聽起來像背稿的原因之一。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'practice',
      n: 3,
      en: 'Practice',
      zh: '練習',
      blocks: [
        {
          t: 'pad',
          en: 'Your own one-sentence version',
          zh: '你自己的一句話版本',
          hintEn: 'Key words only. Nothing here is saved, and a reload clears it.',
          hintZh: '只寫關鍵字。這裡不會儲存任何內容，重新整理即清空。',
          rows: [
            {
              en: 'What your company or school actually makes or does',
              zh: '你的公司或學校實際上在做什麼、生產什麼',
              ideas: [
                { en: 'a factory that makes ________', zh: '一家生產 ________ 的工廠' },
                { en: 'a company that helps other companies ________', zh: '一家幫其他公司 ________ 的公司' },
              ],
            },
            {
              en: 'What you personally do all day, in verbs',
              zh: '你整天實際在做什麼，用動詞寫',
              ideas: [
                { en: 'find out why things go wrong', zh: '找出問題出在哪裡' },
                { en: 'explain ________ to people who are not ________', zh: '向不是 ________ 的人解釋 ________' },
              ],
            },
            {
              en: 'One thing about it you would genuinely complain about',
              zh: '一件你真心會抱怨的事',
              ideas: [
                { en: 'the hours / the commute / the paperwork', zh: '工時／通勤／文書作業' },
                { en: 'too many meetings about meetings', zh: '太多「為了開會而開的會」' },
              ],
            },
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
          instructionEn: 'Answer “do you work or are you a student?” and then three follow-ups, without stopping. Record it and listen back.',
          instructionZh: '先回答「你是在工作還是在念書？」，接著連續回答三題追問，中間不停。錄下來回聽。',
          checklist: [
            { en: 'Someone outside your industry would understand the first answer', zh: '你這一行以外的人聽得懂你的第一個回答' },
            { en: 'You used verbs, not a job title, to describe the work', zh: '你用動詞而不是職稱來描述工作' },
            { en: 'No jargon you did not immediately explain', zh: '沒有任何未立刻解釋的行話' },
            { en: 'One honest complaint', zh: '一個誠實的抱怨' },
            { en: 'Each answer between fifteen and thirty-five seconds', zh: '每個回答落在十五到三十五秒之間' },
          ],
        },
      ],
    },
  ],
};
