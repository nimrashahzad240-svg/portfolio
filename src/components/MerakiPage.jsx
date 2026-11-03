import React,{useState} from 'react';
import {meraki} from '../data/projects.jsx';
import {NimraCharacter} from './NimraJourney.jsx';

function StudioDoodles(){
  return <svg className="mk-doodles" viewBox="0 0 640 640" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M85 125c-42-12-57 39-29 48 28 9 40-49 12-47M43 88l-8-17m55 5 4-20m26 47 22-5M498 100l15-28 11 29 31 3-23 21 6 30-26-16-26 15 7-31-22-20zM503 467c-17-33-52-18-46 9 3 20 50 40 50 40s41-30 34-50c-8-23-35-20-38 1M94 424c9-20 34-6 16 12-15 15-52 20-49 47 5 30 49 9 66 27M402 49c18-11 28-7 43 4"/><path d="m173 551 10-10m-6 29 17-4m-1-31 4-14M553 240l15 5m-19 9 7 14m-28-31-4-17"/></g></svg>;
}

export default function MerakiPage({onView,onBack}){
  const [colour,setColour]=useState(0);
  const swatches=['#bd5b49','#e3b74c','#7b9eaa'];
  const groups=meraki.collections.map(c=>({...c,items:meraki.works.map((w,i)=>({...w,i})).filter(w=>w.kind===c.id)}));
  return <section className="meraki-page meraki-studio" aria-labelledby="meraki-title" style={{'--studio-paint':swatches[colour]}}>
    <div className="page-width">
      <div className="mk-studio-top"><button className="inline-link meraki-back" onClick={onBack}>← Back to design &amp; code</button><span className="mono">NO BRIEF. JUST A LITTLE SOUL.</span></div>
      <header className="mk-studio-hero">
        <div className="mk-studio-copy"><p className="mono">NIMRA’S LITTLE ART STUDIO / EST. IN CURIOSITY</p><h1 id="meraki-title" aria-label="Meraki">{'Meraki'.split('').map((letter,i)=><span key={i}>{letter}</span>)}<span className="mk-title-star" aria-hidden="true">✳</span></h1><p className="mk-studio-definition">A little soul.<br/>A little paint.<br/><em>A piece of me.</em></p><p className="mk-studio-intro">Paintings and hand-poured candles, made with patience, curiosity and the occasional paint-covered sleeve.</p><div className="mk-studio-links"><button className="mk-studio-cta" onClick={()=>document.getElementById('mk-paint')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}>Come have a look <span aria-hidden="true">↓</span></button><a className="inline-link" href={meraki.instagramUrl} target="_blank" rel="noreferrer">Find me on Instagram ↗</a></div></div>
        <div className="mk-studio-scene"><StudioDoodles/><div className="mk-studio-blob"/><div className="mk-studio-easel" aria-hidden="true"><span>some feelings<br/>need colour.</span><i/><b/></div><NimraCharacter pose={1} className="mk-studio-artist"/><span className="mk-studio-cat-note">Frosty.<br/>Creative supervision. ↗</span><div className="mk-paint-pots" aria-label="Choose a studio paint colour">{swatches.map((shade,i)=><button key={shade} style={{'--pot':shade}} aria-label={`Use ${['coral','ochre','blue'][i]} studio paint`} aria-pressed={colour===i} onClick={()=>setColour(i)}><span/></button>)}</div></div>
      </header>
      <div className="mk-studio-ribbon"><span>MADE BY HAND</span><i aria-hidden="true">✳</i><span>KEPT CLOSE TO THE HEART</span><i aria-hidden="true">✳</i><span>NO TWO QUITE THE SAME</span></div>
      {groups.map((g,gi)=><section className={`mk-collection mk-collection--${g.id}`} key={g.id} aria-labelledby={`mk-${g.id}`}><div className="mk-collection__head"><div><p className="mk-index">0{gi+1} / {gi===0?'A FEW COLOURS, MANY FEELINGS':'SMALL BATCHES, BIG PERSONALITY'}</p><h2 id={`mk-${g.id}`}>{g.label}<span aria-hidden="true">{gi===0?'✎':'✳'}</span></h2></div><p>{g.note}<br/>{gi===0?'Tap a painting. Stay a little longer.':'Made to look almost too good to light.'}</p></div><ul className="mk-plates">{g.items.map((w,k)=><li className={`mk-plate mk-plate--${k%3}`} key={w.src}><figure><button type="button" onClick={()=>onView(w.i)} aria-label={`View ${w.title}`}><img src={w.src} alt={w.title} loading="lazy" draggable="false"/><span className="mk-plate__zoom" aria-hidden="true">↗</span></button><figcaption><span className="mk-plate__n">0{k+1}</span><span className="mk-plate__t">{w.title}</span>{w.note&&<small>{w.note}</small>}</figcaption></figure></li>)}</ul></section>)}
      <footer className="mk-studio-foot"><span className="mk-studio-foot__flower" aria-hidden="true">✳</span><p className="mono">SOMETHING FOR YOUR WALL? SOMETHING FOR YOUR SHELF?</p><h2>Let’s make<br/><em>a little something.</em></h2><p>Commissions and candle orders, over on Instagram.</p><a className="mk-studio-cta" href={meraki.instagramUrl} target="_blank" rel="noreferrer">{meraki.instagram}<span aria-hidden="true">↗</span></a></footer>
    </div>
  </section>;
}
