"""Propose prefix/suffix pairs for the two word pages (2026-11-11).

Reads public/reading/vocab/words.js (高中) and public/reading/junior-vocab/words.js
(國中), and for every word on a page looks for a base word, in either list,
that the word is built from by one affix: unhappy = un- + happy,
agreement = agree + -ment. A pair is only a CANDIDATE: string rules also find
uncle = un- + cle (no: "cle" is not a word, so it never shows) and
repair = re- + pair (a real word, a wrong pair). Every candidate was read by
hand; the wrong ones are listed in review.json's "no", and build.py leaves them
out. Run this again after the lists change and read what is new.

  python3 tools/affix/candidates.py > /tmp/cands.txt
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PAGES = {'hs': ROOT / 'public/reading/vocab/words.js', 'jh': ROOT / 'public/reading/junior-vocab/words.js'}


def rows(path):
    out = []
    for line in path.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if line.startswith('["'):
            out.append(json.loads(line.rstrip(',')))
    return out


def forms(w):
    """The single words an entry stands for: agree(ment) is agree and agreement."""
    out = set()
    for part in w.split('/'):
        part = part.strip().lower()
        m = re.fullmatch(r"([a-z-]+)\(([a-z]+)\)", part)
        if m:
            a, b = m.groups()
            out.add(a)
            out.add(b if len(b) > 4 and b[:2] == a[:2] else a + b)   # argue(argument) vs agree(ment)
            continue
        part = re.sub(r"\s*\(.*\)", '', part)
        if re.fullmatch(r"[a-z]+", part):
            out.add(part)
    return out


def doubled(stem):
    return len(stem) > 2 and stem[-1] == stem[-2] and stem[-1] not in 'aeiouslz'


# Each suffix: the bases a word might come from. A base must be a word on a list.
def suf(end, *rules):
    def f(d):
        if not d.endswith(end) or len(d) - len(end) < 2:
            return []
        s = d[: -len(end)]
        out = []
        for r in rules:
            if r == '':
                out.append(s)
            elif r == 'e':
                out.append(s + 'e')
            elif r == 'y':
                if s.endswith('i'):
                    out.append(s[:-1] + 'y')
            elif r == 'dbl':
                if doubled(s):
                    out.append(s[:-1])
            elif r == 'le':
                if s.endswith('bil'):
                    out.append(s[:-3] + 'ble')
            elif r == 'ble':                       # simply <- simple
                out.append(s + 'le')
            elif r == 't':
                out.append(s + 't')
            elif r == 'de':
                out.append(s + 'de')
            elif r == 'ous':
                if s.endswith('os'):
                    out.append(s[:-2] + 'ous')
            elif r == 'ic':                        # basically <- basic
                if s.endswith('al'):
                    out.append(s[:-2])
            elif r == 'o':
                out.append(s + 'o')
        return out
    return f


SUFFIXES = {
    # nouns
    '-er': suf('er', '', 'e', 'dbl', 'y'),
    '-or': suf('or', '', 'e'),
    '-ist': suf('ist', '', 'e', 'y', 'o'),
    '-ian': suf('ian', '', 'y', 'e'),
    '-ee': suf('ee', '', 'e'),
    '-ness': suf('ness', '', 'y'),
    '-ment': suf('ment', '', 'e'),
    '-tion': lambda d: (suf('ation', '', 'e')(d) + suf('ition', '', 'e')(d) + suf('tion', 'e', 't')(d)
                        + suf('ion', '', 'e')(d) + suf('sion', 'de', 'd', 'e', 't')(d) + suf('ssion', 't')(d)),
    '-ity': lambda d: suf('ity', '', 'e', 'le')(d) + suf('ity', 'ous')(d),
    '-ance': lambda d: suf('ance', '', 'e', 't', 'y')(d) + suf('ence', '', 'e', 't')(d)
                       + suf('ancy', 't')(d) + suf('ency', 't')(d),
    '-ship': suf('ship', ''),
    '-hood': suf('hood', '', 'y'),
    '-dom': suf('dom', '', 'e'),
    '-ism': suf('ism', '', 'e'),
    '-al_n': suf('al', '', 'e'),
    '-age': suf('age', '', 'e', 'y'),
    '-ure': suf('ure', '', 'e'),
    # adjectives
    '-ful': suf('ful', '', 'y'),
    '-less': suf('less', '', 'y'),
    '-able': lambda d: suf('able', '', 'e', 'dbl', 'y')(d) + suf('ible', '', 'e')(d),
    '-ous': suf('ous', '', 'e', 'y'),
    '-ive': lambda d: suf('ive', '', 'e')(d) + suf('ative', '', 'e')(d) + suf('sive', 'de', 'd')(d),
    '-ic': suf('ic', '', 'e', 'y'),
    '-y': suf('y', '', 'e', 'dbl'),
    '-ly_adj': suf('ly', ''),
    '-ish': suf('ish', '', 'e', 'dbl'),
    '-ary': suf('ary', '', 'e'),
    '-ent': lambda d: suf('ent', '', 'e')(d) + suf('ant', '', 'e')(d),
    # verbs
    '-ize': suf('ize', '', 'e', 'y'),
    '-en': suf('en', '', 'e', 'dbl'),
    '-ify': suf('ify', '', 'e', 'y'),
    # adverbs
    '-ly': lambda d: suf('ly', '', 'y', 'ble', 'ic')(d) + (([d[:-1] + 'e']) if d.endswith('ly') and d[-3:-2] == 'l' else []),
    '-ward': suf('ward', '') if False else (lambda d: suf('wards', '')(d) + suf('ward', '')(d)),
}

PREFIXES = {
    'un-': ['un'], 're-': ['re'], 'dis-': ['dis'], 'in-': ['in', 'im', 'il', 'ir'], 'mis-': ['mis'],
    'pre-': ['pre'], 'over-': ['over'], 'under-': ['under'], 'out-': ['out'], 'inter-': ['inter'],
    'non-': ['non'], 'sub-': ['sub'], 'super-': ['super'], 'trans-': ['trans'], 'anti-': ['anti'],
    'multi-': ['multi'], 'semi-': ['semi'], 'co-': ['co'], 'en-': ['en', 'em'], 'fore-': ['fore'],
    'bi-': ['bi'], 'tele-': ['tele'], 'mid-': ['mid'], 'de-': ['de'], 'auto-': ['auto'], 'ex-': ['ex'],
    'up-': ['up'], 'post-': ['post'], 'micro-': ['micro'], 'self-': ['self'],
}


def main():
    data = {k: rows(p) for k, p in PAGES.items()}
    lex = set()
    for rs in data.values():
        for r in rs:
            lex |= forms(r[1])
    found = {}
    for page, rs in data.items():
        for r in rs:
            eid, w = r[0], r[1]
            fs = forms(w)
            for d in sorted(fs):
                for name, rule in SUFFIXES.items():
                    for b in dict.fromkeys(rule(d)):
                        # agree(ment) counts too: its base is one of its own forms
                        if b in lex and b != d and len(b) >= 2:
                            found.setdefault((page, name), []).append((eid, b, d))
                for name, ps in PREFIXES.items():
                    for p in ps:
                        b = d[len(p):].lstrip('-')
                        if d.startswith(p) and len(b) >= 3 and b in lex and b != d:
                            found.setdefault((page, name), []).append((eid, b, d))
    out = {f'{p}|{a}': sorted(set(v)) for (p, a), v in found.items()}
    json.dump(out, sys.stdout, ensure_ascii=False, indent=0)


if __name__ == '__main__':
    main()
