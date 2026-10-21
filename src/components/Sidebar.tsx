import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { proyectos } from "../content/proyectos";

export function Sidebar() {
  const [colapsado, setColapsado] = useState(false);

  return (
    <div className="sticky top-0 z-10 h-screen shrink-0 p-3">
      <aside
        className={
          "flex h-full flex-col rounded-2xl bg-slate-900/85 py-5 shadow-2xl backdrop-blur-md transition-[width] duration-300 " +
          (colapsado ? "w-20" : "w-64")
        }
      >
        {/* HEADER: logo + botón colapsar */}
        <div
          className={
            "mb-6 flex items-center px-4 " +
            (colapsado ? "justify-center" : "justify-between gap-2")
          }
        >
          {!colapsado && (
            <Link to="/" className="flex min-w-0 items-center">
              <img
                src="/-Isologotipo_Catamarca Capital_blanco.png"
                alt="Catamarca Capital"
                className="h-18 w-auto object-contain"
              />
            </Link>
          )}
          <button
            type="button"
            onClick={() => setColapsado((c) => !c)}
            aria-label={colapsado ? "Expandir sidebar" : "Colapsar sidebar"}
            className="shrink-0 rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
          >
            {colapsado ? (
              <PanelLeftOpen size={20} />
            ) : (
              <PanelLeftClose size={20} />
            )}
          </button>
        </div>

        {/* TÍTULO DE SECCIÓN (línea cuando está colapsado) */}
        {colapsado ? (
          <hr className="mx-5 mb-3 border-slate-100" />
        ) : (
          <p className="mx-5 mb-2 text-sm font-semibold text-slate-400">
            Proyectos
          </p>
        )}

        {/* NAV */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3">
          {proyectos.map((p) => {
            const Icono = p.icono;
            return (
              <NavLink
                key={p.id}
                to={`/expediente/${p.id}`}
                title={colapsado ? p.nombre : p.expediente}
                className={({ isActive }) =>
                  "flex items-center gap-3 rounded-lg py-2.5 text-sm font-medium no-underline transition-colors " +
                  (colapsado ? "justify-center px-0 " : "px-3 ") +
                  (isActive
                    ? "bg-white text-slate-900"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white")
                }
              >
                <Icono size={20} className="shrink-0" />
                {!colapsado && <span className="truncate">{p.nombre}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* FOOTER: card tipo "usuario" */}
        <div className="mt-4 px-3">
          {colapsado ? (
            <div
              title="Secretaría de Modernización"
              className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white"
            >
              FL
            </div>
          ) : (
            <div className="flex items-center gap-3 rounded-lg bg-white px-3 py-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                FL
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">
                  Franco Leiva
                </p>
                <p className="truncate text-xs text-slate-500">
                  Equipo de Desarrollo
                </p>
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
