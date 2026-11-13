import { motion } from "motion/react";

// Loader editorial de la Hemeroteca Municipal (hemeroteca-front/LoaderEditorial.tsx).
// Por defecto ocupa toda la pantalla; con `className` se puede meter en una caja
// (así lo mostramos en el manual). El título se escala con el ancho del contenedor (cqw).

const PUNTOS = ["bg-orange-600", "bg-cyan-600", "bg-sky-800"];

export function LoaderHemeroteca({
  className = "fixed inset-0 z-50 h-svh w-screen",
}: {
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className={
        "@container flex items-center justify-center overflow-hidden bg-[#f7f6f2] px-6 " + className
      }
    >
      <div className="w-full max-w-4xl text-center">
        {/* Línea superior: se "estira" desde el centro */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-[4cqw] h-px w-full origin-center bg-slate-400 sm:mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-[2.5cqw] text-[clamp(8px,1.5cqw,11px)] font-semibold uppercase tracking-[0.45em] text-sky-700 sm:mb-4"
        >
          Noticias · Archivo · Cultura
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-[clamp(1.6rem,10cqw,6rem)] leading-none font-bold tracking-tight text-slate-950"
        >
          HEMEROTECA MUNICIPAL
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-[3cqw] text-[clamp(8px,1.5cqw,12px)] uppercase tracking-[0.3em] text-slate-500 sm:mt-5"
        >
          Catamarca, Argentina — Archivo histórico digital
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-[5cqw] h-px w-full bg-slate-400 sm:mt-8"
        />

        {/* Tres puntitos que titilan uno atrás del otro (repeat: Infinity + delay) */}
        <div className="mt-[6cqw] flex items-center justify-center gap-3 sm:mt-10">
          {PUNTOS.map((color, i) => (
            <motion.span
              key={color}
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              className={`h-2.5 w-2.5 rounded-full ${color}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-[6cqw] border-t border-slate-400 pt-4 sm:mt-10"
        >
          <p className="text-[clamp(7px,1.3cqw,10px)] uppercase tracking-[0.3em] text-slate-500">
            Secretaría de Modernización · Municipalidad de Catamarca Capital · Secretaría de Cultura
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
