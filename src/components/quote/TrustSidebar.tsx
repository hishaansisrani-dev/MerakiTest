import { ShieldCheck, Clock, Users, Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const steps = [
  {
    number: "1",
    title: "Review",
    description:
      "Our engineering team reviews your requirements within 24 hours.",
  },
  {
    number: "2",
    title: "Consultation",
    description:
      "We schedule a technical consultation to discuss specifications and options.",
  },
  {
    number: "3",
    title: "Proposal",
    description:
      "You receive a detailed proposal with material options, pricing, and timelines.",
  },
];

const certBadges = ["ISO 9001:2015", "ISO 22000:2018", "ISO 15378:2017"];

export default function TrustSidebar() {
  return (
    <div className="space-y-8">
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
        <h3 className="font-heading text-lg font-bold text-slate-900 mb-4">
          What Happens Next?
        </h3>
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-3">
              <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-meraki-500 text-white text-sm font-bold">
                {step.number}
              </div>
              <div>
                <p className="font-medium text-slate-900 text-sm">
                  {step.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
        <h3 className="font-heading text-lg font-bold text-slate-900 mb-4">
          Prefer to Talk?
        </h3>
        <div className="space-y-3 text-sm">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {COMPANY_INFO.phone}
          </a>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Mail className="h-4 w-4" />
            {COMPANY_INFO.email}
          </a>
          <div className="flex items-center gap-3 text-slate-500">
            <Clock className="h-4 w-4" />
            Sun-Thu, 8:00 AM - 6:00 PM GST
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
        <h3 className="font-heading text-lg font-bold text-slate-900 mb-4">
          Certified Quality
        </h3>
        <div className="flex flex-wrap gap-2">
          {certBadges.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
            >
              <ShieldCheck className="h-3 w-3 text-meraki-500" />
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
        <div className="flex items-center gap-3 mb-3">
          <Users className="h-5 w-5 text-slate-400" />
          <h3 className="font-heading text-lg font-bold text-slate-900">
            Trusted By
          </h3>
        </div>
        <p className="text-sm text-slate-500">
          Over 200 pharmaceutical, food, and cosmetics companies trust Meraki
          Industries for their packaging needs.
        </p>
      </div>
    </div>
  );
}
