"""Read 大考中心《高中英文參考詞彙表（111學年度起適用）》into words.json.

Usage: python3 extract.py ceec.pdf

The PDF (109 年 7 月版, https://www.ceec.edu.tw/xmdoc?xsmsid=0K213553204833715309)
lists the same ~6,000 entries twice: by level (book pages 1-52) and A-Z with the
level after each entry (pages 53-103). Plain text extraction is enough here --
one entry per line, unlike the Cambridge PDFs -- but a long entry wraps:

    advertise(ment)/ad
    v./(n.) 3

so lines are joined until one ends in a part of speech. Both listings are read
and compared, and the script stops if they disagree: two independent readings
of the same table are the check that nothing was dropped or misread.

Output, one object per entry in A-Z order:
    {"id", "w" (as printed), "pos" (as printed), "level"}
The PDF is not committed (© 大考中心基金會); this file and words.json are.
"""
import json
import re
import sys
from pathlib import Path

import pypdf

POS = r'(?:\(?[a-z]+\.\)?)(?:/\(?[a-z]+\.\)?)*'
A_TO_Z = re.compile(rf'^(?P<w>.+?)\s+(?P<pos>{POS})\s+(?P<level>[1-6])$')
BY_LEVEL = re.compile(rf'^(?P<w>.+?)\s+(?P<pos>{POS})$')
LEVELS = {'第一級': 1, '第二級': 2, '第三級': 3, '第四級': 4, '第五級': 5, '第六級': 6}
# The PDF's own slips, mended before parsing so the entry can be read at all.
TYPOS = {'calm v./adj./n 2': 'calm v./adj./n. 2', 'calm v./adj./n': 'calm v./adj./n.'}
# A headword the PDF itself breaks across a space, in both listings.
WORDS = {'sportsman/sportswoma n': 'sportsman/sportswoman'}
NOISE = re.compile(r'^(高中英文參考詞彙表|依字母排序.*|依級別排序.*|[A-Z]|\d+|第.級)$')


def pages(reader, first, last):
    """Lines of PDF pages first..last (1-based, inclusive), page furniture removed."""
    for i in range(first - 1, last):
        for line in reader.pages[i].extract_text().splitlines():
            line = re.sub(r'\s+', ' ', line).strip()
            line = TYPOS.get(line, line)
            if line:
                yield line


def joined(lines, pattern):
    """Join wrapped lines until the buffer matches an entry."""
    buf = ''
    for line in lines:
        if NOISE.match(line) and not buf:
            yield ('noise', line)
            continue
        # a line that wraps after a slash continues the same word or POS list
        buf = f'{buf}{line}' if buf.endswith('/') else f'{buf} {line}'.strip()
        m = pattern.match(buf)
        if m:
            yield ('entry', m)
            buf = ''
    if buf:
        raise SystemExit(f'unfinished entry at the end: {buf!r}')


def slug(w):
    s = re.sub(r'[^a-z0-9]+', '-', w.lower()).strip('-')
    return s or 'x'


def main(pdf):
    reader = pypdf.PdfReader(pdf)

    a_to_z = []
    for kind, m in joined(pages(reader, 65, 115), A_TO_Z):
        if kind == 'entry':
            a_to_z.append({'w': WORDS.get(m['w'], m['w']), 'pos': m['pos'], 'level': int(m['level'])})

    by_level, level = [], 0
    for kind, m in joined(level_lines(reader), BY_LEVEL):
        if kind == 'noise':
            for name, n in LEVELS.items():
                if m.endswith(name):
                    level = n
            continue
        by_level.append({'w': WORDS.get(m['w'], m['w']), 'pos': m['pos'], 'level': level})

    key = lambda e: (e['w'], e['pos'], e['level'])
    a, b = sorted(map(key, a_to_z)), sorted(map(key, by_level))
    if a != b:
        only_a = sorted(set(a) - set(b))[:20]
        only_b = sorted(set(b) - set(a))[:20]
        raise SystemExit(f'the two listings disagree\nA-Z only: {only_a}\nby level only: {only_b}')

    seen = {}
    for e in a_to_z:
        base = slug(e['w'])
        seen[base] = seen.get(base, 0) + 1
        e['id'] = base if seen[base] == 1 else f'{base}-{seen[base]}'

    out = Path(__file__).parent / 'words.json'
    out.write_text(json.dumps([{k: e[k] for k in ('id', 'w', 'pos', 'level')} for e in a_to_z],
                              ensure_ascii=False, indent=0) + '\n', encoding='utf-8')
    counts = {n: sum(e['level'] == n for e in a_to_z) for n in range(1, 7)}
    print(f'{len(a_to_z)} entries, both listings agree; by level {counts} -> {out}')


def level_lines(reader):
    """The by-level listing. A level starts at a 第N級 heading on its own line;
    the running head 「依級別排序 第N級」 is dropped, because it names the level a
    page ENDS in -- the page where 第三級 begins still carries 第二級's last words
    under a 第三級 running head."""
    for line in pages(reader, 13, 64):
        if line.startswith('依級別排序'):
            continue
        yield line


if __name__ == '__main__':
    main(sys.argv[1])
