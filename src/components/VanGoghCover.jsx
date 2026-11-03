import React from 'react';
import {PaintBurst} from './PaintStrokes.jsx';

export default function VanGoghCover({project}){
  const play=()=>{
    const film=document.querySelector('#vg-film video');
    film?.scrollIntoView({block:'center',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    film?.focus({preventScroll:true});
  };
  return <header className="study__head vg-cover">
    <div className="vg-cover__edition"><span>{project.kicker}</span><span>INDIVIDUAL PROJECT / {project.year}</span></div>
    <div className="vg-cover__copy">
      <p className="vg-cover__pretitle">A SMALL TRIBUTE TO A BIG INSPIRATION</p>
      <h1 className="study__title" tabIndex={-1} aria-label={project.title}><span className="vg-cover__small">The Ghost of</span><span>Van</span><span>Gogh.</span></h1>
      <p className="study__q">A ghost, a piano,<br/>and a lot of candlelight.</p>
      <button type="button" className="vg-cover__play" onClick={play}>Watch my animation <span aria-hidden="true">↘</span></button>
    </div>
    <div className="vg-cover__collage">
      <div className="vg-cover__sun" aria-hidden="true"><PaintBurst origin="moon"/><span className="vg-cover__moon-paint"/></div>
      <figure className="vg-cover__render"><img src={project.media.poster} alt="A still from my Blender animation: candles surrounding the glass pianist in the amphitheatre."/><figcaption>A scene from my final animation.</figcaption></figure>
      <div className="vg-cover__flower" aria-hidden="true"><PaintBurst origin="flower"/><img className="vg-cover__iris" src="media/vangogh-painted-irises-cutout.png" alt=""/></div>
      <span className="vg-cover__side" aria-hidden="true">COLOUR / LIGHT / LEARNING TO MAKE THINGS MOVE</span>
    </div>
    <div className="study__quick-facts vg-cover__facts">{project.meta.slice(0,3).map(([label,value])=><div key={label}><span>{label}</span><p>{value}</p></div>)}</div>
  </header>;
}
