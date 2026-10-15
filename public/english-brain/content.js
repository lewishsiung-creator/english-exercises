/* 英文腦不是魔法 — Lewis's own article, as a reading page.

   This is the first page in the repo that is an article rather than teaching
   material: no student, no lesson, nothing to practise. It is Chinese prose
   with English examples inside it, so — unlike every student page here —
   Chinese leads and there is no 中 chip. The same reason Health Notes gives:
   here the English is not the lesson.

   It is also the first page meant to be FOUND. Everything in /winkle/ carries
   noindex; this one does not, and it keeps the byline, the date and the
   references, because it is published writing.

   The student in the opening anecdote stays anonymous, as in the original.

   The text is Lewis's, reproduced; the only things added are the structure
   marks — which paragraph is a callout, which three lines are a worked
   example — and 🔊 on the English sentences.
*/

const ARTICLE = {
  title: "英文腦不是魔法",
  subtitle: "從翻譯、刻意練習、髓鞘化到 AI 輔助學習",
  byline: "Lewis Lin",
  date: "2026 年 9 月 29 日 · 修訂版",
  blurb: "「真的有所謂的英文思考嗎？」這篇談的是：我們怎麼從「需要翻譯」走到「自然表達」，大腦在這個過程中可能發生了什麼，以及在 AI 時代，我們該讓 AI 幫我們做多少。",

  opening: [
    "最近上課時，學生突然問我一個很多英文學習者都想過的問題：「真的有所謂的英文思考嗎？」",
    "他的意思是：英文程度越來越好之後，想表達一件事時，能不能不必先在腦中形成完整的中文、再逐句翻成英文，而是直接用英文說出來？",
    "他接著分享了一段經驗。他曾經把英文面試自我介紹背得滾瓜爛熟，結果那家公司臨時改成中文面試。明明是同一段經歷，他卻突然不知道該從哪裡說起。",
    "這兩件事其實指向同一個答案。這篇文章想談的是：我們怎麼從「需要翻譯」走到「自然表達」，大腦在這個過程中可能發生了什麼，以及在 AI 時代，我們該讓 AI 幫我們做多少。",
  ],

  sections: [

    {
      id: "bridge",
      n: "一",
      title: "英文思考存在嗎？翻譯是橋，不是敵人",
      blocks: [
        { t: "p", text: "我的答案是：可以逐漸做到，但不是靠強迫自己「不要想中文」做到的。" },
        { t: "p", text: "很多課程把英文思考描述成一種狀態：不需要中文、不需要翻譯，想到什麼英文就自然跑出來。這不完全錯，但容易讓人以為只要找到某種特殊方法，就能跳過翻譯、分析和大量練習。" },
        { t: "p", text: "對大多數成年後才認真學英文的人來說，初期的常態是「想法 → 中文 → 英文」。這非常正常。真正該問的不是「我為什麼還會想中文？」，而是「我要怎麼讓想法到英文之間的連結越來越直接？」" },

        { t: "sub", text: "一座越來越快的橋" },
        { t: "p", text: "我在課堂上用「橋」來比喻。剛開始，母語和英文之間的橋像一條步道：想到一個概念後，你要先想中文怎麼說、英文單字是什麼、文法怎麼排、介系詞用哪個，最後才把句子說出來。" },
        { t: "p", text: "經過長時間、有系統的練習，這條步道會慢慢變成高速公路、高鐵，甚至主觀上像光纖，快到你幾乎感覺不到中間的轉換。" },
        { t: "key", text: "所以，「英文腦」不一定是大腦裡完全沒有中文。比較合理的理解是：第二語言的處理已經變得快速、穩定，不太需要刻意思考。這正是第二語言研究裡所說的 automaticity（自動化）。" },

        { t: "sub", text: "真正要建立的是「概念到英文」" },
        { t: "p", text: "很多人把學英文想成「中文句子 → 英文句子」。但程度提高後，更理想的狀態是「概念 → 英文表達」：看到一個情境、產生一個想法，就能直接提取對應的英文，不必每次先在腦中寫好一篇中文。" },
        { t: "p", text: "很多台灣人其實已經有這種經驗：跟阿公阿嬤說台語、跟家人說中文，切換時並不是在兩種語言之間翻譯，而是同一個概念已經有兩條表達路徑。" },
        { t: "key", text: "所以我現在會這樣定義英文思考：不是消滅母語，而是讓概念與英文之間建立越來越直接、快速、穩定的連結。" },
      ],
    },

    {
      id: "practice",
      n: "二",
      title: "自然不是「不練就有」，而是「練到自然」",
      blocks: [
        { t: "p", text: "這位學生以前認為：面試或簡報準備太多、甚至背稿，表現就會不自然。但最近幾次實際練習讓他發現，事情剛好相反。讓人在台上自在的，往往不是沒有準備，而是準備到足夠熟悉，腦袋不必再分心在語言上。" },

        { t: "sub", text: "技能習得的三個階段" },
        { t: "p", text: "第二語言的技能習得理論（Skill Acquisition Theory，代表學者為 DeKeyser）正好解釋了這件事。它把技能發展分成三個階段：" },
        {
          t: "list", ordered: true,
          items: [
            { lead: "陳述性階段", text: "你知道規則，例如「第三人稱單數動詞要加 -s」，但說話時還要停下來想。" },
            { lead: "程序化階段", text: "練習之後，不必每次回想完整規則，就能直接用出來。" },
            { lead: "自動化階段", text: "再經過大量練習，語言使用變得更快、更穩、更省力，也更不需要集中注意力。" },
          ],
        },
        { t: "key", text: "所以，自然的表現往往不是沒有練習，而是練習已經被程序化、自動化了。" },

        { t: "sub", text: "四十年的研究怎麼說" },
        { t: "p", text: "Suzuki、Maie 與 Hui 在 2025 年發表於 Language Teaching 期刊的研究回顧，整理了約四十年的第二語言自動化研究。他們把自動化定義為：原本需要控制、費力的語言處理，透過練習變得自動、快速而且省力的學習歷程。" },
        { t: "key", text: "這篇回顧有一個很重要的提醒：單純接觸語言不足以建立自動化。真正有效的是有目標、有系統的練習，在有意義的重複中逐步增加難度。" },
        { t: "p", text: "英文不是因為「學會規則」就變快，而是規則在反覆使用中變成可以直接操作的技能。" },

        { t: "sub", text: "你背的是英文，還是你想說的內容？" },
        { t: "p", text: "回到開頭那場改成中文的面試。學生後來發現，自己熟悉的是「英文講稿」，而不是講稿背後的想法。英文一拿掉，內容也跟著消失了。" },
        { t: "p", text: "如果你熟悉的是核心觀點、邏輯關係、經驗與例子，不論換成中文還是英文，你都知道自己在講什麼。所以準備的順序應該是：" },
        {
          t: "list", ordered: true,
          items: [
            { text: "我真正想說的是什麼？" },
            { text: "背後的邏輯是什麼？" },
            { text: "我要怎麼用英文說？" },
          ],
        },
        { t: "key", text: "先掌握內容，再掌握語言。" },
      ],
    },

    {
      id: "brain",
      n: "三",
      title: "大腦裡發生了什麼？髓鞘化的真相與界線",
      blocks: [
        { t: "p", text: "課堂上我也談到 myelination（髓鞘化）。這個概念有神經科學基礎，但需要說得很精準。" },
        { t: "p", text: "髓鞘是包覆在部分神經軸突外的脂質結構，會影響神經訊號傳導的效率與時間協調。過去人們認為髓鞘在發育完成後就大致固定，但近年的研究發現，髓鞘具有可塑性：學習與神經活動可能伴隨髓鞘的重塑。" },
        { t: "p", text: "動物研究提供了最直接的證據。McKenzie 等人（2014，Science）發現，阻斷小鼠生成新的髓鞘後，小鼠學不會新的動作技能。Bacmeister 等人（2022，Nature Neuroscience）則觀察到，動作學習會在被學習活化的神經軸突上引發動態的髓鞘變化，而且與表現進步相關。" },

        { t: "sub", text: "必須加上的科學界線" },
        { t: "p", text: "我們目前不能直接說：「你每練一次英文，就讓英文神經路徑髓鞘化，所以英文變流暢。」上面的研究有一個重要前提：它們是小鼠的動作學習，不是人類的語言學習。" },
        { t: "p", text: "比較合理的說法是：髓鞘可塑性可能是支持學習與技能形成的多種神經可塑性機制之一。其他機制還包括突觸可塑性、神經網路重組、記憶鞏固與程序性學習。髓鞘化值得理解，但它不是英文流暢的唯一答案。" },

        { t: "sub", text: "成年之後還來得及嗎？" },
        { t: "p", text: "來得及。髓鞘的形成與重塑會持續到成年期，成年人的大腦仍然具有相當程度的可塑性。年齡確實可能影響某些學習的速度，但不要把「30 歲」這類特定年齡當成絕對分界。" },
        {
          t: "quote",
          en: "Plasticity changes with age; it does not simply switch off at a specific birthday.",
          zh: "大腦可塑性會隨年齡改變，但不會在某個生日突然關機。",
        },
      ],
    },

    {
      id: "how",
      n: "四",
      title: "怎麼練才有效？",
      blocks: [
        { t: "p", text: "課堂上我們把學習整理成四個實務變項：動機（為什麼學）、方法（怎麼練）、頻率（多久練一次）、持續時間（能撐多久）。這是實務框架，不是科學公式。其中最需要先確認的是方法，因為方法錯了，練得越多不一定越有效。以下是四個有研究或實務基礎的做法。" },

        { t: "sub", text: "1. 分散練習：短、反覆、持續" },
        { t: "p", text: "Dunlosky 等人（2013）評估了十種常見學習策略，只有兩種被評為「高效用」：分散練習和練習測驗。分散練習是把練習拆散在不同時間點，而不是一次全部做完。每天 15 分鐘，比週末一次狂練兩小時更能長期記住。" },

        { t: "sub", text: "2. 看結構，不只看單字" },
        { t: "p", text: "所謂「台式英文」，很多問題出在用中文的結構套英文單字：每個字都對，整句卻不自然。看一個職場常見的例子：" },
        {
          t: "versions",
          zh: "因為這次專案時間很趕，所以我們決定先把功能縮小，下個月再補上。",
          literal: "Because this project time is very rush, so we decide first make the function smaller, next month add it back.",
          natural: "Given the tight timeline, we've decided to scale back the features for now and add the rest next month.",
        },
        { t: "p", text: "差別不在單字，而在資訊的組織方式：" },
        {
          t: "list",
          items: [
            { text: "原因被壓縮成片語：「因為時間很趕」變成 Given the tight timeline，不需要完整子句。" },
            { text: "不說 because…so…：中文「因為…所以…」成對出現，英文只用一個。" },
            { text: "時間決定時態：「決定了」是已經做的決定，所以用 we've decided。" },
            { text: "「先…再…」有固定說法：for now … and … next month。" },
          ],
        },
        { t: "key", text: "看到一個中文概念時，要問的不只是「這個字英文是什麼？」，而是「英文通常怎麼組織這個意思？」也就是不只問 What does it mean?，還要問 Why is it expressed this way? 弄懂之後，你學到的就不只是一句話，而是一個可以重複使用的句型。" },

        { t: "sub", text: "3. 句子重組：先整理關係，再產出語言" },
        { t: "p", text: "學生在課堂上發現，句子重組和句子合併對他特別難。這種難很有價值，因為你必須同時處理詞彙、文法、邏輯與資訊順序。試試把這三個句子合成一句：" },
        {
          t: "combine",
          parts: [
            { k: "A", en: "Our main supplier raised prices by 15%." },
            { k: "B", en: "Our production costs went up." },
            { k: "C", en: "We had to adjust our retail prices." },
          ],
          note: "關鍵不是「哪一句先」，而是「它們之間是什麼關係？」這裡是一條因果鏈：A 造成 B，B 又造成 C。看出關係之後，句子就出來了：",
          answer: "Our main supplier's 15% price increase pushed up our production costs, forcing us to adjust our retail prices.",
        },
        { t: "p", text: "最後的 forcing us to… 是分詞片語，專門用來接「前面這件事帶來的結果」。這樣的練習最後會直接影響口說、寫作、簡報和面試，因為你練的是：先組織想法，再產出語言。" },

        { t: "sub", text: "4. 提取練習：看懂不等於學會" },
        { t: "p", text: "很多學生讀完一個句子會說「我懂了」。但能辨認，不代表能說出來。真正的問題是：關掉答案之後，你能不能自己把它想出來？" },
        { t: "p", text: "這就是 retrieval practice（提取練習），是整篇文章裡研究支持最強的觀念之一。主動從記憶中提取資訊，比單純重讀更能記得久，加上回饋效果更好。上面兩個例子都可以這樣練：" },
        {
          t: "list", ordered: true,
          items: [
            { text: "只看中文，遮住英文。" },
            { text: "自己說出英文。" },
            { text: "打開範例，比較差異。" },
            { text: "修正後再說一次。" },
            { text: "隔幾天再拿出來試一次。" },
          ],
        },
        { t: "key", text: "這比一直重看同一篇英文稿，更接近真正的技能學習。" },
      ],
    },

    {
      id: "ai",
      n: "五",
      title: "AI 該扮演什麼角色？",
      blocks: [
        { t: "sub", text: "小心：稿子很漂亮，但不是你的" },
        { t: "p", text: "現在很多人的準備流程是：有個想法，丟給 AI 寫中文初稿，再丟給 AI 翻成英文。最後得到一篇完整、漂亮、有條理的稿子，但自己不熟。AI 有時還會補進你根本沒想過的內容，讀起來很好，卻不太像你。" },
        { t: "key", text: "這就是開頭那場面試的 AI 版本。所以 AI 時代更需要內容所有權：這是不是我的意思？這個例子為什麼放在這裡？關掉 AI，我還能不能自己說一次？AI 可以幫忙整理想法，但不能替你理解與內化。" },

        { t: "sub", text: "AI 最適合的工作：加速練習循環" },
        { t: "p", text: "以前，逐句分析句型、比較中英表達、設計練習題，都需要老師。現在 AI 可以讓這個循環快很多：理解、分析、練習、提取、修正、重複。下面是一個我會給學生的提示詞範例，可以直接複製使用：" },
        {
          t: "prompt",
          text: `以下是一段英文。請依序幫我做三件事：

1. 逐句翻成繁體中文，中英對照。
2. 拆解每一句的結構：主詞、動詞、受詞、子句、修飾語，
   並說明英文的資訊順序和中文有什麼不同。
3. 根據這段文字設計一份練習單：填空、句子重組、
   句子合併、改錯各 3 題。答案請放在最後，不要跟題目放在一起。

英文段落：
（貼上你的文字）`,
        },
        { t: "p", text: "最後一句「答案放在最後」很重要：它讓你先寫、先想，也就是保留了提取練習。" },

        { t: "sub", text: "研究怎麼說：有效，但關鍵在怎麼用" },
        { t: "p", text: "Li、Shadiev 與 Chiu 在 2025 年發表的統合分析，納入 25 項實證研究、共 2,431 名參與者，整體發現生成式 AI 對語言學習有明顯的正面效果。但效果大小差很多，取決於三件事：" },
        {
          t: "table",
          head: ["條件", "效果大", "效果小"],
          rows: [
            ["AI 素養", "有使用經驗或受過訓練", "沒有準備就直接用"],
            ["任務規劃", "動手前有時間規劃", "沒有規劃"],
            ["誰來評量", "老師或研究者", "只靠 AI 評分"],
          ],
        },
        { t: "p", text: "也就是說，AI 本身不是學習方法。AI 加上好的教學設計與人的回饋，才是關鍵。" },
        { t: "key", text: "所以我比較傾向這樣定義 AI：AI 可以加速練習循環，但不能代替學習歷程。它真正的價值不是讓你少練，而是讓每一次練習的品質和頻率都提高。" },
      ],
    },

    {
      id: "end",
      title: "結語：英文腦不是起點，而是結果",
      blocks: [
        { t: "p", text: "回到最開始的問題：真的可以不經過中文，直接說英文嗎？" },
        { t: "p", text: "比較準確的答案不是「有一天你會完全停止中文思考」，而是：有一天，你處理很多熟悉情境與句型的速度，會快到不再需要逐句翻譯。所以該問的不是「我今天有沒有想中文？」，而是「我的想法和英文之間的連結，有沒有越來越直接？」" },
        {
          t: "flow",
          items: ["想法", "練習", "提取", "回饋", "分散重複", "程序化", "自動化", "流暢"],
        },
        { t: "p", text: "髓鞘化與 AI 都不是捷徑本身，它們能讓理解更快、練習更多、回饋更即時，但能力仍然要由你自己的大腦建立。" },
        { t: "p", text: "如果要用四句話總結這套學習觀：" },
        {
          t: "quad",
          items: [
            { en: "Think in ideas.", zh: "以想法為核心。" },
            { en: "Practice the patterns.", zh: "反覆練習語言模式。" },
            { en: "Retrieve instead of merely rereading.", zh: "主動提取，而不是只重讀。" },
            { en: "Build automaticity through sustained practice.", zh: "透過持續練習建立自動化。" },
          ],
        },
        { t: "key", text: "真正的「英文腦」，不是某一堂課之後突然出現的能力。它是理解、練習、提取、修正與長期累積之後，最後看起來像「自然」的結果。" },
      ],
    },
  ],

  cta: {
    text: "想把這套方法用在你的面試、簡報或 TOEIC 準備上嗎？歡迎到 lewistoeic.com 了解課程與工作坊。",
    href: "https://lewistoeic.com/",
    label: "lewistoeic.com",
  },

  refs: [
    "Suzuki, Y., Maie, R., & Hui, B. (2025). Research timeline: Automatization in second language learning. Language Teaching.",
    "Li, Shadiev, & Chiu (2025). Applying Generative Artificial Intelligence to Task-based Language Teaching and Learning: A Systematic Review and Meta-analysis. TechTrends.",
    "McKenzie, I. A., et al. (2014). Motor skill learning requires active central myelination. Science, 346(6207), 318–322.",
    "Bacmeister, C. M., et al. (2022). Motor learning drives dynamic patterns of intermittent myelination on learning-activated axons. Nature Neuroscience.",
    "Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques. Psychological Science in the Public Interest, 14(1), 4–58.",
    "DeKeyser, R. 技能習得理論（Skill Acquisition Theory）相關著作。",
  ],
};
