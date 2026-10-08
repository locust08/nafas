import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
const text = await fs.readFile(path.join(os.tmpdir(),'nafas-source-requests.txt'),'utf8');
const urls = [...new Set(text.match(/https:\/\/s3-alpha-sig\.figma\.com\/img\/[^\s]+/g)||[])];
const results=[];
for(let i=0;i<urls.length;i+=6){await Promise.all(urls.slice(i,i+6).map(async url=>{const parts=new URL(url).pathname.split('/'); const hash=parts.slice(-3).join('-');const response=await fetch(url);if(!response.ok){results.push({hash,status:response.status});return;} const data=Buffer.from(await response.arrayBuffer());await fs.writeFile(`public/sites/nafas/assets/${hash}`,data);results.push({hash,bytes:data.length,source:'Figma prototype original image'});}));}
await fs.writeFile('docs/research/nafas/asset-manifest.json',JSON.stringify(results,null,2));console.log(`Downloaded ${results.filter(x=>x.bytes).length} source images.`);
