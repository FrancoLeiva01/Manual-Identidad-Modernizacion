import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";
import { ProyectoPage } from "./pages/proyectosPage";
import { Footers } from "./pages/Footers";
import { Navbars } from "./pages/Navbars";
import { Homes } from "./pages/Homes";
import { Sidebars } from "./pages/Sidebars";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-fondo">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expediente/:id" element={<ProyectoPage />} />
            <Route path="/footers" element={<Footers />} />
            <Route path="/navbars" element={<Navbars />} />
            <Route path="/homes" element={<Homes />} />
            <Route path="/sidebars" element={<Sidebars />} />
          </Routes>
        </main>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
