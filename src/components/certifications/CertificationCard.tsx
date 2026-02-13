import { Certification } from "@/lib/types";
import { ShieldCheck } from "lucide-react";

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
      className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onViewImage?.(certification.logo, certification.name)}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
          <ShieldCheck className="h-6 w-6 text-meraki-500" />
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-slate-900">
            {certification.name}
          </h3>
          <p className="text-xs text-slate-500">{certification.standard}</p>
        </div>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">
        {certification.description}
      </p>
      <div className="rounded-lg bg-meraki-50 border border-meraki-100 p-3">
        <p className="text-xs font-medium text-meraki-700">
          What this means for you:
        </p>
        <p className="text-xs text-meraki-600 mt-1">
          {certification.clientBenefit}
        </p>
      </div>
      <p className="mt-3 text-xs text-meraki-500 font-medium text-center">
        Click to view certificate
      </p>
    </div>
  );
}
