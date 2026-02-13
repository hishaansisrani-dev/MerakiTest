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
                People. Passion. Packaging.
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900">&ldquo;Meraki&rdquo;</strong>{" "}
                  (meh-RAH-kee) is a Greek word that describes the act of doing
                  something with soul, creativity, and love &mdash; pouring
                  yourself wholly into your work. It is the essence of what we
                  do.
                </p>
                <p>
                  Meraki Industries LLC is the premier destination for customized
                  packaging solutions. We deliver tailor-made flexible and rigid
                  packaging products, understanding the critical role that
                  packaging plays in enhancing product appeal, ensuring
                  durability, and extending shelf life.
                </p>
                <p>
                  With over 1,200 employees and a century of combined industry
                  expertise across five specialized business units, we serve
                  pharmaceutical, food &amp; beverage, and cosmetics companies
                  that demand packaging solutions meeting the most rigorous
                  quality and regulatory standards.
                </p>
                <p className="text-slate-900 font-medium italic">
                  Our mission: Packaging with the highest benefit at the lowest
                  impact on the environment.
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
