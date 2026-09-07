import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";
import { ProyectoPage } from "./pages/proyectosPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100 dark:bg-slate-900">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expediente/:id" element={<ProyectoPage />} />
          </Routes>
        </main>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;