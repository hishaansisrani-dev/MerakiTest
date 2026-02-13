import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
};

export default function SectionHeading({ title, subtitle, centered = true, light = false, className }: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12 lg:mb-16", className)}>
      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 max-w-2xl text-lg", centered && "mx-auto", light ? "text-slate-300" : "text-slate-600")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
