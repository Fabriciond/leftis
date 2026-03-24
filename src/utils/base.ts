/** Ruta pública respetando `base` de Astro (p. ej. GitHub Pages). */
export function asset(path: string): string {
  const p = path.startsWith("/") ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  return `${base}${p}`;
}
