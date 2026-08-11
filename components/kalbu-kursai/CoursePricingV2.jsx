import Link from "next/link";

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

export default function CoursePricingV2() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Kokių kalbų mokome?
        </h2>

        <div className="mt-12 space-y-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="flex flex-col gap-6 rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[0_15px_60px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-1 md:flex-row md:items-center md:gap-8 md:px-8"
            >
              {/* Icon + name */}
              <div className="flex items-center gap-4 md:w-1/4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10">
                  <FlagIcon />
                </span>
                <h3 className="text-xl font-bold text-white">{lang.name}</h3>
              </div>

              {/* Prices — spread across the middle */}
              <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:gap-12">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                    Individualios
                  </p>
                  <p className="mt-1 font-semibold text-white">{lang.individual}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                    Grupėje
                  </p>
                  <p className="mt-1 font-semibold text-white">{lang.group}</p>
                </div>
              </div>

              {/* Button */}
              <Link
                href="/kalbu-kursai"
                className="rounded-[14px] bg-[var(--accent)] px-8 py-3 text-center font-semibold text-white transition-all duration-200 hover:bg-[var(--accent-hover)] md:shrink-0"
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