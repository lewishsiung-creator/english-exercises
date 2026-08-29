/* Health notes — content.
   ============================================================
   A growing collection of bilingual notes on physical and mental health.
   Adapted from Lewis's own write-ups; the first topic is the wearable
   metrics one (sleep, heart rate, HRV, VO2 max, stress).

   HOW TO ADD A NEW TOPIC
   ----------------------
   Push another object onto TOPICS. It needs:

     id       a short slug, used for the #anchor and the contents list
     title    { en, zh }
     lead     { en, zh }   one framing sentence, shown under the heading
     updated  'YYYY-MM'    printed small under the topic title
     sections [ ... ]      the body

   Each section is { id, num, title: { en, zh }, blocks: [ ... ] }.
   `num` is optional — leave it out for a closing or summary section.

   BLOCK TYPES
   -----------
     p        { en, zh }                      a paragraph
     lead     { en, zh }                      a small line introducing a list
     list     { items: [ { en, zh } ] }       a bulleted list
     key      { en, zh }                      a callout — the one-line takeaway
     flow     { items: [], zh: [] }           a chain rendered as A -> B -> C
                                              (`zh` optional; same chips if absent)
     contrast { badEn, badZh, goodEn, goodZh } "not this question, but this one"
     note     { en, zh }                      the "what it means for you" box
     quote    { en, zh }                      a closing line, set large
     table    { head: [ {en,zh} ], rows: [ [ {en,zh} ] ] }
     cards    { items: [ { label, title:{en,zh}, body:{en,zh}, foot:{en,zh} } ] }

   Every visible string is a pair: `en` (English) and `zh` (Traditional
   Chinese). The reader chooses 雙語 / 中文 / English at the top of the page,
   so BOTH halves of a pair must always be filled in — a missing `en` leaves a
   hole for anyone reading in English only.
   ============================================================ */

const SITE = {
  title:    'Health Notes',
  titleZh:  '健康筆記',
  tagline:  { en: 'Notes on the body and the mind — how to read the numbers, and what they do not say.',
              zh: '關於身體與心理的筆記：這些數字怎麼讀，以及它們沒有告訴你的事。' },
};

