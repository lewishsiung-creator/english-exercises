"""Read Cambridge's Pre A1 Starters, A1 Movers and A2 Flyers wordlists into
young-learners/words.json.

Usage: python -I young_learners.py starters-movers-flyers.pdf     (read the PDF)
       python3 young_learners.py build                            (write the page's words.js)

Source: https://www.cambridgeenglish.org/images/506166-starters-movers-flyers-word-list-2018.pdf
(the 2018 syllabus; the file was last revised June 2025).

The PDF has three single-level A-Z lists, then a combined list (pages 23-30)
that gives every word once with the level it first appears at, S, M or F. That
combined list is the source here. Each entry is the word in a medium weight, its
part of speech in italic, then the level in bold; a remark in brackets may sit
after the word or after the part of speech, and an entry may wrap onto a second
line, so spans are collected until the bold level closes the entry.

The thematic list (pages 38-44) supplies the topics: each topic heading runs
across the page, and its words sit in three columns, one per level.
"""
import json
import re
import sys
from pathlib import Path

try:
    import fitz                      # only reading the PDF needs it; build does not
except ImportError:
    fitz = None

HERE = Path(__file__).parent
POS_NAMES = {'adj', 'adv', 'conj', 'det', 'dis', 'excl', 'int', 'n', 'poss', 'prep', 'pron', 'v'}


def kind(span):
    f = span['font']
    return 'B' if 'Bold' in f else 'I' if 'Italic' in f else 'M'


def entries(doc):
    out, word, pos, note = [], '', '', ''
    for pn in range(22, 30):
        lines = []
        for b in doc[pn].get_text('dict')['blocks']:
            for l in b.get('lines', []):
                sp = [s for s in l['spans'] if s['text'].strip() and round(s['size']) == 8]
                if sp and not any('vocabulary list' in s['text'] for s in sp):
                    lines.append((l['bbox'][0], l['bbox'][1], sp))
        for x, y, sp in sorted(lines, key=lambda t: (round(t[0] / 60), t[1])):
            for s in sp:
                t = s['text'].replace('﻿', '')
                k = kind(s)
                if k == 'B' and t.strip() in ('S', 'M', 'F'):
                    out.append({'word': re.sub(r'\s+', ' ', word).strip(), 'pos': re.sub(r'\s+', ' ', pos).strip(),
                                'note': re.sub(r'\s+', ' ', note).strip(), 'level': t.strip()})
                    word, pos, note = '', '', ''
                elif k == 'I':
                    pos += ' ' + t
                elif pos:
                    note += ' ' + t          # a remark after the part of speech
                else:
                    word += ' ' + t
    # a bracketed remark written after the word belongs with the note, not the word
    for e in out:
        m = re.match(r'^(.*?)\s*(\((?:as in|e\.g\.|for|UK|US)[^)]*\).*)$', e['word'])
        if m:
            e['word'], e['note'] = m.group(1), (m.group(2) + ' ' + e['note']).strip()
    return out


def tidy(words):
    for e in words:
        # "prep of place", "(s + pl) n": keep the part of speech, move the rest to the note
        toks = e['pos'].replace('(s + pl)', '').split()
        extra = [t for t in toks if t not in POS_NAMES | {'+', 'title'}]
        if extra or '(s + pl)' in e['pos']:
            keep = ' '.join(t for t in toks if t not in extra).strip(' +')
            # the remark is the part from the first word that is not a part of speech: "of place + time"
            rest = re.sub(r'^(?:(?:%s|\+)\s*)+' % '|'.join(sorted(POS_NAMES)), '', e['pos'].replace('(s + pl)', '').strip())
            remark = ('(singular + plural) ' if '(s + pl)' in e['pos'] else '') + rest
            e['pos'], e['note'] = keep, (e['note'] + ' ' + remark).strip()
        if e['word'] == 'film' and e['note'] == '(US movie) star':
            e['word'], e['note'] = 'film star', '(US movie star)'
        # "bat (as sports / equipment)" wraps at the foot of a column, and "agree v F" is read between the halves
        if e['word'] == 'bat (as sports agree':
            e['word'] = 'agree'
        if e['word'] == 'equipment)':
            e['word'], e['note'] = 'bat', '(as sports equipment)'
    return sorted(words, key=lambda e: (re.sub(r'[^a-z]', '', e['word'].lower()), 'SMF'.index(e['level'])))


