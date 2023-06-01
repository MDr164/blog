import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import markdoc from "@astrojs/markdoc";

export default defineConfig({
  site: "https://m4rvin.xyz",
  integrations: [sitemap(), markdoc()]
});
