# Email Service Selection: Resend for Magic Link Authentication

**Status:** Decided  
**Date:** 2025-08-12  
**Deciders:** Development Team  

## Context

The Veterans Lounge requires email sending capability for magic link authentication. Users will receive emails containing secure login links instead of traditional password-based authentication.

**Use Case:** Send magic link emails to 100-200 veterans for authentication  
**Volume:** Low frequency (sporadic logins, not marketing emails)  
**Requirements:** High deliverability, simple integration, Cloudflare Workers compatibility

## Decision

We will use **Resend** as our email service provider.

## Options Evaluated

### 1. Resend
**Pricing:** 3,000 emails/month free, $20/month for 50k emails  
**Pros:**
- Built by Vercel team specifically for developers
- Excellent Next.js/React integration 
- TypeScript-first with great DX
- High deliverability (99%+ inbox rate)
- Works natively with Cloudflare Workers
- Simple API: `resend.emails.send()`
- 3k free emails covers our use case completely
- Built-in email templates and analytics

**Cons:**
- Newer service (less track record than SendGrid)
- Limited advanced features vs enterprise solutions

### 2. SendGrid
**Pricing:** No free tier (removed 2024), $15/month for 15k emails  
**Pros:**
- Industry standard with proven track record
- Extensive feature set (marketing, automation)
- Enterprise-grade reliability
- Advanced analytics and reporting

**Cons:**
- No free tier (removed in 2024)
- Complex API with steep learning curve
- Overkill for simple transactional emails
- $15/month minimum cost for any usage
- Complex setup and configuration

### 3. Nodemailer + Gmail Business
**Pricing:** $6/month for Gmail Business account  
**Pros:**
- Lower cost for small volume
- Full control over email sending
- Works with existing Google Workspace

**Cons:**
- Complex SMTP configuration
- Limited to 2,000 emails/day
- Potential deliverability issues
- Requires managing email infrastructure
- App password setup complexity
- Not ideal for production transactional emails

### 4. Nodemailer + Proton
**Pricing:** Free with Proton account  
**Pros:**
- Privacy-focused
- Cost-effective

**Cons:**
- Requires Proton Bridge (not available in Cloudflare Workers)
- Complex deployment setup
- Free tier has very limited SMTP access
- Would need VPS to run Bridge ($5+/month)

### 5. AWS SES
**Pricing:** $0.10 per 1,000 emails  
**Pros:**
- Very cost-effective at scale
- High reliability and performance
- Integrates with AWS ecosystem

**Cons:**
- Complex setup and configuration
- Requires AWS account management
- Poor developer experience for simple use cases
- Deliverability requires additional setup

## Rationale

### Why Resend Won:

**Perfect Fit for Use Case:**
- Magic link emails are transactional, not marketing
- Low volume (100-200 users × sporadic logins)
- 3,000 free emails covers 100% of expected usage

**Technical Advantages:**
- **Developer Experience:** Simple, intuitive API
- **Cloudflare Compatibility:** Works seamlessly with Workers
- **TypeScript Support:** Full type safety
- **Deliverability:** Built-in best practices for inbox delivery

**Operational Benefits:**
- **Zero Configuration:** Works out of the box
- **No Infrastructure:** Fully managed service
- **Reliable:** Built by team with proven track record (Vercel)

### Scale Analysis:
```
Current: 100-200 users
Worst case: 200 users × 10 logins/month = 2,000 emails/month
Resend free tier: 3,000 emails/month
Headroom: 50% buffer for growth
```

## Implementation Plan

### Phase 1: Basic Setup
1. Install Resend package
2. Configure API key in environment variables
3. Create email service wrapper in Services class
4. Design magic link email template

### Phase 2: Integration
1. Build magic link email sending functionality
2. Test email delivery and formatting
3. Implement email rate limiting
4. Add error handling and logging

### Phase 3: Production
1. Configure custom domain for emails
2. Set up monitoring and alerts
3. Review deliverability metrics
4. Optimize email templates based on engagement

## Success Metrics

- **Delivery Rate:** >99% emails delivered
- **Inbox Rate:** >95% emails reach inbox (not spam)
- **Performance:** <2 seconds to send magic link email
- **Cost:** Stay within free tier (3,000 emails/month)
- **User Experience:** >90% successful magic link authentications

## Security Considerations

- **Domain Authentication:** Configure SPF, DKIM, DMARC records
- **Email Content:** Use HTTPS links only
- **Rate Limiting:** Prevent email bombing attacks
- **Token Security:** Include secure, time-limited tokens in emails

## Future Considerations

**Scale Thresholds (when to reconsider):**
- 3,000+ emails/month consistently
- Need for advanced email marketing features
- Enterprise compliance requirements
- Multi-tenant email sending needs

**Migration Path:**
If outgrowing Resend, evaluate AWS SES for cost optimization or SendGrid for advanced features while maintaining the same service interface.

## Notes

Resend's developer-first approach aligns perfectly with our technical stack (Next.js, TypeScript, Cloudflare Workers) and usage patterns (transactional emails for authentication). The generous free tier eliminates cost concerns while providing enterprise-grade deliverability.