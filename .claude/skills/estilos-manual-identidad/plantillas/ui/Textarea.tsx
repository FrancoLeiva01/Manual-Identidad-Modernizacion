import { useId, type TextareaHTMLAttributes } from "react";

// Texto largo (observaciones, motivos, descripciones).
//   <Textarea label="Observaciones" rows={4} />

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  ayuda?: string;
  error?: string;
}

export function Textarea({
  label,
  ayuda,
  error,
  id,
  required,
  rows = 4,
  className = "",
  ...props
}: TextareaProps) {
  const idAuto = useId();
  const textareaId = id ?? idAuto;

  return (
    <div className={"flex flex-col gap-1.5 " + className}>
      <label htmlFor={textareaId} className="text-sm font-medium text-slate-800">
        {label}
        {required && <span className="ml-0.5 text-red-600">*</span>}
      </label>
      <textarea
        id={textareaId}
        rows={rows}
        required={required}
        aria-invalid={error ? true : undefined}
        className={
          "resize-y rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:ring-2 " +
          (error
            ? "border-red-500 focus:ring-red-200"
            : "border-slate-300 focus:border-[#0B2454] focus:ring-[#45B5DB]/30")
        }
        {...props}
      />
      {(error || ayuda) && (
        <p className={"text-xs " + (error ? "text-red-600" : "text-slate-500")}>
          {error ?? ayuda}
        </p>
      )}
    </div>
  );
}
