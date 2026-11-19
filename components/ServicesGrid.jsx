import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: "Dokumentų rengimas",
    text: "Padedame parengti ir sutvarkyti dokumentus darbui, studijoms ar gyvenimui užsienyje, įskaitant medicinos autorizacijas Norvegijoje.",
    icon: (
      <>
        <path d="M8 4h12l6 6v18a0 0 0 010 0H8a0 0 0 010 0V4z" />
        <path d="M20 4v6h6" />
      </>
    ),
  },
  {
    title: "Profesionalūs vertimai",
    text: "Aukštos kokybės vertimai – teisiniai, techniniai, medicininiai, finansiniai ir asmeninių dokumentų. Notarinis arba biuro tvirtinimas.",
    icon: (
      <>
        <circle cx="16" cy="16" r="12" />
        <path d="M4 16h24M16 4a18 18 0 010 24M16 4a18 18 0 000 24" />
      </>
    ),
  },
  {
    title: "Korepetitoriaus paslaugos",
    text: "Individualios pamokos, pritaikytos Jūsų poreikiams ir mokymosi tempui – žinių gilinimui, egzaminų ruošimui ar asmeniniams tikslams.",
    icon: (
      <>
        <circle cx="16" cy="11" r="4" />
        <path d="M8 26a8 8 0 0116 0" />
      </>
    ),
  },
  {
    title: "Dėstytojų kvalifikacijos kėlimas",
    text: "„Mokymo Meistriškumo Programa“ – modernios pedagoginės technikos, diferencijuotas mokymas ir įtraukiančio mokymosi proceso kūrimas.",
    icon: (
      <>
        <path d="M4 12l12-6 12 6-12 6z" />
        <path d="M9 15v6c0 1 3 3 7 3s7-2 7-3v-6" />
      </>
    ),
  },
  {
    title: "Tekstų rašymas",
    text: "Profesionalus copywriting lietuvių ir norvegų kalbomis – reklaminiai tekstai, svetainių turinys, tinklaraščiai ir socialinių tinklų turinys.",
    icon: (
      <>
        <path d="M6 26l2-6L22 6l4 4L12 24l-6 2z" />
        <path d="M18 10l4 4" />
      </>
    ),
  },
  {
    title: "Individualios paslaugos",
    text: "Esame lankstūs ir prisitaikome prie Jūsų specifinių poreikių – susisiekite ir aptarsime Jūsų individualų projektą.",
    icon: (
      <>
        <path d="M16 4l3.5 7 7.5 1-5.5 5.5L22 25l-6-3.5L10 25l1-7.5L5 12l7.5-1z" />
      </>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>
        <SectionHeading eyebrow="Visos paslaugos" title="Kuo galime padėti" center />
        <Reveal variant="stagger" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="glow-card group flex min-h-[260px] flex-col items-center justify-center p-8 text-center"
            >
              {/* Icon on top */}
              <span className="icon-tile size-16 rounded-2xl">
                <svg
                  width="32"
                  height="32"
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

              {/* H3 in the middle */}
              <h3 className="mt-6 text-xl font-medium text-foreground">{s.title}</h3>

              {/* Text under */}
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)]">
                {s.text}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}