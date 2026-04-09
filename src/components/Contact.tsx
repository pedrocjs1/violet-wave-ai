import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MapPin, Mail, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "5492664000051";
const EMAIL = "violetwave2026@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor completá todos los campos.");
      return;
    }

    setIsSubmitting(true);

    // Open WhatsApp with prefilled message as fallback
    const text = encodeURIComponent(
      `Hola, soy ${formData.name} (${formData.email}).\n\n${formData.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");

    setTimeout(() => {
      toast.success("¡Gracias! Te respondemos por WhatsApp.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 600);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-accent-navy/30 relative overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-purple/10 border border-violet-purple/30 text-violet-purple text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Hablemos de tu proyecto
          </h2>
          <p className="text-lg text-text-secondary">
            Contanos qué necesitás y te respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-gradient-to-br from-dark-navy/80 to-accent-navy/40 backdrop-blur-sm rounded-2xl p-8 border border-violet-purple/20 space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Nombre
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                className="bg-accent-navy/50 border-violet-purple/20 text-white placeholder:text-text-secondary focus:border-violet-purple h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="correo@empresa.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-accent-navy/50 border-violet-purple/20 text-white placeholder:text-text-secondary focus:border-violet-purple h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                Mensaje
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Contanos qué querés construir..."
                value={formData.message}
                onChange={handleChange}
                className="bg-accent-navy/50 border-violet-purple/20 text-white placeholder:text-text-secondary focus:border-violet-purple resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full bg-violet-purple hover:bg-violet-purple/90 text-white shadow-lg shadow-violet-purple/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-purple/40 h-14 text-base"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Violet%20Wave%20IA,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group p-6 rounded-2xl bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/5 border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">WhatsApp</p>
                  <p className="text-sm text-text-secondary">+54 9 266 400 0051</p>
                  <p className="text-xs text-[#25D366] mt-2 font-medium">
                    Respuesta en menos de 24h →
                  </p>
                </div>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="block group p-6 rounded-2xl bg-dark-navy/60 backdrop-blur-sm border border-violet-purple/20 hover:border-violet-purple/50 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-purple/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-violet-purple" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Email</p>
                  <p className="text-sm text-text-secondary break-all">{EMAIL}</p>
                </div>
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-dark-navy/60 backdrop-blur-sm border border-violet-purple/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-purple/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-violet-purple" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Ubicación</p>
                  <p className="text-sm text-text-secondary">Mendoza, Argentina</p>
                  <p className="text-xs text-text-secondary mt-1">
                    Trabajamos con clientes en toda LATAM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Violet%20Wave%20IA`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl shadow-[#25D366]/40 flex items-center justify-center transition-all hover:scale-110 animate-pulse-cta"
      >
        <Phone className="w-6 h-6" fill="currentColor" />
      </a>
    </section>
  );
};

export default Contact;
