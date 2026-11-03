import {projects as uploaded, about as uploadedAbout} from './uploaded-projects.js';
import {about as previousAbout} from './projects.jsx';
import {leiriuJourney} from './leiriu-journey.js';
import {echoStory} from './echo-story.js';
import {kartaKiosk} from './karta-kiosk.js';
import {reactPortfolioStory} from './react-portfolio-story.js';
import {secondSkinStory} from './second-skin-story.js';
import {hackathonAward,vanGoghStory,pocketGalleryStory,jblStory} from './latest-project-stories.js';
import {arise} from './arise.js';
import {solaraStory} from './solara-story.js';
export {profile, lenses, meraki} from './projects.jsx';
export const ariseAward={
  title:'Published: Making Space',
  note:'Research assistant with ARISE, working towards a more inclusive park at Mungret. I contributed to interviews, workshops and thematic analysis, and became a co-author of Making Space. Léiriú grew from this work.',
  image:'media/arise-paper.jpg',
  alt:'Title and author list of Making Space: A Participatory Approach to Designing Inclusive Outdoor Activity Spaces, including Nimra Shahzad.',
};

export const presidentsVolunteerAward={
  title:'President’s Volunteer Award, Bronze',
  year:'2025/26',
  note:'For volunteering with the Be Mindful and Buddy programmes at the University of Limerick, 2025/26.',
  image:'media/award-presidents-volunteer.jpg',
  alt:'Nimra holding her University of Limerick President’s Volunteer Award (Bronze) certificate.',
};

export const certifications={
  title:'Salesforce certified',
  note:'Two Salesforce certifications, taken while working full time.',
  items:[
    {name:'B2C Commerce Developer',issued:'July 2021',id:'22360593',image:'media/cert-salesforce-b2c.jpg',alt:'Salesforce Certified B2C Commerce Developer certificate issued to Nimra Shahzad, July 2021.'},
    {name:'AI Associate',issued:'January 2025',id:'5617151',image:'media/cert-salesforce-ai.jpg',alt:'Salesforce Certified AI Associate certificate issued to Nimra Shahzad, January 2025.'},
  ],
};

export const about={...previousAbout, certifications, awards:[ariseAward,...[presidentsVolunteerAward,hackathonAward,uploadedAbout.awards[0]].map(award=>({...award,allowEnlarge:false}))]};

