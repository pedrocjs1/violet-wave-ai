import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoCompleto from "@/assets/logo-completo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-navy/95 backdrop-blur-md border-b border-accent-navy/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center transition-transform duration-300 hover:scale-105"
            aria-label="Ir al inicio"
          >
            <img
              src={logoCompleto}
              alt="Violet Wave Logo"
              className="h-10 w-auto"
              loading="eager"
            />
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("equipo")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Contacto
            </button>
          </nav>

          <Button
            asChild
            className="hidden md:inline-flex bg-violet-purple hover:bg-violet-purple/90 text-white shadow-lg shadow-violet-purple/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-purple/30 hover:scale-105"
          >
            <a
              href="https://calendly.com/violet-wave/asesoramiento?month=2025-11"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agenda tu Consulta Gratuita
            </a>
          </Button>

          <button
            onClick={() => scrollToSection("contacto")}
            className="md:hidden text-white"
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
