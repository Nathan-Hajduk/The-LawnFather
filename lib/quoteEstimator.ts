import { SERVICE_OPTIONS, type ServiceKey } from '@/lib/siteContent';

export type PropertySize = 'small' | 'medium' | 'large' | 'not-sure';

export type QuoteEstimateInput = {
  servicesNeeded: ServiceKey[];
  propertySize: PropertySize;
};

export type QuoteEstimate = {
  rangeLabel: string;
  low?: number;
  high?: number;
  notes: string[];
  requiresPropertyReview: boolean;
  breakdown: string[];
};

const PROPERTY_MULTIPLIERS: Record<PropertySize, number> = {
  small: 1,
  medium: 1.5,
  large: 2,
  'not-sure': 1.25
};

const HOURLY_RATE = 40;

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

export function estimateQuote(input: QuoteEstimateInput): QuoteEstimate {
  const propertyMultiplier = PROPERTY_MULTIPLIERS[input.propertySize];
  const notes: string[] = [];
  const breakdown: string[] = [];
  let lowTotal = 0;
  let highTotal = 0;
  let requiresPropertyReview = false;

  for (const serviceKey of input.servicesNeeded) {
    const service = SERVICE_OPTIONS.find((item) => item.key === serviceKey);
    if (!service) continue;

    if (service.estimateType === 'hourly' && service.hourlyHours) {
      const [minHours, maxHours] = service.hourlyHours;
      const lowHours = minHours * propertyMultiplier;
      const highHours = maxHours * propertyMultiplier;
      const serviceLow = lowHours * HOURLY_RATE;
      const serviceHigh = highHours * HOURLY_RATE;

      lowTotal += serviceLow;
      highTotal += serviceHigh;
      breakdown.push(`${service.name}: ${formatCurrency(serviceLow)}-${formatCurrency(serviceHigh)} based on ${minHours}-${maxHours} hours at $40/hour.`);
      continue;
    }

    requiresPropertyReview = true;
    notes.push(`${service.name}: requires property review for accurate pricing.`);
  }

  if (lowTotal === 0 && highTotal === 0) {
    return {
      rangeLabel: 'Custom quote based on property review',
      notes: [
        'Mowing, weedwacking, bush trimming, mulching, and powerwashing require property review for accurate pricing.',
        ...notes
      ],
      requiresPropertyReview: true,
      breakdown: notes.length ? notes : ['No instant pricing range available until the property is reviewed.']
    };
  }

  const serviceCount = input.servicesNeeded.length;
  const bundleModifier = serviceCount > 1 ? 0.95 : 1;
  const adjustedLow = Math.round(lowTotal * bundleModifier);
  const adjustedHigh = Math.round(highTotal * bundleModifier);

  return {
    rangeLabel: `${formatCurrency(adjustedLow)}-${formatCurrency(adjustedHigh)}`,
    low: adjustedLow,
    high: adjustedHigh,
    notes: [
      'Estimate is not final. Final pricing may vary based on property condition, job complexity, materials, travel distance, and required labor.',
      ...notes
    ],
    requiresPropertyReview,
    breakdown: breakdown.length ? breakdown : ['Hourly services included in the current estimate.']
  };
}

// Future integration placeholder.
// This function should later be connected to a legitimate property-data API,
// such as a county assessor feed or approved real-estate data provider.
// Do not replace this with Zillow scraping.
export async function getPropertyDataFromAddress(address: string) {
  return {
    address,
    status: 'placeholder',
    note: 'Connect this to a legitimate property data API later.'
  };
}

export { formatCurrency };
