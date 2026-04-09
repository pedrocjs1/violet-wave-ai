import { ShieldCheck, Brain, Globe, Headphones } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Proveedor verificado por Meta",
      description:
        "Acceso oficial a WhatsApp Business API. Cumplimos los requisitos técnicos y de calidad de Meta.",
    },
    {
      icon: Brain,
      title: "IA de última generación",
      description:
        "Integramos Anthropic Claude, el modelo más avanzado del mercado para razonamiento y conversación.",
    },
    {
      icon: Globe,
      title: "Experiencia LATAM",
      description:
        "Conocemos el contexto regional, los métodos de pago locales y cómo se comunican las empresas en LATAM.",
    },
    {
      icon: Headphones,
      title: "Soporte continuo",
      description:
        "Acompañamiento post-implementación, monitoreo proactivo y mejoras iterativas sobre datos reales.",
    },
  ];

  return (
    <section id="por-que-elegirnos" className="py-24 lg:py-32 bg-dark-navy relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-violet-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-purple/10 border border-violet-purple/30 text-violet-purple text-sm font-medium mb-4">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Más que código: socios estratégicos
          </h2>
          <p className="text-lg text-text-secondary">
            Lo que nos diferencia es la combinación de credenciales, tecnología y cercanía.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-accent-navy/60 to-dark-navy/60 backdrop-blur-sm border border-violet-purple/10 hover:border-violet-purple/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-purple/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-purple to-violet-purple/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-violet-purple/30">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-text-secondary leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
