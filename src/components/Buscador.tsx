import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import { LayoutTemplate, Search, X } from "lucide-react";
import { proyectos, type Proyecto } from "../content/proyectos";

// Secciones de componentes que también aparecen en la búsqueda
const secciones = [
  { titulo: "Footers", url: "/footers", detalle: "Componentes" },
  { titulo: "Navbars", url: "/navbars", detalle: "Componentes" },
  { titulo: "Sidebars", url: "/sidebars", detalle: "Componentes" },
  { titulo: "Homes", url: "/homes", detalle: "Componentes" },
  { titulo: "Kit UI", url: "/ui", detalle: "Botones, formularios, alertas y más" },
];

interface Resultado {
  titulo: string;
  detalle: string;
  url: string;
  icono: Proyecto["icono"];
  // Todo el texto por el que se puede encontrar este resultado
  texto: string;
}

// Minúsculas y sin tildes, así "credito" encuentra "Crédito"
function normalizar(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

const indice: Resultado[] = [
  ...proyectos.map((p) => ({
    titulo: p.nombre,
    detalle: `${p.expediente} · ${p.estado}`,
    url: `/expediente/${p.id}`,
    icono: p.icono,
    texto: normalizar(
      [
        p.nombre,
        p.expediente,
        p.estado,
        ...p.stack,
        ...p.componentes,
        ...p.equipo.map((m) => m.nombre),
      ].join(" "),
    ),
  })),
  ...secciones.map((s) => ({
    ...s,
    icono: LayoutTemplate,
    texto: normalizar(`${s.titulo} ${s.detalle}`),
  })),
];

export function Buscador() {
  const [consulta, setConsulta] = useState("");
  const [abierto, setAbierto] = useState(false);
  const [seleccionado, setSeleccionado] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const contenedorRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const resultados = useMemo(() => {
    const palabras = normalizar(consulta).split(/\s+/).filter(Boolean);
    if (palabras.length === 0) return [];
    return indice
      .filter((r) => palabras.every((w) => r.texto.includes(w)))
      .slice(0, 8);
  }, [consulta]);

  // Ctrl+K (o Cmd+K) enfoca el buscador desde cualquier lado
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Clic afuera cierra la lista
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!contenedorRef.current?.contains(e.target as Node)) setAbierto(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function ir(r: Resultado) {
    navigate(r.url);
    setConsulta("");
    setAbierto(false);
    inputRef.current?.blur();
  }

  function onKeyDown(e: ReactKeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSeleccionado((i) => Math.min(i + 1, resultados.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSeleccionado((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && resultados[seleccionado]) {
      ir(resultados[seleccionado]);
    } else if (e.key === "Escape") {
      setAbierto(false);
      inputRef.current?.blur();
    }
  }

  const mostrarLista = abierto && consulta.trim() !== "";

  return (
    // Ocupa 0px de alto: queda flotando arriba de cada vista sin correr el contenido
    <div className="sticky top-0 z-20 h-0">
      <div
        ref={contenedorRef}
        className="absolute top-4 left-18 right-20 md:left-1/2 md:right-auto md:w-[min(36rem,calc(100%-10rem))] md:-translate-x-1/2"
      >
        {/* BARRA: vidrio oscuro para que se siga viendo la foto de fondo */}
        <label className="flex h-11 items-center gap-2 rounded-full border border-white/25 bg-slate-900/35 px-4 text-white shadow-lg backdrop-blur-md transition-colors focus-within:border-white/60 focus-within:bg-slate-900/55">
          <Search size={18} className="shrink-0 text-white/80" />
          <input
            ref={inputRef}
            type="search"
            value={consulta}
            onChange={(e) => {
              setConsulta(e.target.value);
              setSeleccionado(0);
              setAbierto(true);
            }}
            onFocus={() => setAbierto(true)}
            onKeyDown={onKeyDown}
            placeholder="Buscar proyectos, componentes, personas…"
            aria-label="Buscar en el manual"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/65 [&::-webkit-search-cancel-button]:hidden"
          />
          {consulta ? (
            <button
              type="button"
              onClick={() => {
                setConsulta("");
                inputRef.current?.focus();
              }}
              aria-label="Borrar búsqueda"
              className="shrink-0 rounded-full p-1 text-white/80 hover:bg-white/15 hover:text-white cursor-pointer"
            >
              <X size={16} />
            </button>
          ) : (
            <kbd className="hidden shrink-0 rounded border border-white/30 px-1.5 py-0.5 text-[11px] font-medium text-white/70 sm:block">
              Ctrl K
            </kbd>
          )}
        </label>

        {/* RESULTADOS */}
        {mostrarLista && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-borde bg-superficie shadow-2xl">
            {resultados.length === 0 ? (
              <p className="px-4 py-3 text-sm text-texto-suave">
                Nada por acá. Probá con otra palabra.
              </p>
            ) : (
              <ul className="m-0 list-none p-1.5">
                {resultados.map((r, i) => {
                  const Icono = r.icono;
                  return (
                    <li key={r.url}>
                      <button
                        type="button"
                        onClick={() => ir(r)}
                        onMouseEnter={() => setSeleccionado(i)}
                        className={
                          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left cursor-pointer " +
                          (i === seleccionado ? "bg-hover" : "")
                        }
                      >
                        <Icono size={18} className="shrink-0 text-acento" />
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-semibold text-texto">
                            {r.titulo}
                          </span>
                          <span className="block truncate text-xs text-texto-suave">
                            {r.detalle}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
