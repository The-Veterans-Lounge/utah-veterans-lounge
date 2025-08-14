import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/services";

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "No session_id provided" },
        { status: 400 }
      );
    }

    const stripe = getStripe();

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

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
