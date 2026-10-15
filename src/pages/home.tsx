import { ExternalLink, FolderOpen } from "lucide-react";

// ─── Contenido editable ────────────────────────────────────────────────
const BG_IMG = "/nodo.jpeg";
const DROPBOX_URL =
  "https://www.dropbox.com/scl/fo/jxgxahxmnxe0pgfzdiu1o/AL2cezHEpEZ6bl2EI5LvFac?rlkey=e2y64t8mfpiugyi65rl3zhom6&e=3&st=m2u1esg7&dl=0";

const contenido = [
  {
    titulo: "Qué es esto?",
    texto:
      "Un archivo vivo de todos los proyectos que salieron de la oficina. Sirve para no tener que crear componentes desde cero y reutilizar otros que ya hayan realizado tus compañeros en distintas paginas: antes de arrancar algo nuevo, fijate si ya hay estilos, componentes o decisiones que puedas reutilizar.",
  },
  {
    titulo: "Qué vas a encontrar en cada proyecto?",
    texto:
      "Paleta de colores y tipografías usadas, componentes listos para copiar, capturas de las pantallas principales y quién estuvo a cargo de cada parte.",
  },
  {
    titulo: "Cómo sumar un proyecto?",
    texto:
      "Agregalo en content/proyectos con sus fotos, descripción y el bloque de código que quieras compartir. Aparece solo en el sidebar.",
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
      {/* FONDO: la imagen cubre toda la página, con poca opacidad */}
      <img
        src={BG_IMG}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover mask-[linear-gradient(to_bottom,black,transparent_80%)]"
      />

      {/* CONTENIDO por encima */}
      <div className="relative px-8 pt-4 pb-12 max-w-full mx-auto">
        {/* HERO */}
        <section className="mt-8 py-12 md:py-20">
          <p className="mb-10 text-xs font-bold tracking-widest text-white/80 dark:text-white">
            SECRETARÍA DE MODERNIZACIÓN
          </p>

          <p className="mb-3 text-lg uppercase tracking-wide font-bold text-orange-500 dark:text-orange-400">
            Te damos la bienvenida al
          </p>
          <h1 className="text-5xl font-black uppercase leading-[0.95] text-slate-800 md:text-7xl dark:text-white">
            Manual de
            <br />
            Identidad
          </h1>
          <p className="mt-6 max-w-md text-white dark:text-white">
            Todos los proyectos de la oficina en un solo lugar: qué estilos
            usamos, qué componentes se pueden reutilizar y quién tiene la culpa
            de cada decisión de diseño.
          </p>
        </section>

        {/* INFO */}
        <section className="mt-12 grid gap-8 md:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            {contenido.map((item) => (
              <div key={item.titulo}>
                <h2 className="mb-2 text-3xl font-extrabold uppercase text-gray-900 dark:text-slate-100">
                  {item.titulo}
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-slate-400">
                  {item.texto}
                </p>
              </div>
            ))}

            <p className="text-gray-500 dark:text-slate-400">
              Elegí un proyecto en el sidebar de la izquierda para ver más
              detalles.
            </p>
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
                Manual de identidad de Zamboni
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
            <dl className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white/70 dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900/70">
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
