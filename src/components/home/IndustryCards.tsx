import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Pharmaceutical",
    description:
      "Blister foils, rigid PVC, PVDC, and cold-form blister packaging engineered for pharmaceutical safety, compliance, and regulatory standards worldwide.",
    image: "/images/products/product-02.jpg",
    href: "/products",
  },
  {
    title: "Food & Beverage",
    description:
      "High-barrier laminates, shrink sleeves, and wrap-around labels that preserve freshness, extend shelf life, and deliver standout shelf presence.",
    image: "/images/products/product-08.png",
    href: "/products",
  },
  {
    title: "Dairy",
    description:
      "Aluminium pre-cut lids, lidding films, and FFS foils tailored for yogurt, milk, cream, and other dairy products with superior seal integrity.",
    image: "/images/products/aluminum-pre-cut-lids.png",
    href: "/products",
  },
  {
    title: "Cosmetics",
    description:
      "Premium packaging solutions for skincare, haircare, and beauty products with luxury finishes and sustainable material options.",
    image: "/images/about/about-main.png",
    href: "/products",
  },
];

export default function IndustryCards() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <Container>
        <SectionHeading
          title="Industries We Serve"
          subtitle="Specialized packaging solutions engineered for the unique demands of each sector"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.title} delay={index * 0.12}>
              <Link href={industry.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 transition-shadow hover:shadow-lg">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      {industry.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {industry.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-meraki-500 transition-colors">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
