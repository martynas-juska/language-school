import Link from "next/link";
import Container from "@/components/Container";

const stats = [
  {
    value: "6+",
    label: "paslaugų sričių",
    icon: (
      <>
        <rect x="4" y="8" width="24" height="18" rx="2" />
        <path d="M11 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
      </>
    ),
  },
  {
    value: "7",
    label: "vertimų kalbų",
    icon: (
      <>
        <circle cx="16" cy="16" r="12" />
        <path d="M4 16h24M16 4a18 18 0 010 24M16 4a18 18 0 000 24" />
      </>
    ),
  },
  {
    value: "100%",
    label: "individualus dėmesys",
    icon: (
      <>
        <circle cx="16" cy="11" r="4" />
        <path d="M8 26a8 8 0 0116 0" />
      </>
    ),
  },
];

export default function PaslaugosHero() {
  return (
    <section className="bg-[var(--bg)] pt-40 pb-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: heading + button */}
        <div>
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Paslaugos
          </h1>
          <Link
            href="#contact"
            className="mt-10 inline-block rounded-[18px] bg-[var(--accent)] px-10 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-[3px] hover:bg-[var(--accent-hover)] hover:shadow-[0_12px_35px_var(--hero-glow)]"
          >
            Susisiekti
          </Link>
        </div>

        {/* Right: paragraph + icon stats */}
        <div>
          <p className="text-lg leading-relaxed text-[var(--text-body)]">
            Mūsų mokykla siūlo platų kalbų kursų pasirinkimą, pritaikytą įvairiems
            poreikiams ir lygiams. Mūsų patyrę dėstytojai padės jums pasiekti savo
            tikslus.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)]/10">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </span>
                <span className="mt-4 text-2xl font-extrabold text-white">
                  {s.value}
                </span>
                <span className="mt-1 text-sm text-[var(--text-secondary)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}