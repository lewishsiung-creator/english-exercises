"""Build public/a2-key/words.js from Cambridge's list and the Chinese.

Usage: python3 build.py            (from anywhere; paths are relative to this file)

words.json  Cambridge's A2 Key list (August 2025) as extract.py + topics.py read it:
            word, pos, note, examples, topics, new-in-2025. Cambridge's text, untouched.
zh.json     the Chinese written for this page, item for item: senses [{p, z}] and
            examples [{en, zh}], where en is Cambridge's sentence with the headword
            wrapped in *asterisks* for the quiz.

Everything this page changes about Cambridge's text happens below, in FIX and
LABEL, so words.json stays the source as printed. A corrected line keeps the
original, which the page shows behind an 「已勘誤」 tag.
"""
import unicodedata
import json
import re
from pathlib import Path

HERE = Path(__file__).parent
OUT = HERE.parent.parent / 'public' / 'a2-key' / 'words.js'

TOPICS_ZH = {
    'Appliances': '家電用品', 'Clothes and Accessories': '服裝與配件', 'Colours': '顏色',
    'Communication and Technology': '通訊與科技', 'Documents and Texts': '文件與文字', 'Education': '學校與教育',
    'Entertainment and Media': '娛樂與媒體', 'Family and Friends': '家人與朋友', 'Food and Drink': '食物與飲料',
    'Health, Medicine and Exercise': '健康、醫療與運動', 'Hobbies and Leisure': '嗜好與休閒', 'House and Home': '房屋與居家',
    'Measurements': '度量單位', 'Personal Feelings, Opinions and Experiences (adjectives)': '感受、看法與經驗（形容詞）',
    'Places: Buildings': '地點：建築物', 'Places: Countryside': '地點：鄉間', 'Places: Town and City': '地點：城鎮',
    'Services': '服務', 'Shopping': '購物', 'Sport': '運動', 'The Natural World': '大自然', 'Time': '時間',
    'Travel and Transport': '旅行與交通', 'Weather': '天氣', 'Work and Jobs': '工作與職業',
}

# Mistakes in Cambridge's list itself. key: (word, field) -> corrected value
FIX = {
    ('chips', 'note'): '(Br Eng) (Am Eng: French fries)',          # printed "Am Eng: biscuit"
    ('driving/driver’s licence', 'note'): '(Br Eng) (Am Eng: driver’s license)',   # printed "Br Eng: driver's license"
    ('practice', 'note'): 'Br Eng: noun practice, verb practise; Am Eng: practice for both',   # printed "(Am Eng: practise)"
    ('friend', 'x0'): 'It’s easy for her to make friends.',          # printed "for her make friends"
    ('unfortunately', 'pos'): 'adv',                                 # printed "adj"
    ('unhappy', 'pos'): 'adj',                                       # printed "n"
}
# The note for practice is not a Br/Am pair, so it gets its own Chinese
NOTE_ZH = {
    'practice': '英式：名詞 *practice*、動詞 *practise*；美式兩者都寫 *practice*',
    'bright': '用於顏色',
    'suggest': '後面接 V-ing',
}
# Words Cambridge narrows with a bracket after the word. Shown small beside it, never spoken.
LABEL = {'PLANNING', 'PROCESS', 'DRAWING', 'SOCIAL MEDIA', 'NOT ARTIFICIAL', 'ENTERTAIN', 'ENTERTAINMENT',
         'technology', 'become happy', 'digitally', 'stylish', 'clever', 'music'}
# Cambridge's "examples" here are really one-word notes on the sense
SENSE_NOTE = {'train': 'sport', 'training': 'sport', 'work out': 'exercise'}
# Marks the quiz should not use: the headword is split ("Turn the TV off") or sits inside another word
UNMARK = {('turn off', 0), ('turn on', 0), ('at / @', 0)}
# Br/Am pairs that differ only in spelling (美式寫成), not in the word itself (美式說)
SPELLING = {'grey', 'jewellery', 'kilogramme (kg)', 'kilometre (km)', 'litre', 'metre', 'theatre', 'tyre'}


