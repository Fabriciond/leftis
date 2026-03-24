import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Vercel / dominio propio: raíz del sitio → base "/"
// GitHub Pages (repo en subruta): exportar ASTRO_BASE=/leftis en el workflow
const base = process.env.ASTRO_BASE?.trim() || "/";

export default defineConfig({
  site:
    process.env.VERCEL && process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://fabriciond.github.io",
  base,
  integrations: [tailwind()],
});
