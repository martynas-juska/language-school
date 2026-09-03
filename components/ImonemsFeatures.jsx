import Container from "@/components/Container";

const features = [
  {
    number: "01",
    title: "Individualumas",
    text: "Mokymo procesą organizuojame pagal individualius įmonės ir jos darbuotojų poreikius. Programą pritaikome pagal keliamus profesinius tikslus ir darbuotojų pasirengimo lygį.",
    icon: (
      <>
        <circle cx="16" cy="10" r="4" />
        <path d="M7 27a9 9 0 0118 0" />
        <path d="M23 8a4 4 0 010 7" />
        <path d="M26 19a7 7 0 013 6" />
      </>
    ),
  },
  {
    number: "02",
    title: "Lankstumas",
    text: "Kursai vyksta internetu, todėl darbuotojai gali mokytis iš bet kurios vietos. Mokymą lengvai pritaikome prie įmonės darbo ritmo ir užimtumo.",
    icon: (
      <>
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8v8l5 3" />
      </>
    ),
  },
  {
    number: "03",
    title: "Dėstytojai",
    text: "Mūsų komanda – profesionalai su tarptautine patirtimi, gyvenę šalyse, kurių kalbas moko. Jie padeda ne tik teorinėmis žiniomis, bet ir praktiniais patarimais.",
    icon: (
      <>
        <path d="M4 12l12-6 12 6-12 6z" />
        <path d="M9 15v6c0 1 3 3 7 3s7-2 7-3v-6" />
        <path d="M28 13v7" />
      </>
    ),
  },
  {
    number: "04",
    title: "Rezultatai",
    text: "Orientuojamės į realią darbuotojų pažangą ir praktinį kalbos panaudojimą. Modernūs mokymo metodai padeda mokytis kokybiškai ir efektyviai.",
    icon: (
      <>
        <path d="M5 25l7-8 5 5 10-13" />
        <path d="M21 9h6v6" />
      </>
    ),
  },
];

function Feature({ feature }) {
  return (
    <article className="group relative">
      {/* Number */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold tracking-[0.16em] text-[var(--accent)]">
          {feature.number}
        </span>

        <span className="h-px w-10 bg-[var(--accent)]/30 transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--accent)]" />
      </div>

      {/* Icon */}
      <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)]/10 transition-transform duration-300 group-hover:-translate-y-1">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {feature.icon}
        </svg>
      </div>

      {/* Content */}
      <h3 className="mt-7 text-2xl font-bold tracking-tight text-white">
        {feature.title}
      </h3>

      <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--text-body)]">
        {feature.text}
      </p>
    </article>
  );
}

export default function ImonemsFeatures() {
  return (
    <section className="bg-[var(--bg)] py-28">
      <Container>
        {/* Section heading */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Kodėl verta rinktis „Lertman“?
          </span>

          <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Kalbų mokymai,
            <br />
            pritaikyti verslui.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Pasirinkę „Lertman“, renkatės ne tik kalbos kursus, bet ir
            individualizuotą mokymosi patirtį, pritaikytą Jūsų įmonės
            poreikiams ir tikslams.
          </p>
        </div>

        {/* Features */}
        <div className="mt-20 grid gap-x-16 gap-y-20 md:grid-cols-2 lg:gap-x-24 lg:gap-y-24">
          {features.map((feature) => (
            <Feature key={feature.number} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}