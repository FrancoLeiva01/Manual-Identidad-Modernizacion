# Recetas de clases

Clases exactas de cada pieza del manual, para armarlas sin abrir las plantillas. El código completo está en [../plantillas/](../plantillas/).

## Tokens (index.css)

| Token / clase | Claro | Oscuro | Uso |
| --- | --- | --- | --- |
| `bg-fondo` | `#f1f5f9` | `#0b1120` | Fondo general |
| `bg-superficie` | `#ffffff` | `#1e293b` | Cards, paneles, pestaña activa |
| `bg-superficie-suave` | `#f8fafc` | `#0f172a` | Placeholders, zonas internas |
| `bg-vidrio` | `white / 0.45` | `rgb(2 6 23 / 0.85)` | Sidebar flotante |
| `bg-hover` | `#e2e8f0` | `#1e293b` | Hover de items |
| `text-texto` | `#0f172a` | `#f1f5f9` | Texto principal |
| `text-texto-suave` | `#64748b` | `#94a3b8` | Secundario |
| `border-borde` | `#e2e8f0` | `#334155` | Bordes |
| `text-acento` | `#0891b2` | `#22d3ee` | Cyan: títulos de card, links, pestañas |
| `bg-marca` | `#f97316` | `#fb923c` | Naranja institucional |
| `bg-activo` / `text-activo-texto` | `#0f172a` / blanco | blanco / `#0f172a` | Item activo |
| `bg-panel-foto` | `white / 0.45` | `rgb(2 6 23 / 0.6)` | Paneles de vidrio sobre la foto |
| `--velo-desde` → `--velo-hasta` | `slate-900/60` → `/15` | `rgb(2 6 23 / .85)` → `/.6` | Velo de la foto |

Modo oscuro: `@custom-variant dark (&:where(.dark, .dark *));` y la clase `dark` en `<html>`.

## Shell

```tsx
<div className="flex min-h-screen bg-fondo">
  <Sidebar />
  <main className="flex-1 min-w-0">
    <Buscador />
    {/* rutas */}
  </main>
  <Navbar />
</div>
```

## Fondo de página

```tsx
<div className="relative min-h-screen overflow-hidden">
  <img src="/nodo.jpeg" alt="" aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover" />
  <div aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-0 bg-linear-to-r from-(--velo-desde) to-(--velo-hasta)" />
  <div className="relative px-4 pt-12 pb-12 max-w-full mx-auto sm:px-8">…</div>
</div>
```

Página de proyecto: contenedor `relative px-4 pt-20 pb-12 max-w-350 mx-auto sm:px-8`.

## Sidebar

- Envoltorio: `fixed inset-y-0 left-0 z-50 h-dvh shrink-0 p-3 transition-transform duration-300 md:sticky md:top-0 md:z-10 md:h-screen md:translate-x-0` + `translate-x-0` (abierto) / `-translate-x-full`.
- `aside`: `flex h-full flex-col rounded-2xl bg-superficie md:bg-vidrio backdrop-blur-sm py-5 shadow-2xl transition-[width] duration-300` + `w-64` / `w-20` (mini).
- Header: `mb-6 flex items-center px-4` + `justify-between gap-2` (o `justify-center` en mini). Logo `h-18 w-auto object-contain`.
- Botón colapsar / cerrar: `shrink-0 rounded-lg p-2 text-texto transition-colors hover:bg-hover cursor-pointer` con `PanelLeftClose`/`PanelLeftOpen`/`X` de 20.
- Divisor: `<hr className="mx-5 mb-3 -mt-4 border-white/30" />`.
- Título de grupo: `mx-5 mb-2 text-sm font-semibold text-slate-800 dark:text-slate-200`.
- Nav: `flex flex-1 flex-col gap-1 overflow-y-auto px-3`.
- Item: `group flex items-center gap-3 rounded-lg py-2.5 text-sm font-medium no-underline transition-colors` + `px-3` (o `justify-center px-0` en mini) + activo `bg-activo text-activo-texto` / inactivo `text-texto hover:bg-hover`. Ícono 20 `shrink-0`, texto `min-w-0 flex-1 truncate`, flecha `ChevronRight` 16 `opacity-40 group-hover:translate-x-0.5 group-hover:opacity-100` (100 si activo).
- Tarjeta de usuario: `flex items-center gap-3 rounded-lg border border-borde bg-superficie px-3 py-2.5`; avatar `flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-marca text-sm font-bold text-white`; nombre `truncate text-sm font-semibold text-texto`; rol `truncate text-xs text-texto-suave`. En mini: solo el avatar `h-10 w-10 mx-auto`.
- Hamburguesa (celular): `fixed top-4 left-4 z-30 rounded-full bg-slate-900/80 p-3 text-white shadow-lg transition-colors hover:bg-slate-600 cursor-pointer md:hidden`. Fondo: `fixed inset-0 z-40 bg-black/50 md:hidden`.

