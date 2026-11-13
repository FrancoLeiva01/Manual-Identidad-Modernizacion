import { useMemo, useState, type ChangeEvent } from "react";
import { Check, Copy, Download, FileUp, ShieldCheck } from "lucide-react";

// Conversor CSV / Excel → JSON que corre 100% en el navegador.
// Acepta lo que se pega directo desde Excel (separado por tabs) o un CSV con , o ;

const EJEMPLO = `Barrio\tZona\tManzanas\tTiene CIC
Centro\tNorte\t120\ttrue
Villa Cubas\tEste\t85\tfalse
Parque América\tSur\t64\ttrue`;

function detectarSeparador(texto: string) {
  const primera = texto.split(/\r?\n/, 1)[0] ?? "";
  if (primera.includes("\t")) return "\t";
  const pc = (primera.match(/;/g) ?? []).length;
  const c = (primera.match(/,/g) ?? []).length;
  return pc > c ? ";" : ",";
}

// Parser chico que respeta comillas ("Pérez, Juana" queda en una sola celda)
function parsear(texto: string, sep: string) {
  const filas: string[][] = [];
  let fila: string[] = [];
  let campo = "";
  let comillas = false;

  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (comillas) {
      if (c === '"') {
        if (texto[i + 1] === '"') {
          campo += '"';
          i++;
        } else comillas = false;
      } else campo += c;
    } else if (c === '"' && campo === "") comillas = true;
    else if (c === sep) {
      fila.push(campo);
      campo = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && texto[i + 1] === "\n") i++;
      fila.push(campo);
      filas.push(fila);
      fila = [];
      campo = "";
    } else campo += c;
  }
  if (campo !== "" || fila.length) {
    fila.push(campo);
    filas.push(fila);
  }
  return filas.filter((f) => f.some((v) => v.trim() !== ""));
}

// "Apellido y Nombre" → "apellidoYNombre"
function aCamel(s: string) {
  const palabras = s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
  return palabras
    .map((p, i) => (i === 0 ? p.toLowerCase() : p[0].toUpperCase() + p.slice(1).toLowerCase()))
    .join("");
}

function convertirValor(v: string, sep: string): unknown {
  const t = v.trim();
  if (t === "") return null;
  if (/^(true|false)$/i.test(t)) return t.toLowerCase() === "true";
  // Sin ceros adelante: un legajo "00123" o un DNI con 0 inicial quedan como texto
  if (/^-?(0|[1-9]\d*)(\.\d+)?$/.test(t)) return Number(t);
  if (sep !== "," && /^-?(0|[1-9]\d*),\d+$/.test(t)) return Number(t.replace(",", "."));
  return t;
}

function Opcion({ checked, onChange, children }: { checked: boolean; onChange: (v: boolean) => void; children: string }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 accent-cyan-600"
      />
      {children}
    </label>
  );
}

export function ConversorJson() {
  const [entrada, setEntrada] = useState("");
  const [tipos, setTipos] = useState(true);
  const [camel, setCamel] = useState(true);
  const [copiado, setCopiado] = useState(false);

  const resultado = useMemo(() => {
    if (!entrada.trim()) return null;
    const sep = detectarSeparador(entrada);
    const [encabezado, ...filas] = parsear(entrada, sep);
    if (!encabezado) return null;
    const claves = encabezado.map((h, i) => {
      const limpio = h.trim();
      if (!limpio) return `columna${i + 1}`;
      return camel ? aCamel(limpio) || `columna${i + 1}` : limpio;
    });
    const desparejas = filas.filter((f) => f.length !== claves.length).length;
    const datos = filas.map((f) =>
      Object.fromEntries(
        claves.map((k, i) => [k, tipos ? convertirValor(f[i] ?? "", sep) : (f[i] ?? "").trim()]),
      ),
    );
    return {
      json: JSON.stringify(datos, null, 2),
      filas: datos.length,
      columnas: claves.length,
      separador: sep === "\t" ? "tab (Excel)" : `"${sep}"`,
      desparejas,
    };
  }, [entrada, tipos, camel]);

  async function leerArchivo(e: ChangeEvent<HTMLInputElement>) {
    const archivo = e.target.files?.[0];
    if (archivo) setEntrada(await archivo.text());
    e.target.value = "";
  }

  async function copiar() {
    if (!resultado) return;
    try {
      await navigator.clipboard.writeText(resultado.json);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1500);
    } catch {
      // sin permiso de portapapeles
    }
  }

  function descargarJson() {
    if (!resultado) return;
    const url = URL.createObjectURL(new Blob([resultado.json], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "datos.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="rounded-xl border border-white/30 bg-white p-4 shadow-md sm:p-6">
      <p className="mb-4 flex items-start gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
        <ShieldCheck size={18} className="mt-px shrink-0" />
        Todo se procesa en tu navegador: lo que pegues acá no se manda a ningún servidor.
      </p>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* ENTRADA */}
        <div className="flex min-w-0 flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-bold text-slate-900">Pegá desde Excel o un CSV</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setEntrada(EJEMPLO)}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Cargar ejemplo
              </button>
              <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100">
                <FileUp size={13} /> Abrir .csv
                <input type="file" accept=".csv,.tsv,.txt" onChange={leerArchivo} className="hidden" />
              </label>
            </div>
          </div>
          <textarea
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            placeholder={"Nombre\tÁrea\tLegajo\nPérez, Juana\tRRHH\t1001"}
            spellCheck={false}
            className="h-72 w-full resize-y rounded-lg border border-slate-200 bg-slate-50 p-3 font-mono text-xs text-slate-800 outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20"
          />
          <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-5">
            <Opcion checked={tipos} onChange={setTipos}>Detectar números y true/false</Opcion>
            <Opcion checked={camel} onChange={setCamel}>Claves sin tildes ni espacios</Opcion>
          </div>
        </div>

        {/* SALIDA */}
        <div className="flex min-w-0 flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-bold text-slate-900">JSON</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={copiar}
                disabled={!resultado}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                {copiado ? <Check size={13} /> : <Copy size={13} />} {copiado ? "Copiado" : "Copiar"}
              </button>
              <button
                type="button"
                onClick={descargarJson}
                disabled={!resultado}
                className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white hover:bg-orange-600 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                <Download size={13} /> Descargar
              </button>
            </div>
          </div>
          <pre className="m-0 h-72 overflow-auto rounded-lg bg-[#14171f] p-3 text-xs text-gray-200">
            <code>{resultado?.json ?? "// Acá aparece el resultado"}</code>
          </pre>
          {resultado && (
            <p className="text-xs text-slate-500">
              {resultado.filas} filas · {resultado.columnas} columnas · separador {resultado.separador}
              {resultado.desparejas > 0 && (
                <span className="font-semibold text-amber-700">
                  {" "}· {resultado.desparejas} fila(s) con distinta cantidad de columnas
                </span>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
