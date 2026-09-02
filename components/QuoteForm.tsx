"use client";

import { useMemo, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { estimateQuote } from '@/lib/quoteEstimator';
import { QUOTE_PHOTO_LIMITS, type QuotePhotoIssue, validateQuotePhotos } from '@/lib/quoteUpload';
import { SERVICE_OPTIONS, type ServiceKey } from '@/lib/siteContent';

type QuoteFormProps = {
  initialServiceSlug?: ServiceKey;
};

type FormState = {
  fullName: string;
  email: string;
  phoneNumber: string;
  propertyAddress: string;
  city: string;
  state: string;
  zipCode: string;
  servicesNeeded: ServiceKey[];
  propertySize: 'small' | 'medium' | 'large';
  jobDescription: string;
  preferredContactMethod: 'phone' | 'email' | 'text';
  preferredDateTime: string;
  honeypot: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type PreparedUpload = {
  files: File[];
  issues: QuotePhotoIssue[];
};

const PROPERTY_SIZE_OPTIONS: Array<{ value: FormState['propertySize']; label: string; detail: string }> = [
  { value: 'small', label: 'Small', detail: 'Under 1 acre' },
  { value: 'medium', label: 'Medium', detail: '1-2 acres' },
  { value: 'large', label: 'Large', detail: '3+ acres' }
];

const CONTACT_OPTIONS: Array<{ value: FormState['preferredContactMethod']; label: string }> = [
  { value: 'phone', label: 'Phone' },
  { value: 'email', label: 'Email' },
  { value: 'text', label: 'Text' }
];

const ZIP_PATTERN = /^\d{5}(?:-\d{4})?$/;
const PHONE_PATTERN = /^[0-9()+\-\s.]{7,}$/;
const UPLOAD_FALLBACK_MESSAGE = 'If the upload keeps failing, text your photos to 980-339-6491.';

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function createInitialState(initialServiceSlug?: ServiceKey): FormState {
  return {
    fullName: '',
    email: '',
    phoneNumber: '',
    propertyAddress: '',
    city: '',
    state: '',
    zipCode: '',
    servicesNeeded: initialServiceSlug ? [initialServiceSlug] : [],
    propertySize: 'small',
    jobDescription: '',
    preferredContactMethod: 'phone',
    preferredDateTime: '',
    honeypot: ''
  };
}

function sanitizeText(value: string) {
  return value.trim().replace(/\s+/g, ' ');
}

function validateForm(values: FormState) {
  const errors: FormErrors = {};

  if (sanitizeText(values.fullName).length < 2) errors.fullName = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizeText(values.email))) errors.email = 'Please enter a valid email address.';
  if (!PHONE_PATTERN.test(sanitizeText(values.phoneNumber))) errors.phoneNumber = 'Please enter a valid phone number.';
  if (sanitizeText(values.propertyAddress).length < 5) errors.propertyAddress = 'Please enter a property address.';
  if (sanitizeText(values.city).length < 2) errors.city = 'Please enter a city.';
  if (sanitizeText(values.state).length < 2) errors.state = 'Please enter a state code.';
  if (!ZIP_PATTERN.test(sanitizeText(values.zipCode))) errors.zipCode = 'Please enter a valid ZIP code.';
  if (values.servicesNeeded.length === 0) errors.servicesNeeded = 'Select at least one service.' as string;
  if (sanitizeText(values.jobDescription).length < 10) errors.jobDescription = 'Please describe the work you need.';

  return errors;
}

async function compressImageForUpload(file: File) {
  if (!file.type.startsWith('image/')) return file;

  try {
    const imageBitmap = await createImageBitmap(file);
    const maxDimension = 1800;
    const scale = Math.min(1, maxDimension / Math.max(imageBitmap.width, imageBitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(imageBitmap.width * scale));
    canvas.height = Math.max(1, Math.round(imageBitmap.height * scale));

    const context = canvas.getContext('2d');
    if (!context) {
      imageBitmap.close();
      return file;
    }

    context.drawImage(imageBitmap, 0, 0, canvas.width, canvas.height);
    imageBitmap.close();

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.82));
    if (!blob) return file;

    const compressedName = `${file.name.replace(/\.[^.]+$/, '')}.jpg`;
    return new File([blob], compressedName, { type: 'image/jpeg', lastModified: file.lastModified });
  } catch {
    return file;
  }
}

