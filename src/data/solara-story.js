export const solaraStory = (p) => ({
  ...p,
  kicker: 'Wearable energy · CS4126',
  question: 'What if your outfit could power your light?',
  standfirst:
    'A modular dress tiled with solar hexagons, lit from the inside. It charges while you walk, lights a room when you enter it, and when your body changes you snap on another plate instead of buying another dress.',
  media: {
    type: 'image',
    src: 'media/sol-final.jpg',
    alt: 'The finished SOLARA prototype against a Starry Night backdrop, its hexagon skin lit from within in gold and blue, with hexagonal detail insets alongside.',
    caption: 'The finished prototype: gold and blue light escaping through a skin of hexagons.',
  },
  videos: [{
    src: 'media/sol-glow.mp4',
    poster: 'media/sol-glow.jpg',
    title: 'Lit in a dark room',
    alt: 'The prototype glowing green and blue in a dark room, driven by an Arduino.',
    caption: 'Running on the bench, the light moves through the tiles rather than over them.',
  }],
  galleryTitle: 'Two versions of the same dress.',
  gallery: [
    {src:'media/sol-sketch.jpg',alt:'Hand-drawn design sketch annotated with light, 3D printed torso and hexagon plates.',caption:'The sketch that set the parts: a printed torso, hexagon plates, and light from inside'},
    {src:'media/sol-tests.jpg',alt:'A board of tile experiments in circles, octagons and hexagons, cut in card and board.',caption:'The shape board, tested in card before anything expensive was cut'},
    {src:'media/sol-corset-v1.jpg',alt:'Version one: a 3D printed lattice corset above hand-painted hexagonal acrylic panels stitched together through drilled holes.',caption:'Version one, a printed corset over painted acrylic hexagons, stitched to each other through drilled holes'},
    {src:'media/sol-mdf-v2.jpg',alt:'Version two in progress: hundreds of small laser-cut MDF hexagons laid onto black cloth beneath a printed top.',caption:'Version two, far smaller hexagons, cut from thin MDF and laid straight onto cloth'},
    {src:'media/sol-cuff.jpg',alt:'A 3D-printed hexagonal lattice cuff worn on a wrist.',caption:'A printed lattice cuff, worn for an hour to learn how a rigid tile feels against skin'},
    {src:'media/sol-brief.jpg',alt:'A slide showing how the garment addresses the brief through snap-on modular plates and peel-off stickers.',caption:'Never discarded: snap on more as you grow, peel off and repaint to change the look'},
  ],
  summary: [
    ['The form', 'A torso model pulled off the internet, reshaped in Blender, then 3D printed as the body I built on.'],
    ['The skin', 'Laser-cut hexagons on fabric, with light escaping through the seams between tiles.'],
    ['The breakthrough', 'Smaller tiles, thinner board, fixed to cloth instead of to each other. That is what turned a shell into a skirt.'],
  ],
  body: [
    {
      kind: 'prose',
      heading: 'The insight the whole thing turns on',
      text: [
        'Almost every wearable-energy concept I found was trying to charge a phone. That is a small ambition for something you wear all day.',
        '**What if the energy powered the room instead?** If your dress turns the lights on as you walk into a space, you never flip a switch again. The garment stops being a battery accessory and becomes part of the building.',
        'The other half of the problem is the garment. Fashion accounts for 8–10% of global carbon emissions and around 2.1 billion tonnes of greenhouse gas a year. A dress that generates power and is still binned after a season has solved nothing.',
      ],
    },
    {
      kind: 'specs',
      heading: 'How SOLARA answers the brief',
      items: [
        ['Reduces waste', 'Peel off, repaint, swap stickers for a new look with no purchase. Snap on more plates as your body changes. Replace one tile, not the dress.'],
        ['Generates energy', 'Solar hex tiles harvest sunlight outdoors, walking, running, commuting is continuous charge.'],
        ['Replaces lighting', 'A motion-activated LED light at a room’s entry. No wall switch, no grid.'],
        ['Sustainable materials', 'Laser-cut wood, so no microplastic shedding. 3D-printed bioplastic, so no toxic dye. Mechanical connectors, so no overseas fast-fashion shipping.'],
      ],
    },

    /* ── the body ── */
    {
      kind: 'prose',
      heading: 'Why I needed a body, and where this one came from',
      text: [
        'You cannot design a tiled garment on a flat sheet. The whole problem is what happens when a rigid plate meets a surface that curves in two directions at once, across the chest and down the waist at the same time. A cylinder will not tell you that. A flat pattern definitely will not.',
        'So the first thing I needed was a torso with honest curvature to design against. I did not sculpt one from scratch, I took an abstract female torso sculpture from the internet, which is in the references at the end of my project video, and brought it into Blender.',
        'What arrives from a download is somebody else’s topology. The mesh came in as a multi-part sculpture with its own cuts, its own openings and a polygon density I had no use for. Most of my work was in edit mode: stripping it back to the single form I wanted, closing what I did not need, and reshaping the surfaces I was going to tile so that the curvature was a decision rather than an inheritance.',
        'Then I 3D printed it. Printing the altered model gave me a physical body at the real scale, and that is what every later test was carried out on, you can argue with a render, you cannot argue with a plate that will not sit flat on a printed hip.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Light from within',
      text: [
        'The second fixed idea was that the light had to come from inside the garment rather than be mounted on it. A lamp clipped to a dress is a torch with extra steps; light escaping from behind a surface makes the surface itself look alive.',
        'That decided the skin before anything else did. I needed a surface made of separate pieces, because the gaps between the pieces are what the light comes through. Tiles were not a style choice, they were the lighting system.',
      ],
    },

    /* ── the shape ── */
    {
      kind: 'prose',
      heading: 'Why hexagons, properly',
      text: [
        'I did not pick hexagons because honeycomb looks nice. I went and read the geometry, and the hexagon wins on four separate counts at once, which is unusual enough to be worth spelling out.',
        '**Only three regular polygons tile a plane at all:** the triangle, the square and the hexagon. Of those three the hexagon has the most sides, so it is the closest to a circle, and a circle encloses the most area for the least perimeter. A hexagon therefore covers a surface with less edge, less seam and less wasted material than any other shape that still tiles.',
        '**Its internal angles are 120°**, so exactly three tiles meet at every vertex. Not an approximation that leaves a sliver, three, exactly, every time. That is why the sheet closes with no gaps, and every gap would have been lost solar area.',
        '**It has six rotational and six reflection symmetries**, the dihedral group D₆. In practice the tile looks identical however you turn it, so when you are hand-laying several hundred you never check orientation. That sounds like a footnote. By tile three hundred it is the most useful property the shape has.',
        '**The distance from its centre to each vertex equals its side length**, the hexagon is the only regular polygon that does this. Each tile sits perfectly inside its own circle, so the plates nest tightly on the cutting bed and waste very little board.',
        'Then the mechanical argument on top. Because neighbouring tiles meet only along short edges, a hexagonal sheet can hinge in two directions at once. That is what the metamaterials paper is about, and it is the reason a rigid tiled surface can behave like a flexible one at all.',
      ],
    },
    {
      kind: 'steps',
      heading: 'And what the alternatives did',
      intro: 'I tested the others anyway, because an argument on paper is not a prototype.',
      items: [
        '**Circles.** They cannot tile. There are always gaps you cannot close, the surface reads as scattered dots, and every gap is lost area.',
        '**Octagons.** The same failure in a different shape, the leftover gaps are square, and the whole thing reads as a grid with holes punched in it.',
        '**Squares.** Fine on a flat panel. They fight every curve on a body and bind at the shoulder and the waist.',
        '**Hexagons.** Everything above, confirmed in card and board before anything expensive was cut.',
      ],
    },
    /* ── the failure and the fix ── */
    {
      kind: 'prose',
      heading: 'Version one: a printed corset and stitched plates',
      text: [
        'The first full build split the garment in two. The upper body was a **3D printed corset**, a perforated lattice shell printed to the altered torso, so the structure *was* the garment rather than something worn over it.',
        'Below it, hexagonal plates cut from **transparent acrylic**, hand-painted, each drilled with small holes near its edges. I stitched the plates to one another through those holes, so the skirt was a chain-mail of hexagons held together by thread.',
        'It looked lovely. The painted plates caught light, and the stitching showed in a way I liked.',
      ],
    },
    {
      kind: 'broke',
      heading: 'But it was not a skirt',
      text: [
        'On the printed body it was wrong. Not broken, wrong. It held its shape like a shell and swung as one piece instead of falling in folds. It had the silhouette of a skirt and none of the behaviour of one, and once you have seen that you cannot unsee it: a skirt that does not flow is just armour with a hem.',
        'Three things were doing it. The plates were **large**, so there were very few seams and almost nowhere to fold. The acrylic was **thick and stiff**, so each plate resisted on its own even where a seam existed. And stitching plate-to-plate through drilled holes **fixed the spacing**, removing what little give was left.',
        'The geometry was right. The tessellation was right. The construction was wrong.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Version two: smaller, thinner, and on cloth',
      text: [
        'I changed three things, and all three were about letting the surface move.',
        '**Smaller hexagons.** A tiled sheet can only bend at its seams, so few tiles means few hinges. Cutting them much smaller multiplied the seams across the same area and gave the sheet hundreds of tiny hinges instead of a handful of large ones.',
        '**Thin MDF instead of transparent acrylic.** The acrylic was heavy and rigid; thin MDF is light and cuts cleanly at small sizes. Lighter tiles meant the fabric carried them instead of fighting them, and I could cut hundreds in a sitting.',
        '**Laid onto cloth instead of stitched to each other.** Rather than threading plate to plate, I fixed the tiles to black stretch fabric. The cloth became the hinge: it lets neighbouring tiles shift relative to each other, so the sheet behaves like a textile rather than a shell, while still holding every tile exactly in place.',
        'The skirt dropped into folds, swung when the body moved, and finally read as cloth. Same geometry, same idea, three construction decisions apart.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Why all that testing was the project',
      text: [
        'Nothing in the paragraph above could have been reasoned out at a desk. The geometry research told me hexagons would tessellate and flex; it did not tell me at what size a tiled sheet stops behaving like a plate and starts behaving like a fabric. Only cutting it, sewing it, putting it on a printed body and watching it fail told me that.',
        'That is the shape of the whole project: model the body so the tests are honest, build the obvious version, find out precisely how it is wrong, and change the one variable that fixes it. The final garment looks like a straightforward idea. It is the second answer, and it only exists because the first one was built.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Making it light up',
      text: [
        'Addressable LEDs sit behind the tiles, driven by an Arduino, and the light comes out through the seams between plates rather than through them, which is exactly what the tiled skin was for.',
        'For a future version I have been looking at 3D-printed tile sheets printed directly onto polyester voile, the technique used for scale-mail cosplay fabric. It would give the same tessellation with far fewer hours of hand-laying.',
      ],
    },
    {
      kind: 'list',
      heading: 'The research underneath it',
      items: [
        '*Hexagonal tessellation-based mechanical metamaterials*, Moghimimonfared, Spaggiari, Grasselli and Mizzi, which is where the geometry argument comes from',
        '*Mathematics meets the fashion industry on path to product innovation and sustainability*',
        '*Biocompatibility challenges in wearable health devices*, skin irritation from materials held against skin',
        '*Biobased materials for skin-contact products*, from the POLYBIOSKIN project',
        '*Requirements, challenges and novel ideas for wearables on power supply and energy harvesting*',
        '*Design considerations for triboelectric energy harvesting in wearable devices*',
      ],
    },
    {
      kind: 'broke',
      heading: 'What is honestly not done',
      items: [
        '**The solar cells are not on it.** The tiles are the carrier and the geometry is solved; the generation is designed, not demonstrated. I have the literature, not my own measurements.',
        '**Biocompatibility is open.** The papers are full of warnings about rigid materials held against skin for hours. My printed lattice cuff was a first touch test, not an answer.',
        '**The connectors are the weakest part.** A modular garment lives or dies on its joint, and mine is the least resolved thing in the project.',
      ],
    },
    {
      kind: 'prose',
      heading: 'The line it comes down to',
      text: [
        'One garment. Indefinitely. Powered by the sun, lit by movement.',
      ],
    },
  ],
});
