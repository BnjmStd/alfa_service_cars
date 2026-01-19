// src/lib/galleryFilters.ts
import type { GalleryCategory } from "./galleryCategories";
import { GALLERY_CATEGORIES } from "./galleryCategories";

export type GalleryFilter = {
  label: string;
  value: GalleryCategory | "all";
};

const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  grabado: "Grabado de Patentes",
  motor: "Lavado de Motor",
  polarizado: "Polarizado",
  pulido: "Pulido & Detailing",
  restauracion: "Reparación & Restauración",
};

export const galleryFilters: GalleryFilter[] = [
  { label: "Todos", value: "all" },
  ...GALLERY_CATEGORIES.map((cat) => ({
    value: cat,
    label: CATEGORY_LABELS[cat],
  })),
];
