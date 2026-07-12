import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">AWS PS Tech</h1>
      <p className="text-lg text-fd-muted-foreground mb-8">
        AWS Public Sector 기술 문서 모음
      </p>
      <Link
        href="/docs"
        className="rounded-lg bg-fd-primary px-6 py-3 text-fd-primary-foreground font-medium"
      >
        문서 보기
      </Link>
    </main>
  );
}
