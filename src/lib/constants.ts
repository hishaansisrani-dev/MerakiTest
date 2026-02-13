export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products & Solutions", href: "/products" },
  { label: "Certifications", href: "/certifications" },
  { label: "Careers", href: "/careers" },
] as const;

export const COMPANY_INFO = {
  name: "Meraki Industries",
  legalName: "Meraki Industries LLC",
  tagline: "Flexible Packaging Solutions",
  email: "info@meraki-industries.com",
  phone: "+971 6 573 7889",
  whatsapp: "+971558524533",
  linkedin: "https://www.linkedin.com/company/meraki-industries-llc/",
  address: {
    street: "Plot No 905, New Industrial Area, Umm Al Thuoob",
    poBox: "PO Box 18098",
    city: "Umm Al Quwain",
    country: "United Arab Emirates",
  },
} as const;

export const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "";
