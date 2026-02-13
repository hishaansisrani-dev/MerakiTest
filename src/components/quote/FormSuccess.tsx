import { CheckCircle, Clock, Mail, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

export default function FormSuccess() {
  return (
    <div className="text-center py-12">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="mt-4 font-heading text-2xl font-bold text-slate-900">
        Quote Request Submitted
      </h3>
      <p className="mt-2 text-slate-600 max-w-md mx-auto">
        Thank you for your interest in Meraki Industries. Our team will review
        your requirements and respond within 24 business hours.
      </p>

      <div className="mt-8 space-y-3 text-sm text-slate-500">
        <div className="flex items-center justify-center gap-2">
          <Clock className="h-4 w-4" />
          <span>Expected response: Within 24 business hours</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Mail className="h-4 w-4" />
          <span>Confirmation sent to your email</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Phone className="h-4 w-4" />
          <span>Urgent? Call {COMPANY_INFO.phone}</span>
        </div>
      </div>

      <div className="mt-8">
        <Button href="/" variant="secondary">
          Return to Home
        </Button>
      </div>
    </div>
  );
}
