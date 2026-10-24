import { createFromSource } from "fumadocs-core/search/server";
import { source } from "@/app/source";

// Static export: no server /api/search runtime. We emit a prebuilt Orama index
// as a static JSON file (/static.json) that the client searches in-browser.
export const revalidate = false;

// Why the custom id: the advanced indexer keys the page document by `page.id`
// and every heading of that page by `${page.id}-<n>`. With the default
// `page.id = page.url`, a page named like a numbered sibling collides: the 3rd
// heading of /docs/aws/aws (→ "/docs/aws/aws-2") lands on the SAME id as the
// page /docs/aws/aws-2, so Orama aborts the whole export with
// DOCUMENT_ALREADY_EXISTS. We make each page id end with a NUL byte plus a
// per-page counter, which no `${url}-<n>` heading id can ever reproduce, so the
// id space is collision-proof while URLs stay untouched.
let seq = 0;
const counters = new Map<string, number>();

export const { staticGET: GET } = createFromSource(source, {
  language: "english",
  async buildIndex(page) {
    const data = page.data as {
      title?: string;
      description?: string;
      structuredData?: unknown;
      load?: () => Promise<{ structuredData: unknown }>;
    };
    const structuredData =
      data.structuredData ?? (data.load ? (await data.load()).structuredData : undefined);
    if (!structuredData) {
      throw new Error(`Cannot find structured data for ${page.url}`);
    }
    // Stable per-URL counter so rebuilds are deterministic.
    let n = counters.get(page.url);
    if (n === undefined) {
      n = seq++;
      counters.set(page.url, n);
    }
    return {
      title: data.title ?? page.url,
      description: data.description,
      url: page.url,
      id: `${page.url}\u0000${n}`,
      structuredData: structuredData as never,
    };
  },
});
