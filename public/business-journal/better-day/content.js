/* 國際商業期刊導讀 No. 2 — Protocols for a Better Day.

   Built from Lewis's own B1–B2 handout (Lewis Biz English · 路老師), which
   retells an interview with neuroscientist Andrew Huberman. The reading is
   the handout's own text, so unlike No. 1 it appears in full. What the page
   adds to the handout: glosses on eleven harder words in the passage, example
   sentences for the eight useful phrases, sentence starters for the warm-up,
   prompts and frames for the two speaking tasks, and a Chinese line for every
   English sentence. Answers come from the handout's own key.

   The handout's disclaimer travels with it, on the cover: these are one
   scientist's views from a media interview, some are debated, and nothing
   here is medical advice.

   Every visible string is an `en` / `zh` pair. English is shown; the
   Traditional Chinese stays hidden until it is asked for.

     {{double braces}}  in a passage paragraph mark a word that opens a gloss;
                        the word must match a `term` in that block's glossary
                        exactly, or it renders as plain text.
     text → textZh      a gap sentence; the Chinese is a complete sentence with
                        the answer in it, so its 中 tap is a hint that gives it.
*/

const LESSON = {
  id: 'better-day',           // must match its entry in ../course.js
  title: 'Protocols for a Better Day',
  titleZh: '每日方案：讓一天變得更好的科學',
  level: 'B1–B2',

  photo: {
    src: 'img/hero.jpg',
    alt: 'A hand opening window blinds onto bright morning sunlight',
    by: 'Maxim Sharypov',
    pos: '50% 50%',
  },

  source: {
    en: 'Adapted for class from an interview with neuroscientist Andrew Huberman on daily health protocols. This lesson is for English-language learning: the health claims are one scientist’s views, as given in a media interview, some remain debated, and nothing here is medical advice.',
    zh: '課堂改編自神經科學家 Andrew Huberman 談日常健康方案的訪談。本課僅供英語學習使用：文中健康主張為受訪科學家於媒體訪談中的個人觀點，部分仍有爭議，不構成醫療建議。',
  },

  intro: {
    en: 'Neuroscientist Andrew Huberman describes ten daily habits — he calls them protocols — that he says make the biggest difference to physical and mental health, and most of them are free. This lesson reads his ten, then practises the language of giving advice. Allow sixty to seventy-five minutes.',
    zh: '神經科學家 Andrew Huberman 提出十個日常習慣——他稱之為「方案」——並認為這些習慣對身心健康影響最大，而且大多免費。這堂課先讀這十個方案，再練習給建議的英文。建議時間為六十到七十五分鐘。',
    goalsEn: 'By the end of this lesson you will be able to:',
    goalsZh: '完成這堂課後，你將能夠：',
    goals: [
      { en: 'read a short article on daily health habits and answer questions about it', zh: '讀懂一篇關於日常健康習慣的短文，並回答相關問題' },
      { en: 'use twelve key words and eight useful phrases about sleep, stress and energy', zh: '運用十二個核心單字與八個實用片語，談論睡眠、壓力與精力' },
      { en: 'give advice at the right strength, from “It’s worth…” to “Make sure you…”', zh: '用合適的語氣強度給建議，從 It’s worth… 到 Make sure you…' },
      { en: 'present one low-cost change to a manager in two minutes', zh: '在兩分鐘內向主管提出一項低成本的改變' },
    ],
  },

  steps: [
    // ================================================================ 1
    {
      id: 'before',
      n: 1,
      en: 'Before You Read',
      zh: '暖身討論',
      blocks: [
        {
          t: 'discuss',
          en: 'Talk with a partner',
          zh: '和夥伴討論以下問題',
          items: [
            {
              en: 'What is the first thing you do after you wake up?',
              zh: '你起床後做的第一件事是什麼？',
              starters: [
                { en: 'The first thing I do is ___ , usually before I even get up.', zh: '我做的第一件事是＿＿，通常我還沒下床就做了。' },
                { en: 'Honestly, the first thing I reach for is ___ .', zh: '老實說，我第一個伸手去拿的是＿＿。' },
              ],
            },
            {
              en: 'Do you look at your phone in bed — in the morning, at night, or both?',
              zh: '你會在床上看手機嗎？早上、晚上，還是兩者都會？',
              starters: [
                { en: 'I check my phone in bed ___ , mostly to ___ .', zh: '我＿＿會在床上看手機，主要是為了＿＿。' },
                { en: 'I try not to, but ___ .', zh: '我盡量不這麼做，但是＿＿。' },
              ],
            },
            {
              en: 'Which habit would you most like to change this year, and why?',
              zh: '今年你最想改變哪一個習慣？為什麼？',
              starters: [
                { en: 'The habit I’d most like to change is ___ , because ___ .', zh: '我最想改變的習慣是＿＿，因為＿＿。' },
                { en: 'It affects my work, because ___ .', zh: '它影響到我的工作，因為＿＿。' },
              ],
            },
          ],
        },
      ],
    },

    // ================================================================ 2
    {
      id: 'reading',
      n: 2,
      en: 'Reading',
      zh: '閱讀',
      photo: {
        src: 'img/reading.jpg',
        alt: 'A glass of water with a slice of lemon in a band of sunlight',
        by: 'Nur Tok',
        pos: '50% 50%',
      },
      blocks: [
        {
          t: 'lead',
          en: 'Ten protocols, from the first glass of water to the last half-hour before bed.',
          zh: '十個方案，從第一杯水到睡前的最後半小時。',
        },
        {
          t: 'passage',
          en: 'Ten Protocols for a Better Day',
          zh: '讓一天變得更好的十個方案',
          hintEn: 'Tap an underlined word for its meaning; tap a paragraph for the Chinese.',
          hintZh: '點選畫底線的單字看意思；點選段落看中文。',
          glossary: [
            { term: 'protocols', pos: 'n.', zh: '方案；固定的做法' },
            { term: 'hydrated', pos: 'adj.', zh: '水分充足的' },
            { term: 'cortisol', pos: 'n.', zh: '皮質醇（一種與壓力有關的荷爾蒙）' },
            { term: 'peak', pos: 'n.', zh: '高峰；最高點' },
            { term: 'resistance', pos: 'n.', zh: '阻力；抗拒感' },
            { term: 'determination', pos: 'n.', zh: '決心；毅力' },
            { term: 'inhales', pos: 'n.', zh: '吸氣（inhale 的複數）' },
            { term: 'exhale', pos: 'n.', zh: '吐氣' },
            { term: 'dim', pos: 'v.', zh: '調暗' },
            { term: 'flexible', pos: 'adj.', zh: '靈活的；有彈性的' },
            { term: 'gratitude', pos: 'n.', zh: '感恩；感激' },
          ],
          paras: [
            {
              en: 'Andrew Huberman is a neuroscientist who studies how light, stress and sleep affect the body. In a recent interview, he described ten daily habits that, in his view, make the biggest difference to our physical and mental health. He calls them {{protocols}}. None of them is expensive, and most of them are completely free.',
              zh: 'Andrew Huberman 是一位神經科學家，研究光線、壓力與睡眠如何影響身體。在最近一次訪談中，他談到十個日常習慣，他認為這些習慣對我們的身心健康影響最大。他把它們稱為「方案」。沒有一項很昂貴，而且大多數完全免費。',
            },
            {
              en: 'The day begins with water. Huberman suggests drinking a large glass soon after waking, because the brain works better when the body is well {{hydrated}}. The second protocol is light. Getting daylight in your eyes within the first hour of the day raises a hormone called {{cortisol}}. Most people think of cortisol as a bad thing, but he argues that a strong morning {{peak}} is exactly what you want: it lifts your mood and attention during the day, and it helps your cortisol fall again at night, which you need in order to sleep well.',
              zh: '一天從水開始。Huberman 建議起床後不久就喝一大杯水，因為身體水分充足時，大腦運作得比較好。第二個方案是光線。在一天的第一個小時內讓眼睛接收到自然光，會提高一種叫做皮質醇的荷爾蒙。多數人以為皮質醇是壞東西，但他認為，早晨出現一個強烈的高峰正是你想要的：它能在白天提升你的情緒與專注力，也能幫助皮質醇在晚上再次下降——而這是睡個好覺所必需的。',
            },
            {
              en: 'The third protocol is exercise, ideally in the first three or four hours of the day. He recommends three days of weights and three days of cardio each week. The fourth is more unusual: do something difficult on purpose. When you push through {{resistance}} — a cold shower, a hard book, a new language — a part of the brain linked to {{determination}} becomes stronger, and future challenges feel easier.',
              zh: '第三個方案是運動，最好在一天的前三、四個小時內進行。他建議每週三天做重量訓練、三天做有氧運動。第四個方案比較特別：刻意做一件困難的事。當你克服抗拒感——洗冷水澡、讀一本難讀的書、學一種新語言——大腦中與決心有關的區域會變得更強，未來的挑戰也會感覺比較容易。',
            },
            {
              en: 'The fifth protocol is a breathing technique for stress. Two short {{inhales}} through the nose, followed by one long {{exhale}}, will slow your heart rate within seconds. Huberman’s laboratory compared this with meditation and other breathing methods, and the people who practised it reported the greatest benefit.',
              zh: '第五個方案是一種紓解壓力的呼吸技巧。用鼻子短短吸兩口氣，接著長長吐一口氣，幾秒內就能讓心跳慢下來。Huberman 的實驗室把這個方法和冥想及其他呼吸方法做比較，結果練習這個方法的人回報的效果最好。',
            },
            {
              en: 'Protocols six to eight all concern the evening. Get outside again in the late afternoon; this protects your eyes against bright screens later on. Then {{dim}} the lights at home, and stop looking at screens for the last thirty minutes before bed. Keep the bedroom dark, and sleep on your side with your head slightly raised, which helps the brain clear waste products overnight.',
              zh: '第六到第八個方案都和傍晚有關。傍晚再到戶外一次；這能保護你的眼睛，減少之後明亮螢幕帶來的影響。接著把家裡的燈光調暗，並在睡前最後三十分鐘停止看螢幕。讓臥室保持黑暗，側睡並把頭稍微墊高，這有助於大腦在夜間清除代謝廢物。',
            },
            {
              en: 'The ninth protocol is a daily period of hard, focused work — ninety minutes to two hours, with the phone in another room. In one study, people could concentrate with the phone nearby, but they became less {{flexible}} thinkers. Errors, he adds, are not a sign of failure; they are the signal that tells the brain to change.',
              zh: '第九個方案是每天一段高強度、專注的工作時間——九十分鐘到兩小時，並把手機放在另一個房間。在一項研究中，手機在身邊時，人們仍然能夠專心，但思考變得比較不靈活。他補充說，犯錯不是失敗的象徵，而是告訴大腦需要改變的訊號。',
            },
            {
              en: 'The last protocol is about character rather than biology. Show {{gratitude}}, prepare properly, and do your job for the people who depend on you — but also take a short period each day when you are not performing any role at all.',
              zh: '最後一個方案關乎品格，而不是生物學。心懷感恩、做好充分準備，為依賴你的人把工作做好——但每天也要留一小段時間，完全不扮演任何角色。',
            },
          ],
        },
        {
          t: 'note',
          en: 'In short',
          zh: '中文重點',
          bodyEn: 'Andrew Huberman proposes ten daily protocols: water when you wake, natural light in the morning, exercise before noon, doing something hard on purpose, a “physiological sigh” to bring stress down fast, light again in the late afternoon, dim lights and no screens before bed, sleeping on your side in a fully dark room, a phone-free block of focused work every day, and gratitude, preparation and taking on your roles — with a short time each day when you play no role at all.',
          bodyZh: '神經科學家 Andrew Huberman 提出十個日常「方案」（protocols）：起床補水、晨間曬自然光、上午運動、刻意做困難的事、用「生理性嘆息」快速降壓、傍晚再曬一次光、睡前調暗燈光與遠離螢幕、側睡於全黑房間、每天一段無手機的專注學習，以及感恩、準備、承擔角色，並每天留一段不扮演任何角色的時間。',
        },
        {
          t: 'check',
          en: 'Check your understanding',
          zh: '閱讀理解',
          hintEn: 'Answer out loud first, then open the model answer.',
          hintZh: '先口頭回答，再打開參考答案。',
          items: [
            {
              en: 'Why does Huberman say a high morning cortisol level is a good thing?',
              zh: '為什麼 Huberman 說早上皮質醇濃度高是件好事？',
              answer: {
                en: 'A high morning peak lifts mood and attention during the day, and it allows cortisol to fall at night, which is necessary for good sleep.',
                zh: '早晨的高峰能在白天提升情緒與專注力，也讓皮質醇在晚上下降，而這是睡好覺所必需的。',
              },
            },
            {
              en: 'What happens to your thinking when your phone is in the same room?',
              zh: '手機和你在同一個房間時，你的思考會發生什麼事？',
              answer: {
                en: 'You can still concentrate, but you become a less flexible thinker — focusing takes more effort.',
                zh: '你仍然可以專心，但思考會變得比較不靈活——專注需要花更多力氣。',
              },
            },
            {
              en: 'According to the text, what is the purpose of making errors?',
              zh: '根據文章，犯錯的目的是什麼？',
              answer: {
                en: 'Errors are the signal that tells the brain to change; they drive learning.',
                zh: '錯誤是告訴大腦需要改變的訊號；它們推動學習。',
              },
            },
            {
              en: 'Which of the ten protocols costs money? (Careful — this is a trick question.)',
              zh: '十個方案中，哪一個要花錢？（注意這是一個陷阱題。）',
              answer: {
                en: 'None of them. The text says clearly that none of them is expensive and most are completely free.',
                zh: '一個都沒有。文章明確指出這些方案都不貴，而且大多完全免費。',
              },
            },
          ],
        },
      ],
    },

    // ================================================================ 3
    {
      id: 'vocabulary',
      n: 3,
      en: 'Key Vocabulary',
      zh: '核心單字',
      blocks: [
        {
          t: 'phrases',
          en: 'Key words',
          zh: '核心單字',
          items: [
            { en: 'hydrate', pos: 'v.', zh: '補充水分', eg: 'Remember to hydrate before a long meeting.', egZh: '開長時間的會議之前，記得補充水分。' },
            { en: 'exposure', pos: 'n.', zh: '接觸；暴露', eg: 'Daily exposure to sunlight improves sleep quality.', egZh: '每天接觸陽光能改善睡眠品質。' },
            { en: 'spike', pos: 'v. / n.', zh: '急速上升（幅度）', eg: 'Sales spiked in the final week of the quarter.', egZh: '銷售額在這一季的最後一週急速上升。' },
            { en: 'offset', pos: 'v.', zh: '抵銷；彌補', eg: 'Morning light helps offset the effects of screens at night.', egZh: '早晨的光線有助於抵銷晚上螢幕帶來的影響。' },
            { en: 'buffer', pos: 'v. / n.', zh: '緩衝；減緩衝擊', eg: 'A short walk buffers the rise in blood sugar after lunch.', egZh: '午餐後短暫散步，能緩衝血糖的上升。' },
            { en: 'disrupt', pos: 'v.', zh: '打亂；中斷', eg: 'Late-night email disrupts my sleep more than coffee does.', egZh: '深夜的電子郵件比咖啡更會打亂我的睡眠。' },
            { en: 'trigger', pos: 'v. / n.', zh: '觸發（因素）', eg: 'Tight deadlines trigger a stress response in most people.', egZh: '緊迫的截止期限會在多數人身上觸發壓力反應。' },
            { en: 'deliberate', pos: 'adj.', zh: '刻意的；有意識的', eg: 'This is not a habit — it is a deliberate choice.', egZh: '這不是習慣——這是一個刻意的選擇。' },
            { en: 'alert', pos: 'adj.', zh: '警覺的；清醒的', eg: 'You need to be alert, but calm, in order to learn.', egZh: '要學習，你需要保持清醒，同時也要冷靜。' },
            { en: 'mitigate', pos: 'v.', zh: '減輕；緩和', eg: 'We took several steps to mitigate the risk.', egZh: '我們採取了幾個步驟來減輕風險。' },
            { en: 'threshold', pos: 'n.', zh: '門檻；臨界點', eg: 'Training raises your threshold for discomfort.', egZh: '訓練能提高你對不適的忍受門檻。' },
            { en: 'recovery', pos: 'n.', zh: '恢復；復原', eg: 'Recovery matters as much as the training itself.', egZh: '恢復和訓練本身一樣重要。' },
          ],
        },
        {
          t: 'phrases',
          en: 'Useful phrases',
          zh: '實用搭配',
          items: [
            { en: 'get sunlight in your eyes', zh: '讓眼睛接收到自然光（不要透過玻璃或太陽眼鏡）', eg: 'Try to get sunlight in your eyes within an hour of waking up.', egZh: '試著在起床後一小時內，讓眼睛接收到自然光。' },
            { en: 'wind down', zh: '放鬆、緩和下來（睡前或下班後）', eg: 'I need at least an hour to wind down after a long day at work.', egZh: '工作了一整天之後，我至少需要一個小時才能放鬆下來。' },
            { en: 'stick to a routine', zh: '維持固定的作息', eg: 'It’s easier to stick to a routine when you plan your evenings.', egZh: '事先規劃好晚上的時間，就比較容易維持固定的作息。' },
            { en: 'cut back on', zh: '減少（攝取、使用）', eg: 'I’m trying to cut back on coffee after lunch.', egZh: '我正試著減少午餐後喝咖啡。' },
            { en: 'bounce back', zh: '快速恢復（從壓力或挫折中）', eg: 'Good sleep helps the team bounce back after a busy quarter.', egZh: '充足的睡眠能幫助團隊在忙碌的一季之後快速恢復。' },
            { en: 'move the needle', zh: '真正產生影響、帶來改變（職場常用）', eg: 'Free fruit is nice, but flexible hours would really move the needle.', egZh: '免費水果很好，但彈性工時才真的能帶來改變。' },
            { en: 'on purpose', zh: '刻意地、故意地', eg: 'She takes the stairs on purpose, even when the lift is empty.', egZh: '即使電梯空著，她也刻意走樓梯。' },
            { en: 'build up (a habit)', zh: '逐步建立（習慣、能力）', eg: 'Start with ten minutes a day and build up the habit slowly.', egZh: '從每天十分鐘開始，慢慢建立這個習慣。' },
          ],
        },
      ],
    },

    // ================================================================ 4
    {
      id: 'advice',
      n: 4,
      en: 'Language Focus: Giving Advice',
      zh: '語言重點：給建議',
      photo: {
        src: 'img/advice.jpg',
        alt: 'A woman presenting a document to a colleague across a meeting table',
        by: 'Felicity Tai',
        pos: '50% 50%',
      },
      blocks: [
        {
          t: 'lead',
          en: 'English has many ways to recommend something. The pattern you choose changes how strong and how polite the advice sounds.',
          zh: '英文給建議的句型很多，選擇不同句型會改變語氣的強弱與禮貌程度。',
        },
        {
          t: 'ladder',
          en: 'Six patterns, soft to strong',
          zh: '六個句型，由柔和到強烈',
          hintEn: 'Each pattern does the same job with a different force. Read down the scale.',
          hintZh: '每個句型的功能相同，但力道不同。由上往下讀。',
          rows: [
            { level: 'soft', levelEn: 'Soft', levelZh: '語氣柔和', pattern: 'It’s worth + V-ing', eg: 'It’s worth trying this for two weeks.', egZh: '這個方法值得試兩個星期。' },
            { level: 'soft', levelEn: 'Soft', levelZh: '語氣柔和', pattern: 'You might want to + V', eg: 'You might want to move your workout earlier.', egZh: '你或許可以把運動時間提早。' },
            { level: 'neutral', levelEn: 'Neutral', levelZh: '語氣中性', pattern: 'I’d recommend + V-ing', eg: 'I’d recommend leaving your phone outside the room.', egZh: '我會建議你把手機放在房間外面。' },
            { level: 'neutral', levelEn: 'Neutral', levelZh: '語氣中性', pattern: 'Try to + V', eg: 'Try to get outside before ten o’clock.', egZh: '試著在十點以前到戶外走走。' },
            { level: 'strong', levelEn: 'Strong', levelZh: '語氣強烈', pattern: 'You should / ought to + V', eg: 'You should dim the lights after dinner.', egZh: '晚餐後你應該把燈光調暗。' },
            { level: 'strong', levelEn: 'Strong', levelZh: '語氣強烈', pattern: 'Make sure you + V', eg: 'Make sure you hydrate before the flight.', egZh: '搭飛機前一定要補充水分。' },
          ],
        },
        {
          t: 'note',
          en: 'Common error',
          zh: '常見錯誤',
          bodyEn: 'Not ✗ “I recommend you to drink more water.” Say ✓ “I recommend drinking more water” — or ✓ “I recommend that you drink more water.” Recommend takes an -ing form or a that-clause, never to + verb.',
          bodyZh: '不要說 ✗「I recommend you to drink more water.」，要說 ✓「I recommend drinking more water.」，或 ✓「I recommend that you drink more water.」。recommend 後面接動名詞或 that 子句，不接 to + 原形動詞。',
        },
      ],
    },

    // ================================================================ 5
    {
      id: 'practice',
      n: 5,
      en: 'Practice',
      zh: '練習',
      blocks: [
        {
          t: 'gap',
          en: 'Exercise A — Complete the sentences',
          zh: '練習 A — 填空',
          items: [
            {
              text: 'Bright light in the evening can seriously ___ your sleep.',
              textZh: '晚上的強光會嚴重打亂你的睡眠。',
              options: ['buffer', 'disrupt', 'mitigate'],
              answer: 1,
              why: { en: '“disrupt” = upset something that normally runs smoothly.', zh: '「disrupt」＝打亂原本順利進行的事。' },
            },
            {
              text: 'A ten-minute walk after lunch helps ___ the rise in blood sugar.',
              textZh: '午餐後散步十分鐘，有助於緩衝血糖的上升。',
              options: ['buffer', 'spike', 'hydrate'],
              answer: 0,
              why: { en: '“buffer” = soften the impact of something.', zh: '「buffer」＝減緩某件事的衝擊。' },
            },
            {
              text: 'Regular ___ to morning daylight is free and takes very little time.',
              textZh: '規律地接觸早晨的陽光不用花錢，也幾乎不花時間。',
              options: ['threshold', 'exposure', 'spike'],
              answer: 1,
              why: { en: '“exposure to” something = being in contact with it.', zh: '「exposure to」＝接觸某樣東西。' },
            },
            {
              text: 'Cold water causes a sharp ___ in adrenaline, but not in cortisol.',
              textZh: '冷水會讓腎上腺素急速上升，但皮質醇不會。',
              options: ['spike', 'buffer', 'threshold'],
              answer: 0,
              why: { en: '“a spike in” something = a sudden, sharp rise.', zh: '「a spike in」＝某樣東西突然急遽上升。' },
            },
            {
              text: 'We introduced flexible hours to ___ the stress of the new schedule.',
              textZh: '我們推出彈性工時，以減輕新排班帶來的壓力。',
              options: ['disrupt', 'mitigate', 'spike'],
              answer: 1,
              why: { en: '“mitigate” = make something bad less severe.', zh: '「mitigate」＝讓不好的事情沒那麼嚴重。' },
            },
            {
              text: 'Doing hard things on purpose slowly raises your ___ for discomfort.',
              textZh: '刻意做困難的事，會慢慢提高你對不適的忍受門檻。',
              options: ['exposure', 'threshold', 'deliberate'],
              answer: 1,
              why: { en: '“a threshold for” something = the point at which you start to feel it.', zh: '「a threshold for」＝開始感受到某樣東西的臨界點。' },
            },
            {
              text: 'This was not an accident; it was a ___ decision.',
              textZh: '這不是意外，而是一個刻意的決定。',
              options: ['deliberate', 'hydrate', 'buffer'],
              answer: 0,
              why: { en: '“deliberate” = done on purpose, after thinking.', zh: '「deliberate」＝經過思考、刻意做的。' },
            },
            {
              text: 'Staff are reminded to ___ regularly during the summer months.',
              textZh: '夏季期間，提醒員工要定時補充水分。',
              options: ['mitigate', 'exposure', 'hydrate'],
              answer: 2,
              why: { en: '“hydrate” = drink enough water.', zh: '「hydrate」＝補充足夠的水分。' },
            },
          ],
        },
        {
          t: 'match',
          en: 'Exercise B — Match the protocol to the benefit',
          zh: '練習 B — 配對方案與好處',
          hintEn: 'Click a protocol on the left, then its benefit on the right.',
          hintZh: '先點左邊的方案，再點右邊對應的好處。',
          pairs: [
            { a: 'Morning daylight', b: 'sets up low cortisol at night' },
            { a: 'Two inhales and a long exhale', b: 'slows the heart rate within seconds' },
            { a: 'A cold shower or a hard book', b: 'makes future challenges feel easier' },
            { a: 'Side sleeping in a dark room', b: 'clears waste products from the brain' },
            { a: 'Phone in another room', b: 'keeps your thinking flexible' },
          ],
        },
        {
          t: 'check',
          en: 'Exercise C — Rewrite as advice',
          zh: '練習 C — 句型轉換',
          hintEn: 'Use the pattern in brackets, then open the model answer. Watch item 2: it is “I’d recommend not checking…”, never “I’d recommend to not check…”.',
          hintZh: '請使用括號內的句型改寫，再打開參考答案。注意第 2 題：要說 I’d recommend not checking…，不能說 I’d recommend to not check…。',
          items: [
            {
              en: 'Drinking water first thing in the morning is a good idea.',
              cue: '(You should…)',
              zh: '早上起床第一件事就喝水是個好主意。（用 You should…）',
              answer: { en: 'You should drink water first thing in the morning.', zh: '你應該早上起床第一件事就喝水。' },
            },
            {
              en: 'Don’t check email after ten o’clock.',
              cue: '(I’d recommend…)',
              zh: '十點以後不要查看電子郵件。（用 I’d recommend…）',
              answer: { en: 'I’d recommend not checking email after ten o’clock.', zh: '我會建議你十點以後不要查看電子郵件。' },
            },
            {
              en: 'Move your workout to the morning.',
              cue: '(It’s worth…)',
              zh: '把運動時間移到早上。（用 It’s worth…）',
              answer: { en: 'It’s worth moving your workout to the morning.', zh: '把運動時間移到早上是值得的。' },
            },
            {
              en: 'Take the stairs instead of the lift.',
              cue: '(Try to…)',
              zh: '走樓梯，不要搭電梯。（用 Try to…）',
              answer: { en: 'Try to take the stairs instead of the lift.', zh: '試著走樓梯，不要搭電梯。' },
            },
            {
              en: 'Charge your phone outside the bedroom.',
              cue: '(Make sure…)',
              zh: '在臥室外面幫手機充電。（用 Make sure…）',
              answer: { en: 'Make sure you charge your phone outside the bedroom.', zh: '一定要在臥室外面幫手機充電。' },
            },
          ],
        },
        {
          t: 'task',
          en: 'Exercise D — Task 1 · Pair discussion',
          zh: '練習 D — 任務一 · 雙人討論',
          instructionEn: 'Choose two protocols from the reading. Tell your partner which one you could start this week and which one would be impossible for you. Explain why, using at least three words from the vocabulary list.',
          instructionZh: '從文章中選兩個方案：一個你這週就能開始，一個對你來說不可能。說明原因，並使用至少三個核心單字。',
          prompts: [
            { en: 'The protocol I could start this week — and why.', zh: '我這週就能開始的方案——以及原因。' },
            { en: 'The protocol that would be impossible for me — and why.', zh: '對我來說不可能做到的方案——以及原因。' },
          ],
          checklist: [
            { en: 'hydrate', zh: '補充水分' },
            { en: 'exposure', zh: '接觸；暴露' },
            { en: 'spike', zh: '急速上升' },
            { en: 'offset', zh: '抵銷；彌補' },
            { en: 'buffer', zh: '緩衝' },
            { en: 'disrupt', zh: '打亂；中斷' },
            { en: 'trigger', zh: '觸發' },
            { en: 'deliberate', zh: '刻意的' },
            { en: 'alert', zh: '清醒的' },
            { en: 'mitigate', zh: '減輕；緩和' },
            { en: 'threshold', zh: '門檻' },
            { en: 'recovery', zh: '恢復' },
          ],
        },
        {
          t: 'note',
          en: 'A note on tone',
          zh: '語氣提醒',
          bodyEn: 'Talking to a manager, avoid “You must…” — it sounds far too strong. Reach first for the soft and neutral patterns in Section 4.',
          bodyZh: '對主管說話時，避免使用「You must…」——聽起來語氣過強。請優先使用第 4 部分中語氣柔和或中性的句型。',
        },
        {
          t: 'task',
          en: 'Exercise D — Task 2 · Workplace roleplay',
          zh: '練習 D — 任務二 · 職場角色扮演',
          instructionEn: 'Your company wants to reduce burnout. In two minutes, present one low-cost change to your manager. Use at least three different advice patterns from Section 4, and be ready to answer: “What will this actually cost us?”',
          instructionZh: '你的公司想降低員工過勞。用兩分鐘向主管提出一項低成本的改變，使用至少三種不同的建議句型，並準備回答主管的追問：「這實際上要花我們多少成本？」',
          prompts: [
            { en: 'No meetings before ten, so people can get outside in the morning.', zh: '十點以前不開會，讓大家早上能到戶外走走。' },
            { en: 'A phone-free focus block every afternoon.', zh: '每天下午一段不碰手機的專注時間。' },
            { en: 'No work email after nine at night.', zh: '晚上九點以後不收發工作郵件。' },
            { en: 'An idea of your own.', zh: '你自己的點子。' },
          ],
          checklist: [
            { en: 'It’s worth + V-ing', zh: '……是值得的' },
            { en: 'You might want to + V', zh: '你或許可以……' },
            { en: 'I’d recommend + V-ing', zh: '我會建議……' },
            { en: 'Try to + V', zh: '試著……' },
            { en: 'You should / ought to + V', zh: '你應該……' },
            { en: 'Make sure you + V', zh: '一定要……' },
          ],
          frames: [
            { en: 'It would cost us almost nothing, because ___ .', zh: '這幾乎不用花任何成本，因為＿＿。' },
            { en: 'The only real cost is ___ , and I think it’s worth it.', zh: '唯一真正的成本是＿＿，而我認為這是值得的。' },
          ],
        },
      ],
    },
  ],
};
