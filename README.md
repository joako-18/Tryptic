# Tríptico digital — XII Convención Bianual UPSEC Jezreel

Landing page en **React + TypeScript (Vite)** que simula un tríptico físico real:
en escritorio se ve como un folleto de 3 paneles abierto sobre la mesa, y en
móvil cada panel ocupa la pantalla completa, como si lo tuvieras en las manos.

## Cómo funciona el tríptico

- **Cara A (exterior):** Portada · Itinerario del sábado · Itinerario del domingo.
- **Cara B (interior):** Culto de apertura · Orden de culto del sábado · Orden de culto del domingo.
- Al llegar al final de una cara, el tríptico **se voltea con una animación 3D**
  (rotateY) igual que si giraras el papel para leer el otro lado.
- Dentro de cada cara, en móvil, los paneles se deslizan como un carrusel
  (efecto "pasar página"); en escritorio los 3 paneles de la cara activa se
  ven simultáneamente, como un tríptico real extendido.
- Flechas, puntos de navegación y swipe/click controlan el avance.

## Arquitectura

```
src/
  components/
    TrypticBook/   -> orquesta el estado (cara activa, panel activo) y la animación de volteo
    Panel/         -> panel individual con sombra de pliegue tipo papel
    Cover/         -> portada del tríptico
    ScheduleTable/ -> tabla de itinerario (sábado / domingo)
    CultoOrder/    -> orden litúrgico (apertura / sábado / domingo)
    Navigation/    -> flechas + puntos de paginación
  data/            -> contenido (itinerario.ts, cultos.ts) separado de la UI
  types/           -> interfaces TypeScript compartidas
  hooks/           -> useIsDesktop (detecta breakpoint de escritorio)
  pages/
    HomePage/      -> composición final de la landing
```

Cada componente tiene su propio `.tsx` y `.css` (sin CSS-in-JS ni frameworks
de utilidades), siguiendo una arquitectura por componentes y páginas.

## Paleta

- Rojo `#c31f2b` — acentos y llamados de atención (destacados del itinerario)
- Azul `#1c3768` / `#0f2040` — portada y titulares del itinerario
- Negro `#131211` — fondo de los órdenes de culto
- Blanco/hueso `#faf7f0` / `#f3efe4` — fondo del itinerario y textos sobre oscuro

Tipografías: **Playfair Display** (títulos, con carácter ceremonial),
**Jost** (texto de lectura) y **JetBrains Mono** (horarios y numeración).

## Correr el proyecto

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist listo para desplegar
npm run preview  # sirve el build de producción
```

Requiere Node 18+.
