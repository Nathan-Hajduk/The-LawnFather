import { NextResponse } from 'next/server';
import { quoteRequestSchema } from '@/lib/quoteSchema';
import { sendQuoteEmail } from '@/lib/email';
import { validateQuotePhotos, type QuotePhotoIssue } from '@/lib/quoteUpload';

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

    const contentType = request.headers.get('content-type') ?? '';
    const payload = contentType.includes('multipart/form-data') ? await request.formData() : await request.json();
    const attachments: Array<{ filename: string; content: Buffer; contentType?: string }> = [];

    const result = payload instanceof FormData
      ? quoteRequestSchema.safeParse({
          fullName: String(payload.get('fullName') ?? ''),
          email: String(payload.get('email') ?? ''),
          phoneNumber: String(payload.get('phoneNumber') ?? ''),
          propertyAddress: String(payload.get('propertyAddress') ?? ''),
          city: String(payload.get('city') ?? ''),
          state: String(payload.get('state') ?? ''),
          zipCode: String(payload.get('zipCode') ?? ''),
          servicesNeeded: payload.getAll('servicesNeeded').map((value) => String(value)),
          propertySize: String(payload.get('propertySize') ?? ''),
          jobDescription: String(payload.get('jobDescription') ?? ''),
          preferredContactMethod: String(payload.get('preferredContactMethod') ?? ''),
          preferredDateTime: String(payload.get('preferredDateTime') ?? ''),
          honeypot: String(payload.get('honeypot') ?? '')
        })
      : quoteRequestSchema.safeParse(payload);

    if (payload instanceof FormData) {
      const photoFiles = payload.getAll('photos').filter((value): value is File => value instanceof File && value.size > 0);
      const photoValidation = validateQuotePhotos(photoFiles);

      if (!photoValidation.isValid) {
        const photoIssues = photoValidation.issues as QuotePhotoIssue[];
        return NextResponse.json(
          {
            message: photoIssues.map((issue) => issue.message).join(' ') || 'One or more photo uploads are not supported.',
            photoIssues
          },
          { status: 400 }
        );
      }

      for (const file of photoFiles) {
        attachments.push({
          filename: file.name || 'photo.jpg',
          content: Buffer.from(await file.arrayBuffer()),
          contentType: file.type || undefined
        });
      }
    }

    if (!result.success) {
      return NextResponse.json({ message: 'Please check the form fields and try again.', errors: result.error.flatten() }, { status: 400 });
    }

    if (result.data.honeypot) {
      return NextResponse.json({ message: 'Quote request rejected.' }, { status: 400 });
    }

    // TODO: If you swap email providers later, keep this validation and only replace the send function.
    await sendQuoteEmail(result.data, attachments);

    return NextResponse.json({ message: 'Your quote request was sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json({ message: 'We could not send your quote request right now. Please text your photos to 980-339-6491 and try again soon.' }, { status: 500 });
  }
}