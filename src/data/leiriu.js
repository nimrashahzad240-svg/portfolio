// Source: Nimra_Shahzad.pdf, thesis submitted August 2026.
// Printed pages 1–5, 22–39, 40–64 and 65–76 were used to build this story.
// The Mungret Park / ARISE research is the origin of this project, not a separate card.
export const leiriu = {
  id: 'leiriu', lens: 'designer', title: 'Léiriú', year: '2026',
  kicker: 'MSc thesis · Inclusive kinetic artwork',
  question: 'What if a reflection could be felt?',
  standfirst: 'A responsive surface of 48 moving blocks that translates a visitor’s presence into a low-resolution physical portrait. You can watch it, pause it, and explore the relief through touch. Developed through the ARISE research at Mungret Park, Léiriú asks what meaningful participation could look like beyond simply making a space accessible.',
  media: {type:'image',src:'media/leiriu-front.jpg',alt:'The real Léiriú prototype with its 48-block surface, depth camera and illuminated button, photographed in the makerspace.',caption:'The physical prototype documented in the thesis: front surface, depth camera and illuminated button.'},
  meta: [
    ['Role','Individual thesis: research, analysis, interaction design, fabrication and programming'],
    ['Research context','ARISE at Mungret Park, University of Limerick and community partners'],
    ['Output','48-block indoor proof of concept'],
    ['Supervisor','Dr Cristiano Storni'],
    ['Evaluation','Small formative sessions across four prototype stages'],
  ],
  stack:['Research through Design','Interviews & co-design','Thematic analysis','Python','Arduino','Intel RealSense','PCA9685','FreeCAD','Affinity Designer','Laser cutting','3D printing'],
  gallery:[
    {src:'media/leiriu-cardboard.jpg',alt:'Hand-cut cardboard blocks at different depths forming a face-like relief, with a proposed pause-button position.',caption:'Cardboard first: could depth and shadow suggest a face before I bought the electronics?'},
    {src:'media/leiriu-six.jpg',alt:'The small MDF and servo prototype used to test the moving linkage.',caption:'The six-servo build: proving the push–pull mechanism, then finding its spacing problems.'},
    {src:'media/leiriu-frame.jpg',alt:'Laser-cut MDF support and guide structure for the larger Léiriú prototype.',caption:'Scaling the structure: stacked guides, tiers and room for a much larger set of actuators.'},
    {src:'media/leiriu-circuit.jpg',alt:'The thesis circuit diagram connecting the controller, button, power distribution and servo driver boards.',caption:'The system behind the surface: sensing, control, drivers and separately distributed servo power.'},
  ],
  body:[
    {kind:'prose',heading:'It started in a park. It became a question about participation.',text:[
      'Léiriú grew out of ARISE, a University of Limerick initiative developing an inclusive sensory environment at Mungret Park with community partners. My starting ideas were practical: tactile entrance maps, clearer navigation, textured routes and sound cues for people with visual impairments.',
      'The interviews, workshops and observations changed the question. Reaching a destination was only part of inclusion. People also wanted choice, independence, predictability and the freedom to participate in ways that suited them. A space could be technically accessible and still make someone feel that they had never been considered.',
      'The park research, the early wayfinding concepts and the moving-block installation are stages of this one design journey. The direction became a shared artwork that responds to a person, rather than another instruction telling them how to use a space.',
    ]},
    {kind:'prose',heading:'The mirror question gave that idea a form.',text:[
      'During an informal design consultation, a PhD student described a blind relative who wished she could know how her face looked in a mirror. That conversation was a design influence, not a formal research interview. It gave a tangible direction to ideas already emerging from the research: agency, self-perception and meaningful sensory engagement.',
      'I began exploring a portrait made from depth instead of a flat image. A camera could sense the person in front of it; a surface of individually moving blocks could respond; a pause button could let that response become something you approach and explore.',
      'The aim was a shared experience with several ways in. Watching from a distance, moving in front of it, noticing its quiet sound, pressing the button or feeling the paused surface could all count as participation. There did not need to be one correct interaction.',
    ]},
    {kind:'table',heading:'Turning research into design decisions',intro:'I used Braun and Clarke’s six-phase thematic-analysis process to move from transcripts, workshop material and observation notes to five connected themes. I kept the later prototype-test notes separate from that interview analysis.',columns:['What the research kept returning to','What it changed in Léiriú'],rows:[
      ['Choice and control','A visitor can observe, approach, pause or leave. The button makes a change of pace possible.'],
      ['Different sensory preferences','Keep sound local and restrained, allow movement to pause, and offer several ways to engage.'],
      ['Clear information supports independence','Explain what the installation does and make its controls and invitation understandable.'],
      ['Touch and movement can carry meaning','Make a changing relief, with a frozen state that can be explored rather than only watched.'],
      ['Place-based meaning needs context','Treat harp, Celtic and Ogham-inspired forms as proposals to explain and co-design, not universally readable symbols.'],
    ]},
    {kind:'steps',heading:'What happens when someone approaches?',items:[
      '**Notice.** In the ambient Wave state, the blocks move gently. A person can stay at a distance and simply watch.',
      '**Meet the surface.** In Portrait mode, an Intel RealSense depth camera samples 48 regions. The software translates those measurements into block positions, creating a deliberately low-resolution response.',
      '**Choose to pause.** The illuminated button changes the interaction state. Freeze holds the last positions rather than continuing to follow the camera.',
      '**Explore.** The paused relief invites closer visual or tactile exploration. The thesis identifies locating the button, safe touch and preventing unexpected movement during touch as priorities for further in-person testing.',
    ],after:['These are the three states documented in the thesis version: Wave, Portrait and Freeze. The physical response is not an exact facial scan, and the project does not claim that everyone can recognise a portrait by touch.']},
    {kind:'table',heading:'Four prototypes. Four different questions.',columns:['What I built','What it taught me'],rows:[
      ['Hand-cut cardboard relief','Two viewers recognised a face-like arrangement through shadow and depth. That justified testing a mechanism; it did not establish tactile recognition.'],
      ['Six-servo MDF mechanism','The hand-bent linkage converted servo rotation into push–pull motion. Spacing, colliding servo horns, a small scale and an unclear purpose exposed what the next version needed.'],
      ['Sixteen-servo / 4×4 grid','Closer blocks and more movement helped the idea read. Finger-jointed shells caught on guides, so I moved to smoother 3D-printed parts and staggered the servos.'],
      ['48-block, four-tier build','The mechanism became a larger physical surface, with a depth camera, driver boards and a button. Assembly tests checked individual servos and partial groups while power capacity limited simultaneous loading.'],
    ]},
    {kind:'prose',heading:'The part behind the moving blocks',text:[
      'Small, affordable rotary servos do not move in a straight line. I made Z-shaped wire linkages to turn their rotation into the short linear motion of each block. Different linkage lengths and staggered mounts let the mechanism fit behind the surface without neighbouring servo horns colliding.',
      'I designed smoother guide and block components in FreeCAD for 3D printing, and laid out MDF frames and guide plates in Affinity Designer for laser cutting. What looked like a simple grid from the front became a problem of spacing, friction, alignment, access and replaceable parts behind it.',
      'Python handled the camera input, depth processing and state logic, using pyrealsense2, NumPy, OpenCV, PySerial and Pygame. Arduino handled the button and communication with PCA9685 servo drivers. Smoothing the targets helped the blocks glide toward a response instead of snapping abruptly.',
    ]},
    {kind:'broke',heading:'The things that pushed back',items:[
      '**The blocks caught on the guides.** Finger-jointed laser-cut shells created too much friction. I changed the parts and kept testing the fit rather than assuming a successful CAD drawing meant a successful mechanism.',
      '**The servos needed more room than the grid suggested.** Closely packed horns collided. Staggered mounting heights, different linkage lengths and additional guide structure made the layout more workable.',
      '**More sound was not the answer.** The mechanism could overpower the added piano, and a blind participant cautioned against extra environmental noise. The response needed to stay quiet and local.',
      '**A person nearly pushed a block into the grid.** That moment made robustness, clearer instructions and safe touch concrete design concerns, rather than details to consider after finishing.',
      '**Power limited what I could verify.** The thesis records checking servos individually and running approximately 12–14 together with the available 5 V / 3 A supply. Those checks should not be presented as proof of full-array behaviour under sustained load.',
    ]},
    {kind:'prose',heading:'What testing could tell me, and what it could not',text:[
      'Testing was formative: short sessions and handwritten notes used to decide what to change before the next build. The thesis records two viewers at the cardboard stage, two at the six-servo stage, two at the sixteen-servo stage and feedback from three people on the later build. These sessions were separate from the P1–P7 interview analysis.',
      'One blind participant joined remotely. His discussion of rising surfaces supported the relevance of the idea, and his concern about noise sharpened the acoustic decisions. A video call could not test what the actual relief felt like, how safely someone would touch it, or whether a portrait could be recognised through touch.',
      'The result is a physical proof of concept worth evaluating further. In-person tactile testing, reachable controls, safe stopping behaviour, stronger mechanisms and long-term reliability remain essential next steps.',
    ]},
    {kind:'prose',heading:'Where the project can go next',text:[
      'The block surface also opens questions about letters, arrows, simple shapes, contrasting textures and culturally grounded forms such as a harp or Ogham-inspired strokes. The thesis describes these as proposed directions beyond its three-state build. Each needs to be made and tested before being treated as a dependable output.',
      'A permanent installation at Mungret Park is a future possibility. The prototype documented in the thesis was developed indoors and was not a weatherproof public installation. Outdoor use would require a different level of enclosure, reliability and engineering.',
    ]},
    {kind:'list',heading:'What I learned',items:[
      'How to let research change the problem instead of using it to decorate a solution I had already chosen.',
      'How to connect interview themes to specific controls, movement choices and sensory decisions.',
      'How to move between code, mechanisms, fabrication and a visitor’s experience.',
      'How to turn a failed part or a confused reaction into the next prototype’s brief.',
      'How to distinguish an encouraging response, a working mechanism and a claim that still needs evidence.',
    ]},
  ],
  sourceNote:'Based on the supplied thesis PDF, particularly Chapters 1, 3–7 and the future-work discussion. The photographs and circuit diagram are extracted from the thesis. ARISE / Mungret Park is presented as Léiriú’s research and design context, not as a separate portfolio project.',
};
