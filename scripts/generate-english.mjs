// BM markup and CSS remain the design source. Run after editing BM text or en.json.
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
const dictionary = JSON.parse(fs.readFileSync('src/lib/nafas/i18n/en.json', 'utf8'));
const normalize = text => text.trim().replace(/\s+/g, ' ');
const routes = /^\/(?:tentang-kami|perkhidmatan|produk|kelestarian|berita-media|pengedar|kerjaya|hubungi-kami)(?:\/|\?|#|$)/;
function localize(text) {
  const key = normalize(text);
  if (Object.hasOwn(dictionary, key)) return text.replace(text.trim(), dictionary[key]);
  if (text === '/') return '/en';
  if (routes.test(text)) return '/en' + text;
  return text;
}
const files = [];
function walk(dir, target) { for (const entry of fs.readdirSync(dir, { withFileTypes: true })) { if (entry.name === 'en' || entry.name === 'i18n') continue; const file = path.join(dir, entry.name), dest = path.join(target, entry.name); if (entry.isDirectory()) walk(file, dest); else if (/\.tsx?$/.test(file)) files.push([file, dest]); } }
walk('src/components/sites/nafas', 'src/components/sites/nafas/en');
walk('src/lib/nafas', 'src/lib/nafas/en');
walk('src/app', 'src/app/en');
const generated = new Map(files.map(([file, dest]) => [path.resolve(file), path.resolve(dest)]));
for (const [file, dest] of files) {
  if (file.endsWith('language-switch.tsx')) continue;
  if (file.startsWith(path.join('src','app')) && (!file.endsWith('page.tsx') || file.includes(`${path.sep}api${path.sep}`))) continue;
  let code = fs.readFileSync(file, 'utf8');
  const source = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = [];
  function visit(node) {
    if (ts.isStringLiteral(node) && (ts.isImportDeclaration(node.parent) || ts.isExportDeclaration(node.parent))) {
      let value = node.text;
      if (value.startsWith('@/components/sites/nafas/') && !value.endsWith('/language-switch') && !value.endsWith('.css')) value = value.replace('@/components/sites/nafas/', '@/components/sites/nafas/en/');
      if (value.startsWith('@/lib/nafas/') && !value.includes('/i18n/')) value = value.replace('@/lib/nafas/', '@/lib/nafas/en/');
      if (value.startsWith('.')) {
        const original = path.resolve(path.dirname(file), value);
        const resolved = ['.tsx','.ts',''].map(extension => original + extension).find(candidate => generated.has(candidate));
        const target = resolved ? generated.get(resolved).replace(/\.tsx?$/, '') : original;
        value = path.relative(path.dirname(path.resolve(dest)), target).replaceAll('\\','/');
        if (!value.startsWith('.')) value = './' + value;
      }
      if (value !== node.text) edits.push([node.getStart(source), node.end, JSON.stringify(value)]);
    } else if (ts.isJsxText(node)) {
      const translated = localize(node.text);
      if (translated !== node.text) edits.push([node.pos, node.end, translated.replaceAll("'", '&apos;')]);
    } else if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      // Property keys and technical attribute values are deliberately stable.
      const attribute = ts.isJsxAttribute(node.parent) ? node.parent.name.getText(source) : '';
      if (!['className','id','htmlFor','aria-controls','style','sizes','autoComplete','type','role'].includes(attribute) && !(ts.isPropertyAssignment(node.parent) && node.parent.name === node)) {
        const translated = localize(node.text);
        if (translated !== node.text) edits.push([node.getStart(source), node.end, JSON.stringify(translated)]);
      }
    } else if (ts.isTemplateHead(node) || ts.isTemplateMiddle(node) || ts.isTemplateTail(node)) {
      const translated = node.text === '/' ? node.text : localize(node.text);
      if (translated !== node.text) {
        const lead = ts.isTemplateHead(node) ? '`' : '}';
        const tail = ts.isTemplateTail(node) ? '`' : '${';
        edits.push([node.getStart(source), node.end, lead + translated.replaceAll('`','\\`') + tail]);
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  for (const [start, end, text] of edits.sort((a,b) => b[0]-a[0])) code = code.slice(0,start) + text + code.slice(end);
  if (file.endsWith(path.join('nafas', 'resources.ts'))) code = code.replace('process.env.NAFAS_EDUCATION_CONTENT_URL', 'process.env.NAFAS_EDUCATION_CONTENT_URL_EN');
  // English word order keeps the same highlighted span and layout structure.
  code = code.replace('center>Products <span className="green">Related</span>', 'center>Related <span className="green">Products</span>');
  code = code.replace('`Quote, ${items.length} products`', '`Quote, ${items.length} ${items.length === 1 ? "product" : "products"}`');
  fs.mkdirSync(path.dirname(dest), {recursive:true});
  fs.writeFileSync(dest, '// Generated from the BM design source by scripts/generate-english.mjs.\n' + code);
}
console.log('English pages and components generated from BM markup and shared styles.');

