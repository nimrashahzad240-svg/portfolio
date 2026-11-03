import React, {useId} from 'react';

// Short, overlapping dry-brush shapes reveal the texture of the painted asset.
// The marks stay where they are placed; scrolling adds paint to the same picture.
const marks=Array.from({length:256},(_,i)=>{
  const col=i%16,row=Math.floor(i/16),x=col*111+((i*19)%35)-17,y=row*56+((i*23)%31)-15;
  const wobble=((col*17+row*31)%11)-5;
  const distance=Math.hypot((x-1530)/1774,(y-390)/887);
  return {angle:((i*13)%23)-11,cx:x+55,cy:y+27,d:`M${x-10} ${y+5+wobble} l34 -9 28 3 41 -5 22 7 -7 10 8 9 -13 9 7 13 -24 4 -31 -3 -34 8 -30 -5 6 -12 -10 -8 8 -9Z`,start:Math.min(.9,distance*.69+((i*37)%19)/190)};
});

export default function VanGoghPaintReveal({className}){
  const id='painting'+useId().replace(/:/g,'');
  return <svg className={className} viewBox="0 0 1774 887" aria-hidden="true" focusable="false">
    <defs><mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="1774" height="887">
      {marks.map((m,i)=><path className="vg-brush-mark" data-brush-mark="" key={i} d={m.d} transform={`rotate(${m.angle} ${m.cx} ${m.cy})`} fill="white" style={{'--mark-start':m.start.toFixed(3)}}/>)}
      <rect className="vg-paint-finish" width="1774" height="887" fill="white"/>
    </mask></defs>
    <image href="media/vangogh-painted-sky.png" width="1774" height="887" mask={`url(#${id})`}/>
  </svg>;
}
