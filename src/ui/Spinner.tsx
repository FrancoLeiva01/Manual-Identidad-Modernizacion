import { Loader2 } from "lucide-react";

// Indicador de carga con texto (el texto lo leen los lectores de pantalla).
//   <Spinner />
//   <Spinner texto="Buscando agentes…" />

interface SpinnerProps {
  texto?: string;
  tamano?: number;
}

export function Spinner({ texto = "Cargando…", tamano = 20 }: SpinnerProps) {
  return (
    <div role="status" className="inline-flex items-center gap-2 text-sm text-slate-500">
      <Loader2 size={tamano} className="animate-spin text-[#0B2454]" />
      {texto}
    </div>
  );
}
