import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MerakiStory() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-meraki-500 mb-3">
                Our Story
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Precision Manufacturing. Proven Performance.
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Meraki Industries LLC, a fully integrated flexible packaging
                  manufacturer and converter, serves the pharmaceutical, food
                  &amp; beverage, dairy, and cosmetics sectors. Through advanced
                  material science, precision converting, and high-definition
                  printing, we support customers operating in regulated and
                  performance-critical environments.
                </p>
                <p>
                  Our processes are engineered to deliver consistent performance,
                  reliable machinability, and dependable supply across high-speed
                  production operations. Operating to internationally recognized
                  quality and safety standards, we provide regional and global
                  partners with the technical expertise and manufacturing
                  consistency required to support operational efficiency and
                  brand integrity.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative h-96 lg:h-[520px]">
              {/* Large hero image — back left */}
              <div className="absolute top-0 left-0 w-[62%] h-[58%] rounded-2xl overflow-hidden shadow-xl z-10">
                <Image
                  src="/images/facility/machines/machine-6.jpg"
                  alt="WAC-1300 lamination line"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Top-right, slight rotation */}
              <div className="absolute top-4 right-0 w-[42%] h-[44%] rounded-xl overflow-hidden shadow-lg rotate-2 z-20">
                <Image
                  src="/images/facility/machines/machine-1.jpg"
                  alt="Sleeve EVO converting machine"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Middle overlap — sits between rows */}
              <div className="absolute top-[38%] left-[28%] w-[40%] h-[34%] rounded-xl overflow-hidden shadow-2xl -rotate-1 z-30 ring-4 ring-white">
                <Image
                  src="/images/facility/machines/machine-5.jpg"
                  alt="Slitting and rewinding machine"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom-left, angled */}
              <div className="absolute bottom-0 left-0 w-[38%] h-[42%] rounded-xl overflow-hidden shadow-lg -rotate-2 z-20">
                <Image
                  src="/images/facility/machines/machine-3.jpg"
                  alt="Rotogravure press detail"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom-center */}
              <div className="absolute bottom-2 left-[34%] w-[32%] h-[36%] rounded-xl overflow-hidden shadow-lg rotate-1 z-10">
                <Image
                  src="/images/facility/machines/machine-4.jpg"
                  alt="Label converting equipment"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom-right, larger tilt */}
              <div className="absolute bottom-0 right-0 w-[38%] h-[44%] rounded-2xl overflow-hidden shadow-xl -rotate-3 z-20">
                <Image
                  src="/images/facility/machines/machine-2.jpg"
                  alt="Rotogravure printing press"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
