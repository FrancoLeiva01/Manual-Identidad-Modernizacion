interface Tab<T extends string> {
  id: T;
  label: string;
}

interface TabsProps<T extends string> {
  tabs: Tab<T>[];
  activo: T;
  onChange: (id: T) => void;
}

// Barra de pestañas genérica. Sirve para General/Front/Back
// o para cualquier otro set de pestañas que necesites después.
export function Tabs<T extends string>({
  tabs,
  activo,
  onChange,
}: TabsProps<T>) {
  return (
    // Va encima de la foto de fondo: las pestañas inactivas usan texto claro
    <div className="flex items-center gap-2 border-b border-white/20">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={
            "px-4 py-2 -mb-px text-lg font-bold rounded-t-md border transition-colors uppercase " +
            (activo === t.id
              ? "border-acento text-acento bg-superficie"
              : "border-transparent text-white/70 hover:text-white")
          }
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
