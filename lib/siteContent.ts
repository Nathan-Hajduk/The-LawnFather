export const BUSINESS_INFO = {
  name: 'The LawnFather',
  phone: '980-339-6491',
  phoneHref: 'tel:9803396491',
  website: 'https://thelawnfather.org/',
  facebook: 'https://www.facebook.com/TheLawnFatherNC',
  googleBusiness: '',
  // TODO: Add verified public Google Business Profile URL once Google publishes the listing.
};

export const SERVICE_KEYS = [
  'aeration-overseeding',
  'leaf-yard-cleanup',
  'mulching',
  'pressure-washing',
  'junk-debris-removal',
  'bush-hedge-trimming',
  'mowing',
  'edging',
  'weedwacking',
  'weeding',
  'gardening',
  'planting',
  'general-landscaping',
  'bush-trimming',
  'powerwashing',
  'small-handyman-work'
] as const;

export type ServiceKey = (typeof SERVICE_KEYS)[number];

export type ServiceCardContent = {
  key: ServiceKey;
  group: 'fall' | 'year-round';
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
    key: 'aeration-overseeding',
    group: 'fall',
    name: 'Aeration & Overseeding',
    description: 'Core aeration and overseeding to improve seed-to-soil contact, relieve soil compaction, and help prepare lawns for stronger cool-season growth.',
    pricingNote: 'Custom Quote',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/mowing-front-yard-fresh-cut-02.jpeg',
      kind: 'image',
      alt: 'Well-maintained LawnFather residential lawn in the Charlotte area'
    }
  },
  {
    key: 'leaf-yard-cleanup',
    group: 'fall',
    name: 'Leaf & Yard Cleanup',
    description: 'Leaf removal, leaf bagging, branches, landscape-bed cleanup, and seasonal property cleanup.',
    pricingNote: 'Custom Quote',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/IMG_8368.JPG',
      kind: 'image',
      alt: 'Residential property cleanup and yard trash removal by The LawnFather'
    }
  },
  {
    key: 'mulching',
    group: 'fall',
    name: 'Mulching',
    description: 'Fresh mulch installation and landscape-bed refreshes for improved curb appeal, moisture retention, and cleaner outdoor spaces.',
    pricingNote: 'Custom Quote',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/mulching-front-foundation-bed-01.jpeg',
      kind: 'image',
      alt: 'Fresh mulch installed around residential landscape beds in Charlotte'
    }
  },
  {
    key: 'powerwashing',
    group: 'fall',
    name: 'Pressure Washing',
    description: 'Exterior cleaning for driveways, sidewalks, patios, walkways, siding, and other suitable outdoor surfaces.',
    pricingNote: 'Custom Quote',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/powerwashing-curved-walkway-01.jpeg',
      kind: 'image',
      alt: 'Cleaned curved walkway after pressure washing'
    }
  },
  {
    key: 'junk-debris-removal',
    group: 'fall',
    name: 'Junk & Debris Removal',
    description: 'Removal of yard debris, brush, unwanted outdoor items, and general property clutter.',
    pricingNote: 'Custom Quote',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/IMG_3093.JPG',
      kind: 'image',
      alt: 'Yard cleanup and brush removal at a residential property'
    }
  },
  {
    key: 'bush-hedge-trimming',
    group: 'fall',
    name: 'Bush & Hedge Trimming',
    description: 'Seasonal trimming and shaping to keep shrubs, hedges, and landscape areas clean and maintained.',
    pricingNote: 'Custom Quote',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/trimming-front-landscape-bushes-06.jpeg',
      kind: 'image',
      alt: 'Trimmed shrubs and clean landscape edge at LawnFather project'
    }
  },
  {
    key: 'mowing',
    group: 'year-round',
    name: 'Lawn Mowing',
    description: 'Consistent, clean cuts that keep your lawn sharp and healthy through the season.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/mowing-front-yard-walkthrough-12.mp4',
      kind: 'video',
      alt: 'Front yard mowing walkthrough video'
    }
  },
  {
    key: 'edging',
    group: 'year-round',
    name: 'Edging',
    description: 'Sharp edges around walkways, driveways, and landscape borders for a cleaner finish.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/Weedwacking.BushTrimming1.jpeg',
      kind: 'image',
      alt: 'Sharp lawn edge and landscape finishing detail'
    }
  },
  {
    key: 'weedwacking',
    group: 'year-round',
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
    group: 'year-round',
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
    key: 'gardening',
    group: 'year-round',
    name: 'Gardening',
    description: 'Planting, bed cleanup, and garden support for a more polished and welcoming yard.',
    pricingNote: 'Starting at $50/hour.',
    estimateType: 'hourly',
    hourlyHours: [2, 5],
    featuredMedia: {
      src: '/media/planting-side-yard-after-tree-installation-02.jpeg',
      kind: 'image',
      alt: 'Side yard planting and tree installation result'
    }
  },
  {
    key: 'planting',
    group: 'year-round',
    name: 'Planting',
    description: 'New plant installation and garden refreshes to improve color, texture, and curb appeal.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/Planting.jpeg',
      kind: 'image',
      alt: 'Freshly installed planting beds at a residential property'
    }
  },
  {
    key: 'general-landscaping',
    group: 'year-round',
    name: 'General Landscaping',
    description: 'Seasonal landscape maintenance, beds, cleanup, and property touch-ups that keep outdoor spaces looking cared for.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/IMG_3090.JPG',
      kind: 'image',
      alt: 'Residential landscape and garden work completed by The LawnFather'
    }
  },
  {
    key: 'bush-trimming',
    group: 'year-round',
    name: 'Bush Trimming',
    description: 'Shape and maintain shrubs so your landscape looks neat and balanced.',
    pricingNote: 'Custom quote based on property size and job scope.',
    estimateType: 'custom',
    featuredMedia: {
      src: '/media/trimming-front-landscape-bushes-06.jpeg',
      kind: 'image',
      alt: 'Front landscape bushes after trimming'
    }
  },
  {
    key: 'small-handyman-work',
    group: 'year-round',
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

export type ReviewItem = {
  name: string;
  area: string;
  postedAt: string;
  quote: string;
  source: 'Nextdoor';
  rating?: number;
  recommendationLabel: string;
};

export const TESTIMONIALS: ReviewItem[] = [
  {
    name: 'Ann Yountz',
    area: 'Piper Glen',
    postedAt: 'August 27, 2026',
    quote: 'Nathan, owner of “Lawn Father,” is a very respectful, & able body young man! I had 3 small bushes to be planted quickly, esp. with the Very Hot and Dry weather we have had. I wasn’t sure where I was going to plant them, Nathan’s suggestions were well received! He did a great job, and was fairly priced! Call him, you can thank me later! PS; my neighbor drove up and asked Nathan to give her an estimate on work she needed done in her yard! GREAT News travels Fast!',
    source: 'Nextdoor',
    recommendationLabel: 'Recommended on Nextdoor'
  },
  {
    name: 'Mark Tayloe',
    area: 'Providence Arbours',
    postedAt: 'August 20, 2026',
    quote: 'Nathan is fantastic. He is professional, personable, and very prompt in his communication. He cut down a couple of large holly trees for us and cleared out some overgrown beds. He did a great job. What a fine young man!',
    source: 'Nextdoor',
    recommendationLabel: 'Recommended on Nextdoor'
  },
  {
    name: 'Sheri Stephens-Lewis',
    area: 'Kilborne Acres',
    postedAt: 'August 17, 2026',
    quote: 'If you are looking for someone who does good yard work, Nathan is the one. Nathan did a great job with our yard, mowing, weed eater, and edging and was willing to work us in. Very professional, would definitely recommend and would utilize again.',
    source: 'Nextdoor',
    recommendationLabel: 'Recommended on Nextdoor'
  },
  {
    name: 'Abraham Saleem',
    area: 'McKee Woods',
    postedAt: 'August 6, 2026',
    quote: 'Nathan was nothing short of amazing! He did a great job on my retaining wall. In three words to describe the company it would be punctual, easygoing, professional. 10/10 recommend!',
    source: 'Nextdoor',
    recommendationLabel: 'Recommended on Nextdoor'
  },
  {
    name: 'Jackie L.',
    area: 'Orchid Hill',
    postedAt: 'July 28, 2026',
    quote: 'Nathan is a great young man who is very responsive and easy to communicate with. Work quality is good and price is reasonable. Highly recommend this contractor.',
    source: 'Nextdoor',
    recommendationLabel: 'Recommended on Nextdoor'
  },
  {
    name: 'Laura H.',
    area: 'Pine Forest, Matthews',
    postedAt: 'July 9, 2026',
    quote: 'I needed a quick turnaround, and Nate responded that evening and was able to mow my yard the next day. He took the time to double check what I wanted done and did a wonderful job. He is very friendly, personable, and a hard worker as well as reasonably priced. He spent some extra time and double checked with me when he was done. I was very happy with the results and have asked him to do some additional work for me. I would recommend his services. Check out his photos!',
    source: 'Nextdoor',
    recommendationLabel: 'Recommended on Nextdoor'
  },
  {
    name: 'Jimmy Ogburn',
    area: 'Raeburn',
    postedAt: 'July 5, 2026',
    quote: 'We were totally pleased with Nate’s most professional and great work. If you need lawn work done, he will not disappoint you with his excellent care. He is the best. Jimmy and Trish Ogburn.',
    source: 'Nextdoor',
    recommendationLabel: 'Recommended on Nextdoor'
  },
  {
    name: 'Lynne B.',
    area: 'Fort Mill, SC',
    postedAt: 'July 5, 2026',
    quote: 'Nate did a super job of trimming my hedges, trees, and bushes at a reasonable price. What a punctual, polite, efficient professional. I will be hiring him again. I think the pictures speak for themselves.',
    source: 'Nextdoor',
    recommendationLabel: 'Recommended on Nextdoor'
  },
  {
    name: 'Katherine Grier',
    area: "Settler's Landing",
    postedAt: 'June 25, 2026',
    quote: 'Highly recommend! He was extremely prompt, very polite, and did a thorough job from start to finish. It’s refreshing to work with someone who communicates well, shows up when they say they will, and takes pride in their work. He paid attention to the details and left everything looking great. If you’re looking for a reliable landscaper, I would definitely recommend him!',
    source: 'Nextdoor',
    rating: 5,
    recommendationLabel: '★★★★★\n5 Stars'
  }
];