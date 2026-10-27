/* Say It Another Way — IELTS Speaking Part 3, adult one-to-one.

   The counterweight to the rest of the course. Everything else here hands the
   learner language: phrase banks, sentence frames, model answers. That is how
   you build range, and it is also how you build a candidate who recites. This
   lesson exists to pull the other way.

   It is the one Part 3 lesson written for this site rather than taken from a
   handout. The questions it reuses all come from banks already in the course;
   what is new is the framing, the two-answer pairs, and the paraphrase drill.

   Teach it after area-answer and ninety-seconds, once there is something to
   un-memorise, and before the topic lessons rather than after — a learner who
   meets four phrase banks first has already formed the habit this lesson is
   trying to prevent.
*/

const LESSON = {
  id: 'say-it-another-way',
  title: 'Say It Another Way',
  titleZh: '換個說法',

  intro: {
    en: 'Everything else in this course hands you language. This lesson is about not sounding like it. An examiner can hear a rehearsed answer, and what it costs is larger than almost anything it buys.',
    zh: '這門課其他部分都在給你語言。這一課要處理的是：別讓人聽出來。考官聽得出背過的回答，而它的代價，幾乎總是大過它換來的東西。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'recognise what makes an answer sound rehearsed', zh: '辨認出一個回答為什麼聽起來像背的' },
      { en: 'give two different, equally good answers to one question', zh: '對同一道題，給出兩個不同但一樣好的回答' },
      { en: 'replace a borrowed example with one of your own', zh: '把借來的例子換成你自己的' },
      { en: 'paraphrase the examiner’s question before answering it', zh: '先把考官的問題換句話說，再回答' },
    ],
  },

  source: {
    en: 'Written for this page. The questions are taken from the course’s own banks; the paired answers and the drills are new.',
    zh: '本頁為本站自行撰寫。題目取自本課程既有題庫，成對的答案與練習為新寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'how-it-sounds',
      n: 1,
      en: 'How a memorised answer gives itself away',
      zh: '背過的回答會怎麼露餡',
      blocks: [
        {
          t: 'lead',
          en: 'Nobody is caught because an examiner recognises the sentence. They are caught because the answer stops behaving like the rest of the conversation.',
          zh: '沒有人是因為考官認得那個句子而被抓到的。他們被抓到，是因為那段回答的「行為」突然和對話的其他部分不一樣了。',
        },
        {
          t: 'frames',
          en: 'The four tells',
          zh: '四個破綻',
          hintEn: 'Tap 🔊 to hear one. These are what the examiner notices, in the order they usually notice them.',
          hintZh: '點 🔊 可聽一次。這是考官會注意到的事，依照他們通常注意到的順序排列。',
          items: [
            { en: 'The fluency jumps. The rest of the test has pauses in it; this stretch has none.', zh: '流暢度突然跳上去。測驗其他地方都有停頓，這一段卻完全沒有。' },
            { en: 'The vocabulary jumps. Words appear that have not appeared anywhere else in fourteen minutes.', zh: '字彙突然跳上去。出現了十四分鐘裡其他地方都沒出現過的詞。' },
            { en: 'The intonation flattens. A rehearsed sentence is recited at one pitch; a thought is not.', zh: '語調變平。背過的句子是用同一個音高唸出來的；真正在想的句子不是。' },
            { en: 'The answer does not quite fit. It answers a near neighbour of the question that was asked.', zh: '回答有點對不上。它回答的是「和題目很像的另一題」。' },
          ],
        },
        {
          t: 'note',
          en: 'The fourth one does the most damage',
          zh: '第四個傷得最重',
          bodyEn: 'The first three cost you marks under Pronunciation and Fluency. The fourth costs you under Coherence, which is the criterion Part 3 exists to test — and it is also the one a candidate cannot argue with afterwards. If the examiner asks about small businesses and you answer about shopping habits, no amount of good vocabulary repairs it.',
          bodyZh: '前三個讓你在發音與流暢度上失分。第四個讓你在連貫性上失分——而連貫性正是 Part 3 存在的目的，也是事後最沒得辯的一項。考官問的是小型企業，你答的是購物習慣，再好的字彙都補不回來。',
        },
        {
          t: 'note',
          en: 'What this lesson is not saying',
          zh: '這一課沒有在說的事',
          bodyEn: 'Not: stop learning phrases. A Band 7 needs range, and range comes from exactly the banks in the other lessons. The distinction is between carrying language into a question and carrying an answer into it. A phrase is a tool; a paragraph is a script.',
          bodyZh: '它沒有在說「別再背片語」。Band 7 需要語言廣度，而廣度正是來自其他課的那些字庫。真正的分野是：把「語言」帶進題目，還是把「答案」帶進題目。片語是工具，整段話是講稿。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'two-answers',
      n: 2,
      en: 'One question, two good answers',
      zh: '同一題，兩個好答案',
      blocks: [
        {
          t: 'lead',
          en: 'The quickest cure for a script is proof that there was never one right answer. Here is the same question answered twice, taking opposite positions. Both would score the same.',
          zh: '治講稿最快的方法，是證明這題從來就沒有標準答案。以下是同一道題的兩個回答，立場相反。兩個拿到的分數會一樣。',
        },
        {
          t: 'question',
          en: 'Should companies be allowed to delete negative reviews?',
          zh: '公司應該被允許刪除負面評論嗎？',
          shape: 'A.R.E.A., either way',
          shapeZh: '四步回答法，兩種方向皆可',
        },
        {
          t: 'model',
          en: 'Answer A — mostly yes',
          zh: '回答 A — 傾向支持',
          hintEn: 'This is the answer the A.R.E.A. lesson works through.',
          hintZh: '這是 A.R.E.A. 那一課完整示範過的回答。',
          parts: [
            {
              tag: 'Answer', tagZh: '立場',
              en: 'Yes, under certain conditions.',
              zh: '是的，在特定情況下可以。',
            },
            {
              tag: 'Reason', tagZh: '理由',
              en: 'Some reviews are fake, offensive, or have nothing to do with the actual customer experience.',
              zh: '有些評論是假的、帶有攻擊性，或者和實際的顧客經驗完全無關。',
            },
            {
              tag: 'Balance', tagZh: '另一面',
              en: 'That said, an honest complaint should never be removed just for being inconvenient.',
              zh: '話雖如此，誠實的抱怨絕不該只因為「造成困擾」就被移除。',
            },
          ],
        },
        {
          t: 'model',
          en: 'Answer B — mostly no',
          zh: '回答 B — 傾向反對',
          hintEn: 'Opposite position, same structure, same band. Notice it concedes exactly what A asserts.',
          hintZh: '立場相反、結構相同、分數相同。注意它讓步的，正好就是 A 主張的那一點。',
          parts: [
            {
              tag: 'Answer', tagZh: '立場',
              en: 'No, I do not think they should — at least not by their own judgment.',
              zh: '不，我認為不該——至少不該由他們自己判斷。',
            },
            {
              tag: 'Reason', tagZh: '理由',
              en: 'The company is not a neutral party. Once it can decide which criticism disappears, the ratings stop meaning anything.',
              zh: '公司不是中立的一方。一旦它能決定哪些批評消失，評分就不再有任何意義了。',
            },
            {
              tag: 'Balance', tagZh: '另一面',
              en: 'Obviously fake or abusive reviews do have to go, but that call should sit with the platform rather than the business being reviewed.',
              zh: '明顯造假或惡意的評論當然必須移除，但這個決定應該由平台來做，而不是被評論的那家店。',
            },
          ],
        },
        {
          t: 'note',
          en: 'Notice what the two answers share',
          zh: '注意這兩個回答共用的東西',
          bodyEn: 'Both answer in the first sentence. Both give one reason, not three. Both concede the other side before finishing. The structure is identical and the content is opposite — which is the whole point. The structure is what you rehearse; the content is what you must not.',
          bodyZh: '兩個都在第一句就表態。兩個都只給一個理由，不是三個。兩個都在收尾前讓步。結構完全一樣，內容完全相反——這正是重點。結構是你可以練熟的，內容則是絕對不能背的。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'your-own-example',
      n: 3,
      en: 'Put your own example in',
      zh: '換上你自己的例子',
      blocks: [
        {
          t: 'lead',
          en: 'The models in this course use borrowed examples — a hotel, a restaurant, a laptop. They are deliberately generic, which also makes them the most obviously second-hand thing in any answer. Yours will always sound better.',
          zh: '這門課的範例答案用的都是借來的例子——飯店、餐廳、筆電。它們刻意寫得通用，而這也讓它們成為整段回答裡最明顯「不是自己的」部分。你自己的例子永遠會更好。',
        },
        {
          t: 'pad',
          en: 'Three examples that are actually yours',
          zh: '三個真正屬於你的例子',
          hintEn: 'Key words only. Nothing here is saved, and a reload clears it.',
          hintZh: '只寫關鍵字。這裡不會儲存任何內容，重新整理即清空。',
          rows: [
            {
              en: 'Something you bought because of a review — or refused to',
              zh: '你因為評論而買下、或因此不買的東西',
              ideas: [
                { en: 'a restaurant you avoided because three people mentioned the same thing', zh: '一家你避開的餐廳，因為有三個人提到同一件事' },
                { en: 'something you bought anyway, and the reviews turned out to be right', zh: '一樣你還是買了的東西，而評論後來證明是對的' },
              ],
            },
            {
              en: 'A time service went wrong, and what the company did next',
              zh: '一次服務出錯的經驗，以及那家公司後來怎麼處理',
              ideas: [
                { en: 'the staff member who stayed calm when you were not', zh: '在你情緒上來時仍然保持冷靜的那位員工' },
                { en: 'the reply that was obviously a template', zh: '那封一看就是罐頭回覆的回信' },
              ],
            },
            {
              en: 'Something in your own city that changed in the last ten years',
              zh: '你的城市裡，過去十年改變了的某樣東西',
              ideas: [
                { en: 'a building that was industrial and is now something else', zh: '一棟以前是工廠、現在變成別的用途的建築' },
                { en: 'a street that got harder or easier to walk down', zh: '一條變得更難走、或更好走的街' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'One real example is worth three borrowed ones',
          zh: '一個真實例子，勝過三個借來的',
          bodyEn: 'It carries detail you do not have to invent, so you speak faster and hesitate less; it is impossible to have memorised, so it reads as thinking; and it is yours, so a follow-up question cannot catch you out. The three above cover most of what this course’s topics will ask you for.',
          bodyZh: '真實例子自帶細節，你不必現編，所以說得更快、猶豫更少；它不可能是背來的，所以聽起來像在思考；而且它是你的，追問也問不倒你。上面那三個，已經涵蓋本課程主題大部分會問到的範圍。',
        },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'paraphrase',
      n: 4,
      en: 'Say the question back first',
      zh: '先把問題說回去',
      blocks: [
        {
          t: 'lead',
          en: 'A short paraphrase before you answer does three jobs at once: it proves you understood, it buys you four seconds of thinking time, and it makes a rehearsed answer almost impossible to deliver, because you have just committed to this question rather than one like it.',
          zh: '回答前先簡短改述一次，同時做到三件事：證明你聽懂了、替自己爭取四秒思考時間，而且幾乎不可能再把背好的答案搬出來——因為你剛剛已經對「這一題」作出承諾，而不是「和它很像的那一題」。',
        },
        {
          t: 'frames',
          en: 'Ways to say it back',
          zh: '改述的說法',
          hintEn: 'Short. One clause, then answer. A long paraphrase is just stalling and sounds like it.',
          hintZh: '要短。一個子句，然後直接回答。改述太長只是在拖時間，而且聽起來就是在拖。',
          items: [
            { en: 'So, whether ________ — I’d say ________.', zh: '所以，關於是不是 ________ ——我會說 ________。' },
            { en: 'Right, why ________ happens. I think ________.', zh: '嗯，為什麼會發生 ________。我認為 ________。' },
            { en: 'That’s really a question about ________, isn’t it. And I think ________.', zh: '這其實是在問 ________，對吧。我認為 ________。' },
            { en: 'Comparing ________ and ________ — the main difference is ________.', zh: '比較 ________ 和 ________ ——主要差異是 ________。' },
            { en: 'Hmm, I haven’t thought about ________ before. My first reaction is ________.', zh: '嗯，我沒想過 ________ 這件事。我的第一反應是 ________。' },
          ],
        },
        {
          t: 'note',
          en: 'Do not repeat the question word for word',
          zh: '不要逐字複述題目',
          bodyEn: 'Echoing it back unchanged scores nothing and wastes the four seconds — the examiner knows what they asked. The paraphrase has to change something: a noun for a synonym, a question into a statement, two ideas into one. That change is the part being marked.',
          bodyZh: '原封不動複述一遍，不會得分，還浪費掉那四秒——考官知道自己問了什麼。改述一定要改動某些東西：名詞換同義詞、問句改成直述句、兩個概念併成一個。被評分的，正是那個改動。',
        },
        {
          t: 'qbank',
          en: 'Say it back, then answer',
          zh: '先說回去，再回答',
          hintEn: 'Pull one. Paraphrase it in one clause, then answer. Questions are from the course’s own banks.',
          hintZh: '抽一題。先用一個子句改述，再回答。題目取自本課程既有題庫。',
          items: [
            { en: 'Why do some people prefer famous brands?', zh: '為什麼有些人偏好知名品牌？' },
            { en: 'Should cities preserve old industrial buildings or replace them with modern developments?', zh: '城市應該保存舊工業建築，還是以現代建築取代？' },
            { en: 'Is it better for customer service to be handled by humans or AI chatbots?', zh: '顧客服務由真人處理比較好，還是由 AI 聊天機器人處理比較好？' },
            { en: 'How might technology change the way goods are delivered in cities in the future?', zh: '未來科技可能如何改變城市裡的貨物配送方式？' },
            { en: 'What can companies learn from customer complaints?', zh: '公司可以從客訴中學到什麼？' },
            { en: 'Do you think people today have too many choices when shopping?', zh: '你認為現在的人購物時選擇太多了嗎？' },
          ],
        },
        {
          t: 'clock',
          en: 'Against the clock',
          zh: '計時進行',
        },
        {
          t: 'task',
          en: 'Say it twice, differently',
          zh: '說兩次，而且要不一樣',
          instructionEn: 'Answer your question. Then answer the same question again, taking the other side or a different reason — and record both. The second one is the one that proves nothing was memorised.',
          instructionZh: '先回答你抽到的題目。接著用相反的立場、或不同的理由，再回答同一題一次——兩次都錄下來。第二次才是真正證明你沒有背稿的那一次。',
          checklist: [
            { en: 'A one-clause paraphrase before the answer', zh: '回答前有一個子句的改述' },
            { en: 'An example that is actually yours', zh: '用了真正屬於你的例子' },
            { en: 'The second answer is genuinely different, not reworded', zh: '第二個回答是真的不同，而不是換句話說' },
            { en: 'Both still answer in the first sentence', zh: '兩次都仍然在第一句就回答' },
            { en: 'Neither sounds smoother than the rest of your speaking', zh: '兩次都沒有比你平常說話更「順」' },
          ],
        },
      ],
    },
  ],
};
