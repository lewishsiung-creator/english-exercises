/* Work — IELTS Speaking Part 3, adult one-to-one.

   WRITTEN FOR THIS SITE, not taken from a handout. The questions, the language
   under them and all the Chinese are the site's.

   The topic this course's learners know most about and answer worst, because
   knowing it pulls them into their own job. Part 3 is asking about work, not
   about yours. The notes keep returning to that.
*/

const LESSON = {
  id: 'work',
  title: 'Work',
  titleZh: '工作',

  intro: {
    en: 'The one topic where you are the expert, which is exactly the danger: the examiner is not asking about your job. Your own working life is the best example you own — but it has to arrive as evidence for a general point, never instead of one.',
    zh: '這是唯一一個你本身就是專家的主題，而危險正在這裡：考官問的不是你的工作。你自己的職涯是你最好的例子——但它必須以「通則的佐證」出現，絕不能用來取代通則。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'answer about work in general and use your own job only as evidence', zh: '用通則談工作，並且只把自己的工作當成佐證' },
      { en: 'weigh pay against satisfaction without sitting on the fence', zh: '衡量薪水與成就感，而且不騎牆' },
      { en: 'describe how work has changed as cause and consequence', zh: '把工作的變化講成因果關係' },
      { en: 'say what an employer owes an employee, and where that stops', zh: '說出雇主該為員工做什麼，以及界線在哪裡' },
    ],
  },

  source: {
    en: 'Written for this page. Like Education, Technology and Environment, this lesson does not come from a handout — the questions, the language and the Chinese are all the site’s.',
    zh: '本頁為本站自行撰寫。與〈教育〉〈科技〉〈環境〉相同，本課並非出自講義：題目、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'what-work-is-for',
      n: 1,
      en: 'What work is for',
      zh: '工作是為了什麼',
      blocks: [
        {
          t: 'lead',
          en: 'The value questions. Every one of them can be answered honestly in two directions, which is why they are asked — the examiner wants to hear you choose and then defend the choice against the obvious objection.',
          zh: '價值類題目。每一題都可以誠實地往兩個方向回答，這正是它們被問的原因——考官想聽你做出選擇，然後面對那個顯而易見的反駁替自己辯護。',
        },
        {
          t: 'qbank',
          en: 'Questions 1–5',
          zh: '第 1–5 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'What makes a job satisfying?',
              zh: '什麼樣的工作才讓人有成就感？',
              words: [
                { en: 'job satisfaction', zh: '工作成就感' },
                { en: 'a sense of purpose', zh: '意義感' },
                { en: 'see the result of your own work', zh: '看得到自己工作的成果' },
                { en: 'be trusted to make decisions', zh: '被信任去做決定' },
                { en: 'recognition from colleagues', zh: '來自同事的肯定' },
              ],
            },
            {
              en: 'Is a high salary more important than job satisfaction?',
              zh: '高薪比工作成就感更重要嗎？',
              words: [
                { en: 'it depends where you are in your life', zh: '要看你處在人生哪個階段' },
                { en: 'above a certain point money matters less', zh: '過了某個門檻，錢的影響就變小' },
                { en: 'financial security', zh: '經濟上的安全感' },
                { en: 'you cannot eat job satisfaction', zh: '成就感不能當飯吃' },
                { en: 'burn out', zh: '職業倦怠' },
              ],
            },
            {
              en: 'Why do some people prefer to work for themselves?',
              zh: '為什麼有些人偏好自己當老闆？',
              words: [
                { en: 'be your own boss', zh: '自己當老闆' },
                { en: 'set your own hours', zh: '自己安排工時' },
                { en: 'no steady income', zh: '沒有穩定收入' },
                { en: 'the freedom comes with the risk', zh: '自由伴隨著風險' },
              ],
            },
            {
              en: 'Why do some people stay in jobs they dislike?',
              zh: '為什麼有些人留在自己不喜歡的工作裡？',
              words: [
                { en: 'financial commitments', zh: '經濟上的負擔' },
                { en: 'the devil you know', zh: '寧可面對已知的麻煩' },
                { en: 'sunk time and training', zh: '已經投入的時間與訓練' },
                { en: 'leaving feels riskier than staying', zh: '離開感覺比留下更冒險' },
              ],
            },
            {
              en: 'Is it fair that some jobs are paid much more than others?',
              zh: '有些工作薪水比其他工作高出許多，這公平嗎？',
              words: [
                { en: 'supply and demand', zh: '供需' },
                { en: 'essential work is often badly paid', zh: '必要的工作往往待遇很差' },
                { en: 'reward scarcity rather than value', zh: '獎勵的是稀缺性而不是價值' },
                { en: 'the pandemic made that visible', zh: '疫情讓這件事變得明顯' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Question 5 is the one worth preparing',
          zh: '第 5 題最值得事先想過',
          bodyEn: 'It looks like a fairness question and is really an economics one: pay tracks how hard someone is to replace, not how much they matter. Say that, then give the uncomfortable example — nurses and refuse collectors against people who move money around — and you have an answer with a real argument in it instead of a sentiment.',
          bodyZh: '它看起來是公平問題，其實是經濟問題：薪水反映的是「這個人多難被取代」，而不是「他有多重要」。把這點講出來，再給一個令人不舒服的例子——護理師、清潔隊員，對照那些在金融市場裡搬錢的人——你的回答就有了真正的論證，而不只是一種情緒。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'how-it-changed',
      n: 2,
      en: 'How work has changed',
      zh: '工作如何改變了',
      blocks: [
        {
          t: 'lead',
          en: 'Change questions, and the place where a candidate’s own twenty years get mistaken for the world’s. Say “people” and give the trend; your own job comes in afterwards, as the example.',
          zh: '變化類題目，也是考生最容易把自己的二十年當成全世界的地方。先說 people、先給趨勢；你自己的工作稍後再進場，當例子用。',
        },
        {
          t: 'qbank',
          en: 'Questions 6–10',
          zh: '第 6–10 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'How has the way people work changed in the last twenty years?',
              zh: '過去二十年，人們的工作方式有什麼改變？',
              words: [
                { en: 'work remotely', zh: '遠距工作' },
                { en: 'fewer jobs for life', zh: '終身雇用的工作變少了' },
                { en: 'always reachable', zh: '隨時都找得到人' },
                { en: 'flatter organisations', zh: '更扁平的組織' },
                { en: 'the office stopped being the only place', zh: '辦公室不再是唯一的地點' },
              ],
            },
            {
              en: 'Do you think people today change jobs more often than in the past?',
              zh: '你認為現在的人換工作比以前頻繁嗎？',
              words: [
                { en: 'job-hopping', zh: '頻繁換工作' },
                { en: 'loyalty is no longer rewarded', zh: '忠誠不再被獎勵' },
                { en: 'a pay rise comes from moving', zh: '加薪要靠換工作' },
                { en: 'less stigma than there was', zh: '比以前少了許多負面眼光' },
              ],
            },
            {
              en: 'Should companies allow employees to work from home?',
              zh: '公司應該讓員工在家工作嗎？',
              words: [
                { en: 'cut out the commute', zh: '省掉通勤' },
                { en: 'harder to train new staff', zh: '新人比較難帶' },
                { en: 'trust rather than supervision', zh: '靠信任而不是盯梢' },
                { en: 'it suits some roles and not others', zh: '有些職務適合，有些不適合' },
                { en: 'a hybrid arrangement', zh: '混合辦公制' },
              ],
            },
            {
              en: 'Do you think people work longer hours than they used to?',
              zh: '你認為現在的人工時比以前長嗎？',
              words: [
                { en: 'the hours look the same on paper', zh: '帳面上的工時看起來一樣' },
                { en: 'work follows you home', zh: '工作跟著你回家' },
                { en: 'blur the line between work and home', zh: '模糊工作與生活的界線' },
                { en: 'presenteeism', zh: '為了被看見而留在公司' },
              ],
            },
            {
              en: 'What are the advantages and disadvantages of working in a large company?',
              zh: '在大公司工作有哪些優缺點？',
              words: [
                { en: 'job security', zh: '工作保障' },
                { en: 'structured training', zh: '有制度的訓練' },
                { en: 'a small part of something big', zh: '龐大體系裡的一小塊' },
                { en: 'decisions take longer', zh: '決策比較慢' },
                { en: 'room to move sideways', zh: '有橫向調動的空間' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: '“It depends on the job” is a beginning, not an answer',
          zh: '「要看是什麼工作」是開頭，不是答案',
          bodyEn: 'Three of these five invite it, and said alone it is a way of not answering. Said and then completed, it is strong: *It depends on the job — for anything that needs concentration, home wins; for anything where you learn by overhearing people, it does not.* The second half is the part being marked.',
          bodyZh: '這五題裡有三題在引你說這句話，而單獨說出來等於沒有回答。但說了之後把它補完，就很有力：「要看是什麼工作——需要高度專注的，在家比較好；靠在旁邊聽別人講話來學的，就不是。」被評分的是後半段。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'what-is-owed',
      n: 3,
      en: 'What is owed, and what is coming',
      zh: '雇主該給什麼，以及接下來會怎樣',
      blocks: [
        {
          t: 'lead',
          en: 'The analytical end: obligations and forecasts. Both reward a limit — saying where a duty stops is more convincing than saying a duty exists.',
          zh: '分析性的一端：義務與預測。兩者都獎勵「設界線」——說出一項責任到哪裡為止，比說它存在更有說服力。',
        },
        {
          t: 'qbank',
          en: 'Questions 11–15',
          zh: '第 11–15 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Should employers care about their employees’ mental health?',
              zh: '雇主應該關心員工的心理健康嗎？',
              words: [
                { en: 'it is in their own interest', zh: '這符合他們自己的利益' },
                { en: 'staff turnover', zh: '員工流動率' },
                { en: 'fix the workload, not just offer counselling', zh: '要處理的是工作量，而不只是提供諮商' },
                { en: 'there is a limit to what an employer can reach', zh: '雇主能介入的範圍有其極限' },
              ],
            },
            {
              en: 'How can companies keep good employees?',
              zh: '公司可以如何留住好員工？',
              words: [
                { en: 'retain staff', zh: '留住人才' },
                { en: 'a clear path upwards', zh: '清楚的升遷路徑' },
                { en: 'people leave managers, not companies', zh: '員工離開的是主管，不是公司' },
                { en: 'pay is the floor, not the ceiling', zh: '薪水是下限，不是上限' },
              ],
            },
            {
              en: 'How important is work-life balance?',
              zh: '工作與生活的平衡有多重要？',
              words: [
                { en: 'work-life balance', zh: '工作與生活的平衡' },
                { en: 'switch off', zh: '把工作關掉' },
                { en: 'balance is not the same as fewer hours', zh: '平衡不等於工時更短' },
                { en: 'it changes with your circumstances', zh: '它會隨著你的處境改變' },
              ],
            },
            {
              en: 'What skills will be most valuable in the job market in the future?',
              zh: '未來就業市場上最有價值的能力是什麼？',
              words: [
                { en: 'transferable skills', zh: '可遷移的能力' },
                { en: 'anything a machine cannot judge', zh: '機器無法判斷的事' },
                { en: 'working with people', zh: '與人協作' },
                { en: 'the ability to retrain', zh: '重新學習的能力' },
              ],
            },
            {
              en: 'Will people still retire at the same age in the future?',
              zh: '未來人們還會在同樣的年紀退休嗎？',
              words: [
                { en: 'an ageing population', zh: '高齡化社會' },
                { en: 'work later but more flexibly', zh: '工作到更晚，但更有彈性' },
                { en: 'fund a longer retirement', zh: '支應更長的退休生活' },
                { en: 'retire in stages rather than all at once', zh: '分階段退休，而不是一次停止' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Name the limit and you sound like an adult',
          zh: '說出界線，就會像個成年人',
          bodyEn: 'On question 11, “yes, employers should care” is what everyone says. The answer that lands adds where it stops: an employer can fix a workload, and an employer cannot fix a divorce. Any obligation question in Part 3 improves the moment you mark its edge.',
          bodyZh: '第 11 題，「是的，雇主應該關心」是每個人都會說的話。真正站得住的回答會加上界線：雇主可以調整工作量，但雇主沒辦法處理一場離婚。Part 3 裡任何關於責任義務的題目，只要你標出它的邊界，立刻就好了一截。',
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
            { en: 'job satisfaction', zh: '工作成就感' },
            { en: 'work-life balance', zh: '工作與生活的平衡' },
            { en: 'staff turnover', zh: '員工流動率' },
            { en: 'transferable skills', zh: '可遷移的能力' },
            { en: 'burn out', zh: '職業倦怠' },
            { en: 'blur the line between work and home', zh: '模糊工作與生活的界線' },
            { en: 'people leave managers, not companies', zh: '員工離開的是主管，不是公司' },
            { en: 'pay is the floor, not the ceiling', zh: '薪水是下限，不是上限' },
            { en: 'reward scarcity rather than value', zh: '獎勵的是稀缺性而不是價值' },
            { en: 'there is a limit to what an employer can reach', zh: '雇主能介入的範圍有其極限' },
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
            { en: 'The first sentence is about people, not about your job', zh: '第一句談的是「人們」，不是你的工作' },
            { en: 'Your own job appears, but as the example', zh: '你的工作有出現，但是當例子用' },
            { en: 'A choice made, and the obvious objection answered', zh: '做了選擇，並回應了那個顯而易見的反駁' },
            { en: 'A limit named, on any question about what is owed', zh: '遇到責任義務題時，說出了界線' },
            { en: 'A conclusion in one sentence', zh: '一句話的結論' },
          ],
        },
      ],
    },
  ],
};
