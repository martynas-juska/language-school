import Link from "next/link";
import Container from "@/components/Container";

const features = [
  {
    title: "Individualumas",
    text: "Prisitaikome prie Jūsų mokymosi tempo, stiliaus ir tikslų. Kiekvienas studentas – unikali istorija.",
    icon: (
      <path d="M16 8a4 4 0 100 8 4 4 0 000-8zM6 26a10 10 0 0120 0" />
    ),
  },
  {
    title: "Lankstumas",
    text: "Visi kursai vyksta online, suteikiant galimybę mokytis iš bet kurios pasaulio vietos ir taupyti laiką.",
    icon: (
      <>
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8v8l5 3" />
      </>
    ),
  },
  {
    title: "Dėstytojai",
    text: "Mūsų komanda – tai profesionalai su tarptautine patirtimi, gyvenę šalyse, kurių kalbas moko.",
    icon: (
      <>
        <path d="M4 12l12-6 12 6-12 6z" />
        <path d="M9 15v6c0 1 3 3 7 3s7-2 7-3v-6" />
      </>
    ),
  },
  {
    title: "Rezultatai",
    text: "Orientuojamės į apčiuopiamą Jūsų pažangą ir sėkmę, padedame pasiekti užsibrėžtų tikslų.",
    icon: (
      <>
        <path d="M4 26l7-10 5 5 8-13" />
        <path d="M20 8h4v4" />
      </>
    ),
  },
];

export default function WhyLertmanSection() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: text + button */}
        <div>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Kodėl Lertman?
          </h2>
          <p className="mt-6 leading-relaxed text-[var(--text-body)]">
            Pasirinkę Lertman, Jūs renkatės ne tik kalbos kursus, bet ir
            individualizuotą mokymosi patirtį, pritaikytą Jūsų unikaliems
            poreikiams ir tikslams. Mūsų mokymo procesas yra lankstus ir
            modernus, o pagrindinis dėmesys skiriamas Jūsų asmeninei pažangai.
          </p>
          <Link
            href="/kalbu-kursai"
            className="mt-8 inline-block rounded-[18px] bg-[var(--accent)] px-10 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-[3px] hover:bg-[var(--accent-hover)] hover:shadow-[0_12px_35px_var(--hero-glow)]"
          >
            Kalbu Kursai
          </Link>
        </div>

        {/* Right: 4 staggered cards */}
        <div className="grid grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[0_15px_60px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-1 ${
                i % 2 === 0 ? "lg:-translate-y-6" : "lg:translate-y-6"
              }`}
            >
              <div className="mb-4 inline-flex rounded-xl bg-[var(--accent)]/10 p-3">
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
                  {f.icon}
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-body)]">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}