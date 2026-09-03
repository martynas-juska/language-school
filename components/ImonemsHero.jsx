import Link from "next/link";
import Container from "@/components/Container";

export default function ImonemsHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] pt-40 pb-28">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/10 blur-[120px]"
      />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          {/* Left */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Verslui ir organizacijoms
            </span>

            <h1 className="mt-6 max-w-2xl text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Kursai skirti
              <br />
              <span className="text-[var(--accent)]">Įmonėms</span>
            </h1>
          </div>

          {/* Right */}
          <div className="lg:pt-8">
            <div className="relative">
              {/* Quote mark */}
              <span
                aria-hidden="true"
                className="absolute -left-2 -top-8 text-7xl font-serif leading-none text-[var(--accent)]/20"
              >
                “
              </span>

              <p className="relative max-w-2xl text-xl leading-relaxed text-[var(--text-body)] sm:text-2xl">
                Lertman siūlo Jūsų įmonės ar organizacijos nariams pritaikytus
                kalbų mokymo sprendimus, padėsiančius sustiprinti komandos
                kompetencijas ir praplėsti verslo galimybes.
              </p>
            </div>

            <Link
              href="#contact"
              className="group mt-10 inline-flex items-center gap-4 text-base font-semibold text-white"
            >
              <span className="relative">
                Susisiekti
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-0" />
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)]/50 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[var(--accent)]">
                <svg
                  width="16"
                  height="16"
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
            </Link>
          </div>
        </div>

        {/* Bottom visual divider */}
        <div className="mt-24 flex items-center gap-5">
          <span className="h-px flex-1 bg-white/10" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            Kalbų mokymai verslui
          </span>

          <span className="h-px flex-1 bg-white/10" />
        </div>
      </Container>
    </section>
  );
}