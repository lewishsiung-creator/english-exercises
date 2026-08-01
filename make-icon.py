#!/usr/bin/env python3
"""Render public/apple-touch-icon.png (180x180) — the same gold star as the favicon.

No image library is available on this machine, and `qlmanage` letterboxes the
artwork into part of the canvas, so the PNG is rasterised and encoded here.
Opaque by design: iOS composites home-screen icons over black, so any
transparency would show up as black around the star.

    python3 make-icon.py
"""

import math
import struct
import zlib

SIZE = 180
SS = 3                      # supersampling factor, for antialiased edges

BG_TOP = (0xFF, 0xF8, 0xEF)
BG_BOT = (0xFF, 0xE6, 0xCC)
FILL = (0xF5, 0xA6, 0x23)
EDGE = (0xE0, 0x8A, 0x10)

CX, CY = 90.0, 92.0         # a star reads as centred when set slightly high
R_OUT, R_IN = 54.0, 24.5
EDGE_SCALE = 1.06           # outline drawn as a scaled copy behind the fill


def star(cx, cy, r_out, r_in, scale=1.0):
    """Ten alternating points, first point straight up."""
    pts = []
    for i in range(10):
        r = (r_out if i % 2 == 0 else r_in) * scale
        a = -math.pi / 2 + i * math.pi / 5
        pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    return pts


def inside(poly, x, y):
    hit = False
    n = len(poly)
    for i in range(n):
        x1, y1 = poly[i]
        x2, y2 = poly[(i + 1) % n]
        if (y1 > y) != (y2 > y):
            if x < x1 + (y - y1) / (y2 - y1) * (x2 - x1):
                hit = not hit
    return hit


def bounds(poly, pad=2):
    xs = [p[0] for p in poly]
    ys = [p[1] for p in poly]
    return (max(0, int(min(xs)) - pad), max(0, int(min(ys)) - pad),
            min(SIZE, int(max(xs)) + pad), min(SIZE, int(max(ys)) + pad))


fill_poly = star(CX, CY, R_OUT, R_IN)
edge_poly = star(CX, CY, R_OUT, R_IN, EDGE_SCALE)
x0, y0, x1, y1 = bounds(edge_poly)

rows = []
inv = 1.0 / (SS * SS)

for y in range(SIZE):
    # Background gradient: computed once per row, then overpainted by the star.
    t = y / (SIZE - 1)
    bg = tuple(round(BG_TOP[c] + (BG_BOT[c] - BG_TOP[c]) * t) for c in range(3))
    row = bytearray()
    for x in range(SIZE):
        if not (x0 <= x <= x1 and y0 <= y <= y1):
            row += bytes(bg) + b'\xff'
            continue
        # Coverage of this pixel by the fill and by the outline, supersampled.
        f = e = 0
        for sy in range(SS):
            py = y + (sy + 0.5) / SS
            for sx in range(SS):
                px = x + (sx + 0.5) / SS
                if inside(fill_poly, px, py):
                    f += 1
                elif inside(edge_poly, px, py):
                    e += 1
        if not f and not e:
            row += bytes(bg) + b'\xff'
            continue
        fc, ec = f * inv, e * inv
        px_rgb = tuple(
            round(FILL[c] * fc + EDGE[c] * ec + bg[c] * (1 - fc - ec))
            for c in range(3)
        )
        row += bytes(px_rgb) + b'\xff'
    rows.append(row)

raw = b''.join(b'\x00' + bytes(r) for r in rows)


def chunk(tag, body):
    return (struct.pack('>I', len(body)) + tag + body
            + struct.pack('>I', zlib.crc32(tag + body) & 0xFFFFFFFF))


png = (b'\x89PNG\r\n\x1a\n'
       + chunk(b'IHDR', struct.pack('>IIBBBBB', SIZE, SIZE, 8, 6, 0, 0, 0))
       + chunk(b'IDAT', zlib.compress(raw, 9))
       + chunk(b'IEND', b''))

with open('public/apple-touch-icon.png', 'wb') as fh:
    fh.write(png)

print(f'wrote public/apple-touch-icon.png  {SIZE}x{SIZE}  {len(png)} bytes')
