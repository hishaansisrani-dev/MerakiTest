import HeroSection from "@/components/home/HeroSection";
import StatsCounter from "@/components/home/StatsCounter";
import IndustryCards from "@/components/home/IndustryCards";
import WhyMeraki from "@/components/home/WhyMeraki";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import CertificationsBar from "@/components/home/CertificationsBar";
import CTABanner from "@/components/layout/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <IndustryCards />
      <WhyMeraki />
      <ProcessTimeline />
      <CertificationsBar />
      <CTABanner />
    </>
  );
}
