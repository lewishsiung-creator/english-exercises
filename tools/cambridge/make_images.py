#!/usr/bin/env python3
"""The home-screen icon and the link-preview cards for the Cambridge word lists.

    python3 -m venv venv && venv/bin/pip install pillow
    venv/bin/python tools/cambridge/make_images.py

The preview cards (og-*.png, 1200x630) are what LINE, Messenger and the like show
when one of the four pages is pasted into a chat. A static site cannot make one per
assignment, so a 本週指定學習單字 link shows its exam's card.

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
CJK = '/System/Library/Fonts/STHeiti Medium.ttc'
LOGO = os.path.join(OUT, '..', 'logo.png')

# one card per page: file, the big English title, the Chinese line under it, the small line
CARDS = [
    ('og-hub.png', 'Cambridge Vocab', 'Cambridge 官方單字表，每個字都有中文',
     'Starters · Movers · Flyers · A2 Key · B1 Preliminary'),
    ('og-young-learners.png', 'Starters · Movers · Flyers', '兒童英檢官方字表，共 1,407 個字',
     '點一下就唸給你聽，能畫成圖的字都有圖'),
    ('og-a2-key.png', 'A2 Key', 'KET 官方字表，共 1,727 個字',
     '每個字都有中文：單字表、主題、閃卡、測驗'),
    ('og-b1-preliminary.png', 'B1 Preliminary', 'PET 官方字表，共 3,121 個字',
     '每個字都有中文：單字表、主題、閃卡、測驗'),
]

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


def card(name, title, zh, small):
    w, h = 1200 * 2, 630 * 2
    img = Image.new('RGB', (w, h), BLUE)
    d = ImageDraw.Draw(img)
    left = 150
    if title != 'Cambridge Vocab':      # the hub's title already says it
        d.text((left, 150), 'Cambridge Vocab', font=ImageFont.truetype(SANS, 64, index=10), fill=SOFT)
    size = 210 if len(title) < 16 else 150
    d.text((left, 290), title, font=ImageFont.truetype(SERIF, size, index=3), fill=WHITE)
    d.text((left, 290 + size + 110), zh, font=ImageFont.truetype(CJK, 84), fill=WHITE)
    # an all-English line in the Latin face: the CJK face sets "·" with a wide gap after it
    latin = all(ord(c) < 0x2E80 for c in small)          # no Chinese in it
    small_font = ImageFont.truetype(SANS, 56, index=10) if latin else ImageFont.truetype(CJK, 56)
    d.text((left, 290 + size + 250), small, font=small_font, fill=SOFT)
    logo = Image.open(LOGO).convert('RGBA').resize((120, 120), Image.LANCZOS)
    img.paste(logo, (left, h - 230), logo)
    d.text((left + 150, h - 205), 'Lewis Biz English · lewistoeic.com', font=ImageFont.truetype(SANS, 52, index=10), fill=SOFT)
    img.resize((1200, 630), Image.LANCZOS).save(os.path.join(OUT, name), optimize=True)


if __name__ == '__main__':
    for c in CARDS:
        card(*c)
    icon(180, 'icon-180.png')
    icon(192, 'icon-192.png')
    icon(512, 'icon-512.png')
