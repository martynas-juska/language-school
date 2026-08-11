"use client";

import { useState } from "react";
import Image from "next/image";

const languages = [
  {
    name: "Anglų",
    title: "Anglų Kalba",
    tagline: "Jūsų raktas į tarptautines galimybes",
    desc: "Populiariausia pasaulio kalba, būtina tiek karjerai, tiek kelionėms. Ruošiame tarptautiniams egzaminams (IELTS, TOEFL), vedame specializuotus verslo anglų kalbos kursus, padedame laisvai pralaužti kalbos barjerą šnekamosios kalbos pamokose.",
    courses: "Bendrinė anglų kalba (visi lygiai), Verslo anglų kalba, Pasiruošimas egzaminams, Šnekamoji kalba.",
    price: "22 € / 60 min.",
    image: "/images/lang-anglu.jpg",
  },
  {
    name: "Lietuvių",
    title: "Lietuvių Kalba",
    tagline: "Atraskite Lietuvą ir jos kultūrą iš arti",
    desc: "Kursai skirti užsieniečiams, norintiems išmokti lietuvių kalbą kasdieniam bendravimui, darbui ar studijoms Lietuvoje. Taip pat padedame pasiruošti valstybinės kalbos kategorijos egzaminui.",
    courses: "Pradedantiesiems, Pažengusiems, Pasiruošimas A2/B1 egzaminui.",
    price: "25 € / 60 min. (individualios), 9 € / 45 min. (grupėje)",
    image: "/images/lang-lietuviu.jpg",
  },
  {
    name: "Norvegų",
    title: "Norvegų Kalba",
    tagline: "Jūsų profesinis kelias Skandinavijoje prasideda čia",
    desc: "Viena paklausiausių kalbų darbo rinkoje. Rengiame kursus ne tik norintiems integruotis Norvegijoje, bet ir specializuotus mokymus medicinos darbuotojams – slaugytojams ir gydytojams, apimančius profesinę terminologiją.",
    courses: "Bendrinė norvegų kalba, Medicinos darbuotojams, Darbui ir integracijai.",
    price: "30 € / 60 min.",
    image: "/images/lang-norvegu.jpg",
  },
  {
    name: "Švedų",
    title: "Švedų Kalba",
    tagline: "Pažinkite inovacijų ir „lagom“ filosofijos šalį",
    desc: "Išmokite kalbą, kuri atvers duris į vieną stipriausių ekonomikų ir aukščiausios gyvenimo kokybės šalių.",
    courses: "Bendrinė švedų kalba, Verslui, Šnekamoji kalba.",
    price: "30 € / 60 min.",
    image: "/images/lang-svedu.jpg",
  },
  {
    name: "Danų",
    title: "Danų Kalba",
    tagline: "„Hygge“ – jaukumo ir artumo kultūros kalba",
    desc: "Danų kalba – tai kelias į šalį, garsėjančią laimės indeksais, draugiška bendruomene ir unikaliu „hygge“ gyvenimo būdu. Mokėdami danų kalbą galėsite lengviau integruotis, studijuoti ar dirbti Danijoje, kuri siūlo daugybę galimybių švietimo, sveikatos apsaugos ir kitose srityse.",
    courses: "Bendrinė danų kalba, Šnekamoji kalba, Kalba kelionėms.",
    price: "35 € / 60 min.",
    image: "/images/lang-danu.jpg",
  },
  {
    name: "Vokiečių",
    title: "Vokiečių Kalba",
    tagline: "Verslo, technologijų ir tikslumo kalba",
    desc: "Vokiečių kalba – tvirta, logiška ir itin reikalinga tiek moksle, tiek karjeroje. Ji atveria galimybes bendradarbiauti su Vokietija, Austrija, Šveicarija – šalimis, garsėjančiomis inovacijomis, mokslu ir ekonomine galia.",
    courses: "Bendrinė vokiečių kalba, Profesinė kalba, Šnekamoji kalba.",
    price: "25 € / 60 min.",
    image: "/images/lang-vokieciu.jpg",
  },
  {
    name: "Prancūzų",
    title: "Prancūzų Kalba",
    tagline: "Diplomatijos, kultūros ir elegancijos kalba",
    desc: "Prancūzų kalba skamba lyg muzika – ji atveria duris į meną, madą, literatūrą ir tarptautinę diplomatiją. Tai viena svarbiausių pasaulio kalbų, kuria kalbama ne tik Europoje, bet ir daugelyje Afrikos šalių bei Kanadoje.",
    courses: "Bendrinė prancūzų kalba, Šnekamoji kalba, Kalba kelionėms.",
    price: "25 € / 60 min.",
    image: "/images/lang-prancuzu.jpg",
  },
  {
    name: "Ispanų",
    title: "Ispanų Kalba",
    tagline: "Kalba, skambanti saulės ir aistros ritmu",
    desc: "Antra populiariausia kalba pasaulyje, atverianti duris į didžiąją dalį Lotynų Amerikos ir, žinoma, Ispaniją. Išmokite kalbą kelionėms, pažintims ar tiesiog savo malonumui!",
    courses: "Bendrinė ispanų kalba, Kelionėms, Šnekamoji kalba.",
    price: "25 € / 45 min.",
    image: "/images/lang-ispanu.jpg",
  },
  {
    name: "Italų",
    title: "Italų Kalba",
    tagline: "Meno, virtuvės ir gyvenimo džiaugsmo kalba",
    desc: "Italų kalba žavi savo skambesiu – joje telpa Renesanso genijų kūryba, opera, kulinarija ir kasdienis itališkas la dolce vita. Ji padeda ne tik keliaujant po Italiją, bet ir bendraujant su meno, kultūros bei dizaino pasauliu.",
    courses: "Bendrinė italų kalba, Kelionėms, Šnekamoji kalba.",
    price: "25 € / 60 min.",
    image: "/images/lang-italu.jpg",
  },
];

export default function LanguagesTabEurope() {
  const [active, setActive] = useState(0);
  const lang = languages[active];

  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Europos Kalbos
        </h2>

        {/* Tab bar */}
        <div className="mt-10 flex flex-wrap gap-3">
          {languages.map((l, i) => (
            <button
              key={l.name}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                i === active
                  ? "bg-[var(--accent)] text-white"
                  : "border border-[var(--card-border)] text-[var(--text-secondary)] hover:text-white"
              }`}
            >
              {l.name}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text */}
          <div>
            <h3 className="text-3xl font-extrabold text-white">{lang.title}</h3>
            <p className="mt-3 text-xl font-semibold text-[var(--accent)]">
              {lang.tagline}
            </p>
            <p className="mt-6 leading-relaxed text-[var(--text-body)]">
              {lang.desc}
            </p>

            <ul className="mt-6 space-y-3 text-[var(--text-body)]">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>
                  <span className="font-semibold text-white">Siūlomi kursai: </span>
                  {lang.courses}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>
                  <span className="font-semibold text-white">Kaina nuo: </span>
                  {lang.price}
                </span>
              </li>
            </ul>
          </div>

          {/* Right: 3:2 image */}
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl">
            <Image
              src={lang.image}
              alt={lang.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}