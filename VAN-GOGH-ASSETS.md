# Van Gogh page: visual direction and assets

The page takes its visual direction from the five distinct Pinterest references Nimra supplied on October 20: warm paper, collage fragments, oversized serif typography, rich cobalt, yellow, iris forms and cropped art. The reference posters and their typography are not embedded or reproduced as project work.

References reviewed:
- https://www.pinterest.com/pin/99853316722676203/
- https://www.pinterest.com/pin/649010996343194126/
- https://www.pinterest.com/pin/270004940155387638/
- https://www.pinterest.com/pin/547750373433650492/
- https://www.pinterest.com/pin/799670477627968493/

## Final decorative assets

Created with the built-in image-generation tool. These are decorative site assets, not evidence of the original Blender assignment. Nimra’s actual film, render still and two cloak screenshots remain separate.

- `public/media/vangogh-painted-sky.png`
- `public/media/vangogh-painted-irises-cutout.png`

The new header uses an actual still from the supplied animation, cropped by CSS into an arch. The sky fragments use CSS transforms driven by a passive scroll listener and one animation frame per update. The listener and pending frame are cleaned up on exit. Reduced-motion preference changes disable the parallax immediately.

## Generation prompts

### Sky

Use case: illustration-story. Asset type: transparent decorative oil-painted collage fragment for a Van Gogh inspired art portfolio page. Create one isolated asymmetric swirling night-sky brushstroke cutout: a broad curling cobalt and ultramarine wave with thick, visible short impasto brush marks, pale cerulean and ivory highlights, and one richly ochre yellow circular star halo at one end. Inspired by Vincent van Gogh's public-domain expressive brushwork, a tactile cut-paper museum collage. The overall silhouette is irregular, horizontal, airy and open with ample transparent holes and transparent space around it. The paint is textured, richly layered, genuinely hand-painted looking; crisp cut-paper silhouette, no rectangular paper background. NO typography, NO icons, NO geometric vector shapes, NO dark background, NO frame, NO people. It will float at the edge of a warm off-white editorial page.

### Irises

Use case: illustration-story. Asset type: transparent decorative oil-painted floral collage cutout for a Van Gogh inspired art portfolio page. A small loose cluster of three deep blue-violet iris blossoms and curling sage-green sword leaves, with tiny ochre yellow accents. Vincent van Gogh inspired thick directional impasto brushwork with visible oil paint ridges and lively short strokes. Elegant irregular cut-paper silhouette, stems trailing down, petals stretching sideways, a slight diagonal composition. Paint fills the flower and leaf forms only; full transparent background and transparent gaps between stems. Rich cobalt, periwinkle, violet, sage and touches of mustard yellow. NO vase, NO text, NO border, NO people, NO rectangular background, NO vector clipart, NO flat gradients. Designed as one collage fragment on warm ivory paper.

### Iris refinement

Remove the entire background, including ALL black, blue and green glows or gradients behind the flowers. Preserve the three painted iris blossoms, their impasto texture, stems and leaves exactly as they are. The output must be a clean isolated cutout with fully transparent alpha 0 everywhere outside the actual petals, stems and leaves, including the gaps between them. No shadow, no glow, no colour haze, no replacement background.

## Glass and painting-completion revision

Frosted glass uses semi-transparent backgrounds, fine light borders, backdrop-filter blur and gentle shadows. An opaque fallback is provided for browsers without backdrop filtering, and a reduced-transparency preference uses a solid reading surface.

The long SVG trails were removed. `VanGoghPaintReveal.jsx` uses short overlapping dry-brush masks to reveal the texture of the existing painted asset. Scroll progress increases the number of visible marks throughout the case study, until the painting is complete. Scrolling back reverses the reveal. Reduced motion displays the finished image without animation. The flowers, moon, typography, glass surfaces and actual project media remain.

These decorative interface effects are not part of the original Blender assignment. Native SVG asset renders were inspected at initial, intermediate and complete stages. This does not constitute visual browser QA of the full site.
