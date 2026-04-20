import React, { useState } from "react";
import {
  LayoutList,
  MessageSquare,
  Settings,
  Building2,
  Bot,
  CreditCard,
  BarChart3,
  Search,
  Filter,
  MoreHorizontal,
  Send,
  Paperclip,
  Smile,
  Check,
  CheckCheck,
  Circle,
} from "lucide-react";

const BRAND = "#753BBD";
const BRAND_SOFT = "#9A5EE0";

type View = "client" | "admin";
type ClientTab = "pipeline" | "conversations" | "settings";
type AdminTab = "clinics" | "ai" | "billing" | "metrics";

const initials = (name: string): string =>
  name
    .split(" ")
    .map((w) => w[0] ?? "")
    .slice(0, 2)
    .join("")
    .toUpperCase();

type Lead = {
  name: string;
  phone: string;
  channel: "WhatsApp" | "Instagram";
  reason: string;
};

const PIPELINE: {
  key: string;
  title: string;
  color: string;
  bg: string;
  leads: Lead[];
}[] = [
  {
    key: "new",
    title: "Nuevo lead",
    color: "#6B7280",
    bg: "rgba(107,114,128,0.10)",
    leads: [
      { name: "María López", phone: "+54 9 11 •••• 4521", channel: "WhatsApp", reason: "Dolor de muelas" },
      { name: "Juan Pérez", phone: "+54 9 11 •••• 7832", channel: "Instagram", reason: "Consulta ortodoncia" },
      { name: "Ana García", phone: "+54 9 11 •••• 2098", channel: "WhatsApp", reason: "Blanqueamiento" },
    ],
  },
  {
    key: "interested",
    title: "Interesado",
    color: BRAND,
    bg: "rgba(117,59,189,0.10)",
    leads: [
      { name: "Carlos Ruiz", phone: "+54 9 11 •••• 5164", channel: "WhatsApp", reason: "Implantes" },
      { name: "Lucía Fernández", phone: "+54 9 11 •••• 8743", channel: "Instagram", reason: "Limpieza + diagnóstico" },
    ],
  },
  {
    key: "qualified",
    title: "Calificado",
    color: "#D97706",
    bg: "rgba(217,119,6,0.10)",
    leads: [
      { name: "Diego Torres", phone: "+54 9 11 •••• 3391", channel: "WhatsApp", reason: "Presupuesto 3 implantes" },
    ],
  },
  {
    key: "human",
    title: "Derivado a humano",
    color: "#059669",
    bg: "rgba(5,150,105,0.10)",
    leads: [
      { name: "Sofía Rodríguez", phone: "+54 9 11 •••• 6470", channel: "WhatsApp", reason: "Cierre turno jueves" },
      { name: "Martín Silva", phone: "+54 9 11 •••• 1128", channel: "Instagram", reason: "Consulta compleja" },
    ],
  },
];

const CONVERSATIONS = [
  { id: 1, name: "María López", last: "Sí, el jueves a la tarde", time: "10:42", ai: true, unread: 0, active: true },
  { id: 2, name: "Carlos Ruiz", last: "¿Tienen turno para mañana?", time: "10:28", ai: true, unread: 2, active: false },
  { id: 3, name: "Lucía Fernández", last: "Gracias, te confirmo mañana", time: "09:55", ai: false, unread: 0, active: false },
  { id: 4, name: "Diego Torres", last: "Perfecto, quedo atento al llamado", time: "09:12", ai: false, unread: 0, active: false },
  { id: 5, name: "Ana García", last: "¿El blanqueamiento cuánto sale?", time: "08:47", ai: true, unread: 1, active: false },
];

const CHAT_MESSAGES: { from: "lead" | "ai"; text: string; time: string }[] = [
  { from: "lead", text: "Hola, quiero info sobre implantes", time: "10:40" },
  {
    from: "ai",
    text: "¡Hola! Claro, te cuento. Un implante con corona definitiva ronda los USD 1.200. ¿Querés agendar una consulta de valoración sin costo?",
    time: "10:40",
  },
  { from: "lead", text: "Sí, el jueves a la tarde", time: "10:42" },
  {
    from: "ai",
    text: "Perfecto, te paso al equipo para cerrar el turno. Un agente te va a escribir en minutos.",
    time: "10:42",
  },
];

