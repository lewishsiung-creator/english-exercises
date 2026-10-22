# Tools for building /video/ lessons

Six scripts that turn a YouTube transcript into clips on
`public/video/content.js`, check the file is sound, and ask whether the
lessons are any good to practise with. Alongside them in `cues/` are the
caption files the timestamps are checked against.

All of it lives here because it twice did not: the scripts were written
from scratch twice and the cue files lost twice, after a scratch
directory was cleared between sessions.

## The six scripts

Three build a video into lessons and check the file is sound:

    node tools/video/verify-times.js  cues.txt drafts.json
    node tools/video/assemble.js      pairs.json public/video/content.js
    node tools/video/check-lessons.js public/video/content.js

`verify-times.js --all public/video/content.js` re-checks everything already
shipped, using the cue files in `cues/`. It names any video without one rather
than passing it in silence — a video with nothing to check against has not
passed, it has been skipped.

Three ask whether the lessons are any good to practise with — one per
thing the practice modes do to a line:

    node tools/video/check-breaks.js  public/video/content.js   # Shadow, Loop
    node tools/video/check-splits.js  public/video/content.js   # Shadow
    node tools/video/check-type.js    public/video/content.js   # Listen and Type

## The routine

A new video arrives as a link plus a transcript copied from YouTube's own
transcript panel. **Keep that paste**: cleaned into `cues/<videoId>.txt` it is
the only thing the timestamps can ever be re-checked against, and twice now it
was kept in a scratch directory and twice lost. See `cues/README.md`.

The transcript comes from the panel — the captions cannot be fetched, because the endpoint is
signature-gated and the panel is gated behind a signed-in session. Clean the
paste into one `M:SS text` line per cue, then:

    node tools/video/verify-times.js cues.txt drafts.json
    node tools/video/assemble.js pairs.json public/video/content.js
    node tools/video/check-lessons.js public/video/content.js

### verify-times.js — are the timestamps real?

The page seeks to every `t`, so a wrong one sends a student to the wrong
moment. This builds a word stream from the cues with each word's time
interpolated across its cue, walks a lesson's lines through it, and reports
anything more than 1.5s out. Three lessons are baked into it:

- Captions write numbers as digits and lessons spell them out, so both
  sides collapse to digits.
- "um", "uh" and "you know" are what a lesson legitimately strips, so they
  are dropped from both sides — otherwise a verbatim line looks like it
  skipped words.
- It scores every candidate rather than taking the first. Taking the first
  made lines starting on a common word ("the", "or", "you're") latch onto an
  earlier occurrence and report a two-second drift that was not there.

A line it cannot find is usually a deliberate caption fix (a misheard name,
a corrected word) — check before changing anything.

### assemble.js — write the lessons into content.js

Takes `[{section, lesson}]`. `videoId` and `sourceEn` come from the section
and the script stops if either is missing: an earlier version had the first
video it ever ran on hardcoded, and silently stamped a second video's
lessons with the first one's ID. `videoZh` goes on the first lesson of a
video's run only. New lessons are prepended, because the clip list groups
CONSECUTIVE lessons sharing a videoId.

### check-lessons.js — is the file still sound?

Runs over the whole of content.js: ascending timestamps inside each clip's
span, every line glossed, no line over eighteen words, every card landing
inside a line, every question anchored to a line, no mainland vocabulary,
and each video's clips still adjacent so the clip list can group them.

### check-breaks.js — are the lines cut where he paused?

Shadowing plays one line and waits for it back; Loop replays one line until it
lands. Both make the line the unit, so it has to be a breath group. The test is
the last word: a line finishing on "of", "the", "and" or "that" with no
punctuation is one the speaker did not stop at, and the student is being asked
to repeat a fragment. Run on 996 lines it found three, two of them mine.

### check-splits.js — which long lines hold a pause already?

A line holding two complete sentences has a stop inside it that the speaker
made. If the line is also long, splitting is free. Both tests have to pass:
over sixteen words, and each half at least five. The five-word floor is what
keeps the Five Whys passage whole — "Why? Because…" is two sentences whose
halves belong together, and splitting would leave a one-word line.

### check-type.js — can a student type this from hearing it?

Listen and Type marks word by word, so anything unreachable from the audio is
marked against them for a reason that is not listening. It carries a copy of
`typeWords()` from render.js; **keep the two in step**.

It found the real one: sixteen lines carry a numeral, and before the page knew
number words, a student who heard "eleven thirty" and typed it was marked as
missing two words on a line reading "11:30". Number words now fold to digits on
both sides. What the units-and-tens table still cannot reach — a year, "000"
out of a figure with a comma, "3x3" — the page marks neither way, and this
lists them so the count stays visible.

## A measure that did not survive its own check

Do not rebuild this one. The idea was to flag lines whose loop window is too
short for the words in them, on the reasoning that a window implying five or
six words a second must mean the next line's timestamp is too early and the
audio is being cut off. It flagged 103 lines and looked like a defect list.

Checked against a cue file, the speaker genuinely runs at 4.0–4.6 words a
second in exactly those passages, against a clip average of 2.9. The measure
cannot tell a fast talker from an early timestamp without the cues, and with
the cues `verify-times.js` already answers the question properly. It was
nearly used to "fix" a hundred lines that were right.

The same shape of mistake has now happened four times in this directory: a
tool reports a fault, the data turns out to be correct, and the tool is what
needs fixing. The first instinct on a surprising report should be to open the
source and look.
