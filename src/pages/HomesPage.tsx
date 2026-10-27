import { CodeBlockColapsable } from "../components/proyectoPage/codeBlockColapsable";
import { SeccionLayout, Subtitulo } from "../components/seccionLayout";
import homeBasicoCode from "../snippets/homes/homeBasico.tsx.txt?raw";
import homeSimpaticoCode from "../snippets/homes/homeSimpatico.tsx.txt?raw";
import homeModernoCode from "../snippets/homes/homeModerno.tsx.txt?raw";

export function Homes() {
  return (
    <SeccionLayout
      titulo="Homes"
      descripcion="Pantallas de inicio listas para reutilizar. Copiá el código y pegalo en tu proyecto."
    >
      <div className="flex flex-col gap-2">
        {/* ================= BASICO ================= */}
        <Subtitulo>El Basicon</Subtitulo>
        <p className="text-slate-200 leading-relaxed text-base sm:text-xl my-1">
          Titulo, 3 indicadores y una tabla con las ultimas cargas. Sin
          animaciones ni degradados: se ve bien en cualquier monitor.
        </p>
        <CodeBlockColapsable
          codigo={homeBasicoCode}
          lenguaje="home-basico.tsx"
        />

        {/* ================= SIMPATICO ================= */}
        <Subtitulo>El Simpatico</Subtitulo>
        <p className="text-slate-200 leading-relaxed text-base sm:text-xl my-1">
          Saludo segun la hora, barra de progreso del mes, indicadores con
          iconos, accesos rapidos y un "tip del dia".
        </p>
        <CodeBlockColapsable
          codigo={homeSimpaticoCode}
          lenguaje="home-simpatico.tsx"
        />

        {/* ================= MODERNO ================= */}
        <Subtitulo>El Moderno</Subtitulo>
        <p className="text-slate-200 leading-relaxed text-base sm:text-xl my-1">
          Grilla tipo bento: hero oscuro con degradados difuminados, grafico de
          visitas y anillo de progreso en SVG puro, timeline de actividad y
          tarjeta de proximo evento. Para sitios publicos.
        </p>
        <CodeBlockColapsable
          codigo={homeModernoCode}
          lenguaje="home-moderno.tsx"
        />
      </div>
    </SeccionLayout>
  );
}
