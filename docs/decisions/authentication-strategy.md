# Authentication Strategy: Magic Link + Stripe-as-Database

**Status:** Proposed  
**Date:** 2025-08-12  
**Deciders:** Development Team  

## Context

The Veterans Lounge requires authentication for Stripe integration features:
- Verify subscription status
- Verify customer information  
- Access donation history
- Manage recurring donations

**User Base:** 100-200 veterans with sporadic login patterns  
**Use Case:** Donation-focused platform, not high-frequency usage

## Decision

We will implement **magic link authentication** using **Stripe as the user database**.

### Architecture Overview

```
User Flow:
1. User enters email → POST /api/auth/send-magic-link
2. System generates JWT token + sends email
3. User clicks link → GET /api/auth/verify?token=xyz  
4. System validates token + creates session
5. Protected routes query Stripe by email for user data
```

### Technical Implementation

**Authentication Routes:**
- `POST /api/auth/send-magic-link` - Email validation & token generation
- `GET /api/auth/verify` - Token validation & session creation

**Protected Routes:**
- `GET /api/stripe/verify-subscription` - Check subscription status
- `GET /api/stripe/verify-customer` - Validate customer account

**User Data Storage:**
- **Primary:** Stripe customer database (queried by email)
- **Sessions:** Next.js session management  
- **No separate user database required**

## Rationale

### Why Magic Links?
- **Zero friction:** No password creation/management
- **Industry standard:** Used by Slack, Medium, Notion
- **Security:** No password breaches, reduced phishing risk
- **Perfect for donations:** Low-frequency access pattern

### Why Stripe-as-Database?
- **Existing data:** Users already exist after donations
- **Rate limits:** 100 req/sec (test), 25 req/sec (live) - sufficient for our user base
- **Simplicity:** No separate user database to maintain
- **Data consistency:** Single source of truth in Stripe

### Scale Analysis
```
Worst case scenario:
- 200 users login simultaneously
- 2 API calls per user (customer lookup + subscription check)  
- 400 total API calls in 1 minute
- Well under 1,500 req/min limit (25 req/sec)
```

## Implementation Plan

### Phase 1: Core Auth
1. Email validation with Zod schemas
2. JWT token generation/validation
3. Magic link email sending
4. Session management

### Phase 2: Stripe Integration  
1. Customer lookup by email
2. Subscription verification
3. Protected route middleware
4. Error handling for rate limits

### Phase 3: User Experience
1. Login/logout UI components
2. Protected dashboard pages
3. Donation history display
4. Subscription management

## Alternatives Considered

### Traditional Auth (Username/Password)
- **Pros:** Familiar pattern, offline capability
- **Cons:** Password management burden, security risks, unnecessary complexity
- **Verdict:** Rejected - overkill for donation platform

### NextAuth.js + Database
- **Pros:** Full-featured, multiple providers
- **Cons:** Additional database, over-engineered for our needs
- **Verdict:** Rejected - too complex for user base size

### Auth0/Clerk
- **Pros:** Managed service, enterprise features  
- **Cons:** Additional cost, vendor dependency, unnecessary features
- **Verdict:** Rejected - cost not justified for 100-200 users

## Security Considerations

- **Token Expiration:** 15-minute JWT lifetime
- **Rate Limiting:** Email sending limits (prevent spam)
- **CSRF Protection:** Secure cookie settings
- **Email Validation:** Zod schema validation
- **HTTPS Only:** All auth endpoints require SSL

## Success Metrics

- **User Adoption:** >80% successful magic link logins
- **Performance:** <2 second auth flow completion  
- **Reliability:** <1% authentication failures
- **Rate Limits:** Zero Stripe rate limit violations

## Future Considerations

**Scale Thresholds (when to reconsider):**
- 1,000+ active users
- >10 req/sec sustained Stripe API usage
- Real-time features requiring frequent auth checks
- Sub-second response time requirements

**Migration Path:**
If needed, introduce user database while maintaining Stripe integration for payment data consistency.

## Notes

This approach leverages existing Stripe infrastructure while providing secure, user-friendly authentication suitable for a donation-focused veteran community platform.