/* Education — IELTS Speaking Part 3, adult one-to-one.

   The commonest Part 3 topic there is, and until now the course had nothing
   on it. Built to the same shape as Fifteen City Questions: a bank of
   questions, each carrying the language it asks for, and no model answers —
   the shape is taught in area-answer and ninety-seconds, and rehearsed here.

   WRITTEN FOR THIS SITE, not taken from a handout. The commerce and city
   clusters came from Lewis's own materials; this one did not, so the
   questions, the language under them and all the Chinese are the site's. It
   is the first topic lesson here with no source behind it, which is worth
   knowing before it is taught from.

   The questions are the ones that recur across published Part 3 material on
   this topic — the examiner's standard moves on education: why something
   changed, who should pay, whether a comparison holds, what happens next.
*/

const LESSON = {
  id: 'education',
  title: 'Education',
  titleZh: '教育',

  intro: {
    en: 'The topic Part 3 returns to more than any other, and the one where candidates most often answer about themselves by mistake. Nobody is asking about your school. They are asking what schooling is for, who should pay for it, and what it should look like in twenty years.',
    zh: 'Part 3 最常回來問的主題，也是考生最容易不小心答成「自己」的主題。沒有人在問你的學校。他們問的是：教育是為了什麼、該由誰買單，以及二十年後它該長什麼樣子。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'talk about schooling in general terms rather than from your own memories', zh: '用通則談教育，而不是靠自己的回憶' },
      { en: 'argue about who should pay for something without listing everyone', zh: '討論「誰該買單」，而不是把所有人列一遍' },
      { en: 'compare two ways of teaching and commit to one', zh: '比較兩種教學方式，並且明確選邊' },
      { en: 'describe a change in education as cause and consequence, not as a complaint', zh: '把教育的變化講成因果，而不是抱怨' },
    ],
  },

  source: {
    en: 'Written for this page. Unlike the other topic lessons here, this one does not come from a handout — the questions, the language and the Chinese are all the site’s.',
    zh: '本頁為本站自行撰寫。與本課程其他主題課不同，本課並非出自講義：題目、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'purpose',
      n: 1,
      en: 'What school is for',
      zh: '教育是為了什麼',
      blocks: [
        {
          t: 'lead',
          en: 'The opening questions of an education set are almost always about purpose. They look simple and they are not: “what should schools teach” has no answer that is not an argument.',
          zh: '教育題組的開場題幾乎都在問「目的」。它們看起來簡單，其實不然：「學校該教什麼」這題，沒有哪個答案不是在論述。',
        },
        {
          t: 'qbank',
          en: 'Questions 1–5',
          zh: '第 1–5 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'What do you think is the main purpose of education?',
              zh: '你認為教育最主要的目的是什麼？',
              words: [
                { en: 'prepare students for the workplace', zh: '為學生進入職場做準備' },
                { en: 'develop critical thinking', zh: '培養批判性思考' },
                { en: 'pass on knowledge and values', zh: '傳遞知識與價值觀' },
                { en: 'become independent adults', zh: '成為獨立的成年人' },
              ],
            },
            {
              en: 'Should schools focus more on academic subjects or practical skills?',
              zh: '學校應該更重視學科，還是實用技能？',
              words: [
                { en: 'academic subjects', zh: '學科科目' },
                { en: 'practical skills', zh: '實用技能' },
                { en: 'vocational training', zh: '技職訓練' },
                { en: 'strike a balance between A and B', zh: '在 A 與 B 之間取得平衡' },
                { en: 'transferable skills', zh: '可遷移的能力' },
              ],
            },
            {
              en: 'How important is it for children to learn subjects they will never use?',
              zh: '讓孩子學一些他們以後永遠用不到的科目，有多重要？',
              words: [
                { en: 'broaden your horizons', zh: '拓展視野' },
                { en: 'a well-rounded education', zh: '全人教育' },
                { en: 'you cannot know in advance', zh: '你沒辦法事先知道' },
                { en: 'learning how to learn', zh: '學會如何學習' },
              ],
            },
            {
              en: 'Do you think exams are a fair way to measure a student’s ability?',
              zh: '你認為考試是衡量學生能力的公平方式嗎？',
              words: [
                { en: 'measure a narrow range of ability', zh: '只測量到很窄的能力範圍' },
                { en: 'perform badly under pressure', zh: '在壓力下表現失常' },
                { en: 'continuous assessment', zh: '持續性評量' },
                { en: 'an objective standard', zh: '客觀的標準' },
                { en: 'teach to the test', zh: '為考試而教' },
              ],
            },
            {
              en: 'Should students have a say in what they study at school?',
              zh: '學生對於自己在學校學什麼，應該有發言權嗎？',
              words: [
                { en: 'have a say in', zh: '在……上有發言權' },
                { en: 'motivation and engagement', zh: '動機與投入' },
                { en: 'too young to judge', zh: '年紀還太小、難以判斷' },
                { en: 'a core curriculum', zh: '核心課程' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Question 1 is where candidates lose Part 3',
          zh: '第 1 題正是考生在 Part 3 失手的地方',
          bodyEn: '“What is education for?” pulls almost everyone into their own schooling — my teacher, my exams, when I was at school. That is a Part 1 answer given in Part 3, and Coherence is marked down for it. The fix is one word: start with *people* or *students*, never *I*. You can arrive at your own experience later as an example; you cannot start there.',
          bodyZh: '「教育是為了什麼？」幾乎會把每個人拉回自己的求學經驗——我的老師、我的考試、我以前念書的時候。那是把 Part 1 的回答拿到 Part 3 來講，連貫性會因此被扣分。解法只有一個字：開頭講 people 或 students，絕不要用 I。你可以稍後把自身經驗當成例子帶進來，但不能從那裡開始。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'who-pays',
      n: 2,
      en: 'Who pays, and who decides',
      zh: '誰買單，誰決定',
      blocks: [
        {
          t: 'lead',
          en: 'The responsibility questions. These are the ones where an answer that blames everyone equally scores nothing — the question is asking you to rank, and ranking is the marked move.',
          zh: '責任類題目。在這裡，「大家都有責任」等於沒有回答——題目要你排序，而排序才是被評分的動作。',
        },
        {
          t: 'qbank',
          en: 'Questions 6–10',
          zh: '第 6–10 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Should university education be free for everyone?',
              zh: '大學教育應該對所有人免費嗎？',
              words: [
                { en: 'tuition fees', zh: '學費' },
                { en: 'funded by taxpayers', zh: '由納稅人負擔' },
                { en: 'equal access to education', zh: '平等的受教機會' },
                { en: 'put a strain on public finances', zh: '對公共財政造成壓力' },
                { en: 'graduates earn more over a lifetime', zh: '大學畢業生一生的所得較高' },
              ],
            },
            {
              en: 'Who should be mainly responsible for a child’s education: parents or schools?',
              zh: '孩子的教育主要該由誰負責：家長還是學校？',
              words: [
                { en: 'take responsibility for', zh: '為……負起責任' },
                { en: 'reinforce what is taught at school', zh: '強化學校教的東西' },
                { en: 'parental involvement', zh: '家長的參與' },
                { en: 'it is not an either-or', zh: '這不是二選一' },
              ],
            },
            {
              en: 'Why are some parents willing to spend a lot of money on private tutoring?',
              zh: '為什麼有些家長願意在課後補習上花很多錢？',
              words: [
                { en: 'private tutoring', zh: '課後補習' },
                { en: 'a competitive education system', zh: '競爭激烈的教育制度' },
                { en: 'fall behind their classmates', zh: '落後同學' },
                { en: 'give their child an edge', zh: '讓孩子取得優勢' },
                { en: 'peer pressure among parents', zh: '家長之間的同儕壓力' },
              ],
            },
            {
              en: 'Does the quality of a school depend mostly on its teachers or its facilities?',
              zh: '一所學校的品質，主要取決於師資還是設備？',
              words: [
                { en: 'well-qualified teachers', zh: '素質良好的師資' },
                { en: 'state-of-the-art facilities', zh: '最先進的設備' },
                { en: 'make the most of what they have', zh: '充分利用現有的資源' },
                { en: 'it comes down to', zh: '關鍵在於' },
              ],
            },
            {
              en: 'Should governments spend more on primary schools or universities?',
              zh: '政府應該把更多經費投入小學，還是大學？',
              words: [
                { en: 'allocate public funds to', zh: '將公共經費撥用於' },
                { en: 'the foundation of everything after it', zh: '後面一切的基礎' },
                { en: 'drive research and innovation', zh: '推動研究與創新' },
                { en: 'the earlier the investment, the greater the return', zh: '投資越早，回報越大' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: '“Both” is not an answer; “both, but” is',
          zh: '「都重要」不是答案，「都重要，但是」才是',
          bodyEn: 'Every question in this step offers two candidates and hopes you will refuse to choose. Choose, and then give the other side its due: *Mainly the schools — but that only works where parents reinforce it at home.* You have still said both things, and you have also answered.',
          bodyZh: '這一步的每一題都給你兩個選項，並期待你拒絕選擇。請選，然後再把另一方該有的分量補上：「主要是學校——但那也只有在家長於家中加以配合時才成立。」你仍然兩件事都講了，而且你確實回答了問題。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'change',
      n: 3,
      en: 'What is changing',
      zh: '正在改變的事',
      blocks: [
        {
          t: 'lead',
          en: 'The analytical end: what technology has already done to classrooms, and what is coming. These reward specific predictions and punish vague optimism.',
          zh: '分析性的一端：科技已經對教室做了什麼，以及接下來會發生什麼。這些題目獎勵具體的預測，懲罰含糊的樂觀。',
        },
        {
          t: 'qbank',
          en: 'Questions 11–15',
          zh: '第 11–15 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'How has technology changed the way children learn?',
              zh: '科技如何改變了孩子的學習方式？',
              words: [
                { en: 'at their own pace', zh: '按照自己的步調' },
                { en: 'information is a click away', zh: '資訊只要一點就有' },
                { en: 'a shorter attention span', zh: '更短的專注時間' },
                { en: 'interactive learning', zh: '互動式學習' },
              ],
            },
            {
              en: 'Is online learning as effective as learning in a classroom?',
              zh: '線上學習和在教室裡學習一樣有效嗎？',
              words: [
                { en: 'face-to-face interaction', zh: '面對面互動' },
                { en: 'self-discipline', zh: '自律' },
                { en: 'it depends on the subject', zh: '這要看科目' },
                { en: 'the social side of school', zh: '學校的社交面向' },
                { en: 'reach students in remote areas', zh: '觸及偏遠地區的學生' },
              ],
            },
            {
              en: 'Will teachers still be necessary in the future?',
              zh: '未來還會需要老師嗎？',
              words: [
                { en: 'be set to change rather than disappear', zh: '會改變而不是消失' },
                { en: 'motivate and reassure', zh: '激勵與安撫' },
                { en: 'deliver content', zh: '傳遞內容' },
                { en: 'a mentor rather than a lecturer', zh: '是引導者而不是講授者' },
              ],
            },
            {
              en: 'Why do some people continue studying throughout their lives?',
              zh: '為什麼有些人一輩子都在持續學習？',
              words: [
                { en: 'lifelong learning', zh: '終身學習' },
                { en: 'retrain for a new career', zh: '為轉職而重新受訓' },
                { en: 'keep up with their field', zh: '跟上自己領域的發展' },
                { en: 'out of curiosity rather than necessity', zh: '出於好奇而非必要' },
              ],
            },
            {
              en: 'How might schools be different in fifty years?',
              zh: '五十年後的學校可能會有什麼不同？',
              words: [
                { en: 'a personalised curriculum', zh: '個人化的課程' },
                { en: 'less emphasis on memorisation', zh: '比較不強調背誦' },
                { en: 'the building may matter less', zh: '校舍可能變得沒那麼重要' },
                { en: 'I would be surprised if ________', zh: '如果 ________，我會覺得意外' },
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'practice',
      n: 4,
      en: 'Practice',
      zh: '練習',
      blocks: [
        {
          t: 'bank',
          en: 'Phrases that work across the whole topic',
          zh: '整個主題都用得上的片語',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'the education system', zh: '教育制度' },
            { en: 'the curriculum', zh: '課程內容' },
            { en: 'rote learning', zh: '死記硬背' },
            { en: 'critical thinking', zh: '批判性思考' },
            { en: 'academic pressure', zh: '升學壓力' },
            { en: 'equal access to education', zh: '平等的受教機會' },
            { en: 'drop out of school', zh: '輟學' },
            { en: 'a well-rounded education', zh: '全人教育' },
            { en: 'learning how to learn', zh: '學會如何學習' },
            { en: 'it comes down to', zh: '關鍵在於' },
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
          instructionEn: 'Pull a question from any bank above. Open its language first, then answer. Record it and listen back.',
          instructionZh: '從上面任一題庫抽一題。先打開該題的用語，再回答。錄下來並回聽。',
          checklist: [
            { en: 'The first sentence talks about people, not about you', zh: '第一句談的是「人們」，不是「你」' },
            { en: 'Two phrases from that question’s own list', zh: '該題用語清單中的兩個片語' },
            { en: 'A choice made, where the question offered two', zh: '題目給了兩個選項時，你做了選擇' },
            { en: 'Your own example, not a borrowed one', zh: '用了自己的例子，而不是借來的' },
            { en: 'A conclusion in one sentence', zh: '一句話的結論' },
          ],
        },
      ],
    },
  ],
};
