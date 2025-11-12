import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Users, Zap } from "lucide-react";

const Portfolio = () => {
  const cases = [
    {
      icon: Users,
      title: "Chatbot de Gestión de Turnos para Odontología",
      highlight: "Ahorro de tiempo, menos ausencias, mejor experiencia del paciente.",
      description:
        "Automatizamos la reserva de turnos y recordatorios. La clínica redujo ausentismos y mejoró la comunicación con pacientes.",
      badges: ["Implementación en semanas", "Medición de ROI"],
    },
    {
      icon: Shield,
      title: "Gestor de Flota Uber",
      highlight: "Prevención de fraudes, transparencia financiera, reportes automáticos.",
      description:
        "Chatbot que registra gastos e ingresos de conductores, genera reportes y alerta anomalías para decisiones rápidas.",
      badges: ["Soporte continuo", "Medición de ROI"],
    },
    {
      icon: TrendingUp,
      title: "Gestor de Talento para RRHH",
      highlight: "Menos tiempo de contratación, mejor encaje candidato-puesto.",
      description:
        "Sistema con IA para screening de CVs y matching, reduciendo tiempos y mejorando la calidad de las ternas.",
      badges: ["Implementación en semanas", "Soporte continuo"],
    },
    {
      icon: Zap,
      title: "Generador Automático de Presupuestos",
      highlight: "Velocidad, precisión, precios personalizados.",
      description:
        "Herramienta que calcula presupuestos según requerimientos del cliente, acelerando la venta y estandarizando propuestas.",
      badges: ["Medición de ROI", "Implementación en semanas"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-dark-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Implementaciones que generan resultados
          </h2>
          <p className="text-lg text-text-secondary">
            Casos reales con impacto en tiempo, costos y experiencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cases.map((item, index) => (
            <div
              key={index}
              className="group bg-accent-navy/50 backdrop-blur-sm rounded-2xl p-8 border border-violet-purple/10 hover:border-violet-purple/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-purple/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-violet-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-violet-purple" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              
              <p className="text-violet-purple font-semibold mb-4 text-sm">
                {item.highlight}
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.badges.map((badge, badgeIndex) => (
                  <Badge
                    key={badgeIndex}
                    variant="secondary"
                    className="bg-violet-purple/10 text-violet-purple border-violet-purple/20 hover:bg-violet-purple/20"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
