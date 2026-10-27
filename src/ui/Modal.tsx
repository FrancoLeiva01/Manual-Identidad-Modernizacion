import { useEffect, useId, type ReactNode } from "react";
import { X } from "lucide-react";

// Ventana modal. Se cierra con Esc, con la X o tocando afuera.
//   <Modal abierto={abierto} onCerrar={() => setAbierto(false)} titulo="¿Eliminar agente?"
//     acciones={<>
//       <Boton variante="secundario" onClick={() => setAbierto(false)}>Cancelar</Boton>
//       <Boton variante="peligro" onClick={eliminar}>Eliminar</Boton>
//     </>}>
//     Esta acción no se puede deshacer.
//   </Modal>

interface ModalProps {
  abierto: boolean;
  onCerrar: () => void;
  titulo: string;
  children?: ReactNode;
  acciones?: ReactNode;
}

export function Modal({ abierto, onCerrar, titulo, children, acciones }: ModalProps) {
  const tituloId = useId();

  useEffect(() => {
    if (!abierto) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onCerrar();
    }
    // Evita que la página de atrás scrollee mientras el modal está abierto
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", onKey);
    };
  }, [abierto, onCerrar]);

  if (!abierto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div aria-hidden="true" onClick={onCerrar} className="absolute inset-0 bg-slate-900/50" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
        className="relative w-full max-w-md rounded-xl bg-white shadow-xl"
      >
        <div className="flex items-start justify-between gap-4 px-5 pt-5">
          <h2 id={tituloId} className="text-lg font-semibold text-slate-900">
            {titulo}
          </h2>
          <button
            type="button"
            onClick={onCerrar}
            aria-label="Cerrar"
            className="rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-800 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>
        {children && <div className="px-5 pt-2 text-sm text-slate-600">{children}</div>}
        {acciones && (
          <div className="mt-5 flex justify-end gap-2 border-t border-slate-200 px-5 py-4">
            {acciones}
          </div>
        )}
      </div>
    </div>
  );
}
