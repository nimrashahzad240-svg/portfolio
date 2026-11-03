import React from 'react';
import './wearable-studies.css';

export function WearableBackdrop({solara}){
  if(!solara)return <div className="skin-aura" aria-hidden="true"><span/><span/><span/></div>;
  const cells=[];
  for(let row=0;row<13;row++)for(let col=0;col<13;col++){
    const x=col*68+(row%2)*34,y=row*59;
    const r=25+8*Math.sin(col*.55+row*.35);
    const points=Array.from({length:6},(_,i)=>{const a=(i*60-30)*Math.PI/180;return [x+Math.cos(a)*r,y+Math.sin(a)*r]});
    const top=points.map(p=>p.join(',')).join(' ');
    const sides=[points[1],points[2],points[3],...points.slice(1,4).reverse().map(([a,b])=>[a+7,b+10])].map(p=>p.join(',')).join(' ');
    cells.push(<g key={`${row}-${col}`} opacity={.3+.5*(col/13)}><polygon points={sides} fill="#132d40" stroke="#7c9ba8" strokeWidth=".6"/><polygon points={top} fill={row%3?'#12242f':'#1e3441'} stroke="#77a7bd" strokeWidth="1"/><polygon points={points.map(([a,b])=>[x+(a-x)*.79,y+(b-y)*.79].join(',')).join(' ')} fill="#07151e" stroke="#497486" strokeWidth=".6"/></g>);
  }
  return <div className="solara-mesh" aria-hidden="true"><svg viewBox="0 0 900 850" focusable="false">{cells}</svg></div>;
}

export default function WearableCover({project}){
  const solara=project.id==='solara';
  const facts=solara?[['Structure','Laser-cut hexagon tiles'],['Light','Arduino-controlled LEDs'],['Stage','Form + lighting prototype']]:[['Gesture','A hug at the dummy'],['Response','Warmth + light, proposed'],['Stage','Group concept']];
  return <header className={`study__head wear-cover wear-cover--${project.id}`}>
    <div className="wear-cover__edition"><span>{project.kicker}</span><span>{project.year} / {solara?'MATERIAL EXPLORATION':'EMOTIONAL CONNECTION'}</span></div>
    <span className="wear-cover__outline" aria-hidden="true">{solara?'SOLARA':'FEEL'}</span>
    <div className="wear-cover__copy"><p className="eyebrow">{solara?'LIGHT, FROM WITHIN.':'PRESENCE, ACROSS A DISTANCE.'}</p><h1 className="study__title" tabIndex={-1}>{project.title}</h1><p className="study__q">{project.question}</p><p className="wear-cover__intro">{solara?'A sculptural body. A skirt that had to learn to move. A light that comes from inside.':'A gesture in one place. A feeling in another. An idea about offering comfort without crossing someone’s boundaries.'}</p></div>
    <figure className="wear-cover__visual"><div className="wear-cover__image"><img src={project.media.src} alt={project.media.alt}/></div><figcaption>{project.media.caption}</figcaption></figure>
    <aside className="wear-cover__note" aria-label="Interaction at a glance">{facts.map(([label,text])=><div key={label}><span>{label}</span><p>{text}</p></div>)}</aside>
    <div className="study__quick-facts wear-cover__facts">{project.meta.slice(0,3).map(([label,value])=><div key={label}><span>{label}</span><p>{value}</p></div>)}</div>
  </header>;
}
