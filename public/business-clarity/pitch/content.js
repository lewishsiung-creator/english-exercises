/* Business introduction — the current version.

   Not a session page. The dated pages are the record of what was said on a
   particular day; this one is the living artifact, rewritten as the
   explanation improves. It should always hold the best current wording, in
   three lengths, so the thing Lulu actually takes out of the room is never
   buried at the bottom of a transcript.

   Rendered by ../render.js like a session page: no fields, no purpose, no
   feedback band. Block types are documented at the top of ../content.js.

   Where a line is still missing — a number, a client, a before-and-after —
   it is written as a blank rather than quietly left out, so the gap is
   visible while she is speaking. */

const WORKSHEET = {
  title: 'Business Introduction',
  titleZh: '事業介紹',

  crumbs: [
    { href: '../', en: 'Business Clarity', zh: '商業策略與英文表達' },
    { href: '../#executive', en: '10. Executive Business Introduction', zh: '高階商業介紹' },
  ],

  sections: [
    // ------------------------------------------------------------------
    {
      id: 'how',
      n: '·',
      en: 'How to Use This Page',
      zh: '這一頁怎麼用',
      blocks: [
        {
          t: 'lead',
          en: 'Three lengths of the same explanation. Pick the one the situation needs, say it out loud, then improve the wording here rather than starting again next time.',
          zh: '同一段說明的三種長度。依場合挑一個版本、念出聲，之後直接在這一頁改進用字，不必每次從頭寫起。',
        },
        {
          t: 'points',
          en: 'Which Version When',
          zh: '什麼場合用哪一版',
          items: [
            {
              en: '30 seconds — the elevator version',
              zh: '30 秒・電梯版',
              bodyEn: 'Someone asks what you do at a forum, in a lift, over dinner. One idea, one sentence about how, one sentence about what makes you different.',
            },
            {
              en: '90 seconds — the meeting version',
              zh: '90 秒・會議版',
              bodyEn: 'The opening of a client meeting or a partner conversation. Enough room for the competency model and the role AI plays.',
            },
            {
              en: 'Two minutes — the full version',
              zh: '2 分鐘・正式版',
              bodyEn: 'A pitch, a panel, an investor. Adds the problem, the proof, and the honest limits.',
            },
          ],
        },
        {
          t: 'note',
          en: 'Current Version',
          zh: '目前版本',
          bodyEn: 'Updated after Lesson Four. The 90-second version is Lulu’s own, worked out in that class. The 30-second and two-minute versions are first drafts built from her own sentences — they need her corrections before they count as hers.',
          bodyZh: '更新於第四堂課後。90 秒版本是 Lulu 在課堂上自己完成的；30 秒與 2 分鐘版本是用她自己說過的句子組出來的初稿，需要她本人修改後才算定稿。',
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'thirty',
      n: 1,
      en: '30 Seconds — The Elevator Version',
      zh: '30 秒・電梯版',
      blocks: [
        {
          t: 'statements',
          en: 'The Script',
          zh: '講稿',
          items: [
            {
              en: 'People join a company, but they leave a manager. Most companies only find that out after the resignation letter arrives.',
              zh: '',
              tip: 'Opens with the problem, not the product — the principle set out in section 2 of the worksheet.',
            },
            {
              en: 'We build AI-driven HR systems that make it visible earlier. We help a company define what a good employee actually looks like for them, and then use that model to hire, develop people, and see who is at risk of leaving.',
              zh: '',
            },
            {
              en: 'The system gives managers the evidence. The decision stays with them.',
              zh: '',
            },
          ],
        },
        {
          t: 'points',
          en: 'The Three Beats',
          zh: '三個節奏點',
          items: [
            { en: 'Problem', zh: '問題', bodyEn: 'People leave managers, and companies find out too late.' },
            { en: 'What we do', zh: '我們做什麼', bodyEn: 'A competency model, then hiring, development and retention risk.' },
            { en: 'Where we stop', zh: '我們的界線', bodyEn: 'Evidence for managers, not decisions instead of them.' },
          ],
        },
        {
          t: 'note',
          en: 'Say It This Way',
          zh: '口語提醒',
          bodyEn: 'Pause after the first sentence. It is the only line the listener will remember if the conversation ends after ten seconds, so let it land before moving on.',
          bodyZh: '第一句講完停一下。如果對話十秒後就結束，聽眾只會記得那一句，先讓它落地再往下講。',
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'ninety',
      n: 2,
      en: '90 Seconds — The Meeting Version',
      zh: '90 秒・會議版',
      blocks: [
        {
          t: 'statements',
          en: 'The Script',
          zh: '講稿',
          items: [
            {
              en: 'Our SaaS platform helps companies manage the entire talent lifecycle, from hiring and employee development to performance management and retention.',
              zh: '',
            },
            {
              en: 'We first help each company build a customized competency model based on its core values, professional requirements, and management expectations. AI can then analyze candidates and employees against that model and identify suitable talent, competency gaps, and development opportunities.',
              zh: '',
            },
            {
              en: 'The system also combines qualitative and quantitative data to understand employee behavior, contribution, and retention risks. For example, it can analyze feedback, work records, meeting participation, training, and performance data.',
              zh: '',
            },
            {
              en: 'However, AI is not the final decision-maker. Our goal is to provide managers with better evidence so they can make more rational and informed people decisions.',
              zh: '',
            },
          ],
        },
        {
          t: 'points',
          en: 'The Four Beats',
          zh: '四個節奏點',
          items: [
            { en: 'What it does', zh: '做什麼', bodyEn: 'The whole talent lifecycle, named in one sentence.' },
            { en: 'How it works', zh: '怎麼運作', bodyEn: 'A competency model built from the company’s own values, then AI scoring against it.' },
            { en: 'What it reads', zh: '看哪些資料', bodyEn: 'Qualitative and quantitative together, because behaviour is not only numbers.' },
            { en: 'What role AI plays', zh: 'AI 的角色', bodyEn: 'Evidence for a human decision, not the decision itself.' },
          ],
        },
        {
          t: 'note',
          en: 'The One Weakness',
          zh: '目前唯一的弱點',
          bodyEn: 'The opening sentence is true of almost any HR tech company. It costs the first eight seconds, which are the most valuable ones. The 30-second version shows the alternative: lead with the problem, then name the category. Worth trying as the opening here too.',
          bodyZh: '開場那句話幾乎任何一家 HR tech 都能講，等於浪費了最寶貴的前八秒。30 秒版本示範了另一種做法：先講問題，再說自己屬於哪個類別。這裡也值得試試看同樣的開場。',
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'twomin',
      n: 3,
      en: 'Two Minutes — The Full Version',
      zh: '2 分鐘・正式版',
      blocks: [
        {
          t: 'statements',
          en: 'The Script',
          zh: '講稿',
          items: [
            {
              en: 'People join a company, but they leave a manager. And most companies only find out when the resignation letter arrives — by which point the hiring cost, the training and the knowledge have already gone.',
              zh: '',
            },
            {
              en: 'Our SaaS platform helps companies manage the entire talent lifecycle, from hiring and employee development to performance management and retention.',
              zh: '',
            },
            {
              en: 'We start by building a competency model from the company’s own core values, professional requirements, and management expectations. Every company needs its own, because different organizations value different behaviors, skills, and capabilities. AI then analyzes candidates and employees against that model and identifies suitable talent, competency gaps, and development opportunities.',
              zh: '',
            },
            {
              en: 'The system combines qualitative and quantitative data — feedback, work records, meeting participation, training and performance — because employee behavior cannot be understood from numbers alone. It also uses de-identification, so we can analyze behavior while protecting individual privacy.',
              zh: '',
            },
            {
              en: 'For example, one client ________. Within the first quarter, they ________.',
              zh: '',
              tip: 'Still blank. This is the single highest-value line in the whole explanation — one client, one number, one before-and-after. See “What Is Still Missing” below.',
            },
            {
              en: 'AI is not the final decision-maker. Our system can provide evidence and recommendations, but management still has to take action. That limit is deliberate — the goal is to give managers better evidence, not to replace their judgment.',
              zh: '',
            },
            {
              en: 'Employees usually start noticing efficiency improvements within one quarter, but meaningful retention analysis takes about six months of data.',
              zh: '',
            },
          ],
        },
        {
          t: 'points',
          en: 'What the Extra Thirty Seconds Buy',
          zh: '多出來的 30 秒買到什麼',
          items: [
            { en: 'A problem worth solving', zh: '一個值得解決的問題', bodyEn: 'The cost of losing someone, stated before the product appears.' },
            { en: 'Proof', zh: '證據', bodyEn: 'One real client and one real number. Currently the only missing piece.' },
            { en: 'Credibility through limits', zh: '以界線建立可信度', bodyEn: 'Saying what the system cannot do is what makes the rest believable.' },
            { en: 'A realistic timeline', zh: '合理的時程', bodyEn: 'One quarter for efficiency, six months for retention — no overselling.' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'lines',
      n: '★',
      en: 'Lines Worth Keeping',
      zh: '值得保留的句子',
      blocks: [
        {
          t: 'lead',
          en: 'Lulu’s own sentences, taken from the discussions. These are the distinctive ones — the parts a competitor could not have said. Use them as spare parts when a version needs rebuilding.',
          zh: '以下是 Lulu 自己說過的句子，也是最有辨識度、競爭者說不出來的部分。改稿時可以直接當零件使用。',
        },
        {
          t: 'statements',
          en: 'On What Makes the Product Different',
          zh: '關於產品的差異化',
          items: [
            { en: 'AI is not the final decision-maker. It provides analysis and recommendations to support human judgment.', zh: '' },
            { en: 'Our system can provide evidence and recommendations, but management still has to take action.', zh: '' },
            { en: 'We use de-identification to analyze employee data while protecting individual privacy.', zh: '' },
            { en: 'We combine qualitative and quantitative data because employee behavior cannot be understood from numbers alone.', zh: '' },
          ],
        },
        {
          t: 'statements',
          en: 'On the Customer’s Problem',
          zh: '關於顧客的問題',
          items: [
            { en: 'A person may join because of the company, but leave because of a bad manager.', zh: '' },
            { en: 'Talent retention cannot be achieved through software alone. Management behavior also needs to change.', zh: '' },
            { en: 'Employees are more likely to stay when they can clearly see their career path and understand what they need to do to reach the next level.', zh: '' },
            { en: 'Absolute fairness may be impossible, but companies can create a relatively fair and transparent system.', zh: '' },
          ],
        },
        {
          t: 'statements',
          en: 'On How She Runs Her Own Company',
          zh: '關於她自己的經營方式',
          items: [
            { en: 'Employees have the freedom to choose certain goals, but once they make that choice, they are accountable for the results.', zh: '' },
            { en: 'We do not evaluate projects based on revenue alone because revenue can hide the impact of cost.', zh: '' },
            { en: 'Managers should focus more on outcomes and less on constantly monitoring how employees spend every minute of their time.', zh: '' },
          ],

        },
        {
          t: 'related',
          en: 'Where These Came From',
          zh: '這些句子的出處',
          items: [
            { href: '../lesson-four/#ai-assistant', when: '第四堂', en: 'AI Is an Assistant, Not the Decision-Maker', zh: 'AI 是輔助者，而不是決策者' },
            { href: '../lesson-four/#limits', when: '第四堂', en: 'Technology Cannot Replace Management Decisions', zh: '系統不能取代管理決策' },
            { href: '../lesson-four/#leave-managers', when: '第四堂', en: '“People Join Companies but Leave Managers”', zh: '因公司加入，卻因主管離開' },
            { href: '../lesson-four/#pitch', when: '第四堂', en: 'A Stronger 90-Second Explanation', zh: '更有力的 90 秒說明' },
            { href: '../lesson-three/#accountability', when: '第三堂', en: 'Autonomy + Accountability', zh: '自主 + 當責' },
            { href: '../lesson-three/#margin', when: '第三堂', en: 'Revenue vs. Gross Profit', zh: '營業額與毛利' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'gaps',
      n: '?',
      en: 'What Is Still Missing',
      zh: '還缺什麼',
      blocks: [
        {
          t: 'lead',
          en: 'The explanation still contains no number and no named customer. These are the questions that would fix that — worth answering out loud in the next session.',
          zh: '這段說明裡仍然沒有任何數字，也沒有具體的客戶。以下是能補上這一塊的問題，適合在下一堂課口頭回答。',
        },

        { t: 'sub', letter: 'A', en: 'Proof', zh: '證據' },
        {
          t: 'ask',
          en: 'Think of the client whose system just went live. What were they doing before, and how long did it take them?',
          zh: '想一個剛上線的客戶。他們導入前怎麼做這件事？花多少時間？',
        },
        {
          t: 'ask',
          en: 'What is the difference now — in hours, in headcount, in cost, or in turnover?',
          zh: '現在的差別是什麼？用工時、人數、成本或流動率來說。',
        },
        {
          t: 'ask',
          en: 'Which single number are you willing to say in public? Which one are you not, and why?',
          zh: '哪一個數字你願意對外講？哪一個不願意？為什麼？',
        },
        {
          t: 'phrases',
          en: 'Language for Saying It',
          zh: '表達證據的句型',
          items: [
            { en: 'reduced ______ by ______%', zh: '把＿＿降低了＿＿％' },
            { en: 'cut the time from ______ to ______', zh: '把時間從＿＿縮短到＿＿' },
            { en: 'within the first quarter', zh: '在第一季之內' },
            { en: 'compared with before they used the system', zh: '與導入系統之前相比' },
            { en: 'one of our clients, a ______ company with ______ employees', zh: '我們的一個客戶，是一家＿＿人規模的＿＿公司' },
            { en: 'the result exceeded what they expected', zh: '結果超出他們的預期' },
          ],
        },

        { t: 'sub', letter: 'B', en: 'Who Buys This', zh: '誰會買' },
        {
          t: 'lead',
          en: 'The second question any listener asks after “what does it do” is “who buys it.” Sections 3 and 7 of the worksheet are still almost empty.',
          zh: '聽眾問完「這是做什麼的」之後，第二個問題一定是「誰會買」。練習單第 3 章與第 7 章目前幾乎還是空的。',
        },
        {
          t: 'ask',
          en: 'How many employees does your ideal client have, and in which industry?',
          zh: '你的理想客戶有多少員工？屬於哪個產業？',
        },
        {
          t: 'ask',
          en: 'Who signs the contract — the HR director, or the owner? What does each of them care about?',
          zh: '誰簽約——人資主管還是老闆？他們各自在意什麼？',
        },
        {
          t: 'ask',
          en: 'How did your last three clients find you?',
          zh: '最近三個客戶是怎麼找到你的？',
        },
        {
          t: 'note',
          en: 'Why This Changes the Pitch',
          zh: '這為什麼會改變這段說明',
          bodyEn: 'The explanation above is currently written for everyone, which means it is sharpest for no one. Once the ideal client is named, the opening can speak directly to them — a 50-person company’s HR director and a 500-person company’s owner do not have the same problem.',
          bodyZh: '目前這段說明是寫給所有人聽的，也就等於對誰都不夠銳利。一旦理想客戶明確了，開場就能直接對準他們——50 人公司的人資主管和 500 人公司的老闆，面對的根本不是同一個問題。',
        },
      ],
    },
  ],
};
