import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: 1,
    title: "Consult",
    description: "We learn your product, market, and regulatory requirements through in-depth technical consultation.",
  },
  {
    number: 2,
    title: "Design",
    description: "Our engineers design optimal material structures, barrier properties, and packaging formats.",
  },
  {
    number: 3,
    title: "Prototype",
    description: "Rapid prototyping with real materials to validate performance, machinability, and shelf appeal.",
  },
  {
    number: 4,
    title: "Produce",
    description: "Full-scale manufacturing with in-line quality monitoring and real-time process control.",
  },
  {
    number: 5,
    title: "Deliver",
    description: "On-time delivery with complete documentation, COAs, and ongoing technical support.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Our Process"
          subtitle="From initial consultation to final delivery — a systematic approach to packaging excellence"
        />

        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.1}>
                <div className="relative text-center lg:pt-0">
                  {/* Step number */}
                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white border-2 border-slate-200 shadow-sm">
                    <span className="text-3xl font-bold text-meraki-500 font-heading">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
