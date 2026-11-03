"""What differs between Cambridge's lists: where things sit in each PDF, and the few
places each list's own text is corrected or annotated on the page.

extract.py and topics.py read the page ranges and columns; build.py reads the rest.
Every value here is Cambridge's text or a deliberate change to it, never the Chinese.
"""

EXAMS = {}

EXAMS['a2-key'] = {
    'name': 'A2 Key',
    'edition': 'August 2025, © UCLES 2025',
    'pdf': 'https://www.cambridgeenglish.org/images/506886-a2-key-2020-vocabulary-list.pdf',
    'pages': (3, 23),            # 0-based, end exclusive: the A-Z list
    'cols': (43, 316),           # left edge of each column
    'topic_pages': (24, 32),
    'topic_head_x': 60,          # topic headings start left of this; items further right
    # topic-list items whose wording matches no headword by rule
    'topic_by_hand': {
        '(aero)/(air)plane': ['aeroplane', 'plane'],
        'half (past)': ['half', 'past'],
        'quarter (past/to)': ['quarter'],
        'enter (a competition)': ['enter'],
        'costume (swimming)': ['costume'],
        'driving/driver’s licence': ['driving/driver’s licence'],
        'waiter/ waitress': ['waiter', 'waitress'],
        'a.m./p.m.': ['a.m.', 'p.m.'],
        'piece of cake': ['piece'],
        'kilo(gram[me])/kg': ['kilogramme (kg)'],
        'tourist information': ['tourist information centre'],
        'straight on': ['straight'],
        'rucksack': [],                  # in the topic list, missing from the A-Z list
    },
    # spaces the PDF puts inside words
    'split': {'j oined': 'joined', 'T hey': 'They', 'we ll': 'well'},
    # Cambridge's word -> the 'pos' value page shows instead (no 已勘誤: it is a layout fix, not an error)
    'pos_only': {'bright': 'adj'},
    'TOPICS_ZH': {
        'Appliances': '家電用品', 'Clothes and Accessories': '服裝與配件', 'Colours': '顏色',
        'Communication and Technology': '通訊與科技', 'Documents and Texts': '文件與文字', 'Education': '學校與教育',
        'Entertainment and Media': '娛樂與媒體', 'Family and Friends': '家人與朋友', 'Food and Drink': '食物與飲料',
        'Health, Medicine and Exercise': '健康、醫療與運動', 'Hobbies and Leisure': '嗜好與休閒', 'House and Home': '房屋與居家',
        'Measurements': '度量單位', 'Personal Feelings, Opinions and Experiences (adjectives)': '感受、看法與經驗（形容詞）',
        'Places: Buildings': '地點：建築物', 'Places: Countryside': '地點：鄉間', 'Places: Town and City': '地點：城鎮',
        'Services': '服務', 'Shopping': '購物', 'Sport': '運動', 'The Natural World': '大自然', 'Time': '時間',
        'Travel and Transport': '旅行與交通', 'Weather': '天氣', 'Work and Jobs': '工作與職業',
    },
    # Mistakes in Cambridge's list itself. key: (word, field) -> corrected value
    'FIX': {
        ('chips', 'note'): '(Br Eng) (Am Eng: French fries)',          # printed "Am Eng: biscuit"
        ('driving/driver’s licence', 'note'): '(Br Eng) (Am Eng: driver’s license)',   # printed "Br Eng: driver's license"
        ('practice', 'note'): 'Br Eng: noun practice, verb practise; Am Eng: practice for both',   # printed "(Am Eng: practise)"
        ('friend', 'x0'): 'It’s easy for her to make *friends*.',          # printed "for her make friends"
        ('unfortunately', 'pos'): 'adv',                                 # printed "adj"
        ('unhappy', 'pos'): 'adj',                                       # printed "n"
    },
    # The note for practice is not a Br/Am pair, so it gets its own Chinese
    'NOTE_ZH': {
        'practice': '英式：名詞 *practice*、動詞 *practise*；美式兩者都寫 *practice*',
        'bright': '用於顏色',
        'suggest': '後面接 V-ing',
    },
    # Words Cambridge narrows with a bracket after the word. Shown small beside it, never spoken.
    'LABEL': {'PLANNING', 'PROCESS', 'DRAWING', 'SOCIAL MEDIA', 'NOT ARTIFICIAL', 'ENTERTAIN', 'ENTERTAINMENT',
             'technology', 'become happy', 'digitally', 'stylish', 'clever', 'music'},
    # Cambridge's "examples" here are really one-word notes on the sense
    'SENSE_NOTE': {'train': 'sport', 'training': 'sport', 'work out': 'exercise'},
    # Marks the quiz should not use: the headword is split ("Turn the TV off") or sits inside another word
    'UNMARK': {('turn off', 0), ('turn on', 0), ('at / @', 0)},
    # Br/Am pairs that differ only in spelling (美式寫成), not in the word itself (美式說)
    'SPELLING': {'grey', 'jewellery', 'kilogramme (kg)', 'kilometre (km)', 'litre', 'metre', 'theatre', 'tyre'},
}

