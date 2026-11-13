import type { ReactNode } from "react";
import type { Tecnologia } from "../../content/tecnologias";
import { varColor } from "./color";

// Ícono de la tecnología dentro de un cuadrado con su color
export function IconoTec({ tec, tamano = "md" }: { tec: Tecnologia; tamano?: "md" | "lg" }) {
  const Icono = tec.icono;
  const grande = tamano === "lg";
  return (
    <span
      style={varColor(tec.color)}
      className={
        "grid shrink-0 place-items-center border border-(--tec)/40 bg-(--tec)/15 text-(--tec) " +
        (grande
          ? "h-20 w-20 rounded-3xl shadow-[0_0_40px_-8px_var(--tec)] backdrop-blur-md"
          : "h-11 w-11 rounded-xl")
      }
    >
      <Icono size={grande ? 38 : 22} />
    </span>
  );
}

const tonosNivel: Record<Tecnologia["nivel"], string> = {
  Fácil: "bg-green-500/15 text-green-700 ring-green-500/30 dark:text-green-300",
  Intermedio: "bg-amber-500/15 text-amber-700 ring-amber-500/30 dark:text-amber-300",
  Avanzado: "bg-red-500/15 text-red-700 ring-red-500/30 dark:text-red-300",
};

export function NivelBadge({ nivel, sobreFoto = false }: { nivel: Tecnologia["nivel"]; sobreFoto?: boolean }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset " +
        (sobreFoto ? "bg-sobre-fondo/10 text-sobre-fondo ring-sobre-fondo-borde backdrop-blur-md" : tonosNivel[nivel])
      }
    >
      Nivel {nivel.toLowerCase()}
    </span>
  );
}

// Título de bloque sobre la foto de fondo
export function TituloBloque({ children, extra }: { children: ReactNode; extra?: ReactNode }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <h2 className="flex items-center gap-3 text-xl font-black uppercase tracking-wide text-sobre-fondo sm:text-2xl">
        <span className="h-6 w-1.5 rounded-full bg-marca" />
        {children}
      </h2>
      {extra}
    </div>
  );
}
