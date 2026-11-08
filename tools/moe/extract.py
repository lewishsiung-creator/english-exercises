"""Read 教育部 108 課綱 英語文《參考字彙表（2,000 字）》into words.json.

Usage: python3 extract.py curriculum.pdf

The list is 附錄五 of 十二年國教課綱 語文領域-英語文 (國家教育研究院's 發布版 PDF,
book pages 54-67). It is two tables -- 表一 基本 1,200 字 and 表二 其他常用 800 字
-- each a run of comma-separated words under letter heads ("A- a/an, a few,
..."). There are no parts of speech.

Three things the text extraction gets wrong, all mended here:
  - a comma inside parentheses is not a separator: "be (am, is, are, ...)";
  - a word can wrap across a line, so lines are joined before splitting;
  - the PDF puts stray spaces inside some words ("blo use", "cart oon"). A
    space is closed up when the joined form is a dictionary word and one of
    the pieces is not -- so "hot dog" and "post office" keep theirs.
The PDF's titles say 1,200 and 800, but the tables as printed hold 1,211 and
794 items (can and could, Miss and miss, each count once); the script prints
both numbers and keeps every item.
"""
import json
import re
import sys
from pathlib import Path

import pypdf

DICT = {w.strip().lower() for w in open('/usr/share/dict/words', encoding='utf-8')}
# Joined forms the system dictionary does not know, checked against the PDF by eye.
ALSO = {'cellphone', 'campus', 'cartoon', 'blouse', 'smartphone', 'website', 'online', 'email'}
TABLES = (('表一', 'basic', 1200), ('表二', 'more', 800))


def text_of(pdf):
    reader = pypdf.PdfReader(pdf)
    out, on = [], False
    for page in reader.pages:
        t = page.extract_text()
        if '附錄五' in t and '表一' in t:
            on = True
        if not on:
            continue
        if '附錄六' in t:
            out.append(t.split('附錄六')[0])
            break
        out.append(t)
    return '\n'.join(out)


def split_items(run):
    """Split on commas that are not inside parentheses."""
    items, depth, cur = [], 0, ''
    for ch in run:
        if ch == '(':
            depth += 1
        elif ch == ')':
            depth -= 1
        if ch == ',' and depth == 0:
            items.append(cur)
            cur = ''
        else:
            cur += ch
    items.append(cur)
    return [re.sub(r'\s+', ' ', i).strip() for i in items if i.strip()]


def known(w):
    return w.lower() in DICT or w.lower() in ALSO


# A split the rule below cannot see, because both halves happen to be in the
# dictionary ("blo" is an old word for blue). Checked against the PDF by eye.
SPLITS = {'blo use': 'blouse'}


def mend(item):
    """Close up a stray space the PDF put inside a word."""
    item = SPLITS.get(item, item)
    item = re.sub(r'\s+-', '-', item)                # "soy -sauce"
    head = item.split(' (')[0]
    parts = head.split(' ')
    if len(parts) == 2 and not (known(parts[0]) and known(parts[1])) and known(parts[0] + parts[1]):
        return item.replace(head, parts[0] + parts[1], 1)
    return item


def slug(w):
    return re.sub(r'[^a-z0-9]+', '-', w.lower()).strip('-') or 'x'


def main(pdf):
    text = text_of(pdf)
    # drop page numbers and running heads: a line that is only digits
    text = '\n'.join(l for l in text.splitlines() if not re.fullmatch(r'\s*\d+\s*', l))
    t1 = text.index('表一')
    t2 = text.index('表二')
    t3 = text.index('表三')                       # 表三 regroups the same words by topic
    bodies = {'basic': text[t1:t2], 'more': text[t2:t3]}

    out, seen, mended = [], {}, []
    for _, key, want in TABLES:
        body = bodies[key].split('\n', 1)[1]           # drop the table's own title line
        body = re.sub(r'\s*\n\s*', ' ', body)          # one run of text
        # a letter head is "A- " -- the space matters, or "T-shirt" opens a T section.
        # An empty letter ("X-  Y- yard") is two heads in a row.
        sections = re.split(r'(?<![\w.])([A-Z])-\s+', body)
        words = []
        for i in range(1, len(sections), 2):
            for item in split_items(sections[i + 1]):
                fixed = mend(item)
                if fixed != item:
                    mended.append(f'{item!r} -> {fixed!r}')
                words.append(fixed)
        print(f'{key}: {len(words)} items (the PDF calls it {want})')
        for w in words:
            base = slug(w.split(' (')[0])
            seen[base] = seen.get(base, 0) + 1
            out.append({'id': base if seen[base] == 1 else f'{base}-{seen[base]}', 'w': w,
                        'set': key})

    dest = Path(__file__).parent / 'words.json'
    dest.write_text(json.dumps(out, ensure_ascii=False, indent=0) + '\n', encoding='utf-8')
    print(f'{len(out)} words -> {dest}')
    print('mended:', *mended, sep='\n  ')


if __name__ == '__main__':
    main(sys.argv[1])
