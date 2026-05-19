import { NextResponse } from 'next/server';
import { quoteRequestSchema } from '@/lib/quoteSchema';
import { sendQuoteEmail } from '@/lib/email';

export const runtime = 'nodejs';

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getRequestIp(request: Request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? request.headers.get('x-real-ip') ?? 'unknown';
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return false;
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return entry.count > 5;
}

export async function POST(request: Request) {
  try {
    const ip = getRequestIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json({ message: 'Too many quote requests. Please try again later.' }, { status: 429 });
    }

    const payload = await request.json();
    const result = quoteRequestSchema.safeParse(payload);

    if (!result.success) {
      return NextResponse.json({ message: 'Please check the form fields and try again.', errors: result.error.flatten() }, { status: 400 });
    }

    if (result.data.honeypot) {
      return NextResponse.json({ message: 'Quote request rejected.' }, { status: 400 });
    }

    // TODO: If you swap email providers later, keep this validation and only replace the send function.
    await sendQuoteEmail(result.data);

    return NextResponse.json({ message: 'Your quote request was sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json({ message: 'We could not send your quote request right now. Please try again soon.' }, { status: 500 });
  }
}