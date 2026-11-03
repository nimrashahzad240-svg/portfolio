import React,{useState} from 'react';
import {NimraCharacter} from './NimraJourney.jsx';

const answers=[
  ['Design or development?','Yes.','I can help shape the experience, then build the interface. The interesting part is where those two meet.'],
  ['Why another degree?','Curiosity got expensive.','I left a senior front-end role for an MSc in Interaction and Experience Design. Now the ideas occasionally need servos.'],
  ['What are you looking for?','A good problem. A good team.','Product design and front-end engineering roles. I’m also open to game design and development, especially where Unity, AR and 3D meet.'],
  ['What is it like working with you?','Expect a few “what ifs”.','I like understanding the reason behind a decision, sharing ideas early, and turning feedback into something we can try.'],
  ['What happens off screen?','The paint comes out.','Portraits, colour, materials and my art practice, Meraki. Sometimes the best way to think through a digital problem is to make something physical.'],
  ['Any known weaknesses?','“One more tiny adjustment.”','Especially when the spacing is almost right. I’m learning when to put the brush down. The browser tab situation remains under investigation.'],
];

export default function BeforeYouAsk(){
  const [aside,setAside]=useState(false);
  return <section className="before-ask page-width" aria-labelledby="before-title"><div className="before-ask__intro"><p className="eyebrow">A FEW THINGS ABOUT THE HUMAN</p><h2 id="before-title">Before<br/>you <em>ask…</em></h2><button className="before-ask__character" aria-pressed={aside} onClick={()=>setAside(!aside)} aria-label="Ask mini Nimra what she is thinking"><NimraCharacter pose={3}/><span className="before-ask__bubble">{aside?'Frosty supervises. I pay the bills.':'Mini me. Full-sized curiosity.'}</span><span className="mono">TAP FOR AN UNNECESSARY COMMENT ↗</span></button></div><div className="before-ask__grid">{answers.map(([question,punchline,detail],i)=><article key={question}><span className="mono">0{i+1}</span><h3>{question}</h3><p className="before-ask__punchline">{punchline}</p><p>{detail}</p></article>)}</div></section>;
}