EXAMS['b1-preliminary'] = {
    'name': 'B1 Preliminary',
    'edition': 'August 2025, © CUPA 2025',
    'pdf': 'https://www.cambridgeenglish.org/images/506887-b1-preliminary-vocabulary-list.pdf',
    'pages': (3, 40),
    'cols': (61, 324),
    'topic_pages': (41, 53),
    'topic_head_x': 95,
    'split': {'(ad)': '(adv)'},      # carefully (ad): a typo for the abbreviation
    # Lines the PDF breaks beyond what extract.py's rules can mend: (word, pos) as read -> fields,
    # or None to drop the fragment
    # topic-list phrases tagged on the headword they are built on ("rock music" -> rock).
    # Not mapped: phrases with no headword under them (hi-fi, porter, centigrade), and the
    # months, days and seasons, which this list leaves to Appendix 1.
    'topic_by_hand': {
        'listen to': ['listen'], 'go shopping': ['shopping'], 'keep fit': ['fit'],
        'city centre': ['centre/center'], 'shopping centre': ['centre/center'], 'railway station': ['railway'],
        'tourist information': ['tourist information centre'], 'by post': ['post'], 'call back': ['call'],
        'switch off': ['switch'], 'switch on': ['switch'], 'plug in': ['plug'], 'join in': ['join'],
        'keen on': ['keen'], 'tennis player': ['tennis'], 'living-room': ['living room'],
        'TV (screen/set)': ['television (TV)'], 'get dressed': ['dressed'], 'piece of cake': ['piece'],
        'water skiing': ['skiing'], 'sore throat': ['sore'], 'go jogging': ['jogging'], 'take exercise': ['exercise'],
        'get wet': ['wet'], 'wet suit, wetsuit': ['wetsuit/wet suit'], 'grocery': ['grocery store'],
        'capital city': ['capital'], 'car alarm': ['alarm'], 'road sign': ['sign'], 'by air': ['air'],
        'by sea': ['sea'], 'at sea': ['sea'], 'parking space': ['parking'], 'underground train': ['underground'],
        'single room': ['room'], 'double room': ['room'], 'folk music': ['folk'], 'hit song': ['hit'],
        'jazz music': ['jazz'], 'pop music': ['pop'], 'rock music': ['rock'], 'soft drink': ['soft'],
        'notice board': ['noticeboard'], 'nature studies': ['nature'], 'mouse mat': ['mouse'],
        'chat room': ['chatroom'], 'taxi driver': ['taxi'], 'customs officer': ['customs'],
        'driving/driver’s (Am Eng)': ['driving licence', 'driver’s licence'],
    },
    # headwords that ran into the end of the example above them with no full stop between:
    # headword -> the leaked "word (pos)"
    'leaked': {'boot': 'border (n)', 'common': 'communicate (v)'},
    'repair': {
        ('digital', ''): {'word': 'digital camera', 'pos': 'n'},       # "digital (adj) digital" / "camera (n)"
        ('driver’s licence (Br Eng) (Am Eng: driver’s', ''): {
            'word': 'driver’s licence', 'pos': 'n', 'note': '(Br Eng) (Am Eng: driver’s license)'},
        ('license)', 'n'): None,
        ('film star', ''): {'pos': 'n'},                               # printed with no part of speech
        ('truck (Am Eng) (Br Eng: lorry)', ''): {'word': 'truck', 'pos': 'n', 'note': '(Am Eng) (Br Eng: lorry)'},
    },
    'pos_only': {},
    'TOPICS_ZH': {
        'Clothes and Accessories': '服裝與配件', 'Colours': '顏色', 'Communications and Technology': '通訊與科技',
        'Education': '學校與教育', 'Entertainment and Media': '娛樂與媒體', 'Environment': '環境',
        'Food and Drink': '食物與飲料', 'Health, Medicine and Exercise': '健康、醫療與運動', 'Hobbies and Leisure': '嗜好與休閒',
        'House and Home': '房屋與居家', 'Language': '語言', 'Personal Feelings, Opinions and Experiences (Adjectives)': '感受、看法與經驗（形容詞）',
        'Places: Buildings': '地點：建築物', 'Places: Countryside': '地點：鄉間', 'Places: Town and City': '地點：城鎮',
        'Services': '服務', 'Shopping': '購物', 'Sport': '運動', 'The Natural World': '大自然', 'Time': '時間',
        'Travel and Transport': '旅行與交通', 'Weather': '天氣', 'Work and Jobs': '工作與職業',
    },
    # Mistakes in Cambridge's list itself, shown corrected with the original behind 已勘誤
    'FIX': {
        ('suprising', 'word'): 'surprising',
        ('drop', 'x1'): 'I almost *dropped* my cup. (v)',          # printed "(n)"
        ('solve', 'pos'): 'v',                                      # printed "n"
        ('unusual', 'pos'): 'adj',                                  # printed "adv"
        ('unhappy', 'pos'): 'adj',                                  # printed "n"
    },
    # whole headwords whose bracket narrows the sense: shown small, never spoken
    'LABEL': {'background (experience)', 'tip (advice)', 'properly (as in working properly)', 'folder (computer)'},
    'SPELLING': {'grey', 'jewellery', 'kilogramme (kg)', 'kilometre (km)', 'litre', 'metre', 'millimetre (mm)',
                 'centimetre (cm)', 'theatre', 'tyre', 'practise'},
}
