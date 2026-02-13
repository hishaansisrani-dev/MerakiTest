import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/stats";

export default function StatsCounter() {
  return (
    <section className="relative -mt-16 z-20">
      <Container>
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 lg:py-10 text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-meraki-500 font-heading">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
