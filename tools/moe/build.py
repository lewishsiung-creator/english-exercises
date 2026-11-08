"""Build public/reading/junior-vocab/words.js: 教育部's 2,000 words, the Chinese
written for them, and the textbook words from Lewis's own 講義.

Usage: python3 build.py      (paths are relative to this file; needs node)

words.json  the list as extract.py read it: the word as printed and its table,
            "basic" (表一 基本字) or "more" (表二 其他常用字).
zh.json     this site's, keyed by id: `say`, `senses` [[pos, 中文]] (the list
            prints no part of speech, so these are chosen here), and `ex`
            [english, 中譯] with the word in *asterisks*.
public/junior-high/words.js
            Lewis's 康軒 講義 -- 七年級 400 words by 課次, 八年級 289 by 文法
            主題 -- read through node, so that file stays the one source. It
            is not copied or edited here.

How the textbook joins the list. A textbook word that is on the list (542 of
689) is not repeated: its list entry gains the word's KK, Lewis's example and
a tag for each lesson it is in. One that is not (mostly phrases -- How old...?,
take a shower) becomes an entry of its own, in Lewis's words. Matching is by
the whole headword, case and all (May is the month, may the verb), with a
parenthesis read as the list's variants -- never by a fragment of a phrase,
or "year(s) old" would land on "shoe (s)". PLURALS sends a few plural forms to
the singular the list prints.

Output, in words.js:
  RAW   [id, word, sets, say, senses, examples, kk, lesson keys]
        sets ⊆ basic, more, g7, g8; a lesson key is "<grade>/<lesson id>"
  BOOK  per grade, its lessons in 講義 order, each with code, title, grammar
        and the ids it teaches -- the order the page lists a grade in.
"""
import json
import re
import subprocess
from pathlib import Path

HERE = Path(__file__).parent
ROOT = HERE.parent.parent
OUT = ROOT / 'public' / 'reading' / 'junior-vocab' / 'words.js'
TEXTBOOK = ROOT / 'public' / 'junior-high' / 'words.js'
GRAMMAR = ROOT / 'public' / 'junior-high' / 'grammar.js'


# Collocations, shared by both word pages and keyed by the headword as printed,
# lower-cased: tools/collocations/collocations.json, one entry per word a
# student meets on either page. Each is [collocation, 中文, example, 中譯].
COLLOC_FILE = HERE.parent / 'collocations' / 'collocations.json'


def collocations():
    if not COLLOC_FILE.exists():
        return {}
    data = json.loads(COLLOC_FILE.read_text(encoding='utf-8'))
    return {k: [[c['c'], c['zh'], c['ex'][0], c['ex'][1]] for c in v.get('collocs', [])] for k, v in data.items()}


def colloc_key(w):
    return re.sub(r'\s+', ' ', w.strip().lower())
SETS = {'basic': 'basic', 'more': 'more'}
# 講義 headword -> the list's id, where the 講義 uses a plural or a set phrase
PLURALS = {'teeth': 'tooth', 'fishermen': 'fisherman', 'businessmen': 'businessman',
           'stair': 'stairs', 'sport': 'sports', 'the usa': 'u-s-a-usa'}

READ = """
const fs = require('fs'), vm = require('vm');
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[1], 'utf8') + ';this.OUT = ' + process.argv[2] + ';', ctx);
process.stdout.write(JSON.stringify(ctx.OUT));
"""


def read_js(path, name):
    raw = subprocess.run(['node', '-e', READ, str(path), name], capture_output=True, text=True, check=True).stdout
    return json.loads(raw)


def textbook():
    return read_js(TEXTBOOK, 'WORDS')


def lesson_anchor(code):
    """/junior-high/render.js's lessonAnchor, so a grammar unit's "B1 L1" or
    "單字主題 3" names the same lesson id the word list uses."""
    m = re.match(r'^主題 (\d+)$', re.sub(r'^單字', '', code))
    return f't{m.group(1)}' if m else re.sub(r'\s+', '-', code.lower())