const CLINICS = [
  { name: "Clínica Dental Sonrisa", city: "Buenos Aires", leads: 47, plan: "Pro", status: "activa" },
  { name: "Odontología Integral Palermo", city: "Buenos Aires", leads: 32, plan: "Starter", status: "activa" },
  { name: "Centro Dental Belgrano", city: "Buenos Aires", leads: 89, plan: "Pro", status: "activa" },
  { name: "Consultorio Dr. Martínez", city: "Córdoba", leads: 18, plan: "Starter", status: "pausada" },
];

const AppHeader: React.FC<{ subtitle: string; avatar: string }> = ({ subtitle, avatar }) => (
  <div
    className="flex items-center justify-between px-4 sm:px-6 py-3 border-b"
    style={{ borderColor: "#E5E5EA", background: "#FFFFFF" }}
  >
    <div className="flex items-center gap-3 min-w-0">
      <div
        className="h-8 w-8 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0"
        style={{ background: BRAND }}
      >
        H
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold truncate" style={{ color: "#0F0F14" }}>
          Helfen
        </div>
        <div className="text-[11px] truncate" style={{ color: "#6B6B75" }}>
          {subtitle}
        </div>
      </div>
    </div>
    <div
      className="h-8 w-8 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0"
      style={{ background: "#F1F1F3", color: "#3A3A45" }}
    >
      {avatar}
    </div>
  </div>
);

type NavItem = { key: string; label: string; icon: React.ReactNode };

const NavButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors text-left"
    style={{
      background: active ? "rgba(117,59,189,0.10)" : "transparent",
      color: active ? BRAND : "#3A3A45",
      fontWeight: active ? 600 : 500,
    }}
  >
    {children}
  </button>
);

const MobileTab: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors"
    style={{
      background: active ? BRAND : "#F1F1F3",
      color: active ? "#FFFFFF" : "#6B6B75",
    }}
  >
    {children}
  </button>
);

const AppShell: React.FC<{
  subtitle: string;
  avatar: string;
  navItems: NavItem[];
  activeKey: string;
  onSelect: (key: string) => void;
  children: React.ReactNode;
}> = ({ subtitle, avatar, navItems, activeKey, onSelect, children }) => (
  <div className="flex flex-col h-full">
    <AppHeader subtitle={subtitle} avatar={avatar} />

    <div className="md:hidden border-b" style={{ borderColor: "#E5E5EA", background: "#FAFAFB" }}>
      <div className="flex overflow-x-auto px-3 py-2 gap-1.5 no-scrollbar">
        {navItems.map((it) => (
          <MobileTab key={it.key} active={activeKey === it.key} onClick={() => onSelect(it.key)}>
            {it.label}
          </MobileTab>
        ))}
      </div>
    </div>

    <div className="flex flex-1 min-h-0">
      <aside
        className="hidden md:block w-48 border-r p-3 shrink-0"
        style={{ borderColor: "#E5E5EA", background: "#FAFAFB" }}
      >
        <nav className="flex flex-col gap-0.5">
          {navItems.map((it) => (
            <NavButton key={it.key} active={activeKey === it.key} onClick={() => onSelect(it.key)}>
              {it.icon}
              <span>{it.label}</span>
            </NavButton>
          ))}
        </nav>
      </aside>

      <main className="flex-1 min-w-0 overflow-auto" style={{ background: "#FAFAFB" }}>
        <div
          key={activeKey}
          className="animate-[fadein_200ms_ease-out]"
          style={{ minHeight: "100%" }}
        >
          {children}
        </div>
      </main>
    </div>
  </div>
);

