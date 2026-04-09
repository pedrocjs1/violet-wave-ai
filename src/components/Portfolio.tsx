import { Button } from "@/components/ui/button";
import {
  Calendar,
  FileText,
  MessageCircle,
  TrendingUp,
  Megaphone,
  Bell,
  Users,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

const Portfolio = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agenda inteligente",
      description: "Sincronización con Google Calendar y reservas automáticas",
    },
    {
      icon: FileText,
      title: "Historial clínico digital",
      description: "Odontograma, periodontograma y evoluciones",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp con IA 24/7",
      description: "Atiende pacientes y agenda turnos automáticamente",
    },
    {
      icon: TrendingUp,
      title: "Pipeline CRM comercial",
      description: "Automatizaciones para vender más y mejor",
    },
    {
      icon: Megaphone,
      title: "Marketing por WhatsApp",
      description: "Campañas masivas con templates aprobados por Meta",
    },
    {
      icon: Bell,
      title: "Recordatorios automáticos",
      description: "Pre-visita, post-visita y seguimiento personalizado",
    },
  ];

  const replaces = ["Kommo CRM", "Dentalink", "Mailchimp", "Calendly"];

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-dark-navy relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-purple/10 border border-violet-purple/30 text-violet-purple text-sm font-medium mb-4">
            Caso de éxito
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Dentiqa — Nuestro producto estrella
          </h2>
          <p className="text-lg text-text-secondary">
            Plataforma SaaS todo-en-uno para clínicas dentales. Demuestra de
            qué somos capaces.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-gradient-to-br from-accent-navy/80 to-dark-navy/80 backdrop-blur-sm rounded-3xl border border-violet-purple/20 overflow-hidden shadow-2xl shadow-violet-purple/10 animate-fade-in">
          {/* Header */}
          <div className="p-8 lg:p-12 border-b border-violet-purple/10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/logo-dentiqa-120.png"
                    alt="Dentiqa logo"
                    className="w-12 h-12 rounded-xl object-contain bg-white/5 p-1 shadow-lg shadow-violet-purple/30"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Dentiqa</h3>
                    <p className="text-violet-purple text-sm">dentiqa.app</p>
                  </div>
                </div>
                <p className="text-text-secondary max-w-2xl">
                  Reemplaza Kommo CRM + Dentalink + herramientas de marketing
                  en <strong className="text-white">UNA sola plataforma</strong>.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-violet-purple hover:bg-violet-purple/90 text-white shadow-lg shadow-violet-purple/30 hover:scale-105 transition-all"
              >
                <a
                  href="https://dentiqa.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Visitar dentiqa.app
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Replaces */}
          <div className="px-8 lg:px-12 py-6 bg-violet-purple/5 border-b border-violet-purple/10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-white">Reemplaza:</span>
              {replaces.map((tool) => (
                <span
                  key={tool}
                  className="text-sm px-3 py-1 rounded-full bg-white/5 text-text-secondary border border-white/10 line-through"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Features grid */}
          <div className="p-8 lg:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-xl bg-dark-navy/60 border border-violet-purple/10 hover:border-violet-purple/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-purple/20 flex items-center justify-center mb-4 group-hover:bg-violet-purple/30 transition-colors">
                    <feature.icon className="w-5 h-5 text-violet-purple" />
                  </div>
                  <h4 className="text-white font-semibold mb-1.5">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-violet-purple/10">
              <div className="flex items-center gap-2 text-white">
                <Users className="w-5 h-5 text-violet-purple" />
                <span className="font-semibold">Multi-usuario con roles:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Dueño", "Admin", "Dentista", "Recepcionista"].map((role) => (
                  <span
                    key={role}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-purple/10 text-violet-purple border border-violet-purple/20"
                  >
                    <CheckCircle2 className="w-3 h-3 inline mr-1" />
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
