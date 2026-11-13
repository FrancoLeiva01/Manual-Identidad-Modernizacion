import { Link } from "react-router-dom";
import { ArrowRight, Bot, Eye, ListOrdered, MessageSquareWarning, ShieldAlert } from "lucide-react";
import { SeccionLayout } from "../components/seccionLayout";
import { categorias, tecnologias } from "../content/tecnologias";
import { IconoTec, NivelBadge, TituloBloque } from "../components/tecnologias/piezas";
import { varColor } from "../components/tecnologias/color";

// Consejos generales para usar las guías junto con una IA
const consejos = [
  {
    icono: Bot,
    titulo: "Dale contexto",
    texto: "Arrancá diciendo tu stack y versión: \"React 19 + Tailwind v4\", \"Angular 20\". Cambia mucho la respuesta.",
  },
  {
    icono: ListOrdered,
    titulo: "De a un paso",
    texto: "Seguí la guía en orden y pedí una cosa por vez. Si pedís todo junto, mezcla y se equivoca más.",
  },
  {
    icono: MessageSquareWarning,
    titulo: "Pegá el error entero",
    texto: "Cuando algo falla, copiá el error completo de la terminal o la consola, no un resumen.",
  },
  {
    icono: ShieldAlert,
    titulo: "Nunca datos reales",
    texto: "DNI, CUIL, sueldos o domicilios no se pegan en una IA. Usá 2 o 3 filas inventadas con la misma forma.",
  },
  {
    icono: Eye,
    titulo: "Leé lo que te da",
    texto: "Si no entendés una línea, preguntale qué hace antes de pegarla. El código queda a tu nombre.",
  },
];

export function Tecnologias() {
  return (
    <SeccionLayout
      titulo="Tecnologías"
      descripcion="Herramientas para que cada página tenga su propio estilo, y guías paso a paso para arrancar con las más complejas. Cada guía trae prompts listos para usar con tu IA."
    >
      {/* CÓMO USAR LAS GUÍAS CON IA */}
      <div className="rounded-2xl border border-sobre-fondo-borde bg-panel-foto p-5 sm:p-7">
        <p className="mb-4 text-sm font-bold uppercase tracking-wider text-texto">
          Cómo aprovechar las guías con tu IA
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {consejos.map((c) => (
            <div key={c.titulo} className="flex gap-3 lg:flex-col lg:gap-2">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-acento/15 text-acento">
                <c.icono size={18} />
              </span>
              <div>
                <p className="font-semibold text-texto">{c.titulo}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-texto-suave">{c.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORÍAS */}
      {categorias.map((cat) => {
        const items = tecnologias.filter((t) => t.categoria === cat.id);
        if (items.length === 0) return null;
        return (
          <section key={cat.id} className="mt-12">
            <TituloBloque>{cat.nombre}</TituloBloque>
            <p className="-mt-2 mb-5 max-w-2xl text-sobre-fondo-suave">{cat.descripcion}</p>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((t) => (
                <Link
                  key={t.id}
                  to={`/tecnologias/${t.id}`}
                  style={varColor(t.color)}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-borde bg-superficie p-5 no-underline shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-(--tec) hover:shadow-2xl"
                >
                  {/* Brillo del color de la tecnología en la esquina */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-(--tec)/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100 sm:opacity-60"
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <IconoTec tec={t} />
                    <NivelBadge nivel={t.nivel} />
                  </div>
                  <h3 className="relative mt-4 text-lg font-bold text-texto">{t.nombre}</h3>
                  <p className="relative mt-1 flex-1 text-sm leading-relaxed text-texto-suave">{t.resumen}</p>
                  <div className="relative mt-5 flex items-center justify-between border-t border-borde pt-3 text-xs">
                    <span className="min-w-0 truncate text-texto-suave" title={t.idealPara}>
                      {t.idealPara} · {t.pasos.length} pasos
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap font-semibold text-acento">
                      Ver guía
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </SeccionLayout>
  );
}
