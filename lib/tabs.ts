// Category tabs. Navigation grouping only: URLs of the books are unchanged.
export const TABS: { id: string; title: string; url: string; books: string[] }[] = [
  {
    "id": "t0",
    "title": "시작하기",
    "url": "/docs/aws",
    "books": [
      "aws",
      "s3",
      "data-transfer",
      "fsx-for-lustre",
      "gxp-on-aws"
    ]
  },
  {
    "id": "t1",
    "title": "오믹스·유전체",
    "url": "/docs/omics-on-aws",
    "books": [
      "omics-on-aws",
      "genome-data-delivery-portal-on-aws",
      "amazon-bio-discovery-ai"
    ]
  },
  {
    "id": "t2",
    "title": "배치·BLAST",
    "url": "/docs/aws-batch",
    "books": [
      "aws-batch",
      "ncbi-blast-on-aws",
      "aws-blast-performance-testing"
    ]
  },
  {
    "id": "t3",
    "title": "AI·의사결정",
    "url": "/docs/ai-agent-memory-on-aws",
    "books": [
      "ai-agent-memory-on-aws",
      "decision-models-on-aws"
    ]
  }
];

// Empty / draft books: built and reachable by URL, shown under a tab but not listed in its sidebar.
export const UNLISTED: Record<string, string> = {
  "egovframework-on-aws": "t0",
  "draft-gbrain": "t3"
};

export function tabForBook(book?: string) {
  if (!book) return undefined;
  return (
    TABS.find((t) => t.books.includes(book)) ??
    TABS.find((t) => t.id === UNLISTED[book])
  );
}
