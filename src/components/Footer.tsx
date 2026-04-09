import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import isotipo from "@/assets/isotipo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-navy border-t border-violet-purple/10 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={isotipo}
                alt="Violet Wave IA"
                className="w-10 h-10"
                loading="lazy"
              />
              <span className="text-white font-bold text-xl">Violet Wave IA</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Desarrollo de software con IA para empresas LATAM. Mendoza, Argentina.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <nav className="space-y-2.5">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "servicios", label: "Servicios" },
                { id: "portfolio", label: "Dentiqa" },
                { id: "tecnologias", label: "Stack" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-text-secondary hover:text-violet-purple transition-colors text-sm"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/5492664000051"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-violet-purple transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                +54 9 266 400 0051
              </a>
              <a
                href="mailto:hola@violetwaveai.com"
                className="flex items-center gap-2 text-text-secondary hover:text-violet-purple transition-colors"
              >
                <Mail className="w-4 h-4" />
                hola@violetwaveai.com
              </a>
              <p className="flex items-center gap-2 text-text-secondary">
                <MapPin className="w-4 h-4" />
                Mendoza, Argentina
              </p>
            </div>
          </div>

          {/* Productos & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Productos</h4>
            <div className="space-y-2.5 text-sm">
              <a
                href="https://dentiqa.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary hover:text-violet-purple transition-colors"
              >
                Dentiqa
              </a>
              <Link
                to="/politica-de-privacidad"
                className="block text-text-secondary hover:text-violet-purple transition-colors"
              >
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-violet-purple/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © {currentYear} Violet Wave IA. Todos los derechos reservados.
          </p>
          <p className="text-text-secondary text-xs">
            Proveedor de tecnología verificado por Meta · WhatsApp Business API oficial
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
