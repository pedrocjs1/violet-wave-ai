import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import logoCompleto from "@/assets/logo-completo.png";
import isotipo from "@/assets/isotipo.png";
const Hero = () => {
  return <section id="inicio" className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-accent-navy to-dark-navy" />
      
      {/* Geometric shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-violet-purple rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-violet-purple/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Automatización con IA para transformar tu negocio.
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
              Ahorrá tiempo, reducí costos y eliminá tareas repetitivas con
              soluciones inteligentes diseñadas para tu empresa.
            </p>

            <div className="space-y-4">
              {["Implementaciones rápidas y medibles", "Integraciones a tu medida", "Soporte y optimización continua"].map((item, index) => <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-purple/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-violet-purple" />
                  </div>
                  <span className="text-white/90">{item}</span>
                </div>)}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-violet-purple hover:bg-violet-purple/90 text-white shadow-lg shadow-violet-purple/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-purple/40 hover:scale-105 text-base">
                <a href="https://calendly.com/violet-wave/asesoramiento?month=2025-11" target="_blank" rel="noopener noreferrer">
                  Agenda tu Consulta Gratuita
                </a>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-base">
                
              </Button>
            </div>

            
          </div>

          {/* Visual content */}
          <div className="relative flex items-center justify-center animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-purple/20 to-transparent rounded-3xl blur-2xl" />
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;