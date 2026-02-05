import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MapPin, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Por favor completá los campos obligatorios.");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form data:", formData);
      toast.success("¡Gracias! Te responderemos a la brevedad.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-24 bg-accent-navy/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hablemos sobre tus procesos
          </h2>
          <p className="text-lg text-text-secondary">
            Contanos qué tareas querés automatizar y te proponemos el camino más
            rápido para lograrlo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-dark-navy/50 backdrop-blur-sm rounded-2xl p-8 border border-violet-purple/10 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Nombre y apellido *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-accent-navy/50 border-violet-purple/20 text-white placeholder:text-text-secondary focus:border-violet-purple"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="correo@empresa.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-accent-navy/50 border-violet-purple/20 text-white placeholder:text-text-secondary focus:border-violet-purple"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+54 ..."
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-accent-navy/50 border-violet-purple/20 text-white placeholder:text-text-secondary focus:border-violet-purple"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-accent-navy/50 border-violet-purple/20 text-white placeholder:text-text-secondary focus:border-violet-purple"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="¿Qué querés automatizar?"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-accent-navy/50 border-violet-purple/20 text-white placeholder:text-text-secondary focus:border-violet-purple resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-violet-purple hover:bg-violet-purple/90 text-white shadow-lg shadow-violet-purple/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-purple/40"
              >
                {isSubmitting ? "Enviando..." : "Enviar consulta"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-dark-navy/50 backdrop-blur-sm rounded-2xl p-6 border border-violet-purple/10 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-violet-purple/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-violet-purple" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Email</p>
                    <a
                      href="mailto:ramiro.baudo@violetwaveai.com"
                      className="text-text-secondary hover:text-violet-purple transition-colors text-sm"
                    >
                      ramiro.baudo@violetwaveai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-violet-purple/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-violet-purple" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Ubicación</p>
                    <p className="text-text-secondary text-sm">
                      Mendoza, Argentina
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
              >
                <a
                  href="https://wa.me/542664000051/?text=Hola+👋,+me+interesa+conocer+cómo+pueden+ayudarme+a+automatizar+mi+negocio+para+mejorar+la+eficiencia+de+mis+procesos+y+reducir+costos+operativos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Escribinos por WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto mt-20 bg-gradient-to-br from-violet-purple to-violet-purple/80 rounded-2xl p-12 text-center shadow-xl shadow-violet-purple/20 animate-scale-in">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para escalar con IA?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Transformá tu empresa hoy.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-violet-purple hover:bg-white/90 shadow-lg transition-all duration-300 hover:scale-105 text-lg px-8"
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

export default Contact;
