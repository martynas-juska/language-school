"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function CountUp({ target, duration = 1800 }) {
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
    <span ref={ref} className="text-5xl font-extrabold text-white">
      {count.toLocaleString("lt-LT")}
    </span>
  );
}

export default function WhyUsSection() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="mx-auto grid max-w-[1500px] items-center gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:px-16">
        {/* Left: text + stats card */}
        <div>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Kas daro mūsų kalbų mokyklą išskirtinę?
          </h2>
          <p className="mt-6 leading-relaxed text-[var(--text-body)]">
            Mūsų mokykla yra daugiau nei tik kalbos kursai – tai vieta, kur
            asmeninė pažanga susitinka su profesionalumu. Didžiuojamės kiekvienu
            studentu ir taikome unikalią mokymo metodiką, pritaikytą
            individualiems Jūsų poreikiams ir tikslams. Mes ne tik mokome kalbų –
            mes padedame Jums atverti naujas galimybes pasaulyje. Mūsų lankstumas
            leidžia mokytis patogiu nuotoliniu būdu, iš bet kurios pasaulio
            vietos.
          </p>

          {/* Stats card */}
          <div className="mt-10 rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-8 shadow-[0_15px_60px_rgba(0,0,0,0.35)]">
            <p className="text-sm text-[var(--text-secondary)]">
              Studentų, kuriems padėjome:
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <CountUp target={630} />
                <p className="mt-2 text-sm text-[var(--text-secondary)]">Lietuvoje</p>
              </div>
              <div>
                <CountUp target={1705} />
                <p className="mt-2 text-sm text-[var(--text-secondary)]">Užsienyje</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link
            href="/apie-mus"
            className="mt-8 inline-block rounded-[18px] bg-[var(--accent)] px-8 py-4 font-semibold text-white transition-all duration-200 hover:-translate-y-[3px] hover:bg-[var(--accent-hover)] hover:shadow-[0_12px_35px_var(--hero-glow)]"
          >
            Apie Mus
          </Link>
        </div>

        {/* Right: overlapping 2:3 images */}
        <div className="relative mx-auto w-full max-w-[520px]">
          {/* Big image */}
          <div className="relative ml-auto aspect-[2/3] w-[75%] overflow-hidden rounded-3xl shadow-[0_15px_60px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/vertical-big.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Smaller image, overlapping middle-left */}
          <div className="absolute left-0 top-1/2 aspect-[2/3] w-[45%] -translate-y-1/2 overflow-hidden rounded-3xl border-4 border-[var(--bg)] shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
            <Image
              src="/images/vertical-smaller.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}