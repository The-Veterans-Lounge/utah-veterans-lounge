export function validateEnvironment() {
  const required = [
    "STRIPE_SECRET_KEY",
    "STRIPE_PUBLISHABLE_KEY",
    "HOSTED_BASE_URL",
    "WEBFLOW_BASE_URL",
  ];

  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }

  // Optional: Log environment info
  console.log(
    `Environment validation passed. Running in ${
      process.env.NODE_ENV || "development"
    } mode.`
  );
}

// Export all environment constants
export const ENV = {
  NODE_ENV: process.env.NODE_ENV || "development",

  // Stripe
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY!,
  STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY!,

  // Base URL Configuration
  HOSTED_BASE_URL:
    process.env.HOSTED_BASE_URL + "/app" || "http://localhost:3000/app",
  WEBFLOW_BASE_URL:
    process.env.WEBFLOW_BASE_URL ||
    "https://testing-purposes-1a1ce7.webflow.io",
} as const;
