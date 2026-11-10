/* Grammar Practice — 現在完成式，還是過去簡單式？

   The first point written for this page, before any source material arrived:
   every sentence in it is the page's own. See content.js for the block types.
*/

GP.points.push(
  {
    id: 'perfect-or-past',
    group: { zh: '完成式', en: 'The perfect' },
    zh: '現在完成式，還是過去簡單式？',
    en: 'Present perfect or past simple',
    sub: 'have done 和 did 怎麼選',
    icon: '⏳',

    lead: {
      en: 'Is 我寄了 “I sent” or “I have sent”? Chinese 了 and 過 do not choose between the two tenses; English makes you pick. And only one thing decides it: the time.',
      zh: '「我寄了」是 I sent，還是 I have sent？中文的「了」和「過」不分這兩種時態，英文卻一定要選一個。而決定的依據只有一個：時間。',
    },

    parts: [
      {
        id: 'pp-recap',
        zh: '重點整理',
        en: 'The point in brief',
        blocks: [
          {
            t: 'rule',
            en: 'Name a finished time — yesterday, last week, in 2019 — and the verb is past simple.',
            zh: '說出「已經結束的時間」（yesterday、last week、in 2019），動詞就用過去簡單式。',
          },
          {
            t: 'rule',
            en: 'Use the present perfect when the time runs up to now, or when no time is given at all.',
            zh: '時間「一路連到現在」，或者根本沒說是什麼時候，才用現在完成式。',
          },
          {
            t: 'cols',
            en: 'The time words that decide it',
            zh: '決定時態的時間詞',
            cols: [
              {
                zh: '過去簡單式',
                form: 'did',
                note: '時間已經結束',
                words: ['yesterday', 'last week', 'two days ago', 'in 2019', 'on Monday', 'when I joined'],
                eg: 'I joined the company in 2019.',
                egZh: '我 2019 年進公司。',
              },
              {
                zh: '現在完成式',
                form: 'have done',
                note: '時間連到現在',
                words: ['since 2019', 'for three years', 'already', 'yet', 'just', 'ever / never', 'so far'],
                eg: 'I have worked here since 2019.',
                egZh: '我從 2019 年就在這裡工作。',
              },
            ],
          },
          {
            t: 'pairs',
            en: 'Right and wrong',
            zh: '對與錯',
            items: [
              { ok: true,  text: 'I sent the report yesterday.', zh: '我昨天把報告寄出去了。' },
              { ok: false, text: 'I have sent the report yesterday.' },
              { ok: true,  text: 'She has worked here since 2019.', zh: '她從 2019 年就在這裡工作。' },
              { ok: false, text: 'She works here since 2019.' },
            ],
          },
          {
            t: 'note',
            en: 'Why this one is hard for us',
            zh: '為什麼中文使用者特別容易錯',
            bodyEn: 'In Chinese the verb never changes; the time word does all the work. In English the time word and the verb have to agree. So read the time word first, and let it choose the verb — not the 已經 or the 了 in the sentence you were about to translate.',
            bodyZh: '中文的動詞不會變，時間全靠時間詞交代。英文的時間詞和動詞卻要「對得上」。所以先找時間詞，讓它來決定動詞——而不是讓腦中那句中文裡的「已經」或「了」來決定。',
          },
          {
            t: 'note',
            en: 'for, since, ago',
            zh: 'for、since、ago 三個字',
            bodyEn: 'For takes a length of time and since takes a starting point; both run up to now, so both go with the present perfect. Ago counts back to a moment in the past, so it always goes with the past simple.',
            bodyZh: 'for 後面接「一段時間」，since 後面接「起點」；兩個都連到現在，所以配現在完成式。ago 是往回數到過去的某個時間點，所以永遠配過去簡單式。',
            good: [
              'We have worked together for three years.',
              'We have worked together since 2022.',
              'We started working together three years ago.',
            ],
            bad: ['We have started working together three years ago.'],
          },
        ],
      },

      {
        id: 'pp-choose',
        zh: '選擇',
        en: 'Choose the form',
        blocks: [
          {
            t: 'mcq',
            en: 'Choose the form',
            zh: '選出正確的形式',
            hintZh: '先找時間詞，再選動詞。選錯了可以再選。',
            hintEn: 'Find the time word first, then choose. A wrong pick stays open.',
            items: [
              {
                text: 'We ___ the contract last Friday.',
                options: ['signed', 'have signed'],
                answer: 0,
                zh: '我們上週五簽了合約。',
                hint: { zh: '先找時間詞：last Friday 已經結束了嗎？', en: 'Find the time phrase. Is “last Friday” finished?' },
                why: {
                  zh: 'last Friday 是已經結束的時間，所以用過去簡單式。只要說了「哪一天」，就不能用 have signed。',
                  en: '“Last Friday” is a finished time, so the verb is past simple. Once you say when, “have signed” is out.',
                },
              },
              {
                text: 'She ___ in the marketing team since 2021.',
                options: ['worked', 'has worked', 'works'],
                answer: 1,
                zh: '她從 2021 年起就在行銷團隊工作。',
                hint: { zh: 'since 2021 是「從那時到現在」。她現在還在那個團隊嗎？', en: '“Since 2021” means from then until now. Is she still on the team?' },
                why: {
                  zh: 'since + 起點，表示一直持續到現在，用現在完成式。中文說「從 2021 年就在⋯⋯工作」，很容易直接寫成 works since，但現在簡單式不能和 since 連用。',
                  en: 'Since + a starting point runs up to now: present perfect. The Chinese sentence tempts you into “works since”, but the present simple cannot carry “since”.',
                },
              },
              {
                text: 'Have you ever ___ to our Kaohsiung office?',
                options: ['went', 'been', 'go'],
                answer: 1,
                zh: '你去過我們的高雄辦公室嗎？',
                hint: { zh: 'have 的後面要接哪一種動詞形式？', en: 'Which verb form follows “have”?' },
                why: {
                  zh: 'ever 問的是「到目前為止有沒有這個經驗」，用 Have you ever + 過去分詞。「去過」某個地方是 been to；went 是過去式，不能接在 have 後面。',
                  en: '“Ever” asks about experience up to now: Have you ever + past participle. For a place you have visited it is “been to”; “went” is the past simple and cannot follow “have”.',
                },
              },
              {
                text: 'I ___ the client two days ago, but she hasn’t replied yet.',
                options: ['emailed', 'have emailed'],
                answer: 0,
                zh: '我兩天前寄信給客戶了，但她還沒回。',
                hint: { zh: 'ago 指的是過去的一個時間點，還是一段連到現在的時間？', en: 'Does “ago” point to a moment in the past, or to a period up to now?' },
                why: {
                  zh: 'ago 指向過去的一個時間點，永遠配過去簡單式。後半句的 hasn’t replied yet 才是「到現在為止」，所以那裡用的是現在完成式。',
                  en: '“Ago” points to a moment in the past and always takes the past simple. The second half — “hasn’t replied yet” — is the part that runs up to now.',
                },
              },
              {
                text: 'Sales ___ by 12% so far this quarter.',
                options: ['rose', 'have risen'],
                answer: 1,
                zh: '這一季到目前為止，業績成長了 12%。',
                hint: { zh: '這一季結束了嗎？', en: 'Is this quarter over?' },
                why: {
                  zh: 'so far this quarter：這一季還沒結束，數字是「到目前為止」，所以用現在完成式。如果是 last quarter，就要說 Sales rose by 12%.',
                  en: 'The quarter is still running, so the figure is “up to now”: present perfect. With “last quarter” it would be “Sales rose by 12%.”',
                },
              },
              {
                text: 'When ___ you join the company?',
                options: ['did', 'have'],
                answer: 0,
                zh: '你是什麼時候進公司的？',
                hint: { zh: 'When 問的是哪一種時間？', en: 'What kind of time does “when” ask about?' },
                why: {
                  zh: '這一題是提醒：不是每一題都選完成式。When 問的是過去某個確定的時間點，所以用過去簡單式。問「多久了」才用完成式：How long have you worked here?',
                  en: 'A reminder that the answer is not always the perfect. “When” asks for a definite point in the past, so it takes the past simple. The question that takes the perfect is “How long have you worked here?”',
                },
              },
            ],
          },
        ],
      },

      {
        id: 'pp-fill',
        zh: '填空',
        en: 'Fill in the blank',
        blocks: [
          {
            t: 'gap',
            en: 'Put the verb in the right form',
            zh: '把動詞改成正確的形式',
            hintZh: '把括號裡的動詞改成正確的形式，打完按 Enter 或「檢查」。可以用縮寫（hasn’t、haven’t）。',
            hintEn: 'Put the verb in brackets into the right form, then press Enter or Check. Short forms are fine.',
            items: [
              {
                text: 'Our team ___ (launch) the new website last month.',
                answers: ['launched'],
                zh: '我們團隊上個月推出了新網站。',
                hint: { zh: 'last month 結束了嗎？', en: 'Is “last month” finished?' },
                why: { zh: 'last month 是已經結束的時間，用過去簡單式 launched。', en: '“Last month” is a finished time, so: past simple, “launched”.' },
              },
              {
                text: 'I ___ (know) Jason for ten years.',
                answers: ['have known'],
                zh: '我認識 Jason 十年了。',
                hint: { zh: '你現在還認識他嗎？for ten years 是從過去到現在。', en: 'Do you still know him? “For ten years” runs from the past up to now.' },
                why: {
                  zh: '「認識十年了」是到現在還持續的狀態，用現在完成式 have known。中文的動詞沒有這個變化，所以很容易寫成 I know Jason for ten years——英文不這樣說。',
                  en: 'Knowing him is a state that started ten years ago and still holds: present perfect, “have known”. “I know Jason for ten years” is the Chinese sentence in English words.',
                },
              },
              {
                text: 'The shipment ___ (not arrive) yet.',
                answers: ['has not arrived', 'hasn’t arrived'],
                zh: '貨還沒到。',
                hint: { zh: 'yet 是「到現在為止還沒」。另外，主詞是單數。', en: '“Yet” means not up to now. And the subject is singular.' },
                why: {
                  zh: '「還沒」＋ yet 是到現在為止的事，用現在完成式的否定 has not (hasn’t) arrived。shipment 是單數，所以用 has。',
                  en: '“Not … yet” is about up to now: the negative present perfect, “has not (hasn’t) arrived”. “Shipment” is singular, hence “has”.',
                },
              },
              {
                text: 'She ___ (leave) the office an hour ago.',
                answers: ['left'],
                zh: '她一小時前離開辦公室了。',
                hint: { zh: '看到 ago 了嗎？另外，leave 是不規則動詞。', en: 'See “ago”? And “leave” is irregular.' },
                why: { zh: 'an hour ago 是過去的時間點，用過去簡單式；leave 的過去式是 left。', en: '“An hour ago” is a moment in the past: past simple. The past of “leave” is “left”.' },
              },
              {
                text: 'Prices ___ (go) up three times since January.',
                answers: ['have gone'],
                zh: '從一月到現在，價格已經漲了三次。',
                hint: { zh: 'since January 是到現在為止。go 的過去分詞是什麼？', en: '“Since January” runs up to now. What is the past participle of “go”?' },
                why: { zh: 'since January 表示「從一月到現在」，用現在完成式；go 的過去分詞是 gone，不是 went。', en: '“Since January” means from then until now: present perfect. The participle of “go” is “gone”, not “went”.' },
              },
            ],
          },
          {
            t: 'gap',
            en: 'Choose from the box',
            zh: '從字庫選字',
            hintZh: '點一下空格，再點字庫裡的字；也可以直接打字。同一個字可以用不只一次。',
            hintEn: 'Tap a blank, then a word in the box — or just type. A word may be used more than once.',
            bank: ['for', 'since', 'ago', 'yet', 'already'],
            items: [
              {
                text: 'I have lived in Taipei ___ 2015.',
                answers: ['since'],
                zh: '我從 2015 年就住在台北。',
                hint: { zh: '2015 是一個起點，還是一段時間？', en: 'Is 2015 a starting point or a length of time?' },
                why: { zh: 'since + 起點（2015、Monday、I joined）。for 後面接的是一段時間。', en: 'Since + a starting point (2015, Monday, I joined). “For” takes a length of time.' },
              },
              {
                text: 'We have been partners ___ over ten years.',
                answers: ['for'],
                zh: '我們合作超過十年了。',
                hint: { zh: 'over ten years 是起點，還是一段時間？', en: 'Is “over ten years” a starting point or a length of time?' },
                why: { zh: 'for + 一段時間（ten years、a long time）。', en: 'For + a length of time (ten years, a long time).' },
              },
              {
                text: 'He joined the company three years ___.',
                answers: ['ago'],
                zh: '他三年前進公司。',
                hint: { zh: '動詞 joined 是過去簡單式。哪個字配過去的時間點？', en: '“Joined” is past simple. Which word goes with a moment in the past?' },
                why: { zh: '「一段時間 + ago」＝多久以前，配過去簡單式。', en: 'A length of time + “ago” = that long before now. It goes with the past simple.' },
              },
              {
                text: 'The client hasn’t signed the contract ___.',
                answers: ['yet'],
                zh: '客戶還沒簽合約。',
                hint: { zh: '否定句裡的「還沒」。', en: '“Not up to now”, in a negative sentence.' },
                why: { zh: 'yet 放在否定句的句尾，表示「到現在還沒」。already 用在肯定句。', en: '“Yet” closes a negative sentence: not up to now. “Already” belongs in a positive one.' },
              },
              {
                text: 'Don’t worry — I’ve ___ booked the meeting room.',
                answers: ['already'],
                zh: '別擔心，我已經訂好會議室了。',
                hint: { zh: '肯定句裡的「已經」。', en: '“By now”, in a positive sentence.' },
                why: { zh: 'already 放在 have 和過去分詞中間，表示「已經」。', en: '“Already” sits between “have” and the participle.' },
              },
            ],
          },
        ],
      },

      {
        id: 'pp-fix',
        zh: '改錯',
        en: 'Find and fix',
        blocks: [
          {
            t: 'fix',
            en: 'Find and fix',
            zh: '把句子改對',
            hintZh: '每句最多一個錯。直接在框裡把句子改對，再按「檢查」。其中有一句本來就是對的。',
            hintEn: 'One mistake at most. Edit the sentence in the box, then check. One of these is already correct.',
            items: [
              {
                bad: 'I have sent you the quotation yesterday.',
                answers: ['I sent you the quotation yesterday.'],
                zh: '我昨天把報價單寄給你了。',
                hint: { zh: '句子裡有一個已經結束的時間。', en: 'There is a finished time in this sentence.' },
                why: {
                  zh: 'yesterday 是已經結束的時間，不能和現在完成式一起用。這是我們最常犯的錯：「我已經寄了」的「已經」讓人想用 have，但只要說了「昨天」，就是 sent。',
                  en: '“Yesterday” is finished, so it cannot go with the present perfect. The 已經 in the Chinese sentence pulls you towards “have”; the moment you say “yesterday”, it is “sent”.',
                },
              },
              {
                bad: 'She works here since 2020.',
                answers: [
                  'She has worked here since 2020.',
                  'She’s worked here since 2020.',
                  'She has been working here since 2020.',
                  'She’s been working here since 2020.',
                ],
                zh: '她從 2020 年起就在這裡工作。',
                hint: { zh: 'since 可以和現在簡單式一起用嗎？', en: 'Can “since” go with the present simple?' },
                why: {
                  zh: 'since 2020 表示從那時持續到現在，要用現在完成式 has worked（has been working 也可以）。',
                  en: '“Since 2020” runs from then until now, so it needs the present perfect: “has worked” (or “has been working”).',
                },
              },
              {
                ok: 'We have already discussed this with the supplier.',
                zh: '我們已經跟供應商討論過這件事了。',
                hint: { zh: '這句有說是「哪一天」嗎？', en: 'Does this sentence say when?' },
                why: {
                  zh: '這句沒有錯。already 表示「已經」，而且句子沒有說是哪一天，所以現在完成式是對的。要是加上 last week，才需要改成 We discussed this with the supplier last week.',
                  en: 'Nothing to fix. “Already” means by now and no time is named, so the present perfect is right. Add “last week” and it would have to become “We discussed this with the supplier last week.”',
                },
              },
              {
                bad: 'We have opened our Taichung branch in 2018.',
                answers: ['We opened our Taichung branch in 2018.'],
                zh: '我們在 2018 年開了台中分公司。',
                hint: { zh: 'in 2018 結束了嗎？', en: 'Is “in 2018” finished?' },
                why: {
                  zh: 'in 2018 是已經結束的時間，用過去簡單式 opened。想強調「到現在」的話，要換一種說法：Our Taichung branch has been open since 2018.',
                  en: '“In 2018” is finished: past simple, “opened”. To stress “up to now”, say it another way: “Our Taichung branch has been open since 2018.”',
                },
              },
              {
                bad: 'How long are you in this role?',
                answers: ['How long have you been in this role?'],
                zh: '你擔任這個職位多久了？',
                hint: { zh: 'How long 問的是「從過去到現在」有多久。', en: '“How long” asks about the time from the past up to now.' },
                why: {
                  zh: '問「到現在為止多久了」，用 How long have you been ⋯?。中文「你在這個職位多久了」沒有時態變化，所以很容易直接說成 How long are you。',
                  en: 'To ask how long something has lasted up to now, it is “How long have you been …?”. The Chinese has no tense to carry over, which is how “How long are you” happens.',
                },
              },
              {
                bad: 'He has left the company two months ago.',
                answers: ['He left the company two months ago.'],
                zh: '他兩個月前離職了。',
                hint: { zh: '找出指向「過去某個時間點」的那個字。', en: 'Find the word that points to a moment in the past.' },
                why: {
                  zh: 'two months ago 是過去的時間點，用過去簡單式 left。把 two months ago 拿掉，He has left the company.（他已經離職了）就是對的。',
                  en: '“Two months ago” is a moment in the past: “left”. Take the time away and “He has left the company.” is fine.',
                },
              },
            ],
          },
        ],
      },

      {
        id: 'pp-build',
        zh: '重組與改寫',
        en: 'Build and rewrite',
        blocks: [
          {
            t: 'order',
            en: 'Put it in order',
            zh: '句子重組',
            hintZh: '依照中文的意思，點字塊排出句子。想換位置，點一下排好的字塊就會放回去。',
            hintEn: 'Tap the tiles to build the sentence the Chinese says. Tap a placed tile to send it back.',
            items: [
              {
                lead: 'We',
                chunks: ['have', 'worked with', 'this supplier', 'for', 'eight years'],
                zh: '我們跟這家供應商合作八年了。',
                hint: { zh: 'for 的後面接一段時間，放在句尾。', en: '“For” takes a length of time, at the end.' },
                why: {
                  zh: '合作從八年前持續到現在，所以用現在完成式 have worked；時間長度 for eight years 放在句尾。',
                  en: 'The partnership began eight years ago and still stands: “have worked”. The length of time goes last.',
                },
              },
              {
                lead: 'Have',
                chunks: ['you', 'ever', 'given', 'a presentation', 'in English'],
                end: '?',
                zh: '你曾經用英文做過簡報嗎？',
                hint: { zh: 'ever 放在主詞和過去分詞中間。', en: '“Ever” sits between the subject and the participle.' },
                why: { zh: 'Have + 主詞 + ever + 過去分詞：問到目前為止的經驗。', en: 'Have + subject + ever + past participle: experience up to now.' },
              },
              {
                lead: 'She',
                chunks: ['joined', 'our team', 'three months', 'ago'],
                zh: '她三個月前加入我們團隊。',
                hint: { zh: 'ago 放在「一段時間」的後面。', en: '“Ago” comes after the length of time.' },
                why: { zh: 'three months ago 是過去的時間點，動詞用過去簡單式 joined，前面不加 has。', en: '“Three months ago” is a moment in the past, so it is “joined”, with no “has”.' },
              },
              {
                lead: 'I',
                chunks: ['haven’t', 'received', 'the invoice', 'yet'],
                also: ['I haven’t yet received the invoice.'],
                zh: '我還沒收到發票。',
                hint: { zh: 'yet 通常放在句尾。', en: '“Yet” usually goes at the end.' },
                why: { zh: 'haven’t + 過去分詞 ⋯ yet：到現在為止還沒發生。', en: 'Haven’t + past participle … yet: it has not happened up to now.' },
              },
            ],
          },
          {
            t: 'rewrite',
            en: 'Rewrite',
            zh: '句子改寫',
            hintZh: '用提示的字，把同樣的意思寫成一句。開頭已經寫好了，接著打完就可以。',
            hintEn: 'Say the same thing in one sentence, using the word given. The opening is written for you.',
            items: [
              {
                from: 'I started working at this company in 2020. I still work here.',
                cueZh: '用 since 合成一句',
                cueEn: 'One sentence, with “since”',
                start: 'I have ',
                answers: [
                  'I have worked at this company since 2020.',
                  'I have been working at this company since 2020.',
                  'I have worked here since 2020.',
                  'I have been working here since 2020.',
                ],
                zh: '我從 2020 年起就在這家公司工作。',
                hint: { zh: 'I have + 過去分詞 ⋯ since + 起點。', en: 'I have + past participle … since + the starting point.' },
                why: {
                  zh: '「2020 年開始、現在還在」正是現在完成式的意思：一句 have worked ⋯ since 2020 就把兩句話說完了。',
                  en: '“Started in 2020 and still here” is exactly what the present perfect means. One “have worked … since 2020” says both sentences.',
                },
              },
              {
                from: 'The last time I spoke to the client was on Monday.',
                cueZh: '用 since 改寫',
                cueEn: 'Rewrite with “since”',
                start: 'I haven’t ',
                answers: [
                  'I haven’t spoken to the client since Monday.',
                  'I haven’t spoken with the client since Monday.',
                  'I haven’t talked to the client since Monday.',
                  'I haven’t talked with the client since Monday.',
                ],
                zh: '我從星期一之後就沒跟客戶說過話了。',
                hint: { zh: 'speak 的過去分詞是 spoken；時間用 since + 起點。', en: 'The participle of “speak” is “spoken”; then since + the starting point.' },
                why: {
                  zh: '「最後一次是星期一」等於「從星期一到現在都沒有」：haven’t spoken ⋯ since Monday。',
                  en: '“The last time was Monday” is the same as “not from Monday until now”: “haven’t spoken … since Monday”.',
                },
              },
              {
                from: 'We have had this problem for two weeks.',
                cueZh: '用 ago 改寫',
                cueEn: 'Rewrite with “ago”',
                start: 'This problem ',
                answers: [
                  'This problem started two weeks ago.',
                  'This problem began two weeks ago.',
                ],
                zh: '這個問題是兩週前開始的。',
                hint: { zh: 'ago 要配哪一種時態？', en: 'Which tense goes with “ago”?' },
                why: {
                  zh: '換成 ago，說的就是「開始的那個時間點」，所以動詞改用過去簡單式 started。同一件事：for 配完成式，ago 配過去式。',
                  en: 'With “ago” you are naming the moment it began, so the verb becomes past simple: “started”. Same fact — “for” with the perfect, “ago” with the past.',
                },
              },
            ],
          },
        ],
      },
    ],
  }
);
