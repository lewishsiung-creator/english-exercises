# English Exercises

English teaching material, built for classroom, homework and one-to-one use.
Two independent pages live here — a game for young learners at the site root,
and a bilingual business worksheet at `/business-clarity/`.

## Word Play — CEFR A1, ages 7–10

Four activities across three vocabulary topics (Animals, Food, School),
following a **listen → read → spell → produce** progression:

| Activity | Skill |
| --- | --- |
| 👂 Listen and Click | Hearing a word and picking the picture |
| 👀 Read and Match | Reading a written word |
| 🔤 Missing Letter | Vowel spelling |
| 🧩 Build a Sentence | Word order and sentence frames |

### Design notes

- **Audio first.** Every prompt is spoken, and any picture can be tapped to
  hear it again. Seven-year-olds are still learning to read, so a text-only
  prompt would block them before the language does.
- **No failure states.** A wrong answer wobbles and invites another try; only
  a correct answer advances. The teacher panel still records first-try
  accuracy, so the useful signal survives without the child seeing a score
  drop.
- **No timers**, large touch targets (min 92px), and a layout that works on
  a phone as well as a classroom projector.

### Teacher panel

The faint 👩‍🏫 button in the top bar opens an overlay (not a new screen, so a
lesson in progress is not lost) showing first-try accuracy, words missed
repeatedly across games, a full answer log, and a voice picker.

Records are kept in the browser's `localStorage`, so they stay on the device
the child used and are never uploaded.

## Business Clarity — adult, one-to-one

A reading version of the *Business Clarity and Communication Worksheet*, the
40-page bilingual worksheet used in one-to-one business English coaching. It
covers thirteen sections, from explaining a business in thirty seconds through
pricing, cash flow and recruitment to a two-minute executive introduction.

### Design notes

- **English leads, Chinese supports.** Every line is a pair: English in a
  serif at full contrast, Traditional Chinese directly beneath in a smaller
  sans at lower contrast. Either language can be followed down the page
  without the other becoming noise.
- **Nothing is a form control.** Blanks, checkboxes and answer rules are
  drawn, not typed into — the client writes on paper or talks. Screen and
  print therefore look the same, and a stray refresh cannot lose a session.
- A contents sidebar tracks the section being read; on a phone it collapses
  into the top bar. **Print** puts each numbered section on its own page.

## Layout

```
public/                   Word Play — the site root
public/business-clarity/  the business worksheet
make-icon.py              regenerates public/apple-touch-icon.png
```

Both are plain HTML, CSS and JS with no build step.

## Editing the content

**Word Play.** Vocabulary and sentences live in
[`public/data.js`](public/data.js). Add a topic by copying an existing block;
each word needs a `word`, an `emoji` and an `article`.

The "Missing Letter" activity automatically skips words whose first vowel sits
in a digraph (*bread*, *book*, *paint*) — those have more than one defensible
answer.

**Business Clarity.** All the text lives in
[`public/business-clarity/content.js`](public/business-clarity/content.js), one
entry per section. Every string is an `en`/`zh` pair; keep the pair together
and the layout takes care of itself. Runs of underscores (`______`, or the
fullwidth `＿＿` in Chinese lines) become drawn blanks, so write them the
length they should appear. The block types — questions, checkboxes, phrase
lists, sentence frames, tables — are listed in a comment at the top of the
file.

## Running it locally

No build step and no dependencies:

```bash
python3 -m http.server -d public 8000
```

Then open <http://localhost:8000> for Word Play, or
<http://localhost:8000/business-clarity/> for the business worksheet.

## Live sites

- <https://lewishsiung-creator.github.io/english-exercises/>
- <https://english-exercises-6e4.pages.dev>

## Deployment

Pushing to `main` publishes to both, with no further steps:

- **GitHub Pages** — via [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
- **Cloudflare Pages** — via its GitHub integration (build command: none,
  output directory: `public`)
