export type MediaKind = 'image' | 'video';

export type MediaItem = {
  id: string;
  kind: MediaKind;
  src: string;
  title: string;
  serviceGroup: string;
  capturedAt: string;
};

export type MediaSection = {
  key: string;
  title: string;
  description: string;
  itemIds: string[];
};

export const ABOUT_US_MEDIA_IDS = ['AboutUs1.JPG', 'AboutUs2.WEBP', 'AboutUs4.JPG', 'AboutUs5.JPG'];

type PreparedMediaSeed = {
  id: string;
  kind: MediaKind;
  serviceGroup: string;
  capturedAt: string;
};

function buildPreparedMediaTitle(id: string, kind: MediaKind) {
  const baseName = id
    .replace(/\.[^.]+$/, '')
    .replace(/^(mowing|trimming|mulching|powerwashing|planting)-/i, '')
    .replace(/[-_.]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const title = baseName.replace(/\b\w/g, (character) => character.toUpperCase());
  return kind === 'video' && !title.toLowerCase().includes('video') ? `${title} video` : title;
}

function createPreparedMediaItem(seed: PreparedMediaSeed): MediaItem {
  return {
    id: seed.id,
    kind: seed.kind,
    src: `/media/${seed.id}`,
    title: buildPreparedMediaTitle(seed.id, seed.kind),
    serviceGroup: seed.serviceGroup,
    capturedAt: seed.capturedAt
  };
}

const PREPARED_MOWING_MEDIA: PreparedMediaSeed[] = [
  { id: 'mowing-backyard-evergreen-border-13.jpeg', kind: 'image', serviceGroup: 'Mowing', capturedAt: '2026-08-01T09:00:00' },
  { id: 'mowing-corner-lot-front-yard-01.jpeg', kind: 'image', serviceGroup: 'Mowing', capturedAt: '2026-08-01T09:05:00' },
  { id: 'mowing-curved-front-yard-11.jpeg', kind: 'image', serviceGroup: 'Mowing', capturedAt: '2026-08-01T09:10:00' },
  { id: 'mowing-driveway-side-yard-10.jpeg', kind: 'image', serviceGroup: 'Mowing', capturedAt: '2026-08-01T09:15:00' },
  { id: 'mowing-front-yard-fresh-cut-02.jpeg', kind: 'image', serviceGroup: 'Mowing', capturedAt: '2026-08-01T09:20:00' },
  { id: 'mowing-front-yard-stripes-06.jpeg', kind: 'image', serviceGroup: 'Mowing', capturedAt: '2026-08-01T09:25:00' },
  { id: 'mowing-front-yard-tree-09.jpeg', kind: 'image', serviceGroup: 'Mowing', capturedAt: '2026-08-01T09:30:00' },
  { id: 'mowing-front-yard-walkthrough-12.mp4', kind: 'video', serviceGroup: 'Mowing', capturedAt: '2026-08-01T09:35:00' },
  { id: 'mowing-large-backyard-07.jpeg', kind: 'image', serviceGroup: 'Mowing', capturedAt: '2026-08-01T09:40:00' },
  { id: 'mowing-lawnfather-business-card-08.jpeg', kind: 'image', serviceGroup: 'Mowing', capturedAt: '2026-08-01T09:45:00' },
  { id: 'mowing-shaded-side-yard-03.jpeg', kind: 'image', serviceGroup: 'Mowing', capturedAt: '2026-08-01T09:50:00' },
  { id: 'mowing-sloped-front-yard-05.jpeg', kind: 'image', serviceGroup: 'Mowing', capturedAt: '2026-08-01T09:55:00' },
  { id: 'mowing-wooded-backyard-04.jpeg', kind: 'image', serviceGroup: 'Mowing', capturedAt: '2026-08-01T10:00:00' }
];

const PREPARED_TRIMMING_MEDIA: PreparedMediaSeed[] = [
  { id: 'trimming-backyard-hedge-10.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T09:00:00' },
  { id: 'trimming-backyard-privacy-shrubs-01.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T09:05:00' },
  { id: 'trimming-driveway-shrub-row-12.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T09:10:00' },
  { id: 'trimming-driveway-shrub-row-13.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T09:15:00' },
  { id: 'trimming-driveway-shrub-row-14.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T09:20:00' },
  { id: 'trimming-driveway-shrub-row-15.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T09:25:00' },
  { id: 'trimming-driveway-shrub-row-16.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T09:30:00' },
  { id: 'trimming-driveway-shrub-row-17.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T09:35:00' },
  { id: 'trimming-front-foundation-shrubs-02.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T09:40:00' },
  { id: 'trimming-front-landscape-bushes-06.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T09:45:00' },
  { id: 'trimming-front-landscape-bushes-07.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T09:50:00' },
  { id: 'trimming-front-porch-boxwoods-08.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T09:55:00' },
  { id: 'trimming-front-yard-shrubs-04.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T10:00:00' },
  { id: 'trimming-garden-boxwoods-11.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T10:05:00' },
  { id: 'trimming-large-foundation-shrubs-03.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T10:10:00' },
  { id: 'trimming-rounded-garage-boxwood-09.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T10:15:00' },
  { id: 'trimming-side-yard-shrub-row-05.jpeg', kind: 'image', serviceGroup: 'Trimming', capturedAt: '2026-08-02T10:20:00' }
];

const PREPARED_MULCHING_MEDIA: PreparedMediaSeed[] = [
  { id: 'mulching-front-foundation-bed-01.jpeg', kind: 'image', serviceGroup: 'Mulching', capturedAt: '2026-08-03T09:00:00' },
  { id: 'mulching-side-foundation-bed-02.jpeg', kind: 'image', serviceGroup: 'Mulching', capturedAt: '2026-08-03T09:05:00' },
  { id: 'mulching-side-yard-pine-needles-03.jpeg', kind: 'image', serviceGroup: 'Mulching', capturedAt: '2026-08-03T09:10:00' }
];

const PREPARED_POWERWASHING_MEDIA: PreparedMediaSeed[] = [
  { id: 'powerwashing-brick-front-steps-03.jpeg', kind: 'image', serviceGroup: 'Powerwashing', capturedAt: '2026-08-04T09:00:00' },
  { id: 'powerwashing-covered-patio-04.jpeg', kind: 'image', serviceGroup: 'Powerwashing', capturedAt: '2026-08-04T09:05:00' },
  { id: 'powerwashing-curved-walkway-01.jpeg', kind: 'image', serviceGroup: 'Powerwashing', capturedAt: '2026-08-04T09:10:00' },
  { id: 'powerwashing-curved-walkway-02.jpeg', kind: 'image', serviceGroup: 'Powerwashing', capturedAt: '2026-08-04T09:15:00' }
];

const PREPARED_PLANTING_MEDIA: PreparedMediaSeed[] = [
  { id: 'planting-side-yard-after-tree-installation-02.jpeg', kind: 'image', serviceGroup: 'Planting', capturedAt: '2026-08-05T09:00:00' },
  { id: 'planting-side-yard-before-tree-installation-01.jpeg', kind: 'image', serviceGroup: 'Planting', capturedAt: '2026-08-05T09:05:00' }
];

const PREPARED_MEDIA_ITEMS = [
  ...PREPARED_MOWING_MEDIA.map(createPreparedMediaItem),
  ...PREPARED_TRIMMING_MEDIA.map(createPreparedMediaItem),
  ...PREPARED_MULCHING_MEDIA.map(createPreparedMediaItem),
  ...PREPARED_POWERWASHING_MEDIA.map(createPreparedMediaItem),
  ...PREPARED_PLANTING_MEDIA.map(createPreparedMediaItem)
];

export const MEDIA_ITEMS: MediaItem[] = [
  { id: 'IMG_8368.JPG', kind: 'image', src: '/media/IMG_8368.JPG', title: 'Lawn cleanup', serviceGroup: 'Lawn Cleanup', capturedAt: '2025-05-10T13:46:39' },
  { id: 'IMG_0474.mp4', kind: 'video', src: '/media/IMG_0474.mp4', title: 'Weeding & Mulching', serviceGroup: 'Weeding & Mulching', capturedAt: '2025-06-06T15:41:24' },
  { id: 'IMG_0587.mp4', kind: 'video', src: '/media/IMG_0587.mp4', title: 'Mulching and hedge trimming', serviceGroup: 'Mulching & Hedge Trimming', capturedAt: '2025-06-17T17:09:50' },
  { id: 'IMG_1028.JPG', kind: 'image', src: '/media/IMG_1028.JPG', title: 'Powerwashing', serviceGroup: 'Powerwashing', capturedAt: '2025-07-11T14:20:39' },
  { id: 'IMG_1057.mp4', kind: 'video', src: '/media/IMG_1057.mp4', title: 'Before Weeding and Mulching', serviceGroup: 'Weeding & Mulching', capturedAt: '2025-07-13T11:28:27' },
  { id: 'IMG_1058.mp4', kind: 'video', src: '/media/IMG_1058.mp4', title: 'After Weeding', serviceGroup: 'Weeding & Mulching', capturedAt: '2025-07-13T14:54:39' },
  { id: 'IMG_1071.mp4', kind: 'video', src: '/media/IMG_1071.mp4', title: 'After weeding and mulching', serviceGroup: 'Weeding & Mulching', capturedAt: '2025-07-18T17:29:21' },
  { id: 'IMG_1099.mp4', kind: 'video', src: '/media/IMG_1099.mp4', title: 'Mulching', serviceGroup: 'Mulching', capturedAt: '2025-07-21T15:05:54' },
  { id: 'IMG_1100.mp4', kind: 'video', src: '/media/IMG_1100.mp4', title: 'Mulching', serviceGroup: 'Mulching', capturedAt: '2025-07-21T15:06:15' },
  { id: 'IMG_1104.mp4', kind: 'video', src: '/media/IMG_1104.mp4', title: 'Hedge trimming', serviceGroup: 'Mulching & Hedge Trimming', capturedAt: '2025-07-22T13:29:20' },
  { id: 'IMG_2929.JPG', kind: 'image', src: '/media/IMG_2929.JPG', title: 'Dead plant', serviceGroup: 'Dead Plant Removal', capturedAt: '2026-04-14T09:56:49' },
  { id: 'IMG_2930.JPG', kind: 'image', src: '/media/IMG_2930.JPG', title: 'Dead plant removal', serviceGroup: 'Dead Plant Removal', capturedAt: '2026-04-14T10:03:23' },
  { id: 'IMG_3078.JPG', kind: 'image', src: '/media/IMG_3078.JPG', title: 'Unplanted Peonies', serviceGroup: 'Flower Bed Installation and Maintenance', capturedAt: '2026-04-28T11:08:49' },
  { id: 'IMG_3082.mp4', kind: 'video', src: '/media/IMG_3082.mp4', title: 'Planted Peonies', serviceGroup: 'Flower Bed Installation and Maintenance', capturedAt: '2026-04-28T12:22:07' },
  { id: 'IMG_3090.JPG', kind: 'image', src: '/media/IMG_3090.JPG', title: 'Plant Transplant', serviceGroup: 'Plant Transplant and Brush Removal', capturedAt: '2026-05-01T11:23:10' },
  { id: 'IMG_3091.JPG', kind: 'image', src: '/media/IMG_3091.JPG', title: 'Before Brush removal and plant installation', serviceGroup: 'Plant Transplant and Brush Removal', capturedAt: '2026-05-01T11:26:28' },
  { id: 'IMG_3093.JPG', kind: 'image', src: '/media/IMG_3093.JPG', title: 'after removing brush', serviceGroup: 'Plant Transplant and Brush Removal', capturedAt: '2026-05-01T12:08:24' },
  { id: 'IMG_3094.JPG', kind: 'image', src: '/media/IMG_3094.JPG', title: 'Umbrella Pre-Buildout', serviceGroup: 'Plant Transplant and Brush Removal', capturedAt: '2026-05-01T12:48:09' },
  { id: 'IMG_3103.mp4', kind: 'video', src: '/media/IMG_3103.mp4', title: 'Planting in potters, plant maintenance, and Umbrella built out', serviceGroup: 'Plant Maintenance and Umbrella Buildout', capturedAt: '2026-05-01T15:19:43' },
  { id: 'IMG_3108.JPG', kind: 'image', src: '/media/IMG_3108.JPG', title: 'tree removal, hedge trimming, lawn cleanup', serviceGroup: 'Tree Removal and Hedge Trimming', capturedAt: '2026-05-02T09:33:46' },
  { id: 'IMG_3111.mp4', kind: 'video', src: '/media/IMG_3111.mp4', title: 'After tree removal, planting, hedge trimming, and weeding', serviceGroup: 'Tree Removal and Hedge Trimming', capturedAt: '2026-05-02T13:47:09' },
  { id: 'IMG_3137.mp4', kind: 'video', src: '/media/IMG_3137.mp4', title: 'Flower Bed Buildout and Maintenance', serviceGroup: 'Flower Bed Installation and Maintenance', capturedAt: '2026-05-05T11:13:38' },
  { id: 'IMG_3168.JPG', kind: 'image', src: '/media/IMG_3168.JPG', title: 'Final Result after plant installation and brush removal, organized planting materials for client', serviceGroup: 'Plant Transplant and Brush Removal', capturedAt: '2026-05-09T11:27:07' },
  { id: 'IMG_3234.mp4', kind: 'video', src: '/media/IMG_3234.mp4', title: 'Before Pool Cleanup', serviceGroup: 'Pool Cleanup', capturedAt: '2026-05-16T14:23:02' },
  { id: 'IMG_3235.mp4', kind: 'video', src: '/media/IMG_3235.mp4', title: 'After Pool cleanup', serviceGroup: 'Pool Cleanup', capturedAt: '2026-05-16T18:33:50' },
  { id: 'Fencing.jpeg', kind: 'image', src: '/media/Fencing.jpeg', title: 'Fencing', serviceGroup: 'Fencing', capturedAt: '2026-05-20T10:00:00' },
  { id: 'Fencing2.jpeg', kind: 'image', src: '/media/Fencing2.jpeg', title: 'Fencing 2', serviceGroup: 'Fencing', capturedAt: '2026-05-20T10:05:00' },
  { id: 'Fencing3.jpeg', kind: 'image', src: '/media/Fencing3.jpeg', title: 'Fencing 3', serviceGroup: 'Fencing', capturedAt: '2026-05-20T10:10:00' },
  { id: 'AboutUs1.JPG', kind: 'image', src: '/media/AboutUs1.JPG', title: 'About Us 1', serviceGroup: 'About The LawnFather', capturedAt: '2026-05-20T11:00:00' },
  { id: 'AboutUs2.WEBP', kind: 'image', src: '/media/AboutUs2.WEBP', title: 'About Us 2', serviceGroup: 'About The LawnFather', capturedAt: '2026-05-20T11:05:00' },
  { id: 'AboutUs4.JPG', kind: 'image', src: '/media/AboutUs4.JPG', title: 'About Us 4', serviceGroup: 'About The LawnFather', capturedAt: '2026-05-20T11:10:00' },
  { id: 'AboutUs5.JPG', kind: 'image', src: '/media/AboutUs5.JPG', title: 'About Us 5', serviceGroup: 'About The LawnFather', capturedAt: '2026-05-20T11:15:00' },
  { id: 'Mowing.MP4', kind: 'video', src: '/media/Mowing.MP4', title: 'Mowing', serviceGroup: 'Mowing', capturedAt: '2026-05-20T12:00:00' },
  { id: 'Mow1.jpeg', kind: 'image', src: '/media/Mow1.jpeg', title: 'Mowing 1', serviceGroup: 'Mowing', capturedAt: '2026-05-31T10:00:00' },
  { id: 'MowJob1.JPG', kind: 'image', src: '/media/MowJob1.JPG', title: 'Mowing job 1', serviceGroup: 'Mowing', capturedAt: '2026-06-01T10:00:00' },
  { id: 'MowJob2.JPG', kind: 'image', src: '/media/MowJob2.JPG', title: 'Mowing job 2', serviceGroup: 'Mowing', capturedAt: '2026-06-01T10:05:00' },
  { id: 'MowJob3.JPG', kind: 'image', src: '/media/MowJob3.JPG', title: 'Mowing job 3', serviceGroup: 'Mowing', capturedAt: '2026-06-01T10:10:00' },
  { id: 'BrushRemoval.Weeding.Trimming.mp4', kind: 'video', src: '/media/BrushRemoval.Weeding.Trimming.mp4', title: 'Brush Removal, Weeding, and Trimming', serviceGroup: 'Brush Removal, Weeding & Trimming', capturedAt: '2026-05-20T12:30:00' },
  { id: 'BushTrim.jpeg', kind: 'image', src: '/media/BushTrim.jpeg', title: 'Bush Trim', serviceGroup: 'Bush Trimming', capturedAt: '2026-05-20T12:40:00' },
  { id: 'BushTrim1.jpeg', kind: 'image', src: '/media/BushTrim1.jpeg', title: 'Bush Trim 1', serviceGroup: 'Bush Trimming', capturedAt: '2026-05-20T12:45:00' },
  { id: 'BushTrim2.jpeg', kind: 'image', src: '/media/BushTrim2.jpeg', title: 'Bush Trim 2', serviceGroup: 'Bush Trimming', capturedAt: '2026-05-20T12:50:00' },
  { id: 'BushTrimming.jpeg', kind: 'image', src: '/media/BushTrimming.jpeg', title: 'Bush Trimming', serviceGroup: 'Bush Trimming', capturedAt: '2026-05-20T13:00:00' },
  { id: 'BushTrimming1.mp4', kind: 'video', src: '/media/BushTrimming1.mp4', title: 'Bush Trimming 1', serviceGroup: 'Bush Trimming', capturedAt: '2026-05-20T13:05:00' },
  { id: 'MainMulchingVideo.mp4', kind: 'video', src: '/media/MainMulchingVideo.mp4', title: 'Main Mulching Video', serviceGroup: 'Mulching', capturedAt: '2026-05-20T13:30:00' },
  { id: 'Mulching3.mp4', kind: 'video', src: '/media/Mulching3.mp4', title: 'Mulching 3', serviceGroup: 'Mulching', capturedAt: '2026-05-20T13:45:00' },
  { id: 'PineNeedle.BushTrim.jpeg', kind: 'image', src: '/media/PineNeedle.BushTrim.jpeg', title: 'Pine Needle Bush Trim', serviceGroup: 'Bush Trimming', capturedAt: '2026-05-20T13:50:00' },
  { id: 'Planting.Weeding.jpeg', kind: 'image', src: '/media/Planting.Weeding.jpeg', title: 'Planting and Weeding', serviceGroup: 'Planting', capturedAt: '2026-05-20T14:15:00' },
  { id: 'Planting2.jpeg', kind: 'image', src: '/media/Planting2.jpeg', title: 'Planting 2', serviceGroup: 'Planting', capturedAt: '2026-05-20T14:20:00' },
  { id: 'Planting.jpeg', kind: 'image', src: '/media/Planting.jpeg', title: 'Planting', serviceGroup: 'Planting', capturedAt: '2026-05-20T14:25:00' },
  { id: 'GardneringAeration1.jpeg', kind: 'image', src: '/media/GardneringAeration1.jpeg', title: 'Gardening Aeration', serviceGroup: 'Gardening & Aeration', capturedAt: '2026-05-20T14:30:00' },
  { id: 'Weedwacking.jpeg', kind: 'image', src: '/media/Weedwacking.jpeg', title: 'Weedwacking', serviceGroup: 'Weedwacking', capturedAt: '2026-05-20T14:45:00' },
  { id: 'Weedwacking.BushTrimming1.jpeg', kind: 'image', src: '/media/Weedwacking.BushTrimming1.jpeg', title: 'Weedwacking and Bush Trimming', serviceGroup: 'Weedwacking', capturedAt: '2026-05-20T14:50:00' },
  { id: 'MowWeedWackJob1.JPG', kind: 'image', src: '/media/MowWeedWackJob1.JPG', title: 'Mowing and Weedwacking job 1', serviceGroup: 'Weedwacking', capturedAt: '2026-06-01T10:15:00' },
  { id: 'MowWeedWackJob2.JPG', kind: 'image', src: '/media/MowWeedWackJob2.JPG', title: 'Mowing and Weedwacking job 2', serviceGroup: 'Weedwacking', capturedAt: '2026-06-01T10:20:00' },
  { id: 'Weeding1.jpeg', kind: 'image', src: '/media/Weeding1.jpeg', title: 'Weeding 1', serviceGroup: 'Weeding', capturedAt: '2026-05-20T15:15:00' },
  { id: 'Weeding2.jpeg', kind: 'image', src: '/media/Weeding2.jpeg', title: 'Weeding 2', serviceGroup: 'Weeding', capturedAt: '2026-05-20T15:20:00' },
  { id: 'HandyManJobMoving.jpeg', kind: 'image', src: '/media/HandyManJobMoving.jpeg', title: 'Handyman Moving Job', serviceGroup: 'Small Handyman Work', capturedAt: '2026-05-25T13:42:00' },
  { id: 'HandyManJobMoving1.jpeg', kind: 'image', src: '/media/HandyManJobMoving1.jpeg', title: 'Handyman Moving Job 1', serviceGroup: 'Small Handyman Work', capturedAt: '2026-05-25T13:47:00' },
  { id: 'MulchJob1.JPG', kind: 'image', src: '/media/MulchJob1.JPG', title: 'Mulching job 1', serviceGroup: 'Mulching', capturedAt: '2026-06-01T10:25:00' },
  { id: 'MulchJob2.JPG', kind: 'image', src: '/media/MulchJob2.JPG', title: 'Mulching job 2', serviceGroup: 'Mulching', capturedAt: '2026-06-01T10:30:00' },
  { id: 'MulchJob3.JPG', kind: 'image', src: '/media/MulchJob3.JPG', title: 'Mulching job 3', serviceGroup: 'Mulching', capturedAt: '2026-06-01T10:35:00' },
  { id: 'MulchJob4.JPG', kind: 'image', src: '/media/MulchJob4.JPG', title: 'Mulching job 4', serviceGroup: 'Mulching', capturedAt: '2026-06-01T10:40:00' },
  { id: 'MulchJob5.JPG', kind: 'image', src: '/media/MulchJob5.JPG', title: 'Mulching job 5', serviceGroup: 'Mulching', capturedAt: '2026-06-01T10:45:00' },
  { id: 'MulchJob6.JPG', kind: 'image', src: '/media/MulchJob6.JPG', title: 'Mulching job 6', serviceGroup: 'Mulching', capturedAt: '2026-06-01T10:50:00' },
  { id: 'MulchJob7.JPG', kind: 'image', src: '/media/MulchJob7.JPG', title: 'Mulching job 7', serviceGroup: 'Mulching', capturedAt: '2026-06-01T10:55:00' },
  { id: 'MulchJob8.JPG', kind: 'image', src: '/media/MulchJob8.JPG', title: 'Mulching job 8', serviceGroup: 'Mulching', capturedAt: '2026-06-01T11:00:00' },
  { id: 'MulchJob9.JPG', kind: 'image', src: '/media/MulchJob9.JPG', title: 'Mulching job 9', serviceGroup: 'Mulching', capturedAt: '2026-06-01T11:05:00' },
  { id: 'MulchJob10.JPG', kind: 'image', src: '/media/MulchJob10.JPG', title: 'Mulching job 10', serviceGroup: 'Mulching', capturedAt: '2026-06-01T11:10:00' },
  { id: 'PoolCleanup.BushTrim.FurniturePowerwash.mp4', kind: 'video', src: '/media/PoolCleanup.BushTrim.FurniturePowerwash.mp4', title: 'Pool Cleanup, Bush Trim, and Furniture Powerwash', serviceGroup: 'Powerwashing', capturedAt: '2026-05-20T15:30:00' },
  ...PREPARED_MEDIA_ITEMS
];

export const MEDIA_SECTIONS: MediaSection[] = [
  {
    key: 'lawn-cleanup',
    title: 'Lawn Cleanup',
    description: 'The lawn cleanup work shown before and after in the order it was captured.',
    itemIds: ['IMG_8368.JPG']
  },
  {
    key: 'fencing',
    title: 'Fencing',
    description: 'Fence work captured in a clean, title-based sequence.',
    itemIds: ['Fencing.jpeg', 'Fencing2.jpeg', 'Fencing3.jpeg']
  },
  {
    key: 'mowing',
    title: 'Mowing',
    description: 'Mowing footage shown with the same layout as the rest of the gallery.',
    itemIds: ['Mowing.MP4', 'Mow1.jpeg', 'MowJob1.JPG', 'MowJob2.JPG', 'MowJob3.JPG']
  },
  {
    key: 'weeding-mulching',
    title: 'Weeding & Mulching',
    description: 'Weeding and mulching clips arranged so the before and after states sit together.',
    itemIds: ['IMG_0474.mp4', 'IMG_1057.mp4', 'IMG_1058.mp4', 'IMG_1071.mp4']
  },
  {
    key: 'brush-removal-weeding-trimming',
    title: 'Brush Removal, Weeding & Trimming',
    description: 'Brush removal and trimming work grouped from the new title-based upload.',
    itemIds: ['BrushRemoval.Weeding.Trimming.mp4']
  },
  {
    key: 'weedwacking',
    title: 'Weedwacking',
    description: 'Weedwacking and combined trimming images organized under one category.',
    itemIds: ['Weedwacking.jpeg', 'Weedwacking.BushTrimming1.jpeg', 'MowWeedWackJob1.JPG', 'MowWeedWackJob2.JPG']
  },
  {
    key: 'weeding',
    title: 'Weeding',
    description: 'Weeding photos kept in a uniform card layout.',
    itemIds: ['Weeding1.jpeg', 'Weeding2.jpeg']
  },
  {
    key: 'bush-trimming',
    title: 'Bush Trimming',
    description: 'Bush trimming photos and clips grouped together.',
    itemIds: ['BushTrim.jpeg', 'BushTrim1.jpeg', 'BushTrim2.jpeg', 'BushTrimming.jpeg', 'BushTrimming1.mp4', 'PineNeedle.BushTrim.jpeg']
  },
  {
    key: 'mulching-hedge-trimming',
    title: 'Mulching & Hedge Trimming',
    description: 'Mulching and hedge-trimming work grouped together for easy side-by-side comparison.',
    itemIds: ['IMG_0587.mp4', 'IMG_1104.mp4']
  },
  {
    key: 'mulching-videos',
    title: 'Mulching',
    description: 'Fresh mulch installs and mulching videos grouped by title.',
    itemIds: ['MainMulchingVideo.mp4', 'Mulching3.mp4', 'IMG_1099.mp4', 'IMG_1100.mp4', 'MulchJob1.JPG', 'MulchJob2.JPG', 'MulchJob3.JPG', 'MulchJob4.JPG', 'MulchJob5.JPG', 'MulchJob6.JPG', 'MulchJob7.JPG', 'MulchJob8.JPG', 'MulchJob9.JPG', 'MulchJob10.JPG']
  },
  {
    key: 'gardening-aeration',
    title: 'Gardening & Aeration',
    description: 'Gardening and aeration work organized as a single gallery category.',
    itemIds: ['GardneringAeration1.jpeg']
  },
  {
    key: 'powerwashing',
    title: 'Powerwashing',
    description: 'A quick showcase of the powerwashing result.',
    itemIds: ['IMG_1028.JPG', 'PoolCleanup.BushTrim.FurniturePowerwash.mp4']
  },
  {
    key: 'small-handyman-work',
    title: 'Small Handyman Work',
    description: 'Handyman moving and small repair photos grouped together.',
    itemIds: ['HandyManJobMoving.jpeg', 'HandyManJobMoving1.jpeg']
  },
  {
    key: 'dead-plant-removal',
    title: 'Dead Plant Removal',
    description: 'Before and after images of dead plant removal and clearing.',
    itemIds: ['IMG_2929.JPG', 'IMG_2930.JPG']
  },
  {
    key: 'plant-transplant-brush-removal',
    title: 'Plant Transplant and Brush Removal',
    description: 'Brush removal, transplant prep, and the final organized planting material result.',
    itemIds: ['IMG_3090.JPG', 'IMG_3091.JPG', 'IMG_3093.JPG', 'IMG_3094.JPG', 'IMG_3168.JPG']
  },
  {
    key: 'planting',
    title: 'Planting',
    description: 'Planting photos gathered from the new uploads.',
    itemIds: ['Planting.Weeding.jpeg', 'Planting2.jpeg', 'Planting.jpeg']
  },
  {
    key: 'prepared-mowing',
    title: 'Mowing',
    description: 'The new prepared mowing photos and the walkthrough clip.',
    itemIds: PREPARED_MOWING_MEDIA.map((item) => item.id)
  },
  {
    key: 'prepared-trimming',
    title: 'Trimming',
    description: 'The new prepared trimming photos from the latest upload.',
    itemIds: PREPARED_TRIMMING_MEDIA.map((item) => item.id)
  },
  {
    key: 'prepared-mulching',
    title: 'Mulching',
    description: 'The new prepared mulching photos from the latest upload.',
    itemIds: PREPARED_MULCHING_MEDIA.map((item) => item.id)
  },
  {
    key: 'prepared-powerwashing',
    title: 'Powerwashing',
    description: 'The new prepared powerwashing photos from the latest upload.',
    itemIds: PREPARED_POWERWASHING_MEDIA.map((item) => item.id)
  },
  {
    key: 'prepared-planting',
    title: 'Planting',
    description: 'The new prepared planting photos from the latest upload.',
    itemIds: PREPARED_PLANTING_MEDIA.map((item) => item.id)
  },
  {
    key: 'flower-bed-installation',
    title: 'Flower Bed Installation and Maintenance',
    description: 'Flower-bed buildout and peony work shown as a before and after sequence.',
    itemIds: ['IMG_3078.JPG', 'IMG_3082.mp4', 'IMG_3137.mp4']
  },
  {
    key: 'tree-removal-hedge-trimming',
    title: 'Tree Removal and Hedge Trimming',
    description: 'Tree removal, hedge trimming, lawn cleanup, and the finished pass together.',
    itemIds: ['IMG_3108.JPG', 'IMG_3111.mp4']
  },
  {
    key: 'plant-maintenance-umbrella-buildout',
    title: 'Plant Maintenance and Umbrella Buildout',
    description: 'The finish clip for potting, plant maintenance, and umbrella buildout.',
    itemIds: ['IMG_3103.mp4']
  },
  {
    key: 'pool-cleanup',
    title: 'Pool Cleanup',
    description: 'Before and after pool cleanup clips placed side by side.',
    itemIds: ['IMG_3234.mp4', 'IMG_3235.mp4']
  }
];

export function getMediaItem(id: string) {
  return MEDIA_ITEMS.find((item) => item.id === id);
}

export function getMediaItems(ids: string[]) {
  return ids.map((id) => getMediaItem(id)).filter((item): item is MediaItem => Boolean(item));
}

export function getAboutUsMediaItems() {
  return getMediaItems(ABOUT_US_MEDIA_IDS);
}

export function getMediaItemsByServiceGroup(serviceGroup: string) {
  return MEDIA_ITEMS.filter((item) => item.serviceGroup === serviceGroup).sort((left, right) => {
    return new Date(left.capturedAt).getTime() - new Date(right.capturedAt).getTime();
  });
}

export function getLatestMediaItems(limit: number) {
  return [...MEDIA_ITEMS]
    .sort((left, right) => new Date(right.capturedAt).getTime() - new Date(left.capturedAt).getTime())
    .slice(0, limit);
}

export function getLatestImageItems(limit: number) {
  return MEDIA_ITEMS.filter((item) => item.kind === 'image')
    .sort((left, right) => new Date(right.capturedAt).getTime() - new Date(left.capturedAt).getTime())
    .slice(0, limit);
}
