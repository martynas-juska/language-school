import Hero from "@/components/Hero";
import LanguageTabs from "@/components/LanguageTabs";
import StatsSection from "@/components/StatsSection";
import TeachersSection from "@/components/TeachersSection";
import WhyUsSection from "@/components/WhyUsSection";
import Image from "next/image";

export default function Home() {
  return (
        <>
            <Hero />
            <LanguageTabs />
            <StatsSection />
            <TeachersSection />
            <WhyUsSection />
        </>
  );
}


