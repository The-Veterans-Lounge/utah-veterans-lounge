import { z } from "zod";
import { getEnv } from "../lib/config";

// Zod schemas for Stripe API responses
export const StripeCheckoutSessionSchema = z.object({
  id: z.string(),
  url: z.string().nullable(),
  customer: z.string().nullable(),
  customer_details: z
    .object({
      email: z.string().nullable(),
      name: z.string().nullable(),
    })
    .nullable()
    .optional(),
  payment_status: z.string(),
  status: z.string(),
  amount_total: z.number().nullable(),
  // Add other fields as needed
});

export const StripeProductListSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    })
  ),
  has_more: z.boolean(),
});

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

