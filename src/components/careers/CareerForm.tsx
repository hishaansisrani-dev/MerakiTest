"use client";

import { useState, useRef } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { CheckCircle, Upload, X } from "lucide-react";

export default function CareerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState("+971");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const form = formRef.current!;
      const formData = new FormData();

      formData.append("fullName", (form.elements.namedItem("fullName") as HTMLInputElement).value);
      formData.append("email", (form.elements.namedItem("email") as HTMLInputElement).value);

      const phoneNumber = (form.elements.namedItem("phone") as HTMLInputElement).value;
      formData.append("phone", `${countryCode} ${phoneNumber}`);

      const comments = (form.elements.namedItem("comments") as HTMLTextAreaElement).value;
      if (comments) formData.append("comments", comments);

      const cvFile = fileInputRef.current?.files?.[0];
      if (cvFile) formData.append("cv", cvFile);

      const response = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-meraki-500 focus:outline-none focus:ring-1 focus:ring-meraki-500 transition-colors";

  if (submitted) {
    return (
      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mt-6 font-heading text-2xl font-bold text-slate-900">
              Application Submitted
            </h2>
            <p className="mt-3 text-slate-600">
              Thank you for your interest in joining Meraki Industries. Our HR
              team will review your application and get back to you shortly.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Apply Now"
          subtitle="Interested in joining our team? Fill out the form below and we'll be in touch"
        />

        <ScrollReveal>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                className={inputClasses}
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className={inputClasses}
                placeholder="you@example.com"
              />
            </div>

            {/* Phone with country code */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 focus:border-meraki-500 focus:outline-none focus:ring-1 focus:ring-meraki-500 transition-colors w-[90px] flex-shrink-0"
                  placeholder="+971"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  className={inputClasses}
                  placeholder="Phone number"
                />
              </div>
            </div>

            {/* CV Upload */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Upload CV <span className="text-red-500">*</span>
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center justify-center gap-3 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 cursor-pointer hover:border-meraki-500 hover:bg-meraki-50/30 transition-colors"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  required={!fileName}
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {fileName ? (
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Upload className="h-4 w-4 text-meraki-500" />
                    <span className="font-medium">{fileName}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFileName(null);
                        if (fileInputRef.current)
                          fileInputRef.current.value = "";
                      }}
                      className="ml-1 p-0.5 rounded hover:bg-slate-200 transition-colors"
                    >
                      <X className="h-3.5 w-3.5 text-slate-500" />
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-600">
                      Click to upload your CV
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      PDF, DOC, or DOCX (max 4MB)
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Comments */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Additional Comments / Information
              </label>
              <textarea
                name="comments"
                rows={4}
                className={inputClasses}
                placeholder="Tell us about yourself, your experience, or any additional information you'd like to share..."
              />
            </div>

            {/* Error message */}
            {submitError && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                {submitError}
              </div>
            )}

            {/* Submit */}
            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </ScrollReveal>
      </Container>
    </section>
  );
}
