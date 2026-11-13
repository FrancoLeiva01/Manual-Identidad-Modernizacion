import {
  useState,
  type ComponentType,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  FolderKanban,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  X,
} from "lucide-react";
import { proyectos } from "../content/proyectos";
import { categorias, tecnologias } from "../content/tecnologias";

type SeccionId = "proyectos" | "tecnologias";
type Abiertas = Record<SeccionId, boolean>;

// Caja con borde propio que agrupa items del sidebar (así no "flotan" en modo claro)
const CAJA =
  "flex flex-col gap-0.5 rounded-xl border border-slate-200 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-white/5";

// Proyectos arranca siempre plegado (es una lista larga); Tecnologías, abierto.
const ABIERTAS_INICIALES: Abiertas = { proyectos: false, tecnologias: true };

// Cambiá estas rutas por los logos que correspondan
const LOGO_CLARO = "/-Isologotipo_Catamarca Capital.png";
const LOGO_OSCURO = "/-Isologotipo_Catamarca Capital_blanco.png";

export function Sidebar() {
  const [colapsado, setColapsado] = useState(false);
  // En celular el sidebar es un menú que se abre con el botón hamburguesa
  const [abierto, setAbierto] = useState(false);
  // El modo colapsado solo aplica en escritorio
  const mini = colapsado && !abierto;
  const cerrar = () => setAbierto(false);

  const [abiertas, setAbiertas] = useState<Abiertas>(ABIERTAS_INICIALES);
  const { pathname } = useLocation();

  function alternar(id: SeccionId) {
    setAbiertas((a) => ({ ...a, [id]: !a[id] }));
  }

  // Si se llega a una tecnología por el buscador con la sección plegada, se abre.
  // (Proyectos no: queda siempre plegado hasta que lo abras a mano.)
  // Se ajusta durante el render (patrón recomendado por React) en vez de en un efecto.
  const [rutaPrevia, setRutaPrevia] = useState(pathname);
  if (pathname !== rutaPrevia) {
    setRutaPrevia(pathname);
    if (pathname.startsWith("/tecnologias/") && !abiertas.tecnologias) {
      setAbiertas({ ...abiertas, tecnologias: true });
    }
  }

  return (
    <>
      {/* BOTÓN HAMBURGUESA (solo celular) */}
      <button
        type="button"
        onClick={() => setAbierto(true)}
        aria-label="Abrir menú"
        className="fixed top-4 left-4 z-30 rounded-full bg-slate-900/80 p-3 text-white shadow-lg transition-colors hover:bg-slate-600 cursor-pointer md:hidden"
      >
        <Menu size={18} />
      </button>

      {/* FONDO OSCURO detrás del menú (solo celular) */}
      {abierto && (
        <div
          aria-hidden="true"
          onClick={cerrar}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <div
        className={
          "fixed inset-y-0 left-0 z-50 h-dvh shrink-0 p-3 transition-transform duration-300 md:sticky md:top-0 md:z-10 md:h-screen md:translate-x-0 " +
          (abierto ? "translate-x-0" : "-translate-x-full")
        }
      >
        <aside
          className={
            "flex h-full flex-col rounded-2xl bg-superficie md:bg-vidrio backdrop-blur-sm py-5 shadow-2xl transition-[width] duration-300 " +
            (mini ? "w-20" : "w-64")
          }
        >
          {/* HEADER: logo + botón colapsar */}
          <div
            className={
              "mb-6 flex items-center px-4 " +
              (mini ? "justify-center" : "justify-between gap-2")
            }
          >
            {!mini && (
              <Link to="/" onClick={cerrar} className="flex min-w-0 items-center">
                {/* Modo claro */}
                <img
                  src={LOGO_CLARO}
                  alt="Catamarca Capital"
                  className="h-18 w-auto object-contain dark:hidden"
                />
                {/* Modo oscuro */}
                <img
                  src={LOGO_OSCURO}
                  alt="Catamarca Capital"
                  className="hidden h-18 w-auto object-contain dark:block"
                />
              </Link>
            )}
            {abierto ? (
              <button
                type="button"
                onClick={cerrar}
                aria-label="Cerrar menú"
                className="shrink-0 rounded-lg p-2 text-texto transition-colors hover:bg-hover cursor-pointer"
              >
                <X size={20} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setColapsado((c) => !c)}
                aria-label={colapsado ? "Expandir sidebar" : "Colapsar sidebar"}
                className="shrink-0 rounded-lg p-2 text-texto transition-colors hover:bg-hover cursor-pointer"
              >
                {colapsado ? (
                  <PanelLeftOpen size={20} />
                ) : (
                  <PanelLeftClose size={20} />
                )}
              </button>
            )}
          </div>

          {/* DIVIDER (siempre visible) */}
          <hr className="mx-5 mb-3 -mt-4 border-slate-300 dark:border-white/30" />

          {/* NAV: secciones plegables (Proyectos / Tecnologías) */}
          <nav
            className={
              "flex flex-1 flex-col overflow-y-auto px-3 pb-2 " +
              (mini ? "gap-4" : "gap-1")
            }
          >
            <Seccion
              titulo="Proyectos"
              cantidad={proyectos.length}
              abierta={abiertas.proyectos}
              onToggle={() => alternar("proyectos")}
              mini={mini}
              // Colapsado: un solo ícono en vez de los 14, así no aparece scroll
              iconoMini={FolderKanban}
              activaMini={pathname.startsWith("/expediente")}
              onExpandir={() => {
                setColapsado(false);
                setAbiertas((a) => ({ ...a, proyectos: true }));
              }}
            >
              <div className={mini ? "contents" : CAJA}>
                {proyectos.map((p) => (
                  <ItemNav
                    key={p.id}
                    to={`/expediente/${p.id}`}
                    icono={p.icono}
                    nombre={p.nombre}
                    title={mini ? p.nombre : p.expediente}
                    mini={mini}
                    compacto
                    onClick={cerrar}
                  />
                ))}
              </div>
            </Seccion>

            <Seccion
              titulo="Tecnologías"
              cantidad={tecnologias.length}
              abierta={abiertas.tecnologias}
              onToggle={() => alternar("tecnologias")}
              mini={mini}
            >
              {/* Subdivisión por categoría: rótulo + caja propia con sus items */}
              {categorias.map((cat) => (
                <div key={cat.id} className={mini ? "flex flex-col gap-1" : "mt-1 first:mt-0"}>
                  {!mini && (
                    <p className="mb-1.5 px-1 text-[10px] font-bold uppercase tracking-wider text-texto-suave">
                      {cat.nombre}
                    </p>
                  )}
                  <div className={mini ? "contents" : CAJA}>
                    {tecnologias
                      .filter((t) => t.categoria === cat.id)
                      .map((t) => (
                        <ItemNav
                          key={t.id}
                          to={`/tecnologias/${t.id}`}
                          icono={t.icono}
                          color={t.color}
                          nombre={t.nombreCorto ?? t.nombre}
                          title={t.nombre}
                          mini={mini}
                          compacto
                          onClick={cerrar}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </Seccion>
          </nav>

          {/* FOOTER: card tipo "usuario" */}
          <div className="mt-4 px-3">
            {mini ? (
              <div
                title="Secretaría de Modernización"
                className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-marca text-sm font-bold text-white"
              >
                FL
              </div>
            ) : (
              <div className="flex items-center gap-3 rounded-lg border border-borde bg-superficie px-3 py-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-marca text-sm font-bold text-white">
                  FL
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-texto">
                    Franco Leiva
                  </p>
                  <p className="truncate text-xs text-texto-suave">
                    Equipo de Desarrollo
                  </p>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}

// ─── Sección plegable con título en mayúsculas ───────────────────────────
function Seccion({
  titulo,
  cantidad,
  abierta,
  onToggle,
  mini,
  iconoMini: IconoMini,
  activaMini = false,
  onExpandir,
  children,
}: {
  titulo: string;
  cantidad: number;
  abierta: boolean;
  onToggle: () => void;
  mini: boolean;
  // Si se pasa, colapsado se muestra solo este ícono; al tocarlo se expande el sidebar
  iconoMini?: ComponentType<{ size?: number; className?: string }>;
  activaMini?: boolean;
  onExpandir?: () => void;
  children: ReactNode;
}) {
  if (mini && IconoMini) {
    return (
      <div className="border-t border-white/30 pt-3 first:border-t-0 first:pt-0">
        <button
          type="button"
          onClick={onExpandir}
          title={`${titulo} (${cantidad})`}
          aria-label={`Ver ${titulo.toLowerCase()}`}
          className={
            "relative flex w-full justify-center rounded-lg py-2.5 transition-colors cursor-pointer " +
            (activaMini ? "bg-activo text-activo-texto" : "text-texto hover:bg-hover")
          }
        >
          <IconoMini size={20} />
          <span className="absolute top-1 right-2 rounded-full bg-marca px-1 text-[9px] font-bold leading-tight text-white">
            {cantidad}
          </span>
        </button>
      </div>
    );
  }

  // Colapsado (solo íconos): las secciones se separan con una línea y siempre se ven
  if (mini) {
    return (
      <div className="flex flex-col gap-1 border-t border-slate-800/30 pt-3 first:border-t-0 first:pt-0">
        {children}
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={abierta}
        className="group mb-2 flex w-full items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 text-left shadow-sm transition-colors hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/25 cursor-pointer"
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-texto">
          {titulo}
        </span>
        <span className="rounded-full bg-hover px-1.5 text-[10px] font-semibold text-texto-suave">
          {cantidad}
        </span>
        <ChevronDown
          size={14}
          className={
            "ml-auto text-texto-suave transition-transform duration-200 " +
            (abierta ? "" : "-rotate-90")
          }
        />
      </button>
      {/* grid-rows 0fr → 1fr anima la altura sin tener que medirla */}
      <div
        className={
          "grid transition-[grid-template-rows] duration-300 " +
          (abierta ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
        }
      >
        <div
          className={"flex min-h-0 flex-col gap-1 overflow-hidden px-px " + (abierta ? "pb-1" : "")}
          inert={!abierta}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── Item de navegación ──────────────────────────────────────────────────
function ItemNav({
  to,
  icono: Icono,
  nombre,
  title,
  mini,
  color,
  compacto = false,
  onClick,
}: {
  to: string;
  icono: ComponentType<{ size?: number; className?: string; style?: CSSProperties }>;
  nombre: string;
  title: string;
  mini: boolean;
  color?: string;
  compacto?: boolean;
  onClick: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      title={title}
      className={({ isActive }) =>
        "group flex items-center gap-3 rounded-lg text-sm font-medium no-underline transition-colors " +
        (compacto ? "py-2 " : "py-2.5 ") +
        (mini ? "justify-center px-0 " : "px-3 ") +
        (isActive ? "bg-activo text-activo-texto" : "text-texto hover:bg-hover")
      }
    >
      {({ isActive }) => (
        <>
          {/* Las tecnologías llevan su color en el ícono (salvo cuando están activas) */}
          <Icono
            size={20}
            className="shrink-0"
            style={color && !isActive ? { color } : undefined}
          />
          {!mini && (
            <>
              <span className="min-w-0 flex-1 truncate">{nombre}</span>
              {/* Detalle: flechita que se asoma al pasar o en el activo */}
              <ChevronRight
                size={16}
                className={
                  "shrink-0 transition-all duration-200 " +
                  (isActive
                    ? "opacity-100"
                    : "opacity-40 group-hover:translate-x-0.5 group-hover:opacity-100")
                }
              />
            </>
          )}
        </>
      )}
    </NavLink>
  );
}
