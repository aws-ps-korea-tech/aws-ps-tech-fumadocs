import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import type * as PageTree from "fumadocs-core/page-tree";
import { source } from "@/app/source";
import { TABS, tabForBook } from "@/lib/tabs";

// First URL segment after /docs for a tree node (folder index, or its first page).
function bookOf(node: PageTree.Node): string | undefined {
  const url = (n: PageTree.Node): string | undefined => {
    if (n.type === "page") return n.url;
    if (n.type === "folder") return n.index?.url ?? n.children.map(url).find(Boolean);
    return undefined;
  };
  return url(node)?.split("/")[2];
}

function urlsOf(nodes: PageTree.Node[], out: Set<string>) {
  for (const n of nodes) {
    if (n.type === "page") out.add(n.url);
    else if (n.type === "folder") {
      if (n.index) out.add(n.index.url);
      urlsOf(n.children, out);
    }
  }
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const tab = tabForBook(slug?.[0]);
  const root = source.pageTree;

  // The sidebar only lists the books of the current category tab.
  const tree: PageTree.Root = {
    ...root,
    children: tab
      ? root.children
          .filter((n) => tab.books.includes(bookOf(n) ?? ""))
          .sort((a, b) => tab.books.indexOf(bookOf(a) ?? "") - tab.books.indexOf(bookOf(b) ?? ""))
      : root.children,
  };

  // Tab -> every URL it owns (including unlisted books), so the active tab is detected on any page.
  const tabs = TABS.map((t) => {
    const urls = new Set<string>();
    for (const n of root.children) {
      const b = bookOf(n) ?? "";
      if (t.books.includes(b) || tabForBook(b)?.id === t.id) urlsOf([n], urls);
    }
    return { title: t.title, url: t.url, urls };
  });

  return (
    <DocsLayout tree={tree} tabs={tabs} nav={{ title: "AWS PS Tech" }}>
      {children}
    </DocsLayout>
  );
}
