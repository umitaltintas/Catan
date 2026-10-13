# Katanittes

*[English](README.md) · [Türkçe](README.tr.md) · Español*

Un juego de colonos inspirado en Catan, en el navegador, con mapas personalizables, modos que no existen en la caja, bots, juego online con amigos y un tablero 3D de maqueta con interfaz pixel art.

Gratis, sin anuncios, sin cuentas y sin instalar nada. Funciona en PC y móvil.

**Jugar:** https://umitaltintas.github.io/Catan/ · **En turco:** https://umitaltintas.github.io/Catan/?lang=tr

> La interfaz está en **español y turco**: se cambia desde el menú principal o abriendo la página con `?lang=es` / `?lang=tr`.

## Sobre este fork

Fork de [KurusuDes/CatanTestFriendos](https://github.com/KurusuDes/CatanTestFriendos), el juego original de Sowtank. Cambios:

- **Traducción al turco** de todo el juego: menús, sala, pantalla de juego, ayuda, editor de mapas, mensajes online, registro de la partida y errores. El registro se guarda sin idioma, así que en una sala online cada jugador puede usar el suyo.
- **Más ligero y tranquilo:** el tablero 3D no tiene movimiento ambiental (ni viento, ni olas, ni nubes, ni barcos que se mecen) y solo se redibuja cuando algo cambia. Una mesa esperando a un jugador deja la GPU casi en reposo. Las sombras y los contornos se recalculan solo cuando se mueven las piezas o la cámara, los shaders se compilan antes de empezar y se corrigieron varios tirones de la interfaz.
- **Quitado:** la sección de minijuegos de apuestas (ADHD) con los adornos dorados, los vídeos del tráiler y del showcase, y las notas de desarrollo y scripts de modelos del autor original.

## Qué trae
- **10 formas de mapa** (clásico, mini, extendido 5-6, grande, gigante, anillo del lago, estrella, dos reinos, archipiélago, pangea aleatoria) + **editor de mapas** con códigos para compartir.
- **Modos insignia:** *Blindfold* (tablero boca abajo durante la colocación; al terminar se voltea todo) y *Niebla de guerra* (visión propia: alrededor de tus casas y medio hexágono junto a tus caminos; si construyes sobre alguien oculto, te desvías al hueco libre más cercano).
- **Más modos combinables:** Casas secretas, Números secretos, Eventos por ronda, Tierra viva, Dados equilibrados, Ladrón amable, Sin ladrón, Ciudad inicial, Turbo.
- **Reglas ajustables:** puntos para ganar, límite de mano, rondas de colocación, bonus inicial, piezas por jugador, mazos de desarrollo, oro, puertos, desiertos.
- **Hasta 8 jugadores** (banco, mazo y mapas escalados). Cada reino pinta su **bandera** (editor pixel 12×12) y elige el **color de su castillo**; la bandera aparece en sus edificios del mapa 3D.
- **Online robusto:** P2P (WebRTC/PeerJS, sin servidor), reconexión automática (recuperas tu asiento), **votación** cuando alguien se desconecta (esperar / que lo sustituya un bot / retirarlo) y el anfitrión puede **reabrir la sala** con el mismo código.
- **Bots** en 3 niveles con botón de pista, **hotseat** con pantalla de pase y **modo espectador**.
- **Mapa 3D de maqueta** (three.js: terreno continuo con 8 texturas PBR, cielo físico con IBL, agua con espuma según profundidad, GTAO, tilt-shift), variantes de casillas, vista desde arriba, historial de tiradas e **interfaz pixel art** con dados 3D y cartas voladoras.
- Reglas completas: ladrón, descartes, puertos 3:1 y 2:1, comercio entre jugadores, cartas de desarrollo, camino más largo y ejército más grande.

## Desarrollo
Sitio estático sin build. Para probar en local:

```bash
python3 -m http.server 8123
```

Tests del motor (reglas + cientos de partidas bot contra bot con verificación de invariantes):

```bash
npm test
```

Las traducciones están en `js/i18n.js` y `js/i18n/tr/`: el texto en español del código es la clave (`t('Tirar dados')`).

## Licencia

El juego es de **Sowtank** ([repositorio original](https://github.com/KurusuDes/CatanTestFriendos)). Código y recursos originales bajo licencia [MIT](LICENSE) © 2026 Sowtank. Si lo usas en otro proyecto, se agradece un crédito visible (detalles en [NOTICE.md](NOTICE.md)). El propio juego muestra ese crédito, con el enlace al repositorio original, al pie del menú y en la ayuda.

Proyecto de fans no oficial: no está afiliado ni aprobado por Catan GmbH, CATAN Studio ni Kosmos. *CATAN* es una marca de sus respectivos propietarios. Avisos de terceros (three.js, PeerJS, fuentes) en [NOTICE.md](NOTICE.md).
