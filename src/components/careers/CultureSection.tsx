import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CultureSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative h-96 lg:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="/images/careers/careers-hero.webp"
                alt="Meraki Industries team"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-meraki-500 mb-3">
                Life at Meraki
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Build Your Career with Purpose
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  At Meraki Industries, you&apos;re not just filling a role —
                  you&apos;re joining a team that&apos;s passionate about
                  engineering packaging solutions that protect products people
                  depend on every day.
                </p>
                <p>
                  We foster an environment where curiosity is encouraged,
                  expertise is valued, and every team member has the opportunity
                  to make a meaningful impact on global industries.
                </p>
                <p>
                  From our manufacturing floor to our design studio, we believe
                  that diverse perspectives and collaborative problem-solving
                  drive the best results.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
