import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

const services = [
  {
    title: "Dokumentų rengimas",
    desc: "Padedame parengti ir sutvarkyti reikiamus dokumentus darbui, studijoms ar gyvenimui užsienyje.",
    image: "/images/service-1.jpg",
    href: "/paslaugos",
    icon: <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5M9 13h6M9 17h4" />,
  },
  {
    title: "CV paslaugos",
    desc: "Profesionaliai parengiame Jūsų CV ir motyvacinį laišką, kad išsiskirtumėte darbo rinkoje.",
    image: "/images/service-2.jpg",
    href: "/paslaugos",
    icon: <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM19 8v6M22 11h-6" />,
  },
  {
    title: "Profesionalūs vertimai",
    desc: "Tikslūs ir kokybiški vertimai įvairiomis kalbomis – nuo dokumentų iki verslo tekstų.",
    image: "/images/service-3.jpg",
    href: "/paslaugos",
    icon: <path d="M4 5h8M8 3v2M6 5c0 4 3 7 6 8M10 5c0 4-3 7-6 8M13 21l4-9 4 9M14.5 18h5" />,
  },
];

/** RickNest-style tool cards: picture on top, icon + title, text, "Plačiau →". The whole card is the link. */
export default function ServicesCardsSection() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>
        <SectionHeading
          eyebrow="Paslaugos"
          title="Padedame ne tik su kalbomis"
          description="Dokumentai, CV ir vertimai – viskas vienoje vietoje."
        />

        <Reveal as="ul" variant="stagger" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.title} className="flex">
              <Link
                href={s.href}
                className="glow-card group flex w-full flex-col overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span className="relative block aspect-[4/3] overflow-hidden bg-background">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </span>
                <span className="flex flex-1 flex-col gap-2 p-5">
                  <span className="flex items-center gap-2.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5 text-primary">
                      {s.icon}
                    </svg>
                    <span className="text-lg font-medium text-foreground">{s.title}</span>
                  </span>
                  <span className="text-muted-foreground">{s.desc}</span>
                  <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-primary">
                    Plačiau
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}