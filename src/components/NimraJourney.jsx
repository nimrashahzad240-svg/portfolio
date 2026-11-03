import React,{useEffect,useRef,useState} from 'react';
import Frosty from './Frosty.jsx';

const chapters=[
  {tag:'A CURIOUS MIND. A FEW DIFFERENT TOOLS.',name:'Hello',pose:3,title:<>Nimra<br/><em>Shahzad.</em></>,copy:'Product designer. Front-end engineer. Usually making something.',aside:'Based in Ireland. Open to product design, front-end engineering, and game design & development.'},
  {tag:'01 / THE ENGINEER',name:'Build',pose:0,title:<>From an idea<br/>to <em>it works.</em></>,copy:'Five years turning complex requirements into interfaces people can actually use.',aside:'React · Headless commerce · Production front ends'},
  {tag:'02 / THE DESIGNER',name:'Design',pose:1,title:<>A good question.<br/>A <em>better way.</em></>,copy:'Then I went back to university. To ask better questions, test ideas, and design beyond the screen.',aside:'Interaction design · Research · Prototyping'},
  {tag:'03 / THE MAKER',name:'Make',pose:2,title:<>Sometimes,<br/>the pixels <em>move.</em></>,copy:'Code became sculpture. A portrait became something you could touch. Curiosity became Léiriú.',aside:'Physical interaction · Unity & AR · Art & fabrication'},
];

export function NimraCharacter({pose=3,className=''}){
  return <span className={`nimra-character ${pose===0?'':`nimra-character--illustrated nimra-character--${({1:'design',2:'maker',3:'hello'})[pose]}`} ${className}`} data-pose={pose} style={{'--sprite-x':`${(pose%2)*100}%`,'--sprite-y':`${Math.floor(pose/2)*100}%`}} aria-hidden="true"/>;
}



export default function NimraJourney({onEnter}){
  const root=useRef(null),stage=useRef(null),current=useRef(0);
  const [chapter,setChapter]=useState(0);
  const [reduced,setReduced]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(()=>{
    const el=root.current,scene=stage.current,motion=matchMedia('(prefers-reduced-motion: reduce)');
    let frame=0,visible=true;
    const paint=()=>{
      frame=0;if(!visible)return;
      const rect=el.getBoundingClientRect(),range=Math.max(1,el.offsetHeight-scene.offsetHeight);
      const progress=Math.max(0,Math.min(1,-rect.top/range));
      const next=Math.min(chapters.length-1,Math.floor(progress*chapters.length));
      const ease=value=>{const t=Math.max(0,Math.min(1,value));return t*t*(3-2*t);};
      if(next!==current.current){current.current=next;setChapter(next);}
      scene.style.setProperty('--journey-progress',progress.toFixed(4));
      scene.style.setProperty('--frosty-x',motion.matches?'0px':`${Math.sin(progress*Math.PI*2)*7}px`);
      scene.style.setProperty('--frosty-y',motion.matches?'0px':`${Math.sin(progress*Math.PI*4)*1.5}px`);
      scene.style.setProperty('--scene-drift',motion.matches?'0':Math.sin(progress*Math.PI*6).toFixed(4));
      scene.style.setProperty('--actor-x',motion.matches?'0px':`${Math.sin(progress*Math.PI*2)*36}px`);
      scene.style.setProperty('--actor-turn',motion.matches?'0deg':`${Math.sin(progress*Math.PI*4)*3}deg`);
      scene.style.setProperty('--design-peek',motion.matches?'1':ease((progress*4-2-.06)/.32).toFixed(4));
    };
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(paint);};
    const preference=()=>{setReduced(motion.matches);schedule();};
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)schedule();});
    observer.observe(el);window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);motion.addEventListener('change',preference);paint();
    return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);motion.removeEventListener('change',preference);};
  },[]);
  const seek=index=>{
    const el=root.current,scene=stage.current;
    const range=el.offsetHeight-scene.offsetHeight;
    window.scrollTo({top:window.scrollY+el.getBoundingClientRect().top+range*(index===0?0:(index+.35)/chapters.length),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  };
  return <section ref={root} className="nimra-story" aria-label="Meet Nimra: from code to design to physical making">
    <div ref={stage} className="nimra-stage" data-chapter={chapter}>
      <div className="nimra-running mono"><span>DESIGN / ENGINEERING / A LITTLE CURIOSITY</span><span>IRELAND · OPEN TO OPPORTUNITIES <i/></span></div>
      <div className="nimra-scenes">
        {chapters.map((item,i)=><div className="nimra-chapter" key={item.name} data-active={i===chapter} aria-hidden={!reduced&&i!==chapter}>
          <div className="nimra-chapter__copy"><p className="mono">{item.tag}</p>{i===0?<h1 id="intro-title">{item.title}</h1>:<h2>{item.title}</h2>}<p className="nimra-chapter__lede">{item.copy}</p><p className="nimra-chapter__aside">{item.aside}</p></div>
          <div className="nimra-actor">{item.pose===1&&<span className="design-knee-peek" aria-hidden="true"><Frosty className="frosty--knee"/></span>}<NimraCharacter pose={item.pose}/>{item.pose===0&&<Frosty className="frosty--feet"/>}</div>
        </div>)}
        <div className="nimra-orbit nimra-orbit--code" aria-hidden="true"><span className="mono">A LITTLE LOGIC</span><pre><b>const</b> curiosity = true;<br/><b>while</b> (curiosity) {'{'}<br/>  imagine();<br/>  build();<br/>  tryAgain();<br/>{'}'}</pre><span className="nimra-terminal-cursor"/></div>
        <div className="nimra-orbit nimra-orbit--design" aria-hidden="true"><span className="mono">A DIFFERENT PERSPECTIVE</span><div className="nimra-sketch"><i/><i/><i/><span>what if?</span></div><span className="nimra-paint-swipe"/></div>
        <div className="nimra-orbit nimra-orbit--make" aria-hidden="true"><span className="mono">THE SCREEN WAS ONLY THE START.</span><div className="nimra-blocks">{Array.from({length:24},(_,i)=><i key={i} style={{'--block-i':i}}/>)}</div></div>
        <div className="nimra-ground" aria-hidden="true"><span>ART IN THE THINKING. CODE IN THE MAKING.</span></div>
        <div className="nimra-hello-note mono" aria-hidden="true">Same person.<br/>Several open tabs.<span>↙</span></div>
      </div>
      <div className="nimra-stage__foot"><nav aria-label="Introduction chapters">{chapters.map((item,i)=><button key={item.name} aria-current={chapter===i?'step':undefined} onClick={()=>seek(i)}><span>0{i+1}</span>{item.name}</button>)}</nav><button className="nimra-work-link" onClick={()=>onEnter('all')}>Skip to the work <span aria-hidden="true">↘</span></button></div>
      <div className="nimra-progress" aria-hidden="true"><span/></div>
    </div>
  </section>;
}
