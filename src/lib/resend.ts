import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const emailConfig = {
  from: "Meraki Industries <onboarding@resend.dev>",
  to: "hishaan.s.israni@gmail.com",
} as const;
