# Tools for building /video/ lessons

Three scripts that turn a YouTube transcript into clips on
`public/video/content.js`, and check the result. They live here because
they were twice written from scratch after a scratch directory was
cleared between sessions.

## The routine

A new video arrives as a link plus a transcript copied from YouTube's own
transcript panel — the captions cannot be fetched, because the endpoint is
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
