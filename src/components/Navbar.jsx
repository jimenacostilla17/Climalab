import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";

import logo from "../img/logo.jpeg";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor =
    location.pathname !== "/"
      ? "text-[#08224C]"
      : scroll
      ? "text-[#08224C]"
      : "text-white";

  return (
    <nav
      className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${
        location.pathname !== "/"
          ? "bg-white shadow-lg py-3"
          : scroll
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="ClimaLab"
            className="h-16"
          />
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-8">
          <Link
            to="/"
            className={`font-medium transition hover:text-[#289E2B] ${textColor}`}
          >
            Inicio
          </Link>

          <Link
            to="/nosotros"
            className={`font-medium transition hover:text-[#289E2B] ${textColor}`}
          >
            Nosotros
          </Link>

          <Link
            to="/servicios"
            className={`font-medium transition hover:text-[#289E2B] ${textColor}`}
          >
            Servicios
          </Link>

          <Link
            to="/clientes"
            className={`font-medium transition hover:text-[#289E2B] ${textColor}`}
          >
            Clientes
          </Link>
        </div>

        {/* Botón */}
        <button className="bg-[#289E2B] hover:bg-green-700 text-white px-6 py-3 rounded-full transition">
          Contacto
        </button>

      </div>
    </nav>
  );
}