def grammar_units():
    """grade -> lesson id -> (unit id, unit title): the first unit that covers
    the lesson, which is where /junior-high/'s own ✎ 文法 link goes."""
    out = {}
    for g in read_js(GRAMMAR, 'GRAMMAR')['grades']:
        if not g.get('ready'):
            continue
        for u in g['units']:
            for code in u.get('lessons', []):
                out.setdefault(g['id'], {}).setdefault(lesson_anchor(code), (u['id'], u['title']))
    return out


def variants(w):
    """The forms a printed headword stands for: 'airplane (plane)' -> airplane, plane."""
    head = re.sub(r'\s*\(.*\)\s*$', '', w).strip()
    out = {head}
    m = re.search(r'\(([^)]*)\)\s*$', w)
    if m and m.group(1).strip() not in ('s', ''):
        out |= {p.strip() for p in m.group(1).split(',') if p.strip()}
    for part in head.split('/'):
        out.add(part.strip())
    return {o for o in out if len(o) > 1 or o in ('a', 'I')}


def slug(w):
    return re.sub(r'[^a-z0-9]+', '-', w.lower()).strip('-') or 'x'


def say_of(w):
    """How the speech engine should read a 講義 headword."""
    w = re.sub(r'(?<=\w)\(([a-z]{1,3})\)', r'\1', w)  # year(s) -> years, not "everyone (everybody)"
    w = re.sub(r'\s*\(.*\)', '', w)                # think (thought, thought) -> think
    w = w.replace('...', ' ').replace('…', ' ')
    w = re.sub(r'[?!.]+$', '', w.strip())           # How old...? -> How old
    return re.sub(r'\s+', ' ', w).strip()


