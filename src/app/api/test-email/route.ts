import { NextResponse } from "next/server";
import { getResend } from "@/lib/services";

export async function GET() {
  try {
    console.log("Testing Resend email sending...");

    const resend = getResend();

    const result = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // Resend's default test domain
      to: "mjsigg@gmail.com",
      subject: "Test Email from Veterans Lounge",
      html: `
        <h2>Test Email</h2>
        <p>This is a test email from the Veterans Lounge application.</p>
        <p>If you receive this, Resend is working correctly!</p>
        <p>Sent at: ${new Date().toISOString()}</p>
      `,
    });

    console.log("Email sent successfully:", result);

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      emailId: result.data?.id,
      result: result,
    });
  } catch (error) {
    console.error("Failed to send test email:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        details: error,
      },
      { status: 500 }
    );
  }
}
