// index.html must preload every local module of the import graph (see scripts/preload.mjs)
import fs from 'fs';
import { moduleGraph } from '../scripts/preload.mjs';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const listed = new Set([...html.matchAll(/rel="modulepreload" href="([^"]+)"/g)].map(m => m[1]));
const local = await moduleGraph({ offline: true });
const missing = local.filter(m => !listed.has(m));
const stale = [...listed].filter(m => !m.startsWith('http') && !local.includes(m));
if (missing.length || stale.length) {
  console.error('modulepreload out of date: run `npm run preload`', { missing, stale });
  process.exit(1);
}
console.log(`preload ok (${local.length} local modules)`);
