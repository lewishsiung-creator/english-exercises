"""Build public/reading/junior-vocab/words.js from 教育部's list and the Chinese.

Usage: python3 build.py      (paths are relative to this file)

words.json  the list as extract.py read it: the word as printed and its table,
            "basic" (表一 基本字) or "more" (表二 其他常用字).
zh.json     this site's, keyed by id: `say` (what the speech engine reads),
            `senses` [[pos, 中文]] -- 1 to 3, most common first, chosen here
            because the list prints none -- and `ex` [english, 中譯] with the
            word in *asterisks*.
"""
import json
from pathlib import Path

HERE = Path(__file__).parent
OUT = HERE.parent.parent / 'public' / 'reading' / 'junior-vocab' / 'words.js'
LEVEL = {'basic': 1, 'more': 2}


def main():
    words = json.loads((HERE / 'words.json').read_text(encoding='utf-8'))
    zh = json.loads((HERE / 'zh.json').read_text(encoding='utf-8'))

    missing = [e['id'] for e in words if e['id'] not in zh]
    if missing:
        raise SystemExit(f'{len(missing)} words have no Chinese yet, e.g. {missing[:8]}')
    stray = set(zh) - {e['id'] for e in words}
    if stray:
        raise SystemExit(f'ids in zh.json that are not in the list: {sorted(stray)[:10]}')

    rows = [[e['id'], e['w'], LEVEL[e['set']], zh[e['id']]['say'], zh[e['id']]['senses'], [zh[e['id']]['ex']]]
            for e in words]
    lines = ',\n'.join(json.dumps(r, ensure_ascii=False) for r in rows)
    OUT.write_text(
        '/* 國中單字 — built by tools/moe/build.py from 教育部 108 課綱《英語文參考字彙表》\n'
        '   (2,000 字, 附錄五) and the Chinese in tools/moe/zh.json. Edit those, not this. */\n'
        f'const RAW = [\n{lines}\n];\n', encoding='utf-8')
    print(f'{len(rows)} words -> {OUT}')


if __name__ == '__main__':
    main()
