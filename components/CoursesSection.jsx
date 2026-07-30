"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

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
    const track = trackRef.current;
    setIsDragging(true);
    drag.current = { startX: e.pageX, scrollLeft: track.scrollLeft };
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const track = trackRef.current;
    const walk = e.pageX - drag.current.startX;
    track.scrollLeft = drag.current.scrollLeft - walk;
  };

  const stopDrag = () => setIsDragging(false);

  return (
    <section className="overflow-hidden bg-[var(--bg)] py-24">
      <Container>
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Kaip organizuojami kursai?
        </h2>
      </Container>

      {/* Draggable track — overflows to the right */}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerLeave={stopDrag}
        className={`mt-12 flex gap-6 overflow-x-auto pb-4 pl-6 sm:pl-10 lg:pl-[max(4rem,calc((100vw-1152px)/2))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {courses.map((c, i) => (
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
        {/* trailing spacer so last card isn't flush to edge */}
        <div className="w-6 shrink-0 sm:w-10" />
      </div>

      {/* Button */}
      <Container className="mt-12">
        <Link
          href="#"
          className="inline-block rounded-[18px] bg-[var(--accent)] px-10 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-[3px] hover:bg-[var(--accent-hover)] hover:shadow-[0_12px_35px_var(--hero-glow)]"
        >
          Plačiau
        </Link>
      </Container>
    </section>
  );
}