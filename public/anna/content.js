/* Anna — a running notebook of one-to-one sessions.

   Unlike most pages in this repo, this one is not a lesson. It is a notebook
   that grows: every discussion adds one entry to `sessions` below and nothing
   else changes. No new files, no new folder, no renderer edit. It is the same
   machinery as /aaron/, /anita/, /anny/ and /eason/, with the same rules.

   ADDING A SESSION
   ----------------
   Copy the last entry in `sessions`, change `id`, `n` and the titles, and
   rewrite the blocks. Put it at the BOTTOM of the array — the page runs in
   teaching order, oldest first, and opens with the newest session expanded and
   the earlier ones folded away. The contents list, the numbering and the
   anchors all come from the array, so there is nothing else to keep in step.

   THESE SESSIONS CARRY NO DATE, at Lewis's request, so ORDER IN THE ARRAY is
   the only record of sequence. `dateEn`/`dateZh` are optional in this
   renderer — add them to an entry and the date line and the contents-list
   subtitle come back for that entry alone; leave them out and nothing empty is
   drawn. A lesson taught between two that are already here goes in its right
   place in the array, not at the bottom, and everything after it is renumbered.

   `id` must be unique and URL-safe: it becomes the anchor, so
   /anna/#s2 opens session 2 with the rest folded.

   THE STUDENT
   -----------
   Anna is a young adult, eighteen to twenty. That sits between the two
   registers already in this repo and is neither of them: not the working-adult
   voice of /anny/ and /aaron/, whose examples come from an office and a career
   already under way, and not the plainer register of /eason/, who is still at
   school. Write to someone who is an adult but new to the subject — full
   sentences, nothing simplified, but the examples belong to her life rather
   than to a job she does not have yet. Nothing here is written down to her.

   THE CHINESE LAYER
   -----------------
   Every visible English string has a Traditional Chinese counterpart. English
   is what shows; the Chinese waits behind a small 中 chip, or the 中文 switch
   in the top bar opens the lot. Instructions, task prompts, the contents list
   and anything already behind a deliberate reveal stay bilingual — those are
   scaffolding, not comprehension practice.

   A gap-fill translation is a COMPLETE Chinese sentence — the blank is filled
   in, and only the English keeps its ___. That is the notebook convention and
   it differs from the other pages in this repo, which leave ＿＿ in the Chinese
   so it cannot hand over the answer. Here the page is teacher-led and nothing
   is scored, so the Chinese is there to make the situation clear rather than to
   be a second puzzle — and it is still one tap away rather than on screen.

   Matching halves and answer chips stay in English; each is glossed on its own
   phrase card anyway.

   BLOCK TYPES
   -----------
     part      a divider INSIDE one session, for a source that arrives already
               cut into labelled sections. A session built from a conversation
               should not use it
     lead      a framing sentence in italics, opening a session
     link      a pointer to another page in this site
     quote     a short quote, with attribution
     summary   a teaching paragraph, spoken aloud on request
     note      a boxed aside explaining one idea in more depth
     contrast  two columns compared. The tags default to "As it landed" / "As
               it could land"; set coldEn/coldZh and warmEn/warmZh for any other
               pairing — vague against precise, a habit against its replacement
     phrases   phrase cards — English face up, Chinese and an example behind a tap
     match     click a phrase on the left, then its partner on the right
     gap       a sentence with one blank and three phrases to choose from
     mcq       a quiz question about the reading. The options stay on screen
               after the answer is found, so the row reads as a record of what
               was guessed. `why` is optional: leave it off where the article
               above is already the explanation, and use it where the question
               asks her to judge something rather than to remember it
     fix       something Anna actually said, with the upgrade behind a tap
     poll      opinion statements — agree / not sure / disagree, no answer
     cards     have it / need it cards, for auditing something
     discuss   questions to talk through, each with useful language to reveal
     task      a speaking or writing task with a tick-list of target phrases

   `fix` is the one block the other pages here do not have, and it is the reason
   a per-student notebook is worth keeping: it holds Anna's own sentences,
   corrected. Session 1 does not use it, and the reason is structural rather
   than an oversight — its source is a handout written BEFORE the lesson, so it
   carries no record of anything Anna said. Work from a transcript whenever
   there is one, take only the lines where the error is unmistakably hers, and
   leave the garbled ones out rather than tidying them into a sentence she may
   not have said. Do not reconstruct sentences from memory, or the most
   trustworthy part of the page becomes the least.

   ON THE SUBJECT MATTER
   ---------------------
   Session 1 is about investing, and everything in it comes from the handout
   Lewis supplied. It is a vocabulary and discussion lesson, not advice: no
   product, market or amount is recommended anywhere on the page, and the note
   near the top says so in both languages. Keep any future session on this
   subject to the same line — teach the language people use to talk about
   money, and leave the decisions to her.

   SAMPLE BANNER
   -------------
   Setting `sample` puts a line across the top saying the content is a
   placeholder — on screen and in print, so a draft cannot be handed over by
   accident. Session 1 is real, so it is off.
*/

