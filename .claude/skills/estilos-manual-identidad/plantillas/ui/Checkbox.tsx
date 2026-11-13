import { useId, type InputHTMLAttributes } from "react";

// Casilla con texto clickeable.
//   <Checkbox label="Acepto los términos" />

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export function Checkbox({ label, id, className = "", ...props }: CheckboxProps) {
  const idAuto = useId();
  const checkId = id ?? idAuto;

  return (
    <label
      htmlFor={checkId}
      className={"inline-flex items-center gap-2 text-sm text-slate-800 cursor-pointer " + className}
    >
      <input
        id={checkId}
        type="checkbox"
        className="h-4 w-4 rounded border-slate-300 accent-[#0B2454] cursor-pointer"
        {...props}
      />
      {label}
    </label>
  );
}
