import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/language-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlay: dark base + brand tint */}
        {/* <div className="absolute inset-0 bg-[#050816]/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#7A3CFF]/25 via-transparent to-[#4AB8FF]/15" /> */}
      </div>

      <Container className="flex min-h-screen flex-col justify-center py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            We Make Amazing Things Every Day.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-[#C8D2E8]">
            Practical knowledge and real-world skills to help you grow, achieve,
            and inspire.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#"
              className="rounded-[18px] bg-[#7A3CFF] px-8 py-4 font-semibold text-white transition-all duration-200 hover:-translate-y-[3px] hover:bg-[#8F53FF] hover:shadow-[0_12px_35px_rgba(122,60,255,0.30)]"
            >
              Registruotis
            </Link>
            <Link
              href="#"
              className="rounded-[18px] border border-[#AAB7D4] px-8 py-4 font-semibold text-white transition-all duration-200 hover:-translate-y-[3px] hover:bg-white/[0.08]"
            >
              Susisiekti
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}