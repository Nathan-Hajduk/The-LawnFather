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
  featuredMedia?: {
    src: string;
    kind: 'image' | 'video';
    alt: string;
  };
};

export const SERVICE_OPTIONS: ServiceCardContent[] = [
  {
    key: 'mowing',
    name: 'Mowing',
    description: 'Consistent, clean cuts that keep your lawn sharp and healthy through the season.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/Mowing.MP4',
      kind: 'video',
      alt: 'Mowing service video'
    }
  },
  {
    key: 'weedwacking',
    name: 'Weedwacking',
    description: 'Edge cleanup for fences, beds, walkways, and hard-to-reach areas around your property.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/Weedwacking.BushTrimming1.jpeg',
      kind: 'image',
      alt: 'Weedwacking and bush trimming photo'
    }
  },
  {
    key: 'weeding',
    name: 'Weeding',
    description: 'Hands-on removal of unwanted growth to keep beds and outdoor spaces tidy.',
    pricingNote: 'Starting at $50/hour.',
    estimateType: 'hourly',
    hourlyHours: [2, 4],
    featuredMedia: {
      src: '/media/Weeding1.jpeg',
      kind: 'image',
      alt: 'Weeding service photo'
    }
  },
  {
    key: 'bush-trimming',
    name: 'Bush Trimming',
    description: 'Shape and maintain shrubs so your landscape looks neat and balanced.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/BushTrimming.jpeg',
      kind: 'image',
      alt: 'Bush trimming service photo'
    }
  },
  {
    key: 'mulching',
    name: 'Mulching',
    description: 'Fresh mulch installation to improve curb appeal, moisture retention, and weed control.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/MainMulchingVideo.mp4',
      kind: 'video',
      alt: 'Mulching service video'
    }
  },
  {
    key: 'gardening',
    name: 'Gardening',
    description: 'Planting, bed cleanup, and garden support for a more polished and welcoming yard.',
    pricingNote: 'Starting at $50/hour.',
    estimateType: 'hourly',
    hourlyHours: [2, 5],
    featuredMedia: {
      src: '/media/GardneringAeration1.jpeg',
      kind: 'image',
      alt: 'Gardening and aeration photo'
    }
  },
  {
    key: 'powerwashing',
    name: 'Powerwashing',
    description: 'Exterior cleaning for driveways, patios, siding, and other surfaces that need a refresh.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/PoolCleanup.BushTrim.FurniturePowerwash.mp4',
      kind: 'video',
      alt: 'Powerwashing and cleanup video'
    }
  },
  {
    key: 'small-handyman-work',
    name: 'Small Handyman Work',
    description: 'Light property fixes, touch-ups, and help with minor outdoor or home maintenance tasks.',
    pricingNote: 'Starting at $50/hour.',
    estimateType: 'hourly',
    hourlyHours: [1, 4],
    featuredMedia: {
      src: '/media/HandyManJobMoving.jpeg',
      kind: 'image',
      alt: 'Handyman moving job photo'
    }
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
    name: 'Brookville Client',
    quote: 'Nathan did an amazing job on our yard in Brookville. He was professional, respectful, and treated the property with real care. The lawn looked clean, sharp, and well maintained.'
  },
  {
    name: 'Old Westbury Client',
    quote: 'Nathan helped us with mowing, trimming, and cleanup in Old Westbury, and the results were excellent. He showed up ready to work and left everything looking immaculate.'
  },
  {
    name: 'Manhasset Client',
    quote: 'We hired Nathan for a yard cleanup in Manhasset, and he exceeded expectations. The edges were clean, the weeds were gone, and the whole property looked refreshed.'
  },
  {
    name: 'Sands Point Client',
    quote: 'Nathan was easy to communicate with and did a great job on our landscaping in Sands Point. He paid attention to the small details that really make a yard look finished.'
  },
  {
    name: 'Glen Head Client',
    quote: 'Nathan came out to our home in Glen Head and completely cleaned up the front yard. The work was neat, efficient, and professional from start to finish.'
  },
  {
    name: 'Roslyn Client',
    quote: 'I needed help with overgrown bushes and weeds in Roslyn, and Nathan handled everything perfectly. He worked hard and made the property look much more polished.'
  },
  {
    name: 'Jericho Client',
    quote: 'Nathan did a fantastic mulch job for us in Jericho. He was thorough, respectful, and made the whole front of the house look upgraded.'
  },
  {
    name: 'Syosset Client',
    quote: 'The LawnFather, led by Nathan, gave our yard in Syosset a complete refresh. The mowing, trimming, and cleanup were all done with care.'
  },
  {
    name: 'Oyster Bay Client',
    quote: 'Nathan was professional and dependable. He came to our property in Oyster Bay and made the lawn look clean, even, and well kept.'
  },
  {
    name: 'Locust Valley Client',
    quote: 'We had Nathan help with weeding and general lawn care in Locust Valley. He was punctual, hardworking, and very detail oriented.'
  },
  {
    name: 'Hicksville Client',
    quote: 'Nathan did an excellent job at our home in Hicksville. The yard went from messy to clean and presentable in one visit. Highly recommend his work.'
  },
  {
    name: 'Muttontown Client',
    quote: 'Nathan took care of our property in Muttontown and did an outstanding job. He clearly takes pride in his work, and it shows in the final result.'
  },
  {
    name: 'Matthews Client',
    quote: 'We booked Nathan for lawn care in Matthews, NC, and he did not disappoint. Great communication, clean work, and a very professional attitude.'
  },
  {
    name: 'Charlotte Client',
    quote: 'Nathan helped us clean up our yard in Charlotte, and the difference was huge. He worked efficiently and made everything look fresh again.'
  },
  {
    name: 'Ballantyne Client',
    quote: 'I hired Nathan for mowing and weed trimming in Ballantyne, and he did excellent work. The lawn looked sharp, and he left no mess behind.'
  },
  {
    name: 'SouthPark Client',
    quote: 'Nathan did a great job with our yard in SouthPark. He was respectful, focused, and made sure the property looked right before leaving.'
  },
  {
    name: 'Indian Trail Client',
    quote: 'We needed a full cleanup in Indian Trail, and Nathan came through. The LawnFather service was professional, reliable, and worth every penny.'
  },
  {
    name: 'Mint Hill Client',
    quote: 'Nathan handled our lawn care in Mint Hill, and the results were better than expected. Clean lines, careful trimming, and a very polished look.'
  },
  {
    name: 'Huntersville Client',
    quote: 'Nathan did a wonderful job on our property in Huntersville. He was communicative, hardworking, and made the yard look much healthier.'
  },
  {
    name: 'Pineville Client',
    quote: 'We had Nathan come out to our home in Pineville for mowing and cleanup. He was professional, quick, and very meticulous with the details.'
  },
  {
    name: 'Concord Client',
    quote: 'Nathan helped us with weeding and mulch in Concord, NC, and the yard looks beautiful. He brought everything back to life.'
  },
  {
    name: 'Waxhaw Client',
    quote: 'Nathan was great to work with in Waxhaw. He listened to what we needed, gave honest feedback, and delivered clean, high quality work.'
  },
  {
    name: 'Weddington Client',
    quote: 'The LawnFather did a great job at our home in Weddington, and Nathan was professional the entire time. The property looked clean and cared for.'
  },
  {
    name: 'Mooresville Client',
    quote: 'Nathan came to our house in Mooresville and made the yard look brand new. He was reliable, respectful, and clearly has a strong work ethic.'
  },
  {
    name: 'Davidson Client',
    quote: 'Nathan provided excellent lawn care service in Davidson. The whole process was simple, the communication was clear, and the final result looked pristine.'
  }
];