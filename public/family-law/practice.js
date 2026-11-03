/* Family Law English — the Practice tab.

   Added 2026-11-03, once Lewis said the learner is a lawyer (B1–B2) who meets
   foreign clients, reads English documents and writes English emails. So
   three kinds of piece, one for each of those:

     dialogue  a consultation, lawyer (L) and client (C), line by line
     document  an English document a Taiwan lawyer is handed, with a note on
               what matters for Taiwan
     email     an email the lawyer writes

   Everything is fictional and written for this page — the people, the
   amounts, the dates, the court in the decree. The law behind each line is
   Taiwan's, as in content.js; the notes say which rule a line rests on where
   it is not obvious. Nothing names the learner's firm.

   Fields:
     id, kind, en, zh   the piece and its bilingual title
     note               { en, zh } — the situation, shown above the piece
     client             dialogue only: { lang, sex } — the accent and the
                        sex of the client's voice. The lawyer speaks in the
                        voice chosen in 設定; the client gets a different one,
                        picked to match (see clientVoice() in render.js).
     lines              dialogue: { who: 'L' | 'C', en, zh }
                        document / email: { en, zh }, and { head: true } for
                        a heading line
     check              optional { en, zh } — what a Taiwan lawyer checks
     phrases            [{ en, zh }] — phrases worth taking away
     task, model        email only: a writing task { en, zh } and a model
                        answer in the same line format. There is no field to
                        type into (the adult pages save nothing): the learner
                        writes in their own mail program, or says it aloud in
                        a lesson, then opens the model to compare. */

