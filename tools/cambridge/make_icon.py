#!/usr/bin/env python3
"""The home-screen icon for the Cambridge word lists (/cambridge/ and its three pages).

    python3 -m venv venv && venv/bin/pip install pillow
    venv/bin/python tools/cambridge/make_icon.py

Drawn with Pillow because this machine has no SVG rasteriser; the fonts are macOS
system fonts, so this runs on a Mac and the PNGs it writes are committed. The blue
is the pages' own button blue; "Vocab" is set in the serif the word lists use for
English.
"""

import os

from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'public', 'cambridge')

BLUE = (0, 113, 227)
WHITE = (255, 255, 255)
SOFT = (204, 226, 250)

SERIF = '/System/Library/Fonts/Supplemental/Charter.ttc'
SANS = '/System/Library/Fonts/HelveticaNeue.ttc'

SCALE = 4  # drawn large and reduced, which is what gives the edges antialiasing


def centred(draw, y, text, font, fill, width):
    l, t, r, b = draw.textbbox((0, 0), text, font=font)
    draw.text(((width - (r - l)) / 2 - l, y - t), text, font=font, fill=fill)
    return b - t


def icon(px, name):
    # No rounded corners: iOS and Android cut the mask themselves, and a corner
    # drawn here would show as a notch inside theirs.
    big = px * SCALE
    img = Image.new('RGB', (big, big), BLUE)
    d = ImageDraw.Draw(img)
    small = ImageFont.truetype(SANS, round(big * 0.125), index=10)     # Helvetica Neue Medium
    large = ImageFont.truetype(SERIF, round(big * 0.27), index=3)      # Charter Bold
    gap = big * 0.06
    h1 = d.textbbox((0, 0), 'Cambridge', font=small)
    h2 = d.textbbox((0, 0), 'Vocab', font=large)
    top = (big - ((h1[3] - h1[1]) + gap + (h2[3] - h2[1]))) / 2      # the two lines centred as one block
    centred(d, top, 'Cambridge', small, SOFT, big)
    centred(d, top + (h1[3] - h1[1]) + gap, 'Vocab', large, WHITE, big)
    img.resize((px, px), Image.LANCZOS).save(os.path.join(OUT, name), optimize=True)


if __name__ == '__main__':
    icon(180, 'icon-180.png')
    icon(192, 'icon-192.png')
    icon(512, 'icon-512.png')
