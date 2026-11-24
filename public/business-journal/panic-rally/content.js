/* 國際商業期刊導讀 No. 4 — Panic, Rally, Repeat.

   Unlike Nos. 1–3 this reading has no single source article. It is built from
   the published record of twenty days on the Taiwan and US markets, 5–24
   November 2026: closing figures from 中央社 and the exchange, and two 8-K
   filings Nvidia made to the US SEC. Every number on the page was checked
   against a report before it was written down, and the three figures the
   classroom draft got wrong were corrected rather than kept:

     · SanDisk −22% / 美光 −17%  no source matched that pair, so the specific
                                 figures are gone; the direction stayed.
     · 10 年期殖利率 5.1%         it broke 5% intraday and settled at 4.996%.
     · SEC 正在調查 Nvidia        could not be verified, so it is not here.

   The draft also stopped on 20 November, when the story had two more acts in
   it: the index fell a further 17.5% in the week of the 16th, and on the 24th
   posted its largest one-day point gain on record. Both are on the page,
   because a reading published on the 24th that stops on the 20th is wrong by
   the time anyone opens it.

   WHAT THIS LESSON TEACHES is English, not investing. The verbs of movement,
   the language of a result measured against an expectation, and the hedging
   that lets you report somebody else's market call without adopting it. The
   opinions in the poll are there to be argued with. The disclaimer is the
   first note in step 1 and it is not decoration — see `source` as well.

   Every visible string is an `en` / `zh` pair. English is shown; the
   Traditional Chinese stays hidden until it is asked for.

     {{double braces}}  in a passage paragraph mark a word that opens a gloss;
                        the word must match a `term` in that block's glossary
                        exactly, or it renders as plain text. "record" is
                        deliberately NOT glossed — question 6 turns on it.
*/

