import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// GitHub Pages (repo leftis): https://fabriciond.github.io/leftis/
export default defineConfig({
  site: "https://fabriciond.github.io",
  base: "/leftis",
  integrations: [tailwind()],
});
