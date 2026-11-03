/**
 * Everything on the site lives in this file.
 *
 * Two lenses, one practice:
 *   lens: "designer" → cream world, didone type
 *   lens: "coder"    → black world, green mono, terminal cards
 *
 * Body blocks use `kind` to pick a treatment:
 *   prose | broke | list | steps | table | specs | note
 */

export const profile = {
  name: "Nimra Shahzad",
  roles: ["Frontend engineer", "Interaction designer", "Artist"],
  location: "Ireland",
  email: "nimra.shahzad240@gmail.com",
  github: "https://github.com/nimrashahzad240",
  instagram: "https://www.instagram.com/meraki_by_nimrashahzad/",
  tagline: "I make things I don't yet know how to make.",
  doors: { designer: "Enter the studio", coder: "Enter the build" },
};

export const lenses = {
  designer: {
    label: "Designer",
    headline: "Questions made physical.",
    blurb:
      "I arrived at UL as a frontend developer. Then I learnt Blender, Unity, electronics, research and fabrication because the ideas demanded it.",
  },
  coder: {
    label: "Coder",
    headline: "Interfaces made dependable.",
    blurb:
      "Five years of production frontend work taught me how to turn design intent into interfaces that survive real users, devices, browsers and release cycles.",
  },
};

export const about = {
  headline: "When I stopped trying to look comfortable.",
  text: [
    "I spent five years building commerce frontends for Canada Goose, Indigo, Deciem and Rent A Center. I was good at it, and I was bored of being only that.",
    "So I came to the University of Limerick for an MSc in Interaction and Experience Design, and spent the year deliberately doing things I was bad at. Blender. Unity. Soldering. Servo controllers. Running focus groups with people three times my age. Almost everything in the studio side of this site is a first attempt at something, and I have left the failures in on purpose, they are the part that taught me anything.",
    "The engineering did not go away. It is why my prototypes run on a real phone instead of living in a slide.",
  ],
  stats: [
    ["5 years", "Frontend engineering"],
    ["Distinction", "MSc Interaction & Experience Design"],
    ["AI + B2C", "Headless and composable commerce"],
  ],
  awards: [
    {
      title: "Branch Best Speaker",
      year: "2026",
      note: "ISCG × Deloitte × Accenture Case Competition. Given for presenting the case, which is a useful thing to find out you can do.",
      image: "media/award-iscg.jpg",
      alt: "Nimra holding her certificate with two of the organisers.",
    },
    {
      title: "University of Limerick Volunteer Award",
      year: "2026",
      note: "For research assistance and community work on the ARISE project at Mungret Park.",
      image: "media/award-cert.jpg",
      alt: "The ISCG certificate of achievement.",
    },
  ],
  extras: [
    {
      title: "Spreading Smiles and Tinkers",
      image: "media/extra-smiles.jpg",
      focus: "40% 24%",
      text: "A youth-led initiative empowering children through education and creative workshops. I ran the art therapy sessions.",
    },
    {
      title: "Formula Student Team Infinity",
      image: "media/extra-infinity.jpg",
      text: "Part of the Formula Student car team competing at FSUK, representing Pakistan on an international engineering platform.",
    },
    {
      title: "Google Developer Student Club",
      image: "media/extra-gdg.jpg",
      text: "Coding workshops, tech talks and hackathons at DevFest Islamabad, solving real problems with Google technologies.",
    },
  ],
};

export const meraki = {
  title: "Meraki",
  subtitle: "To do something with soul, creativity or love.",
  text: [
    "Meraki is a Greek word for putting a piece of yourself into your work. It is also the name I paint under.",
    "Two of these canvases hang in the Unity gallery on the studio side of this site. That is not a coincidence, when I needed art for a virtual room, I had my own.",
  ],
  instagram: "@meraki_by_nimrashahzad",
  instagramUrl: "https://www.instagram.com/meraki_by_nimrashahzad/",
  works: [
    { src: "media/art-saudade.jpg", title: "Saudade", note: "Also hangs in Pocket Gallery" },
    { src: "media/art-batman.jpg", title: "Batman on Fire", note: "Also hangs in Pocket Gallery" },
    { src: "media/art-dress.jpg", title: "The Yellow Door" },
    { src: "media/art-messi.jpg", title: "The Trophy" },
    { src: "media/art-roses.jpg", title: "Roses, in series" },
    { src: "media/art-calligraphy.jpg", title: "Calligraphy in red and gold" },
    { src: "media/art-cake.jpg", title: "Sugar, wall-mounted" },
    { src: "media/art-room.jpg", title: "Commission, in situ" },
  ],
};

