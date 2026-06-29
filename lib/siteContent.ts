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
    name: 'Katherine Grier',
    area: "Settler's Landing",
    postedAt: '3 days ago',
    stars: 5,
    quote: "Highly recommend! He was extremely prompt, very polite, and did a thorough job from start to finish. It's refreshing to work with someone who communicates well, shows up when they say they will, and takes pride in their work. He paid attention to the details and left everything looking great. If you're looking for a reliable landscaper, I would definitely recommend him!"
  },
  {
    name: 'Mary H.',
    area: 'Fort Mill, SC',
    postedAt: '5 days ago',
    stars: 5,
    quote: "We had an out-of-control garden that Nate handled professionally and with a fantastic attitude. I had a few additional requests and he responded with, 'I won't leave until you're 100% satisfied.' He's the best. I'm asking him to do some additional work for us. We were so pleased."
  },
  {
    name: 'Gordon S.',
    area: 'White Oak',
    postedAt: '5 days ago',
    stars: 5,
    quote: 'Nate is great! Pun intended. He is a sterling young man, prompt, keeps you updated, works hard, communicates, suggests and gets the job done. Easy going and all-round nice guy. His pricing is reasonable too. Highly recommend his services for your yard work. Work with him for a great experience.'
  },
  {
    name: 'Antonio Garrison',
    area: 'Southampton',
    postedAt: '18 Jun',
    stars: 5,
    quote: "Working with Nathan has really been a highlight. He's prompt, professional, keeps you updated, followed instructions on the scope/project, great work, and overall was great to work with. I have used his services quite a few times and plan to continue to do so. Thank you for all the work you've done for me thus far!"
  },
  {
    name: 'Anjana Bhawnani',
    area: 'Heritage-Machado',
    postedAt: '17 Jun',
    stars: 5,
    quote: 'Nathan was outstanding. My regular lawn service had not been out for quite some time, so the grass had become very overgrown. Despite the challenging condition of the yard, Nathan did an excellent job. He was punctual, his communication was prompt and professional, and his pricing was very fair considering the amount of work involved. He was courteous, reliable, and responsible throughout the entire process. Most importantly, the yard looks fantastic now. I highly recommend Nathan and would not hesitate to hire him again.'
  },
  {
    name: 'Gina D.',
    area: 'Ashton Grove',
    postedAt: '12 Jun',
    stars: 5,
    quote: "Nate worked hard today to remove all weeds in my front and back gardens. It's 97 outside and he didn't stop once. I'm grateful for Nate's help and will definitely call him again. Thanks, Nate!"
  },
  {
    name: 'Robin Lassiter',
    area: 'Sardis Forest',
    postedAt: '11 Jun',
    stars: 5,
    quote: 'Nathan was super! I have overgrown hedges and he was more than willing to tackle the job. Such a respectful and pleasant young man and VERY hard working. Highly recommended. Thank you, Nathan.'
  },
  {
    name: 'Denise Arceneaux',
    area: 'Idol Rock',
    postedAt: '9 Jun',
    stars: 5,
    quote: "I highly recommend Nate for anyone looking for quality lawn care services. He did an exceptional job mowing and edging my yard today, and the results exceeded my expectations. His attention to detail, professionalism, and pride in his work were evident from start to finish. My lawn looks neat, clean, and beautifully maintained. The edging was crisp and precise, giving the entire yard a polished appearance. Nate was reliable, efficient, and left everything looking fantastic. I couldn't be happier with the outcome and will definitely be using his services again. If you're looking for someone who truly cares about the quality of their work, Nate is the person to call! Thank you, Nate, for a job well done!"
  },
  {
    name: 'Richard Crenshaw',
    area: 'Montibello',
    postedAt: '2w',
    stars: 5,
    quote: 'I used Nate "The LawnFather" for the 3rd time today and he was excellent as usual. He trimmed shrubs, trees, worked on my bed edging and put out mulch. He is worth more than he charges.'
  },
  {
    name: 'Rick Garrett',
    area: 'Old Salem/Meredith',
    postedAt: '8 Jun',
    stars: 5,
    quote: "I couldn't recommend Nathan more for your yard work needs. After contacting him, he showed up within 24 hours and did a super amazing job tackling an overgrown, large and hilly yard in extreme heat. He is professional, kind and an overall pleasure to work with."
  },
  {
    name: 'Heather McClure',
    area: 'Providence Forest',
    postedAt: '3 Jun',
    stars: 5,
    quote: 'Nathan is very thorough, hardworking, and a good communicator. He was a big help cleaning out some backyard overgrowth for us, glad to have found him.'
  },
  {
    name: 'Richard Crenshaw',
    area: 'Montibello',
    postedAt: '2 Jun',
    stars: 5,
    quote: 'Nathan does excellent work, I have used his services twice and plan another job for him next week.'
  },
  {
    name: 'Kim Powell',
    area: 'Sharon Woods',
    postedAt: '2 Jun',
    stars: 5,
    quote: 'Nathan was amazing! Very communicative, incredibly polite and hard working. He mowed, edged, trimmed bushes and blew off our yard and patio, all of which had been neglected for a month by our previous lawn guys. He worked in the unexpected rain, did more than I had asked for or expected and cleaned up after himself. All for a very reasonable price. So happy to support this young man and his small business. Will definitely use him again and recommend The LawnFather to neighbors and friends. Thank you Nathan!'
  },
  {
    name: 'Kurt Jacobs',
    area: 'Providence Plantation',
    postedAt: '1 Jun',
    stars: 5,
    quote: 'I would definitely hire Nathan again. He initially helped me clean the pool, trim hedges, clean up the yard. He is hardworking, dependable, respectful and communicates very well.'
  },
  {
    name: 'David Conner',
    area: 'Stonecreek Ranch',
    postedAt: '31 May',
    stars: 5,
    quote: 'Nathan did a fantastic job on our lawn. We reached out to him kind of last minute and he was very communicative and did exactly what he said! Great service and awesome performance!'
  },
  {
    name: 'Kay L.',
    area: 'International Dr',
    postedAt: '30 May',
    stars: 5,
    quote: 'I found Nate last minute on the Nextdoor app when another helper canceled on me. He was punctual, professional, and very friendly. He handled moving everything with ease and made the process much less stressful. I really appreciated his reliability and positive attitude. I would definitely recommend Nate to anyone needing help with a move and would hire him again in the future!'
  },
  {
    name: 'Richard Crenshaw',
    area: 'Montibello',
    postedAt: '30 May',
    stars: 5,
    quote: 'I have used Nate twice and he is great.'
  }
];