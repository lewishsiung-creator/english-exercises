# Drawings go here

Every picture on the portfolio is named in `../content.js`, in each project's
`images` list. Save your file into this folder with exactly that name and it
appears on the page — there is nothing else to change.

Until a file is here, the page draws a labelled placeholder in its place
saying which file it is waiting for, so a half-finished portfolio still reads
as a portfolio.

The page currently shows the **worked example** — a case study of Tadao Ando's
Awaji Yumebutai — which asks for these:

```
yumebutai-masterplan.jpg     yumebutai-location.jpg
yumebutai-cut-profile.jpg    yumebutai-terrace-diagram.jpg

hyakudan-en-plan.jpg         hyakudan-en-section.jpg
hyakudan-en-bed.jpg          hyakudan-en-view.jpg

kai-no-hama-plan.jpg         kai-no-hama-section.jpg
kai-no-hama-detail.jpg       kai-no-hama-view.jpg

yumebutai-route.jpg          yumebutai-long-section.jpg
yumebutai-oval-forum.jpg     yumebutai-stairs.jpg
```

Those files are deliberately **not** supplied. Ando's drawings and photographs
of the building are somebody else's work, and a portfolio is the last place to
put a picture you have no right to — so the study ships with placeholders, and
anything that goes in here should be your own redrawing or your own photograph.

Starting your own portfolio from `../content.starter.js` replaces that list
with `riverside-masterplan.jpg`, `stone-court-plan.jpg` and so on. Either way,
rename them in `content.js` to whatever suits.

## What to export

- **JPEG** for renders and photographs, **PNG** for line drawings — a plan
  saved as JPEG grows fuzzy grey halos around every line.
- **Around 2000 px on the long edge.** Larger is wasted: the page never shows
  a picture wider than about 1000 px, and the lightbox at most 1800.
- **Crop the paper away.** Export the drawing, not a photograph of a sheet
  with white margins, or it will sit as a small rectangle inside a large empty
  frame.
- Wide pictures (`wide: true` in `content.js`) are cropped to 16:9 and the
  rest to 4:3, from the centre. Crop to those ratios yourself if the centre is
  not what matters.
