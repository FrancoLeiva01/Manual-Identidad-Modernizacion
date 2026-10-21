import { Suspense, useState } from "react";
import { useParams } from "react-router-dom";
import { proyectos } from "../content/proyectos";
import { PanelHero } from "../components/PanelHero";
import { MasImagenes } from "../components/Images";
import { Tabs } from "../components/tabs";
import { contenidoFront, contenidoBack } from "../content/registro";

type TabId = "general" | "front" | "back";

const BG_IMG = "/nodo.jpeg";

export function ProyectoPage() {
  const { id } = useParams();
  const proyecto = proyectos.find((p) => p.id === id);
  const [tab, setTab] = useState<TabId>("general");

  if (!proyecto) {
    return (
      <div className="px-8 pt-4 pb-12 max-w-full mx-auto">
        <p>Expediente no encontrado. Se lo llevó Mesa de Entradas.</p>
      </div>
    );
  }

  const Front = contenidoFront[proyecto.id];
  const Back = contenidoBack[proyecto.id];

  return (
    <div className="relative min-h-screen">
      {/* FONDO: misma imagen del Home, fija detrás de todo (y debajo del sidebar) */}
      <img
        src={BG_IMG}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover mask-[linear-gradient(to_bottom,black,transparent_400%)]"
      />
      {/* Capa para que el contenido se lea bien encima de la foto */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-white/70 backdrop-blur-[2px] dark:bg-slate-950/75"
      />

      {/* CONTENIDO */}
      <div
        className="relative px-8 pt-4 pb-12 max-w-350 mx-auto"
        key={proyecto.id}
      >
        <div className="mb-5">
          <p className="mb-1 text-xs tracking-wide uppercase text-gray-600 dark:text-slate-300">
            {proyecto.expediente} · {proyecto.estado}
          </p>
          <h1 className="mb-1.5 text-5xl flex justify-center mt-5 font-bold text-gray-900 dark:text-slate-100">
            {proyecto.nombre}
          </h1>
        </div>

        {/* PANEL DE INTEGRANTES */}
        <div className="flex flex-col gap-4">
          <PanelHero proyecto={proyecto} />

          <Tabs
            tabs={[
              { id: "general", label: "General" },
              { id: "front", label: "Front" },
              { id: "back", label: "Back" },
            ]}
            activo={tab}
            onChange={setTab}
          />

          {tab === "general" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-5 rounded-2xl shadow-md">
                <p className="mb-2 text-[22px] tracking-wide font-bold uppercase text-cyan-600 dark:text-cyan-400">
                  Descripción
                </p>
                <p className="whitespace-pre-line text-gray-900 dark:text-slate-100 leading-relaxed m-0">
                  {proyecto.descripcionGeneral}
                </p>
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {proyecto.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-cyan-100 dark:bg-purple-600 border border-gray-100 dark:border-purple-600 text-gray-700 dark:text-slate-300 rounded-full px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <MasImagenes imagenes={proyecto.imagenes} />
            </div>
          )}

          {tab === "front" && (
            <Suspense
              fallback={<p className="text-sm text-gray-500">Cargando…</p>}
            >
              {Front ? (
                <Front />
              ) : (
                <p className="text-sm text-gray-600 dark:text-slate-400">
                  Contenido de Front pendiente para este proyecto.
                </p>
              )}
            </Suspense>
          )}

          {tab === "back" && (
            <Suspense
              fallback={<p className="text-sm text-gray-500">Cargando…</p>}
            >
              {Back ? (
                <Back />
              ) : (
                <p className="text-sm text-gray-600 dark:text-slate-400">
                  Contenido de Back pendiente para este proyecto.
                </p>
              )}
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}