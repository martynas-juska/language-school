import Image from "next/image";
import Link from "next/link";

export default function TutoringSection() {
  return (
    <section className="grid min-h-screen lg:grid-cols-2">
      {/* Left: text */}
      <div className="flex items-center bg-[var(--bg)] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-xl">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Korepetitoriaus Paslaugos
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-body)]">
            Reikia individualaus dėmesio? Mūsų korepetitoriai teikia individualias
            pamokas, pritaikytas Jūsų poreikiams ir mokymosi tempui. Padėsime Jums
            pagilinti žinias konkrečiose kalbos srityse, pasiruošti egzaminams ar
            tiesiog pasiekti asmeninių kalbos mokymosi tikslų. Susisiekite ir
            aptarsime Jūsų poreikius!
          </p>
          <Link
            href="/kontaktai"
            className="mt-10 inline-block rounded-[18px] bg-[var(--accent)] px-10 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-[3px] hover:bg-[var(--accent-hover)] hover:shadow-[0_12px_35px_var(--hero-glow)]"
          >
            Kontaktai
          </Link>
        </div>
      </div>

      {/* Right: full image half */}
      <div className="relative min-h-[50vh] lg:min-h-screen">
        <Image
          src="/images/tutoring.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}