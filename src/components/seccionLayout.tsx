import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FondoFoto } from "./fondoFoto";

// Layout común de las secciones de componentes (/footers, /navbars, /homes, /sidebars)
interface SeccionLayoutProps {
  titulo: string;
  descripcion: string;
  children?: ReactNode;
}

export function SeccionLayout({
  titulo,
  descripcion,
  children,
}: SeccionLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* FONDO: mismo que el Home */}
      <FondoFoto />

      {/* CONTENIDO */}
      <div className="relative px-8 pt-12 pb-12 max-w-full mx-auto">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
        >
          <ArrowLeft size={16} /> Volver al inicio
        </Link>

        <section className="mb-6 max-w-3xl">
          <div className="mb-6 h-1 w-16 rounded-full bg-marca" />
          <h1 className="text-5xl font-black uppercase leading-[0.9] text-white drop-shadow-lg md:text-7xl">
            {titulo}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed font-medium text-slate-200">
            {descripcion}
          </p>
        </section>

        {children ?? (
          <div className="mt-10 max-w-3xl rounded-xl border border-dashed border-white/30 bg-panel-foto backdrop-blur-md p-8 text-texto">
            Todavía no hay componentes cargados en esta sección. Pronto...
            (palabra oficial de la administración pública).
          </div>
        )}
      </div>
    </div>
  );
}

export function Subtitulo({ children }: { children: string }) {
  return (
    <p className="mt-10 text-3xl font-bold uppercase tracking-wide text-cyan-400">
      {children}
    </p>
  );
}
