import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, UserRound } from "lucide-react";

export interface FotoEquipo {
  nombre: string;
  rol?: string;
  imagen?: string; // sin imagen se muestra un marco vacío
}

interface CarruselEquipoProps {
  fotos: FotoEquipo[];
  intervalo?: number; // ms entre cada avance automático
}

// Carrusel horizontal con flechas y avance automático.
// Se pausa al pasar el mouse y no se mueve solo si el usuario
// tiene activado "reducir movimiento" en su sistema.
export function CarruselEquipo({ fotos, intervalo = 4000 }: CarruselEquipoProps) {
  const pista = useRef<HTMLDivElement>(null);
  const [pausado, setPausado] = useState(false);

  const mover = (direccion: 1 | -1) => {
    const el = pista.current;
    if (!el) return;
    const tarjeta = el.firstElementChild as HTMLElement | null;
    const paso = tarjeta ? tarjeta.offsetWidth + 16 : el.clientWidth;
    const alFinal = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const alInicio = el.scrollLeft <= 4;

    // Al llegar a un extremo, vuelve al otro
    if (direccion === 1 && alFinal) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (direccion === -1 && alInicio)
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: paso * direccion, behavior: "smooth" });
  };

  useEffect(() => {
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (pausado || reducir) return;
    const id = setInterval(() => mover(1), intervalo);
    return () => clearInterval(id);
  }, [pausado, intervalo]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
    >
      <div
        ref={pista}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none]"
      >
        {fotos.map((f, i) => (
          <figure
            key={f.nombre + i}
            className="w-44 shrink-0 snap-start overflow-hidden rounded-xl border border-borde bg-superficie shadow-md sm:w-52"
          >
            {f.imagen ? (
              <img
                src={f.imagen}
                alt={f.nombre}
                className="aspect-square w-full object-cover"
              />
            ) : (
              <div className="m-2 mb-0 flex aspect-square flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-borde bg-superficie-suave text-texto-suave">
                <UserRound size={36} strokeWidth={1.5} />
                <span className="text-xs">Foto pendiente</span>
              </div>
            )}
            <figcaption className="px-3 py-2.5">
              <p className="truncate text-sm font-semibold text-texto">
                {f.nombre}
              </p>
              {f.rol && (
                <p className="truncate text-xs text-texto-suave">{f.rol}</p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        onClick={() => mover(-1)}
        aria-label="Anterior"
        className="absolute top-1/2 -left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-superficie text-texto shadow-lg ring-1 ring-borde transition hover:scale-105"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={() => mover(1)}
        aria-label="Siguiente"
        className="absolute top-1/2 -right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-superficie text-texto shadow-lg ring-1 ring-borde transition hover:scale-105"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
