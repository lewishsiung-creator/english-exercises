/* Technology in the Classroom — IELTS Speaking Part 3, adult one-to-one.

   The second half of the same handout as computer-games/, and built the same
   way: three questions answered in full in five parts, each with its own
   vocabulary, then the three shapes side by side.

   This sits deliberately close to two question banks already in the course —
   education/ and technology/ — and it is the other kind of lesson. Those hold
   thirty questions between them and no model answers; this holds three answers
   and no bank. Step 1 says so and points at both, because a learner who wants
   more questions on this topic should be sent there rather than left thinking
   three is all there is.

   From the source, unchanged: the three questions and their Chinese, the
   five-part labels and their Chinese, every English sentence of the three
   model answers, and the three vocabulary tables in both languages.

   Written for this page: the Traditional Chinese for the model answers, the
   review chains, and the notes.

   On length: the same deliberate departure as cities/ and computer-games/.
   The handout's teaching note says forty to sixty seconds; this course teaches
   ninety, set on Part 3 in course.js, and the closing note names the handout's
   figure in brackets rather than dropping it.
*/

const LESSON = {
  id: 'tech-in-the-classroom',
  title: 'Technology in the Classroom',
  titleZh: '課堂中的科技',

  intro: {
    en: 'Three questions where the easy answer is enthusiasm and the marked answer is a limit. Technology helps — but with what, for whom, and up to where? All three of these answers find their edge, and the last one is a straight refusal of the premise.',
    zh: '這三題的簡單答案是熱情，拿分的答案是界線。科技有幫助——但幫到什麼、幫到誰、幫到哪裡為止？這三個回答都找出了自己的邊界，而最後一題是直接否定題目的前提。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'praise something and name its limit in the same answer', zh: '在同一個回答裡，既肯定一件事，也說出它的界線' },
      { en: 'agree partly, and say exactly which part', zh: '部分同意，並明確說出是哪一部分' },
      { en: 'separate being familiar with something from being good at it', zh: '區分「熟悉某樣東西」和「用得好」' },
      { en: 'answer a “will X replace Y” question without predicting', zh: '回答「X 會取代 Y 嗎」而不必真的預測未來' },
    ],
  },

  source: {
    en: 'The questions, model answers and vocabulary are taken from Lewis’s Part 3 handout. The Chinese for the model answers and the review was written for this page; everything else is the handout’s own.',
    zh: '題目、範例答案與字彙取自 Lewis 的 Part 3 講義。範例答案與總覽的中文為本頁自行翻譯，其餘皆依講義原文。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'where-this-sits',
      n: 1,
      en: 'Three answers, not a bank',
      zh: '三個回答，不是題庫',
      blocks: [
        {
          t: 'lead',
          en: 'Three questions answered in full, in the structure taught in Cities. If what you want is volume on this topic rather than worked answers, the Education and Technology lessons hold thirty questions between them with the language under each one.',
          zh: '三道題的完整回答，使用「城市」那一課教過的結構。如果你要的是這個主題的「題量」而不是示範答案，〈教育〉與〈科技〉兩課合計有三十題，每一題下方都附了用語。',
        },
        {
          t: 'note',
          en: 'All three of these bend the same way',
          zh: '這三題彎的方向都一樣',
          bodyEn: 'Unlike the games lesson, where the fourth slot varies, every answer here ends by conceding something — technology should complement rather than replace, familiarity is not competence, computers will support rather than replace. That is not an accident of the topic: a question that invites enthusiasm is almost always marked on whether you can also see the limit.',
          bodyZh: '和遊戲那一課第四個欄位各自不同不一樣，這裡每一個回答最後都讓步了——科技應該是補充而不是取代、熟悉不等於能力、電腦會輔助而不是取代。這不是主題碰巧如此：一道引誘你表達熱情的題目，幾乎總是在評「你看不看得見界線」。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'how-it-helps',
      n: 2,
      en: 'How it helps',
      zh: '它如何幫上忙',
      blocks: [
        {
          t: 'question',
          kicker: 'Part 3 · Question 4',
          en: 'In what ways can technology in the classroom be helpful?',
          zh: '科技可以在哪些方面幫助課堂教學？',
          shape: 'Five parts, slot four extends, conclusion concedes',
          shapeZh: '五段式，第四段延伸，結論讓步',
        },
        {
          t: 'model',
          en: 'The answer, in five parts',
          zh: '範例答案，分成五個部分',
          hintEn: 'The conclusion is the only part that disagrees with the rest. That is deliberate.',
          hintZh: '只有結論和前面唱反調。那是刻意的。',
          parts: [
            {
              tag: 'Main idea', tagZh: '核心觀點',
              en: 'I believe technology can significantly improve the learning experience by making lessons more interactive, engaging, and accessible.',
              zh: '我相信科技能讓課堂更具互動性、更吸引人、也更容易接觸，從而大幅改善學習體驗。',
            },
            {
              tag: 'Explanation', tagZh: '解釋原因',
              en: 'One major advantage is that digital tools allow teachers to present information in different formats, such as videos, animations, and interactive exercises. This can help students understand complicated concepts more easily.',
              zh: '一個主要優勢是，數位工具讓老師能以不同形式呈現資訊，例如影片、動畫和互動練習。這能幫助學生更容易理解複雜的概念。',
            },
            {
              tag: 'Example', tagZh: '具體例子',
              en: 'For example, in an English classroom, teachers can use language-learning apps to help students practice pronunciation, improve their listening skills, and receive immediate feedback.',
              zh: '例如，在英文課堂上，老師可以使用語言學習應用程式，幫助學生練習發音、提升聽力，並獲得即時回饋。',
            },
            {
              tag: 'Further development', tagZh: '延伸觀點',
              en: 'Another important benefit is that technology can support personalized learning. Students can learn at their own pace and focus on areas where they need additional practice.',
              zh: '另一個重要的好處是，科技能支援個人化學習。學生可以按照自己的步調學習，並專注在需要加強的部分。',
            },
            {
              tag: 'Conclusion', tagZh: '總結',
              en: 'However, I think technology should be used to complement traditional teaching methods, rather than completely replacing face-to-face interaction between teachers and students.',
              zh: '不過，我認為科技應該用來補充傳統教學方法，而不是完全取代師生之間面對面的互動。',
            },
          ],
        },
        {
          t: 'note',
          en: 'A conclusion that argues with its own answer',
          zh: '一個和自己唱反調的結論',
          bodyEn: 'Four parts say technology is good and the fifth puts a boundary on it. That is not inconsistency — it is the single clearest signal of a Band 7 speaker, because it shows you can hold an enthusiasm and its limit at the same time. On any “in what ways is X helpful?” question, plan the limit first and let the praise fill the middle.',
          bodyZh: '前四段說科技很好，第五段替它劃下界線。這不是前後矛盾——這是 Band 7 說話者最明確的訊號，因為它顯示你能同時掌握「肯定」與「它的極限」。遇到任何「X 在哪些方面有幫助？」的題目，請先規劃界線，再讓肯定的內容填滿中間。',
        },
        {
          t: 'bank',
          en: 'Key vocabulary',
          zh: '關鍵字彙',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'improve the learning experience', zh: '改善學習體驗' },
            { en: 'interactive learning', zh: '互動式學習' },
            { en: 'present information in different formats', zh: '以不同形式呈現資訊' },
            { en: 'practice pronunciation', zh: '練習發音' },
            { en: 'receive immediate feedback', zh: '獲得即時回饋' },
            { en: 'personalized learning', zh: '個人化學習' },
            { en: 'learn at one’s own pace', zh: '按自己的步調學習' },
            { en: 'complement traditional teaching methods', zh: '補充傳統教學方法' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'students-and-teachers',
      n: 3,
      en: 'Students, teachers and devices',
      zh: '學生、老師與裝置',
      blocks: [
        {
          t: 'question',
          kicker: 'Part 3 · Question 5',
          en: 'Do you agree that students are often better at using technology than their teachers?',
          zh: '你是否同意學生通常比老師更擅長使用科技？',
          shape: 'Five parts, slot four balances',
          shapeZh: '五段式，第四段為平衡',
        },
        {
          t: 'model',
          en: 'The answer, in five parts',
          zh: '範例答案，分成五個部分',
          hintEn: '“I partly agree” is only useful if you then say which part. Watch where it does that.',
          hintZh: '「我部分同意」只有在你接著說出「是哪一部分」時才有用。注意它在哪裡做到了。',
          parts: [
            {
              tag: 'Main idea', tagZh: '核心觀點',
              en: 'I partly agree with this statement because younger generations tend to be more familiar with digital devices and new technologies.',
              zh: '我部分同意這個說法，因為年輕世代通常對數位裝置和新科技比較熟悉。',
            },
            {
              tag: 'Explanation', tagZh: '解釋原因',
              en: 'Many students have grown up using smartphones, tablets, and social media, so they often adapt to new technologies more quickly than older generations.',
              zh: '許多學生從小就使用智慧型手機、平板和社群媒體，所以他們適應新科技的速度，通常比年長世代快。',
            },
            {
              tag: 'Example', tagZh: '具體例子',
              en: 'For instance, students may find it easier to learn how to use a new app or online platform, while some teachers might need additional training to become comfortable with the same technology.',
              zh: '例如，學生可能比較容易學會使用一個新的應用程式或線上平台，而有些老師則需要額外的訓練，才能熟練同一項科技。',
            },
            {
              tag: 'Further development', tagZh: '延伸觀點',
              en: 'However, being familiar with technology doesn’t necessarily mean knowing how to use it effectively for learning. Teachers often have more experience in evaluating information, selecting reliable resources, and applying technology to educational purposes.',
              zh: '然而，熟悉科技不一定代表知道如何有效地把它用在學習上。老師通常在評估資訊、選擇可靠資源，以及將科技應用於教育目的方面，經驗更豐富。',
            },
            {
              tag: 'Conclusion', tagZh: '總結',
              en: 'So, while students may have stronger practical digital skills in certain areas, I think teachers still play an essential role in helping them use technology responsibly and productively.',
              zh: '所以，儘管學生在某些方面的實際數位技能可能更強，我認為老師在引導他們負責任且有成效地使用科技上，仍然扮演不可或缺的角色。',
            },
          ],
        },
        {
          t: 'note',
          en: 'The distinction is the whole answer',
          zh: '那個區分，就是整個答案',
          bodyEn: 'Familiar with ≠ good at. Once that distinction is made, everything after it writes itself, and the conclusion can concede the first half of the question generously because the second half is already won. Look for this move whenever a question compares two groups: usually they are better at different things, not at the same thing.',
          bodyZh: '「熟悉」不等於「用得好」。一旦做出這個區分，後面的內容就自己長出來了，而結論也可以大方地承認題目的前半，因為後半已經贏了。任何比較兩個群體的題目，都值得找這個動作：通常他們擅長的是「不同的事」，而不是「同一件事的高下」。',
        },
        {
          t: 'bank',
          en: 'Key vocabulary',
          zh: '關鍵字彙',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'younger generations', zh: '年輕世代' },
            { en: 'be familiar with digital devices', zh: '熟悉數位裝置' },
            { en: 'adapt to new technologies', zh: '適應新科技' },
            { en: 'evaluate information', zh: '評估資訊' },
            { en: 'select reliable resources', zh: '選擇可靠資源' },
            { en: 'digital skills', zh: '數位技能' },
            { en: 'use technology responsibly', zh: '負責任地使用科技' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'replace-teachers',
      n: 4,
      en: 'Will computers replace teachers',
      zh: '電腦會取代老師嗎',
      blocks: [
        {
          t: 'question',
          kicker: 'Part 3 · Question 6',
          en: 'Do you believe that computers will ever replace human teachers?',
          zh: '你認為電腦未來有可能取代人類教師嗎？',
          shape: 'Five parts, slot four extends',
          shapeZh: '五段式，第四段為延伸',
        },
        {
          t: 'model',
          en: 'The answer, in five parts',
          zh: '範例答案，分成五個部分',
          hintEn: 'It never predicts. It redefines what teaching is, and the prediction follows from that.',
          hintZh: '它從頭到尾沒有預測。它重新定義了「教學」是什麼，預測自然就跟著出來了。',
          parts: [
            {
              tag: 'Main idea', tagZh: '核心觀點',
              en: 'Personally, I don’t believe computers will ever completely replace human teachers, although artificial intelligence will probably play an increasingly important role in education.',
              zh: '就我個人而言，我不認為電腦有一天會完全取代人類教師，儘管人工智慧在教育中扮演的角色，可能會越來越重要。',
            },
            {
              tag: 'Explanation', tagZh: '解釋原因',
              en: 'Computers are extremely effective at delivering information, providing instant feedback, and creating personalized learning experiences. However, teaching involves much more than simply transferring knowledge.',
              zh: '電腦在傳遞資訊、提供即時回饋，以及創造個人化學習體驗方面極為有效。然而，教學遠遠不只是把知識傳遞出去而已。',
            },
            {
              tag: 'Example', tagZh: '具體例子',
              en: 'For example, a teacher can recognize when a student feels frustrated, lacks confidence, or needs emotional support. A computer might identify mistakes, but it may struggle to understand the emotional and social factors affecting a student’s learning.',
              zh: '例如，老師能察覺到學生什麼時候感到挫折、缺乏自信，或需要情緒上的支持。電腦也許能找出錯誤，但可能難以理解影響一個學生學習的情緒與社會因素。',
            },
            {
              tag: 'Further development', tagZh: '延伸觀點',
              en: 'In addition, teachers help students develop critical thinking skills, build relationships, and learn how to cooperate with others. These are important aspects of education that cannot easily be replaced by technology.',
              zh: '此外，老師還幫助學生培養批判性思考能力、建立人際關係，並學會與人合作。這些都是教育中重要的面向，不容易被科技取代。',
            },
            {
              tag: 'Conclusion', tagZh: '總結',
              en: 'Therefore, I believe the future of education will involve a combination of human teachers and advanced technology, with computers supporting teachers rather than replacing them entirely.',
              zh: '因此，我相信教育的未來會是人類教師與先進科技的結合，電腦輔助老師，而不是完全取代他們。',
            },
          ],
        },
        {
          t: 'note',
          en: 'Answer a prediction question by defining, not forecasting',
          zh: '用「定義」而不是「預言」來回答預測題',
          bodyEn: 'Nobody can tell you what education looks like in fifty years, and an examiner is not marking your accuracy. What this answer does instead is split the job in two — delivering information, and everything else — then concede the first half entirely and defend the second. Any “will X replace Y” question yields to that move, and it is far safer than guessing.',
          bodyZh: '沒有人說得準五十年後的教育長什麼樣，而考官也不是在評你猜得準不準。這個回答做的是另一件事：把「教學」這份工作切成兩半——傳遞資訊，以及其他所有的事——然後完全讓出前半，守住後半。任何「X 會取代 Y 嗎」的題目都適用這個動作，而且比亂猜安全得多。',
        },
        {
          t: 'bank',
          en: 'Key vocabulary',
          zh: '關鍵字彙',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'replace human teachers', zh: '取代人類教師' },
            { en: 'deliver information', zh: '傳遞資訊' },
            { en: 'provide instant feedback', zh: '提供即時回饋' },
            { en: 'personalized learning experiences', zh: '個人化學習體驗' },
            { en: 'emotional support', zh: '情緒支持' },
            { en: 'develop critical thinking skills', zh: '培養批判性思考能力' },
            { en: 'a combination of A and B', zh: 'A 與 B 的結合' },
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
          en: 'Three answers that all end on a limit. Read the chains, then close the models and rebuild one from its shape alone.',
          zh: '三個都以「界線」收尾的回答。先看結構鏈，再把範例收起來，只靠結構重建其中一題。',
        },
        {
          t: 'chain',
          en: 'The three answers at a glance',
          zh: '三個回答總覽',
          hintEn: 'What each one argues, and the order it gets there in.',
          hintZh: '每一題主張什麼，以及它用什麼順序達成。',
          rows: [
            {
              n: 'Q4',
              en: 'How it helps', zh: '它如何幫上忙',
              claimEn: 'Technology improves learning, up to a point.',
              claimZh: '科技改善學習，但有限度。',
              steps: [
                { en: 'Different formats', zh: '不同的呈現形式' },
                { en: 'App example', zh: '應用程式的例子' },
                { en: 'Personalised learning', zh: '個人化學習' },
                { en: 'Complement, not replace', zh: '補充，而非取代' },
              ],
            },
            {
              n: 'Q5',
              en: 'Students and teachers', zh: '學生與老師',
              claimEn: 'They are better at different things, not at the same thing.',
              claimZh: '他們擅長的是不同的事，不是同一件事的高下。',
              steps: [
                { en: 'Familiarity', zh: '熟悉度' },
                { en: 'Example', zh: '例子' },
                { en: 'Familiar ≠ effective', zh: '熟悉不等於用得好' },
                { en: 'Teachers still essential', zh: '老師仍不可或缺' },
              ],
            },
            {
              n: 'Q6',
              en: 'Replacing teachers', zh: '取代老師',
              claimEn: 'Teaching is two jobs; only one of them is replaceable.',
              claimZh: '教學是兩份工作，只有一份可以被取代。',
              steps: [
                { en: 'Concede delivery', zh: '讓出「傳遞資訊」' },
                { en: 'Emotional recognition', zh: '察覺情緒' },
                { en: 'Thinking and relationships', zh: '思考與人際關係' },
                { en: 'A combination', zh: '兩者結合' },
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
            { en: 'In what ways can technology in the classroom be helpful?', zh: '科技可以在哪些方面幫助課堂教學？', tag: 'Conclusion concedes', tagZh: '結論讓步' },
            { en: 'Do you agree that students are often better at using technology than their teachers?', zh: '你是否同意學生通常比老師更擅長使用科技？', tag: 'Slot four balances', tagZh: '第四段平衡' },
            { en: 'Do you believe that computers will ever replace human teachers?', zh: '你認為電腦未來有可能取代人類教師嗎？', tag: 'Slot four extends', tagZh: '第四段延伸' },
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
            { en: 'A limit named somewhere in the answer', zh: '回答中的某處說出了界線' },
            { en: 'Example — something concrete enough to picture', zh: '具體例子——具體到可以想像的畫面' },
            { en: 'A distinction made, not just an opinion given', zh: '做出了一個區分，而不只是給了意見' },
            { en: 'Conclusion — one sentence, then stop', zh: '總結——一句話，然後停下來' },
          ],
        },
        {
          t: 'note',
          en: 'Accurately beats often',
          zh: '用得精準，勝過用得頻繁',
          bodyEn: 'The handout makes this point and it is the right one to end on: a collocation like *personalized learning* or *develop critical thinking skills* is worth something when it is used accurately and worth nothing when it is dropped in to be heard. Two of these used properly will do more for your band than all twenty-two recited.',
          bodyZh: '講義提出了這一點，而它也正適合作為結尾：像 personalized learning 或 develop critical thinking skills 這樣的搭配詞，用得精準才有價值；為了「被聽見」而硬塞進去，就一文不值。好好用對兩個，對你分數的幫助，大過把二十二個全部背出來。',
        },
        {
          t: 'note',
          en: 'Select, do not recite',
          zh: '要挑選，不要背誦',
          bodyEn: 'These are extended models, written to show how far a point can be developed. In the exam, choose the most relevant ideas rather than delivering the whole thing. The length to aim at is the ninety seconds the clock above marks, which is this course’s target across the whole of Part 3. (The handout these came from suggests forty to sixty seconds in its teaching notes, and sixty to ninety in its own practice section; this course teaches the longer answer.)',
          bodyZh: '這些是「延伸版」的範例答案，用意是示範一個論點可以展開到什麼程度。在考場上，請挑選最相關的想法，而不是整段照搬。長度目標是上方計時標示的九十秒，這也是本課程整個 Part 3 的目標。（本課材料出處的講義在教學筆記中建議四十到六十秒，在它自己的練習區塊則寫六十到九十秒；本課程教的是較長的回答。）',
        },
      ],
    },
  ],
};
