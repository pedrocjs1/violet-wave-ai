import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-accent-navy to-dark-navy" />

      {/* Animated glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-violet-purple/30 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-0 -left-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-purple/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-purple/10 border border-violet-purple/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-violet-purple" />
            <span className="text-sm font-medium text-white/90">
              Proveedor de tecnología verificado por Meta
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Desarrollamos software con{" "}
            <span className="bg-gradient-to-r from-violet-purple via-purple-400 to-blue-400 bg-clip-text text-transparent">
              IA que transforma
            </span>{" "}
            tu negocio
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            SaaS personalizado, automatización con WhatsApp Business API y
            chatbots inteligentes con Anthropic Claude. Para empresas que
            quieren escalar sin fricción.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollTo("contacto")}
              className="bg-violet-purple hover:bg-violet-purple/90 text-white shadow-lg shadow-violet-purple/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-purple/50 hover:scale-105 text-base h-14 px-8 group"
            >
              Contactanos
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("portfolio")}
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300 text-base h-14 px-8"
            >
              Ver caso de éxito
            </Button>
          </div>

          <div className="pt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Mendoza, Argentina</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/10" />
            <span>WhatsApp Business API oficial</span>
            <div className="hidden sm:block w-px h-4 bg-white/10" />
            <span>Anthropic Claude AI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
