import { NextRequest, NextResponse } from "next/server";
import { authService } from "@/services/auth";

export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get("token");
    
    if (!token) {
      return NextResponse.json(
        { error: "Token is required" },
        { status: 400 }
      );
    }
    
    console.log("Verifying magic link token for user");
    
    // Verify token using auth service
    const result = await authService.verifyMagicLink(token);
    
    if (result.valid && result.email) {
      // Token is valid - user is authenticated
      console.log("Magic link verified for:", result.email);
      
      // TODO: Set session/cookies here for user login state
      
      return NextResponse.json({
        message: "Login successful!",
        email: result.email,
        success: true
      });
    } else {
      // Token is invalid or expired
      return NextResponse.json(
        { error: result.error || "Invalid token" },
        { status: 401 }
      );
    }
    
  } catch (error) {
    console.error("Token verification endpoint error:", error);
    return NextResponse.json(
      { error: "Verification failed" },
      { status: 500 }
    );
  }
}