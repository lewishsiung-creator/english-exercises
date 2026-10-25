"""Read Cambridge's A2 Key vocabulary list PDF into words.json.

Usage: python -I extract.py a2key.pdf words.json

The list is two columns per page. A headword line starts at the column's left
edge (x ~43 or ~316): the word in regular weight, then its part of speech in
bold, sometimes a Br/Am note. Example lines are a bullet at +17 and the text at
+35; a long example wraps to another line at +35 with no bullet. Words added in
2025 sit under a green filled rectangle.
"""
import json
import re
import sys

import fitz

COLS = (43, 316)
GREEN = (0.0, 1.0, 0.0)


def col_of(x):
    return 0 if x < 250 else 1


def lines_of(page):
    out = []
    for b in page.get_text('dict')['blocks']:
        for l in b.get('lines', []):
            spans = [s for s in l['spans'] if s['text'].strip() or s['text'] == ' ']
            if not spans:
                continue
            x0, y0, x1, y1 = l['bbox']
            if y0 > 770:                      # footer
                continue
            if any(round(s['size']) >= 12 for s in spans):   # letter headings
                continue
            text = ''.join(s['text'] for s in spans)
            if not text.strip():
                continue
            out.append({'x': x0, 'y': y0, 'y1': y1, 'col': col_of(x0), 'spans': spans, 'text': text})
    # PyMuPDF sometimes splits one visual line; merge spans that share a baseline
    out.sort(key=lambda l: (l['col'], round(l['y']), l['x']))
    merged = []
    for l in out:
        if merged and merged[-1]['col'] == l['col'] and abs(merged[-1]['y'] - l['y']) < 3:
            merged[-1]['spans'] += l['spans']
            merged[-1]['text'] += l['text']
        else:
            merged.append(l)
    return merged


# Spaces the PDF puts inside words, seen in the 2025 list
SPLIT = {'j oined': 'joined', 'T hey': 'They', 'we ll': 'well'}


def clean(s):
    s = re.sub(r'\s+', ' ', s.replace('\xa0', ' ')).strip()
    for a, b in SPLIT.items():
        s = s.replace(a, b)
    return s


POS = re.compile(r"\((?:unc )?(?:n|v|adj|adv|prep|det|pron|conj|exclam|mv|av|phr v|prep phr|abbrev)\b[^)]*\)")


def split_head(t):
    m = POS.search(t)
    if not m:
        return t, '', ''
    rest = t[m.end():].strip()
    return t[:m.start()].strip(), m.group(0)[1:-1].strip(), rest


def main(pdf, dest):
    doc = fitz.open(pdf)
    entries = []
    cur = None                               # an entry's examples can run onto the next page
    for pn in range(3, 23):                  # alphabetical list: pages 4-23
        page = doc[pn]
        greens = [d['rect'] for d in page.get_drawings() if d.get('fill') == GREEN]
        if cur:
            cur['_lasty'] = None
        for l in lines_of(page):
            rel = l['x'] - COLS[l['col']]
            t = l['text']
            if t.strip().startswith('•') or (rel > 10 and t.strip() == '•'):
                body = clean(t.strip()[1:])
                cur['examples'].append(body)
                cur['_lasty'] = l['y']
                continue
            if rel > 25:                     # example text, after its bullet
                if cur['examples'] and cur['examples'][-1] == '':
                    cur['examples'][-1] = clean(t)
                elif cur['examples'] and ((cur.get('_lasty') and l['y'] - cur['_lasty'] < 14)
                                          or t.strip()[:1].islower() or t.strip()[:1] == '('):
                    # a wrapped example, possibly onto the next column or page
                    cur['examples'][-1] = clean(cur['examples'][-1] + ' ' + t)
                else:
                    cur['examples'].append(clean(t))
                cur['_lasty'] = l['y']
                continue
            # a headword line: the part of speech is the first bracket that starts
            # with a POS abbreviation, since words carry brackets too: blond(e), pound (£)
            if cur and cur['_open']:         # the last headword's bracket wrapped
                cur['note'] = clean(cur['note'] + ' ' + t)
                cur['_open'] = cur['note'].count('(') > cur['note'].count(')')
                continue
            word, pos, note = split_head(clean(t))
            cy = (l['y'] + l['y1']) / 2
            new = any(r.y0 - 1 <= cy <= r.y1 + 1 and r.x0 <= l['x'] + 5 for r in greens
                      if col_of(r.x0) == l['col'] and r.width > 20)
            cur = {'word': clean(word), 'pos': clean(pos), 'note': clean(note),
                   'examples': [], 'new': new, 'page': pn + 1,
                   '_open': note.count('(') > note.count(')')}
            entries.append(cur)
    for e in entries:
        e.pop('_lasty', None)
        e.pop('_open', None)
        e['examples'] = [x for x in e['examples'] if x]
    # the list prints 'coat (n)' twice, a few lines apart
    seen, out = set(), []
    for e in entries:
        k = (e['word'], e['pos'], tuple(e['examples']))
        if k not in seen:
            seen.add(k)
            out.append(e)
    entries = out
    json.dump(entries, open(dest, 'w'), ensure_ascii=False, indent=1)
    print(len(entries), 'entries,', sum(e['new'] for e in entries), 'new')


if __name__ == '__main__':
    main(*sys.argv[1:])
