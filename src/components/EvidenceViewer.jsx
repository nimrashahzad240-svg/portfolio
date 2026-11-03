import React,{useEffect,useRef,useState} from 'react';

export default function EvidenceViewer({image,onClose}){
  const dialog=useRef(null),[zoom,setZoom]=useState(false);
  useEffect(()=>{
    const previous=image.opener||document.activeElement,overflow=document.body.style.overflow;
    document.body.style.overflow='hidden';dialog.current.showModal();
    return()=>{document.body.style.overflow=overflow;queueMicrotask(()=>previous?.isConnected&&previous.focus({preventScroll:true}));};
  },[]);
  return <dialog ref={dialog} className={`evidence-viewer ${zoom?'is-zoomed':''}`} aria-label={image.title} onCancel={e=>{e.preventDefault();onClose();}} onClose={onClose} onContextMenu={e=>e.preventDefault()} onDragStart={e=>e.preventDefault()} onClick={e=>{if(e.target===e.currentTarget)onClose();}}><div className="evidence-viewer__bar"><p>{image.title}</p><div><button aria-pressed={zoom} onClick={()=>setZoom(!zoom)}>{zoom?'Fit image':'Zoom in +'}</button><button onClick={onClose} aria-label="Close image viewer">Close ×</button></div></div><div className="evidence-viewer__scroll"><img src={image.src} alt={image.alt} draggable="false"/></div></dialog>;
}
