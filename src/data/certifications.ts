import { Certification } from "@/lib/types";

export const certifications: Certification[] = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    standard: "Quality Management Systems",
    logo: "/images/certifications/iso-9001.png",
    description:
      "International standard for quality management systems, ensuring consistent product quality, customer satisfaction, and continuous improvement across all operations.",
    clientBenefit:
      "Guaranteed consistent quality in every production run with documented processes, traceability, and a commitment to continuous improvement.",
  },
  {
    id: "iso-22000",
    name: "ISO 22000:2018",
    standard: "Food Safety Management Systems",
    logo: "/images/certifications/iso-22000.png",
    description:
      "Comprehensive food safety management standard covering all organizations in the food chain, ensuring safe packaging materials for food and dairy products.",
    clientBenefit:
      "Your food and dairy packaging meets the highest international safety standards, minimizing contamination risks and ensuring regulatory compliance.",
  },
  {
    id: "iso-15378",
    name: "ISO 15378:2017",
    standard: "Primary Packaging Materials for Medicinal Products",
    logo: "/images/certifications/iso-15378.png",
    description:
      "International standard specifying requirements for a quality management system for primary packaging materials for medicinal products, incorporating GMP principles.",
    clientBenefit:
      "Pharmaceutical packaging produced under GMP-aligned quality systems specifically designed for medicinal product safety and regulatory approval.",
  },
];
