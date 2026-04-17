import React, { useEffect } from "react";

const COLORS = {
  bgDeep: "#0b0b1b",
  bgNavy: "#0d1543",
  brand: "#2a61df",
  slate: "#38436f",
  graphite: "#505052",
  mute: "#84848c",
  mute2: "#8c8c90",
  paper: "#e7e7ea",
};

const Check = () => (
  <svg className="h-4 w-4 sm:h-[18px] sm:w-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const Dot = () => (
  <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: COLORS.brand }} aria-hidden />
);

type FeatureProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const Feature: React.FC<FeatureProps> = ({ title, desc, icon }) => (
  <div
    className="group relative rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2a61df]/60"
    style={{
      background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
      borderColor: "rgba(231,231,234,0.08)",
    }}
  >
    <div
      className="mb-4 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl"
      style={{
        background: "linear-gradient(135deg, rgba(42,97,223,0.18) 0%, rgba(42,97,223,0.06) 100%)",
        color: COLORS.brand,
        border: "1px solid rgba(42,97,223,0.25)",
      }}
    >
      {icon}
    </div>
    <h3 className="text-[15px] sm:text-base font-semibold tracking-tight" style={{ color: COLORS.paper }}>
      {title}
    </h3>
    <p className="mt-2 text-sm leading-relaxed" style={{ color: COLORS.mute }}>
      {desc}
    </p>
  </div>
);

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em]"
    style={{
      background: "rgba(42,97,223,0.10)",
      color: "#9fb6f4",
      border: "1px solid rgba(42,97,223,0.22)",
    }}
  >
    <Dot />
    {children}
  </div>
);

