import React, {useCallback,useEffect,useRef,useState} from 'react';
import {projects,profile,lenses,about,meraki} from './data/portfolio.js';
import Card from './components/Card.jsx';
import CaseStudy from './components/CaseStudy.jsx';
import NimraJourney from './components/NimraJourney.jsx';
import BeforeYouAsk from './components/BeforeYouAsk.jsx';
import SkillPlayground from './components/SkillPlayground.jsx';
import ContactPage from './components/ContactPage.jsx';
import EvidenceViewer from './components/EvidenceViewer.jsx';
import MerakiPage from './components/MerakiPage.jsx';
import LeiriuPage from './components/LeiriuPage.jsx';
import useScrollDepth from './useScrollDepth.js';
const A=({children,...props})=><a {...props}>{children}<span aria-hidden="true">↗</span></a>;
const projectFromHash=()=>{const id=new URLSearchParams(window.location.hash.slice(1)).get('project');return id==='touchdesigner-studies'?'ubuntu':id;};
export default function App(){
  const initial=projects.find(p=>p.id===projectFromHash());
  const [lens,setLens]=useState(initial?.lens||'all');
  const returnLens=useRef('all');
  const selectLens=choice=>{returnLens.current=choice;setLens(choice);};
  const [page,setPage]=useState(window.location.hash==='#meraki'?'meraki':window.location.hash==='#contact'?'contact':'home');
  const [openId,setOpenId]=useState(initial?.id||null);
  const [artIndex,setArtIndex]=useState(null);
  const [evidence,setEvidence]=useState(null);
  const mainProjects=projects.filter(p=>p.group!=='mini');
  const overviewOrder=['leiriu','rent-a-center','solara','deciem','pocket-gallery','van-gogh','echo-capsule','ubuntu','indigo-canada','second-skin','karta-kiosk','jbl-advert','commerce-foundations','salto'];
  const overview=[...overviewOrder.map(id=>mainProjects.find(p=>p.id===id)).filter(Boolean),...mainProjects.filter(p=>!overviewOrder.includes(p.id))];
  const shown=lens==='all'?overview:mainProjects.filter(p=>p.lens===lens);
  const minis=projects.filter(p=>p.group==='mini');
  const current=projects.find(p=>p.id===openId);
  const group=current?projects.filter(p=>p.lens===current.lens):shown;
  const index=group.findIndex(p=>p.id===openId);
  const next=index>=0?group[(index+1)%group.length]:null;
  useScrollDepth(`${page}:${lens}:${openId||'home'}`);
  useEffect(()=>{document.documentElement.dataset.lens=page==='meraki'?'meraki':lens;},[lens,page]);
  useEffect(()=>{document.documentElement.dataset.project=current?.id||'';document.documentElement.dataset.view=current?'project':page;},[current?.id,page]);
  // one scroll variable for every parallax layer on the site
  useEffect(()=>{
    if(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)return;
    let frame=0;
    const write=()=>{frame=0;document.documentElement.style.setProperty('--sy',String(window.scrollY));};
    const onScroll=()=>{if(!frame)frame=requestAnimationFrame(write);};
    write();window.addEventListener('scroll',onScroll,{passive:true});
    return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',onScroll);};
  },[]);
  useEffect(()=>{
    const change=()=>{
      const id=projectFromHash(),p=projects.find(p=>p.id===id);
      setPage(window.location.hash==='#meraki'?'meraki':window.location.hash==='#contact'?'contact':'home');setOpenId(p?.id||null);setArtIndex(null);
      if(p){setLens(p.lens);window.scrollTo(0,0);}else{setLens(returnLens.current);}if(!p&&['#meraki','#contact'].includes(window.location.hash))window.scrollTo(0,0);else if(window.location.hash==='#work')requestAnimationFrame(()=>document.getElementById('work')?.scrollIntoView({block:'start'}));
    };
    window.addEventListener('hashchange',change);return()=>window.removeEventListener('hashchange',change);
  },[]);
  const open=useCallback(id=>{if(!current)returnLens.current=lens;window.location.hash=new URLSearchParams({project:id}).toString();setOpenId(id);},[lens,current]);
  const close=useCallback(()=>{setLens(returnLens.current);window.location.hash='work';setOpenId(null);requestAnimationFrame(()=>document.getElementById('work')?.scrollIntoView({block:'start'}));},[]);
  const home=()=>{selectLens('all');window.history.replaceState(null,'',window.location.pathname+window.location.search);setPage('home');setOpenId(null);setArtIndex(null);window.scrollTo({top:0,behavior:'smooth'});};
  const jump=(id)=>{setLens(returnLens.current);window.history.replaceState(null,'',window.location.pathname+window.location.search);setPage('home');setOpenId(null);requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}));};
  const enter=(side)=>{selectLens(side);requestAnimationFrame(()=>document.getElementById('work')?.scrollIntoView({behavior:'smooth',block:'start'}));};
  useEffect(()=>{
    if(artIndex===null)return;const previous=document.activeElement;const overflow=document.body.style.overflow;
    document.body.style.overflow='hidden';document.getElementById('art-viewer')?.showModal();
    return()=>{document.body.style.overflow=overflow;previous?.focus();};
  },[artIndex]);
  return <>
    <a className="skip" href="#work" onClick={e=>{e.preventDefault();jump('work');document.getElementById('work')?.focus({preventScroll:true});}}>Skip to the work</a>
    <header className="site-nav"><button className="brand" onClick={home} aria-label="Nimra Shahzad, home">Nimra <span className="brand__last">Shahzad</span></button><span className="nav-caption">DESIGN & DEVELOPMENT</span><nav aria-label="Main navigation"><button onClick={()=>jump('work')}>Work</button><a className="meraki-nav" href="#meraki" aria-current={page==='meraki'?'page':undefined}>Meraki <span aria-hidden="true">↗</span></a><button onClick={()=>jump('about')}>About</button><A className="nav-contact" href="#contact" aria-current={page==='contact'?'page':undefined}>Let’s talk</A></nav></header>
    <main onContextMenu={e=>{if(e.target.closest('img,video,audio,canvas,svg'))e.preventDefault();}} onDragStart={e=>{if(e.target.closest('img,video,audio,canvas,svg'))e.preventDefault();}}>{current?(current.id==='leiriu'?<LeiriuPage project={current} onClose={close} onNext={open} next={next}/>:<CaseStudy project={current} onClose={close} onNext={open} next={next}/>):page==='meraki'?<MerakiPage onView={setArtIndex} onBack={home}/>:page==='contact'?<ContactPage onBack={home}/>:<>
      <NimraJourney onEnter={enter}/>
      <section id="work" className={`work page-width work--${lens}`} tabIndex={-1} aria-labelledby="work-title"><div className="section-header"><div><p className="eyebrow">{lens==='all'?'01 / DESIGN & ENGINEERING':lens==='designer'?'01 / PRODUCT & INTERACTION DESIGN':'01 / FRONT-END ENGINEERING'}</p><h2 id="work-title"><>Selected <em>work.</em></></h2></div><p>{lens==='all'?'Product and interaction design, creative technology and production front-end engineering. Different ways of making, brought together.':lens==='designer'?'Experiences across screens, physical objects and public spaces. Starting with the people who will use them.':'Five years building production interfaces, from headless commerce to responsive front ends.'}</p></div><div className="side-work-note"><div className="practice-filter" aria-label="Filter selected work"><button aria-pressed={lens==='all'} onClick={()=>selectLens('all')}>All work <span>00</span></button><button aria-label="Product and interaction design" aria-pressed={lens==='designer'} onClick={()=>selectLens('designer')}>Design <span>01</span></button><button aria-label="Front-end engineering" aria-pressed={lens==='coder'} onClick={()=>selectLens('coder')}>Engineering <span>02</span></button></div><span className="mono">{String(shown.length).padStart(2,'0')} PROJECTS / {lens==='all'?'OVERVIEW':lens==='designer'?'DESIGN':'DEVELOPMENT'}</span></div><div className="project-grid">{shown.map((p,i)=><Card key={p.id} project={p} index={i} lens={p.lens} onOpen={open}/>)}</div>{minis.length>0&&<div className="mini-band"><div className="mini-band__head"><p className="eyebrow">ALSO IN THE SKETCHBOOK</p><h3>Other mini things<br/><em>explored.</em></h3><p>Sound, performance and the portfolio that came before this one. A few experiments from the edges of my practice.</p></div><div className="project-grid project-grid--mini">{minis.map((p,i)=><Card key={p.id} project={p} index={i} lens={p.lens} onOpen={open}/>)}</div></div>}</section>
      <section id="about" className="about page-width" aria-labelledby="about-title"><div className="about-heading depth-layer" data-depth="28"><p className="eyebrow">02 / THE PRACTICE</p><h2 id="about-title">An artist’s eye.<br/><em>An engineer’s mind.</em></h2></div><div className="about-copy"><p className="about-lede">I work where a human question meets a technical possibility.</p><p>I’m Nimra Shahzad, an interaction designer and front-end engineer based in Ireland. After five years building production interfaces, I followed my curiosity into an MSc in Interaction and Experience Design at the University of Limerick.</p><p>That took me into research, 3D modelling, AR, electronics and fabrication. My work moves between screens and physical experiences, from a responsive interface to a wall of moving blocks.</p><p>As a research assistant with ARISE, I contributed to work on more inclusive public spaces in Ireland. Alongside design and engineering, I keep an independent art practice: Meraki.</p><p>I’m open to product design and front-end engineering roles, and opportunities in game design and development that draw on my Unity, AR and 3D work.</p><a className="editorial-link" href="#meraki">Explore my art practice <span aria-hidden="true">↗</span></a></div><div className="about-facts"><div><strong>05</strong><span>Years in front-end engineering</span></div><div><strong>MSc</strong><span>Interaction & Experience Design</span></div><div><strong>Art + code</strong><span>One connected practice</span></div></div></section>

      <BeforeYouAsk/>
      <section id="recognition" className="recognition page-width" aria-labelledby="recognition-title"><p className="eyebrow">03 / RECOGNITION & RESEARCH</p><h2 id="recognition-title">Beyond the<br/><em>work itself.</em></h2><div className="recognition-grid">{about.awards.map(award=><article className="recognition-card" key={award.title}>{award.image?<figure className="recognition-shot">{award.allowEnlarge===false?<div className="recognition-image recognition-image--static"><img src={award.image} alt={award.alt} draggable="false" loading="lazy"/></div>:<button className="recognition-image" onClick={e=>setEvidence({src:award.image,alt:award.alt,title:award.title,opener:e.currentTarget})} aria-label={`Enlarge ${award.title}`}><img src={award.image} alt={award.alt} draggable="false" loading="lazy"/><span>View larger ↗</span></button>}</figure>:<span className="recognition-mark" aria-hidden="true">✳</span>}<div><h3>{award.title}</h3><p>{award.note}</p>{award.link&&<a className="inline-link" href={award.link} target="_blank" rel="noreferrer">My hackathon reflection ↗</a>}</div></article>)}{about.certifications&&<article className="recognition-card recognition-card--certs"><div><h3>{about.certifications.title}</h3><p>{about.certifications.note}</p></div><ul className="cert-list">{about.certifications.items.map(c=><li key={c.name}><button className="cert-preview" aria-label={`Enlarge ${c.name} certificate`} onClick={e=>setEvidence({src:c.image,alt:c.alt,title:c.name,opener:e.currentTarget})}><img src={c.image} alt={c.alt} loading="lazy" draggable="false"/><span>View certificate ↗</span></button><div className="cert-meta"><strong>{c.name}</strong><span>Issued {c.issued} · ID {c.id}</span></div></li>)}</ul></article>}</div></section>

      <section className="extras-section page-width"><p className="eyebrow">04 / COMMUNITY & COLLABORATION</p><ul className="extras">{about.extras.map(e => <li key={e.title}><img src={e.image} alt="" loading="lazy" style={e.focus?{objectPosition:e.focus}:undefined}/><h3>{e.title}</h3><p>{e.text}</p></li>)}</ul></section>
    </>}
      {page!=='contact'&&<section className="contact"><div className="page-width"><span className="eyebrow">A NEW PROJECT OR A DIFFERENT PERSPECTIVE?</span><div className="contact-main"><h2>Have something<br/><em>in mind?</em></h2><A className="contact-arrow" href="#contact" aria-label="Contact Nimra">Say hello</A></div><div className="contact-bottom"><p>{profile.location}<br/>Open to product design & front-end engineering.<br/>Also open to game design & development.</p><div><A href="#contact">Email</A><A href={profile.github} target="_blank" rel="noreferrer">GitHub</A><A href={meraki.instagramUrl} target="_blank" rel="noreferrer">Instagram</A></div></div><SkillPlayground/></div></section>}
    </main>
    <footer className="foot page-width"><span>© {new Date().getFullYear()} {profile.name}</span><span>DESIGN / DEVELOPMENT / ART</span><button onClick={home}>Back to the beginning ↑</button></footer>
    {evidence&&<EvidenceViewer image={evidence} onClose={()=>setEvidence(null)}/>}
    {artIndex!==null&&<dialog id="art-viewer" className="art-dialog" onContextMenu={e=>e.preventDefault()} onDragStart={e=>e.preventDefault()} aria-label={meraki.works[artIndex].title} onCancel={()=>setArtIndex(null)} onClose={()=>setArtIndex(null)} onClick={e=>{if(e.target===e.currentTarget)setArtIndex(null);}}><button className="art-close" onClick={()=>setArtIndex(null)} aria-label="Close painting">Close ×</button><img src={meraki.works[artIndex].src} alt={meraki.works[artIndex].title}/><p>{meraki.works[artIndex].title}</p></dialog>}
  </>;
}
