import Image from "next/image";
import Container from "@/components/Container";
import { teachers } from "@/lib/teachers";

export default function ApieMusTeachersSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-top)] py-20 lg:py-28">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 top-1/3 h-[520px] w-[520px] rounded-full bg-[var(--accent)]/[0.035] blur-[150px]"
      />

      <Container>
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-20">
          <div>
            <span className="eyebrow">
              Mūsų komanda
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Žmonės, kurie
              <br />
              kalbą{" "}
              <span className="text-[var(--accent)]">pažįsta.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-relaxed text-[var(--text-secondary)] lg:justify-self-end lg:text-lg">
            Mūsų dėstytojai turi ne tik kalbos žinių, bet ir realios
            tarptautinės patirties, padedančios kalbą perteikti gyvai ir
            praktiškai.
          </p>
        </div>

        {/* TEACHERS */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={`${teacher.name}-${index}`}
              teacher={teacher}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TeacherCard({ teacher, index }) {
  return (
    <div className="group relative cursor-pointer">
      {/* subtle shadow/glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-[1.5rem] bg-[var(--accent)]/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="glow-card relative aspect-[4/5] overflow-hidden rounded-2xl">
        {/* PHOTO */}
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />

        {/* Slight accent overlay on hover */}
        <div className="absolute inset-0 bg-[var(--accent)]/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* NUMBER */}
        <div className="absolute left-6 top-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* FUTURE PROFILE INDICATOR */}
        <div className="absolute right-6 top-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/20 text-foreground/80 backdrop-blur-md transition-all duration-300 group-hover:border-[var(--accent)]/50 group-hover:bg-[var(--accent)] group-hover:text-primary-foreground">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M3 8H13M9 4L13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* INFORMATION */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <div className="border-t border-white/20 pt-5">
            <span className="eyebrow">
              {teacher.language}
            </span>

            <h3 className="mt-2 text-2xl font-medium tracking-tight text-foreground sm:text-[1.7rem]">
              {teacher.name}
            </h3>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Lertman dėstytojas
              </span>

              <span className="translate-y-1 text-xs font-medium text-transparent transition-all duration-300 group-hover:translate-y-0 group-hover:text-foreground/80">
                Susipažinti
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}