async function prepareUploads(files: File[]): Promise<PreparedUpload> {
  const preparedFiles: File[] = [];

  for (const file of files) {
    preparedFiles.push(await compressImageForUpload(file));
  }

  const validation = validateQuotePhotos(preparedFiles);
  return {
    files: validation.isValid ? preparedFiles : [],
    issues: validation.issues
  };
}

function buildUploadStatusMessage(issues: QuotePhotoIssue[]) {
  const fileMessages = issues.filter((issue) => issue.filename).map((issue) => issue.message);
  const generalMessages = issues.filter((issue) => !issue.filename).map((issue) => issue.message);

  return [...fileMessages, ...generalMessages, UPLOAD_FALLBACK_MESSAGE].join(' ');
}

export function QuoteForm({ initialServiceSlug }: QuoteFormProps) {
  const [formState, setFormState] = useState<FormState>(() => createInitialState(initialServiceSlug));
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
  const [photoIssues, setPhotoIssues] = useState<QuotePhotoIssue[]>([]);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const estimate = useMemo(
    () =>
      estimateQuote({
        servicesNeeded: formState.servicesNeeded,
        propertySize: formState.propertySize
      }),
    [formState.propertySize, formState.servicesNeeded]
  );

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormState((current) => ({ ...current, [field]: value }));
    setFormErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function toggleService(serviceKey: ServiceKey) {
    setFormState((current) => ({
      ...current,
      servicesNeeded: current.servicesNeeded.includes(serviceKey)
        ? current.servicesNeeded.filter((item) => item !== serviceKey)
        : [...current.servicesNeeded, serviceKey]
    }));
  }

  function handlePhotoUpload(files: FileList | null) {
    setSelectedPhotos(files ? Array.from(files) : []);
    setPhotoIssues([]);
    setSubmitStatus('idle');
    setStatusMessage('');
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus('idle');
    setStatusMessage('');
    setPhotoIssues([]);

    const nextErrors = validateForm(formState);
    if (formState.honeypot.trim()) {
      setSubmitStatus('error');
      setStatusMessage('Quote request rejected.');
      return;
    }

    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors);
      setSubmitStatus('error');
      setStatusMessage('Please check the form fields and try again.');
      return;
    }

    setIsSubmitting(true);

    try {
      const preparedUploads = await prepareUploads(selectedPhotos);
      if (preparedUploads.issues.length > 0) {
        setPhotoIssues(preparedUploads.issues);
        setSubmitStatus('error');
        setStatusMessage(buildUploadStatusMessage(preparedUploads.issues));
        return;
      }

      const payload = new FormData();
      payload.append('fullName', sanitizeText(formState.fullName));
      payload.append('email', sanitizeText(formState.email));
      payload.append('phoneNumber', sanitizeText(formState.phoneNumber));
      payload.append('propertyAddress', sanitizeText(formState.propertyAddress));
      payload.append('city', sanitizeText(formState.city));
      payload.append('state', sanitizeText(formState.state));
      payload.append('zipCode', sanitizeText(formState.zipCode));
      formState.servicesNeeded.forEach((service) => payload.append('servicesNeeded', service));
      payload.append('propertySize', formState.propertySize);
      payload.append('jobDescription', sanitizeText(formState.jobDescription));
      payload.append('preferredContactMethod', formState.preferredContactMethod);
      payload.append('preferredDateTime', formState.preferredDateTime);
      payload.append('honeypot', formState.honeypot);
      preparedUploads.files.forEach((photo) => payload.append('photos', photo));

      const response = await fetch('/api/quote', {
        method: 'POST',
        body: payload,
        credentials: 'same-origin'
      });

      const responseBody = (await response.json().catch(() => ({}))) as { message?: string; photoIssues?: QuotePhotoIssue[] };

      if (!response.ok) {
        setSubmitStatus('error');
        setStatusMessage(responseBody.message ?? 'Something went wrong while sending your request.');
        setPhotoIssues(responseBody.photoIssues ?? []);
        return;
      }

      setSubmitStatus('success');
      setStatusMessage(responseBody.message ?? 'Your quote request was sent successfully.');
      setFormState(createInitialState(initialServiceSlug));
      setSelectedPhotos([]);
      setPhotoIssues([]);
      setFormErrors({});
    } catch {
      setSubmitStatus('error');
      setStatusMessage(`Something went wrong while sending your request. ${UPLOAD_FALLBACK_MESSAGE}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <form
        action="/api/quote"
        encType="multipart/form-data"
        method="post"
        onSubmit={onSubmit}
        className="glass-panel-strong space-y-6 p-6 sm:p-8"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="label-text" htmlFor="fullName">Full Name</label>
            <input id="fullName" className="input-shell" value={formState.fullName} onChange={(event) => updateField('fullName', event.target.value)} />
            {formErrors.fullName ? <p className="mt-2 text-sm font-medium text-red-600">{formErrors.fullName}</p> : null}
          </div>
          <div>
            <label className="label-text" htmlFor="email">Email</label>
            <input id="email" type="email" className="input-shell" value={formState.email} onChange={(event) => updateField('email', event.target.value)} />
            {formErrors.email ? <p className="mt-2 text-sm font-medium text-red-600">{formErrors.email}</p> : null}
          </div>
          <div>
            <label className="label-text" htmlFor="phoneNumber">Phone Number</label>
            <input id="phoneNumber" className="input-shell" value={formState.phoneNumber} onChange={(event) => updateField('phoneNumber', event.target.value)} />
            {formErrors.phoneNumber ? <p className="mt-2 text-sm font-medium text-red-600">{formErrors.phoneNumber}</p> : null}
          </div>
          <div>
            <label className="label-text" htmlFor="propertyAddress">Property Address</label>
            <input id="propertyAddress" className="input-shell" value={formState.propertyAddress} onChange={(event) => updateField('propertyAddress', event.target.value)} />
            {formErrors.propertyAddress ? <p className="mt-2 text-sm font-medium text-red-600">{formErrors.propertyAddress}</p> : null}
          </div>
          <div>
            <label className="label-text" htmlFor="city">City</label>
            <input id="city" className="input-shell" value={formState.city} onChange={(event) => updateField('city', event.target.value)} />
            {formErrors.city ? <p className="mt-2 text-sm font-medium text-red-600">{formErrors.city}</p> : null}
          </div>
          <div>
            <label className="label-text" htmlFor="state">State</label>
            <input id="state" placeholder="NC" className="input-shell" value={formState.state} onChange={(event) => updateField('state', event.target.value)} />
            {formErrors.state ? <p className="mt-2 text-sm font-medium text-red-600">{formErrors.state}</p> : null}
          </div>
          <div>
            <label className="label-text" htmlFor="zipCode">ZIP Code</label>
            <input id="zipCode" className="input-shell" value={formState.zipCode} onChange={(event) => updateField('zipCode', event.target.value)} />
            {formErrors.zipCode ? <p className="mt-2 text-sm font-medium text-red-600">{formErrors.zipCode}</p> : null}
          </div>
          <div>
            <label className="label-text" htmlFor="preferredDateTime">Preferred Date/Time</label>
            <input id="preferredDateTime" type="datetime-local" className="input-shell" value={formState.preferredDateTime} onChange={(event) => updateField('preferredDateTime', event.target.value)} />
          </div>
        </div>

        <div>
          <p className="label-text">Services Needed</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {SERVICE_OPTIONS.map((service) => {
              const isSelected = formState.servicesNeeded.includes(service.key);

              return (
                <label key={service.key} className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-4 text-sm transition ${isSelected ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50'}`}>
                  <input type="checkbox" checked={isSelected} onChange={() => toggleService(service.key)} className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-300" />
                  <span>
                    <span className="block font-semibold text-slate-900">{service.name}</span>
                    <span className="mt-1 block text-xs text-slate-600">{service.pricingNote}</span>
                  </span>
                </label>
              );
            })}
          </div>
          {formErrors.servicesNeeded ? <p className="mt-2 text-sm font-medium text-red-600">{formErrors.servicesNeeded}</p> : null}
        </div>

        <div>
          <p className="label-text">Property Size</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {PROPERTY_SIZE_OPTIONS.map((option) => (
              <label key={option.value} className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${formState.propertySize === option.value ? 'border-emerald-400 bg-emerald-50 text-slate-900' : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50'}`}>
                <input type="radio" name="propertySize" value={option.value} checked={formState.propertySize === option.value} onChange={() => updateField('propertySize', option.value)} className="h-4 w-4 border-slate-300 text-emerald-600 focus:ring-emerald-300" />
                <span>
                  <span className="block font-semibold">{option.label}</span>
                  <span className="block text-xs text-slate-500">{option.detail}</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="label-text">Preferred Contact Method</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {CONTACT_OPTIONS.map((option) => (
                <label key={option.value} className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${formState.preferredContactMethod === option.value ? 'border-emerald-400 bg-emerald-50 text-slate-900' : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50'}`}>
                  <input type="radio" name="preferredContactMethod" value={option.value} checked={formState.preferredContactMethod === option.value} onChange={() => updateField('preferredContactMethod', option.value)} className="h-4 w-4 border-slate-300 text-emerald-600 focus:ring-emerald-300" />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="label-text" htmlFor="jobDescription">Job Description</label>
            <textarea id="jobDescription" rows={6} className="input-shell resize-none" value={formState.jobDescription} onChange={(event) => updateField('jobDescription', event.target.value)} />
            {formErrors.jobDescription ? <p className="mt-2 text-sm font-medium text-red-600">{formErrors.jobDescription}</p> : null}
          </div>
        </div>

        <div>
          <label className="label-text" htmlFor="photos">Upload Photos</label>
          <input
            id="photos"
            name="photos"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
            multiple
            onChange={(event) => handlePhotoUpload(event.target.files)}
            className="input-shell py-3"
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Upload up to {QUOTE_PHOTO_LIMITS.maxFiles} photos. Supported formats: JPEG, PNG, WebP, HEIC, and HEIF. Images are compressed before sending when possible.
          </p>
          {selectedPhotos.length > 0 ? (
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {selectedPhotos.map((photo) => (
                <li key={`${photo.name}-${photo.size}`} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-medium text-slate-900">{photo.name}</span>
                    <span className="shrink-0 text-xs text-slate-500">{formatFileSize(photo.size)}</span>
                  </div>
                  {photoIssues.find((issue) => issue.filename === photo.name) ? (
                    <p className="mt-2 text-xs font-medium text-red-600">
                      {photoIssues.find((issue) => issue.filename === photo.name)?.message}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : null}
          {photoIssues.some((issue) => !issue.filename) ? (
            <div className="mt-3 space-y-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" aria-live="polite">
              {photoIssues
                .filter((issue) => !issue.filename)
                .map((issue) => (
                  <p key={issue.message}>{issue.message}</p>
                ))}
            </div>
          ) : null}
        </div>

        <div className="sr-only" aria-hidden="true">
          <label htmlFor="honeypot">Leave this field empty</label>
          <input id="honeypot" tabIndex={-1} autoComplete="off" className="input-shell" value={formState.honeypot} onChange={(event) => updateField('honeypot', event.target.value)} />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" className="neon-button w-full sm:w-auto" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" /> : null}
            Submit Quote Request
          </button>
          <p className="text-sm text-slate-500">We only use your information to respond to your request.</p>
        </div>

        {submitStatus !== 'idle' ? (
          <p className={`rounded-2xl px-4 py-3 text-sm font-medium ${submitStatus === 'success' ? 'bg-emerald-50 text-emerald-900' : 'bg-red-50 text-red-800'}`} aria-live="polite">
            {statusMessage}
          </p>
        ) : null}
      </form>

      <aside className="space-y-6">
        <div className="glass-panel-strong p-6">
          <p className="section-kicker">Estimate Preview</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">{estimate.rangeLabel}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Some jobs need a quick property review before accurate pricing. Photos help me give you a faster and more precise quote.</p>
          <div className="mt-5 space-y-3 text-sm text-slate-600">
            {estimate.breakdown.map((item) => (
              <p key={item} className="rounded-2xl border border-slate-200 bg-white p-3 leading-6 text-slate-700">{item}</p>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-6 text-emerald-900">
            Estimate is not final. Final pricing may vary based on property condition, job complexity, materials, travel distance, and required labor.
          </div>
        </div>
      </aside>
    </div>
  );
}
