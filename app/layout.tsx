import "fumadocs-ui/style.css";
import "./brand.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://aws-ps-tech-fumadocs.vercel.app"),
  title: {
    template: "%s | AWS Korea Public Sector SA Team",
    default: "AWS Korea Public Sector SA Team",
  },
  description: "AWS Korea Public Sector SA Team 기술 문서 모음",
};

// Static export has no /api/search server route, so the search dialog loads the
// prebuilt index emitted by app/static.json/route.ts. The URL must carry the
// same basePath the site is served under (root on Vercel, /aws-ps-tech-fumadocs
// on GitHub Pages).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <div className="ps-disclaimer" role="note">
          ⚠️ 이 사이트의 게시물은 최신 정보를 반영하지 않을 수 있으며, <strong>AWS 공식 콘텐츠가 아닙니다.</strong>{" "}
          최신 정보는{" "}
          <a href="https://docs.aws.amazon.com" target="_blank" rel="noopener">AWS 공식 문서</a>를 참고하세요.
        </div>
        <RootProvider
          search={{
            options: {
              type: "static",
              api: `${BASE}/static.json`,
            },
          }}
        >
          {children}
        </RootProvider>
        <footer className="ps-site-footer">
          <a href="https://aws.amazon.com/ko/privacy/" target="_blank" rel="noopener">Privacy Policy</a>
        </footer>
      </body>
    </html>
  );
}
