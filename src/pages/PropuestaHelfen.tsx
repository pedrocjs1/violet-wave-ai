import React, { useEffect } from "react";
import logoCompleto from "@/assets/logo-completo.webp";

const COLORS = {
  bgDeep: "#0A0A0F",
  bgNavy: "#1A0F2E",
  brand: "#753BBD",
  brandSoft: "#9A5EE0",
  slate: "#3a2f55",
  graphite: "#4e4a5c",
  mute: "#8a8695",
  mute2: "#9c99a7",
  paper: "#EDEDF0",
};

const Check = () => (
  <svg
    className="h-4 w-4 sm:h-[18px] sm:w-[18px] shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const Dot = () => (
  <span
    className="inline-block h-1.5 w-1.5 rounded-full"
    style={{ background: COLORS.brand }}
    aria-hidden
  />
);

type FeatureProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const Feature: React.FC<FeatureProps> = ({ title, desc, icon }) => (
  <div
    className="group relative rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#753BBD]/60"
    style={{
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
      borderColor: "rgba(237,237,240,0.08)",
    }}
  >
    <div
      className="mb-4 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl"
      style={{
        background:
          "linear-gradient(135deg, rgba(117,59,189,0.22) 0%, rgba(117,59,189,0.06) 100%)",
        color: COLORS.brandSoft,
        border: "1px solid rgba(117,59,189,0.30)",
      }}
    >
      {icon}
    </div>
    <h3
      className="text-[15px] sm:text-base font-semibold tracking-tight"
      style={{ color: COLORS.paper }}
    >
      {title}
    </h3>
    <p
      className="mt-2 text-sm leading-relaxed"
      style={{ color: COLORS.mute }}
    >
      {desc}
    </p>
  </div>
);

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em]"
    style={{
      background: "rgba(117,59,189,0.12)",
      color: "#c9aff2",
      border: "1px solid rgba(117,59,189,0.28)",
    }}
  >
    <Dot />
    {children}
  </div>
);

type ModuleBlockProps = {
  eyebrow: string;
  title: string;
  desc: string;
  items: string[];
  accent?: boolean;
};

