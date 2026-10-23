#!/usr/bin/env python3
"""Generate vercel.json redirects from public/_redirects.

Vercel emits redirect destinations with LOWERCASE percent-encoding for non-ASCII
paths, but static files are case-sensitive (%EC.. exists, %ec.. is 404). Writing
the destination with UPPERCASE percent-encoding is preserved and resolves to 200.
Targets get the /docs prefix because Fumadocs serves content under /docs.
"""
import json, urllib.parse

PREFIX = "/docs"
redirects = {}
for line in open("public/_redirects", encoding="utf8"):
    p = line.split()
    if len(p) != 3 or not p[0].startswith("/books"):
        continue
    src, dst, _ = p
    dst = PREFIX + dst
    dst = urllib.parse.quote(urllib.parse.unquote(dst), safe="/%")
    dst = dst if dst.endswith("/") else dst + "/"
    for s in {src.rstrip("/"), src.rstrip("/") + "/"}:
        redirects[s] = {"source": s, "destination": dst, "permanent": True}

cfg = json.load(open("vercel.json", encoding="utf8"))
cfg["redirects"] = [redirects[k] for k in sorted(redirects)]
json.dump(cfg, open("vercel.json", "w", encoding="utf8"), indent=2, ensure_ascii=False)
print(len(redirects), "redirects written")
