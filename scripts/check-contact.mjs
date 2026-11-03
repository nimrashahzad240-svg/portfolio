import assert from 'node:assert/strict';
import {contactDraft,contactRecipient,contactFormAction,cleanHeader} from '../src/contact-draft.js';

assert.equal(contactRecipient,'nimra.shahzad240@gmail.com');
assert.equal(contactFormAction,'https://formsubmit.co/nimra.shahzad240@gmail.com');

const attack=contactDraft({name:'Visitor\r\nCc: outsider@example.com',subject:'Hello\r\nBcc: outsider@example.com&to=other@example.com#fragment',message:'<img src=x onerror=alert(1)>\n&bcc=other@example.com\nمرحبا 👋'});
const url=new URL(attack.mailto);
assert.equal(url.protocol,'mailto:');
assert.equal(url.pathname,contactRecipient);
assert.deepEqual([...url.searchParams.keys()],['subject','body']);
assert.equal(url.hash,'');
assert.equal(url.searchParams.get('subject'),attack.subject);
assert.equal(url.searchParams.get('body'),attack.body);
assert.ok(!/[\r\n\u0000]/.test(attack.subject));
assert.ok(attack.body.includes('<img src=x onerror=alert(1)>'));
assert.ok(attack.body.includes('مرحبا 👋'));
assert.equal(cleanHeader('abc\u0000\t\r\ndef'),'abc def');
assert.equal(contactDraft({subject:'x'.repeat(500)}).subject.length,160);
assert.equal(contactDraft({message:'x'.repeat(9000),name:'y'.repeat(300)}).body.length,5102);
assert.equal(new URL(contactDraft({recipient:'outsider@example.com'}).mailto).pathname,contactRecipient);
assert.doesNotThrow(()=>contactDraft({name:'\ud800',subject:'broken \udfff',message:'x'.repeat(4999)+'💡'}));
console.log('Contact draft checks passed: fixed recipient, encoded content, control-character removal and length limits.');
