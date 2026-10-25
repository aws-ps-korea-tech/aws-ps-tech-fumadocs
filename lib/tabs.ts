// Category tabs. Navigation grouping only: URLs of the books are unchanged.
export const TABS: { id: string; title: string; url: string; books: string[] }[] = [
  {
    "id": "t0",
    "title": "시작하기·계정",
    "url": "/docs/aws",
    "books": [
      "aws",
      "s3"
    ]
  },
  {
    "id": "t1",
    "title": "유전체·오믹스",
    "url": "/docs/omics-on-aws",
    "books": [
      "omics-on-aws",
      "genome-data-delivery-portal-on-aws"
    ]
  },
  {
    "id": "t2",
    "title": "HPC·배치·BLAST",
    "url": "/docs/aws-batch",
    "books": [
      "aws-batch",
      "ncbi-blast-on-aws",
      "aws-blast-performance-testing"
    ]
  },
  {
    "id": "t3",
    "title": "AI·ML",
    "url": "/docs/ai-agent-memory-on-aws",
    "books": [
      "amazon-bio-discovery-ai",
      "ai-agent-memory-on-aws",
      "decision-models-on-aws"
    ]
  },
  {
    "id": "t4",
    "title": "규제·거버넌스",
    "url": "/docs/gxp-on-aws",
    "books": [
      "gxp-on-aws"
    ]
  }
];

// Empty / draft books: built and reachable by URL, shown under a tab but not listed in its sidebar.
export const UNLISTED: Record<string, string> = {
  "egovframework-on-aws": "t0",
  "data-transfer": "t0",
  "fsx-for-lustre": "t0",
  "draft-gbrain": "t3"
};

export function tabForBook(book?: string) {
  if (!book) return undefined;
  return (
    TABS.find((t) => t.books.includes(book)) ??
    TABS.find((t) => t.id === UNLISTED[book])
  );
}
