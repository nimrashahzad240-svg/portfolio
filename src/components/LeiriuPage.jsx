import React,{useEffect,useRef} from 'react';
import MediaPlayer from './MediaPlayer.jsx';
import Halftone from './Halftone.jsx';
import ReflectionBlocks from './ReflectionBlocks.jsx';
import {earlyIdeas,buildStages,debugLoops,interactionStates,futureDirections} from '../data/leiriu-journey.js';
import './leiriu.css';

function SlideDetail({src,crop,alt}){
  return <svg className="lei-slide-detail" viewBox={crop.join(' ')} role="img" aria-label={alt} preserveAspectRatio="xMidYMid meet"><title>{alt}</title><image href={`media/${src}`} width="2000" height="1125"/></svg>;
}
function WorkshopMap({src,alt}){
  return <svg className="lei-workshop-map" viewBox="0 0 1014 760" role="img" aria-label={alt}><title>{alt}</title><image href={`media/${src}`} width="760" height="1014" transform="translate(0 760) rotate(-90)"/></svg>;
}
function Chapter({number,children}){return <p className="lei-chapter"><span>{number}</span>{children}</p>;}
function Fold({number,label,children}){
  const [open,setOpen]=React.useState(false);
  return <div className={`lei-fold${open?' is-open':''}`}>
    <button type="button" className="lei-fold__bar" aria-expanded={open} onClick={()=>setOpen(o=>!o)}>
      <span className="lei-fold__n">{number}</span>
      <span className="lei-fold__label">{label}</span>
      <span className="lei-fold__sign" aria-hidden="true"><i/><i/></span>
      <span className="sr-only">{open?'Collapse this chapter':'Expand this chapter'}</span>
    </button>
    <div className="lei-fold__body"><div className="lei-fold__inner">{children}</div></div>
  </div>;
}
function FixLoop({fixed,problem,next}){return <dl className="lei-loop"><div><dt>What I fixed</dt><dd>{fixed}</dd></div><div><dt>The new problem</dt><dd>{problem}</dd></div><div><dt>What I tried next</dt><dd>{next}</dd></div></dl>;}
const chapters=[
  ['research','How it started','Mungret Park, ARISE, seven interviews'],
  ['ideas','Early ideas','Maps, paths, and the turn towards a wall'],
  ['making','The prototypes','Cardboard to 48 moving blocks'],
  ['interaction','How it works','Depth camera, Python, Arduino, motors'],
  ['dawn','DAWN','Three days exhibiting at UL'],
  ['future','What’s next','A denser grid, and outdoors'],
];

