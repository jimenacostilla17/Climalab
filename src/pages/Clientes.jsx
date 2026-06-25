import { motion } from "framer-motion";

import {
  FaBuilding,
  FaArrowRight,
  FaChartLine,
} from "react-icons/fa6";

export default function Clientes() {
  const casos = [
  {
    empresa: "Industria Manufacturera",
    titulo: "Selección de Personal Operativo",
    descripcion:
      "Realizamos procesos de reclutamiento y selección para incorporar operarios calificados, reduciendo tiempos de contratación y mejorando la retención del talento.",
  },
  {
    empresa: "Cadena Comercial",
    titulo: "Capacitación y Desarrollo",
    descripcion:
      "Diseñamos programas de formación para supervisores y equipos de ventas, fortaleciendo habilidades de liderazgo y atención al cliente.",
  },
  {
    empresa: "Empresa Tecnológica",
    titulo: "Atracción de Talento IT",
    descripcion:
      "Implementamos estrategias de búsqueda y evaluación de perfiles tecnológicos altamente demandados en el mercado laboral.",
  },
  {
    empresa: "Institución Educativa",
    titulo: "Evaluación de Competencias",
    descripcion:
      "Aplicamos herramientas de evaluación para identificar fortalezas y oportunidades de desarrollo en equipos docentes y administrativos.",
  },
  {
    empresa: "Clínica Privada",
    titulo: "Gestión del Clima Laboral",
    descripcion:
      "Desarrollamos encuestas y planes de acción para mejorar la satisfacción del personal y fortalecer la cultura organizacional.",
  },
  {
    empresa: "Organismo Público",
    titulo: "Desarrollo Organizacional",
    descripcion:
      "Acompañamos procesos de transformación interna mediante diagnósticos, capacitación y estrategias de gestión del cambio.",
  },
];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ECCF12] via-[#E6A513] to-[#d8940f]" />

        {/* Luces decorativas */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#E6A513]/20 rounded-full blur-3xl" />

        {/* Contenido */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[5px] text-[#ECCF12] font-semibold"
          >
            Clientes
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mt-6 leading-tight"
          >
            Casos de éxito que
            <br />
            impulsan decisiones
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto mt-8 text-xl text-white/80"
          >
            Empresas, instituciones y organismos confían en nosotros
  para encontrar talento, desarrollar equipos y construir
  organizaciones más sólidas y competitivas.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 bg-[#289E2B] hover:bg-green-700 px-8 py-4 rounded-full font-semibold transition"
          >
            Ver proyectos
          </motion.button>
        </div>

        {/* Icono decorativo */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
        >
          <FaChartLine
            className="text-white"
            size={300}
          />
        </motion.div>

        {/* Onda */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <svg
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#ffffff"
              d="M0,224L120,245.3C240,267,480,309,720,293.3C960,277,1200,203,1320,170.7L1440,139L1440,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* CASOS DE ÉXITO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#289E2B] font-semibold uppercase tracking-[4px]">
              Clientes
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#08224C] mt-4">
              Casos de éxito
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
              Acompañamos a empresas, organismos e instituciones
              brindando soluciones de monitoreo, análisis y gestión
              de información climática.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {casos.map((caso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="min-w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-[#ECCF12] to-[#E6A513] flex items-center justify-center text-white text-2xl">
  <FaBuilding />
</div>

                  <div>
                    <span className="text-sm font-semibold text-[#289E2B] uppercase">
                      {caso.empresa}
                    </span>

                    <h3 className="text-2xl font-bold text-[#08224C] mt-2">
                      {caso.titulo}
                    </h3>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {caso.descripcion}
                    </p>

                    <button className="mt-6 inline-flex items-center gap-2 bg-[#E6A513] hover:bg-[#ECCF12] text-[#ffffff] px-5 py-3 rounded-xl font-medium transition">
                      Ver caso de éxito

                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-[#289E2B] hover:bg-[#08224C] text-white px-8 py-4 rounded-full font-semibold transition">
              Ver todos los casos
            </button>
          </div>
        </div>
      </section>
    </>
  );
}