const TOPICS = [

/* ============================================================
   TOPIC 1 — wearable recovery, energy and fitness metrics
   ============================================================ */
{
  id: 'metrics',
  updated: '2026-08',
  title: { en: "Understanding Your Body's Recovery, Energy & Fitness Metrics",
           zh: '了解身體的恢復、能量與體能指標' },
  lead:  { en: 'How sleep, heart rate, HRV, VO₂ max and stress reveal your daily readiness and long-term health.',
           zh: '從睡眠、心率、HRV、VO₂ Max 與壓力，了解每日恢復狀態與長期健康。' },

  sections: [

  /* ---------- 1. Deep Sleep ---------- */
  {
    id: 'deep-sleep', num: 1,
    title: { en: 'Deep Sleep', zh: '深層睡眠' },
    blocks: [
      { type: 'p',
        en: 'Deep sleep is N3 slow-wave sleep, the deepest stage of non-REM sleep.',
        zh: '深層睡眠（Deep Sleep）主要指 N3 慢波睡眠（Slow-Wave Sleep），也是非快速動眼睡眠（Non-REM）中最深的階段。' },

      { type: 'lead', en: 'During this stage:', zh: '在這個階段：' },
      { type: 'list', items: [
        { en: 'Brain activity slows substantially', zh: '大腦活動明顯降低' },
        { en: 'Heart rate and breathing generally decrease', zh: '心率與呼吸通常變慢' },
        { en: 'Physical restoration and tissue repair occur', zh: '身體進行恢復與組織修復' },
        { en: 'Important immune processes take place', zh: '免疫系統進行重要調節' },
        { en: 'Memory consolidation occurs', zh: '參與記憶鞏固' },
        { en: 'Growth hormone secretion is strongly associated with this period',
          zh: '生長激素（Growth Hormone）大量分泌與深層睡眠時段高度相關' },
      ]},

      { type: 'lead', en: 'For someone who exercises regularly:', zh: '對規律運動的人，可以簡單理解為：' },
      { type: 'key', en: 'Deep Sleep → Physical recovery', zh: 'Deep Sleep → 身體的恢復與修復' },

      { type: 'p',
        en: "However, more deep sleep isn't automatically better. Deep sleep naturally decreases with age, and consumer wearables can only estimate sleep stages.",
        zh: '但並不是深層睡眠越多就一定越健康。隨著年齡增加，深層睡眠本來就會逐漸減少，而且智慧手錶只能估算睡眠階段。' },

      { type: 'note',
        en: 'If deep sleep is repeatedly inadequate or fragmented, you may feel physically unrefreshed even when your total sleep duration appears adequate.',
        zh: '如果深層睡眠長期不足或反覆中斷，即使睡眠總時間看起來足夠，隔天仍可能覺得身體疲累、恢復不完全。' },
    ],
  },

  /* ---------- 2. Light Sleep ---------- */
  {
    id: 'light-sleep', num: 2,
    title: { en: 'Light Sleep', zh: '淺層睡眠' },
    blocks: [
      { type: 'p',
        en: 'Light sleep generally refers to N1 and N2 non-REM sleep on consumer devices.',
        zh: '智慧手錶所說的淺層睡眠（Light Sleep），通常主要包含 N1 與 N2 非快速動眼睡眠。' },
      { type: 'p',
        en: 'The term "light" can be misleading:',
        zh: '「淺層」這個名稱容易讓人誤以為它是不好的睡眠，但其實：' },
      { type: 'key', en: 'Light Sleep ≠ Bad Sleep', zh: 'Light Sleep ≠ Bad Sleep' },
      { type: 'p',
        en: 'Adults normally spend a substantial portion of the night in N2 sleep.',
        zh: '成年人一個晚上本來就會有相當大的比例處於 N2 睡眠。' },

      { type: 'lead', en: 'During light sleep:', zh: '在淺層睡眠期間：' },
      { type: 'list', items: [
        { en: 'Heart rate decreases', zh: '心率下降' },
        { en: 'Body temperature falls', zh: '體溫下降' },
        { en: 'Awareness of the environment decreases', zh: '對外界環境的注意降低' },
        { en: 'The brain processes information and memories', zh: '大腦處理資訊與記憶' },
        { en: 'The body transitions between sleep stages', zh: '身體在不同睡眠階段之間轉換' },
      ]},

      { type: 'lead', en: 'Normal sleep looks more like:', zh: '正常睡眠比較像：' },
      { type: 'flow',
        items: ['Light', 'Deep', 'Light', 'REM', 'Repeat'],
        zh:    ['淺層', '深層', '淺層', 'REM', '再循環'] },
      { type: 'p',
        en: 'Rather than: light = bad, deep = good.',
        zh: '而不是：淺層 = 不好；深層 = 好。' },

      { type: 'note',
        en: "A lot of light sleep isn't necessarily a problem. What matters more is whether your sleep is sufficiently long, reasonably continuous, and includes normal deep and REM sleep.",
        zh: '淺層睡眠多不一定代表睡不好。更重要的是整體睡眠是否足夠、是否頻繁中斷，以及是否正常進入 Deep Sleep 與 REM。' },
    ],
  },

  /* ---------- 3. REM ---------- */
  {
    id: 'rem', num: 3,
    title: { en: 'REM', zh: '快速動眼睡眠' },
    blocks: [
      { type: 'p',
        en: 'REM stands for Rapid Eye Movement sleep.',
        zh: 'REM 是 Rapid Eye Movement（快速動眼睡眠）的縮寫。' },

      { type: 'lead', en: 'During REM:', zh: 'REM 期間：' },
      { type: 'list', items: [
        { en: 'Brain activity becomes relatively high', zh: '大腦活動相對活躍' },
        { en: 'Vivid dreaming is common', zh: '容易出現生動夢境' },
        { en: 'Skeletal muscles are temporarily inhibited', zh: '骨骼肌暫時受到抑制' },
        { en: 'Memory and emotional information are processed', zh: '大腦處理記憶與情緒資訊' },
      ]},

      { type: 'lead', en: 'REM is particularly important for:', zh: 'REM 對以下功能特別重要：' },
      { type: 'flow',
        items: ['Memory', 'Learning', 'Emotional processing', 'Cognitive function'],
        zh:    ['記憶', '學習', '情緒處理', '認知功能'] },

      { type: 'key',
        en: 'Deep sleep helps restore the body; REM helps reorganize the brain.',
        zh: 'Deep Sleep 比較偏向修復身體；REM 比較偏向整理大腦。' },
      { type: 'p',
        en: 'This is not a strict physiological division of labour, but it is a useful way to hold the two apart.',
        zh: '這不是完全嚴格的生理分工，但作為理解模型很實用。' },

      { type: 'note',
        en: 'Repeatedly disrupted REM may contribute to poor concentration, impaired learning, mood changes, or mental fog.',
        zh: '如果 REM 長期受到干擾，可能出現注意力下降、學習效率降低、情緒波動或 brain fog。' },
    ],
  },

  /* ---------- 4. Breathing Variations ---------- */
  {
    id: 'breathing', num: 4,
    title: { en: 'Breathing Variations', zh: '呼吸變化' },
    blocks: [
      { type: 'p',
        en: 'Different wearables define "breathing variations" somewhat differently.',
        zh: '不同品牌的穿戴裝置對 Breathing Variations 的定義可能略有不同。' },
      { type: 'p',
        en: 'Generally, the device looks for changes or irregularities in your normal nighttime breathing pattern.',
        zh: '一般而言，它是在觀察睡眠期間是否出現和平常不同或不規律的呼吸模式。' },

      { type: 'lead', en: 'Possible causes include:', zh: '可能原因包括：' },
      { type: 'list', items: [
        { en: 'Sleeping position', zh: '睡姿' },
        { en: 'Nasal congestion', zh: '鼻塞' },
        { en: 'Alcohol', zh: '酒精' },
        { en: 'Illness', zh: '生病' },
        { en: 'Altitude', zh: '高海拔' },
        { en: 'Normal physiological variation', zh: '正常生理變化' },
        { en: 'Measurement error', zh: '測量誤差' },
      ]},

      { type: 'p',
        en: 'A single unusual night usually does not need to be over-interpreted.',
        zh: '偶爾一晚出現異常通常不用過度解讀。' },
      { type: 'p',
        en: 'A persistent change from your personal baseline is more important, particularly when it comes together with:',
        zh: '比較值得注意的是持續偏離自己的正常基準，尤其同時出現：' },
      { type: 'list', items: [
        { en: 'Heavy snoring', zh: '嚴重打鼾' },
        { en: 'Observed pauses in breathing during sleep', zh: '被觀察到睡眠時呼吸暫停' },
        { en: 'Morning headaches', zh: '早晨頭痛' },
        { en: 'Excessive daytime sleepiness', zh: '白天異常嗜睡' },
        { en: 'Unexplained fatigue', zh: '原因不明的疲勞' },
      ]},

      { type: 'p',
        en: 'A wearable cannot diagnose sleep apnea.',
        zh: '智慧手錶不能診斷睡眠呼吸中止症（Sleep Apnea）。' },

      { type: 'note',
        en: 'Repeated breathing disturbances can fragment sleep. You may have been lying down for eight hours and recovered far less than eight hours’ worth.',
        zh: '如果呼吸問題反覆干擾睡眠，你可能躺了八小時，但實際獲得的恢復遠少於八小時。' },
      { type: 'key', en: 'Sleep duration ≠ Sleep quality', zh: '睡眠時間 ≠ 睡眠品質' },
    ],
  },

  /* ---------- 5. Resting Heart Rate ---------- */
  {
    id: 'rhr', num: 5,
    title: { en: 'Resting Heart Rate (RHR)', zh: '靜止心率' },
    blocks: [
      { type: 'p',
        en: 'Resting heart rate is approximately how many times your heart beats per minute while your body is at rest.',
        zh: 'RHR 是 Resting Heart Rate（靜止心率），也就是身體處於休息狀態時，心臟每分鐘跳動的次數。' },
      { type: 'p',
        en: 'For many adults, a relatively lower RHR is associated with better cardiovascular fitness. However:',
        zh: '對許多成年人而言，相對較低的 RHR 通常與較好的心肺適能有關。但：' },
      { type: 'key', en: 'Lower ≠ automatically healthier', zh: '心率越低 ≠ 一定越健康' },
      { type: 'p',
        en: 'Age, genetics, medications, hydration, illness and fitness all affect RHR.',
        zh: '年齡、基因、藥物、水分、生病以及運動能力都會影響 RHR。' },
      { type: 'p',
        en: 'For training purposes, your own long-term baseline is far more valuable than a comparison with other people. For example:',
        zh: '對運動管理而言，自己的長期基準值比和別人比較更有價值。例如：' },
      { type: 'list', items: [
        { en: 'Your usual RHR = 50 bpm', zh: '平常 RHR = 50 bpm' },
        { en: 'Suddenly, for several days = 58–62 bpm', zh: '突然連續幾天 = 58–62 bpm' },
      ]},
      { type: 'lead', en: 'That can sometimes be connected with:', zh: '有時可能與以下因素有關：' },
      { type: 'flow',
        items: ['Incomplete recovery', 'Illness', 'Dehydration', 'Too little sleep', 'Training load too high'],
        zh:    ['恢復不足', '生病', '脫水', '睡眠不足', '訓練壓力過高'] },

      { type: 'contrast',
        badEn: 'Is 50 bpm good?',      badZh: '「50 bpm 好不好？」',
        goodEn: 'Is this normal for me?', goodZh: '「這個數字對我而言正常嗎？」' },
    ],
  },

  /* ---------- 6. HRV ---------- */
  {
    id: 'hrv', num: 6,
    title: { en: 'HRV Status', zh: '心率變異度' },
    blocks: [
      { type: 'p',
        en: 'HRV stands for Heart Rate Variability. It measures the variation in the time intervals between consecutive heartbeats — not how many times your heart beats in a minute.',
        zh: 'HRV 是 Heart Rate Variability（心率變異度）。它不是看「一分鐘跳幾下」，而是觀察每次心跳之間的時間差異。' },
      { type: 'p',
        en: 'A heart rate of 60 bpm does not mean one beat exactly every 1.000 second. It may run:',
        zh: '例如心率是 60 bpm，不代表心臟一定每 1.000 秒跳一次。可能是：' },
      { type: 'flow', items: ['0.94 s', '1.07 s', '0.98 s', '1.03 s'] },
      { type: 'p',
        en: 'Those differences are part of what HRV measures.',
        zh: '這些差異就是 HRV 的一部分。' },
      { type: 'p',
        en: 'HRV reflects, among other things, regulation by your autonomic nervous system (ANS). Broadly:',
        zh: 'HRV 可以反映包括自律神經系統（Autonomic Nervous System, ANS）調控在內的多種生理狀態。簡化來說：' },
      { type: 'list', items: [
        { en: 'Sympathetic → Fight or flight / mobilization', zh: '交感神經 → Fight or Flight → 動員／應付壓力' },
        { en: 'Parasympathetic → Rest and digest / recovery', zh: '副交感神經 → Rest and Digest → 休息／恢復' },
      ]},
      { type: 'p',
        en: 'Higher HRV relative to your personal baseline often corresponds with better recovery.',
        zh: '相對於自己的正常值，較高的 HRV 經常與較好的恢復狀況一致。' },

      { type: 'lead', en: 'Lower-than-usual HRV can occur with:', zh: 'HRV 比平常低可能與以下因素有關：' },
      { type: 'list', items: [
        { en: 'Hard training', zh: '高強度訓練' },
        { en: 'Poor sleep', zh: '睡眠不足' },
        { en: 'Alcohol', zh: '酒精' },
        { en: 'Illness', zh: '生病' },
        { en: 'Psychological stress', zh: '心理壓力' },
        { en: 'Dehydration', zh: '脫水' },
        { en: 'Large energy deficits', zh: '過大的熱量赤字' },
      ]},

      { type: 'key', en: "Higher HRV isn't universally better.", zh: 'HRV 不是越高越好。' },
      { type: 'p',
        en: 'Your own trend over time matters more than any comparison with other people.',
        zh: '最重要的是跟自己的長期 baseline 比較。' },
    ],
  },

  /* ---------- 7. VO2 max ---------- */
  {
    id: 'vo2max', num: 7,
    title: { en: 'VO₂ Max', zh: '最大攝氧量' },
    blocks: [
      { type: 'p',
        en: 'VO₂ max measures your body’s maximum ability to take in, transport and utilize oxygen during intense exercise. It is usually expressed as mL O₂/kg/min.',
        zh: 'VO₂ Max 衡量的是人體在高強度運動時，吸收、運送並利用氧氣的最大能力，通常使用 mL O₂/kg/min 作為單位。' },

      { type: 'lead', en: 'It reflects the combined performance of:', zh: '它整合了：' },
      { type: 'flow',
        items: ['Lungs', 'Heart', 'Circulation', 'Muscles', 'Mitochondria'],
        zh:    ['肺部', '心臟', '血液循環', '肌肉', '粒線體'] },

      { type: 'p',
        en: 'VO₂ max is one of the most useful indicators of cardiorespiratory fitness. In large population studies, higher cardiorespiratory fitness is strongly associated with better cardiovascular health and lower mortality risk.',
        zh: '因此 VO₂ Max 是評估心肺適能（Cardiorespiratory Fitness）的重要指標。從大型族群研究來看，較高的心肺適能與較好的心血管健康及較低的死亡風險高度相關。' },
      { type: 'p',
        en: 'It also changes how everyday effort feels. Improving it means the same physical task requires a smaller percentage of your total aerobic capacity. For example:',
        zh: '它也會影響日常生活的體力感受。心肺能力提升後，同樣的動作只需要用掉較小比例的能力。例如：' },
      { type: 'list', items: [
        { en: 'Before training: climbing the stairs = 60% of your aerobic capacity',
          zh: '訓練前：爬樓梯 = 使用 60% 的心肺能力' },
        { en: 'After improving: the same stairs = 45%',
          zh: '心肺能力提升後：同樣樓梯 = 45%' },
      ]},

      { type: 'quote',
        en: "The stairs haven't changed. Your engine has.",
        zh: '樓梯沒有變。改變的是你的引擎。' },
    ],
  },

  /* ---------- 8. Stress ---------- */
  {
    id: 'stress', num: 8,
    title: { en: 'Stress Level', zh: '壓力程度' },
    blocks: [
      { type: 'p',
        en: 'The "stress" a wearable shows generally does not directly measure cortisol, and it does not directly measure psychological stress.',
        zh: '智慧手錶顯示的 Stress Level 通常不是直接測量 cortisol（皮質醇），也不是直接測量心理壓力。' },
      { type: 'lead', en: 'Devices typically estimate physiological stress from combinations of:', zh: '裝置通常透過以下訊號估算身體目前承受的生理壓力：' },
      { type: 'flow',
        items: ['HRV', 'Heart rate', 'Activity', 'Other physiological signals'],
        zh:    ['HRV', '心率', '活動量', '其他生理訊號'] },

      { type: 'p',
        en: 'So when the watch says "High Stress", it does not necessarily mean "you are under a lot of psychological pressure". It could also come from:',
        zh: '所以手錶顯示 High Stress，不一定代表「你的心理壓力很大」。也可能來自：' },
      { type: 'list', items: [
        { en: 'Exercise', zh: '運動' },
        { en: 'Insufficient sleep', zh: '睡眠不足' },
        { en: 'Illness', zh: '生病' },
        { en: 'Caffeine', zh: '咖啡因' },
        { en: 'Dehydration', zh: '脫水' },
        { en: 'Alcohol', zh: '酒精' },
        { en: 'Psychological stress', zh: '心理壓力' },
        { en: 'Inadequate recovery', zh: '恢復不足' },
      ]},

      { type: 'key',
        en: 'Stress Level ≈ Physiological Load',
        zh: 'Stress Level ≈ Physiological Load — 身體目前承受的生理負荷' },

      { type: 'note',
        en: 'If stress stays high over a long period, alongside falling HRV, rising resting heart rate, poorer sleep and fatigue, it is worth asking whether recovery is simply inadequate.',
        zh: '如果 Stress 長期偏高，同時伴隨 HRV 下降、RHR 上升、睡眠品質下降及疲勞，就比較值得注意恢復是否不足。' },
    ],
  },

  /* ---------- Summary table ---------- */
  {
    id: 'together',
    title: { en: 'How the 8 Metrics Fit Together', zh: '八個指標如何一起看' },
    blocks: [
      { type: 'table',
        head: [ { en: 'Metric', zh: '指標' },
                { en: 'What it reflects', zh: '中文理解' },
                { en: 'Main question', zh: '主要問題' } ],
        rows: [
          [ { en: 'Deep Sleep', zh: 'Deep Sleep' },
            { en: 'Physical recovery and repair', zh: '身體恢復與修復' },
            { en: 'Did my body recover?', zh: '我的身體恢復了嗎？' } ],
          [ { en: 'Light Sleep', zh: 'Light Sleep' },
            { en: 'Sleep structure and cycling', zh: '睡眠結構與週期' },
            { en: 'Did I cycle through sleep normally?', zh: '我的睡眠週期正常嗎？' } ],
          [ { en: 'REM', zh: 'REM' },
            { en: 'Brain and emotional recovery', zh: '大腦與情緒恢復' },
            { en: 'Did my brain recover?', zh: '我的大腦恢復了嗎？' } ],
          [ { en: 'Breathing Variations', zh: 'Breathing Variations' },
            { en: 'Stability of breathing in sleep', zh: '睡眠呼吸穩定度' },
            { en: 'Was my breathing stable?', zh: '我的呼吸穩定嗎？' } ],
          [ { en: 'Resting HR', zh: 'Resting HR' },
            { en: 'Cardiovascular / recovery state', zh: '心血管／恢復狀態' },
            { en: 'Is my body working harder than usual?', zh: '身體是不是比平常更費力？' } ],
          [ { en: 'HRV', zh: 'HRV' },
            { en: 'Autonomic balance / recovery', zh: '自律神經／恢復程度' },
            { en: 'How recovered is my system?', zh: '我的系統恢復到什麼程度？' } ],
          [ { en: 'VO₂ Max', zh: 'VO₂ Max' },
            { en: 'Cardiorespiratory fitness', zh: '心肺能力' },
            { en: 'How powerful is my aerobic engine?', zh: '我的有氧引擎有多強？' } ],
          [ { en: 'Stress', zh: 'Stress' },
            { en: 'Physiological load', zh: '生理負荷' },
            { en: 'How much strain is my body under?', zh: '身體正承受多少負荷？' } ],
        ] },
    ],
  },

  /* ---------- The distinction ---------- */
  {
    id: 'distinction',
    title: { en: 'The Most Important Distinction', zh: '最重要的區別' },
    blocks: [
      { type: 'p',
        en: 'I would split these numbers into two groups.',
        zh: '我會把這些數據分成兩大類：' },

      { type: 'cards', items: [
        { label: 'Fitness',
          title: { en: 'Long-term capacity', zh: '長期體能' },
          body:  { en: 'VO₂ Max', zh: 'VO₂ Max' },
          foot:  { en: 'More like your engine specification — built over weeks, months, or longer.',
                   zh: '它比較像你的「引擎規格」，通常是數週、數月甚至更長時間累積形成的能力。' } },
        { label: 'Readiness',
          title: { en: "Today's state", zh: '當天身體狀態' },
          body:  { en: 'Sleep + RHR + HRV + Stress', zh: 'Sleep + RHR + HRV + Stress' },
          foot:  { en: "More like today's dashboard — what the car is telling you this morning.",
                   zh: '它們比較像「今天儀表板上的狀態」。' } },
      ]},

      { type: 'p',
        en: 'So it is entirely possible to have both at once — a good VO₂ max, and today:',
        zh: '因此，一個人完全可能同時出現 VO₂ Max 很好，但今天：' },
      { type: 'flow',
        items: ['HRV ↓', 'RHR ↑', 'Poor sleep', 'Stress ↑'],
        zh:    ['HRV ↓', 'RHR ↑', '睡眠品質差', 'Stress ↑'] },
      { type: 'p',
        en: 'That does not mean your fitness collapsed overnight.',
        zh: '這並不代表你的體能一夜之間變差，而是：' },

      { type: 'quote',
        en: 'Your engine is powerful, but it may not be fully recovered today.',
        zh: '你的引擎很好，但今天可能還沒有完全恢復。' },

      { type: 'p',
        en: 'So if you want to use these numbers to manage training, I would not only ask "can I train today?"',
        zh: '所以如果要用這些數據管理訓練，我不會只問：「我今天能不能運動？」' },
      { type: 'contrast',
        badEn: 'Can I train today?',
        badZh: '「我今天能不能運動？」',
        goodEn: 'Where is my long-term Fitness — and what is my Readiness today?',
        goodZh: '「我的長期 Fitness 在哪裡？今天的 Readiness 又如何？」' },
      { type: 'p',
        en: 'Keep those two questions apart, and these eight numbers finally start to mean something.',
        zh: '這兩個問題分開看，這八項數據才真正開始變得有意義。' },
    ],
  },

  ],
},

];
