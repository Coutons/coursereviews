// Prefix internal URLs with the site base ("/" in dev, "/coursereviews/" on GitHub Pages).
const BASE: string = import.meta.env.BASE_URL;
export const u = (p: string = ""): string =>
  /^(https?:)?\/\//.test(p) || p.startsWith("data:") ? p : `${BASE}${p.replace(/^\/+/, "")}`;
