import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: 1,
    title: "Enquire",
    description:
      "Tell us about your product, market, and regulatory requirements through an in-depth technical consultation.",
  },
  {
    number: 2,
    title: "Quote",
    description:
      "We assess your needs and provide a tailored cost estimate and proposal for your review and approval.",
  },
  {
    number: 3,
    title: "Artwork, Design & Approvals",
    description:
      "Our engineers and designers work with you to create optimal artwork, material structures, barrier properties, and packaging formats tailored to your brand \u2014 signed off by you before moving forward.",
  },
  {
    number: 4,
    title: "Pre-Production & Sampling",
    description:
      "We produce a printed sample using real materials so you can validate quality, appearance, and performance before full production begins.",
  },
  {
    number: 5,
    title: "Produce",
    description:
      "Once you\u2019ve signed off, we move into full-scale manufacturing with in-line quality monitoring and real-time process control.",
  },
  {
    number: 6,
    title: "Deliver",
    description:
      "Your finished order is packaged and shipped on time, complete with full documentation, COAs, and ongoing technical support.",
  },
  {
    number: 7,
    title: "Customer Satisfaction Report",
    description:
      "We follow up to gather your feedback, ensuring the final product met your expectations and identifying any improvements for future orders.",
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">
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
