import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const services = [
  {
    title: "Dokumentų Rengimas",
    desc: "Padedame parengti ir sutvarkyti reikiamus dokumentus darbui, studijoms ar gyvenimui užsienyje.",
    image: "/images/service-1.jpg",
    href: "/paslaugos",
  },
  {
    title: "CV Paslaugos",
    desc: "Profesionaliai parengiame Jūsų CV ir motyvacinį laišką, kad išsiskirtumėte darbo rinkoje.",
    image: "/images/service-2.jpg",
    href: "/paslaugos",
  },
  {
    title: "Profesionalūs Vertimai",
    desc: "Tikslūs ir kokybiški vertimai įvairiomis kalbomis – nuo dokumentų iki verslo tekstų.",
    image: "/images/service-3.jpg",
    href: "/paslaugos",
  },
];

export default function ServicesCardsSection() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl"
            >
              {/* Fill image */}
              <Image
                src={s.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/60" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                {/* Top: heading + paragraph */}
                <div>
                  <h2 className="text-2xl font-bold text-white">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)]">
                    {s.desc}
                  </p>
                </div>

                {/* Bottom: Plačiau arrow */}
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-[var(--accent)]"
                >
                  Plačiau
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}