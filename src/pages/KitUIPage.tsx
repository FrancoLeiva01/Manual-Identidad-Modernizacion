import { useState, type ReactNode } from "react";
import { Download, Plus, Save, Search, Trash2 } from "lucide-react";
import { CodeBlockColapsable } from "../components/proyectoPage/codeBlockColapsable";
import { SeccionLayout, Subtitulo } from "../components/seccionLayout";
import { crearZip, descargar } from "../lib/zip";
import {
  Alerta,
  Badge,
  Boton,
  Card,
  Checkbox,
  EstadoVacio,
  Input,
  Modal,
  Select,
  Spinner,
  Tabla,
  Textarea,
} from "../ui";

// El código que se muestra (y se descarga) es el de los archivos reales de src/ui,
// así nunca queda desactualizado respecto de lo que se ve en la vista previa.
const fuentes = import.meta.glob("../ui/*.{ts,tsx}", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const codigo = (archivo: string) => fuentes[`../ui/${archivo}`] ?? "";

function descargarKit() {
  const archivos = Object.entries(fuentes).map(([ruta, contenido]) => ({
    nombre: ruta.replace("../", ""),
    contenido,
  }));
  descargar(crearZip(archivos), "kit-ui-modernizacion.zip");
}

// Panel blanco donde se renderiza cada componente tal cual se ve en un sistema
function VistaPrevia({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-white/30 bg-white p-5 shadow-md sm:p-8">
      {children}
    </div>
  );
}

function Descripcion({ children }: { children: ReactNode }) {
  return (
    <p className="text-slate-200 leading-relaxed text-base sm:text-xl my-1">
      {children}
    </p>
  );
}

const agentes = [
  { id: 1, nombre: "Pérez, Juana", area: "Tesorería", estado: "Activo" },
  { id: 2, nombre: "Gómez, Raúl", area: "Obras Públicas", estado: "Licencia" },
  { id: 3, nombre: "Díaz, Marta", area: "RRHH", estado: "Baja" },
];

const tonoEstado = { Activo: "exito", Licencia: "alerta", Baja: "peligro" } as const;

export function KitUI() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [alertaVisible, setAlertaVisible] = useState(true);

  return (
    <SeccionLayout
      titulo="Kit UI"
      descripcion="Botones, formularios y piezas chicas que se usan en todos los sistemas. Bajate la carpeta, pegala en tu proyecto e importá lo que necesites."
    >
      {/* CÓMO USARLO */}
      <div className="rounded-xl border border-white/30 bg-panel-foto p-5 backdrop-blur-md sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <ol className="m-0 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-texto sm:text-base">
            <li>Descargá el zip y copiá la carpeta <code className="font-semibold">ui</code> dentro de <code className="font-semibold">src/</code> de tu proyecto.</li>
            <li>
              Asegurate de tener Tailwind CSS v4 y{" "}
              <code className="font-semibold">pnpm add lucide-react</code>.
            </li>
            <li>
              Importá desde la carpeta:{" "}
              <code className="font-semibold">
                import {"{ Boton, Input }"} from "./ui";
              </code>
            </li>
          </ol>
          <button
            type="button"
            onClick={descargarKit}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-marca px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            <Download size={18} /> Descargar carpeta ui
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* ================= BOTONES ================= */}
        <Subtitulo>Botones</Subtitulo>
        <Descripcion>
          Cuatro variantes: primario para la acción principal (una por
          pantalla), secundario para el resto, peligro para borrar y fantasma
          para acciones discretas.
        </Descripcion>
        <VistaPrevia>
          <div className="flex flex-wrap items-center gap-3">
            <Boton icono={<Save size={16} />}>Guardar</Boton>
            <Boton variante="secundario" icono={<Plus size={16} />}>
              Nuevo
            </Boton>
            <Boton variante="peligro" icono={<Trash2 size={16} />}>
              Eliminar
            </Boton>
            <Boton variante="fantasma">Cancelar</Boton>
            <Boton cargando>Guardando…</Boton>
            <Boton tamano="sm" variante="secundario">
              Chico
            </Boton>
            <Boton tamano="lg">Grande</Boton>
          </div>
        </VistaPrevia>
        <CodeBlockColapsable codigo={codigo("Boton.tsx")} lenguaje="ui/Boton.tsx" />

        {/* ================= FORMULARIOS ================= */}
        <Subtitulo>Formularios</Subtitulo>
        <Descripcion>
          Input, Select, Textarea y Checkbox. Todos traen su etiqueta, marcan
          los obligatorios con asterisco y muestran el error abajo en rojo.
        </Descripcion>
        <VistaPrevia>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-4 sm:grid-cols-2"
          >
            <Input label="Apellido y nombre" placeholder="Pérez, Juana" required />
            <Input label="DNI" placeholder="Sin puntos" ayuda="Solo números, sin puntos." />
            <Select label="Área" opciones={["RRHH", "Tesorería", "Obras Públicas"]} />
            <Input label="Email" type="email" defaultValue="juana@" error="El email no es válido." />
            <Textarea label="Observaciones" className="sm:col-span-2" rows={3} />
            <Checkbox label="Confirmo que los datos son correctos" className="sm:col-span-2" />
            <div className="flex justify-end gap-2 sm:col-span-2">
              <Boton variante="secundario">Cancelar</Boton>
              <Boton type="submit">Guardar agente</Boton>
            </div>
          </form>
        </VistaPrevia>
        <CodeBlockColapsable codigo={codigo("Input.tsx")} lenguaje="ui/Input.tsx" />
        <CodeBlockColapsable codigo={codigo("Select.tsx")} lenguaje="ui/Select.tsx" />
        <CodeBlockColapsable codigo={codigo("Textarea.tsx")} lenguaje="ui/Textarea.tsx" />
        <CodeBlockColapsable codigo={codigo("Checkbox.tsx")} lenguaje="ui/Checkbox.tsx" />

        {/* ================= BADGES ================= */}
        <Subtitulo>Badges</Subtitulo>
        <Descripcion>
          Para estados y categorías. Siempre con texto: el color ayuda, pero no
          alcanza solo.
        </Descripcion>
        <VistaPrevia>
          <div className="flex flex-wrap gap-2">
            <Badge>Borrador</Badge>
            <Badge tono="info">En revisión</Badge>
            <Badge tono="exito" punto>Activo</Badge>
            <Badge tono="alerta" punto>Licencia</Badge>
            <Badge tono="peligro" punto>Baja</Badge>
          </div>
        </VistaPrevia>
        <CodeBlockColapsable codigo={codigo("Badge.tsx")} lenguaje="ui/Badge.tsx" />

        {/* ================= ALERTAS ================= */}
        <Subtitulo>Alertas</Subtitulo>
        <Descripcion>
          Mensajes dentro de la página: avisos, confirmaciones y errores. Se
          pueden cerrar si les pasás onCerrar.
        </Descripcion>
        <VistaPrevia>
          <div className="flex flex-col gap-3">
            <Alerta tipo="info">El sistema se va a actualizar hoy a las 20 h.</Alerta>
            <Alerta tipo="exito" titulo="Agente guardado">
              Los cambios ya se ven en el listado.
            </Alerta>
            <Alerta tipo="alerta" titulo="Faltan datos">
              Completá el CUIL antes de enviar.
            </Alerta>
            {alertaVisible ? (
              <Alerta tipo="error" titulo="No se pudo guardar" onCerrar={() => setAlertaVisible(false)}>
                Revisá tu conexión e intentá de nuevo.
              </Alerta>
            ) : (
              <Boton tamano="sm" variante="secundario" onClick={() => setAlertaVisible(true)}>
                Volver a mostrar el error
              </Boton>
            )}
          </div>
        </VistaPrevia>
        <CodeBlockColapsable codigo={codigo("Alerta.tsx")} lenguaje="ui/Alerta.tsx" />

        {/* ================= CARD + TABLA ================= */}
        <Subtitulo>Card y tabla</Subtitulo>
        <Descripcion>
          La combinación más común de los sistemas internos: una card con
          título, acciones arriba y un listado adentro.
        </Descripcion>
        <VistaPrevia>
          <Card
            titulo="Agentes"
            descripcion="3 registros"
            acciones={
              <Boton tamano="sm" icono={<Plus size={14} />}>
                Nuevo agente
              </Boton>
            }
          >
            <Tabla
              columnas={[
                { titulo: "Apellido y nombre", celda: (a) => a.nombre },
                { titulo: "Área", celda: (a) => a.area },
                {
                  titulo: "Estado",
                  celda: (a) => (
                    <Badge tono={tonoEstado[a.estado as keyof typeof tonoEstado]} punto>
                      {a.estado}
                    </Badge>
                  ),
                },
                {
                  titulo: "Acciones",
                  alinear: "derecha",
                  celda: () => (
                    <Boton tamano="sm" variante="fantasma">
                      Ver
                    </Boton>
                  ),
                },
              ]}
              filas={agentes}
              claveFila={(a) => a.id}
            />
          </Card>
        </VistaPrevia>
        <CodeBlockColapsable codigo={codigo("Card.tsx")} lenguaje="ui/Card.tsx" />
        <CodeBlockColapsable codigo={codigo("Tabla.tsx")} lenguaje="ui/Tabla.tsx" />

        {/* ================= MODAL ================= */}
        <Subtitulo>Modal</Subtitulo>
        <Descripcion>
          Para confirmar acciones que no tienen vuelta atrás. Se cierra con
          Esc, con la X o tocando afuera.
        </Descripcion>
        <VistaPrevia>
          <Boton variante="peligro" icono={<Trash2 size={16} />} onClick={() => setModalAbierto(true)}>
            Eliminar agente
          </Boton>
          <Modal
            abierto={modalAbierto}
            onCerrar={() => setModalAbierto(false)}
            titulo="¿Eliminar a Pérez, Juana?"
            acciones={
              <>
                <Boton variante="secundario" onClick={() => setModalAbierto(false)}>
                  Cancelar
                </Boton>
                <Boton variante="peligro" onClick={() => setModalAbierto(false)}>
                  Sí, eliminar
                </Boton>
              </>
            }
          >
            Esta acción no se puede deshacer. El agente deja de aparecer en
            los listados.
          </Modal>
        </VistaPrevia>
        <CodeBlockColapsable codigo={codigo("Modal.tsx")} lenguaje="ui/Modal.tsx" />

        {/* ================= ESTADOS ================= */}
        <Subtitulo>Vacío y cargando</Subtitulo>
        <Descripcion>
          Nunca dejes una pantalla en blanco: si no hay datos, decilo; si
          están cargando, también.
        </Descripcion>
        <VistaPrevia>
          <div className="grid gap-4 md:grid-cols-2">
            <EstadoVacio
              titulo="No encontramos agentes"
              descripcion="Probá con otro apellido o sacá los filtros."
              icono={<Search size={26} />}
              accion={<Boton variante="secundario">Limpiar filtros</Boton>}
            />
            <div className="flex items-center justify-center rounded-xl border border-slate-200 p-6">
              <Spinner texto="Buscando agentes…" />
            </div>
          </div>
        </VistaPrevia>
        <CodeBlockColapsable codigo={codigo("EstadoVacio.tsx")} lenguaje="ui/EstadoVacio.tsx" />
        <CodeBlockColapsable codigo={codigo("Spinner.tsx")} lenguaje="ui/Spinner.tsx" />
      </div>
    </SeccionLayout>
  );
}
