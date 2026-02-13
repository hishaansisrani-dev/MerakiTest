"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import ProductGrid from "./ProductGrid";
import { products } from "@/data/products";

const tabs = [
  { id: "all", label: "All" },
  { id: "pharmaceutical", label: "Pharmaceutical" },
  { id: "food-beverage", label: "Food & Beverage" },
  { id: "cosmetics", label: "Cosmetics" },
] as const;

export default function IndustryTabs() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-lg bg-slate-100 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "px-5 py-2.5 text-sm font-medium rounded-md transition-all",
                active === tab.id
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <ProductGrid products={filtered} />
    </div>
  );
}
