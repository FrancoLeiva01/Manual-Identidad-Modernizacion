import type { ComponentType, CSSProperties } from "react";
import {
  Braces,
  Database,
  Hexagon,
  Package,
  Rocket,
  Palette,
  Server,
  Sparkles,
  SwatchBook,
} from "lucide-react";
import type { Link } from "./proyectos";

// ACA SE CARGAN LAS TECNOLOGÍAS DEL SIDEBAR

export type CategoriaId = "diseno" | "frameworks" | "datos" | "despliegue";

export const categorias: {
  id: CategoriaId;
  nombre: string;
  descripcion: string;
}[] = [
  {
    id: "diseno",
    nombre: "Diseño y estilo",
    descripcion:
      "Para que cada página tenga personalidad propia: animaciones, imágenes, colores, tipografías.",
  },
  {
    id: "frameworks",
    nombre: "Frameworks",
    descripcion:
      "Herramientas más estructuradas para sistemas grandes, con el paso a paso para arrancar rápido.",
  },
  {
    id: "datos",
    nombre: "Datos",
    descripcion:
      "Dónde guardar la información y cómo moverla de un formato a otro.",
  },

  {
    id: "despliegue",
    nombre: "Despliegues",
    descripcion:
      "Proceso de hacer que una aplicación esté disponible para los usuarios finales.",
  },
];

export interface Codigo {
  lenguaje: string;
  contenido: string;
}

export interface Paso {
  titulo: string;
  texto: string;
  codigo?: Codigo[];
  prompt?: string;
}

export interface Herramienta {
  nombre: string;
  url: string;
  descripcion: string;
}

export interface Tecnologia {
  id: string;
  nombre: string;
  // Opcional: versión corta para el sidebar si el nombre no entra
  nombreCorto?: string;
  categoria: CategoriaId;
  icono: ComponentType<{
    size?: number;
    className?: string;
    style?: CSSProperties;
  }>;
  color: string;
  resumen: string;
  descripcion: string;
  nivel: "Fácil" | "Intermedio" | "Avanzado";
  idealPara: string;
  usarCuando: string[];
  evitarCuando: string[];
  pasos: Paso[];
  herramientas?: { grupo: string; items: Herramienta[] }[];
  links: Link[];
  // Bloque interactivo que se muestra arriba del paso a paso
  demo?: "motion" | "json" | "paletas";
  // Ejemplo real de un proyecto nuestro, con vista en vivo y código
  ejemplo?: "loader-hemeroteca";
}

