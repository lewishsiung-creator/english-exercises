# English Exercises

Interactive English practice for young learners, built for classroom and
homework use.

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

## Layout

```
public/     the site — plain HTML, CSS and JS, no build step
make-icon.py  regenerates public/apple-touch-icon.png
```

## Editing the content

Vocabulary and sentences live in [`public/data.js`](public/data.js). Add a
topic by copying an existing block; each word needs a `word`, an `emoji` and
an `article`.

The "Missing Letter" activity automatically skips words whose first vowel sits
in a digraph (*bread*, *book*, *paint*) — those have more than one defensible
answer.

## Running it locally

No build step and no dependencies:

```bash
python3 -m http.server -d public 8000
```

Then open <http://localhost:8000>.

## Live sites

- <https://lewishsiung-creator.github.io/english-exercises/>
- <https://english-exercises-6e4.pages.dev>

## Deployment

Pushing to `main` publishes to both, with no further steps:

- **GitHub Pages** — via [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
- **Cloudflare Pages** — via its GitHub integration (build command: none,
  output directory: `public`)
