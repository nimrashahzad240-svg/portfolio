import {useEffect} from 'react';

// Only nearby layers are measured. Scrolling schedules one paint, with smaller
// distances on narrow screens and a still layout when reduced motion is set.
export default function useScrollDepth(viewKey) {
  useEffect(()=>{
    const layers=[...document.querySelectorAll('[data-depth]')];
    const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
    const visible=new Set();let frame=0;
    const paint=()=>{
      frame=0;
      for(const el of visible){
        if(motion.matches){el.style.setProperty('--depth-y','0px');continue;}
        const rect=el.getBoundingClientRect();
        // Read the untransformed position, so the layer never feeds its own
        // previous transform back into the next scroll position.
        const previous=parseFloat(el.style.getPropertyValue('--depth-y'))||0;
        const middle=rect.top-previous+rect.height/2;
        const progress=Math.max(-1,Math.min(1,(window.innerHeight*.5-middle)/(window.innerHeight*.75)));
        const distance=Number(el.dataset.depth)||0;
        const mobile=window.innerWidth<=720 ? .45 : 1;
        el.style.setProperty('--depth-y',`${(progress*distance*mobile).toFixed(2)}px`);
      }
    };
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(paint);};
    const observer=new IntersectionObserver(entries=>{
      for(const entry of entries){if(entry.isIntersecting)visible.add(entry.target);else visible.delete(entry.target);}
      schedule();
    },{rootMargin:'200px'});
    layers.forEach(el=>observer.observe(el));
    const preference=()=>{layers.forEach(el=>el.style.setProperty('--depth-y','0px'));schedule();};
    window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);
    motion.addEventListener('change',preference);
    return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);motion.removeEventListener('change',preference);layers.forEach(el=>el.style.removeProperty('--depth-y'));};
  },[viewKey]);
}
