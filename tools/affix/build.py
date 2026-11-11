"""字首字尾 word webs for the two word pages (2026-11-11).

Writes public/reading/vocab/affix.js (高中) and public/reading/junior-vocab/affix.js
(國中): for each prefix or suffix, the words ON THAT PAGE built from a base
word by it -- happy → unhappy, agree → agreement.

The pairs below are a hand-read selection, not a rule's output. candidates.py
proposes every pair a spelling rule can find (1,571 of them); only pairs a
student can actually use are kept: the base's meaning plus the affix's gives
the word's meaning, near enough to guess it. Left out on purpose:
  - look-alikes: uncle, repair (re + pair), apartment, university, station;
  - true history, no help today: understand, discover-type pairs are kept only
    when the parts still say the meaning (dis + cover = 揭開, kept;
    under + stand, dropped);
  - roots that are not English words (port, scope as "看" was kept only in
    tele-/micro-, where the base is an English word too);
  - comparatives (later, upper), plurals, and meanings that drifted
    (hardly, generation, affection, invaluable).
The base may come from either list; the derived word must be on the page.
An affix shows on a page only with at least MIN words there.

  python3 tools/affix/build.py
"""
import json, re, sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from candidates import rows, forms, PAGES  # noqa: E402

ROOT = Path(__file__).resolve().parents[2]
MIN = 3

