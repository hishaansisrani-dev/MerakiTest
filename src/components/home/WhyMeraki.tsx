import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Target, ShieldCheck, FlaskConical, Globe } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "ISO-Certified Quality",
    description:
      "ISO 9001:2015, ISO 22000:2018, and ISO 15378:2017 certified. Our quality systems meet the most rigorous global standards for packaging.",
  },
  {
    icon: Target,
    title: "Precision & Performance",
    description:
      "Every film, laminate, and seal is engineered to exact specifications. Precision, protection, and performance in every product we deliver.",
  },
  {
    icon: FlaskConical,
    title: "Custom Solutions",
    description:
      "Tailor-made flexible packaging products designed around your specific product, market, and regulatory requirements.",
  },
  {
    icon: Globe,
    title: "Sustainable Practices",
    description:
      "Packaging with the highest benefit at the lowest impact on the environment. Committed to recyclable and eco-friendly packaging solutions.",
  },
];

export default function WhyMeraki() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900">
      <Container>
        <SectionHeading
          title="Why Meraki Industries"
          subtitle="Engineering excellence that sets the standard in flexible packaging"
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <value.icon className="h-10 w-10 text-meraki-500 mb-4" />
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
