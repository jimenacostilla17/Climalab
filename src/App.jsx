import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Clientes from "./pages/Clientes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;