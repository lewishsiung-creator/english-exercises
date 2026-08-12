/* A WORKED EXAMPLE — Awaji Yumebutai, Tadao Ando, 2000.

   This is the portfolio template filled in, so you can see what a finished one
   looks like before you write your own. It is a *case study*: the landscape is
   Tadao Ando's, not the author's, and the file says so on the cover, in every
   specification list and again at the end. Presenting someone else's built
   work as your own design is the one mistake a portfolio cannot survive — so
   the study names the architect everywhere, and the only thing claimed as the
   author's is the reading and the redrawing.

   ── To start your own ─────────────────────────────────────────────────
   `content.starter.js` in this folder is the empty template, with notes at the
   top explaining what to write in each part. Copy it over this file:

       cp content.starter.js content.js

   ── What to steal from this example ───────────────────────────────────
   1. Every description is three paragraphs doing three different jobs — the
      site, the problem, the move. Read the three in Part 02 and you have the
      shape for any project you will ever write up.
   2. The moves are verbs: cut, stepped, flooded, laid, turned. Not "the design
      features a stepped garden".
   3. One number per paragraph where there is one to give — 100 beds, 4.5 m,
      a million shells. A number is evidence; an adjective is not.
   4. Where the sources disagree, the study says so rather than picking the
      figure it likes. See the "A note on the figures" block below. */

