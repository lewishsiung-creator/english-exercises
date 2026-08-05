# English Exercises

English teaching material, built for classroom, homework and one-to-one use.
Six independent pages live here — a game for young learners at the site
root, phonics practice for slightly older children at `/phonics/`, a
bilingual business worksheet at `/business-clarity/`, an interactive
lesson for working adults at `/wealth-habits/`, reading-aloud practice
built on a bilingual speech at `/campaign-speech/`, and TOEIC grammar
practice at `/toeic-grammar/`.

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

## Sound Lab — phonics, ages 9–11

The English spelling system in eight sound sets — short vowels, magic e,
digraphs, blends, vowel teams, bossy r, the pairs that get confused, and the
letters that go quiet — 34 sounds and 170 words in all. Every set runs the
same six activities, in the order a lesson would use them.

| Activity | Skill |
| --- | --- |
| 🔤 Meet the Sounds | The sound, its letters, and a word cut into chunks |
| 👂 Which Sound? | Hearing a sound inside a spoken word |
| 🗂 Sort the Words | Seeing which sound a written word belongs to |
| 🧱 Build the Word | Blending — the chunks in the right order |
| 🔍 Odd One Out | Telling three words that share a sound from one that does not |
| 📖 Read It Out Loud | Reading a sentence built from the set |

### Design notes

- **Same house rules as Word Play.** Audio first, no timers, no failure
  states — a wrong answer wobbles and invites another go, only a correct one
  advances, and first-try accuracy goes to the teacher panel rather than to
  the child. The two activities with nothing to get wrong are not scored.
- **The chunk carries its own sound.** A word is stored as
  `c-a:ay-k-e:` — cake, where the `a` says its name and the `e` says nothing.
  That is why a child can tap any single letter and hear what it does *in
  this word*, and why the silent e is drawn dashed and grey and answers a tap
  with a flash and no sound.
- **A browser voice cannot say a bare phoneme.** The 🔊 sound button is an
  approximation spelled to get close (`b` comes out as "buh", `sh` as
  "shhh"), and the honest model is the key word underneath it and the ▶
  **Sound it out** button, which walks a word's chunks and then says it
  whole. The teacher panel says so, and every cue is one line in
  `content.js` if a device's voice mangles one.
- **No word carries two answers.** A word belongs to exactly one sound in its
  set — *nest* and *plant* were dropped from the blends set for having a
  blend at each end. The one deliberate exception is the long and short `oo`,
  which is the whole point of that pair and is labelled `oo (moon)` against
  `oo (book)`.
- **Chinese waits behind the 中 chip**, as on the adult pages, and covers
  instructions, sound descriptions and sentence meanings — never the target
  words, which have to stay decodable English.

Records live in the browser's `localStorage` under `phonics.*`, separate from
Word Play's, so the two pages never mix their session logs.

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

## Three Habits That Build Wealth — adult, teacher-led

An interactive lesson for working adults, built from the HBR CC Book Digest of
Scott Galloway's three highest-return habits. Five steps — advice versus
action, then one step per habit, then a step that puts the language to work —
carrying just over fifty collocations.

The article itself is not reproduced: each step has one short attributed quote,
a summary written for the lesson, and then the language work.

| Activity | Skill |
| --- | --- |
| 🗂 Phrase cards | Meaning and an example sentence, behind a tap |
| 🔗 Matching | Which half of a collocation goes with which |
| ✏️ Gap fill | Choosing the phrase that fits a new context |
| 🗣 Opinion poll | Taking a side and defending it |
| ⚓ Cabinet audit | Naming the people you go to before a decision |
| ⏱ Two minutes | Speaking to a prompt, ticking target phrases as they land |

### Design notes

- **English leads, Chinese waits.** Every line is a pair, but the Chinese is
  hidden behind a small 中 chip; the 中文 switch in the bar reveals the lot.
  Instructions, task prompts and the contents list stay bilingual — those are
  scaffolding, not comprehension practice.
- **Nothing is scored and nothing is saved.** A fresh load is a fresh lesson,
  which is what you want between two clients on the same laptop. Only the
  voice and Chinese settings persist. Wrong answers wobble, explain themselves
  and stay open — the exercise is a reason to talk, not a test.
- **🔊 everywhere.** Quotes, summaries, collocations, example sentences and
  sentence frames are all spoken by the browser, with the voice and speed set
  in the teacher panel.
- The faint 👩‍🏫 button opens the teacher panel over the lesson (not a new
  screen): show all Chinese, reveal every answer at once for going over an
  exercise together, pick a voice, or reset for the next student.
- **One photograph opens the lesson and each habit**, and no more. They are
  illustration, not content, so they carry no lesson text and are dropped from
  the print handout.
- **Print** gives a handout: everything behind a tap is opened, and anything
  that needs a mouse is dropped.