const PipelineView: React.FC = () => (
  <div className="p-4 sm:p-6">
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold" style={{ color: "#0F0F14" }}>
          Pipeline de leads
        </h3>
        <p className="text-sm mt-0.5" style={{ color: "#6B6B75" }}>
          Seguimiento comercial de pacientes potenciales
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm"
          style={{ background: "#FFFFFF", border: "1px solid #E5E5EA", color: "#6B6B75" }}
        >
          <Search className="w-3.5 h-3.5" />
          <span>Buscar</span>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm"
          style={{ background: "#FFFFFF", border: "1px solid #E5E5EA", color: "#3A3A45" }}
        >
          <Filter className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Filtros</span>
        </button>
      </div>
    </div>

    <div className="mt-5 flex gap-3 overflow-x-auto pb-3 -mx-4 sm:-mx-6 px-4 sm:px-6 snap-x">
      {PIPELINE.map((col) => (
        <div
          key={col.key}
          className="flex flex-col gap-2.5 min-w-[240px] w-[240px] snap-start"
        >
          <div
            className="flex items-center justify-between px-3 py-2 rounded-lg"
            style={{ background: col.bg }}
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: col.color }}
                aria-hidden
              />
              <span className="text-[13px] font-semibold" style={{ color: col.color }}>
                {col.title}
              </span>
            </div>
            <span
              className="text-[11px] font-semibold rounded-full px-2 py-0.5"
              style={{ background: "#FFFFFF", color: col.color, border: `1px solid ${col.color}22` }}
            >
              {col.leads.length}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {col.leads.map((lead) => (
              <div
                key={lead.name}
                className="rounded-lg p-3"
                style={{ background: "#FFFFFF", border: "1px solid #E5E5EA" }}
              >
                <div className="flex items-start gap-2.5">
                  <div
                    className="h-8 w-8 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0"
                    style={{ background: "rgba(117,59,189,0.12)", color: BRAND }}
                  >
                    {initials(lead.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold truncate" style={{ color: "#0F0F14" }}>
                      {lead.name}
                    </div>
                    <div className="text-[11px]" style={{ color: "#6B6B75" }}>
                      {lead.phone}
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium"
                    style={{
                      background: lead.channel === "WhatsApp" ? "#D1FAE5" : "rgba(117,59,189,0.10)",
                      color: lead.channel === "WhatsApp" ? "#059669" : BRAND,
                    }}
                  >
                    <Circle className="w-2 h-2 fill-current" />
                    {lead.channel}
                  </span>
                </div>
                <div className="mt-2 text-[12px] leading-snug" style={{ color: "#3A3A45" }}>
                  {lead.reason}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ConversationsView: React.FC = () => {
  const tabs = ["Todas", "Abiertas", "IA", "Urgente", "Cerradas"];
  return (
    <div className="flex flex-col h-full min-h-[480px]">
      <div
        className="flex items-center gap-1.5 px-4 sm:px-6 py-3 border-b overflow-x-auto no-scrollbar"
        style={{ borderColor: "#E5E5EA", background: "#FFFFFF" }}
      >
        {tabs.map((t, i) => (
          <button
            key={t}
            type="button"
            className="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
            style={{
              background: i === 0 ? "rgba(117,59,189,0.10)" : "transparent",
              color: i === 0 ? BRAND : "#6B6B75",
              fontWeight: i === 0 ? 600 : 500,
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex flex-1 min-h-0">
        <div
          className="w-full md:w-[280px] md:shrink-0 border-r overflow-y-auto"
          style={{ borderColor: "#E5E5EA", background: "#FFFFFF" }}
        >
          {CONVERSATIONS.map((c) => (
            <div
              key={c.id}
              className="px-4 py-3 border-b cursor-pointer"
              style={{
                borderColor: "#F1F1F3",
                background: c.active ? "rgba(117,59,189,0.05)" : "transparent",
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0"
                  style={{ background: "#F1F1F3", color: "#3A3A45" }}
                >
                  {initials(c.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-sm font-semibold truncate" style={{ color: "#0F0F14" }}>
                      {c.name}
                    </div>
                    <div className="text-[11px] shrink-0" style={{ color: "#9C99A7" }}>
                      {c.time}
                    </div>
                  </div>
                  <div className="mt-0.5 flex items-center gap-2">
                    <div className="text-[12px] truncate flex-1" style={{ color: "#6B6B75" }}>
                      {c.last}
                    </div>
                    {c.unread > 0 && (
                      <span
                        className="inline-flex items-center justify-center h-4 w-4 rounded-full text-[10px] font-bold text-white shrink-0"
                        style={{ background: BRAND }}
                      >
                        {c.unread}
                      </span>
                    )}
                  </div>
                  {c.ai && (
                    <span
                      className="mt-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium"
                      style={{ background: "rgba(117,59,189,0.10)", color: BRAND }}
                    >
                      <Bot className="w-2.5 h-2.5" />
                      IA atendiendo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex flex-col flex-1 min-w-0" style={{ background: "#F4F1F8" }}>
          <div
            className="flex items-center justify-between px-5 py-3 border-b"
            style={{ borderColor: "#E5E5EA", background: "#FFFFFF" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold"
                style={{ background: "#F1F1F3", color: "#3A3A45" }}
              >
                ML
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: "#0F0F14" }}>
                  María López
                </div>
                <div className="text-[11px]" style={{ color: "#059669" }}>
                  En línea · WhatsApp
                </div>
              </div>
            </div>
            <MoreHorizontal className="w-5 h-5" style={{ color: "#6B6B75" }} />
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
            {CHAT_MESSAGES.map((m, i) => {
              const isAi = m.from === "ai";
              return (
                <div
                  key={i}
                  className={`flex ${isAi ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[75%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug"
                    style={{
                      background: isAi ? BRAND : "#FFFFFF",
                      color: isAi ? "#FFFFFF" : "#0F0F14",
                      border: isAi ? "none" : "1px solid #E5E5EA",
                      borderTopRightRadius: isAi ? 4 : undefined,
                      borderTopLeftRadius: !isAi ? 4 : undefined,
                    }}
                  >
                    <div>{m.text}</div>
                    <div
                      className="mt-1 flex items-center justify-end gap-1 text-[10px]"
                      style={{ color: isAi ? "rgba(255,255,255,0.75)" : "#9C99A7" }}
                    >
                      <span>{m.time}</span>
                      {isAi && <CheckCheck className="w-3 h-3" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="flex items-center gap-2 px-4 py-3 border-t"
            style={{ borderColor: "#E5E5EA", background: "#FFFFFF" }}
          >
            <Paperclip className="w-4 h-4 shrink-0" style={{ color: "#6B6B75" }} />
            <div
              className="flex-1 rounded-full px-3.5 py-2 text-sm"
              style={{ background: "#F4F1F8", color: "#6B6B75" }}
            >
              Escribí un mensaje…
            </div>
            <Smile className="w-4 h-4 shrink-0" style={{ color: "#6B6B75" }} />
            <div
              className="h-8 w-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: BRAND }}
            >
              <Send className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsView: React.FC = () => {
  const fields = [
    { label: "Nombre de la clínica", value: "Clínica Dental Sonrisa" },
    { label: "Horarios de atención", value: "Lun–Vie 9:00 – 19:00 · Sáb 9:00 – 13:00" },
    { label: "Precios base", value: "Consulta USD 30 · Limpieza USD 60 · Implante USD 1.200" },
    { label: "Promociones activas", value: "Blanqueamiento 20% off hasta fin de mes" },
    { label: "Tono de la IA", value: "Cálido y profesional · tuteo argentino" },
  ];
  return (
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-semibold" style={{ color: "#0F0F14" }}>
        Configuración de la clínica
      </h3>
      <p className="text-sm mt-0.5" style={{ color: "#6B6B75" }}>
        Datos que usa la IA para responder a cada paciente.
      </p>

      <div className="mt-5 space-y-3">
        {fields.map((f) => (
          <div
            key={f.label}
            className="rounded-lg p-4"
            style={{ background: "#FFFFFF", border: "1px solid #E5E5EA" }}
          >
            <div className="text-[11px] uppercase tracking-[0.14em] font-semibold" style={{ color: "#9C99A7" }}>
              {f.label}
            </div>
            <div className="mt-1.5 text-sm" style={{ color: "#0F0F14" }}>
              {f.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ClinicsView: React.FC = () => (
  <div className="p-4 sm:p-6">
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold" style={{ color: "#0F0F14" }}>
          Clínicas cliente
        </h3>
        <p className="text-sm mt-0.5" style={{ color: "#6B6B75" }}>
          Todas las clínicas que operan sobre tu plataforma
        </p>
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-white font-medium"
        style={{ background: BRAND }}
      >
        + Nueva clínica
      </button>
    </div>

    <div
      className="mt-5 rounded-xl overflow-hidden"
      style={{ background: "#FFFFFF", border: "1px solid #E5E5EA" }}
    >
      <div
        className="hidden sm:grid grid-cols-[1.6fr_1fr_0.8fr_0.8fr_0.8fr_auto] gap-4 px-4 py-3 text-[11px] uppercase tracking-[0.14em] font-semibold"
        style={{ background: "#FAFAFB", color: "#9C99A7", borderBottom: "1px solid #E5E5EA" }}
      >
        <div>Clínica</div>
        <div>Ciudad</div>
        <div>Leads mes</div>
        <div>Plan</div>
        <div>Estado</div>
        <div></div>
      </div>
      {CLINICS.map((c) => (
        <div
          key={c.name}
          className="grid grid-cols-1 sm:grid-cols-[1.6fr_1fr_0.8fr_0.8fr_0.8fr_auto] gap-2 sm:gap-4 px-4 py-3 text-sm items-center"
          style={{ borderBottom: "1px solid #F1F1F3" }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="h-9 w-9 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
              style={{ background: "rgba(117,59,189,0.10)", color: BRAND }}
            >
              {initials(c.name)}
            </div>
            <div className="min-w-0">
              <div className="font-semibold truncate" style={{ color: "#0F0F14" }}>
                {c.name}
              </div>
              <div className="sm:hidden text-[11px]" style={{ color: "#9C99A7" }}>
                {c.city}
              </div>
            </div>
          </div>
          <div className="hidden sm:block" style={{ color: "#6B6B75" }}>
            {c.city}
          </div>
          <div className="flex items-center justify-between sm:block">
            <span className="sm:hidden text-[11px]" style={{ color: "#9C99A7" }}>
              Leads
            </span>
            <span className="font-semibold" style={{ color: "#0F0F14" }}>
              {c.leads}
            </span>
          </div>
          <div className="flex items-center justify-between sm:block">
            <span className="sm:hidden text-[11px]" style={{ color: "#9C99A7" }}>
              Plan
            </span>
            <span
              className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold"
              style={{
                background: c.plan === "Pro" ? "rgba(117,59,189,0.10)" : "#F1F1F3",
                color: c.plan === "Pro" ? BRAND : "#3A3A45",
              }}
            >
              {c.plan}
            </span>
          </div>
          <div className="flex items-center justify-between sm:block">
            <span className="sm:hidden text-[11px]" style={{ color: "#9C99A7" }}>
              Estado
            </span>
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium"
              style={{
                background: c.status === "activa" ? "#D1FAE5" : "#FEF3C7",
                color: c.status === "activa" ? "#059669" : "#D97706",
              }}
            >
              <Circle className="w-2 h-2 fill-current" />
              {c.status}
            </span>
          </div>
          <button
            type="button"
            className="text-xs font-medium px-2.5 py-1 rounded-lg justify-self-start sm:justify-self-end"
            style={{ color: "#3A3A45", background: "#F1F1F3" }}
          >
            Configurar
          </button>
        </div>
      ))}
    </div>
  </div>
);

const EmptyAdminView: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="p-4 sm:p-6">
    <h3 className="text-lg sm:text-xl font-semibold" style={{ color: "#0F0F14" }}>
      {title}
    </h3>
    <p className="text-sm mt-0.5" style={{ color: "#6B6B75" }}>
      {desc}
    </p>
    <div
      className="mt-6 rounded-xl p-10 flex flex-col items-center justify-center text-center"
      style={{ background: "#FFFFFF", border: "1px dashed #E5E5EA" }}
    >
      <div
        className="h-12 w-12 rounded-xl flex items-center justify-center"
        style={{ background: "rgba(117,59,189,0.10)", color: BRAND }}
      >
        <Check className="w-6 h-6" />
      </div>
      <div className="mt-3 text-sm font-semibold" style={{ color: "#0F0F14" }}>
        Módulo disponible
      </div>
      <div className="mt-1 text-xs max-w-sm" style={{ color: "#6B6B75" }}>
        Esta vista se despliega al cargar datos reales de las clínicas en producción.
      </div>
    </div>
  </div>
);

const ToggleButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="px-4 py-2 rounded-full text-[13px] font-medium transition-colors"
    style={{
      background: active ? "rgba(117,59,189,0.18)" : "transparent",
      color: active ? "#EDEDF0" : "#8A8695",
      border: active ? "1px solid rgba(117,59,189,0.40)" : "1px solid transparent",
    }}
  >
    {children}
  </button>
);

const ProductPreview: React.FC = () => {
  const [view, setView] = useState<View>("client");
  const [clientTab, setClientTab] = useState<ClientTab>("pipeline");
  const [adminTab, setAdminTab] = useState<AdminTab>("clinics");

  const clientNav: NavItem[] = [
    { key: "pipeline", label: "Pipeline CRM", icon: <LayoutList className="w-4 h-4" /> },
    { key: "conversations", label: "Conversaciones", icon: <MessageSquare className="w-4 h-4" /> },
    { key: "settings", label: "Configuración", icon: <Settings className="w-4 h-4" /> },
  ];

  const adminNav: NavItem[] = [
    { key: "clinics", label: "Clínicas cliente", icon: <Building2 className="w-4 h-4" /> },
    { key: "ai", label: "Configuración de IA", icon: <Bot className="w-4 h-4" /> },
    { key: "billing", label: "Facturación", icon: <CreditCard className="w-4 h-4" /> },
    { key: "metrics", label: "Métricas globales", icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <div className="relative">
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div
          className="h-[520px] w-[85%] rounded-full opacity-30 blur-3xl"
          style={{ background: `radial-gradient(circle, ${BRAND} 0%, transparent 70%)` }}
        />
      </div>

      <div className="flex justify-center mb-5">
        <div
          className="inline-flex gap-1 p-1 rounded-full"
          style={{
            border: "1px solid rgba(237,237,240,0.10)",
            background: "rgba(237,237,240,0.03)",
          }}
        >
          <ToggleButton active={view === "client"} onClick={() => setView("client")}>
            Vista Clínica
          </ToggleButton>
          <ToggleButton active={view === "admin"} onClick={() => setView("admin")}>
            Vista Helfen Admin
          </ToggleButton>
        </div>
      </div>

      <div
        className="rounded-2xl overflow-hidden"
        style={{
          border: "1px solid rgba(237,237,240,0.12)",
          boxShadow:
            "0 30px 80px -30px rgba(117,59,189,0.45), 0 20px 50px -20px rgba(0,0,0,0.6)",
        }}
      >
        <div
          className="flex items-center gap-3 px-4 py-2.5"
          style={{ background: "#1F1F28" }}
        >
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
            <span className="h-3 w-3 rounded-full" style={{ background: "#FEBC2E" }} />
            <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
          </div>
          <div
            className="flex-1 rounded-md px-3 py-1 text-xs text-center truncate"
            style={{ background: "#2A2A35", color: "#8A8695" }}
          >
            🔒 helfen.app/dashboard
          </div>
          <div className="hidden sm:block w-[52px]" />
        </div>

        <div
          className="bg-white text-[#0F0F14]"
          style={{
            minHeight: 560,
            fontFamily:
              "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          {view === "client" ? (
            <AppShell
              subtitle="Clínica Dental Sonrisa"
              avatar="MM"
              navItems={clientNav}
              activeKey={clientTab}
              onSelect={(k) => setClientTab(k as ClientTab)}
            >
              {clientTab === "pipeline" && <PipelineView />}
              {clientTab === "conversations" && <ConversationsView />}
              {clientTab === "settings" && <SettingsView />}
            </AppShell>
          ) : (
            <AppShell
              subtitle="Panel Admin · Helfen"
              avatar="HF"
              navItems={adminNav}
              activeKey={adminTab}
              onSelect={(k) => setAdminTab(k as AdminTab)}
            >
              {adminTab === "clinics" && <ClinicsView />}
              {adminTab === "ai" && (
                <EmptyAdminView
                  title="Configuración de IA"
                  desc="Plantillas SOP base, overrides por clínica y ajuste fino del motor conversacional."
                />
              )}
              {adminTab === "billing" && (
                <EmptyAdminView
                  title="Facturación"
                  desc="Facturación recurrente y reportes de uso por clínica."
                />
              )}
              {adminTab === "metrics" && (
                <EmptyAdminView
                  title="Métricas globales"
                  desc="Leads, conversiones y uso de IA consolidados en toda la plataforma."
                />
              )}
            </AppShell>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
