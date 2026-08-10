/* Landscape Architecture Portfolio — everything you edit is in this one file.

   Nothing here is code you have to understand. Every line is a label and a
   value: change the value, save, reload the page. The layout looks after
   itself.

   ── The four things to do ──────────────────────────────────────────────
   1. Put your name, your line of contact details and your profile at the top.
   2. Rewrite the four projects below, or delete the ones you do not need.
      Copy a whole { … } block to add a fifth.
   3. Drop your drawings into the img/ folder using the file names written in
      each `images` list. A picture appears the moment the file is there —
      until then the page draws a labelled placeholder in its place.
   4. Delete `sample: true` on the first line, which switches off the
      "sample text" banner.

   ── Writing the project descriptions ───────────────────────────────────
   This is the part that is actually hard, so the sample text is written to
   be copied as a shape rather than as words. Each description is three short
   paragraphs doing three different jobs:

     1. THE SITE      Where it is, what is there now, and who uses it.
                      Present tense. Facts, no opinions.
     2. THE PROBLEM   What is wrong, or what the brief asked for.
                      One clear problem beats three vague ones.
     3. WHAT YOU DID  Your design moves, and what each one achieves.
                      Past tense for the work, present tense for the result:
                      "I raised the path above the flood line, so the route
                      stays open in a storm."

   Two habits worth keeping:
   - Name your moves with verbs — raised, folded, opened, planted, narrowed,
     stitched. A portfolio full of "the design features…" says nothing.
   - Give one number per paragraph if you can (2.4 ha, 40 trees, 1:200).
     A number is evidence; an adjective is not.

   Captions are read far more often than the paragraphs, so write them as
   full labels: "Site plan, 1:500" or "Section through the rain garden,
   1:50", not "plan 1".

   ── Picture kinds ──────────────────────────────────────────────────────
   Each image names a `kind`, which only decides what the placeholder looks
   like before your file arrives. Use whichever fits:

     plan · section · render · diagram · detail · photo · model

   Add `wide: true` to make a picture span the full width — use it for the
   masterplan and the main render, and let everything else sit in pairs. */

