"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { Reveal, ScrambleText } from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

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
      {/* Header: title left, quote + link right */}
      <Container className="grid items-end gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow mb-3">
            <ScrambleText text="Įmonėms" />
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Kursai skirti įmonėms</h2>
        </Reveal>

        <Reveal variant="right">
          <blockquote className="border-l-2 border-primary pl-6 text-lg leading-relaxed text-muted-foreground">
            „Lertman siūlo Jūsų įmonės ar organizacijos nariams pritaikytus kalbų mokymo sprendimus, padėsiančius
            sustiprinti komandos kompetencijas ir praplėsti verslo galimybes.“
          </blockquote>
        </Reveal>
      </Container>

      {/* Draggable card track — overflows right */}
      <Reveal>
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDrag}
          onPointerLeave={stopDrag}
          className={`mt-12 flex gap-5 overflow-x-auto pt-2 pb-6 pl-6 sm:pl-10 lg:pl-[max(4rem,calc((100vw-1152px)/2))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
        >
          {cards.map((c, i) => (
            <article key={c.title} className="glow-card group flex w-[280px] shrink-0 flex-col overflow-hidden sm:w-[320px]">
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  draggable={false}
                  sizes="320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute top-3 left-3 rounded-md bg-black/55 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-lg font-medium text-foreground">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </article>
          ))}
          <div className="w-1 shrink-0 sm:w-5" />
        </div>
      </Reveal>

      <Container className="mt-6 flex flex-wrap gap-3">
        <Link href="/imonems" className="btn-primary text-base">
          Pasiūlymas įmonei
          <ArrowRight />
        </Link>
        <Link href="/kontaktai" className="btn-outline text-base">
          Susisiekti
        </Link>
      </Container>
    </section>
  );
}