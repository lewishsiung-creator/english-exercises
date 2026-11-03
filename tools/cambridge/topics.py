"""Read the topic-list appendix of a Cambridge list PDF and tag <exam>/words.json.

Usage: python -I topics.py a2-key a2key.pdf

Topic headings are bold lines at the left margin; the words under each run in
four columns, so membership is all that survives (order within a topic is
alphabetical on the page anyway). Topic items are matched to headwords through
a few spellings each, since the appendix writes 'ad / advertisement',
'costume (swimming)' or 'January - December' where the list has single entries.
"""
import json
import re
import sys

from pathlib import Path

import fitz

sys.path.insert(0, str(Path(__file__).parent))   # run with -I, which leaves this folder off the path
from exams import EXAMS  # noqa: E402

POS = re.compile(r'\s*\((?:n|v|adj|adv|phr v)\b[^)]*\)\s*$')
FOOTER = re.compile(r'UCLES|CUPA|^Page \d+ of|^(A2 Key|Key and Key|Schools|Vocabulary List|B1 Preliminary|Preliminary and|for Schools)')
MONTHS = 'January February March April May June July August September October November December'.split()
DAYS = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split()


def keys(s):
    """Spellings a headword or topic item may be found under."""
    s = s.strip().lower().replace('’', "'")
    out = {s}
    out.add(re.sub(r'\s*\([^)]*\)', '', s).strip())          # mobile (phone) -> mobile
    out.add(re.sub(r'[()]', '', s).strip())                   # photo(graph) -> photograph
    for part in re.split(r'\s*/\s*', s):
        out.add(part.strip())
        out.add(re.sub(r'\s*\([^)]*\)', '', part).strip())
    return {k for k in out if k}


def read_topics(pdf):
    doc = fitz.open(pdf)
    topics, cur = [], None
    for pn in range(*X['topic_pages']):
        lines = []
        for b in doc[pn].get_text('dict')['blocks']:
            for l in b.get('lines', []):
                spans = [s for s in l['spans'] if s['text'].strip()]
                if not spans or l['bbox'][1] < 40 and 'UCLES' in spans[0]['text']:
                    continue
                t = re.sub(r'\s+', ' ', ''.join(s['text'] for s in l['spans'])).strip()
                lines.append((l['bbox'][1], l['bbox'][0], t, spans))
        lines = [ln for ln in lines if not FOOTER.search(ln[2]) and ln[2] not in ('Appendix 2', 'Topic Lists')]
        # Headings run across the page; under each, items sit in four columns. Read each
        # column top to bottom so an item that wraps ("barbecue (n &" / "v)") stays together.
        heads = sorted(ln for ln in lines if ln[1] < X['topic_head_x'] and all('Bold' in sp['font'] for sp in ln[3])
                       and not POS.search(ln[2]))
        bounds = [h[0] for h in heads] + [1e9]
        segments = [(None, [ln for ln in lines if ln[0] < bounds[0] and ln not in heads])]
        for i, h in enumerate(heads):
            segments.append((h[2], [ln for ln in lines if h[0] < ln[0] < bounds[i + 1] and ln not in heads]))
        for title, seg in segments:
            if title:
                cur = {'en': title, 'items': []}
                topics.append(cur)
            if not cur:
                continue
            xs = sorted({round(ln[1]) for ln in seg})
            col = {}
            for x in xs:                          # columns: x positions within 40pt of each other
                col[x] = col[x - 1] if x - 1 in col else next((col[c] for c in col if x - c < 40), len(set(col.values())))
            items = []
            for y, x, t, spans in sorted(seg, key=lambda ln: (col[round(ln[1])], ln[0])):
                if items and (items[-1].count('(') > items[-1].count(')') or items[-1].endswith(('/', '–', '-'))
                              or re.fullmatch(POS.pattern, t)):
                    items[-1] = items[-1] + ' ' + t
                else:
                    items.append(t)
            cur['items'] += items
    return topics


def main(exam, pdf):
    global X
    X = EXAMS[exam]
    BY_HAND = X.get('topic_by_hand', {})
    dest = Path(__file__).parent / exam / 'words.json'
    words = json.load(open(dest))
    index = {}
    for i, w in enumerate(words):
        for k in keys(w['word']):
            index.setdefault(k, []).append(i)
    topics = read_topics(pdf)
    missing = []
    for w in words:
        w['topics'] = []
    for ti, t in enumerate(topics):
        for item in t['items']:
            bare = POS.sub('', item).strip()
            if bare in BY_HAND:
                targets = BY_HAND[bare]
            elif re.match(r'January\s*-\s*December', bare):
                targets = MONTHS
            elif re.match(r'Monday\s*-\s*Sunday', bare):
                targets = DAYS
            else:
                targets = [bare]
            for target in targets:
                hits = set()
                for k in keys(target):
                    hits.update(index.get(k, []))
                if not hits and target.endswith('s'):   # lights, shoes, holidays
                    for k in keys(target[:-1]):
                        hits.update(index.get(k, []))
                if not hits:
                    missing.append((t['en'], item))
                for i in hits:
                    if t['en'] not in words[i]['topics']:
                        words[i]['topics'].append(t['en'])
    json.dump(words, open(dest, 'w'), ensure_ascii=False, indent=1)
    json.dump([t['en'] for t in topics], sys.stdout)
    print()
    print(sum(1 for w in words if w['topics']), 'words in a topic;', len(missing), 'items unmatched:')
    for m in missing:
        print('  ', m)


if __name__ == '__main__':
    main(*sys.argv[1:])