const PORTFOLIO = {

  /* Delete this line when your own content is in. While it is here, a banner
     says the page is showing sample text — on screen and on the printed PDF,
     so an unfinished draft cannot go out by mistake. */
  sample: true,

  /* ------------------------------------------------------------ the cover */

  name: 'Your Name',
  discipline: 'Landscape Architecture',
  kicker: 'Selected Work · 2023 — 2026',
  tagline: 'Public space, planting, and water.',

  contact: [
    { k: 'Email', v: 'you@example.com', href: 'mailto:you@example.com' },
    { k: 'Phone', v: '+886 900 000 000' },
    { k: 'Based in', v: 'Taipei, Taiwan' },
    { k: 'Web', v: 'yourname.com', href: 'https://example.com' },
  ],

  /* ----------------------------------------------------------- the profile */

  profile: {
    /* Two short paragraphs at most. The first says what you do and what you
       are interested in; the second says what you are looking for. A reader
       gives this about fifteen seconds. */
    statement: [
      'I am a final-year landscape architecture student working mainly on public ' +
      'space in wet places — riverbanks, drainage corridors, and the ordinary ' +
      'streets that flood twice a year. I like projects where the planting has ' +
      'a job to do beyond looking well.',

      'I am looking for a first position in a practice that builds what it draws, ' +
      'and I am happy on site in the rain.',
    ],

    /* Each block is a heading and a list. Use `items` for dated entries and
       `chips` for short things that belong on one line. Reorder, rename or
       delete any block — three columns fill themselves. */
    blocks: [
      {
        head: 'Education',
        items: [
          { term: 'BSc Landscape Architecture', when: '2022 — 2026',
            note: 'Placeholder University · Final-year distinction in studio' },
          { term: 'Exchange semester, Urban Ecology', when: 'Spring 2025',
            note: 'Placeholder Technical University' },
        ],
      },
      {
        head: 'Experience',
        items: [
          { term: 'Design intern', when: 'Summer 2025',
            note: 'Placeholder Landscape Studio — planting plans and ' +
                  'construction details for a 1.2 ha park, two site visits a week' },
          { term: 'Survey assistant', when: '2024',
            note: 'Placeholder Ecology Consultants — tree condition surveys ' +
                  'and vegetation mapping across four sites' },
        ],
      },
      {
        head: 'Awards',
        items: [
          { term: 'Second place, Student Riverfront Competition', when: '2025',
            note: 'Placeholder City open call, 140 entries' },
          { term: 'Studio Prize for Technical Drawing', when: '2024' },
        ],
      },
      {
        head: 'Software',
        chips: ['AutoCAD', 'Rhino', 'SketchUp', 'QGIS', 'Lumion',
                'Photoshop', 'InDesign', 'Illustrator'],
      },
      {
        head: 'Skills',
        chips: ['Hand drawing', 'Physical models', 'Planting design',
                'Grading & levels', 'Site survey', 'Detail drawing'],
      },
      {
        head: 'Languages',
        items: [
          { term: 'Mandarin', note: 'Native' },
          { term: 'English', note: 'Professional working proficiency' },
          { term: 'Japanese', note: 'Conversational' },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------- the projects */

  projects: [

    {
      id: 'riverside-commons',
      name: 'Riverside Commons',
      type: 'Public park · Flood-adaptive riverfront',
      lead: 'A park that is allowed to flood, so the city behind it does not.',

      /* The spec list down the left of each project. Rename or add rows
         freely — they are just label-and-value pairs. */
      specs: [
        { k: 'Project type', v: 'Public park' },
        { k: 'Site area', v: '2.4 ha' },
        { k: 'Location', v: 'Placeholder City' },
        { k: 'Year', v: '2025' },
        { k: 'Role', v: 'Studio project · individual' },
      ],

      text: [
        'The site is a 600 m stretch of riverbank between a housing block and ' +
        'a four-lane road. It is currently a concrete embankment with a fence ' +
        'along the top, used as a shortcut by about 300 people a day and as a ' +
        'place to sit by nobody.',

        'The embankment holds an ordinary river back and fails against an ' +
        'unusual one: the last two floods overtopped it and put water into the ' +
        'ground floors behind. Raising the wall further would take the river ' +
        'out of sight of the neighbourhood entirely.',

        'I removed the wall and cut the bank back into three terraces, each set ' +
        'at a level the river reaches at a different frequency. The lowest is ' +
        'wet grassland underwater several times a winter; the middle carries the ' +
        'main path and floods perhaps once a year; the top holds the play area ' +
        'and the trees and stays dry. The park therefore loses a third of itself ' +
        'in a storm and gets it back a day later, and 40 new alders hold the ' +
        'bank while they do it.',
      ],

      images: [
        { file: 'riverside-masterplan.jpg', kind: 'plan', wide: true,
          caption: 'Masterplan, 1:500' },
        { file: 'riverside-concept.jpg', kind: 'diagram',
          caption: 'Concept — three levels, three flood frequencies' },
        { file: 'riverside-section.jpg', kind: 'section',
          caption: 'Section through the terraces, 1:200' },
        { file: 'riverside-render.jpg', kind: 'render', wide: true,
          caption: 'The middle terrace in summer, looking upstream' },
        { file: 'riverside-planting.jpg', kind: 'plan',
          caption: 'Planting plan, wet grassland, 1:200' },
        { file: 'riverside-model.jpg', kind: 'model',
          caption: 'Working model, 1:500, card and plaster' },
      ],
    },

    {
      id: 'stone-court',
      name: 'Stone Court',
      type: 'Campus courtyard · Shade and rainwater',
      lead: 'A hard courtyard that keeps its stone and loses its heat.',

      specs: [
        { k: 'Project type', v: 'Campus courtyard' },
        { k: 'Site area', v: '1,800 m²' },
        { k: 'Location', v: 'Placeholder University' },
        { k: 'Year', v: '2024' },
        { k: 'Role', v: 'Studio project · team of three' },
      ],

      text: [
        'The courtyard sits between three teaching buildings and is crossed by ' +
        'roughly 2,000 students a day between classes. It is paved edge to edge ' +
        'in granite, and it is empty from eleven in the morning until four in ' +
        'the afternoon because it reaches 38°C in June.',

        'The university wanted shade and did not want to lose the stone, which ' +
        'was laid in 1961 and is the only thing on the campus anyone is fond of.',

        'We lifted 18% of the paving — the strips that nobody walks on, mapped ' +
        'over a fortnight of counting — and turned each into a planted trough ' +
        'holding one tree and taking runoff from the roof beside it. The stone ' +
        'we removed came back as the seating edge around each trough. Nothing ' +
        'was imported and nothing was thrown away, and the crossing routes are ' +
        'exactly where they always were.',
      ],

      images: [
        { file: 'stone-court-plan.jpg', kind: 'plan', wide: true,
          caption: 'Courtyard plan, 1:200' },
        { file: 'stone-court-desire-lines.jpg', kind: 'diagram',
          caption: 'Two weeks of movement, mapped' },
        { file: 'stone-court-render.jpg', kind: 'render',
          caption: 'The north trough at midday, July' },
        { file: 'stone-court-detail.jpg', kind: 'detail',
          caption: 'Trough edge and drainage detail, 1:20' },
      ],
    },

    {
      id: 'long-garden',
      name: 'The Long Garden',
      type: 'Private garden · Planting design',
      lead: 'Nine metres wide, sixty long, and made to feel like neither.',

      specs: [
        { k: 'Project type', v: 'Private garden' },
        { k: 'Site area', v: '540 m²' },
        { k: 'Location', v: 'Placeholder Town' },
        { k: 'Year', v: '2024' },
        { k: 'Role', v: 'Internship project · planting plan and details' },
      ],

      text: [
        'A long back garden on clay, sloping half a metre away from the house, ' +
        'with a mature oak at the far end and a fence down each side. The clients ' +
        'are two people who garden and one dog who does not.',

        'The proportions do the damage: from the terrace you see the whole plot ' +
        'at once, and the eye runs straight to the fence at the end. Everything ' +
        'in between reads as a corridor.',

        'I broke the length into three rooms with two hedge lines set slightly ' +
        'off-centre, so the path bends and the end of the garden is never fully ' +
        'visible. Planting shifts as it goes: dry and silver near the terrace ' +
        'where the wall reflects heat, damp and green under the oak. Forty-one ' +
        'species, of which eleven do most of the work — repeated down the whole ' +
        'garden to hold it together.',
      ],

      images: [
        { file: 'long-garden-plan.jpg', kind: 'plan', wide: true,
          caption: 'Planting plan, 1:100' },
        { file: 'long-garden-render.jpg', kind: 'render',
          caption: 'The middle room in late summer' },
        { file: 'long-garden-section.jpg', kind: 'section',
          caption: 'Long section from terrace to oak, 1:100' },
        { file: 'long-garden-palette.jpg', kind: 'photo',
          caption: 'Planting palette — the eleven repeated species' },
      ],
    },

    {
      id: 'slow-street',
      name: 'Slow Street',
      type: 'Green infrastructure · Stormwater retrofit',
      lead: 'A 900 m street that drinks its own rain.',

      specs: [
        { k: 'Project type', v: 'Street retrofit' },
        { k: 'Length', v: '900 m corridor' },
        { k: 'Location', v: 'Placeholder City' },
        { k: 'Year', v: '2026' },
        { k: 'Role', v: 'Final-year thesis · individual' },
      ],

      text: [
        'A residential street of 1970s apartment blocks, 18 m wide, with parking ' +
        'on both sides and a gully every 30 m feeding a combined sewer. In heavy ' +
        'rain the sewer surcharges and the junction at the south end floods to ' +
        'ankle depth about four times a year.',

        'The city has no budget to enlarge the sewer and no appetite for removing ' +
        'parking. The rain therefore has to be dealt with in the street itself, ' +
        'in the space that is already there.',

        'I replaced every third parking bay with a rain garden set 300 mm below ' +
        'the road, kerb-cut at the upstream end so water runs in rather than past. ' +
        'Twenty-two gardens hold 210 m³ between them, which is the first 20 mm of ' +
        'a storm across the whole catchment — enough to take the peak off and stop ' +
        'the junction flooding. The street loses 34 of its 102 spaces and gains ' +
        'the trees it never had room for.',
      ],

      images: [
        { file: 'slow-street-corridor.jpg', kind: 'plan', wide: true,
          caption: 'Corridor plan, 1:1000' },
        { file: 'slow-street-catchment.jpg', kind: 'diagram',
          caption: 'Catchment and flow routes' },
        { file: 'slow-street-typical.jpg', kind: 'plan',
          caption: 'Typical rain garden bay, 1:50' },
        { file: 'slow-street-detail.jpg', kind: 'detail',
          caption: 'Kerb cut and soil build-up, 1:20' },
        { file: 'slow-street-render.jpg', kind: 'render', wide: true,
          caption: 'Looking north after rain' },
      ],
    },

  ],

  /* The last page. Delete the whole block if you would rather end on a
     project. */
  closing: {
    head: 'Thank you',
    text: 'The drawings in this portfolio are my own work. Studio projects are ' +
          'marked as such, and where a project was made in a team my own ' +
          'contribution is named in the specification.',
  },
};
