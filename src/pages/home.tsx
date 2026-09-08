// import { proyectos } from "../content/proyectos";

export function Home() {
  return (
    <div className="px-8 pt-4 pb-12 max-w-270 mx-auto">
      <div className="mb-5">
        <h1 className="mb-4 mt-8 text-4xl font-bold text-gray-900 dark:text-slate-100">
          Manual de Identidad para La Secretaria de Modernización
        </h1>
        <p className="text-gray-500 dark:text-slate-400 max-w-270 m-0">
          Acá quedan archivados todos los proyectos en los que hemos trabajados
          todos en la oficina. Qué estilos usamos, qué componentes se pueden
          reutilizar y quién tiene la culpa de cada decisión de diseño. Elegí un
          proyecto en el Sidebar de la izquierda para ver más detalles.
        </p>
      </div>
    </div>
  );
}
