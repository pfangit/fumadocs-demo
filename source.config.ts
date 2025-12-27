import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const components = defineDocs({
  dir: "content/components",
});

export const apis = defineDocs({
  dir: "content/apis",
});

export default defineConfig();
