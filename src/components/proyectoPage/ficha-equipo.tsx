import type { Miembro } from "../../content/proyectos";

interface FichaEquipoProps {
  equipo: Miembro[];
}

export function FichaEquipo({ equipo }: FichaEquipoProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <p className="mb-3 font-semibold text-sm">Composición del equipo</p>
      <div className="flex flex-col gap-3">
        {equipo.map((persona, i) => (
          <div
            key={persona.nombre}
            className={
              "flex items-center gap-2.5 pb-3" +
              (i < equipo.length - 1 ? " border-b border-gray-200" : "")
            }
          >
            <div>
              <p className="font-semibold text-[13px] m-0">{persona.nombre}</p>
              <p className="mt-0.5 text-xs text-gray-500 m-0">{persona.rol}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
