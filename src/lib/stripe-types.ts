import { z } from "zod";

// Zod schemas for Stripe API responses
export const StripeCheckoutSessionSchema = z.object({
  id: z.string(),
  url: z.string().nullable(),
  customer: z.string().nullable(),
  customer_details: z.object({
    email: z.string().nullable(),
    name: z.string().nullable(),
  }).nullable().optional(),
  payment_status: z.string(),
  status: z.string(),
  // Add other fields as needed
}).passthrough(); // Allow additional fields

export const StripeProductListSchema = z.object({
  data: z.array(z.object({
    id: z.string(),
    name: z.string(),
  }).passthrough()),
  has_more: z.boolean(),
}).passthrough();

// TypeScript types derived from schemas
export type StripeCheckoutSession = z.infer<typeof StripeCheckoutSessionSchema>;
export type StripeProductList = z.infer<typeof StripeProductListSchema>;

// Validated Stripe request function
export async function validateStripeResponse<T>(
  schema: z.ZodSchema<T>,
  response: unknown
): Promise<T> {
  try {
    return schema.parse(response);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(`Stripe API response validation failed: ${error.issues.map(i => i.message).join(', ')}`);
    }
    throw error;
  }
}