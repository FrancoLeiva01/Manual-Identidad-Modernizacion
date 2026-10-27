import type { ReactNode } from "react";
import { Inbox } from "lucide-react";

// Lo que se muestra cuando una lista o búsqueda no tiene resultados.
//   <EstadoVacio titulo="Sin agentes" descripcion="Todavía no cargaste ninguno."
//     accion={<Boton>Cargar agente</Boton>} />

interface EstadoVacioProps {
  titulo: string;
  descripcion?: string;
  icono?: ReactNode;
  accion?: ReactNode;
}

export function EstadoVacio({
  titulo,
  descripcion,
  icono = <Inbox size={28} />,
  accion,
}: EstadoVacioProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        {icono}
      </div>
      <p className="font-semibold text-slate-900">{titulo}</p>
      {descripcion && <p className="mt-1 max-w-sm text-sm text-slate-500">{descripcion}</p>}
      {accion && <div className="mt-5">{accion}</div>}
    </div>
  );
}
