import { CodeBlockColapsable } from "../components/codeBlockColapsable";
import { SeccionLayout, Subtitulo } from "../components/seccionLayout";
import footerSimpleCode from "../snippets/footers/footerSimple.tsx.txt?raw";
import footerHemerotecaCode from "../snippets/footers/footerHemeroteca.tsx.txt?raw";
import footerInstitucionalCode from "../snippets/footers/footerInstitucional.tsx.txt?raw";
import footerSimpaticoCode from "../snippets/footers/footerSimpatico.tsx.txt?raw";

export function Footers() {
  return (
    <SeccionLayout
      titulo="Footers"
      descripcion="Footers listos para reutilizar. Copiá el código y pegalo en tu proyecto."
    >
      <div className="flex flex-col gap-2">
        {/* ================= SIMPLE ================= */}
        <Subtitulo>El Basicon</Subtitulo>
        <p className="text-slate-200 leading-relaxed text-xl my-1">
          Logo, links y copyright en una sola fila. Rapido y sencillo.
        </p>
        <CodeBlockColapsable
          codigo={footerSimpleCode}
          lenguaje="footer-simple.tsx"
        />

        {/* ================= HEMEROTECA ================= */}
        <Subtitulo>Hemeroteca</Subtitulo>
        <p className="text-slate-200 leading-relaxed text-xl my-1">
          Footer usado en el proyecto Hemeroteca. Mas claro y con una estetica
          de periodico y tipografia serif.
        </p>
        <CodeBlockColapsable
          codigo={footerHemerotecaCode}
          lenguaje="footer-hemeroteca.tsx"
        />

        {/* ================= INSTITUCIONAL ================= */}
        <Subtitulo>El Institucional</Subtitulo>
        <p className="text-slate-200 leading-relaxed text-xl my-1">
          Oscuro y en 4 columnas: marca, navegacion, contacto y horario de
          atencion. Franja de colores arriba y boton para volver al inicio.
        </p>
        <CodeBlockColapsable
          codigo={footerInstitucionalCode}
          lenguaje="footer-institucional.tsx"
        />

        {/* ================= SIMPATICO ================= */}
        <Subtitulo>El Simpatico</Subtitulo>
        <p className="text-slate-200 leading-relaxed text-xl my-1">
          Claro, con una ola arriba, tarjeta para reportar bugs, links tipo
          pastilla e indicador de "sistemas funcionando". Serio, pero no tanto.
        </p>
        <CodeBlockColapsable
          codigo={footerSimpaticoCode}
          lenguaje="footer-simpatico.tsx"
        />
      </div>
    </SeccionLayout>
  );
}
