import AboutSection from "@/components/AboutSection";
import ClientStoriesSection from "@/components/ClientStoriesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FormSection from "@/components/FormSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import WorksSection from "@/components/WorksSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <WorksSection />
      <CTASection />
      <ClientStoriesSection />
      <TeamSection />
      <FAQSection />
      <FormSection />
    </main>
  );
}
