import { Suspense, useState } from "react";
import { useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { proyectos } from "../content/proyectos";
import { PanelHero } from "../components/home/PanelHero";
import { MasImagenes } from "../components/proyectoPage/Images";
import { Tabs } from "../components/proyectoPage/tabs";
import { contenidoFront } from "../content/registro";

import { FondoFoto } from "../components/home/fondoFoto";

type TabId = "general" | "front";

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

  return (
    <div className="relative min-h-screen">
      {/* FONDO: misma imagen del Home, fija detrás de todo (y debajo del sidebar) */}
      <FondoFoto />

      {/* CONTENIDO */}
      <div
        className="relative px-8 pt-4 pb-12 max-w-350 mx-auto"
        key={proyecto.id}
      >
        <div className="mb-5">
          <p className="mb-1 text-xs tracking-wide uppercase text-slate-200">
            {proyecto.expediente} · {proyecto.estado}
          </p>
          <h1 className="mb-1.5 text-5xl flex justify-center mt-5 font-bold text-white drop-shadow-lg">
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
            ]}
            activo={tab}
            onChange={setTab}
          />

          {tab === "general" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              <div className="bg-superficie border border-borde p-5 rounded-2xl shadow-md">
                <p className="mb-2 text-[22px] tracking-wide font-bold uppercase text-acento">
                  Descripción
                </p>
                <p className="whitespace-pre-line text-texto leading-relaxed m-0">
                  {proyecto.descripcionGeneral}
                </p>
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {proyecto.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-medium bg-acento/10 border border-acento/30 text-acento rounded-full px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {proyecto.links && proyecto.links.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-borde">
                    <p className="mb-2 text-sm tracking-wide font-bold uppercase text-acento">
                      Links
                    </p>
                    <ul className="flex flex-col gap-2 m-0 p-0 list-none">
                      {proyecto.links.map((l) => (
                        <li key={l.url}>
                          <a
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-2 text-sm text-texto hover:text-acento"
                          >
                            <ExternalLink size={16} className="mt-0.5 shrink-0" />
                            <span className="min-w-0">
                              <span className="font-semibold">{l.label}</span>
                              <span className="block break-all text-texto-suave">
                                {l.url}
                              </span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <MasImagenes imagenes={proyecto.imagenes} />
            </div>
          )}

          {/* Front va dentro de una card para que el texto se lea sobre la foto */}
          {tab !== "general" && (
            <div className="bg-superficie border border-borde p-6 rounded-2xl shadow-md">
              <Suspense
                fallback={<p className="text-sm text-texto-suave">Cargando…</p>}
              >
                {tab === "front" &&
                  (Front ? (
                    <Front />
                  ) : (
                    <p className="text-sm text-texto-suave">
                      Contenido de Front pendiente para este proyecto.
                    </p>
                  ))}
              </Suspense>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
