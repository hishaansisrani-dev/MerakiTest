"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { X } from "lucide-react";

const certs = [
  { name: "ISO 9001:2015", image: "/images/certifications/iso-9001.png" },
  { name: "ISO 22000:2018", image: "/images/certifications/iso-22000.png" },
  { name: "ISO 15378:2017", image: "/images/certifications/iso-15378.png" },
];

export default function CertificationsBar() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Certifications &amp; Standards
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {certs.map((cert) => (
              <button
                key={cert.name}
                onClick={() => setExpanded(cert.name)}
                className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={100}
                  height={100}
                  className="h-20 w-auto"
                />
                <span className="text-xs font-medium text-slate-500">
                  {cert.name}
                </span>
              </button>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/certifications"
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors underline underline-offset-4"
            >
              View all certifications
            </Link>
          </div>
        </ScrollReveal>
      </Container>

      {expanded && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setExpanded(null)}
        >
          <div
            className="relative bg-white rounded-2xl p-8 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpanded(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="h-5 w-5 text-slate-500" />
            </button>
            <div className="text-center">
              <Image
                src={certs.find((c) => c.name === expanded)!.image}
                alt={expanded}
                width={400}
                height={400}
                className="w-full h-auto max-h-96 object-contain mx-auto"
              />
              <p className="mt-4 font-heading text-lg font-bold text-slate-900">
                {expanded}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
