import Image from "next/image";
import Container from "@/components/Container";

export default function ApieMusHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-top)] lg:h-[calc(100svh-90px)] lg:min-h-[620px]">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-0 h-[520px] w-[520px] rounded-full bg-[var(--accent)]/[0.07] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 h-[380px] w-[380px] rounded-full bg-[var(--accent)]/[0.025] blur-[120px]"
      />

      <Container>
        <div className="grid gap-14 py-16 lg:h-[calc(100svh-90px)] lg:min-h-[620px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20 lg:py-8">
          {/* LEFT */}
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Apie Lertman
            </span>

            <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
              Kalba –
              <br />
              daugiau nei
              <br />
              <span className="text-[var(--accent)]">žodžiai.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[var(--text-body)] lg:text-[1.15rem]">
              „Lertman“ padeda žmonėms ne tik mokytis kalbų, bet ir drąsiau
              siekti asmeninių bei profesinių tikslų.
            </p>

            {/* Philosophy */}
            <div className="mt-9 grid max-w-lg grid-cols-[3px_1fr] gap-5">
              <span className="h-full rounded-full bg-[var(--accent)]" />

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Mūsų požiūris
                </span>

                <p className="mt-2 text-base font-medium leading-relaxed text-white/90">
                  Mokymasis turi prisitaikyti prie žmogaus, o ne žmogus prie
                  standartinės programos.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-end">
            <div className="relative w-full max-w-[610px] overflow-hidden rounded-[2rem] border border-white/[0.08] lg:h-[min(68svh,590px)] lg:min-h-[470px]">
              <Image
                src="/images/apie-mus/hero.jpg"
                alt="Lertman kalbų mokykla"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              {/* Image treatment */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101C]/70 via-[#07101C]/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                <div className="flex items-end justify-between gap-8 border-t border-white/20 pt-5">
                  <p className="max-w-sm text-sm leading-relaxed text-white/80">
                    Mokymasis, paremtas žmogumi, jo tikslais ir realiu gyvenimu.
                  </p>

                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                    Lertman
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}