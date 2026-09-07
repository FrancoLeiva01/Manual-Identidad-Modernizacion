import { proyectos } from "../content/proyectos";

export function Home() {
  return (
    <div className="px-8 pt-4 pb-12 max-w-[1080px] mx-auto">
      <div className="mb-5">
        <p className="mb-1 text-xs tracking-wide uppercase text-gray-500 dark:text-slate-400">
          Mesa de entradas
        </p>
        <h1 className="mb-1.5 text-2xl font-bold text-gray-900 dark:text-slate-100">
          Manual de Identidad (interino)
        </h1>
        <p className="text-gray-500 dark:text-slate-400 max-w-[60ch] m-0">
          Acá quedan archivados los expedientes de cada proyecto: qué estilos
          usamos, qué componentes se pueden reciclar y quién tiene la culpa de
          cada decisión de diseño. Elegí un expediente del archivero de la
          izquierda.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-4">
          <p className="text-xs text-gray-500 dark:text-slate-400 m-0">
            Expedientes en trámite
          </p>
          <p className="mt-0.5 text-lg font-bold text-gray-900 dark:text-slate-100 m-0">
            {proyectos.length}
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-4">
          <p className="text-xs text-gray-500 dark:text-slate-400 m-0">
            Tecnologías distintas
          </p>
          <p className="mt-0.5 text-lg font-bold text-gray-900 dark:text-slate-100 m-0">
            {new Set(proyectos.flatMap((p) => p.stack)).size}
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-4">
          <p className="text-xs text-gray-500 dark:text-slate-400 m-0">
            Piezas reciclables
          </p>
          <p className="mt-0.5 text-lg font-bold text-gray-900 dark:text-slate-100 m-0">
            {proyectos.reduce((acc, p) => acc + p.componentes.length, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
