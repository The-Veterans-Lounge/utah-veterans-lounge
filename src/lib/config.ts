import { getCloudflareContext } from "@opennextjs/cloudflare";

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


