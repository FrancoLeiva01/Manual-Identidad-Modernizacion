import { useState } from "react";
import { Check } from "lucide-react";
import { paletas, type Color, type Paleta } from "../../content/paletas";

// Texto oscuro o claro según qué tan luminoso es el color de fondo
function textoSobre(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return 0.299 * r + 0.587 * g + 0.114 * b > 150 ? "#111111" : "#FFFFFF";
}

function Muestra({ color, rol, onCopiar, copiado }: { color: Color; rol: string; onCopiar: () => void; copiado: boolean }) {
  return (
    <button
      type="button"
      onClick={onCopiar}
      title={`Copiar ${color.hex}`}
      style={{ backgroundColor: color.hex, color: textoSobre(color.hex) }}
      className="flex min-w-0 flex-1 flex-col justify-end rounded-lg p-2.5 text-left ring-1 ring-inset ring-black/10 transition-transform hover:-translate-y-0.5 cursor-pointer"
    >
      <span className="text-[10px] uppercase tracking-wider opacity-70">{rol}</span>
      <span className="text-xs leading-tight font-bold">{color.nombre}</span>
      <span className="flex items-center gap-1 font-mono text-[11px] opacity-80">
        {copiado ? <><Check size={11} /> copiado</> : color.hex}
      </span>
    </button>
  );
}

function TarjetaPaleta({ p }: { p: Paleta }) {
  const [copiado, setCopiado] = useState<string | null>(null);

  async function copiar(hex: string) {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiado(hex);
      setTimeout(() => setCopiado(null), 1200);
    } catch {
      // sin permiso de portapapeles
    }
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-borde bg-superficie shadow-lg">
      {/* Captura de referencia: de dónde salió la paleta. Click la abre entera. */}
      <a
        href={p.imagen}
        target="_blank"
        rel="noreferrer"
        title="Ver la referencia completa"
        className="group relative block aspect-16/10 overflow-hidden bg-black"
      >
        <img
          src={p.imagen}
          alt={`Diseño de referencia de la paleta ${p.nombre}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          Referencia
        </span>
      </a>

      {/* Vista previa: mini hero pintado con la paleta (60 / 30 / 10) */}
      <div style={{ backgroundColor: p.fondo.hex, color: p.texto.hex }} className="relative overflow-hidden p-5">
        <span
          aria-hidden="true"
          style={{ backgroundColor: p.acento.hex }}
          className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full opacity-90"
        />
        <p style={{ color: p.acento.hex }} className="text-[10px] font-bold uppercase tracking-[0.2em]">
          {p.nombre}
        </p>
        <p className="mt-1 text-2xl leading-tight font-black tracking-tight">
          {p.titulo[0]} <span className="font-serif font-medium italic">{p.titulo[1]}</span>
        </p>
        <span
          style={{ backgroundColor: p.acento.hex, color: textoSobre(p.acento.hex) }}
          className="relative mt-4 inline-block rounded-full px-3.5 py-1.5 text-xs font-bold"
        >
          Empezar →
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex gap-2">
          {([["Fondo", p.fondo], ["Texto", p.texto], ["Acento", p.acento]] as const).map(([rol, c]) => (
            <Muestra key={rol} rol={rol} color={c} copiado={copiado === c.hex} onCopiar={() => copiar(c.hex)} />
          ))}
        </div>
        <div className="text-sm">
          <p className="font-semibold text-texto">{p.sensacion}</p>
          <p className="text-texto-suave">Ideal para: {p.idealPara}</p>
        </div>
      </div>
    </div>
  );
}

export function Paletas() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-white/30 bg-panel-foto p-5 text-sm leading-relaxed text-texto sm:text-base">
        <p className="font-bold">La receta de todas: 60 · 30 · 10</p>
        <p className="mt-1 text-texto-suave">
          60% un fondo tranquilo, 30% el color del texto y 10% un acento que grite (botones, una palabra, un detalle).
          Si querés que se vea "caro", poné una palabra del título en serif itálica. Tocá un color para copiarlo.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {paletas.map((p) => (
          <TarjetaPaleta key={p.nombre} p={p} />
        ))}
      </div>
    </div>
  );
}
