"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/components/Container";

const tabs = [
  {
    id: "mokome",
    label: "Kokių kalbų mokome?",
    image: "/images/lang-1.jpg",
    blocks: [
      "Lertman mokymo procesas organizuojamas pagal individualius kliento poreikius. Profesinei karjeros tikslams, išvykimui į užsienį ar tiesiog savo malonumui – sudarysime programą pagal jūsų poreikius!",
      "Mūsų komandoje dirba ne vienerius metus Norvegijoje bei kitose šalyse gyvenę dėstytojai, kurie padės ne tik teorinėmis žiniomis, bet ir praktiškais patarimais. Modernūs metodai padeda kokybiškai ir efektyviai tobulėti.",
    ],
  },
  {
    id: "europos",
    label: "Europos Kalbos",
    image: "/images/lang-2.jpg",
    languages: [
      { name: "Anglų", desc: "Populiariausia pasaulio kalba, būtina tiek karjerai, tiek kelionėms. Ruošiame tarptautiniams egzaminams (IELTS, TOEFL), vedame specializuotus verslo anglų kalbos kursus, padedame laisvai pralaužti kalbos barjerą šnekamosios kalbos pamokose." },
      { name: "Lietuvių", desc: "Atraskite Lietuvą ir jos kultūrą iš arti. Kursai skirti užsieniečiams, norintiems išmokti lietuvių kalbą kasdieniam bendravimui, darbui ar studijoms Lietuvoje. Taip pat padedame pasiruošti valstybinės kalbos kategorijos egzaminui." },
      { name: "Ispanų", desc: "Kalba, skambanti saulės ir aistros ritmu. Antra populiariausia kalba pasaulyje, atverianti duris į didžiąją dalį Lotynų Amerikos ir, žinoma, Ispaniją. Išmokite kalbą kelionėms, pažintims ar tiesiog savo malonumui!" },
      { name: "Italų", desc: "Italų kalba žavi savo skambesiu – joje telpa Renesanso genijų kūryba, opera, kulinarija ir kasdienis itališkas la dolce vita. Ji padeda ne tik keliaujant po Italiją, bet ir bendraujant su meno, kultūros bei dizaino pasauliu." },
      { name: "Prancūzų", desc: "Prancūzų kalba skamba lyg muzika – ji atveria duris į meną, madą, literatūrą ir tarptautinę diplomatiją. Tai viena svarbiausių pasaulio kalbų, kuria kalbama ne tik Europoje, bet ir daugelyje Afrikos šalių bei Kanadoje." },
      { name: "Vokiečių", desc: "Vokiečių kalba – tvirta, logiška ir itin reikalinga tiek moksle, tiek karjeroje. Ji atveria galimybes bendradarbiauti su Vokietija, Austrija, Šveicarija – šalimis, garsėjančiomis inovacijomis, mokslu ir ekonomine galia." },
      { name: "Norvegų", desc: "Jūsų profesinis kelias Skandinavijoje prasideda čia. Viena paklausiausių kalbų darbo rinkoje tiek Lietuvoje, tiek Skandinavijoje." },
      { name: "Švedų", desc: "Pažinkite inovacijų ir „lagom“ filosofijos šalį. Išmokite kalbą, kuri atvers duris į vieną stipriausių ekonomikų ir aukščiausios gyvenimo kokybės šalių." },
      { name: "Danų", desc: "Danų kalba – tai kelias į šalį, garsėjančią laimės indeksais, draugiška bendruomene ir unikaliu „hygge“ gyvenimo būdu." },
    ],
  },
  {
    id: "azijos",
    label: "Azijos Kalbos",
    image: "/images/lang-3.jpg",
    languages: [
      { name: "Korėjiečių", desc: "Korėjiečių kalba – tai vartai į sparčiai augančią technologijų valstybę, garsėjančią pasaulinėmis inovacijomis ir K-pop kultūra." },
      { name: "Kinų", desc: "Ateities ekonomikos ir tūkstantmetės kultūros kalba. Vis svarbesnė verslo pasaulyje, kinų kalba yra iššūkis, atveriantis neįtikėtinas karjeros ir pažinimo galimybes." },
      { name: "Japonų", desc: "Japonų kalba jungia aukštąsias technologijas su turtinga tradicija – nuo samurajų kultūros iki šiuolaikinės anime ir mangos." },
    ],
  },
];

export default function LanguageTabs() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[var(--bg-bottom)] py-24">
      <Container className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left: sticky nav with scroll indicator */}
        <nav className="lg:w-1/4 lg:min-w-[240px]">
          <div className="lg:sticky lg:top-24">
            <div className="relative flex flex-col gap-8 border-l border-white/10 pl-6">
              <span
                className="absolute -left-px w-0.5 rounded bg-[var(--accent)] transition-all duration-500"
                style={{
                  height: `${100 / tabs.length}%`,
                  top: `${(active * 100) / tabs.length}%`,
                }}
              />
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                  className={`text-left text-xl font-bold transition-opacity duration-200 ${
                    i === active ? "text-white opacity-100" : "text-white opacity-40 hover:opacity-70"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Right: stacked sections */}
        <div className="flex-1 space-y-32">
          {tabs.map((tab, i) => (
            <div
              key={tab.id}
              data-index={i}
              ref={(el) => (sectionRefs.current[i] = el)}
              className="scroll-mt-24 space-y-8"
            >
              {/* Intro paragraphs (first tab) */}
              {tab.blocks &&
                tab.blocks.map((body, j) => (
                  <p key={j} className="leading-relaxed text-[var(--text-body)]">
                    {body}
                  </p>
                ))}

              {/* Languages — cards, 2 per row */}
              {tab.languages && (
                <div className="grid gap-6 sm:grid-cols-2">
                  {tab.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[0_15px_60px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-1"
                    >
                      <h3 className="mb-2 text-lg font-bold text-white">{lang.name}</h3>
                      <p className="text-sm leading-relaxed text-[var(--text-body)]">
                        {lang.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* 3:2 image below */}
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
                <Image src={tab.image} alt="" fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}