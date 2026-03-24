import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Vercel / dominio propio: raíz del sitio → base "/"
// GitHub Pages (repo en subruta): exportar ASTRO_BASE=/leftis en el workflow
const base = process.env.ASTRO_BASE?.trim() || "/";

/** En `astro dev`, evita 404 al abrir /leftis sin barra (solo si usas ASTRO_BASE). */
function devRedirectBaseTrailingSlash() {
  if (base === "/") {
    return [];
  }
  const prefix = base.replace(/\/$/, "");
  return [
    {
      name: "dev-redirect-base-slash",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const path = req.url?.split("?")[0] ?? "";
          if (path === prefix) {
            res.statusCode = 302;
            res.setHeader("Location", `${prefix}/`);
            res.end();
            return;
          }
          next();
        });
      },
    },
  ];
}

export default defineConfig({
  site:
    process.env.VERCEL && process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://fabriciond.github.io",
  base,
  // Con subruta (p. ej. GitHub Pages), las URLs canónicas llevan barra final
  trailingSlash: "always",
  vite: {
    plugins: devRedirectBaseTrailingSlash(),
  },
  integrations: [tailwind()],
});
