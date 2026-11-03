import { leiriu } from './leiriu.js';
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
  award: {
    title: "University of Limerick Volunteer Award",
    year: "2026",
    note: "For volunteering on the Be Mindful programme and the Buddy programme at UL, sitting with people, not building things for them.",
  },
  extras: [
    {
      title: "Spreading Smiles and Tinkers",
      image: "media/extra-smiles.jpg",
      focus: "40% 24%",
      text: "Volunteered with Tinkers and Spreading Smiles to spread a few smiles.",
    },
    {
      title: "Formula Student Team Infinity",
      image: "media/extra-infinity.jpg",
      text: "Part of the team representing Pakistan at Formula Student UK.",
    },
    {
      title: "Google Developer Student Club",
      image: "media/extra-gdg.jpg",
      text: "Workshops, tech talks and hackathons at DevFest Islamabad.",
    },
  ],
};

export const meraki = {
  title: "Meraki",
  subtitle: "To do something with soul, creativity or love.",
  text: [
    "Meraki is a Greek word for putting a piece of yourself into your work. It is also the name I make under.",
    "Paintings and hand-poured candles. Two of these canvases hang in the Unity gallery on the studio side of this site, which was not a coincidence: when I needed art for a virtual room, I had my own.",
  ],
  instagram: "@meraki_by_nimrashahzad",
  instagramUrl: "https://www.instagram.com/meraki_by_nimrashahzad/",
  collections: [
    { id: "paint", label: "On canvas", note: "Oil and acrylic, framed." },
    { id: "wax", label: "In wax", note: "Hand-poured, hand-coloured, made in small batches." },
  ],
  works: [
    { src: "media/art-saudade.jpg", kind: "paint", title: "Saudade", note: "Hangs in Pocket Gallery" },
    { src: "media/art-batman.jpg", kind: "paint", title: "Batman", note: "Hangs in Pocket Gallery" },
    { src: "media/art-messi.jpg", kind: "paint", title: "Messi and the trophy" },
    { src: "media/art-dress.jpg", kind: "paint", title: "Yellow dress, blossom" },
    { src: "media/art-calligraphy.jpg", kind: "paint", title: "Calligraphy, gold on deep red" },
    { src: "media/art-room.jpg", kind: "paint", title: "Commission, installed and lit" },
    { src: "media/art-roses.jpg", kind: "wax", title: "Rose candles, twenty-five" },
    { src: "media/art-cake.jpg", kind: "wax", title: "Dessert candles, in ceramic" },
  ],
};


