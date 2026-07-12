import "fumadocs-ui/style.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | AWS PS Tech",
    default: "AWS PS Tech",
  },
  description: "AWS Public Sector 기술 문서 모음",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
