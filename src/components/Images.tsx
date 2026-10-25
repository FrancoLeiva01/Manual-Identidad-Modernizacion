import { Image as ImageIcon } from "lucide-react";

interface MasImagenesProps {
  imagenes?: string[];
}

// Muestra hasta 3 casilleros. Los que tengan una ruta en `imagenes`
// se ven como foto real; el resto queda como placeholder vacío.
export function MasImagenes({ imagenes = [] }: MasImagenesProps) {
  const casilleros = [0, 1, 2];

  return (
    <div className="bg-superficie border border-borde p-5 rounded-2xl shadow-md">
      <p className="mb-3 font-semibold text-md text-texto">
        Imagenes del Sistema
      </p>
      <div className="flex flex-col gap-3.5">
        {casilleros.map((i) =>
          imagenes[i] ? (
            <img
              key={i}
              src={imagenes[i]}
              alt=""
              className="aspect-video w-full object-cover rounded-lg border border-borde"
            />
          ) : (
            <div
              key={i}
              className="aspect-video bg-superficie-suave border border-dashed border-borde rounded-lg flex items-center justify-center text-texto-suave"
            >
              <ImageIcon size={22} />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
