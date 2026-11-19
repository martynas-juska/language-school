import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { teachers } from "@/lib/teachers";

export default function TeachersSection() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>
        <SectionHeading
          eyebrow="Dėstytojai"
          title="Profesionali mokytojų komanda"
          description="Lertman didžiuojasi subūręs profesionalų komandą, kurią sudaro patyrę dėstytojai, įgiję vertingą patirtį gyvendami ir dirbdami šalyse, kurių kalbas jie dėsto."
          center
        />

        {/* 3 teachers: one column on phones, three side by side from tablets up */}
        <div className="mx-auto mt-12 grid max-w-md gap-6 md:max-w-none md:grid-cols-3">
          {teachers.map((t) => (
            <article
              key={`${t.name}-${t.language}`}
              className="glow-card group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <Image
                src={t.image}
                alt={`${t.name}, ${t.language}`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="eyebrow">{t.language}</p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">{t.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}