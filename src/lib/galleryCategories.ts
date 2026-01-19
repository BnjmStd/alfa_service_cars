export const GALLERY_CATEGORIES = [
  "grabado",
  "motor",
  "polarizado",
  "pulido",
  "restauracion",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];
