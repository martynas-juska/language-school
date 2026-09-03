import Container from "@/components/Container";

const steps = [
  {
    number: "01",
    title: "Įmonės tikslai",
  },
  {
    number: "02",
    title: "Komandos poreikiai",
  },
  {
    number: "03",
    title: "Pritaikyta programa",
  },
  {
    number: "04",
    title: "Reali pažanga",
  },
];

export default function ImonemsSolutionSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-top)] py-32 lg:py-40">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--accent)]/8 blur-[140px]"
      />

      <Container>
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Mūsų požiūris
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ne kursai.
              <br />
              <span className="text-[var(--accent)]">
                Sprendimas jūsų komandai.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:pb-2">
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-body)] sm:text-xl">
              Kiekviena įmonė yra skirtinga. Todėl mokymo procesą pradedame ne
              nuo standartinės programos, o nuo jūsų komandos poreikių,
              tikslų ir situacijos.
            </p>
          </div>
        </div>

        {/* Main statement */}
        <div className="relative mt-28 border-y border-white/10 py-16 lg:mt-36 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-5xl text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Kalbos mokymasis turi būti{" "}
              <span className="text-[var(--accent)]">
                pritaikytas žmonėms,
              </span>{" "}
              o ne žmonės – pritaikyti kursui.
            </p>

            {/* Interactive button */}
            <button
              type="button"
              aria-label="Sužinoti daugiau apie mokymo procesą"
              className="group flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-transparent text-[var(--accent)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#07101C] hover:shadow-[0_0_30px_rgba(78,159,166,0.25)]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M4 10H16M11 5L16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Process */}
        <div className="mt-20">
          <div className="mb-10 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Nuo poreikio iki rezultato
            </span>

            <span className="hidden text-xs text-[var(--text-secondary)] sm:block">
              Lertman mokymo procesas
            </span>
          </div>

          <div className="grid border-l border-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:border-l-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative border-b border-white/10 px-6 py-8 transition-colors duration-300 hover:bg-white/[0.025] sm:min-h-[180px] sm:border-r sm:py-10 lg:border-b-0 lg:border-l lg:px-8 lg:first:border-l-0 lg:last:border-r"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-px top-1/2 hidden h-px w-8 translate-x-full bg-[var(--accent)]/30 lg:block"
                  />
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-[var(--accent)]">
                    {step.number}
                  </span>

                  <span className="text-white/20 transition-colors duration-300 group-hover:text-[var(--accent)]">
                    →
                  </span>
                </div>

                <h3 className="mt-12 max-w-[180px] text-xl font-bold leading-tight text-white sm:text-2xl">
                  {step.title}
                </h3>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
