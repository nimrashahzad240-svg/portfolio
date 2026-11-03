import React, {useEffect,useRef} from 'react';

// A print-like portrait built from the source's tones. Motion only runs while
// squares are responding to a pointer, and stops completely for reduced motion.
export default function HalftoneSculpture({lens}) {
  const canvas=useRef(null),host=useRef(null),pointer=useRef(null),wake=useRef(()=>{});
  useEffect(()=>{
    const cv=canvas.current,wrap=host.current;
    if(!cv||!wrap)return;
    const image=new Image();let alive=true,frame=0,points=[],width=0,height=0,dpr=1;
    const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
    const draw=()=>{
      frame=0;const ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,width,height);
      const ink=getComputedStyle(wrap).getPropertyValue('--portrait-ink').trim()||'#1c1c1b';
      const accent=getComputedStyle(wrap).getPropertyValue('--accent').trim()||'#bc4b2f';
      let unsettled=false;
      for(const p of points){
        let dx=0,dy=0;
        if(pointer.current&&!motion.matches){const x=p.x-pointer.current.x,y=p.y-pointer.current.y,d=Math.hypot(x,y);if(d<72){const force=(1-d/72)**2*17;dx=(x/(d||1))*force;dy=(y/(d||1))*force;}}
        p.dx+=(dx-p.dx)*.18;p.dy+=(dy-p.dy)*.18;
        if(Math.abs(dx-p.dx)+Math.abs(dy-p.dy)>.08)unsettled=true;
        ctx.fillStyle=lens==='coder'&&p.id%41===0?accent:ink;
        ctx.fillRect(p.x+p.dx-p.s/2,p.y+p.dy-p.s/2,p.s,p.s);
      }
      if(unsettled&&alive)frame=requestAnimationFrame(draw);
    };
    const start=()=>{if(!frame&&alive)frame=requestAnimationFrame(draw);};wake.current=start;
    const build=()=>{
      if(!alive||!image.naturalWidth)return;
      width=wrap.clientWidth;height=wrap.clientHeight;if(!width||!height)return;
      dpr=Math.min(2,window.devicePixelRatio||1);cv.width=Math.round(width*dpr);cv.height=Math.round(height*dpr);
      const sample=document.createElement('canvas');sample.width=Math.round(width);sample.height=Math.round(height);
      const ctx=sample.getContext('2d',{willReadFrequently:true});
      const scale=Math.min(width/image.naturalWidth,height/image.naturalHeight);const iw=image.naturalWidth*scale,ih=image.naturalHeight*scale;
      ctx.drawImage(image,(width-iw)/2,(height-ih)/2,iw,ih);
      const pixels=ctx.getImageData(0,0,sample.width,sample.height).data;
      const step=width<320?4:5.4;points=[];
      for(let y=step/2;y<height;y+=step)for(let x=step/2;x<width;x+=step){
        const i=(Math.floor(y)*sample.width+Math.floor(x))*4,a=pixels[i+3]/255;
        if(a<.25)continue;
        const tone=(pixels[i]*.2126+pixels[i+1]*.7152+pixels[i+2]*.0722)/255;
        const s=step*Math.pow(1-tone,.67)*1.02*a;
        if(s<.65)continue;points.push({x,y,s,dx:0,dy:0,id:points.length});
      }
      cv.dataset.ready='true';start();
    };
    image.onload=build;image.src='media/nimra-marble-portrait.webp';
    const resize=new ResizeObserver(build);resize.observe(wrap);
    return()=>{alive=false;cancelAnimationFrame(frame);resize.disconnect();image.onload=null;wake.current=()=>{};};
  },[lens]);
  return <div className="halftone-sculpture" ref={host} onPointerMove={e=>{if(e.pointerType==='touch')return;const r=e.currentTarget.getBoundingClientRect();pointer.current={x:e.clientX-r.left,y:e.clientY-r.top};wake.current();}} onPointerLeave={()=>{pointer.current=null;wake.current();}}>
    <img src="media/nimra-marble-portrait.webp" alt="" className="halftone-sculpture__fallback"/>
    <canvas ref={canvas} role="img" aria-label="A marble portrait inspired by Nimra Shahzad, rendered in square halftone marks"/>
  </div>;
}
