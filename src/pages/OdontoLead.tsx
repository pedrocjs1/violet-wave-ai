import React, { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import logoCompleto from "@/assets/logo-completo.png";
import casoDeExitoImg from "@/assets/casodeexito.png"; //

// --- ICONOS (SVG Optimizados) ---
const WhatsAppIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const MessengerIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const CalendarIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ClockIcon = () => (
    <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const HeartIcon = () => (
    <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const SavingsIcon = () => (
    <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// --- PLACEHOLDER COMPONENT ---
const ImagePlaceholder: React.FC<{
    width: string;
    height: string;
    description: string;
    className?: string;
}> = ({ width, height, description, className = "" }) => (
    <div
        className={`bg-gradient-to-br from-violet-100 to-violet-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-violet-300 ${className}`}
        style={{ width, height, minHeight: height }}
    >
        <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-2 bg-violet-300 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
            <p className="text-xs text-violet-600 font-medium">{description}</p>
        </div>
    </div>
);

// --- MAIN COMPONENT ---
const OdontoLead: React.FC = () => {
    const [showStickyHeader, setShowStickyHeader] = useState(false);

    // Configuración centralizada para Cal.com
    const calNamespace = "odontologia-gestion-turnos-y-retencion";
    const calLink = "violet-wave/odontologia-gestion-turnos-y-retencion";

    useEffect(() => {
        const handleScroll = () => {
            setShowStickyHeader(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Inicialización de Cal.com con manejo de UI
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: calNamespace });
            cal("ui", {
                hideEventTypeDetails: false,
                layout: "month_view",
                theme: "light",
                styles: { branding: { brandColor: "#7c3aed" } }
            });
        })();
    }, []);

    const whatsappUrl = "https://wa.me/5491123456789?text=Hola,%20quiero%20más%20información%20sobre%20la%20automatización%20para%20clínicas";

    return (
        <div className="min-h-screen bg-white">
            {/* Sticky Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showStickyHeader
                    ? "bg-white/95 backdrop-blur-md shadow-lg translate-y-0"
                    : "-translate-y-full"
                    }`}
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <img
                            src={logoCompleto}
                            alt="Violet Wave Logo"
                            className="h-8 w-auto"
                            loading="eager"
                        />
                        <Button
                            asChild
                            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg shadow-violet-600/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-600/30 animate-pulse-cta"
                        >
                            <a href="#agendar">
                                Agendar Ahora
                            </a>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-gray-50 to-white pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-violet-200 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-100 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="flex justify-center mb-8">
                        <img
                            src={logoCompleto}
                            alt="Violet Wave Logo"
                            className="h-10 md:h-12 w-auto"
                            loading="eager"
                        />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            ¿Tu clínica está perdiendo pacientes por{" "}
                            <span className="text-violet-600">no responder a tiempo</span>?
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                            Automatizamos tu agenda 24/7 en WhatsApp, Instagram y Messenger.
                            <span className="font-semibold text-gray-800"> Convierte cada consulta en una cita confirmada</span> mientras descansas.
                            IA diseñada para odontólogos.
                        </p>

                        <div className="mb-8">
                            <Button
                                asChild
                                size="lg"
                                className="bg-violet-600 hover:bg-violet-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-xl shadow-violet-600/30 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-600/40 hover:scale-105 animate-pulse-cta"
                            >
                                <a href="#agendar">
                                    AGENDAR CONSULTORÍA GRATUITA
                                </a>
                            </Button>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-violet-200 border-2 border-white" />
                                <div className="w-8 h-8 rounded-full bg-violet-300 border-2 border-white" />
                                <div className="w-8 h-8 rounded-full bg-violet-400 border-2 border-white" />
                            </div>
                            <span className="ml-2">
                                Más de <span className="font-semibold text-violet-600">50+ clínicas</span> automatizadas con Violet Wave AI
                            </span>
                        </div>
                    </div>

                    <div className="mt-12 max-w-3xl mx-auto">
                        <ImagePlaceholder
                            width="100%"
                            height="320px"
                            description="Video Loop: IA agendando turnos automáticamente en WhatsApp"
                            className="shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Channels Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
                            No importa por dónde te escriban
                        </h2>
                        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Tu asistente virtual responde en segundos. Atención centralizada y automática en todos los canales.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                                    <WhatsAppIcon />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Business</h3>
                                <p className="text-sm text-gray-600">
                                    Respuestas instantáneas, confirmación de citas y recordatorios automáticos.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                                <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600">
                                    <InstagramIcon />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Instagram DMs</h3>
                                <p className="text-sm text-gray-600">
                                    Convierte seguidores en pacientes atendiendo consultas al instante.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                                    <MessengerIcon />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Messenger</h3>
                                <p className="text-sm text-gray-600">
                                    Atiende a pacientes desde Facebook sin perder ninguna oportunidad.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-violet-50 to-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-violet-100">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                    CASO DE ÉXITO
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Resultados Reales: Campaña de Navidad
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckIcon />
                                        <p className="text-gray-700">
                                            <span className="font-bold text-violet-600 text-2xl">+20%</span>{" "}
                                            de pacientes nuevos en solo 15 días
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckIcon />
                                        <p className="text-gray-700">
                                            Agenda llena sin invertir un segundo en responder manualmente
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckIcon />
                                        <p className="text-gray-700">
                                            Tasa de respuesta del 100% en menos de 30 segundos
                                        </p>
                                    </div>
                                </div>

                                {/* IMAGEN REAL IMPLEMENTADA */}
                                <div className="relative group">
                                    <img
                                        src={casoDeExitoImg}
                                        alt="Métricas de éxito Campaña Navidad"
                                        className="w-full h-auto rounded-2xl shadow-2xl border border-violet-100 transition-transform duration-300 group-hover:scale-[1.02]"
                                    />
                                    {/* Efecto de brillo sutil */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-500/10 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
                        Todo lo que tu clínica necesita
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 mx-auto mb-6 bg-violet-100 rounded-2xl flex items-center justify-center">
                                <ClockIcon />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Disponibilidad Total</h3>
                            <p className="text-gray-600">
                                Agenda abierta 24/7, incluso festivos. Nunca pierdas una cita.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 mx-auto mb-6 bg-violet-100 rounded-2xl flex items-center justify-center">
                                <HeartIcon />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Fidelización Automática</h3>
                            <p className="text-gray-600">
                                Recordatorios automáticos de limpieza cada 6 meses.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 mx-auto mb-6 bg-violet-100 rounded-2xl flex items-center justify-center">
                                <SavingsIcon />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Ahorro de Costos</h3>
                            <p className="text-gray-600">
                                Reduce la carga de tu secretaria en un 80%.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calendar Section (SOLVED) */}
            <section id="agendar" className="py-16 md:py-24 bg-gradient-to-br from-violet-600 to-violet-800">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                            Toma el control de tu facturación hoy mismo
                        </h2>
                        <p className="text-lg text-violet-100 mb-12 max-w-2xl mx-auto">
                            Agenda una consultoría gratuita y descubre cómo automatizar tu clínica en menos de una semana.
                        </p>

                        {/* Calendar Container - Fixed Spin Issue */}
                        <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl max-w-4xl mx-auto mb-8">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <CalendarIcon />
                                <h3 className="text-xl font-semibold text-gray-900">Selecciona un Horario</h3>
                            </div>

                            {/* FIX: Se usa un contenedor con min-height de 850px para dar espacio al mes. 
                               Se fuerza overflow visible para evitar que el iframe colapse.
                            */}
                            <div className="w-full bg-gray-50 rounded-xl" style={{ minHeight: "850px", overflow: "visible" }}>
                                <Cal
                                    namespace={calNamespace}
                                    calLink={calLink}
                                    style={{ width: "100%", height: "100%", minHeight: "850px" }}
                                    config={{ layout: "month_view", theme: "light" }}
                                />
                            </div>

                            <p className="text-sm text-gray-500 mt-4 text-center">
                                Llamada de 15 minutos · 100% gratuita
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <span className="text-violet-200 text-sm">¿Preferís hacerlo más rápido?</span>
                            <Button
                                asChild
                                variant="outline"
                                className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
                            >
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <WhatsAppIcon />
                                    Hablar con un asesor por WhatsApp
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-gray-900 text-gray-400">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <img
                        src={logoCompleto}
                        alt="Violet Wave Logo"
                        className="h-8 w-auto mx-auto mb-4 brightness-0 invert opacity-70"
                    />
                    <p className="text-sm">
                        © {new Date().getFullYear()} Violet Wave AI. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default OdontoLead;