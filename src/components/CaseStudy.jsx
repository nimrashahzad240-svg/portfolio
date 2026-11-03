import React, { useEffect, useRef } from 'react';
import Section from './Section.jsx';
import './project-themes.css';
import ProjectTimeline from './ProjectTimeline.jsx';
import YouTubeFilm from './YouTubeFilm.jsx';
import MediaPlayer from './MediaPlayer.jsx';
import VanGoghSky from './VanGoghSky.jsx';
import VanGoghCover from './VanGoghCover.jsx';
import JblEras from './JblEras.jsx';
import './jbl.css';
import PaintStrokes from './PaintStrokes.jsx';
import UbuntuOcean from './UbuntuOcean.jsx';

export default function CaseStudy({project, onClose, onNext, next}) {
  const panel = useRef(null);
  const {media} = project;
  useEffect(() => {
    window.scrollTo(0,0);
    panel.current?.querySelector('h1')?.focus({preventScroll:true});
    document.title=`${project.title}, Nimra Shahzad`;
    return()=>{document.title='Nimra Shahzad — Design & Development';};
  },[project.id]);
  const videos=project.videos || (project.video?[project.video]:[]);
  const blocks = project.body.filter(b => b.kind !== 'note' || !/add |expand |embed |short version|still being built/i.test(b.text || ''));
  return <div className={`study study--page study--${project.id}`} ref={panel} aria-label={`${project.title}, case study`}>
    {project.id==='ubuntu'&&<UbuntuOcean/>}
    {project.id==='van-gogh'&&<VanGoghSky/>}
    {project.id==='van-gogh'&&<PaintStrokes/>}
    <div className="study__bar"><button onClick={onClose} className="study__back">← Back to selected work</button><span className="mono">{project.title}</span><a href="#work" className="study__close" onClick={e=>{e.preventDefault();onClose();}}>All work ↗</a></div>
    <article className="study__inner">{project.id==='van-gogh'?<VanGoghCover project={project}/>:<header className="study__head"><span className="eyebrow">{project.kicker} / {project.year}</span><h1 className="study__title" tabIndex={-1}>{project.title}</h1><p className="study__q">{project.question}</p><div className="study__quick-facts">{project.meta.slice(0,3).map(([label,value]) => <div key={label}><span>{label}</span><p>{value}</p></div>)}</div></header>}
      {media.type !== 'none' && <figure id={project.id==='van-gogh'?'vg-film':undefined} className={`study__hero ${project.id === 'leiriu' ? 'study__hero--physical' : ''}`}>{media.type === 'video' ? <MediaPlayer key={media.src} tabIndex={project.id==='van-gogh'?0:undefined} src={media.src} poster={media.poster} controls playsInline preload="metadata" aria-label={media.alt}/> : <img src={media.src} alt={media.alt}/>} {media.caption && <figcaption>{media.caption} {media.credit&&<a href={media.credit.url} target="_blank" rel="noreferrer">{media.credit.label} ↗</a>}</figcaption>}</figure>}
      <div className="study__layout"><div className="study__body"><p className="study__standfirst">{project.standfirst}</p>
        {project.summary&&<dl className="study-summary">{project.summary.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
        {project.timeline&&<ProjectTimeline timeline={project.timeline}/>}
        {project.system&&<section className="study-system" aria-labelledby="system-title"><p className="eyebrow">THE SYSTEM AT A GLANCE</p><h2 id="system-title">Presence → physical response.</h2><ol>{project.system.map(([title,text])=><li key={title}><strong>{title}</strong><p>{text}</p></li>)}</ol></section>}
        {blocks.map((block,i) => <Section key={i} block={block}/>)}
        {project.youtubeVideos?.map(film=><YouTubeFilm key={film.id} film={film}/>)}
        {videos.length>0&&<section className="study__films" aria-label="Project films"><p className="eyebrow">PRESS PLAY / THE WORK IN MOTION</p>{videos.map((v,i)=><figure className="study-film" key={v.src}>{v.title&&<h3>{v.title}</h3>}<MediaPlayer src={v.src} poster={v.poster} controls playsInline preload="metadata" aria-label={v.alt||v.title||`${project.title} film ${i+1}`}/>{v.caption&&<figcaption>{v.caption}</figcaption>}</figure>)}</section>}
        {project.team&&<section className="study-team" aria-labelledby="team-title"><p className="eyebrow">MADE TOGETHER</p><h3 id="team-title">Team Echo Capsule</h3><p>Our illustrated team portraits, explored as part of the avatar concept.</p><ul>{project.team.map(person=><li key={person.name}><img src={person.src} alt={`${person.name}’s illustrated team portrait`} loading="lazy"/><span>{person.name}</span></li>)}</ul></section>}
        {project.eras && <JblEras eras={project.eras}/>}
        {project.gallery && !project.eras && <section className="study__gallery"><p className="eyebrow">A CLOSER LOOK</p><h3>{project.galleryTitle||<>From the sketchbook<br/><em>to the screen.</em></>}</h3><ul className="screens">{project.gallery.map(shot => <li key={shot.src}><figure><img src={shot.src} alt={shot.alt} loading="lazy"/><figcaption>{shot.caption}</figcaption></figure></li>)}</ul></section>}
        {project.demo && <figure className="study-demo"><MediaPlayer src={project.demo} controls playsInline preload="metadata" aria-label="Echo Capsule Figma prototype walkthrough"/><figcaption>Recorded Figma prototype walkthrough. Designed interactions; not a released app.</figcaption></figure>}
        {project.links&&<nav className="study__links" aria-label="Project resources">{project.links.map(link=><a className="report-link" key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</nav>}
        {next && <div className="study__next"><span className="eyebrow">ANOTHER STORY FROM THE STUDIO</span><button type="button" onClick={() => onNext(next.id)}>{next.title}<span aria-hidden="true">→</span></button></div>}
      </div><aside className="study__aside"><p className="eyebrow">PROJECT NOTES</p><div className="facts"><dl>{project.meta.map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div><p className="eyebrow">THE TOOLBOX</p><ul className="chips">{project.stack.map(s => <li key={s}>{s}</li>)}</ul><button onClick={onClose} className="inline-link">Back to all work <span aria-hidden="true">↗</span></button></aside></div>
    </article>
  </div>;
}
