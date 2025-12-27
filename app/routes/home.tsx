import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Link } from "react-router";
import { baseOptions } from "@/lib/layout.shared";
import type { Route } from "./+types/home";

// SEO 信息
export function meta({}: Route.MetaArgs) {
  return [
    { title: "UI & APIS" },
    { name: "description", content: "Welcome to Fumadocs !" },
  ];
}

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="p-4 flex flex-col items-center justify-center text-center flex-1">
        <h1 className="text-xl font-bold mb-2">Fumadocs on React Router.</h1>
        <p className="text-fd-muted-foreground mb-4">
          The truly flexible docs framework on React.js.
        </p>
        <Link
          className="text-sm bg-fd-primary text-fd-primary-foreground rounded-full font-medium px-4 py-2.5"
          to="/apis"
        >
          Open Docs
        </Link>
      </div>
    </HomeLayout>
  );
}