const NOTEBOOK = {
  student: 'Anna',
  title: 'Anna’s English Notebook',
  titleZh: 'Anna 的英文筆記',
  kicker: '英語討論課 · 課堂筆記',

  intro: {
    en: 'This page is where our sessions are kept. Everything we work through together stays here, so you can come back to it between lessons — the language, the ideas, and the sentences worth keeping.',
    zh: '這一頁是我們課程的紀錄。每次上課討論過的內容都會留在這裡，方便你在課與課之間回來複習——包括語言、觀念，以及值得留下來的句子。',
    goalsEn: 'How to use it',
    goalsZh: '使用方式',
    goals: [
      {
        en: 'Tap any English line to see the Chinese. The 中文 switch at the top opens all of them at once.',
        zh: '點任何一句英文就會出現中文。上方的「中文」按鈕可以一次全部打開。',
      },
      {
        en: 'Tap 🔊 to hear a phrase or sentence read aloud, as many times as you like. The voice is good for pronunciation; for intonation, copy me in the lesson instead.',
        zh: '點 🔊 可以聽片語或句子的發音，想聽幾次都可以。這個聲音適合用來練發音；語調的部分，請在課堂上跟著我模仿。',
      },
      {
        en: 'Nothing is saved and nothing is scored. Reloading the page clears it for a fresh run.',
        zh: '這裡不會儲存也不會計分。重新整理頁面就會清空，可以重新練一次。',
      },
      {
        en: 'The newest session is open; earlier ones are folded. Tap a session heading to open or close it.',
        zh: '最新的一堂課是展開的，之前的則收合起來。點課程標題就能展開或收合。',
      },
    ],
  },

  sessions: [
    {
      id: 's1',
      n: 1,
      en: 'Money you can explain: the language of investing',
      zh: '能講清楚的金錢觀：投資的語言',

      focus: [
        { en: 'What investing is', zh: '什麼是投資' },
        { en: 'Stocks, bonds, funds, ETFs', zh: '股票、債券、基金、ETF' },
        { en: 'Risk and return', zh: '風險與報酬' },
        { en: 'Time, fees and habits', zh: '時間、費用與習慣' },
        { en: 'Explaining it in your own words', zh: '用自己的話說明' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'A reading lesson built around one test you can apply to almost anything: if you cannot explain it in simple language, you do not understand it yet. The subject happens to be money, so the vocabulary is worth having twice over.',
          zh: '這一堂閱讀課圍繞著一個幾乎可以用在任何事情上的測試：如果你沒辦法用簡單的話說明一件事，就代表你還沒有真正理解它。這次的主題剛好是金錢，所以這些字彙值得學兩次。',
        },

        {
          t: 'note',
          en: 'A note before we start',
          zh: '開始之前',
          bodyEn: 'This is an English lesson about the words people use when they talk about money. It is not financial advice, and nothing on this page recommends a product, a market or an amount. What it should give you is the language to ask better questions — and to notice when someone else cannot answer them.',
          bodyZh: '這是一堂英文課，學的是人們談論金錢時所使用的語言。它不是投資建議，這一頁上也沒有推薦任何商品、市場或金額。它應該給你的，是能問出更好問題的語言——以及察覺對方答不出來的能力。',
        },

        {
          t: 'part',
          n: 'Reading',
          en: 'Financial Literacy for Teenagers: Understanding Investing',
          zh: '青少年財務素養：認識投資',
        },

        {
          t: 'summary',
          en: 'Many people assume investing is something you deal with later, once you are an adult with a salary. The argument in this reading is the opposite: the earlier you understand how it works, the more choices you have — and understanding it costs nothing, because the first step is not money, it is knowing what the words mean.',
          zh: '很多人以為投資是以後的事，等長大、有薪水了再說。這篇文章的看法正好相反：你越早了解它如何運作，未來就有越多選擇——而且「理解」本身不用花錢，因為第一步不是資金，而是先弄懂這些字的意思。',
        },

        {
          t: 'summary',
          en: 'Investing means using money to buy something that may increase in value over time. Put NT$1,000 in a box at home and in five years you still have NT$1,000 — but prices will probably have risen, so the same note buys less. That gap has a name: inflation eats purchasing power. Buy an asset instead — a stock, a bond, a fund, an ETF — and the value may rise. It may also fall. That possibility is not a flaw in the plan; it is the reason a return exists at all.',
          zh: '投資是指用錢購買某樣可能隨時間增值的東西。把新台幣 1,000 元放在家裡的盒子裡，五年後你還是有 1,000 元——但物價很可能已經上漲，同樣一張鈔票能買到的東西變少了。這個落差有個名字：通貨膨脹侵蝕購買力。如果改成購買資產——股票、債券、基金、ETF——它的價值可能上升，也可能下跌。這種可能性不是計畫裡的瑕疵，而是報酬之所以存在的原因。',
        },

        {
          t: 'summary',
          en: 'Saving and investing are not the same thing, and the difference is time. Saving is money kept for the short term — an emergency, a plan next month — so it sits in a bank account where you can reach it. Investing is for the long term: university, a home, a business, retirement. Saving is generally safer; investing offers more room to grow. A sensible plan is not one or the other. It is both, in the right proportion.',
          zh: '儲蓄和投資不是同一件事，差別在於時間。儲蓄是為了短期而留下的錢——緊急狀況、下個月的計畫——所以放在隨時可以領出來的銀行帳戶裡。投資則是為了長期目標：大學學費、買房、創業、退休。儲蓄通常比較安全，投資則有比較大的成長空間。合理的規劃不是二選一，而是兩者都有，比例合適。',
        },

        {
          t: 'phrases',
          en: 'The basics',
          zh: '基本概念',
          items: [
            {
              en: 'financial literacy',
              zh: '財務素養',
              eg: 'Financial literacy helps teenagers make better money decisions.',
              egZh: '財務素養能幫助青少年做出更好的金錢決定。',
            },
            {
              en: 'an investment',
              zh: '投資（一項投資標的）',
              eg: 'An investment may rise or fall in value.',
              egZh: '一項投資的價值可能上升，也可能下跌。',
            },
            {
              en: 'an investor',
              zh: '投資人',
              eg: 'A careful investor studies the risks first.',
              egZh: '謹慎的投資人會先研究風險。',
            },
            {
              en: 'an asset',
              zh: '資產',
              eg: 'Stocks and bonds are common financial assets.',
              egZh: '股票和債券是常見的金融資產。',
            },
            {
              en: 'risk',
              zh: '風險',
              eg: 'Every investment involves some level of risk.',
              egZh: '每一項投資都涉及某種程度的風險。',
            },
            {
              en: 'a return',
              zh: '報酬',
              eg: 'Higher returns often come with higher risk.',
              egZh: '較高的報酬通常伴隨較高的風險。',
            },
            {
              en: 'inflation',
              zh: '通貨膨脹',
              eg: 'Inflation reduces the purchasing power of money.',
              egZh: '通貨膨脹會降低金錢的購買力。',
            },
            {
              en: 'purchasing power',
              zh: '購買力',
              eg: 'Saving cash alone may not protect purchasing power.',
              egZh: '只是把現金存起來，不一定能保住購買力。',
            },
          ],
        },

        {
          t: 'summary',
          en: 'Four things you can buy, in rising order of how much they spread your money out. A stock is a small ownership share of one company, which is why its price follows that company’s fortunes so closely. A bond is a loan to a government or a company, and they pay you interest for it — usually less risky than a stock, and usually a lower return to match. A fund pools money from many investors and buys many things at once. And an ETF is a fund you can buy and sell on the stock market as easily as a single stock.',
          zh: '你可以買的四樣東西，依「把錢分散開來的程度」由低到高排列。股票是一家公司的一小部分所有權，所以股價會如此貼近那家公司的表現。債券是借錢給政府或公司，他們會付利息給你——風險通常比股票低，相對地報酬通常也比較低。基金是集合許多投資人的資金，一次買進許多標的。而 ETF 是一種可以像單一股票一樣，在股票市場上買賣的基金。',
        },

        {
          t: 'summary',
          en: 'That last one is why ETFs come up so often for beginners. Instead of choosing one company and hoping, you buy one ETF and own a small part of many — sometimes the largest companies in Taiwan, sometimes hundreds of companies around the world. Many ETFs track a market index, which is simply a measure of how a whole group of companies is doing. The advantages are real: easy diversification, usually lower fees than an actively managed fund, and the ability to put in small amounts regularly. The catch is equally real. If the market falls, the ETF falls with it, and an ETF that holds one industry only, or runs a complicated strategy, can be riskier than it looks.',
          zh: '這一點正是 ETF 常被推薦給初學者的原因。你不需要挑一家公司然後祈禱，而是買進一檔 ETF，同時持有許多公司的一小部分——有時是台灣規模最大的那些公司，有時是全世界數百家公司。許多 ETF 會追蹤市場指數，而指數不過就是衡量一整組公司表現的一把尺。它的優點是真的：容易分散、費用通常比主動管理的基金低，也可以定期投入較小的金額。但缺點同樣是真的。市場下跌時，ETF 也會跟著跌；而只集中在單一產業、或使用複雜策略的 ETF，可能比看起來更危險。',
        },

        {
          t: 'note',
          en: 'Do not put all your eggs in one basket',
          zh: '不要把所有雞蛋放在同一個籃子裡',
          bodyEn: 'Diversification is the technical word for that proverb: spreading money across different investments instead of putting everything in one place. It is worth being precise about what it does. It reduces the damage one bad choice can do to you. It does not guarantee a profit, and it will not save you when a whole market falls. Anyone who tells you otherwise is selling something.',
          bodyZh: '「分散投資」就是這句諺語的正式說法：把資金分散在不同的投資標的上，而不是集中在同一個地方。它的作用值得說精確一點。它能降低單一個錯誤決定對你造成的傷害；它不能保證獲利，也救不了你——當整個市場一起下跌的時候。任何跟你說得比這更好聽的人，都是在推銷東西。',
        },

        {
          t: 'phrases',
          en: 'What you can buy',
          zh: '可以買的東西',
          items: [
            {
              en: 'a stock',
              zh: '股票',
              eg: 'Buying a stock means owning part of a company.',
              egZh: '買一檔股票，就是持有一家公司的一部分。',
            },
            {
              en: 'a shareholder',
              zh: '股東',
              eg: 'Shareholders may benefit when the company performs well.',
              egZh: '公司表現良好時，股東可能受益。',
            },
            {
              en: 'a bond',
              zh: '債券',
              eg: 'Bonds usually pay interest to investors.',
              egZh: '債券通常會付利息給投資人。',
            },
            {
              en: 'interest',
              zh: '利息',
              eg: 'Bond investors usually receive interest.',
              egZh: '債券投資人通常會收到利息。',
            },
            {
              en: 'a fund',
              zh: '基金',
              eg: 'A fund may hold many different stocks.',
              egZh: '一檔基金可能持有許多不同的股票。',
            },
            {
              en: 'an ETF (exchange-traded fund)',
              zh: '指數股票型基金／交易所交易基金',
              eg: 'An ETF can help investors diversify easily.',
              egZh: 'ETF 可以幫助投資人輕鬆分散投資。',
            },
            {
              en: 'a broad-market ETF',
              zh: '廣泛市場型 ETF',
              eg: 'A broad-market ETF may hold hundreds of companies.',
              egZh: '一檔廣泛市場型 ETF 可能持有數百家公司。',
            },
            {
              en: 'a market index',
              zh: '市場指數',
              eg: 'Some ETFs follow a major market index.',
              egZh: '有些 ETF 會追蹤主要的市場指數。',
            },
            {
              en: 'diversification',
              zh: '分散投資',
              eg: 'Diversification can reduce the impact of one poor investment.',
              egZh: '分散投資可以降低單一失敗投資造成的衝擊。',
            },
          ],
        },

        {
          t: 'summary',
          en: 'Risk is the possibility of losing money. Return is what an investment earns you — or costs you. The two are tied together, and the rule holds almost everywhere: higher potential returns come with higher risk, and there is no investment that offers a high return with none. So when you hear “guaranteed profit” or “get rich quickly”, the sentence itself is the warning. Good investing tends to be slow, disciplined and, honestly, a little boring. Boring is not a criticism here.',
          zh: '風險是損失金錢的可能性。報酬則是一項投資替你賺到的——或讓你賠掉的——金額。這兩件事綁在一起，而且這條規則幾乎到處適用：潛在報酬越高，風險就越高；世界上沒有高報酬卻毫無風險的投資。所以當你聽到「保證獲利」或「快速致富」時，那句話本身就是警訊。好的投資通常是緩慢的、有紀律的，說實話還有點無聊。在這裡，「無聊」不是批評。',
        },

        {
          t: 'contrast',
          en: 'Say it precisely',
          zh: '把話說精確',
          hintEn: 'The same idea twice. Both versions are correct English — the difference is how much they actually tell you.',
          hintZh: '同一個想法的兩種說法。兩邊的英文都是對的，差別在於它們真正說出了多少訊息。',
          coldEn: 'Vague',
          coldZh: '含糊',
          warmEn: 'Precise',
          warmZh: '精確',
          items: [
            {
              caseEn: 'Explaining what an ETF is',
              caseZh: '解釋什麼是 ETF',
              cold: {
                en: 'It’s like a lot of stocks put together.',
                zh: '它就像很多股票放在一起。',
              },
              warm: {
                en: 'An ETF is a fund that holds many companies and trades on the market like a single stock.',
                zh: 'ETF 是一種持有許多公司的基金，而且可以像單一股票一樣在市場上交易。',
              },
              whyEn: 'The second version names three things: what it is, what it holds, and how you buy it. The first could describe a fund, an index or a hunch.',
              whyZh: '第二種說法講清楚了三件事：它是什麼、它持有什麼、你怎麼買到它。第一種說法則可能在講基金、指數，或只是一種模糊印象。',
            },
            {
              caseEn: 'Talking about how risky something is',
              caseZh: '談某項投資的風險高低',
              cold: {
                en: 'This one is pretty safe.',
                zh: '這一個蠻安全的。',
              },
              warm: {
                en: 'This one carries less risk than individual stocks, but it is not risk-free.',
                zh: '這一個的風險比個股低，但並非完全沒有風險。',
              },
              whyEn: '“Safe” is an absolute; risk is a comparison. Naming what it is less risky than is the whole content of the sentence.',
              whyZh: '「安全」是絕對的說法，風險卻是比較出來的。說出它「比什麼」風險低，才是這句話真正的內容。',
            },
            {
              caseEn: 'Talking about what you might earn',
              caseZh: '談可能賺到多少',
              cold: {
                en: 'You can make good money with this.',
                zh: '這個可以賺不少錢。',
              },
              warm: {
                en: 'It has a higher potential return, and higher risk along with it.',
                zh: '它有較高的潛在報酬，同時也伴隨較高的風險。',
              },
              whyEn: '“Potential” does the honest work that “can” hides. And naming the risk in the same breath is what separates a description from a sales pitch.',
              whyZh: '「潛在的」老實地說出了「可以」所隱藏的東西。而在同一句話裡把風險一起講出來，正是「描述」與「推銷」的分界線。',
            },
          ],
        },

        {
          t: 'summary',
          en: 'The one advantage you have that no amount of money can buy is time. Compound growth is what happens when your returns start earning returns of their own. Invest NT$10,000 at an average 5% a year and after twelve months you have about NT$10,500; in the second year the extra NT$500 is working too. Over one year that is barely worth mentioning. Over thirty it is the whole story — which is why starting early can matter more than starting big. The honest footnote: 5% is an average, not a promise. Some years the market rises and some years it falls.',
          zh: '你擁有一項再多錢也買不到的優勢：時間。複利成長，就是你的報酬開始產生自己的報酬。以新台幣 10,000 元、年平均報酬率 5% 計算，一年後你大約有 10,500 元；到了第二年，多出來的那 500 元也在替你工作。只看一年，這幾乎不值一提；但看三十年，這就是全部的重點——這也是為什麼「提早開始」可能比「一開始金額大」更重要。誠實的附註：5% 是平均值，不是承諾。市場有些年份上漲，有些年份下跌。',
        },

        {
          t: 'summary',
          en: 'Nobody knows the perfect moment to buy — professionals included. One practical answer to that is dollar-cost averaging: put in a fixed amount on a fixed schedule, say NT$1,000 every month, and stop trying to be clever about timing. When the price is high your money buys fewer units; when it is low it buys more. What this removes is the pressure of the decision, not the risk. The value can still fall.',
          zh: '沒有人知道最完美的進場時機——專業投資人也不知道。對此有一個務實的做法：定期定額。固定時間投入固定金額，比如每個月新台幣 1,000 元，然後不要再想著抓時機。價格高的時候，同樣的錢買到的單位數比較少；價格低的時候買到的比較多。這個做法消除的是決策的壓力，不是風險。價值仍然可能下跌。',
        },

        {
          t: 'summary',
          en: 'Fees look small and behave large. An ETF usually charges an annual management fee, and you may pay trading fees or tax each time you buy and sell. A difference of well under one percent sounds like nothing; stretched across decades it is not nothing. This does not mean the cheapest option is the best one — it means the cost is one of the things you check, every time, before you decide.',
          zh: '費用看起來很小，作用卻很大。ETF 通常會收取年度管理費，而你每次買賣時，也可能要付交易手續費或稅。不到百分之一的差距聽起來微不足道，但拉長到幾十年，那就不是微不足道了。這不代表最便宜的就是最好的——而是代表：每一次做決定之前，費用都是你要檢查的項目之一。',
        },

        {
          t: 'phrases',
          en: 'Time, and what it costs',
          zh: '時間，以及它的成本',
          items: [
            {
              en: 'compound growth',
              zh: '複利成長',
              eg: 'Compound growth becomes more powerful over time.',
              egZh: '複利成長會隨著時間變得越來越強大。',
            },
            {
              en: 'dollar-cost averaging',
              zh: '定期定額投資',
              eg: 'Dollar-cost averaging reduces the need to predict the market.',
              egZh: '定期定額投資減少了預測市場的必要。',
            },
            {
              en: 'potential return',
              zh: '潛在報酬',
              eg: 'Investors compare risk with potential return.',
              egZh: '投資人會拿風險與潛在報酬做比較。',
            },
            {
              en: 'a profit',
              zh: '利潤、獲利',
              eg: 'No investment can guarantee a profit.',
              egZh: '沒有任何投資能保證獲利。',
            },
            {
              en: 'a loss',
              zh: '損失',
              eg: 'Investors should be prepared for possible losses.',
              egZh: '投資人應該為可能的損失做好準備。',
            },
            {
              en: 'a fee',
              zh: '費用',
              eg: 'High fees can reduce long-term returns.',
              egZh: '高額費用會降低長期報酬。',
            },
            {
              en: 'a management fee',
              zh: '管理費',
              eg: 'ETFs usually charge an annual management fee.',
              egZh: 'ETF 通常會收取年度管理費。',
            },
            {
              en: 'a trading fee',
              zh: '交易手續費',
              eg: 'Frequent trading may lead to higher trading fees.',
              egZh: '頻繁交易可能導致更高的交易手續費。',
            },
          ],
        },

        {
          t: 'summary',
          en: 'Never buy something because it is popular online. Influencers, celebrities and friends may not understand the risks themselves, and some of them are paid to talk about it. The reading offers seven questions to ask first, and they are worth memorising: What am I buying? What does it hold? How does it make money? What are the risks? What fees do I pay? How long can I leave the money in? Could I afford to lose it? Then the test that covers all seven — if you cannot explain it in simple language, you do not understand it yet.',
          zh: '絕對不要因為某樣東西在網路上很紅就買它。網紅、名人和朋友自己可能都不了解其中的風險，而且其中有些人是拿錢在講話的。這篇文章提出了七個該先問的問題，值得背下來：我買的是什麼？它持有哪些東西？它靠什麼賺錢？有哪些風險？我要付哪些費用？這筆錢我可以放多久？如果賠掉了，我承受得起嗎？然後是涵蓋這七題的總測驗——如果你沒辦法用簡單的話說明它，就代表你還沒真的懂。',
        },

        {
          t: 'summary',
          en: 'And before any of it: habits. Learn to make a budget, control spending you do not care about, stay out of debt, and save part of whatever comes in. Investing cannot fix poor money habits — it enlarges whatever habits you already have. A simple start is to split money three ways, into spending, saving and investing. The exact percentages matter far less than doing it every month. If you want to see how markets move before real money is involved, a virtual investment account will show you that for free.',
          zh: '而在這一切之前：習慣。學會編列預算、控制那些你其實並不在乎的支出、遠離債務，並把進來的錢存下一部分。投資無法修正糟糕的金錢習慣——它只會把你原有的習慣放大。一個簡單的起點，是把錢分成三份：日常支出、儲蓄、投資。確切的比例遠不如「每個月都做」來得重要。如果你想在真正投入金錢之前先看看市場如何變動，虛擬投資帳戶可以免費讓你看到。',
        },

        {
          t: 'quote',
          en: 'The earlier you understand money, the more choices you may have in the future.',
          zh: '你越早了解金錢，未來就可能擁有越多選擇。',
          by: 'the closing line of the reading 本篇閱讀的結語',
        },

        {
          t: 'part',
          n: 'Quiz',
          en: 'Check what stayed',
          zh: '看看留下了什麼',
        },

        {
          t: 'mcq',
          en: 'Did you get it?',
          zh: '你讀懂了嗎？',
          hintEn: 'Ten questions on the reading above. A wrong answer fades and the question stays open, so try again — nothing is scored and nothing is recorded.',
          hintZh: '關於上面那篇閱讀的十個問題。答錯的選項會變淡，題目仍然開著，可以再試一次——不計分，也不會留下紀錄。',
          items: [
            {
              q: 'You leave NT$1,000 in a box at home for five years. What does the reading say the real problem is?',
              qZh: '你把新台幣 1,000 元放在家裡的盒子裡五年。文章認為真正的問題是什麼？',
              options: [
                'Somebody may take it',
                'Prices may rise, so the same money buys less',
                'The bank will charge you a fee',
              ],
              answer: 1,
            },
            {
              q: 'What is the main difference between saving and investing?',
              qZh: '儲蓄和投資最主要的差別是什麼？',
              options: [
                'The length of time the money is meant for',
                'The amount of money you need to start',
                'Whether you use a bank or not',
              ],
              answer: 0,
            },
            {
              q: 'When you buy a bond, what are you actually doing?',
              qZh: '當你購買債券時，你實際上在做什麼？',
              options: [
                'Buying a small part of a company',
                'Buying a basket of shares',
                'Lending money to a government or a company',
              ],
              answer: 2,
            },
            {
              q: 'What makes an ETF different from an ordinary fund?',
              qZh: 'ETF 和一般基金的差別在哪裡？',
              options: [
                'It always holds more companies',
                'It can be bought and sold on the market like a single stock',
                'Its value cannot fall',
              ],
              answer: 1,
            },
            {
              q: 'What does a market index measure?',
              qZh: '市場指數衡量的是什麼？',
              options: [
                'How a group of companies is performing',
                'How much a fund charges in fees',
                'How many people are investing this year',
              ],
              answer: 0,
            },
            {
              q: 'According to the reading, what does diversification actually do?',
              qZh: '根據文章，分散投資真正的作用是什麼？',
              options: [
                'It guarantees a profit over the long term',
                'It removes the risk of losing money',
                'It reduces the damage one poor investment can do',
              ],
              answer: 2,
              why: {
                en: 'This is the sentence people get wrong most often. Diversification limits the harm from one bad choice; it does not promise a profit, and it will not save you when a whole market falls.',
                zh: '這是最常被誤解的一句話。分散投資限制的是「單一個錯誤決定」帶來的傷害；它不保證獲利，當整個市場一起下跌時也救不了你。',
              },
            },
            {
              q: 'Compound growth is what happens when…',
              qZh: '複利成長是指什麼情況？',
              options: [
                'you add more of your own money every year',
                'your returns start earning returns of their own',
                'the price of an investment rises every single year',
              ],
              answer: 1,
            },
            {
              q: 'Dollar-cost averaging means…',
              qZh: '定期定額投資的意思是……',
              options: [
                'buying only when the price is low',
                'spreading your money across many countries',
                'investing a fixed amount on a regular schedule',
              ],
              answer: 2,
              why: {
                en: 'The point is the schedule, not the price. It removes the pressure of choosing a moment — it does not remove the risk, and the value can still fall.',
                zh: '重點在於固定的時間表，而不是價格。它消除的是「挑時機」的壓力——不是風險，價值仍然可能下跌。',
              },
            },
            {
              q: 'Why does the reading say a fee of well under one percent is still worth checking?',
              qZh: '文章為什麼說連不到百分之一的費用都值得查清楚？',
              options: [
                'Because a high fee always means a badly run fund',
                'Because small differences add up over decades',
                'Because fees above one percent are not allowed',
              ],
              answer: 1,
              why: {
                en: 'And note what the reading does *not* say: the cheapest option is not automatically the best one. Cost is one of the things you check, every time — not the only one.',
                zh: '也要注意文章「沒有」說的部分：最便宜的並不自動就是最好的。費用是每一次都要檢查的項目之一，但不是唯一的項目。',
              },
            },
            {
              q: 'What does the reading say teenagers should do before they start investing?',
              qZh: '文章認為青少年在開始投資之前應該先做什麼？',
              options: [
                'Follow what is popular online to learn faster',
                'Borrow a small amount so they can start earlier',
                'Build basic money habits first',
              ],
              answer: 2,
            },
          ],
        },

        {
          t: 'mcq',
          en: 'What would you say?',
          zh: '你會怎麼回答？',
          hintEn: 'Six situations rather than six facts. Each one has an explanation waiting behind the answer — that is where the teaching is, so read it even when you got the question right.',
          hintZh: '這六題問的是情境，不是事實。每一題答對之後都會出現說明——真正的重點在那裡，所以就算答對了也要看。',
          items: [
            {
              q: 'A video promises “a guaranteed 20% return every year, with no risk.” What does the reading tell you to do?',
              qZh: '一支影片保證「每年 20% 報酬，零風險」。文章會告訴你怎麼做？',
              options: [
                'Treat the promise itself as the warning sign',
                'Put in a small amount to test whether it is true',
                'Check whether the person saying it is well known',
              ],
              answer: 0,
              why: {
                en: 'There is no investment that offers a high return with no risk, so the sentence cannot be true — which makes the sentence, not the product, the thing to react to. Checking who said it is beside the point; the reading warns about influencers and celebrities by name.',
                zh: '世界上不存在「高報酬又零風險」的投資，所以這句話不可能是真的——真正要反應的是「這句話」，而不是那項商品。查對方是誰也沒有用；文章正是點名網紅和名人提出警告的。',
              },
            },
            {
              q: 'A friend says an ETF is “completely safe, because it holds hundreds of companies.” What is the most accurate reply?',
              qZh: '朋友說某檔 ETF「完全安全，因為它持有數百家公司」。最精確的回答是什麼？',
              options: [
                '“You’re right — an ETF cannot lose value.”',
                '“It spreads the risk, but if the whole market falls it falls too.”',
                '“Individual stocks are actually safer than ETFs.”',
              ],
              answer: 1,
              why: {
                en: 'Diversification protects you from one company, not from the market. This is the precise-instead-of-vague move from earlier in the session: say what it is less risky than, and say what it does not protect against.',
                zh: '分散投資保護你不受「單一公司」影響，而不是不受「市場」影響。這正是這堂課前面練過的「把話說精確」：說出它比什麼風險低，也說出它擋不住什麼。',
              },
            },
            {
              q: 'Two ETFs follow the same index. One charges 0.10% a year, the other 0.85%. What does the reading actually say?',
              qZh: '兩檔 ETF 追蹤同一個指數，一檔年費 0.10%，另一檔 0.85%。文章實際上是怎麼說的？',
              options: [
                'The cheaper one is automatically the better choice',
                'A difference that small will not affect the result',
                'Cost is one of the things to compare — not the only one',
              ],
              answer: 2,
              why: {
                en: 'Both of the other answers are the easy mistakes: dismissing the fee because the number looks small, or letting the fee decide on its own. Over decades that gap is real money, and it is still only one of the seven questions.',
                zh: '另外兩個選項正是兩種常見的錯誤：因為數字看起來小就不當一回事，或是讓費用單獨決定一切。拉長到幾十年，那個差距是實際的金額；但它仍然只是七個問題裡的一個。',
              },
            },
            {
              q: 'You cannot explain what an investment holds or how it makes money. What does the reading’s own test say?',
              qZh: '你說不出某項投資持有什麼、靠什麼賺錢。文章自己的測試怎麼說？',
              options: [
                'You do not understand it well enough to buy it yet',
                'Buy a small amount and learn as you go',
                'Ask someone who already owns it to explain',
              ],
              answer: 0,
              why: {
                en: 'This is the line the whole session is built on. Note that it is a test you can apply to yourself, in your own words, without anyone else — which is exactly why it is worth having.',
                zh: '整堂課就是建立在這句話上。要注意的是，這是一個你可以用自己的話、獨自對自己做的測試——這正是它值得記住的原因。',
              },
            },
            {
              q: 'Someone with no emergency fund, and a debt they cannot repay, wants to start investing. What would the reading say?',
              qZh: '一個沒有緊急預備金、又背著還不起的債的人想開始投資。文章會怎麼說？',
              options: [
                'Start small — the returns will help clear the debt',
                'Build the habits first, because investing enlarges the habits you already have',
                'Borrow a little more so the amount is worth investing',
              ],
              answer: 1,
              why: {
                en: '“Investing cannot fix poor money habits” is the sentence. Money that has to come back out at the wrong moment is not invested — it is exposed, and a debt or an emergency decides the moment for you.',
                zh: '關鍵句是「投資無法修正糟糕的金錢習慣」。一筆隨時可能要在錯誤時機被抽出來的錢，並不算是在投資——它只是暴露在風險裡，而債務或突發狀況會替你決定那個時機。',
              },
            },
            {
              q: 'An ETF that invests in one industry only, using a complicated strategy, is…',
              qZh: '一檔只投資單一產業、而且使用複雜策略的 ETF，是……',
              options: [
                'safer than a broad-market ETF, because it is focused',
                'exactly as risky as any other ETF — they all work the same way',
                'potentially riskier than a broad-market ETF',
              ],
              answer: 2,
              why: {
                en: '“ETF” names how a thing is traded, not how risky it is. Two funds with the same three letters can sit at opposite ends of the risk range, which is why the reading tells you to look at what it holds, what it follows and what it charges.',
                zh: '「ETF」講的是這樣東西「怎麼交易」，不是「有多大風險」。同樣掛著這三個字母的兩檔基金，可能位在風險光譜的兩端——這正是文章要你去看它持有什麼、追蹤什麼、收多少費用的原因。',
              },
            },
          ],
        },

        {
          t: 'part',
          n: 'A',
          en: 'Habits, and the warning signs',
          zh: '習慣，以及警訊',
        },

        {
          t: 'phrases',
          en: 'Money habits, and what to watch for',
          zh: '金錢習慣與該注意的事',
          items: [
            {
              en: 'a budget',
              zh: '預算',
              eg: 'A monthly budget can help control spending.',
              egZh: '每月預算可以幫助控制支出。',
            },
            {
              en: 'an emergency fund',
              zh: '緊急預備金',
              eg: 'Build an emergency fund before investing heavily.',
              egZh: '在大量投資之前，先建立緊急預備金。',
            },
            {
              en: 'debt',
              zh: '債務',
              eg: 'Teenagers should understand the risks of taking on debt.',
              egZh: '青少年應該了解背負債務的風險。',
            },
            {
              en: 'a financial goal',
              zh: '財務目標',
              eg: 'Paying for university can be a long-term financial goal.',
              egZh: '支付大學學費可以是一個長期財務目標。',
            },
            {
              en: 'a scam',
              zh: '詐騙',
              eg: 'Guaranteed profits are often a warning sign of a scam.',
              egZh: '「保證獲利」往往是詐騙的警訊。',
            },
            {
              en: 'a virtual investment account',
              zh: '虛擬投資帳戶',
              eg: 'Beginners can learn with a virtual investment account.',
              egZh: '初學者可以用虛擬投資帳戶來學習。',
            },
          ],
        },

        {
          t: 'cards',
          en: 'Habits audit',
          zh: '習慣盤點',
          hintEn: 'Six habits the reading puts before investing. For each one, say whether it is already true of you or still something to build. There is no right answer and nothing is recorded.',
          hintZh: '文章認為在投資之前應該先具備的六個習慣。針對每一項，說說看它對你來說已經做到了，還是還要建立。沒有標準答案，也不會留下任何紀錄。',
          items: [
            {
              icon: '📋',
              en: 'A budget',
              zh: '一份預算',
              descEn: 'You know roughly what comes in each month and where it goes.',
              descZh: '你大致知道每個月有多少收入，以及這些錢去了哪裡。',
            },
            {
              icon: '🛟',
              en: 'An emergency fund',
              zh: '一筆緊急預備金',
              descEn: 'Money set aside for something unexpected, kept where you can reach it.',
              descZh: '為了突發狀況而留下的錢，放在隨時可以取用的地方。',
            },
            {
              icon: '✂️',
              en: 'Spending you have looked at',
              zh: '檢視過的支出',
              descEn: 'You have cut at least one thing you were paying for without caring about it.',
              descZh: '你至少砍掉過一項自己其實並不在意、卻一直在付錢的東西。',
            },
            {
              icon: '🚫',
              en: 'No debt you cannot repay',
              zh: '沒有還不起的債務',
              descEn: 'Nothing owed that you have no clear plan for clearing.',
              descZh: '沒有任何一筆你說不出還款計畫的欠款。',
            },
            {
              icon: '🎯',
              en: 'One financial goal',
              zh: '一個財務目標',
              descEn: 'A specific amount, for a specific thing, by a specific time.',
              descZh: '一個具體的金額，為了一件具體的事，在一個具體的時間之前。',
            },
            {
              icon: '🧪',
              en: 'Somewhere to practise',
              zh: '一個可以練習的地方',
              descEn: 'A virtual account, or a habit of following a market without buying anything.',
              descZh: '一個虛擬帳戶，或者「持續觀察市場但不下單」的習慣。',
            },
          ],
        },

        {
          t: 'part',
          n: 'B',
          en: 'Collocations — the words that travel together',
          zh: '搭配詞：習慣同行的字',
        },

        {
          t: 'phrases',
          en: 'Talking about investing',
          zh: '談投資',
          items: [
            {
              en: 'start investing',
              zh: '開始投資',
              eg: 'Teenagers can start investing after learning the basics.',
              egZh: '青少年可以在學會基本概念之後開始投資。',
            },
            {
              en: 'invest regularly',
              zh: '定期投資',
              eg: 'It is often easier to invest regularly than to time the market.',
              egZh: '定期投資通常比抓市場進出時機容易。',
            },
            {
              en: 'invest a fixed amount',
              zh: '投入固定金額',
              eg: 'He invests a fixed amount every month.',
              egZh: '他每個月投入固定的金額。',
            },
            {
              en: 'invest for the long term',
              zh: '進行長期投資',
              eg: 'Many people invest for the long term through ETFs.',
              egZh: '許多人透過 ETF 進行長期投資。',
            },
            {
              en: 'leave money invested',
              zh: '讓資金持續投資',
              eg: 'You should leave money invested only if you do not need it soon.',
              egZh: '只有在短期內不需要用到這筆錢時，才應該讓它持續投資。',
            },
            {
              en: 'research an investment',
              zh: '研究一項投資',
              eg: 'Students should research an investment before using real money.',
              egZh: '學生應該在動用真錢之前先研究一項投資。',
            },
            {
              en: 'understand an investment',
              zh: '了解一項投資',
              eg: 'Never buy something unless you understand the investment.',
              egZh: '除非你了解這項投資，否則絕對不要買。',
            },
            {
              en: 'make an investment',
              zh: '進行投資',
              eg: 'She made her first investment at the age of eighteen.',
              egZh: '她十八歲時做了人生第一筆投資。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Risk and return',
          zh: '風險與報酬',
          items: [
            {
              en: 'involve risk',
              zh: '涉及風險',
              eg: 'All investments involve risk.',
              egZh: '所有的投資都涉及風險。',
            },
            {
              en: 'carry risk',
              zh: '帶有風險',
              eg: 'Industry-focused ETFs may carry higher risk.',
              egZh: '集中在單一產業的 ETF 可能帶有較高的風險。',
            },
            {
              en: 'reduce risk',
              zh: '降低風險',
              eg: 'Diversification can help reduce risk.',
              egZh: '分散投資有助於降低風險。',
            },
            {
              en: 'manage risk',
              zh: '管理風險',
              eg: 'Good investors learn how to manage risk.',
              egZh: '好的投資人會學習如何管理風險。',
            },
            {
              en: 'afford to lose money',
              zh: '承受得起金錢損失',
              eg: 'Do not invest money you cannot afford to lose.',
              egZh: '不要投入你承受不起損失的錢。',
            },
            {
              en: 'earn a return',
              zh: '獲得報酬',
              eg: 'Investors hope to earn a return over time.',
              egZh: '投資人希望隨著時間獲得報酬。',
            },
            {
              en: 'guarantee a profit',
              zh: '保證獲利',
              eg: 'No responsible adviser should guarantee a profit.',
              egZh: '負責任的顧問不應該保證獲利。',
            },
            {
              en: 'balance risk and return',
              zh: '平衡風險與報酬',
              eg: 'Every investor must balance risk and return.',
              egZh: '每個投資人都必須平衡風險與報酬。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Stocks, funds and ETFs',
          zh: '股票、基金與 ETF',
          items: [
            {
              en: 'own shares',
              zh: '持有股份',
              eg: 'ETF investors indirectly own shares in many companies.',
              egZh: 'ETF 的投資人間接持有許多公司的股份。',
            },
            {
              en: 'hold many stocks',
              zh: '持有多檔股票',
              eg: 'A broad ETF may hold many stocks.',
              egZh: '一檔廣泛市場型 ETF 可能持有多檔股票。',
            },
            {
              en: 'track an index',
              zh: '追蹤指數',
              eg: 'This ETF tracks a major market index.',
              egZh: '這檔 ETF 追蹤一個主要的市場指數。',
            },
            {
              en: 'spread money across investments',
              zh: '將資金分散到不同投資',
              eg: 'Funds spread money across different investments.',
              egZh: '基金會將資金分散到不同的投資標的。',
            },
            {
              en: 'build a diversified portfolio',
              zh: '建立多元化投資組合',
              eg: 'ETFs can help beginners build a diversified portfolio.',
              egZh: 'ETF 可以幫助初學者建立多元化的投資組合。',
            },
            {
              en: 'focus on one industry',
              zh: '集中投資單一產業',
              eg: 'Some ETFs focus on one industry, such as technology.',
              egZh: '有些 ETF 只集中投資單一產業，例如科技業。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'When the market moves',
          zh: '市場變動時',
          items: [
            {
              en: 'the market rises',
              zh: '市場上漲',
              eg: 'Investors often feel confident when the market rises.',
              egZh: '市場上漲時，投資人常常感到有信心。',
            },
            {
              en: 'the market falls',
              zh: '市場下跌',
              eg: 'ETF prices may decline when the market falls.',
              egZh: '市場下跌時，ETF 的價格也可能下滑。',
            },
            {
              en: 'predict the market',
              zh: '預測市場',
              eg: 'Even experts cannot always predict the market.',
              egZh: '即使是專家，也無法每次都預測市場。',
            },
            {
              en: 'time the market',
              zh: '抓市場進出時機',
              eg: 'Trying to time the market can be stressful and risky.',
              egZh: '試圖抓市場進出時機，可能既有壓力又有風險。',
            },
            {
              en: 'experience market volatility',
              zh: '經歷市場波動',
              eg: 'Investors must be prepared to experience market volatility.',
              egZh: '投資人必須做好經歷市場波動的準備。',
            },
            {
              en: 'respond to market changes',
              zh: '因應市場變化',
              eg: 'Long-term investors should not overreact to market changes.',
              egZh: '長期投資人不應該對市場變化反應過度。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'Saving, budgeting, and costs',
          zh: '儲蓄、預算與成本',
          items: [
            {
              en: 'build an emergency fund',
              zh: '建立緊急預備金',
              eg: 'Build an emergency fund before taking major investment risks.',
              egZh: '在承擔重大投資風險之前，先建立緊急預備金。',
            },
            {
              en: 'make a budget',
              zh: '編列預算',
              eg: 'A student can make a budget for food, transport, and entertainment.',
              egZh: '學生可以為餐費、交通和娛樂編列預算。',
            },
            {
              en: 'control spending',
              zh: '控制支出',
              eg: 'Good financial habits begin with controlling spending.',
              egZh: '良好的財務習慣從控制支出開始。',
            },
            {
              en: 'avoid debt',
              zh: '避免債務',
              eg: 'It is important to avoid debt that you cannot repay.',
              egZh: '避開你還不起的債務，這件事很重要。',
            },
            {
              en: 'set a financial goal',
              zh: '設定財務目標',
              eg: 'He set a financial goal of saving NT$20,000.',
              egZh: '他設下了存到新台幣 20,000 元的財務目標。',
            },
            {
              en: 'charge a fee',
              zh: '收取費用',
              eg: 'Some funds charge a high management fee.',
              egZh: '有些基金會收取高額的管理費。',
            },
            {
              en: 'compare costs',
              zh: '比較成本',
              eg: 'Always compare costs before selecting an ETF.',
              egZh: '在選擇 ETF 之前，一定要先比較成本。',
            },
            {
              en: 'keep fees low',
              zh: '維持低費用',
              eg: 'Many long-term investors try to keep fees low.',
              egZh: '許多長期投資人會設法維持低費用。',
            },
          ],
        },

        {
          t: 'match',
          en: 'Term and meaning',
          zh: '術語與意思',
          hintEn: 'Click a term on the left, then the definition that belongs to it on the right.',
          hintZh: '先點左邊的術語，再點右邊對應的定義。',
          pairs: [
            { a: 'an asset', b: 'something valuable that a person or company owns' },
            { a: 'a bond', b: 'money lent to a government or company' },
            { a: 'a market index', b: 'a measure of how a group of companies is performing' },
            { a: 'diversification', b: 'spreading money across different investments' },
            { a: 'compound growth', b: 'growth created when returns earn further returns' },
            { a: 'dollar-cost averaging', b: 'investing a fixed amount regularly' },
            { a: 'inflation', b: 'a general increase in prices over time' },
            { a: 'an emergency fund', b: 'money saved for unexpected expenses' },
          ],
        },

        {
          t: 'gap',
          en: 'Choose the collocation',
          zh: '選出正確的搭配詞',
          hintEn: 'One of the three fits the sentence. Tap the Chinese for the situation if you want it.',
          hintZh: '三個選項中只有一個適合這個句子。想看情境的話，可以點開中文。',
          items: [
            {
              text: 'All investments ___ risk; the only question is how much.',
              textZh: '所有的投資都涉及風險，問題只在於風險有多大。',
              options: ['involve', 'remove', 'guarantee'],
              answer: 0,
              why: {
                en: '“Involve risk” and “carry risk” are the two standard pairings. Nothing removes risk, and only a scam guarantees anything.',
                zh: '「involve risk」和「carry risk」是兩個標準搭配。沒有東西能移除風險，而只有詐騙才會保證什麼。',
              },
            },
            {
              text: 'Do not invest money you cannot ___ to lose.',
              textZh: '不要投入你承受不起損失的錢。',
              options: ['manage', 'afford', 'allow'],
              answer: 1,
              why: {
                en: '“Afford to lose” is fixed. It is about whether the loss would damage your life, not about whether you would mind.',
                zh: '「afford to lose」是固定用法。它問的是這筆損失會不會傷到你的生活，而不是你會不會不高興。',
              },
            },
            {
              text: 'This fund ___ a major market index rather than picking companies itself.',
              textZh: '這檔基金追蹤一個主要的市場指數，而不是自己挑選公司。',
              options: ['watches', 'follows up', 'tracks'],
              answer: 2,
              why: {
                en: '“Track an index” is the technical verb. “Follow” works in ordinary speech, but “follow up” means something else entirely.',
                zh: '「track an index」是這個領域的專業動詞。日常說話用「follow」也可以，但「follow up」的意思完全不同。',
              },
            },
            {
              text: 'Dollar-cost averaging means investing a fixed amount ___.',
              textZh: '定期定額投資的意思，是定期投入固定的金額。',
              options: ['regularly', 'carefully', 'immediately'],
              answer: 0,
              why: {
                en: 'The whole method is the schedule. Take “regularly” out and you have described a single purchase.',
                zh: '這個方法的重點就在於「固定的時間表」。拿掉 regularly，你描述的就只是一次性的買進。',
              },
            },
            {
              text: 'Trying to ___ the market is stressful, and professionals are not reliably good at it either.',
              textZh: '試圖抓市場的進出時機是有壓力的，而且連專業人士也不是每次都抓得準。',
              options: ['guess', 'time', 'count'],
              answer: 1,
              why: {
                en: '“Time the market” — buying at the perfect moment — is a set phrase, and `time` is the verb.',
                zh: '「time the market」是固定說法，指的是在最完美的時機買進，這裡的 time 是動詞。',
              },
            },
          ],
        },

        {
          t: 'part',
          n: 'C',
          en: 'One word, several shapes',
          zh: '同一個字的不同詞性',
        },

        {
          t: 'note',
          en: 'Word families',
          zh: '詞性家族',
          bodyEn: 'Most of the key words in this lesson come in three shapes — a noun, a verb and an adjective — and choosing the wrong one is the most common mistake in an otherwise correct sentence. Invest / an investment / invested. Diversify / diversification / diversified. Grow / growth / growing. Risk / risk / risky. Predict / prediction / predictable. Profit / profit / profitable. Lose / a loss / losing. Say the sentence out loud and the shape usually announces itself.',
          bodyZh: '這堂課裡大部分的關鍵字都有三種形態——名詞、動詞、形容詞——而選錯形態，正是一個句子其他地方都對、卻仍然錯掉的最常見原因。invest／an investment／invested。diversify／diversification／diversified。grow／growth／growing。risk／risk／risky。predict／prediction／predictable。profit／profit／profitable。lose／a loss／losing。把句子唸出聲來，正確的形態通常會自己浮現。',
        },

        {
          t: 'gap',
          en: 'Choose the right form',
          zh: '選出正確的詞性',
          hintEn: 'All three options are real words from the same family. Only one has the right shape for this sentence.',
          hintZh: '三個選項都是同一個家族裡的真字，但只有一個的詞性適合這個句子。',
          items: [
            {
              text: 'Putting everything into one technology company is ___.',
              textZh: '把所有的錢押在一家科技公司上，是有風險的。',
              options: ['risk', 'risky', 'risking'],
              answer: 1,
              why: {
                en: 'After “is”, you need the adjective. “Is a risk” would also work — but then the noun needs its article.',
                zh: '「is」後面要接形容詞。說「is a risk」也可以，但那時名詞就需要冠詞。',
              },
            },
            {
              text: 'Buying one broad-market ETF is an easy way to ___.',
              textZh: '買進一檔廣泛市場型 ETF，是分散投資的一個簡單方法。',
              options: ['diversified', 'diversification', 'diversify'],
              answer: 2,
              why: {
                en: '“A way to ___” takes the base verb. The noun would need “a way to achieve diversification”.',
                zh: '「a way to ___」後面接動詞原形。若要用名詞，得說「a way to achieve diversification」。',
              },
            },
            {
              text: 'Even professional investors cannot reliably ___ the market.',
              textZh: '即使是專業投資人，也無法可靠地預測市場。',
              options: ['prediction', 'predict', 'predictable'],
              answer: 1,
              why: {
                en: '“Cannot” is followed by a bare verb. “Make a reliable prediction about the market” is the noun version.',
                zh: '「cannot」後面接動詞原形。名詞版本要說「make a reliable prediction about the market」。',
              },
            },
            {
              text: 'Over thirty years, keeping costs low can make a plan far more ___.',
              textZh: '在三十年的尺度上，維持低成本可以讓一個計畫的獲利能力高出許多。',
              options: ['profit', 'profited', 'profitable'],
              answer: 2,
              why: {
                en: '“More ___” is a comparative, so it needs the adjective.',
                zh: '「more ___」是比較級，所以要用形容詞。',
              },
            },
            {
              text: 'She decided to ___ part of her income every month before spending anything.',
              textZh: '她決定每個月在花錢之前，先把一部分收入存起來。',
              options: ['save', 'saving', 'savings'],
              answer: 0,
              why: {
                en: '“Decided to ___” takes the base verb. “Savings” is the money itself, and it is always plural.',
                zh: '「decided to ___」後面接動詞原形。「savings」指的是那筆錢本身，而且永遠是複數。',
              },
            },
          ],
        },

        {
          t: 'part',
          n: 'D',
          en: 'Now say it yourself',
          zh: '換你來說',
        },

        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的看法是？',
          hintEn: 'No right answers. Pick one and be ready to say why — that sentence is the exercise.',
          hintZh: '沒有標準答案。選一個，並準備好說明理由——那句理由才是真正的練習。',
          items: [
            {
              en: 'I would rather own one company I believe in than an ETF holding hundreds I have never heard of.',
              zh: '比起持有一檔包含數百家我沒聽過的公司的 ETF，我寧願擁有一家我真正相信的公司。',
            },
            {
              en: 'Investing before you have an emergency fund is a mistake.',
              zh: '在還沒有緊急預備金之前就開始投資，是個錯誤。',
            },
            {
              en: 'At my age, learning about money matters more than actually investing any.',
              zh: '在我這個年紀，了解金錢比真的投入金錢更重要。',
            },
            {
              en: 'If an investment is popular online, that is a reason to be more careful, not less.',
              zh: '如果一項投資在網路上很紅，那是更該小心的理由，而不是更放心的理由。',
            },
            {
              en: '“Boring” is a compliment when we are talking about investing.',
              zh: '談到投資的時候，「無聊」是一種稱讚。',
            },
          ],
        },

        {
          t: 'discuss',
          en: 'Talk it through',
          zh: '一起討論',
          items: [
            {
              en: 'What did you assume about investing before you read this, and did anything in the reading change it?',
              zh: '在讀這篇文章之前，你對投資有什麼樣的想法？文章裡有什麼改變了它嗎？',
              starters: [
                { en: 'I used to assume that…', zh: '我以前一直以為……' },
                { en: 'What surprised me was…', zh: '讓我意外的是……' },
                { en: 'I still do not really understand why…', zh: '我到現在還是不太懂為什麼……' },
              ],
            },
            {
              en: 'Of the seven questions to ask before investing, which one would be hardest for you to answer?',
              zh: '投資前該問的七個問題當中，哪一題對你來說最難回答？',
              starters: [
                { en: 'The hardest one for me would be…', zh: '對我來說最難的是……' },
                { en: 'I could answer that one for… but not for…', zh: '這一題我回答得出……，但答不出……' },
                { en: 'That question is difficult because…', zh: '這一題困難的原因在於……' },
              ],
            },
            {
              en: 'The reading says good investing is slow, disciplined and sometimes boring. Does that match what you see online?',
              zh: '文章說好的投資是緩慢、有紀律、有時甚至有點無聊的。這和你在網路上看到的一樣嗎？',
              starters: [
                { en: 'That is the opposite of what I usually see, because…', zh: '這和我平常看到的正好相反，因為……' },
                { en: 'The accounts I follow tend to…', zh: '我追蹤的那些帳號往往會……' },
                { en: 'I think the difference is that…', zh: '我覺得差別在於……' },
              ],
            },
            {
              en: 'Right now, where does your money actually go — spending, saving, or investing?',
              zh: '就現在來說，你的錢實際上都去了哪裡——支出、儲蓄，還是投資？',
              starters: [
                { en: 'Most of it goes on…', zh: '大部分都花在……' },
                { en: 'I save whatever is left, which is…', zh: '我會把剩下的存起來，也就是……' },
                { en: 'I have never really tracked it, but I would guess…', zh: '我其實從來沒有認真記過，但我猜大概是……' },
              ],
            },
            {
              en: 'Would you rather practise with a virtual account or start with a small real amount? What does each one teach you that the other does not?',
              zh: '你比較想用虛擬帳戶練習，還是從一小筆真的錢開始？這兩種做法各自能教你什麼，是另一種教不了的？',
              starters: [
                { en: 'I would start with… because…', zh: '我會先選……，因為……' },
                { en: 'The problem with a virtual account is that…', zh: '虛擬帳戶的問題在於……' },
                { en: 'Real money would make me…', zh: '真的錢會讓我……' },
              ],
            },
          ],
        },

        {
          t: 'task',
          en: 'Explain it in simple language',
          zh: '用簡單的話說明它',
          instructionEn: 'Pick one prompt and talk for about a minute. The test from the reading applies: if you cannot explain it simply, you do not understand it yet — so no reading off the cards, and no sentence you could not say to a friend who knows nothing about this.',
          instructionZh: '選一個題目，說大約一分鐘。文章裡那個測試在這裡適用：如果你沒辦法用簡單的話說明，就代表你還沒真的懂——所以不要照著字卡唸，也不要說出任何你沒辦法對一個完全外行的朋友講的句子。',
          prompts: [
            {
              en: 'Explain what an ETF is to someone who has never heard the word.',
              zh: '向一個從沒聽過這個字的人解釋什麼是 ETF。',
            },
            {
              en: 'Explain why NT$1,000 kept in a box for five years is not really still NT$1,000.',
              zh: '解釋為什麼放在盒子裡五年的 1,000 元，其實已經不再是 1,000 元。',
            },
            {
              en: 'Explain to a friend why “guaranteed profit” should make them walk away.',
              zh: '向朋友解釋為什麼聽到「保證獲利」時應該轉身就走。',
            },
            {
              en: 'Explain what compound growth is, using a number and a length of time.',
              zh: '用一個數字和一段時間，解釋什麼是複利成長。',
            },
            {
              en: 'Explain why fees of less than one percent are still worth checking.',
              zh: '解釋為什麼不到百分之一的費用仍然值得查清楚。',
            },
          ],
          checklist: [
            { en: 'involve risk', zh: '涉及風險' },
            { en: 'potential return', zh: '潛在報酬' },
            { en: 'spread money across different investments', zh: '把資金分散到不同投資' },
            { en: 'over the long term', zh: '就長期而言' },
            { en: 'it is not risk-free', zh: '它並非毫無風險' },
            { en: 'purchasing power', zh: '購買力' },
          ],
          frames: [
            {
              en: 'Investing means using money to buy assets that may increase in value.',
              zh: '投資是指使用金錢購買可能會增值的資產。',
            },
            {
              en: 'An ETF allows investors to own small parts of many companies.',
              zh: 'ETF 讓投資人可以同時持有許多公司的一小部分。',
            },
            {
              en: 'Diversification can reduce risk, but it cannot guarantee a profit.',
              zh: '分散投資可以降低風險，但不能保證獲利。',
            },
            {
              en: 'Higher potential returns usually come with higher risk.',
              zh: '較高的潛在報酬通常伴隨較高的風險。',
            },
            {
              en: 'Investors should understand what they are buying before investing.',
              zh: '投資人在投入資金之前，應該了解自己購買的是什麼。',
            },
            {
              en: 'Compound growth becomes more powerful when money stays invested for a long time.',
              zh: '當資金長期持續投資時，複利成長會變得更強大。',
            },
            {
              en: 'Investment fees may seem small, but they can reduce long-term returns.',
              zh: '投資費用看起來可能很少，但會降低長期報酬。',
            },
            {
              en: 'Good investing depends on patience, research, and discipline.',
              zh: '良好的投資取決於耐心、研究與紀律。',
            },
          ],
        },
      ],
    },
  ],
};
