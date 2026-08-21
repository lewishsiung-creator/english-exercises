#!/usr/bin/env python3
"""康軒國中英語單字精熟講義 PDF -> lesson/word JSON.

The tables have fixed column x-positions, so rows are rebuilt from character
coordinates rather than from extracted text: a wrapped 中譯 cell and the
example beside it are otherwise impossible to tell apart.
"""
import json
import re
import sys

import pypdf

COLS = {52.91: 'n', 83.15: 'word', 207.87: 'kk',
        321.26: 'pos', 374.17: 'zh', 502.68: 'ex'}
HDR_X = (65.47, 60.47, 108.47)
CJK = re.compile(r'[　-鿿＀-￯]')
PUNCT = set('、。；：（）「」！？，…—－·')
NOSPACE = set('…')   # '……' is Latin-range but must never take a space


def chunks(page):
    """(y, x, text, seq) for every text run, in reading order."""
    out = []

    def visit(text, cm, tm, font, size):
        t = text.strip()
        if t:
            out.append((round(tm[5], 2), round(tm[4], 2), t, len(out)))
    page.extract_text(visitor_text=visit)
    return out


def lines(cells):
    """Group same-column cells into lines: top-to-bottom, reading order within."""
    out = []
    for y, _, t, seq in sorted(cells, key=lambda c: (c[0], c[3])):
        if out and abs(out[-1][0] - y) < 3:
            out[-1][1].append(t)
        else:
            out.append((y, [t]))
    return [parts for _, parts in out]


def glue(parts):
    """Join runs, restoring the space the PDF draws at a Latin/CJK boundary."""
    s = ''
    for p in parts:
        if s:
            a, b = s[-1], p[0]
            if a in NOSPACE or b in NOSPACE:
                pass
            elif ((not CJK.match(a) and CJK.match(b) and b not in PUNCT)
                    or (CJK.match(a) and a not in PUNCT and not CJK.match(b))):
                s += ' '
        s += p
    return s


def clean(s):
    # 'T oday' / 'T ake': kerned capitals come out of the PDF split in two.
    s = re.sub(r'\b([B-HJ-Z]) ([a-z])', r'\1\2', s)
    return re.sub(r'\s+', ' ', s).strip()


def parse(path):
    reader = pypdf.PdfReader(path)
    lessons, cur = [], None
    for page in reader.pages:
        cells = chunks(page)
        hdr = [c for c in cells if c[1] in HDR_X]
        code = next((c[2] for c in hdr if c[0] < 80), None)
        if code and re.match(r'^B\d (GR|L\d)$', code):
            cur = {
                'code': code,
                'title': next((c[2] for c in hdr if 95 < c[0] < 115), ''),
                'grammar': glue([c[2] for c in sorted(hdr, key=lambda c: c[3])
                                 if c[0] > 150 and c[1] == 108.47]),
                'words': [],
            }
            lessons.append(cur)
        if cur is None:
            continue

        table = [c for c in cells if c[1] in COLS]
        anchors = sorted([c for c in table if c[1] == 52.91 and c[2].isdigit()])
        for i, (ay, _, num, _) in enumerate(anchors):
            end = anchors[i + 1][0] if i + 1 < len(anchors) else float('inf')
            row = [c for c in table if ay - 3 <= c[0] < end - 3]
            col = {}
            for c in row:
                col.setdefault(COLS[c[1]], []).append(c)

            def get(key):
                return lines(col.get(key, []))

            en, zh_ex = [], []
            for ln in get('ex'):
                (zh_ex if (zh_ex or CJK.search(''.join(ln))) else en).append(ln)

            cur['words'].append({
                'n': int(num),
                'word': clean(' '.join(' '.join(l) for l in get('word'))),
                'kk': clean(' '.join(' '.join(l) for l in get('kk'))).strip('—'),
                'pos': ' '.join(' '.join(l) for l in get('pos')).replace('/ ', '/'),
                'zh': glue([p for l in get('zh') for p in l]),
                'en': clean(' '.join(' '.join(l) for l in en)),
                'zhEx': glue([p for l in zh_ex for p in l]),
            })
    return lessons


if __name__ == '__main__':
    data = parse(sys.argv[1])
    json.dump(data, sys.stdout, ensure_ascii=False, indent=1)
