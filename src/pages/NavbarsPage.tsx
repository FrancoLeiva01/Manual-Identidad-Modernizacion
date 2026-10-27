import { CodeBlockColapsable } from "../components/proyectoPage/codeBlockColapsable";
import { SeccionLayout, Subtitulo } from "../components/seccionLayout";
import navbarBasicoCode from "../snippets/navbars/navbarBasico.tsx.txt?raw";
import navbarSimpaticoCode from "../snippets/navbars/navbarSimpatico.tsx.txt?raw";
import navbarModernoCode from "../snippets/navbars/navbarModerno.tsx.txt?raw";

export function Navbars() {
  return (
    <SeccionLayout
      titulo="Navbars"
      descripcion="Barras de navegación listas para reutilizar. Copiá el código y pegalo en tu proyecto."
    >
      <div className="flex flex-col gap-2">
        {/* ================= BASICO ================= */}
        <Subtitulo>El Basicon</Subtitulo>
        <p className="text-slate-200 leading-relaxed text-base sm:text-xl my-1">
          Logo, links y boton de ingresar, con menu hamburguesa en el celular.
          Ideal para sistemas internos.
        </p>
        <CodeBlockColapsable
          codigo={navbarBasicoCode}
          lenguaje="navbar-basico.tsx"
        />

        {/* ================= SIMPATICO ================= */}
        <Subtitulo>El Simpatico</Subtitulo>
        <p className="text-slate-200 leading-relaxed text-base sm:text-xl my-1">
          Barra flotante tipo pastilla, link activo resaltado, campanita con
          contador y menu de usuario que saluda segun la hora del dia.
        </p>
        <CodeBlockColapsable
          codigo={navbarSimpaticoCode}
          lenguaje="navbar-simpatico.tsx"
        />

        {/* ================= MODERNO ================= */}
        <Subtitulo>El Moderno</Subtitulo>
        <p className="text-slate-200 leading-relaxed text-base sm:text-xl my-1">
          Transparente arriba y efecto vidrio al scrollear, indicador que se
          desliza entre links, buscador con atajo Ctrl K y toggle de tema
          animado. Para sitios publicos.
        </p>
        <CodeBlockColapsable
          codigo={navbarModernoCode}
          lenguaje="navbar-moderno.tsx"
        />
      </div>
    </SeccionLayout>
  );
}