const PORTFOLIO = {

  /* A string here replaces the stock "sample content" banner. On this page the
     warning that matters is not "unfinished" but "this design is not mine". */
  sample: 'Worked example — a study of Tadao Ando\'s Awaji Yumebutai (2000). ' +
          'The landscape is his; the reading and the twelve drawings are the ' +
          'author\'s; the four photographs are other people\'s and are credited ' +
          'where they appear. Start your own from content.starter.js.',

  /* Each entry in `projects` below is one part of a single work, not a
     separate project — so they are numbered Part 01, Part 02. Delete this line
     for an ordinary portfolio and they go back to being Projects. */
  unit: 'Part',

  /* ------------------------------------------------------------ the cover */

  name: 'Your Name',
  discipline: 'Landscape Architecture',
  kicker: 'Case Study · Awaji Yumebutai',
  tagline: 'Reading one landscape: a quarried hill, put back.',

  contact: [
    { k: 'Email', v: 'you@example.com', href: 'mailto:you@example.com' },
    { k: 'Phone', v: '+886 900 000 000' },
    { k: 'Based in', v: 'Taipei, Taiwan' },
    { k: 'Studio', v: 'Awaji Island, Hyōgo' },
  ],

  /* ----------------------------------------------------------- the project

     On an ordinary portfolio this section is your CV. On a study of one work
     it is the work itself — same three-column layout, different contents. The
     heading is set by `head`. */

  profile: {
    head: 'The project',

    statement: [
      'Awaji Yumebutai is a hillside on Awaji Island, in the Seto Inland Sea, ' +
      'that was quarried away and then given back. From the 1950s the slope was ' +
      'dug out for landfill to build in Osaka Bay — Port Island, and later ' +
      'Kansai International Airport stand partly on soil taken from here. What ' +
      'remained was a bare cut face facing the water.',

      'On 17 January 1995 the Great Hanshin earthquake struck with its epicentre ' +
      'close to the island, killing more than six thousand people. Tadao Ando\'s ' +
      'complex opened five years later, in March 2000, as the ground for Japan ' +
      'Flora 2000. I chose it because it is not a garden laid on a landscape but ' +
      'a landscape rebuilt from the cut, and because almost every decision in it ' +
      'is about level.',
    ],

    blocks: [
      {
        head: 'The work',
        items: [
          { term: 'Awaji Yumebutai 淡路夢舞台', when: 'Completed March 2000',
            note: 'Awaji Island, Hyōgo Prefecture, Japan' },
          { term: 'Tadao Ando Architect & Associates', when: 'Architect',
            note: 'Conference centre, hotel, chapel, greenhouse, open-air theatre ' +
                  'and the gardens studied here' },
          { term: 'Japan Flora 2000 淡路花博', when: 'Opening occasion',
            note: 'The complex opened as the site of the Awaji flower expo' },
        ],
      },
      {
        head: 'The ground it stands on',
        items: [
          { term: 'Quarried for landfill', when: '1950s — 1980s',
            note: 'Soil taken from this slope went into Osaka Bay reclamation, ' +
                  'including Port Island and Kansai International Airport' },
          { term: 'Great Hanshin earthquake', when: '17 January 1995',
            note: 'Epicentre near Awaji Island; more than 6,000 dead. The ' +
                  'Hundred Step Garden is a memorial to them' },
          { term: 'Replanted slope', when: 'from the 1990s',
            note: 'The cut face was reforested before and alongside construction' },
        ],
      },
      {
        head: 'What this study looks at',
        chips: ['Site history', 'Grading & terracing', 'Levels', 'Planting',
                'Water', 'Circulation', 'Materials', 'Memorial'],
      },
      {
        head: 'Sources',
        items: [
          { term: 'Awaji Yumebutai — official site', note: 'yumebutai.co.jp' },
          { term: 'Inexhibit — The Hundred Step Garden at Awaji Yumebutai',
            note: 'inexhibit.com, case study' },
          { term: 'Hyōgo Tourism / Oniwa garden archive',
            note: 'hyogo-tourism.jp · oniwa.garden — Japanese-language descriptions ' +
                  'of 百段苑 and 貝の浜' },
          { term: 'Photographs — Wikimedia Commons',
            note: 'All four by 663highland, CC BY 2.5, credited under each picture. ' +
                  'The drawings are mine; none of Ando\'s are reproduced.' },
        ],
      },
      {
        head: 'A note on the figures',
        items: [
          { term: 'Where sources disagree, both are given',
            note: 'The beds of the Hundred Step Garden are described as 4.5 m ' +
                  'square in Japanese sources and 5 m square in English ones; ' +
                  'published site areas range from 21.4 ha (213,930 m²) to about ' +
                  '28 ha depending on what is counted.' },
          { term: 'No figure is given for the replanting',
            note: 'Tree counts are quoted widely and inconsistently, so none is ' +
                  'stated here.' },
        ],
      },
    ],
  },

  /* -------------------------------------------------------------- the parts

     Four parts of one work. Each follows the same three-paragraph shape as an
     ordinary project write-up: the site, the problem, the move. */

  projects: [

    {
      id: 'the-cut-hill',
      name: 'The Cut Hill',
      type: 'Site & ground · The quarry face',
      lead: 'A hill that was carried away by lorry, and had to be given a shape to come back to.',

      specs: [
        { k: 'Design', v: 'Tadao Ando Architect & Associates' },
        { k: 'Completed', v: 'March 2000' },
        { k: 'Site area', v: '21.4 ha (published figures vary to ~28 ha)' },
        { k: 'Location', v: 'Awaji Island, Hyōgo, Japan' },
        { k: 'My role', v: 'Site study · plans and sections redrawn from published material' },
      ],

      text: [
        'The site is the seaward slope of a hill on the north-east coast of Awaji ' +
        'Island, looking across the Akashi Strait towards Kobe. For roughly thirty ' +
        'years from the 1950s it was a borrow pit: the hill was dug out and the ' +
        'soil barged across Osaka Bay to make new ground, first for Port Island ' +
        'and later for Kansai International Airport. What was left was a raw ' +
        'terraced cut, bare of soil and of everything that had grown on it.',

        'A cut face is not a site with a problem on it; it is the problem. There ' +
        'was no topsoil to plant into, no established drainage, and a slope angle ' +
        'left by excavation rather than by anything that wanted to stay there. ' +
        'Replacing the hill was never possible — the material is under an airport ' +
        'runway — so the question was what shape the remaining ground should take.',

        'Ando did not disguise the cut. He kept the terracing the quarry had left ' +
        'and made it deliberate: the whole complex is a set of level platforms ' +
        'stepping down the old face to the sea, with the buildings holding the ' +
        'terraces up rather than sitting on them. The slope was replanted so that ' +
        'the green came back around a geometry that stays visible, and the result ' +
        'reads as neither a restored hill nor a building on a hill, but as a piece ' +
        'of ground that admits what happened to it.',
      ],

      /* A photograph opens each part and the drawings follow. The photographs
         are other people's work and carry a `credit`, which the page prints
         under the picture and again in the lightbox — that is where CC BY
         wants attribution, not in a file nobody reading this will open. The
         drawings are mine and carry none. */
      images: [
        { file: 'yumebutai-view.jpg', kind: 'photo', wide: true,
          caption: 'The complex from above — terraces, conference centre and the strait',
          credit: 'Photograph 663highland · CC BY 2.5' },
        { file: 'yumebutai-masterplan.svg', kind: 'plan', wide: true,
          caption: 'Masterplan, schematic' },
        { file: 'yumebutai-location.svg', kind: 'diagram',
          caption: 'Osaka Bay — where the soil from this hill went' },
        { file: 'yumebutai-cut-profile.svg', kind: 'section',
          caption: 'The quarried profile against the hill it was cut from' },
      ],
    },

    {
      id: 'hyakudan-en',
      name: 'Hyakudan-en 百段苑',
      type: 'The Hundred Step Garden · Memorial planting',
      lead: 'One hundred square beds climbing the slope — one for each year of a century, and for the dead of one morning.',

      specs: [
        { k: 'Design', v: 'Tadao Ando Architect & Associates' },
        { k: 'Beds', v: '100, each about 4.5 m square' },
        { k: 'Planting', v: 'Chrysanthemum-family species, one hundred kinds' },
        { k: 'Commemorates', v: 'The Great Hanshin earthquake, 17 January 1995' },
        { k: 'My role', v: 'Study · schematic plan, section and one bed detail' },
      ],

      text: [
        'Hyakudan-en sits on the steepest part of the cut, high on the site and ' +
        'open to the sea. It is a grid of one hundred square planting beds, each ' +
        'about 4.5 m across, stepping up the slope in rows with stairs running ' +
        'between and beside them. Each bed is a walled box of soil with its own ' +
        'level, and every one is reachable on foot.',

        'The problem it answers is the one the whole site sets: a slope this steep, ' +
        'stripped of soil, holds neither water nor planting. Terracing is the ' +
        'ordinary agricultural answer, and the ordinary answer would have been ' +
        'long contour terraces following the hill. That would have given a ' +
        'quantity of planting and no way to stand inside it.',

        'Ando cut the terrace into a hundred equal squares instead, so the visitor ' +
        'climbs *through* the planting rather than looking at it from a path. The ' +
        'hundred beds stand for the hundred years turning from the twentieth ' +
        'century into the twenty-first, and the garden is a memorial to those ' +
        'killed in the earthquake — which is why it is a repeated unit and not a ' +
        'composition. Each bed carries a different species of the chrysanthemum ' +
        'family, so the grid stays identical in geometry and never twice the same ' +
        'in colour.',
      ],

      images: [
        { file: 'hyakudan-en-view.jpg', kind: 'photo', wide: true,
          caption: 'The hundred beds, stepping up the slope',
          credit: 'Photograph 663highland · CC BY 2.5' },
        { file: 'hyakudan-en-plan.svg', kind: 'plan', wide: true,
          caption: 'The grid of beds and the stairs between them, schematic' },
        { file: 'hyakudan-en-section.svg', kind: 'section',
          caption: 'Section up the slope through beds and stairs' },
        { file: 'hyakudan-en-bed.svg', kind: 'detail',
          caption: 'One bed — wall, soil depth and drainage, schematic' },
      ],
    },

    {
      id: 'kai-no-hama',
      name: 'Kai no Hama 貝の浜',
      type: 'The Shell Garden · Water and surface',
      lead: 'A shallow sheet of water floored with a million scallop shells thrown away by the fish trade.',

      specs: [
        { k: 'Design', v: 'Tadao Ando Architect & Associates' },
        { k: 'Surface', v: 'About one million scallop shells' },
        { k: 'Source of material', v: 'Waste from local seafood processing' },
        { k: 'Water', v: 'Shallow sheet, walkable edge' },
        { k: 'My role', v: 'Study of the surface · plan, water section, paving detail' },
      ],

      text: [
        'Below the terraces the ground flattens into a series of water courts, ' +
        'the largest of which is Kai no Hama, the shell beach. It is a broad, ' +
        'very shallow pool held between concrete edges, sitting where the slope ' +
        'meets the level ground and catching the light off the strait beyond it.',

        'A large flat water surface has one weakness: it is dead when the sun is ' +
        'not on it, and it reads as a lid rather than as a depth. The usual fix is ' +
        'to darken the base so it mirrors, which buys reflection at the cost of ' +
        'ever seeing into the water at all.',

        'Ando floored it instead with scallop shells — around a million of them, ' +
        'bought from the seafood processors who were throwing them away — so the ' +
        'bottom of the pool is pale, broken and slightly moving under a few ' +
        'centimetres of water. The surface reflects at a distance and dissolves ' +
        'into shells as you get close to it, and the material comes from the same ' +
        'sea the pool is looking at. It is the cheapest gesture on the site and ' +
        'the one people photograph.',
      ],

      images: [
        { file: 'kai-no-hama-view.jpg', kind: 'photo', wide: true,
          caption: 'Scallop shells under a few centimetres of water',
          credit: 'Photograph 663highland · CC BY 2.5' },
        { file: 'kai-no-hama-plan.svg', kind: 'plan', wide: true,
          caption: 'The water courts and their overflow edges, schematic' },
        { file: 'kai-no-hama-section.svg', kind: 'section',
          caption: 'Water depth, edge and overflow, schematic' },
        { file: 'kai-no-hama-detail.svg', kind: 'detail',
          caption: 'Shell bed over the concrete base, schematic' },
      ],
    },

    {
      id: 'the-descent',
      name: 'The Descent',
      type: 'Circulation · Route from the sea to the top',
      lead: 'The plan is unreadable and the route is not: you are never told where you are, only where to go next.',

      specs: [
        { k: 'Design', v: 'Tadao Ando Architect & Associates' },
        { k: 'Route', v: 'Sea level to the upper gardens, on foot' },
        { k: 'Devices', v: 'Terraces, ramps, stairs, an oval forum, water' },
        { k: 'Materials', v: 'In-situ concrete, water, planting' },
        { k: 'My role', v: 'Route study · long section and circulation diagram' },
      ],

      text: [
        'The complex is entered near the water and climbs. Between the bottom and ' +
        'the top gardens there are terraces, long flights of stairs, ramps between ' +
        'buildings, an elliptical courtyard, and water running at more than one ' +
        'level — an open-air theatre and a chapel sit off the route rather than on ' +
        'it. Almost none of it is visible from anywhere else in it.',

        'Sites like this usually take one of two forms: a single grand axis that ' +
        'shows you the whole thing at once and leaves nothing to find, or a ' +
        'picturesque wander that has no shape at all. Neither suits a hill that ' +
        'has to be climbed, because a climb needs to be broken into lengths a ' +
        'person will agree to.',

        'Ando cut the route into a sequence of enclosed pieces, each one aimed at ' +
        'a single thing — a stair, a wall, a sheet of water, a gap with the sea in ' +
        'it. You cannot see the top from the bottom and you are rarely given the ' +
        'plan, so the climb arrives in instalments and the sea appears three or ' +
        'four times as a reward rather than continuously as a view. Getting lost ' +
        'is a fair criticism of the place and is clearly also the intention.',
      ],

      /* The stair photograph is captioned for what it actually shows. Its
         Commons description places it in Hyakudan-en, not among the water
         courts, and a caption that quietly moves a photograph to where the
         argument wants it is the beginning of a dishonest portfolio. */
      images: [
        { file: 'yumebutai-stairs.jpg', kind: 'photo', wide: true,
          caption: 'Stair flights between the terraces of Hyakudan-en',
          credit: 'Photograph 663highland · CC BY 2.5' },
        { file: 'yumebutai-long-section.svg', kind: 'section', wide: true,
          caption: 'Long section from the sea to the upper gardens' },
        { file: 'yumebutai-route.svg', kind: 'diagram',
          caption: 'Circulation — the climb delivered in instalments' },
        { file: 'yumebutai-oval-forum.svg', kind: 'plan',
          caption: 'The oval forum, schematic plan' },
      ],
    },

  ],

  closing: {
    head: 'Credits',
    text: 'Awaji Yumebutai was designed by Tadao Ando Architect & Associates and ' +
          'completed in March 2000. Nothing in this study is my design. The ' +
          'drawings are my own, made to explain the landscape rather than traced ' +
          'from anyone else\'s; the four photographs are by 663highland and are ' +
          'used under CC BY 2.5, credited where they appear. The readings are ' +
          'mine and the sources are listed under "The project" above. Where ' +
          'published figures disagree, both are given.',
  },
};
