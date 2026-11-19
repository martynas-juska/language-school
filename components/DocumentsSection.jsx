import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const cards = [
  {
    title: "CV ir Motyvacinio laiško paslaugos",
    text: "Padėsime Jums profesionaliai parengti gyvenimo aprašymą ir motyvacinį laišką, atitinkantį tarptautinius standartus ir išskiriantį Jus iš kitų kandidatų. Konsultuosime, kaip efektyviai pristatyti savo patirtį ir įgūdžius.",
    icon: (
      <>
        <path d="M8 4h12l6 6v18H8V4z" />
        <path d="M20 4v6h6" />
        <path d="M13 17h6M13 22h6" />
      </>
    ),
  },
  {
    title: "Medicinos Autorizacijų Tvirtinimas Norvegijoje",
    text: "Teikiame visapusišką pagalbą medicinos darbuotojams tvarkant ir tvirtinant dokumentus, reikalingus autorizacijai gauti Norvegijoje. Mūsų patirtis užtikrins sklandų procesą.",
    icon: (
      <>
        <path d="M16 4l10 4v6c0 7-4 12-10 14-6-2-10-7-10-14V8l10-4z" />
        <path d="M16 12v8M12 16h8" />
      </>
    ),
  },
  {
    title: "Lietuvių kalba Užsieniečiams",
    text: "Konsultuojame užsieniečius visais klausimais, susijusiais su lietuvių kalbos egzamino tvarka ir taisyklėmis, padedame suprasti reikalavimus ir pasirengti sėkmingai išlaikyti egzaminą.",
    icon: (
      <>
        <circle cx="16" cy="16" r="12" />
        <path d="M4 16h24M16 4a18 18 0 010 24M16 4a18 18 0 000 24" />
      </>
    ),
  },
];

export default function DocumentsSection() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>
        <SectionHeading eyebrow="Dokumentai" title="Dokumentų rengimas" center />

        <Reveal variant="stagger" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="glow-card group flex min-h-[340px] flex-col items-center justify-center p-8 text-center"
            >
              {/* Big centered icon */}
              <span className="icon-tile size-24 rounded-2xl">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {c.icon}
                </svg>
              </span>

              {/* Title */}
              <h3 className="mt-8 text-xl font-medium text-foreground">{c.title}</h3>

              {/* Text */}
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-body)]">
                {c.text}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}