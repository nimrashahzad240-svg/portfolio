export const contactRecipient='nimra.shahzad240@gmail.com';
// Public delivery address; this is never a password or API credential.
export const contactFormAction=`https://formsubmit.co/${contactRecipient}`;

// Header fields never contain control characters or extra mail recipients.
export const cleanHeader=(value,max=160)=>String(value??'').replace(/[\u0000-\u001f\u007f]+/g,' ').trim().slice(0,max);
const encodeField=value=>encodeURIComponent(Array.from(value,char=>char.length===1&&char.charCodeAt(0)>=0xd800&&char.charCodeAt(0)<=0xdfff?'\ufffd':char).join(''));

export function contactDraft({name='',subject='',message=''}={}){
  const title=cleanHeader(subject);
  const body=`${String(message).replace(/\r\n?/g,'\n').trim().slice(0,5000)}\n\n${cleanHeader(name,100)}`;
  return {subject:title,body,mailto:`mailto:${contactRecipient}?subject=${encodeField(title)}&body=${encodeField(body)}`};
}