const PropuestaGustavo: React.FC = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Propuesta Dentiqa — Gustavo";
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    meta?.setAttribute(
      "content",
      "Propuesta comercial de Dentiqa para Gustavo — software dental todo-en-uno con IA integrada."
    );
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);
    return () => {
      document.title = prevTitle;
      meta?.setAttribute("content", prevDesc);
      document.head.removeChild(robots);
    };
  }, []);

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden font-sans"
      style={{
        background: COLORS.bgDeep,
        color: COLORS.paper,
        fontFamily: "'Sora','Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif",
      }}
    >
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #2a61df 0%, transparent 65%)" }}
        />
        <div
          className="absolute top-[40%] -left-32 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #0d1543 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #2a61df 0%, transparent 65%)" }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* HERO */}
        <header className="pt-10 sm:pt-14 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
          <div className="flex items-center justify-between">
            <img
              src="/logo-completo-dentiqa.jpeg"
              alt="Dentiqa"
              className="h-9 sm:h-11 w-auto rounded-md"
              loading="eager"
            />
            <span
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium tracking-wide"
              style={{
                background: "rgba(231,231,234,0.04)",
                border: "1px solid rgba(231,231,234,0.08)",
                color: COLORS.mute,
              }}
            >
              <Dot /> Propuesta confidencial
            </span>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <SectionLabel>Propuesta para Gustavo</SectionLabel>
            <h1
              className="mt-5 text-[34px] leading-[1.08] sm:text-5xl lg:text-[64px] lg:leading-[1.05] font-bold tracking-tight"
              style={{ color: COLORS.paper }}
            >
              Software dental{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${COLORS.brand} 0%, #6d92ec 100%)`,
                }}
              >
                todo-en-uno
              </span>
              <br className="hidden sm:block" /> con IA integrada.
            </h1>
            <p
              className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed"
              style={{ color: COLORS.mute }}
            >
              Resumen post-reunión con la propuesta para implementar Dentiqa en tu clínica:
              alcance, soporte, resguardo de datos e inversión, en una sola página.
            </p>

            <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { k: "Implementación", v: "Llave en mano" },
                { k: "Canal", v: "WhatsApp oficial" },
                { k: "Asistente", v: "IA dedicada" },
                { k: "Soporte", v: "Continuo" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl px-4 py-3 sm:px-5 sm:py-4"
                  style={{
                    background: "rgba(231,231,234,0.03)",
                    border: "1px solid rgba(231,231,234,0.07)",
                  }}
                >
                  <div className="text-[11px] uppercase tracking-[0.16em]" style={{ color: COLORS.mute2 }}>
                    {s.k}
                  </div>
                  <div className="mt-1 text-sm sm:text-base font-medium" style={{ color: COLORS.paper }}>
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* INTRO */}
        <section className="py-10 sm:py-14">
          <div
            className="rounded-2xl sm:rounded-[28px] p-6 sm:p-10 lg:p-12"
            style={{
              background: `linear-gradient(180deg, ${COLORS.bgNavy} 0%, rgba(13,21,67,0.6) 100%)`,
              border: "1px solid rgba(42,97,223,0.18)",
            }}
          >
            <SectionLabel>Gracias por la reunión</SectionLabel>
            <p
              className="mt-5 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light"
              style={{ color: COLORS.paper }}
            >
              Gustavo, te dejo este resumen para que veas en claro cómo Dentiqa puede ayudarte
              a profesionalizar la operación de tu clínica: una sola plataforma para agenda,
              pacientes, comunicación e inteligencia artificial trabajando en conjunto.
            </p>
          </div>
        </section>

        {/* QUÉ ES DENTIQA */}
        <section className="py-12 sm:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Qué es Dentiqa</SectionLabel>
              <h2
                className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight"
                style={{ color: COLORS.paper }}
              >
                Una plataforma integral, no un módulo más.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: COLORS.mute }}>
                Dentiqa es el sistema de gestión que centraliza la operación clínica y comercial
                de tu consultorio: agenda inteligente, historia clínica, seguimiento de pacientes
                y leads, y un asistente de IA conectado al WhatsApp oficial de la clínica.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: COLORS.mute }}>
                Pensado para que el equipo administrativo y profesional trabaje desde un mismo
                lugar, con datos en tiempo real y procesos repetitivos automatizados.
              </p>
            </div>
          </div>
        </section>

        {/* QUÉ RESUELVE */}
        <section className="py-12 sm:py-16">
          <div className="flex flex-col items-start sm:items-center sm:text-center">
            <SectionLabel>Qué resuelve Dentiqa</SectionLabel>
            <h2
              className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight"
              style={{ color: COLORS.paper }}
            >
              Menos fricción operativa, más clínica funcionando.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg" style={{ color: COLORS.mute }}>
              Los puntos donde una clínica suele perder tiempo, pacientes o ingresos —
              resueltos en una misma plataforma.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <Feature
              title="Información centralizada"
              desc="Pacientes, leads, agenda e historial en un único entorno: nada disperso entre cuadernos, planillas y chats."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="3" y="4" width="18" height="16" rx="3" />
                  <path d="M3 10h18M9 4v16" />
                </svg>
              }
            />
            <Feature
              title="Seguimiento real de pacientes y leads"
              desc="Cada conversación, turno y tratamiento queda asociado a la ficha del paciente. Sin pacientes que se pierden en el camino."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                </svg>
              }
            />
            <Feature
              title="Agenda y operación organizadas"
              desc="Turnos, recordatorios y disponibilidad gestionados desde el mismo sistema, sin doble carga de datos."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 11h18" />
                </svg>
              }
            />
            <Feature
              title="Automatización de procesos repetitivos"
              desc="Confirmaciones, recordatorios, encuestas post-atención y seguimientos sin que nadie tenga que hacerlo a mano."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M4 12a8 8 0 0 1 14-5.3" />
                  <path d="M20 4v4h-4" />
                  <path d="M20 12a8 8 0 0 1-14 5.3" />
                  <path d="M4 20v-4h4" />
                </svg>
              }
            />
            <Feature
              title="Comunicación profesional"
              desc="WhatsApp oficial verificado, con un asistente de IA que responde, califica y deriva sin que se note la diferencia."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-12.4 7.3L3 21l2.2-5.6A8.5 8.5 0 1 1 21 11.5z" />
                </svg>
              }
            />
            <Feature
              title="Soporte a la gestión comercial"
              desc="Visibilidad de leads, conversiones y carga de trabajo: información para tomar decisiones, no solo para registrar."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l4-4 3 3 5-6" />
                </svg>
              }
            />
          </div>
        </section>

        {/* IMPLEMENTACIÓN */}
        <section className="py-12 sm:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionLabel>Alcance de la implementación</SectionLabel>
              <h2
                className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight"
                style={{ color: COLORS.paper }}
              >
                Llave en mano, con acompañamiento real.
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: COLORS.mute }}>
                Nos hacemos cargo de dejar el sistema operativo, configurado a la medida de tu
                clínica y con tu equipo entrenado para usarlo desde el primer día.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ol className="space-y-3 sm:space-y-4">
                {[
                  {
                    t: "Configuración inicial del sistema",
                    d: "Alta de la cuenta, parametrización general y preparación del entorno productivo.",
                  },
                  {
                    t: "Adaptación a la operatoria de la clínica",
                    d: "Ajuste de agenda, fichas y flujos a la forma concreta en que trabajan tu equipo y tus profesionales.",
                  },
                  {
                    t: "Conexión oficial de WhatsApp",
                    d: "Integración con WhatsApp Business API y verificación del número oficial de la clínica.",
                  },
                  {
                    t: "Configuración del asistente y automatizaciones",
                    d: "Entrenamiento del chatbot de IA, mensajes, recordatorios y flujos automáticos.",
                  },
                  {
                    t: "Migración o carga inicial de datos",
                    d: "Importación de pacientes y leads desde planillas o sistemas previos (CSV/Excel) si los tenés disponibles.",
                  },
                  {
                    t: "Acompañamiento durante la implementación",
                    d: "Soporte directo al equipo administrativo y profesional hasta que el sistema quede operativo y adoptado.",
                  },
                ].map((item, i) => (
                  <li
                    key={item.t}
                    className="flex gap-4 rounded-2xl p-4 sm:p-5"
                    style={{
                      background: "rgba(231,231,234,0.03)",
                      border: "1px solid rgba(231,231,234,0.07)",
                    }}
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-semibold"
                      style={{
                        background: "rgba(42,97,223,0.15)",
                        color: COLORS.brand,
                        border: "1px solid rgba(42,97,223,0.30)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="text-[15px] sm:text-base font-semibold" style={{ color: COLORS.paper }}>
                        {item.t}
                      </div>
                      <div className="mt-1 text-sm leading-relaxed" style={{ color: COLORS.mute }}>
                        {item.d}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* SOPORTE Y RESGUARDO */}
        <section className="py-12 sm:py-16">
          <SectionLabel>Soporte, continuidad y resguardo</SectionLabel>
          <h2
            className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight"
            style={{ color: COLORS.paper }}
          >
            Una plataforma que no se queda quieta — y no te deja sola/o.
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {[
              {
                t: "Soporte técnico continuo",
                d: "Canal directo para dudas operativas y consultas sobre el uso de la plataforma durante toda la vigencia del servicio.",
              },
              {
                t: "Corrección prioritaria de incidencias",
                d: "Cualquier bug, caída o falla en la integración de WhatsApp o IA se atiende como prioridad para no frenar la operación.",
              },
              {
                t: "Actualizaciones generales sin costo",
                d: "Mejoras y nuevas funcionalidades del sistema disponibles automáticamente, salvo módulos premium específicos.",
              },
              {
                t: "Backups automáticos y encriptados",
                d: "Copias de seguridad periódicas en la nube para que la información clínica esté protegida ante cualquier imprevisto.",
              },
              {
                t: "Confidencialidad y privacidad",
                d: "Tratamiento estricto de los datos clínicos y comerciales, alineado con las políticas de privacidad de la plataforma.",
              },
              {
                t: "Tus datos son tuyos",
                d: "Pacientes, historiales y leads son propiedad de la clínica. Podés exportarlos en cualquier momento.",
              },
            ].map((b) => (
              <div
                key={b.t}
                className="rounded-2xl p-5 sm:p-6"
                style={{
                  background: "rgba(231,231,234,0.03)",
                  border: "1px solid rgba(231,231,234,0.07)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      background: "rgba(42,97,223,0.15)",
                      color: COLORS.brand,
                      border: "1px solid rgba(42,97,223,0.28)",
                    }}
                  >
                    <Check />
                  </div>
                  <div>
                    <div className="text-[15px] sm:text-base font-semibold" style={{ color: COLORS.paper }}>
                      {b.t}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: COLORS.mute }}>
                      {b.d}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INVERSIÓN */}
        <section className="py-12 sm:py-16">
          <div className="flex flex-col items-start sm:items-center sm:text-center">
            <SectionLabel>Inversión</SectionLabel>
            <h2
              className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight"
              style={{ color: COLORS.paper }}
            >
              Una propuesta clara, sin sorpresas.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Pricing card principal */}
            <div
              className="lg:col-span-3 relative overflow-hidden rounded-3xl p-7 sm:p-10"
              style={{
                background: `linear-gradient(140deg, ${COLORS.bgNavy} 0%, #142060 60%, ${COLORS.brand} 140%)`,
                border: "1px solid rgba(42,97,223,0.45)",
                boxShadow: "0 20px 60px -20px rgba(42,97,223,0.45)",
              }}
            >
              <div
                className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
                style={{ background: COLORS.brand }}
                aria-hidden
              />
              <div className="relative">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em]"
                  style={{
                    background: "rgba(231,231,234,0.10)",
                    border: "1px solid rgba(231,231,234,0.18)",
                    color: COLORS.paper,
                  }}
                >
                  <Dot /> Pago único
                </div>
                <div className="mt-6 text-[15px] sm:text-base" style={{ color: "rgba(231,231,234,0.75)" }}>
                  Implementación inicial
                </div>
                <div className="mt-2 flex items-baseline gap-2 flex-wrap">
                  <span
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                    style={{ color: COLORS.paper }}
                  >
                    USD 1.000
                  </span>
                  <span className="text-sm" style={{ color: "rgba(231,231,234,0.7)" }}>
                    / setup
                  </span>
                </div>
                <p className="mt-4 max-w-md text-sm sm:text-[15px] leading-relaxed" style={{ color: "rgba(231,231,234,0.8)" }}>
                  Cubre todo el onboarding: configuración del sistema, integración de WhatsApp,
                  asistente de IA, adaptación a la clínica y migración inicial de datos.
                </p>

                <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {[
                    "Setup llave en mano",
                    "WhatsApp oficial verificado",
                    "IA configurada y entrenada",
                    "Migración inicial de datos",
                    "Adaptación a tu operatoria",
                    "Acompañamiento de implementación",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: COLORS.paper }}>
                      <span style={{ color: "#9fb6f4" }}>
                        <Check />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Suscripción */}
            <div
              className="lg:col-span-2 rounded-3xl p-7 sm:p-10 flex flex-col justify-between"
              style={{
                background: "rgba(231,231,234,0.03)",
                border: "1px solid rgba(231,231,234,0.10)",
              }}
            >
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em]"
                  style={{
                    background: "rgba(231,231,234,0.05)",
                    border: "1px solid rgba(231,231,234,0.10)",
                    color: COLORS.mute,
                  }}
                >
                  <Dot /> Suscripción
                </div>
                <div className="mt-6 text-[15px] sm:text-base" style={{ color: COLORS.mute }}>
                  Abono mensual del servicio
                </div>
                <div className="mt-2">
                  <span
                    className="text-3xl sm:text-4xl font-semibold tracking-tight"
                    style={{ color: COLORS.paper }}
                  >
                    A definir según plan
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: COLORS.mute }}>
                  Mantiene operativo el software, los servidores, el uso de IA y el soporte
                  técnico continuo. Lo cerramos en la próxima conversación según el alcance
                  exacto de tu clínica.
                </p>
              </div>
              <div
                className="mt-6 rounded-2xl px-4 py-3 text-xs"
                style={{
                  background: "rgba(42,97,223,0.08)",
                  border: "1px solid rgba(42,97,223,0.20)",
                  color: "#bccaf2",
                }}
              >
                Las actualizaciones generales del software no tienen costo adicional.
              </div>
            </div>
          </div>
        </section>

        {/* PRÓXIMO PASO */}
        <section className="py-12 sm:py-16">
          <div
            className="rounded-3xl p-7 sm:p-12 lg:p-14 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${COLORS.bgNavy} 0%, ${COLORS.bgDeep} 100%)`,
              border: "1px solid rgba(42,97,223,0.25)",
            }}
          >
            <div
              className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-25 blur-3xl"
              style={{ background: COLORS.brand }}
              aria-hidden
            />
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <SectionLabel>Próximo paso</SectionLabel>
                <h2
                  className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight"
                  style={{ color: COLORS.paper }}
                >
                  Listos para arrancar cuando vos digas.
                </h2>
                <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: COLORS.mute }}>
                  Coordinamos el inicio de la implementación, definimos el cronograma de
                  onboarding y dejamos la clínica funcionando con Dentiqa en pocos días.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { n: "01", t: "Confirmás avance", d: "Damos por aprobada la propuesta y firmamos el acuerdo de servicio." },
                  { n: "02", t: "Kickoff de implementación", d: "Reunión de arranque, relevamiento fino y plan de onboarding." },
                  { n: "03", t: "Clínica operativa", d: "Sistema configurado, equipo entrenado y operación corriendo en Dentiqa." },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="flex gap-4 rounded-2xl p-4 sm:p-5"
                    style={{
                      background: "rgba(231,231,234,0.04)",
                      border: "1px solid rgba(231,231,234,0.08)",
                    }}
                  >
                    <div
                      className="text-xl font-bold tracking-tight"
                      style={{ color: COLORS.brand }}
                    >
                      {s.n}
                    </div>
                    <div>
                      <div className="text-[15px] sm:text-base font-semibold" style={{ color: COLORS.paper }}>
                        {s.t}
                      </div>
                      <div className="mt-1 text-sm leading-relaxed" style={{ color: COLORS.mute }}>
                        {s.d}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RESPALDO FINAL */}
        <section className="py-12 sm:py-16">
          <div
            className="rounded-3xl p-7 sm:p-10 lg:p-12 text-center"
            style={{
              background: "rgba(231,231,234,0.03)",
              border: "1px solid rgba(231,231,234,0.08)",
            }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em]"
              style={{
                background: "rgba(231,231,234,0.05)",
                border: "1px solid rgba(231,231,234,0.10)",
                color: COLORS.mute,
              }}
            >
              <Dot /> Respaldo técnico
            </div>
            <h3
              className="mt-5 text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight"
              style={{ color: COLORS.paper }}
            >
              Dentiqa fue desarrollado por Violet Wave IA.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed" style={{ color: COLORS.mute }}>
              Una agencia argentina especializada en software con IA y automatizaciones sobre
              WhatsApp Business API. Detrás de Dentiqa hay un equipo técnico dedicado al
              mantenimiento, evolución y soporte continuo de la plataforma.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://violetwaveai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-colors"
                style={{
                  background: COLORS.brand,
                  color: COLORS.paper,
                }}
              >
                Conocer Violet Wave IA
              </a>
              <a
                href="https://www.dentiqa.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-colors"
                style={{
                  background: "transparent",
                  color: COLORS.paper,
                  border: "1px solid rgba(231,231,234,0.15)",
                }}
              >
                Ver el producto en dentiqa.app
              </a>
            </div>
          </div>
        </section>

        <footer className="pb-12 pt-6 text-center text-xs" style={{ color: COLORS.mute2 }}>
          © {new Date().getFullYear()} Dentiqa — Software dental todo-en-uno con IA integrada.
        </footer>
      </div>
    </div>
  );
};

export default PropuestaGustavo;
