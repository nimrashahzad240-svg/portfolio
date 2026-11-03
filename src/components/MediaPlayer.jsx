import React, {useRef} from 'react';
export default function MediaPlayer({src,...props}){
  const player=useRef(null);
  const initialise=()=>{if(player.current){player.current.defaultMuted=false;player.current.muted=false;player.current.volume=1;}};
  return <video {...props} ref={player} key={src} src={src} controls playsInline controlsList="nodownload noremoteplayback" disableRemotePlayback preload="metadata" onContextMenu={e=>e.preventDefault()} onDragStart={e=>e.preventDefault()} onLoadedMetadata={initialise}/>;
}
