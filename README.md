# The LawnFather

Modern lawn care, landscaping, powerwashing, and small home-service website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, and a Resend-backed quote form.

## Pages Included

- Home
- Services
- Get a Quote
- About Us

## Services Included

- Mowing
- Weedwacking
- Weeding
- Bush trimming
- Mulching
- Gardening
- Powerwashing
- Small handyman work

## Quote Form Setup

The quote form validates input on the client and the server, includes a honeypot spam field, and sends quote details to the configured receiver email.

The form currently uses:

- `POST /api/quote`
- `lib/quoteSchema.ts` for validation
- `lib/email.ts` for email sending
- `lib/quoteEstimator.ts` for the live estimate preview

## Email Setup

This project uses Resend by default, but the helper accepts either `RESEND_API_KEY` or `EMAIL_SERVICE_API_KEY`.

Add these values to `.env.local`:

```bash
RESEND_API_KEY=your_resend_key_here
EMAIL_SERVICE_API_KEY=optional_backup_key
FROM_EMAIL=The LawnFather <onboarding@resend.dev>
QUOTE_RECEIVER_EMAIL=hajduk7nathan@gmail.com
```

Notes:

- Put the API key only in environment variables.
- Use a verified sending domain or a Resend-approved sender.
- Update `QUOTE_RECEIVER_EMAIL` later if you want quote requests delivered somewhere else.

## Environment Variables

See `.env.example` for the starter values.

## Local Development

1. Install dependencies.
2. Copy `.env.example` to `.env.local` and fill in the email keys.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Deploying to Vercel

1. Push the project to GitHub.
2. Import the repo into Vercel.
3. Add the environment variables in the Vercel dashboard.
4. Deploy the project.
5. Test the quote form after deployment.

## Custom Domain and QR Codes

After deployment, point your custom domain to the Vercel project. Then generate a QR code for either:

- the home page URL
- the intro video anchor, for example `https://your-domain.com/#intro-video`

This works well on business cards and printed flyers.

## Replacing Placeholder Media

- Replace the founder video placeholder with an embedded video or uploaded media.
- Replace the work showcase placeholders with before-and-after photos.
- Replace the service video placeholder with actual job clips later.

## Testimonials

This project ships with curated customer feedback included in `lib/siteContent.ts` and displayed by the testimonial rotator. Update or add real testimonials there as you collect them.

## Project Structure

- `app/page.tsx`
- `app/services/page.tsx`
- `app/quote/page.tsx`
- `app/about/page.tsx`
- `app/api/quote/route.ts`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/ReviewRotator.tsx`
- `components/ServiceCard.tsx`
- `components/VideoPlaceholder.tsx`
- `components/ImagePlaceholder.tsx`
- `components/QuoteForm.tsx`
- `components/CTASection.tsx`
- `lib/quoteEstimator.ts`
- `lib/email.ts`

## Notes

- The estimate preview is not a final quote.
- Zillow scraping is intentionally not used.
- A future property-data hook is left in `lib/quoteEstimator.ts` for a legitimate API integration later.