import Link from "next/link";
import Container from "@/components/Container";
import { ArrowRight } from "@/components/Icons";

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
    <section className="relative isolate overflow-hidden bg-[var(--bg)] pt-32 pb-24 lg:pt-40">
      <div aria-hidden="true" className="hero-backdrop pointer-events-none absolute inset-0 -z-10" />
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: heading + button */}
        <div>
          <h1 className="rv-load text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl" style={{ fontStretch: "118%" }}>
            Paslaugos
          </h1>
          <Link
            href="#contact"
            className="mt-10 btn-primary text-base"
          >
            Susisiekti
            <ArrowRight />
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
                <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
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
                <span className="mt-4 text-2xl font-semibold text-foreground">
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