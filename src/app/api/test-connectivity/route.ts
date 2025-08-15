import { NextResponse } from "next/server";

export async function GET() {
  const results = {
    timestamp: new Date().toISOString(),
    tests: {} as Record<string, unknown>
  };

  // Test 1: Basic fetch to Stripe API
  try {
    const response = await fetch("https://api.stripe.com/v1/products?limit=1", {
      headers: {
        "Authorization": `Bearer ${process.env.STRIPE_SECRET_KEY || "sk_test_fake"}`
      }
    });
    results.tests.stripeApiFetch = {
      success: response.ok,
      status: response.status,
      statusText: response.statusText
    };
  } catch (error) {
    results.tests.stripeApiFetch = {
      success: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }

  // Test 2: DNS resolution for Stripe
  try {
    const response = await fetch("https://api.stripe.com/");
    results.tests.stripeDnsResolution = {
      success: response.ok,
      status: response.status
    };
  } catch (error) {
    results.tests.stripeDnsResolution = {
      success: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }

  // Test 3: Environment check
  results.tests.environment = {
    hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
    nodeEnv: process.env.NODE_ENV,
    runtime: typeof globalThis !== 'undefined' ? 'workers' : 'node'
  };

  return NextResponse.json(results);
}