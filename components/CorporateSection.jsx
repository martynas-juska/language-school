"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const cards = [
  { title: "Komandų mokymai", desc: "Pritaikyti kursai visai komandai, stiprinantys bendradarbiavimą ir kompetencijas.", image: "/images/corp-1.jpg" },
  { title: "Verslo kalba", desc: "Specializuota kalba deryboms, prezentacijoms ir tarptautiniam bendravimui.", image: "/images/corp-2.jpg" },
  { title: "Lankstus grafikas", desc: "Mokymai vyksta patogiu Jūsų komandai metu, nuotoliniu būdu.", image: "/images/corp-3.jpg" },
  { title: "Pažangos ataskaitos", desc: "Reguliariai stebime ir pateikiame komandos mokymosi rezultatus.", image: "/images/corp-4.jpg" },
  { title: "Individualūs sprendimai", desc: "Programa sudaroma pagal Jūsų įmonės tikslus ir poreikius.", image: "/images/corp-5.jpg" },
];

export default function CorporateSection() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const drag = useRef({ startX: 0, scrollLeft: 0 });

  const onPointerDown = (e) => {
    setIsDragging(true);
    drag.current = { startX: e.pageX, scrollLeft: trackRef.current.scrollLeft };
  };
  const onPointerMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    trackRef.current.scrollLeft = drag.current.scrollLeft - (e.pageX - drag.current.startX);
  };
  const stopDrag = () => setIsDragging(false);

  return (
    <section className="overflow-hidden bg-[var(--bg)] py-24">
      {/* Header: smaller left, bigger right */}
      <Container className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Kursai Skirti Įmonėms
          </h2>
        </div>

        <div>
          <blockquote className="border-l-2 border-[var(--accent)] pl-6 text-lg italic leading-relaxed text-[var(--text-body)]">
            „Lertman siūlo Jūsų įmonės ar organizacijos nariams pritaikytus kalbų
            mokymo sprendimus, padėsiančius sustiprinti komandos kompetencijas ir
            praplėsti verslo galimybes.“
          </blockquote>

          <Link
            href="/imonems"
            className="group mt-6 inline-flex items-center gap-3 font-semibold text-white transition-colors hover:text-[var(--accent)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
            Plačiau
          </Link>
        </div>
      </Container>

      {/* Draggable card track — overflows right */}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerLeave={stopDrag}
        className={`mt-16 flex gap-6 overflow-x-auto pb-4 pl-6 sm:pl-10 lg:pl-[max(4rem,calc((100vw-1152px)/2))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {cards.map((c, i) => (
          <div
            key={i}
            className="group relative aspect-[4/5] w-[300px] shrink-0 overflow-hidden rounded-3xl sm:w-[340px]"
          >
            <Image
              src={c.image}
              alt=""
              fill
              draggable={false}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
        <div className="w-6 shrink-0 sm:w-10" />
      </div>

      {/* Big button */}
      <Container className="mt-12">
        <Link
          href="/imonems"
          className="inline-block rounded-[18px] bg-[var(--accent)] px-10 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-[3px] hover:bg-[var(--accent-hover)] hover:shadow-[0_12px_35px_var(--hero-glow)]"
        >
          Plačiau
        </Link>
      </Container>
    </section>
  );
}