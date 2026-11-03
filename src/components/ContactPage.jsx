import React,{useEffect,useState} from 'react';
import {contactDraft,contactRecipient,contactFormAction} from '../contact-draft.js';
import {NimraCharacter} from './NimraJourney.jsx';

export default function ContactPage({onBack}){
  useEffect(()=>{const previous=document.title;document.title='Contact Nimra Shahzad';return()=>{document.title=previous;};},[]);
  const [name,setName]=useState(''),[subject,setSubject]=useState('Hello Nimra'),[message,setMessage]=useState(''),[status,setStatus]=useState('');
  const {mailto}=contactDraft({name,subject,message});
  const copy=async()=>{try{await navigator.clipboard.writeText(contactRecipient);setStatus('Email address copied.');}catch{setStatus(`Copying is unavailable here. You can write directly to ${contactRecipient}.`);}};
  return <section className="contact-page page-width" aria-labelledby="contact-title">
    <button className="editorial-link contact-page__back" onClick={onBack}>← Back to the studio</button>
    <div className="contact-page__grid">
      <div className="contact-page__intro">
        <p className="eyebrow">A GOOD CONVERSATION IS A GOOD START.</p>
        <h1 id="contact-title">Let’s make<br/><em>something happen.</em></h1>
        <p>A role, a project, a collaboration, or just a hello. I’d love to hear what you have in mind.</p>
        <div className="contact-page__address"><a href={`mailto:${contactRecipient}`}>{contactRecipient}</a><button onClick={copy}>Copy address ↗</button></div>
        <div className="contact-page__characters"><NimraCharacter pose={3}/></div>
        <p className="contact-page__location">Ireland · Product design &amp; front-end engineering.<br/>Also open to game design &amp; development.</p>
      </div>
      <div className="contact-page__compose">
        <p className="mono">A NOTE STRAIGHT TO MY INBOX.</p>
        <h2>Say <em>hello.</em></h2>
        <p className="contact-page__explanation">Tell me what you have in mind and leave an email address I can reply to.</p>
        <form action={contactFormAction} method="POST" acceptCharset="UTF-8">
          <input type="hidden" name="_subject" value="New portfolio enquiry for Nimra"/>
          <input type="hidden" name="_template" value="table"/>
          <div className="contact-page__honeypot" aria-hidden="true"><label htmlFor="contact-website">Leave this field empty</label><input id="contact-website" type="text" name="_honey" tabIndex={-1} autoComplete="off"/></div>
          <label htmlFor="contact-name">Your name<span>01</span></label>
          <input id="contact-name" name="name" autoComplete="name" value={name} onChange={e=>setName(e.target.value)} required maxLength={100} pattern={'.*\\S.*'} placeholder="What should I call you?"/>
          <label htmlFor="contact-email">Your email<span>02</span></label>
          <input id="contact-email" name="email" type="email" autoComplete="email" inputMode="email" required maxLength={254} placeholder="you@company.com"/>
          <label htmlFor="contact-subject">Subject<span>03</span></label>
          <input id="contact-subject" name="subject" value={subject} onChange={e=>setSubject(e.target.value)} required maxLength={160} pattern={'.*\\S.*'}/>
          <label htmlFor="contact-message">Your message<span>04</span></label>
          <textarea id="contact-message" name="message" value={message} onChange={e=>setMessage(e.target.value)} required minLength={10} maxLength={5000} rows={7} placeholder="Tell me a little about the role, project or idea…"/>
          <p id="contact-privacy" className="contact-page__hint">Sending shares your name, email and message with FormSubmit for delivery to me. You’ll complete a spam check on their page. Please don’t include passwords or sensitive information.</p>
          <div className="contact-page__actions">
            <button className="contact-compose-link" type="submit" aria-describedby="contact-privacy">Send message <span aria-hidden="true">↗</span></button>
            <a className="inline-link" href={mailto}>Use my email app instead ↗</a>
          </div>
        </form>
        <p className="contact-page__status" role="status">{status}</p>
      </div>
    </div>
  </section>;
}
