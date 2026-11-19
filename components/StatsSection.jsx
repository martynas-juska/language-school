"use client";

import { useState, useEffect, useRef } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { value: 13, superscript: "Metų", label: "Mokyklos Patirtis" },
  { value: 13, label: "Dėstytojų Komanda" },
  { value: 2335, label: "Studentų Padėjome" },
  { value: 26, label: "Įmonių Projektų" },
];

function CountUp({ target, superscript, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            // ease-out for a natural finish
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="inline-flex items-start">
      <span className="text-6xl font-extrabold text-foreground lg:text-7xl">
        {count.toLocaleString("lt-LT")}
      </span>
      {superscript && (
        <span className="ml-1 mt-2 text-lg font-semibold text-[var(--accent)]">
          {superscript}
        </span>
      )}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>
        <SectionHeading
          eyebrow="Patirtis"
          title="Patirtis, kuria galite pasitikėti"
          description="Mūsų patirtis – Jūsų sėkmė! Nekantraujame su Jumis pasidalinti žiniomis ir įžvalgomis, kurias sukaupė mūsų mokytojai keliaudami po platųjį pasaulį."
        />

        <div className="mt-12 grid gap-6 glow-card rounded-2xl p-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center"
            >
              <CountUp target={stat.value} superscript={stat.superscript} />
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}