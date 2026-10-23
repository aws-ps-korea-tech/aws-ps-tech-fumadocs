import type { MetadataRoute } from "next";
import { source } from "@/app/source";

export const dynamic = "force-static";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aws-ps-tech-fumadocs.vercel.app";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = ["/", ...source.getPages().map((p) => `${p.url}/`)];
  return urls.map((u) => ({ url: `${SITE}${BASE}${u}` }));
}