Photographs are from [Pexels](https://www.pexels.com/license/), whose licence
allows commercial use and requires no attribution; the photographers — Lara
Jameson, Polina Tankilevitch, Ron Lach and William Fortunato — are credited on
the page anyway. Each file is stored at 1600×900 and cropped by CSS, so
changing the framing is an `object-position` edit, not a re-export.

## A Five-Minute Campaign Speech — adult, reading aloud

Reading practice built on a bilingual speech: the candidate's own five-minute
address for the 52nd President of JCI The Port, 62 sentences long. The text
is reproduced as written — this page is practice, not an edit of his words.

The two jobs the page does are a switch in the top bar:

| Mode | What the learner does |
| --- | --- |
| 讀 Read | English leads. Read each line aloud, tap 🔊 to compare, 中 if the Chinese is needed |
| 記 Recall | Chinese leads. Say the English before tapping EN to check it |

### Design notes

- **The line is the unit.** Every sentence is its own numbered row, sized for
  reading aloud at arm's length rather than skimming, so "line 4" means
  something and nobody loses their place mid-paragraph. Seventeen lines worth
  memorising — the slogans and the one-sentence arguments — carry a gold rule.
- **Switching mode never rebuilds the page.** Both languages are always in the
  DOM and CSS decides which leads, so a switch mid-section keeps your place and
  costs nothing.
- **▶ Read this section** speaks a whole section one sentence at a time,
  highlighting each line and scrolling it to the middle, so the learner can
  shadow it. In 記 Recall it also opens each line as it reaches it, which turns
  the play-through into the answer key. A watchdog moves the run along if the
  browser never reports that a sentence finished — otherwise a machine with no
  audio output strands it on line one.
- **Words to watch.** Each section ends with the words most likely to trip up a
  Mandarin speaker, given as a plain respelling (`ri-spon-suh-BIL-uh-tee`)
  rather than IPA, because these are read off a shared screen mid-sentence.
- **A clock, because it is a five-minute speech.** ⏱ in the bar counts up and
  turns amber at five minutes. It is the only number on the page — nothing is
  scored.
- Headings, instructions and the contents list stay bilingual throughout; only
  the speech lines ever hide a language.
- **Print** gives a handout: both languages open, the machinery gone, line
  numbers kept for marking up.

## TOEIC Part 5 & 6 Grammar — adult, exam preparation

The fifteen grammar points most often tested in Parts 5 and 6, and the fifteen
patterns worth memorising, built from two handouts into one page. Seventeen
sections: fifteen topics from word forms to conditionals, then all fifteen
formulas gathered for revision, then what to study first.

Everything the handouts state is here. What they did not contain is the
practice, so their example sentences have been turned into 79 Part 5 items and
their three model paragraphs into 3 Part 6 passages — 91 questions in all, each
with a bilingual explanation.

| Activity | Skill |
| --- | --- |
| 📝 Part 5 | One blank, four options — the real question format |
| 📄 Part 6 | A business text with four blanks, one of them a whole sentence |
| 🧮 Formula cards | The pattern face up, an example behind a tap |
| 📊 Reference tables | Word families, time clues, fixed phrases |
| 🔀 Contrast pairs | `an interesting presentation` against `interested employees` |
| ⏱ Timer | Because Part 5 is a test of pace |

### Design notes

- **The questions look like the test.** Four options lettered A to D, and in
  Part 6 the questions sit under the passage as they do on the paper. Answering
  a Part 6 blank writes into the passage above it, so the text fills in as the
  set is worked through — including the inserted sentence.
- **A wrong option dims and stays put.** Only the right one fills the blank,
  and filling it opens the explanation in both languages. Nothing is lost by
  guessing, which is the point: the explanation is the lesson.
- **Nothing is scored.** A set counts how many blanks are filled and prints
  what it should cost at twenty seconds a question. That, and the clock, are
  the only numbers on the page.
- **English leads, Chinese waits**, as in the other adult pages. The phrase
  tables go further: the meaning column is covered by a drawn rule until the
  row is tapped, so the table doubles as a self-test.
- **Each formula sits inside the topic it belongs to**, and all fifteen are
  gathered again in section 16 with a mixed drill — because mixed practice,
  with no topic heading to help, is what the test actually asks for.
- **Print** gives a handout: every answer filled, every explanation open, and
  anything that needs a mouse gone.

## Layout

```
public/                   Word Play — the site root
public/phonics/           Sound Lab, the phonics practice
public/business-clarity/  the business worksheet
public/wealth-habits/     the three-habits lesson
public/wealth-habits/img/ its four photographs
public/campaign-speech/   the speech reading practice
public/toeic-grammar/     the TOEIC Part 5 & 6 practice
make-icon.py              regenerates public/apple-touch-icon.png
```

All six are plain HTML, CSS and JS with no build step.

## Editing the content

**Word Play.** Vocabulary and sentences live in
[`public/data.js`](public/data.js). Add a topic by copying an existing block;
each word needs a `word`, an `emoji` and an `article`.

The "Missing Letter" activity automatically skips words whose first vowel sits
in a digraph (*bread*, *book*, *paint*) — those have more than one defensible
answer.

**Sound Lab.** The sounds live in
[`public/phonics/content.js`](public/phonics/content.js), one entry per set,
each holding its sounds and each sound its five words and the sentences that
use them.

A word is `{ w: 'ship', p: 'sh-i-p', e: '🚢' }`, where `p` cuts the word into
the chunks a child sounds out — that split is what the building tiles are made
from and what gets highlighted once a sound has been named. A chunk is
normally just its letters and takes its sound from the `CUES` table at the top
of the file; add a colon to give one chunk its own sound (`b-oo:uu-k`, the
short oo in *book*), and nothing after the colon to make it silent
(`c-a:ay-k-e:`). That is the entire notation.

Two rules to keep when adding words. The chunks must spell the word back
exactly, and a word must belong to only one sound in its set — otherwise the
sorting and odd-one-out questions get a second defensible answer. A sound
takes `ear: false` when it cannot be heard on its own (silent letters), which
drops it from the two listening activities, and an optional `vs` list of
`[before, after]` pairs to compare — `cap → cape`.

Sentences mark the words worth pointing at with `*asterisks*`. Each block type
is one function in [`app.js`](public/phonics/app.js), so a new activity is a
render function and one entry in `ACTIVITIES`.

**Business Clarity.** All the text lives in
[`public/business-clarity/content.js`](public/business-clarity/content.js), one
entry per section. Every string is an `en`/`zh` pair; keep the pair together
and the layout takes care of itself. Runs of underscores (`______`, or the
fullwidth `＿＿` in Chinese lines) become drawn blanks, so write them the
length they should appear. The block types — questions, checkboxes, phrase
lists, sentence frames, tables — are listed in a comment at the top of the
file.

**Three Habits.** The lesson lives in
[`public/wealth-habits/content.js`](public/wealth-habits/content.js), one entry
per step. Every string is an `en`/`zh` pair. The block types — quote, summary,
phrase cards, matching, gap fill, poll, cards, discussion, task — are listed in
a comment at the top of the file, and each is one function in
[`render.js`](public/wealth-habits/render.js).

A gap sentence marks its blank with `___` and gives the index of the right
option in `answer`; a phrase card wants an `eg` sentence, because that is what
gets read aloud. A `photo` on the lesson or on any step adds a picture — give
it a `src`, an `alt`, the photographer in `by`, and a `pos` if the default
centre crop cuts the wrong thing. To build a lesson from a different article,
replace the content file — nothing in the renderer knows about this one.

**Campaign Speech.** The speech lives in
[`public/campaign-speech/content.js`](public/campaign-speech/content.js), one
entry per section. Every string is an `en`/`zh` pair. There are only three
block types — `lines`, `subhead` and `say` — listed in a comment at the top of
the file, and each is one function in
[`render.js`](public/campaign-speech/render.js).

A line takes `k: 1` if it is worth memorising. A `say` item wants the word, a
respelling in `say`, and a short Chinese tip in `zh`. Line numbers restart at 1
in each section and come from the renderer, so inserting a sentence needs no
renumbering. Any other bilingual text works here unchanged — swap the content
file and the page is reading practice for that instead.

**TOEIC Grammar.** The page lives in
[`public/toeic-grammar/content.js`](public/toeic-grammar/content.js), one entry
per section. The block types — lead, rule, formula, table, egs, chips,
contrast, note, steps, q5, q6, cards, tiers — are listed in a comment at the
top of the file, and each is one function in
[`render.js`](public/toeic-grammar/render.js).

A `q5` item marks its blank with `___`, gives four `options` and the index of
the right one in `answer`; the `why` pair is what opens once the blank is
filled. A `q6` `body` is an array read in order: a plain string is passage
text (`\n\n` starts a new paragraph) and an object is a blank, with `long: true`
marking the whole-sentence insertion item. Blanks are numbered by the renderer,
so adding one needs no renumbering. A `table` takes bilingual `head` cells and
either a parallel `rowsZh`, or `zhCol` naming a column that is Chinese in its
own right and should therefore stay covered.

## Running it locally

No build step and no dependencies:

```bash
python3 -m http.server -d public 8000
```

Then open <http://localhost:8000> for Word Play,
<http://localhost:8000/phonics/> for Sound Lab,
<http://localhost:8000/business-clarity/> for the business worksheet,
<http://localhost:8000/wealth-habits/> for the three-habits lesson,
<http://localhost:8000/campaign-speech/> for the speech, or
<http://localhost:8000/toeic-grammar/> for the TOEIC practice.

## Live sites

- <https://lewishsiung-creator.github.io/english-exercises/>
- <https://english-exercises-6e4.pages.dev>

## Deployment

Pushing to `main` publishes to both, with no further steps:

- **GitHub Pages** — via [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
- **Cloudflare Pages** — via its GitHub integration (build command: none,
  output directory: `public`)
