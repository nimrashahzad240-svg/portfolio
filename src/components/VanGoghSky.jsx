import React, {useEffect,useRef} from 'react';
import './van-gogh.css';

export default function VanGoghSky(){
  const sky=useRef(null);
  useEffect(()=>{
    const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
    const page=sky.current?.closest('.study--van-gogh');
    let frame=0;
    const clamp=n=>Math.max(0,Math.min(n,1));
    const paint=()=>{
      frame=0;
      const y=Math.max(0,window.scrollY);
      sky.current?.style.setProperty('--sky-scroll',`${Math.min(y,10000)}px`);
      page?.style.setProperty('--vg-moon-progress',clamp(y/430).toFixed(3));
      page?.style.setProperty('--vg-flower-progress',clamp((y-35)/460).toFixed(3));
    };
    const scroll=()=>{if(!frame)frame=requestAnimationFrame(paint);};
    const configure=()=>{
      window.removeEventListener('scroll',scroll);
      cancelAnimationFrame(frame);frame=0;
      if(motion.matches){sky.current?.style.setProperty('--sky-scroll','0px');page?.style.setProperty('--vg-moon-progress','1');page?.style.setProperty('--vg-flower-progress','1');}
      else{paint();window.addEventListener('scroll',scroll,{passive:true});}
    };
    configure();motion.addEventListener?.('change',configure);
    return()=>{window.removeEventListener('scroll',scroll);motion.removeEventListener?.('change',configure);cancelAnimationFrame(frame);page?.style.removeProperty('--vg-moon-progress');page?.style.removeProperty('--vg-flower-progress');};
  },[]);
  return <div className="vg-sky" ref={sky} aria-hidden="true">
    <img className="vg-paint vg-paint--one" src="media/vangogh-painted-sky.png" alt=""/>
    <img className="vg-paint vg-paint--two" src="media/vangogh-painted-sky.png" alt=""/>
    <span className="vg-paper-grain"/>
  </div>;
}
