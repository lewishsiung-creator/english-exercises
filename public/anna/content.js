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

   NO MARKDOWN. The renderer escapes every string it is given, so *asterisks*
   and _underscores_ appear on the page exactly as typed rather than turning
   into emphasis. Put the stress in the wording, or in “quotation marks”.

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
     cards     have it / need it cards, for auditing something. Set
               haveEn/haveZh and needEn/needZh whenever the list is not people —
               the built-in Chinese says "I have such a person"
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
                en: 'Note the sentence the reading refuses to write: “cheaper is better.” Cost is one of the things you check, every time — not the only one, and never the deciding one on its own.',
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
          haveEn: 'I have this',
          haveZh: '我已經做到',
          needEn: 'Still to build',
          needZh: '還要建立',
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

    {
      id: 's2',
      n: 2,
      en: 'Spending it well: the half of money nobody teaches',
      zh: '把錢花好：金錢裡沒人教的那一半',

      focus: [
        { en: 'Spending is psychology', zh: '花錢是心理學' },
        { en: 'What money cannot fix', zh: '錢碰不到的地方' },
        { en: 'Adaptation and negative returns', zh: '享樂適應與負報酬' },
        { en: 'Social debt', zh: '社交負債' },
        { en: 'Owning your own time', zh: '擁有自己的時間' },
      ],

      blocks: [
        {
          t: 'lead',
          en: 'Last time was about getting money to grow. This time is the other half, and the half almost nobody is taught: what to do with it once it is there. Morgan Housel\u2019s argument is that these are not the same skill, and that being excellent at the first tells you nothing about the second.',
          zh: '上一次談的是怎麼讓錢長大。這一次談的是另外一半，也是幾乎沒有人教過的一半：錢到手之後，要拿它怎麼辦。Morgan Housel 的看法是，這兩件事並不是同一種能力——第一件事做得再好，也完全不能拿來預測第二件事。',
        },

        {
          t: 'part',
          n: '1',
          en: 'Why spending isn\u2019t math',
          zh: '為什麼花錢不是數學',
        },

        {
          t: 'summary',
          en: 'Housel begins where he began: parking cars as a college valet, watching a wealthy man buy a $21,000 armchair. Not because he had sat in it and loved it. Because that, he felt, was what rich people were supposed to do. The premise of the whole book is in that scene \u2014 money and spending are psychological rather than mathematical, and being good at acquiring wealth is a completely different skill from being good at using it.',
          zh: 'Housel 從他自己的起點講起：大學時代在停車場當泊車小弟，看著一位有錢人花兩萬一千美元買下一張扶手椅。不是因為他坐過、愛上了它，而是因為他覺得「有錢人就該這樣花」。整本書的前提都在那個畫面裡——金錢與消費本質上是心理學，而不是數學；會賺錢和會用錢，是兩種完全不同的能力。',
        },

        {
          t: 'summary',
          en: 'The idea that follows from it runs through the rest of the book: everyone\u2019s spending makes sense once you know their history. What looks absurd from outside usually has a reason inside \u2014 something someone grew up without, or grew up watching. Which makes judging other people\u2019s purchases, and letting other people judge yours, mostly a waste of energy.',
          zh: '由此延伸出來的觀念貫穿全書：只要你了解一個人的成長背景，他的花錢方式其實都說得通。從外面看起來很荒謬的選擇，裡面通常都有原因——某樣他小時候沒有的東西，或是他從小看著別人怎麼做的樣子。這也讓「評斷別人怎麼花錢」，以及「讓別人來評斷你」，大多只是白費力氣。',
        },

        {
          t: 'phrases',
          en: 'Two different skills',
          zh: '兩種不同的能力',
          items: [
            {
              en: 'acquire wealth',
              zh: '累積財富',
              eg: 'Being good at acquiring wealth says nothing about how well you spend it.',
              egZh: '很會累積財富，完全不代表你懂得怎麼花它。',
            },
            {
              en: 'a completely different skill',
              zh: '完全不同的一種能力',
              eg: 'Earning and spending well are completely different skills.',
              egZh: '會賺錢和會花錢，是完全不同的兩種能力。',
            },
            {
              en: 'be supposed to',
              zh: '應該要、被認為該要',
              eg: 'He bought it because that is what rich people are supposed to do.',
              egZh: '他之所以買下它，是因為他覺得有錢人就該這樣做。',
            },
            {
              en: 'it makes sense once you know\u2026',
              zh: '一旦你知道……，就說得通了',
              eg: 'Her spending makes sense once you know what she grew up without.',
              egZh: '一旦你知道她小時候缺過什麼，她的花錢方式就說得通了。',
            },
            {
              en: 'grow up without something',
              zh: '在缺少某樣東西的環境中長大',
              eg: 'People who grew up without security often spend on it later.',
              egZh: '在缺乏安全感的環境中長大的人，日後常常會為安全感花錢。',
            },
            {
              en: 'judge someone\u2019s choices',
              zh: '評斷某人的選擇',
              eg: 'Judging someone\u2019s choices from outside is usually a waste of energy.',
              egZh: '從外面評斷別人的選擇，通常只是白費力氣。',
            },
            {
              en: 'a waste of energy',
              zh: '白費力氣',
              eg: 'Worrying about what strangers think of your car is a waste of energy.',
              egZh: '擔心陌生人怎麼看你的車，是白費力氣。',
            },
          ],
        },

        {
          t: 'part',
          n: '2',
          en: 'What money can and can\u2019t fix',
          zh: '錢能解決什麼，不能解決什麼',
        },

        {
          t: 'summary',
          en: 'Housel then goes after the assumption underneath most financial ambition: that wealth automatically produces happiness. His argument is not that money does not help. It is that when we imagine having more of it, we picture only the parts of our life that would improve, and quietly leave out everything money cannot touch. His example is J. Paul Getty \u2014 at one point the richest man alive \u2014 who said he envied people with cheerful temperaments.',
          zh: '接著 Housel 直接挑戰大多數財務企圖心底下的那個假設：財富會自動帶來幸福。他的論點並不是「錢沒有用」，而是：當我們想像自己更有錢時，腦中浮現的只有那些會變好的部分，卻悄悄略過了所有錢碰不到的面向。他舉的例子是 J. Paul Getty——曾經的世界首富——這位富豪說，他羨慕那些天生性格開朗的人。',
        },

        {
          t: 'note',
          en: 'Why the daydream is always wrong',
          zh: '為什麼那個白日夢一定失準',
          bodyEn: 'Notice the shape of the error, because it is not really about money. When you imagine any large change \u2014 a different city, a different job, a different body \u2014 you compare your current life, problems included, against the new life with no problems at all — because you have not lived the new one long enough to know what its problems are. The daydream is not a lie. It is just an incomplete list.',
          bodyZh: '注意這個錯誤的「形狀」，因為它其實跟金錢無關。當你想像任何一個重大的改變——換一個城市、換一份工作、換一副身體——你拿來比較的，是「現在的生活，連同它所有的問題」對上「新的生活，一個問題都沒有」，因為你還沒在新的那邊住得夠久，不知道它的問題是什麼。那個白日夢並不是謊言，它只是一份不完整的清單。',
        },

        {
          t: 'contrast',
          en: 'The list you leave out',
          zh: '你漏掉的那一欄',
          hintEn: 'The same wish, said two ways. Both are honest \u2014 the second one has simply finished the sentence.',
          hintZh: '同一個願望的兩種說法。兩種都是誠實的，只是第二種把句子講完了。',
          coldEn: 'The daydream',
          coldZh: '白日夢的版本',
          warmEn: 'The whole sentence',
          warmZh: '把話講完的版本',
          items: [
            {
              caseEn: 'Imagining a much higher salary',
              caseZh: '想像一份高很多的薪水',
              cold: {
                en: 'If I earned three times as much, I wouldn\u2019t worry about anything.',
                zh: '如果我賺三倍，我就什麼都不用擔心了。',
              },
              warm: {
                en: 'If I earned three times as much, I\u2019d stop worrying about rent \u2014 and I\u2019d still be the person who worries.',
                zh: '如果我賺三倍，我就不會再擔心房租了——但我還是那個會擔心的人。',
              },
              whyEn: 'The first sentence quietly swaps one problem for no problems. The second names what would actually change, which is both smaller and more useful.',
              whyZh: '第一句話悄悄把「一個問題」換成了「沒有問題」。第二句說出真正會改變的是什麼——範圍更小，卻更有用。',
            },
            {
              caseEn: 'Talking about someone richer than you',
              caseZh: '談論一個比你有錢的人',
              cold: {
                en: 'He\u2019s got everything.',
                zh: '他什麼都有了。',
              },
              warm: {
                en: 'He\u2019s got everything money buys, which is a shorter list than it sounds.',
                zh: '他擁有一切錢買得到的東西——而那份清單比聽起來要短。',
              },
              whyEn: 'Getty is the counter-example the book uses, and the point is not that he was secretly miserable. It is that the one thing he wanted was not for sale.',
              whyZh: '書中用 Getty 當反例，重點並不是「他其實很不快樂」，而是：他唯一想要的那樣東西，並不在販售之列。',
            },
          ],
        },

        {
          t: 'phrases',
          en: 'What it can and cannot reach',
          zh: '它碰得到與碰不到的',
          items: [
            {
              en: 'produce happiness',
              zh: '帶來幸福',
              eg: 'Housel challenges the idea that wealth automatically produces happiness.',
              egZh: 'Housel 挑戰「財富會自動帶來幸福」這個想法。',
            },
            {
              en: 'money can\u2019t touch it',
              zh: '（那是）錢碰不到的',
              eg: 'We imagine what would improve and forget what money can\u2019t touch.',
              egZh: '我們想像那些會變好的部分，卻忘了那些錢碰不到的部分。',
            },
            {
              en: 'a cheerful temperament',
              zh: '開朗的性格',
              eg: 'The richest man alive envied people with cheerful temperaments.',
              egZh: '當時的世界首富，羨慕那些天生性格開朗的人。',
            },
            {
              en: 'envy someone',
              zh: '羨慕某人',
              eg: 'It is worth asking what you actually envy, and whether it is for sale.',
              egZh: '值得問問自己真正羨慕的是什麼，以及那樣東西買不買得到。',
            },
            {
              en: 'take something for granted',
              zh: '把某樣東西視為理所當然',
              eg: 'Whatever you buy, you will take it for granted sooner than you expect.',
              egZh: '不管你買了什麼，你都會比想像中更快把它視為理所當然。',
            },
          ],
        },

        {
          t: 'part',
          n: '3',
          en: 'Adaptation and negative returns',
          zh: '享樂適應與負報酬',
        },

        {
          t: 'summary',
          en: 'These are the two strongest sections of the book, and they work as a pair. Hedonic adaptation is the reason the first luxury car is thrilling and the fifth is just transport, and the reason the dream holiday house becomes, after a few summers, a place that needs maintenance. Nothing has gone wrong when this happens. It is simply what human beings do to anything that stays the same for long enough.',
          zh: '這是全書最精彩的兩段，而且它們是一組的。「享樂適應」就是為什麼第一台名車讓你興奮不已，第五台就只是代步工具；也是為什麼夢想中的度假屋，過幾個夏天之後，不過是另一個需要維護的地方。這件事發生的時候，並沒有任何東西出錯——那只是人類面對任何長期不變的事物時，本來就會有的反應。',
        },

        {
          t: 'summary',
          en: 'Negative returns are the sharper idea: spending that does not merely fail to improve your life but actively makes it worse. The boat and its endless maintenance. The car you are anxious about scratching. You paid for it, and then it starts charging you \u2014 in time, in attention, in a low background worry you did not have before. From which Housel draws the conclusion the book is really built on: sophistication is not maximising what you buy, it is minimising what you need to buy in order to be content. Every desire you genuinely eliminate functions like infinite income.',
          zh: '「負報酬」則是更銳利的一個概念：那些不只沒能讓生活變好、反而讓它變糟的消費。買了船之後無止盡的保養；一台讓你隨時擔心被刮傷的車。你付了錢，然後它開始向你收費——收你的時間、你的注意力，以及一種你以前沒有的、隱隱在背景裡的擔憂。由此 Housel 得出了整本書真正的結論：真正的財務成熟，不在於把買到的東西最大化，而在於把「需要買什麼才會滿足」最小化。每消除一個慾望，效果都等同於獲得無限的收入。',
        },

        {
          t: 'note',
          en: 'Infinite income',
          zh: '無限的收入',
          bodyEn: 'It is worth sitting with the arithmetic of that phrase. If a thing costs NT$30,000 and you want it, you need NT$30,000. If you genuinely stop wanting it, you need nothing \u2014 and no salary, however large, can beat nothing. That is why the book calls it infinite. The catch is the word “genuinely”: pretending not to want something is not the same move, and it does not pay.',
          bodyZh: '這句話裡的算術值得停下來想一想。如果一樣東西要價新台幣 30,000 元而你想要它，你就需要 30,000 元。如果你是真的不再想要它，你需要的是零——而再高的薪水，也贏不過零。這就是書中稱它為「無限」的原因。陷阱在「真的」這兩個字：假裝自己不想要，並不是同一件事，而且沒有任何效果。',
        },

        {
          t: 'phrases',
          en: 'Adaptation, and what costs you afterwards',
          zh: '適應，以及事後才開始收費的東西',
          items: [
            {
              en: 'hedonic adaptation',
              zh: '享樂適應',
              eg: 'Hedonic adaptation turns the fifth luxury car into transport.',
              egZh: '享樂適應會把第五台名車變成單純的代步工具。',
            },
            {
              en: 'wear off',
              zh: '（效果、新鮮感）逐漸消失',
              eg: 'The excitement wears off faster than the payments do.',
              egZh: '興奮感消失的速度，比分期付款結束的速度快得多。',
            },
            {
              en: 'a negative return',
              zh: '負報酬',
              eg: 'A boat can be a negative return: it costs more than money.',
              egZh: '一艘船可能是負報酬：它花掉的不只是錢。',
            },
            {
              en: 'actively worsen your life',
              zh: '反而讓生活變糟',
              eg: 'Some purchases actively worsen your life rather than simply disappointing you.',
              egZh: '有些消費不只是讓你失望，而是反而讓你的生活變糟。',
            },
            {
              en: 'be anxious about something',
              zh: '為某件事感到焦慮',
              eg: 'He is anxious about scratching the car he saved for.',
              egZh: '他為了那台存錢買下的車，隨時擔心它被刮傷。',
            },
            {
              en: 'upkeep / maintenance',
              zh: '維護、保養',
              eg: 'The holiday house is mostly maintenance now.',
              egZh: '那間度假屋現在幾乎只剩下維護的工作。',
            },
            {
              en: 'be content',
              zh: '感到滿足',
              eg: 'Sophistication is minimising what you need in order to be content.',
              egZh: '真正的成熟，是把「需要什麼才會滿足」最小化。',
            },
            {
              en: 'eliminate a desire',
              zh: '消除一個慾望',
              eg: 'Every desire you genuinely eliminate functions like infinite income.',
              egZh: '每一個你真心消除掉的慾望，效果都等同於無限的收入。',
            },
          ],
        },

        {
          t: 'cards',
          en: 'Adds to it, or charges you?',
          zh: '是加分，還是在向你收費？',
          hintEn: 'Six things people spend on. For each one, say which it would be for you \u2014 not which it is in general. The book\u2019s whole point is that the answer is different for different people, so a split down the middle is the expected result, not a wrong one.',
          hintZh: '六樣人們常花錢買的東西。針對每一項，說說看它對「你」而言會是哪一種——不是一般而言。這本書的核心正是「每個人的答案不一樣」，所以答案分散在兩邊是正常的，不是錯的。',
          haveEn: 'Adds to my life',
          haveZh: '讓生活變好',
          needEn: 'Would charge me',
          needZh: '反而會向我收費',
          items: [
            {
              icon: '🚗',
              en: 'A car you would be proud of',
              zh: '一台你會引以為傲的車',
              descEn: 'Better to drive \u2014 and something to worry about in every car park.',
              descZh: '開起來更好——同時也是每個停車場裡的一份擔心。',
            },
            {
              icon: '🏠',
              en: 'A holiday place of your own',
              zh: '一間屬於自己的度假住所',
              descEn: 'Always there when you want it. Always there when you don\u2019t.',
              descZh: '你想去的時候它都在。你不想去的時候，它也都在。',
            },
            {
              icon: '👟',
              en: 'Something everyone can recognise',
              zh: '一樣大家都認得出來的東西',
              descEn: 'A brand people read at a glance, on you.',
              descZh: '一個別人一眼就會讀出來、掛在你身上的品牌。',
            },
            {
              icon: '✈️',
              en: 'A trip you will remember',
              zh: '一趟你會記住的旅行',
              descEn: 'Nothing to maintain afterwards, and nothing to insure.',
              descZh: '事後沒有東西要保養，也沒有東西要保險。',
            },
            {
              icon: '⏳',
              en: 'Paying to save time',
              zh: '花錢換時間',
              descEn: 'A shorter commute, a delivery, help with something you hate doing.',
              descZh: '更短的通勤、外送，或請人幫你做你討厭做的事。',
            },
            {
              icon: '📚',
              en: 'A course or a skill',
              zh: '一堂課或一項技能',
              descEn: 'Costs time as well as money, and cannot be taken back off you.',
              descZh: '花掉的不只是錢，還有時間；但沒有人能把它從你身上收回去。',
            },
          ],
        },

        {
          t: 'part',
          n: '4',
          en: 'Social debt and status',
          zh: '社交負債與地位',
        },

        {
          t: 'summary',
          en: 'Social debt is Housel\u2019s name for the hidden cost that builds up when a purchase changes how other people see you \u2014 or how you see yourself. The bill does not arrive at the till. It arrives later, as an expectation you now have to keep meeting. From which he draws an unusual claim: each person has an ideal net worth, a point past which more money starts working as a social liability rather than an asset.',
          zh: '「社交負債」是 Housel 給一種隱形成本取的名字：當一筆消費改變了別人看你的方式，或你看自己的方式時，所累積起來的成本。這筆帳單不會在結帳時出現，它稍後才到——以一種「你從此必須持續滿足的期待」的形式出現。由此他提出了一個不太尋常的主張：每個人都有一個「理想淨值」，超過那個門檻之後，更多的錢反而會從資產變成社交上的負擔。',
        },

        {
          t: 'quote',
          en: 'The most valuable financial asset is not needing to impress anyone.',
          zh: '最有價值的財務資產，是不需要向任何人證明自己。',
          by: 'Morgan Housel, a chapter title from The Art of Spending Money',
        },

        {
          t: 'phrases',
          en: 'Status, and what it costs',
          zh: '地位，以及它的代價',
          items: [
            {
              en: 'social debt',
              zh: '社交負債',
              eg: 'Social debt is the cost that arrives after the purchase, not at the till.',
              egZh: '社交負債是在消費之後才到來的成本，不是在結帳時。',
            },
            {
              en: 'a hidden cost',
              zh: '隱形成本',
              eg: 'Every status purchase carries a hidden cost.',
              egZh: '每一筆為了地位而做的消費，都帶著隱形成本。',
            },
            {
              en: 'accrue',
              zh: '（成本、利息）累積',
              eg: 'The cost accrues quietly, over years.',
              egZh: '這種成本會安靜地累積，經年累月。',
            },
            {
              en: 'impress someone',
              zh: '讓某人刮目相看',
              eg: 'The most valuable financial asset is not needing to impress anyone.',
              egZh: '最有價值的財務資產，是不需要向任何人證明自己。',
            },
            {
              en: 'a liability rather than an asset',
              zh: '負擔而非資產',
              eg: 'Past a certain point, more money becomes a liability rather than an asset.',
              egZh: '超過某個程度之後，更多的錢反而變成負擔，而不是資產。',
            },
            {
              en: 'live up to something',
              zh: '達到（他人的期待）',
              eg: 'Once people expect it, you have to keep living up to it.',
              egZh: '一旦別人開始這樣期待你，你就得持續達到那個標準。',
            },
            {
              en: 'the comparison treadmill',
              zh: '無止盡的比較',
              eg: 'The comparison treadmill has no finishing line, by design.',
              egZh: '「比較」這台跑步機從設計上就沒有終點線。',
            },
          ],
        },

        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的看法是？',
          hintEn: 'No right answers. Pick one and be ready to say why \u2014 that sentence is the exercise.',
          hintZh: '沒有標準答案。選一個，並準備好說明理由——那句理由才是真正的練習。',
          items: [
            {
              en: 'There is a point past which more money would make my life harder, not easier.',
              zh: '超過某個程度之後，更多的錢會讓我的生活更難，而不是更輕鬆。',
            },
            {
              en: 'Most of what people buy to be seen, they would not buy on a desert island.',
              zh: '人們為了「被看見」而買的東西，大部分在無人島上都不會買。',
            },
            {
              en: 'Wanting other people to be impressed is normal, and pretending otherwise is dishonest.',
              zh: '想讓別人刮目相看是很正常的事，假裝自己不在意才是不誠實。',
            },
            {
              en: 'I would rather have a short commute than a job title people recognise.',
              zh: '比起一個別人認得出來的頭銜，我寧願要一段很短的通勤。',
            },
            {
              en: 'You cannot tell whether a purchase was worth it until years afterwards.',
              zh: '一筆消費值不值得，要等好幾年後才看得出來。',
            },
          ],
        },

        {
          t: 'part',
          n: '5',
          en: 'What to do about it',
          zh: '那該怎麼辦',
        },

        {
          t: 'summary',
          en: 'The closing chapters are short on rules and long on warnings. Stay off the comparison treadmill, which has no finishing line. Owning your own time matters more than impressing strangers. And do not make money a core part of who you are \u2014 in either direction. Treating it as the solution to everything and treating it as inherently corrupt are the same mistake wearing different clothes: both make money the main character, and both miss what it is actually for, which is buying independence.',
          zh: '最後幾章給的規則很少，給的警告很多。不要踏上那台沒有終點線的比較跑步機。擁有自己的時間，遠比讓陌生人刮目相看重要。還有，不要把金錢當成「你是誰」的核心——兩個方向都不要。把錢當成萬靈丹，和把錢視為萬惡之源，其實是同一個錯誤換了件衣服：兩種都讓金錢成了主角，也都錯過了它真正的用途——買到獨立與自在。',
        },

        {
          t: 'phrases',
          en: 'Time, independence, identity',
          zh: '時間、獨立、自我認同',
          items: [
            {
              en: 'own your own time',
              zh: '擁有自己的時間',
              eg: 'Owning your own time matters more than impressing strangers.',
              egZh: '擁有自己的時間，比讓陌生人刮目相看更重要。',
            },
            {
              en: 'a core part of your identity',
              zh: '自我認同的核心',
              eg: 'Housel warns against making money a core part of your identity.',
              egZh: 'Housel 提醒不要把金錢當成自我認同的核心。',
            },
            {
              en: 'inherently corrupt',
              zh: '本質上就是骯髒的',
              eg: 'Treating money as inherently corrupt misses what it is for.',
              egZh: '把金錢視為本質上骯髒的東西，一樣錯過了它的用途。',
            },
            {
              en: 'a tool for independence',
              zh: '換取獨立的工具',
              eg: 'Its actual value is as a tool for independence.',
              egZh: '它真正的價值，在於作為換取獨立的工具。',
            },
            {
              en: 'miss the point',
              zh: '沒抓到重點',
              eg: 'Both extremes miss the point in the same way.',
              egZh: '兩種極端都以同樣的方式沒抓到重點。',
            },
            {
              en: 'buy back your time',
              zh: '把時間買回來',
              eg: 'Some spending buys back your time; some spends it for you.',
              egZh: '有些消費是把時間買回來，有些則是替你把時間花掉。',
            },
          ],
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
          hintEn: 'Eight questions on the summary above. A wrong answer fades and the question stays open, so try again.',
          hintZh: '關於上面那篇摘要的八個問題。答錯的選項會變淡，題目仍然開著，可以再試一次。',
          items: [
            {
              q: 'What is the premise the whole book rests on?',
              qZh: '整本書建立在什麼前提上？',
              options: [
                'Earning and spending well are completely different skills',
                'Most people simply do not earn enough',
                'Expensive things are usually not worth the money',
              ],
              answer: 0,
            },
            {
              q: 'Why did the wealthy man buy the $21,000 armchair?',
              qZh: '那位有錢人為什麼買下那張兩萬一千美元的扶手椅？',
              options: [
                'He had sat in it and loved it',
                'He felt it was what rich people were supposed to do',
                'It was an investment he expected to rise in value',
              ],
              answer: 1,
            },
            {
              q: 'According to Housel, why is judging how other people spend a waste of energy?',
              qZh: '根據 Housel，為什麼評斷別人怎麼花錢是白費力氣？',
              options: [
                'Because most people spend badly anyway',
                'Because it is impolite to notice',
                'Because everyone\u2019s spending makes sense once you know their history',
              ],
              answer: 2,
            },
            {
              q: 'What mistake do we make when we imagine having much more money?',
              qZh: '當我們想像自己有多得多的錢時，會犯什麼錯？',
              options: [
                'We overestimate how much we would need',
                'We picture only what would improve, and leave out what money cannot touch',
                'We forget about tax and fees',
              ],
              answer: 1,
              why: {
                en: 'And notice this is not really a money error. Imagining any big change compares your current life, problems included, against a new life with no problems at all \u2014 because you have not lived there long enough to find them.',
                zh: '而且要注意，這其實不是「金錢」上的錯誤。想像任何重大改變時，我們比較的都是「現在的生活連同它的問題」對上「新生活，一個問題也沒有」——因為你還沒在那邊住得夠久，還沒找到它的問題。',
              },
            },
            {
              q: 'What is hedonic adaptation?',
              qZh: '什麼是享樂適應？',
              options: [
                'Buying more once you can afford more',
                'The way anything you keep long enough stops feeling special',
                'Adjusting your budget when prices rise',
              ],
              answer: 1,
            },
            {
              q: 'What makes a purchase a “negative return”?',
              qZh: '什麼樣的消費算是「負報酬」？',
              options: [
                'It loses value when you resell it',
                'It costs more than you expected to pay',
                'It actively makes your life worse rather than simply disappointing you',
              ],
              answer: 2,
              why: {
                en: 'The distinction matters. A purchase that just fails to thrill you is ordinary. A negative return keeps charging you afterwards \u2014 in maintenance, in attention, in a worry you did not have before.',
                zh: '這個區別很重要。一樣東西只是沒讓你興奮，那很平常；「負報酬」則是在事後持續向你收費——收保養、收注意力，收一份你原本沒有的擔憂。',
              },
            },
            {
              q: 'Housel says every desire you genuinely eliminate functions like infinite income. Why “infinite”?',
              qZh: 'Housel 說每消除一個慾望，效果等同於無限的收入。為什麼是「無限」？',
              options: [
                'Because no salary can beat needing nothing',
                'Because your savings then grow without limit',
                'Because you can spend the money on something else instead',
              ],
              answer: 0,
              why: {
                en: 'It is arithmetic, not poetry: wanting a NT$30,000 thing means needing NT$30,000; genuinely not wanting it means needing nothing, and nothing cannot be out-earned. The load-bearing word is “genuinely” \u2014 pretending does not pay.',
                zh: '這是算術，不是文學修辭：想要一樣三萬元的東西，就需要三萬元；真的不想要它，需要的是零，而零是任何薪水都贏不過的。整句話的重量壓在「真的」上——假裝沒有任何效果。',
              },
            },
            {
              q: 'What does Housel say about making money a core part of your identity?',
              qZh: '關於把金錢當成自我認同的核心，Housel 怎麼說？',
              options: [
                'It is healthy, as long as you are honest about it',
                'Only treating money as the solution to everything is a problem',
                'Both extremes are a mistake \u2014 treating it as the answer, or as inherently corrupt',
              ],
              answer: 2,
              why: {
                en: 'This is the one people usually get half right. Contempt for money and worship of money are the same error in different clothes: both put money in the leading role, and both lose sight of it as a tool for independence.',
                zh: '這一題大部分人只答對一半。鄙視金錢和崇拜金錢，是同一個錯誤換了件衣服：兩者都把金錢放在主角的位置，也都因此看不見它作為「換取獨立的工具」的價值。',
              },
            },
          ],
        },

        {
          t: 'gap',
          en: 'Choose the phrase',
          zh: '選出正確的說法',
          hintEn: 'One of the three fits. Tap the Chinese for the situation if you want it.',
          hintZh: '三個選項中只有一個適合。想看情境的話，可以點開中文。',
          items: [
            {
              text: 'The excitement of a new phone ___ within a month; the payments do not.',
              textZh: '新手機的興奮感一個月內就消失了；分期付款卻沒有。',
              options: ['wears off', 'runs out', 'breaks down'],
              answer: 0,
              why: {
                en: '“Wear off” is what a feeling does as it fades. “Run out” is for a supply, and “break down” is for a machine.',
                zh: '「wear off」用在感覺逐漸淡去。「run out」用在存量用完，「break down」則是機器故障。',
              },
            },
            {
              text: 'Her choices ___ once you know what she grew up without.',
              textZh: '一旦你知道她小時候缺過什麼，她的選擇就說得通了。',
              options: ['make sure', 'come true', 'make sense'],
              answer: 2,
              why: {
                en: '“Make sense” is the phrase the book turns on, and it is exactly this shape: something looks strange until you have the history behind it.',
                zh: '「make sense」正是這本書反覆使用的說法，而且用法就是這個形狀：一件事看起來很奇怪，直到你知道它背後的來歷。',
              },
            },
            {
              text: 'Past a certain point, more money becomes a ___ rather than an asset.',
              textZh: '超過某個程度之後，更多的錢反而變成負擔，而不是資產。',
              options: ['liability', 'possibility', 'responsibility'],
              answer: 0,
              why: {
                en: '“Liability” is the accounting opposite of “asset”, which is why the sentence lands \u2014 it borrows a balance-sheet word for a social cost.',
                zh: '在會計上，「liability」正是「asset」的反義詞，這句話之所以有力，就是把資產負債表的詞借來講一種社交成本。',
              },
            },
            {
              text: 'Once people expect it of you, you have to keep ___ it.',
              textZh: '一旦別人這樣期待你，你就得持續達到那個標準。',
              options: ['looking up to', 'living up to', 'putting up with'],
              answer: 1,
              why: {
                en: '“Live up to” means to keep meeting a standard or an expectation \u2014 which is what social debt actually charges you.',
                zh: '「live up to」是持續達到某個標準或期待——而這正是社交負債真正向你收取的東西。',
              },
            },
            {
              text: 'Both extremes ___ : money is neither the answer to everything nor inherently corrupt.',
              textZh: '兩種極端都沒抓到重點：金錢既不是萬靈丹，也不是本質上骯髒的東西。',
              options: ['miss the point', 'lose the plot', 'take the point'],
              answer: 0,
              why: {
                en: '“Miss the point” is to fail to grasp what actually matters. “Take the point” is the opposite \u2014 to accept an argument.',
                zh: '「miss the point」是沒有掌握到真正重要的地方。「take the point」意思相反，是接受對方的論點。',
              },
            },
          ],
        },

        {
          t: 'match',
          en: 'Term and meaning',
          zh: '術語與意思',
          hintEn: 'Click a term on the left, then the meaning that belongs to it on the right.',
          hintZh: '先點左邊的說法，再點右邊對應的意思。',
          pairs: [
            { a: 'hedonic adaptation', b: 'the way anything you keep long enough stops feeling special' },
            { a: 'a negative return', b: 'spending that actively makes your life worse' },
            { a: 'social debt', b: 'the hidden cost of changing how others see you' },
            { a: 'ideal net worth', b: 'the point past which more money is a burden' },
            { a: 'the comparison treadmill', b: 'a race against other people with no finishing line' },
            { a: 'a tool for independence', b: 'what money is actually for, in Housel\u2019s view' },
          ],
        },

        {
          t: 'part',
          n: 'Talk',
          en: 'Now say it yourself',
          zh: '換你來說',
        },

        {
          t: 'discuss',
          en: 'Talk it through',
          zh: '一起討論',
          items: [
            {
              en: 'Think of something you bought that you are still glad about. What made it different from the ones you are not?',
              zh: '想一樣你買了之後到現在仍然覺得值得的東西。它和那些你並不覺得值得的東西，差別在哪裡？',
              starters: [
                { en: 'I still use it, which is more than I can say for\u2026', zh: '我到現在還在用它，這一點是……做不到的' },
                { en: 'What made the difference was\u2026', zh: '真正造成差別的是……' },
                { en: 'I bought it for myself rather than for\u2026', zh: '我是為了自己買的，而不是為了……' },
              ],
            },
            {
              en: 'Has anything you own ever started charging you \u2014 in time, worry or upkeep \u2014 after you paid for it?',
              zh: '你擁有的東西當中，有沒有哪一樣在你付完錢之後，開始向你收費——收時間、擔憂或維護？',
              starters: [
                { en: 'It cost me more in\u2026 than in money.', zh: '它花掉我的……比花掉的錢還多。' },
                { en: 'I did not expect to spend so much time\u2026', zh: '我沒想到會花這麼多時間……' },
                { en: 'Looking back, that was a negative return because\u2026', zh: '現在回頭看，那是負報酬，因為……' },
              ],
            },
            {
              en: 'Housel says the most valuable financial asset is not needing to impress anyone. Is that easier or harder at your age?',
              zh: 'Housel 說最有價值的財務資產是「不需要向任何人證明自己」。在你這個年紀，這件事是比較容易，還是比較難？',
              starters: [
                { en: 'It is harder at my age because\u2026', zh: '在我這個年紀比較難，因為……' },
                { en: 'The people I would want to impress are\u2026', zh: '我會想證明給他看的那些人是……' },
                { en: 'I think that gets easier once\u2026', zh: '我覺得這件事會變得比較容易，一旦……' },
              ],
            },
            {
              en: 'Is there something you have genuinely stopped wanting? What happened?',
              zh: '有沒有什麼東西是你真的不再想要了？當時發生了什麼？',
              starters: [
                { en: 'I wanted one for years, and then\u2026', zh: '我想要了好幾年，然後……' },
                { en: 'I stopped wanting it when I saw\u2026', zh: '當我看到……的時候，我就不想要了。' },
                { en: 'I am not sure I have. The closest is\u2026', zh: '我不確定有。最接近的大概是……' },
              ],
            },
            {
              en: 'Owning your own time, or being recognised for what you do \u2014 if you could only have one, which?',
              zh: '「擁有自己的時間」和「因為你做的事而被看見」——如果只能選一個，你選哪一個？',
              starters: [
                { en: 'I would take\u2026, but not without hesitating.', zh: '我會選……，但不會毫不猶豫。' },
                { en: 'At twenty I would say\u2026; at forty, probably\u2026', zh: '二十歲的我會說……；四十歲大概會說……' },
                { en: 'The two are not really opposites, because\u2026', zh: '這兩件事其實不是對立的，因為……' },
              ],
            },
          ],
        },

        {
          t: 'task',
          en: 'Defend a purchase',
          zh: '為一筆消費辯護',
          instructionEn: 'Pick one prompt and talk for about a minute. The rule from the book applies: nobody else gets to judge the purchase, so do not defend it against them \u2014 defend it against yourself in five years.',
          instructionZh: '選一個題目，說大約一分鐘。書裡那條規則在這裡適用：沒有別人有資格評斷這筆消費，所以不要對著別人辯護——對著五年後的你自己辯護。',
          prompts: [
            {
              en: 'Something you own that other people would call a waste. Make the case for it.',
              zh: '一樣你擁有、但別人會說是浪費的東西。替它說話。',
            },
            {
              en: 'Something you want, argued honestly \u2014 including the part where it might charge you later.',
              zh: '一樣你想要的東西，誠實地論述——包括它日後可能向你收費的那一部分。',
            },
            {
              en: 'Explain hedonic adaptation to someone about to buy something expensive.',
              zh: '向一個正要買下昂貴東西的人解釋什麼是享樂適應。',
            },
            {
              en: 'Argue against Housel: make the case that wanting to impress people is a good thing.',
              zh: '反駁 Housel：論證「想讓別人刮目相看」其實是件好事。',
            },
            {
              en: 'Describe the version of your life where money is a tool for independence rather than a score.',
              zh: '描述一種生活版本：在那裡金錢是換取獨立的工具，而不是一個分數。',
            },
          ],
          checklist: [
            { en: 'it makes sense once you know\u2026', zh: '一旦你知道……就說得通了' },
            { en: 'the excitement wears off', zh: '興奮感會逐漸消失' },
            { en: 'a negative return', zh: '負報酬' },
            { en: 'a hidden cost', zh: '隱形成本' },
            { en: 'a liability rather than an asset', zh: '負擔而非資產' },
            { en: 'own my own time', zh: '擁有自己的時間' },
          ],
          frames: [
            {
              en: 'Being good at earning money and being good at spending it are completely different skills.',
              zh: '會賺錢和會花錢，是完全不同的兩種能力。',
            },
            {
              en: 'Everyone\u2019s spending makes sense once you know their history.',
              zh: '只要你了解一個人的成長背景，他的花錢方式都說得通。',
            },
            {
              en: 'The excitement wears off faster than the payments do.',
              zh: '興奮感消失的速度，比分期付款結束的速度快。',
            },
            {
              en: 'It stopped being something I owned and started being something I maintained.',
              zh: '它不再是我擁有的東西，而變成我在維護的東西。',
            },
            {
              en: 'Every desire you genuinely eliminate functions like infinite income.',
              zh: '每一個你真心消除掉的慾望，效果都等同於無限的收入。',
            },
            {
              en: 'Past a certain point, more money becomes a liability rather than an asset.',
              zh: '超過某個程度之後，更多的錢反而變成負擔，而不是資產。',
            },
            {
              en: 'The most valuable financial asset is not needing to impress anyone.',
              zh: '最有價值的財務資產，是不需要向任何人證明自己。',
            },
            {
              en: 'Money is neither the answer to everything nor inherently corrupt; it is a tool for independence.',
              zh: '金錢既不是萬靈丹，也不是萬惡之源，它是一個換取獨立的工具。',
            },
          ],
        },
      ],
    },
  ],
};
