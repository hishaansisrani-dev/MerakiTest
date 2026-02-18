import Image from "next/image";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background */}
      <Image
        src="/images/hero/Meraki_industires_hero.png"
        alt="Meraki Industries — flexible packaging manufacturing facility"
        fill
        className="object-cover"
        priority
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Premium Flexible Packaging for Global Industries
            </h1>
            <p className="mt-6 text-lg text-slate-300 sm:text-xl max-w-2xl leading-relaxed">
              Engineered for quality, compliance &amp; scale — serving
              pharmaceutical, food &amp; beverage, dairy, and cosmetics
              manufacturers worldwide.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/products" variant="outline" size="lg">
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
