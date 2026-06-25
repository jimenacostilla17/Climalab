import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#08224C] text-white">
      {/* Parte superior */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              Clima<span className="text-[#ECCF12]">Lab</span>
            </h2>

            <p className="mt-5 text-white/70 leading-relaxed">
              Impulsamos el crecimiento de personas y organizaciones
              mediante soluciones estratégicas en Recursos Humanos.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Navegación
            </h3>

            <ul className="space-y-3 text-white/70">
              <li>
                <a
                  href="/"
                  className="hover:text-[#ECCF12] transition"
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="/nosotros"
                  className="hover:text-[#ECCF12] transition"
                >
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  href="/clientes"
                  className="hover:text-[#ECCF12] transition"
                >
                  Clientes
                </a>
              </li>

              <li>
                <a
                  href="/contacto"
                  className="hover:text-[#ECCF12] transition"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Servicios
            </h3>

            <ul className="space-y-3 text-white/70">
              <li>Selección de Personal</li>
              <li>Evaluaciones Laborales</li>
              <li>Capacitación</li>
              <li>Clima Organizacional</li>
              <li>Consultoría Estratégica</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contacto
            </h3>

            <div className="space-y-4 text-white/70">
              <div className="flex gap-3">
                <FiMapPin className="text-[#0499DA] mt-1" />
                <span>
                  San Miguel de Tucumán, Tucumán
                </span>
              </div>

              <div className="flex gap-3">
                <FiPhone className="text-[#0499DA] mt-1" />
                <span>
                  +54 381 000 0000
                </span>
              </div>

              <div className="flex gap-3">
                <FiMail className="text-[#0499DA] mt-1" />
                <span>
                  contacto@talentlab.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea */}
      <div className="border-t border-white/10" />

      {/* Parte inferior */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-5">
        <p className="text-white/60 text-sm text-center md:text-left">
          © {new Date().getFullYear()} TalentLab. Todos los derechos reservados.
        </p>

        <div className="flex gap-4">
          <a
            href="#"
            className="
              w-11
              h-11
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              hover:bg-[#0499DA]
              transition
            "
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="
              w-11
              h-11
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              hover:bg-[#0499DA]
              transition
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="
              w-11
              h-11
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              hover:bg-[#0499DA]
              transition
            "
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}