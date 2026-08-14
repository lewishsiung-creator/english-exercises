# English Exercises

English teaching material, built for classroom, homework and one-to-one use.
Fourteen independent pages live here — a game for young learners at the site
root, phonics practice for slightly older children at `/phonics/`, an
interactive phonics handbook for the same age at `/phonics-handbook/`, a
bilingual business worksheet at `/business-clarity/`, an interactive
lesson for working adults at `/wealth-habits/`, a business-English reading
lesson at `/happy-sexy-millionaire/`, a four-book discussion guide at
`/book-club/`, reading-aloud practice
built on a bilingual speech at `/campaign-speech/`, TOEIC grammar
practice at `/toeic-grammar/`, a homework review of one student's own
sentences at `/sentence-upgrades/`, a high-school writing worksheet
at `/robot-helper/`, a survey of seven years of the 學測 essay at
`/exam-writing/`, and an IELTS Speaking Part 3 practice at `/ielts-part3/`.

One page is not English at all: `/math/` is math practice for Grades 1 to 3,
built for a child in an American school.

Two more pages are not lessons. `/landscape-portfolio/` is a portfolio
template for a student to fill in with their own work, and `/anny/` is a
notebook kept for one adult client, which grows by one session after each
discussion rather than being finished and left alone.

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
  client's own sentences — goes into the relevant section behind a `part`
  divider, so the printed worksheet and the record of the discussion stay
  visibly separate. Section 1 carries the first lesson's notes.

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
- **The gap-fill Chinese keeps its blank.** A translated gap sentence renders
  the missing phrase as ＿＿ and never paraphrases it, so the Chinese explains
  the situation without handing over the answer. The matching halves and the
  answer chips are left in English for the same reason — each is glossed on its
  own phrase card anyway.
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

The notes deliberately separate the pairs that adult learners mix: *broke*
against *bankrupt*, *worth* against *valuation* against *revenue*, and *raise*
against *rise*.

The last step links across to [the book discussion guide](#book-discussion-guide--adult-four-books),
which takes the same book somewhere this lesson does not go.

## Book Discussion Guide — adult, four books

The 雙語讀書討論手冊 as a page: four books, three discussion questions each, and
the concept vocabulary behind them. Built for a book club or a one-to-one
session where the talking is the point.

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
- **The teacher panel has one action instead of an answer key**: *Open
  everything* turns over every card and opens every list of useful language, for
  going over a book together or picking a session up in the middle.
- **Print** gives one book per page, with every card and starter list opened and
  the cross-page links dropped.

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

## Sentence Upgrades — adult, one-to-one homework review

The seven sentences one student wrote in the class of 25 July 2026, each with
the revision from the handout, a note on what changed and why, and the
collocations that came with it — 37 in all. Where the other adult pages teach a
text, this one is the student's own writing handed back.

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

## Layout

```
public/                   Word Play — the site root
public/phonics/           Sound Lab, the phonics practice
public/phonics-handbook/  自然發音學習手冊, the interactive handbook
public/math/              Number Lab, the Grades 1–3 math practice
public/business-clarity/  the business worksheet
public/wealth-habits/     the three-habits lesson
public/wealth-habits/img/ its four photographs
public/happy-sexy-millionaire/  the business-English reading lesson
public/book-club/         the four-book discussion guide
public/campaign-speech/   the speech reading practice
public/toeic-grammar/     the TOEIC Part 5 & 6 practice
public/sentence-upgrades/ the 2026/07/25 homework review
public/robot-helper/      the 113 學年度 writing worksheet
public/exam-writing/      the 109–115 學測 essay survey
public/ielts-part3/       the IELTS Part 3 structure practice
public/anny/              Anny's notebook — one entry per discussion
public/landscape-portfolio/      the portfolio — filled in as the Ando study
public/landscape-portfolio/content.starter.js  the same page, emptied
public/landscape-portfolio/img/  4 Commons photographs, 12 SVG drawings, CREDITS.md
make-icon.py              regenerates public/apple-touch-icon.png
```

All sixteen are plain HTML, CSS and JS with no build step.

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
[`public/book-club/content.js`](public/book-club/content.js), one entry per
book in `GUIDE.books`. Every string is an `en`/`zh` pair, and there are no
answers to key in — the block types are `book` (author, tagline, summary
paragraphs, who it is for), `discuss` (a question plus the `starters` to reveal
under it), `terms` (a glossary card: `en`, `zh`, `defEn`, `defZh`), `strands`
(the closing one-liners, each pointing at a book by `id`) and `link`.

Adding a fifth book is one entry in `GUIDE.books` and one line in the closing
`strands` list. A `link` block wants an `href`, an `en`/`zh` label and an
`noteEn`/`noteZh` line; it is signage, so it never hides behind a 中 chip. The
same block type exists on the Happy Sexy Millionaire page, which is how the two
pages point at each other.

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
<http://localhost:8000/business-clarity/> for the business worksheet,
<http://localhost:8000/wealth-habits/> for the three-habits lesson,
<http://localhost:8000/happy-sexy-millionaire/> for the reading lesson,
<http://localhost:8000/book-club/> for the book discussion guide,
<http://localhost:8000/campaign-speech/> for the speech,
<http://localhost:8000/toeic-grammar/> for the TOEIC practice,
<http://localhost:8000/sentence-upgrades/> for the homework review,
<http://localhost:8000/robot-helper/> for the writing worksheet,
<http://localhost:8000/exam-writing/> for the 學測 essay survey, or
<http://localhost:8000/ielts-part3/> for the IELTS Part 3 practice, or
<http://localhost:8000/landscape-portfolio/> for the portfolio template.

## Live sites

- <https://lewishsiung-creator.github.io/english-exercises/>
- <https://english-exercises-6e4.pages.dev>

Everything under `public/` is reachable at both URLs on the next push. Nothing
here is behind a login, and no page is linked from the site root unless it is
listed there, so an unlisted page is unlisted rather than private. Pages built
around a named client — `/business-clarity/`, `/anny/` — carry
`noindex, nofollow`, which keeps them out of search results; it does not make
the URL secret. Anything that must not be publishable should not go in
`public/` at all.

## Deployment

Pushing to `main` publishes to both, with no further steps:

- **GitHub Pages** — via [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
- **Cloudflare Pages** — via its GitHub integration (build command: none,
  output directory: `public`)