## Controles flotantes

- Navbar (modo oscuro): `fixed top-4 right-4 z-30 flex items-center gap-1 bg-slate-900/80 rounded-full px-2 py-2 shadow-lg`; botón `p-2 rounded-full text-white hover:bg-slate-600 transition-colors cursor-pointer` con `Sun`/`Moon` 18.
- Buscador: wrapper `sticky top-0 z-20 h-0`; posición `absolute top-4 left-18 right-20 md:left-1/2 md:right-auto md:w-[min(36rem,calc(100%-10rem))] md:-translate-x-1/2`; barra `flex h-11 items-center gap-2 rounded-full border border-white/25 bg-slate-900/35 px-4 text-white shadow-lg backdrop-blur-md transition-colors focus-within:border-white/60 focus-within:bg-slate-900/55`; `kbd` `rounded border border-white/30 px-1.5 py-0.5 text-[11px] font-medium text-white/70`.
- Resultados: `mt-2 overflow-hidden rounded-2xl border border-borde bg-superficie shadow-2xl`; item `flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left` + `bg-hover` si está seleccionado; ícono `text-acento`.

## Home

**Hero** (`section className="mt-8 max-w-3xl py-8 sm:py-12 md:py-20"`):
```tsx
<div className="mb-6 h-1 w-16 rounded-full bg-marca" />
<p className="mb-2 text-xs font-bold tracking-[0.25em] text-slate-100">SECRETARÍA DE MODERNIZACIÓN</p>
<p className="mb-3 text-lg uppercase tracking-wide font-bold text-marca">Te damos la bienvenida al</p>
<h1 className="text-4xl font-black uppercase leading-[0.9] text-white drop-shadow-lg sm:text-6xl md:text-8xl">Manual de<br />Identidad</h1>
<p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed font-medium text-slate-200">…</p>
```

**Panel de vidrio**: `mt-8 rounded-xl border border-white/30 bg-panel-foto p-5 backdrop-blur-md sm:p-8 md:p-12`. Encabezado: `h2` `text-xl sm:text-2xl font-black uppercase tracking-wide text-texto` + `p` `mt-2 max-w-3xl leading-relaxed text-texto`. El primero del home usa `mt-16 md:mt-40 grid gap-8 xl:grid-cols-[1fr_320px]`.

**Tarjeta de sección** (navegación con foto):
- Link: `group relative flex min-h-36 items-center justify-center overflow-hidden rounded-xl p-5 shadow-md focus-visible:outline-2 focus-visible:outline-white`.
- Imagen: `absolute inset-0 h-full w-full scale-110 object-cover transition-transform duration-500 group-hover:scale-125`.
- Tinte: `absolute inset-0 transition-colors duration-300` + p. ej. `bg-orange-600/55 group-hover:bg-orange-600/40` (también sky, purple, emerald, rose).
- Título: `relative text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow-md`.
- Variante ancha (Kit UI): `sm:col-span-2`, `flex items-center gap-4`, caja de ícono `h-12 w-12 rounded-lg bg-white/10 text-[#45B5DB]`, subtítulo `text-sm text-white/90`, `ArrowRight` con `group-hover:translate-x-1`.

