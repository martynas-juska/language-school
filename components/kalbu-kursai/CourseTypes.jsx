"use client";

import Image from "next/image";
import Container from "@/components/Container";

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
        <h2 className="text-center text-4xl font-extrabold text-white sm:text-5xl">
          Mokykitės kalbų savu ritmu!
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((t) => (
            <div
              key={t.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl"
            >
              {/* Image */}
              <Image
                src={t.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Scrim — darkens more on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-colors duration-300 group-hover:from-black/90" />

              {/* Bottom-left info */}
              <div className="absolute bottom-0 left-0 p-6">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/15 backdrop-blur-sm">
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
                <h3 className="text-lg font-bold text-white">{t.title}</h3>

                {/* Reveal on hover */}
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-[var(--text-body)] opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  {t.reveal}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}