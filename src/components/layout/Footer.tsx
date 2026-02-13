import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from "lucide-react";

const solutions = [
  { label: "Pharmaceutical Packaging", href: "/products" },
  { label: "Food & Beverage Packaging", href: "/products" },
  { label: "Cosmetics Packaging", href: "/products" },
  { label: "Custom Solutions", href: "/quote" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/logos/meraki-logo-white.png"
              alt="Meraki Industries"
              width={160}
              height={124}
              className="h-14 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              Premium flexible packaging solutions for pharmaceutical, food &amp;
              beverage, and cosmetics industries.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-4">
              <a
                href={COMPANY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  {COMPANY_INFO.address.poBox}
                  <br />
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All
            rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
