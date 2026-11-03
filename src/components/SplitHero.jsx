import React from 'react';
import HalftoneSculpture from './HalftoneSculpture.jsx';
import CatShadow from './CatShadow.jsx';

export default function SplitHero({lens,onSelect,onEnter}) {
  return <section className="editorial-hero page-width" aria-labelledby="intro-title">
    <div className="editorial-hero__running mono"><span>PRODUCT / INTERACTION / FRONT-END</span><span>IRELAND · 2026</span></div>
    <div className="editorial-hero__composition">
      <div className="editorial-hero__type depth-layer" data-depth="-22"><p className="editorial-hero__role">Product & interaction designer · Front-end engineer</p><h1 id="intro-title">Nimra<br/><em>Shahzad.</em></h1></div>
      <div className="editorial-hero__sculpture depth-layer" data-depth="76"><HalftoneSculpture lens={lens}/><span className="editorial-hero__art-note mono">FORM / EXPRESSION / SYSTEM</span></div>
      <div className="editorial-hero__intro"><p>I make things that connect people, ideas and technology.</p><p className="editorial-hero__availability"><span className="mono">OPEN TO OPPORTUNITIES</span>Product design & front-end engineering.<small>Also open to game design & development.</small></p><button className="editorial-link" onClick={()=>onEnter('all')}>Explore all selected work <span aria-hidden="true">↓</span></button></div>
      <CatShadow className="cat-shadow--editorial"/>
      <span className="editorial-hero__edition mono">ART IN THE THINKING.<br/>CODE IN THE MAKING.</span>
    </div>
    <div className="editorial-hero__paths" aria-label="Choose a practice">
      <button aria-pressed={lens==='designer'} onClick={()=>{onSelect('designer');onEnter('designer');}}><span className="mono">01 / DESIGN</span><strong>Human questions.<br/><em>Physical & digital answers.</em></strong><span className="editorial-hero__path-arrow" aria-hidden="true">↗</span></button>
      <button aria-pressed={lens==='coder'} onClick={()=>{onSelect('coder');onEnter('coder');}}><span className="mono">02 / DEVELOPMENT</span><strong>Considered interfaces.<br/><em>Carefully engineered.</em></strong><span className="editorial-hero__path-arrow" aria-hidden="true">↗</span></button>
    </div>
  </section>;
}
