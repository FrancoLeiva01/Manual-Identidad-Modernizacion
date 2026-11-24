import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, X } from "lucide-react";
import { FondoFoto } from "../components/home/fondoFoto";
import { SeccionLayout } from "../components/seccionLayout";
import { TituloBloque } from "../components/tecnologias/piezas";
import { varColor } from "../components/tecnologias/color";
import { cursosTesting, type Bloque } from "../content/testing";

export function TestingPage() {
  const { id } = useParams();
  const curso = cursosTesting.find((c) => c.id === id);

  if (!curso) {
    return (
      <SeccionLayout
        titulo="No encontrado"
        descripcion="Ese curso de testing no existe (todavía). Elegí otro desde el menú."
      />
    );
  }

  const Icono = curso.icono;

  return (
    <div className="relative min-h-screen overflow-hidden" style={varColor(curso.color)}>
      <FondoFoto />

      <div className="relative mx-auto max-w-full px-4 pt-20 pb-16 sm:px-8">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-sobre-fondo-suave hover:text-sobre-fondo"
        >
          <ArrowLeft size={16} /> Volver al inicio
        </Link>

        {/* ═══ ENCABEZADO ═══ */}
        <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-center">
          <span className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl border border-(--tec)/40 bg-(--tec)/15 text-(--tec) shadow-[0_0_40px_-8px_var(--tec)] backdrop-blur-md">
            <Icono size={38} />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-(--tec) drop-shadow">Testing</p>
            <h1 className="mt-1 text-4xl font-black uppercase leading-[0.95] text-sobre-fondo dark:drop-shadow-lg sm:text-5xl md:text-6xl">
              {curso.nombre}
            </h1>
            <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-sobre-fondo-suave sm:text-lg">
              {curso.resumen}
            </p>
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_15rem]">
            <div className="flex min-w-0 flex-col gap-12">
              {/* ═══ TEMAS ═══ */}
              {curso.temas.map((tema) => (
                <section key={tema.id} id={tema.id} className="scroll-mt-24">
                  <TituloBloque>{tema.titulo}</TituloBloque>
                  <div className="flex flex-col gap-4">
                    {tema.bloques.map((b, i) => (
                      <BloqueVista key={i} bloque={b} />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* ═══ ÍNDICE LATERAL ═══ */}
            <aside className="hidden lg:block">
              <div className="sticky top-20 rounded-2xl border border-sobre-fondo-borde bg-panel-foto p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-texto-suave">Temas</p>
                <ol className="m-0 list-none space-y-0.5 p-0">
                  {curso.temas.map((t, i) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="flex gap-2 rounded-lg px-2 py-1.5 text-sm text-texto no-underline transition-colors hover:bg-hover"
                      >
                        <span className="font-bold text-(--tec)">{i + 1}</span>
                        <span className="leading-snug">{t.titulo}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
        </div>
      </div>
    </div>
  );
}

// ─── Bloques de contenido ────────────────────────────────────────────────
const CARD = "rounded-2xl border border-borde bg-superficie p-5 shadow-lg sm:p-6";

function BloqueVista({ bloque: b }: { bloque: Bloque }) {
  switch (b.tipo) {
    case "texto":
      return (
        <div className="rounded-2xl border border-sobre-fondo-borde bg-panel-foto p-5 text-base text-texto sm:p-7 sm:text-lg">
          <Parrafos texto={b.texto} />
        </div>
      );

    case "lista":
      return (
        <div className={CARD}>
          {b.titulo && <p className="mb-3 font-bold text-texto">{b.titulo}</p>}
          <ListaTildes items={b.items} />
        </div>
      );

    case "tarjetas":
      return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {b.items.map((t, i) => (
            <div key={t.titulo} className={CARD + " border-t-4 border-t-(--tec)"}>
              <div className="flex items-start gap-3">
                {b.numeradas && (
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-(--tec)/15 text-sm font-black text-(--tec)">
                    {i + 1}
                  </span>
                )}
                <h3 className="text-base font-bold leading-snug text-texto">{t.titulo}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-texto-suave">{t.texto}</p>
            </div>
          ))}
        </div>
      );

    case "comparacion":
      return (
        <div className="grid items-start gap-4 md:grid-cols-2">
          {b.columnas.map((c) => (
            <div key={c.titulo} className={CARD}>
              <h3 className="text-[22px] font-bold uppercase tracking-wide text-acento">{c.titulo}</h3>
              <p className="mt-2 leading-relaxed text-texto">{c.texto}</p>
              {c.pregunta && (
                <p className="mt-4 rounded-xl border-l-4 border-marca bg-marca/10 px-4 py-3 font-semibold text-texto">
                  {c.pregunta}
                </p>
              )}
              {c.items && (
                <div className="mt-4 border-t border-borde pt-4">
                  <ListaTildes items={c.items} />
                </div>
              )}
            </div>
          ))}
        </div>
      );

    case "mitos":
      return (
        <div className="grid items-start gap-4 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className={CARD + " border-t-4 border-t-red-500"}>
            <p className="mb-3 font-bold text-texto">Mitos</p>
            <ul className="m-0 list-none space-y-2.5 p-0">
              {b.mitos.map((m) => (
                <li key={m} className="flex gap-2.5 text-sm leading-relaxed text-texto-suave">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-red-500/15 text-red-600 dark:text-red-400">
                    <X size={12} strokeWidth={3} />
                  </span>
                  <span className="line-through decoration-red-500/50">{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={CARD + " border-t-4 border-t-green-500"}>
            <p className="mb-3 font-bold text-texto">En realidad</p>
            <div className="flex flex-col gap-2">
              {b.verdades.map((v) => (
                <p
                  key={v}
                  className="rounded-xl bg-green-500/10 px-4 py-3 text-center text-sm font-black uppercase tracking-wide text-green-700 dark:text-green-300"
                >
                  {v}
                </p>
              ))}
            </div>
          </div>
        </div>
      );

    case "pasos":
      return (
        <ol className="relative m-0 list-none space-y-6 p-0">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[19px] w-0.5 bg-linear-to-b from-(--tec) via-white/30 to-transparent"
          />
          {b.items.map((p, i) => (
            <li key={p.titulo} className="relative flex gap-4">
              <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-(--tec) bg-slate-900 text-sm font-black text-white shadow-lg">
                {i + 1}
              </span>
              <div className={"min-w-0 flex-1 " + CARD}>
                <h3 className="text-lg font-bold text-texto sm:text-xl">{p.titulo}</h3>
                {p.texto && <Parrafos texto={p.texto} className="mt-2 text-[15px] text-texto-suave" />}
                {p.items && (
                  <div className="mt-3">
                    <ListaTildes items={p.items} />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      );
  }
}

function Tilde() {
  return (
    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-(--tec)/15 text-(--tec)">
      <Check size={12} strokeWidth={3} />
    </span>
  );
}

function ListaTildes({ items }: { items: string[] }) {
  return (
    <ul className="m-0 list-none space-y-2.5 p-0">
      {items.map((it) => (
        <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-texto-suave">
          <Tilde />
          {it}
        </li>
      ))}
    </ul>
  );
}

// Párrafos separados por línea en blanco, con **negritas**
function Parrafos({ texto, className = "" }: { texto: string; className?: string }) {
  return (
    <div className={"space-y-3 leading-relaxed " + className}>
      {texto.split(/\n\n+/).map((p, i) => (
        <p key={i} className="m-0">
          {p.split(/(\*\*[^*]+\*\*)/g).map((t, j) =>
            t.startsWith("**") ? (
              <strong key={j} className="font-bold text-texto">
                {t.slice(2, -2)}
              </strong>
            ) : (
              <Fragment key={j}>{t}</Fragment>
            ),
          )}
        </p>
      ))}
    </div>
  );
}
