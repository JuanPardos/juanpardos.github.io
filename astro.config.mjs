import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://juanpardos.github.io",
  image: {
    domains: ["s4.anilist.co"],
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    "/": "/es",
  },
});
