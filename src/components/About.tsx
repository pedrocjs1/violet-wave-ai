import { Target, Zap, Puzzle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovación",
      description: "Tecnología de punta aplicada a problemas reales.",
    },
    {
      icon: Target,
      title: "Eficiencia",
      description: "Automatizaciones que se traducen en ROI.",
    },
    {
      icon: Puzzle,
      title: "Personalización",
      description: "Soluciones adaptadas a tu negocio.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-dark-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Nuestra misión: hacerte ganar tiempo con automatización inteligente.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          <p className="text-lg text-text-secondary leading-relaxed">
            En Violet Wave transformamos procesos clave mediante soluciones de
            automatización con IA. Nuestro foco es que vos{" "}
            <span className="text-white font-semibold">ahorres tiempo</span>,{" "}
            <span className="text-white font-semibold">reduzcas costos</span> y{" "}
            <span className="text-white font-semibold">escales</span> sin sumar
            tareas repetitivas.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            Diseñamos, integramos y optimizamos sistemas a medida para que tu
            equipo se concentre en lo que más valor genera. Medimos resultados y
            mejoramos continuamente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-accent-navy/50 backdrop-blur-sm rounded-2xl p-8 border border-violet-purple/10 hover:border-violet-purple/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-purple/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-violet-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-violet-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
