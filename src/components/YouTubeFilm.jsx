import React from 'react';
export default function YouTubeFilm({film}){
  return <figure className="study-film youtube-film"><h3>{film.title}</h3><div className="youtube-film__frame"><iframe src={`https://www.youtube-nocookie.com/embed/${film.id}?rel=0`} title={film.title} loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></div><figcaption>{film.caption}</figcaption><a className="inline-link" href={`https://www.youtube.com/watch?v=${film.id}`} target="_blank" rel="noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a></figure>;
}