export const projects = [
  /* ════════════════ DESIGNER ════════════════ */
  {
    id: "leiriu",
    lens: "designer",
    title: "Léiriú",
    year: "2026",
    kicker: "MSc thesis · Kinetic tactile installation",
    question: "See yourself. Pixel by pixel.",
    standfirst:
      "A portrait you can feel. Forty-eight servo-driven blocks push out of a frosted acrylic frame to build a low-resolution physical likeness of whoever stands in front of it. Press the button and it freezes, so you can read your own reflection with your hands.",
    media: {
      type: "image",
      src: "media/lei-lit.jpg",
      alt: "The finished Léiriú installation: a frosted acrylic frame of forty-eight blocks lit from behind in pink and blue, with a depth camera mounted above and an illuminated button to the side.",
      caption: "The finished piece. Depth camera above, button to the right, braille along the base.",
    },
    video: {
      src: "media/lei-leds.mp4",
      poster: "media/poster-leds.jpg",
      alt: "Testing the addressable LED strip along the base of the installation, cycling through colours.",
      caption: "Commissioning the LED strip, the serial monitor calling each colour as it lands",
    },
    meta: [
      ["Role", "Solo, research, design, electronics, fabrication, code"],
      ["Built with", "Python, Arduino Uno, 4 × PCA9685, 48 servos, depth camera"],
      ["Made from", "3D printed blocks, laser-cut MDF, hand-bent wire linkages"],
      ["Context", "MSc thesis within ARISE, University of Limerick"],
      ["Supervisor", "Dr Cristiano Storni"],
      ["Submitted", "August 2026"],
      ["Shown at", "DAWN, the MSc Interaction and Experience Design exhibition"],
    ],
    stack: ["Python", "Arduino", "PCA9685", "Depth sensing", "Servo systems", "Laser cutting", "3D printing", "Thematic analysis", "Co-design"],
    gallery: [
      { src: "media/lei-relief.jpg", alt: "Close view of the grid with blocks pushed out to different depths, forming a relief.", caption: "Forty-eight blocks at forty-eight depths. This is what a face looks like at this resolution" },
      { src: "media/lei-retracted.jpg", alt: "The same grid with most blocks pulled back flush into the frame.", caption: "Retracted. The grid is the resting state, and the shape has to be legible from it" },
      { src: "media/lei-servos.jpg", alt: "The open back of the installation showing four tiers of blue servos and a mass of wiring.", caption: "Behind the face: four tiers, twelve servos a tier, and every wire run by hand" },
      { src: "media/lei-linkage.jpg", alt: "Close view of servo horns with hand-bent copper wire linkages reaching up into block pockets.", caption: "The mechanism: a servo turns, a bent copper wire turns that rotation into a push" },
      { src: "media/lei-braille.jpg", alt: "The lit base of the installation engraved PAUSE TO FEEL YOUR REFLECTION with braille beneath it.", caption: "The invitation, engraved and in braille: pause to feel your reflection" },
      { src: "media/lei-poster.jpg", alt: "Exhibition poster for Léiriú at the DAWN show, reading A portrait you can feel.", caption: "The DAWN exhibition poster, see yourself, pixel by pixel" },
      { src: "media/leiriu-depth.jpg", alt: "A depth camera feed shown as a blue and orange heat map beside a Python console printing servo angles.", caption: "The depth feed downsampled to a grid, and the angles it sends to the servos" },
      { src: "media/leiriu-circuit.jpg", alt: "Circuit diagram showing an Arduino Uno, four PCA9685 boards, a power distributor and a stop button.", caption: "Four driver boards on one I2C bus, addressed 0x40 to 0x48" },
    ],
    body: [
      {
        kind: "prose",
        heading: "What it is, in plain terms",
        text: [
          "A frosted acrylic frame holding a six-by-eight grid of white blocks. A depth camera sits above them and watches whoever walks up. The blocks push out and pull back until the grid is holding a rough, chunky version of that person, a portrait made of depth instead of pixels.",
          "One illuminated button sits to the right. Press it and the grid freezes, so the face stops being a moving image and becomes an object. Then you can put your hands on it. Along the base, engraved into the acrylic and repeated in braille, is the instruction the whole piece is built around: **PAUSE TO FEEL YOUR REFLECTION**.",
          "An addressable LED strip runs the length of the base and up the frame, so the piece can hold a colour state as well as a shape.",
          "*Léiriú* is Irish for a rendering, a making-visible. The name is the whole brief.",
        ],
      },
      {
        kind: "specs",
        heading: "Three states, one button",
        items: [
          ["Wave", "Nobody is there. The blocks move in a slow ambient pattern, predictable on purpose"],
          ["Reflect", "Somebody is there. The depth camera drives the blocks into a live portrait"],
          ["Freeze", "Hold the shape still, so it can be explored by hand"],
        ],
      },
      {
        kind: "prose",
        heading: "The research it came out of",
        text: [
          "Léiriú is my MSc thesis, and it was developed inside ARISE, Activity and Recreation in an Inclusive Sensory Environment. ARISE is a collaboration between the Autism@UL Special Interest Group, Dóchas Midwest Autism Support and Limerick City and County Council, working towards an inclusive outdoor space at **Mungret Park**.",
          "I was part of the research group, not a visitor to it. I ran interviews, workshops and focus groups with autistic young people and adults, older people and family carers, carried out structured park observations, and coded the data. The thematic analysis of that material is what the installation is built on, every design decision below traces back to something a participant said.",
          "All of it ran under the ARISE ethics framework, approved by the UL Faculty of Education and Health Sciences research ethics committee, with participants anonymised by P-number.",
        ],
      },
      {
        kind: "prose",
        heading: "The question the research produced",
        text: [
          "**How might an interactive sensory installation create meaningful experiences for people with different sensory, physical and cognitive needs, while remaining a shared experience rather than a collection of separate accessible solutions?**",
          "Not a version for blind visitors and a version for everyone else. One surface, several honest ways in.",
        ],
      },
      {
        kind: "prose",
        heading: "The moment it stopped being about wayfinding",
        text: [
          "I started where most people start: navigation. How do you find your way through a park, what information exists, what gets in the way. I spent months there.",
          "Then, in an informal conversation rather than a scheduled interview, a PhD student described a blind relative who often wished she could know what her own face looked like in a mirror.",
          "That sentence moved the whole project. Not because it was a brief, but because it named something the formal research kept circling: inclusion is not about getting people through the door, it is about respecting how they already perceive the world. A tactile map at the entrance tells you how to get from A to B. It does not tell you the garden was designed with you in mind.",
        ],
      },
      {
        kind: "table",
        heading: "Five themes, and what each one forced",
        intro:
          "The same five things came up again and again across the interviews, workshops and observations. Each one turned into a constraint on the build.",
        columns: ["What participants kept saying", "What the installation had to do"],
        rows: [
          ["Choice and control matter more than features", "One illuminated button the visitor owns: wave, reflect, or freeze"],
          ["Sensory needs vary, and vary by day", "Movement, touch, sound and light as parallel routes, none compulsory"],
          ["Tell me what will happen before it happens", "A braille label under the grid, and a predictable, slow idle state"],
          ["Touch and movement are how some people actually engage", "A freeze state, so the surface can be read by hand"],
          ["Place-based meaning has to be explained, not assumed", "Symbolic forms the piece can spell out, rather than decoration"],
        ],
      },
      {
        kind: "steps",
        heading: "Four prototypes to get there",
        intro: "Research through design, which in practice means building the wrong thing four times on purpose.",
        items: [
          "**Cardboard.** Hand-cut blocks, no electronics, pushed by hand to test whether depth and shadow read as a face at all.",
          "**Six servos.** The first Z-shaped wire linkages, bent by hand, converting servo rotation into a straight push. MDF frame, generous spacing, everything accessible.",
          "**Sixteen servos.** Where the real problems arrived: spacing, guides and friction. Blocks bind if the guide is tight and wobble if it is loose.",
          "**Forty-eight servos.** Four tiers, twelve to a tier, plus the depth camera and the software that drives it.",
        ],
      },
      {
        kind: "specs",
        heading: "What is inside it",
        items: [
          ["Control", "Arduino Uno, with a stop/pause button on its own wiring"],
          ["Drivers", "Four PCA9685 boards on a shared I2C bus, addressed 0x40, 0x41, 0x42 and 0x48"],
          ["Actuators", "48 servos, 16 per board, via hand-bent Z-shaped wire linkages"],
          ["Sensing", "A depth camera, downsampled to a coarse grid"],
          ["Software", "`movement.py` on a controlling PC, talking to the Arduino over USB serial"],
          ["Power", "A 20A 5V supply through a fused power distribution block, 48 servos pull far more than a board will give"],
          ["Structure", "Laser-cut MDF tiers with finger joints, servo pockets, and 3D printed blocks"],
        ],
      },
      {
        kind: "broke",
        heading: "What I built and then abandoned",
        items: [
          "**Cosán na hAontachta.** A textured tactile path through the park, developed from a map an ARISE workshop participant drew. It was a good idea about navigation, and navigation stopped being the question.",
          "**The silicone mask.** Blocks pushing against a stretched silicone skin, so the face would be continuous rather than pixellated. It looked beautiful in my head. It fought me in every material test and I dropped it.",
          "**Six cameras' worth of ambition.** Repeatedly. Each prototype wanted features the next deadline removed.",
        ],
        after: [
          "My supervisor's most useful feedback was consistently the kind that meant pulling away from ideas I was attached to. That is most of what the four prototypes are: attachments, removed.",
        ],
      },
      {
        kind: "broke",
        heading: "What I will not claim",
        text: [
          "Léiriú is an interactive artwork and a research prototype. It is not an assistive device that has solved navigation or non-visual portraiture, and the thesis says so plainly.",
          "The contribution is narrower and more honest: it puts a programmable physical surface, live depth sensing, a pause-and-touch interaction, sound, light and simple symbolic form into one platform, and explains why each of those decisions is defensible. Whether a person can actually recognise a face from the relief is still to be tested in person. That is the next test, not a finding.",
        ],
      },
      {
        kind: "list",
        heading: "Where it goes next",
        items: [
          "More servos and a finer grid, so resolution stops being the limit",
          "A waterproof, publicly sited version that could live in the sensory garden at Mungret",
          "User testing with the people the research came from, in person, with their hands on it",
        ],
      },
    ],
  },

  {
    id: "solara",
    lens: "designer",
    title: "SOLARA",
    year: "2026",
    kicker: "Wearable energy · CS4126",
    question: "What if your outfit could power your light?",
    standfirst:
      "A modular dress tiled with solar hexagons. It charges while you walk, lights the room when you enter it, and when your body changes you swap a plate instead of buying a dress.",
    media: {
      type: "image",
      src: "media/sol-lit.jpg",
      alt: "The hexagon-tiled garment form standing in a dark room, lit from within in green and blue, with an Arduino on the desk beside it.",
      caption: "The prototype lit from inside, light escaping through the gaps between tiles",
    },
    video: {
      src: "media/solara.mp4",
      poster: "media/poster-solara.jpg",
      alt: "The SOLARA project video: problem, research, prototyping and the finished lit garment.",
      caption: "The full project video, problem, research, shape tests and the lit prototype",
    },
    meta: [
      ["Role", "Solo, research, 3D modelling, fabrication, electronics"],
      ["Built with", "Blender, Affinity Designer, laser cutter, 3D printer, Arduino"],
      ["Module", "CS4126, University of Limerick"],
      ["Status", "Working prototype"],
    ],
    stack: ["Blender", "Affinity Designer", "Laser cutting", "3D printing", "Arduino", "Material research", "Speculative product"],
    gallery: [
      { src: "media/sol-tests.jpg", alt: "A board of tile experiments: circles, octagons and hexagons in wood, card and printed plastic, tested on a bottle form.", caption: "The shape board: circles, octagons, hexagons, in wood, card and print" },
      { src: "media/sol-cuff.jpg", alt: "A 3D-printed blue hexagonal lattice cuff worn on a wrist.", caption: "A printed lattice cuff, a first test of how a rigid tile feels against skin" },
      { src: "media/sol-laying.jpg", alt: "Hundreds of laser-cut wooden hexagons being glued one by one onto black stretch fabric.", caption: "Laying tiles onto stretch fabric, one hexagon at a time" },
      { src: "media/sol-form.jpg", alt: "The tiled fabric wrapped onto a garment form.", caption: "Wrapped onto the form, where flat tiling meets a double-curved body" },
      { src: "media/sol-column.jpg", alt: "The tiled garment lit from within with green light.", caption: "Lit from inside, with addressable LEDs behind the tiles" },
      { src: "media/sol-brief.jpg", alt: "A slide titled The garment addresses this by design, showing snap-on modular plates and peel-off stickers.", caption: "Never discarded: snap on more as you grow, peel off and repaint to change the look" },
    ],
    body: [
      {
        kind: "prose",
        heading: "The insight the whole thing turns on",
        text: [
          "Almost every wearable-energy concept I found was trying to charge a phone. That is a small ambition for something you wear all day.",
          "**What if the energy powered the room instead?** If your dress turns the lights on as you walk into a space, you never flip a switch again. The garment stops being a battery accessory and becomes part of the building's infrastructure.",
          "The other half of the problem is the garment itself. Fashion accounts for 8–10% of global carbon emissions and around 2.1 billion tonnes of greenhouse gas a year, the second most polluting industry there is. A dress that generates power and is still thrown away after a season has solved nothing.",
        ],
      },
      {
        kind: "specs",
        heading: "How SOLARA answers the brief",
        items: [
          ["Reduces waste", "Peel off, repaint, swap stickers for a new look with no purchase. Snap on more plates as your body changes. Replace one tile, not the dress."],
          ["Generates energy", "Solar hex tiles harvest sunlight outdoors, walking, running, commuting is continuous charge"],
          ["Replaces lighting", "A PIR-activated LED light at a room's entry. No wall switch, no grid."],
          ["Sustainable materials", "Laser-cut wood, so no microplastic shedding. 3D-printed bioplastic, so no toxic dye. Velcro connectors, so no overseas fast-fashion shipping."],
        ],
      },
      {
        kind: "prose",
        heading: "The model, and how it became mine",
        text: [
          "To design plates I needed a body with real curvature, not a cylinder. I started from an abstract female torso sculpture I found on Sketchfab and brought it into Blender.",
          "What arrives from a download is somebody else's topology: the mesh came in as a multi-part sculpture with its own cuts, its own openings and a density I had no use for. Most of the work was in edit mode, stripping it back to the single form I actually wanted, closing what I did not need, and reshaping the surfaces I was going to tile so the curvature was mine rather than the original artist's.",
          "By the end the silhouette, the proportions and the openings were my decisions. The download was a starting block, not the result. That is what let me test layouts before cutting anything, because tiling a double-curved body is nothing like tiling a flat sheet.",
        ],
      },
      {
        kind: "steps",
        heading: "Finding the shape",
        intro:
          "I did not pick hexagons because they look good. I built a board of tests and let the geometry decide.",
        items: [
          "**Circles.** They tile with gaps you cannot close. The surface reads as scattered dots rather than a skin, and every gap is lost solar area.",
          "**Octagons.** The same problem wearing a different shape, the leftover gaps are square and the whole thing reads as a grid with holes in it.",
          "**Squares.** Perfectly fine on a flat panel. They fight every curve on a body, and they bind at the shoulder and the waist.",
          "**Hexagons.** The winner. They tile with no gaps at all, and because each tile meets its neighbours only on short edges, the sheet can bend in two directions at once without the tiles colliding.",
        ],
        after: [
          "Then I tested scale on the same board. Large hexagons carry more surface for a cell but stiffen the garment into armour; small ones drape properly and cost you area. I went small and accepted the trade, because a dress that will not move is not a dress.",
          "And material: laser-cut wood veneer, 3D-printed plate, cardboard mock-ups for the cheap iterations, and a printed hexagonal-lattice cuff worn on the wrist to find out what a rigid lattice actually feels like against skin for an hour.",
        ],
      },
      {
        kind: "prose",
        heading: "Building the first one",
        text: [
          "A bottle first, because it was the nearest thing to a torso and I was not going to waste material learning on the real form. Then the form itself.",
          "Hundreds of laser-cut wooden hexagons, glued on one at a time onto black stretch fabric. The fabric is the quiet decision in the whole build: it lets the tiles move relative to each other, so the sheet behaves like cloth rather than a shell, while still holding every tile in place.",
          "Addressable LEDs sit behind the tiles, driven by an Arduino, and the light comes out through the seams between plates rather than through them.",
        ],
      },
      {
        kind: "list",
        heading: "The research underneath it",
        items: [
          "*Hexagonal tessellation-based mechanical metamaterials*, Moghimimonfared, Spaggiari, Grasselli and Mizzi, which is where the geometry argument comes from",
          "*Mathematics meets the fashion industry on path to product innovation and sustainability*",
          "*Biocompatibility challenges in wearable health devices*, skin irritation and allergic reactions from materials held against skin",
          "*Biobased materials for skin-contact products*, from the POLYBIOSKIN project",
          "*Requirements, challenges and novel ideas for wearables on power supply and energy harvesting*",
          "*Design considerations for triboelectric energy harvesting in wearable devices*",
        ],
      },
      {
        kind: "broke",
        heading: "What is honestly not done",
        items: [
          "**The solar cells are not on it.** The tiles are the carrier and the geometry is solved; the generation is designed, not demonstrated. I have the literature, not my own measurements.",
          "**Biocompatibility is an open question.** The papers are full of warnings about rigid materials held against skin for hours. My printed cuff was a first touch test, not an answer.",
          "**The connectors are the weakest part.** Velcro works and it is not elegant. A modular garment lives or dies on its joint, and mine is the least resolved thing in the project.",
        ],
      },
      {
        kind: "prose",
        heading: "The line it comes down to",
        text: [
          "One garment. Indefinitely. Powered by the sun, lit by movement.",
        ],
      },
    ],
  },

  {
    id: "pocket-gallery",
    lens: "designer",
    title: "Pocket Gallery",
    year: "2026",
    kicker: "Virtual and Augmented Reality · CS4071",
    question: "Can a gallery fit in a pocket?",
    standfirst:
      "A dark concrete room you walk through on an iPhone, hung with my own paintings. Tap a painting and it tells you about itself. Tap the sculpture and it falls apart. There is a blank canvas at the back that says: create your own masterpiece.",
    media: {
      type: "video",
      src: "media/ar-gallery.mp4",
      poster: "media/poster-gallery.jpg",
      alt: "Walkthrough of a dark 3D gallery with spotlit paintings, a glowing block sculpture and a painting canvas.",
    },
    meta: [
      ["Role", "Solo"],
      ["Built with", "Unity, C#, Xcode"],
      ["Runs on", "iPhone 14 and above, plus a desktop build"],
      ["Module", "CS4071, University of Limerick"],
    ],
    stack: ["Unity", "C#", "Raycasting", "Runtime textures", "Lighting", "iOS build"],
    body: [
      {
        kind: "prose",
        heading: "Why a gallery",
        text: [
          "I have always loved galleries. Curated rooms, spotlights, the particular quiet of them. I had been thinking for a while about building one of my own, and this module was finally the excuse.",
          "The brief asked for a 3D experience in Unity using at least three advanced techniques from the course. I built a dark concrete room, hung my own paintings on the walls, gave each one its own light, put a glowing sculpture in the middle of the hall and a blank canvas on the back wall.",
          "I had never opened Unity before this.",
        ],
      },
      {
        kind: "prose",
        heading: "Starting from actual zero",
        text: [
          "The first thing I tried to build was a room. That sounds simple. I did not know what X, Y and Z meant, or how Unity moved an object through them. When I finally got four walls and a floor to stand up I was so pleased with myself that I stopped for the day.",
          "Then I found a dark concrete texture, applied it, and the room turned into somewhere you would actually walk into. That was the moment it stopped feeling like an assignment.",
        ],
      },
      {
        kind: "list",
        heading: "What you can do in it",
        items: [
          "**Tap a painting.** A panel fades in over the canvas with the title and a note about the piece, *Saudade*, inspired by a poem, a blooming story and a sun-drenched garden. A yellow button dismisses it. `OnMouseDown()` catches the hit, a script raises the UI, a button closes it.",
          "**Tap the sculpture.** The pink, cyan and white block form in the middle of the hall collapses one block at a time. A destroy-object mechanic dressed up as a sculpture having a moment.",
          "**Paint on the canvas.** Eight colour buttons under a blank canvas. `colorChange.cs` raycasts from the camera, writes pixels with `SetPixels()` in a nested loop for brush size, then calls `Apply()` so the stroke appears live. Default brush, 10 pixels.",
          "**Walk around.** WASD on desktop, on-screen buttons on iPhone, double-tap to stop, pinch to change the camera's field of view.",
        ],
      },
      {
        kind: "prose",
        heading: "Lighting, where I lost several evenings happily",
        text: [
          "A spotlight over every painting. An emissive panel acting as a ceiling lamp. Warm tones instead of hard white. Extra light running up the staircase. A sculpture that glows from inside.",
          "Once I understood how to place one light properly I immediately wanted ten more.",
        ],
      },
      {
        kind: "broke",
        heading: "What didn't work",
        items: [
          "**The staircase.** I built it because I wanted a second floor. It looks good. But every time I made the player actually walk up it, it fought with the swipe controls I had added for iOS. I wrestled with that far longer than it deserved, removed both, and left the stairs purely decorative. They are a beautiful lie.",
          "**Objects living in other dimensions.** I would place something, come back to check its coordinates, and find it somewhere else entirely.",
          "**The build pipeline.** I do not own a Mac. Every iOS build went: build on Windows, upload to OneDrive, download on a Mac, open Xcode, deploy to the phone. Getting from \"a basic room exists\" to \"it runs on my phone\" took days.",
        ],
      },
      {
        kind: "prose",
        heading: "What I learned",
        text: [
          "3D space, properly, by getting it wrong repeatedly. Raycasting and input handling. Writing to a texture at runtime. Lighting as atmosphere rather than illumination. Shipping one project to two very different targets.",
          "And scope control. The moment the canvas drawing worked I wanted brushes, spray paint and glitter. The deadline is the only reason this gallery has walls.",
        ],
      },
    ],
  },

  {
    id: "van-gogh",
    lens: "designer",
    title: "The Ghost of Van Gogh",
    year: "2025",
    kicker: "Digital Modelling and Animation · CS4151",
    question: "What would you build to say thank you?",
    standfirst:
      "Van Gogh's ghost sits at a piano in a Greek amphitheatre, playing to an audience of candles. As he plays, wilted yellow flowers straighten and come back to life across the cracked ground.",
    media: {
      type: "video",
      src: "media/vangogh.mp4",
      poster: "media/poster-vangogh.jpg",
      alt: "A candlelit amphitheatre at night with a glass figure playing a piano and yellow flowers growing across the ground.",
    },
    meta: [
      ["Role", "Solo"],
      ["Built with", "Blender, rendered in Eevee"],
      ["Modelled by me", "Amphitheatre, candles, flame rig, camera paths, flower system"],
      ["Module", "CS4151, University of Limerick"],
    ],
    stack: ["Blender", "Eevee", "Particle systems", "Emission shaders", "Bézier camera paths", "Vertex groups"],
    body: [
      {
        kind: "prose",
        heading: "Where it came from",
        text: [
          "I came across a piece called *Van Gogh* by Virginio Aiello during a late-night scroll, and the whole scene arrived at once: a ghost at a piano, an overwhelming number of candles, somewhere ancient and quiet.",
          "I have been obsessed with Vincent for a long time. Not in a textbook way, more that his colour choices make me stop and think. Every element here is doing something: the yellow flowers are rebirth, the ghost is dark glass with blue sparkle because his brilliance was mostly overlooked while he was alive, and the whole thing is a thank-you note for painting the world the way he did.",
          "I did not want to make something random just to tick boxes on an assignment sheet.",
        ],
      },
      {
        kind: "prose",
        heading: "I had never used Blender",
        text: [
          "Earlier that semester I modelled a cup in Maya to understand the fundamentals, then moved to Blender because it felt more intuitive for the kind of scene I wanted. Everything after that was learned while making this.",
          "I built the amphitheatre rings, the steps, the pillars, the granite, the cracked deserted-but-sacred floor, every candle mesh, the flame rig, the camera paths and the flower rebirth animation. The piano, the flower model, the rigged armature and some materials came from BlenderKit.",
        ],
      },
      {
        kind: "prose",
        heading: "Candles",
        text: [
          "Every candle is mine. An emission shader with a noise texture and a very soft flicker on the flame, and the wick animated on a small up-and-down loop. The wax is translucent close to the flame, the way real wax is.",
          "At one point there were more than three hundred candles in the amphitheatre and my laptop began to make its feelings known, so I reduced the count. Even reduced, the candlelight is still the best thing in the render.",
        ],
      },
      {
        kind: "broke",
        heading: "The cloak disaster that saved the project",
        text: [
          "I wanted the ghost in a cloth cloak, grim-reaper style. I spent hours trying to rig it to the armature. It exploded. It collapsed. It slid off the model and lay on the floor like a dropped towel. Nothing worked.",
          "So I gave up and turned the armature itself into a dark material with reflective blue sparkles, and it was instantly better than the thing I had been fighting for. It matched the colours of *Starry Night* almost too perfectly.",
          "The best decision in this project is one I did not make. I still wish I had learned to rig the cloth.",
        ],
      },
      {
        kind: "steps",
        heading: "The flower rebirth system",
        intro:
          "The part I am proudest of technically. Flowers grow across the ground as the music plays, and they grow in sequence rather than appearing all at once.",
        items: [
          "A separate donut-shaped plane above the base, so nothing grows under the piano or the stairs",
          "A hair particle system on that plane, instancing the flower model",
          "Randomised size and rotation, so it does not read as a pattern",
          "A sphere animated to travel vertically from below the plane to above it",
          "Vertex groups and density modifiers, so flowers only appear where the sphere has already passed",
        ],
        after: ["The sphere is invisible in the final render. It is a growth trigger wearing a disguise."],
      },
      {
        kind: "prose",
        heading: "Cameras",
        text: [
          "I wanted six. My computer disagreed, so four survived: one following a Bézier curve with a track-to constraint on an empty beside the pianist, one orbiting the theatre on a circular path, one static on the flowers, and one static wide shot.",
        ],
      },
      {
        kind: "broke",
        heading: "Things I built and then had to delete",
        items: [
          "**Volumetric fog.** A soft yellow mist running through the whole scene. It was genuinely beautiful. Three frames took nine hours. It had to go.",
          "**God rays.** A spotlight shaft falling onto the pianist. Same story, same ending.",
        ],
        after: [
          "If I had understood render cost earlier I would never have built either. That is the real lesson: plan the render before you plan the scene.",
        ],
      },
      {
        kind: "specs",
        heading: "Render settings, reduced drastically for survival",
        items: [
          ["Engine", "Eevee, Cycles is more beautiful and far too slow"],
          ["Resolution", "1280 × 720 at 80%"],
          ["Frame rate", "24fps"],
          ["Denoise", "On, noise threshold 0.1"],
          ["Texture limit", "1024"],
          ["Output", "FFmpeg, H.265, AAC audio"],
        ],
      },
      {
        kind: "list",
        heading: "What I learned",
        items: [
          "Controlling cameras with curves, paths and constraints",
          "Keyframing and building animation from scratch",
          "Using particle systems to tell a story rather than to scatter grass",
          "When Eevee is the right answer and when Cycles is worth the wait",
          "How to build an entire world starting from an empty scene",
          "How to troubleshoot under deadline pressure, which mostly means choosing which beautiful thing to delete",
        ],
      },
    ],
  },

  {
    id: "echo-capsule",
    lens: "designer",
    title: "Echo Capsule",
    year: "2026",
    kicker: "Mobile app design · Group project",
    question: "What if a memory refused to open alone?",
    standfirst:
      "A mobile app that buries a capsule in a real place and will not let you open it by yourself. It unlocks on an anniversary, when you return to the spot, or when two people stand there together and press and hold at the same time.",
    media: { type: "image", src: "media/capsule-hero.jpg", alt: "A glass capsule containing a photograph of a family walking on a beach at sunset." },
    video: {
      src: "media/echo-proto.mp4",
      poster: "media/poster-echo.jpg",
      alt: "Screen recording of the Echo Capsule prototype running in Figma.",
      caption: "The Figma prototype: permissions, creation flow, map and the shared memory screens",
    },
    meta: [
      ["Role", "Concept model, IA, unlock logic, visual themes, front-end prototype"],
      ["Team", "Four people"],
      ["Built with", "Figma, HTML, CSS, JavaScript"],
      ["Module", "CS4056 Mobile Application Design, University of Limerick"],
    ],
    stack: ["Figma", "HTML", "CSS", "JavaScript", "Information architecture", "Nielsen's heuristics"],
    gallery: [
      { src: "media/ec-moments.jpg", alt: "Moments screen showing capsules waiting to be unlocked.", caption: "Moments: what is unlocking soon, what is waiting on someone else" },
      { src: "media/ec-map.jpg", alt: "Dark map screen with glowing capsule pins.", caption: "Map: place is the lock, not metadata" },
      { src: "media/ec-intent.jpg", alt: "Screen asking what's your intent.", caption: "Create starts with intent, not with content" },
      { src: "media/ec-unlock.jpg", alt: "Unlock Together screen showing two people both present and ready.", caption: "The signature interaction: both present, both holding" },
      { src: "media/ec-warm.jpg", alt: "Profile screen in the warm taupe and gold theme.", caption: "Warm theme: taupe, gold, blush" },
      { src: "media/ec-neon.jpg", alt: "The same profile screen in the neon cyan and violet theme.", caption: "Neon theme, same structure" },
    ],
    body: [
      {
        kind: "prose",
        heading: "The pitch",
        text: [
          "Echo Capsule lets you leave a capsule, text, a voice note, photographs, a short video, in a real place, addressed to a future moment. It does not open because you tapped it. It opens on a date, on an anniversary, when you come back to the place, or through the one we built the whole app around: two or more people standing in the same spot, pressing and holding on their own phones at the same time.",
          "Everything else on a phone is designed for immediacy. Capture, post, scroll, react. This one is designed to make you wait, come back, and bring someone with you.",
        ],
      },
      {
        kind: "prose",
        heading: "Day one",
        text: [
          "We wrote our aim on a flipchart in marker: *Best app Simon has ever seen.* Underneath it, the actual criteria, original, never been done before, well resolved and functional rather than just pretty, understandable in purpose and interaction, exceed expectations.",
          "Reading it back it sits somewhere between ambition and a hostage note. It did keep us honest for ten weeks.",
        ],
      },
      {
        kind: "prose",
        heading: "What I did",
        text: [
          "A team of four, so to be precise about my part: I shaped the conceptual model, and the reframe from \"an app that saves memories\" to \"an app that designs future encounters\" was the turn that made the project work. It moved the unlock condition from a setting buried in a form to the entire point of the product.",
          "From there I defined the five-part navigation, Moments, Map, Create, Connections, Me, developed the capsule modes and unlock logic, built the two visual themes, and pushed Hold to Unlock Together as the signature interaction. I worked on prototype behaviour in Figma, and I built the working prototype in HTML, CSS and JavaScript.",
        ],
      },
      {
        kind: "table",
        heading: "The research that changed the design",
        intro:
          "I ran a competitive analysis across FutureMe, Capsule, Google Photos Memories, StoryWorth, 1 Second Everyday and After Note. Four gaps came out, and each one turned into a design decision.",
        columns: ["What is missing out there", "What we did about it"],
        rows: [
          ["Memory is either instant social output or a passive archive", "Unlock conditions you choose on purpose: a date, an anniversary, a return to a place"],
          ["Sharing is asynchronous, you send, they view, separately", "Unlock Together: both people, same place, same moment, hands on their screens"],
          ["Place is a line of metadata", "Place is the lock"],
          ["Interfaces holding sentimental content look administrative", "A capsule-shaped visual language: frosted elongated panels, pill cards, soft blur"],
        ],
      },
      {
        kind: "broke",
        heading: "What we cut, and why",
        text: ["A group generates ambitious ideas quickly. Some of ours had to be put down:"],
        items: [
          "Posthumous legacy capsules",
          "A private note and password vault for loved ones",
          "AI-avatar capsules of people who had died, so you could still hear from them",
        ],
        after: [
          "These were the most emotionally interesting ideas in the room. They were also an ethics, privacy and technical minefield that would have swallowed the prototype whole.",
          "We parked all three. The hardest skill in this project was not a tool. It was deciding what not to build.",
        ],
      },
      {
        kind: "broke",
        heading: "The other failure: it was too clever to understand",
        text: [
          "Low-fidelity wireframing on paper exposed the real problem early. With every capsule type, rule and social scenario visible at once, nobody could tell what the app actually was. The concept that made it original was also what made it confusing.",
          "So most of the work after that was subtraction. Fewer visible options, progressive disclosure, and clear waiting states that say *why* a capsule is still shut: waiting for a date, waiting for you to return, waiting for someone else to arrive and hold.",
          "That single change is what made the app feel intentional instead of broken.",
        ],
      },
      {
        kind: "prose",
        heading: "The logo argues the same point",
        text: [
          "The capsule is split. One half is transparent and almost fragile, letters, papers, scraps, fragments of something real. That is the human need to hold a memory as an object you can nearly touch.",
          "The other half fades into dark and fills with scattered stars. That is the part of a memory that does not fade the way detail does: the weight of a moment, still there long after you stopped noticing it.",
          "The name works the same way. An echo is not a perfect repetition, it comes back softened, altered, shaped by distance. Memories do that too. The sharp details go, something deeper stays.",
        ],
      },
      {
        kind: "prose",
        heading: "Privacy was a design constraint, not a slide at the end",
        text: [
          "The app asks for location, notifications, microphone and camera, and each request carries a plain reason. Users control whether a capsule is private, shared with named people, or group-based. Memories tied to real places are a genuine risk, so GDPR shaped the permission flow from the start.",
          "Error prevention mattered more here than in a normal app, because a destructive action does not lose data, it loses a memory. Deleting takes confirmation steps, and content is recoverable wherever we could make it so.",
        ],
      },
      {
        kind: "broke",
        heading: "The gap between the Figma and the build",
        text: [
          "Looking back at the prototype, the clearest flaw was the distance between the Figma designs and the implemented version. The core idea was there, but colours, layouts and small details did not line up. We only caught it because we were evaluating our own work against consistency and standards, and we were failing our own test.",
          "At first it read as sloppiness. Over time I started to see it as what actually happens: design is rarely linear, it diverges before it comes back together. But it is also exactly why design systems exist, and not having one cost us.",
        ],
      },
      {
        kind: "specs",
        heading: "The business model we sketched",
        items: [
          ["Free", "Create capsules, store memories, the whole core ritual"],
          ["Premium", "$4.99 a month or $49.99 a year"],
          ["Includes", "Encrypted capsules, custom themes, exporting memories into tangible formats, no ads"],
          ["Unresolved", "The AI avatar feature, which needs far more ethical work than a term allows"],
        ],
      },
      {
        kind: "prose",
        heading: "What it comes down to",
        text: [
          "The project showed me that designing for emotion is not about features. It is about the balance between usability, meaning and what you can actually build.",
          "It is about moments. About presence. About the idea that even as time moves forward, some things do not completely fade, *they echo*.",
        ],
      },
    ],
  },

  {
    id: "ubuntu",
    lens: "designer",
    title: "Ubuntu",
    year: "2026",
    kicker: "Interactive sculpture · Light, sound and sensing",
    question: "Does getting closer mean connecting?",
    standfirst:
      "A modular responsive sculpture that uses touch and light sensing to move between visual and sonic states in real time. Laser-cut cubes carved with reaching hands, driving a particle cloud that answers your hands.",
    media: {
      type: "video",
      src: "media/ubuntu.mp4",
      poster: "media/poster-ubuntu.jpg",
      alt: "Hands moving over laser-cut wooden boxes carved with hand motifs, next to a laptop showing a reacting particle cloud.",
    },
    meta: [
      ["Role", "Design, fabrication, electronics"],
      ["Built with", "Arduino, light sensors, TouchDesigner"],
      ["Made from", "Laser-cut plywood, soldered circuits, LEDs"],
    ],
    stack: ["Arduino", "LDR sensors", "TouchDesigner", "Laser cutting", "Soldering", "Physical computing"],
    body: [
      {
        kind: "prose",
        heading: "The idea",
        text: [
          "*Ubuntu* is a southern African philosophy usually translated as \"I am because we are.\" The piece takes that literally and makes it something you operate with your hands.",
          "The sculpture is a set of laser-cut plywood cubes, each face carved with a reaching hand. Inside, light sensors and LEDs wire to an Arduino, which feeds a particle visual built in TouchDesigner. Move your hands over the forms and the cloud responds.",
        ],
      },
      {
        kind: "prose",
        heading: "The twist",
        text: [
          "When you start to reach out, the particles gather and the connection strengthens. But as you get closer, the connection weakens and the cloud scatters.",
          "That reversal is the whole argument of the piece: proximity and connection are not the same thing.",
        ],
      },
      {
        kind: "prose",
        heading: "Making it",
        text: [
          "Exploration, electronics and fabrication, designing the hand motifs, cutting and assembling the enclosures, soldering the circuits, and getting sensor data out of an Arduino and into TouchDesigner cleanly enough to drive a visual in real time.",
        ],
      },
      { kind: "note", text: "Short version. Add your sensor readings, the TouchDesigner patch and build photographs." },
    ],
  },

  {
    id: "second-skin",
    lens: "designer",
    title: "Second Skin",
    year: "2025",
    kicker: "Speculative interaction · Wearable memory",
    question: "What if clothing could remember affection?",
    standfirst:
      "A speculative dress that gathers emotional traces through pressure, proximity and touch, turning clothing into a quiet archive of human connection.",
    media: { type: "image", src: "media/secondskin-1.jpg", alt: "A pencil storyboard panel of a person embracing a dress that lights up, captioned Tactile Feedback." },
    meta: [
      ["Role", "Concept, storyboarding, interaction states"],
      ["Format", "Speculative design, visual narrative"],
    ],
    stack: ["Storyboarding", "Interaction states", "Speculative design", "Visual narrative"],
    gallery: [
      { src: "media/secondskin-1.jpg", alt: "Storyboard panel of a person embracing the lit dress.", caption: "Tactile feedback: the garment answers an embrace" },
      { src: "media/secondskin-2.jpg", alt: "Four-panel diagram of system connection, emotive transmission, public interaction and touch transmission.", caption: "The four interaction states, start to finish" },
    ],
    body: [
      {
        kind: "prose",
        heading: "The premise",
        text: [
          "If a garment could register being held, leaned on, or brushed past, what would it be holding by the end of a year? Second Skin treats a dress as a recording surface for contact rather than a thing you wear.",
          "I used storyboards and interaction states to explore a garment that changes through repeated contact and shared presence. The concept moves through private interaction, public activation and gradual visual transformation, balancing intimacy against the risks of exposure and surveillance.",
        ],
      },
      {
        kind: "prose",
        heading: "What it taught me",
        text: [
          "It taught me to make an interaction legible before any technology is built. The dress does not exist. The argument about what it would mean to wear it does, and that argument had to hold up on paper first.",
        ],
      },
    ],
  },

  {
    id: "algorithmic-soundscape",
    lens: "designer",
    title: "Algorithmic Soundscape",
    year: "2026",
    kicker: "Rule-based performance · CS6042",
    question: "Can a dice compose?",
    standfirst:
      "A live sonic performance where a six-sided dice decides what I am allowed to play next. Environmental recordings from Freesound, mapped across a keyboard, triggered under constraint.",
    media: { type: "none", alt: "" },
    meta: [
      ["Role", "Solo performer and designer"],
      ["Built with", "Soundplant, Freesound archive, one six-sided dice"],
      ["Module", "CS6042, University of Limerick"],
    ],
    stack: ["Sound design", "Rule systems", "Live performance", "Soundplant", "Freesound"],
    body: [
      {
        kind: "prose",
        heading: "The system",
        text: [
          "Instead of composing music, I wrote rules. Every number key, every letter, the space bar and enter were each mapped to a different environmental sample, rain, machinery, human activity, using Soundplant. The keyboard becomes a crude piano.",
          "Then I roll a dice. The number decides what kind of key I am permitted to press next. Chance sets the constraint, I make the decision inside it.",
        ],
      },
      {
        kind: "list",
        heading: "A few of the rules",
        items: [
          "**1, Vowels.** Any vowel key, but each vowel can only be used once in the entire performance.",
          "**2, Letters from my name.** Consonants that appear in my name. Vowels excluded.",
          "**Others** govern number keys, the space bar, and repeats.",
        ],
      },
      {
        kind: "prose",
        heading: "Why it works",
        text: [
          "The constraint is what makes it listenable. Given a free keyboard I would have built something tidy. Given a dice that keeps taking options away, the texture has to be assembled out of whatever is still legal, and it ends up sounding like weather rather than like a tune.",
        ],
      },
      { kind: "note", text: "Two performance recordings exist on YouTube. Embed them here." },
    ],
  },

  /* ════════════════ CODER ════════════════ */
  {
    id: "rent-a-center",
    lens: "coder",
    title: "Rent A Center",
    year: "2025",
    kicker: "Royal Cyber · Headless commerce",
    question: "storefront → composable",
    terminal: ["monolith → headless", "content → composable", "deadline → certification"],
    standfirst: "Moving a live US storefront onto React and PWA Kit, without it ever going down.",
    media: { type: "none", alt: "" },
    meta: [
      ["Role", "Core team frontend engineer"],
      ["Employer", "Royal Cyber"],
      ["Dates", "January 2025 – September 2025"],
      ["Impact", "Scalability and performance for a major US retailer"],
    ],
    stack: ["React.js", "PWA Kit", "SFCC", "Headless commerce", "Composable architecture", "Responsive UI"],
    body: [
      {
        kind: "prose",
        heading: "What the job was",
        text: [
          "Rent-A-Center's storefront was making money every day. We moved it to a headless setup, React and PWA Kit in front, the commerce platform behind, while it stayed open.",
          "You cannot rewrite a page in that situation. You build the new one beside the old one, check it behaves the same down to the odd cases, then move the traffic across.",
        ],
      },
      {
        kind: "prose",
        heading: "The part I worked on",
        text: [
          "Front-end components for the new architecture, built so the marketing team could assemble a page without filing a ticket. Constrained options rather than a hundred free-text fields, and defaults that look right before anyone configures anything.",
          "I sat the Salesforce AI Associate exam during this project.",
        ],
      },
    ],
  },

  {
    id: "deciem",
    lens: "coder",
    title: "Deciem",
    year: "2024",
    kicker: "Royal Cyber · Design-to-code systems",
    question: "figma → markup",
    terminal: ["figma → markup", "one system → many clients", "detail → trust"],
    standfirst: "A year on Contentful and Amplience inside a PWA, then campaign templates in Salesforce Marketing Cloud.",
    media: { type: "none", alt: "" },
    meta: [
      ["Role", "Frontend engineer"],
      ["Employer", "Royal Cyber"],
      ["Dates", "August 2024 – December 2024"],
      ["Impact", "Improved campaign engagement and code reusability"],
    ],
    stack: ["SFMC", "React.js", "PWA Kit", "Contentful", "Amplience", "Composable architecture"],
    body: [
      {
        kind: "prose",
        heading: "Two CMSs on one codebase",
        text: [
          "I spent a year putting Contentful and Amplience into a PWA on PWA Kit and building the homepage structure on top of them.",
          "Running both let me compare them properly: which was quicker to build against, which made editors fight it, and what that did to the customer.",
        ],
      },
      {
        kind: "prose",
        heading: "Cutting the rebuild time",
        text: [
          "We kept rebuilding the same page shapes under different names. I worked out how much could be shared, reused the structures and content models, and got the build time for a new page down by about 60%.",
          "It started as a side question, not a ticket.",
        ],
      },
      {
        kind: "prose",
        heading: "Campaign emails",
        text: [
          "The last stretch was DECIEM's campaign templates in Salesforce Marketing Cloud, built from Figma and tested until they held up in Outlook, Gmail, Apple Mail and old iPhones.",
          "Email is tables and inline styles, so I made the templates modular. The next campaign starts from something.",
        ],
      },
    ],
  },

  {
    id: "indigo-canada",
    lens: "coder",
    title: "Indigo Canada",
    year: "2022–23",
    kicker: "Royal Cyber · Accessible commerce",
    question: "design → everyone",
    terminal: ["design intent → built", "+ keyboard reality", "+ browser reality"],
    standfirst: "UI and accessibility work on a large SFRA storefront, with the design team rather than at a distance from it.",
    media: { type: "none", alt: "" },
    meta: [
      ["Role", "Frontend engineer"],
      ["Employer", "Royal Cyber"],
      ["Dates", "October 2022 – June 2023"],
      ["Impact", "Boosted inclusivity and user experience across platforms"],
    ],
    stack: ["SFRA", "HTML5", "SCSS", "Bootstrap", "ISML", "jQuery", "JavaScript", "WCAG"],
    body: [
      {
        kind: "prose",
        heading: "What the job was",
        text: [
          "Indigo is a big storefront. I did the unglamorous half: layouts that break at one width, controls that do nothing in a particular browser, drift between the design and what was live.",
          "I had one-to-one sessions with the design team instead of guessing from the files, which is how you find out that a spacing is load-bearing or a component has a state nobody drew.",
        ],
      },
      {
        kind: "prose",
        heading: "Accessibility",
        text: [
          "Focus traps, unlabelled controls, keyboard paths that dead-ended. Enough of them, on a site real people shop on, that checking became a habit rather than a ticket.",
        ],
      },
    ],
  },

  {
    id: "commerce-foundations",
    lens: "coder",
    title: "Commerce Foundations",
    year: "2020–22",
    kicker: "Systems Ltd. · Multi-brand delivery",
    question: "pipelines → SFRA",
    terminal: ["pipelines → SFRA", "payments → integrated", "knowledge → shared"],
    standfirst: "Five brands in two years at Systems Ltd. Started on the bugs nobody wanted, finished running UI on a project.",
    media: { type: "none", alt: "" },
    meta: [
      ["Role", "Frontend, then UI lead"],
      ["Employer", "Systems Ltd."],
      ["Dates", "December 2020 – October 2022"],
      ["Span", "Five brands"],
    ],
    stack: ["SFRA", "SFCC", "JavaScript", "jQuery", "Bootstrap", "Braintree", "PayPal", "Mentoring"],
    body: [
      {
        kind: "list",
        heading: "The run",
        items: [
          "**Canada Goose**, assistant Salesforce developer through the Pipelines to SFRA migration, fixing backend defects to keep the move smooth.",
          "**Vineyard Vines**, backend shadow on Braintree and PayPal payment integrations.",
          "**Everything But Water**, frontend shadow resource, UI defects, and the training that took me from basics to advanced frontend.",
          "**ShopLC**, responsive UI integrated into Demandware for web and mobile, built to scale.",
          "**Kickstart**, led UI management on an SFCC project and mentored a remote team member.",
        ],
      },
      {
        kind: "prose",
        heading: "Shadow to lead in two years",
        text: [
          "I started on these projects as a shadow resource, which is a polite way of saying I was handed the bugs nobody wanted. Two years later I was running UI on a project and mentoring someone else through the same path.",
          "That progression is the thing I would point an employer at. Not the brand names, the fact that the brand names kept getting bigger and the work kept getting more mine.",
        ],
      },
    ],
  },

  {
    id: "salto",
    lens: "coder",
    title: "SALTO",
    year: "2019",
    kicker: "TechVerx · Where it started",
    question: "psd → page",
    terminal: ["psd → page", "css → motion", "curiosity → career"],
    standfirst: "A summer turning PSDs into responsive pages, plus a restaurant site where I first used GSAP.",
    media: { type: "none", alt: "" },
    meta: [
      ["Role", "Junior frontend developer"],
      ["Employer", "TechVerx"],
      ["Dates", "June 2019 – August 2019"],
    ],
    stack: ["HTML5", "CSS3", "Bootstrap", "React.js", "GSAP"],
    body: [
      {
        kind: "prose",
        heading: "What the job was",
        text: [
          "A PSD would arrive and I turned it into something that worked at every width. A few responsive templates, some freelance pages, small React apps.",
          "The one I remember is a local restaurant site, where I started playing with GSAP to see if I could make something arrive on screen instead of just appear.",
        ],
      },
    ],
  },

  {
    id: "this-portfolio",
    lens: "coder",
    title: "This Portfolio",
    year: "2026",
    kicker: "Independent · React interaction",
    question: "one person → two lenses",
    terminal: ["hover → reveal", "choice → perspective", "one person → two lenses"],
    standfirst:
      "A two-sided portfolio that lets design and engineering share one identity instead of competing for space.",
    media: { type: "none", alt: "" },
    meta: [
      ["Role", "Solo"],
      ["Built with", "React, Vite, hand-written CSS"],
      ["Year", "2026"],
    ],
    stack: ["React", "State", "Responsive CSS", "Accessible interaction", "Media"],
    body: [
      {
        kind: "prose",
        heading: "The interface is the argument",
        text: [
          "Every portfolio I looked at made me pick a lane. Designer portfolios hide the engineering; engineering portfolios flatten the design into a list of repos. I am not choosing, so the site does not ask me to.",
          "One switch changes the entire world: the studio side is cream, didone and image-led, the build side is black, monospaced and terminal-shaped. Same person, same projects list, two ways of being read. The switch is not a filter, it is a change of light.",
        ],
      },
      {
        kind: "list",
        heading: "What it is made of",
        items: [
          "React with no UI framework, so every decision in the CSS is a decision",
          "Responsive layouts that hold from 390px to ultrawide",
          "Keyboard-accessible choices, semantic project dialogs, Escape to close",
          "Reduced-motion support throughout",
          "Video and image media compressed to keep the page fast",
        ],
      },
      {
        kind: "prose",
        heading: "Honest note",
        text: [
          "The first version of this site was a teal Chakra UI template with my job history in cards. It was fine. It did not look like anybody. Throwing it out and starting from a point of view was the most useful design decision I made this year.",
        ],
      },
    ],
  },
];
