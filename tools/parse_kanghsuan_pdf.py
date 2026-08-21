#!/usr/bin/env python3
"""路老師《國中英語單字精熟講義》PDF -> lesson/word JSON.

    python3 tools/parse_kanghsuan_pdf.py 講義.pdf > words.json

The tables have fixed column x-positions, so rows are rebuilt from character
coordinates rather than from extracted text: a wrapped 中譯 cell and the
example sentence beside it land on the same line, and once the page is
flattened to a string there is nothing left to tell them apart.

Two layouts exist so far and more are likely, so the six columns are found by
clustering x-positions rather than hard-coded — the 七年級 book sets the word
column at x=83 and the 八年級 one at the same place but pushes 中譯 from 374 to
404 to fit `go (went, gone)`. The order of the columns is what identifies
them, not their absolute positions.

The 目錄 page is parsed too, for two reasons: it carries the 冊/主軸 grouping,
which the body pages do not, and its per-lesson word counts are a checksum. A
mismatch raises rather than being reported, because a silently short lesson is
the failure that would survive review.
"""
import json
import re
import sys

import pypdf

HDR_CODE_X = 65.47      # 「B1 L1」/「主題 1」 at the top of a lesson's first page
HDR_TITLE_X = 65.47     # the lesson title, one line below it
HDR_GRAM_X = 108.47     # the 文法重點 value
TOC_CODE_X = 52.91      # 目錄: the lesson code
TOC_TITLE_X = 128.50    # 目錄: the title, and — alone on its line — a group heading

CJK = re.compile(r'[　-鿿＀-￯]')
PUNCT = set('、。；：（）「」！？，…—－·')
NOSPACE = set('…')      # '……' is Latin-range but must never take a space
CODE = re.compile(r'^(B\d (?:GR|L\d+)|主題 \d+)$')

# A handful of rows in the 八年級 book emit one text run that spans the cell
# boundary, so the example sentence arrives glued to the tail of the 中譯:
#   '…… Call me as soon as you arrive.'   at the 中譯 column's x
# Every one seen so far is a 中譯 ending in '……', which is what pushes the run
# past the cell edge. Split it back off — but only when the example column came
# up empty, so a row that parsed normally can never be damaged by this.
SPILL = re.compile(r'^(?P<zh>.*[^\x00-\x7F])\s+(?P<en>[A-Z][^　-鿿]*[.!?])$')


def chunks(page):
    """(y, x, text, seq) for every text run. y grows downward; seq is read order."""
    out = []

    def visit(text, cm, tm, font, size):
        t = text.strip()
        if t:
            out.append((round(tm[5], 2), round(tm[4], 2), t, len(out)))
    page.extract_text(visitor_text=visit)
    return out


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


def lines(cells):
    """Group cells of one column into lines: top-to-bottom, read order within."""
    out = []
    for y, _, t, seq in sorted(cells, key=lambda c: (c[0], c[3])):
        if out and abs(out[-1][0] - y) < 3:
            out[-1][1].append(t)
        else:
            out.append((y, [t]))
    return [parts for _, parts in out]


def at(cells, x, tol=0.5):
    return [c for c in cells if abs(c[1] - x) < tol]


def find_columns(reader):
    """The six table columns, in left-to-right order, by how often they are used."""
    counts = {}
    for page in reader.pages[2:]:
        for _, x, _, _ in chunks(page):
            counts[x] = counts.get(x, 0) + 1
    top = sorted(counts.items(), key=lambda kv: -kv[1])[:6]
    xs = sorted(x for x, _ in top)
    if len(xs) != 6:
        raise SystemExit(f'expected six table columns, found {len(xs)}: {xs}')
    return dict(zip(xs, ('n', 'word', 'kk', 'pos', 'zh', 'ex')))


