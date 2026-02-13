import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CertificationsGrid from "@/components/certifications/CertificationsGrid";
import CTABanner from "@/components/layout/CTABanner";
import { ClipboardCheck, Search, FileCheck, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications & Standards",
  description:
    "Meraki Industries is ISO 9001:2015, ISO 22000:2018, and ISO 15378:2017 certified, ensuring the highest quality standards in flexible packaging manufacturing.",
};

const qualitySteps = [
  {
    icon: ClipboardCheck,
    title: "Incoming Material Inspection",
    description:
      "Every raw material batch undergoes rigorous testing for physical properties, chemical composition, and compliance with specifications before entering production.",
  },
  {
    icon: Search,
    title: "In-Process Quality Control",
    description:
      "Real-time monitoring at every production stage including thickness measurement, seal strength testing, print registration, and barrier property verification.",
  },
  {
    icon: FileCheck,
    title: "Final Product Testing",
    description:
      "Comprehensive testing suite including tensile strength, puncture resistance, MVTR, OTR, migration testing, and accelerated aging studies.",
  },
  {
    icon: BarChart3,
    title: "Continuous Improvement",
    description:
      "Statistical process control, regular internal audits, CAPA tracking, and management review ensure our quality systems evolve with industry best practices.",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <section className="bg-slate-900 pt-32 pb-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Certifications &amp; Standards
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Our commitment to quality is validated by the world&apos;s most
              recognized certification bodies and regulatory agencies.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            title="Our Certifications"
            subtitle="Globally recognized standards that assure quality, safety, and reliability"
          />
          <CertificationsGrid />
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <Container>
          <SectionHeading
            title="Quality Assurance Process"
            subtitle="A systematic approach to quality from raw materials to finished product"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {qualitySteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.1}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm">
                    <step.icon className="h-6 w-6 text-meraki-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        heading="Need our certification documentation?"
        description="Request a complete certification package with copies of all relevant certificates and audit reports."
        buttonText="Request Certification Package"
        buttonHref="/quote"
      />
    </>
  );
}
