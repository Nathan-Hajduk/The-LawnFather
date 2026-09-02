export const QUOTE_PHOTO_LIMITS = {
  maxFiles: 5,
  maxOriginalFileSizeBytes: 12 * 1024 * 1024,
  maxRequestBytes: 4 * 1024 * 1024,
  allowedMimeTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/heic', 'image/heif'] as const,
  allowedExtensions: ['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif'] as const
} as const;

export type QuotePhotoIssue = {
  filename?: string;
  message: string;
};

function getFileExtension(filename: string) {
  const dotIndex = filename.lastIndexOf('.');
  return dotIndex >= 0 ? filename.slice(dotIndex).toLowerCase() : '';
}

export function isSupportedQuotePhoto(file: Pick<File, 'name' | 'type'>) {
  return QUOTE_PHOTO_LIMITS.allowedMimeTypes.includes(file.type as (typeof QUOTE_PHOTO_LIMITS.allowedMimeTypes)[number])
    || QUOTE_PHOTO_LIMITS.allowedExtensions.includes(getFileExtension(file.name) as (typeof QUOTE_PHOTO_LIMITS.allowedExtensions)[number]);
}

export function estimateMultipartRequestBytes(files: Array<Pick<File, 'size'>>) {
  return files.reduce((total, file) => total + file.size, 0);
}

export function validateQuotePhotos(files: File[]) {
  const issues: QuotePhotoIssue[] = [];

  if (files.length > QUOTE_PHOTO_LIMITS.maxFiles) {
    issues.push({
      message: `You can attach up to ${QUOTE_PHOTO_LIMITS.maxFiles} photos. Please remove ${files.length - QUOTE_PHOTO_LIMITS.maxFiles} file(s) and try again.`
    });
  }

  for (const file of files) {
    if (!isSupportedQuotePhoto(file)) {
      issues.push({
        filename: file.name,
        message: `${file.name} is not a supported image type. Please upload a JPEG, PNG, WebP, HEIC, or HEIF file.`
      });
      continue;
    }

    if (file.size === 0) {
      issues.push({
        filename: file.name,
        message: `${file.name} appears to be empty. Please choose a different photo.`
      });
      continue;
    }

    if (file.size > QUOTE_PHOTO_LIMITS.maxOriginalFileSizeBytes) {
      issues.push({
        filename: file.name,
        message: `${file.name} is larger than ${Math.round(QUOTE_PHOTO_LIMITS.maxOriginalFileSizeBytes / (1024 * 1024))} MB. Please choose a smaller photo.`
      });
    }
  }

  if (estimateMultipartRequestBytes(files) > QUOTE_PHOTO_LIMITS.maxRequestBytes) {
    issues.push({
      message: `The selected photos are too large for this form. Please keep the upload under ${Math.round(QUOTE_PHOTO_LIMITS.maxRequestBytes / (1024 * 1024))} MB total, or text your photos to 980-339-6491.`
    });
  }

  return {
    issues,
    isValid: issues.length === 0
  };
}