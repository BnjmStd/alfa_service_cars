import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";
import {
  ctaBlockSchema,
  faqListSchema,
  featureListSchema,
  heroVideoSchema,
  whatsappAnchorSchema,
} from "./details/schemas";

export const location = defineCollection({
  loader: file("src/content/location/location.json"),

  schema: z.object({
    id: z.string(),
    visible: z.boolean().default(true),
    badge: z.string(),
    title: z.object({
      text: z.string(),
      highlight: z.string(),
    }),
    details: z.array(
      z.object({
        icon: z.string(),
        label: z.string(),
        content: z.array(z.string()),
      })
    ),
    cta: z.object({
      text: z.string(),
      url: z.string().url(),
      target: z.string().optional(),
    }),
    map: z.object({
      embedUrl: z.string().url(),
      lazy: z.boolean().optional(),
      allowFullscreen: z.boolean().optional(),
      overlay: z.boolean().optional(),
    }),
  }),
});

export const services = defineCollection({
  loader: file("src/content/services/services.json"),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    imageSrc: z.string(),
    videoSrc: z.string().optional(),
    href: z.string(),
  }),
});

const sectionSchema = z.discriminatedUnion("type", [
  heroVideoSchema,
  featureListSchema,
  faqListSchema,
  ctaBlockSchema,
  whatsappAnchorSchema,
]);

const pageDetailsSchema = z.object({
  sections: z.array(sectionSchema),
});

export const details = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/details" }),
  schema: pageDetailsSchema,
});

export const collections = {
  location,
  services,
  details,
};
