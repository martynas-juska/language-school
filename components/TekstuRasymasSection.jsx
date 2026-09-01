import Link from "next/link";
import Container from "@/components/Container";

const services = [
  {
    number: "01",
    title: "Reklaminiai tekstai",
    text: "Kuriame patrauklius ir įtikinamus tekstus, skirtus įvairioms reklamos platformoms. Tai gali būti trumpi skelbimai socialiniuose tinkluose, „Google Ads“ antraštės ir aprašymai, reklamos banerių tekstai ar radijo/TV reklamos scenarijų pagrindai.",
  },
  {
    number: "02",
    title: "Interneto svetainių tekstai",
    text: "Rengiame SEO optimizuotą turinį Jūsų internetinei svetainei – nuo pagrindinio puslapio (hero section) šūkių ir paslaugų aprašymų iki „Apie mus“ skilties ar kontaktų puslapių. Padėsime Jūsų svetainei tapti informatyvia ir patrauklia lankytojams bei paieškos sistemoms.",
  },
  {
    number: "03",
    title: "Tinklaraščio įrašai ir straipsniai",
    text: "Kuriame informatyvius, edukacinius ir įtraukiančius tinklaraščio įrašus ar straipsnius aktualiomis temomis. Tai puikus būdas ugdyti ekspertinio lyderio įvaizdį, pritraukti organinį srautą ir užmegzti ryšį su auditorija.",
  },
  {
    number: "04",
    title: "Naujienlaiškiai ir Blogu Paslaugos",
    text: "Rašome efektyvius el. pašto naujienlaiškius, skirtus informuoti apie naujienas, akcijas, specialius pasiūlymus ar tiesiog palaikyti ryšį su klientais.",
  },
  {
    number: "05",
    title: "Socialinių tinklų turinys",
    text: "Kuriame trumpus, įtraukiančius ir suderintus tekstus Jūsų įmonės socialinių tinklų paskyroms (pvz., Facebook, Instagram, LinkedIn), kurie skatina įsitraukimą ir bendravimą.",
  },
  {
    number: "06",
    title: "Kita",
    text: "Esame lankstūs ir galime prisitaikyti prie Jūsų specifinių poreikių – susisiekite su mumis ir aptarsime Jūsų individualų projektą.",
  },
];

function ServiceItem({ service }) {
  return (
    <div className="group">
      <span className="text-sm font-semibold tracking-[0.12em] text-[var(--accent)]">
        {service.number}
      </span>

      <h3 className="mt-4 text-xl font-bold leading-tight text-white">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)]">
        {service.text}
      </p>
    </div>
  );
}

export default function TekstuRasymasSection() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.8fr] lg:gap-20">
          {/* Left: introduction */}
          <div>
            <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Tekstų
              <br />
              Rašymas
            </h2>

            <div className="mt-10 max-w-xl space-y-5">
              <p className="text-base leading-relaxed text-[var(--text-body)]">
                „Lertman“ teikia profesionalias tekstų rašymo paslaugas
                (copywriting), kurios padės Jūsų verslui išsiskirti ir
                efektyviai bendrauti su tiksline auditorija.
              </p>

              <p className="text-base leading-relaxed text-[var(--text-body)]">
                Suprantame, kad įtikinamas ir tikslus tekstas yra raktas į
                sėkmingą rinkodarą ir prekės ženklo įvaizdžio kūrimą. Mūsų
                tekstų kūrėja (-s) specializuojasi rašydama (-s) lietuvių ir
                norvegų kalbomis, užtikrindama (-s) ne tik gramatinį tikslumą,
                bet ir kultūrinį adekvatumą.
              </p>

              <p className="text-base leading-relaxed text-[var(--text-body)]">
                Mūsų tikslas – sukurti įtraukiantį turinį, kuris ne tik
                informuoja, bet ir parduoda, skatina veiksmą ir stiprina Jūsų
                prekės ženklą.
              </p>
            </div>

            <Link
              href="#contact"
              className="mt-10 inline-block rounded-[18px] bg-[var(--accent)] px-10 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-[3px] hover:bg-[var(--accent-hover)] hover:shadow-[0_12px_35px_var(--hero-glow)]"
            >
              Kontaktai
            </Link>
          </div>

          {/* Right: services */}
          <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceItem key={service.number} service={service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}