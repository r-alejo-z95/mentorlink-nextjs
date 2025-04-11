import ContactSection from "@/components/contact-section";
import CallToAction from "@/components/cta-section";
import Features from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Pricing />
      <ContactSection />
      <CallToAction />
    </>
  );
}
