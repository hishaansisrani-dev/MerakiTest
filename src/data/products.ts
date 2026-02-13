import { Product } from "@/lib/types";

export const products: Product[] = [
  // Pharmaceutical
  {
    id: "aluminium-blister-foil",
    name: "Aluminium Blister Foil",
    description:
      "Pharmaceutical-grade aluminium blister foil for tablets and capsules. Provides superior barrier protection against moisture, oxygen, and light to ensure drug stability and shelf life.",
    specs: [
      "Hard-tempered aluminium alloy 8021/8079",
      "Heat-seal lacquer on one side",
      "Print-receptive coating",
      "20–30 micron thickness range",
    ],
    image: "/images/products/aluminium-blister-foil.png",
    category: "pharmaceutical",
  },
  {
    id: "pharma-alu-foil-ffs",
    name: "Aluminium Foil for FFS Applications",
    description:
      "High-performance aluminium foil engineered for Form-Fill-Seal machines in pharmaceutical and nutraceutical packaging. Ensures precise dosing and tamper evidence.",
    specs: [
      "20–40 micron thickness",
      "Suitable for FFS machines",
      "Pharma & food grade",
      "Excellent barrier properties",
    ],
    image: "/images/products/aluminum-foil-ffs.png",
    category: "pharmaceutical",
  },
  {
    id: "pharma-laminates",
    name: "Pharmaceutical Laminates",
    description:
      "Multi-layer laminate structures for pharmaceutical sachets, strip packs, and overwraps. Engineered for compliance with global pharmacopoeia standards.",
    specs: [
      "Alu-PET / PET-Alu structures",
      "Bi/Tri/Quad layer options",
      "Customizable barrier properties",
      "Child-resistant configurations",
    ],
    image: "/images/products/product-06.png",
    category: "pharmaceutical",
  },
  // Food & Beverage
  {
    id: "shrink-sleeves",
    name: "PVC/PETG Shrink Sleeves",
    description:
      "360-degree shrink sleeve labels for bottles, cans, and containers. Full-body graphics with tamper-evident bands for beverages, food, and cosmetics.",
    specs: [
      "PVC & PETG materials",
      "35–50 micron thickness",
      "High shrink ratio",
      "Tamper-evident perforations",
    ],
    image: "/images/products/product-08.png",
    category: "food-beverage",
  },
  {
    id: "opp-bopp-labels",
    name: "OPP/BOPP Wrap-Around Labels",
    description:
      "High-clarity wrap-around labels for bottles and containers. Ideal for water, juice, dairy, and beverage applications with vibrant print quality.",
    specs: [
      "OPP & BOPP substrates",
      "Various thickness options",
      "High-speed application ready",
      "Up to 10-color gravure print",
    ],
    image: "/images/products/product-03.jpg",
    category: "food-beverage",
  },
  {
    id: "food-laminates",
    name: "Bi/Tri/Quad Laminates",
    description:
      "Multi-layer flexible laminates for food, snack, and FMCG packaging. Custom barrier structures designed to extend shelf life and protect product freshness.",
    specs: [
      "Bi, Tri & Quad layer constructions",
      "Customizable barrier combinations",
      "High-speed machine compatible",
      "Matt/gloss finish options",
    ],
    image: "/images/products/product-07.jpg",
    category: "food-beverage",
  },
  {
    id: "pre-cut-lids",
    name: "Aluminium Pre-Cut Lids",
    description:
      "Pre-cut aluminium lids for dairy cups, yogurt pots, and food containers. Available in a wide range of diameters with custom printing and embossing.",
    specs: [
      "73–127 mm diameter range",
      "Heat-seal lacquer coated",
      "Custom embossing & printing",
      "Suitable for dairy, water, juices & sauces",
    ],
    image: "/images/products/aluminum-pre-cut-lids.png",
    category: "food-beverage",
  },
  {
    id: "mix-pap",
    name: "Mix-PAP Lidding Films",
    description:
      "Paper-based lidding film solutions for yogurt, desserts, and dairy products. Combining sustainability with excellent seal integrity and peel performance.",
    specs: [
      "Paper-aluminium composite",
      "Peelable seal technology",
      "Eco-friendly option",
      "Custom printing available",
    ],
    image: "/images/products/product-05.png",
    category: "food-beverage",
  },
  {
    id: "dairy-foil-ffs",
    name: "Aluminium Foil for Dairy FFS",
    description:
      "Aluminium foil specifically designed for Form-Fill-Seal dairy packaging lines. Ensures freshness and extends shelf life for milk, yogurt, and cream products.",
    specs: [
      "20–40 micron thickness",
      "High-speed FFS compatible",
      "Excellent heat-seal properties",
      "Full barrier protection",
    ],
    image: "/images/products/product-04.png",
    category: "food-beverage",
  },
  // Cosmetics
  {
    id: "cosmetics-packaging",
    name: "Cosmetics Flexible Packaging",
    description:
      "Premium flexible packaging solutions for skincare, haircare, and beauty products. Luxury finishes with sustainable material options that protect product integrity.",
    specs: [
      "Laminate & mono-material options",
      "Soft-touch & matte finishes",
      "Custom shapes & sizes",
      "Eco-friendly substrates available",
    ],
    image: "/images/about/about-main.png",
    category: "cosmetics",
  },
  {
    id: "cosmetics-shrink-sleeves",
    name: "Cosmetic Shrink Sleeves",
    description:
      "High-quality shrink sleeve labels for cosmetic bottles, jars, and tubes. Full-circumference decoration with vibrant color reproduction and premium shelf appeal.",
    specs: [
      "PVC & PETG substrates",
      "360-degree coverage",
      "Tamper-evident bands",
      "Metallic & holographic options",
    ],
    image: "/images/about/facility.webp",
    category: "cosmetics",
  },
  {
    id: "cosmetics-laminates",
    name: "Cosmetic Laminates & Sachets",
    description:
      "Multi-layer laminates for single-use sachets, sample packs, and refill pouches. Designed for serums, lotions, masks, and other cosmetic products.",
    specs: [
      "PET/AL/PE structures",
      "Custom die-cut shapes",
      "Foil stamping & embossing",
      "High-barrier protection",
    ],
    image: "/images/products/product-img.png",
    category: "cosmetics",
  },
];
