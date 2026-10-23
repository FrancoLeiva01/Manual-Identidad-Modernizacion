import { ExternalLink, FolderOpen } from "lucide-react";

// ─── Contenido editable ────────────────────────────────────────────────
const BG_IMG = "/nodo.jpeg";
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
    url: "#",
    img: "/cardsHome/navbars.png",
    tinte: "bg-sky-600/55 group-hover:bg-sky-600/40",
  },
  {
    titulo: "Sidebars",
    url: "#",
    img: "/cardsHome/sidebars.avif",
    tinte: "bg-purple-600/55 group-hover:bg-purple-600/40",
  },
  {
    titulo: "Homes",
    url: "#",
    img: "/cardsHome/homes.jpg",
    tinte: "bg-emerald-600/55 group-hover:bg-emerald-600/40",
  },
];

const datos = [
  { label: "Área", valor: "Secretaría de Modernización" },
  { label: "Mantiene", valor: "Equipo de Desarrollo" },
  { label: "Última actualización", valor: "Octubre 2026" },
];
// ───────────────────────────────────────────────────────────────────────

export function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* FONDO: fixed para que cubra todo el viewport, incluido debajo del sidebar */}
      <img
        src={BG_IMG}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover mask-[linear-gradient(to_bottom,black,transparent_400%)]"
      />
      {/* Degradé desde la izquierda para que el texto del hero se lea */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-white/10"
      />

      {/* CONTENIDO por encima */}
      <div className="relative px-8 pt-12 pb-12 max-w-full mx-auto">
        {/* HERO */}
        <section className="mt-8 max-w-3xl py-12 md:py-20">
          <div className="mb-6 h-1 w-16 rounded-full bg-orange-500" />

          <p className="mb-2 text-xs font-bold tracking-[0.25em] text-slate-100 dark:text-slate-100">
            SECRETARÍA DE MODERNIZACIÓN
          </p>

          <p className="mb-3 text-lg uppercase tracking-wide font-bold text-orange-400">
            Te damos la bienvenida al
          </p>
          <h1 className="text-5xl font-black uppercase leading-[0.9] text-white drop-shadow-lg md:text-8xl">
            Manual de
            <br />
            Identidad
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed font-medium text-slate-200">
            Todos los proyectos de la oficina en un solo lugar: qué estilos
            usamos, qué componentes se pueden reutilizar y quién tiene la culpa
            de cada decisión de diseño. Navegá por el sidebar de la izquierda
            para ver los proyectos y sus detalles.
          </p>
        </section>

        {/* INFO */}
        <section className="mt-40 grid gap-8 md:grid-cols-[1fr_320px] border border-white/20 rounded-xl bg-slate-800/30 dark:bg-slate-900/70 p-8 md:p-12">
          {/* 4 secciones de componentes */}
          <div className="grid gap-4 sm:grid-cols-2">
            {secciones.map((s) => (
              <a
                key={s.titulo}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
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
                  className={
                    "absolute inset-0 transition-colors duration-300 " + s.tinte
                  }
                />
                {/* Título */}
                <span className="relative text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow-md">
                  {s.titulo}
                </span>
              </a>
            ))}
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
              <h3 className="font-bold text-gray-900 dark:text-slate-100">
                Manual de identidad Municipalidad de Catamarca
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-slate-400">
                Logos, colores institucionales, iconos y normas de uso
                oficiales.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 dark:text-sky-300">
                Abrir en Dropbox
                <ExternalLink size={14} />
              </span>
            </a>

            {/* Datos */}
            <dl className="divide-y divide-gray-300 rounded-xl border border-gray-200 bg-slate-100 dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900/70">
              {datos.map((d) => (
                <div key={d.label} className="px-5 py-3">
                  <dt className="text-xs text-gray-500 dark:text-slate-400">
                    {d.label}
                  </dt>
                  <dd className="font-medium text-gray-900 dark:text-slate-100">
                    {d.valor}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>
      </div>
    </div>
  );
}
