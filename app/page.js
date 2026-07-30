import CorporateSection from "@/components/CorporateSection";
import CoursesSection from "@/components/CoursesSection";
import Hero from "@/components/Hero";
import LanguageTabs from "@/components/LanguageTabs";
import OtherServicesSection from "@/components/OtherServicesSection";
import ServicesCardsSection from "@/components/ServicesCardsSection";
import StatsSection from "@/components/StatsSection";
import TeachersSection from "@/components/TeachersSection";
import WhyLertmanSection from "@/components/WhyLertmanSection";
import WhyUsSection from "@/components/WhyUsSection";
import Image from "next/image";

export default function Home() {
  return (
        <>
            <Hero />
            <LanguageTabs />
            <CoursesSection />
            <StatsSection />
            <TeachersSection />
            <WhyUsSection />
            <WhyLertmanSection />
            <CorporateSection />
            <OtherServicesSection />
            <ServicesCardsSection />
        </>
  );
}


