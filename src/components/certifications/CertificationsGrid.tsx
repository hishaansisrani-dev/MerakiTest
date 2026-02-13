"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { certifications } from "@/data/certifications";
import CertificationCard from "./CertificationCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CertificationsGrid() {
  const [popupImage, setPopupImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <ScrollReveal key={cert.id} delay={index * 0.08}>
            <CertificationCard
              certification={cert}
              onViewImage={(logo, name) => setPopupImage({ src: logo, alt: name })}
            />
          </ScrollReveal>
        ))}
      </div>

      {popupImage && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setPopupImage(null)}
        >
          <div
            className="relative bg-white rounded-2xl p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPopupImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="h-5 w-5 text-slate-500" />
            </button>
            <Image
              src={popupImage.src}
              alt={popupImage.alt}
              width={300}
              height={300}
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
