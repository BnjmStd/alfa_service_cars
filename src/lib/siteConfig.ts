/**
 * Configuración centralizada del sitio
 * Un solo lugar para mantener URLs y configuraciones globales
 */

export const SITE_CONFIG = {
  url: "https://alfadetailers.cl",
  name: "Alfa Detailers Studio",
  description: "Detailing profesional de alta gama en Chile. Especialistas en protección cerámica, pulido, restauración y más.",
  phone: "+56912345678",
  locale: "es_CL",
  themeColor: "#d90429",
} as const;

/**
 * Helper para construir URLs absolutas
 */
export function getAbsoluteUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}
