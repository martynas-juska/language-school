import Container from "@/components/Container";

export default function ApieMusStorySection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-top)] py-24 lg:py-32">
      <Container>
        {/* Section label */}
        <div className="flex items-center gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Kas mes esame
          </span>

          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Main editorial statement */}
        <div className="mt-14 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24">
          <div>
            <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Kalbos mokymasis
              <br />
              turi prisitaikyti
              <br />
              <span className="text-[var(--accent)]">prie žmogaus.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:pb-2">
            <p className="text-lg leading-relaxed text-[var(--text-body)] sm:text-xl">
              „Lertman“ yra daugiau nei kalbų kursai. Kuriame mokymosi patirtį,
              paremtą žmogaus tikslais, tempu ir individualiais poreikiais.
            </p>

            <p className="mt-6 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Mums svarbu ne tik perduoti žinias, bet ir padėti jas pritaikyti
              realiame gyvenime – darbe, kelionėse, studijose ar kuriant naujas
              galimybes užsienyje.
            </p>
          </div>
        </div>

        {/* Supporting principles */}
        <div className="mt-20 grid border-t border-white/10 sm:grid-cols-3 lg:mt-28">
          <div className="border-b border-white/10 py-7 sm:border-b-0 sm:border-r sm:pr-8">
            <span className="text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
              01
            </span>

            <p className="mt-4 text-lg font-semibold text-white">
              Žmogus pirmiausia
            </p>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
              Mokymo procesas prasideda nuo individualių tikslų ir poreikių.
            </p>
          </div>

          <div className="border-b border-white/10 py-7 sm:border-b-0 sm:border-r sm:px-8">
            <span className="text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
              02
            </span>

            <p className="mt-4 text-lg font-semibold text-white">
              Kalba gyvenimui
            </p>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
              Mokomės tam, kad kalbą būtų galima drąsiai naudoti už pamokos ribų.
            </p>
          </div>

          <div className="py-7 sm:pl-8">
            <span className="text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
              03
            </span>

            <p className="mt-4 text-lg font-semibold text-white">
              Reali pažanga
            </p>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
              Svarbiausia ne išklausyta programa, o pasiektas žmogaus rezultatas.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}