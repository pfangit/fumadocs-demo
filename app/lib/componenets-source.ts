import { components } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";

export const componenetsSource = loader({
  source: components.toFumadocsSource(),
  baseUrl: "/apis",
});
