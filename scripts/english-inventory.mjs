import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
const files = [];
function walk(dir) { for (const entry of fs.readdirSync(dir, { withFileTypes: true })) { const file = path.join(dir, entry.name); if (entry.isDirectory()) walk(file); else if (/\.tsx?$/.test(file)) files.push(file); } }
['src/app', 'src/components/sites/nafas', 'src/lib/nafas'].forEach(walk);
const texts = new Set();
for (const file of files) { const source = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX); function visit(node) { if (ts.isJsxText(node) || ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node) || ts.isTemplateHead(node) || ts.isTemplateMiddle(node) || ts.isTemplateTail(node)) { const text = node.text.trim().replace(/\s+/g, ' '); if (/[A-Za-z]/.test(text) && !/^(?:@|\/|https?:|\.\/|\.\.\/|mailto:|tel:)/.test(text) && (text.includes(' ') || /^[A-Z][a-z]+$/.test(text))) texts.add(text); } ts.forEachChild(node, visit); } visit(source); }
fs.writeFileSync('docs/research/english-text-inventory.json', JSON.stringify([...texts], null, 2));
console.log(texts.size);

