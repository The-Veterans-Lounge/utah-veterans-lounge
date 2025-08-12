import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { ENV } from "@/lib/env";
import { z } from "zod";

const CheckoutRequestSchema = z.object({
  amount: z.number()
    .int("Amount must be a whole number")
    .min(100, "Amount must be at least $1.00")
    .max(1000000, "Amount must not exceed $10,000.00")
});

export async function POST(request: NextRequest) {
  if (!request) return;
  try {
    const body = await request.json();
    const validatedData = CheckoutRequestSchema.parse(body);
    const { amount } = validatedData;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
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
      success_url: `${ENV.HOSTED_BASE_URL}/app/api/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${ENV.HOSTED_BASE_URL}/app/`,
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
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
