"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

const courses = [
  { title: "Individualios pamokos", desc: "Mokymasis pritaikytas tik Jums – pagal Jūsų tempą ir tikslus.", image: "/images/course-1.jpg" },
  { title: "Grupinės pamokos", desc: "Mokykitės kartu su kitais ir praktikuokite kalbą realiuose pokalbiuose.", image: "/images/course-2.jpg" },
  { title: "Nuotolinės pamokos", desc: "Prisijunkite iš bet kurios pasaulio vietos patogiu Jums metu.", image: "/images/course-3.jpg" },
  { title: "Verslo kalba", desc: "Specializuoti kursai, pritaikyti profesinei aplinkai ir karjerai.", image: "/images/course-4.jpg" },
  { title: "Egzaminų ruošimas", desc: "Pasiruoškite tarptautiniams egzaminams su patyrusiais dėstytojais.", image: "/images/course-5.jpg" },
];

export default function CoursesSection() {
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
      <Container>
        <SectionHeading
          eyebrow="Kursai"
          title="Kaip organizuojami kursai?"
          description="Pasirinkite formatą, kuris tinka Jums: vieni, grupėje, nuotoliu ar su konkrečiu tikslu."
        />
      </Container>

      {/* Draggable track — overflows to the right */}
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
          {courses.map((c) => (
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
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-lg font-medium text-foreground">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </article>
          ))}
          {/* trailing spacer so last card isn't flush to edge */}
          <div className="w-1 shrink-0 sm:w-5" />
        </div>
      </Reveal>

      <Container className="mt-6">
        <Link href="/kalbu-kursai" className="btn-primary text-base">
          Visi kursai
          <ArrowRight />
        </Link>
      </Container>
    </section>
  );
}