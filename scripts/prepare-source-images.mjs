import fs from 'node:fs/promises';
import sharp from 'sharp';
const root='public/sites/nafas/assets';
const source='.source-assets/raw';
const sourceIndex=JSON.parse(await fs.readFile('docs/research/nafas/image-index.json','utf8'));
const entries=[];
for(const item of sourceIndex){const file=item.file.replace(/\.webp$/,'');try{const meta=await sharp(`${source}/${file}`).metadata();await sharp(`${source}/${file}`).resize({width:2000,withoutEnlargement:true}).webp({quality:88}).toFile(`${root}/${item.file}`);entries.push({...item,width:meta.width,height:meta.height});}catch{}}
await fs.writeFile('docs/research/nafas/image-index.json',JSON.stringify(entries,null,2));
for(let start=0;start<entries.length;start+=25){const batch=entries.slice(start,start+25);const layers=[];for(let j=0;j<batch.length;j++){const e=batch[j];const img=await sharp(`${root}/${e.file}`).resize(200,150,{fit:'contain',background:'#eaeaea'}).png().toBuffer();layers.push({input:img,left:(j%5)*220,top:Math.floor(j/5)*180});layers.push({input:Buffer.from(`<svg width="220" height="25"><text x="8" y="18" font-size="16">${e.index}: ${e.width} x ${e.height}</text></svg>`),left:(j%5)*220,top:Math.floor(j/5)*180+150});}await sharp({create:{width:1100,height:900,channels:3,background:'#ffffff'}}).composite(layers).png().toFile(`docs/research/nafas/contact-sheet-${start/25}.png`);}
console.log(`Optimized ${entries.length} images and made contact sheets.`);
