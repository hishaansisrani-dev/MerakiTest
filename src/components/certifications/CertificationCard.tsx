import Image from "next/image";
import { Certification } from "@/lib/types";

type CertificationCardProps = {
  certification: Certification;
  onViewImage?: (logo: string, name: string) => void;
};

export default function CertificationCard({
  certification,
  onViewImage,
}: CertificationCardProps) {
  return (
    <div
      className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 hover:shadow-lg transition-shadow cursor-pointer text-center"
      onClick={() => onViewImage?.(certification.logo, certification.name)}
    >
      <Image
        src={certification.logo}
        alt={certification.name}
        width={200}
        height={200}
        className="mx-auto h-40 w-auto object-contain mb-4"
      />
      <h3 className="font-heading text-lg font-bold text-slate-900">
        {certification.name}
      </h3>
      <p className="text-sm text-slate-500 mt-1">{certification.standard}</p>
      <p className="mt-3 text-xs text-meraki-500 font-medium">
        Click to view certificate
      </p>
    </div>
  );
}
