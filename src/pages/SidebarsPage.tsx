import { CodeBlockColapsable } from "../components/proyectoPage/codeBlockColapsable";
import { SeccionLayout, Subtitulo } from "../components/seccionLayout";
import sidebarBasicoCode from "../snippets/sidebars/sidebarBasico.tsx.txt?raw";
import sidebarSimpaticoCode from "../snippets/sidebars/sidebarSimpatico.tsx.txt?raw";
import sidebarModernoCode from "../snippets/sidebars/sidebarModerno.tsx.txt?raw";

export function Sidebars() {
  return (
    <SeccionLayout
      titulo="Sidebars"
      descripcion="Sidebars flotantes y con bordes redondeados, listos para reutilizar. Copiá el código y pegalo en tu proyecto."
    >
      <div className="flex flex-col gap-2">
        {/* ================= BASICO ================= */}
        <Subtitulo>El Basicon</Subtitulo>
        <p className="text-slate-200 leading-relaxed text-base sm:text-xl my-1">
          Tarjeta flotante compacta: mide lo que mide su contenido, no todo el
          alto de la pantalla. Logo y lista de links, nada mas.
        </p>
        <CodeBlockColapsable
          codigo={sidebarBasicoCode}
          lenguaje="sidebar-basico.tsx"
        />

        {/* ================= SIMPATICO ================= */}
        <Subtitulo>El Simpatico</Subtitulo>
        <p className="text-slate-200 leading-relaxed text-base sm:text-xl my-1">
          Alto completo con margen alrededor, grupos que se despliegan con
          animacion, contadores de pendientes y tarjeta de ayuda abajo.
        </p>
        <CodeBlockColapsable
          codigo={sidebarSimpaticoCode}
          lenguaje="sidebar-simpatico.tsx"
        />

        {/* ================= MODERNO ================= */}
        <Subtitulo>El Moderno</Subtitulo>
        <p className="text-slate-200 leading-relaxed text-base sm:text-xl my-1">
          Oscuro tipo vidrio, se colapsa a iconos con tooltips, barra de color
          en el item activo, etiquetas y tarjeta de usuario con estado "en
          linea".
        </p>
        <CodeBlockColapsable
          codigo={sidebarModernoCode}
          lenguaje="sidebar-moderno.tsx"
        />
      </div>
    </SeccionLayout>
  );
}
