import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <Container className="text-center">
        <p className="text-8xl font-bold text-slate-200 font-heading">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/quote" variant="secondary">
            Request a Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
