/* Grammar Practice — 過去時間 Past Time.

   Five points, in the order and in the exercise formats of the Past Time
   chapter of the Azar–Hagen workbook that Lewis works from (its Practices 7
   to 30). NOTHING HERE IS THE BOOK'S: every sentence, dialogue, story and
   table was written for this page and set in adult working life in Taiwan.
   When adding to a set, write a new sentence — do not type one in from the
   workbook. See content.js for the block types and the {{blank}} syntax.

     01 過去簡單式      questions and short answers · irregular verbs ·
                        a conversation · negatives
     02 -ing 和 -ed     the spelling table · a story · three tenses
     03 過去進行式      forms · a word box · two actions · matching · choosing
     04 時間子句        combining sentences · used to
     05 總複習          find and fix · a story · multiple choice
*/

(() => {
  const group = { zh: '過去時間', en: 'Past Time' };

  GP.points.push(

    // ================================================================ 01
    {
      id: 'past-simple',
      group,
      zh: '過去簡單式',
      en: 'The simple past',
      sub: '問句、簡答、否定，還有不規則動詞',
      icon: '🕰',

      lead: {
        en: 'A finished event takes the past form — everyone knows that. The slips come in questions and negatives: the moment “did” appears, the main verb goes back to its base form.',
        zh: '已經結束的事，動詞用過去式——這一點大家都知道。真正容易錯的是問句和否定：did 一出現，後面的動詞就要「打回原形」。',
      },

      parts: [
        {
          id: 'ps-recap',
          zh: '重點整理',
          en: 'The point in brief',
          blocks: [
            {
              t: 'rule',
              en: 'Questions and negatives use did / didn’t + the base form: “Did you go?” “I didn’t go.”',
              zh: '問句和否定用 did / didn’t，後面接原形動詞：Did you go?／I didn’t go.',
            },
            {
              t: 'rule',
              en: 'Be makes its own questions and negatives, with no “did”: “Were you late?” “I wasn’t late.”',
              zh: 'be 動詞自己就能造問句和否定，不需要 did：Were you late?／I wasn’t late.',
            },
            {
              t: 'pairs',
              en: 'Right and wrong',
              zh: '對與錯',
              items: [
                { ok: true,  text: 'Did you send the file?', zh: '你把檔案寄出去了嗎？' },
                { ok: false, text: 'Did you sent the file?' },
                { ok: true,  text: 'Was the meeting long?', zh: '會議開很久嗎？' },
                { ok: false, text: 'Did the meeting long?' },
              ],
            },
            {
              t: 'note',
              en: 'Short answers',
              zh: '簡答跟著問句走',
              bodyEn: 'A short answer repeats the helper the question began with. A “Did …?” question is answered with did or didn’t; a “Was …?” or “Were …?” question with was or were.',
              bodyZh: '簡答要重複問句開頭的那個字。Did 開頭的問句用 did／didn’t 回答；Was／Were 開頭的問句用 was／were 回答。',
              good: [
                'Did you call the client? — Yes, I did.',
                'Were they on time? — No, they weren’t.',
              ],
            },
          ],
        },

        {
          id: 'ps-questions',
          zh: '問句與簡答',
          en: 'Questions and short answers',
          blocks: [
            {
              t: 'blanks',
              en: 'Back from a business trip',
              zh: '出差回來',
              hintZh: '用斜體的提示字造出問句，再寫簡答。每組都多給了一兩個用不到的字，有些字會用到不只一次。問句的第一個字要大寫。打完按 Enter，或按下面的「檢查」。',
              hintEn: 'Make the question from the words given, then the short answer. Each list has one or two words you will not need. Start the question with a capital. Press Enter, or Check below.',
              items: [
                {
                  pool: ['did', 'was', 'you', 'catch'],
                  text: ['A: {{Did you catch}} your flight on time?', 'B: Yes, {{I did}}.'],
                  zh: 'A：你有準時趕上班機嗎？　B：有。',
                },
                {
                  pool: ['were', 'did', 'you', 'be'],
                  text: ['A: {{Were you}} tired after the flight?', 'B: No, {{I wasn’t|I was not}}.'],
                  zh: 'A：下飛機之後你很累嗎？　B：不會。',
                  why: { zh: 'tired 是形容詞，前面要的是 be 動詞，所以用 Were you，不用 did。', en: '“Tired” is an adjective, so the question needs be: “Were you”, with no “did”.' },
                },
                {
                  pool: ['was', 'did', 'the hotel', 'be'],
                  text: ['A: {{Was the hotel}} close to the client’s office?', 'B: Yes, {{it was}}.'],
                  zh: 'A：飯店離客戶的辦公室近嗎？　B：很近。',
                },
                {
                  pool: ['did', 'were', 'you', 'meet', 'met'],
                  text: ['A: {{Did you meet}} the new purchasing manager?', 'B: No, {{I didn’t|I did not}}.'],
                  zh: 'A：你有見到新的採購經理嗎？　B：沒有。',
                  why: { zh: 'did 後面接原形 meet，不是 met。', en: 'After “did”, the base form: “meet”, not “met”.' },
                },
                {
                  pool: ['were', 'did', 'the clients', 'was'],
                  text: ['A: {{Were the clients}} happy with the samples?', 'B: Yes, {{they were}}.'],
                  zh: 'A：客戶對樣品滿意嗎？　B：滿意。',
                },
                {
                  pool: ['did', 'you', 'bring', 'brought', 'were'],
                  text: ['A: {{Did you bring}} any souvenirs back for us?', 'B: Yes, {{I did}}!'],
                  zh: 'A：你有帶伴手禮回來給我們嗎？　B：有！',
                },
              ],
            },
          ],
        },

        {
          id: 'ps-irregular',
          zh: '不規則動詞',
          en: 'Irregular verbs',
          blocks: [
            {
              t: 'blanks',
              en: 'Common irregular verbs',
              zh: '常見的不規則動詞',
              hintZh: 'A 的問句裡有一個粗體動詞。把它的過去式填進 B 的回答。',
              hintEn: 'A’s question has a verb in bold. Put its past form into B’s answer.',
              items: [
                {
                  text: ['A: Did you **go** to the trade show last week?', 'B: Yes, I did. I {{went}} on Thursday.'],
                  zh: 'A：你上週有去看展嗎？　B：有，我星期四去的。',
                },
                {
                  text: ['A: You look worried. Did you **lose** something?', 'B: Yes. I {{lost}} my EasyCard on the MRT this morning.'],
                  zh: 'A：你看起來很擔心，掉了什麼東西嗎？　B：對，我今天早上在捷運上掉了悠遊卡。',
                },
                {
                  text: ['A: Did you **buy** a new laptop?', 'B: Yes. I {{bought}} one online during the Double 11 sale.'],
                  zh: 'A：你買新筆電了嗎？　B：買了，雙 11 特賣的時候在網路上買的。',
                },
                {
                  text: ['A: Did you **send** the quotation?', 'B: Yes, I did. I {{sent}} it before lunch.'],
                  zh: 'A：報價單寄了嗎？　B：寄了，午餐前寄的。',
                },
                {
                  text: ['A: Did the client **pay** the invoice?', 'B: Yes. They {{paid}} it last Friday.'],
                  zh: 'A：客戶付款了嗎？　B：付了，上週五付的。',
                  why: { zh: 'pay 的過去式是 paid，不是 payed。', en: 'The past of “pay” is “paid”, not “payed”.' },
                },
                {
                  text: ['A: Did you **read** my email?', 'B: Yes. I {{read}} it on the bus this morning.'],
                  zh: 'A：你看了我的 email 嗎？　B：看了，今天早上在公車上看的。',
                  why: { zh: 'read 的過去式拼法不變，但發音變了：唸成 /rɛd/，和 red 一樣。', en: 'The past of “read” is spelled the same but said like “red”.' },
                },
                {
                  text: ['A: Did you **take** the High Speed Rail?', 'B: No. I {{took}} a bus because the tickets were sold out.'],
                  zh: 'A：你搭高鐵去的嗎？　B：不是，票賣完了，所以我搭客運。',
                },
                {
                  text: ['A: Did you **forget** your badge again?', 'B: Yes. I {{forgot}} it at home.'],
                  zh: 'A：你又忘了帶識別證嗎？　B：對，我忘在家裡了。',
                },
                {
                  text: ['A: Did anyone **tell** you about the schedule change?', 'B: Yes. Mia {{told}} me this morning.'],
                  zh: 'A：有人跟你說時程改了嗎？　B：有，Mia 今天早上跟我說了。',
                },
                {
                  text: ['A: Did we **spend** the whole budget?', 'B: Almost. We {{spent}} about ninety percent of it.'],
                  zh: 'A：我們把預算花完了嗎？　B：差不多，花了大約九成。',
                },
              ],
            },
          ],
        },

        {
          id: 'ps-talk',
          zh: '對話填空',
          en: 'A conversation in the past',
          blocks: [
            {
              t: 'cloze',
              en: 'The morning of the product launch',
              zh: '產品發表會那天早上',
              hintZh: '用括號裡的字，填入正確的形式。有肯定句、否定句，也有問句。打完一格按 Enter，會自動跳到下一格。',
              hintEn: 'Use the words in brackets in the right form — statements, negatives and questions. Enter checks a blank and moves to the next.',
              lines: [
                { who: 'A', text: '{{Were you}} (you, be) at the product launch yesterday? I {{didn’t see|did not see}} (not, see) you.', zh: '你昨天有去產品發表會嗎？我沒看到你。' },
                { who: 'B', text: 'I {{was}} (be) there, but only for the last ten minutes. I {{had}} (have) a terrible morning.', zh: '我有去，但只趕上最後十分鐘。我那天早上超慘。' },
                { who: 'A', text: 'What {{happened}} (happen)?', zh: '發生什麼事了？' },
                { who: 'B', text: 'First, my scooter {{didn’t start|did not start}} (not, start), so I {{took}} (take) the MRT. Then I {{got}} (get) on the wrong line.', zh: '先是機車發不動，所以我改搭捷運。結果又搭錯線。' },
                { who: 'A', text: 'Oh no. {{Did you call}} (you, call) the manager?', zh: '天啊。你有打給經理嗎？' },
                { who: 'B', text: 'Yes, I {{did}} (do). But she {{didn’t answer|did not answer}} (not, answer). She {{was}} (be) already on stage.', zh: '有。但她沒接，她已經在台上了。' },
                { who: 'A', text: 'So what {{did you do}} (you, do)?', zh: '那你怎麼辦？' },
                { who: 'B', text: 'I {{ran}} (run) from the station to the hotel. I {{arrived}} (arrive) just before the Q&A.', zh: '我從捷運站一路跑到飯店，剛好在問答時間之前到。' },
                { who: 'A', text: '{{Was the manager}} (the manager, be) angry?', zh: '經理有生氣嗎？' },
                { who: 'B', text: 'No, she {{wasn’t|was not}} (not, be). She just {{laughed}} (laugh) and {{said}} (say), “Buy a new scooter.”', zh: '沒有。她只是笑了笑，說：「去買台新機車吧。」' },
              ],
            },
          ],
        },

        {
          id: 'ps-negative',
          zh: '否定與更正',
          en: 'Negatives, present and past',
          blocks: [
            {
              t: 'blanks',
              en: 'That’s not right',
              zh: '這句話不對',
              hintZh: '每題上面那句話的內容是錯的。先寫出否定句，再用正確的資訊寫肯定句。先看清楚原句是現在式還是過去式。',
              hintEn: 'The sentence above each card is untrue. Make it negative, then give the true statement. Check first whether it is present or past.',
              items: [
                {
                  from: 'Taipei 101 opened in 1994.',
                  text: 'No, it {{didn’t open|did not open}} in 1994. It {{opened}} in 2004.',
                  zh: '不對，它不是 1994 年開幕的，是 2004 年。',
                },
                {
                  from: 'The High Speed Rail goes to Hualien.',
                  text: 'No, it {{doesn’t go|does not go}} to Hualien. It {{goes}} down the west coast.',
                  zh: '不對，高鐵沒有到花蓮，它走的是西部。',
                  why: { zh: '原句是現在式（goes），所以否定用 doesn’t，不是 didn’t。', en: 'The statement is in the present (“goes”), so the negative is “doesn’t”, not “didn’t”.' },
                },
                {
                  from: 'Bubble tea came from Japan.',
                  text: 'No, bubble tea {{didn’t come|did not come}} from Japan. It {{came}} from Taiwan.',
                  zh: '不對，珍珠奶茶不是來自日本，是來自台灣。',
                },
                {
                  from: 'The 2020 Olympics were in Taipei.',
                  text: 'No, they {{weren’t|were not}} in Taipei. They {{were}} in Tokyo.',
                  zh: '不對，2020 奧運不是在台北，是在東京。',
                  why: { zh: 'be 動詞的否定直接加 not（weren’t），不用 didn’t。', en: 'Be takes “not” directly — “weren’t” — with no “didn’t”.' },
                },
                {
                  from: 'Steve Jobs started Microsoft.',
                  text: 'No, he {{didn’t start|did not start}} Microsoft. He {{started}} Apple.',
                  zh: '不對，他創辦的不是微軟，是蘋果。',
                },
                {
                  from: 'People in Taiwan drive on the left.',
                  text: 'No, they {{don’t drive|do not drive}} on the left. They {{drive}} on the right.',
                  zh: '不對，台灣不是靠左行駛，是靠右。',
                },
                {
                  from: 'Edison invented the telephone.',
                  text: 'No, Edison {{didn’t invent|did not invent}} the telephone. Bell {{invented}} it.',
                  zh: '不對，電話不是愛迪生發明的，是貝爾。',
                },
                {
                  from: 'Water freezes at 10°C.',
                  text: 'No, water {{doesn’t freeze|does not freeze}} at 10°C. It {{freezes}} at 0°C.',
                  zh: '不對，水不是在 10°C 結冰，是在 0°C。',
                },
              ],
            },
          ],
        },
      ],
    },

    // ================================================================ 02
    {
      id: 'spelling',
      group,
      zh: '-ing 和 -ed 的拼法',
      en: 'Spelling -ing and -ed',
      sub: '什麼時候去 e、什麼時候重複子音、y 什麼時候變 i',
      icon: '✏️',

      lead: {
        en: 'Adding -ing or -ed looks like a small thing, but “writting”, “stoped” and “studing” are the kind of mistake that is seen at a glance in an email. There are only a few rules.',
        zh: '加 -ing、加 -ed 看起來是小事，但 writting、stoped、studing 這種拼錯，在 email 裡一眼就會被看到。規則其實只有幾條。',
      },

      parts: [
        {
          id: 'sp-recap',
          zh: '重點整理',
          en: 'The point in brief',
          blocks: [
            {
              t: 'rule',
              en: 'Ends in -e: drop the e before -ing (make → making); add only -d (close → closed).',
              zh: '字尾是 -e：加 -ing 要先去 e（make → making）；加 -ed 只加 d（close → closed）。',
            },
            {
              t: 'rule',
              en: 'Ends in one vowel + one consonant, with the stress on that last syllable: double the consonant (plan → planning, planned; prefer → preferring, preferred). Stress earlier in the word: no doubling (visit → visiting, visited).',
              zh: '字尾是「一個母音＋一個子音」，而且重音就在最後這個音節：重複子音（plan → planning、planned；prefer → preferring、preferred）。重音在前面就不重複（visit → visiting、visited）。',
            },
            {
              t: 'rule',
              en: 'Ends in consonant + y: y becomes i before -ed (study → studied) but stays before -ing (studying). Vowel + y: nothing changes (play → played).',
              zh: '字尾是「子音＋y」：加 -ed 時 y 變 i（study → studied），加 -ing 時不變（studying）。「母音＋y」什麼都不變（play → played）。',
            },
            {
              t: 'note',
              en: 'Two small ones',
              zh: '還有兩個小規則',
              bodyEn: 'Verbs in -ie change it to -y before -ing: tie → tying. And w, x and y are never doubled: fix → fixed, show → showing.',
              bodyZh: '字尾是 -ie 的動詞，加 -ing 時 ie 變 y：tie → tying。另外 w、x、y 永遠不重複：fix → fixed、show → showing。',
            },
          ],
        },

        {
          id: 'sp-table',
          zh: '拼字表',
          en: 'The spelling table',
          blocks: [
            {
              t: 'table',
              en: 'Complete the table',
              zh: '完成表格',
              hintZh: '第一列是範例。每一類先選「要不要重複子音」，再把 -ing 和 -ed 兩種形式拼出來。手機上表格可以左右滑動。',
              hintEn: 'The first row is done for you. For each kind of ending, decide whether the consonant doubles, then spell both forms. On a phone the table scrolls sideways.',
              head: ['字尾', '重複子音？', '原形', '-ing', '-ed'],
              rows: [
                { group: true, label: 'use',    cells: ['-e', '不重複', 'use', 'using', 'used'] },
                {              label: 'close',  cells: ['', '', 'close', '{{closing}}', '{{closed}}'] },
                { group: true, label: 'ask',    cells: ['兩個子音', '[[重複|不重複*]]', 'ask', '{{asking}}', '{{asked}}'] },
                {              label: 'print',  cells: ['', '', 'print', '{{printing}}', '{{printed}}'] },
                { group: true, label: 'clean',  cells: ['兩母音＋一子音', '[[重複|不重複*]]', 'clean', '{{cleaning}}', '{{cleaned}}'] },
                {              label: 'join',   cells: ['', '', 'join', '{{joining}}', '{{joined}}'] },
                { group: true, label: 'plan',   cells: ['一母音＋一子音 · 單音節', '[[重複*|不重複]]', 'plan', '{{planning}}', '{{planned}}'] },
                {              label: 'stop',   cells: ['', '', 'stop', '{{stopping}}', '{{stopped}}'] },
                { group: true, label: 'visit',  cells: ['⋯ 雙音節，重音在前', '[[重複|不重複*]]', 'visit', '{{visiting}}', '{{visited}}'] },
                {              label: 'open',   cells: ['', '', 'open', '{{opening}}', '{{opened}}'] },
                { group: true, label: 'prefer', cells: ['⋯ 雙音節，重音在後', '[[重複*|不重複]]', 'prefer', '{{preferring}}', '{{preferred}}'] },
                {              label: 'admit',  cells: ['', '', 'admit', '{{admitting}}', '{{admitted}}'] },
                { group: true, label: 'enjoy',  cells: ['-y', '[[重複|不重複*]]', 'enjoy', '{{enjoying}}', '{{enjoyed}}'] },
                {              label: 'apply',  cells: ['', '', 'apply', '{{applying}}', '{{applied}}'] },
                {              label: 'carry',  cells: ['', '', 'carry', '{{carrying}}', '{{carried}}'] },
                { group: true, label: 'lie',    cells: ['-ie', '[[重複|不重複*]]', 'lie', '{{lying}}', '{{lied}}'] },
                {              label: 'die',    cells: ['', '', 'die', '{{dying}}', '{{died}}'] },
              ],
            },
          ],
        },

        {
          id: 'sp-story',
          zh: '短文填空',
          en: 'A story in the simple past',
          blocks: [
            {
              t: 'cloze',
              en: 'The year-end party',
              zh: '尾牙',
              hintZh: '把括號裡的動詞改成過去簡單式。這裡全部是規則動詞——考的是拼字。',
              hintEn: 'Write the simple past of the verb in brackets. They are all regular: this one is about spelling.',
              lines: [
                {
                  text: 'Last Friday our company {{hosted}} (host) its year-end party at a hotel in Taichung. Everyone {{arrived}} (arrive) before six. The CEO {{opened}} (open) the evening with a short speech and {{thanked}} (thank) the whole team. Then the sales team {{danced}} (dance) on stage, and the audience {{clapped}} (clap) and {{cheered}} (cheer).',
                  zh: '上週五，公司在台中一家飯店辦了尾牙。大家六點前就到了。執行長用一段簡短的致詞開場，感謝整個團隊。接著業務部上台跳舞，台下又是鼓掌又是歡呼。',
                },
                {
                  text: 'After dinner, the lucky draw {{started}} (start). Everybody {{hoped}} (hope) for the first prize, a new scooter. Nobody {{expected}} (expect) the winner: an engineer in his second week at the company. He {{jumped}} (jump) out of his seat and {{hugged}} (hug) his manager.',
                  zh: '晚餐後開始抽獎。每個人都希望抽中頭獎——一台新機車。沒有人料到得主是誰：一位才進公司第二週的工程師。他從座位上跳起來，抱住他的主管。',
                },
                {
                  text: 'A few people {{stayed}} (stay) until midnight and {{regretted}} (regret) it the next morning. But we all {{enjoyed}} (enjoy) the night.',
                  zh: '有幾個人待到半夜，隔天早上就後悔了。不過那天晚上大家都玩得很開心。',
                },
              ],
            },
          ],
        },

        {
          id: 'sp-three',
          zh: '三種時態對照',
          en: 'Every day, now, yesterday',
          blocks: [
            {
              t: 'table',
              en: 'Three forms of one verb',
              zh: '同一個動詞的三種形式',
              numbered: true,
              hintZh: '每一列有一格已經寫好（粗體）。用同一個動詞，把另外兩格填成正確的形式。',
              hintEn: 'One cell in each row is given, in bold. Use the same verb to complete the other two.',
              head: ['每天 Every day', '現在 Now', '昨天 Yesterday'],
              rows: [
                ['I **work** from home.', 'I {{am working}} from home.', 'I {{worked}} from home.'],
                ['She {{writes}} reports.', 'She **is writing** reports.', 'She {{wrote}} reports.'],
                ['We {{have}} a meeting.', 'We {{are having}} a meeting.', 'We **had** a meeting.'],
                ['He **drives** to work.', 'He {{is driving}} to work.', 'He {{drove}} to work.'],
                ['They {{plan}} the schedule.', 'They **are planning** the schedule.', 'They {{planned}} the schedule.'],
                ['You {{take}} notes.', 'You {{are taking}} notes.', 'You **took** notes.'],
                ['It **is** busy.', 'It {{is}} busy.', 'It {{was}} busy.'],
                ['She {{studies}} Japanese.', 'She **is studying** Japanese.', 'She {{studied}} Japanese.'],
                ['I {{run}} in the park.', 'I {{am running}} in the park.', 'I **ran** in the park.'],
                ['He **pays** the bills.', 'He {{is paying}} the bills.', 'He {{paid}} the bills.'],
              ],
            },
          ],
        },
      ],
    },

    // ================================================================ 03
    {
      id: 'past-progressive',
      group,
      zh: '過去進行式',
      en: 'The past progressive',
      sub: 'was / were doing，以及它和過去簡單式怎麼搭配',
      icon: '🎞',

      lead: {
        en: 'The past progressive says that at some moment in the past, something was halfway through. It rarely stands alone: it is usually the background to something else. I was in the middle of a meeting — and the phone rang.',
        zh: '過去進行式講的是「過去某個時間點，事情正進行到一半」。它很少單獨出現，通常是替另一件事當背景：我會開到一半——電話響了。',
      },

      parts: [
        {
          id: 'pg-recap',
          zh: '重點整理',
          en: 'The point in brief',
          blocks: [
            {
              t: 'rule',
              en: 'was / were + -ing: something in progress at a moment in the past. “At three yesterday I was having a meeting.”',
              zh: 'was / were + V-ing：過去某個時間點正在進行的事。At three yesterday I was having a meeting.',
            },
            {
              t: 'rule',
              en: 'One action is in progress (past progressive) when another cuts in (simple past). “While” usually introduces the one in progress; “when” usually introduces the one that cuts in.',
              zh: '一個動作進行到一半（過去進行式），另一個動作插進來（過去簡單式）。while 後面通常接「進行中」的那一個，when 後面通常接「插進來」的那一個。',
            },
            {
              t: 'cols',
              en: 'The same “when”, two different stories',
              zh: '同樣是 when，意思差很多',
              cols: [
                {
                  zh: '過去簡單式',
                  form: 'did',
                  note: '一前一後的兩件事',
                  eg: 'When the phone rang, I answered it.',
                  egZh: '電話響了，我就接起來。（先響，後接）',
                },
                {
                  zh: '過去進行式',
                  form: 'was doing',
                  note: '當時正進行到一半',
                  eg: 'When the phone rang, I was having lunch.',
                  egZh: '電話響的時候，我正在吃午餐。（響之前就在吃了）',
                },
              ],
            },
            {
              t: 'note',
              en: 'Verbs that do not take -ing',
              zh: '狀態動詞不用進行式',
              bodyEn: 'Know, want, need, understand, like, believe and hear describe a state, not an activity, so they stay in the simple past even when the “background” feeling is strong.',
              bodyZh: 'know、want、need、understand、like、believe、hear 描述的是狀態，不是正在做的動作，所以就算聽起來像「當時正在…」，也還是用過去簡單式。',
              good: ['I didn’t understand the question.', 'She wanted to say something.'],
              bad: ['I wasn’t understanding the question.'],
            },
          ],
        },

        {
          id: 'pg-form',
          zh: '形式',
          en: 'Making the past progressive',
          blocks: [
            {
              t: 'blanks',
              en: 'From the bold verb to was / were -ing',
              zh: '把粗體的動詞改成過去進行式',
              hintZh: '每題的第一句有一個粗體動詞。用同一個動詞的過去進行式完成第二句。有的是問句，有的是否定句。',
              hintEn: 'The first sentence has a verb in bold. Complete the second with the past progressive of the same verb — some are questions, some negatives.',
              items: [
                {
                  text: 'I **am working** from home today. At this time last week, I {{was working}} in the Kaohsiung office.',
                  zh: '我今天在家工作。上週的這個時候，我在高雄辦公室上班。',
                },
                {
                  text: 'What **did** you **do** after the meeting? What {{were}} you {{doing}} at four o’clock?',
                  zh: '會議結束後你做了什麼？四點的時候你在做什麼？',
                },
                {
                  text: 'The engineers **are testing** the new version now. They {{were testing}} the old one all last month.',
                  zh: '工程師現在在測試新版本。上個月整個月，他們都在測試舊版。',
                },
                {
                  text: 'Mia **works** late every day. She {{was working}} until ten last night.',
                  zh: 'Mia 每天都加班。她昨晚一直工作到十點。',
                },
                {
                  text: '**Did** you **wait** long? {{Were}} you {{waiting}} outside when I texted you?',
                  zh: '你等很久嗎？我傳訊息給你的時候，你是在外面等嗎？',
                },
                {
                  text: '**Does** Jason **teach** the training course? {{Was}} he {{teaching}} it at ten this morning?',
                  zh: '訓練課程是 Jason 教的嗎？今天早上十點是他在上課嗎？',
                },
                {
                  text: 'The air conditioner **isn’t working** today, and it {{wasn’t working|was not working}} yesterday afternoon either.',
                  zh: '冷氣今天不能用，昨天下午也不能用。',
                },
                {
                  text: 'My team **isn’t using** the meeting room right now, but we {{were using}} it all morning.',
                  zh: '我們組現在沒在用會議室，不過整個早上都在用。',
                },
              ],
            },
          ],
        },

        {
          id: 'pg-box',
          zh: '用字庫完成句子',
          en: 'Verbs from the box',
          blocks: [
            {
              t: 'blanks',
              en: 'What was going on',
              zh: '當時正在發生的事',
              pool: ['wait', 'type', 'talk', 'charge', 'run', 'set', 'check'],
              hintZh: '從字庫選動詞，改成過去進行式填進去。每個動詞只用一次。注意主詞是單數還是複數，還有 -ing 的拼法。',
              hintEn: 'Choose a verb from the box and write it in the past progressive. Each verb is used once. Watch the subject, and the spelling of -ing.',
              items: [
                {
                  text: 'When I got to the lobby at nine, the client {{was waiting}} by the front desk.',
                  zh: '我九點到大廳的時候，客戶已經在櫃台旁邊等了。',
                },
                {
                  text: 'Sorry, I didn’t hear you come in. I {{was typing}} with my headphones on.',
                  zh: '抱歉，我沒聽到你進來。我那時戴著耳機在打字。',
                },
                {
                  text: 'While we {{were talking}} about the budget, the fire drill started.',
                  zh: '我們正在談預算的時候，消防演習開始了。',
                },
                {
                  text: 'I couldn’t call you back right away. My phone {{was charging}} in another room.',
                  zh: '我沒辦法馬上回電。我的手機在另一個房間充電。',
                },
                {
                  text: 'It was 8:55 and the room was almost ready. The projector {{was running}}, two colleagues {{were setting}} up the microphones, and the speaker {{was checking}} her slides one last time.',
                  zh: '八點五十五分，會議室差不多準備好了。投影機開著，兩位同事在架麥克風，講者在做最後一次的投影片檢查。',
                  why: { zh: 'run 和 set 都是「一個母音＋一個子音」的單音節動詞，加 -ing 要重複子音：running、setting。', en: '“Run” and “set” end in one vowel + one consonant, so the consonant doubles: running, setting.' },
                },
              ],
            },
          ],
        },

        {
          id: 'pg-two',
          zh: '進行中的事，插進來的事',
          en: 'In progress, and what cut in',
          blocks: [
            {
              t: 'table',
              en: 'What happened to whom',
              zh: '誰發生了什麼事',
              head: ['正在進行的事', 'Amy', 'Ben', 'Carol'],
              rows: [
                ['present the slides', 'drop the remote', 'notice a typo', 'lose her voice'],
                ['ride to work', 'get a flat tire', 'see an accident', 'get caught in the rain'],
                ['cook dinner', 'cut her finger', 'burn the rice', 'get a call from her boss'],
              ],
            },
            {
              t: 'blanks',
              en: 'One clause in each tense',
              zh: '一句用進行式，一句用簡單式',
              hintZh: '看上面的表格完成句子。「進行到一半」的那件事用過去進行式，「插進來」的那件事用過去簡單式。',
              hintEn: 'Use the table above. The activity in progress takes the past progressive; the thing that happened in the middle of it takes the simple past.',
              items: [
                { text: 'While Amy {{was presenting}} the slides, she {{dropped}} the remote.', zh: 'Amy 在報告投影片的時候，把遙控器掉在地上。' },
                { text: 'Ben {{noticed}} a typo while he {{was presenting}} the slides.', zh: 'Ben 在報告投影片的時候，發現了一個錯字。' },
                { text: 'Carol {{lost}} her voice while she {{was presenting}} the slides.', zh: 'Carol 在報告投影片的時候，聲音啞掉了。' },
                { text: 'While Amy {{was riding}} to work, she {{got}} a flat tire.', zh: 'Amy 騎車上班的途中爆胎了。' },
                { text: 'Ben {{saw}} an accident while he {{was riding}} to work.', zh: 'Ben 騎車上班的途中看到一場車禍。' },
                { text: 'While Carol {{was riding}} to work, she {{got}} caught in the rain.', zh: 'Carol 騎車上班的途中淋到雨。' },
                { text: 'Amy {{cut}} her finger while she {{was cooking}} dinner.', zh: 'Amy 煮晚餐的時候切到手指。' },
                { text: 'While Ben {{was cooking}} dinner, he {{burned|burnt}} the rice.', zh: 'Ben 煮晚餐的時候把飯煮焦了。' },
                { text: 'Carol {{got}} a call from her boss while she {{was cooking}} dinner.', zh: 'Carol 煮晚餐的時候接到老闆的電話。' },
              ],
            },
          ],
        },

        {
          id: 'pg-match',
          zh: '配對',
          en: 'Match the two halves',
          blocks: [
            {
              t: 'match',
              en: 'Which half fits?',
              zh: '哪一句接得上？',
              hintZh: '看清楚 when 和 while，再看後面那句話，選出接得上的子句。每個選項用一次。',
              hintEn: 'Look at “when” or “while”, and at the sentence that follows, then choose the clause that fits. Each one is used once.',
              options: [
                'the projector stopped working',
                'everyone was already sitting at the table',
                'she thanked everyone and closed her laptop',
                'the rest of us were taking notes',
                'it was raining so hard that I could hardly see the road',
                'I turned around and went home',
              ],
              items: [
                {
                  text: 'When I walked into the meeting room at 9:02, ___. I was the last one.',
                  answer: 1,
                  zh: '我九點零二分走進會議室的時候，大家都已經坐在桌邊了。我是最後一個到的。',
                  why: { zh: '我走進去的那一刻，大家「已經坐著」——是當時的狀態，用過去進行式。', en: 'At the moment I walked in they were already seated — a scene in progress, so the past progressive.' },
                },
                {
                  text: 'While the director was explaining the new targets, ___. Nobody wanted to miss a number.',
                  answer: 3,
                  zh: '總監在說明新目標的時候，我們其他人都在做筆記。沒有人想漏掉任何一個數字。',
                  why: { zh: '兩件事同時進行：他在說明，我們在做筆記。兩邊都用過去進行式。', en: 'Two things going on at once — he was explaining, we were taking notes — so both are progressive.' },
                },
                {
                  text: 'While she was showing the last slide, ___. The screen went black.',
                  answer: 0,
                  zh: '她正在放最後一張投影片的時候，投影機壞了。螢幕整個變黑。',
                  why: { zh: '「放投影片」進行到一半，「投影機壞掉」插進來——插進來的事用過去簡單式。', en: 'Showing the slide was in progress; the projector failing cut in — simple past.' },
                },
                {
                  text: 'When the meeting ended, ___.',
                  answer: 2,
                  zh: '會議結束後，她謝謝大家，然後把筆電合上。',
                  why: { zh: '一件事接著一件事：會議結束，她道謝、合上筆電。全部用過去簡單式。', en: 'One thing after another: the meeting ended, then she thanked everyone. All simple past.' },
                },
                {
                  text: 'While I was riding to the office this morning, ___.',
                  answer: 4,
                  zh: '今天早上我騎車去公司的時候，雨大到我幾乎看不到路。',
                },
                {
                  text: 'When I heard that the office was closed for the typhoon, ___.',
                  answer: 5,
                  zh: '我一聽到公司因為颱風停班，就掉頭回家了。',
                },
              ],
            },
          ],
        },

        {
          id: 'pg-pick',
          zh: '二選一',
          en: 'Choose the right form',
          blocks: [
            {
              t: 'blanks',
              en: 'Simple past or past progressive?',
              zh: '過去簡單式，還是過去進行式？',
              hintZh: '每一組選出正確的那一個。選錯了會被劃掉，再選另一個就好。',
              hintEn: 'Choose the right one in each pair. A wrong choice is crossed out; choose again.',
              items: [
                {
                  text: 'It started to rain while we [[were waiting*|waited]] for the shuttle bus.',
                  zh: '我們在等接駁車的時候，開始下雨了。',
                },
                {
                  text: 'While I [[was copying*|copied]] the files, my laptop [[was crashing|crashed*]]. I [[was losing|lost*]] an hour of work.',
                  zh: '我正在複製檔案的時候，筆電當機了。我一個小時的工作全沒了。',
                  why: { zh: '「複製檔案」是進行到一半的背景；「當機」和「損失」是一下子就發生的事。', en: 'Copying was in progress; the crash and the loss each happened in an instant.' },
                },
                {
                  text: 'I [[was seeing|saw*]] Joanne in the lobby this morning. She [[was talking*|talked]] to a client, so I [[wasn’t wanting|didn’t want*]] to interrupt.',
                  zh: '我今天早上在大廳看到 Joanne。她正在跟客戶講話，所以我不想打斷她。',
                  why: { zh: 'see 和 want 在這裡是狀態動詞，不用進行式。', en: '“See” and “want” are state verbs here, so no -ing.' },
                },
                {
                  text: 'The courier rang the bell three times. We [[were having*|had]] our weekly meeting, and nobody [[was noticing|noticed*]].',
                  zh: '快遞按了三次門鈴。我們正在開週會，沒有人注意到。',
                },
                {
                  text: [
                    'A: The internet went down yesterday afternoon. [[Were you losing|Did you lose*]] your connection too?',
                    'B: Yes, I did. I [[was uploading*|uploaded]] a big file when it happened, so I [[was starting|started*]] again from zero.',
                  ],
                  zh: 'A：昨天下午網路斷了。你那邊也斷線了嗎？　B：對。斷線的時候我正在上傳一個大檔案，所以只好從頭再來。',
                },
              ],
            },
          ],
        },
      ],
    },

    // ================================================================ 04
    {
      id: 'time-clauses',
      group,
      zh: '時間子句與 used to',
      en: 'Time clauses and used to',
      sub: 'when、after、before、until、as soon as，還有「以前常常」',
      icon: '⏱',

      lead: {
        en: 'Two things happened in the past — which came first? English does not line them up with “and then”. It joins them into one sentence with when, after, before, until or as soon as. And “used to” is for what was true once and is not any more.',
        zh: '兩件過去的事，誰先誰後？英文不是用「然後」一路排下去，而是用 when、after、before、until、as soon as 把兩句接成一句。used to 則是講「以前是這樣，現在不是了」。',
      },

      parts: [
        {
          id: 'tc-recap',
          zh: '重點整理',
          en: 'The point in brief',
          blocks: [
            {
              t: 'rule',
              en: 'A time clause can go first or second. First, it takes a comma; second, it does not.',
              zh: '時間子句可以放前面，也可以放後面。放前面要加逗號；放後面不加。',
            },
            {
              t: 'note',
              en: 'Which word, which order',
              zh: '哪個字，哪個順序',
              bodyEn: 'After + the earlier event. Before + the later event. As soon as: the second thing followed at once. Until: the first thing continued up to that point.',
              bodyZh: 'after 後面接「先發生」的事；before 後面接「後發生」的事。as soon as 是「一⋯就⋯」；until 是「一直⋯到⋯為止」。',
              good: [
                'After I sent the email, I noticed the typo.',
                'I checked the numbers twice before I sent the report.',
                'As soon as the meeting ended, everyone checked their phones.',
                'We stayed in the office until the rain stopped.',
              ],
            },
            {
              t: 'rule',
              en: 'used to + base form: a habit or a state in the past that is no longer true. Negative: didn’t use to.',
              zh: 'used to + 原形動詞：過去的習慣或狀態，現在已經不是了。否定是 didn’t use to。',
            },
            {
              t: 'pairs',
              en: 'Right and wrong',
              zh: '對與錯',
              items: [
                { ok: true,  text: 'I used to work in Hsinchu.', zh: '我以前在新竹工作。' },
                { ok: false, text: 'I used to working in Hsinchu.' },
                { ok: true,  text: 'We didn’t use to have meetings on Fridays.', zh: '我們以前星期五不開會。' },
              ],
            },
          ],
        },

        {
          id: 'tc-combine',
          zh: '合併句子',
          en: 'Combine the sentences',
          blocks: [
            {
              t: 'rewrite',
              en: 'First this, then that',
              zh: '先想清楚誰先誰後',
              hintZh: '先判斷哪件事先發生，再用提示的字把兩句合成一句。開頭已經寫好了。注意：題目裡兩句話的順序不一定是發生的順序。',
              hintEn: 'Decide which event came first, then join the two with the word given. The opening is written for you. The sentences are not always given in the order they happened.',
              items: [
                {
                  from: 'The client signed the contract. We opened a bottle of champagne.',
                  cueZh: '用 when',
                  cueEn: 'Use “when”',
                  start: 'When ',
                  answers: ['When the client signed the contract, we opened a bottle of champagne.'],
                  zh: '客戶簽了合約，我們就開了一瓶香檳。',
                  hint: { zh: '先簽約，才開香檳。when 後面接先發生的事。', en: 'The signing came first. Put it after “when”.' },
                  why: { zh: '先簽約，後開香檳。時間子句放前面，所以中間加逗號。', en: 'Signing first, champagne second. The time clause comes first, so it takes a comma.' },
                },
                {
                  from: 'I went home. I finished the report.',
                  cueZh: '用 after',
                  cueEn: 'Use “after”',
                  start: 'After ',
                  answers: ['After I finished the report, I went home.'],
                  zh: '我把報告寫完之後就回家了。',
                  hint: { zh: '哪件事先發生？after 後面接先發生的那一件。', en: 'Which came first? That one follows “after”.' },
                  why: { zh: '先寫完報告，才回家。after 後面接的是「先發生」的事，和題目給的順序相反。', en: 'The report came first, then home. “After” takes the earlier event — the reverse of the order given.' },
                },
                {
                  from: 'Everyone stopped talking. The CEO walked in.',
                  cueZh: '用 as soon as',
                  cueEn: 'Use “as soon as”',
                  start: 'As soon as ',
                  answers: ['As soon as the CEO walked in, everyone stopped talking.'],
                  zh: '執行長一走進來，大家就不講話了。',
                  hint: { zh: '是誰走進來，大家才安靜的？', en: 'What made everyone go quiet?' },
                  why: { zh: '執行長走進來在先，大家安靜在後。as soon as 表示兩件事幾乎沒有間隔。', en: 'The CEO walked in, and at once the room went quiet. “As soon as” means there was no gap.' },
                },
                {
                  from: 'The rain stopped. We waited in the lobby.',
                  cueZh: '用 until',
                  cueEn: 'Use “until”',
                  start: 'We waited ',
                  answers: ['We waited in the lobby until the rain stopped.'],
                  zh: '我們在大廳一直等到雨停。',
                  hint: { zh: 'until 後面接「等到什麼時候為止」。', en: '“Until” is followed by the point where the waiting ended.' },
                  why: { zh: '「等」一直持續，到「雨停」為止。until 後面接的是結束的那個點。', en: 'The waiting went on up to the moment the rain stopped. “Until” introduces that end point.' },
                },
                {
                  from: 'She sent the report. She checked the numbers twice.',
                  cueZh: '用 before',
                  cueEn: 'Use “before”',
                  start: 'Before ',
                  answers: ['Before she sent the report, she checked the numbers twice.'],
                  zh: '她在把報告寄出去之前，把數字檢查了兩遍。',
                  hint: { zh: 'before 後面接「後發生」的事。', en: '“Before” takes the later event.' },
                  why: { zh: '先檢查，後寄出。before 後面接的是「後發生」的那一件。', en: 'Checking first, sending second. “Before” takes the later of the two.' },
                },
                {
                  from: 'I got home. I turned on the air conditioner.',
                  cueZh: '用 as soon as（放中間）',
                  cueEn: 'Use “as soon as”, in the middle',
                  start: 'I turned on ',
                  answers: ['I turned on the air conditioner as soon as I got home.'],
                  zh: '我一到家就開冷氣。',
                  hint: { zh: '時間子句放後面，不用逗號。', en: 'The time clause goes second, with no comma.' },
                  why: { zh: '時間子句放在後面，所以不加逗號。', en: 'The time clause comes second, so there is no comma.' },
                },
                {
                  from: 'The fire drill started. I was writing an email.',
                  cueZh: '用 when（放中間）',
                  cueEn: 'Use “when”, in the middle',
                  start: 'I was writing ',
                  answers: ['I was writing an email when the fire drill started.'],
                  zh: '消防演習開始的時候，我正在寫 email。',
                  hint: { zh: '哪件事是進行到一半的？哪件事是插進來的？', en: 'Which one was in progress, and which one cut in?' },
                  why: { zh: '「寫 email」是進行到一半的事，「演習開始」是插進來的事——when 接插進來的那一個。', en: 'Writing was in progress; the drill cut in. “When” introduces the one that cut in.' },
                },
              ],
            },
          ],
        },

        {
          id: 'tc-used-to',
          zh: 'used to',
          en: 'Used to',
          blocks: [
            {
              t: 'blanks',
              en: 'Then and now',
              zh: '以前和現在',
              hintZh: '看上面那句話，用 used to 完成下面的句子。有些要用否定。',
              hintEn: 'Read the sentence above, then complete the one below with “used to”. Some need the negative.',
              items: [
                {
                  from: 'When Daniel was a student, he lived in Tainan. Now he lives in Taipei.',
                  text: 'Daniel {{used to live}} in Tainan, but now he lives in Taipei.',
                  zh: 'Daniel 以前住台南，但現在住台北。',
                },
                {
                  from: 'Our office had a fax machine for years. We don’t have one any more.',
                  text: 'Our office {{used to have}} a fax machine.',
                  zh: '我們辦公室以前有一台傳真機。',
                },
                {
                  from: 'Before Iris had kids, she went to the gym every morning.',
                  text: 'Iris {{used to go}} to the gym every morning.',
                  zh: 'Iris 以前每天早上都去健身房。',
                },
                {
                  from: 'In my twenties, I didn’t drink coffee. Now I drink three cups a day.',
                  text: 'I {{didn’t use to drink|did not use to drink|didn’t used to drink|never used to drink}} coffee, but now I drink three cups a day.',
                  zh: '我以前不喝咖啡，但現在一天喝三杯。',
                  why: { zh: '否定是 didn’t use to：did 已經表示過去了，所以後面寫 use。（口語也常聽到 never used to。）', en: 'The negative is “didn’t use to”: “did” already carries the past. “Never used to” is also common.' },
                },
                {
                  from: 'We paid for everything in cash. Now we use our phones.',
                  text: 'We {{used to pay}} for everything in cash, but now we use our phones.',
                  zh: '我們以前什麼都付現，但現在都用手機付。',
                },
                {
                  from: 'This street wasn’t busy ten years ago. Now it is full of cafés.',
                  text: 'This street {{didn’t use to be|did not use to be|didn’t used to be|never used to be}} busy, but now it is full of cafés.',
                  zh: '這條街以前不熱鬧，但現在到處都是咖啡店。',
                },
                {
                  from: 'Mr. Lin was a sales rep for many years. Now he runs the department.',
                  text: 'Mr. Lin {{used to be}} a sales rep, but now he runs the department.',
                  zh: '林先生以前是業務代表，但現在他管理整個部門。',
                },
              ],
            },
          ],
        },
      ],
    },

    // ================================================================ 05
    {
      id: 'past-review',
      group,
      zh: '總複習',
      en: 'Past Time review',
      sub: '把這一章的東西混在一起',
      icon: '🔁',

      lead: {
        en: 'Everything from this chapter, mixed: the simple past, the past progressive, time clauses and used to. Nothing here says which one it is testing.',
        zh: '這一章的東西全部混在一起：過去簡單式、過去進行式、時間子句和 used to。題目不會告訴你它在考哪一個。',
      },

      parts: [
        {
          id: 'rv-fix',
          zh: '改錯',
          en: 'Find and fix',
          blocks: [
            {
              t: 'fix',
              en: 'Correct the verb errors',
              zh: '把動詞的錯改過來',
              hintZh: '直接在框裡把句子改對，再按「檢查」。有的句子有兩個錯；有一句本來就是對的。',
              hintEn: 'Edit the sentence in the box, then check. Some have two mistakes, and one is already correct.',
              items: [
                {
                  bad: 'We didn’t received the samples last week.',
                  answers: ['We didn’t receive the samples last week.'],
                  zh: '我們上週沒有收到樣品。',
                  hint: { zh: 'didn’t 的後面要接哪一種形式？', en: 'Which form follows “didn’t”?' },
                  why: { zh: 'didn’t 已經表示過去了，後面接原形 receive。', en: '“Didn’t” already carries the past; the verb after it is the base form.' },
                },
                {
                  bad: 'They are finished the project yesterday.',
                  answers: ['They finished the project yesterday.'],
                  zh: '他們昨天把專案做完了。',
                  hint: { zh: '這句需要 be 動詞嗎？', en: 'Does this sentence need “be”?' },
                  why: { zh: '過去簡單式的肯定句不需要 be 動詞，直接用 finished。', en: 'A simple past statement needs no “be”: just “finished”.' },
                },
                {
                  bad: 'I was agree with her idea at the meeting.',
                  answers: ['I agreed with her idea at the meeting.'],
                  zh: '我在會議上同意了她的想法。',
                  hint: { zh: 'agree 是動詞，還是形容詞？', en: 'Is “agree” a verb or an adjective?' },
                  why: { zh: 'agree 本身就是動詞，前面不加 be。中文「我是同意的」很容易帶出 I was agree。', en: '“Agree” is a verb and takes no “be”. “I was agree” is the Chinese sentence in English words.' },
                },
                {
                  bad: 'Kevin and I was talking when the manager came in.',
                  answers: ['Kevin and I were talking when the manager came in.'],
                  zh: '經理進來的時候，Kevin 和我正在講話。',
                  hint: { zh: '主詞是幾個人？', en: 'How many people is the subject?' },
                  why: { zh: '主詞 Kevin and I 是複數，用 were。', en: '“Kevin and I” is plural, so “were”.' },
                },
                {
                  bad: 'When he see the bill, he didn’t believed it.',
                  answers: ['When he saw the bill, he didn’t believe it.'],
                  zh: '他看到帳單的時候，完全不敢相信。',
                  hint: { zh: '這句有兩個錯：一個在 when 子句，一個在 didn’t 後面。', en: 'Two mistakes: one in the “when” clause, one after “didn’t”.' },
                  why: { zh: 'when 子句也是過去的事，用 saw；didn’t 後面接原形 believe。', en: 'The “when” clause is past too — “saw” — and “didn’t” is followed by the base form.' },
                },
                {
                  bad: 'Our team go to Tokyo for a trade show last month.',
                  answers: ['Our team went to Tokyo for a trade show last month.'],
                  zh: '我們團隊上個月去東京參展。',
                  hint: { zh: 'last month。', en: '“Last month”.' },
                  why: { zh: 'last month 是過去的時間，go 要改成 went。', en: '“Last month” is past, so “go” becomes “went”.' },
                },
                {
                  bad: 'Did your flight on time?',
                  answers: ['Was your flight on time?'],
                  zh: '你的班機準時嗎？',
                  hint: { zh: '這句的動詞在哪裡？', en: 'Where is the verb in this sentence?' },
                  why: { zh: 'on time 前面要的是 be 動詞。be 動詞自己造問句，不用 did。', en: '“On time” needs be, and be makes its own question, with no “did”.' },
                },
                {
                  bad: 'I used to working night shifts when I was younger.',
                  answers: ['I used to work night shifts when I was younger.'],
                  zh: '我年輕的時候常上夜班。',
                  hint: { zh: 'used to 後面接什麼？', en: 'What follows “used to”?' },
                  why: { zh: 'used to 後面接原形動詞：used to work。', en: '“Used to” takes the base form: “used to work”.' },
                },
                {
                  bad: 'She writed the whole proposal in one evening.',
                  answers: ['She wrote the whole proposal in one evening.'],
                  zh: '她一個晚上就把整份提案寫完了。',
                  hint: { zh: 'write 是不規則動詞。', en: '“Write” is irregular.' },
                  why: { zh: 'write 的過去式是 wrote。', en: 'The past of “write” is “wrote”.' },
                },
                {
                  ok: 'While I was waiting for the elevator, I read your message.',
                  zh: '我在等電梯的時候看了你的訊息。',
                  hint: { zh: 'read 的過去式怎麼拼？', en: 'How is the past of “read” spelled?' },
                  why: { zh: '這句沒有錯。「等電梯」是進行中的背景，用過去進行式；read 的過去式拼法不變。', en: 'Nothing to fix. Waiting is the background, in the progressive; the past of “read” is spelled the same.' },
                },
                {
                  bad: 'I was knowing the answer, but I didn’t say anything.',
                  answers: ['I knew the answer, but I didn’t say anything.'],
                  zh: '我知道答案，但我什麼都沒說。',
                  hint: { zh: 'know 可以用進行式嗎？', en: 'Can “know” take -ing?' },
                  why: { zh: 'know 是狀態動詞，不用進行式，用 knew。', en: '“Know” is a state verb and does not take -ing: “knew”.' },
                },
                {
                  bad: 'Sorry I miss your call. I was in a meeting when you call.',
                  answers: ['Sorry I missed your call. I was in a meeting when you called.'],
                  zh: '抱歉我沒接到你的電話。你打來的時候我在開會。',
                  hint: { zh: '這句有兩個錯，兩個都是「已經發生的事」。', en: 'Two mistakes, both about something that has already happened.' },
                  why: { zh: '沒接到電話、你打來，都是過去的事：missed、called。', en: 'Missing the call and the call itself are both past: “missed”, “called”.' },
                },
                {
                  bad: 'We stoped the machine as soon as we heared the noise.',
                  answers: ['We stopped the machine as soon as we heard the noise.'],
                  zh: '我們一聽到那個聲音，就把機器停了下來。',
                  hint: { zh: '一個是拼字，一個是不規則動詞。', en: 'One is spelling, the other an irregular verb.' },
                  why: { zh: 'stop 要重複 p：stopped；hear 的過去式是 heard，不是 heared。', en: '“Stop” doubles its p — “stopped” — and the past of “hear” is “heard”.' },
                },
                {
                  bad: 'What did you doing at eight last night?',
                  answers: ['What were you doing at eight last night?'],
                  zh: '你昨晚八點在做什麼？',
                  hint: { zh: 'doing 前面要配哪個助動詞？', en: 'Which helper goes with “doing”?' },
                  why: { zh: '問「那個時間點正在做什麼」用過去進行式：were you doing。did 後面只能接原形。', en: 'Asking what was in progress at that moment takes the past progressive: “were you doing”. “Did” can only be followed by the base form.' },
                },
              ],
            },
          ],
        },

        {
          id: 'rv-story',
          zh: '短文填空',
          en: 'A story: past or past progressive',
          blocks: [
            {
              t: 'cloze',
              en: 'The cat and the video call',
              zh: '貓與視訊會議',
              hintZh: '用括號裡的動詞，填入過去簡單式或過去進行式。先想：這件事是當時「正進行到一半」，還是「一下子就發生」？',
              hintEn: 'Use the verb in brackets in the simple past or the past progressive. Ask of each one: was it in progress, or did it happen in a moment?',
              lines: [
                {
                  text: 'At three o’clock yesterday afternoon, I {{was presenting}} (present) our sales figures on a video call. My cat {{was sleeping}} (sleep) next to the keyboard. Then my phone {{rang}} (ring). The cat {{woke}} (wake) up and {{jumped}} (jump) onto the desk. While I {{was trying}} (try) to move her, she {{stepped}} (step) on the keyboard and {{closed}} (close) the meeting window.',
                  zh: '昨天下午三點，我正在視訊會議上報告業績。我的貓睡在鍵盤旁邊。這時我的手機響了。貓醒過來，跳上桌子。我正想把牠抱開的時候，牠踩到鍵盤，把會議視窗關掉了。',
                },
                {
                  text: 'When I {{got}} (get) back into the call two minutes later, everyone {{was still laughing}} (still, laugh). My manager {{was holding|held}} (hold) up a piece of paper. It {{said}} (say), “Hire the cat.”',
                  zh: '兩分鐘後我重新進入會議，大家還在笑。我的主管舉著一張紙，上面寫著：「錄取那隻貓。」',
                },
                {
                  text: 'I {{didn’t know|did not know}} (not, know) what to say, so I just {{shared}} (share) my screen again and {{finished}} (finish) the presentation. After the call {{ended}} (end), I {{gave}} (give) the cat her dinner. She {{didn’t look|did not look}} (not, look) sorry at all.',
                  zh: '我不知道該說什麼，只好重新分享螢幕，把報告講完。會議結束後，我餵貓吃了晚餐。牠看起來一點都不覺得抱歉。',
                },
              ],
            },
          ],
        },

        {
          id: 'rv-choose',
          zh: '選擇',
          en: 'Choose the correct answer',
          blocks: [
            {
              t: 'mcq',
              en: 'Chapter review',
              zh: '本章複習',
              hintZh: '選出正確的答案。選錯了可以再選。',
              hintEn: 'Choose the correct answer. A wrong pick stays open.',
              items: [
                {
                  text: 'I ___ the lights and left the office at 7:30.',
                  options: ['turned off', 'was turning off', 'turning off'],
                  answer: 0,
                  zh: '我七點半關了燈，離開辦公室。',
                  why: { zh: '關燈、離開，是一前一後兩個做完的動作，都用過去簡單式。', en: 'Two finished actions, one after the other: both simple past.' },
                },
                {
                  text: 'We ___ any complaints last quarter.',
                  options: ['not received', 'didn’t receive', 'didn’t received'],
                  answer: 1,
                  zh: '我們上一季沒有收到任何客訴。',
                  why: { zh: '過去式的否定是 didn’t + 原形。', en: 'The past negative is didn’t + the base form.' },
                },
                {
                  text: 'The earthquake started while we ___ the monthly report.',
                  options: ['discussed', 'were discussing', 'discuss'],
                  answer: 1,
                  zh: '我們正在討論月報的時候，地震開始了。',
                  why: { zh: '「討論」進行到一半，「地震」插進來。while 後面接進行中的動作。', en: 'The discussion was in progress when the earthquake cut in. “While” takes the one in progress.' },
                },
                {
                  text: 'Why ___ the meeting early yesterday?',
                  options: ['you left', 'did you left', 'did you leave'],
                  answer: 2,
                  zh: '你昨天為什麼提早離開會議？',
                  why: { zh: '疑問詞 + did + 主詞 + 原形：Why did you leave …?', en: 'Question word + did + subject + base form.' },
                },
                {
                  text: '___ the supplier confirmed the price, we placed the order.',
                  options: ['Until', 'As soon as', 'While'],
                  answer: 1,
                  zh: '供應商一確認價格，我們就下單了。',
                  why: { zh: '確認在先，下單緊接在後：as soon as。', en: 'Confirmation first, the order straight after: “as soon as”.' },
                },
                {
                  text: 'She didn’t see the message because she ___.',
                  options: ['drove', 'was driving', 'used to drive'],
                  answer: 1,
                  zh: '她沒看到訊息，因為她那時正在開車。',
                  why: { zh: '訊息傳來的那個時間點，她正在開車——進行到一半的事。', en: 'At the moment the message arrived she was in the middle of driving.' },
                },
                {
                  text: 'This building ___ a bank, but now it’s a hotel.',
                  options: ['used to be', 'was being', 'used to being'],
                  answer: 0,
                  zh: '這棟樓以前是銀行，但現在是飯店。',
                  why: { zh: '以前是、現在不是：used to + 原形 be。', en: 'True once and not now: used to + the base form.' },
                },
                {
                  text: 'I couldn’t hear the speaker because the people behind me ___.',
                  options: ['talked', 'were talking', 'talk'],
                  answer: 1,
                  zh: '我聽不到講者說話，因為後面的人一直在講話。',
                  why: { zh: '後面的人當時「一直在講」，是持續進行的背景。', en: 'Their talking was going on all the while — the background.' },
                },
                {
                  text: 'I ___ what he meant, so I asked him to explain again.',
                  options: ['didn’t understand', 'wasn’t understanding', 'didn’t understood'],
                  answer: 0,
                  zh: '我聽不懂他的意思，所以請他再解釋一次。',
                  why: { zh: 'understand 是狀態動詞，不用進行式；didn’t 後面接原形。', en: '“Understand” is a state verb, so no -ing; and “didn’t” takes the base form.' },
                },
                {
                  text: 'He picked up his laptop, ___ goodbye, and walked out.',
                  options: ['said', 'saying', 'was saying'],
                  answer: 0,
                  zh: '他拿起筆電，說了再見，然後走出去。',
                  why: { zh: '一連串的動作，全部用過去簡單式：picked up、said、walked out。', en: 'A chain of actions, all simple past: picked up, said, walked out.' },
                },
                {
                  text: 'The manager ___ on another call when I knocked on her door.',
                  options: ['was talked', 'talks', 'was talking'],
                  answer: 2,
                  zh: '我敲她門的時候，經理正在講另一通電話。',
                  why: { zh: '敲門的那一刻，她正在講電話：was talking。', en: 'At the moment of the knock she was mid-call: “was talking”.' },
                },
                {
                  text: 'They were still setting up the booth when the first visitors ___.',
                  options: ['were arriving', 'arrive', 'arrived'],
                  answer: 2,
                  zh: '第一批參觀者到的時候，他們還在布置攤位。',
                  why: { zh: '「布置」是進行中的事，「參觀者到了」是插進來的事——用過去簡單式。', en: 'Setting up was in progress; the visitors arriving is the event that cut in — simple past.' },
                },
                {
                  text: 'The client didn’t ___ to our email until Friday.',
                  options: ['replied', 'reply', 'replying'],
                  answer: 1,
                  zh: '客戶一直到星期五才回我們的 email。',
                  why: { zh: 'didn’t 後面接原形 reply。', en: 'After “didn’t”, the base form.' },
                },
                {
                  text: 'I waited at the station ___ the last train left.',
                  options: ['until', 'while', 'as soon as'],
                  answer: 0,
                  zh: '我在車站一直等到末班車開走。',
                  why: { zh: '「等」一直持續到某個時間點為止：until。', en: 'The waiting continued up to a point: “until”.' },
                },
              ],
            },
          ],
        },
      ],
    },
  );
})();
