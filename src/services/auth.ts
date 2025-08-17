import { z } from "zod";
import { sendEmail } from "./email";
import { getEnv } from "../lib/config";

// Data types
export interface TokenPayload {
  email: string;
  timestamp: number;
  expires: number;
}

export interface MagicLinkResult {
  success: boolean;
  message: string;
}

export interface VerifyResult {
  valid: boolean;
  email?: string;
  error?: string;
}

// Validation schemas
export const MagicLinkRequestSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
});

export const VerifyTokenSchema = z.object({
  token: z.string().min(1, "Token is required"),
});

// Main service interface
export interface AuthService {
  // Core functionality
  sendMagicLink(email: string): Promise<MagicLinkResult>;
  verifyMagicLink(token: string): Promise<VerifyResult>;

  // Token utilities
  generateToken(email: string): string;
  decodeToken(token: string): TokenPayload | null;
  isTokenExpired(payload: TokenPayload): boolean;
}

// Basic auth service implementation
export class MagicLinkAuthService implements AuthService {
  private readonly TOKEN_EXPIRY_MINUTES = 15;

  generateToken(email: string): string {
    const now = Date.now();
    const expires = now + this.TOKEN_EXPIRY_MINUTES * 60 * 1000;

    const payload: TokenPayload = {
      email,
      timestamp: now,
      expires,
    };

    // Simple encoding (use proper JWT/encryption in production)
    return Buffer.from(JSON.stringify(payload)).toString("base64url");
  }

  decodeToken(token: string): TokenPayload | null {
    try {
      const decoded = Buffer.from(token, "base64url").toString("utf-8");
      const payload = JSON.parse(decoded) as TokenPayload;

      // Validate payload structure
      if (!payload.email || !payload.timestamp || !payload.expires) {
        return null;
      }

      return payload;
    } catch (error) {
      console.error("Token decode error:", error);
      return null;
    }
  }

  isTokenExpired(payload: TokenPayload): boolean {
    return Date.now() > payload.expires;
  }

  async sendMagicLink(email: string): Promise<MagicLinkResult> {
    try {
      const token = this.generateToken(email);
      const env = getEnv();

      // Create magic link URL
      const magicLink = `${env.HOSTED_BASE_API_URL}/auth/verify?token=${token}`;

      // Send magic link email
      await sendEmail({
        to: email,
        subject: "Your Veterans Lounge Login Link",
        text: `Click this link to sign in: ${magicLink}

This link expires in ${this.TOKEN_EXPIRY_MINUTES} minutes.

If you didn't request this, ignore this email.`,
      });

      return {
        success: true,
        message: "Magic link sent! Check your email.",
      };
    } catch (error) {
      console.error("Failed to send magic link:", error);
      return {
        success: false,
        message: "Failed to send magic link. Please try again.",
      };
    }
  }

  async verifyMagicLink(token: string): Promise<VerifyResult> {
    try {
      const payload = this.decodeToken(token);

      if (!payload) {
        return { valid: false, error: "Invalid token" };
      }

      if (this.isTokenExpired(payload)) {
        return { valid: false, error: "Token has expired" };
      }

      return { valid: true, email: payload.email };
    } catch (error) {
      console.error("Token verification error:", error);
      return { valid: false, error: "Token verification failed" };
    }
  }
}

// Export singleton instance
export const authService = new MagicLinkAuthService();
