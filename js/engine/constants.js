import { t, addFormat } from '../i18n.js';

export const RES = ['wood', 'brick', 'sheep', 'wheat', 'ore'];

export const TILE_INFO = {
  wood: { name: t('Madera'), icon: '🌲', color: '#3d8b3d', dark: '#23602a' },
  brick: { name: t('Arcilla'), icon: '🧱', color: '#c9643a', dark: '#8f3d1d' },
  sheep: { name: t('Lana'), icon: '🐑', color: '#9ccc65', dark: '#5f8f2f' },
  wheat: { name: t('Trigo'), icon: '🌾', color: '#f0c541', dark: '#b88a12' },
  ore: { name: t('Mineral'), icon: '⛰️', color: '#8d93a3', dark: '#555b6b' },
  desert: { name: t('Desierto'), icon: '🌵', color: '#e6d197', dark: '#b39b5c' },
  gold: { name: t('Oro'), icon: '💰', color: '#ffb300', dark: '#b37400' },
};

export const COSTS = {
  road: { wood: 1, brick: 1 },
  settlement: { wood: 1, brick: 1, sheep: 1, wheat: 1 },
  city: { wheat: 2, ore: 3 },
  dev: { sheep: 1, wheat: 1, ore: 1 },
};

export const DEV_INFO = {
  knight: { name: t('Caballero'), icon: '⚔️', desc: t('Mueve el ladrón y roba una carta.') },
  roadBuilding: { name: t('Construir caminos'), icon: '🛤️', desc: t('Construye 2 caminos gratis.') },
  yearOfPlenty: { name: t('Año de abundancia'), icon: '🎁', desc: t('Toma 2 recursos del banco.') },
  monopoly: { name: t('Monopolio'), icon: '👑', desc: t('Todos te dan un recurso.') },
  vp: { name: t('Punto de victoria'), icon: '🏆', desc: t('+1 punto (oculto).') },
};

export const DEV_DECKS = {
  normal: { name: t('Normal'), knight: 14, vp: 5, roadBuilding: 2, yearOfPlenty: 2, monopoly: 2 },
  war: { name: t('Guerra (muchos caballeros)'), knight: 24, vp: 3, roadBuilding: 1, yearOfPlenty: 1, monopoly: 1 },
  progress: { name: t('Progreso (muchas cartas de progreso)'), knight: 10, vp: 5, roadBuilding: 5, yearOfPlenty: 5, monopoly: 4 },
  none: { name: t('Sin cartas de desarrollo'), knight: 0, vp: 0, roadBuilding: 0, yearOfPlenty: 0, monopoly: 0 },
};

export const EVENTS = [
  { id: 'bonanza', name: t('Cosecha abundante'), icon: '🌟', desc: t('Esta ronda la producción es doble.') },
  { id: 'drought', name: t('Sequía'), icon: '☀️', desc: t('Un recurso no se produce esta ronda.') },
  { id: 'fairTrade', name: t('Comercio justo'), icon: '⚖️', desc: t('El banco cambia 3:1 esta ronda.') },
  { id: 'blackMarket', name: t('Mercado negro'), icon: '🕶️', desc: t('Un recurso se cambia 2:1 esta ronda.') },
  { id: 'earthquake', name: t('Terremoto'), icon: '🌋', desc: t('Dos fichas de número se intercambian.') },
  { id: 'storm', name: t('Tormenta'), icon: '🌪️', desc: t('El ladrón sale volando a otra casilla.') },
  { id: 'gift', name: t('Regalo del rey'), icon: '🎁', desc: t('Todos reciben 1 recurso al azar.') },
  { id: 'plague', name: t('Plaga'), icon: '🦠', desc: t('Quien tenga 6+ cartas pierde 1 al azar.') },
  { id: 'tax', name: t('Impuestos'), icon: '💸', desc: t('El líder paga 1 carta al banco.') },
  { id: 'rebellion', name: t('Rebelión'), icon: '✊', desc: t('El que va último recibe 2 recursos.') },
  { id: 'calm', name: t('Calma'), icon: '🍃', desc: t('No pasa nada... por ahora.') },
];

export const pips = n => (n ? 6 - Math.abs(7 - n) : 0);
// probability bar under a number token: one segment per classic Catan pip, centred, thicker
// and going white -> grey -> black -> red (6 and 8, the hot numbers) the likelier the number
const PROB_COLOR = ['', '#f4f4f4', '#b3ab9b', '#6b665d', '#1a1c2c', '#d62f2f'];
export const probLook = n => {
  const p = pips(n);
  return { p, h: Math.max(3, p + 1), c: PROB_COLOR[p] || '' };
};

// log messages keep ids ({r|res}) so each screen names them in its own language
addFormat('res', r => (TILE_INFO[r] ? TILE_INFO[r].name : r));
addFormat('dev', c => (DEV_INFO[c] ? DEV_INFO[c].name : c));
addFormat('event', id => (EVENTS.find(e => e.id === id) || { name: id }).name);
