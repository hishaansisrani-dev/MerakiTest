import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Heart,
  GraduationCap,
  Clock,
  DollarSign,
  Users,
  Leaf,
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive medical insurance. Just for you.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description:
      "Continuous training programs from professionals.",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description:
      "Flexible schedules, generous PTO, and paid parental leave to support your life outside work.",
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description:
      "Market-leading salaries. Real rewards. Built for your future.",
  },
  {
    icon: Users,
    title: "Team Culture",
    description:
      "Regular team events, cross-department collaboration, and a supportive community.",
  },
  {
    icon: Leaf,
    title: "Sustainability Mission",
    description:
      "Be part of our commitment to developing eco-friendly packaging solutions for a better future.",
  },
];

export default function BenefitsGrid() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <Container>
        <SectionHeading
          title="Why Join Meraki"
          subtitle="We invest in our people because they are the foundation of everything we do"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.08}>
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <benefit.icon className="h-8 w-8 text-meraki-500 mb-4" />
                <h3 className="font-heading text-base font-bold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
