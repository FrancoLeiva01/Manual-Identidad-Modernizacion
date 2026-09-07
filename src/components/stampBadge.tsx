import type { EstadoTipo } from "../content/proyectos";

interface StampBadgeProps {
  texto: string;
  tipo: EstadoTipo;
}

const estilos: Record<EstadoTipo, string> = {
  OK: "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400",
  PELIGRO:
    "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400",
  CAOS: "bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400",
};

export function StampBadge({ texto, tipo }: StampBadgeProps) {
  return (
    <span
      className={
        "shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap " +
        estilos[tipo]
      }
    >
      {texto}
    </span>
  );
}
