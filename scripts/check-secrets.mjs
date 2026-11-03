import {readdir,readFile} from 'node:fs/promises';
import path from 'node:path';

const root=path.resolve(process.argv[2]||'.');
const ignored=new Set(['.git','node_modules','dist','.sites-runtime','.sites-checkout']);
const extensions=new Set(['.js','.jsx','.mjs','.cjs','.ts','.tsx','.json','.html','.md','.css','.yml','.yaml','.txt','.env','.pem','.key']);
const rules=[
  ['private key',/-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/g],
  ['provider credential',/\b(?:ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{35,}|sk-[A-Za-z0-9_-]{24,}|AKIA[A-Z0-9]{16})\b/g],
  ['embedded credential',/\b(?:password|passwd|api[_-]?key|client[_-]?secret|access[_-]?token|secret[_-]?key)\s*[:=]\s*["']([^"'\r\n]{8,})["']/gi],
  ['credential in URL',/https?:\/\/[^\s/"'<>]+:[^\s/"'<>]+@/g],
];
const placeholder=value=>/^(?:<[^>]+>|(?:your|example|placeholder|dummy|replace|changeme|test-only)[\s_:-].*)$/i.test(value);
const findings=[];let checked=0;
async function visit(dir){
  for(const entry of await readdir(dir,{withFileTypes:true})){
    if(ignored.has(entry.name)||entry.name.startsWith('.sites-checkout-'))continue;
    const file=path.join(dir,entry.name);
    if(entry.isDirectory()){await visit(file);continue;}
    if(!entry.isFile()||(!extensions.has(path.extname(entry.name))&&!entry.name.startsWith('.env')))continue;
    const text=await readFile(file,'utf8');checked++;
    for(const [label,pattern] of rules){
      pattern.lastIndex=0;
      for(const match of text.matchAll(pattern)){
        if(label==='embedded credential'&&placeholder(match[1]))continue;
        findings.push(`${path.relative(root,file)}:${text.slice(0,match.index).split('\n').length} — ${label}`);
      }
    }
  }
}
await visit(root);
if(findings.length){
  console.error('Potential credentials detected. Values are redacted.');
  findings.forEach(f=>console.error(f));process.exitCode=1;
}else console.log(`No known embedded credential patterns found in ${checked} text files.`);
