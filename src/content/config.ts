import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";


export const ubicacionCollection = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "src/content/ubications",
  }),

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


export const collections = {
    ubicaciones: ubicacionCollection,
}