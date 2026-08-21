#!/usr/bin/env python3
"""路老師《國中英語文法精熟講義》PDF -> unit JSON.

    python3 tools/parse_grammar_pdf.py 文法講義.pdf > grammar.json

One unit per page, each laid out the same way:

    文法 1                        ← code      y<80,  x=65.47
    be 動詞 am / is / are          ← title     y≈108, x=65.47, 24pt
    對應課次 B1 GR、B1 L1          ← the 課次 this unit backs, y≈135
    核心規則   • bullet • bullet   ← section headings sit alone at x=45.35
    句型對照   label | English | 中文
    常見錯誤   錯誤寫法 | 正確寫法 | 為什麼
    一句話重點 …                   ← y≈835, label at x=64.47

Two things make this harder than it looks, and both are why the rows are
rebuilt from coordinates rather than from extracted text:

- A line's runs do not arrive in reading order. The bullet glyphs are drawn
  after the text they belong to, and pypdf reports the *line's* starting x for
  every run in one show-text operation, so several runs share an x. Sorting a
  line by (x, seq) puts it back: left-to-right between columns, original order
  within one.
- Table cells wrap. A row is only started by a line that has content in both
  the first and the last column — a wrapped cell continues the row above.
"""
import json
import re
import sys

import pypdf

CODE_X = 65.47          # code, title and 對應課次 all hang off the same margin
HEAD_X = 45.35          # 核心規則 / 句型對照 / 常見錯誤
BULLET_X = 52.39        # the • glyph
KEY_LABEL_X = 64.47     # 一句話重點
KEY_TEXT_X = 128.47

PATTERN_COLS = (52.91, 136.06, 415.75)      # 句型對照: label | English | 中文
MISTAKE_COLS = (52.91, 249.45, 445.98)      # 常見錯誤: 錯誤 | 正確 | 為什麼

CJK = re.compile(r'[　-鿿＀-￯]')
PUNCT = set('、。；：（）「」！？，…—－·')
NOSPACE = set('…')
SECTIONS = ('核心規則', '句型對照', '常見錯誤')


def chunks(page):
    out = []

    def visit(text, cm, tm, font, size):
        # Kept unstripped: a run often ends with the space before the next one
        # ('How many ' + '+' + ' 複數名詞'), and stripping it welds them together.
        # clean() collapses whatever is left over at the end.
        if text and text.strip():
            out.append({'y': round(tm[5], 2), 'x': round(tm[4], 2),
                        't': text, 'seq': len(out), 'fs': round(size, 1)})
    page.extract_text(visitor_text=visit)
    return out


def glue(parts):
    """Join runs, restoring the space the PDF draws at a Latin/CJK boundary."""
    s = ''
    for p in parts:
        if s and not s.endswith(' ') and not p.startswith(' '):
            a, b = s[-1], p[0]
            if a in NOSPACE or b in NOSPACE:
                pass
            elif ((not CJK.match(a) and CJK.match(b) and b not in PUNCT)
                    or (CJK.match(a) and a not in PUNCT and not CJK.match(b))):
                s += ' '
        s += p
    return s


def clean(s):
    # 'T aiwan': kerned capitals come out of the PDF split in two.
    s = re.sub(r'\b([B-HJ-Z]) ([a-z])', r'\1\2', s)
    return re.sub(r'\s+', ' ', s).strip()


def to_lines(cells, tol=3.0):
    """Group runs into visual lines; within a line, back into reading order."""
    out = []
    for c in sorted(cells, key=lambda c: c['y']):
        if out and abs(out[-1]['y'] - c['y']) < tol:
            out[-1]['cells'].append(c)
        else:
            out.append({'y': c['y'], 'cells': [c]})
    for line in out:
        line['cells'].sort(key=lambda c: (c['x'], c['seq']))
    return out


def col(line, x, tol=1.0):
    return [c['t'] for c in line['cells'] if abs(c['x'] - x) < tol]


def near(cells, x, tol=1.0):
    return [c for c in cells if abs(c['x'] - x) < tol]


def join_lines(lines):
    """Glue the runs of each line, then join the lines a wrapped cell spans.

    The join matters: an English sentence broken across two lines needs the
    space back (`Yes, you` + `are.`), while a wrapped Chinese cell must not
    gain one.
    """
    out = ''
    for line in lines:
        part = glue(line)
        if not part:
            continue
        if out and not out.endswith(' ') and not part.startswith(' ') \
                and not (CJK.search(out[-1]) or CJK.search(part[0])):
            out += ' '
        out += part
    return out


def table(region, cols):
    """Rows of a three-column table, joining cells that wrap onto a next line.

    A row is only started by a line carrying both the first and the last
    column; anything else continues the row above it.
    """
    rows = []
    for line in to_lines(region):
        first, last = col(line, cols[0]), col(line, cols[2])
        if first and last:
            rows.append([[], [], []])
        if not rows:
            continue                      # a header line before the first row
        for i, x in enumerate(cols):
            got = col(line, x)
            if got:
                rows[-1][i].append(got)
    return rows


