"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProductGrid from "./ProductGrid";
import { products } from "@/data/products";

const categories = [
  "All",
  "Food and Beverage",
  "Dairy",
  "Pharmaceutical",
  "Cosmetics",
];

export default function IndustryTabs() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(false);

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.categories.includes(active));

  return (
    <div>
      {/* Dropdown filter */}
      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-xs">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm hover:border-slate-400 transition-colors"
          >
            <span>
              {active === "All" ? "Filter By Category" : active}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-slate-400 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
          {open && (
            <div className="absolute z-20 mt-1 w-full rounded-lg border border-slate-200 bg-white shadow-lg py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActive(cat);
                    setOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                    active === cat
                      ? "bg-slate-100 text-slate-900 font-medium"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <ProductGrid products={filtered} />
    </div>
  );
}
