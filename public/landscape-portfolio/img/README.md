# Pictures

Every picture on the portfolio is named in `../content.js`, in each part's
`images` list. Save a file here with exactly that name and it appears on the
page — there is nothing else to change. Until a file is here, the page draws a
labelled placeholder saying which one it is waiting for, so a half-finished
portfolio still reads as a portfolio.

The page currently shows the worked example — the Awaji Yumebutai study — which
uses sixteen pictures of two kinds.

## Photographs (4) — not ours

`yumebutai-view.jpg` · `hyakudan-en-view.jpg` · `kai-no-hama-view.jpg` ·
`yumebutai-stairs.jpg`

From Wikimedia Commons, all four by **663highland** under **CC BY 2.5**. See
[CREDITS.md](CREDITS.md) for the originals, the licence and what was changed.
Attribution appears on the page under each photograph and again in the lightbox,
which is where CC BY actually requires it.

## Drawings (12) — ours

```
yumebutai-masterplan.svg     yumebutai-location.svg
yumebutai-cut-profile.svg    yumebutai-long-section.svg
yumebutai-route.svg          yumebutai-oval-forum.svg

hyakudan-en-plan.svg         hyakudan-en-section.svg
hyakudan-en-bed.svg

kai-no-hama-plan.svg         kai-no-hama-section.svg
kai-no-hama-detail.svg
```

Schematic plans, sections, diagrams and details made for this study — drawn to
explain the landscape, never traced from anyone else's drawings, and labelled
schematic wherever they carry a dimension. They are plain SVG with their colours
written in, because an `<img>` cannot see the page's CSS variables; the palette
sits at the top of each file.

Starting your own portfolio from `../content.starter.js` replaces this whole list
with `riverside-masterplan.jpg`, `stone-court-plan.jpg` and so on. Either way,
rename them in `content.js` to whatever suits, and delete the four photographs
and `CREDITS.md` along with them.

## What to export

- **JPEG** for photographs, **PNG or SVG** for line drawings — a plan saved as
  JPEG grows fuzzy grey halos around every line.
- **About 1600 px on the long edge** for photographs. The page never shows one
  wider than about 1000 px and the lightbox at most 1800, so larger is wasted
  weight. The four here were resized and re-encoded with `sips` (a macOS
  built-in) and came down from 3.4 MB to 1.5 MB with no visible loss.
- Photographs are **not** lazy-loaded, deliberately — see the note in
  `../render.js`. That makes weight worth minding.
- **Crop the paper away.** Export the drawing, not a photograph of a sheet with
  white margins, or it sits as a small rectangle inside a large empty frame.
- Wide pictures (`wide: true`) are cropped to **16:9** and the rest to **4:3**,
  from the centre. The SVG drawings here are authored at exactly 1600×900 and
  1200×900 so that nothing is ever cropped.
