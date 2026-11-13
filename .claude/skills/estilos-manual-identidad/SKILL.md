---
name: estilos-manual-identidad
description: Estilos visuales del Manual de Identidad de la Secretaría de Modernización (Catamarca Capital) para replicarlos en otro sistema React + Tailwind v4. Usar cuando haya que aplicar o copiar "el estilo del manual" — paleta con modo claro/oscuro, foto de fondo con velo, sidebar flotante de vidrio colapsable, buscador Ctrl+K, home con hero y paneles de vidrio, página de proyecto con fichas de integrantes, pestañas, cards de descripción/stack/links, carrusel del equipo, fundamentos de marca, Kit UI (botones, inputs, alertas, tablas, etc.) y paletas de referencia para darle estilo propio a sitios públicos o personales.
---

# Estilos del Manual de Identidad

Esta skill describe cómo se ve el Manual de Identidad y trae el código real para replicarlo en otro sistema (por ejemplo, un portal con más información de todos los proyectos).

- **Recetas de clases** (qué clases lleva cada pieza): [referencias/recetas.md](referencias/recetas.md)
- **Paletas y estilos de referencia** (para darle estilo propio a sitios públicos o personales, con capturas de inspiración): [referencias/paletas.md](referencias/paletas.md)
- **Código fuente copiado del manual**, listo para adaptar: [plantillas/](plantillas/)

La fuente de verdad es el repo `Manual-Identidad-Modernizacion`. Si algo de acá no coincide con el repo, manda el repo.

## Stack que asume

- React 19 + TypeScript + Vite
- **Tailwind CSS v4** (`@tailwindcss/vite`, sin `tailwind.config.js`: todo se configura en el CSS)
- `lucide-react` para íconos (siempre `size={16|18|20|22}`, nada de otros sets)
- `react-router-dom` para el sidebar (`NavLink`) y las rutas

Si el sistema destino usa Tailwind v3, traducí: `@theme inline` → `theme.extend.colors` con `var(--...)`, `bg-linear-to-r` → `bg-gradient-to-r`, `from-(--velo-desde)` → `from-[var(--velo-desde)]`, `h-18`/`h-45`/`max-w-350` → valores arbitrarios (`h-[72px]`, `h-[180px]`, `max-w-[1400px]`).

## Cómo aplicarla en otro sistema

1. **Tokens primero.** Copiá [plantillas/index.css](plantillas/index.css) como CSS global. Define la paleta como variables (`--fondo`, `--superficie`, `--texto`, `--acento`, `--marca`, …) con valores para `:root` y `.dark`, y las expone a Tailwind con `@theme inline`. Desde ahí los componentes usan `bg-superficie`, `text-texto-suave`, `border-borde`, `text-acento`, etc. **Nunca** hardcodear `bg-white`/`text-slate-900` en piezas que viven dentro del shell: usar los tokens para que funcione el modo oscuro.
2. **Shell.** Armá el layout de [plantillas/layout/App.tsx](plantillas/layout/App.tsx): `flex min-h-screen bg-fondo` con `<Sidebar/>` a la izquierda, `<main className="flex-1 min-w-0">` con el `<Buscador/>` flotante arriba, y el `<Navbar/>` (botón de modo oscuro) flotando arriba a la derecha.
3. **Fondo.** Cada página arranca con `<div className="relative min-h-screen overflow-hidden">` + `<FondoFoto/>` y después el contenido en `<div className="relative ...">`. La foto (`/nodo.jpeg`) es `fixed` y tiene un velo azul noche en degradé.
4. **Páginas.** Seguí la estructura de Home, Página de proyecto y Página de sección descritas abajo (detalle en recetas.md).
5. **Datos.** Las plantillas importan `proyectos` desde `content/proyectos.ts`. En el sistema nuevo, conectalas a sus propios datos (API o archivo) respetando las formas `Proyecto` y `Miembro` (ver más abajo) o adaptando los campos.
6. **Assets** que hay que llevar al `public/` del otro sistema: `/nodo.jpeg` (fondo), `/-Isologotipo_Catamarca Capital.png` y `_blanco.png` (logos), `/caricaturas/*.png` (integrantes), `/cardsHome/*` (imágenes de las tarjetas del home).

## Identidad visual en una pasada

