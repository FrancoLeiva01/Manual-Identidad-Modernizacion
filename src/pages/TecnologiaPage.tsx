import { lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ExternalLink, Sparkles, X } from "lucide-react";
import { FondoFoto } from "../components/home/fondoFoto";
import { SeccionLayout } from "../components/seccionLayout";
import { CodeBlockColapsable } from "../components/proyectoPage/codeBlockColapsable";
import { PromptIA } from "../components/tecnologias/PromptIA";
import { TextoRico } from "../components/tecnologias/TextoRico";
import { IconoTec, NivelBadge, TituloBloque } from "../components/tecnologias/piezas";
import { varColor } from "../components/tecnologias/color";
import { categorias, tecnologias, type Tecnologia } from "../content/tecnologias";

// Los demos se cargan solo en la página que los usa
const demos = {
  motion: lazy(() => import("../components/tecnologias/DemoMotion").then((m) => ({ default: m.DemoMotion }))),
  json: lazy(() => import("../components/tecnologias/ConversorJson").then((m) => ({ default: m.ConversorJson }))),
  paletas: lazy(() => import("../components/tecnologias/Paletas").then((m) => ({ default: m.Paletas }))),
};

const ejemplos = {
  "loader-hemeroteca": lazy(() =>
    import("../components/tecnologias/EjemploLoader").then((m) => ({ default: m.EjemploLoader })),
  ),
};

const titulosDemo: Record<NonNullable<Tecnologia["demo"]>, string> = {
  motion: "Probalo acá",
  json: "Conversor a JSON",
  paletas: "Paletas que funcionan para tu próxima página",
};

