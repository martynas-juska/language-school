import Container from "@/components/Container";

const benefits = [
  {
    number: "1",
    title: "Dviguba kalbos kompetencija",
    text: "Turime specialistų, gebančių kurti tekstus tiek lietuvių, tiek norvegų kalbomis, užtikrinant aukštą kokybę abiem kryptimis.",
  },
  {
    number: "2",
    title: "Orientacija į Jūsų tikslus",
    text: "Kiekvienas tekstas kuriamas atsižvelgiant į Jūsų verslo tikslus ir tikslinę auditoriją.",
  },
  {
    number: "3",
    title: "Patirtis verslo kontekste",
    text: "Mūsų žinios apie įmonių poreikius ir rinkodaros ypatumus leidžia kurti efektyvų turinį.",
  },
];

function DocumentIcon() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Soft glow */}
      <div className="absolute h-72 w-72 rounded-full bg-[var(--hero-glow)] blur-3xl" />

      <svg
        viewBox="0 0 320 380"
        fill="none"
        className="relative w-full max-w-[360px]"
        aria-hidden="true"
      >
        {/* Subtle outer circle */}
        <circle
          cx="150"
          cy="190"
          r="142"
          stroke="var(--accent)"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        {/* Document */}
        <path
          d="M75 55
             H190
             L245 110
             V300
             C245 314 234 325 220 325
             H75
             C61 325 50 314 50 300
             V80
             C50 66 61 55 75 55Z"
          stroke="var(--accent)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Folded corner */}
        <path
          d="M190 55 V105 C190 112 196 118 203 118 H245"
          stroke="var(--accent)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* T */}
        <path
          d="M92 118 H150"
          stroke="var(--accent)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          d="M121 118 V175"
          stroke="var(--accent)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          d="M102 175 H140"
          stroke="var(--accent)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Text lines */}
        <path
          d="M92 205 H200"
          stroke="var(--accent)"
          strokeOpacity="0.8"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <path
          d="M92 230 H185"
          stroke="var(--accent)"
          strokeOpacity="0.65"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <path
          d="M92 255 H165"
          stroke="var(--accent)"
          strokeOpacity="0.5"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Signature */}
        <path
          d="M92 282
             C105 260 111 275 118 286
             C125 297 137 280 145 285
             C153 290 160 290 170 283"
          stroke="var(--accent)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Pencil */}
        <g transform="rotate(38 220 245)">
          {/* Pencil body */}
          <rect
            x="190"
            y="145"
            width="42"
            height="150"
            rx="7"
            stroke="var(--accent)"
            strokeWidth="7"
          />

          {/* Pencil tip */}
          <path
            d="M190 295 L211 330 L232 295"
            stroke="var(--accent)"
            strokeWidth="7"
            strokeLinejoin="round"
          />

          {/* Pencil tip line */}
          <path
            d="M200 310 L211 330 L222 310"
            stroke="var(--accent)"
            strokeWidth="4"
          />

          {/* Pencil top */}
          <path
            d="M190 170 H232"
            stroke="var(--accent)"
            strokeWidth="7"
          />

          {/* Pencil center */}
          <path
            d="M190 250 H232"
            stroke="var(--accent)"
            strokeOpacity="0.45"
            strokeWidth="4"
          />
        </g>
      </svg>
    </div>
  );
}

function Benefit({ benefit, isLast }) {
  return (
    <div className="relative flex gap-6">
      {/* Number + vertical line */}
      <div className="relative flex shrink-0 flex-col items-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)] text-lg font-semibold text-white">
          {benefit.number}
        </span>

        {!isLast && (
          <span className="mt-2 h-full w-px bg-[var(--accent)]/35" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
          {benefit.title}
        </h3>

        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--text-body)]">
          {benefit.text}
        </p>
      </div>
    </div>
  );
}

export default function TekstuRasymasWhySection() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left: giant illustration */}
          <div className="flex min-h-[500px] items-center justify-center lg:min-h-[620px]">
            <DocumentIcon />
          </div>

          {/* Right: heading + benefits */}
          <div>
            <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Kodėl verta rinktis „Lertman“ tekstų rašymo paslaugas?
            </h2>

            <div className="mt-14">
              {benefits.map((benefit, index) => (
                <Benefit
                  key={benefit.number}
                  benefit={benefit}
                  isLast={index === benefits.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}