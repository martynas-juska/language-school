import CoursePricing from "@/components/kalbu-kursai/CoursePricing";
import CoursePricingV2 from "@/components/kalbu-kursai/CoursePricingV2";
import CourseTypes from "@/components/kalbu-kursai/CourseTypes";
import KursaiHero from "@/components/kalbu-kursai/KursaiHero";
import LanguagesTabEurope from "@/components/kalbu-kursai/LanguagesTabEurope";

export default function KalbuKursai() {
  return (
    <>
      <KursaiHero />
      <CourseTypes />
      <CoursePricing />
      <CoursePricingV2 />    
      <LanguagesTabEurope />
    </>
  );
}