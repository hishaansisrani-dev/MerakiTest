import Image from "next/image";
import { Product } from "@/lib/types";
import { Check } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-slate-900">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {product.description}
        </p>
        <ul className="mt-4 space-y-1.5">
          {product.specs.map((spec) => (
            <li
              key={spec}
              className="flex items-start gap-2 text-xs text-slate-500"
            >
              <Check className="h-3.5 w-3.5 text-meraki-500 mt-0.5 flex-shrink-0" />
              {spec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
