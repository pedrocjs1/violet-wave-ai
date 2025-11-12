import { Link } from "react-router-dom";
import isotipo from "@/assets/isotipo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark-navy border-t border-accent-navy/50 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={isotipo}
                alt="Violet Wave Isotipo"
                className="w-10 h-10"
                loading="lazy"
              />
              <span className="text-white font-bold text-xl">Violet Wave</span>
            </div>
            <p className="text-text-secondary text-sm">
              Automatización con IA para transformar tu negocio.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-text-secondary hover:text-violet-purple transition-colors text-sm"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="block text-text-secondary hover:text-violet-purple transition-colors text-sm"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block text-text-secondary hover:text-violet-purple transition-colors text-sm"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("equipo")}
                className="block text-text-secondary hover:text-violet-purple transition-colors text-sm"
              >
                Equipo
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block text-text-secondary hover:text-violet-purple transition-colors text-sm"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm">
              <p className="text-text-secondary">Mendoza, Argentina</p>
              <a
                href="mailto:ramiro.baudo@violetwaveai.com"
                className="block text-text-secondary hover:text-violet-purple transition-colors"
              >
                ramiro.baudo@violetwaveai.com
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <Link
              to="/politica-de-privacidad"
              className="block text-text-secondary hover:text-violet-purple transition-colors text-sm"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-accent-navy/50 text-center">
          <p className="text-text-secondary text-sm">
            © {currentYear} Violet Wave. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
