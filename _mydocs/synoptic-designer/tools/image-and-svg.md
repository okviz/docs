---
layout:             page
title:              Image and SVG
published:          true
date:               2026-06-08
modified:           2026-07-06
order:              /synoptic-designer/03/09
toc_h_max:          3
next_reading:       true
---

Use ***Image*** to choose a local SVG or bitmap file while already editing.

<img src="/synoptic-designer/tools/images/tool-image-and-svg-guide.png" />

If you choose a supported bitmap, it replaces the active tracing image. If you choose an SVG in an empty document, it becomes the editable document source. If you choose an SVG in a non-empty document, it is inserted as editable SVG content, centered on the artboard, with supported child areas available immediately in the ***Areas*** tree.

Imported SVG markup is sanitized before it reaches the canvas. When imported source IDs already exist in the current document, Synoptic Designer adds sequential suffixes so the new areas keep unique IDs.
