import { useId, type InputHTMLAttributes } from "react";

// Campo de texto con etiqueta, ayuda y mensaje de error.
//   <Input label="DNI" placeholder="Sin puntos" />
//   <Input label="Email" type="email" error="El email no es válido" />

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  ayuda?: string;
  error?: string;
}

export function Input({
  label,
  ayuda,
  error,
  id,
  required,
  className = "",
  ...props
}: InputProps) {
  const idAuto = useId();
  const inputId = id ?? idAuto;
  const mensajeId = inputId + "-mensaje";

  return (
    <div className={"flex flex-col gap-1.5 " + className}>
      <label htmlFor={inputId} className="text-sm font-medium text-slate-800">
        {label}
        {required && <span className="ml-0.5 text-red-600">*</span>}
      </label>
      <input
        id={inputId}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || ayuda ? mensajeId : undefined}
        className={
          "h-10 rounded-lg border bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:ring-2 disabled:bg-slate-100 disabled:text-slate-500 " +
          (error
            ? "border-red-500 focus:ring-red-200"
            : "border-slate-300 focus:border-[#0B2454] focus:ring-[#45B5DB]/30")
        }
        {...props}
      />
      {(error || ayuda) && (
        <p
          id={mensajeId}
          className={"text-xs " + (error ? "text-red-600" : "text-slate-500")}
        >
          {error ?? ayuda}
        </p>
      )}
    </div>
  );
}
