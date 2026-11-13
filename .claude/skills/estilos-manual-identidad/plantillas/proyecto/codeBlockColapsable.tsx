import { useRef, useState } from "react";
import { CodeBlock } from "./codeBlock";

interface Props {
  codigo: string;
  lenguaje: string;
  alturaColapsado?: number; // en px
}

export function CodeBlockColapsable({
  codigo,
  lenguaje,
  alturaColapsado = 300,
}: Props) {
  const [abierto, setAbierto] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Si el código es corto, no tiene sentido colapsarlo
  const esLargo = codigo.split("\n").length > 15;

  const toggle = () => {
    if (abierto) {
      // Al cerrar, vuelve al inicio del bloque para no quedar perdido en la página
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setAbierto(!abierto);
  };

  if (!esLargo) return <CodeBlock codigo={codigo} lenguaje={lenguaje} />;

  return (
    <div ref={ref} className="relative">
      <div
        className="overflow-hidden"
        style={{ maxHeight: abierto ? "none" : alturaColapsado }}
      >
        <CodeBlock codigo={codigo} lenguaje={lenguaje} />
      </div>

      {!abierto && (
        <div className="pointer-events-none absolute bottom-10 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
      )}

      <button
        onClick={toggle}
        className="mt-2 w-full cursor-pointer rounded border border-borde bg-superficie py-2 text-sm font-medium text-acento hover:bg-superficie-suave"
      >
        {abierto ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
}