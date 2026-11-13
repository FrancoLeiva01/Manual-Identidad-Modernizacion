import { useState } from "react";
import { Check, Copy, Sparkles } from "lucide-react";

// Bloque "Decile a tu IA": el texto entre [corchetes] se resalta,
// porque es lo que cada uno tiene que completar antes de mandarlo.
export function PromptIA({ prompt }: { prompt: string }) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1500);
    } catch {
      // sin permiso de portapapeles: no hacemos nada
    }
  }

  const partes = prompt.split(/(\[[^\]]+\])/g);

  return (
    // Borde degradado cyan → naranja: el "sello" de los prompts en todo el manual
    <div className="rounded-xl bg-linear-to-r from-acento to-marca p-px shadow-lg">
      <div className="rounded-[11px] bg-superficie p-4 sm:p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-acento">
            <Sparkles size={14} /> Decile a tu IA
          </p>
          <button
            type="button"
            onClick={copiar}
            className="inline-flex items-center gap-1.5 rounded-full border border-borde px-3 py-1 text-xs font-medium text-texto transition-colors hover:bg-hover cursor-pointer"
          >
            {copiado ? <Check size={13} /> : <Copy size={13} />}
            {copiado ? "Copiado" : "Copiar"}
          </button>
        </div>
        <p className="m-0 text-sm leading-relaxed text-texto sm:text-[15px]">
          {partes.map((p, i) =>
            p.startsWith("[") && p.endsWith("]") ? (
              <mark
                key={i}
                className="rounded bg-marca/15 px-1 font-medium text-marca"
              >
                {p}
              </mark>
            ) : (
              <span key={i}>{p}</span>
            ),
          )}
        </p>
      </div>
    </div>
  );
}
