/* Recording Practice — passages to read aloud and record.

   One page, one passage per session, newest first. A passage is a short piece
   written out of what the student already said in class, so the words are
   hers before she ever reads them: the practice is delivery, not composition.

   ADDING A PASSAGE
   ----------------
   Copy the last entry in `passages`, change `id`, `date` and the titles, and
   paste the paragraphs. Put it at the BOTTOM of the array — the array stays
   chronological, the page reverses it, the same rule the notebooks use.

   HOW A PARAGRAPH IS SPOKEN
   -------------------------
   The renderer splits each paragraph into sentences and gives every one its
   own small 🔊, and the paragraph keeps a 🔊 of its own. Both exist because
   they practise different things: a sentence to copy the shape of, a
   paragraph to hold a pace across. Nothing here is scored and nothing is
   recorded by the page — the recording happens in whatever app she already
   uses, and comes back on LINE.

   The Chinese is a safety net, not the text: it stays behind a 中 chip, and
   the instruction says to read from the English.
*/

const PRACTICE = {
  title: 'Recording Practice',
  titleZh: '錄音練習',
  dateLabel: '2026/10/17',
  kicker: '職場英語 · 朗讀與錄音',

  intro: {
    en: 'Short pieces to read aloud and record. Each one is built out of something you already said in a lesson, so the words are yours before you start — what is being practised is how you say them.',
    zh: '一些可以唸出來、錄下來的短文。每一篇都是從你課堂上說過的內容整理出來的，所以在開始之前，這些話本來就是你的——要練的是你怎麼把它們說出來。',

    stepsEn: 'How to work a passage',
    stepsZh: '一篇文章的練習方式',
    steps: [
      {
        en: 'Read it through silently once, and find the places you would pause.',
        zh: '先默讀一次，找出你會停頓的地方。',
      },
      {
        en: 'Play your teacher’s reading first — under the title for a whole take, under a paragraph for that paragraph — and copy it: the rhythm, where the voice rises, where it waits. Scrub back and play a phrase again as often as you need.',
        zh: '先聽老師的示範——整篇的在標題下方，單段的在那一段下面——然後模仿它：節奏、聲音在哪裡上揚、在哪裡停住。可以把進度條拉回去，同一句想聽幾次都行。',
      },
      {
        en: 'Tap 🔊 on a sentence you are unsure of. That one is the machine voice: use it for the sounds and the word stress, not for intonation — it has none to borrow.',
        zh: '對沒把握的句子點 🔊。那是機器的聲音：拿它練發音和重音就好，不要拿它練語調——它沒有語調可以借。',
      },
      {
        en: 'Read the whole passage aloud twice before you record anything.',
        zh: '正式錄之前，先整篇大聲唸兩次。',
      },
      {
        en: 'Record it in one take. Stopping to fix a word teaches you to stop.',
        zh: '一次錄完。中途停下來改一個字，等於在練習「停下來」。',
      },
      {
        en: 'Listen back once, note one thing to change, and send it to me on LINE.',
        zh: '回聽一次，記下一個想改的地方，然後用 LINE 傳給我。',
      },
    ],

    listenEn: 'What to listen for when you play it back',
    listenZh: '回聽的時候聽什麼',
    listen: [
      { en: 'Did you run out of breath anywhere? That is a pause you skipped, not a lung problem.', zh: '有沒有哪裡喘不過氣？那是你漏掉了一個停頓，不是肺活量的問題。' },
      { en: 'Are the sentence endings still there, or do they fade?', zh: '句尾還在嗎，還是愈來愈弱？' },
      { en: 'Did the speed creep up? Most people get faster when they are unsure.', zh: '速度有沒有愈唸愈快？多數人在沒把握的時候會加速。' },
      { en: 'Pick one word you would say differently next time. One, not five.', zh: '挑一個你下次會唸得不一樣的字。一個就好，不要五個。' },
    ],
  },

  passages: [
    {
      id: 'ai-agents',
      date: '2026-10-17',
      dateEn: '17 October 2026',
      dateZh: '2026 年 10 月 17 日',
      en: 'The AI agents we are building',
      zh: '我們正在建置的 AI 代理',

      leadEn: 'From your own account of the project: what it is for, who builds it first, and what you think it will and will not change.',
      leadZh: '出自你自己對這個專案的說明：它是為了什麼、誰先建、以及你認為它會改變什麼、不會改變什麼。',

      paras: [
        {
          en: 'My company is starting to use AI agents to support our work. Our main goal is to save time on routine tasks and make information easier to find.',
          zh: '我的公司正開始使用 AI 代理來支援工作。我們的主要目標是節省例行工作的時間，並讓資訊更容易取得。',
        },
        {
          en: 'First, a small group of key users from different departments will build the agents. Later, other employees will be able to use them. For example, I am learning how to build an agent that calculates sales bonuses. Another agent could answer questions about company policies.',
          zh: '首先，由不同部門的一小群主要使用者建立 AI 代理，之後其他員工也能使用。例如，我正在學習建立能計算業務獎金的 AI 代理。另一個代理則可以回答公司政策的相關問題。',
        },
        {
          en: 'We also want to build a knowledge base. This can help us keep important knowledge when experienced employees leave or retire.',
          zh: '我們也希望建立知識庫，幫助公司在資深員工離職或退休後，仍能保留重要知識。',
        },
        {
          en: 'I think AI may reduce the number of some entry-level positions. However, we will still need people to check results, handle special requests, and make decisions.',
          zh: '我認為 AI 可能減少部分初階職位的數量。不過，我們仍需要人員檢查結果、處理特殊需求，以及做出決策。',
        },
        {
          en: 'If AI gives me more time, I want to find tools that help employees improve their skills. In our retail business, we need to keep stores running with fewer staff. AI could handle routine tasks so our employees have more time to serve customers.',
          zh: '如果 AI 讓我有更多時間，我希望尋找能協助員工提升技能的工具。在零售業，我們需要在人力較少的情況下維持門市營運。AI 可以處理例行工作，讓員工有更多時間服務顧客。',
        },
      ],

      /* The handful of phrases in this passage that are worth being able to
         say without thinking. Kept short on purpose: a reading page is not a
         vocabulary page, and five is what survives one sitting. */
      watchEn: 'Phrases worth owning from this one',
      watchZh: '這篇裡值得記住的說法',
      watch: [
        { en: 'to support our work', zh: '支援我們的工作' },
        { en: 'save time on routine tasks', zh: '節省例行工作的時間' },
        { en: 'build a knowledge base', zh: '建立知識庫' },
        { en: 'entry-level positions', zh: '初階職位' },
        { en: 'handle special requests', zh: '處理特殊需求' },
      ],
    },
  ],
};
