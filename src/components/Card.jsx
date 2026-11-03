import React from 'react';
export default function Card({project,index,lens,onOpen}) {
  const {media,terminal}=project;
  return <article className={`project-card project-card--${project.id} ${index===0?'project-card--lead':''} ${lens==='coder'?'project-card--code':''}`}>
    <a className="project-card__link" href={`#project=${project.id}`} aria-labelledby={`title-${project.id}`} onClick={e=>{if(!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey&&e.button===0){e.preventDefault();onOpen(project.id);}}}>
      <div className="project-card__visual">
        {media.type==='video'?<><img className="depth-media" data-depth={index===0?30:18} draggable="false" src={media.poster} alt={media.alt} loading="lazy"/><span className="project-card__film mono">FILM <span aria-hidden="true">↗</span></span></>:media.type==='image'?<img className="depth-media" data-depth={index===0?30:18} draggable="false" src={media.src} alt={media.alt} loading="lazy"/>:<div className={`engineering-cover depth-layer engineering-cover--${project.id}`} data-depth="12" aria-hidden="true"><span className="mono">FRONT-END ENGINEERING / {project.year}</span><strong>{project.title}</strong><div>{(terminal||project.stack.slice(0,3)).map((line,i)=><span key={i}>{line}</span>)}</div><span className="engineering-cover__mark">{String(index+1).padStart(2,'0')}</span></div>}
      </div>
      <div className="project-card__body"><p className="project-card__meta mono"><span>{project.kicker}</span><span>{project.year}</span></p><div className="project-card__title"><h3 id={`title-${project.id}`}>{project.title}</h3><span aria-hidden="true">↗</span></div><p className="project-card__description">{project.standfirst}</p><ul className="chips">{project.stack.slice(0,3).map(s=><li key={s}>{s}</li>)}</ul><span className="project-card__open editorial-link">View case study <span aria-hidden="true">↗</span></span></div>
    </a>
  </article>;
}
