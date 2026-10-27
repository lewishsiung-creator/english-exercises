/* Health — IELTS Speaking Part 3, adult one-to-one.

   WRITTEN FOR THIS SITE, not taken from a handout. The questions, the language
   under them and all the Chinese are the site's.

   Two things make this topic harder than it looks. The vocabulary is medical
   enough that a candidate reaches for words they half know — a wrong technical
   term costs more than a plain one. And every question has a moral answer
   sitting on top of it ("people should take care of themselves") which is
   agreeable and empty. The notes deal with both.
*/

const LESSON = {
  id: 'health',
  title: 'Health',
  titleZh: '健康',

  intro: {
    en: 'A topic where the honest answer is usually uncomfortable: people know what is good for them and do not do it, and most of the questions here are really asking why. Blaming individuals is the easy answer and the weak one.',
    zh: '在這個主題裡，誠實的答案通常令人不太舒服：人們知道什麼對自己好，卻不去做——而這裡多數題目問的其實就是「為什麼」。把責任推給個人是最容易、也最薄弱的答案。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'explain unhealthy behaviour without simply blaming the person', zh: '解釋不健康的行為，而不只是責怪當事人' },
      { en: 'argue about who pays for healthcare and commit to a position', zh: '討論醫療由誰買單，並且明確表態' },
      { en: 'use plain language where you do not have the technical word', zh: '在沒有專業詞彙時，用淺白的說法把話講清楚' },
      { en: 'talk about an ageing population as a problem with solutions', zh: '把高齡化談成一個有解法的問題' },
    ],
  },

  source: {
    en: 'Written for this page. Like the other written-here topics, this lesson does not come from a handout — the questions, the language and the Chinese are all the site’s.',
    zh: '本頁為本站自行撰寫。與本站其他自編主題課相同，本課並非出自講義：題目、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'habits',
      n: 1,
      en: 'Habits, and why they stick',
      zh: '習慣，以及它為什麼改不掉',
      blocks: [
        {
          t: 'lead',
          en: 'The behaviour questions. All of them can be answered with “people are lazy”, and that answer is both unkind and unmarked — it explains nothing and stops the answer after one sentence.',
          zh: '行為類題目。這些題目都可以用「人很懶」來回答，而那個答案既不厚道也拿不到分——它什麼都沒解釋，而且一句話就把回答講完了。',
        },
        {
          t: 'qbank',
          en: 'Questions 1–5',
          zh: '第 1–5 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Why are some people unwilling to exercise regularly?',
              zh: '為什麼有些人不願意規律運動？',
              words: [
                { en: 'lead a sedentary lifestyle', zh: '過著久坐的生活' },
                { en: 'the results take months', zh: '成果要好幾個月才看得到' },
                { en: 'fit it around a working day', zh: '在上班的日子裡排進去' },
                { en: 'it has to be something you enjoy', zh: '那必須是你真的喜歡的事' },
              ],
            },
            {
              en: 'Why do people continue habits they know are harmful?',
              zh: '為什麼人們會繼續做明知有害的事？',
              words: [
                { en: 'the harm is cumulative and invisible', zh: '傷害是累積的，而且看不見' },
                { en: 'a way of coping with stress', zh: '一種應付壓力的方式' },
                { en: 'knowing is not the same as doing', zh: '知道和做到是兩回事' },
                { en: 'it is tied to how they socialise', zh: '它和社交方式綁在一起' },
              ],
            },
            {
              en: 'How has diet changed in your country over the last few decades?',
              zh: '過去幾十年，你的國家的飲食有什麼改變？',
              words: [
                { en: 'processed food', zh: '加工食品' },
                { en: 'eat out more often', zh: '更常外食' },
                { en: 'portion sizes', zh: '份量大小' },
                { en: 'convenience over cooking', zh: '便利勝過自己開伙' },
                { en: 'traditional diets were not all healthy either', zh: '傳統飲食也不是樣樣都健康' },
              ],
            },
            {
              en: 'Do you think people today are healthier than their grandparents?',
              zh: '你認為現在的人比他們的祖父母輩更健康嗎？',
              words: [
                { en: 'life expectancy', zh: '平均壽命' },
                { en: 'live longer but with more conditions', zh: '活得更久，但病痛更多' },
                { en: 'physically easier lives', zh: '體力負擔較輕的生活' },
                { en: 'different illnesses rather than fewer', zh: '是疾病換了種類，而不是變少' },
              ],
            },
            {
              en: 'Is there too much health advice available online?',
              zh: '網路上的健康資訊是不是太多了？',
              words: [
                { en: 'conflicting advice', zh: '互相矛盾的建議' },
                { en: 'check the source', zh: '查證來源' },
                { en: 'people give up and ignore all of it', zh: '人們乾脆放棄，全部不理' },
                { en: 'access is good, filtering is the problem', zh: '取得資訊是好事，問題在於篩選' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Three words that lift this whole step',
          zh: '三個詞就能撐起這一整步',
          bodyEn: '“Knowing is not the same as doing.” It is the honest answer to questions 1 and 2, it is short enough to say under pressure, and it moves the answer from blame to explanation. Follow it with *what* gets in the way — time, stress, money, the people around you — and you have a Band 7 answer built from ordinary words.',
          bodyZh: '「知道和做到是兩回事。」這是第 1、2 題最誠實的答案，短到在壓力下也說得出來，而且能把回答從「責怪」推進到「解釋」。接著說出「是什麼擋在中間」——時間、壓力、金錢、身邊的人——你就用最普通的字彙組出了一個 Band 7 的回答。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'whose-job',
      n: 2,
      en: 'Whose job is it',
      zh: '這是誰的責任',
      blocks: [
        {
          t: 'lead',
          en: 'The responsibility questions, and the hardest ones here to answer without a slogan. Each needs a position and a limit: what the state should do, and where a person’s own choices start.',
          zh: '責任類題目，也是這個主題裡最難避開口號的部分。每一題都需要一個立場加一條界線：國家該做什麼，以及個人的選擇從哪裡開始。',
        },
        {
          t: 'qbank',
          en: 'Questions 6–10',
          zh: '第 6–10 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Should healthcare be free for everyone?',
              zh: '醫療應該對所有人免費嗎？',
              words: [
                { en: 'free at the point of use', zh: '使用當下不收費' },
                { en: 'funded through taxation', zh: '由稅收支應' },
                { en: 'nobody should avoid treatment because of cost', zh: '不該有人因為費用而不敢就醫' },
                { en: 'demand is effectively unlimited', zh: '需求實際上是無上限的' },
                { en: 'a small charge to discourage waste', zh: '收取小額費用以減少浪費' },
              ],
            },
            {
              en: 'Whose responsibility is it to keep people healthy: the individual or the state?',
              zh: '維持國民健康是誰的責任：個人還是國家？',
              words: [
                { en: 'take responsibility for', zh: '為……負起責任' },
                { en: 'make the healthy choice the easy one', zh: '讓健康的選項變成最方便的選項' },
                { en: 'you cannot choose what is not available', zh: '沒有的東西，你選不了' },
                { en: 'personal responsibility has a floor under it', zh: '個人責任底下得有一層墊子' },
              ],
            },
            {
              en: 'Should governments tax unhealthy food?',
              zh: '政府應該對不健康的食品課稅嗎？',
              words: [
                { en: 'a sugar tax', zh: '糖稅' },
                { en: 'it hits poorer households hardest', zh: '對低收入家庭衝擊最大' },
                { en: 'change what manufacturers put in', zh: '改變製造商的配方' },
                { en: 'spend the revenue on the same problem', zh: '把稅收用在同一個問題上' },
              ],
            },
            {
              en: 'Should employers be responsible for their staff’s health?',
              zh: '雇主應該為員工的健康負責嗎？',
              words: [
                { en: 'workplace safety', zh: '職場安全' },
                { en: 'the hours they set', zh: '他們訂下的工時' },
                { en: 'a gym membership does not fix a workload', zh: '健身房會員卡解決不了工作量' },
                { en: 'responsible for the conditions, not the person', zh: '負責的是環境條件，不是那個人' },
              ],
            },
            {
              en: 'Should people be able to choose any treatment they want?',
              zh: '病人應該有權選擇任何自己想要的治療嗎？',
              words: [
                { en: 'informed consent', zh: '知情同意' },
                { en: 'limited resources', zh: '資源有限' },
                { en: 'evidence-based treatment', zh: '實證有效的治療' },
                { en: 'choice within what works', zh: '在有效範圍內做選擇' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'The sentence that fits every question here',
          zh: '這一步每一題都套得上的一句話',
          bodyEn: '“You cannot choose what is not available.” It is the strongest short argument against pure personal responsibility, and it works on food, exercise, treatment and working hours alike. Use it once, then concede the other half — people do still choose, and a system cannot make every choice for them.',
          bodyZh: '「沒有的東西，你選不了。」這是反駁「全是個人責任」最有力的一句短論證，而且在飲食、運動、醫療、工時上都成立。用一次，然後把另一半補回去——人終究還是在做選擇，制度也不可能替所有人選每一件事。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'pressure',
      n: 3,
      en: 'The pressure ahead',
      zh: '未來的壓力',
      blocks: [
        {
          t: 'lead',
          en: 'The forward-looking end, and the only part of this topic with hard numbers behind it. Ageing is not an opinion, which makes these questions a good place to sound precise.',
          zh: '前瞻性的一端，也是這個主題唯一有硬數據支撐的部分。高齡化不是意見問題，所以這些題目很適合讓你聽起來精確。',
        },
        {
          t: 'qbank',
          en: 'Questions 11–15',
          zh: '第 11–15 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Why has mental health become more widely discussed?',
              zh: '為什麼心理健康變得更常被討論？',
              words: [
                { en: 'less stigma than there was', zh: '比以前少了許多汙名' },
                { en: 'talked about rather than hidden', zh: '被談論，而不是被藏起來' },
                { en: 'more recognised, not necessarily more common', zh: '是更被看見，不一定是更普遍' },
                { en: 'recognising it is only the first step', zh: '看見它只是第一步' },
              ],
            },
            {
              en: 'How can cities encourage people to be more active?',
              zh: '城市可以如何鼓勵人們多活動？',
              words: [
                { en: 'build activity into the day', zh: '把活動融入日常' },
                { en: 'walkable neighbourhoods', zh: '適合步行的社區' },
                { en: 'free and close to home', zh: '免費而且離家近' },
                { en: 'not everyone wants to go to a gym', zh: '不是每個人都想上健身房' },
              ],
            },
            {
              en: 'How might technology change healthcare in the future?',
              zh: '未來科技可能如何改變醫療？',
              words: [
                { en: 'spot problems earlier', zh: '更早發現問題' },
                { en: 'remote consultations', zh: '遠距看診' },
                { en: 'treat people at home', zh: '在家接受治療' },
                { en: 'widen the gap if it is expensive', zh: '若太昂貴，反而會拉大差距' },
              ],
            },
            {
              en: 'Is an ageing population a problem for society?',
              zh: '高齡化對社會而言是個問題嗎？',
              words: [
                { en: 'an ageing population', zh: '高齡化社會' },
                { en: 'fewer working people supporting more', zh: '更少的工作人口支撐更多人' },
                { en: 'a problem with known solutions', zh: '一個已知有解法的問題' },
                { en: 'older people are not only a cost', zh: '長者不只是成本' },
                { en: 'care work will have to be paid for', zh: '照護工作終究得有人付錢' },
              ],
            },
            {
              en: 'What can be done to reduce pressure on hospitals?',
              zh: '可以怎麼做來減輕醫院的負擔？',
              words: [
                { en: 'treat people before they get that ill', zh: '在病情惡化之前就介入' },
                { en: 'preventive care', zh: '預防性照護' },
                { en: 'free up beds', zh: '空出病床' },
                { en: 'the cheapest treatment is the one not needed', zh: '最便宜的治療是「不需要的那一種」' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Say the unpopular half of question 14',
          zh: '第 14 題，把不討喜的那一半講出來',
          bodyEn: 'Everyone says older people are valuable and should be respected, which is true and costs nothing to say. The answer that scores adds the arithmetic: fewer working-age people are supporting more retired ones, so either taxes rise, retirement moves, or care gets worse — and then says which of the three it would choose. Naming an unpopular trade-off is a Band 7 move.',
          bodyZh: '每個人都會說長者很有價值、應該被尊重，這是真的，而且說出來毫無代價。能拿分的回答會把算術加上去：工作年齡人口變少、要支撐的退休人口變多，於是只有三條路——加稅、延後退休，或是照護品質下降——然後說出你會選哪一條。願意指名一個不討喜的取捨，就是 Band 7 的動作。',
        },
      ],
    },

    // ------------------------------------------------------------ step 4
    {
      id: 'practice',
      n: 4,
      en: 'Practice',
      zh: '練習',
      blocks: [
        {
          t: 'note',
          en: 'Plain words beat half-remembered medical ones',
          zh: '淺白的字，勝過半記不記的醫學名詞',
          bodyEn: 'This is the topic where candidates reach for technical vocabulary they are not sure of, and a misused term reads worse than a plain description. “A long-term illness you manage rather than cure” is better English than a condition name used wrongly. Lexical Resource rewards precision, and precision includes knowing what you do not know.',
          bodyZh: '這是考生最容易伸手去抓自己不太確定的專業詞彙的主題，而用錯的術語比淺白的描述更扣分。「一種你得長期控制、而不是治癒的疾病」是比用錯病名更好的英文。Lexical Resource 獎勵的是精準，而精準包含「知道自己不知道什麼」。',
        },
        {
          t: 'bank',
          en: 'Phrases that work across the whole topic',
          zh: '整個主題都用得上的片語',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'knowing is not the same as doing', zh: '知道和做到是兩回事' },
            { en: 'you cannot choose what is not available', zh: '沒有的東西，你選不了' },
            { en: 'make the healthy choice the easy one', zh: '讓健康的選項變成最方便的選項' },
            { en: 'preventive care', zh: '預防性照護' },
            { en: 'life expectancy', zh: '平均壽命' },
            { en: 'an ageing population', zh: '高齡化社會' },
            { en: 'free at the point of use', zh: '使用當下不收費' },
            { en: 'lead a sedentary lifestyle', zh: '過著久坐的生活' },
            { en: 'less stigma than there was', zh: '比以前少了許多汙名' },
            { en: 'the cheapest treatment is the one not needed', zh: '最便宜的治療是「不需要的那一種」' },
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
          instructionEn: 'Pull a question from any bank above. Open its language first, then answer. Record it and listen back.',
          instructionZh: '從上面任一題庫抽一題。先打開該題的用語，再回答。錄下來並回聽。',
          checklist: [
            { en: 'You explained a behaviour instead of blaming the person', zh: '你解釋了行為，而不是責怪當事人' },
            { en: 'Every word you used, you were sure of', zh: '你用的每個字，你都有把握' },
            { en: 'A position taken on who pays, with a limit', zh: '對「誰買單」表了態，並說出界線' },
            { en: 'Two phrases from that question’s own list', zh: '該題用語清單中的兩個片語' },
            { en: 'A conclusion in one sentence', zh: '一句話的結論' },
          ],
        },
      ],
    },
  ],
};
