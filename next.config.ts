import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

// basePath is platform-dependent:
//   GitHub Pages serves under /fumadocs -> set NEXT_PUBLIC_BASE_PATH=/fumadocs (CI)
//   Vercel / Cloudflare Pages / Netlify serve at root -> leave it unset
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withMDX = createMDX();
export default withMDX(nextConfig);
