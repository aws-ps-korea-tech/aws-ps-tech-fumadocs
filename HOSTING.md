# Fumadocs — 호스팅 옵션별 배포 설정

Next.js(static export) 기반이라 **Vercel이 1급**, Cloudflare Pages/Netlify도 완벽 지원. GitHub Pages는 `/fumadocs` 서브패스 + meta-refresh.

| 플랫폼 | build | output | base path | 301 | 설정 |
|---|---|---|---|---|---|
| **Vercel** (권장) | `npx fumadocs-mdx && next build` | `out` | `/` | ✅ | `vercel.json` |
| **Cloudflare Pages** | `npx fumadocs-mdx && npx next build` | `out` | `/` | ✅ | 대시보드 |
| **Netlify** | (netlify.toml) | `out` | `/` | ✅ | `netlify.toml` |
| **GitHub Pages** | (자동) | `out` | `/fumadocs` | ❌ meta | workflow (NEXT_PUBLIC_BASE_PATH=/fumadocs) |

## Vercel 연결 (권장)
1. vercel.com → Add New → Project → Import `aws-ps-korea-tech/fumadocs`
2. `vercel.json`이 빌드/출력 지정. 환경변수 없음(루트 서빙).
3. Settings → Domains에서 커스텀 도메인 연결.

## Cloudflare Pages
- Connect to Git → `fumadocs`. Build: `npx fumadocs-mdx && npx next build`, Output: `out`. 환경변수 없음. `public/_redirects` 자동 301.

## Netlify
- Import from Git → `fumadocs`. `netlify.toml` 자동 인식.

## GitHub Pages
- 이미 워크플로 포함(`NEXT_PUBLIC_BASE_PATH=/fumadocs`). Settings→Pages→Source=GitHub Actions.

> CF Pages / Netlify / Vercel 는 base path가 루트라 `public/_redirects`의 108개 규칙이 **진짜 301**로 동작합니다.
