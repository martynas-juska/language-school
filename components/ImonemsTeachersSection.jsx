import Container from "@/components/Container";
import { Reveal } from "@/components/Reveal";

const teachers = [
  {
    number: "01",
    language: "",
    title: "Kalba iš pirmų lūpų",
    text: "Dėstytojai, gyvenę ir dirbę užsienio šalyse, padeda suprasti ne tik kalbos taisykles, bet ir realų jos naudojimą.",
  },
  {
    number: "02",
    language: "",
    title: "Kalba kontekste",
    text: "Tarptautinė patirtis leidžia mokymą papildyti praktiniais patarimais ir kultūriniu kontekstu.",
  },
  {
    number: "03",
    language: "",
    title: "Ne tik teorija",
    text: "Pamokose siekiame, kad kalbos žinios būtų pritaikomos realiose darbo ir kasdienio bendravimo situacijose.",
  },
];

export default function ImonemsTeachersSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-top)] py-32 lg:py-40">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/3 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/8 blur-[140px]"
      />

      <Container>
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <span className="eyebrow">
              Mūsų žmonės
            </span>

            <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Kalbos moko
              <br />
              <span className="text-[var(--accent)]">
                žmonės, kurie ją pažįsta.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:pb-2">
            <p className="max-w-xl text-lg leading-relaxed text-[var(--text-body)] sm:text-xl">
              „Lertman“ komandoje dirba patyrę dėstytojai, gyvenę ir dirbę
              šalyse, kurių kalbas jie moko. Todėl mokymasis neapsiriboja
              vien teorinėmis žiniomis.
            </p>
          </div>
        </div>

        {/* Large statement */}
        <div className="mt-24 border-y border-border py-14 lg:mt-32 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-4xl text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Tarptautinė patirtis leidžia kalbą mokytis{" "}
              <span className="text-[var(--accent)]">
                ne tik iš vadovėlio,
              </span>{" "}
              bet ir iš realaus gyvenimo.
            </p>

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
              Patirtis · Kontekstas · Praktika
            </span>
          </div>
        </div>

        {/* Teacher expertise */}
        <div className="mt-20 lg:mt-24">
          <div className="mb-8 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Dėstytojų patirtis
            </span>

            <span className="hidden text-xs text-[var(--text-secondary)] sm:block">
              01 — 03
            </span>
          </div>

          <Reveal variant="stagger" className="grid gap-5 md:grid-cols-3">
            {teachers.map((teacher) => (
              <article
                key={teacher.number}
                className="glow-card group relative overflow-hidden px-6 py-8 md:min-h-[300px] md:px-8 md:py-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.18em] text-[var(--accent)]">
                    {teacher.number}
                  </span>

                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                    {teacher.language}
                  </span>
                </div>

                <div className="mt-12">
                  <h3 className="max-w-xs text-2xl font-medium tracking-tight text-foreground sm:text-[1.65rem]">
                    {teacher.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-base leading-relaxed text-[var(--text-secondary)]">
                    {teacher.text}
                  </p>
                </div>

                {/* Bottom accent */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}