// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_CONFIG } from "./src/lib/siteConfig.ts";

// https://astro.build/config
export default defineConfig({
  site: SITE_CONFIG.url,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
