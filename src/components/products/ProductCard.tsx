"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const hasMultiple = product.images.length > 1;

  const prev = () =>
    setCurrentImage((i) =>
      i === 0 ? product.images.length - 1 : i - 1
    );
  const next = () =>
    setCurrentImage((i) =>
      i === product.images.length - 1 ? 0 : i + 1
    );

  return (
    <div className="rounded-b-2xl border border-slate-300 overflow-hidden bg-white hover:shadow-lg transition-shadow">
      {/* Image carousel */}
      <div className="relative h-[270px] bg-slate-100">
        <Image
          src={product.images[currentImage]}
          alt={product.name}
          fill
          className="object-cover"
        />
        {hasMultiple && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow transition-colors"
            >
              <ChevronLeft className="h-4 w-4 text-slate-700" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow transition-colors"
            >
              <ChevronRight className="h-4 w-4 text-slate-700" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === currentImage ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-8 lg:p-10">
        {/* Category tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.categories.map((cat) => (
            <span
              key={cat}
              className="inline-block rounded-lg bg-green-100 px-3 py-1.5 text-xs font-medium text-green-900"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-bold text-slate-900">
          {product.name}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
}
