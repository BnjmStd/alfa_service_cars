export const GALLERY_CATEGORIES = [
  "interiores",
  "exteriores",
  "ceramico",
  "restauracion",
  "grabado",
  "polarizado",
  "motorized",
  "pulido",
  "motor",
  "lavado",
  "moto",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];