export function TecnologiaPage() {
  const { id } = useParams();
  const indice = tecnologias.findIndex((t) => t.id === id);
  const tec = tecnologias[indice];

  if (!tec) {
    return (
      <SeccionLayout
        titulo="No encontrada"
        descripcion="Esa tecnología no existe (todavía). Volvé al listado y elegí otra."
      />
    );
  }

  const categoria = categorias.find((c) => c.id === tec.categoria);
  const anterior = tecnologias[indice - 1];
  const siguiente = tecnologias[indice + 1];
  const Demo = tec.demo ? demos[tec.demo] : null;
  const Ejemplo = tec.ejemplo ? ejemplos[tec.ejemplo] : null;

  return (
    <div className="relative min-h-screen overflow-hidden" style={varColor(tec.color)}>
      <FondoFoto />

      <div className="relative mx-auto max-w-full px-4 pt-20 pb-16 sm:px-8">
        <Link
          to="/tecnologias"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-sobre-fondo-suave hover:text-sobre-fondo"
        >
          <ArrowLeft size={16} /> Todas las tecnologías
        </Link>

        {/* ═══ ENCABEZADO ═══ */}
        <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-center">
          <IconoTec tec={tec} tamano="lg" />
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-(--tec) drop-shadow">
              {categoria?.nombre}
            </p>
            <h1 className="mt-1 text-4xl font-black uppercase leading-[0.95] text-sobre-fondo dark:drop-shadow-lg sm:text-5xl md:text-6xl">
              {tec.nombre}
            </h1>
            <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-sobre-fondo-suave sm:text-lg">
              {tec.resumen}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <NivelBadge nivel={tec.nivel} sobreFoto />
              <span className="inline-flex items-center rounded-full bg-sobre-fondo/10 px-2.5 py-0.5 text-xs font-semibold text-sobre-fondo ring-1 ring-inset ring-sobre-fondo-borde backdrop-blur-md">
                Ideal para: {tec.idealPara}
              </span>
              {tec.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-marca px-3 py-1 text-xs font-bold text-white shadow transition-transform hover:scale-105"
                >
                  {l.label} <ExternalLink size={12} />
                </a>
              ))}
            </div>
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_15rem]">
          <div className="flex min-w-0 flex-col gap-12">
            {/* ═══ QUÉ ES ═══ */}
            <section>
              <div className="rounded-2xl border border-sobre-fondo-borde bg-panel-foto p-5 text-base text-texto sm:p-7 sm:text-lg">
                <TextoRico texto={tec.descripcion} />
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <ListaCriterio tipo="si" titulo="Usala cuando" items={tec.usarCuando} />
                <ListaCriterio tipo="no" titulo="Mejor no cuando" items={tec.evitarCuando} />
              </div>
            </section>

            {/* ═══ DEMO ═══ */}
            {Demo && tec.demo && (
              <section>
                <TituloBloque>{titulosDemo[tec.demo]}</TituloBloque>
                <Suspense fallback={<div className="h-64 animate-pulse rounded-xl bg-white/10" />}>
                  <Demo />
                </Suspense>
              </section>
            )}

            {/* ═══ EJEMPLO REAL (de un proyecto nuestro) ═══ */}
            {Ejemplo && (
              <section>
                <TituloBloque>Ejemplo real: Hemeroteca</TituloBloque>
                <Suspense fallback={<div className="h-64 animate-pulse rounded-xl bg-white/10" />}>
                  <Ejemplo />
                </Suspense>
              </section>
            )}

            {/* ═══ HERRAMIENTAS ═══ */}
            {tec.herramientas?.map((g) => (
              <section key={g.grupo}>
                <TituloBloque>{g.grupo}</TituloBloque>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {g.items.map((h) => (
                    <a
                      key={h.url}
                      href={h.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex gap-3 rounded-xl border border-borde bg-superficie p-4 no-underline shadow-md transition-all hover:-translate-y-0.5 hover:border-(--tec) hover:shadow-xl"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-(--tec)/15 text-lg font-black text-(--tec)">
                        {h.nombre[0]}
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-1.5 font-semibold text-texto">
                          {h.nombre}
                          <ExternalLink size={13} className="text-texto-suave opacity-0 transition-opacity group-hover:opacity-100" />
                        </span>
                        <span className="mt-0.5 block text-sm leading-snug text-texto-suave">{h.descripcion}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            ))}

            {/* ═══ PASO A PASO ═══ */}
            <section>
              <TituloBloque>Paso a paso</TituloBloque>
              <ol className="relative m-0 list-none space-y-6 p-0">
                {/* Línea vertical que une los pasos */}
                <span
                  aria-hidden="true"
                  className="absolute top-2 bottom-2 left-[19px] w-0.5 bg-linear-to-b from-(--tec) via-white/30 to-transparent"
                />
                {tec.pasos.map((p, i) => (
                  <li key={p.titulo} id={`paso-${i + 1}`} className="relative flex scroll-mt-24 gap-4">
                    <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-(--tec) bg-slate-900 text-sm font-black text-white shadow-lg">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1 rounded-2xl border border-borde bg-superficie p-5 shadow-lg sm:p-6">
                      <h3 className="text-lg font-bold text-texto sm:text-xl">{p.titulo}</h3>
                      <TextoRico texto={p.texto} className="mt-2 text-[15px] text-texto-suave" />
                      {p.codigo && (
                        <div className="mt-4 flex flex-col gap-3">
                          {p.codigo.map((c, j) => (
                            <CodeBlockColapsable key={j} codigo={c.contenido} lenguaje={c.lenguaje} />
                          ))}
                        </div>
                      )}
                      {p.prompt && (
                        <div className="mt-4">
                          <PromptIA prompt={p.prompt} />
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* ═══ ANTERIOR / SIGUIENTE ═══ */}
            <nav className="grid gap-3 sm:grid-cols-2">
              {anterior ? <NavTec tec={anterior} dir="anterior" /> : <span />}
              {siguiente && <NavTec tec={siguiente} dir="siguiente" />}
            </nav>
          </div>

          {/* ═══ ÍNDICE LATERAL ═══ */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 flex flex-col gap-4">
              <div className="rounded-2xl border border-sobre-fondo-borde bg-panel-foto p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-texto-suave">En esta guía</p>
                <ol className="m-0 list-none space-y-0.5 p-0">
                  {tec.pasos.map((p, i) => (
                    <li key={p.titulo}>
                      <a
                        href={`#paso-${i + 1}`}
                        className="flex gap-2 rounded-lg px-2 py-1.5 text-sm text-texto no-underline transition-colors hover:bg-hover"
                      >
                        <span className="font-bold text-(--tec)">{i + 1}</span>
                        <span className="leading-snug">{p.titulo}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
              {tec.pasos.some((p) => p.prompt) && (
                <div className="rounded-2xl border border-sobre-fondo-borde bg-panel-foto p-4 text-sm leading-relaxed text-texto">
                  <p className="mb-1 flex items-center gap-1.5 font-bold text-acento">
                    <Sparkles size={14} /> Sobre los prompts
                  </p>
                  Lo que está <mark className="rounded bg-marca/15 px-1 text-marca">[entre corchetes]</mark> lo
                  completás vos antes de mandarlo. Nunca pegues datos reales de personas.
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function ListaCriterio({ tipo, titulo, items }: { tipo: "si" | "no"; titulo: string; items: string[] }) {
  const si = tipo === "si";
  const Icono = si ? Check : X;
  return (
    <div
      className={
        "rounded-2xl border border-borde border-t-4 bg-superficie p-5 shadow-lg " +
        (si ? "border-t-green-500" : "border-t-amber-500")
      }
    >
      <p className="mb-3 font-bold text-texto">{titulo}</p>
      <ul className="m-0 list-none space-y-2.5 p-0">
        {items.map((it) => (
          <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-texto-suave">
            <span
              className={
                "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full " +
                (si ? "bg-green-500/15 text-green-600" : "bg-amber-500/15 text-amber-600")
              }
            >
              <Icono size={12} strokeWidth={3} />
            </span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavTec({ tec, dir }: { tec: Tecnologia; dir: "anterior" | "siguiente" }) {
  const sig = dir === "siguiente";
  return (
    <Link
      to={`/tecnologias/${tec.id}`}
      className={
        "group flex items-center gap-3 rounded-2xl border border-sobre-fondo-borde bg-panel-foto p-4 no-underline transition-colors hover:bg-superficie " +
        (sig ? "flex-row-reverse text-right sm:col-start-2" : "")
      }
    >
      {sig ? (
        <ArrowRight size={18} className="shrink-0 text-texto transition-transform group-hover:translate-x-1" />
      ) : (
        <ArrowLeft size={18} className="shrink-0 text-texto transition-transform group-hover:-translate-x-1" />
      )}
      <span className="min-w-0 flex-1">
        <span className="block text-xs uppercase tracking-wider text-texto-suave">{sig ? "Siguiente" : "Anterior"}</span>
        <span className="block truncate font-bold text-texto">{tec.nombre}</span>
      </span>
      <IconoTec tec={tec} />
    </Link>
  );
}
