import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function TutoringSection() {
  return (
    <section className="grid lg:min-h-[80vh] lg:grid-cols-2">
      {/* Left: text */}
      <div className="flex items-center bg-[var(--bg)] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-xl">
          <p className="eyebrow mb-3">Korepetitorius</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Korepetitoriaus paslaugos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Reikia individualaus dėmesio? Mūsų korepetitoriai teikia individualias
            pamokas, pritaikytas Jūsų poreikiams ir mokymosi tempui. Padėsime Jums
            pagilinti žinias konkrečiose kalbos srityse, pasiruošti egzaminams ar
            tiesiog pasiekti asmeninių kalbos mokymosi tikslų. Susisiekite ir
            aptarsime Jūsų poreikius!
          </p>
          <Link
            href="/kontaktai"
            className="mt-10 btn-primary text-base"
          >
            Susisiekti
            <ArrowRight />
          </Link>
        </div>
      </div>

      {/* Right: full image half */}
      <div className="relative min-h-[50vh] lg:min-h-full">
        <Image
          src="/images/tutoring.jpg"
          alt="Individuali kalbos pamoka"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}