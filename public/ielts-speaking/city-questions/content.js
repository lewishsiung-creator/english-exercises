/* Fifteen City Questions — IELTS Speaking Part 3, adult one-to-one.

   The bank the three worked answers in `cities` came out of. That lesson is
   three questions answered in full; this is all fifteen, each carrying the
   language it asks for, and no model answers at all. Teach `cities` first for
   the shape, then come here for volume.

   The set was built from an audio script about a city and its river. The
   script itself is not in the repo — only the questions it produced.

   From the source, unchanged: the three themes and their order, all fifteen
   questions, the useful language under each one, the eight high-value phrases
   with their Chinese, and the closing note on why this set suits Band 7.

   Written for this page: the Traditional Chinese for the fifteen questions and
   for the per-question language — the source gives Chinese only for the eight
   high-value phrases. Questions 9, 12 and 14 keep the Chinese they were given
   in the handout that `cities` was built from.
*/

const LESSON = {
  id: 'city-questions',
  title: 'Fifteen City Questions',
  titleZh: '城市十五題',

  intro: {
    en: 'One city, one river, fifteen questions. They start concrete — what a river was for — and end analytical, on what technology will do to the streets. Worked through in order, the set rehearses causes, consequences, comparisons, whose job it is, and what happens next.',
    zh: '一座城市、一條河、十五道題。開頭很具體——河流當初是做什麼用的——結尾則相當分析，談科技將如何改變街道。照順序做完，這一組題目會把原因、結果、比較、責任歸屬與未來發展全部演練一遍。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'talk about rivers, redevelopment and traffic without hunting for nouns', zh: '談河流、再開發與交通時，不必臨時找名詞' },
      { en: 'answer a “whose responsibility is it?” question without blaming everyone at once', zh: '回答「這是誰的責任？」而不是把所有人都怪一遍' },
      { en: 'argue a preservation question from both sides and still land somewhere', zh: '從正反兩面談保存類題目，最後仍然有明確落點' },
      { en: 'speculate about the future in language that is specific rather than vague', zh: '用具體而非含糊的語言，談論未來' },
    ],
  },

  source: {
    en: 'The questions, the per-question language and the high-value phrases are taken from Lewis’s Part 3 practice set, built from an audio script. The Chinese for the questions and the per-question language was written for this page.',
    zh: '題目、各題用語與高價值片語取自 Lewis 依音檔腳本整理的 Part 3 練習題組。題目與各題用語的中文為本頁自行翻譯。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'rivers',
      n: 1,
      en: 'Rivers, cities and the environment',
      zh: '河流、城市與環境',
      blocks: [
        {
          t: 'lead',
          en: 'The concrete end of the set. The first two questions have answers in history and industry; the last three start asking what ought to be done, and by whom.',
          zh: '這組題目中最具體的一端。前兩題的答案在歷史與工業裡；後三題開始問「應該怎麼做」，以及「該由誰來做」。',
        },
        {
          t: 'qbank',
          en: 'Questions 1–5',
          zh: '第 1–5 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for. The button never repeats one until the bank is empty.',
          hintZh: '點一題可看中文與該題需要的用語。在題庫抽完之前，按鈕不會重複同一題。',
          items: [
            {
              en: 'Why were rivers so important to cities in the past?',
              zh: '為什麼河流在過去對城市如此重要？',
              words: [
                { en: 'play an important role in', zh: '在……扮演重要角色' },
                { en: 'a means of transport', zh: '一種運輸方式' },
                { en: 'provide a source of food', zh: '提供食物來源' },
                { en: 'be built along a river', zh: '沿著河流興建' },
              ],
            },
            {
              en: 'Why have many urban rivers become polluted over time?',
              zh: '為什麼許多城市河流隨著時間變得受到污染？',
              words: [
                { en: 'industrial development', zh: '工業發展' },
                { en: 'population growth', zh: '人口成長' },
                { en: 'discharge waste into rivers', zh: '把廢棄物排入河川' },
                { en: 'water pollution', zh: '水污染' },
                { en: 'sewage disposal', zh: '污水處理' },
              ],
            },
            {
              en: 'Do you think governments should spend more money cleaning up polluted rivers?',
              zh: '你認為政府應該投入更多經費整治受污染的河流嗎？',
              words: [
                { en: 'clean up polluted waterways', zh: '整治受污染的水域' },
                { en: 'improve water quality', zh: '改善水質' },
                { en: 'restore the natural environment', zh: '復育自然環境' },
                { en: 'allocate public funds to', zh: '將公共經費撥用於' },
              ],
            },
            {
              en: 'How can clean rivers improve people’s quality of life in cities?',
              zh: '乾淨的河流如何提升城市居民的生活品質？',
              words: [
                { en: 'improve quality of life', zh: '提升生活品質' },
                { en: 'provide recreational opportunities', zh: '提供休閒機會' },
                { en: 'create green spaces', zh: '創造綠地' },
                { en: 'promote physical and mental well-being', zh: '促進身心健康' },
              ],
            },
            {
              en: 'Who should be mainly responsible for protecting rivers: governments, businesses, or individuals?',
              zh: '保護河流主要應該由誰負責：政府、企業，還是個人？',
              words: [
                { en: 'take responsibility for', zh: '為……負起責任' },
                { en: 'introduce environmental regulations', zh: '訂定環保法規' },
                { en: 'corporate responsibility', zh: '企業責任' },
                { en: 'raise public awareness', zh: '提高大眾意識' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Question 5 has a trap in it',
          zh: '第 5 題藏了一個陷阱',
          bodyEn: 'It offers three candidates and invites you to say “all of them”, which answers nothing. Pick one as *mainly* responsible, give the reason, then concede what the other two still have to do. The word the question supplies — “mainly” — is the one the answer has to earn.',
          bodyZh: '它給了三個選項，誘你回答「全部都是」，而那等於沒回答。選定一個作為「主要」責任方，給出理由，再承認另外兩方仍然該做的事。題目給了你「mainly」這個字，而這正是你的回答必須撐起來的那個字。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'development',
      n: 2,
      en: 'Urban development and public spaces',
      zh: '都市開發與公共空間',
      blocks: [
        {
          t: 'lead',
          en: 'The middle of the set, where most questions have two defensible sides. Three of these — old buildings, parks, pedestrian streets — are the ones most likely to come up on any city topic, not just this one.',
          zh: '這組題目的中段，多數題目都有兩個站得住腳的立場。其中三題——舊建築、公園、徒步街道——是任何城市主題最可能出現的題目，不限於這一組。',
        },
        {
          t: 'qbank',
          en: 'Questions 6–10',
          zh: '第 6–10 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Why are riverside areas attractive places for urban development?',
              zh: '為什麼河岸地區對都市開發具有吸引力？',
              words: [
                { en: 'prime sites for development', zh: '絕佳的開發地點' },
                { en: 'river views', zh: '河景' },
                { en: 'be in great demand', zh: '需求很高' },
                { en: 'increase property values', zh: '提高房地產價值' },
                { en: 'attract investment', zh: '吸引投資' },
              ],
            },
            {
              en: 'What are the advantages of converting old industrial areas into residential or recreational areas?',
              zh: '把舊工業區改建成住宅區或休閒區有哪些好處？',
              words: [
                { en: 'revitalise an area', zh: '活化一個地區' },
                { en: 'convert old buildings into', zh: '把舊建築改建成' },
                { en: 'give an area a new lease of life', zh: '讓一個地區重獲新生' },
                { en: 'make better use of existing space', zh: '更有效地運用現有空間' },
              ],
            },
            {
              en: 'Should cities preserve old industrial buildings or replace them with modern developments?',
              zh: '城市應該保存舊工業建築，還是以現代建築取代？',
              words: [
                { en: 'preserve historical character', zh: '保存歷史風貌' },
                { en: 'cultural heritage', zh: '文化資產' },
                { en: 'redevelop an area', zh: '重新開發一個地區' },
                { en: 'strike a balance between A and B', zh: '在 A 與 B 之間取得平衡' },
              ],
            },
            {
              en: 'Why are parks and other public spaces important in crowded cities?',
              zh: '為什麼公園與其他公共空間對人口密集的城市如此重要？',
              words: [
                { en: 'public spaces', zh: '公共空間' },
                { en: 'escape from the hustle and bustle', zh: '遠離喧囂' },
                { en: 'bring communities together', zh: '凝聚社區' },
                { en: 'provide recreational facilities', zh: '提供休閒設施' },
              ],
            },
            {
              en: 'Do you think city centres should have fewer cars and more pedestrian areas?',
              zh: '你認為市中心應該減少汽車、增加行人徒步區嗎？',
              words: [
                { en: 'pedestrian-friendly areas', zh: '友善行人的區域' },
                { en: 'ban traffic from', zh: '禁止車輛進入' },
                { en: 'reduce traffic congestion', zh: '減少交通壅塞' },
                { en: 'reclaim streets from cars', zh: '把道路空間從汽車手中重新取回' },
                { en: 'improve walkability', zh: '提升步行友善度' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Three of these already have answers written out',
          zh: '其中三題已經有完整範例答案',
          bodyEn: 'Question 9 here is the same question answered in full in the Cities lesson, as are 12 and 14 in the next step. Do them from this bank first, cold, and keep that lesson for afterwards — a worked answer read before the attempt is worth very little.',
          bodyZh: '本頁第 9 題，就是「城市：空間、交通與車流」那一課完整示範過的題目；下一步的第 12、14 題也是。請先在這裡冷著做一次，再回去看那一課——範例答案如果在嘗試之前就讀過，價值非常有限。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'transport-future',
      n: 3,
      en: 'The future of urban transportation',
      zh: '都市運輸的未來',
      blocks: [
        {
          t: 'lead',
          en: 'The analytical end. Two of these ask you to speculate, which is where vague answers go to die — “maybe it will be better” scores nothing. The language under each question is how you stay specific.',
          zh: '這組題目最分析性的一端。其中兩題要你推測未來，而含糊的回答在這裡最容易陣亡——「也許會變得更好」拿不到分。每題下方的用語，就是你保持具體的方法。',
        },
        {
          t: 'qbank',
          en: 'Questions 11–15',
          zh: '第 11–15 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'What are the biggest transportation problems facing large cities today?',
              zh: '現今大城市面臨最嚴重的交通問題是什麼？',
              words: [
                { en: 'traffic congestion', zh: '交通壅塞' },
                { en: 'air pollution', zh: '空氣污染' },
                { en: 'overcrowded public transport', zh: '過度擁擠的大眾運輸' },
                { en: 'long commuting times', zh: '漫長的通勤時間' },
                { en: 'traffic bottlenecks', zh: '交通瓶頸' },
              ],
            },
            {
              en: 'How can cities encourage people to use public transportation instead of private cars?',
              zh: '城市如何鼓勵民眾搭乘大眾運輸，而不是開私家車？',
              words: [
                { en: 'reduce dependence on cars', zh: '降低對汽車的依賴' },
                { en: 'improve public transport networks', zh: '改善大眾運輸網絡' },
                { en: 'offer financial incentives', zh: '提供經濟誘因' },
                { en: 'make public transport more accessible', zh: '提高大眾運輸的可及性' },
              ],
            },
            {
              en: 'Could rivers become an important form of urban transportation again in the future?',
              zh: '未來河流有可能再次成為重要的都市運輸方式嗎？',
              words: [
                { en: 'water-based transportation', zh: '水上運輸' },
                { en: 'shift traffic to the river', zh: '把運輸量轉移到河上' },
                { en: 'ease road congestion', zh: '緩解道路壅塞' },
                { en: 'an alternative means of transport', zh: '另一種運輸方式' },
              ],
            },
            {
              en: 'How has online shopping affected traffic in cities?',
              zh: '網路購物如何影響城市交通？',
              words: [
                { en: 'the rise of online shopping', zh: '網路購物的興起' },
                { en: 'delivery vehicles', zh: '配送車輛' },
                { en: 'last-mile delivery', zh: '最後一哩配送' },
                { en: 'double-park while dropping off parcels', zh: '遞送包裹時併排停車' },
                { en: 'add to traffic congestion', zh: '加劇交通壅塞' },
              ],
            },
            {
              en: 'How might technology change the way goods are delivered in cities in the future?',
              zh: '未來科技可能如何改變城市裡的貨物配送方式？',
              words: [
                { en: 'electric cargo bikes', zh: '電動貨運自行車' },
                { en: 'delivery drones', zh: '配送無人機' },
                { en: 'freight barges', zh: '貨運駁船' },
                { en: 'last-mile delivery', zh: '最後一哩配送' },
                { en: 'reduce carbon emissions', zh: '減少碳排放' },
                { en: 'make deliveries more efficient', zh: '讓配送更有效率' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Question 13 closes the circle',
          zh: '第 13 題讓整組題目繞回原點',
          bodyEn: 'It asks whether rivers could carry transport again — which is question 1 turned round to face the future. An answer that notices that, and says so, has just linked the first question of the set to the last. That is exactly the kind of move an examiner hears as thinking rather than reciting.',
          bodyZh: '它問的是河流能否再次承擔運輸——也就是把第 1 題轉過來面向未來。能注意到這一點並說出來的回答，就等於把整組題目的第一題和最後一題串了起來。考官聽到的，正是「在思考」而不是「在背誦」。',
        },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'phrases',
      n: 4,
      en: 'Eight phrases worth stealing',
      zh: '八個值得偷學的片語',
      blocks: [
        {
          t: 'lead',
          en: 'These came out of the same script, and unlike the topic vocabulary above they are not about cities at all. They will carry over to any Part 3 topic you meet.',
          zh: '這些出自同一份腳本，但和上面的主題字彙不同，它們根本不是在談城市。任何 Part 3 主題都用得上。',
        },
        {
          t: 'bank',
          en: 'High-value phrases',
          zh: '高價值片語',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'make the most of something', zh: '充分利用' },
            { en: 'take steps to do something', zh: '採取措施' },
            { en: 'be in great demand', zh: '需求很高' },
            { en: 'be converted into something', zh: '被改建成' },
            { en: 'revitalise an area', zh: '活化一個地區' },
            { en: 'reclaim streets from cars', zh: '把道路空間從汽車手中重新取回' },
            { en: 'be set to rise', zh: '預計將上升' },
            { en: 'strike a balance between A and B', zh: '在 A 與 B 之間取得平衡' },
          ],
        },
        {
          t: 'note',
          en: 'Why this set suits Band 7',
          zh: '為什麼這組題目適合衝 Band 7',
          bodyEn: 'These fifteen questions naturally require causes, consequences, comparisons, government responsibility and future developments — rather than simply describing personal experiences. That is the difference between a Part 1 habit and a Part 3 answer, and it is why a candidate who is fluent about their own life can still stall here.',
          bodyZh: '這十五道題天生就要求你談原因、結果、比較、政府責任與未來發展，而不是單純描述個人經驗。這正是 Part 1 的習慣與 Part 3 的回答之間的差別，也是為什麼有些考生談自己的生活很流利，到了這裡卻仍然卡住。',
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
          instructionEn: 'Pull a question from any of the three banks above. Open its language first, then close the page and answer. Tick each one you actually used.',
          instructionZh: '從上面三個題庫中任抽一題。先打開該題的用語，接著把頁面收起來作答。真正用上的就勾起來。',
          checklist: [
            { en: 'Two phrases from that question’s own list', zh: '該題用語清單中的兩個片語' },
            { en: 'One of the eight high-value phrases', zh: '八個高價值片語中的一個' },
            { en: 'A cause or a consequence, named as such', zh: '明確點出的一個原因或結果' },
            { en: 'A position, not a survey of everybody’s views', zh: '一個立場，而不是把各方意見盤點一遍' },
            { en: 'A conclusion in one sentence', zh: '一句話的結論' },
          ],
        },
      ],
    },
  ],
};
