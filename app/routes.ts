import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("apis/*", "apis/page.tsx"),
  route("components/*", "components/page.tsx"),
  route("api/search", "apis/search.ts"),
] satisfies RouteConfig;
