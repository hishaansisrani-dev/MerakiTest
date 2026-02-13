import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

type CTABannerProps = {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CTABanner({
  heading = "Ready to elevate your packaging standards?",
  description = "Get a custom quote for your packaging needs. Our team responds within 24 hours.",
  buttonText = "Request a Quote",
  buttonHref = "/quote",
}: CTABannerProps) {
  return (
    <section className="bg-slate-900 py-20 lg:py-24">
      <Container className="text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-8">
            <Button href={buttonHref} size="lg">
              {buttonText}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
