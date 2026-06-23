import {
  FaUsers,
  FaChartLine,
  FaCloudSun,
  FaBuilding,
  FaComment,
  FaCircleQuestion,
  FaEnvelope,
} from "react-icons/fa6";

import heroBg from "../img/oficina.jpeg";

export default function Hero() {
  const items = [
    { icon: FaUsers, text: "Nosotros" },
    { icon: FaChartLine, text: "Análisis" },
    { icon: FaCloudSun, text: "Clima" },
    { icon: FaBuilding, text: "Clientes" },
    { icon: FaComment, text: "Testimonios" },
    { icon: FaCircleQuestion, text: "FAQ" },
    { icon: FaEnvelope, text: "Contacto" },
  ];

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-green-700/70" />

        {/* Contenido */}
        <div className="relative z-10 max-w-3xl px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ClimLab
          </h1>

          <p className="text-lg md:text-2xl mb-8 leading-relaxed">
            Plataforma especializada en análisis,
            monitoreo y visualización de datos climáticos.
          </p>

          <button className="bg-green-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-full font-semibold shadow-xl">
            Conocer más
          </button>
        </div>
      </section>

      {/* Menú flotante */}
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

      {/* Tarjetas */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: FaChartLine,
              title: "Análisis",
              text: "Información institucional y análisis de datos climáticos.",
            },
            {
              icon: FaBuilding,
              title: "Monitoreo",
              text: "Seguimiento y medición de variables ambientales.",
            },
            {
              icon: FaCloudSun,
              title: "Clima",
              text: "Estadísticas y reportes climáticos modernos.",
            },
          ].map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-sky-500 to-green-500" />

                <div className="p-10 text-center">
                  <Icon className="text-5xl text-sky-500 mx-auto mb-5" />

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
      </section>
    </>
  );
}