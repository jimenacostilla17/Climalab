import {
  FaUsers,
  FaChartLine,
  FaBuilding,
} from "react-icons/fa6";

export default function Services() {
  const services = [
    {
      icon: FaChartLine,
      title: "Diagnóstico Organizacional",
      text: "Evaluamos el estado actual de la organización.",
    },
    {
      icon: FaUsers,
      title: "Clima y Cultura",
      text: "Medimos satisfacción y compromiso.",
    },
    {
      icon: FaBuilding,
      title: "Consultoría Estratégica",
      text: "Diseñamos planes de acción efectivos.",
    },
  ];

  return (
    <section className="bg-slate-50 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-[#08224C]">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition"
              >
                <Icon className="text-5xl text-[#0499DA]" />

                <h3 className="mt-6 text-2xl font-bold text-[#05579F]">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}