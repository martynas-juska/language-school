import Image from "next/image";
import Container from "@/components/Container";

const teachers = [
  {
    name: "Vaida Koricke",
    language: "Norvegų kalba",
    image: "/images/teachers/vaida.jpg",
  },
  {
    name: "Vardas Pavardė",
    language: "Švedų kalba",
    image: "/images/teachers/teacher-2.jpg",
  },
  {
    name: "Vardas Pavardė",
    language: "Anglų kalba",
    image: "/images/teachers/teacher-3.jpg",
  },
];

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
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Mūsų komanda
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1] tracking-tight text-white sm:text-5xl lg:text-6xl">
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
        className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-[var(--accent)]/[0.04] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#091421]">
        {/* PHOTO */}
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06101d] via-[#07101C]/15 to-transparent" />

        {/* Slight accent overlay on hover */}
        <div className="absolute inset-0 bg-[var(--accent)]/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* NUMBER */}
        <div className="absolute left-6 top-6">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-white/50">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* FUTURE PROFILE INDICATOR */}
        <div className="absolute right-6 top-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#07101C]/20 text-white/70 backdrop-blur-md transition-all duration-300 group-hover:border-[var(--accent)]/50 group-hover:bg-[var(--accent)] group-hover:text-[#07101C]">
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
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              {teacher.language}
            </span>

            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-[1.7rem]">
              {teacher.name}
            </h3>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-white/45">
                Lertman dėstytojas
              </span>

              <span className="translate-y-1 text-xs font-medium text-white/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white/65">
                Susipažinti
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}