def parse_toc(page):
    """[{heading, lessons: [(code, title, count)]}] from the 目錄 page.

    A group heading is a title with no code beside it on the same line; every
    line after it belongs to that group until the next heading.
    """
    cells = chunks(page)
    rows = {}
    for y, x, t, seq in cells:
        key = round(y / 3)          # code and title sit ~0.3pt apart vertically
        for k in (key - 1, key, key + 1):
            if k in rows:
                key = k
                break
        rows.setdefault(key, []).append((y, x, t, seq))

    books, count_re = [], re.compile(r'^\d+$')
    for key in sorted(rows):
        row = rows[key]
        code = glue([t for _, _, t, _ in sorted(at(row, TOC_CODE_X), key=lambda c: c[3])])
        title = glue([t for _, _, t, _ in sorted(at(row, TOC_TITLE_X), key=lambda c: c[3])])
        if not title or title == '目錄':
            continue
        if not code:
            books.append({'heading': title, 'lessons': []})
            continue
        nums = [t for _, x, t, _ in row if x > 600 and count_re.match(t)]
        if not books:
            raise SystemExit(f'目錄: lesson {code} appears before any group heading')
        books[-1]['lessons'].append((code, title, int(nums[0]) if nums else None))
    return books


def parse_body(reader, cols):
    lessons, cur = [], None
    for page in reader.pages:
        cells = chunks(page)

        hdr = [c for c in cells if c[1] in (HDR_CODE_X, HDR_GRAM_X, 60.47)]
        top = sorted([c for c in hdr if c[0] < 80 and c[1] == HDR_CODE_X],
                     key=lambda c: c[3])
        code = glue([t for _, _, t, _ in top])
        if CODE.match(code):
            title = glue([t for _, _, t, _ in
                          sorted([c for c in hdr if 95 < c[0] < 115
                                  and c[1] == HDR_TITLE_X], key=lambda c: c[3])])
            gram = glue([t for _, _, t, _ in
                         sorted([c for c in hdr if c[0] > 150
                                 and c[1] == HDR_GRAM_X], key=lambda c: c[3])])
            cur = {'code': code, 'title': title, 'grammar': gram, 'words': []}
            lessons.append(cur)
        if cur is None:
            continue

        table = [c for c in cells if c[1] in cols]
        num_x = min(cols)
        anchors = sorted(c for c in table if c[1] == num_x and c[2].isdigit())
        for i, (ay, _, num, _) in enumerate(anchors):
            end = anchors[i + 1][0] if i + 1 < len(anchors) else float('inf')
            row = [c for c in table if ay - 3 <= c[0] < end - 3]
            col = {}
            for c in row:
                col.setdefault(cols[c[1]], []).append(c)

            def get(key):
                return lines(col.get(key, []))

            en, zh_ex = [], []
            for ln in get('ex'):
                (zh_ex if (zh_ex or CJK.search(''.join(ln))) else en).append(ln)

            zh = glue([p for l in get('zh') for p in l])
            en_text = clean(' '.join(' '.join(l) for l in en))
            if not en_text:
                spill = SPILL.match(zh)
                if spill:
                    zh, en_text = spill.group('zh'), spill.group('en')

            word = {
                'n': int(num),
                'w': clean(' '.join(' '.join(l) for l in get('word'))),
                'kk': clean(' '.join(' '.join(l) for l in get('kk'))).strip('—'),
                'pos': ' '.join(' '.join(l) for l in get('pos')).replace('/ ', '/'),
                'zh': zh,
                'en': en_text,
                'zhEx': glue([p for l in zh_ex for p in l]),
            }
            if not word['kk']:
                del word['kk']      # a phrase has no 音標; absence is the flag
            cur['words'].append(word)
    return lessons


def parse(path):
    reader = pypdf.PdfReader(path)
    cols = find_columns(reader)
    toc = parse_toc(reader.pages[1])
    body = {l['code']: l for l in parse_body(reader, cols)}

    problems, books = [], []
    for group in toc:
        out = {'heading': group['heading'], 'lessons': []}
        for code, title, count in group['lessons']:
            got = body.pop(code, None)
            if got is None:
                problems.append(f'{code} 「{title}」 is in 目錄 but not in the body')
                continue
            if count is not None and len(got['words']) != count:
                problems.append(
                    f'{code}: 目錄 says {count} words, body has {len(got["words"])}')
            out['lessons'].append(got)
        books.append(out)
    for code in body:
        problems.append(f'{code} is in the body but not in 目錄')
    if problems:
        raise SystemExit('目錄 and body disagree:\n  ' + '\n  '.join(problems))
    return books


if __name__ == '__main__':
    data = parse(sys.argv[1])
    total = sum(len(l['words']) for b in data for l in b['lessons'])
    print(json.dumps(data, ensure_ascii=False, indent=1))
    print(f'{total} words in {sum(len(b["lessons"]) for b in data)} lessons, '
          f'{len(data)} groups — 目錄 agrees', file=sys.stderr)
