import React from 'react';
export default function ProjectTimeline({timeline}){
  const go=id=>{const target=document.getElementById(`journey-${id}`);target?.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});target?.querySelector('h3')?.focus({preventScroll:true});};
  return <section className="journey" aria-labelledby="journey-title">
    <header className="journey__intro"><p className="eyebrow">THE MAKING OF LÉIRIÚ / A VISUAL TIMELINE</p><h2 id="journey-title">{timeline.title}</h2><p>{timeline.intro}</p></header>
    <nav className="journey__nav" aria-label="Jump to a project stage">{timeline.items.map((item,i)=><button key={item.id} onClick={()=>go(item.id)}><span>{String(i+1).padStart(2,'0')}</span>{item.phase.split(' / ')[1]}</button>)}</nav>
    <ol className="journey__list">{timeline.items.map((item,i)=><li id={`journey-${item.id}`} className="journey__stage" key={item.id}>
      <span className="journey__marker" aria-hidden="true">{String(i+1).padStart(2,'0')}</span>
      <div className="journey__content"><p className="eyebrow">{item.phase} <span>· {item.period}</span></p><h3 tabIndex={-1}>{item.title}</h3><p>{item.text}</p>
        <div className={`journey__photos ${item.images.length>1?'journey__photos--pair':''}`}>{item.images.map(img=><figure key={img.src}><img src={img.src} alt={img.alt} loading="lazy"/><figcaption>{img.caption}</figcaption></figure>)}</div>
        <p className="journey__lesson"><span>WHAT CHANGED</span>{item.lesson}</p>
      </div>
    </li>)}</ol>
  </section>;
}
