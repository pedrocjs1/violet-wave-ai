import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, Puzzle, HeadphonesIcon, TrendingUp } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: CheckCircle2,
      text: "Resultados comprobados — Casos reales con impacto directo.",
    },
    {
      icon: Sparkles,
      text: "Tecnología de punta — IA de última generación, integraciones confiables.",
    },
    {
      icon: Puzzle,
      text: "Soluciones personalizadas — Diseñadas para tus sistemas y objetivos.",
    },
    {
      icon: HeadphonesIcon,
      text: "Soporte y mejora continua — Acompañamiento post‑implementación.",
    },
    {
      icon: TrendingUp,
      text: "Enfoque en ROI — Métricas claras y optimización sobre datos.",
    },
  ];

  return (
    <section className="py-24 bg-dark-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Elegí soluciones que se miden en resultados.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-accent-navy/30 backdrop-blur-sm rounded-xl border border-violet-purple/10 hover:border-violet-purple/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-purple/20 flex items-center justify-center">
                <reason.icon className="w-5 h-5 text-violet-purple" />
              </div>
              <p className="text-white text-lg leading-relaxed pt-1">
                {reason.text}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-br from-accent-navy to-accent-navy/50 backdrop-blur-sm rounded-2xl p-10 border border-violet-purple/30 shadow-xl shadow-violet-purple/10 mb-12 animate-scale-in">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-center italic">
            "Automatizar bien es ganar tiempo hoy y escalar mañana."
          </blockquote>
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
              Comenzá a Automatizar
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
