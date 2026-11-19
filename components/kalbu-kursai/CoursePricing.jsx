import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

const languages = [
  { name: "Anglų", individual: "22 € / 60 min", group: "9 € / 45 min" },
  { name: "Lietuvių", individual: "25 € / 60 min", group: "9 € / 45 min" },
  { name: "Norvegų", individual: "30 € / 60 min", group: "9 € / 45 min" },
  { name: "Švedų", individual: "30 € / 60 min", group: "9 € / 45 min" },
  { name: "Danų", individual: "35 € / 60 min", group: "9 € / 45 min" },
  { name: "Vokiečių", individual: "25 € / 60 min", group: "9 € / 45 min" },
  { name: "Prancūzų", individual: "25 € / 60 min", group: "9 € / 45 min" },
  { name: "Ispanų", individual: "25 € / 60 min", group: "9 € / 45 min" },
  { name: "Italų", individual: "25 € / 60 min", group: "9 € / 45 min" },
  { name: "Kiniečių", individual: "30 € / 60 min", group: "9 € / 45 min" },
  { name: "Japonų", individual: "30 € / 60 min", group: "9 € / 45 min" },
  { name: "Korėjiečių", individual: "30 € / 60 min", group: "9 € / 45 min" },
];

function FlagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 21V4a1 1 0 011-1h13l-2 5 2 5H5" />
    </svg>
  );
}

export default function CoursePricing() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Kainos"
          title="Kokių kalbų mokome?"
          description="Individualios pamokos trunka 60 min., grupinės – 45 min."
        />

        <Reveal as="ul" variant="stagger" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {languages.map((lang) => (
            <li key={lang.name} className="glow-card group flex flex-col p-6">
              {/* Icon + name */}
              <div className="flex items-center gap-3">
                <span className="icon-tile">
                  <FlagIcon />
                </span>
                <h3 className="text-lg font-medium text-foreground">{lang.name}</h3>
              </div>

              {/* Prices */}
              <dl className="mt-5 divide-y divide-border/70 border-y border-border/70 text-sm">
                <div className="flex items-center justify-between py-2.5">
                  <dt className="text-muted-foreground">Individualios</dt>
                  <dd className="font-medium text-foreground">{lang.individual}</dd>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <dt className="text-muted-foreground">Grupėje</dt>
                  <dd className="font-medium text-foreground">{lang.group}</dd>
                </div>
              </dl>

              <Link href="/kontaktai" className="btn-primary btn-sm mt-5 w-full">
                Registruotis
                <ArrowRight />
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}