def expand_refs(ref):
    """'單字主題 1、2' -> ['單字主題 1', '單字主題 2']; 'B1 GR、B1 L1' unchanged.

    Both the 目錄 line and the per-unit 對應 line drop the repeated prefix on
    everything after the first item, so both go through this before they are
    compared.
    """
    out = []
    for part in (p.strip() for p in ref.split('、')):
        if not part:
            continue
        if re.fullmatch(r'\d+', part) and out:
            out.append(re.sub(r'\d+$', '', out[-1]) + part)
        else:
            out.append(part)
    return out


def parse_unit(page):
    cells = chunks(page)
    unit = {}

    unit['code'] = glue([c['t'] for c in sorted(
        [c for c in near(cells, CODE_X) if c['y'] < 80], key=lambda c: c['seq'])])
    unit['title'] = clean(glue([c['t'] for c in sorted(
        [c for c in near(cells, CODE_X) if 100 < c['y'] < 120],
        key=lambda c: c['seq'])]))

    # 對應課次 — the 課次 of the word list this unit backs, so the two pages link.
    ref = glue([c['t'] for c in sorted(
        [c for c in near(cells, CODE_X) if 128 < c['y'] < 145],
        key=lambda c: c['seq'])])
    # 七年級寫「對應課次 B1 GR」，八年級寫「對應單字主題 單字主題 1」——
    # 兩本的欄位名稱不同，但指的都是單字頁的哪一課。
    unit['lessons'] = expand_refs(re.sub(r'^對應(課次|單字主題)\s*', '', ref))

    heads = {c['t'].strip(): c['y'] for c in near(cells, HEAD_X) if c['t'].strip() in SECTIONS}
    missing = [s for s in SECTIONS if s not in heads]
    if missing:
        raise SystemExit(f"{unit['code']}: missing section(s) {missing}")
    key_y = min((c['y'] for c in near(cells, KEY_LABEL_X)
                 if c['t'].strip() == '一句話重點'), default=None)
    if key_y is None:
        raise SystemExit(f"{unit['code']}: no 一句話重點")

    def region(start, end):
        return [c for c in cells if start + 4 < c['y'] < end - 4]

    # 核心規則 — one entry per • glyph; the text of a bullet may wrap.
    rules = []
    for line in to_lines(region(heads['核心規則'], heads['句型對照'])):
        parts = [c['t'] for c in line['cells']]
        if parts and parts[0].strip() == '•':
            rules.append([parts[1:]])
        elif rules:
            rules[-1].append(parts)          # a bullet wrapped onto a new line
    unit['rules'] = [clean(join_lines(r)) for r in rules]

    unit['patterns'] = [
        {'label': clean(join_lines(a)), 'en': clean(join_lines(b)),
         'zh': clean(join_lines(c))}
        for a, b, c in table(region(heads['句型對照'], heads['常見錯誤']),
                             PATTERN_COLS)]

    unit['mistakes'] = [
        {'bad': clean(join_lines(a)), 'good': clean(join_lines(b)),
         'why': clean(join_lines(c))}
        for a, b, c in table(region(heads['常見錯誤'], key_y), MISTAKE_COLS)]

    unit['key'] = clean(glue([c['t'] for c in sorted(
        near(cells, KEY_TEXT_X), key=lambda c: c['seq'])]))
    return unit


def parse_toc(page):
    """{code: [課次]} from the 目錄 — a checksum for the per-unit 對應課次."""
    out = {}
    for line in to_lines(chunks(page)):
        parts = [c['t'] for c in line['cells']]
        joined = glue(parts)
        m = re.match(r'^(文法 \d+)\s*(.*)$', joined)
        if m:
            out[m.group(1)] = m.group(2)
    return out


def parse(path):
    reader = pypdf.PdfReader(path)
    units = []
    for page in reader.pages:
        cs = chunks(page)
        top = [c for c in near(cs, CODE_X) if c['y'] < 80]
        if top and glue([c['t'] for c in sorted(top, key=lambda c: c['seq'])]
                        ).startswith('文法 '):
            units.append(parse_unit(page))

    toc = parse_toc(reader.pages[1])
    problems = []
    for u in units:
        if u['code'] not in toc:
            problems.append(f"{u['code']} is not in 目錄")
            continue
        # The 目錄 line is 'title + 對應', with no separator, so a substring
        # test on the expanded refs is the check that works for both books.
        listed = expand_refs(toc[u['code']])
        for lesson in u['lessons']:
            if not any(lesson in item for item in listed):
                problems.append(
                    f"{u['code']}: 對應 {lesson} is not in the 目錄 line "
                    f"{toc[u['code']]!r}")
        if not u['rules'] or not u['patterns'] or not u['mistakes'] or not u['key']:
            problems.append(f"{u['code']}: an empty section")
    if len(units) != len(toc):
        problems.append(f'目錄 lists {len(toc)} units, body has {len(units)}')
    if problems:
        raise SystemExit('目錄 and body disagree:\n  ' + '\n  '.join(problems))
    return units


if __name__ == '__main__':
    data = parse(sys.argv[1])
    print(json.dumps(data, ensure_ascii=False, indent=1))
    print(f'{len(data)} units — '
          f'{sum(len(u["rules"]) for u in data)} rules, '
          f'{sum(len(u["patterns"]) for u in data)} patterns, '
          f'{sum(len(u["mistakes"]) for u in data)} mistakes — 目錄 agrees',
          file=sys.stderr)
