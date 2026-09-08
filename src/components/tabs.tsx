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
    <div className="flex items-center gap-2 border-b border-gray-200 dark:border-slate-700">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={
            "px-4 py-2 -mb-px text-lg font-bold rounded-t-md border transition-colors uppercase " +
            (activo === t.id
              ? "border-cyan-500 text-cyan-600 dark:text-cyan-400 bg-white dark:bg-slate-800"
              : "border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200")
          }
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
