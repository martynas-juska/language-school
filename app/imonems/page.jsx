import ImonemsFeatures from "@/components/ImonemsFeatures";
import ImonemsFinalCTA from "@/components/ImonemsFinalCTA";
import ImonemsHero from "@/components/ImonemsHero";
import ImonemsProcessSection from "@/components/ImonemsProcessSection";
import ImonemsSolutionSection from "@/components/ImonemsSolutionSection";
import ImonemsTeachersCarousel from "@/components/ImonemsTeachersCarousel";
import ImonemsTeachersSection from "@/components/ImonemsTeachersSection";

export default function Imonems() {
  return (
    <>
      <ImonemsHero />
      <ImonemsFeatures />
      <ImonemsSolutionSection  />
      <ImonemsProcessSection />
      <ImonemsTeachersSection />
      <ImonemsTeachersCarousel />
      <ImonemsFinalCTA />
    </>
  );
}