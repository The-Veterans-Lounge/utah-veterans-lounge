import { NextRequest, NextResponse } from "next/server";
import { validatedStripeRequest, getEnv } from "@/lib/services";
import { z } from "zod";
import { StripeCheckoutSessionSchema, StripeProductListSchema } from "@/lib/stripe-types";

const CheckoutRequestSchema = z.object({
  amount: z
    .number()
    .int("Amount must be a whole number")
    .min(100, "Amount must be at least $1.00")
    .max(100000, "Amount must not exceed $1,000.00"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = CheckoutRequestSchema.parse(body);
    const { amount } = validatedData;
    console.log("THis is amount", amount);
    const env = getEnv();
    
    // Test Stripe connectivity
    console.log("Testing Stripe connectivity...");
    try {
      await validatedStripeRequest("products?limit=1", StripeProductListSchema);
      console.log("Stripe API connection successful");
    } catch (connectError) {
      console.error("Stripe connectivity test failed:", connectError);
    }

    // Create checkout session using REST API
    const sessionData = new URLSearchParams();
    sessionData.append('payment_method_types[]', 'card');
    sessionData.append('customer_creation', 'always');
    sessionData.append('line_items[0][price_data][currency]', 'usd');
    sessionData.append('line_items[0][price_data][product_data][name]', 'Donation to The Veterans Lounge');
    sessionData.append('line_items[0][price_data][product_data][description]', 'Support our mission to serve veterans');
    sessionData.append('line_items[0][price_data][unit_amount]', amount.toString());
    sessionData.append('line_items[0][quantity]', '1');
    sessionData.append('mode', 'payment');
    sessionData.append('success_url', `${env.HOSTED_BASE_API_URL}/stripe/success?session_id={CHECKOUT_SESSION_ID}`);
    sessionData.append('cancel_url', `${env.HOSTED_BASE_API_URL}/`);

    const session = await validatedStripeRequest('checkout/sessions', StripeCheckoutSessionSchema, {
      method: 'POST',
      body: sessionData,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }

    console.error("Error creating checkout session:", error);
    console.error("Error details:", {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      env: {
        hasStripeKey: !!getEnv().STRIPE_SECRET_KEY,
        hostedBaseApiUrl: getEnv().HOSTED_BASE_API_URL
      }
    });
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
