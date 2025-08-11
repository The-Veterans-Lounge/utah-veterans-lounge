import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { ENV } from "@/lib/env";

export async function POST(request: NextRequest) {
  try {
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
            unit_amount: 2000, // $20.00 default
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
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
