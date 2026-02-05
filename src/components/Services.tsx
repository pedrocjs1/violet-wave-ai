import { Button } from "@/components/ui/button";
import { MessageSquare, Settings, Cpu, Workflow } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Chatbots de Atención al Cliente",
      description:
        "Agentes conversacionales que responden 24/7 y escalan sin costo fijo.",
    },
    {
      icon: Settings,
      title: "Automatización de Procesos",
      description:
        "Flujos que eliminan tareas repetitivas y conectan tus herramientas.",
    },
    {
      icon: Cpu,
      title: "Integraciones de IA a Medida",
      description:
        "Modelos y APIs que se ajustan a tus sistemas y objetivos.",
    },
    {
      icon: Workflow,
      title: "Optimización de Workflows",
      description:
        "Mapeo, métricas y mejoras continuas para ganar eficiencia.",
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-accent-navy/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Soluciones de automatización con IA
          </h2>
          <p className="text-lg text-text-secondary">
            Implementaciones a medida para escalar sin fricción.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-dark-navy/50 backdrop-blur-sm rounded-2xl p-6 border border-violet-purple/10 hover:border-violet-purple/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-purple/20 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-violet-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-violet-purple" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-violet-purple hover:text-violet-purple/80 hover:bg-violet-purple/10 p-0 h-auto font-semibold"
              >
                <a
                  href="https://cal.com/violet-wave/llamada-1-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar este servicio →
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-violet-purple hover:bg-violet-purple/90 text-white shadow-lg shadow-violet-purple/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-purple/40 hover:scale-105"
          >
            <a
              href="https://cal.com/violet-wave/llamada-1-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Automatizá tu Negocio Ahora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
