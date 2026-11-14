# English Exercises

English teaching material, built for classroom, homework and one-to-one use.
Nineteen independent pages live here — a game for young learners at the site
root, phonics practice for slightly older children at `/phonics/`, an
interactive phonics handbook for the same age at `/phonics-handbook/`, a
review lesson for a ten-to-twelve-year-old at `/confidence-talk/`, a
bilingual business worksheet at `/business-clarity/`, a fifteen-chapter
basic grammar course for adults at `/grammar/`, 國際商業期刊導讀 — a growing
series of business-journal readings — at `/business-journal/`, a business-English reading
lesson at `/happy-sexy-millionaire/`, a four-book discussion guide at
`/aaron/book-club/`, reading-aloud practice
built on a bilingual speech and its election Q&A at `/campaign-speech/`,
TOEIC grammar
practice at `/toeic-grammar/`, a homework review of one student's own
sentences at `/sentence-upgrades/` and a second, longer set from the same
student at `/sentence-upgrades/2026-10-17/`, passages to read aloud and record
at `/recording-practice/`, a high-school writing worksheet
at `/robot-helper/`, a survey of seven years of the 學測 essay at
`/learn/writing/` (moved from `/exam-writing/`, which redirects), an IELTS Speaking Part 3 practice at `/ielts-part3/`, a
growing IELTS Speaking course covering all three parts at `/ielts-speaking/`,
a semiconductor plant's own vocabulary sheet rebuilt for one-to-one adult
lessons at `/fab-english/`,
the English of a Taiwan family-law case for one adult learner at
`/family-law/`,
listening and speaking practice built on short YouTube clips at `/video/`,
for 國中 students, vocabulary and grammar together at `/junior-high/`, and
Cambridge's official word lists with Chinese — Starters, Movers and Flyers,
A2 Key, B1 Preliminary — under one hub at `/cambridge/`.

One page is not English at all: `/math/` is math practice for Grades 1 to 3,
built for a child in an American school.

Eleven more pages are not lessons. `/landscape-portfolio/` is a portfolio
template for a student to fill in with their own work, and `/anny/`, `/aaron/`,
`/anita/`, `/nikky/`, `/eason/`, `/anna/`, `/ken/`, `/mia/`, `/riva-rex/` and
`/jill/` are notebooks kept for one student each, which grow by one session after every
lesson rather than being finished and left alone. The first four are adult
clients; `/eason/` is a teenager moving up to senior high school; `/anna/` is a
young adult of eighteen to twenty, `/ken/` is a college student and `/mia/`
a young adult working in a clinic;
`/riva-rex/` is a pair of ten-to-twelve-year-olds taught together, and `/jill/`
is one child of the same age taught alone.

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

The one page here that is not English. Twenty-one topics across three American
grade levels, for a child in Grade 1 working up through Grade 3.

| Grade 1 | Grade 2 | Grade 3 |
| --- | --- | --- |
| Add to 20 | Add two digits | Times tables |
| Take away | Subtract two digits | Sharing out |
| Missing number | Hundreds, tens, ones | Word problems |
| Tens and ones | Count the money | Fractions |
| Bigger or smaller | Word problems | Add and subtract to 1000 |
| Word problems | Time to five minutes | Area and perimeter |
| What time is it? | Equal groups | Rounding |

### Design notes

- **Every topic can teach itself first.** Tapping a topic offers **Show me
  how** or **Just practise**. The explanation is three or four steps, one idea
  each, carried by a picture — counters being pushed together, hops along a
  number line, blocks, coins, a shaded bar — and ends with one whole example
  worked through, so he has seen one done before he is asked. It is skippable
  at any step and never forced, because the tenth run at times tables should
  not start with a lesson.
- **The explanations are written for a Grade 1 reader at every grade.** The
  maths gets harder up the levels; the English does not. He is six and reading
  them himself.
- **Questions are generated, not written.** Each topic is a `make()` in
  `content.js` that builds a fresh question every time, so the bank never runs
  out and nothing can be learned by position. Difficulty lives in the numbers
  inside that one function and nowhere else.
- **Every Grade 1 question carries a picture**, which four of the seven
  topics did not: the sums, the missing number and the comparison were bare
  symbols. They are **ten frames, not loose counters**, and that is the whole
  decision — scattered dots can be counted one at a time forever, which is
  the habit a six-year-old needs to grow out of, while a frame makes 7 + 5
  *look like* a full ten with two over, so the picture teaches the same
  make-ten move the hints do. Cells fill left to right and top to bottom
  across two stacked frames, so the spill past ten is the thing he sees.
  Subtraction crosses the last few off; a missing number shows the total with
  the part he has filled in and the rest dashed, which is the question drawn
  rather than the answer given. Comparing shows both numbers as ten rods
  above one another, so "both have four tens, so look at the ones" is visible
  instead of being something the hint has to say. Grade 2 and 3 are
  unchanged — by then the numbers are too big to count and the point is to
  work without a picture.
- **Word problems, one topic a grade.** Everything else here is a bare sum or
  a picture to read, and an American classroom assesses mostly in prose — a
  child who can add and cannot read the question gets the question wrong.
  The Grade 1 kinds are the ones the research names rather than ones I
  invented: result unknown, change unknown, and comparison, weighted so the
  last two — where children who can already add come unstuck — are not left
  to chance.
- **The Grade 1 ones carry a picture, and that is the audio rule being kept
  a different way.** Nothing is read aloud, so for a six-year-old reading it
  himself the picture is what stops one unfamiliar word blocking the whole
  question. Grade 2 and 3 problems have none: their numbers are too big to
  count, and by then the reading is the point. Items are drawn five to a row
  — eighteen apples on one line came out 662px wide, which a 375px phone
  scales to 16px an apple, too small to count, which is the one thing the
  picture is for.
- **The name is repeated rather than replaced by a pronoun.** *Mia has 4
  apples. Mia gets 3 more.* Working out who "she" refers to is a second
  comprehension task sitting on top of the maths, and early readers repeat
  the name for that reason.
- **The story has to make sense, or he thinks about the story.** A free pick
  of objects and containers produced cats in boxes and stars on a plate in
  one question in six, so container problems draw from a packable list only.
  The same check caught a two-step problem that handed back exactly what it
  had just taken, and a shop selling bugs.
- **A topic is not allowed to be easier than its own name.** Left to plain
  random numbers the skill a topic exists to teach turns up by accident, and
  measuring it showed how badly: "Add to 20" crossed ten in 46% of questions
  and handed over a freebie — an addend of 1 or 2 — in 30% of them; "Take
  away" crossed ten in 25%; carrying and borrowing appeared in 42% and 46% of
  the Grade 2 questions named after them; "Bigger or smaller" put the same
  digit in the tens place, the only case where the ones matter at all, 7% of
  the time; and 39% of the times tables were a ×2 or a ×10. So those
  generators now pick a *kind* of question first — `weighted()` — and build
  numbers guaranteed to be that kind. Those weights are the teaching decision
  and the thing to edit; the easier kinds are kept in, not removed, so a round
  still has somewhere to breathe. Measured again after: 60%, 55%, 65%, 65%,
  50%, and ×2/×10 down to 11%.
- **A missed question comes back.** It used to be thrown away: every round
  was ten fresh rolls of the dice, so a fact he had missed five times came
  round no more often than one he could already do. Now it returns on two
  timescales — about three questions later in the same round, which is close
  enough to reconstruct and far enough to have to; and seeded into the next
  round of that topic, three of the ten, spaced and never first. Right first
  time on the way back moves it up a box, three boxes retires it, missing it
  again drops it to the bottom. **Nothing on screen marks a question as one
  he failed before** — being quietly asked again is the point, and "you got
  this wrong last Tuesday" is a failure state wearing a hat. The grown-up
  panel has the queue instead.
- **The queue stores a recipe, not a drawing.** A rendered figure is 5KB on
  average and 25KB at worst, so a queue holding them would run to megabytes
  and not fit in `localStorage`. Each figure question carries the call that
  drew it — `['clock', 6, 50]`, twenty bytes — and it is redrawn on the way
  back in. `FIGURES` in `content.js` is the one place the recipe and the
  drawing can drift apart, so there is a check that all 45,000-odd figure
  questions redraw themselves byte for byte.
- **The record says what he answered, not just how many tries.** "34 + 27 →
  82, he said 73" is a missing carry; "attempts: 2" is nothing at all. The
  wrong answers sit under the question in the log, and a question he had to
  be shown is marked as such — needing the answer and getting there on the
  fourth go look identical in an attempt count and are not the same thing.
- **The hint matches the question it is for.** A question built to need making
  ten says *"Take 6 from the 9 to make ten. Then 10 + 3"* rather than the
  generic *"count on 9"*, which is the wrong strategy for that question. This
  only became possible once the generator knew which kind it had built.
- **`add1000` and the clock, money, blocks and area topics were left alone**,
  because measuring them found nothing wrong: three-digit carrying and
  borrowing already came out at 71% and 70% on their own.
- **What he does on Tuesday is still there on Thursday.** Each topic card
  carries its best round ever as stars, mastered topics get a badge and a
  gold edge, and the level screen totals it: so many stars of 54, so many
  days of practice. **Nothing in it ever goes down.** The stars are a
  collection, not a score — a bad round after a good one takes nothing away,
  and there is deliberately no streak, because a streak that breaks is a
  failure state wearing a different hat and would turn a day off into a
  loss. The empty stars are there on purpose, the way a sticker chart has
  empty squares: faint enough that eighteen untouched topics read as things
  to collect rather than things already failed.
- **Mastery is an invitation, not a gate.** Two rounds running at nine or
  better out of ten earns the badge, and the results screen offers the one
  topic that follows it — `next` in `content.js`, the same skill a level up.
  Offered once, when it is earned, then never again. Nothing is locked
  behind it, and a bad round afterwards does not take it back.
- **Grade 1 is told what it just did wrong.** A six-year-old's mistakes are
  not random: there is a short list of wrong methods — counting the number
  you start on, dropping the ten, running the sum backwards, reading the long
  hand as the hour — and each one leaves its own number behind. So the first
  miss on any Grade 1 question reads the number he typed and names the
  method: `12` answered `2` gets *"The ones are right. But a whole ten went
  missing."* `WHY` in `content.js` holds one reader per topic, stored as a
  recipe (`why: ['add', 7, 5]`) for the same reason the drawings are — a
  missed question has to survive localStorage into tomorrow's review round,
  and a closure does not. Every reader may return `null`, and usually does: a
  number that matches no method is a guess, and inventing a reason for a
  guess teaches him the page is not really reading his answer. Measured at
  100% of the named wrong methods across 6,000 questions each, 0% of numbers
  no method produces. Grade 1 only — by Grade 2 the wrong answers stop being
  legible, because with three digits and two steps too many wrong methods
  land on the same number. None of them names the answer, so **Show me** is
  still the only thing that gives it away.
- **One help slot, two stages.** The diagnosis arrives in the *same* panel
  the method uses, blue instead of orange, and a second miss replaces it with
  the method. Two panels at once was the first attempt and it cost 112px,
  which pushed the bottom row of the number pad off a 375×812 phone — and it
  asked a six-year-old to read two paragraphs to be told he is one ten short.
  The panel scrolls itself into view with `block: 'nearest'` when it opens,
  because a Grade 1 question is a picture, a sum and a keypad with keys big
  enough for small fingers, which fills a phone screen on its own. Not
  smoothed: a slide is one more moving thing to follow at the worst moment,
  and a throttled browser drops `smooth` outright, so the panel would
  sometimes simply not arrive.
- **There is a way out of a question he cannot do.** Two misses bring the
  method up as a hint (one, in Grade 1, after the diagnosis); a third offers
  **Show me**, which puts the answer on
  screen and asks him to enter it himself. He gets unstuck, he ends the
  question by doing the right thing rather than by giving up, and the record
  says he was given it. Without this, "only a correct answer advances" turns
  into an infinite failure state on a number-pad question, where unlike the
  multiple-choice topics there is nothing to guess between — the opposite of
  the rule it came from. It sits **inside the question card**, not under the
  feedback line: on a 375×812 phone the hint already ends at y=754 and the
  feedback at 801, so anything below them is off the bottom of the screen at
  exactly the moment he needs to find it.
- **The answer he is typing lives inside the question card.** It used to be a
  dashed panel below it, the same size and weight as the question itself, so
  the two competed and it spent about 90px of a phone screen to show one
  number. It is a slot on an underline now, directly under the sum it is
  filling in, and when he asks to be shown the answer the order reads
  straight down: the question, the answer, *now you do it*, the slot.
- **Topics are rows, not centred cards.** Seven stacked cards ran off the
  bottom of a phone after three and a half, and four centred lines gave the
  eye nothing to run down. All seven now fit one screen with the name on a
  scan line and the stars in a column. The icon sits in a chip because `+`
  and `−` are flat text glyphs while the rest are full-colour emoji — framed
  the same, they stop reading as two different kinds of thing.
- **Mastery is a gold edge down the side of the row.** It was an inset ring
  sitting just inside the green border, which read as a rendering fault
  rather than an achievement.
- **The work column is capped at 520px and centred on a tall screen.** Left
  to the page's 960px, "5 + 7 = ?" floated alone in a white bar three times
  the width of the keypad under it, which looked like a mistake on a laptop.
- **The screen before a round is a heading, not a second copy of the card.**
  It used to repeat the icon, name and blurb he had just tapped and push the
  only two things with a job most of the way down the screen. It now shows
  his best so far — and nothing about what he got wrong, which would be the
  page telling a six-year-old it remembers him failing — and it leads with
  the explanation on a topic he has never opened, with practice once he has.
- **Every drawing either says what it is or is marked decorative.** A
  `role="img"` with no name is the worst of both — something is announced and
  has nothing to announce — and all of them were that, inside wrappers that
  were `aria-hidden` anyway, which with the voice gone left the figures
  invisible to anything but eyes. Where the figure *is* the question the name
  carries what a sighted child sees and no further: *"A clock face. The short
  hand is on the 3. The long hand points to the 12"* leaves reading the time
  as the question, where "a clock showing 3 o'clock" would not. The word
  problem pictures are the one deliberate exception and stay decorative,
  because the sentence beside them already says the same thing and nobody
  needs it twice.
- **Nothing is spoken.** This page is silent by choice, which is the one
  house rule for young learners it does not follow: audio-first exists so a
  child who cannot yet read is not blocked before the maths starts. The
  trade is deliberate — every prompt has to carry itself in print, and a
  drawing does the work a spoken hint would have done.
- **The rest of the house rules hold.** No timers, and no failure state — a
  wrong answer wobbles and invites another go, only a correct one advances.
  After two wrong tries the topic's hint appears; it points at the method
  (*"Start at 24 and count on 8"*), never at the answer.
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

Records live under `math.*` in `localStorage`, separate from the English
pages: `math.log` is the answer history, capped at 300, `math.review` is the
queue of questions waiting to come back, capped at 12 a topic, and
`math.progress` is the stars, badges and days practised — under a kilobyte,
and the only one of the three the child ever sees. It has its own reset
button in the panel, well away from the one that clears the log: the stars
are his, and wiping them by accident while tidying up would be a small
disaster. Two
hundred simulated rounds leave them at about 60KB together, so neither is
near a quota. The 👨‍🏫 panel groups misses by topic rather than by question —
with generated numbers no single sum repeats often enough to mean anything,
but "Grade 3 · Times tables, 6 missed" does — and lists the review queue
under **Coming back**, each item showing how close it is to being retired.

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
- **Voices are ranked, not wished for** — the same ranking as the phonics
  handbook, minus a preference for a young voice: a clear adult American voice
  suits a twelve-year-old better than the one the seven-year-olds get.
- **Nothing is scored and nothing is saved.** Only the voice, the speed and the
  Chinese setting persist, under `ct.*` in `localStorage`. **Print** gives the
  notes back: everything open, the machinery gone.

## Business Clarity — adult, one-to-one

A reading version of the *Business Clarity and Communication Worksheet*, the
40-page bilingual worksheet used in one-to-one business English coaching. It
covers thirteen sections, from explaining a business in thirty seconds through
pricing, cash flow and recruitment to a two-minute executive introduction.

### Design notes

- **Chinese waits behind the 中 chip**, as on the other adult pages. English
  leads in a serif at full contrast; the Traditional Chinese opens one line at
  a time, or all at once from the 中文 switch in the bar. In a vocabulary list
  the chip sits in the empty right-hand cell, where the Chinese will appear,
  so 300 rows gain a control without gaining clutter. A tap anywhere in the
  row works too, but the chip is the real one: a `<button>` carrying
  `aria-expanded`, so the whole page can be worked by keyboard.
- **Closed lines use `hidden="until-found"`, not `display: none`.** Find-in-page
  can still match them and the browser opens the line it found. Without the
  attribute a browser falls back to plain `hidden`, which is the old
  behaviour. `--hideable` in the stylesheet marks which lines may close, and
  the renderer reads it back, so the list lives in one place.
- **Navigation, headings, labels and the front matter stay bilingual.**
  Understanding those is not the exercise; they are how she finds her place.
- The 中文 switch persists under `bc.zh` in `localStorage`. It is a device
  setting, like the voice picker elsewhere — nothing about a lesson is saved.
  **Print** follows the screen: turn 中文 on first for a bilingual handout.
- **Nothing is a form control.** Blanks, checkboxes and answer rules are
  drawn, not typed into — the client writes on paper or talks. Screen and
  print therefore look the same, and a stray refresh cannot lose a session.
- A contents sidebar tracks the section being read; on a phone it collapses
  into the top bar, and a back-to-top button appears once a screen has gone
  by. **Print** puts each numbered section on its own page, and restores the
  light palette so a dark-mode screen does not print pale ink onto nothing.
- **Dark mode is a re-tint, not a second design**: the same tokens moved, with
  the deep teal lifted to a pale one so it reads off a dark ground. Smooth
  scrolling and every transition are dropped under `prefers-reduced-motion` —
  forty thousand pixels is a lot of motion to force on someone.
- **Lesson notes live alongside the worksheet.** What was actually said in a
  session — vocabulary that came up, corrections, polished versions of the
  client's own sentences — belongs with the section it relates to. Short
  write-ups go inline behind a `part` divider; a full session gets its own
  page. Either way the printed worksheet and the record of the discussion
  stay visibly separate.

### Session pages

A session write-up can run longer than the worksheet section it hangs under,
so each one gets a directory of its own:

```
public/business-clarity/lesson-one/
public/business-clarity/lesson-two/
public/business-clarity/lesson-three/
public/business-clarity/lesson-four/
```

Numbered, not dated. The first write-up had no recorded date, and rather than
leave one page out of step the dates came off all of them; the pages are
identified by their place in the sequence and by what the lesson was about.
`lesson-one/` also used to live inline in section 1, until that section had
grown to a quarter of the whole page.

The page shares the worksheet's `style.css` and `render.js` and supplies only
its own `content.js`. That file leaves out `fields`, `purpose` and `feedback`
and adds `crumbs` instead — a breadcrumb back to the worksheet and to the
section the session hangs under. The renderer takes the absence of `purpose`
as the signal to draw a session cover rather than a worksheet cover. Sessions
are listed from the parent section with a `sessions` block.

### Two ways into the same material

The sessions are the record of what was said, in date order. The worksheet's
thirteen sections are the topics. Both are useful, so each worksheet section
ends with a `related` card listing the parts of the discussions that belong to
it, linked by anchor — section 6 points at the gross-margin discussion, section
12 at every vocabulary distinction, and so on. Nothing is duplicated: the card
is an index, and a discussion can appear under more than one section.

The anchors are the session `id`s. A `sub` block also takes an optional `id`,
which is how the class notes written inline in section 1 (chipped 筆記 rather
than a date) can be linked to from elsewhere in the worksheet.

Sections with a short card are a finding, not an oversight — they mark topics
the lessons have not covered yet.

### The business introduction

`public/business-clarity/pitch/` is the one page that is not a record. The
lesson pages say what happened in a session; this one holds the best current
wording of the thing she actually takes out of the room, in three lengths —
thirty seconds, ninety seconds, two minutes. It is rewritten as the
explanation improves rather than re-drafted from scratch each lesson, and it
is linked from sections 1, 10 and 13.

Missing pieces are written as blanks inside the script rather than left out,
so the gap is visible while she is speaking. The proof line is blank on
purpose: the discussions have produced no number and no named client.

It is reachable in one hop from anywhere in the material: `pinned` puts it at
the head of the worksheet's contents list, ruled off from the sections because
it is a page rather than a place in one, and each session page carries a
`sibling` link beside its breadcrumb. The sibling link deliberately sits
*outside* the trail — the introduction is alongside a session, not above it,
and a crumb would claim a hierarchy that does not exist.

## Basic English Grammar — adult, fifteen chapters

One of the two pages here built to grow rather than to be finished. Fifteen chapters
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
                Using Be — all nine sections written
  ch13/         Modals, Part 2 — all nine sections written
  ch14/         Nouns and Modifiers — all eight sections written
  ch15/         Making Comparisons — all eight sections written
```

Adding a chapter is three steps: write `chNN/content.js`, copy any existing
chapter's `index.html` unchanged, and flip `built` in `book.js`. Nothing else
moves — the contents page, the sidebar, the anchors and the prev/next links all
read the map.

- **A chapter's content file holds blocks and nothing else.** Titles live once,
  in `book.js`. A section listed there with no blocks written keeps its number,
  its title and its anchor but renders as one quiet row, and is struck through
  in the sidebar — so the page always matches the book's contents and the site
  doubles as the to-do list, the way the campaign speech does with its
  unanswered questions. A section number in a content file that the map has
  never heard of throws rather than silently rendering nothing.
- **The hub does not offer a link it cannot keep.** A built chapter can still be
  part-written, so `written` in `book.js` lists the sections that have content,
  the card dims and strikes the rest, and the card says how many of the
  sections are there. Leaving `written` out means the chapter is complete. The
  content file stays the truth: `render.js` compares the two on every load of
  that chapter and throws if they disagree, so the list cannot drift — which is
  also what stops a finished chapter from still advertising itself as partial.
- **A chapter can open before it begins.** The book starts each chapter with a
  pretest — a dozen sentences, some right and some not — and `CHAPTER.opening`
  holds blocks that render between the cover and section 1. The `judge` block
  is that exercise: a sentence, Correct or Not correct, and the explanation
  names the section that deals with it, so a wrong answer is a reading list.
  It is the only practice here that shows a wrong sentence on purpose, so it
  carries a rule of its own — **a wrong sentence gets no 🔊**. The corrected
  version appears with the explanation and takes the speaker instead, because
  the wrong version should never be the model going into the learner's ear.
  That is the rule Anny's notebook set for its corrections.
- **Search is on every page of both courses**, injected into the bar by
  `search.js` rather than written into eight shells, so a new chapter folder
  gets it by being copied. It indexes the map in `book.js` — every section
  number, both titles, and the chapter each belongs to — not the body text,
  which lives in per-chapter files that are only loaded when that chapter is
  opened; indexing those would need a build step this repo does not have.
  Titles are the index a reference actually wants.
  - **Openable beats well-matched.** Eleven of fifteen chapters are still to
    come, so "question" matches four unwritten titles that *begin* with the
    word before it reaches the two written sections that merely contain it.
    Written results sort first; the unwritten ones stay listed, struck
    through and inert, because the map tells the truth about the book. An
    exactly typed section number still wins outright — asking for 2-3 by name
    should show 2-3, even to say it is not written yet.
  - **`also` is searched but never shown.** Sentence Lab titles its units for
    a ten-year-old — *Yesterday*, not *Simple past* — so each unit carries the
    teacher's words for the same grammar, invisibly.
  - Opens with the button, `/`, or ⌘K; arrows skip the results that go
    nowhere; Esc closes and returns focus.
- **Every chapter ends with a mixed set.** Each exercise elsewhere on the
  page sits under the heading that says what it tests, which is a large hint:
  you reach the drill already knowing the answer is about articles. The review
  has no heading to lean on and its items are new rather than repeats —
  recognising a question you have already answered is not retrieving the rule.
  Each explanation names the section it came from, so a wrong answer is a
  short reading list. It lives in `CHAPTER.review`, mirroring `CHAPTER.opening`
  at the other end.
- **Printing gives two documents out of one stylesheet**, which is the trick
  /robot-helper/ uses. Untouched, the page prints a blank worksheet: blanks
  are rules to write on, word pools are there to be arranged, and no answer
  or explanation appears. Press *Reveal every answer* first and the same page
  prints the key, labelled as one so it cannot be handed out by accident.
  Before this, printing revealed the answers on the way out, so the only
  document obtainable was the key.
- **The quiet text tier was measured and failed.** `--ink-faint` was 2.8:1 on
  the paper — under the 4.5:1 WCAG AA floor, and it was the colour carrying
  every Chinese hint, the layer the weakest reader needs most. It is #68707e
  and 4.7:1 now, and the gold of the trap-note headings went the same way.
  All 64 text styles on a chapter page pass, the tightest at 4.6:1.
- **`cast` is the book's grid of photographs, with an emoji where the
  photograph was.** The house rule holds: pictures are emoji and only where
  they cannot mislead — and two of the pairs here are exactly what the drill
  underneath tests, nurse against doctor and mechanic against plumber, so
  they are 💉 against 🩺 and 🔧 against 🚰 rather than anything that would
  blur them. The job is written out in any case, so an emoji that fails to
  render costs nothing.
- **`twostep` is the one block that asks for production.** The book's own
  shape — *Lisa ___ a gardener. She ___.* — and the only exercise here where
  the learner is not choosing from what is already on screen: picking *is* or
  *isn't* is recognition, but building the correction from a pool is not,
  because nothing tells you which words the sentence needs until you have
  decided what to say. The second step stays shut until the verb is right,
  since there is no point correcting a statement before deciding it is wrong.
  It is assembled from the two mechanics that already exist — an ordinary
  `.q` and an ordinary `.order-q` — so wobble, explanations and
  reveal-everything work on it untouched, and a pair counts as one question
  rather than two.
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
### Irregular Verbs — the reference page

`/grammar/verbs/` is the book's 64 irregular verbs, and the first page here
that is a reference rather than a lesson. It does not use the chapter
renderer: that builds a chapter out of `book.js` and a content file, and this
is neither. It shares the look and the house rules, and nothing else.

- **The grouping is this page's own, and says so.** The book's list is
  alphabetical, which is how you look a verb up and the worst way to learn
  sixty-four of them. So the default view is nine groups by what the past form
  actually does — the seven that do not change, the six that rhyme on -ought
  and -aught, i becoming a, the -ew four, the ten that take an o, the -t and
  -d endings, the -old/-ood/-ound set, and the thirteen that are simply
  themselves. A–Z is one tap away, because a reference list has to work as a
  reference.
- **No past participle column.** The book's list at this level has two
  columns, because the present perfect is not in this book. A third would
  teach a tense the course has not reached.
- **Two verbs tell the voice what to say.** `sayPast` overrides the spoken
  form for *read*, whose spelling does not change but whose sound does, and
  for *be*, whose past is two words. Without it the 🔊 on *read* teaches the
  wrong pronunciation, which is worse than silence.
- **The search box is the one input field in this course.** It matches the
  present form, the past form or the Chinese, so a teacher can type what the
  student just said in either language. The rule these pages follow is that a
  learner never types an *answer* — not that no page may have a field.
- The meanings are covered by a drawn rule until a row is tapped, so the table
  is a self-test in either direction. **Print** opens them all.
- The speech engine, the Chinese toggle and the teacher panel are written out
  again in this page's own `render.js` rather than imported — about sixty
  lines, against refactoring a renderer two live courses depend on. If the
  appendices become a third page of this kind, that is when the three should
  be pulled into a shared file.

### Sentence Lab — the same course for ten- to twelve-year-olds

`/grammar-kids/` is the tween version, and it is the same machinery: its own
map, its own content files and a stylesheet that redefines the palette and the
sizes, then `../grammar/render.js` and `../grammar/hub.js` loaded unchanged. A
fix to the renderer reaches both courses, and the override layer is about a
hundred lines rather than a second copy of twelve hundred.

- **It is a selection, nine units, not all fifteen chapters.** An adult uses
  the full book as a reference; a ten-year-old does not need count and
  noncount nouns or the word order of adjectives, and listing them would say
  the course is longer than it is. Each unit card names the chapters it draws
  on, so the two courses can be lined up by anyone holding the paper copy.
- **A chapter is a unit, numbered from one.** "Unit 3" means something to a
  child and "Chapter 13" does not. The shared renderer and hub take their
  wording from `BOOK.labels`, defaulting to the adult course's.
- **Violet, not the book's red**, so a child handed a link does not land on
  something that looks like their parent's page.
- **Type up about 12%, the column narrower with it, and every tappable thing
  given 44px.** The adult page assumes a mouse or a careful finger; this one
  is poked at by a child leaning over a table.
- Same house rules otherwise: English leads with the Chinese behind the 中
  chip, nothing scored, nothing saved, wrong answers wobble and stay open, no
  input fields anywhere — the productive half is spoken.

- **A word taken back takes the words after it.** They were only correct in the
  order they were placed, so restoring them would be a lie about what the
  learner had got right.
- **The column is 75 characters wide, on every device.** It was measured, not
  chosen: at 46rem the adult page ran 91 characters to the line on a 1440px
  laptop, where 45–75 is what the eye can track back along without losing its
  place. 38rem lands at 75 on a computer and on an iPad; the kids page keeps
  42rem because its type is larger and the same count needs more room. Between
  the phone and the point where the sidebar appears the column is also centred,
  because until then all the space it does not use collected on one side and an
  iPad in portrait sat visibly off-centre.
- **Touch targets go by what is pointing, not by how wide the screen is.** An
  iPad in landscape is wider than many laptops, so the 44px comfortable target
  is given on `pointer: coarse` rather than at a breakpoint. On a mouse the
  sizes stay as they were.
- **On a phone the ☰ button is also the position readout.** A chapter runs to
  twenty thousand pixels and the sidebar that marks your place is behind that
  button, so the button carries the section number — `☰ 14-2` rather than
  `☰ Sections`. The control that says where you are is the one that moves you,
  which costs no extra furniture in a 54px bar. The bar's other half gives the
  chapter the space and shrinks the way home to an arrow, because the chapter
  is the half that changes from page to page.

## 國際商業期刊導讀 · Business Journal Reading — adult, teacher-led

A series that grows one reading at a time: each takes one article from the
international business press and turns it into a teacher-led lesson. Built the
way `/ielts-speaking/` and `/grammar/` are — one renderer and one stylesheet for
the whole series, a map of the readings, and a thin folder per reading.

### The shape

```
public/business-journal/
  course.js      the map: the series' title and intro, and every reading
  hub.js         the contents page
  render.js      the reading renderer — seventeen block types, shared
  style.css      shared by the contents page and every reading
  _template/     a working reading that uses every block type, linked from nowhere
  wealth-habits/ one folder per reading: a thin index.html, content.js and img/
