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
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/Meraki_industires_hero.png"
                alt="Meraki Industries LLC — flexible packaging manufacturing"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
