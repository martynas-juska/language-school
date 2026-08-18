import Container from "@/components/Container";

export default function TranslationsSection() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: big vertical card */}
          <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-10 shadow-[0_15px_60px_rgba(0,0,0,0.35)]">
            <h3 className="text-2xl font-bold text-white">Professional Translations</h3>
            <p className="mt-4 leading-relaxed text-[var(--text-body)]">
              „Lertman“ vertimų biuras teikia aukštos kokybės vertimo paslaugas,
              užtikrinančias tikslumą ir konfidencialumą. Mūsų patyrusių vertėjų
              komanda dirba su įvairiomis kalbomis ir dokumentų tipais.
            </p>

            <p className="mt-8 font-semibold text-white">Vertimų tipai:</p>
            <ul className="mt-4 space-y-4 text-[var(--text-body)]">
              {[
                ["Teisiniai vertimai:", "Sutartys, teismo sprendimai, įstatymai ir kt."],
                ["Techniniai vertimai:", "Instrukcijos, aprašymai, specifikacijos."],
                ["Medicininiai vertimai:", "Išrašai, tyrimų rezultatai, medicininė literatūra."],
                ["Finansiniai vertimai:", "Apskaitos ataskaitos, auditų išvados, banko dokumentai."],
                ["Asmeninių dokumentų vertimas:", "Pasai, gimimo liudijimai, diplomai, pažymos ir kt."],
              ].map(([label, body]) => (
                <li key={label} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>
                    <span className="font-semibold text-white">{label} </span>
                    {body}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: two stacked horizontal cards */}
          <div className="grid gap-6">
            {/* Card 1: languages + big icon */}
            <div className="flex items-center gap-6 rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-8 shadow-[0_15px_60px_rgba(0,0,0,0.35)]">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">Verčiamos kalbos</h3>
                <p className="mt-3 leading-relaxed text-[var(--text-body)]">
                  Norvegų, Anglų, Lietuvių, Baltarusių, Ukrainiečių, Ispanų,
                  Rusų: Mūsų vertėjai profesionaliai verčia iš ir į šias kalbas.
                </p>
              </div>
              <span className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-[var(--accent)]/10 sm:flex">
                <svg width="52" height="52" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="16" cy="16" r="12" />
                  <path d="M4 16h24M16 4a18 18 0 010 24M16 4a18 18 0 000 24" />
                </svg>
              </span>
            </div>

            {/* Card 2: certification */}
            <div className="flex items-center gap-6 rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-8 shadow-[0_15px_60px_rgba(0,0,0,0.35)]">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">Tvirtinimas</h3>
                <p className="mt-3 leading-relaxed text-[var(--text-body)]">
                  Verčiamus dokumentus tvirtiname notariškai arba mūsų vertimo
                  biuro antspaudu, priklausomai nuo Jūsų poreikių ir reikalavimų.
                </p>
              </div>
              <span className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-[var(--accent)]/10 sm:flex">
                <svg width="52" height="52" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4l10 4v6c0 7-4 12-10 14-6-2-10-7-10-14V8l10-4z" />
                  <path d="M11 16l3.5 3.5L22 12" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}