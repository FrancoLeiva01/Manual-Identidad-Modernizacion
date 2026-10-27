import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronRight, Menu, PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { proyectos } from "../content/proyectos";

// Cambiá estas rutas por los logos que correspondan
const LOGO_CLARO = "/-Isologotipo_Catamarca Capital.png";
const LOGO_OSCURO = "/-Isologotipo_Catamarca Capital_blanco.png";

export function Sidebar() {
  const [colapsado, setColapsado] = useState(false);
  // En celular el sidebar es un menú que se abre con el botón hamburguesa
  const [abierto, setAbierto] = useState(false);
  // El modo colapsado solo aplica en escritorio
  const mini = colapsado && !abierto;
  const cerrar = () => setAbierto(false);

  return (
    <>
      {/* BOTÓN HAMBURGUESA (solo celular) */}
      <button
        type="button"
        onClick={() => setAbierto(true)}
        aria-label="Abrir menú"
        className="fixed top-4 left-4 z-30 rounded-full bg-slate-900/80 p-3 text-white shadow-lg transition-colors hover:bg-slate-600 cursor-pointer md:hidden"
      >
        <Menu size={18} />
      </button>

      {/* FONDO OSCURO detrás del menú (solo celular) */}
      {abierto && (
        <div
          aria-hidden="true"
          onClick={cerrar}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <div
        className={
          "fixed inset-y-0 left-0 z-50 h-dvh shrink-0 p-3 transition-transform duration-300 md:sticky md:top-0 md:z-10 md:h-screen md:translate-x-0 " +
          (abierto ? "translate-x-0" : "-translate-x-full")
        }
      >
        <aside
          className={
            "flex h-full flex-col rounded-2xl bg-superficie md:bg-vidrio backdrop-blur-sm py-5 shadow-2xl transition-[width] duration-300 " +
            (mini ? "w-20" : "w-64")
          }
        >
          {/* HEADER: logo + botón colapsar */}
          <div
            className={
              "mb-6 flex items-center px-4 " +
              (mini ? "justify-center" : "justify-between gap-2")
            }
          >
            {!mini && (
              <Link to="/" onClick={cerrar} className="flex min-w-0 items-center">
                {/* Modo claro */}
                <img
                  src={LOGO_CLARO}
                  alt="Catamarca Capital"
                  className="h-18 w-auto object-contain dark:hidden"
                />
                {/* Modo oscuro */}
                <img
                  src={LOGO_OSCURO}
                  alt="Catamarca Capital"
                  className="hidden h-18 w-auto object-contain dark:block"
                />
              </Link>
            )}
            {abierto ? (
              <button
                type="button"
                onClick={cerrar}
                aria-label="Cerrar menú"
                className="shrink-0 rounded-lg p-2 text-texto transition-colors hover:bg-hover cursor-pointer"
              >
                <X size={20} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setColapsado((c) => !c)}
                aria-label={colapsado ? "Expandir sidebar" : "Colapsar sidebar"}
                className="shrink-0 rounded-lg p-2 text-texto transition-colors hover:bg-hover cursor-pointer"
              >
                {colapsado ? (
                  <PanelLeftOpen size={20} />
                ) : (
                  <PanelLeftClose size={20} />
                )}
              </button>
            )}
          </div>

          {/* DIVIDER (siempre visible) */}
          <hr className="mx-5 mb-3 -mt-4 border-white/30" />

          {/* TÍTULO DE SECCIÓN (solo expandido) */}
          {!mini && (
            <p className="mx-5 mb-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
              Proyectos:
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
                  onClick={cerrar}
                  title={mini ? p.nombre : p.expediente}
                  className={({ isActive }) =>
                    "group flex items-center gap-3 rounded-lg py-2.5 text-sm font-medium no-underline transition-colors " +
                    (mini ? "justify-center px-0 " : "px-3 ") +
                    (isActive
                      ? "bg-activo text-activo-texto"
                      : "text-texto hover:bg-hover")
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icono size={20} className="shrink-0" />
                      {!mini && (
                        <>
                          <span className="min-w-0 flex-1 truncate">{p.nombre}</span>
                          {/* Detalle: flechita que se asoma al pasar o en el activo */}
                          <ChevronRight
                            size={16}
                            className={
                              "shrink-0 transition-all duration-200 " +
                              (isActive
                                ? "opacity-100"
                                : "opacity-40 group-hover:translate-x-0.5 group-hover:opacity-100")
                            }
                          />
                        </>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* FOOTER: card tipo "usuario" */}
          <div className="mt-4 px-3">
            {mini ? (
              <div
                title="Secretaría de Modernización"
                className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-marca text-sm font-bold text-white"
              >
                FL
              </div>
            ) : (
              <div className="flex items-center gap-3 rounded-lg border border-borde bg-superficie px-3 py-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-marca text-sm font-bold text-white">
                  FL
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-texto">
                    Franco Leiva
                  </p>
                  <p className="truncate text-xs text-texto-suave">
                    Equipo de Desarrollo
                  </p>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}
