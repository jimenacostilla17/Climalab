import { motion } from "framer-motion";

import grupal from "../img/grupal.jpg";
import persona1 from "../img/persona1.jpg";
import persona2 from "../img/persona2.jpg";
import persona3 from "../img/persona3.jpg";
import persona4 from "../img/persona4.jpg";
import persona5 from "../img/persona5.jpg";
import persona6 from "../img/persona6.jpg";

import {
  FaBullseye,
  FaEye,
  FaGem,
  FaUsers,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa6";

export default function Nosotros() {
  const equipo = [
    {
      nombre: "María González",
      puesto: "Directora General",
      foto: persona1,
      descripcion:
        "Lidera la estrategia organizacional y el desarrollo de talento.",
    },
    {
      nombre: "Juan Pérez",
      puesto: "Director de RRHH",
      foto: persona2,
      descripcion:
        "Especialista en gestión de personas y cultura organizacional.",
    },
    {
      nombre: "Lucía Torres",
      puesto: "Psicóloga Laboral",
      foto: persona3,
      descripcion:
        "Experta en selección de personal y evaluación de competencias.",
    },
    {
      nombre: "Santiago Ruiz",
      puesto: "Analista de Talento",
      foto: persona4,
      descripcion:
        "Transforma datos en estrategias para potenciar equipos.",
    },
    {
      nombre: "Valentina López",
      puesto: "Consultora Organizacional",
      foto: persona5,
      descripcion:
        "Acompaña procesos de cambio y desarrollo empresarial.",
    },
    {
      nombre: "Martín Díaz",
      puesto: "Especialista en Capacitación",
      foto: persona6,
      descripcion:
        "Diseña programas de formación para impulsar el crecimiento.",
    },
  ];

  const stats = [
    {
      numero: "+500",
      texto: "Procesos de selección",
    },
    {
      numero: "+120",
      texto: "Empresas asesoradas",
    },
    {
      numero: "95%",
      texto: "Satisfacción",
    },
    {
      numero: "10+",
      texto: "Años de experiencia",
    },
  ];

  return (
    <>
      {/* HERO */}

      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#08224C] via-[#05579F] to-[#0499DA]" />

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ECCF12]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#289E2B]/20 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-white border border-white/20">
              Consultora de Recursos Humanos
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white mt-8 leading-tight">
              Impulsamos el talento que hace crecer empresas
            </h1>

            <p className="text-white/80 text-xl mt-8 leading-relaxed">
              Conectamos organizaciones con personas, desarrollamos
              equipos de alto rendimiento y construimos culturas
              organizacionales sólidas.
            </p>
          </div>

          <motion.img
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={grupal}
            alt="Equipo"
            className="rounded-3xl shadow-2xl border border-white/20"
          />
        </div>
      </section>

      {/* ESTADISTICAS */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-[#F8FBFF] rounded-3xl p-8 text-center shadow-sm"
              >
                <h3 className="text-5xl font-bold text-[#0499DA]">
                  {item.numero}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.texto}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIENES SOMOS */}

      <section className="py-28 bg-[#F8FBFF]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="uppercase tracking-[4px] text-[#289E2B] font-semibold">
              Quiénes Somos
            </span>

            <h2 className="text-5xl font-bold mt-4 bg-gradient-to-r from-[#08224C] via-[#05579F] to-[#0499DA] bg-clip-text text-transparent">
              Personas trabajando para personas
            </h2>

            <p className="text-gray-600 text-lg mt-8 leading-relaxed">
              Somos una consultora especializada en Recursos Humanos
              enfocada en acompañar a empresas en la gestión,
              selección y desarrollo de talento.
            </p>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Nuestro objetivo es crear equipos sólidos,
              fortalecer culturas organizacionales y generar
              soluciones estratégicas para el crecimiento sostenible.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-md">
              <FaUsers className="text-4xl text-[#0499DA]" />
              <h3 className="font-bold text-xl mt-4">
                Talento
              </h3>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <FaHandshake className="text-4xl text-[#289E2B]" />
              <h3 className="font-bold text-xl mt-4">
                Confianza
              </h3>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <FaChartLine className="text-4xl text-[#ECCF12]" />
              <h3 className="font-bold text-xl mt-4">
                Crecimiento
              </h3>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <FaGem className="text-4xl text-[#05579F]" />
              <h3 className="font-bold text-xl mt-4">
                Excelencia
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPO */}

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="uppercase tracking-[4px] text-[#289E2B] font-semibold">
              Nuestro Equipo
            </span>

            <h2 className="text-5xl font-bold mt-4 text-[#08224C]">
              Profesionales comprometidos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            {equipo.map((persona, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
              >
                <div className="overflow-hidden">
                  <img
                    src={persona.foto}
                    alt={persona.nombre}
                    className="w-full h-80 object-cover hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#08224C]">
                    {persona.nombre}
                  </h3>

                  <p className="text-[#289E2B] font-semibold mt-2">
                    {persona.puesto}
                  </p>

                  <p className="text-gray-600 mt-4">
                    {persona.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}

      <section className="py-32 bg-[#F8FBFF]">
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-20">
      <span className="uppercase tracking-[4px] text-[#289E2B] font-semibold">
        Nuestra Esencia
      </span>

      <h2 className="text-5xl font-bold mt-4 bg-gradient-to-r from-[#08224C] via-[#05579F] to-[#0499DA] bg-clip-text text-transparent">
        Lo que nos guía
      </h2>
    </div>

    <div className="relative flex flex-col items-center">

      {/* Línea central */}
      <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#0499DA] via-[#289E2B] to-[#ECCF12]" />

      {[
        {
          icono: <FaBullseye />,
          titulo: "Misión",
          texto:
            "Ayudar a las organizaciones a potenciar su capital humano mediante soluciones innovadoras y estratégicas.",
          color: "#0499DA",
        },
        {
          icono: <FaEye />,
          titulo: "Visión",
          texto:
            "Ser referentes en consultoría de Recursos Humanos en Latinoamérica.",
          color: "#289E2B",
        },
        {
          icono: <FaGem />,
          titulo: "Valores",
          texto:
            "Compromiso, cercanía, innovación, profesionalismo y confianza.",
          color: "#ECCF12",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative flex justify-center mb-16 w-full"
        >
          {/* Círculo */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl shadow-xl z-10"
            style={{ backgroundColor: item.color }}
          >
            {item.icono}
          </div>

          {/* Card */}
          <div
            className="
              mt-10
              w-full
              max-w-2xl
              bg-white
              rounded-3xl
              p-10
              shadow-lg
              border-l-8
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
            "
            style={{
              borderColor: item.color,
            }}
          >
            <h3
              className="text-3xl font-bold mb-4"
              style={{
                color: item.color,
              }}
            >
              {item.titulo}
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              {item.texto}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}

      <section className="py-28 bg-[#08224C] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white leading-tight">
            Las empresas crecen cuando las personas encuentran
            el lugar adecuado para desarrollarse.
          </h2>

          <p className="text-white/70 mt-8 text-xl">
            Estamos listos para ayudarte a construir equipos
            más fuertes y organizaciones más exitosas.
          </p>

          <button className="mt-10 bg-[#ECCF12] hover:bg-[#E6A513] text-[#08224C] font-bold px-10 py-4 rounded-full transition-all hover:scale-105">
            Solicitar Consulta
          </button>
        </div>
      </section>
    </>
  );
}