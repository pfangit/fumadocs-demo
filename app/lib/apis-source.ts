import { apis } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";

export const apisSource = loader({
  source: apis.toFumadocsSource(),
  baseUrl: "/apis",
});