const clip = (name,title,caption) => ({src:`media/${name}.mp4`,poster:`media/${name}.jpg`,title,alt:title,caption});
const jbl = jblStory;
const soundCollage = {
  id:'audacity-collage',lens:'designer',title:'Meow, Remixed',year:'MSc studio',
  kicker:'Sound collage · Audacity',question:'A timeline can be a playground.',
  standfirst:'An Audacity experiment in cutting, arranging and layering sound. The recording opens the editing session itself, so the small decisions behind the collage stay visible.',
  media:{type:'video',...clip('audacity-collage','Audacity sound collage, recorded editing session','The supplied screen recording: clips arranged across multiple Audacity tracks. Sound plays when you press play.')},
  meta:[['Work','Sound editing and arrangement'],['Tool','Audacity'],['Evidence','Recorded editing session']],
  stack:['Audacity','Audio editing','Layering','Timing','Sound composition'],
  body:[
    {kind:'prose',heading:'Small clips, bigger personality',text:['I treated recorded sound as material to rearrange: cutting it into smaller pieces, positioning the clips on a timeline and layering tracks to build a composition. The session recording shows that process rather than hiding it behind a finished waveform.']},
    {kind:'prose',heading:'What I practised',text:['Timing becomes very concrete when you can move a clip a tiny distance and hear the rhythm change. This study was a chance to practise the relationship between an individual sound and the arrangement around it: where it enters, what overlaps it, and where to leave space.']},
    {kind:'list',heading:'Skills behind the timeline',items:['Editing and organising audio across several tracks.','Using clip placement and repetition as compositional decisions.','Listening to the arrangement as a whole while working on small edits.']},
  ],
};
const ubuntuFilms=[
  {src:'media/ubuntu.mp4',poster:'media/poster-ubuntu.jpg',title:'01 / Ubuntu: the physical installation',alt:'Hands interacting with the laser-cut forms beside the responding TouchDesigner visual.',caption:'The physical work and the digital response together: hands, light sensors, Arduino and TouchDesigner.'},
  clip('td-whale','02 / Whale particles','The purple whale particle study, part of the Ubuntu visual exploration.'),
  clip('td-particles','03 / Particle cloud','A moving field of teal, yellow and white particles, part of Ubuntu.'),
  clip('td-butterfly','04 / Butterfly tornado','The swirling particle study, brought into the same Ubuntu case study.'),
];
const updated = uploaded.map(p=>{
  if(p.id==='leiriu') return leiriuJourney;
  if(p.id==='second-skin') return secondSkinStory(p);
  if(p.id==='van-gogh') return vanGoghStory(p);
  if(p.id==='pocket-gallery') return pocketGalleryStory(p);
  if(p.id==='ubuntu') return {...p,
    kicker:'Interactive sculpture · Arduino × TouchDesigner',
    question:'Does getting closer mean connecting?',
    standfirst:'Ubuntu connects a handmade physical sculpture to a responsive digital world. Hands change the light reaching sensors in laser-cut forms; an Arduino feeds the interaction into TouchDesigner. The whale, particle cloud and butterfly tornado are part of this same project’s visual exploration.',
    media:{type:'image',src:'media/td-whale.jpg',alt:'Purple particles forming a whale against black, from the Ubuntu project.'},
    meta:[['My work','Design, fabrication, electronics and visual exploration'],['System','Light sensors → Arduino → TouchDesigner'],['Project material','Installation recording plus three particle studies']],
    stack:['Arduino','LDR light sensors','TouchDesigner','Particles','Laser cutting','Soldering','Physical computing','Interaction design'],
    videos:ubuntuFilms,
    body:[
      {kind:'prose',heading:'I am because we are',text:['Ubuntu takes its starting point from the southern African philosophy often expressed as “I am because we are”. I wanted to explore connection through an encounter someone could influence with their hands.','The work combines laser-cut wooden cubes, reaching-hand motifs, light sensors, LEDs and a digital particle response. The object and the screen belong to one experience: a physical gesture changes what is happening in the visual world.']},
      {kind:'prose',heading:'How the interaction works',text:['Hands moving over the forms change the amount of light reaching the LDR sensors. Arduino reads those changes and provides the values that feed the visual interaction in TouchDesigner. The screen gives the gesture another form through gathering, scattering and moving particles.','The relationship contains a reversal: reaching towards the work can gather the visual connection, but getting still closer can weaken it and scatter the cloud. That tension carries the project’s question, physical proximity does not automatically produce connection.']},
      {kind:'prose',heading:'What I made',text:['I worked across the hand motifs, laser-cut enclosures, assembly, electronics and soldered circuits, then the relationship between sensed action and digital response. A box, a sensor and a visual effect each had to make sense as part of the same interaction.','The three short particle videos are part of Ubuntu too. The purple whale explores a recognisable form; the coloured cloud lets individual points become a moving field; the butterfly tornado brings the particles into a swirling motion. They are collected here with the installation film so the visual exploration stays with the project it belongs to.']},
      {kind:'table',heading:'The physical and digital decisions',columns:['Design question','What I explored'],rows:[['How do you invite a hand towards an object?','Reaching-hand motifs, small approachable forms and the relationship between gesture and light.'],['How does a physical change become a readable response?','Sensor values linked to particle movement through Arduino and TouchDesigner.'],['What should connection look like?','Gathering and scattering, recognisable forms and abstract point clouds.'],['How can the project carry an idea through behaviour?','A response that changes as someone approaches, questioning whether closeness always means connection.']]},
      {kind:'prose',heading:'The challenge was the relationship',text:['The useful design problem was not simply making particles move. The response had to give a visitor something to notice and explore. The physical forms, sensor behaviour and visual choices needed to agree enough for a gesture to feel consequential.','Working on both sides made me pay attention to the whole loop: what a hand does, what the electronics register, what changes on screen and what that makes someone try next.']},
      {kind:'list',heading:'What I learned',items:['Moving between physical fabrication, soldering and a real-time visual tool.','Using light as an input that people can change with their hands.','Connecting sensor-driven behaviour to an interaction idea.','Exploring particle form and motion as part of a physical experience.','Documenting both the installation and its visual studies as one project.']},
    ],
    sourceNote:'The original Ubuntu account and installation recording are brought together with the three supplied TouchDesigner particle studies, following Nimra’s clarification that they belong to this project. No separate particle-studies project is presented.',
  };
  if(p.id==='solara') return solaraStory(p);
  if(p.id==='echo-capsule') return echoStory(p);
  if(p.id==='algorithmic-soundscape') return {...p,
    media:{type:'video',...clip('rule-based-performance','Rule-based Soundplant performance with virtual dice','The dice-controlled performance. The on-screen dice provides a rule; the keyboard triggers the samples.')},
    videos:[clip('keyboard-performance','Keyboard as an instrument','A second recording of the Soundplant keyboard performance. Both recordings have player controls and audio.')],
    body:p.body.filter(b=>b.kind!=='note'),
  };
  if(p.id==='this-portfolio') return reactPortfolioStory(p);
  return p;
});
const soundFiles={
  'media/ubuntu.mp4':'media/ubuntu-sound.mp4',
  'media/vangogh.mp4':'media/vangogh-sound.mp4',
  'media/ar-gallery.mp4':'media/ar-gallery-sound.mp4',
  'media/solara.mp4':'media/solara-sound.mp4',
  'media/audacity-collage.mp4':'media/audacity-collage-sound.mp4',
  'media/keyboard-performance.mp4':'media/keyboard-performance-sound.mp4',
  'media/rule-based-performance.mp4':'media/rule-based-performance-sound.mp4',
};
const withSound=film=>film?{...film,src:soundFiles[film.src]||film.src}:film;
// three small experiments live in their own band, below the main work
const MINI=new Set(['audacity-collage','algorithmic-soundscape','this-portfolio']);
export const projects=[...updated.slice(0,8),kartaKiosk,soundCollage,jbl,...updated.slice(8)].map(({report,sourceNote,...p})=>({...p,
  group:MINI.has(p.id)?'mini':'main',
  media:p.media.type==='video'?withSound(p.media):p.media,
  video:withSound(p.video),videos:p.videos?.map(withSound),
  links:p.links?.filter(l=>!l.url.toLowerCase().includes('.pdf')),
}));
