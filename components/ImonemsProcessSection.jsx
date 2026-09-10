import Container from "@/components/Container";

const process = [
  {
    number: "01",
    title: "Išsiaiškiname",
    text: "Pirmiausia išsiaiškiname Jūsų įmonės tikslus, darbuotojų poreikius ir esamą kalbos lygį.",
  },
  {
    number: "02",
    title: "Sudarome programą",
    text: "Pagal surinktą informaciją pritaikome mokymo programą, atitinkančią Jūsų komandos situaciją.",
  },
  {
    number: "03",
    title: "Mokomės",
    text: "Pamokos vyksta internetu, todėl darbuotojai gali mokytis iš bet kurios vietos ir lengvai derinti mokymąsi su darbu.",
  },
  {
    number: "04",
    title: "Siekiame rezultato",
    text: "Stebime mokymosi procesą ir pažangą, o programą prireikus koreguojame pagal besikeičiančius poreikius.",
  },
];

export default function ImonemsProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[var(--bg-top)] py-32 lg:py-40"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Kaip tai vyksta?
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Paprastas procesas.
              <br />
              <span className="text-[var(--accent)]">
                Aiškus rezultatas.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:pb-2">
            <p className="max-w-xl text-lg leading-relaxed text-[var(--text-body)] sm:text-xl">
              Nuo pirmojo pokalbio iki realios darbuotojų pažangos – visą
              mokymo procesą pritaikome prie Jūsų įmonės.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="mt-24 lg:mt-32">
          {process.map((item, index) => (
            <div
              key={item.number}
              className="group relative grid border-t border-white/10 py-10 transition-colors duration-300 hover:bg-white/[0.015] sm:py-12 lg:grid-cols-[120px_1fr_1.2fr] lg:items-center lg:gap-12 lg:py-14"
            >
              {/* Number */}
              <div className="flex items-center justify-between lg:block">
                <span className="text-sm font-bold tracking-[0.18em] text-[var(--accent)]">
                  {item.number}
                </span>

                {/* Mobile arrow */}
                <span className="text-xl text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)] lg:hidden">
                  →
                </span>
              </div>

              {/* Title */}
              <div className="mt-7 lg:mt-0">
                <h3 className="text-3xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="mt-5 flex items-center justify-between gap-8 lg:mt-0">
                <p className="max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                  {item.text}
                </p>

                {/* Desktop arrow */}
                <span className="hidden shrink-0 text-2xl text-white/15 transition-all duration-300 group-hover:translate-x-2 group-hover:text-[var(--accent)] lg:block">
                  →
                </span>
              </div>

              {/* Hover accent */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}

          {/* Closing line */}
          <div className="flex items-center gap-5 border-t border-white/10 pt-10">
            <span className="h-px w-12 bg-[var(--accent)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
              Jūsų tikslas → mūsų mokymo procesas
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}