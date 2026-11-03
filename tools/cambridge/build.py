"""Build public/cambridge/<exam>/words.js from Cambridge's list and the Chinese.

Usage: python3 build.py a2-key     (or b1-preliminary; paths are relative to this file)

<exam>/words.json  Cambridge's list as extract.py + topics.py read it:
            word, pos, note, examples, topics, new-in-2025. Cambridge's text, untouched.
<exam>/zh.json     the Chinese written for this page, item for item: senses [{p, z}] and
            examples [{en, zh}], where en is Cambridge's sentence with the headword
            wrapped in *asterisks* for the quiz.

Everything the page changes about Cambridge's text is listed per exam in
exams.py (FIX, LABEL, ...), so words.json stays the source as printed. A corrected line keeps the
original, which the page shows behind an 「已勘誤」 tag.
"""
import json
import re
import sys
import unicodedata
from pathlib import Path

from exams import EXAMS

HERE = Path(__file__).parent
PUBLIC = HERE.parent.parent / 'public' / 'cambridge'
EXAM = sys.argv[1] if len(sys.argv) > 1 else 'a2-key'
X = EXAMS[EXAM]
TOPICS_ZH, FIX, NOTE_ZH, LABEL = X['TOPICS_ZH'], X.get('FIX', {}), X.get('NOTE_ZH', {}), X.get('LABEL', set())
SENSE_NOTE, UNMARK, SPELLING = X.get('SENSE_NOTE', {}), X.get('UNMARK', set()), X.get('SPELLING', set())


def slugify(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode()
    s = s.lower().replace('’', '').replace("'", '').replace('@', 'at')
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')


def speakable(w):
    """What the speech engine reads: optional letters kept, abbreviations dropped."""
    w = re.sub(r'(\w)\((\w+)\)', r'\1\2', w)                 # blond(e), photo(graph), yog(h)urt
    w = re.sub(r'\((\w+)\)(\w)', r'\1\2', w)                 # (a)round
    w = re.sub(r"\s*\((?:km|kg|cm|mm|TV|£|'ll|personal computer|unc n|advertisement|Curriculum Vitae|DJ|disc jockey|"
               r"ID|Information Technology|lab|amongst)\)", '', w)
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
    words = json.load(open(HERE / EXAM / 'words.json'))
    zh = json.load(open(HERE / EXAM / 'zh.json'))
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
        for k in range(len(exs)):                      # ('friend', 'x0'): the first example
            if (word, f'x{k}') in FIX:
                fixes[f'x{k}'] = exs[k][0].replace('*', '')
                exs[k][0] = FIX[(word, f'x{k}')]
        if (word, 'word') in FIX:                      # a misspelt headword
            fixes['word'] = word
            word = FIX[(word, 'word')]
        if word in X.get('pos_only', {}):
            senses = [[X['pos_only'][word], senses[0][1]]]
        for (u, k) in UNMARK:
            if u == word:
                exs[k][0] = exs[k][0].replace('*', '')

        # the bracket after a word: a sense label, or Cambridge's grammar remark
        lab = ''
        m = re.match(r'^(.*?)\s*\(([^)]+)\)$', word)
        if m and (m.group(2) in LABEL or word in LABEL):   # LABEL holds bracket texts, or whole words
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

    js = (f'/* {X["name"]} vocabulary — built by tools/cambridge/build.py {EXAM} from Cambridge\'s list\n'
          f'   ({X["edition"]}) and the Chinese in tools/cambridge/{EXAM}/zh.json. Edit those, not this. */\n'
          'const TOPICS = ' + json.dumps([[t, TOPICS_ZH[t]] for t in topics], ensure_ascii=False) + ';\n'
          '// [id, word, label, spoken as, senses [[pos, 中文]], Br/Am note, examples [[en, 中譯]], topics, new in 2025, corrections]\n'
          'const RAW = [\n' + ',\n'.join(json.dumps(r, ensure_ascii=False, separators=(',', ':')) for r in rows) + '\n];\n')
    out = PUBLIC / EXAM / 'words.js'
    out.write_text(js)
    print(len(rows), 'words ->', out, f'({len(js) // 1024} KB)')


if __name__ == '__main__':
    build()