**Card de link externo** (Dropbox): `group block rounded-xl border border-sky-200 bg-sky-50 p-5 transition-colors hover:bg-sky-100 dark:border-sky-900 dark:bg-sky-950/60 dark:hover:bg-sky-950/80`; ícono `text-sky-700 dark:text-sky-300` 28; CTA `mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 dark:text-sky-300` + `ExternalLink` 14.

**Card de guía** (con borde superior de color): `rounded-xl border border-borde bg-superficie p-5 sm:p-6 border-t-4 border-t-marca` (o `border-t-slate-500`); caja de ícono `flex h-11 w-11 items-center justify-center rounded-lg bg-marca/15 text-marca`; lista con `Check` 16 `mt-0.5 shrink-0`.

**Nota destacada**: `rounded-lg border-l-4 border-marca bg-superficie/70 px-4 py-3 text-sm leading-relaxed text-texto` con `<strong>` al inicio.

**Fundamentos**: título interno `mb-3 text-sm font-bold uppercase tracking-[0.2em] text-texto`; muestra de color `group flex flex-col overflow-hidden rounded-xl border border-borde bg-superficie text-left transition-shadow hover:shadow-lg` con franja `h-16` del color y hex en `font-mono text-xs` (clic copia). Tipografía y maqueta siempre sobre `bg-white`.

## Fichas de integrantes

Grilla: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`.

```tsx
<div className="rounded-xl border border-borde overflow-hidden bg-superficie">
  {persona.imagen ? (
    <div className="m-3 mb-0 h-45 flex items-center justify-center overflow-hidden rounded-lg bg-superficie-suave">
      <img src={persona.imagen} alt={persona.nombre} loading="lazy"
        className="h-full w-full object-contain object-center" />
    </div>
  ) : (
    <div className="m-3 mb-0 h-45 flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-borde bg-superficie-suave text-texto-suave">
      <UserRound size={40} strokeWidth={1.5} />
      <span className="text-xs">Imagen pendiente</span>
    </div>
  )}
  <div className="p-3">
    <p className="font-semibold text-sm m-0 text-texto">{persona.nombre}</p>
    <p className="text-xs text-texto-suave mt-0.5 m-0">{persona.rol}</p>
  </div>
