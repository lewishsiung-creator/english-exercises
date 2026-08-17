/* Book Discussion Guide — four books, bilingual.

   Built from the 13-page 雙語讀書討論手冊: four book summaries, three
   discussion questions each, and the concept vocabulary behind them. The books
   themselves are not reproduced — each entry is a summary, and the value on the
   page is the questions and the glossary.

   This is a discussion guide, not a drill. There is nothing to get right: the
   only interactions are opening a glossary card, opening the language you
   could use to answer a question, and hearing a sentence read aloud.

   Every visible string is an `en` / `zh` pair. English is shown; the
   Traditional Chinese stays hidden until it is asked for, either line by line
   or with the 中文 switch in the top bar. Anything already sitting behind a
   deliberate reveal — an opened glossary card, an opened list of sentence
   starters — stays bilingual, since a second tap there would only be in the
   way.

   Each book folds. `tagEn` / `tagZh` sit on the book itself rather than in a
   block, because they are the one line that has to stay readable while the book
   is shut — a closed section is a title, a Chinese title and that line.

   Book 01 has a companion page: /happy-sexy-millionaire/ takes the same book
   through a reading passage and the language work. The `link` block is what
   points at it.

   Block types:
     book      the cover card for one book — author, summary, who it is for
     link      a pointer to another page in this site
     discuss   questions to talk through, each with useful language to reveal
     terms     concept vocabulary — English face up, both languages behind a tap
     lead      a framing sentence in italics
     summary   a single line worth reading aloud
     strands   the four books in one line each, at the end
*/

