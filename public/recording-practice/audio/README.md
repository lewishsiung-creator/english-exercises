# Lewis's recordings for this page

Drop audio files here and they appear on the page by themselves. Nothing in
`content.js` or `render.js` has to be edited.

## Naming

| File                      | What it is                         |
| ------------------------- | ---------------------------------- |
| `ai-agents.m4a`           | the whole passage, one take        |
| `ai-agents-1.m4a`         | paragraph 1 only                   |
| `ai-agents-2.m4a` … `-5`  | paragraphs 2 to 5                  |

The stem is the passage's `id` in `content.js` — `ai-agents` for the 17
October piece. A later passage with `id: 'store-layout'` would use
`store-layout.m4a`, and so on.

Only the files that exist show up: the page asks the browser for each one and
quietly drops the player when it is not there. A whole-passage take on its own
is enough; the per-paragraph files are worth it only for the paragraphs that
are hard to say.

## Format

**`.m4a`** — what an iPhone's Voice Memos app produces, and what the rest of
this repo uses. Export or share the memo as a file, rename it, and drop it in.

Both hosts serve `.m4a` correctly. Locally it needs `serve.py` rather than a
bare `python3 -m http.server`, because macOS's mime table labels `.m4a` as
`audio/mp4a-latm` and Safari refuses to play that. That is the only reason
`serve.py` exists.

Keep a take under about 2 MB. A minute of Voice Memos audio is well inside
that.
