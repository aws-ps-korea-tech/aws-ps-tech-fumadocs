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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <div className="ps-disclaimer" role="note">
          ⚠️ 이 사이트의 게시물은 최신 정보를 반영하지 않을 수 있으며, <strong>AWS 공식 콘텐츠가 아닙니다.</strong>{" "}
          최신 정보는{" "}
          <a href="https://docs.aws.amazon.com" target="_blank" rel="noopener">AWS 공식 문서</a>를 참고하세요.
        </div>
        <RootProvider>{children}</RootProvider>
        <footer className="ps-site-footer">
          <a href="https://aws.amazon.com/ko/privacy/" target="_blank" rel="noopener">Privacy Policy</a>
        </footer>
      </body>
    </html>
  );
}
