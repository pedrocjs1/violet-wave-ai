// src/pages/GloboEsim.tsx
import React from "react";
import logoGlobo from "../assets/globo-esim.png";

const GloboEsim: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-5xl rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl p-6 md:p-10">
        {/* HEADER */}
        <header className="flex items-start gap-4 mb-8">
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-slate-800 to-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.7)]">
            <img
              src={logoGlobo}
              alt="Globo eSIM Logo"
              className="w-50 h-50 object-contain"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-xs text-slate-400 px-3 py-1 rounded-full border border-slate-600 bg-slate-900/70 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,1)]" />
              Mini app candidata para Lemon Cash
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Globo eSIM · Internet para tus viajes
            </h1>
            <p className="mt-1 text-sm md:text-base text-slate-400 max-w-xl">
              Compra eSIMs internacionales desde tu cuenta de Lemon Cash y viajá
              conectado a más de 200 destinos sin pagar roaming. Todo en pocos
              clics, pagando con tu saldo en USDC o pesos.
            </p>
          </div>
        </header>

        {/* PILLS */}
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-400 mb-6">
          <span className="px-3 py-1 rounded-full border border-slate-600 bg-slate-900/70">
            Funciona sobre la infraestructura de <b>Airalo Partners</b>
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-600 bg-slate-900/70">
            Integración vía Lemon Mini Apps
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-600 bg-slate-900/70">
            Pensado para viajeros de Latam
          </span>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-[1.9fr,1.7fr] gap-4 md:gap-6 mb-6">
          {/* COLUMNA IZQUIERDA */}
          <section className="relative rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10 pointer-events-none" />
            <div className="relative p-5 md:p-6 space-y-4">
              <div>
                <h2 className="text-sm font-semibold">
                  ¿Cómo funciona dentro de Lemon? 🚀
                </h2>
                <p className="mt-1 text-xs md:text-sm text-slate-400">
                  La experiencia está pensada para que un usuario de Lemon pueda
                  comprar una eSIM en menos de 1 minuto:
                </p>
              </div>

              <div className="space-y-3 text-xs md:text-sm text-slate-200">
                <div className="grid grid-cols-[auto,1fr] gap-2 md:gap-3 items-start">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border border-slate-600 flex items-center justify-center text-[11px]">
                    1
                  </div>
                  <div>
                    <b>Abrí Globo eSIM desde la sección de mini apps.</b>
                    <br />
                    Detectamos el país de destino y mostramos los mejores planes
                    de datos disponibles.
                  </div>
                </div>

                <div className="grid grid-cols-[auto,1fr] gap-2 md:gap-3 items-start">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border border-slate-600 flex items-center justify-center text-[11px]">
                    2
                  </div>
                  <div>
                    <b>Elegí tu plan y pagá con Lemon.</b>
                    <br />
                    El usuario paga con USDC u otro saldo disponible en su
                    cuenta Lemon.
                  </div>
                </div>

                <div className="grid grid-cols-[auto,1fr] gap-2 md:gap-3 items-start">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border border-slate-600 flex items-center justify-center text-[11px]">
                    3
                  </div>
                  <div>
                    <b>Mostramos el QR / link de activación.</b>
                    <br />
                    Una vez confirmado el pago, la mini app muestra el código QR
                    o el link de instalación de la eSIM provisto por Airalo.
                  </div>
                </div>
              </div>

              <a
                href="mailto:pedrovega4680@gmail.com?subject=Globo%20eSIM%20-%20Demo"
                className="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 text-xs font-semibold shadow-[0_0_25px_rgba(34,197,235,0.8)]"
              >
                <span>🎈</span>
                <span>Solicitar demo / acceso anticipado</span>
              </a>

              <p className="text-[11px] text-slate-400">
                Esta landing describe la versión inicial del producto. La
                integración final con la API de Airalo Partners se activará una
                vez aprobada la cuenta de partner.
              </p>
            </div>
          </section>

          {/* COLUMNA DERECHA */}
          <section className="relative rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tl from-sky-500/10 via-transparent to-emerald-500/10 pointer-events-none" />
            <div className="relative p-5 md:p-6 space-y-4">
              <div>
                <h2 className="text-sm font-semibold">
                  Beneficios para usuarios de Lemon
                </h2>
                <p className="mt-1 text-xs md:text-sm text-slate-400">
                  Globo eSIM mejora la experiencia de viaje y genera volumen
                  extra dentro del ecosistema de Lemon.
                </p>
              </div>

              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Destinos disponibles</span>
                  <strong>200+ países y regiones</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Tiempo estimado de compra</span>
                  <strong>&lt; 1 minuto</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Tipo de pago</span>
                  <strong>Saldo Lemon (USDC / fiat)</strong>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2 text-[11px] text-slate-300">
                <span className="px-2.5 py-1 rounded-full border border-slate-700 bg-slate-900/80">
                  ✅ Sin chips físicos ni envíos
                </span>
                <span className="px-2.5 py-1 rounded-full border border-slate-700 bg-slate-900/80">
                  🌍 Datos locales, sin roaming
                </span>
                <span className="px-2.5 py-1 rounded-full border border-slate-700 bg-slate-900/80">
                  🔐 Operamos sobre la API de Airalo (proveedor consolidado)
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ */}
        <section className="space-y-3 text-xs md:text-sm text-slate-200">
          <h3 className="text-sm font-semibold">Preguntas rápidas</h3>

          <div className="grid gap-3">
            <div className="rounded-xl border border-indigo-700/70 bg-slate-950/90 px-4 py-3">
              <p className="font-semibold mb-1">
                ¿Quién está detrás de Globo eSIM?
              </p>
              <p className="text-slate-400">
                Globo eSIM es un proyecto creado por <b>Violet Wave</b>, una
                agencia de automatización y productos digitales que trabaja con
                bots, APIs y flujos para negocios en Latam.
              </p>
            </div>

            <div className="rounded-xl border border-indigo-700/70 bg-slate-950/90 px-4 py-3">
              <p className="font-semibold mb-1">
                ¿Cómo se conecta técnicamente con Lemon y Airalo?
              </p>
              <p className="text-slate-400">
                La mini app usa el SDK de Lemon para autenticación y pagos, y se
                conecta a un backend propio que consume la{" "}
                <b>API de Airalo Partners</b> para listar planes, crear órdenes y
                obtener los datos de activación.
              </p>
            </div>

            <div className="rounded-xl border border-indigo-700/70 bg-slate-950/90 px-4 py-3">
              <p className="font-semibold mb-1">
                ¿Qué ve exactamente el usuario final?
              </p>
              <p className="text-slate-400">
                Una experiencia simple de tres pasos: elegir destino y plan,
                pagar con Lemon y recibir el QR / link para instalar la eSIM en
                su teléfono. Toda la complejidad queda abstraída en la mini app.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-6 pt-3 border-t border-slate-900 text-[11px] text-slate-500 flex flex-wrap justify-between gap-2">
            <span>
                Globo eSIM · Proyecto en etapa de validación para Lemon Mini Apps.
            </span>

            <span>
                Contacto: pedrovega4680@gmail.com · Lemon Tag:{" "}
                <span className="text-slate-300 font-semibold">$pedrocjs1</span>
            </span>
        </footer>

      </div>
    </div>
  );
};

export default GloboEsim;
