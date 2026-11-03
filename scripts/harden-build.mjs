import {readFile,writeFile,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {contactFormAction} from '../src/contact-draft.js';

const root=path.resolve('dist'),index=path.join(root,'index.html');
let html=await readFile(index,'utf8');
const hashes=[];
const scripts=[...html.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)];
for(const [tag] of scripts){
  const source=tag.match(/\bsrc="([^"]+)"/)?.[1];
  if(!source||!/^\.?\/?assets\/[\w.-]+\.js$/.test(source))throw new Error('Production scripts must be local compiled assets; inline scripts are forbidden.');
  const file=path.resolve(root,source);
  if(!file.startsWith(root+path.sep)||(await stat(file)).isDirectory())throw new Error('Invalid script asset.');
  const integrity=`sha256-${createHash('sha256').update(await readFile(file)).digest('base64')}`;
  hashes.push(`'${integrity}'`);
  html=html.replace(tag,tag.replace('<script ',`<script integrity="${integrity}" `));
}
if(hashes.length===0)throw new Error('No application bundle found.');
const policy=["default-src 'none'",`script-src ${hashes.join(' ')}`,"script-src-attr 'none'","style-src 'self' 'unsafe-inline' https://fonts.googleapis.com","font-src 'self' https://fonts.gstatic.com","img-src 'self' data:","media-src 'self' blob:","frame-src https://www.youtube-nocookie.com","connect-src 'none'","object-src 'none'","base-uri 'none'",`form-action ${contactFormAction}`,"worker-src 'none'","manifest-src 'self'"].join('; ');
const meta=`<meta http-equiv="Content-Security-Policy" content="${policy}"/><meta name="referrer" content="strict-origin-when-cross-origin"/>`;
html=html.replace(/(<meta charset="[^"]+"\s*\/?\s*>)/,`$1${meta}`);
if(!html.includes(meta))throw new Error('Unable to install production security policy.');
await writeFile(index,html);
console.log('Production policy installed: hashed scripts with integrity, blocked inline JavaScript, fixed contact-form destination and no application network requests.');
