import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import MerakiStory from "@/components/about/MerakiStory";
import Timeline from "@/components/about/Timeline";
import ValuesGrid from "@/components/about/ValuesGrid";
import CTABanner from "@/components/layout/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Meraki Industries — our story, values, and commitment to engineering excellence in flexible packaging for pharmaceutical, food, and cosmetics industries.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Crafted with Meraki
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Where industrial manufacturing meets meticulous craftsmanship.
              Every package we produce carries the soul of our commitment to
              excellence.
            </p>
          </div>
        </Container>
      </section>

      <MerakiStory />
      <Timeline />
      <ValuesGrid />

      {/* Facility showcase */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Our Facility
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                120,000 sq ft of state-of-the-art manufacturing space equipped
                with the latest extrusion, lamination, and printing technology.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                src: "/images/products/aluminum-foil-ffs.png",
                alt: "Aluminium foil rolls — manufacturing",
              },
              {
                src: "/images/products/aluminum-pre-cut-lids.png",
                alt: "Pre-cut lids — dairy packaging",
              },
              {
                src: "/images/products/product-07.jpg",
                alt: "Flexible laminates — production",
              },
            ].map((img, index) => (
              <ScrollReveal key={img.alt} delay={index * 0.15}>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        heading="Ready to partner with us?"
        description="Let's discuss how Meraki Industries can solve your packaging challenges."
      />
    </>
  );
}
