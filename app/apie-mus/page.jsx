import ApieMusExperienceSection from "@/components/ApieMusExperienceSection";
import ApieMusFinalCTA from "@/components/ApieMusFinalCTA";
import ApieMusHero from "@/components/ApieMusHero";
import ApieMusPrinciplesSection from "@/components/ApieMusPrinciplesSection";
import ApieMusStorySection from "@/components/ApieMusStorySection";
import ApieMusHumanSection from "@/components/kalbu-kursai/ApieMusHumanSection";


export default function ApieMus() {
  return (
    <>
        <ApieMusHero />
        <ApieMusStorySection />
        <ApieMusExperienceSection />
        <ApieMusPrinciplesSection />
        <ApieMusHumanSection />
        <ApieMusFinalCTA />
    </>
  );
}