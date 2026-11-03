import React, { useEffect, useRef } from 'react';

/**
 * The JBL advert is one girl moving through three eras. So the page moves
 * through them too: each chapter brings its own typeface, its own palette
 * and its own year, and the whole page tints towards that era as the
 * chapter reaches the middle of the screen. Time changes while you read.
 */
export default function JblEras({ eras }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current?.closest('.study');
    if (!root) return;
    const chapters = ref.current.querySelectorAll('.era');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) root.setAttribute('data-era', entry.target.dataset.era);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    chapters.forEach((c) => io.observe(c));
    return () => {
      io.disconnect();
      root.removeAttribute('data-era');
    };
  }, [eras]);

  return (
    <div className="eras" ref={ref}>
      <div className="eras__intro">
        <p className="eyebrow">THE SAME GIRL, THREE TIMES OVER</p>
        <h3>
          The outfits change.
          <br />
          <em>The music stays.</em>
        </h3>
        <p className="eras__standfirst">
          Scroll, and the decade changes around her, the colour, the lettering, the light. The
          headphones are the one thing that never moves.
        </p>
      </div>

      {eras.map((era) => (
        <section className="era" data-era={era.n} key={era.n} aria-labelledby={`era-${era.n}`}>
          <div className="era__rule">
            <span>LOOK {String(era.n).padStart(2, '0')}</span>
            <span>{era.tag}</span>
          </div>
          <h4 className="era__year" id={`era-${era.n}`}>
            <span className="era__year-num">{era.year}</span>
            <span className="era__year-word">{era.word}</span>
          </h4>
          <div className="era__grid">
            <figure className="era__shot">
              <img src={era.src} alt={era.alt} loading="lazy" />
              <figcaption>{era.caption}</figcaption>
            </figure>
            <div className="era__copy">
              <p className="era__lead">{era.lead}</p>
              {era.text.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
              <dl className="era__spec">
                {era.spec.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      ))}

      <p className="eras__out">
        Three looks, one continuous take on the same idea: whatever the decade decides to look
        like, the way music feels does not change.
      </p>
    </div>
  );
}
