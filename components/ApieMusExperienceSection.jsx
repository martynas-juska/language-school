"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";

export default function ApieMusExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-top)] py-20 lg:py-24">
      {/* subtle atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 top-1/3 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/[0.035] blur-[150px]"
      />

      <Container>
        {/* TOP LABEL */}
        <div className="flex items-center gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Patirtis
          </span>

          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* HEADING */}
        <div className="mt-8 grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <h2 className="max-w-3xl text-4xl font-extrabold leading-[1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Patirtis, kuria
            <br />
            galite{" "}
            <span className="text-[var(--accent)]">pasitikėti.</span>
          </h2>

          <p className="max-w-lg text-base leading-relaxed text-[var(--text-secondary)] lg:justify-self-end lg:text-lg">
            Žinios, tarptautinė patirtis ir individualus požiūris, sukaupti
            dirbant su studentais Lietuvoje ir už jos ribų.
          </p>
        </div>

        {/* STATISTICS */}
        <div className="mt-12 border-y border-white/10 lg:mt-14">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* MAIN NUMBER */}
            <div className="relative py-12 lg:border-r lg:border-white/10 lg:py-14 lg:pr-14">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Studentų, kuriems padėjome
              </span>

              <div className="mt-6 flex items-end gap-1">
                <AnimatedNumber
                  value={2335}
                  className="text-[clamp(5.5rem,11vw,9.5rem)] font-extrabold leading-[0.75] tracking-[-0.07em] text-white"
                />

                <span className="mb-[-0.02em] text-[4.5rem] font-light leading-none tracking-[-0.08em] text-[var(--accent)] sm:text-[6rem] lg:text-[7rem]">
                  +
                </span>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-[var(--accent)]" />

                <span className="text-sm font-medium text-white/70">
                  Lietuvoje ir užsienyje
                </span>
              </div>
            </div>

            {/* BREAKDOWN */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1">
              <StatRow
                number={630}
                label="Lietuvoje"
                description="Studentų"
                bordered
              />

              <StatRow
                number={1705}
                label="Užsienyje"
                description="Studentų"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
            Skirtingi tikslai. Skirtingos istorijos. Vienas principas –
            mokymasis turi veikti realiame žmogaus gyvenime.
          </p>

          <span className="hidden h-px flex-1 bg-white/[0.06] sm:mx-8 sm:block" />

          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
            Lertman
          </span>
        </div>
      </Container>
    </section>
  );
}

function StatRow({ number, label, description, bordered = false }) {
  return (
    <div
      className={`
        group flex min-h-[150px] items-center justify-between gap-8 py-8
        sm:flex-col sm:items-start sm:justify-center
        lg:min-h-0 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-9
        ${
          bordered
            ? "border-b border-white/10 sm:border-b-0 sm:border-r lg:border-r-0 lg:border-b"
            : ""
        }
      `}
    >
      <div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
          {description}
        </span>

        <p className="mt-1 text-lg font-semibold text-white">{label}</p>
      </div>

      <AnimatedNumber
        value={number}
        className="text-4xl font-extrabold tracking-[-0.04em] text-[var(--accent)] sm:text-5xl lg:text-5xl"
      />
    </div>
  );
}

function AnimatedNumber({
  value,
  duration = 1400,
  className = "",
}) {
  const ref = useRef(null);

  const [number, setNumber] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 4);

      setNumber(Math.floor(value * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setNumber(value);
      }
    }

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasAnimated, value, duration]);

  return (
    <span ref={ref} className={className}>
      {number.toLocaleString("lt-LT")}
    </span>
  );
}