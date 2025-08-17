import { CreateEmailOptions, Resend } from "resend";
import { getEnv } from "../lib/config";

export interface EmailData {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  from?: string;
}

/**
 * Send email using Resend
 */
export async function sendEmail(emailData: EmailData) {
  const env = getEnv();

  if (!env.RESEND_KEY) {
    throw new Error("RESEND_KEY not found in Cloudflare env or process.env");
  }

  if (!emailData.html && !emailData.text) {
    throw new Error("Either html or text content is required");
  }

  const resend = new Resend(env.RESEND_KEY);

  try {
    const emailPayload = {
      from: emailData.from || "onboarding@resend.dev",
      to: Array.isArray(emailData.to) ? emailData.to : [emailData.to],
      subject: emailData.subject,
      ...(emailData.html && { html: emailData.html }),
      ...(emailData.text && { text: emailData.text }),
    } as CreateEmailOptions;

    const result = await resend.emails.send(emailPayload);
    return result;
  } catch (error) {
    throw new Error(
      `Email sending failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

/**
 * Get Resend instance for direct access (if needed)
 */
export function getResend(): Resend {
  const env = getEnv();

  if (!env.RESEND_KEY) {
    throw new Error("RESEND_KEY not found in Cloudflare env or process.env");
  }

  return new Resend(env.RESEND_KEY);
}
