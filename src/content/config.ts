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

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      imageSrc: image(),
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

const gallery = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      titulo: z.string(),
      description: z.string().optional(),
      foto: image(),
      categoria: z.string(),
    }),
});

export const main = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      background: z.object({
        src: image(),
        alt: z.string(),
      }),
      title: z.array(z.string()),
      subtitle: z.string(),
      cta: z.object({
        text: z.string(),
        href: z.string(),
      }),
    }),
});

export const collections = {
  location,
  services,
  details,
  gallery,
  main,
};
