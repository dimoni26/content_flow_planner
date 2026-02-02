export default function Home() {
  const stats = [
    { value: "120h/mes", label: "Horas ahorradas" },
    { value: "3 min", label: "Del draft al plan" },
    { value: "5x", label: "Rendimiento orgánico" },
  ];

  const features = [
    {
      title: "Mapeo técnico automático",
      description:
        "Descompone artículos largos en secciones, conceptos clave y ejemplos listos para convertir en contenido social.",
    },
    {
      title: "Hilos y posts multi-canal",
      description:
        "Genera threads para X/Twitter y posts para LinkedIn con la voz exacta de tu marca.",
    },
    {
      title: "Assets asociados por contexto",
      description:
        "Relaciona imágenes, gráficos y links con cada sección para que el contenido salga con los recursos correctos.",
    },
    {
      title: "Calendario inteligente",
      description:
        "Optimiza fechas y frecuencia de publicación según tu ventana de engagement y equipos disponibles.",
    },
    {
      title: "Control de calidad humano",
      description:
        "Cada salida incluye checklist técnico y puntos de revisión para garantizar precisión.",
    },
    {
      title: "Exportación directa",
      description:
        "Entrega todo listo para Typefully, Notion o cualquier stack interno con un solo clic.",
    },
  ];

  const flow = [
    {
      title: "Ingesta del borrador",
      description:
        "El agente analiza Markdown, identifica secciones y extrae assets.",
    },
    {
      title: "Núcleo técnico",
      description:
        "Sintetiza el valor técnico y lo traduce a narrativas por canal.",
    },
    {
      title: "Planificación",
      description:
        "Ordena la secuencia, define hooks y prepara cada pieza con su media.",
    },
    {
      title: "Distribución",
      description:
        "Programa, versiona y libera cada publicación con trazabilidad total.",
    },
  ];

  const modules = [
    "Draft Analyzer",
    "Thread Planner",
    "LinkedIn Planner",
    "Media Mapper",
    "Tone Guardian",
    "Scheduler Layer",
  ];

  const pricing = [
    {
      name: "Starter",
      price: "29",
      description: "Ideal para creators técnicos.",
      features: [
        "Hasta 8 piezas/mes",
        "1 workspace",
        "Plantillas base",
        "Export CSV",
      ],
    },
    {
      name: "Scale",
      price: "79",
      description: "Equipos de contenido en crecimiento.",
      features: [
        "Hasta 40 piezas/mes",
        "2 workspaces",
        "Integraciones API",
        "QA colaborativo",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Operaciones multi-equipo.",
      features: [
        "Piezas ilimitadas",
        "SLA dedicado",
        "Modelos privados",
        "Auditoría completa",
      ],
    },
  ];

  const faq = [
    {
      question: "¿El agente aprende de nuestro estilo?",
      answer:
        "Sí. Puedes cargar ejemplos y tono de marca para que el output se mantenga consistente.",
    },
    {
      question: "¿Cuánto tarda en generar un plan?",
      answer:
        "De 2 a 5 minutos según la longitud del borrador y la complejidad técnica.",
    },
    {
      question: "¿Puedo revisar antes de publicar?",
      answer:
        "Siempre. El flujo está diseñado para revisión humana antes de cualquier scheduler.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.25),_transparent_55%)]" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[32rem] w-[32rem] rounded-full bg-purple-500/25 blur-[160px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_top,_black,transparent_70%)]" />

      <header className="relative z-10">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <span className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-400 to-cyan-300" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-white">
                Content Planner Flow
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                AI Content Ops
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#producto" className="transition hover:text-white">
              Producto
            </a>
            <a href="#flujo" className="transition hover:text-white">
              Flujo
            </a>
            <a href="#tecnologia" className="transition hover:text-white">
              Tecnología
            </a>
            <a href="#precios" className="transition hover:text-white">
              Precios
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </div>
          <a
            href="#cta"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]"
          >
            Solicitar demo
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section
          id="producto"
          className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              AI Content OS
            </div>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              De borradores técnicos a campañas multi-canal en minutos.
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              Un agente de IA que analiza, planifica y programa contenido
              técnico con precisión quirúrgica. Diseñado para equipos que
              publican en serio.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#cta"
                className="rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5"
              >
                Empezar ahora
              </a>
              <a
                href="#flujo"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Ver flujo inteligente
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="font-display text-xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent opacity-70 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-purple-500/10 backdrop-blur">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Flow Runtime
              </div>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                <p className="font-display text-xl text-white">
                  Draft ➜ Plan ➜ Publish
                </p>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-xs text-slate-300">
                  <p className="text-cyan-300">
                    {"{ status: 'ready', queue: 6 }"}
                  </p>
                  <p className="mt-2">→ Hook: “IA que escribe como tu equipo”</p>
                  <p>→ Media: architecture-diagram.png</p>
                  <p>→ Slot: 2026-02-03T10:00Z</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {modules.map((module) => (
                    <span
                      key={module}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Integraciones listas
              </p>
              <p className="font-display mt-2 text-2xl text-white">
                Conecta tu stack en minutos.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Typefully", "Notion", "Slack", "OpenAI", "Firecrawl", "GDrive"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        <section
          id="flujo"
          className="mx-auto w-full max-w-6xl px-6 py-16"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Flujo inteligente
              </p>
              <h2 className="font-display mt-3 text-3xl text-white">
                Cada paso diseñado para contenido técnico de alto impacto.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400">
              Automatiza lo repetible y conserva el control humano donde importa:
              tono, precisión y timing.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {flow.map((step, index) => (
              <div
                key={step.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1"
              >
                <div className="absolute -inset-px rounded-2xl border border-transparent bg-gradient-to-r from-purple-500/30 to-cyan-400/30 opacity-0 blur-sm transition group-hover:opacity-100" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Paso 0{index + 1}
                  </p>
                  <h3 className="font-display mt-3 text-xl text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="tecnologia"
          className="mx-auto w-full max-w-6xl px-6 py-16"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Arquitectura
              </p>
              <h3 className="font-display mt-4 text-2xl text-white">
                Orquestación multi-agente con guardrails.
              </h3>
              <p className="mt-4 text-sm text-slate-300">
                Cada módulo opera con objetivos claros y validaciones técnicas.
                El sistema asegura coherencia semántica, consistencia de marca y
                trazabilidad de cada decisión.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>• Modelos especializados por tarea</li>
                <li>• Observabilidad con métricas de precisión</li>
                <li>• Versionado de drafts y campañas</li>
              </ul>
            </div>
            <div className="grid gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <h4 className="font-display text-lg text-white">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="precios"
          className="mx-auto w-full max-w-6xl px-6 py-16"
        >
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Precios flexibles
            </p>
            <h2 className="font-display mt-3 text-3xl text-white">
              Escala con tu equipo.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  {tier.name}
                </p>
                <div className="mt-4 text-4xl font-semibold text-white">
                  {tier.price === "Custom" ? (
                    "Custom"
                  ) : (
                    <>
                      ${tier.price}
                      <span className="text-base text-slate-400">/mes</span>
                    </>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {tier.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <button className="mt-8 w-full rounded-full border border-white/20 py-2 text-sm font-semibold text-white transition hover:border-white/50">
                  Elegir plan
                </button>
              </div>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto w-full max-w-6xl px-6 py-16"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Preguntas clave
              </p>
              <h2 className="font-display mt-3 text-3xl text-white">
                Transparencia total para lanzar en producción.
              </h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {faq.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-display text-lg text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="cta"
          className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 p-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-200">
              Ready to launch
            </p>
            <h2 className="font-display mt-4 text-3xl text-white">
              Activa tu agente de contenido hoy.
            </h2>
            <p className="mt-3 text-sm text-slate-200">
              Implementación rápida, control total y un roadmap diseñado para
              equipos técnicos exigentes.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@contentplanner.ai"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950"
              >
                Agenda una demo
              </a>
              <a
                href="#producto"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
              >
                Explorar producto
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-400">
            © 2026 Content Planner Flow. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="transition hover:text-white">
              Privacidad
            </a>
            <a href="#" className="transition hover:text-white">
              Términos
            </a>
            <a href="#" className="transition hover:text-white">
              Soporte
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
