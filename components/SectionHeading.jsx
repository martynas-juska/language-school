import { Reveal, ScrambleText } from "@/components/Reveal";

/** A section's title block, as on RickNest: rises in on scroll, the small teal eyebrow "decodes". */
export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-wide text-primary uppercase">
          <ScrambleText text={eyebrow} />
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl" style={{ fontStretch: "112%" }}>
        {title}
      </h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </Reveal>
  );
}