import { NextRequest, NextResponse } from "next/server";
import { getStripe, getEnv } from "@/lib/services";
import { z } from "zod";

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
    const stripe = getStripe();
    const env = getEnv();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_creation: "always", // Always create customer for auth purposes
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation to The Veterans Lounge",
              description: "Support our mission to serve veterans",
            },
            unit_amount: amount, // Amount in cents from request
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${env.HOSTED_BASE_API_URL}/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${env.HOSTED_BASE_API_URL}/`,
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
