import Stripe from 'stripe';
import { validateEnvironment, ENV } from './env';

// Validate environment variables when module loads
validateEnvironment();

// Singleton Stripe instance
export const stripe = new Stripe(ENV.STRIPE_SECRET_KEY, {
  apiVersion: '2025-07-30.basil',
});

// Export config for use in other parts of the app
export const STRIPE_CONFIG = {
  publishableKey: ENV.STRIPE_PUBLISHABLE_KEY,
  secretKey: ENV.STRIPE_SECRET_KEY,
} as const;