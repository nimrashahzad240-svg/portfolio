import React,{useEffect,useRef,useState} from 'react';
import Frosty from './Frosty.jsx';

const skills=[
  {name:'React',group:'engineering',note:'Production front ends and interactive web interfaces.'},
  {name:'JavaScript',group:'engineering',note:'Interface behaviour, state and browser interactions.'},
  {name:'HTML & CSS',group:'engineering',note:'Semantic, responsive interfaces across screens.'},
  {name:'SCSS / SASS',group:'engineering',note:'Maintainable styling for commerce interfaces.'},
  {name:'Responsive UI',group:'engineering',note:'Layouts that work across devices and viewport sizes.'},
  {name:'Accessibility',group:'engineering',note:'Keyboard support, focus behaviour and labelled controls.'},
  {name:'SFCC / PWA Kit',group:'engineering',note:'Five years of production commerce front-end work.'},
  {name:'Headless commerce',group:'engineering',note:'Commerce experiences built with React and PWA Kit.'},
  {name:'Chakra UI',group:'engineering',note:'Component-based interfaces in the earlier portfolio.'},
  {name:'Git / GitHub',group:'engineering',note:'Source control and web delivery workflows.'},
  {name:'Figma',group:'design',note:'Interface design and interactive prototypes.'},
  {name:'User research',group:'design',note:'Interviews, focus groups and participatory workshops.'},
  {name:'Prototyping',group:'design',note:'From paper concepts to working digital and physical prototypes.'},
  {name:'Wireframing',group:'design',note:'Exploring structure and flows before visual detail.'},
  {name:'User flows',group:'design',note:'Mapping how people move through an experience.'},
  {name:'Usability testing',group:'design',note:'Think-aloud, co-discovery and testing with participants.'},
  {name:'Interaction design',group:'design',note:'Behaviour across screens, objects and public spaces.'},
  {name:'Information architecture',group:'design',note:'Making features, navigation and content easier to understand.'},
  {name:'Thematic analysis',group:'design',note:'Turning qualitative research into useful design themes.'},
  {name:'Visual design',group:'design',note:'Typography, colour and interface composition.'},
  {name:'Unity & AR',group:'creative',note:'An interactive gallery deployed to an iPhone.'},
  {name:'Blender / 3D',group:'creative',note:'Modelling, animation and material exploration.'},
  {name:'Arduino & servos',group:'creative',note:'Sensing, movement and the Léiriú tactile portrait.'},
  {name:'Digital fabrication',group:'creative',note:'Laser cutting, 3D printing and physical iteration.'},
];

function Paw({className=''}){
  return <svg className={className} viewBox="0 0 64 64" aria-hidden="true"><g fill="currentColor" stroke="currentColor" strokeWidth="1.5"><ellipse cx="13" cy="23" rx="7" ry="10" transform="rotate(-24 13 23)"/><ellipse cx="27" cy="14" rx="7" ry="10" transform="rotate(-8 27 14)"/><ellipse cx="43" cy="16" rx="7" ry="10" transform="rotate(12 43 16)"/><ellipse cx="55" cy="29" rx="6" ry="9" transform="rotate(27 55 29)"/><path d="M13 46c1-8 11-19 19-18 9 0 20 11 21 19 2 12-9 14-20 10-11 5-22 2-20-11z"/></g><path d="M25 41c4-4 12-4 16 1" fill="none" stroke="var(--paw-line,#fff5e8)" strokeWidth="2.5" strokeLinecap="round"/></svg>;
}

