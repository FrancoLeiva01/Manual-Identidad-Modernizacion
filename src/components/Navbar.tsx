import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [oscuro, setOscuro] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", oscuro);
  }, [oscuro]);

  return (
    <div className="fixed top-4 right-4 z-30 flex items-center gap-1 bg-black dark:bg-white rounded-full px-2 py-2 shadow-lg">
      <Link
        to="/"
        title="Inicio"
        className="p-2 rounded-full text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
      >
        <Home size={18} />
      </Link>
      <button
        onClick={() => setOscuro((v) => !v)}
        title={oscuro ? "Modo claro" : "Modo oscuro"}
        className="p-2 rounded-full text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
      >
        {oscuro ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}