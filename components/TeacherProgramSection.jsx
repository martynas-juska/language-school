import Container from "@/components/Container";

const leftFeatures = [
  {
    title: "Individualumas",
    text: "Suaugusiųjų mokymo organizavimo ypatumus.",
    icon: (
      <>
        <circle cx="16" cy="11" r="4" />
        <path d="M8 26a8 8 0 0116 0" />
      </>
    ),
  },
  {
    title: "Stilių Įvairovė",
    text: "Įvairius mokymosi stilius ir kaip juos efektyviai panaudoti.",
    icon: (
      <>
        <path d="M6 26l2-6L22 6l4 4L12 24l-6 2z" />
        <path d="M18 10l4 4" />
      </>
    ),
  },
];

const rightFeatures = [
  {
    title: "Lankstumas",
    text: "Diferencijuotą mokymą ir individualų prisitaikymą prie mokinio poreikių.",
    icon: (
      <>
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8v8l5 3" />
      </>
    ),
  },
  {
    title: "Moderni Patirtis",
    text: "Modernias pedagogines technikas ir geriausią praktiką.",
    icon: (
      <>
        <path d="M4 12l12-6 12 6-12 6z" />
        <path d="M9 15v6c0 1 3 3 7 3s7-2 7-3v-6" />
      </>
    ),
  },
];

function Feature({ f }) {
  return (
    <div className="p-2">
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10">
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {f.icon}
        </svg>
      </span>
      <h3 className="mb-2 text-lg font-bold text-white">{f.title}</h3>
      <p className="text-sm leading-relaxed text-[var(--text-body)]">{f.text}</p>
    </div>
  );
}

export default function TeacherProgramSection() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>
        <h2 className="text-center text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Dėstytojų Kvalifikacijos Kėlimas:
          <br />
          <span className="text-[var(--accent)]">„Mokymo Meistriškumo Programa“</span>
        </h2>

        {/* 3-column: left | center icon | right */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-14">
          {/* Left column */}
          <div className="flex flex-col gap-10 lg:text-right">
            {leftFeatures.map((f) => (
              <Feature key={f.title} f={f} />
            ))}
          </div>

          {/* Center: big vertical icon */}
          <div className="flex aspect-[9/16] w-full max-w-[220px] items-center justify-center">
            <svg
              width="140"
              height="140"
              viewBox="0 0 32 32"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12l12-6 12 6-12 6z" />
              <path d="M9 15v6c0 1 3 3 7 3s7-2 7-3v-6" />
              <path d="M28 12v7" />
              <circle cx="28" cy="21" r="1.5" />
            </svg>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-10">
            {rightFeatures.map((f) => (
              <Feature key={f.title} f={f} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}