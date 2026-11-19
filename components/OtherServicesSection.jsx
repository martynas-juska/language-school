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
        <div className="relative overflow-hidden rounded-2xl border">
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
              <p className="eyebrow mb-3">Paslaugos</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Kitos paslaugos
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                „Lertman“ siūlo profesionalias paslaugas, padedančias siekti
                asmeninių ir profesinių tikslų. Nuo kalbų mokymo iki su
                dokumentais ar gyvenimu užsienyje susijusios pagalbos – esame
                čia, kad palengvintume Jūsų kelią. Mūsų paslaugos apima ne tik
                kalbų pamokas, bet ir sprendimus, susijusius su darbu, studijomis
                ar integracija užsienyje.
              </p>
              <Link
                href="/paslaugos"
                className="mt-8 btn-primary text-base"
              >
                Plačiau
              </Link>
            </div>

            {/* Right: floating service chips */}
            <div className="relative hidden h-72 lg:block">
              {chips.map((chip) => (
                <div
                  key={chip.label}
                  className="absolute rounded-full border border-primary/30 bg-card/70 px-4 py-2 text-sm font-medium text-foreground shadow-[0_15px_40px_-20px_rgb(24_181_179/0.6)] backdrop-blur-md"
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