import { useParams } from "react-router-dom";
import { proyectos } from "../content/proyectos";
import { PanelHero } from "../components/PanelHero";
import { CodeBlock } from "../components/codeBlock";
import { MasImagenes } from "../components/Images";

export function ProyectoPage() {
  const { id } = useParams();
  const proyecto = proyectos.find((p) => p.id === id);

  if (!proyecto) {
    return (
      <div className="px-8 pt-4 pb-12 max-w-full mx-auto">
        <p>Expediente no encontrado. Se lo llevó Mesa de Entradas.</p>
      </div>
    );
  }

  return (
    <div className="px-8 pt-4 pb-12 max-w-350 mx-auto" key={proyecto.id}>
      <div className="mb-5">
        {/* <p className="mb-1 text-xs tracking-wide uppercase text-gray-500 dark:text-slate-400">
          {proyecto.expediente} · {proyecto.estado}
        </p> */}
        <h1 className="mb-1.5 text-5xl flex justify-center mt-5 font-bold text-gray-900 dark:text-slate-100">
          {proyecto.nombre}
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <PanelHero proyecto={proyecto} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-5">
            <p className="mb-2 text-[22px] tracking-wide font-bold uppercase text-cyan-600 dark:text-cyan-400">
              Descripción
            </p>
            <p className="whitespace-pre-line text-gray-900 dark:text-slate-100 leading-relaxed m-0">
              {proyecto.descripcion}
            </p>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {proyecto.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs bg-gray-100 dark:bg-purple-600 border border-gray-100 dark:border-slate-200 text-gray-700 dark:text-slate-300 rounded-full px-2.5 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <MasImagenes imagenes={proyecto.imagenes} />
        </div>

        <CodeBlock
          codigo={"// Pegá acá el snippet de código de este proyecto"}
          lenguaje={
            Array.isArray(proyecto.lenguaje)
              ? proyecto.lenguaje.join(", ")
              : proyecto.lenguaje
          }
        />
      </div>
    </div>
  );
}
