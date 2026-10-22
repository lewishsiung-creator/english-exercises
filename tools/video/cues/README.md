# Caption cues, one file per video

`verify-times.js` checks every line's timestamp against these. The page seeks
to those numbers, so a wrong one sends a student to the wrong moment — and
without the cues there is nothing to check against.

## Why they live here

They were twice kept in a scratch directory and twice lost when it was cleared,
which meant the timestamps of four videos could not be re-checked and the only
way to get them back was to ask for the transcript again. Here they survive.

## Naming

`<videoId>.txt` — the eleven characters after `v=` or `youtu.be/`, matching the
`videoId` in `public/video/content.js`. That is how the checker finds the right
file for a clip.

## Format

One cue per line, `M:SS text`:

    0:00 So, I'll tell you a great story about Roger Federer. Um, we were
    0:08 think, um, exhibition season. You know, we're training over there.

Exactly as YouTube's transcript panel gives it — lowercase, no punctuation,
split mid-sentence, names misheard. **Do not clean these.** They are the record
of what the captions said and when, and their value is that they have not been
edited. The cleaning happens in the lessons.

## Getting one

The captions cannot be fetched: the endpoint is signature-gated and the
transcript panel needs a signed-in session, which has failed from two browsers
on six separate attempts. So it is a copy and paste.

On the video page: **…more** → **Show transcript**, click the first line,
scroll to the end, shift-click the last, copy.

The paste arrives with the duration spelled out after each timestamp
(`0:000 seconds…`, `1:031 minute, 3 seconds…`). Strip it:

    python3 - <<'PY'
    import re, pathlib
    raw = pathlib.Path('paste.txt').read_text().splitlines()
    out = []
    for line in raw:
        m = re.match(r'^(\d+:\d\d)(?:(?:\d+\s+minutes?,\s*)?\d+\s+seconds?)(.*)$', line.strip())
        if m and m.group(2).strip():
            out.append(f"{m.group(1)} {m.group(2).strip()}")
    pathlib.Path('tools/video/cues/VIDEOID.txt').write_text('\n'.join(out) + '\n')
    PY

Some pastes put the timestamp on its own line instead, with the text on the
next. Join those in pairs rather than stripping.

## Still missing

    1LMcGRfYBro   Daniel Pink — The 6 Skills AI Will Never Replace
    rtufWBLOXgw   James Clear on The Diary Of A CEO   (only 22:16–28:41 is used)
    c7jGXPEY54k   Daniel Pink — 30 Cheat Codes
    ZXHrPfWJcCI   Daniel Pink — How To Fix Your Attention Span

Their lessons were verified against cues when they were built; the cues were
then lost. Re-paste any of them and `verify-times.js --all` picks it up with no
further setup.
