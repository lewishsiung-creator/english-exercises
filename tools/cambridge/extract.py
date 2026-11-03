"""Read one of Cambridge's vocabulary list PDFs into <exam>/words.json.

Usage: python -I extract.py a2-key a2key.pdf      (exam names and page ranges: exams.py)

The A2 Key and B1 Preliminary lists share a layout: two columns per page. A
headword line starts at the column's left edge (x ~43/316 in A2 Key, ~61/324 in B1): the word in regular weight, then its part of speech in
bold, sometimes a Br/Am note. Example lines are a bullet at +17 and the text at
+35; a long example wraps to another line at +35 with no bullet. Words added in
2025 sit under a green filled rectangle.
"""
import json
import re
import sys
from pathlib import Path

import fitz

sys.path.insert(0, str(Path(__file__).parent))   # run with -I, which leaves this folder off the path
from exams import EXAMS  # noqa: E402

GREEN = (0.0, 1.0, 0.0)


def col_of(x):
    return 0 if x < (COLS[0] + COLS[1]) / 2 else 1


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


def clean(s):
    s = re.sub(r'\s+', ' ', s.replace('\xa0', ' ')).strip()
    for a, b in X['split'].items():
        s = s.replace(a, b)
    return s


POS = re.compile(r"\((?:unc )?(?:n|v|adj|adv|prep|det|pron|conj|exclam|mv|av|phr v|prep phr|phr|abbrev)\b[^)]*\)")


NOTE = re.compile(r'^(?:\s*\([^)]*(?:\)|$))+')     # (Br Eng) (Am Eng: cookie), possibly cut off at the line end


def heads_in(t):
    """Every 'word (pos) (notes)' on one line. Usually one; B1 Preliminary's PDF
    sometimes runs two together ("dinner (n) dinosaur") or ends a line on a word
    whose part of speech starts the next one."""
    out = []
    while t:
        m = POS.search(t)
        if not m:
            out.append((t, '', ''))
            break
        rest = t[m.end():].strip()
        n = NOTE.match(rest)
        if not n and rest and not rest[0].isalpha():   # suggest (v) + ing: a remark, not another word
            n = re.match(r'.*', rest)
        note = n.group(0).strip() if n else ''
        out.append((t[:m.start()].strip(), m.group(0)[1:-1].strip(), note))
        t = rest[n.end():].strip() if n else rest
    return out


# "Please leave comments below. common (adj)": a headword printed at the example
# indent, read as the end of the example above it. Cases without the full stop are
# listed by hand in exams.py ('leaked'), since "a book about animals (prep)" looks the same.
SWALLOWED = re.compile(r'^(.*[.?!])\s+([a-z][^.?!]*?)\s*(' + POS.pattern + r')\s*$')


def unswallow(entries):
    out = []
    for e in entries:
        while True:
            out.append(e)
            for j, x in enumerate(e['examples']):
                m = SWALLOWED.match(x)
                if m:
                    rest = e['examples'][j + 1:]
                    e['examples'] = e['examples'][:j] + [m.group(1)]
                    e = {'word': m.group(2).strip(), 'pos': m.group(3)[1:-1].strip(), 'note': '',
                         'examples': rest, 'new': False, 'page': e['page']}
                    break
            else:
                break
    return out


def main(exam, pdf):
    global X, COLS
    X = EXAMS[exam]
    COLS = X['cols']
    dest = Path(__file__).parent / exam / 'words.json'
    dest.parent.mkdir(exist_ok=True)
    doc = fitz.open(pdf)
    entries = []
    cur = None                               # an entry's examples can run onto the next page
    for pn in range(*X['pages']):            # the alphabetical list
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
            t = clean(t)
            m = re.match(POS.pattern, t)
            if cur and not cur['pos'] and m:   # "through" / "(prep)": the part of speech wrapped
                cur['pos'] = m.group(0)[1:-1].strip()
                t = t[m.end():].strip()
                if not t:
                    continue
            if cur and not POS.search(t) and re.search(r'[.!?]$', t):   # an example that lost its indent
                if t[0].islower() and cur['examples']:
                    cur['examples'][-1] += ' ' + t
                else:
                    cur['examples'].append(t)
                continue
            cy = (l['y'] + l['y1']) / 2
            new = any(r.y0 - 1 <= cy <= r.y1 + 1 and r.x0 <= l['x'] + 5 for r in greens
                      if col_of(r.x0) == l['col'] and r.width > 20)
            for word, pos, note in heads_in(t):
                cur = {'word': clean(word), 'pos': clean(pos), 'note': clean(note),
                       'examples': [], 'new': new, 'page': pn + 1,
                       '_open': note.count('(') > note.count(')')}
                entries.append(cur)
    for e in entries:
        e.pop('_lasty', None)
        e.pop('_open', None)
        e['examples'] = [x for x in e['examples'] if x]
    entries = unswallow(entries)
    out = []
    for e in entries:
        out.append(e)
        leak = X.get('leaked', {}).get(e['word'])
        if leak:
            for j, x in enumerate(e['examples']):
                if x.endswith(' ' + leak):
                    e['examples'][j] = x[:-len(leak)].strip()
                    word, pos, _ = heads_in(leak)[0]
                    out.append({'word': word, 'pos': pos, 'note': '', 'examples': [], 'new': False, 'page': e['page']})
    entries = out
    out = []
    for e in entries:
        k = (e['word'], e['pos'])
        if k in X.get('repair', {}):
            if X['repair'][k] is None:
                continue
            e.update(X['repair'][k])
        out.append(e)
    entries = out
    # A2 Key prints 'coat (n)' twice, a few lines apart
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
