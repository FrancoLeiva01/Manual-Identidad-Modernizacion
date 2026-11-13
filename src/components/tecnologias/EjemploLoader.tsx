import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play } from "lucide-react";
import { CodeBlockColapsable } from "../proyectoPage/codeBlockColapsable";
import { PromptIA } from "./PromptIA";
import { LoaderHemeroteca } from "./LoaderHemeroteca";
import codigoLoader from "./LoaderHemeroteca.tsx?raw";

// Ejemplo real de Motion: el loader de la Hemeroteca, dentro de una "pantalla"
// que simula la carga de la página (loader → sale con fade → aparece el sitio).

const USO = `import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { LoaderHemeroteca } from "./components/LoaderHemeroteca";

export default function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setCargando(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* AnimatePresence hace que se vea el "exit" (fade out) al sacarlo */}
      <AnimatePresence>
        {cargando && <LoaderHemeroteca key="loader" />}
      </AnimatePresence>

      <main style={{ visibility: cargando ? "hidden" : "visible" }}>
        ...
      </main>
    </>
  );
}`;

const PROMPT =
  "Tengo este loader hecho con motion/react: [pegá LoaderHemeroteca.tsx]. Adaptalo para [nombre del sitio]: cambiá los textos por [kicker, título, subtítulo, pie], usá la paleta [fondo, texto, acento] y la tipografía [fuente]. Mantené la misma estructura de animación (líneas que se estiran, fade escalonado y puntitos que titilan) y que se vea bien en celular.";

export function EjemploLoader() {
  const [vuelta, setVuelta] = useState(0);
  const [cargando, setCargando] = useState(true);

  // Cada "vuelta" vuelve a mostrar el loader 1.6s, igual que en la Hemeroteca
  useEffect(() => {
    setCargando(true);
    const t = setTimeout(() => setCargando(false), 1600);
    return () => clearTimeout(t);
  }, [vuelta]);

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-white/30 bg-panel-foto p-5 text-sm leading-relaxed text-texto sm:text-base">
        <p className="font-bold">Loader editorial · Hemeroteca Municipal</p>
        <p className="mt-1 text-texto-suave">
          Pantalla de carga con estética de portada de diario que hicimos para
          la Hemeroteca Municipal (la verdad que quedo piola pero era mas de lo
          que se merecian esos hdp): las líneas se estiran desde el centro, los
          textos aparecen escalonados con{" "}
          <code className="font-semibold text-acento">delay</code> y los
          puntitos titilan en loop con{" "}
          <code className="font-semibold text-acento">repeat: Infinity</code>.
          Todo con <code className="font-semibold text-acento">opacity</code> y{" "}
          <code className="font-semibold text-acento">scaleX</code>, que son las
          propiedades más livianas de animar.
        </p>
      </div>

      {/* PANTALLA DE PRUEBA */}
      <div className="overflow-hidden rounded-xl border border-white/30 bg-white shadow-xl">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-100 px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <span className="truncate text-xs text-slate-500">
            hemeroteca.catamarcacapital.gob.ar
          </span>
          <button
            type="button"
            onClick={() => setVuelta((v) => v + 1)}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white hover:bg-orange-600 cursor-pointer"
          >
            <Play size={12} /> Recargar
          </button>
        </div>

        <div className="relative aspect-video bg-[#f5f5f0]">
          {/* "Página" que queda debajo del loader */}
          <motion.div
            key={vuelta}
            initial={{ opacity: 0, y: 12 }}
            animate={cargando ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
              Página cargada
            </p>
            <p className="font-serif text-2xl font-bold text-slate-900 sm:text-4xl">
              Acá aparece el sitio
            </p>
            <p className="text-sm text-slate-500">
              Tocá "Recargar" para ver el loader otra vez.
            </p>
          </motion.div>

          <AnimatePresence>
            {cargando && (
              <LoaderHemeroteca
                key={`loader-${vuelta}`}
                className="absolute inset-0"
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      <CodeBlockColapsable
        codigo={codigoLoader}
        lenguaje="LoaderHemeroteca.tsx"
      />
      <CodeBlockColapsable codigo={USO} lenguaje="App.tsx — cómo se engancha" />
      <PromptIA prompt={PROMPT} />
    </div>
  );
}
