import fs from 'node:fs/promises';import os from 'node:os';
const text=await fs.readFile(os.tmpdir()+'/nafas-video-segments.txt','utf8');const line=text.split('\n').find(x=>x.trim().startsWith('"'));const manifest=JSON.parse(line);const urls=manifest.split('\n').filter(x=>x.startsWith('https://'));
const chunks=[];for(const url of urls){const r=await fetch(url);if(!r.ok)throw new Error(String(r.status));chunks.push(Buffer.from(await r.arrayBuffer()));}await fs.writeFile(os.tmpdir()+'/nafas-hero.ts',Buffer.concat(chunks));console.log(`Downloaded ${urls.length} source video segments`);
