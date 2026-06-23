import {
  FaUsers,
  FaChartLine,
  FaBuilding,
  FaComment,
  FaCircleQuestion,
  FaEnvelope,
  FaClipboardCheck,
} from "react-icons/fa6";

import heroBg from "../img/oficina.jpeg";

export default function Hero() {
  const items = [
    { icon: FaUsers, text: "Nosotros" },
    { icon: FaChartLine, text: "Diagnóstico" },
    { icon: FaComment, text: "Clima Laboral" },
    { icon: FaBuilding, text: "Empresas" },
    { icon: FaUsers, text: "Equipos" },
    { icon: FaCircleQuestion, text: "FAQ" },
    { icon: FaEnvelope, text: "Contacto" },
  ];

  const services = [
    {
      icon: FaChartLine,
      title: "Diagnóstico Organizacional",
      text: "Analizamos el estado actual de la organización mediante herramientas de medición y evaluación del clima laboral.",
    },
    {
      icon: FaUsers,
      title: "Clima y Cultura",
      text: "Identificamos fortalezas y oportunidades para mejorar el bienestar, compromiso y desempeño de los colaboradores.",
    },
    {
      icon: FaBuilding,
      title: "Consultoría Estratégica",
      text: "Diseñamos soluciones personalizadas alineadas a los objetivos y necesidades de cada organización.",
    },
  ];

  const process = [
    "Relevamiento y análisis",
    "Encuestas y diagnóstico",
    "Presentación de resultados",
    "Plan de acción y seguimiento",
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#08224C]/80"></div>

        <div className="relative z-10 max-w-4xl px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            ClimaLab
          </h1>

          <h2 className="text-2xl md:text-3xl text-green-300 mb-8">
            Consultora en Clima Organizacional
          </h2>

          <p className="text-lg md:text-2xl leading-relaxed mb-10">
            Transformamos el clima laboral en resultados.
            Ayudamos a organizaciones a comprender,
            medir y fortalecer la experiencia de sus colaboradores.
          </p>

          <button className="bg-green-600 hover:bg-green-700 transition-all duration-300 px-8 py-4 rounded-full font-semibold shadow-xl">
            Solicitar Diagnóstico
          </button>
        </div>
      </section>

      {/* MENU RAPIDO */}
      <section className="relative z-20 -mt-16 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex flex-wrap justify-center gap-8">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="w-28 text-center group cursor-pointer"
                >
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-[#08224C] border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 group-hover:bg-green-600 group-hover:-translate-y-2">
                    <Icon className="text-white text-3xl" />
                  </div>

                  <p className="font-medium text-gray-700">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Sobre Nosotros
          </span>

          <h2 className="text-4xl font-bold text-[#08224C] mt-4 mb-6">
            Impulsamos organizaciones más saludables y productivas
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            En ClimaLab acompañamos a empresas e instituciones en el
            desarrollo de ambientes laborales positivos, fomentando la
            participación, el compromiso y el crecimiento de las personas.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold uppercase tracking-widest">
              Servicios
            </span>

            <h2 className="text-4xl font-bold text-[#08224C] mt-4">
              Soluciones para potenciar tu organización
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
                >
                  <div className="h-2 bg-gradient-to-r from-[#05579F] to-green-500"></div>

                  <div className="p-10 text-center">
                    <Icon className="text-5xl text-[#05579F] mx-auto mb-5" />

                    <h3 className="text-2xl font-bold text-[#05579F] mb-4">
                      {card.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold uppercase tracking-widest">
              Metodología
            </span>

            <h2 className="text-4xl font-bold text-[#08224C] mt-4">
              Cómo trabajamos
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                  {index + 1}
                </div>

                <FaClipboardCheck className="text-[#05579F] text-4xl mx-auto mb-4" />

                <p className="font-semibold text-gray-700">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#08224C] py-24 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Más de 10 años acompañando organizaciones
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Ayudamos a empresas a fortalecer sus equipos,
            mejorar la comunicación interna y construir
            ambientes laborales que impulsen el crecimiento.
          </p>

          <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold transition-all duration-300">
            Contactar Ahora
          </button>
        </div>
      </section>
    </>
  );
}