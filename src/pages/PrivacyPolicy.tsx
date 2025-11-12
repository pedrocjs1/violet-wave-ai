import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoCompleto from "@/assets/logo-completo.png";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-dark-navy">
      {/* Minimal Header */}
      <header className="sticky top-0 z-50 bg-dark-navy/95 backdrop-blur-md border-b border-accent-navy/50">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Link to="/" className="inline-block">
            <img
              src={logoCompleto}
              alt="Violet Wave Logo"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl">
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-violet-purple hover:text-violet-purple/80 -ml-4">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </Link>
          </Button>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Política de Privacidad
          </h1>
          <p className="text-text-secondary text-lg mb-12">
            Última actualización: 11 de noviembre del 2025
          </p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <p>
              En Violet Wave, valoramos y respetamos tu privacidad. Esta Política
              de Privacidad explica cómo recopilamos, usamos y protegemos la
              información que nos proporcionas al visitar nuestro sitio web o
              interactuar con nuestros servicios de automatización.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Información que recopilamos
              </h2>
              <p className="mb-4">
                Podemos recopilar los siguientes tipos de información:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Datos personales:</strong> nombre, correo
                  electrónico, número de teléfono, empresa y cualquier información
                  que decidas proporcionarnos al completar formularios o agendar
                  una llamada.
                </li>
                <li>
                  <strong className="text-white">Datos técnicos:</strong> dirección IP, tipo de
                  dispositivo, navegador, sistema operativo y páginas visitadas.
                </li>
                <li>
                  <strong className="text-white">Datos de interacción:</strong> mensajes enviados a
                  través de nuestros formularios, WhatsApp Business o chatbots
                  integrados.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Uso de la información
              </h2>
              <p className="mb-4">
                La información recopilada se utiliza para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Responder tus consultas y brindarte información sobre nuestros
                  servicios.
                </li>
                <li>
                  Mejorar la experiencia de navegación y personalizar el contenido
                  del sitio.
                </li>
                <li>
                  Enviar comunicaciones comerciales relacionadas con
                  automatizaciones, inteligencia artificial o soluciones digitales,
                  siempre que hayas dado tu consentimiento.
                </li>
                <li>
                  Analizar datos de tráfico y comportamiento para optimizar nuestras
                  campañas y procesos automatizados.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Conservación y protección de datos
              </h2>
              <p>
                Tus datos serán almacenados de forma segura en servidores
                protegidos y sólo durante el tiempo necesario para cumplir los
                fines descritos. Implementamos medidas técnicas y organizativas
                adecuadas para evitar el acceso no autorizado, pérdida o alteración
                de la información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Compartición de información
              </h2>
              <p>
                Violet Wave no vende ni alquila tu información personal. Podemos
                compartir ciertos datos con proveedores tecnológicos (como
                plataformas de email marketing, CRM o automatización) únicamente
                cuando sea necesario para prestar nuestros servicios y bajo
                acuerdos de confidencialidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Cookies y tecnologías similares
              </h2>
              <p>
                Utilizamos cookies para mejorar la funcionalidad del sitio y
                analizar el tráfico. Podés configurar tu navegador para rechazar
                cookies o eliminar las existentes, aunque esto puede afectar tu
                experiencia en el sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Tus derechos
              </h2>
              <p className="mb-4">Tenés derecho a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acceder, rectificar o eliminar tus datos personales.</li>
                <li>
                  Retirar tu consentimiento para el uso de tus datos en cualquier
                  momento.
                </li>
                <li>
                  Solicitar la limitación o portabilidad de tu información.
                </li>
              </ul>
              <p className="mt-4">
                Podés ejercer estos derechos escribiendo a{" "}
                <a
                  href="mailto:ramiro.baudo@violetwaveai.com"
                  className="text-violet-purple hover:text-violet-purple/80 font-semibold"
                >
                  ramiro.baudo@violetwaveai.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Cambios en esta política
              </h2>
              <p>
                Podemos actualizar esta Política de Privacidad ocasionalmente para
                reflejar cambios legales o mejoras en nuestros procesos. Las
                modificaciones serán publicadas en esta misma página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contacto</h2>
              <p className="mb-4">
                Si tenés preguntas o solicitudes sobre esta política, podés
                comunicarte con nosotros en:
              </p>
              <div className="space-y-1">
                <p>
                  📧{" "}
                  <a
                    href="mailto:ramiro.baudo@violetwaveai.com"
                    className="text-violet-purple hover:text-violet-purple/80 font-semibold"
                  >
                    ramiro.baudo@violetwaveai.com
                  </a>
                </p>
                <p>
                  🌐{" "}
                  <a
                    href="http://www.violetwaveai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-purple hover:text-violet-purple/80 font-semibold"
                  >
                    www.violetwaveai.com
                  </a>
                </p>
                <p>📍 Mendoza, Argentina</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-accent-navy/50">
            <Button asChild className="bg-violet-purple hover:bg-violet-purple/90 text-white">
              <Link to="/">Volver al inicio</Link>
            </Button>
          </div>
        </article>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
