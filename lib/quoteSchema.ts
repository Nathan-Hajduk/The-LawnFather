import { z } from 'zod';
import { SERVICE_KEYS } from '@/lib/siteContent';

const phonePattern = /^[0-9()+\-\s.]{7,}$/;
const zipPattern = /^\d{5}(?:-\d{4})?$/;

export const quoteRequestSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  phoneNumber: z.string().trim().min(7, 'Please enter a phone number.').regex(phonePattern, 'Please enter a valid phone number.'),
  propertyAddress: z.string().trim().min(5, 'Please enter a property address.'),
  city: z.string().trim().min(2, 'Please enter a city.'),
  state: z.string().trim().min(2, 'Please enter a state code.'),
  zipCode: z.string().trim().regex(zipPattern, 'Please enter a valid ZIP code.'),
  servicesNeeded: z.array(z.enum(SERVICE_KEYS)).min(1, 'Select at least one service.'),
  propertySize: z.enum(['small', 'medium', 'large']),
  jobDescription: z.string().trim().min(10, 'Please describe the work you need.'),
  preferredContactMethod: z.enum(['phone', 'email', 'text']),
  preferredDateTime: z.string().trim().optional().or(z.literal('')),
  honeypot: z.string().trim().optional().or(z.literal(''))
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
