import { NextRequest, NextResponse } from "next/server";

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

    const sheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
    if (sheetsUrl) {
      try {
        await fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (sheetError) {
        console.error("Google Sheets submission failed:", sheetError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
