import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CodeBlockColapsable } from "../components/codeBlockColapsable";
import footerSimpleCode from "../snippets/footers/footerSimple.tsx.txt?raw";
import footerHemerotecaCode from "../snippets/footers/footerHemeroteca.tsx.txt?raw";

const BG_IMG = "/nodo.jpeg";

function Subtitulo({ children }: { children: string }) {
  return (
    <p className="mt-10 text-3xl font-bold uppercase tracking-wide text-cyan-400">
      {children}
    </p>
  );
}

export function Footers() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* FONDO: mismo que el Home */}
      <img
        src={BG_IMG}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-slate-800/30 dark:bg-slate-950/75"
      />

      {/* CONTENIDO */}
      <div className="relative px-8 pt-12 pb-12 max-w-full mx-auto">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
        >
          <ArrowLeft size={16} /> Volver al inicio
        </Link>

        <section className="mb-6 max-w-3xl">
          <div className="mb-6 h-1 w-16 rounded-full bg-orange-500" />
          <h1 className="text-5xl font-black uppercase leading-[0.9] text-white drop-shadow-lg md:text-7xl">
            Footers
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed font-medium text-slate-200">
            Footers listos para reutilizar. Copiá el código y pegalo en tu
            proyecto.
          </p>
        </section>

        <div className="flex flex-col gap-2">
          {/* ================= SIMPLE ================= */}
          <Subtitulo>El Basicon</Subtitulo>
          <p className="text-slate-200 leading-relaxed text-xl my-1">
            Logo, links y copyright en una sola fila. Rapido y sencillo.
          </p>
          <CodeBlockColapsable
            codigo={footerSimpleCode}
            lenguaje="footer-simple.tsx"
          />

          {/* ================= HEMEROTECA ================= */}
          <Subtitulo>Hemeroteca</Subtitulo>
          <p className="text-slate-200 leading-relaxed text-xl my-1">
            Footer usado en el proyecto Hemeroteca. Mas claro y con una estetica
            de periodico y tipografia serif.
          </p>
          <CodeBlockColapsable
            codigo={footerHemerotecaCode}
            lenguaje="footer-hemeroteca.tsx"
          />
        </div>
      </div>
    </div>
  );
}
