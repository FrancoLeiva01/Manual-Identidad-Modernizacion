import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";
import { ProyectoPage } from "./pages/proyectosPage";
import { Footers } from "./pages/FootersPage";
import { Navbars } from "./pages/NavbarsPage";
import { Homes } from "./pages/HomesPage";
import { Sidebars } from "./pages/SidebarsPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { Buscador } from "./components/Buscador";
import { KitUI } from "./pages/KitUIPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen bg-fondo">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <Buscador />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expediente/:id" element={<ProyectoPage />} />
            <Route path="/footers" element={<Footers />} />
            <Route path="/navbars" element={<Navbars />} />
            <Route path="/homes" element={<Homes />} />
            <Route path="/sidebars" element={<Sidebars />} />
            <Route path="/ui" element={<KitUI />} />
          </Routes>
        </main>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