```

Adding a reading is three steps: `cp -r _template <id>`, write its `content.js`
with `id: '<id>'`, and append it to `readings` in `course.js` with
`built: true`. A reading's number is its position in that list, so new ones go
at the bottom; the contents page shows them newest first on its own, leading
with the latest the way a front page leads with its top story.

- **A reading's place comes from the map.** The cover's kicker (國際商業期刊導讀
  · No. 1) and the ← All readings link both come from `course.js`, looked up by
  `LESSON.id`. An id the map has never heard of throws on load rather than
  rendering without its place in the series.
- **One storage prefix for the series**, `bj.`, so the 中文 switch and the
  chosen voice carry from the contents page into every reading.
- **The look is modelled on hbr.org**, at Lewis's request: a white page,
  near-black ink, a serif for the reading text and the contents page's story
  headlines, a bold grotesque for article headlines and labels, teal for labels
  and links, one red for the step numbers and the lit 中文 switch, hairline
  rules and square-cornered photographs. It stops at design language — no HBR
  logo, name or licensed typeface; Charter/Georgia and Helvetica stand in for
  Tiempos and GT America — because the page is public and must not read as
  theirs. The token names are the house names kept from the first lesson:
  `--navy` holds the teal and `--gold` the red.
- **`/wealth-habits/` is a redirect** to `/business-journal/wealth-habits/`,
  carrying its hash, because that URL had already gone out.
- **Two PDFs, on a band under the headline.** A reading becomes a handout by
  printing it, and a teacher needs both halves of that: a *student copy* with
  every blank empty and the answers, reasons and model answers held back, and
  an *answer key* with the blanks filled, the right option ticked and the
  matching pairs listed — a line cannot be drawn between two columns on paper.
  Each button puts `pdf-blank` or `pdf-key` on `<body>` and the print
  stylesheet reads that, so **neither PDF depends on how much was revealed
  during the lesson**: the student copy prints blank even after "Reveal every
  answer", and neither button changes what is on screen. The document title is
  swapped for the duration, since the browser offers it as the filename, so the
  two do not both arrive called the same thing. A plain Cmd+P carries no class
  and prints the answer key. The gap's own answer rides in `data-a` on its
  blank and the right option carries `data-right`, so the key needs no
  JavaScript to assemble itself.

  The two buttons sit on a hairline band directly under the article's headline
  — where a press page keeps its byline and its print button — rather than in
  the teacher panel, where they were built. Paper is wanted on the way into a
  lesson, not three taps down a drawer. The band is emitted by `coverTools()`
  in `render.js` with the rest of the cover, not written into each reading's
  `index.html`, and is bilingual on its face like the contents list and the
  *Next* link, because it is interface rather than article. The pair is
  labelled *Print or save as PDF 列印／存成 PDF*, not "Download": both buttons
  open the browser's print window, which is also how a reading reaches a
  classroom printer, and nobody should be left waiting for a file that is
  never coming. The band is in the print stylesheet's hide list, so it never
  prints itself. Clicking twice
  before the dialog opens is a no-op the second time: the `printing` flag in
  `render.js` holds the door, since the second call would otherwise capture
  the already-swapped title as the one to put back and leave the reading named
  after a PDF for the rest of the session.
- **Presentation mode: the same lesson as slides.** *Present 投影片* is the
  band's left-hand control, and the series' third form — the page is the
  lesson on a screen, the print stylesheet makes it paper, and this makes it
  slides for a room with a projector.

  **Nothing is re-rendered and nothing moves.** A slide is a run of elements
  already in the document, and showing one is a matter of hiding its
  neighbours: `buildSlides()` reads the rendered lesson, and `showSlide()`
  marks the slide's own elements `.sl-on`, every ancestor of them `.sl-path`,
  and anything shown alongside (a block's heading standing over one of its six
  questions) `.sl-keep`. Two rules in the stylesheet do the rest, at any
  depth. So **every exercise keeps its handlers and its state**: a gap filled
  in on a slide is still filled in when the lesson comes back out, the 🔊
  buttons still speak, the 中 chips still open, and *Reveal every answer*
  still reaches the whole lesson. A second renderer would have meant two
  copies to keep in step and every answer lost at the door.

  **A step is not a slide.** The cover gives three — the headline, what the
  lesson is, the goals — then each step opens on its number, name and
  photograph, and each of its blocks takes a slide. Blocks that are really a
  list of independent things are dealt out one to a slide, the block's heading
  kept above each: comprehension questions, gap-fills (each carries its own
  options), the steps of a procedure, the paragraphs of a passage, cards to
  sort, discussion questions. The thresholds are the `SPLIT` table in
  `render.js`. Blocks whose point is the comparison — the politeness ladder, a
  grid of phrase cards, a tick-list — are deliberately left whole, and the few
  that then overrun say so in the bar (*↓ scrolls 可往下捲*).

  **The scale is one number on the root.** Everything on a slide is set in rem
  or em, so `html.present { font-size: clamp(…) }` brings headings, body,
  chips and the hidden Chinese up to projector size together, in the
  proportions the page already has — and `fitSlide()` then takes that number
  up or down per slide, largest size that still fits, so a single summary
  point grows into the room and a long task comes down. Both ends are capped:
  a four-word slide would otherwise arrive in circus type, and much below two
  thirds nobody at the back can read it. If even the floor does not fit, the
  shrinking is undone — a slide that must be scrolled either way is better
  read large than small.

  **Driving it.** → ← and Page Down / Page Up (what a presenter's remote
  sends), space and Backspace, Home and End, `1`–`9` for a section and `0` for
  the cover, `C` for the Chinese, `B` to blank the screen, `F` for full
  screen, `?` for the menu, `A` for the answers, `S` to stop the voice, Esc to
  leave. ↑ and ↓ scroll a long slide and are handled rather than left alone:
  the stage is `overflow: hidden` and the real scroller is the section inside
  it, so the browser's own scrolling never reaches it from where the focus
  sits. On a slide that fits they do nothing, as before. Space and Backspace —
  and only those two — stand down when the focus is on a chip or link inside
  the lesson, or a tap on a gap-fill option would arm the space bar to press
  that option again instead of moving on; a letter or a digit means the same
  thing wherever the focus happens to be sitting, and the broader guard they
  started with killed the jump keys the first time anybody answered a
  question. Every control in the bar hands the keyboard back to the stage when
  it is done, for the same reason. A swipe across the stage does the same on
  an iPad, standing down on anything the finger might have meant to press and
  on anything closer to a vertical drag. Leaving full screen leaves the
  slides, but only if the slides turned it on. Printing drops out of
  presentation first, so Cmd+P mid-lecture still gives the whole lesson. The
  closing slide keeps *End of the lesson* but not its links — in front of a
  room those are a trap, not a courtesy.

  **Presenting starts where you are.** A teacher scrolled to the reading
  section and reaching for the projector means to show the reading section,
  not the title page, so `slideInView()` reads the scroll position — before
  the class goes on, since the moment it does, the lesson collapses into a
  one-screen stage and every section reports the same position — and opens at
  the top of whatever part of the lesson was on screen. Home is still one key
  away. Leaving puts the page back at the slide the lecture stopped on, and
  lands rather than glides: a smooth scroll across a whole lesson is a long
  way to watch when you only wanted the page back.

  **One menu, behind the step's name.** A sixty-slide lesson is thirty-five
  key presses from its reading section, which is no way to answer "can we skip
  to the discussion?" in front of a room. The step name in the bar is a button
  with a caret — the caret is the whole of that control's advertising — and it
  opens the sections with the slide each one starts at, the section being
  presented marked, and under them the keys, which are written down nowhere
  else. Esc closes the menu before it closes the slides: one key, the nearest
  thing first.

  **The bar gets out of the way**, fading to a fifth after four seconds of
  nothing and coming back on the first sign of life — it is the only thing on
  the projector that is not the lesson. It never leaves entirely, because a
  presenter glancing down for "where am I?" should find it rather than have to
  wave at the screen. `B` draws a curtain over the slide for the oldest move
  in lecturing; the lesson is untouched underneath and the next slide key
  takes it away again.

  **Focus goes to the stage** when the slides open, because the button that
  opened them is hidden by then and a hidden element cannot hold it — without
  that a keyboard user's next Tab would start from the top of the document —
  and back to that button on the way out. Every slide change is announced once
  through a visually hidden live region, rather than letting a reader
  interrupt itself over the three separate pieces the bar shows. The arrows at
  the ends of the deck are `aria-disabled`, not `disabled`: disabling the
  control a finger is resting on makes it unfocusable and throws the keyboard
  back to `<body>`, and the renderer clamps anyway, so a press at either end
  is a harmless no-op.

  **A slide does not hold still, so it is measured again when it grows.**
  Opening the Chinese adds a line under every English one; a phrase card, a
  model answer, a gloss and a solved gap's reason all come out of hiding
  mid-exercise. `fitSlide()` used to run only on a slide change, so the slide
  quietly grew past the bottom of the projector — and even the ↓ cue stayed
  silent, because the cue is set inside `fitSlide`. It now runs again on the
  next frame after anything in the lesson is tapped.

  **`A` opens the answers to the slide, not to the lesson.** The teacher panel
  is hidden while presenting, and its *Reveal every answer* would hand the
  room the answers to exercises it has not reached. `revealAll()` takes a root
  for that reason: the panel's button passes the document, the `A` key passes
  the slide, and the *Answers 答案* button beside an exercise's heading passes
  that exercise. The scope may *be* the exercise rather than contain it, since
  a gap or a question is dealt out on its own, so the selectors match the root
  as well as its descendants.

  **The rest of what a lecture needs.** A slide dealt out from a block carries
  its block's instruction, not just its heading, or the teacher says "tap each
  one…" six times instead; it also carries *3 / 6* in the bar, which the bar's
  own *47 / 59* cannot say. Those slides anchor to the top rather than the
  centre, so a run of six questions keeps its heading in one place instead of
  moving it on every press. The headline slide lost the source credit, which
  was deciding how big the lesson's name could be. A quiet **▶** joins the
  sticky top bar, because the band's Present button is inside the cover and a
  teacher at step five should not scroll back up a sixty-slide lesson to
  start. Moving to a slide cancels the voice, which otherwise reads on over
  the next one. And the bar holds at two thirds instead of a fifth while part
  of a slide is below the fold, because the ↓ cue and the progress line are
  the two things in it that are not chrome.
- **Every reading ends its sections with the way on.** The cover closes on
  *Begin → 1 …*, each step on *Next → n …*, and the last step on *End of the
  lesson*, with the neighbouring reading in the series (the next one, or else
  the one before), *Back to the start* and *All readings*. All of it comes from
  `LESSON.steps` and `course.js`, so a new reading gets it for nothing. On a
  phone the contents are folded behind ☰, and without these the only way on
  was to keep scrolling.
- **On a phone the bar names the step**, not the reading: *2 Reading*, from
  the same scroll-spy that lights the contents column. A desktop keeps the
  title, since its contents column already marks the step. Below 620px the ☰
  button drops its English word (☰ 課程) to give the step the room.
- **Touch targets grow under a finger.** 🔊 and 中 already had an invisible
  24×24 hit area; where `(pointer: coarse)` they get 36×36, and the two move
  14px apart so the areas never overlap. The dashed reveal buttons and the
  bar's buttons are padded to about 40px tall.
- **Built for an iPad's finger as well as a mouse.** Every `:hover` rule sits
  inside `@media (hover: hover)`, because Safari keeps hover on the last thing
  tapped — a wrong matching chip stayed teal and looked picked. Safari's grey
  tap flash and double-tap zoom are off on controls (pinch-zoom stays), and
  the teacher panel and contents column size to `100dvh`, so their last rows
  no longer sit behind Safari's toolbar. Portrait iPads get the phone layout
  with the full reading column; landscape gets the contents column.
- **The feel of apple.com, on top of the HBR look.** Lewis asked to borrow
  Apple's handling without giving up the journal: the serif, ink, teal, red
  numbers, heavy rules and square photographs all stay. Buttons became pills
  and boxes softly rounded; the bar and the teacher panel are frosted glass;
  a button sinks a little when pressed; Chinese lines, glosses, card backs
  and model answers fade in rather than snap; each block of a step eases up
  as it scrolls into view; the teacher panel opens like a sheet, with an iOS
  switch for the Chinese and a segmented control for the speed (built over
  the `<select>`, which stays as the value). UI labels use the system font.
  All motion is off under *Reduce Motion*, and none of it reaches print.

### No. 1 — Three Habits That Build Wealth

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

  Tapping the line opens it, but **a drag that selects text does not**: a
  mouse selection ends in a click on the line it selected, so highlighting
  three words to talk about them used to throw the translation on screen at
  the moment the student was working the English out. The handler opens the
  Chinese only when the selection is collapsed, which is what a tap leaves
  behind. The 中 chip is a button and is handled before that, so a deliberate
  reveal still takes one tap.
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
  screen): show all Chinese, reveal every answer in the whole lesson, pick a
  voice, or reset for the next student.
- **An *Answers 答案* button beside the heading of each exercise that has
  answers** — the gap-fill, the matching, the multiple choice and the
  model-answer checks, and nothing else: the phrase cards, the poll, the
  sort-into-two-piles and the discussion hide reference language, not answers,
  and what they hide already has its own button on each item. Added in
  `render.js` after the lesson is built rather than in the four block
  builders, because it is the same button in all of them and because the
  heading is the one part of a block that stays on screen when the block is
  dealt out one item at a time in presentation mode. It answers its own
  exercise and no other — the panel's button is the one that opens everything
  — and on a slide it narrows again to the single question on screen, leaving
  the ones the class has not seen. Once an exercise is open its button goes,
  rather than standing there inert. The headings are `display: flow-root` so
  the floated button is contained by the heading it belongs to instead of the
  instruction line wrapping around it.
- **One photograph opens the lesson and each habit**, and no more. They are
  illustration, not content, so they carry no lesson text and are dropped from
  the print handout.
- **Print** gives a handout: everything behind a tap is opened, and anything
  that needs a mouse is dropped.
- **重點複習 — a sheet to send the student afterwards.** The fourth form of the
  same lesson: the page is the lesson on a screen, presentation mode is the
  projector, the two PDFs are the classroom printer, and this is what the
  student keeps. In the teacher panel, tick what the lesson covered and copy
  the link; it opens the reading's own address at `#review`, which puts the
  lesson aside and lays its language out on one page, with its own *Save as
  PDF*.

  **The link is the whole feature.** There is no server here and nothing is
  stored, so the ticks travel in the hash — `#review=v,s` — which means the
  teacher can see exactly what they are sending before they send it, the link
  keeps working for as long as the page does, and a student who loses the
  query still gets the whole sheet, because `#review` on its own means all of
  it.

  **The parts are read off `content.js`, not off the rendered page**, so the
  sheet cannot drift from what was taught: the numbered summary points, the
  procedure, the phrase cards, the matched collocations, the gap-fill
  sentences *with the answer written in where the blank was*, the politeness
  ladder, the model answers and the discussion questions with their useful
  language. A part with no blocks in a reading never appears — No. 1 has four
  of them, No. 2 has six, No. 3 has four — and a `summary` without a title is
  left out, since a teaching paragraph from the middle of a flow reads as a
  fragment on its own.

  **Every line shows its Chinese**, unlike the lesson. Nobody is sitting next
  to the student to tap the 中 chips, and this is reading to remember rather
  than comprehension practice.

  **The contents page names it**, in a standing note at the foot — below the
  stories, so nothing a reader came for moves, under the quieter `--rule`
  hairline rather than a second copy of the 3px black rule that belongs to
  "All readings". It is the one block of prose on that page addressed to both
  readers at once: a teacher who has never opened the panel, and a student who
  was sent a review link and came back up to find out what it was. Both
  languages are always visible, like the story blurbs beside it and unlike the
  cover's intro, under the rule in `style.css` — scaffolding and navigation
  stay bilingual, because a note whose Chinese must be tapped before it can be
  understood has not been read.

  Two decisions in it are easy to undo by accident. **The example link is
  pinned, not derived**: `NOTE.example` in `hub.js` points at `better-day`
  because the copy names collocations and gap-fill key sentences, and only a
  reading with `match` and `gap` blocks has them — No. 3 has neither, so a link
  that always followed the newest reading would advertise two things the sheet
  it opened could not show. **The panel is named in words, not by its 👩‍🏫
  glyph**: at 15px, and 12px on the Chinese line, a ZWJ emoji is a smudge
  rather than a picture of anything, it would be the only emoji on a page
  modelled on a newspaper, and spelling it out keeps a public homepage from
  printing a step-by-step route to a drawer whose first button is *Reveal every
  answer in the lesson*.

  One trap worth recording: the sheet's class must not be the mode's class.
  `review` on `<html>` is the mode, and naming the element `.review` too made
  the base rule `.review { display: none }` match the document element and
  take the whole page down with it — a blank screen with 15KB of correct HTML
  inside it. The element is `.rv-sheet`.

