import ramiroBaudo from "@/assets/ramiro-baudo.jpg";
import pedroVega from "@/assets/pedro-vega.png";

const Team = () => {
  const team = [
    {
      name: "Ramiro Baudo",
      role: "Co-Fundador",
      bio: "Estratega en automatización con IA. Experiencia integrando flujos complejos y herramientas de negocio para escalar sin fricción.",
      image: ramiroBaudo,
    },
    {
      name: "Pedro Vega",
      role: "Co-Fundador",
      bio: "Especialista en diseño de soluciones a medida y optimización de procesos con foco en resultados y ROI.",
      image: pedroVega,
    },
  ];

  return (
    <section id="equipo" className="py-24 bg-accent-navy/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Co-Fundadores
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-dark-navy/50 backdrop-blur-sm rounded-2xl p-8 border border-violet-purple/10 hover:border-violet-purple/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-purple/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {member.name}
              </h3>
              
              <p className="text-violet-purple font-semibold mb-4">
                {member.role}
              </p>
              
              <p className="text-text-secondary leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
