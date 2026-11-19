import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const HEADLINE = "We Make Amazing Things Every Day.";

/** A delay for the CSS load animation (.rv-load in globals.css). */
const delay = (seconds) => ({ "--d": `${seconds}s` });

export default function Hero() {
  const words = HEADLINE.split(" ");
  const after = 0.15 + words.length * 0.06; // when the headline has finished

  return (
    <section className="relative isolate overflow-hidden">
      {/* Photo, faded into the page colour so the text stays readable */}
      <div className="absolute inset-0 -z-20">
        <Image src="/images/language-hero.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>
      {/* Faint grid + slowly drifting teal glow */}
      <div aria-hidden="true" className="hero-backdrop pointer-events-none absolute inset-0 -z-10" />

      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24">
        <div className="max-w-3xl">
          <h1
            className="text-4xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            style={{ fontStretch: "118%" }}
          >
            {words.map((word, i) => (
              <span key={i}>
                <span className="rv-load inline-block" style={delay(0.15 + i * 0.06)}>
                  {word}
                </span>
                {i < words.length - 1 && " "}
              </span>
            ))}
          </h1>

          <p className="rv-load mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground" style={delay(after)}>
            Practical knowledge and real-world skills to help you grow, achieve, and inspire.
          </p>

          <div className="rv-load mt-10 flex flex-wrap gap-3" style={delay(after + 0.12)}>
            <Link href="#" className="btn-primary text-base">
              Registruotis
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/kontaktai" className="btn-outline text-base">
              Susisiekti
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}