import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-8 px-4 py-16">
      <header>
        <h1 className="text-4xl font-bold mb-2">AWS PS Tech Korea 문서</h1>
        <p className="text-lg text-fd-muted-foreground">AWS Professional Services Korea 기술 문서. 분야를 고르세요.</p>
      </header>
      <div className="grid gap-8 sm:grid-cols-2">
      <section className="text-left">
        <h2 className="text-xl font-semibold mb-2">시작하기</h2>
        <ul className="space-y-1">
          <li><Link className="underline" href="/docs/aws/">대학 고객을 위한 AWS 길라잡이</Link></li>
          <li><Link className="underline" href="/docs/s3/amazon-s3/">Amazon S3</Link></li>
          <li><Link className="underline" href="/docs/data-transfer/">Data Transfer</Link></li>
          <li><Link className="underline" href="/docs/fsx-for-lustre/">FSx for Lustre</Link></li>
        </ul>
      </section>
      <section className="text-left">
        <h2 className="text-xl font-semibold mb-2">오믹스·유전체</h2>
        <ul className="space-y-1">
          <li><Link className="underline" href="/docs/omics-on-aws/">Omics on AWS</Link></li>
          <li><Link className="underline" href="/docs/genome-data-delivery-portal-on-aws/">Genome Data Delivery Portal on AWS</Link></li>
          <li><Link className="underline" href="/docs/amazon-bio-discovery-ai/">Amazon Bio Discovery로 AI 항체 설계 시작하기</Link></li>
        </ul>
      </section>
      <section className="text-left">
        <h2 className="text-xl font-semibold mb-2">배치·BLAST</h2>
        <ul className="space-y-1">
          <li><Link className="underline" href="/docs/aws-batch/">AWS Batch</Link></li>
          <li><Link className="underline" href="/docs/ncbi-blast-on-aws/">NCBI BLAST on AWS</Link></li>
          <li><Link className="underline" href="/docs/aws-blast-performance-testing/">AWS BLAST Performance Testing</Link></li>
        </ul>
      </section>
      <section className="text-left">
        <h2 className="text-xl font-semibold mb-2">AI·의사결정</h2>
        <ul className="space-y-1">
          <li><Link className="underline" href="/docs/ai-agent-memory-on-aws/">AI Agent Memory on AWS</Link></li>
          <li><Link className="underline" href="/docs/decision-models-on-aws/">Decision Models on AWS</Link></li>
        </ul>
      </section>
      </div>
    </main>
  );
}
