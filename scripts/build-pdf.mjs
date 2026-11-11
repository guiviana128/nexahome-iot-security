import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
const root = process.cwd();
const source = join(root, 'report', 'relatorio-tecnico.md');
const output = join(root, 'report', 'relatorio-tecnico.pdf');
const md = await readFile(source, 'utf8');
function clean(s) {
  return s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)')
    .replace(/\*\*/g, '').replace(/`/g, '')
    .replace(/[→]/g, '->').replace(/[—–]/g, '-')
    .replace(/[“”]/g, '"').replace(/[‘’]/g, "'")
    .replace(/§/g, 'sec.').replace(/[^\u0000-\u00FF]/g, '?');
}
function wrap(s, limit=92) {
  const words=s.split(/\s+/); const result=[]; let line='';
  for (const word of words) {
    if (!word) continue;
    if ((line+' '+word).trim().length>limit && line) { result.push(line); line=''; }
    if (word.length>limit) {
      if (line) { result.push(line); line=''; }
      for(let i=0;i<word.length;i+=limit) result.push(word.slice(i,i+limit));
    } else line=(line+' '+word).trim();
  }
  if(line)result.push(line);return result.length?result:[''];
}
const blocks=[];
for(const raw of md.split(/\r?\n/)){
  const s=raw.trim(); if(!s) { blocks.push({kind:'space'}); continue; }
  if(s.startsWith('```'))continue;
  if(/^\|[-: |]+\|$/.test(s))continue;
  const heading=s.match(/^(#{1,3})\s+(.*)$/);
  if(heading){blocks.push({kind:'heading',level:heading[1].length,text:clean(heading[2])});continue;}
  if(s.startsWith('|')){blocks.push({kind:'table',text:clean(s.split('|').slice(1,-1).map(x=>x.trim()).join('  |  '))});continue;}
  blocks.push({kind:'text',text:clean(s)});
}
const pages=[];let page=[],y=785;
function newPage(){if(page.length)pages.push(page);page=[];y=785;}
for(const b of blocks){
  if(b.kind==='space'){y-=4;continue;}
  const size=b.kind==='heading'?(b.level===1?17:b.level===2?12:10):b.kind==='table'?8:9;
  const step=size+4;
  const lines=wrap(b.text,b.kind==='heading'?75:b.kind==='table'?104:92);
  const need=lines.length*step+(b.kind==='heading'?8:2);
  if(y-need<70)newPage();
  if(b.kind==='heading')y-=5;
  for(const line of lines){page.push({x:48,y,size,bold:b.kind==='heading',text:line});y-=step;}
  y-=b.kind==='heading'?7:2;
}
if(page.length)pages.push(page);
function pdfString(s){return '('+s.replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)')+')';}
const objects=[];
const add=s=>{objects.push(s);return objects.length;};
const catalog=add('');
const pagesObj=add('');
const regular=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
const bold=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
const refs=[];
pages.forEach((entries,i)=>{
  const ops=entries.map(l=>`BT /${l.bold?'F2':'F1'} ${l.size} Tf 1 0 0 1 ${l.x} ${l.y} Tm ${pdfString(l.text)} Tj ET`);
  ops.push(`BT /F1 8 Tf 1 0 0 1 48 38 Tm ${pdfString('NexaHome Lab S1 | Estudo simulado | Pagina '+(i+1)+' de '+pages.length)} Tj ET`);
  const stream=ops.join('\n')+'\n';
  const content=add(`<< /Length ${Buffer.byteLength(stream,'latin1')} >>\nstream\n${stream}endstream`);
  const p=add(`<< /Type /Page /Parent ${pagesObj} 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${regular} 0 R /F2 ${bold} 0 R >> >> /Contents ${content} 0 R >>`);
  refs.push(p+' 0 R');
});
objects[catalog-1]=`<< /Type /Catalog /Pages ${pagesObj} 0 R >>`;
objects[pagesObj-1]=`<< /Type /Pages /Kids [${refs.join(' ')}] /Count ${refs.length} >>`;
let chunks=[Buffer.from('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n','latin1')],offsets=[0];
for(let i=0;i<objects.length;i++){offsets.push(Buffer.concat(chunks).length);chunks.push(Buffer.from((i+1)+' 0 obj\n'+objects[i]+'\nendobj\n','latin1'));}
const xref=Buffer.concat(chunks).length;
let trailer='xref\n0 '+(objects.length+1)+'\n0000000000 65535 f \n';
for(let i=1;i<offsets.length;i++)trailer+=String(offsets[i]).padStart(10,'0')+' 00000 n \n';
trailer+='trailer\n<< /Size '+(objects.length+1)+' /Root '+catalog+' 0 R >>\nstartxref\n'+xref+'\n%%EOF\n';
chunks.push(Buffer.from(trailer,'latin1'));
await mkdir(dirname(output),{recursive:true});
await writeFile(output,Buffer.concat(chunks));
console.log(JSON.stringify({output,pages:pages.length,bytes:Buffer.concat(chunks).length,objects:objects.length}));
