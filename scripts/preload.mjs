// Writes the <link rel="modulepreload"> block of index.html from the real import graph, so the
// browser fetches every module at once instead of discovering them one level at a time.
// Run it after adding, removing or renaming a module: npm run preload  (tests/preload.mjs checks it)
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const map = JSON.parse(html.match(/<script type="importmap">([\s\S]*?)<\/script>/)[1]).imports;
const IMPORT = /(?:import|export)\s[^'"]*?from\s*['"]([^'"]+)['"]|import\s*\(\s*['"]([^'"]+)['"]\s*\)|^\s*import\s*['"]([^'"]+)['"]/gm;

// bare specifiers through the import map ('three', 'three/addons/...')
function resolve(spec, from) {
  if (spec.startsWith('.')) return new URL(spec, from).href;
  if (map[spec]) return map[spec];
  const pre = Object.keys(map).find(k => k.endsWith('/') && spec.startsWith(k));
  if (pre) return map[pre] + spec.slice(pre.length);
  return new URL(spec, from).href;
}

async function source(url, offline) {
  if (url.startsWith('file:')) return fs.readFileSync(new URL(url), 'utf8');
  if (offline) return null;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${url}: ${r.status}`);
  return r.text();
}

export async function moduleGraph({ offline = false } = {}) {
  const base = new URL('file://' + ROOT + '/');
  const seen = new Set(), order = [];
  const visit = async url => {
    if (seen.has(url)) return;
    seen.add(url);
    const src = await source(url, offline);
    if (src == null) return;
    order.push(url);
    for (const m of src.matchAll(IMPORT)) await visit(resolve(m[1] || m[2] || m[3], url));
  };
  await visit(new URL('js/main.js', base).href);
  return order.map(u => (u.startsWith(base.href) ? u.slice(base.href.length) : u)).filter(u => u !== 'js/main.js');
}

export const BEGIN = '<!-- modulepreload:begin -->', END = '<!-- modulepreload:end -->';

if (import.meta.url === 'file://' + process.argv[1]) {
  const mods = await moduleGraph();
  const block = [BEGIN, ...mods.map(m => `  <link rel="modulepreload" href="${m}"${m.startsWith('http') ? ' crossorigin' : ''}>`), `  ${END}`].join('\n');
  const out = html.includes(BEGIN) ? html.replace(new RegExp(`${BEGIN}[\\s\\S]*?${END}`), block) : html.replace('</head>', `  ${block}\n</head>`);
  fs.writeFileSync(path.join(ROOT, 'index.html'), out);
  console.log(`${mods.length} modules preloaded`);
}
