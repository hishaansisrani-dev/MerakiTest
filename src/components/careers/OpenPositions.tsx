"use client";

import { useState } from "react";
import { jobs } from "@/data/jobs";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { MapPin, Briefcase, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function OpenPositions() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Open Positions"
          subtitle="Join our growing team and help shape the future of packaging"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {jobs.map((job, index) => (
            <ScrollReveal key={job.id} delay={index * 0.08}>
              <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() =>
                    setOpenId(openId === job.id ? null : job.id)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-1.5 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-slate-400 transition-transform",
                      openId === job.id && "rotate-180"
                    )}
                  />
                </button>

                {openId === job.id && (
                  <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {job.description}
                    </p>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">
                      Requirements
                    </h4>
                    <ul className="space-y-1.5 mb-6">
                      {job.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <span className="text-meraki-500 mt-1">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                    <Button
                      href={`mailto:careers@merakiindustries.com?subject=Application: ${job.title}`}
                      size="sm"
                    >
                      Apply Now
                    </Button>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Don&apos;t see a role that fits? We&apos;re always looking for
              talented people.
            </p>
            <Button
              href="mailto:careers@merakiindustries.com?subject=General Application"
              variant="secondary"
            >
              Send General Application
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
