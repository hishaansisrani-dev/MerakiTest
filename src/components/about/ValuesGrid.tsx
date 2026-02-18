import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Crosshair, Lightbulb, Scale, Handshake } from "lucide-react";

const values = [
  {
    icon: Crosshair,
    title: "Precision",
    description:
      "Every micron matters. Our tolerances are tight because your standards are high.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We invest in the materials science and process engineering that keep your products ahead.",
  },
  {
    icon: Scale,
    title: "Integrity",
    description:
      "Transparent processes, documented quality, traceable materials. Trust built on evidence.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "Your packaging challenges become our engineering objectives. We succeed when you do.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900">
      <Container>
        <SectionHeading
          title="Our Core Values"
          subtitle="The principles that guide every decision we make"
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 0.1}>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800">
                  <value.icon className="h-8 w-8 text-meraki-500" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
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
