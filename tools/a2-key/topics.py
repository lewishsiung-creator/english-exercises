"""Read Appendix 2 (topic lists) of the A2 Key PDF and tag words.json with topics.

Usage: python -I topics.py a2key.pdf words.json

Topic headings are bold lines at the left margin; the words under each run in
four columns, so membership is all that survives (order within a topic is
alphabetical on the page anyway). Topic items are matched to headwords through
a few spellings each, since the appendix writes 'ad / advertisement',
'costume (swimming)' or 'January - December' where the list has single entries.
"""
import json
import re
import sys

import fitz

POS = re.compile(r'\s*\((?:n|v|adj|adv)\b[^)]*\)\s*$')
MONTHS = 'January February March April May June July August September October November December'.split()
DAYS = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split()
# items whose wording matches no headword by rule
BY_HAND = {
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
}


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
    for pn in range(24, 32):
        lines = []
        for b in doc[pn].get_text('dict')['blocks']:
            for l in b.get('lines', []):
                spans = [s for s in l['spans'] if s['text'].strip()]
                if not spans or l['bbox'][1] < 40 and 'UCLES' in spans[0]['text']:
                    continue
                t = re.sub(r'\s+', ' ', ''.join(s['text'] for s in l['spans'])).strip()
                lines.append((l['bbox'][1], l['bbox'][0], t, spans))
        lines.sort()
        for y, x, t, spans in lines:
            if 'UCLES' in t or re.match(r'Page \d+ of', t) or t.startswith(('A2 Key', 'Key and Key', 'Schools', 'Vocabulary List')):
                continue
            if t in ('Appendix 2', 'Topic Lists'):
                continue
            heading = x < 60 and all('Bold' in s['font'] for s in spans) and not POS.search(t)
            if heading:
                cur = {'en': t, 'items': []}
                topics.append(cur)
            elif cur:
                cur['items'].append(t)
    return topics


def main(pdf, dest):
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
