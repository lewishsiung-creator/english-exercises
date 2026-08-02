/* Business Clarity and Communication Worksheet — content.
   Adapted from the printed worksheet, one entry per section.

   Every piece of text is a pair: `en` (English) and `zh` (Traditional
   Chinese). The renderer always shows English first and Chinese beneath in a
   lighter weight, so a block is safe to edit as long as the pair stays
   together.

   Runs of underscores — "______" or the fullwidth "＿＿" — are turned into
   printed blanks by the renderer, so write them the way they should look.

   Block types:
     sub      A. / B. subsection heading
     label    a small heading over a resource list ("Useful Phrases")
     lead     a framing sentence, set in italics
     ask      a discussion question, with a ruled answer space
     write    a large ruled area for drafting
     fill     sentence frames to complete
     check    checkbox options
     rank     items to put in order of importance
     phrases  English/Chinese vocabulary pairs, set in two columns
     table    a comparison grid
     note     a boxed aside
     bullets  a plain bilingual list
     steps    a numbered structure, each step with a sentence frame
     eg       an "Examples:" line
     grade    teacher rating band with room for comments
*/

const WORKSHEET = {
  title: 'Business Clarity and Communication Worksheet',
  titleZh: '商業策略與英文表達練習單',

  fields: [
    { en: 'Name', zh: '姓名', value: 'Lulu' },
    { en: 'Business', zh: '事業名稱', value: '' },
    { en: 'Date', zh: '日期', value: '' },
  ],

  purpose: {
    en: 'This worksheet is designed to help you explain your business clearly, logically, and persuasively in English.',
    zh: '這份練習單的目的是幫助你用英文，更清楚、有邏輯、具說服力地說明你的事業。',
    introEn: 'By the end of the discussion, you should be able to explain:',
    introZh: '完成討論後，你應該能清楚說明：',
    items: [
      { en: 'what your business does', zh: '你的事業在做什麼' },
      { en: 'who your ideal customers are', zh: '你的理想顧客是誰' },
      { en: 'what problems you solve', zh: '你解決哪些問題' },
      { en: 'why customers choose you', zh: '顧客為什麼選擇你' },
      { en: 'how your pricing creates value', zh: '你的定價如何創造價值' },
      { en: 'how your business generates revenue and profit', zh: '你的事業如何創造營收與獲利' },
      { en: 'how you attract customers and recruit suitable people', zh: '你如何吸引顧客並招募合適的人才' },
    ],
  },

  sections: [
    // ------------------------------------------------------------------
    {
      id: 'overview',
      n: 1,
      en: 'Business Overview',
      zh: '事業概述',
      blocks: [
        { t: 'sub', en: 'Explain Your Business Simply', zh: '用簡單方式說明你的事業', letter: 'A' },
        {
          t: 'lead',
          en: 'Imagine you are speaking to a potential client who knows nothing about your business.',
          zh: '想像你正在向一位完全不了解你事業的潛在客戶介紹。',
        },
        {
          t: 'fill',
          en: 'Complete the Sentences',
          zh: '完成句子',
          lines: [
            'My business provides ______.',
            'We mainly serve __________.',
            'We help our customers ___________.',
            'The main value we provide is _____.',
          ],
        },
        { t: 'write', en: 'Your 30-Second Explanation', zh: '30 秒事業介紹' },

        { t: 'label', en: 'Strategic Reflection', zh: '策略思考' },
        {
          t: 'check',
          en: 'Can someone understand your business within 30 seconds?',
          zh: '對方能否在 30 秒內理解你的事業？',
          items: [
            { en: 'Yes', zh: '可以' },
            { en: 'Partly', zh: '部分可以' },
            { en: 'Not yet', zh: '還不夠清楚' },
          ],
        },
        { t: 'ask', en: 'What part is difficult to explain?', zh: '哪一部分最難說清楚？' },

        {
          t: 'phrases',
          en: 'Useful Phrases and Collocations',
          zh: '實用片語與搭配詞',
          items: [
            { en: 'run a business', zh: '經營事業' },
            { en: 'operate in the ______ industry', zh: '在＿＿產業經營' },
            { en: 'provide products and services', zh: '提供產品與服務' },
            { en: 'serve a specific market', zh: '服務特定市場' },
            { en: 'focus on a particular customer segment', zh: '專注於特定顧客族群' },
            { en: 'meet customer needs', zh: '滿足顧客需求' },
            { en: 'create value for customers', zh: '為顧客創造價值' },
            { en: 'deliver a complete solution', zh: '提供完整解決方案' },
            { en: 'support business growth', zh: '支持事業成長' },
            { en: 'generate revenue through ______', zh: '透過＿＿創造營收' },
            { en: 'our core business is ______', zh: '我們的核心事業是＿＿' },
            { en: 'our main area of expertise is ______', zh: '我們主要的專業領域是＿＿' },
          ],
        },
        {
          t: 'fill',
          en: 'Useful Sentence Patterns',
          zh: '實用句型',
          lines: [
            'Our business specializes in ______.',
            'We provide ____ for ______.',
            'We mainly serve customers in the ________ industry.',
            'Our core business is helping customers ________.',
            'The main value we provide is ______.',
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'problem',
      n: 2,
      en: 'Customer Problem and Business Value',
      zh: '顧客問題與商業價值',
      blocks: [
        {
          t: 'lead',
          en: 'A strong business explanation should begin with the customer’s problem, not with the product.',
          zh: '好的商業說明應該從顧客問題開始，而不是從產品開始。',
        },

        { t: 'sub', en: 'Customer Problems', zh: '顧客問題', letter: 'A' },
        { t: 'ask', en: 'What problems do your customers face?', zh: '你的顧客面臨哪些問題？' },
        { t: 'ask', en: 'Which problem is the most urgent?', zh: '哪一個問題最迫切？' },
        {
          t: 'ask',
          en: 'What happens if the customer does not solve this problem?',
          zh: '如果顧客沒有解決這個問題，會發生什麼事？',
        },
        { t: 'ask', en: 'Are there any hidden costs?', zh: '是否有隱藏成本？' },
        {
          t: 'eg',
          en: 'wasted time, lost revenue, customer complaints, employee turnover, or poor decisions',
          zh: '浪費時間、營收損失、客訴、人才流失或錯誤決策',
        },

        { t: 'sub', en: 'Your Solution', zh: '你的解決方案', letter: 'B' },
        { t: 'ask', en: 'How does your business solve this problem?', zh: '你的事業如何解決這個問題？' },
        { t: 'ask', en: 'What result does the customer receive?', zh: '顧客最後獲得什麼成果？' },
        {
          t: 'check',
          en: 'What proof do you have?',
          zh: '你有哪些證據？',
          items: [
            { en: 'Customer feedback', zh: '顧客回饋' },
            { en: 'Repeat business', zh: '回購' },
            { en: 'Revenue growth', zh: '營收成長' },
            { en: 'Cost savings', zh: '成本降低' },
            { en: 'Case studies', zh: '成功案例' },
            { en: 'Data', zh: '數據' },
            { en: 'Other: ________', zh: '其他' },
          ],
        },

        {
          t: 'phrases',
          en: 'Useful Phrases and Collocations',
          zh: '實用片語與搭配詞',
          items: [
            { en: 'identify a customer problem', zh: '找出顧客問題' },
            { en: 'understand customer pain points', zh: '了解顧客痛點' },
            { en: 'address a specific challenge', zh: '處理特定挑戰' },
            { en: 'solve a recurring problem', zh: '解決反覆出現的問題' },
            { en: 'reduce hidden costs', zh: '降低隱藏成本' },
            { en: 'save customers time and effort', zh: '為顧客節省時間與心力' },
            { en: 'reduce operational risk', zh: '降低營運風險' },
            { en: 'improve business efficiency', zh: '提升營運效率' },
            { en: 'prevent potential losses', zh: '避免潛在損失' },
            { en: 'provide measurable value', zh: '提供可衡量的價值' },
            { en: 'deliver tangible results', zh: '創造具體成果' },
            { en: 'generate long-term benefits', zh: '創造長期效益' },
            { en: 'solve the root cause of the problem', zh: '解決問題的根本原因' },
            { en: 'support claims with evidence', zh: '以證據支持主張' },
          ],
        },
        {
          t: 'fill',
          en: 'Business Statement',
          zh: '商業表達句型',
          lines: [
            'One of the main problems our customers face is ________.',
            'This problem can result in ______.',
            'The hidden cost of this problem is ________.',
            'We address this challenge by ______.',
            'Our solution helps customers reduce _______.',
            'As a result, our customers can ______.',
            'We know our solution works because ________.',
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'customer',
      n: 3,
      en: 'Ideal Customer Profile',
      zh: '理想顧客輪廓',
      blocks: [
        {
          t: 'lead',
          en: 'Not every customer is the right customer.',
          zh: '不是每位顧客都是適合你的顧客。',
        },

        { t: 'sub', en: 'Describe Your Best Customers', zh: '描述你最理想的顧客', letter: 'A' },
        { t: 'ask', en: 'Who are your best customers?', zh: '你最理想的顧客是誰？' },
        { t: 'ask', en: 'What industry or market are they in?', zh: '他們來自哪個產業或市場？' },
        {
          t: 'check',
          en: 'What size are they?',
          zh: '他們的規模如何？',
          items: [
            { en: 'Individual', zh: '個人' },
            { en: 'Small business', zh: '小型企業' },
            { en: 'Medium-sized business', zh: '中型企業' },
            { en: 'Large company', zh: '大型企業' },
          ],
        },
        { t: 'ask', en: 'Who makes the buying decision?', zh: '誰負責做購買決策？' },
        {
          t: 'rank',
          en: 'What matters most to them?',
          zh: '他們最重視什麼？',
          hintEn: 'Rank the following items.',
          hintZh: '請將以下項目依重要程度排序。',
          items: [
            { en: 'Price', zh: '價格' },
            { en: 'Quality', zh: '品質' },
            { en: 'Speed', zh: '速度' },
            { en: 'Flexibility', zh: '彈性' },
            { en: 'Reliability', zh: '可靠性' },
            { en: 'Service', zh: '服務' },
            { en: 'Expertise', zh: '專業' },
            { en: 'Convenience', zh: '便利性' },
          ],
        },

        { t: 'sub', en: 'Customer Fit', zh: '顧客適配度', letter: 'B' },
        {
          t: 'ask',
          en: 'Which customers are not a good fit for your business?',
          zh: '哪些顧客不適合你的事業？',
        },
        { t: 'ask', en: 'Why?', zh: '為什麼？' },

        {
          t: 'phrases',
          en: 'Useful Phrases and Collocations',
          zh: '實用片語與搭配詞',
          items: [
            { en: 'target market', zh: '目標市場' },
            { en: 'target customer segment', zh: '目標顧客族群' },
            { en: 'ideal customer profile', zh: '理想顧客輪廓' },
            { en: 'key decision-maker', zh: '關鍵決策者' },
            { en: 'buying decision', zh: '購買決策' },
            { en: 'customer priorities', zh: '顧客優先考量' },
            { en: 'customer expectations', zh: '顧客期待' },
            { en: 'customer preferences', zh: '顧客偏好' },
            { en: 'buying criteria', zh: '購買標準' },
            { en: 'purchasing behavior', zh: '購買行為' },
            { en: 'high-value customer', zh: '高價值顧客' },
            { en: 'long-term customer', zh: '長期顧客' },
            { en: 'repeat customer', zh: '回頭客' },
            { en: 'a good fit for the business', zh: '適合這個事業' },
            { en: 'a poor fit for the business', zh: '不適合這個事業' },
            { en: 'customers who value quality over price', zh: '重視品質勝過價格的顧客' },
          ],
        },
        {
          t: 'fill',
          en: 'Business Statement',
          zh: '商業表達句型',
          lines: [
            'Our ideal customers are __________.',
            'They are usually looking for ______.',
            'Their main priorities are _________.',
            'The buying decision is usually made by _________.',
            'They choose us because ___________.',
            'We are a good fit for customers who value ______.',
            'We may not be suitable for customers who only focus on ______.',
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'advantage',
      n: 4,
      en: 'Competitive Advantage',
      zh: '競爭優勢',
      blocks: [
        {
          t: 'lead',
          en: 'Saying “we provide good service” is not enough. Most competitors say the same thing.',
          zh: '只說「我們提供良好服務」是不夠的，因為多數競爭者都會這樣說。',
        },

        { t: 'sub', en: 'Competitor Comparison', zh: '競爭者比較', letter: 'A' },
        {
          t: 'table',
          cols: [
            { en: 'Business Factor', zh: '商業因素' },
            { en: 'Your Business', zh: '你的事業' },
            { en: 'Main Competitor', zh: '主要競爭者' },
          ],
          rows: [
            { en: 'Core offer', zh: '核心服務' },
            { en: 'Price', zh: '價格' },
            { en: 'Quality', zh: '品質' },
            { en: 'Flexibility', zh: '彈性' },
            { en: 'Customer service', zh: '顧客服務' },
            { en: 'Speed', zh: '速度' },
            { en: 'Warranty', zh: '保固' },
            { en: 'Maintenance', zh: '維護' },
            { en: 'Customer experience', zh: '顧客體驗' },
          ],
        },

        { t: 'sub', en: 'Your Real Difference', zh: '真正的差異化', letter: 'B' },
        { t: 'ask', en: 'What do you do better than competitors?', zh: '你在哪些方面做得比競爭者更好？' },
        { t: 'ask', en: 'What do you do differently?', zh: '你有哪些不同的做法？' },
        { t: 'ask', en: 'What can competitors copy easily?', zh: '哪些優勢很容易被競爭者模仿？' },
        { t: 'ask', en: 'What is difficult for competitors to copy?', zh: '哪些優勢不容易被模仿？' },
        {
          t: 'check',
          en: 'What signal does your brand send?',
          zh: '你的品牌傳達什麼訊號？',
          items: [
            { en: 'Premium', zh: '高階' },
            { en: 'Professional', zh: '專業' },
            { en: 'Reliable', zh: '可靠' },
            { en: 'Innovative', zh: '創新' },
            { en: 'Flexible', zh: '彈性' },
            { en: 'Affordable', zh: '價格親民' },
            { en: 'Personal', zh: '人性化' },
            { en: 'Other: ____', zh: '其他' },
          ],
        },
        {
          t: 'ask',
          en: 'What part of your business may drive some customers away?',
          zh: '你的事業中，哪些因素可能使部分顧客流失？',
        },
        { t: 'ask', en: 'Is this an intentional business choice?', zh: '這是否是一項刻意的商業選擇？' },

        {
          t: 'phrases',
          en: 'Useful Phrases and Collocations',
          zh: '實用片語與搭配詞',
          items: [
            { en: 'competitive advantage', zh: '競爭優勢' },
            { en: 'unique selling proposition', zh: '獨特銷售主張' },
            { en: 'differentiate the business', zh: '創造事業差異化' },
            { en: 'stand out from competitors', zh: '從競爭者中脫穎而出' },
            { en: 'gain a competitive edge', zh: '取得競爭優勢' },
            { en: 'offer greater flexibility', zh: '提供更大彈性' },
            { en: 'provide personalized service', zh: '提供個人化服務' },
            { en: 'deliver consistent quality', zh: '提供穩定品質' },
            { en: 'respond quickly to customer needs', zh: '快速回應顧客需求' },
            { en: 'build strong customer relationships', zh: '建立穩固的顧客關係' },
            { en: 'create a distinctive customer experience', zh: '創造獨特顧客體驗' },
            { en: 'difficult to imitate', zh: '難以模仿' },
            { en: 'easy to replicate', zh: '容易複製' },
            { en: 'maintain a strong market position', zh: '維持強勢市場地位' },
            { en: 'send a premium signal', zh: '傳達高階品牌訊號' },
            { en: 'drive some customers away', zh: '使部分顧客流失' },
          ],
        },
        {
          t: 'fill',
          en: 'Competitive Positioning Statement',
          zh: '競爭定位句型',
          lines: [
            'What differentiates us from our competitors is ________.',
            'Unlike many competitors, we _____.',
            'Our main competitive advantage comes from _____.',
            'One area where we stand out is _________.',
            'This advantage is difficult to copy because _____.',
            'Our brand sends a clear signal that we are ______.',
            'One possible disadvantage is _____.',
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'pricing',
      n: 5,
      en: 'Pricing and Customer Value',
      zh: '定價與顧客價值',
      blocks: [
        {
          t: 'lead',
          en: 'Price should reflect value, not only cost.',
          zh: '價格不應只反映成本，也應反映價值。',
        },

        { t: 'sub', en: 'Pricing Logic', zh: '定價邏輯', letter: 'A' },
        {
          t: 'check',
          en: 'How do you currently decide your price?',
          zh: '你目前如何制定價格？',
          items: [
            { en: 'Cost-based pricing', zh: '成本導向定價' },
            { en: 'Competitor-based pricing', zh: '競爭導向定價' },
            { en: 'Value-based pricing', zh: '價值導向定價' },
            { en: 'Negotiated pricing', zh: '議價定價' },
            { en: 'Package pricing', zh: '套裝定價' },
            { en: 'Other: ________', zh: '其他' },
          ],
        },
        { t: 'ask', en: 'What are your main costs?', zh: '你的主要成本有哪些？' },
        { t: 'ask', en: 'What hidden costs should be included?', zh: '有哪些隱藏成本應該納入？' },
        {
          t: 'check',
          en: 'What value does the customer receive?',
          zh: '顧客獲得哪些價值？',
          items: [
            { en: 'Save time', zh: '節省時間' },
            { en: 'Reduce cost', zh: '降低成本' },
            { en: 'Increase revenue', zh: '增加營收' },
            { en: 'Reduce risk', zh: '降低風險' },
            { en: 'Improve quality', zh: '提升品質' },
            { en: 'Improve customer experience', zh: '改善顧客體驗' },
            { en: 'Make better decisions', zh: '做出更好的決策' },
          ],
        },
        { t: 'ask', en: 'Why is your service worth the price?', zh: '為什麼你的服務值得這個價格？' },

        { t: 'sub', en: 'Find the Sweet Spot', zh: '找到最佳平衡點', letter: 'B' },
        { t: 'ask', en: 'What happens if the price is too high?', zh: '如果價格太高，可能會發生什麼？' },
        { t: 'ask', en: 'What happens if the price is too low?', zh: '如果價格太低，可能會發生什麼？' },
        { t: 'ask', en: 'What is the sweet spot?', zh: '最佳平衡點是什麼？' },

        {
          t: 'phrases',
          en: 'Useful Phrases and Collocations',
          zh: '實用片語與搭配詞',
          items: [
            { en: 'pricing strategy', zh: '定價策略' },
            { en: 'set the price', zh: '制定價格' },
            { en: 'determine the right price', zh: '決定合適價格' },
            { en: 'cost-based pricing', zh: '成本導向定價' },
            { en: 'value-based pricing', zh: '價值導向定價' },
            { en: 'competitor-based pricing', zh: '競爭導向定價' },
            { en: 'premium pricing', zh: '高價定位' },
            { en: 'package pricing', zh: '套裝定價' },
            { en: 'price sensitivity', zh: '價格敏感度' },
            { en: 'pricing power', zh: '定價能力' },
            { en: 'perceived value', zh: '感知價值' },
            { en: 'value for money', zh: '物有所值' },
            { en: 'justify the price', zh: '證明價格合理' },
            { en: 'cover operating costs', zh: '支應營運成本' },
            { en: 'protect the profit margin', zh: '維持利潤率' },
            { en: 'offer a discount', zh: '提供折扣' },
            { en: 'negotiate the price', zh: '協商價格' },
            { en: 'find the sweet spot', zh: '找到最佳平衡點' },
            { en: 'balance affordability and profitability', zh: '平衡價格親民與獲利能力' },
            { en: 'drive customers away', zh: '使顧客流失' },
          ],
        },
        {
          t: 'fill',
          en: 'Pricing Statement',
          zh: '定價表達句型',
          lines: [
            'Our pricing strategy is based on _________.',
            'We set our prices according to ____.',
            'Customers are willing to pay because _____.',
            'The price reflects the value of ____.',
            'Our service provides value by _____.',
            'We need to find the sweet spot between ____ and ______.',
            'If the price is too high, we may _________.',
            'If the price is too low, customers may ____.',
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'revenue',
      n: 6,
      en: 'Revenue, Profit, and Cash Flow',
      zh: '營收、獲利與現金流',
      blocks: [
        {
          t: 'lead',
          en: 'A business can increase revenue without increasing profit.',
          zh: '事業可能增加營收，卻沒有增加獲利。',
        },

        { t: 'sub', en: 'Financial Clarity', zh: '財務釐清', letter: 'A' },
        {
          t: 'ask',
          en: 'Where does your revenue come from?',
          zh: '你的營收來源有哪些？',
          tagEn: 'Revenue',
          tagZh: '營收',
        },
        {
          t: 'ask',
          en: 'What are your largest costs?',
          zh: '你最大的成本是什麼？',
          tagEn: 'Costs',
          tagZh: '成本',
        },
        {
          t: 'ask',
          en: 'What activities generate the highest profit?',
          zh: '哪些活動帶來最高的獲利？',
          tagEn: 'Net Profit',
          tagZh: '淨利',
        },
        {
          t: 'check',
          en: 'When do customers pay?',
          zh: '顧客何時付款？',
          tagEn: 'Cash Flow',
          tagZh: '現金流',
          items: [
            { en: 'Before service', zh: '服務前' },
            { en: 'Immediately after service', zh: '服務後立即付款' },
            { en: 'Within 30 days', zh: '30 天內' },
            { en: 'Within 60 days', zh: '60 天內' },
            { en: 'Other: ________', zh: '其他' },
          ],
        },
        {
          t: 'ask',
          en: 'Does delayed payment create cash-flow pressure?',
          zh: '延遲付款是否會造成現金流壓力？',
        },

        {
          t: 'note',
          en: 'Important Distinction',
          zh: '重要區別',
          bodyEn: 'Net profit is not the same as cash flow. A business may be profitable but still lack enough cash to pay employees, suppliers, rent, or other short-term expenses.',
          bodyZh: '淨利不等於現金流。一家公司可能有獲利，但仍可能沒有足夠現金支付員工、供應商、租金或其他短期支出。',
        },

        {
          t: 'phrases',
          en: 'Useful Phrases and Collocations',
          zh: '實用片語與搭配詞',
          items: [
            { en: 'generate revenue', zh: '創造營收' },
            { en: 'increase revenue', zh: '增加營收' },
            { en: 'grow sales', zh: '提升銷售額' },
            { en: 'revenue stream', zh: '營收來源' },
            { en: 'recurring revenue', zh: '經常性收入' },
            { en: 'one-time revenue', zh: '一次性收入' },
            { en: 'operating costs', zh: '營運成本' },
            { en: 'fixed costs', zh: '固定成本' },
            { en: 'variable costs', zh: '變動成本' },
            { en: 'reduce expenses', zh: '降低支出' },
            { en: 'cut unnecessary costs', zh: '削減不必要成本' },
            { en: 'improve the profit margin', zh: '提高利潤率' },
            { en: 'increase net profit', zh: '增加淨利' },
            { en: 'maintain healthy cash flow', zh: '維持健康現金流' },
            { en: 'face cash-flow pressure', zh: '面臨現金流壓力' },
            { en: 'delay payment', zh: '延遲付款' },
            { en: 'collect payment', zh: '收取款項' },
            { en: 'outstanding payment', zh: '未付款項' },
            { en: 'payment terms', zh: '付款條件' },
            { en: 'break-even point', zh: '損益平衡點' },
            { en: 'cash inflow and outflow', zh: '現金流入與流出' },
          ],
        },
        {
          t: 'fill',
          en: 'Business Statement',
          zh: '商業表達句型',
          lines: [
            'Our main revenue stream comes from ______.',
            'We generate recurring revenue through ____.',
            'Our largest operating costs are ____.',
            'To improve profitability, we need to ______.',
            'To increase net profit, we could _________.',
            'To improve cash flow, we could ____.',
            'Delayed payments create pressure because ________.',
            'Increasing revenue does not always lead to higher profit because ________.',
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'acquisition',
      n: 7,
      en: 'Customer Acquisition and Retention',
      zh: '顧客開發與留存',
      blocks: [
        {
          t: 'lead',
          en: 'A sustainable business needs both new customers and repeat customers.',
          zh: '一個可持續經營的事業，同時需要新顧客與回頭客。',
        },

        { t: 'sub', en: 'Customer Acquisition', zh: '顧客開發', letter: 'A' },
        {
          t: 'check',
          en: 'How do customers find you?',
          zh: '顧客如何找到你？',
          items: [
            { en: 'Referrals', zh: '轉介紹' },
            { en: 'Workshops', zh: '工作坊' },
            { en: 'Social media', zh: '社群媒體' },
            { en: 'Advertising', zh: '廣告' },
            { en: 'Partnerships', zh: '商業合作' },
            { en: 'Networking', zh: '人脈' },
            { en: 'Existing customers', zh: '現有顧客' },
            { en: 'Other: ________', zh: '其他' },
          ],
        },
        {
          t: 'ask',
          en: 'Which channel brings the best-quality customers?',
          zh: '哪一個管道能帶來品質最好的顧客？',
        },
        {
          t: 'ask',
          en: 'Which channel brings customers at the lowest cost?',
          zh: '哪一個管道能以最低成本帶來顧客？',
        },
        {
          t: 'ask',
          en: 'How do you build trust before customers buy?',
          zh: '顧客購買前，你如何建立信任？',
        },

        { t: 'sub', en: 'Customer Retention', zh: '顧客留存', letter: 'B' },
        { t: 'ask', en: 'Why do customers return?', zh: '顧客為什麼會再次購買？' },
        { t: 'ask', en: 'What may drive customers away?', zh: '哪些因素可能會讓顧客流失？' },
        { t: 'ask', en: 'How do you create repeat business?', zh: '你如何創造回購？' },
        { t: 'ask', en: 'How do you collect customer feedback?', zh: '你如何蒐集顧客回饋？' },

        {
          t: 'phrases',
          en: 'Useful Phrases and Collocations',
          zh: '實用片語與搭配詞',
          items: [
            { en: 'attract new customers', zh: '吸引新顧客' },
            { en: 'reach potential customers', zh: '接觸潛在顧客' },
            { en: 'generate leads', zh: '開發潛在客戶' },
            { en: 'convert leads into customers', zh: '將潛在客戶轉化為顧客' },
            { en: 'customer acquisition', zh: '顧客開發' },
            { en: 'customer acquisition cost', zh: '顧客取得成本' },
            { en: 'word-of-mouth marketing', zh: '口碑行銷' },
            { en: 'customer referrals', zh: '顧客轉介紹' },
            { en: 'build brand awareness', zh: '建立品牌知名度' },
            { en: 'build customer trust', zh: '建立顧客信任' },
            { en: 'create a positive first impression', zh: '建立良好第一印象' },
            { en: 'retain existing customers', zh: '留住現有顧客' },
            { en: 'improve customer retention', zh: '提升顧客留存率' },
            { en: 'encourage repeat purchases', zh: '鼓勵重複購買' },
            { en: 'generate repeat business', zh: '創造回購' },
            { en: 'build customer loyalty', zh: '建立顧客忠誠度' },
            { en: 'strengthen customer relationships', zh: '強化顧客關係' },
            { en: 'collect customer feedback', zh: '蒐集顧客回饋' },
            { en: 'respond to customer complaints', zh: '回應顧客抱怨' },
            { en: 'reduce customer churn', zh: '降低顧客流失率' },
          ],
        },
        {
          t: 'fill',
          en: 'Customer Growth Statement',
          zh: '顧客成長表達句型',
          lines: [
            'Most of our new customers come from _____.',
            'Our most effective customer acquisition channel is ________.',
            'We build trust by _________.',
            'We turn first-time customers into repeat customers by ________.',
            'Customers continue working with us because ________.',
            'One factor that may drive customers away is ________.',
            'To improve customer retention, we should ______.',
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'recruitment',
      n: 8,
      en: 'Workshop-Based Recruitment',
      zh: '工作坊招募模式',
      blocks: [
        { t: 'sub', en: 'Recruitment Strategy', zh: '招募策略', letter: 'A' },
        { t: 'ask', en: 'Why do you recruit through workshops?', zh: '你為什麼透過工作坊招募？' },
        { t: 'ask', en: 'Who usually attends the workshops?', zh: '通常有哪些人參加工作坊？' },
        {
          t: 'ask',
          en: 'What can you observe during a workshop that you cannot see in a traditional interview?',
          zh: '在工作坊中，你可以觀察到哪些傳統面試看不到的特質？',
        },
        {
          t: 'check',
          en: 'What qualities are you looking for?',
          zh: '你在尋找哪些特質？',
          items: [
            { en: 'Communication', zh: '溝通能力' },
            { en: 'Attitude', zh: '態度' },
            { en: 'Problem-solving', zh: '問題解決能力' },
            { en: 'Teamwork', zh: '團隊合作' },
            { en: 'Leadership', zh: '領導力' },
            { en: 'Professional knowledge', zh: '專業知識' },
            { en: 'Cultural fit', zh: '文化適配' },
            { en: 'Learning ability', zh: '學習能力' },
          ],
        },
        { t: 'ask', en: 'How do you filter the right candidates?', zh: '你如何篩選合適的人才？' },

        { t: 'sub', en: 'Business Value of Workshops', zh: '工作坊的商業價值', letter: 'B' },
        { t: 'ask', en: 'What are the advantages?', zh: '有哪些優點？' },
        { t: 'ask', en: 'What are the risks or limitations?', zh: '有哪些風險或限制？' },
        { t: 'ask', en: 'How does this approach reduce hiring risk?', zh: '這種方式如何降低招募風險？' },

        {
          t: 'phrases',
          en: 'Useful Phrases and Collocations',
          zh: '實用片語與搭配詞',
          items: [
            { en: 'recruit potential employees', zh: '招募潛在員工' },
            { en: 'attract qualified candidates', zh: '吸引合格候選人' },
            { en: 'identify suitable candidates', zh: '找出適合的人選' },
            { en: 'screen applicants', zh: '篩選應徵者' },
            { en: 'evaluate candidates', zh: '評估候選人' },
            { en: 'assess communication skills', zh: '評估溝通能力' },
            { en: 'observe actual performance', zh: '觀察實際表現' },
            { en: 'demonstrate problem-solving ability', zh: '展現問題解決能力' },
            { en: 'show leadership potential', zh: '展現領導潛力' },
            { en: 'evaluate cultural fit', zh: '評估文化適配度' },
            { en: 'hands-on assessment', zh: '實作型評估' },
            { en: 'traditional job interview', zh: '傳統工作面試' },
            { en: 'selection process', zh: '選才流程' },
            { en: 'talent pipeline', zh: '人才管道' },
            { en: 'recruitment strategy', zh: '招募策略' },
            { en: 'filter the right people', zh: '篩選合適的人' },
            { en: 'make an informed hiring decision', zh: '做出資訊充分的招募決策' },
            { en: 'reduce hiring risk', zh: '降低招募風險' },
          ],
        },
        {
          t: 'fill',
          en: 'Recruitment Statement',
          zh: '招募表達句型',
          lines: [
            'We recruit potential employees by organizing ___.',
            'During the workshop, we observe _________.',
            'We evaluate candidates based on _________.',
            'This allows us to identify people who _____.',
            'Compared with a traditional interview, this approach provides _.',
            'One major advantage is __________.',
            'One possible limitation is _______.',
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'story',
      n: 9,
      en: 'Strategic Business Story',
      zh: '策略型商業故事',
      blocks: [
        {
          t: 'lead',
          en: 'Use your answers to create a clear business narrative.',
          zh: '利用前面的回答，建立一段清楚的商業敘事。',
        },
        {
          t: 'fill',
          en: 'Story Structure',
          zh: '故事架構',
          lines: [
            'Our business serves ________.',
            'Our customers often face _________.',
            'If they do not solve this problem, they may ______.',
            'We help them by ___________.',
            'Unlike our competitors, we _______.',
            'Customers choose us because ______.',
            'Our pricing reflects ________.',
            'We attract customers through _____.',
            'We retain them by __________.',
            'Our next business priority is ______.',
          ],
        },

        {
          t: 'phrases',
          en: 'Useful Phrases and Collocations',
          zh: '實用片語與搭配詞',
          items: [
            { en: 'tell a compelling business story', zh: '說出有說服力的商業故事' },
            { en: 'present a clear business narrative', zh: '呈現清楚的商業敘事' },
            { en: 'explain the business model', zh: '說明商業模式' },
            { en: 'connect the problem with the solution', zh: '將問題與解決方案連結' },
            { en: 'highlight customer value', zh: '強調顧客價值' },
            { en: 'support claims with evidence', zh: '以證據支持主張' },
            { en: 'provide a real-life example', zh: '提供真實案例' },
            { en: 'share a customer success story', zh: '分享顧客成功案例' },
            { en: 'build an emotional connection', zh: '建立情感連結' },
            { en: 'make the message memorable', zh: '讓訊息令人印象深刻' },
            { en: 'communicate a clear value proposition', zh: '傳達清楚的價值主張' },
            { en: 'explain the logic behind the business', zh: '說明事業背後的邏輯' },
            { en: 'describe the customer journey', zh: '描述顧客旅程' },
            { en: 'end with a clear takeaway', zh: '以清楚重點作結' },
          ],
        },
        {
          t: 'fill',
          en: 'Storytelling Sentence Patterns',
          zh: '商業故事句型',
          lines: [
            'The story behind our business began when ________.',
            'We realized that many customers were struggling with ________.',
            'This led us to develop _____.',
            'One example that demonstrates our value is ________.',
            'A customer once came to us because ________.',
            'After working with us, the customer was able to _______.',
            'The key takeaway is that ________.',
            'Our business is not only about ____, but also about ______.',
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'executive',
      n: 10,
      en: 'Executive Business Introduction',
      zh: '高階商業介紹',
      blocks: [
        {
          t: 'lead',
          en: 'Prepare a 90-second business introduction.',
          zh: '準備一段 90 秒的商業介紹。',
        },
        {
          t: 'steps',
          en: 'Suggested Structure',
          zh: '建議架構',
          items: [
            { en: 'Business Context', zh: '商業背景', line: 'My business focuses on ___________.' },
            { en: 'Customer Problem', zh: '顧客問題', line: 'Our customers often struggle with _______.' },
            { en: 'Solution', zh: '解決方案', line: 'We solve this problem by _________.' },
            { en: 'Differentiation', zh: '差異化', line: 'What makes us different is _______.' },
            { en: 'Business Value', zh: '商業價值', line: 'This helps our customers _________.' },
            { en: 'Business Model', zh: '商業模式', line: 'We generate revenue through _____.' },
            { en: 'Growth Priority', zh: '成長重點', line: 'Our next priority is ________.' },
          ],
        },
        { t: 'write', en: 'Draft', zh: '草稿', big: true },

        {
          t: 'phrases',
          en: 'Useful Phrases and Collocations',
          zh: '實用片語與搭配詞',
          items: [
            { en: 'give a concise business introduction', zh: '進行簡潔的商業介紹' },
            { en: 'provide a high-level overview', zh: '提供高層次概述' },
            { en: 'summarize the business model', zh: '概述商業模式' },
            { en: 'outline the main business activities', zh: '概述主要商業活動' },
            { en: 'explain the market opportunity', zh: '說明市場機會' },
            { en: 'present the core value proposition', zh: '提出核心價值主張' },
            { en: 'highlight key strengths', zh: '強調主要優勢' },
            { en: 'describe the growth strategy', zh: '說明成長策略' },
            { en: 'identify the next priority', zh: '確認下一個優先事項' },
            { en: 'scale the business', zh: '擴大事業規模' },
            { en: 'expand into new markets', zh: '拓展新市場' },
            { en: 'strengthen market presence', zh: '強化市場能見度' },
            { en: 'build strategic partnerships', zh: '建立策略夥伴關係' },
            { en: 'achieve sustainable growth', zh: '達成可持續成長' },
            { en: 'support long-term development', zh: '支持長期發展' },
          ],
        },
        {
          t: 'fill',
          en: 'Executive Sentence Patterns',
          zh: '高階商業表達句型',
          lines: [
            'Let me give you a brief overview of our business.',
            'Our business focuses primarily on ______.',
            'We serve customers who _________.',
            'The main problem we solve is ____.',
            'What makes us different is ______.',
            'Our business model is built around ______.',
            'Our next strategic priority is _____.',
            'In the long term, we aim to ______.',
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'reflection',
      n: 11,
      en: 'Strategic Reflection',
      zh: '策略反思',
      blocks: [
        {
          t: 'ask',
          en: 'Which part of your business is easiest to explain?',
          zh: '你的事業中，哪一部分最容易說明？',
        },
        { t: 'ask', en: 'Which part is still unclear?', zh: '哪一部分仍然不夠清楚？' },
        {
          t: 'ask',
          en: 'What business assumption should you challenge?',
          zh: '你應該重新檢視哪一項商業假設？',
        },
        {
          t: 'ask',
          en: 'Which customer segment deserves more attention?',
          zh: '哪一類顧客值得投入更多資源？',
        },
        {
          t: 'ask',
          en: 'Which activity creates revenue but little profit?',
          zh: '哪一項活動能創造營收，卻沒有帶來太多獲利？',
        },
        { t: 'ask', en: 'What should the business stop doing?', zh: '你的事業應該停止做什麼？' },
        { t: 'ask', en: 'What should the business start doing?', zh: '你的事業應該開始做什麼？' },
        { t: 'ask', en: 'What should the business continue doing?', zh: '你的事業應該持續做什麼？' },

        {
          t: 'phrases',
          en: 'Useful Phrases and Collocations',
          zh: '實用片語與搭配詞',
          items: [
            { en: 'review business performance', zh: '檢視事業表現' },
            { en: 'challenge an assumption', zh: '質疑既有假設' },
            { en: 'identify areas for improvement', zh: '找出改善空間' },
            { en: 'evaluate business priorities', zh: '評估商業優先事項' },
            { en: 'allocate resources effectively', zh: '有效配置資源' },
            { en: 'focus on high-value activities', zh: '專注於高價值活動' },
            { en: 'eliminate low-value activities', zh: '移除低價值活動' },
            { en: 'make a strategic trade-off', zh: '做出策略性取捨' },
            { en: 'improve operational efficiency', zh: '改善營運效率' },
            { en: 'review the business model', zh: '檢視商業模式' },
            { en: 'adjust the strategy', zh: '調整策略' },
            { en: 'set clear priorities', zh: '設定明確優先順序' },
            { en: 'take corrective action', zh: '採取修正行動' },
            { en: 'measure business impact', zh: '衡量商業影響' },
            { en: 'make an evidence-based decision', zh: '做出以證據為基礎的決策' },
            { en: 'focus on long-term value', zh: '專注於長期價值' },
          ],
        },
        {
          t: 'fill',
          en: 'Reflection Sentence Patterns',
          zh: '策略反思句型',
          lines: [
            'One assumption we should challenge is _____.',
            'One area that requires improvement is _____.',
            'We may be spending too much time on _____.',
            'We should allocate more resources to ______.',
            'One activity we should stop doing is _______.',
            'One activity we should continue investing in is ________.',
            'There is a trade-off between ____ and ______.',
            'Our next step should be __________.',
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'language',
      n: 12,
      en: 'Useful Business Discussion Language',
      zh: '商業討論實用句型',
      blocks: [
        {
          t: 'phrases',
          en: 'Expressing an Opinion',
          zh: '表達意見',
          letter: 'A',
          items: [
            { en: 'From my perspective, ...', zh: '從我的角度來看……' },
            { en: 'I see this differently.', zh: '我對這件事有不同看法。' },
            { en: 'My view is that ...', zh: '我的看法是……' },
            { en: 'I tend to think that ...', zh: '我傾向認為……' },
            { en: 'Based on our experience, ...', zh: '根據我們的經驗……' },
            { en: 'I have a different view on this.', zh: '我對這件事有不同的看法。' },
          ],
        },
        {
          t: 'phrases',
          en: 'Giving Reasons',
          zh: '說明原因',
          letter: 'B',
          items: [
            { en: 'The main reason is that ...', zh: '主要原因是……' },
            { en: 'This is largely because ...', zh: '這主要是因為……' },
            { en: 'One possible explanation is ...', zh: '一個可能的解釋是……' },
            { en: 'The logic behind this is ...', zh: '這背後的邏輯是……' },
            { en: 'There are two reasons for this.', zh: '這背後有兩個原因。' },
          ],
        },
        {
          t: 'phrases',
          en: 'Providing Evidence',
          zh: '提供證據',
          letter: 'C',
          items: [
            { en: 'The evidence suggests that ...', zh: '證據顯示……' },
            { en: 'Our data shows that ...', zh: '我們的數據顯示……' },
            { en: 'Customer feedback indicates that ...', zh: '顧客回饋顯示……' },
            { en: 'One example is ...', zh: '一個例子是……' },
            { en: 'We have seen this in practice.', zh: '我們已經在實務上看到這種情況。' },
            { en: 'The results provide proof that ...', zh: '這些成果證明……' },
          ],
        },
        {
          t: 'phrases',
          en: 'Comparing Options',
          zh: '比較不同選項',
          letter: 'D',
          items: [
            { en: 'Compared with ______, ...', zh: '與＿＿相比……' },
            { en: 'The main difference is ...', zh: '主要差異是……' },
            { en: 'One advantage is ..., while one disadvantage is ...', zh: '一項優點是……，而一項缺點是……' },
            { en: 'This option offers greater flexibility.', zh: '這個選項提供較大的彈性。' },
            { en: 'There is a trade-off between __ and ____.', zh: '＿＿與＿＿之間存在取捨。' },
            { en: 'This option provides better value for money.', zh: '這個選項更物有所值。' },
          ],
        },
        {
          t: 'phrases',
          en: 'Clarifying an Idea',
          zh: '釐清想法',
          letter: 'E',
          items: [
            { en: 'What I mean is ...', zh: '我的意思是……' },
            { en: 'Let me explain this more clearly.', zh: '讓我更清楚地說明。' },
            { en: 'To put it another way, ...', zh: '換句話說……' },
            { en: 'The key point is ...', zh: '關鍵重點是……' },
            { en: 'More specifically, ...', zh: '更具體地說……' },
          ],
        },
        {
          t: 'phrases',
          en: 'Summarizing',
          zh: '總結',
          letter: 'F',
          items: [
            { en: 'The key takeaway is ...', zh: '主要重點是……' },
            { en: 'In summary, ...', zh: '總結來說……' },
            { en: 'The bottom line is ...', zh: '最重要的是……' },
            { en: 'What this means for our business is ...', zh: '這對我們事業的意義是……' },
            { en: 'The next step is to ...', zh: '下一步是……' },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      id: 'final',
      n: 13,
      en: 'Final Business Communication Task',
      zh: '最終商業表達任務',
      blocks: [
        {
          t: 'lead',
          en: 'Use the worksheet to prepare a two-minute explanation of your business.',
          zh: '請運用這份練習單，準備一段兩分鐘的事業介紹。',
        },
        {
          t: 'bullets',
          en: 'Your explanation should include:',
          zh: '你的說明應包含：',
          ordered: true,
          items: [
            { en: 'your business and target customers', zh: '你的事業與目標顧客' },
            { en: 'the main customer problem', zh: '顧客的主要問題' },
            { en: 'your solution', zh: '你的解決方案' },
            { en: 'your competitive advantage', zh: '你的競爭優勢' },
            { en: 'your pricing logic', zh: '你的定價邏輯' },
            { en: 'how you attract and retain customers', zh: '你如何吸引並留住顧客' },
            { en: 'your next business priority', zh: '你的下一個商業重點' },
          ],
        },
        { t: 'write', en: 'Final Draft', zh: '最終草稿', big: true },
      ],
    },
  ],

  // --------------------------------------------------------------------
  feedback: {
    en: 'Teacher Feedback',
    zh: '教師回饋',
    bands: [
      {
        en: 'Clarity',
        zh: '表達清楚度',
        items: [
          { en: 'Clear and concise', zh: '清楚簡潔' },
          { en: 'Generally clear', zh: '大致清楚' },
          { en: 'Needs more structure', zh: '需要更有結構' },
        ],
      },
      {
        en: 'Business Logic',
        zh: '商業邏輯',
        items: [
          { en: 'Strong', zh: '邏輯完整' },
          { en: 'Developing', zh: '正在建立' },
          { en: 'Needs clarification', zh: '需要進一步釐清' },
        ],
      },
      {
        en: 'Business Vocabulary',
        zh: '商業字彙',
        items: [
          { en: 'Accurate and natural', zh: '正確自然' },
          { en: 'Generally effective', zh: '大致有效' },
          { en: 'Needs more practice', zh: '需要更多練習' },
        ],
      },
      {
        en: 'Evidence and Examples',
        zh: '證據與案例',
        items: [
          { en: 'Specific and convincing', zh: '具體且有說服力' },
          { en: 'Some examples', zh: '有部分案例' },
          { en: 'Too general', zh: '過於籠統' },
        ],
      },
    ],
    goal: { en: 'Next Communication Goal', zh: '下一個溝通目標' },
  },
};