export const projects = [
  /* ════════════════ DESIGNER ════════════════ */
  leiriu,

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
      "A team-designed mobile prototype exploring how memories could reopen through time, place and being together. The Figma interactions and partial web implementation explore a return to a moment, rather than another endless camera roll.",
    demo: "media/echo-prototype.mp4",
    media: { type: "image", src: "media/capsule-hero.jpg", alt: "A glass capsule containing a photograph of a family walking on a beach at sunset." },
    meta: [
      ["Role", "Concept model, IA, unlock logic, visual themes, front-end prototype"],
      ["Team", "Four people"],
      ["Built with", "Figma, HTML, CSS, JavaScript"],
      ["Module", "App design, University of Limerick"],
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
        heading: "Privacy was a design constraint, not a slide at the end",
        text: [
          "The app asks for location, notifications, microphone and camera, and each request carries a plain reason. Users control whether a capsule is private, shared with named people, or group-based. Memories tied to real places are a genuine risk, so GDPR shaped the permission flow from the start.",
        ],
      },
      {
        kind: "broke",
        heading: "When Figma and code stopped speaking the same language",
        text: [
          "The report records a gap between our Figma designs and the implemented version: colours, layouts and small details were not fully aligned. The concept was there, but consistency needed another pass.",
          "I learned that a design system has to travel into implementation. My next step would be to agree shared tokens and reusable components, then reconcile the screens one by one.",
        ],
      },
      {
        kind: "prose",
        heading: "A meaningful ritual still has to fit a real life",
        text: [
          "Returning together sounds lovely, until you consider different time zones, schedules and distances. The report identifies flexible unlocking as a future iteration. We had explored the ritual; we had not solved every practical edge case.",
          "AI avatars remained a concept requiring deeper work on consent, identity and emotional impact. The prototype did not deliver a conversational recreation of a loved one.",
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
    standfirst:
      "Core-team work on the move from a traditional storefront to a React and PWA Kit headless architecture, for a major US retailer.",
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
        heading: "Changing the engine while the shop is open",
        text: [
          "Rent-A-Center had a storefront that worked and made money every day. My team's job was to move it onto a headless architecture, React and PWA Kit in front, commerce platform behind, without the shop ever closing.",
          "That constraint shapes everything. You cannot rewrite a page; you have to stand the new one up beside the old one, prove it behaves identically down to the edge cases nobody documented, and only then move the traffic. Most of the difficulty is not React. It is archaeology: working out why a template does something strange, and whether that strangeness is a bug or the only thing holding a business rule together.",
        ],
      },
      {
        kind: "prose",
        heading: "Composable only counts if a marketer can use it",
        text: [
          "The reason to go composable is that content and code stop being the same thing. But that only pays off if the people who publish content can actually assemble a page without filing a ticket.",
          "So the front-end architecture I worked on was built backwards from that: components with sensible, constrained options rather than a hundred free-text fields, and sane defaults so a page looks right before anyone has configured anything. The test I cared about was whether someone outside engineering could build a campaign page on their own.",
        ],
      },
      {
        kind: "prose",
        heading: "And the certification, at the same time",
        text: [
          "I sat the Salesforce AI Associate certification during this project, which meant studying around delivery rather than instead of it. It is on the shelf next to the B2B commerce one.",
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
    standfirst:
      "Frontend and email work connecting Contentful and Amplience with composable storefront experiences, plus responsive campaign templates in Salesforce Marketing Cloud.",
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
        heading: "Two content systems, and a question nobody had asked",
        text: [
          "Before the campaign work, I spent a year integrating Contentful and Amplience into a progressive web app built on PWA Kit, and designing the structure of the homepages that sat on top of them.",
          "Running both systems side by side put me in an unusual position: almost nobody gets to compare two headless CMSs on the same codebase with the same team. So I wrote the comparison properly, where each one was quicker to build against, where each one made editors fight the tool, and what that difference actually did to the customer at the other end.",
        ],
      },
      {
        kind: "prose",
        heading: "Then I went looking for the time we were losing",
        text: [
          "The thing that came out of that comparison was less about the tools and more about us. We were rebuilding the same page shapes over and over with slightly different names.",
          "I spent a stretch researching how much of that could be made reusable, shared structures, shared content models, fewer bespoke components, and the approach cut the build time for a new page by around 60%. It is the piece of work I am proudest of here, and it started as a side question rather than a ticket.",
        ],
      },
      {
        kind: "prose",
        heading: "The campaign templates",
        text: [
          "The last stretch moved me onto DECIEM's campaign emails in Salesforce Marketing Cloud, building templates from Figma that had to survive Outlook, Gmail, Apple Mail and an old iPhone without falling apart.",
          "Email is its own discipline, tables and inline styles, none of the CSS you use everywhere else, and the only way through is a long test matrix and patience. I built the templates modular so the next campaign started from something rather than from nothing.",
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
    standfirst:
      "UI delivery and defect resolution across a large SFRA storefront, with accessibility and cross-browser compatibility as the main constraints.",
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
        heading: "Sitting with the designers, not just their files",
        text: [
          "Indigo is a big storefront with a lot of pages and a lot of people with opinions about them. Rather than receiving finished designs and guessing at the intent, I had one-to-one sessions with the design team, which is where you find out that the spacing you were about to ship is load-bearing, or that a component has three states nobody drew.",
          "Most of my work was the unglamorous half of a storefront: the layout that breaks at one width, the control that does nothing on a particular browser, the visual drift between what was designed and what is live.",
        ],
      },
      {
        kind: "prose",
        heading: "Where my accessibility habits come from",
        text: [
          "This is the project that made accessibility a default rather than a ticket. Once you have fixed enough focus traps and unlabelled controls on a storefront that real people are trying to buy books from, you stop treating keyboard support as an extra. It shows up in everything on the studio side of this site too.",
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
    standfirst:
      "Frontend and integration work across Canada Goose, Vineyard Vines, Everything But Water, ShopLC and the internal Kickstart project, where I learnt commerce from the ground up and then started teaching it.",
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
    standfirst:
      "Responsive web templates, a local restaurant site with experimental GSAP animation, and the small React apps that turned out to be the start of everything.",
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
        heading: "A summer of turning pictures into pages",
        text: [
          "A PSD would arrive and I would turn it into something that worked at every width. Several responsive templates, a handful of freelance pages, and small React apps including the to-do list everyone writes once.",
          "The one I remember is a local restaurant site, where I started playing with GSAP for no reason other than wanting to see whether I could make something arrive on screen rather than just appear.",
        ],
      },
      {
        kind: "prose",
        heading: "Why it is still here",
        text: [
          "It is a summer job from 2019 and it does not belong on a CV any more. I keep it because the restaurant site is where I first made something move on a page and felt the thing I have been chasing since, the moment an interface stops being a document and starts being an experience.",
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