# key, label, kind, 中文意思, what it makes / a one-line note, "base>derived ..."
AFFIXES = [
    # ---------- 字首 ----------
    ('un', 'un-', 'pre', '不；相反', '加在字前面，意思變成相反：happy 快樂 → unhappy 不快樂。',
     'cover>uncover employment>unemployment fold>unfold happy>unhappy lock>unlock veil>unveil'),
    ('dis', 'dis-', 'pre', '不；相反；去掉', '和 un- 一樣把意思反過來，也常有「拿掉」的意思：cover 蓋 → discover 揭開、發現。',
     'ability>disability able>disable advantage>disadvantage agree>disagree agreement>disagreement appear>disappear '
     'approve>disapprove belief>disbelief comfort>discomfort connect>disconnect courage>discourage cover>discover '
     'honest>dishonest like>dislike order>disorder'),
    ('in-not', 'in- / im-', 'pre', '不', '在 p、b、m 前面寫成 im-：possible → impossible。',
     'polite>impolite possible>impossible credible>incredible dependent>independent different>indifferent '
     'dispensable>indispensable finite>infinite justice>injustice'),
    ('in-into', 'in- / im-', 'pre', '在裡面；向內', '和上面的「不」長得一樣，意思是「進去、在裡面」：door → indoor 室內的。',
     'come>income door>indoor land>inland put>input side>inside sight>insight take>intake prison>imprison'),
    ('re', 're-', 'pre', '再；回', '再做一次，或回到原來：cycle → recycle 回收再用。',
     'act>react action>reaction assure>reassure call>recall cycle>recycle fresh>refresh fund>refund form>reform '
     'new>renew pay>repay place>replace placement>replacement produce>reproduce union>reunion view>review turn>return'),
    ('mis', 'mis-', 'pre', '錯；不好', '做錯了、弄錯了：understand → misunderstand 誤會。',
     'fortune>misfortune lead>mislead take>mistake understand>misunderstand'),
    ('pre', 'pre-', 'pre', '之前；預先', '在……之前：view 看 → preview 預先看。',
     'caution>precaution historic>prehistoric mature>premature view>preview'),
    ('en', 'en- / em-', 'pre', '使……；讓它變成', '把名詞、形容詞變成動詞：large 大 → enlarge 放大。',
     'able>enable courage>encourage danger>endanger joy>enjoy large>enlarge rich>enrich sure>ensure title>entitle vision>envision'),
    ('inter', 'inter-', 'pre', '在……之間；互相', 'national 國家的 → international 國與國之間的。',
     'act>interact action>interaction national>international net>internet section>intersection'),
    ('over', 'over-', 'pre', '在上面；超過；太多', 'work → overwork 工作過度；night → overnight 過夜。',
     'coat>overcoat flow>overflow hear>overhear night>overnight pass>overpass turn>overturn work>overwork'),
    ('under', 'under-', 'pre', '在下面；不足', 'ground → underground 地下的；estimate → underestimate 低估。',
     'estimate>underestimate graduate>undergraduate ground>underground line>underline pass>underpass wear>underwear'),
    ('out', 'out-', 'pre', '向外；超過', 'door → outdoor 戶外的；number → outnumber 數量超過。',
     'break>outbreak come>outcome door>outdoor number>outnumber put>output side>outside'),
    ('up', 'up-', 'pre', '向上', 'grade 等級 → upgrade 升級；stairs → upstairs 樓上。',
     'date>update grade>upgrade load>upload stairs>upstairs'),
    ('sub', 'sub-', 'pre', '在下面', 'way → subway 地下鐵；marine 海的 → submarine 潛水艇。',
     'marine>submarine urban>suburban way>subway'),
    ('trans', 'trans-', 'pre', '轉換；橫越', 'form 形狀 → transform 改變形狀。',
     'form>transform formation>transformation plant>transplant'),
    ('tele', 'tele-', 'pre', '遠', 'phone 聲音 → telephone 電話；vision 看 → television 電視。',
     'graph>telegraph phone>telephone scope>telescope vision>television'),
    ('micro', 'micro-', 'pre', '微小', 'wave → microwave 微波（爐）。',
     'phone>microphone scope>microscope wave>microwave'),
    ('co', 'co-', 'pre', '一起', 'operate 運作 → cooperate 一起做、合作。',
     'operate>cooperate operation>cooperation operative>cooperative'),
    # ---------- 字尾：人 ----------
    ('er', '-er', 'suf', '人：做……的人；做……的東西', '動詞變名詞：teach → teacher 老師；heat → heater 暖氣機。',
     'advise>adviser bank>banker begin>beginner box>boxer clean>cleaner command>commander commute>commuter '
     'compose>composer compute>computer consume>consumer contain>container cook>cooker dance>dancer deal>dealer '
     'design>designer draw>drawer drive>driver dry>dryer employ>employer erase>eraser examine>examiner farm>farmer '
     'fight>fighter follow>follower foreign>foreigner found>founder freeze>freezer garden>gardener hang>hanger '
     'heat>heater hold>holder hunt>hunter interpret>interpreter intrude>intruder keep>keeper lead>leader '
     'lecture>lecturer listen>listener lock>locker lose>loser love>lover manage>manager manufacture>manufacturer '
     'mark>marker murder>murderer observe>observer organize>organizer outside>outsider own>owner paint>painter '
     'photograph>photographer play>player print>printer prison>prisoner produce>producer publish>publisher '
     'receive>receiver record>recorder remind>reminder report>reporter research>researcher rob>robber rule>ruler '
     'run>runner serve>server settle>settler shave>shaver sing>singer speak>speaker strange>stranger teach>teacher '
     'teenage>teenager tell>teller thrill>thriller trade>trader travel>traveler use>user view>viewer vote>voter '
     'wait>waiter widow>widower win>winner work>worker write>writer'),
    ('or', '-or', 'suf', '人：做……的人；做……的東西', '和 -er 一樣，多半接在 -ate、-ct 結尾的動詞後面：act → actor。',
     'act>actor administrate>administrator advise>advisor calculate>calculator collect>collector conduct>conductor '
     'contract>contractor counsel>counselor create>creator dictate>dictator direct>director edit>editor '
     'elevate>elevator generate>generator govern>governor inspect>inspector instruct>instructor invent>inventor '
     'investigate>investigator narrate>narrator operate>operator sail>sailor supervise>supervisor survive>survivor '
     'translate>translator visit>visitor'),
    ('ist', '-ist', 'suf', '人：……的人（專長、主張）', 'piano → pianist 鋼琴家；tour → tourist 觀光客。',
     'active>activist art>artist capital>capitalist column>columnist journal>journalist novel>novelist '
     'piano>pianist social>socialist special>specialist terror>terrorist tour>tourist violin>violinist'),
    ('ian', '-ian', 'suf', '人：……的人（專長、身分）', 'music → musician 音樂家；magic → magician 魔術師。',
     'civil>civilian electric>electrician guard>guardian magic>magician music>musician'),
    ('ee', '-ee', 'suf', '人：被……的人', '和 -er 相反：employer 雇主，employee 被雇的人、員工。',
     'employ>employee examine>examinee refuge>refugee trust>trustee'),
    ('ant', '-ant / -ent', 'suf', '人：做……的人；有……性質的', 'assist → assistant 助理；depend → dependent 依賴的。',
     'account>accountant assist>assistant attend>attendant consult>consultant contest>contestant defend>defendant '
     'inhabit>inhabitant reside>resident preside>president serve>servant correspond>correspondent respond>respondent '
     'depend>dependent differ>different persist>persistent resist>resistant urge>urgent please>pleasant'),
    # ---------- 字尾：名詞 ----------
    ('tion', '-tion / -sion', 'suf', '名詞：……這件事', '動詞變名詞，最常見的字尾：educate → education 教育。',
     'abstract>abstraction accommodate>accommodation accumulate>accumulation accuse>accusation act>action '
     'adapt>adaptation addict>addiction add>addition administrate>administration admire>admiration admit>admission '
     'anticipate>anticipation appreciate>appreciation associate>association attract>attraction calculate>calculation '
     'celebrate>celebration circulate>circulation civilize>civilization collect>collection combine>combination '
     'communicate>communication compensate>compensation compete>competition complicate>complication '
     'compose>composition concentrate>concentration conclude>conclusion confess>confession confront>confrontation '
     'confuse>confusion congratulate>congratulation connect>connection conserve>conservation consider>consideration '
     'console>consolation constitute>constitution construct>construction consult>consultation '
     'contradict>contradiction contribute>contribution convene>convention converse>conversation convert>conversion '
     'convict>conviction cooperate>cooperation corrupt>corruption create>creation decide>decision declare>declaration '
     'decorate>decoration dedicate>dedication define>definition delegate>delegation demonstrate>demonstration '
     'depress>depression determine>determination devote>devotion dictate>dictation digest>digestion direct>direction '
     'discriminate>discrimination discuss>discussion distinct>distinction distract>distraction distribute>distribution '
     'divert>diversion divide>division donate>donation educate>education elect>election emigrate>emigration '
     'equate>equation evaluate>evaluation exaggerate>exaggeration examine>examination except>exception '
     'exclude>exclusion execute>execution exhibit>exhibition expect>expectation expire>expiration explore>exploration '
     'explode>explosion express>expression extend>extension fascinate>fascination form>formation found>foundation '
     'frustrate>frustration graduate>graduation hesitate>hesitation illustrate>illustration imagine>imagination '
     'imitate>imitation immigrate>immigration impress>impression indicate>indication infect>infection '
     'inform>information inject>injection inspect>inspection inspire>inspiration install>installation '
     'institute>institution instruct>instruction integrate>integration intend>intention interact>interaction '
     'interpret>interpretation interrupt>interruption intervene>intervention introduce>introduction invade>invasion '
     'invent>invention investigate>investigation invite>invitation isolate>isolation liberate>liberation '
     'limit>limitation locate>location meditate>meditation modernize>modernization motivate>motivation '
     'navigate>navigation negotiate>negotiation nominate>nomination object>objection oblige>obligation '
     'observe>observation operate>operation oppose>opposition oppress>oppression opt>option organize>organization '
     'participate>participation perfect>perfection permit>permission persuade>persuasion pollute>pollution '
     'populate>population possess>possession precise>precision predict>prediction prepare>preparation '
     'present>presentation preserve>preservation prevent>prevention produce>production prohibit>prohibition '
     'project>projection promote>promotion prosecute>prosecution protect>protection provide>provision '
     'publish>publication quote>quotation radiate>radiation react>reaction realize>realization '
     'recommend>recommendation reduce>reduction reflect>reflection regulate>regulation reject>rejection '
     'relate>relation relax>relaxation represent>representation reserve>reservation resign>resignation '
     'restore>restoration restrict>restriction revise>revision rotate>rotation select>selection separate>separation '
     'starve>starvation stimulate>stimulation suggest>suggestion supervise>supervision suspend>suspension '
     'tempt>temptation tense>tension transform>transformation transit>transition translate>translation '
     'transmit>transmission transport>transportation vibrate>vibration violate>violation'),
    ('ment', '-ment', 'suf', '名詞：……這件事；……的結果', '動詞變名詞：agree → agreement 協議。字表寫成 agree(ment) 的就是這一種。',
     'accomplish>accomplishment achieve>achievement acknowledge>acknowledgement adjust>adjustment '
     'advertise>advertisement agree>agreement amaze>amazement amuse>amusement announce>announcement '
     'appoint>appointment argue>argument arrange>arrangement assess>assessment assign>assignment '
     'astonish>astonishment attach>attachment attain>attainment commit>commitment content>contentment '
     'develop>development disagree>disagreement disappoint>disappointment discourage>discouragement '
     'embarrass>embarrassment employ>employment encourage>encouragement endorse>endorsement enforce>enforcement '
     'engage>engagement enhance>enhancement enjoy>enjoyment enlarge>enlargement enlighten>enlightenment '
     'enrich>enrichment enroll>enrollment entertain>entertainment equip>equipment establish>establishment '
     'excite>excitement fulfill>fulfillment govern>government harass>harassment imprison>imprisonment '
     'improve>improvement invest>investment involve>involvement judge>judgment manage>management '
     'measure>measurement move>movement nourish>nourishment pave>pavement pay>payment place>placement '
     'postpone>postponement punish>punishment refine>refinement refresh>refreshment replace>replacement '
     'require>requirement resent>resentment retire>retirement settle>settlement state>statement treat>treatment'),
    ('ity', '-ity', 'suf', '名詞：……的性質', '形容詞變名詞：possible → possibility 可能性。',
     'able>ability active>activity capable>capability captive>captivity complex>complexity continue>continuity '
     'creative>creativity credible>credibility curious>curiosity dense>density disable>disability diverse>diversity '
     'electric>electricity equal>equality familiar>familiarity fertile>fertility flexible>flexibility '
     'generous>generosity hostile>hostility human>humanity humid>humidity intense>intensity liable>liability '
     'major>majority mature>maturity mental>mentality minor>minority moral>morality mortal>mortality '
     'national>nationality original>originality personal>personality popular>popularity possible>possibility '
     'prior>priority productive>productivity prosper>prosperity public>publicity pure>purity real>reality '
     'responsible>responsibility secure>security sensitive>sensitivity similar>similarity sincere>sincerity '
     'stable>stability superior>superiority vital>vitality'),
    ('ance', '-ance / -ence', 'suf', '名詞：……這件事；……的狀態', 'appear → appearance 出現、外表；differ → difference 不同。',
     'accept>acceptance acquaint>acquaintance ally>alliance allow>allowance annoy>annoyance appear>appearance '
     'assist>assistance assure>assurance attend>attendance clear>clearance comply>compliance '
     'correspond>correspondence defy>defiance differ>difference disturb>disturbance endure>endurance exist>existence '
     'guide>guidance insist>insistence interfere>interference perform>performance persist>persistence '
     'prefer>preference refer>reference rely>reliance resemble>resemblance reside>residence resist>resistance'),
    ('al-n', '-al', 'suf', '名詞：……這個動作', '動詞變名詞：arrive → arrival 抵達。',
     'approve>approval arrive>arrival dispose>disposal propose>proposal refuse>refusal rehearse>rehearsal '
     'remove>removal rent>rental revive>revival survive>survival'),
    ('y-n', '-y', 'suf', '名詞：……這件事；……的性質', 'discover → discovery 發現；honest → honesty 誠實。',
     'deliver>delivery discover>discovery recover>recovery difficult>difficulty honest>honesty modest>modesty '
     'master>mastery jealous>jealousy injure>injury inquire>inquiry rob>robbery'),
    ('ship', '-ship', 'suf', '名詞：……的身分、關係', 'friend → friendship 友誼；member → membership 會員資格。',
     'champion>championship citizen>citizenship dictator>dictatorship friend>friendship leader>leadership '
     'member>membership owner>ownership partner>partnership relation>relationship sponsor>sponsorship '
     'sportsman>sportsmanship'),
    ('ism', '-ism', 'suf', '名詞：……主義；……的行為', 'tour → tourism 觀光業；terror → terrorism 恐怖主義。',
     'capital>capitalism critic>criticism journal>journalism national>nationalism race>racism real>realism '
     'social>socialism terror>terrorism tour>tourism'),
    ('age', '-age', 'suf', '名詞：……的動作、結果或量', 'pack → package 包裹；short → shortage 短缺。',
     'cover>coverage marry>marriage orphan>orphanage pack>package pass>passage percent>percentage post>postage '
     'short>shortage store>storage use>usage'),
    ('ure', '-ure', 'suf', '名詞：……的動作、結果', 'fail → failure 失敗；press → pressure 壓力。',
     'close>closure depart>departure disclose>disclosure expose>exposure fail>failure moist>moisture '
     'please>pleasure press>pressure'),
    ('hood', '-hood', 'suf', '名詞：……的時期、身分', 'child → childhood 童年。',
     'brother>brotherhood child>childhood mother>motherhood neighbor>neighborhood'),
    ('dom', '-dom', 'suf', '名詞：……的狀態、範圍', 'free → freedom 自由；king → kingdom 王國。',
     'bore>boredom free>freedom king>kingdom wise>wisdom'),
    # ---------- 字尾：形容詞 ----------
    ('ful', '-ful', 'suf', '形容詞：充滿……的', 'help → helpful 有幫助的；care → careful 小心的。',
     'beauty>beautiful care>careful cheer>cheerful color>colorful delight>delightful doubt>doubtful dread>dreadful '
     'faith>faithful fear>fearful grace>graceful harm>harmful hate>hateful health>healthful help>helpful '
     'hope>hopeful joy>joyful law>lawful meaning>meaningful mourn>mournful pain>painful peace>peaceful '
     'play>playful plenty>plentiful power>powerful respect>respectful shame>shameful skill>skillful '
     'sorrow>sorrowful success>successful thank>thankful thought>thoughtful truth>truthful use>useful '
     'wonder>wonderful youth>youthful'),
    ('less', '-less', 'suf', '形容詞：沒有……的', '和 -ful 相反：careful 小心的，careless 粗心的。',
     'care>careless price>priceless regard>regardless'),
    ('able', '-able / -ible', 'suf', '形容詞：可以……的；值得……的', 'enjoy → enjoyable 令人愉快的；value → valuable 有價值的。',
     'accept>acceptable access>accessible admire>admirable agree>agreeable comfort>comfortable compare>comparable '
     'count>countable desire>desirable dispose>disposable enjoy>enjoyable fashion>fashionable favor>favorable '
     'honor>honorable knowledge>knowledgeable measure>measurable notice>noticeable note>notable profit>profitable '
     'reason>reasonable rely>reliable remark>remarkable respect>respectable sense>sensible suit>suitable '
     'sustain>sustainable value>valuable vary>variable'),
    ('ous', '-ous', 'suf', '形容詞：有……的；充滿……的', 'danger → dangerous 危險的；fame → famous 有名的。',
     'continue>continuous courage>courageous danger>dangerous envy>envious fame>famous fury>furious glory>glorious '
     'humor>humorous joy>joyous luxury>luxurious marvel>marvelous mountain>mountainous mystery>mysterious '
     'nerve>nervous outrage>outrageous poison>poisonous prosper>prosperous vary>various vigor>vigorous'),
    ('ive', '-ive', 'suf', '形容詞：有……性質的；會……的', 'create → creative 有創意的；act → active 活躍的。',
     'act>active administrate>administrative alternate>alternative attract>attractive collect>collective '
     'communicate>communicative compare>comparative conserve>conservative construct>constructive '
     'cooperate>cooperative create>creative decide>decisive defense>defensive detect>detective distinct>distinctive '
     'effect>effective excess>excessive exclude>exclusive expense>expensive explode>explosive express>expressive '
     'imagine>imaginative impress>impressive include>inclusive inform>informative instinct>instinctive '
     'intense>intensive mass>massive narrate>narrative offense>offensive persuade>persuasive prevent>preventive '
     'product>productive progress>progressive protect>protective reflect>reflective represent>representative '
     'select>selective talk>talkative'),
    ('al', '-al', 'suf', '形容詞：……的；和……有關的', 'nation → national 國家的；music → musical 音樂的。',
     'accident>accidental addition>additional agriculture>agricultural classic>classical clinic>clinical '
     'constitution>constitutional continent>continental continue>continual convention>conventional critic>critical '
     'culture>cultural economic>economical education>educational electric>electrical emotion>emotional '
     'environment>environmental ethic>ethical exception>exceptional experiment>experimental fate>fatal form>formal '
     'function>functional globe>global historic>historical logic>logical magic>magical margin>marginal '
     'mechanic>mechanical music>musical nation>national nature>natural norm>normal occasion>occasional '
     'operation>operational option>optional orient>oriental origin>original person>personal practice>practical '
     'profession>professional provision>provisional recreation>recreational region>regional '
     'sentiment>sentimental statistic>statistical structure>structural tradition>traditional tribe>tribal '
     'tropic>tropical universe>universal vocation>vocational'),
    ('ic', '-ic', 'suf', '形容詞：……的；像……的', 'hero → heroic 英勇的；poet → poetic 有詩意的。',
     'alcohol>alcoholic artist>artistic athlete>athletic atom>atomic base>basic democrat>democratic '
     'diplomat>diplomatic economy>economic hero>heroic history>historic irony>ironic magnet>magnetic '
     'patriot>patriotic photograph>photographic poet>poetic scene>scenic symbol>symbolic'),
    ('y', '-y', 'suf', '形容詞：有……的；多……的', '名詞變形容詞：rain → rainy 下雨的；sun → sunny 晴朗的。',
     'blood>bloody bulk>bulky chill>chilly cloud>cloudy dirt>dirty dust>dusty fog>foggy fun>funny gloom>gloomy '
     'grass>grassy grease>greasy greed>greedy guilt>guilty hand>handy haste>hasty health>healthy ice>icy '
     'juice>juicy length>lengthy luck>lucky mess>messy mood>moody mud>muddy need>needy noise>noisy rain>rainy '
     'risk>risky rock>rocky rust>rusty salt>salty scare>scary shade>shady shine>shiny skin>skinny sleep>sleepy '
     'slipper>slippery sneak>sneaky snow>snowy spice>spicy stick>sticky storm>stormy sun>sunny taste>tasty '
     'thirst>thirsty wealth>wealthy wind>windy wit>witty'),
    ('ly-adj', '-ly', 'suf', '形容詞：像……的；每……的', '名詞變形容詞：friend → friendly 友善的；week → weekly 每週的。',
     'cost>costly coward>cowardly day>daily friend>friendly hour>hourly leisure>leisurely love>lovely '
     'month>monthly order>orderly week>weekly year>yearly'),
    ('ish', '-ish', 'suf', '形容詞：像……的（常帶貶意）', 'child → childish 幼稚的；self → selfish 自私的。',
     'child>childish fool>foolish self>selfish style>stylish'),
    ('ary', '-ary', 'suf', '形容詞：和……有關的', 'imagine → imaginary 想像中的；legend → legendary 傳奇的。',
     'comment>commentary custom>customary discipline>disciplinary document>documentary honor>honorary '
     'imagine>imaginary legend>legendary mission>missionary revolution>revolutionary second>secondary'),
    # ---------- 字尾：動詞、副詞 ----------
    ('en-v', '-en', 'suf', '動詞：使變得……', '形容詞變動詞：wide → widen 加寬；short → shorten 縮短。',
     'awake>awaken broad>broaden deaf>deafen deep>deepen fast>fasten fright>frighten hard>harden haste>hasten '
     'height>heighten length>lengthen less>lessen light>lighten loose>loosen sharp>sharpen short>shorten soft>soften '
     'straight>straighten strength>strengthen threat>threaten tight>tighten wake>waken weak>weaken wide>widen'),
    ('ize', '-ize', 'suf', '動詞：使……化', 'modern → modernize 現代化；real → realize 實現、了解。',
     'character>characterize civil>civilize computer>computerize critic>criticize equal>equalize '
     'hospital>hospitalize industrial>industrialize mobile>mobilize modern>modernize private>privatize '
     'public>publicize real>realize social>socialize special>specialize symbol>symbolize'),
    ('ify', '-ify', 'suf', '動詞：使變成……', 'simple → simplify 簡化；pure → purify 淨化。',
     'class>classify diverse>diversify intense>intensify just>justify pure>purify simple>simplify'),
    ('ly', '-ly', 'suf', '副詞：……地', '形容詞變副詞：sudden → suddenly 突然地。',
     'actual>actually bad>badly bare>barely certain>certainly fair>fairly final>finally high>highly large>largely '
     'most>mostly near>nearly part>partly probable>probably real>really recent>recently rough>roughly '
     'scarce>scarcely simple>simply sudden>suddenly usual>usually'),
    ('ward', '-ward(s)', 'suf', '副詞：朝……方向', 'up → upward 向上；back → backward 向後。',
     'back>backward down>downward out>outward up>upward'),
]


