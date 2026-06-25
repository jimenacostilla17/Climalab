import {
  FaUsers,
  FaChartLine,
  FaCloudSun,
  FaBuilding,
  FaComment,
  FaCircleQuestion,
  FaEnvelope,
  FaEarthAmericas,
} from "react-icons/fa6";

import oficina from "../img/oficina.jpeg";

export default function Home() {
  const menuItems = [
    { icon: <FaUsers />, text: "Nosotros" },
    { icon: <FaChartLine />, text: "Análisis" },
    { icon: <FaCloudSun />, text: "Clima" },
    { icon: <FaBuilding />, text: "Clientes" },
    { icon: <FaComment />, text: "Testimonios" },
    { icon: <FaCircleQuestion />, text: "FAQ" },
    { icon: <FaEnvelope />, text: "Contacto" },
  ];

  const cards = [
    {
      icon: <FaChartLine />,
      title: "Análisis",
      text: "Información institucional y análisis de datos climáticos.",
    },
    {
      icon: <FaEarthAmericas />,
      title: "Monitoreo",
      text: "Seguimiento y medición de variables ambientales.",
    },
    {
      icon: <FaCloudSun />,
      title: "Clima",
      text: "Estadísticas y reportes climáticos modernos.",
    },
  ];

  return (
    <div className="bg-white overflow-x-hidden">

      {/* HERO */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-center relative"
        style={{
          backgroundImage: `url(${oficina})`,
        }}
      >
        <div className="absolute inset-0 bg-[#289E2B]/70"></div>

        <div className="relative z-10 max-w-3xl px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ClimaLab
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Plataforma especializada en análisis, monitoreo y
            visualización de datos climáticos.
          </p>

          <button className="bg-[#289E2B] hover:bg-[#05579F] transition px-8 py-3 rounded-full font-semibold">
            Conocer más
          </button>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
  <div>
    <h3 className="text-3xl font-bold">+15</h3>
    <p>Años</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">+500</h3>
    <p>Estaciones</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">+50</h3>
    <p>Empresas</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">100%</h3>
    <p>Cobertura</p>
  </div>
</div>
        </div>
      </section>

      {/* MENU SERVICIOS */}
      <section className="relative -mt-16 z-20">
        <div className="bg-white w-[90%] max-w-7xl mx-auto rounded-3xl shadow-xl p-8">
          <div className="flex flex-wrap justify-center gap-10">
            {menuItems.map((item, index) => (
              <div key={index} className="text-center w-28">
                <div className="w-20 h-20 bg-[#08224C] hover:bg-[#289E2B] transition rounded-full mx-auto flex items-center justify-center text-white text-3xl shadow-lg">
                  {item.icon}
                </div>

                <p className="mt-4 font-medium text-gray-800">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
            >
              <div className="h-2 bg-gradient-to-r from-[#0499DA] to-[#289E2B]" />

              <div className="p-10 text-center">
                <div className="text-5xl text-[#0499DA] flex justify-center mb-5">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#05579F] mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Onda inferior */}
<div className="absolute bottom-0 left-0 w-full">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="rgba(255,255,255,0.2)"
      d="M0,160L80,186.7C160,213,320,267,480,272C640,277,800,235,960,218.7C1120,203,1280,213,1360,218.7L1440,224L1440,320L0,320Z"
    />
    <path
      fill="rgba(255,255,255,0.45)"
      d="M0,224L80,218.7C160,213,320,203,480,181.3C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L0,320Z"
    />
    <path
      fill="#fff"
      d="M0,256L120,245.3C240,235,480,213,720,218.7C960,224,1200,256,1320,250.7L1440,245L1440,320L0,320Z"
    />
  </svg>
</div>
      </section>
    </div>
  );
}