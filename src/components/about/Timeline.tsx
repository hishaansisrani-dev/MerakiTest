import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const milestones = [
  {
    year: "2009",
    title: "Founded",
    description:
      "Meraki Industries established with a single extrusion line and a vision for premium flexible packaging.",
  },
  {
    year: "2012",
    title: "ISO 9001 Certified",
    description:
      "Achieved ISO 9001 certification, formalizing our commitment to quality management systems.",
  },
  {
    year: "2015",
    title: "Pharmaceutical Entry",
    description:
      "Expanded into pharmaceutical packaging with cGMP-compliant production lines and FDA registration.",
  },
  {
    year: "2018",
    title: "Facility Expansion",
    description:
      "Opened our state-of-the-art 120,000 sq ft manufacturing facility with advanced gravure printing capabilities.",
  },
  {
    year: "2021",
    title: "Sustainability Initiative",
    description:
      "Launched mono-material and recyclable packaging lines. Achieved ISO 14001 environmental certification.",
  },
  {
    year: "2024",
    title: "Global Reach",
    description:
      "Serving customers across 15+ countries with a team of 200+ packaging professionals.",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <Container>
        <SectionHeading
          title="Our Journey"
          subtitle="Key milestones in our pursuit of packaging excellence"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={milestone.year} delay={index * 0.1}>
                  <div
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-meraki-500 rounded-full -translate-x-1/2 mt-1.5 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-12 lg:ml-0 lg:w-1/2 ${
                        index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                      }`}
                    >
                      <span className="text-sm font-bold text-meraki-500">
                        {milestone.year}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-slate-900 mt-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