def slugify(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode()
    s = s.lower().replace('’', '').replace("'", '').replace('@', 'at')
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')


def speakable(w):
    """What the speech engine reads: optional letters kept, abbreviations dropped."""
    w = re.sub(r'(\w)\((\w+)\)', r'\1\2', w)                 # blond(e), photo(graph), yog(h)urt
    w = re.sub(r'\((\w+)\)(\w)', r'\1\2', w)                 # (a)round
    w = re.sub(r"\s*\((?:km|kg|cm|TV|£|'ll|personal computer|unc n)\)", '', w)
    w = re.sub(r'\s*\(([^)]*)\)', r' \1', w)                 # mobile (phone), of course (not)
    w = re.sub(r'\s*/\s*@', '', w)                            # at / @
    w = w.replace(' / ', ' or ').replace('/', ' or ')
    return re.sub(r'\s+', ' ', w).strip()


def variety(note):
    """Cambridge's (Br Eng) (Am Eng: cookie) as one Chinese line."""
    if not note:
        return ''
    side = {'Br Eng': '英式', 'Am Eng': '美式'}
    own = re.findall(r'\((Br Eng|Am Eng)\)', note)
    other = re.findall(r'\((Br Eng|Am Eng): ([^)]+)\)', note)
    parts = [side[own[0]] + '英文'] if own else []
    return parts, other


def build():
    words = json.load(open(HERE / 'words.json'))
    zh = json.load(open(HERE / 'zh.json'))
    topics = list(TOPICS_ZH)
    rows, seen = [], {}
    for w, z in zip(words, zh):
        word, fixes = w['word'], {}
        note, pos = w['note'], w['pos']
        senses = [[s['p'], s['z']] for s in z['senses']]
        exs = [[x['en'], x['zh']] for x in z['ex']]

        if (word, 'note') in FIX:
            fixes['note'] = note
            note = FIX[(word, 'note')]
        if (word, 'pos') in FIX:
            fixes['pos'] = pos
            senses[0][0] = FIX[(word, 'pos')]
        if (word, 'x0') in FIX:
            fixes['x0'] = exs[0][0].replace('*', '')
            fixed = FIX[(word, 'x0')]
            exs[0][0] = re.sub(r'\b(friends)\b', r'*\1*', fixed, count=1) if word == 'friend' else fixed
        if word == 'bright':
            senses = [['adj', senses[0][1]]]
        for (u, k) in UNMARK:
            if u == word:
                exs[k][0] = exs[k][0].replace('*', '')

        # the bracket after a word: a sense label, or Cambridge's grammar remark
        lab = ''
        m = re.match(r'^(.*?)\s*\(([^)]+)\)$', word)
        if m and m.group(2) in LABEL:
            word, lab = m.group(1), '(' + m.group(2).lower() + ')'
        elif m and m.group(2) == 'transitive and intransitive':
            word = m.group(1)
        base = word.split(' (')[0] if word.startswith(('train', 'training')) else word
        if base in SENSE_NOTE and exs and exs[0][0] == SENSE_NOTE[base]:
            lab = '(' + SENSE_NOTE[base] + ')'
            exs = []

        # Br / Am
        if w['word'] in NOTE_ZH:
            vari = NOTE_ZH[w['word']]
        elif note.startswith('('):
            parts, other = variety(note)
            for s, alt in other:
                same = w['word'] in SPELLING
                parts.append(f"{'英式' if s == 'Br Eng' else '美式'}{'寫成' if same else '說'} *{alt}*")
            vari = '；'.join(parts)
        else:
            vari = ''
        # a word's link: the spoken form, so yog(h)urt is #yoghurt; a label tells two designs apart
        said = speakable(word)
        slug = slugify(' '.join(dict.fromkeys(said.replace(' or ', ' ').split())) + ' ' + lab)
        if slug in seen:
            slug = slug + '-' + slugify(pos or 'x')
        seen[slug] = True
        rows.append([slug, word, lab, said, senses, vari, exs,
                     [topics.index(t) for t in w['topics']], 1 if w['new'] else 0, fixes or 0])

    js = ('/* A2 Key vocabulary — built by tools/a2-key/build.py from Cambridge\'s list (August 2025,\n'
          '   © UCLES 2025) and the Chinese in tools/a2-key/zh.json. Edit those, not this. */\n'
          'const TOPICS = ' + json.dumps([[t, TOPICS_ZH[t]] for t in topics], ensure_ascii=False) + ';\n'
          '// [id, word, label, spoken as, senses [[pos, 中文]], Br/Am note, examples [[en, 中譯]], topics, new in 2025, corrections]\n'
          'const RAW = [\n' + ',\n'.join(json.dumps(r, ensure_ascii=False, separators=(',', ':')) for r in rows) + '\n];\n')
    OUT.write_text(js)
    print(len(rows), 'words ->', OUT, f'({len(js) // 1024} KB)')


if __name__ == '__main__':
    build()