export const tecnologias: Tecnologia[] = [
  // ════════════════════════════ DISEÑO ════════════════════════════
  {
    id: "motion",
    nombre: "Motion",
    categoria: "diseno",
    icono: Sparkles,
    color: "#eab308",
    resumen:
      "Animaciones en React con dos props. Lo que le da vida a una página.",
    descripcion:
      "Motion (antes Framer Motion) es la librería de animaciones más usada en React. Cambiás un `<div>` por un `<motion.div>`, le decís cómo empieza y cómo termina, y Motion hace el resto: entradas suaves, hover, aparecer al hacer scroll, listas escalonadas y elementos que salen con animación. Es la que usamos en la Hemeroteca.",
    nivel: "Fácil",
    idealPara: "Sitios públicos y páginas personales",
    usarCuando: [
      "Sitios para la gente normal de la provincia que creas que va a contar con una pantalla decente (Hemeroteca, Food Truck): entradas, carruseles, cards que reaccionan al mouse.",
      "Tu portfolio o página personal: es donde más se luce.",
      "Modales, menús y avisos que aparecen y desaparecen: con animación se entiende de dónde vienen.",
    ],
    evitarCuando: [
      "Sistemas internos de oficina: monitores viejos y PCs lentas (recursos humanos), la animación molesta más de lo que suma.",
      "Animar todo a la vez: una o dos cosas por pantalla alcanzan, si no marea.",
      "Animaciones largas (más de 0.6s) en cosas que el usuario usa todo el día.",
    ],
    demo: "motion",
    ejemplo: "loader-hemeroteca",
    pasos: [
      {
        titulo: "Instalar",
        texto:
          "Un solo paquete. Funciona con React 18 y 19, y con Vite sin configurar nada.",
        codigo: [{ lenguaje: "terminal", contenido: "pnpm add motion" }],
      },
      {
        titulo: "Tu primera animación: aparecer al cargar",
        texto:
          "`initial` es cómo arranca, `animate` es cómo termina y `transition` cuánto tarda. Con opacidad + un desplazamiento chico en Y ya tenés la entrada más usada de internet.",
        codigo: [
          {
            lenguaje: "tsx",
            contenido: `import { motion } from "motion/react";

export function Hero() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-5xl font-black"
    >
      Hemeroteca Municipal
    </motion.h1>
  );
}`,
          },
        ],
        prompt:
          'Estoy en React + TypeScript + Tailwind v4 y tengo instalado `motion` (se importa desde "motion/react"). Animá la entrada de este hero: el título aparece primero subiendo 20px con fade, después el subtítulo y por último el botón, con 0.15s de diferencia entre cada uno. Usá variants y staggerChildren. Respetá prefers-reduced-motion. Este es mi componente: [pegá tu componente]',
      },
      {
        titulo: "Hover y click",
        texto:
          "`whileHover` y `whileTap` aplican estilos mientras dura la interacción y vuelven solos. Ideal para cards y botones: un `scale` de 1.03 se nota sin ser exagerado.",
        codigo: [
          {
            lenguaje: "tsx",
            contenido: `<motion.a
  href="/catalogo"
  whileHover={{ scale: 1.03, y: -4 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="block rounded-2xl bg-white p-6 shadow"
>
  Catálogo
</motion.a>`,
          },
        ],
      },
      {
        titulo: "Aparecer al hacer scroll",
        texto:
          "`whileInView` se activa cuando el elemento entra en pantalla. Con `viewport={{ once: true }}` se anima una sola vez (si no, se repite cada vez que subís y bajás, y cansa).",
        codigo: [
          {
            lenguaje: "tsx",
            contenido: `<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  ...
</motion.section>`,
          },
        ],
      },
      {
        titulo: "Listas escalonadas (una atrás de otra)",
        texto:
          "Con `variants` definís estados con nombre en el padre, y los hijos los heredan. `staggerChildren` mete una pausa entre cada hijo: queda como una cascada.",
        codigo: [
          {
            lenguaje: "tsx",
            contenido: `const lista = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  oculto: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

<motion.ul variants={lista} initial="oculto" whileInView="visible" viewport={{ once: true }}>
  {noticias.map((n) => (
    <motion.li key={n.id} variants={item}>
      {n.titulo}
    </motion.li>
  ))}
</motion.ul>`,
          },
        ],
      },
      {
        titulo: "Que algo desaparezca con animación",
        texto:
          "React borra el elemento de golpe, así que no hay tiempo de animar la salida. `AnimatePresence` lo resuelve: lo mantiene vivo hasta que termina el `exit`. Sirve para modales, toasts y menús.",
        codigo: [
          {
            lenguaje: "tsx",
            contenido: `import { AnimatePresence, motion } from "motion/react";

<AnimatePresence>
  {abierto && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 grid place-items-center bg-black/50"
    >
      ...
    </motion.div>
  )}
</AnimatePresence>`,
          },
        ],
        prompt:
          'Tengo este modal en React + Tailwind que se abre con un useState. Agregale animación de entrada y salida con AnimatePresence de "motion/react": el fondo hace fade y la caja escala de 0.95 a 1. Que cierre con Escape y clic afuera. [pegá tu modal]',
      },
      {
        titulo: "Respetar a quien no quiere animaciones",
        texto:
          'Hay personas a las que el movimiento les genera mareo, y lo desactivan en el sistema operativo. Envolviendo la app en `MotionConfig` con `reducedMotion="user"`, Motion apaga los movimientos (deja solo los fades) cuando la persona lo pidió. Una línea y quedás bien con todos.',
        codigo: [
          {
            lenguaje: "tsx",
            contenido: `import { MotionConfig } from "motion/react";

<MotionConfig reducedMotion="user">
  <App />
</MotionConfig>`,
          },
        ],
      },
    ],
    links: [
      { label: "Documentación oficial", url: "https://motion.dev/docs/react" },
      { label: "Ejemplos para copiar", url: "https://motion.dev/examples" },
    ],
  },
  {
    id: "canva",
    nombre: "Canva",
    categoria: "diseno",
    icono: Palette,
    color: "#00c4cc",
    resumen:
      "Imágenes, banners, fondos e ilustraciones propias sin saber Photoshop.",
    descripcion:
      "Canva es un editor de diseño online. Para nosotros es la forma más rápida de tener imágenes propias en vez de fotos genéricas: la portada del hero, las imágenes de las cards, la imagen que aparece cuando compartís el link por WhatsApp, íconos, fondos con formas y hasta la presentación del proyecto. Tiene miles de plantillas y herramientas de IA (Magic Studio) para generar o editar imágenes.",
    nivel: "Fácil",
    idealPara: "Imágenes del hero, cards y redes",
    usarCuando: [
      "Necesitás una imagen de portada o un banner con la identidad de la Muni.",
      "Querés que las cards de una página tengan imágenes propias y no stock repetido.",
      "Armar la imagen de vista previa del link (la que sale en WhatsApp o Facebook).",
      "Mockups rápidos para mostrarle una idea a alguien antes de programarla.",
    ],
    evitarCuando: [
      "Íconos de interfaz (lupa, flechas, menú): para eso usá Lucide, que ya viene en el proyecto.",
      "Diseñar la pantalla entera para después copiarla en código: se pierde mucho tiempo. Mejor bocetá y programá.",
      "Logos oficiales: usá siempre los archivos del manual de marca, nunca uno rehecho.",
    ],
    pasos: [
      {
        titulo: "Arrancar con la medida correcta",
        texto:
          "En Canva: Crear un diseño → Tamaño personalizado. Diseñar en la medida final evita imágenes estiradas o pixeladas. Estas son las que más usamos:",
        codigo: [
          {
            lenguaje: "medidas (px)",
            contenido: `Hero / portada a pantalla completa   1920 × 1080
Banner angosto                        1920 × 600
Imagen de card                         800 × 600
Vista previa de link (Open Graph)     1200 × 630
Favicon / ícono de la app              512 × 512
Historia de Instagram                 1080 × 1920`,
          },
        ],
      },
      {
        titulo: "Usar los colores del manual",
        texto:
          'Cargá los colores con su código hex en el selector de color (el + de la paleta). Con Canva Pro podés guardarlos en un Kit de marca; sin Pro, hacé un diseño llamado "Paleta Muni" con un cuadrado de cada color y duplicalo como punto de partida.\n\nLos de este manual son: cyan `#0891b2`, naranja `#f97316`, azul noche `#0f172a` y gris `#f1f5f9`.',
      },
      {
        titulo: "Exportar en el formato que corresponde",
        texto:
          "Compartir → Descargar. La regla es simple: JPG para fotos, PNG si necesitás transparencia (el fondo transparente es de Pro), SVG para ilustraciones e íconos simples (también Pro). Después pasala por Squoosh (squoosh.app) y convertila a WebP o AVIF: pesa entre 5 y 10 veces menos, y la página carga volando incluso con datos móviles.",
      },
      {
        titulo: "Ponerla en la página",
        texto:
          "Dejá la imagen en la carpeta `public/` del proyecto y referenciala con `/` adelante. Siempre con `alt` (lo leen los lectores de pantalla) y con `width`/`height` para que la página no salte mientras carga.",
        codigo: [
          {
            lenguaje: "tsx",
            contenido: `{/* Imagen de fondo con velo, como el hero de este manual */}
<section className="relative h-[70vh] overflow-hidden">
  <img
    src="/hero-hemeroteca.webp"
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />
  <div className="absolute inset-0 bg-linear-to-r from-slate-900/70 to-slate-900/10" />
  <div className="relative z-10 p-10 text-white">...</div>
</section>`,
          },
        ],
        prompt:
          "Tengo una imagen en /public/hero.webp de 1920x1080. Armame un hero en React + Tailwind v4 con esa imagen de fondo cubriendo todo, un velo degradado de #0f172a (70% a la izquierda, 10% a la derecha) para que se lea el texto, un título grande, un subtítulo y un botón naranja #f97316. Que en celular el texto quede centrado.",
      },
      {
        titulo: "La imagen para cuando comparten el link",
        texto:
          "Cuando alguien pega el link de tu página en WhatsApp, aparece una vista previa. Esa imagen se define con etiquetas `og:` en el `index.html`. Diseñala en 1200×630 con el nombre del sitio grande y el logo.",
        codigo: [
          {
            lenguaje: "index.html",
            contenido: `<meta property="og:title" content="Hemeroteca Municipal" />
<meta property="og:description" content="Diarios y libros digitalizados de Catamarca." />
<meta property="og:image" content="https://tu-dominio.gob.ar/og-imagen.jpg" />`,
          },
        ],
      },
      {
        titulo: "Ideas para darle estilo propio",
        texto:
          'Algunas cosas que en Canva salen en minutos y cambian mucho una página:\n\n• Un fondo con formas suaves (buscá "blob" o "wave" en Elementos) en los colores del sitio.\n• Fotos recortadas en formas (círculo, arco) con el marco de Elementos → "Marcos".\n• Una textura de papel o grano encima de una foto, bajando la transparencia (como la Hemeroteca).\n• Caricaturas o ilustraciones del equipo para la sección Nosotros.',
      },
    ],
    links: [
      { label: "Canva", url: "https://www.canva.com" },
      { label: "Squoosh (comprimir imágenes)", url: "https://squoosh.app" },
    ],
  },
  {
    id: "recursos-diseno",
    nombre: "Caja de herramientas",
    nombreCorto: "Herramientas",
    categoria: "diseno",
    icono: SwatchBook,
    color: "#f97316",
    resumen:
      "Paletas, tipografías, ilustraciones, fondos y componentes listos. Todo gratis.",
    descripcion:
      "Una lista curada de páginas que conviene tener a mano cuando arrancás un diseño. Ninguna requiere instalar nada: entrás, elegís y copiás. La idea es que cada página que hagamos (de la Muni o personal) tenga su propia identidad sin tener que ser diseñador.",
    nivel: "Fácil",
    idealPara: "Arrancar cualquier diseño",
    demo: "paletas",
    usarCuando: [
      "Arrancás un proyecto y no sabés qué colores o fuente usar.",
      "Necesitás una ilustración, un fondo o un ícono puntual.",
      "Querés un componente llamativo (botón, loader, card) sin hacerlo de cero.",
    ],
    evitarCuando: [
      "En sistemas internos, no cambies los colores del manual: usá esta caja para sitios públicos o personales.",
      "Copiar componentes enormes que no entendés: después no los podés mantener.",
    ],
    herramientas: [
      {
        grupo: "Colores",
        items: [
          {
            nombre: "Coolors",
            url: "https://coolors.co",
            descripcion:
              "Generador de paletas: tocás espacio y aparece otra. Bloqueás las que te gustan.",
          },
          {
            nombre: "UI Colors",
            url: "https://uicolors.app",
            descripcion:
              "Le das un color y te arma la escala 50–950 lista para Tailwind.",
          },
        ],
      },
      {
        grupo: "Tipografías",
        items: [
          {
            nombre: "Google Fonts",
            url: "https://fonts.google.com",
            descripcion:
              "La biblioteca clásica. Filtrá por categoría y probá con tu propio texto.",
          },
          {
            nombre: "Fontshare",
            url: "https://www.fontshare.com",
            descripcion:
              "Fuentes gratuitas de muy buena calidad, menos vistas que las de Google.",
          },
        ],
      },
      {
        grupo: "Íconos e ilustraciones",
        items: [
          {
            nombre: "Lucide",
            url: "https://lucide.dev",
            descripcion:
              "Los íconos que usa este manual. Buscás, copiás el nombre y lo importás de lucide-react.",
          },
          {
            nombre: "unDraw",
            url: "https://undraw.co",
            descripcion:
              "Ilustraciones planas (medio meh) donde elegís el color principal antes de bajarlas.",
          },
          {
            nombre: "Storyset",
            url: "https://storyset.com",
            descripcion: "Ilustraciones editables y animables, varios estilos.",
          },
        ],
      },
      {
        grupo: "Fondos y texturas",
        items: [
          {
            nombre: "Haikei",
            url: "https://haikei.app",
            descripcion:
              "Olas, blobs y degradados en SVG con tus colores. Pesan casi nada.",
          },
          {
            nombre: "fffuel",
            url: "https://www.fffuel.co",
            descripcion:
              "Generadores de patrones, ruido, gradientes y formas en SVG.",
          },
        ],
      },
      {
        grupo: "Componentes listos",
        items: [
          {
            nombre: "Uiverse",
            url: "https://uiverse.io",
            descripcion:
              "Botones, loaders, toggles y cards hechos por la comunidad, en Tailwind o CSS.",
          },
          {
            nombre: "shadcn/ui",
            url: "https://ui.shadcn.com",
            descripcion:
              "Componentes accesibles que se copian a tu proyecto. Muy prolijos.",
          },
          {
            nombre: "Magic UI",
            url: "https://magicui.design",
            descripcion:
              "Efectos llamativos (marquees, brillos, partículas) hechos con Motion.",
          },
        ],
      },
      {
        grupo: "Imágenes y animaciones",
        items: [
          {
            nombre: "Squoosh",
            url: "https://squoosh.app",
            descripcion:
              "Comprime y convierte imágenes a WebP/AVIF en el navegador.",
          },
          {
            nombre: "Unsplash",
            url: "https://unsplash.com",
            descripcion: "Fotos libres de alta calidad.",
          },
          {
            nombre: "LottieFiles",
            url: "https://lottiefiles.com",
            descripcion:
              "Animaciones livianas (ícono que se dibuja, check animado, etc.).",
          },
        ],
      },
    ],
    pasos: [
      {
        titulo: "Elegir una paleta en 5 minutos",
        texto:
          "La receta que casi nunca falla: un color de marca (el protagonista), un color de acento para los botones importantes, y grises para todo lo demás. Generá en Coolors, probá en Realtime Colors y llevá los valores a variables CSS, igual que en el `index.css` de este manual: así cambiás un color en un solo lugar.",
        codigo: [
          {
            lenguaje: "index.css",
            contenido: `@import "tailwindcss";

:root {
  --marca: #0e7490;
  --acento: #f97316;
  --fondo: #f8fafc;
}

@theme inline {
  --color-marca: var(--marca);
  --color-acento: var(--acento);
  --color-fondo: var(--fondo);
}
/* Ahora tenés bg-marca, text-acento, bg-fondo, etc. */`,
          },
        ],
        prompt:
          "Armame una paleta para un sitio de [tema, ej: un food truck municipal] que se sienta [cálido / moderno / institucional]. Dame: color de marca, acento, fondo, superficie, texto y texto suave, en modo claro y oscuro, con contraste AA. Devolvémelo como variables CSS en :root y .dark más el bloque @theme inline de Tailwind v4.",
      },
      {
        titulo: "Sumar una tipografía de Google Fonts",
        texto:
          "Una fuente para títulos con personalidad + una neutra para el texto ya cambia muchísimo. Elegí en Google Fonts, copiá el `@import` y registrala en Tailwind v4 con `@theme`. Después la usás con `font-titulo`.",
        codigo: [
          {
            lenguaje: "index.css",
            contenido: `@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@600;800&family=Inter:wght@400;600&display=swap");
@import "tailwindcss";

@theme {
  --font-titulo: "Fraunces", serif;
  --font-sans: "Inter", sans-serif;
}`,
          },
          {
            lenguaje: "tsx",
            contenido: `<h1 className="font-titulo text-6xl">Hemeroteca</h1>`,
          },
        ],
      },
      {
        titulo: "Un fondo que no sea blanco liso",
        texto:
          'En Haikei elegís un generador (por ejemplo "Layered Waves" o "Blob Scene"), le ponés tus colores y descargás el SVG. Lo dejás en `public/` y lo usás de fondo de una sección. Pesa 2 o 3 KB y le da muchísimo carácter.',
        codigo: [
          {
            lenguaje: "tsx",
            contenido: `<section
  style={{ backgroundImage: "url(/olas.svg)" }}
  className="bg-cover bg-bottom py-24"
>
  ...
</section>`,
          },
        ],
      },
    ],
    links: [],
  },

  // ════════════════════════════ FRAMEWORKS ════════════════════════════
  {
    id: "angular",
    nombre: "Angular",
    categoria: "frameworks",
    icono: Hexagon,
    color: "#c026d3",
    resumen:
      "El framework de Google que trae todo incluido y te obliga a ser ordenado.",
    descripcion:
      'Angular es un framework completo: rutas, formularios, llamadas HTTP, validaciones e inyección de dependencias vienen de fábrica, y todos los proyectos tienen la misma estructura. Eso lo hace más "rígido" que React, pero justamente por eso es bueno para sistemas grandes donde trabajan varias personas: cualquiera abre el proyecto y sabe dónde está cada cosa. Las versiones nuevas (17 en adelante) son mucho más simples que las viejas: componentes standalone, signals y `@if`/`@for` en los templates.',
    nivel: "Intermedio",
    idealPara: "Sistemas internos grandes",
    usarCuando: [
      "Un sistema grande, con muchos formularios y pantallas, que van a mantener varias personas por años.",
      "Querés que el framework decida la estructura por vos y no discutir cómo organizar carpetas.",
      "Te interesa aprenderlo: se pide mucho en el sector público y en empresas grandes.",
    ],
    evitarCuando: [
      "Una landing o un sitio chico: es mucha estructura para poca cosa. Con React + Vite vas más rápido.",
      "El resto del equipo del proyecto trabaja en React: mejor no mezclar.",
    ],
    pasos: [
      {
        titulo: "Instalar y crear el proyecto",
        texto:
          "Necesitás Node.js instalado. El CLI de Angular (`ng`) crea el proyecto, genera componentes y levanta el servidor. Cuando `ng new` te pregunte, elegí CSS y decí que no a SSR (no lo necesitamos para sistemas internos).",
        codigo: [
          {
            lenguaje: "terminal",
            contenido: `npm install -g @angular/cli
ng new mi-sistema
cd mi-sistema
ng serve        # abre en http://localhost:4200`,
          },
        ],
      },
      {
        titulo: "Entender la estructura",
        texto:
          'Lo importante está en `src/app/`:\n\n• `app.ts` (o `app.component.ts` en versiones anteriores): el componente raíz.\n• `app.routes.ts`: qué componente se muestra en cada URL.\n• `app.config.ts`: los "providers" globales (rutas, HTTP, etc.).\n\nCada componente es una clase con el decorador `@Component`, que tiene su template (HTML) y sus estilos.',
        prompt:
          "Soy dev React y estoy arrancando con Angular [versión, mirala en package.json]. Explicame la estructura de este proyecto comparándola con React: qué es un componente standalone, qué son los signals (comparado con useState), cómo funciona la inyección de dependencias (comparado con un hook o un context) y para qué sirve app.config.ts. Ejemplos cortos.",
      },
      {
        titulo: "Crear un componente",
        texto:
          "Con `ng generate component` (o `ng g c`) se crean los archivos solos. Los datos que cambian van en un `signal`, y en el template se leen llamándolos como función: `agentes()`.",
        codigo: [
          { lenguaje: "terminal", contenido: "ng g c agentes/listado-agentes" },
          {
            lenguaje: "listado-agentes.ts",
            contenido: `import { Component, signal } from "@angular/core";

@Component({
  selector: "app-listado-agentes",
  template: \`
    <h2>Agentes ({{ agentes().length }})</h2>
    <ul>
      @for (a of agentes(); track a.id) {
        <li>{{ a.nombre }} — {{ a.area }}</li>
      } @empty {
        <li>No hay agentes cargados</li>
      }
    </ul>
  \`,
})
export class ListadoAgentes {
  agentes = signal([
    { id: 1, nombre: "Pérez, Juana", area: "RRHH" },
    { id: 2, nombre: "Gómez, Raúl", area: "Tesorería" },
  ]);
}`,
          },
        ],
      },
      {
        titulo: "Agregar rutas",
        texto:
          "En `app.routes.ts` asociás una URL a un componente. En el template del componente raíz tiene que estar `<router-outlet />`, que es donde se dibuja la página actual.",
        codigo: [
          {
            lenguaje: "app.routes.ts",
            contenido: `import { Routes } from "@angular/router";
import { ListadoAgentes } from "./agentes/listado-agentes/listado-agentes";

export const routes: Routes = [
  { path: "agentes", component: ListadoAgentes },
  { path: "", redirectTo: "agentes", pathMatch: "full" },
];`,
          },
        ],
      },
      {
        titulo: "Traer datos de una API",
        texto:
          "Las llamadas HTTP van en un servicio (una clase que se comparte entre componentes). Primero habilitás el cliente HTTP en `app.config.ts`, después lo pedís con `inject()`.",
        codigo: [
          { lenguaje: "terminal", contenido: "ng g service services/agentes" },
          {
            lenguaje: "app.config.ts",
            contenido: `import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};`,
          },
          {
            lenguaje: "agentes.ts",
            contenido: `import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Agente { id: number; nombre: string; area: string }

@Injectable({ providedIn: "root" })
export class AgentesService {
  private http = inject(HttpClient);

  listar() {
    return this.http.get<Agente[]>("http://localhost:3000/agentes");
  }
}`,
          },
        ],
        prompt:
          'Angular [versión], componentes standalone y signals. Tengo el servicio AgentesService con listar() que devuelve un Observable<Agente[]>. Hacé que el componente ListadoAgentes lo use: mostrando "Cargando…" mientras espera, un mensaje si falla, y la tabla cuando llegan los datos. Usá toSignal o un signal + subscribe, lo que sea más simple, y @if/@for en el template.',
      },
      {
        titulo: "Sumar Tailwind para usar el mismo estilo",
        texto:
          "Así podés reutilizar las clases y la paleta de este manual. Creá el archivo `.postcssrc.json` en la raíz del proyecto y agregá el import en `src/styles.css`.",
        codigo: [
          {
            lenguaje: "terminal",
            contenido: "npm install tailwindcss @tailwindcss/postcss postcss",
          },
          {
            lenguaje: ".postcssrc.json",
            contenido: `{
  "plugins": { "@tailwindcss/postcss": {} }
}`,
          },
          { lenguaje: "src/styles.css", contenido: `@import "tailwindcss";` },
        ],
      },
    ],
    links: [
      { label: "Documentación oficial", url: "https://angular.dev" },
      { label: "Tutorial interactivo", url: "https://angular.dev/tutorials" },
    ],
  },
  {
    id: "nestjs",
    nombre: "NestJS",
    categoria: "frameworks",
    icono: Server,
    color: "#e0234e",
    resumen:
      "Backend en TypeScript, ordenado por módulos. El que usan RRHH y Asistencia.",
    descripcion:
      "NestJS es un framework para hacer APIs con Node.js y TypeScript. Está inspirado en Angular: todo se organiza en módulos, controllers (reciben la petición) y services (hacen el trabajo). Es lo que usamos en el back de RRHH y RRHH Asistencia. Si venís del front, es la forma más amable de empezar a hacer backend, porque es el mismo lenguaje.",
    nivel: "Intermedio",
    idealPara: "APIs de sistemas internos",
    usarCuando: [
      "Un sistema necesita su propia API con login, roles y base de datos.",
      "Querés entender cómo está hecho el back de los sistemas de la Muni para poder meter mano.",
      "Ya sabés TypeScript y querés hacer backend sin aprender otro lenguaje.",
    ],
    evitarCuando: [
      "Solo necesitás guardar unos datos para un sitio chico: PocketBase o Directus te lo dan hecho.",
      "Es un prototipo de un día: tanta estructura te va a frenar.",
    ],
    pasos: [
      {
        titulo: "Crear el proyecto",
        texto:
          "El CLI de Nest crea todo y te pregunta qué gestor de paquetes usar. `start:dev` reinicia solo cada vez que guardás.",
        codigo: [
          {
            lenguaje: "terminal",
            contenido: `npm i -g @nestjs/cli
nest new api-agentes
cd api-agentes
npm run start:dev     # http://localhost:3000`,
          },
        ],
      },
      {
        titulo: "Las tres piezas: módulo, controller y service",
        texto:
          '• El controller define las rutas (`GET /agentes`, `POST /agentes`) y recibe los datos.\n• El service tiene la lógica: consultar la base, calcular, validar reglas.\n• El módulo junta un controller con sus services. Cada "tema" del sistema (agentes, licencias, feriados) es un módulo.\n\nRegla de oro: el controller no piensa, solo recibe y le pasa al service.',
      },
      {
        titulo: "Un CRUD completo con un comando",
        texto:
          '`nest g resource` genera módulo, controller, service, DTOs y entidad, con los 5 endpoints armados (listar, ver uno, crear, editar, borrar). Elegí "REST API" y decí que sí a los CRUD entry points.',
        codigo: [
          { lenguaje: "terminal", contenido: "nest g resource agentes" },
        ],
        prompt:
          'Estoy en NestJS con TypeORM y PostgreSQL. Generé el resource "agentes" con nest g resource. Completame: la entidad Agente (id, legajo único, nombre, cuil, area, activo, fechas de creación y actualización), el CreateAgenteDto con class-validator, y el service usando el Repository de TypeORM. En findAll agregá paginación (page, limit) y filtro opcional por area.',
      },
      {
        titulo: "Conectar a PostgreSQL",
        texto:
          'Con TypeORM, cada tabla es una clase ("entidad"). Ojo: `synchronize: true` crea y modifica las tablas solo, es cómodo para desarrollo pero nunca se usa en producción porque puede borrar columnas.',
        codigo: [
          {
            lenguaje: "terminal",
            contenido: "npm i @nestjs/typeorm typeorm pg @nestjs/config",
          },
          {
            lenguaje: "app.module.ts",
            contenido: `@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT ?? 5432),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // ⚠️ solo en desarrollo
    }),
    AgentesModule,
  ],
})
export class AppModule {}`,
          },
          {
            lenguaje: ".env",
            contenido: `DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_clave
DB_NAME=rrhh_dev`,
          },
          {
            lenguaje: "agente.entity.ts",
            contenido: `@Entity("agentes")
export class Agente {
  @PrimaryGeneratedColumn() id: number;
  @Column({ unique: true }) legajo: number;
  @Column() nombre: string;
  @Column({ nullable: true }) area: string;
  @Column({ default: true }) activo: boolean;
  @CreateDateColumn() creadoEn: Date;
}`,
          },
        ],
      },
      {
        titulo: "Validar lo que llega",
        texto:
          "Nunca confíes en lo que manda el front. Con los decoradores de class-validator en el DTO y un `ValidationPipe` global, Nest rechaza solo cualquier pedido mal armado con un error 400 claro.",
        codigo: [
          {
            lenguaje: "terminal",
            contenido: "npm i class-validator class-transformer",
          },
          {
            lenguaje: "create-agente.dto.ts",
            contenido: `import { IsInt, IsOptional, IsString, Length } from "class-validator";

export class CreateAgenteDto {
  @IsInt() legajo: number;
  @IsString() @Length(3, 120) nombre: string;
  @IsOptional() @IsString() area?: string;
}`,
          },
          {
            lenguaje: "main.ts",
            contenido: `const app = await NestFactory.create(AppModule);
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
app.enableCors({ origin: "http://localhost:5173" }); // el front de Vite
await app.listen(3000);`,
          },
        ],
      },
      {
        titulo: "Probar los endpoints",
        texto:
          'Con la extensión REST Client de VS Code (o Thunder Client / Postman) probás sin tener el front. Creá un archivo `pruebas.http` y apretá "Send Request" arriba de cada pedido.',
        codigo: [
          {
            lenguaje: "pruebas.http",
            contenido: `GET http://localhost:3000/agentes

###
POST http://localhost:3000/agentes
Content-Type: application/json

{ "legajo": 1234, "nombre": "Pérez, Juana", "area": "RRHH" }`,
          },
        ],
        prompt:
          "Tengo este error en NestJS al hacer [GET/POST] a [ruta]: [pegá el error COMPLETO de la terminal]. Este es mi controller: [pegalo] y mi service: [pegalo]. Explicame qué lo causa y cómo lo arreglo, sin cambiar el resto.",
      },
    ],
    links: [
      { label: "Documentación oficial", url: "https://docs.nestjs.com" },
      {
        label: "Nest + TypeORM",
        url: "https://docs.nestjs.com/techniques/database",
      },
    ],
  },

  // ════════════════════════════ DATOS ════════════════════════════
  {
    id: "postgres-pgadmin",
    nombre: "PostgreSQL + pgAdmin",
    nombreCorto: "PostgreSQL",
    categoria: "datos",
    icono: Database,
    color: "#3b82f6",
    resumen:
      "La base de datos de los sistemas grandes, y el programa para verla con ventanitas.",
    descripcion:
      "PostgreSQL es la base de datos relacional que usamos en los sistemas serios (RRHH, Asistencia). pgAdmin es el programa para manejarla con interfaz gráfica: ver tablas, correr consultas, importar datos y hacer backups sin saber todos los comandos de memoria. Se instalan juntos.",
    nivel: "Intermedio",
    idealPara: "Sistemas con muchos datos relacionados",
    usarCuando: [
      "Datos que se relacionan entre sí (agentes → licencias → tipos de licencia).",
      "Mucha información, muchos usuarios a la vez, o reportes con filtros complejos.",
      "Querés revisar o arreglar datos de tu base local mientras desarrollás.",
    ],
    evitarCuando: [
      "Un sitio con 20 noticias y un formulario: PocketBase es mucho más simple.",
      "Tocar la base de producción a mano desde pgAdmin: siempre con backup y avisando.",
    ],
    pasos: [
      {
        titulo: "Instalar",
        texto:
          "Bajá el instalador de Windows desde postgresql.org (te lleva al de EDB). Dejá tildado pgAdmin 4. Durante la instalación te pide una contraseña para el usuario `postgres`: anotala, la vas a necesitar siempre. El puerto por defecto es 5432.",
      },
      {
        titulo: "Conectarte desde pgAdmin",
        texto:
          "Abrí pgAdmin. Si tu servidor ya aparece en la lista de la izquierda, hacé doble click y poné la contraseña. Si no: click derecho en Servers → Register → Server… En la pestaña Connection: host `localhost`, puerto `5432`, usuario `postgres` y tu contraseña.",
      },
      {
        titulo: "Crear una base de datos",
        texto:
          "Click derecho en Databases → Create → Database… Poné un nombre en minúsculas y sin espacios, por ejemplo `rrhh_dev`. Una base por proyecto, y si podés, una para desarrollo separada de la real.",
      },
      {
        titulo: "Crear una tabla y cargar datos",
        texto:
          "Seleccioná tu base y abrí Tools → Query Tool. Pegá el SQL y ejecutalo con F5 (o el botón ▶).",
        codigo: [
          {
            lenguaje: "sql",
            contenido: `CREATE TABLE agentes (
  id         SERIAL PRIMARY KEY,
  legajo     INTEGER UNIQUE NOT NULL,
  nombre     VARCHAR(120) NOT NULL,
  area       VARCHAR(80),
  activo     BOOLEAN DEFAULT true,
  creado_en  TIMESTAMP DEFAULT now()
);

INSERT INTO agentes (legajo, nombre, area) VALUES
  (1001, 'Pérez, Juana', 'RRHH'),
  (1002, 'Gómez, Raúl', 'Tesorería');

SELECT * FROM agentes WHERE activo = true ORDER BY nombre;`,
          },
        ],
        prompt:
          "Necesito una tabla en PostgreSQL para [qué guarda]. Este es un ejemplo de los datos con valores INVENTADOS: [pegá 3 filas de ejemplo]. Generame el CREATE TABLE con tipos correctos, clave primaria, restricciones (NOT NULL, UNIQUE) e índices para las columnas por las que voy a buscar: [columnas]. Explicame por qué elegiste cada tipo.",
      },
      {
        titulo: "Importar un Excel",
        texto:
          "Guardá el Excel como CSV (Archivo → Guardar como → CSV UTF-8). En pgAdmin: click derecho en la tabla → Import/Export Data… Elegí Import, el archivo, y en Options activá Header. Las columnas del CSV tienen que coincidir con las de la tabla. Si el Excel está en español, probablemente el separador sea `;` en vez de `,`.",
      },
      {
        titulo: "Backup y restore",
        texto:
          'Antes de cualquier cambio grande: click derecho en la base → Backup… → formato Custom. Para volver atrás: click derecho → Restore… y elegís ese archivo. Es tu botón de "deshacer".',
        prompt:
          "Tengo esta consulta SQL en PostgreSQL que tarda mucho: [pegá la consulta]. Las tablas tienen esta estructura: [pegá los CREATE TABLE]. ¿Cómo la optimizo? Decime qué índices crear y cómo verificarlo con EXPLAIN ANALYZE.",
      },
    ],
    links: [
      {
        label: "Descargar PostgreSQL",
        url: "https://www.postgresql.org/download/windows/",
      },
      {
        label: "Documentación de pgAdmin",
        url: "https://www.pgadmin.org/docs/",
      },
    ],
  },
  {
    id: "pocketbase",
    nombre: "PocketBase",
    categoria: "datos",
    icono: Package,
    color: "#10b981",
    resumen:
      "Un backend completo en un solo archivo: base de datos, login, archivos y panel admin.",
    descripcion:
      "PocketBase es un ejecutable que, cuando lo abrís, te da una base de datos, una API lista para usar, login de usuarios, subida de archivos y un panel de administración web para cargar datos. Cero código de backend. Es perfecto para sitios públicos chicos, prototipos, formularios y proyectos personales: en 10 minutos tenés un back funcionando.",
    nivel: "Fácil",
    idealPara: "Prototipos y sitios chicos",
    usarCuando: [
      "Un sitio que necesita guardar cosas (noticias, inscripciones, turnos) y no querés programar un back.",
      "Un prototipo para mostrar una idea con datos reales.",
      "Tu proyecto personal: lo subís a cualquier servidor barato y listo.",
    ],
    evitarCuando: [
      "Sistemas internos grandes, con lógica compleja e integraciones: eso va en NestJS + PostgreSQL.",
      "Muchísimos usuarios escribiendo a la vez: usa SQLite por dentro, tiene su techo.",
    ],
    pasos: [
      {
        titulo: "Descargar y levantar",
        texto:
          "Bajá el zip para Windows desde pocketbase.io/docs, descomprimilo en una carpeta y abrí una terminal ahí. La primera vez que entres al panel te pide crear una cuenta de superusuario (el administrador).",
        codigo: [
          {
            lenguaje: "terminal",
            contenido: `.\\pocketbase.exe serve

# API:   http://127.0.0.1:8090/api/
# Panel: http://127.0.0.1:8090/_/`,
          },
        ],
      },
      {
        titulo: "Crear una colección",
        texto:
          "En el panel: New collection → tipo Base. Cada colección es como una tabla. Agregá campos: texto, número, booleano, fecha, archivo (para imágenes) o relación (para vincular con otra colección). Por ejemplo, `noticias` con `titulo` (text), `cuerpo` (editor), `imagen` (file) y `publicada` (bool).",
      },
      {
        titulo: "Decidir quién puede ver y editar",
        texto:
          "En la pestaña API Rules de la colección. Por defecto todo está bloqueado (solo el superusuario). Para que cualquiera pueda leer, desbloqueá List y View y dejalas vacías. Para filtrar, escribí una regla:",
        codigo: [
          {
            lenguaje: "reglas",
            contenido: `publicada = true              # el público solo ve las publicadas
@request.auth.id != ""        # solo usuarios logueados
@request.auth.id = autor.id   # solo el dueño del registro`,
          },
        ],
      },
      {
        titulo: "Usarlo desde React",
        texto:
          "Con el SDK oficial, leer y escribir es una línea. Creá un archivo `pb.ts` con la conexión y usalo desde cualquier componente.",
        codigo: [
          { lenguaje: "terminal", contenido: "pnpm add pocketbase" },
          {
            lenguaje: "src/lib/pb.ts",
            contenido: `import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");`,
          },
          {
            lenguaje: "tsx",
            contenido: `// Listar (página 1, de a 20, las más nuevas primero)
const { items } = await pb.collection("noticias").getList(1, 20, {
  filter: "publicada = true",
  sort: "-created",
});

// URL de una imagen subida
const url = pb.files.getURL(noticia, noticia.imagen);

// Crear
await pb.collection("inscripciones").create({ nombre, email, taller: "Cerámica" });

// Login
await pb.collection("users").authWithPassword(email, clave);
pb.authStore.isValid; // true si está logueado`,
          },
        ],
        prompt:
          'Uso PocketBase con el SDK de JS ("pocketbase") en React + TypeScript + Tailwind. Tengo la colección "noticias" con campos: titulo (text), cuerpo (editor), imagen (file), publicada (bool). Creame un hook useNoticias() que traiga las publicadas ordenadas por fecha, con estados de carga y error, y un componente que las muestre en cards con la imagen usando pb.files.getURL. Tipá el record.',
      },
      {
        titulo: "Llevarlo a un servidor",
        texto:
          "Es un solo archivo, así que se sube a cualquier servidor Linux y se corre igual. Todo lo que cargaste vive en la carpeta `pb_data`: esa es la que hay que respaldar. Para algo de la Muni, coordinalo con el equipo de infraestructura.",
      },
    ],
    links: [
      { label: "Documentación oficial", url: "https://pocketbase.io/docs/" },
      {
        label: "SDK de JavaScript",
        url: "https://github.com/pocketbase/js-sdk",
      },
    ],
  },
  {
    id: "json",
    nombre: "JSON y conversiones",
    nombreCorto: "JSON",
    categoria: "datos",
    icono: Braces,
    color: "#84cc16",
    resumen:
      "Pasar un Excel o CSV a JSON y usarlo en tu página. Con conversor incluido.",
    descripcion:
      "JSON es el formato en el que viajan casi todos los datos en la web: lo que devuelve una API, lo que guardás en un archivo de configuración, lo que lee tu componente. Muchas veces la información nos llega en Excel (listado de barrios, de dependencias, de feriados) y hay que pasarla a JSON para usarla. Acá tenés cómo hacerlo, y un conversor que funciona dentro de esta misma página.",
    nivel: "Fácil",
    idealPara: "Datos fijos y planillas",
    usarCuando: [
      "Datos que casi no cambian (barrios, dependencias, preguntas frecuentes): un JSON en el proyecto y listo, sin base de datos.",
      "Te pasan un Excel y necesitás mostrarlo en una tabla o un select.",
      "El usuario sube un Excel y hay que leerlo en el navegador (como en RRHH Asistencia).",
    ],
    evitarCuando: [
      "Datos que cambian todos los días o que cargan varias personas: eso va en una base de datos.",
      "Datos personales (DNI, CUIL, sueldos) dentro del código del front: cualquiera los puede ver.",
    ],
    demo: "json",
    pasos: [
      {
        titulo: "Las reglas del JSON",
        texto:
          "Se parece a un objeto de JavaScript pero es más estricto: las claves van siempre entre comillas dobles, no se permiten comas al final ni comentarios. Si algo falla al leerlo, en el 90% de los casos es una de esas tres cosas.",
        codigo: [
          {
            lenguaje: "barrios.json",
            contenido: `[
  { "id": 1, "nombre": "Centro", "zona": "Norte", "activo": true },
  { "id": 2, "nombre": "Villa Cubas", "zona": "Este", "activo": true }
]`,
          },
        ],
      },
      {
        titulo: "Convertir un Excel una sola vez",
        texto:
          "Para datos fijos: abrí el Excel, copiá las celdas (con los encabezados) y pegalas en el conversor de arriba. Te da el JSON listo para copiar o descargar. Todo pasa en tu navegador: los datos no se mandan a ningún lado.",
      },
      {
        titulo: "Usar el JSON en React",
        texto:
          "Guardalo en `src/data/` e importalo como si fuera un módulo. Vite lo entiende solo y TypeScript adivina los tipos.",
        codigo: [
          {
            lenguaje: "tsx",
            contenido: `import barrios from "../data/barrios.json";

<select>
  {barrios.map((b) => (
    <option key={b.id} value={b.id}>{b.nombre}</option>
  ))}
</select>`,
          },
        ],
      },
      {
        titulo: "Leer un Excel que sube el usuario",
        texto:
          "Con SheetJS se lee el archivo directo en el navegador, sin mandarlo al servidor. Así lo hace RRHH Asistencia: lee, muestra para revisar, y recién ahí guarda.",
        codigo: [
          {
            lenguaje: "terminal",
            contenido:
              "pnpm add https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz",
          },
          {
            lenguaje: "tsx",
            contenido: `import * as XLSX from "xlsx";

async function leerExcel(archivo: File) {
  const libro = XLSX.read(await archivo.arrayBuffer());
  const hoja = libro.Sheets[libro.SheetNames[0]];
  return XLSX.utils.sheet_to_json<Record<string, unknown>>(hoja);
}

<input
  type="file"
  accept=".xlsx,.xls,.csv"
  onChange={async (e) => {
    const archivo = e.target.files?.[0];
    if (archivo) setFilas(await leerExcel(archivo));
  }}
/>`,
          },
        ],
        prompt:
          "En React + TypeScript uso SheetJS (xlsx) para leer un Excel que sube el usuario. Las columnas son: [listá los encabezados]. Hacé una función que convierta cada fila a este tipo: [pegá la interface], limpiando espacios, pasando fechas de Excel a Date, y que devuelva por separado las filas válidas y las que tienen errores (con el número de fila y el motivo), para mostrarlas en una tabla antes de guardar.",
      },
      {
        titulo: "Traer JSON de una API",
        texto:
          "`fetch` + `.json()`. Siempre chequeá `res.ok`, porque fetch no tira error cuando el servidor responde 404 o 500.",
        codigo: [
          {
            lenguaje: "ts",
            contenido: `const res = await fetch("https://api.ejemplo.gob.ar/feriados");
if (!res.ok) throw new Error(\`Error \${res.status}\`);
const feriados: Feriado[] = await res.json();`,
          },
        ],
      },
      {
        titulo: "Ojo con los datos de verdad",
        texto:
          "Cuando le pidas ayuda a una IA o uses un conversor online, pasale la estructura con 3 filas inventadas, nunca la planilla real. Los datos de vecinos y agentes (DNI, CUIL, domicilios, sueldos) no pueden salir de los sistemas de la Muni.",
        prompt:
          "Te paso un ejemplo de JSON con datos INVENTADOS que representa la estructura real: [pegá 2 o 3 objetos]. Generame la interface de TypeScript, y una función que agrupe los registros por [campo] y calcule [total / promedio / cantidad] de cada grupo.",
      },
    ],
    links: [
      {
        label: "JSON en MDN",
        url: "https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON",
      },
      { label: "SheetJS", url: "https://docs.sheetjs.com" },
    ],
  },

  // ══════════════════════════ DESPLIEGUE ══════════════════════════
  {
    id: "netlify",
    nombre: "Netlify",
    categoria: "despliegue",
    icono: Rocket,
    color: "#05bdba",
    resumen:
      "Subir tu página a internet gratis, en minutos y sin configurar un servidor.",
    descripcion:
      "Netlify agarra la carpeta que genera `pnpm build` y la publica en internet con un link propio (`tu-sitio.netlify.app`), HTTPS incluido. Lo podés usar de dos formas: arrastrando la carpeta `dist` al navegador (ideal para mostrar algo rápido), o conectando tu repositorio de GitHub para que cada `git push` actualice la página sola. El plan gratis alcanza de sobra para portfolios, prototipos y demos para mostrarle a otra área.",
    nivel: "Fácil",
    idealPara: "Prototipos, demos y portfolios",
    usarCuando: [
      "Querés mostrarle un avance a alguien de otra área con un link, sin que tenga que instalar nada.",
      "Tu portfolio o página personal: queda online gratis y se actualiza con cada push.",
      "Sitios hechos con React + Vite (o HTML suelto) que no necesitan un backend propio.",
    ],
    evitarCuando: [
      "Sistemas con backend propio (NestJS, PostgreSQL, PocketBase): Netlify solo sirve el front, el servidor va en otro lado.",
      "Sistemas oficiales de la Muni o con datos de vecinos y agentes: eso se publica en los servidores de la Muni, coordinado con infraestructura.",
      "Guardar claves o contraseñas en variables `VITE_`: todo lo que empieza con `VITE_` termina visible en el navegador.",
    ],
    pasos: [
      {
        titulo: "Crear la cuenta",
        texto:
          "Entrá a netlify.com y registrate con tu cuenta de GitHub. Así después podés conectar tus repositorios sin pasos extra. El plan gratis no pide tarjeta: si un mes te pasás del límite, el sitio se pausa hasta el mes siguiente, no te cobran.",
      },
      {
        titulo: "La forma rápida: arrastrar y soltar",
        texto:
          "Generá la versión final de tu proyecto. Vite la deja en la carpeta `dist`. Después entrá a `app.netlify.com/drop` y arrastrá esa carpeta entera a la página. En unos segundos te da un link para compartir.\n\nSirve para mostrar algo puntual. La contra es que, cada vez que cambies algo, tenés que volver a hacer el build y arrastrar la carpeta de nuevo.",
        codigo: [{ lenguaje: "terminal", contenido: "pnpm build" }],
      },
      {
        titulo: "La forma recomendada: conectar GitHub",
        texto:
          "En el panel: \"Add new project → Import an existing project → GitHub\" y elegí tu repositorio. Netlify detecta que es Vite y completa los datos solo. Revisá que queden así y tocá \"Deploy\".\n\nA partir de ahí, cada `git push` a `main` vuelve a publicar la página automáticamente. Si el build falla, la versión anterior sigue online, así que nunca queda rota.",
        codigo: [
          {
            lenguaje: "configuración",
            contenido: `Build command:      pnpm build
Publish directory:  dist`,
          },
        ],
      },
      {
        titulo: "Arreglar el 404 al recargar (React Router)",
        texto:
          "Es el error más común: la página anda, pero si recargás en `/tecnologias` o pegás un link directo, aparece \"Page not found\". Pasa porque Netlify busca un archivo con ese nombre y no existe: las rutas las maneja React. Se arregla con un archivo `_redirects` dentro de `public/` que le dice que todo vaya a `index.html`.",
        codigo: [
          {
            lenguaje: "public/_redirects",
            contenido: "/*    /index.html    200",
          },
        ],
        prompt:
          "Subí mi proyecto React + Vite + React Router a Netlify y al recargar en una ruta que no es la principal me da 404. Explicame por qué pasa y cómo lo arreglo con un archivo _redirects o un netlify.toml.",
      },
      {
        titulo: "Variables de entorno",
        texto:
          "Si tu front usa la URL de una API, no la escribas fija en el código: cargala en \"Project configuration → Environment variables\" con el mismo nombre que en tu `.env` (por ejemplo `VITE_API_URL`) y volvé a hacer el deploy.\n\nOjo: lo que empieza con `VITE_` queda dentro del JavaScript que descarga el usuario. Sirve para URLs públicas, nunca para contraseñas o tokens privados.",
        codigo: [
          {
            lenguaje: "ts",
            contenido: `const res = await fetch(\`\${import.meta.env.VITE_API_URL}/noticias\`);`,
          },
        ],
      },
      {
        titulo: "Nombre del sitio y vistas previas",
        texto:
          "Por defecto el link es un nombre al azar. Cambialo en \"Project configuration → Change project name\" por algo claro, como `hemeroteca-demo.netlify.app`.\n\nBonus: si trabajás con Pull Requests, Netlify arma un link aparte para cada uno (Deploy Preview). Así otra persona revisa el cambio funcionando antes de mergearlo.",
      },
      {
        titulo: "Si el deploy falla",
        texto:
          "Entrá a \"Deploys\", abrí el que falló y mirá el log. Casi siempre es una de estas: un error de TypeScript que en tu PC ignorabas, un import con mayúsculas distintas al nombre del archivo (Windows no distingue, Linux sí), o la versión de Node. Copiá el log entero y pasáselo a tu IA.",
        prompt:
          "Mi deploy en netlify falla. Es un proyecto React + Vite + TypeScript con pnpm. Este es el log completo del build: [pegá el log]. Decime cuál es el error, en qué archivo está y cómo arreglarlo.",
      },
    ],
    links: [
      { label: "Documentación oficial", url: "https://docs.netlify.com" },
      { label: "Netlify Drop", url: "https://app.netlify.com/drop" },
      {
        label: "Redirects y rutas de SPA",
        url: "https://docs.netlify.com/routing/redirects/",
      },
    ],
  },
];