def keys(s):
    s = s.strip().lower().replace('’', "'")
    out = {s, re.sub(r'\s*\([^)]*\)', '', s).strip(), re.sub(r'[()]', '', s).strip(),
           re.sub(r'\s*\(.*$', '', s).strip()}                # "left (as in": a bracket cut off by the line end
    for part in re.split(r'\s*/\s*', s):
        out |= {part.strip(), re.sub(r'\s*\([^)]*\)', '', part).strip()}
    return {k for k in out if k}


def topics(doc, words):
    """Tag each word with the thematic-list topics it appears under."""
    names, items = [], []
    for pn in range(37, 43):
        heads, lines = [], []
        for b in doc[pn].get_text('dict')['blocks']:
            for l in b.get('lines', []):
                sp = [s for s in l['spans'] if s['text'].strip()]
                if not sp or round(sp[0]['size']) != 9:
                    continue
                t = re.sub(r'\s+', ' ', ''.join(s['text'] for s in sp).replace('\ufeff', '')).strip()
                x, y = l['bbox'][0], l['bbox'][1]
                if x < 60 and all('Bold' in s['font'] for s in sp):
                    if heads and y - heads[-1][2] < 14:            # a heading that wrapped: keep its first line's height
                        heads[-1] = (heads[-1][0], heads[-1][1] + ' ' + t, y)
                    else:
                        heads.append((y, t, y))
                elif x > 100 and not any('Bold' in s['font'] for s in sp):
                    lines.append((y, t))
        for y, t, _ in heads:
            names.append(t.strip())
        for y, t in lines:
            above = [i for i, (hy, _, _) in enumerate(heads) if hy <= y + 2]
            ti = len(names) - len(heads) + above[-1] if above else len(names) - len(heads) - 1
            items.append((ti, t))
    index = {}
    for i, w in enumerate(words):
        for k in keys(w['word']):
            index.setdefault(k, []).append(i)
    missing = []
    for w in words:
        w['topics'] = []
    for ti, t in items:
        hits = set()
        if t.startswith('(') or re.match(r'^[\d,–st-]+$', t.replace('th', '')):   # "(US center)", "1–20": the other half of a wrapped line, or numbers
            continue
        for part in re.split(r',\s*', t):
            found = set()
            for k in keys(part):
                found.update(index.get(k, []))
            # two senses of one word (bat the animal, bat for sport): a bracket picks its own,
            # a bare word picks the one without a bracket
            note = re.search(r'\(.*', part)
            same = {i for i in found if note and words[i]['note'].startswith(note.group(0).rstrip(')')[:12])}
            plain = {i for i in found if not words[i]['note']}
            hits.update(same or (plain if not note and plain else found))
        if not hits:
            missing.append((names[ti], t))
        for i in hits:
            if names[ti] not in words[i]['topics']:
                words[i]['topics'].append(names[ti])
    return names, missing


def main(pdf):
    doc = fitz.open(pdf)
    words = tidy(entries(doc))
    names, missing = topics(doc, words)
    print('topics:', names)
    print(sum(1 for w in words if w['topics']), 'words in a topic;', len(missing), 'items unmatched:', missing)
    dest = HERE / 'young-learners' / 'words.json'
    dest.parent.mkdir(exist_ok=True)
    json.dump(words, open(dest, 'w'), ensure_ascii=False, indent=1)
    from collections import Counter
    print(len(words), 'words', dict(Counter(e['level'] for e in words)))




# ---------- build: young-learners/words.json + zh.json -> public/cambridge/young-learners/words.js ----------

