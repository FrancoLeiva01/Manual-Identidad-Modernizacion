import { Image as ImageIcon } from "lucide-react";

interface MasImagenesProps {
  imagenes?: string[];
}

// Muestra hasta 3 casilleros. Los que tengan una ruta en `imagenes`
// se ven como foto real; el resto queda como placeholder vacío.
export function MasImagenes({ imagenes = [] }: MasImagenesProps) {
  const casilleros = [0, 1, 2];

  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-5 rounded-2xl shadow-md">
      <p className="mb-3 font-semibold text-md text-gray-900 dark:text-slate-100">
        Imagenes del Sistema
      </p>
      <div className="flex flex-col gap-3.5">
        {casilleros.map((i) =>
          imagenes[i] ? (
            <img
              key={i}
              src={imagenes[i]}
              alt=""
              className="aspect-video w-full object-cover rounded-lg border border-gray-200 dark:border-slate-700"
            />
          ) : (
            <div
              key={i}
              className="aspect-video bg-gray-50 dark:bg-slate-900 border border-dashed border-gray-300 dark:border-slate-600 rounded-lg flex items-center justify-center text-gray-400 dark:text-slate-500"
            >
              <ImageIcon size={22} />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
