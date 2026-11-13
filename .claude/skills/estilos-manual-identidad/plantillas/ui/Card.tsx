import type { ReactNode } from "react";

// Contenedor blanco con borde suave. Base de casi cualquier pantalla.
//   <Card titulo="Datos personales" acciones={<Boton tamano="sm">Editar</Boton>}>
//     ...
//   </Card>

interface CardProps {
  titulo?: string;
  descripcion?: string;
  acciones?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Card({ titulo, descripcion, acciones, children, className = "" }: CardProps) {
  return (
    <section className={"rounded-xl border border-slate-200 bg-white shadow-sm " + className}>
      {(titulo || acciones) && (
        <header className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 px-5 py-4">
          <div>
            {titulo && <h3 className="text-base font-semibold text-slate-900">{titulo}</h3>}
            {descripcion && <p className="mt-0.5 text-sm text-slate-500">{descripcion}</p>}
          </div>
          {acciones}
        </header>
      )}
      <div className="p-5">{children}</div>
    </section>
  );
}
