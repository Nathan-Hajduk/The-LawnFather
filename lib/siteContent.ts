export const SERVICE_KEYS = [
  'mowing',
  'weedwacking',
  'weeding',
  'bush-trimming',
  'mulching',
  'gardening',
  'powerwashing',
  'small-handyman-work'
] as const;

export type ServiceKey = (typeof SERVICE_KEYS)[number];

export type ServiceCardContent = {
  key: ServiceKey;
  name: string;
  description: string;
  pricingNote: string;
  estimateType: 'custom' | 'hourly';
  hourlyHours?: [number, number];
};

export const SERVICE_OPTIONS: ServiceCardContent[] = [
  {
    key: 'mowing',
    name: 'Mowing',
    description: 'Consistent, clean cuts that keep your lawn sharp and healthy through the season.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom'
  },
  {
    key: 'weedwacking',
    name: 'Weedwacking',
    description: 'Edge cleanup for fences, beds, walkways, and hard-to-reach areas around your property.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom'
  },
  {
    key: 'weeding',
    name: 'Weeding',
    description: 'Hands-on removal of unwanted growth to keep beds and outdoor spaces tidy.',
    pricingNote: 'Starting at $40/hour.',
    estimateType: 'hourly',
    hourlyHours: [2, 4]
  },
  {
    key: 'bush-trimming',
    name: 'Bush Trimming',
    description: 'Shape and maintain shrubs so your landscape looks neat and balanced.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom'
  },
  {
    key: 'mulching',
    name: 'Mulching',
    description: 'Fresh mulch installation to improve curb appeal, moisture retention, and weed control.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom'
  },
  {
    key: 'gardening',
    name: 'Gardening',
    description: 'Planting, bed cleanup, and garden support for a more polished and welcoming yard.',
    pricingNote: 'Starting at $40/hour.',
    estimateType: 'hourly',
    hourlyHours: [2, 5]
  },
  {
    key: 'powerwashing',
    name: 'Powerwashing',
    description: 'Exterior cleaning for driveways, patios, siding, and other surfaces that need a refresh.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom'
  },
  {
    key: 'small-handyman-work',
    name: 'Small Handyman Work',
    description: 'Light property fixes, touch-ups, and help with minor outdoor or home maintenance tasks.',
    pricingNote: 'Starting at $40/hour.',
    estimateType: 'hourly',
    hourlyHours: [1, 4]
  }
];

export const WHY_CHOOSE_CARDS = [
  {
    title: 'Reliable Scheduling',
    description: 'You can count on clear timing, dependable arrival windows, and consistent follow-through.'
  },
  {
    title: 'Clear Communication',
    description: 'Quotes, updates, and job details stay simple so you always know what to expect.'
  },
  {
    title: 'Fair Pricing',
    description: 'Rates are built around your property size, scope, and the time needed to do the work right.'
  },
  {
    title: 'Detail-Oriented Work',
    description: 'The finishing touches matter, from neat edges to a clean final walk-through.'
  },
  {
    title: 'Multiple Outdoor Services',
    description: 'One company can help with lawn care, trimming, cleaning, and small property maintenance.'
  }
];

export const PROMISE_CARDS = [
  'Show up on time',
  'Communicate clearly',
  'Respect your property',
  'Price fairly',
  'Finish with pride'
];

export const VALUE_PROPS = [
  'Reliable communication',
  'Fair pricing',
  'Punctual service',
  'Clean work',
  'Property-focused quotes'
];

export const TESTIMONIALS = [
  {
    name: 'Jordan M.',
    quote: 'The communication was excellent, and the yard looked completely refreshed.'
  },
  {
    name: 'Alex R.',
    quote: 'Very punctual, fair pricing, and strong attention to detail.'
  },
  {
    name: 'Taylor S.',
    quote: 'The work was clean, professional, and better than expected.'
  },
  {
    name: 'Morgan K.',
    quote: 'Great customer service and dependable scheduling.'
  },
  {
    name: 'Casey D.',
    quote: 'Helped make the property look sharper and more welcoming.'
  }
];