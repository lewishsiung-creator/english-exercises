# English Exercises

English teaching material, built for classroom, homework and one-to-one use.
Eighteen independent pages live here — a game for young learners at the site
root, phonics practice for slightly older children at `/phonics/`, an
interactive phonics handbook for the same age at `/phonics-handbook/`, a
review lesson for a ten-to-twelve-year-old at `/confidence-talk/`, a
bilingual business worksheet at `/business-clarity/`, a fifteen-chapter
basic grammar course for adults at `/grammar/`, an interactive
lesson for working adults at `/wealth-habits/`, a business-English reading
lesson at `/happy-sexy-millionaire/`, a four-book discussion guide at
`/aaron/book-club/`, reading-aloud practice
built on a bilingual speech and its election Q&A at `/campaign-speech/`,
TOEIC grammar
practice at `/toeic-grammar/`, a homework review of one student's own
sentences at `/sentence-upgrades/`, a high-school writing worksheet
at `/robot-helper/`, a survey of seven years of the 學測 essay at
`/exam-writing/`, an IELTS Speaking Part 3 practice at `/ielts-part3/`, a
growing IELTS Speaking course covering all three parts at `/ielts-speaking/`,
a semiconductor plant's own vocabulary sheet rebuilt for one-to-one adult
lessons at `/fab-english/`,
and, for 國中 students, vocabulary and grammar together at `/junior-high/`.

One page is not English at all: `/math/` is math practice for Grades 1 to 3,
built for a child in an American school.

Eight more pages are not lessons. `/landscape-portfolio/` is a portfolio
template for a student to fill in with their own work, and `/anny/`, `/aaron/`,
`/anita/`, `/eason/`, `/anna/`, `/riva-rex/` and `/jill/` are notebooks kept for
one student each, which grow by one session after every lesson rather than being
finished and left alone. The first three are adult clients; `/eason/` is a
teenager moving up to senior high school; `/anna/` is a young adult of eighteen
to twenty; `/riva-rex/` is a pair of ten-to-twelve-year-olds taught together,
and `/jill/` is one child of the same age taught alone.

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

## 自然發音學習手冊 — phonics handbook, 中高年級

The full phonics handbook — 給小朋友的話 through 結語 — as one interactive
page: the 44-sounds reference, the diagnostic word lists, syllable cutting,
prefixes, suffixes and the combined exercises. Where Sound Lab is a set of
games, this is the book the games sit beside: Chinese is the instruction
language, and the child looks things up rather than playing through.

| Piece | What a tap does |
| --- | --- |
| 🔤 Sound cards | Speaks the sound, then its example words |
| 📖 Word lists | Speaks the word — the diagnostic lists of Unit 2 |
| ✂️ Cutting game | A tap between two letters places a syllable cut |
| 🧩 拆 cards | Splits a word into 字首＋字根＋字尾 with glosses |
| 🔗 Pairs | hop → hope, hop → hopping — each side speaks |
| 🌱 Word families | A root and the eight words that grow from it |

### Design notes

- **Every English word on the page speaks** — in a chip, in a table cell, in
  the middle of a Chinese sentence. A bare written sound (`sh`, `bl`,
  `-tion`) speaks its cue from the `CUES` table rather than its letter names.
- **檢測模式 makes taps silent.** The handbook's method is 先檢測、再教學 —
  and a diagnostic read-aloud is spoiled if the child hears the word first.
  With the switch on (in the 👩‍🏫 panel), tapping a word marks it for
  reteaching instead of speaking it; the marks collect in the panel and
  persist in `localStorage` until cleared.
- **The cutting game has no failure state.** A wrong cut wobbles and waits; a
  right cut stays; a fully cut word pulls apart, turns green and says itself.
  The correct cuts are the hyphens in the content file — 104 words, all
  hand-checked against dictionary syllabification.
- **Chinese leads.** The reverse of the adult pages: the handbook teaches
  Taiwanese children to decode English, so instructions are Chinese and only
  the target words are English. There is no 中 chip anywhere.
- Unit 1's sound inventory carries example words the handout implied but did
  not print (`ai` — *rain*); they are data in `content.js`, one line each.
- **Pictures are emoji, and only where they cannot mislead.** The `PICS`
  table in `content.js` maps a word to one emoji (`cat: '🐱'`), shown beside
  the word everywhere it appears. Abstract words deliberately have no entry —
  on a decoding page a wrong picture is worse than none. Each proposed
  pairing was separately verified for instant recognisability to a Taiwanese
  ten-year-old before being kept. One line adds a picture; deleting the line
  removes it.
- **Print** hides the machinery and keeps the handbook.

### Recorded words

