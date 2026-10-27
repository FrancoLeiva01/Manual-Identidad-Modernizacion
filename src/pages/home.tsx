import {
  ArrowRight,
  Check,
  Component,
  ExternalLink,
  FolderOpen,
  Globe,
  Monitor,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FondoFoto } from "../components/home/fondoFoto";
import { CarruselEquipo, type FotoEquipo } from "../components/home/carruselEquipo";
import { Fundamentos } from "../components/home/fundamentos";

// ─── Contenido editable ────────────────────────────────────────────────
const DROPBOX_URL =
  "https://www.dropbox.com/scl/fo/jxgxahxmnxe0pgfzdiu1o/AL2cezHEpEZ6bl2EI5LvFac?rlkey=e2y64t8mfpiugyi65rl3zhom6&e=3&st=m2u1esg7&dl=0";

const secciones = [
  {
    titulo: "Footers",
    url: "/footers",
    img: "/cardsHome/footers.png",
    tinte: "bg-orange-600/55 group-hover:bg-orange-600/40",
  },
  {
    titulo: "Navbars",
    url: "/navbars",
    img: "/cardsHome/navbars.png",
    tinte: "bg-sky-600/55 group-hover:bg-sky-600/40",
  },
  {
    titulo: "Sidebars",
    url: "/sidebars",
    img: "/cardsHome/sidebars.avif",
    tinte: "bg-purple-600/55 group-hover:bg-purple-600/40",
  },
  {
    titulo: "Homes",
    url: "/homes",
    img: "/cardsHome/homes.jpg",
    tinte: "bg-emerald-600/55 group-hover:bg-emerald-600/40",
  },
];

const guias = [
  {
    titulo: "Sistemas internos",
    ejemplos: "Municipalidad, Recursos Humanos y oficinas",
    icono: Monitor,
    borde: "border-t-slate-500",
    iconoFondo: "bg-superficie-suave text-texto",
    check: "text-texto-suave",
    descripcion:
      "Los usa personal municipal en sus puestos de trabajo, muchas veces con monitores viejos, resoluciones bajas y computadoras lentas. Acá lo que importa es que funcione y se entienda, no que deslumbre.",
    pautas: [
      "Estilos sobrios y buen contraste, para que se lea bien en cualquier monitor.",
      "Pocas animaciones y transiciones: suman carga y casi no aportan.",
      "Alertas y estados claros, con texto y no solo con colores.",
      "Rapidez y simpleza por encima de los efectos visuales.",
    ],
  },
  {
    titulo: "Sitios para el público",
    ejemplos: "Food Truck, Hemeroteca y similares",
    icono: Globe,
    borde: "border-t-marca",
    iconoFondo: "bg-marca/15 text-marca",
    check: "text-marca",
    descripcion:
      "Los visita cualquier vecino desde su celular o su computadora, y son la cara de la Municipalidad hacia afuera. Acá sí hay lugar para lucirse con el diseño.",
    pautas: [
      "Libertad para diseños más elaborados, ilustraciones y animaciones.",
      "Identidad visual fuerte, siempre dentro del manual de marca.",
      "Responsive sí o sí: la mayoría entra desde el celular.",
      "Ojo con el peso de la página: muchos navegan con datos móviles.",
    ],
  },
];

// Fotos del equipo para el carrusel: las caricaturas están en /public/caricaturas
const equipo: FotoEquipo[] = [
  { nombre: "Franco", rol: "Front", imagen: "/caricaturas/franco.png" },
  { nombre: "Gabi", rol: "Front", imagen: "/caricaturas/gabi.png" },
  { nombre: "Lucio", rol: "Back", imagen: "/caricaturas/lucio.png" },
  { nombre: "Nahuel", rol: "Front", imagen: "/caricaturas/nahuel.png" },
  { nombre: "Esteban", rol: "Front", imagen: "/caricaturas/esteban.png" },
  { nombre: "Diego", rol: "Back", imagen: "/caricaturas/diego.png" },
  { nombre: "Lautaro", rol: "Back", imagen: "/caricaturas/lautaro.png" },
  { nombre: "Maxi", rol: "Front", imagen: "/caricaturas/maxi.png" },
  { nombre: "Gonza", rol: "Product Owner", imagen: "/caricaturas/gonza.png" },
  { nombre: "Integrante 10" },
  { nombre: "Integrante 11" },
  { nombre: "Integrante 12" },
];

// Card que va en la columna derecha, debajo de Dropbox
const skills: Seccion = {
  titulo: "Skills",
  url: "https://github.com/sfvc/modernizacion-skills/tree/main/skills",
  img: "/cardsHome/skills.webp",
  tinte: "bg-rose-600/55 group-hover:bg-rose-600/40",
};
// ───────────────────────────────────────────────────────────────────────

type Seccion = (typeof secciones)[number];

function TarjetaSeccion({ seccion: s }: { seccion: Seccion }) {
  return (
    <Link
      to={s.url}
      className="group relative flex min-h-36 items-center justify-center overflow-hidden rounded-xl p-5 shadow-md focus-visible:outline-2 focus-visible:outline-white"
    >
      {/* Imagen borrosa */}
      <img
        src={s.img}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover transition-transform duration-500 group-hover:scale-125"
      />
      {/* Tinte de color */}
      <div
        className={"absolute inset-0 transition-colors duration-300 " + s.tinte}
      />
      {/* Título */}
      <span className="relative text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow-md">
        {s.titulo}
      </span>
    </Link>
  );
}

