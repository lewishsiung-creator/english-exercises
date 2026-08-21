#!/usr/bin/env python3
"""parse_kanghsuan_pdf.py output -> the `books` array for one grade in content.js.

    python3 tools/build_words_content.py words.json

Prints the JS to splice into that grade in public/junior-high-words/content.js,
where `ready` also has to flip to true. Kept separate from the parser so that a
re-parse can never quietly rewrite a file that has been hand-corrected since.
"""
import json
import re
import sys

# 目錄 headings seen so far: 「第一冊（七上）」 splits on the bracket, and
# 「八上文法主軸」 splits after the term. Anything else becomes its own label
# with no term rather than being guessed at.
BRACKET = re.compile(r'^(.+?)（(.+?)）$')
TERM = re.compile(r'^([七八九][上下])(.*)$')


def split_heading(heading):
    m = BRACKET.match(heading)
    if m:
        return m.group(1), m.group(2)
    m = TERM.match(heading)
    if m:
        return m.group(1), m.group(2)
    return heading, ''


def book_id(heading, i):
    m = BRACKET.match(heading)
    if m and re.match(r'^第[一二三四五六]冊$', m.group(1)):
        return 'b' + str('一二三四五六'.index(m.group(1)[1]) + 1)
    m = TERM.match(heading)
    if m:
        year = '七八九'.index(m.group(1)[0]) + 7
        return f'g{year}{"ab"["上下".index(m.group(1)[1])]}'
    return f'g{i + 1}'


def lesson_id(code):
    m = re.match(r'^主題 (\d+)$', code)
    if m:
        return 't' + m.group(1)
    return code.lower().replace(' ', '-')


def js(s):
    return "'" + str(s).replace('\\', '\\\\').replace("'", "\\'") + "'"


def main(path):
    books = json.load(open(path))
    out = []
    for i, book in enumerate(books):
        label, term = split_heading(book['heading'])
        out.append(f"    {{\n      id: {js(book_id(book['heading'], i))}, "
                   f"label: {js(label)}, term: {js(term)},")
        out.append('      lessons: [')
        for les in book['lessons']:
            out.append(f"        {{\n          id: {js(lesson_id(les['code']))}, "
                       f"code: {js(les['code'])},")
            out.append(f"          title: {js(les['title'])},")
            out.append(f"          grammar: {js(les['grammar'])},")
            out.append('          words: [')
            for w in les['words']:
                fields = [f"w: {js(w['w'])}"]
                if w.get('kk'):
                    fields.append(f"kk: {js(w['kk'])}")
                for k in ('pos', 'zh', 'en', 'zhEx'):
                    fields.append(f"{k}: {js(w[k])}")
                out.append('            { ' + ', '.join(fields) + ' },')
            out.append('          ],\n        },')
        out.append('      ],\n    },')
    return '\n'.join(out)


if __name__ == '__main__':
    print(main(sys.argv[1]))
