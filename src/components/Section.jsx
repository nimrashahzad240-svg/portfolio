import React from "react";
import RichText from "./RichText.jsx";

const Paras = ({ lines }) =>
  (lines || []).map((line, i) => (
    <p key={i}>
      <RichText>{line}</RichText>
    </p>
  ));

/** Renders one body block of a case study by its `kind`. */
export default function Section({ block }) {
  const { kind = "prose", heading } = block;

  if (kind === "note") {
    return (
      <p className="note">
        <RichText>{block.text}</RichText>
      </p>
    );
  }

  const broke = kind === "broke";

  return (
    <section className={`sect${broke ? " sect--broke" : ""}`}>
      {heading && <h3>{heading}</h3>}

      {block.intro && (
        <p>
          <RichText>{block.intro}</RichText>
        </p>
      )}

      <Paras lines={block.text} />

      {kind === "steps" && (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>
              <span>
                <RichText>{item}</RichText>
              </span>
            </li>
          ))}
        </ol>
      )}

      {(kind === "list" || (broke && block.items)) && (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText>{item}</RichText>
            </li>
          ))}
        </ul>
      )}

      {kind === "table" && (
        <table>
          <thead>
            <tr>
              {block.columns.map((c) => (
                <th key={c} scope="col">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}><RichText>{cell}</RichText></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {kind === "iterations" && <ol className="design-iterations">{block.items.map((item,i)=><li key={item.title}><span className="design-iteration-number" aria-hidden="true">{String(i+1).padStart(2,'0')}</span><div><h4>{item.title}</h4><dl><div><dt>What we noticed</dt><dd>{item.issue}</dd></div><div><dt>{block.individual?'What I changed':'What we changed'}</dt><dd>{item.change}</dd></div><div><dt>Why</dt><dd>{item.reason}</dd></div></dl>{item.image&&<figure className="iteration-image"><img src={item.image.src} alt={item.image.alt} loading="lazy"/><figcaption>{item.image.caption}</figcaption></figure>}</div></li>)}</ol>}

      {kind === "specs" && (
        <dl className="specs">
          {block.items.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd><RichText>{value}</RichText></dd>
            </div>
          ))}
        </dl>
      )}

      <Paras lines={block.after} />
      {block.images&&<div className="process-images">{block.images.map(img=><figure key={img.src}><img src={img.src} alt={img.alt} loading="lazy"/><figcaption>{img.caption}</figcaption></figure>)}</div>}
    </section>
  );
}
