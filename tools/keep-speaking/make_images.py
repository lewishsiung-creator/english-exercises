#!/usr/bin/env python3
"""The share preview and home-screen icons for /keep-speaking/.

    python3 -m venv venv && venv/bin/pip install pillow
    venv/bin/python tools/keep-speaking/make_images.py

Drawn with Pillow rather than exported from an SVG because this machine has no
SVG rasteriser. The fonts are macOS system fonts, so this only runs on a Mac;
the PNGs it writes are committed.
"""

import os

from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'public', 'keep-speaking')

NAVY = (28, 43, 74)
AMBER = (242, 181, 68)
PAPER = (247, 245, 240)
SOFT = (188, 196, 212)

SERIF = '/System/Library/Fonts/Supplemental/Georgia Bold.ttf'
CJK = '/System/Library/Fonts/STHeiti Medium.ttc'

SCALE = 4  # drawn large and reduced, which is what gives the edges antialiasing


def bubble(draw, x, y, size):
    """The favicon's speech bubble: a box with a tail at the lower left."""
    u = size / 36
    draw.polygon([
        (x, y), (x + 36 * u, y), (x + 36 * u, y + 22 * u), (x + 16 * u, y + 22 * u),
        (x + 7 * u, y + 30 * u), (x + 7 * u, y + 22 * u), (x, y + 22 * u),
    ], fill=AMBER)


def icon(px, name):
    # No rounded corners: iOS and Android cut the mask themselves, and a corner
    # drawn here would show as a notch inside theirs.
    big = px * SCALE
    img = Image.new('RGB', (big, big), NAVY)
    size = big * 0.56
    bubble(ImageDraw.Draw(img), (big - size) / 2, big * 0.27, size)
    img.resize((px, px), Image.LANCZOS).save(os.path.join(OUT, name), optimize=True)


def card():
    w, h = 1200 * 2, 630 * 2
    img = Image.new('RGB', (w, h), NAVY)
    d = ImageDraw.Draw(img)
    left = 150
    bubble(d, left, 170, 150)
    d.text((left, 390), 'Keep Speaking', font=ImageFont.truetype(SERIF, 190), fill=PAPER)
    d.text((left, 640), '繼續開口', font=ImageFont.truetype(CJK, 96), fill=AMBER)
    d.text((left, 830), '你的英文不需要完美。', font=ImageFont.truetype(CJK, 68), fill=PAPER)
    d.text((left, 930), '需要的是繼續開口。', font=ImageFont.truetype(CJK, 68), fill=PAPER)
    d.text((left, 1090), '跨文化溝通課程 · 學員練習', font=ImageFont.truetype(CJK, 44), fill=SOFT)
    img.resize((1200, 630), Image.LANCZOS).save(os.path.join(OUT, 'og.png'), optimize=True)


if __name__ == '__main__':
    icon(180, 'icon-180.png')
    icon(192, 'icon-192.png')
    icon(512, 'icon-512.png')
    card()
