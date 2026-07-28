"use client";

import Image from "next/image";
import Container from "@/components/Container";

const teachers = [
  { name: "Vaida Korickė", lang: "Norvegų", image: "/images/teacher-1.jpg" },
  { name: "Vaida Korickė", lang: "Švedų", image: "/images/teacher-2.jpg" },
  { name: "Vaida Korickė", lang: "Anglų", image: "/images/teacher-3.jpg" },
  { name: "Vaida Korickė", lang: "Ispanų", image: "/images/teacher-4.jpg" },
];

export default function TeachersSection() {
  return (
    <section className="overflow-hidden bg-[var(--bg)] py-24">
      {/* Heading stays contained */}
      <Container>
        <h2 className="text-center text-4xl font-extrabold text-white sm:text-5xl">
          Profesionali Mokytojų Komanda
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-center text-lg text-[var(--text-secondary)]">
          Lertman didžiuojasi subūręs profesionalų komandą, kurią sudaro patyrę
          dėstytojai, įgiję vertingą patirtį gyvendami ir dirbdami šalyse, kurių
          kalbas jie dėsto.
        </p>
      </Container>

      {/* Full-bleed grid — breaks out of container, wide cards */}
      <div className="mt-16 grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-16">
        {teachers.map((t, i) => (
          <div
            key={i}
            className="group relative aspect-[2/3] w-full overflow-hidden rounded-3xl"
          >
            <Image
              src={t.image}
              alt={t.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-sm font-medium text-[var(--accent)]">{t.lang}</p>
              <h3 className="text-xl font-bold text-white">{t.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}