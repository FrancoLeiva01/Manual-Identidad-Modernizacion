import { UserRound } from "lucide-react";
import type { Proyecto } from "../../content/proyectos";

interface PanelHeroProps {
  proyecto: Proyecto;
}

export function PanelHero({ proyecto }: PanelHeroProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {proyecto.equipo.map((persona) => (
        <div
          key={persona.nombre}
          className="rounded-xl border border-borde overflow-hidden bg-superficie"
        >
          {persona.imagen ? (
            <div className="m-3 mb-0 h-45 flex items-center justify-center overflow-hidden rounded-lg bg-superficie-suave">
              <img
                src={persona.imagen}
                alt={persona.nombre}
                loading="lazy"
                className="h-full w-full object-contain object-center"
              />
            </div>
          ) : (
            // Marco vacío a la espera de la foto
            <div className="m-3 mb-0 h-45 flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-borde bg-superficie-suave text-texto-suave">
              <UserRound size={40} strokeWidth={1.5} />
              <span className="text-xs">Imagen pendiente</span>
            </div>
          )}
          <div className="p-3">
            <p className="font-semibold text-sm m-0 text-texto">
              {persona.nombre}
            </p>
            <p className="text-xs text-texto-suave mt-0.5 m-0">
              {persona.rol}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
