import { Metadata } from "next";
import Container from "@/components/ui/Container";
import CultureSection from "@/components/careers/CultureSection";
import BenefitsGrid from "@/components/careers/BenefitsGrid";
import CareerForm from "@/components/careers/CareerForm";
import CTABanner from "@/components/layout/CTABanner";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Meraki Industries and build your career in advanced packaging manufacturing. Explore open positions in engineering, quality, sales, and design.",
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-slate-900 pt-32 pb-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Unwrap Your Talent. Shape the World.
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Meaningful jobs that contribute to a better tomorrow — through
              recyclable packaging solutions that protect goods, the
              environment, and save lives.
            </p>
          </div>
        </Container>
      </section>

      <CultureSection />
      <BenefitsGrid />
      <CareerForm />

      <CTABanner
        heading="Ready to make your mark?"
        description="We're always looking for talented individuals who share our passion for excellence."
      />
    </>
  );
}