TOPICS_ZH = {
    'Animals': ('動物', '🐾'), 'The body and the face': ('身體和臉', '👀'), 'Clothes': ('衣服', '👕'),
    'Colours': ('顏色', '🎨'), 'Family & friends': ('家人和朋友', '👪'), 'Food & drink': ('食物和飲料', '🍎'),
    'Health': ('健康', '🩹'), 'The home': ('家裡', '🏠'), 'Materials': ('材料', '🧱'), 'Names': ('名字', '🙋'),
    'Numbers': ('數字', '🔢'), 'Places & directions': ('地方和方向', '🗺️'), 'School': ('學校', '🏫'),
    'Sports & leisure': ('運動和休閒', '⚽'), 'Time': ('時間', '⏰'), 'Toys': ('玩具', '🧸'),
    'Transport': ('交通工具', '🚌'), 'Weather': ('天氣', '🌦️'), 'Work': ('工作', '🧑‍🔧'),
    'The world around us': ('我們的世界', '🌍'),
}


def note_zh(note):
    """Cambridge's '(UK flat)' / '(US center)' as a short line for a parent; other remarks stay English."""
    m = re.fullmatch(r'\((UK|US) (.+)\)', note)
    if m:
        return ('英國說' if m.group(1) == 'UK' else '美國說') + ' *' + m.group(2) + '*'
    return note


def speakable(w):
    w = re.sub(r'(\w)\((\w+)\)', r'\1\2', w)          # sweet(s)
    w = re.sub(r'\s*\(got\)', ' got', w)
    w = w.replace('…', '')
    w = re.sub(r'(\S+)/\S+', r'\1', w)              # city/town centre -> city centre; foot/feet -> foot
    return re.sub(r'\s+', ' ', w).strip()


def build():
    words = json.load(open(HERE / 'young-learners' / 'words.json'))
    zh = json.load(open(HERE / 'young-learners' / 'zh.json'))
    pics_file = HERE / 'young-learners' / 'pics.json'
    pics = json.load(open(pics_file)) if pics_file.exists() else {}
    topics = list(TOPICS_ZH)
    rows, seen = [], {}
    for w, z in zip(words, zh):
        said = speakable(w['word'])
        slug = re.sub(r'[^a-z0-9]+', '-', said.lower()).strip('-') or 'x'
        if slug in seen:
            seen[slug] += 1
            slug = f'{slug}-{seen[slug]}'
        else:
            seen[slug] = 1
        rows.append([slug, w['word'], note_zh(w['note']), said, 'SMF'.index(w['level']),
                     [[s['p'], s['z']] for s in z['senses']], z['emoji'],
                     [topics.index(t) for t in w['topics']]])
    js = ('/* Pre A1 Starters, A1 Movers, A2 Flyers — built by tools/cambridge/young_learners.py build from\n'
          '   Cambridge\'s wordlists (2018 syllabus) and the Chinese and pictures in young-learners/zh.json. */\n'
          'const TOPICS = ' + json.dumps([[t, *TOPICS_ZH[t]] for t in topics], ensure_ascii=False) + ';\n'
          '// emoji -> its Fluent Emoji picture in pics/ (tools/cambridge/kid_pictures.py)\n'
          'const PICS = ' + json.dumps(pics, ensure_ascii=False, sort_keys=True) + ';\n'
          '// [id, word, note, spoken as, level 0-2 (Starters, Movers, Flyers), senses [[pos, 中文]], emoji, topics]\n'
          'const RAW = [\n' + ',\n'.join(json.dumps(r, ensure_ascii=False, separators=(',', ':')) for r in rows) + '\n];\n')
    out = HERE.parent.parent / 'public' / 'cambridge' / 'young-learners' / 'words.js'
    out.parent.mkdir(exist_ok=True)
    out.write_text(js)
    print(len(rows), 'words ->', out, f'({len(js) // 1024} KB)')


if __name__ == '__main__':
    build() if sys.argv[1:] == ['build'] else main(*sys.argv[1:])
