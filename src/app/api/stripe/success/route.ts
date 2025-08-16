import { NextRequest, NextResponse } from "next/server";
import { validatedStripeRequest } from "@/lib/services";
import { StripeCheckoutSessionSchema } from "@/lib/stripe-types";

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "No session_id provided" },
        { status: 400 }
      );
    }

    // Retrieve the checkout session from Stripe using REST API
    const session = await validatedStripeRequest(
      `checkout-sessions/${sessionId}`,
      StripeCheckoutSessionSchema
    );

    // Extract customer info from session for testing
    const customerInfo = {
      id: session.customer,
      email: session.customer_details?.email,
      name: session.customer_details?.name,
    };

    console.log("Customer extracted from session:", customerInfo);

    // Pretty print all the session data so we can see what's available
    return NextResponse.json(
      {
        message: "Payment successful!",
        session_id: sessionId,
        customer_info: customerInfo,
        stripe_session_data: session,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error retrieving session:", error);
    return NextResponse.json(
      { error: "Failed to retrieve session data" },
      { status: 500 }
    );
  }
}