Photographs are from [Pexels](https://www.pexels.com/license/), whose licence
allows commercial use and requires no attribution; the photographers — Lara
Jameson, Polina Tankilevitch, Ron Lach and William Fortunato — are credited on
the page anyway. Each file is stored at 1600×900 and cropped by CSS, so
changing the framing is an `object-position` edit, not a re-export.

### No. 2 — Protocols for a Better Day

Built from Lewis's own B1–B2 handout, which retells an interview with
neuroscientist Andrew Huberman on ten daily health habits. Because the reading
is his own text rather than a publisher's, it appears in full — the first
reading in the series to carry its passage. Five steps follow the handout's own
sections: before you read, the reading, key vocabulary, giving advice, and
practice.

What the page adds to the handout: glosses on eleven harder words in the
passage, example sentences for the eight useful phrases, sentence starters for
the warm-up, prompts and frames for the two speaking tasks, and a Chinese line
for every English sentence. Every answer comes from the handout's own key.

Three block types arrived with it and now belong to the whole series:

- **`passage`** — the reading, whose `{{target words}}` open a gloss where they
  stand. Ported from `/happy-sexy-millionaire/`, and set as article text rather
  than boxes.
- **`check`** — open questions with a model answer behind a tap: the
  comprehension questions, and the rewrite exercise, whose `cue` names the
  pattern to use. "Reveal every answer" opens them all.
- **`ladder`** — patterns on a scale, soft → neutral → strong, the left rule
  deepening from pale teal to red with the force of the pattern.

A passage can also number what it counts through: `[[4]]` in a paragraph, in
the English and the Chinese alike, sets a small red ringed numeral where
protocol 4 starts, so the class can be sent to "number 4" in a reading that
runs ten protocols through six paragraphs. 🔊 skips the numbers.

A word card can now carry its part of speech (`pos`), and a reading its
`level`, shown after its number on the cover.

The handout's disclaimer travels with it, on the cover: the health claims are
one scientist's views from a media interview, some are debated, and nothing on
the page is medical advice. Photographs are from Pexels — Maxim Sharypov, Nur
Tok and Felicity Tai — each cropped to 16:9 around its subject rather than at
the centre, since all three were shot upright.

### No. 3 — Superhuman Focus

Built from Lewis's own handout summarising a Diary Of A CEO interview with
Dr. Sahar Yousef, a cognitive neuroscientist at UC Berkeley. Seven steps follow
his handout: the eight ideas from the interview, digital hygiene, the focus
sprint, twenty business expressions, a TOEIC Part 7-style reading he wrote
himself, eight discussion questions, and the homework. His answer key supplies
every `why`.

Three more block types arrived with it:

- **`quiz`** — four-option multiple choice, ported from
  `/happy-sexy-millionaire/`. A wrong pick dims but stays on screen, because
  "why was that one tempting?" is the more useful question.
- **`steps`** — a numbered procedure where the order is the method. The step's
  English name is spoken; its Chinese name sits under it permanently, since
  that is how you refer to the step out loud.
- **`summary` with `n` and `titleEn`/`titleZh`** — one numbered point in a run
  of them, which is the shape an interview summary takes. A `summary` without
  them is unchanged, which is how the first two readings use it.

The `cards` audit also stopped being kitchen-cabinet-specific: its two button
labels are now the block's (`yesEn`/`yesZh`, `noEn`/`noZh`) and default to the
original "I have this / I need this", so No. 1 is untouched. This reading uses
two audits with different labels — "I already do this / I'll try this" for the
four digital-hygiene practices, "That's me / Not me" for the three chronotypes.

**One thing in the reading is load-bearing: `peak` is deliberately not in the
passage glossary**, because question 5 tests exactly that word against `peek`.
Glossing it would hand over the answer.

Photographs are from Pexels — Mizuno K, Lê Mạnh Tuấn and UMUT — each cropped to
16:9 around its subject.

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
`/business-clarity/lesson-two/` uses. If the guide is ever wanted as general
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
the twenty-seven questions from the election floor. The text is reproduced as
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

Twenty-seven questions, each a card: the question, then the answer as ordinary
practice lines — 92 lines in all. Every question and every answer is bilingual,
and none are outstanding.

- **The question is context, not practice.** It is asked *to* him, so it stays
  bilingual in both modes. Only the answer beneath it hides a language.
- **Each answer has its own ▶**, and the Q&A section has no section-wide one:
  two dozen answers back to back is not a unit anyone needs to hear. The run is
  scoped to the nearest container holding lines, so one button drives both.
- **`**Stars**` mark the phrase to land on** and render as bold, in both
  languages and in the section standfirst. They are stripped from anything
  spoken, so 🔊 and ▶ never read the markers out.
- **A contents list opens the section**, two columns. The sidebar keeps one
  entry for the whole section — twenty-seven more would bury the speech.
- **`pending: 1` still works** even though nothing uses it: a question can be
  added before its answer exists, and it renders with a 「回答待補」note and is
  struck through in the contents list.
- The English is a free adaptation of the Chinese rather than a translation, so
  the two do not break into paragraphs the same way. Seventeen of the
  twenty-seven needed hand-alignment — usually an English summary sentence that
  the Chinese folds into the following paragraph.
- Questions 4 and 26 both ask about the JCI "Three Treasures" and were both put
  to him, so both are kept. 26 is the fuller answer of the two.

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

### The second set — `/sentence-upgrades/2026-10-17/`

Fourteen more sentences, from the feedback sheet of 17 October 2026, in a dated
folder beside the first. A set of sentences is one week's homework, so the two
are siblings rather than chapters: each cover carries a pointer to the other and
neither claims an order. The folder is a full copy of the renderer and
stylesheet, the same deliberate copy the notebooks make, so July cannot break
when October is edited.

Two sections exist there that July does not have, because the October sheet
carries them and they are what a student working alone cannot write for herself:

- **Where this writing stands** — the sheet's assessment: what is already
  working, the three things to fix in order (shown as *you wrote* against *reach
  for*), and a three-stage plan from recognising a change to using it. The CEFR
  B2 line is reproduced with its caveat intact: it reads one writing sample, and
  says nothing about listening or speaking.
- **Recording practice** — a passage from the same week, on the AI agents her
  company is building, set wider and looser than the rest of the page because it
  is read off the screen aloud. 🔊 sits on the paragraph rather than the
  sentence, since what is being practised is holding a steady pace across
  several sentences.

Both are optional: `buildAssessment` and `buildRecording` skip when content.js
leaves `assessment` or `recording` out, so the copy still renders a July-shaped
lesson unchanged.

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
| 四 七篇範文 | Seven essays, each with a switch showing what every sentence does — plus one transfer essay after them, lined up against the year it was built on |
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
- **My Ideal School is a transfer essay, not an eighth year.** It came as
  Lewis's own handout, written on 111's skeleton, so it sits after the seven
  under its own heading with a gold 延伸 badge where a year would be — the page
  never implies it was a 學測 question. Its twelve moves are 111's twelve, in
  order, and a 對照 111 switch prints the park sentence under each school
  sentence: the page's whole claim, that the topic changes and the moves do
  not, shown rather than told. The handout says 165 words; it is 174.

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

The other page here built to grow rather than to be finished. The Speaking
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
  seconds and 1:10–1:30, and Part 1 — which has no thinking time — drops the
  planning clock entirely. No lesson file states a timing. An id the map has
  never heard of throws on load rather than rendering something quietly wrong.

  This is what that design is for: moving Part 3 from 0:40–1:15 to 1:10–1:30
  across nine lessons was one line in `course.js`, and it deleted two
  per-lesson overrides rather than needing nine edits. A lesson overrides a
  timing only where it deliberately differs from its part — and after this
  change, none does.
- **The palette is the IELTS red**, so the course is recognisable at a glance
  and is not mistaken for the grammar book's brick red or the business-English
  navy. `--brand` is the mark itself; `--navy` keeps its house name and holds
  the same red deepened enough to stay readable as body text on the warm paper.
- **Block types beyond the ones inherited from `/ielts-part3/`.** `qbank` is a
  topic's questions with a button that pulls one at random and will not pull it
  again until the bank is empty — a button that can hand you the same question
  twice is worse than no button; a question may carry a `tag` (its type) and
  `words` (the language it asks for), both of which wait behind the row's own
  tap and are deliberately **not** released by the 中文 switch — one tap gives
  the Chinese, the type and the phrases together, asked for on purpose. `bank` is the two-column phrase table, with the Chinese behind a
  tap like every other line. `sentences` is a numbered spoken list. `upgrade`
  sets a thin answer against the same answer done properly, with what to add
  listed between them and the better version behind a reveal. `timeline` lays a
  long answer out against the clock. `chain` puts several answers' shapes side
  by side — what each argues, and the order it gets there in, with the arrows
  drawn rather than typed into the content. `cue` draws a Part 2 candidate task
  card.
- **The timeline is wired to the speaking clock.** While the count-up in the
  same step is running, the row covering the current second lights up, so the
  page shows the pace instead of describing it. It is scoped to the step, reads
  perfectly with no clock at all, and clears on reset.
- **Every clock draws a recorder under it**, so a lesson gets one by having a
  clock and no content file mentions it. Every lesson in the course now has
  one: A.R.E.A. was the last without, because it ended on P.E.E.L. with nothing
  to practise against, and it now closes with six unseen questions, an
  A.R.E.A.-shaped planning pad, and an instruction to record the same question
  twice — once with the plan in sight and once without, since only the second
  take resembles the exam. A speaking lesson where the learner
  never hears himself is teaching with one eye shut — a clock can say ninety
  seconds, but only a playback shows where the gaps were. It keeps the page's
  rule that nothing is saved: the take is a blob URL held in memory and revoked
  when it is replaced, deleted or the page reloads, with no upload, no download
  and no storage. The microphone opens on the first press rather than at load,
  every track is stopped the moment a take ends so the browser's recording
  indicator goes out between takes, starting one recorder stops any other on the
  page, and `pagehide` stops anything still running.
- **Print is a designed output, and every block type has to be named in the
  print rules.** A block whose content hides behind a class or a `hidden`
  attribute prints blank unless the rules say otherwise, and it fails silently.
  That is not hypothetical: `qbank`, `upgrade`, `timeline` and `chain` were all
  added without updating it, so a printed Fifteen City Questions was fifteen
  bare questions with none of its sixty-seven phrases, and a printed A.R.E.A.
  had the thin answer without the Band 7 one. Fixed, and the block now carries
  a comment saying that adding a block type means adding it here.

### Part 3 — how to answer, then the topics to answer about

Eighteen lessons: four on how to build an answer, then fourteen topics to build
them on. The teaching order is the order they appear.

| # | Lesson | What it carries |
| --- | --- | --- |
| 1 | The A.R.E.A. Answer | The default shape — answer, reason, example, balance, judgment — with a phrase bank per move, a worked Band 7 answer, the upgrade from a thin answer, P.E.E.L. as the emergency fallback, and six unseen questions from five topics to run it on |
| 2 | Ninety Seconds, Three Ways | The same moves bent to opinion, cause and comparison questions, a ninety-second timing plan, the same answer cut to thirty, and twelve mixed questions to name the type of |
| 3 | Answer Shapes and Frames | Four question-specific structures, six universal frames, ten high-value sentences |
| 4 | Say It Another Way | The counterweight to all of the above: how a rehearsed answer gives itself away, one question answered two opposite ways, your own examples, and paraphrasing the question |
| 5 | Cities: Space, Transport and Traffic | Three questions on crowded cities, each with a full five-part model answer and its vocabulary, then the three shapes side by side and a recall exercise |
| 6 | Fifteen City Questions | The bank those three came out of — rivers, redevelopment, future transport — all fifteen questions, each carrying the language it asks for, plus eight phrases that travel to any topic |
| 7–8 | Computer Games, Technology in the Classroom | Six more worked answers from the same handout family as Cities, three per lesson, each in five parts with its own vocabulary |
| 9–14 | Education, Technology, Environment, Work, Health, Government and Society | Fifteen questions each, same shape as Fifteen City Questions, plus a topic-wide phrase bank |
| 15–18 | The commerce topics | Online Reviews (15 questions), Customer Service (15), Consumer Behaviour (10), Business Reputation (10) — each with its own collocations, useful sentences and a worked speaking pattern |

**Lesson 4 exists because lessons 1–3 are dangerous on their own.** Three phrase
banks and a stack of model answers is how you build range, and it is also how
you build a candidate who recites — which an examiner hears, and marks down
under Coherence when the memorised answer turns out to fit a near neighbour of
the question rather than the question. So one lesson pulls the other way:
nothing in it is a phrase to learn, and its drills are a question answered two
opposite ways, the student's own examples replacing the borrowed ones, and a
one-clause paraphrase before answering. It is taught before the topic lessons,
not after — a learner who meets four phrase banks first has already formed the
habit it is trying to prevent.

**Six of the topic lessons are written for this site rather than taken from a
handout.** Education, Technology, Environment, Work, Health and Government and
Society cover the six Part 3 areas the course was missing, and none of them has
a source behind it: the questions, the language under each one and all the
Chinese are the site's. Every one of their covers says so in those words. The
commerce and city clusters, which came from Lewis's own materials, say which
Chinese was added here instead. That distinction is on the page, not only in
this file, because a teacher ought to know which is which before teaching from
it.

Each of the six is built the same way: fifteen questions in three steps of
five, every question carrying the four or five phrases it asks for, a
topic-wide phrase bank, and notes that go after the topic's own failure mode —
answering about yourself in Work, the agreeable empty answer in Environment,
half-known medical vocabulary in Health. **Government and Society opens with a
note telling the learner to keep it general and name no party**, because that is
the one Part 3 area where a candidate can lose marks by winning an argument,
and the questions are written so that none of them needs a domestic reference.

**The two topic clusters are built the opposite way round**, on purpose. The
four commerce lessons are question banks with phrase banks beside them: lots of
questions, no model answers, because the point is volume. Cities is three
questions with the answers written out in full, because the point there is
seeing how far one point can be developed. A lesson is whichever of those two
the material actually is.

**Lessons 5, 7 and 8 are the worked-answer family**, all from the same
handout's five-part structure and all deliberately kept apart from the banks.
Computer Games and Technology in the Classroom are three questions each,
numbered 1–6 in their source the way Cities keeps its 9, 12 and 14. Technology
in the Classroom sits close to two banks that cover the same ground — Education
and Technology — and its first step says so and points at both, so a learner
wanting volume is sent there rather than left thinking three questions is all
there is.

**The fourth slot is the through-line.** Cities teaches that it either extends
the point or concedes the other side; every question card in the two new
lessons is tagged with which, so the shape can be predicted before the answer
is read. Games varies — one balances, two extend. Classroom does not: all three
end on a limit, which is what a question inviting enthusiasm is usually marking.

The city cluster then ends up as both, in two lessons, because that is what the
source was: a fifteen-question set, three of which had been answered in full.
Cities holds the three worked answers; Fifteen City Questions holds the bank,
and says on the page to do a question cold there before reading its model — a
worked answer read before the attempt is worth very little. The per-question
language in the bank is the source's own and is deliberately not merged with
the vocabulary tables in Cities, which the handout wrote separately and
differently for the same three questions.

**Two taxonomies had to be reconciled.** The A.R.E.A. material presents Opinion,
Cause and Comparison as a scheme of its own, which is largely the same three as
Answer Shapes' Balanced, Cause-and-effect and Comparison. Rather than ship two
rival schemes, Ninety Seconds presents them as A.R.E.A. bending to the question
in front of you and points across to Answer Shapes for the fourth kind — future
questions — which the A.R.E.A. material does not cover. The A.R.E.A. document's
per-step phrase lists and its separate Band 7 connector table were merged the
same way, into one bank per move, so a teacher is not reconciling two
overlapping lists mid-session.

A third scheme arrived with Cities — Main idea, Explanation, Example, Further
development, Conclusion — and is handled the same way rather than added to the
pile: it is A.R.E.A. with the fourth slot swapped, extending the point instead
of conceding the other side. The lesson says so, and makes choosing between
extending and balancing the thing it actually teaches.

The topic lessons then rehearse whichever shape was taught rather than
explaining it again.

**Some of the Chinese is the site's, not the source's.** The commerce material
gives Chinese for the phrase banks and the frames but the questions in English
only, so the Chinese for all fifty questions was written here. The A.R.E.A.
material is bilingual throughout, and what was written for the page there is the
question above each of its three worked answers, which arrive without them. The
Cities handout gives Chinese for its questions, its section labels and its
vocabulary, but not for the model answers, so those translations are the site's
too. Each lesson cover says which is which.

**Cities keeps its handout's question numbers** — 9, 12 and 14 — on the question
cards, because that is how Lewis refers to them in a session. Fifteen City
Questions is the rest of that set, grouped into the three themes the source
used, so the numbering lines up: questions 9, 12 and 14 there are the three
answered in full in Cities, and the page says so rather than leaving a student
to notice.

The audio script the city set was built from is **not** in the repo — only the
questions it produced.

**The course disagrees with these handouts about length, and says so on the
page.** They close by recommending forty to sixty seconds — and are split on it
themselves, since the Computer Games handout's own practice section says sixty
to ninety on the same page as its teaching note says forty to sixty. Lewis
teaches the long answer, so **ninety seconds is Part 3's band course-wide** —
1:10–1:30, set once on the part in `course.js` and inherited by every lesson in
it. All three worked-answer lessons state that target in their closing notes
and name the handout's figure in brackets rather than quietly dropping it, the
way the 學測 page names the four places it departs from its source. The
handouts' warning against reciting the models is kept untouched, and so is
their point that a band cannot be judged from written content at all; neither
was ever in conflict.

An examiner will often stop a candidate sooner than ninety seconds, and a
shorter answer is not a failure. The long band is a training target for
developing a point, and the reason it is one number rather than a short band
for the question lessons and a long one for the model-answer lessons is that
two bands were teaching two things at once.

### Part 1 — four minutes of easy questions

Four lessons, and they are deliberately shorter than the Part 3 ones, because
the exam part is. Part 1 has no planning time, the questions are about you, and
the band is fifteen to thirty-five seconds — a different exam from Part 3, and
the course has to say so.

| # | Lesson | What it carries |
| --- | --- | --- |
| 1 | Two Sentences More | The habit the other three assume: answer, reason, one detail, stop. Two `upgrade` blocks set a four-second answer and a sixty-second one against the right length, plus fifteen questions to run at speed |
| 2 | Hometown and Where You Live | The most memorised answer in the test, replaced with one a person would give. Twelve questions with the language each asks for |
| 3 | Work and Study | Saying what you do in words a stranger understands, instead of a job title. Twelve questions |
| 4 | Free Time and Hobbies | Permission not to have a hobby, and frequency phrases, which are free marks. Twelve questions |

**The second `upgrade` in lesson 1 is a Part 3 answer, and it is wrong here.**
It is balanced, it concedes, it concludes — it is the A.R.E.A. answer delivered
to "do you prefer indoors or outdoors?", and it would score well two parts
later. A candidate who has drilled Part 3 hard is the one most likely to make
that mistake, so the lesson shows it rather than warning about it.

### Part 2 — the long turn

Five lessons, and the first use anywhere of the `cue` block, which was written
when the course was built and then sat unused for as long as Part 2 was empty.

| # | Lesson | What it carries |
| --- | --- | --- |
| 1 | The One-Minute Plan | What the sixty seconds are for, as a `timeline` that lights up against the planning countdown. Four decisions, in order, and never a written sentence |
| 2 | Describe a Person | One remembered scene instead of five adjectives, and the sentence that keeps the adjective but earns it |
| 3 | Describe a Place | Moving through a place instead of listing it — count the "there is" in each version |
| 4 | Describe an Experience | The card that pays for grammar: past continuous for the scene, past simple for the action, past perfect for what came before, with a worked answer tagged by tense |
| 5 | When You Run Dry at Ninety Seconds | Contrast, time, person, reason — four places more speech comes from, and how to end on purpose rather than trail off |

**Lesson 4 is where Grammatical Range stopped being ignored.** Every other task
in this course can be answered in the present simple, so three quarters of the
band were being practised and a quarter was not. Narrative tenses only sound
natural inside an actual narrative, which makes the story card the only honest
place to teach them.

**The planning timeline drove a change in `render.js`.** A timeline maps time
*elapsed*, and Part 2's planning clock runs 1:00 down to 0:00, so the countdown
is inverted before a row is lit. A `timeline` now also declares which clock it
follows — `for: 'plan'` takes the countdown, anything else takes the count-up —
so a step holding one of each drives them independently. The scoping is still
per step, which is worth knowing when writing a lesson: **a timeline in one
step and a clock in another will never meet**, which is exactly the bug the
one-minute-plan lesson shipped with for about ten minutes.

### Virtual Examiner

`/ielts-speaking/examiner/` — the one page in the course that shows you
nothing. It speaks a question drawn at random from every built lesson, starts
the part's clock, records the answer, and reveals the question only when asked.

**Why it exists.** Every question in this course sits on a page next to its own
vocabulary and often a model answer. That is right for teaching and wrong for
rehearsal: nobody in the exam hands you the question in writing, and a
candidate who has only met questions on paper has been practising reading.

**Where the questions come from.** Every built lesson, harvested from its
`qbank` and `question` blocks — 164 distinct Part 3 questions, 50 for Part 1
and 9 Part 2 cards at the time of writing. There is **no index file and no
build step**: picking a part fetches only that part's lessons and evaluates
them with `new Function(src + '; return LESSON;')`, so the pool is whatever the
lessons currently say and cannot go stale. A question appearing in more than
one lesson is kept once and remembers every lesson it came from, so the reveal
links back to all of them — which is why Part 3's 204 raw questions become 164.

**Part 2 is deliberately not hidden.** Part 1 and Part 3 questions are spoken
by the examiner, so this page speaks them and shows nothing. Part 2 is not: the
real test hands over a printed card and a minute with a pencil. Hiding a Part 2
card would be a harder exercise and a less faithful one, so the card is shown,
nothing is spoken, and the minute runs.

**If the device cannot speak, the page shows the question instead** and says so
— a silent examiner is worse than a visible question.

The speech and recording code is a trimmed copy of `render.js`'s. Two pages is
not yet a reason to extract a shared file and re-wire twenty-eight lesson
shells; a third page would be. One thing did have to change: `render.js`'s
`el()` returns `firstElementChild`, which is right there because every block
builder returns one element, and silently drops half the page here.

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

## Fab English — adult, 自學 and 教學, a plant's own word list

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
  the word's plant sense — *"The lot is waiting in the stocker."* — each with
  its 中譯.
- **A quiz** of four kinds, and a **search** that reads both the English and
  the Chinese.

The A–Z view is still one tap away in the bar, because that is the order the
learner's own copy is in.

### Two modes

It began as a teacher-led page. In October 2026 the client wanted something to
work on alone between sessions, so it grew the two-mode shape of the 國中 pages
([[junior-high-material-design-rules]] in the memory notes):

| | 自學 | 教學 |
| --- | --- | --- |
| Chinese | shown — gloss **and** the sentence's 中譯 | behind the 中 chips |
| 記住了／還不熟 | kept on the learner's own device | not offered |
| Filter by mark | 還不熟的／還沒標記／記住了的 | not offered |
| Between students | nothing to do | 設定 → 重新開始 |

**Two links, one page.** The plain URL is the student's and carries no switch
at all. Opening the page once with `#teach` makes *that device* the teacher's
and is remembered; the hash is then stripped from the address bar so it cannot
be copied to a student by accident. 設定 → 「在這台裝置隱藏」 undoes it. He has
to open `#teach` once per device.

### Design notes

- **English leads, Chinese waits — in 教學.** The gloss and the 中譯 are one
  layer behind a 中 chip; the 中文 switch in the bar opens all 288 at once. In
  自學 that layer starts open, because a learner alone has nobody to ask.
  Section titles, notes, the contents list and the quiz instructions stay
  bilingual in both modes: scaffolding, not comprehension practice.
- **The 中譯 came later than the sentences.** The English examples were written
  first, English-only on purpose. Self-study needs the sentence as well as the
  word, so all 288 were translated when the modes went in.
- **The quiz is generated, never authored.** Four kinds, a quarter each —
  字義 (see the word, pick the Chinese), 填空 (the sentence with its headword
  cut out), 聽力 (hear it, pick it from four) and 拼字 (type it in, first letter
  given, 再給一個字母 for more). All four are built from the same example
  sentence; the three wrong options are other words from the same theme with
  the same part of speech, skipping any word already sitting in the sentence.
  A round is ten questions, it respects the theme, search and mark filters, and
  in 自學 it leaves out what is already marked 記住了. So the quiz cannot drift
  from the word list — edit a sentence and its question changes with it. The cost is that a
  distractor is only *grammatically* plausible, not always semantically, which
  in a lesson is the interesting case anyway.
- **Every example contains its headword verbatim**, never inflected. That is
  what makes a clean gap and a clean bolded word. If you edit a sentence, keep
  the headword in it unchanged — `tools/` has no script for this page, but the
  check is one line: every `ex` must match its own `w` (or its `k`).
- **One card per word, built once.** Switching between the theme view and the
  A–Z view moves the same nodes rather than re-rendering, so a word the teacher
  has opened stays open across the switch and the search is a plain show/hide.
- **Nothing is ever scored.** There is a 1 / 10 counter so you know how far
  through a round you are, and that is all — no streak, no percentage, no
  record of a round once it ends. Wrong answers wobble, say what the option
  actually means, and leave the question open.
- **What persists, and where.** The voice, the speed, the 中文 switch and
  whether this is a teacher device are kept per device. The 記住了／還不熟 marks
  are kept too — but only in 自學, only in that browser's `localStorage`, and
  they never reach Lewis. 教學 records nothing at all, so one client's session
  cannot leave anything for the next; the mark colours are hidden there too, so
  a taught list is always neutral.
- The ⚙ 設定 sheet shows only what the mode needs: 自學 gets the mark counts and
  清除所有標記 (which asks twice), 教學 gets 重新開始 and **hide the example
  sentences**, so you can ask for a sentence before showing ours.
- **Print** gives the word list as a two-column handout with all the Chinese
  open; the quiz and the marks are dropped, since on paper a tap-the-word
  exercise is just the answers.

### On the source

The sheet it came from is a client's internal document and carries a
confidentiality marking. The page keeps the words and the Chinese — ordinary
English vocabulary — but names no company anywhere, and carries
`noindex, nofollow`. Read the note in **Live sites** before pushing it:
`noindex` keeps a page out of search results, it does not make the URL private.


**Reworked 2026-11-03** together with `/family-law/` — one pinned row of tools
with the rest behind Filter, sentences folded until a word is tapped, a quiz
that takes the page, legible greys (`--ink-faint` `#5f6a80`), larger touch
targets. The details are in the Family Law English section; the A–Z view is
still there, under Filter.
## Family Law English — adult, 自學 and 教學, the English of a family case

One adult learner who works with family-law cases, built 2026-11-03. Lewis
chose all four of: a specific student, **content written by me** (no source
document), **自學＋教學** like Fab English, and **public but unnamed** — the
learner's name appears nowhere in the folder, and the page carries `noindex`
like the other student pages.

It is **Fab English's renderer, copied** — `render.js`, `style.css` and the
panel in `index.html` — with its own `content.js` (`LAW.groups`), its own
localStorage prefix `fl.`, and a slate-teal palette in place of the plant blue.
So everything in the Fab English section about the quiz, the two modes, `#teach`
and the verbatim-headword rule holds here, and a fix to one page has to be made
in the other deliberately.

| | Theme | Terms |
| --- | --- | --- |
| 01 | Marriage and the couple 婚姻與夫妻關係 | 16 |
| 02 | Divorce 離婚 | 16 |
| 03 | Property and money 財產與金錢 | 18 |
| 04 | Children 子女 | 18 |
| 05 | Domestic violence 家庭暴力 | 17 |
| 06 | Inheritance and later life 繼承與高齡 | 19 |
| 07 | The court and the process 法院與程序 | 19 |
| 08 | Cross-border cases 涉外案件 | 13 |
| 09 | Talking with a client 與當事人溝通 | 18 |

What is worth knowing before editing the content:

- **Every sentence describes Taiwan's law, not an American or British court.**
  The terms follow the Civil Code's Family and Succession parts, the Family Act
  and the Domestic Violence Prevention Act: two ways to divorce (兩願／裁判),
  剩餘財產分配 rather than "equitable distribution", three kinds of protection
  order and who may ask for each, mediation before litigation, judgment vs
  ruling (判決／裁定). Where the English and the concept do not fit — *custody*
  for 親權 — the gloss and the theme note say so. Check a new sentence against
  the current article before adding it; the 2023 DV amendments and the 2023
  constitutional judgment on the more-at-fault spouse both changed things a
  textbook would get wrong.
- **The cover says it is language practice, not legal advice**, in both
  languages. Keep that line.
- Theme 08 is phrases (`p: "ph."`) for a client meeting, so its quiz
  distractors are other phrases. They still obey the verbatim rule.
- The UI calls the entries **terms／詞彙**, not words／單字, because so many are
  multi-word ("divorce by mutual consent"). The quiz prompts still say "word".

**Who it is for, learned later the same day.** The learner is a **lawyer**,
B1–B2, at a large Taiwan firm whose family practice is divorce (親權, 探視,
剩餘財產, 扶養費, 贍養費) and inheritance (繼承權侵害, 遺產分配, 遺囑效力). They
use English to **meet foreign clients, read English documents and write
English emails**. Lewis gave the firm's website; **the firm is not named
anywhere in the folder**, and neither are its brands or lawyers. That brief
added 24 terms (the 涉外案件 theme; 遺產分割, 繼承回復請求權, 假扣押, 改定親權,
暫時處分, 利益衝突審查, 委任契約 …) and the Practice tab.

**The Practice tab** is [`practice.js`](public/family-law/practice.js),
`window.PRACTICE`: three consultations (`kind: "dialogue"`, lines with
`who: "L" | "C"`), two English documents a Taiwan lawyer is handed (a US
divorce judgment, clauses from an English will, each with a *What to check in
Taiwan* note), and three emails the lawyer writes. Every piece ends in
*Phrases to take away*. All people, amounts and dates are fictional. A line
taps open its Chinese like a card; **Cover the lawyer's lines** turns the
dialogues into role-play — the learner says the line, then taps to check it.
The quiz does not draw on it.

**Two voices and Play all** (added the same day). The lawyer speaks in the
voice chosen in 設定; each dialogue's client gets a different voice, matched
to `client: { lang, sex }` in practice.js (British man, American woman,
Australian woman). The Speech API has no sex field, so `clientVoice()` reads
it off the voice's name; it also skips macOS's joke voices and never hands
the client "Ava (Enhanced)" when the lawyer is Ava. **Play all** reads a
piece top to bottom with the current line lit; with the role-play cover on it
**stops at each covered lawyer line** until the learner taps Continue or the
line. Audio could not be heard in the in-app preview browser (it fires no
speech events at all), so the play-through was checked with `speak()`
stubbed; on a real browser it needs one real tap to start, as Chrome requires.
Lewis listened on his own device the same day and confirmed the voices work.

**Checked against the law, 2026-11-03.** Ten of the page's legal statements
were checked against law.moj.gov.tw, ris.gov.tw and the MOI's reciprocity
table. None was wrong; five were tightened: residence after divorce is
something the parent *applies* for (入出國及移民法 §31 IV(3), custody **or**
visitation); a US heir's state is their **domicile**, not simply where they
live (MOI's per-state table — Oklahoma has none; inherited farmland must be
sold within 3 years, 土地法 §17 II); renouncing is **in writing to the court**
(§1174); the recovery claim also ends **ten years** after the death (§1146
II); and the will note now says nationality *when the will was made* (§60)
versus *at death* (§58), with the Taiwanese-heir exception as §58's proviso.
Recheck the MOI table before adding anything on a specific US state.

**Search reaches Practice.** Typing in the word-list search also lists up to
six matching Practice lines under the words ("We act for …" finds the email to
opposing counsel); tapping one opens Practice at that line. Every practice
line carries `data-ref="pieceId:index"` (`:check`, `:p0` phrases, `:m0`
model) for this.

**換你寫.** Each email has a `task` and a `model` in practice.js: a short
situation, then a model answer behind *Show a model answer*. There is no text
field — the adult house rule, nothing saved — so the learner writes in their
own mail program or says it in a lesson.

**Quiz polish, on both this page and Fab English:** 拼字 only for a single word
of up to twelve letters (longer terms become a gap fill); letter counts ignore
spaces and hyphens; the reason a wrong option is wrong sits under the grid
instead of inside the tile, so the grid no longer jumps; quiz English is in
the same serif as the list; a live region outside `#quiz` announces right and
wrong to a screen reader; the section count is one number; and `render()`
always runs `applyFilter()`, so clearing the search from the quiz clears its
note too.

**Its renderer was reworked on 2026-11-03** from a UI/UX review Lewis asked
for, and the same changes were then ported to Fab English the same day, so
the two match again apart from content, labels (terms／詞彙 vs words／單字),
palette and storage prefix. What changed:

- Only one row of tools is pinned — Terms／Quiz tabs, search, **Filter**. Theme,
  marks, order and the **Sentences** switch open behind Filter, with a count
  badge for active filters.
- **Sentences on tap** is the default: a card is the term and its gloss until
  tapped; the headword is a `<button>` with `aria-expanded`. It replaces the
  teacher panel's "hide the example sentences" checkbox. Stored as `fl.fold`.
- The quiz hides the cover and the contents list (`body.view-quiz`); Next and
  every filter scroll to just below the pinned tools, whose height render.js
  keeps in `--tools-h`. Going back to Terms returns to where the list was.
- On a phone the Themes button names the theme on screen ("04 Children").
- `--ink-faint` is `#646e73` (4.8:1); the disclaimer is a note box. Touch
  sizes are raised under `(pointer: coarse)` — note `.bar .bar-btn`, since
  house.css is linked last and a bare `.bar-btn` loses to it.
- `[hidden] { display: none !important }` — `.views { display: flex }` had been
  beating the attribute, so By theme／A–Z showed during the quiz.

### `/family-law/meeting/` — Meeting Prep, behind a password

Built 2026-11-05 for the same student: preparation for one real meeting in
English with a visitor from abroad. What the meeting is, and with whom, is
inside the sealed content, not here — this README is public. Lewis asked for reference material
first; the student's own script comes later and has a waiting slot
(`script` section). **It is the first page in the repo behind a password.**

**How the password works.** The repo is public, so a login screen alone would
leave the words readable on GitHub. Instead the content is **encrypted**:

```
private/family-law-meeting/content.mjs   plaintext — git-ignored, never committed
private/family-law-meeting/.pass         the password — git-ignored
tools/seal.mjs                           encrypts one into the other
public/family-law/meeting/sealed.js      the encrypted copy — committed and published
```

After editing the content, re-seal and commit `sealed.js`:

```
node tools/seal.mjs private/family-law-meeting/content.mjs public/family-law/meeting/sealed.js
```

PBKDF2-SHA-256 (310 000 rounds) → AES-256-GCM, all WebCrypto, so it works on
both live hosts and on localhost but not over plain http. 「記住這台裝置」 stores
the derived key under `flm.key`, never the password; the seal keeps the salt so
a remembered device survives content edits, and changing the password locks
every device out until it is typed again. ⚙ → 這台裝置上鎖 forgets it. The
plaintext exists only on Lewis's machine — **if `private/` is lost, decrypt
`sealed.js` with the password; there is no other copy.** It is as strong as
the password: anyone can copy `sealed.js` and guess offline.

**Lewis's recordings.** The "firm" section plays Lewis's own reading
(2026-11-09) instead of the computer voice. One m4a per part, mono AAC, is
kept in git-ignored `private/family-law-meeting/audio/`; `recordings.mjs`
beside the content maps each line's exact English to `[file, start, end]`
(Whisper word timings, cut mid-pause), and the content wraps its export in
`withRecordings()`. Edit a line's English and its recording drops out to the
computer voice, by design. The audio is sealed with the page's own key into
`public/family-law/meeting/audio/rNN.bin` (neutral names, IV + AES-GCM):

```
node tools/seal-files.mjs public/family-law/meeting/sealed.js private/family-law-meeting/.pass public/family-law/meeting/audio private/family-law-meeting/audio/*.m4a
```

Re-run that after a password change. The page opens the files in the
background after unlock, so a tap can start sound at once (iOS needs play()
inside the tap); a part whose lines all have a recording gets "Hear the whole
part 聽整段" on its heading.
One known slip is kept by Lewis's choice (2026-11-10): in "Our markets" the
line "But he said no — she had much more…" is read with "he" for "she". The
page text is right; only the audio differs.

**Download PDF.** ⚙ → 下載 PDF opens the browser's print window ("Save as
PDF"; on iPhone/iPad, Share → Save to Files). No PDF is ever published: it is
made on the reader's device from the unlocked page. The print styles open
everything — the Chinese, lines Cover hid, every cue card's hints and answer —
start each section on a new page and drop the buttons; about 44 A4 pages.
Each section heading also has a **PDF ↓** button that prints that section
alone (`body.print-one` + `.print-this`), with the title — the browser's
suggested file name — set to "Meeting Prep 06 Cue cards" and so on, put back
on `afterprint`. In print, the notes and Q&A grids become plain blocks: Chrome
moves a grid to the next page whole, which left half-empty pages.

**Content rules.** The firm and the visitor are never named (slots and "our
firm"); the visitor's organisation is, as the subject of the meeting. Facts
about it come from its own pages, read 2026-11-05, and the plaintext's header
lists them. The firm's numbers come from its website and are drawn as **slots** — `[[…]]`, highlighted, read aloud without
the brackets — for the student to confirm. The meeting length is labelled an
estimate.

**Renderer.** Its own, smaller than the parent's: no quiz and no search, a
block list instead (`notes`, `table`, `flow`, `lines`, `qa`, `dialogue`,
`words`, `email`, `pending`, `check`, documented in `render.js`). It keeps the
parent's 自學／教學 and `#teach`, the two voices and Play all. **Cover** in the
bar hides every line the student says (`who-Y`) across the page, not only in
the role-play; the visitor (`who-V`) gets an en-HK voice where the device has
one, else en-GB. The checklist is the one thing saved (`flm.check`). The page
is not linked from `/family-law/`.

**Finding your way (2026-11-12).** Unlocked, the page is about 55,000px tall
on a phone, and section 04 has thirteen parts. So every headed `lines` block
is a numbered **part** (`h3.part-h`, id `<section>-<n>`). A section with three
or more parts opens with a strip of them; the contents list the parts of the
section being read. One scroll handler (`watchPlace`) lights the section and
part, names them on ☰ ("04.3 Our firm in one minute"; on a phone ☰ keeps its
label for this), and draws a gold progress line under the bar. Every section
ends with a card to the next. A `notes` block of four or more folds to its
headlines (Open all 全部展開). Print opens the notes and drops all of this.
Also: ▶ is a 34–38px round target, the cue-card controls fit one row on a
phone, and the cards follow a swipe. The fix that matters if this is copied:
`main#doc { min-width: 0 }`. Without it the sideways strip widens the grid
column, and the whole page with it.

## Cambridge 核心單字 — the official lists, from Starters to B1 Preliminary

`/cambridge/` is a hub with one page per Cambridge vocabulary list, every word
with Chinese. Cambridge publishes lists up to B1 only; B2 First and above have
none, and the hub says so.

| Page | List | Words | Built for |
| --- | --- | --- | --- |
| `/cambridge/young-learners/` | Pre A1 Starters, A1 Movers, A2 Flyers (2018 syllabus) | 1,407 (495 / 399 / 513) | 6–12, the children's house rules |
| `/cambridge/a2-key/` | A2 Key and Key for Schools, August 2025 | 1,727 | 國中, 自學 and 教學 |
| `/cambridge/b1-preliminary/` | B1 Preliminary and Preliminary for Schools, August 2025 | 3,121 | 國中 and 高中, 自學 and 教學 |

A2 Key was built first at `/a2-key/` (2026-10-25) and moved under the hub on
2026-11-03. `/a2-key/` stays as a redirect that carries the hash, so links
already handed out — `#borrow`, `#teach` — still land. Lewis handed over the
**2009** KET list at the start; asked, he chose Cambridge's current one.

The PDFs are fetched, not kept here:

- `https://www.cambridgeenglish.org/images/506166-starters-movers-flyers-word-list-2018.pdf`
- `https://www.cambridgeenglish.org/images/506886-a2-key-2020-vocabulary-list.pdf` (the URL says 2020; the file is August 2025)
- `https://www.cambridgeenglish.org/images/506887-b1-preliminary-vocabulary-list.pdf`

### Where the content comes from

| | Source |
| --- | --- |
| A2 Key and B1: words, part of speech, examples, topics, 2025 flag | the PDF, read by `tools/cambridge/extract.py <exam> <pdf>` then `topics.py <exam> <pdf>` into `tools/cambridge/<exam>/words.json` |
| Young learners: words, part of speech, level, topics | `tools/cambridge/young_learners.py <pdf>`, from the PDF's combined A–Z list (which marks each word S, M or F) and its thematic list |
| 中文, 中譯, the `*mark*` on the headword in each example, the children's emoji | written for these pages, in `tools/cambridge/<exam>/zh.json` |
| Corrections, labels, Br/Am lines, word links | `tools/cambridge/build.py <exam>` (or `young_learners.py build`), which writes `public/cambridge/<exam>/words.js` |

`exams.py` holds everything that differs between the A2 and B1 PDFs — page
ranges, column positions — and every change made to Cambridge's text. That
keeps `words.json` as printed; a corrected line keeps the original behind an
「已勘誤」 tag. Corrected so far:

- **A2 Key:** *chips* ("Am Eng: biscuit"), *practice*, *driving licence* ("Br Eng"
  twice), *friend*'s example ("easy for her make friends"), the parts of speech
  of *unfortunately* and *unhappy*.
- **B1 Preliminary:** *suprising* (the headword's spelling), *drop*'s verb
  example labelled (n), the parts of speech of *solve*, *unusual*, *unhappy*.

The B1 PDF breaks its own lines more than A2's does. `extract.py` mends what a
rule can (a headword run into the line above it, a part of speech wrapped to
the next line, "Please leave comments below. common (adj)"), and `exams.py`
lists the rest by hand (`leaked`, `repair`): *border* and *communicate*, which
ran into the end of the example above them, *digital camera*, *driver's
licence*, *film star*, *truck*. Rerunning A2's extraction after each of those
changes gave a byte-identical `words.json` — check that again after touching
`extract.py`.

`zh.json` is matched to `words.json` **by position**. If a new edition adds or
splits an entry, match the old Chinese back by word before rebuilding, as was
done when *border* and *communicate* appeared mid-translation.

### A2 Key and B1 Preliminary

One engine, `public/cambridge/lists.js` and `lists.css`; each exam's page only
sets `EXAM = { url, store, newLabel }` and loads its own `words.js`. A fix there
lands on both. The machinery is the Linguaskill word list's: 今天這一組
flashcards with a review schedule, a four-type quiz with no score, 投影, the
A–Z rail, one link per word (`/cambridge/a2-key/#borrow`).

- **The Chinese follows Cambridge's examples, not a dictionary.** Cambridge
  gives an example only to say which meaning is tested: *bank* is 銀行, never
  河岸; *net* is 網路; *rock* is 搖滾樂. The gloss gives that meaning and
  nothing else, so a student does not learn senses the exam leaves out.
- **British English first.** The lists are British (colour, biscuit, lift,
  first floor = 二樓), so the default voice is en-GB, and the Br/Am pairs are
  spelled out under each word: 「英式英文；美式說 *cookie*」, or 「美式寫成」
  where only the spelling differs.
- **Ranges instead of levels.** Each list is one level, so the bar offers
  全部 / 2025 新增, a topic menu and a letter menu. 今天這一組 walks the whole
  list A to Z, twenty words a day.
- **A quiz that fits a list with few sentences.** Only one word in seven has a
  Cambridge example (A2 252, B1 467), so 填空 and 拼字 come up only for those,
  and the rest split between 字義 and 聽力. A 填空's wrong options are forms
  taken from Cambridge's other sentences with the same ending — *borrowed* gets
  *called / shared / noted* — so the tense never gives the answer away.
- Same rules as every 國中 page: 自學 shows the Chinese and keeps marks in the
  browser only (`a2k.` / `b1p.` prefixes, which the hub reads to show 「N 個記住了」
  on each tile); 教學 hides it behind 中 chips and records nothing; the plain URL
  is the student's, `#teach` once makes a device the teacher's and is then
  removed from the address bar.
- B1's 3,121 glosses were written in six batches and then read by two
  reviewers who were not the writers; nine fixes came back (*post* had its
  noun and verb glosses swapped). A2's were read line by line.

### 主題 and 本週指定學習單字 (added 2026-11-11)

**主題** is a fourth view on A2 Key and B1 beside 單字表／閃卡／測驗: one tile
per Cambridge topic with its word count and, in 自學, a 記住了 bar. A tile
opens the list on that topic. The view also says plainly that Cambridge's
topic lists cover only part of each list (A2: 909 of 1,727) — the rest are
mostly function words, reached through 單字表. The young learners page already
led with its topic chips, so it gained only the assignment link.

**本週指定學習單字** — a link that opens a list on several chosen topics, for
a student to review. Asked for on 2026-11-11, built the way Grammar
Practice's 指定作業 works (`?hw=`). It was named 「Lewis 指定學習單字」 for
its first day; Lewis renamed it to 「本週指定學習單字」 the same day.

| | A2 Key / B1 | Starters, Movers, Flyers |
| --- | --- | --- |
| Where Lewis makes it | the 指定 button in the bar (teacher devices only — `#teach` once) | inside ⚙ |
| What he picks | topics, any number; a title | levels and topics, any number; a title |
| Link | `?hw=food-and-drink_sport&t=第 3 週複習` | `?hw=animals_food-and-drink&lv=01&t=…` |
| What the student sees | a banner with the title and topic chips; 單字表, 主題, 閃卡 (今天這一組 too) and 測驗 all stay inside the set | the level buttons go; only those topics' chips; the cards and the game stay inside the set |

- **Topics go by a slug of Cambridge's English topic name** (`food-and-drink`,
  `the-natural-world`), not by position, so a link already sent stays right
  if the topic list is reordered. Renaming a topic in `exams.py` /
  `young_learners.py` *would* break links already sent — don't.
- An unknown slug is ignored; a link with none left is the ordinary page.
- Nothing is stored anywhere but the URL. The student's 記住了 marks are the
  same ones as on the full list (same device, same browser), so a word learnt
  in an assignment counts on the full list too; nothing reports back to Lewis.
- Inside an assignment the page never remembers a topic choice, so the link
  always opens on all of its topics.

### Sharing, returning, filters, finishing (added 2026-11-11)

Four changes from a design review Lewis asked for, built the same day:

- **Link previews.** Each of the four pages carries `og:` tags and its own
  1200×630 card (`og-hub.png`, `og-a2-key.png`, …, drawn by
  `tools/cambridge/make_images.py` along with the home-screen icon), so a link
  pasted into LINE shows a card instead of a bare URL. A static page cannot draw
  one per assignment: a 本週指定學習單字 link shows its exam's card.
- **今天這一組 up front.** A2 Key and B1 open with a strip — 「今天這一組：3 個要
  複習、17 個新字」, a 記住了 bar, 開始 → — above the controls. 開始 clears every
  filter and opens today's set over the whole list (or the whole assignment).
  Once a device has marked any word (`body.returning`), the headline and blurb
  fold away so the strip is on the first screen.
- **篩選中 chips.** Search, 新增, topic, letter and the 記住了 filter each show as
  a chip with × under the controls, plus 全部清除. The page remembers the last
  topic, and a student coming back to "107 個字" had no way to see why.
- **完成卡.** Inside an assignment, the end of a quiz round (and the banner, once
  every assigned word is 記住了) shows a blue card: date and time, the
  assignment's title and topics, first-try score, rounds done on this device,
  記住了 n / N, and 「截圖這張卡，傳給 Lewis 老師」. The young learners game shows
  the same card at the end of a round. With no server, the screenshot *is* the
  report. Rounds are counted per assignment in `a2k.hwlog` / `b1p.hwlog` / `yl.hwlog`.

**A class-name collision, found here.** Assignments put a class on `<body>`; it
was `hw` — which is also the class of every headword row (`.hw { display: flex;
flex-wrap: wrap; align-items: baseline }`). For a day, an assignment page laid
the whole body out as a flex row; on a phone it mostly wrapped back into place,
on a wider screen the sections came out of order. The body classes are now
`assigned` and `returning`. Before adding a class to `<body>` here, grep
`lists.css` for it.

### Path, quieter rows, a filter sheet, pictures and stickers (added 2026-11-11)

The second half of the same design review, all four built:

- **學習路線 on the hub.** Five stops — Starters, Movers, Flyers, A2 Key, B1
  Preliminary — on one line (a column on a phone), each with its CEFR level and
  a rough grade, A2 Key and B1 with this browser's 記住了 count. 「你在這裡」 marks
  the list this browser opened last: every page writes `cam.last` (`yl0`–`yl2`,
  `a2k`, `b1p`) when it opens. 「不知道從哪開始？」 is five grade buttons that
  highlight a stop and suggest where to begin. The young learners page accepts
  `?level=0|1|2` so the path can open a level.
- **One control per word row** on A2 Key and B1: a dot that steps 未標記 →
  記住了 → 還不熟 → 未標記, with its label beside it, and a ⋯ menu holding
  「複製這個字的連結」. The two buttons and the link that used to repeat on every
  row are gone; the flashcards keep their big 記住了／還不熟 buttons.
- **篩選 sheet on phones** (≤ 560 px): the bar keeps the views and the search
  box; range, topic, letter, marks and 中文 sit behind 「篩選」 (with a count of
  what is on) in a sheet that slides up. The controls themselves move into the
  sheet and back when it closes — however it closes — so there is one set.
- **Pictures for the young learners**, from Microsoft's Fluent Emoji (3D style,
  MIT licence, notice in `pics/LICENSE`). `tools/cambridge/kid_pictures.py`
  matches each word's emoji to its Fluent picture and saves it as a 192 px WebP
  (~5 KB) in `public/cambridge/young-learners/pics/`; `pics.json` feeds `PICS` in
  `words.js`. Same picture on every device, so an older iPad no longer shows a
  box for newer emoji. A helper proposed pictures for 143 more words; 118 were
  kept (44 of them Starters) and 25 dropped as misleading — *face* 🙂 reads as
  happy, *queen* is a princess, *nurse*/*kitten*/*airport* sit too close to
  *doctor*/*cat*/*plane*, *sausage* is a hot dog. 480 of 1,407 words now have a
  picture.
- **貼紙本.** Every word found in the game becomes a sticker (`yl.stickers`),
  however many tries it took — no failure state. A third view shows the level's
  pictures: found ones in colour with the word, the rest greyed with 「?」.

### Starters, Movers, Flyers

Its own page, built to the children's house rules rather than on the list
engine: every card speaks when tapped; 362 words that one picture can show
carry an emoji, and in 全部 those come first; the Chinese waits behind 中 for a
parent or teacher (⚙ can show it all); the voice is an American young female
(Flo, Shelley, Samantha, matched by name prefix).

- **Levels are the three exams.** Each level button shows the words *new* at
  that level; a tick adds the levels below, since a Movers candidate needs the
  Starters words too.
- **聽聽看，點一點** — hear a word, tap its picture (or, for readers, the word).
  No timer, no score: a wrong tile wobbles, greys out and the word plays again;
  the question stays until the right one is found. First tries are kept for
  the faint ⚙, not shown to the child. A question never shows two tiles with
  the same picture (lift / elevator, cry / sad share one) — checked across all
  63 level-and-topic combinations.
- Some words appear twice with different senses (*bat* the animal, *bat* for
  sport; *letter* of the alphabet and in the mail); the topic tagging follows
  the bracket so each lands in its own topic.

## Body Words — 國中, 自學 and 教學, the words for what the body makes

`public/body-words/` — eight topics and the English for each, in the two-mode
shape of the 國中 pages.

| | | Terms |
| --- | --- | --- |
| 01 | 眼屎 | sleep, eye boogers, eye gunk, eye discharge |
| 02 | 鼻屎 | booger, bogey, dried nasal mucus |
| 03 | 耳屎 | earwax, cerumen |
| 04 | 口水 | spit, drool, dribble, saliva |
| 05 | 汗 | sweat, sweaty, perspiration |
| 06 | 痰 | phlegm, mucus, a frog in one's throat |
| 07 | 頭皮屑 | dandruff, flakes, scalp, seborrhoeic dermatitis |
| 08 | 指甲垢 | the dirt under your nails, gunk, grime, subungual debris |

The first three started from a Cool English carousel Lewis handed over; the
words there are right, and its framing — a casual word, a formal word, a
collocation line — is the shape the whole page keeps. The other five were added
on the same pattern and are this page's own.

### What the page says that the source does not

Three things were added, and they are the reason this is a page and not a
screenshot:

| | |
| --- | --- |
| **cerumen** | 鼻屎 is given a 正式說法 and 眼屎 is given one, but 耳屎 is given none. The medical word is *cerumen*, which is what a nurse writes on a form. Without it the set reads inconsistent. |
| **booger ≠ snot** | Chinese separates 鼻屎 from 鼻涕 and so does English: a booger is dry, snot is wet. This is the mistake a Taiwanese student actually makes, and the source does not mention it. |
| **挖耳棒** | *Ear pick* is understood and is how the tool is sold, but a British or American speaker says *cotton swab*, or *Q-tip* in the US. Left uncorrected it comes out sounding translated. |

### The spine

Every one of these has its own English word, and each word sits somewhere on a
ladder from 非常口語 to 醫學. Knowing *which rung* is most of the lesson:
booger to a friend, dried nasal mucus on a form, never the other way round;
sweat out loud, perspiration only on the page.

A second thread runs through it, which was not planned and is now worth
keeping: almost everything here is **uncountable**. Sleep in your eyes,
earwax, mucus, sweat, dandruff — a lot of it, never many of them, and *a* only
inside fixed phrases like *a cold sweat*. Booger is the odd one out, because it
is the one you can hold. Five of the notes point at this from different angles,
and 頭皮屑 is where it is stated plainly, because *dandruff* and *flakes* are
the same substance split into a mass word and a count word.

And 指甲垢 turns the page's own premise over. Everywhere else Chinese has the
short word and English the long ones; there, Chinese has 指甲垢 and English has
no everyday single word at all — you say *the dirt under your nails*. That note
exists to stop a student inventing *nail dirt*, which is exactly what the gap
invites.

So the register tag is not decoration and is **never hidden by either mode**.
It shows in colour beside every term, in both languages at once — a label you
have to tap to read is a label nobody reads. The tags are defined once in
`registers`, so a tag can never mean 口語 on one topic and 正式 on another.

### Design notes

- **Two modes, the house rules.** 自學 shows the Chinese and keeps 記住了／還不熟
  on the student's own device under `bw.`; 教學 hides the Chinese behind 中 chips
  and records nothing. The plain URL is the student's; `#teach` once makes a
  device the teacher's and is then stripped from the address bar.
- **教學 hides exactly two things**: what a term means, and what a sentence
  says. The notes are not hidden — they are the teacher's own voice explaining
  *why* sleep has no plural — and neither are the headings, the contents list
  or the register tags, because a student navigating in Chinese has to be able
  to find 耳屎 in either mode.
- **Only `.pair > .zh` hides.** Headings and the contents list carry `h-zh` and
  `t-zh` instead. A blanket `.zh { display: none }` would have taken the
  contents list down with it, which is the bug this avoids by construction.
- **Each topic takes its own colour, by position.** `:nth-of-type` rather than
  by id, so 口水 or 痰 added tomorrow picks up the next accent with no edit to
  the stylesheet. Four cycle; a fifth topic starts again at green, which is
  fine — they separate neighbours rather than encode anything.
- **The source cards are on the page, and credited twice.** Cool English's
  three graphics sit between each of the first three topics' leads and their
  terms — after you know what the topic is, before you start reading words —
  capped at 24rem, because a 1000px square would otherwise be the loudest thing
  on a page whose argument is in the text. Each carries a figcaption naming the
  source, and the foot of the page says it properly with a link and their own
  cover card. They are **not** this site's artwork; if the credit is ever
  edited out, the images should go with it.
- **`width` and `height` are set on every image** from the file's real pixels,
  so the browser reserves the box before the file arrives. Without them the
  terms shuffle down the page mid-read, and a deep link computed before the
  images land would miss by the height of everything above it. All four are
  `loading="lazy"` — a student reading topic one should not pay for six.
  `sips` took the four files from 1.5 MB to 928 KB on the way in.
- **Three cards are theirs and three are ours, and the page never confuses the
  two.** Cool English's post covered only 眼屎, 鼻屎 and 耳屎, so the pictures
  for 口水, 汗 and 痰 were drawn for this page as SVG. An image carries
  `source: 'cool'` or it does not, and `shot()` prints the credit line only for
  the ones that do — putting their name under artwork they did not make would
  be worse than putting none under artwork they did. The foot of the page says
  which three are which.
- **The drawn three are SVG, and deliberately not an imitation.** They do not
  attempt the halftone photo-collage of the originals, which would come out as
  a bad copy; they are flat vector on a layered colour block, in the page's own
  palette, so they read as a different hand rather than a failed one. 4 KB each
  against 240 KB for a JPEG, and they carry **no text**, which is what makes
  them safe: text inside an `<img>`-referenced SVG cannot load a webfont, so a
  Chinese character would render in whatever the device happened to have.
- **The clear ones are clear.** Saliva and sweat are drawn as pale droplets,
  not the yellow used for 眼屎, 鼻屎 and 痰. The first drafts had everything
  yellow, which is wrong about the body and also lost contrast against the
  amber block behind 口水.
- `image` remains optional on a topic, so a ninth added without a picture costs
  nothing — though all eight have one now, five of them drawn here.
- **A deep link has to be jumped by hand.** The page is built by script, so by
  the time `#ear` exists the browser has already looked for it and given up —
  a link to a topic would land at the top and look broken. `jumpToHash()` runs
  once after the DOM is up, with `scroll-behavior` turned off around it, since
  a smooth scroll the length of six topics either takes seconds or is cut
  short. Same decision as `/jill/` and `/health/`.
- **Indexed by search engines**, unlike the notebooks. No student, no client,
  no personal data — and a 國中生 googling 「鼻屎 英文」 is exactly who it is for.

### Adding a topic

Push another object onto `topics` in
[`content.js`](public/body-words/content.js): 鼻涕, 眼淚, 水泡, 瘀青. The
contents list, the numbering, the colour and the anchors all follow from the
array, so a new topic needs no code — 口水, 汗, 痰, 頭皮屑 and 指甲垢 were all
added exactly this way and needed none. `id` becomes the anchor: `/body-words/#ear`.

Both halves of every pair must be filled in — a missing `zh` is not a
half-finished line, it is a hole where the meaning should be. `node --check`
plus the validator in the commit message's terms catches that; there is no
build step to run.

## Grammar Notes — 國中, 自學 and 教學, one grammar point at a time

`public/grammar-notes/` — a grammar page in the two-mode shape of the 國中
pages, built to grow a point at a time. The first point is 狀態動詞: the verbs
that refuse `-ing`.

| | | |
| --- | --- | --- |
| 01 | 狀態動詞 | 狀態，還是動作？ · 常見的狀態動詞 · 兩種用法都有的動詞 · 口語裡的例外 · 練習 |

Built from an annotated page of Azar & Hagen that Lewis handed over, plus his
own Chinese write-up of it. As with `/grammar/`, **the book is not
reproduced**: the point and its order are the syllabus's, and every example
sentence, note and question here is written for this page — which is also why
the sentences are about scooters, bubble tea and the MRT rather than the
book's own cast.

### The shape

```
public/grammar-notes/
  content.js    GN.points[] → .parts[] → .blocks[]
  render.js     eight block renderers, the two modes, the practice
  style.css     the palette and the shape of a point
  index.html    the shell
```

A point is a grammar point. Its **parts** are the stages of teaching it, and
they are what the 目錄 lists — with one point the list reads as the page's own
contents, with six it reads as a book's. Its **blocks** are the eight things a
part can be made of: `lead`, `rule`, `pairs`, `verbs`, `twoway`, `note`,
`judge`, `mcq`. A block whose `t` has no renderer throws on load rather than
rendering nothing, the way `/grammar/` compares its map to its content.

### What the page says that the source does not

| | |
| --- | --- |
| **why it is hard for *us*** | Not because Chinese works differently, but because of the order we learn things in: 現在進行式 is taught as "the tense for right now", so "right now" starts to feel like a reason to use it. For a state verb it is not — the simple present already *is* now, and `be + -ing` does not make it more so. |
| **taste** | The source charts *smell* but not *taste*, which behaves identically and is the one a Taiwanese student meets daily. *This tastes salty* against *the chef is tasting the sauce*. |
| **the prepositions** | The annotations in the margin were `agree with`, `belong to`, `prefer A to B`. Those are half the entry, so they are printed as a pattern under the word and are **never** hidden by either mode — a fixed preposition is part of the word, not its meaning. *prefer than* is the mistake almost everyone makes. |
| **look, smell, taste are one trap** | All three describe what a thing is like without `-ing`, and somebody deliberately pointing a sense at it with `-ing`. Soup cannot be in the middle of smelling; a dog can. |

### A wrong sentence gets no 🔊

This is the first page in the family whose job includes showing English that
is not English. So it carries the rule `/grammar/` and Anny's notebook set:
**an incorrect sentence has no speaker and no 中譯.** Neither the sound of it
nor the meaning of it should be what a learner takes away. It is struck
through in the warning colour, and the correction is what gets the 🔊.

### What 教學 hides, and what it must not

On a vocabulary page the Chinese is the answer. On a grammar page most of the
Chinese is the *explanation*, and an explanation behind a chip is an
explanation nobody reads. So the hideable layer is drawn narrowly and on
purpose — `.pair > .zh` holds exactly two things, a verb's meaning and a
sentence's 中譯. The rules, the notes, the part headings, the 狀態／動作 labels
and the contents list are in the Chinese face too and stay on screen in both
modes. Measured: 58 hideable pieces, and 5 notes plus 2 rules that never hide.

### The practice remembers, but only in 自學

Eighteen questions in two sets — correct-or-not, then choose the form. An
answered question keeps its answer on that device under `gn.`, and the 設定
panel says so and can clear it. 教學 records nothing and wipes the screen on
the way in, because a lesson starts clean; the student's own answers on that
device are left untouched. Each question's key comes from where it sits
(`practice-0-3`), so an answer survives the page being edited around it and is
forgotten only if that question itself moves — which is when it should be.

One of the eighteen is a control: *Be quiet — the baby ___.* The answer is
`is sleeping`. A page that spends four parts saying "not the progressive"
teaches a student to tick the simple present without reading, and the hint
above the set says so out loud.

### Adding a point

Push another object onto `points` in
[`content.js`](public/grammar-notes/content.js). The contents list, the
numbering, the accent colour and the anchors all follow from the array, so a
new point needs no code. `id` becomes the anchor, on the point and on every
part: `/grammar-notes/#both-ways`.

## Grammar Practice — adults, 自學 and 教學, grammar exercises a chapter at a time

`public/grammar-practice/` — grammar **exercises** for adult learners, where
Grammar Notes above is grammar *explained*. Each point opens with a short
recap and is then drilled. `noindex` for now; Lewis has not yet said whether
it is public.

| | | |
| --- | --- | --- |
| 過去時間 Past Time | 01 過去簡單式 | 問句與簡答 · 不規則動詞 · 對話填空 · 否定與更正 |
| | 02 -ing 和 -ed 的拼法 | 拼字表 · 短文填空 · 三種時態對照 |
| | 03 過去進行式 | 形式 · 用字庫完成句子 · 進行中的事，插進來的事 · 配對 · 二選一 |
| | 04 時間子句與 used to | 合併句子 · used to |
| | 05 總複習 | 改錯 · 短文填空 · 選擇 |
| 完成式 The perfect | 06 現在完成式，還是過去簡單式？ | 選擇 · 填空 · 改錯 · 重組與改寫 |

274 questions in 23 sets.

### Where the exercises come from

Lewis handed over ten scanned pages of the workbook he teaches from — the
Past Time chapter of the Azar–Hagen series, its Practices 7 to 30. The page
follows that chapter's **order and exercise formats**, practice by practice,
and **reproduces none of it**: every sentence, dialogue, story and table was
written for this page and moved out of the book's classroom into adult working
life in Taiwan (a product launch, a 尾牙, the High Speed Rail, a cat on a
video call). The same rule as `/grammar/` and Grammar Notes. The scans are not
in the repo. Point 06 was written before any material arrived and follows no
source at all.

### The shape

```
public/grammar-practice/
  content.js           the cover, an empty `points`, and the block reference
  past-time.js         過去時間 — five points
  perfect-or-past.js   完成式 — one point
  render.js            the block renderers, the two modes, the practice
  style.css            the palette and the look of each kind of question
  index.html           the shell; lists the chapter files in reading order
tools/check_grammar_practice.js   run before pushing
```

**One file per chapter.** A chapter file does `GP.points.push({...})`; adding
a chapter is a new file and one `<script>` line. A point's `group` names its
chapter, and the 目錄 prints the name wherever it changes.

Recap blocks: `lead`, `rule`, `cols`, `pairs`, `note`, and `table` with no
blanks in it. Practice blocks:

| Block | What it is |
| --- | --- |
| `mcq` | choose the form; one `___` |
| `match` | clause to clause; options printed once, lettered, answered with a letter |
| `gap` | one typed blank per card, with an optional tappable word box |
| `blanks` | a card with any number of blanks or choices in it |
| `cloze` | a dialogue or story on one card, blanks numbered through |
| `table` | a table whose cells are sentences with blanks |
| `fix` | edit the sentence until it is right |
| `order` | build the sentence from tiles |
| `rewrite` | say it again with the word given |

`blanks`, `cloze` and `table` share one way of writing a question into a
sentence, documented at the top of
[`content.js`](public/grammar-practice/content.js):

```
{{went}}   {{didn’t go|did not go}}    a typed blank and what it accepts
{{went}} (go)                          brackets after a blank are its cue
[[was waiting*|waited]]                choose one; the star is the answer
**go**                                 bold
```

`didn’t` / `did not`, `I’m` / `I am`, capitals, full stops and commas never
make a right answer wrong. `’s` is deliberately not expanded — it is "is" as
often as "has" — so a short form with `’s` has to be listed.

### How a question behaves

The adult rules, with one departure. A wrong try wobbles and the question
**stays open**; on a card it also opens a hint that points at the clue and
never at the answer. There is no score and no timer. A question that took more
than one try is marked in amber, and a finished set lists those under
「值得再看一次」 — that list is the only feedback there is.

- **自學** (the plain URL): Chinese on screen; 看答案 appears only after two
  tries; finished questions are kept on the learner's own device under `gp.`.
  That last part is the departure from "adults save nothing", made the way
  `/fab-english/` made it: a learner alone needs their place kept.
- **教學** (`#teach`, once per device): Chinese behind 中 chips, a 看答案 on
  every card and a small `?` beside every blank, 全部答案 under a set of
  blanks, and nothing recorded.

A wrong sentence gets no 🔊 and no 中譯, as everywhere in the family. Before a
`fix` question is answered a wrong sentence and a right one look identical;
every `fix` set carries one sentence that is already correct, so "find the
mistake" cannot be done as "change the verb" without reading.

### Lewis 指定作業 — a link to a chosen few exercises

Lewis asked to be able to pick several exercises at once and send a student a
link to them. On a teacher device the bar has a **作業** button (on a phone,
where the bar has no room, the same sheet opens from 設定). The sheet lists
every exercise with a box beside it and a box on each point that takes the
whole point; under the list is the link, rewritten on every tick, with 複製連結,
預覽 and an optional 作業名稱.

```
/grammar-practice/?hw=past-simple_pg-two_pp-fill.2&t=第 3 週作業
```

`hw` is a list joined by `_`. Each entry is a **point id** (all its
exercises), a **part id** (all its exercises) or **`part.N`** (the Nth set in
that part). `t` is the title. Ids nothing answers to are skipped; if none
answers, the page opens whole.

Opened with the link, it is the same page with the rest put away
(`body.hw`, and `hw-on` on what was set — nothing is removed from the
document, so questions keep the ids they are remembered by). The cover
becomes the list of what was set with `3 / 12` beside each and a tick when one
is finished; the 目錄 becomes that list; each point gets a 先看重點整理 button
that opens its recap; 看全部練習 leaves for the whole page.

- **Nothing is sent to Lewis.** The page has no server. A student's progress
  is kept where 自學 keeps it, on their own device, so the same link opens
  where they stopped — and the ticks on the cover are what they can show.
- **A part's id, and the order of the sets inside a part, are now in links
  that have been sent.** Rename `pg-two` and last month's homework quietly
  loses an exercise. Add new sets at the end of a part, not the front. The
  checker refuses an id containing anything but `a-z 0-9 -`, because `_` and
  `.` are the link's own punctuation, and refuses a point and a part sharing
  an id.
- The ticks and title are kept on the teacher's device (`gp.hw`). Opened on a
  homework link, the sheet starts from that link instead.

### Three things that were bugs once

- The 作業 button would not hide on a phone: `house.css` is linked last and
  gives every `.bar-btn` a `display`, so the rule that hides it needs two
  classes (`.bar .bar-btn-hw`). Left visible, it pushed the bar 11px wider
  than the screen.
- A finished set looked up its "look again" line with the same class name the
  questions use for "took more than one try", found a question instead, and
  hid it. The line is `.again-line`; the question state is `.again`.
- A table wider than a phone made the **whole page** scroll sideways: a grid
  column defaults to `min-width: auto` and grew to fit the table. `.shell`'s
  column is `minmax(0, 1fr)` and `main` has `min-width: 0`, so the table
  scrolls inside its own box.

## High School Reading — 高中, three texts read closely

`/reading/` holds three texts Lewis supplied in English and Chinese — Colossal
and the dire wolves, Elizabeth I's letter to the Emperor of China, and the
Baader-Meinhof phenomenon — with his word tables and five writing patterns. It
grows by adding one object to `passages` in `content.js`.

| Part | What it holds |
| --- | --- |
| 原文 | The text, a 中 chip per paragraph, dotted words that open a meaning in the line |
| 閱讀測驗 | Questions written for this page; a wrong answer says why and stays open |
| 字彙表 | Lewis's key words, phrases and topic terms, with his ★ |
| 說說看 | Spoken discussion, no input fields |
| 寫作句型 | His five patterns, as a section after the texts |
| 單字、片語、搭配詞複習 | Four rounds, last on the page: words, phrases, collocations, spelling |

### The review

Forty-eight questions across the three texts, mixed on purpose, covering all 40
★ items. Round 1 tests words in a sentence, round 2 phrases, round 3 which verb
or small word belongs in a collocation, and round 4 has the student type the
English from a Chinese sentence, first letter given.

- **Every sentence is new.** Reusing his example sentences would test whether a
  student recognises the sentence, not whether they remember the word.
- **A wrong tap explains itself without a line being written for it.** In rounds
  1 and 2 it gives that word's meaning, looked up from his tables; in round 3 it
  says the pairing is not one English uses. So every option in those two rounds
  has to be a headword in a `vocab`, and the console warns if one is not.
- **The right answer is first in `options`** in `content.js`; the page shuffles
  them on load and again on a retry.
- **No score, even at the end of a round.** It names what to look at again and
  offers 「重練這 N 題」, which brings back only the questions not right first
  time. A hint is not a miss; 看答案 is.
- **`after` works here too.** The review questions on `coincidence` and `tune
  out` stay shut until blanks 11 and 13 are solved.

### Design notes

- **One mode, not two.** The 國中 pages show the Chinese to a student alone. A
  reading page cannot: a translation beside the paragraph ends the reading. So
  there is no `#teach`, the Chinese waits behind a chip for everybody, and
  nothing is saved but the voice.
- **The text is verbatim** except for one fix: the source's half-translated
  「巴ader－邁因霍夫」 is written 「巴德爾－邁因霍夫」 throughout. The first sentence's
  "In 2024 … announced" stays as printed, and a note under the text gives the
  real dates (announced April 2025; pups born October 2024 and January 2025).
- **The second text stops mid-sentence** because the source image was cut off.
  It is marked with a dashed box and nothing was written to finish it.
- **The five cloze blanks came with no choices and no key.** The four-option
  sets are this page's. Lewis's word table confirms 11 `coincidence`, 13 `tune
  out` and 14 `subsequent`; 12 `stuck` and 15 `there's no way` are inferred.
- **Three of his table rows are cloze answers**, so in `vocab` they carry
  `after: <blank>` and read 「完成第 N 題後顯示」 until that blank is solved.
- **`noindex`**, because the texts are someone else's writing and their source
  is unknown.
- **看文中線索 (2026-11-08).** Each 閱讀測驗 question carries `ev`: the passage's
  own words that answer it, quoted exactly (a main-idea or attitude question
  quotes several places). `markEvidence()` wraps them in the text at load —
  one span per text node, so a quote can run through a glossed word — but
  they stay plain until the question is solved and the button under it is
  pressed. Then they are lit and scrolled to, and 「回到第 N 題」 (a pill at the
  bottom, or a tap on the lit words) goes back. A quote that no longer matches
  the text logs a warning and is skipped, so edit `ev` with the paragraph.

## Keep Speaking — adult, self-study, a course handbook to rehearse

`/keep-speaking/` is the practice version of the 35-page 學員複習手冊 from the
cross-cultural communication course: BLUF, the four function phrases, six
scenarios, three before-and-after emails. The trainees already have the
handbook, so this page does not re-present it. It is where they say it out
loud. Its title is the handbook's own last line: 你的英文不需要完美。需要的是繼續開口。

Five tabs, routed by the hash so any scenario or email can be sent as a link:

| Tab | What is in it |
| --- | --- |
| 今天 `#today` | The handbook's three ways of using it as three doors, 今天三分鐘, the tally, the Friday check |
| 觀念 `#concepts`, `/context`, `/tone`, `/people` | BLUF order, high/low context, Tone Scale, the three behaviours; one at a time, each ending in an exercise |
| 句型 `#phrases` | `/mine` 我的小抄 (2–3 phrases), `/upgrade` Tool 2, `/clarify` the clarifying questions |
| 情境 `#scenes/a` … `/f` | Each scenario played as you, stopping where you have to answer |
| Email `#email/1` … `/3`, `/write` | Find the flaws, rewrite, see the After; then 寫我的 Email |

### Design notes

- **It breaks the adult rule on purpose.** The adult pages are teacher-led with
  nothing saved, because Lewis runs several clients on one laptop. This one is
  self-study on the trainee's own phone, and he asked for it to encourage them,
  so it keeps a record, on that device only. The Chinese is also on by default,
  the 自學 rule: someone alone has nobody to ask. There is no `#teach` mode.
- **The one number is 開口次數.** 我說了 is on trust, and a finished recording
  counts too. It measures attempts and never correctness, so it agrees with the
  handbook's closing line instead of contradicting it. The seven-day strip shows
  days spoken and is not a streak: an empty day must not read as a failure.
  `MILESTONES` may only ever praise having spoken.
- **A drill asks first.** Read the situation in Chinese, say your own version,
  and only then see the reference line. That order is the exercise. 今天三分鐘
  takes one phrase, one upgrade or clarifying question, and one scenario moment,
  least recently practised first, and holds them for the day.
- **Speak, then see the options.** A scenario's options stay hidden until the
  trainee has answered aloud in their own words, because picking from a list is
  reading practice and a meeting offers no list. 先看選項 is there for someone who
  has nothing yet: it opens them and counts nothing. 直接看全部內容 skips the step.
- **Wrong options play out.** Choosing Vivian's vague reply runs the rest of her
  dialogue, then the option stays open to choose again. In a choice the Chinese
  stays hidden until an option is chosen, or it would give the answer away.
- **Length must not give the answer away.** The handbook's answers are specific,
  so at first the right option was the longest line in 13 of 16 choices. The
  weak options now run long, as weak answers do; it is 5 of 16, those by a word
  or two. Options are shuffled on every play. Recheck this when adding a choice.
- **A wrong sort answer says why that bucket is wrong.** Each item's `no` holds a
  reason per wrong bucket, the same rule as every other adult page.
- **Scenario E's hidden mechanic is a meter.** Clarifying questions move Tanaka
  from 表面強硬 to 願意合作; apologising moves nothing. That is the handbook's
  own rule made playable. Tanaka's replies are written for the page and only
  restate facts from Scenario B and Email 2.
- **The BLUF check is plain text rules**, each taken from a reason the handbook
  gives. All three After emails pass and all three Before emails are flagged,
  which was tested in the browser and is the test to rerun after changing a
  rule. It cannot read for meaning, so it words results as nudges, and
  `DEADLINE` deliberately ignores "on June 1", which would pass Email 1's Before.
- **The check stays in view while writing.** Beside the draft on a wide screen.
  On a phone the list is under the draft, so the count rides in a bar (`paintBar`)
  that opens to the items still to fix. While typing it sits on the keyboard: a
  keyboard covers the page without moving anything fixed, so `trackKeyboard()`
  reads `visualViewport` into `--kb`. The bar hides once the list itself is on
  screen. A clean result still asks about the first sentence, which the rules
  cannot judge.
- **Drafts are not kept.** 寫我的 Email may hold a real business email, so nothing
  typed there is stored, and the page says so. Recordings stay in the tab's
  memory until the next take or the next view.
- **No sound starts by itself.** This gets opened in offices.
- **The first visit says what the page will not do.** Before anything asks them
  to speak, a short `<dialog>` says there are no scores and nobody sees the
  record. It appears on whichever view the link opened, and not for anyone who
  has already spoken.
- **Quiet mode is for an open-plan office.** It swaps the wording and removes the
  microphone; mouthing a line still counts. Both wordings sit in the page and
  CSS picks one (`loud()`), so switching mid-scenario loses nothing.
- **A scenario ends on what the trainee did.** The last screen gives this run's
  count and one line to keep, which goes into 我的小抄 beside the phrases. F's
  line is the role just played. 直接看全部內容 is reading, so it marks nothing
  done and gets no finish screen.
- **Three levels of control, and one meaning per colour.** Primary is navy
  (`.pill`, `.act-said`), secondary `.act`, quiet `.link`. Amber is encouragement
  and emphasis, green is "yes, that one", and a wrong answer has no colour,
  because a verdict in the accent colour made the accent mean two things.
- **It is built to be saved and shared.** A student receives the link in LINE, so
  it has an Open Graph card, and `tools/keep-speaking/make_images.py` draws that
  and the home-screen icons. The manifest says `display: browser`, not
  `standalone`: the page keeps its record in the browser's storage, and an iPhone
  home-screen app can keep a separate one, so a trainee's count would depend on
  which way they came in.

### What the page changes from the handbook

Recorded in the header of `content.js`: levels follow Card A where Part 1
disagrees, the word counts on the emails are dropped because they do not match
the text, and the doubled quotes in the tables are gone. Every English line was
compared with the PDF's text by script; what did not match is the list of
deliberate additions and shortenings described there.

The 中譯 of the phrases, every `sit` and `fill`, and the options marked
`added: true` are written for this page.

The handbook names its client on every page. **The page names no company**, by
Lewis's decision on 2026-11-02, the same choice he made for `/fab-english/`:
lines that needed a subject became "we", "us", "your" or 公司, and the
characters keep their names. It also carries `noindex`, which keeps it out of
search results and does not make the URL private.

### `/learn/` — 英文學習, the top page over these three

Asked for 2026-11-08 ("a top page, and put the other pages under it"). It
collects **exactly three pages** — 國中單字, 高中單字, 高中英文閱讀, in the
order a student climbs — and Lewis chose that scope knowing his October rule:
no site-wide index, because students must not find each other's material. So
nothing with a student or client in it is ever added here.

- **The three keep their URLs.** He chose a new top page over moving them, so
  links already handed out still work. Each page first gained a 「‹ 英文學習」
  link up; since the design pass below, the global nav does that job.
- **The numbers on the tiles are typed**, not read from the pages' data, which
  would mean loading two large word files to print two numbers. Update them
  when 高中單字 gains a level or the reading page a text.
- Same Apple language and tokens as the word pages, `noindex` like all three.

**The other three from the gamification review (2026-11-08).**

- **搭配詞挑戰** in both word pages' quiz. A word marked 記住了 has a 40%
  chance of coming up as one of its collocations cut out of its example, to
  pick from four collocations of about the same length that share no word
  with the sentence (`collocQuestion()`). A wrong pick shows that
  collocation's meaning; a right one fills the gap and reads the sentence.
  Unmarked words never get one, so it reads as earned, not as harder.
- **老師指定任務.** On a teacher device (`#teach` once), every 國中 lesson head
  has 「複製任務連結，傳給學生」: a link to `/learn/#task/<grade>/<lesson>`.
  The student's first visit keeps it (`lc.task`) and drops the hash; a card at
  the top of `/learn/` shows 已記住 x / n for that lesson, a way straight in
  (`#lesson/<grade>/<lesson>` on 國中單字), and 「✓ 任務完成」 once every word
  is 記住了. The student can remove it; a new link replaces it. The report
  carries a line for it. `/learn/` gets the lessons from `learn/lessons.js`,
  which `tools/moe/build.py` now writes, so it never loads the word list.
  国中 only for now: 高中單字 has levels of 1,002 words, not lessons.
- **程度檢測 before and after.** Every result is kept (`lc.history`, last 12).
  A retest marks each band with where it stood last time, and a green box
  names the bands that moved up. A band that slipped is not called out: eight
  words is a small sample, and one bad draw is not news.

**Progress a student can see (2026-11-08)** — the first three of a gamification
review, chosen to fit the house rules: no score, no penalty, nothing timed, no
comparing students. All three read records the pages already keep, on the
student's own device, and appear only in 自學.

- **熟練度**, five dots on every word card and flashcard: 還不熟 is one,
  記住了 starts at two and gains one each time the word is remembered again
  (its review gap 2 → 5 → 12 → 30 days). `/learn/` counts the words at four
  or five dots as 穩固. `strength()` in both `vocab.js`.
- **Practice days and a done moment.** A day counts when any word is marked;
  the last 60 are kept as `<store>.days`. Finishing 今天這一組 now says
  「今天完成 ✓」 over a Monday-to-Sunday strip with the days practised lit, and
  `/learn/` shows the same week across both pages. It counts days in the week
  and never resets to zero: a streak's fear of losing it is a penalty, which
  the house rules rule out. The report carries 「這週練習：N 天」.
- **課次收集冊** on 國中單字's 七年級／八年級: under each lesson head, a bar
  and 「已記住 22 / 28」, turning to 「✓ 這一課都記住了」. It counts every word
  the lesson teaches, including one first met earlier, and repaints the moment
  a word is marked.
- Two class-name collisions were hit and fixed on the way, both silent: the
  result rows of 程度檢測 were `.band` and the week's today cell was `.today`,
  each also a section class in `/learn/style.css`. Check a new class against
  that file before reusing a short name.

**常用搭配 on both word pages (2026-11-08).** Every word on 國中單字 and
高中單字 now shows up to three high-frequency collocations under its own
example, each with its 中文, an example sentence that uses it (the chunk
marked, with 🔊) and that sentence's 中譯 — 5,237 collocations for 2,438
headwords.

- **One file for both pages:** `tools/collocations/collocations.json`, keyed by
  the headword as printed, lower-cased. 1,573 words are on both lists and were
  written once. Both `build.py` scripts look a word up there; edit the file
  and rebuild both.
- **Capitals matter for three words.** *China/china*, *May/may* and
  *Miss/miss* are different words that lower-case to the same key, so their
  entries live under their exact spelling (also kept in
  `tools/collocations/case.json`) and the builds look up the exact spelling
  first.
- **Not on the 141 textbook-only cards** — those are already phrases.
  Function words carry one or two patterns or none; proper nouns and numbers
  usually none.
- Written by ten subagents against a brief (A2–B1 examples, the senses the
  page teaches, American usage), then read by three reviewers, who changed 64
  words. A first checker insisted that a collocation spell its headword and so
  pushed writers away from *brush your teeth*, *by plane*, *at 3 p.m.*; the
  rule was dropped and the reviewers restored those.
- Search now matches collocations too: *make a decision* finds *decision*.
  The quiz still draws only on each word's own example.

**Goals, a daily dose, and a report for the teacher (2026-11-08)** — the next
two recommendations from the review.

- **「學完能做到／每天／多久」** sits under the numbers on both word pages
  (`.plan`) and on the reading page's cover (`RD.plan`). The daily dose is one
  今天這一組 — about 20 words, 15 minutes, due words first. The weeks are
  computed in `renderIntro()` as new words ÷ 20 a day, so they follow the data
  when a level is added. The 學測 line on 高中單字 quotes only what 大考中心's
  own 編修說明 says (學測 draws mainly on 第一到第五級); no figure is claimed
  that the site cannot check.
- **學習報告** is a button under 今天的複習 on `/learn/`: a dialog with an
  optional name (kept as `lc.name`) and a few lines of text — 程度檢測 result,
  per page 已記住 / 還不熟 / 今天到期, and up to 20 還不熟 words — copied for
  the student to paste into LINE. There is no server; this is the one way a
  teacher sees a student's practice, and the student decides when to send it.
  A word appears by its id made readable (`tb-how-old` → `how old`), since
  `/learn/` does not load the word lists.
- The third recommendation, a human check of the AI-written Chinese, is a
  **private** claude.ai page for Lewis, not part of this repo: 200 entries, 50
  drawn (seeded) from each of 國中基本字, 國中常用字, 高中第一級, 高中第二級,
  each marked 沒問題 / 有問題 with a note, copied back as `QA-RESULT {...}`
  keyed `moe:<id>` / `ceec:<id>`. Apply the fixes to `tools/moe/zh.json` or
  `tools/ceec/zh.json` and rebuild.

**今天的複習 on `/learn/` (2026-11-08)** — the second recommendation from the
review: a reason to come back every day, in one place, across both word pages.

- **It reads what the word pages already keep** in the student's own browser:
  their 自學 marks and review schedule (`jhv.marks`/`jhv.sched` for 國中單字,
  `hsv.*` for 高中單字). Nothing new is stored and nothing leaves the device.
  "Due" is the pages' own `isDue()`, copied into `learn/learn.js` — change one,
  change the other.
- **It shows the total due and one row per page** with a 「複習 ›」 button that
  opens that page at `#today`: flashcards, 今天這一組, over the whole list, so
  the due words come first and new words fill the set to 20. When nothing is
  due it says so and the buttons become 「學新字 ›」.
- **Hidden for a student with no marks on either page**; for them the 程度檢測
  strip below it is the way in. Teaching mode records nothing, so a teacher's
  device never shows it either.

**`/learn/check/` — 程度檢測 (2026-11-08).** The first of the recommendations
from a review "by the standard of a top trainer": a student should be told
where to start, not handed three doors. Linked from a strip above the tiles,
which also shows the last result kept in this browser (`lc.result`).

- **Three bands, eight words each, easiest first:** 國中基本字, 國中常用字,
  高中 (大考中心 第一、二級 *minus everything on 教育部's list*). Only 10 of
  第一級's 1,002 words are not already 國中 vocabulary, so 第一級 cannot be a
  band of its own; the 高中 band in practice measures 第二級, and its result
  links to `#set/2`.
- **See the English, pick the Chinese, or 不知道.** 不知道 is there so a
  student does not guess; a quarter of guesses land and would read as known.
  Distractors come from the same band and part of speech.
- **No right or wrong during the test, and no score after it.** A band comes
  back as 已掌握 (7–8 of 8), 大致掌握 (5–6) or 還需要練; the first band not
  mastered is where to start. Missed words are listed at the end with their
  meanings. It **stops early** once a band has four or fewer known.
- **The result opens the right set.** Both word pages now accept
  `#set/<set>` (`basic`, `more`, `g7`, `g8` on 國中單字; `1`–`6` on 高中單字),
  open the list there, and drop the hash so a reload is the ordinary page.
- **The pools are built, not hand-picked:** `python3 tools/learn/build_check.py`
  reads both pages' data (plain single lower-case words only, one gloss per
  word, first meaning of the first sense) into `learn/check/data.js`. Rebuild
  it after either word list changes.

**The design pass (2026-11-08), "as a top-tier web designer".** Three changes,
so the five pages read as one product rather than five neighbours:

- **One global nav, `public/learn/fam.css`.** A thin dark strip across the top
  of all five pages — 英文學習 · 國中單字 · 高中單字 · 高中閱讀 · 程度檢測 — the way
  apple.com runs one global nav above each product's own bar. The current page
  is marked `aria-current`. Links are relative (GitHub Pages serves the site
  under `/english-exercises/`). It replaces `/learn/`'s and the check page's
  own bar (there it is pinned, `.fam-pin`), and the 「‹ 英文學習」 links on the
  word pages and the reading cover. On the word pages and the reading page it
  scrolls away above the page's own sticky bar; the reading page nudges the
  bar to the top before its drawer or settings panel opens, since both are
  placed from the bar's height. All five fit on a 375-point iPhone without
  scrolling. **Only the family's pages carry it** (six since 學測英文寫作 joined) — never
  a page with a student or client in it, which would break the
  no-site-wide-index rule.
- **The reading page joins the Apple language.** It was the one page still in
  the old teal-on-cream editorial palette. Now: white page, grey tiles for
  questions, word cards and the cover's plan, SF for everything around the
  text, blue for buttons, orange eyebrows, and dark mode from the system with
  the word pages' tokens. **The passages alone stay in the serif** (New York on
  Apple devices) — long English reads better in it, and the English is the page.
  Done by retokening `reading/style.css`; house.css and type.css still link
  after it and needed no change.