export function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* FONDO: fixed para que cubra todo el viewport, incluido debajo del sidebar */}
      <FondoFoto />

      {/* CONTENIDO por encima */}
      <div className="relative px-4 pt-12 pb-12 max-w-full mx-auto sm:px-8">
        {/* HERO */}
        <section className="mt-8 max-w-3xl py-8 sm:py-12 md:py-20">
          <div className="mb-6 h-1 w-16 rounded-full bg-marca" />

          <p className="mb-2 text-xs font-bold tracking-[0.25em] text-slate-100">
            SECRETARÍA DE MODERNIZACIÓN
          </p>

          <p className="mb-3 text-lg uppercase tracking-wide font-bold text-marca">
            Te damos la bienvenida al
          </p>
          <h1 className="text-4xl font-black uppercase leading-[0.9] text-white drop-shadow-lg sm:text-6xl md:text-8xl">
            Manual de
            <br />
            Identidad
          </h1>
          <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed font-medium text-slate-200">
            Todos los proyectos de la oficina en un solo lugar: qué estilos
            usamos, qué componentes se pueden reutilizar y quién tiene la culpa
            de cada decisión de diseño. Navegá por el sidebar de la izquierda
            para ver los proyectos y sus detalles.
          </p>
        </section>

        {/* INFO */}
        <section className="mt-16 grid gap-8 md:mt-40 xl:grid-cols-[1fr_320px] border border-white/30 rounded-xl bg-panel-foto backdrop-blur-md p-5 sm:p-8 md:p-12">
          {/* 4 secciones de componentes */}
          <div className="grid gap-4 sm:grid-cols-2">
            {secciones.map((s) => (
              <TarjetaSeccion key={s.titulo} seccion={s} />
            ))}

            {/* Kit UI: ocupa todo el ancho debajo de las 4 */}
            <Link
              to="/ui"
              className="group relative flex items-center gap-4 overflow-hidden rounded-xl p-5 shadow-md focus-visible:outline-2 focus-visible:outline-white sm:col-span-2"
            >
              {/* Imagen de fondo */}
              <img
                src="/cardsHome/ui2.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover transition-transform duration-500 group-hover:scale-125"
              />
              {/* Tinte de color */}
              <div className="absolute inset-0 bg-slate-100/20 transition-colors duration-300" />
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#45B5DB]">
                <Component size={26} />
              </div>
              <div className="relative min-w-0 flex-1">
                <span className="block text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow-md">
                  Kit UI
                </span>
                <span className="block text-sm text-white/90 drop-shadow-md">
                  Botones, formularios, tablas y alertas para descargar y usar.
                </span>
              </div>
              <ArrowRight
                size={24}
                className="relative shrink-0 text-white transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <aside className="space-y-6">
            {/* Dropbox */}
            <a
              href={DROPBOX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-sky-200 bg-sky-50 p-5 transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-sky-600 dark:border-sky-900 dark:bg-sky-950/60 dark:hover:bg-sky-950/80"
            >
              <FolderOpen
                className="mb-3 text-sky-700 dark:text-sky-300"
                size={28}
              />
              <h3 className="font-bold text-texto">
                Manual de identidad Municipalidad de Catamarca
              </h3>
              <p className="mt-1 text-sm text-texto-suave">
                Logos, colores institucionales, iconos y normas de uso
                oficiales.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 dark:text-sky-300">
                Abrir en Dropbox
                <ExternalLink size={14} />
              </span>
            </a>

            {/* Skills */}
            <TarjetaSeccion seccion={skills} />
          </aside>
        </section>

        {/* GUÍA: cuánto diseño según quién usa el sistema */}
        <section className="mt-8 rounded-xl border border-white/30 bg-panel-foto p-5 backdrop-blur-md sm:p-8 md:p-12">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-texto">
            Antes de diseñar: ¿quién lo va a usar?
          </h2>
          <p className="mt-2 max-w-3xl leading-relaxed text-texto">
            No todos nuestros sistemas se ven igual del otro lado. Lo que en
            nuestro monitor queda impecable, en otra pantalla puede verse
            lavado, cortado o directamente no verse. Por eso, antes de sumar
            colores, animaciones o efectos, conviene pensar en el equipo de
            quien lo va a usar todos los días.
          </p>

          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            {guias.map((g) => {
              const Icono = g.icono;
              return (
                <article
                  key={g.titulo}
                  className={
                    "rounded-xl border border-borde bg-superficie p-5 sm:p-6 border-t-4 " +
                    g.borde
                  }
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg " +
                        g.iconoFondo
                      }
                    >
                      <Icono size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-texto">{g.titulo}</h3>
                      <p className="text-xs text-texto-suave">{g.ejemplos}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-texto">
                    {g.descripcion}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-texto">
                    {g.pautas.map((p) => (
                      <li key={p} className="flex gap-2">
                        <Check
                          size={16}
                          className={"mt-0.5 shrink-0 " + g.check}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <p className="mt-6 rounded-lg border-l-4 border-marca bg-superficie/70 px-4 py-3 text-sm leading-relaxed text-texto">
            <strong className="text-texto">Regla general:</strong> si no sabés
            en qué equipos se va a usar un sistema, diseñá pensando en el peor
            caso. Lo básico bien hecho funciona en todos lados; lo vistoso solo
            luce si la pantalla acompaña.
          </p>
        </section>

        {/* FUNDAMENTOS: colores, tipografía y logo para una página estilo Muni */}
        <Fundamentos />

        {/* EQUIPO */}
        <section className="mt-8 rounded-xl border border-white/30 bg-panel-foto p-5 backdrop-blur-md sm:p-8 md:p-12">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-texto">
            El equipo
          </h2>
          <p className="mt-2 mb-6 max-w-3xl leading-relaxed text-texto">
            Las caras detrás de cada sistema, y a quiénes preguntarles cuando
            algo no anda.
          </p>
          <CarruselEquipo fotos={equipo} />
        </section>
      </div>
    </div>
  );
}
