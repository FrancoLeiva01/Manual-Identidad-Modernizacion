import type { Proyecto } from "../content/proyectos";

interface PanelHeroProps {
  proyecto: Proyecto;
}

export function PanelHero({ proyecto }: PanelHeroProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {proyecto.equipo.map((persona) => (
        <div
          key={persona.nombre}
          className="rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-800"
        >
          {persona.imagen ? (
            <img
              src={persona.imagen}
              alt={persona.nombre}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div
              className="w-full h-48 flex items-center justify-center"
              style={{ background: persona.color }}
            >
              <span className="text-4xl font-bold text-slate-700/60">
                {persona.nombre.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <div className="p-3">
            <p className="font-semibold text-sm m-0 text-gray-900 dark:text-slate-100">
              {persona.nombre}
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 m-0">
              {persona.rol}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
