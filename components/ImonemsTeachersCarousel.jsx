"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";

const teachers = [
  {
    name: "Vaida Koricke",
    language: "Norvegų kalba",
    image: "/images/teachers/vaida.jpg",
  },
  {
    name: "Dėstytojas",
    language: "Švedų kalba",
    image: "/images/teachers/teacher-2.jpg",
  },
  {
    name: "Dėstytojas",
    language: "Norvegų kalba",
    image: "/images/teachers/teacher-3.jpg",
  },
  {
    name: "Dėstytoja",
    language: "Anglų kalba",
    image: "/images/teachers/teacher-4.jpg",
  },
];

export default function ImonemsTeachersCarousel() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToTeacher = (index) => {
    const container = scrollRef.current;

    if (!container) return;

    const cards = container.querySelectorAll("[data-teacher-card]");
    const card = cards[index];

    if (!card) return;

    container.scrollTo({
      left:
        card.offsetLeft -
        container.offsetWidth / 2 +
        card.offsetWidth / 2,
      behavior: "smooth",
    });

    setActive(index);
  };

  return (
    <section className="relative overflow-hidden bg-[var(--bg-top)] pb-32 lg:pb-40">
      <Container>
        {/* Section header */}
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Dėstytojai
            </span>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Susipažinkite su komanda.
            </h3>
          </div>

          {/* Desktop controls */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() =>
                scrollToTeacher(Math.max(active - 1, 0))
              }
              disabled={active === 0}
              aria-label="Ankstesnis dėstytojas"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-[var(--accent)]/50 hover:text-[var(--accent)] disabled:pointer-events-none disabled:opacity-30"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11.5 4L6 9L11.5 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToTeacher(
                  Math.min(active + 1, teachers.length - 1)
                )
              }
              disabled={active === teachers.length - 1}
              aria-label="Kitas dėstytojas"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-[var(--accent)]/50 hover:text-[var(--accent)] disabled:pointer-events-none disabled:opacity-30"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6.5 4L12 9L6.5 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 scrollbar-none"
        >
          {teachers.map((teacher, index) => (
            <button
              key={`${teacher.name}-${index}`}
              type="button"
              data-teacher-card
              onClick={() => scrollToTeacher(index)}
              className={`group relative min-w-[78vw] snap-center overflow-hidden rounded-[2rem] text-left transition-all duration-500 sm:min-w-[55vw] lg:min-w-[360px] ${
                active === index
                  ? "scale-[1.01]"
                  : "scale-100 opacity-70 hover:opacity-100"
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#101A28]">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 55vw, 360px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />

                {/* Accent glow */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-[var(--accent)]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/10 text-xs font-semibold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Active indicator */}
                <div
                  className={`absolute right-6 top-6 h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_15px_rgba(78,159,166,0.8)] transition-all duration-300 ${
                    active === index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />

                {/* Information */}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                    {teacher.language}
                  </span>

                  <h4 className="mt-2 text-2xl font-bold tracking-tight text-white">
                    {teacher.name}
                  </h4>

                  <div className="mt-5 flex items-center gap-3 text-sm text-white/60">
                    <span>Peržiūrėti</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[#07101C]">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Progress */}
        <div className="mt-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10">
            <div
              className="h-px bg-[var(--accent)] transition-all duration-500"
              style={{
                width: `${((active + 1) / teachers.length) * 100}%`,
              }}
            />
          </div>

          <span className="min-w-[42px] text-right text-xs font-semibold tracking-[0.15em] text-[var(--text-secondary)]">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(teachers.length).padStart(2, "0")}
          </span>
        </div>
      </Container>
    </section>
  );
}