| Elemento | Decisión |
| --- | --- |
| Fondo de la app | Foto fija + velo `from-(--velo-desde) to-(--velo-hasta)` (azul noche, más oscuro a la izquierda) |
| Contenedores sobre la foto | `rounded-xl border border-white/30 bg-panel-foto backdrop-blur-md p-5 sm:p-8 md:p-12`. **Sólido blanco en modo claro, vidrio oscuro en modo oscuro** (lo decide el token `--panel-foto`; el vidrio blanco sobre la foto se leía mal). **Excepción: el Home** usa `bg-panel-vidrio`, que es vidrio también en modo claro (`rgb(255 255 255 / 0.45)`), porque ahí sí queda bien |
| Contenedores de lectura | **Card sólida**: `bg-superficie border border-borde rounded-2xl shadow-md p-5` |
| Títulos grandes | `font-black uppercase leading-[0.9] text-white drop-shadow-lg`, escalando `text-4xl sm:text-6xl md:text-8xl` |
| Títulos de sección (en panel) | `text-xl sm:text-2xl font-black uppercase tracking-wide text-texto` |
| Títulos dentro de card | `text-[22px] tracking-wide font-bold uppercase text-acento` (cyan) |
| Detalle de marca | Barrita naranja antes del hero: `mb-6 h-1 w-16 rounded-full bg-marca` |
| Kicker / sobretítulo | `text-xs font-bold tracking-[0.25em] text-slate-100` en mayúsculas |
| Acentos | Cyan (`--acento`) para títulos de card, links, pestañas y chips; naranja (`--marca`) para avatar, barritas, bordes de destaque |
| Item activo de navegación | Invertido: `bg-activo text-activo-texto` (negro en claro, blanco en oscuro) |
| Controles flotantes | Píldoras oscuras `bg-slate-900/80 rounded-full shadow-lg text-white` |
| Radios | `rounded-lg` (controles, items), `rounded-xl` (cards, paneles), `rounded-2xl` (cards de contenido y sidebar), `rounded-full` (chips, botones flotantes) |
| Placeholders | `border-2 border-dashed border-borde bg-superficie-suave text-texto-suave` + ícono lucide y texto ("Imagen pendiente") |
| Tono de textos | Español rioplatense, cercano y con humor ("Nada por acá. Probá con otra palabra.", "Se lo llevó Mesa de Entradas") |

## Piezas principales

Todas están en `plantillas/`; las clases exactas, en [recetas.md](referencias/recetas.md).

- **Sidebar** ([layout/Sidebar.tsx](plantillas/layout/Sidebar.tsx)): tarjeta flotante con `p-3` de margen, `rounded-2xl bg-vidrio backdrop-blur-sm shadow-2xl`, ancho `w-64` que se colapsa a `w-20` (solo íconos con `title`). En celular es un drawer (`-translate-x-full` → `translate-x-0`) con botón hamburguesa y fondo `bg-black/50`. Logo claro/oscuro con `dark:hidden` / `hidden dark:block`. Items con ícono + nombre truncado + `ChevronRight` que se asoma en hover. Abajo, tarjeta de usuario con avatar naranja.
- **Navbar / modo oscuro** ([layout/Navbar.tsx](plantillas/layout/Navbar.tsx)): píldora fija arriba a la derecha; alterna la clase `dark` en `<html>` y guarda la preferencia en `localStorage("tema")`; la primera vez usa `prefers-color-scheme`.
- **Buscador** ([layout/Buscador.tsx](plantillas/layout/Buscador.tsx)): barra de vidrio oscuro centrada (`sticky top-0 h-0` para no correr el contenido), Ctrl/Cmd+K, búsqueda sin tildes, flechas + Enter, lista de resultados en card sólida.
- **Home** ([home/home.tsx](plantillas/home/home.tsx)): hero (barrita naranja, kicker, "Te damos la bienvenida al" en naranja, título gigante, párrafo), panel de vidrio con grilla de **tarjetas de sección** (imagen + tinte de color + título blanco) y columna lateral, panel de guías con cards `border-t-4`, **Fundamentos** (paleta copiable, tipografía, logo, maqueta), y **carrusel del equipo**.
- **Página de proyecto** ([proyecto/proyectosPage.tsx](plantillas/proyecto/proyectosPage.tsx)): sobretítulo `EXPEDIENTE · ESTADO`, nombre centrado en blanco, **fichas de integrantes** ([PanelHero.tsx](plantillas/proyecto/PanelHero.tsx)), **pestañas** ([tabs.tsx](plantillas/proyecto/tabs.tsx)) y, en "General", grilla de 2 columnas: card de descripción con chips de stack y links + card de imágenes ([Images.tsx](plantillas/proyecto/Images.tsx)).
- **Página de sección** ([layout/seccionLayout.tsx](plantillas/layout/seccionLayout.tsx)): "Volver al inicio", barrita naranja, título gigante, descripción, y bloques `Subtitulo` (cyan) + párrafo + `CodeBlockColapsable`.
- **Kit UI** ([plantillas/ui/](plantillas/ui/)): `Boton`, `Card`, `Badge`, `Alerta`, `Input`, `Select`, `Textarea`, `Checkbox`, `Modal`, `Tabla`, `Spinner`, `EstadoVacio`. Ojo: el Kit UI está pensado para **sistemas internos con fondo blanco** (usa slate y el azul institucional `#0B2454` directo, sin tokens ni modo oscuro). Para piezas dentro del shell del manual, usá las recetas con tokens.

