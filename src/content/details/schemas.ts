import { z } from "astro:content";

export const heroVideoSchema = z.object({
  id: z.string(),
  type: z.literal("hero-video"),
  videoSrc: z.string().url(),
  subtitle: z.string().optional(),
  title: z.string(),
  description: z.string(),
  cta: z.object({
    text: z.string(),
    href: z.string(),
  }),
});

export const featureListSchema = z.object({
  id: z.string(),
  type: z.literal("feature-list"),
  subtitle: z.string().optional(),
  title: z.string(),
  description: z.string().optional(),
  features: z.array(
    z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })
  ),
});

export const faqListSchema = z.object({
  id: z.string(),
  type: z.literal("faq-list"),
  subtitle: z.string().optional(),
  title: z.string(),
  description: z.string().optional(),
  faqs: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    })
  ),
});

export const ctaBlockSchema = z.object({
  id: z.string(),
  type: z.literal("cta-block"),
  subtitle: z.string().optional(),
  title: z.string(),
  button: z.object({
    text: z.string(),
    href: z.string(),
  }),
});

export const whatsappAnchorSchema = z.object({
  id: z.string(),
  type: z.literal("whatsapp-anchor"),
  serviceName: z.string(),
});