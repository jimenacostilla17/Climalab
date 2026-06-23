import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50">
      <div className="bg-white rounded-full shadow-xl px-8 py-4">

        <div className="flex items-center justify-between">

          <h1 className="text-2xl font-bold">
  ClimLab
</h1>

          <ul className="flex gap-8 font-semibold">

            <li>
              <Link to="/">Inicio</Link>
            </li>

            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>

            <li>
              <Link to="/servicios">Servicios</Link>
            </li>

            <li>
              <Link to="/clientes">Clientes</Link>
            </li>

            <li>
              <Link to="/testimonios">Testimonios</Link>
            </li>

            <li>
              <Link to="/faq">FAQ</Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}