- **Word cards are one column at every width.** The 9rem left column (table,
  topics, number, 記住了 / 還不熟 stacked) became a header row across the top of
  the card, with the two buttons on the right, the way a phone already had it.
  The word gets the card's full width on a laptop. Both `vocab.css` copies.

**Designer review, items 5–8 (2026-11-08):**

5. **One name for each switch.** The settings button reads 「設定」 on every
   page: 閱讀 and 學測寫作 dropped the bare ⚙. The Chinese switch reads 「中文」
   on every page: 學測寫作's 「中譯」 and the word pages' 「中文：顯示／藏起來」
   are gone, and on or off now shows only in the button's colour.
6. **13px is the smallest text.** Every text size under 13px in the family's
   stylesheets was raised to 13px (75 rules), checked by measuring every
   visible text node at phone width. house.css loads after 閱讀 and 學測寫作
   and keeps two labels small, so those two are raised at the end of each
   page's style.css. Three things are smaller on purpose: glyph-only buttons
   (🔊 ▶︎ ▣), the A–Z rail (as in iOS Contacts), and the family nav on a
   phone (12px, apple.com's own size, so all six links fit).
7. **/learn/ says what it is** under the title: 「從國中到學測，單字、閱讀、
   寫作都在這裡練」 and 「免費、不用登入，紀錄只存在你的裝置上。」
8. **The A–Z rail no longer flashes on load.** It starts with `away` in the
   HTML, so it is hidden before the first paint instead of fading out after.

**Designer review, items 1–4 (2026-11-08)**, after a top-tier UI/UX review
of the six pages (nine recommendations; Lewis chose 1–4):

1. **常用搭配 fold in the word lists.** A card's collocations start as one row,
   「常用搭配 3 組 ›」, so a phone shows a word in about one screen instead of
   one and a half. They open by themselves for a search that matched a
   collocation and for a word a link points at; flashcard backs and the
   projector keep them open; printing opens them all. `headHTML(e, fold)`.
2. **Teacher tools only on a teacher's device.** `public/learn/teacher.js`
   keeps one family-wide flag, `lc.teacher`, set by `#teach` on any of the six
   pages (the word pages set and clear it too, with their own flag) and puts
   `is-teacher` on `<html>`; `.teacher-only` hides otherwise (fam.css).
   Hidden from students: 學測寫作's 全部展開／全部收起／指定任務 (its panel is
   now 設定 ⚙ for everyone, with voice and speed), 閱讀's 顯示所有答案, and
   the word cards' 複製連結. 設定 → 在這台裝置隱藏 clears the flag.
