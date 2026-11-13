import { useId, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

// Desplegable nativo con el mismo estilo que Input.
//   <Select label="Área" opciones={["RRHH", "Tesorería", "Obras"]} />
//   <Select label="Estado" opciones={[{ valor: "1", texto: "Activo" }]} />

type Opcion = string | { valor: string; texto: string };

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  opciones: Opcion[];
  placeholder?: string;
  error?: string;
}

export function Select({
  label,
  opciones,
  placeholder = "Seleccioná una opción",
  error,
  id,
  required,
  className = "",
  defaultValue = "",
  ...props
}: SelectProps) {
  const idAuto = useId();
  const selectId = id ?? idAuto;

  return (
    <div className={"flex flex-col gap-1.5 " + className}>
      <label htmlFor={selectId} className="text-sm font-medium text-slate-800">
        {label}
        {required && <span className="ml-0.5 text-red-600">*</span>}
      </label>
      <div className="relative">
        <select
          id={selectId}
          required={required}
          defaultValue={props.value === undefined ? defaultValue : undefined}
          aria-invalid={error ? true : undefined}
          className={
            "h-10 w-full appearance-none rounded-lg border bg-white pl-3 pr-9 text-sm text-slate-900 outline-none transition-colors focus:ring-2 disabled:bg-slate-100 " +
            (error
              ? "border-red-500 focus:ring-red-200"
              : "border-slate-300 focus:border-[#0B2454] focus:ring-[#45B5DB]/30")
          }
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {opciones.map((o) => {
            const { valor, texto } =
              typeof o === "string" ? { valor: o, texto: o } : o;
            return (
              <option key={valor} value={valor}>
                {texto}
              </option>
            );
          })}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
        />
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
