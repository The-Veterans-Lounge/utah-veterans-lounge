import { NextRequest, NextResponse } from "next/server";
import { validatedStripeRequest, sendEmail } from "@/lib/services";
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
      `checkout/sessions/${sessionId}`,
      StripeCheckoutSessionSchema
    );

    // Extract customer info from session for testing
    const customerInfo = {
      id: session.customer,
      email: session.customer_details?.email,
      name: session.customer_details?.name,
    };

    console.log("Customer extracted from session:", customerInfo);

    // Send confirmation email if customer email is available
    if (customerInfo.email) {
      try {
        await sendEmail({
          to: customerInfo.email,
          subject: "Thank you for your donation to The Veterans Lounge",
          html: `
            <h1>Thank you for your donation!</h1>
            <p>Dear ${customerInfo.name || "Donor"},</p>
            <p>We have received your generous donation of $${
              (Number(session.amount_total) || 0) / 100
            } to The Veterans Lounge.</p>
            <p>Your support helps us continue our mission to serve veterans in our community.</p>
            <br>
            <p>Transaction ID: ${sessionId}</p>
            <p>With gratitude,<br>The Veterans Lounge Team</p>
          `,
          text: `Thank you for your donation! We have received your generous donation of $${
            (Number(session.amount_total) || 0) / 100
          } to The Veterans Lounge. Your support helps us continue our mission to serve veterans. Transaction ID: ${sessionId}`,
        });
        console.log("Confirmation email sent to:", customerInfo.email);
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
        // Don't fail the whole request if email fails
      }
    }

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
