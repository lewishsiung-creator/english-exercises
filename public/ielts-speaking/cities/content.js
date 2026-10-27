/* Cities: Space, Transport and Traffic — IELTS Speaking Part 3, adult.

   A second topic cluster for Part 3, and the first one built the other way
   round. The four commerce topics are question banks with phrase banks beside
   them; this one is three worked answers, studied and then taken away again.

   The three questions are numbered 9, 12 and 14 in Lewis's own handout, and
   the numbers are kept on the cards because that is how he refers to them in
   a session. The rest of that handout's questions are not here.

   From the source material, unchanged: the three questions and their Chinese,
   the five-part labels and their Chinese, every English sentence of the three
   model answers, the three vocabulary tables in both languages, and the
   side-by-side review.

   Changed from the source, deliberately: its closing note suggests aiming at
   forty to sixty seconds. This course teaches the long answer — ninety
   seconds, as mapped in ninety-seconds and now set on Part 3 itself — so the
   note here keeps the handout's warning against memorising and states the
   ninety-second target instead, saying on the page that it departs from the
   handout.

   Written for this page: the Traditional Chinese for the model answers and for
   the review chains — the source gives those in English only — and the framing
   in step 1 about which slot bends.
*/

const LESSON = {
  id: 'cities',
  title: 'Cities: Space, Transport and Traffic',
  titleZh: '城市：空間、交通與車流',

  intro: {
    en: 'Three questions about living in a crowded city, each answered in full. Read them as specimens rather than scripts — the shape is what you are taking away, not the sentences.',
    zh: '三道關於「住在擁擠城市」的題目，每一題都有完整回答。請把它們當成標本，而不是講稿——你要帶走的是結構，不是句子。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'fill the same five slots on any city topic', zh: '在任何城市主題上，填滿同樣的五個欄位' },
      { en: 'choose between extending a point and balancing it', zh: '在「延伸論點」與「平衡論點」之間做選擇' },
      { en: 'use the topic vocabulary that these three questions keep asking for', zh: '使用這三題反覆要求的主題字彙' },
      { en: 'rebuild a whole answer from its shape alone, without the script', zh: '只靠結構，就把整個回答重建出來，不看講稿' },
    ],
  },

  source: {
    en: 'The questions, model answers and vocabulary are taken from Lewis’s Part 3 handout. The Chinese for the model answers and the review was written for this page; everything else is the handout’s own.',
    zh: '題目、範例答案與字彙取自 Lewis 的 Part 3 講義。範例答案與總覽的中文為本頁自行翻譯，其餘皆依講義原文。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'five-slots',
      n: 1,
      en: 'Five slots, and the one that bends',
      zh: '五個欄位，其中一個會變',
      blocks: [
        {
          t: 'lead',
          en: 'All three answers in this lesson have the same five parts. Four of them do the same job every time. The fourth one has two settings, and choosing between them is most of the skill.',
          zh: '這堂課的三個回答都有同樣的五個部分。其中四個每次做的事都一樣。第四個有兩種模式，而大部分的功力就在於選對模式。',
        },
        {
          t: 'shapes',
          en: 'The five parts',
          zh: '五個部分',
          hintEn: 'Tap the card to see each slot and the line that opens it.',
          hintZh: '點卡片可看每個欄位，以及開啟它的句子。',
          items: [
            {
              tag: '5',
              name: 'The five-part answer',
              nameZh: '五段式回答',
              whenEn: 'For a Part 3 question you want to develop properly rather than merely answer.',
              whenZh: '適用於你想好好展開、而不只是回答掉的 Part 3 題目。',
              buckets: [
                { en: 'Main idea', zh: '核心觀點' },
                { en: 'Explanation', zh: '解釋原因' },
                { en: 'Example', zh: '具體例子' },
                { en: 'Further development', zh: '延伸觀點' },
                { en: 'Conclusion', zh: '總結' },
              ],
              lines: [
                { en: 'I think ________ because ________.', zh: '我認為 ________，因為 ________。' },
                { en: 'In large cities, ________.', zh: '在大城市裡，________。' },
                { en: 'For example, ________.', zh: '例如，________。' },
                { en: 'Another important benefit is ________. / However, ________.', zh: '另一個重要的好處是 ________。／然而，________。' },
                { en: 'So, I would say that ________.', zh: '所以，我會說 ________。' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Extend, or balance — not both',
          zh: '延伸，或平衡——不要兩個都來',
          bodyEn: 'Slot four either adds a second dimension to the point you already made, or turns and admits the other side. Question 9 extends: parks are good for health, and also for community. Question 14 balances: online shopping takes cars off the road, and also puts vans on it. Doing both in one answer is what makes a long answer feel shapeless.',
          bodyZh: '第四個欄位，要嘛為你已經提出的論點再加一個面向，要嘛轉身承認另一面。第九題是延伸：公園有益健康，也凝聚社區。第十四題是平衡：網購讓私家車減少，卻也讓貨車變多。在同一個回答裡兩種都做，正是長回答聽起來鬆散的原因。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'public-spaces',
      n: 2,
      en: 'Public spaces',
      zh: '公共空間',
      blocks: [
        {
          t: 'question',
          kicker: 'Part 3 · Question 9',
          en: 'Why are parks and other public spaces important in crowded cities?',
          zh: '為什麼公園與其他公共空間對人口密集的城市如此重要？',
          shape: 'Five parts, slot four extends',
          shapeZh: '五段式，第四段為延伸',
        },
        {
          t: 'model',
          en: 'The answer, in five parts',
          zh: '範例答案，分成五個部分',
          hintEn: 'Plan your own first. Opening this before you have tried turns the lesson into reading.',
          hintZh: '請先自己規劃一次。還沒試就打開，這堂課就變成閱讀了。',
          parts: [
            {
              tag: 'Main idea', tagZh: '核心觀點',
              en: 'I think parks and public spaces are essential in crowded cities because they give people a chance to escape from the hustle and bustle of urban life.',
              zh: '我認為公園與公共空間在擁擠的城市裡非常重要，因為它們讓人們有機會暫時遠離都市生活的喧囂。',
            },
            {
              tag: 'Explanation', tagZh: '解釋原因',
              en: 'In large cities, people often live in small apartments and spend most of their time working or commuting. Having access to green spaces allows them to relax, exercise, and spend time outdoors, which can significantly improve their physical and mental well-being.',
              zh: '在大城市裡，人們常住在小公寓中，大部分時間都在工作或通勤。能夠使用綠地，讓他們可以放鬆、運動、待在戶外，這能顯著改善他們的身心健康。',
            },
            {
              tag: 'Example', tagZh: '具體例子',
              en: 'Another important benefit is that parks can bring communities together. For example, families can have picnics, children can play together, and older people can socialize with their neighbors.',
              zh: '另一個重要的好處是，公園能夠凝聚社區。例如，家庭可以野餐、孩子可以一起玩，長輩也可以和鄰居交流。',
            },
            {
              tag: 'Further development', tagZh: '延伸觀點',
              en: 'In addition, well-designed parks provide recreational facilities, such as walking paths, basketball courts, and outdoor fitness equipment.',
              zh: '此外，設計良好的公園還提供休閒設施，例如步道、籃球場和戶外健身器材。',
            },
            {
              tag: 'Conclusion', tagZh: '總結',
              en: 'So, I would say that public spaces are not just places for relaxation. They also play an important role in improving people’s quality of life and creating a stronger sense of community.',
              zh: '所以，我會說公共空間不只是放鬆的地方。它們在提升人們的生活品質、建立更強的社區歸屬感上，也扮演了重要角色。',
            },
          ],
        },
        {
          t: 'bank',
          en: 'Key vocabulary',
          zh: '關鍵字彙',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'escape from the hustle and bustle', zh: '遠離喧囂' },
            { en: 'physical and mental well-being', zh: '身心健康' },
            { en: 'bring communities together', zh: '凝聚社區' },
            { en: 'recreational facilities', zh: '休閒設施' },
            { en: 'a sense of community', zh: '社區歸屬感' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'public-transport',
      n: 3,
      en: 'Public transportation',
      zh: '大眾運輸',
      blocks: [
        {
          t: 'question',
          kicker: 'Part 3 · Question 12',
          en: 'How can cities encourage people to use public transportation instead of private cars?',
          zh: '城市如何鼓勵民眾搭乘大眾運輸，而不是開私家車？',
          shape: 'Five parts, slot four extends',
          shapeZh: '五段式，第四段為延伸',
        },
        {
          t: 'model',
          en: 'The answer, in five parts',
          zh: '範例答案，分成五個部分',
          hintEn: 'A “how can…” question wants measures, in order of how much they matter.',
          hintZh: '「how can…」題要的是做法，而且要依重要性排序。',
          parts: [
            {
              tag: 'Main idea', tagZh: '核心觀點',
              en: 'I think the most effective approach is to make public transportation more convenient, affordable, and reliable than driving.',
              zh: '我認為最有效的做法，是讓大眾運輸比開車更方便、更便宜、也更可靠。',
            },
            {
              tag: 'Explanation', tagZh: '解釋方法',
              en: 'First of all, governments should improve public transport networks by expanding metro systems, increasing bus frequency, and making transfers between different forms of transportation easier.',
              zh: '首先，政府應該改善大眾運輸網絡：擴建捷運系統、提高公車班次，並讓不同運具之間的轉乘更方便。',
            },
            {
              tag: 'Example', tagZh: '具體例子',
              en: 'For example, if people can travel across the city quickly without worrying about parking or traffic jams, they are much more likely to leave their cars at home.',
              zh: '例如，如果人們能快速穿越城市，不必擔心停車或塞車，他們就更可能把車留在家裡。',
            },
            {
              tag: 'Further development', tagZh: '延伸策略',
              en: 'Another strategy is to offer financial incentives, such as discounted monthly passes or subsidies for regular commuters. Cities should also make public transport more accessible, particularly for elderly passengers and people with disabilities.',
              zh: '另一個策略是提供經濟誘因，例如優惠月票或給固定通勤者的補貼。城市也應該提高大眾運輸的可及性，特別是對年長乘客與身心障礙者。',
            },
            {
              tag: 'Conclusion', tagZh: '總結',
              en: 'However, I think convenience matters more than simply making public transport cheaper. Ultimately, if governments want to reduce dependence on cars, they need to create a transportation system that people genuinely prefer using, rather than forcing them to change their habits.',
              zh: '不過，我認為便利性比單純把票價壓低更重要。歸根結柢，政府若想降低對汽車的依賴，就必須打造一套人們真心願意使用的運輸系統，而不是逼他們改變習慣。',
            },
          ],
        },
        {
          t: 'note',
          en: 'This conclusion does two jobs',
          zh: '這個結論做了兩件事',
          bodyEn: 'It ranks the measures just listed — convenience above price — and only then closes. That ranking is what stops a “how can…” answer reading as a list of everything the candidate could think of.',
          bodyZh: '它先把剛才列出的做法排了順序——便利性高於價格——然後才收尾。正是這個排序，讓「how can…」的回答不會讀起來像是考生想得到的東西全部列一遍。',
        },
        {
          t: 'bank',
          en: 'Key vocabulary',
          zh: '關鍵字彙',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'improve public transport networks', zh: '改善大眾運輸網絡' },
            { en: 'increase bus frequency', zh: '提高公車班次' },
            { en: 'offer financial incentives', zh: '提供經濟誘因' },
            { en: 'discounted monthly passes', zh: '優惠月票' },
            { en: 'make public transport more accessible', zh: '提高大眾運輸的可及性' },
            { en: 'reduce dependence on cars', zh: '降低對汽車的依賴' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'online-shopping-traffic',
      n: 4,
      en: 'Online shopping and traffic',
      zh: '網路購物與交通',
      blocks: [
        {
          t: 'question',
          kicker: 'Part 3 · Question 14',
          en: 'How has online shopping affected traffic in cities?',
          zh: '網路購物如何影響城市交通？',
          shape: 'Five parts, slot four balances',
          shapeZh: '五段式，第四段為平衡',
        },
        {
          t: 'model',
          en: 'The answer, in five parts',
          zh: '範例答案，分成五個部分',
          hintEn: 'Here the middle slots turn into positive and negative. Same five places, different jobs.',
          hintZh: '這一題的中段變成了正面與負面。位置一樣是五個，任務換了。',
          parts: [
            {
              tag: 'Main idea', tagZh: '核心觀點',
              en: 'I think the rise of online shopping has had both positive and negative effects on urban traffic.',
              zh: '我認為網路購物的興起，對都市交通同時帶來了正面與負面的影響。',
            },
            {
              tag: 'Positive impact', tagZh: '正面影響',
              en: 'On the positive side, online shopping allows people to purchase products without traveling to physical stores. In theory, this could reduce the number of shopping-related car trips.',
              zh: '正面來看，網路購物讓人們不必特地前往實體店面就能買東西。理論上，這可以減少因購物而產生的開車次數。',
            },
            {
              tag: 'Negative impact', tagZh: '負面影響',
              en: 'However, it has also led to a significant increase in delivery vehicles on city streets. One major issue is last-mile delivery, which refers to the final stage of transporting goods from a distribution centre to the customer’s doorstep.',
              zh: '然而，它也使城市街道上的配送車輛大幅增加。其中一個主要問題是「最後一哩配送」，也就是把商品從配送中心送到顧客家門口的最後階段。',
            },
            {
              tag: 'Example and development', tagZh: '例子與延伸',
              en: 'Delivery drivers often have to stop frequently in residential or commercial areas. In some cases, they even double-park while dropping off parcels, which can block traffic and add to traffic congestion. Another concern is that consumers increasingly expect same-day or next-day delivery, putting additional pressure on logistics companies.',
              zh: '配送員常常得在住宅區或商業區頻繁停車。有些情況下，他們甚至會在遞送包裹時併排停車，這會阻擋車流、加劇交通壅塞。另一個隱憂是，消費者越來越期待當日或隔日到貨，對物流公司造成額外壓力。',
            },
            {
              tag: 'Conclusion', tagZh: '總結',
              en: 'So, while online shopping has made life more convenient, I think cities need smarter delivery systems to manage its impact on urban transportation.',
              zh: '所以，雖然網路購物讓生活更便利，我認為城市需要更聰明的配送系統，來管理它對都市運輸的影響。',
            },
          ],
        },
        {
          t: 'note',
          en: 'Defining a term buys you time and marks',
          zh: '解釋一個術語，同時換來時間與分數',
          bodyEn: '“Last-mile delivery, which refers to the final stage of transporting goods from a distribution centre to the customer’s doorstep” — naming a technical term and then explaining it in your own words is the most reliable way to extend an answer. It is also, unlike filler, something the examiner can award marks for.',
          bodyZh: '「last-mile delivery，也就是把商品從配送中心送到顧客家門口的最後階段」——先說出一個專業術語，再用自己的話解釋它，是延長回答最可靠的方法。而且不同於廢話填充，這是考官真的可以給分的東西。',
        },
        {
          t: 'bank',
          en: 'Key vocabulary',
          zh: '關鍵字彙',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'the rise of online shopping', zh: '網路購物的興起' },
            { en: 'delivery vehicles', zh: '配送車輛' },
            { en: 'last-mile delivery', zh: '最後一哩配送' },
            { en: 'double-park', zh: '併排停車' },
            { en: 'drop off parcels', zh: '遞送包裹' },
            { en: 'add to traffic congestion', zh: '加劇交通壅塞' },
            { en: 'put pressure on logistics companies', zh: '對物流公司造成壓力' },
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
          en: 'Three answers, three topics, the same three moves. Read the chains, then close the models and do one from the shape alone.',
          zh: '三個回答、三個主題，同樣三個動作。先看結構鏈，然後把範例收起來，只靠結構做一題。',
        },
        {
          t: 'chain',
          en: 'The three answers at a glance',
          zh: '三個回答總覽',
          hintEn: 'What each one argues, and the order it gets there in.',
          hintZh: '每一題主張什麼，以及它用什麼順序達成。',
          rows: [
            {
              n: 'Q9',
              en: 'Public spaces', zh: '公共空間',
              claimEn: 'Parks improve urban quality of life.',
              claimZh: '公園提升都市生活品質。',
              steps: [
                { en: 'Physical and mental benefits', zh: '身心益處' },
                { en: 'Social benefits', zh: '社會益處' },
                { en: 'Facilities', zh: '設施' },
              ],
            },
            {
              n: 'Q12',
              en: 'Public transport', zh: '大眾運輸',
              claimEn: 'Public transport must be more attractive than driving.',
              claimZh: '大眾運輸必須比開車更有吸引力。',
              steps: [
                { en: 'Infrastructure', zh: '基礎建設' },
                { en: 'Financial incentives', zh: '經濟誘因' },
                { en: 'Accessibility', zh: '可及性' },
              ],
            },
            {
              n: 'Q14',
              en: 'Online shopping', zh: '網路購物',
              claimEn: 'Online shopping has mixed effects on traffic.',
              claimZh: '網路購物對交通的影響有好有壞。',
              steps: [
                { en: 'Positive impact', zh: '正面影響' },
                { en: 'Negative impact', zh: '負面影響' },
                { en: 'Real-world example', zh: '真實例子' },
                { en: 'Implications', zh: '後續影響' },
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
            { en: 'Why are parks and other public spaces important in crowded cities?', zh: '為什麼公園與其他公共空間對人口密集的城市如此重要？', tag: 'Slot four extends', tagZh: '第四段延伸' },
            { en: 'How can cities encourage people to use public transportation instead of private cars?', zh: '城市如何鼓勵民眾搭乘大眾運輸，而不是開私家車？', tag: 'Slot four extends', tagZh: '第四段延伸' },
            { en: 'How has online shopping affected traffic in cities?', zh: '網路購物如何影響城市交通？', tag: 'Slot four balances', tagZh: '第四段平衡' },
          ],
        },
        {
          t: 'clock',
          en: 'Against the clock',
          zh: '計時進行',
          /* No override: ninety seconds is Part 3's band for the whole course
             now, and this lesson no longer has to ask for it. */
        },
        {
          t: 'task',
          en: 'Say it',
          zh: '說出來',
          instructionEn: 'Rebuild the answer from the chain, not from memory of the sentences. Tick each slot as it lands.',
          instructionZh: '靠結構鏈重建回答，而不是靠記住的句子。每填完一個欄位就勾起來。',
          checklist: [
            { en: 'Main idea — answered in the first sentence', zh: '核心觀點——第一句就回答了' },
            { en: 'Explanation — why, in two or three sentences', zh: '解釋原因——用兩三句說明為什麼' },
            { en: 'Example — something concrete enough to picture', zh: '具體例子——具體到可以想像的畫面' },
            { en: 'Further development — extended or balanced, not both', zh: '延伸觀點——延伸或平衡，不要兩個都做' },
            { en: 'Conclusion — one sentence, then stop', zh: '總結——一句話，然後停下來' },
          ],
        },
        {
          t: 'note',
          en: 'Do not memorise these',
          zh: '不要背這些答案',
          bodyEn: 'These are extended models, written to show how far a point can be developed. Rebuild the shape, not the sentences — an examiner can hear a memorised answer, and it costs more than an imperfect one ever would. The length to aim at is the ninety seconds the clock above marks, which is this course’s target across the whole of Part 3. (The handout these came from suggests forty to sixty seconds instead; this course teaches the longer answer, so that line is not reproduced here.)',
          bodyZh: '這些是「延伸版」的範例答案，用意是示範一個論點可以展開到什麼程度。請重建結構，而不是重建句子——考官聽得出背稿，而那付出的代價，遠比講得不完美更大。長度目標是上方計時標示的九十秒，這也是本課程整個 Part 3 的目標。（本課材料出處的講義建議四十到六十秒；本課程教的是較長的回答，因此該段未收錄於此。）',
        },
      ],
    },
  ],
};
