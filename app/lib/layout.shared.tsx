import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "UI & API",
    },
    links: [
      {
        text: "Components",
        url: "/components",
      },
      {
        text: "APIS",
        url: "/apis",
      },
    ],
  };
}