const LESSON = {
  id: 'panic-rally',          // must match its entry in ../course.js
  title: 'Panic, Rally, Repeat',
  titleZh: '暴跌、反彈，然後再一次',
  level: 'B1–B2',

  /* No hero photograph yet. Both the cover and the contents-page card guard on
     the field, so leaving it out shows no picture rather than a broken one. To
     add one: put the file at panic-rally/img/hero.jpg, restore the block below
     with the photographer's name, and add `photo: 'img/hero.jpg'` back to this
     reading's entry in ../course.js. Pexels only, like the rest of the series.

       photo: {
         src: 'img/hero.jpg',
         alt: 'A wall of screens showing stock charts and figures in a trading room',
         by: 'Photographer',
         pos: '50% 45%',
       },
  */

  /* No `url`: there is no one article to open. The credit names what the
     figures came from instead, and says in both languages what the page is
     and is not. */
  source: {
    en: 'Written for class from the published record of 5–24 November 2026: closing figures reported by 中央社 (CNA) and the Taiwan Stock Exchange, US company results, and Nvidia’s 8-K filings with the US Securities and Exchange Commission. The figures are public closing data. The principles are the ones market commentators drew at the time — this is an English lesson, not investment advice.',
    zh: '課堂自編，取材自 2026 年 11 月 5 日至 24 日的公開紀錄：中央社與證交所公布的收盤數字、美國公司財報，以及 Nvidia 向美國證管會申報的 8-K 文件。數字為公開收盤資料；文中的原則是當時市場評論者提出的看法——這是一堂英文課，不是投資建議。',
  },

  intro: {
    en: 'In twenty days the Taiwan market fell 3.2% in a session, rose 10% in a week, gave all of it back and more, and then posted the largest one-day point gain in its history. No company changed that fast. This lesson uses those twenty days to teach the English of market movement: the verbs, the way a result is measured against an expectation, and how to report somebody else’s opinion without turning it into your own.',
    zh: '二十天之內，台股單日跌 3.2%、一週漲 10%、接著全數回吐還倒賠，然後寫下史上最大單日漲點。沒有一家公司變化得那麼快。這堂課用這二十天來教市場英文：漲跌動詞、「結果與預期」的說法，以及如何轉述別人的看法，而不把它說成自己的斷言。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'describe a rise or a fall with the right verb and the right strength', zh: '用恰當的動詞與強度描述一段漲勢或跌勢' },
      { en: 'explain in English why a company can beat expectations and still see its shares fall', zh: '用英文說明為什麼公司財報優於預期，股價卻還是下跌' },
      { en: 'report an analyst’s view without stating it as a fact', zh: '轉述分析師的看法，而不把它說成事實' },
      { en: 'tell the difference between a record in points and a record in percent', zh: '分辨「史上最大漲點」與「史上最大漲幅」的差別' },
    ],
  },

  steps: [
    // ================================================================ 1
    {
      id: 'twenty-days',
      n: 1,
      en: 'Twenty Days',
      zh: '這二十天',
      blocks: [
        {
          t: 'lead',
          en: 'Four acts, in the order they happened. Watch the dates rather than the drama.',
          zh: '四幕，按發生順序排列。看日期，不要看戲劇性。',
        },
        {
          t: 'note',
          en: 'This is an English lesson',
          zh: '這是一堂英文課',
          bodyEn: 'Everything below is here as reading material and language practice. The figures are public closing data; the opinions belong to the commentators quoted, not to this page, and nothing here is investment advice or a recommendation to buy or sell anything. Your teacher is an English teacher and not a licensed financial adviser.',
          bodyZh: '以下內容都是閱讀材料與語言練習。數字是公開的收盤資料；文中的看法屬於被引述的評論者，不代表本頁立場，也都不是投資建議，更不是買賣任何標的的推薦。你的老師是英文老師，不是持牌的投資顧問。',
        },
        {
          t: 'summary',
          n: '1',
          titleEn: 'The fall — 5 November',
          titleZh: '第一幕：下跌（11/5）',
          en: 'Taiwan’s benchmark index closed 1,374.19 points lower at 41,574.72, a fall of 3.20% and the thirteenth-largest point drop in its history. Only financial, textile, cement and rubber shares held up. Reports linked the selling to doubts about how fast AI data centres would actually be built in the United States.',
          zh: '台股加權指數收盤跌 1,374.19 點至 41,574.72，跌幅 3.20%，是歷年第 13 大收盤跌點。當天只有金融、紡織、水泥、橡膠相對抗跌。報導把賣壓歸因於市場開始懷疑美國 AI 資料中心的實際建置速度。',
        },
        {
          t: 'summary',
          n: '2',
          titleEn: 'The record week — 9 to 13 November',
          titleZh: '第二幕：破紀錄的一週（11/9–13）',
          en: 'The index rallied 3,973.48 points, or 10.01%, to 43,675.12 — the largest weekly point gain it had ever recorded, and the biggest weekly percentage gain since October 2002. Five trading days had passed. No company had changed in them.',
          zh: '指數大漲 3,973.48 點、漲幅 10.01%，收 43,675.12，寫下史上最大單週漲點，也是 2002 年 10 月以來最大單週漲幅。中間只過了五個交易日，沒有任何一家公司在這五天內改變。',
        },
        {
          t: 'summary',
          n: '3',
          titleEn: 'The worse fall — 16 to 20 November',
          titleZh: '第三幕：跌得更深（11/16–20）',
          en: 'The whole rally went back and more. The index lost 17.5% over the week and closed Friday the 20th down 2,393.60 points at 36,033.29 — about 28% below its October high. The heaviest selling fell on the memory and AI-related shares that had risen most during the year, and money moved towards companies carrying less debt.',
          zh: '前一週的反彈全數回吐還不止。指數整週下跌 17.5%，11/20 當天再跌 2,393.60 點，收 36,033.29，距離 10 月高點約 28%。賣壓最重的是今年漲最多的記憶體與 AI 相關個股，資金轉向負債較低的公司。',
        },
        {
          t: 'summary',
          n: '4',
          titleEn: 'The record day — 24 November',
          titleZh: '第四幕：破紀錄的一天（11/24）',
          en: 'Nvidia’s board reinstated Jensen Huang as chief executive on 22 November, eleven days after announcing he had resigned. Nvidia shares rose more than 30%, Asian markets followed, and on the 24th the Taiwan index gained 3,310.46 points, or 8.99%, to 40,122 — its largest one-day point gain on record. It was still about a fifth below where it had been in October.',
          zh: 'Nvidia 董事會於 11/22 讓黃仁勳復任執行長，距離宣布他辭職只有 11 天。Nvidia 股價大漲逾三成，亞股跟著走強，11/24 台股大漲 3,310.46 點、漲幅 8.99%，收 40,122，寫下史上最大單日收盤漲點。但指數仍比 10 月的位置低了約兩成。',
        },
        {
          t: 'note',
          en: 'The one idea worth taking away',
          zh: '最值得帶走的一個觀念',
          bodyEn: 'A price does not move on good news or bad news. It moves on the gap between the news and what the market had already expected. On 17 November Nvidia reported revenue of US$115.8 billion, more than double a year earlier, and beat the US$109.1 billion analysts had forecast. The shares rose after hours — and then gave the gain back. The result was excellent. It was not as far ahead of expectations as the price already assumed.',
          bodyZh: '股價不是因為「好消息」或「壞消息」而動，而是因為消息與市場原本的預期之間的落差。11/17 Nvidia 公布營收 1,158 億美元，比一年前翻了一倍以上，也優於分析師預估的 1,091 億美元。股價盤後上漲，然後把漲幅吐回去。財報非常好，只是沒有好到超出股價早就假設的程度。',
        },
        {
          t: 'lead',
          en: 'A TOEIC Part 7-style passage of about 300 words, written for this lesson from the record above.',
          zh: '多益閱讀第七部分風格的短文，約 300 字，依上述紀錄為這堂課改寫。',
        },
        {
          t: 'passage',
          en: 'The Market That Could Not Make Up Its Mind',
          zh: '一個拿不定主意的市場',
          hintEn: 'Tap an underlined word for its meaning; tap a paragraph for the Chinese.',
          hintZh: '點選畫底線的單字看意思；點選段落看中文。',
          glossary: [
            { term: 'benchmark', pos: 'adj.', zh: '基準的（benchmark index：大盤指數、代表性指數）' },
            { term: 'data centres', pos: 'n.', zh: '資料中心' },
            { term: 'rallied', pos: 'v.', zh: '（持續）走強、上漲' },
            { term: 'sentiment', pos: 'n.', zh: '（市場）情緒、氣氛' },
            { term: 'quarterly', pos: 'adj.', zh: '每季的；單季的' },
            { term: 'guidance', pos: 'n.', zh: '財測；公司對下一季的預估' },
            { term: 'consensus', pos: 'n.', zh: '市場共識（分析師預估的平均值）' },
            { term: 'priced in', pos: 'phrase', zh: '已經反映在股價裡' },
            { term: 'regulator', pos: 'n.', zh: '監管機關（此處指美國證管會 SEC）' },
            { term: 'IPO', pos: 'n.', zh: '首次公開發行；股票首次上市' },
            { term: 'undid', pos: 'v.', zh: '抵銷、推翻（undo 的過去式）' },
          ],
          paras: [
            {
              en: 'On 5 November, Taiwan’s {{benchmark}} index closed 1,374.19 points lower at 41,574.72 — a fall of 3.2% and the thirteenth-largest point drop in its history. Reports at the time linked the selling to doubts about how quickly AI {{data centres}} would be built in the United States. Only financial, textile, cement and rubber shares held up.',
              zh: '11 月 5 日，台股加權指數收盤下跌 1,374.19 點，收在 41,574.72——跌幅 3.2%，是歷年第 13 大收盤跌點。當時的報導把賣壓歸因於市場懷疑美國 AI 資料中心的建置速度。只有金融、紡織、水泥與橡膠類股相對抗跌。',
            },
            {
              en: 'Then the market turned. In the week of 9 to 13 November the index {{rallied}} 3,973.48 points, or 10.01%, its best week since October 2002. No company had changed in five trading days. What had changed was the {{sentiment}}.',
              zh: '接著市場反轉。11 月 9 日到 13 日那一週，指數上漲 3,973.48 點、漲幅 10.01%，是 2002 年 10 月以來表現最好的一週。五個交易日之內，沒有任何一家公司改變。改變的是市場情緒。',
            },
            {
              en: 'On 17 November Nvidia reported {{quarterly}} revenue of US$115.8 billion, more than double a year earlier and comfortably above the US$109.1 billion analysts had expected. Its {{guidance}} for the following quarter also topped the market’s {{consensus}}. The shares rose after hours, then gave the gain back. A strong result only lifts a price when it is better than what the market has already {{priced in}}.',
              zh: '11 月 17 日，Nvidia 公布單季營收 1,158 億美元，比一年前翻了一倍以上，也明顯高於分析師預估的 1,091 億美元。公司對下一季的財測同樣優於市場共識。股價盤後上漲，隨後把漲幅吐了回去。強勁的財報只有在「比市場早就反映的更好」時，才會推升股價。',
            },
            {
              en: 'Two other events added noise. Nvidia told the {{regulator}} on 12 November that its chief executive had resigned; eleven days later the board reinstated him. Anthropic’s {{IPO}}, the largest on record, was priced at US$83 a share. The stock opened at US$111.50 and closed its first day at US$97.17, so anyone who bought the opening trade finished the day with a loss.',
              zh: '另外兩件事增加了雜訊。Nvidia 在 11 月 12 日向監管機關報告執行長已辭職；11 天後，董事會讓他復職。Anthropic 的首次公開發行是史上規模最大的一樁，定價 83 美元。該股開盤 111.50 美元，首日收在 97.17 美元——所以在開盤第一筆買進的人，當天是賠的。',
            },
            {
              en: 'The week of 16 to 20 November {{undid}} the recovery: the index lost 17.5% and closed at 36,033.29. Then on 24 November it gained 3,310.46 points, or 8.99% — the largest one-day point gain it has ever recorded — and still finished about a fifth below its October high. Three weeks held a fall, a record week, a worse fall and a record day. On most of those mornings, the news explained very little.',
              zh: '11 月 16 日到 20 日那一週抵銷了整波回升：指數下跌 17.5%，收在 36,033.29。接著 11 月 24 日大漲 3,310.46 點、漲幅 8.99%——史上最大單日收盤漲點——但收盤仍比 10 月高點低了約五分之一。三個星期裡裝了一次下跌、一週創紀錄的上漲、一次更深的下跌，和一天創紀錄的反彈。而在其中大多數的早上，新聞能解釋的其實很少。',
            },
          ],
        },
        {
          t: 'quiz',
          en: 'Six questions',
          zh: '六道題目',
          hintEn: 'One answer each. A wrong pick stays on screen — worth asking why it was tempting.',
          hintZh: '每題一個答案。選錯的選項會留在畫面上，值得討論它為什麼吸引人。',
          items: [
            {
              en: 'What is the main point of the passage?',
              zh: '這篇文章的主旨是什麼？',
              options: [
                '(A) AI companies are worth less than investors think',
                '(B) Large price moves often had little to do with the news of that day',
                '(C) Taiwan’s market recovered fully by the end of November',
                '(D) Nvidia’s results were disappointing',
              ],
              answer: 1,
              why: {
                en: 'The last two sentences say it directly: the three weeks held four very different markets, and the news explained very little.',
                zh: '最後兩句話直接說了：三個星期裡出現四種完全不同的行情，而新聞能解釋的很少。',
              },
            },
            {
              en: 'Why did Nvidia’s shares give back their gain after the result?',
              zh: '為什麼 Nvidia 的股價在財報之後把漲幅吐回去？',
              options: [
                '(A) Revenue fell compared with a year earlier',
                '(B) The guidance was below the consensus',
                '(C) The result was good, but not better than what the price already assumed',
                '(D) The chief executive resigned on the same day',
              ],
              answer: 2,
              why: {
                en: 'Paragraph 3: “A strong result only lifts a price when it is better than what the market has already priced in.” Revenue doubled and the guidance beat the consensus, so (A) and (B) contradict the text.',
                zh: '第 3 段：強勁的財報只有在比市場早就反映的更好時才會推升股價。營收翻倍、財測也優於共識，所以 (A)(B) 與原文相反。',
              },
            },
            {
              en: 'What happened in the week of 16 to 20 November?',
              zh: '11 月 16 日到 20 日那一週發生了什麼事？',
              options: [
                '(A) The index rose 10.01%',
                '(B) The index lost 17.5% and closed at 36,033.29',
                '(C) The index set a one-day record',
                '(D) Trading was suspended',
              ],
              answer: 1,
              why: {
                en: 'Paragraph 5. (A) is the week before; (C) is 24 November.',
                zh: '第 5 段。(A) 是前一週的事；(C) 是 11 月 24 日。',
              },
            },
            {
              en: 'An investor who bought Anthropic in the first trade on its first day',
              zh: '在 Anthropic 上市首日第一筆交易買進的投資人',
              options: [
                '(A) paid US$83 a share',
                '(B) made a profit by the close',
                '(C) paid US$111.50 and ended the day with a loss',
                '(D) could not sell until the following week',
              ],
              answer: 2,
              why: {
                en: 'Paragraph 4: priced at $83, opened at $111.50, closed at $97.17. The $83 went to buyers in the offering, not to buyers on the market.',
                zh: '第 4 段：定價 83、開盤 111.50、收盤 97.17。83 美元是給參與承銷的投資人，不是盤中買進的人。',
              },
            },
            {
              en: 'The word “sentiment” in paragraph 2 is closest in meaning to',
              zh: '第 2 段的 sentiment 意思最接近',
              options: [
                '(A) the mood of investors',
                '(B) the level of company profits',
                '(C) a government policy',
                '(D) the number of shares traded',
              ],
              answer: 0,
              why: {
                en: 'The sentence contrasts it with the companies: nothing real had changed, only how investors felt.',
                zh: '那一句把它和公司對比：實質上什麼都沒變，變的只是投資人的感受。',
              },
            },
            {
              en: 'What does the passage imply about the record set on 24 November?',
              zh: '關於 11 月 24 日創下的紀錄，文章暗示了什麼？',
              options: [
                '(A) The market had fully recovered',
                '(B) It was the biggest percentage gain in the index’s history',
                '(C) A record in points still left the index far below its October high',
                '(D) It proved the earlier selling had been a mistake',
              ],
              answer: 2,
              why: {
                en: 'Paragraph 5 puts the two facts side by side: the largest one-day point gain ever, and still about a fifth below October. (B) is the trap — 8.99% is nowhere near a percentage record.',
                zh: '第 5 段把兩件事並排：史上最大單日漲點，但仍比 10 月低約五分之一。(B) 是陷阱——8.99% 離「漲幅紀錄」還很遠。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 2
    {
      id: 'language',
      n: 2,
      en: 'The Language of Markets',
      zh: '市場英文',
      blocks: [
        {
          t: 'lead',
          en: 'Market English is small and repetitive. Learn thirty expressions and you can read almost any report.',
          zh: '市場英文的範圍很小，而且重複性高。學會三十個說法，幾乎任何一篇報導都讀得懂。',
        },
        {
          t: 'phrases',
          en: 'Movement: down',
          zh: '漲跌動詞：下跌',
          items: [
            {
              en: 'plunge',
              pos: 'v.',
              zh: '暴跌（幅度大、速度快）',
              eg: 'The index plunged 1,374 points in a single session.',
              egZh: '指數在一個交易日內暴跌 1,374 點。',
            },
            {
              en: 'tumble',
              pos: 'v.',
              zh: '大跌（比 plunge 稍輕，仍然明顯）',
              eg: 'Memory shares tumbled for a fourth straight day.',
              egZh: '記憶體類股連續第四天大跌。',
            },
            {
              en: 'slide',
              pos: 'v.',
              zh: '緩步走低（持續但不劇烈）',
              eg: 'The shares slid quietly all afternoon.',
              egZh: '這檔股票整個下午都在緩步走低。',
            },
            {
              en: 'extend losses',
              pos: 'phrase',
              zh: '跌勢延續到（下一段時間）',
              eg: 'The market extended losses into a second week.',
              egZh: '跌勢延續到第二個星期。',
            },
            {
              en: 'close lower',
              pos: 'phrase',
              zh: '收跌（新聞報導的標準說法）',
              eg: 'The index closed 3.2% lower at 41,574.',
              egZh: '指數收跌 3.2%，收在 41,574 點。',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'Movement: up, and back again',
          zh: '漲跌動詞：上漲與回吐',
          items: [
            {
              en: 'rebound',
              pos: 'v.',
              zh: '反彈（跌深之後彈回來）',
              eg: 'The index rebounded almost 9% on Tuesday.',
              egZh: '指數在星期二反彈將近 9%。',
            },
            {
              en: 'rally',
              pos: 'v. / n.',
              zh: '走強；一波漲勢（通常持續數日）',
              eg: 'The market rallied 10% in a single week.',
              egZh: '市場在一週之內大漲 10%。',
            },
            {
              en: 'stage a recovery',
              pos: 'phrase',
              zh: '展開一波回升',
              eg: 'Asian markets staged a recovery after the announcement.',
              egZh: '消息公布後，亞洲股市展開一波回升。',
            },
            {
              en: 'pare gains',
              pos: 'phrase',
              zh: '漲幅收斂（漲完之後縮小）',
              eg: 'Nvidia pared its gains in the last hour of trading.',
              egZh: 'Nvidia 在最後一小時漲幅收斂。',
            },
            {
              en: 'give back a gain',
              pos: 'phrase',
              zh: '把漲幅吐回去',
              eg: 'The shares rose after hours, then gave the whole gain back.',
              egZh: '股價在盤後上漲，接著把整段漲幅全吐了回去。',
            },
            {
              en: 'post a record gain',
              pos: 'phrase',
              zh: '寫下／創下紀錄性的漲幅',
              eg: 'On 24 November the index posted a record one-day point gain.',
              egZh: '11 月 24 日，指數寫下單日漲點的歷史紀錄。',
            },
          ],
        },
        {
          t: 'phrases',
          en: 'Results against expectations',
          zh: '結果與預期',
          items: [
            {
              en: 'beat expectations',
              pos: 'phrase',
              zh: '優於預期',
              eg: 'Revenue beat expectations by almost seven billion dollars.',
              egZh: '營收比預期高出將近七十億美元。',
            },
            {
              en: 'miss estimates',
              pos: 'phrase',
              zh: '不如預期（低於分析師預估）',
              eg: 'When a company misses estimates, the price usually falls.',
              egZh: '公司財報不如預期時，股價通常會下跌。',
            },
            {
              en: 'be in line with',
              pos: 'phrase',
              zh: '符合（預期、預估）',
              eg: 'The result was in line with what analysts had forecast.',
              egZh: '這份財報符合分析師原先的預估。',
            },
            {
              en: 'be priced in',
              pos: 'phrase',
              zh: '已經反映在股價裡',
              eg: 'Good news is often priced in long before it is announced.',
              egZh: '好消息往往在公布之前很久就已經反映在股價裡了。',
            },
            {
              en: 'guidance',
              pos: 'n.',
              zh: '財測；公司對下一季的預估',
              eg: 'The guidance mattered more to investors than the quarter itself.',
              egZh: '對投資人來說，財測比當季的數字更重要。',
            },
            {
              en: 'top the consensus',
              pos: 'phrase',
              zh: '優於市場共識',
              eg: 'Guidance of US$130 billion topped the consensus.',
              egZh: '1,300 億美元的財測優於市場共識。',
            },
            {
              en: 'raise guidance',
              pos: 'phrase',
              zh: '上調財測',
              eg: 'The company raised guidance for the second time this year.',
              egZh: '公司今年第二次上調財測。',
            },
            {
              en: 'overdone',
              pos: 'adj.',
              zh: '反應過度（跌太多或漲太多）',
              eg: 'Several banks told clients the selloff was overdone.',
              egZh: '幾家銀行告訴客戶，這波賣壓反應過度了。',
            },
          ],
        },
        {
          t: 'ladder',
          en: 'How sure are you? Three strengths',
          zh: '你有多確定？三種強度',
          hintEn: 'Only the third one is a statement of fact. Markets are reported in the first two.',
          hintZh: '只有第三種是在陳述事實。市場新聞大多用前兩種。',
          rows: [
            {
              level: 'soft',
              levelEn: 'Hedged',
              levelZh: '保留空間',
              pattern: 'It looks as if + clause',
              eg: 'It looks as if the selling has stopped.',
              egZh: '看起來賣壓已經停了。',
            },
            {
              level: 'neutral',
              levelEn: 'Attributed',
              levelZh: '註明來源',
              pattern: 'According to X, … / X said (that) …',
              eg: 'According to two banks, the selloff was overdone.',
              egZh: '根據兩家銀行的說法，這波賣壓反應過度。',
            },
            {
              level: 'strong',
              levelEn: 'Stated',
              levelZh: '直接斷言',
              pattern: 'The figures show (that) + clause',
              eg: 'The figures show the index is still a fifth below its October high.',
              egZh: '數字顯示，指數仍比 10 月高點低了五分之一。',
            },
          ],
        },
        {
          t: 'note',
          en: 'Points or percent?',
          zh: '點數，還是百分比？',
          bodyEn: 'On 24 November the index posted the largest one-day point gain in its history — and in percentage terms it was not close to a record. Both statements are true, because an index at 36,000 moves far more points for the same percentage than an index at 6,000 did twenty years ago. When you read “a record” in a market report, the first question is always: a record in what? The same trap runs the other way, which is why the 10.01% week of 9–13 November was described as the best since October 2002, not the best ever.',
          bodyZh: '11 月 24 日，指數寫下史上最大單日漲點——但以百分比算，根本不接近紀錄。兩句話都成立，因為指數在 36,000 點時，同樣的百分比會換成遠多於二十年前 6,000 點時的點數。所以在市場報導裡看到「紀錄」，第一個要問的永遠是：什麼的紀錄？反方向也一樣——這就是為什麼 11/9–13 那個 10.01% 的星期，被寫成「2002 年 10 月以來最大」，而不是「史上最大」。',
        },
        {
          t: 'match',
          en: 'Match the halves',
          zh: '配對片語的前後半',
          hintEn: 'Click a verb on the left, then the noun it goes with on the right.',
          hintZh: '先點左邊的動詞，再點右邊和它搭配的名詞。',
          pairs: [
            { a: 'beat', b: 'expectations' },
            { a: 'miss', b: 'estimates' },
            { a: 'pare', b: 'gains' },
            { a: 'extend', b: 'losses' },
            { a: 'stage', b: 'a recovery' },
            { a: 'top', b: 'the consensus' },
            { a: 'raise', b: 'guidance' },
            { a: 'post', b: 'a record gain' },
          ],
        },
        {
          t: 'gap',
          en: 'Choose the phrase that fits',
          zh: '選出適合的片語',
          items: [
            {
              text: 'Revenue was more than double a year earlier, so the company comfortably ___.',
              textZh: '營收比一年前翻了一倍以上，所以公司輕鬆優於預期。',
              options: ['missed estimates', 'beat expectations', 'was in line with forecasts'],
              answer: 1,
              why: {
                en: 'Double the revenue is far above what anyone forecast, so it beat expectations.',
                zh: '營收翻倍遠高於任何人的預估，所以是優於預期。',
              },
            },
            {
              text: 'The shares rose four percent after hours, then ___ before the close.',
              textZh: '股價在盤後上漲 4%，接著在收盤前漲幅收斂。',
              options: ['extended their losses', 'topped the consensus', 'pared their gains'],
              answer: 2,
              why: {
                en: 'The shares were up, then less up — that is paring a gain, not extending a loss.',
                zh: '股價先漲、後來漲少了，這是漲幅收斂，不是跌勢延續。',
              },
            },
            {
              text: 'Several banks told clients the fall had gone too far — in their words, the selloff was ___.',
              textZh: '幾家銀行告訴客戶跌得太過頭了——用他們的話說，這波賣壓反應過度。',
              options: ['overdone', 'priced in', 'in line with expectations'],
              answer: 0,
              why: {
                en: '“Gone too far” is exactly what overdone means.',
                zh: '「跌得太過頭」正是 overdone 的意思。',
              },
            },
            {
              text: 'A record gain in points is not a record in percent, because the index ___ than it was in 2002.',
              textZh: '漲點的紀錄不等於漲幅的紀錄，因為指數現在比 2002 年高得多。',
              options: ['is much lower', 'is much higher', 'has not changed'],
              answer: 1,
              why: {
                en: 'The higher the index, the more points one percent is worth.',
                zh: '指數越高，1% 換算出來的點數就越多。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 3
    {
      id: 'use-it',
      n: 3,
      en: 'Talk and Use It',
      zh: '討論與運用',
      blocks: [
        {
          t: 'lead',
          en: 'Take a side and say why. None of these have a right answer, and none of them are about what you should do with your own money.',
          zh: '選一邊，並說明理由。以下都沒有標準答案，也都不是在談你自己的錢該怎麼處理。',
        },
        {
          t: 'poll',
          en: 'Where do you stand?',
          zh: '你的立場是什麼？',
          hintEn: 'There is no right answer — take a side and say why in English.',
          hintZh: '沒有標準答案：選一邊，用英文說明理由。',
          items: [
            {
              en: 'News reports explain price moves after they happen, not before.',
              zh: '新聞報導是在事後解釋行情，不是在事前。',
            },
            {
              en: 'What a company reports matters less than what the market expected from it.',
              zh: '公司公布什麼，不如市場原本預期什麼來得重要。',
            },
            {
              en: 'Owning five different funds is not the same thing as being diversified.',
              zh: '持有五檔不同的基金，和「分散」不是同一件事。',
            },
            {
              en: 'Reporting a market move in points instead of percent is misleading.',
              zh: '用點數而不用百分比報導行情，會讓人誤判。',
            },
            {
              en: 'A single headline about one person should not move an entire market.',
              zh: '關於某一個人的單一則新聞，不應該撼動整個市場。',
            },
          ],
        },
        {
          t: 'discuss',
          en: 'Talk about it',
          zh: '討論',
          items: [
            {
              en: 'Nvidia reported revenue that more than doubled, and the share price still fell. How would you explain that to a colleague who does not follow markets?',
              zh: 'Nvidia 公布的營收翻了一倍以上，股價還是跌。如果同事完全不看股市，你會怎麼解釋？',
              starters: [
                { en: 'The result was strong, but ___ .', zh: '財報很好，但是＿＿。' },
                { en: 'The market had already expected ___ , so ___ .', zh: '市場原本就預期＿＿，所以＿＿。' },
                { en: 'It is the gap between ___ and ___ that moves the price.', zh: '真正讓股價變動的是＿＿和＿＿之間的落差。' },
              ],
            },
            {
              en: 'The same company announced that its chief executive had resigned, then reinstated him eleven days later. What does that tell you about how much weight to give any single headline?',
              zh: '同一家公司宣布執行長辭職，11 天後又讓他復職。這件事告訴你，單一則新聞該給多少權重？',
              starters: [
                { en: 'It suggests that ___ .', zh: '這顯示＿＿。' },
                { en: 'Before I react to a headline, I would want to know ___ .', zh: '在對一則新聞做出反應之前，我會想先知道＿＿。' },
                { en: 'I would wait until ___ .', zh: '我會等到＿＿再說。' },
              ],
            },
            {
              en: 'When you read financial news, which do you trust more: the numbers, or the explanation printed next to them? Why?',
              zh: '你看財經新聞時，比較相信數字，還是旁邊那段解釋？為什麼？',
              starters: [
                { en: 'I trust ___ more, because ___ .', zh: '我比較相信＿＿，因為＿＿。' },
                { en: 'The explanation is useful when ___ , but ___ .', zh: '那段解釋在＿＿的時候有用，但是＿＿。' },
                { en: 'According to the report, ___ — although nobody can really know ___ .', zh: '根據報導＿＿——雖然沒有人真的能知道＿＿。' },
              ],
            },
          ],
        },
        {
          t: 'task',
          en: 'Two minutes, out loud',
          zh: '兩分鐘口說',
          instructionEn: 'Describe the twenty days to someone who missed them. Use at least five of the phrases below, and keep the dates in order. Tick each phrase as you use it.',
          instructionZh: '向一個完全沒跟上的人描述這二十天。至少用到下面五個說法，並且照日期順序講。每用到一個就打勾。',
          prompts: [
            { en: 'Tell the story of 5–24 November in two minutes.', zh: '用兩分鐘講完 11 月 5 日到 24 日的經過。' },
            { en: 'Explain one of the four acts in detail instead, and say why that one mattered most.', zh: '或者只詳細講四幕中的一幕，並說明為什麼那一幕最重要。' },
          ],
          checklist: [
            { en: 'closed lower', zh: '收跌' },
            { en: 'rallied', zh: '走強、上漲' },
            { en: 'extended losses', zh: '跌勢延續' },
            { en: 'rebounded', zh: '反彈' },
            { en: 'beat expectations', zh: '優於預期' },
            { en: 'gave the gain back', zh: '把漲幅吐回去' },
            { en: 'posted a record gain', zh: '創下紀錄性漲幅' },
          ],
        },
        {
          t: 'task',
          en: 'Three sentences, in writing',
          zh: '三句話的書面練習',
          instructionEn: 'Write a three-sentence market note in English: one sentence of what happened, one of what the figures show, and one of what somebody else thinks — attributed, so it is their view and not yours.',
          instructionZh: '用英文寫一則三句話的市場短評：第一句寫發生了什麼，第二句寫數字顯示什麼，第三句寫別人怎麼看——要註明來源，讓它是對方的看法，不是你的。',
          prompts: [
            { en: 'Write the note for 24 November, the day of the record gain.', zh: '為 11 月 24 日——創紀錄漲點的那一天——寫這則短評。' },
            { en: 'Or write it for any day this week, from a report you have read.', zh: '或者用你讀到的報導，為本週任何一天寫。' },
          ],
          frames: [
            { en: 'The index closed ___ % higher / lower at ___ .', zh: '指數收漲／收跌＿＿%，收在＿＿。' },
            { en: 'The figures show (that) ___ .', zh: '數字顯示＿＿。' },
            { en: 'According to ___ , ___ — although it looks as if ___ .', zh: '根據＿＿，＿＿——不過看起來＿＿。' },
          ],
        },
      ],
    },
  ],
};
