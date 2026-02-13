import { Metadata } from "next";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import QuoteForm from "@/components/quote/QuoteForm";
import TrustSidebar from "@/components/quote/TrustSidebar";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Get a custom packaging quote from Meraki Industries. Our team will respond within 24 hours with a detailed proposal for your flexible packaging needs.",
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-slate-900 pt-32 pb-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Request a Quote
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Tell us about your packaging requirements and our engineering team
              will prepare a customized proposal.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
                  <h2 className="font-heading text-xl font-bold text-slate-900 mb-6">
                    Project Details
                  </h2>
                  <QuoteForm />
                </div>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={0.2}>
                <TrustSidebar />
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