window.PRACTICE = [

  /* ---------------- dialogues ---------------- */

  { id: "consult-divorce", kind: "dialogue", client: { lang: "en-GB", sex: "m" },
    en: "A divorce consultation with a foreign father",
    zh: "外籍父親的離婚諮詢",
    note: { en: "The client is British, married to a Taiwanese woman for nine years. They have two children in Taipei. His wife has said she wants a divorce.",
            zh: "當事人是英國人，與台灣籍太太結婚九年，兩個孩子住在台北。太太已提出想離婚。" },
    lines: [
      { who:"L", en:"Thank you for coming in. Before we start, everything you tell me today is confidential.", zh:"謝謝你過來。開始之前先說明，你今天告訴我的一切都會保密。" },
      { who:"C", en:"Thank you. I'm not really sure where to begin.", zh:"謝謝。我不太知道該從哪裡說起。" },
      { who:"L", en:"Take your time. Could you walk me through your situation?", zh:"慢慢來。可以先跟我說說你的情況嗎？" },
      { who:"C", en:"My wife is Taiwanese and I'm British. We've been married for nine years, and we have two kids, aged six and four.", zh:"我太太是台灣人，我是英國人。我們結婚九年，有兩個孩子，六歲和四歲。" },
      { who:"C", en:"Last month she told me she wants a divorce. I don't want to lose my children.", zh:"上個月她說她想離婚。我不想失去我的孩子。" },
      { who:"L", en:"That must have been hard. Let me ask a few questions. Who usually takes the children to school and to the doctor?", zh:"這一定很不容易。我先問幾個問題。平常是誰帶孩子上學、看醫生？" },
      { who:"C", en:"Mostly my wife, to be honest. I travel a lot for work, so I do the weekends.", zh:"老實說，大部分是我太太。我工作常出差，所以週末是我負責。" },
      { who:"L", en:"Thank you for being honest. The court will look at who has been the primary caregiver, but that's only one factor. Every decision is made in the best interests of the child.", zh:"謝謝你坦白。法院會看誰一直是主要照顧者，但那只是其中一個因素。所有決定都以子女最佳利益為依歸。" },
      { who:"C", en:"Will a Taiwanese court treat me fairly as a foreigner?", zh:"身為外國人，台灣的法院會公平對待我嗎？" },
      { who:"L", en:"Nationality is not a reason to give custody to one parent. And if your Chinese isn't strong enough, the court can provide an interpreter.", zh:"國籍不是把親權判給某一方的理由。如果你的中文不夠好，法院也可以提供通譯。" },
      { who:"C", en:"What about my visa? It's based on the marriage.", zh:"那我的簽證呢？那是依親的。" },
      { who:"L", en:"That's an important point. If you have custody of the children, or regular visitation with them, you can usually keep living in Taiwan. I'll check the details of your permit.", zh:"這點很重要。如果你取得孩子的親權，或對孩子有固定的會面交往，通常可以繼續在台灣居留。我會再確認你居留證的細節。" },
      { who:"C", en:"That's a relief. So what happens next?", zh:"那我放心多了。接下來呢？" },
      { who:"L", en:"If you both agree, you can sign a divorce agreement with two witnesses and register it. If not, the case will usually go to mediation first.", zh:"如果雙方都同意，可以簽離婚協議書、找兩位證人，再去登記。如果談不攏，案件通常會先進行調解。" },
      { who:"L", en:"For now, please keep a record of the time you spend with the children, and don't move out without talking to me first.", zh:"現在請你把陪伴孩子的時間記錄下來，搬出去之前也請先跟我討論。" },
      { who:"C", en:"I understand. Thank you.", zh:"我明白了，謝謝。" }
    ],
    phrases: [
      { en:"Could you walk me through your situation?", zh:"可以跟我說說你的情況嗎？" },
      { en:"Thank you for being honest.", zh:"謝謝你坦白。" },
      { en:"That's only one factor.", zh:"那只是其中一個因素。" },
      { en:"That's an important point.", zh:"這點很重要。" },
      { en:"I'll check the details of …", zh:"我會再確認……的細節。" },
      { en:"Don't … without talking to me first.", zh:"……之前請先跟我討論。" }
    ]
  },

  { id: "consult-inheritance", kind: "dialogue", client: { lang: "en-US", sex: "f" },
    en: "An inheritance consultation with an heir abroad",
    zh: "住在國外的繼承人來諮詢",
    note: { en: "The client is an American whose Taiwanese father died in Kaohsiung three weeks ago. Her half-brothers say a handwritten will leaves them the house.",
            zh: "當事人是美國人，台灣籍的父親三週前在高雄過世。她同父異母的哥哥們說有一份親筆遺囑，把房子留給他們。" },
    lines: [
      { who:"L", en:"I'm sorry for your loss. When did your father pass away?", zh:"請節哀。令尊是什麼時候過世的？" },
      { who:"C", en:"Three weeks ago, in Kaohsiung. I live in the US, so I only found out last week.", zh:"三個禮拜前，在高雄。我住在美國，上週才知道。" },
      { who:"L", en:"Did he leave a will?", zh:"他有留下遺囑嗎？" },
      { who:"C", en:"My half-brothers say there's a handwritten will that gives them the house.", zh:"我同父異母的哥哥們說，有一份親筆遺囑把房子給他們。" },
      { who:"L", en:"A handwritten will must be written entirely by hand, dated and signed. If any of that is missing, it is void.", zh:"自書遺囑必須全文親筆、記明年月日並簽名。缺少任何一項，遺囑就無效。" },
      { who:"L", en:"And even a valid will cannot take away your compulsory portion. As his daughter, you are an heir.", zh:"而且就算遺囑有效，也不能剝奪你的特留分。你是他的女兒，就是繼承人。" },
      { who:"C", en:"Even though I'm an American citizen?", zh:"即使我是美國公民？" },
      { who:"L", en:"Yes. Inheritance follows the law of your father's nationality, which is Taiwanese law.", zh:"是的。繼承依被繼承人的本國法，也就是台灣的法律。" },
      { who:"L", en:"One thing to check: a foreigner can inherit land here only if there is reciprocity. For US citizens it depends on the state you live in, so I'll confirm it.", zh:"有一件事要確認：外國人要有平等互惠，才能繼承台灣的土地。美國人要看住在哪一州，我會再確認。" },
      { who:"C", en:"I think he also had some debts. Should I be worried?", zh:"他好像也有一些債務。我需要擔心嗎？" },
      { who:"L", en:"Heirs are liable for debts only up to the value of the estate. If the debts are larger than the assets, you can renounce the inheritance, but only within three months of learning that you are an heir.", zh:"繼承人只在遺產範圍內負擔債務。如果債務比資產多，你可以拋棄繼承，但必須在知道自己是繼承人後三個月內。" },
      { who:"C", en:"Three months. So I need to decide quickly.", zh:"三個月。所以我得快點決定。" },
      { who:"L", en:"Yes. First, we'll find out what is in the estate and what he owed. If your brothers won't share the house fairly, we can file for partition of the estate.", zh:"對。首先我們會查清遺產和債務。如果你的哥哥們不願公平分配房子，我們可以提起遺產分割。" },
      { who:"L", en:"Since you live abroad, you'll need to sign a power of attorney, have it notarized, and get it authenticated by a Taiwan office in the US.", zh:"因為你住在國外，你需要簽一份委任狀，經公證後，再送我國駐美辦事處驗證。" }
    ],
    phrases: [
      { en:"I'm sorry for your loss.", zh:"請節哀。" },
      { en:"If any of that is missing, …", zh:"只要缺少其中任何一項，……" },
      { en:"Even a valid will cannot …", zh:"即使遺囑有效，也不能……" },
      { en:"One thing to check: …", zh:"有一件事要確認：……" },
      { en:"It depends on …", zh:"要看……而定。" },
      { en:"but only within three months of …", zh:"但只限於……後三個月內。" }
    ]
  },

  { id: "call-support", kind: "dialogue", client: { lang: "en-AU", sex: "f" },
    en: "A first phone call about unpaid child support",
    zh: "初次來電：扶養費沒有付",
    note: { en: "A foreign mother calls the firm. Her former husband has stopped paying child support.",
            zh: "一位外籍母親打電話到事務所。她的前夫不再支付子女扶養費。" },
    lines: [
      { who:"C", en:"Hello, I found your firm online. I need some advice about child support.", zh:"你好，我在網路上找到你們事務所。我想詢問子女扶養費的問題。" },
      { who:"L", en:"Of course. Before we go further, I need to run a conflict check. What is the other parent's full name?", zh:"當然。在進一步談之前，我需要做利益衝突審查。請問孩子另一位家長的全名是？" },
      { who:"C", en:"His name is Chen Wei-ming.", zh:"他叫陳偉明。" },
      { who:"L", en:"Thank you. Could you tell me briefly what the problem is?", zh:"謝謝。可以簡單說明一下問題嗎？" },
      { who:"C", en:"We divorced two years ago. He was supposed to pay child support every month, but he stopped in March.", zh:"我們兩年前離婚。他本來每個月都要付扶養費，但三月起就沒付了。" },
      { who:"L", en:"Where is the amount written down: in a court judgment, a mediation record, or your divorce agreement?", zh:"這筆金額寫在哪裡：法院判決、調解筆錄，還是你們的離婚協議書？" },
      { who:"C", en:"In our divorce agreement.", zh:"在我們的離婚協議書裡。" },
      { who:"L", en:"That matters. A judgment or a mediation record can be enforced directly. With a private agreement, we may need to go to court first.", zh:"這點很重要。判決或調解筆錄可以直接強制執行。如果只是私下的協議，可能要先向法院起訴。" },
      { who:"C", en:"I see. What should I bring to the consultation?", zh:"了解。諮詢時我要帶什麼？" },
      { who:"L", en:"Please bring the divorce agreement, bank statements that show his payments, and any messages about the money.", zh:"請帶離婚協議書、能看出他付款紀錄的銀行對帳單，以及任何跟這筆錢有關的訊息。" },
      { who:"C", en:"Do you charge for the first meeting?", zh:"第一次見面要收費嗎？" },
      { who:"L", en:"I'll email you the fee, the date and the time, so you have everything in writing.", zh:"我會用電子郵件把費用、日期和時間寄給你，讓你有書面資料。" },
      { who:"C", en:"Great, thank you.", zh:"太好了，謝謝。" }
    ],
    phrases: [
      { en:"Before we go further, …", zh:"在進一步談之前，……" },
      { en:"Could you tell me briefly …?", zh:"可以簡單說明……嗎？" },
      { en:"He was supposed to …", zh:"他本來應該……" },
      { en:"That matters.", zh:"這點很重要。" },
      { en:"so you have everything in writing", zh:"讓你有書面資料" }
    ]
  },

  /* ---------------- documents ---------------- */

  { id: "doc-decree", kind: "document",
    en: "A foreign divorce judgment (excerpt)",
    zh: "外國離婚判決（節錄）",
    note: { en: "A client brings the divorce judgment from a US court and asks whether it counts in Taiwan. The wording is typical of American family courts.",
            zh: "當事人帶來美國法院的離婚判決，問這在台灣是否有效。用語是美國家事法院的典型寫法。" },
    lines: [
      { head:true, en:"Judgment of Dissolution of Marriage", zh:"解除婚姻（離婚）判決" },
      { en:"The marriage of the Petitioner and the Respondent is dissolved. The parties are restored to the status of unmarried persons, effective June 1, 2025.", zh:"聲請人與相對人之婚姻予以解除。雙方自 2025 年 6 月 1 日起回復未婚身分。" },
      { en:"Custody. The parties shall share joint legal custody of the minor child. The Petitioner shall have primary physical custody.", zh:"親權：雙方共同享有未成年子女的法律監護權（重大事項由雙方共同決定）；子女主要與聲請人同住。" },
      { en:"Parenting time. The Respondent shall have parenting time on alternate weekends and for four weeks each summer.", zh:"親子時間：相對人每隔一週的週末，以及每年暑假四週，可與子女相處。" },
      { en:"Child support. The Respondent shall pay child support of US$1,200 per month until the child reaches the age of eighteen or completes high school, whichever occurs later.", zh:"子女扶養費：相對人每月給付 1,200 美元，至子女滿十八歲或高中畢業為止，以較晚者為準。" },
      { en:"Spousal support. Neither party shall pay spousal support.", zh:"配偶扶養費：雙方互不給付。" },
      { en:"Property. Each party is awarded the property in his or her name, as set out in the Marital Settlement Agreement attached as Exhibit A.", zh:"財產：依附件 A 婚姻和解協議所列，各方取得其名下之財產。" }
    ],
    check: { en:"To have this divorce recorded in Taiwan, check that the judgment is final, have it authenticated by a Taiwan overseas office, and attach a Chinese translation. The household registration office can then record it; if it is in doubt, the court decides whether to recognize the judgment.",
             zh:"要在台灣登記這件離婚，先確認判決已確定，經我國駐外館處驗證，並附中文譯本。之後即可向戶政事務所辦理登記；若有疑義，則由法院決定是否承認該判決。" },
    phrases: [
      { en:"dissolution of marriage", zh:"解除婚姻（即離婚）" },
      { en:"legal custody / physical custody", zh:"法律監護（重大事項決定權）／實際照顧（同住）" },
      { en:"parenting time", zh:"親子時間（相當於會面交往）" },
      { en:"spousal support", zh:"配偶扶養費（近似贍養費）" },
      { en:"whichever occurs later", zh:"以較晚發生者為準" },
      { en:"attached as Exhibit A", zh:"作為附件 A 附上" }
    ]
  },

  { id: "doc-will", kind: "document",
    en: "Clauses from an English will",
    zh: "英文遺囑的條款",
    note: { en: "The client's late husband, a British national, made this will in London. He owned an apartment in Taipei.",
            zh: "當事人已故的丈夫是英國人，在倫敦立下這份遺囑。他在台北有一間公寓。" },
    lines: [
      { head:true, en:"Last Will and Testament", zh:"遺囑" },
      { en:"I revoke all earlier wills and codicils and declare this to be my last will.", zh:"本人撤銷先前所有遺囑及遺囑附件，並聲明本遺囑為最後遺囑。" },
      { en:"I appoint my sister as Executor of this will. If she is unable or unwilling to act, I appoint my solicitor in her place.", zh:"本人指定妹妹為遺囑執行人。如她不能或不願擔任，由本人的律師代之。" },
      { en:"I give my apartment in Taipei to my son absolutely.", zh:"本人將台北的公寓無條件遺贈予兒子。" },
      { en:"I give the residue of my estate to my wife.", zh:"本人其餘遺產全部遺贈予妻子。" },
      { en:"Signed by the Testator in our presence, and then by us in the Testator's presence.", zh:"立遺囑人在我們面前簽名，之後我們在立遺囑人面前簽名。" }
    ],
    check: { en:"When the person who made the will was a foreign national, the will and the inheritance generally follow the law of their nationality. One exception protects heirs who are Taiwanese nationals: they can still inherit the property in Taiwan that Taiwanese law would give them.",
             zh:"立遺囑人是外國人時，遺囑和繼承原則上依其本國法。但有一個例外保護具中華民國國籍的繼承人：依我國法律應為繼承人者，仍可就其在台灣的遺產繼承。" },
    phrases: [
      { en:"revoke all earlier wills", zh:"撤銷先前所有遺囑" },
      { en:"codicil", zh:"遺囑附件（補充遺囑）" },
      { en:"unable or unwilling to act", zh:"不能或不願擔任" },
      { en:"absolutely", zh:"無條件地（取得完整所有權）" },
      { en:"the residue of my estate", zh:"其餘遺產" },
      { en:"in our presence", zh:"在我們面前" }
    ]
  },

  /* ---------------- emails ---------------- */

  { id: "mail-confirm", kind: "email",
    en: "Confirming a first consultation",
    zh: "確認初次諮詢",
    note: { en: "A reply to a new client who wrote in about a divorce.",
            zh: "回覆一位來信詢問離婚的新當事人。" },
    lines: [
      { head:true, en:"Subject: Your consultation on Thursday", zh:"主旨：週四的諮詢" },
      { en:"Dear Ms. Clarke,", zh:"Clarke 女士您好：" },
      { en:"Thank you for contacting us about your divorce. I'm sorry to hear about the difficult time you are going through.", zh:"謝謝您來信詢問離婚的事。很遺憾聽到您正經歷這段辛苦的時期。" },
      { en:"I can confirm your consultation on Thursday at 2:00 p.m. at our Taipei office. It will take about an hour, and we will speak in English.", zh:"在此確認您的諮詢時間為週四下午兩點，地點在我們的台北辦公室，約一小時，全程以英文進行。" },
      { en:"To help me prepare, please bring the following, if you have them: your marriage certificate, your residence permit, and any messages about the children's arrangements.", zh:"為了方便我準備，如果您有以下文件，請一併帶來：結婚證書、居留證，以及任何與孩子安排有關的訊息。" },
      { en:"Please note that there is a fee for the consultation. If you decide to hire us, I will send you an engagement letter setting out the fees for the case.", zh:"請留意，諮詢需要收費。如果您決定委任我們，我會寄給您委任契約，列明本案的費用。" },
      { en:"Everything you share with us is confidential. If you have any questions before Thursday, please reply to this email.", zh:"您告訴我們的一切都會保密。週四之前如有任何問題，請直接回覆這封信。" },
      { en:"Kind regards,", zh:"敬祝 安好" }
    ],
    phrases: [
      { en:"Thank you for contacting us about …", zh:"謝謝您來信詢問……" },
      { en:"I can confirm …", zh:"在此確認……" },
      { en:"To help me prepare, …", zh:"為了方便我準備，……" },
      { en:"if you have them", zh:"如果您有的話" },
      { en:"Please note that …", zh:"請留意……" },
      { en:"setting out the fees", zh:"列明費用" }
    ],
    task: { en:"The client writes back: Thursday no longer works, and asks for next Monday morning. Reply: agree, give the new time, and remind them what to bring.",
            zh:"當事人回信說週四不行，想改到下週一上午。請回信：同意改期、給出新時間，並提醒對方要帶的資料。" },
    model: [
      { head:true, en:"Subject: New time for your consultation", zh:"主旨：諮詢的新時間" },
      { en:"Dear Ms. Clarke,", zh:"Clarke 女士您好：" },
      { en:"Thank you for letting me know. I can confirm that your consultation has been moved to Monday at 10:00 a.m., at our Taipei office.", zh:"謝謝您告知。在此確認您的諮詢已改到週一上午十點，地點同樣在我們的台北辦公室。" },
      { en:"As before, please bring your marriage certificate, your residence permit, and any messages about the children's arrangements.", zh:"和之前一樣，請帶結婚證書、居留證，以及任何與孩子安排有關的訊息。" },
      { en:"If the new time does not work for you, please let me know.", zh:"如果新的時間不方便，請告訴我。" },
      { en:"Kind regards,", zh:"敬祝 安好" }
    ]
  },

  { id: "mail-update", kind: "email",
    en: "An update after mediation",
    zh: "調解後回報進度",
    note: { en: "To the British father from the first dialogue, after the first mediation session.",
            zh: "寫給第一段對話裡的英國父親，在第一次調解之後。" },
    lines: [
      { head:true, en:"Subject: Today's mediation", zh:"主旨：今天的調解" },
      { en:"Dear Mr. Evans,", zh:"Evans 先生您好：" },
      { en:"I'm writing to update you on today's mediation.", zh:"來信向您回報今天調解的情況。" },
      { en:"Your wife's side agreed to joint custody, with the children living mainly with her. They also accepted your proposal on visitation: every other weekend and half of the school holidays.", zh:"您太太那方同意共同行使親權，孩子主要與她同住。他們也接受您對會面交往的提議：每隔一個週末，以及寒暑假的一半。" },
      { en:"However, we could not agree on child support. They asked for NT$30,000 a month, and I said we would reply after reviewing your income.", zh:"不過，扶養費的部分沒有談成。對方要求每月新台幣三萬元，我表示會在了解您的收入後再回覆。" },
      { en:"The next session is on December 3. Before then, could you send me your payslips for the last three months?", zh:"下一次調解是 12 月 3 日。在那之前，能否請您寄給我最近三個月的薪資單？" },
      { en:"If we reach agreement on child support, the mediation record can be enforced like a court judgment, so there will be no need for a trial.", zh:"如果扶養費也達成協議，調解筆錄與法院判決有同樣的執行效力，就不需要進入審判。" },
      { en:"Please let me know if you have any questions.", zh:"如有任何問題，請隨時告訴我。" },
      { en:"Best regards,", zh:"敬祝 順心" }
    ],
    phrases: [
      { en:"I'm writing to update you on …", zh:"來信向您回報……" },
      { en:"They also accepted your proposal on …", zh:"他們也接受了您對……的提議。" },
      { en:"However, we could not agree on …", zh:"不過，……的部分沒有談成。" },
      { en:"Before then, could you …?", zh:"在那之前，能否請您……？" },
      { en:"can be enforced like a court judgment", zh:"與法院判決有同樣的執行效力" }
    ],
    task: { en:"The other side's lawyer asks to postpone the next mediation by two weeks, to December 17, to review the income documents. Write to Mr. Evans: explain the request, recommend agreeing, and ask for his answer by Friday.",
            zh:"對方律師要求把下一次調解延後兩週到 12 月 17 日，以便審閱收入資料。請寫信給 Evans 先生：說明對方的要求、建議同意，並請他在週五前回覆。" },
    model: [
      { head:true, en:"Subject: Request to postpone the mediation", zh:"主旨：對方要求延後調解" },
      { en:"Dear Mr. Evans,", zh:"Evans 先生您好：" },
      { en:"I'm writing to let you know that your wife's lawyer has asked to postpone the next mediation session by two weeks, to December 17.", zh:"來信告知，您太太的律師要求將下一次調解延後兩週，改到 12 月 17 日。" },
      { en:"They need more time to review the income documents we sent.", zh:"他們需要更多時間審閱我們提供的收入資料。" },
      { en:"I recommend that we agree, as it gives both sides a better chance of settling child support without a trial.", zh:"我建議同意，這樣雙方比較有機會不經審判就談妥扶養費。" },
      { en:"Could you let me know by Friday whether you agree?", zh:"能否請您在週五前告訴我是否同意？" },
      { en:"Best regards,", zh:"敬祝 順心" }
    ]
  },

  { id: "mail-counsel", kind: "email",
    en: "Writing to the other side's lawyer",
    zh: "寫信給對方律師",
    note: { en: "The father wants to take the children to see their grandparents in the UK. The visitation arrangement does not cover travel abroad.",
            zh: "父親想帶孩子回英國探望祖父母，但目前的會面交往安排沒有涵蓋出國。" },
    lines: [
      { head:true, en:"Subject: Winter holiday travel with the children", zh:"主旨：寒假帶孩子出國" },
      { en:"Dear Counsel,", zh:"律師您好：" },
      { en:"We act for Mr. Evans in the above matter.", zh:"本所受 Evans 先生委任處理上述事件。" },
      { en:"Our client would like to take the children to visit their grandparents in the UK from December 20 to January 3.", zh:"我方當事人希望於 12 月 20 日至 1 月 3 日帶孩子赴英國探望祖父母。" },
      { en:"He will return the children no later than January 3, and he will share the flight details and a contact number in advance.", zh:"他會在 1 月 3 日前將孩子送回，並事先提供航班資訊與聯絡電話。" },
      { en:"As the current arrangement does not cover travel abroad, we propose that the parties confirm this trip in writing.", zh:"由於目前的安排並未涵蓋出國，我們建議雙方以書面確認這趟行程。" },
      { en:"We would be grateful for your client's response by December 6. If no agreement can be reached, our client may ask the court for an interim order.", zh:"盼貴方當事人於 12 月 6 日前回覆。若無法達成協議，我方當事人可能向法院聲請暫時處分。" },
      { en:"Yours sincerely,", zh:"順頌 時祺" }
    ],
    phrases: [
      { en:"We act for … in the above matter.", zh:"本所受……委任處理上述事件。" },
      { en:"no later than", zh:"最晚於" },
      { en:"in advance", zh:"事先" },
      { en:"We propose that …", zh:"我們建議……" },
      { en:"We would be grateful for … by …", zh:"盼於……前……" },
      { en:"If no agreement can be reached, …", zh:"若無法達成協議，……" }
    ],
    task: { en:"December 6 has passed and the other side's lawyer has not replied. Write a short follow-up: refer to your earlier email, ask for a reply within three days, and say what your client will do if there is none.",
            zh:"12 月 6 日已過，對方律師仍未回覆。請寫一封簡短的追蹤信：提及先前的信、請對方三天內回覆，並說明若仍未回覆，我方當事人會怎麼做。" },
    model: [
      { head:true, en:"Subject: Follow-up: winter holiday travel with the children", zh:"主旨：追蹤——寒假帶孩子出國" },
      { en:"Dear Counsel,", zh:"律師您好：" },
      { en:"We refer to our email of November 28 about our client's proposed trip to the UK with the children.", zh:"謹就本所 11 月 28 日來信，關於我方當事人擬帶孩子赴英一事，再次聯繫。" },
      { en:"We note that we have not yet received a reply.", zh:"本所至今尚未收到回覆。" },
      { en:"We would be grateful for your client's response within three days of this email.", zh:"盼貴方當事人於本信發出後三日內回覆。" },
      { en:"If we do not hear from you by then, our client will ask the court for an interim order.", zh:"屆時若仍未收到回覆，我方當事人將向法院聲請暫時處分。" },
      { en:"Yours sincerely,", zh:"順頌 時祺" }
    ]
  }

];
