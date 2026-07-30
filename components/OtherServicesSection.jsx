import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const chips = [
  { label: "Vertimai", top: "8%", left: "10%" },
  { label: "CV rengimas", top: "34%", left: "48%" },
  { label: "Dokumentai", top: "60%", left: "18%" },
  { label: "Konsultacijos", top: "78%", left: "58%" },
];

export default function OtherServicesSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px]">
          {/* Background image */}
          <Image
            src="/images/services-banner.jpg"
            alt=""
            fill
            className="object-cover"
          />
          {/* Overlays for legibility + brand tint */}
          <div className="absolute inset-0 bg-[var(--bg)]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/70 to-transparent" />

          {/* Content grid */}
          <div className="relative grid items-center gap-10 p-10 sm:p-14 lg:grid-cols-2 lg:p-20">
            {/* Left: text + button */}
            <div>
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                Kitos Paslaugos
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-[var(--text-body)]">
                „Lertman“ siūlo profesionalias paslaugas, padedančias siekti
                asmeninių ir profesinių tikslų. Nuo kalbų mokymo iki su
                dokumentais ar gyvenimu užsienyje susijusios pagalbos – esame
                čia, kad palengvintume Jūsų kelią. Mūsų paslaugos apima ne tik
                kalbų pamokas, bet ir sprendimus, susijusius su darbu, studijomis
                ar integracija užsienyje.
              </p>
              <Link
                href="/paslaugos"
                className="mt-8 inline-block rounded-[18px] bg-[var(--accent)] px-10 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-[3px] hover:bg-[var(--accent-hover)] hover:shadow-[0_12px_35px_var(--hero-glow)]"
              >
                Plačiau
              </Link>
            </div>

            {/* Right: floating glass service chips */}
            <div className="relative hidden h-72 lg:block">
              {chips.map((chip) => (
                <div
                  key={chip.label}
                  className="absolute rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
                  style={{ top: chip.top, left: chip.left }}
                >
                  {chip.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}