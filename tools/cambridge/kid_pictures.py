"""Fetch the Fluent Emoji pictures the young learners page uses.

    python3 -m venv venv && venv/bin/pip install pillow
    venv/bin/python tools/cambridge/kid_pictures.py

The young learners words carry an emoji each (young-learners/zh.json). On the page,
each one is shown as its picture from Microsoft's Fluent Emoji set — one 3D style,
the same on every device, so an older iPad never shows an empty box. The pictures
come from https://github.com/microsoft/fluentui-emoji (MIT licence; the notice is
copied next to them, as the licence asks). Only the pictures in use are fetched,
shrunk to 192 px (twice the largest size the page shows), saved as WebP (about 5 KB
each, a fifth of the PNG) and committed under
public/cambridge/young-learners/pics/. pics.json maps each emoji to its file.
"""
import io
import json
import re
import sys
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

from PIL import Image

HERE = Path(__file__).parent
OUT = HERE.parent.parent / 'public' / 'cambridge' / 'young-learners' / 'pics'
RAW = 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/'
SIZE = 192


def fetch(path):
    with urllib.request.urlopen(RAW + urllib.parse.quote(path)) as r:
        return r.read()


def norm(glyph):
    return glyph.replace('️', '')


def main():
    tree = json.load(urllib.request.urlopen('https://api.github.com/repos/microsoft/fluentui-emoji/git/trees/main?recursive=1'))
    paths = [x['path'] for x in tree['tree']]
    folders = sorted({p.rsplit('/', 1)[0] for p in paths if p.endswith('/metadata.json')})
    want = {norm(z['emoji']): z['emoji'] for z in json.load(open(HERE / 'young-learners' / 'zh.json')) if z['emoji']}
    # each folder's metadata names its glyph (1,600 small files, fetched in parallel)
    with ThreadPoolExecutor(24) as pool:
        metas = list(pool.map(lambda f: (f, json.loads(fetch(f + '/metadata.json'))), folders))
    found = {}
    for folder, meta in metas:
        g = norm(meta['glyph'])
        if g in want and g not in found:
            found[g] = (folder, meta['cldr'])
    missing = sorted(set(want) - set(found))
    OUT.mkdir(parents=True, exist_ok=True)
    pics = {}

    def one(item):
        g, (folder, cldr) = item
        # people come in skin tones; the 3D picture then sits under Default/
        png = next((p for p in paths if p.startswith(folder + '/3D/') and p.endswith('.png')), None) or \
            next((p for p in paths if p.startswith(folder + '/Default/3D/') and p.endswith('.png')), None)
        if not png:
            return g, None
        name = re.sub(r'[^a-z0-9]+', '-', cldr.lower()).strip('-')
        if not (OUT / f'{name}.webp').exists():         # already fetched on an earlier run
            img = Image.open(io.BytesIO(fetch(png))).convert('RGBA')
            img.thumbnail((SIZE, SIZE), Image.LANCZOS)
            img.save(OUT / f'{name}.webp', 'WEBP', quality=82, method=6)
        return g, name

    with ThreadPoolExecutor(12) as pool:
        for g, name in pool.map(one, sorted(found.items())):
            if name:
                pics[want[g]] = name
            else:
                missing.append(g)
    (OUT / 'LICENSE').write_bytes(fetch('LICENSE'))
    json.dump(pics, open(HERE / 'young-learners' / 'pics.json', 'w'), ensure_ascii=False, indent=0, sort_keys=True)
    print(f'\n{len(pics)} pictures -> {OUT}; no Fluent picture for: {" ".join(missing) or "none"}')


if __name__ == '__main__':
    sys.exit(main())
