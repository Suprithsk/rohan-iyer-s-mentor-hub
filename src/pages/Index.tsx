import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import IncludedSection from "@/components/IncludedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <IncludedSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
