import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import IndustryTabs from "@/components/products/IndustryTabs";
import CTABanner from "@/components/layout/CTABanner";

export const metadata: Metadata = {
  title: "Products & Solutions",
  description:
    "Explore Meraki Industries' flexible packaging solutions for pharmaceutical, food & beverage, and cosmetics industries. Custom-engineered films, pouches, and laminates.",
};

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

<CTABanner
        heading="Need a custom packaging solution?"
        description="Our engineering team can develop tailored material structures for your specific requirements."
        buttonText="Start a Project"
        buttonHref="/quote"
      />
    </>
  );
}
