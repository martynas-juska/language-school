import Link from "next/link";
import Container from "@/components/Container";

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
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 21V4a1 1 0 011-1h13l-2 5 2 5H5" />
    </svg>
  );
}

export default function CoursePricing() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          Kokių kalbų mokome?
        </h1>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="flex flex-col rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-7 shadow-[0_15px_60px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Icon + name */}
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/10">
                  <FlagIcon />
                </span>
                <h3 className="text-xl font-bold text-white">{lang.name}</h3>
              </div>

              {/* Prices */}
              <div className="mt-6 space-y-2 text-sm">
                <p className="flex justify-between text-[var(--text-body)]">
                  <span className="text-[var(--text-secondary)]">Individualios:</span>
                  <span className="font-semibold text-white">{lang.individual}</span>
                </p>
                <p className="flex justify-between text-[var(--text-body)]">
                  <span className="text-[var(--text-secondary)]">Grupėje:</span>
                  <span className="font-semibold text-white">{lang.group}</span>
                </p>
              </div>

              {/* Button */}
              <Link
                href="/kalbu-kursai"
                className="mt-6 rounded-[14px] bg-[var(--accent)] py-3 text-center font-semibold text-white transition-all duration-200 hover:bg-[var(--accent-hover)]"
              >
                Registruotis
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}