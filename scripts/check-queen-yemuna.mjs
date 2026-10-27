import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import vm from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = readFileSync(resolve(root, 'yemuna.html'), 'utf8');
const baseline = execFileSync('git', ['show', '431031252011f7917dc5974fdf35f5f3b08bd390:yemuna.html'], { cwd: root, encoding: 'utf8' });
const items = html => JSON.parse(html.match(/const qyItems=(\[.*?\]);/s)[1]);
assert.deepEqual(items(source), items(baseline), 'Prices, names, IDs, references and services must stay unchanged');
const products = items(source).filter(item => item.type === 'produit');
assert.equal(products.length, 157);
assert.equal(new Set(products.map(item => item.ref)).size, 157);

for (const match of source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) {
  if (match[1].trim()) new vm.Script(match[1]);
}

const manifest = JSON.parse(readFileSync(resolve(root, 'assets/queen-yemuna/manifest.json'), 'utf8'));
assert.equal(Object.keys(manifest).length, 157);
const hashes = new Set();
let originals = 0;
for (const product of products) {
  const image = manifest[product.ref];
  assert.ok(image, `Missing mapping for ${product.ref}`);
  assert.equal(image.name, product.name);
  assert.equal(image.src, `assets/queen-yemuna/ref-${product.ref}.webp`);
  assert.ok(['catalogue', 'illustration'].includes(image.kind));
  const bytes = readFileSync(resolve(root, image.src));
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
  assert.ok(bytes.length > 1000, `Invalid or empty asset for ${product.ref}`);
  const hash = createHash('sha256').update(bytes).digest('hex');
  assert.ok(!hashes.has(hash), `Duplicated image for ${product.ref}`);
  hashes.add(hash);
  if (image.kind === 'catalogue') originals++;
  assert.ok(source.includes(`src="${image.src}"`), `Initial HTML missing image for ${product.ref}`);
}
assert.equal(originals, 68);

const rules = source.split('\n').filter(line => /^function qy(?:Category|Description|DisplayName)\(/.test(line)).join('\n');
const classify = vm.runInNewContext(`${rules}; (item) => ({category:qyCategory(item), description:qyDescription(item), name:qyDisplayName(item)})`);
for (const ref of ['686', '687', '701']) {
  assert.equal(classify(products.find(item => item.ref === ref)).category, 'beaute', `Skincare reference ${ref} must not be listed as a food supplement`);
}
assert.match(classify(products.find(item => item.ref === '641')).description, /démêler/);
assert.match(classify(products.find(item => item.ref === '702')).description, /gelée/);
assert.match(classify(products.find(item => item.ref === '456')).description, /Programme/);
for (const product of products) assert.equal(classify(product).name, product.name);

// Guard the actual cart implementation against accidental changes during visual work.
for (const name of ['qyAdd', 'qySave', 'qyUpdate', 'qyChange', 'qyOpen', 'qyClose', 'qyClear', 'qySend']) {
  const get = html => html.split('\n').find(line => line.startsWith(`function ${name}(`));
  assert.equal(get(source), get(baseline), `Cart function ${name} was modified`);
}
assert.ok(!source.includes('JSZip'), 'Product images must not depend on downloading ZIP archives');
console.log(`PASS: ${products.length} unique images, ${originals} catalogue photos, ${products.length - originals} illustrations (including one preserved existing honey visual); catalogue data and cart unchanged; inline JavaScript syntax valid.`);
