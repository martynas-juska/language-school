"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { teachers } from "@/lib/teachers";

/**
 * Three teachers. On large screens all three sit side by side (no arrows needed);
 * on phones and tablets they swipe as a carousel with arrows and a progress line.
 */
export default function ImonemsTeachersCarousel() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToTeacher = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelectorAll("[data-teacher-card]")[index];
    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2,
      behavior: "smooth",
    });
    setActive(index);
  };

  const arrowClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-[var(--accent)]/50 hover:text-[var(--accent)] disabled:pointer-events-none disabled:opacity-30";

  return (
    <section className="relative overflow-hidden bg-[var(--bg-top)] pb-32 lg:pb-40">
      <Container>
        {/* Section header */}
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Dėstytojai
            </span>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Susipažinkite su komanda.
            </h3>
          </div>

          {/* Arrows: tablets only (phones swipe, large screens show all three) */}
          <div className="hidden items-center gap-3 sm:flex lg:hidden">
            <button
              type="button"
              onClick={() => scrollToTeacher(Math.max(active - 1, 0))}
              disabled={active === 0}
              aria-label="Ankstesnis dėstytojas"
              className={arrowClass}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M11.5 4L6 9L11.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollToTeacher(Math.min(active + 1, teachers.length - 1))}
              disabled={active === teachers.length - 1}
              aria-label="Kitas dėstytojas"
              className={arrowClass}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M6.5 4L12 9L6.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel on small screens, 3-column grid on large */}
        <div
          ref={scrollRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0"
        >
          {teachers.map((teacher, index) => (
            <button
              key={`${teacher.name}-${index}`}
              type="button"
              data-teacher-card
              onClick={() => scrollToTeacher(index)}
              className={`glow-card group relative min-w-[78vw] snap-center overflow-hidden rounded-2xl text-left transition-[opacity,translate,border-color,box-shadow] duration-500 sm:min-w-[55vw] lg:min-w-0 lg:opacity-100 ${
                active === index ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-card">
                <Image
                  src={teacher.image}
                  alt={`${teacher.name}, ${teacher.language}`}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 55vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Fade into the page colour */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Teal glow on hover */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-[var(--accent)]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xs font-semibold text-foreground backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Info */}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                    {teacher.language}
                  </span>
                  <h4 className="mt-2 text-2xl font-bold tracking-tight text-foreground">{teacher.name}</h4>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Progress: only where it's a carousel */}
        <div className="mt-6 flex items-center gap-4 lg:hidden">
          <div className="h-px flex-1 bg-border">
            <div
              className="h-px bg-[var(--accent)] transition-all duration-500"
              style={{ width: `${((active + 1) / teachers.length) * 100}%` }}
            />
          </div>
          <span className="min-w-[42px] text-right text-xs font-semibold tracking-[0.15em] text-[var(--text-secondary)]">
            {String(active + 1).padStart(2, "0")} / {String(teachers.length).padStart(2, "0")}
          </span>
        </div>
      </Container>
    </section>
  );
}