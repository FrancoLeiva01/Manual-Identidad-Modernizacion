import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";

// Botón base del kit. Necesita Tailwind y lucide-react, nada más.
//   <Boton>Guardar</Boton>
//   <Boton variante="secundario" icono={<Plus size={16} />}>Nuevo</Boton>
//   <Boton variante="peligro" cargando>Eliminando…</Boton>

type Variante = "primario" | "secundario" | "peligro" | "fantasma";
type Tamano = "sm" | "md" | "lg";

interface BotonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: Variante;
  tamano?: Tamano;
  cargando?: boolean;
  icono?: ReactNode;
}

const variantes: Record<Variante, string> = {
  primario: "bg-[#0B2454] text-white hover:bg-[#1A4876] focus-visible:outline-[#0B2454]",
  secundario:
    "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus-visible:outline-slate-400",
  peligro: "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600",
  fantasma: "text-slate-700 hover:bg-slate-100 focus-visible:outline-slate-400",
};

const tamanos: Record<Tamano, string> = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
};

export function Boton({
  variante = "primario",
  tamano = "md",
  cargando = false,
  icono,
  disabled,
  className = "",
  children,
  type = "button",
  ...props
}: BotonProps) {
  return (
    <button
      type={type}
      disabled={disabled || cargando}
      className={
        "inline-flex items-center justify-center rounded-lg font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 " +
        variantes[variante] +
        " " +
        tamanos[tamano] +
        " " +
        className
      }
      {...props}
    >
      {cargando ? <Loader2 size={16} className="animate-spin" /> : icono}
      {children}
    </button>
  );
}
