import { NavLink } from "react-router-dom";
import { proyectos } from "../content/proyectos";

export function Sidebar() {
  return (
    <aside className="w-64 shrink-0 sticky top-0 h-screen overflow-y-auto bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 py-5 flex flex-col">
      <div className="flex items-center px-5 pb-4 mb-3 border-b border-gray-200 dark:border-slate-700">
        <img
          src="/-Isologotipo_Catamarca Capital.png"
          alt="Catamarca Capital"
          className="h-full w-auto object-contain dark:hidden"
        />
        <img
          src="/-Isologotipo_Catamarca Capital_blanco.png"
          alt="Catamarca Capital"
          className="hidden h-full w-auto object-contain dark:block"
        />
      </div>

      <p className="mx-5 mb-2 text-[13px] font-bold tracking-wide uppercase text-gray-400 dark:text-slate-500">
        Proyectos:
      </p>

      <nav className="flex flex-col gap-1 px-3">
        {proyectos.map((p) => {
          const Icono = p.icono;
          return (
            <NavLink
              key={p.id}
              to={`/expediente/${p.id}`}
              title={p.expediente}
              className={({ isActive }) =>
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium no-underline transition-colors " +
                (isActive
                  ? "bg-slate-200/60 dark:bg-purple-400 text-purple-500 dark:text-slate-100"
                  : "text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700")
              }
            >
              <Icono size={18} />
              <span>{p.nombre}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}