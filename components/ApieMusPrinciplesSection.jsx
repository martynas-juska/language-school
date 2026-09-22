import Container from "@/components/Container";

const principles = [
  {
    number: "01",
    title: "Individualumas",
    text: "Prisitaikome prie Jūsų mokymosi tempo, stiliaus ir tikslų. Kiekvienas studentas turi skirtingą kelią, todėl mokymo procesas nėra standartizuotas.",
  },
  {
    number: "02",
    title: "Lankstumas",
    text: "Mokymasis vyksta internetu, todėl galite mokytis iš bet kurios pasaulio vietos ir lengvai derinti pamokas su savo kasdienybe.",
  },
  {
    number: "03",
    title: "Dėstytojai",
    text: "Mūsų komanda turi tarptautinės patirties ir yra gyvenusi šalyse, kurių kalbas moko. Kalbą perteikiame kartu su jos kultūriniu ir praktiniu kontekstu.",
  },
  {
    number: "04",
    title: "Rezultatai",
    text: "Orientuojamės į realią pažangą ir gebėjimą kalbą naudoti už pamokos ribų – darbe, kelionėse, studijose ar kasdieniame gyvenime.",
  },
];

export default function ApieMusPrinciplesSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-top)] py-20 lg:py-28">
      {/* subtle ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 top-1/3 h-[520px] w-[520px] rounded-full bg-[var(--accent)]/[0.025] blur-[150px]"
      />

      <Container>
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Kodėl Lertman?
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Mokymasis,
              <br />
              sukurtas aplink
              <br />
              <span className="text-[var(--accent)]">žmogų.</span>
            </h2>
          </div>

          <div className="max-w-lg lg:justify-self-end lg:pb-1">
            <p className="text-lg leading-relaxed text-[var(--text-body)]">
              Kuriame mokymo procesą, kuris prisitaiko prie žmogaus poreikių,
              tikslų ir gyvenimo ritmo – ne atvirkščiai.
            </p>
          </div>
        </div>

        {/* PRINCIPLES */}
        <div className="mt-16 border-t border-white/10 lg:mt-20">
          {principles.map((item) => (
            <div
              key={item.number}
              className="group relative border-b border-white/10 transition-colors duration-300"
            >
              {/* hover background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[var(--accent)]/[0.035] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative grid gap-5 py-8 sm:grid-cols-[60px_1fr] lg:grid-cols-[90px_0.85fr_1.15fr_40px] lg:items-center lg:gap-10 lg:py-10">
                {/* NUMBER */}
                <span className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
                  {item.number}
                </span>

                {/* TITLE */}
                <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-3xl lg:text-[2rem]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:col-start-2 sm:text-base lg:col-start-auto">
                  {item.text}
                </p>

                {/* ARROW */}
                <div className="hidden justify-end lg:flex">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent)]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8H13M9 4L13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-8 flex items-center gap-5">
          <span className="h-px w-10 bg-[var(--accent)]" />

          <p className="text-sm text-[var(--text-secondary)]">
            Ne standartinė programa. Individualus mokymosi kelias.
          </p>
        </div>
      </Container>
    </section>
  );
}