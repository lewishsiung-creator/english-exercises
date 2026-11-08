"""Build public/learn/check/data.js: the question pools for 程度檢測.

Usage: python3 build_check.py      (paths are relative to this file)

Three bands, easiest first, each a pool the page draws 8 questions from:

  basic  教育部 表一 基本字                       tools/moe/
  more   教育部 表二 其他常用字                   tools/moe/
  hs     大考中心 第一、二級, minus 教育部's list   tools/ceec/

The 高中 band leaves out every word 教育部's list already has: a band that
repeats an easier one cannot tell the two levels apart. That leaves almost
nothing of 第一級 -- only 10 of its 1,002 words are not 國中 vocabulary -- so
第一級 and 第二級 are one band, and in practice it measures 第二級.

A question word must be a plain single word a student can read at a glance:
no capital (proper nouns, months), no slash or bracket, at least three letters.
Its option text is the first meaning of its first sense, cut at ；, so four
options are four short glosses and the right one is not given away by length.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'public' / 'learn' / 'check' / 'data.js'


def load(name):
    d = ROOT / 'tools' / name
    return (json.loads((d / 'words.json').read_text(encoding='utf-8')),
            json.loads((d / 'zh.json').read_text(encoding='utf-8')))


def plain(w):
    return re.fullmatch(r'[a-z][a-z-]{2,}', w) is not None


def heads(w):
    """Every form a printed headword stands for, lower-cased."""
    w = re.sub(r'\([^)]*\)', ' ', w.lower())
    return {p.strip() for p in re.split(r'[/,]', w) if p.strip()}


def gloss(z):
    first = z['senses'][0]
    meaning = re.split(r'[；;]', first[1])[0]
    meaning = re.sub(r'^[A-Za-z ]+\s', '', meaning).strip()   # "agreement 同意" -> "同意"
    return first[0], meaning


def item(w, z):
    pos, zh = gloss(z)
    return {'w': w, 'say': z['say'], 'pos': pos, 'zh': zh}


def main():
    moe_words, moe_zh = load('moe')
    ceec_words, ceec_zh = load('ceec')
    on_moe = set().union(*(heads(e['w']) for e in moe_words))

    bands = {'basic': [], 'more': [], 'hs': []}
    for e in moe_words:
        if plain(e['w']):
            bands[e['set']].append(item(e['w'], moe_zh[e['id']]))
    for e in ceec_words:
        if e['level'] > 2 or e['id'] not in ceec_zh or not plain(e['w']):
            continue
        if e['w'] in on_moe:
            continue
        bands['hs'].append(item(e['w'], ceec_zh[e['id']]))

    # one gloss per band is one option: two words sharing a gloss could both be "right"
    for k, items in bands.items():
        seen, kept = set(), []
        for it in items:
            if it['zh'] and it['zh'] not in seen:
                seen.add(it['zh'])
                kept.append(it)
        bands[k] = kept

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(
        '/* 程度檢測 question pools -- built by tools/learn/build_check.py from the\n'
        '   國中單字 and 高中單字 data. Edit those and rebuild, not this. */\n'
        f'const POOLS = {json.dumps(bands, ensure_ascii=False)};\n', encoding='utf-8')
    print({k: len(v) for k, v in bands.items()}, '->', OUT)


if __name__ == '__main__':
    main()
