# Manual de Identidad · Secretaría de Modernización

Todos los proyectos de la oficina en un solo lugar: qué estilos usamos, qué componentes se pueden reutilizar y quién tiene la culpa de cada decisión de diseño.

**Este manual es de todo el equipo.** Si trabajaste en un proyecto, podés (y deberías) agregarlo, completar su ficha o sumar componentes. No hace falta pedir permiso: hacé tu rama, cargá lo tuyo y abrí un PR.

## Cómo levantarlo

```bash
pnpm install
pnpm dev
```

Antes de subir cambios, corré `pnpm build` para asegurarte de que compila.

## Qué hay adentro

| Carpeta | Qué tiene |
| --- | --- |
| `src/content/proyectos.ts` | La ficha de cada proyecto (lo que se ve en el sidebar y en la pestaña General) |
| `src/content/front/` | El contenido de la pestaña **Front** de cada proyecto |
| `src/content/registro.ts` | Conecta cada proyecto con su pestaña Front |
| `src/snippets/` | Código de layouts reutilizables (footers, navbars, sidebars, homes) |
| `src/ui/` | **Kit UI**: botones, formularios, tablas, alertas, etc. para copiar a otros proyectos |
| `public/` | Imágenes, logos y caricaturas |

## Agregar un proyecto

1. Abrí `src/content/proyectos.ts`.
2. Si el equipo no existe, creá su lista arriba (copiá una de las que ya hay):

   ```ts
   const equipoMiProyecto: Miembro[] = [
     { nombre: "Franco", rol: "Front", imagen: "/caricaturas/franco.png", color: "#DBEAFE" },
   ];
   ```

3. Agregá un objeto al array `proyectos`:

   ```ts
   {
     id: "mi-proyecto",               // va en la URL: /expediente/mi-proyecto
     expediente: "EXP-0012/26",       // el siguiente número libre
     nombre: "Mi Proyecto",
     color: "#93C5FD",
     descripcionGeneral: `Qué hace, para quién es y cómo está armado.`,
     stack: ["React", "TypeScript", "Tailwind CSS"],
     componentes: ["Login", "Listado"],
     equipo: equipoMiProyecto,
     lenguaje: ["tsx"],
     icono: Folder,                   // cualquier ícono de lucide-react (importalo arriba)
     estado: "En proceso",
     imagenes: ["/mi-proyecto/captura1.webp"], // opcional
     links: [{ label: "Producción", url: "https://..." }], // opcional
   },
   ```

Listo: aparece solo en el sidebar y en el buscador.

### Sumar la pestaña Front

1. Creá `src/content/front/MiProyecto.tsx` con un `export default function` (usá `RrhhAsistencia.tsx` de ejemplo).
2. Registralo en `src/content/registro.ts` con el **mismo `id`** del proyecto:

   ```ts
   "mi-proyecto": lazy(() => import("../content/front/MiProyecto")),
   ```

### Sobre las imágenes

- Guardalas en `public/<nombre-del-proyecto>/`.
- Usá **.webp** o **.avif** y achicalas antes de subirlas (con 1600px de ancho alcanza). Una captura en PNG puede pesar 10 veces más.
- Para componentes no hace falta captura: mostrá el componente renderizado en vivo, como en la página del Kit UI.

## Agregar un layout (footer, navbar, sidebar, home)

1. Guardá el código en `src/snippets/<tipo>/miComponente.tsx.txt`.
2. Importalo con `?raw` en la página que corresponde (`src/pages/FootersPage.tsx`, etc.) y agregá un bloque con `Subtitulo`, una descripción y `CodeBlockColapsable`. Copiá cualquiera de los que ya están.

## Kit UI

La carpeta `src/ui/` tiene componentes chicos listos para usar en cualquier proyecto nuevo o existente. Se pueden ver y descargar en la sección **Kit UI** del manual (`/ui`).

**Para usarlo en tu proyecto:** copiá la carpeta a `src/ui`, instalá `lucide-react` (y tené Tailwind CSS v4), e importá:

```tsx
import { Boton, Input, Alerta } from "./ui";
```

**Para agregar un componente al kit:**

1. Creá `src/ui/MiComponente.tsx`. Reglas: solo React, Tailwind y lucide-react; colores fijos de Tailwind o hex (no los tokens de este manual como `bg-superficie`, porque en otro proyecto no existen); un comentario arriba con un ejemplo de uso.
2. Exportalo en `src/ui/index.ts`.
3. Sumá su vista previa en `src/pages/KitUIPage.tsx`. El código y el zip se arman solos a partir de los archivos.

## Colores de este manual

Los colores del sitio están definidos una sola vez en `src/index.css` (modo claro y oscuro). En los componentes se usan por nombre: `bg-fondo`, `bg-superficie`, `text-texto`, `border-borde`, `text-acento`, `bg-marca`. Para cambiar un color en todo el sitio, se cambia solo ahí.
