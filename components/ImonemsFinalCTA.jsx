import Link from "next/link";
import Container from "@/components/Container";

export default function ImonemsFinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[var(--bg-top)] py-28 lg:py-36"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--accent)]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-60 left-1/4 h-[440px] w-[440px] rounded-full bg-[var(--accent)]/5 blur-[140px]"
      />

      <Container>
        {/* Top label */}
        <div className="mb-16 flex items-center gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Kitas žingsnis
          </span>

          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-24">
          {/* Main message */}
          <div>
            <h2 className="max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Pasikalbėkime
              <br />
              apie jūsų{" "}
              <span className="text-[var(--accent)]">komandą.</span>
            </h2>
          </div>

          {/* Copy + CTA */}
          <div className="lg:pb-2">
            <p className="max-w-xl text-lg leading-relaxed text-[var(--text-body)] sm:text-xl">
              Papasakokite, kokių kalbinių kompetencijų reikia jūsų komandai.
              Kartu rasime tinkamiausią mokymo sprendimą.
            </p>

            <Link
              href="/kontaktai"
              className="group mt-9 inline-flex items-center gap-5"
            >
              <span className="text-base font-semibold text-white">
                Pradėti pokalbį
              </span>

              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent)]/50 text-[var(--accent)] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[#07101C] group-hover:shadow-[0_0_30px_rgba(78,159,166,0.25)]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M4 10H16M11 5L16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom detail */}
        <div className="mt-24 border-t border-white/10 pt-8 lg:mt-32">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[var(--text-secondary)]">
              Individualūs kalbų mokymo sprendimai įmonėms.
            </p>

            <span className="text-sm font-medium text-white/40">
              Lertman
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
