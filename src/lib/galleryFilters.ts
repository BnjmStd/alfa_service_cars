// src/lib/galleryFilters.ts
import type { GalleryCategory } from "./galleryCategories";
import { GALLERY_CATEGORIES } from "./galleryCategories";

export type GalleryFilter = {
  label: string;
  value: GalleryCategory | "all";
};

const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  interiores: "Interiores",
  exteriores: "Exteriores",
  ceramico: "Cerámico",
  restauracion: "Restauración",
  grabado: "Grabado",
  polarizado: "Polarizado",
  motorized: "Motorizado",
  pulido: "Pulido",
  motor: "Motor",
};

export const galleryFilters: GalleryFilter[] = [
  { label: "Todos", value: "all" },
  ...GALLERY_CATEGORIES.map((cat) => ({
    value: cat,
    label: CATEGORY_LABELS[cat],
  })),
];