const GUIDE = {
  title: 'Book Discussion Guide',
  titleZh: '雙語讀書討論手冊',
  kicker: '四本改變人生視角的好書',

  source: {
    en: 'Four Books That Reframe How You See Life. Each entry is a summary written for discussion, not an extract from the book.',
    zh: '四本改變人生視角的好書。每一則書介皆為供討論使用的摘要，並非書中原文。',
  },

  intro: {
    en: 'Four books, four arguments, one question underneath all of them. Read a summary, take the three questions in turn, and use the glossary when a word is doing more work than it looks like it is.',
    zh: '四本書、四種主張，底下是同一個問題。先讀書介，再依序談三道討論題；當某個詞承載的意思比表面上多時，就打開詞彙卡。',
    goalsEn: 'How to use this guide:',
    goalsZh: '這份手冊怎麼用：',
    goals: [
      { en: 'Read the summary aloud, or tap 🔊 and follow it.', zh: '把書介唸出來，或按 🔊 跟著聽。' },
      { en: 'Answer each question in English first — the Chinese is one tap away if you need it.', zh: '每道題先用英文回答；需要時，中文就在一個點擊之後。' },
      { en: 'Open “Useful language” only after you have tried without it.', zh: '先試著自己說，真的卡住再打開「可用句型」。' },
      { en: 'Use the glossary cards to argue with the book, not just to translate it.', zh: '詞彙卡是用來跟書對話的，不只是用來翻譯的。' },
      { en: 'Finish on The Common Thread and say which of the four you would read first.', zh: '最後回到「共同主軸」，說說看四本中你會先讀哪一本。' },
    ],
  },

  books: [
    // ================================================================ 01
    {
      id: 'millionaire',
      n: '01',
      en: 'Happy Sexy Millionaire',
      zh: '《快樂性感的百萬富翁》',
      tagEn: 'The cost of chasing the wrong goals',
      tagZh: '追求錯誤目標的代價',
      blocks: [
        {
          t: 'book',
          author: 'Steven Bartlett',
          summary: [
            {
              en: 'Steven Bartlett is the founder of Social Chain. Starting from a bedroom in Manchester, he built the company at 21 and took it public at 27, with a market valuation of nearly £200 million.',
              zh: 'Steven Bartlett 是社群媒體行銷公司 Social Chain 的創辦人。他從曼徹斯特一間房間白手起家，21 歲建立公司，27 歲將公司上市，市值近兩億英鎊。',
            },
            {
              en: 'At 18, he was a broke university dropout from a bankrupt family who wrote in his diary that he wanted to be a “Happy Sexy Millionaire” by 25 — and he did it, building a business worth over $300 million.',
              zh: '他 18 歲時是個出身破產家庭、從大學輟學的年輕人，在日記裡寫下要在 25 歲前成為「快樂性感的百萬富翁」——結果他做到了，建立了一個價值超過三億美元的事業。',
            },
            {
              en: 'But the heart of the book is his admission that he was fundamentally wrong about happiness, love, and success — and the journey he took to find real answers.',
              zh: '但這本書的核心正是：他坦承自己對幸福、愛與成功的理解幾乎全部都是錯的，並分享了他為尋找答案所走過的歷程。',
            },
          ],
          forEn: 'Especially valuable for anyone stepping into adulthood, or those who believe wealth is the only key to happiness.',
          forZh: '特別適合剛踏入成人世界的人，或那些相信財富是幸福唯一關鍵的「追錢族」。',
        },
        {
          t: 'link',
          href: '../happy-sexy-millionaire/',
          en: 'A full lesson on this book',
          zh: '這本書的完整課程',
          noteEn: 'The same story as a reading passage, with the money vocabulary, gap fill and a two-minute speaking task.',
          noteZh: '同一個故事的精讀版本，含金錢詞彙、填空練習與兩分鐘口說任務。',
        },
        {
          t: 'discuss',
          en: 'Discussion questions',
          zh: '延伸討論題',
          items: [
            {
              en: 'Social media shows us a curated version of other people’s success. When you scroll through your feed, which emotions come up most — inspiration, comparison, or something else? What does that tell you about your own definition of success?',
              zh: '社群媒體讓我們看到別人精心篩選過的成功形象。當你滑動動態時，最常浮現的情緒是什麼——是被激勵，還是在比較？這反映出你對「成功」的定義是什麼？',
              starters: [
                { en: 'Honestly, the first thing I feel is usually…', zh: '老實說，我第一個浮現的感覺通常是……' },
                { en: 'It depends whose feed it is — with… I feel…', zh: '這要看是誰的動態——看到……的時候我會覺得……' },
                { en: 'What that probably says about me is…', zh: '這大概說明了我這個人……' },
              ],
            },
            {
              en: 'Bartlett achieved everything he set out to — and still felt empty. Have you ever reached a goal and felt less satisfied than expected? What did that moment teach you?',
              zh: 'Bartlett 達成了所有目標，卻仍感到空虛。你是否曾達到一個目標，滿足感卻不如預期？那個時刻讓你學到了什麼？',
              starters: [
                { en: 'I remember reaching… and feeling almost nothing.', zh: '我記得達成……的時候，幾乎沒什麼感覺。' },
                { en: 'Looking back, the goal was never really about…', zh: '現在回頭看，那個目標其實從來不是為了……' },
                { en: 'What I took from it was…', zh: '我從中學到的是……' },
              ],
            },
            {
              en: 'If you replaced your current profile photo with one that is 100% unfiltered and authentic, what would change — and why does that feel uncomfortable?',
              zh: '如果你把現在的大頭貼換成一張百分之百真實、毫無修飾的照片，會有什麼改變——為什麼光是這個念頭就讓人感到不自在？',
              starters: [
                { en: 'Nothing would change for… but a lot would change for…', zh: '對……來說不會有什麼改變，但對……來說改變很大。' },
                { en: 'The uncomfortable part is not the photo — it is…', zh: '不自在的其實不是照片，而是……' },
                { en: 'I would probably still keep…', zh: '我大概還是會保留……' },
              ],
            },
          ],
        },
        {
          t: 'terms',
          en: 'Glossary',
          zh: '專業詞彙解說',
          hintEn: 'Tap a card for the Chinese and the definition.',
          hintZh: '點一下卡片，看中文與定義。',
          items: [
            {
              en: 'Curated content',
              zh: '精心策展的內容',
              defEn: 'The deliberate selection and presentation of only the most favourable aspects of one’s life for public display, especially on social media.',
              defZh: '刻意挑選並呈現自己生活中最光鮮亮麗的一面，尤其是在社群媒體上。',
            },
            {
              en: 'Comparison mechanism',
              zh: '比較機制',
              defEn: 'The psychological process by which people evaluate themselves relative to others, often triggered by social media, generating feelings of inadequacy or envy.',
              defZh: '人們將自己與他人相比較的心理過程，常由社群媒體動態觸發，往往產生自我懷疑或羨慕的情緒。',
            },
            {
              en: 'Intrinsic success',
              zh: '內在成功',
              defEn: 'Success defined by personal values, meaning, and fulfilment — rather than external markers like money, status, or followers.',
              defZh: '由個人價值觀、意義感與滿足感所定義的成功，而非金錢、地位或追蹤人數等外在指標。',
            },
            {
              en: 'Fulfilment vs. happiness',
              zh: '滿足感 vs. 快樂',
              defEn: 'Happiness is often a short-term emotional state triggered by external events. Fulfilment is a deeper, longer-lasting sense of meaning and purpose that comes from within.',
              defZh: '快樂通常是由外部事件觸發的短暫情緒狀態；滿足感則是更深層、更持久的意義感，源自內心。',
            },
            {
              en: 'Personal branding',
              zh: '個人品牌',
              defEn: 'The conscious effort to shape and project a particular image of yourself to the outside world — common among entrepreneurs, influencers, and professionals.',
              defZh: '刻意塑造並向外界呈現特定自我形象的行為，在企業家、網紅和專業人士之間十分普遍。',
            },
          ],
        },
      ],
    },

    // ================================================================ 02
    {
      id: 'ladder',
      n: '02',
      en: 'The Wealth Ladder',
      zh: '《財富階梯》',
      tagEn: 'Different wealth levels demand different strategies',
      tagZh: '不同財富水準，需要不同策略',
      blocks: [
        {
          t: 'book',
          author: 'Nick Maggiulli',
          summary: [
            {
              en: 'This is the 2025 follow-up to Just Keep Buying by Nick Maggiulli, focusing on defining distinct levels of wealth and providing tailored strategies to climb each one.',
              zh: '這是《持續買進》作者 Nick Maggiulli 於 2025 年推出的續作，聚焦於定義財富的不同層次，並針對每個層次提供對應的晉升策略。',
            },
            {
              en: 'The book breaks wealth into six distinct levels, each demanding its own strategy — what gets you from struggle to stability is not the same approach that takes you from comfortable to truly wealthy.',
              zh: '這本書將財富分為六個不同的階層，每個階層都需要完全不同的策略——讓你從財務困境走向穩定的方法，不見得適用於讓你從舒適走向真正富裕的旅程。',
            },
            {
              en: 'Maggiulli’s core argument is that wealth building isn’t a linear journey but a ladder with distinct rungs, each requiring different strategies, mindsets, and priorities.',
              zh: 'Maggiulli 的核心論點是：財富積累不是一段線性旅程，而是一道有明確台階的梯子，每個台階需要不同的心態、策略與優先順序。',
            },
          ],
          forEn: 'Essential for anyone who wants to build a better life through smarter financial decisions.',
          forZh: '想要透過財務決策實現更好人生的人，這本必讀。',
        },
        {
          t: 'discuss',
          en: 'Discussion questions',
          zh: '延伸討論題',
          items: [
            {
              en: 'Maggiulli argues that your financial strategy should match your current wealth level — not your income. Do your current money habits reflect where you actually are, or where you wish you were?',
              zh: 'Maggiulli 認為，你的理財策略應根據淨資產而非收入來制定。你現在的金錢習慣，反映的是你真實的財務狀況，還是你希望自己所在的位置？',
              starters: [
                { en: 'If I am honest, my habits are set for…', zh: '老實說，我的習慣是照著……設定的。' },
                { en: 'The gap between the two shows up most in…', zh: '這兩者的落差最明顯的地方是……' },
                { en: 'One habit I have kept far too long is…', zh: '有一個習慣我留了太久，就是……' },
              ],
            },
            {
              en: 'The book says money is like salt — it amplifies whatever life you already have. If your finances doubled tomorrow, which parts of your life would genuinely improve, and which problems would just get louder?',
              zh: '書中說錢像鹽巴，會放大你現有的人生。如果你的財富明天翻倍，生活中哪些部分會真正變好——又有哪些問題只會被放大？',
              starters: [
                { en: 'What would genuinely improve is…', zh: '真正會變好的是……' },
                { en: 'What would just get louder is…', zh: '只會被放大的則是……' },
                { en: 'Money would not touch…', zh: '錢完全碰不到的是……' },
              ],
            },
            {
              en: 'Many working adults confuse a rising income with growing wealth. Has there been a period where you earned more but felt no more financially secure? What was driving that gap?',
              zh: '很多上班族把收入增加誤認為財富增長。你是否有過賺得更多、財務上卻沒有更安心的時期？是什麼原因造成了這個落差？',
              starters: [
                { en: 'There was a year when I earned…, and still…', zh: '有一年我賺了……，卻還是……' },
                { en: 'The money was going straight into…', zh: '那些錢都直接進了……' },
                { en: 'What actually changed it for me was…', zh: '真正改變這件事的是……' },
              ],
            },
          ],
        },
        {
          t: 'terms',
          en: 'Glossary',
          zh: '專業詞彙解說',
          hintEn: 'Tap a card for the Chinese and the definition.',
          hintZh: '點一下卡片，看中文與定義。',
          items: [
            {
              en: 'Net worth',
              zh: '淨資產',
              defEn: 'The total value of everything you own (assets) minus everything you owe (liabilities). Different from income — a high salary does not guarantee a high net worth.',
              defZh: '你所擁有的一切（資產）減去你所欠的一切（負債）後的總值。與收入不同——薪資很高，淨資產仍可能很低。',
            },
            {
              en: 'Asset allocation',
              zh: '資產配置',
              defEn: 'The strategy of dividing your money across different investment types (stocks, bonds, real estate, cash) to balance risk and return based on your financial goals.',
              defZh: '將資金分配到不同投資類型（股票、債券、房地產、現金）的策略，目的是根據財務目標平衡風險與報酬。',
            },
            {
              en: 'Wealth ladder framework',
              zh: '財富階梯框架',
              defEn: 'Maggiulli’s model dividing wealth into six net-worth levels, each requiring a fundamentally different financial mindset and set of strategies.',
              defZh: 'Maggiulli 提出的模型，依淨資產將財富分為六個層次，主張每個層次需要根本上不同的財務思維與策略。',
            },
            {
              en: 'Income vs. wealth',
              zh: '收入 vs. 財富',
              defEn: 'Income is money flowing in regularly (salary, revenue). Wealth is accumulated assets over time. High income without the right habits does not automatically create wealth.',
              defZh: '收入是定期流入的金錢（薪水、營業收入）；財富是隨時間累積的資產。沒有正確習慣，高收入不會自動轉化為財富。',
            },
            {
              en: 'Financial strategy misalignment',
              zh: '財務策略錯位',
              defEn: 'When your money habits and investment approach do not match your actual wealth level — for example, using a beginner’s savings approach at an advanced wealth stage.',
              defZh: '當你的金錢習慣與投資方式與實際財富水準不符——例如已處於較高財富階段，卻仍使用初學者的儲蓄策略。',
            },
          ],
        },
      ],
    },

    // ================================================================ 03
    {
      id: 'less',
      n: '03',
      en: 'Less Is More',
      zh: '《北歐式的自由生活提案》',
      tagEn: 'Subtraction as a path to genuine freedom',
      tagZh: '減法哲學，找回真正的自由',
      blocks: [
        {
          t: 'book',
          author: '本田直之 Honda Naoyuki',
          summary: [
            {
              en: 'The author spent 15 years achieving his vision of a nomadic lifestyle — abandoning a fixed office, moving around the world, living and working simultaneously. He travelled to Nordic countries to interview locals about their views on happiness.',
              zh: '作者花了 15 年的時間，達到心目中的遊牧式生活：拋棄固定辦公地點，在世界各個角落移動，同時生活與工作。他前往北歐採訪當地居民，詢問他們對「幸福」的看法。',
            },
            {
              en: 'One reason the Nordic countries resist materialism may be the Jante Law — “Don’t think you’re special; don’t think you’re better than the group.”',
              zh: '北歐國家之所以不受物質主義影響，原因之一可能是「詹特法則」——「不要以為你很特別，不要以為你比團體優秀」。',
            },
            {
              en: 'The author’s central message: “A life that is outwardly simple but inwardly rich is what brings true fulfilment.”',
              zh: '作者的核心主張是：「外表樸實、內在豐富的人生，才能帶給人們真正的滿足。」',
            },
          ],
          forEn: 'Essential for anyone looking to understand how minimalism can be lived, not just admired.',
          forZh: '想要理解極簡主義如何真正實踐、而不只是欣賞的人，這本必讀。',
        },
        {
          t: 'discuss',
          en: 'Discussion questions',
          zh: '延伸討論題',
          items: [
            {
              en: 'The book distinguishes between “old happiness” — always built on the next thing — and “new happiness” built on subtraction. What is one thing you could remove from your current life that might make you feel freer?',
              zh: '書中區分了「舊幸福論」——幸福永遠建立在下一件事上——和「新幸福論」——透過減法找到自由。在你目前的生活中，有什麼是去除之後反而會讓你感到更自由的？',
              starters: [
                { en: 'The obvious one is…, but the harder one is…', zh: '最明顯的是……，但比較難的是……' },
                { en: 'I keep it because…, which is not a good reason.', zh: '我留著它是因為……，而這其實不是個好理由。' },
                { en: 'If I removed it, I would get back…', zh: '如果拿掉它，我會拿回……' },
              ],
            },
            {
              en: 'Nordic cultures tend not to equate status with possessions. In your workplace or social circle, how much of what you own or pursue is genuinely for you — and how much is for how it looks to others?',
              zh: '北歐文化傾向於不把地位與物質畫上等號。在你的職場或社交圈中，你所擁有或追求的東西，有多少是真正為了自己——又有多少是為了在別人眼中的形象？',
              starters: [
                { en: 'In my industry, the thing people signal with is…', zh: '在我的產業裡，大家用來彰顯身分的是……' },
                { en: 'I would say the split is roughly…', zh: '我會說比例大概是……' },
                { en: 'The one I would not give up is…, and that is genuinely mine.', zh: '有一樣我不會放棄，那就是……，那是真的屬於我的。' },
              ],
            },
            {
              en: 'Honda spent 15 years building toward a life he truly wanted. What is one concrete step — however small — you have been putting off that would move you closer to your ideal life?',
              zh: '本田直之花了 15 年，打造出他真正想要的生活。有沒有一個具體的步驟——不管多小——你一直在拖延，但它確實能讓你更靠近那個理想生活？',
              starters: [
                { en: 'The step is small: it is just…', zh: '這個步驟其實很小，就只是……' },
                { en: 'I have been putting it off since…', zh: '我從……就一直在拖這件事。' },
                { en: 'What is really stopping me is…', zh: '真正卡住我的是……' },
              ],
            },
          ],
        },
        {
          t: 'terms',
          en: 'Glossary',
          zh: '專業詞彙解說',
          hintEn: 'Tap a card for the Chinese and the definition.',
          hintZh: '點一下卡片，看中文與定義。',
          items: [
            {
              en: 'Minimalism',
              zh: '極簡主義',
              defEn: 'A philosophy prioritising owning and consuming less in order to focus on what is truly essential and meaningful. Not about deprivation, but about intentional living.',
              defZh: '一種強調減少擁有與消費的哲學，專注於真正重要且有意義的事物。不是關於匱乏，而是關於有意識地生活。',
            },
            {
              en: 'The Jante Law',
              zh: '詹特法則',
              defEn: 'A Scandinavian social code, originating in a 1933 novel, that discourages individuals from seeing themselves as better than others. It promotes collective equality over individual status.',
              defZh: '一種源自斯堪地那維亞的社會準則，起源於 1933 年的小說，鼓勵人們不要認為自己比他人優越，強調集體平等而非個人地位。',
            },
            {
              en: 'Materialism',
              zh: '物質主義',
              defEn: 'The belief that acquiring possessions and wealth is the primary source of happiness and success. The book challenges this by contrasting it with Nordic attitudes toward life.',
              defZh: '認為獲取財物與財富是幸福與成功主要來源的信念。本書透過與北歐生活態度的對比，對此觀點提出挑戰。',
            },
            {
              en: 'Old vs. new happiness',
              zh: '舊幸福論 vs. 新幸福論',
              defEn: 'Old happiness is additive — always dependent on the next thing. New happiness is subtractive — found by removing what is unnecessary to clarify what truly matters.',
              defZh: '舊幸福論是加法式的——幸福永遠依賴於下一件東西；新幸福論是減法式的——透過去除不必要的事物，釐清什麼才是真正重要的。',
            },
            {
              en: 'Nomadic lifestyle',
              zh: '遊牧式生活',
              defEn: 'A modern work-life model where individuals are not tied to a fixed location, instead working remotely while moving between cities or countries. Also called “location independence.”',
              defZh: '個人不受固定辦公地點束縛，以遠距工作方式在不同城市或國家之間移動的生活模式，也稱為「地點自由」。',
            },
          ],
        },
      ],
    },

    // ================================================================ 04
    {
      id: 'rewire',
      n: '04',
      en: 'Rewire',
      zh: '《神經可塑性》',
      tagEn: 'Change begins with understanding your brain',
      tagZh: '改變，從理解大腦開始',
      blocks: [
        {
          t: 'book',
          author: 'Nicole Vignola',
          summary: [
            {
              en: 'Neuroscientist Nicole Vignola uses clear language to demystify the science of breaking bad habits, building good ones, and neurohack methods for changing behavioural patterns.',
              zh: '作者是神經科學家 Nicole Vignola，她用清晰的語言揭開打破壞習慣、建立好習慣的科學機制，以及改變行為模式的神經駭客方法。',
            },
            {
              en: 'She offers a powerful analogy: think of your body as a computer — your brain is the hardware, your mental health is the software. The hardware must work well before you can upgrade the software.',
              zh: '她提出一個比喻：把人體視為一台電腦，大腦是硬體，心理健康是軟體——硬體運作良好，才能升級軟體。',
            },
            {
              en: 'The book reached number one on Amazon UK’s neuropsychology chart and was licensed in 16 languages at the proposal stage.',
              zh: '這本書在英國亞馬遜神經心理學排行榜奪得第一名，在 proposal 階段即迅速售出英、美、德、義等 16 國語文版權。',
            },
          ],
          forEn: 'Essential for anyone who believes that change is purely a matter of willpower.',
          forZh: '一直覺得改變要靠意志力的人，這本必讀。',
        },
        {
          t: 'discuss',
          en: 'Discussion questions',
          zh: '延伸討論題',
          items: [
            {
              en: 'Vignola says our thoughts are real physiological events in the brain. Think about the way you talk to yourself after a setback at work. Is that inner voice an ally or an obstacle?',
              zh: 'Vignola 說念頭對大腦來說是真實的生理事件。想想你在工作遭遇挫折後對自己說話的方式。那個內心的聲音，是你的盟友，還是你的阻礙？',
              starters: [
                { en: 'The first thing I say to myself is usually…', zh: '我對自己說的第一句話通常是……' },
                { en: 'I would not say that sentence to a colleague, so…', zh: '我不會對同事說那句話，所以……' },
                { en: 'It is an ally when…, and an obstacle when…', zh: '它在……的時候是盟友，在……的時候是阻礙。' },
              ],
            },
            {
              en: 'The book argues that change is not about willpower — it is about working with your brain’s existing mechanisms. Looking back at a habit you successfully changed, what actually made it stick?',
              zh: '書中認為改變不靠意志力，而是要順應大腦的運作機制。回想一個你成功改變的習慣，真正讓它持續下去的關鍵是什麼？',
              starters: [
                { en: 'The habit was…, and what made it stick was…', zh: '那個習慣是……，讓它持續下來的是……' },
                { en: 'It was not willpower — I just changed…', zh: '關鍵不是意志力，我只是改變了……' },
                { en: 'The times it failed, the difference was…', zh: '失敗的那幾次，差別在於……' },
              ],
            },
            {
              en: 'High cortisol keeps the brain in survival mode — making complex decisions nearly impossible. In your current work life, what is your biggest source of sustained stress, and what would it take to genuinely reduce it?',
              zh: '皮質醇過高會讓大腦持續處於求生存模式，使複雜決策幾乎不可能。在你目前的工作生活中，最持續性的壓力來源是什麼——要真正降低它（而不只是應付它），需要做什麼？',
              starters: [
                { en: 'The sustained one — not the loud one — is…', zh: '持續性的那個（不是最吵的那個）是……' },
                { en: 'Coping with it looks like…; actually reducing it would mean…', zh: '應付它大概是……；真正降低它則意味著……' },
                { en: 'The reason I have not done that yet is…', zh: '我還沒那樣做的原因是……' },
              ],
            },
          ],
        },
        {
          t: 'terms',
          en: 'Glossary',
          zh: '專業詞彙解說',
          hintEn: 'Tap a card for the Chinese and the definition.',
          hintZh: '點一下卡片，看中文與定義。',
          items: [
            {
              en: 'Neuroplasticity',
              zh: '神經可塑性',
              defEn: 'The brain’s ability to reorganise itself by forming new neural connections throughout life. The brain is not fixed — it can change in response to new experiences, habits, learning, and thoughts.',
              defZh: '大腦透過形成新的神經連結來重新組織自身的能力，且這種能力貫穿一生。大腦並非固定不變——它可以因應新的經驗、習慣、學習，甚至念頭而改變。',
            },
            {
              en: 'Cortisol',
              zh: '皮質醇',
              defEn: 'A hormone released in response to stress. When chronically elevated, it keeps the brain in a threat-detection state, impairing memory, decision-making, and the ability to build new habits.',
              defZh: '身體在壓力下分泌的一種荷爾蒙。長期維持在高水準時，會使大腦持續處於警戒狀態，損害記憶力、決策能力，以及建立新習慣的能力。',
            },
            {
              en: 'The amygdala',
              zh: '杏仁核',
              defEn: 'A brain region primarily responsible for processing fear and emotional responses. Under chronic stress, it can override rational thinking and lock you in reactive behavioural patterns.',
              defZh: '大腦中主要負責處理恐懼與情緒反應的區域。在長期壓力下，可能壓制理性思考，使你陷入慣性反應的模式。',
            },
            {
              en: 'Negativity bias',
              zh: '負面偏誤',
              defEn: 'The brain’s built-in tendency to register negative experiences more strongly than positive ones. Evolutionarily useful, but in modern life it amplifies fear, self-criticism, and worst-case thinking.',
              defZh: '大腦與生俱來的傾向，會比正面經歷更強烈地記錄並反覆回想負面經歷。從演化角度有其作用，但在現代生活中往往放大恐懼與自我批評。',
            },
            {
              en: 'Neural pathways',
              zh: '神經迴路',
              defEn: 'Connections between neurons formed through repeated thoughts, behaviours, and experiences. The more a pathway is activated, the stronger it becomes — explaining why habits are so hard to break.',
              defZh: '大腦中神經元之間透過反覆的思考、行為與經歷所形成的連結通路。一條通路使用得越頻繁，就會變得越強固——這也是為什麼習慣很難改變的原因。',
            },
            {
              en: 'Self-talk',
              zh: '自我對話',
              defEn: 'The internal monologue running in your mind about yourself and your experiences. Repeated self-talk — positive or negative — physically shapes brain structure and hormonal responses over time.',
              defZh: '你在腦海中對自己和自身經歷所進行的內在獨白。持續的自我對話——無論正負面——會隨時間實際塑造大腦結構與荷爾蒙反應。',
            },
            {
              en: 'Survival mode',
              zh: '求生存模式',
              defEn: 'A brain state where immediate threat responses take priority over higher functions like creativity, planning, and learning — explaining why “just push through it” rarely produces lasting change.',
              defZh: '大腦將即時威脅反應置於創造力、規劃與學習等高階功能之上的狀態。這也是「硬撐過去」往往無法帶來持久改變的神經科學原因。',
            },
          ],
        },
      ],
    },

    // ================================================================ end
    {
      id: 'thread',
      n: '·',
      en: 'The Common Thread',
      zh: '四本書的共同主軸',
      blocks: [
        {
          t: 'lead',
          en: 'All four books ask the same fundamental question:',
          zh: '這四本書都在問同一個核心問題——',
        },
        {
          t: 'summary',
          en: 'Are we actually pursuing a life that is truly our own?',
          zh: '我們是否在追求一個真正屬於自己的人生？',
        },
        {
          t: 'strands',
          en: 'Each book helps you recalibrate your direction.',
          zh: '每一本都試圖幫你重新校準方向。',
          items: [
            { n: '01', id: 'millionaire', en: 'The cost of chasing the wrong goals', zh: '追求錯誤目標的代價' },
            { n: '02', id: 'ladder', en: 'Different wealth levels demand different strategies', zh: '不同財富水準，需要不同策略' },
            { n: '03', id: 'less', en: 'Subtraction as a path to genuine freedom', zh: '減法哲學，找回真正的自由' },
            { n: '04', id: 'rewire', en: 'Change begins with understanding your brain', zh: '改變，從理解大腦開始' },
          ],
        },
        {
          t: 'discuss',
          en: 'To close',
          zh: '收尾討論',
          items: [
            {
              en: 'Three of these four books argue that the thing you are chasing is the wrong thing. The fourth says the chase itself is a brain mechanism. Which explanation do you find more useful for your own life?',
              zh: '這四本書裡，有三本主張你追的東西本身就錯了；第四本則說，「追」這件事本身是一種大腦機制。對你自己的人生而言，哪一種解釋比較有用？',
              starters: [
                { en: 'For me the more useful one is…, because…', zh: '對我來說比較有用的是……，因為……' },
                { en: 'The other explanation lets me off too easily, since…', zh: '另一種解釋太容易放過我了，因為……' },
                { en: 'They are not really in conflict — one is about… and the other about…', zh: '這兩者其實不衝突：一個講的是……，另一個講的是……' },
              ],
            },
            {
              en: 'Which of the four would you hand to a colleague this month, and what would you say when you handed it over?',
              zh: '這四本裡，你這個月會把哪一本遞給同事？遞出去的時候你會說什麼？',
              starters: [
                { en: 'I would give them…, because right now they are…', zh: '我會給他們……，因為他們現在正在……' },
                { en: 'I would say: read the part about…', zh: '我會說：先讀關於……的那一段。' },
                { en: 'I would not recommend… to them, because…', zh: '我不會推薦……給他們，因為……' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
