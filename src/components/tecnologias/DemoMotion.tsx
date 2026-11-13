import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bell, RotateCcw, X } from "lucide-react";

// Demos en vivo de lo que se explica en el paso a paso de Motion.

function Tile({ titulo, prop, children }: { titulo: string; prop: string; children: ReactNode }) {
  return (
    <div className="flex flex-col rounded-xl border border-white/30 bg-white p-4 shadow-md">
      <div className="mb-3 flex items-baseline justify-between gap-2">
        <p className="text-sm font-bold text-slate-900">{titulo}</p>
        <code className="truncate text-[11px] font-semibold text-cyan-700">{prop}</code>
      </div>
      <div className="flex min-h-44 flex-1 items-center justify-center rounded-lg bg-slate-50 p-4">
        {children}
      </div>
    </div>
  );
}

const noticias = ["Nueva colección digitalizada", "Taller de restauración", "Muestra de tapas históricas", "Horario de verano"];

export function DemoMotion() {
  const [repetir, setRepetir] = useState(0);
  const [aviso, setAviso] = useState(false);
  const [activo, setActivo] = useState(false);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Tile titulo="Hover y click" prop="whileHover / whileTap">
        <motion.div
          whileHover={{ scale: 1.05, y: -6, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="w-48 cursor-pointer rounded-2xl bg-linear-to-br from-cyan-600 to-slate-900 p-5 text-white shadow-lg"
        >
          <p className="text-xs uppercase tracking-wider opacity-70">Sección</p>
          <p className="text-lg font-bold">Catálogo</p>
          <p className="mt-2 text-xs opacity-80">Pasá el mouse o tocame</p>
        </motion.div>
      </Tile>

      <Tile titulo="Lista escalonada" prop="variants + staggerChildren">
        <div className="w-full">
          <motion.ul
            key={repetir}
            initial="oculto"
            animate="visible"
            variants={{ oculto: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="m-0 list-none space-y-2 p-0"
          >
            {noticias.map((n) => (
              <motion.li
                key={n}
                variants={{ oculto: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="rounded-lg bg-white px-3 py-2 text-sm text-slate-700 shadow-sm"
              >
                {n}
              </motion.li>
            ))}
          </motion.ul>
          <button
            type="button"
            onClick={() => setRepetir((r) => r + 1)}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:underline cursor-pointer"
          >
            <RotateCcw size={12} /> Repetir
          </button>
        </div>
      </Tile>

      <Tile titulo="Entrar y salir" prop="AnimatePresence + exit">
        <div className="relative flex h-36 w-full flex-col items-center justify-start">
          <button
            type="button"
            onClick={() => setAviso((a) => !a)}
            className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow hover:bg-orange-600 cursor-pointer"
          >
            {aviso ? "Ocultar aviso" : "Mostrar aviso"}
          </button>
          <AnimatePresence>
            {aviso && (
              <motion.div
                key="aviso"
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-0 flex w-full max-w-60 items-center gap-3 rounded-xl bg-slate-900 px-4 py-3 text-sm text-white shadow-xl"
              >
                <Bell size={16} className="shrink-0 text-orange-400" />
                <span className="flex-1">Guardado correctamente</span>
                <button type="button" onClick={() => setAviso(false)} aria-label="Cerrar" className="cursor-pointer opacity-70 hover:opacity-100">
                  <X size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Tile>

      <Tile titulo="Cambios de posición" prop="layout">
        <button
          type="button"
          onClick={() => setActivo((a) => !a)}
          aria-pressed={activo}
          aria-label="Interruptor de ejemplo"
          className={
            "flex h-12 w-24 cursor-pointer rounded-full p-1.5 transition-colors " +
            (activo ? "justify-end bg-cyan-600" : "justify-start bg-slate-300")
          }
        >
          <motion.span
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="h-9 w-9 rounded-full bg-white shadow-md"
          />
        </button>
      </Tile>
    </div>
  );
}
