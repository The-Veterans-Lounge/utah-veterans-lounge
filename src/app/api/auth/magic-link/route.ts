import { NextRequest, NextResponse } from "next/server";
import { authService, MagicLinkRequestSchema } from "@/services/auth";
import { z } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = MagicLinkRequestSchema.parse(body);
    
    console.log("Magic link requested for:", email);
    
    // Send magic link using auth service
    const result = await authService.sendMagicLink(email);
    
    if (result.success) {
      return NextResponse.json({
        message: result.message,
        success: true
      });
    } else {
      return NextResponse.json(
        { error: result.message },
        { status: 500 }
      );
    }
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }

    console.error("Magic link endpoint error:", error);
    return NextResponse.json(
      { error: "Failed to send magic link" },
      { status: 500 }
    );
  }
}