import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ScrollReveal key={product.id} delay={index * 0.08}>
          <ProductCard product={product} />
        </ScrollReveal>
      ))}
    </div>
  );
}
