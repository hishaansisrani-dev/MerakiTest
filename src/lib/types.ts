export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface IndustryCard {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface ValueProp {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  categories: string[];
}

export interface Certification {
  id: string;
  name: string;
  standard: string;
  logo: string;
  description: string;
  clientBenefit: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface QuoteFormData {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  productType: string;
  volume: string;
  description: string;
}
