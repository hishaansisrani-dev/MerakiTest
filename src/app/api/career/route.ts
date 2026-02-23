import { NextRequest, NextResponse } from "next/server";
import { getResend, emailConfig } from "@/lib/resend";
import { buildCareerEmailHtml } from "@/lib/email-templates";

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4 MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const comments = formData.get("comments") as string | null;
    const cv = formData.get("cv") as File | null;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, email, and phone are required" },
        { status: 400 }
      );
    }

    if (!cv || !(cv instanceof File) || cv.size === 0) {
      return NextResponse.json(
        { error: "A CV file is required" },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.includes(cv.type)) {
      return NextResponse.json(
        { error: "CV must be a PDF, DOC, or DOCX file" },
        { status: 400 }
      );
    }

    if (cv.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "CV file must be 4 MB or smaller" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await cv.arrayBuffer());

    const { error } = await getResend().emails.send({
      from: emailConfig.from,
      to: emailConfig.to,
      subject: `New Career Application from ${fullName}`,
      html: buildCareerEmailHtml({
        fullName,
        email,
        phone,
        comments: comments || undefined,
        cvFileName: cv.name,
      }),
      attachments: [
        {
          filename: cv.name,
          content: buffer,
        },
      ],
    });

    if (error) {
      console.error("Resend email failed:", error);
      return NextResponse.json(
        { error: "Failed to send application" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process application" },
      { status: 500 }
    );
  }
}
