/* Chapter 13 — Modals, Part 2: Advice, Necessity, Requests, Suggestions.

   All nine sections. Blocks only: the section titles live in ../book.js.

   Built from the nine charts of the chapter. What the charts state is all
   here — the meanings, the form rules, the incorrect examples they print, the
   register notes and the lists of typical responses. What they do not contain
   is the practice and the Chinese, both written for this page, and the example
   sentences are this site's own: an adult Taiwanese working week rather than
   the book's classroom.

   Four things are deliberately added and say so on the page, because a chart
   aimed at a general beginner leaves out what trips up this reader:
     13-3  must not against don't have to as a labelled trap — the chart gives
           both but does not warn that they are opposites
     13-5  a contrast block on could I against could you: who does the work
     13-7  two modals cannot stack (will can → will be able to)
     13-8  two rows the book's summary chart has no line for, and a note saying
           they were added
     13-9  the negative let's not, which the chart does not show at all
*/

const CHAPTER = {
  id: 'ch13',

  intro: {
    en: 'Advice, necessity, requests and suggestions — four things you do at work every day, and four places where a small word choice changes how you sound. The grammar in this chapter is easy: nearly everything takes the bare verb. The judgement is the hard part, because must and should are both correct and only one of them will get you what you want.',
    zh: '建議、必要、請求、提議——這四件事你每天在職場上都在做，而這四個地方，一個小小的用字就會改變你聽起來的樣子。這一章的文法很簡單：幾乎全部都接原形動詞。難的是判斷，因為 must 和 should 都對，但只有一個能讓你得到你想要的結果。',
  },

  sections: [
    // ============================================================== 13-1
    {
      n: '13-1',
      blocks: [
        {
          t: 'lead',
          en: 'Advice is the easiest of these to say, and the easiest to say wrongly: one word, and then the verb goes bare.',
          zh: '「建議」是這一章裡最容易說的，也最容易說錯：一個字，後面的動詞什麼都不加。',
        },
        {
          t: 'rule',
          en: 'Should means this is a good idea, this is good advice. It is advice and not an order, so the other person can still say no.',
          zh: 'should 表示「這是個好主意、這是個好建議」。它是建議，不是命令，所以對方仍然可以不接受。',
        },
        {
          t: 'forms',
          en: 'Should + the base form — nothing changes for anybody',
          zh: 'should ＋ 原形動詞——不隨任何主詞改變',
          rows: [
            { sub: 'I', verb: 'should', rest: 'take a break.', zh: '我應該休息一下。' },
            { sub: 'You', verb: 'should', rest: 'take a break.', zh: '你應該休息一下。' },
            { sub: 'She', verb: 'should', rest: 'take a break.', zh: '她應該休息一下。' },
            { sub: 'He', verb: 'should', rest: 'take a break.', zh: '他應該休息一下。' },
            { sub: 'We', verb: 'should', rest: 'take a break.', zh: '我們應該休息一下。' },
            { sub: 'They', verb: 'should', rest: 'take a break.', zh: '他們應該休息一下。' },
          ],
        },
        {
          t: 'note',
          en: 'The two mistakes are opposite mistakes',
          zh: '兩個錯誤，方向剛好相反',
          bodyEn: 'One adds something to the verb, the other adds something in front of it. Should is followed by the base form and nothing else — no -s, no to.',
          bodyZh: '一個是在動詞後面多加東西，一個是在動詞前面多加東西。should 後面只接原形動詞，別的都不要——不加 -s，也不加 to。',
          good: ['She should call the client.'],
          bad: ['She should calls the client.', 'She should to call the client.'],
        },
        {
          t: 'forms',
          en: 'The negative: should not, shouldn’t',
          zh: '否定：should not、shouldn’t',
          rows: [
            { sub: 'You', verb: 'should not', rest: 'reply to that email yet.', zh: '你還不應該回那封信。' },
            { sub: 'You', verb: 'shouldn’t', rest: 'reply to that email yet.', zh: '你還不應該回那封信。' },
            { sub: 'We', verb: 'shouldn’t', rest: 'book two meetings back to back.', zh: '我們不該把兩場會排在一起。' },
          ],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'You look tired. You should go home.', zh: '你看起來很累，你應該回家了。' },
            { en: 'The report is long. You should read the summary first.', zh: '報告很長，你應該先看摘要。' },
            { en: 'He should ask his manager before he answers.', zh: '他應該先問他的主管，再回覆。' },
            { en: 'We should leave now if we want to be on time.', zh: '如果我們想準時到，現在就該出發。' },
            { en: 'You shouldn’t send that message when you are angry.', zh: '你生氣的時候不應該送出那則訊息。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          hintEn: 'After should, the verb is bare. Every wrong option here adds something.',
          hintZh: 'should 後面的動詞是原形。這裡每個錯的選項都多加了東西。',
          items: [
            {
              text: 'You’re sick. You ___ a doctor.',
              options: ['should see', 'should sees', 'should to see'],
              answer: 0,
              why: { en: 'Should + the base form. See, not sees and not to see.', zh: 'should ＋ 原形動詞。用 see，不是 sees，也不是 to see。' },
            },
            {
              text: 'She ___ the client before five.',
              options: ['should call', 'should calls', 'shoulds call'],
              answer: 0,
              why: { en: 'She does not put an -s on should, and should does not put one on call. Nothing changes.', zh: 'she 不會讓 should 加 -s，should 也不會讓 call 加 -s。什麼都不變。' },
            },
            {
              text: 'We ___ two meetings on the same morning.',
              options: ['shouldn’t book', 'shouldn’t books', 'not should book'],
              answer: 0,
              why: { en: 'Not goes after should, and shouldn’t is the normal spoken form.', zh: 'not 放在 should 後面，口語上常用 shouldn’t。' },
            },
            {
              text: 'Tom is sleepy. He ___ to bed.',
              options: ['should go', 'should goes', 'should going'],
              answer: 0,
              why: { en: 'The base form is go. Should never takes an -ing form either.', zh: '原形是 go。should 後面也不接 -ing 形式。' },
            },
            {
              text: 'Should means ___.',
              options: ['this is a good idea', 'you have no choice', 'this already happened'],
              answer: 0,
              why: { en: 'Should is advice: a good idea, and the listener can still decide. Necessity is 13-2 and 13-3.', zh: 'should 是建議：好主意，而且對方還能自己決定。「必要」是 13-2 和 13-3 的內容。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          hintEn: 'Subject, then should, then the bare verb. Tap a word you have placed to take it back.',
          hintZh: '先主詞，再 should，然後原形動詞。點已放上的字可以收回。',
          items: [
            {
              cue: '你應該先問你的主管。',
              answer: ['You', 'should', 'ask', 'your', 'manager', 'first.'],
              why: { en: 'Should sits between the subject and the bare verb.', zh: 'should 放在主詞和原形動詞之間。' },
            },
            {
              cue: '我們今天不應該加班。',
              answer: ['We', 'should', 'not', 'work', 'late', 'today.'],
              why: { en: 'Not goes straight after should, exactly as it does after be.', zh: 'not 直接放在 should 後面，和 be 動詞後面一樣。' },
            },
            {
              cue: '他應該休息一天。',
              answer: ['He', 'should', 'take', 'a', 'day', 'off.'],
              why: { en: 'He changes nothing: should take, never should takes.', zh: 'he 不改變任何東西：should take，絕不是 should takes。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 13-2
    {
      n: '13-2',
      blocks: [
        {
          t: 'lead',
          en: 'The everyday way to say something is necessary. It behaves like an ordinary verb, which is exactly why it catches people out.',
          zh: '日常表達「必須」最常用的說法。它像普通動詞一樣變化——這正是它容易出錯的原因。',
        },
        {
          t: 'rule',
          en: 'Have to means the same as need to: something is necessary. Unlike should, it changes with the subject — has to after he, she or it — and it has a past form, had to.',
          zh: 'have to 的意思和 need to 一樣：某件事是必要的。跟 should 不同，它會隨主詞變化——he、she、it 後面用 has to——而且有過去式 had to。',
        },
        {
          t: 'forms',
          en: 'Have to, has to, had to',
          zh: 'have to、has to、had to',
          rows: [
            { sub: 'I', verb: 'have to', rest: 'finish the report.', zh: '我必須完成這份報告。' },
            { sub: 'You', verb: 'have to', rest: 'finish the report.', zh: '你必須完成這份報告。' },
            { sub: 'She', verb: 'has to', rest: 'finish the report.', zh: '她必須完成這份報告。', mark: true },
            { sub: 'He', verb: 'has to', rest: 'finish the report.', zh: '他必須完成這份報告。', mark: true },
            { sub: 'We', verb: 'have to', rest: 'finish the report.', zh: '我們必須完成這份報告。' },
            { sub: 'They', verb: 'have to', rest: 'finish the report.', zh: '他們必須完成這份報告。' },
            { sub: 'I / She / They — yesterday', verb: 'had to', rest: 'finish the report.', zh: '我／她／他們昨天必須完成那份報告。' },
          ],
        },
        {
          t: 'note',
          en: 'Has to, not have to',
          zh: 'he、she、it 用 has to',
          bodyEn: 'This is the one expression in the chapter that changes with the subject, because have to is an ordinary verb doing a modal’s job. Should, must and the rest never change.',
          bodyZh: '這是本章唯一會隨主詞變化的用法，因為 have to 其實是一個普通動詞在做助動詞的工作。should、must 等等都不會變。',
          good: ['My colleague has to leave at five.'],
          bad: ['My colleague have to leave at five.'],
        },
        {
          t: 'table',
          en: 'Questions and negatives borrow do, does and did',
          zh: '問句與否定要借 do、does、did',
          head: [
            { en: 'Subject', zh: '主詞' },
            { en: 'Now', zh: '現在' },
            { en: 'Yesterday', zh: '過去' },
          ],
          rows: [
            ['question — I, you, we, they', 'Do you have to leave now?', 'Did you have to leave early?'],
            ['question — he, she, it', 'Does Jim have to leave now?', 'Did Jim have to leave early?'],
            ['negative — I, you, we, they', 'I don’t have to work on Saturday.', 'I didn’t have to work on Saturday.'],
            ['negative — he, she, it', 'She doesn’t have to work on Saturday.', 'She didn’t have to work on Saturday.'],
          ],
          rowsZh: [
            ['問句——I、you、we、they', '', ''],
            ['問句——he、she、it', '', ''],
            ['否定——I、you、we、they', '', ''],
            ['否定——he、she、it', '', ''],
          ],
        },
        {
          t: 'note',
          en: 'Once do carries the tense, have to stops changing',
          zh: 'do 一旦扛起時態，have to 就不再變',
          bodyEn: 'Does and did already say who and when, so the next word goes back to have. Does she has to and didn’t had to are the two versions of the same slip.',
          bodyZh: 'does 和 did 已經表達了人稱與時間，所以後面就回到 have。does she has to 和 didn’t had to 是同一個錯誤的兩種版本。',
          good: ['Does she have to sign it?', 'They didn’t have to pay.'],
          bad: ['Does she has to sign it?', 'They didn’t had to pay.'],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'I have to send this before the end of the day.', zh: '我今天下班前必須把這個寄出去。' },
            { en: 'Jack has to study for his test.', zh: 'Jack 必須為考試唸書。' },
            { en: 'I had to work late last night.', zh: '我昨天晚上必須加班。' },
            { en: 'Do you have to leave now?', zh: '你現在就必須走了嗎？' },
            { en: 'The concert was free. We didn’t have to buy tickets.', zh: '那場演唱會免費，我們不用買票。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          items: [
            {
              text: 'Jim ___ work on Saturdays.',
              options: ['has to', 'have to', 'has'],
              answer: 0,
              why: { en: 'Jim is he, so has to. The to is part of the expression and cannot be dropped.', zh: 'Jim 等於 he，所以用 has to。to 是這個用法的一部分，不能省略。' },
            },
            {
              text: '___ you have to leave now?',
              options: ['Do', 'Are', 'Have'],
              answer: 0,
              why: { en: 'Have to makes questions with do, does or did — like an ordinary verb, not like be.', zh: 'have to 用 do／does／did 造問句——像普通動詞，不像 be 動詞。' },
            },
            {
              text: 'What time ___ she have to arrive?',
              options: ['does', 'do', 'is'],
              answer: 0,
              why: { en: 'She takes does, and the -s then lives on does rather than on have.', zh: 'she 搭配 does，-s 就落在 does 上，而不是 have 上。' },
            },
            {
              text: 'The tickets were free, so we ___ pay.',
              options: ['didn’t have to', 'hadn’t to', 'didn’t had to'],
              answer: 0,
              why: { en: 'Didn’t carries the past, so have goes back to its base form.', zh: 'didn’t 已經表示過去，所以 have 回到原形。' },
            },
            {
              text: 'I ___ study last night.',
              options: ['had to', 'have to', 'has to'],
              answer: 0,
              why: { en: 'Last night is past, and the past of have to is had to.', zh: 'last night 是過去，have to 的過去式是 had to。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '你現在必須離開嗎？',
              answer: ['Do', 'you', 'have', 'to', 'leave', 'now?'],
              why: { en: 'Do comes first, and have goes back to the base form behind it.', zh: 'do 放句首，後面的 have 回到原形。' },
            },
            {
              cue: '她星期六不必上班。',
              answer: ['She', 'doesn’t', 'have', 'to', 'work', 'on', 'Saturdays.'],
              why: { en: 'Doesn’t already carries the -s, so it is have to, not has to.', zh: 'doesn’t 已經帶了 -s，所以是 have to，不是 has to。' },
            },
            {
              cue: '我昨天必須加班。',
              answer: ['I', 'had', 'to', 'work', 'late', 'yesterday.'],
              why: { en: 'One word does the past: had to.', zh: '過去式只要一個字：had to。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 13-3
    {
      n: '13-3',
      blocks: [
        {
          t: 'lead',
          en: 'Three ways to press someone, at three strengths. Choosing the wrong one is not a grammar mistake — it is a tone mistake, and at work those are the expensive ones.',
          zh: '三種施加壓力的說法，強度各不相同。選錯不是文法錯誤，而是語氣錯誤——在職場上，這種錯誤代價更高。',
        },
        {
          t: 'rule',
          en: 'Must and have to mean basically the same thing: this is necessary. Must takes the base form, like should. What differs is where you meet them — have to in speech, must in written rules and instructions.',
          zh: 'must 與 have to 意思基本相同：這是必要的。must 後面接原形動詞，和 should 一樣。差別在使用場合——說話時用 have to，書面規則與說明文字用 must。',
        },
        {
          t: 'forms',
          en: 'Must + the base form',
          zh: 'must ＋ 原形動詞',
          rows: [
            { sub: 'I', verb: 'must', rest: 'work.', zh: '我必須工作。' },
            { sub: 'You', verb: 'must', rest: 'work.', zh: '你必須工作。' },
            { sub: 'She', verb: 'must', rest: 'work.', zh: '她必須工作。' },
            { sub: 'He', verb: 'must', rest: 'work.', zh: '他必須工作。' },
            { sub: 'We', verb: 'must', rest: 'work.', zh: '我們必須工作。' },
            { sub: 'They', verb: 'must', rest: 'work.', zh: '他們必須工作。' },
          ],
        },
        {
          t: 'note',
          en: 'Must is a modal, so it behaves like should',
          zh: 'must 是助動詞，行為和 should 一樣',
          bodyEn: 'No -s and no to, whatever the subject. The lookalike is have to, which does change — that is the whole difference between the two.',
          bodyZh: '不管主詞是誰，都不加 -s、不加 to。長得像的是 have to，而它會變化——這就是兩者唯一的差別。',
          good: ['He must work this weekend.', 'He has to work this weekend.'],
          bad: ['He must works this weekend.', 'He must to work this weekend.'],
        },
        {
          t: 'table',
          en: 'Where each one belongs',
          zh: '各自的使用場合',
          head: [
            { en: 'Word', zh: '用字' },
            { en: 'Where you meet it', zh: '出現的場合' },
          ],
          rows: [
            ['have to', 'spoken English — the normal choice with colleagues'],
            ['must', 'written rules, signs, instructions, contracts'],
            ['must (spoken)', 'very strong — an adult to a child, or a warning'],
          ],
          rowsZh: [
            ['', '口語英文——和同事說話時的正常選擇'],
            ['', '書面規則、標示、說明書、合約'],
            ['', '語氣很重——大人對小孩，或是警告'],
          ],
        },
        {
          t: 'contrast',
          en: 'Must against should',
          zh: 'must 與 should',
          hintEn: 'Must: it is necessary and there is no choice. Should: it is a good idea and there is a choice.',
          hintZh: 'must：必要，沒有選擇。should：好主意，有選擇。',
          pairs: [
            {
              a: { en: 'You must have a passport to board the plane.', zh: '要登機，你必須有護照。（沒有選擇）' },
              b: { en: 'You should keep a photo of your passport on your phone.', zh: '你應該在手機裡存一張護照照片。（好主意）' },
            },
            {
              a: { en: 'Every visitor must sign in at the front desk.', zh: '所有訪客都必須在前台登記。（規定）' },
              b: { en: 'You should arrive ten minutes early.', zh: '你應該提早十分鐘到。（建議）' },
            },
          ],
        },
        {
          t: 'table',
          en: 'The two negatives, and what each one does',
          zh: '兩個否定，各自的意思',
          head: [
            { en: 'Negative', zh: '否定形式' },
            { en: 'Meaning', zh: '意思' },
            { en: 'Example', zh: '例句' },
          ],
          rows: [
            ['must not / mustn’t', 'Do not do this. You have no choice.', 'You must not take calls in the meeting.'],
            ['don’t have to', 'It is not necessary. You have a choice.', 'You don’t have to come to the meeting.'],
          ],
          rowsZh: [
            ['', '不可以做這件事。你沒有選擇。', ''],
            ['', '不必要。你可以自己決定。', ''],
          ],
        },
        {
          t: 'note',
          en: 'Must not and don’t have to are opposites, not variations',
          zh: 'must not 與 don’t have to 是相反，不是同義',
          bodyEn: 'This is the costliest confusion in the chapter, because both sentences are correct English and only the meaning changes. Must not takes a choice away. Don’t have to hands one over. Said to a colleague, one forbids and the other excuses.',
          bodyZh: '這是本章代價最高的混淆，因為兩句英文都正確，只有意思不同。must not 是拿掉選擇，don’t have to 是給你選擇。對同事說出口時，一句是禁止，一句是不用。',
          good: [
            'You don’t have to stay late — go home.',
            'You must not stay in the building after ten.',
          ],
        },
        {
          t: 'egs',
          en: 'In use',
          zh: '例句',
          items: [
            { en: 'People need food. People have to eat.', zh: '人需要食物，人必須吃東西。' },
            { en: 'All staff must wear a badge in the building.', zh: '所有員工在大樓內必須佩戴識別證。' },
            { en: 'I have to send the invoice today.', zh: '我今天必須把發票寄出去。' },
            { en: 'You must not share the client’s data with anyone.', zh: '你絕對不可以把客戶的資料給任何人。' },
            { en: 'You don’t have to answer that email tonight.', zh: '你今晚不必回那封信。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the meaning you want',
          zh: '選出你要的意思',
          hintEn: 'Read the sentence in brackets first — it tells you which meaning is needed.',
          hintZh: '先看括號裡的說明，它告訴你需要哪個意思。',
          items: [
            {
              text: 'Passengers ___ smoke on the plane. (it is forbidden)',
              options: ['must not', 'don’t have to', 'should not'],
              answer: 0,
              why: { en: 'Forbidden, no choice — must not. Don’t have to would say smoking is simply optional.', zh: '禁止、沒有選擇——用 must not。用 don’t have to 會變成「抽菸可有可無」。' },
            },
            {
              text: 'You ___ come to the party if you are tired. (it is not necessary)',
              options: ['don’t have to', 'must not', 'should not'],
              answer: 0,
              why: { en: 'Not necessary, and the choice is theirs — don’t have to. Must not would forbid them.', zh: '不必要，選擇在對方——用 don’t have to。用 must not 就變成禁止他來。' },
            },
            {
              text: 'Everyone ___ a badge in the building. (a written rule)',
              options: ['must wear', 'must wears', 'must to wear'],
              answer: 0,
              why: { en: 'Must takes the base form. A written rule is exactly where must belongs.', zh: 'must 接原形動詞。書面規則正是 must 的場合。' },
            },
            {
              text: 'It is a good idea, but it is your choice: you ___ take the earlier train.',
              options: ['should', 'must', 'have to'],
              answer: 0,
              why: { en: 'A choice means advice, and advice is should.', zh: '有選擇就是建議，建議用 should。' },
            },
            {
              text: 'Talking to a colleague, the natural way to say it is: I ___ go now.',
              options: ['have to', 'must', 'am must'],
              answer: 0,
              why: { en: 'Both are grammatical, but must in speech is very strong. Have to is what a colleague expects to hear.', zh: '兩句文法都對，但口語的 must 語氣很重。同事之間會期待聽到 have to。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '你在會議中不可以接電話。',
              answer: ['You', 'must', 'not', 'take', 'calls', 'in', 'the', 'meeting.'],
              why: { en: 'Not goes after must, and the verb stays bare.', zh: 'not 放在 must 後面，動詞維持原形。' },
            },
            {
              cue: '你明天不必早到。',
              answer: ['You', 'don’t', 'have', 'to', 'come', 'early', 'tomorrow.'],
              why: { en: 'Don’t have to — not necessary. This sentence gives a choice; the one above removes one.', zh: 'don’t have to——不必要。這句給對方選擇，上一句則是拿掉選擇。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 13-4
    {
      n: '13-4',
      blocks: [
        {
          t: 'lead',
          en: 'Asking for something for yourself. All three mean the same thing; what changes is how formal you sound.',
          zh: '為自己提出請求。三種說法意思相同，差別只在你聽起來有多正式。',
        },
        {
          t: 'rule',
          en: 'May I, could I and can I all ask permission to do something yourself. Could is more polite and formal than can, and may is very polite and formal. Adding please makes any of them more polite.',
          zh: 'may I、could I、can I 都是請求「讓我做某件事」的許可。could 比 can 客氣、正式；may 最客氣、最正式。加上 please 會讓任何一句更客氣。',
        },
        {
          t: 'table',
          en: 'The same request, three registers',
          zh: '同一個請求，三種正式程度',
          head: [
            { en: 'Asking', zh: '說法' },
            { en: 'How it sounds', zh: '聽起來的感覺' },
          ],
          rows: [
            ['Can I borrow your charger?', '一般、輕鬆；同事之間的日常說法'],
            ['Could I borrow your charger?', '較客氣、較正式；對客戶或不熟的人'],
            ['May I borrow your charger?', '最正式、最客氣'],
            ['May I please borrow your charger?', '加了 please，更客氣'],
          ],
          zhCol: 1,
        },
        {
          t: 'note',
          en: 'Can I is not wrong',
          zh: 'can I 並沒有錯',
          bodyEn: 'Learners are often told can I is incorrect and only may I is proper. That is not true — can I is simply the least formal of the three, and with a colleague it is the normal choice. Save could I and may I for a client, a stranger, or anyone senior.',
          bodyZh: '很多學習者被教成 can I 是錯的、只有 may I 才正確。這並不成立——can I 只是三者中最不正式的，和同事說話時它就是正常選擇。could I 與 may I 留給客戶、陌生人或層級較高的人。',
          good: ['Can I borrow your charger?', 'Could I borrow your charger?', 'May I borrow your charger?'],
        },
        {
          t: 'table',
          en: 'Typical responses',
          zh: '常見的回應',
          head: [
            { en: 'Response', zh: '回應' },
            { en: 'When to use it', zh: '使用時機' },
          ],
          rows: [
            ['Yes, of course.', '通用，最安全'],
            ['Of course.', '通用'],
            ['Certainly.', '正式；服務場合常用'],
            ['Sure.', '非正式：朋友、家人、熟同事'],
            ['No problem.', '非正式'],
          ],
          zhCol: 1,
        },
        {
          t: 'egs',
          en: 'A typical exchange',
          zh: '一段典型對話',
          items: [
            { en: 'A: May I please use your printer?', zh: 'A：我可以借用你的印表機嗎？' },
            { en: 'B: Yes, of course. It is on.', zh: 'B：當然可以，它開著。' },
            { en: 'A: Thank you.', zh: 'A：謝謝。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          items: [
            {
              text: '___ I please see the contract?',
              options: ['May', 'Do', 'Am'],
              answer: 0,
              why: { en: 'May, could and can start these questions. They are modals, so no do and no be.', zh: '這種問句用 may、could、can 開頭。它們是助動詞，不用 do，也不用 be。' },
            },
            {
              text: 'Speaking to a client you have never met, the safest choice is ___.',
              options: ['Could I', 'Can I', 'I can'],
              answer: 0,
              why: { en: 'Could I is more polite and formal than can I. I can is a statement, not a question.', zh: 'could I 比 can I 客氣正式。I can 是陳述句，不是問句。' },
            },
            {
              text: 'A: Could I borrow your pen? B: ___',
              options: ['Yes, of course.', 'Yes, I could.', 'Yes, you could.'],
              answer: 0,
              why: { en: 'A polite request is answered with a set phrase, not by repeating the modal.', zh: '客氣的請求用固定說法回應，不是把助動詞重複一次。' },
            },
            {
              text: 'Which is the most formal?',
              options: ['May I', 'Could I', 'Can I'],
              answer: 0,
              why: { en: 'May is very polite and formal, could is in the middle, can is the most everyday.', zh: 'may 最客氣正式，could 居中，can 最日常。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '我可以看一下合約嗎？（最正式）',
              answer: ['May', 'I', 'please', 'see', 'the', 'contract?'],
              why: { en: 'Please sits between I and the verb. May I please see is the most formal shape.', zh: 'please 放在 I 和動詞之間。may I please see 是最正式的形式。' },
            },
            {
              cue: '我可以借你的充電器嗎？',
              answer: ['Could', 'I', 'borrow', 'your', 'charger?'],
              why: { en: 'The modal comes first, then I, then the bare verb.', zh: '助動詞放最前面，接著 I，然後原形動詞。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 13-5
    {
      n: '13-5',
      blocks: [
        {
          t: 'lead',
          en: 'Same politeness, opposite direction: now you are asking the other person to do the work.',
          zh: '客氣程度一樣，方向相反：現在你是請對方動手。',
        },
        {
          t: 'rule',
          en: 'Could you and would you both ask someone else to do something, and they have the same meaning. Please is optional, and it can go after you or at the end of the sentence.',
          zh: 'could you 與 would you 都是請對方做某件事，意思相同。please 可加可不加，可以放在 you 後面，也可以放在句尾。',
        },
        {
          t: 'contrast',
          en: 'Who does the work',
          zh: '誰動手',
          hintEn: 'One word decides whether you are asking for permission or asking a favour. This is the distinction that gets missed, because both sentences are polite and both are correct.',
          hintZh: '一個字決定你是在請求許可，還是在請人幫忙。這個差別最容易被忽略，因為兩句都很客氣、也都正確。',
          pairs: [
            {
              a: { en: 'Could I open the window?', zh: '我可以開窗嗎？（我開）' },
              b: { en: 'Could you open the window?', zh: '你可以開窗嗎？（你開）' },
            },
            {
              a: { en: 'May I send the file?', zh: '我可以寄這個檔案嗎？（我寄）' },
              b: { en: 'Would you send the file?', zh: '你可以寄這個檔案嗎？（你寄）' },
            },
          ],
        },
        {
          t: 'note',
          en: 'Would here has nothing to do with the past',
          zh: '這裡的 would 和過去完全無關',
          bodyEn: 'Would is the past of will elsewhere, but in a request it carries no past meaning at all. Would you check this? is about right now.',
          bodyZh: 'would 在別的地方是 will 的過去式，但在請求句裡完全沒有過去的意思。Would you check this? 講的是現在。',
          good: ['Would you check this before I send it?'],
        },
        {
          t: 'table',
          en: 'Typical responses',
          zh: '常見的回應',
          head: [
            { en: 'Response', zh: '回應' },
            { en: 'When to use it', zh: '使用時機' },
          ],
          rows: [
            ['Yes, of course.', '通用，最安全'],
            ['Certainly.', '正式'],
            ['I’d be glad to.', '客氣，表示樂意'],
            ['I’d be happy to.', '客氣，表示樂意'],
            ['Sure.', '非正式'],
            ['No problem.', '非正式'],
          ],
          zhCol: 1,
        },
        {
          t: 'egs',
          en: 'A typical exchange',
          zh: '一段典型對話',
          items: [
            { en: 'A: Could you please open the door?', zh: 'A：可以請你把門打開嗎？' },
            { en: 'B: I’d be glad to.', zh: 'B：我很樂意。' },
            { en: 'A: Thank you.', zh: 'A：謝謝。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          items: [
            {
              text: '___ you please send me the file?',
              options: ['Could', 'Do', 'Should'],
              answer: 0,
              why: { en: 'Could you and would you make polite requests. Should you asks for advice, which is a different question.', zh: 'could you 與 would you 用於客氣請求。should you 是徵詢建議，是另一種問句。' },
            },
            {
              text: 'You want the other person to open the door. You say:',
              options: ['Could you open the door?', 'Could I open the door?', 'I could open the door.'],
              answer: 0,
              why: { en: 'You is the one doing it, so could you. Could I would be asking permission to open it yourself.', zh: '動手的是對方，所以用 could you。could I 是請求讓自己去開。' },
            },
            {
              text: 'A: Would you check this? B: ___',
              options: ['I’d be glad to.', 'Yes, I would.', 'Yes, you would.'],
              answer: 0,
              why: { en: 'A request is answered with a set phrase. Yes, I would sounds like an answer to a different question.', zh: '請求用固定說法回應。Yes, I would 聽起來像在回答別的問題。' },
            },
            {
              text: 'In Would you open the window?, would refers to ___.',
              options: ['now — it is a request', 'yesterday', 'a habit in the past'],
              answer: 0,
              why: { en: 'The past meaning of would is switched off in a request. This is about the present moment.', zh: '在請求句裡，would 的過去意思是關掉的。這句講的是當下。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '可以請你幫我看一下這封信嗎？',
              answer: ['Could', 'you', 'please', 'check', 'this', 'email?'],
              why: { en: 'Please goes between you and the verb, exactly where it went after I in 13-4.', zh: 'please 放在 you 和動詞之間，和 13-4 裡放在 I 後面的位置一樣。' },
            },
            {
              cue: '你可以把窗戶打開嗎？',
              answer: ['Would', 'you', 'open', 'the', 'window?'],
              why: { en: 'Would you plus the bare verb. No please needed, and no past meaning.', zh: 'would you ＋ 原形動詞。不必加 please，也沒有過去的意思。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 13-6
    {
      n: '13-6',
      blocks: [
        {
          t: 'lead',
          en: 'The shortest sentence English has: just the verb.',
          zh: '英文最短的句子：只有動詞。',
        },
        {
          t: 'rule',
          en: 'An imperative sentence gives the bare verb with no subject in front of it. The subject is you, understood and never said. The negative is don’t plus the same bare verb.',
          zh: '祈使句只給原形動詞，前面沒有主詞。主詞是 you，是心裡有數但不說出來的。否定是 don’t 加上同一個原形動詞。',
        },
        {
          t: 'forms',
          en: 'The subject is you, and it is never said',
          zh: '主詞是 you，但永遠不說出來',
          rows: [
            { sub: '(You)', verb: 'Close', rest: 'the door.', zh: '把門關上。' },
            { sub: '(You)', verb: 'Sit', rest: 'down.', zh: '請坐。' },
            { sub: '(You)', verb: 'Be', rest: 'careful.', zh: '小心。' },
            { sub: '(You)', verb: 'Don’t open', rest: 'the window.', zh: '不要開窗。', mark: true },
            { sub: '(You)', verb: 'Don’t be', rest: 'late.', zh: '不要遲到。', mark: true },
          ],
        },
        {
          t: 'note',
          en: 'Be is the one to watch',
          zh: 'be 是要特別注意的那一個',
          bodyEn: 'Be careful and Don’t be late are the imperative forms of be — the base form, which is why it looks unlike anything in Chapter 1. Are careful is not an imperative.',
          bodyZh: 'Be careful 與 Don’t be late 是 be 的祈使形式——原形，所以它看起來和第一章的任何形式都不一樣。Are careful 不是祈使句。',
          good: ['Be careful.', 'Don’t be late.'],
          bad: ['Are careful.', 'Don’t are late.'],
        },
        {
          t: 'table',
          en: 'One form, five jobs',
          zh: '一種形式，五種用途',
          head: [
            { en: 'What it does', zh: '用途' },
            { en: 'Example', zh: '例句' },
          ],
          rows: [
            ['an order', 'Stop!'],
            ['directions', 'Turn left at the lights.'],
            ['instructions', 'Open the file and check page two.'],
            ['advice', 'Don’t worry.'],
            ['a request, with please', 'Please close the door.'],
          ],
          rowsZh: [
            ['命令', '站住！'],
            ['指路', '在紅綠燈左轉。'],
            ['操作說明', '打開檔案，看第二頁。'],
            ['建議', '別擔心。'],
            ['請求，加 please', '請把門關上。'],
          ],
        },
        {
          t: 'note',
          en: 'An imperative is not rude, but it is bare',
          zh: '祈使句不算沒禮貌，但它很赤裸',
          bodyEn: 'The same three words can be an instruction or an order, and only please and your tone separate them. To a colleague, Send me the file is fine in a hurry and cold in an email; with please it is neither.',
          bodyZh: '同樣三個字，可以是說明，也可以是命令，分別只在 please 和語氣。對同事說 Send me the file，趕的時候沒問題，寫在信裡卻很冷；加上 please 就兩者都不是。',
          good: ['Please send me the file when you can.', 'Could you send me the file?'],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          items: [
            {
              text: '___ late.',
              options: ['Don’t be', 'Not be', 'Be not'],
              answer: 0,
              why: { en: 'A negative imperative is don’t plus the base form, even when the verb is be.', zh: '否定祈使句是 don’t 加原形動詞，動詞是 be 也一樣。' },
            },
            {
              text: '___ down, please.',
              options: ['Sit', 'Sits', 'To sit'],
              answer: 0,
              why: { en: 'The base form alone. No -s, because there is no subject to agree with.', zh: '只用原形。不加 -s，因為沒有主詞需要一致。' },
            },
            {
              text: 'The subject of Close the door. is ___.',
              options: ['you, understood', 'the door', 'nobody at all'],
              answer: 0,
              why: { en: 'Close the door means (You) close the door. The subject is there in the meaning, just not on the page.', zh: 'Close the door 等於 (You) close the door。主詞在意思裡，只是沒寫出來。' },
            },
            {
              text: '___ open the window — it is cold in here.',
              options: ['Don’t', 'No', 'Not'],
              answer: 0,
              why: { en: 'Don’t is the negative imperative. No marks a quantity or answers a question; it cannot negate a verb.', zh: 'don’t 是否定祈使。no 表示數量或回答問句，不能否定動詞。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '請把門關上。',
              answer: ['Please', 'close', 'the', 'door.'],
              why: { en: 'No subject at all. Please can open the sentence or close it: Close the door, please.', zh: '完全沒有主詞。please 可以放句首，也可以放句尾：Close the door, please.' },
            },
            {
              cue: '開會不要遲到。',
              answer: ['Don’t', 'be', 'late', 'for', 'the', 'meeting.'],
              why: { en: 'Don’t, then the base form be. Not Don’t are and not Be not.', zh: 'don’t，然後是原形 be。不是 Don’t are，也不是 Be not。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 13-7
    {
      n: '13-7',
      blocks: [
        {
          t: 'lead',
          en: 'The whole family in one place, and the line that runs through the middle of it.',
          zh: '把整個家族放在一起看，以及貫穿中間的那條界線。',
        },
        {
          t: 'rule',
          en: 'An auxiliary is a helping verb: it stands in front of the base form of the main verb. Can, could, may, might, must, should, will and would are modal auxiliaries. Be able to, be going to and have to do the same job but are not modals — and that shows up in the form.',
          zh: '助動詞是幫忙的動詞：它站在主要動詞原形的前面。can、could、may、might、must、should、will、would 是情態助動詞。be able to、be going to、have to 做同樣的工作，但不是助動詞——而這一點會在形式上顯現出來。',
        },
        {
          t: 'forms',
          en: 'The eight modals — the subject and the verb never move',
          zh: '八個情態助動詞——主詞與動詞都不變',
          rows: [
            { sub: 'Anita', verb: 'can', rest: 'go to class.', zh: 'Anita 能去上課。' },
            { sub: 'Anita', verb: 'could', rest: 'go to class.', zh: 'Anita 那時能去上課。' },
            { sub: 'Anita', verb: 'may', rest: 'go to class.', zh: 'Anita 可能會去上課。' },
            { sub: 'Anita', verb: 'might', rest: 'go to class.', zh: 'Anita 可能會去上課。' },
            { sub: 'Anita', verb: 'must', rest: 'go to class.', zh: 'Anita 必須去上課。' },
            { sub: 'Anita', verb: 'should', rest: 'go to class.', zh: 'Anita 應該去上課。' },
            { sub: 'Anita', verb: 'will', rest: 'go to class.', zh: 'Anita 會去上課。' },
            { sub: 'Anita', verb: 'would', rest: 'go to class.', zh: 'Anita 會去上課（客氣或假設）。' },
          ],
        },
        {
          t: 'forms',
          en: 'The three lookalikes — these do change with the subject',
          zh: '三個長得像的——這些會隨主詞變化',
          rows: [
            { sub: 'Anita', verb: 'is able to', rest: 'go to class.', zh: 'Anita 有辦法去上課。', mark: true },
            { sub: 'I', verb: 'am able to', rest: 'go to class.', zh: '我有辦法去上課。', mark: true },
            { sub: 'Anita', verb: 'is going to', rest: 'go to class.', zh: 'Anita 打算去上課。', mark: true },
            { sub: 'Anita', verb: 'has to', rest: 'go to class.', zh: 'Anita 必須去上課。', mark: true },
            { sub: 'They', verb: 'have to', rest: 'go to class.', zh: '他們必須去上課。', mark: true },
          ],
        },
        {
          t: 'note',
          en: 'A modal never takes -s and never takes to',
          zh: '情態助動詞不加 -s，也不加 to',
          bodyEn: 'This is why the modals are the easy half of the chapter: no third-person -s, no to, no -ing form. The three lookalikes are the ones that move, because they are built out of ordinary verbs.',
          bodyZh: '這就是為什麼情態助動詞是本章比較簡單的一半：沒有第三人稱 -s、沒有 to、沒有 -ing。會變的是那三個長得像的，因為它們是用普通動詞組成的。',
          good: ['Anita should call the client.', 'Anita has to call the client.'],
          bad: ['Anita shoulds call the client.', 'Anita should to call the client.', 'Anita have to call the client.'],
        },
        {
          t: 'note',
          en: 'Two modals cannot sit together',
          zh: '兩個情態助動詞不能放在一起',
          bodyEn: 'Written for this page, because the mistake is common and the chart does not mention it. One modal per verb: to say two of these ideas at once, one of them has to become a lookalike.',
          bodyZh: '這一段是為本頁寫的，因為這個錯誤很常見，而原表格沒有提到。一個動詞只能配一個情態助動詞：要同時表達兩個意思，其中一個必須改用那三個長得像的說法。',
          good: ['She will be able to come next week.', 'She is going to have to decide.'],
          bad: ['She will can come next week.', 'She will must decide.'],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          items: [
            {
              text: 'Anita ___ to class.',
              options: ['should go', 'shoulds go', 'should to go'],
              answer: 0,
              why: { en: 'Should is a modal: no -s on it, and no to after it.', zh: 'should 是情態助動詞：本身不加 -s，後面也不加 to。' },
            },
            {
              text: 'Anita ___ to class. (necessity, using a lookalike)',
              options: ['has to go', 'have to go', 'has go'],
              answer: 0,
              why: { en: 'Anita is she, and have to is the one expression here that agrees with its subject.', zh: 'Anita 等於 she，而 have to 是這裡唯一會跟主詞一致的用法。' },
            },
            {
              text: 'She ___ come tomorrow. (future and ability together)',
              options: ['will be able to', 'will can', 'can will'],
              answer: 0,
              why: { en: 'Two modals cannot stack, so can becomes be able to and will keeps the front position.', zh: '兩個情態助動詞不能疊在一起，所以 can 改成 be able to，will 留在前面。' },
            },
            {
              text: 'Which one is NOT a modal auxiliary?',
              options: ['have to', 'should', 'might'],
              answer: 0,
              why: { en: 'Have to is a similar expression, not a modal — which is exactly why it changes to has to and had to.', zh: 'have to 是類似的用法，不是情態助動詞——這正是它會變成 has to 和 had to 的原因。' },
            },
            {
              text: 'A modal auxiliary is followed by ___.',
              options: ['the base form', 'to + verb', 'the -ing form'],
              answer: 0,
              why: { en: 'The base form, every time. That single rule covers all eight of them.', zh: '每次都是原形。這一條規則涵蓋全部八個。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '她明天可能會打電話給你。',
              answer: ['She', 'might', 'call', 'you', 'tomorrow.'],
              why: { en: 'Subject, modal, bare verb. Might does not change for she.', zh: '主詞、情態助動詞、原形動詞。might 不會因為 she 而改變。' },
            },
            {
              cue: '他下週就能來了。',
              answer: ['He', 'will', 'be', 'able', 'to', 'come', 'next', 'week.'],
              why: { en: 'Will keeps the modal position; the ability idea has to arrive as be able to.', zh: 'will 佔住情態助動詞的位置；「能力」的意思只能用 be able to 表達。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 13-8
    {
      n: '13-8',
      blocks: [
        {
          t: 'lead',
          en: 'Everything from Chapters 11 to 13 on one page, which is what you want in front of you at the moment of choosing.',
          zh: '第十一章到第十三章的內容整理成一頁，正是你在「要選哪一個」的那一刻需要放在眼前的東西。',
        },
        {
          t: 'rule',
          en: 'Each auxiliary does more than one job, so the meaning column is the one to read. Where two words share a meaning, they are not always interchangeable — the sections above say when.',
          zh: '每個助動詞都不只做一件事，所以「意思」那一欄才是重點。兩個字意思相同時，並不一定能互換——上面各節說明了何時可以。',
        },
        {
          t: 'table',
          en: 'Modal auxiliaries and similar expressions',
          zh: '情態助動詞與類似用法',
          head: [
            { en: 'Auxiliary', zh: '助動詞' },
            { en: 'Meaning', zh: '意思' },
            { en: 'Example', zh: '例句' },
          ],
          rows: [
            ['can', 'ability', 'I can read a contract in English.'],
            ['can', 'polite question', 'Can you help me with this?'],
            ['could', 'past ability', 'I couldn’t join the call yesterday.'],
            ['could', 'polite question', 'Could you send me the file?'],
            ['may', 'possibility', 'It may rain tomorrow.'],
            ['may', 'polite question — permission', 'May I see the report?'],
            ['might', 'possibility', 'It might rain tomorrow.'],
            ['must', 'necessity', 'You must have a passport.'],
            ['must not', 'prohibition — added here', 'You must not share the file.'],
            ['should', 'advisability', 'You should see a doctor.'],
            ['will', 'future event', 'I will call you at three.'],
            ['would', 'polite question', 'Would you open the door?'],
            ['be able to', 'ability', 'I wasn’t able to attend the meeting.'],
            ['be going to', 'future event', 'Tina is going to meet us at the airport.'],
            ['have to / has to', 'necessity', 'I have to study tonight.'],
            ['don’t have to', 'no necessity — added here', 'You don’t have to come.'],
            ['had to', 'past necessity', 'I had to study last night too.'],
          ],
          rowsZh: [
            ['', '能力', ''],
            ['', '客氣問句', ''],
            ['', '過去的能力', ''],
            ['', '客氣請求', ''],
            ['', '可能性', ''],
            ['', '客氣問句——請求許可', ''],
            ['', '可能性', ''],
            ['', '必要', ''],
            ['', '禁止——本頁增列', ''],
            ['', '建議、值得做', ''],
            ['', '未來的事', ''],
            ['', '客氣請求', ''],
            ['', '能力', ''],
            ['', '未來的事', ''],
            ['', '必要', ''],
            ['', '不必要——本頁增列', ''],
            ['', '過去的必要', ''],
          ],
        },
        {
          t: 'note',
          en: 'Two rows the book’s chart does not have',
          zh: '原表格沒有的兩列',
          bodyEn: 'Must not and don’t have to were added to this table. The chart lists must and have to only, and for a reader of this page those two negatives are the pair most worth having side by side — see 13-3 for why.',
          bodyZh: 'must not 與 don’t have to 是本表增列的。原表格只列 must 與 have to，而對本頁的讀者來說，這兩個否定最值得並排放在一起——原因見 13-3。',
          good: ['You must not share the file. — forbidden.', 'You don’t have to come. — not necessary.'],
        },
        {
          t: 'mcq',
          en: 'Mixed drill',
          zh: '綜合練習',
          hintEn: 'No section heading to help here, which is the point — this is how the choice arrives in real life.',
          hintZh: '這裡沒有小節標題可以幫你，這正是重點——真實情境裡就是這樣遇到選擇的。',
          items: [
            {
              text: 'I ___ join the meeting yesterday — I was on a plane.',
              options: ['wasn’t able to', 'am not able to', 'don’t able to'],
              answer: 0,
              why: { en: 'Yesterday needs the past, and be able to makes its past on be: wasn’t able to.', zh: 'yesterday 需要過去式，而 be able to 的過去式變在 be 上：wasn’t able to。' },
            },
            {
              text: 'You ___ have a passport to board the plane.',
              options: ['must', 'must to', 'musts'],
              answer: 0,
              why: { en: 'Must is a modal: no to, no -s. And a rule at an airport is exactly where must belongs.', zh: 'must 是情態助動詞：不加 to、不加 -s。機場的規定正是 must 的場合。' },
            },
            {
              text: 'Tina ___ meet us at the airport.',
              options: ['is going to', 'is going', 'goes to'],
              answer: 0,
              why: { en: 'Be going to is one expression and the to is part of it.', zh: 'be going to 是一個完整用法，to 是它的一部分。' },
            },
            {
              text: 'I ___ work late last night.',
              options: ['had to', 'have to', 'must'],
              answer: 0,
              why: { en: 'Last night is past. Must has no past form at all, which is why had to exists.', zh: 'last night 是過去。must 根本沒有過去式，這就是 had to 存在的原因。' },
            },
            {
              text: 'It ___ rain tomorrow, so take an umbrella.',
              options: ['might', 'musts', 'shoulds'],
              answer: 0,
              why: { en: 'Might is possibility. The other two are modals with an -s stuck on, which never happens.', zh: 'might 表示可能性。另外兩個是硬加了 -s 的助動詞，這種形式不存在。' },
            },
          ],
        },
      ],
    },

    // ============================================================== 13-9
    {
      n: '13-9',
      blocks: [
        {
          t: 'lead',
          en: 'A suggestion that includes you: not what you should do, but what we should do.',
          zh: '把自己也算進去的提議：不是「你」該做什麼，而是「我們」該做什麼。',
        },
        {
          t: 'rule',
          en: 'Let’s is short for let us. It makes a suggestion for the speaker and the listener together, and it takes the base form of a verb. Let’s take a break means I think we should take a break — do you want to?',
          zh: 'let’s 是 let us 的縮寫。它為說話者和聽話者一起提出建議，後面接原形動詞。Let’s take a break 的意思是「我覺得我們應該休息一下——你要嗎？」',
        },
        {
          t: 'forms',
          en: 'Let’s + the base form',
          zh: 'let’s ＋ 原形動詞',
          rows: [
            { sub: 'Let’s', verb: 'take', rest: 'a break.', zh: '我們休息一下吧。' },
            { sub: 'Let’s', verb: 'start', rest: 'with the numbers.', zh: '我們從數字開始吧。' },
            { sub: 'Let’s', verb: 'go', rest: 'to a movie.', zh: '我們去看電影吧。' },
            { sub: 'Let’s not', verb: 'decide', rest: 'this today.', zh: '這件事我們今天先不要決定。', mark: true },
          ],
        },
        {
          t: 'contrast',
          en: 'Should against let’s',
          zh: 'should 與 let’s',
          hintEn: 'Should tells the other person what is a good idea. Let’s invites them into it. The second is much harder to refuse, which is why it is the more useful one in a meeting.',
          hintZh: 'should 是告訴對方什麼是好主意，let’s 是邀請對方一起做。後者難拒絕得多，所以在會議裡更好用。',
          pairs: [
            {
              a: { en: 'You should take a break.', zh: '你應該休息一下。（你）' },
              b: { en: 'Let’s take a break.', zh: '我們休息一下吧。（我們一起）' },
            },
            {
              a: { en: 'We should start with the numbers.', zh: '我們應該從數字開始。（陳述意見）' },
              b: { en: 'Let’s start with the numbers.', zh: '我們從數字開始吧。（提出邀請）' },
            },
          ],
        },
        {
          t: 'note',
          en: 'The negative is let’s not, and the chart does not show it',
          zh: '否定是 let’s not，原表格沒有列出',
          bodyEn: 'Written for this page. The negative is let’s not plus the base form. Let’s don’t is heard in informal American speech, but let’s not is what to write and what to say at work.',
          bodyZh: '這一段是為本頁寫的。否定是 let’s not 加原形動詞。let’s don’t 在美式口語中聽得到，但書寫和職場上請用 let’s not。',
          good: ['Let’s not rush this.', 'Let’s not decide today.'],
          bad: ['Let’s not to rush this.', 'Let’s not rushing this.'],
        },
        {
          t: 'egs',
          en: 'A typical exchange',
          zh: '一段典型對話',
          items: [
            { en: 'A: What should we do about the deadline?', zh: 'A：期限的事我們該怎麼辦？' },
            { en: 'B: Let’s ask for one more week.', zh: 'B：我們去多要一個星期吧。' },
            { en: 'A: That is a good idea.', zh: 'A：這是個好主意。' },
          ],
        },
        {
          t: 'mcq',
          en: 'Choose the form',
          zh: '選出正確形式',
          items: [
            {
              text: '___ take a break.',
              options: ['Let’s', 'Lets', 'Let’s to'],
              answer: 0,
              why: { en: 'The apostrophe stands for the missing u of us. Lets without it is a different verb altogether.', zh: '那個撇號代表被省略的 us 的 u。沒有撇號的 lets 是完全不同的動詞。' },
            },
            {
              text: 'Let’s ___ with the numbers.',
              options: ['start', 'starts', 'starting'],
              answer: 0,
              why: { en: 'The base form, as after every modal in this chapter.', zh: '原形動詞，和本章每個助動詞後面一樣。' },
            },
            {
              text: 'Let’s means ___.',
              options: ['let us', 'let is', 'let as'],
              answer: 0,
              why: { en: 'Let us — which is why the suggestion includes the speaker.', zh: 'let us——這就是為什麼這個提議包含說話者自己。' },
            },
            {
              text: 'The negative of Let’s go is ___.',
              options: ['Let’s not go', 'Let’s no go', 'Not let’s go'],
              answer: 0,
              why: { en: 'Not goes straight after let’s, and the verb stays bare.', zh: 'not 直接放在 let’s 後面，動詞維持原形。' },
            },
          ],
        },
        {
          t: 'order',
          en: 'Put it in order',
          zh: '排出正確語序',
          items: [
            {
              cue: '我們休息一下吧。',
              answer: ['Let’s', 'take', 'a', 'break.'],
              why: { en: 'No subject and no to. Let’s already contains us.', zh: '沒有主詞，也沒有 to。let’s 裡面已經有 us 了。' },
            },
            {
              cue: '這件事我們今天先不要決定吧。',
              answer: ['Let’s', 'not', 'decide', 'this', 'today.'],
              why: { en: 'Let’s not, then the bare verb — the same shape as should not.', zh: 'let’s not，然後原形動詞——和 should not 的結構一樣。' },
            },
          ],
        },
      ],
    },
  ],
};
