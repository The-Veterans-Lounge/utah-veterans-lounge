import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Resend } from "resend";
import { z } from "zod";

/**
 * Get environment configuration values withq Cloudflare/local fallbacks
 */
export function getEnv() {
  const { env } = getCloudflareContext();

  const baseUrl = env.HOSTED_BASE_URL || process.env.HOSTED_BASE_URL;
  const mountPath = env.MOUNT_PATH || "app";

  return {
    STRIPE_SECRET_KEY: env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY,
    STRIPE_PUBLISHABLE_KEY:
      env.STRIPE_PUBLISHABLE_KEY || process.env.STRIPE_PUBLISHABLE_KEY,
    RESEND_KEY: process.env.RESEND_KEY || env.RESEND_KEY,
    WEBFLOW_BASE_URL: "https://testing-purposes-1a1ce7.webflow.io",
    HOSTED_BASE_API_URL: `${baseUrl}/${mountPath}/api`,
  };
}

/**
 * Make authenticated requests to Stripe REST API
 */
export async function stripeRequest(
  endpoint: string,
  options: RequestInit = {}
): Promise<unknown> {
  const env = getEnv();

  if (!env.STRIPE_SECRET_KEY) {
    throw new Error(
      "STRIPE_SECRET_KEY not found in Cloudflare env or process.env"
    );
  }

  const url = `https://api.stripe.com/v1/${endpoint}`;
  const headers = {
    Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
    "Content-Type": "application/x-www-form-urlencoded",
    "Stripe-Version": "2025-07-30.basil",
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Stripe API error: ${response.status} - ${error}`);
  }

  return response.json();
}

/**
 * Validated Stripe request with schema checking
 */
export async function validatedStripeRequest<T>(
  endpoint: string,
  schema: z.ZodSchema<T>,
  options: RequestInit = {}
): Promise<T> {
  const response = await stripeRequest(endpoint, options);

  try {
    return schema.parse(response);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(
        `Stripe API response validation failed: ${error.issues
          .map((i) => i.message)
          .join(", ")}`
      );
    }
    throw error;
  }
}

/**
 * Send email using Resend with validation
 */
export async function sendEmail(emailData: {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  from?: string;
}) {
  const env = getEnv();

  if (!env.RESEND_KEY) {
    throw new Error("RESEND_KEY not found in Cloudflare env or process.env");
  }

  const resend = new Resend(env.RESEND_KEY);
  
  const emailOptions = {
    from: emailData.from || 'noreply@utah-veterans-lounge.com',
    to: emailData.to,
    subject: emailData.subject,
    html: emailData.html,
    text: emailData.text,
  };

  try {
    const result = await resend.emails.send(emailOptions);
    return result;
  } catch (error) {
    throw new Error(`Email sending failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
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
