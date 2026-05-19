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
  { id: 'IMG_3235.mp4', kind: 'video', src: '/media/IMG_3235.mp4', title: 'After Pool cleanup', serviceGroup: 'Pool Cleanup', capturedAt: '2026-05-16T18:33:50' }
];

export const MEDIA_SECTIONS: MediaSection[] = [
  {
    key: 'lawn-cleanup',
    title: 'Lawn Cleanup',
    description: 'The lawn cleanup work shown before and after in the order it was captured.',
    itemIds: ['IMG_8368.JPG']
  },
  {
    key: 'weeding-mulching',
    title: 'Weeding & Mulching',
    description: 'Weeding and mulching clips arranged so the before and after states sit together.',
    itemIds: ['IMG_0474.mp4', 'IMG_1057.mp4', 'IMG_1058.mp4', 'IMG_1071.mp4']
  },
  {
    key: 'mulching-hedge-trimming',
    title: 'Mulching & Hedge Trimming',
    description: 'Mulching and hedge-trimming work grouped together for easy side-by-side comparison.',
    itemIds: ['IMG_0587.mp4', 'IMG_1104.mp4']
  },
  {
    key: 'powerwashing',
    title: 'Powerwashing',
    description: 'A quick showcase of the powerwashing result.',
    itemIds: ['IMG_1028.JPG']
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
    key: 'mulching',
    title: 'Mulching',
    description: 'Mulching clips that capture the work in a tight timeline.',
    itemIds: ['IMG_1099.mp4', 'IMG_1100.mp4']
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
