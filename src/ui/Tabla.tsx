import type { ReactNode } from "react";

// Tabla simple a partir de columnas + filas. Scrollea de costado en el celular.
//   <Tabla
//     columnas={[
//       { titulo: "Nombre", celda: (a) => a.nombre },
//       { titulo: "Estado", celda: (a) => <Badge tono="exito">{a.estado}</Badge> },
//     ]}
//     filas={agentes}
//     claveFila={(a) => a.id}
//   />

export interface Columna<T> {
  titulo: string;
  celda: (fila: T) => ReactNode;
  alinear?: "izquierda" | "derecha";
}

interface TablaProps<T> {
  columnas: Columna<T>[];
  filas: T[];
  claveFila: (fila: T) => string | number;
  vacio?: ReactNode;
}

export function Tabla<T>({
  columnas,
  filas,
  claveFila,
  vacio = "No hay registros para mostrar.",
}: TablaProps<T>) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-slate-50">
            {columnas.map((c) => (
              <th
                key={c.titulo}
                scope="col"
                className={
                  "border-b border-slate-200 px-4 py-3 font-semibold text-slate-600 whitespace-nowrap " +
                  (c.alinear === "derecha" ? "text-right" : "text-left")
                }
              >
                {c.titulo}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.length === 0 ? (
            <tr>
              <td colSpan={columnas.length} className="px-4 py-10 text-center text-slate-500">
                {vacio}
              </td>
            </tr>
          ) : (
            filas.map((f) => (
              <tr key={claveFila(f)} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                {columnas.map((c) => (
                  <td
                    key={c.titulo}
                    className={
                      "px-4 py-3 text-slate-800 " +
                      (c.alinear === "derecha" ? "text-right" : "text-left")
                    }
                  >
                    {c.celda(f)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