3. **Offline.** `public/sw.js`, registered by `public/learn/app.js` for
   exactly three scopes — `learn/`, `reading/`, `exam-writing/` — so it can
   never touch a student's page. Network first with a 4-second fallback to
   the kept copy, so a deploy shows at once online. A page posts the files it
   used to the worker on its first visit, so any page opened once online
   opens offline afterwards (tested by stopping the local server).
4. **The home screen.** `learn/manifest.webmanifest` (英文學習, standalone),
   `learn/icon-180/192/512.png` and a maskable 512 — a white 「英」 on Apple
   blue, drawn on a canvas in the browser because this Mac has no image
   tools — linked from all six pages. /learn/ shows a 加到主畫面 card on
   iPhone Safari (the two taps) and on Android (the browser's own prompt),
   hidden once opened from the home screen or after 不用了. **iPhone keeps a
   home-screen app's records apart from Safari's**; the card says so and
   points to the 備份碼 to carry them across.

Also: the Lewis Biz English mark (`public/logo.png`, 34px, linked to
lewistoeic.com) is now in the footer of /learn/, 程度檢測, 國中單字 and 高中單字,
as it already was on 閱讀, 學測寫作 and the rest of the site (`.fam-foot`).
Later the same day it went on the four Cambridge pages too (/cambridge/, A2
Key, B1 Preliminary, Starters–Flyers), as `.cam-foot` (in lists.css, and in
young-learners' own `<style>`). Every page with content now carries it; the
pages still without it are only redirects (/a2-key/, /junior-high-grammar/,
/junior-high-words/, /riva-rex-practice/, /wealth-habits/), whose targets do.

**今天這一組, findable (2026-11-08)**, both word pages. Lewis: 「今天這一組」不好找 —
the plan told students to do it every day, but the opener's button said only
開始練閃卡 (which did open it). The main button now reads 開始今天這一組, a line
under it says how many words are due (自學, once there is a record), and
「今天這一組」 in the plan is a link. All three call `openToday()`, which is
also what `#today` runs.

**The Chinese copy, reworded (2026-11-08)**, at Lewis's request (「中文的說明再修改成
自然的台灣中文」): about 60 lines of interface and explanation text across the
six pages — the word pages' 為什麼從這裡學／每天練多少／要多久 (was 學完能做到／
每天／多久), /learn/'s tile blurbs and review card, 程度檢測's instructions, the
reading cover's plan, 學測寫作's panel and drill. Word glosses, examples and
the reading texts were not touched. The global nav's 12px phone size now
reaches 480px, so all six links fit on a 440-point iPhone Pro Max too.

**The opener's numbers and plan on an iPhone (2026-11-08)**, both word pages,
from Lewis's screenshot. Three numbers across left labels like 「個字，都有中文與例句」
running edge to edge, and the plan was three long paragraphs. Each label is
now split at its comma in the HTML (`.lab` + `.lab-x`; the comma comes back
with `::before` on wider screens), so a phone shows the unit under the number
and the rest as a smaller second line; the plan becomes three white cards set
at 15px. Desktop and iPad look as before.

**主題 — words by topic (2026-11-08)**, both word pages. Lewis asked for
「以主題分類單字」 and chose, from options, both lists and inside the existing
pages (not a new page), so the cards, quiz, 熟練度 and progress all work on a
topic as they do on a level.

- **26 topics, one list for both pages** — `tools/topics/list.json` ([id, 中文名,
  what belongs]). Concrete subjects first (人物與家庭 … 科學與研究), then four
  for words with no subject: 思考與觀念 (abstract nouns and thinking verbs),
  動作與變化 (general verbs), 描述與性質 (general adjectives and adverbs),
  基礎詞 (grammar words). Every word has one or two, the best fit first.
- **`tools/topics/topics.json`** tags all 6,343 headwords across both pages,
  keyed like the collocations (exact headword for China/May/Miss and their
  lower-case twins, otherwise lower-cased), so a word shared by both pages has
  one set of topics. Written by eight taggers working from the meanings the
  site teaches; not hand-reviewed word by word — spot checks only.
  `tools/topics/topics.py` is the shared reader; both `build.py` add the
  topics as the last field of each row and write `TOPIC_LIST` into words.js.
- **On the page**: a 主題 select beside the letter select narrows whatever is
  chosen (第三級 · 科技與網路); a row of 26 chips with counts under the level
  tiles, 「或是，從主題開始」, opens the whole list at a topic; `#topic/<id>`
  does the same from a link. `#today` and `#set/…` start from all topics.
  `deckKey()` includes the topic, so changing it deals a new deck.
- **To retag a word**, edit `tools/topics/topics.json` and run both builds.

**Second gamification review (2026-11-08)**, after Levels 3–6 and 學測寫作
joined. Six recommendations; Lewis chose the first three. Same house rules:
no score, no points, no leaderboard, nothing timed, nothing that resets.

1. **程度檢測 places into Levels 3–6.** It had stopped at 第一、二級, so a
   strong student was sent past 4,008 words straight to reading, with a line
   saying Levels 3–6 were still to come. Now five bands: 國中基本字, 國中常用字,
   高中第一、二級, 第三、四級 (`#set/3`), 第五、六級 (`#set/5`), 40 questions at
   most and most students stop early. `tools/learn/build_check.py` builds the
   two new pools from `tools/ceec/` (minus 教育部's list, no word whose first
   sense is labelled 冒犯用語, notes stripped from the option text). Old
   `lc.history` entries simply lack the new bands.
2. **Stations on the way.** Every level tile on 高中單字, and every set tile on
   國中單字, shows a bar with a tick at each quarter and 「已記住 n · 下一站 ½
   （501）」 — only on a set the student has started, only in 自學. Passing a
   quarter puts one line in the toast (「第三級 ¼ 到站：已記住 251 個字」).
   `paintTileProgress()`, `announceStops()` in both `vocab.js`; `markWord()`
   records the stops before a mark and compares after. On `/learn/`, the 國中
   and 高中 tiles show 已記住 n / total and the 學測寫作 tile 拆解過 n / 7 篇,
   again only once started; the 學習報告 gains the 學測寫作 line.
3. **學測寫作 gets a practice loop** (`exam-writing/drill.js`). Under each of
   the seven essays, 拆解練習: 動作配對 (each sentence: which of the 15 jobs
   does it do? four choices, a wrong one greys out, the right one shows the
   page's own explanation) and 句子排序 (each paragraph shuffled; tap the
   sentences in order, a wrong tap shakes). While a drill runs, the essay's
   paragraphs and the structure switch are hidden — each paragraph's plan
   lists the jobs in order, which would be the answer. Both done = 拆解過了;
   a row of the seven years at the top of the section fills in. Stored as
   `ew.done`. The transfer essay has no drill.

Then 4–6, the same day ("let's work on 4, 5, 6"):

4. **備份碼** (`/learn/`, learn.js). A card under the tiles, 換手機也帶得走:
   產生備份碼 / 貼上備份碼還原. The code is every progress key (`hsv.`, `jhv.`,
   `lc.`, `ew.`, `rd.` — not voices, speeds, the teacher switch or other
   per-device settings) as JSON, deflated with CompressionStream where the
   browser has it and base64url-encoded behind `EL1z.` (or `EL1j.` plain).
   1,500 marked words come to about 12,500 characters, so the dialog says
   to keep it in LINE Keep or Notes rather than send it as a message.
   Restoring shows both sides' totals in a confirm, then replaces this
   browser's progress and reloads. No server, no account.
5. **The reading page remembers finished parts.** A part whose questions the
   student has all answered right gets a ✓ in the contents and keeps it
   (`rd.done`); 顯示所有答案 does not count, and answers are still not saved.
   This reverses the page's original "save nothing but the voice" — Lewis
   chose it. `/learn/`'s reading tile shows 完成 n / 7 關 (`rd.parts`).
6. **Teacher tasks for 高中單字 and 學測寫作.** `lc.task` now has a `kind`:
   `hs` — a level's words under one letter (`/learn/#task/hs/3/a`), handed out
   from a teacher device on 高中單字 with a level and a letter chosen; progress
   from `public/learn/hstasks.js`, which `tools/ceec/build.py` now writes
   (every level × letter as ids), and the student's 開始 opens
   `reading/vocab/#set/3/a`. `ew` — one essay's 拆解練習
   (`/learn/#task/ew/e114`), handed out from 學測寫作's teacher panel
   (指定任務); progress from `ew.done`. The essay names on `/learn/` are typed
   in learn.js's `EW_ESSAYS` — add a year to `exam-writing/content.js`, add it
   there. A task saved before kinds existed is still read as a 國中 lesson.
   A task link opened in a tab that already shows /learn/ is taken too
   (`hashchange`).

**學測英文寫作 joins the family (2026-11-08)**, at Lewis's request ("add this
into this website too"). `/exam-writing/` keeps its URL and its own indexing
(it was never `noindex`, and joining did not change that). It is general
material with no student in it, which is what lets it into the family.

- **A fourth tile on `/learn/`**, 第四步, after reading; the tiles are now two
  by two at every width above a phone (three and an orphan looked unfinished).
- **The global nav has six links**: 英文學習 · 國中單字 · 高中單字 · 高中閱讀 ·
  學測寫作 · 程度檢測. On a 375-point iPhone the strip drops to 12px (apple.com's
  own global-nav size) so all six still fit; narrower than that it scrolls.
