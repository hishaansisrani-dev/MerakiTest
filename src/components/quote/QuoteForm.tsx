"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button";
import FormSuccess from "./FormSuccess";

const quoteSchema = z.object({
  company: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  industry: z.string().min(1, "Please select an industry"),
  productType: z.string().min(2, "Please describe the product type"),
  volume: z.string().min(1, "Please estimate your volume"),
  description: z.string().min(10, "Please provide more details about your requirements"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) return <FormSuccess />;

  const inputClasses =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-meraki-500 focus:outline-none focus:ring-2 focus:ring-meraki-500/20 transition-colors";
  const labelClasses = "block text-sm font-medium text-slate-700 mb-1.5";
  const errorClasses = "mt-1 text-xs text-red-500";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses}>Company Name *</label>
          <input
            {...register("company")}
            className={inputClasses}
            placeholder="Acme Corp"
          />
          {errors.company && (
            <p className={errorClasses}>{errors.company.message}</p>
          )}
        </div>
        <div>
          <label className={labelClasses}>Contact Name *</label>
          <input
            {...register("contactName")}
            className={inputClasses}
            placeholder="John Smith"
          />
          {errors.contactName && (
            <p className={errorClasses}>{errors.contactName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses}>Email Address *</label>
          <input
            {...register("email")}
            type="email"
            className={inputClasses}
            placeholder="john@acmecorp.com"
          />
          {errors.email && (
            <p className={errorClasses}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className={labelClasses}>Phone Number *</label>
          <input
            {...register("phone")}
            type="tel"
            className={inputClasses}
            placeholder="+971 XX XXX XXXX"
          />
          {errors.phone && (
            <p className={errorClasses}>{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses}>Industry *</label>
          <select {...register("industry")} className={inputClasses}>
            <option value="">Select industry...</option>
            <option value="pharmaceutical">Pharmaceutical</option>
            <option value="food-beverage">Food &amp; Beverage</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="other">Other</option>
          </select>
          {errors.industry && (
            <p className={errorClasses}>{errors.industry.message}</p>
          )}
        </div>
        <div>
          <label className={labelClasses}>Product Type *</label>
          <input
            {...register("productType")}
            className={inputClasses}
            placeholder="e.g., Stand-up pouches"
          />
          {errors.productType && (
            <p className={errorClasses}>{errors.productType.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClasses}>Estimated Annual Volume *</label>
        <select {...register("volume")} className={inputClasses}>
          <option value="">Select volume range...</option>
          <option value="under-100k">Under 100,000 units</option>
          <option value="100k-500k">100,000 - 500,000 units</option>
          <option value="500k-1m">500,000 - 1,000,000 units</option>
          <option value="1m-5m">1,000,000 - 5,000,000 units</option>
          <option value="over-5m">Over 5,000,000 units</option>
        </select>
        {errors.volume && (
          <p className={errorClasses}>{errors.volume.message}</p>
        )}
      </div>

      <div>
        <label className={labelClasses}>Project Description *</label>
        <textarea
          {...register("description")}
          rows={4}
          className={inputClasses}
          placeholder="Tell us about your packaging requirements, materials of interest, special features needed, etc."
        />
        {errors.description && (
          <p className={errorClasses}>{errors.description.message}</p>
        )}
      </div>

      {submitError && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-600">
          {submitError}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Quote Request"}
      </Button>
    </form>
  );
}
