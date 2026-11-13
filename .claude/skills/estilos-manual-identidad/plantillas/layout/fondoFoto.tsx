const BG_IMG = "/nodo.jpeg";

// Foto de fondo fija + velo, igual en todas las páginas.
// Los colores del velo salen de --velo-desde / --velo-hasta (index.css).
export function FondoFoto() {
  return (
    <>
      <img
        src={BG_IMG}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-linear-to-r from-(--velo-desde) to-(--velo-hasta)"
      />
    </>
  );
}
