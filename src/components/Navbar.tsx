import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

// Recuerda el modo elegido; la primera vez usa la preferencia del sistema
function modoInicial() {
  try {
    const guardado = localStorage.getItem("tema");
    if (guardado) return guardado === "oscuro";
  } catch {
    // localStorage puede no estar disponible (modo incógnito, etc.)
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function Navbar() {
  const [oscuro, setOscuro] = useState(modoInicial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", oscuro);
    try {
      localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
    } catch {
      // sin persistencia, no pasa nada
    }
  }, [oscuro]);

  return (
    <div className="fixed top-4 right-4 z-30 flex items-center gap-1 bg-slate-900/80 rounded-full px-2 py-2 shadow-lg">
      {/* <Link
        to="/"
        title="Inicio"
        className="p-2 rounded-full text-white hover:bg-slate-600 transition-colors"
      >
        <Home size={18} />
      </Link> */}
      <button
        onClick={() => setOscuro((v) => !v)}
        title={oscuro ? "Modo claro" : "Modo oscuro"}
        className="p-2 rounded-full text-white hover:bg-slate-600 transition-colors cursor-pointer"
      >
        {oscuro ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}