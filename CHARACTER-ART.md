# Portfolio character artwork

Asset: `public/media/nimra-character-poses-v2.webp`.

Method: built-in image generation, with a transparent background. The generated PNG is converted to WebP for the website; CSS selects each pose from the sheet. The rejected earlier character is not included in this package.

The first two references were Nimra's newly supplied selfies. The third reference was her supplied illustrated workshop image, used only for the rendering style. The original photographs remain outside this revision's added public assets.

## Final generation prompt

Use case: stylized-concept. Generate a NEW character sprite sheet for Nimra's animated portfolio. The first TWO photographs are strict identity and HAIR references. The third workshop cartoon image is ONLY a reference for clearly stylized 3D animated-film character rendering, NOT its people, robots, props, or scene. Make an obviously illustrated 3D cartoon ADULT woman version of Nimra, with a charming expressive face and mildly exaggerated head proportions; do NOT make a photorealistic fashion model or a photographic cutout. Recognizable features: medium-light warm South Asian complexion, strong natural dark eyebrows, brown almond eyes, her real nose and natural lips, distinctive small cheek moles. HAIR IS THE CRITICAL CORRECTION: faithfully match the first two photographs: a natural near-centre part, relatively flat smooth crown, dark brown hair with subtle warmer brown lengths, mostly straight upper sections, loose broad slight bends and softly turned ends in the lower sections. Hair length around upper chest, not waist length. Modest natural volume, no puffed-up crown, no enormous salon waves, no ringlets, no tight curls, no big glamorous blowout, no sculptural curls. Hair should be drawn as a few clean broad flowing shapes matching her actual hair silhouette. Friendly and witty, not sultry, no glamour makeup. Consistent outfit inspired by her photographs: navy top with charcoal open jacket, straight dark trousers and simple black shoes, tiny gold earrings. Refined rounded shapes, soft 3D materials, warm lighting, crisp professional animation character design, not a child, not anime. Exact 2x2 grid, FOUR fully isolated full-body poses of the SAME adult character. All four in their own equally sized square quadrant with generous transparent margins, same camera, same scale and consistent likeness, hair, outfit and palette. Top left: seated on a small simple stool using a laptop, a thoughtful raised eyebrow. Top right: standing with a paintbrush and small artist palette, a playful idea expression. Bottom left: kneeling to adjust a small stack of tactile square blocks, concentrating. Bottom right: standing and giving a friendly little wave, slight amused smile. Each person, all hair, hands, feet, stool, laptop and props fully inside its own quadrant; nothing cropped or crossing the centre lines. Genuinely transparent background and transparent gaps; no backdrop, no floor, no shadows crossing quadrant margins, no captions, no words, no borders, no watermark. PRIORITY: actual hair shape from the new selfies and an unmistakably cartoon animated character rather than the previous realistic doll aesthetic.


## Frosty companion

Asset: `public/media/frosty-roll.webp`. Method: built-in image generation with a transparent background, converted to WebP. The existing Nimra sheet supplied the rendering-style reference.

Prompt: Create one isolated, animation-ready 3D cartoon female cat, predominantly white with light orange and pale warm brown patches on one ear, forehead, flank and tail. Give her a medium fluffy coat, pink nose and paw pads, warm amber eyes, and a playful side/back rolling pose with all four paws loosely curled, curved spine and curled tail. Show the complete cat from a slightly elevated three-quarter view, matching the character sheet’s friendly sculpted style. Use soft warm lighting and clean transparent margins. No people, extra cats, detached limbs, scenery, floor, lettering or watermark.


## Current likeness refinements

Active character: `public/media/nimra-character-poses-v3.webp`. Method: built-in image editing using the previous four-pose sheet plus Nimra’s two supplied selfies. Prompt: preserve all four poses, charcoal-and-navy outfit, props and cartoon rendering. Reduce hair volume around the crown and sides by about 25% and length only 8–10%, keeping it below the shoulders around the collarbone and upper chest. Use a flatter natural near-centre part and soft lower bends. Match Nimra’s smaller brown almond-shaped eyes, relaxed slightly hooded upper lids, natural iris size, spacing and soft outer corners; preserve her brows, moles and remaining facial features. Keep a transparent 2×2 layout with clean margins.

Active Frosty: `public/media/frosty-portrait-v2.webp`. Method: built-in generation from the supplied photos of Frosty, with the previous character sheet as a style reference. Prompt: one complete compact adult cat in a calm upright loaf/crouch, round broad head and cheeks, short plush mostly-white coat, golden-yellow amber eyes, a small pink nose and rounded ears. Match the pale cream-ginger forehead markings, white blaze, large warm-tan saddle patches and subtly striped ginger tail. White front paws visible; tail curled beside her. Refined friendly 3D style, calm slightly serious expression, no exaggerated lashes or oversized pointed ears. Genuine transparency, no floor, backdrop, people, extra cats or lettering.


