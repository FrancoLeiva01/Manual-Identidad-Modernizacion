import type { ReactNode } from "react";

// Etiqueta chica para estados y categorías.
//   <Badge tono="exito">Activo</Badge>
//   <Badge tono="peligro">Dado de baja</Badge>

type Tono = "neutro" | "info" | "exito" | "alerta" | "peligro";

const tonos: Record<Tono, string> = {
  neutro: "bg-slate-100 text-slate-700 ring-slate-200",
  info: "bg-sky-50 text-sky-800 ring-sky-200",
  exito: "bg-green-50 text-green-800 ring-green-200",
  alerta: "bg-amber-50 text-amber-800 ring-amber-200",
  peligro: "bg-red-50 text-red-800 ring-red-200",
};

const puntos: Record<Tono, string> = {
  neutro: "bg-slate-400",
  info: "bg-sky-500",
  exito: "bg-green-500",
  alerta: "bg-amber-500",
  peligro: "bg-red-500",
};

interface BadgeProps {
  tono?: Tono;
  // Muestra un puntito de color antes del texto
  punto?: boolean;
  children: ReactNode;
}

export function Badge({ tono = "neutro", punto = false, children }: BadgeProps) {
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset " +
        tonos[tono]
      }
    >
      {punto && <span className={"h-1.5 w-1.5 rounded-full " + puntos[tono]} />}
      {children}
    </span>
  );
}