export default function SkillPlayground(){
  const [mode,setMode]=useState('explore'),[stack,setStack]=useState([]),[phase,setPhase]=useState('aim'),[activeSkill,setActiveSkill]=useState(skills[0]),[best,setBest]=useState(0);
  const [note,setNote]=useState('Drag a skill, or tap one to see where I use it.');
  const arena=useRef(null),chips=useRef([]),positions=useRef([]),pieceNode=useRef(null),pawNode=useRef(null),controls=useRef(null),drag=useRef(null),dragged=useRef(false),round=useRef(0);
  useEffect(()=>{if(mode==='game')pawNode.current?.focus({preventScroll:true});},[mode]);
  useEffect(()=>{
    const el=arena.current,motion=matchMedia('(prefers-reduced-motion: reduce)');
    let frame=0,visible=false,last=0,lastWidth=0,box={width:el.clientWidth,height:el.clientHeight};
    let game={phase:'aim',landed:[],offset:round.current*8%skills.length,x:0,y:65,vy:0,clock:0,manual:false};
    const W=170,H=32,STEP=36,GOAL=8;
    const renderExplore=()=>positions.current.forEach((p,i)=>{if(chips.current[i])chips.current[i].style.transform=`translate3d(${p.x}px,${p.y}px,0) rotate(${p.r}deg)`;});
    const layout=()=>{
      box={width:el.clientWidth,height:el.clientHeight};
      if(mode==='explore'){
        let x=12,y=22,rowHeight=0;
        positions.current=chips.current.map((node,i)=>{const w=node.offsetWidth,h=node.offsetHeight;if(x+w>box.width-12&&x>12){x=12;y+=rowHeight+14;rowHeight=0;}const p={x,y,w,h,r:i%3===0?-1.4:i%3===1?1.2:0};x+=w+16;rowHeight=Math.max(rowHeight,h);return p;});
        el.style.height=`${Math.max(260,y+rowHeight+38)}px`;renderExplore();
      }else{
        box.height=el.clientHeight;
        game.x=Math.max(12,Math.min(box.width-W-12,game.x));
        if(game.landed.length){game.landed=game.landed.map((p,i)=>({...p,x:Math.max(12,Math.min(box.width-W-12,p.x)),y:box.height-25-H-i*STEP}));setStack([...game.landed]);}
      }
    };
    const draw=()=>{
      if(pieceNode.current)pieceNode.current.style.transform=`translate3d(${game.x}px,${game.y}px,0)`;
      if(pawNode.current)pawNode.current.style.transform=`translate3d(${game.x+W/2-25}px,2px,0)`;
    };
    const finishDrop=()=>{
      const support=game.landed.at(-1)||{x:box.width/2-110,w:220};
      const overlap=Math.min(game.x+W,support.x+(support.w||W))-Math.max(game.x,support.x);
      if(overlap>=W*.55){
        const landed={skill:skills[(game.offset+game.landed.length)%skills.length],x:game.x,y:box.height-25-H-game.landed.length*STEP,w:W};
        game.landed.push(landed);setStack([...game.landed]);setBest(b=>Math.max(b,game.landed.length));
        if(game.landed.length===GOAL){game.phase='won';setPhase('won');setNote('Eight skills stacked. Frosty approves. Play again for the next set.');}
        else{game.phase='aim';game.x=12;game.y=65;game.vy=0;game.clock=-Math.PI/2;game.manual=false;setActiveSkill(skills[(game.offset+game.landed.length)%skills.length]);setPhase('aim');setNote(`${game.landed.length} of ${GOAL} stacked. Line up the next skill and tap the paw.`);}
      }else{game.phase='miss';setPhase('miss');}
    };
    const paint=time=>{
      frame=0;if(!visible||mode!=='game')return;
      const dt=Math.min(.035,(time-last)/1000||.016);last=time;
      if(game.phase==='aim'&&!game.manual&&!motion.matches){game.clock+=dt*(1.3+game.landed.length*.12);game.x=12+(Math.sin(game.clock)*.5+.5)*(box.width-W-24);}
      if(game.phase==='fall'||game.phase==='miss'){
        game.vy+=1400*dt;game.y+=game.vy*dt;
        const target=box.height-25-H-game.landed.length*STEP;
        if(game.phase==='fall'&&game.y>=target){game.y=target;finishDrop();}
        if(game.phase==='miss'&&game.y>=box.height-25-H){game.y=box.height-25-H;game.phase='over';setPhase('over');setNote(`That one missed. You stacked ${game.landed.length} of ${GOAL}. Give Frosty another go.`);}
      }
      draw();if(game.phase==='aim'||game.phase==='fall'||game.phase==='miss')frame=requestAnimationFrame(paint);
    };
    const schedule=()=>{if(!frame&&visible&&mode==='game')frame=requestAnimationFrame(paint);};
    const restart=()=>{game={phase:'aim',landed:[],offset:round.current*8%skills.length,x:(box.width-W)/2,y:65,vy:0,clock:0,manual:false};setStack([]);setPhase('aim');setActiveSkill(skills[game.offset]);setNote('Tap or click anywhere on the page to drop. Arrow keys aim; Space drops. Stack eight.');draw();schedule();};
    const drop=()=>{
      if(game.phase!=='aim')return;game.phase='fall';game.vy=0;setPhase('fall');
      if(motion.matches){game.y=box.height-25-H-game.landed.length*STEP;finishDrop();if(game.phase==='miss'){game.phase='over';setPhase('over');setNote(`You stacked ${game.landed.length} of ${GOAL}. Try again.`);}draw();}
      schedule();
    };
    controls.current={drop,restart:()=>{round.current++;restart();},move:direction=>{if(game.phase!=='aim')return;game.manual=true;game.x=Math.max(12,Math.min(box.width-W-12,game.x+direction*12));draw();}};
    const tapScreen=event=>{if(mode!=='game'||!visible||event.defaultPrevented||event.target.closest('button,a,input,textarea,select,summary,[role="button"]'))return;drop();};
    window.addEventListener('click',tapScreen);
    const resize=new ResizeObserver(()=>{if(el.clientWidth===lastWidth)return;lastWidth=el.clientWidth;layout();draw();});resize.observe(el);
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;last=0;if(visible)schedule();else{cancelAnimationFrame(frame);frame=0;}});observer.observe(el);
    layout();if(mode==='game')restart();
    return()=>{cancelAnimationFrame(frame);resize.disconnect();observer.disconnect();window.removeEventListener('click',tapScreen);controls.current=null;};
  },[mode]);
  const startDrag=(e,index)=>{const p=positions.current[index];if(!p)return;e.currentTarget.setPointerCapture(e.pointerId);drag.current={index,dx:e.clientX-p.x,dy:e.clientY-p.y,sx:e.clientX,sy:e.clientY};dragged.current=false;};
  const moveDrag=e=>{const d=drag.current;if(!d)return;const p=positions.current[d.index];if(Math.abs(e.clientX-d.sx)+Math.abs(e.clientY-d.sy)>5)dragged.current=true;p.x=Math.max(8,Math.min(arena.current.clientWidth-p.w-8,e.clientX-d.dx));p.y=Math.max(8,Math.min(arena.current.clientHeight-p.h-8,e.clientY-d.dy));chips.current[d.index].style.transform=`translate3d(${p.x}px,${p.y}px,0) rotate(${p.r}deg)`;};
  const keys=e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();controls.current?.move(e.key==='ArrowLeft'?-1:1);}else if(e.key===' '||e.key==='Enter'){e.preventDefault();controls.current?.drop();}};
  const begin=()=>{if(mode==='game')controls.current?.restart();else setMode('game');};
  return <div className="skill-playground skill-stacker"><div className="skill-playground__head"><div><p className="mono">BEFORE YOU GO / A LITTLE ROOM TO PLAY</p><p id="play-instructions">{mode==='game'?'Tap or click the screen. Stack eight skills.':'A few things I bring to a team. Move them around.'}</p></div><div className="stacker-controls"><button className="skill-paw-start" onClick={begin}><Paw/>{mode==='game'?'Restart stack':'Stack with Frosty'}</button>{mode==='game'&&<button className="stacker-explore" onClick={()=>{setMode('explore');setNote('Drag a skill, or tap one to see where I use it.');}}>Explore all skills</button>}</div></div><div ref={arena} className={`skill-arena skill-arena--${mode}`} aria-label={mode==='game'?'Frosty skill stacking game':'Movable portfolio skills'} aria-describedby="play-instructions">
    {mode==='explore'?skills.map((skill,i)=><button key={skill.name} ref={el=>chips.current[i]=el} className={`skill-chip skill-chip--${skill.group}`} onPointerDown={e=>startDrag(e,i)} onPointerMove={moveDrag} onPointerUp={()=>drag.current=null} onPointerCancel={()=>drag.current=null} onLostPointerCapture={()=>drag.current=null} onClick={()=>{if(!dragged.current)setNote(`${skill.name}: ${skill.note}`);dragged.current=false;}} onKeyDown={e=>{const delta={ArrowLeft:[-12,0],ArrowRight:[12,0],ArrowUp:[0,-12],ArrowDown:[0,12]}[e.key];if(!delta)return;e.preventDefault();const p=positions.current[i];p.x=Math.max(8,Math.min(arena.current.clientWidth-p.w-8,p.x+delta[0]));p.y=Math.max(8,Math.min(arena.current.clientHeight-p.h-8,p.y+delta[1]));chips.current[i].style.transform=`translate3d(${p.x}px,${p.y}px,0) rotate(${p.r}deg)`;}}><span aria-hidden="true">{skill.group==='engineering'?'⌘':skill.group==='design'?'↗':'✳'}</span>{skill.name}</button>):<><div className="stacker-score"><span>{stack.length} / 8 STACKED</span><span>BEST {best}</span></div><div className="stacker-guide" aria-hidden="true"/><div className="stacker-platform" aria-hidden="true"/>{stack.map((item,i)=><div key={i} className={`stack-skill skill-chip--${item.skill.group}`} style={{transform:`translate3d(${item.x}px,${item.y}px,0)`}}>{item.skill.name}</div>)}{phase!=='won'&&<div ref={pieceNode} className={`stack-skill stack-skill--active skill-chip--${activeSkill.group}`}>{activeSkill.name}</div>}<button ref={pawNode} className="stack-paw" onClick={()=>controls.current?.drop()} onKeyDown={keys} aria-disabled={phase!=='aim'} aria-label={`Drop ${activeSkill.name} skill`}><Paw/></button>{(phase==='won'||phase==='over')&&<div className="stacker-result"><strong>{phase==='won'?'Paw-sitively stacked.':'A little too far.'}</strong><button onClick={begin}>Play again ↗</button></div>}<p className="stacker-keyboard">Tap / click to drop · ← → to aim · Space works too</p></>}
    </div><div className="skill-playground__after"><p className="skill-playground__caption" role="status">{note}</p><Frosty className="frosty--skills"/></div>{mode==='game'&&<p className="stacker-skill-index">{skills.map(s=>s.name).join(' · ')}</p>}</div>;
}