## Current individual scenes

All three scenes use built-in image generation with the refined character sheet and Frosty portrait as identity/style references, then WebP conversion. The existing coder sprite is not regenerated or edited.

- `public/media/nimra-holding-frosty.webp`: full-body welcoming stance, both arms securely holding Frosty against the chest; relaxed shoulders and gentle expression.
- `public/media/nimra-design-studio.webp`: seated cross-legged on a low cushion, brush and palette in hand; nonverbal interface wireframes, user-flow diagrams and colour swatches on papers around her; Frosty loafing on a chart.
- `public/media/nimra-making-leiriu.webp`: working at a compact bench on a servo-linked tactile-tile portrait mechanism, with a microcontroller, driver boards, wiring, motors and screwdriver; Frosty sitting on a separate cream block. This is decorative illustration rather than a measured construction drawing; actual project evidence remains in the Léiriú case study.

Shared prompt constraints: preserve Nimra’s refined face, smaller almond-shaped brown eyes, cheek moles, low-volume collarbone-length brown hair, navy top and charcoal outfit. Preserve Frosty’s round face, stocky short-plush white body, amber eyes, pink nose and cream/tan markings. Refined 3D cartoon style, complete isolated scene, clear alpha, generous margins, no cropping, lettering, duplicate characters, backdrop or floor plane.


## Current cartoon scenes and scroll layers

Built-in image editing created the current assets from existing scene compositions and the original four-pose character sheet as a strict cartoon-style reference. A more photographic intermediate treatment was rejected and is not used by the site.

- `public/media/nimra-holding-frosty-v3.webp`: full-body relaxed character holding Frosty in both arms. Prompt: retain the pose and navy/charcoal clothes; unmistakable adult animated-film cartoon, simplified sculpted hair and face, matte surfaces, natural relaxed almond eyes, thick brows and cheek beauty marks. No photographic skin, pores, hyperreal face or fine hair strands. Transparent background.
- `public/media/nimra-design-flows-v2.webp`: cross-legged cartoon character actively using a stylus on a flow-design tablet, with a white VR headset and controllers at her side. Prompt: same cartoon identity, low-volume collarbone hair, matte simplified 3D shapes, full seated pose and equipment, no cat or painting tools. Transparent background. The cat and vector flow board are separate browser layers; Meraki retains the earlier painting asset.
- `public/media/nimra-making-leiriu-v2.webp`: cartoon maker with small messy bun, seated at a workbench adjusting a servo-driven tile mechanism with screwdriver, electronics, wiring and tools. Prompt: match the coder sprite’s sculpted cartoon style, no photo skin/hair; remove embedded cat and leave right-side cream block empty with a tiny servo beside it. Full square transparent composition.
- `public/media/frosty-servo-reach.webp`: two registered poses in a horizontal transparent sheet. Prompt: the same round white-and-pale-ginger Frosty, amber eyes, pink nose; rest pose and gentle down-left reaching paw, body in the same position, no table/block in the sprite. CSS selects the two registered poses using chapter-local scroll progress, avoiding a doubled face during the reach.
- `public/media/ubuntu-ocean-friends.webp`: three-cell transparent cartoon sea-life sheet. Prompt: isolated lavender/cyan glowing jellyfish, gentle manta ray and five tiny fish, rounded stylized 3D silhouettes with luminous dotted edges matching the existing violet particle whale. No water rectangle, lettering or backdrop. This adds background scenery without changing the whale or project films.

The generated PNG assets were converted to alpha-preserving WebP. Browser CSS selects sprite cells and animates layers. Build’s original sprite is unchanged.


## Standing Léiriú workbench revision

Active Make asset: `public/media/nimra-leiriu-workbench.webp`. Built-in image generation used the earlier cartoon maker as a character/style reference, the actual `lei-lit.jpg` installation photo for the device’s recognizable form, and the Frosty portrait for the small companion. The generated transparent PNG was converted to WebP.

Prompt: redesign the scene as an adult cartoon woman standing at a waist-height electronics workbench, small messy bun, navy/charcoal clothes, focused screwdriver and wiring work. Show a tall upright frosted acrylic Léiriú frame with a vertical dark tactile-block matrix, black depth camera, illuminated lower-right button and restrained violet/cyan glow; expose blue servos, driver boards and many coloured wires along the open side. Include tools and spare servo parts, with a small Frosty at the far-right bench corner watching a loose servo, one paw hovering. Full standing figure, device and bench legs fit within the transparent square. No stool, seated pose, toy-block stacking, photorealistic face, room, lettering or watermark. This remains decorative illustration rather than a measured assembly drawing.

The Design chapter no longer has a floating board or a visible full cat beside the face. CSS puts only a small clipped patch of Frosty’s ears and forehead behind the knee. The new maker asset contains one small cat; the previous independent servo-cat overlay is removed.
