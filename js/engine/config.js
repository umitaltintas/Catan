import { newSeed } from './rng.js';
import { t } from '../i18n.js';

export const PLAYER_COLORS = ['#e53935', '#1e88e5', '#ff9800', '#f5f5f5', '#43a047', '#8e24aa', '#00acc1', '#795548'];
export const BOT_NAMES = ['Leñadora', 'Sir Ladrillo', 'El Banquero', 'Don Trigo', 'Ovejita', 'Mineralman', 'Doña Arcilla', 'Ladronzuelo'].map(n => t(n));

export function defaultConfig() {
  return {
    seed: newSeed(),
    players: [
      { name: t('Tú'), kind: 'human', color: PLAYER_COLORS[0] },
      { name: BOT_NAMES[0], kind: 'bot', level: 'normal', color: PLAYER_COLORS[1] },
      { name: BOT_NAMES[1], kind: 'bot', level: 'normal', color: PLAYER_COLORS[2] },
      { name: BOT_NAMES[2], kind: 'bot', level: 'normal', color: PLAYER_COLORS[3] },
    ],
    map: { shape: 'classic', size: 24, resources: 'balanced', numbers: 'balanced', deserts: 'auto', gold: 0, ports: 'normal', custom: null },
    rules: {
      vpTarget: 10, handLimit: 7, setupRounds: 2, setupCity: false, friendlyRobber: false, robberGrace: 0,
      startBonus: 0, productionMult: 1, devDeck: 'normal', diceMode: 'random',
      maxRoads: 15, maxSettlements: 5, maxCities: 4, randomStart: true, noRobber: false,
    },
    modes: { flipped: false, blindfold: false, fog: false, hiddenNumbers: false, events: false, chaosEvery: 0, chaosWhat: 'numbers', privacy: 'auto' },
  };
}

// Toggleable game modes shown in the lobby. `apply` receives the config.
export const MODES = [
  { id: 'flipped', icon: '🙈', name: t('Blindfold: tablero volteado'), flagship: true, desc: t('Todas las casillas están boca abajo. Pones tus casas a ciegas (los demás sí las ven) y al terminar la colocación se voltea todo el tablero.'), get: c => c.modes.flipped, set: (c, v) => (c.modes.flipped = v) },
  { id: 'fog', icon: '🌑', name: t('Niebla de guerra'), flagship: true, desc: t('Todo oscuro: solo ves alrededor de tus casas, y medio hexágono a los lados de tus caminos. Si construyes donde hay alguien que no ves, tu pieza se desvía al hueco libre más cercano.'), get: c => c.modes.fog, set: (c, v) => (c.modes.fog = v) },
  { id: 'blindfold', icon: '🤫', name: t('Casas secretas'), desc: t('Nadie ve dónde ponen los demás sus casas iniciales hasta la revelación. Si chocan, el que llegó tarde reubica.'), get: c => c.modes.blindfold, set: (c, v) => (c.modes.blindfold = v) },
  { id: 'hiddenNumbers', icon: '❓', name: t('Números secretos'), desc: t('Ves los recursos, pero los números se revelan al construir al lado.'), get: c => c.modes.hiddenNumbers, set: (c, v) => (c.modes.hiddenNumbers = v) },
  { id: 'events', icon: '🎲', name: t('Eventos por ronda'), desc: t('Cada ronda sale un evento: sequía, terremoto, mercado negro, tormenta, plaga...'), get: c => c.modes.events, set: (c, v) => (c.modes.events = v) },
  { id: 'chaos', icon: '🌀', name: t('Tierra viva'), desc: t('Cada 3 rondas los números (o los recursos) del mapa se barajan.'), get: c => c.modes.chaosEvery > 0, set: (c, v) => (c.modes.chaosEvery = v ? 3 : 0) },
  { id: 'balancedDice', icon: '🃏', name: t('Dados equilibrados'), desc: t('Los dados salen de un mazo de 36 cartas: la estadística se cumple.'), get: c => c.rules.diceMode === 'balanced', set: (c, v) => (c.rules.diceMode = v ? 'balanced' : 'random') },
  { id: 'friendlyRobber', icon: '😇', name: t('Ladrón amable'), desc: t('El ladrón no puede atacar a jugadores con 2 puntos o menos.'), get: c => c.rules.friendlyRobber, set: (c, v) => (c.rules.friendlyRobber = v) },
  { id: 'noRobber', icon: '🚫', name: t('Sin ladrón'), desc: t('Sacar 7 solo obliga a descartar. Nadie roba.'), get: c => c.rules.noRobber, set: (c, v) => (c.rules.noRobber = v) },
  { id: 'setupCity', icon: '🏰', name: t('Ciudad inicial'), desc: t('Tu segunda colocación inicial es directamente una ciudad.'), get: c => c.rules.setupCity, set: (c, v) => (c.rules.setupCity = v) },
  { id: 'doubleProd', icon: '⚡', name: t('Turbo'), desc: t('Toda la producción es doble. Partidas explosivas.'), get: c => c.rules.productionMult > 1, set: (c, v) => (c.rules.productionMult = v ? 2 : 1) },
];

export const PRESETS = [
  { id: 'classic', icon: '🏝️', name: t('Clásico'), desc: t('Reglas de siempre.'), apply: c => {} },
  { id: 'blind', icon: '🙈', name: t('Blindfold'), desc: t('Tablero volteado durante la colocación inicial.'), apply: c => { c.modes.flipped = true; } },
  { id: 'fog', icon: '🌑', name: t('Niebla de guerra'), desc: t('Visión propia, todo oscuro alrededor.'), apply: c => { c.modes.fog = true; c.map.shape = 'big'; } },
  { id: 'explorer', icon: '🧭', name: t('Exploradores'), desc: t('Niebla de guerra en un archipiélago.'), apply: c => { c.modes.fog = true; c.map.shape = 'islands'; c.map.size = 27; } },
  { id: 'paranoia', icon: '😱', name: t('Paranoia'), desc: t('Blindfold + niebla + casas secretas.'), apply: c => { c.modes.flipped = true; c.modes.fog = true; c.modes.blindfold = true; } },
  { id: 'chaos', icon: '🌀', name: t('Caos total'), desc: t('Eventos, tierra viva, recursos caóticos y oro.'), apply: c => { c.modes.events = true; c.modes.chaosEvery = 3; c.map.resources = 'chaos'; c.map.gold = 2; c.map.shape = 'pangea'; } },
  { id: 'speed', icon: '⚡', name: t('Rápida'), desc: t('A 7 puntos, producción doble y bonus inicial.'), apply: c => { c.rules.vpTarget = 7; c.rules.productionMult = 2; c.rules.startBonus = 1; } },
  { id: 'war', icon: '⚔️', name: t('Guerra'), desc: t('Mazo de caballeros y ladrón sin piedad.'), apply: c => { c.rules.devDeck = 'war'; c.rules.startBonus = 1; } },
];