</div>
```

**Carrusel del equipo** (home): pista `flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none]`; tarjeta `figure` `w-44 shrink-0 snap-start overflow-hidden rounded-xl border border-borde bg-superficie shadow-md sm:w-52` con foto `m-2 mb-0 aspect-square`; flechas `absolute top-1/2 -left-3 / -right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-superficie text-texto shadow-lg ring-1 ring-borde transition hover:scale-105`. Avanza solo cada 4 s, se pausa con hover y respeta `prefers-reduced-motion`.

## Página de proyecto

- Sobretítulo: `mb-1 text-xs tracking-wide uppercase text-slate-200` → `{expediente} · {estado}`.
- Título: `mb-1.5 text-3xl sm:text-5xl text-center mt-5 font-bold text-white drop-shadow-lg`.
- Contenido: `flex flex-col gap-4` → fichas → pestañas → contenido.
- **Pestañas**: barra `flex items-center gap-2 border-b border-white/20`; botón `px-3 py-2 -mb-px text-base sm:px-4 sm:text-lg font-bold rounded-t-md border transition-colors uppercase` + activo `border-acento text-acento bg-superficie` / inactivo `border-transparent text-white/70 hover:text-white`.
- Grilla General: `grid grid-cols-1 lg:grid-cols-2 gap-4 items-start`.
- **Card sólida**: `bg-superficie border border-borde p-5 rounded-2xl shadow-md` (pestañas con contenido largo: `p-4 sm:p-6`).
- Título de card: `mb-2 text-[22px] tracking-wide font-bold uppercase text-acento`. Cuerpo: `whitespace-pre-line text-texto leading-relaxed m-0`.
- **Chips de stack**: contenedor `mt-3.5 flex flex-wrap gap-2`; chip `text-xs font-medium bg-acento/10 border border-acento/30 text-acento rounded-full px-2.5 py-1`.
- **Links**: bloque `mt-5 pt-4 border-t border-borde`, título `mb-2 text-sm tracking-wide font-bold uppercase text-acento`; link `flex items-start gap-2 text-sm text-texto hover:text-acento` + `ExternalLink` 16, label `font-semibold`, URL `block break-all text-texto-suave`.
- **Imágenes**: título `mb-3 font-semibold text-md text-texto`; foto `aspect-video w-full object-cover rounded-lg border border-borde`; casillero vacío `aspect-video bg-superficie-suave border border-dashed border-borde rounded-lg flex items-center justify-center text-texto-suave` con `Image` 22.
- **No encontrado**: texto con humor ("Expediente no encontrado. Se lo llevó Mesa de Entradas.").
- **Estado** (`StampBadge`): `shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap` + `bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400` (ámbar y rojo igual).

## Página de sección

- Volver: `mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white` + `ArrowLeft` 16.
- Título: `text-4xl font-black uppercase leading-[0.9] text-white drop-shadow-lg sm:text-5xl md:text-7xl`; descripción `mt-6 max-w-xl text-base sm:text-lg leading-relaxed font-medium text-slate-200`.
- Subtítulo sobre foto: `mt-10 text-2xl sm:text-3xl font-bold uppercase tracking-wide text-cyan-400`; dentro de card usar `text-acento`.
- Párrafo sobre foto: `text-slate-200 leading-relaxed text-base sm:text-xl my-1`.
- Vacío: `mt-10 max-w-3xl rounded-xl border border-dashed border-white/30 bg-panel-foto backdrop-blur-md p-5 sm:p-8 text-texto`.

## Bloque de código

- Caja: `rounded-xl overflow-hidden bg-[#14171f] border border-[#14171f]`; barra `flex justify-between items-center px-3.5 py-2 bg-[#1c1f29] text-[#9aa4b2] text-[11px]`; botón copiar `bg-transparent border border-white/15 rounded-md px-2 py-0.5 text-[11px] hover:border-blue-600 hover:text-white` ("copiar" → "copiado ✓"); `pre` `m-0 p-3 text-xs sm:p-4 sm:text-[13px] text-gray-200 overflow-x-auto`.
- Colapsable (>15 líneas): `max-height: 300px`, degradé `absolute bottom-10 h-24 bg-gradient-to-t from-black/70 to-transparent`, botón `mt-2 w-full rounded border border-borde bg-superficie py-2 text-sm font-medium text-acento hover:bg-superficie-suave` ("Ver más"/"Ver menos").

## Kit UI (sistemas internos, fondo blanco)

- Botón: base `inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50`; primario `bg-[#0B2454] text-white hover:bg-[#1A4876]`; secundario `border border-slate-300 bg-white text-slate-800 hover:bg-slate-50`; peligro `bg-red-600 hover:bg-red-700`; fantasma `text-slate-700 hover:bg-slate-100`; tamaños `h-8 px-3 text-xs` / `h-10 px-4 text-sm` / `h-12 px-6 text-base`.
- Card: `rounded-xl border border-slate-200 bg-white shadow-sm`, header `border-b border-slate-200 px-5 py-4`, cuerpo `p-5`.
- Input: `h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm focus:ring-2 focus:border-[#0B2454] focus:ring-[#45B5DB]/30`; error `border-red-500 focus:ring-red-200` + mensaje `text-xs text-red-600`.
- Badge: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset` + tono (`bg-green-50 text-green-800 ring-green-200`, etc.), punto opcional `h-1.5 w-1.5 rounded-full`.
- Alerta: `flex gap-3 rounded-lg border p-4 text-sm` + tono (`border-sky-200 bg-sky-50 text-sky-900`…), siempre con ícono (`Info`, `CheckCircle2`, `AlertTriangle`, `XCircle`).
- El resto (`Select`, `Textarea`, `Checkbox`, `Modal`, `Tabla`, `Spinner`, `EstadoVacio`) en [../plantillas/ui/](../plantillas/ui/).