export default function LeiriuPage({project,onClose,onNext,next}){
  const panel=useRef(null);
  useEffect(()=>{
    window.scrollTo(0,0);panel.current?.querySelector('h1')?.focus({preventScroll:true});
    document.title='Léiriú, Nimra Shahzad';
    return()=>{document.title='Nimra Shahzad, The Creative Studio';};
  },[]);
  const jump=id=>{const target=document.getElementById(`lei-${id}`);target?.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});target?.querySelector('h2')?.focus({preventScroll:true});};
  return <article className="lei-page" ref={panel} aria-label="Léiriú, case study">
    <div className="lei-top lei-wrap"><button className="study__back" onClick={onClose}>← All work</button><span>MSC THESIS / 2026</span></div>
    <header className="lei-hero lei-wrap">
      <div className="lei-hero-heading"><div><p className="lei-label">DESIGN · ELECTRONICS · CODE</p><h1 className="study__title lei-title" tabIndex={-1}><Halftone text="LÉIRIÚ"/></h1></div><p>An interactive artwork<br/>you can watch, pause<br/><em>and explore by touch.</em></p></div>
      <div className="lei-intro"><h2>A reflection made<br/>from moving blocks.</h2><p>{project.standfirst}</p></div>
      <figure className="lei-cover"><img src={project.media.src} alt={project.media.alt} fetchPriority="high"/><figcaption>{project.media.caption}<span>LÉIRIÚ / EXPRESSION OR REPRESENTATION</span></figcaption></figure>
      <dl className="lei-facts">{project.meta.map(([key,value])=><div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl>
    </header>
    
    

    <section className="lei-section lei-wrap" id="lei-research" aria-labelledby="lei-research-title">
      <Fold number="01" label="HOW IT STARTED">
      <h2 className="lei-question" id="lei-research-title" tabIndex={-1}>It started at Mungret Park.</h2>
      <div className="lei-research-grid"><figure><img src="media/leiriu-arise-boards.jpg" alt="ARISE workshop boards with ideas about communication, creativity, senses, independence and navigation." loading="lazy"/><figcaption>ARISE workshop boards. The wider project looked at an inclusive outdoor space at Mungret Park.</figcaption></figure><div className="lei-copy"><h3>I wanted to work on inclusive spaces in Ireland.</h3><p>I worked with ARISE, a UL collaboration with Autism@UL, Dóchas Midwest Autism Support and Limerick City and County Council. It was a chance to work with people on a space they might actually use.</p><p>I contributed to interviews, workshops, focus groups and observations. For my thesis, I analysed seven interviews, including a remote interview I conducted in Urdu.</p><p>I began with finding your way around the park. As I listened, I became more interested in what someone could do once they got there: watch, listen, touch or choose to sit something out.</p></div></div>
      <div className="lei-research-decisions"><span className="lei-label">WHAT I CARRIED INTO THE DESIGN</span><ul><li>Let people choose how to take part.</li><li>Keep sound quiet and local.</li><li>Explain what the button does.</li><li>Let the movement stop for touch.</li><li>Explore local meaning with people.</li></ul></div>
    
    </Fold>
    </section>

    <section className="lei-section lei-wrap lei-ideas" id="lei-ideas" aria-labelledby="lei-ideas-title">
      <Fold number="02" label="THE IDEAS BEFORE LÉIRIÚ">
      <h2 id="lei-ideas-title" tabIndex={-1}>I tried a few different directions.</h2>
      <p className="lei-section-intro">The maps and paths were useful ideas for the park. As my question changed, I moved towards a wall that people could interact with. These are the drawings and concept images from that process.</p>
      <ol className="lei-concepts">{earlyIdeas.map(idea=><li key={idea.title}><div className="lei-concept-images"><figure><img src={`media/${idea.image}`} alt={idea.alt} loading="lazy"/><figcaption>{idea.credit}</figcaption></figure>{idea.extra&&<figure className="lei-path-map"><WorkshopMap src={idea.extra} alt={idea.extraAlt}/><figcaption>{idea.extraCaption}</figcaption></figure>}</div><div className="lei-concept-copy"><span className="lei-label">{idea.label}</span><h3>{idea.title}</h3><p>{idea.try}</p><p>{idea.problem}</p><p className="lei-concept-next">{idea.next}</p></div></li>)}</ol>
      <details className="lei-idea-map"><summary>See the wider set of ideas I explored <span aria-hidden="true">+</span></summary><figure><img src="media/leiriu-early-ideas.png" alt="The early idea map from the thesis, connecting tactile maps, textured paths, sound walls, Braille boards, apps, discs and self-representation." loading="lazy"/><figcaption>My early idea map also included sound walls, Braille boards, zone markers and companion apps.</figcaption></figure></details>
    
    </Fold>
    </section>

    <section className="lei-light" id="lei-making" aria-labelledby="lei-making-title"><div className="lei-section lei-wrap">
      <Fold number="03" label="BUILDING THE PROTOTYPES">
      <div className="lei-section-heading"><h2 id="lei-making-title" tabIndex={-1}>From cardboard<br/>to 48 moving blocks.</h2><p>I knew front-end development. I had to learn the electronics and fabrication as I went. Each version made one part work and showed me what needed fixing next.</p></div>
      <ol className="lei-builds">{buildStages.map(stage=><li key={stage.id} className="lei-build" id={`lei-build-${stage.id}`}><figure className="lei-build-photo"><img src={`media/${stage.image}`} alt={stage.alt} loading="lazy"/>{stage.detail&&<details className="lei-inline-detail"><summary className="lei-detail-link">See the block that caught on its guide <span aria-hidden="true">+</span></summary><img src={`media/${stage.detail}`} alt={stage.detailAlt} draggable="false" loading="lazy"/></details>}</figure><div><p className="lei-label">{stage.number} / {stage.subtitle}</p><h3>{stage.title}</h3><FixLoop {...stage}/></div></li>)}</ol>
      <p className="lei-making-note">I used FreeCAD and 3D printing for the blocks and guides, and Affinity Designer and laser cutting for the frame and plates. The wire links were bent by hand.</p>
    
    </Fold>
    </div></section>

    <section className="lei-section lei-wrap" id="lei-interaction" aria-labelledby="lei-interaction-title">
      <Fold number="04" label="HOW IT WORKS">
      <h2 id="lei-interaction-title" tabIndex={-1}>Connecting the camera,<br/>code and motors.</h2>
      <ol className="lei-signal"><li><span>01 / CAMERA</span>Reads depth and movement</li><li><span>02 / PYTHON</span>Maps the readings to 48 cells</li><li><span>03 / ARDUINO</span>Sends the motors their positions</li><li><span>04 / BLOCKS</span>Move forwards and backwards</li></ol>
      <div className="lei-debug">{debugLoops.map(loop=><section key={loop.title}><h3>{loop.title}</h3><p>{loop.text}</p></section>)}</div>
      <details className="lei-tools"><summary>The tools I used for the code <span aria-hidden="true">+</span></summary><p>Python uses pyrealsense2, NumPy and OpenCV to process the camera readings, PySerial to send commands, and Pygame for sound and the screen. Arduino/C++ handles the button, PCA9685 servo drivers and WS2812B lights.</p></details>
      <div className="lei-state-heading"><p className="lei-label">THE FOUR MODES AT DAWN</p><h3>What the button controls.</h3></div>
      <ul className="lei-states">{interactionStates.map(state=><li key={state.title}><SlideDetail src="leiriu-states-slide.png" crop={state.crop} alt={state.alt}/><h4>{state.title}</h4><p>{state.text}</p></li>)}</ul>
      <div className="lei-outcome"><p className="lei-label">WHAT WORKED / WHAT NEEDS MORE WORK</p><h3>The surface responds.<br/><em>The face still needs work.</em></h3><p>I got the camera, motors, button, lights and sound working together. The blocks respond to movement, but the surface does not yet reliably form a recognisable face.</p><p>Short tests helped me improve each version. A blind participant joined remotely and raised questions about noise, but could not feel the blocks. I want the next tests to happen in person, including checking the raised print and Braille instruction: “PAUSE TO FEEL YOUR REFLECTION.”</p></div>
    
    </Fold>
    </section>

    <section className="lei-light" id="lei-dawn" aria-labelledby="lei-dawn-title"><div className="lei-section lei-wrap">
      <Fold number="05" label="THE EXHIBITION">
      <div className="lei-section-heading"><h2 id="lei-dawn-title" tabIndex={-1}>Léiriú at DAWN.</h2><p>I exhibited Léiriú at the University of Limerick from 26–28 August 2026. This was the build with the acrylic front, illuminated button, lights, sound and visitor screen.</p></div>
      <div className="lei-dawn-photos"><figure><img src="media/leiriu-dawn-installation.jpg" alt="Léiriú at DAWN, displayed with the project poster and visitor screen." loading="lazy"/><figcaption>The installation at DAWN.</figcaption></figure><figure><img src="media/leiriu-dawn-freeze.jpg" alt="Léiriú at DAWN holding a relief, with FREEZE on the screen behind it." loading="lazy"/><figcaption>Freeze mode at the exhibition.</figcaption></figure></div>
      <div className="lei-films">{project.videos.map(film=><figure key={film.src}><h3>{film.title}</h3><MediaPlayer src={film.src} poster={film.poster} aria-label={film.alt}/><figcaption>{film.caption}</figcaption></figure>)}</div>
      <div className="lei-after"><img src="media/leiriu-exhibition.jpg" alt="Léiriú and its poster displayed in the CSIS building after DAWN." loading="lazy"/><div><p className="lei-label">AFTER DAWN</p><h3>On display in CSIS.</h3><p>This photograph is from the later display in the CSIS building. UL also featured me with Léiriú in its exhibition coverage.</p><nav aria-label="Léiriú exhibition coverage">{project.links.map(link=><a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</nav></div></div>
    
    </Fold>
    </div></section>

    <section className="lei-light lei-grid-paper" id="lei-future" aria-labelledby="lei-future-title"><div className="lei-section lei-wrap">
      <Fold number="06" label="WHERE I WANT TO TAKE IT">
      <div className="lei-section-heading"><h2 id="lei-future-title" tabIndex={-1}>What I’d like<br/>to build next.</h2><p>I’m still interested in how far this could go. These concept visualisations from my presentation show a few directions I want to try.</p></div>
      <ul className="lei-futures">{futureDirections.map(direction=><li key={direction.title}><SlideDetail src="leiriu-future-slide.png" crop={direction.crop} alt={direction.alt}/><h3>{direction.title}</h3><p>{direction.text}</p></li>)}</ul>
      <div className="lei-next-research"><h3>First, a better<br/>moving surface.</h3><div><p>I want to try a denser grid, including the 12 × 12 version I considered, and make the blocks move more consistently. Different textures, letters, arrows, a harp or Celtic and Ogham-inspired forms are also things I’d like to test.</p><p>I’d develop these with people: checking what they can recognise, how they reach the button and surface, and how they safely pause and touch it. An outdoor version for Mungret Park would also need weatherproofing, reliable power and a plan for maintenance.</p></div></div>
    
    </Fold>
    </div></section>
    <div className="lei-wrap"><ReflectionBlocks/></div>
    <div className="lei-end lei-wrap"><button onClick={onClose}>← Back to all work</button>{next&&<button onClick={()=>onNext(next.id)}><span>NEXT PROJECT</span>{next.title} ↗</button>}</div>
  </article>;
}
