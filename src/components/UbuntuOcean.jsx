import React,{useEffect,useRef} from 'react';

// The supplied violet whale is scenery. The project photograph stays in the foreground.
export default function UbuntuOcean() {
  const ocean=useRef(null);
  useEffect(()=>{
    const el=ocean.current,motion=matchMedia('(prefers-reduced-motion: reduce)');let frame=0;
    const paint=()=>{frame=0;const rect=el.parentElement.getBoundingClientRect(),range=Math.max(1,rect.height-innerHeight),progress=motion.matches?0:Math.max(0,Math.min(1,-rect.top/range));el.style.setProperty('--ocean-rise',`${(-progress*220).toFixed(2)}px`);el.style.setProperty('--ocean-glide',`${(progress*105).toFixed(2)}px`);};
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(paint);};
    window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);motion.addEventListener('change',schedule);paint();
    return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);motion.removeEventListener('change',schedule);};
  },[]);
  return <div ref={ocean} className="ubuntu-ocean" aria-hidden="true">
    <div className="ubuntu-ocean__light" />
    <div className="ubuntu-ocean__particles ubuntu-ocean__particles--far" />
    <div className="ubuntu-ocean__particles ubuntu-ocean__particles--near" />
    <div className="ubuntu-ocean__life"><span className="ocean-creature ocean-creature--jelly"><i/></span><span className="ocean-creature ocean-creature--ray"><i/></span><span className="ocean-creature ocean-creature--fish"><i/></span></div>
    <div className="ubuntu-ocean__plankton">{Array.from({length:24},(_,i)=><i key={i} style={{left:`${(11+i*37)%100}%`,top:`${(7+i*23)%100}%`,'--speck-size':`${i%4===0?5:2}px`,'--speck-delay':`${-i*.7}s`}}/>)}</div>
    {[1,2,3,4,5].map(n=><img key={n} className={`ubuntu-ocean__whale ubuntu-ocean__whale--${n}`} src="media/ubuntu-violet-whale.webp" alt="" />)}
  </div>;
}
