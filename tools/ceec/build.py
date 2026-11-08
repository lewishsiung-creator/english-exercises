"""Build public/reading/vocab/words.js from 大考中心's list and the Chinese.

Usage: python3 build.py      (paths are relative to this file)

words.json  the list as extract.py read it: word, pos and level, as printed.
zh.json     the Chinese written for this page, keyed by id: `say` (what the
            speech engine reads), `senses` [[pos, 中文]] one per printed part
            of speech, and `ex` [english, 中譯] with the word in *asterisks*.

Only entries that have Chinese go into the page, so a level is added by adding
its ids to zh.json and running this again; the page shows the rest as 還沒進來.
"""
import json
import re
from pathlib import Path

HERE = Path(__file__).parent
OUT = HERE.parent.parent / 'public' / 'reading' / 'vocab' / 'words.js'


# Collocations, shared by both word pages and keyed by the headword as printed,
# lower-cased: tools/collocations/collocations.json, one entry per word a
# student meets on either page. Each is [collocation, 中文, example, 中譯].
COLLOC_FILE = Path(__file__).resolve().parents[1] / 'collocations' / 'collocations.json'


def collocations():
    if not COLLOC_FILE.exists():
        return {}
    data = json.loads(COLLOC_FILE.read_text(encoding='utf-8'))
    return {k: [[c['c'], c['zh'], c['ex'][0], c['ex'][1]] for c in v.get('collocs', [])] for k, v in data.items()}


def colloc_key(w):
    return re.sub(r'\s+', ' ', w.strip().lower())


def main():
    words = json.loads((HERE / 'words.json').read_text(encoding='utf-8'))
    zh = json.loads((HERE / 'zh.json').read_text(encoding='utf-8'))

    cols = collocations()
    rows, missing = [], []
    for e in words:
        z = zh.get(e['id'])
        if z is None:
            missing.append(e)
            continue
        pos = [p.strip('().') for p in e['pos'].split('/')]
        if [s[0] for s in z['senses']] != pos:
            raise SystemExit(f"{e['id']}: senses {z['senses']} do not follow pos {e['pos']}")
        rows.append([e['id'], e['w'], e['level'], z['say'], z['senses'], [z['ex']], cols.get(e['w'].strip()) or cols.get(colloc_key(e['w']), [])])

    stray = set(zh) - {e['id'] for e in words}
    if stray:
        raise SystemExit(f'ids in zh.json that are not in the list: {sorted(stray)[:10]}')

    lines = ',\n'.join(json.dumps(r, ensure_ascii=False) for r in rows)
    OUT.write_text(
        '/* 高中單字 — built by tools/ceec/build.py from 大考中心《高中英文參考詞彙表》\n'
        '   (111 學年度起適用, 109 年 7 月, © 大學入學考試中心基金會) and the Chinese in\n'
        '   tools/ceec/zh.json. Edit those, not this. */\n'
        f'const RAW = [\n{lines}\n];\n', encoding='utf-8')
    levels = sorted({r[2] for r in rows})
    print(f'{len(rows)} words (levels {levels}), {len(missing)} still without Chinese -> {OUT}')


if __name__ == '__main__':
    main()
