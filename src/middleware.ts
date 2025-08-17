/**
 * Next.js Middleware - runs BEFORE every request reaches your API routes
 * Like React Router's BrowserRouter but for server requests
 * Automatically adds CORS headers to all /api/* routes for cross-origin requests
 */

import { NextRequest, NextResponse } from "next/server";
import { getEnv } from "./lib/config";

export function middleware(request: NextRequest) {
  const env = getEnv();
  const allowedOrigin = env.WEBFLOW_BASE_URL;

  // Handle preflight OPTIONS requests
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  const response = NextResponse.next();

  // Add CORS headers to allow requests from Webflow site
  response.headers.set("Access-Control-Allow-Origin", allowedOrigin);
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}

export const config = {
  matcher: "/api/:path*", // Only run on API routes for performance
};
