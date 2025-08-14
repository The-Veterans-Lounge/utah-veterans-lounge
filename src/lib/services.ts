import { getCloudflareContext } from "@opennextjs/cloudflare";
import Stripe from "stripe";
import { Resend } from "resend";

/**
 * Get environment configuration values withq Cloudflare/local fallbacks
 */
export function getEnv() {
  const { env } = getCloudflareContext();

  // Simple localhost check for environment detection
  const baseUrl =
    env.HOSTED_BASE_URL ||
    process.env.HOSTED_BASE_URL ||
    "http://localhost:3000";
  if (!baseUrl.trim()) throw new Error("Failed to obtain HOSTED_BASE_URL");
  const isLocal = baseUrl.includes("localhost");
  const currEnv = isLocal ? "app" : env.NODE_ENV;

  return {
    NODE_ENV: currEnv,
    STRIPE_SECRET_KEY: env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY,
    STRIPE_PUBLISHABLE_KEY:
      env.STRIPE_PUBLISHABLE_KEY || process.env.STRIPE_PUBLISHABLE_KEY,
    RESEND_KEY: process.env.RESEND_KEY || env.RESEND_KEY,
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
