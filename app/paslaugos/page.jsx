import ContactForm from "@/components/ContactForm";
import DocumentsSection from "@/components/DocumentsSection";
import PaslaugosHero from "@/components/PaslaugosHero";
import ServicesGrid from "@/components/ServicesGrid";
import TeacherProgramSection from "@/components/TeacherProgramSection";
import TekstuRasymasSection from "@/components/TekstuRasymasSection";
import TekstuRasymasWhySection from "@/components/TekstuRasymasWhySection";
import TranslationsSection from "@/components/TranslationsSection";
import TutoringSection from "@/components/TutoringSection";

export default function Paslaugos() {
  return (
    <>
      <PaslaugosHero />
      <ServicesGrid />
      <DocumentsSection />
      <TranslationsSection />
      <TutoringSection />
      <TeacherProgramSection />
      <TekstuRasymasSection />
      <TekstuRasymasWhySection />
      <ContactForm />      
    </>
  );
}