- **The page itself moved into the Apple look by tokens**, as `/reading/` did:
  `exam-writing/apple.css`, linked after `house.css`, redefines the palette
  (`--navy`, the interactive colour, becomes blue; `--gold`, the attention
  colour, becomes Apple's orange), adds dark mode, sets headings in SF and
  turns the 學習目標 box into a grey tile. `style.css` is untouched; the essays
  and sentence bank keep the serif. Its drawer and teacher panel nudge the bar
  to the top before opening, because the strip above it scrolls away.

**UX check after Levels 3–6 (2026-11-08)**, both word pages:

- **Fixed: every control threw the student back to the top of the page.**
  The engine came from the Cambridge pages, which call a jump-to-top after a
  view, set or letter change, after 下一題 and after the next flashcard set —
  right when the controls were the top of the page, wrong once the opener sat
  above them: on a phone each quiz question meant scrolling three screens
  back down. Now `goToWork()` lands on the card or question just under the
  sticky bars (view switch, hero buttons, 下一題, next set, `#today`) and
  `goToList()` on the controls (level, letter, 重新開始).
- **The phone opener is shorter**: the three numbers sit three across, the
  level tiles two across, and the level pills are one sideways-sliding row
  (`keepPillInView()` scrolls the chosen one into view) instead of four rows.
  With six levels the opener had run to about five screens.
- Looked at and left: the A–Z rail looked visible over the opener in the
  preview, but only because the preview pane was hidden and paused its fade;
  it hides correctly. On an iPad held upright 第六級 wraps to a second row.

**Tuned for iPhone, iPad and desktop together (2026-11-08)**, all four pages.
What was measured and changed, so a later edit does not undo it:

- **Touch targets.** An iPad reports a coarse pointer just as an iPhone does,
  so every `(pointer: coarse)` rule applies to both. The reading page's bar
  buttons (house.css draws them 32px) are 44px there; the small text links —
  「複製連結」, 關於這份字表, the footer — grow padding to ~44px.
- **The notch.** Every page sets `viewport-fit=cover`, so on an iPhone held
  sideways the page runs under the notch unless it adds
  `env(safe-area-inset-*)`. The word pages and `/learn/` did already; the
  reading page's shell, bar and footer now do too.
- **iPad upright.** `/learn/` keeps three tiles across down to 700px and
  shortens them instead; the reading page centres its one column below 950px.
- **Press feedback.** Tiles, buttons and answers scale slightly while pressed,
  because a finger gets no hover. Off under reduced motion.
- **`100dvh`** after every `100vh` max-height, so the reading page's settings
  panel is not cut off by Safari's address bar.
- On a phone the word cards' meta row is tightened so 「複製連結」 stays on it.

### `/reading/vocab/` — 高中單字, 大考中心's list

A subpage of the reading page, linked from its cover: 大考中心《高中英文參考詞彙表
（111學年度起適用）》, 109 年 7 月版, one level at a time. **All six levels are in
(6,012 words)**: 1–2 on 2026-11-08, 3–6 later the same day when Lewis asked
「加入第三級到第六級」. The 「還沒進來」 pill and tile are still in the code for a
level with no data, but no level shows them now.

- **The engine is a copy of `/cambridge/lists.js` and `lists.css`**, as
  `vocab.js` and `vocab.css`, so 自學／教學 with `#teach`, 今天這一組, the
  four-type quiz, 投影 and the A–Z rail all behave as on A2 Key. It is a copy,
  not a third consumer of the shared file, because the data differs in shape:
  levels instead of topics, no 2025 additions, an example on every word, and
  American English as the default voice (the list spells American).
- **`tools/ceec/extract.py` reads the PDF twice.** The list prints every entry
  both by level and A–Z with its level; the script parses both and stops unless
  they agree entry for entry. Two slips in the PDF are mended in the script,
  not in the data: `calm v./adj./n` (missing dot) and `sportsman/sportswoma n`
  (a space inside the word). The PDF itself is not committed.
- **`tools/ceec/zh.json` is this site's**: `say`, one Chinese sense per printed
  part of speech (in the printed order — `build.py` refuses otherwise), and one
  example with the word in `*asterisks*` for the quiz. A `(n.)` after `v./` is
  the -ment noun, so `agree(ment)`'s n sense starts with `agreement`.
- **To add a level**, write its entries into `zh.json` and run
  `python3 tools/ceec/build.py`; only entries with Chinese reach `words.js`.
- **How Levels 3–6 were written.** 4,008 entries in 20 batches of ~200 (five
  per level), each writer doing the Chinese, the example and the collocations
  together, then 10 reviewers (two batches each) who changed 238 entries:
  wrong or secondary first meanings, British usage (*mobile phone*, *mock
  exam*, *change gear*), compound words passed off as collocations
  (*firefighter*, *dodgeball*), weak chunks (*famous inventor*), a
  mistranslation or two, and content not fit for teenagers — crude idioms
  out, violent examples softened, offensive senses labelled （冒犯用語）, no real
  people (one example had named Jill, a real student; one alluded to a real
  missionary). 214 of the new words already had collocations from 國中單字 and
  kept them; the other 3,794 got their own (7,214 collocations, 73 words with
  none because nothing natural exists). As a side effect 14 textbook-only
  words on 國中單字 that share a headword with Levels 3–6 now show
  collocations too.
- **The list's own oddities stay as printed**: `underlying` is listed as a
  verb, so its v sense explains *underlie*; `content(ment)` is v./(n.) only, so
  the adjective 滿足的 is not on its card.
- **Size.** `words.js` is 2.9 MB (≈1.1 MB gzipped; both hosts compress it). The
  list renders 40 cards at a time, so the page stays quick; the cost is the
  one download.
- **程度檢測 still draws its 高中 band from Levels 1–2 only.** A band for 3–6
  would need its own design (which levels, how many questions); not done.
- **`noindex`**, like the reading page: the list is 大考中心's, published for
  non-commercial use with credit, and the page credits it in 關於這份字表.
- **Set in Apple's product-page language, not the Cambridge pages' HBR +
  Apple pairing** (asked for 2026-11-08, "參考 apple 網頁"). One face for
  everything (the system SF stands in; the Charter serif is gone), a white hero
  with one large line and a blue pill, then a grey band: three big gradient
  numbers, a row of level tiles, and the word list as white cards. Orange for
  the small eyebrows where Cambridge uses red; blue for everything pressable.
  The numbers and tiles are filled from the data by `renderIntro()`, so adding
  a level updates them. Motion is one fade-and-rise on the opener, switched on
  by the script and off under reduced motion. The hero and tile buttons *jump*
  to the controls rather than scroll smoothly: a smooth scroll that long is cut
  short by the render that runs with it. 關於這份字表 moved to footnotes at
  the bottom of the page.

### 下載 PDF on the word lists (2026-11-10)

國中單字, 高中單字, A2 Key and B1 Preliminary each have a 「PDF」 button beside
設定. It opens one dialog, `public/learn/wordpdf.js`, shared by all four: pick
依主題 or 依字母, one topic or letter (or every one, a section each, each on a
new page), a range (a level, a set, 2025 新增), and what to show — 中文, 中文留空
(a line to write on, which makes the sheet a test), 例句, 常用搭配. 產生 PDF
builds a print-only sheet from the page's own `ENTRIES` and opens the browser's
print window, where 「儲存為 PDF」 saves it (on an iPhone: the print sheet's
share icon → 儲存到檔案). The document title becomes the file name, e.g.
「高中單字－人物與家庭－第二級」.

- **Built on the page, not stored as files** (Lewis's choice): any combination
  works, nothing has to be regenerated when the lists change, and the PDF's
  text is real text. The cost is the print window instead of a plain download.
- Each page passes its own config in a `WordPDF({...})` call after its script:
  topics, ranges, the tag after a word, whether it has collocations. A field
  the four lists share (`w`, `lab`, `se`, `x`, `co`, `vari`) is read directly.
- A4, two columns, black on white whatever the page's theme. Checked by
  printing with headless Chrome (all 26 topics of 第二級, 中文留空: 53 pages).

### 字首字尾單字網 on the word pages (2026-11-11)

Lewis: 「單字部分，幫我增加用 prefix, suffix 單字網」. He chose both word pages
(each with only its own list's words) and cards that open a word group over a
radial diagram. On the opener, under the topics: 「或從字首字尾開始」, a row of
字首 cards (un- 不；相反 · 5) and the 字尾 cards under 變成「人」/ 名詞 / 形容詞 /
動詞 / 副詞. A card narrows the list the way a topic does, so 閃卡, 測驗 and
今天這一組 work on that group too; above the list sits the web: the affix, its
meaning, one line on how it works, and every word as base → word with the
affix part in colour (agree → agree**ment**). A pair jumps to its word.
高中單字 has 51 cards over 977 words, 國中單字 18 over 132. `#affix/<key>`
opens one (e.g. `#affix/ment`).

- **The pairs are read by hand, not computed.** `tools/affix/candidates.py`
  proposes every pair a spelling rule finds with a base on either list (1,571
  unique); `tools/affix/build.py` holds the ones kept, and writes
  `reading/vocab/affix.js` and `reading/junior-vocab/affix.js`. The test was
  whether the parts still tell a student the meaning: un + happy yes; uncle,
  repair (re + pair), apartment, university, understand, generation, hardly,
  invaluable no. An affix shows on a page with at least three words there.
- **大考中心's list omits most obvious derived words** (no happiness,
  kindness, homeless, useless), so -ness has no card and -less only three
  words. Its own `agree(ment)` notation is read as two forms, agree and
  agreement, so those 60-odd entries sit in -ment.
- **One shared file, `learn/affixweb.js`**, loaded before each page's
  `vocab.js`, renders the cards and the web, adds its own CSS, and handles its
  clicks. Each `vocab.js` got small hooks only: `S.affix`, `affixHas(e)` in
  `pool()`, `affixWhere()` in the status line, `affixWeb(list)` above the list,
  `S.affix` in the deck key, `renderAffixes()` on the opener, the hash, and
  `S.affix = 'all'` wherever the topic or level is reset.
- The highlighted part is the affix's own spelling where the word ends with
  it (comput**er**, not compute**r**), or more when the whole base is kept
  (consider**ation**, add**ition**). In 教學 the Chinese under each pair hides
  with the rest.

### 中翻英閃卡 and 說一句自己的話 on the word pages (2026-11-11)

Lewis asked what else the research says works for vocabulary. Of the gaps
named — the cards only went English → Chinese, and nothing asked for the word
in a sentence of the student's own — he chose both. One shared file,
`learn/cardway.js`, loaded before each page's `vocab.js` like `affixweb.js`.

- **英→中 / 中→英**, a switch in the card's top bar, remembered per page on
  this device (`carddir`), in 自學 and 教學 alike. A 中→英 front shows every
  meaning with its part of speech in Chinese (動詞 同意；意見一致) under
  「說出英文」; 「給我提示」 shows the first starred example with the word
  gapped to its first letter (I a____ with you.) and its 中譯; 翻面 shows the
  English front and the usual back, and says the word once. A word with no
  Chinese keeps the English front. 國中's KK is left off the 中→英 front.
- **English inside a meaning is gapped too.** Both lists write words into the
  Chinese (agreement 同意；協議, 演員（actress 指女演員）, 許多的（= lots）),
  which would give a 中→英 card away; 108 meanings on 高中. Three letters or
  more keep the first, two letters are all gap, a lone letter stays (T恤).
- **說一句自己的話** on every card's back, after the collocations: one of six
  prompts (about yourself, your week, family or friends, school/work/hobbies,
  ask someone a question, the last time it happened), the same one each time
  for a word until 「換一個題目」. The word is `sayAs`, so agree(ment) reads
  「用 agree 或 agreement」. Spoken only — no input box, nothing checked —
  following the no-input rule; in 教學 it is the teacher's cue.
- Hooks in each `vocab.js`: `cwSeg()` in the setbar, the front chosen by
  `cwZhFront(e)`, `cwOwnHTML(e)` after `headHTML(e)` on the back, `cwAfter(e)`
  after a card is drawn. 投影 and the quiz are untouched; `/cambridge/` (the
  same engine, copied) does not have this.

### 遊戲 on the word pages (2026-11-11)

Lewis: 「Let's gamify the vocab pages」. The six from 2026-11-08 were already
there, so the offer was new ones under the same rules — no points, leaderboard,
timer or streak that resets. He chose three. A fourth view, 遊戲, sits after 測驗
(and 「玩單字遊戲 ›」 under the opener's button); `learn/wordgame.js`, shared and
loaded before `vocab.js`, which calls `renderGame()` from `render()`. Both games
use the range the page is set to, like the cards and the quiz, and end with
the words worth another look (and 「標成還不熟」 in 自學), never a mark.

- **字首字尾組字**: 「agree + ？ = 同意；協議」 under 「字尾組字 · 變成名詞」, pick
  the affix from four, ten a round, from the hand-read pairs in `affix.js`.
  The wrong options are built so they cannot also be right: a suffix's make
  another part of speech (人 and 名詞 count as one; -ant/-ent counts as both and
  is never a wrong option), a prefix's mean something else (un-/dis-/in-/mis-,
  under-/sub-, over-/out- are one family each), and a label any affix of the
  answer's family wears is left out (-y, -al, -ly and in- are each two
  affixes). They come from `AFFIX_ALL`, every affix in `build.py`, now also
  written into each `affix.js`, so 國中's 18 groups still get three. A wrong
  pick wobbles and says what that affix does, and when it makes another real
  word on the page, which: 「creative 是另一個字：有創意的」.
- **配對翻牌**: six words, twelve face-down tiles (four across, three on a
  phone), English and its first Chinese meaning; a pair stays up in green, the
  English says itself. In 自學 the student's 還不熟 and due words go in first.
  A word turned more than twice past its pair is listed at the end.
- **字首字尾收集進度** (in `learn/affixweb.js`): in 自學, a card reads 「12/65」
  once a word in it is 記住了, and fills green with 「✓ 4」 when all are; the
  web says 「已記住 12 / 65」 and ticks each known pair. `render()` now redraws
  the cards, so a mark shows at once. 教學 shows the plain count.

### 學測英文寫作 moves to `/learn/writing/` (2026-11-10)

Lewis saw the page as "the one made before" and the family's 學測寫作 as two
things; offered the choices (match the look, move the URL, rewrite the
content), he chose to move the URL under `/learn/`. Content and look are
unchanged: `git mv public/exam-writing public/learn/writing`, then one more
`../` on every shared file (type, editorial, house, logo) and one fewer on the
family's own (`fam.css`, `teacher.js`, `app.js`, the manifest).

- **`/exam-writing/` is now a redirect** in the `/a2-key/` pattern
  (`location.replace` + `noindex` + canonical), carrying the hash, so a task
  link like `#e114` handed out earlier still lands on that essay.
- **Offline needs no scope of its own now**: `learn/app.js` registers only
  `learn/` and `reading/`, and `learn/` covers `learn/writing/`. A phone that
  registered the old `exam-writing/` scope keeps it harmlessly — network first,
  it just fetches the redirect.
- Links changed in the global nav on every family page, the /learn/ tile,
  `learn.js`'s task card (`writing/#e114`), and drill.js's copied task link.
  `ew.done` and the other progress keys are per site, not per folder, so no
  one's progress was lost.
- Older sections below still say `/exam-writing/`; they describe it as it was.

### 109 練習單 at `/learn/writing/109/` (2026-11-14)

Lewis sent his paper worksheet for the 109 essay (*Department Store
Anniversary Sale*, seven pages: A 暖身 to G 換題目寫, then an answer key) and,
from four options, chose to have it made into a page to do on screen — over
hosting the PDF, a proofread, or the same sheet for the other six years. The
essay page's 109 card links down to it, and the page's bar links back.

| Part | On the page |
| --- | --- |
| A 暖身 | Four questions; think or say it, then 參考想法 (written for the page — the sheet had none) |
| B1 字彙配對 | Ten chunks, tap the English then its Chinese; a match is said aloud |
| B2 片語填空 | Type into the gap, 對答案 or Enter; a miss gives the hint, then 看答案 |
| C 動作配對 | One sentence at a time, eight jobs to choose from, then the whole table and 想一想 |
| D 句子排序 | Paragraph 2 under the sheet's letters (a)–(f); the clue words light up after |
| E 句型練習 | E1–E4, typed, then 參考答案 — "one way to write it", never a mark |
| F 範文填空 | Tap a gap, then a word; twelve gaps, a word bank that stays in view |
| G 換題目寫 | A scene, the eleven-row skeleton (109's own keywords as placeholders), the essay with a word count, the self-check |
| 範 範文全文 | Behind a button, after G, with a link to the sentence-by-sentence essay |

- **The essay is not copied.** Sentences, Chinese and jobs come from
  `ESSAYS.e109`; `109/sheet.js` holds only the worksheet's own questions.
  `practice.js` throws if they drift: a cloze that no longer spells the essay,
  a skeleton row count that is not the sentence count, a job not among the
  eight options.
- **Changed from the paper, on purpose.** F's word bank was printed in answer
  order (packed, lines, discount …), which gives the cloze away; the page sorts
  it alphabetically. Two answers the key did not list are accepted because they
  are right: *The tickets sold out* (no *were*) and the while-clause first.
- **What is typed stays in this browser** (`ewp.109`); 設定 → 清除這頁的作答
  asks before it wipes. Finishing C sets the essay page's 動作配對 for 109
  (`ew.done.e109.m`) — it is the same exercise. D does not set 排序, because the
  sheet only orders the second paragraph.
- **Teacher device:** 設定 → 全部顯示答案 opens every part answered, for the
  projector, without touching what anyone typed; 全部收起 puts it back.
- `noindex`, like the family's other new pages.

### 110 練習單 at `/learn/writing/110/` (2026-11-14)

Asked for as 「做 110 的練習單」 the same day. There was no paper sheet this
time, so every question is new, written on 109's pattern from the 110 essay
(*Visitors Damaging a Flower Garden*): the same eight parts, B2 and E with
sentences of their own, and transfer scenes for the same kind of task
(museum exhibits, a beach, a library). 110 is 圖片描述＋感受反思 rather than a
story, so C has nine jobs, the skeleton's last two boxes ask for a point of
view and the two sides of the closing contrast instead of 代價, and the
self-check is about the zoom-out, *If I were…* and two suggestions.

`practice.js` was made year-neutral for it: counts (十一句, 十二格) come from
the essay and the sheet, the skeleton's placeholders say the sheet's year,
`cost` is optional, nine jobs sit three by three, and a gap with a cue —
`___ (be)` — fills without the cue in the reference answer (109's E3 had
shown *decided to return (decide / return)*).

### `/reading/junior-vocab/` — 國中單字, 教育部's 2,000 words

The 高中單字 page's sibling, asked for 2026-11-08: 教育部 108 課綱《英語文參考字
彙表（2,000 字）》, 附錄五 of the English curriculum PDF from 國家教育研究院. The
two pages link to each other under their tiles, and the reading page's cover
links both. Public, `noindex` (Lewis's choice, though the list is a curriculum
appendix).

- **Another copy of the engine**, from `/reading/vocab/`, Apple look included.
  The six levels become the list's two tables, 基本字 and 其他常用字, and there
  is no 還沒進來: both tables are in.
- **The tables are counted as printed, not as titled.** The titles say 1,200
  and 800; the tables hold 1,211 and 794 (*can* and *could*, *Miss* and *miss*
  are separate items). `tools/moe/extract.py` prints both numbers and keeps
  every item; the page shows the real counts and says why in 關於這份字表.
- **The PDF puts spaces inside words** (`cart oon`, `har dly`, `soy -sauce`).
  The script closes a space when the joined form is a dictionary word and one
  half is not, so `hot dog` keeps its space; `blo use` is listed by hand,
  because *blo* happens to be a word. A letter head must be followed by a
  space, or `T-shirt` opens a T section.
- **The list prints no part of speech**, so the ones on the page are this
  site's: 1–3 senses per word, most common first, in `tools/moe/zh.json`,
  written by eight subagents and read by two reviewers, as for 高中單字.
  Examples are kept to 5–12 words of A1–A2 English. `python3
  tools/moe/build.py` refuses to build while any word lacks Chinese.

**The textbook words from `/junior-high/` are merged in (2026-11-08)**, at
Lewis's choice over adding that page to `/learn/`. The grammar stays where it
is; `/junior-high/` itself is untouched and keeps its URL.

- **One source.** `build.py` reads `public/junior-high/words.js` and
  `grammar.js` through node; nothing from them is copied into `tools/moe/`.
  Change a textbook word there and rebuild here.
- **No word twice.** A textbook word on the 2,000 list (542 of 689) stays one
  card and gains the 講義's KK, its example and a 「七年級 B1 L3」 chip. One that
  is not (141, mostly phrases — *How old...?*, *take a shower*) becomes its own
  card in the 講義's words. Matching is by the whole headword, case included
  (*May* the month, *may* the verb), never by part of a phrase; `PLURALS`
  sends *teeth*, *fishermen* and the like to the list's singular.
- **Four sets, not one level each:** 基本字, 常用字, 七年級課本, 八年級課本 —
  a word can be in a table and a grade. 全部 is now one A–Z run (it used to
  read 基本字 a–z and then start again).
- **A grade reads in lesson order**, with a head over each lesson (課次, topic,
  文法重點) and a 課次 select. The head's 「看這一課的文法」 goes to
  `#g/<grade>/<unit>` on `/junior-high/` — the unit `build.py` finds the same way
  that page's own ✎ 文法 link does. (`#g/for-<lesson>` exists too, but landed
  on the wrong unit for B1 L1; don't use it.) The A–Z rail is off in a grade.
- **The 講義's examples are marked for the quiz** where the word can be found
  as written — inflected first words (*takes a shower*), plural last words
  (*video games*), the bracketed forms (*thought*). Ten cannot (*both...and*,
  *built*); they show, but never become a gap-fill.
- A word taught in both grades is counted once on the opener (660).

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

Session 2 is the article that explains her from the inside — Muriel Wilkins's
seven hidden blockers, the beliefs a leader cannot see. Session 1 watched the
manager step into a surgeon's training with "let me demonstrate"; Wilkins's
first blocker is *I need to be involved*. The seven are the spine of the
session, as a self-audit Anny marks for her manager and then for herself.

| Piece | What it does |
| --- | --- |
| 🗂 Sessions | One folded section per discussion, newest at the top and open |
| ⚖️ Contrast | Two columns, labelled per block — how it landed / how it could, or a belief and its reframe |
| 🗂 Phrase cards | The phrase and its meaning face up; the example sentence behind a tap |
| ☑️ Audit | A list to mark against yourself; the button wording is set per block |
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
- **The page reads newest-first; the array does not.** `render.js` builds
  `const ordered = [...sessions].reverse()` and hands that to both the contents
  list and the document, so the newest lesson is the first thing on screen
  rather than the last. The array itself stays chronological, which is what
  lets "the newest" mean something — the open-on-load rule still takes
  `sessions[sessions.length - 1]`. Session 2 is the first time any of this is
  visible; until November both this notebook and Aaron's had one session each.
  The four adult notebooks built after this one dropped the reversal and read
  oldest-first. This page and Jill's keep it.
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
- **What hides behind a tap is prose, not names.** The rule the page arrived at
  after Lewis asked the same question three times. A *named thing* — a focus
  chip, one of the seven blockers, a phrase on a card — shows both languages at
  once, because a name and its translation are one item and putting a tap
  between them only delays the thing he came for. *Prose* — a teaching
  paragraph, a blocker's description, a phrase's example sentence — keeps
  English in front and Chinese one tap away, which is where the reading
  practice actually lives. Anything hidden must also carry a visible 中 chip:
  three separate reports of "missing Chinese" on this page were all text that
  was present but had nothing to announce it, and an affordance nobody can see
  is the same as one that is not there.
- **A paywalled source still gets sourced honestly.** Session 2's article is
  behind a paywall in both languages — about 5% of each is readable. What the
  session carries instead came from what could be read in full: the seven names
  and their order from two independent sources that agree, and the three stages
  from the author's own published worksheet. The article is not reproduced, the
  same rule `/wealth-habits/` set. One reframe on the page is Wilkins's own and
  is credited as hers; the other two, and every example and exercise, were
  written for the lesson. The closing `note` block says exactly which is which,
  **on the page** rather than only in the content file — a reader who cannot
  see this README is the one who needs to know.
- **One diagram per session, laid out rather than drawn** (14 Nov 2026).
  Each session had one thing in it that was a shape rather than a sentence,
  and in all three cases it was buried in a paragraph: the order of the
  coaching conversation (keep → reframe → challenge), the three stages of
  working on a belief, and the order you deliver a leadership update in. One
  each is the ceiling, not a quota — the seven blockers and the four Cs are
  already card grids, and a second figure beside either would be decoration. They are figures now, named by key from `content.js`
  (`{ t: 'figure', fig: 'order' }`) with the drawing itself in `render.js`, so
  the content file stays pure data. They are **HTML and CSS, not SVG with text
  inside it**: text in an SVG does not reflow, does not grow when the reader
  enlarges type, cannot be selected or read aloud, and has to be positioned by
  hand twice over on a bilingual page. The only SVG is the arrow. Labels show
  both languages at once, because a diagram is all named things and nothing in
  one should be behind a tap.
- **The figures size against their own column, not the window.** A viewport
  breakpoint gets this wrong in the middle of the range: at 900px the contents
  sidebar appears and takes 15rem off the column, so a window that just got
  *wider* leaves each step 109px across. A container query on `.fig` asks the
  only question that matters, and the two figures carry different thresholds
  because three steps fit where four do not. Without container-query support
  they stay a column at every width: taller, never broken.
- **Readability, measured rather than eyeballed** (13 Nov 2026). Three things
  came out of actually checking the page instead of looking at it. **The body
  was set in the display face** — intuitive.com runs BrownPro for headlines and
  Inter for everything you read, and this page had the geometric face doing
  both, which looks right in a heading and costs you on the fifth line of a
  paragraph. Headings and figures keep `--font-display`; running text moved to
  the text face. **English ran 74–91 characters a line** at the full 46rem
  column, past the 60–75 where the eye still finds the start of the next line.
  The column stays wide because the two-up grids need it, so prose got its own
  36rem ceiling instead; it now sets at 49–69. A paragraph narrower than the
  cards under it is the normal shape of a page that has both. **The Chinese was
  too small at `.82em`** — 14.8px, and Traditional Chinese packs far more
  stroke into an em than Latin does. It is `.88em` now, still clearly the
  second voice.
- **The company's livery, and the sessions first.** Both of Anny's pages follow
  intuitive.com from November 2026 — see
  [intuitive.css](#intuitivecss--one-clients-company-livery). On this one that
  also means the English is set in a sans: that site has no serif body text
  anywhere, and the English is where the change shows most. The meeting guide
  sits **below** the sessions in the contents, because the sessions are what
  this page is and the guide is a thing beside it; the markup has to come first
  to survive `render.js` appending the list, so `#nav` is a flex column and one
  `order` puts it where it reads.
- **The column sticks, not the lists inside it.** `position: sticky` was on
  `.toc`, which was fine while there was only one of them. Adding the meeting
  guide made two, and two sticky siblings both pin to the top and print over
  each other the moment the page scrolls. The wrapper is the scroll box now —
  which is what the meeting guide already did — and `keepLinkVisible` was
  pointed at `#nav` to match, since the box it used to scroll no longer scrolls
  and it had quietly become a no-op on both pages.
- **The contents list no longer scrolls the page.** `markHere` used to end with
  `a.scrollIntoView({ block: 'nearest' })`, which scrolls the nearest scrollable
  *ancestor* — the document, whenever the list is not itself scrolling — fired
  on every scroll event, and inherited `scroll-behavior: smooth`, so each call
  started an animation that fought the next. `keepLinkVisible()` moves only
  `.toc`, only when the marked link is genuinely outside its box, and
  instantly. The fix landed on Jill's page in August (`277be2c`) and spread by
  copying; this page was built before it and was the last one still carrying
  the bug.
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

### `/anny/meeting/` — the co-planning guide, and the first page here that is not a lesson

Anny is co-planning a two-day business team meeting with the other Clinical
Sales Director, and the thing she needed was not English practice but a
document to run a 30-minute conversation from. So `/anny/meeting/` is a working
tool, not teaching material, and almost everything the notebook does it does
not: no English layer, no 中 chip, no 🔊, no answers to reveal, no folding.
Chinese is the text rather than a translation, so the body face is the Chinese
one and the serif is kept only for figures. It has its own `content.js`,
`render.js` and `style.css`, and reuses the notebook's colour tokens and the
three shared sheets so the two still read as one set. A static block at the top
of `#nav` links the two together in both directions — `#nav` is appended to,
never replaced, so hand-written markup inside it survives the renderer.

Eight sections, from the outcomes to agree before anything else, through the
two-day outline and the afternoon agenda under review, to a checklist and a
decisions table.

| Piece | What it does |
| --- | --- |
| ⏱ 30-minute plan | The row the conversation is in lights up, driven by the clock in the bar |
| 📅 Two days | A drafted outline of the whole event; every row marked 建議 or 已提供 |
| 📋 Agenda review | Each slot as it stands, and the one thing to settle about it today |
| 💬 Objections | What the other person may say, and a way to answer it |
| 🗣 Script and openers | The long draft and five short things to say, each copyable |
| ☑️ Checklist, 📝 Decisions | Ticks, owners, dates and notes — all saved |

- **This page saves, and the rest of the repo deliberately does not.** Every
  other adult page here clears on reload, because the same page is used with
  the next client and one client's work must not greet another. This one has no
  clients. It belongs to one person for one meeting, and a checklist that
  empties itself when her phone locks the screen would be worse than paper. The
  ticks, the owners, the dates and the notes all live under one localStorage
  key, and 清空本頁紀錄 in the tools panel wipes the lot. Every read and write
  is wrapped, so private browsing degrades to an unsaved page rather than a
  broken one.
- **The clock only claims to be somewhere while it is running.** A paused or
  unstarted clock sits at 0:00, and lighting the first row at 0:00 would say
  "we are here" about a meeting nobody has started. Past 30 minutes the last
  row stays lit rather than going dark — overrunning is the normal case.
- **複製決議 is the one checklist item the page does itself.** *整理並分享會議決議*
  is the task most easily dropped once a meeting ends, so the tools panel turns
  what was typed — the outcomes, the owners, the dates, and anything still
  unticked — into a message she can paste into mail or LINE.
- **The two-day outline is drafted, and the page never lets you forget it.**
  Only 13:30–16:00 was ever supplied; the source document says so itself. Lewis
  asked for the whole two days anyway, so the rest was written from the guide's
  own reasoning — day one builds shared understanding, the evening is for the
  people who rarely talk, day two turns that into action. Saying so once in a
  banner is not enough for a page that gets scrolled, printed and forwarded, so
  every row carries its own 建議 or 已提供 mark, the band keeps its colour in
  print, and the section closes on the three things to settle with the other
  CSD. Each slot is also tagged with which of the three outcomes from section
  01 it serves, which makes the empty tags the useful ones: a slot that serves
  no outcome is a slot to cut.
- **Two diagrams here too** (14 Nov 2026), built the same way as the
  notebook's: HTML and CSS with one SVG arrow, sized by a container query
  against their own column. *三種參與程度* unpacks the single most consequential
  thing to settle on the day — whether she is asking the other CSD to advise,
  to own a piece, or to co-lead — which was eight words inside a callout. *兩天
  要走的那條線* draws the through-line the day-by-day table cannot show. Both
  were clauses in a paragraph before.
- **A block type with no builder says so on the page.** The dispatch table used
  to return an empty string for an unknown `t`, and the whole agenda table
  vanished silently the first time it ran. It now renders a loud red marker and
  logs to the console, because a guide someone is about to walk into a meeting
  with must not be able to lose a section quietly.
- **`minmax(0, 1fr)`, not `1fr`, on the single-column shell.** A bare `1fr`
  floors the track at the widest thing inside it, and the tables carry a
  `min-width` so their columns stay legible — which pushed the page 41px wider
  than a 375px phone instead of letting the wrapper scroll. Below 620px the
  tables stop scrolling and stack instead: the renderer puts the column heading
  on every cell as `data-h`, and the stacked view shows it, because a stacked
  row that threw its headings away reads as two unrelated sentences.
- **It names people, which the notebook next door does not.** The notebook
  names nobody but Anny. This page carries ten colleagues and an internal 2027
  agenda, because an agenda table she has to run on the day is close to useless
  with the people taken out of it. That was Lewis's call, made explicitly. It
  carries `noindex, nofollow` like everything in this folder — unfindable, not
  secret. The line to hold is the one under *Live sites*: anything that must
  never be readable by someone with the link does not belong in `public/`.

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

- **The contrast block took two optional labels.** The columns default to
  *As it landed* / *As it could land*, which is right for a message and wrong
  for anything else. `coldEn`/`coldZh` and `warmEn`/`warmZh` override them —
  here to *The instinct* against *The reframe*, which is the move the whole
  hour kept making. The defaults are unchanged, so nothing else breaks. This
  started on Aaron's page; Anny's has since been given the same two labels.
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

Newest-first started here, but it is no longer what sets this page apart: the
`sessions` array is still chronological — append at the bottom, `n` counts up —
and the renderer reverses a copy of it (`ordered`) for the contents list and the
document. The array stays the source of truth for what "the newest" means, so
the open-on-load rule and the anchors are untouched. Anny's and Aaron's were changed the
same way afterwards, each in its own copy. The other notebooks still read
oldest first; each page is a deliberate copy, so that stays a decision per
notebook rather than a consequence.

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

### The look, and where it lives

The interface this page was used to work out — typography and layout after an
editorial site, interface after Apple — now lives in
[`public/house.css`](public/house.css) and is linked by all thirty-six pages in
the family. Only one piece of it stayed behind here: `--measure: 40rem` and the
`#doc` rule that applies it, because a column is a per-page decision
(/english-brain/ chose 36rem, /exam-writing/ needs 48rem for its tables).

One line on the cover is not boilerplate. Anita's feedback on the homework page
was that the generated voice lacks intonation, which is true, so the 🔊 line
says what the audio is good for — pronunciation — and points intonation back at
the lesson.

Session 3 (17 October 2026) is the one entry here that is not a discussion:
it is the feedback sheet on fourteen sentences she wrote. It uses an
`upgrade` block rather than `fix`, because `fix` marks a mistake — a cross, a
tick, a correction — and several of those sentences are perfectly good
English, which the sheet itself says in its closing line. So the marks are
neutral, the first line is not struck through, and only the version to keep is
spoken. The accent sits on the arrow rather than the sentence, since on this
page `--navy` resolves to ink and weight alone was doing too little. The
session also carries a `passage` block, the recording text, set wider and
looser with the speaker on the paragraph.

Its two companion links — [`/recording-practice/`](public/recording-practice/)
and [`/sentence-upgrades/2026-10-17/`](public/sentence-upgrades/2026-10-17/) —
sit at the TOP of that session, right under its opening line, rather than
beside the blocks they belong to. They were at the bottom first, which in a
session carrying fourteen sentence cards and thirty-nine phrase cards put them
five thousand pixels down: a link nobody scrolls to is a link that is not
there.

Both August sessions carry a `link` block to
[`/sentence-upgrades/`](public/sentence-upgrades/), which is her own homework
from 25 July — the page Lewis showed her on 7 August and that she gave feedback
on a week later. Session 1's link sits under the five-step note, since those
steps are instructions for that page; session 2's repeats it with her own
finding attached, that the voice is flat. A third block, added at Lewis's
request, points at the October set from session 2 — the newest session, so it
sits near the top of the page. Its first words are the date, because the
material is later than the session that carries it.

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

Session 2 (3 September 2026) is the nine lessons of Homer's *Odyssey* —
resilience, cleverness over strength, pride arriving right after a win, the
Sirens as something fun that costs you what you actually want, Calypso's offer
refused, choices and consequences, leadership, adapting, and Penelope's twenty
years — then the *Goal → Temptation → Choice → Consequence → Growth* pattern
with a `match` set, eighteen phrase cards, a gap-fill, and the talking.

**It was prepared before the lesson rather than after one**, which is a first
for this page and is written into the file. Session 1 is a record of an hour
that happened; session 2 is material for one that has not. That is why it has no
`fix` block — there is nothing of his to correct yet — and why its date is the
day it was added.

**The work was the register.** The same nine ideas exist on
[Ken's page](#kens-notebook--college-student-one-to-one-kept-over-time), written
for a college student: careers, workplace conflicts, "being in your twenties".
None of that is Eason's life. Here every example is school, exams, a group
project, a club, a phone, a game, homework left until Sunday night — and the
sentences are shorter. The two pages share a source and share almost no
sentences, which is the point of keeping a notebook per student rather than a
library of lessons.

Two renderer additions came over from Ken's page with it, and the file says so
at the top so nobody assumes this copy is still untouched: the **`part`
divider**, without which nine lessons plus the language work is one undivided
scroll, and an **optional title on `summary`** (`titleEn`/`titleZh` plus a
number in `n`), because the source arrives as nine numbered, titled lessons and
flattening them loses what makes a long reading scannable later.

Session 3 (6 September 2026) is his own self-introduction, and it has the third
kind of source this page has now used: session 1 was a record of an hour that
happened, session 2 was material prepared for one that had not, and this is a
finished piece of writing he produced himself. The four paragraphs sit on the
page verbatim, in `summary` blocks so each one has a 🔊 at speaking pace, with a
`note` above them saying they are unedited — the attribution matters, because
`summary` is otherwise the page's own teaching voice.

The lesson is in one sentence of his: he is proud of his honesty and has started
to notice that being completely honest is not always the best choice. So the
`contrast` block is three cases where a blunt true sentence and a tactful true
sentence carry the same information, and the note beside it draws the line he
was actually reaching for — most of what he wants is not lying but choosing
which true thing to say first. The white lie is the smaller tool.

**The reason to keep a notebook per student is in the `note` about patience.**
In session 1 he worked out that what frustrates him when coaching a friend is
not losing but "I already explained it, why haven't you learned it yet?"
Seventeen days later, unprompted and on a different subject, he listed patience
as the one trait he still needs to work on. Two conversations, one word. A page
built one lesson at a time cannot see that; a notebook can.

`fix` is empty for the third time, and for a new reason — the writing arrived
polished, so it carries no record of what he said while producing it, and the
sentences in it are already correct.


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
- **The `mcq` block came over from Jill's renderer too**, with one addition: an
  optional bilingual `why`, hidden until the row is solved, exactly as the
  `gap` block's explanation is. The rule for using it is written above the
  template — leave `why` off where the question only asks what the article said,
  because the article above *is* the explanation, and use it where the question
  asks her to judge something. Unlike a gap, the options are never hidden after
  the answer is found: the right one is marked, the tried ones fade, and the row
  stays readable as a record of what was guessed before it was known.

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

Two quizzes sit between the reading and the language work, in a part of their
own. **Did you get it?** is ten recall questions on the article, most of them
bare — the passage is directly above. **What would you say?** is six situations
rather than six facts (a video promising a guaranteed 20%, a friend calling an
ETF "completely safe", two ETFs on the same index at 0.10% and 0.85%), and every
one of those carries its `why`, because there the explanation is the whole
point.

The handout's own sections become the parts: **A** the habits the reading puts
*before* investing, carried by the `cards` audit; **B** its collocation tables,
as five groups of phrase cards plus a term-and-meaning `match` and a
choose-the-collocation `gap`; **C** its word-family table, as a `note` and a
gap set that tests the right *form* rather than the right meaning; **D** the
talking — a `poll`, five discussion questions, and the speaking task.

**Session 2** is Morgan Housel's *The Art of Spending Money*, from a bilingual
summary, and it is the other half of session 1 by design: the first is about
growing money, this one about using it. Its source arrives in five numbered
sections, so the `part` dividers are the book's own — why spending isn't math,
what money can and can't fix, adaptation and negative returns, social debt and
status, what to do about it — followed by a quiz part and a talking part, the
shape session 1 settled into. The `contrast` block runs the daydream against
the finished sentence ("if I earned three times as much I wouldn't worry about
anything" against "…I'd stop worrying about rent, and I'd still be the person
who worries"), and the `cards` audit asks which of six purchases would add to
her life and which would start charging her afterwards.

That audit is why the block's two button labels are now overridable. They were
hardcoded as `I have this 我有這樣的人` / `I need this 我需要一位` — "I have such
a person" / "I need one" — because the block was written for auditing *people*,
a mentor or an honest friend. Pointed at a list of habits or purchases that
Chinese is simply wrong, which is what shipped in session 1 before the fix. Set
`haveEn`/`haveZh` and `needEn`/`needZh` whenever the items are not people; the
defaults stay for the case it was written for. No other notebook's content uses
this block, so nothing else was affected.

One more rule the file now records: **no markdown in content strings.** The
renderer escapes everything it is given, so `*asterisks*` reach the page as
asterisks. Put the stress in the wording or in quotation marks.

Two things are deliberate and should survive into later sessions on this
subject. The page teaches the language people use about money and recommends
nothing — no product, no market, no amount — and a `note` near the top says so
in both languages. And the `fix` block is absent, for the structural reason
given in the file: the source is a handout written *before* the lesson, so it
holds no record of anything Anna said. A transcript would fill it.


## Nikky's Notebook — adult, one-to-one, kept over time

The eighth notebook, copied from
[Aaron's](#aarons-notebook--adult-one-to-one-kept-over-time) — so it starts with
the optional contrast labels and the `link` block already in place — with the
`nikky.` localStorage prefix so no notebook shares a voice or a Chinese setting
with another. Everything in the design notes above applies here too. Nikky is an
adult client, the same register as Anny's and Aaron's: a manager with a career
under way, discussing her own working week in English.

**The scroll fix is in from the start**, the same pair of changes
[Jill's](#the-page-does-not-scroll-itself) and Anna's carry: `keepLinkVisible()`
in place of `a.scrollIntoView({ block: 'nearest' })` in `markHere`, and no
`scroll-behavior: smooth` on the root. It is worth copying forward into every
new notebook rather than inheriting the bug along with the renderer.

Session 1 (18 August 2026) is her second week in a new company: a team she has
just inherited, a previous manager who handled the biggest key account herself
and left with the knowledge, an Excel-and-email workflow where the last one ran
on SAP and Power BI, and a laptop that still has no SAP on it. The hour
converged on an order of operations — understand it, write it down, spread it
across the team, and only then automate it — which is where the session title
comes from. It carries twenty-four expressions, a six-item `cards` audit of the
team's foundations, six gap-fills, and the 90-day question as homework.

**The `fix` block is the reason this page exists**, and it is sourced
carefully. The session was recorded and the captions are automatic, so the
block holds only the lines that were clearly transcribed. Where the captions
were plainly garbled — SAP as "SEP", SOP as "SLP", Claude Code as "Cloud
Code" — nothing was reconstructed from memory, and the rule is written into the
header comment of [`public/nikky/content.js`](public/nikky/content.js). The ten
sentences that survived that filter are real ones, which is the whole value of
the block.

Session 2 (1 September 2026) is the sequel nobody wanted: the newcomer from
session 1 resigned, and the source is Nikky's own written reflection on it. The
hour turns on a shift her own last two paragraphs make — from *why did this
employee leave?* to *what should we change in the system before we hire the next
person?* — which the `contrast` block carries, along with the two patterns the
handout singles out (`I understand…, but at the same time, we need to…` and
`Instead of seeing A as…, I want them to see it as…`). Its eighteen phrase cards
are the handout's own chunks, examples included; the Chinese was retyped rather
than pasted, because the PDF's text layer returns CJK **radicals** for several
common characters (⽂ ⼯ ⼒ for 文 工 力) and they would have shipped as mojibake.

**Session 2 has no `fix` block**, deliberately, and the reason is in the file.
Its source is the lesson handout, and the reflection printed in it is already
the *polished* version of what she wrote — a polished text holds the ideas but
not the mistakes, so there is nothing to correct. The same rule as Anny's and
Anna's first sessions. Her original writing, or a recording, would fill it.

Session 3 (13 November 2026) closes the chapter the first two opened: she is
leaving after three months and going back to healthcare logistics in a QA
Compliance role. Its source handout is the one that *does* carry her originals,
setting each revision beside a `You wrote: …` line, and the session is built
around the sentence the whole reflection turns on — *being capable of doing a
job well and being a good fit for an organization are not necessarily the same
thing*. Its `link` block points at **`#s1`**, an in-page anchor rather than
another page, which is safe because the click handler and the `hashchange`
handler both unfold the target session before the jump.

**Only three of that handout's ten pairs became `fix` items.** The handout
itself says of two of them that her sentence was already correct, and most of
the rest raise a plain sentence to a professional register rather than putting a
mistake right. Those six sit in a `contrast` labelled *What you wrote* against
*The revised version*, with a hint saying in both languages that the left column
is not a mistake. A correct sentence behind a ✕ teaches a student to distrust
English that was fine, which costs more than the polish is worth — the same
principle as [Ken's rule](#kens-notebook--college-student-one-to-one-kept-over-time)
about an AI rewrite. The three that remain are real: *from the beginning* for
*from scratch*, automating the statements rather than the statement *process*,
and *a fresh mind* for *a fresh perspective*.

**The company is not named anywhere on the page.** Session 3's source names her
employer in its title, its discussion questions and throughout; the page says
"the company". The notebook is `noindex`, but that keeps it out of search
results rather than making the URL private, and session 3 is a named person
explaining why she was unhappy somewhere and left. The same rule the repo
follows for Mia's clinic, Keep Speaking's client and the family-law firm, and it
is written into the header comment so later sessions keep to it.

**The revised reflection is on the page in full**, as Part A: all twenty-eight
sentences of it, verbatim, as nine `summary` blocks with the Chinese behind the
usual chip. `summary` rather than `note` bodies for the reason Ken's session 3
sets out — only `summary` carries a 🔊, and at B2 a model text is for reading
aloud rather than for understanding. The only changes to her words are
typographic: a spaced em dash, and a lower-case letter after the colon.

That made the session long enough to need dividing, so **the `part` block and
its stylesheet were ported here from [Ken's
renderer](#kens-notebook--college-student-one-to-one-kept-over-time)** and
session 3 runs A–F: the reflection, what changed in her English, the language,
what stands out, practice, speaking. Sessions 1 and 2 have no parts and need
none — the block is additive, and a session without one renders exactly as
before.

### It was sealed for a day, and the filename still shows it

On 13 November the notebook was put behind a passcode — `tools/seal.mjs`,
PBKDF2 → AES-GCM, the same machinery as
[`/family-law/meeting/`](#family-law-english--adult-自學-and-教學-the-english-of-a-family-case)
— and the passcode was removed again the same day at Lewis's request. The page
is plain again: `notebook.js` and `render.js`, no lock, nothing encrypted.

**One scar is deliberate: the content file is `notebook.js`, not
`content.js`.** Sealing the page meant deleting `content.js`, and that turned
out not to be enough — Cloudflare still served the old plaintext from the edge
for hours afterwards (`cf-cache-status: HIT`, `s-maxage` seven days), because a
*removed* file does not invalidate a cached one. Publishing a different file at
that path is what replaced it, so `/nikky/content.js` now answers with a stub
whose cache does not expire until around 20 November. Putting the sessions back
under the old name would have served that stub and drawn an empty page. The new
name sidesteps the cache entirely.

The general rule, worth carrying to any page here: **if a file has to be taken
out of circulation, overwrite it rather than delete it, and never reuse its
name afterwards** — a 404 at the origin is not a 404 at the edge.

If the lock is ever wanted again, it is two commits back from
`0ef063a`: `public/nikky/lock.js`, `sealed.js`, the lock markup in
`index.html` and the `.lock` rules in `style.css`. The one trap it hit is worth
reading before reviving it — `lock.js` and `render.js` are both classic scripts
sharing one global scope, and both declare `$`, so the lock must stay inside an
IIFE and hand over exactly one name, `window.NOTEBOOK`. Without that, the lock
opens and the notebook never draws, with a single console line as the only
sign.

## Ken's Notebook — college student, one-to-one, kept over time

The ninth notebook, copied from
[Anna's](#annas-notebook--young-adult-one-to-one-kept-over-time) — so it starts
with the `part` divider, the `mcq` block and the scroll fix already in place —
with the `ken.` localStorage prefix so no notebook shares a voice or a Chinese
setting with another. Ken is a college student, which is close enough to Anna's
register to reuse it: an adult who is new to the subject, full sentences,
nothing simplified, examples from his own life rather than from a job he does
not have yet. His are **photography and weight training**, and that is written
into the header comment of [`public/ken/content.js`](public/ken/content.js) so
later sessions invent their example sentences from the right material.

Two small changes were made rather than copied. The sessions here **are dated**,
unlike Anna's, so every entry gets `dateEn`/`dateZh` — the fields stay optional
in the renderer, but leaving them off here would put the page's order and its
dates out of step. And the `cards` audit's two buttons are now overridable
(`haveEn`/`haveZh`, `needEn`/`needZh`): the built-in Chinese reads 我有這樣的人
/ 我需要一位 because the block was written for an audit of *people*, and this
page audits a habit, so it sets them to **Already true / Still missing**.

Session 1 (26 August 2026) is his summer: he set himself two goals — get
stronger, and sit the TOEIC exam for the first time — and the hour was spent on
how he told that story. It runs A–E. **A** is his own English, six sentences
with the repairs behind a tap, plus two notes on the mistakes worth naming (`so`
doubled with `that's the reason`; `workout` against `working out`). **B** is the
polished model paragraph with eight comprehension questions. **C** is
twenty-seven collocations in four card sets, a matching pair and a six-item
gap-fill. **D** is five reusable sentence patterns and a gap-fill on them. **E**
takes the subject into *Atomic Habits* — a habit audit, a five-statement poll,
five discussion questions and the closing speaking task.

**Teaching paragraphs carry their source's own titles.** Three of the four
sessions were built from documents already cut into numbered sections — the nine
lessons of the Odyssey summary, the twelve sections of the Huberman clip, the
five model answers — and the first pass flattened all of them into runs of
untitled paragraphs. That reads fine once and is nearly unusable later, when he
is looking for one idea rather than reading the lot. So `summary` takes optional
`titleEn`/`titleZh` and an optional `n`:

```js
{ t: 'summary', n: '3', titleEn: 'Pride can become a weakness',
  titleZh: '驕傲可能變成自己的弱點', en: '…', zh: '…' }
```

The heading is **not** `label()`, which the activity blocks share: that one is
uppercase with wide tracking, right for a four-word activity name and shouting
for a sentence like *Good leadership requires responsibility, not just
confidence*. `.summary-head` is sentence case with the number in a quiet chip,
and the Chinese behind the same 中 chip as everywhere else.

Restoring the titles meant restoring the structure under them: session 4's
lessons 6 and 7 had been merged into one paragraph and lesson 8 existed only
inside the `contrast`, so those are now three paragraphs and the poem's nine
ideas are nine numbered things on the page rather than a claim in the part
heading.

**The focus chips are links, which no other notebook's are.** Four sessions in,
a session is several screens long, and the row of chips under its heading is the
only contents list it has — reading one and then hunting for the part it names
is work the page should be doing. So any block can take an `id`, and a focus
item can take a `to` naming it:

```js
focus:  { en: 'Modern Sirens', zh: '現代版的賽蓮', to: 's4-sirens' }
block:  { t: 'note', id: 's4-sirens', en: 'What are your Sirens?', … }
```

Three details make it hold up. The id is spliced into the block's own root
element rather than wrapped around it, because the stylesheet uses
adjacent-sibling rules between blocks and an extra element between them would
break spacing somewhere nobody would think to look. Ids are unique across the
whole file, not per session, so `/ken/#s1-fix` is a shareable link — and the
renderer resolves a block id to the session holding it before jumping, since the
target otherwise sits inside a `display: none` session and the browser has
nothing to scroll to. That resolution runs in three places: on load, on
`hashchange`, and in the document click handler. There is deliberately **no**
`scroll-margin-top`: `html` already carries `scroll-padding-top`, and adding
both put every target 70px too low.

**Session 2 (26 August 2026)** is body recomposition, built from a written
summary of a Huberman Lab clip with the nutrition researcher Alan Aragon: can
you gain muscle and lose fat at once, and does that require a caloric deficit.
The subject is Ken's own training, but the more useful half of the page is
**Part B**, on the language researchers use to avoid saying more than they know.
A `note` on hedging, a `contrast` of *Overclaiming* against *As the research
puts it* — `proved` against `found`, `you need 3.3 g/kg` against `intakes of
around 2.2 to 3.3 g/kg were used in these studies` — ten research phrases, and
a six-item gap-fill where the wrong options are all the ways a finding gets
inflated. Part A carries the reading and a ten-question quiz, Part C the
training and nutrition vocabulary, Part D the talking.

The `contrast` in Part A is doing something different from the one in session 1:
it sets the two experiments side by side, *Without training* against *With
training*, because the argument is not about protein at all — protein is in both
columns, and what changes is whether anything is asking the body to build.

**This is the first session here built on claims about the body, and two things
follow.** The page records what the clip and the summary *said*; it does not
vouch for the science, and the studies are named so he can read them himself —
the same principle as the AMPK/mTOR note in
[Aaron's](#aarons-notebook--adult-one-to-one-kept-over-time). And a `note` near
the top says in both languages that this is an English lesson rather than a
nutrition plan: the protein figures on the page are intakes **used in particular
studies**, never a target for him. There is no `fix` block, because the source
was written before the lesson.

**Session 3 (3 September 2026)** is *The Odyssey* — why he went, what he
admires in Nolan, and why three hours went past without him noticing. It runs
A–F. **A** is the polished version of his talk with an eight-question quiz;
**B** the twenty-two collocations from the handout, in three card sets, with the
handout's own "top ten to prioritise" turned into a `cards` audit (*I would use
this* / *Still new*) rather than a list; **C** four sentence patterns and a
gap-fill; **D** the handout's Answer → Reason → Example → Reflection structure,
carried by a `contrast` of *Where most people stop* against *All four moves*;
**E** the five discussion questions; **F** the five model answers.

Two things about that last pair. The models are **`summary` blocks rather than
`note` bodies**, because only `summary` carries a 🔊 — at this level a model
answer is there to be heard and shadowed, not only read. And they sit in a part
of their own, after the questions rather than beside them, because the `lead`
above them asks him to answer first: a model read before you have tried is a
script, and a model read after you have tried is feedback.

**There is no `fix` block here either.** Session 1's PDF had a two-column table
with his own sentences on the left; this one opens straight at *Polished
Version*, so the original wording is already gone. Nothing was reconstructed
from the polished text — a sentence Lewis wrote is not a sentence Ken said.

**Session 4 (3 September 2026)** is the other half of the same conversation:
the film sent them back to Homer's poem. Nine ideas — resilience, intelligence
over strength, pride arriving just after the victory, the Sirens as short-term
pleasure against a long-term goal, Calypso's offer refused, choices and
consequences, leadership, adaptability, and Penelope's twenty years — then the
handout's own framework, *Goal → Temptation → Choice → Consequence → Growth*,
with a `match` set pairing each episode to the idea it carries. Part C is
thirty-one phrase cards in four sets and a gap-fill; Part D the talking.

It could have been parts G–J of session 3 and is a separate session instead,
because session 3 already runs A–F and a review page is more use when the
contents list names the two subjects separately. The two share a date, and a
`link` block at the top of session 4 points back at `#s3` — the first `link` in
this repo aimed at an in-page anchor rather than another page. That is safe
here: the renderer's `hashchange` handler unfolds the target session and scrolls
to it, so the destination is never a closed heading.

The `contrast` runs *The instinct* against *The harder move* — "I need him to
admit I was right" against "I was right, and I do not need the last word";
"Can I do this?" against "What might happen if I do this?"; "Just be yourself"
against "Know who you are, and learn how to adapt to the situation". Those three
are the poem's argument in the form Ken can actually use on a Tuesday.

**The source needs one rule that no other notebook has needed.** Lewis's
write-up opens with a table of Ken's original sentences beside a **ChatGPT
rewrite** of them, and it points out that the rewrite still contains mistakes of
its own. The left-hand column is Ken's English, so it is `fix` material and is
used as such. The rewrite is not, so its leftovers — `go to gym`, `stayed
focus`, `everyday` — go into a `contrast` block labelled **The rewrite** against
**Natural English** instead. Putting them in `fix` would credit Ken with
sentences a machine wrote for him, and the whole value of that block is that
every line in it was really said. The separation is written into the file, for
any later session where a rewriting tool is part of the source.

## Mia's Notebook — young adult, one-to-one, kept over time

The tenth notebook, copied from
[Ken's](#kens-notebook--college-student-one-to-one-kept-over-time) with the
`mia.` localStorage prefix. Mia is a young adult who works in a plastic surgery
clinic, so the register sits between Ken's and the working-adult pages: the
examples come from a job actually under way — consultations, aftercare, the
front desk, clients with expectations to manage — but a job early in a career.
That is written into the header comment of
[`public/mia/content.js`](public/mia/content.js).

### Who gets named here

Lewis chose these when asked, and they are written as rules because every
session's sources run into them again. The same shape as
[Winkle's](#who-gets-named-across-all-five):

- **Mia is named.** Her name stays, as on the other notebooks.
- **Her workplace never is.** The clinic, its doctors and its address appear
  nowhere, and a source that names it becomes "the clinic". Two more lines are
  in the file header.
- **Nobody who could be a real patient is identifiable.** A case she describes
  stays "a client", with no name, no date and no clinic. This is the strictest
  of the three: she is describing other people's medical treatment to practise
  English, and they did not agree to appear anywhere.
- **A third person is never named** — the rule Winkle's pages state in full.
  Here it covers the doctors she works with as well as the clients.

One rule that is not about names but belongs beside them: **the treatment
language is recorded as language, not vouched for as medicine.** That is the
line Ken's session 2 drew — a `note` above the treatment phrase cards saying
so in both languages, and examples that say *can help* and *may* rather than
*will*.

**Session 1 (12 September 2026)** came from two sources, treated differently. A
bilingual PDF, *Mia's Session Review｜課堂回顧*, written up after the lesson in
seven titled sections, became **Part B**: seven numbered `summary` blocks, with
a `contrast` of *Worker mindset* against *Ownership mindset* and another of *A
wish* against *An action*. A corrections write-up pasted into chat, drawn from
the Zoom transcript, supplied **Part A**: twenty-three of her own sentences in
**four `fix` blocks grouped by the kind of mistake** — verbs and tenses; the
small words; countable nouns; sentences thought in Chinese — rather than one
long list, because the kind is what she can learn. Its chunk tables became
**Part C**'s six phrase sets and a shadowing model; **D** is six patterns built
from things she tried to say; **E** is a ten-chunk `cards` audit, her three
priorities, a poll, five discussion questions and the speaking task.

Not every correction on the page is the write-up's. Where its suggested version
was itself off — *may still remain*, *I didn't expect myself to* — the page
uses a better one, and its item on *focus on the moment* is left out, because
that is natural English and `fix` holds mistakes. The file header records each
change.

**It is the only notebook with photographs.** A `photo` block was ported from
[Three Habits](#three-habits-that-build-wealth--adult-teacher-led) — `src`,
`alt`, the photographer in `by`, a `pos` for the crop — and four Pexels
pictures each open one section of Part B: patient records, a consultation, a
notebook being written in, hands knitting. They were chosen to the page's clinic
lines: no clinic's name, logo or signage in frame (a reception shot was passed
over for a logo on the wall), nothing graphic, nobody who could be taken for one
of her clients. Pexels asks for no attribution and the photographer is credited
under each picture anyway; print drops them.

## Winkle's pages — adult, one-to-one, a hub

`public/winkle/` — **Winkle's Learning Notes · Winkle 的學習筆記** — is a small hub for one
student, built the way
`/ielts-speaking/` is: `course.js` maps the pages, `hub.js` draws the contents
page, and one `render.js` and one `style.css` serve every sub-page. Like the
notebooks it is a standalone copy — the renderer began as
`/ielts-speaking/`'s with the course map removed, and nothing outside this
folder loads it.

```
public/winkle/
  index.html  hub.js  course.js     the contents page and its map
  render.js   style.css             shared by every sub-page
  interview/  index.html + content.js
  rpharma/    index.html + content.js
```

It began (15 Sep 2026) as a single page at `/winkle/` for one interview. On
15 Oct it became the hub, because three more kinds of work arrived at once:
the conference talk, the new job, and a second company's screening call. **The
`/winkle/` URL that was given to the student still works** — it is now the
contents page rather than the interview, which is why the split was made this
way rather than by renaming.

All five pages are built.

### Who gets named, across all five

Settled case by case, but the cases have turned into a rule worth stating
once, because every new page runs into it:

- **Winkle is named.** No surname.
- **His own employers are named** — the current one in the self-introduction,
  the earlier ones in the submissions answer — because those are sentences he
  will actually say out loud. Lewis was asked about the current employer
  separately and chose to keep it.
- **A company he is applying to is named only when he says so.** It was
  refused for the UK role and allowed for CIMS, whose products are public.
- **A third person is never named.** The CIMS handout names the Software
  Development manager who ran the screening call; the page calls him "the
  Software Development manager". He is a private individual at another
  company, he is not the one being taught, and naming him puts him on a page
  that gets handed around for no benefit to the lesson. Same instinct as
  [Mia's clinic](#who-gets-named-here). If a future handout names an
  interviewer, a colleague or a referee, strip it the same way.

Everything under `/winkle/` is `noindex` regardless, but that is a weak
protection — the link is handed to people — so these decisions are made as if
the pages were public.

**Two decisions elsewhere that an audit keeps re-raising, and that Lewis has
settled — leave them alone:**

- `/confidence-talk/` is **not** `noindex` and its cover links to
  *Jill's English Notebook · Jill 的英文筆記* by name, which puts a
  ten-to-twelve-year-old's first name on an indexable page while her own
  notebook is hidden. Raised 22 Oct 2026; **he chose to keep it as it is.**
- `/campaign-speech/` names the candidate **in full**, twice, and is not
  `noindex`. Deliberate: the speech was delivered in public by a declared
  candidate, his candidacy and the chapter are public facts, and the text is
  reproduced word for word — changing the name would stop it being what he
  said. **Kept.**
- `/business-clarity/lesson-two/` carries a lot about Lulu's primary-school-age
  son — the kind of school, the piano, the baking, feeling different in an
  English class. He is never named and nothing locates him; the type of school
  is as specific as it gets. **Kept**, because that is what the lesson was
  about. The standing rule for future sessions is in that file's header.
- The grammar book drills use real students' first names as sentence subjects
  — *Anita can go to class*, *Lulu is smart*, *Ken and Lisa are absent*,
  *Anna is in Rome* — on pages that are not `noindex`. They are invented
  sentences that say nothing about a real person, so they are not covered by
  the third-person rule. Raised the same day; **he chose to keep them.**

### CIMS Global — `cims/`

A record of a screening call in the first week of October 2026, kept because
most of it outlives that call: the expectation statement, the answer for "the
openings are junior", the Git answer and the three sentences that close a
conversation yourself all work at the next one.

The page's own judgement, worth keeping: the invitation said *discuss
potential opportunities that may be a good fit*, which at a small company is
an invitation to define the role rather than fill one — so the order is ask
first, then state, and the level comes last as a consequence of the ability,
never as the opening demand.

**The company is named; the manager who ran the call is not.** Its products
are public and the hub already carried the name, but a private individual at
another company adds nothing the page needs. Winkle's own thirteen-question
review guide is not on the page either, so the five edits to it are written to
stand on their own.

### Winkle's Interview Prep — `interview/`

One page for one interview: a Statistical Programming Manager in Taipei
applying for a Senior Principal Statistical Programmer role in the UK. It is
the page form of Lewis's ten-session interview course. Now **a record of that
process** — he took a job elsewhere — but it is still where the story bank and
the answers live.

| Step | What it carries |
| --- | --- |
| 1 | The four areas the interview will lean on and their weighting (from Winkle's own notes), what he has heard about how the team works, and the advertisement's own phrases |
| 2 | The one-minute self-introduction in Lewis's cadence notation, with ▶ that performs it |
| 3 | The message underneath: needing a job against having something to bring, the six-month answer, negative into positive, the interview mindset, the AI practice method |
| 4 | Answer first — a circling answer against the headline-first version |
| 5 | The story bank: eleven stories, five written, six dashed and waiting for him |
| 6–9 | Conflict, explaining a study, global submissions, beyond SAS |
| 10 | The awkward questions — why you left (with its three taboos and its open evidence gap), why the UK, the IC move, salary, visa, family |
| 11 | Buying time, admitting a gap, pushback, and asking for a repeat once |
| 12 | Thirty-five terms, with how a UK team says them |
| 13 | Questions to ask them, the close, the follow-up email |
| 14 | The cold-question drill |

### Design notes

- **One page, two uses.** Lewis drives it in the lesson; Winkle rehearses at
  home. Same adult house rules — English leads, Chinese behind 中, nothing
  scored or saved — but the page carries the self-study half itself.
- **The drill owns no questions.** It takes every `qa` card on the page, so a
  question added anywhere is in the drill. The question is spoken in a British
  voice and its text stays hidden, because that is how it arrives on a call;
  the clock starts when the question *finishes*, since the silence after it is
  what is being practised. It never repeats until the pile is empty.
- **A recorder beside every clock**, because the course's homework is
  recording. MediaRecorder into a blob URL in the tab: never uploaded, a new
  take replaces the last, a reload deletes it.
- **The cadence block performs the notation** rather than only drawing it:
  `> ` speeds a line up, `< ` slows it, a trailing `/`, `//` or `///` becomes a
  real silence of increasing length, `**stars**` are stress.
- **`[square brackets]` are slots** — facts only Winkle has (the trial's
  endpoint, his conflict story, his notice period). They render as dashed gold
  boxes and are read as a pause by 🔊. A model answer containing one is labelled
  an answer frame. Do not fill them from general knowledge.
- **Story cards** show the questions a story answers and a 30-second version;
  the two-minute STAR version sits behind a reveal. A `pending` story keeps its
  place, dashed, with what he needs to bring. A question naming a story id that
  does not exist throws on load.
- **Step numbers are not in the content.** `render.js` assigns them from the
  order of the `steps` array, so inserting a step renumbers the page, the
  contents list and every "Step 4 ·" label together. Cross-references in the
  prose name a step ("see the communication step") rather than a number, so
  they survive an insertion — the third handout added a step in the middle and
  that is now the expected shape.
- The palette swaps the IELTS red for a clinical teal. There is no root
  `scroll-behavior: smooth`, and the contents list uses Jill's
  `keepLinkVisible()`, so it does not carry the notebooks' drifting bug.

### Naming and sources

**Winkle is named; the company he is applying to never is.** Lewis chose that.
His employers *do* appear — the current one inside the self-introduction, the
earlier ones inside the submissions answer — because those are the sentences he
will say. Lewis was asked about the current employer separately and chose to
keep it. The page is `noindex`. The file header of
[`public/winkle/interview/content.js`](public/winkle/interview/content.js) records which source
each part came from: Lewis's course plan and his two handouts (his English and
his Chinese, verbatim, not improved), Winkle's notes on the role (presented as
what he has heard, never as company policy), the job advertisement (short
phrases and the salary range), and the useR! 2026 poster script.

Handout III (面試準備（三）) is where the trial's own facts finally arrive, a
month after the page first asked for them: VV116 against Paxlovid, a
non-inferiority design and why, the population and the reason for it, time to
sustained clinical recovery analysed with Kaplan–Meier and Cox at a margin of
0.8 — and the answer to "how did you manage a team that size", kept
deliberately *out* of the two-minute answer and parked on its own follow-up
question. It also replaced the submissions answer with Winkle's own, stronger
version (six preparations, FDA and NMPA, and the BIMO deliverable the standard
tools could not generate), which is the one case so far where the student's
draft beat the coach's and the page took his wording.

The second handout, 面試準備（二）(16 Sep 2026), changed three things rather
than filling blanks: it **weights** the four areas (communication and the
scientific understanding of a study decide it; languages count least), it
supplies **two finished answers** — the out-of-role request and global
submissions — and it turned the submissions step from slots into fact, naming
Athenex (BIMO, ISS), Parexel (define.xml, reviewer's guides), IQVIA (UK,
France, US) and the regulator-requested RWE study, which became a tenth story.
Its estimand primer is the framing for the "was the method appropriate?"
follow-up.

### Winkle's Notebook — `notebook/`

The pages above were each built for one thing. This one grows: lessons are
weekly now and each produces a write-up, so an entry goes in per lesson. The
`drill` step always stays **last** and owns no questions — it collects every
`qa` card on the page, so a new entry lengthens the drill without being wired
into it, and step numbers come from array order so nothing is renumbered.

Entry one (21 Oct 2026) is the conversation with two VPs: seven findings with
an action each, the career direction and the sentence missing from it, the
question he couldn't answer turned into a method, his own English from the
recording, thirteen collocations, the six-step way to turn a note into
something sayable, the three cross-cultural habits (pointing at `newjob/`
rather than repeating it), and the homework.

Three block types arrived with it, all reusable:

- **`part`** — a divider inside one lesson. A page built from a single topic
  shouldn't use it.
- **`fix`** — what he said against what to say, with an optional *more
  specific* third line. The original is quiet rather than struck through: it
  was understood at the time, and the point is the better version.
- **`prompt`** — a copyable block, because a prompt you have to retype is a
  prompt nobody uses. Falls back to selecting the text when the clipboard is
  refused.

**The `fix` rule, inherited from the other notebooks:** only lines where the
slip is unmistakably his. The write-up this came from says it itself —
自動轉錄不清楚的部分，不當成學員的語言錯誤 — so sentences the lesson built
from what he *meant in Chinese* sit in a plain `sentences` block, which claims
nothing about what he said.

### Starting the new job — `newjob/`

He starts at a different pharma company on 2 November, working with a US team
on about four hours of overlap — Taiwan evening, their morning — with the rest
of the week in writing. Eleven steps: the two self-introductions, the
three-step progress update, checking you have understood, explaining technical
work to people who don't code, workload and boundaries, small talk, ten things
about working with a US team, the five-item checklist for before the second,
and eight situations wired into the drill.

**The register is the point.** Every other page in the folder was written to
get him hired; this one is for the first weeks of a job he already has. An
interview introduction argues that you should be hired; a colleague's
introduction tells people what to bring you. That is written into the file
header so later sessions don't drift back into the interview voice.

Nothing new was needed in the renderer — `facts`, `bank`, `upgrade`, `model`,
`practice` and `drill` already cover it, which is a good sign that the block
types have settled. The one page-specific judgement is that the ten
cross-cultural points are split across two steps: the five that actually cause
trouble, then reading them and being read.

### R/Pharma 2026 APAC — `rpharma/`

A conference talk, built from Lewis's coach notes the day before the lesson
that works on it. *Upstream Detection of CDISC Compliance Issues*: find CDISC
problems in the raw CRF data, before any SDTM exists.

| Step | What it carries |
| --- | --- |
| 1 | Six things only Winkle can confirm — slot length, whether the title can change, how to say "Jev", whether the LLMs really run locally, where the QR code points |
| 2 | The talk slide by slide: ten `slide` blocks |
| 3 | The pronunciation list, and the two habits to watch |
| 4 | The seven questions the audience is most likely to ask |
| 5 | A five-minute clock with a recorder, the daily homework, tomorrow's ninety-minute plan, and the Q&A drill |

Two block types were added to the shared renderer for it:

- **`slide`** — what the script says now (quiet and dashed: a draft, not an
  error), what to say instead, and why. `status` is `fix`, `tweak` or `keep`,
  so a slide needing one word does not read like one with a logic problem; a
  slide with no `before` is already right and only needs rehearsing.
- **`pron`** — word, respelling, and a one-line warning. No Chinese behind a
  tap here: it is read off a shared screen mid-rehearsal, so the note stays
  visible.

**The talk is Winkle's own research.** Every "as written" line is his, quoted;
every suggested line and every reason is Lewis's, in his words. The page says
so, and the open questions stay open — the slots in the Q&A answers and the
local-LLM line are his to settle, not the page's.

## 英文腦不是魔法 — an article, public

`public/english-brain/` — the first page here that is published writing rather
than teaching material: Lewis's own article of 29 Sep 2026, on whether
"thinking in English" exists, the three stages of skill acquisition,
myelination and its scientific limits, four practice methods with research
behind them, and what AI should and shouldn't do.

Two things set it apart from everything else in `public/`:

- **Chinese leads and there is no 中 chip.** The article is Chinese prose; the
  English appears only inside the examples. The same reasoning as Health
  Notes — here the English is not the lesson — so the body font is a Chinese
  sans, the measure is set for reading Chinese at length, and nothing is
  hidden behind a tap.
- **It is the only page meant to be found.** No `noindex`, a real description,
  Open Graph tags, the byline, the date and the references. Everything in
  `/winkle/` is the opposite.

The two controls earn their place: 🔊 on each English example, because it is
an English teacher's writing and the examples are meant to be heard, and a
copy button on the AI prompt, which exists to be used (it falls back to
selecting the text if the clipboard is refused).

Block types are article-shaped rather than lesson-shaped: `versions` sets the
Chinese against the word-for-word English and then the natural English —
the middle one dashed and quiet, so it reads as "not this" without being
called a mistake; `combine` is the three sentences and the answer; `flow` is
the closing chain; `quad` the four-line summary.

The student in the opening anecdote stays anonymous, as in the original.

**The canonical copy is on lewistoeic.com**, not here. Lewis's readers and his
search traffic are on that WordPress site, and he publishes full articles
there under 閱讀文章, so this page carries `rel="canonical"` pointing at the
post and shows a visible 本文刊登於 line. Two consequences worth remembering:
the canonical URL is in **two** places (the `<link>` in `index.html` and
`ARTICLE.origin.href` in `content.js`) and both must change together, and a
canonical pointing at a post that does not exist is worse than none — so the
WordPress post has to stay published at that slug.

[`tools/english-brain-to-wordpress.js`](tools/english-brain-to-wordpress.js)
generates that WordPress copy from `content.js`, as Gutenberg block markup to
be pasted into the editor's code view: paragraphs, headings, lists, the table
and the prompt arrive as native editable blocks, and the pieces WordPress has
no block for — the callouts, the three-version example, the combining box, the
closing chain — come through as custom-HTML blocks with inlined styles,
because themes and caching plugins strip `<style>` but leave inline styles.
Regenerate it rather than editing the output; the speak buttons are not
carried over, so the WordPress copy ends with a link to the interactive one.

## Health Notes — bilingual notes on the body and the mind

`public/health/` — the first page here that is not English teaching. A
reference Lewis reads about his own body, and a place to keep adding notes on
physical and mental health. It opens with the wearable-metrics write-up
(sleep, resting heart rate, HRV, VO₂ max, stress), rebuilt from the bilingual
PDF of the same name.

| Piece | What it does |
| --- | --- |
| 🇹🇼 雙語 / 中文 / EN | Three reading modes, remembered per device |
| 🗂 Contents | Every section, Chinese first; a drawer below 900 px |
| 1–8 | One numbered section per metric |
| ▦ Grid | The eight metrics and the question each one answers |
| ⚖ Fitness / Readiness | The closing distinction, as two cards |

### Design notes

- **Chinese leads.** Every other page on this site sets English first and puts
  Chinese under it, because there the English *is* the lesson. Here it is not:
  this is a reference about your own body, so the language Lewis thinks in gets
  full contrast in the sans face, and the English original sits beneath it in
  the serif. In **EN** mode that inverts and the English becomes the reading
  line. Chosen by him over hiding either language behind a tap.
- **Both languages are always in the DOM.** The mode is only a class on
  `<body>` (`lang-both` / `lang-zh` / `lang-en`) and the CSS decides what shows,
  so switching is instant, nothing re-renders, and find-in-page still finds a
  word in the language that is currently hidden.
- **A line that is the same in both languages prints once.** Plenty of pairs
  are identical — `Light Sleep ≠ Bad Sleep`, `VO₂ Max`, the `0.94 s → 1.07 s`
  chips, the metric names down the left of the grid. In 雙語 mode a duplicate
  reads as a bug, so `tagLangs()` compares the two halves and flags the English
  one `is-dup`; the CSS drops it in that mode only, and English-only mode still
  has it. Twelve of them on this page.
- **Each half carries its own `lang`.** `zh-Hant` on the Chinese, `en` on the
  English, so a screen reader switches voice mid-page instead of reading 深層
  睡眠 in an English one. The document's own `lang` follows the reading mode.
- **The arrow chains are content, not decoration.** `深層 → 淺層 → REM →
  再循環`, `肺部 → 心臟 → 血液循環 → 肌肉 → 粒線體` — the source uses them to
  say a sequence is the point, so they are a `flow` block of chips rather than
  a sentence with arrows typed into it, and each language gets its own row.
- **"Is 50 bpm good?" is struck through.** The two places the source replaces a
  bad question with a better one are a `contrast` block: the rejected question
  greyed and ruled out on the left, the one worth asking on the right. It is
  the argument of the whole document, so it is not left as prose.
- **The disclaimer is one quiet line at the foot**, not a banner. These are
  notes for reading your own numbers; the page says so once, where someone who
  has finished reading will see it, and does not nag on the way in.
- **No `scroll-behavior: smooth` on the root**, and the contents list is kept in
  view by its own `scrollTop` — never `scrollIntoView`, which scrolls the
  document whenever the list is not overflowing and makes the page drift. Same
  fix as Jill's notebook. The scroll handler holds the pending
  `requestAnimationFrame` id rather than a `ticking` boolean, because a frame
  requested just before the tab is hidden never runs, and a stuck flag would
  kill the highlighting for the rest of the visit.
- **Indexed by search engines** — Lewis's choice. No client, no name, no
  personal data on the page.

### Adding to it

`content.js` holds `SITE` and a `TOPICS` array. A new subject — sleep hygiene,
training load, anything on mental health — is another object pushed onto
`TOPICS` with `id`, `title`, `lead`, `updated` and its `sections`; the contents
list, the anchors and the numbering all follow from it. Sections are
`{ id, num, title, blocks }`, and `num` can be left out for a summary or a
closing section.

The block types are listed in the header comment of `content.js`: `p`, `lead`,
`list`, `key`, `flow`, `contrast`, `note`, `quote`, `table`, `cards`. Nothing
in `render.js` knows anything about health, so a new topic needs no code.

**Both halves of every pair must be filled in.** A missing `en` is not a
half-finished line, it is a hole for anyone reading in English only.


## Recording Practice — adult, one-to-one, read aloud

`/recording-practice/` is a page to read off while speaking. Each passage is
written out of something the student already said in a lesson, so the words are
hers before she reads them: what is being practised is delivery, not
composition. It grows the way the notebooks do — one entry appended to
`passages`, newest first.

Three things are set differently here because the text is spoken rather than
scanned:

- **The passage runs at 1.2rem with 1.95 leading in a 32em column** — wider
  leading than anywhere else in the repo. Reading aloud means the eye has to
  find the next line while the mouth is still finishing this one.
- **Every sentence has its own 🔊 as well as the paragraph.** They practise
  different things: a sentence gives a shape to copy, a paragraph a pace to
  hold.
- **Nothing moves while she is speaking.** No progress bar, no highlight that
  follows along — a page that animates during a take pulls the eye off the
  line.

The sentence speakers sit at 0.3 opacity rather than appearing on hover. The
first version revealed them on hover, which on a phone means never; `@media
(hover: none)` is not something to bet a control on either, since the emulator
reported no hover and still matched the hover rule. A control that cannot be
found is worse than one that is slightly visible.

**The teacher's own reading** goes in
[`public/recording-practice/audio/`](public/recording-practice/audio/) and
appears by itself — `<passage id>.m4a` for the whole take,
`<passage id>-1.m4a` for paragraph one, and so on. Nothing in `content.js` has
to be edited: the page asks the browser for each name and keeps the player
only where the file answered. That is the point of the convention, since the
person adding recordings is not going to edit a manifest.

`/phonics-handbook/` solves the same problem the other way, with a generated
`audio/manifest.js` and no failing requests. Here six requests — of which the
missing ones 404 quietly — buy "record it, name it, drop it in", which is the
right trade for this page and the wrong one for a page with two hundred words.

Those six are **HEAD** requests, and that detail was paid for. The first
version let the elements answer the question themselves with
`preload="metadata"`, which asks for a byte range — and a host that ignores
the range header answers with the whole file. GitHub Pages returns 206 and a
hundred bytes; Cloudflare Pages returns 200 and the entire 928 KB. On the
Cloudflare URL, the one students are given, six players meant about 5.7 MB
pulled down before the student had touched anything, on a phone. The elements
now preload nothing, a HEAD decides existence, and the audio is fetched when
she presses play.

It matters because of what the student said in August: the generated voice is
flat and has no intonation to copy. So the page now says both things — play
the teacher's reading for rhythm and intonation, use 🔊 for the sounds and the
word stress.

The page does not record. It asks for no microphone, stores no audio and
uploads nothing: the recording happens in whatever app the student already
uses and comes back on LINE. It carries `noindex` because the passage is her
own account of her employer's project.

The same passage also appears in
[Anita's notebook](#anitas-notebook--adult-one-to-one-kept-over-time) as a
`passage` block and in the 17 October sheet. Each points at the others, and
they are kept deliberately: the notebook is the record of a session, this is
the thing you read from.

## intuitive.css — one client's company livery

[`public/intuitive.css`](public/intuitive.css) sits in the same slot as
`editorial.css` — after a page's own stylesheet and after `type.css`, so its
tokens win — and exactly two pages link it: `/anny/` and `/anny/meeting/`.
Anny works at Intuitive and asked in November 2026 for her pages to look like
the company's own site, so the file holds what that site is once the
photography is taken away. It was measured off intuitive.com rather than
guessed: `#1C1C1F` ink, `#55575C` muted, `#8A8A90` faint, `#DCDCE0` hairline,
`#F2F3F5` the one grey ground, `#1C23BA` the one accent, white the page. Two
shapes — a 16px card and a pill control. Nothing else.

Three things are worth knowing before copying it anywhere:

- **It is not a house style.** It is one client's employer's livery on one
  client's pages. Nothing else in the repo should link it. The page borrows the
  visual language and deliberately carries none of the company's marks: a
  private prep page that looked like official company material would be a
  different thing from a page that looks nice.
- **No webfont, and that is the point.** Their display face is BrownPro, which
  is not licensed for the web, so `--font-display` is the closest stack that
  needs no download. No page in this repo loads a webfont anyway, but here it
  carries real weight: Anny opens these in meeting rooms, and a page that needs
  a download to look right looks wrong exactly when it counts.
- **Sentence case is the whole trick.** That site sets no label in
  letter-spaced capitals — every eyebrow, kicker and section head is sentence
  case at normal tracking, in the accent. `house.css` sets the opposite for the
  whole family and is linked *after* this file, so the end of `intuitive.css`
  carries a short, closed list of `:root`-prefixed overrides to win it back. If
  a label on either page starts shouting again, `house.css` has grown a new one
  and it belongs on that list.

**One value is deliberately not theirs.** `--ink-faint` is `#6B6B73`, not the
site's own `#8A8A90`. Measured on these two pages, `#8A8A90` gave 3.4:1 on
white and 3.1:1 on the grey — under the 4.5:1 that text at these sizes needs,
and it was carrying real text: exercise instructions, the contents list, every
session date. Darkened until it passes on both grounds while still reading as
the tier below `--ink-soft`. Their own pages get away with it because they use
that grey for captions at larger sizes; these do not. Every text role on both
pages was checked against its *composited* background afterwards — the tools
panel is translucent, so a naive check reads the wrong ground and reports a
failure that is not there.

**Green survives, and only on the notebook.** Intuitive's palette has no green,
and the meeting guide has none: nothing there is right or wrong, so its states
are all the accent blue. The notebook marks answers, and the rule
`editorial.css` already set — in the same breath as dropping every other colour
— is that a correct answer stays green, because no amount of restraint should
make being right look like being wrong. So the two pages have **separate state
tokens**: `--good` is the green for a correct answer, `--here` is the blue for
the current thing — a running clock, a ticked box. They were one token before,
which is how "you are here" and "you are right" ended up the same colour.

## house.css — one interface for the family

`type.css` gives these pages one typeface, `editorial.css` gives most of them
one palette, `intuitive.css` gives Anny's two the company livery she asked for,
and [`public/house.css`](public/house.css) gives them all one
**interface**. It was worked out on `/anita/` in October 2026 and taken
site-wide once Lewis had looked at it. Thirty-six pages link it, last, after
their own stylesheet.

Two references, kept apart because they answer different questions. **Editorial
(HBR)** decides what is big and what is quiet: a display serif headline set
tight — `clamp(2.1rem, 4.6vw, 3.1rem)`, `line-height: 1.08`, `letter-spacing:
-.022em`, because display type needs less leading and less tracking than text
does — an all-caps eyebrow in the accent above it, a standfirst under it, and
hairlines where there used to be boxes. **Apple** decides how it behaves: the
bar is glass (`saturate(180%) blur(20px)` over a 72% ground, the saturation
boost doing real work — without it an accent-coloured kicker turns to ash as it
passes under), anything pressable is a pill in the system face, cards lift
instead of lighting up, and everything that moves uses one easing and one
duration.

Because it is linked last it beats every page's own stylesheet, which makes it
a blunt instrument. Four things are therefore deliberately left out:

- **body size and leading.** `/jill/` and `/riva-rex/` are set larger for ten-
  to twelve-year-olds, `/grammar/` smaller for a reference text. One body size
  would quietly undo all of it.
- **`--measure`.** The column is a per-page decision; pages that want the
  narrow editorial column set it themselves.
- **colour.** It names none. The accent is `var(--gold)` and the interactive
  face `var(--ink)`, so `/winkle/` comes out teal, `/jill/` green and
  `/ielts-speaking/` red, exactly as those pages intend.
- **the bar's layout.** `.bar` here is a skin — the glass, the border, the
  height — and sets no `display`, no `position` and no `gap`, because a bar
  with two controls and a bar with five want different ones. **Every page has
  to lay out its own.** This is the one omission that fails silently rather
  than visibly: without it the bar is a static block box with a fixed height,
  so its children stack into three lines, the last two spill over the page
  beneath, and it scrolls away instead of staying put. `/body-words/` shipped
  that way and went unnoticed for five commits, so it is worth grepping a new
  page for `^\.bar {` before calling it done. `/grammar-kids/` looks like it
  is missing one and is not — it links `/grammar/`'s whole stylesheet first.

Not linked by the three pages for seven- to ten-year-olds, for the same reason
they skip `type.css`. Everything else links it, section sub-pages included —
the eight under `/ielts-speaking/`, the three under `/business-journal/`, the
four `/business-clarity/` lesson sheets and `/winkle/`'s own — which also took
`type.css` at the same time, since a sheet a student opens from a section
should not be set in a different face from the section it came from.

Four pages stay outside because they have no stylesheet to attach anything to:
`/riva-rex-practice/`, `/junior-high-words/`, `/junior-high-grammar/` and
`/wealth-habits/` carry their CSS in an inline `<style>` block.

One trap, paid for once: a file path written inside the opening comment with a
star and a slash together ends the comment. It swallowed the `:root` block, and
every radius on every page computed to zero while `--pill` resolved to nothing.
The symptom looks like a specificity problem and is not one.

## Layout

```
public/                   Word Play — the site root
public/404.html           the site-wide not-found page
public/phonics/           Sound Lab, the phonics practice
public/phonics-handbook/  自然發音學習手冊, the interactive handbook
public/math/              Number Lab, the Grades 1–3 math practice
public/confidence-talk/   the 2026/07/11 class notes, ages 10–12
public/business-clarity/  the business worksheet
public/business-clarity/lesson-one/   one lesson's notes — the AI business
public/business-clarity/lesson-two/   one lesson's notes — parenting
public/business-clarity/lesson-three/ one lesson's notes — management
public/business-clarity/lesson-four/  one lesson's notes — the HR SaaS product
public/business-clarity/pitch/       the business introduction, three lengths
public/grammar/           Basic English Grammar — the hub and book.js
public/grammar/ch01/      one folder per chapter, a content file each
public/grammar/ch13/      Modals, Part 2 — the second chapter written
public/grammar/ch14/      Nouns and Modifiers — the third
public/grammar/ch15/      Making Comparisons — the fourth
public/grammar/verbs/     Irregular Verbs — the reference page, 64 verbs
public/grammar-kids/      Sentence Lab — the same course for 10–12, nine units
public/grammar-kids/unit01/  Am, Is, Are — all seven sections written
public/business-journal/  國際商業期刊導讀 — the hub, course.js and the shared renderer
public/business-journal/wealth-habits/  No. 1, Three Habits — content.js and img/
public/business-journal/better-day/     No. 2, Protocols for a Better Day — content.js and img/
public/business-journal/focus-sprint/   No. 3, Superhuman Focus — content.js and img/
public/business-journal/_template/      a reading that uses every block type
public/wealth-habits/     a redirect: the three-habits lesson's old URL
public/happy-sexy-millionaire/  the business-English reading lesson
public/campaign-speech/   the speech and election Q&A
public/toeic-grammar/     the TOEIC Part 5 & 6 practice
public/sentence-upgrades/ the 2026/07/25 homework review
public/sentence-upgrades/2026-10-17/  the 2026/10/17 set, with assessment and a recording passage
public/recording-practice/        passages to read aloud and record
public/robot-helper/      the 113 學年度 writing worksheet
public/exam-writing/      a redirect to learn/writing/ (moved 2026-11-10)
public/learn/             英文學習: the top page over the three below and writing/, and only them
public/learn/writing/     學測英文寫作: the 109–115 學測 essay survey
public/learn/writing/109/ 109 練習單: Lewis's paper worksheet, done on screen
public/learn/writing/110/ 110 練習單: the same pattern, written for the page
public/reading/           three high school texts, with his word tables
public/reading/vocab/     高中單字: 大考中心's list, Levels 1–2 so far
public/reading/junior-vocab/  國中單字: 教育部's 2,000 words
public/keep-speaking/     the practice page for the course handbook, five tabs
public/ielts-part3/       the IELTS Part 3 structure practice
public/intuitive.css      the Intuitive palette — Anny's two pages only
public/anny/              Anny's notebook — one entry per discussion
public/anny/meeting/      her co-planning guide for a team meeting — not a lesson
public/aaron/             Aaron's notebook — same machinery, its own sessions
public/aaron/book-club/   the four-book discussion guide, under that notebook
public/anita/             Anita's notebook — same machinery again, two sessions
public/nikky/             Nikky's notebook — the same, with the scroll fix in
public/nikky/notebook.js  its sessions — NOT content.js, see the note below
public/eason/             Eason's notebook — the same, for a teenager
public/anna/              Anna's notebook — the same again, for a young adult
public/ken/               Ken's notebook — the same, for a college student
public/mia/               Mia's notebook — the same, for a young adult at work
public/mia/img/           its four Pexels photographs
public/jill/              Jill's notebook — one entry per weekly lesson
public/junior-high/       國中英語精熟 — 單字 and 文法, one page, Grades 7–9
public/junior-high-words/    a redirect: the 單字 half's old URL
public/junior-high-grammar/  a redirect: the 文法 half's old URL
public/fab-english/       the plant word list — 288 words, eight themes
public/family-law/        家事法律英文 — 154 terms in nine themes, plus a Practice tab
public/landscape-portfolio/      the portfolio — filled in as the Ando study
public/landscape-portfolio/content.starter.js  the same page, emptied
public/landscape-portfolio/img/  4 Commons photographs, 12 SVG drawings, CREDITS.md
public/health/            Health Notes — bilingual notes, one topic per subject
public/vicky-course/      Vicky's 上課時間 & 學費說明 — schedule, fees, leave rule
public/course/            the same page for any student, drawn from the link's #hash
public/course/make/       Lewis's form that writes those links
make-icon.py              regenerates public/star-icon.png, the kids' home-screen star
tools/                    the scripts that turn a 講義 PDF into either of those
```

All twenty-six are plain HTML, CSS and JS with no build step.

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
word is `{ w, p, zh, ex, zhEx }` — headword, part of speech, Chinese gloss,
example sentence, its 中譯. Add `k` when the form used in the sentence differs
from the printed headword (`w: "Spec. / specification"`, `k: "spec"`).

The one rule: **`ex` must contain `w` (or `k`) verbatim, uninflected.** The
renderer uses that match three times — to bold the word on the card, to cut it
out for the 填空 gap, and to place the 拼字 input — so an inflected sentence
silently loses all three. The headword doubles as the word's **id**, which is
what a 記住了／還不熟 mark is stored against, so renaming one quietly drops the
learner's mark for it. Moving a word between themes is a cut and paste; the
quiz, the counts, the contents list and the A–Z view all follow. There is no question list to edit,
and no script in `tools/` for this page: the source was a plain two-column PDF
that `pypdf` reads correctly.

**Number Lab.** There is no question list to edit — every topic is a `make()`
in [`public/math/content.js`](public/math/content.js) that builds a question
each time it is called, and the numbers inside that one function are the
difficulty. Widening Grade 1's addition to twenty-five is one `rnd(1, 9)`.

A question is `{ ask, figure, answer, choices, hint, why }`. Leave `choices`
off and the number pad is used instead; the answer must then be something the
pad can type. `hint` points at the method, not the answer, and appears after
two wrong tries — after one in Grade 1. `why` is optional and Grade 1 only: a
recipe naming a reader in `WHY`, which turns the wrong number he typed into a
sentence about the method he used. Readers return `null` whenever the number
tells them nothing. The drawings — clocks, blocks,
arrays, fraction bars, coins, grid rectangles, number lines — are functions in
the same file; each returns an SVG string sized in its own units, and `svg()`
puts the width and height on it, without which it collapses to nothing.

The explanations are separate, in the `TEACH` block at the foot of the same
file — one array per topic id, hung onto the topics at the end so a generator
stays one job and the explanations can be read together, in order, as a
course. A step is `{ text, figure }`. The rules a new one should follow are written
above the block; the important one is that the reading level stays at Grade 1
even where the maths does not — nothing is read aloud, so a step that only
works said out loud does not work here.

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

**國際商業期刊導讀.** Each reading lives in its own
`public/business-journal/<id>/content.js` — the first is
[`wealth-habits/content.js`](public/business-journal/wealth-habits/content.js) —
one entry per step. Every string is an `en`/`zh` pair. The block types — quote,
summary, phrase cards, matching, gap fill, poll, cards, discussion, task, the
passage, model-answer checks and advice scale that came with No. 2, and the
multiple-choice quiz, numbered steps and titled summary points that came with
No. 3 — are listed at the top of
[`_template/content.js`](public/business-journal/_template/content.js), which
uses each once, and each is one function in the shared
[`render.js`](public/business-journal/render.js).

A gap sentence marks its blank with `___` and gives the index of the right
option in `answer`; a phrase card wants an `eg` sentence, because that is what
gets read aloud. A `photo` on the lesson or on any step adds a picture — give
it a `src`, an `alt`, the photographer in `by`, and a `pos` if the default
centre crop cuts the wrong thing. To add a reading from a different article,
copy `_template/` — nothing in the renderer knows about any one reading.

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

**Adding a question.** A `qa` block wants `n`, a bilingual title, `qEn`/`qZh`
arrays for the question, and an `items` array of `en`/`zh` pairs — one per
paragraph of the answer. Wrap a phrase in `**stars**` to bold it; the stars
never reach the speech synthesiser. If the answer does not exist yet, give the
block `pending: 1` and omit `items`. A section takes `noPlay: 1` to suppress
its section-wide ▶, and a `lead` for the italic standfirst under its heading.

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
and the October one in
[`public/sentence-upgrades/2026-10-17/content.js`](public/sentence-upgrades/2026-10-17/content.js),
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
[`public/learn/writing/content.js`](public/learn/writing/content.js), each part
naming its `kind` (`years`, `trends`, `types`, `essays`, `patterns`, `frames`,
`toolkit`, `method`), one builder each in
[`render.js`](public/learn/writing/render.js), and a throw on an unknown kind.
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

A transfer essay — a new topic written on an old year's skeleton — goes in the
`TRANSFER` const beside `ESSAYS`, deliberately outside it: 跨年共通模式 counts
out of the seven real years, and an eighth entry in `ESSAYS` would quietly
change every one of those numbers. It carries a `badge` instead of a `year`
and names its `base` essay by id, and it must match that essay sentence for
sentence — same paragraphs, same number of sentences in each — because the
compare switch prints the base sentence under each of its own. The renderer
throws on a mismatch rather than pairing sentence five with sentence six. Its
`patterns` list (the handout's 關鍵句型與用法) renders under 中文重點, and
the base essay gets a link down to it automatically.

A year's **練習單** is a folder (`learn/writing/109/`) with a small
`index.html` and a `sheet.js`; the renderer and styles are shared
(`learn/writing/practice.js`, `practice.css`) and the page loads
`../content.js` for the essay. Each sheet part names a `kind` — `warmup`,
`match`, `gaps`, `jobs`, `order`, `rewrite`, `cloze`, `transfer` — and an
unknown one throws. For another year: copy the folder, rewrite `sheet.js`
(the cloze text must spell that year's essay exactly; the skeleton needs one
row per sentence), and add an entry to `LESSON.practice` in `content.js`,
which is now a list matched by `year`.

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
rewrite the blocks. Put it at the **bottom**: the *array* is chronological even
though the page is not, and the renderer reverses a copy of it so the entry you
append is the one that shows first. `id` becomes the anchor, so keep it unique
and URL-safe. The block types are listed at the top of that file; eleven of the
thirteen are the same ones the other adult pages use, and `fix` and `contrast`
are the two this page added. Two of them take optional labels, and both default
to session 1's wording: `contrast` takes `coldEn`/`coldZh` and
`warmEn`/`warmZh` for when the columns are not a before and after, and `cards`
takes `haveEn`/`haveZh` and `needEn`/`needZh`, which matter whenever the list
being audited is not a list of people.

**Aaron's Notebook.** The same, in
[`public/aaron/content.js`](public/aaron/content.js). Its renderer is a copy of
Anny's, and what it added first — the optional `contrast` labels — has since
been backfilled into Anny's too, so the one block it still has alone is `link`. Changes that belong
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
<http://localhost:8000/business-journal/> for 國際商業期刊導讀,
<http://localhost:8000/happy-sexy-millionaire/> for the reading lesson,
<http://localhost:8000/campaign-speech/> for the speech,
<http://localhost:8000/toeic-grammar/> for the TOEIC practice,
<http://localhost:8000/sentence-upgrades/> and
<http://localhost:8000/sentence-upgrades/2026-10-17/> for the two homework reviews,
<http://localhost:8000/robot-helper/> for the writing worksheet,
<http://localhost:8000/learn/writing/> for the 學測 essay survey,
<http://localhost:8000/ielts-part3/> for the IELTS Part 3 practice,
<http://localhost:8000/junior-high/> for the 國中 words and grammar,
<http://localhost:8000/body-words/> for 身體的那些字, or
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
`/business-clarity/`, `/anny/`, `/aaron/`, `/anita/`, `/nikky/`, `/eason/`,
`/anna/`, `/ken/`, `/riva-rex/`, `/riva-rex-practice/`, `/jill/` and
`/fab-english/` —
carry `noindex, nofollow`, which keeps them out of search results; it does not make
the URL secret. Anything that must not be publishable should not go in
`public/` at all.

## Deployment

Pushing to `main` publishes to both, with no further steps:

- **GitHub Pages** — via [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
- **Cloudflare Pages** — via its GitHub integration (build command: none,
  output directory: `public`)

## Museum Trip — Grade 1, before a class field trip

`/museum-trip/` — a bilingual picture page for six- and seven-year-olds to
read with a grown-up before a class visit to 國立臺灣歷史博物館 in Tainan on
Friday 13 November 2026. No child, school or teacher is named on it, and it
is `noindex`.

Nineteen pages in seven chapters: getting ready (the building, the solar
"cloud wall", the pool), two 👍/👎 rules games (on the bus, in the museum —
moved up to second place at Lewis's request), the Story of Taiwan (the
permanent exhibition's seven units retold in five pages), the Children's
Hall, an I Spy list to remember, word cards and a picture quiz. The start screen carries one parents' reminder, at Lewis's
request: 記得讓孩子帶健保卡 (pack the child's NHI card).

### Design notes

- **Kids' house rules**: every English line can be heard — tap Listen or
  the line itself. **Nothing plays by itself** (Lewis, 2026-11-12): pages
  and quiz questions are not read aloud on arrival unless a grown-up ticks
  自動朗讀 in the 大人 panel (key `autoRead`, default off); only the reply
  to a child's own tap (right / think again) is spoken unasked; a wrong answer wobbles and says "think again", only
  the right one moves on; big targets, no timers.
- **The most natural voice on the device**, not a fixed one (2026-11-13; it
  had been Flo). Premium/Natural > Enhanced > ordinary, American women first
  (Ava, Zoe, Samantha …), Flo last, macOS novelty voices never. The 大人
  panel marks the pick ★ 建議 and tells parents how to download Ava.
- **Bilingual text, English voice only.** The Chinese is always shown, not
  hidden behind a tap, but it is never spoken: Lewis had the Chinese voice
  (美佳) taken out on 2026-11-12, the same day the page was built.
- **Facts come from the museum's own site**, read 12 Nov 2026; the sources are
  listed at the top of `content.js`. The official exhibition page names no
  individual objects, so the I Spy list only asks for things sure to be
  there (the wall, the pool, the public art, the Children's Hall).
- **Used before the trip, not at the museum.** The children won't have the
  page with them on the day (Lewis, 2026-11-12), so nothing asks them to tap
  things as they see them. An I Spy star means "I know to look for it"; the
  talk prompt asks the grown-up to find out afterwards which ones they found.
- **Real photos (2026-11-12)**: four freely licensed Wikimedia Commons
  photos in `public/museum-trip/photos/` (the whole museum, the front, the
  cloud wall with its English name, an Anping jar shot in the museum), on
  pages 1, 2, 4 and 10, each with a "Real photo · 真實照片" chip. They are
  CC BY-SA, so each carries a small credit and the 大人 panel lists the
  links; credits live in `PHOTOS` in `content.js`. Only use photos whose
  licence allows reuse — never the museum's own site or a Google image.
- **A YouTube video for grown-ups** (2026-11-12, Lewis's choice): "The ENTIRE
  History of Taiwan in 22 Minutes" closes the Story chapter, tagged 給大人看
  with a note to preview it. A thumbnail until tapped, then the
  youtube-nocookie player in place; turning the page removes it.
- **🏠 Home** (首頁, 2026-11-12) leads the chapter strip and brings back the
  start screen with its NHI-card reminder; "Let's go!" then starts at page 1.
- The 大人 button is faint on purpose. It holds visitor info, a talk-about-it
  note, voice/speed/sound-effect settings and a reset for the I Spy stars.
  `localStorage` keeps only the stars, the pages seen and those settings.

### Interaction design (redesign, 2026-11-12)

- **A start screen** with one big "Let's go!" button. Phones and iPads play
  no speech or sound before a touch, so without it the first page would sit
  silent.
- **Every page is one sheet**: a picture on a chapter-coloured stage, then
  the words. Each chapter has its own tint, so a child can tell where they
  are without reading. On a landscape iPad (≥ 760px) picture and words sit
  side by side and nothing scrolls.
- **The spoken word lights up** (speech-engine word boundaries). Browsers
  that send none fall back to lighting the whole line.
- **The orange Next arrow glows only when the page is done**: read aloud, or
  its game finished. On game pages it stays soft so it never competes with
  the green "Next question" button. It always works for a grown-up.
- Synthesised chimes (no audio files) for right / try again / star, off in
  the 大人 panel. Chapter chips get a ✓ once every page in them is seen.
  The last page is a "Museum Explorer" badge with the I Spy star count.
- Asset links carry `?v=N`; bump it on every change so a returning phone
  never pairs a new `index.html` with an old cached `app.js`.

## Vicky's course page — 上課時間 & 學費說明

`/vicky-course/` — the page Vicky Hung (an adult 1-on-1 client) reads before
paying: her goals, the Tuesday Zoom slot, the two course packages with their
優惠價, how to pay, and the leave rule. Built 2026-11-13 from the Notion page
「上課時間 & 學費說明 (Vicky Hung)」; one self-contained `index.html`, no
data file. `noindex`, unlisted, like every student page. Not to be confused
with her art-history decks, which live in their own repo.

- **The bank account is on the page**, as text with a 複製帳號 button —
  Notion has it as an image card. It was left off for a few hours on
  2026-11-13 because the repo is public; Lewis then asked for it back,
  knowing that. So his account details appearing in `public/` is his
  decision, not a leak to clean up.
- The leave-rule image in Notion is set as text. The per-hour figures under
  each price are the only thing not in the source, worked out from the
  prices.
- **Icons are Lewis's logo, kept round** (2026-11-13), not the site's star.
  The tab uses the shared `public/logo.png`. The home-screen icon and the
  link-preview image (`public/course/apple-touch-icon.png`, `share.png`, 600px,
  named in `og:image` on both pages) are his 512px lewistoeic.com logo — a
  copper circle — on opaque white. A first version filled the corners copper;
  LINE then showed a square and he asked for the circle. The logo's lettering
  is cut out and its corners are transparent, so it must be drawn over white:
  left transparent, LINE and iOS fill those parts grey or black.
- **The site-wide home-screen icon is now the round logo too** (2026-11-13,
  Lewis's request after seeing the star on his phone). `public/apple-touch-icon.png`
  is what iOS uses for every page that names no icon of its own — most of
  the site. The gold star moved to `public/star-icon.png` and is linked by
  name from the children's pages: Word Play (`/`), `/phonics/`,
  `/phonics-handbook/`, `/math/` and `/museum-trip/`. A new page for young
  children should link it the same way; a new adult page needs nothing.
- **`og:description` is fixed text on `/course/`**: a preview reader never
  gets the #hash, and otherwise quotes the hidden 「這個連結不完整」.

## Course pages from a form — `/course/` and `/course/make/`

Asked for 2026-11-13, straight after `/vicky-course/` was built by hand:
a form where Lewis types a student's name and class time and gets that page.

- **`/course/make/`** is the form: 學員姓名 and 上課時間 (required), 學員相關
  資訊 and 學習目標 (optional, one per line), 上課方式 (defaults to ZOOM 線上
  會議), the sentence above the plans, and any number of plans (時數, 原價,
  optional 優惠價, 期限說明). 「套用老學員優惠」 fills in what Vicky got: the
  June 2026 sentence and $16,000 / $28,000. A live preview sits beside it, and
  「編輯舊連結」 reads a link back into the form.
- **開始日期 / 結束日期** (optional, keys `s` and `e`, added 2026-11-13) use
  the phone's own date picker and show under 上課安排 with the weekday, as
  2026/12/01（二）. An end before the start blocks the link. Dates already
  in the form go straight into a note template's YYYY/MM/DD (start first,
  then end).
- **上課時數** (optional, key `h`, same day) shows under 上課安排 as
  「20 小時」 when it is a plain number, as typed otherwise; it also fills the
  recap template's `__ hours`. When 上課安排 has an odd number of boxes the
  last one runs full width.
- **給學員的話** (optional, key `w`) is a note at the top of the page, signed
  「— Lewis」 automatically: paragraphs split by a blank line, `**bold**`
  allowed, dates like 2026/03/07 set in the UI font. 「套用進度回顧範本」 fills in
  the note he wrote to Vicky on 2026-11-13 (the run-ons mended), with the
  student's first name and YYYY/MM/DD and __ left for the dates and hours;
  the link can't be copied while any of those placeholders are left in.
  「套用新學員範本」 (added the same day) is a welcome before the first class —
  written by Claude in the recap's voice from what the page promises (a
  course built round them, the 課前作業, LINE questions), with the first
  class's date as YYYY/MM/DD. 「新學員範本（中文）」 is the same welcome in
  Chinese (您, like the rest of the page); a Chinese note is set in the
  Chinese face automatically.
  The note is set in **Newsreader** with a handwritten 「— Lewis」 in
  **Caveat**, from Google Fonts — Lewis picked it from four on 2026-11-13,
  because the system serif came out heavy on his iPhone. These are the first
  web fonts on the site; everything else is still system type. Same on
  `/vicky-course/`.
- **iPhone, iPad, computer** (gone over 2026-11-13). `/vicky-course/` now
  links `course/course.css` instead of keeping its own copy, so the two never
  drift. Student pages: a navy jump bar (上課安排 · 學費說明 · 付款方式 · 請假規則 — full
  section names since 2026-11-13, an equal four-way row on phones) stays
  at the top — its links scroll by script and never set the #hash, because on
  `/course/` the hash *is* the student; 44px tap targets; the sides keep
  clear of the notch on a sideways iPhone; from 760px wide the column is
  roomier and the bank card sits beside the after-paying steps. The form: on
  a phone or upright iPad a bar at the bottom holds 預覽 and 複製連結, and
  預覽 opens the page full-screen; on a computer the preview fills the
  window's height beside the form, with a 手機 / 全寬 switch (手機 first, since
  students read it on phones); text boxes grow as he types.
- **Design pass** (2026-11-13, "as a top-tier web designer"): the refinements
  sit at the end of `course.css`. Section titles in ink with a copper bar;
  cards lifted by shadow; goals as a check list; a line icon per fact
  (`i-time`, `i-mode`, `i-start`, `i-end`, `i-hours`); plan cards show
  「省 $…」 and the plan alone cheapest per hour gets 「每小時最划算」 (worked
  out by `/course/`, written by hand on Vicky's page; no badge on a tie or a
  single plan); 🎁 split into its two benefits; the bank code on its own row;
  the after-paying text as three numbered steps (step 1 reworded to 「轉帳到
  Lewis 的帳戶」); leave-rule cases as green/amber tags; the jump bar marks the
  section on screen. The form's sections are numbered.
- **Short links** (2026-11-13, Lewis's choice over plain compression, which
  only took 1,400 characters to about 1,080). On Cloudflare, 複製連結 stores
  the page's data in KV and copies `/c/<7-letter code>` instead. Code in
  `functions/` (Cloudflare Pages Functions; GitHub Pages ignores it):
  `functions/_course.js` explains the KV keys; `POST /api/c` makes or updates
  a link, `GET /api/c/<code>` reads one back for 編輯舊連結, and `/c/<code>`
  redirects to `/course/#d=…`, so the page itself is unchanged. KV namespace
  `english-exercises-course-links` (id `f5851bc1b4134e6290701d5e17ac319a`),
  bound as `COURSE` on the Pages project through the API, not a wrangler.toml.
  - **Passcode:** making or changing a link needs it. Lewis sets it himself
    the first time he presses 複製連結 (at least 6 characters); KV `auth`
    keeps a salted hash, never the passcode, and his browser remembers it.
    If he forgets it, deleting the KV key `auth` lets him set a new one.
  - **Updating:** a link loaded back from `/c/…`, or just made, is updated in
    place on the next copy, so the student's old link shows the change.
    Changing the student's name unticks that, so one student's link can never
    be overwritten with another's. 清空表單 starts a fresh one.
  - **Fallback:** where the API is missing (GitHub Pages, the plain local
    server) or unreachable, the long link is copied, as before.
  - iPhone Safari only lets a page copy text inside the tap, and the code
    arrives a moment later, so the copy goes through a `ClipboardItem` that
    holds a promise. The in-app browser pane refuses every clipboard write;
    test copying in Chrome.
  - Local test: `journal-desk/node_modules/.bin/wrangler pages dev public
    --port 8796 --kv COURSE` from the repo root (local KV, separate from the
    live one).
- **`/course/`** holds no student. The form writes everything into the link as
  `#d=<base64url JSON>` (format documented at the top of
  `public/course/index.html`), so making a page for a new student needs **no
  commit and no deploy**, and no student's details end up in this public repo
  or in server logs — a hash is never sent to the server.
- Anyone can hand-craft a link, so the page sets every value with
  `textContent` and takes no link targets from the hash. A missing or broken
  hash shows 「這個連結不完整」.
- The fixed text — the 💡 and 🎁 notes, 付款方式, 請假規則 — is Vicky's page's,
  in the page itself. Change it there and every student's link changes with
  it. The bank card is part of that fixed text, the same for every student.
- The style is `public/course/course.css`, copied from `/vicky-course/`.
  Vicky's page was left as it is because its URL has already gone out.