## Modelo de datos que esperan las plantillas

```ts
interface Miembro { nombre: string; rol: string; color: string; imagen?: string }
interface Link { label: string; url: string }
interface Proyecto {
  id: string;                 // va en la URL: /expediente/:id
  expediente: string;         // "EXP-0012/26"
  nombre: string;
  color: string;
  descripcionGeneral: string; // se muestra con whitespace-pre-line
  stack: string[];            // chips cyan
  componentes: string[];
  equipo: Miembro[];          // fichas de integrantes
  lenguaje: string | string[];
  icono: ComponentType<{ size?: number; className?: string }>; // ícono lucide del sidebar
  estado: string;             // "En proceso", "Producción"...
  imagenes?: string[];        // hasta 3 casilleros
  links?: Link[];
}
```

## Extender para un sistema con más información

Cuando el sistema nuevo tenga datos que el manual no tiene (fechas, responsables, métricas, dependencias, historial, etc.), **no inventes estilos nuevos**: reusá estas piezas.

- Nueva información de un proyecto → **otra pestaña** en `Tabs` (`{ id: "historial", label: "Historial" }`) con su contenido dentro de una card sólida `bg-superficie border border-borde p-4 sm:p-6 rounded-2xl shadow-md`.
- Bloques de datos dentro de "General" → más cards sólidas en la grilla `grid grid-cols-1 lg:grid-cols-2 gap-4 items-start`, cada una con su título `text-[22px] font-bold uppercase tracking-wide text-acento`.
- Pares clave/valor → separados por `border-t border-borde pt-4 mt-5`, etiqueta `text-sm font-bold uppercase tracking-wide text-acento`, valor `text-sm text-texto`, secundarios `text-texto-suave`.
- Estados (OK / riesgo / crítico) → `StampBadge` ([proyecto/stampBadge.tsx](plantillas/proyecto/stampBadge.tsx)): verde/ámbar/rojo con variante `dark:`; siempre con texto, nunca solo color.
- Listado de todos los proyectos → cards sólidas en grilla `grid gap-4 sm:grid-cols-2 xl:grid-cols-3` dentro de un panel de vidrio, o reutilizar la tarjeta de sección del home si es navegación.
- Métricas / gráficos → `recharts` (ya está en el manual) dentro de card sólida; línea en el color de acento.
- Secciones del home nuevas → siempre panel de vidrio con `mt-8` y el encabezado `h2` + párrafo `mt-2 max-w-3xl leading-relaxed text-texto`.

## Reglas que no se rompen

- Todo color sale de los tokens de `index.css`. Si hace falta uno nuevo, se agrega ahí con valor claro **y** oscuro, y se expone en `@theme inline`.
- Probar siempre en modo claro y oscuro.
- Responsive mobile-first: paddings `px-4 sm:px-8`, títulos que escalan con `sm:`/`md:`, grillas que arrancan en 1 columna.
- Accesibilidad: `aria-label` en botones de solo ícono, `alt=""` + `aria-hidden` en imágenes decorativas, `focus-visible:outline-2`, `loading="lazy"` en fotos, respetar `prefers-reduced-motion` en animaciones automáticas (como el carrusel).
- Texto legible sobre la foto: o va en blanco/`slate-200` con `drop-shadow`, o va dentro de un panel de vidrio / card sólida.
- Imágenes en `.webp`/`.avif`, ~1600px de ancho como máximo.
- Sistemas internos (personal municipal, monitores viejos): sobrios, buen contraste, pocas animaciones. Sitios públicos: más libertad, siempre dentro del manual de marca. Colores de marca oficiales: azul `#0B2454`, celeste `#45B5DB`, naranja `#F0901B`.