def main():
    words = json.loads((HERE / 'words.json').read_text(encoding='utf-8'))
    zh = json.loads((HERE / 'zh.json').read_text(encoding='utf-8'))
    missing = [e['id'] for e in words if e['id'] not in zh]
    if missing:
        raise SystemExit(f'{len(missing)} words have no Chinese yet, e.g. {missing[:8]}')

    entries = {}
    exact, lower = {}, {}
    for e in words:
        z = zh[e['id']]
        entries[e['id']] = {'id': e['id'], 'w': e['w'], 'sets': [SETS[e['set']]], 'say': z['say'],
                            'senses': z['senses'], 'ex': [z['ex']], 'kk': '', 'lessons': []}
        for v in variants(e['w']):
            exact.setdefault(v, e['id'])
            lower.setdefault(v.lower(), e['id'])

    book = {}
    tb = textbook()
    units = grammar_units()
    unmatched = 0
    for g in tb['grades']:
        if not g.get('ready'):
            continue
        lessons = []
        for b in g['books']:
            for l in b['lessons']:
                key = f"{g['id']}/{l['id']}"
                ids = []
                for w in l['words']:
                    head = w['w']
                    base = re.sub(r'\s*\(.*\)\s*$', '', head).strip()
                    alts = [base] + [p.strip() for p in base.split('/') if p.strip()]
                    eid = (PLURALS.get(base.lower())
                           or next((exact[a] for a in alts if a in exact), None)
                           or next((lower[a.lower()] for a in alts if a.lower() in lower and a[0].islower()), None))
                    if eid is None:
                        eid = 'tb-' + slug(base)
                        if eid not in entries:
                            unmatched += 1
                            pos = [p.strip('.') for p in w['pos'].split('/') if p.strip('.')]
                            entries[eid] = {'id': eid, 'w': head, 'sets': [], 'say': say_of(head),
                                            'senses': [['/'.join(pos), w['zh']]], 'ex': [], 'kk': '', 'lessons': []}
                    ent = entries[eid]
                    if g['id'] not in ent['sets']:
                        ent['sets'].append(g['id'])
                    if key not in ent['lessons']:
                        ent['lessons'].append(key)
                    if w.get('kk') and not ent['kk']:
                        ent['kk'] = w['kk']
                    if w.get('en') and w.get('zhEx'):
                        # unmarked if the word cannot be found as written: it still
                        # shows, it just never becomes a gap-fill
                        sent = mark(w['en'], head) or w['en']
                        if all(x[0].replace('*', '') != w['en'] for x in ent['ex']):
                            ent['ex'].append([sent, w['zhEx']])
                    if eid not in ids:
                        ids.append(eid)
                unit = units.get(g['id'], {}).get(l['id'])
                lessons.append({'key': key, 'code': l['code'], 'title': l['title'],
                                'grammar': l.get('grammar', ''), 'ids': ids,
                                'unit': unit[0] if unit else '', 'unitTitle': unit[1] if unit else ''})
        book[g['id']] = {'zh': g['zh'], 'lessons': lessons}

    # One A-Z run for the whole page. Left in table order, 全部 read 基本字 a-z
    # and then started again at a for 常用字, and the A-Z rail could not follow.
    order = sorted(entries.values(), key=lambda e: (re.sub(r'[^a-z]', '', e['w'].lower()) or e['w'].lower(), e['w']))
    cols = collocations()
    rows = [[e['id'], e['w'], e['sets'], e['say'], e['senses'], e['ex'], e['kk'], e['lessons'],
             cols.get(e['w'].strip()) or cols.get(colloc_key(e['w']), [])]
            for e in order]
    lines = ',\n'.join(json.dumps(r, ensure_ascii=False) for r in rows)
    OUT.write_text(
        '/* 國中單字 — built by tools/moe/build.py from 教育部 108 課綱《英語文參考字彙表》\n'
        '   (2,000 字, 附錄五), the Chinese in tools/moe/zh.json, and the textbook words in\n'
        '   public/junior-high/words.js (路老師講義, 康軒版). Edit those, not this. */\n'
        f'const RAW = [\n{lines}\n];\n'
        f'const BOOK = {json.dumps(book, ensure_ascii=False)};\n', encoding='utf-8')
    in_book = sum(1 for e in entries.values() if e['lessons'])
    print(f'{len(rows)} entries ({len(words)} from the list, {unmatched} textbook-only); '
          f'{in_book} carry a lesson -> {OUT}')


def mark(sentence, head):
    """Put the 講義 example's own headword in *asterisks*, for the quiz.

    Tries the whole phrase, then each slash variant, then the phrase without a
    leading "be" (be proud of -> proud of). Returns '' when none is found as
    written; the caller then keeps the sentence unmarked."""
    base = say_of(head).strip()
    forms = [base] + base.split('/')
    if base.lower().startswith('be '):
        forms.append(base[3:])
    # the forms the 講義 prints in brackets: think (thought, thought)
    m = re.search(r'\(([^)]*)\)', head)
    if m:
        forms += [f.strip() for f in re.split(r'[,/]', m.group(1)) if len(f.strip()) > 1]
    forms += [f[:-1] + 'ie' for f in list(forms) if f.endswith('y')]     # cry -> cries
    for form in forms:
        form = form.strip()
        if not form:
            continue
        first, _, rest = form.partition(' ')
        # a phrase takes its ending on its first word: takes a shower, looking for
        stem = re.escape(first[:-1]) + r'e?' if first.endswith('e') else re.escape(first)
        pats = [stem + r'[a-z]{0,3}' + (r'\s+' + r'\s+'.join(map(re.escape, rest.split())) if rest else '')]
        if rest:   # or on its last, for a noun: basketball courts, video games
            pats.append(r'\s+'.join(map(re.escape, form.split())) + r'[a-z]{0,2}')
        for pat in pats:
            m = re.search(r'(?<![A-Za-z])' + pat + r'(?![A-Za-z])', sentence, re.I)
            if m:
                return sentence[:m.start()] + '*' + m.group(0) + '*' + sentence[m.end():]
    return ''


if __name__ == '__main__':
    main()
