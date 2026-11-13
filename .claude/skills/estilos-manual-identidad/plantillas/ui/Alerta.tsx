import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";

// Mensaje destacado dentro de la página. Siempre lleva ícono y texto,
// así no depende solo del color (pensando en monitores viejos).
//   <Alerta tipo="exito" titulo="Guardado">El agente se cargó bien.</Alerta>
//   <Alerta tipo="error" onCerrar={() => setError(null)}>{error}</Alerta>

type Tipo = "info" | "exito" | "alerta" | "error";

const estilos: Record<Tipo, { caja: string; icono: typeof Info }> = {
  info: { caja: "border-sky-200 bg-sky-50 text-sky-900", icono: Info },
  exito: { caja: "border-green-200 bg-green-50 text-green-900", icono: CheckCircle2 },
  alerta: { caja: "border-amber-200 bg-amber-50 text-amber-900", icono: AlertTriangle },
  error: { caja: "border-red-200 bg-red-50 text-red-900", icono: XCircle },
};

interface AlertaProps {
  tipo?: Tipo;
  titulo?: string;
  children?: ReactNode;
  onCerrar?: () => void;
}

export function Alerta({ tipo = "info", titulo, children, onCerrar }: AlertaProps) {
  const { caja, icono: Icono } = estilos[tipo];

  return (
    <div
      role={tipo === "error" ? "alert" : "status"}
      className={"flex gap-3 rounded-lg border p-4 text-sm " + caja}
    >
      <Icono size={20} className="mt-px shrink-0" />
      <div className="min-w-0 flex-1">
        {titulo && <p className="font-semibold">{titulo}</p>}
        {children && <div className={titulo ? "mt-1 opacity-90" : ""}>{children}</div>}
      </div>
      {onCerrar && (
        <button
          type="button"
          onClick={onCerrar}
          aria-label="Cerrar"
          className="shrink-0 self-start rounded p-0.5 opacity-70 hover:opacity-100 cursor-pointer"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