Most of the practice words are **not** synthesised: 700 of them are human
recordings from [Wikimedia Commons](https://commons.wikimedia.org/), sitting
in `public/phonics-handbook/audio/` and played instead of the voice. That
covers about three quarters of the words a child can tap. Anything without a
recording — and every bare sound, which nobody records in isolation — falls
back to speech synthesis, so nothing is ever silent.

Coverage is good because the same two Commons accounts (Dvortygirl and its
bot) recorded 640 of the 700, so the set sounds like one speaker rather than a
crowd. The originals are Ogg Vorbis, which Safari cannot play, so each was
taken from Wikimedia's own mp3 transcode, trimmed of leading and trailing
silence, normalised to a common loudness (the raw clips vary about fourfold —
in a classroom that means half the words are inaudible and the rest make
everyone jump) and encoded to AAC at 48 kbps mono. That is ~9 kB a word,
6.2 MB in total. The whole pipeline uses only macOS built-ins (`curl`,
`afconvert`) and the Python standard library, because there is no ffmpeg on
the machine this was built on.

`audio/manifest.js` is the generated list of which words have a recording;
`render.js` consults it and takes the audio path only for whole words, never
for a bare sound. A missing file, a codec failure or a refused autoplay all
fall through to the voice rather than going quiet.

**These recordings carry their own licence** — mostly CC BY-SA 3.0, some
CC BY-SA 4.0, the rest public domain or CC0 — which stays with them and does
not extend to the rest of the site. Attribution and the modification note are in
[`audio/CREDITS.md`](public/phonics-handbook/audio/CREDITS.md) and summarised
in the teacher panel. Removing the `audio/` folder and its `<script>` tag
reverts the page to pure synthesis with no other change.

### Speech quality

For everything not covered by a recording, a browser voice cannot be given a
phoneme, only text — so every bare sound on this page is an English
pseudo-word chosen to make the engine's letter-to-sound rules land on the
right noise (`b` → "buh", `sh` → "shhh").

**Which spellings work is measurable, not a matter of taste.** macOS `say`
drives the same system voices the browser exposes, so a cue can be
synthesised and compared against its letter-name reading:

```bash
say -v Samantha -o a.aiff "sss"; say -v Samantha -o b.aiff "ess ess ess"
md5 a.aiff b.aiff        # identical hash = the cue is being spelled out
```

Run against the original table, that test failed on eight entries: `sss`,
`lll`, `mmm`, `rrr` and `vvv` were byte-identical to "ess ess ess", "el el
el" and so on; `ng` and `ks` to "en gee" and "kay ess"; and `aah` was
byte-identical to `ah`, so short `a` and short `o` were literally one sound.
`thhh` ran 1.22s against 0.43s for `thuh` — trailing h's become segments
rather than stretch. All are fixed. The teacherly stretched spelling is
therefore wrong *here* even though it is right on a whiteboard, and
continuants take the schwa form. Two stretched cues survived the test and
are deliberately kept: `fff`, and `shhh` (bare `sh` spells out as "ess
aitch").

Four more things follow, and together they are why the page sounds better
than a naive `speechSynthesis.speak(word)`:

- **Voices are ranked, not just wished for.** `VOICE_TIERS` puts neural
  voices (Siri, Microsoft *Natural*, Google US English) first and Apple's
  recorded-speaker voices second; macOS character voices sit below them, and
  the novelty shelf — Zarvox, Bad News, Bubbles — is excluded from automatic
  choice and labelled 不建議 in the picker. Without this the fallback was
  alphabetical, so a machine without a favourite installed could open the
  lesson in Albert.
- **A sound is spoken slower than a word** (`SOUND_SLOWER`), with a longer
  pause after it, because a phoneme is a fraction of a second and the silence
  afterwards is when the child repeats it. Pitch is flat: raising it thins
  the formants, which is the information a vowel carries.
- **Chrome drops an utterance queued in the same tick as `cancel()`**, which
  presents as a tap that makes no sound. The first utterance of each run is
  therefore deferred a frame.
- **A cue that is wrong on your machine is a data fix, not a code fix.** The
  measurements above are from one Mac; another machine's voices will differ.
  The teacher panel's 發音檢查 plays every cue and every at-risk word in turn
  and collects the bad ones into a copyable list; each is one line in `CUES`
  or `WATCH` in `content.js`.

`WATCH` is the short list of words whose lesson depends on which reading the
voice picks — *refuse* sits in the long-`u` list, and the noun (rubbish,
`REF-yoos`) has no long `u` at all, so a voice choosing it teaches the
opposite of the point.

Settings live under `phonicsGuide.*` in `localStorage`, separate from Sound
Lab's, so the two pages never mix voice or speed.

## Number Lab — math, Grades 1–3

The one page here that is not English. Eighteen topics across three American
grade levels, for a child in Grade 1 working up through Grade 3.

| Grade 1 | Grade 2 | Grade 3 |
| --- | --- | --- |
| Add to 20 | Add two digits | Times tables |
| Take away | Subtract two digits | Sharing out |
| Missing number | Hundreds, tens, ones | Fractions |
| Tens and ones | Count the money | Add and subtract to 1000 |
| Bigger or smaller | Time to five minutes | Area and perimeter |
| What time is it? | Equal groups | Rounding |

### Design notes

- **Every topic can teach itself first.** Tapping a topic offers **Show me
  how** or **Just practise**. The explanation is three or four steps, one idea
  each, spoken aloud and shown with a picture — counters being pushed
  together, hops along a number line, blocks, coins, a shaded bar — and ends
  with one whole example worked through, so he has seen one done before he is
  asked. It is skippable at any step and never forced, because the tenth run
  at times tables should not start with a lesson.
- **The explanations are written for a Grade 1 reader at every grade.** The
  maths gets harder up the levels; the English does not. He is six and reading
  them himself.
- **Questions are generated, not written.** Each topic is a `make()` in
  `content.js` that builds a fresh question every time, so the bank never runs
  out and nothing can be learned by position. Difficulty lives in the numbers
  inside that one function and nowhere else.
- **Same house rules as Word Play and Sound Lab.** Every prompt is spoken and
  replayable, there are no timers, and there is no failure state — a wrong
  answer wobbles and invites another go, only a correct one advances. After
  two wrong tries the topic's hint appears and is read aloud; it points at the
  method (*"Start at 24 and count on 8"*), never at the answer.
- **A wrong option dims rather than vanishes**, so he can see what he has
  already ruled out and nothing is taken away as a punishment.
- **Half the topics are tapped, half are typed** on a number pad — the pad
  keys are the same size and shape as the option buttons, so the switch is not
  felt. A physical keyboard works too, for a grown-up sitting alongside.
- **Numbers are set in a monospaced face, prose is not.** At six a 6 that
  could be a 5 is a maths error that was never about maths; a sentence in the
  same face is just harder to read, so `app.js` picks per prompt.
- **The pictures are drawn, not photographed.** Clocks, base-ten blocks,
  arrays, fraction bars, coins at true relative size, grid rectangles and
  number lines are all SVG built in `content.js`, in the page's own palette.
- **English only**, unlike the rest of the site: he is in an American school,
  and the vocabulary in the prompts is the vocabulary his teacher uses.

### Voice

Every prompt, hint and explanation is spoken, so the voice is not a detail.
This page uses the ranking approach the handbook arrived at, with the same
reasoning and two findings of its own.

- **Voices are ranked, not wished for.** The en-US list this Mac reports is
  alphabetical and begins *Albert, Ava, Bad News, Bahh, Bells, Boing,
  Bubbles* — so "take the first American voice" is one missing download away
  from teaching maths in Albert. `VOICE_TIERS` puts the young American female
  voices this page was asked for first, then neural, then Apple's
  recorded-speaker voices, then character and regional ones; the novelty shelf
  is excluded from automatic choice and labelled *not recommended* in the
  picker.
- **American beats the tiers.** Several voices ship in a British and an
  American cut under one name, and on a page built around an American
  classroom the wrong Flo is worse than the right Ava, so locale outranks
  everything except novelty.
- **A voice name cannot be matched literally.** macOS localises it and does
  not agree with itself about how: `Flo (英文（美國）)` uses a Latin
  parenthesis after a space, `Ava（增強音質）` a fullwidth one with none.
  Matching the raw name missed the enhanced Ava completely — the best voice
  installed on this machine was unreachable. Names are compared with the
  parenthetical stripped, and an enhanced download is preferred over the
  standard cut of the same speaker.
- **Chrome drops an utterance queued in the same tick as `cancel()`**, which
  presents as a tap that makes no sound. Every utterance is deferred 70ms.
- **Pitch is flat and speed is a setting.** A raised pitch reading numbers for
  a whole session is wearing rather than friendly. Speed lives in the panel
  and is saved, because a six-year-old meeting a topic and a grown-up
  re-reading a hint do not want the same pace.
- **The operator is silent, so every question carries its own spoken line.**
  Measured with the repo's `say` test, `24 + 8` and `24 8` synthesise the
  same: the `+` contributes nothing. `speak` is therefore written out in
  words and never derived from what is on screen. The same test showed digits
  and clock times are read correctly — `2 20` is byte-identical to *two
  twenty* — so those need no special handling.
- **Fractions are named, not spelled.** `3/4` is read as "three fourths" at
  best, so a fraction that is spoken is written out: he sees `2/3` and hears
  *two thirds*.
- **Nothing waits on a fixed timer that speech could outlive.** A correct
  answer moves on when the voice finishes, with a backstop — cancelling an
  utterance takes its `end` event with it, and tapping *Say it again* while
  the answer was being read used to strand the round for good.

Records live under `math.*` in `localStorage`, separate from the English
pages, and the 👨‍🏫 panel groups misses by topic rather than by question —
with generated numbers no single sum repeats often enough to mean anything,
but "Grade 3 · Times tables, 6 missed" does.

## Confidence and Everyday Life — ages 10–12, teacher-led

The class notes of 11 July 2026 turned into a review lesson for one learner —
**Jill**, whose notebook at `/jill/` keeps the same hour as its session 1. The
two pages point at each other from their covers: this one is the review, hers
is the record. What is here is
22 words in six groups, 19 collocations, three classroom sentences, eight
sentence frames and eight discussion questions. The notes' own grouping is
kept — confidence, communication, frequency, breakfast, interests,
achievements — and what was added is the collocations pulled out of the
example sentences, the frames those examples are built on, and the questions
the vocabulary was learnt in order to answer.

| Part | What a tap does |
| --- | --- |
| 🗣 Word cards | 🔊 says the word; 中 opens the gloss, the meaning and the examples |
| 🧩 Words that go together | The Chinese behind a tap, three sets of collocations |
| 💬 Say this in class | Three whole sentences, each with *when* to use it |
| ✨ Say it more naturally | Holds the natural version back behind a button |
| 🎯 Make a sentence | Frames with the example answer hidden, plus a word bank |
| 🙋 Talk about it | Eight questions, each with a follow-up behind a tap |
| 🔒 Cover the English | The whole word list run backwards: Chinese showing, English hidden |

### Design notes

- **Ten to twelve is between the two house styles.** The 7–10 pages are
  picture-led with huge touch targets; the adult pages are dense documents.
  This one keeps the adult layout — a scrolling document with a contents list —
  at a larger size, with more air, because it is read across a table.
- **No input fields anywhere.** The productive halves are spoken, so what the
  page hides is an *example* answer and a follow-up question — both for the
  teacher to hand over once the learner has had a real go, not a box to type
  into and not an answer key.
- **The recall table is the only part that tests**, and it runs the other way
  round from the whole page: Chinese showing, English hidden, the 🔊 hidden
  with it so the answer cannot be had without reading it. It comes last on
  purpose. The English keeps its space rather than being removed, so the
  column width does not give the length of the word away.
- **Green marks what the learner produces** — the frames and the questions.
  **Orange marks what is held back**: the natural version of a sentence, and
  the hidden English in the recall table.
- **"Say it more naturally" is the notes' own lesson.** *Boys always talk about
  robots* and *soybean milk* were both corrected in class; the page keeps the
  first version on screen and makes you ask for the second, because noticing
  what is odd about a sentence is the exercise.
- **Voices are ranked, not wished for** — the same ranking as Number Lab, minus
  its preference for a young voice: a clear adult American voice suits a
  twelve-year-old better than the one the seven-year-olds get.
- **Nothing is scored and nothing is saved.** Only the voice, the speed and the
  Chinese setting persist, under `ct.*` in `localStorage`. **Print** gives the
  notes back: everything open, the machinery gone.

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
- **Lesson notes live alongside the worksheet.** What was actually said in a
  session — vocabulary that came up, corrections, polished versions of the
  client's own sentences — belongs with the section it relates to. Short
  write-ups go inline behind a `part` divider; a full session gets its own
  dated page. Either way the printed worksheet and the record of the
  discussion stay visibly separate.

### Session pages

A session write-up can run longer than the worksheet section it hangs under,
so each one gets a dated directory:

```
public/business-clarity/2026-08-10/
```

The page shares the worksheet's `style.css` and `render.js` and supplies only
its own `content.js`. That file leaves out `fields`, `purpose` and `feedback`
and adds `crumbs` instead — a breadcrumb back to the worksheet and to the
section the session hangs under. The renderer takes the absence of `purpose`
as the signal to draw a session cover rather than a worksheet cover. Sessions
are listed from the parent section with a `sessions` block.

## Basic English Grammar — adult, fifteen chapters

The one page here built to grow rather than to be finished. Fifteen chapters
and 133 numbered sections, following the syllabus of *Basic English Grammar*
(Azar & Hagen, 4th edition) — the order Lewis teaches in — from the forms of
*be* through to making comparisons.

**The book is not reproduced.** Chapter and section headings follow its
syllabus, because that is the map; the explanations, examples and practice on
each page are written for this site, which also lets the examples be about a
Taiwanese adult's working week rather than Azar's.

### The shape

```
public/grammar/
  book.js       the whole map: 15 chapters, 133 section titles, what is built
  style.css     shared by the hub and every chapter
  render.js     the chapter renderer
  hub.js        the contents page
  ch01/         one folder per chapter: a thin index.html and a content.js
  ch13/         Modals, Part 2 — all nine sections written
  ch14/         Nouns and Modifiers — all eight sections written
```

Adding a chapter is three steps: write `chNN/content.js`, copy any existing
chapter's `index.html` unchanged, and flip `built` in `book.js`. Nothing else
moves — the contents page, the sidebar, the anchors and the prev/next links all
read the map.

- **A chapter's content file holds blocks and nothing else.** Titles live once,
  in `book.js`. A section listed there with no blocks written renders with its
  real heading and a line saying so, and is struck through in the sidebar — so
  the page always matches the book's contents and the site doubles as the
  to-do list, the way the campaign speech does with its unanswered questions.
  A section number in a content file that the map has never heard of throws
  rather than silently rendering nothing.
- **Two ways to be wrong, because four options cannot test word order.**
  `mcq` is a sentence with one blank; `order` gives the Chinese and a pool of
  words to tap into place. Word order is what actually goes wrong for a
  Mandarin speaker, and *I busy* is not a question with four choices.
- **The form chart is the block that carries the page.** Subject, the form of
  the verb, the rest of the sentence — three columns, so the eye runs down the
  middle one and sees the single thing that changes. The odd row out (*am*
  with *I*) is marked in gold, because that is the row learners get wrong.

### Design notes

Same house rules as the other adult pages — English leads with Chinese behind a
中 chip, nothing scored, nothing saved between students, wrong answers wobble
and stay open, 🔊 on every English sentence, the same faint 👩‍🏫 panel, and
**print** gives a handout with every answer filled and the machinery gone.
Three things are specific here:

- **The palette is the book's own brick red**, sampled from its chapter banners
  and chart headers, rather than the TOEIC page's navy — two grammar pages on
  one laptop should not be told apart by their titles alone. Red being the page
  colour has a consequence: an incorrect example can no longer be red, because
  red now means "heading". So a ✕ example is grey and struck through, which is
  the decision Anny's notebook already made for its corrections. Green still
  means right, which is unambiguous against red.
- **The Chinese setting is shared across the whole course**, under `beg.*` in
  `localStorage` — a teacher who turns it on for a client should not turn it on
  again in every chapter. It is a device setting; no lesson state is kept.
- **A word taken back takes the words after it.** They were only correct in the
  order they were placed, so restoring them would be a lie about what the
  learner had got right.

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

- **English leads, Chinese waits.** Every English sentence on the page has a
  Traditional Chinese counterpart — the reading, the 56 example sentences, all
  17 gap-fill sentences, every discussion starter and sentence frame, the
  tick-list, and the teacher panel itself. It is hidden behind a small 中 chip;
  the 中文 switch in the bar reveals the lot. Instructions, task prompts, the
  contents list and anything already sitting behind a deliberate reveal stay
  bilingual — those are scaffolding, not comprehension practice.
- **The gap-fill Chinese is a complete sentence.** A translated gap sentence
  expresses the missing phrase in full rather than leaving a blank, so it reads
  as Chinese rather than as a puzzle. It therefore carries the answer: on those
  items the 中 tap is a hint the teacher chooses to give, not something the
  learner opens for comprehension. The matching halves and the answer chips are
  still left in English, since each is glossed on its own phrase card.
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

## Happy Sexy Millionaire — adult, teacher-led reading

A business-English reading lesson for working adults, built around the story
behind Steven Bartlett's book: a bedroom start-up taken public at
twenty-seven, and the admission that followed. Four steps — the passage, the
money vocabulary, the language for having been wrong, and a two-minute talk.

The book is not reproduced. The passage is a five-paragraph summary written
for this lesson, and it is the vocabulary that carries the page.

| Activity | Skill |
| --- | --- |
| 📖 Reading with glosses | Meeting a target word inside real prose, not on a list |
| ❓ Comprehension | Reading for the point, not just the facts |
| 🗂 Phrase cards | Meaning and an example sentence, behind a tap |
| 🔗 Matching | Pairing the Chinese with the English collocation |
| ✏️ Gap fill | Choosing the phrase that fits a new context |
| 🗣 Opinion poll | Taking a side and defending it |
| 💬 Discussion | Talking through a question, with language to reveal |
| ⏱ Two minutes | Speaking to a prompt, ticking target phrases as they land |

### Design notes

Same house rules as [Three Habits That Build Wealth](#three-habits-that-build-wealth--adult-teacher-led),
whose renderer this page's is a copy of — English leads with Chinese behind a
中 chip, nothing is scored, nothing is saved between students, wrong answers
wobble and stay open, 🔊 on every English sentence, and the same faint 👩‍🏫
panel. Two things are specific to this page:

- **The gloss opens where the word is standing.** A target word in the passage
  is underlined, and tapping it opens its Chinese and an English usage note
  directly under that paragraph — never a floating card, which cannot be read
  from the back of a room. In `content.js` a target word is written
  `{{like this}}` inside the paragraph and matched by name against that
  block's `glossary`; a word with no entry falls back to ordinary text, so a
  typo costs you a highlight rather than the page.
- **A comprehension question keeps its wrong answers on screen.** Picking one
  dims it and leaves it legible, because *why was that one tempting?* is
  usually the more useful question. The right answer unlocks a short note on
  the point of grammar or usage underneath.
- **The steps fold**, the same way sessions fold on
  [Anny's Notebook](#annys-notebook--adult-one-to-one-kept-over-time). Step 1 is open
  on arrival and the rest are headings, so the whole lesson is one screen
  before it is one scroll. Tapping a heading is additive — the passage can sit
  open above the gap fill that uses it — while the contents list and a `#step`
  link are exclusive, so following a link lands on one step rather than on that
  step plus whatever was already open. Nothing about the fold is remembered
  between loads.

The notes deliberately separate the pairs that adult learners mix: *broke*
against *bankrupt*, *worth* against *valuation* against *revenue*, and *raise*
against *rise*.

The last step links across to [the book discussion guide](#book-discussion-guide--adult-four-books),
which takes the same book somewhere this lesson does not go.

## Book Discussion Guide — adult, four books

The 雙語讀書討論手冊 as a page: four books, three discussion questions each, and
the concept vocabulary behind them. Built for a book club or a one-to-one
session where the talking is the point.

It lives at `/aaron/book-club/`, under
[Aaron's notebook](#aarons-notebook--adult-one-to-one-kept-over-time), because
that is the client it is being used with. Two consequences worth knowing. It
carries `noindex, nofollow` even though nothing on it names anyone: a page
indexed at `/aaron/book-club/` would advertise that `/aaron/` exists, which is
the one thing the notebook's own `noindex` is there to prevent. And its cover
carries a breadcrumb back up to the notebook, the same pattern
`/business-clarity/2026-08-10/` uses. If the guide is ever wanted as general
material again, moving the folder back to `public/book-club/` means fixing four
relative paths — the logo in `index.html`, the `link` block in `content.js`, and
the two blocks that point at it from `/happy-sexy-millionaire/` and `/aaron/`.

| # | Book | The argument |
| --- | --- | --- |
| 01 | Happy Sexy Millionaire · Steven Bartlett | The cost of chasing the wrong goals |
| 02 | The Wealth Ladder · Nick Maggiulli | Different wealth levels demand different strategies |
| 03 | Less Is More · 本田直之 | Subtraction as a path to genuine freedom |
| 04 | Rewire · Nicole Vignola | Change begins with understanding your brain |

A fifth section, The Common Thread, puts the four in one line each and closes
with two questions across the whole set. Book 01 links across to
[the full lesson](#happy-sexy-millionaire--adult-teacher-led-reading), which
takes that book through a reading passage and the language work; the two pages
point at each other.

### Design notes

Same house rules as the other adult pages — English leads with Chinese behind a
中 chip, nothing saved between students, 🔊 on every English sentence, the same
faint 👩‍🏫 panel. What is different is that there is **nothing to answer**: no
gaps, no matching, no right answers anywhere on the page. The only three things
that move are a glossary card, a list of useful language, and the Chinese.

- **The questions are the guide's, the sentence starters are not.** Each of the
  fourteen questions comes from the handbook; the three starters under each one
  are written for this page, because a good question with no way into English
  stalls a session.
- **A glossary card carries both languages.** The English term is face up; the
  Chinese term and both definitions are behind the tap. Once a card is open it
  stays bilingual — it is already behind a deliberate reveal, and a second tap
  there would only be in the way.
- **The books fold**, the same way sessions fold on
  [Anny's Notebook](#annys-notebook--adult-one-to-one-kept-over-time). Book 01
  is open on arrival and the other four are headings, so the guide is a book
  list before it is a scroll. A closed book still shows its English title, its
  Chinese title and its one-line argument — enough to choose from. Tapping a
  heading is additive, so two books can sit open side by side; the contents
  list, the URL hash and the four links in The Common Thread are exclusive.
  Nothing about the fold is remembered between loads.
- **A book's Chinese title never hides.** Unlike every other line on the page it
  ignores the 中 chip, because it is the book's name — how it is asked for and
  looked up — not a translation the reader is meant to try without.
- **The teacher panel has two actions instead of an answer key**: *Open every
  book* unfolds the guide, and *Open everything* also turns over every card and
  opens every list of useful language.
- **Print** gives one book per page, with every book unfolded, every card and
  starter list opened and the cross-page links dropped.

## A Five-Minute Campaign Speech — adult, reading aloud

Reading practice built on a bilingual speech: the candidate's own five-minute
address for the 52nd President of JCI The Port, 62 sentences long, followed by
the nineteen questions from the election floor. The text is reproduced as
written — this page is practice, not an edit of his words.

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

### The Q&A

Nineteen questions, each a card: the question, then the answer as ordinary
practice lines. Ten are answered — 42 lines in all; **nine are still to be
written** and say so on the card, so the section doubles as his to-do list.

- **The question is context, not practice.** It is asked *to* him, so it stays
  bilingual in both modes. Only the answer beneath it hides a language.
- **Each answer has its own ▶**, and the Q&A section has no section-wide one:
  ten answers back to back is not a unit anyone needs to hear. The run is
  scoped to the nearest container holding lines, so one button drives both.
- **A contents list opens the section**, two columns, with the nine unanswered
  questions dimmed and struck through. The sidebar keeps one entry for the
  whole section — nineteen more would bury the speech.
- The English is a free adaptation of the Chinese rather than a translation,
  so a few lines pair one Chinese paragraph with two English sentences. Three
  English sentences have no Chinese counterpart at all and are carried on the
  end of the neighbouring line.

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

## Sentence Upgrades — adult, one-to-one homework review

The seven sentences one student wrote in the class of 25 July 2026, each with
the revision from the handout, a note on what changed and why, and the
collocations that came with it — 37 in all. Where the other adult pages teach a
text, this one is the student's own writing handed back.

The student is Anita, confirmed from the recording of 7 August 2026, where she
reads sentence 1 aloud off this page. Her notebook links to it from both
sessions — see [Anita's Notebook](#anitas-notebook--adult-one-to-one-kept-over-time).
The page itself stays anonymous and carries no name, so the link only runs one
way: from the `noindex` notebook out to this page, never back.

| Piece | What a tap does |
| --- | --- |
| ✏️ Your sentence | Speaks it — the original, reproduced as written |
| 🔍 Where would you change it? | Marks the spans that changed, and stops there |
| ✅ Show the revision | Opens the revised sentence, the note, and the phrases |
| ①② Numbered changes | Tapping one lights it *and* its counterpart in the other version |
| 🗂 Phrase cards | The Chinese behind a tap |
| 📋 All 37 collocations | One list with the meanings covered, for self-testing |

### Design notes

- **The two sentences are the page.** Everything else is set smaller and
  quieter, so the eye goes to the line being worked on.
- **Two reveals, not one.** Marking the changes is the hint and showing the
  revision is the answer, which leaves room for the student to say what he
  would change before being told. Both toggle, so a sentence can be shut again.
- **The phrase list waits for the revision**, as it does in the handout. Left
  on screen it answers the question before it is asked — *a strong sense of
  self-efficacy* is change 2.
- **Colour, not red pen.** The original's changed words sit in gold and the
  revision's in green, numbered so the pair matches at a glance; lighting one
  pushes the others back. Nothing is crossed out — the original is the
  student's own writing, and this is a lesson, not a marked script.
- **What the handout did not contain is said so on the page.** The two
  sentences and the phrase lists are the handout's; the note under each
  revision explaining what changed and why was written for this page, because
  on a page nobody is standing there to explain it.
- **The sentences carry no Chinese.** He wrote them, so he knows what he meant.
  Chinese waits behind the 中 chip everywhere else, as on the other adult pages.
- **Nothing is scored and nothing is saved**, and **print** gives a handout:
  both versions open with the changes marked, every note showing, the machinery
  gone.

## Robot Helper — high school, exam writing

The 113 學年度 writing task — *choose one of three teenage problems and describe
the robot helper you would design* — taken apart into the six things a student
has to be able to do. The handout it comes from is five parts and one sample
essay; this adds the two the paper could not have, which are seeing the essay's
structure and writing your own.

| Part | What it asks for |
| --- | --- |
| 範 The sample essay | Read it, then switch the structure on and see each sentence's job |
| A Translate the sentences | 18 sentences 中→英, with a hint before the answer |
| B Challenge translation | The same content as one paragraph — the joins are the task |
| C Sentence patterns | The 10 frames behind the essay, each with a fresh example |
| D Key vocabulary | 25 words, Chinese on the front, grouped as the essay uses them |
| E Bonus challenge | Three open questions, sentence starters, one possible answer |
| ✍ Write your own | A 120-word answer, a live word count and a seven-point check |

### Design notes

- **The Chinese is the prompt and the English is the answer**, which is the
  reverse of every other page here. So the Chinese sentence is set large and
  always on screen, and the model English stays behind a button — showing it
  for free would delete the task. Explanatory Chinese still hides behind the
  中 chips.
- **Two steps before the answer.** The hint is what a teacher says when someone
  is stuck: the word to reach for, the trap the sentence sets (*among* not
  *between*, `such as` wanting three matching `-ing` forms). Getting there on
  the hint alone is worth more than reading the answer.
- **Nothing is scored.** Once an answer opens, the page lists the words the
  model sentence used and the student's version did not — a reading list, not a
  mark, with no percentage and no red. When nothing is missing it says so.
  Endings are forgiven in the student's favour, so *picture* counts as
  *pictures* and *taking* as *take*.
- **The two numbers are not marks either**: how many of the eighteen have been
  written, and how long the essay is. The second is the exam's own requirement.
- **What is typed is kept**, in this browser only, and survives a reload — a
  student who has written eighteen sentences should not lose them to a stray
  tap. Nothing is uploaded, there is no account, and the teacher panel's one
  destructive button asks before it wipes.
- **Structure is a switch, not permanent colour.** Read the essay as English
  first; turn the structure on and it becomes a plan. Gold is the problem half,
  green the solution half, everywhere on the page.
- **Print gives two documents from one stylesheet**: print it untouched for a
  blank worksheet with ruled space to write in, or open everything from the
  teacher panel first for an answer key.

## 學測英文寫作 — high school, seven years of the exam essay

Where Robot Helper drills one year, this is the map: 109 to 115 學年度 side by
side. The seven questions with what each actually asked, the trends, the five
question types, all seven model answers annotated sentence by sentence, the
patterns that recur across every year, and the sentences worth memorising
because they work whatever the topic is.

| Section | What it holds |
| --- | --- |
| 一 七年題目一覽 | The seven questions, their type, how many pictures, and the real task |
| 二 題型趨勢 | What is being tested behind the friendly topics |
| 三 五大作文類型 | Five types, each linked to the years that used it |
| 四 七篇範文 | Seven essays, each with a switch showing what every sentence does |
| 五 跨年共通模式 | The moves that recur, counted out of seven |
| 六 四種必練句型 | Four frames, Chinese on the front |
| 七 共用句庫 | Opening, position and closing sentences as practice cards |
| 八 怎麼練 | The five-step practice order |

### Design notes

- **Chinese is the body text, not a gloss.** The reader is a Taiwanese
  student, so the explanation language is Chinese at full size and the English
  is the specimen being examined. That is the reverse of the adult pages and
  the same direction as the phonics handbook.
- **The page disagrees with its own source in four places, and says so.** The
  handout implies the model essays are 大考中心 佳作 — they are not, and a red
  box says so and points to the real ones. Its `(ceec.edu.tw)` markers appeared
  on four of seven rows, implying the other three were less sourced when the
  opposite is true, so they are gone and a picture count took their place. Its
  112 summary dropped the constraint that made that year hard (pick one or two
  of the four emoji printed on the paper), which is restored as a ⚠ trap note.
  Its stated 130–170 word range is wrong; the essays run 162–180.
- **跨年共通模式 is not in the handout at all.** It comes from labelling all 80
  sentences and counting: 轉折, 說明影響 and 結論收尾 appear in all seven
  essays; 結論收尾 is the last sentence every single time; and
  排除錯誤想法 → 轉折 is adjacent in all four essays that use it. Every count on
  that section is out of the same seven essays, so a student can check it.
- **One shared vocabulary of fifteen moves**, used identically across all seven
  years — that is the whole point, and it needed a consistency pass to hold.
  Each paragraph's plan (`定調開場 → 描述圖片 → …`) is one-to-one with its
  sentence cards, so the chain is a real map rather than a summary.
- **115 carries a warning its structure does not deserve.** Its birth-rate
  argument was the most common answer that year; the note tells students to
  steal the skeleton and bring their own content.
- **Cross-linked with Robot Helper** from the 113 essay, since that year has a
  whole page of practice on this site.

## Sort Before You Speak — adult, IELTS Speaking Part 3

Structure practice for a one-to-one IELTS candidate whose problem is not ideas
but order. Built from a recorded Part 3 answer in a real lesson: the organised
answer is taken apart into cards, and he has to put it back together into two
or three buckets before he is allowed to speak.

The student is not named. Both worked questions came out of the same recording,
and no idea has been added to either — the page rearranges his material, it does
not improve it.

| Step | What happens |
| --- | --- |
| 1 開口前的十秒鐘 | Why order beats quantity, and five sentences that buy thinking time |
| 2 四種結構 | Four answer shapes, each with its buckets and the line that announces them |
| 3 第一題 | Fourteen of his own points, sorted into concede / argue / solve |
| 4 第二題 | Twelve points into the three categories his answer already had |
| 5 換你來 | Three unseen questions: pick a shape, fill the pad, speak |

### Design notes

- **The sort is the exercise.** Tap a point, tap a bucket. A point that fits
  lands and shows why; a point that does not wobbles, shows why anyway, and
  stays in the pool. The reason line is the teaching — it says what the bucket
  is *for*, not just which one is right.
- **One card in Question 2 takes two buckets.** "Every review uses the same
  handful of words" is a pattern in the writing and a sign of one person behind
  several accounts, so `bucket` accepts an array and either answer lands. Its
  reason line says so, which is the point: the sort has a defensible edge case
  to argue about.
- **The model answers are his own sentences reordered.** Each is split into
  parts carrying their bucket name, spoken whole or part by part, and sits
  behind a reveal so the sort happens first.
- **Two clocks, neither a score.** Thirty seconds counting down to cap the
  planning, then a count-up that turns green at 0:40 and amber at 1:15 — the
  band a Part 3 answer should land in.
- **The planning pads are plain inputs that nothing reads.** No storage, no
  restore; a reload is a clean lesson, which is what you want between two
  clients on one laptop. Only the voice, speed and Chinese settings persist.
- **Bucket names stay bilingual.** Unlike the other adult pages, section
  labels are not behind the 中 chip — a bucket you cannot read is not a bucket.
  Everything the learner is actually being asked to understand still is.
- **Print** gives a handout: every reason, model answer and idea list opened,
  the clocks dropped, and the planning pads reduced to ruled lines to write on.

## IELTS Speaking — adult, all three parts

The second page here built to grow rather than to be finished. The Speaking
test is three conversations, not one, so the course is three parts with their
own lessons under each — and the contents page shows the lessons that are not
written yet, dimmed and dashed, the way the grammar book does.

Separate from `/ielts-part3/`, which stays where it is: that page is one
lesson built from one student's recording, and nothing links the two.

### The shape

```
public/ielts-speaking/
  course.js      the whole map: three parts, every lesson, what is built
  style.css      shared by the contents page and every lesson
  render.js      the lesson renderer — eleven block types
  hub.js         the contents page
  _template/     a working page showing every block type, linked from nowhere
  answer-shapes/ one folder per lesson: a thin index.html and a content.js
```

Adding a lesson is three steps: `cp -r _template <id>`, write its
`content.js`, and flip `built` in `course.js`. Lesson folders are flat rather
than nested under a part, so ids are unique across the whole course.

- **The part is data, not markup.** A lesson names its id; the renderer looks
  it up in `course.js` and takes the part from there. That is where the
  `Part 2` kicker on question and cue cards comes from, and both clocks: Part 2
  gets a full minute of preparation and a 1:30–2:00 band, Part 3 gets thirty
  seconds and 0:40–1:15, and Part 1 — which has no thinking time — drops the
  planning clock entirely. No lesson file states a timing. An id the map has
  never heard of throws on load rather than rendering something quietly wrong.
- **The palette is the IELTS red**, so the course is recognisable at a glance
  and is not mistaken for the grammar book's brick red or the business-English
  navy. `--brand` is the mark itself; `--navy` keeps its house name and holds
  the same red deepened enough to stay readable as body text on the warm paper.
- **Three block types were added for question-bank material.** `qbank` is a
  topic's questions with a button that pulls one at random and will not pull it
  again until the bank is empty — a button that can hand you the same question
  twice is worse than no button. `bank` is the two-column phrase table, with
  the Chinese behind a tap like every other line. `sentences` is a numbered
  spoken list. `cue` draws a Part 2 candidate task card.

### Part 3 — commerce and trust

Five lessons from one set of practice material: a structures lesson holding the
four answer shapes, the six universal frames and ten high-value sentences, then
four topic lessons — Online Reviews (15 questions), Customer Service (15),
Consumer Behaviour (10) and Business Reputation (10), each with its own
collocations, useful sentences and a worked speaking pattern. Teach the
structures lesson first; the four topics then rehearse the same shapes four
times rather than explaining them once.

**The question translations are the site's, not the source's.** The material
gives Chinese for the phrase banks and the frames but the questions in English
only, so the Chinese for all fifty questions was written here. Each lesson
cover says so.

Parts 1 and 2 are mapped but not written — nine lesson cards sitting dimmed on
the contents page.

### Design notes

Same house rules as the other adult pages — English leads with Chinese behind a
中 chip, nothing scored, nothing saved between clients, 🔊 on every English
sentence, and the same faint 👩‍🏫 panel. Settings live under `ielts.*` in
`localStorage` and are shared across the whole course, so a teacher who turns
the Chinese on for a client does not turn it on again in every lesson.

## 國中英語精熟 — Grades 7 to 9, 單字 and 文法 in one page

Everything a Taiwanese junior-high student is asked to memorise, from Lewis's
own 講義: the vocabulary and the grammar that goes with it, as two halves of
one page at `/junior-high/`.

| Grade | 單字 | 文法 |
| --- | --- | --- |
| 七年級 | 400 words, 第一冊 + 第二冊 by 課次 (康軒) | 14 units |
| 八年級 | 289 words, by 文法主題, edition-independent | 12 units |
| 九年級 | — | — |

The two grades are grouped differently because the two 講義 are: the 七年級
books follow 康軒's lessons, the 八年級 ones drop 課次 entirely and group by
grammar topic so they work across editions. The 目錄 heading is what the page
reads to build its grouping, so neither is hard-coded. 九年級 has its tab
already and shows a "還沒進來" note until its PDFs arrive, rather than an empty
list.

### The two halves

It was two pages for one day, and merging them was the right call: a student
should get one URL, and switching should not reload.

| | 📚 單字 | ✎ 文法 |
| --- | --- | --- |
| An item is | one word: KK 音標, 詞性, 中譯, an example both ways | one grammar point |
| | | 一句話重點, 核心規則, 句型對照, 常見錯誤 |
| Practice | 📝 小考 — 10 questions a 課 | 📝 練習 — 8 questions a unit |
| Question kinds | hear→中譯, 中譯→English, 中譯→spell it | fix it, *why* the fix, 中譯→句型 |

Switching halves keeps the grade, the mode, the voice, the mask, and **a quiz
left open on the other side** — both halves' DOM is built at once and `<body
data-section>` decides which one shows, so switching costs nothing. Only a
change of *grade* rebuilds.

**一句話重點 is moved to the top of a unit.** The PDF puts it last, as a
summary. On a scrolling page the last line of a unit is the one nobody reads,
and it is the line most worth reading first — so it sits under the heading and
the rest of the unit explains it.

### How the halves join

Per-課, in both directions, and the map exists **once** — as `lessons` on each
grammar unit:

- ✎ **文法** on a 課 heading → the unit covering it.
- 📚 **B1 L3** / **單字主題 3** in a unit heading → that 課 in the word list.

The word list carries no copy of the map; it knows its own 課 id and asks. The
two books name the reference differently (七年級 `B1 L3`, 八年級 `單字主題 3`),
and one `lessonAnchor()` normalises both to the word list's own ids.

Anchors are `#w/<grade>/<課次>`, `#g/<grade>/<unit>`, and `#g/for-<課次>` for
"the grammar for this 課". **The grade is part of the anchor** because a unit
id (`u1`…`u14`) exists in more than one grade. The two old URLs,
`/junior-high-words/` and `/junior-high-grammar/`, are now redirect pages that
translate their old hashes into this scheme — they had been handed out, so they
stay.

### Design notes

- **The palette follows the half** — teal for 單字, violet for 文法, set on
  `body[data-section]` so every chip and rule that reads `var(--brand)` follows
  without an extra selector. When these were two pages the reason was that
  pages open side by side should not be told apart by their titles; merged, the
  reason is that a colour change is the fastest signal of which half you are
  in. Both stay well clear of red and green, which 常見錯誤 needs for ✕ and ✓.
- **The wrong sentence is struck through and grey, not red.** A strike survives
  a black-and-white printout; red prints as dark grey and stops meaning
  "wrong". Same decision Anny's notebook made for its corrections.
- **The mask is a block of colour, not a blur.** A blur still gives away the
  length and shape of a word, and text that blurs and unblurs shifts the line.
- **A word row is a grid, not a table** — it has to stack into a card on a
  phone and print as a 講義 row on paper, and one `grid-template-columns` swap
  does both.
- **Chinese explanation is never hidden by either mode.** 核心規則 and 為什麼
  are the textbook's own voice, not something a student is meant to produce.
  教學 mode hides what they should be able to work out: a 中譯, a 句型's
  Chinese, a mistake's 正確寫法.
- **English inside a Chinese rule is set in the English face**, in the page
  colour — `dog → dogs`, `I → am`. Done by a regex over the rendered string, so
  the content files stay the plain text the PDFs gave us.
- **Neither practice block has a question bank.** Questions are drawn from the
  same data the page displays, so editing a word or a mistake edits the
  practice too. Grammar distractors always come from the same unit — four
  reasons about one grammar point is a real question, whereas reasons pulled
  from across the book can be eliminated on sight. They are de-duplicated,
  which is necessary and not merely defensive: 八年級 文法 5 has two different
  wrong sentences with the same correction.
- **A wrong answer wobbles and invites another go.** Nothing is timed or
  scored; the end screen lists what to look at again, not a mark. Ticks live in
  the student's own `localStorage` under `jh.*` — and the old per-page keys are
  migrated on first load, so nobody lost their progress in the merge.
- **Deep links jump, they do not animate.** `jumpTo()` turns off
  `scroll-behavior` and computes an absolute position: a smooth scroll across
  forty thousand pixels either takes seconds or gets cut short, and right after
  a re-render the old scroll position can exceed the new document height, which
  makes `scrollIntoView` land in the wrong place.
- **Print gives a handout of the half on screen**: every answer open, every
  mask lifted, the 🔊, ✓ and practice blocks gone, and 只看還沒打勾的 ignored
  so a 課 prints whole.

### Where the content comes from

```bash
python3 tools/parse_kanghsuan_pdf.py 九年級單字講義.pdf > w9.json
python3 tools/build_words_content.py w9.json          # -> words.js
python3 tools/parse_grammar_pdf.py 九年級文法講義.pdf > g9.json
python3 tools/build_grammar_content.py g9.json        # -> grammar.js
```

Each pair is parse-then-build rather than one step, so that a re-parse can
never quietly overwrite a file that has been hand-corrected since. Splice the
output into that grade and flip its `ready` to `true`; nothing else moves,
because the tabs, the nav, the counts and the practice all read those arrays.

Both parsers rebuild the pages from **character coordinates**, not from
extracted text, and both cross-check themselves against the 目錄 and **raise**
on disagreement — a silently short 課 is the failure that would survive review.
The reasons text extraction is not enough:

- **Word tables**: a wrapped 中譯 cell and the example sentence beside it land
  on the same line and are indistinguishable once flattened. The six columns
  are found by clustering x-positions rather than hard-coded — 八年級 pushes
  中譯 from x=374 to x=404 to fit `go (went, gone)`.
- **Grammar pages**: a line's runs do not arrive in reading order — the •
  glyphs are drawn after the text they belong to, and pypdf reports the
  *line's* starting x for every run in one show-text operation, so several runs
  share an x. Sorting a line by `(x, seq)` puts it back.

Four repairs worth knowing about if something ever looks off:

- Kerned capitals arrive split (`T oday` → `Today`).
- A Latin word butted against CJK loses the space the PDF draws
  (`女人（複數 women）`).
- Grammar runs are kept **unstripped**: a run often ends with the space before
  the next one (`'How many '` + `'+'` + `' 複數名詞'`), and stripping it welds
  them into `How many+複數名詞`.
- Three rows in the 八年級 word book emit **one text run spanning two cells**,
  so the example arrives glued to the tail of the 中譯 (`…… Call me as soon as
  you arrive.`). It is split back off, but only when the example column came up
  empty — so a row that parsed normally can never be damaged by the repair.

## Fab English — adult, teacher-led, a plant's own word list

The 288 words on a semiconductor plant's internal vocabulary sheet: English
term, part of speech, Traditional Chinese gloss. A reference as much as a
lesson, because the learner already has the printed sheet — so this page has to
be better than the sheet, not the same thing on a screen.

Three things were added and are not in the source:

- **Eight themes.** The sheet is A–Z, which is useless in a lesson: *acid* sits
  next to *active*. The words are regrouped by where in the plant you meet
  them, so a teacher can take one area per session.

  | | Theme | Words |
  | --- | --- | --- |
  | 01 | Wafers, process and materials 晶圓、製程與材料 | 33 |
  | 02 | The tool: running it and fixing it 機台：操作與維修 | 36 |
  | 03 | Moving material, and where things are 物料搬運與現場位置 | 35 |
  | 04 | Quality, measurement and yield 品質、量測與良率 | 40 |
  | 05 | Alarms, problems and safety 警報、異常與安全 | 29 |
  | 06 | Computers and systems 電腦與系統 | 39 |
  | 07 | Shifts, people and time 班務、同仁與時間 | 43 |
  | 08 | Documents, reporting and the business 文件、回報與公司業務 | 33 |

- **An example sentence for every word**, written for this page, short and in
  the word's plant sense — *"The lot is waiting in the stocker."*
- **Practice**, eight tap-to-fill gaps per theme, and a **search** that reads
  both the English and the Chinese.

The A–Z view is still one tap away in the bar, because that is the order the
learner's own copy is in.

### Design notes

- **English leads, Chinese waits.** The gloss is hidden behind a 中 chip on
  every card; the 中文 switch in the bar opens all 288 at once. The example
  sentence stays English only — that is the part the learner should work out.
  Section titles, notes, the contents list and the practice instructions stay
  bilingual: scaffolding, not comprehension practice.
- **The practice is generated, never authored.** Each gap is an example
  sentence with its own headword cut out; the three wrong options are other
  words from the same theme with the same part of speech, skipping any word
  already sitting in the sentence. So the drill cannot drift from the word
  list — edit a sentence and its question changes with it. The cost is that a
  distractor is only *grammatically* plausible, not always semantically, which
  in a lesson is the interesting case anyway.
- **Every example contains its headword verbatim**, never inflected. That is
  what makes a clean gap and a clean bolded word. If you edit a sentence, keep
  the headword in it unchanged — `tools/` has no script for this page, but the
  check is one line: every `ex` must match its own `w` (or its `k`).
- **One card per word, built once.** Switching between the theme view and the
  A–Z view moves the same nodes rather than re-rendering, so a word the teacher
  has opened stays open across the switch and the search is a plain show/hide.
- **Nothing is scored and nothing is saved.** Only the voice, the speed and the
  Chinese switch persist. Wrong answers wobble and stay open.
- The 👩‍🏫 panel adds one control the other adult pages do not have: **hide the
  example sentences**, leaving the word and the Chinese, so you can ask for a
  sentence before showing ours.
- **Print** gives the word list as a two-column handout with all the Chinese
  open; the practice is dropped, since on paper a tap-the-word exercise is just
  the answers.

### On the source

The sheet it came from is a client's internal document and carries a
confidentiality marking. The page keeps the words and the Chinese — ordinary
English vocabulary — but names no company anywhere, and carries
`noindex, nofollow`. Read the note in **Live sites** before pushing it:
`noindex` keeps a page out of search results, it does not make the URL private.

## Landscape Architecture Portfolio — a student's own work

The odd one out. Not a lesson and not bilingual: a portfolio a landscape
architecture student fills in with their own projects, in English, and prints
to PDF to attach to an application.

It ships **filled in**, as a study of Tadao Ando's Awaji Yumebutai (2000) — a
hillside quarried away for Osaka Bay landfill, hit by the 1995 earthquake, and
rebuilt as terraced gardens and water. Four parts: the cut hill, the Hundred
Step Garden, the Shell Garden, and the route up from the sea. A student reads
that first and then starts their own from
[`content.starter.js`](public/landscape-portfolio/content.starter.js), the same
page with the words taken out.

| Piece | What it does |
| --- | --- |
| 📐 Cover | Name, discipline, contact, and a drawn contour composition |
| 👤 Profile | A short statement, then dated blocks — education, experience, awards, software |
| 🗂 Contents | One card per project, each opening at its section |
| 🏞 Project | Specs down the left, three paragraphs beside them, then the drawings |
| 🔍 Lightbox | Any drawing full size; ← → move through that project, Esc closes |
| ⎙ PDF | Cover, profile and each project on their own page |

### Design notes

- **A missing picture draws itself.** Every image is `img/<name>.jpg` first; if
  the file is not there the `error` handler swaps in a drawn SVG placeholder
  naming the kind of drawing and the file it is waiting for — `plan`,
  `section`, `render`, `diagram`, `detail`, `photo` or `model`, each with its
  own schematic. So the template reads as a portfolio from the first minute,
  each real drawing appears simply by being dropped into `img/`, and nobody has
  to be told which file goes where. It is also why the images are **not**
  `loading="lazy"`: a lazy image below the fold is never requested, so it never
  fails, so it never becomes its placeholder — and the printed PDF would be a
  document of empty frames.
- **The PDF is the deliverable, not a courtesy.** What gets attached to an
  application is the print output, so it comes out of the same stylesheet: the
  bar, the guide and the lightbox go, the clickable contents grid is dropped as
  useless on paper, backgrounds are forced on so the drawings survive, and
  `break-before` puts each project on a fresh page.
- **A banner says the words are not yet the student's.** While `sample` is set
  in the content file, a line across the top says so — on screen *and* in print,
  so a half-finished draft cannot be sent by accident. `sample: true` gets the
  stock wording; a string replaces it, which the Ando study needs, because there
  the warning that matters is not "unfinished" but "this design is not mine".
- **The example is a case study, and says so everywhere.** The architect is
  named on the cover, in the banner, in every specification list and in the
  closing credits, and each part's `My role` says what was actually done —
  redrawing and reading, not designing. Presenting someone else's built work as
  your own is the one mistake a portfolio cannot survive, so the sample models
  the opposite.
- **The pictures divide the same way the credit does.** Four photographs come
  from Wikimedia Commons — all by 663highland, all CC BY 2.5 — and are credited
  under each picture *and* in the lightbox, because a CC BY image shown
  full-screen with its attribution left behind on the page underneath is not
  attributed. Twelve drawings are the study's own: schematic plans, sections and
  details authored as SVG, drawn to explain the landscape and never traced from
  anyone's drawings. None of Ando's own drawings, and no professional
  photography of the complex, is reproduced. Commons works here because Japan's
  freedom-of-panorama rule allows photographs of architecture in public places
  to be published freely, so these are properly licensed rather than merely
  available. [`img/CREDITS.md`](public/landscape-portfolio/img/CREDITS.md) holds
  the originals, the licence and the changes made.
- **A caption says what the photograph shows, not what the argument wants.** The
  stair photograph sits in the part about circulation, and its Commons
  description places it in Hyakudan-en — so it is captioned as Hyakudan-en. A
  caption that quietly moves a picture to where the text needs it is where a
  dishonest portfolio starts.
- **Where the sources disagree, the page says so.** The beds of the Hundred Step
  Garden are 4.5 m square in Japanese sources and 5 m in English ones, published
  site areas run from 21.4 ha to about 28 ha, and quoted tree counts for the
  replanting were too inconsistent to use, so none is given. All of that is on
  the page, under "A note on the figures" — which is the habit worth teaching.
- **The text is a shape to copy, not filler.** Each description is three
  paragraphs doing three jobs — the site, the problem, the move — and the notes
  at the top of the content file say so, ask for verbs rather than "the design
  features…", and ask for one number per paragraph. That is the part a student
  actually finds hard, and lorem ipsum would have taught it nothing.
- **A study of one work numbers its sections Part, not Project.** `unit: 'Part'`
  in the content file changes the section headings, the contents cards and the
  count together; `profile.head` renames the profile section, which is how the
  same three-column block layout carries a CV in one portfolio and the project's
  own history in the other.
- **The bar marks the section being read** by measuring, not with an
  `IntersectionObserver`: a project here is two or three screens tall, so
  several straddle any sensible trigger band at once and the observer reports
  whichever fired last.
- No Chinese layer and no teacher panel — the quiet ⓘ button explains the
  template to whoever inherits it, and deleting it and its panel from
  `index.html` is the last step before sending the portfolio out.

## Anny's Notebook — adult, one-to-one, kept over time

The other adult pages are lessons: built once, taught, done. This one is a
record of a client that grows. Each discussion adds one entry to the `sessions`
array in [`content.js`](public/anny/content.js) — no new folder, no new files,
no renderer edit — and the contents list, the numbering and the anchors all
follow from the array.

Session 1 is a one-hour discussion about leadership and coaching: a newly
promoted clinical sales manager whose technical strength is not in question and
whose communication has not moved with the job. It carries the twenty-four
expressions that came out of that hour.

| Piece | What it does |
| --- | --- |
| 🗂 Sessions | One folded section per discussion, newest open |
| ⚖️ Contrast | The same message said two ways — how it landed, how it could |
| 🗂 Phrase cards | Meaning and an example sentence, behind a tap |
| ✕✓ Corrections | Her own sentence, with the upgrade and the reason behind a tap |
| 🔗 Matching, ✏️ gap fill | The usual collocation work |
| 🗣 Poll, 💬 Discussion, ⏱ Two minutes | Reasons to talk |

### Design notes

- **Sessions fold, and that is the whole architecture.** A lesson page is read
  once; this one is read in December looking for something from August. So the
  newest session opens and the rest close, and a folded heading carries its
  number, its date and its title — enough to find a lesson without opening it.
  Which sessions are open is deliberately **not** remembered between loads: a
  reload is a clean start here exactly as it is everywhere else in this repo.
- **Two ways to open a session, meaning two different things.** A contents link
  or a URL hash means *take me to this one*, and folds the others, so
  `/anny/#s3` lands on session 3 rather than session 3 plus whatever was
  already open. Tapping a heading is additive and closes nothing, so a phrase
  from October can sit open beside one from August. The distinction is the
  reason `openSession` takes a `sole` flag.
- **The contrast block is the lesson, not decoration.** The whole hour turned
  on the difference between "Here is your problem" and "Here is what we're
  observing — help us understand." Both halves are correct English, so neither
  gets the red-pen treatment: the left is edged in the neutral rule, the right
  in green, and both are spoken aloud, because hearing the blunt version is
  half the point.
- **The corrections block holds her sentences, and only her sentences.**
  Session 1 does not use it. The source for that lesson was a cleaned summary
  with the speech-recognition noise already stripped out, so there is no
  reliable record of what she actually said, and inventing plausible mistakes
  to fill the block would have made the most trustworthy part of the page the
  least. It waits for real ones. When they arrive, the 🔊 sits on the corrected
  sentence only — the wrong version should not be the model going into her ear.
- **A mistake is a grey ✕, never red.** This page has no score and no failure
  state, and a page of red pen would be one.
- **`noindex, nofollow`.** The page carries a named client and, through her, a
  named-by-description report and a customer. It stays reachable by its URL for
  her and out of search results for everyone else. That is a mitigation, not a
  guarantee — see the note under *Live sites*.
- **Print unfolds everything**, from both a `beforeprint` handler and a CSS
  rule, because a handout of folded headings is blank paper and only one of
  those two fires in every browser.
- The sample banner is borrowed from the portfolio: setting `sample` in the
  content file puts a line across the top, on screen and in print, so a draft
  cannot be handed over by accident.

## Aaron's Notebook — adult, one-to-one, kept over time

The second notebook, on the same machinery as
[Anny's](#annys-notebook--adult-one-to-one-kept-over-time): a copied renderer
and stylesheet, a new content file, and one entry per discussion in `sessions`.
Everything in the design notes above applies here too.

Session 1 (17 August 2026) is a discussion of the book *Retire Often* that ran
from careers into sleep, training loads and side projects, and converged on one
question — how to design a life rather than maximise output. It carries twenty
expressions from that hour, six gap-fill sentences, and the homework the session
ended on.

Two things are new in this copy of the renderer:

- **The contrast block took two optional labels.** Anny's version hard-codes its
  columns as *As it landed* / *As it could land*, which is right for a message
  and wrong for anything else. `coldEn`/`coldZh` and `warmEn`/`warmZh` override
  them — here to *The instinct* against *The reframe*, which is the move the
  whole hour kept making. The defaults are unchanged, so nothing else breaks.
- **A `link` block**, the same one the two Happy Sexy Millionaire pages use.
  Session 1's homework question comes from *The Wealth Ladder*, so the block
  points at [`book-club/#ladder`](public/aaron/book-club/) for the summary and the
  vocabulary behind it — and because that page folds, the anchor opens the right
  book rather than landing on a closed heading.

The AMPK/mTOR note is written as *what was said in class*, with a line saying
the physiology was not checked afterwards. A notebook is a record; a record that
quietly upgrades a half-remembered claim into a fact is worse than no record.

## Anita's Notebook — adult, one-to-one, kept over time

The third notebook, copied from
[Aaron's](#aarons-notebook--adult-one-to-one-kept-over-time) rather than from
Anny's, so it starts with the `link` block and the optional contrast labels
already in place. Everything in the design notes above applies here too, with
one exception and one rename: the `localStorage` prefix is `anita.`, so the
notebooks do not share a voice or a Chinese setting, and **this page reads
newest first**.

That last one is the only structural difference from Anny's and Aaron's. The
`sessions` array is still chronological — append at the bottom, `n` counts up —
and the renderer reverses a copy of it (`ordered`) for the contents list and the
document. The array stays the source of truth for what "the newest" means, so
the open-on-load rule and the anchors are untouched. The other two notebooks
still read oldest first; changing them is a separate decision, since each page
is a deliberate copy.

Session 1 (7 August 2026) is a discussion of a new running specialty store her
company is opening — why a retailer would want its own brand influence rather
than the brands', what a niche position asks of the person on the shop floor,
and the unresolved question underneath it: how to run a store with fewer staff
without the layout quietly telling customers the stock is cheap. It ends on the
company's internal AI agent and a workshop on AI literacy.

Session 2 (14 August 2026) is the same shape three times over — using AI,
planning a group trip, and handing a training programme to a colleague. It
converges on delegation: more autonomy requires more clarity, and how much
freedom to give is decided by what happens if you do not step in.

The `fix` block is the argument for working from a recording. Both sessions
were written first from an organised summary, which is cleaned up and so carries
no record of anyone's exact wording — the rule from Anny's notebook holds: do
not reconstruct a student's sentence from memory, or the most trustworthy part
of the page becomes the least. Written that way, session 1 had no corrections at
all and session 2 had one. The Zoom transcripts of both hours arrived
afterwards, and the block now carries eleven of her own sentences in session 1
and nine in session 2.

The transcript is machine-generated and mishears freely, which sets the
selection rule: take only the lines where the error is unmistakably hers — a
missing verb, a tense, a preposition, a comparative — and leave the garbled ones
out rather than tidying them into a sentence she may not have said. Roughly ten
survive that filter per hour. There is a comment above each block saying so.

What the two hours have in common is the point of keeping a notebook per
student: `almost` for `most` in session 1, and `I am pass on` for `I have passed
on` in session 2, each recurring three or four times inside the same hour. A
summary shows neither.

One line on the cover is not boilerplate. Anita's feedback on the homework page
was that the generated voice lacks intonation, which is true, so the 🔊 line
says what the audio is good for — pronunciation — and points intonation back at
the lesson.

Both sessions carry a `link` block to
[`/sentence-upgrades/`](public/sentence-upgrades/), which is her own homework
from 25 July — the page Lewis showed her on 7 August and that she gave feedback
on a week later. Session 1's link sits under the five-step note, since those
steps are instructions for that page; session 2's repeats it with her own
finding attached, that the voice is flat.

## Eason's Notebook — teenager, one-to-one, kept over time

The fourth notebook, and the first one that is not for a working adult. Eason is
finishing junior high and starting senior high school. The machinery is copied
from [Anita's](#anitas-notebook--adult-one-to-one-kept-over-time), which is
where the comments already use *they* rather than *he* or *she*; only the
`localStorage` prefix changed, to `eason.`, so no notebook shares a voice or a
Chinese setting with another.

Nothing on the page is written down to him. What changed is the register — the
summaries run in shorter sentences, and the examples come from his own life
rather than from an office — and that is recorded at the top of
[`content.js`](public/eason/content.js) so the next session does not drift back
into the adult voice.

Session 1 (20 August 2026) is a diving trip to the Philippines that turns into
something else. The certificate came with ten units of theory to get through
online, and because the subject was safety it was the first course he could
neither skim nor hand to AI. Underwater he found a strength he had not gone
looking for. Then the hour moves to the 學習歷程 — why the entries are worth
writing one a month from year one rather than reconstructed from memory in year
three — and lands on the distinction he made himself: his blog records what he
saw, and a portfolio records what changed in him. The homework is the second
article, written next to the first rather than over it.

The session ends somewhere neither of us started: his diving instructor praised
something specific before mentioning what to fix, and he recognised that he does
the opposite when teaching a friend a game he is much better at. The `contrast`
block carries both — the travel diary against the portfolio entry, and the way
he coaches now against the way his instructor coached him.

The `fix` block is empty, and the comment in the file says why: the source was
an organised write-up, cleaned of repetition and transcription noise, so it
carries no reliable record of his own wording. The rule from Anny's notebook
holds — do not reconstruct a student's sentence from memory. A transcript would
fill it.


## Anna's Notebook — young adult, one-to-one, kept over time

The seventh notebook. Anna is eighteen to twenty, which is a register this repo
did not have: not the working-adult voice of `/anny/` and `/aaron/`, whose
examples come from an office and a career already under way, and not the plainer
register of `/eason/`, who is still at school. The rule written at the top of
[`content.js`](public/anna/content.js) is to write to someone who is an adult
but new to the subject — full sentences, nothing simplified, examples from her
life rather than from a job she does not have yet.

The machinery is copied from [Eason's](#easons-notebook--teenager-one-to-one-kept-over-time),
with the `localStorage` prefix changed to `anna.` so no notebook shares a voice
or a Chinese setting with another. Two things were changed rather than copied:

- **The scroll bug is fixed here.** Every earlier notebook's `markHere()` ended
  with `a.scrollIntoView({ block: 'nearest' })` on the contents link, which
  scrolls the *document* whenever the contents list is not itself scrolling, and
  did so dozens of times a second under an inherited `scroll-behavior: smooth`.
  Anna's uses `keepLinkVisible()` — container `scrollTop`, rect deltas, never
  the document — and has no root `scroll-behavior`, the same fix
  [Jill's](#the-page-does-not-scroll-itself) carries.
- **The `part` block came over from Jill's renderer.** It is a divider *inside*
  one session, a rule and a letter one level below the session heading. Anna's
  first source arrives already cut into an article plus four labelled sections,
  and without it Part B reads as the start of a new lesson. A session built from
  a conversation should not use it.

**The sessions here carry no date**, which Lewis asked for, and which no other
notebook does. `dateEn`/`dateZh` are therefore optional in this renderer: give
an entry both and the date line and the contents-list subtitle come back for
that entry alone; leave them out and neither is drawn — not left as an empty
element holding space, which is what the other notebooks would do. The
consequence is that **order in the array is the only record of sequence**, so a
lesson taught between two that already exist goes in its right place rather than
at the bottom, and everything after it is renumbered.

Session 1 is built from a bilingual handout on investing —
what an asset is, how stocks, bonds, funds and ETFs differ, why risk and return
are tied together, what compound growth and dollar-cost averaging actually mean,
and why fees of well under one percent still matter over decades. The reading
carries its own test, and the session is organised around it: *if you cannot
explain it in simple language, you do not understand it yet.* So the `contrast`
block runs vague against precise rather than the default cold/warm pairing —
"it's like a lot of stocks put together" against "an ETF is a fund that holds
many companies and trades on the market like a single stock" — and the closing
`task` asks her to explain one idea for a minute without reading off the cards.

The handout's own sections become the parts: **A** the habits the reading puts
*before* investing, carried by the `cards` audit; **B** its collocation tables,
as five groups of phrase cards plus a term-and-meaning `match` and a
choose-the-collocation `gap`; **C** its word-family table, as a `note` and a
gap set that tests the right *form* rather than the right meaning; **D** the
talking — a `poll`, five discussion questions, and the speaking task.

Two things are deliberate and should survive into later sessions on this
subject. The page teaches the language people use about money and recommends
nothing — no product, no market, no amount — and a `note` near the top says so
in both languages. And the `fix` block is absent, for the structural reason
given in the file: the source is a handout written *before* the lesson, so it
holds no record of anything Anna said. A transcript would fill it.


## Layout

```
public/                   Word Play — the site root
public/phonics/           Sound Lab, the phonics practice
public/phonics-handbook/  自然發音學習手冊, the interactive handbook
public/math/              Number Lab, the Grades 1–3 math practice
public/confidence-talk/   the 2026/07/11 class notes, ages 10–12
public/business-clarity/  the business worksheet
public/business-clarity/2026-08-10/  one session's notes
public/grammar/           Basic English Grammar — the hub and book.js
public/grammar/ch01/      one folder per chapter, a content file each
public/grammar/ch13/      Modals, Part 2 — the second chapter written
public/grammar/ch14/      Nouns and Modifiers — the third
public/wealth-habits/     the three-habits lesson
public/wealth-habits/img/ its four photographs
public/happy-sexy-millionaire/  the business-English reading lesson
public/campaign-speech/   the speech and election Q&A
public/toeic-grammar/     the TOEIC Part 5 & 6 practice
public/sentence-upgrades/ the 2026/07/25 homework review
public/robot-helper/      the 113 學年度 writing worksheet
public/exam-writing/      the 109–115 學測 essay survey
public/ielts-part3/       the IELTS Part 3 structure practice
public/anny/              Anny's notebook — one entry per discussion
public/aaron/             Aaron's notebook — same machinery, its own sessions
public/aaron/book-club/   the four-book discussion guide, under that notebook
public/anita/             Anita's notebook — same machinery again, two sessions
public/eason/             Eason's notebook — the same, for a teenager
public/anna/              Anna's notebook — the same again, for a young adult
public/jill/              Jill's notebook — one entry per weekly lesson
public/junior-high/       國中英語精熟 — 單字 and 文法, one page, Grades 7–9
public/junior-high-words/    a redirect: the 單字 half's old URL
public/junior-high-grammar/  a redirect: the 文法 half's old URL
public/fab-english/       the plant word list — 288 words, eight themes
public/landscape-portfolio/      the portfolio — filled in as the Ando study
public/landscape-portfolio/content.starter.js  the same page, emptied
public/landscape-portfolio/img/  4 Commons photographs, 12 SVG drawings, CREDITS.md
make-icon.py              regenerates public/apple-touch-icon.png
tools/                    the scripts that turn a 講義 PDF into either of those
```

All twenty-three are plain HTML, CSS and JS with no build step.

Every page ends with the same `<footer class="site-foot">` linking to
<https://lewistoeic.com>, so a reader who lands on any one sheet can find the
rest. It is copied into each `index.html` rather than injected by script, since
four of the pages have no shared renderer. Its stylesheet block is copied too,
and every colour goes through a fallback chain — `var(--ink-faint,
var(--ink-soft, #7a8290))` — because the children's pages and the adult pages
name their tokens differently. Each page therefore renders the footer in its
own palette, and a page missing a token still shows a readable link.

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

**自然發音學習手冊.** The whole handbook lives in
[`public/phonics-handbook/content.js`](public/phonics-handbook/content.js),
one entry per section, and the block types — paragraphs, callouts, chips,
pairs, tables, the cutting game, the 拆 cards, word families — are listed in
a comment at the top of the file. Each is one function in
[`render.js`](public/phonics-handbook/render.js).

A cutting-game word is written with its cuts as hyphens (`nap-kin`) — the
hyphens must spell the word back exactly, and digraphs (sh, ch, th, ck, ph,
tch) stay inside one chunk, as the handbook itself teaches. A chip is a bare
string, or `{ w, say, eg, note }` when the sound needs its own cue or an
example word. The `CUES` table at the top of the file is how a written sound
is spoken on its own; tune a line there if a device's voice mangles one.

**國中英語精熟.** The two halves are two data files:
[`words.js`](public/junior-high/words.js) (`WORDS`) and
[`grammar.js`](public/junior-high/grammar.js) (`GRAMMAR`), each one `grades`
entry per year. A words grade holds `books` → 課 → `words`, where a word is
`{ w, kk, pos, zh, en, zhEx }` and a phrase simply omits `kk`. A grammar grade
holds `units`, each with `lessons` (the 對應課次, which is also the join to the
word list), `key`, `rules`, `patterns` and `mistakes`. Filling in a grade is
replacing its empty array with the generator's output and setting
`ready: true`. Neither practice block has a separate question list — see the
section above.

Adding a *third* half would be one more entry in `SECTIONS` in
[`render.js`](public/junior-high/render.js): a label, its mask options, and the
three functions that build its nav, its blocks and its search. The shell —
bar, grade tabs, side nav, panel, speech, ticks, print — is section-agnostic.

**Fab English.** Everything is in
[`content.js`](public/fab-english/content.js): `FAB.groups`, one entry per
theme, each with an `id`, a bilingual title and note, and a `words` array. A
word is `{ w, p, zh, ex }` — headword, part of speech, Chinese gloss, example
sentence. Add `k` when the form used in the sentence differs from the printed
headword (`w: "Spec. / specification"`, `k: "spec"`).

The one rule: **`ex` must contain `w` (or `k`) verbatim, uninflected.** The
renderer uses that match twice — to bold the word on the card, and to cut it
out for the practice gap — so an inflected sentence silently loses both. Moving
a word between themes is a cut and paste; the practice, the counts, the
contents list and the A–Z view all follow. There is no question list to edit,
and no script in `tools/` for this page: the source was a plain two-column PDF
that `pypdf` reads correctly.

**Number Lab.** There is no question list to edit — every topic is a `make()`
in [`public/math/content.js`](public/math/content.js) that builds a question
each time it is called, and the numbers inside that one function are the
difficulty. Widening Grade 1's addition to twenty-five is one `rnd(1, 9)`.

A question is `{ ask, speak, figure, answer, choices, hint }`. `speak` is
compulsory and separate from `ask`, because the browser voice reads `24 + 8`
as "twenty four eight" — the operator is silent, so it has to be written out.
Leave `choices` off and the number pad is used instead; the answer must then
be something the pad can type. `hint` appears only after two wrong tries and
should point at the method, not the answer. The drawings — clocks, blocks,
arrays, fraction bars, coins, grid rectangles, number lines — are functions in
the same file; each returns an SVG string sized in its own units, and `svg()`
puts the width and height on it, without which it collapses to nothing.

The explanations are separate, in the `TEACH` block at the foot of the same
file — one array per topic id, hung onto the topics at the end so a generator
stays one job and the explanations can be read together, in order, as a
course. A step is `{ text, figure, say }`, and `say` is only needed when the
text has a symbol in it, for the same reason. The rules a new one should
follow are written above the block; the important one is that the reading
level stays at Grade 1 even where the maths does not.

Adding a topic is one object in `G1`, `G2` or `G3` plus its `TEACH` entry; the
grade screens build themselves from those arrays, and a topic with no
explanation simply doesn't offer the button.

**Confidence and Everyday Life.** The whole lesson is
[`public/confidence-talk/content.js`](public/confidence-talk/content.js): a
`groups` array for the vocabulary, then one object each for the collocations,
the classroom sentences, the naturalness pairs, the sentence frames, the
discussion questions and the recall drill. Every English string that carries
meaning takes a `zh`; labels and instructions are `en`/`zh` pairs too.

The recall table is built from `groups`, so a word added above appears in the
drill automatically — there is no second list to keep in step. The contents
list is built from a `PARTS` array in `render.js`, which is the only place the
order of the page is written down. In a sentence frame, runs of underscores
are drawn as gaps and spoken as *something*, so write them the length they
should appear.

Next month's notes are a new folder, not a new section here — the page is one
lesson, and its title, date and contents list all assume that.

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

**Happy Sexy Millionaire.** The lesson lives in
[`public/happy-sexy-millionaire/content.js`](public/happy-sexy-millionaire/content.js),
one entry per step, and its renderer is a copy of the Three Habits one with two
block types added. Everything above applies, plus:

A `passage` block holds `paras` and a `glossary`. Mark a target word inside a
paragraph as `{{market valuation}}`; the text between the braces must match a
`term` in that block's `glossary` exactly, or it renders as plain text. A
glossary entry wants a `zh` and a `def`, and `def` may use `<em>` and
`<strong>` — a usage note is unreadable without them. The same three fields
take HTML in a `note` body and in the `why` line under a gap or a quiz answer;
every other string is escaped.

A `quiz` block is the gap fill with the blank taken out: an `en`/`zh` question,
a list of `options`, the index of the right one in `answer`, and a `why` that
appears once it is found.

**Book Discussion Guide.** The four books live in
[`public/aaron/book-club/content.js`](public/aaron/book-club/content.js), one entry per
book in `GUIDE.books`. Every string is an `en`/`zh` pair, and there are no
answers to key in — the block types are `book` (author, tagline, summary
paragraphs, who it is for), `discuss` (a question plus the `starters` to reveal
under it), `terms` (a glossary card: `en`, `zh`, `defEn`, `defZh`), `strands`
(the closing one-liners, each pointing at a book by `id`) and `link`.

A book's `tagEn`/`tagZh` sit on the book itself rather than in a block, because
they are the one line that has to stay readable while the book is folded shut.

Adding a fifth book is one entry in `GUIDE.books` and one line in the closing
`strands` list. A `link` block wants an `href`, an `en`/`zh` label and an
`noteEn`/`noteZh` line; it is signage, so it never hides behind a 中 chip. The
same block type exists on the Happy Sexy Millionaire page, which is how the two
pages point at each other.

**Campaign Speech.** The speech lives in
[`public/campaign-speech/content.js`](public/campaign-speech/content.js), one
entry per section. Every string is an `en`/`zh` pair. There are only four
block types — `lines`, `subhead`, `say` and `qa` — listed in a comment at the
top of the file, and each is one function in
[`render.js`](public/campaign-speech/render.js).

A line takes `k: 1` if it is worth memorising. A `say` item wants the word, a
respelling in `say`, and a short Chinese tip in `zh`. Line numbers restart at 1
in each section — and at 1 again inside each `qa` answer — and come from the
renderer, so inserting a sentence needs no renumbering. Any other bilingual
text works here unchanged — swap the content file and the page is reading
practice for that instead.

**Answering the nine open questions.** A `qa` block with `pending: 1` renders
the question and a "回答待補" note. To fill one in, delete `pending: 1` and add
an `items` array of `en`/`zh` pairs — one per paragraph of the answer. Nothing
else changes: the index stops striking it through, the ▶ appears, and the
lines join both practice modes. A section takes `noPlay: 1` to suppress its
section-wide ▶, and a `lead` for the italic standfirst under its heading.

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

**Sentence Upgrades.** The set lives in
[`public/sentence-upgrades/content.js`](public/sentence-upgrades/content.js),
one entry per sentence. There are no block types — every item has the same four
parts, so an entry is `original`, `revised`, a `why` pair and a `phrases` list.

What changed is marked with `[[double brackets]]` in both sentences:

```js
original: 'It is [[a difficult task to train]] our employees [[with high]] …',
revised:  'It is [[challenging to help]] our employees [[develop a strong sense of]] …',
```

The two strings must carry the same number of marks, in the same order — mark 1
in the original became mark 1 in the revision, which is what lets a tap light
both. The renderer throws on a mismatch rather than pairing them wrongly.
Everything outside the brackets is text the two versions share, so keep it
identical or the sentences stop lining up. The closing review section is built
from the items, so adding a sentence adds its phrases to the table and its
revision to the read-aloud list with no second edit.

**Robot Helper.** The page lives in
[`public/robot-helper/content.js`](public/robot-helper/content.js) as a `parts`
array, each part naming its `kind` — `essay`, `translate`, `paragraph`,
`patterns`, `vocab`, `open`, `write`. Each kind is one function in
[`render.js`](public/robot-helper/render.js), and the renderer throws on a kind
it has no builder for, so a typo fails loudly rather than dropping a section.
Reordering the array reorders the page and its contents list.

A `translate` item is a `zh` prompt, the model `en`, a few `keys` to show as
chips, and a `hint` — the hint is what a teacher would say before giving the
answer away, not a translation of the note. An `essay` sentence carries a
`jobEn`/`jobZh` pair, which is what the structure switch reveals; the prose
version and its word count are derived from the same sentences, so there is no
second copy of the essay to keep in step. Swapping the whole content file makes
the page a worksheet for a different year's task with no change to the
renderer.

**學測英文寫作.** Same shape as Robot Helper — a `parts` array in
[`public/exam-writing/content.js`](public/exam-writing/content.js), each part
naming its `kind` (`years`, `trends`, `types`, `essays`, `patterns`, `frames`,
`toolkit`, `method`), one builder each in
[`render.js`](public/exam-writing/render.js), and a throw on an unknown kind.
The seven annotated essays sit in a separate `ESSAYS` const at the top of the
file so the year data and the page furniture stay apart.

Adding a year means one row in the `years` part and one entry in `ESSAYS`. The
important constraint is inside an essay: every sentence's `jobZh` must begin
with a move name from the shared fifteen, and each paragraph's `noteZh` chain
must list those moves in order, one per sentence. Break either and the page
still renders, but the section that counts moves across years starts lying —
so check the chain against the cards when editing. `pictures` is how many
images the real paper supplied, `caution` adds a red warning under 中文重點,
and the cross-link to another page on this site is `LESSON.practice`, matched
by year.

**Landscape Portfolio.** Everything is in
[`public/landscape-portfolio/content.js`](public/landscape-portfolio/content.js)
— name, contact, profile and projects — and the notes at the top of that file
are written for the student rather than for a developer. There are no block
types to learn: a project is a `name`, a `type`, a one-line `lead`, a `specs`
list of label-and-value pairs, a `text` array of paragraphs, and an `images`
list. Copy a whole project block to add a fifth; delete one to drop it.

That file currently holds the Awaji Yumebutai study. To start an empty one:

```bash
cp public/landscape-portfolio/content.starter.js public/landscape-portfolio/content.js
```

Three optional keys change the page's framing rather than its contents:
`unit` renames Project to Part throughout, `profile.head` renames the profile
section, and `sample` takes a string to replace the stock banner wording.

An image is `{ file, kind, caption }` plus `wide: true` to span the full width,
and `credit` for a picture that is somebody else's — the credit prints under the
caption and travels with the picture into the lightbox.
`file` is the name to save into `img/`, and `kind` only decides which
placeholder is drawn until that file exists — the seven kinds are one function
each in the `ART` table in
[`render.js`](public/landscape-portfolio/render.js), so adding an eighth is one
entry. Wide pictures are cropped to 16:9 and the rest to 4:3;
[`img/README.md`](public/landscape-portfolio/img/README.md) is the note the
student reads about export formats and sizes.

Nothing in the renderer knows anything about riverbanks or courtyards, so
replacing the content file replaces the portfolio — it would serve a different
discipline unchanged.

**Anny's Notebook.** Adding a discussion is one entry appended to the
`sessions` array in [`public/anny/content.js`](public/anny/content.js). Copy
the last one, change `id`, `n`, `date`/`dateEn`/`dateZh` and the titles, and
rewrite the blocks; put it at the bottom, since the page is chronological. `id`
becomes the anchor, so keep it unique and URL-safe. The block types are listed
at the top of that file; eleven of the thirteen are the same ones the other
adult pages use, and `fix` and `contrast` are the two this page adds.

**Aaron's Notebook.** The same, in
[`public/aaron/content.js`](public/aaron/content.js). Its renderer is a copy of
Anny's with two additions: a `link` block, and two optional labels on `contrast`
(`coldEn`/`coldZh`, `warmEn`/`warmZh`) for when the two columns are not a
message said twice. Leaving them out keeps Anny's wording. Changes that belong
in both notebooks have to be made twice — the copy is deliberate, since a
student's page should not change because someone edited another student's.

**Anita's Notebook.** The same again, in
[`public/anita/content.js`](public/anita/content.js), from a copy of Aaron's
renderer. Three copies now means a renderer fix lands three times; that is the
price of one student's page never moving because another student's did.

## Riva & Rex's Notebook — a pair class, ages 10–12, kept over time

The fifth notebook and the first for **two students at once**. Riva and Rex are
ten to twelve and are taught together, so this is one page rather than two —
where the source notes name who said what the page names them too, and where
they do not, it does not guess.

It is also the first page here that carries **two kinds of entry in one
document**: twelve dated sessions, then a band, then seven practice exercises.
The sessions are the record of what happened in each lesson; the practice
papers are worked through rather than looked back on and have no date. They
share a page because they share a student, a contents list and a teacher panel,
and because an exercise folds, speaks and reveals exactly like a session.

The machinery is a copy of Eason's. What differs is the age band. Ten to twelve
sits between the two house styles used everywhere else here: too old for the
picture-led seven-to-ten pages, too young for the adult document. So the page
keeps the adult skeleton — a scrolling document, a contents list, a teacher
panel, 中 chips on every line — and re-sets it one step larger with more air
between blocks, in the warmer palette
[Confidence and Everyday Life](#confidence-and-everyday-life--ages-1012-teacher-led)
established for this age. Those rules are collected in one block at the bottom
of [`style.css`](public/riva-rex/style.css) rather than edited through the
sheet, so the difference between this notebook and the adult ones stays legible
and a future session could be moved either way by touching one block.

Discussion is spoken only. There is no input field anywhere on the page and
nothing persists between lessons — at this age the writing belongs in their
paper notebooks.

### The two files

The page is one document built from two data files, because the halves are
edited for different reasons and nobody should scroll past a Cambridge reading
paper to add last week's vocabulary.

| File | Holds |
| --- | --- |
| [`content.js`](public/riva-rex/content.js) | `NOTEBOOK` and the twelve dated sessions |
| [`practice.js`](public/riva-rex/practice.js) | the seven exercises, pushed onto the same `sessions` array |

`index.html` loads `content.js` first — that is where `NOTEBOOK` is declared —
so the order of the two `<script>` tags is not optional.

**The files are written oldest-first; the page is not.** `render.js` reverses
the dated entries at the point of display, so the newest session sits at the
top of the page and the contents list, and session 1 is at the bottom. Add a
session at the bottom of the array as always — it will appear at the top. The
practice exercises are deliberately *not* reversed: they carry no dates, so
there is no newest among them, and P1 is genuinely where a person starts.

Reversing at render rather than in the data keeps three things true at once:
the authoring rule stays "append at the bottom", session 12 keeps the number 12
however far down the page it sits, and every anchor already handed out
(`/riva-rex/#s5`) still points at the same session.

Sessions are numbered `1`–`12` and exercises `'P1'`–`'P7'`, a string rather
than a number, so nothing on the page is numbered 1 twice. The first exercise
carries a `group` field, which is what draws the **Practice** band across the
document and the matching line in the contents list; only the first entry of a
group should have it.

One consequence worth knowing if you edit the renderer: the entry that opens on
load is the newest **session**, which is the first thing on the page but still
the *last* of the dated entries in the data. It is not simply the array's last
element — that is now a Cambridge reading paper, and opening on it would make
the notebook look as though it ends there.

### The sessions

Twelve, 21 March to 14 August 2026, built from a Notion page of weekly class
notes. Carrying brooms up three floors and being paid in candy; a page flip
animation finished after dinner; twelve turns on an inflatable slide on April
Fool's Day; a cold, a dinosaur exhibition and a balloon caught for a stranger;
camping and a catchy melody; grades and a Mother's Day card; a writing contest
and an idea Rex had for Riva; Kevin running to a closed office on a Saturday;
the junior mayor poster he drew and does not want the job from; which subject
takes the most time; speaking up in class; and how far, how many steps and who
snores.

The `fix` block is the whole argument for a per-student page, and here it has a
better source than a transcript. Where a class note reads **"More natural: …"**,
that is a sentence one of them actually produced with the upgrade written beside
it — already selected, already correct. Session 5 carries five in a row and is
the strongest page in the notebook. Sessions whose notes carry no such line have
no `fix` block; do not invent them.

Session 11 was taken to be the same 2026-07-11 material as
[Confidence and Everyday Life](#confidence-and-everyday-life--ages-1012-teacher-led)
and the two pages cross-link. **That was a conflation.** Confidence and
Everyday Life is built from *Jill's* notes of that date — its gymnastics, its
gymnast idol and its breakfast are hers, and it is
[session 1 of her notebook](#jills-notebook--ages-1012-one-to-one-kept-over-time).
Riva & Rex's session 11 is a different lesson taught the same week, on the same
theme. The link is kept, because the two lessons really do share confidence,
explaining and speaking clearly, but its wording no longer claims the review
page was built out of their hour.

One attribution is an inference rather than a record. The 8 May notes label only
the Mother's Day half "Riva"; the grades half carries no name and is given to Rex
because the following week he says he remembered Riva "had written a Mother's Day
card before". There is a comment above it saying so.

**On the handwritten pages.** The Notion source has `Handwritten Notes (date)`
pages of photographed notebooks, which look like the children's own writing and
are not: they are the two of them copying out the *previous* week's class notes
by hand. Handwritten (2026-03-28) is Class Notes (2026-03-21) word for word.
Transcribing them reprints the typed notes twice, so they are left out — except
Handwritten (2026-03-21), whose content appears in no Class Notes page at all and
is otherwise unrecorded. It is in session 1 as "From the week before".

### The practice half

Five Cambridge Movers reading papers, a present simple vs present progressive
worksheet, and one topic reading about the escape room at Taipei Children's
Amusement Park. Seventy-five multiple-choice questions, 133 word-box blanks,
twenty grammar gaps.

Four block types are defined in [`render.js`](public/riva-rex/render.js) for the
shapes a test paper needs, on top of everything the notebook already has:

| Block | What it is |
| --- | --- |
| `passage` | a reading text, each paragraph with its own 🔊 |
| `mcq` | a question with three options; the right one locks, wrong ones fade but stay |
| `wordbox` | the Cambridge Part 5 shape — pick a word, then pick its blank |
| `answers` | a prompt with the answer held behind a tap |

**The reading passages have no Chinese, and that is the point.** Everywhere else
on this page an English line has its Traditional Chinese one tap away. Here the
questions underneath are comprehension practice, so a translation would answer
them before they are asked. The Chinese in `practice.js` lives in the
instructions, the labels, the word-box notes and the contents list —
scaffolding, never the text being tested. The one exception is the last
exercise, a topic reading rather than a test, which is bilingual throughout
because it came that way.

A solved `mcq` does not hide its options, where a `gap` does. A gap hides them
because the filled sentence replaces them; here there is nothing to fill, and
leaving the row as it was played — the right one green, the tried ones faded —
lets the teacher see what was guessed before it was known.

A word placed into a blank stays in the box, struck through rather than removed.
Seeing which words have gone is most of how the last two blanks get worked out.
The strike is on the English only — a struck-through gloss reads as though the
meaning were wrong rather than the word already used.

**Every word-box word carries its Chinese**, from a single shared map at
`NOTEBOOK.glossary` in [`practice.js`](public/riva-rex/practice.js). The phrase
cards always had `zh` and `egZh`, so they were never the gap; the word boxes
were — 175 word slots, 135 distinct words, and exactly one of them (`broom`)
appears on a phrase card anywhere on the page. A child meeting *queue*, *apron*
or *knitting* in a Cambridge paper had nowhere to look it up.

One shared map rather than a gloss per box, because the same word turns up in
several papers — `cold` is in four — and two boxes glossing it differently would
be worse than not glossing it at all. Singular and plural are separate keys where
both appear, as are `lamp` (on a table) and `lamps` (over a street), which really
are different things in the two texts they come from.

The glosses are hidden like every other Chinese line here: **Word meanings 單字
中文** under a box opens that box, and the 中文 switch in the bar opens all of
them. The answer chips in `mcq`, `gap` and `match` stay English-only, which is
the house convention — they are answer choices rather than vocabulary, and each
is glossed on its own phrase card where it matters.

Two things in the source needed correcting rather than copying. The Part 5 word
boxes do **not** all leave exactly one word spare — across the five papers it
ranges from one to three — so the page counts and says how many, because a note
reading "one" when three are left over turns a finished exercise into a puzzle
about the page. And one box offers `brush` where the blank needs `brushes`; on
paper a child writes the right form, but a word placed by tapping arrives
verbatim, so the box word was changed.

### `/riva-rex-practice/`

The practice papers were briefly a page of their own at this path. They are now
the second half of the notebook, and all that remains here is a redirect to
`/riva-rex/#p1` — kept because the URL was handed out before the merge, so it
should land somewhere rather than 404. It is a meta refresh rather than a 301
because both hosts serve this directory as static files and neither can issue
one.

## Jill's Notebook — ages 10–12, one-to-one, kept over time

The sixth notebook, and the second built for the ten-to-twelve band. Jill is
taught alone, once a week, and the page grows one entry per lesson for as long
as the classes run. Three are in: 11 July, 15 August and 22 August 2026.

The machinery is a copy of
[Riva & Rex's](#riva--rexs-notebook--a-pair-class-ages-1012-kept-over-time),
which is where the age band was worked out — the adult skeleton (a scrolling
document, a contents list, a teacher panel, 中 chips on every line) re-set one
step larger with more air between blocks, in the same warmer palette. Only the
`localStorage` prefix changed, to `jill.`, so no notebook shares a voice or a
Chinese setting with another. Discussion is spoken only; there is no input
field anywhere on the page and nothing persists between lessons.

Unlike Riva & Rex's, this is **one data file**. There are no undated practice
papers yet, so `index.html` loads `content.js` and `render.js` and nothing
else. The grouping machinery is still in the renderer, so a set of papers could
be appended later without touching it — a new file loaded after `content.js`
and before `render.js`, pushing onto the same `sessions` array.

### Darker than the rest of the site

Every text colour on this page clears **WCAG AAA (7:1)** against all five of
its backgrounds — paper, card, and the three soft tints — rather than the 4.5:1
of AA that the other notebooks meet. The tightest pairing on the whole page is
7.01:1; before the pass it was 4.51:1. It is read for an hour at a stretch
across a table by one child, and the Chinese gloss is the smallest, most-set
thing on it, so the floor was raised rather than merely met.

| Token | Was | Now | Worst ratio on any background |
| --- | --- | --- | --- |
| `--ink` | `#16211f` | `#131c1b` | 15.0 |
| `--ink-soft` | `#445452` | `#333e3d` | 9.6 |
| `--ink-faint` | `#636e6c` | `#495150` | 7.1 |
| `--navy` | `#256b5e` | `#1f594e` | 7.0 |
| `--gold` | `#a9590f` | `#7a400b` | 7.1 |
| `--good` | `#2c7a58` | `#205940` | 7.1 |

Two things kept it from turning into a flat grey wall. The three greys hold
**three clearly separate steps** — about 15:1, 9.5:1 and 7:1 — because taking
them all to the same floor would have flattened `.zh` into `.en` and removed
the hierarchy along with the paleness. And only *lightness* moved: hue and
saturation are untouched, and the `-line` and `-soft` values are not changed at
all, since they are borders and fills rather than text and they are where this
age band's warmer palette actually lives.

/riva-rex/ shares this palette and was measured to AA, not AAA. It was left
alone deliberately — a fix lands on one student's page at a time here — so the
two now differ, and the block at the top of `style.css` says so.

### The page does not scroll itself

Two things in the inherited machinery moved the page without being asked to,
and both are undone here. Worth knowing, because **every other notebook still
has them** — the same `markHere` and the same `html { scroll-behavior: smooth }`
are in `/riva-rex/`, `/eason/`, `/anita/`, `/aaron/`, `/anny/` and
`/confidence-talk/`.

**`markHere` called `scrollIntoView` on every scroll event.** It runs on every
scroll to mark which session is being read, and it ended with
`a.scrollIntoView({ block: 'nearest' })` to keep that link inside the contents
list. Three things go wrong at once: it fires dozens of times a second while
the reader scrolls; `scrollIntoView` scrolls the nearest scrollable *ancestor*,
which is the document itself whenever the contents list is not scrolling — a
short list, or a narrow screen where it is a closed panel; and it inherited the
smooth behaviour, so each call started an animation that outlived the gesture
and fought the next one. It is now `keepLinkVisible`, which sets the contents
list's own `scrollTop`, only when the link is genuinely outside the box, and
instantly. It cannot touch the page.

**`scroll-behavior: smooth` was on the root**, so it applied to scrolls the
reader never asked for as well as the ones they did. Tapping a word card that
sits half below the fold makes the browser bring it into view — with smooth on
the root, that arrives as a glide rather than a jump, which is the page
appearing to drift by itself. It is removed. `scroll-padding-top` stays, so an
anchor still lands clear of the sticky bar rather than under it.

Measured after the change: forty scroll steps produce **zero** page-initiated
scrolls where they used to produce forty, the position is stable at rest, the
contents list still marks and follows the session being read, and a contents
link still lands its session 70px down — the bar's 54px plus the 16px of
padding.

### Two additions to the renderer

Two things exist in this copy that no other notebook has.

**The `part` block** draws a divider *inside* one session:

```js
{ t: 'part', n: 'Part 2', en: 'What Can You Do?', zh: '你會做哪些動作？' }
```

It is a level below the `group` band, which separates one *kind* of entry from
another across the whole document. This separates Part 2 from Part 3 within a
single lesson, and is deliberately quieter than the band — it has to read as a
turn in the same lesson, not as the start of a new one. Signage, like the
contents list and the focus chips, so both languages show at once and there is
no 中 chip to tap.

It exists because of where Jill's material comes from: notes and worksheets
that arrive already cut into numbered groups. A session built from a
conversation does not need it and should not use it.

**An optional `meaning` on a phrase card.** Her class notes give an English
definition under every word, and dropping it to keep the card shape would lose
the better half of the teaching:

```js
{ en: 'nervous', zh: '緊張的；不放鬆的', meaning: 'worried or not relaxed',
  eg: 'I feel nervous when I speak in front of the class.', egZh: '…' }
```

It sits *above* the Chinese on the back of the card, so the English
explanation is what she meets first and the gloss is the safety net under it.
It is set upright where the example below it is italic, so the two are not
mistaken for each other. Cards written without one — a collocation, a whole
sentence — render exactly as before.

The page opens on the newest session, which is at the top; the contents list
runs the same way. Sessions are written oldest-first in the file and reversed
at the point of display, so a lesson taught *between* two that are already
there goes in its date order, not at the bottom — which is what happened when
the horses lesson arrived after the gymnastics one.

### Session 1 — confidence and daily life

11 July 2026, from the class notes of that hour, in the notes' own seven
groups: how you feel, words for talking to people, three whole sentences to
say in class, `usually`, breakfast, interests and idols, and something she was
proud of. It ends on her own three sentences about waking up at 7:20 on a
Saturday, kept as a `quote` with her name on it.

The same hour is also
[Confidence and Everyday Life](#confidence-and-everyday-life--ages-1012-teacher-led),
the review version built from the same notes, and the session's `link` block
points at it.

**This session is where her own English is.** The notes carry three lines she
produced with a better version beside them, and they are not all the same kind
of thing, so they are not all rendered the same way:

| Her line | Better | Block | Why |
| --- | --- | --- | --- |
| *Let me tell you a truth.* | *…the truth.* | `fix` | A real mistake |
| *soybean milk* | *soy milk* | `contrast` | Correct, but not what people say |
| *Boys always talk about robots.* | *Many boys like talking about robots.* | `contrast` | Correct, but absolute |

The two `contrast` blocks re-tag their columns as **As you said it** against
**What people say** / **Less absolute**. Putting a ✕ beside a sentence that is
not wrong teaches the wrong thing, and both of these are sentences a careful
learner could defend.

### Session 2 — horses

15 August 2026, and the only session built around a **text**: six paragraphs
about horses, fourteen words, five sentences and five questions. It is
therefore the only one using `passage` and `mcq`, the two block types the
renderer already carried for reading papers.

The passage is **English only**, as every reading on this site is. That is not
the tween rule being broken — the Chinese support for this text sits underneath
it, on fourteen word cards and five glossed sentences. What is withheld is a
translation of the paragraphs, because the five comprehension questions are
asking whether she read them.

Added: the comprehension questions, a matching pair, a `has`/`have` gap-fill,
a note on `hoof → hooves` and a closing task that runs the same five sentence
shapes over an animal of her own choosing. None of them invents a fact — every
answer is in the reading as it stands.

**It has no `part` blocks**, and that is the rule for the block working:
its source is not cut into numbered parts, and a divider every two blocks would
make a short lesson look long.

### Session 3 — gymnastics

22 August 2026's worksheet, "Let's Talk About Gymnastics!", written for her at
CEFR A1–A2 in five parts, each running vocabulary → sentence structures →
discussion questions, then a final speaking challenge. All of it is on the
page: fifty phrase cards, thirty-five discussion questions, every sentence
pattern and both ⭐ notes from the sheet.

What the sheet did not have, and the page adds: the framing sentences, an
example sentence on every phrase card, three gap-fills on the patterns being
taught (`yet`, `couldn't … before`, `keep + V-ing`, `learn how to`, `get better
at`), a matching pair on the six skills, an opinion poll on the feelings, a
`contrast` block setting *I can't do a handstand* against *I can't do a
handstand yet*, and two sentence starters under every one of the thirty-five
questions.

**It has no `fix` block, on purpose.** Its source is a worksheet written
*before* the lesson, so it carries no record of her own wording, and the rule
from Anny's notebook holds: do not reconstruct a student's sentence from
memory. A class note reading "More natural: …", or a line lifted from a
transcript, is what fills it later.

## Running it locally

No build step and no dependencies:

```bash
python3 serve.py
```

[`serve.py`](serve.py) is a plain static server for `public/`. It exists
rather than a bare `python3 -m http.server -d public 8000` because macOS's
mime table labels `.m4a` as `audio/mp4a-latm`, which Safari refuses to play —
so the handbook's recorded words would appear broken in Safari and fine in
Chrome, for reasons having nothing to do with the files. It also sends
`Cache-Control: no-store`, so an edit shows on reload instead of serving a
stale copy. Both hosts already serve `.m4a` correctly, so this is a
local-only concern.

Then open <http://localhost:8000> for Word Play,
<http://localhost:8000/phonics/> for Sound Lab,
<http://localhost:8000/phonics-handbook/> for the handbook,
<http://localhost:8000/math/> for Number Lab,
<http://localhost:8000/confidence-talk/> for the 10–12 review lesson,
<http://localhost:8000/business-clarity/> for the business worksheet,
<http://localhost:8000/wealth-habits/> for the three-habits lesson,
<http://localhost:8000/happy-sexy-millionaire/> for the reading lesson,
<http://localhost:8000/campaign-speech/> for the speech,
<http://localhost:8000/toeic-grammar/> for the TOEIC practice,
<http://localhost:8000/sentence-upgrades/> for the homework review,
<http://localhost:8000/robot-helper/> for the writing worksheet,
<http://localhost:8000/exam-writing/> for the 學測 essay survey,
<http://localhost:8000/ielts-part3/> for the IELTS Part 3 practice,
<http://localhost:8000/junior-high/> for the 國中 words and grammar, or
<http://localhost:8000/landscape-portfolio/> for the portfolio template.
The notebooks are <http://localhost:8000/anny/>,
<http://localhost:8000/aaron/>, <http://localhost:8000/anita/>,
<http://localhost:8000/eason/>, <http://localhost:8000/jill/> and
<http://localhost:8000/riva-rex/>, whose
practice papers are the second half of the same page, at
<http://localhost:8000/riva-rex/#p1>. The book discussion guide is under
Aaron's, at <http://localhost:8000/aaron/book-club/>.

## Live sites

- <https://lewishsiung-creator.github.io/english-exercises/>
- <https://english-exercises-6e4.pages.dev>

Everything under `public/` is reachable at both URLs on the next push. Nothing
here is behind a login, and no page is linked from the site root unless it is
listed there, so an unlisted page is unlisted rather than private. Pages built
around a named client or student, or from a client's own internal document —
`/business-clarity/`, `/anny/`, `/aaron/`, `/anita/`, `/eason/`, `/riva-rex/`,
`/riva-rex-practice/`, `/jill/` and `/fab-english/` — carry
`noindex, nofollow`, which keeps them out of search results; it does not make
the URL secret. Anything that must not be publishable should not go in
`public/` at all.

## Deployment

Pushing to `main` publishes to both, with no further steps:

- **GitHub Pages** — via [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
- **Cloudflare Pages** — via its GitHub integration (build command: none,
  output directory: `public`)
