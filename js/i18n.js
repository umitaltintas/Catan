// Translations. The Spanish text in the code is the key: t('Tirar dados') returns the
// translation for the current language, or the Spanish text itself when there is none.
// Placeholders: t('@{pid} saca {n}.', { pid, n }); `{x|res}` passes the value through a
// formatter registered with addFormat (resource, card and event names are localised that way,
// so the engine can store language-neutral ids in the log). No DOM needed: it runs in Node too.
import { TR } from './i18n/tr.js';

export const LANGS = [
  { id: 'es', name: 'Español', flag: '🇪🇸' },
  { id: 'tr', name: 'Türkçe', flag: '🇹🇷' },
];
const DICTS = { tr: TR };
const LANG_KEY = 'katanittes.lang';

function detect() {
  if (typeof location === 'undefined') return 'es';
  const ok = l => LANGS.some(x => x.id === l);
  const q = new URLSearchParams(location.search).get('lang');
  if (ok(q)) return q;
  try {
    const saved = JSON.parse(localStorage.getItem(LANG_KEY));
    if (ok(saved)) return saved;
  } catch {}
  return /^tr\b/i.test(navigator.language || '') ? 'tr' : 'es';
}

export const LANG = detect();
const dict = DICTS[LANG] || null;
if (typeof document !== 'undefined') document.documentElement.lang = LANG;

const formats = {};
export const addFormat = (name, fn) => (formats[name] = fn);

export function fill(text, vars) {
  if (!vars) return text;
  return text.replace(/\{(\w+)(?:\|(\w+))?\}/g, (m, k, f) => {
    if (!(k in vars)) return m;
    const v = vars[k];
    return f && formats[f] ? formats[f](v) : String(v);
  });
}

export function t(es, vars) {
  return fill((dict && dict[es]) || es, vars);
}

// the language switch reloads the page: names in constants are translated once at load
export function setLang(id) {
  try {
    localStorage.setItem(LANG_KEY, JSON.stringify(id));
  } catch {}
  const u = new URL(location.href);
  u.searchParams.delete('lang');
  location.href = u.toString();
}
