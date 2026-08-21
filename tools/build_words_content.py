#!/usr/bin/env python3
"""parse_kanghsuan_pdf.py output -> the `words` half of a grade in content.js.

Emits the JS for one grade's `books` array; paste or splice it into
public/junior-high-words/content.js. Kept separate from the parser so a
re-parse never silently rewrites a file that has been hand-edited since.
"""
import json
import re
import sys

BOOK_ZH = {'B1': ('第一冊', '七上'), 'B2': ('第二冊', '七下'),
           'B3': ('第三冊', '八上'), 'B4': ('第四冊', '八下'),
           'B5': ('第五冊', '九上'), 'B6': ('第六冊', '九下')}


def js(s):
    return "'" + str(s).replace('\\', '\\\\').replace("'", "\\'") + "'"


def main(path):
    lessons = json.load(open(path))
    books = []
    for les in lessons:
        bk, unit = les['code'].split()
        if not books or books[-1]['bk'] != bk:
            books.append({'bk': bk, 'lessons': []})
        books[-1]['lessons'].append((unit, les))

    out = []
    for b in books:
        label, term = BOOK_ZH[b['bk']]
        out.append(f"    {{\n      id: {js(b['bk'].lower())}, label: {js(label)}, term: {js(term)},")
        out.append('      lessons: [')
        for unit, les in b['lessons']:
            lid = f"{b['bk']}-{unit}".lower().replace(' ', '')
            out.append(f"        {{\n          id: {js(lid)}, code: {js(les['code'])},")
            out.append(f"          title: {js(les['title'])},")
            out.append(f"          grammar: {js(les['grammar'])},")
            out.append('          words: [')
            for w in les['words']:
                fields = [f"w: {js(w['word'])}"]
                if w['kk']:
                    fields.append(f"kk: {js(w['kk'])}")
                fields.append(f"pos: {js(w['pos'])}")
                fields.append(f"zh: {js(w['zh'])}")
                fields.append(f"en: {js(w['en'])}")
                fields.append(f"zhEx: {js(w['zhEx'])}")
                out.append('            { ' + ', '.join(fields) + ' },')
            out.append('          ],\n        },')
        out.append('      ],\n    },')
    return '\n'.join(out)


if __name__ == '__main__':
    print(main(sys.argv[1]))
