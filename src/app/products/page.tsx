import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import IndustryTabs from "@/components/products/IndustryTabs";
import CTABanner from "@/components/layout/CTABanner";
import { Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Solutions",
  description:
    "Explore Meraki Industries' flexible packaging solutions for pharmaceutical, food & beverage, and cosmetics industries. Custom-engineered films, pouches, and laminates.",
};

const materials = [
  "BOPP (Biaxially Oriented Polypropylene)",
  "PET (Polyethylene Terephthalate)",
  "PE (Polyethylene) — LDPE, LLDPE, HDPE",
  "CPP (Cast Polypropylene)",
  "Nylon (Polyamide)",
  "Aluminum Foil",
  "Metallized Films",
  "PVDC (Polyvinylidene Chloride)",
  "EVOH (Ethylene Vinyl Alcohol)",
  "Paper / Kraft Laminates",
];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-slate-900 pt-32 pb-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Products &amp; Solutions
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Custom-engineered flexible packaging solutions designed for the
              unique demands of your industry.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            title="Packaging by Industry"
            subtitle="Select your industry to explore our specialized product lines"
          />
          <IndustryTabs />
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <Container>
          <SectionHeading
            title="Material Capabilities"
            subtitle="We work with a comprehensive range of substrates and barrier materials"
          />
          <ScrollReveal>
            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
              {materials.map((material) => (
                <div
                  key={material}
                  className="flex items-center gap-3 bg-white rounded-lg border border-slate-100 px-4 py-3"
                >
                  <Layers className="h-4 w-4 text-meraki-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{material}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <CTABanner
        heading="Need a custom packaging solution?"
        description="Our engineering team can develop tailored material structures for your specific requirements."
        buttonText="Start a Project"
        buttonHref="/quote"
      />
    </>
  );
}
