Deployment checklist for Vercel

Required environment variables (set in the Vercel project settings):

- RESEND_API_KEY — your Resend API key (used by `lib/email.ts`).
- EMAIL_SERVICE_API_KEY — optional backup email service key (if you use a different provider).
- FROM_EMAIL — sender address shown on outgoing quote emails (e.g., `The LawnFather <onboarding@yourdomain.com>`).
- QUOTE_RECEIVER_EMAIL — destination email for quote submissions (default: `lawnfatherco@gmail.com`).

Recommended steps before deploying:

1. Verify previews locally:
   - `npm run build`
   - `npm run start -- --port 3012`
   - Smoke-test `/`, `/services`, `/about`, `/gallery`, and `/quote`.
2. Confirm media assets under `public/media/` are the final set you want deployed — consider hosting large videos externally to avoid large repo sizes.
3. Add the environment variables to Vercel (Production and Preview as needed).
4. Connect the Git repository to Vercel and trigger a deployment.
5. After deployment, test the quote form on the live URL and verify emails are delivered to `QUOTE_RECEIVER_EMAIL`.

Notes:
- The project already includes curated testimonials in `lib/siteContent.ts`.
- If you prefer a PR-based workflow, create a branch and open a PR before merging to main.