const ModuleBlock: React.FC<ModuleBlockProps> = ({
  eyebrow,
  title,
  desc,
  items,
  accent = false,
}) => (
  <div
    className="relative overflow-hidden rounded-2xl p-6 sm:p-7 h-full flex flex-col"
    style={{
      background: accent
        ? `linear-gradient(180deg, rgba(117,59,189,0.14) 0%, rgba(117,59,189,0.04) 100%)`
        : "rgba(237,237,240,0.03)",
      border: accent
        ? "1px solid rgba(117,59,189,0.35)"
        : "1px solid rgba(237,237,240,0.08)",
    }}
  >
    <div
      className="inline-flex self-start items-center gap-2 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em]"
      style={{
        background: accent ? "rgba(117,59,189,0.20)" : "rgba(237,237,240,0.05)",
        border: accent
          ? "1px solid rgba(117,59,189,0.35)"
          : "1px solid rgba(237,237,240,0.10)",
        color: accent ? "#d2b9f5" : COLORS.mute2,
      }}
    >
      {eyebrow}
    </div>
    <h3
      className="mt-4 text-lg sm:text-xl font-semibold tracking-tight"
      style={{ color: COLORS.paper }}
    >
      {title}
    </h3>
    <p className="mt-2 text-sm leading-relaxed" style={{ color: COLORS.mute }}>
      {desc}
    </p>
    <ul className="mt-5 space-y-2.5">
      {items.map((it) => (
        <li
          key={it}
          className="flex items-start gap-2.5 text-sm"
          style={{ color: COLORS.paper }}
        >
          <span style={{ color: COLORS.brandSoft }}>
            <Check />
          </span>
          <span className="leading-relaxed" style={{ color: "rgba(237,237,240,0.88)" }}>
            {it}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const PropuestaHelfen: React.FC = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Propuesta Violet Wave — Helfen";
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    meta?.setAttribute(
      "content",
      "Propuesta comercial Violet Wave para Helfen — plataforma SaaS chatbot white-label para clínicas dentales.",
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
        fontFamily:
          "'Sora','Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif",
      }}
    >
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-35 blur-3xl"
          style={{
            background: "radial-gradient(circle, #753BBD 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute top-[40%] -left-32 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, #1A0F2E 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #753BBD 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* HERO */}
        <header className="pt-10 sm:pt-14 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
          <div className="flex items-center justify-between">
            <img
              src={logoCompleto}
              alt="Violet Wave"
              className="h-9 sm:h-11 w-auto"
              loading="eager"
            />
            <span
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium tracking-wide"
              style={{
                background: "rgba(237,237,240,0.04)",
                border: "1px solid rgba(237,237,240,0.08)",
                color: COLORS.mute,
              }}
            >
              <Dot /> Propuesta confidencial
            </span>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <SectionLabel>Propuesta para Helfen</SectionLabel>
            <h1
              className="mt-5 text-[34px] leading-[1.08] sm:text-5xl lg:text-[64px] lg:leading-[1.05] font-bold tracking-tight"
              style={{ color: COLORS.paper }}
            >
              Plataforma SaaS{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${COLORS.brand} 0%, ${COLORS.brandSoft} 100%)`,
                }}
              >
                chatbot white-label
              </span>
              <br className="hidden sm:block" /> para clínicas dentales.
            </h1>
            <p
              className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed"
              style={{ color: COLORS.mute }}
            >
              Propuesta comercial para desarrollar, desplegar y mantener una
              plataforma propia de Helfen: un sistema multitenant con motor de
              IA conversacional, integración oficial con WhatsApp e Instagram,
              y paneles diferenciados para Helfen y sus clínicas cliente.
            </p>

            <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { k: "Cliente", v: "Helfen" },
                { k: "Agencia", v: "Violet Wave" },
                { k: "Emisión", v: "20 de abril de 2026" },
                { k: "Validez", v: "30 días" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl px-4 py-3 sm:px-5 sm:py-4"
                  style={{
                    background: "rgba(237,237,240,0.03)",
                    border: "1px solid rgba(237,237,240,0.07)",
                  }}
                >
                  <div
                    className="text-[11px] uppercase tracking-[0.16em]"
                    style={{ color: COLORS.mute2 }}
                  >
                    {s.k}
                  </div>
                  <div
                    className="mt-1 text-sm sm:text-base font-medium"
                    style={{ color: COLORS.paper }}
                  >
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* VISIÓN Y VALOR ESTRATÉGICO */}
        <section className="py-10 sm:py-14">
          <div
            className="rounded-2xl sm:rounded-[28px] p-6 sm:p-10 lg:p-12"
            style={{
              background: `linear-gradient(180deg, ${COLORS.bgNavy} 0%, rgba(26,15,46,0.6) 100%)`,
              border: "1px solid rgba(117,59,189,0.22)",
            }}
          >
            <SectionLabel>Visión y valor estratégico</SectionLabel>
            <p
              className="mt-5 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light"
              style={{ color: COLORS.paper }}
            >
              No es un chatbot más. Es un{" "}
              <span style={{ color: COLORS.brandSoft, fontWeight: 500 }}>
                activo de propiedad intelectual
              </span>{" "}
              propio de Helfen: una plataforma que permite escalar la operación
              y la retención de clínicas cliente sin sumar costos operativos
              proporcionales, y convierte a Helfen de agencia de leads en{" "}
              <span style={{ color: COLORS.paper, fontWeight: 500 }}>
                plataforma de servicios
              </span>
              .
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                {
                  t: "Arquitectura multitenant en producción",
                  d: "La misma base técnica que opera hoy en Dentiqa, validada con clínicas reales y WhatsApp oficial de Meta.",
                },
                {
                  t: "Encriptación AES-256-GCM",
                  d: "Credenciales, tokens y datos sensibles cifrados a nivel de campo. Estándar bancario.",
                },
                {
                  t: "Proveedor verificado por Meta",
                  d: "Violet Wave ya es proveedor de tecnología verificado. Helfen hereda ese status desde el día uno.",
                },
              ].map((b) => (
                <div
                  key={b.t}
                  className="rounded-xl p-4 sm:p-5"
                  style={{
                    background: "rgba(237,237,240,0.03)",
                    border: "1px solid rgba(237,237,240,0.08)",
                  }}
                >
                  <div
                    className="text-[13px] sm:text-sm font-semibold"
                    style={{ color: COLORS.paper }}
                  >
                    {b.t}
                  </div>
                  <p
                    className="mt-1.5 text-[13px] leading-relaxed"
                    style={{ color: COLORS.mute }}
                  >
                    {b.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MÓDULOS DEL SISTEMA */}
        <section className="py-12 sm:py-16">
          <div className="flex flex-col items-start sm:items-center sm:text-center">
            <SectionLabel>Módulos del sistema</SectionLabel>
            <h2
              className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight"
              style={{ color: COLORS.paper }}
            >
              Dos vistas, un motor de IA transversal.
            </h2>
            <p
              className="mt-4 max-w-2xl text-base sm:text-lg"
              style={{ color: COLORS.mute }}
            >
              Separación estricta entre Helfen como dueño de la plataforma y
              sus clínicas cliente. Cada rol ve exactamente lo que necesita,
              nada más.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            <ModuleBlock
              accent
              eyebrow="Panel Admin — Helfen"
              title="Vista del dueño de la plataforma."
              desc="Control total sobre el ecosistema: todas las clínicas cliente, configuración del motor de IA, integraciones y métricas globales."
              items={[
                "Acceso completo a todas las clínicas cliente",
                "Configuración del motor de IA por clínica",
                "Gestión de plantillas SOP (base + overrides por clínica)",
                "Vinculaciones de WhatsApp Business API oficial de Meta",
                "Métricas globales de uso y facturación",
                "Alta/baja de clínicas cliente",
              ]}
            />
            <ModuleBlock
              eyebrow="Panel Clínica — cliente de Helfen"
              title="Vista operativa para cada clínica."
              desc="CRM omnicanal y bandeja de conversaciones con la IA. Cada clínica opera sobre sus datos, sin acceso al motor ni a otras clínicas."
              items={[
                "CRM con canal a elección: Instagram o WhatsApp",
                "Pipeline de leads: nuevo → calificado → derivado a humano",
                "Bandeja de conversaciones con toggle IA / humano",
                "Configuración de info, horarios, precios y promociones",
                "Sin acceso al motor de IA ni a otras clínicas",
                "Notificaciones de leads que requieren atención humana",
              ]}
            />
          </div>

          <div className="mt-5">
            <ModuleBlock
              accent
              eyebrow="Motor de IA — transversal"
              title="El corazón del sistema."
              desc="Tres capas de arquitectura — router determinístico, LLM principal y escalación — con guardrails estrictos y auditoría completa."
              items={[
                "Calificación automática de leads",
                "Derribo de objeciones básicas entrenado con los guiones de Helfen",
                "Protección anti prompt-injection y sanitización de entrada/salida",
                "Validación de precios contra el catálogo de cada clínica (evita que la IA invente números)",
                "Audit logs completos de toda conversación — trazabilidad total",
                "Fallback a humano por pedido explícito, queja grave o emergencia médica",
                "Notificaciones y dashboard de uso por clínica",
              ]}
            />
          </div>
        </section>

        {/* CRONOGRAMA */}
        <section className="py-12 sm:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionLabel>Cronograma y metodología</SectionLabel>
              <h2
                className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight"
                style={{ color: COLORS.paper }}
              >
                Beta en producción desde la semana 2.
              </h2>
              <p
                className="mt-5 text-base sm:text-lg leading-relaxed"
                style={{ color: COLORS.mute }}
              >
                Todos los plazos son{" "}
                <span style={{ color: COLORS.paper, fontWeight: 500 }}>
                  estimados
                </span>{" "}
                para permitir QA y ajustes finos sobre el comportamiento
                conversacional. El objetivo es llegar rápido a producción y
                refinar con datos reales.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ol className="space-y-3 sm:space-y-4">
                {[
                  {
                    t: "Semana 1 — Kickoff e infraestructura",
                    d: "Setup inicial del entorno, base de datos multitenant, arquitectura de seguridad, y configuraciones de Meta Development y Meta Partner para asegurar la integración oficial de las APIs de WhatsApp e Instagram.",
                  },
                  {
                    t: "Semana 2 — Beta en producción",
                    d: "Despliegue de la versión Beta funcional. Helfen puede empezar a ver el flujo de leads entrando al CRM y probar el bot con clínicas piloto.",
                  },
                  {
                    t: "Semanas 3–4 — QA y entrega",
                    d: "Fase de QA intensivo, ajustes de IA conversacional, entrenamiento fino de prompts según guiones de Helfen, y entrega final llave en mano con documentación.",
                  },
                ].map((item, i) => (
                  <li
                    key={item.t}
                    className="flex gap-4 rounded-2xl p-4 sm:p-5"
                    style={{
                      background: "rgba(237,237,240,0.03)",
                      border: "1px solid rgba(237,237,240,0.07)",
                    }}
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-semibold"
                      style={{
                        background: "rgba(117,59,189,0.18)",
                        color: COLORS.brandSoft,
                        border: "1px solid rgba(117,59,189,0.35)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div
                        className="text-[15px] sm:text-base font-semibold"
                        style={{ color: COLORS.paper }}
                      >
                        {item.t}
                      </div>
                      <div
                        className="mt-1 text-sm leading-relaxed"
                        style={{ color: COLORS.mute }}
                      >
                        {item.d}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
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
              USD 8.000 — desglose en 3 hitos.
            </h2>
            <p
              className="mt-4 max-w-2xl text-base sm:text-lg"
              style={{ color: COLORS.mute }}
            >
              Total transparente, atado a entregables verificables. Ningún
              hito se cobra sin evidencia concreta de lo que cubre.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              {
                n: "01",
                tag: "30%",
                title: "Setup y arquitectura",
                amount: "USD 2.400",
                items: [
                  "Diseño de la base de datos multitenant",
                  "Configuraciones de seguridad (AES-256, encriptación de tokens)",
                  "Vinculación de activos de Meta: WhatsApp Business API + Instagram",
                ],
              },
              {
                n: "02",
                tag: "40%",
                title: "Despliegue y validación",
                amount: "USD 3.200",
                items: [
                  "Se abona cuando el sistema está en producción (Beta)",
                  "Helfen puede ver el flujo de leads entrando al CRM",
                  "Pruebas con al menos una clínica cliente piloto",
                ],
                highlight: true,
              },
              {
                n: "03",
                tag: "30%",
                title: "Entrega y documentación",
                amount: "USD 2.400",
                items: [
                  "Entrega de accesos finales (super-admin y paneles clínica)",
                  "Capacitación del equipo de Helfen",
                  "Documentación técnica completa del sistema",
                ],
              },
            ].map((h) => (
              <div
                key={h.n}
                className="relative overflow-hidden rounded-3xl p-6 sm:p-7 flex flex-col"
                style={{
                  background: h.highlight
                    ? `linear-gradient(140deg, ${COLORS.bgNavy} 0%, #2a1849 60%, ${COLORS.brand} 160%)`
                    : "rgba(237,237,240,0.03)",
                  border: h.highlight
                    ? "1px solid rgba(117,59,189,0.50)"
                    : "1px solid rgba(237,237,240,0.08)",
                  boxShadow: h.highlight
                    ? "0 20px 60px -20px rgba(117,59,189,0.45)"
                    : "none",
                }}
              >
                {h.highlight && (
                  <div
                    className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-25 blur-3xl"
                    style={{ background: COLORS.brand }}
                    aria-hidden
                  />
                )}
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div
                      className="text-xl font-bold tracking-tight"
                      style={{
                        color: h.highlight ? COLORS.paper : COLORS.brandSoft,
                      }}
                    >
                      {h.n}
                    </div>
                    <div
                      className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em]"
                      style={{
                        background: h.highlight
                          ? "rgba(237,237,240,0.12)"
                          : "rgba(117,59,189,0.12)",
                        border: h.highlight
                          ? "1px solid rgba(237,237,240,0.20)"
                          : "1px solid rgba(117,59,189,0.28)",
                        color: h.highlight ? COLORS.paper : "#c9aff2",
                      }}
                    >
                      Hito · {h.tag}
                    </div>
                  </div>
                  <div
                    className="mt-5 text-[15px]"
                    style={{
                      color: h.highlight
                        ? "rgba(237,237,240,0.78)"
                        : COLORS.mute,
                    }}
                  >
                    {h.title}
                  </div>
                  <div
                    className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight"
                    style={{ color: COLORS.paper }}
                  >
                    {h.amount}
                  </div>
                  <ul className="mt-6 space-y-2.5">
                    {h.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: COLORS.paper }}
                      >
                        <span
                          style={{
                            color: h.highlight ? "#d2b9f5" : COLORS.brandSoft,
                          }}
                        >
                          <Check />
                        </span>
                        <span
                          className="leading-relaxed"
                          style={{
                            color: h.highlight
                              ? "rgba(237,237,240,0.92)"
                              : "rgba(237,237,240,0.85)",
                          }}
                        >
                          {it}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-6 rounded-2xl px-5 py-4 text-sm text-center"
            style={{
              background: "rgba(117,59,189,0.08)",
              border: "1px solid rgba(117,59,189,0.22)",
              color: "#d2b9f5",
            }}
          >
            Total del desarrollo:{" "}
            <span style={{ color: COLORS.paper, fontWeight: 600 }}>
              USD 8.000
            </span>{" "}
            · 2.400 + 3.200 + 2.400 — sin costos ocultos.
          </div>
        </section>

        {/* CONTINUIDAD Y EVOLUCIÓN */}
        <section className="py-12 sm:py-16">
          <SectionLabel>Continuidad y evolución</SectionLabel>
          <h2
            className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight"
            style={{ color: COLORS.paper }}
          >
            Después del go-live, el sistema se sigue cuidando.
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div
              className="rounded-2xl p-6 sm:p-7 flex flex-col"
              style={{
                background:
                  "linear-gradient(180deg, rgba(117,59,189,0.14) 0%, rgba(117,59,189,0.04) 100%)",
                border: "1px solid rgba(117,59,189,0.35)",
              }}
            >
              <div
                className="inline-flex self-start items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em]"
                style={{
                  background: "rgba(117,59,189,0.20)",
                  border: "1px solid rgba(117,59,189,0.35)",
                  color: "#d2b9f5",
                }}
              >
                Incluido — 90 días
              </div>
              <h3
                className="mt-4 text-lg font-semibold tracking-tight"
                style={{ color: COLORS.paper }}
              >
                Garantía de estabilización
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: COLORS.mute }}>
                90 días posteriores al go-live, sin costo adicional.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Corrección de bugs sin costo",
                  "Optimización de prompts",
                  "Ajustes de comportamiento de la IA",
                ].map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: COLORS.paper }}
                  >
                    <span style={{ color: COLORS.brandSoft }}>
                      <Check />
                    </span>
                    <span
                      className="leading-relaxed"
                      style={{ color: "rgba(237,237,240,0.88)" }}
                    >
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-6 sm:p-7 flex flex-col"
              style={{
                background: "rgba(237,237,240,0.03)",
                border: "1px solid rgba(237,237,240,0.08)",
              }}
            >
              <div
                className="inline-flex self-start items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em]"
                style={{
                  background: "rgba(237,237,240,0.05)",
                  border: "1px solid rgba(237,237,240,0.10)",
                  color: COLORS.mute2,
                }}
              >
                Seguro de continuidad
              </div>
              <h3
                className="mt-4 text-lg font-semibold tracking-tight"
                style={{ color: COLORS.paper }}
              >
                Mantenimiento operativo
              </h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                  style={{ color: COLORS.paper }}
                >
                  USD 200
                </span>
                <span className="text-sm" style={{ color: COLORS.mute }}>
                  / mes
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: COLORS.mute }}>
                Abono fijo mensual.{" "}
                <span style={{ color: COLORS.paper, fontWeight: 500 }}>
                  Sin incrementos por contrato de 1 año.
                </span>
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Protección ante cambios de APIs de Meta y OpenAI/Anthropic",
                  "Actualizaciones de seguridad y parches críticos",
                  "Monitoreo continuo del sistema",
                  "Canal de soporte priorizado",
                ].map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: COLORS.paper }}
                  >
                    <span style={{ color: COLORS.brandSoft }}>
                      <Check />
                    </span>
                    <span
                      className="leading-relaxed"
                      style={{ color: "rgba(237,237,240,0.88)" }}
                    >
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-6 sm:p-7 flex flex-col"
              style={{
                background: "rgba(237,237,240,0.03)",
                border: "1px solid rgba(237,237,240,0.08)",
              }}
            >
              <div
                className="inline-flex self-start items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em]"
                style={{
                  background: "rgba(237,237,240,0.05)",
                  border: "1px solid rgba(237,237,240,0.10)",
                  color: COLORS.mute2,
                }}
              >
                Fuera de alcance
              </div>
              <h3
                className="mt-4 text-lg font-semibold tracking-tight"
                style={{ color: COLORS.paper }}
              >
                Nuevas funcionalidades
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: COLORS.mute }}>
                Cualquier módulo o funcionalidad nueva fuera del alcance original
                se presupuesta de forma independiente.
              </p>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "rgba(237,237,240,0.75)" }}
              >
                Lo dejamos explícito para evitar zonas grises: el mantenimiento
                cubre que lo construido siga funcionando; los desarrollos nuevos
                se cotizan aparte, con alcance y plazo propios.
              </p>
            </div>
          </div>
        </section>

        {/* POR QUÉ VIOLET WAVE */}
        <section className="py-12 sm:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Por qué Violet Wave</SectionLabel>
              <h2
                className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight"
                style={{ color: COLORS.paper }}
              >
                No es nuestro primer rodeo con clínicas dentales.
              </h2>
              <p
                className="mt-5 text-base sm:text-lg leading-relaxed"
                style={{ color: COLORS.mute }}
              >
                Dentiqa —{" "}
                <a
                  href="https://www.dentiqa.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                  style={{ color: COLORS.brandSoft }}
                >
                  dentiqa.app
                </a>{" "}
                — es una plataforma SaaS dental todo-en-uno operando hoy en
                producción con clínicas reales, multitenant, integrada con
                WhatsApp Cloud API y con motor de IA propio. La arquitectura de
                Helfen se monta sobre esa misma base probada.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Feature
                title="Arquitectura probada en Dentiqa"
                desc="Misma base multitenant, misma estrategia de aislamiento por tenant, misma encriptación AES-256 que ya opera en producción."
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="3" />
                    <path d="M3 10h18M9 4v16" />
                  </svg>
                }
              />
              <Feature
                title="Proveedor verificado por Meta"
                desc="Business Manager verificado y App publicada en modo Live. No hay que empezar ese proceso desde cero."
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                }
              />
              <Feature
                title="IA con guardrails estrictos"
                desc="Anti prompt-injection, sanitización de entrada y salida, validación de precios contra catálogo. La IA no improvisa números."
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M12 2l3 5 5.5 1-4 4 1 5.5L12 15l-5.5 2.5 1-5.5-4-4L9 7z" />
                  </svg>
                }
              />
              <Feature
                title="Foco en activos escalables"
                desc="Construimos plataformas que crecen con el negocio, no desarrollos de una sola vez que quedan obsoletos a los seis meses."
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M7 14l4-4 3 3 5-6" />
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        {/* PRÓXIMOS PASOS + CONTACTO */}
        <section className="py-12 sm:py-16">
          <div
            className="rounded-3xl p-7 sm:p-12 lg:p-14 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${COLORS.bgNavy} 0%, ${COLORS.bgDeep} 100%)`,
              border: "1px solid rgba(117,59,189,0.28)",
            }}
          >
            <div
              className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-25 blur-3xl"
              style={{ background: COLORS.brand }}
              aria-hidden
            />
            <div className="relative grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <SectionLabel>Próximos pasos</SectionLabel>
                <h2
                  className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight"
                  style={{ color: COLORS.paper }}
                >
                  Cerramos en una reunión, arrancamos en días.
                </h2>
                <p
                  className="mt-5 text-base sm:text-lg leading-relaxed"
                  style={{ color: COLORS.mute }}
                >
                  Coordinamos una reunión de cierre con Pedro para revisar
                  puntos finos, firmar el acuerdo y lanzar el kickoff técnico.
                </p>

                <div
                  className="mt-8 rounded-2xl p-5 sm:p-6"
                  style={{
                    background: "rgba(237,237,240,0.04)",
                    border: "1px solid rgba(237,237,240,0.10)",
                  }}
                >
                  <div
                    className="text-[11px] uppercase tracking-[0.16em]"
                    style={{ color: COLORS.mute2 }}
                  >
                    Contacto
                  </div>
                  <div
                    className="mt-2 text-lg sm:text-xl font-semibold"
                    style={{ color: COLORS.paper }}
                  >
                    Pedro Vega — Violet Wave
                  </div>
                  <a
                    href="https://violetwaveai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm underline underline-offset-4"
                    style={{ color: COLORS.brandSoft }}
                  >
                    violetwaveai.com
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    n: "01",
                    t: "Reunión de cierre",
                    d: "Revisamos alcance final, respondemos dudas y firmamos el acuerdo de servicio.",
                  },
                  {
                    n: "02",
                    t: "Kickoff técnico",
                    d: "Arrancamos Semana 1: infraestructura, seguridad y configuración Meta Development + Meta Partner.",
                  },
                  {
                    n: "03",
                    t: "Beta en producción",
                    d: "A partir de Semana 2 Helfen ya puede ver los primeros leads en el CRM.",
                  },
                  {
                    n: "04",
                    t: "Entrega y documentación",
                    d: "Semanas 3–4: QA, ajuste fino de la IA y entrega final llave en mano.",
                  },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="flex gap-4 rounded-2xl p-4 sm:p-5"
                    style={{
                      background: "rgba(237,237,240,0.04)",
                      border: "1px solid rgba(237,237,240,0.08)",
                    }}
                  >
                    <div
                      className="text-xl font-bold tracking-tight"
                      style={{ color: COLORS.brandSoft }}
                    >
                      {s.n}
                    </div>
                    <div>
                      <div
                        className="text-[15px] sm:text-base font-semibold"
                        style={{ color: COLORS.paper }}
                      >
                        {s.t}
                      </div>
                      <div
                        className="mt-1 text-sm leading-relaxed"
                        style={{ color: COLORS.mute }}
                      >
                        {s.d}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer
          className="pb-12 pt-6 text-center text-xs"
          style={{ color: COLORS.mute2 }}
        >
          © {new Date().getFullYear()} Violet Wave —{" "}
          <a
            href="https://violetwaveai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
            style={{ color: COLORS.mute }}
          >
            violetwaveai.com
          </a>
          {" "}· Propuesta confidencial para Helfen.
        </footer>
      </div>
    </div>
  );
};

export default PropuestaHelfen;
