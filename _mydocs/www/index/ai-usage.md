---
layout:         page
title:          Index AI Usage
menu_title:     AI Usage
published:      true
date:           2026-07-03
modified:       2026-07-03
order:          /website/index/02-ai-usage
---

OKVIZ Index is built for people first, but it is intentionally friendly to AI assistants too. AI helps OKVIZ create and maintain the catalog, and the public catalog is designed to be read by AI systems without scraping the website.

## How OKVIZ Uses AI

OKVIZ uses AI-assisted processes to improve coverage, consistency, and maintenance speed across the Index.

The main uses are:

- **Catalog creation:** AI helps collect, normalize, and maintain public information about Power BI visuals.
- **Reviews and ratings:** AI helps summarize evidence, draft review details, and identify visual features that would be slow to inspect manually.
- **Quality checks:** AI-assisted output is treated as guidance and checked against public evidence, metadata, and visible signals before it is used in the Index.

> **NOTE:** AI can produce incomplete, outdated, or incorrect results. OKVIZ uses public evidence as a guardrail and applies corrections when evidence or assigned values are inaccurate.

## How You Can Use AI

LLMs and agents can use machine-readable resources instead of scraping OKVIZ pages. These resources are designed to make public OKVIZ content easier to retrieve, summarize, compare, and cite.

Available resources include:

- [llms.txt](https://okviz.com/llms.txt): entry point that tells agents where the AI-readable resources are.
- [AI catalog](https://index.okviz.com/v1/public/ai/catalog.json): compact JSON catalog optimized for retrieval and comparison workflows.
- [Usage policy](https://index.okviz.com/v1/public/ai/policy.json): usage, attribution, and redistribution rules for automated consumers.
- [Sitemap](https://okviz.com/sitemap.xml): public URL inventory for crawlers, search engines, and retrieval systems.

Use these resources to reference public OKVIZ content, compare visuals, or build summaries. Do not treat AI-generated summaries, ratings, or recommendations as a final decision source without validating the underlying visual, licensing, security, performance, and report requirements.

## Responsibility

AI-assisted summaries can help narrow a search, but they can also miss context or overstate what public evidence supports. OKVIZ disclaims responsibility for decisions made only on AI-generated summaries, ratings, or recommendations.
