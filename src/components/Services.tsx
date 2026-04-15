import { Code2, MessageSquare, Bot, Plug } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desarrollo web",
      description:
        "Creamos páginas web responsivas, modernas y orientadas a la conversión, con diseño adaptado a tu marca y rendimiento óptimo.",
      tags: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      icon: Bot,
      title: "Software a medida",
      description:
        "Desarrollamos sistemas personalizados y soluciones empresariales que automatizan procesos, integran datos y escalan con tu negocio.",
      tags: ["Custom software", "API", "Automatización"],
    },
    {
      icon: MessageSquare,
      title: "Automatización WhatsApp",
      description:
        "WhatsApp Business API oficial para automatizar atención, ventas, recordatorios y marketing. Somos proveedor verificado por Meta.",
      tags: ["Cloud API", "Templates", "Webhooks"],
    },
    {
      icon: Bot,
      title: "SEO local y GEO",
      description:
        "Especialistas en posicionamiento local y geolocalizado para atraer clientes cercanos y mejorar tu visibilidad en búsquedas relevantes.",
      tags: ["SEO técnico", "GEO targeting", "Google Business"],
    },
    {
      icon: Plug,
      title: "Integraciones",
      description:
        "Conectamos tus sistemas con Google Calendar, Mercado Pago, Resend, CRMs y cualquier API que necesites.",
      tags: ["REST APIs", "Webhooks", "OAuth"],
    },
  ];

  return (
    <section id="servicios" className="py-24 lg:py-32 bg-accent-navy/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-transparent to-dark-navy pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-purple/10 border border-violet-purple/30 text-violet-purple text-sm font-medium mb-4">
            Qué hacemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Software que entiende tu negocio
          </h2>
          <p className="text-lg text-text-secondary">
            Construimos soluciones a medida con las mejores tecnologías del mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-dark-navy/80 to-accent-navy/40 backdrop-blur-sm rounded-2xl p-8 border border-violet-purple/10 hover:border-violet-purple/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-purple/20 hover:-translate-y-1 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-purple/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-purple to-violet-purple/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-violet-purple/30">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-violet-purple/10 text-violet-purple border border-violet-purple/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
