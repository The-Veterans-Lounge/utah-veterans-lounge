import Stripe from "stripe";
import { Resend } from "resend";

/**
 * Get environment configuration values with Vercel/local fallbacks
 */
export function getEnv() {
  // Use process.env directly for Vercel compatibility
  const env = process.env;

  // Use Vercel's built-in URL or localhost for development
  const baseUrl = env.VERCEL_URL ? `https://${env.VERCEL_URL}` : "http://localhost:3000";
  const isLocal = baseUrl.includes("localhost");
  const currEnv = isLocal ? "app" : env.NODE_ENV;

  return {
    NODE_ENV: currEnv || "development",
    STRIPE_SECRET_KEY: env.STRIPE_SECRET_KEY,
    STRIPE_PUBLISHABLE_KEY: env.STRIPE_PUBLISHABLE_KEY,
    RESEND_KEY: env.RESEND_KEY,
    WEBFLOW_BASE_URL: "https://testing-purposes-1a1ce7.webflow.io",
    HOSTED_BASE_API_URL: `${baseUrl}/api`,
  };
}

/**
 * Get Stripe instance with current environment configuration
 */
export function getStripe(): Stripe {
  const env = getEnv();

  if (!env.STRIPE_SECRET_KEY) {
    throw new Error(
      "STRIPE_SECRET_KEY not found in Cloudflare env or process.env"
    );
  }

  return new Stripe(env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-07-30.basil",
  });
}

/**
 * Get Resend instance for email sending
 */
export function getResend(): Resend {
  const env = getEnv();

  if (!env.RESEND_KEY) {
    throw new Error("RESEND_KEY not found in Cloudflare env or process.env");
  }

  return new Resend(env.RESEND_KEY);
}
