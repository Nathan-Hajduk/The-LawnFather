import { Resend } from 'resend';
import type { QuoteRequestInput } from '@/lib/quoteSchema';
import { SERVICE_OPTIONS } from '@/lib/siteContent';

function cleanText(value: string | undefined | null) {
  return (value ?? '').toString().replace(/\s+/g, ' ').trim();
}

function formatServices(serviceKeys: string[]) {
  return serviceKeys
    .map((key) => SERVICE_OPTIONS.find((service) => service.key === key)?.name ?? key)
    .join(', ');
}

function buildQuoteEmailText(submission: QuoteRequestInput) {
  const lines = [
    'New quote request from The LawnFather website',
    '',
    `Name: ${cleanText(submission.fullName)}`,
    `Email: ${cleanText(submission.email)}`,
    `Phone: ${cleanText(submission.phoneNumber)}`,
    `Property Address: ${cleanText(submission.propertyAddress)}`,
    `City: ${cleanText(submission.city)}`,
    `State: ${cleanText(submission.state)}`,
    `ZIP Code: ${cleanText(submission.zipCode)}`,
    `Services Needed: ${formatServices(submission.servicesNeeded)}`,
    `Property Size: ${submission.propertySize}`,
    `Preferred Contact Method: ${submission.preferredContactMethod}`,
    `Preferred Date/Time: ${submission.preferredDateTime ? cleanText(submission.preferredDateTime) : 'Not provided'}`,
    '',
    'Job Description:',
    cleanText(submission.jobDescription),
    '',
    'This message was sent from the website quote form.'
  ];

  return lines.join('\n');
}

function buildQuoteEmailHtml(submission: QuoteRequestInput) {
  const rows = [
    ['Name', submission.fullName],
    ['Email', submission.email],
    ['Phone', submission.phoneNumber],
    ['Property Address', submission.propertyAddress],
    ['City', submission.city],
    ['State', submission.state],
    ['ZIP Code', submission.zipCode],
    ['Services Needed', formatServices(submission.servicesNeeded)],
    ['Property Size', submission.propertySize],
    ['Preferred Contact Method', submission.preferredContactMethod],
    ['Preferred Date/Time', submission.preferredDateTime ?? 'Not provided']
  ];

  return `
    <div style="font-family: Arial, sans-serif; background:#071012; color:#eaf7ee; padding:24px;">
      <div style="max-width:720px; margin:0 auto; background:#0f1518; border:1px solid rgba(105,240,140,0.18); border-radius:20px; padding:24px;">
        <h1 style="margin:0 0 12px; color:#69f08c; font-size:24px;">New quote request from The LawnFather website</h1>
        <p style="margin:0 0 20px; color:#c8d5cd;">A visitor submitted the quote form. Review the details below and respond as needed.</p>
        <table style="width:100%; border-collapse:collapse; color:#eaf7ee; font-size:14px;">
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding:10px 12px; border-top:1px solid rgba(148,163,184,0.16); width:220px; color:#a8b5ae;">${label}</td>
                  <td style="padding:10px 12px; border-top:1px solid rgba(148,163,184,0.16);">${String(value)}</td>
                </tr>
              `
            )
            .join('')}
        </table>
        <div style="margin-top:20px; padding:16px; border-radius:16px; background:rgba(105,240,140,0.08); color:#d8fbe3; line-height:1.6;">
          <strong>Job Description</strong><br />
          ${cleanText(submission.jobDescription)}
        </div>
      </div>
    </div>
  `;
}

export async function sendQuoteEmail(submission: QuoteRequestInput) {
  const apiKey = process.env.RESEND_API_KEY ?? process.env.EMAIL_SERVICE_API_KEY;
  const fromEmail = process.env.FROM_EMAIL ?? 'The LawnFather <onboarding@resend.dev>';
  const receiverEmail = process.env.QUOTE_RECEIVER_EMAIL ?? 'hajduk7nathan@gmail.com';

  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY or EMAIL_SERVICE_API_KEY.');
  }

  const resend = new Resend(apiKey);

  return resend.emails.send({
    from: fromEmail,
    to: receiverEmail,
    subject: 'New Quote Request from The LawnFather Website',
    text: buildQuoteEmailText(submission),
    html: buildQuoteEmailHtml(submission)
  });
}