def main():
    data = {k: rows(p) for k, p in PAGES.items()}
    lex = set()
    for rs in data.values():
        for r in rs:
            lex |= forms(r[1])
    problems = []
    for page, rs in data.items():
        where = {}
        for r in rs:
            for f in forms(r[1]):
                where.setdefault(f, r[0])
        out = []
        for key, label, kind, zh, note, pairs in AFFIXES:
            seen, got = set(), []
            for pr in pairs.split():
                base, derived = pr.split('>')
                if base not in lex:
                    problems.append(f'{key}: base "{base}" is on neither list')
                eid = where.get(derived)
                if eid and eid not in seen:
                    seen.add(eid)
                    got.append([eid, base, derived])
            if len(got) >= MIN:
                # a suffix's 中文 starts with what it makes: 名詞：……這件事
                grp, _, mean = zh.partition('：') if kind == 'suf' else ('', '', zh)
                out.append([key, label, kind, grp, mean, note, got])
        path = PAGES[page].with_name('affix.js')
        body = ',\n'.join(json.dumps(a, ensure_ascii=False) for a in out)
        # every affix, on this page or not: learn/wordgame.js draws its wrong options from
        # these, so 國中單字's 18 groups still get three that make another part of speech
        every = ',\n'.join(json.dumps([key, label, kind, *(zh.partition('：')[::2] if kind == 'suf' else ('', zh))], ensure_ascii=False)
                            for key, label, kind, zh, note, pairs in AFFIXES)
        path.write_text(
            '/* 字首字尾 word webs — built by tools/affix/build.py from a hand-read list of\n'
            '   pairs. Edit that, not this. [key, label, pre|suf, makes (人/名詞/…, suffixes only), 中文, note, [[entry id, base, word]]] */\n'
            f'const AFFIX_LIST = [\n{body}\n];\n'
            '// every affix in the list, for the 組字 game\'s wrong options: [key, label, pre|suf, makes, 中文]\n'
            f'const AFFIX_ALL = [\n{every}\n];\n', encoding='utf-8')
        print(page, len(out), 'affixes,', sum(len(a[6]) for a in out), 'words ->', path.relative_to(ROOT))
    # every derived word should be on at least one page
    allw = set()
    for rs in data.values():
        for r in rs:
            allw |= forms(r[1])
    for key, *_, pairs in AFFIXES:
        for pr in pairs.split():
            if pr.split('>')[1] not in allw:
                problems.append(f'{key}: "{pr}" -- the word is on neither list')
    for p in sorted(set(problems)):
        print('  !', p)


if __name__ == '__main__':
    main()
