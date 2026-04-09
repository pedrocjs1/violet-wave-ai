const Tech = () => {
  const technologies = [
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Cache" },
    { name: "Anthropic Claude", category: "AI" },
    { name: "Meta", category: "Partner" },
    { name: "WhatsApp API", category: "Messaging" },
    { name: "Google Cloud", category: "Cloud" },
    { name: "Mercado Pago", category: "Payments" },
  ];

  return (
    <section id="tecnologias" className="py-24 bg-accent-navy/30 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-purple/10 border border-violet-purple/30 text-violet-purple text-sm font-medium mb-4">
            Stack tecnológico
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Tecnologías que usamos
          </h2>
          <p className="text-lg text-text-secondary">
            Las mejores herramientas del mercado para construir software robusto y escalable.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative px-5 py-3 rounded-xl bg-dark-navy/80 border border-violet-purple/10 hover:border-violet-purple/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-purple/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-purple group-hover:scale-125 transition-transform" />
                <div>
                  <div className="text-white font-semibold">{tech.name}</div>
                  <div className="text-xs text-text-secondary">{tech.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
