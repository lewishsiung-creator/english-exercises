/* Government and Society — IELTS Speaking Part 3, adult one-to-one.

   WRITTEN FOR THIS SITE, not taken from a handout. The questions, the language
   under them and all the Chinese are the site's.

   The last of the six topic clusters, and the one that needs a word of care.
   Part 3 asks about government in the abstract — what a state is for, how
   public money should be spent, why people trust or distrust institutions —
   and it does not ask you to take sides in your own country's politics. The
   questions here are deliberately written so that none of them has a party
   answer, and the first note says so to the learner directly, because a
   candidate who starts naming domestic parties has walked into the one area
   of Part 3 where there is nothing to gain.
*/

const LESSON = {
  id: 'government',
  title: 'Government and Society',
  titleZh: '政府與社會',

  intro: {
    en: 'Questions about what a state is for, who decides, and what public money should buy. None of them is asking which party you support — and an answer that goes there has left the exam without gaining anything.',
    zh: '這些題目問的是：國家是為了什麼而存在、由誰決定，以及公共經費該買些什麼。沒有一題在問你支持哪個政黨——把答案帶往那裡，等於離開了考試，而且什麼都沒換到。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'discuss government in the abstract, without naming a party', zh: '抽象地討論政府，而不提到任何政黨' },
      { en: 'argue about how public money should be divided and choose', zh: '討論公共經費該怎麼分配，並做出選擇' },
      { en: 'explain distrust of institutions without being cynical', zh: '解釋人們為何不信任體制，而不流於犬儒' },
      { en: 'weigh a freedom against a protection in one sentence', zh: '用一句話衡量自由與保護之間的取捨' },
    ],
  },

  source: {
    en: 'Written for this page. Like the other written-here topics, this lesson does not come from a handout — the questions, the language and the Chinese are all the site’s.',
    zh: '本頁為本站自行撰寫。與本站其他自編主題課相同，本課並非出自講義：題目、用語與中文皆為本站自行編寫。',
  },

  steps: [

    // ------------------------------------------------------------ step 1
    {
      id: 'what-for',
      n: 1,
      en: 'What a government is for',
      zh: '政府是為了什麼',
      blocks: [
        {
          t: 'note',
          en: 'Keep it general, and keep it civil',
          zh: '保持抽象，也保持得體',
          bodyEn: 'An examiner is marking your English, not your politics, and has to stay neutral however strongly you put something. Answer about governments rather than a government, avoid naming parties or current leaders, and argue about principles — who should pay, who should decide, what a rule is for. You lose nothing by this: every one of these questions can be answered fully without a single domestic reference.',
          bodyZh: '考官評的是你的英文，不是你的政治立場，而且無論你講得多激動，他都必須保持中立。請談「政府」這個概念，而不是「某個政府」；避免提到政黨或現任領導人；把論點放在原則上——誰該付錢、誰該決定、一條規則是為了什麼。你不會因此損失任何東西：這裡每一題都可以完整回答，而完全不需要提到國內政治。',
        },
        {
          t: 'lead',
          en: 'The foundational questions. They sound abstract and they are the easiest to answer concretely, because every one of them comes down to money that could have been spent elsewhere.',
          zh: '最基礎的幾題。它們聽起來抽象，其實最容易講得具體，因為每一題歸根究柢都是「這筆錢本來可以花在別的地方」。',
        },
        {
          t: 'qbank',
          en: 'Questions 1–5',
          zh: '第 1–5 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'What are the most important things a government should provide?',
              zh: '政府最應該提供的是什麼？',
              words: [
                { en: 'public services', zh: '公共服務' },
                { en: 'the things nobody can buy alone', zh: '沒有人能單獨買到的東西' },
                { en: 'infrastructure', zh: '基礎建設' },
                { en: 'a safety net', zh: '社會安全網' },
                { en: 'everything else follows from it', zh: '其他一切都建立在它之上' },
              ],
            },
            {
              en: 'Should governments spend more on health or education?',
              zh: '政府應該在醫療還是教育上投入更多？',
              words: [
                { en: 'allocate public funds to', zh: '將公共經費撥用於' },
                { en: 'health is urgent, education is important', zh: '醫療是緊急的，教育是重要的' },
                { en: 'spending on one reduces the need for the other', zh: '花在其中一項，會減少對另一項的需求' },
                { en: 'the urgent always wins, which is the problem', zh: '緊急的總是勝出，而問題正在這裡' },
              ],
            },
            {
              en: 'Is it the government’s job to reduce inequality?',
              zh: '縮小貧富差距是政府的責任嗎？',
              words: [
                { en: 'the gap between rich and poor', zh: '貧富差距' },
                { en: 'equality of opportunity', zh: '機會平等' },
                { en: 'redistribute through taxation', zh: '透過稅制重分配' },
                { en: 'inequality has a cost everyone pays', zh: '不平等的代價是所有人一起承擔的' },
                { en: 'how far is a political question', zh: '要做到多少，是政治問題' },
              ],
            },
            {
              en: 'Do you think taxes are a fair way to pay for public services?',
              zh: '你認為用稅收支應公共服務是公平的方式嗎？',
              words: [
                { en: 'funded through taxation', zh: '由稅收支應' },
                { en: 'according to what you can afford', zh: '依照負擔能力' },
                { en: 'people resent paying for what they do not use', zh: '人們不想為自己用不到的東西付錢' },
                { en: 'nobody has proposed a better one', zh: '目前沒有人提出更好的辦法' },
              ],
            },
            {
              en: 'How can governments make sure public money is well spent?',
              zh: '政府可以如何確保公帑用得其所？',
              words: [
                { en: 'transparency', zh: '透明度' },
                { en: 'publish where it went', zh: '公開經費流向' },
                { en: 'independent auditing', zh: '獨立稽核' },
                { en: 'measure the outcome, not the spending', zh: '衡量成果，而不是花了多少' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Question 2 has the best answer in the topic',
          zh: '第 2 題有這個主題最好的答案',
          bodyEn: '“Health is urgent and education is important, and the urgent always wins — which is exactly why education gets underfunded.” It chooses, explains the mechanism, and criticises the choice it just made, all in one sentence. Answers that can hold a tension like that are what separate a 7 from a 6.',
          bodyZh: '「醫療是緊急的，教育是重要的，而緊急的總是勝出——這正是教育長期經費不足的原因。」一句話裡做了選擇、解釋了機制，還批評了自己剛做的選擇。能承載這種張力的回答，就是 7 和 6 的分野。',
        },
      ],
    },

    // ------------------------------------------------------------ step 2
    {
      id: 'trust',
      n: 2,
      en: 'Rules, trust and taking part',
      zh: '規則、信任與參與',
      blocks: [
        {
          t: 'lead',
          en: 'The questions about the relationship between a state and the people in it. Cynicism is the easy register here and it is a trap — “politicians are all the same” ends an answer rather than developing one.',
          zh: '這些題目問的是國家與人民之間的關係。犬儒是最容易掉進去的語氣，而那是個陷阱——「政治人物都一樣」會終結一個回答，而不是展開它。',
        },
        {
          t: 'qbank',
          en: 'Questions 6–10',
          zh: '第 6–10 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Why do people often distrust politicians?',
              zh: '為什麼人們常常不信任政治人物？',
              words: [
                { en: 'promise more than they can deliver', zh: '承諾超出自己做得到的範圍' },
                { en: 'the timescales do not match', zh: '時間尺度對不上' },
                { en: 'visible failures, invisible successes', zh: '失敗很顯眼，成功看不見' },
                { en: 'a few cases colour the whole profession', zh: '少數案例染色了整個行業' },
              ],
            },
            {
              en: 'Should voting be compulsory?',
              zh: '投票應該強制嗎？',
              words: [
                { en: 'turnout', zh: '投票率' },
                { en: 'a duty rather than a right', zh: '是義務而不是權利' },
                { en: 'uninformed votes', zh: '不了解狀況的選票' },
                { en: 'forcing someone to vote is not the same as engaging them', zh: '逼人投票，不等於讓他參與' },
              ],
            },
            {
              en: 'How can governments encourage people to obey rules?',
              zh: '政府可以如何讓人民願意遵守規則？',
              words: [
                { en: 'explain the reason behind a rule', zh: '說明規則背後的理由' },
                { en: 'enforcement is the hard part', zh: '難的是執行' },
                { en: 'people follow rules they think are fair', zh: '人們會遵守自己認為公平的規則' },
                { en: 'a rule nobody obeys weakens the rest', zh: '沒人遵守的規則會削弱其他規則' },
              ],
            },
            {
              en: 'Why do some people choose not to get involved in politics?',
              zh: '為什麼有些人選擇不參與政治？',
              words: [
                { en: 'feel it makes no difference', zh: '覺得做了也沒差' },
                { en: 'it has become unpleasant to discuss', zh: '討論起來變得令人不愉快' },
                { en: 'no time rather than no interest', zh: '是沒時間，不是沒興趣' },
                { en: 'disengagement is itself a result', zh: '冷漠本身就是一種結果' },
              ],
            },
            {
              en: 'What can ordinary people do to influence government decisions?',
              zh: '一般人可以怎麼影響政府的決策？',
              words: [
                { en: 'local issues are the ones you can move', zh: '地方議題才是你推得動的' },
                { en: 'organised groups are heard', zh: '有組織的團體才被聽見' },
                { en: 'consultation', zh: '公眾諮詢' },
                { en: 'between elections, not only at them', zh: '在選舉之間，而不只是在選舉當天' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'Explain distrust without joining in',
          zh: '解釋不信任，但不要跟著一起罵',
          bodyEn: 'Question 6 invites a rant and rewards an analysis. The strongest version is structural rather than moral: a politician works in four-year terms and most real problems take twenty, so they are pushed to promise what fits the term — and then they are blamed for exactly that. You have explained the distrust, and you have not called anyone dishonest.',
          bodyZh: '第 6 題引你開罵，但給分的是分析。最有力的版本是結構性的，而不是道德性的：政治人物以四年為週期，而多數真正的問題要二十年，於是他們被推著去承諾「塞得進任期」的事——接著又正好因為這件事被責怪。你解釋了不信任，而且沒有指控任何人不誠實。',
        },
      ],
    },

    // ------------------------------------------------------------ step 3
    {
      id: 'who-decides',
      n: 3,
      en: 'Who decides, and what next',
      zh: '由誰決定，以及接下來',
      blocks: [
        {
          t: 'lead',
          en: 'The analytical end: where a decision should sit, and how far a state should reach. Every question here is a freedom weighed against a protection, which is a shape you can say out loud.',
          zh: '分析性的一端：決策該放在哪一層、國家的手該伸多長。這裡每一題都是「自由」對「保護」的權衡，而這個結構你可以直接說出口。',
        },
        {
          t: 'qbank',
          en: 'Questions 11–15',
          zh: '第 11–15 題',
          hintEn: 'Tap a question for its Chinese and the language it asks for.',
          hintZh: '點一題可看中文與該題需要的用語。',
          items: [
            {
              en: 'Should governments control what people can see online?',
              zh: '政府應該管制人民能在網路上看到什麼嗎？',
              words: [
                { en: 'freedom of expression', zh: '言論自由' },
                { en: 'protect people from real harm', zh: '保護人們不受實際傷害' },
                { en: 'who decides where the line is', zh: '由誰決定界線在哪裡' },
                { en: 'the power is easy to widen later', zh: '這種權力日後很容易被擴大' },
                { en: 'regulate the platform rather than the speech', zh: '管平台，而不是管言論' },
              ],
            },
            {
              en: 'How important is it for citizens to understand how government works?',
              zh: '人民了解政府如何運作，有多重要？',
              words: [
                { en: 'hold them to account', zh: '要求他們負起責任' },
                { en: 'know which door to knock on', zh: '知道該去敲哪一扇門' },
                { en: 'easier to mislead people who do not know', zh: '不了解的人比較容易被誤導' },
                { en: 'taught badly or not at all', zh: '不是教得很差，就是根本沒教' },
              ],
            },
            {
              en: 'Should local or national government make decisions about a city?',
              zh: '關於一座城市的決策，該由地方還是中央政府做？',
              words: [
                { en: 'local government', zh: '地方政府' },
                { en: 'closer to the problem', zh: '離問題比較近' },
                { en: 'national funding, local decisions', zh: '中央出錢，地方決定' },
                { en: 'some things cross city boundaries', zh: '有些事會跨越城市邊界' },
              ],
            },
            {
              en: 'Should governments plan for the long term or respond to what people want now?',
              zh: '政府該做長期規劃，還是回應民眾當下的需求？',
              words: [
                { en: 'short-term thinking', zh: '短線思維' },
                { en: 'an election cycle', zh: '選舉週期' },
                { en: 'a long-term problem in a short-term system', zh: '長期問題落在短期的制度裡' },
                { en: 'independent bodies with longer horizons', zh: '視野更長的獨立機構' },
              ],
            },
            {
              en: 'Will the role of government change in the future?',
              zh: '政府的角色未來會改變嗎？',
              words: [
                { en: 'problems that cross borders', zh: '跨越國界的問題' },
                { en: 'regulate what companies already do', zh: '規範企業早已在做的事' },
                { en: 'some power has moved to private hands', zh: '部分權力已經移到私人手上' },
                { en: 'the job gets harder rather than smaller', zh: '這份工作是變難，而不是變小' },
              ],
            },
          ],
        },
        {
          t: 'note',
          en: 'One sentence for question 11, and for half of Part 3',
          zh: '一句話解決第 11 題，以及 Part 3 的一半題目',
          bodyEn: '“The question is not whether the power is used well now, but who holds it when it is used badly.” That is the honest argument about online control, and the same sentence works on surveillance, emergency powers and almost any question about a state’s reach. It is also the kind of sentence that cannot sound memorised, because it only fits where it fits.',
          bodyZh: '「重點不是這個權力現在被好好使用，而是當它被濫用時，誰握著它。」這是關於網路管制最誠實的論證，而同一句話也適用於監控、緊急權力，以及幾乎任何關於國家權力範圍的題目。它也是那種不會聽起來像背稿的句子——因為它只在用得上的地方用得上。',
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
          t: 'bank',
          en: 'Phrases that work across the whole topic',
          zh: '整個主題都用得上的片語',
          hintEn: 'Tap a row for the Chinese. Tap 🔊 to hear the English.',
          hintZh: '點一列可看中文，點 🔊 可聽英文。',
          rows: [
            { en: 'public services', zh: '公共服務' },
            { en: 'allocate public funds to', zh: '將公共經費撥用於' },
            { en: 'a safety net', zh: '社會安全網' },
            { en: 'equality of opportunity', zh: '機會平等' },
            { en: 'hold them to account', zh: '要求他們負起責任' },
            { en: 'transparency', zh: '透明度' },
            { en: 'an election cycle', zh: '選舉週期' },
            { en: 'short-term thinking', zh: '短線思維' },
            { en: 'the urgent always wins', zh: '緊急的總是勝出' },
            { en: 'visible failures, invisible successes', zh: '失敗很顯眼，成功看不見' },
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
            { en: 'No party, no current leader, no domestic dispute', zh: '沒有提到政黨、現任領導人或國內爭議' },
            { en: 'A structural explanation rather than a complaint', zh: '給的是結構性解釋，而不是抱怨' },
            { en: 'A choice made about where money or power should sit', zh: '對錢或權力該放在哪裡做了選擇' },
            { en: 'Two phrases from that question’s own list', zh: '該題用語清單中的兩個片語' },
            { en: 'A conclusion in one sentence', zh: '一句話的結論' },
          ],
        },
      ],
    },
  ],
};
