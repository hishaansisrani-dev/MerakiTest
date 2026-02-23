import { NextRequest, NextResponse } from "next/server";
import { getResend, emailConfig } from "@/lib/resend";
import { buildQuoteEmailHtml } from "@/lib/email-templates";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const required = [
      "company",
      "contactName",
      "email",
      "phone",
      "industry",
      "productType",
      "volume",
      "description",
    ];
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const { error } = await getResend().emails.send({
      from: emailConfig.from,
      to: emailConfig.to,
      subject: `New Quote Request from ${data.company}`,
      html: buildQuoteEmailHtml(data),
    });

    if (error) {
      console.error("Resend email failed:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully",
    });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json(
      {
        error: "Failed to process request",
        detail: err instanceof Error ? err.message : "Unknown error",
        hasKey: !!process.env.RESEND_API_KEY,
      },
      { status: 500 }
    );
  }
}
