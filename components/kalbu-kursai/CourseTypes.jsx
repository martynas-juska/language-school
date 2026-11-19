"use client";

import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const types = [
  {
    title: "Individualios pamokos",
    reveal: "Mokymasis pritaikytas tik Jums – pagal Jūsų tempą, tikslus ir pageidaujamą grafiką.",
    image: "/images/course-type-1.jpg",
    icon: (
      <>
        <circle cx="16" cy="11" r="4" />
        <path d="M8 26a8 8 0 0116 0" />
      </>
    ),
  },
  {
    title: "Grupiniai užsiėmimai",
    reveal: "Mokykitės kartu su kitais ir praktikuokite kalbą realiuose pokalbiuose bei diskusijose.",
    image: "/images/course-type-2.jpg",
    icon: (
      <>
        <circle cx="11" cy="12" r="3" />
        <circle cx="21" cy="12" r="3" />
        <path d="M5 25a6 6 0 0112 0M15 25a6 6 0 0112 0" />
      </>
    ),
  },
  {
    title: "Online kursai",
    reveal: "Prisijunkite iš bet kurios pasaulio vietos patogiu Jums metu – tereikia interneto.",
    image: "/images/course-type-3.jpg",
    icon: (
      <>
        <rect x="4" y="6" width="24" height="16" rx="2" />
        <path d="M12 26h8M16 22v4" />
      </>
    ),
  },
  {
    title: "Privati bendruomenė",
    reveal: "Tapkite mūsų bendruomenės dalimi – dalinkitės patirtimi ir motyvuokite vieni kitus.",
    image: "/images/course-type-4.jpg",
    icon: (
      <>
        <path d="M16 6l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
      </>
    ),
  },
];

export default function CourseTypes() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>
        <SectionHeading eyebrow="Formatai" title="Mokykitės kalbų savu ritmu!" center />

        <Reveal variant="stagger" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((t) => (
            <div
              key={t.title}
              className="glow-card group relative aspect-[3/4] overflow-hidden"
            >
              {/* Image */}
              <Image
                src={t.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Fade into the page colour so the text stays readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              {/* Bottom-left info */}
              <div className="absolute bottom-0 left-0 p-6">
                <span className="icon-tile mb-3 size-11 backdrop-blur-sm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {t.icon}
                  </svg>
                </span>
                <h3 className="text-lg font-medium text-foreground">{t.title}</h3>

                {/* Reveal on hover */}
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-[var(--text-body)] opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  {t.reveal}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}