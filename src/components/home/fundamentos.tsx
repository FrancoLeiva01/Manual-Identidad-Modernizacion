import { useState } from "react";
import { Check, Copy, X } from "lucide-react";

// Colores tomados del isologotipo de Catamarca Capital + neutros para una página blanca.
// Ante cualquier duda, manda el manual oficial que está en el Dropbox.
const colores = [
  { nombre: "Azul institucional", hex: "#0B2454", uso: "Títulos, navbar, botón principal" },
  { nombre: "Celeste", hex: "#45B5DB", uso: "Links, foco, detalles" },
  { nombre: "Naranja", hex: "#F0901B", uso: "Acentos puntuales, nunca fondos grandes" },
  { nombre: "Blanco", hex: "#FFFFFF", uso: "Fondo de la página" },
  { nombre: "Gris fondo", hex: "#F8FAFC", uso: "Secciones y fondos secundarios" },
  { nombre: "Gris borde", hex: "#E2E8F0", uso: "Bordes y divisores" },
  { nombre: "Texto", hex: "#0F172A", uso: "Texto principal" },
  { nombre: "Texto suave", hex: "#64748B", uso: "Ayudas, fechas, secundarios" },
];

const tipografia = [
  { muestra: "Título de página", clase: "text-3xl font-bold text-[#0B2454]", detalle: "30px · bold" },
  { muestra: "Subtítulo de sección", clase: "text-xl font-semibold text-[#0F172A]", detalle: "20px · semibold" },
  { muestra: "Texto común para leer párrafos y formularios.", clase: "text-base text-[#0F172A]", detalle: "16px · regular" },
  { muestra: "Texto secundario, ayudas y fechas", clase: "text-sm text-[#64748B]", detalle: "14px · regular" },
];

const reglasLogo = {
  si: [
    "Versión a color sobre fondos blancos o claros.",
    "Versión blanca sobre el azul institucional o sobre fotos.",
    "Dejarle aire alrededor: nada pegado al logo.",
    "Mínimo 32px de alto en pantalla para que se lea.",
  ],
  no: [
    "Estirarlo, aplastarlo o rotarlo.",
    "Cambiarle los colores o ponerle sombras y efectos.",
    "Ponerlo sobre fondos que no contrasten.",
  ],
};

const LOGO_COLOR = "/-Isologotipo_Catamarca Capital.png";
const LOGO_BLANCO = "/-Isologotipo_Catamarca Capital_blanco.png";

function Muestra({ nombre, hex, uso }: (typeof colores)[number]) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    await navigator.clipboard.writeText(hex);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={copiar}
      title={`Copiar ${hex}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-borde bg-superficie text-left transition-shadow hover:shadow-lg cursor-pointer"
    >
      <span
        className="h-16 w-full border-b border-borde"
        style={{ backgroundColor: hex }}
      />
      <span className="flex flex-1 flex-col gap-0.5 p-3">
        <span className="text-sm font-semibold text-texto">{nombre}</span>
        <span className="flex items-center gap-1.5 font-mono text-xs text-texto-suave">
          {hex}
          {copiado ? (
            <Check size={12} className="text-green-600" />
          ) : (
            <Copy size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
          )}
        </span>
        <span className="mt-1 text-xs leading-snug text-texto-suave">{uso}</span>
      </span>
    </button>
  );
}

function Titulo({ children }: { children: string }) {
  return (
    <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-texto">
      {children}
    </h3>
  );
}

export function Fundamentos() {
  return (
    <section className="mt-8 rounded-xl border border-white/30 bg-panel-foto p-5 backdrop-blur-md sm:p-8 md:p-12">
      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-texto">
        Fundamentos
      </h2>
      <p className="mt-2 max-w-3xl leading-relaxed text-texto">
        La base de una página estilo Muni: fondo blanco, el logo bien puesto,
        poco color y mucho orden. Si arrancás un sistema nuevo y no sabés por
        dónde empezar, empezá por acá. Tocá un color para copiarlo.
      </p>

      {/* COLORES */}
      <div className="mt-8">
        <Titulo>Colores</Titulo>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {colores.map((c) => (
            <Muestra key={c.hex} {...c} />
          ))}
        </div>
        <p className="mt-3 text-xs text-white/75">
          <strong className="text-orange-400">Proporción recomendada:</strong> mucho blanco y gris, azul para lo importante,
          celeste y naranja solo de detalle.
        </p>
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-2">
        {/* TIPOGRAFÍA: siempre sobre blanco, como en un sistema real */}
        <div>
          <Titulo>Tipografía</Titulo>
          <div className="divide-y divide-slate-200 rounded-xl border border-borde bg-white px-5">
            {tipografia.map((t) => (
              <div
                key={t.detalle}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4"
              >
                <span className={t.clase}>{t.muestra}</span>
                <span className="font-mono text-xs text-slate-400">{t.detalle}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-texto-suave">
            Una sola familia sans-serif para todo (la del sistema o Inter).
            Negrita para jerarquía, no para decorar. Nada de textos en
            mayúscula sostenida en párrafos.
          </p>
        </div>

        {/* LOGO */}
        <div>
          <Titulo>Logo</Titulo>
          <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-borde">
            <div className="flex items-center justify-center bg-white p-6">
              <img src={LOGO_COLOR} alt="Isologotipo a color" className="h-12 w-auto object-contain sm:h-14" />
            </div>
            <div className="flex items-center justify-center bg-[#0B2454] p-6">
              <img src={LOGO_BLANCO} alt="Isologotipo blanco" className="h-12 w-auto object-contain sm:h-14" />
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <ul className="m-0 list-none space-y-2 p-0 text-sm text-texto">
              {reglasLogo.si.map((r) => (
                <li key={r} className="flex gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-green-600" />
                  {r}
                </li>
              ))}
            </ul>
            <ul className="m-0 list-none space-y-2 p-0 text-sm text-texto">
              {reglasLogo.no.map((r) => (
                <li key={r} className="flex gap-2">
                  <X size={16} className="mt-0.5 shrink-0 text-red-600" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ASÍ SE VE: maqueta mínima de una página Muni */}
      <div className="mt-8">
        <Titulo>Así se ve</Titulo>
        <div aria-hidden="true" className="overflow-hidden rounded-xl border border-borde bg-white shadow-md">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
            <img src={LOGO_COLOR} alt="" className="h-8 w-auto" />
            <div className="hidden gap-5 text-sm text-slate-600 sm:flex">
              <span>Inicio</span>
              <span>Trámites</span>
              <span>Contacto</span>
            </div>
            <span className="rounded-lg bg-[#0B2454] px-3 py-1.5 text-xs font-semibold text-white">
              Ingresar
            </span>
          </div>
          <div className="h-1 bg-linear-to-r from-[#0B2454] via-[#45B5DB] to-[#F0901B]" />
          <div className="bg-[#F8FAFC] px-5 py-8 sm:px-8">
            <p className="text-2xl font-bold text-[#0B2454]">Turnos online</p>
            <p className="mt-1 max-w-md text-sm text-slate-500">
              Sacá tu turno para cualquier oficina municipal sin hacer fila.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Licencias", "Catastro", "Rentas"].map((t) => (
                <div key={t} className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="mb-2 h-1 w-8 rounded-full bg-[#45B5DB]" />
                  <p className="font-semibold text-slate-900">{t}</p>
                  <p className="text-xs text-slate-500">Próximo turno: mañana</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
