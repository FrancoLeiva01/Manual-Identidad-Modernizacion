import { useState } from "react";

interface CodeBlockProps {
  codigo: string;
  lenguaje?: string;
}

export function CodeBlock({ codigo, lenguaje = "tsx" }: CodeBlockProps) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    await navigator.clipboard.writeText(codigo);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1500);
  }

  return (
    <div className="rounded-xl overflow-hidden bg-[#14171f] border border-[#14171f]">
      <div className="flex justify-between items-center px-3.5 py-2 bg-[#1c1f29] text-[#9aa4b2] text-[11px]">
        <span>{lenguaje}</span>
        <button
          onClick={copiar}
          className="bg-transparent border border-white/15 text-inherit rounded-md px-2 py-0.5 cursor-pointer text-[11px] hover:border-blue-600 hover:text-white"
        >
          {copiado ? "copiado ✓" : "copiar"}
        </button>
      </div>
      <pre className="m-0 p-4 text-[13px] text-gray-200 overflow-x-auto">
        <code>{codigo}</code>
      </pre>
    </div>
  );
}