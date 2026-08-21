#!/usr/bin/env python3
"""parse_grammar_pdf.py output -> the `units` array for one grade in content.js.

    python3 tools/build_grammar_content.py grammar.json

Prints the JS to splice into that grade in
public/junior-high-grammar/content.js, where `ready` also has to flip to true.
Kept separate from the parser so that a re-parse can never quietly rewrite a
file that has been hand-corrected since.
"""
import json
import re
import sys


def js(s):
    return "'" + str(s).replace('\\', '\\\\').replace("'", "\\'") + "'"


def unit_id(code):
    m = re.match(r'^文法 (\d+)$', code)
    if not m:
        raise SystemExit(f'unexpected unit code {code!r}')
    return 'u' + m.group(1)


def main(path):
    units = json.load(open(path))
    out = []
    for u in units:
        out.append(f"      {{\n        id: {js(unit_id(u['code']))}, "
                   f"code: {js(u['code'])},")
        out.append(f"        title: {js(u['title'])},")
        out.append('        lessons: [' + ', '.join(js(l) for l in u['lessons']) + '],')
        out.append(f"        key: {js(u['key'])},")

        out.append('        rules: [')
        for r in u['rules']:
            out.append(f'          {js(r)},')
        out.append('        ],')

        out.append('        patterns: [')
        for p in u['patterns']:
            out.append('          { ' + ', '.join(
                f'{k}: {js(p[k])}' for k in ('label', 'en', 'zh')) + ' },')
        out.append('        ],')

        out.append('        mistakes: [')
        for m in u['mistakes']:
            out.append('          { ' + ', '.join(
                f'{k}: {js(m[k])}' for k in ('bad', 'good', 'why')) + ' },')
        out.append('        ],')
        out.append('      },')
    return '\n'.join(out)


if __name__ == '__main__':
    print(main(sys.argv[1]))
