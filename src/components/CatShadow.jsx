import React from 'react';

export default function CatShadow({className=''}) {
  return <span className={`cat-shadow ${className}`} data-depth="24" aria-hidden="true">
    <img src="media/real-cat-shadow.webp" alt="" draggable="false" width="1024" height="1536"/>
  </span>;
}
